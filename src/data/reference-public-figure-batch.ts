/** Bounded promotion of documentary research using the explicit ordinal codebook. */
import { publicFigureResearch } from './reference-public-research';
import type { AxisKey, ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type EditorialPosition } from '../lib/reference-coding';

const axes: AxisKey[] = ['est', 'rep', 'pod', 'imi', 'dip', 'int', 'eco', 'con', 'com', 'rel', 'mor', 'tec'];

// No direction is deduced from a person's occupation, religion, biography or party.
const positions: Record<string, Partial<Record<AxisKey, EditorialPosition>>> = {
  'ilhan-omar': { imi: 'moderate-second', eco: 'moderate-first', con: 'moderate-first', dip: 'moderate-second' },
  'rashida-tlaib': { rep: 'moderate-first', imi: 'moderate-second', pod: 'moderate-second', mor: 'moderate-first' },
  'ayanna-pressley': { eco: 'moderate-first', con: 'moderate-first', mor: 'moderate-first', dip: 'moderate-second', imi: 'moderate-second' },
  'ro-khanna': { eco: 'moderate-first', con: 'moderate-first' },
};

const scopeLimits: Partial<Record<AxisKey, string>> = {
  rep: 'Direito ao voto é um componente da representação, sem autorizar inferir todo o desenho democrático.',
  imi: 'Inclusão jurídica e acesso a instituições sustentam somente orientação moderada contra exclusão, sem equivalência perfeita com toda integração cultural.',
  eco: 'O polo público abrange estes serviços ou empregos públicos; financiamento não demonstra nacionalização da economia.',
  con: 'Coordenação e investimento públicos setoriais sustentam intensidade moderada; licença trabalhista isolada não implica planejamento da produção.',
  mor: 'A proteção citada cobre uma faceta de costumes e direitos; não constitui posição extrema sobre todo o eixo.',
  dip: 'Militarismo e pacifismo não são sinônimos do eixo não intervenção; posições seletivas ou último recurso são preservadas.',
};

export const publicFigureBatch: ReferenceEntry[] = publicFigureResearch.map(dossier => {
  const sources: ReferenceSource[] = dossier.sources.map(source => ({
    title: source.title, url: source.url,
    note: `${source.publisher}. Publicação: ${source.publicationDate ?? 'sem data indicada'}. Consulta documental em 7/10/2026; posições declaradas, não prova de implementação.${dossier.id === 'ilhan-omar' ? ' Leitura original pelo agente de pesquisa; a tentativa independente de reabertura retornou 403.' : ''}`,
  }));
  const vec = Object.fromEntries(axes.map(axis => [axis, 50])) as Record<AxisKey, number>;
  const evidence: ReferenceEntry['evidence'] = {};
  const axisEvidence: NonNullable<ReferenceEntry['axisEvidence']> = {};
  const coding: NonNullable<ReferenceEntry['coding']> = {};
  const supportedClaims: string[] = [];
  for (const item of dossier.claims) {
    const position = positions[dossier.id][item.axis];
    if (!position) continue;
    const source = dossier.sources.find(source => source.id === item.sourceId);
    if (!source) throw new Error(`Missing documentary source for ${dossier.id}/${item.axis}`);
    const uncertainty = [item.limitation, scopeLimits[item.axis], 'Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação.'].filter(Boolean).join(' ');
    const coded = codeReferenceAxis({
      axis: item.axis, position, confidence: 'medium',
      claims: [{ sourceTitle: source.title, locator: item.locator, statement: item.observation, basis: 'declaration', publishedDate: source.publicationDate ?? 'Sem data indicada; conteúdo disponível em 7/10/2026', accessedDate: dossier.retrievedAt }],
      rationale: `${item.observation} A âncora expressa a direção e intensidade delimitadas dessa proposta.`,
      uncertainty, reviewedOn: '2026-10-07',
    }, sources);
    vec[item.axis] = coded.value;
    evidence[item.axis] = coded.evidence;
    axisEvidence[item.axis] = coded.axisEvidence;
    coding[item.axis] = coded.coding;
    supportedClaims.push(item.observation);
  }
  const excluded = dossier.id === 'rashida-tlaib' ? 'A proposta de crédito tributário e salário mínimo foi preservada apenas no dossiê: não demonstra planejamento econômico suficientemente específico.' : dossier.id === 'ro-khanna' ? 'Tecnologia, comércio e diplomacia militar continuam desconhecidos. Regulação de IA não cobre todo o construto; tarifas seletivas com exceções e defesa militar seletiva não demonstram intensidade central equilibrada.' : '';
  return {
    id: dossier.id, kind: 'person', category: 'public-figure', name: dossier.name,
    period: dossier.scope, vec, evidence, axisEvidence, coding, sources,
    rationale: supportedClaims.join(' '),
    caveats: `${dossier.caveats} ${excluded} Âncoras são classes editoriais, não medições da pessoa. Eixos ausentes são desconhecidos. Nenhum destes perfis possui os seis eixos exigidos para matches.`,
  };
});
