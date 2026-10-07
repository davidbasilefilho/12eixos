import type { AxisKey, ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';

const axes: AxisKey[] = ['est', 'rep', 'pod', 'imi', 'dip', 'int', 'eco', 'con', 'com', 'rel', 'mor', 'tec'];
const reviewedOn = '2026-10-07';
export type HistoricalCountryBatch02Entry = ReferenceEntry & {
  kind: 'country'; category: 'historical-country';
  documentaryReview: {
    status: 'author-reviewed-bounded-claims'; reviewedOn: string;
    independentReview: 'pending'; scope: string;
  };
  unknownAxisReasons: Partial<Record<AxisKey, string>>;
  identityOrigin?: { disposition: 'new-historical-unit' | 'promoted-research-dossier'; researchDossierId?: string; distinctness: string };
  codingScope?: string;
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
): HistoricalCountryBatch02Entry {
  const result: HistoricalCountryBatch02Entry = {
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

const pol52 = 'Konstytucja Polskiej Rzeczypospolitej Ludowej, 22 lipca 1952 — Sejm';
const ipn = 'Brief History of Poland — Institute of National Remembrance';
const cz60 = 'Ústava Československé socialistické republiky, 1960 — Poslanecká sněmovna';
const cz68 = 'Ústavní zákon o československé federaci, 1968 — Poslanecká sněmovna';
const pol35 = 'Ustawa konstytucyjna, 23 kwietnia 1935 — Sejm';
const hi = 'Constitution of the Republic of Hawaii, 1894 — transcrição histórica';
const hiArchive = '1894 Constitutional Convention — Hawaiʻi State Archives';
const hiCourt = 'Lowrey v. Territory of Hawaii, 206 U.S. 206 (1907)';
const no = 'Milestones in Norway’s democratic history — Storting';
const fi = 'Constitution of Finland (1919) — tradução histórica';
const fiEnd = 'The Constitution of Finland 731/1999 — Finlex';
const dr = 'Constitución dominicana de 1844 — transcrição histórica';
const drContext = 'La Constitución dominicana y sus reformas, tomo I — Tribunal Constitucional';
const br = 'Constituição Política do Império do Brazil, 25 de março de 1824 — Câmara';
const brReform = 'Lei nº 16, de 12 de agosto de 1834 — Presidência';

/** Eight historical identities; founding-text scope is distinct from regime lifespan. */
export const historicalCountryBatch02: HistoricalCountryBatch02Entry[] = [
  profile({
    id: 'poland-peoples-republic-1952', name: 'Polônia — República Popular', aliases: ['Polska Rzeczpospolita Ludowa', 'PRL'],
    period: 'Regime da República Popular, 1952–1989; codificação da edição constitucional original de 1952',
    rationale: 'A carta original vincula governo e órgãos territoriais ao planejamento nacional; o contexto institucional registra repressão e ruptura do monopólio político em 1989.',
    caveats: 'A duração do regime não é a vigência inalterada da edição de 1952: houve emendas e crise do poder partidário. A carta formal permaneceu juridicamente até 1997. Não estendemos a codificação normativa a todos os anos nem tratamos promessas eleitorais como competição comprovada.',
    sources: [source(pol52, 'https://api.sejm.gov.pl/eli/acts/DU/1952/232/text.pdf', 'Fac-símile da promulgação original, Diário de Leis nº 33, posição 232; artigos 3, 19, 27, 32 e 34–37.'), source(ipn, 'https://eng.ipn.gov.pl/en/brief-history-of-poland', 'Retrospectiva do arquivo nacional: controle político, repressão, Solidarność e transição de 1989; não é o texto constitucional contemporâneo.')],
  }, [
    { axis: 'con', position: 'strong-first', confidence: 'high', claims: [claim(pol52, 'Art. 3(3), 19(3) e 32(3–4); páginas impressas 347, 352 e 356', 'O Estado dirige a economia planejada; o Sejm aprova planos plurianuais e o governo elabora planos, adota os anuais e assegura sua execução.', 'norm', '1952-07-22')], rationale: 'Obrigação de planos nacionais e atribuições executivas expressas sustentam planejamento forte no desenho de 1952.', uncertainty: 'A carta não mede execução, eficiência ou proporção da economia efetivamente planejada; não certifica todas as emendas posteriores.' },
    { axis: 'est', position: 'moderate-second', confidence: 'medium', relatedQuestionIds: ['estrutura_01', 'estrutura_05'], claims: [claim(pol52, 'Art. 27(6), 32(9) e 34–37; páginas impressas 354, 356–357', 'Órgãos nacionais supervisionam os conselhos territoriais e dirigem seus presidia; conselhos eleitos atendem necessidades locais vinculadas às tarefas nacionais.', 'norm', '1952-07-22')], rationale: 'Subordinação territorial à direção nacional sustenta orientação unitária moderada, preservando competências locais declaradas.', uncertainty: 'Conselhos eleitos são contraponto; não quantificamos autonomia administrativa efetiva nem supomos que todo órgão local fosse destituído de poder.' },
    { axis: 'rep', position: 'strong-second', confidence: 'medium', relatedQuestionIds: ['representacao_01', 'representacao_15'], claims: [claim(ipn, 'Cronologia: 1981, 1989 e 1991', 'O IPN registra prisões da oposição em 1981, primeira eleição parlamentar parcialmente democrática em 1989 e primeiro pleito parlamentar livre pós-guerra em 1991.', 'practice', 'Publicação institucional sem data indicada; retrospectiva do século XX'), claim(pol52, 'Art. 1–2; página impressa 347', 'A carta promete exercício popular por representantes eleitos e votação universal, igual, direta e secreta.', 'norm', '1952-07-22')], rationale: 'Restrição da oposição e contraste eleitoral explícito entre a PRL e a transição sustentam direção autocrática do regime anterior a 1989, confrontada com as promessas formais.', uncertainty: 'Âncora de regime, não medida anual de competição: liberalizações, Solidarność e a eleição parcialmente livre de 1989 são rupturas. A cronologia não valida cada pleito nem demonstra sozinha todos os mecanismos do monopólio partidário.' },
  ], 'Fac-símile original de 1952 e cronologia institucional examinados; emendas posteriores não auditadas.', { eco: 'Não codificado: a revisão parcial do fac-símile não cobriu adequadamente as cláusulas e a composição efetiva da propriedade.' }),
  profile({
    id: 'czechoslovakia-socialist-unitary-1960', name: 'Tchecoslováquia — República Socialista unitária', aliases: ['Československá socialistická republika — ordem unitária'],
    period: 'Carta socialista unitária, 1960–1968; federalização em vigor em 1º de janeiro de 1969',
    rationale: 'A edição original explicita Estado unitário, direção comunista, propriedade social predominante e planos nacionais obrigatórios.',
    caveats: 'É a ordem socialista de 1960 anterior à federação de 1969, distinta da Primeira República já registrada. A Primavera de Praga, invasão de 1968 e execução administrativa exigem revisão própria; as âncoras abaixo são constitucionais e não médias observadas.',
    sources: [source(cz60, 'https://www.psp.cz/docs/texts/constitution_1960.html', 'Transcrição primária oficial da Lei Constitucional nº 100/1960, de 11 de julho, edição original.'), source(cz68, 'https://www.psp.cz/docs/texts/constitution_1968.html', 'Lei nº 143/1968: artigo 1 institui federação; artigo 151(1) fixa entrada geral em vigor em 1º de janeiro de 1969.')],
  }, [
    { axis: 'est', position: 'strong-second', confidence: 'high', relatedQuestionIds: ['estrutura_01', 'estrutura_05'], claims: [claim(cz60, 'Art. 1(2), 18, 41(3), 68 e 96', 'Estado expressamente unitário e centralismo democrático; autoridades nacionais dirigem órgãos territoriais e podem anular decisões inferiores, inclusive leis do Conselho Nacional Eslovaco.', 'norm', '1960-07-11')], rationale: 'Subordinação decisória e legislativa territorial sustenta direção unitária forte, além do simples título do Estado.', uncertainty: 'Conselho eslovaco e comitês locais mantêm atribuições. Não é descrição da federação posterior nem certificação de todas as alterações de 1968.' },
    { axis: 'rep', position: 'strong-second', confidence: 'medium', relatedQuestionIds: ['representacao_01', 'representacao_15'], claims: [claim(cz60, 'Art. 3–6', 'A carta declara sufrágio universal e atribui ao Partido Comunista papel dirigente; a Frente Nacional é dirigida pelo partido.', 'norm', '1960-07-11')], rationale: 'Supremacia partidária constitucional limita a representação plural e sustenta direção autocrática no desenho formal.', uncertainty: 'Não imputamos fraude ou repressão eleitoral não examinada. Sufrágio declarado é contraponto; não avaliamos como a abertura de 1968 modificou a competição efetiva.' },
    { axis: 'eco', position: 'strong-first', confidence: 'high', claims: [claim(cz60, 'Art. 7–10', 'Propriedade estatal e cooperativa formam a base econômica; grandes setores são sociais. Pequena atividade pessoal e bens pessoais permanecem permitidos.', 'norm', '1960-07-11')], rationale: 'Predomínio legal explícito de propriedade social nos setores centrais sustenta propriedade pública forte, sem confundi-la com propriedade de todo bem pessoal.', uncertainty: 'Sem inventário de ativos nem medição da composição econômica efetiva; cooperativas não são idênticas a propriedade administrativa estatal.' },
    { axis: 'con', position: 'strong-first', confidence: 'high', claims: [claim(cz60, 'Art. 7, 12, 41(1) e 90', 'Desenvolvimento econômico segue planos vinculantes; planos de cinco anos têm aprovação legislativa e orçamentos locais se articulam ao planejamento estatal.', 'norm', '1960-07-11')], rationale: 'Planejamento vinculante multissetorial e integração orçamentária sustentam planejamento forte.', uncertainty: 'Não mede cumprimento real ou discricionariedade empresarial, nem equivale a autarquia comercial.' },
  ], 'Edição original de 1960 e cláusula de vigência da federalização lidas; prática econômica/eleitoral ainda não validada.'),
  profile({
    id: 'poland-april-charter-1935', name: 'Polônia — República sob a Constituição de Abril', aliases: ['Segunda República Polonesa — carta de abril de 1935'],
    period: 'Ordem territorial anterior à ocupação, 1935–1939; desenho original de abril de 1935',
    rationale: 'A Presidência recebe autoridade concentrada e prerrogativas próprias, mas câmaras eletivas e mecanismos de responsabilização ministerial continuam previstos.',
    caveats: 'Não cria uma segunda identidade para cada governo da Segunda República: delimita a mudança material de supremacia presidencial da carta de 1935. O texto continuou relevante para o governo no exílio após 1939; o fim do recorte territorial não é apresentado como revogação jurídica.',
    sources: [source(pol35, 'https://api.sejm.gov.pl/eli/acts/DU/1935/227/text.pdf', 'Fac-símile original oficial: Lei Constitucional de 23 de abril, publicada em 24 de abril de 1935, Diário de Leis nº 30, posição 227.')],
  }, [{ axis: 'rep', position: 'moderate-second', confidence: 'medium', relatedQuestionIds: ['representacao_15'], claims: [claim(pol35, 'Art. 2–3, 12–15, 28–29 e 31–33', 'Autoridade suprema indivisível cabe ao Presidente, que nomeia governo e dissolve câmaras. O Sejm é eletivo, legisla, controla orçamento e pode exigir demissão do governo sob procedimento condicionado.', 'norm', '1935-04-23')], rationale: 'Concentração presidencial com representação e controles condicionados sustenta direção autocrática moderada, sem equiparar o arranjo a ausência completa de eleições.', uncertainty: 'Não certifica eleições livres, a prática do movimento sanacja ou a intensidade da coerção. O sufrágio formal de ambos os sexos e o procedimento de controle são contrapontos relevantes.' }], 'Apenas distribuição constitucional de poder da edição de 1935 codificada.'),
  profile({
    id: 'hawaii-republic-1894', name: 'República do Havaí', aliases: ['Republic of Hawaii'],
    period: 'República independente, 1894–1898; desenho da carta promulgada em 4 de julho de 1894',
    rationale: 'A república sucedeu o governo provisório com Presidência inicial nomeada e representação eleitoral restrita; a carta delimitou apoio público a escolas confessionais.',
    caveats: 'A proclamação republicana não comprova consentimento indígena ou sufrágio inclusivo. O primeiro Presidente foi designado na própria carta, a qual impõe juramento antimonárquico e restrições censitárias. O fac-símile integral do arquivo estadual foi localizado, mas a leitura textual usa transcrição; cotejo completo permanece pendente.',
    sources: [source(hi, 'https://en.wikisource.org/wiki/1894_Constitution_of_the_Republic_of_Hawaii', 'Transcrição do texto primário, com limites de procedência; artigos 2, 23, 74, 76, 97 e 101.'), source(hiArchive, 'https://ags.hawaii.gov/archives/online-exhibitions/1894-constitutional-convention/', 'Arquivo estadual documenta ruptura de 1893 e convenção, adoção e promulgação em 1894; fac-símile disponível de grande tamanho.'), source(hiCourt, 'https://www.law.cornell.edu/supremecourt/text/206/206', 'Decisão primária de 1907 cita a vedação escolar de 1894. Corrobora conteúdo jurídico; não certifica execução durante a República.'), source('Joint Resolution for Annexing the Hawaiian Islands (1898) — National Archives', 'https://www.archives.gov/milestone-documents/joint-resolution-for-annexing-the-hawaiian-islands', 'Resolução primária de 7 de julho de 1898 e contexto arquivístico documentam anexação e oposição indígena, delimitando a unidade independente.')],
  }, [
    { axis: 'rep', position: 'moderate-second', confidence: 'medium', relatedQuestionIds: ['representacao_15', 'representacao_16'], claims: [claim(hi, 'Art. 23, 74, 76 e 101', 'A carta designa Dole primeiro Presidente; eleições legislativas dependem de requisitos masculinos, alfabetização, lealdade republicana e, para o Senado, patrimônio ou renda.', 'norm', '1894-07-03; promulgada em 1894-07-04')], rationale: 'Fundação presidencial designada e filtros políticos/censitários substanciais sustentam direção autocrática moderada, contida pela existência de legislativo eletivo.', uncertainty: 'Não mede competição real nem posição de todos os habitantes. Requisitos textuais precisam de cotejo integral com o fac-símile estadual; não presumimos eleição presidencial direta ou universal.' },
    { axis: 'rel', position: 'moderate-first', confidence: 'medium', relatedQuestionIds: ['religiao_03', 'religiao_08'], claims: [claim(hi, 'Art. 2 e 97', 'Liberdade de culto teísta é prevista; após 31 de dezembro de 1895 ficam vedados recursos e terras públicas em favor de escolas confessionais ou privadas.', 'norm', '1894-07-03; vedação financeira com início diferido para 1896'), claim(hiCourt, 'Discussão da Constituição de 1894 e proibição de apoio a escolas sectárias', 'A Suprema Corte reproduz a vedação de financiamento público escolar confessional e sua continuidade na lei territorial posterior.', 'norm', '1907-05-13')], rationale: 'Separação financeira escolar e liberdade denominacional sustentam laicidade institucional moderada no domínio revisado.', uncertainty: 'Cobertura parcial de culto e financiamento escolar, desde 1896, também abrangendo escolas privadas não confessionais. O relato processual Lowrey alega continuidade de ensino religioso público até 1903: não certificamos cumprimento republicano. Linguagem teísta não prova igualdade para não crentes.' },
  ], 'Convenção no arquivo estadual, transcrição e corroboração judicial específica; fac-símile integral ainda não cotejado.'),
  profile({
    id: 'norway-swedish-union-1814', name: 'Noruega — reino constitucional na união com a Suécia', aliases: ['Noruega na união sueco-norueguesa'],
    period: 'Unidade histórica da união, 1814–1905; codificação delimitada ao desenho inicial e controles parlamentares anteriores a 1884',
    rationale: 'A constituição e o Storting limitaram a Coroa dentro de uma união monárquica; a ampliação parlamentar e do eleitorado foi gradual.',
    caveats: 'A união não é uma simples fase do Estado atual: foi estabelecida em novembro de 1814 e dissolvida em 1905. A âncora não resume 91 anos: distingue o desenho original e os controles anteriores a 1884 da responsabilidade parlamentar posterior. Mulheres e muitos homens eram excluídos inicialmente.',
    sources: [source(no, 'https://www.stortinget.no/en/In-English/About-the-Storting/historical-highlights/milestones-in-norways-democratic-history/', 'História institucional do Parlamento preserva citações da revisão de novembro de 1814 e documenta controle da Coroa, sufrágio, parlamentarismo de 1884 e dissolução de 1905. Não substitui edição integral original.')],
  }, [{ axis: 'rep', position: 'moderate-first', confidence: 'medium', relatedQuestionIds: ['representacao_15', 'representacao_16'], claims: [claim(no, 'Seções “1814”, “1814–1884”, “1833”, “1871” e “1884”', 'Parlamento representativo rejeita reformas reais, ganha composição agrária e sessões anuais; parlamentarismo baseado na confiança surge em 1884, após conflito e impeachment. Franquia original exclui mulheres e muitos homens.', 'practice', 'Página institucional sem data indicada; recorte de 1814–1884')], rationale: 'Representação com controles materiais da Coroa sustenta direção democrática moderada para o recorte anterior ao parlamentarismo pleno.', uncertainty: 'Fonte institucional retrospectiva, sem leitura completa do original de 1814 ou auditoria de cada eleição. Não imputa sufrágio universal, estabilidade do mesmo arranjo até 1905 nem democrático por ser simplesmente monarquia constitucional.' }], 'Contexto institucional e excertos constitucionais oficiais; edição integral original e mudanças legais posteriores pendentes.'),
  profile({
    id: 'finland-constitution-republic-1919', name: 'Finlândia — república da Constituição de 1919', aliases: ['Suomen Hallitusmuoto — ordem republicana de 1919'],
    period: 'Unidade constitucional, 1919–2000; codificação da edição fundadora de 17 de julho de 1919',
    rationale: 'Presidência materialmente forte coexistia com Assembleia representativa, confiança ministerial e garantias contra coerção arbitrária no texto fundador.',
    caveats: 'O perfil não equivale à Finlândia atual sob a Constituição de 2000. A vida jurídica de 81 anos inclui emendas e mudanças políticas; a codificação abaixo é exclusivamente da edição original, não certificação da prática interbélica nem média de todo o período. Tradução histórica requer cotejo completo com original finlandês.',
    sources: [source(fi, 'https://en.wikisource.org/wiki/Constitution_of_Finland_(1919)', 'Tradução do documento primário de 17 de julho de 1919. Usa-se o corpo da carta; o apêndice parlamentar de 1906 não é tratado como prova independente de sufrágio em todos os anos.'), source(fiEnd, 'https://www.finlex.fi/en/legislation/translations/1999/eng/731', 'Constituição nº 731/1999, seções 130–131: início em 1º de março de 2000 e revogação da Constituição de 1919.')],
  }, [
    { axis: 'rep', position: 'moderate-first', confidence: 'medium', relatedQuestionIds: ['representacao_15'], claims: [claim(fi, 'Art. 2, 19, 23, 27, 36, 43 e 45', 'Assembleia representa o povo, ministros precisam de confiança parlamentar e respondem perante ela; Presidente é escolhido por colégio eleitoral popular, pode dissolver a Assembleia e possui veto superável.', 'norm', '1919-07-17')], rationale: 'Representação e confiança ministerial sustentam direção democrática moderada, limitada por prerrogativas presidenciais relevantes.', uncertainty: 'Sem auditoria de eleições, exclusões ou exercício presidencial efetivo; não afirma democracia plena nem imputa continuidade de cada cláusula até 2000.' },
    { axis: 'pod', position: 'moderate-second', confidence: 'medium', relatedQuestionIds: ['poder_04', 'poder_19'], claims: [claim(fi, 'Art. 6, 10–13, 16 e 60', 'Carta garante liberdade pessoal, expressão sem censura prévia, reunião, privacidade e juízo regular; proíbe tribunais extraordinários, mas admite restrições por guerra, insurreição e hipóteses legais.', 'norm', '1919-07-17')], rationale: 'Garantias expressas contra coerção arbitrária sustentam direção moderada de liberdade, limitada pelas exceções.', uncertainty: 'O texto não demonstra execução, leis de exceção nem tratamento de opositores durante todo o período. Tradução ainda não integralmente cotejada; a direção não é irrestrita.' },
  ], 'Tradução original e identificação oficial da carta substitutiva; cotejo finlandês e prática não certificados.'),
  profile({
    id: 'dominican-san-cristobal-1844', name: 'República Dominicana — ordem de San Cristóbal', aliases: ['República Dominicana sob a primeira Constituição'],
    period: 'Primeira carta de 1844, antes da reforma de fevereiro de 1854; cláusulas originais de 6 de novembro de 1844',
    rationale: 'A primeira carta organiza províncias sob governadores presidenciais e estabelece o catolicismo como religião estatal.',
    caveats: 'Não equivale aos regimes de Trujillo, Balaguer ou ao país atual. O artigo 210 concede poderes excepcionais durante a guerra; não resolvemos representação efetiva a partir de promessas eletivas. A transcrição tem erros tipográficos e necessita cotejo com edição oficial integral.',
    sources: [source(dr, 'https://es.wikisource.org/wiki/Constituci%C3%B3n_dominicana_de_1844', 'Transcrição primária dos artigos da carta de 1844; cotejo integral pendente.'), source(drContext, 'https://tribunalconstitucional.gov.do/cec/publicaciones/la-constitucio-n-dominicana-y-sus-reformas-1844-2010/', 'Compilação oficial: edição/índice identificam a carta de 1844 e reforma em 25 de fevereiro de 1854. O PDF acessível contém introdução e índice, não foi usado como prova das cláusulas.')],
  }, [
    { axis: 'est', position: 'moderate-second', confidence: 'medium', relatedQuestionIds: ['estrutura_01', 'estrutura_05'], claims: [claim(dr, 'Art. 140–148', 'Governadores nomeados pelo Presidente dirigem agentes provinciais; deputações provinciais incluem representantes eleitos mas são presididas pelo governador central.', 'norm', '1844-11-06')], rationale: 'Direção territorial hierarquizada e nomeação central sustentam orientação unitária moderada, com representação local como contraponto.', uncertainty: 'Sem auditoria da prática de governo provincial ou de autonomia municipal; não se infere centralização absoluta. Cotejo integral oficial pendente.' },
    { axis: 'rel', position: 'moderate-second', confidence: 'medium', relatedQuestionIds: ['religiao_03', 'religiao_08'], claims: [claim(dr, 'Art. 38 e 208', 'Catolicismo é religião do Estado; exercício eclesiástico obedece a prelados canônicos e assuntos exclusivamente eclesiásticos remetem aos cânones.', 'norm', '1844-11-06')], rationale: 'Confessionalidade e competência eclesiástica delimitada sustentam religião institucional moderada.', uncertainty: 'Não demonstra teocracia, domínio geral de direito canônico, religiosidade popular ou perseguição efetiva. A carta distingue assuntos puramente eclesiásticos e civis; cotejo oficial integral pendente.' },
  ], 'Transcrição localizada e cronologia oficial; graduação média, cotejo oficial integral e prática pendentes.', { rep: 'Promessas eletivas e poderes de guerra do artigo 210 entram em tensão; falta prática revisada suficiente para resolver uma direção de representação.' }),
  profile({
    id: 'research-brazil-imperial-charter-1824', name: 'Brasil — Império sob a carta original de 1824', aliases: ['Império do Brasil — desenho anterior ao Ato Adicional'],
    period: 'Desenho original da carta imperial, 1824–1834; antes do Ato Adicional de 12 de agosto de 1834',
    rationale: 'Conselhos provinciais limitados, Poder Moderador e religião estatal delimitam o arranjo original, com câmaras representativas e garantias como contrapontos.',
    caveats: 'Promove o dossiê existente com a mesma identidade, preservado na fila de pesquisa. Não conta uma segunda cópia do Império nem toda a história de 1822–1889. Abdicação e regência em 1831 alteraram exercício do poder; aqui codificamos a carta original anterior à reforma provincial de 1834.',
    sources: [source(br, 'https://www2.camara.leg.br/legin/fed/consti/1824-1899/constituicao-35041-25-marco-1824-532540-publicacaooriginal-14770-pl.html', 'Publicação original oficial, sem incorporar retrospectivamente o Ato Adicional. Artigos 5, 35, 43, 71–89, 90–95, 98–102, 165 e 167–169.'), source(brReform, 'https://www.planalto.gov.br/ccivil_03/leis/lim/lim16.htm', 'Lei nº 16 de 12 de agosto de 1834 substitui conselhos por assembleias legislativas provinciais e amplia suas competências, justificando o limite normativo do recorte.')],
  }, [
    { axis: 'est', position: 'moderate-second', confidence: 'medium', relatedQuestionIds: ['estrutura_01', 'estrutura_05'], claims: [claim(br, 'Art. 71–89, 165 e 167–169', 'Conselhos provinciais representam interesses locais com competências limitadas; resoluções dependem de decisão central. Imperador nomeia e remove presidentes provinciais; câmaras municipais são eletivas.', 'norm', '1824-03-25')], rationale: 'Nomeação central e dependência normativa provincial sustentam orientação unitária moderada, sem apagar órgãos representativos territoriais.', uncertainty: 'Somente edição anterior a 1834; autonomia municipal e conselhos são contrapontos, e exercício efetivo na regência não foi auditado.' },
    { axis: 'rep', position: 'moderate-second', confidence: 'medium', relatedQuestionIds: ['representacao_10', 'representacao_15', 'representacao_16'], claims: [claim(br, 'Art. 35, 43, 90–95 e 98–101', 'Deputados são eletivos por voto indireto censitário; Imperador seleciona senadores vitalícios, controla o Poder Moderador, nomeia governo e pode dissolver a Câmara.', 'norm', '1824-03-25')], rationale: 'Prerrogativas reais extensas e sufrágio restrito sustentam direção monárquica/autocrática moderada, com representação legislativa real no desenho.', uncertainty: 'Não presume ditadura total nem eleições livres comprovadas. O recorte não mede regência, participação política efetiva ou reformas posteriores.' },
    { axis: 'rel', position: 'moderate-second', confidence: 'medium', relatedQuestionIds: ['religiao_03', 'religiao_08'], claims: [claim(br, 'Art. 5, 95(III), 102(II) e 179(V)', 'Catolicismo é estatal; outros cultos ficam em espaços privados sem exterior de templo; não católicos não podem ser deputados. Coroa nomeia bispos, com proteção condicionada contra perseguição religiosa.', 'norm', '1824-03-25')], rationale: 'Religião estatal e restrições confessionais de cidadania política sustentam direção religiosa moderada.', uncertainty: 'Não equivale a teocracia nem mede crença pessoal ou execução das restrições. Culto privado permitido e garantia condicionada são contrapontos.' },
  ], 'Publicação original da Câmara e alteração provincial de 1834 lidas; promoção do dossiê com identidade preservada.'),
];

const distinctness: Record<string, string> = {
  'poland-peoples-republic-1952': 'Estado socialista pós-guerra e carta de 1952; distinto da República de 1935 e da ordem atual de 1997.',
  'czechoslovakia-socialist-unitary-1960': 'Regime socialista e carta unitária de 1960; distinto da Primeira República; encerra-se o recorte unitário com a federação de 1969.',
  'poland-april-charter-1935': 'Mudança material para supremacia presidencial na carta de abril; não é alias de uma administração.',
  'hawaii-republic-1894': 'República sucessora da monarquia deposta, com carta e instituições próprias; não é a ideologia regional havaiana.',
  'norway-swedish-union-1814': 'Reino constitucional em união política com a Suécia, encerrada em 1905; não uma divisão artificial em antes/depois de 1884.',
  'finland-constitution-republic-1919': 'Ordem republicana fundada na carta de 1919, juridicamente substituída em 2000; fonte fundadora não representa todos os 81 anos.',
  'dominican-san-cristobal-1844': 'Primeira ordem constitucional independente, anterior à reforma de 1854; distinta de ditaduras e ordem atual.',
  'research-brazil-imperial-charter-1824': 'Promoção de identidade de pesquisa existente: desenho imperial original, não criação de outra cópia do mesmo dossiê.',
};
for (const entry of historicalCountryBatch02) {
  entry.identityOrigin = entry.id === 'research-brazil-imperial-charter-1824'
    ? { disposition: 'promoted-research-dossier', researchDossierId: entry.id, distinctness: distinctness[entry.id] }
    : { disposition: 'new-historical-unit', distinctness: distinctness[entry.id] };
  entry.codingScope = entry.period;
}
