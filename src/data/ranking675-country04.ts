import type {ReferenceEntry,ReferenceSource} from './references';
import {codeReferenceAxis,type ReferenceAxisCoding} from '../lib/reference-coding';

export const ranking675Country04Before = [
  {
    "id": "denmark",
    "kind": "country",
    "category": "country",
    "name": "Dinamarca",
    "period": "Texto constitucional de 1953, edição republicada de 1992 arquivada em 2023; narrativa FH2025 sobre 2024; tratado europeu de 2016",
    "vec": {
      "est": 50,
      "rep": 80,
      "pod": 40,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 40,
      "rel": 40,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Texto constitucional prevê responsabilidade parlamentar do governo e garantias de expressão e associação, com Igreja Luterana estabelecida e liberdade religiosa.",
    "caveats": "Texto antigo não certifica mudanças sucessórias de 2009 nem consolidação atual. Deportação, privacidade e coerção são contrapontos narrados separadamente; regime europeu não se estende automaticamente à Groenlândia. Fontes legais e narrativas de prática têm datas e alcances distintos. Descrição documental limitada, sem certificar toda legislação ou prática atual.",
    "sources": [
      {
        "title": "Freedom in the World — Dinamarca",
        "url": "https://freedomhouse.org/country/denmark/freedom-world/2025",
        "note": "Democracia e liberdades."
      },
      {
        "title": "OECD Government at a Glance 2025",
        "url": "https://www.oecd.org/en/publications/government-at-a-glance-2025_0efd0bcd-en.html",
        "note": "Papel do governo e gasto público."
      },
      {
        "title": "Freedom in the World 2025 — Dinamarca",
        "url": "https://freedomhouse.org/country/denmark/freedom-world/2025",
        "note": "Prática institucional relatada na edição 2025; itens localizados e contraevidências registrados por eixo. Relatório abreviado; seu score não é convertido em vetor."
      },
      {
        "title": "TFUE — versão consolidada de 2016, EUR-Lex",
        "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:12016E/TXT",
        "note": "Texto primário: regras da união aduaneira e política comercial; não mede barreiras efetivamente aplicadas em cada setor."
      },
      {
        "title": "Constituição dinamarquesa — texto primário de 1953, acervo University of Minnesota",
        "url": "https://hrlibrary.umn.edu/research/denmark-constitution.html",
        "note": "Documento primário reproduzido; status editorial de 1992, arquivo fechado em 2023. Não representa atualização integral de todos os atos e sucessão dinástica de 2009; usada somente nas cláusulas localizadas."
      }
    ],
    "evidence": {
      "rep": "high",
      "pod": "medium",
      "com": "medium",
      "rel": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constituição dinamarquesa — texto primário de 1953, acervo University of Minnesota",
          "Freedom in the World 2025 — Dinamarca"
        ],
        "rationale": "Representação parlamentar e prática eleitoral sustentam direção democrática forte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: A monarquia constitucional não elimina eleição e responsabilidade ministerial."
      },
      "pod": {
        "sourceTitles": [
          "Constituição dinamarquesa — texto primário de 1953, acervo University of Minnesota",
          "Freedom in the World 2025 — Dinamarca"
        ],
        "rationale": "Liberdades protegidas com déficits concretos sustentam direção moderada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Contraevidências sobre deportações, vigilância e coerção impedem um extremo libertário."
      },
      "com": {
        "sourceTitles": [
          "TFUE — versão consolidada de 2016, EUR-Lex"
        ],
        "rationale": "Abertura comercial regulada no quadro da UE sustenta direção moderada de livre comércio. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não equivale a ausência de tarifas; são regras comuns, não preferências da população nem medição nacional de comércio. Groenlândia possui regime territorial próprio."
      },
      "rel": {
        "sourceTitles": [
          "Constituição dinamarquesa — texto primário de 1953, acervo University of Minnesota"
        ],
        "rationale": "Estabelecimento religioso com pluralismo sustenta papel público religioso moderado. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não é teocracia nem crença atribuída aos habitantes; substitui a antiga direção secular forte sem medir religiosidade."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Constituição dinamarquesa — texto primário de 1953, acervo University of Minnesota",
            "locator": "Seções 15 e 29–31",
            "statement": "Governo responsável ao Parlamento e eleições diretas.",
            "basis": "norm",
            "publishedDate": "1953-06-05; edição 1992",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Freedom in the World 2025 — Dinamarca",
            "locator": "Overview",
            "statement": "Democracia com eleições regulares livres e justas é descrita.",
            "basis": "practice",
            "publishedDate": "Edição 2025",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Representação parlamentar e prática eleitoral sustentam direção democrática forte.",
        "uncertainty": "A monarquia constitucional não elimina eleição e responsabilidade ministerial.",
        "reviewedOn": "2026-10-07",
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
            "sourceTitle": "Constituição dinamarquesa — texto primário de 1953, acervo University of Minnesota",
            "locator": "Seções 71 e 77–79",
            "statement": "Proteção da liberdade, publicação, associação e reunião.",
            "basis": "norm",
            "publishedDate": "1953-06-05; edição 1992",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Freedom in the World 2025 — Dinamarca",
            "locator": "Overview; Key Developments in 2024, deportações, dados sociais e deficiência",
            "statement": "Expressão, associação e Judiciário independente coexistem com violações na deportação, privacidade e coerção.",
            "basis": "practice",
            "publishedDate": "Edição 2025",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Liberdades protegidas com déficits concretos sustentam direção moderada.",
        "uncertainty": "Contraevidências sobre deportações, vigilância e coerção impedem um extremo libertário.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "com": {
        "axis": "com",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "TFUE — versão consolidada de 2016, EUR-Lex",
            "locator": "Artigos 28(1), 34 e 206–207",
            "statement": "Elimina barreiras internas; prevê redução de barreiras externas, com tarifa comum e defesa comercial.",
            "basis": "norm",
            "publishedDate": "2016-06-07",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Abertura comercial regulada no quadro da UE sustenta direção moderada de livre comércio.",
        "uncertainty": "Não equivale a ausência de tarifas; são regras comuns, não preferências da população nem medição nacional de comércio. Groenlândia possui regime territorial próprio.",
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
        "claims": [
          {
            "sourceTitle": "Constituição dinamarquesa — texto primário de 1953, acervo University of Minnesota",
            "locator": "Seções 4, 6 e 67–70",
            "statement": "Igreja luterana estabelecida e apoiada pelo Estado, com liberdade de culto e direitos civis.",
            "basis": "norm",
            "publishedDate": "1953-06-05; edição 1992",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Estabelecimento religioso com pluralismo sustenta papel público religioso moderado.",
        "uncertainty": "Não é teocracia nem crença atribuída aos habitantes; substitui a antiga direção secular forte sem medir religiosidade.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      }
    }
  },
  {
    "id": "india",
    "kind": "country",
    "category": "country",
    "name": "Índia",
    "period": "Constituição oficial atualizada em 01/05/2024; mandato NITI sem data editorial consultado em 2026; narrativa FH2025 sobre 2024, exceto Caxemira administrada pela Índia",
    "vec": {
      "est": 60,
      "rep": 60,
      "pod": 60,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 60,
      "com": 50,
      "rel": 60,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Normas distribuem competências legislativas entre União e estados e limitam estabelecimento e ensino religioso, com garantias sujeitas às exceções constitucionais.",
    "caveats": "Poderes residuais e prevalências nacionais limitam estados. Mandato estratégico não comprova execução geral; educação gratuita ou uma rede pública não define orientação econômica nacional. FH exclui Caxemira administrada pela Índia. Fontes legais e narrativas de prática têm datas e alcances distintos. Descrição documental limitada, sem certificar toda legislação ou prática atual.",
    "sources": [
      {
        "title": "Freedom in the World 2025 — India",
        "url": "https://freedomhouse.org/country/india/freedom-world/2025",
        "note": "Eleições, federalismo, restrições cívicas, tratamento de minorias e liberdades."
      },
      {
        "title": "The Constitution of India — Legislative Department",
        "url": "https://legislative.gov.in/constitution-of-india/",
        "note": "Fonte primária para a república, federação, direitos fundamentais e caráter secular constitucional."
      },
      {
        "title": "Freedom in the World 2025 — Índia",
        "url": "https://freedomhouse.org/country/india/freedom-world/2025",
        "note": "Narrativa institucional de 2024 lida; pontuações agregadas e respostas numéricas não são convertidas em eixos."
      },
      {
        "title": "Constituição da Índia — edição oficial em 01/05/2024",
        "url": "https://cdnbbsr.s3waas.gov.in/s380537a945c7aaa788ccfcdf1b99b5d8f/uploads/2024/07/20240716890312078.pdf",
        "note": "PDF oficial de 402 páginas, atualizado até a 106ª emenda de 2023; não apresentado como consolidação de 2026."
      },
      {
        "title": "NITI Aayog — Objectives and Features",
        "url": "https://www.niti.gov.in/about-us/objectives-and-features",
        "note": "Página primária sem data editorial: mandato de estratégias econômicas, planos locais, coordenação setorial e monitoramento; consulta 07/10/2026."
      },
      {
        "title": "Kendriya Vidyalayas — Ministry of Education / PIB, 06/12/2024",
        "url": "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2081686&lang=2&reg=48",
        "note": "Corpo primário datado efetivamente lido:1256KVs funcionais e rede CentralSchools criada como unidade ministerial. Aprovação de85novas para2025–26 não é execução contada."
      },
      {
        "title": "Reimbursements under Right to Education — Rajya Sabha, 22/03/2023",
        "url": "https://sansad.in/getFile/annex/259/AU2435.pdf?source=pqars",
        "note": "Resposta ministerial primária,p.1: reembolso a escolas privadas não subsidiadas comprova contraponto de provedores privados; não medimos participação nacional."
      }
    ],
    "evidence": {
      "est": "medium",
      "rep": "medium",
      "pod": "medium",
      "rel": "medium",
      "con": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Constituição da Índia — edição oficial em 01/05/2024"
        ],
        "rationale": "Competências territoriais efetivas com supremacia nacional relevante sustentam federalismo moderado. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não afirma igualdade de poderes; exceções de intervenção nacional são preservadas."
      },
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — Índia"
        ],
        "rationale": "Competição e representação efetivas sustentam a direção democrática neste recorte. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Competição real coexiste com assimetria eleitoral, interferência executiva e restrições oposicionistas; não deriva do rótulo de liberdade."
      },
      "pod": {
        "sourceTitles": [
          "Freedom in the World 2025 — Índia"
        ],
        "rationale": "Coerção e restrições efetivas sustentam direção autoritária moderada neste recorte. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não transforma violência privada em posição estatal; garantias normativas e variação regional permanecem."
      },
      "rel": {
        "sourceTitles": [
          "Constituição da Índia — edição oficial em 01/05/2024",
          "Freedom in the World 2025 — Índia"
        ],
        "rationale": "Limites concretos ao estabelecimento religioso sustentam direção secular parcial, estritamente normativa. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não é média de secularismo e violência nem simples rótulo; exceções educacionais, leis de conversão e déficits efetivos são preservados."
      },
      "con": {
        "sourceTitles": [
          "NITI Aayog — Objectives and Features"
        ],
        "rationale": "Coordenação estratégica pública de desenvolvimento sustenta planejamento parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Mandato declarado não prova comando da produção, execução, participação econômica ou resultados; não infere tecnocracia."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constituição da Índia — edição oficial em 01/05/2024",
            "locator": "Artigos 246 e 248–251; pp. 175–177 do PDF",
            "statement": "Listas definem poderes estaduais; União mantém competências residuais e exceções de interesse nacional e emergência.",
            "basis": "norm",
            "publishedDate": "Edição 2024-05-01",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Competências territoriais efetivas com supremacia nacional relevante sustentam federalismo moderado.",
        "uncertainty": "Não afirma igualdade de poderes; exceções de intervenção nacional são preservadas.",
        "reviewedOn": "2026-10-07",
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
            "sourceTitle": "Freedom in the World 2025 — Índia",
            "locator": "Overview; A1–A3, eleição nacional e limitações à oposição",
            "statement": "Eleição competitiva reduziu a bancada do partido governista, com prisões de opositores e bloqueio de recursos antes do pleito.",
            "basis": "practice",
            "publishedDate": "Edição 2025; acontecimentos de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Competição e representação efetivas sustentam a direção democrática neste recorte.",
        "uncertainty": "Competição real coexiste com assimetria eleitoral, interferência executiva e restrições oposicionistas; não deriva do rótulo de liberdade.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "pod": {
        "axis": "pod",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Freedom in the World 2025 — Índia",
            "locator": "F2–F3, detenção, tortura e autorização para processar agentes",
            "statement": "Longas detenções e impunidade de abusos limitam aplicação de garantias.",
            "basis": "practice",
            "publishedDate": "Edição 2025; acontecimentos de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Coerção e restrições efetivas sustentam direção autoritária moderada neste recorte.",
        "uncertainty": "Não transforma violência privada em posição estatal; garantias normativas e variação regional permanecem.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "rel": {
        "axis": "rel",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constituição da Índia — edição oficial em 01/05/2024",
            "locator": "Artigos 27–28; pp. 45 do PDF",
            "statement": "Proíbe imposto destinado a religião específica e instrução religiosa em instituições inteiramente estatais, com exceções.",
            "basis": "norm",
            "publishedDate": "Edição 2024-05-01",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Freedom in the World 2025 — Índia",
            "locator": "D2, narrativa sobre conversão e minorias",
            "statement": "Leis de conversão e violência contra minorias limitam a liberdade religiosa.",
            "basis": "practice",
            "publishedDate": "Edição 2025; acontecimentos de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Limites concretos ao estabelecimento religioso sustentam direção secular parcial, estritamente normativa.",
        "uncertainty": "Não é média de secularismo e violência nem simples rótulo; exceções educacionais, leis de conversão e déficits efetivos são preservados.",
        "reviewedOn": "2026-10-07",
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
            "sourceTitle": "NITI Aayog — Objectives and Features",
            "locator": "Objectives and Features: economic strategy; strategic frameworks; inter-sectoral issues; monitoring",
            "statement": "Órgão público formula estratégias econômicas, planos e programas e coordena implementação setorial.",
            "basis": "declaration",
            "publishedDate": "Página sem data editorial, consultada em 2026-10-07",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Coordenação estratégica pública de desenvolvimento sustenta planejamento parcial.",
        "uncertainty": "Mandato declarado não prova comando da produção, execução, participação econômica ou resultados; não infere tecnocracia.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      }
    },
    "unknownAxisReasons": {
      "eco": "Direito21A, rede escolarKVS e reembolso privadoRTE são fatos setoriais; sem evidência suficiente da orientação de toda economia. 50 desconhecido, sem evidência."
    },
    "educationResearch": {
      "status": "quarantined-sector-scope",
      "reviewedOn": "2026-10-07",
      "independentDocumentaryRead": "PIB corpo17–27 independentemente relido; aceitação dos fatos não valida orientação econômica nacional.",
      "reason": "Rede pública KVS e direito21A não estabelecem composição ou orientação de toda economia. Eco50 desconhecido sem evidência/codificação.",
      "sourceClaims": [
        {
          "sourceTitle": "Kendriya Vidyalayas — Ministry of Education / PIB, 06/12/2024",
          "locator": "Corpo, parágrafos1–7: CentralSectorScheme, KVs funcionais, organização ministerial e operação Sangathan",
          "statement": "Comunicado ministerial de dezembro2024 registra1256KVs funcionais e rede CentralSchools criada como unidade do Ministério, com normas Sangathan para operação; ampliação aprovada é futura.",
          "basis": "practice",
          "publishedDate": "2024-12-06",
          "accessedDate": "2026-10-07"
        },
        {
          "sourceTitle": "Reimbursements under Right to Education — Rajya Sabha, 22/03/2023",
          "locator": "Página1, resposta(a)–(b), Section12(2) e12(1)(c)",
          "statement": "Ministério descreve reembolso público a escolas privadas não subsidiadas por vagasRTE, distinguindo financiamento público de provedor estatal.",
          "basis": "practice",
          "publishedDate": "2023-03-22",
          "accessedDate": "2026-10-07"
        }
      ]
    }
  },
  {
    "id": "andorra-current-2025",
    "name": "Andorra",
    "aliases": [],
    "kind": "country",
    "category": "country",
    "period": "Constituição de 1993 oferecida pelo Parlamento em 2026; narrativa FH2025 sobre 2024; descrição aduaneira de 24/11/2021 e autorização de 16/07/2026",
    "vec": {
      "est": 40,
      "rep": 80,
      "pod": 40,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 40,
      "rel": 40,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "rep": "high",
      "est": "medium",
      "rel": "medium",
      "pod": "medium",
      "com": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — Andorra"
        ],
        "rationale": "Eleições parlamentares regulares consideradas livres e justas. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Naturalização restritiva exclui muitos residentes do sufrágio; não codificamos integração cultural a partir de cidadania."
      },
      "est": {
        "sourceTitles": [
          "Texto constitucional — Andorra / portal oficial"
        ],
        "rationale": "Conselhos locais eleitos têm autogoverno, orçamento, tributação e competências de planejamento e serviços comunais. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Autonomia local substantiva dentro de leis nacionais; não é estrutura federativa nem avaliação de execução. Escopo temporal: 1993, texto oferecido pelo Parlamento em consulta de 2026; sem certificação independente de consolidação."
      },
      "rel": {
        "sourceTitles": [
          "Texto constitucional — Andorra / portal oficial"
        ],
        "rationale": "Liberdade religiosa coexistindo com cooperação especial com Igreja Católica e bispo entre os copríncipes. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Privilégio institucional não demonstra que toda legislação seja religiosa nem crenças individuais. Escopo temporal: 1993, texto oferecido pelo Parlamento em consulta de 2026; sem certificação independente de consolidação."
      },
      "pod": {
        "sourceTitles": [
          "Texto constitucional — Andorra / portal oficial"
        ],
        "rationale": "Proíbe morte e tortura, assegura defesa e exige controle judicial da detenção e ingresso domiciliar. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Garantias processuais normativas, sem demonstrar todas as políticas de armas, drogas ou vigilância; exceções emergenciais no artigo 42. Escopo temporal: 1993, texto oferecido pelo Parlamento em consulta de 2026; sem certificação independente de consolidação."
      },
      "com": {
        "sourceTitles": [
          "EEAS — relações aduaneiras com Andorra",
          "Conselho da UE — autorização de acordo com Andorra e San Marino"
        ],
        "rationale": "Integração aduaneira datada e ampliação comercial expressamente negociada sustentam abertura parcial. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Declaração de2021 não certifica regime atual; autorização de2026 não comprova assinatura, ratificação ou aplicação. Não afirma adesão à UE."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Freedom in the World 2025 — Andorra",
            "locator": "Overview; Key Developments in 2024",
            "statement": "Eleições parlamentares regulares consideradas livres e justas.",
            "basis": "practice",
            "publishedDate": "2025; observações de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Eleições parlamentares regulares consideradas livres e justas.",
        "uncertainty": "Naturalização restritiva exclui muitos residentes do sufrágio; não codificamos integração cultural a partir de cidadania.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "est": {
        "axis": "est",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Texto constitucional — Andorra / portal oficial",
            "locator": "Artigos 79–80",
            "statement": "Conselhos locais eleitos têm autogoverno, orçamento, tributação e competências de planejamento e serviços comunais.",
            "basis": "norm",
            "publishedDate": "1993, texto oferecido pelo Parlamento em consulta de 2026; sem certificação independente de consolidação",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Conselhos locais eleitos têm autogoverno, orçamento, tributação e competências de planejamento e serviços comunais.",
        "uncertainty": "Autonomia local substantiva dentro de leis nacionais; não é estrutura federativa nem avaliação de execução. Escopo temporal: 1993, texto oferecido pelo Parlamento em consulta de 2026; sem certificação independente de consolidação.",
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
        "claims": [
          {
            "sourceTitle": "Texto constitucional — Andorra / portal oficial",
            "locator": "Artigos 11(1)–(3) e 43(2)",
            "statement": "Liberdade religiosa coexistindo com cooperação especial com Igreja Católica e bispo entre os copríncipes.",
            "basis": "norm",
            "publishedDate": "1993, texto oferecido pelo Parlamento em consulta de 2026; sem certificação independente de consolidação",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Liberdade religiosa coexistindo com cooperação especial com Igreja Católica e bispo entre os copríncipes.",
        "uncertainty": "Privilégio institucional não demonstra que toda legislação seja religiosa nem crenças individuais. Escopo temporal: 1993, texto oferecido pelo Parlamento em consulta de 2026; sem certificação independente de consolidação.",
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
            "sourceTitle": "Texto constitucional — Andorra / portal oficial",
            "locator": "Artigos 8–10 e 15",
            "statement": "Proíbe morte e tortura, assegura defesa e exige controle judicial da detenção e ingresso domiciliar.",
            "basis": "norm",
            "publishedDate": "1993, texto oferecido pelo Parlamento em consulta de 2026; sem certificação independente de consolidação",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Proíbe morte e tortura, assegura defesa e exige controle judicial da detenção e ingresso domiciliar.",
        "uncertainty": "Garantias processuais normativas, sem demonstrar todas as políticas de armas, drogas ou vigilância; exceções emergenciais no artigo 42. Escopo temporal: 1993, texto oferecido pelo Parlamento em consulta de 2026; sem certificação independente de consolidação.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "com": {
        "axis": "com",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "EEAS — relações aduaneiras com Andorra",
            "locator": "Economic relations, trade, investments",
            "statement": "União aduaneira industrial e entrada sem direitos para produtos agrícolas andorranos são descritas no regime de1990.",
            "basis": "declaration",
            "publishedDate": "2021-11-24",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Conselho da UE — autorização de acordo com Andorra e San Marino",
            "locator": "Parágrafos iniciais; elementos essenciais; Next steps",
            "statement": "Conselho autoriza assinatura/aplicação provisória de acordo de mercado interno ampliado; acesso financeiro é progressivo e condicionado a auditoria.",
            "basis": "declaration",
            "publishedDate": "2026-07-16; revisão2026-07-17",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Integração aduaneira datada e ampliação comercial expressamente negociada sustentam abertura parcial.",
        "uncertainty": "Declaração de2021 não certifica regime atual; autorização de2026 não comprova assinatura, ratificação ou aplicação. Não afirma adesão à UE.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      }
    },
    "sources": [
      {
        "title": "Texto constitucional — Andorra / portal oficial",
        "url": "https://www.consellgeneral.ad/fitxers/documents/constitucio/const-en",
        "note": "Texto primário lido em 7/10/2026. Versão: 1993, texto oferecido pelo Parlamento em consulta de 2026; sem certificação independente de consolidação. Artigos 11,43,51,79–80: Parlamentarismo com copríncipes e autonomia administrativa e financeira das paróquias. Norma no texto apresentado pelo Parlamento consultado em 2026; não prova execução em 2024 nem consolidação independente."
      },
      {
        "title": "Freedom in the World 2025 — Andorra",
        "url": "https://freedomhouse.org/country/andorra/freedom-world/2025",
        "note": "Overview e Key Developments in 2024 efetivamente lidos em 7/10/2026; relatório abreviado de 2025. Usam-se narrativas específicas, sem conversão de notas numéricas."
      },
      {
        "title": "EEAS — relações aduaneiras com Andorra",
        "url": "https://www.eeas.europa.eu/topic-page/european-union-and-principality-andorra_en",
        "note": "Página primária de24/11/2021 efetivamente aberta: regime industrial e direitos de entrada agrícola na UE; camada histórica."
      },
      {
        "title": "Conselho da UE — autorização de acordo com Andorra e San Marino",
        "url": "https://www.consilium.europa.eu/en/press/press-releases/2026/07/16/council-greenlights-eu-deal-with-andorra-and-san-marino/",
        "note": "Comunicado16/7/2026, revisão17/7: autorização de assinatura/aplicação provisória; etapas posteriores não são presumidas realizadas."
      }
    ],
    "rationale": "Normas atribuem autogoverno, orçamento e competências locais aos comuns, dentro de hierarquia nacional, com garantias legais de processo e liberdade religiosa.",
    "caveats": "Autonomia não equivale a federação; copríncipe episcopal e cooperação católica coexistem com liberdade. Emergência42 e limites de cidadania são contrapontos. Descrição aduaneira/autorização não demonstram etapas posteriores concluídas. Fontes legais e narrativas de prática têm datas e alcances distintos. Descrição documental limitada, sem certificar toda legislação ou prática atual."
  }
] as ReferenceEntry[];

const proposals: {id:string;sources:ReferenceSource[];codings:ReferenceAxisCoding[];periodAppend:string;rationale:string;caveat:string}[] = [
  {
    "id": "andorra-current-2025",
    "sources": [
      {
        "title": "Andorra — lei da pessoa e família, texto consolidado não oficial",
        "url": "https://www.portaljuridicandorra.ad/L2022030",
        "note": "Republicação primária da Llei30/2022 no portal jurídico:76–84/90–100/129–138 e disposiçãofinal12 efetivamente lidos. O próprio texto declara caráter não oficial e anota mudanças12/2023 e2026; sem certificar toda consolidação ou execução contemporânea."
      }
    ],
    "codings": [
      {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Andorra — lei da pessoa e família, texto consolidado não oficial",
            "locator": "Artigos76–78;94–100;132–136; contrapontos90–92/95 e disposiçãofinal12",
            "statement": "A norma civil reconhece casamento de pessoas do mesmo ou diferente sexo, direitos e deveres conjugais iguais e direção conjunta da família. Contribuições podem ser financeiras ou trabalho doméstico; qualquer cônjuge pode pedir divórcio após três meses, com exceção por risco grave.",
            "basis": "norm",
            "publishedDate": "Llei30/2022 de21/07/2022; republicação anotada com alteração12/2023",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Texto constitucional — Andorra / portal oficial",
            "locator": "Artigo13(1–3)",
            "statement": "A Constituição reconhece iguais direitos e deveres de ambos os cônjuges e igualdade dos filhos, preservando proteção familiar e efeitos civis do casamento canônico.",
            "basis": "norm",
            "publishedDate": "1993; texto oferecido pelo Parlamento sem corte editorial",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Igualdade na autoridade e contribuição familiar, dissolução individual e casamento de qualquer sexo sustentam reforma moderada dos papéis civis-familiares, além de simples elegibilidade pública.",
        "uncertainty": "Fidelidade, convivência e interesse familiar são deveres95; casamento e decisões canônicas têm efeitos civis90–92. O relatoFH2025 sobre2024 descreve aborto totalmente proibido e desigualdade salarial, contrapesos que impedem direção forte80 e neutralidade empírica. O recorte é civil-familiar em normas datadas, não toda prática moral2026; início original varia conforme disposiçãofinal12, sem presumir data uniforme.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Texto constitucional — Andorra / portal oficial",
            "locator": "Artigos 8–10 e 15",
            "statement": "Proíbe pena de morte e tortura, assegura defesa e exige controle judicial da detenção e ingresso domiciliar.",
            "basis": "norm",
            "publishedDate": "1993, texto oferecido pelo Parlamento em consulta de 2026; sem certificação independente de consolidação",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Texto constitucional — Andorra / portal oficial",
            "locator": "Artigos12/14/15; contraponto42",
            "statement": "A norma proíbe censura prévia, protege vida privada e comunicações e limita ingresso domiciliar; prevê suspensão de direitos especificados na emergência sob autorização parlamentar e controle judicial.",
            "basis": "norm",
            "publishedDate": "1993; texto oferecido pelo Parlamento sem corte editorial",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Proteções gerais de integridade, processo, vida privada e expressão sustentam liberdade moderada no desenho constitucional, com poderes emergenciais delimitados.",
        "uncertainty": "Garantias gerais de processo, vida privada e expressão, sem certificar toda execução ou legislação de armas/drogas. Emergência42 admite suspender direitos especificados, exige autorização do Conselho e controle judicial para detenção/domicílio; a norma não implica ausência de coerção.",
        "reviewedOn": "2026-10-08"
      }
    ],
    "periodAppend": "; família na Llei30/2022 republicada com alterações12/2023 e anotações2026",
    "rationale": "Autonomia local subordinada a leis nacionais, representação eleitoral, garantias gerais e integração comercial datada coexistem com cooperação católica especial e igualdade da ordem civil-familiar.",
    "caveat": "A igualdade matrimonial compreende autoridade e contribuições familiares e dissolução, mas conserva efeitos canônicos, deveres familiares e contraponto do aborto proibido relatado2024. Texto familiar consolidado não oficial; não certifica toda prática atual."
  },
  {
    "id": "india",
    "sources": [
      {
        "title": "Índia — Competition Act2002, compilação oferecida pela CCI",
        "url": "https://www.cci.gov.in/images/legalframeworkact/en/the-competition-act-20021652103427.pdf",
        "note": "Compilação institucional efetivamente lida: preâmbulo/1,3/4 e54–55. Inclui alterações2007/2017 e antiga exclusão de Jammu e Caxemira; corte editorial não indicado, sem certificação de consolidação2023/2026. IndiaCode direto falhou; preserva-se a diferença de edição."
      },
      {
        "title": "Índia — Competition Amendment Act9/2023 e princípios gerais",
        "url": "https://nclat.nic.in/sites/default/files/2023-05/Competition%20(amendment)%20Act,%202023.pdf",
        "note": "Gazeta11/04/2023 oferecida pelo tribunal: cabeçalho/1–5 e13 integralmente lidos, com contrapontos de funções soberanas, propriedade intelectual e consumidores finais. Não toda reforma de21 páginas ou consolidação2026."
      },
      {
        "title": "Índia — notificação de vigência S.O.2228(E)/2023",
        "url": "https://nclat.nic.in/sites/default/files/2023-05/Appointed%20day%20of%20Competition%20(Amendment)%20Act,%202023_1.pdf",
        "note": "Notificação18/05/2023, publicada19/05: texto inglês integral e lista de vigência efetivamente lidos. Confirma vigência das seções1–5/13, não implementação ou todas as notificações posteriores."
      }
    ],
    "codings": [
      {
        "axis": "imi",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constituição da Índia — edição oficial em 01/05/2024",
            "locator": "Artigos29(1–2)/30(1/1A/2), pp45–46;350/350A/350B/351, pp236–237",
            "statement": "Qualquer seção de cidadãos com língua, escrita ou cultura própria pode conservá-la; minorias religiosas ou linguísticas podem administrar instituições educativas. Toda pessoa pode apresentar reclamações nas línguas usadas pela União ou Estado; ensino materno às minorias linguísticas é objetivo estatal.",
            "basis": "norm",
            "publishedDate": "Edição2024-05-01",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Proteção geral das culturas e línguas de qualquer seção de cidadãos, instituições próprias e uso de línguas em relações com autoridades sustenta multiculturalismo moderado na norma; não é proteção de um único grupo nomeado.",
        "uncertainty": "Não estabelece abertura migratória nem ausência de assimilação:351 manda difundir Hindi e prioriza vocabulário sânscrito;350A é dever de empenho, não garantia de execução universal. O relatoFH2025 registra perseguição de minorias e políticas discriminatórias, contraponto de prática2024; não certifica todo ensino ou atualizações2026.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "con",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Índia — Competition Act2002, compilação oferecida pela CCI",
            "locator": "Preâmbulo/1;3(1–5)/4; contrapontos54–55",
            "statement": "A lei promove competição e liberdade de atividade nos mercados e proíbe acordos gerais sobre bens e serviços que prejudiquem competição, incluindo preços, produção e repartição de mercados, além de abuso de posição dominante. Admite exceções por eficiência, propriedade intelectual, exportação, segurança, interesse público e funções soberanas.",
            "basis": "norm",
            "publishedDate": "Act12/2003 de13/01/2003; compilação inclui2017, corte editorial não indicado",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "NITI Aayog — Objectives and Features",
            "locator": "Objectives110–161, mandato e monitoramento",
            "statement": "O órgão se declara think tank de aconselhamento estratégico, desenho e monitoramento de programas e coordenação do desenvolvimento; isso não impõe por si alocação obrigatória de toda produção.",
            "basis": "declaration",
            "publishedDate": "Página sem data editorial consultada2026-10-08",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Índia — Competition Amendment Act9/2023 e princípios gerais",
            "locator": "Seções3–5 e13, que altera2/3/4/18; contrapontos3(b)/4(b)(iii)/4(c)",
            "statement": "A reforma amplia a cobertura de atividades econômicas de empresas e departamentos governamentais, excluindo funções soberanas; conserva e modifica as proibições gerais de acordos e abuso de domínio e exige promover competição e liberdade de comércio em mercados da Índia. Preserva exceções e exclui acordos com consumidores finais do dispositivo especificado.",
            "basis": "norm",
            "publishedDate": "Act9/2023-04-11",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Índia — notificação de vigência S.O.2228(E)/2023",
            "locator": "Lista inglesa itens1/3, linhas35–54",
            "statement": "A notificação estabelece18/05/2023 como entrada em vigor das seções1–5 e13–18 da reforma, incluindo os dispositivos gerais efetivamente examinados.",
            "basis": "norm",
            "publishedDate": "Notificação2023-05-18, publicação2023-05-19",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "O princípio geral de competição e a proibição de acordos sobre alocação de preços/produção/mercados sustentam direção de mercado moderada no recorte legislativo lido; o mero mandato consultivo anterior não sustenta planejamento nacional predominante.",
        "uncertainty": "Não certifica atual execução ou composição da economia. A compilação CCI conserva antiga exclusão de Caxemira e corte editorial não indicado; os artigos3–5/13 da reforma2023 e sua entrada em vigor18/05/2023 foram cotejados, sem certificar todas as reformas posteriores, e os artigos54–55 permitem exceções e diretrizes públicas de política. NITI planeja estratégias e monitora programas sem comando privado obrigatório demonstrado. A posição anterior60 é arquivada integralmente; a nova direção40 usa regras gerais e suas alterações efetivamente lidas; não é medição empírica da alocação econômica.",
        "reviewedOn": "2026-10-08"
      }
    ],
    "periodAppend": "; pluralidade cultural/línguas na edição2024 e competição na compilaçãoCCI com corte editorial não indicado e dispositivos da reforma2023 efetivamente cotejados",
    "rationale": "Competências estaduais, competição eleitoral parcial e pluralidade cultural normativa coexistem com coerção e déficits religiosos relatados; o recorte legislativo de competição é distinto do aconselhamento público de desenvolvimento.",
    "caveat": "O mandato NITI não demonstra alocação obrigatória de toda economia. A proposta de mercado usa lei concorrencial datada e exceções, com dispositivos gerais da reforma2023 cotejados, sem certificar toda consolidação ou prática2026; pluralidade29/30/350 convive com promoção de Hindi351 e discriminação efetiva relatada2024."
  },
  {
    "id": "denmark",
    "sources": [
      {
        "title": "Dinamarca — Competition Act1150 de03/11/2024, tradução institucional",
        "url": "https://en.kfst.dk/media/s4ybfdap/the-danish-competition-act-1150-af-03112024.pdf",
        "note": "Tradução inglesa oferecida pela autoridade, texto dinamarquês prevalece. Cabeçalho/1–3/6(1–2)/8(1–4) e11(1) completo/11(2) começo efetivamente lidos; não toda lei ou consolidação2026. Âmbito geral de alocação concorrencial com exceções públicas e laborais."
      },
      {
        "title": "Dinamarca — autonomia e deveres econômicos conjugais, LBK774/2019",
        "url": "https://www.retsinformation.dk/api/pdf/209786",
        "note": "Texto LBK774/07/08/2019, impressão08/10/2026, marcado vigente e lista alterações2020/2024/2025 não cotejadas integralmente. Leitura1–9/41–45/63–69/84 selecionada: autonomia, reciprocidade, trabalho doméstico e limites por sexo. Não é certificado da aplicação de todos os atos posteriores."
      },
      {
        "title": "Dinamarca — casamento e dissolução, LBK663/2026",
        "url": "https://www.retsinformation.dk/eli/lta/2026/663/pdf",
        "note": "Texto primário01/07/2026, publicado16/07:1–13 selecionados,29–43A e67 efetivamente lidos. Casamento entre pessoas de qualquer sexo e divórcio; a lei exclui Faroé e Groenlândia salvo ordem própria, sem presumir essa extensão."
      },
      {
        "title": "União Europeia — Dinamarca e âmbito territorial",
        "url": "https://european-union.europa.eu/principles-countries-history/eu-countries/denmark_en",
        "note": "Perfil institucional sem data editorial:40–61 efetivamente lidos. Dinamarca membro desde1973; Faroé e Groenlândia são países constituintes autônomos fora da UE. Aplicabilidade distinta de norma comercial e familiar; não certifica toda prática2026."
      }
    ],
    "codings": [
      {
        "axis": "con",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Dinamarca — Competition Act1150 de03/11/2024, tradução institucional",
            "locator": "Cabeçalho/1/2(1–6)/3;6(1–2)/8(1–4);11(1)",
            "statement": "O objetivo geral da lei é alocação eficiente dos recursos sociais por competição; o âmbito abrange toda atividade comercial e auxílio público comercial. Proíbe acordos que restrinjam preços, produção, investimentos ou mercados e abuso de domínio.",
            "basis": "norm",
            "publishedDate": "ConsolidationAct1150/2024-11-03",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Alocação geral por competição e proibição de controle anticompetitivo de preços/produção sustentam mercado moderado; não depende da existência isolada de uma autoridade.",
        "uncertainty": "Consequência necessária de regulação pública é exceção2(2), salários e condições de trabalho são excluídos3 e eficiências podem autorizar acordos8. Tradução2024 não certifica toda aplicação2026, ausência de planejamento setorial ou extensão a territórios autônomos; não mede predominância econômica.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Dinamarca — autonomia e deveres econômicos conjugais, LBK774/2019",
            "locator": "Artigos1–6/41/44/63–69; contraponto84",
            "statement": "Cada cônjuge controla seus bens e dívidas e tem dever recíproco de sustento; a divisão em separação/divórcio é igual com exceções. Trabalho doméstico e cuidado podem justificar compensação; não se aplica lei estrangeira que diferencie cônjuges pelo sexo.",
            "basis": "norm",
            "publishedDate": "LBK774/2019-08-07; alterações posteriores listadas sem cotejo integral",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Dinamarca — casamento e dissolução, LBK663/2026",
            "locator": "Artigos1/29–34/40; contrapontos2/8A/9/11A/67",
            "statement": "Casamento abrange pessoas de mesmo ou diferente sexo; ambos podem acordar divórcio e um cônjuge pode obter separação e divórcio após seis meses. Há fundamentos especiais por violência, mediação religiosa só por vontade de ambos e limites de residência/monogamia.",
            "basis": "norm",
            "publishedDate": "LBK663/2026-07-01; publicação2026-07-16",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Constituição dinamarquesa — texto primário de 1953, acervo University of Minnesota",
            "locator": "Seção81, contraponto de papel público de gênero",
            "statement": "O texto constitucional enuncia dever de contribuição masculina para a defesa militar, contraponto à igualdade familiar; não certifica a legislação atual de recrutamento.",
            "basis": "norm",
            "publishedDate": "1953-06-05; edição1992",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Autonomia patrimonial e papéis familiares recíprocos, proteção do trabalho doméstico, dissolução individual e casamento de qualquer sexo sustentam reforma moderada da ordem civil-familiar, não apenas antidiscriminação abstrata.",
        "uncertainty": "Sustento familiar, consentimento sobre moradia, condições temporais, residência e monogamia permanecem. A norma2019 lista alterações posteriores não auditadas integralmente; a norma2026 exclui Faroé/Groenlândia sem ordem própria. A Constituição81 ainda enuncia dever de defesa militar masculino, contraponto de papéis públicos de gênero; não afirma incidência atual de toda legislação de recrutamento. Não é certificação de toda política reprodutiva, papéis laborais ou prática2026, por isso não forte80.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constituição dinamarquesa — texto primário de 1953, acervo University of Minnesota",
            "locator": "Seções 71 e 77–79",
            "statement": "Proteção da liberdade, publicação, associação e reunião.",
            "basis": "norm",
            "publishedDate": "1953-06-05; edição 1992",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Freedom in the World 2025 — Dinamarca",
            "locator": "Overview; Key Developments in 2024, deportações, dados sociais e deficiência",
            "statement": "Expressão, associação e Judiciário independente coexistem com violações na deportação, privacidade e coerção.",
            "basis": "practice",
            "publishedDate": "Edição 2025",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Constituição dinamarquesa — texto primário de 1953, acervo University of Minnesota",
            "locator": "Seção72; contrapontos71(3/6),77–79",
            "statement": "A privacidade domiciliar e das comunicações exige ordem judicial salvo exceção legal; controles da detenção admitem regime próprio da Groenlândia e exceção para legislação de estrangeiros.",
            "basis": "norm",
            "publishedDate": "1953-06-05; edição1992",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Constituição dinamarquesa — texto primário de 1953, acervo University of Minnesota",
            "locator": "Seção85",
            "statement": "O texto permite desvios dos dispositivos de liberdade pessoal, associação e reunião para as forças de defesa, na medida aplicável das leis militares.",
            "basis": "norm",
            "publishedDate": "1953-06-05; edição1992",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Liberdades protegidas com déficits concretos sustentam direção moderada.",
        "uncertainty": "Garantias gerais de liberdade, expressão/associação e vida privada com déficits efetivos de deportação, dados sociais e coerção impedem extremo libertário. Seção72 admite exceção por lei;71 admite disposições territoriais e exclui certas detenções de estrangeiros do controle específico. Seção85 admite derrogações militares específicas à liberdade pessoal, associação e reunião. A norma não substitui prática.",
        "reviewedOn": "2026-10-08"
      }
    ],
    "periodAppend": "; alocação concorrencial na tradução2024, autonomia conjugal na norma2019 e casamento/divórcio na normaJulho2026",
    "rationale": "Responsabilidade parlamentar e competição eleitoral convivem com igreja estabelecida, liberdades gerais sujeitas a déficits reais, comércio europeu regulado e normas de alocação concorrencial e igualdade civil-familiar.",
    "caveat": "A competição tem exceções públicas/laborais e o direito familiar conserva deveres de sustento e condições. As normas familiares lidas não se estendem automaticamente a Faroé/Groenlândia;2019 lista alterações posteriores não cotejadas integralmente. Não certifica toda prática econômica ou moral2026."
  }
];

/** Pending author proposal; independent whole-profile review and Root acceptance required. */
export function extendRanking675Country04(entries:ReferenceEntry[]):ReferenceEntry[]{
 return entries.map(entry=>{
  const before=ranking675Country04Before.find(item=>item.id===entry.id);
  if(!before||JSON.stringify(before)!==JSON.stringify(entry))return entry;
  const row=proposals.find(item=>item.id===entry.id)!;const sources=[...entry.sources,...row.sources];
  const post:ReferenceEntry={...entry,sources,period:entry.period+row.periodAppend,rationale:row.rationale,caveats:entry.caveats+' '+row.caveat,vec:{...entry.vec},evidence:{...entry.evidence},axisEvidence:{...entry.axisEvidence},coding:{...entry.coding}};
  for(const input of row.codings){const encoded=codeReferenceAxis(input,sources),axis=input.axis;post.vec[axis]=encoded.value;post.evidence![axis]=encoded.evidence;post.axisEvidence![axis]=encoded.axisEvidence;post.coding![axis]=encoded.coding;}
  return post;
 });
}
