import type { AxisKey, ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';

const axes: AxisKey[] = ['est', 'rep', 'pod', 'imi', 'dip', 'int', 'eco', 'con', 'com', 'rel', 'mor', 'tec'];
const reviewedOn = '2026-10-07';
export type HistoricalCountryBatch06Entry = ReferenceEntry & {
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
): HistoricalCountryBatch06Entry {
  const result: HistoricalCountryBatch06Entry = {
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
export const historicalCountryBatch06: HistoricalCountryBatch06Entry[] = [
  profile({
  "id": "colombia-federal-1863",
  "name": "Colômbia — Estados Unidos federais",
  "aliases": [
    "Estados Unidos de Colombia"
  ],
  "period": "Federação1863–1886; âncora na Constituição8/5/1863, substituída por unidade constitucional5/8/1886",
  "rationale": "Reserva expressa de competências aos estados distingue esta federação do regime unitário posterior.",
  "caveats": "Codificação normativa editorial; não prova execução. Passagens codificadas e cronologia cotejadas independentemente; prática histórica não auditada integralmente. Não é continuidade democrática observada; guerras e ruptura1885 não recebem pontuações de prática. Transcrição primária em reedição2015; texto1886 usado somente para limite institucional.",
  "sources": [
    {
      "title": "Constituição colombiana1863 — transcrição Cervantes",
      "url": "https://www.cervantesvirtual.com/obra-visor/colombia-29/html/02613e70-82b2-11df-acc7-002185ce6064_1.html",
      "note": "Artigos1/15/16/20/21/23/25 efetivamente lidos; contém erros tipográficos."
    },
    {
      "title": "Constituição colombiana1886 — sistema jurídico de Bogotá",
      "url": "https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=7153",
      "note": "Cabeçalho5/8/1886 e artigo1 reconstituição unitária efetivamente lidos; cronologia, não códigos."
    },
    {
      "title": "Exposição constitucional1863 — Arquivo Geral da Colômbia",
      "url": "https://www.archivogeneral.gov.co/sites/default/files/exposiciones_patrimonio/ConstitucionesColombia/1863/Texto1863.pdf",
      "note": "Introdução histórica e sumário efetivamente lidos; não confundir sumário com texto completo dos artigos."
    }
  ]
}, normRows("Constituição colombiana1863 — transcrição Cervantes","1863-05-08",[
  [
    "est",
    "strong-first",
    "arts.16,20–21,25",
    "Competências não delegadas expressamente pertencem exclusivamente aos estados; estes podem anular atos federais por maioria legislativa.",
    "Reserva residual e contrapeso estadual sustentam federalismo forte.",
    "Há competências nacionais exclusivas e subordinação à Constituição; não independência absoluta."
  ],
  [
    "pod",
    "moderate-second",
    "art.15(1–4,6–7,13–14)",
    "Carta garante vida, devido processo, expressão e associação, com limites legais ao domicílio.",
    "Garantias contra coerção sustentam liberdade moderada.",
    "Não demonstra aplicação; guerra modifica parte das garantias patrimoniais e de viagem."
  ],
  [
    "rel",
    "moderate-first",
    "arts.15(16),23",
    "Cultos públicos e privados são livres; financiamento depende de contribuições voluntárias, sob inspeção pública.",
    "Pluralidade religiosa sem tributo para cultos sustenta secularidade moderada.",
    "Inspeção suprema do culto e exclusão de ministros de cargos pelo art.33 impedem leitura de separação absoluta."
  ]
]), "Passagens codificadas e cronologia cotejadas independentemente; prática histórica não auditada integralmente."),
  profile({
  "id": "uruguay-founder-constitution-1830",
  "name": "Uruguai — primeira ordem constitucional",
  "aliases": [
    "Estado Oriental del Uruguay1830"
  ],
  "period": "Primeira ordem constitucional18/7/1830–1/3/1919; âncora normativa1830, sem continuidade prática uniforme",
  "rationale": "Constituição presidencial com chefes departamentais nomeados; sucessora cria executivo bicéfalo.",
  "caveats": "Codificação normativa editorial; não prova execução. Passagens codificadas e cronologia cotejadas independentemente; prática histórica não auditada integralmente. Usa transcrição oficial OCR1830, não a página Cervantes de1829 emendada1912. A referência institucional a88anos é arredondada: cláusula transitóriaA da sucessora fixa1/3/1919. Guerras e governos excepcionais não viram aliases nem prova de execução.",
  "sources": [
    {
      "title": "Constituição uruguaia1830 — transcrição OCR parlamentar",
      "url": "https://biblioteca.parlamento.gub.uy/File/biblioteca/Constituciones/1830/1830%20Constitucion%20-%20OCR.pdf",
      "note": "Arts.5,11,18,110–121,123–129,130–147 efetivamente lidos; cabeçalho promulgação28/6/1830, vigência institucional18/7/1830."
    },
    {
      "title": "Evolução constitucional — Biblioteca do Parlamento uruguaio",
      "url": "https://biblioteca.parlamento.gub.uy/constitucion/",
      "note": "História institucional efetivamente lida; início18/7/1830, ruptura com executivo bicéfalo posterior."
    },
    {
      "title": "Constituição uruguaia1917 — disposição transitóriaA",
      "url": "https://biblioteca.parlamento.gub.uy/File/biblioteca/Constituciones/1917/1917%20Constitucion%20-%20OCR.pdf",
      "note": "CláusulaA efetivamente lida: sucessora vigora1/3/1919; usada somente para recorte."
    }
  ]
}, normRows("Constituição uruguaia1830 — transcrição OCR parlamentar","1830-06-28",[
  [
    "est",
    "moderate-second",
    "arts.118–121,123,127–129",
    "Chefes departamentais são agentes nomeados pelo Executivo; juntas locais eleitas operam com recursos e regulamento legais.",
    "Controle central da chefia departamental sustenta centralismo moderado.",
    "Juntas eleitas possuem funções próprias; não ausência de toda autonomia local."
  ],
  [
    "pod",
    "moderate-second",
    "arts.81,83,110–116,130,134–143",
    "Carta protege domicílio, correspondência e expressão e exige juiz para prisão, com suspensão excepcional delimitada.",
    "Salvaguardas civis e processuais sustentam liberdade moderada.",
    "Art.113 protege prisão do cidadão; demais garantias não apagam cidadania restrita. Art.81 admite medidas prontas com prestação de contas; art.83 admite arresto urgentíssimo com entrega ao juiz em24h. Responsabilidade posterior da imprensa e art.143 permanecem; não prova de prática."
  ],
  [
    "rel",
    "moderate-second",
    "arts.5,76",
    "Religião estatal católica é protegida no juramento presidencial.",
    "Religião oficial e obrigação presidencial sustentam confessionalidade moderada.",
    "Não autoriza inferir proibição universal de outros cultos ou governo clerical."
  ]
]), "Passagens codificadas e cronologia cotejadas independentemente; prática histórica não auditada integralmente."),
  profile({
  "id": "central-america-federation-1824",
  "name": "América Central — Federação constitucional",
  "aliases": [
    "Federación de Centro-américa",
    "República Federal de Centroamérica"
  ],
  "period": "Federação sob carta22/11/1824; dissolução gradual1838–1840, não data jurídica terminal única",
  "rationale": "Cinco estados federados possuíam legislaturas e constituições próprias; não se cria uma segunda identidade por reconhecimento diplomático1824.",
  "caveats": "Codificação normativa editorial; não prova execução. Passagens codificadas e cronologia cotejadas independentemente; prática histórica não auditada integralmente. Office of the Historian distingue dissolução1838–40 da retirada do último agente em1842. A transcrição do art.10 aparenta omissão OCR; não é usada como reserva residual. Carta1824, sem extrapolar emendas posteriores.",
  "sources": [
    {
      "title": "Constituição federal centro-americana1824 — transcrição UNAM",
      "url": "https://archivos.juridicas.unam.mx/www/bjv/libros/4/1541/9.pdf",
      "note": "Arts.6/8/11–12/14–15/21/175–178 efetivamente lidos; reediçãoUNAM2005 com erros OCR."
    },
    {
      "title": "Central American Federation — Office of the Historian",
      "url": "https://history.state.gov/countries/central-american-federation",
      "note": "Corpo institucional efetivamente lido: existência, cinco estados e dissolução1838–40; último agente1842 não estende funcionamento federativo."
    }
  ]
}, normRows("Constituição federal centro-americana1824 — transcrição UNAM","1824-11-22",[
  [
    "est",
    "moderate-first",
    "arts.6,8,177–178",
    "Estados têm assembleias que fazem constituições, leis e impostos próprios sob Constituição federal e limites comerciais nacionais.",
    "Poder legislativo e fiscal estadual sustenta federalismo moderado.",
    "Art.10 com aparente omissão não fundamenta intensidade; poderes nacionais e conformidade federal limitam autonomia."
  ],
  [
    "rel",
    "strong-second",
    "art.11",
    "Carta torna catolicismo oficial e exclui exercício público de outras religiões.",
    "Monopólio público explícito sustenta confessionalidade forte.",
    "Não prova perseguição praticada nem exclui crença privada pelo texto invocado."
  ],
  [
    "imi",
    "moderate-second",
    "arts.12,15",
    "Carta oferece asilo a estrangeiros e naturalização por residência, família, propriedade ou contribuição útil.",
    "Acolhimento declarado e vias de naturalização sustentam abertura moderada.",
    "Âncora do construto imigracao_18: abertura é segundo polo. Prazos e requisitos impedem cidadania imediata para todos; não mede entrada real."
  ]
]), "Passagens codificadas e cronologia cotejadas independentemente; prática histórica não auditada integralmente."),
];
