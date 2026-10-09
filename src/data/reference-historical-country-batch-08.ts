import type { AxisKey, ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';

const axes: AxisKey[] = ['est', 'rep', 'pod', 'imi', 'dip', 'int', 'eco', 'con', 'com', 'rel', 'mor', 'tec'];
const reviewedOn = '2026-10-08';
export type HistoricalCountryBatch08Entry = ReferenceEntry & {
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
): HistoricalCountryBatch08Entry {
  const result: HistoricalCountryBatch08Entry = {
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
export const historicalCountryBatch08: HistoricalCountryBatch08Entry[] = [
profile({
  "id": "venezuela-first-republic-1811",
  "name": "Venezuela — Primeira República federal",
  "aliases": [
    "Confederação Americana de Venezuela1811",
    "Primeira República venezuelana"
  ],
  "period": "Independência5/7/1811–capitulação1812; recorte normativo da carta21/12/1811",
  "rationale": "República independente em pacto provincial federal, anterior à restauração realista e às repúblicas revolucionárias seguintes.",
  "caveats": "Guerras, terremoto e concentração extraordinária posterior não são práticas deduzidas do texto; norma1811 não é média de1811–1812. Cotejo oficial integral da transcriçãoWikisource pendente. Sem econômico nacional imputado por propriedade ou auxílio social.",
  "sources": [
    {
      "title": "Carta federal venezuelana1811 — bases primárias, Wikisource",
      "url": "https://es.wikisource.org/wiki/Constituci%C3%B3n_Federal_para_los_Estados_de_Venezuela_(1811)/Preliminar",
      "note": "Pacto efetivamente lido: poderes não delegados e governos provinciais próprios; centro controla defesa, comércio e relações exteriores."
    },
    {
      "title": "Carta federal venezuelana1811 — religião, Wikisource",
      "url": "https://es.wikisource.org/wiki/Constituci%C3%B3n_Federal_para_los_Estados_de_Venezuela_(1811)/I",
      "note": "Art.1 efetivamente lido: exclusividade católica inclusive culto privado; não atenuada por paráfrase."
    },
    {
      "title": "Carta federal venezuelana1811 — direitos, Wikisource",
      "url": "https://es.wikisource.org/wiki/Constituci%C3%B3n_Federal_para_los_Estados_de_Venezuela_(1811)/VIII",
      "note": "Arts.158–184 realmente lidos: processo, tortura, imprensa condicionada, estrangeiros e assembleias qualificadas."
    },
    {
      "title": "Acta de independencia5/7/1811 — texto primário, Cervantes",
      "url": "https://cervantesvirtual.com/obra-visor/acta-de-independencia-5-de-julio-1811-0/html/84c4bf1a-ca2c-49bd-9364-df0e6daf94aa_2.html",
      "note": "Corpo final/assinatura5julho lidos; catálogo identifica Gaceta16julho1811 e cotejoAcademia1959, sem confundir data da edição digital."
    },
    {
      "title": "MPPRE — Bolívar e unidade americana",
      "url": "https://mppre.gob.ve/index.php/publicacion/1439-0",
      "note": "Corpo institucional retrospectivo efetivamente lido: primeira República perdida1812; apenas cronologia, não norma."
    },
    {
      "title": "Capitulación de San Mateo — Diccionario de Historia, FundaciónEmpresasPolar",
      "url": "https://bibliofep.fundacionempresaspolar.org/dhv/entradas/c/capitulacion-de-san-mateo/",
      "note": "Corpo retrospectivo lido: capitulação25/7/1812 encerraRepública; testemunho secundário explicitado, não original oficial."
    }
  ]
}, [...normRows("Carta federal venezuelana1811 — bases primárias, Wikisource","1811-12-21",[
  [
    "est",
    "strong-first",
    "Bases do pacto, parágrafos1–4",
    "Províncias retêm poderes não delegados e organizam governos/administração próprios; representação nacional e defesa/comércio geral são centrais.",
    "Reserva explícita de poderes e governo territorial próprio sustenta federalismo forte.",
    "Não presume soberania internacional separada ou execução em guerra; autoridade nacional dispõe de contribuições e leis gerais."
  ]
]),
...normRows("Carta federal venezuelana1811 — religião, Wikisource","1811-12-21",[
  [
    "rel",
    "strong-second",
    "CapítuloI,art.1",
    "Religião católica é única dos habitantes; representação nacional proíbe qualquer outro culto público ou privado e doutrina contrária.",
    "Exclusividade jurídica religiosa inclusive privada sustenta confessionalidade forte.",
    "Norma não demonstra perseguição realmente executada ou crença de cada habitante."
  ]
]),
...normRows("Carta federal venezuelana1811 — direitos, Wikisource","1811-12-21",[
  [
    "pod",
    "moderate-second",
    "CapítuloVIII,arts.158–164,170–174,181–184",
    "Processo e defesa legal, presunção de inocência e proibição de tortura coexistem com busca legal, restrições por traição e imprensa condicionada ao dogma/moral cristã.",
    "Garantias processuais e limite expresso à tortura sustentam direção moderada à liberdade no desenho.",
    "Assembleias exigem autorização municipal e só sufragantes; imprensa responde por dogma/moral/ordem. Não é liberdade religiosa ou prática de guerra irrestrita."
  ],
  [
    "imi",
    "moderate-second",
    "CapítuloVIII,art.169; contraponto capítuloI1",
    "Todos os estrangeiros podem ser recebidos com segurança de pessoa e bens, se respeitarem religião católica, independência e autoridades.",
    "Admissão internacional explícita sustenta abertura moderada.",
    "Respeito religioso e autoridade são condições; culto privado alternativo proibido. Não presume cidadania/sufrágio universal ou multiculturalismo irrestrito."
  ]
])], "Passagens codificadas e cronologia cotejadas independentemente; prática histórica e todas as emendas não auditadas integralmente."),
profile({
  "id": "ecuador-founder-order-1830",
  "name": "Equador — ordem republicana fundadora",
  "aliases": [
    "Estado do Equador1830",
    "Floreanismo e Rocafuerte1830–1845"
  ],
  "period": "Estado independente1830–ruptura Marcista1845; recorte normativo da carta23/9/1830",
  "rationale": "Nascimento estatal após GrandeColômbia e ciclo fundador até revoluçãoMarcista; cartas1835/1843 não multiplicadas em países.",
  "caveats": "Flores não governa continuamente: Rocafuerte e reformas alteram o ciclo. Projeto de confederaçãoColômbia arts.2–5/71 é aspiração normativa, não união efetivamente constituída. Levante inicia6março1845 e luta prolonga-se atéjunho; nenhuma data única decessação nacional imputada. Direitos qualificados e tutela paternalista indígena art.68 preservados como limites.",
  "sources": [
    {
      "title": "Constitución del Estado del Ecuador1830 — texto primário, Cervantes",
      "url": "https://www.cervantesvirtual.com/portales/constituciones_hispanoamericanas/obra-visor/constitucion-del-estado-de-ecuador-el-23-de-septiembre-1830/html/aa8ba890-5963-4b69-9518-d6e81ff211b7_2.html",
      "note": "Arts.1–8,12–20,35,53–66/68 e assinatura/promulgação realmente lidos. Assinada11setembro, mandada executar23setembro1830."
    },
    {
      "title": "Constituição1830 — catálogo Assembleia Nacional",
      "url": "https://www.asambleanacional.gob.ec/es/publicacion/65748-constitucion-del-estado-del-ecuador-1830",
      "note": "Catálogo oficial realmente aberto; downloadfalhou, não foi usado como texto lido."
    },
    {
      "title": "Revolução Marcista — Museu Municipal/AlcaldíaGuayaquil",
      "url": "https://guayaquil.gob.ec/simbolo-historia-ecuador-brilla-hilos-dorados-plateados/",
      "note": "Corpo institucional5/3/2026 efetivamente lido: levantamento6/3/1845, luta março–junho contra terceiro mandatoFlores; cronologia, não norma."
    }
  ]
}, [...normRows("Constitución del Estado del Ecuador1830 — texto primário, Cervantes","1830-09-23",[
  [
    "est",
    "moderate-second",
    "Arts.35(9),53–56; limites1–5/71",
    "Presidente nomeia prefeitos/governadores com proposta do Conselho; prefeito é agente imediato executivo; contabilidade nacional revê departamentos e regulações locais passam peloCongresso.",
    "Hierarquia administrativa e fiscalização central sustentam estrutura interna unitária moderada.",
    "Conselhos municipais existem; união futuraColômbia não é federação doméstica executada. Não descreve reformas1835/1843."
  ],
  [
    "pod",
    "moderate-second",
    "Arts.35(5),58–66,68",
    "Carta garante juiz natural, motivo escrito de prisão em12horas, imprensa e domicílio, com flagrante, foros especiais, moral pública e restrição de petições coletivas.",
    "Garantias processuais delimitadas sustentam direção moderada à liberdade no desenho fundador.",
    "Muitos direitos são de cidadãos qualificados por propriedade/ocupação/alfabetização12; perigo externo/interno35(5)autoriza medidas;68tutela clericalindígena impede universalização. Não presume prática."
  ],
  [
    "rel",
    "strong-second",
    "Art.8; contraponto68",
    "Governo deve proteger religião católica com exclusão de qualquer outra.",
    "Exclusão religiosa expressa sustenta confessionalidade forte.",
    "Não especifica mesma extensão privada daVenezuela1811; não mede crença da população nem perseguição efetiva."
  ]
])], "Passagens codificadas e cronologia cotejadas independentemente; prática histórica e todas as emendas não auditadas integralmente."),
profile({
  "id": "chile-liberal-order-1828",
  "name": "Chile — ordem liberal anterior a Lircay",
  "aliases": [
    "Chilepipiolo1828",
    "Carta liberalchilena1828"
  ],
  "period": "Carta8/8/1828–ruptura da guerra civil1829–1830; vigência formal permanece até25/5/1833",
  "rationale": "Ordem liberal derrotada na guerra civil e substituída pelo poder conservador; marco político diferente da carta1833, sem criar país apenas por emenda.",
  "caveats": "Carta formalmente continua até1833, mas poder liberal cai em1830. FonteMemoriaChilena dá16abril paraLircay, outra tradição17; mantemos mês/ano e conflito explícito. CabeçalhoCervantes dizsetembro, fecho primário8agosto e BCNconfirmamagosto: erro catalográfico registrado. Sem imputar constituição a prática uniforme de guerra. Economia desconhecida, direitos de propriedade não bastam.",
  "sources": [
    {
      "title": "Constitución de Chile1828 — texto primário, Cervantes",
      "url": "https://www.cervantesvirtual.com/obra-visor/constitucion-politica-del-estado-de-chile--promulgada-el-8-de-septiembre-de-1828/html/f0c8b948-9f73-4a3e-8fb4-be39cda67642_2.html",
      "note": "Corpo/fecho original8agosto efetivamente lido; título superior/slugsetembro divergente não seguido; arts.3–4,7–20,24–33,83,104–118."
    },
    {
      "title": "Carta chilena1828 — HistóriaPolíticaBCN",
      "url": "https://www.bcn.cl/historiapolitica/constituciones/detalle_constitucion?handle=10221.1/18432",
      "note": "Corpo institucional efetivamente lido: promulgação8agosto1828 e vigênciaformal até25maio1833."
    },
    {
      "title": "Guerra civil1829–1830 — MemoriaChilena/BibliotecaNacional",
      "url": "https://www.memoriachilena.gob.cl/602/w3-article-92157.html",
      "note": "Corpo institucional efetivamente lido: crise eleitoral, renúncia liberal, controlePortales e derrotaFreire1830; narrativa16abril conflitante com17, sem fingir resolvido."
    }
  ]
}, [...normRows("Constitución de Chile1828 — texto primário, Cervantes","1828-08-08",[
  [
    "est",
    "moderate-second",
    "Arts.108–118",
    "Assembleias provinciais eleitas escolhem senadores e controlam orçamento municipal; Executivo central nomeia intendentes a partir de ternas provinciais, que executam leis gerais e ordens nacionais.",
    "Nomeação executiva e hierarquia legal nacional sustentam direção unitária moderada com autonomia territorial relevante.",
    "Assembleias possuem competências substantivas e municípios elegem governadores locais118; não é centralismo absoluto ou meraausênciaautonomia."
  ],
  [
    "rep",
    "moderate-first",
    "Arts.7–8,24–33,109",
    "Deputados e assembleias provinciais são diretamente eleitos, com mandatos curtos/renovação; senadores vêm dasassembleias.",
    "Representação eleitoral periódica sustenta direção democrática moderada no desenho.",
    "Eleitorado depende de ocupação/propriedade e exclui serviçodoméstico/devedores; disputa sucessória1829 mostra execução problemática. Não sufrágio universal ou eleições auditadas."
  ],
  [
    "pod",
    "moderate-second",
    "Arts.10–20,83(12),104–107",
    "Carta protege liberdade, prisão judicial com exceções, imprensa, domicílio/correspondência e proíbe tortura; emergência admite medidas imediatas sob prestação de contas aoCongresso/Comissão.",
    "Garantias e proibição de tortura sustentam direção moderada à liberdade no desenho.",
    "Flagrante/receiodefuga13, buscaslegais106, emergência83(12)e responsabilização da imprensa persistem; não inferir liberdade prática plena na guerra civil."
  ],
  [
    "rel",
    "strong-second",
    "Arts.3–4",
    "Religião católica exclui exercício público de qualquer outra, enquanto opiniões privadas não são perseguidas.",
    "Monopólio confessional público sustenta direção religiosa forte no desenho.",
    "Não transfere proibição de culto público para crença/opinião privada ou comprova execução persecutória."
  ]
])], "Passagens codificadas e cronologia cotejadas independentemente; prática histórica e todas as emendas não auditadas integralmente."),
];
