import type {ReferenceEntry} from './references';

// Complete literal prior and accepted post records; no score or coding changes.
export const historicalCountryProvenance07Before = {
  "dominican-san-cristobal-1844": {
    "id": "dominican-san-cristobal-1844",
    "name": "República Dominicana — ordem de San Cristóbal",
    "aliases": [
      "República Dominicana sob a primeira Constituição"
    ],
    "period": "Primeira carta de 1844, antes da reforma de fevereiro de 1854; cláusulas originais de 6 de novembro de 1844",
    "rationale": "A primeira carta organiza províncias sob governadores presidenciais e estabelece o catolicismo como religião estatal.",
    "caveats": "Não equivale aos regimes de Trujillo, Balaguer ou ao país atual. O artigo 210 concede poderes excepcionais durante a guerra; não resolvemos representação efetiva a partir de promessas eletivas. A transcrição tem erros tipográficos e necessita cotejo com edição oficial integral.",
    "sources": [
      {
        "title": "Constitución dominicana de 1844 — transcrição histórica",
        "url": "https://es.wikisource.org/wiki/Constituci%C3%B3n_dominicana_de_1844",
        "note": "Transcrição primária dos artigos da carta de 1844; cotejo integral pendente."
      },
      {
        "title": "La Constitución dominicana y sus reformas, tomo I — Tribunal Constitucional",
        "url": "https://tribunalconstitucional.gov.do/cec/publicaciones/la-constitucio-n-dominicana-y-sus-reformas-1844-2010/",
        "note": "Compilação oficial: edição/índice identificam a carta de 1844 e reforma em 25 de fevereiro de 1854. O PDF acessível contém introdução e índice, não foi usado como prova das cláusulas."
      }
    ],
    "kind": "country",
    "category": "historical-country",
    "vec": {
      "est": 40,
      "rep": 50,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 40,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "est": "medium",
      "rel": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Constitución dominicana de 1844 — transcrição histórica"
        ],
        "rationale": "Direção territorial hierarquizada e nomeação central sustentam orientação unitária moderada, com representação local como contraponto. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Sem auditoria da prática de governo provincial ou de autonomia municipal; não se infere centralização absoluta. Cotejo integral oficial pendente."
      },
      "rel": {
        "sourceTitles": [
          "Constitución dominicana de 1844 — transcrição histórica"
        ],
        "rationale": "Confessionalidade e competência eclesiástica delimitada sustentam religião institucional moderada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não demonstra teocracia, domínio geral de direito canônico, religiosidade popular ou perseguição efetiva. A carta distingue assuntos puramente eclesiásticos e civis; cotejo oficial integral pendente."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "moderate-second",
        "confidence": "medium",
        "relatedQuestionIds": [
          "estrutura_01",
          "estrutura_05"
        ],
        "claims": [
          {
            "sourceTitle": "Constitución dominicana de 1844 — transcrição histórica",
            "locator": "Art. 140–148",
            "statement": "Governadores nomeados pelo Presidente dirigem agentes provinciais; deputações provinciais incluem representantes eleitos mas são presididas pelo governador central.",
            "basis": "norm",
            "publishedDate": "1844-11-06",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Direção territorial hierarquizada e nomeação central sustentam orientação unitária moderada, com representação local como contraponto.",
        "uncertainty": "Sem auditoria da prática de governo provincial ou de autonomia municipal; não se infere centralização absoluta. Cotejo integral oficial pendente.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "rel": {
        "axis": "rel",
        "position": "moderate-second",
        "confidence": "medium",
        "relatedQuestionIds": [
          "religiao_03",
          "religiao_08"
        ],
        "claims": [
          {
            "sourceTitle": "Constitución dominicana de 1844 — transcrição histórica",
            "locator": "Art. 38 e 208",
            "statement": "Catolicismo é religião do Estado; exercício eclesiástico obedece a prelados canônicos e assuntos exclusivamente eclesiásticos remetem aos cânones.",
            "basis": "norm",
            "publishedDate": "1844-11-06",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Confessionalidade e competência eclesiástica delimitada sustentam religião institucional moderada.",
        "uncertainty": "Não demonstra teocracia, domínio geral de direito canônico, religiosidade popular ou perseguição efetiva. A carta distingue assuntos puramente eclesiásticos e civis; cotejo oficial integral pendente.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      }
    },
    "documentaryReview": {
      "status": "author-reviewed-bounded-claims",
      "reviewedOn": "2026-10-07",
      "independentReview": "pending",
      "scope": "Transcrição localizada e cronologia oficial; graduação média, cotejo oficial integral e prática pendentes."
    },
    "unknownAxisReasons": {
      "rep": "Promessas eletivas e poderes de guerra do artigo 210 entram em tensão; falta prática revisada suficiente para resolver uma direção de representação.",
      "pod": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "imi": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "dip": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "int": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "eco": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "con": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "com": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "mor": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "tec": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação."
    },
    "identityOrigin": {
      "disposition": "new-historical-unit",
      "distinctness": "Primeira ordem constitucional independente, anterior à reforma de 1854; distinta de ditaduras e ordem atual."
    },
    "codingScope": "Primeira carta de 1844, antes da reforma de fevereiro de 1854; cláusulas originais de 6 de novembro de 1844"
  },
  "research-brazil-imperial-charter-1824": {
    "id": "research-brazil-imperial-charter-1824",
    "name": "Brasil — Império sob a carta original de 1824",
    "aliases": [
      "Império do Brasil — desenho anterior ao Ato Adicional"
    ],
    "period": "Desenho original da carta imperial, 1824–1834; antes do Ato Adicional de 12 de agosto de 1834",
    "rationale": "Conselhos provinciais limitados, Poder Moderador e religião estatal delimitam o arranjo original, com câmaras representativas e garantias como contrapontos.",
    "caveats": "Promove o dossiê existente com a mesma identidade, preservado na fila de pesquisa. Não conta uma segunda cópia do Império nem toda a história de 1822–1889. Abdicação e regência em 1831 alteraram exercício do poder; aqui codificamos a carta original anterior à reforma provincial de 1834.",
    "sources": [
      {
        "title": "Constituição Política do Império do Brazil, 25 de março de 1824 — Câmara",
        "url": "https://www2.camara.leg.br/legin/fed/consti/1824-1899/constituicao-35041-25-marco-1824-532540-publicacaooriginal-14770-pl.html",
        "note": "Publicação original oficial, sem incorporar retrospectivamente o Ato Adicional. Artigos 5, 35, 43, 71–89, 90–95, 98–102, 165 e 167–169."
      },
      {
        "title": "Lei nº 16, de 12 de agosto de 1834 — Presidência",
        "url": "https://www.planalto.gov.br/ccivil_03/leis/lim/lim16.htm",
        "note": "Lei nº 16 de 12 de agosto de 1834 substitui conselhos por assembleias legislativas provinciais e amplia suas competências, justificando o limite normativo do recorte."
      }
    ],
    "kind": "country",
    "category": "historical-country",
    "vec": {
      "est": 40,
      "rep": 40,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 40,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "est": "medium",
      "rep": "medium",
      "rel": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Constituição Política do Império do Brazil, 25 de março de 1824 — Câmara"
        ],
        "rationale": "Nomeação central e dependência normativa provincial sustentam orientação unitária moderada, sem apagar órgãos representativos territoriais. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Somente edição anterior a 1834; autonomia municipal e conselhos são contrapontos, e exercício efetivo na regência não foi auditado."
      },
      "rep": {
        "sourceTitles": [
          "Constituição Política do Império do Brazil, 25 de março de 1824 — Câmara"
        ],
        "rationale": "Prerrogativas reais extensas e sufrágio restrito sustentam direção monárquica/autocrática moderada, com representação legislativa real no desenho. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não presume ditadura total nem eleições livres comprovadas. O recorte não mede regência, participação política efetiva ou reformas posteriores."
      },
      "rel": {
        "sourceTitles": [
          "Constituição Política do Império do Brazil, 25 de março de 1824 — Câmara"
        ],
        "rationale": "Religião estatal e restrições confessionais de cidadania política sustentam direção religiosa moderada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não equivale a teocracia nem mede crença pessoal ou execução das restrições. Culto privado permitido e garantia condicionada são contrapontos."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "moderate-second",
        "confidence": "medium",
        "relatedQuestionIds": [
          "estrutura_01",
          "estrutura_05"
        ],
        "claims": [
          {
            "sourceTitle": "Constituição Política do Império do Brazil, 25 de março de 1824 — Câmara",
            "locator": "Art. 71–89, 165 e 167–169",
            "statement": "Conselhos provinciais representam interesses locais com competências limitadas; resoluções dependem de decisão central. Imperador nomeia e remove presidentes provinciais; câmaras municipais são eletivas.",
            "basis": "norm",
            "publishedDate": "1824-03-25",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Nomeação central e dependência normativa provincial sustentam orientação unitária moderada, sem apagar órgãos representativos territoriais.",
        "uncertainty": "Somente edição anterior a 1834; autonomia municipal e conselhos são contrapontos, e exercício efetivo na regência não foi auditado.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "rep": {
        "axis": "rep",
        "position": "moderate-second",
        "confidence": "medium",
        "relatedQuestionIds": [
          "representacao_10",
          "representacao_15",
          "representacao_16"
        ],
        "claims": [
          {
            "sourceTitle": "Constituição Política do Império do Brazil, 25 de março de 1824 — Câmara",
            "locator": "Art. 35, 43, 90–95 e 98–101",
            "statement": "Deputados são eletivos por voto indireto censitário; Imperador seleciona senadores vitalícios, controla o Poder Moderador, nomeia governo e pode dissolver a Câmara.",
            "basis": "norm",
            "publishedDate": "1824-03-25",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Prerrogativas reais extensas e sufrágio restrito sustentam direção monárquica/autocrática moderada, com representação legislativa real no desenho.",
        "uncertainty": "Não presume ditadura total nem eleições livres comprovadas. O recorte não mede regência, participação política efetiva ou reformas posteriores.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "rel": {
        "axis": "rel",
        "position": "moderate-second",
        "confidence": "medium",
        "relatedQuestionIds": [
          "religiao_03",
          "religiao_08"
        ],
        "claims": [
          {
            "sourceTitle": "Constituição Política do Império do Brazil, 25 de março de 1824 — Câmara",
            "locator": "Art. 5, 95(III), 102(II) e 179(V)",
            "statement": "Catolicismo é estatal; outros cultos ficam em espaços privados sem exterior de templo; não católicos não podem ser deputados. Coroa nomeia bispos, com proteção condicionada contra perseguição religiosa.",
            "basis": "norm",
            "publishedDate": "1824-03-25",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Religião estatal e restrições confessionais de cidadania política sustentam direção religiosa moderada.",
        "uncertainty": "Não equivale a teocracia nem mede crença pessoal ou execução das restrições. Culto privado permitido e garantia condicionada são contrapontos.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      }
    },
    "documentaryReview": {
      "status": "author-reviewed-bounded-claims",
      "reviewedOn": "2026-10-07",
      "independentReview": "pending",
      "scope": "Publicação original da Câmara e alteração provincial de 1834 lidas; promoção do dossiê com identidade preservada."
    },
    "unknownAxisReasons": {
      "pod": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "imi": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "dip": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "int": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "eco": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "con": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "com": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "mor": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "tec": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação."
    },
    "identityOrigin": {
      "disposition": "promoted-research-dossier",
      "researchDossierId": "research-brazil-imperial-charter-1824",
      "distinctness": "Promoção de identidade de pesquisa existente: desenho imperial original, não criação de outra cópia do mesmo dossiê."
    },
    "codingScope": "Desenho original da carta imperial, 1824–1834; antes do Ato Adicional de 12 de agosto de 1834"
  },
  "hawaii-kingdom-independent": {
    "id": "hawaii-kingdom-independent",
    "name": "Reino do Havaí",
    "aliases": [
      "Kingdom of Hawaii"
    ],
    "period": "Reino independente,1810–1893; cláusulas originais de1864 anteriores à carta de1887",
    "rationale": "Monarquia constitucional independente com representação eletiva restrita e prerrogativas reais, anterior à ruptura republicana já catalogada.",
    "caveats": "Uma identidade para o reino, não cópias para cada monarca ou carta. A codificação é a edição de1864, sem projetá-la ao período anterior ou à Constituição da Baioneta de1887. O reino terminou com a deposição de1893; a república surge em1894. Prática de soberania e direitos indígenas é questão própria.",
    "sources": [
      {
        "title": "Constitution of the Kingdom of Hawaii, 1864 — transcrição primária",
        "url": "https://en.wikisource.org/wiki/1864_Constitution_of_the_Kingdom_of_Hawaii",
        "note": "Texto primário outorgado em20/8/1864, artigos3–8/20/28/45/57/60–62; cotejo oficial integral pendente."
      },
      {
        "title": "Annexation ofHawaii — National Archives",
        "url": "https://www.archives.gov/milestone-documents/joint-resolution-for-annexing-the-hawaiian-islands",
        "note": "Arquivo contextualiza unificação1810, imposição constitucional1887 e golpe1893; fonte primária principal da página é ato posterior de1898, não a carta de1864."
      }
    ],
    "kind": "country",
    "category": "historical-country",
    "vec": {
      "est": 50,
      "rep": 40,
      "pod": 40,
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
    "evidence": {
      "rep": "medium",
      "pod": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constitution of the Kingdom of Hawaii, 1864 — transcrição primária"
        ],
        "rationale": "Poder real e franquia restrita sustentam direção monárquica moderada, com representação como contraponto. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não equivale a monarquia absoluta; precisamos de cotejo das emendas e pleitos. Descreve1864, não a imposição posterior de1887."
      },
      "pod": {
        "sourceTitles": [
          "Constitution of the Kingdom of Hawaii, 1864 — transcrição primária"
        ],
        "rationale": "Garantias delimitadas sustentam liberdade moderada no texto, com exceções relevantes. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Sem auditoria de execução; proteção monárquica da imprensa é contraevidência, não omitida. Não imputa irrestrita liberdade de oposição."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constitution of the Kingdom of Hawaii, 1864 — transcrição primária",
            "locator": "Arts.20/28/45/57/60–62",
            "statement": "Rei exerce prerrogativas executivas e dissolução; legislativo inclui nobres e representantes, com requisitos de voto e renda.",
            "basis": "norm",
            "publishedDate": "1864-08-20",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Poder real e franquia restrita sustentam direção monárquica moderada, com representação como contraponto.",
        "uncertainty": "Não equivale a monarquia absoluta; precisamos de cotejo das emendas e pleitos. Descreve1864, não a imposição posterior de1887.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "pod": {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constitution of the Kingdom of Hawaii, 1864 — transcrição primária",
            "locator": "Arts.3–8",
            "statement": "Expressão, habeas corpus e devido processo são declarados; proteção da família real permite restrição da imprensa e rebelião/invasão permite suspensão.",
            "basis": "norm",
            "publishedDate": "1864-08-20",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Garantias delimitadas sustentam liberdade moderada no texto, com exceções relevantes.",
        "uncertainty": "Sem auditoria de execução; proteção monárquica da imprensa é contraevidência, não omitida. Não imputa irrestrita liberdade de oposição.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      }
    },
    "documentaryReview": {
      "status": "author-reviewed-bounded-claims",
      "reviewedOn": "2026-10-07",
      "independentReview": "pending",
      "scope": "Carta de1864 e contexto arquivístico de mudanças, sem homogeneizar todo o reino."
    },
    "unknownAxisReasons": {
      "est": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "imi": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "dip": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "int": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "eco": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "con": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "com": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "rel": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "mor": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "tec": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação."
    }
  },
  "philippines-commonwealth-1935": {
    "id": "philippines-commonwealth-1935",
    "name": "Filipinas — Commonwealth",
    "aliases": [],
    "period": "Commonwealth de 1935–1946, com ocupação e governo no exílio; cláusulas de direitos na edição emendada da carta de1935, anterior à independência",
    "rationale": "Unidade de transição sob soberania dos EUA, distinta da república revolucionária de1899 e da república independente.",
    "caveats": "Graduação normativa delimitada, confiança média; não certifica prática nem continuidade de todo o período. Cotejo integral e revisão independente pendentes. rep desconhecido: edição consultada inclui Congresso bicameral posterior, não deve ser atribuída a1935 original. Art.XVIII distingue Commonwealth e República.",
    "sources": [
      {
        "title": "1935 Philippine Constitution — LawPhil, edição emendada",
        "url": "https://lawphil.net/consti/cons1935.html",
        "note": "Texto primário transcrito/traduzido: locadores em coding. Edição consultada em 7/10/2026; não constitui certificação arquivística."
      }
    ],
    "kind": "country",
    "category": "historical-country",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 40,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 60,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "pod": "medium",
      "rel": "medium"
    },
    "axisEvidence": {
      "pod": {
        "sourceTitles": [
          "1935 Philippine Constitution — LawPhil, edição emendada"
        ],
        "rationale": "Garantias civis explícitas sustentam liberdade moderada formal. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Erro de transcrição no item13 e versão emendada impedem inferir intacta toda carta original."
      },
      "rel": {
        "sourceTitles": [
          "1935 Philippine Constitution — LawPhil, edição emendada"
        ],
        "rationale": "Não preferência institucional sustenta secularidade moderada com ensino confessional facultativo. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não mede crença nem exclui influência religiosa; cotejo da edição fundadora pendente."
      }
    },
    "coding": {
      "pod": {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "1935 Philippine Constitution — LawPhil, edição emendada",
            "locator": "Art.III,sec.1(1,3,5,8,14–18)",
            "statement": "Texto exige devido processo, busca justificada, defesa e presunção de inocência; protege imprensa com exceção de segurança nas comunicações.",
            "basis": "norm",
            "publishedDate": "1935; edição emendada",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Garantias civis explícitas sustentam liberdade moderada formal.",
        "uncertainty": "Erro de transcrição no item13 e versão emendada impedem inferir intacta toda carta original.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "rel": {
        "axis": "rel",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "1935 Philippine Constitution — LawPhil, edição emendada",
            "locator": "Art.III,sec.1(7); art.XIV,sec.5",
            "statement": "Estabelecimento religioso e testes religiosos são proibidos; ensino religioso opcional permanece na escola pública.",
            "basis": "norm",
            "publishedDate": "1935; edição emendada",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Não preferência institucional sustenta secularidade moderada com ensino confessional facultativo.",
        "uncertainty": "Não mede crença nem exclui influência religiosa; cotejo da edição fundadora pendente.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      }
    },
    "documentaryReview": {
      "status": "author-reviewed-bounded-claims",
      "reviewedOn": "2026-10-07",
      "independentReview": "pending",
      "scope": "Cláusulas delimitadas lidas pelo autor; prática e validação independente integral pendentes."
    },
    "unknownAxisReasons": {
      "est": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "rep": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "imi": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "dip": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "int": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "eco": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "con": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "com": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "mor": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "tec": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação."
    }
  },
  "spain-democratic-monarchy-1869": {
    "id": "spain-democratic-monarchy-1869",
    "name": "Espanha — monarquia do Sexênio Democrático",
    "aliases": [],
    "period": "Ordem monárquica de1869–1873, anterior à Primeira República; texto fundador de1869",
    "rationale": "Regime pós-ruptura com IsabelII, com carta de soberania nacional e direitos; distinto da república de1931 e do franquismo.",
    "caveats": "Graduação normativa delimitada, confiança média; não certifica prática nem continuidade de todo o período. Cotejo integral e revisão independente pendentes. rel desconhecido: culto católico financiado coexiste com liberdade pública de outros cultos; rep desconhecido sem cotejo eleitoral e funcionamento completo.",
    "sources": [
      {
        "title": "Constitución española de1869 — transcrição primária",
        "url": "https://es.wikisource.org/wiki/Constitución_española_de_1869",
        "note": "Texto primário transcrito/traduzido: locadores em coding. Edição consultada em 7/10/2026; não constitui certificação arquivística."
      },
      {
        "title": "Periodos constitucionales — Senado de España",
        "url": "https://www.senado.es/web/conocersenado/senadohistoria/periodosconstitucionales/index.html",
        "note": "Cronologia consultada: monarquia de1869, abdicação e República em1873; projeto federal não implantado não cria registro."
      }
    ],
    "kind": "country",
    "category": "historical-country",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 40,
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
    "evidence": {
      "pod": "medium"
    },
    "axisEvidence": {
      "pod": {
        "sourceTitles": [
          "Constitución española de1869 — transcrição primária"
        ],
        "rationale": "Garantias e limites legais à exceção sustentam liberdade moderada normativa. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Polícia regula reuniões externas e lei pode dissolver associações por segurança; prática não codificada."
      }
    },
    "coding": {
      "pod": {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constitución española de1869 — transcrição primária",
            "locator": "Arts.12,17–23,30–31",
            "statement": "Direitos de expressão e associação são protegidos sem censura preventiva; suspensão excepcional exige lei e limites de deportação.",
            "basis": "norm",
            "publishedDate": "1869",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Garantias e limites legais à exceção sustentam liberdade moderada normativa.",
        "uncertainty": "Polícia regula reuniões externas e lei pode dissolver associações por segurança; prática não codificada.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      }
    },
    "documentaryReview": {
      "status": "author-reviewed-bounded-claims",
      "reviewedOn": "2026-10-07",
      "independentReview": "pending",
      "scope": "Cláusulas delimitadas lidas pelo autor; prática e validação independente integral pendentes."
    },
    "unknownAxisReasons": {
      "est": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "rep": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "imi": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "dip": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "int": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "eco": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "con": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "com": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "rel": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "mor": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "tec": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação."
    }
  },
  "philippines-first-republic-1899": {
    "id": "philippines-first-republic-1899",
    "name": "Filipinas — Primeira República",
    "aliases": [],
    "period": "República revolucionária de1899–1901; carta de Malolos de20/1/1899, em contexto de guerra",
    "rationale": "República de independência com governo próprio anterior à dominação civil dos EUA e ao Commonwealth.",
    "caveats": "Graduação normativa delimitada, confiança média; não certifica prática nem continuidade de todo o período. Cotejo integral e revisão independente pendentes. rel desconhecido: art.5 proclama separação, mas art.100 suspende sua execução. rep desconhecido: Congresso transitório inclui membros nomeados e art.99 amplia poder governamental; não converter rótulo representativo em democracia.",
    "sources": [
      {
        "title": "Malolos Constitution1899 — LawPhil, tradução primária",
        "url": "https://lawphil.net/consti/consmalo.html",
        "note": "Texto primário transcrito/traduzido: locadores em coding. Edição consultada em 7/10/2026; não constitui certificação arquivística."
      },
      {
        "title": "Philippine Republic1898–1901 — NHCP, registro indexado",
        "url": "https://philhistoricsites.nhcp.gov.ph/registry_database/philippine-republic-1898-1901/",
        "note": "Texto indexado de marcador1956 identifica Presidência real de Aguinaldo em Malolos1898–1899. Página integral timeout; trecho usado somente para existência/cronologia."
      }
    ],
    "kind": "country",
    "category": "historical-country",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 40,
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
    "evidence": {
      "pod": "medium"
    },
    "axisEvidence": {
      "pod": {
        "sourceTitles": [
          "Malolos Constitution1899 — LawPhil, tradução primária"
        ],
        "rationale": "Garantias processuais delimitadas sustentam liberdade moderada formal, apesar da exceção. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não prova execução durante guerra; exceção transitória impede leitura irrestrita."
      }
    },
    "coding": {
      "pod": {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Malolos Constitution1899 — LawPhil, tradução primária",
            "locator": "Arts.7–15,20–22,30–31,99",
            "statement": "Detenção tem prazos judiciais e busca requer fundamento; direitos podem ser suspensos por lei em emergência, com poder transitório de guerra.",
            "basis": "norm",
            "publishedDate": "1899-01-20",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Garantias processuais delimitadas sustentam liberdade moderada formal, apesar da exceção.",
        "uncertainty": "Não prova execução durante guerra; exceção transitória impede leitura irrestrita.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      }
    },
    "documentaryReview": {
      "status": "author-reviewed-bounded-claims",
      "reviewedOn": "2026-10-07",
      "independentReview": "pending",
      "scope": "Cláusulas delimitadas lidas pelo autor; prática e validação independente integral pendentes."
    },
    "unknownAxisReasons": {
      "est": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "rep": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "imi": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "dip": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "int": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "eco": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "con": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "com": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "rel": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "mor": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "tec": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação."
    }
  },
  "portugal-charter-monarchy-1826": {
    "id": "portugal-charter-monarchy-1826",
    "name": "Portugal — monarquia da Carta",
    "aliases": [
      "Monarquia cartista portuguesa"
    ],
    "period": "Carta em vigor1826–1828,1834–1836 e1842–1910; um registro com interrupções e revisões, não governos contínuos1826–1910",
    "rationale": "Ordem de Carta outorgada e Câmara dos Pares distinta do constitucionalismo1822 e da República1910.",
    "caveats": "Codificação normativa editorial, não medição nem certificação de execução. Revisão independente integral pendente. Identidade sustentada por arquivo institucional e fundo documental efetivo. Nenhum eixo graduado: a Carta primária não pôde ser lida nesta rodada; descrição retrospectiva não substitui sua leitura normativa.",
    "sources": [
      {
        "title": "Guia do Fundo da Câmara dos Pares — Arquivo Histórico Parlamentar",
        "url": "https://www.parlamento.pt/Parlamento/Paginas/guia-fundo-camara-pares-1826-1910.aspx",
        "note": "Fonte efetivamente consultada em7/10/2026; limites de edição e locadores em coding."
      },
      {
        "title": "Carta Constitucional1826 — Parlamento português",
        "url": "https://www.parlamento.pt/parlamento/documents/cartaconstitucional.pdf",
        "note": "Fac-símile localizado; extração sem texto e captura indisponível. Não invocado como fonte de eixos."
      },
      {
        "title": "Monarquia — Assembleia da República",
        "url": "https://www.parlamento.pt/Parlamento/paginas/monarquia.aspx",
        "note": "História institucional lida da outorga, pares nomeados, deputados censitários e restaurações; identidade/contexto, não substitui cotejo da Carta."
      }
    ],
    "kind": "country",
    "category": "historical-country",
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
    "coding": {},
    "documentaryReview": {
      "status": "author-reviewed-bounded-claims",
      "reviewedOn": "2026-10-07",
      "independentReview": "pending",
      "scope": "Leitura autoral das passagens delimitadas; identidade e recorte arquivístico descritos nas fontes. Cotejo independente integral pendente."
    },
    "unknownAxisReasons": {
      "est": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "rep": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "pod": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "imi": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "dip": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "int": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "eco": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "con": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "com": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "rel": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "mor": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "tec": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação."
    }
  }
} as unknown as Record<string,ReferenceEntry>;

export const historicalCountryProvenance07Proposals = {
  "dominican-san-cristobal-1844": {
    "id": "dominican-san-cristobal-1844",
    "name": "República Dominicana — ordem de San Cristóbal",
    "aliases": [
      "República Dominicana sob a primeira Constituição"
    ],
    "period": "Carta original de 6/11/1844, anterior à reforma de 25/2/1854; fase constitucional da Primeira República, não toda a sua duração.",
    "rationale": "Carta prevê direitos, duas câmaras e chefias provinciais sob o Executivo, religião católica estatal e exceção militar.",
    "caveats": "A transcrição de artigos selecionados não foi cotejada com fac-símile. Requisitos de propriedade limitam cargos; o artigo 210 permite ordens militares sem responsabilidade durante a guerra. A reforma de 1854 delimita o texto original, não o fim da República.",
    "sources": [
      {
        "title": "Constitución dominicana de 1844 — transcrição histórica",
        "url": "https://es.wikisource.org/wiki/Constituci%C3%B3n_dominicana_de_1844",
        "note": "Transcrição primária dos artigos da carta de 1844; cotejo integral pendente."
      },
      {
        "title": "La Constitución dominicana y sus reformas, tomo I — Tribunal Constitucional",
        "url": "https://tribunalconstitucional.gov.do/cec/publicaciones/la-constitucio-n-dominicana-y-sus-reformas-1844-2010/",
        "note": "Compilação oficial: edição/índice identificam a carta de 1844 e reforma em 25 de fevereiro de 1854. O PDF acessível contém introdução e índice, não foi usado como prova das cláusulas."
      },
      {
        "title": "Constituição dominicana de 1844 — transcrição",
        "url": "https://es.wikisource.org/wiki/Constituci%C3%B3n_dominicana_de_1844",
        "note": "Artigos 14–15, 17–48, 59–68, 140–154 e 206–210 e assinatura de 6/11/1844 lidos. O artigo 38 estabelece religião estatal, cargos têm condições patrimoniais e o artigo 210 prevê exceção militar. Sem cotejo de edição original."
      },
      {
        "title": "A Constituição dominicana e suas reformas — Tribunal Constitucional",
        "url": "https://tribunalsitestorage.blob.core.windows.net/media/18612/libro-constitucion-y-sus-reformas-tomo-i.pdf",
        "note": "Arquivo de vinte páginas: apresentação e índice realmente lidos, não todos os textos constitucionais anunciados. O índice distingue a carta de 6/11/1844 e a reforma de 25/2/1854; não estabelece o fim da Primeira República."
      }
    ],
    "kind": "country",
    "category": "historical-country",
    "vec": {
      "est": 40,
      "rep": 50,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 40,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "est": "medium",
      "rel": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Constitución dominicana de 1844 — transcrição histórica"
        ],
        "rationale": "Direção territorial hierarquizada e nomeação central sustentam orientação unitária moderada, com representação local como contraponto. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Sem auditoria da prática de governo provincial ou de autonomia municipal; não se infere centralização absoluta. Cotejo integral oficial pendente."
      },
      "rel": {
        "sourceTitles": [
          "Constitución dominicana de 1844 — transcrição histórica"
        ],
        "rationale": "Confessionalidade e competência eclesiástica delimitada sustentam religião institucional moderada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não demonstra teocracia, domínio geral de direito canônico, religiosidade popular ou perseguição efetiva. A carta distingue assuntos puramente eclesiásticos e civis; cotejo oficial integral pendente."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "moderate-second",
        "confidence": "medium",
        "relatedQuestionIds": [
          "estrutura_01",
          "estrutura_05"
        ],
        "claims": [
          {
            "sourceTitle": "Constitución dominicana de 1844 — transcrição histórica",
            "locator": "Art. 140–148",
            "statement": "Governadores nomeados pelo Presidente dirigem agentes provinciais; deputações provinciais incluem representantes eleitos mas são presididas pelo governador central.",
            "basis": "norm",
            "publishedDate": "1844-11-06",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Direção territorial hierarquizada e nomeação central sustentam orientação unitária moderada, com representação local como contraponto.",
        "uncertainty": "Sem auditoria da prática de governo provincial ou de autonomia municipal; não se infere centralização absoluta. Cotejo integral oficial pendente.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "rel": {
        "axis": "rel",
        "position": "moderate-second",
        "confidence": "medium",
        "relatedQuestionIds": [
          "religiao_03",
          "religiao_08"
        ],
        "claims": [
          {
            "sourceTitle": "Constitución dominicana de 1844 — transcrição histórica",
            "locator": "Art. 38 e 208",
            "statement": "Catolicismo é religião do Estado; exercício eclesiástico obedece a prelados canônicos e assuntos exclusivamente eclesiásticos remetem aos cânones.",
            "basis": "norm",
            "publishedDate": "1844-11-06",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Confessionalidade e competência eclesiástica delimitada sustentam religião institucional moderada.",
        "uncertainty": "Não demonstra teocracia, domínio geral de direito canônico, religiosidade popular ou perseguição efetiva. A carta distingue assuntos puramente eclesiásticos e civis; cotejo oficial integral pendente.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      }
    },
    "documentaryReview": {
      "status": "author-reviewed-bounded-claims",
      "reviewedOn": "2026-10-07",
      "independentReview": "pending",
      "scope": "Transcrição localizada e cronologia oficial; graduação média, cotejo oficial integral e prática pendentes."
    },
    "unknownAxisReasons": {
      "rep": "Promessas eletivas e poderes de guerra do artigo 210 entram em tensão; falta prática revisada suficiente para resolver uma direção de representação.",
      "pod": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "imi": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "dip": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "int": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "eco": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "con": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "com": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "mor": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "tec": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação."
    },
    "identityOrigin": {
      "disposition": "new-historical-unit",
      "distinctness": "Primeira ordem constitucional independente, anterior à reforma de 1854; distinta de ditaduras e ordem atual."
    },
    "codingScope": "Primeira carta de 1844, antes da reforma de fevereiro de 1854; cláusulas originais de 6 de novembro de 1844"
  },
  "research-brazil-imperial-charter-1824": {
    "id": "research-brazil-imperial-charter-1824",
    "name": "Brasil — Império sob a carta original de 1824",
    "aliases": [
      "Império do Brasil — desenho anterior ao Ato Adicional"
    ],
    "period": "Carta original de 25/3/1824, anterior ao Ato Adicional assinado em 12/8/1834 e publicado em 21/8/1834.",
    "rationale": "Carta combina câmaras legislativas e conselhos provinciais com poder moderador do imperador e eleições censitárias.",
    "caveats": "O texto trata do desenho original, não de toda a experiência imperial. Renda e religião restringem a elegibilidade; o imperador é inviolável. A lei de 1834 altera instituições e não encerra o Império. Assinatura, selo, publicação e instalação das assembleias são momentos distintos.",
    "sources": [
      {
        "title": "Constituição Política do Império do Brazil, 25 de março de 1824 — Câmara",
        "url": "https://www2.camara.leg.br/legin/fed/consti/1824-1899/constituicao-35041-25-marco-1824-532540-publicacaooriginal-14770-pl.html",
        "note": "Publicação original oficial, sem incorporar retrospectivamente o Ato Adicional. Artigos 5, 35, 43, 71–89, 90–95, 98–102, 165 e 167–169."
      },
      {
        "title": "Lei nº 16, de 12 de agosto de 1834 — Presidência",
        "url": "https://www.planalto.gov.br/ccivil_03/leis/lim/lim16.htm",
        "note": "Lei nº 16 de 12 de agosto de 1834 substitui conselhos por assembleias legislativas provinciais e amplia suas competências, justificando o limite normativo do recorte."
      },
      {
        "title": "Constituição imperial de 1824 — Câmara dos Deputados",
        "url": "https://www2.camara.leg.br/legin/fed/consti/1824-1899/constituicao-35041-25-marco-1824-532540-publicacaooriginal-14770-pl.html",
        "note": "Artigos 9–70 e 71–104 realmente lidos: quatro poderes, conselhos provinciais, câmaras e poder moderador; critérios de renda e religião restringem participação. Não é leitura de todos os artigos."
      },
      {
        "title": "Lei nº 16 de 12/8/1834 — Senado Federal",
        "url": "https://legis.senado.leg.br/norma/540832/publicacao/15633035",
        "note": "Reprodução legislativa completa lida. Artigo 1 substitui conselhos por assembleias provinciais; artigo 32 suprime o Conselho de Estado. Assinada em 12/8, selada em 16/8 e publicada em 21/8; artigo 4 prevê eleições após publicação. Não fixa implantação uniforme em uma única data."
      }
    ],
    "kind": "country",
    "category": "historical-country",
    "vec": {
      "est": 40,
      "rep": 40,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 40,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "est": "medium",
      "rep": "medium",
      "rel": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Constituição Política do Império do Brazil, 25 de março de 1824 — Câmara"
        ],
        "rationale": "Nomeação central e dependência normativa provincial sustentam orientação unitária moderada, sem apagar órgãos representativos territoriais. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Somente edição anterior a 1834; autonomia municipal e conselhos são contrapontos, e exercício efetivo na regência não foi auditado."
      },
      "rep": {
        "sourceTitles": [
          "Constituição Política do Império do Brazil, 25 de março de 1824 — Câmara"
        ],
        "rationale": "Prerrogativas reais extensas e sufrágio restrito sustentam direção monárquica/autocrática moderada, com representação legislativa real no desenho. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não presume ditadura total nem eleições livres comprovadas. O recorte não mede regência, participação política efetiva ou reformas posteriores."
      },
      "rel": {
        "sourceTitles": [
          "Constituição Política do Império do Brazil, 25 de março de 1824 — Câmara"
        ],
        "rationale": "Religião estatal e restrições confessionais de cidadania política sustentam direção religiosa moderada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não equivale a teocracia nem mede crença pessoal ou execução das restrições. Culto privado permitido e garantia condicionada são contrapontos."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "moderate-second",
        "confidence": "medium",
        "relatedQuestionIds": [
          "estrutura_01",
          "estrutura_05"
        ],
        "claims": [
          {
            "sourceTitle": "Constituição Política do Império do Brazil, 25 de março de 1824 — Câmara",
            "locator": "Art. 71–89, 165 e 167–169",
            "statement": "Conselhos provinciais representam interesses locais com competências limitadas; resoluções dependem de decisão central. Imperador nomeia e remove presidentes provinciais; câmaras municipais são eletivas.",
            "basis": "norm",
            "publishedDate": "1824-03-25",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Nomeação central e dependência normativa provincial sustentam orientação unitária moderada, sem apagar órgãos representativos territoriais.",
        "uncertainty": "Somente edição anterior a 1834; autonomia municipal e conselhos são contrapontos, e exercício efetivo na regência não foi auditado.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "rep": {
        "axis": "rep",
        "position": "moderate-second",
        "confidence": "medium",
        "relatedQuestionIds": [
          "representacao_10",
          "representacao_15",
          "representacao_16"
        ],
        "claims": [
          {
            "sourceTitle": "Constituição Política do Império do Brazil, 25 de março de 1824 — Câmara",
            "locator": "Art. 35, 43, 90–95 e 98–101",
            "statement": "Deputados são eletivos por voto indireto censitário; Imperador seleciona senadores vitalícios, controla o Poder Moderador, nomeia governo e pode dissolver a Câmara.",
            "basis": "norm",
            "publishedDate": "1824-03-25",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Prerrogativas reais extensas e sufrágio restrito sustentam direção monárquica/autocrática moderada, com representação legislativa real no desenho.",
        "uncertainty": "Não presume ditadura total nem eleições livres comprovadas. O recorte não mede regência, participação política efetiva ou reformas posteriores.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "rel": {
        "axis": "rel",
        "position": "moderate-second",
        "confidence": "medium",
        "relatedQuestionIds": [
          "religiao_03",
          "religiao_08"
        ],
        "claims": [
          {
            "sourceTitle": "Constituição Política do Império do Brazil, 25 de março de 1824 — Câmara",
            "locator": "Art. 5, 95(III), 102(II) e 179(V)",
            "statement": "Catolicismo é estatal; outros cultos ficam em espaços privados sem exterior de templo; não católicos não podem ser deputados. Coroa nomeia bispos, com proteção condicionada contra perseguição religiosa.",
            "basis": "norm",
            "publishedDate": "1824-03-25",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Religião estatal e restrições confessionais de cidadania política sustentam direção religiosa moderada.",
        "uncertainty": "Não equivale a teocracia nem mede crença pessoal ou execução das restrições. Culto privado permitido e garantia condicionada são contrapontos.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      }
    },
    "documentaryReview": {
      "status": "author-reviewed-bounded-claims",
      "reviewedOn": "2026-10-07",
      "independentReview": "pending",
      "scope": "Publicação original da Câmara e alteração provincial de 1834 lidas; promoção do dossiê com identidade preservada."
    },
    "unknownAxisReasons": {
      "pod": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "imi": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "dip": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "int": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "eco": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "con": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "com": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "mor": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "tec": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação."
    },
    "identityOrigin": {
      "disposition": "promoted-research-dossier",
      "researchDossierId": "research-brazil-imperial-charter-1824",
      "distinctness": "Promoção de identidade de pesquisa existente: desenho imperial original, não criação de outra cópia do mesmo dossiê."
    },
    "codingScope": "Desenho original da carta imperial, 1824–1834; antes do Ato Adicional de 12 de agosto de 1834"
  },
  "hawaii-kingdom-independent": {
    "id": "hawaii-kingdom-independent",
    "name": "Reino do Havaí",
    "aliases": [
      "Kingdom of Hawaii"
    ],
    "period": "Reino independente, 1810–1893; recorte normativo: carta de 20/8/1864, anterior à ruptura constitucional de 6/7/1887.",
    "rationale": "Carta prevê liberdades e Assembleia de nobres nomeados e representantes, sob monarquia e requisitos de renda e alfabetização.",
    "caveats": "A transcrição inglesa inclui uma emenda de 1868 e não foi cotejada com fac-símile. Prerrogativas reais e exceções de emergência limitam direitos. A carta de 1887 altera o regime constitucional; o golpe de 1893 encerra a monarquia, antes da anexação de 1898.",
    "sources": [
      {
        "title": "Constitution of the Kingdom of Hawaii, 1864 — transcrição primária",
        "url": "https://en.wikisource.org/wiki/1864_Constitution_of_the_Kingdom_of_Hawaii",
        "note": "Texto primário outorgado em20/8/1864, artigos3–8/20/28/45/57/60–62; cotejo oficial integral pendente."
      },
      {
        "title": "Annexation ofHawaii — National Archives",
        "url": "https://www.archives.gov/milestone-documents/joint-resolution-for-annexing-the-hawaiian-islands",
        "note": "Arquivo contextualiza unificação1810, imposição constitucional1887 e golpe1893; fonte primária principal da página é ato posterior de1898, não a carta de1864."
      },
      {
        "title": "Constituição do Reino do Havaí de 1864 — transcrição",
        "url": "https://en.wikisource.org/wiki/1864_Constitution_of_the_Kingdom_of_Hawaii",
        "note": "Artigos 1–80 e emenda apresentada de 1868 realmente lidos. O artigo 79 fixa vigência em 20/8/1864. Nobres nomeados, prerrogativas do monarca e condições patrimoniais de voto coexistem com garantias civis. Sem cotejo de fac-símile."
      },
      {
        "title": "Anexação das ilhas havaianas — National Archives",
        "url": "https://www.archives.gov/milestone-documents/joint-resolution-for-annexing-the-hawaiian-islands",
        "note": "Texto institucional realmente lido distingue unificação de 1810, imposição constitucional de 6/7/1887, golpe de 17/1/1893 e anexação de 1898. Estes eventos não demonstram aplicação uniforme da carta de 1864."
      }
    ],
    "kind": "country",
    "category": "historical-country",
    "vec": {
      "est": 50,
      "rep": 40,
      "pod": 40,
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
    "evidence": {
      "rep": "medium",
      "pod": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constitution of the Kingdom of Hawaii, 1864 — transcrição primária"
        ],
        "rationale": "Poder real e franquia restrita sustentam direção monárquica moderada, com representação como contraponto. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não equivale a monarquia absoluta; precisamos de cotejo das emendas e pleitos. Descreve1864, não a imposição posterior de1887."
      },
      "pod": {
        "sourceTitles": [
          "Constitution of the Kingdom of Hawaii, 1864 — transcrição primária"
        ],
        "rationale": "Garantias delimitadas sustentam liberdade moderada no texto, com exceções relevantes. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Sem auditoria de execução; proteção monárquica da imprensa é contraevidência, não omitida. Não imputa irrestrita liberdade de oposição."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constitution of the Kingdom of Hawaii, 1864 — transcrição primária",
            "locator": "Arts.20/28/45/57/60–62",
            "statement": "Rei exerce prerrogativas executivas e dissolução; legislativo inclui nobres e representantes, com requisitos de voto e renda.",
            "basis": "norm",
            "publishedDate": "1864-08-20",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Poder real e franquia restrita sustentam direção monárquica moderada, com representação como contraponto.",
        "uncertainty": "Não equivale a monarquia absoluta; precisamos de cotejo das emendas e pleitos. Descreve1864, não a imposição posterior de1887.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "pod": {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constitution of the Kingdom of Hawaii, 1864 — transcrição primária",
            "locator": "Arts.3–8",
            "statement": "Expressão, habeas corpus e devido processo são declarados; proteção da família real permite restrição da imprensa e rebelião/invasão permite suspensão.",
            "basis": "norm",
            "publishedDate": "1864-08-20",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Garantias delimitadas sustentam liberdade moderada no texto, com exceções relevantes.",
        "uncertainty": "Sem auditoria de execução; proteção monárquica da imprensa é contraevidência, não omitida. Não imputa irrestrita liberdade de oposição.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      }
    },
    "documentaryReview": {
      "status": "author-reviewed-bounded-claims",
      "reviewedOn": "2026-10-07",
      "independentReview": "pending",
      "scope": "Carta de1864 e contexto arquivístico de mudanças, sem homogeneizar todo o reino."
    },
    "unknownAxisReasons": {
      "est": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "imi": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "dip": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "int": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "eco": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "con": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "com": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "rel": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "mor": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "tec": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação."
    }
  },
  "philippines-commonwealth-1935": {
    "id": "philippines-commonwealth-1935",
    "name": "Filipinas — Commonwealth",
    "aliases": [],
    "period": "Commonwealth, 15/11/1935–4/7/1946, com ocupação e governo no exílio; recorte normativo: edição emendada da carta de 1935.",
    "rationale": "Carta emendada prevê governo representativo, direitos civis e Executivo com controle administrativo e poderes de emergência.",
    "caveats": "O Commonwealth antecede a independência; não é a República soberana de 1946. A reprodução consultada contém legislativo bicameral posterior à emenda de 1940, não a versão original integral. Ocupação e exílio impedem supor funcionamento contínuo; artigo III, seção 13, contém corrupção textual e não foi usado.",
    "sources": [
      {
        "title": "1935 Philippine Constitution — LawPhil, edição emendada",
        "url": "https://lawphil.net/consti/cons1935.html",
        "note": "Texto primário transcrito/traduzido: locadores em coding. Edição consultada em 7/10/2026; não constitui certificação arquivística."
      },
      {
        "title": "Constituição de 1935 — edição emendada, LawPhil",
        "url": "https://lawphil.net/consti/cons1935.html",
        "note": "Preâmbulo e artigos I–III, V–VII em trechos selecionados realmente lidos. A edição contém duas câmaras e não foi tratada como o original unicameral de 1935. Controle administrativo, lei marcial e condições eleitorais são contrapesos às garantias civis; passagem corrompida não usada."
      },
      {
        "title": "Dia da Constituição — Official Gazette das Filipinas",
        "url": "https://officialgazette.gov.ph/constitutions/constitution-day/",
        "note": "Parágrafo institucional completo lido por indexação: ratificação em 14/5/1935, Commonwealth em 15/11/1935, emenda de 1940 e independência em 4/7/1946. Consulta direta negada; não se examinou toda a página. A carta continua depois da independência, mas o Commonwealth não."
      }
    ],
    "kind": "country",
    "category": "historical-country",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 40,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 60,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "pod": "medium",
      "rel": "medium"
    },
    "axisEvidence": {
      "pod": {
        "sourceTitles": [
          "1935 Philippine Constitution — LawPhil, edição emendada"
        ],
        "rationale": "Garantias civis explícitas sustentam liberdade moderada formal. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Erro de transcrição no item13 e versão emendada impedem inferir intacta toda carta original."
      },
      "rel": {
        "sourceTitles": [
          "1935 Philippine Constitution — LawPhil, edição emendada"
        ],
        "rationale": "Não preferência institucional sustenta secularidade moderada com ensino confessional facultativo. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não mede crença nem exclui influência religiosa; cotejo da edição fundadora pendente."
      }
    },
    "coding": {
      "pod": {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "1935 Philippine Constitution — LawPhil, edição emendada",
            "locator": "Art.III,sec.1(1,3,5,8,14–18)",
            "statement": "Texto exige devido processo, busca justificada, defesa e presunção de inocência; protege imprensa com exceção de segurança nas comunicações.",
            "basis": "norm",
            "publishedDate": "1935; edição emendada",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Garantias civis explícitas sustentam liberdade moderada formal.",
        "uncertainty": "Erro de transcrição no item13 e versão emendada impedem inferir intacta toda carta original.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "rel": {
        "axis": "rel",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "1935 Philippine Constitution — LawPhil, edição emendada",
            "locator": "Art.III,sec.1(7); art.XIV,sec.5",
            "statement": "Estabelecimento religioso e testes religiosos são proibidos; ensino religioso opcional permanece na escola pública.",
            "basis": "norm",
            "publishedDate": "1935; edição emendada",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Não preferência institucional sustenta secularidade moderada com ensino confessional facultativo.",
        "uncertainty": "Não mede crença nem exclui influência religiosa; cotejo da edição fundadora pendente.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      }
    },
    "documentaryReview": {
      "status": "author-reviewed-bounded-claims",
      "reviewedOn": "2026-10-07",
      "independentReview": "pending",
      "scope": "Cláusulas delimitadas lidas pelo autor; prática e validação independente integral pendentes."
    },
    "unknownAxisReasons": {
      "est": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "rep": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "imi": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "dip": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "int": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "eco": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "con": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "com": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "mor": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "tec": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação."
    }
  },
  "spain-democratic-monarchy-1869": {
    "id": "spain-democratic-monarchy-1869",
    "name": "Espanha — monarquia do Sexênio Democrático",
    "aliases": [],
    "period": "Monarquia do Sexênio Democrático, 1869–1873; recorte normativo: Constituição de 1869, antes da Primeira República.",
    "rationale": "Carta combina soberania nacional e monarquia, direitos civis e duas câmaras, com financiamento católico e exceções legais.",
    "caveats": "A transcrição selecionada não foi cotejada com fac-símile. Financiamento do culto católico, dever militar e suspensão de garantias coexistem com direitos civis. Abdicação e passagem à República em 1873 são limites institucionais; não se certifica toda a prática monárquica.",
    "sources": [
      {
        "title": "Constitución española de1869 — transcrição primária",
        "url": "https://es.wikisource.org/wiki/Constitución_española_de_1869",
        "note": "Texto primário transcrito/traduzido: locadores em coding. Edição consultada em 7/10/2026; não constitui certificação arquivística."
      },
      {
        "title": "Periodos constitucionales — Senado de España",
        "url": "https://www.senado.es/web/conocersenado/senadohistoria/periodosconstitucionales/index.html",
        "note": "Cronologia consultada: monarquia de1869, abdicação e República em1873; projeto federal não implantado não cria registro."
      },
      {
        "title": "Constituição espanhola de 1869 — transcrição",
        "url": "https://es.wikisource.org/wiki/Constituci%C3%B3n_espa%C3%B1ola_de_1869",
        "note": "Artigos 1–60 realmente lidos: soberania nacional, monarquia, direitos e legislativo bicameral. Artigos 21, 28 e 31 preservam financiamento católico, dever militar e suspensão de garantias. Não é leitura de todo o texto nem prova da prática."
      },
      {
        "title": "Períodos constitucionais — Senado da Espanha",
        "url": "https://www.senado.es/web/conocersenado/senadohistoria/periodosconstitucionales/index.html",
        "note": "Seção institucional realmente lida sobre 1868–1873: sufrágio masculino, monarquia de Amadeu e passagem à República após abdicação em 1873. O trecho não fixa o dia exato nem encerra todas as instituições da Constituição de 1869."
      }
    ],
    "kind": "country",
    "category": "historical-country",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 40,
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
    "evidence": {
      "pod": "medium"
    },
    "axisEvidence": {
      "pod": {
        "sourceTitles": [
          "Constitución española de1869 — transcrição primária"
        ],
        "rationale": "Garantias e limites legais à exceção sustentam liberdade moderada normativa. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Polícia regula reuniões externas e lei pode dissolver associações por segurança; prática não codificada."
      }
    },
    "coding": {
      "pod": {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constitución española de1869 — transcrição primária",
            "locator": "Arts.12,17–23,30–31",
            "statement": "Direitos de expressão e associação são protegidos sem censura preventiva; suspensão excepcional exige lei e limites de deportação.",
            "basis": "norm",
            "publishedDate": "1869",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Garantias e limites legais à exceção sustentam liberdade moderada normativa.",
        "uncertainty": "Polícia regula reuniões externas e lei pode dissolver associações por segurança; prática não codificada.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      }
    },
    "documentaryReview": {
      "status": "author-reviewed-bounded-claims",
      "reviewedOn": "2026-10-07",
      "independentReview": "pending",
      "scope": "Cláusulas delimitadas lidas pelo autor; prática e validação independente integral pendentes."
    },
    "unknownAxisReasons": {
      "est": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "rep": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "imi": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "dip": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "int": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "eco": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "con": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "com": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "rel": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "mor": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "tec": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação."
    }
  },
  "philippines-first-republic-1899": {
    "id": "philippines-first-republic-1899",
    "name": "Filipinas — Primeira República",
    "aliases": [],
    "period": "Primeira República, 23/1/1899–23/3/1901; carta de Malolos de 20/1/1899, sancionada em 21/1, em contexto de guerra.",
    "rationale": "Carta organiza república popular, Assembleia e liberdades, mas admite poderes de guerra e adia a separação religiosa.",
    "caveats": "Tradução inglesa sem identificação suficiente para cotejo do original espanhol. O artigo 99 admite poderes excepcionais de guerra e o artigo 100 suspende a separação religiosa do artigo 5. A captura de Aguinaldo marca o fim institucional segundo o NHCP; resistência armada continua depois, não equivalendo ao fim da guerra.",
    "sources": [
      {
        "title": "Malolos Constitution1899 — LawPhil, tradução primária",
        "url": "https://lawphil.net/consti/consmalo.html",
        "note": "Texto primário transcrito/traduzido: locadores em coding. Edição consultada em 7/10/2026; não constitui certificação arquivística."
      },
      {
        "title": "Philippine Republic1898–1901 — NHCP, registro indexado",
        "url": "https://philhistoricsites.nhcp.gov.ph/registry_database/philippine-republic-1898-1901/",
        "note": "Texto indexado de marcador1956 identifica Presidência real de Aguinaldo em Malolos1898–1899. Página integral timeout; trecho usado somente para existência/cronologia."
      },
      {
        "title": "Constituição de Malolos — tradução inglesa, LawPhil",
        "url": "https://lawphil.net/consti/consmalo.html",
        "note": "Corpo traduzido completo realmente lido, com assinatura de 20/1/1899 e sanção de 21/1. Artigos 27 e 99 tratam de defesa e guerra; artigo 100 suspende o artigo 5 até assembleia constituinte e mantém financiamento temporário de sacerdotes. Tradução não cotejada com gazeta espanhola."
      },
      {
        "title": "Fim da Primeira República — NHCP, Philippine Information Agency",
        "url": "https://pia.gov.ph/press-release/nation-to-commemorate-end-of-first-ph-republic-in-palanan/",
        "note": "Texto institucional de 19/3/2026 realmente lido: instalação em 23/1/1899 e captura de Aguinaldo em 23/3/1901 considerada fim definitivo da República. O próprio texto registra resistência posterior até 1902 e além. Não afirma fim simultâneo de todos os combates."
      }
    ],
    "kind": "country",
    "category": "historical-country",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 40,
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
    "evidence": {
      "pod": "medium"
    },
    "axisEvidence": {
      "pod": {
        "sourceTitles": [
          "Malolos Constitution1899 — LawPhil, tradução primária"
        ],
        "rationale": "Garantias processuais delimitadas sustentam liberdade moderada formal, apesar da exceção. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não prova execução durante guerra; exceção transitória impede leitura irrestrita."
      }
    },
    "coding": {
      "pod": {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Malolos Constitution1899 — LawPhil, tradução primária",
            "locator": "Arts.7–15,20–22,30–31,99",
            "statement": "Detenção tem prazos judiciais e busca requer fundamento; direitos podem ser suspensos por lei em emergência, com poder transitório de guerra.",
            "basis": "norm",
            "publishedDate": "1899-01-20",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Garantias processuais delimitadas sustentam liberdade moderada formal, apesar da exceção.",
        "uncertainty": "Não prova execução durante guerra; exceção transitória impede leitura irrestrita.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      }
    },
    "documentaryReview": {
      "status": "author-reviewed-bounded-claims",
      "reviewedOn": "2026-10-07",
      "independentReview": "pending",
      "scope": "Cláusulas delimitadas lidas pelo autor; prática e validação independente integral pendentes."
    },
    "unknownAxisReasons": {
      "est": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "rep": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "imi": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "dip": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "int": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "eco": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "con": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "com": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "rel": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "mor": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "tec": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação."
    }
  },
  "portugal-charter-monarchy-1826": {
    "id": "portugal-charter-monarchy-1826",
    "name": "Portugal — monarquia da Carta",
    "aliases": [
      "Monarquia cartista portuguesa"
    ],
    "period": "Monarquia da Carta: 1826–1828, 1834–1836 e 1842–1910; vigências interrompidas, com revisões e queda da monarquia em 5/10/1910.",
    "rationale": "Carta combina pares nomeados e hereditários, deputados por eleição censitária e poderes moderadores do monarca.",
    "caveats": "Síntese institucional retrospectiva, não leitura certificada do PDF original de 1826. Há interrupções e mudanças eleitorais posteriores, incluindo o Ato Adicional de 1852. Não representa um governo contínuo nem uma versão constitucional imutável entre 1826 e 1910.",
    "sources": [
      {
        "title": "Guia do Fundo da Câmara dos Pares — Arquivo Histórico Parlamentar",
        "url": "https://www.parlamento.pt/Parlamento/Paginas/guia-fundo-camara-pares-1826-1910.aspx",
        "note": "Fonte efetivamente consultada em7/10/2026; limites de edição e locadores em coding."
      },
      {
        "title": "Carta Constitucional1826 — Parlamento português",
        "url": "https://www.parlamento.pt/parlamento/documents/cartaconstitucional.pdf",
        "note": "Fac-símile localizado; extração sem texto e captura indisponível. Não invocado como fonte de eixos."
      },
      {
        "title": "Monarquia — Assembleia da República",
        "url": "https://www.parlamento.pt/Parlamento/paginas/monarquia.aspx",
        "note": "História institucional lida da outorga, pares nomeados, deputados censitários e restaurações; identidade/contexto, não substitui cotejo da Carta."
      },
      {
        "title": "Monarquia constitucional — Assembleia da República",
        "url": "https://www.parlamento.pt/Parlamento/paginas/monarquia.aspx",
        "note": "Seções realmente lidas sobre Carta de 1826, interrupções de 1828/1836, reposições de 1834/1842, revisões e República de 5/10/1910. Pares nomeados, eleição censitária indireta e prerrogativas reais pertencem ao desenho descrito; eleições mudam em 1852. Relato institucional, não fac-símile do original."
      }
    ],
    "kind": "country",
    "category": "historical-country",
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
    "coding": {},
    "documentaryReview": {
      "status": "author-reviewed-bounded-claims",
      "reviewedOn": "2026-10-07",
      "independentReview": "pending",
      "scope": "Leitura autoral das passagens delimitadas; identidade e recorte arquivístico descritos nas fontes. Cotejo independente integral pendente."
    },
    "unknownAxisReasons": {
      "est": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "rep": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "pod": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "imi": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "dip": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "int": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "eco": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "con": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "com": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "rel": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "mor": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "tec": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação."
    }
  }
} as unknown as Record<string,ReferenceEntry>;

const allowedFields = {
  "dominican-san-cristobal-1844": [
    "period",
    "rationale",
    "caveats",
    "sources"
  ],
  "research-brazil-imperial-charter-1824": [
    "period",
    "rationale",
    "caveats",
    "sources"
  ],
  "hawaii-kingdom-independent": [
    "period",
    "caveats",
    "sources",
    "rationale"
  ],
  "philippines-commonwealth-1935": [
    "period",
    "caveats",
    "sources",
    "rationale"
  ],
  "spain-democratic-monarchy-1869": [
    "period",
    "caveats",
    "sources",
    "rationale"
  ],
  "philippines-first-republic-1899": [
    "period",
    "caveats",
    "sources",
    "rationale"
  ],
  "portugal-charter-monarchy-1826": [
    "period",
    "caveats",
    "sources",
    "rationale"
  ]
} as Record<string, (keyof ReferenceEntry)[]>;
export function reconcileHistoricalCountryProvenance07(entry:ReferenceEntry):ReferenceEntry {
 const before=historicalCountryProvenance07Before[entry.id], proposal=historicalCountryProvenance07Proposals[entry.id];
 if(!before||!proposal||JSON.stringify(entry)!==JSON.stringify(before)) return entry;
 const patch:Partial<ReferenceEntry>={};
 for(const key of allowedFields[entry.id]) {
  if(key==='sources') patch.sources=proposal.sources.map(source=>entry.sources.find(old=>JSON.stringify(old)===JSON.stringify(source))??source);
  else Object.assign(patch,{[key]:proposal[key]});
 }
 return {...entry,...patch};
}
