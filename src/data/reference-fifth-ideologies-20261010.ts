import type { AxisKey, ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding, type EditorialPosition } from '../lib/reference-coding';

interface Definition {
  before: ReferenceEntry;
  addedSources: ReferenceSource[];
  codings: ReferenceAxisCoding[];
  unknownAxisReasons: Partial<Record<AxisKey, string>>;
  caveats: string;
}
type ExtendedReference = ReferenceEntry & { unknownAxisReasons?: Partial<Record<AxisKey, string>> };

/** Exact selected baselines: raw818 and all selected identities remain unchanged. */
const baselines: ReferenceEntry[] = [
  {
    "id": "ideology-ambedkarite-constitutional-socialism",
    "kind": "ideology",
    "category": "ideology",
    "name": "Socialismo constitucional ambedkarista (1947)",
    "period": "States and Minorities (1947), proposta da Scheduled Castes Federation; não a Constituição indiana inteira nem todas as fases de Ambedkar.",
    "rationale": "Liberdade política exige remover hierarquias de casta e impedir que poder econômico esvazie a cidadania igual. Direitos justiciáveis e salvaguardas de representação combinados com propriedade estatal de setores básicos, seguro e agricultura coletiva constitucionalmente protegida.",
    "caveats": "A proposta de 1947 inclui eleitorados separados e voto cumulativo: não substituir isso pelo sistema posterior de assentos reservados. Socialismo constitucional selecionado não representa automaticamente toda a tradição ambedkarista nem a forma final da Constituição de 1950. Imigração não se infere de regras de domicílio interno. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "sources": [
      {
        "title": "States and Minorities (B.R. Ambedkar, 1947)",
        "url": "https://www.constitutionofindia.net/historical-constitution/states-and-minorities-dr-b-r-ambedkar-1947/",
        "note": "Publicação: 1947. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Preâmbulo; Art. I; Art. II, § I; § II, cl.4(SM.38); § IV, representação e garantias. Leitura efetiva declarada na pesquisa: Preâmbulo, desenho da união, liberdades, excertos da proteção contra exploração e regras de representação/alteração de salvaguardas lidos; não todo memorial. Transcrição do Centre for Law and Policy Research; introdução editorial separada do memorial."
      }
    ],
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "evidence": {},
    "axisEvidence": {},
    "coding": {}
  },
  {
    "id": "ideology-democratic-confederalism-ocalan-2011",
    "kind": "ideology",
    "category": "ideology",
    "name": "Confederalismo democrático de Öcalan",
    "period": "Democratic Confederalism, primeira edição inglesa 2011, International Initiative; não constituições posteriores de Rojava.",
    "rationale": "Autogoverno plural de comunidades e grupos sociais federados, sem novo Estado-nação, com ecologia e emancipação feminina como pilares. Decisão local, coordenação delegada, consenso e autonomia cultural, com autodefesa subordinada às instituições democráticas e possibilidade de coexistência estatal.",
    "caveats": "Economia antimonopolista e ecológica é programada de modo genérico: ECO e CON precisam de desenho mais completo. Não confundir pluralismo cultural com política migratória completa; IMI é somente perspectiva de pesquisa. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "sources": [
      {
        "title": "Democratic Confederalism — Abdullah Öcalan",
        "url": "https://www.freeocalan.org/wp-content/uploads/2012/09/Ocalan-Democratic-Confederalism.pdf",
        "note": "Publicação: 2011, primeira edição. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: III.A–F, pp. impressas 21–30; dados editoriais. Leitura efetiva declarada na pesquisa: Página editorial, prefácio e trechos III.A–F recuperados no PDF; não 48 páginas integrais. Tradução International Initiative. Descrição normativa, sem atribuir práticas militares ou administrativas posteriores."
      },
      {
        "title": "When Öcalan met Bookchin — Damian Gerber and Shannon Brincat",
        "url": "https://research.usc.edu.au/esploro/outputs/journalArticle/When-%C3%96calan-met-Bookchin-The-Kurdish/99451377102621",
        "note": "Publicação: 2021, Geopolitics 26(4), pp. 973–997. Acesso registrado pela pesquisa: 2026-10-08. Tipo: scholarly. Localizador: Abstract. Leitura efetiva declarada na pesquisa: Resumo e ficha editorial, não artigo completo. Confirma linhagem comum; não basta sozinho para afirmar diferença entre as duas entradas."
      }
    ],
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "evidence": {},
    "axisEvidence": {},
    "coding": {}
  },
  {
    "id": "ideology-communalism",
    "category": "ideology",
    "kind": "ideology",
    "name": "Comunalismo de Bookchin",
    "period": "The Communalist Project, ensaio de novembro de2002; republicação textual TheAnarchistLibrary",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Socialismo ecológico de cidadania territorial, articulado em assembleias municipais confederadas que assumem a decisão econômica e política. Participação eleitoral municipal para criar assembleias legislativas, voto majoritário com direitos de minoria e poder confederal rival do Estado.",
    "caveats": "Ensaio2002 específico, não livro posterior ou todo movimento comunalista. Retirada de membro exige aprovação confederal, não saída unilateral irrestrita. Maioria e dissenso coexistem; proximidade com o confederalismo de Öcalan permanece em revisão. Prática histórica não certificada. O próprio autor rejeita tratar comunalismo como simples prefixo do anarquismo. Não inferir pacifismo de antiestatismo; o texto admite conflito e imposição de decisões. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "sources": [
      {
        "title": "The Next Revolution: Popular Assemblies and the Promise of Direct Democracy — Verso Books",
        "url": "https://www.versobooks.com/products/549-the-next-revolution",
        "note": "Coletânea de textos primários de Bookchin sobre assembleias, confederalismo e ecologia social."
      },
      {
        "title": "The Communalist Project — BookchinNovember2002 primaryessay",
        "url": "https://theanarchistlibrary.org/library/murray-bookchin-the-communalist-project",
        "note": "Foram inspecionadas as linhas 112–146 e 161–178 e as notas 8–9: assembleias cívicas, municipalização, decisões por maioria, dissenso e organização responsável. A nota 9, na linha 212, condiciona a retirada à aprovação confederal. O livro anterior e seu período de 1990–2000 permanecem no arquivo completo, sem lhes atribuir este ensaio de 2002."
      },
      {
        "title": "The Communalist Project — Murray Bookchin",
        "url": "https://theanarchistlibrary.org/library/murray-bookchin-the-communalist-project",
        "note": "Publicação: 2002-11. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Passagens sobre assembleias, cidadania, economia e maioria, linhas 114–175. Leitura efetiva declarada na pesquisa: Metadados e passagens 96–175 lidas seletivamente; não todas as notas ou ensaio integral. Publicado em Communalism nº 2; domínio com www falhou, versão sem www funcionou."
      },
      {
        "title": "When Öcalan met Bookchin — Damian Gerber and Shannon Brincat",
        "url": "https://research.usc.edu.au/esploro/outputs/journalArticle/When-%C3%96calan-met-Bookchin-The-Kurdish/99451377102621",
        "note": "Publicação: 2021, Geopolitics 26(4), pp. 973–997. Acesso registrado pela pesquisa: 2026-10-08. Tipo: scholarly. Localizador: Abstract. Leitura efetiva declarada na pesquisa: Resumo e ficha do repositório universitário; não artigo integral. Apoia parentesco conceitual; diferença institucional é verificada nas primárias."
      }
    ],
    "evidence": {},
    "axisEvidence": {},
    "coding": {}
  }
];

const reviewedOn = '2026-10-10';
const selectionCaveat = (entry: ReferenceEntry) => entry.caveats.replace(
  'Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos.',
  'A pesquisa qualitativa de seleção, por si, não certifica os 12 eixos.',
).replace('IMI é somente perspectiva de pesquisa.', 'IMI é codificado somente no componente cultural documentado.');
const ambedkarSource: ReferenceSource = {
  title: 'States and Minorities — memorial de 1947, transcrição CLPR, revisão 2026-10-10',
  url: 'https://www.constitutionofindia.net/historical-constitution/states-and-minorities-dr-b-r-ambedkar-1947/',
  note: 'Memorial de 1947, transcrição institucional CLPR. Nova leitura: preâmbulo e artigos I–II, SM.1–52; introdução editorial separada. Acesso 2026-10-10. Sem colação de fac-símile, exposição justificativa integral ou alegação de implementação.',
};
const ocalanSource: ReferenceSource = {
  title: 'Democratic Confederalism — primeira edição inglesa 2011, revisão 2026-10-10',
  url: 'https://www.freeocalan.org/wp-content/uploads/2012/09/Ocalan-Democratic-Confederalism.pdf',
  note: 'Abdullah Öcalan; tradução International Initiative, Transmedia, primeira edição 2011, ISBN 978-0-9567514-2-3. Nova leitura: ficha editorial, II.B.3–4, II.C, III.A–H e IV, pp. impressas 16–34. Acesso 2026-10-10. Capítulo V apenas parcial; sem incorporar Rojava posterior.',
};
const bookchinSource: ReferenceSource = {
  title: 'The Communalist Project — ensaio de novembro de 2002, revisão 2026-10-10',
  url: 'https://theanarchistlibrary.org/library/murray-bookchin-the-communalist-project',
  note: 'Murray Bookchin, Communalism nº 2, novembro de 2002; transcrição The Anarchist Library. Nova leitura delimitada: metadados, introdução (19–27) e corpo, parágrafos sobre ecologia social até conclusão (linhas web 94–197); notas 3–4, 8–10 e 16. Acesso 2026-10-10. Sem colação do impresso ou endosso da narrativa histórica.',
};

function code(
  source: ReferenceSource, publishedDate: string, axis: AxisKey,
  position: EditorialPosition, confidence: 'medium' | 'high',
  relatedQuestionIds: string[], locator: string, statement: string,
  rationale: string, uncertainty: string,
): ReferenceAxisCoding {
  return { axis, position, confidence, relatedQuestionIds,
    claims: [{ sourceTitle: source.title, locator, statement, basis: 'declaration', publishedDate, accessedDate: reviewedOn }],
    rationale, uncertainty, reviewedOn };
}
const a = (axis: AxisKey, position: EditorialPosition, confidence: 'medium' | 'high', ids: string[], locator: string, statement: string, rationale: string, uncertainty: string) =>
  code(ambedkarSource, '1947; memorial States and Minorities, transcrição CLPR sem data editorial identificada', axis, position, confidence, ids, locator, statement, rationale, uncertainty);
const o = (axis: AxisKey, position: EditorialPosition, confidence: 'medium' | 'high', ids: string[], locator: string, statement: string, rationale: string, uncertainty: string) =>
  code(ocalanSource, '2011, primeira edição inglesa, International Initiative/Transmedia', axis, position, confidence, ids, locator, statement, rationale, uncertainty);
const b = (axis: AxisKey, position: EditorialPosition, confidence: 'medium' | 'high', ids: string[], locator: string, statement: string, rationale: string, uncertainty: string) =>
  code(bookchinSource, 'Novembro de 2002; Communalism nº 2, republicação textual sem colação do impresso', axis, position, confidence, ids, locator, statement, rationale, uncertainty);

export const fifthIdeologies20261010Definitions: Definition[] = [
  {
    before: baselines[0]!, addedSources: [ambedkarSource],
    codings: [
      a('est', 'moderate-first', 'medium', ['estrutura_01', 'estrutura_05', 'estrutura_16'],
        'Art. I, §I, cls.1–4 (SM.4–7); art. II, §III, cl.4 (SM.42). Contraponto: preâmbulo SM.1 e SM.5–6.',
        'Estados autônomos têm legislaturas e veto à alteração territorial, dentro de união indissolúvel com poderes centrais.',
        'Autonomia institucional territorial sustenta direção federal moderada.',
        'Não há aqui lista completa de competências, autonomia fiscal ou secessão. Não se imputa desenho constitucional posterior.'),
      a('rep', 'strong-first', 'high', ['representacao_01', 'representacao_05', 'representacao_07'],
        'Art. II, §I, item11 (SM.24); §II, cl.1 (SM.35); §III, cl.1 (SM.39); §IV, parteI, cl.1 (SM.43).',
        'Voto adulto, Legislativo eleito, Executivo escolhido pelo Legislativo e proteção judicial compõem o desenho representativo.',
        'A autoridade eleitoral e seus limites são constitutivos do programa.',
        'Eleitorados separados; Executivo de mandato protegido, removível por impeachment. Não prova voto secreto, referendos ou a prática indiana.'),
      a('pod', 'moderate-second', 'medium', ['poder_01', 'poder_04', 'poder_19'],
        'Art. II, §I, itens2,9–14 (SM.15,22–27); §II, cl.1 (SM.35). Contraponto §III, cl.3 (SM.41).',
        'Garante devido processo, buscas justificadas, expressão e habeas corpus, sujeitos a exceções de ordem pública e emergência.',
        'Garantias coercivas concretas sustentam liberdade moderada.',
        'Sanções antiboicote e cláusulas de moralidade impedem leitura irrestrita. Sem imputar política de drogas, pena de morte ou vigilância digital.'),
      a('eco', 'strong-first', 'high', ['economia_03', 'economia_05', 'economia_15', 'economia_18'],
        'Art. II, §II, cl.4, itens1–9 (SM.38); contraponto §II, cl.2, item1 (SM.36).',
        'Propõe propriedade estatal da agricultura, indústrias-chave e básicas e seguros, com compensação aos proprietários.',
        'Abrangência produtiva estrutural sustenta polo público forte.',
        'Propriedade pessoal e debêntures permanecem. Não se afirma extinção de toda propriedade privada nem participação observada no produto nacional.'),
      a('con', 'moderate-first', 'medium', ['controle_01', 'controle_04', 'controle_07'],
        'Art. II, §II, cl.4, itens3,6–10, sobretudo9(i)(b–c),9(iii–iv) (SM.38).',
        'Impõe regras produtivas, financiamento e distribuição na agricultura coletiva, além de seguro obrigatório regulado.',
        'Mecanismos de direção econômica excedem mera titularidade pública.',
        'Não demonstra plano universal de preços, salários ou câmbio. Abrangência agrária justifica inclinação moderada, não planejamento integral.'),
      a('rel', 'moderate-first', 'high', ['religiao_03', 'religiao_08', 'religiao_18'],
        'Art. II, §I, itens14–20 (SM.27–33), especialmente17; §II, cl.2, item5 (SM.36).',
        'Recusa religião estatal e coerção religiosa, mantendo liberdade de culto sob leis comuns.',
        'Laicidade institucional explícita sustenta direção irreligiosa moderada.',
        'Autonomia religiosa e educação parental permanecem. Laicidade não equivale a ateísmo, hostilidade à fé ou ausência de símbolos religiosos.'),
      a('mor', 'moderate-first', 'medium', ['moral_05', 'moral_08', 'moral_18'],
        'Art. II, §I, itens1–6 (SM.14–19); §II, cls.2–3 (SM.36–37); §IV, partesI–II (SM.43–47).',
        'Combate incapacidades de casta e sexo e institui representação e oportunidades compensatórias para castas oprimidas.',
        'Reforma jurídica de hierarquias herdadas sustenta progressismo moderado.',
        'Não equipara casta a raça nem resolve aborto, sexualidade ou casamento. Moralidade pública continua limite expresso; não liberalização cultural integral.'),
    ],
    unknownAxisReasons: {
      imi: 'Direitos de minorias não resolvem assimilação cultural ou imigração; não transpor mobilidade interna para admissão internacional.',
      dip: 'Defesa contra agressão não estabelece preferência geral entre militarização e diplomacia.',
      int: 'Admissão territorial negociada não resolve intervenção externa, sanções ou alianças.',
      com: 'Reorganização produtiva não especifica tarifas, capital estrangeiro ou integração comercial.',
      tec: 'Educação e instrumentos agrícolas não constituem orientação tecnológica abrangente.',
    },
    caveats: `${selectionCaveat(baselines[0]!)} Revisão documental de 10/10/2026: sete eixos do memorial de 1947 codificados como propostas, não Constituição adotada nem prática. Âncoras editoriais e faixas não são medições; somente eixos explicitamente mapeados participam do comparador. O acesso foi à transcrição CLPR, sem colação de fac-símile.`,
  },
  {
    before: baselines[1]!, addedSources: [ocalanSource],
    codings: [
      o('est', 'strong-first', 'high', ['estrutura_01', 'estrutura_13', 'estrutura_17', 'estrutura_20'],
        'III.A–D, pp.22–27; IV.3 e IV.5, pp.33–34. Páginas impressas = índice físico do PDF +1.',
        'Decisões pertencem às comunidades; níveis superiores coordenam delegados temporários em estruturas federadas.',
        'A distribuição territorial do poder é o núcleo constitutivo.',
        'Modelo não estatal; não se imputa autonomia fiscal, secessão ou aplicação posterior. A âncora compara decisão territorial, não identidade jurídica com uma federação estatal.'),
      o('rep', 'strong-first', 'high', ['representacao_01', 'representacao_17', 'representacao_19'],
        'III, pp.21–22; III.D, pp.26–27; III.F, p.30; IV.3, p.33.',
        'Eleição direta, participação cotidiana, pluralidade organizada e respeito ao dissenso fundamentam decisões coletivas.',
        'Mecanismos de participação e controle sustentam democracia forte.',
        'Programa normativo; não prova funcionamento ou proteção eleitoral concreta. Consenso e eleição não são respostas literais a cada pergunta do eixo.'),
      o('imi', 'strong-second', 'high', ['imigracao_04', 'imigracao_06', 'imigracao_08', 'imigracao_14'],
        'III, p.21; III.A, p.22; III.C–D, pp.25–26; III.H, p.32.',
        'Afirma pluralidade cultural e associações identitárias, rejeitando homogeneização e assimilação impostas.',
        'Acomodação cultural estruturante sustenta multicultura forte.',
        'Não estabelece fronteiras abertas ou regras de asilo. Escopo é coexistência cultural; avaliação histórica de outros povos no capítuloV não é adotada como fato.'),
      o('dip', 'moderate-second', 'medium', ['diplomacia_02', 'diplomacia_12', 'diplomacia_16', 'diplomacia_18'],
        'III.E, pp.28–29; III.H, p.32; IV.4–5, pp.33–34.',
        'Defende convivência pacífica com Estados e desmilitarização social, preservando forças permanentes de autodefesa democraticamente controladas.',
        'Finalidade defensiva e convivência sustentam orientação pacífica moderada.',
        'Não é pacifismo absoluto, desarmamento ou extinção militar. Não se deduz execução, orçamento, regras de engajamento ou conduta de organizações armadas.'),
      o('mor', 'moderate-first', 'medium', ['moral_02', 'moral_18'],
        'II.B.3, pp.16–17; III, p.21; contraponto III.B, p.23.',
        'Coloca feminismo no programa e contesta subordinação feminina e hierarquias patriarcais herdadas.',
        'Revisão estrutural de papéis de gênero sustenta progressismo moderado.',
        'Herança coletiva é preservada criticamente. Não imputa aborto, direitos LGBT, moral sexual ou políticas posteriores; um programa de emancipação não certifica resultados.'),
    ],
    unknownAxisReasons: {
      pod: 'Dissenso e participação não especificam suficientemente limites penais, privacidade e coerção; segurança interna por forças de defesa requer mais análise.',
      int: 'Rejeitar imposição imperial e admitir confederação transfronteiriça voluntária não resolve todo o repertório de intervenção externa.',
      eco: 'Alternativa antimonopolista não define titularidade e provisão produtiva abrangentes.',
      con: 'Autogestão política não demonstra mecanismos gerais de preços e planejamento econômico.',
      com: 'Confederação global não equivale a abertura comercial ou posição tarifária.',
      rel: 'Crítica à instrumentalização religiosa não estabelece relação jurídica entre instituições religiosas e administração.',
      tec: 'Ecologia e crítica ao positivismo não resolvem tecnologia, biotecnologia ou substituição tecnológica do consumo.',
    },
    caveats: `${selectionCaveat(baselines[1]!)} Revisão documental de 10/10/2026: cinco eixos no programa de 2011; continua abaixo do gate de seis. Nenhuma transferência de prática do PKK ou de constituições e instituições posteriores de Rojava. Âncoras editoriais descrevem somente proposições delimitadas; os demais eixos permanecem desconhecidos.`,
  },
  {
    before: baselines[2]!, addedSources: [bookchinSource],
    codings: [
      b('est', 'moderate-first', 'high', ['estrutura_01', 'estrutura_13', 'estrutura_15', 'estrutura_20'],
        'Parágrafos iniciados “The concrete political dimension” e “Minimally” (web129–135); nota9 (212) e nota10 (213).',
        'Assembleias municipais decidem e se confederam; saída de um membro depende de autorização confederal.',
        'Poder municipal constitutivo com vínculo confederal limita a intensidade.',
        'Não equivale a soberania local irrestrita nem a direito unilateral de secessão. Administração territorial, não simplesmente tamanho do Estado, é o construto comparado.'),
      b('rep', 'strong-first', 'high', ['representacao_03', 'representacao_11', 'representacao_17', 'representacao_19'],
        'Parágrafos “Finally, Communalism” até “Indeed, the views” (166–169); “A serious libertarian approach” até “Freedom from authoritarianism” (175–178).',
        'Decisão assemblear majoritária protege dissenso minoritário e exige dirigentes responsabilizáveis e revogáveis.',
        'Responsabilidade democrática tem mecanismos explicitamente definidos.',
        'Não é consenso com veto individual. Não imputa sufrágio secreto, ausência de liderança, experiência histórica bem-sucedida ou inexistência de coerção.'),
      b('eco', 'strong-first', 'high', ['economia_03', 'economia_05', 'economia_13', 'economia_18'],
        'Parágrafos “Communalism constitutes a critique” e “It seeks to integrate” (137–138); crítica à propriedade coletiva competitiva (141–143).',
        'Substitui propriedade privada produtiva por municipalização abrangente, submetendo empresas às assembleias.',
        'Titularidade comunitária de toda produção sustenta público forte.',
        'Público inclui propriedade municipal/comum; não significa nacionalização por governo central ou gestão empresarial exclusiva pelos trabalhadores.'),
      b('con', 'strong-first', 'high', ['controle_01', 'controle_02', 'controle_04', 'controle_13'],
        'Parágrafos “In short, social ecology” (115), “In a Communalist way of life” (145–146) e “To be sure, the various tendencies” (182).',
        'Propõe planos e regulação por assembleias e substituição da coordenação mercantil por necessidades deliberadas.',
        'Coordenação produtiva política explícita sustenta planejamento forte.',
        'Planejamento participativo descentralizado não é comando burocrático central. Não imputa preços específicos, banco central, tributação ou sucesso de implementação.'),
      b('tec', 'moderate-first', 'medium', ['tecnologia_02', 'tecnologia_03', 'tecnologia_08', 'tecnologia_19'],
        'Introdução (19–27); parágrafos sobre ecologia social (111–115), produção e potencial humano (139–140); nota3 (201–202).',
        'Recusa primitivismo e incorpora ciência e técnicas produtivas à abundância e ao lazer, sob limites ecológicos.',
        'Uso emancipador da técnica sustenta inclinação tecnológica moderada.',
        'Não é tecnossolucionismo irrestrito: preservação ecológica limita a direção. Não imputa posição sobre nuclear, IA, genes, implantes ou colonização espacial.'),
    ],
    unknownAxisReasons: {
      pod: 'Expressão dissidente e accountability não resolvem liberdade civil ampla; não derivar POD automaticamente de REP.',
      imi: 'Inclusão do estrangeiro na cidadania não especifica manutenção de idiomas e costumes; não confundir incorporação com assimilação nem com multiculturalismo.',
      dip: 'Milícia e conflito revolucionário não definem preferência militar agregada; nota4 admite defesa dos Aliados em1939.',
      int: 'Confederação e internacionalismo de esquerda não especificam regras para intervenção externa contemporânea.',
      com: 'Rejeição do mercado em geral não se traduz automaticamente em protecionismo nacional.',
      rel: 'Racionalidade e crítica histórica às igrejas não especificam regime de religião pública.',
      mor: 'Crítica de hierarquias e exclusões antigas não documenta por si o conjunto de escolhas morais deste eixo.',
    },
    caveats: `${selectionCaveat(baselines[2]!)} Revisão documental de 10/10/2026: cinco eixos no ensaio de 2002; continua abaixo do gate de seis. A nova leitura inclui as restrições confederais e o argumento antiprimitivista, sem converter ecologia em rejeição geral de tecnologia. Âncoras e faixas são interpolações editoriais, não medidas; nenhuma nova fonte foi aplicada a outro período.`,
  },
];

function buildPost(entry: ReferenceEntry, definition: Definition): ReferenceEntry {
  const sources = [...entry.sources, ...definition.addedSources];
  const vec = { ...entry.vec }, evidence = { ...entry.evidence };
  const axisEvidence = { ...entry.axisEvidence }, coding = { ...entry.coding };
  for (const input of definition.codings) {
    const value = codeReferenceAxis(input, sources);
    vec[input.axis] = value.value; evidence[input.axis] = value.evidence;
    axisEvidence[input.axis] = value.axisEvidence!; coding[input.axis] = value.coding;
  }
  return { ...entry, sources, vec, evidence, axisEvidence, coding, caveats: definition.caveats,
    unknownAxisReasons: { ...definition.unknownAxisReasons } } as ExtendedReference;
}
export const fifthIdeologies20261010ExpectedPosts = fifthIdeologies20261010Definitions.map(definition => buildPost(structuredClone(definition.before), definition));
export function reconcileFifthIdeologies20261010(entry: ReferenceEntry): ReferenceEntry {
  const index = fifthIdeologies20261010Definitions.findIndex(definition => definition.before.id === entry.id);
  if (index < 0) return entry;
  if (JSON.stringify(entry) === JSON.stringify(fifthIdeologies20261010ExpectedPosts[index])) return entry;
  const definition = fifthIdeologies20261010Definitions[index]!;
  if (JSON.stringify(entry) !== JSON.stringify(definition.before)) throw new Error(`Selected ideology baseline diverged for ${entry.id}; preserve later work and review before integrating.`);
  return buildPost(entry, definition);
}
