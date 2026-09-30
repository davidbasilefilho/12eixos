import type { AnswerValue } from '../lib/scoring';

export type QuizVariant = 36 | 60 | 240;
export type QuizProgress = {
  variant: QuizVariant;
  answers: Record<string, AnswerValue>;
  order: string[];
  index: number;
  completed: boolean;
  updatedAt: number;
};

const PREFIX = '12eixos:quiz:v1:';
const answerValues = new Set<AnswerValue>(['STRONGLY_AGREE', 'AGREE', 'NEUTRAL', 'DISAGREE', 'STRONGLY_DISAGREE']);

function shuffledQuestionIds(questionIds: readonly string[]): string[] {
  const order = [...questionIds];
  for (let index = order.length - 1; index > 0; index--) {
    const other = Math.floor(Math.random() * (index + 1));
    [order[index], order[other]] = [order[other], order[index]];
  }
  return order;
}

export function createQuizProgress(variant: QuizVariant, questionIds: readonly string[]): QuizProgress {
  if (questionIds.length !== variant || new Set(questionIds).size !== variant) {
    throw new RangeError(`Expected ${variant} unique question IDs for this quiz variant.`);
  }
  return { variant, answers: {}, order: shuffledQuestionIds(questionIds), index: 0, completed: false, updatedAt: Date.now() };
}

function isComplete(variant: QuizVariant, order: readonly string[], answers: Record<string, AnswerValue>): boolean {
  return order.length === variant
    && new Set(order).size === variant
    && Object.keys(answers).every(id => order.includes(id))
    && Object.values(answers).every(answer => answerValues.has(answer))
    && order.every(id => answers[id] !== undefined);
}

/** Mark a session complete only after every item, including the final answer, is present. */
export function completeQuizProgress(progress: QuizProgress, answers: Record<string, AnswerValue>): QuizProgress | null {
  if (!isComplete(progress.variant, progress.order, answers)) return null;
  return {
    ...progress,
    answers: { ...answers },
    index: progress.variant - 1,
    completed: true,
    updatedAt: Date.now(),
  };
}

export function isQuizProgressComplete(progress: Pick<QuizProgress, 'variant' | 'order' | 'answers' | 'index' | 'completed'>): boolean {
  return progress.completed && progress.index === progress.variant - 1 && isComplete(progress.variant, progress.order, progress.answers);
}

/** Restore an unfinished run; a completed run is freshened only for an explicit start at question one. */
export function getQuizProgressForRoute(
  variant: QuizVariant,
  questionIds: readonly string[],
  questionNumber: number,
): QuizProgress {
  const restored = loadQuizProgress(variant, questionIds);
  const shouldStartNew = !restored || (isQuizProgressComplete(restored) && questionNumber === 1);
  const progress = shouldStartNew ? createQuizProgress(variant, questionIds) : restored;
  return { ...progress, index: Math.max(0, Math.min(questionNumber, variant) - 1) };
}

export function getQuizResumeQuestion(variant: QuizVariant, questionIds: readonly string[]): number {
  const progress = loadQuizProgress(variant, questionIds);
  return progress && !isQuizProgressComplete(progress) ? progress.index + 1 : 1;
}

export function loadQuizProgress(variant: QuizVariant, questionIds: readonly string[]): QuizProgress | null {
  try {
    const raw = localStorage.getItem(`${PREFIX}${variant}`);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return null;
    const value = parsed as Partial<QuizProgress>;
    if (value.variant !== variant || !Number.isInteger(value.index) || value.index! < 0 || value.index! >= variant || !value.answers || typeof value.answers !== 'object' || Array.isArray(value.answers)) return null;
    if (Object.values(value.answers).some(answer => !answerValues.has(answer))) return null;
    const storedOrder = Array.isArray(value.order) ? value.order : [];
    const hasValidOrder = storedOrder.length === questionIds.length
      && storedOrder.length === variant
      && storedOrder.every(id => typeof id === 'string')
      && new Set(storedOrder).size === questionIds.length
      && questionIds.every(id => storedOrder.includes(id));
    if (!hasValidOrder) return null;
    if (Object.keys(value.answers).some(id => !storedOrder.includes(id))) return null;
    const progress = {
      variant,
      answers: value.answers as Record<string, AnswerValue>,
      order: storedOrder as string[],
      index: value.index!,
      completed: value.completed === true,
      updatedAt: typeof value.updatedAt === 'number' && Number.isFinite(value.updatedAt) ? value.updatedAt : 0,
    } satisfies QuizProgress;
    return {
      ...progress,
      // A stale or partial completion marker must never turn the last item into a finished run.
      completed: isQuizProgressComplete(progress),
    };
  } catch {
    return null;
  }
}

export function saveQuizProgress(progress: QuizProgress): void {
  if (!progress.answers || typeof progress.answers !== 'object'
    || !Array.isArray(progress.order)
    || progress.order.length !== progress.variant
    || progress.order.some(id => typeof id !== 'string')
    || new Set(progress.order).size !== progress.variant
    || !Number.isInteger(progress.index)
    || progress.index < 0
    || progress.index >= progress.variant
    || Object.keys(progress.answers).some(id => !progress.order.includes(id))
    || Object.values(progress.answers).some(answer => !answerValues.has(answer))) return;
  try {
    localStorage.setItem(`${PREFIX}${progress.variant}`, JSON.stringify({
      ...progress,
      completed: isQuizProgressComplete(progress),
      updatedAt: Date.now(),
    }));
  } catch { /* Private browsing or disabled storage must not block the quiz. */ }
}

export function clearQuizProgress(variant: QuizVariant): void {
  try { localStorage.removeItem(`${PREFIX}${variant}`); } catch { /* Storage may be disabled. */ }
}

export function nextQuestionIndex(index: number, total: number): number {
  return Math.min(index + 1, total - 1);
}

export function previousQuestionIndex(index: number): number {
  return Math.max(0, index - 1);
}
