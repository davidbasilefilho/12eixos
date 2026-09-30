/** The URL and the original questionnaire encode the percentage toward each left pole. */
export const AXES = [
  { id: 'estrutura', key: 'est', label: 'Estrutura', left: 'Federal', right: 'Unitário' },
  { id: 'representacao', key: 'rep', label: 'Representação', left: 'Democracia', right: 'Autocracia' },
  { id: 'poder', key: 'pod', label: 'Poder', left: 'Segurança', right: 'Liberdade' },
  { id: 'imigracao', key: 'imi', label: 'Imigração', left: 'Assimilação', right: 'Multicultura' },
  { id: 'diplomacia', key: 'dip', label: 'Diplomacia', left: 'Militarista', right: 'Pacifista' },
  { id: 'intervencao', key: 'int', label: 'Intervenção', left: 'Não intervencionista', right: 'Nacionalista' },
  { id: 'economia', key: 'eco', label: 'Economia', left: 'Público', right: 'Privado' },
  { id: 'controle', key: 'con', label: 'Controle', left: 'Planejamento', right: 'Livre mercado' },
  { id: 'comercio', key: 'com', label: 'Comércio', left: 'Protecionismo', right: 'Globalismo' },
  { id: 'religiao', key: 'rel', label: 'Religião', left: 'Irreligioso', right: 'Religioso' },
  { id: 'moral', key: 'mor', label: 'Moral', left: 'Progressista', right: 'Tradicionalista' },
  { id: 'tecnologia', key: 'tec', label: 'Tecnologia', left: 'Tecnologia', right: 'Biologia' },
] as const;

export type AxisKey = (typeof AXES)[number]['key'];
export type AxisScores = Record<AxisKey, number>;
export type AnswerValue = 'STRONGLY_AGREE' | 'AGREE' | 'NEUTRAL' | 'DISAGREE' | 'STRONGLY_DISAGREE';
export type ScoredQuestion = { id: string; axisId: string; agreePole: 'LEFT' | 'RIGHT'; weight: number };

export const ANSWER_OPTIONS: ReadonlyArray<{ value: AnswerValue; label: string; agreement: number }> = [
  { value: 'STRONGLY_AGREE', label: 'Concordo totalmente', agreement: 1 },
  { value: 'AGREE', label: 'Concordo', agreement: 0.75 },
  { value: 'NEUTRAL', label: 'Neutro ou Depende', agreement: 0.5 },
  { value: 'DISAGREE', label: 'Discordo', agreement: 0.25 },
  { value: 'STRONGLY_DISAGREE', label: 'Discordo totalmente', agreement: 0 },
] as const;

const agreement = Object.fromEntries(ANSWER_OPTIONS.map(option => [option.value, option.agreement])) as Record<AnswerValue, number>;
const axisKeyById = Object.fromEntries(AXES.map(axis => [axis.id, axis.key])) as Record<string, AxisKey>;
const round1 = (value: number) => Math.round(value * 10) / 10;

/** Weighted mean of contributions toward the left pole, matching the original ScoringService. */
export function scoreAnswers(questions: readonly ScoredQuestion[], answers: Record<string, AnswerValue>): AxisScores {
  const totals = Object.fromEntries(AXES.map(axis => [axis.key, { sum: 0, weight: 0 }])) as Record<AxisKey, { sum: number; weight: number }>;
  for (const question of questions) {
    const answer = answers[question.id];
    if (answer === undefined) continue;
    if (!Object.hasOwn(agreement, answer)) throw new Error(`Resposta inválida: ${String(answer)}`);
    const axisKey = axisKeyById[question.axisId];
    if (!axisKey) throw new Error(`Eixo inválido: ${question.axisId}`);
    if (!Number.isFinite(question.weight) || question.weight <= 0) throw new Error(`Peso inválido: ${question.id}`);
    const left = question.agreePole === 'LEFT' ? agreement[answer] : 1 - agreement[answer];
    totals[axisKey].sum += left * question.weight;
    totals[axisKey].weight += question.weight;
  }
  return Object.fromEntries(AXES.map(axis => {
    const { sum, weight } = totals[axis.key];
    return [axis.key, round1((weight ? sum / weight : 0.5) * 100)];
  })) as AxisScores;
}

export function parseResultSearch(search: string): AxisScores | null {
  const params = new URLSearchParams(search.startsWith('?') ? search.slice(1) : search);
  const scores = {} as AxisScores;
  for (const axis of AXES) {
    const raw = params.get(axis.key);
    if (raw === null) return null;
    const numeric = (raw.startsWith('"') && raw.endsWith('"')) || (raw.startsWith("'") && raw.endsWith("'"))
      ? raw.slice(1, -1)
      : raw;
    if (!/^(?:\d+(?:\.\d+)?|\.\d+)$/.test(numeric)) return null;
    const value = Number(numeric);
    if (!Number.isFinite(value) || value < 0 || value > 100) return null;
    scores[axis.key] = round1(value);
  }
  return scores;
}

export function resultSearch(scores: AxisScores): string {
  const params = new URLSearchParams();
  for (const axis of AXES) {
    const value = scores[axis.key];
    if (!Number.isFinite(value) || value < 0 || value > 100) throw new Error(`Score inválido: ${axis.key}`);
    params.set(axis.key, String(round1(value)));
  }
  return `?${params.toString()}`;
}

export function axisIntensity(leftPercent: number): 'Equilibrado' | 'Inclinado' | 'Forte' | 'Muito forte' {
  const distance = Math.abs(leftPercent - 50);
  if (distance < 7.5) return 'Equilibrado';
  if (distance < 22.5) return 'Inclinado';
  if (distance < 37.5) return 'Forte';
  return 'Muito forte';
}
