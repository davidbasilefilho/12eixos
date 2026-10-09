import type { AxisKey, ReferenceEntry, ReferenceSource } from './references';
import { AXES } from '../lib/scoring';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';

type CountryRepair = { period: string; sources: ReferenceSource[]; coding: ReferenceAxisCoding[]; rationale: string; caveats: string };
/** Distinct immutable documentary layers; raw is never mislabeled as the live baseline. */
export const currentCountryReconciliation04RawBefore: ReferenceEntry[] = [
  {
    "id": "singapore",
    "kind": "country",
    "category": "country",
    "name": "Singapura",
    "period": "Instituições e políticas vigentes, 2024–2025",
    "vec": {
      "est": 5,
      "rep": 48,
      "pod": 77,
      "imi": 61,
      "dip": 49,
      "int": 52,
      "eco": 36,
      "con": 68,
      "com": 11,
      "rel": 54,
      "mor": 41,
      "tec": 91
    },
    "rationale": "Estado unitário, regulação econômica ativa, comércio aberto e restrições políticas relativamente maiores distinguem o caso.",
    "caveats": "Baixa pontuação relativa em democracia não significa ausência de eleições; o país combina políticas públicas e mercado de modo singular.",
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
      }
    ],
    "evidence": {
      "est": "high",
      "rep": "high",
      "pod": "medium",
      "com": "high",
      "con": "medium"
    }
  },
  {
    "id": "indonesia",
    "kind": "country",
    "category": "country",
    "name": "Indonésia",
    "period": "Instituições e políticas vigentes, 2024–2025",
    "vec": {
      "est": 14,
      "rep": 59,
      "pod": 61,
      "imi": 53,
      "dip": 42,
      "int": 53,
      "eco": 52,
      "con": 55,
      "com": 59,
      "rel": 37,
      "mor": 49,
      "tec": 65
    },
    "rationale": "A república unitária manteve eleições e alternância após 1998, ao mesmo tempo que conserva restrições cívicas, normas religiosas e forte coordenação econômica estatal.",
    "caveats": "A democracia e as liberdades variam regionalmente; o processo sucessório de 2024 e mudanças legais alteram o quadro. As pontuações não descrevem a diversidade étnica ou religiosa da população.",
    "sources": [
      {
        "title": "Freedom in the World 2025 — Indonesia",
        "url": "https://freedomhouse.org/country/indonesia/freedom-world/2025",
        "note": "Eleições, transições, restrições políticas e liberdades civis."
      },
      {
        "title": "Constitution of the Republic of Indonesia — Constitutional Court",
        "url": "https://en.mkri.id/public/content/constitution/constitution_english.pdf",
        "note": "Fonte primária para república unitária, soberania popular e organização constitucional."
      }
    ],
    "evidence": {
      "est": "high",
      "rep": "medium",
      "pod": "medium",
      "eco": "medium",
      "con": "medium",
      "rel": "medium"
    }
  },
  {
    "id": "mexico",
    "kind": "country",
    "category": "country",
    "name": "México",
    "period": "Instituições e políticas vigentes, 2024–2025",
    "vec": {
      "est": 62,
      "rep": 61,
      "pod": 59,
      "imi": 50,
      "dip": 38,
      "int": 45,
      "eco": 58,
      "con": 56,
      "com": 52,
      "rel": 77,
      "mor": 55,
      "tec": 62
    },
    "rationale": "A república federal realiza eleições competitivas, mas violência criminal, impunidade e ampliação do papel militar limitam a segurança civil e a prestação de contas.",
    "caveats": "A transição presidencial de 2024 e reformas institucionais tornam o período fluido. Não inferimos valores de comunidades mexicanas a partir das políticas federais.",
    "sources": [
      {
        "title": "Freedom in the World 2025 — Mexico",
        "url": "https://freedomhouse.org/country/mexico/freedom-world/2025",
        "note": "Eleições de 2024, violência criminosa, militarização e situação das liberdades."
      },
      {
        "title": "Constitución Política de los Estados Unidos Mexicanos",
        "url": "https://www.diputados.gob.mx/LeyesBiblio/pdf/CPEUM.pdf",
        "note": "Fonte primária para república representativa, democrática e federal."
      }
    ],
    "evidence": {
      "est": "high",
      "rep": "medium",
      "pod": "medium",
      "int": "medium",
      "eco": "medium",
      "rel": "medium"
    }
  },
  {
    "id": "turkey",
    "kind": "country",
    "category": "country",
    "name": "Turquia",
    "period": "Instituições e políticas vigentes, 2024–2025",
    "vec": {
      "est": 15,
      "rep": 35,
      "pod": 72,
      "imi": 33,
      "dip": 54,
      "int": 31,
      "eco": 44,
      "con": 51,
      "com": 56,
      "rel": 38,
      "mor": 31,
      "tec": 69
    },
    "rationale": "O governo executivo centralizado convive com eleições competitivas, mas com vantagem desigual ao incumbente, restrições a opositores e papel regional ativo.",
    "caveats": "A constituição mantém forma republicana e laica e direitos formais que não se confundem com a prática observada. Imigração, economia e política externa mudam; valores descrevem o governo, não a sociedade.",
    "sources": [
      {
        "title": "Freedom in the World 2025 — Turkey",
        "url": "https://freedomhouse.org/country/turkey/freedom-world/2025",
        "note": "Concentração presidencial, competição eleitoral, restrições à imprensa e à oposição."
      },
      {
        "title": "Constitution of the Republic of Türkiye — Constitutional Court",
        "url": "https://www.anayasa.gov.tr/en/legislation/turkish-constitution/",
        "note": "Fonte primária para a estrutura republicana e laica, distinta da avaliação de sua prática."
      }
    ],
    "evidence": {
      "est": "high",
      "rep": "high",
      "pod": "medium",
      "int": "medium",
      "rel": "medium",
      "mor": "medium"
    }
  },
  {
    "id": "saudi-arabia",
    "kind": "country",
    "category": "country",
    "name": "Arábia Saudita",
    "period": "Instituições e políticas vigentes, 2024–2025",
    "vec": {
      "est": 5,
      "rep": 5,
      "pod": 76,
      "imi": 24,
      "dip": 70,
      "int": 23,
      "eco": 45,
      "con": 64,
      "com": 41,
      "rel": 7,
      "mor": 17,
      "tec": 75
    },
    "rationale": "A monarquia hereditária concentra a autoridade política; reformas econômicas e tecnológicas convivem com restrições políticas e religiosas.",
    "caveats": "O ritmo de reformas sociais e estatais é alto e desigual. Baixa pontuação democrática descreve ausência de competição nacional por cargos executivos, não apoio popular à monarquia; petróleo e abertura privada coexistem.",
    "sources": [
      {
        "title": "Freedom in the World 2025 — Saudi Arabia",
        "url": "https://freedomhouse.org/country/saudi-arabia/freedom-world/2025",
        "note": "Monarquia hereditária, ausência de eleições nacionais competitivas e limites a direitos civis."
      },
      {
        "title": "Basic Law of Governance — Bureau of Experts at the Council of Ministers",
        "url": "https://laws.boe.gov.sa/BoeLaws/Laws/LawDetails/16a2e5f8-68c3-4a3d-9a9a-a9a700f2a2d6/1",
        "note": "Fonte oficial para a estrutura monárquica, religião estatal e organização do poder."
      }
    ],
    "evidence": {
      "est": "high",
      "rep": "high",
      "pod": "medium",
      "dip": "medium",
      "int": "medium",
      "rel": "high",
      "mor": "medium",
      "tec": "medium"
    }
  }
];

/** Live catalog snapshot before this replacement, with full sources and evidence. */
export const currentCountryReconciliation04LiveBefore: ReferenceEntry[] = [
  {
    "id": "singapore",
    "kind": "country",
    "category": "country",
    "name": "Singapura",
    "period": "Instituições e políticas vigentes, 2024–2025",
    "vec": {
      "est": 5,
      "rep": 48,
      "pod": 77,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 68,
      "com": 11,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Estado unitário, regulação econômica ativa, comércio aberto e restrições políticas relativamente maiores distinguem o caso.",
    "caveats": "Baixa pontuação relativa em democracia não significa ausência de eleições; o país combina políticas públicas e mercado de modo singular.",
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
      }
    ],
    "evidence": {
      "est": "high",
      "rep": "high",
      "pod": "medium",
      "com": "high",
      "con": "medium"
    },
    "axisEvidence": {}
  },
  {
    "id": "indonesia",
    "kind": "country",
    "category": "country",
    "name": "Indonésia",
    "period": "Instituições e políticas vigentes, 2024–2025",
    "vec": {
      "est": 14,
      "rep": 59,
      "pod": 61,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 52,
      "con": 55,
      "com": 50,
      "rel": 37,
      "mor": 50,
      "tec": 50
    },
    "rationale": "A república unitária manteve eleições e alternância após 1998, ao mesmo tempo que conserva restrições cívicas, normas religiosas e forte coordenação econômica estatal.",
    "caveats": "A democracia e as liberdades variam regionalmente; o processo sucessório de 2024 e mudanças legais alteram o quadro. As pontuações não descrevem a diversidade étnica ou religiosa da população.",
    "sources": [
      {
        "title": "Freedom in the World 2025 — Indonesia",
        "url": "https://freedomhouse.org/country/indonesia/freedom-world/2025",
        "note": "Eleições, transições, restrições políticas e liberdades civis."
      },
      {
        "title": "Constitution of the Republic of Indonesia — Constitutional Court",
        "url": "https://en.mkri.id/public/content/constitution/constitution_english.pdf",
        "note": "Fonte primária para república unitária, soberania popular e organização constitucional."
      }
    ],
    "evidence": {
      "est": "high",
      "rep": "medium",
      "pod": "medium",
      "eco": "medium",
      "con": "medium",
      "rel": "medium"
    },
    "axisEvidence": {}
  },
  {
    "id": "mexico",
    "kind": "country",
    "category": "country",
    "name": "México",
    "period": "Instituições e políticas vigentes, 2024–2025",
    "vec": {
      "est": 62,
      "rep": 61,
      "pod": 59,
      "imi": 50,
      "dip": 50,
      "int": 45,
      "eco": 58,
      "con": 50,
      "com": 50,
      "rel": 77,
      "mor": 50,
      "tec": 50
    },
    "rationale": "A república federal realiza eleições competitivas, mas violência criminal, impunidade e ampliação do papel militar limitam a segurança civil e a prestação de contas.",
    "caveats": "A transição presidencial de 2024 e reformas institucionais tornam o período fluido. Não inferimos valores de comunidades mexicanas a partir das políticas federais.",
    "sources": [
      {
        "title": "Freedom in the World 2025 — Mexico",
        "url": "https://freedomhouse.org/country/mexico/freedom-world/2025",
        "note": "Eleições de 2024, violência criminosa, militarização e situação das liberdades."
      },
      {
        "title": "Constitución Política de los Estados Unidos Mexicanos",
        "url": "https://www.diputados.gob.mx/LeyesBiblio/pdf/CPEUM.pdf",
        "note": "Fonte primária para república representativa, democrática e federal."
      }
    ],
    "evidence": {
      "est": "high",
      "rep": "medium",
      "pod": "medium",
      "int": "medium",
      "eco": "medium",
      "rel": "medium"
    },
    "axisEvidence": {}
  },
  {
    "id": "turkey",
    "kind": "country",
    "category": "country",
    "name": "Turquia",
    "period": "Instituições e políticas vigentes, 2024–2025",
    "vec": {
      "est": 15,
      "rep": 35,
      "pod": 72,
      "imi": 50,
      "dip": 50,
      "int": 31,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 38,
      "mor": 31,
      "tec": 50
    },
    "rationale": "O governo executivo centralizado convive com eleições competitivas, mas com vantagem desigual ao incumbente, restrições a opositores e papel regional ativo.",
    "caveats": "A constituição mantém forma republicana e laica e direitos formais que não se confundem com a prática observada. Imigração, economia e política externa mudam; valores descrevem o governo, não a sociedade.",
    "sources": [
      {
        "title": "Freedom in the World 2025 — Turkey",
        "url": "https://freedomhouse.org/country/turkey/freedom-world/2025",
        "note": "Concentração presidencial, competição eleitoral, restrições à imprensa e à oposição."
      },
      {
        "title": "Constitution of the Republic of Türkiye — Constitutional Court",
        "url": "https://www.anayasa.gov.tr/en/legislation/turkish-constitution/",
        "note": "Fonte primária para a estrutura republicana e laica, distinta da avaliação de sua prática."
      }
    ],
    "evidence": {
      "est": "high",
      "rep": "high",
      "pod": "medium",
      "int": "medium",
      "rel": "medium",
      "mor": "medium"
    },
    "axisEvidence": {}
  },
  {
    "id": "saudi-arabia",
    "kind": "country",
    "category": "country",
    "name": "Arábia Saudita",
    "period": "Instituições e políticas vigentes, 2024–2025",
    "vec": {
      "est": 5,
      "rep": 5,
      "pod": 76,
      "imi": 50,
      "dip": 70,
      "int": 23,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 7,
      "mor": 17,
      "tec": 75
    },
    "rationale": "A monarquia hereditária concentra a autoridade política; reformas econômicas e tecnológicas convivem com restrições políticas e religiosas.",
    "caveats": "O ritmo de reformas sociais e estatais é alto e desigual. Baixa pontuação democrática descreve ausência de competição nacional por cargos executivos, não apoio popular à monarquia; petróleo e abertura privada coexistem.",
    "sources": [
      {
        "title": "Freedom in the World 2025 — Saudi Arabia",
        "url": "https://freedomhouse.org/country/saudi-arabia/freedom-world/2025",
        "note": "Monarquia hereditária, ausência de eleições nacionais competitivas e limites a direitos civis."
      },
      {
        "title": "Basic Law of Governance — Bureau of Experts at the Council of Ministers",
        "url": "https://laws.boe.gov.sa/BoeLaws/Laws/LawDetails/16a2e5f8-68c3-4a3d-9a9a-a9a700f2a2d6/1",
        "note": "Fonte oficial para a estrutura monárquica, religião estatal e organização do poder."
      }
    ],
    "evidence": {
      "est": "high",
      "rep": "high",
      "pod": "medium",
      "dip": "medium",
      "int": "medium",
      "rel": "high",
      "mor": "medium",
      "tec": "medium"
    },
    "axisEvidence": {}
  }
];

export const currentCountryReconciliation04Repairs: Record<string, CountryRepair> = {
  "singapore": {
    "period": "Prática institucional em 2024; declarações oficiais do MHA de 29/09/2026 e Singapore Customs de 09/03/2026",
    "sources": [
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
    "coding": [
      {
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
        "reviewedOn": "2026-10-07"
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
          }
        ],
        "rationale": "Coerção sobre expressão e organização sustenta direção autoritária parcial.",
        "uncertainty": "Não presume todas as dimensões de polícia e privacidade; não converte pena de morte isolada em índice global.",
        "confidence": "medium",
        "reviewedOn": "2026-10-07"
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
          }
        ],
        "rationale": "Separação declarada entre religião e política sustenta secularismo parcial.",
        "uncertainty": "Regulação estatal intensa de organizações religiosas limita a inferência; não é certificação de separação completa nem de execução em 2024.",
        "confidence": "medium",
        "reviewedOn": "2026-10-07"
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
          }
        ],
        "rationale": "Cobertura aduaneira limitada sustenta abertura comercial parcial.",
        "uncertainty": "GST é tributação de consumo, não prova de proteção; licenças e tarifas específicas permanecem. Só cobre importações, não toda integração ou exportação.",
        "confidence": "medium",
        "reviewedOn": "2026-10-07"
      }
    ],
    "rationale": "Competição, coerção, separação entre religião e política e cobertura aduaneira possuem suporte específico.",
    "caveats": "SSO recusou acesso à Constituição com 403; não se codificou norma constitucional por fragmentos de busca. Página HDB falhou, portanto não se inventou provisão habitacional. Outras oito dimensões continuam desconhecidas."
  },
  "indonesia": {
    "period": "Prática institucional em 2024; camada normativa da tradução constitucional oferecida pela Corte em 2026, sem data editorial ou certificação independente de consolidação contemporânea",
    "sources": [
      {
        "title": "Freedom in the World 2025 — Indonésia",
        "url": "https://freedomhouse.org/country/indonesia/freedom-world/2025",
        "note": "Narrativa referente a 2024 efetivamente lida; nenhuma conversão de notas ou classificações agregadas."
      },
      {
        "title": "Constituição da Indonésia — tradução oferecida pela Corte Constitucional",
        "url": "https://en.mkri.id/download/constitution/constitution_1_1625426222_4c1e13f466840d7ed721.pdf",
        "note": "PDF de 25 páginas recuperado via índice oficial library/constitution; tradução não oficial inglesa do Ministério, última página com OCR invertido, sem data editorial segura."
      }
    ],
    "coding": [
      {
        "axis": "est",
        "position": "moderate-second",
        "claims": [
          {
            "sourceTitle": "Constituição da Indonésia — tradução oferecida pela Corte Constitucional",
            "locator": "Artigo 18(1–6)",
            "statement": "Estado unitário com autonomia regional, assembleias eleitas e regulamentos próprios; matérias nacionais são excepcionadas por lei.",
            "basis": "norm",
            "publishedDate": "Tradução sem data editorial, oferecida pela Corte e consultada em 2026-10-07; sem certificação de consolidação",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Autonomia substantiva dentro de competências nacionais sustenta direção unitária moderada.",
        "uncertainty": "Não se infere centralização da palavra unitário; a edição normativa não certifica execução territorial em 2024.",
        "confidence": "medium",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "rep",
        "position": "moderate-first",
        "claims": [
          {
            "sourceTitle": "Freedom in the World 2025 — Indonésia",
            "locator": "A1; B1–B2",
            "statement": "Eleições pacíficas e alternâncias coexistem com exigências partidárias e aumento de candidaturas locais sem concorrentes.",
            "basis": "practice",
            "publishedDate": "Relatório 2025; prática de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Competição efetiva com restrições materiais sustenta democracia parcial.",
        "uncertainty": "Corte não encontrou irregularidade na distribuição assistencial investigada; parentesco não determina o eixo sozinho.",
        "confidence": "medium",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "pod",
        "position": "moderate-first",
        "claims": [
          {
            "sourceTitle": "Freedom in the World 2025 — Indonésia",
            "locator": "D1; F2",
            "statement": "Leis digitais prendem jornalistas; polícia pratica detenções arbitrárias, coerção de confissões e nega acesso a advogados.",
            "basis": "practice",
            "publishedDate": "Relatório 2025; prática de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Coerção estatal sobre expressão e defesa sustenta autoritarismo parcial.",
        "uncertainty": "Pluralismo midiático e proteções legais coexistem; não descreve toda a segurança pública.",
        "confidence": "medium",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "rel",
        "position": "moderate-second",
        "claims": [
          {
            "sourceTitle": "Constituição da Indonésia — tradução oferecida pela Corte Constitucional",
            "locator": "Artigo 29(1–2)",
            "statement": "Estado fundamentado em Deus garante prática religiosa.",
            "basis": "norm",
            "publishedDate": "Tradução sem data editorial, oferecida pela Corte e consultada em 2026-10-07; sem certificação de consolidação",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Freedom in the World 2025 — Indonésia",
            "locator": "D2, narrativa",
            "statement": "Seis religiões reconhecidas; ateísmo não aceito legalmente e identidades sem religião enfrentam discriminação.",
            "basis": "practice",
            "publishedDate": "Relatório 2025; prática de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Privilégio institucional da adesão religiosa sustenta direção confessional parcial.",
        "uncertainty": "Pluralidade reconhecida é contraevidência; efeitos futuros do código penal de 2026 não são tratados como prática de 2024.",
        "confidence": "medium",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "imi",
        "position": "moderate-second",
        "claims": [
          {
            "sourceTitle": "Constituição da Indonésia — tradução oferecida pela Corte Constitucional",
            "locator": "Artigo 32(1–2)",
            "statement": "Protege liberdade de preservar valores culturais e reconhece línguas locais como patrimônio nacional.",
            "basis": "norm",
            "publishedDate": "Tradução sem data editorial, oferecida pela Corte e consultada em 2026-10-07; sem certificação de consolidação",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Proteção explícita de pluralidade cultural sustenta multiculturalismo parcial.",
        "uncertainty": "Só cobre cultura e língua de grupos internos; não afirma abertura migratória ou implementação contemporânea.",
        "confidence": "medium",
        "reviewedOn": "2026-10-07"
      }
    ],
    "rationale": "Competências regionais, competição, coerção estatal, privilégio religioso e proteção cultural são proposições separadas.",
    "caveats": "Camada normativa oferecida em 2026, sem prova independente de edição atual; data não foi inferida de OCR ilegível. Controle estatal do artigo 33 não basta para provar propriedade/provedor: eco desconhecido. Demais eixos sem suporte permanecem desconhecidos."
  },
  "mexico": {
    "period": "Prática institucional em 2024; Constituição oficial consolidada com últimas reformas DOF de 02/06/2026",
    "sources": [
      {
        "title": "Freedom in the World 2025 — México",
        "url": "https://freedomhouse.org/country/mexico/freedom-world/2025",
        "note": "Narrativa referente a 2024 efetivamente lida; nenhuma conversão de notas ou classificações agregadas."
      },
      {
        "title": "Constituição mexicana — Câmara, reformas até 02/06/2026",
        "url": "https://www.diputados.gob.mx/LeyesBiblio/pdf/CPEUM.pdf",
        "note": "PDF oficial de 414 páginas, cabeçalho DOF 02/06/2026; cláusulas atuais e notas de alterações efetivamente lidas."
      }
    ],
    "coding": [
      {
        "axis": "est",
        "position": "strong-first",
        "claims": [
          {
            "sourceTitle": "Constituição mexicana — Câmara, reformas até 02/06/2026",
            "locator": "Artigos 40–41 e 124",
            "statement": "Estados têm governo interior próprio e competências não atribuídas à União são reservadas a estados ou Cidade do México.",
            "basis": "norm",
            "publishedDate": "Consolidação 2026-06-02",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Competências territoriais constitucionalmente reservadas sustentam federalismo forte.",
        "uncertainty": "Supremacia do pacto federal permanece; não implica soberania irrestrita.",
        "confidence": "high",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "rep",
        "position": "moderate-first",
        "claims": [
          {
            "sourceTitle": "Freedom in the World 2025 — México",
            "locator": "Overview; A1–A3",
            "statement": "Eleições de 2024 amplamente consideradas justas coexistiram com violência contra candidatos e distorções de representação e financiamento.",
            "basis": "practice",
            "publishedDate": "Relatório 2025; prática de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Competição e alternâncias sustentam democracia parcial com obstáculos materiais.",
        "uncertainty": "Não se atribui toda a violência ao Estado nem se converte status institucional em vetor.",
        "confidence": "medium",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "pod",
        "position": "moderate-first",
        "claims": [
          {
            "sourceTitle": "Freedom in the World 2025 — México",
            "locator": "F2–F3",
            "statement": "Detenção preventiva expandida e abusos de forças de segurança limitam defesa e controle da coerção.",
            "basis": "practice",
            "publishedDate": "Relatório 2025; prática de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Coerção estatal documentada sustenta autoritarismo parcial.",
        "uncertainty": "Criminalidade privada não é confundida com política autoritária; garantias legais e progressos contra confissões por tortura permanecem.",
        "confidence": "medium",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "imi",
        "position": "moderate-second",
        "claims": [
          {
            "sourceTitle": "Constituição mexicana — Câmara, reformas até 02/06/2026",
            "locator": "Artigo 2",
            "statement": "Reconhece composição pluricultural, autonomia indígena e preservação de línguas e identidades.",
            "basis": "norm",
            "publishedDate": "Redação 2024-09-30; consolidação 2026-06-02",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Proteção de pluralidade cultural sustenta multiculturalismo parcial.",
        "uncertainty": "Recorte indígena interno, sem inferir política migratória ou efetividade plena.",
        "confidence": "medium",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "eco",
        "position": "moderate-first",
        "claims": [
          {
            "sourceTitle": "Constituição mexicana — Câmara, reformas até 02/06/2026",
            "locator": "Artigo 25, áreas estratégicas",
            "statement": "Áreas estratégicas são exclusivas do setor público; governo mantém propriedade e controle das empresas correspondentes.",
            "basis": "norm",
            "publishedDate": "Consolidação 2026-06-02",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Propriedade pública explícita em setores estratégicos sustenta direção pública parcial.",
        "uncertainty": "Setores social e privado são preservados; não é medida da participação pública na economia.",
        "confidence": "medium",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "con",
        "position": "moderate-first",
        "claims": [
          {
            "sourceTitle": "Constituição mexicana — Câmara, reformas até 02/06/2026",
            "locator": "Artigo 25, primeiros parágrafos",
            "statement": "Estado planeja, conduz, coordena e orienta atividade econômica com participação pública, social e privada.",
            "basis": "norm",
            "publishedDate": "Consolidação 2026-06-02",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Coordenação econômica explícita sustenta planejamento parcial.",
        "uncertainty": "Mandato normativo não comprova execução nem comando integral da produção.",
        "confidence": "medium",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "rel",
        "position": "strong-first",
        "claims": [
          {
            "sourceTitle": "Constituição mexicana — Câmara, reformas até 02/06/2026",
            "locator": "Artigos 24 e 130",
            "statement": "Congresso não estabelece religião; princípio histórico de separação entre Estado e igrejas rege as normas.",
            "basis": "norm",
            "publishedDate": "Consolidação 2026-06-02",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Não estabelecimento e separação constitutiva sustentam secularismo forte.",
        "uncertainty": "Norma não certifica igualdade prática de todas as crenças.",
        "confidence": "high",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "mor",
        "position": "moderate-first",
        "claims": [
          {
            "sourceTitle": "Constituição mexicana — Câmara, reformas até 02/06/2026",
            "locator": "Artigo 4, primeiros parágrafos",
            "statement": "Protege igualdade substantiva entre mulheres e homens e decisão livre sobre número e espaçamento de filhos.",
            "basis": "norm",
            "publishedDate": "Consolidação 2026-06-02",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Igualdade e autonomia reprodutiva sustentam reforma social parcial.",
        "uncertainty": "Não se afirmou direito constitucional ao aborto nem cobertura de todos os costumes.",
        "confidence": "medium",
        "reviewedOn": "2026-10-07"
      }
    ],
    "rationale": "Oito dimensões possuem cláusulas ou prática específicas; direções não são derivadas de rótulos partidários.",
    "caveats": "Norma de junho de 2026 e prática de 2024 são camadas explícitas. Defesa, intervenção, comércio e tecnologia permanecem desconhecidos; o mínimo de seis eixos não certifica completude semântica."
  },
  "turkey": {
    "period": "Prática institucional em 2024; camada normativa histórica da Constituição revista em 2017, sem certificação de consolidação em 2024–2026",
    "sources": [
      {
        "title": "Freedom in the World 2025 — Turquia",
        "url": "https://freedomhouse.org/country/turkey/freedom-world/2025",
        "note": "Narrativa referente a 2024 efetivamente lida; nenhuma conversão de notas ou classificações agregadas."
      },
      {
        "title": "Constituição turca — edição 2017 em Constitute",
        "url": "https://www.constituteproject.org/constitution/Turkey_2017?lang=en",
        "note": "Tradução integral revista em 2017; tentativas de acesso à Corte/legislação oficial falharam. Não se apresenta como norma consolidada contemporânea."
      }
    ],
    "coding": [
      {
        "axis": "est",
        "position": "moderate-second",
        "claims": [
          {
            "sourceTitle": "Constituição turca — edição 2017 em Constitute",
            "locator": "Artigos 123 e 126–127",
            "statement": "Órgãos locais eleitos coexistem com tutela administrativa central e afastamento provisório de dirigentes pelo ministro.",
            "basis": "norm",
            "publishedDate": "Edição revista em 2017",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Autonomia local subordinada à tutela central sustenta direção unitária moderada.",
        "uncertainty": "Recorte normativo de 2017; não prova toda a prática territorial atual.",
        "confidence": "medium",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "rep",
        "position": "moderate-second",
        "claims": [
          {
            "sourceTitle": "Freedom in the World 2025 — Turquia",
            "locator": "Overview; A1–A2; Key Developments in 2024",
            "statement": "Favoritismo estatal e repressão limitam competição; oposição venceu cidades importantes nas eleições municipais de 2024.",
            "basis": "practice",
            "publishedDate": "Relatório 2025; prática de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Controle assimétrico da competição sustenta direção despótica parcial.",
        "uncertainty": "Vitórias da oposição impedem presumir ausência total de competição.",
        "confidence": "medium",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "pod",
        "position": "moderate-first",
        "claims": [
          {
            "sourceTitle": "Freedom in the World 2025 — Turquia",
            "locator": "Overview; Key Developments in 2024",
            "statement": "Opositores e jornalistas foram presos; protestos bloqueados e centenas detidos; plataformas e críticas digitais sofreram restrições.",
            "basis": "practice",
            "publishedDate": "Relatório 2025; prática de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Coerção sobre expressão e organização sustenta direção autoritária parcial.",
        "uncertainty": "Não descreve todas as dimensões de defesa ou vigilância individual.",
        "confidence": "medium",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "eco",
        "position": "moderate-first",
        "claims": [
          {
            "sourceTitle": "Constituição turca — edição 2017 em Constitute",
            "locator": "Artigos 130 e 169",
            "statement": "Estado estabelece universidades públicas; florestas estatais são inalienáveis e exploradas pelo Estado.",
            "basis": "norm",
            "publishedDate": "Edição revista em 2017",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Provedor universitário e propriedade produtiva direta sustentam direção pública parcial.",
        "uncertainty": "Universidades de fundações coexistem; norma histórica não mede execução contemporânea nem toda a propriedade.",
        "confidence": "medium",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "con",
        "position": "moderate-first",
        "claims": [
          {
            "sourceTitle": "Constituição turca — edição 2017 em Constitute",
            "locator": "Artigo 166",
            "statement": "Estado planeja indústria, agricultura, investimento e emprego; atividades de desenvolvimento seguem o plano.",
            "basis": "norm",
            "publishedDate": "Edição revista em 2017",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Planejamento econômico explícito sustenta direção planejadora parcial.",
        "uncertainty": "Não certifica execução contemporânea nem planejamento integral da produção.",
        "confidence": "medium",
        "reviewedOn": "2026-10-07"
      }
    ],
    "rationale": "Competição/coerção de 2024 e autonomia/provisão/planejamento na norma histórica são separados.",
    "caveats": "Artigos 24 e 136 sobre religião foram lidos, mas separação declarada, currículo religioso e agência estatal não foram arbitrariamente promediados: rel desconhecido. Cultura, defesa, intervenção, comércio, costumes e tecnologia também desconhecidos."
  },
  "saudi-arabia": {
    "period": "Prática institucional em 2024; Lei Básica na edição com emendas de 2006/2017, sem certificação contemporânea; estratégia PIF declarada para 2026–2030",
    "sources": [
      {
        "title": "Freedom in the World 2025 — Arábia Saudita",
        "url": "https://freedomhouse.org/country/saudi-arabia/freedom-world/2025",
        "note": "Narrativa referente a 2024 efetivamente lida; nenhuma conversão de notas ou classificações agregadas."
      },
      {
        "title": "Lei Básica saudita — tradução oficial, edição com emendas até 2017",
        "url": "https://www.refworld.org/sites/default/files/2025-05/alnzam_alasasy_llhkm_1.pdf",
        "note": "Tradução oficial Bureau of Experts em espelho Refworld, 14 páginas; norma árabe prevalece. Capa 02/03/1992, apêndice até 2017; não assume redação de 2026."
      },
      {
        "title": "PIF — estratégia 2026–2030",
        "url": "https://www.pif.gov.sa/en/strategy-and-impact/our-strategy/",
        "note": "Página primária efetivamente lida: objetivos e carteiras 2026–2030, direção de investimentos e colaboração privada; sem converter métricas promocionais."
      }
    ],
    "coding": [
      {
        "axis": "rep",
        "position": "strong-second",
        "claims": [
          {
            "sourceTitle": "Lei Básica saudita — tradução oficial, edição com emendas até 2017",
            "locator": "Artigo 44",
            "statement": "Rei é autoridade final dos poderes judicial, executivo e legislativo.",
            "basis": "norm",
            "publishedDate": "Edição com emendas até 2017",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Freedom in the World 2025 — Arábia Saudita",
            "locator": "Overview; Key Developments in 2024, Shura",
            "statement": "Não há autoridades nacionais eleitas; conselho nomeado pelo rei não tem poder legislativo.",
            "basis": "practice",
            "publishedDate": "Relatório 2025; prática de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Ausência de representação nacional eleita e supremacia régia sustentam despotismo forte.",
        "uncertainty": "Conselho consultivo não equivale a legislatura democrática.",
        "confidence": "high",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "pod",
        "position": "strong-first",
        "claims": [
          {
            "sourceTitle": "Freedom in the World 2025 — Arábia Saudita",
            "locator": "Overview; Key Developments in 2024, punição de crítica",
            "statement": "Vigilância extensa e criminalização de dissenso coexistem com penas longas contra crítica política e imprensa.",
            "basis": "practice",
            "publishedDate": "Relatório 2025; prática de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Supressão ampla de dissenso sustenta autoritarismo forte.",
        "uncertainty": "Não se deduz direção apenas da quantidade de execuções nem de todos os crimes comuns.",
        "confidence": "high",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "rel",
        "position": "strong-second",
        "claims": [
          {
            "sourceTitle": "Lei Básica saudita — tradução oficial, edição com emendas até 2017",
            "locator": "Artigos 1, 7, 23 e 48",
            "statement": "Alcorão e Sunna fundamentam governo e decisões judiciais; Estado aplica Sharia e propaga Islã.",
            "basis": "norm",
            "publishedDate": "Edição com emendas até 2017",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Fundamento e aplicação religiosa do direito sustentam direção confessional forte.",
        "uncertainty": "Norma histórica datada, sem certificação de alterações posteriores; não mede crença dos habitantes.",
        "confidence": "high",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "mor",
        "position": "moderate-second",
        "claims": [
          {
            "sourceTitle": "Freedom in the World 2025 — Arábia Saudita",
            "locator": "Overview; Key Developments in 2024, vestuário",
            "statement": "Leis restringem direitos de mulheres; trajes tradicionais foram impostos a funcionários, professores e alunos em 2024.",
            "basis": "practice",
            "publishedDate": "Relatório 2025; prática de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Regras estatais de costumes sustentam conservadorismo parcial.",
        "uncertainty": "Vestuário e desigualdade não resolvem todos os costumes; não presume rejeição total de reformas.",
        "confidence": "medium",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "eco",
        "position": "moderate-first",
        "claims": [
          {
            "sourceTitle": "Lei Básica saudita — tradução oficial, edição com emendas até 2017",
            "locator": "Artigos 14 e 30–31",
            "statement": "Recursos naturais são propriedade pública; Estado fornece educação pública e cuidados de saúde aos cidadãos.",
            "basis": "norm",
            "publishedDate": "Edição com emendas até 2017",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Propriedade pública e provisão direta sustentam direção pública parcial.",
        "uncertainty": "Proteção da propriedade privada coexiste; não afirma execução ou participação pública contemporânea.",
        "confidence": "medium",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "con",
        "position": "moderate-first",
        "claims": [
          {
            "sourceTitle": "PIF — estratégia 2026–2030",
            "locator": "Objetivos estratégicos; carteiras e ecossistemas",
            "statement": "PIF dirige investimentos, administra ativos estratégicos e coordena ecossistemas com empresas privadas e governo.",
            "basis": "declaration",
            "publishedDate": "Estratégia 2026–2030; página sem data editorial consultada em 2026-10-07",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Direção pública de investimentos estratégicos sustenta planejamento parcial.",
        "uncertainty": "É mandato de fundo estatal, não comando de toda a produção nem resultado observado da estratégia.",
        "confidence": "medium",
        "reviewedOn": "2026-10-07"
      }
    ],
    "rationale": "Supremacia régia, dissenso, direito religioso, regras de costumes, provisão e investimentos têm suportes próprios.",
    "caveats": "Fonte legal histórica espelhada, não prova de consolidação de 2026. Datas normativa, prática e estratégia permanecem distintas. Artigo 41 exige respeito a tradições, mas não adoção ou abandono cultural explícito: imi desconhecido. Estrutura territorial, defesa, intervenção, comércio e tecnologia seguem desconhecidos."
  }
};

/** Complete evidence replacement for existing identities, applied after legacy preparation. */
export function reconcileCurrentCountry04(entry: ReferenceEntry): ReferenceEntry {
  const repair = currentCountryReconciliation04Repairs[entry.id];
  if (!repair) return entry;
  const sources = [...entry.sources];
  for (const source of repair.sources) if (!sources.some(prior => prior.title === source.title && prior.url === source.url)) sources.push(source);
  const result: ReferenceEntry = { ...entry, period: repair.period, rationale: repair.rationale, caveats: repair.caveats,
    vec: Object.fromEntries(AXES.map(({ key }) => [key,50])) as Record<AxisKey,number>,
    evidence: {}, axisEvidence: {}, coding: {}, sources };
  for (const input of repair.coding) {
    const coded = codeReferenceAxis(input,sources);
    result.vec[input.axis] = coded.value; result.evidence[input.axis] = coded.evidence;
    result.axisEvidence![input.axis] = coded.axisEvidence; result.coding![input.axis] = coded.coding;
  }
  return result;
}

export const currentCountryCodingAudit04 = Object.entries(currentCountryReconciliation04Repairs).map(([id,repair]) => ({
  id, reviewedOn: '2026-10-07', rawBaselineLayer: 'literal-base-record-in-references.ts-before-legacy-preparation',
  liveBaselineLayer: 'integrated-referenceEntries-before-reconciliation04',
  rawBefore: currentCountryReconciliation04RawBefore.find(entry => entry.id === id)!,
  liveBefore: currentCountryReconciliation04LiveBefore.find(entry => entry.id === id)!,
  supportedAxes: repair.coding.map(input => input.axis), sources: repair.sources,
  coding: repair.coding.map(input => codeReferenceAxis(input,repair.sources).coding),
}));
