import type { AxisKey, ReferenceEntry, ReferenceSource } from "./references";
import { codeReferenceAxis, type ReferenceAxisCoding, type EditorialPosition } from "../lib/reference-coding";

interface Definition {
  before: ReferenceEntry;
  addedSources: ReferenceSource[];
  codings: ReferenceAxisCoding[];
  unknownAxisReasons: Partial<Record<AxisKey, string>>;
  caveats: string;
}
type ExtendedReference = ReferenceEntry & { unknownAxisReasons?: Partial<Record<AxisKey, string>> };

/** Exact selected baselines; never rewrite raw818 or change selected identities. */
const baselines: ReferenceEntry[] = [
  {
    "id": "ideology-anarcho-communism",
    "category": "ideology",
    "kind": "ideology",
    "name": "Anarcocomunismo de Kropotkin",
    "period": "The Conquest of Bread, obra francesa 1892; versão inglesa Vanguard Press 1926 digitalizada, capítulo 13; prefácio 1913 excluído",
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
    "rationale": "Expropriação e comunização dos meios de vida, com acesso segundo necessidades e coordenação por associação livre, sem governo estatal. Substitui salário e cálculo individual de contribuição pela satisfação comum das necessidades; federações e acordos livres coordenam atividades.",
    "caveats": "Tradução inglesa posterior, não colação francesa. A crítica aos coletivistas não prova que todos defendem a fórmula descrita; grupos espanhóis podem escolher distribuição comunista. A participação produtiva e necessidades coexistem, sem deduzir isenção de todo trabalho. Rejeição do governo não demonstra automaticamente um modelo eleitoral completo. Kropotkin distingue explicitamente coletivistas estatais e coletivistas anarquistas espanhóis: não atribuir a Bakunin todas as críticas a um empregador estatal. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "sources": [
      {
        "title": "The Conquest of Bread — Marxists Internet Archive",
        "url": "https://www.marxists.org/reference/archive/kropotkin-peter/1892/bread.htm",
        "note": "Texto primário sobre comunismo anarquista, propriedade comum e organização social."
      },
      {
        "title": "The Conquest of Bread — primary Chapter13 entitlement,1892/English1926",
        "url": "https://www.marxists.org/reference/archive/kropotkin-peter/1892/bread.htm",
        "note": "Autor próprio 1118–1225 e peer 1118–1218 efetivamente lidos;13.1–4 rejeitam salário/notas e medida individual,1186/1203 necessidades com participação produtiva. Metadados6–8 edição 1926; prefácio 1913 não atribuído à obra 1892. Generalizações históricas/econômicas não comprovadas."
      },
      {
        "title": "The Conquest of Bread — Peter Kropotkin",
        "url": "https://www.gutenberg.org/cache/epub/23428/pg23428-images.html",
        "note": "Publicação: 1892, obra; edição reproduzida 1926. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: III, Anarchist Communism; XIII, The Collectivist Wages System. Leitura efetiva declarada na pesquisa: Página de rosto e passagens dos capítulos III e XIII localizadas; não livro inteiro. A edição de 1926 inclui materiais editoriais posteriores à morte do autor, separados do texto doutrinário."
      },
      {
        "title": "Anarchism — Stanford Encyclopedia of Philosophy",
        "url": "https://plato.stanford.edu/entries/anarchism/",
        "note": "Publicação: Versão consultada em 2026; data editorial não registrada nesta leitura. Acesso registrado pela pesquisa: 2026-10-08. Tipo: scholarly. Localizador: Discussões de anarquismo religioso e comunal; passagens sobre Proudhon, Bakunin, Kropotkin e Tolstói. Leitura efetiva declarada na pesquisa: Passagens localizadas por busca interna, incluindo linhas renderizadas 63–70 e 146–150; não leitura integral. A taxonomia geral não substitui os programas próprios abaixo."
      }
    ],
    "evidence": {},
    "axisEvidence": {},
    "coding": {}
  },
  {
    "id": "ideology-pacifist-anarchism",
    "category": "ideology",
    "kind": "ideology",
    "name": "Anarquismo cristão de Tolstói",
    "period": "O Reino de Deus está em vós, 1894",
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
    "rationale": "Recusa da autoridade coerciva por dever cristão de amor e não resistência violenta, incompatível com juramentos e serviço militar. Não cooperação individual com obrigações estatais violentas, desfazendo a autoridade pela consciência e pelo exemplo.",
    "caveats": "É uma corrente minoritária e o texto não codifica os demais eixos. Os valores centrais refletem ausência de evidência em temas econômicos, migração e desenho democrático contemporâneo. Convicção religiosa pública e recusa do Estado não equivalem a governo clerical ou religião oficial. O capítulo selecionado não estabelece regime sistêmico de propriedade, alocação ou comércio. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "sources": [
      {
        "title": "The Kingdom of God Is Within You — Project Gutenberg",
        "url": "https://www.gutenberg.org/ebooks/4602",
        "note": "Texto primário de Tolstói sobre não resistência, Estado e militarismo."
      },
      {
        "title": "The Kingdom of God Is Within You — Chapter 9",
        "url": "https://www.marxists.org/archive/tolstoy/1894/the-kingdom-of-god-is-within-you/chapter-9.html",
        "note": "Publicação: 1894, tradução inglesa de Constance Garnett. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Capítulo IX, não cooperação e consciência cristã. Leitura efetiva declarada na pesquisa: Sinopse e passagens iniciais 50–70; não livro integral. MIA reproduz Gutenberg/RevoltLib; tentativa de URL chapter-09 falhou e foi corrigida pelo índice."
      },
      {
        "title": "Anarchism — Stanford Encyclopedia of Philosophy",
        "url": "https://plato.stanford.edu/entries/anarchism/",
        "note": "Publicação: Versão consultada em 2026; data editorial não registrada nesta leitura. Acesso registrado pela pesquisa: 2026-10-08. Tipo: scholarly. Localizador: Discussões de anarquismo religioso e comunal; passagens sobre Proudhon, Bakunin, Kropotkin e Tolstói. Leitura efetiva declarada na pesquisa: Passagens localizadas por busca interna, incluindo linhas renderizadas 63–70 e 146–150; não leitura integral. A taxonomia geral não substitui os programas próprios abaixo."
      }
    ],
    "evidence": {},
    "axisEvidence": {},
    "coding": {}
  },
  {
    "id": "ideology-gandhian-swaraj",
    "kind": "ideology",
    "category": "ideology",
    "name": "Swaraj gandhiano (1909–1947)",
    "period": "Hind Swaraj (1909) e formulações de república aldeã de Gandhi em Harijan (1938–1947).",
    "rationale": "Autogoverno envolve domínio ético de si, independência anticolonial e comunidades capazes de satisfazer suas necessidades sem exploração. Repúblicas aldeãs cooperativas com panchayat eleito, não cooperação não violenta e produção local; poder deve crescer de baixo para cima.",
    "caveats": "O ideal de Hind Swaraj não se confunde com o programa parlamentar circunstancial: Gandhi faz essa distinção no prefácio de 1921. Crítica à maquinaria e defesa de autonomia não provam autarquia absoluta. As posições de Gandhi sobre casta e gênero variam historicamente; não apagar tensões com sua linguagem de aldeia ideal. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "sources": [
      {
        "title": "Hind Swaraj or Indian Home Rule",
        "url": "https://www.gutenberg.org/files/40461/40461-h/40461-h.htm",
        "note": "Publicação: 1909. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Prefácios de 1919/1921; caps.XIII–XIV, XVII, XIX. Leitura efetiva declarada na pesquisa: Prefácios, passagens sobre civilização, autogoverno e não violência e sumário lidos; não leitura integral. Texto digital é edição posterior com prefácios; a referência a 1908 no prefácio não deve substituir a data 1909 usualmente atribuída à composição/publicação."
      },
      {
        "title": "The Mind of Mahatma Gandhi, chapter 78: Village Swaraj",
        "url": "https://www.mkgandhi-sarvodaya.org/momgandhi/chap78.htm",
        "note": "Publicação: 1938–1947. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Village Swaraj e Government Of Village; Harijan 26-7-1942, p. 238; Public Opinion, 1947. Leitura efetiva declarada na pesquisa: Seções sobre cooperação, panchayat anual eleito por homens e mulheres, ausência de intocabilidade e sanção não violenta lidas. Compilação de excertos datados; não texto único de 1909."
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
    "id": "ideology-national-liberation-socialism",
    "category": "ideology",
    "kind": "ideology",
    "name": "Ujamaa (Arusha, 1967)",
    "period": "Declaração de Arusha, Tanzânia, 1967",
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
    "rationale": "Socialismo de cooperação e autossuficiência que põe trabalhadores e camponeses no centro da produção e da autoridade política. Controle público dos meios estratégicos, desenvolvimento agrícola cooperativo e código de liderança que impede dirigentes de obter renda de ações, diretorias privadas e aluguéis.",
    "caveats": "Ujamaa evoluiu entre proposta normativa e políticas estatais, e não equivale a todos os movimentos de libertação nacional. A implementação coercitiva não é inferida da declaração. O texto afirma que propriedade estatal sem democracia não basta para socialismo; a autodescrição não comprova pluralismo efetivo. Não identificar automaticamente a doutrina de 1967 com coerção de reassentamentos posteriores. Autossuficiência não exclui toda ajuda, indústria ou comércio externo; o próprio texto ressalva isso. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "sources": [
      {
        "title": "The Arusha Declaration — Nyerere Archive",
        "url": "https://www.files.ethz.ch/isn/125524/8004_Arusha_Declaration.pdf",
        "note": "Texto primário de TANU, 1967, sobre socialismo, igualdade cívica, propriedade e ação estatal."
      },
      {
        "title": "The Arusha Declaration and TANU’s Policy on Socialism and Self-Reliance",
        "url": "https://www.marxists.org/subject/africa/nyerere/1967/arusha-declaration.htm",
        "note": "Publicação: 1967-02-05. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Partes I–III e V; seção The Existence of Democracy; Leadership 1–6. Leitura efetiva declarada na pesquisa: Passagens sobre democracia camponesa/operária, agricultura, meios públicos, ajuda externa e código de liderança lidas; não leitura integral linha a linha. Reprodução de tradução inglesa revista do texto discutido/publicado em suaíli."
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
);
const kropotkinSource: ReferenceSource = {
  title: 'The Conquest of Bread — capítulo XIII, revisão 2026-10-10',
  url: 'https://www.marxists.org/reference/archive/kropotkin-peter/1892/bread.htm',
  note: 'Obra francesa de 1892; tradução inglesa, Vanguard Press 1926, digitalizada por Gutenberg e reproduzida no MIA em 2021. Capítulo XIII completo lido; prefácio de 1913 excluído. Acesso 2026-10-10. Sem colação com original francês.',
};
const tolstoySource: ReferenceSource = {
  title: 'The Kingdom of God Is Within You — capítulo IX, revisão 2026-10-10',
  url: 'https://www.marxists.org/archive/tolstoy/1894/the-kingdom-of-god-is-within-you/chapter-9.html',
  note: 'Texto de 1894, tradução inglesa de Constance Clara Garnett; MIA, reprodução de Gutenberg/RevoltLib, 2021. Capítulo IX completo lido, sem certificar os exemplos históricos narrados. Acesso 2026-10-10. Sem colação com original russo.',
};
const gandhiBookSource: ReferenceSource = {
  title: 'Indian Home Rule — Hind Swaraj, revisão 2026-10-10',
  url: 'https://www.gutenberg.org/files/40461/40461-h/40461-h.htm',
  note: 'Hind Swaraj, 1909; versão inglesa na quinta edição Ganesh & Co., Madras, 1922. Lidos página de rosto, prefácios de 1919/1921, XVII, XIX e passagens XVIII/XX citadas. Prefácios e nota editorial separados do corpo. Acesso 2026-10-10. Não colacionado com o gujarati.',
};
const gandhiVillageSource: ReferenceSource = {
  title: 'Panchayat Raj — excertos de Gandhi 1938–1947, revisão 2026-10-10',
  url: 'https://www.mkgandhi-sarvodaya.org/momgandhi/chap78.htm',
  note: 'Compilação The Mind of Mahatma Gandhi, página intitulada Panchayat Raj. Excertos datados de 1938–1947 lidos; códigos usam Harijan 26/7/1942 p.238 e 28/7/1946 p.236. Trechos rotulados 1922 e 1948 excluídos do período selecionado. Acesso 2026-10-10; sem colação com os números originais.',
};
const arushaSource: ReferenceSource = {
  title: 'The Arusha Declaration — tradução inglesa revista, revisão 2026-10-10',
  url: 'https://www.marxists.org/subject/africa/nyerere/1967/arusha-declaration.htm',
  note: 'Declaração de TANU, 5/2/1967, atribuída a Julius Nyerere. Tradução inglesa revista segundo o cabeçalho; original discutido/publicado em suaíli. Corpo das partes I–V integralmente lido. Acesso 2026-10-10; tradutor não identificado e sem colação com o suaíli.',
};
const makeCoding = (source: ReferenceSource, publishedDate: string) => (
  axis: AxisKey, position: EditorialPosition, relatedQuestionIds: string[], locator: string,
  statement: string, rationale: string, uncertainty: string,
): ReferenceAxisCoding => ({
  axis, position, confidence: 'medium', relatedQuestionIds,
  claims: [{ sourceTitle: source.title, locator, statement, basis: 'declaration', publishedDate, accessedDate: reviewedOn }],
  rationale, uncertainty, reviewedOn,
});
const k = makeCoding(kropotkinSource, 'Obra de 1892; tradução inglesa na edição Vanguard Press 1926');
const t = makeCoding(tolstoySource, '1894, tradução inglesa de Constance Clara Garnett');
const g = makeCoding(gandhiBookSource, 'Hind Swaraj, 1909; quinta edição inglesa, 1922');
const v = makeCoding(gandhiVillageSource, 'Harijan, 26/7/1942 p.238 e 28/7/1946 p.236; compilação posterior');
const a = makeCoding(arushaSource, '5/2/1967, tradução inglesa revista; data da revisão não informada');

export const seventhIdeologies20261010Definitions: Definition[] = [
  {
    before: baselines[0]!, addedSources: [kropotkinSource],
    codings: [
      k('eco', 'strong-first', ['economia_01', 'economia_05', 'economia_18'],
        'XIII.1–4, sobretudo 1127/1133, 1151–1157 e 1186/1201–1203 na reprodução web.',
        'Defende propriedade comum dos meios produtivos e acesso à riqueza social conforme necessidades.',
        'A titularidade comum abrange a organização econômica inteira.',
        'Público significa social/comum, não empregador estatal. O sistema estatal descrito em XIII.2 é criticado; não atribuí-lo ao autor. Participação produtiva permanece relevante.'),
    ],
    unknownAxisReasons: {
      est: 'Menções a comunas não especificam competências territoriais no capítulo XIII selecionado.',
      rep: 'A rejeição do parlamentarismo não define sozinha um modelo democrático ou autocrático alternativo.',
      pod: 'Crítica à autoridade não especifica neste capítulo o regime geral de coerção e liberdades civis.',
      imi: 'O capítulo não apresenta política migratória ou acomodação cultural.',
      dip: 'Referências históricas a guerras não constituem programa militar.',
      int: 'Não há desenho suficiente de intervenção externa, neutralidade ou alianças.',
      con: 'Abolir salários e priorizar necessidades não define sozinho planejamento; não importar a administração dos coletivistas criticados.',
      com: 'Propriedade comum não determina fronteiras comerciais ou tarifas.',
      rel: 'Crítica à caridade não especifica um regime de religião pública.',
      mor: 'Igualdade distributiva não resolve a orientação geral de família, gênero ou sexualidade.',
      tec: 'Exemplos de maquinaria ilustram trabalho coletivo, sem estabelecer um programa tecnológico neste capítulo.',
    },
    caveats: `${selectionCaveat(baselines[0]!)} Revisão documental de 10/10/2026: um eixo declaratório com confiança média; permanece parcial. XIII.2 expõe um modelo adversário, não o programa do autor. Âncoras e faixas são editoriais, não medições.`,
  },
  {
    before: baselines[1]!, addedSources: [tolstoySource],
    codings: [
      t('pod', 'moderate-second', ['poder_01', 'poder_15', 'poder_16', 'poder_19'],
        'Capítulo IX, rejeição da coerção: 79–82, 95–98, 104–106, 192–194.',
        'Recusa coerção policial, punição judicial e submissão compulsória à autoridade.',
        'A rejeição abrangente da coerção favorece liberdade moderada.',
        'É recusa ética individual, não carta de direitos. Não implica endosso de toda conduta privada ou autodefesa armada.'),
      t('dip', 'strong-second', ['diplomacia_04', 'diplomacia_08', 'diplomacia_09', 'diplomacia_12', 'diplomacia_18'],
        'Capítulo IX, 79–82, 96, 102–109 e síntese sobre preparativos militares em 194.',
        'Rejeita armamentos, serviço militar e participação na violência entre nações.',
        'A não violência alcança a instituição militar em geral.',
        'Doutrina normativa, sem comprovar eficácia histórica nem definir organismos de segurança coletiva.'),
      t('rel', 'moderate-second', ['religiao_01', 'religiao_02', 'religiao_18'],
        'Capítulo IX, consciência e lei divina: 62–77; aplicação às obrigações públicas em 193–204.',
        'Subordina obrigações humanas à lei cristã interior, incluindo deveres públicos.',
        'A consciência religiosa orienta explicitamente a conduta política.',
        'Não prescreve igreja oficial, governo clerical ou imposição estatal da fé.'),
    ],
    unknownAxisReasons: {
      est: 'Recusa do Estado não fornece divisão territorial de competências.',
      rep: 'A crítica às eleições não especifica instituições alternativas de representação.',
      imi: 'Não cooperação com passaportes não define política de integração ou diversidade cultural.',
      int: 'Pacifismo não resolve sozinho alianças, sanções e mediação externa.',
      eco: 'Objeção a impostos violentos não estabelece o regime geral de propriedade.',
      con: 'Crítica à ingerência estatal não especifica preços, produção ou alocação econômica.',
      com: 'Crítica a interesses comerciais nas guerras não define regime de comércio.',
      mor: 'A motivação cristã não autoriza imputar posições sobre família, gênero ou sexualidade.',
      tec: 'O capítulo não fornece um programa tecnológico abrangente.',
    },
    caveats: `${selectionCaveat(baselines[1]!)} Revisão documental de 10/10/2026: três eixos declaratórios com confiança média; permanece parcial. Não resistência não equivale a direitos civis irrestritos ou confessionalismo estatal. Âncoras e faixas são editoriais, não medições.`,
  },
  {
    before: baselines[2]!, addedSources: [gandhiBookSource, gandhiVillageSource],
    codings: [
      v('est', 'strong-first', ['estrutura_01', 'estrutura_03', 'estrutura_13', 'estrutura_15', 'estrutura_20'],
        'Harijan 28/7/1946 p.236: Village Republics/Widening Circles, linhas 10–15; contraponto 26/7/1942 p.238, 32.',
        'Propõe aldeias com plenos poderes em círculos que apoiam sem dominar os níveis locais.',
        'A autonomia local estrutura o ideal político nacional.',
        'O excerto de 1942 deixa relações com o centro abertas; a formulação de 1946 sustenta a direção, sem constituição fiscal detalhada.'),
      v('rep', 'moderate-first', ['representacao_01', 'representacao_07', 'representacao_15', 'representacao_16'],
        'Harijan 26/7/1942 p.238: Government Of Village, linhas 31–33.',
        'Panchayat anual eleito por adultos de ambos os sexos, sujeitos a qualificações mínimas.',
        'Escolha periódica pelos governados sustenta democracia moderada.',
        'Qualificações não especificadas limitam o sufrágio; legislativo, executivo e judiciário se concentram no mesmo conselho. Não prova pluralismo institucional completo.'),
      g('dip', 'strong-second', ['diplomacia_04', 'diplomacia_09', 'diplomacia_12', 'diplomacia_18'],
        'XVII, pp.87–91, linhas 576–594; XX, pp.113–114, 709–710.',
        'Estende resistência não violenta às nações e rejeita despesas militares.',
        'A doutrina de defesa nacional recusa meios armados.',
        'É o ideal de Swaraj, não descrição de toda atuação de Gandhi; o prefácio de 1921 distingue ideal e programa circunstancial.'),
      g('com', 'moderate-first', ['comercio_05', 'comercio_11', 'comercio_19'],
        'XIX, pp.107–108, linhas 675–680; XX, p.113, 709; contraponto XIX, pp.105–106, 670–671.',
        'Prioriza produção doméstica e Swadeshi, preservando crítica também à indústria indiana.',
        'A preferência produtiva interna sustenta proteção moderada.',
        'Não define tarifas ou autarquia. Prefere até tecido importado à reprodução de exploração industrial local; a aldeia de 1942 admite interdependência.'),
      v('rel', 'moderate-second', ['religiao_01', 'religiao_02', 'religiao_06'],
        'Harijan 28/7/1946 p.236: Village Republics/The Ideal, linhas 12 e 17.',
        'Fundamenta o ideal social na fé em Deus, dando igual lugar às religiões.',
        'A fé é fundamento público do ideal político.',
        'Igualdade religiosa impede inferir domínio de uma confissão; não estabelece religião oficial ou governo clerical.'),
      g('tec', 'moderate-second', ['tecnologia_02', 'tecnologia_03'],
        'XIX, pp.105–110, linhas 667–687; contraponto na compilação Panchayat Raj, Harijan 28/7/1946 p.236, 18–19.',
        'Critica a civilização mecanizada e a substituição do trabalho humano.',
        'A preferência por tecnologia limitada sustenta direção restritiva moderada.',
        'Em 1946 admite máquinas que ajudam cada pessoa: não é rejeição categórica de tecnologia, essencialismo biológico ou posição sobre genética e IA atuais.'),
    ],
    unknownAxisReasons: {
      pod: 'Não violência convive com qualificações cívicas e deveres comunitários; faltam bases para o eixo geral de coerção e vida privada.',
      imi: 'Convívio religioso não especifica política migratória ou assimilação cultural geral.',
      int: 'Independência anticolonial e não violência não resolvem alianças, sanções e demais instrumentos de intervenção.',
      eco: 'Cooperação aldeã não esclarece suficientemente titularidade dos meios de produção no conjunto da economia.',
      con: 'Autogoverno local não fornece desenho geral de preços, moeda ou planejamento econômico.',
      mor: 'O recorte não resolve as tensões históricas de casta, gênero e moral; não incorporar excertos de 1948.',
    },
    caveats: `${selectionCaveat(baselines[2]!)} Revisão documental de 10/10/2026: seis eixos declaratórios com confiança média atendem ao gate documental, sem certificar execução ou toda a trajetória de Gandhi. Excertos rotulados 1922 e 1948 excluídos; a formulação de 1946 limita a leitura da maquinaria em 1909. Âncoras e faixas são editoriais, não medições.`,
  },
  {
    before: baselines[3]!, addedSources: [arushaSource],
    codings: [
      a('rep', 'moderate-first', ['representacao_07', 'representacao_15', 'representacao_16'],
        'Parte I, credo (c), linha 24; parte II(c), 71–73; contraponto parte IV, 213–214.',
        'Prescreve participação cívica igual e governo escolhido e dirigido por trabalhadores e camponeses.',
        'Escolha popular declarada sustenta democracia moderada.',
        'A filiação a TANU é filtrada ideologicamente; não demonstra competição multipartidária, sufrágio irrestrito ou prática democrática.'),
      a('eco', 'strong-first', ['economia_03', 'economia_05', 'economia_17', 'economia_18'],
        'Parte I, credo (g–h), 31–32; parte II(b), 66–68.',
        'Atribui meios estratégicos amplos ao povo por governo e cooperativas.',
        'A titularidade pública/cooperativa abrange a base produtiva nacional.',
        'Não equivale a estatização integral; o setor privado permanece explicitamente mencionado na parte V(b)4.'),
      a('con', 'moderate-first', ['controle_01', 'controle_04', 'controle_19'],
        'Parte I, credo (i), linha 34; parte V(b)3–4, 239–240.',
        'Determina intervenção econômica, revisão do plano nacional e aproximação das rendas setoriais.',
        'Coordenação abrangente sustenta planejamento moderado, separadamente da propriedade.',
        'Não especifica todos os preços ou métodos de alocação; não presume planejamento total ou realização das metas.'),
    ],
    unknownAxisReasons: {
      est: 'Participação em níveis locais, regionais e nacionais não define autonomia ou competências territoriais.',
      pod: 'Liberdades condicionadas à lei convivem com restrição à ociosidade; o recorte não resolve o regime geral de coerção.',
      imi: 'Igualdade cívica e antidiscriminação não especificam política migratória ou assimilação cultural.',
      dip: 'Paz pela ONU convive com dever de defesa; não há orientação militar suficientemente determinada.',
      int: 'Independência e unidade africana não definem neutralidade, sanções ou intervenção externa.',
      com: 'Autossuficiência e substituição de importações coexistem com acolhimento de investimento estrangeiro, repatriação de lucros e exportações; não basta para direção comercial geral.',
      rel: 'Liberdade religiosa não define o papel geral da religião em leis e políticas.',
      mor: 'Igualdade entre homens e mulheres não resolve sozinha toda a orientação moral.',
      tec: 'Modernização agrícola e prioridade rural não determinam o eixo tecnológico agregado.',
    },
    caveats: `${selectionCaveat(baselines[3]!)} Revisão documental de 10/10/2026: três eixos declaratórios com confiança média; permanece parcial. Não importar coerção de reassentamentos posteriores nem tratar o manifesto como execução. Âncoras e faixas são editoriais, não medições.`,
  },
];

// Make Gandhi's later, expressly selected counterevidence independently traceable.
const gandhiTechnology = seventhIdeologies20261010Definitions[2]!.codings.find(input => input.axis === 'tec')!;
gandhiTechnology.claims.push({
  sourceTitle: gandhiVillageSource.title,
  locator: 'Harijan 28/7/1946 p.236, The Ideal, linhas web 18–19.',
  statement: 'Admite máquinas que ajudam o indivíduo sem deslocar trabalho ou concentrar poder.',
  basis: 'declaration', publishedDate: 'Harijan, 28/7/1946 p.236; compilação posterior', accessedDate: reviewedOn,
});

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
export const seventhIdeologies20261010ExpectedPosts = seventhIdeologies20261010Definitions.map(definition => buildPost(structuredClone(definition.before), definition));
export function reconcileSeventhIdeologies20261010(entry: ReferenceEntry): ReferenceEntry {
  const index = seventhIdeologies20261010Definitions.findIndex(definition => definition.before.id === entry.id);
  if (index < 0) return entry;
  if (JSON.stringify(entry) === JSON.stringify(seventhIdeologies20261010ExpectedPosts[index])) return entry;
  const definition = seventhIdeologies20261010Definitions[index]!;
  if (JSON.stringify(entry) !== JSON.stringify(definition.before)) throw new Error(`Selected ideology baseline diverged for ${entry.id}; preserve later work and review before integrating.`);
  return buildPost(entry, definition);
}
