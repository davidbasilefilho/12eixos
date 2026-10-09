import type { AxisKey, ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';

const reviewedOn = '2026-10-07';
const axes: AxisKey[] = ['est','rep','pod','imi','dip','int','eco','con','com','rel','mor','tec'];
/** Raw arrays before preparation; separately preserved live vectors already include centering. */
export const legacy02RawBaseVectors: Record<string, number[]> = {
  "social-democracy": [
    57,
    92,
    37,
    23,
    20,
    62,
    65,
    70,
    39,
    77,
    75,
    63
  ],
  "democratic-socialism": [
    70,
    94,
    35,
    19,
    16,
    65,
    88,
    85,
    48,
    80,
    80,
    61
  ],
  "social-liberalism": [
    62,
    92,
    25,
    18,
    30,
    57,
    36,
    38,
    17,
    83,
    78,
    79
  ],
  "libertarianism": [
    88,
    78,
    12,
    19,
    12,
    90,
    5,
    5,
    8,
    86,
    72,
    80
  ],
  "green-politics": [
    76,
    91,
    22,
    13,
    9,
    78,
    55,
    75,
    43,
    76,
    85,
    35
  ],
  "christian-democracy": [
    53,
    91,
    56,
    53,
    51,
    46,
    38,
    49,
    35,
    32,
    35,
    75
  ]
};
/** Frozen live input captured before this overlay, not a counterfactual raw catalog. */
export const legacy02LiveBaseline = [
  {
    "id": "social-democracy",
    "vec": [
      50,
      92,
      37,
      23,
      20,
      50,
      65,
      70,
      50,
      50,
      75,
      63
    ],
    "evidence": {
      "rep": "high",
      "eco": "high",
      "con": "high",
      "pod": "medium",
      "mor": "medium",
      "dip": "medium",
      "imi": "medium",
      "tec": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Declaração de princípios da Internacional Socialista"
        ],
        "rationale": "A declaração define democracia por eleições livres, alternância pacífica, direitos de oposição e tribunais independentes, sustentando o polo democrático."
      },
      "pod": {
        "sourceTitles": [
          "Declaração de princípios da Internacional Socialista"
        ],
        "rationale": "O texto trata liberdade individual, expressão e proteção contra coerção como direitos fundamentais, sustentando a direção ao polo de maior liberdade."
      },
      "dip": {
        "sourceTitles": [
          "Declaração de princípios da Internacional Socialista"
        ],
        "rationale": "A declaração rejeita corrida armamentista, defende desarmamento e prioriza resolução pacífica de conflitos, sustentando a direção pacifista."
      },
      "eco": {
        "sourceTitles": [
          "Declaração de princípios da Internacional Socialista"
        ],
        "rationale": "A fonte defende seguridade social e propriedade pública dentro de uma economia mista, sustentando uma posição moderadamente orientada ao setor público."
      },
      "con": {
        "sourceTitles": [
          "Declaração de princípios da Internacional Socialista"
        ],
        "rationale": "O programa combina regulação pública, participação de trabalhadores e cooperativas com mercado competitivo, justificando uma inclinação moderada ao planejamento."
      },
      "mor": {
        "sourceTitles": [
          "Declaração de princípios da Internacional Socialista"
        ],
        "rationale": "A declaração promove igualdade de gênero, direitos de minorias e reforma social, sustentando a direção progressista do perfil."
      },
      "imi": {
        "sourceTitles": [
          "Declaração de princípios da Internacional Socialista"
        ],
        "rationale": "O documento garante direitos individuais e de minorias e reconhece culturas diferentes; isso sustenta a direção multicultural deste eixo, embora não determine um valor preciso."
      },
      "tec": {
        "sourceTitles": [
          "Declaração de princípios da Internacional Socialista"
        ],
        "rationale": "A declaração atribui às novas tecnologias potencial para ampliar cooperação e reduzir trabalho repetitivo, sustentando uma inclinação moderada ao polo tecnológico."
      }
    },
    "sources": [
      {
        "title": "Declaração de princípios da Internacional Socialista",
        "url": "https://www.socialistinternational.org/about-us/declaration-of-principles/",
        "note": "Base primária para democracia, economia, direitos e cooperação internacional."
      }
    ]
  },
  {
    "id": "democratic-socialism",
    "vec": [
      50,
      94,
      35,
      19,
      16,
      50,
      88,
      85,
      50,
      50,
      80,
      61
    ],
    "evidence": {
      "rep": "high",
      "eco": "high",
      "con": "high",
      "pod": "medium",
      "mor": "medium",
      "imi": "medium",
      "tec": "medium",
      "dip": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Declaração de princípios"
        ],
        "rationale": "O texto descreve eleições livres, alternância pacífica, pluralismo e direitos de oposição como condições da democracia socialista."
      },
      "pod": {
        "sourceTitles": [
          "Declaração de princípios"
        ],
        "rationale": "A declaração protege liberdades civis e direitos individuais contra coerção, justificando a inclinação ao polo de maior liberdade."
      },
      "dip": {
        "sourceTitles": [
          "Declaração de Frankfurt",
          "Declaração de princípios"
        ],
        "rationale": "Os documentos defendem desarmamento, oposição à corrida armamentista e solução pacífica de conflitos, apoiando o polo pacifista."
      },
      "eco": {
        "sourceTitles": [
          "Declaração de Frankfurt",
          "Declaração de princípios"
        ],
        "rationale": "A tradição descrita propõe proteção social e propriedade pública em economia mista, apoiando maior provisão pública sem excluir mercados."
      },
      "con": {
        "sourceTitles": [
          "Declaração de Frankfurt",
          "Declaração de princípios"
        ],
        "rationale": "A declaração atualizada inclui planejamento democrático, propriedade pública e participação no trabalho, com mercados preservados numa economia mista."
      },
      "mor": {
        "sourceTitles": [
          "Declaração de princípios"
        ],
        "rationale": "Igualdade de gênero, direitos de minorias e mudança social democrática sustentam a direção progressista."
      },
      "imi": {
        "sourceTitles": [
          "Declaração de princípios"
        ],
        "rationale": "A declaração de 1989 garante direitos de minorias e reconhece que diferentes culturas desenvolvem formas próprias de democracia; isso sustenta a direção multicultural, sem medir sua intensidade numérica."
      },
      "tec": {
        "sourceTitles": [
          "Declaração de princípios"
        ],
        "rationale": "A declaração de 1989 descreve a revolução tecnológica como capaz de apoiar cooperação, proteção ambiental e trabalho útil; isso sustenta uma inclinação moderada ao polo tecnológico."
      }
    },
    "sources": [
      {
        "title": "Declaração de Frankfurt",
        "url": "https://www.socialistinternational.org/our-meetings/congresses/i-frankfurt/",
        "note": "Texto fundador sobre democracia política, direitos e economia socialista."
      },
      {
        "title": "Declaração de princípios",
        "url": "https://www.socialistinternational.org/about-us/declaration-of-principles/",
        "note": "Atualização pluralista de 1989."
      }
    ]
  },
  {
    "id": "social-liberalism",
    "vec": [
      50,
      92,
      25,
      18,
      50,
      50,
      36,
      38,
      17,
      50,
      78,
      79
    ],
    "evidence": {
      "rep": "high",
      "pod": "high",
      "eco": "high",
      "con": "medium",
      "mor": "medium",
      "imi": "medium",
      "com": "high",
      "tec": "high"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Manifesto Liberal de Andorra"
        ],
        "rationale": "O manifesto defende direitos fundamentais, eleições e instituições democráticas sob Estado de direito."
      },
      "pod": {
        "sourceTitles": [
          "Manifesto Liberal de Andorra"
        ],
        "rationale": "A liberdade individual, a privacidade e os limites ao poder público formam princípios centrais do manifesto."
      },
      "eco": {
        "sourceTitles": [
          "Manifesto Liberal de Andorra"
        ],
        "rationale": "O manifesto apoia propriedade privada e iniciativa individual, junto a políticas inclusivas e proteção social; isso sustenta uma posição voltada ao setor privado."
      },
      "con": {
        "sourceTitles": [
          "Manifesto Liberal de Andorra"
        ],
        "rationale": "A fonte favorece mercados e iniciativa privada com regras públicas e responsabilidade fiscal, sustentando uma inclinação ao mercado, não ausência de regulação."
      },
      "mor": {
        "sourceTitles": [
          "Manifesto Liberal de Andorra"
        ],
        "rationale": "O texto defende direitos iguais, pluralismo, privacidade e proteção contra discriminação, sustentando a direção progressista."
      },
      "imi": {
        "sourceTitles": [
          "Manifesto Liberal de Andorra"
        ],
        "rationale": "O manifesto afirma a diversidade de origens e o pluralismo cultural, rejeitando discriminação por raça, religião ou condição social."
      },
      "com": {
        "sourceTitles": [
          "Manifesto Liberal de Andorra"
        ],
        "rationale": "O manifesto rejeita protecionismo e defende ampliar o comércio global livre e justo, sustentando fortemente o polo globalista."
      },
      "tec": {
        "sourceTitles": [
          "Manifesto Liberal de Andorra"
        ],
        "rationale": "O manifesto defende avanços tecnológicos, pesquisa e inovação como meios de progresso, condicionados a direitos e proteção contra abusos."
      }
    },
    "sources": [
      {
        "title": "Manifesto Liberal de Andorra",
        "url": "https://liberal-international.org/who-we-are/our-mission/landmark-documents/political-manifestos/liberal-manifesto-2017/",
        "note": "Direitos, pluralismo, propriedade, empreendimento e seguridade."
      }
    ]
  },
  {
    "id": "libertarianism",
    "vec": [
      50,
      78,
      12,
      19,
      50,
      90,
      5,
      5,
      8,
      50,
      50,
      50
    ],
    "evidence": {
      "pod": "high",
      "eco": "high",
      "con": "high",
      "int": "high",
      "com": "medium",
      "imi": "medium",
      "rep": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Plataforma do Libertarian Party"
        ],
        "rationale": "A plataforma propõe representação proporcional e alternativas eleitorais para tornar o sistema mais representativo."
      },
      "pod": {
        "sourceTitles": [
          "Plataforma do Libertarian Party"
        ],
        "rationale": "A plataforma põe liberdade individual e limites constitucionais ao governo no centro, sustentando o polo de maior liberdade."
      },
      "imi": {
        "sourceTitles": [
          "Plataforma do Libertarian Party"
        ],
        "rationale": "A plataforma apoia circulação de pessoas entre fronteiras e direitos iguais independentemente de origem, sustentando o polo multicultural."
      },
      "int": {
        "sourceTitles": [
          "Plataforma do Libertarian Party"
        ],
        "rationale": "A plataforma rejeita intervenção externa, mudança de regime e alianças militares permanentes, sustentando fortemente o polo não intervencionista."
      },
      "eco": {
        "sourceTitles": [
          "Plataforma do Libertarian Party"
        ],
        "rationale": "O texto protege propriedade individual e se opõe à apropriação estatal do trabalho, sustentando fortemente o polo privado."
      },
      "con": {
        "sourceTitles": [
          "Plataforma do Libertarian Party"
        ],
        "rationale": "A plataforma defende mercados voluntários, livre concorrência e redução de controle governamental da produção, sustentando o polo de livre mercado."
      },
      "com": {
        "sourceTitles": [
          "Plataforma do Libertarian Party"
        ],
        "rationale": "O partido defende comércio livre e circulação transfronteiriça de capital e pessoas, sustentando o polo globalista."
      }
    },
    "sources": [
      {
        "title": "Plataforma do Libertarian Party",
        "url": "https://lp.org/platform-page/",
        "note": "Fonte primária para liberdades, economia, imigração e política externa."
      }
    ]
  },
  {
    "id": "green-politics",
    "vec": [
      76,
      91,
      50,
      13,
      9,
      50,
      50,
      75,
      50,
      50,
      85,
      35
    ],
    "evidence": {
      "rep": "high",
      "dip": "high",
      "mor": "high",
      "tec": "medium",
      "con": "medium",
      "est": "medium",
      "imi": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Global Greens Charter 2023"
        ],
        "rationale": "A Carta apoia fortalecimento do governo local e participação cidadã em todos os níveis, sustentando descentralização federalista."
      },
      "rep": {
        "sourceTitles": [
          "Global Greens Charter 2023"
        ],
        "rationale": "A Carta prioriza participação cidadã, eleições transparentes e controle democrático do poder."
      },
      "dip": {
        "sourceTitles": [
          "Global Greens Charter 2023"
        ],
        "rationale": "A Carta declara compromisso com não violência, desarmamento e resolução cooperativa de conflitos."
      },
      "con": {
        "sourceTitles": [
          "Global Greens Charter 2023"
        ],
        "rationale": "A Carta atribui responsabilidade pública à economia para cumprir metas ecológicas e sociais, sustentando planejamento democrático moderado."
      },
      "mor": {
        "sourceTitles": [
          "Global Greens Charter 2023"
        ],
        "rationale": "A Carta defende igualdade, direitos humanos e justiça intergeracional, sustentando uma orientação progressista."
      },
      "tec": {
        "sourceTitles": [
          "Global Greens Charter 2023"
        ],
        "rationale": "A Carta condiciona tecnologias a limites ecológicos e ao princípio da precaução, sustentando cautela diante do polo tecnológico."
      },
      "imi": {
        "sourceTitles": [
          "Global Greens Charter 2023"
        ],
        "rationale": "A Carta rejeita a exclusão de comunidades raciais, étnicas, nacionais e religiosas e defende diversidade cultural, sustentando o polo multicultural."
      }
    },
    "sources": [
      {
        "title": "Global Greens Charter 2023",
        "url": "https://globalgreens.org/wp-content/uploads/2023/07/GlobalGreens_Charter_2023.pdf",
        "note": "Princípios de sabedoria ecológica, justiça, democracia, não violência e diversidade."
      }
    ]
  },
  {
    "id": "christian-democracy",
    "vec": [
      50,
      91,
      56,
      50,
      51,
      50,
      38,
      50,
      35,
      32,
      35,
      75
    ],
    "evidence": {
      "rep": "high",
      "dip": "medium",
      "eco": "medium",
      "rel": "medium",
      "mor": "medium",
      "tec": "medium",
      "com": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "EPP Manifesto 2024"
        ],
        "rationale": "O manifesto declara defesa de eleições, democracia baseada no Estado de direito e decisão cidadã."
      },
      "pod": {
        "sourceTitles": [
          "EPP Manifesto 2024"
        ],
        "rationale": "O manifesto combina liberdades e direitos com prioridade explícita à segurança, sustentando apenas uma inclinação leve ao polo de segurança."
      },
      "dip": {
        "sourceTitles": [
          "EPP Manifesto 2024"
        ],
        "rationale": "O programa apoia defesa europeia e assistência militar à Ucrânia, o que sustenta uma posição pouco pacifista no recorte contemporâneo."
      },
      "eco": {
        "sourceTitles": [
          "EPP Manifesto 2024"
        ],
        "rationale": "A economia social de mercado e a proteção de serviços públicos coexistem com iniciativa empresarial, justificando uma inclinação moderada ao setor privado."
      },
      "com": {
        "sourceTitles": [
          "EPP Manifesto 2024"
        ],
        "rationale": "O manifesto defende mercados externos, comércio internacional e acordos abertos, sustentando a direção globalista."
      },
      "rel": {
        "sourceTitles": [
          "EPP Manifesto 2024"
        ],
        "rationale": "O manifesto associa explicitamente a tradição política europeia a raízes judaico-cristãs, sustentando a direção religiosa do exemplar EPP."
      },
      "mor": {
        "sourceTitles": [
          "EPP Manifesto 2024"
        ],
        "rationale": "O programa combina tradição e progresso e defende direitos e igualdade de oportunidades, sustentando uma inclinação moderada ao polo progressista."
      },
      "tec": {
        "sourceTitles": [
          "EPP Manifesto 2024"
        ],
        "rationale": "O manifesto propõe investimento em pesquisa, inovação, digitalização e tecnologias, sustentando a direção tecnológica."
      }
    },
    "sources": [
      {
        "title": "EPP Manifesto 2024",
        "url": "https://www.epp.eu/papers/epp-manifesto-2024",
        "note": "Fonte primária para democracia, economia, defesa, integração, valores e inovação."
      }
    ]
  }
];
export const legacy02LiveBaselineSha256 = 'c5a11a6b05d8634b9e8e619d3f6387da34954936c584cc26260106c34f90c323';

type Row = [AxisKey, ReferenceAxisCoding['position'], ReferenceAxisCoding['confidence'], string, string, string, string];
type Review = { period: string; source: ReferenceSource; published: string; rows: Row[]; limits: string };
const reviews: Record<string, Review> = {
"social-democracy": {
  "period": "Declaração de Estocolmo, junho de 1989",
  "source": {
    "title": "SI — Declaração de Estocolmo 1989",
    "url": "https://www.socialistinternational.org/our-meetings/congresses/xviii-stockholm/declaration-of-principles-of-the-socialist-international/",
    "note": "Fonte primária lida em 07/10/2026; locadores e limites registrados por eixo. Programa declarado, não estatística ou prática observada."
  },
  "published": "1989-06",
  "rows": [
    [
      "rep",
      "strong-first",
      "high",
      "§19–22",
      "Eleições plurais, alternância e Judiciário independente.",
      "Democracia explicitamente definida.",
      "Programa declarado, não prática de todos os partidos ou opinião dos membros."
    ],
    [
      "pod",
      "moderate-second",
      "medium",
      "§13,26",
      "Rejeita coerção, tortura e restrições às liberdades.",
      "Garantias civis declaradas.",
      "Direitos sociais coexistem; política penal completa não está definida."
    ],
    [
      "imi",
      "strong-second",
      "high",
      "§27,66",
      "Defende diversidade cultural; rejeita uniformidade.",
      "Multiculturalismo explicitamente defendido.",
      "Não determina uma regra universal de admissão de migrantes."
    ],
    [
      "dip",
      "strong-second",
      "high",
      "§28–36",
      "Defende desarmamento e solução pacífica.",
      "Pacifismo programático amplo.",
      "Não estabelece abolição imediata de toda defesa armada."
    ],
    [
      "eco",
      "moderate-first",
      "medium",
      "§59–62",
      "Propriedade pública e socialização numa economia mista.",
      "Público com mercado e propriedade plural.",
      "Não estabelece predominância estatal absoluta."
    ],
    [
      "con",
      "moderate-first",
      "medium",
      "§60–64",
      "Controle participativo, regulação e mercados dinâmicos.",
      "Coordenação democrática sem comando integral.",
      "Não mede produção efetivamente planejada."
    ],
    [
      "mor",
      "moderate-first",
      "medium",
      "§68–72",
      "Igualdade feminina e assistência ao planejamento familiar.",
      "Reforma de gênero declarada.",
      "Não cobre todas as pautas morais contemporâneas."
    ]
  ],
  "limits": "Distinção ontológica frente ao socialismo democrático é provisória: documentos SI sobrepostos não provam famílias distintas. Tecnologia é desconhecida: §4/49–53 combina benefícios com proibição de manipulação genética e riscos nucleares; otimismo genérico não resolve o eixo inteiro. Não confundir não violência com não intervenção."
},
"democratic-socialism": {
  "period": "Declaração de Frankfurt, 30/06–03/07/1951",
  "source": {
    "title": "SI — Declaração de Frankfurt 1951",
    "url": "https://www.socialistinternational.org/our-meetings/congresses/i-frankfurt/",
    "note": "Fonte primária lida em 07/10/2026; locadores e limites registrados por eixo. Programa declarado, não estatística ou prática observada."
  },
  "published": "1951-07-03",
  "rows": [
    [
      "rep",
      "strong-first",
      "high",
      "Political Democracy §1–5",
      "Eleições universais secretas, oposição e multipartidarismo.",
      "Democracia explícita.",
      "Programa declarado, não prática de todos os partidos ou opinião dos membros."
    ],
    [
      "pod",
      "moderate-second",
      "medium",
      "Political Democracy §3(a,b,g)",
      "Privacidade, expressão e processo judicial imparcial.",
      "Liberdades declaradas.",
      "Admite defesa da democracia contra seus adversários."
    ],
    [
      "imi",
      "moderate-second",
      "medium",
      "Political Democracy §3(f)",
      "Autonomia cultural para grupos linguísticos.",
      "Reconhecimento cultural parcial.",
      "Não estabelece política integral de fronteiras."
    ],
    [
      "eco",
      "moderate-first",
      "medium",
      "Economic Democracy §3–5",
      "Propriedade pública estratégica com setores privados importantes.",
      "Público com propriedade plural.",
      "Não deriva 88 do texto nem universaliza nacionalização."
    ],
    [
      "con",
      "strong-first",
      "high",
      "Economic Democracy §2–7",
      "Produção sistematicamente planejada, democrática e descentralizada.",
      "Planejamento explicitamente abrangente.",
      "Rejeita planejamento totalitário e centralização de toda decisão."
    ],
    [
      "mor",
      "moderate-first",
      "medium",
      "Social Democracy and Cultural Progress §4",
      "Elimina discriminação legal, econômica e política entre sexos.",
      "Reforma igualitária parcial.",
      "Não projeta posições contemporâneas não mencionadas."
    ],
    [
      "dip",
      "moderate-second",
      "medium",
      "International Democracy §9–10",
      "Paz, segurança coletiva e desarmamento internacional.",
      "Pacifismo condicionado à segurança coletiva.",
      "Segurança coletiva não significa não intervenção."
    ]
  ],
  "limits": "Distinção ontológica frente à social-democracia permanece provisória; mesma organização abrange as duas famílias. O recorte de 1951 substitui o antigo período composto 1951–1989. Diferença econômica não é intensidade inventada do mesmo texto: decorre da obrigação sistemática de planejar em 1951, contrastada com meios variados e mercados em 1989."
},
"social-liberalism": {
  "period": "Manifesto de Andorra, 20/05/2017",
  "source": {
    "title": "LI — Manifesto de Andorra 2017, PDF oficial",
    "url": "https://liberal-international.org/wp-content/uploads/2018/03/Andorra-Liberal-Manifesto-2017-FINAL.pdf",
    "note": "Fonte primária lida em 07/10/2026; locadores e limites registrados por eixo. Programa declarado, não estatística ou prática observada."
  },
  "published": "2017-05-20",
  "rows": [
    [
      "rep",
      "strong-first",
      "high",
      "Response §2, pp.5",
      "Responsabilização democrática, poderes separados e sociedade civil.",
      "Democracia programática forte.",
      "Programa declarado, não prática de todos os partidos ou opinião dos membros."
    ],
    [
      "pod",
      "moderate-second",
      "medium",
      "Response §3, pp.5–6",
      "Expressão, privacidade e proteção contra vigilância.",
      "Liberdade com garantias legais.",
      "§1 também exige investimento público em segurança."
    ],
    [
      "imi",
      "moderate-second",
      "medium",
      "Response §9, pp.8–9",
      "Migração enriquece culturas, com limites de capacidade.",
      "Abertura cultural regulada.",
      "Não é imigração irrestrita nem resposta completa sobre assimilação."
    ],
    [
      "rel",
      "strong-first",
      "high",
      "Response §2, pp.5",
      "Separa religiões organizadas e instituições estatais.",
      "Separação institucional explícita.",
      "Não atribui ateísmo aos membros."
    ],
    [
      "mor",
      "moderate-first",
      "medium",
      "Response §1, pp.4–5",
      "Defende pessoas LGBT e direitos reprodutivos femininos.",
      "Reforma social explícita e parcial.",
      "Não uniformiza todas as pautas morais."
    ],
    [
      "com",
      "strong-second",
      "high",
      "Response §8, pp.8",
      "Combate protecionismo e promove acordos abertos.",
      "Livre comércio programático amplo.",
      "Condicionado às regras da OMC e igualdade de acesso."
    ],
    [
      "tec",
      "moderate-first",
      "medium",
      "Response §7, pp.7–8",
      "Promove IA e biotecnologia com supervisão de abusos.",
      "Avanço técnico explicitamente regulado.",
      "Não legitima todo uso militar ou alteração corporal."
    ]
  ],
  "limits": "Economia/propriedade e planejamento ficam desconhecidos: acesso a propriedade, saúde e mercados não estabelece predominância de uma forma de propriedade nem um modelo abrangente de alocação. Descentralização genérica não estabelece federalismo."
},
"libertarianism": {
  "period": "Plataforma do Libertarian Party, página consultada em 07/10/2026",
  "source": {
    "title": "LP — Plataforma, texto integral consultado em 2026",
    "url": "https://lp.org/platform-page/",
    "note": "Fonte primária lida em 07/10/2026; locadores e limites registrados por eixo. Programa declarado, não estatística ou prática observada."
  },
  "published": "Página sem data de edição; consultada 2026-10-07",
  "rows": [
    [
      "rep",
      "moderate-first",
      "medium",
      "§3.6",
      "Defende representação, alternativas eleitorais e referendos.",
      "Desenho eleitoral democrático explícito e parcial.",
      "Programa declarado, não prática de todos os partidos ou opinião dos membros."
    ],
    [
      "pod",
      "strong-second",
      "high",
      "§1.2–1.3,1.7–1.8,3.2",
      "Expressão, privacidade, devido processo e fim da pena capital.",
      "Garantias amplas contra coerção.",
      "Armas e propriedade privada permanecem parte do programa."
    ],
    [
      "imi",
      "moderate-second",
      "medium",
      "§3.4–3.5",
      "Movimento transfronteiriço livre e direitos independentemente da identidade.",
      "Abertura migratória com direitos individuais.",
      "Associações privadas podem excluir; não é defesa integral de direitos culturais coletivos."
    ],
    [
      "int",
      "strong-first",
      "high",
      "§3.1,3.3",
      "Rejeita intervenção externa, ajuda militar e mudança de regime.",
      "Não intervenção expressa.",
      "Mantém defesa contra agressão; não implica pacifismo absoluto."
    ],
    [
      "eco",
      "strong-second",
      "high",
      "§2.8,2.12–2.14",
      "Privatiza provisão social; Estado não compete com empresas.",
      "Predominância privada explicitamente defendida.",
      "Não é propriedade sem regras contra fraude ou agressão."
    ],
    [
      "con",
      "strong-second",
      "high",
      "§2.0–2.1",
      "Mercado aloca recursos; rejeita controles produtivos e de preços.",
      "Livre mercado explicitamente abrangente.",
      "Programa declarado, não prática de todos os partidos ou opinião dos membros."
    ],
    [
      "com",
      "strong-second",
      "high",
      "§3.3–3.4",
      "Remove obstáculos comerciais, tarifas e sanções.",
      "Livre comércio amplo.",
      "Programa declarado, não prática de todos os partidos ou opinião dos membros."
    ],
    [
      "rel",
      "strong-first",
      "high",
      "§1.2",
      "Estado não auxilia nem ataca religiões.",
      "Separação de religião e governo.",
      "Não atribui irreligiosidade privada."
    ],
    [
      "mor",
      "moderate-first",
      "medium",
      "§1.4,2.10",
      "Relações consensuais livres, igualdade sexual e descriminalização do trabalho sexual.",
      "Reforma social definida por autonomia.",
      "Direitos parentais e ausência de aprovação moral limitam leitura de progressismo universal."
    ]
  ],
  "limits": "Não atribui plataforma de um partido a todos os libertarianismos. Não há edição impressa datada na página atual. Defesa suficiente e secessão não estabelecem todo o eixo pacifismo/federalismo; tecnologia permanece desconhecida."
},
"green-politics": {
  "period": "Carta Global Greens, atualização da Coreia, 2023",
  "source": {
    "title": "Global Greens Charter 2023",
    "url": "https://globalgreens.org/wp-content/uploads/2023/07/GlobalGreens_Charter_2023.pdf",
    "note": "Fonte primária lida em 07/10/2026; locadores e limites registrados por eixo. Programa declarado, não estatística ou prática observada."
  },
  "published": "Atualização Coreia 2023",
  "rows": [
    [
      "est",
      "strong-first",
      "high",
      "Participatory Democracy, p.6",
      "Poder local/regional; níveis superiores apenas quando essenciais.",
      "Descentralização territorial expressamente abrangente.",
      "Não fixa uma constituição federal única."
    ],
    [
      "rep",
      "strong-first",
      "high",
      "Participatory Democracy, p.6",
      "Voto igual, proporcionalidade, multipartidarismo e participação.",
      "Democracia explícita.",
      "Programa declarado, não prática de todos os partidos ou opinião dos membros."
    ],
    [
      "pod",
      "moderate-second",
      "medium",
      "§6.2,6.9–6.13, pp.15–16",
      "Rejeita tortura, pena capital e detenção arbitrária.",
      "Liberdades e limites ao poder penal.",
      "Não descreve toda política policial."
    ],
    [
      "imi",
      "strong-second",
      "high",
      "Respect for Diversity, p.8; §6.18, p.16",
      "Defende diversidade e direitos linguísticos minoritários.",
      "Pluralidade cultural explícita.",
      "Asilo protegido não equivale a todas as fronteiras abertas."
    ],
    [
      "dip",
      "strong-second",
      "high",
      "Nonviolence, p.7",
      "Não violência, desarmamento e cooperação são centrais.",
      "Pacifismo programático amplo.",
      "Organização de segurança coletiva continua prevista."
    ],
    [
      "eco",
      "moderate-first",
      "medium",
      "§5.2,7.2, pp.13,17",
      "Água pública; rejeita privatização da infraestrutura hídrica.",
      "Propriedade pública setorial.",
      "Não infere domínio público de toda economia."
    ],
    [
      "con",
      "moderate-first",
      "medium",
      "§5.9–5.10,8.7, pp.14,18",
      "Regula finanças e empresas; planejamento sustentável local.",
      "Coordenação pública parcial.",
      "Não é comando central integral."
    ],
    [
      "mor",
      "strong-first",
      "high",
      "§6.6,6.16, pp.15–16",
      "Autonomia reprodutiva, reconhecimento trans e igualdade familiar.",
      "Reforma social em várias pautas explícitas.",
      "Programa declarado, não prática de todos os partidos ou opinião dos membros."
    ],
    [
      "tec",
      "moderate-second",
      "medium",
      "§3.6,7.9,7.11, pp.11,17",
      "Rejeita expansão nuclear e cultivos transgênicos; precaução científica.",
      "Cautela tecnológica com proposições específicas.",
      "Também promove tecnologias sustentáveis; não rejeita ciência ou toda automação."
    ]
  ],
  "limits": "Não infere segurança de precaução ecológica. Comércio condicionado à sustentabilidade não define automaticamente protecionismo nacional; religião e intervenção permanecem desconhecidas."
},
"christian-democracy": {
  "period": "Manifesto EPP, 2024",
  "source": {
    "title": "EPP Manifesto 2024",
    "url": "https://www.epp.eu/papers/epp-manifesto-2024",
    "note": "Fonte primária lida em 07/10/2026; locadores e limites registrados por eixo. Programa declarado, não estatística ou prática observada."
  },
  "published": "Manifesto 2024",
  "rows": [
    [
      "rep",
      "strong-first",
      "high",
      "Introdução; §3.2",
      "Democracia, pluralismo e Estado de direito.",
      "Democracia programática explícita.",
      "Programa declarado, não prática de todos os partidos ou opinião dos membros."
    ],
    [
      "pod",
      "moderate-first",
      "medium",
      "§1.5 e 1.7; §3.2",
      "Amplia Europol, bases policiais e armazenamento de IPs com salvaguardas.",
      "Poderes de segurança reforçados, sujeitos a direitos.",
      "Não deduz autocracia da ênfase em segurança."
    ],
    [
      "dip",
      "moderate-first",
      "medium",
      "§1.2",
      "Amplia defesa, indústria militar e NATO.",
      "Postura militar defensiva reforçada.",
      "Não promove guerra agressiva nem anula neutralidade de membros."
    ],
    [
      "int",
      "moderate-second",
      "medium",
      "§1.1–1.2, fundo de intervenção externa",
      "Ajuda militar externa e fundo de operações internacionais.",
      "Intervenção externa explicitamente prevista.",
      "Contexto defensivo e cooperação europeia, não intervenção irrestrita."
    ],
    [
      "com",
      "moderate-second",
      "medium",
      "Introdução; §2.1–2.2",
      "Promove acordos recíprocos; protege setores estratégicos.",
      "Abertura comercial regulada.",
      "Não é livre comércio irrestrito."
    ],
    [
      "tec",
      "moderate-first",
      "medium",
      "§1.2,2.4,2.6",
      "Promove IA, fusão nuclear, robótica e biotecnologia agrícola.",
      "Avanço tecnológico regulado em várias áreas.",
      "Não cobre todos os usos corporais ou riscos da tecnologia."
    ]
  ],
  "limits": "Raízes cristãs culturais não provam papel religioso do Estado: rel desconhecido. Tradição combinada com igualdade não define toda pauta moral: mor desconhecido. Economia social de mercado não prova propriedade predominante; eco e con desconhecidos."
},
};

const codingFor = (review: Review): ReferenceAxisCoding[] => review.rows.map(([axis,position,confidence,locator,statement,rationale,uncertainty]) => ({
  axis, position, confidence,
  claims: [{ sourceTitle: review.source.title, locator, statement, basis: 'declaration', publishedDate: review.published, accessedDate: reviewedOn }],
  rationale, uncertainty, reviewedOn,
}));

/** Apply after preparation/legacy corrections; never infer grades on unreviewed axes. */
export function reconcileLegacy02(entry: ReferenceEntry): ReferenceEntry {
  const review = reviews[entry.id];
  if (!review) return entry;
  const sources = [...entry.sources];
  if (!sources.some(item => item.title === review.source.title && item.url === review.source.url)) sources.push(review.source);
  const result: ReferenceEntry = { ...entry, period: review.period, sources,
    vec: Object.fromEntries(axes.map(axis => [axis,50])) as Record<AxisKey,number>,
    evidence: {}, axisEvidence: {}, coding: {},
    rationale: 'Posições programáticas codificadas em âncoras ordinais explícitas a partir de trechos primários localizados; não são números medidos pelas fontes.',
    caveats: review.limits,
  };
  for (const input of codingFor(review)) {
    const encoded = codeReferenceAxis(input,sources);
    result.vec[input.axis] = encoded.value;
    result.evidence[input.axis] = encoded.evidence;
    result.axisEvidence![input.axis] = encoded.axisEvidence;
    result.coding![input.axis] = encoded.coding;
  }
  return result;
}
export const legacy02CodingAudit = Object.entries(reviews).map(([id,review]) => ({
  id, reviewedOn, rawBaseVector: legacy02RawBaseVectors[id],
  integratedLiveBaseline: legacy02LiveBaseline.find(item => item.id === id),
  supportedAxes: review.rows.map(row => row[0]),
  coding: codingFor(review).map(input => codeReferenceAxis(input,[review.source]).coding),
}));
