import type { AxisKey, ReferenceEntry } from './references';

/**
 * Legacy profiles predating axis-level evidence retained directional values on
 * axes with no source-to-axis evidence. Those values are unknown, not implicit
 * positions; center only those axes. Source-backed recoveries include both a
 * grade and a per-axis rationale. Record identity, periods, sources, and image
 * metadata remain unchanged.
 */
type LegacyCorrection = Pick<ReferenceEntry, 'id'> &
  Partial<Omit<ReferenceEntry, 'id' | 'vec' | 'evidence' | 'axisEvidence'>> & {
    vec?: Partial<Record<AxisKey, number>>;
    evidence?: ReferenceEntry['evidence'];
    axisEvidence?: ReferenceEntry['axisEvidence'];
  };

const unknownAxesById = {
  'social-democracy': ['est', 'int', 'com', 'rel'],
  'democratic-socialism': ['est', 'int', 'com', 'rel'],
  'social-liberalism': ['est', 'dip', 'int', 'rel'],
  libertarianism: ['est', 'dip', 'rel', 'mor', 'tec'],
  'green-politics': ['pod', 'int', 'eco', 'com', 'rel'],
  'christian-democracy': ['est', 'imi', 'int', 'con'],
  'bernie-sanders': ['est', 'rep', 'pod', 'imi', 'dip', 'int', 'com', 'rel'],
  'nelson-mandela': ['est', 'dip', 'int', 'eco', 'con', 'com', 'rel'],
  'friedrich-hayek': ['est', 'imi', 'dip', 'int', 'com', 'rel', 'mor', 'tec'],
  'mahatma-gandhi': ['rep', 'pod', 'imi', 'int', 'eco', 'con', 'rel', 'mor'],
  'john-stuart-mill': ['est', 'rep', 'imi', 'dip', 'eco', 'con', 'com', 'rel', 'mor', 'tec'],
  'karl-marx': ['est', 'rep', 'pod', 'int', 'com', 'rel', 'mor'],
  'albert-einstein': ['est', 'int', 'com', 'rel', 'mor', 'tec'],
  'friedrich-engels': ['est', 'rep', 'int', 'com', 'rel', 'mor', 'tec'],
  'nicolas-de-condorcet': ['pod', 'dip', 'eco', 'con', 'com'],
  'thomas-paine': ['imi', 'dip', 'com', 'tec'],
  'george-soros': ['est', 'pod', 'dip', 'con', 'rel', 'tec'],
  'eduard-bernstein': ['est', 'com', 'tec'],
  'olof-palme': ['est', 'pod', 'imi', 'com', 'rel', 'tec'],
  uruguay: ['imi', 'dip', 'int', 'con', 'com', 'rel', 'mor', 'tec'],
  denmark: ['est', 'imi', 'dip', 'int', 'con', 'com', 'rel', 'mor', 'tec'],
  'united-states': ['imi', 'dip', 'int', 'con', 'com', 'rel', 'mor', 'tec'],
  singapore: ['imi', 'dip', 'int', 'eco', 'rel', 'mor', 'tec'],
  germany: ['imi', 'int', 'con', 'com', 'rel', 'mor', 'tec'],
  'new-zealand': ['est', 'imi', 'dip', 'int', 'con', 'com', 'rel', 'mor', 'tec'],
  brazil: ['dip', 'int', 'con', 'com', 'mor', 'tec'],
  japan: ['imi', 'int', 'eco', 'con', 'mor'],
  india: ['dip', 'int', 'com', 'mor'],
  'south-africa': ['pod', 'int', 'com', 'tec'],
  indonesia: ['imi', 'dip', 'int', 'com', 'mor', 'tec'],
  mexico: ['dip', 'con', 'com', 'mor', 'tec'],
  turkey: ['imi', 'dip', 'eco', 'con', 'com', 'tec'],
  'saudi-arabia': ['imi', 'eco', 'con', 'com'],
  france: ['imi', 'dip', 'int', 'con', 'com', 'mor', 'tec'],
  'paris-commune-1871': ['dip', 'com', 'tec'],
  'us-new-deal-1933': ['int', 'rel', 'mor', 'tec'],
  'brazil-estado-novo-1937': ['imi', 'dip', 'int', 'rel', 'tec'],
  'imperial-japan-1931': ['rel', 'tec'],
  'prc-mao-1949': ['int', 'mor'],
  'cuba-revolutionary-1959': ['imi', 'mor', 'tec'],
  'portugal-estado-novo-1933': ['int', 'eco', 'con', 'tec'],
  'chile-pinochet-1973': ['imi', 'com', 'tec'],
  'roc-taiwan-1949': ['imi', 'rel', 'mor', 'tec'],
  'france-de-gaulle-1958': ['imi', 'com', 'mor'],
  'chile-up-1970': ['est', 'pod', 'dip', 'int', 'tec'],
  'uk-attlee-1945': ['est', 'pod', 'dip', 'com', 'rel', 'tec'],
  'weimar-republic': ['pod', 'dip', 'int', 'eco', 'con', 'rel'],
  'yugoslavia-1974': ['pod', 'rel', 'mor', 'tec'],
  'ussr-1977': ['imi', 'mor'],
} satisfies Record<string, AxisKey[]>;

const recoveredSocialistInternationalEvidence: Record<string, NonNullable<ReferenceEntry['axisEvidence']>> = {
  'social-democracy': {
    rep: {
      sourceTitles: ['Declaração de princípios da Internacional Socialista'],
      rationale: 'A declaração define democracia por eleições livres, alternância pacífica, direitos de oposição e tribunais independentes, sustentando o polo democrático.',
    },
    pod: {
      sourceTitles: ['Declaração de princípios da Internacional Socialista'],
      rationale: 'O texto trata liberdade individual, expressão e proteção contra coerção como direitos fundamentais, sustentando a direção ao polo de maior liberdade.',
    },
    dip: {
      sourceTitles: ['Declaração de princípios da Internacional Socialista'],
      rationale: 'A declaração rejeita corrida armamentista, defende desarmamento e prioriza resolução pacífica de conflitos, sustentando a direção pacifista.',
    },
    eco: {
      sourceTitles: ['Declaração de princípios da Internacional Socialista'],
      rationale: 'A fonte defende seguridade social e propriedade pública dentro de uma economia mista, sustentando uma posição moderadamente orientada ao setor público.',
    },
    con: {
      sourceTitles: ['Declaração de princípios da Internacional Socialista'],
      rationale: 'O programa combina regulação pública, participação de trabalhadores e cooperativas com mercado competitivo, justificando uma inclinação moderada ao planejamento.',
    },
    mor: {
      sourceTitles: ['Declaração de princípios da Internacional Socialista'],
      rationale: 'A declaração promove igualdade de gênero, direitos de minorias e reforma social, sustentando a direção progressista do perfil.',
    },
    imi: {
      sourceTitles: ['Declaração de princípios da Internacional Socialista'],
      rationale: 'O documento garante direitos individuais e de minorias e reconhece culturas diferentes; isso sustenta a direção multicultural deste eixo, embora não determine um valor preciso.',
    },
    tec: {
      sourceTitles: ['Declaração de princípios da Internacional Socialista'],
      rationale: 'A declaração atribui às novas tecnologias potencial para ampliar cooperação e reduzir trabalho repetitivo, sustentando uma inclinação moderada ao polo tecnológico.',
    },
  },
  'democratic-socialism': {
    rep: {
      sourceTitles: ['Declaração de princípios'],
      rationale: 'O texto descreve eleições livres, alternância pacífica, pluralismo e direitos de oposição como condições da democracia socialista.',
    },
    pod: {
      sourceTitles: ['Declaração de princípios'],
      rationale: 'A declaração protege liberdades civis e direitos individuais contra coerção, justificando a inclinação ao polo de maior liberdade.',
    },
    dip: {
      sourceTitles: ['Declaração de Frankfurt', 'Declaração de princípios'],
      rationale: 'Os documentos defendem desarmamento, oposição à corrida armamentista e solução pacífica de conflitos, apoiando o polo pacifista.',
    },
    eco: {
      sourceTitles: ['Declaração de Frankfurt', 'Declaração de princípios'],
      rationale: 'A tradição descrita propõe proteção social e propriedade pública em economia mista, apoiando maior provisão pública sem excluir mercados.',
    },
    con: {
      sourceTitles: ['Declaração de Frankfurt', 'Declaração de princípios'],
      rationale: 'A declaração atualizada inclui planejamento democrático, propriedade pública e participação no trabalho, com mercados preservados numa economia mista.',
    },
    mor: {
      sourceTitles: ['Declaração de princípios'],
      rationale: 'Igualdade de gênero, direitos de minorias e mudança social democrática sustentam a direção progressista.',
    },
    imi: {
      sourceTitles: ['Declaração de princípios'],
      rationale: 'A declaração de 1989 garante direitos de minorias e reconhece que diferentes culturas desenvolvem formas próprias de democracia; isso sustenta a direção multicultural, sem medir sua intensidade numérica.',
    },
    tec: {
      sourceTitles: ['Declaração de princípios'],
      rationale: 'A declaração de 1989 descreve a revolução tecnológica como capaz de apoiar cooperação, proteção ambiental e trabalho útil; isso sustenta uma inclinação moderada ao polo tecnológico.',
    },
  },
  'social-liberalism': {
    rep: {
      sourceTitles: ['Manifesto Liberal de Andorra'],
      rationale: 'O manifesto defende direitos fundamentais, eleições e instituições democráticas sob Estado de direito.',
    },
    pod: {
      sourceTitles: ['Manifesto Liberal de Andorra'],
      rationale: 'A liberdade individual, a privacidade e os limites ao poder público formam princípios centrais do manifesto.',
    },
    eco: {
      sourceTitles: ['Manifesto Liberal de Andorra'],
      rationale: 'O manifesto apoia propriedade privada e iniciativa individual, junto a políticas inclusivas e proteção social; isso sustenta uma posição voltada ao setor privado.',
    },
    con: {
      sourceTitles: ['Manifesto Liberal de Andorra'],
      rationale: 'A fonte favorece mercados e iniciativa privada com regras públicas e responsabilidade fiscal, sustentando uma inclinação ao mercado, não ausência de regulação.',
    },
    mor: {
      sourceTitles: ['Manifesto Liberal de Andorra'],
      rationale: 'O texto defende direitos iguais, pluralismo, privacidade e proteção contra discriminação, sustentando a direção progressista.',
    },
    imi: {
      sourceTitles: ['Manifesto Liberal de Andorra'],
      rationale: 'O manifesto afirma a diversidade de origens e o pluralismo cultural, rejeitando discriminação por raça, religião ou condição social.',
    },
    com: {
      sourceTitles: ['Manifesto Liberal de Andorra'],
      rationale: 'O manifesto rejeita protecionismo e defende ampliar o comércio global livre e justo, sustentando fortemente o polo globalista.',
    },
    tec: {
      sourceTitles: ['Manifesto Liberal de Andorra'],
      rationale: 'O manifesto defende avanços tecnológicos, pesquisa e inovação como meios de progresso, condicionados a direitos e proteção contra abusos.',
    },
  },
  libertarianism: {
    rep: {
      sourceTitles: ['Plataforma do Libertarian Party'],
      rationale: 'A plataforma propõe representação proporcional e alternativas eleitorais para tornar o sistema mais representativo.',
    },
    pod: {
      sourceTitles: ['Plataforma do Libertarian Party'],
      rationale: 'A plataforma põe liberdade individual e limites constitucionais ao governo no centro, sustentando o polo de maior liberdade.',
    },
    imi: {
      sourceTitles: ['Plataforma do Libertarian Party'],
      rationale: 'A plataforma apoia circulação de pessoas entre fronteiras e direitos iguais independentemente de origem, sustentando o polo multicultural.',
    },
    int: {
      sourceTitles: ['Plataforma do Libertarian Party'],
      rationale: 'A plataforma rejeita intervenção externa, mudança de regime e alianças militares permanentes, sustentando fortemente o polo não intervencionista.',
    },
    eco: {
      sourceTitles: ['Plataforma do Libertarian Party'],
      rationale: 'O texto protege propriedade individual e se opõe à apropriação estatal do trabalho, sustentando fortemente o polo privado.',
    },
    con: {
      sourceTitles: ['Plataforma do Libertarian Party'],
      rationale: 'A plataforma defende mercados voluntários, livre concorrência e redução de controle governamental da produção, sustentando o polo de livre mercado.',
    },
    com: {
      sourceTitles: ['Plataforma do Libertarian Party'],
      rationale: 'O partido defende comércio livre e circulação transfronteiriça de capital e pessoas, sustentando o polo globalista.',
    },
  },
  'green-politics': {
    est: {
      sourceTitles: ['Global Greens Charter 2023'],
      rationale: 'A Carta apoia fortalecimento do governo local e participação cidadã em todos os níveis, sustentando descentralização federalista.',
    },
    rep: {
      sourceTitles: ['Global Greens Charter 2023'],
      rationale: 'A Carta prioriza participação cidadã, eleições transparentes e controle democrático do poder.',
    },
    dip: {
      sourceTitles: ['Global Greens Charter 2023'],
      rationale: 'A Carta declara compromisso com não violência, desarmamento e resolução cooperativa de conflitos.',
    },
    con: {
      sourceTitles: ['Global Greens Charter 2023'],
      rationale: 'A Carta atribui responsabilidade pública à economia para cumprir metas ecológicas e sociais, sustentando planejamento democrático moderado.',
    },
    mor: {
      sourceTitles: ['Global Greens Charter 2023'],
      rationale: 'A Carta defende igualdade, direitos humanos e justiça intergeracional, sustentando uma orientação progressista.',
    },
    tec: {
      sourceTitles: ['Global Greens Charter 2023'],
      rationale: 'A Carta condiciona tecnologias a limites ecológicos e ao princípio da precaução, sustentando cautela diante do polo tecnológico.',
    },
    imi: {
      sourceTitles: ['Global Greens Charter 2023'],
      rationale: 'A Carta rejeita a exclusão de comunidades raciais, étnicas, nacionais e religiosas e defende diversidade cultural, sustentando o polo multicultural.',
    },
  },
  'christian-democracy': {
    rep: {
      sourceTitles: ['EPP Manifesto 2024'],
      rationale: 'O manifesto declara defesa de eleições, democracia baseada no Estado de direito e decisão cidadã.',
    },
    pod: {
      sourceTitles: ['EPP Manifesto 2024'],
      rationale: 'O manifesto combina liberdades e direitos com prioridade explícita à segurança, sustentando apenas uma inclinação leve ao polo de segurança.',
    },
    dip: {
      sourceTitles: ['EPP Manifesto 2024'],
      rationale: 'O programa apoia defesa europeia e assistência militar à Ucrânia, o que sustenta uma posição pouco pacifista no recorte contemporâneo.',
    },
    eco: {
      sourceTitles: ['EPP Manifesto 2024'],
      rationale: 'A economia social de mercado e a proteção de serviços públicos coexistem com iniciativa empresarial, justificando uma inclinação moderada ao setor privado.',
    },
    com: {
      sourceTitles: ['EPP Manifesto 2024'],
      rationale: 'O manifesto defende mercados externos, comércio internacional e acordos abertos, sustentando a direção globalista.',
    },
    rel: {
      sourceTitles: ['EPP Manifesto 2024'],
      rationale: 'O manifesto associa explicitamente a tradição política europeia a raízes judaico-cristãs, sustentando a direção religiosa do exemplar EPP.',
    },
    mor: {
      sourceTitles: ['EPP Manifesto 2024'],
      rationale: 'O programa combina tradição e progresso e defende direitos e igualdade de oportunidades, sustentando uma inclinação moderada ao polo progressista.',
    },
    tec: {
      sourceTitles: ['EPP Manifesto 2024'],
      rationale: 'O manifesto propõe investimento em pesquisa, inovação, digitalização e tecnologias, sustentando a direção tecnológica.',
    },
  },
  'bernie-sanders': {
    eco: {
      sourceTitles: ['Temas e propostas do senador Sanders'],
      rationale: 'O gabinete propõe seguro de saúde universal, salário mínimo mais alto, seguridade social e serviços públicos, sustentando maior provisão pública.',
    },
    con: {
      sourceTitles: ['Temas e propostas do senador Sanders'],
      rationale: 'A fonte defende regras contra concentração empresarial, negociação coletiva e regulação de setores essenciais, apoiando uma inclinação ao planejamento público.',
    },
    mor: {
      sourceTitles: ['Temas e propostas do senador Sanders'],
      rationale: 'As propostas incluem igualdade racial, direitos trabalhistas, saúde universal e proteção de minorias, sustentando a direção progressista.',
    },
    tec: {
      sourceTitles: ['Temas e propostas do senador Sanders'],
      rationale: 'O senador defende ampliar acesso à banda larga, proteger neutralidade da rede e investir em infraestrutura digital, sustentando uma inclinação tecnológica moderada.',
    },
  },
  'nelson-mandela': {
    rep: {
      sourceTitles: ['Discurso de posse de 1994'],
      rationale: 'O discurso descreve eleições livres e abertas e proteção constitucional da oposição e das minorias como fundamentos da nova ordem democrática.',
    },
    pod: {
      sourceTitles: ['Discurso sobre Constituição e direitos, 1994'],
      rationale: 'Mandela afirma que o governo ficaria vinculado à Constituição e não poderia governar conforme sua vontade irrestrita, protegendo direitos e liberdades.',
    },
    imi: {
      sourceTitles: ['Discurso de posse de 1994'],
      rationale: 'O discurso afirma cidadania comum para grupos raciais e culturais diversos e proteção constitucional de suas línguas e culturas.',
    },
    mor: {
      sourceTitles: ['Discurso de posse de 1994'],
      rationale: 'O discurso promete proteção jurídica igual independentemente de raça, gênero, religião, opinião política ou orientação sexual.',
    },
  },
  'friedrich-hayek': {
    rep: {
      sourceTitles: ['The Constitution of Liberty — University of Chicago Press excerpt'],
      rationale: 'Hayek distingue democracia de governo ilimitado e defende instituições constitucionais que limitam a maioria sem abandonar o governo representativo.',
    },
    pod: {
      sourceTitles: ['The Constitution of Liberty — University of Chicago Press excerpt'],
      rationale: 'O texto defende liberdades individuais sob regras gerais e limites à coerção estatal.',
    },
    eco: {
      sourceTitles: ['Palestra Nobel: The Pretence of Knowledge'],
      rationale: 'Hayek atribui à ordem de mercado e à propriedade privada a coordenação de conhecimento disperso e a alocação de recursos.',
    },
    con: {
      sourceTitles: ['Palestra Nobel: The Pretence of Knowledge'],
      rationale: 'A palestra critica a coordenação econômica centralizada e explica por que preços e mercados descentralizados transmitem informação.',
    },
  },
  'mahatma-gandhi': {
    est: {
      sourceTitles: ['Hind Swaraj / Indian Home Rule'],
      rationale: 'Gandhi formula autogoverno como capacidade das comunidades de regular a vida local, em vez de transferir toda autoridade a um centro distante.',
    },
    dip: {
      sourceTitles: ['Hind Swaraj / Indian Home Rule'],
      rationale: 'A obra contrapõe resistência não violenta ao uso da força como caminho político, sustentando fortemente o polo pacifista.',
    },
    com: {
      sourceTitles: ['Hind Swaraj / Indian Home Rule'],
      rationale: 'O texto associa autonomia econômica e boicote a produtos importados à resistência anticolonial, sustentando o polo protecionista deste recorte.',
    },
    tec: {
      sourceTitles: ['Hind Swaraj / Indian Home Rule'],
      rationale: 'Gandhi critica ferrovias, máquinas e industrialização por concentrarem poder e ampliarem danos sociais, sustentando forte cautela tecnológica.',
    },
  },
  'john-stuart-mill': {
    pod: {
      sourceTitles: ['On Liberty, John Stuart Mill'],
      rationale: 'Mill sustenta que coerção social ou estatal só se justifica para prevenir dano a terceiros, defendendo ampla autonomia individual.',
    },
  },
  'karl-marx': {
    eco: {
      sourceTitles: ['Manifesto do Partido Comunista'],
      rationale: 'O manifesto defende propriedade comum dos meios de produção e transformação social da propriedade privada capitalista.',
    },
    con: {
      sourceTitles: ['Manifesto do Partido Comunista'],
      rationale: 'O manifesto propõe coordenação coletiva da produção e medidas econômicas deliberadas, sustentando o polo de planejamento.',
    },
    tec: {
      sourceTitles: ['Manifesto do Partido Comunista'],
      rationale: 'O manifesto descreve a indústria moderna e suas inovações produtivas como forças que transformam a sociedade, reconhecendo seu potencial tecnológico.',
    },
  },
  'albert-einstein': {
    rep: {
      sourceTitles: ['Why Socialism? — Monthly Review'],
      rationale: 'Einstein considera democracia política e proteção de direitos indispensáveis, ao mesmo tempo que alerta para concentração econômica capaz de limitar escolhas reais.',
    },
    pod: {
      sourceTitles: ['Why Socialism? — Monthly Review'],
      rationale: 'O ensaio critica o poder econômico concentrado por restringir liberdade individual e debate público.',
    },
    dip: {
      sourceTitles: ['Albert Einstein: pacifism — Nobel Prize'],
      rationale: 'A biografia institucional documenta o compromisso pacifista público de Einstein, com ressalva de sua evolução diante do nazismo.',
    },
    eco: {
      sourceTitles: ['Why Socialism? — Monthly Review'],
      rationale: 'Einstein defende que a economia sirva necessidades sociais e critica a propriedade privada concentrada dos meios de produção.',
    },
    con: {
      sourceTitles: ['Why Socialism? — Monthly Review'],
      rationale: 'O ensaio pede planejamento democrático da produção para necessidades humanas, acompanhado de direitos e controle público.',
    },
  },
  'friedrich-engels': {
    eco: {
      sourceTitles: ['Princípios do comunismo — Marxists Internet Archive'],
      rationale: 'Engels defende propriedade coletiva dos instrumentos de produção e substituição da propriedade privada capitalista.',
    },
    con: {
      sourceTitles: ['Princípios do comunismo — Marxists Internet Archive'],
      rationale: 'O texto defende organizar a produção segundo um plano comum e necessidades sociais, sustentando o polo de planejamento.',
    },
    tec: {
      sourceTitles: ['Princípios do comunismo — Marxists Internet Archive'],
      rationale: 'Engels analisa a máquina industrial como força transformadora e propõe reorganizar a produção para distribuir seus benefícios.',
    },
  },
  'thomas-paine': {
    rep: {
      sourceTitles: ['Rights of Man — Project Gutenberg'],
      rationale: 'Paine defende governo representativo fundado no consentimento popular e se opõe à monarquia hereditária.',
    },
    pod: {
      sourceTitles: ['Rights of Man — Project Gutenberg'],
      rationale: 'A obra apresenta direitos naturais e proteção da liberdade individual como limites à autoridade governamental.',
    },
    eco: {
      sourceTitles: ['Agrarian Justice — Project Gutenberg'],
      rationale: 'Paine propõe tributação de heranças e pagamentos universais para compensar a desigualdade, sustentando uma inclinação moderada à provisão pública.',
    },
    mor: {
      sourceTitles: ['Rights of Man — Project Gutenberg'],
      rationale: 'Paine critica privilégios hereditários e defende direitos iguais e reformas sociais, sustentando a direção progressista.',
    },
  },
  'george-soros': {
    rep: {
      sourceTitles: ['The Capitalist Threat — The Atlantic'],
      rationale: 'Soros argumenta que mercados livres não garantem por si só uma sociedade aberta e defende instituições democráticas que os corrijam.',
    },
    imi: {
      sourceTitles: ['Open Society Foundations: What We Do'],
      rationale: 'A fundação descreve trabalho em direitos humanos, inclusão e defesa de grupos discriminados, sustentando uma orientação multicultural.',
    },
    int: {
      sourceTitles: ['Open Society: a decade later — The New York Review of Books'],
      rationale: 'Soros defende instituições e cooperação transnacionais para enfrentar problemas globais, sustentando uma inclinação internacionalista moderada.',
    },
    eco: {
      sourceTitles: ['The Capitalist Threat — The Atlantic'],
      rationale: 'O ensaio reconhece o papel do capitalismo, mas pede instituições públicas que limitem seus danos sociais, apoiando uma posição de mercado regulado.',
    },
    mor: {
      sourceTitles: ['Open Society Foundations: What We Do'],
      rationale: 'A fundação promove igualdade de direitos e proteção de grupos vulneráveis, sustentando a direção progressista.',
    },
  },
  'eduard-bernstein': {
    rep: {
      sourceTitles: ['Die Voraussetzungen des Sozialismus und die Aufgaben der Sozialdemokratie (1899) — Internet Archive'],
      rationale: 'Bernstein defende reformas graduais por sufrágio e ação parlamentar em vez de ruptura revolucionária imediata.',
    },
    pod: {
      sourceTitles: ['Die Voraussetzungen des Sozialismus und die Aufgaben der Sozialdemokratie (1899) — Internet Archive'],
      rationale: 'A obra associa socialismo democrático a liberdades políticas e à ampliação da participação dos trabalhadores.',
    },
    dip: {
      sourceTitles: ['Eduard Bernstein — German History in Documents and Images'],
      rationale: 'A entrada documental relaciona sua atuação ao parlamentarismo e à oposição gradualista à revolução armada; sustenta apenas pacifismo moderado.',
    },
    int: {
      sourceTitles: ['Die Voraussetzungen des Sozialismus und die Aufgaben der Sozialdemokratie (1899) — Internet Archive'],
      rationale: 'O texto trata interesses dos trabalhadores em escala internacional e cooperação transnacional, sustentando uma inclinação não nacionalista moderada.',
    },
    eco: {
      sourceTitles: ['Die Voraussetzungen des Sozialismus und die Aufgaben der Sozialdemokratie (1899) — Internet Archive'],
      rationale: 'Bernstein defende expansão gradual de sindicatos, cooperativas e seguridade como alternativas à concentração privada.',
    },
    con: {
      sourceTitles: ['Die Voraussetzungen des Sozialismus und die Aufgaben der Sozialdemokratie (1899) — Internet Archive'],
      rationale: 'A obra propõe reformas planejadas e organização social crescente, sem defender substituir integralmente a atividade de mercado.',
    },
    rel: {
      sourceTitles: ['Eduard Bernstein — German History in Documents and Images'],
      rationale: 'O texto contextualizado discute a crítica de Bernstein a fundamentos religiosos da tradição marxista, sustentando apenas uma inclinação secular moderada.',
    },
    mor: {
      sourceTitles: ['Die Voraussetzungen des Sozialismus und die Aufgaben der Sozialdemokratie (1899) — Internet Archive'],
      rationale: 'Bernstein defende reformas sociais e ampliação de direitos por vias democráticas, sustentando a direção progressista moderada.',
    },
  },
  'olof-palme': {
    rep: {
      sourceTitles: ['Olof Palme — Swedish Social Democratic Party'],
      rationale: 'O registro partidário descreve os governos parlamentares de Palme e sua defesa de direitos democráticos e liberdades públicas.',
    },
    dip: {
      sourceTitles: ['The Common Security — Olof Palme International Center'],
      rationale: 'O relatório da comissão internacional presidida por Palme recomenda desarmamento e segurança comum em vez de escalada militar.',
    },
    int: {
      sourceTitles: ['The Common Security — Olof Palme International Center', 'Olof Palme: apartheid speech, 1964 — Sveriges Radio'],
      rationale: 'O relatório defende segurança cooperativa e o pronunciamento se opõe ao apartheid; juntos sustentam internacionalismo e não intervenção em política externa.',
    },
    eco: {
      sourceTitles: ['Olof Palme — Swedish Social Democratic Party'],
      rationale: 'O registro associa os governos de Palme à expansão do Estado de bem-estar e de serviços públicos.',
    },
    con: {
      sourceTitles: ['Olof Palme — Swedish Social Democratic Party'],
      rationale: 'As reformas sociais descritas foram conduzidas por políticas públicas e coordenação estatal, sustentando uma inclinação moderada ao planejamento.',
    },
    mor: {
      sourceTitles: ['Olof Palme: apartheid speech, 1964 — Sveriges Radio'],
      rationale: 'O discurso de Palme denuncia o apartheid e defende igualdade de direitos, sustentando a orientação progressista.',
    },
  },
};

const recoveredEvidenceById: Record<string, Partial<Record<AxisKey, 'medium' | 'high'>>> = {
  'social-democracy': { imi: 'medium', tec: 'medium' },
  'democratic-socialism': { imi: 'medium', tec: 'medium', dip: 'medium' },
  'social-liberalism': { imi: 'medium', com: 'high', tec: 'high' },
  libertarianism: { rep: 'medium' },
  'green-politics': { est: 'medium', imi: 'medium' },
  'christian-democracy': { com: 'medium' },
};

export const legacyReferenceCorrections: LegacyCorrection[] = Object.entries(unknownAxesById).map(
  ([id, axes]) => ({
    id,
    vec: Object.fromEntries(axes.map((axis) => [axis, 50])) as Partial<Record<AxisKey, number>>,
    ...(recoveredEvidenceById[id] ? { evidence: recoveredEvidenceById[id] } : {}),
    ...(recoveredSocialistInternationalEvidence[id]
      ? { axisEvidence: recoveredSocialistInternationalEvidence[id] }
      : {}),
  }),
);

/** Exposed for audit tooling and assertions without coupling it to UI code. */
export const legacyUnknownAxes: Readonly<Record<string, readonly AxisKey[]>> = unknownAxesById;
