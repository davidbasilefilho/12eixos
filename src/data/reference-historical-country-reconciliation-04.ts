import type { AxisKey, ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';
const axes: AxisKey[] = ['est','rep','pod','imi','dip','int','eco','con','com','rel','mor','tec'];
const reviewedOn = '2026-10-07';
/** Immutable raw vectors before centering or evidence preparation. */
export const historical04RawBaseVectors = {
  "paris-commune-1871": [
    80,
    66,
    35,
    50,
    43,
    55,
    77,
    72,
    56,
    94,
    77,
    44
  ],
  "us-new-deal-1933": [
    81,
    90,
    43,
    50,
    63,
    39,
    66,
    58,
    64,
    51,
    55,
    60
  ],
  "imperial-japan-1931": [
    8,
    17,
    78,
    69,
    94,
    14,
    57,
    77,
    81,
    46,
    19,
    55
  ],
  "prc-mao-1949": [
    12,
    7,
    92,
    26,
    64,
    42,
    97,
    95,
    79,
    7,
    65,
    42
  ],
  "cuba-revolutionary-1959": [
    8,
    18,
    76,
    28,
    61,
    39,
    91,
    87,
    69,
    10,
    68,
    57
  ],
  "portugal-estado-novo-1933": [
    8,
    12,
    72,
    73,
    57,
    42,
    60,
    69,
    76,
    8,
    13,
    35
  ],
  "chile-pinochet-1973": [
    12,
    8,
    87,
    47,
    85,
    22,
    24,
    19,
    55,
    50,
    22,
    63
  ],
  "roc-taiwan-1949": [
    35,
    22,
    80,
    40,
    72,
    34,
    59,
    79,
    62,
    54,
    49,
    52
  ],
  "france-de-gaulle-1958": [
    17,
    82,
    65,
    49,
    72,
    37,
    55,
    62,
    48,
    86,
    56,
    71
  ]
};
/** Actual live input captured before overlay; full metadata and sources preserved. */
export const historical04LiveBaseline = [
  {
    "id": "paris-commune-1871",
    "kind": "country",
    "category": "historical-country",
    "name": "Comuna de Paris",
    "period": "Conselho comunal, março–maio de 1871",
    "vec": {
      "est": 80,
      "rep": 66,
      "pod": 35,
      "imi": 50,
      "dip": 50,
      "int": 55,
      "eco": 77,
      "con": 72,
      "com": 50,
      "rel": 94,
      "mor": 77,
      "tec": 50
    },
    "rationale": "O conselho eleito, as medidas de autogestão de oficinas abandonadas e a separação entre Igreja e Estado dão sinais documentados de autonomia municipal e reforma social.",
    "caveats": "A Comuna durou cerca de 72 dias, em guerra civil, e seus membros tinham correntes diversas. A bandeira vermelha era um símbolo usado no período, não um desenho nacional padronizado; eixos econômicos e sociais são estimativas de baixa confiança.",
    "sources": [
      {
        "title": "Commune de Paris — Archives de Paris",
        "url": "https://archives.paris.fr/recherches/presentation-des-fonds/administration-communale/commune-de-paris",
        "note": "Arquivo municipal delimita a insurreição de março–maio de 1871 e descreve a escassez de arquivo institucional organizado."
      },
      {
        "title": "Drapeau de la Commune de Paris, 1871 — Paris Musées / Musée Carnavalet",
        "url": "https://www.parismuseescollections.paris.fr/fr/musee-carnavalet/oeuvres/drapeau-de-la-commune-de-paris-1871",
        "note": "Registro de medalha contemporânea que representa figura municipal segurando bandeira vermelha; obra CC0."
      },
      {
        "title": "Civil War in France — Marxists Internet Archive",
        "url": "https://www.marxists.org/archive/marx/works/1871/civil-war-france/",
        "note": "Comentário contemporâneo de 1871 sobre o Conselho; fonte política parcial, não descrição neutra."
      }
    ],
    "evidence": {
      "est": "medium",
      "rep": "medium",
      "pod": "medium",
      "int": "medium",
      "eco": "medium",
      "con": "medium",
      "rel": "high",
      "mor": "medium"
    },
    "axisEvidence": {}
  },
  {
    "id": "us-new-deal-1933",
    "kind": "country",
    "category": "historical-country",
    "name": "Estados Unidos — New Deal",
    "period": "Governo Roosevelt, 1933–1939",
    "vec": {
      "est": 81,
      "rep": 90,
      "pod": 43,
      "imi": 50,
      "dip": 63,
      "int": 50,
      "eco": 66,
      "con": 58,
      "com": 64,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "O governo federal usou programas de obras, regulação financeira, apoio ao trabalho e seguridade social para responder à Grande Depressão, sob instituições eleitorais federais.",
    "caveats": "Este recorte termina antes da entrada dos EUA na Segunda Guerra; não representa todo o período Roosevelt. Políticas do New Deal excluíram ou beneficiaram desigualmente grupos raciais, e medidas de emergência expandiram o poder executivo.",
    "sources": [
      {
        "title": "The New Deal — Library of Congress",
        "url": "https://www.loc.gov/classroom-materials/new-deal/",
        "note": "Panorama documental de obras públicas, regulação, apoio ao trabalho e seguridade entre 1933 e 1939."
      },
      {
        "title": "National Labor Relations Act (1935) — National Archives",
        "url": "https://www.archives.gov/milestone-documents/national-labor-relations-act",
        "note": "Fonte primária e contexto institucional sobre negociação coletiva e direitos sindicais."
      }
    ],
    "evidence": {
      "est": "high",
      "rep": "high",
      "pod": "medium",
      "dip": "medium",
      "eco": "medium",
      "con": "medium",
      "com": "medium"
    },
    "axisEvidence": {}
  },
  {
    "id": "imperial-japan-1931",
    "kind": "country",
    "category": "historical-country",
    "name": "Japão imperial",
    "period": "Militarização e guerra, 1931–1945",
    "vec": {
      "est": 8,
      "rep": 17,
      "pod": 78,
      "imi": 69,
      "dip": 94,
      "int": 14,
      "eco": 57,
      "con": 77,
      "com": 81,
      "rel": 50,
      "mor": 19,
      "tec": 50
    },
    "rationale": "Expansão militar, domínio imperial e mobilização econômica crescente definem este recorte; o poder militar reduziu a competição civil antes da capitulação de 1945.",
    "caveats": "O período contém governos e conjunturas distintas, da Manchúria à rendição. O eixo de propriedade e planejamento mistura economia privada industrial, direção estatal e mobilização de guerra; não descreve a sociedade japonesa como um todo.",
    "sources": [
      {
        "title": "Japan and the road to war — National Diet Library",
        "url": "https://www.ndl.go.jp/modern/e/cha2/index.html",
        "note": "Cronologia e documentos da expansão imperial e crise do parlamentarismo."
      },
      {
        "title": "Potsdam Declaration — Office of the Historian",
        "url": "https://history.state.gov/historicaldocuments/frus1945v06/d255",
        "note": "Documento primário aliado que especifica desmilitarização e desmonte de indústrias de guerra após a rendição."
      }
    ],
    "evidence": {
      "est": "medium",
      "rep": "high",
      "pod": "medium",
      "imi": "medium",
      "dip": "high",
      "int": "high",
      "eco": "medium",
      "con": "medium",
      "com": "medium",
      "mor": "medium"
    },
    "axisEvidence": {}
  },
  {
    "id": "prc-mao-1949",
    "kind": "country",
    "category": "historical-country",
    "name": "China — período Mao",
    "period": "República Popular, 1949–1976",
    "vec": {
      "est": 12,
      "rep": 7,
      "pod": 92,
      "imi": 26,
      "dip": 64,
      "int": 50,
      "eco": 97,
      "con": 95,
      "com": 79,
      "rel": 7,
      "mor": 50,
      "tec": 42
    },
    "rationale": "Partido único, propriedade estatal/coletiva e economia planificada são traços institucionais centrais; o Grande Salto e a Revolução Cultural ampliaram mobilização e coerção política.",
    "caveats": "A periodização abrange políticas diferentes e eventos de escala e impacto distintos. O escore não julga a população chinesa e não trata os textos constitucionais como prova de prática política.",
    "sources": [
      {
        "title": "Rapprochement with China, 1972 — Office of the Historian",
        "url": "https://history.state.gov/milestones/1969-1976/rapprochement-china",
        "note": "Delimita a fundação da República Popular em 1949 e descreve seu governo no período Mao."
      },
      {
        "title": "China and the Cultural Revolution — Office of the Historian",
        "url": "https://history.state.gov/historicaldocuments/frus1964-68v30/d302",
        "note": "Avaliação histórica contemporânea sobre centralização partidária, Grande Salto e Revolução Cultural."
      },
      {
        "title": "Constitution of the People’s Republic of China (1954)",
        "url": "https://www.marxists.org/subject/china/documents/constitution-1954.htm",
        "note": "Fonte primária para a estrutura estatal e econômica declarada no período."
      }
    ],
    "evidence": {
      "est": "medium",
      "rep": "high",
      "pod": "high",
      "imi": "medium",
      "dip": "medium",
      "eco": "high",
      "con": "high",
      "com": "medium",
      "rel": "high",
      "tec": "medium"
    },
    "axisEvidence": {}
  },
  {
    "id": "cuba-revolutionary-1959",
    "kind": "country",
    "category": "historical-country",
    "name": "Cuba — governo revolucionário",
    "period": "Revolução e Constituição socialista, 1959–1976",
    "vec": {
      "est": 8,
      "rep": 18,
      "pod": 76,
      "imi": 50,
      "dip": 61,
      "int": 39,
      "eco": 91,
      "con": 87,
      "com": 69,
      "rel": 10,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Reforma agrária, nacionalizações e direção estatal da economia acompanharam a consolidação de um regime de partido único e programas sociais nacionais.",
    "caveats": "O recorte atravessa a transição de governo provisório para Estado socialista constitucional. A expansão de serviços públicos coexistiu com restrições a oposição e imprensa; não equivale às preferências dos cubanos.",
    "sources": [
      {
        "title": "Foreign Relations of the United States, Cuba, 1958–1960 — Office of the Historian",
        "url": "https://history.state.gov/historicaldocuments/frus1958-60v06/d217",
        "note": "Registro diplomático contemporâneo da queda de Batista e da formação do governo provisório em 1959."
      },
      {
        "title": "Cuba: A Country Study — Library of Congress",
        "url": "https://tile.loc.gov/storage-services/master/frd/frdcstdy/cu/cubacountrystudy00huds/cubacountrystudy00huds.pdf",
        "note": "Estudo histórico sobre reforma agrária, expropriações e consolidação do governo revolucionário."
      },
      {
        "title": "Constitución de la República de Cuba de 1976 — Granma",
        "url": "https://www.granma.cu/file/pdf/gaceta/Constituci%C3%B3n%20de%20la%20Rep%C3%BAblica%20de%20Cuba.pdf",
        "note": "Fonte primária para economia planificada, direitos declarados e papel dirigente do Partido Comunista."
      }
    ],
    "evidence": {
      "est": "high",
      "rep": "high",
      "pod": "medium",
      "dip": "medium",
      "int": "medium",
      "eco": "high",
      "con": "high",
      "com": "medium",
      "rel": "high"
    },
    "axisEvidence": {}
  },
  {
    "id": "portugal-estado-novo-1933",
    "kind": "country",
    "category": "historical-country",
    "name": "Portugal — Estado Novo",
    "period": "Regime de Salazar e sucessão, 1933–1974",
    "vec": {
      "est": 8,
      "rep": 12,
      "pod": 72,
      "imi": 73,
      "dip": 57,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 76,
      "rel": 8,
      "mor": 13,
      "tec": 50
    },
    "rationale": "Constituição corporativa, censura, polícia política e ausência de competição eleitoral plena acompanharam nacionalismo imperial e forte conservadorismo católico.",
    "caveats": "A ditadura atravessou Salazar e Caetano e mudou sua política econômica. O vetor descreve o regime, não a população portuguesa; infraestrutura colonial e corporativismo tornam economia e comércio difíceis de resumir.",
    "sources": [
      {
        "title": "Estado Novo — Assembleia da República",
        "url": "https://www.parlamento.pt/Parlamento/Paginas/EstadoNovo.aspx",
        "note": "Síntese histórica parlamentar sobre a ditadura, corporativismo, censura e queda em 1974."
      },
      {
        "title": "Constituição Política da República Portuguesa, 1933 — Diário da República",
        "url": "https://diariodarepublica.pt/dr/legislacao-consolidada/decreto/1933-69985699",
        "note": "Texto constitucional primário que instituiu a ordem corporativa do período."
      }
    ],
    "evidence": {
      "est": "high",
      "rep": "high",
      "pod": "medium",
      "imi": "medium",
      "dip": "medium",
      "com": "medium",
      "rel": "medium",
      "mor": "high"
    },
    "axisEvidence": {}
  },
  {
    "id": "chile-pinochet-1973",
    "kind": "country",
    "category": "historical-country",
    "name": "Chile — ditadura de Pinochet",
    "period": "Regime militar, 1973–1990",
    "vec": {
      "est": 12,
      "rep": 8,
      "pod": 87,
      "imi": 50,
      "dip": 85,
      "int": 22,
      "eco": 24,
      "con": 19,
      "com": 50,
      "rel": 50,
      "mor": 22,
      "tec": 50
    },
    "rationale": "A junta encerrou a ordem eleitoral, concentrou poder, usou repressão estatal sistemática e implantou privatizações e liberalização econômica.",
    "caveats": "O regime combinou repressão, políticas econômicas e períodos distintos; a constituição de 1980 não torna democrático o processo de sua criação. O vetor não confunde a ditadura com Chile ou chilenos em geral.",
    "sources": [
      {
        "title": "Augusto Pinochet Ugarte — Memoria Chilena, Biblioteca Nacional de Chile",
        "url": "https://www.memoriachilena.gob.cl/602/w3-article-31395.html",
        "note": "Cronologia oficial do golpe, regime, modelo econômico, plebiscitos e transferência de poder em 1990."
      },
      {
        "title": "Violación a los derechos humanos — Memoria Chilena",
        "url": "https://www.memoriachilena.gob.cl/602/w3-article-92415.html",
        "note": "Arquivo histórico documenta detenções, tortura, assassinatos e órgãos repressivos estatais."
      }
    ],
    "evidence": {
      "est": "high",
      "rep": "high",
      "pod": "high",
      "dip": "high",
      "int": "high",
      "eco": "medium",
      "con": "medium",
      "mor": "high"
    },
    "axisEvidence": {}
  },
  {
    "id": "roc-taiwan-1949",
    "kind": "country",
    "category": "historical-country",
    "name": "Taiwan — República da China sob lei marcial",
    "period": "Retirada para Taiwan e lei marcial, 1949–1987",
    "vec": {
      "est": 35,
      "rep": 22,
      "pod": 80,
      "imi": 50,
      "dip": 72,
      "int": 34,
      "eco": 59,
      "con": 79,
      "com": 62,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "O governo do Kuomintang manteve lei marcial e partido dominante enquanto dirigia industrialização, reforma agrária e planejamento de desenvolvimento com forte apoio estatal.",
    "caveats": "O estado de guerra e a exceção constitucional iniciados em 1949 terminaram em 1987; o recorte não descreve a democratização posterior nem a população taiwanesa. Comércio, cultura e federalismo variaram durante quatro décadas.",
    "sources": [
      {
        "title": "Taiwan’s transition to democracy — National Human Rights Museum",
        "url": "https://www.nhrm.gov.tw/w/nhrmEN/History_22070117122319529",
        "note": "Instituição pública documenta lei marcial, repressão e levantamento em 1987."
      },
      {
        "title": "The Constitution of the Republic of China — Office of the President",
        "url": "https://english.president.gov.tw/Page/94",
        "note": "Fonte primária para a carta constitucional e sua aplicação sob disposições temporárias de emergência."
      },
      {
        "title": "Taiwan — Library of Congress Country Studies",
        "url": "https://tile.loc.gov/storage-services/master/frd/frdcstdy/taiwan/taiwanhistori00dobb_0/taiwanhistori00dobb.pdf",
        "note": "Estudo sobre reforma agrária, industrialização e papel econômico estatal."
      }
    ],
    "evidence": {
      "est": "medium",
      "rep": "high",
      "pod": "high",
      "dip": "medium",
      "int": "medium",
      "eco": "medium",
      "con": "medium",
      "com": "medium"
    },
    "axisEvidence": {}
  },
  {
    "id": "france-de-gaulle-1958",
    "kind": "country",
    "category": "historical-country",
    "name": "França — presidência de Charles de Gaulle",
    "period": "Quinta República, 1958–1969",
    "vec": {
      "est": 17,
      "rep": 82,
      "pod": 65,
      "imi": 50,
      "dip": 72,
      "int": 37,
      "eco": 55,
      "con": 62,
      "com": 50,
      "rel": 86,
      "mor": 50,
      "tec": 71
    },
    "rationale": "A Constituição de 1958 reforçou a presidência executiva; o governo combinou planejamento indicativo, empresas públicas, dissuasão nuclear e política externa independente.",
    "caveats": "O país manteve eleições e alternância parlamentar, mas o desenho presidencial foi deliberadamente fortalecido. O intervalo abrange guerra de independência na Argélia e expansão nuclear; imigrantes e colonizados não compartilharam direitos iguais.",
    "sources": [
      {
        "title": "Constitution française du 4 octobre 1958 — Vie-publique",
        "url": "https://www.vie-publique.fr/fiches/19463-que-dit-la-constitution-de-1958",
        "note": "Explica o fortalecimento do Executivo e a estrutura da Quinta República."
      },
      {
        "title": "Référendum de 1962 — Assemblée nationale",
        "url": "https://www.assemblee-nationale.fr/histoire/suffrage-universel-direct-president-republique.asp",
        "note": "Contexto institucional da eleição presidencial por sufrágio universal direto."
      },
      {
        "title": "France — Office of the Historian, U.S. Department of State",
        "url": "https://history.state.gov/milestones/1961-1968/degaulle",
        "note": "Contextualiza a política externa independente e os conflitos do período."
      }
    ],
    "evidence": {
      "est": "high",
      "rep": "medium",
      "pod": "medium",
      "dip": "medium",
      "int": "medium",
      "eco": "medium",
      "con": "medium",
      "rel": "high",
      "tec": "medium"
    },
    "axisEvidence": {}
  }
] as ReferenceEntry[];
type Row = [AxisKey, ReferenceAxisCoding['position'], ReferenceAxisCoding['confidence'], string, string, string, string];
type Review = { source: ReferenceSource; published: string; basis: 'norm' | 'practice' | 'declaration'; scope: string; rows: Row[]; limits: string };
const reviews: Record<string, Review> = {
  "paris-commune-1871": {
    "source": {
      "title": "Déclaration au peuple français, 19 avril 1871 — reprodução em Vive la Commune",
      "url": "https://fr.wikisource.org/wiki/Vive_la_Commune_(Vandervelde)",
      "note": "Somente apêndice documental; comentário político da coletânea não é usado como prova de prática."
    },
    "published": "1871-04-19",
    "basis": "declaration",
    "scope": "Declaração de 19 abril 1871; proposta durante a Comuna, não realização nacional.",
    "rows": [
      [
        "est",
        "strong-first",
        "medium",
        "Apêndice Déclaration au peuple français; autonomia, direitos comunais e administração central",
        "Autonomia comunal inclui orçamento, serviços e polícia; administração central seria delegação de comunas federadas por contrato.",
        "Competências locais e centro delegado sustentam polo federativo forte na proposta.",
        "Proposta não implementada em toda França; não é mera descentralização de serviço."
      ],
      [
        "rep",
        "moderate-first",
        "medium",
        "Mesmo apêndice; eleição, controle e revogação dos funcionários; intervenção permanente",
        "Eleição ou concurso de funcionários, controle e revogação permanente coexistem com intervenção dos cidadãos.",
        "Participação e responsabilização sustentam direção democrática moderada na declaração.",
        "Franquia, exclusões e execução em guerra não estão demonstradas; não assume democracia plena."
      ]
    ],
    "limits": "Declaração delimitada, não desempenho da Comuna. Oficinas, secularização, guerra e coerção exigem outros documentos; não se herdam estimativas antigas."
  },
  "us-new-deal-1933": {
    "source": {
      "title": "National Industrial Recovery Act, 1933 — National Archives, transcript",
      "url": "https://www.archives.gov/milestone-documents/national-industrial-recovery-act",
      "note": "Transcrição primária com referências posteriores, inclusive1939 em§201(d); não certifica edição1933 integral inalterada. Separa coordenação/alocação de estatização."
    },
    "published": "1933-06-16",
    "basis": "norm",
    "scope": "NIRA de 1933, autoridade temporária inicial; não todo governo Roosevelt de 1933–1939.",
    "rows": [
      [
        "con",
        "moderate-first",
        "medium",
        "Title I §§2–3; Title II §§201(d), 202–203",
        "Presidente aprova/prescreve códigos industriais e dirige programa de obras com decisão de financiamento; autoridade é temporária e empresas privadas continuam.",
        "Planejamento com decisão alocativa multissetorial de obras e coordenação industrial sustenta direção moderada.",
        "Regulação isolada não equivale a plano integral; limites temporais e invalidação do Title I em1935 impedem extensão uniforme."
      ]
    ],
    "limits": "Propriedade estatal não decorre da regulação. Constituição política, comércio efetivo, moral e tecnologia não são inferidos desta lei; orçamento aprovado não prova execução."
  },
  "imperial-japan-1931": {
    "source": {
      "title": "Constitution of the Empire of Japan, 1889 — National Diet Library",
      "url": "https://www.ndl.go.jp/constitution/e/etc/c02.html",
      "note": "Tradução primária oficial; carta de1889 é fundamento anterior do recorte1931–1945, não nova unidade Meiji."
    },
    "published": "1889-02-11; entrada em vigor1890",
    "basis": "norm",
    "scope": "Desenho da carta1889 subjacente ao período1931–1945; militarização efetiva não graduada por esta fonte.",
    "rows": [
      [
        "rep",
        "moderate-second",
        "medium",
        "Arts.4–10,33–38,45,55 e62",
        "Imperador nomeia ministros responsáveis a ele, dissolve a câmara eleita e compartilha legislação e tributação com Dieta de duas câmaras.",
        "Responsabilidade executiva monárquica e câmara alta não popular sustentam orientação autocrática moderada.",
        "Consentimento legislativo/fiscal e eleição inferior são contrapontos; carta não demonstra domínio militar efetivo1931–1945."
      ]
    ],
    "limits": "Comando militar constitucional não mede militarismo ou intervenção. Direitos dependentes da lei não certificam liberdade efetiva; religião, propriedade e mobilização de guerra permanecem desconhecidas."
  },
  "prc-mao-1949": {
    "source": {
      "title": "Constitution of the People’s Republic of China, 1954 — translated primary text",
      "url": "https://en.wikisource.org/wiki/Constitution_of_the_People%27s_Republic_of_China_(1954)",
      "note": "Tradução reproduzida em Senate hearings1972; cotejo integral com chinês oficial pendente."
    },
    "published": "1954-09-20",
    "basis": "norm",
    "scope": "Carta fundadora1954 em transição socialista; não todas as fases1949–1976.",
    "rows": [
      [
        "eco",
        "moderate-first",
        "medium",
        "Arts.5–10 e13",
        "Setor estatal é dirigente e prioritário, mas propriedade camponesa, individual e capitalista é protegida durante transformação gradual.",
        "Prioridade estatal em economia ainda mista sustenta direção pública moderada.",
        "Transformação prevista não prova predomínio realizado; propriedade pessoal e capitalista não são omitidas."
      ],
      [
        "con",
        "moderate-first",
        "medium",
        "Arts.10 e15",
        "Estado orienta transformação e crescimento por plano econômico, incluindo controle administrativo do setor capitalista.",
        "Direção nacional com instrumentos de controle sustenta planejamento moderado.",
        "Não mede cumprimento, detalhe alocativo ou regimes posteriores; não deduz monopólio total do plano."
      ]
    ],
    "limits": "Preambulo e frente política não bastam para medir competição eleitoral. Grande Salto, Revolução Cultural, coerção, secularismo e moral não são graduados sem prática documentada própria."
  },
  "cuba-revolutionary-1959": {
    "source": {
      "title": "Constitución de la República de Cuba, texto original1976 — transcripción",
      "url": "https://es.wikisource.org/wiki/Constituci%C3%B3n_de_la_Rep%C3%BAblica_de_Cuba_%281976%29",
      "note": "Original1976, sem imputar redações1992/2002; cotejo oficial integral pendente."
    },
    "published": "1976-02-24",
    "basis": "norm",
    "scope": "Carta socialista fundadora1976, término do recorte1959–1976; não toda trajetória desde a revolução.",
    "rows": [
      [
        "rep",
        "strong-second",
        "medium",
        "Arts.5,66 e69",
        "Partido Comunista é força dirigente superior da sociedade e Estado; órgãos eletivos e revogabilidade operam dentro desse desenho.",
        "Supremacia partidária constitutiva sustenta autocracia forte normativa.",
        "Não imputa fraude; eleição e revogação formais são contrapontos sem provar competição pluralista."
      ],
      [
        "eco",
        "strong-first",
        "medium",
        "Arts.14–15 e20",
        "Propriedade socialista abrange grandes setores produtivos nacionalizados; pequenos agricultores e cooperativas coexistem.",
        "Abrangência central dos meios produtivos sustenta orientação pública forte.",
        "Não confunde propriedade pessoal ou cooperativa com estatal nem quantifica ativos efetivos."
      ],
      [
        "con",
        "strong-first",
        "medium",
        "Art.16",
        "Estado organiza, dirige e controla economia por plano único com participação dos trabalhadores.",
        "Plano nacional único e poder de direção sustentam planejamento forte.",
        "Participação é contraponto de governança; declaração não prova cumprimento do plano."
      ]
    ],
    "limits": "Transcrição fundadora não certifica prática de1959–1976. Liberdades condicionadas e trechos religiosos não integralmente cotejados impedem graduar pod/rel; demais eixos desconhecidos."
  },
  "portugal-estado-novo-1933": {
    "source": {
      "title": "O início dos trabalhos no Parlamento — Assembleia da República, março2022",
      "url": "https://app.parlamento.pt/comunicar/V1/202203/78/artigos/art6.html",
      "note": "História institucional com ligações a atas primárias1935; PDFconstitucional sem camada textual não foi tratado como lido."
    },
    "published": "2022-03; relata1933–1935",
    "basis": "practice",
    "scope": "Fundação1933, eleição1934 e abertura parlamentar1935; não todo Salazar/Caetano até1974.",
    "rows": [
      [
        "rep",
        "strong-second",
        "medium",
        "Seção Assembleia Nacional1935; plebiscito1933, eleição1934 e discurso10janeiro1935",
        "Parlamento ficou fechado até1935; abstenções do plebiscito contaram favoravelmente; eleitos1934 foram propostos pela União Nacional, sob franquia restrita.",
        "Ausência de representação durante fundação e seleção partidária subordinada sustentam orientação autocrática forte.",
        "Retrospectiva institucional não é auditoria de todos os pleitos; Parlamento eleito1934 e mulheres diplomadas elegíveis são contrapontos limitados."
      ]
    ],
    "limits": "Fonte institucional de prática delimitada, não leitura integral da carta1933. Censura, religião, império, comércio e moral necessitam fontes próprias; não herdamos valores anteriores."
  },
  "chile-pinochet-1973": {
    "source": {
      "title": "Constitución1980, Decreto1150 — Biblioteca del Congreso Nacional, texto original",
      "url": "https://www.bcn.cl/leychile/navegar?idNorma=17039",
      "note": "Decreto1150 de24outubro1980 e disposições transitórias; não consolidação moderna após reformas."
    },
    "published": "1980-10-24; vigência inicial1981",
    "basis": "norm",
    "scope": "Primeiro período transitório1981–1989 da carta1980; não toda ditadura1973–1990 nem transição posterior.",
    "rows": [
      [
        "rep",
        "strong-second",
        "medium",
        "Disposições transitórias13–14,18,21 e27–29",
        "Pinochet mantém Presidência; Junta exerce legislação e Congresso fica suspenso; candidato único proposto para plebiscito e transição futura condicionada.",
        "Concentração militar-executiva e suspensão representativa sustentam autocracia forte normativa.",
        "Plebiscito e futura eleição após rejeição são contrapontos; não inferimos resultado1988 só da norma."
      ],
      [
        "pod",
        "strong-first",
        "medium",
        "Disposição transitória24(a–d) e parágrafo final",
        "Exceção renovável permite detenção, restrição de reuniões/publicações, expulsão e residência compulsória, sem recurso judicial ordinário contra medidas.",
        "Coerção ampla e impedimento de controle judicial sustentam orientação forte à segurança/restrição.",
        "Poderes excepcionais condicionados não quantificam uso real; garantias permanentes da carta são contrapontos."
      ]
    ],
    "limits": "Prática repressiva e transformação econômica requerem fontes próprias: não são deduzidas desta norma. Não estende dispositivos transitórios a todo período ou ao Chile democrático."
  },
  "roc-taiwan-1949": {
    "source": {
      "title": "Temporary Provisions Effective During the Period of Communist Rebellion, edition1972",
      "url": "https://en.wikisource.org/wiki/Temporary_Provisions_Effective_During_the_Period_of_Communist_Rebellion_(1972)",
      "note": "Tradução primária da edição1972; cotejo com original chinês oficial pendente."
    },
    "published": "1972-03-17; cronologia de emendas no cabeçalho",
    "basis": "norm",
    "scope": "Disposições temporárias na edição1972 dentro do recorte1949–1987; abolição1991 não é fim da lei marcial1987.",
    "rows": [
      [
        "rep",
        "moderate-second",
        "medium",
        "§§2–3,6(1–3),8 e10–11",
        "Mandatos centrais originais continuam até recuperação territorial; reeleição presidencial é ilimitada e eleições adicionais em áreas livres coexistem.",
        "Renovação representativa suspensa e continuidade excepcional sustentam direção autocrática moderada.",
        "Legislativo pode modificar emergência e assentos adicionais se renovam; texto não prova partido único ou ausência absoluta de competição."
      ]
    ],
    "limits": "Fim da lei marcial1987 e abolição destas normas1991 são eventos distintos. Poder de emergência não basta para medir coerção efetiva; desenvolvimento, religião e comércio não graduados."
  },
  "france-de-gaulle-1958": {
    "source": {
      "title": "Constitution française1958, version initiale — Imprimerie nationale, transcription",
      "url": "https://fr.wikisource.org/wiki/Constitution_fran%C3%A7aise_de_1958_(version_initiale)",
      "note": "Edição original1958 vinculada a fac-símile; eleição presidencial indireta é anterior à reforma1962."
    },
    "published": "1958-10-04",
    "basis": "norm",
    "scope": "Arranjo inicial1958 anterior à reforma1962; não prática uniforme1958–1969.",
    "rows": [
      [
        "rep",
        "moderate-first",
        "medium",
        "Arts.3–4,6,12,16,20,24,49–50",
        "Sufrágio amplo, partidos livres e responsabilidade parlamentar coexistem com Presidência forte, dissolução, emergência e legislação vinculada à confiança.",
        "Competição e controle parlamentar sustentam democracia moderada com contrapoder executivo explícito.",
        "Não mede prática na guerra argelina; Presidência ainda indireta e artigos16/49.3 limitam leitura irrestrita."
      ],
      [
        "rel",
        "moderate-first",
        "medium",
        "Art.2 da versão original1958",
        "República é laica e assegura igualdade sem distinção religiosa e respeito a todas as crenças.",
        "Laicidade institucional explícita sustenta direção secular moderada.",
        "Não certifica uniformidade regional, financiamento religioso ou irreligiosidade pessoal."
      ]
    ],
    "limits": "Carta fundadora não mede planejamento indicativo, nuclearização, imigração ou colonialismo. Relações comunitárias externas não são confundidas com federação doméstica; est permanece desconhecido."
  }
};
export function reconcileHistoricalCountry04(entry: ReferenceEntry): ReferenceEntry {
  const review = reviews[entry.id];
  if (!review) return entry;
  const sources = [...entry.sources];
  if (!sources.some(s => s.title === review.source.title && s.url === review.source.url)) sources.push(review.source);
  const result: ReferenceEntry & { documentaryReview: unknown; unknownAxisReasons: Partial<Record<AxisKey,string>> } = {
    ...entry, period: entry.period?.includes('; recorte codificado: ') ? entry.period : `${entry.period}; recorte codificado: ${review.scope}`, sources, vec: Object.fromEntries(axes.map(axis=>[axis,50])) as Record<AxisKey,number>, evidence:{},axisEvidence:{},coding:{},
    rationale:'Inferências documentais delimitadas recodificadas pelo protocolo ordinal; o vetor anterior e suas fontes foram preservados no módulo de reconciliação.',
    caveats: review.limits,
    documentaryReview:{ status:'author-reviewed-bounded-claims',reviewedOn,independentReview:'pending',scope:review.scope },
    unknownAxisReasons:{},
  };
  for (const [axis,position,confidence,locator,statement,rationale,uncertainty] of review.rows) {
    const input: ReferenceAxisCoding = {axis,position,confidence,rationale,uncertainty,reviewedOn,
      claims:[{sourceTitle:review.source.title,locator,statement,basis:review.basis,publishedDate:review.published,accessedDate:reviewedOn}]};
    const coded=codeReferenceAxis(input,sources);
    result.vec[axis]=coded.value;result.evidence[axis]=coded.evidence;result.axisEvidence![axis]=coded.axisEvidence;result.coding![axis]=coded.coding;
  }
  for(const axis of axes)if(!result.coding![axis])result.unknownAxisReasons[axis]='Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. '+review.limits;
  return result;
}
export const historical04CodingAudit = Object.entries(reviews).map(([id,review])=>({id,reviewedOn,scope:review.scope,rawBaseVector:historical04RawBaseVectors[id as keyof typeof historical04RawBaseVectors],integratedLiveBaseline:historical04LiveBaseline.find(e=>e.id===id),supportedAxes:review.rows.map(row=>row[0]),independentSourceValidation:'pending'}));

/** SHA-256 of compact JSON serialization, Unicode preserved. */
export const historical04LiveBaselineSha256 = '27fae51ddec00c561eb23c380d31cf1f3cdd6405e96b254b4c70d913b014f6cb';
export const historical04RawBaseVectorsSha256 = 'ab10f55d4ac3ab2f4596bc4f55c5622f3b735ef632946a2b53a87493a7296a5b';
