import type { AxisKey, ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';

const axes: AxisKey[] = ['est', 'rep', 'pod', 'imi', 'dip', 'int', 'eco', 'con', 'com', 'rel', 'mor', 'tec'];
const reviewedOn = '2026-10-07';
export type HistoricalCountryBatch03Entry = ReferenceEntry & {
  kind: 'country'; category: 'historical-country';
  documentaryReview: {
    status: 'author-reviewed-bounded-claims'; reviewedOn: string;
    independentReview: 'pending'; scope: string;
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
): HistoricalCountryBatch03Entry {
  const result: HistoricalCountryBatch03Entry = {
    ...entry, kind: 'country', category: 'historical-country',
    vec: Object.fromEntries(axes.map(axis => [axis, 50])) as Record<AxisKey, number>,
    evidence: {}, axisEvidence: {}, coding: {},
    documentaryReview: { status: 'author-reviewed-bounded-claims', reviewedOn, independentReview: 'pending', scope: reviewScope },
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
const fr91='Constitution française de 1791 — tradução histórica de Frank Anderson';
const fr48='Constitution du 4 novembre 1848 — transcrição francesa';
const ir22='Constitution of the Irish Free State Act, 1922 — transcrição primária';
const mx24='Constitución Federal de los Estados Unidos Mexicanos, 1824 — transcrição primária';
const hi64='Constitution of the Kingdom of Hawaii, 1864 — transcrição primária';
const fr52='Constitution du 14 janvier 1852 — transcrição francesa';
export const historicalCountryBatch03: HistoricalCountryBatch03Entry[] = [
  profile({
    id:'france-constitutional-monarchy-1791',name:'França — monarquia constitucional de 1791',aliases:['Reino dos Franceses sob a Constituição de 1791'],
    period:'Monarquia constitucional revolucionária, 1791–1792; texto fundador de3/9/1791',
    rationale:'A ordem limita a Coroa por Assembleia independente, sufrágio censitário indireto e direitos civis; administrações territoriais permanecem subordinadas.',
    caveats:'Unidade institucional distinta das repúblicas francesas, não um governo individual. Codificação do texto fundador, não certificação da prática revolucionária ou colonial. Tradução histórica com fac-símile vinculado; cotejo francês integral pendente. Voto masculino censitário não é democracia inclusiva.',
    sources:[source(fr91,'https://en.wikisource.org/wiki/French_Constitution_of_1791','Tradução de Frank Anderson, edição de1908, com páginas de origem; títulosI/III e competências locais localizadas.'),source('Anderson1908 — índice de atos da transição republicana','https://en.wikisource.org/wiki/The_Constitutions_and_Other_Select_Documents_Illustrative_of_the_History_of_France,_1789%E2%80%931907','Índice documental identifica suspensão real de11/8/1792 e abolição monárquica de21/9/1792. Subcapítulos24/27 ainda não transcritos: índice usado somente para cronologia, nunca para graduar eixos.')],
  },normRows(fr91,'1791-09-03',[
    ['est','moderate-second','TitleIII, chapterIV, sectionII(1–8)','Administradores territoriais eleitos atuam sob vigilância real; Coroa anula atos ilegais e suspende gestores, com revisão legislativa.','Subordinação administrativa central sustenta unidade moderada com eleição e controle como contrapontos.','Administração local não equivale a Estado federado; prática administrativa e autonomia fiscal não auditadas.'],
    ['rep','moderate-first','TitleIII, chapterI(1–5), sectionII(2/7); chapterIII, sectionIII','Assembleia eletiva não pode ser dissolvida pelo rei; voto indireto depende de cidadania ativa e renda, enquanto a Coroa possui veto suspensivo.','Legislativo independente e eleição limitam a monarquia e sustentam representação moderada no grupo admitido.','Censo e exclusões impedem democracia plena; não avalia competição efetiva nem confunde sufrágio restrito com universal.'],
    ['pod','moderate-second','TitleI; Declaration of Rights7–11; TitleIII, chapterV','Liberdades pessoais e expressão sem censura prévia são garantidas; detenções obedecem formas legais e poder judicial é separado.','Garantias contra coerção arbitrária sustentam liberdade moderada no texto.','Ordem pública e abuso de direitos são limites expressos; não prova prática durante guerra ou revolução nem direitos iguais nas colônias.'],
  ]),'Tradução fundadora lida; prática e cotejo francês integral pendentes.'),
  profile({
    id:'france-second-republic-1848',name:'França — Segunda República',aliases:['IIe République française'],period:'República de1848–1852; codificação da carta de4/11/1848 anterior ao golpe de1851',
    rationale:'A carta institui representação eletiva e Presidência limitada, com proteção declarada contra censura e coerção extrajudicial.',
    caveats:'A duração da República não significa continuidade dessa carta: golpe em2/12/1851 e texto de1852 a substituem antes da proclamação imperial. Sufrágio masculino, mudanças eleitorais e repressão não foram auditados nesta graduação normativa. Transcrição francesa vinculada a fac-símile, cotejo integral pendente.',
    sources:[source(fr48,'https://fr.wikisource.org/wiki/Constitution_du_4_novembre_1848','Texto primário francês com fac-símile em8páginas; artigos20/24–27/43–45/58–59/64 e direitos2–8.'),source('Constitution of 14 January 1852 and its modifications — Élysée','https://www.elysee.fr/en/french-presidency/the-constitution-of-14-january-1852-and-its-modifications','Contexto institucional identifica golpe de1851 e substituição constitucional em1852, evitando imputar a carta de1848 a todo o regime.')],
  },normRows(fr48,'1848-11-04',[
    ['rep','moderate-first','Arts.20,24–27,43–45,58–59 e64','Assembleia e Presidente são eletivos; mandato presidencial é limitado e deliberação parlamentar prevalece após pedido de reconsideração. Presidente nomeia ministros.','Representação e limites constitucionais sustentam democracia moderada com Presidência autônoma.','Voto dito universal era masculino; restrições de1850 e golpe de1851 não estão representados como continuidade desta âncora.'],
    ['pod','moderate-second','CapítuloII, arts.2–8','Detenção obedece à lei, tribunais extraordinários são proibidos, expressão é protegida sem censura e pena capital política é abolida.','Garantias civis delimitadas sustentam liberdade moderada no desenho.','Segurança pública limita direitos; práticas repressivas e lei de exceção ainda não cotejadas. Não extrapolamos a todo1848–1852.'],
  ]),'Texto francês e contexto oficial de ruptura; somente normas originais codificadas.'),
  profile({
    id:'irish-free-state-1922',name:'Estado Livre Irlandês',aliases:['Saorstát Éireann'],period:'Estado Livre sob a carta de1922, 1922–1937; edição fundadora anterior às emendas',
    rationale:'Parlamento eletivo e governo responsável coexistem com vínculo dominial à Coroa; direitos e não preferência religiosa constam da carta.',
    caveats:'Distinto da ordem constitucional irlandesa de1937; não inventa período com base em troca de gabinete. Emendas alteraram Coroa, Senado e instrumentos populares antes de1937. Carta fundadora não certifica execução durante guerra civil; original oficial inacessível nesta revisão, transcrição explícita e cotejo pendente.',
    sources:[source(ir22,'https://en.wikisource.org/wiki/Constitution_of_the_Irish_Free_State_(Saorst%C3%A1t_Eireann)_Act,_1922','Ato e anexos primários: artigos6–9/12/14/51–53; fonte de transcrição sem certificação de cotejo integral.'),source('Dáil debate,10December1937 — Oireachtas','https://www.oireachtas.ie/en/debates/debate/dail/1937-12-10/16/','Trecho indexado primário identifica revogação da carta vigente em29/12/1937; página integral retorna403, logo não usada para codificar eixos.')],
  },normRows(ir22,'1922; edição original do ato constitucional',[
    ['rep','moderate-first','First Schedule, arts.12/14 e51–53','Voto secreto sem distinção de sexo e governo dependente da maioria do Dáil coexistem com Rei e representante da Coroa.','Voto e confiança parlamentar sustentam representação democrática moderada.','Tratado, juramento e reserva da Coroa limitam o contexto; não presume igualdade política além das regras eleitorais legais nem prática estável até1937.'],
    ['pod','moderate-second','First Schedule, arts.6–9','Revisão judicial de detenção, domicílio e liberdades de expressão e associação são protegidos; guerra/rebelião limita tutela contra atos militares.','Garantias contra coerção arbitrária sustentam liberdade moderada, com exceções expressas.','Sem auditoria de guerra civil, execução e leis de segurança; ordem pública/moralidade também condicionam proteção.'],
    ['rel','moderate-first','First Schedule, art.8','Liberdade de consciência é garantida; proíbe preferência ou financiamento de religião e discriminação entre escolas denominacionais subsidiadas.','Neutralidade denominacional expressa sustenta laicidade institucional moderada.','Não exclui financiamento escolar confessional igualitário, nem presume irreligiosidade dos cidadãos ou cumprimento pleno.'],
  ]),'Ato e anexos transcritos, recorte original; cotejo oficial e prática pendentes.'),
  profile({
    id:'mexico-first-federal-republic-1824',name:'México — Primeira República Federal',aliases:['Estados Unidos Mexicanos — primeira ordem federal'],period:'Primeira ordem federal,1824–1835; edição original de4/10/1824',
    rationale:'Constituições e poderes estaduais delimitam a primeira ordem federal; o culto católico é protegido com exclusão normativa dos demais.',
    caveats:'Unidade pós-imperial distinta do PRI e do Estado contemporâneo. O retorno federal posterior não é incluído como se houvesse continuidade sem ruptura. Texto estadual sobre franquia não revisado: representação fica desconhecida. Catolicismo exclusivo não comprova por si teocracia ou domínio geral do direito religioso.',
    sources:[source(mx24,'https://es.wikisource.org/wiki/Constituci%C3%B3n_Federal_de_los_Estados_Unidos_Mexicanos_(1824)','Transcrição primária dos artigos3/4/50/157–162; cotejo integral pendente.'),source('Constituição1824 — fac-símile da Câmara dos Deputados','https://www.diputados.gob.mx/biblioteca/bibdig/const_mex/const_1824.pdf','Fac-símile oficial localizado,19páginas; camada de texto indisponível. Não afirmamos cotejo integral.'),source('Antecedentes históricos constitucionales — Orden Jurídico Nacional','https://www.ordenjuridico.gob.mx/Constitucion/antecedentes.php','Catálogo governamental identifica carta de1824 e Bases de23/10/1835, limite temporal da primeira ordem.')],
  },normRows(mx24,'1824-10-04',[
    ['est','moderate-first','Arts.4,50 e157–162','Estados possuem constituições, legislaturas, Executivo e Judiciário próprios, sujeitos à Constituição e leis federais.','Competências territoriais constitutivas sustentam federalismo moderado.','Congresso nacional tem competências materiais e Estados devem executar leis gerais; não presume soberania separada nem autonomia efetiva igual.'],
    ['rel','moderate-second','Art.3','Catolicismo é religião nacional protegida por leis; exercício de outras religiões é proibido.','Confessionalidade exclusiva sustenta direção religiosa moderada no construto institucional.','Não prova jurisdição clerical geral ou crença popular; exclusividade de culto isolada não autoriza âncora forte automaticamente.'],
  ]),'Cláusulas transcritas e catálogo cronológico oficial; cotejo integral e execução pendentes.'),
  profile({
    id:'hawaii-kingdom-independent',name:'Reino do Havaí',aliases:['Kingdom of Hawaii'],period:'Reino independente,1810–1893; cláusulas originais de1864 anteriores à carta de1887',
    rationale:'Monarquia constitucional independente com representação eletiva restrita e prerrogativas reais, anterior à ruptura republicana já catalogada.',
    caveats:'Uma identidade para o reino, não cópias para cada monarca ou carta. A codificação é a edição de1864, sem projetá-la ao período anterior ou à Constituição da Baioneta de1887. O reino terminou com a deposição de1893; a república surge em1894. Prática de soberania e direitos indígenas é questão própria.',
    sources:[source(hi64,'https://en.wikisource.org/wiki/1864_Constitution_of_the_Kingdom_of_Hawaii','Texto primário outorgado em20/8/1864, artigos3–8/20/28/45/57/60–62; cotejo oficial integral pendente.'),source('Annexation ofHawaii — National Archives','https://www.archives.gov/milestone-documents/joint-resolution-for-annexing-the-hawaiian-islands','Arquivo contextualiza unificação1810, imposição constitucional1887 e golpe1893; fonte primária principal da página é ato posterior de1898, não a carta de1864.')],
  },normRows(hi64,'1864-08-20',[
    ['rep','moderate-second','Arts.20/28/45/57/60–62','Rei exerce prerrogativas executivas e dissolução; legislativo inclui nobres e representantes, com requisitos de voto e renda.','Poder real e franquia restrita sustentam direção monárquica moderada, com representação como contraponto.','Não equivale a monarquia absoluta; precisamos de cotejo das emendas e pleitos. Descreve1864, não a imposição posterior de1887.'],
    ['pod','moderate-second','Arts.3–8','Expressão, habeas corpus e devido processo são declarados; proteção da família real permite restrição da imprensa e rebelião/invasão permite suspensão.','Garantias delimitadas sustentam liberdade moderada no texto, com exceções relevantes.','Sem auditoria de execução; proteção monárquica da imprensa é contraevidência, não omitida. Não imputa irrestrita liberdade de oposição.'],
  ]),'Carta de1864 e contexto arquivístico de mudanças, sem homogeneizar todo o reino.'),
  profile({
    id:'france-second-empire-1852',name:'França — Segundo Império',aliases:['Second Empire français'],period:'Segundo Império,1852–1870; arranjo inicial de1852 anterior às liberalizações',
    rationale:'O arranjo pós-golpe concentra Executivo e iniciativa legislativa no chefe de Estado; proclamação imperial transforma a chefia em dignidade hereditária.',
    caveats:'Regime institucional distinto das repúblicas, não outro alias de Napoleão III. Âncora do arranjo inicial: emendas e liberalizações da década de1860 não foram imputadas como continuidade. Eleições e plebiscitos previstos não comprovam competição livre, tampouco são omitidos como contrapontos.',
    sources:[source(fr52,'https://fr.wikisource.org/wiki/Constitution_du_14_janvier_1852','Texto primário original pré-proclamação; só mecanismo constitucional de concentração usado, com transformação imperial documentada separadamente.'),source('Proclamation de l’Empire,2December1852 — Assemblée nationale','https://www.assemblee-nationale.fr/dyn/histoire-et-patrimoine/second-empire/plebiscite-et-proclamation-de-l-empire','Reproduz decreto primário promulgador e contextualiza transformação da chefia presidencial em imperial.'),source('Constitution of 14 January 1852 and its modifications — Élysée','https://www.elysee.fr/en/french-presidency/the-constitution-of-14-january-1852-and-its-modifications','Contexto institucional sobre golpe, ministros sem responsabilidade parlamentar e chefia pessoal; texto não usado para extrair taxa eleitoral como score.'),source('Rupture impériale et proclamation de 1870 — Assemblée nationale','https://www.assemblee-nationale.fr/dyn/histoire-et-patrimoine/second-empire/defaite-de-sedan-proclamation-de-la-republique-et-gouvernement-provisoire','Parlamento documenta deposição imperial e proclamação republicana em4/9/1870; identifica fronteira da unidade, não pontua eleições.')],
  },normRows(fr52,'1852-01-14; mecanismo mantido na transformação imperial de1852',[
    ['rep','strong-second','Arts.5–13,20–24,34–40 e46','Chefe de Estado governa, nomeia ministros responsáveis somente perante ele, inicia leis, nomeia Senado e dissolve corpo legislativo; deputados são eleitos.','Concentração executiva/legislativa e controles subordinados sustentam direção autocrática forte no desenho inicial.','Não presume ausência de voto ou fraude não revisada. Dignidade hereditária foi instaurada por ato posterior de1852; alterações liberais posteriores requerem recodificação própria.'],
  ]),'Texto inicial e decreto imperial primário reproduzido pelo Parlamento; liberalizações e prática ainda não auditadas.'),
];
