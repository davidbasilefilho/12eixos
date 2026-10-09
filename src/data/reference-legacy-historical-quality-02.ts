import type { ReferenceEntry, ReferenceSource } from './references';
import { AXES } from '../lib/scoring';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';

/** Complete pre-proposal raw snapshots, including unsupported legacy evidence. */
export const legacyHistoricalQuality02OriginalRecords: Record<string, ReferenceEntry> = {
  "franklin-roosevelt": {
    "id": "franklin-roosevelt",
    "kind": "person",
    "category": "historical-figure",
    "name": "Franklin D. Roosevelt",
    "period": "New Deal e presidência dos EUA, 1933–1945",
    "vec": {
      "est": 50,
      "rep": 75,
      "pod": 67,
      "imi": 50,
      "dip": 69,
      "int": 39,
      "eco": 74,
      "con": 76,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "O New Deal expandiu regulação, emprego público e seguridade; a presidência também governou durante a Segunda Guerra Mundial.",
    "caveats": "A entrada separa política social doméstica da mobilização de guerra; não usa o período para definir posições sobre todos os eixos.",
    "sources": [
      {
        "title": "Second Bill of Rights, 1944",
        "url": "https://www.fdrlibrary.org/address1944",
        "note": "Discurso de Roosevelt ao Congresso propondo direitos econômicos e sociais."
      }
    ],
    "evidence": {
      "rep": "medium",
      "pod": "medium",
      "dip": "medium",
      "int": "medium",
      "eco": "medium",
      "con": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Second Bill of Rights, 1944"
        ],
        "rationale": "Discurso de Roosevelt ao Congresso propondo direitos econômicos e sociais. O New Deal expandiu regulação, emprego público e seguridade; a presidência também governou durante a Segunda Guerra Mundial. A direção editorial deste eixo é Democracia, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "pod": {
        "sourceTitles": [
          "Second Bill of Rights, 1944"
        ],
        "rationale": "Discurso de Roosevelt ao Congresso propondo direitos econômicos e sociais. O New Deal expandiu regulação, emprego público e seguridade; a presidência também governou durante a Segunda Guerra Mundial. A direção editorial deste eixo é Segurança, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "dip": {
        "sourceTitles": [
          "Second Bill of Rights, 1944"
        ],
        "rationale": "Discurso de Roosevelt ao Congresso propondo direitos econômicos e sociais. O New Deal expandiu regulação, emprego público e seguridade; a presidência também governou durante a Segunda Guerra Mundial. A direção editorial deste eixo é Militarista, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "int": {
        "sourceTitles": [
          "Second Bill of Rights, 1944"
        ],
        "rationale": "Discurso de Roosevelt ao Congresso propondo direitos econômicos e sociais. O New Deal expandiu regulação, emprego público e seguridade; a presidência também governou durante a Segunda Guerra Mundial. A direção editorial deste eixo é Nacionalista, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "eco": {
        "sourceTitles": [
          "Second Bill of Rights, 1944"
        ],
        "rationale": "Discurso de Roosevelt ao Congresso propondo direitos econômicos e sociais. O New Deal expandiu regulação, emprego público e seguridade; a presidência também governou durante a Segunda Guerra Mundial. A direção editorial deste eixo é Público, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "con": {
        "sourceTitles": [
          "Second Bill of Rights, 1944"
        ],
        "rationale": "Discurso de Roosevelt ao Congresso propondo direitos econômicos e sociais. O New Deal expandiu regulação, emprego público e seguridade; a presidência também governou durante a Segunda Guerra Mundial. A direção editorial deste eixo é Planejamento, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      }
    }
  },
  "martin-luther-king-jr": {
    "id": "martin-luther-king-jr",
    "kind": "person",
    "category": "historical-figure",
    "name": "Martin Luther King Jr.",
    "period": "Discursos por direitos civis e justiça social, 1955–1968",
    "vec": {
      "est": 50,
      "rep": 92,
      "pod": 50,
      "imi": 31,
      "dip": 23,
      "int": 68,
      "eco": 66,
      "con": 60,
      "com": 50,
      "rel": 50,
      "mor": 96,
      "tec": 50
    },
    "rationale": "Discursos e campanhas defendem direitos civis, integração racial, não violência e justiça econômica.",
    "caveats": "A análise abrange seu ativismo público e escritos; não equivale a uma opinião medida para as doze perguntas atuais.",
    "sources": [
      {
        "title": "Beyond Vietnam, 1967",
        "url": "https://kinginstitute.stanford.edu/king-papers/documents/beyond-vietnam",
        "note": "Discurso primário de King contra a guerra e em defesa da justiça social."
      }
    ],
    "evidence": {
      "rep": "high",
      "imi": "medium",
      "dip": "high",
      "int": "medium",
      "eco": "medium",
      "con": "medium",
      "mor": "high"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Beyond Vietnam, 1967"
        ],
        "rationale": "Discurso primário de King contra a guerra e em defesa da justiça social. Discursos e campanhas defendem direitos civis, integração racial, não violência e justiça econômica. A direção editorial deste eixo é Democracia, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "imi": {
        "sourceTitles": [
          "Beyond Vietnam, 1967"
        ],
        "rationale": "Discurso primário de King contra a guerra e em defesa da justiça social. Discursos e campanhas defendem direitos civis, integração racial, não violência e justiça econômica. A direção editorial deste eixo é Multicultura, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "dip": {
        "sourceTitles": [
          "Beyond Vietnam, 1967"
        ],
        "rationale": "Discurso primário de King contra a guerra e em defesa da justiça social. Discursos e campanhas defendem direitos civis, integração racial, não violência e justiça econômica. A direção editorial deste eixo é Pacifista, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "int": {
        "sourceTitles": [
          "Beyond Vietnam, 1967"
        ],
        "rationale": "Discurso primário de King contra a guerra e em defesa da justiça social. Discursos e campanhas defendem direitos civis, integração racial, não violência e justiça econômica. A direção editorial deste eixo é Não intervencionista, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "eco": {
        "sourceTitles": [
          "Beyond Vietnam, 1967"
        ],
        "rationale": "Discurso primário de King contra a guerra e em defesa da justiça social. Discursos e campanhas defendem direitos civis, integração racial, não violência e justiça econômica. A direção editorial deste eixo é Público, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "con": {
        "sourceTitles": [
          "Beyond Vietnam, 1967"
        ],
        "rationale": "Discurso primário de King contra a guerra e em defesa da justiça social. Discursos e campanhas defendem direitos civis, integração racial, não violência e justiça econômica. A direção editorial deste eixo é Planejamento, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "mor": {
        "sourceTitles": [
          "Beyond Vietnam, 1967"
        ],
        "rationale": "Discurso primário de King contra a guerra e em defesa da justiça social. Discursos e campanhas defendem direitos civis, integração racial, não violência e justiça econômica. A direção editorial deste eixo é Progressista, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      }
    },
    "aliases": [
      "Martin Luther King"
    ]
  },
  "thomas-sankara": {
    "id": "thomas-sankara",
    "kind": "person",
    "category": "historical-figure",
    "name": "Thomas Sankara",
    "period": "Discursos e governo de Burkina Faso, 1983–1987",
    "vec": {
      "est": 72,
      "rep": 55,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 71,
      "eco": 82,
      "con": 78,
      "com": 50,
      "rel": 50,
      "mor": 78,
      "tec": 50
    },
    "rationale": "Discursos de Sankara combinam emancipação anticolonial, direitos das mulheres, autossuficiência e políticas públicas de saúde e educação.",
    "caveats": "O governo revolucionário restringiu pluralismo político; reformas progressistas não significam democracia competitiva consolidada.",
    "sources": [
      {
        "title": "Discurso à Organização da Unidade Africana, 1987",
        "url": "https://www.marxists.org/archive/sankara/1987/07/29.htm",
        "note": "Discurso primário contra dívida externa e dependência econômica."
      }
    ],
    "evidence": {
      "est": "medium",
      "rep": "medium",
      "int": "high",
      "eco": "medium",
      "con": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Discurso à Organização da Unidade Africana, 1987"
        ],
        "rationale": "Discurso primário contra dívida externa e dependência econômica. Discursos de Sankara combinam emancipação anticolonial, direitos das mulheres, autossuficiência e políticas públicas de saúde e educação. A direção editorial deste eixo é Federal, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "rep": {
        "sourceTitles": [
          "Discurso à Organização da Unidade Africana, 1987"
        ],
        "rationale": "Discurso primário contra dívida externa e dependência econômica. Discursos de Sankara combinam emancipação anticolonial, direitos das mulheres, autossuficiência e políticas públicas de saúde e educação. A direção editorial deste eixo é Democracia, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "int": {
        "sourceTitles": [
          "Discurso à Organização da Unidade Africana, 1987"
        ],
        "rationale": "Discurso primário contra dívida externa e dependência econômica. Discursos de Sankara combinam emancipação anticolonial, direitos das mulheres, autossuficiência e políticas públicas de saúde e educação. A direção editorial deste eixo é Não intervencionista, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "eco": {
        "sourceTitles": [
          "Discurso à Organização da Unidade Africana, 1987"
        ],
        "rationale": "Discurso primário contra dívida externa e dependência econômica. Discursos de Sankara combinam emancipação anticolonial, direitos das mulheres, autossuficiência e políticas públicas de saúde e educação. A direção editorial deste eixo é Público, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "con": {
        "sourceTitles": [
          "Discurso à Organização da Unidade Africana, 1987"
        ],
        "rationale": "Discurso primário contra dívida externa e dependência econômica. Discursos de Sankara combinam emancipação anticolonial, direitos das mulheres, autossuficiência e políticas públicas de saúde e educação. A direção editorial deste eixo é Planejamento, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "mor": {
        "sourceTitles": [
          "Discurso à Organização da Unidade Africana, 1987"
        ],
        "rationale": "Discurso primário contra dívida externa e dependência econômica. Discursos de Sankara combinam emancipação anticolonial, direitos das mulheres, autossuficiência e políticas públicas de saúde e educação. A direção editorial deste eixo é Progressista, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      }
    }
  }
};

interface QualityProposal { name: string; period: string; sources: ReferenceSource[]; coding: ReferenceAxisCoding[] }
export const legacyHistoricalQuality02Proposals: Record<string, QualityProposal> = {
  "franklin-roosevelt": {
    "name": "Franklin D. Roosevelt",
    "period": "Declarações presidenciais sobre crise, comércio e guerra, 1933–1944",
    "sources": [
      {
        "title": "Roosevelt — First Inaugural Address, 1933",
        "url": "https://avalon.law.yale.edu/20th_century/froos1.asp",
        "note": "Texto do discurso presidencial; corpo18–52 efetivamente lido."
      },
      {
        "title": "Roosevelt — Four Freedoms, 1941",
        "url": "https://voicesofdemocracy.umd.edu/fdr-the-four-freedoms-speech-text/",
        "note": "Reprodução universitária do discurso adotado e pronunciado; parágrafos1–91 lidos."
      },
      {
        "title": "Roosevelt — State of the Union radio address, 1944",
        "url": "https://millercenter.org/the-presidency/presidential-speeches/january-11-1944-fireside-chat-28-state-union",
        "note": "Reprodução institucional do pronunciamento; corpo48–121 lido, sem reivindicar leitura da abertura."
      },
      {
        "title": "Roosevelt — Message on reciprocal trade, 1934",
        "url": "https://www.usitc.gov/sites/default/files/publications/332/otap_1_part_2_optimized.pdf",
        "note": "Tariff Commission, Operation of the Trade Agreements Program, 1948: apêndiceA reproduz mensagem presidencial de2/3/1934; pp.63–66/PDF71–73, corpo2652–2735 lido."
      }
    ],
    "coding": [
      {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Roosevelt — First Inaugural Address, 1933",
            "publishedDate": "1933-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo42–50: Constituição, Congresso, pedido de poderes e mandato popular",
            "statement": "Mantém a Constituição e solicita poderes emergenciais ao Congresso, invocando mandato democrático."
          },
          {
            "sourceTitle": "Roosevelt — State of the Union radio address, 1944",
            "publishedDate": "1944-01-11",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo96–100: Congresso e voto dos militares",
            "statement": "Defende atuação do Congresso e acesso dos militares ao voto."
          }
        ],
        "rationale": "Autoridade constitucional, legislativa e eleitoral fundamenta o programa nacional.",
        "uncertainty": "Pedido de poderes executivos excepcionais em1933 limita a inferência; não valida toda a prática presidencial.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "pod",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Roosevelt — First Inaugural Address, 1933",
            "publishedDate": "1933-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo39–46: disciplina, vidas e propriedade; poderes de emergência",
            "statement": "Propõe disciplina nacional e sacrifício de vidas e propriedade na emergência."
          },
          {
            "sourceTitle": "Roosevelt — State of the Union radio address, 1944",
            "publishedDate": "1944-01-11",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo75–87: capital, mão de obra e serviço nacional; contraponto102",
            "statement": "Endossa mobilização compulsória geral de capital e trabalho durante a guerra."
          }
        ],
        "rationale": "O programa coercitivo alcança população, trabalho e propriedade, excedendo uma medida setorial.",
        "uncertainty": "Preserva também liberdade de imprensa, religião, júri e limites a buscas; direção restrita ao programa de emergência, não supressão total de direitos.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "dip",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Roosevelt — Four Freedoms, 1941",
            "publishedDate": "1941-01-06",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "§§33–35,48–55; contraponto§86",
            "statement": "Defende uso de recursos e armas contra agressão, com redução futura de armamentos."
          },
          {
            "sourceTitle": "Roosevelt — State of the Union radio address, 1944",
            "publishedDate": "1944-01-11",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo50–56: derrota militar e controle de perturbadores da paz",
            "statement": "Defende vitória militar e controle militar dos agentes que ameaçam a paz."
          }
        ],
        "rationale": "Admite força armada como instrumento necessário da ordem internacional.",
        "uncertainty": "Guerra contra agressão, não elogio indiscriminado da guerra; desarmamento e paz permanecem objetivos declarados.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "int",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Roosevelt — Four Freedoms, 1941",
            "publishedDate": "1941-01-06",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "§§5,31–35,48–55: apoio armado externo geral",
            "statement": "Rejeita isolamento e promete apoio material aos povos que resistem à agressão."
          }
        ],
        "rationale": "O programa assume responsabilidade externa e apoio armado para além da defesa do próprio território.",
        "uncertainty": "Apoio a aliados contra agressão; não justifica qualquer invasão ou toda intervenção econômica.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "con",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Roosevelt — First Inaugural Address, 1933",
            "publishedDate": "1933-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo33–34: planejamento de transportes, comunicações, serviços públicos; bancos, crédito e investimentos",
            "statement": "Propõe planejamento nacional de transportes, comunicações e serviços públicos e supervisão de bancos, crédito e investimentos."
          },
          {
            "sourceTitle": "Roosevelt — State of the Union radio address, 1944",
            "publishedDate": "1944-01-11",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo75–87: preços, capital, mão de obra e mobilização",
            "statement": "Endossa controle geral de preços e mobilização nacional dos recursos produtivos."
          }
        ],
        "rationale": "Planejamento e controle da alocação aparecem como programas econômicos gerais, não apenas assistência social.",
        "uncertainty": "Recorte de crise e guerra; não afirma direção permanente nem propriedade estatal de toda produção.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "com",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Roosevelt — Message on reciprocal trade, 1934",
            "publishedDate": "1934-03-02",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "ApêndiceA pp.63–66/PDF71–73, corpo2678–2735",
            "statement": "Propõe concessões recíprocas de tarifas e importações para ampliar o comércio geral."
          }
        ],
        "rationale": "A abertura negociada constitui orientação geral do comércio exterior.",
        "uncertainty": "Mantém gradualismo, proteção contra danos a produtores e salvaguardas de defesa; não propõe abolir todas as tarifas.",
        "reviewedOn": "2026-10-08"
      }
    ]
  },
  "martin-luther-king-jr": {
    "name": "Martin Luther King Jr.",
    "period": "Discursos sobre democracia, pobreza e guerra, abril1967–março1968",
    "sources": [
      {
        "title": "King — Beyond Vietnam, 1967, University of Hawaii reproduction",
        "url": "https://www.hawaii.edu/mauispeech/html/mlkbeyondvietnam.html",
        "note": "Texto autoral reproduzido por universidade; corpo12–116 efetivamente lido. Erro do ano do Nobel no corpo37 corrigido pela própria nota116; não fonte biográfica."
      },
      {
        "title": "King — The Other America, 1967, CRMVet reproduction",
        "url": "https://www.crmvet.org/docs/otheram.htm",
        "note": "Arquivo de veteranos do movimento, discurso de14/4/1967; corpo7–100 efetivamente lido; variantes1968 não intercambiáveis."
      },
      {
        "title": "King — The Other America, Grosse Pointe, 1968",
        "url": "https://gphistorical.org/mlk/mlkspeech/mlk-gp-speech.pdf",
        "note": "Transcrição histórica de14/3/1968; corpo130–303/PDFpp.3–7 lido; não reivindica abertura1–129."
      }
    ],
    "coding": [
      {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "King — Beyond Vietnam, 1967, University of Hawaii reproduction",
            "publishedDate": "1967-04-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo57–59,100–102: eleições e democracia",
            "statement": "Critica supressão da oposição e das eleições e defende democracia."
          },
          {
            "sourceTitle": "King — The Other America, 1967, CRMVet reproduction",
            "publishedDate": "1967-04-14",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo18–24,89: voto e partilha de poder",
            "statement": "Defende voto e participação efetiva de cidadãos negros no poder político."
          }
        ],
        "rationale": "Democracia e acesso plural ao poder são normas políticas explícitas.",
        "uncertainty": "Discursos programáticos; não medem instituições ou práticas de governo de King.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "King — Beyond Vietnam, 1967, University of Hawaii reproduction",
            "publishedDate": "1967-04-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo73–83,97–100: cessar-fogo e crítica geral à guerra",
            "statement": "Propõe cessar-fogo e rejeita a guerra como solução para divergências."
          },
          {
            "sourceTitle": "King — The Other America, Grosse Pointe, 1968",
            "publishedDate": "1968-03-14",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo215–218/PDFp.5: pacifismo e exceção contra Hitler",
            "statement": "Declara pacifismo, admitindo suspensão temporária para enfrentar Hitler."
          }
        ],
        "rationale": "A norma geral prefere soluções pacíficas com uma exceção defensiva explícita.",
        "uncertainty": "Não pacifismo absoluto: a exceção contra Hitler impede o extremo do eixo.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "int",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "King — Beyond Vietnam, 1967, University of Hawaii reproduction",
            "publishedDate": "1967-04-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo43–61,77–84,89–101: autodeterminação e intervenção",
            "statement": "Defende autodeterminação e retirada de forças estrangeiras, criticando intervenções contrarrevolucionárias."
          }
        ],
        "rationale": "A crítica se estende a diversos países e à tutela estrangeira, sustentando orientação geral não intervencionista.",
        "uncertainty": "Mantém ajuda humanitária, reparação, ONU e solidariedade a revoluções; não isolamento absoluto.",
        "reviewedOn": "2026-10-08"
      }
    ]
  },
  "thomas-sankara": {
    "name": "Thomas Sankara",
    "period": "Programa revolucionário adotado, outubro1983; emancipação das mulheres, março1987",
    "sources": [
      {
        "title": "Sankara — Political Orientation Speech, 1983, adopted programme",
        "url": "https://www.thomassankara.net/the-political-orientation-speech-thomas-sankara/?lang=en",
        "note": "Reprodução memorial da tradução do programa adotado e pronunciado por Sankara, de redação coletiva; corpo52–93 e110–283 lido. Introdução e comentários editoriais não codificados; tradução inglesa apresenta erros."
      },
      {
        "title": "Sankara — The revolution cannot triumph without the emancipation of women, 1987",
        "url": "https://www.thomassankara.net/la-liberation-de-la-femme-une/?lang=en",
        "note": "Reprodução memorial da tradução Pathfinder1990 do discurso de8/3/1987; corpo45–113 e130–263 lido. Não atribui prefácio editorial ao orador."
      }
    ],
    "coding": [
      {
        "axis": "est",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Sankara — Political Orientation Speech, 1983, adopted programme",
            "publishedDate": "1983-10-02",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo166–182: NRC, CDR, centralismo e autonomia",
            "statement": "Subordina órgãos locais ao NRC supremo, com autonomia administrativa limitada."
          }
        ],
        "rationale": "A direção nacional hierárquica não concede soberania federativa aos órgãos locais.",
        "uncertainty": "Descentralização administrativa e eleições locais explícitas; tradução requer revisão independente.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "rep",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Sankara — Political Orientation Speech, 1983, adopted programme",
            "publishedDate": "1983-10-02",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo124–135,163,168–182: exclusão e comando",
            "statement": "Exclui classes inimigas e concentra comando no NRC, preservando eleições locais."
          }
        ],
        "rationale": "A participação se subordina ao comando revolucionário e à exclusão política.",
        "uncertainty": "Autonomia e participação popular contraequilibram a direção; não deduz partido único.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "pod",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Sankara — Political Orientation Speech, 1983, adopted programme",
            "publishedDate": "1983-10-02",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo126,163,245–247: coerção e cultura",
            "statement": "Admite coerção armada contra inimigos e proíbe cultura antirrevolucionária."
          }
        ],
        "rationale": "Limites políticos gerais à expressão e coerção justificam a direção securitária.",
        "uncertainty": "Condena também burocratas autoritários e vandalismo; não coerção sem limites.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Sankara — Political Orientation Speech, 1983, adopted programme",
            "publishedDate": "1983-10-02",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo268–277: princípios internacionais",
            "statement": "Declara não agressão e relações pacíficas gerais."
          }
        ],
        "rationale": "Não agressão constitui norma diplomática ampla.",
        "uncertainty": "Preserva defesa armada e operacional203–215, especialmente206/215, ao lado da não agressão270 e solidariedade a movimentos de libertação273–277.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "int",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Sankara — Political Orientation Speech, 1983, adopted programme",
            "publishedDate": "1983-10-02",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo268–277: soberania e não intervenção",
            "statement": "Declara soberania e não intervenção nos assuntos internos."
          }
        ],
        "rationale": "Os princípios se aplicam às relações com todos os países.",
        "uncertainty": "Solidariedade externa permanece; não isolamento absoluto.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "con",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Sankara — Political Orientation Speech, 1983, adopted programme",
            "publishedDate": "1983-10-02",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo227–250: economia nacional, produção e distribuição",
            "statement": "Propõe economia nacional planejada e controle da produção e distribuição."
          }
        ],
        "rationale": "Planejamento nacional excede uma intervenção setorial.",
        "uncertainty": "Controle não prova propriedade pública; eco permanece desconhecido.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Sankara — The revolution cannot triumph without the emancipation of women, 1987",
            "publishedDate": "1987-03-08",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo198–202,219–245; contraponto258–263",
            "statement": "Defende casamento escolhido, igualdade doméstica e superação do dote e de costumes mutiladores."
          }
        ],
        "rationale": "Transforma diversos costumes familiares e normas de gênero, além de cargos públicos.",
        "uncertainty": "Mantém papéis maternais e rejeita prostituição; sem inferência sobre aborto ou LGBT.",
        "reviewedOn": "2026-10-08"
      }
    ]
  }
};

export const legacyHistoricalQuality02Rationales:Record<string,string>={
 'franklin-roosevelt':'Defende poderes emergenciais aprovados pelo Congresso, mobilização de capital e trabalho, apoio armado externo e abertura comercial recíproca.',
 'martin-luther-king-jr':'Defende participação democrática, solução pacífica de conflitos e autodeterminação dos povos, criticando a tutela militar externa.',
 'thomas-sankara':'Propõe comitês sob direção nacional, coerção revolucionária, coordenação econômica, soberania externa e reformas de gênero.',
};
/** Accepted by Root after independent source review; frozen for local integration. */
export function reconcileLegacyHistoricalQuality02(entry: ReferenceEntry): ReferenceEntry {
 const proposal = legacyHistoricalQuality02Proposals[entry.id];
 if (!proposal) return entry;
 if (entry.category !== 'historical-figure' || entry.name !== proposal.name) throw new Error('Historical quality02 identity mismatch');
 // Preserve any existing located coding, including later useful recodes and repeated application.
 if (Object.keys(entry.coding ?? {}).length > 0) {
  // Only repair the exact earlier maintenance text; preserve later substantive descriptions.
  if(entry.rationale==='Perfil recodificado apenas pelas declarações primárias localizadas; descrições legadas permanecem no arquivo histórico.' && legacyHistoricalQuality02Rationales[entry.id])return {...entry,rationale:legacyHistoricalQuality02Rationales[entry.id]};
  return entry;
 }
 const sources = [...structuredClone(entry.sources)];
 for (const source of proposal.sources) if (!sources.some(old => old.title === source.title && old.url === source.url)) sources.push(structuredClone(source));
 const next: ReferenceEntry = {...structuredClone(entry), period: proposal.period,
  rationale: legacyHistoricalQuality02Rationales[entry.id],
  caveats: 'Recodificação editorial aceita após revisão independente das passagens, com períodos e contrapontos explicitados por eixo. Declarações não medem práticas ou toda a carreira. Eixos desconhecidos não entram no matching.',
  sources, vec: Object.fromEntries(AXES.map(({key}) => [key, 50])) as ReferenceEntry['vec'], evidence: {}, axisEvidence: {}, coding: {}};
 for (const input of proposal.coding) {
  const result = codeReferenceAxis(input, sources);
  next.vec[input.axis] = result.value; next.evidence[input.axis] = result.evidence;
  next.axisEvidence![input.axis] = result.axisEvidence; next.coding![input.axis] = result.coding;
 }
 return next;
}
