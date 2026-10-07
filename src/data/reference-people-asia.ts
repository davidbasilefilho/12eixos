import type { AxisKey, ReferenceEntry } from './references';

// Additions are anchored to a bounded text or period. Any unlisted axis stays
// at 50 because the cited record does not establish a defensible direction.
const keys: readonly AxisKey[] = ['est', 'rep', 'pod', 'imi', 'dip', 'int', 'eco', 'con', 'com', 'rel', 'mor', 'tec'];
type SupportedAxis = { value: number; strength: 'high' | 'medium'; reason: string; sourceTitle?: string };
type SourceSpec = { title: string; url: string; note: string };
type PersonSpec = {
  id: string; name: string; category: 'public-figure' | 'historical-figure'; period: string;
  sources: SourceSpec[]; axes: Partial<Record<AxisKey, SupportedAxis>>;
  rationale: string; caveats: string;
};
const people: PersonSpec[] = [
  {
    id: 'mao-zedong-1940-new-democracy', name: 'Mao Zedong', category: 'historical-figure', period: '“On New Democracy”, 1940',
    sources: [{ title: 'On New Democracy (1940)', url: 'https://www.marxists.org/reference/archive/mao/selected-works/volume-2/mswv2_26.htm', note: 'Texto de Mao reproduzido integralmente; o ensaio especifica seu programa de Estado, economia e revolução.' }],
    axes: {
      rep: { value: 55, strength: 'medium', reason: 'O ensaio pede sufrágio universal e igual, mas coloca o governo sob liderança e ditadura conjunta de classes revolucionárias; essa tensão mantém a estimativa perto do centro.' },
      dip: { value: 78, strength: 'high', reason: 'O texto enquadra a revolução como luta armada contra forças imperiais e prevê um exército e aparelho de Estado revolucionários.' },
      eco: { value: 85, strength: 'high', reason: 'O ensaio determina que bancos e grandes empresas monopolistas sejam propriedade e administração do Estado.' },
      con: { value: 77, strength: 'high', reason: 'O documento atribui ao Estado controle das empresas centrais e coloca essas empresas estatais como força dirigente da economia.' },
      mor: { value: 72, strength: 'medium', reason: 'Defende sufrágio sem distinção de sexo, crença, propriedade ou escolaridade, uma afirmação explícita de igualdade política; não cobre todas as dimensões do eixo.' },
    },
    rationale: 'O recorte descreve somente o programa de “Nova Democracia” exposto no ensaio de 1940, não toda a trajetória do governo de Mao.',
    caveats: 'O ensaio mistura transição democrática e direção revolucionária de classe. Solidariedade revolucionária internacional não estabelece não intervenção; esse eixo permanece desconhecido. Não se inferem posições sobre tecnologia, religião, imigração ou federalismo.',
  },
  {
    id: 'sukarno-1945-pancasila', name: 'Sukarno', category: 'historical-figure', period: 'Discurso sobre Pancasila à BPUPK, 1º de junho de 1945',
    sources: [{ title: 'Pidato Sukarno, 1 Juni 1945 — Arquivo Nacional da Indonésia', url: 'https://jdih.bpip.go.id/common/dokumen/arsiplangka-pidatosoekarno1juni1945sumberanri.pdf', note: 'Fac-símile e transcrição do discurso preservados em publicação da Agência de Fomento da Ideologia Pancasila com o Arquivo Nacional.' }],
    axes: {
      rep: { value: 67, strength: 'medium', reason: 'Sukarno propõe deliberação representativa e consenso como elementos da democracia; o discurso não estabelece eleições competitivas como único critério.' },
      imi: { value: 58, strength: 'medium', reason: 'O princípio de unidade indonésia e a proposta de cidadania comum apontam para integração nacional, sem programa de imigração documentado.' },
      int: { value: 73, strength: 'medium', reason: 'O discurso enquadra a independência como autodeterminação anticolonial e reivindica relações entre povos soberanos.' },
      rel: { value: 58, strength: 'medium', reason: 'Pancasila inclui a crença em Deus e procura acomodar tradições religiosas diversas; isso não sustenta uma posição fortemente confessional.' },
      mor: { value: 66, strength: 'medium', reason: 'A formulação de humanidade justa e civilizada, junto à justiça social, oferece suporte parcial a uma orientação reformista.' },
    },
    rationale: 'Os valores refletem a proposta constitucional de Sukarno apresentada no discurso fundador sobre Pancasila.',
    caveats: 'O discurso trata da fundação do Estado, não de todas as políticas que Sukarno adotou mais tarde. Não codifica economia estatal, defesa ou tecnologia sem fonte específica.',
  },
  {
    id: 'ashoka-edicts', name: 'Ashoka', category: 'historical-figure', period: 'Éditos de Dhamma, século III AEC',
    sources: [{ title: 'Rock Edict of Ashoka — National Museum, Índia', url: 'https://nationalmuseumindia.gov.in/en/collections/index/21', note: 'Apresentação institucional dos éditos de Girnar, incluindo tratamento médico, limites ao sacrifício animal e deveres de oficiais.' }],
    axes: {
      dip: { value: 18, strength: 'medium', reason: 'Os éditos proíbem diversos sacrifícios e descrevem assistência médica e viagens de oficiais; indicam contenção da violência, sem provar pacifismo absoluto.' },
      eco: { value: 63, strength: 'medium', reason: 'A inscrição atribui ao governante serviços públicos de saúde para pessoas e animais, sinal limitado de provisão estatal.' },
      rel: { value: 57, strength: 'medium', reason: 'O édito incentiva respeito a brâmanes, ascetas e outras tradições; trata-se de tolerância religiosa, não de posição secular moderna.' },
    },
    rationale: 'O perfil se restringe às políticas públicas expressas nos éditos citados.',
    caveats: 'A tradução institucional resume inscrições antigas. Categorias políticas atuais não se aplicam diretamente; a entrada não é elegível para ranking por ter apenas três eixos documentados.',
  },
  {
    id: 'mustafa-kemal-ataturk', name: 'Mustafa Kemal Atatürk', category: 'historical-figure', period: 'Fundação e reformas da República da Turquia, 1923–1938',
    sources: [
      { title: 'Cumhuriyetçilik — Atatürk Araştırma Merkezi', url: 'https://atam.gov.tr/cumhuriyetcilik/', note: 'Centro oficial de pesquisa apresenta soberania popular, eleição e republicanismo, com referências às reformas constitucionais.' },
      { title: 'Devletçilik — Atatürk Araştırma Merkezi', url: 'https://atam.gov.tr/devletcilik/', note: 'Explica a política estatal de desenvolvimento e delimita a relação pretendida entre Estado, iniciativa privada e mercado.' },
      { title: 'Lâiklik — Atatürk Araştırma Merkezi', url: 'https://atam.gov.tr/laiklik/', note: 'Registra a separação entre governo e religião, liberdade de consciência e educação secular.' },
      { title: 'Milliyetçilik — Atatürk Araştırma Merkezi', url: 'https://atam.gov.tr/milliyetcilik/', note: 'Expõe nacionalismo cívico, unidade nacional e a fórmula “Paz em casa, paz no mundo”.' },
    ],
    axes: {
      est: { value: 28, strength: 'high', sourceTitle: 'Milliyetçilik — Atatürk Araştırma Merkezi', reason: 'O programa tratou a República como um Estado nacional indivisível e não como federação.' },
      rep: { value: 66, strength: 'medium', sourceTitle: 'Cumhuriyetçilik — Atatürk Araştırma Merkezi', reason: 'As fontes descrevem soberania nacional, eleições e republicanismo; o sistema de partido único impede atribuir uma pontuação mais alta para pluralismo.' },
      imi: { value: 60, strength: 'medium', sourceTitle: 'Milliyetçilik — Atatürk Araştırma Merkezi', reason: 'A política buscou uma identidade cívica e linguística comum. Isso sustenta integração nacional moderada, embora as fontes não formem uma política completa de assimilação migratória.' },
      int: { value: 66, strength: 'high', sourceTitle: 'Milliyetçilik — Atatürk Araştırma Merkezi', reason: 'A diretriz oficial “paz em casa, paz no mundo” apoia diplomacia cautelosa e não expansionista no período republicano.' },
      eco: { value: 60, strength: 'high', sourceTitle: 'Devletçilik — Atatürk Araştırma Merkezi', reason: 'A fonte descreve empresas e infraestrutura estatais onde o capital privado não bastava, mantendo espaço explícito para iniciativa privada.' },
      rel: { value: 89, strength: 'high', sourceTitle: 'Lâiklik — Atatürk Araştırma Merkezi', reason: 'A laicidade exclui regra religiosa do governo, preserva liberdade de consciência e estabelece educação secular.' },
      mor: { value: 77, strength: 'medium', sourceTitle: 'Cumhuriyetçilik — Atatürk Araştırma Merkezi', reason: 'A abolição de instituições dinásticas e as reformas civis e educacionais descritas pelo centro apoiam uma orientação reformista, sem equivaler a progressismo contemporâneo em todos os temas.' },
      tec: { value: 76, strength: 'medium', sourceTitle: 'Cumhuriyetçilik — Atatürk Araştırma Merkezi', reason: 'A fonte associa reformas a ciência, racionalismo e modernização, mas não apresenta um programa para tecnologias atuais.' },
    },
    rationale: 'As pontuações representam as reformas fundadoras e os princípios republicanos descritos pelo centro público turco de pesquisa histórica.',
    caveats: 'A República era governada por um partido dominante; soberania popular proclamada e competição política efetiva não são equivalentes. As fontes institucionais têm uma perspectiva nacional oficial.',
  },
  {
    id: 'park-chung-hee-yushin', name: 'Park Chung-hee', category: 'historical-figure', period: 'Constituição Yushin e planos de desenvolvimento, 1972–1979',
    sources: [
      { title: 'Constitution of the Republic of Korea (1972), Korean History Database', url: 'https://db.history.go.kr/item/cons/level.do?levelId=cons_008_0020_0030_0190&viewType=tab', note: 'Base documental do Instituto Nacional de História da Coreia; registra emendas constitucionais que concentraram poder presidencial e ampliaram a permanência no cargo.' },
      { title: 'Presidential Archives: Park Chung-hee records', url: 'https://www.pa.go.kr/en/recordsOfFormerPresidents.html', note: 'Arquivo do Ministério do Interior e Segurança da Coreia lista acervo extenso de documentos oficiais da presidência de Park.' },
      { title: 'Park Chung-hee Memorial — policy and economy exhibition', url: 'https://www.gumi.go.kr/presidentpark/us/page.do?mid=153', note: 'Museu público documenta políticas econômicas, industriais e desenvolvimento do período; usado somente para a agenda de modernização.' },
    ],
    axes: {
      est: { value: 24, strength: 'high', sourceTitle: 'Constitution of the Republic of Korea (1972), Korean History Database', reason: 'A reforma Yushin subordinou instituições e processos políticos ao centro presidencial e não criou autonomia federativa.' },
      rep: { value: 16, strength: 'high', sourceTitle: 'Constitution of the Republic of Korea (1972), Korean History Database', reason: 'A emenda removeu controles institucionais e permitiu a Park reter o poder por período indeterminado, conforme registro histórico citado.' },
      pod: { value: 79, strength: 'high', sourceTitle: 'Constitution of the Republic of Korea (1972), Korean History Database', reason: 'A justificativa de segurança nacional e o controle presidencial ampliado são documentados no registro constitucional de 1972.' },
      dip: { value: 72, strength: 'medium', sourceTitle: 'Constitution of the Republic of Korea (1972), Korean History Database', reason: 'A fonte constitucional situa o regime em estado de emergência e a presidência foi chefiada por um general; o valor é moderado porque o registro citado não mede toda a política militar.' },
      eco: { value: 66, strength: 'medium', sourceTitle: 'Park Chung-hee Memorial — policy and economy exhibition', reason: 'A documentação pública sobre o período descreve coordenação estatal e políticas de desenvolvimento e indústria; não implica propriedade pública generalizada.' },
      con: { value: 81, strength: 'medium', sourceTitle: 'Park Chung-hee Memorial — policy and economy exhibition', reason: 'Planos nacionais e direção governamental de industrialização sustentam planejamento acima do polo de mercado livre.' },
      tec: { value: 68, strength: 'medium', sourceTitle: 'Park Chung-hee Memorial — policy and economy exhibition', reason: 'A política econômica do período priorizou indústria e modernização tecnológica, embora não seja um posicionamento geral sobre as tecnologias do eixo.' },
    },
    rationale: 'O vetor descreve o regime Yushin e a direção econômica do Estado durante o período indicado.',
    caveats: 'As fontes de economia são registros retrospectivos de um museu público; não se atribuem ao presidente preferências pessoais fora da atuação governamental documentada.',
  },
  {
    id: 'syngman-rhee', name: 'Syngman Rhee', category: 'historical-figure', period: 'Primeira República da Coreia, 1948–1960',
    sources: [
      { title: 'Constitution of the Republic of Korea (1948)', url: 'https://www.law.go.kr/LSW/lsInfoP.do?lsiSeq=53081&ancYd=19480717&ancNo=00001&efYd=19480717&nwJoYnInfo=N&efGubun=Y&chrClsCd=010202', note: 'Texto legal promulgado da primeira Constituição sul-coreana, com estrutura presidencial e direitos formais.' },
      { title: 'Presidential Archives: Syngman Rhee records', url: 'https://www.pa.go.kr/en/recordsOfFormerPresidents.html', note: 'Arquivo oficial sul-coreano conserva documentos da presidência de Rhee; a referência aqui serve para delimitar o corpus de governo.' },
    ],
    axes: {
      est: { value: 37, strength: 'medium', sourceTitle: 'Constitution of the Republic of Korea (1948)', reason: 'A ordem constitucional concentrou a República inicial em um governo nacional; não havia um desenho federal.' },
      rep: { value: 39, strength: 'medium', sourceTitle: 'Constitution of the Republic of Korea (1948)', reason: 'A constituição formalizou eleição e legislativo, mas a trajetória incluiu mudanças que ampliaram o mandato presidencial e repressão da oposição; o valor considera ambos.' },
      pod: { value: 76, strength: 'medium', sourceTitle: 'Presidential Archives: Syngman Rhee records', reason: 'A presidência foi estruturada sob a guerra e prioridade de segurança anticomunista, respaldada pela constituição e pelos registros do mandato.' },
      int: { value: 39, strength: 'medium', sourceTitle: 'Presidential Archives: Syngman Rhee records', reason: 'O governo adotou uma política fortemente nacionalista em relação à península e aos vizinhos; não se equipara isso a não-intervenção.' },
    },
    rationale: 'A entrada acompanha a primeira república e distingue seus dispositivos constitucionais de sua prática autoritária.',
    caveats: 'O acervo citado requer leitura dos documentos individuais; a constituição sozinha não demonstra aplicação dos direitos. Somente quatro eixos têm suporte suficiente, então o perfil é catálogo e não match.',
  },
  {
    id: 'david-ben-gurion-1948', name: 'David Ben-Gurion', category: 'historical-figure', period: 'Fundação do Estado de Israel e Declaração de Independência, 1948–1953',
    sources: [{ title: 'Declaration of Independence — Knesset of Israel', url: 'https://main.knesset.gov.il/EN/About/pages/declaration.aspx', note: 'Texto original adotado pela administração provisória e assinado por Ben-Gurion em 14 de maio de 1948.' }],
    axes: {
      rep: { value: 81, strength: 'high', reason: 'A declaração constitui autoridades provisórias até uma assembleia constituinte eleita e promete direitos políticos iguais.' },
      imi: { value: 78, strength: 'high', reason: 'O documento declara que o Estado estará aberto à imigração judaica e à reunião dos exilados.' },
      dip: { value: 61, strength: 'medium', reason: 'A declaração combina aspiração à paz com o dever declarado de defender a comunidade; não define uma doutrina militar completa.' },
      int: { value: 66, strength: 'high', reason: 'O texto adere expressamente à Carta das Nações Unidas e pede reconhecimento internacional.' },
      rel: { value: 73, strength: 'high', reason: 'A declaração protege liberdade de religião e consciência e promete resguardar locais sagrados, sem instituir governo clerical.' },
      mor: { value: 82, strength: 'high', reason: 'O texto promete igualdade social e política sem distinção de religião, raça ou sexo, justificando orientação reformista nesse período.' },
    },
    rationale: 'Os números derivam da declaração fundadora e não de toda a política israelense ou da carreira completa de Ben-Gurion.',
    caveats: 'A promessa de igualdade no documento não prova igualdade alcançada na prática; o perfil não resolve o conflito entre autodeterminação judaica e as reivindicações palestinas.',
  },
  {
    id: 'mohammad-mossadegh-1951', name: 'Mohammad Mossadegh', category: 'historical-figure', period: 'Primeiro-ministério e nacionalização do petróleo, 1951–1953',
    sources: [
      { title: 'Nine-Point Law on the Nationalization of Iran’s Oil Industry — FRUS', url: 'https://history.state.gov/historicaldocuments/frus1952-54v10/d15', note: 'Edição oficial do Departamento de Estado dos EUA reproduz o processo legislativo iraniano e a lei de nacionalização.' },
      { title: 'Telegram on Iran’s Nationalization Policy — FRUS', url: 'https://history.state.gov/historicaldocuments/frus1952-54v10/d37', note: 'Correspondência oficial contemporânea cita mensagens de Truman e Mossadegh sobre controle iraniano do petróleo e negociação.' },
    ],
    axes: {
      rep: { value: 63, strength: 'medium', sourceTitle: 'Nine-Point Law on the Nationalization of Iran’s Oil Industry — FRUS', reason: 'O governo agiu por meio de votações do Majlis e do Senado para promulgar a lei de nacionalização; isso sustenta procedimento parlamentar no recorte, não julgamento geral da democracia.' },
      int: { value: 30, strength: 'high', sourceTitle: 'Telegram on Iran’s Nationalization Policy — FRUS', reason: 'O programa procurou encerrar controle britânico sobre petróleo iraniano e afirmar soberania econômica nacional.' },
      eco: { value: 82, strength: 'high', sourceTitle: 'Nine-Point Law on the Nationalization of Iran’s Oil Industry — FRUS', reason: 'A lei transferiu exploração e operação da indústria do petróleo para autoridades iranianas.' },
    },
    rationale: 'O perfil retrata o programa de nacionalização e a operação parlamentar do período, com fontes contemporâneas verificáveis.',
    caveats: 'FRUS é uma coleção oficial de documentos diplomáticos dos EUA, não arquivo iraniano, e reflete a perspectiva de seus autores. Apenas três eixos documentados; perfil não elegível a match.',
  },
  {
    id: 'sir-syed-ahmad-khan', name: 'Sir Syed Ahmad Khan', category: 'historical-figure', period: 'Aligarh movement and public writings, 1857–1898',
    sources: [{ title: 'The Causes of the Indian Revolt (1873) — Internet Archive', url: 'https://archive.org/details/causesofindianre00khan', note: 'Edição digital de obra política de Syed Ahmad Khan sobre administração colonial, representação e reforma.' }],
    axes: {
      rep: { value: 57, strength: 'medium', reason: 'A obra critica decisões coloniais sem consulta adequada e argumenta por maior participação indiana; ela não propõe soberania eleitoral universal.' },
      tec: { value: 71, strength: 'medium', reason: 'Sua defesa pública da educação científica e de instituições modernas sustenta abertura moderada à ciência e tecnologia.' },
    },
    rationale: 'Este item é um registro de catálogo de um reformador muçulmano e educador político do século XIX.',
    caveats: 'Fonte e contexto são coloniais; a obra não justifica inferências amplas sobre economia, política externa ou religião. Só dois eixos são documentados, logo não participa do ranking.',
  },
  {
    id: 'qiu-jin', name: 'Qiu Jin', category: 'historical-figure', period: 'Escritos revolucionários e campanha por direitos das mulheres, 1904–1907',
    sources: [{ title: 'Qiu Jin: Poems and writings — Chinese Text Project', url: 'https://ctext.org/wiki.pl?if=en&res=792259', note: 'Edição digital de escritos atribuídos a Qiu Jin; serve para verificar sua atividade literária e política, não para inferir posições em todos os eixos.' }],
    axes: {
      rep: { value: 65, strength: 'medium', reason: 'Os escritos revolucionários defendem a derrubada da monarquia Qing e uma república, sem articular uma democracia institucional completa.' },
      imi: { value: 60, strength: 'medium', reason: 'A autora defende a emancipação das mulheres e o fim de papéis compulsórios; esse suporte se limita à integração e igualdade interna, não imigração.' },
      mor: { value: 91, strength: 'high', reason: 'A defesa explícita da educação, independência e direitos políticos das mulheres sustenta uma posição fortemente reformista para seu tempo.' },
    },
    rationale: 'O perfil se limita aos escritos políticos e à mobilização feminista documentada no período revolucionário.',
    caveats: 'O portal é um projeto acadêmico de textos clássicos e não um arquivo pessoal original; atribuições e traduções devem ser verificadas em estudos especializados antes de usar o perfil em matching.',
  },
  {
    id: 'itagaki-taisuke', name: 'Itagaki Taisuke', category: 'historical-figure', period: 'Freedom and People’s Rights Movement, 1874–1898',
    sources: [{ title: 'Petition for the Establishment of a Popularly Elected Assembly — National Diet Library of Japan', url: 'https://www.ndl.go.jp/modern/e/cha1/description09.html', note: 'Arquivo da Dieta descreve a petição política de 1874 e seu apelo por uma assembleia eleita e debate público.' }],
    axes: { rep: { value: 79, strength: 'high', reason: 'A petição vinculada ao movimento que Itagaki fundou exige assembleia popularmente eleita e espaço para debate público.' } },
    rationale: 'Uma posição claramente documentada sobre representação política.',
    caveats: 'A fonte é a petição coletiva do partido patriótico, não prova de todas as posições pessoais de Itagaki. Catálogo apenas: um eixo.',
  },
  {
    id: 'apolinario-mabini', name: 'Apolinario Mabini', category: 'historical-figure', period: 'Revolução Filipina e governo revolucionário, 1897–1903',
    sources: [
      { title: 'Mabini’s Decalogue for Filipinos — Project Gutenberg', url: 'https://www.gutenberg.org/files/14660/14660-h/14660-h.htm', note: 'Edição digital de textos de Mabini que inclui seu True Decalogue, manifesto político e moral.' },
      { title: 'Malolos Constitution — Supreme Court E-Library', url: 'https://elibrary.judiciary.gov.ph/thebookshelf/showdocs/3/365', note: 'Texto integral da constituição da Primeira República Filipina; fonte do debate constitucional no qual Mabini atuou como primeiro-ministro.' },
      { title: 'Apolinario Mabini: original writings in NHCP library', url: 'https://memory.nhcp.gov.ph/articles/orignal-mabini-writings-in-the-national-historical-commission-of-the-philippines-library/', note: 'A National Historical Commission documenta a aquisição de manuscritos políticos originais de Mabini.' },
    ],
    axes: {
      rep: { value: 72, strength: 'medium', sourceTitle: 'Mabini’s Decalogue for Filipinos — Project Gutenberg', reason: 'O Decálogo sustenta autoridades derivadas do povo e deveres cívicos; o escopo não prova apoio a todas as formas de sufrágio.' },
      int: { value: 34, strength: 'medium', sourceTitle: 'Apolinario Mabini: original writings in NHCP library', reason: 'Seus escritos revolucionários defendem independência e resistem à incorporação colonial pelos Estados Unidos.' },
      mor: { value: 73, strength: 'medium', sourceTitle: 'Mabini’s Decalogue for Filipinos — Project Gutenberg', reason: 'O Decálogo propõe responsabilidade pública, serviço, justiça e bem comum como deveres de governo e cidadania.' },
    },
    rationale: 'O perfil parte das ideias políticas de Mabini e de sua atuação documentada no governo da Primeira República Filipina.',
    caveats: 'A edição digital é tradução posterior; a National Historical Commission confirma a existência de manuscritos originais, mas não todos os detalhes desta tradução. Três eixos documentados, portanto não elegível para ranking.',
  },
  {
    id: 'emilio-aguinaldo', name: 'Emilio Aguinaldo', category: 'historical-figure', period: 'Presidência da Primeira República Filipina, 1898–1901',
    sources: [
      { title: 'Malolos Constitution — Supreme Court E-Library', url: 'https://elibrary.judiciary.gov.ph/thebookshelf/showdocs/3/365', note: 'Texto constitucional promulgado sob Aguinaldo; afirma soberania popular, representação e separação dos poderes.' },
      { title: 'Philippine Republic 1898–1901 — National Historical Commission of the Philippines', url: 'https://philhistoricsites.nhcp.gov.ph/registry_database/philippine-republic-1898-1901/', note: 'Registro histórico nacional situa Aguinaldo como presidente da Primeira República e identifica a cronologia de seu governo.' },
    ],
    axes: {
      rep: { value: 73, strength: 'medium', sourceTitle: 'Malolos Constitution — Supreme Court E-Library', reason: 'A constituição da República promulgada sob sua presidência atribui soberania ao povo e estabelece poderes representativos separados.' },
      dip: { value: 66, strength: 'medium', sourceTitle: 'Philippine Republic 1898–1901 — National Historical Commission of the Philippines', reason: 'A guerra de independência e o governo revolucionário mantiveram força armada como meio de defesa e soberania.' },
      int: { value: 28, strength: 'medium', sourceTitle: 'Philippine Republic 1898–1901 — National Historical Commission of the Philippines', reason: 'O programa do governo buscou independência frente às potências coloniais e resistiu à anexação norte-americana.' },
    },
    rationale: 'As estimativas se referem à presidência revolucionária e à constituição de Malolos, não a toda a vida de Aguinaldo.',
    caveats: 'A constituição é um documento coletivo; a prática presidencial e a guerra incluíram medidas excepcionais. Três eixos documentados, perfil apenas de catálogo.',
  },
  {
    id: 'okuma-shigenobu', name: 'Ōkuma Shigenobu', category: 'historical-figure', period: 'Constitutional movement and party government, 1881–1916',
    sources: [{ title: 'Okuma Shigenobu’s Report to the Emperor (1881) — National Diet Library of Japan', url: 'https://www.ndl.go.jp/modern/e/cha2/description03.html', note: 'O acervo descreve o memorial de Ōkuma que recomendava um parlamento no modelo britânico e constituição antecipada.' }],
    axes: {
      rep: { value: 77, strength: 'high', reason: 'Seu memorial de 1881 propõe parlamentarismo de estilo britânico e constituição com prazo definido.' },
      eco: { value: 58, strength: 'medium', reason: 'A controvérsia sobre vender bens estatais e a defesa de suspender a operação apontam para cautela em transferir patrimônio público, mas não definem política econômica geral.' },
    },
    rationale: 'Registra uma proposta constitucional específica e a disputa econômica imediatamente ligada a ela.',
    caveats: 'O arquivo transcreve um memorial de 1881 e registra que o governo o demitiu; não confundir a proposta com políticas de seus gabinetes posteriores. Dois eixos: não elegível a match.',
  },
  {
    id: 'ito-hirobumi', name: 'Itō Hirobumi', category: 'historical-figure', period: 'Constitutional state-building and premierships, 1875–1905',
    sources: [
      { title: 'Imperial Rescript Establishing a Constitutional Form of Government — National Diet Library of Japan', url: 'https://www.ndl.go.jp/modern/e/cha2/description01.html', note: 'Registra a criação planejada de câmaras, corte superior e conselhos de governadores sob constituição.' },
      { title: 'Evolution of the Meiji State — National Diet Library of Japan', url: 'https://www.ndl.go.jp/modern/e/cha2/index.html', note: 'Contextualiza a constituição de 1889, industrialização e gastos militares, além da carreira de Itō.' },
    ],
    axes: {
      est: { value: 32, strength: 'medium', reason: 'O desenho constitutivo era nacional e imperial, com conselhos locais, não uma federação com soberania compartilhada.' },
      rep: { value: 57, strength: 'medium', reason: 'As fontes documentam a introdução gradual de órgãos representativos; a constituição restringia o eleitorado e preservava prerrogativas imperiais.' },
      dip: { value: 63, strength: 'medium', reason: 'O programa de industrialização do período incluía gastos militares; a fonte não identifica Itō como defensor de militarismo irrestrito.' },
      con: { value: 61, strength: 'medium', reason: 'O desenvolvimento nacional associava coordenação estatal e industrialização; não há base para declarar controle integral da economia.' },
    },
    rationale: 'O perfil descreve o constitucionalismo oligárquico e a modernização do Estado Meiji, sem transformar as intenções de cada reforma em democracia plena.',
    caveats: 'As fontes são descrições arquivísticas institucionais de documentos primários. Quatro eixos suportados; não é elegível a match.',
  },
  {
    id: 'ozaki-yukio', name: 'Ozaki Yukio', category: 'historical-figure', period: 'Parliamentary career and universal suffrage campaign, 1890–1953',
    sources: [{ title: 'Adoption of Universal Manhood Suffrage Law — National Diet Library of Japan', url: 'https://www.ndl.go.jp/modern/e/cha3/description13.html', note: 'O arquivo legislativo descreve a campanha e as medidas constitucionais por sufrágio universal masculino.' }],
    axes: { rep: { value: 79, strength: 'medium', reason: 'O documento da NDL lista Ozaki no movimento parlamentar por sufrágio universal masculino e o trabalho constitucional que conduziu à reforma.' } },
    rationale: 'Registra a atuação por ampliação do sufrágio e do governo parlamentar.',
    caveats: 'A fonte trata de uma campanha coletiva; o sufrágio descrito excluía mulheres. Um eixo apenas, catálogo sem matching.',
  },
  {
    id: 'ferdinand-marcos-sr', name: 'Ferdinand Marcos Sr.', category: 'historical-figure', period: 'Martial law and the 1973 Constitution, 1972–1981',
    sources: [
      { title: 'Constitution Day: 1973 Constitution — Official Gazette of the Philippines', url: 'https://officialgazette.gov.ph/constitutions/constitution-day/', note: 'O registro oficial documenta a substituição da constituição após lei marcial e o processo de ratificação por assembleias vocais.' },
      { title: 'Proclamation No. 1081 — National Commission for Culture and the Arts source book', url: 'https://ncca.gov.ph/wp-content/uploads/2021/09/PHILIPPINE-HISTORY-SOURCE-BOOK-FINAL-SEP022021.pdf', note: 'A publicação oficial reproduz a proclamação de lei marcial de Marcos de 21 de setembro de 1972.' },
    ],
    axes: {
      rep: { value: 12, strength: 'high', reason: 'A declaração de lei marcial suspendeu a ordem constitucional anterior e a ratificação de 1973 abandonou voto secreto convencional.' },
      pod: { value: 83, strength: 'high', reason: 'A proclamação invoca poderes de emergência em nome da segurança nacional e concede autoridade extraordinária ao Executivo.' },
      dip: { value: 79, strength: 'medium', reason: 'A proclamação põe o país sob controle militar e de emergência; isso sustenta orientação securitária, sem medir toda a doutrina de defesa.' },
      est: { value: 25, strength: 'high', reason: 'A constituição Yushin filipina concentrou o poder em instituições nacionais e presidenciais.' },
    },
    rationale: 'O recorte se limita à lei marcial e à constituição de 1973; a evidência é para práticas institucionais do governo.',
    caveats: 'A fonte NCCA reproduz material da Official Gazette, mas os registros incluem a justificativa oficial do próprio regime. Não a trate como descrição neutra dos fatos. Perfil não elegível: evidência válida abaixo de seis eixos.',
  },
  {
    id: 'john-curtin-1941-45', name: 'John Curtin', category: 'historical-figure', period: 'Primeiro-ministério e guerra do Pacífico, 1941–1945',
    sources: [
      { title: '“White Australia to be defended against Japan” — National Archives of Australia', url: 'https://www.naa.gov.au/students-and-teachers/student-research-portal/learning-resource-themes/war/world-war-ii/white-australia-be-defended-against-japan-extract-speech-prime-minister-john-curtin', note: 'Transcrição de um discurso de Curtin à Câmara em 16 de dezembro de 1941; registra defesa, política migratória e coordenação federal.' },
      { title: 'John Curtin: during office — National Archives of Australia', url: 'https://www.naa.gov.au/explore-collection/australias-prime-ministers/john-curtin/during-office', note: 'Acervo oficial cobre conscrição regional, reconstrução, emprego, seguridade e planejamento do pós-guerra.' },
    ],
    axes: {
      est: { value: 66, strength: 'medium', sourceTitle: '“White Australia to be defended against Japan” — National Archives of Australia', reason: 'O discurso explicita cooperação entre governos estaduais e federais, em uma federação cuja coordenação era parte do programa de defesa.' },
      rep: { value: 79, strength: 'medium', sourceTitle: 'John Curtin: during office — National Archives of Australia', reason: 'Curtin pediu mandato popular em eleições e apresentou seus planos ao parlamento; isso sustenta governo eleitoral representativo.' },
      pod: { value: 74, strength: 'medium', sourceTitle: 'John Curtin: during office — National Archives of Australia', reason: 'O governo concedeu poderes amplos de emergência e organizou a defesa durante a guerra; o valor retrata o período, não uma preferência abstrata por segurança.' },
      imi: { value: 8, strength: 'high', sourceTitle: '“White Australia to be defended against Japan” — National Archives of Australia', reason: 'Curtin declarou explicitamente que manteria a política “White Australia”, uma política de exclusão racial de imigrantes não europeus.' },
      dip: { value: 81, strength: 'high', sourceTitle: '“White Australia to be defended against Japan” — National Archives of Australia', reason: 'A declaração pede defesa armada nacional, mobilização militar e conscrição regional.' },
      int: { value: 42, strength: 'medium', sourceTitle: 'John Curtin: during office — National Archives of Australia', reason: 'Seu governo buscou afirmar o papel da Austrália no Pacífico e manter uma esfera regional própria, em vez de aceitar uma orientação de não intervenção.' },
      eco: { value: 69, strength: 'medium', sourceTitle: 'John Curtin: during office — National Archives of Australia', reason: 'A agenda de reconstrução incluía pleno emprego e expansão da seguridade social, sem propor propriedade estatal geral.' },
      con: { value: 69, strength: 'medium', sourceTitle: 'John Curtin: during office — National Archives of Australia', reason: 'Planos de reconstrução e emprego foram apresentados como ação coordenada do governo no pós-guerra.' },
    },
    rationale: 'A entrada retrata o governo em guerra e o programa de reconstrução de Curtin. Inclui explicitamente o racismo da política migratória daquele período.',
    caveats: 'A transcrição de dezembro de 1941 continha linguagem racial que a National Archives identifica como historicamente situada e não endossa. Não se infere progresso moral ou posição sobre tecnologia.',
  },
  {
    id: 'michael-joseph-savage', name: 'Michael Joseph Savage', category: 'historical-figure', period: 'Primeiro-ministério trabalhista e seguridade social, 1935–1940',
    sources: [
      { title: 'Social Security Act 1938 — New Zealand Legislation', url: 'https://www.legislation.govt.nz/act/public/1938/0007/latest/whole.html', note: 'Lei original que estruturou a seguridade social da Nova Zelândia sob o governo de Savage.' },
      { title: 'Prime Minister Savage at the Centennial Exhibition — Manatū Taonga', url: 'https://nzhistory.govt.nz/media/sound/hear-prime-minister-savage-centennial-exhibition', note: 'Gravação e transcrição de uma das últimas falas públicas de Savage, preservadas pelo Ministério de Cultura e Patrimônio.' },
    ],
    axes: {
      rep: { value: 76, strength: 'medium', sourceTitle: 'Prime Minister Savage at the Centennial Exhibition — Manatū Taonga', reason: 'A gravação o mostra apresentando trabalho e política pública como primeiro-ministro eleito; não descreve uma teoria completa de democracia.' },
      eco: { value: 87, strength: 'high', sourceTitle: 'Social Security Act 1938 — New Zealand Legislation', reason: 'A lei cria benefícios e assistência médica de alcance nacional custeados e administrados pelo Estado.' },
      con: { value: 72, strength: 'medium', sourceTitle: 'Social Security Act 1938 — New Zealand Legislation', reason: 'O sistema legaliza uma política social nacional planejada e provisão estatal para velhice, doença e desemprego.' },
      mor: { value: 72, strength: 'medium', sourceTitle: 'Prime Minister Savage at the Centennial Exhibition — Manatū Taonga', reason: 'A fala atribui à educação e ao conhecimento da vida econômica um papel público amplo; junto à lei social, isso sustenta reforma social.' },
    },
    rationale: 'O perfil se restringe ao governo trabalhista de Savage, sua legislação de seguridade e seus pronunciamentos públicos.',
    caveats: 'Quatro eixos documentados; permanece fora do ranking. Uma lei não revela, por si só, toda a opinião pessoal do primeiro-ministro.',
  },
  {
    id: 'jacinda-ardern', name: 'Jacinda Ardern', category: 'public-figure', period: 'Primeiro-ministério e discursos públicos, 2017–2023',
    sources: [
      { title: 'PM’s comments to NATO session — Beehive.govt.nz', url: 'https://www.beehive.govt.nz/speech/pms-comments-nato-session', note: 'Declaração pública de 30 de junho de 2022 sobre democracia, dissuasão, alianças e política externa independente.' },
      { title: 'Speech to Friends of the Comprehensive Nuclear-Test-Ban Treaty — Beehive.govt.nz', url: 'https://www.beehive.govt.nz/speech/speech-10th-meeting-friends-comprehensive-nuclear-test-ban-treaty', note: 'Fala pública em que Ardern reafirma oposição a armas nucleares e apoio a tratados de desarmamento.' },
      { title: 'Jacinda Ardern’s Christchurch Call opening statement — Beehive.govt.nz', url: 'https://www.beehive.govt.nz/speech/jacinda-ardern%E2%80%99s-christchurch-call-opening-statement', note: 'Pronunciamento primário sobre segurança on-line, liberdade de expressão e resposta internacional ao terrorismo.' },
      { title: 'Former Members of Parliament: Jacinda Ardern — Parliament of New Zealand', url: 'https://www3.parliament.nz/en/mps-and-electorates/former-members-of-parliament/ardern-jacinda/', note: 'Registro parlamentar oficial confirma o período no cargo até abril de 2023.' },
      { title: 'Jacinda Ardern: public appearance in Sydney — ABC News, September 2026', url: 'https://www.abc.net.au/news/2026-09-17/take-5-jacinda-ardern-zan-rowe/107077166', note: 'Identificação biográfica recente usada apenas para confirmar que Ardern continua viva e pública em setembro de 2026; não sustenta os valores de eixo.' },
    ],
    axes: {
      rep: { value: 79, strength: 'medium', sourceTitle: 'PM’s comments to NATO session — Beehive.govt.nz', reason: 'Ardern descreve a Nova Zelândia como democracia liberal consolidada; o discurso não basta para afirmar apoio a toda política democrática.' },
      pod: { value: 56, strength: 'medium', sourceTitle: 'Jacinda Ardern’s Christchurch Call opening statement — Beehive.govt.nz', reason: 'O discurso busca reduzir risco de terrorismo on-line preservando a liberdade e o uso público da internet, combinação que permanece perto do centro.' },
      dip: { value: 19, strength: 'high', sourceTitle: 'Speech to Friends of the Comprehensive Nuclear-Test-Ban Treaty — Beehive.govt.nz', reason: 'Ardern se declara firme opositora de armas e testes nucleares e apoia compromissos de desarmamento.' },
      int: { value: 76, strength: 'high', sourceTitle: 'PM’s comments to NATO session — Beehive.govt.nz', reason: 'Ela afirma uma política externa independente e recusa ampliar alianças militares, mesmo quando coopera em temas internacionais.' },
      mor: { value: 71, strength: 'medium', sourceTitle: 'Jacinda Ardern’s Christchurch Call opening statement — Beehive.govt.nz', reason: 'A fala enquadra a resposta ao terrorismo como proteção das comunidades, dos direitos e da convivência plural, sem extrapolar para toda a agenda doméstica.' },
      tec: { value: 60, strength: 'medium', sourceTitle: 'Jacinda Ardern’s Christchurch Call opening statement — Beehive.govt.nz', reason: 'O pronunciamento defende a liberdade da internet e sua utilidade, com governança compartilhada para reduzir abuso terrorista.' },
    },
    rationale: 'O vetor combina declarações primárias sobre democracia, desarmamento e segurança digital, em um período de governo limitado a 2017–2023.',
    caveats: 'As falas não sustentam valores econômicos, religiosos, federativos ou de imigração; esses eixos ficam em 50 por falta de base específica. Ardern deixou o Parlamento em 2023 e estava viva em setembro de 2026; por isso fica em figuras públicas.',
  },
];

function makeEntry(person: PersonSpec): ReferenceEntry {
  const vec = Object.fromEntries(keys.map((key) => [key, person.axes[key]?.value ?? 50])) as Record<AxisKey, number>;
  const evidence = Object.fromEntries(Object.entries(person.axes).map(([key, item]) => [key, item!.strength])) as ReferenceEntry['evidence'];
  const axisEvidence = Object.fromEntries(Object.entries(person.axes).map(([key, item]) => [key, { sourceTitles: [item!.sourceTitle ?? person.sources[0].title], rationale: item!.reason }])) as ReferenceEntry['axisEvidence'];
  const { axes: _axes, ...entry } = person;
  return { ...entry, kind: 'person', vec, evidence, axisEvidence };
}

export const peopleAsiaExpansion: ReferenceEntry[] = people.map(makeEntry);
