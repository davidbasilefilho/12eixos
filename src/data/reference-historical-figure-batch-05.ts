/** Proposed historical identities: source-bounded authorial coding, no imported legacy score. */
import type { ReferenceEntry, ReferenceSource } from './references';
import { AXES } from '../lib/scoring';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';
import { peopleAmericasExpansion } from './reference-people-americas';
import { peopleAsiaExpansion } from './reference-people-asia';
export interface HistoricalFigureBatch05Spec {
 id:string; name:string; aliases:string[]; period:string; rationale:string; caveats:string;
 sources:ReferenceSource[]; claims:ReferenceAxisCoding[];
}
export const historicalFigureBatch05Specs: HistoricalFigureBatch05Spec[] = [
  {
    "id": "ricardo-flores-magon",
    "name": "Ricardo Flores Magón",
    "period": "Programa coletivo do PLM, assinado em 1º de julho de 1906",
    "rationale": "Perfil documental restrito ao texto e às passagens identificadas; posições desconhecidas permanecem em 50.",
    "caveats": "Programa coletivo: assinatura nominal de Magón como presidente, não autoria exclusiva nem sua posterior fase anarquista. Proíbe imigração chinesa (art.16): contrapeso racial à proposta emancipatória. Sem validar execução.",
    "aliases": [],
    "sources": [
      {
        "title": "Programa del Partido Liberal (1906), Junta Organizadora del PLM",
        "url": "https://www.memoriapoliticademexico.org/Textos/5RepDictadura/1906PPL.html",
        "note": "Texto ou citação autoral efetivamente consultado; ver locadores da codificação."
      },
      {
        "title": "Ricardo Flores Magón — INEHRM",
        "url": "https://inehrm.gob.mx/es/inehrm/magon",
        "note": "Biografia institucional consultada: 1873–1922; falecimento em 21 de novembro de 1922. Não gera eixos."
      }
    ],
    "claims": [
      {
        "axis": "rep",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Programa del Partido Liberal (1906), Junta Organizadora del PLM",
            "publishedDate": "1906-07-01",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "Exposição: vigilancia del pueblo; arts.1–3 e conclusão",
            "statement": "Defende alternância e responsabilização de governantes eleitos."
          }
        ],
        "rationale": "Democracia participativa explícita.",
        "uncertainty": "Programa, não implementação.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "representacao_03",
          "representacao_08"
        ]
      },
      {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Programa del Partido Liberal (1906), Junta Organizadora del PLM",
            "publishedDate": "1906-07-01",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "arts.5–7,41; Exposição: manifestaciones del pensamiento",
            "statement": "Protege expressão, imprensa e amparo; abole pena capital salvo traição."
          }
        ],
        "rationale": "Garantias contra coerção estatal.",
        "uncertainty": "Mantém pena capital por traição, punições por abuso e restrições clericais.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "poder_04",
          "poder_15"
        ]
      },
      {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Programa del Partido Liberal (1906), Junta Organizadora del PLM",
            "publishedDate": "1906-07-01",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "art.4; Exposição: servicio militar e Guardia Nacional",
            "statement": "Rejeita conscrição e militarismo profissional."
          }
        ],
        "rationale": "Contenção militar parcial.",
        "uncertainty": "Mantém defesa armada voluntária.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "diplomacia_09"
        ]
      },
      {
        "axis": "rel",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Programa del Partido Liberal (1906), Junta Organizadora del PLM",
            "publishedDate": "1906-07-01",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "Exposição: resignárase a aceptar la separación; arts.10–11,17–20",
            "statement": "Exige separação Estado–Igreja e escolas laicas."
          }
        ],
        "rationale": "Secularização institucional explícita.",
        "uncertainty": "Inclui restrições coercivas ao clero.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "religiao_01",
          "religiao_05"
        ]
      },
      {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Programa del Partido Liberal (1906), Junta Organizadora del PLM",
            "publishedDate": "1906-07-01",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "arts.10–13,35–37; Exposição: Banco Agrícola",
            "statement": "Propõe escolas estatais e banco agrícola público ou fomentado."
          }
        ],
        "rationale": "Provisão e financiamento público parciais.",
        "uncertainty": "Mantém propriedade produtiva privada; banco pode ser fomentado.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "economia_04"
        ]
      },
      {
        "axis": "con",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Programa del Partido Liberal (1906), Junta Organizadora del PLM",
            "publishedDate": "1906-07-01",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "arts.34–37,50",
            "statement": "Estado redistribui terras e direciona crédito agrícola."
          }
        ],
        "rationale": "Alocação pública delimitada.",
        "uncertainty": "Não define planejamento geral da economia.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "controle_01",
          "controle_19"
        ]
      },
      {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Programa del Partido Liberal (1906), Junta Organizadora del PLM",
            "publishedDate": "1906-07-01",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "arts.43,48 contrapostos ao art.16",
            "statement": "Iguala direitos civis de filhos e protege indígenas."
          }
        ],
        "rationale": "Reforma civil emancipatória parcial.",
        "uncertainty": "Exclusão racial chinesa contradiz universalidade.",
        "reviewedOn": "2026-10-07"
      }
    ]
  },
  {
    "id": "fidel-castro",
    "name": "Fidel Castro",
    "period": "History Will Absolve Me, defesa de 16 de outubro de 1953",
    "rationale": "Perfil documental restrito ao texto e às passagens identificadas; posições desconhecidas permanecem em 50.",
    "caveats": "Tradução/transcrição MIA; original oral de 1953 e antiga edição UCF de 1961 distinguidos. Proposta de oposição, não prática do governo posterior. Primeiro programa concentra temporariamente os três poderes no movimento revolucionário.",
    "aliases": [],
    "sources": [
      {
        "title": "History Will Absolve Me — Fidel Castro, 1953",
        "url": "https://www.marxists.org/history/cuba/archive/castro/1953/10/16.htm",
        "note": "Texto ou citação autoral efetivamente consultado; ver locadores da codificação."
      },
      {
        "title": "Anúncio do falecimento de Fidel Castro — Granma, 26 de novembro de 2016",
        "url": "https://www.granma.cu/hasta-la-victoria-siempre-fidel/2016-11-26/hasta-la-victoria-siempre-26-11-2016-04-11-55?page=4",
        "note": "Comunicado de Raúl Castro reproduzido no órgão oficial; informa morte em 25 de novembro de 2016."
      }
    ],
    "claims": [
      {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "History Will Absolve Me — Fidel Castro, 1953",
            "publishedDate": "1953-10-16",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "The first revolutionary law; The first popularly elected government; six problems",
            "statement": "Propõe restaurar Constituição de 1940 e democracia eleitoral."
          }
        ],
        "rationale": "Direção democrática limitada pelo programa transitório.",
        "uncertainty": "Movimento assume provisoriamente poderes executivo, legislativo e judicial.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "representacao_01",
          "representacao_02"
        ]
      },
      {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "History Will Absolve Me — Fidel Castro, 1953",
            "publishedDate": "1953-10-16",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "another series of laws: nationalization of the electric power trust and the telephone trust",
            "statement": "Propõe nacionalizar eletricidade e telefonia."
          }
        ],
        "rationale": "Propriedade pública em setores específicos.",
        "uncertainty": "Reforma agrária concede títulos privados; não é estatização integral.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "economia_03"
        ]
      },
      {
        "axis": "con",
        "position": "moderate-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "History Will Absolve Me — Fidel Castro, 1953",
            "publishedDate": "1953-10-16",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "A revolutionary government: National Bank and Agricultural and Industrial Development Bank",
            "statement": "Bancos mobilizariam capital para industrialização planejada."
          }
        ],
        "rationale": "Direção deliberada de investimento.",
        "uncertainty": "Programa anunciado; não demonstra execução.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "controle_01"
        ]
      }
    ]
  },
  {
    "id": "mustafa-kemal-ataturk",
    "name": "Mustafa Kemal Atatürk",
    "period": "Definição autoral de estatismo, data original não indicada na reprodução oficial",
    "rationale": "Perfil documental restrito ao texto e às passagens identificadas; posições desconhecidas permanecem em 50.",
    "caveats": "Somente bloco explicitamente atribuído a Atatürk, iniciado Atatürk, devletçilik ilkesini şu şekilde açıklamaktadır; comentário institucional subsequente não vira fala autoral. Data original e referência da nota15 ausentes nesta reprodução; tradução editorial do turco.",
    "aliases": [
      "Ataturk",
      "Mustafa Kemal"
    ],
    "sources": [
      {
        "title": "Devletçilik — Atatürk Araştırma Merkezi",
        "url": "https://atam.gov.tr/devletcilik/",
        "note": "Texto ou citação autoral efetivamente consultado; ver locadores da codificação."
      },
      {
        "title": "The Idea of Anıtkabir — Forças Armadas da Turquia",
        "url": "https://www.anitkabir.tsk.tr/20_ingilizce/02_insaasi/anitkabir_dusuncesi.html",
        "note": "Registro institucional consultado confirma morte em 10 de novembro de 1938."
      }
    ],
    "claims": [
      {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Devletçilik — Atatürk Araştırma Merkezi",
            "publishedDate": "Data original da citação não indicada; página publicada 2023-06-27",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "Bloco autoral: Devletçiliğin bizce anlamı; Türkiye Cumhuriyeti Devleti",
            "statement": "Combina iniciativa privada com atividades econômicas estatais."
          }
        ],
        "rationale": "Economia mista com atuação pública.",
        "uncertainty": "Citação sem data original; não mede propriedade ou prática.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "economia_03"
        ]
      }
    ]
  },
  {
    "id": "sukarno-1945-pancasila",
    "name": "Sukarno",
    "period": "Abertura da Conferência de Bandung, 18 de abril de 1955",
    "rationale": "Perfil documental restrito ao texto e às passagens identificadas; posições desconhecidas permanecem em 50.",
    "caveats": "ID histórico preservado do candidato de 1945; novo recorte é 1955, sem somar pessoa duas vezes. Cabeçalho WorldJPN diz 2015; data1955 é confirmada pela cronologia do museu oficial e contexto interno1954. Tradução inglesa atribuída ao Ministério de Relações Exteriores indonésio; declaração, não auditoria da prática.",
    "aliases": [
      "Soekarno",
      "Bung Karno"
    ],
    "sources": [
      {
        "title": "Discurso de abertura de Bandung — Sukarno, 1955",
        "url": "https://worldjpn.net/documents/texts/docs/19550418.S1E.html",
        "note": "Texto ou citação autoral efetivamente consultado; ver locadores da codificação."
      },
      {
        "title": "Sukarno: an autobiography — registro HathiTrust",
        "url": "https://catalog.hathitrust.org/Record/000003706",
        "note": "Autoridade bibliográfica Soekarno, 1901–1970; catálogo consultado, não conteúdo da autobiografia."
      },
      {
        "title": "KAA1955 — Museum Konperensi Asia Afrika, Ministério das Relações Exteriores",
        "url": "https://mkaa.kemlu.go.id/halaman/KAA-1955",
        "note": "Cronologia oficial efetivamente consultada: seção Asia Afrika Bergema Dari Bandung fixa abertura e discurso em 18 de abril de 1955; corrige somente data do exemplar."
      }
    ],
    "claims": [
      {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Discurso de abertura de Bandung — Sukarno, 1955",
            "publishedDate": "1955-04-18; cabeçalho da reprodução erra 2015, conferido com museu oficial",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "No task is more urgent; five Prime Ministers; no threats, ultimatum or troops",
            "statement": "Prefere mediação e mobilização diplomática pela paz."
          }
        ],
        "rationale": "Contenção internacional explícita.",
        "uncertainty": "Reconhece luta armada de independência; não é pacifismo absoluto.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "diplomacia_02",
          "diplomacia_06"
        ]
      },
      {
        "axis": "imi",
        "position": "moderate-second",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Discurso de abertura de Bandung — Sukarno, 1955",
            "publishedDate": "1955-04-18; cabeçalho da reprodução erra 2015, conferido com museu oficial",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "Indonesia is Asia-Africa in small; Unity in Diversity; live and let live",
            "statement": "Preserva diversidade de etnias e identidades."
          }
        ],
        "rationale": "Pluralidade cultural defendida.",
        "uncertainty": "Não apresenta política completa de imigração.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "imigracao_04",
          "imigracao_08"
        ]
      }
    ]
  },
  {
    "id": "mohammad-hatta",
    "name": "Mohammad Hatta",
    "period": "Artigo autoral sobre cooperativas, junho de 1956",
    "rationale": "Perfil documental restrito ao texto e às passagens identificadas; posições desconhecidas permanecem em 50.",
    "caveats": "Programa autoral, não execução. Admite sociedades privadas; controle público não significa empreendedor estatal único.",
    "aliases": [
      "Bung Hatta"
    ],
    "sources": [
      {
        "title": "Facets of Indonesia’s Economy: The Special Place of Co-Operatives — Mohammad Hatta",
        "url": "https://www.theatlantic.com/magazine/archive/1956/06/facets-of-indonesias-economy-the-special-place-of-co-operatives/640603/",
        "note": "Texto ou citação autoral efetivamente consultado; ver locadores da codificação."
      },
      {
        "title": "Mohammad Hatta — JDIH KPU, 10 de agosto de 2026",
        "url": "https://jdih.kpu.go.id/blog/read/24985/jejak-perjuangan-dan-pemikiran-drs-mohammad-hatta-dalam-membangun-negara-hukum",
        "note": "Registro institucional consultado confirma falecimento em 14 de março de 1980; identidade apenas."
      }
    ],
    "claims": [
      {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Facets of Indonesia’s Economy: The Special Place of Co-Operatives — Mohammad Hatta",
            "publishedDate": "1956-06 (edição mensal)",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "§1: Where co-operatives could not; Large-scale industries",
            "statement": "Defende cooperativas e indústria pública."
          }
        ],
        "rationale": "Propriedade coletiva parcial.",
        "uncertainty": "Admite empresas privadas.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "economia_03",
          "economia_05"
        ]
      },
      {
        "axis": "con",
        "position": "moderate-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Facets of Indonesia’s Economy: The Special Place of Co-Operatives — Mohammad Hatta",
            "publishedDate": "1956-06 (edição mensal)",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "§1: Governmental control; determining which kinds of production",
            "statement": "Governo determina sequência produtiva."
          }
        ],
        "rationale": "Planejamento de desenvolvimento.",
        "uncertainty": "Não exige monopólio estatal.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "controle_01"
        ]
      }
    ]
  },
  {
    "id": "vladimir-lenin",
    "name": "Vladimir Lenin",
    "period": "State and Revolution, capítulo V, transição socialista proposta em agosto–setembro de 1917",
    "rationale": "Perfil documental restrito ao texto e às passagens identificadas; posições desconhecidas permanecem em 50.",
    "caveats": "Codificação da fase transitória coerciva; comunismo final sem Estado é horizonte separado. Foram lidos os comentários do próprio Lenin, distinguindo as citações de Marx/Engels. Teoria de1917 não se transfere à prática soviética.",
    "aliases": [
      "Vladimir Ilyich Ulyanov",
      "V. I. Lenin"
    ],
    "sources": [
      {
        "title": "The State and Revolution, Chapter V — V. I. Lenin",
        "url": "https://www.marxists.org/archive/lenin/works/1917/staterev/ch05.htm",
        "note": "Texto ou citação autoral efetivamente consultado; ver locadores da codificação."
      },
      {
        "title": "Lenin — registro Robarts/University of Toronto em Internet Archive",
        "url": "https://archive.org/details/arbayerunfrayhay00leni",
        "note": "Autoridade bibliográfica Lenin, Vladimir Ilich,1870–1924 efetivamente consultada. Obra catalogada não fornece eixos."
      }
    ],
    "claims": [
      {
        "axis": "rep",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "The State and Revolution, Chapter V — V. I. Lenin",
            "publishedDate": "1917-08–09; tradução reproduzida por MIA",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "§2: Democracy for the vast majority; exclusion from democracy",
            "statement": "Restringe democracia de classes consideradas exploradoras."
          }
        ],
        "rationale": "Inclusão eleitoral é condicionada.",
        "uncertainty": "Propõe expansão majoritária; não mede eleições reais.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "representacao_16",
          "representacao_19"
        ]
      },
      {
        "axis": "pod",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "The State and Revolution, Chapter V — V. I. Lenin",
            "publishedDate": "1917-08–09; tradução reproduzida por MIA",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "§2: We must suppress them; resistance must be crushed by force",
            "statement": "Exige repressão coerciva dos adversários de classe."
          }
        ],
        "rationale": "Coerção constitutiva da transição.",
        "uncertainty": "Horizonte comunista posterior promete fim da coerção.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "poder_07"
        ]
      },
      {
        "axis": "eco",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "The State and Revolution, Chapter V — V. I. Lenin",
            "publishedDate": "1917-08–09; tradução reproduzida por MIA",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "§3: Socialism converts them into common property; §4 expropriation",
            "statement": "Transforma meios de produção em propriedade comum."
          }
        ],
        "rationale": "Socialização estrutural explícita.",
        "uncertainty": "Restrito ao programa de transição.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "economia_05"
        ]
      },
      {
        "axis": "con",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "The State and Revolution, Chapter V — V. I. Lenin",
            "publishedDate": "1917-08–09; tradução reproduzida por MIA",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "§4: strictest control; one huge syndicate; entire work",
            "statement": "Subordina trabalho e consumo ao controle do Estado operário."
          }
        ],
        "rationale": "Coordenação econômica abrangente.",
        "uncertainty": "Não é certificado de execução; recusa Estado de burocratas.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "controle_13"
        ]
      }
    ]
  },
  {
    "id": "leon-trotsky",
    "name": "Leon Trotsky",
    "period": "The Permanent Revolution, conclusões da edição de 1931",
    "rationale": "Perfil documental restrito ao texto e às passagens identificadas; posições desconhecidas permanecem em 50.",
    "caveats": "Conclusões autorais delimitadas; emancipação e democracia revolucionária coexistem com direção partidária de classe. Não infere nacionalização geral de referência vaga a direitos de propriedade.",
    "aliases": [
      "Lev Davidovich Bronstein"
    ],
    "sources": [
      {
        "title": "The Permanent Revolution, Chapter10 — Leon Trotsky",
        "url": "https://www.marxists.org/archive/trotsky/1931/tpr/pr10.htm",
        "note": "Texto ou citação autoral efetivamente consultado; ver locadores da codificação."
      },
      {
        "title": "Trotsky — registro Duke University Libraries em Internet Archive",
        "url": "https://archive.org/details/novyietap01trot",
        "note": "Autoridade bibliográfica Trotsky,Leon,1879–1940 consultada; livro catalogado não gera eixos."
      }
    ],
    "claims": [
      {
        "axis": "rep",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "The Permanent Revolution, Chapter10 — Leon Trotsky",
            "publishedDate": "1931 (edição consultada)",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "Postulados2,4: political leadership of the proletariat vanguard, organized in the Communist Party",
            "statement": "Condiciona democracia à direção de vanguarda comunista."
          }
        ],
        "rationale": "Pluralismo político limitado pela liderança prescrita.",
        "uncertainty": "Democracia declarada de classe; mecanismo eleitoral não especificado.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "representacao_19"
        ]
      }
    ]
  },
  {
    "id": "clr-james",
    "name": "C. L. R. James",
    "period": "Every Cook Can Govern, junho de1956",
    "rationale": "Perfil documental restrito ao texto e às passagens identificadas; posições desconhecidas permanecem em 50.",
    "caveats": "Defesa autoral da democracia direta baseada numa interpretação de Atenas, não validação historiográfica dos seus relatos. Reconhece exclusão de mulheres e escravos no modelo antigo; não transpor essa exclusão para programa pessoal sem outra passagem.",
    "aliases": [
      "Cyril Lionel Robert James",
      "CLR James"
    ],
    "sources": [
      {
        "title": "Every Cook Can Govern — C. L. R. James",
        "url": "https://www.marxists.org/archive/james-clr/works/1956/06/every-cook.htm",
        "note": "Texto ou citação autoral efetivamente consultado; ver locadores da codificação."
      },
      {
        "title": "C. L. R. James — registro Internet Archive",
        "url": "https://archive.org/details/youdontplaywithr0000jame",
        "note": "Autoridade bibliográfica James,Cyril Lionel Robert,1901–1989 consultada; livro com acesso restrito não foi lido nem gera eixos."
      }
    ],
    "claims": [
      {
        "axis": "rep",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Every Cook Can Govern — C. L. R. James",
            "publishedDate": "1956-06 (Correspondence,vol.2,nº12)",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "Modern Comparison; belief in creative power of freedom; conclusão Let all true believers",
            "statement": "Defende governo popular direto e capacidade do cidadão comum."
          }
        ],
        "rationale": "Participação democrática constitutiva.",
        "uncertainty": "Analogia histórica; não desenho constitucional completo.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "representacao_13",
          "representacao_17"
        ]
      },
      {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Every Cook Can Govern — C. L. R. James",
            "publishedDate": "1956-06 (Correspondence,vol.2,nº12)",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "Modern Comparison: could think discuss publish freely; refusal to accept common man",
            "statement": "Contrapõe liberdade de discussão a elites totalitárias."
          }
        ],
        "rationale": "Liberdade cívica como condição do governo.",
        "uncertainty": "Não é plataforma abrangente de direitos.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "poder_04"
        ]
      }
    ]
  },
  {
    "id": "jose-carlos-mariategui",
    "name": "José Carlos Mariátegui",
    "period": "Seven Interpretative Essays, ensaios2–3,1928",
    "rationale": "Perfil documental restrito ao texto e às passagens identificadas; posições desconhecidas permanecem em 50.",
    "caveats": "Argumento agrário e de emancipação indígena; relatos históricos e estatísticas são alegações do autor, não certificações do projeto. Citações de GonzalezPrada/CastroPozo não são tratadas como falas de Mariátegui.",
    "aliases": [
      "El Amauta"
    ],
    "sources": [
      {
        "title": "Seven Interpretative Essays, Essay2 — José Carlos Mariátegui",
        "url": "https://www.marxists.org/archive/mariateg/works/7-interpretive-essays/essay02.htm",
        "note": "Texto ou citação autoral efetivamente consultado; ver locadores da codificação."
      },
      {
        "title": "Mariátegui — autoridade Biblioteca Virtual Miguel de Cervantes",
        "url": "https://www.cervantesvirtual.com/obras/autor/mariategui-jose-carlos-1894-1930-10223",
        "note": "Autoridade bibliográfica consultada confirma1894–1930; não gera eixos."
      },
      {
        "title": "Seven Interpretative Essays, Essay3 — José Carlos Mariátegui",
        "url": "https://www.marxists.org/archive/mariateg/works/7-interpretive-essays/essay03.htm",
        "note": "Texto autoral efetivamente lido nas seções The Community Under the Republic e The Community and the Latifundium; separar citações de outros autores."
      }
    ],
    "claims": [
      {
        "axis": "imi",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Seven Interpretative Essays, Essay2 — José Carlos Mariátegui",
            "publishedDate": "1928; tradução inglesa reproduzida por MIA",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "Essay2: assumption ethnic; expect emancipated through crossing; note1 own prologue",
            "statement": "Rejeita emancipação por branqueamento e ocidentalização cultural."
          }
        ],
        "rationale": "Preservação cultural indígena parcial.",
        "uncertainty": "Não define imigração ou igualdade multicultural completa.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "imigracao_14"
        ]
      },
      {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Seven Interpretative Essays, Essay2 — José Carlos Mariátegui",
            "publishedDate": "1928; tradução inglesa reproduzida por MIA",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "Essay2: inferior races; degeneration cheap invention",
            "statement": "Rejeita hierarquia racial e servidão indígena."
          }
        ],
        "rationale": "Emancipação racial parcial.",
        "uncertainty": "Não cobre outros costumes.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Seven Interpretative Essays, Essay3 — José Carlos Mariátegui",
            "publishedDate": "1928; tradução inglesa reproduzida por MIA",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "The Community and the Latifundium: The defense of the community; communal property",
            "statement": "Defende propriedade agrária comunal contra o latifúndio."
          }
        ],
        "rationale": "Propriedade coletiva agrária delimitada.",
        "uncertainty": "Comunidade não é estatização; não abrange toda propriedade produtiva.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "economia_05"
        ]
      }
    ]
  },
  {
    "id": "harriet-taylor-mill",
    "name": "Harriet Taylor Mill",
    "period": "Enfranchisement of Women, julho de1851, reimpressão de1868",
    "rationale": "Perfil documental restrito ao texto e às passagens identificadas; posições desconhecidas permanecem em 50.",
    "caveats": "O ensaio foi publicado originalmente sem assinatura; atribuição de Harriet pela edição e autoridade bibliográfica, com colaboração editorial de J.S.Mill. Não confundir pessoas nem usar resumo automático que troca o gênero do autor.",
    "aliases": [
      "Harriet Hardy Taylor Mill"
    ],
    "sources": [
      {
        "title": "Enfranchisement of Women — Harriet Taylor Mill",
        "url": "https://www.gutenberg.org/cache/epub/73404/pg73404-images.html",
        "note": "Texto ou citação autoral efetivamente consultado; ver locadores da codificação."
      },
      {
        "title": "Harriet Taylor Mill — catálogo Project Gutenberg73404",
        "url": "https://www.gutenberg.org/ebooks/73404",
        "note": "Autoridade bibliográfica Harriet Hardy Taylor Mill,1807–1858 consultada; resumo automático do catálogo excluído da evidência."
      }
    ],
    "claims": [
      {
        "axis": "rep",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Enfranchisement of Women — Harriet Taylor Mill",
            "publishedDate": "1851-07; reimpressão1868",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "pp.4–5: suffrage universal; half the human species excluded",
            "statement": "Exige sufrágio feminino em igualdade com o masculino."
          }
        ],
        "rationale": "Inclusão eleitoral constitutiva.",
        "uncertainty": "Programa declarado; não auditoria de execução.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "representacao_07"
        ]
      },
      {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Enfranchisement of Women — Harriet Taylor Mill",
            "publishedDate": "1851-07; reimpressão1868",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "pp.8–9: deny right decide proper sphere; complete liberty of choice",
            "statement": "Defende livre escolha de ocupações e trajetórias individuais."
          }
        ],
        "rationale": "Autonomia contra imposição legal de gênero.",
        "uncertainty": "Subtema específico; não plataforma geral de segurança.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "poder_16"
        ]
      },
      {
        "axis": "mor",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Enfranchisement of Women — Harriet Taylor Mill",
            "publishedDate": "1851-07; reimpressão1868",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "pp.5–6: civil political equality; two castes; pp.8–9 all occupations",
            "statement": "Rejeita subordinação civil de gênero e profissões vedadas."
          }
        ],
        "rationale": "Emancipação de gênero central.",
        "uncertainty": "Não resolve todos os costumes contemporâneos.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "moral_18"
        ]
      }
    ]
  }
];
const dormant = [...peopleAmericasExpansion, ...peopleAsiaExpansion];
/** All four complete dormant originals, including old vectors/evidence/sources, remain reviewable. */
export const historicalFigureBatch05OriginalRecords: Record<string, ReferenceEntry> = Object.fromEntries(historicalFigureBatch05Specs.flatMap(spec => {
 const old = dormant.find(entry => entry.id === spec.id);
 return old ? [[spec.id, structuredClone(old)]] : [];
}));
export const historicalFigureBatch05: ReferenceEntry[] = historicalFigureBatch05Specs.map(spec => {
 const old = historicalFigureBatch05OriginalRecords[spec.id];
 if(old && old.name !== spec.name) throw new Error(`Mismatched dormant identity: ${spec.id}`);
 const sources = [...(old?.sources ?? []), ...spec.sources].filter((source,index,all) => all.findIndex(item => item.title === source.title && item.url === source.url) === index);
 const entry: ReferenceEntry = { id:spec.id,name:spec.name,aliases:spec.aliases,kind:'person',category:'historical-figure',period:spec.period,rationale:spec.rationale,caveats:spec.caveats,sources,
 vec:Object.fromEntries(AXES.map(({key}) => [key,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{} };
 for(const input of spec.claims) {
  const coded=codeReferenceAxis(input,entry.sources);
  entry.vec[input.axis]=coded.value;entry.evidence[input.axis]=coded.evidence;
  entry.axisEvidence![input.axis]=coded.axisEvidence;entry.coding![input.axis]=coded.coding;
 }
 return entry;
});
