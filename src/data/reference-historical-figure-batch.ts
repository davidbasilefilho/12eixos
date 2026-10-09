import type { ReferenceEntry, ReferenceSource } from './references';
import { AXES } from '../lib/scoring';
import { codeReferenceAxis, type ReferenceAxisCoding, type AuditableAxisCoding } from '../lib/reference-coding';

/** Source-bounded author positions, not inferred questionnaire responses. */
interface HistoricalFigureSpec {
  id: string;
  name: string;
  period: string;
  rationale: string;
  caveats: string;
  sources: ReferenceSource[];
  coding: ReferenceAxisCoding[];
  uncoded: string[];
}

const reviewedOn = '2026-10-07';
const source = (title: string, url: string, note: string): ReferenceSource => ({ title, url, note });
const coding = (axis: ReferenceAxisCoding['axis'], position: ReferenceAxisCoding['position'], confidence: ReferenceAxisCoding['confidence'], sourceTitle: string, publishedDate: string, locator: string, statement: string, rationale: string, uncertainty: string): ReferenceAxisCoding => ({
  axis, position, confidence, claims: [{ sourceTitle, locator, statement, basis: 'declaration', publishedDate, accessedDate: reviewedOn }], rationale, uncertainty, reviewedOn,
});

const goldman = 'Anarchism and Other Essays — Emma Goldman, 1910';
const thoreau = 'Resistance to Civil Government — Henry David Thoreau, 1849';
const morris = 'Useful Work versus Useless Toil — William Morris, 1884';
const godwin = 'An Enquiry Concerning Political Justice, vol. I — William Godwin, 1793';

export const historicalFigureBatchSpecs: HistoricalFigureSpec[] = [
  {
    id: 'emma-goldman', name: 'Emma Goldman', period: 'Ensaios autorais reunidos em Anarchism and Other Essays, 1910',
    rationale: 'O recorte relaciona associação voluntária, crítica à coerção, acesso comum a recursos e autonomia das mulheres.',
    caveats: 'A crítica ao voto não é autocracia. A compreensão de violência revolucionária impede presumir pacifismo absoluto. Usamos os ensaios autorais, não a biografia de Havel; não descrevemos toda a vida.',
    sources: [
      source(goldman, 'https://www.gutenberg.org/files/2162/2162-h/2162-h.htm', 'Texto primário; edição reúne prefácio, ensaios e biografia de terceiro, distinguidos na codificação.'),
      source('The Papers of Emma Goldman — National Archives', 'https://www.archives.gov/nhprc/projects/catalog/emma-goldman', 'Identidade e período de vida 1869–1940; descrição do projeto documental, sem atribuição de scores.'),
    ],
    coding: [
      coding('pod', 'strong-second', 'high', goldman, '1910', 'Anarchism: What It Really Stands For; parágrafos iniciados Anarchism, then e Anarchism stands for', 'Defende associação livre e libertação da restrição governamental.', 'Oposição constitutiva à coerção sustenta liberdade forte.', 'É programa filosófico, não medida de execução; não elimina conflitos reais.'),
      coding('eco', 'moderate-first', 'medium', goldman, '1910', 'Anarchism: What It Really Stands For; parágrafo Anarchism stands for a social order', 'Defende acesso comum à terra e às necessidades da vida.', 'Provisão social comum desloca o eixo da propriedade exclusiva.', 'Associação voluntária não é nacionalização nem plano estatal; tradução ao eixo é parcial.'),
      coding('rel', 'strong-first', 'high', goldman, '1910', 'Anarchism: What It Really Stands For; parágrafos Religion, the dominion e Anarchism, then', 'Rejeita domínio religioso sobre a mente e sua legitimação da submissão.', 'A emancipação da autoridade religiosa é parte explícita do programa.', 'Não inferida da ascendência; posição autoral não descreve religiosidade de uma população.'),
      coding('mor', 'moderate-first', 'medium', goldman, '1910', 'Marriage and Love; abertura e parágrafo Marriage is primarily an economic arrangement', 'Contesta casamento como dependência feminina e defende amor livre.', 'Autonomia conjugal sustenta progressismo neste subtema documentado.', 'Um subtema não cobre todo o eixo moral; não extrapolar identidade de gênero, aborto ou outros costumes.'),
    ],
    uncoded: ['rep: oposição ao majoritarismo e ao parlamentarismo não demonstra autocracia.', 'dip: anti-militarismo coexiste com discussão justificadora de violência política; não generalizar.', 'est/con: associação livre não especifica federação estatal nem planejamento.', 'imi/int/com/tec: ausência de cobertura suficiente no recorte.'],
  },
  {
    id: 'henry-david-thoreau', name: 'Henry David Thoreau', period: 'Resistance to Civil Government, publicado em 1849',
    rationale: 'O ensaio põe consciência individual e resistência à escravidão acima da obediência automática à lei.',
    caveats: 'O recorte é um ensaio de 1849, não toda a obra. Rejeição da guerra ao México não equivale a pacifismo absoluto. A crítica às maiorias não autoriza classificá-lo como autocrata.',
    sources: [
      source(thoreau, 'https://www.gutenberg.org/files/71/71-h/71-h.htm', 'Texto primário; cabeçalho identifica ano e título original. Reedição intitulada On the Duty of Civil Disobedience.'),
      source('1850 Census Entry for Henry David Thoreau and Family — National Archives', 'https://www.archives.gov/dc/highlights/thoreau-census', 'Registro censitário e identificação 1817–1862; serve apenas para identidade histórica.'),
    ],
    coding: [
      coding('pod', 'moderate-second', 'high', thoreau, '1849', 'Parágrafos iniciados But, to speak practically e Can there not be a government', 'Exige governo melhor e recusa abandonar a consciência ao legislador.', 'Limita obediência estatal em favor do julgamento individual.', 'Ainda admite governo melhor; não fornece catálogo completo de liberdades modernas.'),
      coding('mor', 'moderate-first', 'medium', thoreau, '1849', 'Parágrafos How does it become a man e This people must cease to hold slaves', 'Recusa associação a governo escravista e exige fim da escravidão.', 'A emancipação rompe uma hierarquia social material do período.', 'Abolicionismo cobre parte do eixo; não inferir igualdade de gênero ou costumes não discutidos.'),
    ],
    uncoded: ['rep: texto critica votação e maiorias, sem definir modelo representativo comparável.', 'dip/int: oposição à invasão do México é contextual, não plataforma universal.', 'com: admite não reagir a tarifas isoladas; não estabelece doutrina comercial.', 'est/imi/eco/con/rel/tec: sem suporte suficiente; naturalismo não é pontuação tecnológica.'],
  },
  {
    id: 'william-morris', name: 'William Morris', period: 'Conferência Useful Work versus Useless Toil, 1884',
    rationale: 'Morris propõe meios produtivos comunitários e produção orientada às necessidades, com redução de trabalho desperdiçado.',
    caveats: 'Conferência normativa, não programa implementado. A produção artesanal de sua firma não determina posição sobre tecnologia. A crítica parlamentar biográfica não codifica automaticamente representação.',
    sources: [
      source(morris, 'https://www.marxists.org/archive/morris/works/1884/useful.htm', 'Transcrição de texto primário de 1884; frases iniciais identificam as passagens sem depender de linhas do navegador.'),
      source('Introducing William Morris — Victoria and Albert Museum', 'https://www.vam.ac.uk/articles/introducing-william-morris', 'Contexto biográfico 1834–1896 e atividade pública; usado para identidade e limites, não como substituto do texto autoral.'),
    ],
    coding: [
      coding('eco', 'strong-first', 'high', morris, '1884', 'Parágrafo iniciado The first step towards making labour attractive', 'Propõe terra, maquinaria e fábricas nas mãos da comunidade para benefício comum.', 'Transformação abrangente da propriedade produtiva sustenta posição pública/social forte.', 'Propriedade comunitária não identifica obrigatoriamente administração pelo Estado central.'),
      coding('con', 'moderate-first', 'medium', morris, '1884', 'Parágrafos iniciados But when revolution has made it e The first step towards making labour attractive', 'Substitui produção para lucro por deliberação sobre necessidades e uso coletivo do trabalho.', 'Coordenação por necessidades coletivas sustenta planejamento moderado.', 'Não apresenta um mecanismo completo de preços, alocação ou plano central; não codificar intensidade máxima.'),
    ],
    uncoded: ['tec: aceita maquinaria útil e ciência, embora privilegie trabalho agradável; subtemas insuficientes.', 'dip: crítica a rivalidades militares não é programa abrangente de diplomacia.', 'est/rep/pod/imi/int/com/rel/mor: não inferir a partir de socialismo ou biografia artística.'],
  },
  {
    id: 'william-godwin', name: 'William Godwin', period: 'An Enquiry Concerning Political Justice, volume I, edição de 1793',
    rationale: 'O recorte privilegia julgamento privado e limita coerção política aos casos de necessidade.',
    caveats: 'A primeira edição de 1793 é distinta das revisões posteriores. A codificação não abrange o volume II, nem deduz toda a doutrina econômica do rótulo anarquista.',
    sources: [
      source(godwin, 'https://oll-resources.s3.us-east-2.amazonaws.com/oll3/store/titles/90/Godwin_0164-01_EBk_v6.0.pdf', 'Texto primário em edição digital da Online Library of Liberty; página 2 do PDF identifica edição londrina de 1793. Páginas citadas abaixo são da edição digital, numeradas no rodapé.'),
      source('William Godwin — Stanford Encyclopedia of Philosophy', 'https://plato.stanford.edu/entries/godwin/', 'Biografia e cronologia: morte em abril de 1836; usada para identidade e diferenças de edição, sem definir valores.'),
    ],
    coding: [
      coding('pod', 'moderate-second', 'high', godwin, '1793', 'Livro III, cap. VII, p. 102; Livro IV, cap. I Of Resistance, pp. 104–105 da edição digital OLL', 'Limita interferência no julgamento privado à necessidade absoluta e prefere debate à força.', 'Presunção contra coerção sustenta direção de liberdade.', 'Admite força em emergência e punição necessária (p. 77); não presume abolição imediata de toda proteção coletiva.'),
    ],
    uncoded: ['dip: contribuição voluntária para guerras é argumento de consciência, não oposição absoluta a defesa.', 'rep: crítica à autoridade não implica autocracia nem desenho democrático completo.', 'est/imi/int/eco/con/com/rel/mor/tec: não codificados por passagens lidas no volume I.'],
  },
];

export const historicalFigureBatchCoding: Record<string, AuditableAxisCoding[]> = {};
export const historicalFigureBatch: ReferenceEntry[] = historicalFigureBatchSpecs.map(spec => {
  const entry: ReferenceEntry = {
    id: spec.id, name: spec.name, kind: 'person', category: 'historical-figure', period: spec.period,
    rationale: spec.rationale, caveats: spec.caveats, sources: spec.sources,
    vec: Object.fromEntries(AXES.map(({ key }) => [key, 50])) as ReferenceEntry['vec'], evidence: {}, axisEvidence: {}, coding: {},
  };
  historicalFigureBatchCoding[spec.id] = spec.coding.map(input => {
    const coded = codeReferenceAxis(input, spec.sources);
    entry.vec[input.axis] = coded.value;
    entry.evidence[input.axis] = coded.evidence;
    entry.axisEvidence![input.axis] = coded.axisEvidence;
    entry.coding![input.axis] = coded.coding;
    return coded.coding;
  });
  return entry;
});
