import type { AxisKey, ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';

const axes: AxisKey[] = ['est', 'rep', 'pod', 'imi', 'dip', 'int', 'eco', 'con', 'com', 'rel', 'mor', 'tec'];
const reviewedOn = '2026-10-08';
export type HistoricalCountryBatch10Entry = ReferenceEntry & {
  kind: 'country'; category: 'historical-country';
  documentaryReview: {
    status: 'author-reviewed-bounded-claims'; reviewedOn: string;
    independentReview: 'accepted-bounded-primary-and-identity'; scope: string;
  };
  unknownAxisReasons: Partial<Record<AxisKey, string>>;
};
const source = (title: string, url: string, note: string): ReferenceSource => ({ title, url, note });
const claim = (
  sourceTitle: string, locator: string, statement: string,
  basis: 'norm' | 'practice' | 'declaration', publishedDate: string,
) => ({ sourceTitle, locator, statement, basis, publishedDate, accessedDate: reviewedOn });
function profile(
  entry: Pick<ReferenceEntry, 'id' | 'name' | 'aliases' | 'period' | 'rationale' | 'caveats' | 'sources'>,
  inputs: Omit<ReferenceAxisCoding, 'reviewedOn'>[],
  reviewScope: string,
  unknownAxisReasons: Partial<Record<AxisKey, string>> = {},
): HistoricalCountryBatch10Entry {
  const result: HistoricalCountryBatch10Entry = {
    ...entry, kind: 'country', category: 'historical-country',
    vec: Object.fromEntries(axes.map(axis => [axis, 50])) as Record<AxisKey, number>,
    evidence: {}, axisEvidence: {}, coding: {},
    documentaryReview: { status: 'author-reviewed-bounded-claims', reviewedOn, independentReview: 'accepted-bounded-primary-and-identity', scope: reviewScope },
    unknownAxisReasons: {},
  };
  for (const input of inputs) {
    if (result.coding![input.axis]) throw new Error(`${entry.id}: duplicate axis coding`);
    const coded = codeReferenceAxis({ ...input, reviewedOn }, entry.sources);
    result.vec[input.axis] = coded.value;
    result.evidence[input.axis] = coded.evidence;
    result.axisEvidence![input.axis] = coded.axisEvidence;
    result.coding![input.axis] = coded.coding;
  }
  for (const axis of axes) if (!result.coding![axis]) {
    result.unknownAxisReasons[axis] = unknownAxisReasons[axis]
      ?? 'As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.';
  }
  return result;
}

type Row = [AxisKey, ReferenceAxisCoding['position'], string, string, string, string];
function normRows(title: string, date: string, rows: Row[]): Omit<ReferenceAxisCoding,'reviewedOn'>[] {
  return rows.map(([axis,position,locator,statement,rationale,uncertainty])=>({axis,position,confidence:'medium',claims:[claim(title,locator,statement,'norm',date)],rationale,uncertainty}));
}
const title = 'Constituição uruguaia1918 — transcrição parlamentar, vigência1919';
export const historicalCountryBatch10: HistoricalCountryBatch10Entry[] = [profile({
 id:'uruguay-dual-executive-order-1919',name:'Uruguai — ordem do Executivo compartilhado',aliases:['Uruguai — Conselho Nacional de Administração1919–1933'],
 period:'1março1919–ruptura31março1933; recorte normativo original plebiscitado25novembro1917',
 rationale:'Presidência e Conselho compartilham Executivo; golpe dissolve Conselho e parlamento. Estrutura efetiva distingue este recorte da primeira ordem1830, sem criar país por emenda.',
 caveats:'Norma não é auditoria integral da prática1919–1933. Sufrágio feminino depende de lei especial10 e primeiro Executivo é escolhido parlamentarmente pelas disposiçõesD/E; não sufrágio universal imediato. Administração de serviços públicos100 e liberdade industrial171 não determinam propriedade predominante em toda economia; eco desconhecido. Autonomia local não foi convertida automaticamente em federalismo.',
 sources:[
 source(title,'https://biblioteca.parlamento.gub.uy/File/biblioteca/Constituciones/1917/1917%20Constitucion%20-%20OCR.pdf','Fonte primária em transcrição/OCR parlamentar8páginas efetivamente lida:5–12,19/26–27,70–82,97–100,130–145,146–173,transitóriasA–I. Cotejo de passagens com Cervantes; não scan original completo.'),
 source('Constitución de1918 — Biblioteca Cervantes','https://www.cervantesvirtual.com/obra-visor/constitucion-de-1918/html/ede0ff47-9171-4208-988f-ff320585a241_2.html','Texto primário republicado realmente aberto e passagens relevantes recuperadas em corpo indexado. Cabeçalho1918 com plebiscito25novembro1917; transitóriaA fixa início1março1919.'),
 source('1933: golpe e intervenção da Corte Electoral — Corte Electoral','https://www.gub.uy/corte-electoral/comunicacion/publicaciones/1933-golpe-estado-intervencion-corte-electoral','Corpo institucional17junho2024 realmente lido:31março1933 decreto dissolve Assembleia e Conselho; retrospectiva institucional baseada em pesquisa, não leitura do decreto original.')
 ]
},[
 ...normRows(title,'1917-11-25',[
 ['rep','moderate-first','Arts.9–12,19,26–27,70–82; transitóriasD/E','Voto secreto/proporcional e representantes eleitos; Presidente e Conselho em regra eleitos diretamente, com participação minoritária no Conselho.','Representação competitiva especificada sustenta desenho democrático moderado.','Voto feminino depende de autorização10; suspensões12, Senado indireto27 e primeira eleição parlamentarD/E. Não prática eleitoral integral.'],
 ['pod','moderate-second','Arts.146–168; contrapontos79(19),80,154,168','Carta protege processo, defesa, habeas corpus, privacidade e expressão sem censura prévia; urgência e suspensão têm controle parlamentar e limites.','Garantias gerais/processuais sustentam liberdade normativa moderada.','Prisão154 é de cidadãos, com flagrante/semiplena prova e ordem; direitos146 incluem habitantes. Medidas urgentes79(19) requerem relatório24h e controle Assembleia/Comissão; não ausência de repressão observada.'],
 ['rel','moderate-first','Art.5','Estado não sustenta religião e cultos são livres; reconhece templos católicos antes financiados e isenta templos religiosos de impostos.','Ausência de religião sustentada pelo Estado e pluralidade de cultos sustentam secularismo moderado.','Patrimônio católico e isenção de templos são contrapontos; não hostilidade religiosa ou ausência de toda cooperação estatal.']
 ]),
 {axis:'imi',position:'moderate-second',confidence:'medium',relatedQuestionIds:['imigracao_18'],rationale:'Entrada e residência admitidas por norma geral sustentam dimensão de abertura migratória moderada.',uncertainty:'Leis de polícia e direitos de terceiros172 limitam ingresso; cidadania8 exige profissão/capital e residência. Não se infere igualdade cultural irrestrita ou prática de acolhimento.',claims:[claim(title,'Art.172; contraponto8','Carta permite entrada, permanência e saída de toda pessoa, observadas leis de polícia e direitos de terceiros; cidadania tem requisitos distintos.','norm','1917-11-25')]}
], 'Passagens primárias parlamentares e cronologia institucional cotejadas independentemente; prática histórica integral não auditada.')];
export const historicalCountryBatch10Audit = historicalCountryBatch10.map(entry=>({id:entry.id,documentedAxes:Object.keys(entry.coding??{}),unknownAxes:axes.filter(axis=>!entry.coding?.[axis]),independentReview:'accepted-bounded-primary-and-identity'}));
