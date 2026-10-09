import type { AxisKey, ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';

const axes: AxisKey[] = ['est', 'rep', 'pod', 'imi', 'dip', 'int', 'eco', 'con', 'com', 'rel', 'mor', 'tec'];
const reviewedOn = '2026-10-08';
export type HistoricalCountryBatch09Entry = ReferenceEntry & {
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
): HistoricalCountryBatch09Entry {
  const result: HistoricalCountryBatch09Entry = {
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
export const historicalCountryBatch09: HistoricalCountryBatch09Entry[] = [
profile({
 id:'austria-first-republic-parliamentary-1918',name:'Áustria — Primeira República parlamentar',aliases:['Primeira República Austríaca antes de Dollfuß'],
 period:'República parlamentar12novembro1918–ruptura autoritária março1933; recortes normativos1928 e setembro1929',
 rationale:'República e federação parlamentar anterior à supressão efetiva do Nationalrat, não país distinto a cada emenda1925/1929.',
 caveats:'Normas revistas não são média de1918–1933. Reforma presidencial tardia1929 e violência política não foram auditadas integralmente; terminal é ruptura política1933, embora documentos formais posteriores continuem existindo. Não se usa neutralidade1955.',
 sources:[
 source('B-VG histórico — RIS, edição6março1928','https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&FassungVom=1928-03-06&Gesetzesnummer=10000079','Texto normativo oficial, arts.1–19 e99–103 efetivamente recuperados/lidos no corpo indexado; abertura direta falhou. Edição histórica, não carta atual.'),
 source('B-VG histórico — RIS, edição10setembro1929','https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&FassungVom=1929-09-10&Gesetzesnummer=10000079','Art.26(1) efetivamente lido no corpo indexado: voto igual/direto/secreto/pessoal, homens e mulheres com limite etário. Não confundir com edição posterior21anos1929dezembro.'),
 source('1918 bis1945 — Parlamento Austríaco','https://www.parlament.gv.at/verstehen/historisches/1918-1945','Corpo institucional realmente aberto: proclamação12novembro1918 e neutralização do Nationalrat março1933/início autoritário; contexto de conflitos.'),
 source('100 Jahre B-VG — Parlamento Austríaco','https://www.parlament.gv.at/verstehen/historisches/100-jahre-b-vg','Corpo institucional lido: adoção1outubro e entrada10novembro1920; emendas não geram novas identidades.')
 ]
},[
 ...normRows('B-VG histórico — RIS, edição6março1928','1928-03-06',[
 ['est','moderate-first','Arts.2–3,10–16,99–103','Estados têm competências residuais, constituições próprias, governos eleitos e consentimento territorial; legislação central e execução indireta vinculada coexistem.','Competências estaduais concretas sustentam federalismo normativo moderado.','Centro conserva amplas funções e instruções na administração indireta; art100 permite dissolução estadual com Bundesrat e novas eleições. Não mede autonomia histórica praticada.']
 ]),
 ...normRows('B-VG histórico — RIS, edição10setembro1929','1929-09-10',[
 ['rep','moderate-first','Art.26(1); contexto art19 na edição1928','Nationalrat eleito por voto igual, direto, secreto e pessoal de homens e mulheres com limite etário, segundo representação proporcional.','Sufrágio e representação efetivamente especificados sustentam desenho democrático moderado.','Sem imputar participação a estrangeiros ou ausência de conflitos. Limite etário e exceções legais não integralmente auditadas; revisão presidencial posterior1929 não generalizada.']
 ])
], 'Passagens primárias indexadas e cronologia institucional cotejadas independentemente; prática histórica e todas as emendas não auditadas.'),
profile({
 id:'turkey-founder-republic-before-coup-1923',name:'Turquia — república fundadora anterior ao golpe1960',aliases:['Türkiye Cumhuriyeti — ordem anterior a27maio1960'],
 period:'República proclamada29outubro1923–golpe27maio1960; recorte codificado exclusivamente original20abril1924',
 rationale:'Ordem republicana civil anterior à dissolução militar do governo e parlamento; mudanças1928/1937/1945/1952 não são novos países.',
 caveats:'Rel40 descreve texto original1924, não secularização posterior: cláusula estatal religiosa retirada1928 e laicidade inserida1937. Partido único, transição multipartidária e repressão não recebem escores de prática. Alguns dispositivos1924 sobreviveram após golpe; terminal é poder político, não revogação integral presumida1960. Educação estatal não prova orientação econômica nacional.',
 sources:[
 source('1924 Anayasası — Anayasa Mahkemesi, original e emendas diferenciados','https://www.anayasa.gov.tr/tr/mevzuat/onceki-anayasalar/1924-anayasasi/','Texto oficial primário recuperado em corpo indexado, não somente snippets: arts.1–6,26 original,68–83,86 e alterações2/75; aberturas diretas timeout. Tradução modernizada1945 e emendas identificadas, sem atribuí-las ao original.'),
 source('1924 Teşkilat-ı Esasiye Kanunu — TBMM, cronologia institucional','https://www.tbmm.gov.tr/anayasa/yirmi-dort-teskilati-esasiye-kanunu','Corpo realmente aberto:29outubro1923 república,20abril1924 carta,27maio1960 dissolução de governo/parlamento e12junho norma transitória. Não usa sequência errada da abolição do califado no parágrafo introdutório.'),
 source('1961 Anayasası — TBMM, cronologia institucional','https://www.tbmm.gov.tr/anayasa/altmis-bir-anayasasi','Corpo efetivamente lido: golpe27maio1960 dissolve governo/Meclis e proíbe atividades políticas; norma transitória12junho1960 junto de disposições1924 sobreviventes.')
 ]
},normRows('1924 Anayasası — Anayasa Mahkemesi, original e emendas diferenciados','1924-04-20',[
 ['pod','moderate-second','Arts.68–83; contraponto86 original','Carta regula prisão por lei, proíbe tortura/trabalho forçado, protege lar/imprensa/correspondência e juiz legal; estado de sítio suspende direitos com aprovação parlamentar.','Garantias processuais delimitadas sustentam liberdade normativa moderada.','Direitos de turcos e limites legais, não todos residentes nem prática; art86 permite suspensão inicialmente atéum mês, prolongável por Meclis. Não ignora repressão histórica.'],
 ['rel','moderate-second','Arts.2 e26 originais; contraponto75 original','Estado declara Islã como religião e atribui execução de preceitos religiosos ao Meclis; art75 protege fé/ritos dentro de ordem pública, moral e lei.','Estabelecimento religioso jurídico geral sustenta orientação religiosa moderada no original1924.','Não proibição total de crenças privadas; remoção da cláusula1928 e laicidade1937 registradas explicitamente, sem média religiosa1923–1960.']
]), 'Passagens primárias originais1924 e cronologia institucional cotejadas independentemente; não orientação confessional em todo1923–1960 nem prática histórica integral.')
];
export const historicalCountryBatch09Audit = historicalCountryBatch09.map(entry=>({id:entry.id,documentedAxes:Object.keys(entry.coding??{}),unknownAxes:axes.filter(axis=>!entry.coding?.[axis]),independentReview:'accepted-bounded-primary-and-identity'}));
