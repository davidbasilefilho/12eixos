import type { AxisKey, ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';

const axes: AxisKey[] = ['est', 'rep', 'pod', 'imi', 'dip', 'int', 'eco', 'con', 'com', 'rel', 'mor', 'tec'];
const reviewedOn = '2026-10-07';
export type HistoricalCountryBatch07Entry = ReferenceEntry & {
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
): HistoricalCountryBatch07Entry {
  const result: HistoricalCountryBatch07Entry = {
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
export const historicalCountryBatch07: HistoricalCountryBatch07Entry[] = [
  profile({
  "id": "mexico-central-republic-1835",
  "name": "México — República Central",
  "aliases": [
    "República Centralista de México"
  ],
  "period": "Regime centralista1835–1846; âncora normativa nas Siete Leyes1836, sem transferir pontuações à revisão1843",
  "rationale": "A ruptura do pacto federal distingue o regime da Primeira República Federal1824; uma só identidade centralista.",
  "caveats": "Codificação normativa editorial; prática não auditada integralmente. Revisão independente de passagens/identidade pendente. Cronologia terminal provém de exposição parlamentar2001,p.15, não decreto1846 cotejado. Compilação UNAM distingue1836/1843; não fabricar dois países pela troca formal do texto.",
  "sources": [
    {
      "title": "Siete Leyes1836 — texto primário, reedição UNAM",
      "url": "https://museodelasconstituciones.unam.mx/wp-content/uploads/2025/12/1836-Leyes-Constitucionales-de-la-Repu%CC%81blica-Mexicana.pdf",
      "note": "Texto normativo1836 efetivamente lido; introdução retrospectiva separada."
    },
    {
      "title": "Gaceta Parlamentaria25/9/2001 — exposição histórica de iniciativa",
      "url": "https://gaceta.diputados.gob.mx/PDF/58/2001/sep/20010925.pdf",
      "note": "Página15 efetivamente lida: regime unitário1835–1846 e restauração federal1846. Contexto retrospectivo parlamentar, não lei contemporânea nem cotejo de22/8/1846."
    }
  ]
}, normRows("Siete Leyes1836 — texto primário, reedição UNAM","1836-12-30",[
  [
    "est",
    "moderate-second",
    "SextaLei4–5,14–15",
    "Governadores subordinam-se ao governo geral que os nomeia; juntas têm competências legais limitadas.",
    "Subordinação executiva e fiscal sustenta centralismo moderado.",
    "Juntas departamentais são eleitas e exercem competências próprias; não eliminação de toda autonomia."
  ],
  [
    "pod",
    "moderate-second",
    "PrimeiraLei2(I–VII)",
    "Carta protege domicílio e publicação de ideias políticas sem censura prévia; prisão exige ordem salvo flagrante, com detenção política até três dias e judicial até dez dias motivada.",
    "Garantias processuais sustentam liberdade moderada.",
    "Direitos do mexicano, não universais; incisoII admite flagrante e autoridades políticas, com três dias até entrega ao juiz e dez dias de detenção judicial motivada. IncisoVII cobre publicação de ideias políticas, não expressão irrestrita, com responsabilidade posterior; religião obrigatória."
  ],
  [
    "rel",
    "moderate-second",
    "PrimeiraLei3(I),12",
    "Mexicanos devem professar religião pátria; estrangeiros devem respeitá-la.",
    "Obrigação religiosa sustenta confessionalidade moderada.",
    "Passagem não estabelece monopólio clerical nem prova prática persecutória; não inferir exclusão pública geral."
  ]
]), "Passagens codificadas e cronologia cotejadas independentemente; prática histórica não auditada integralmente."),
  profile({
  "id": "chile-original-charter-1833",
  "name": "Chile — ordem constitucional de1833",
  "aliases": [
    "República Chilena1833"
  ],
  "period": "Ordem constitucional25/5/1833–golpe11/9/1924; âncora exclusivamente no texto original1833",
  "rationale": "Ordem nacional com administração provincial subordinada; não outro país por emendas liberais ou parlamentarismo posterior.",
  "caveats": "Codificação normativa editorial; prática não auditada integralmente. Revisão independente de passagens/identidade pendente. BCN distingue sucessivas reformas desde1865 e golpe1924; não prolongar prática até carta1925. Fonte primária reproduz impressão1833, não edição1893 emendada. A história institucional contém menção contraditória15/5; cabeçalho/edição primária confirmam25/5.",
  "sources": [
    {
      "title": "Constituição chilena1833 — transcrição da edição original",
      "url": "https://www.cervantesvirtual.com/obra-visor/constitucion-de-la-republica-de-chile-jurada-y-promulgada-el-25-de-mayo-de-1833--0/html/ff2db0b2-82b1-11df-acc7-002185ce6064_2.html",
      "note": "Arts.3/5/116–117 efetivamente lidos; catálogo informa edição digital baseada em ImprentaLaOpinión1833."
    },
    {
      "title": "Constituição1833 — história política BCN",
      "url": "https://www.bcn.cl/historiapolitica/constituciones/detalle_constitucion?handle=10221.1/17685",
      "note": "Corpo institucional efetivamente lido; início25/5/1833, interrupção11/9/1924, reformas desde1865. LeyChile original carregou somente shell, não usado como leitura normativa."
    }
  ]
}, normRows("Constituição chilena1833 — transcrição da edição original","1833-05-25",[
  [
    "est",
    "moderate-second",
    "arts.3,116–117",
    "Intendente provincial é agente imediato do presidente; governador departamental subordina-se ao intendente.",
    "Administração territorial hierárquica sustenta centralismo moderado.",
    "Municípios existem; não ausência de toda esfera local nem leitura das emendas posteriores."
  ],
  [
    "rel",
    "strong-second",
    "art.5",
    "Catolicismo é religião oficial, com exclusão do exercício público das demais.",
    "Exclusão pública explícita sustenta confessionalidade forte.",
    "Não é proibição de crença privada; alterações posteriores não recebem este código original."
  ]
]), "Passagens codificadas e cronologia cotejadas independentemente; prática histórica não auditada integralmente."),
  profile({
  "id": "gran-colombia-union-1819",
  "name": "Grande Colômbia — República unida",
  "aliases": [
    "Gran Colombia",
    "República de Colombia1819"
  ],
  "period": "União criada17/12/1819, desagregada1830; âncora normativa na carta30/8/1821, executada6/10/1821",
  "rationale": "A união de Venezuela/Nova Granada e Quito difere da federação colombiana1863 e da hegemonia1886.",
  "caveats": "Codificação normativa editorial; prática não auditada integralmente. Revisão independente de passagens/identidade pendente. A história diplomática usa informalmente federation; o est deriva da estrutura constitucional1821, não desse rótulo. Ruptura autoritária1828 não é continuidade da carta nem novo alias automático. Datas de reconhecimento não redefinem fundação.",
  "sources": [
    {
      "title": "Constituição de Cúcuta1821 — transcrição Cervantes",
      "url": "https://www.cervantesvirtual.com/obra-visor/colombia-16/html/0260ce5e-82b2-11df-acc7-002185ce6064_1.html",
      "note": "Arts.150–164/183 efetivamente lidos; assinatura30/8/1821 e execução6/10/1821 distinguidas."
    },
    {
      "title": "Lei Fundamental da Colômbia1819 — documento arquivístico transcrito",
      "url": "https://www.cervantesvirtual.com/obra-visor/ley-fundamental-de-colombia-1819--0/html/ff6c28b0-82b1-11df-acc7-002185ce6064_2.html",
      "note": "Arts.1/5/8 e assinatura17/12/1819 efetivamente lidos; catálogo reproduz ArquivoLibertadorCaracas, tomo27f1."
    },
    {
      "title": "Colombia — Office of the Historian",
      "url": "https://history.state.gov/countries/colombia",
      "note": "Resumo institucional efetivamente lido confirma saída de Venezuela/Equador1830; usado para cronologia, não para chamar estrutura constitucional de federal."
    }
  ]
}, normRows("Constituição de Cúcuta1821 — transcrição Cervantes","1821-08-30",[
  [
    "est",
    "moderate-second",
    "arts.150–155",
    "Intendentes nomeados são agentes presidenciais; governadores subordinam-se e o Congresso regula municípios.",
    "Hierarquia territorial sustenta centralismo moderado.",
    "Municípios subsistem; união entre territórios não demonstra federação interna."
  ],
  [
    "pod",
    "moderate-second",
    "arts.156–164",
    "Carta protege expressão sem censura prévia, presunção de inocência e formalidades de prisão.",
    "Salvaguardas contra coerção sustentam liberdade moderada.",
    "Parte das garantias refere-se a colombianos/cidadãos; imprensa tem responsabilidade posterior, incomunicabilidade autorizada até3dias; não prova aplicação."
  ],
  [
    "imi",
    "moderate-second",
    "art.183",
    "Estrangeiros de qualquer nação são admitidos e protegidos, respeitadas as leis.",
    "Admissão declarada sustenta abertura moderada, segundo polo.",
    "Não concede cidadania instantânea nem mede movimento real de pessoas; direitos eleitorais não inferidos."
  ]
]), "Passagens codificadas e cronologia cotejadas independentemente; prática histórica não auditada integralmente."),
  profile({
  "id": "peru-bolivia-confederation-1836",
  "name": "Confederação Peru-Boliviana",
  "aliases": [
    "Confederación Perú-Boliviana"
  ],
  "period": "União decretada28/10/1836; lei fundamental1/5/1837; colapso1839 e sucessão constitucional peruana10/11/1839",
  "rationale": "Três repúblicas sob pacto comum criam uma unidade confederativa, não três registros artificiais da mesma experiência.",
  "caveats": "Codificação normativa editorial; prática não auditada integralmente. Revisão independente de passagens/identidade pendente. Portal parlamentar dá vigência jurídica do pacto até10/11/1839; isso não prova funcionamento de facto até essa data. Transição41–43 mantém plenos poderes e adia congresso após guerra; não inferir democracia de câmaras projetadas. Forças e presidentes locais submetem-se ao Protector.",
  "sources": [
    {
      "title": "Lei Fundamental Peru-Boliviana1837 — transcrição parlamentar",
      "url": "https://www3.congreso.gob.pe/Docs/sites/webs/quipu/constitu/1837co.htm",
      "note": "Arts.1–6/9–11/27–30/34–36/40–43 efetivamente lidos; preserva grafia e erros de codificação."
    },
    {
      "title": "Decreto de estabelecimento28/10/1836 — Congresso peruano",
      "url": "https://www3.congreso.gob.pe/Docs/sites/webs/quipu/constitu/1836con.htm",
      "note": "Corpo integral efetivamente lido; art.1 estabelece união."
    },
    {
      "title": "Portal constitucional — Congresso peruano",
      "url": "https://www3.congreso.gob.pe/Docs/sites/webs/constitucion/constitucionesperu-indice.htm",
      "note": "Entradas1837/1839 efetivamente lidas: término jurídico10/11/1839, não prova continuidade prática."
    }
  ]
}, normRows("Lei Fundamental Peru-Boliviana1837 — transcrição parlamentar","1837-05-01",[
  [
    "est",
    "moderate-first",
    "arts.4,6,34–36,40",
    "Repúblicas mantêm governos, moedas e responsabilidades por dívidas; reforma requer maioria de cada delegação.",
    "Esferas próprias e veto por delegação sustentam federalismo moderado.",
    "Protector nomeia presidentes e tribunais e comanda forças; não independência completa nem polo forte."
  ],
  [
    "rel",
    "moderate-second",
    "art.5",
    "Pacto declara religião católica da confederação.",
    "Religião oficial sustenta confessionalidade moderada.",
    "Artigo não declara exclusão de outros cultos; não transferir proibição da sucessora1839."
  ],
  [
    "imi",
    "moderate-second",
    "art.30(16)",
    "Protector deve promover imigração estrangeira com franquias e terrenos baldios.",
    "Incentivo normativo direto sustenta abertura moderada.",
    "Poder formal não demonstra implementação, escala migratória ou tratamento uniforme de migrantes."
  ]
]), "Passagens codificadas e cronologia cotejadas independentemente; prática histórica não auditada integralmente."),
];
