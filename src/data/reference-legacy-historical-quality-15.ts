import type {ReferenceEntry} from './references';

// Full runtime originals; this proposal changes rationale only. No active import.
export const legacyHistoricalQuality15OriginalRecords:Record<string,ReferenceEntry>={
  "ricardo-flores-magon": {
    "id": "ricardo-flores-magon",
    "name": "Ricardo Flores Magón",
    "aliases": [],
    "kind": "person",
    "category": "historical-figure",
    "period": "Programa coletivo do PLM, assinado em 1º de julho de 1906",
    "rationale": "Perfil documental restrito ao texto e às passagens identificadas; posições desconhecidas permanecem em 50.",
    "caveats": "Programa coletivo: assinatura nominal de Magón como presidente, não autoria exclusiva nem sua posterior fase anarquista. Proíbe imigração chinesa (art.16): contrapeso racial à proposta emancipatória. Sem validar execução.",
    "sources": [
      {
        "title": "Programa del Partido Liberal (1906), Junta Organizadora del PLM",
        "url": "https://www.memoriapoliticademexico.org/Textos/5RepDictadura/1906PPL.html",
        "note": "Transcrição integral do programa primário de 1906; o texto identifica Flores Magón como presidente e signatário da Junta Organizadora, que publicou o programa coletivamente."
      },
      {
        "title": "Ricardo Flores Magón — INEHRM",
        "url": "https://inehrm.gob.mx/es/inehrm/magon",
        "note": "Biografia institucional consultada: 1873–1922; falecimento em 21 de novembro de 1922. Não gera eixos."
      }
    ],
    "vec": {
      "est": 50,
      "rep": 80,
      "pod": 40,
      "imi": 50,
      "dip": 40,
      "int": 50,
      "eco": 60,
      "con": 60,
      "com": 50,
      "rel": 80,
      "mor": 60,
      "tec": 50
    },
    "evidence": {
      "rep": "high",
      "pod": "high",
      "dip": "medium",
      "rel": "high",
      "eco": "medium",
      "con": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Programa del Partido Liberal (1906), Junta Organizadora del PLM"
        ],
        "rationale": "Democracia participativa explícita. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Programa, não implementação."
      },
      "pod": {
        "sourceTitles": [
          "Programa del Partido Liberal (1906), Junta Organizadora del PLM"
        ],
        "rationale": "Garantias contra coerção estatal. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Mantém pena capital por traição, punições por abuso e restrições clericais."
      },
      "dip": {
        "sourceTitles": [
          "Programa del Partido Liberal (1906), Junta Organizadora del PLM"
        ],
        "rationale": "Contenção militar parcial. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Mantém defesa armada voluntária."
      },
      "rel": {
        "sourceTitles": [
          "Programa del Partido Liberal (1906), Junta Organizadora del PLM"
        ],
        "rationale": "Secularização institucional explícita. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Inclui restrições coercivas ao clero."
      },
      "eco": {
        "sourceTitles": [
          "Programa del Partido Liberal (1906), Junta Organizadora del PLM"
        ],
        "rationale": "Provisão e financiamento público parciais. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Mantém propriedade produtiva privada; banco pode ser fomentado."
      },
      "con": {
        "sourceTitles": [
          "Programa del Partido Liberal (1906), Junta Organizadora del PLM"
        ],
        "rationale": "Alocação pública delimitada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não define planejamento geral da economia."
      },
      "mor": {
        "sourceTitles": [
          "Programa del Partido Liberal (1906), Junta Organizadora del PLM"
        ],
        "rationale": "Reforma civil emancipatória parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Exclusão racial chinesa contradiz universalidade."
      }
    },
    "coding": {
      "rep": {
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
        ],
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "pod": {
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
        ],
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "dip": {
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
        ],
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "rel": {
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
        ],
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "eco": {
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
        ],
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "con": {
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
        ],
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "mor": {
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
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      }
    }
  },
  "fidel-castro": {
    "id": "fidel-castro",
    "name": "Fidel Castro",
    "aliases": [],
    "kind": "person",
    "category": "historical-figure",
    "period": "History Will Absolve Me, defesa de 16 de outubro de 1953",
    "rationale": "Perfil documental restrito ao texto e às passagens identificadas; posições desconhecidas permanecem em 50.",
    "caveats": "Tradução/transcrição MIA; original oral de 1953 e antiga edição UCF de 1961 distinguidos. Proposta de oposição, não prática do governo posterior. Primeiro programa concentra temporariamente os três poderes no movimento revolucionário.",
    "sources": [
      {
        "title": "History Will Absolve Me, Fidel Castro (edição de 1961)",
        "url": "https://stars.library.ucf.edu/prism/363/",
        "note": "Registro da University of Central Florida Libraries Special Collections com acesso à digitalização integral da edição de 1961 do discurso apresentado em 1953."
      },
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
    "vec": {
      "est": 50,
      "rep": 60,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 60,
      "con": 60,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "rep": "medium",
      "eco": "high",
      "con": "high"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "History Will Absolve Me — Fidel Castro, 1953"
        ],
        "rationale": "Direção democrática limitada pelo programa transitório. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Movimento assume provisoriamente poderes executivo, legislativo e judicial."
      },
      "eco": {
        "sourceTitles": [
          "History Will Absolve Me — Fidel Castro, 1953"
        ],
        "rationale": "Propriedade pública em setores específicos. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Reforma agrária concede títulos privados; não é estatização integral."
      },
      "con": {
        "sourceTitles": [
          "History Will Absolve Me — Fidel Castro, 1953"
        ],
        "rationale": "Direção deliberada de investimento. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Programa anunciado; não demonstra execução."
      }
    },
    "coding": {
      "rep": {
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
        ],
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "eco": {
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
        ],
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "con": {
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
        ],
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      }
    }
  },
  "mustafa-kemal-ataturk": {
    "id": "mustafa-kemal-ataturk",
    "name": "Mustafa Kemal Atatürk",
    "aliases": [
      "Ataturk",
      "Mustafa Kemal"
    ],
    "kind": "person",
    "category": "historical-figure",
    "period": "Definição autoral de estatismo, data original não indicada na reprodução oficial",
    "rationale": "Perfil documental restrito ao texto e às passagens identificadas; posições desconhecidas permanecem em 50.",
    "caveats": "Somente bloco explicitamente atribuído a Atatürk, iniciado Atatürk, devletçilik ilkesini şu şekilde açıklamaktadır; comentário institucional subsequente não vira fala autoral. Data original e referência da nota15 ausentes nesta reprodução; tradução editorial do turco.",
    "sources": [
      {
        "title": "Cumhuriyetçilik — Atatürk Araştırma Merkezi",
        "url": "https://atam.gov.tr/cumhuriyetcilik/",
        "note": "Centro oficial de pesquisa apresenta soberania popular, eleição e republicanismo, com referências às reformas constitucionais."
      },
      {
        "title": "Devletçilik — Atatürk Araştırma Merkezi",
        "url": "https://atam.gov.tr/devletcilik/",
        "note": "Explica a política estatal de desenvolvimento e delimita a relação pretendida entre Estado, iniciativa privada e mercado."
      },
      {
        "title": "Lâiklik — Atatürk Araştırma Merkezi",
        "url": "https://atam.gov.tr/laiklik/",
        "note": "Registra a separação entre governo e religião, liberdade de consciência e educação secular."
      },
      {
        "title": "Milliyetçilik — Atatürk Araştırma Merkezi",
        "url": "https://atam.gov.tr/milliyetcilik/",
        "note": "Expõe nacionalismo cívico, unidade nacional e a fórmula “Paz em casa, paz no mundo”."
      },
      {
        "title": "The Idea of Anıtkabir — Forças Armadas da Turquia",
        "url": "https://www.anitkabir.tsk.tr/20_ingilizce/02_insaasi/anitkabir_dusuncesi.html",
        "note": "Registro institucional consultado confirma morte em 10 de novembro de 1938."
      }
    ],
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 60,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "eco": "medium"
    },
    "axisEvidence": {
      "eco": {
        "sourceTitles": [
          "Devletçilik — Atatürk Araştırma Merkezi"
        ],
        "rationale": "Economia mista com atuação pública. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Citação sem data original; não mede propriedade ou prática."
      }
    },
    "coding": {
      "eco": {
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
        ],
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      }
    }
  },
  "sukarno-1945-pancasila": {
    "id": "sukarno-1945-pancasila",
    "name": "Sukarno",
    "aliases": [
      "Soekarno",
      "Bung Karno"
    ],
    "kind": "person",
    "category": "historical-figure",
    "period": "Abertura da Conferência de Bandung, 18 de abril de 1955",
    "rationale": "Perfil documental restrito ao texto e às passagens identificadas; posições desconhecidas permanecem em 50.",
    "caveats": "ID histórico preservado do candidato de 1945; novo recorte é 1955, sem somar pessoa duas vezes. Cabeçalho WorldJPN diz 2015; data1955 é confirmada pela cronologia do museu oficial e contexto interno1954. Tradução inglesa atribuída ao Ministério de Relações Exteriores indonésio; declaração, não auditoria da prática.",
    "sources": [
      {
        "title": "Pidato Sukarno, 1 Juni 1945 — Arquivo Nacional da Indonésia",
        "url": "https://jdih.bpip.go.id/common/dokumen/arsiplangka-pidatosoekarno1juni1945sumberanri.pdf",
        "note": "Fac-símile e transcrição do discurso preservados em publicação da Agência de Fomento da Ideologia Pancasila com o Arquivo Nacional."
      },
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
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 40,
      "dip": 40,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "dip": "high",
      "imi": "high"
    },
    "axisEvidence": {
      "dip": {
        "sourceTitles": [
          "Discurso de abertura de Bandung — Sukarno, 1955"
        ],
        "rationale": "Contenção internacional explícita. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Reconhece luta armada de independência; não é pacifismo absoluto."
      },
      "imi": {
        "sourceTitles": [
          "Discurso de abertura de Bandung — Sukarno, 1955"
        ],
        "rationale": "Pluralidade cultural defendida. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não apresenta política completa de imigração."
      }
    },
    "coding": {
      "dip": {
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
        ],
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "imi": {
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
        ],
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      }
    }
  },
  "mohammad-hatta": {
    "id": "mohammad-hatta",
    "name": "Mohammad Hatta",
    "aliases": [
      "Bung Hatta"
    ],
    "kind": "person",
    "category": "historical-figure",
    "period": "Artigo autoral sobre cooperativas, junho de 1956",
    "rationale": "Perfil documental restrito ao texto e às passagens identificadas; posições desconhecidas permanecem em 50.",
    "caveats": "Programa autoral, não execução. Admite sociedades privadas; controle público não significa empreendedor estatal único.",
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
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 60,
      "con": 60,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "eco": "high",
      "con": "high"
    },
    "axisEvidence": {
      "eco": {
        "sourceTitles": [
          "Facets of Indonesia’s Economy: The Special Place of Co-Operatives — Mohammad Hatta"
        ],
        "rationale": "Propriedade coletiva parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Admite empresas privadas."
      },
      "con": {
        "sourceTitles": [
          "Facets of Indonesia’s Economy: The Special Place of Co-Operatives — Mohammad Hatta"
        ],
        "rationale": "Planejamento de desenvolvimento. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não exige monopólio estatal."
      }
    },
    "coding": {
      "eco": {
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
        ],
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "con": {
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
        ],
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      }
    }
  },
  "vladimir-lenin": {
    "id": "vladimir-lenin",
    "name": "Vladimir Lenin",
    "aliases": [
      "Vladimir Ilyich Ulyanov",
      "V. I. Lenin"
    ],
    "kind": "person",
    "category": "historical-figure",
    "period": "State and Revolution, capítulo V, transição socialista proposta em agosto–setembro de 1917",
    "rationale": "Perfil documental restrito ao texto e às passagens identificadas; posições desconhecidas permanecem em 50.",
    "caveats": "Codificação da fase transitória coerciva; comunismo final sem Estado é horizonte separado. Foram lidos os comentários do próprio Lenin, distinguindo as citações de Marx/Engels. Teoria de1917 não se transfere à prática soviética.",
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
    "vec": {
      "est": 50,
      "rep": 40,
      "pod": 80,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 80,
      "con": 80,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "rep": "medium",
      "pod": "high",
      "eco": "high",
      "con": "high"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "The State and Revolution, Chapter V — V. I. Lenin"
        ],
        "rationale": "Inclusão eleitoral é condicionada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Propõe expansão majoritária; não mede eleições reais."
      },
      "pod": {
        "sourceTitles": [
          "The State and Revolution, Chapter V — V. I. Lenin"
        ],
        "rationale": "Coerção constitutiva da transição. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Horizonte comunista posterior promete fim da coerção."
      },
      "eco": {
        "sourceTitles": [
          "The State and Revolution, Chapter V — V. I. Lenin"
        ],
        "rationale": "Socialização estrutural explícita. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Restrito ao programa de transição."
      },
      "con": {
        "sourceTitles": [
          "The State and Revolution, Chapter V — V. I. Lenin"
        ],
        "rationale": "Coordenação econômica abrangente. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Não é certificado de execução; recusa Estado de burocratas."
      }
    },
    "coding": {
      "rep": {
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
        ],
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "pod": {
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
        ],
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "eco": {
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
        ],
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "con": {
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
        ],
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      }
    }
  },
  "leon-trotsky": {
    "id": "leon-trotsky",
    "name": "Leon Trotsky",
    "aliases": [
      "Lev Davidovich Bronstein"
    ],
    "kind": "person",
    "category": "historical-figure",
    "period": "The Permanent Revolution, conclusões da edição de 1931",
    "rationale": "Perfil documental restrito ao texto e às passagens identificadas; posições desconhecidas permanecem em 50.",
    "caveats": "Conclusões autorais delimitadas; emancipação e democracia revolucionária coexistem com direção partidária de classe. Não infere nacionalização geral de referência vaga a direitos de propriedade.",
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
    "vec": {
      "est": 50,
      "rep": 40,
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
    "evidence": {
      "rep": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "The Permanent Revolution, Chapter10 — Leon Trotsky"
        ],
        "rationale": "Pluralismo político limitado pela liderança prescrita. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Democracia declarada de classe; mecanismo eleitoral não especificado."
      }
    },
    "coding": {
      "rep": {
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
        ],
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      }
    }
  },
  "clr-james": {
    "id": "clr-james",
    "name": "C. L. R. James",
    "aliases": [
      "Cyril Lionel Robert James",
      "CLR James"
    ],
    "kind": "person",
    "category": "historical-figure",
    "period": "Every Cook Can Govern, junho de1956",
    "rationale": "Perfil documental restrito ao texto e às passagens identificadas; posições desconhecidas permanecem em 50.",
    "caveats": "Defesa autoral da democracia direta baseada numa interpretação de Atenas, não validação historiográfica dos seus relatos. Reconhece exclusão de mulheres e escravos no modelo antigo; não transpor essa exclusão para programa pessoal sem outra passagem.",
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
    "vec": {
      "est": 50,
      "rep": 80,
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
      "rep": "high",
      "pod": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Every Cook Can Govern — C. L. R. James"
        ],
        "rationale": "Participação democrática constitutiva. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Analogia histórica; não desenho constitucional completo."
      },
      "pod": {
        "sourceTitles": [
          "Every Cook Can Govern — C. L. R. James"
        ],
        "rationale": "Liberdade cívica como condição do governo. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não é plataforma abrangente de direitos."
      }
    },
    "coding": {
      "rep": {
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
        ],
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "pod": {
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
        ],
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      }
    }
  },
  "jose-carlos-mariategui": {
    "id": "jose-carlos-mariategui",
    "name": "José Carlos Mariátegui",
    "aliases": [
      "El Amauta"
    ],
    "kind": "person",
    "category": "historical-figure",
    "period": "Seven Interpretative Essays, ensaios2–3,1928",
    "rationale": "Perfil documental restrito ao texto e às passagens identificadas; posições desconhecidas permanecem em 50.",
    "caveats": "Argumento agrário e de emancipação indígena; relatos históricos e estatísticas são alegações do autor, não certificações do projeto. Citações de GonzalezPrada/CastroPozo não são tratadas como falas de Mariátegui.",
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
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 40,
      "dip": 50,
      "int": 50,
      "eco": 60,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 60,
      "tec": 50
    },
    "evidence": {
      "imi": "medium",
      "mor": "medium",
      "eco": "high"
    },
    "axisEvidence": {
      "imi": {
        "sourceTitles": [
          "Seven Interpretative Essays, Essay2 — José Carlos Mariátegui"
        ],
        "rationale": "Preservação cultural indígena parcial. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não define imigração ou igualdade multicultural completa."
      },
      "mor": {
        "sourceTitles": [
          "Seven Interpretative Essays, Essay2 — José Carlos Mariátegui"
        ],
        "rationale": "Emancipação racial parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não cobre outros costumes."
      },
      "eco": {
        "sourceTitles": [
          "Seven Interpretative Essays, Essay3 — José Carlos Mariátegui"
        ],
        "rationale": "Propriedade coletiva agrária delimitada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Comunidade não é estatização; não abrange toda propriedade produtiva."
      }
    },
    "coding": {
      "imi": {
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
        ],
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "mor": {
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
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "eco": {
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
        ],
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      }
    }
  },
  "harriet-taylor-mill": {
    "id": "harriet-taylor-mill",
    "name": "Harriet Taylor Mill",
    "aliases": [
      "Harriet Hardy Taylor Mill"
    ],
    "kind": "person",
    "category": "historical-figure",
    "period": "Enfranchisement of Women, julho de1851, reimpressão de1868",
    "rationale": "Perfil documental restrito ao texto e às passagens identificadas; posições desconhecidas permanecem em 50.",
    "caveats": "O ensaio foi publicado originalmente sem assinatura; atribuição de Harriet pela edição e autoridade bibliográfica, com colaboração editorial de J.S.Mill. Não confundir pessoas nem usar resumo automático que troca o gênero do autor.",
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
    "vec": {
      "est": 50,
      "rep": 80,
      "pod": 40,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 80,
      "tec": 50
    },
    "evidence": {
      "rep": "high",
      "pod": "high",
      "mor": "high"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Enfranchisement of Women — Harriet Taylor Mill"
        ],
        "rationale": "Inclusão eleitoral constitutiva. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Programa declarado; não auditoria de execução."
      },
      "pod": {
        "sourceTitles": [
          "Enfranchisement of Women — Harriet Taylor Mill"
        ],
        "rationale": "Autonomia contra imposição legal de gênero. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Subtema específico; não plataforma geral de segurança."
      },
      "mor": {
        "sourceTitles": [
          "Enfranchisement of Women — Harriet Taylor Mill"
        ],
        "rationale": "Emancipação de gênero central. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Não resolve todos os costumes contemporâneos."
      }
    },
    "coding": {
      "rep": {
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
        ],
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "pod": {
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
        ],
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "mor": {
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
        ],
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      }
    }
  },
  "ralph-bunche": {
    "id": "ralph-bunche",
    "name": "Ralph Bunche",
    "aliases": [],
    "kind": "person",
    "category": "historical-figure",
    "period": "Some Reflections on Peace in Our Time, 1950-12-11",
    "rationale": "Recorte documental: apenas passagens identificadas; eixos desconhecidos em 50.",
    "caveats": "Citação autoral reproduzida pela ONU; não leitura integral do discurso. 1904–1971; morte 1971-12-09.",
    "sources": [
      {
        "title": "ONU: citação de Ralph Bunche na Nobel Lecture",
        "url": "https://www.un.org/en/about-us/nobel-peace-prize/ralph-bunche-1950",
        "note": "Corpo da página direta efetivamente lido; somente passagem autoral identificada."
      },
      {
        "title": "Identidade e vida — Ralph Bunche",
        "url": "https://www.nobelprize.org/prizes/peace/1950/bunche/facts/",
        "note": "Identidade institucional consultada: 1904–1971; morte 1971-12-09. Sem codificação de eixo; Nobel facts consultado por corpo indexado quando abertura bloqueada."
      }
    ],
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
      "dip": 40,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "dip": "medium"
    },
    "axisEvidence": {
      "dip": {
        "sourceTitles": [
          "ONU: citação de Ralph Bunche na Nobel Lecture"
        ],
        "rationale": "Rejeita guerra preventiva e exige esgotar recursos honrosos para preservar paz. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Rejeição da guerra preventiva; não mede todas as modalidades de defesa."
      }
    },
    "coding": {
      "dip": {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "ONU: citação de Ralph Bunche na Nobel Lecture",
            "publishedDate": "1950-12-11",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "Abertura da citação: Ralph Bunche explained his philosophy",
            "statement": "Rejeita guerra preventiva e exige esgotar recursos honrosos para preservar paz."
          }
        ],
        "rationale": "Rejeita guerra preventiva e exige esgotar recursos honrosos para preservar paz.",
        "uncertainty": "Rejeição da guerra preventiva; não mede todas as modalidades de defesa.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "diplomacia_02"
        ],
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      }
    }
  },
  "na-lester-b-pearson": {
    "id": "na-lester-b-pearson",
    "name": "Lester B. Pearson",
    "aliases": [
      "Lester Bowles Pearson"
    ],
    "kind": "person",
    "category": "historical-figure",
    "period": "The Four Faces of Peace, 1957-12-11",
    "rationale": "Recorte documental: apenas passagens identificadas; eixos desconhecidos em 50.",
    "caveats": "Recorte de 1957 distinto do antigo governo 1963–1968; não substitui o objeto bruto preservado. 1897–1972; morte 1972-12-27.",
    "sources": [
      {
        "title": "Official speeches and parliamentary records",
        "url": "https://www.ourcommons.ca/Parliamentarians/en/prime-ministers",
        "note": "Registros parlamentares e discursos de Pearson sustentam as políticas do período de governo de 1963–1968."
      },
      {
        "title": "The Four Faces of Peace — Lester B. Pearson",
        "url": "https://www.nobelprize.org/prizes/peace/1957/pearson/lecture/",
        "note": "Passagens autorais indexadas efetivamente lidas; abertura direta Nobel bloqueada (403), sem afirmar leitura integral."
      },
      {
        "title": "Identidade e vida — Lester B. Pearson",
        "url": "https://www.nobelprize.org/prizes/peace/1957/pearson/facts/",
        "note": "Identidade institucional consultada: 1897–1972; morte 1972-12-27. Sem codificação de eixo; Nobel facts consultado por corpo indexado quando abertura bloqueada."
      }
    ],
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
      "dip": 40,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "dip": "medium"
    },
    "axisEvidence": {
      "dip": {
        "sourceTitles": [
          "The Four Faces of Peace — Lester B. Pearson"
        ],
        "rationale": "Propõe consenso entre Estados em lugar da força unilateral e rejeita Estado predatório. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Recorte parcial; o discurso também contempla paz e poder."
      }
    },
    "coding": {
      "dip": {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "The Four Faces of Peace — Lester B. Pearson",
            "publishedDate": "1957-12-11",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "Parágrafo: The choice before us is peace or extinction",
            "statement": "Propõe consenso entre Estados em lugar da força unilateral e rejeita Estado predatório."
          }
        ],
        "rationale": "Propõe consenso entre Estados em lugar da força unilateral e rejeita Estado predatório.",
        "uncertainty": "Recorte parcial; o discurso também contempla paz e poder.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "diplomacia_02"
        ],
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      }
    }
  },
  "sean-macbride": {
    "id": "sean-macbride",
    "name": "Seán MacBride",
    "aliases": [
      "Sean MacBride"
    ],
    "kind": "person",
    "category": "historical-figure",
    "period": "The Imperatives of Survival, 1974-12-12",
    "rationale": "Recorte documental: apenas passagens identificadas; eixos desconhecidos em 50.",
    "caveats": "As referências a religião, moral e indústria soviética não geram códigos. 1904–1988; morte 1988-01-15. Participação de mulheres no desarmamento e recusa individual de matar são preservadas na pesquisa, mas insuficientes para graduar os eixos mor/pod gerais.",
    "sources": [
      {
        "title": "The Imperatives of Survival — Seán MacBride",
        "url": "https://www.nobelprize.org/prizes/peace/1974/macbride/lecture/",
        "note": "Passagens autorais indexadas efetivamente lidas; abertura direta Nobel bloqueada (403), sem afirmar leitura integral."
      },
      {
        "title": "Identidade e vida — Seán MacBride",
        "url": "https://www.nobelprize.org/prizes/peace/1974/macbride/facts/",
        "note": "Identidade institucional consultada: 1904–1988; morte 1988-01-15. Sem codificação de eixo; Nobel facts consultado por corpo indexado quando abertura bloqueada."
      }
    ],
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
      "dip": 40,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "dip": "medium"
    },
    "axisEvidence": {
      "dip": {
        "sourceTitles": [
          "The Imperatives of Survival — Seán MacBride"
        ],
        "rationale": "Defende desarmamento geral, arbitragem automática e jurisdição internacional. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Admite força limitada de manutenção da paz."
      }
    },
    "coding": {
      "dip": {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "The Imperatives of Survival — Seán MacBride",
            "publishedDate": "1974-12-12",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "Practical imperatives 1,4,6–8; Right to Refuse to Kill; Special Role for Women",
            "statement": "Defende desarmamento geral, arbitragem automática e jurisdição internacional."
          }
        ],
        "rationale": "Defende desarmamento geral, arbitragem automática e jurisdição internacional.",
        "uncertainty": "Admite força limitada de manutenção da paz.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "diplomacia_02"
        ],
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      }
    }
  },
  "andrei-sakharov": {
    "id": "andrei-sakharov",
    "name": "Andrei Sakharov",
    "aliases": [
      "Andrey Sakharov"
    ],
    "kind": "person",
    "category": "historical-figure",
    "period": "Peace, Progress, Human Rights, 1975-12-11",
    "rationale": "Recorte documental: apenas passagens identificadas; eixos desconhecidos em 50.",
    "caveats": "Tradução do discurso; perfil de 1975 não projeta sua fase anterior de desenvolvimento nuclear. 1921–1989; morte 1989-12-14.",
    "sources": [
      {
        "title": "Peace, Progress, Human Rights — Andrei Sakharov",
        "url": "https://www.nobelprize.org/prizes/peace/1975/sakharov/lecture/",
        "note": "Passagens autorais indexadas efetivamente lidas; abertura direta Nobel bloqueada (403), sem afirmar leitura integral."
      },
      {
        "title": "Identidade e vida — Andrei Sakharov",
        "url": "https://www.nobelprize.org/prizes/peace/1975/sakharov/facts/",
        "note": "Identidade institucional consultada: 1921–1989; morte 1989-12-14. Sem codificação de eixo; Nobel facts consultado por corpo indexado quando abertura bloqueada."
      }
    ],
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 40,
      "imi": 50,
      "dip": 40,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 60
    },
    "evidence": {
      "pod": "medium",
      "dip": "medium",
      "tec": "medium"
    },
    "axisEvidence": {
      "pod": {
        "sourceTitles": [
          "Peace, Progress, Human Rights — Andrei Sakharov"
        ],
        "rationale": "Defende liberdade de informação, consciência e publicação e libertação de presos políticos. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Liberdades específicas; não avalia toda segurança pública."
      },
      "dip": {
        "sourceTitles": [
          "Peace, Progress, Human Rights — Andrei Sakharov"
        ],
        "rationale": "Propõe acordos verificáveis, inspeções e reduções simultâneas e proporcionais de armas. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Desarmamento equilibrado, sem abandonar unilateralmente defesa."
      },
      "tec": {
        "sourceTitles": [
          "Peace, Progress, Human Rights — Andrei Sakharov"
        ],
        "rationale": "Rejeita proibir pesquisa genética, materiais artificiais, alimentos sintéticos e automação. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Exige testes, controles e análise dos riscos; não endossa permissividade tecnológica irrestrita."
      }
    },
    "coding": {
      "pod": {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Peace, Progress, Human Rights — Andrei Sakharov",
            "publishedDate": "1975-12-11",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "Abertura sobre liberdade; Let me now tackle disarmament; We cannot reject",
            "statement": "Defende liberdade de informação, consciência e publicação e libertação de presos políticos."
          }
        ],
        "rationale": "Defende liberdade de informação, consciência e publicação e libertação de presos políticos.",
        "uncertainty": "Liberdades específicas; não avalia toda segurança pública.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "poder_16"
        ],
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "dip": {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Peace, Progress, Human Rights — Andrei Sakharov",
            "publishedDate": "1975-12-11",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "Abertura sobre liberdade; Let me now tackle disarmament; We cannot reject",
            "statement": "Propõe acordos verificáveis, inspeções e reduções simultâneas e proporcionais de armas."
          }
        ],
        "rationale": "Propõe acordos verificáveis, inspeções e reduções simultâneas e proporcionais de armas.",
        "uncertainty": "Desarmamento equilibrado, sem abandonar unilateralmente defesa.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "diplomacia_02"
        ],
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "tec": {
        "axis": "tec",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Peace, Progress, Human Rights — Andrei Sakharov",
            "publishedDate": "1975-12-11",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "Abertura sobre liberdade; Let me now tackle disarmament; We cannot reject",
            "statement": "Rejeita proibir pesquisa genética, materiais artificiais, alimentos sintéticos e automação."
          }
        ],
        "rationale": "Rejeita proibir pesquisa genética, materiais artificiais, alimentos sintéticos e automação.",
        "uncertainty": "Exige testes, controles e análise dos riscos; não endossa permissividade tecnológica irrestrita.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "tecnologia_04"
        ],
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      }
    }
  },
  "mother-teresa": {
    "id": "mother-teresa",
    "name": "Madre Teresa de Calcutá",
    "aliases": [
      "Mother Teresa",
      "Agnes Gonxha Bojaxhiu",
      "Anjezë Gonxhe Bojaxhiu"
    ],
    "kind": "person",
    "category": "historical-figure",
    "period": "Nobel Lecture, 1979-12-11",
    "rationale": "Recorte documental: apenas passagens identificadas; eixos desconhecidos em 50.",
    "caveats": "Caridade não estabelece política de propriedade estatal; devoção não estabelece legislação religiosa. 1910–1997; morte 1997-09-05.",
    "sources": [
      {
        "title": "Nobel Lecture — Madre Teresa de Calcutá",
        "url": "https://www.nobelprize.org/prizes/peace/1979/teresa/lecture/",
        "note": "Passagens autorais indexadas efetivamente lidas; abertura direta Nobel bloqueada (403), sem afirmar leitura integral."
      },
      {
        "title": "Identidade e vida — Madre Teresa de Calcutá",
        "url": "https://www.nobelprize.org/prizes/peace/1979/teresa/facts/",
        "note": "Identidade institucional consultada: 1910–1997; morte 1997-09-05. Sem codificação de eixo; Nobel facts consultado por corpo indexado quando abertura bloqueada."
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
      "mor": 40,
      "tec": 50
    },
    "evidence": {
      "mor": "medium"
    },
    "axisEvidence": {
      "mor": {
        "sourceTitles": [
          "Nobel Lecture — Madre Teresa de Calcutá"
        ],
        "rationale": "Condena aborto como interrupção de vida humana e promove abstinência e planejamento natural. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Subtemas aborto e família; não extrapola para todos os costumes."
      }
    },
    "coding": {
      "mor": {
        "axis": "mor",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Nobel Lecture — Madre Teresa de Calcutá",
            "publishedDate": "1979-12-11",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "Passagens sobre abortion, natural family planning e abstaining",
            "statement": "Condena aborto como interrupção de vida humana e promove abstinência e planejamento natural."
          }
        ],
        "rationale": "Condena aborto como interrupção de vida humana e promove abstinência e planejamento natural.",
        "uncertainty": "Subtemas aborto e família; não extrapola para todos os costumes.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "moral_10"
        ],
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      }
    }
  },
  "albert-schweitzer": {
    "id": "albert-schweitzer",
    "name": "Albert Schweitzer",
    "aliases": [],
    "kind": "person",
    "category": "historical-figure",
    "period": "The Problem of Peace, 1954-11-04",
    "rationale": "Recorte documental: apenas passagens identificadas; eixos desconhecidos em 50.",
    "caveats": "Prêmio 1952; conferência 1954. Linguagem colonial e paternalista impede presumir inclusividade geral. 1875–1965; morte 1965-09-04.",
    "sources": [
      {
        "title": "The Problem of Peace — Albert Schweitzer",
        "url": "https://www.nobelprize.org/prizes/peace/1952/schweitzer/lecture/",
        "note": "Passagens autorais indexadas efetivamente lidas; abertura direta Nobel bloqueada (403), sem afirmar leitura integral."
      },
      {
        "title": "Identidade e vida — Albert Schweitzer",
        "url": "https://www.nobelprize.org/prizes/peace/1952/schweitzer/facts/",
        "note": "Identidade institucional consultada: 1875–1965; morte 1965-09-04. Sem codificação de eixo; Nobel facts consultado por corpo indexado quando abertura bloqueada."
      }
    ],
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
      "dip": 40,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "dip": "medium"
    },
    "axisEvidence": {
      "dip": {
        "sourceTitles": [
          "The Problem of Peace — Albert Schweitzer"
        ],
        "rationale": "Defende rejeição ética da guerra e instituições de paz. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Reconhece direito de preparar defesa enquanto a paz não estiver garantida."
      }
    },
    "coding": {
      "dip": {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "The Problem of Peace — Albert Schweitzer",
            "publishedDate": "1954-11-04",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "Conclusão: guerra e ética; trecho sobre right to prepare defense",
            "statement": "Defende rejeição ética da guerra e instituições de paz."
          }
        ],
        "rationale": "Defende rejeição ética da guerra e instituições de paz.",
        "uncertainty": "Reconhece direito de preparar defesa enquanto a paz não estiver garantida.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "diplomacia_02"
        ],
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      }
    }
  },
  "willy-brandt": {
    "id": "willy-brandt",
    "name": "Willy Brandt",
    "aliases": [
      "Herbert Ernst Karl Frahm"
    ],
    "kind": "person",
    "category": "historical-figure",
    "period": "Peace Policy in Our Time, 1971-12-11",
    "rationale": "Recorte documental: apenas passagens identificadas; eixos desconhecidos em 50.",
    "caveats": "Tradução; recorte do discurso de 1971, com objeto antigo da chancelaria integralmente preservado. 1913–1992; morte 1992-10-08.",
    "sources": [
      {
        "title": "Willy Brandt — German Federal Government",
        "url": "https://www.bundeskanzler.de/bk-en/federal-chancellery/federal-chancellors-since-1949/willy-brandt",
        "note": "Biografia oficial sobre reformas sociais e política de aproximação com o Leste."
      },
      {
        "title": "Peace Policy in Our Time — Willy Brandt",
        "url": "https://www.nobelprize.org/prizes/peace/1971/brandt/lecture/",
        "note": "Passagens autorais indexadas efetivamente lidas; abertura direta Nobel bloqueada (403), sem afirmar leitura integral."
      },
      {
        "title": "Identidade e vida — Willy Brandt",
        "url": "https://www.nobelprize.org/prizes/peace/1971/brandt/facts/",
        "note": "Identidade institucional consultada: 1913–1992; morte 1992-10-08. Sem codificação de eixo; Nobel facts consultado por corpo indexado quando abertura bloqueada."
      }
    ],
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
      "dip": 40,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "dip": "medium"
    },
    "axisEvidence": {
      "dip": {
        "sourceTitles": [
          "Peace Policy in Our Time — Willy Brandt"
        ],
        "rationale": "Defende redução de tensões e comunicação entre fronteiras, rejeitando guerra como meio político. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Considera presença ocidental em Berlim necessária à paz; não pacifismo absoluto."
      }
    },
    "coding": {
      "dip": {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Peace Policy in Our Time — Willy Brandt",
            "publishedDate": "1971-12-11",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "Seção I: war not a means; seção II: Western presence in Berlin",
            "statement": "Defende redução de tensões e comunicação entre fronteiras, rejeitando guerra como meio político."
          }
        ],
        "rationale": "Defende redução de tensões e comunicação entre fronteiras, rejeitando guerra como meio político.",
        "uncertainty": "Considera presença ocidental em Berlim necessária à paz; não pacifismo absoluto.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "diplomacia_02"
        ],
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      }
    }
  },
  "emily-greene-balch": {
    "id": "emily-greene-balch",
    "name": "Emily Greene Balch",
    "aliases": [],
    "kind": "person",
    "category": "historical-figure",
    "period": "Toward Human Unity or Beyond Nationalism, 1948-04-07",
    "rationale": "Recorte documental: apenas passagens identificadas; eixos desconhecidos em 50.",
    "caveats": "Conferência 1948 distinta do prêmio 1946. Propostas de aviação/ONU não se tornam mapa econômico geral. 1867–1961; morte 1961-01-09. Objeção à conscrição é evidência temática, insuficiente isoladamente para graduar todo o eixo pod.",
    "sources": [
      {
        "title": "Toward Human Unity or Beyond Nationalism — Emily Greene Balch",
        "url": "https://www.nobelprize.org/prizes/peace/1946/balch/lecture/",
        "note": "Passagens autorais indexadas efetivamente lidas; abertura direta Nobel bloqueada (403), sem afirmar leitura integral."
      },
      {
        "title": "Identidade e vida — Emily Greene Balch",
        "url": "https://www.nobelprize.org/prizes/peace/1946/balch/facts/",
        "note": "Identidade institucional consultada: 1867–1961; morte 1961-01-09. Sem codificação de eixo; Nobel facts consultado por corpo indexado quando abertura bloqueada."
      }
    ],
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
      "dip": 40,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "dip": "medium"
    },
    "axisEvidence": {
      "dip": {
        "sourceTitles": [
          "Toward Human Unity or Beyond Nationalism — Emily Greene Balch"
        ],
        "rationale": "Defende renúncia à guerra e contenção de provocações entre Estados. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Admite segurança coletiva e constabulária armada limitada."
      }
    },
    "coding": {
      "dip": {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Toward Human Unity or Beyond Nationalism — Emily Greene Balch",
            "publishedDate": "1948-04-07",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "Peace activities; conscientious objectors; final sobre collective security",
            "statement": "Defende renúncia à guerra e contenção de provocações entre Estados."
          }
        ],
        "rationale": "Defende renúncia à guerra e contenção de provocações entre Estados.",
        "uncertainty": "Admite segurança coletiva e constabulária armada limitada.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "diplomacia_02"
        ],
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      }
    }
  },
  "linus-pauling": {
    "id": "linus-pauling",
    "name": "Linus Pauling",
    "aliases": [],
    "kind": "person",
    "category": "historical-figure",
    "period": "Science and Peace, 1963-12-11",
    "rationale": "Recorte documental: apenas passagens identificadas; eixos desconhecidos em 50.",
    "caveats": "Prêmio 1962; conferência 1963. Ser cientista não gera eixo tecnológico. 1901–1994; morte 1994-08-19.",
    "sources": [
      {
        "title": "Science and Peace — Linus Pauling",
        "url": "https://www.nobelprize.org/prizes/peace/1962/pauling/lecture/",
        "note": "Passagens autorais indexadas efetivamente lidas; abertura direta Nobel bloqueada (403), sem afirmar leitura integral."
      },
      {
        "title": "Identidade e vida — Linus Pauling",
        "url": "https://www.nobelprize.org/prizes/peace/1962/pauling/facts/",
        "note": "Identidade institucional consultada: 1901–1994; morte 1994-08-19. Sem codificação de eixo; Nobel facts consultado por corpo indexado quando abertura bloqueada."
      }
    ],
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
      "dip": 40,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "dip": "medium"
    },
    "axisEvidence": {
      "dip": {
        "sourceTitles": [
          "Science and Peace — Linus Pauling"
        ],
        "rationale": "Defende substituição da guerra por direito mundial e tratados de proibição de testes nucleares. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Passagem nuclear e jurídica parcial; não abolição unilateral de toda defesa."
      }
    },
    "coding": {
      "dip": {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Science and Peace — Linus Pauling",
            "publishedDate": "1963-12-11",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "Abertura: world law; passagem sobre Test Ban Treaty",
            "statement": "Defende substituição da guerra por direito mundial e tratados de proibição de testes nucleares."
          }
        ],
        "rationale": "Defende substituição da guerra por direito mundial e tratados de proibição de testes nucleares.",
        "uncertainty": "Passagem nuclear e jurídica parcial; não abolição unilateral de toda defesa.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "diplomacia_02"
        ],
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      }
    }
  },
  "norman-angell": {
    "id": "norman-angell",
    "name": "Norman Angell",
    "aliases": [
      "Sir Norman Angell",
      "Ralph Norman Angell Lane"
    ],
    "kind": "person",
    "category": "historical-figure",
    "period": "Peace and the Public Mind, 1935-06-12",
    "rationale": "Recorte documental: apenas passagens identificadas; eixos desconhecidos em 50.",
    "caveats": "Prêmio 1933; conferência 1935. Diagnóstico de apoio popular a ditadores não vira preferência autocrática. 1872–1967; morte 1967-10-07.",
    "sources": [
      {
        "title": "Peace and the Public Mind — Norman Angell",
        "url": "https://www.nobelprize.org/prizes/peace/1933/angell/lecture/",
        "note": "Passagens autorais indexadas efetivamente lidas; abertura direta Nobel bloqueada (403), sem afirmar leitura integral."
      },
      {
        "title": "Identidade e vida — Norman Angell",
        "url": "https://www.nobelprize.org/prizes/peace/1933/angell/facts/",
        "note": "Identidade institucional consultada: 1872–1967; morte 1967-10-07. Sem codificação de eixo; Nobel facts consultado por corpo indexado quando abertura bloqueada."
      }
    ],
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
      "dip": 40,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "dip": "medium"
    },
    "axisEvidence": {
      "dip": {
        "sourceTitles": [
          "Peace and the Public Mind — Norman Angell"
        ],
        "rationale": "Defende direito e segurança coletiva contra competição entre forças nacionais privadas. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Aceita coerção comunitária contra violência; não rejeição de toda força."
      }
    },
    "coding": {
      "dip": {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Peace and the Public Mind — Norman Angell",
            "publishedDate": "1935-06-12",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "Comparação entre force of litigants e community; crítica ao isolamento",
            "statement": "Defende direito e segurança coletiva contra competição entre forças nacionais privadas."
          }
        ],
        "rationale": "Defende direito e segurança coletiva contra competição entre forças nacionais privadas.",
        "uncertainty": "Aceita coerção comunitária contra violência; não rejeição de toda força.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "diplomacia_02"
        ],
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      }
    }
  },
  "rene-cassin": {
    "id": "rene-cassin",
    "name": "René Cassin",
    "aliases": [
      "Rene Cassin"
    ],
    "kind": "person",
    "category": "historical-figure",
    "period": "The Charter of Human Rights, 1968-12-11",
    "rationale": "Recorte documental: apenas passagens identificadas; eixos desconhecidos em 50.",
    "caveats": "Tradução. Morte verificada na instituição IIDH, sem depender de biografia secundária conflitante. 1887–1976; morte 1976-02-20.",
    "sources": [
      {
        "title": "The Charter of Human Rights — René Cassin",
        "url": "https://www.nobelprize.org/prizes/peace/1968/cassin/lecture/",
        "note": "Passagens autorais indexadas efetivamente lidas; abertura direta Nobel bloqueada (403), sem afirmar leitura integral."
      },
      {
        "title": "Identidade e vida — René Cassin",
        "url": "https://www.iidh.org/en/commemoration-of-the-50th-anniversary-of-the-death-of-rene-cassin/",
        "note": "Identidade institucional consultada diretamente no corpo IIDH: 1887–1976; morte 1976-02-20. Sem codificação de eixo."
      }
    ],
    "vec": {
      "est": 50,
      "rep": 60,
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
      "pod": "medium",
      "rep": "medium"
    },
    "axisEvidence": {
      "pod": {
        "sourceTitles": [
          "The Charter of Human Rights — René Cassin"
        ],
        "rationale": "Endossa liberdades civis, judiciais, religiosas e políticas da Declaração Universal. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Declaração jurídica, não valida execução nem todas as políticas de segurança."
      },
      "rep": {
        "sourceTitles": [
          "The Charter of Human Rights — René Cassin"
        ],
        "rationale": "Descreve sociedade democrática como pressuposto e exclui onipotência do Estado totalitário. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Compromisso institucional parcial; não atribui respostas a todos os mecanismos eleitorais."
      }
    },
    "coding": {
      "pod": {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "The Charter of Human Rights — René Cassin",
            "publishedDate": "1968-12-11",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "Passagens sobre direitos civis e other salient characteristic: universality",
            "statement": "Endossa liberdades civis, judiciais, religiosas e políticas da Declaração Universal."
          }
        ],
        "rationale": "Endossa liberdades civis, judiciais, religiosas e políticas da Declaração Universal.",
        "uncertainty": "Declaração jurídica, não valida execução nem todas as políticas de segurança.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "poder_16"
        ],
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "rep": {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "The Charter of Human Rights — René Cassin",
            "publishedDate": "1968-12-11",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "Passagens sobre direitos civis e other salient characteristic: universality",
            "statement": "Descreve sociedade democrática como pressuposto e exclui onipotência do Estado totalitário."
          }
        ],
        "rationale": "Descreve sociedade democrática como pressuposto e exclui onipotência do Estado totalitário.",
        "uncertainty": "Compromisso institucional parcial; não atribui respostas a todos os mecanismos eleitorais.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "representacao_02"
        ],
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      }
    }
  },
  "john-hume": {
    "id": "john-hume",
    "name": "John Hume",
    "aliases": [],
    "kind": "person",
    "category": "historical-figure",
    "period": "The Philosophy of Conflict Resolution, 2001-10-15",
    "rationale": "Recorte documental: apenas passagens identificadas; eixos desconhecidos em 50.",
    "caveats": "MIT publicou reportagem em 2001-10-17, com citações de palestra em 2001-10-15; relato editorial não usado como declaração autoral. 1937–2020; morte 2020-08-03.",
    "sources": [
      {
        "title": "MIT: Hume urges peaceful solutions",
        "url": "https://news.mit.edu/2001/hume-1017",
        "note": "Corpo da página direta efetivamente lido; somente passagem autoral identificada."
      },
      {
        "title": "Identidade e vida — John Hume",
        "url": "https://www.nobelprize.org/prizes/peace/1998/hume/facts/",
        "note": "Identidade institucional consultada: 1937–2020; morte 2020-08-03. Sem codificação de eixo; Nobel facts consultado por corpo indexado quando abertura bloqueada."
      }
    ],
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
      "dip": 40,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "dip": "medium"
    },
    "axisEvidence": {
      "dip": {
        "sourceTitles": [
          "MIT: Hume urges peaceful solutions"
        ],
        "rationale": "Defende diálogo para resolver conflitos e afirma que bombas e armas aprofundam divisões. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Citações de palestra; não leitura do discurso integral nem política militar inteira."
      }
    },
    "coding": {
      "dip": {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "MIT: Hume urges peaceful solutions",
            "publishedDate": "2001-10-15",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "Citações diretas: no peace without dialogue; gun and bomb",
            "statement": "Defende diálogo para resolver conflitos e afirma que bombas e armas aprofundam divisões."
          }
        ],
        "rationale": "Defende diálogo para resolver conflitos e afirma que bombas e armas aprofundam divisões.",
        "uncertainty": "Citações de palestra; não leitura do discurso integral nem política militar inteira.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "diplomacia_02"
        ],
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      }
    }
  },
  "kim-dae-jung": {
    "id": "kim-dae-jung",
    "name": "Kim Dae-jung",
    "aliases": [
      "Kim Dae Jung"
    ],
    "kind": "person",
    "category": "historical-figure",
    "period": "Nobel Lecture: raízes asiáticas da democracia, 2000-12-10",
    "rationale": "Recorte documental: apenas passagens identificadas; eixos desconhecidos em 50.",
    "caveats": "Nobel registra nascimento gregoriano em 1924. Mercado em frase geral não estabelece propriedade ou alocação. 1924–2009; morte 2009-08-18.",
    "sources": [
      {
        "title": "CALD: Asia on Democracy — trecho de Kim Dae Jung",
        "url": "https://cald.org/about/asia-on-democracy/",
        "note": "Corpo da página direta efetivamente lido; somente passagem autoral identificada."
      },
      {
        "title": "Identidade e vida — Kim Dae-jung",
        "url": "https://www.nobelprize.org/prizes/peace/2000/dae-jung/facts/",
        "note": "Identidade institucional consultada: 1924–2009; morte 2009-08-18. Sem codificação de eixo; Nobel facts consultado por corpo indexado quando abertura bloqueada."
      }
    ],
    "vec": {
      "est": 50,
      "rep": 60,
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
    "evidence": {
      "rep": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "CALD: Asia on Democracy — trecho de Kim Dae Jung"
        ],
        "rationale": "Defende governo representativo em Myanmar e instituições democráticas e eleições em Timor-Leste. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Trecho reproduzido pela CALD; não leitura integral da palestra nem avaliação de seu governo."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "CALD: Asia on Democracy — trecho de Kim Dae Jung",
            "publishedDate": "2000-12-10",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "Seção PRESIDENT KIM DAE JUNG: Myanmar, East Timor, democratic institutions",
            "statement": "Defende governo representativo em Myanmar e instituições democráticas e eleições em Timor-Leste."
          }
        ],
        "rationale": "Defende governo representativo em Myanmar e instituições democráticas e eleições em Timor-Leste.",
        "uncertainty": "Trecho reproduzido pela CALD; não leitura integral da palestra nem avaliação de seu governo.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "representacao_07"
        ],
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      }
    }
  },
  "joseph-rotblat": {
    "id": "joseph-rotblat",
    "name": "Joseph Rotblat",
    "aliases": [
      "Józef Rotblat",
      "Josef Rotblat"
    ],
    "kind": "person",
    "category": "historical-figure",
    "period": "Remember Your Humanity, 1995; reprodução 2023-07-21",
    "rationale": "Recorte documental: apenas passagens identificadas; eixos desconhecidos em 50.",
    "caveats": "Portside é anfitrião editorial de reprodução, não instituição primária. Apenas texto identificado como palestra é usado; obituário introdutório excluído. 1908–2005; morte 2005-08-31.",
    "sources": [
      {
        "title": "Portside: reprodução Nobel Lecture — Remember Your Humanity",
        "url": "https://portside.org/2023-07-21/manhattan-project-scientist-who-quit",
        "note": "Corpo da página direta efetivamente lido; somente passagem autoral identificada."
      },
      {
        "title": "Identidade e vida — Joseph Rotblat",
        "url": "https://pugwash.org/pugwash-history/joseph-rotblat/",
        "note": "Identidade institucional consultada diretamente no corpo Pugwash: 1908–2005; morte 2005-08-31. Sem codificação de eixo."
      }
    ],
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
      "dip": 40,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "dip": "medium"
    },
    "axisEvidence": {
      "dip": {
        "sourceTitles": [
          "Portside: reprodução Nobel Lecture — Remember Your Humanity"
        ],
        "rationale": "Defende convenção universal de proibição nuclear, compromisso de não primeiro uso e redução negociada a zero. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Admite armamentos convencionais para conflitos ordinários; não pacifismo militar absoluto."
      }
    },
    "coding": {
      "dip": {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Portside: reprodução Nobel Lecture — Remember Your Humanity",
            "publishedDate": "1995; reprodução 2023-07-21",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "Bloco Nobel Lecture, parágrafos sobre convenção, não primeiro uso e redução a zero",
            "statement": "Defende convenção universal de proibição nuclear, compromisso de não primeiro uso e redução negociada a zero."
          }
        ],
        "rationale": "Defende convenção universal de proibição nuclear, compromisso de não primeiro uso e redução negociada a zero.",
        "uncertainty": "Admite armamentos convencionais para conflitos ordinários; não pacifismo militar absoluto.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "diplomacia_02"
        ],
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      }
    }
  },
  "ella-baker": {
    "id": "ella-baker",
    "name": "Ella Baker",
    "aliases": [
      "Ella Josephine Baker"
    ],
    "kind": "person",
    "category": "historical-figure",
    "period": "Letter to Democratic Convention Delegates, 1964-07-20",
    "rationale": "Recorte documental: apenas passagens identificadas; eixos desconhecidos em 50.",
    "caveats": "Carta assinada e digitalizada atribuída por SNCC Digital Gateway a Baker. Não transforma a biografia editorial ou frase sobre liderança em mapa político. 1903–1986; morte 1986-12-13.",
    "sources": [
      {
        "title": "Ella Baker: carta aos delegados democratas (1964)",
        "url": "https://www.crmvet.org/docs/640720_mfdp_letter.pdf",
        "note": "PDF digitalizado efetivamente lido, página1 completa com assinatura."
      },
      {
        "title": "Identidade e vida — Ella Baker",
        "url": "https://snccdigital.org/people/ella-baker/",
        "note": "Identidade institucional consultada diretamente no corpo SNCC Digital Gateway: 1903–1986; morte 1986-12-13. Sem codificação de eixo."
      }
    ],
    "vec": {
      "est": 50,
      "rep": 60,
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
    "evidence": {
      "rep": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Ella Baker: carta aos delegados democratas (1964)"
        ],
        "rationale": "Defende direito dos governados a escolher governantes e representação eleitoral sem exclusão racial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Carta de disputa de credenciais partidárias, não plataforma completa de instituições."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Ella Baker: carta aos delegados democratas (1964)",
            "publishedDate": "1964-07-20",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "p.1, parágrafos right of the governed, all the people, open hearing; assinatura",
            "statement": "Defende direito dos governados a escolher governantes e representação eleitoral sem exclusão racial."
          }
        ],
        "rationale": "Defende direito dos governados a escolher governantes e representação eleitoral sem exclusão racial.",
        "uncertainty": "Carta de disputa de credenciais partidárias, não plataforma completa de instituições.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "representacao_07"
        ],
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      }
    }
  },
  "na-john-adams": {
    "id": "na-john-adams",
    "name": "John Adams",
    "aliases": [],
    "kind": "person",
    "category": "historical-figure",
    "period": "Programa inaugural4/3/1797; contraponto legal1798 explícito",
    "rationale": "Comparação documental de duas declarações políticas datadas. Não codifica toda a presidência1797–1801 ou práticas universais.",
    "caveats": "1735-10-30–1826-07-04, National Archives corpo52. A redação1779 é relatório de comissão preparado principalmente por Adams, com alterações não inteiramente recuperáveis; artigoIII sobre culto de autoria incerta não fundamenta rel. Direitos civis1779 não equivalem à política posterior: Adams aprovou em1798 deportação por decisão presidencial e criminalização de escritos políticos, transcrição assinada efetivamente lida. Recortes distintos devem permanecer visíveis; não vetor uniforme da carreira. Eleitorado qualificado masculino; elogios ao sistema não provam igualdade factual.",
    "sources": [
      {
        "title": "Inaugural Address, 1797",
        "url": "https://www.presidency.ucsb.edu/documents/inaugural-address-21",
        "note": "Transcrição do discurso de posse de Adams, uma fonte primária para seu programa presidencial inicial."
      },
      {
        "title": "Adams — Inaugural Address, 1797",
        "url": "https://avalon.law.yale.edu/18th_century/adams.asp",
        "note": "Corpo44–70 integral lido; data4/3/1797. Somente programa explicitamente adotado pelo orador."
      },
      {
        "title": "Adams — Report of a Constitution, 1779, edição Charles Francis Adams",
        "url": "https://oll-resources.s3.us-east-2.amazonaws.com/oll3/store/titles/2102/Adams_1431-04_EBk_v6.0.pdf",
        "note": "OLL reprodução1856/ebook2011. Nota editorial de autoria6094–6130 e6171–6179 efetivamente lida: relatório preparado por Adams, modificado pela comissão; autoria artigoIII incerta. Corpo6182–6277,6290–6348 e6356–6421 lido; lacunas6278–6289/6349–6355 não reivindicadas. Direito de expressão6314–6316, busca6302–6309, julgamento6290–6301 e punições6356–6357."
      },
      {
        "title": "National Archives — Alien and Sedition Acts, contraponto1798",
        "url": "https://www.archives.gov/milestone-documents/alien-and-sedition-acts",
        "note": "Transcrições69–129 efetivamente lidas, assinatura Adams91–93/127–129. Não autoria legislativa exclusiva: aprovação presidencial. Contraponto forte ao programa anterior, não usado para ocultar coerção ou proclamar liberdade da presidência inteira."
      },
      {
        "title": "National Archives — Signers fact sheet, identidade John Adams",
        "url": "https://www.archives.gov/founding-docs/signers-factsheet",
        "note": "Tabela institucional52 efetivamente lida confirma1735-10-30–1826-07-04. Compilação bibliográfica institucional, não texto autobiográfico; não produz scores."
      }
    ],
    "vec": {
      "est": 60,
      "rep": 60,
      "pod": 50,
      "imi": 50,
      "dip": 40,
      "int": 60,
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
      "dip": "medium",
      "int": "medium",
      "rel": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Adams — Inaugural Address, 1797"
        ],
        "rationale": "A divisão territorial de autoridade é defendida em programa nacional amplo, mantendo a Constituição federal. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Critica fragilidade da Confederação48; não autonomia absoluta ou secessão."
      },
      "rep": {
        "sourceTitles": [
          "Adams — Inaugural Address, 1797"
        ],
        "rationale": "O fundamento geral do governo é a representação eleitoral, não somente sua própria eleição. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Franquia histórica excludente; sua retórica não prova inclusão universal."
      },
      "dip": {
        "sourceTitles": [
          "Adams — Inaugural Address, 1797"
        ],
        "rationale": "Norma geral para relações internacionais e solução de divergências, admitindo encaminhamento ao Legislativo quando negociação falha. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Admite outras medidas parlamentares se negociação falhar; não pacifismo absoluto ou descrição de toda a presidência."
      },
      "int": {
        "sourceTitles": [
          "Adams — Inaugural Address, 1797"
        ],
        "rationale": "A neutralidade é apresentada como política externa geral, e não simples oposição a um conflito particular. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Congresso pode alterar neutralidade; não proibição absoluta de intervenção."
      },
      "rel": {
        "sourceTitles": [
          "Adams — Inaugural Address, 1797"
        ],
        "rationale": "Religião entra explicitamente no critério normativo de autoridade pública, além da devoção pessoal do fechamento. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não requisito legal exclusivo nem igreja oficial; amor a pessoas de todas denominações no mesmo programa. ArtigoIII1779 excluído por autoria incerta."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Adams — Inaugural Address, 1797",
            "publishedDate": "1797-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo66: constituições estaduais, cautela perante seus governos",
            "statement": "Defende respeito aos governos e constituições dos Estados e igualdade entre eles dentro da União."
          }
        ],
        "rationale": "A divisão territorial de autoridade é defendida em programa nacional amplo, mantendo a Constituição federal.",
        "uncertainty": "Critica fragilidade da Confederação48; não autonomia absoluta ou secessão.",
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "rep": {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Adams — Inaugural Address, 1797",
            "publishedDate": "1797-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo53/57–62/66: eleições, poder popular e alteração constitucional",
            "statement": "Defende autoridade derivada do povo, eleições regulares e alteração constitucional pelo povo e seus representantes."
          }
        ],
        "rationale": "O fundamento geral do governo é a representação eleitoral, não somente sua própria eleição.",
        "uncertainty": "Franquia histórica excludente; sua retórica não prova inclusão universal.",
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "dip": {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Adams — Inaugural Address, 1797",
            "publishedDate": "1797-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo66: paz com todas as nações, reparação por negociação",
            "statement": "Prefere manter paz e resolver danos comerciais por negociação amistosa."
          }
        ],
        "rationale": "Norma geral para relações internacionais e solução de divergências, admitindo encaminhamento ao Legislativo quando negociação falha.",
        "uncertainty": "Admite outras medidas parlamentares se negociação falhar; não pacifismo absoluto ou descrição de toda a presidência.",
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "int": {
        "axis": "int",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Adams — Inaugural Address, 1797",
            "publishedDate": "1797-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo62/66: influência externa, neutralidade e imparcialidade",
            "statement": "Defende independência do governo perante influência estrangeira e neutralidade entre beligerantes."
          }
        ],
        "rationale": "A neutralidade é apresentada como política externa geral, e não simples oposição a um conflito particular.",
        "uncertainty": "Congresso pode alterar neutralidade; não proibição absoluta de intervenção.",
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "rel": {
        "axis": "rel",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Adams — Inaugural Address, 1797",
            "publishedDate": "1797-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo66: respeito à religião cristã como recomendação para serviço público",
            "statement": "Considera respeito ao cristianismo uma das melhores recomendações para exercer serviço público."
          }
        ],
        "rationale": "Religião entra explicitamente no critério normativo de autoridade pública, além da devoção pessoal do fechamento.",
        "uncertainty": "Não requisito legal exclusivo nem igreja oficial; amor a pessoas de todas denominações no mesmo programa. ArtigoIII1779 excluído por autoria incerta.",
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      }
    }
  }
};

export const legacyHistoricalQuality15Descriptions:Record<string,string>={
  "ricardo-flores-magon": "O programa coletivo defende eleições, liberdades civis, ensino laico e redistribuição de terras, mas exclui imigrantes chineses.",
  "fidel-castro": "Propõe restaurar eleições, nacionalizar eletricidade e telefonia e financiar a indústria, após concentrar poderes revolucionários.",
  "mustafa-kemal-ataturk": "Define estatismo como atuação econômica do Estado combinada à iniciativa privada, sem excluir empresas particulares.",
  "sukarno-1945-pancasila": "Defende mediação pela paz e convivência entre etnias e religiões, vinculando a diversidade à unidade nacional.",
  "mohammad-hatta": "Defende cooperativas e indústria pública, com prioridades produtivas definidas pelo governo e espaço para empresas privadas.",
  "vladimir-lenin": "Propõe propriedade comum e controle estatal de trabalho e consumo, com repressão dos exploradores na transição socialista.",
  "leon-trotsky": "Subordina a democracia revolucionária à direção da vanguarda proletária organizada no Partido Comunista.",
  "clr-james": "Defende governo popular direto, capacidade política do cidadão comum e liberdade de discussão, usando Atenas como argumento.",
  "jose-carlos-mariategui": "Defende propriedade agrária comunal e emancipação indígena, rejeitando hierarquias raciais e assimilação por branqueamento.",
  "harriet-taylor-mill": "Defende sufrágio feminino, igualdade civil e profissional e liberdade das mulheres para escolher ocupações e trajetórias.",
  "ralph-bunche": "Rejeita a guerra preventiva e exige esgotar os recursos honrosos para preservar a paz antes de recorrer à guerra.",
  "na-lester-b-pearson": "Defende consenso entre Estados contra a força unilateral e a predação, associando a paz à capacidade de defesa.",
  "sean-macbride": "Propõe desarmamento geral, arbitragem e jurisdição internacional, admitindo força limitada para manter a paz.",
  "andrei-sakharov": "Defende liberdades civis, desarmamento verificável e pesquisa genética e industrial com testes e controle de riscos.",
  "mother-teresa": "Condena o aborto e promove abstinência e planejamento familiar natural, em argumentos sobre vida humana e família.",
  "albert-schweitzer": "Defende rejeitar eticamente a guerra e criar instituições de paz, mantendo o direito de preparar a defesa.",
  "willy-brandt": "Rejeita a guerra como meio político e defende diálogo entre fronteiras, mantendo a presença ocidental em Berlim.",
  "emily-greene-balch": "Defende renunciar à guerra e conter provocações entre Estados, admitindo segurança coletiva e força armada limitada.",
  "linus-pauling": "Propõe substituir a guerra pelo direito mundial e por tratados que proíbam testes nucleares.",
  "norman-angell": "Defende direito e segurança coletiva contra a competição militar entre Estados, admitindo coerção contra a violência.",
  "rene-cassin": "Defende liberdades civis, políticas e religiosas numa sociedade democrática, rejeitando a onipotência do Estado totalitário.",
  "john-hume": "Defende diálogo para resolver conflitos e rejeita bombas e armas como caminhos para superar divisões.",
  "kim-dae-jung": "Defende governo representativo em Myanmar e instituições democráticas e eleições em Timor-Leste.",
  "joseph-rotblat": "Defende proibir armas nucleares e negociar sua redução a zero, admitindo armamentos convencionais para outros conflitos.",
  "ella-baker": "Defende o direito dos governados de escolher governantes e a representação eleitoral sem exclusão racial.",
  "na-john-adams": "Defende representação popular e autonomia estadual, paz e neutralidade externa; valoriza o cristianismo no serviço público."
};

export function reconcileLegacyHistoricalQuality15(entry:ReferenceEntry):ReferenceEntry {
 const original=legacyHistoricalQuality15OriginalRecords[entry.id];
 if(!original || JSON.stringify(entry)!==JSON.stringify(original))return entry;
 return {...entry,rationale:legacyHistoricalQuality15Descriptions[entry.id]};
}
