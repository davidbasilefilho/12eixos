import type {ReferenceEntry,ReferenceSource} from './references';
import {codeReferenceAxis,type ReferenceAxisCoding} from '../lib/reference-coding';

export const ranking675Country05Before = [
  {
    "id": "united-states",
    "kind": "country",
    "category": "country",
    "name": "Estados Unidos",
    "period": "Normas constitucionais de 1787/1791 em texto do Senado; narrativa FH2025 sobre 2024",
    "vec": {
      "est": 80,
      "rep": 80,
      "pod": 40,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 80,
      "mor": 60,
      "tec": 50
    },
    "rationale": "Norma constitucional distribui competências nacionais e reserva poderes não delegados aos estados ou ao povo, com garantias processuais e religiosas localizadas.",
    "caveats": "Reserva territorial não afasta competências federais enumeradas. Garantias normativas não demonstram cumprimento; passagens de eleições e restrições pertencem ao relato de 2024. Fontes legais e narrativas de prática têm datas e alcances distintos. Descrição documental limitada, sem certificar toda legislação ou prática atual.",
    "sources": [
      {
        "title": "Freedom in the World — Estados Unidos",
        "url": "https://freedomhouse.org/country/united-states/freedom-world/2025",
        "note": "Democracia e liberdades em 2024."
      },
      {
        "title": "Constituição dos Estados Unidos",
        "url": "https://www.senate.gov/about/origins-foundations/senate-and-constitution/constitution.htm",
        "note": "Base institucional do federalismo."
      },
      {
        "title": "Freedom in the World 2025 — Estados Unidos",
        "url": "https://freedomhouse.org/country/united-states/freedom-world/2025",
        "note": "Narrativa institucional de 2024 lida; pontuações agregadas e respostas numéricas não são convertidas em eixos."
      },
      {
        "title": "Constituição dos Estados Unidos — Senado, texto oferecido em 2026",
        "url": "https://www.senate.gov/about/origins-foundations/senate-and-constitution/constitution.htm",
        "note": "Texto integral lido, incluindo 27 emendas; as cláusulas de 1791 e o recorte de prática de 2024 são datados separadamente."
      },
      {
        "title": "VA — Veterans Health Administration, provisão direta",
        "url": "https://department.va.gov/vha/about-us/",
        "note": "Fonte primária efetivamente aberta e passagem lida em 7/10/2026."
      }
    ],
    "evidence": {
      "est": "high",
      "rep": "high",
      "pod": "medium",
      "rel": "high",
      "mor": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Constituição dos Estados Unidos — Senado, texto oferecido em 2026"
        ],
        "rationale": "Competências territoriais constitucionalmente reservadas sustentam federalismo forte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Supremacia federal e competências nacionais permanecem; não é soberania estadual irrestrita."
      },
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — Estados Unidos"
        ],
        "rationale": "Competição e representação efetivas sustentam a direção democrática neste recorte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Competição eleitoral não elimina desigualdade de representação, financiamento ou déficits civis."
      },
      "pod": {
        "sourceTitles": [
          "Constituição dos Estados Unidos — Senado, texto oferecido em 2026",
          "Freedom in the World 2025 — Estados Unidos"
        ],
        "rationale": "Garantias contra coerção sustentam liberdade parcial com déficits de execução. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não descreve todas as políticas de vigilância, armas ou polícia; limitações não são apagadas pela norma."
      },
      "rel": {
        "sourceTitles": [
          "Constituição dos Estados Unidos — Senado, texto oferecido em 2026",
          "Freedom in the World 2025 — Estados Unidos"
        ],
        "rationale": "Regra constitutiva de não estabelecimento sustenta separação religiosa forte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Exceções e financiamento educacional são contraevidência; não mede religiosidade pessoal."
      },
      "mor": {
        "sourceTitles": [
          "Freedom in the World 2025 — Estados Unidos"
        ],
        "rationale": "Igualdade matrimonial sustenta direção reformista parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Aborto e direitos trans não são presumidos progressistas; o construto é coberto parcialmente."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Constituição dos Estados Unidos — Senado, texto oferecido em 2026",
            "locator": "Artigo I, seção 8; Emenda X",
            "statement": "Poderes nacionais enumerados; poderes não delegados são reservados aos estados ou ao povo.",
            "basis": "norm",
            "publishedDate": "1787; Emenda X, 1791",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Competências territoriais constitucionalmente reservadas sustentam federalismo forte.",
        "uncertainty": "Supremacia federal e competências nacionais permanecem; não é soberania estadual irrestrita.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "rep": {
        "axis": "rep",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Freedom in the World 2025 — Estados Unidos",
            "locator": "A1–A3; B2, narrativa de eleições de 2024",
            "statement": "Eleições competitivas tiveram resultados aceitos e vitória da oposição; distritos manipulados e exclusões limitam representação.",
            "basis": "practice",
            "publishedDate": "Edição 2025; acontecimentos de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Competição e representação efetivas sustentam a direção democrática neste recorte.",
        "uncertainty": "Competição eleitoral não elimina desigualdade de representação, financiamento ou déficits civis.",
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
            "sourceTitle": "Constituição dos Estados Unidos — Senado, texto oferecido em 2026",
            "locator": "Emendas IV–V",
            "statement": "Busca exige causa provável; liberdade depende de devido processo.",
            "basis": "norm",
            "publishedDate": "1791",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Freedom in the World 2025 — Estados Unidos",
            "locator": "F3, força policial e prisões",
            "statement": "Abusos policiais, impunidade e condições prisionais limitam garantias.",
            "basis": "practice",
            "publishedDate": "Edição 2025; acontecimentos de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Garantias contra coerção sustentam liberdade parcial com déficits de execução.",
        "uncertainty": "Não descreve todas as políticas de vigilância, armas ou polícia; limitações não são apagadas pela norma.",
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
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Constituição dos Estados Unidos — Senado, texto oferecido em 2026",
            "locator": "Emenda I",
            "statement": "Proíbe estabelecimento religioso e protege exercício da religião.",
            "basis": "norm",
            "publishedDate": "1791",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Freedom in the World 2025 — Estados Unidos",
            "locator": "D2, narrativa sobre religião e financiamento escolar",
            "statement": "Proibição de endosso oficial coexiste com decisões que ampliam financiamento de escolas religiosas.",
            "basis": "practice",
            "publishedDate": "Edição 2025; acontecimentos de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Regra constitutiva de não estabelecimento sustenta separação religiosa forte.",
        "uncertainty": "Exceções e financiamento educacional são contraevidência; não mede religiosidade pessoal.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "mor": {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Freedom in the World 2025 — Estados Unidos",
            "locator": "G3, casamento, aborto e cuidados trans",
            "statement": "Casamento entre pessoas do mesmo sexo é nacionalmente reconhecido; aborto e cuidados trans sofrem restrições estaduais.",
            "basis": "practice",
            "publishedDate": "Edição 2025; acontecimentos de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Igualdade matrimonial sustenta direção reformista parcial.",
        "uncertainty": "Aborto e direitos trans não são presumidos progressistas; o construto é coberto parcialmente.",
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
  {
    "id": "singapore",
    "kind": "country",
    "category": "country",
    "name": "Singapura",
    "period": "Narrativa FH2025 sobre 2024; declarações MHA de 29/09/2026 e Singapore Customs de 09/03/2026",
    "vec": {
      "est": 50,
      "rep": 40,
      "pod": 60,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 40,
      "rel": 60,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Declaração institucional descreve gestão legal da harmonia religiosa, com ordens restritivas, separada do relato eleitoral e das regras de importação.",
    "caveats": "Gestão de harmonia não significa ausência de restrições religiosas. Constituição SSO falhou e não foi substituída por fragmentos; GST é consumo, não tarifa geral. Fontes legais e narrativas de prática têm datas e alcances distintos. Descrição documental limitada, sem certificar toda legislação ou prática atual.",
    "sources": [
      {
        "title": "Freedom in the World — Singapura",
        "url": "https://freedomhouse.org/country/singapore/freedom-world/2025",
        "note": "Direitos políticos e civis."
      },
      {
        "title": "WTO Trade Policy Review — Singapore",
        "url": "https://www.wto.org/english/tratop_e/tpr_e/s413_e.pdf",
        "note": "Abertura comercial e papel do Estado."
      },
      {
        "title": "Freedom in the World 2025 — Singapura",
        "url": "https://freedomhouse.org/country/singapore/freedom-world/2025",
        "note": "Narrativa referente a 2024 efetivamente lida; nenhuma conversão de notas ou classificações agregadas."
      },
      {
        "title": "MHA — harmonia racial e religiosa",
        "url": "https://www.mha.gov.sg/what-we-do/managing-security-threats/maintaining-racial-and-religious-harmony/",
        "note": "Página oficial atualizada em 29/09/2026: princípios, restraining orders e leis de 2019/2025; leitura integral."
      },
      {
        "title": "Singapore Customs — categorias de bens tributáveis",
        "url": "https://www.customs.gov.sg/doing-business/valuation-duties-and-fees/duties-and-dutiable-goods/duties-and-dutiable-goods-overview/",
        "note": "Página atualizada em 09/03/2026: quatro categorias, bens não tributáveis e GST."
      }
    ],
    "evidence": {
      "rep": "medium",
      "pod": "medium",
      "rel": "medium",
      "com": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — Singapura"
        ],
        "rationale": "Vantagem institucional e controle da competição sustentam direção despótica parcial. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: A existência de oposição impede supor ausência total de competição; duração de governo sozinha não determina o eixo."
      },
      "pod": {
        "sourceTitles": [
          "Freedom in the World 2025 — Singapura"
        ],
        "rationale": "Coerção sobre expressão e organização sustenta direção autoritária parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não presume todas as dimensões de polícia e privacidade; não converte pena de morte isolada em índice global."
      },
      "rel": {
        "sourceTitles": [
          "MHA — harmonia racial e religiosa"
        ],
        "rationale": "Separação declarada entre religião e política sustenta secularismo parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Regulação estatal intensa de organizações religiosas limita a inferência; não é certificação de separação completa nem de execução em 2024."
      },
      "com": {
        "sourceTitles": [
          "Singapore Customs — categorias de bens tributáveis"
        ],
        "rationale": "Cobertura aduaneira limitada sustenta abertura comercial parcial. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: GST é tributação de consumo, não prova de proteção; licenças e tarifas específicas permanecem. Só cobre importações, não toda integração ou exportação."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-second",
        "claims": [
          {
            "sourceTitle": "Freedom in the World 2025 — Singapura",
            "locator": "Overview; Key Developments in 2024",
            "statement": "Pluralismo controlado e regras favoráveis ao PAP limitam oposição; sucessão de 2024 ocorreu dentro do partido.",
            "basis": "practice",
            "publishedDate": "Relatório 2025; prática de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Vantagem institucional e controle da competição sustentam direção despótica parcial.",
        "uncertainty": "A existência de oposição impede supor ausência total de competição; duração de governo sozinha não determina o eixo.",
        "confidence": "medium",
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
        "position": "moderate-first",
        "claims": [
          {
            "sourceTitle": "Freedom in the World 2025 — Singapura",
            "locator": "Overview; Key Developments in 2024, POFMA",
            "statement": "POFMA foi usada contra opositores e veículos; expressão, reunião e associação sofrem restrições.",
            "basis": "practice",
            "publishedDate": "Relatório 2025; prática de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Coerção sobre expressão e organização sustenta direção autoritária parcial.",
        "uncertainty": "Não presume todas as dimensões de polícia e privacidade; não converte pena de morte isolada em índice global.",
        "confidence": "medium",
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
        "claims": [
          {
            "sourceTitle": "MHA — harmonia racial e religiosa",
            "locator": "MRHA, princípios; alterações de 2019",
            "statement": "Política oficial separa religião de política, exige moderação e mantém ordens restritivas e controles de influências estrangeiras.",
            "basis": "declaration",
            "publishedDate": "2026-09-29",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Separação declarada entre religião e política sustenta secularismo parcial.",
        "uncertainty": "Regulação estatal intensa de organizações religiosas limita a inferência; não é certificação de separação completa nem de execução em 2024.",
        "confidence": "medium",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "com": {
        "axis": "com",
        "position": "moderate-second",
        "claims": [
          {
            "sourceTitle": "Singapore Customs — categorias de bens tributáveis",
            "locator": "Categorias; definição de bens não tributáveis",
            "statement": "Somente quatro categorias estão sujeitas a direitos aduaneiros ou excise; bens não tributáveis podem pagar GST.",
            "basis": "declaration",
            "publishedDate": "2026-03-09",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Cobertura aduaneira limitada sustenta abertura comercial parcial.",
        "uncertainty": "GST é tributação de consumo, não prova de proteção; licenças e tarifas específicas permanecem. Só cobre importações, não toda integração ou exportação.",
        "confidence": "medium",
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
    "id": "new-zealand",
    "kind": "country",
    "category": "country",
    "name": "Nova Zelândia",
    "period": "Descrição institucional da Constituição de 1986 sem data editorial; declaração Justiça atualizada em 24/04/2024; acordo comercial vigente em 01/05/2024; narrativa FH2025",
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
      "rel": 50,
      "mor": 60,
      "tec": 50
    },
    "rationale": "Descrição institucional atribui o governo ao desenho parlamentar e reconhece proteção jurídica de direitos, com limites e reservas apresentados separadamente.",
    "caveats": "Fonte é declaração institucional, pois recuperação do texto legislativo falhou. A crítica sobre voto de presos é de 2023; o relatório2025 tem divergência de título cronológico, sem correção silenciosa. Fontes legais e narrativas de prática têm datas e alcances distintos. Descrição documental limitada, sem certificar toda legislação ou prática atual.",
    "sources": [
      {
        "title": "Freedom in the World — Nova Zelândia",
        "url": "https://freedomhouse.org/country/new-zealand/freedom-world/2025",
        "note": "Direitos políticos e liberdades."
      },
      {
        "title": "OECD Government at a Glance 2025",
        "url": "https://www.oecd.org/en/publications/government-at-a-glance-2025_0efd0bcd-en.html",
        "note": "Indicadores do setor público."
      },
      {
        "title": "Freedom in the World 2025 — Nova Zelândia",
        "url": "https://freedomhouse.org/country/new-zealand/freedom-world/2025",
        "note": "Prática institucional relatada na edição 2025; itens localizados e contraevidências registrados por eixo. Relatório abreviado; seu score não é convertido em vetor."
      },
      {
        "title": "Constituição da Nova Zelândia — Governor-General",
        "url": "https://gg.govt.nz/office-governor-general/roles-and-functions-governor-general/constitutional-role/constitution",
        "note": "Descrição oficial da Constituição de 1986 e instituições; página sem data de publicação informada."
      },
      {
        "title": "ICCPR e reservas da Nova Zelândia — Ministry of Justice",
        "url": "https://www.justice.govt.nz/justice-sector-policy/constitutional-issues-and-human-rights/human-rights/international-human-rights/international-covenant-on-civil-and-political-rights/",
        "note": "Atualização 24/04/2024: reservas e crítica da ONU ao sufrágio de presos; evita apresentar garantias como absolutas."
      },
      {
        "title": "Acordo NZ–UE, capítulo 2 — MFAT",
        "url": "https://www.mfat.govt.nz/assets/Trade-agreements/EU-NZ-FTA/Chapters/2.-National-Treatment-and-Market-Access-for-Goods.pdf",
        "note": "Texto primário do acordo assinado em 09/07/2023, vigente desde 01/05/2024; capítulo 2, 22 páginas."
      },
      {
        "title": "Uniões civis — New Zealand Government",
        "url": "https://www.govt.nz/browse/family-and-whanau/getting-married/",
        "note": "Guia oficial sobre uniões civis sob Civil Union Act 2004; página sem publicação datada. Não substitui uma versão histórica do Marriage Act."
      }
    ],
    "evidence": {
      "rep": "high",
      "pod": "medium",
      "com": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constituição da Nova Zelândia — Governor-General",
          "Freedom in the World 2025 — Nova Zelândia",
          "ICCPR e reservas da Nova Zelândia — Ministry of Justice"
        ],
        "rationale": "Instituições e prática sustentam democracia forte com contraevidência específica. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Não é democracia sem exclusões; crítica ao sufrágio de presos foi preservada."
      },
      "pod": {
        "sourceTitles": [
          "Freedom in the World 2025 — Nova Zelândia",
          "ICCPR e reservas da Nova Zelândia — Ministry of Justice"
        ],
        "rationale": "Liberdades institucionais com reservas explícitas sustentam liberdade moderada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não ignora exceções em prisões e compensação por erro judicial; relatório abreviado limita detalhe."
      },
      "com": {
        "sourceTitles": [
          "Acordo NZ–UE, capítulo 2 — MFAT"
        ],
        "rationale": "Redução vinculante de barreiras sustenta abertura comercial moderada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Acordo bilateral não demonstra liberalização universal nem ausência de proteção em cada setor."
      },
      "mor": {
        "sourceTitles": [
          "Uniões civis — New Zealand Government"
        ],
        "rationale": "Reconhecimento de uniões civis independentemente do gênero sustenta reforma social parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não converte uma política em progressismo universal; fonte atual não prova toda a prática histórica e déficits indígenas são relevantes."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Constituição da Nova Zelândia — Governor-General",
            "locator": "The Constitution Act 1986; The role of political parties",
            "statement": "Executivo depende do Parlamento eleito e confiança partidária.",
            "basis": "declaration",
            "publishedDate": "Página sem data; Constituição de 1986 descrita",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Freedom in the World 2025 — Nova Zelândia",
            "locator": "Overview",
            "statement": "Democracia parlamentar com histórico de eleições livres e justas é descrita.",
            "basis": "practice",
            "publishedDate": "Edição 2025",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "ICCPR e reservas da Nova Zelândia — Ministry of Justice",
            "locator": "Monitoring: Committee Decision, 2023",
            "statement": "Decisão da ONU aponta violação do sufrágio de presos.",
            "basis": "practice",
            "publishedDate": "2024-04-24",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Instituições e prática sustentam democracia forte com contraevidência específica.",
        "uncertainty": "Não é democracia sem exclusões; crítica ao sufrágio de presos foi preservada.",
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
            "sourceTitle": "Freedom in the World 2025 — Nova Zelândia",
            "locator": "Overview",
            "statement": "Garantias de direitos políticos e liberdades civis coexistem com discriminação de minorias.",
            "basis": "practice",
            "publishedDate": "Edição 2025",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "ICCPR e reservas da Nova Zelândia — Ministry of Justice",
            "locator": "Reservas aos artigos 10, 14(6), 20 e 22 do ICCPR",
            "statement": "Governo registra exceções relativas a detenção, compensação e outras garantias.",
            "basis": "declaration",
            "publishedDate": "2024-04-24",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Liberdades institucionais com reservas explícitas sustentam liberdade moderada.",
        "uncertainty": "Não ignora exceções em prisões e compensação por erro judicial; relatório abreviado limita detalhe.",
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
            "sourceTitle": "Acordo NZ–UE, capítulo 2 — MFAT",
            "locator": "Artigos 2.1, 2.5 e 2.11; pp. 2-1, 2-3–2-4, 2-8",
            "statement": "Acordo prevê liberalização recíproca, cronograma tarifário e regras com exceções.",
            "basis": "norm",
            "publishedDate": "Assinado 2023-07-09; vigência 2024-05-01",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Redução vinculante de barreiras sustenta abertura comercial moderada.",
        "uncertainty": "Acordo bilateral não demonstra liberalização universal nem ausência de proteção em cada setor.",
        "reviewedOn": "2026-10-07",
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
            "sourceTitle": "Uniões civis — New Zealand Government",
            "locator": "Civil unions",
            "statement": "União civil formaliza relação independentemente do gênero.",
            "basis": "declaration",
            "publishedDate": "Página sem data; referência a Civil Union Act 2004",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Reconhecimento de uniões civis independentemente do gênero sustenta reforma social parcial.",
        "uncertainty": "Não converte uma política em progressismo universal; fonte atual não prova toda a prática histórica e déficits indígenas são relevantes.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      }
    }
  }
] as ReferenceEntry[];

const proposals: {id:string;sources:ReferenceSource[];codings:ReferenceAxisCoding[];periodAppend:string;period?:string;rationale:string;caveat:string}[] = [
  {
    "id": "united-states",
    "sources": [
      {
        "title": "Estados Unidos — Sherman Act, edição2024 do USCode",
        "url": "https://www.govinfo.gov/content/pkg/USCODE-2024-title15/html/USCODE-2024-title15-chap1-sec1.htm",
        "note": "Edição2024:§1 integral e notas editoriais selecionadas efetivamente lidos; âmbito interestadual/internacional. Não certificado da legislação ou aplicação inteira2026."
      },
      {
        "title": "Estados Unidos — proibição geral de monopolização, USCode2024",
        "url": "https://www.govinfo.gov/content/pkg/USCODE-2024-title15/html/USCODE-2024-title15-chap1-sec2.htm",
        "note": "Edição2024:§2 integral efetivamente lido, não toda disciplina de monopólios e suas imunidades."
      },
      {
        "title": "FTC — quadro geral das leis antitruste",
        "url": "https://www.ftc.gov/advice-guidance/competition-guidance/guide-antitrust-laws/antitrust-laws?cq_net=g",
        "note": "Página institucional sem data editorial: corpo integral breve efetivamente lido. Explica competição, restrições desarrazoadas, cooperação lícita e regras de fusões; não mede estrutura produtiva."
      },
      {
        "title": "Estados Unidos — Respect for Marriage Act117-228",
        "url": "https://www.govinfo.gov/content/pkg/PLAW-117publ228/html/PLAW-117publ228.htm",
        "note": "Lei13/12/2022:seções1–8, assinatura e limites religiosos/poligamia efetivamente lidos; reconhecimento federal/interestadual não equivale a obrigação de todos os Estados celebrarem novos casamentos."
      },
      {
        "title": "EEOC — TitleVII e igualdade laboral",
        "url": "https://www.eeoc.gov/statutes/title-vii-civil-rights-act-1964",
        "note": "Texto primário institucional com emendas e sem corte editorial explícito: definições701 e702/703/704 selecionados efetivamente lidos. Exceções de empregador, entidades religiosas e requisito ocupacional mantidas; não execução inteira2026."
      },
      {
        "title": "Estados Unidos — igualdade de crédito, USCode2024",
        "url": "https://www.govinfo.gov/content/pkg/USCODE-2024-title15/html/USCODE-2024-title15-chap41-subchapIV-sec1691.htm",
        "note": "Edição2024:§1691(a–e) e finalidade legislativa1974 efetivamente lidos. Igualdade civil-financeira por sexo/estado civil com exceções de direitos e solvência; não eixo de propriedade econômica."
      }
    ],
    "codings": [
      {
        "axis": "con",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Estados Unidos — Sherman Act, edição2024 do USCode",
            "locator": "15USC§1, primeiro parágrafo",
            "statement": "A regra geral proíbe contratos e combinações que restrinjam comércio interestadual ou internacional.",
            "basis": "norm",
            "publishedDate": "USCode2024",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Estados Unidos — proibição geral de monopolização, USCode2024",
            "locator": "15USC§2 integral",
            "statement": "A regra geral pune monopolização, tentativa e combinação para monopolizar comércio entre Estados ou com países estrangeiros.",
            "basis": "norm",
            "publishedDate": "USCode2024",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "FTC — quadro geral das leis antitruste",
            "locator": "Corpo:competição, Sherman/FTC/Clayton e cooperação lícita",
            "statement": "A autoridade explicita o objetivo de proteger o processo de competição; distingue restrições desarrazoadas de cooperação legítima e identifica preços, divisão de mercados e licitações como condutas proibidas.",
            "basis": "declaration",
            "publishedDate": "Página sem data editorial consultada08/10/2026",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "O regime geral preserva competição entre agentes e impede substituição coletiva por preços e mercados acertados; sustenta mercado moderado, além de existência isolada de agência.",
        "uncertainty": "Âmbito interestadual/internacional, regra de razoabilidade, cooperação lícita, controle público de fusões e leis estaduais impedem leitura de laissez-faire irrestrito. Não certifica imunidades, todo regime regulatório2026 ou predominância empírica da alocação concorrencial.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Freedom in the World 2025 — Estados Unidos",
            "locator": "G3, casamento, aborto e cuidados trans",
            "statement": "Casamento entre pessoas do mesmo sexo é nacionalmente reconhecido; aborto e cuidados trans sofrem restrições estaduais.",
            "basis": "practice",
            "publishedDate": "Edição 2025; acontecimentos de 2024",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Estados Unidos — Respect for Marriage Act117-228",
            "locator": "Seções3–7; contrapontos2/6/7",
            "statement": "O regime federal reconhece casamento válido entre duas pessoas e exige reconhecimento interestadual sem exclusão por sexo ou raça, preservando recusa de celebração por instituições religiosas e limites de poligamia.",
            "basis": "norm",
            "publishedDate": "Lei117-228/2022-12-13",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "EEOC — TitleVII e igualdade laboral",
            "locator": "701(b/k)/702(a–c)/703(a–n)/704",
            "statement": "O direito federal protege igualdade por sexo em remuneração, condições laborais, acesso e formação; inclui gravidez, com exceções de tamanho do empregador, religião e requisito ocupacional.",
            "basis": "norm",
            "publishedDate": "Lei1964, texto institucional emendado; corte editorial não informado",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Estados Unidos — igualdade de crédito, USCode2024",
            "locator": "1691(a–e), contrapontosb/c",
            "statement": "O acesso ao crédito é protegido contra discriminação por sexo e estado civil, com controles de solvência e direitos patrimoniais matrimoniais.",
            "basis": "norm",
            "publishedDate": "USCode2024",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Igualdade familiar, reconhecimento de casais de qualquer sexo, independência financeira e acesso laboral ampliam o fundamento para reforma moderada dos papéis de gênero e família.",
        "uncertainty": "A norma2022 trata reconhecimento, não obriga sozinha emissão estadual. Proteção da celebração religiosa, poligamia, exceções laborais e crédito coexistem com restrições estaduais de aborto e de autonomia trans descritasFH2025 sobre2024. A combinação sustenta60, não reforma irrestrita80 ou uniformidade de toda moralidade2026.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constituição dos Estados Unidos — Senado, texto oferecido em 2026",
            "locator": "Emendas IV–V",
            "statement": "Busca exige causa provável; liberdade depende de devido processo.",
            "basis": "norm",
            "publishedDate": "1791",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Freedom in the World 2025 — Estados Unidos",
            "locator": "F3, força policial e prisões",
            "statement": "Abusos policiais, impunidade e condições prisionais limitam garantias.",
            "basis": "practice",
            "publishedDate": "Edição 2025; acontecimentos de 2024",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Constituição dos Estados Unidos",
            "locator": "EmendasI/III/VI/VIII, contrapontoV",
            "statement": "O texto protege expressão, reunião, petição, moradia, defesa e julgamento público, e proíbe penas cruéis;V admite exceção militar e perda de vida sob processo legal.",
            "basis": "norm",
            "publishedDate": "Emendas1791, reprodução atual do Senado sem corte editorial",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Proteções gerais de expressão, vida privada e processo sustentam liberdade moderada, com graves déficits coercivos observados.",
        "uncertainty": "V conserva exceção militar e não elimina pena capital; FH2025 sobre2024 descreve vigilância, prisão e violência policial. Não traduz pontuaçãoFH em eixo, não afirma inexistência de restrições ou toda prática2026.",
        "reviewedOn": "2026-10-08"
      }
    ],
    "periodAppend": "; regras concorrenciais na edição2024, reconhecimento conjugal2022 e igualdade civil-laboral em textos datados",
    "rationale": "Federalismo, competição eleitoral e liberdades constitucionais convivem com déficits coercivos, separação religiosa com acomodação, competição econômica regulada e igualdade civil-familiar sob limites.",
    "caveat": "Concorrência é regra geral regulada, não medida de toda produção. Família e papéis laborais têm normas nacionais amplas, exceções religiosas/ocupacionais e variação estadual reprodutiva; fontes datadas não certificam toda prática2026."
  },
  {
    "id": "new-zealand",
    "sources": [
      {
        "title": "Nova Zelândia — Bill of Rights, versão30/08/2022",
        "url": "https://legislation.govt.nz/act/public/1990/109/en/2022-08-30.pdf",
        "note": "Leitura indexada de2–6/8–16/20 e paralelos oficiais21/23 completos. PDF direto403;24(a–f) foi lido em versão2013 separada e não promovido à edição2022. Direitos de todos os grupos e limites parlamentares explícitos."
      },
      {
        "title": "Nova Zelândia — regime geral de relações patrimoniais, versão06/10/2023",
        "url": "https://www.legislation.govt.nz/act/public/1976/166/en/2023-10-06.pdf",
        "note": "Texto2023:11 completo/13(1)/18(1) completos; princípios1M/1N e2D completos em rotas oficiais indexadas.18(2) cotejado só em edição anterior, não inteiro2023; limites de relações curtas e contratação não auditados integralmente."
      },
      {
        "title": "Nova Zelândia — capacidade jurídica conjugal, versão06/10/2023",
        "url": "https://www.legislation.govt.nz/act/public/1976/166/en/latest/sections/DLM440945/DLM441904",
        "note": "Cabeçalho06/10/2023 e49(1–2) integralmente lidos por índice: capacidades jurídicas iguais, ressalvados outros atos."
      },
      {
        "title": "Nova Zelândia — Commerce Act, passagens gerais2024–2025",
        "url": "https://www.legislation.govt.nz/act/public/1986/0005/latest/LMS485454.html",
        "note": "Passagens oficiais indexadas30/30A/31 selecionado e36 completo;27 completo cotejado em edição17/02/2024 e rota atual. CabeçalhoPDF27/11/2025 separado;31(4–5) confirmado noPDFdatado. Não toda consolidação2026; cooperação lícita/autorizações preservadas."
      },
      {
        "title": "MFAT — política comercial geral",
        "url": "https://www.mfat.govt.nz/en/trade/nz-trade-policy",
        "note": "Corpo geral65–87 diretamente lido; declaração sem data editorial com dados2024. Aplica a bens, serviços, importações/exportações e investimento, não apenas acordo bilateral."
      },
      {
        "title": "MFAT — CPTPP, contrapontos de regulação pública",
        "url": "https://www.mfat.govt.nz/en/trade/free-trade-agreements/free-trade-agreements-in-force/cptpp/common-questions",
        "note": "Corpo indexado completo das perguntas sobre soberania/Waitangi, saúde/Pharmac, ambiente e empresas estatais efetivamente lido; direto falhou. Declarações de exceções, não eliminação de toda regulação ou medição de execução."
      },
      {
        "title": "Kenneth Keith — Constituição da Nova Zelândia, ensaio de 1990 atualizado até 2023",
        "url": "https://gg.govt.nz/office-governor-general/roles-and-functions-governor-general/constitutional-role/constitution",
        "note": "Cabeçalho efetivamente lido identifica Kenneth Keith, 1990, com atualizações em 2008, 2017 e 2023; introdução ao Cabinet Manual. Passagens institucionais 29–37 e convenções 43–62 lidas; não certifica revisão integral ou prática de 2026. O objeto anterior da mesma página permanece preservado como histórico de pesquisa."
      }
    ],
    "codings": [
      {
        "axis": "imi",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Nova Zelândia — Bill of Rights, versão30/08/2022",
            "locator": "Seção20 integral; limites3–5",
            "statement": "Todas as pessoas pertencentes a minorias étnicas, religiosas ou linguísticas têm protegido o exercício comunitário da cultura, religião e língua.",
            "basis": "norm",
            "publishedDate": "Versão2022-08-30",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Proteção geral de todas as categorias de minorias e exercício cultural comunitário sustenta multiculturalismo moderado; não depende de um único povo nomeado.",
        "uncertainty": "Não afirma imigração aberta. Limites razoáveis5 e impossibilidade de invalidar lei incompatível4 coexistem com discriminação e redução do uso de Māori descritasFH2025. A páginaFH rotula desenvolvimentos2025 mas descreve episódios do ciclo2024; discrepância editorial mantida, sem inferir todos os atos atuais.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "con",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Nova Zelândia — Commerce Act, passagens gerais2024–2025",
            "locator": "27(1–4)/30(1)/30A(1–4)/36(1–2); contrapontos31/58A",
            "statement": "As regras gerais proíbem acordos que reduzam substancialmente competição, cartéis de preços/produção/mercados e abuso de poder de mercado sobre bens e serviços; admitem colaboração necessária e autorizações.",
            "basis": "norm",
            "publishedDate": "Passagens oficiais2024/2025;36 substituído05/04/2023",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Competição geral de bens e serviços e vedação à substituição de preços/produção por cartéis sustentam mercado moderado; não é inferência do mero órgão ou só de um setor.",
        "uncertainty": "Colaboração31, autorizações58A, controle de fusões e regulação de preço/qualidade prevista noPart4 são contrapontos. Só o começo do propósitoPart4 foi recuperado, sem certificar todo âmbito. Edições distintas explicitadas; não mede predominância econômica ou toda consolidação2026.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Uniões civis — New Zealand Government",
            "locator": "Civil unions",
            "statement": "União civil formaliza relação independentemente do gênero.",
            "basis": "declaration",
            "publishedDate": "Página sem data; referência a Civil Union Act 2004",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Nova Zelândia — regime geral de relações patrimoniais, versão06/10/2023",
            "locator": "1M/1N;2D(1–4);11(1–2);13(1);18(1)",
            "statement": "O regime reconhece igual status de homens e mulheres, contribuições domésticas e externas, parcerias de qualquer sexo e divisão patrimonial igual, salvo exceções de justiça.",
            "basis": "norm",
            "publishedDate": "Versão2023-10-06; princípios em rota oficial sem cabeçalho independente",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Nova Zelândia — capacidade jurídica conjugal, versão06/10/2023",
            "locator": "49(1–2)",
            "statement": "Mulheres casadas têm capacidades legais pessoais e oficiais iguais às dos homens casados, salvo disposição específica.",
            "basis": "norm",
            "publishedDate": "Versão2023-10-06",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Igualdade de autoridade civil, capacidade e contribuição familiar, parcerias de qualquer sexo e partilha ampliam o fundamento além da união civil isolada para reforma moderada.",
        "uncertainty": "Outras leis podem ressalvar capacidade; relações sujeitas a requisitos e circunstâncias extraordinárias13 afastam partilha igual. Contratação e relações curtas aparecem no texto mas não foram auditadas integralmente. Não infere execução universal ou liberalização de toda política reprodutiva2026;80 não sustentado.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Freedom in the World 2025 — Nova Zelândia",
            "locator": "Overview",
            "statement": "Garantias de direitos políticos e liberdades civis coexistem com discriminação de minorias.",
            "basis": "practice",
            "publishedDate": "Edição 2025",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "ICCPR e reservas da Nova Zelândia — Ministry of Justice",
            "locator": "Reservas aos artigos 10, 14(6), 20 e 22 do ICCPR",
            "statement": "Governo registra exceções relativas a detenção, compensação e outras garantias.",
            "basis": "declaration",
            "publishedDate": "2024-04-24",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Nova Zelândia — Bill of Rights, versão30/08/2022",
            "locator": "8–16/21/23; contrapontos4–5",
            "statement": "Proteções gerais de integridade, tratamento médico, expressão, reunião, privacidade e defesa convivem com limites razoáveis e impossibilidade de invalidar leis incompatíveis.",
            "basis": "norm",
            "publishedDate": "Versão2022-08-30",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Garantias amplas de integridade, autonomia médica, expressão, vida privada e processo sustentam liberdade moderada com ressalvas parlamentares e reservas concretas.",
        "uncertainty": "Parlamento pode manter leis incompatíveis4; limites5 e reservasICCPR sobre instalações juvenis, reparação e sindicatos são contrapontos.24(a–f) lido em2013 não apresentado como2022. Não certifica toda prática2026 ou pontuação externa como medida do eixo.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "com",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Acordo NZ–UE, capítulo 2 — MFAT",
            "locator": "Artigos 2.1, 2.5 e 2.11; pp. 2-1, 2-3–2-4, 2-8",
            "statement": "Acordo prevê liberalização recíproca, cronograma tarifário e regras com exceções.",
            "basis": "norm",
            "publishedDate": "Assinado 2023-07-09; vigência 2024-05-01",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "MFAT — política comercial geral",
            "locator": "Corpo65–87:política geral",
            "statement": "A declaração nacional sustenta mercados abertos, rede de acordos e facilitação de importações/exportações de bens e serviços, além de investimento.",
            "basis": "declaration",
            "publishedDate": "Página sem data editorial com dados2024",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "MFAT — CPTPP, contrapontos de regulação pública",
            "locator": "Perguntas:soberania/Waitangi/saúde/ambiente/SOEs",
            "statement": "A política comercial conserva regulação de saúde, educação, ambiente e segurança, exceçãoWaitangi e espaço para empresas estatais; compromisso não é ausência de regulação.",
            "basis": "declaration",
            "publishedDate": "Página institucional sem data editorial",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Política nacional geral de abertura e rede de acordos, corroborada peloNZ–UE, sustenta livre-comércio moderado além do único tratado bilateral.",
        "uncertainty": "Tarifas específicas, regras de origem e soberania regulatória impedem livre-comércio extremo20; declarações não medem todos os fluxos. Data2024 do acordo não substitui versões próprias das páginas institucionais.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "rep",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Kenneth Keith — Constituição da Nova Zelândia, ensaio de 1990 atualizado até 2023",
            "locator": "The Constitution Act 1986; The role of political parties",
            "statement": "Executivo depende do Parlamento eleito e confiança partidária.",
            "basis": "declaration",
            "publishedDate": "Ensaio de 1990; atualizado em 2008, 2017 e 2023",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Freedom in the World 2025 — Nova Zelândia",
            "locator": "Overview",
            "statement": "Democracia parlamentar com histórico de eleições livres e justas é descrita.",
            "basis": "practice",
            "publishedDate": "Edição 2025",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "ICCPR e reservas da Nova Zelândia — Ministry of Justice",
            "locator": "Monitoring: Committee Decision, 2023",
            "statement": "Decisão da ONU aponta violação do sufrágio de presos.",
            "basis": "practice",
            "publishedDate": "2024-04-24",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Instituições e prática sustentam democracia forte com contraevidência específica.",
        "uncertainty": "Não é democracia sem exclusões; crítica ao sufrágio de presos foi preservada.",
        "reviewedOn": "2026-10-08"
      }
    ],
    "periodAppend": "; garantias gerais e culturais na versão2022, relações patrimoniais2023 e regras concorrenciais2024–2025",
    "rationale": "Governo parlamentar sujeito à confiança e liberdades gerais convivem com limites legislativos, garantias culturais de todas as minorias, competição regulada, abertura comercial e igualdade civil-familiar.",
    "caveat": "O Parlamento pode manter leis incompatíveis; reservasICCPR, exceções concorrenciais, justiça patrimonial e soberania regulatória permanecem. Edições específicas2022/2023/2024/2025 não certificam toda consolidação ou prática2026.",
    "period": "Descrição institucional da Constituição de 1986 no ensaio de Kenneth Keith de 1990, atualizado em 2008, 2017 e 2023; declaração Justiça atualizada em 24/04/2024; acordo comercial vigente em 01/05/2024; narrativa FH2025; garantias gerais e culturais na versão2022, relações patrimoniais2023 e regras concorrenciais2024–2025"
  },
  {
    "id": "singapore",
    "sources": [
      {
        "title": "Singapura — Competition Act e quadro geralCCS",
        "url": "https://sso.agc.gov.sg/Act/CA2004?ProvIds=P13-",
        "note": "34(1–5) integralmente lido por índice, direto falhou. Corte editorial não comprovado; quadroCCS26/09/2025 lido integralmente em rota separada, sem equivalência automática de versões."
      },
      {
        "title": "CCS — acordos entre agentes econômicos",
        "url": "https://www.ccs.gov.sg/resources/faqs/competition/agreements-between-undertakings/",
        "note": "Atualização26/09/2025, corpo27–59 diretamente lido: todos os tipos de agentes e acordo preço/produção/investimento/mercado, com limites de relevância e cooperação."
      },
      {
        "title": "Singapura — exceções de concorrência, decisãoSGHC97/2010",
        "url": "https://www.elitigation.sg/gdviewer/s/2010_SGHC_97",
        "note": "Decisão30/03/2010:24–28 e38/50 efetivamente lidos, incluindo transcrição33(4) eThirdSchedule5. Exceções históricas de Governo/órgãos e reguladores setoriais, não certificado da lista inteira2026."
      },
      {
        "title": "Singapura — Constituição, línguas e minorias",
        "url": "https://sso.agc.gov.sg/act/cons1963?ProvIds=P113-",
        "note": "Corpo152/153 completos e153A integral cotejado na rota language. Cabeçalho indexado current19/09/2026 com versão15/09/2026; data de consulta não é certificação de toda Constituição. Direto403; conhecimento linguístico na naturalização é contraponto."
      },
      {
        "title": "Singapura — liberdade religiosa, edição revisada2021",
        "url": "https://sso.agc.gov.sg/Act-Rev/CONS1963/Published?DocDate=20211231&ProvIds=pr15-",
        "note": "Edição revisada31/12/2021,15(1–4) inteiro efetivamente lido por índice. Direitos próprios/taxação e limites de ordem pública, sem certificar toda edição2026."
      },
      {
        "title": "Freedom in the World2024 — Singapura, contexto2023",
        "url": "https://freedomhouse.org/country/singapore/freedom-world/2024",
        "note": "Relato independente sobre2023: A–B,D1–4/E1–3/F1–4 eG1–3 efetivamente lidos. Não prova prática2024/2026; usado como contexto datado de coerção e contrapontos, sem copiar pontuações."
      },
      {
        "title": "Singapura — política comercial multilateral, METI2026",
        "url": "https://www.meti.gov.sg/trade-international-economic-relations/regional-and-international-platforms/world-trade-organization-wto/",
        "note": "Atualizado25/09/2026, corpo introdutório eSingaporeatWTO lidos por índice; declaração geral de abertura multilateral, não inferência só de adesão ou ausência de licenças."
      }
    ],
    "codings": [
      {
        "axis": "imi",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Singapura — Constituição, línguas e minorias",
            "locator": "152(1–2)/153A(1–2); contrapontos123/127 selecionados",
            "statement": "O Governo deve proteger interesses de todas as minorias raciais e religiosas; reconhece quatro línguas oficiais e o direito de toda pessoa usar, ensinar ou aprender qualquer outra língua, com apoio às comunidades.",
            "basis": "norm",
            "publishedDate": "Texto indexado apresentado19/09/2026; versão15/09/2026",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Proteção geral de minorias e liberdade linguística de toda pessoa, além de uma língua ou grupo isolado, sustentam multiculturalismo moderado.",
        "uncertainty": "Malay é língua nacional eMalays têm posição especial; naturalização exige conhecimentos linguísticos específicos. Não demonstra imigração aberta, igualdade prática integral ou toda política cultural; FH2024 sobre2023 descreve discriminação e ausência de asilo.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "con",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Singapura — Competition Act e quadro geralCCS",
            "locator": "34(1–5)",
            "statement": "A regra geral proíbe acordos que restrinjam competição, particularmente preços, produção, mercados, tecnologia e investimento entre agentes econômicos.",
            "basis": "norm",
            "publishedDate": "Act2004, texto indexado com emendas; corte editorial não provado",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "CCS — acordos entre agentes econômicos",
            "locator": "Corpo27–59, âmbito/cooperação",
            "statement": "O quadro administrativo aplica a regra aos agentes que exercem atividade econômica, inclusive sem finalidade lucrativa, preservando análise de efeitos relevantes e cooperação eficiente.",
            "basis": "declaration",
            "publishedDate": "Atualização2025-09-26",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Singapura — exceções de concorrência, decisãoSGHC97/2010",
            "locator": "24–28,33(4)/ThirdSchedule5",
            "statement": "A decisão transcreve exceções de atividades e acordos do Governo, órgãos estatutários ou seus agentes, e bens/serviços sob outro regulador de competição.",
            "basis": "practice",
            "publishedDate": "Decisão2010-03-30",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Regra geral de competição de preços, produção e investimento entre agentes sustenta mercado moderado, sem dedução do simples órgão.",
        "uncertainty": "Governo/órgãos/atores em seu nome e setores com regulador próprio são excepcionados no texto transcrito2010 e guia2016; cooperação e relevância competitiva limitam proibição. Presença pública e coordenação setorial impedem20; não demonstra toda aplicação2026 ou predominância empírica de mercado.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "pod",
        "position": "moderate-first",
        "claims": [
          {
            "sourceTitle": "Freedom in the World 2025 — Singapura",
            "locator": "Overview; Key Developments in 2024, POFMA",
            "statement": "POFMA foi usada contra opositores e veículos; expressão, reunião e associação sofrem restrições.",
            "basis": "practice",
            "publishedDate": "Relatório 2025; prática de 2024",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Freedom in the World2024 — Singapura, contexto2023",
            "locator": "D1–4/E1–3/F1–3, contexto2023",
            "statement": "Restrições à expressão, associação e reunião coexistem com vigilância e detenção preventiva renovável sem julgamento; muitos processos comuns têm garantias e prisões geralmente atendem padrões, mas castigos corporais persistem.",
            "basis": "practice",
            "publishedDate": "Edição2024 sobre2023",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Convergência de controles de expressão, reunião, associação, vigilância e detenção sustenta autoridade moderada, com pluralidade privada e devido processo comum como contrapontos.",
        "uncertainty": "FH2025 registraPOFMA/execuções em2024; detalhes adicionais de vigilância/detenção aqui são só contexto2023. Proteções e processos comuns impedem80; não mede todo saldo de coerção2026 nem deriva posição de pontuação externa.",
        "confidence": "medium",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "rel",
        "position": "moderate-first",
        "claims": [
          {
            "sourceTitle": "MHA — harmonia racial e religiosa",
            "locator": "MRHA, princípios; alterações de 2019",
            "statement": "Política oficial separa religião de política, exige moderação e mantém ordens restritivas e controles de influências estrangeiras.",
            "basis": "declaration",
            "publishedDate": "2026-09-29",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Singapura — liberdade religiosa, edição revisada2021",
            "locator": "15(1–4); contraponto153 na rotaPart13",
            "statement": "Toda pessoa pode professar, praticar e propagar religião, e comunidades gerir instituições/patrimônio; não há obrigação de financiar por imposto culto diferente do próprio. Há limites de ordem pública e administração legal específica de assuntos muçulmanos.",
            "basis": "norm",
            "publishedDate": "Edição revisada2021-12-31;153 texto indexado2026",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Independência política declarada peloMHA e direitos gerais de gestão religiosa sustentam separação funcional moderada, com controle estatal e tratamento específico explícitos.",
        "uncertainty": "Artigo153 e supervisão muçulmana, registro/grupos proibidosFH2024, impostos e limites gerais15(4) impedem80 ou banimento absoluto de vínculo religioso. MHAdeclara separação religião/política, não certifica neutralidade de toda prática2026.",
        "confidence": "medium",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "com",
        "position": "moderate-second",
        "claims": [
          {
            "sourceTitle": "Singapore Customs — categorias de bens tributáveis",
            "locator": "Categorias; definição de bens não tributáveis",
            "statement": "Somente quatro categorias estão sujeitas a direitos aduaneiros ou excise; bens não tributáveis podem pagar GST.",
            "basis": "declaration",
            "publishedDate": "2026-03-09",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Singapura — política comercial multilateral, METI2026",
            "locator": "Introdução/ SingaporeatWTO",
            "statement": "A política nacional declara apoio ao sistema multilateral aberto e redução de barreiras tarifárias/não tarifárias, além do mero vínculo institucional.",
            "basis": "declaration",
            "publishedDate": "Atualização2026-09-25",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Abertura multilateral geral e ampla base de importações sem direitos aduaneiros sustentam comércio aberto moderado, com tributos e controles preservados.",
        "uncertainty": "Quatro categorias tributáveis, GST, permissões aduaneiras e bens estratégicos controlados impedem20; não transforma imposto doméstico em tarifa protetora nem infere ausência de barreiras de todos os serviços/exportações2026.",
        "confidence": "medium",
        "reviewedOn": "2026-10-08"
      }
    ],
    "periodAppend": "; direitos culturais no texto constitucional indexadoSetembro2026, liberdade religiosa2021 e concorrência normativa com quadro2025",
    "rationale": "Competição partidária limitada e controles amplos da esfera civil coexistem com gestão religiosa funcionalmente separada, garantias culturais gerais, abertura comercial e competição econômica com exceções públicas.",
    "caveat": "Não confunde garantias normativas com imigração aberta ou ausência de coerção. Administração muçulmana, favorecimentoMalays, Governo/órgãos/setores excepcionados e controles comerciais são contrapontos; detalhes adicionais de coerção são contexto2023, não prova atual2026."
  }
];

/** Unimported author proposal; independent whole-profile review and Root decision pending. */
export function extendRanking675Country05(entries:ReferenceEntry[]):ReferenceEntry[]{
 return entries.map(entry=>{
  const before=ranking675Country05Before.find(item=>item.id===entry.id);
  if(!before||JSON.stringify(before)!==JSON.stringify(entry))return entry;
  const row=proposals.find(item=>item.id===entry.id)!;const sources=[...entry.sources,...row.sources];
  const post:ReferenceEntry={...entry,sources,period:row.period??entry.period+row.periodAppend,rationale:row.rationale,caveats:row.caveat,vec:{...entry.vec},evidence:{...entry.evidence},axisEvidence:{...entry.axisEvidence},coding:{...entry.coding}};
  for(const input of row.codings){const encoded=codeReferenceAxis(input,sources),axis=input.axis;post.vec[axis]=encoded.value;post.evidence![axis]=encoded.evidence;post.axisEvidence![axis]=encoded.axisEvidence;post.coding![axis]=encoded.coding;}
  return post;
 });
}
