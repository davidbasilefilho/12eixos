import type { AxisKey, ReferenceEntry, ReferenceSource } from './references';
import { AXES } from '../lib/scoring';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';

type CountryRepair = { period: string; sources: ReferenceSource[]; coding: ReferenceAxisCoding[]; rationale: string; caveats: string };
/** Distinct immutable documentary layers; raw is never mislabeled as the live baseline. */
export const currentCountryReconciliation03RawBefore: ReferenceEntry[] = [
  {
    "id": "united-states",
    "kind": "country",
    "category": "country",
    "name": "Estados Unidos",
    "period": "Instituições e políticas vigentes, 2024–2025",
    "vec": {
      "est": 88,
      "rep": 82,
      "pod": 55,
      "imi": 55,
      "dip": 75,
      "int": 29,
      "eco": 22,
      "con": 29,
      "com": 44,
      "rel": 57,
      "mor": 55,
      "tec": 83
    },
    "rationale": "Federalismo, economia predominantemente privada e capacidade militar elevada são os sinais estruturais principais.",
    "caveats": "Políticas nacionais mudam entre governos e estados; valores culturais e migratórios são aproximações centrais. Não caracteriza todos os americanos.",
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
      }
    ],
    "evidence": {
      "est": "high",
      "rep": "high",
      "pod": "medium",
      "eco": "medium"
    }
  },
  {
    "id": "france",
    "kind": "country",
    "category": "country",
    "name": "França",
    "period": "Instituições e políticas vigentes, 2024–2025",
    "vec": {
      "est": 28,
      "rep": 89,
      "pod": 60,
      "imi": 43,
      "dip": 63,
      "int": 37,
      "eco": 55,
      "con": 69,
      "com": 43,
      "rel": 91,
      "mor": 66,
      "tec": 76
    },
    "rationale": "Estado unitário, laicidade, serviços públicos e papel econômico ativo situam a França entre modelos liberais de mercado e estatistas.",
    "caveats": "A resposta estatal à segurança e aos protestos varia ao longo do tempo; imigração e costumes são áreas contestadas.",
    "sources": [
      {
        "title": "Freedom in the World — França",
        "url": "https://freedomhouse.org/country/france/freedom-world/2025",
        "note": "Instituições democráticas, liberdades e questões de segurança."
      },
      {
        "title": "Constituição da República Francesa, art. 1",
        "url": "https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000019240997/2022-01-22",
        "note": "Estado indivisível, laico, democrático e social."
      },
      {
        "title": "OECD Government at a Glance 2025",
        "url": "https://www.oecd.org/en/publications/government-at-a-glance-2025_0efd0bcd-en.html",
        "note": "Dimensão do setor público."
      }
    ],
    "evidence": {
      "est": "high",
      "rep": "high",
      "pod": "medium",
      "eco": "medium",
      "rel": "high"
    }
  },
  {
    "id": "brazil",
    "kind": "country",
    "category": "country",
    "name": "Brasil",
    "period": "Instituições e políticas vigentes, 2024–2025",
    "vec": {
      "est": 65,
      "rep": 72,
      "pod": 45,
      "imi": 50,
      "dip": 48,
      "int": 49,
      "eco": 54,
      "con": 54,
      "com": 54,
      "rel": 70,
      "mor": 61,
      "tec": 59
    },
    "rationale": "A federação constitucional e as eleições competitivas coexistem com violência política, desigualdade, serviços públicos amplos e economia mista.",
    "caveats": "Variações entre estados e governos federais são grandes. O vetor resume instituições e políticas nacionais do período, não os valores dos brasileiros; segurança, religião e comércio são estimativas mistas.",
    "sources": [
      {
        "title": "Freedom in the World 2025 — Brazil",
        "url": "https://freedomhouse.org/country/brazil/freedom-world/2025",
        "note": "Eleições competitivas, pluralismo, liberdades, violência política e limites institucionais."
      },
      {
        "title": "Constituição da República Federativa do Brasil",
        "url": "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm",
        "note": "Fonte primária para federação, regime democrático, direitos sociais e laicidade estatal."
      }
    ],
    "evidence": {
      "est": "high",
      "rep": "medium",
      "pod": "medium",
      "eco": "medium",
      "rel": "medium"
    }
  },
  {
    "id": "japan",
    "kind": "country",
    "category": "country",
    "name": "Japão",
    "period": "Instituições e políticas vigentes, 2024–2025",
    "vec": {
      "est": 15,
      "rep": 94,
      "pod": 31,
      "imi": 25,
      "dip": 34,
      "int": 53,
      "eco": 31,
      "con": 38,
      "com": 27,
      "rel": 82,
      "mor": 61,
      "tec": 82
    },
    "rationale": "Democracia parlamentar estável, economia de mercado regulada e separação constitucional entre Estado e religião definem os sinais institucionais mais claros.",
    "caveats": "A revisão de defesa e os limites migratórios são disputados e evoluem. Militarismo, assimilação e costumes são aproximações da política estatal, não descrições da população japonesa.",
    "sources": [
      {
        "title": "Freedom in the World 2025 — Japan",
        "url": "https://freedomhouse.org/country/japan/freedom-world/2025",
        "note": "Democracia multipartidária, liberdades e questões de discriminação."
      },
      {
        "title": "Constitution of Japan — Prime Minister of Japan and His Cabinet",
        "url": "https://japan.kantei.go.jp/constitution_and_government_of_japan/constitution_e.html",
        "note": "Fonte primária para soberania popular, direitos, separação religião-Estado e Artigo 9."
      }
    ],
    "evidence": {
      "est": "high",
      "rep": "high",
      "pod": "medium",
      "dip": "medium",
      "com": "medium",
      "rel": "high",
      "tec": "medium"
    }
  },
  {
    "id": "india",
    "kind": "country",
    "category": "country",
    "name": "Índia",
    "period": "Instituições e políticas vigentes, 2024–2025",
    "vec": {
      "est": 68,
      "rep": 62,
      "pod": 70,
      "imi": 39,
      "dip": 58,
      "int": 43,
      "eco": 58,
      "con": 62,
      "com": 62,
      "rel": 42,
      "mor": 45,
      "tec": 79
    },
    "rationale": "A federação e as eleições nacionais coexistem com maior concentração de poder, conflitos comunitários, expansão de políticas digitais e papel estatal relevante no desenvolvimento.",
    "caveats": "O país é internamente muito diverso e as práticas variam entre estados. O vetor resume políticas e instituições do período, não posições religiosas ou preferências de seus habitantes.",
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
      }
    ],
    "evidence": {
      "est": "high",
      "rep": "medium",
      "pod": "medium",
      "imi": "medium",
      "eco": "medium",
      "con": "medium",
      "rel": "medium",
      "tec": "medium"
    }
  },
  {
    "id": "south-africa",
    "kind": "country",
    "category": "country",
    "name": "África do Sul",
    "period": "Instituições e políticas vigentes, 2024–2025",
    "vec": {
      "est": 58,
      "rep": 83,
      "pod": 47,
      "imi": 18,
      "dip": 30,
      "int": 59,
      "eco": 61,
      "con": 65,
      "com": 48,
      "rel": 78,
      "mor": 72,
      "tec": 63
    },
    "rationale": "Uma constituição pós-apartheid protege direitos e pluralismo; eleições competitivas, políticas redistributivas e desigualdade persistente caracterizam o período.",
    "caveats": "A coalizão governamental formada após 2024 e a capacidade de serviços públicos estão em mudança. Segurança, economia e progresso social incluem resultados contraditórios e não medem crenças dos cidadãos.",
    "sources": [
      {
        "title": "Freedom in the World 2025 — South Africa",
        "url": "https://freedomhouse.org/country/south-africa/freedom-world/2025",
        "note": "Eleições competitivas, liberdades, direitos e contexto após as eleições de 2024."
      },
      {
        "title": "Constitution of the Republic of South Africa",
        "url": "https://www.gov.za/documents/constitution-republic-south-africa-1996",
        "note": "Fonte primária para democracia constitucional, diversidade, direitos e Estado de direito."
      }
    ],
    "evidence": {
      "est": "medium",
      "rep": "high",
      "imi": "high",
      "dip": "medium",
      "eco": "medium",
      "con": "medium",
      "rel": "high",
      "mor": "medium"
    }
  }
];

/** Integrated catalog snapshot taken before this repair, including source objects and evidence. */
export const currentCountryReconciliation03LiveBefore: ReferenceEntry[] = [
  {
    "id": "united-states",
    "kind": "country",
    "category": "country",
    "name": "Estados Unidos",
    "period": "Instituições e políticas vigentes, 2024–2025",
    "vec": {
      "est": 88,
      "rep": 82,
      "pod": 55,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 22,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Federalismo, economia predominantemente privada e capacidade militar elevada são os sinais estruturais principais.",
    "caveats": "Políticas nacionais mudam entre governos e estados; valores culturais e migratórios são aproximações centrais. Não caracteriza todos os americanos.",
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
      }
    ],
    "evidence": {
      "est": "high",
      "rep": "high",
      "pod": "medium",
      "eco": "medium"
    },
    "axisEvidence": {}
  },
  {
    "id": "brazil",
    "kind": "country",
    "category": "country",
    "name": "Brasil",
    "period": "Instituições e políticas vigentes, 2024–2025",
    "vec": {
      "est": 65,
      "rep": 72,
      "pod": 45,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 54,
      "con": 50,
      "com": 50,
      "rel": 70,
      "mor": 50,
      "tec": 50
    },
    "rationale": "A federação constitucional e as eleições competitivas coexistem com violência política, desigualdade, serviços públicos amplos e economia mista.",
    "caveats": "Variações entre estados e governos federais são grandes. O vetor resume instituições e políticas nacionais do período, não os valores dos brasileiros; segurança, religião e comércio são estimativas mistas.",
    "sources": [
      {
        "title": "Freedom in the World 2025 — Brazil",
        "url": "https://freedomhouse.org/country/brazil/freedom-world/2025",
        "note": "Eleições competitivas, pluralismo, liberdades, violência política e limites institucionais."
      },
      {
        "title": "Constituição da República Federativa do Brasil",
        "url": "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm",
        "note": "Fonte primária para federação, regime democrático, direitos sociais e laicidade estatal."
      }
    ],
    "evidence": {
      "est": "high",
      "rep": "medium",
      "pod": "medium",
      "eco": "medium",
      "rel": "medium"
    },
    "axisEvidence": {}
  },
  {
    "id": "japan",
    "kind": "country",
    "category": "country",
    "name": "Japão",
    "period": "Instituições e políticas vigentes, 2024–2025",
    "vec": {
      "est": 15,
      "rep": 94,
      "pod": 31,
      "imi": 50,
      "dip": 34,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 27,
      "rel": 82,
      "mor": 50,
      "tec": 82
    },
    "rationale": "Democracia parlamentar estável, economia de mercado regulada e separação constitucional entre Estado e religião definem os sinais institucionais mais claros.",
    "caveats": "A revisão de defesa e os limites migratórios são disputados e evoluem. Militarismo, assimilação e costumes são aproximações da política estatal, não descrições da população japonesa.",
    "sources": [
      {
        "title": "Freedom in the World 2025 — Japan",
        "url": "https://freedomhouse.org/country/japan/freedom-world/2025",
        "note": "Democracia multipartidária, liberdades e questões de discriminação."
      },
      {
        "title": "Constitution of Japan — Prime Minister of Japan and His Cabinet",
        "url": "https://japan.kantei.go.jp/constitution_and_government_of_japan/constitution_e.html",
        "note": "Fonte primária para soberania popular, direitos, separação religião-Estado e Artigo 9."
      }
    ],
    "evidence": {
      "est": "high",
      "rep": "high",
      "pod": "medium",
      "dip": "medium",
      "com": "medium",
      "rel": "high",
      "tec": "medium"
    },
    "axisEvidence": {}
  },
  {
    "id": "india",
    "kind": "country",
    "category": "country",
    "name": "Índia",
    "period": "Instituições e políticas vigentes, 2024–2025",
    "vec": {
      "est": 68,
      "rep": 62,
      "pod": 70,
      "imi": 39,
      "dip": 50,
      "int": 50,
      "eco": 58,
      "con": 62,
      "com": 50,
      "rel": 42,
      "mor": 50,
      "tec": 79
    },
    "rationale": "A federação e as eleições nacionais coexistem com maior concentração de poder, conflitos comunitários, expansão de políticas digitais e papel estatal relevante no desenvolvimento.",
    "caveats": "O país é internamente muito diverso e as práticas variam entre estados. O vetor resume políticas e instituições do período, não posições religiosas ou preferências de seus habitantes.",
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
      }
    ],
    "evidence": {
      "est": "high",
      "rep": "medium",
      "pod": "medium",
      "imi": "medium",
      "eco": "medium",
      "con": "medium",
      "rel": "medium",
      "tec": "medium"
    },
    "axisEvidence": {}
  },
  {
    "id": "south-africa",
    "kind": "country",
    "category": "country",
    "name": "África do Sul",
    "period": "Instituições e políticas vigentes, 2024–2025",
    "vec": {
      "est": 58,
      "rep": 83,
      "pod": 50,
      "imi": 18,
      "dip": 30,
      "int": 50,
      "eco": 61,
      "con": 65,
      "com": 50,
      "rel": 78,
      "mor": 72,
      "tec": 50
    },
    "rationale": "Uma constituição pós-apartheid protege direitos e pluralismo; eleições competitivas, políticas redistributivas e desigualdade persistente caracterizam o período.",
    "caveats": "A coalizão governamental formada após 2024 e a capacidade de serviços públicos estão em mudança. Segurança, economia e progresso social incluem resultados contraditórios e não medem crenças dos cidadãos.",
    "sources": [
      {
        "title": "Freedom in the World 2025 — South Africa",
        "url": "https://freedomhouse.org/country/south-africa/freedom-world/2025",
        "note": "Eleições competitivas, liberdades, direitos e contexto após as eleições de 2024."
      },
      {
        "title": "Constitution of the Republic of South Africa",
        "url": "https://www.gov.za/documents/constitution-republic-south-africa-1996",
        "note": "Fonte primária para democracia constitucional, diversidade, direitos e Estado de direito."
      }
    ],
    "evidence": {
      "est": "medium",
      "rep": "high",
      "imi": "high",
      "dip": "medium",
      "eco": "medium",
      "con": "medium",
      "rel": "high",
      "mor": "medium"
    },
    "axisEvidence": {}
  },
  {
    "id": "france",
    "kind": "country",
    "category": "country",
    "name": "França",
    "period": "Instituições e políticas vigentes, 2024–2025",
    "vec": {
      "est": 28,
      "rep": 89,
      "pod": 60,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 55,
      "con": 50,
      "com": 50,
      "rel": 91,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Estado unitário, laicidade, serviços públicos e papel econômico ativo situam a França entre modelos liberais de mercado e estatistas.",
    "caveats": "A resposta estatal à segurança e aos protestos varia ao longo do tempo; imigração e costumes são áreas contestadas.",
    "sources": [
      {
        "title": "Freedom in the World — França",
        "url": "https://freedomhouse.org/country/france/freedom-world/2025",
        "note": "Instituições democráticas, liberdades e questões de segurança."
      },
      {
        "title": "Constituição da República Francesa, art. 1",
        "url": "https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000019240997/2022-01-22",
        "note": "Estado indivisível, laico, democrático e social."
      },
      {
        "title": "OECD Government at a Glance 2025",
        "url": "https://www.oecd.org/en/publications/government-at-a-glance-2025_0efd0bcd-en.html",
        "note": "Dimensão do setor público."
      }
    ],
    "evidence": {
      "est": "high",
      "rep": "high",
      "pod": "medium",
      "eco": "medium",
      "rel": "high"
    },
    "axisEvidence": {}
  }
];

export const currentCountryReconciliation03Repairs: Record<string, CountryRepair> = {
  "united-states": {
    "period": "Prática institucional em 2024; Constituição e emendas de 1791 no texto oferecido pelo Senado em 2026",
    "sources": [
      {
        "title": "Freedom in the World 2025 — Estados Unidos",
        "url": "https://freedomhouse.org/country/united-states/freedom-world/2025",
        "note": "Narrativa institucional de 2024 lida; pontuações agregadas e respostas numéricas não são convertidas em eixos."
      },
      {
        "title": "Constituição dos Estados Unidos — Senado, texto oferecido em 2026",
        "url": "https://www.senate.gov/about/origins-foundations/senate-and-constitution/constitution.htm",
        "note": "Texto integral lido, incluindo 27 emendas; as cláusulas de 1791 e o recorte de prática de 2024 são datados separadamente."
      }
    ],
    "coding": [
      {
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
        "reviewedOn": "2026-10-07"
      },
      {
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
        "reviewedOn": "2026-10-07"
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
          }
        ],
        "rationale": "Garantias contra coerção sustentam liberdade parcial com déficits de execução.",
        "uncertainty": "Não descreve todas as políticas de vigilância, armas ou polícia; limitações não são apagadas pela norma.",
        "reviewedOn": "2026-10-07"
      },
      {
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
        "reviewedOn": "2026-10-07"
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
          }
        ],
        "rationale": "Igualdade matrimonial sustenta direção reformista parcial.",
        "uncertainty": "Aborto e direitos trans não são presumidos progressistas; o construto é coberto parcialmente.",
        "reviewedOn": "2026-10-07"
      }
    ],
    "rationale": "Federalismo, competição eleitoral, limites à coerção, não estabelecimento religioso e igualdade matrimonial são documentados separadamente.",
    "caveats": "Recorte institucional, sem imputar opinião aos habitantes. Propriedade, planejamento, comércio, defesa, intervenção, cultura e tecnologia permanecem desconhecidos nesta revisão; não se infere estrutura produtiva da simples proteção jurídica de propriedade."
  },
  "france": {
    "period": "Prática institucional em 2024; artigos constitucionais nas redações de 2003, 2008 e 10/03/2024 oferecidas pelo Legifrance",
    "sources": [
      {
        "title": "Freedom in the World 2025 — França",
        "url": "https://freedomhouse.org/country/france/freedom-world/2025",
        "note": "Narrativa institucional de 2024 lida; pontuações agregadas e respostas numéricas não são convertidas em eixos."
      },
      {
        "title": "Constituição francesa, artigo 1 — Legifrance",
        "url": "https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000019240997",
        "note": "Texto integral do artigo, redação vigente desde 2008; não usa a antiga URL congelada em 2022."
      },
      {
        "title": "Constituição francesa, artigo 72 — Legifrance",
        "url": "https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000006527579",
        "note": "Artigo completo: poderes locais, regulamentação, experimentação e controle nacional de legalidade."
      },
      {
        "title": "Constituição francesa, artigo 34 — Legifrance",
        "url": "https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000049255019",
        "note": "Redação em vigor desde 10/03/2024; garantia constitucional da liberdade de interrupção da gravidez."
      }
    ],
    "coding": [
      {
        "axis": "est",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constituição francesa, artigo 1 — Legifrance",
            "locator": "Artigo 1",
            "statement": "República indivisível com organização descentralizada.",
            "basis": "norm",
            "publishedDate": "2008-07-25",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Constituição francesa, artigo 72 — Legifrance",
            "locator": "Artigo 72, parágrafos 2–6",
            "statement": "Conselhos locais administram e regulamentam dentro da lei; representante nacional controla legalidade.",
            "basis": "norm",
            "publishedDate": "2003-03-29",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Autonomia local substantiva dentro da supremacia legal nacional sustenta direção unitária moderada.",
        "uncertainty": "Não se deduz centralização do adjetivo indivisível sozinho; autonomia fiscal, prática territorial e ultramar exigem revisão própria.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "rep",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Freedom in the World 2025 — França",
            "locator": "Overview; Key Developments in 2024, eleições legislativas e queda do governo",
            "statement": "Eleições competitivas produziram Parlamento plural e governo minoritário sujeito a voto de desconfiança.",
            "basis": "practice",
            "publishedDate": "Edição 2025; acontecimentos de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Competição e representação efetivas sustentam a direção democrática neste recorte.",
        "uncertainty": "Competição eleitoral não elimina desigualdade de representação, financiamento ou déficits civis.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Freedom in the World 2025 — França",
            "locator": "Overview; Key Developments in 2024, protestos, Nova Caledônia e Martinica",
            "statement": "Direitos civis coexistem com proibições de protestos, toques de recolher e bloqueio de TikTok na Nova Caledônia.",
            "basis": "practice",
            "publishedDate": "Edição 2025; acontecimentos de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Garantias civis com restrições concretas sustentam liberdade parcial.",
        "uncertainty": "A narrativa não autoriza classificar toda a segurança francesa como permissiva nem resolver todas as políticas digitais.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "rel",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Constituição francesa, artigo 1 — Legifrance",
            "locator": "Artigo 1",
            "statement": "Estado laico respeita todas as crenças e igualdade sem distinção religiosa.",
            "basis": "norm",
            "publishedDate": "2008-07-25",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Laicidade constitutiva explícita sustenta separação institucional.",
        "uncertainty": "Norma, não certificação de igualdade prática; restrições religiosas e conflitos sobre símbolos requerem auditoria própria.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constituição francesa, artigo 34 — Legifrance",
            "locator": "Artigo 34, parágrafo da lei sobre interrupção da gravidez",
            "statement": "Lei define condições para exercer liberdade garantida de interrupção da gravidez.",
            "basis": "norm",
            "publishedDate": "2024-03-10",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Garantia de autonomia reprodutiva sustenta reforma social parcial.",
        "uncertainty": "Não implica ausência de condições legais nem posições sobre todos os costumes.",
        "reviewedOn": "2026-10-07"
      }
    ],
    "rationale": "Descentralização sob lei nacional, competição parlamentar, direitos com restrições, laicidade e autonomia reprodutiva possuem trechos próprios.",
    "caveats": "Texto completo do Conseil constitutionnel e reaberturas do tratado europeu falharam; comércio permanece desconhecido, sem reutilizar inferência não verificada. Propriedade, planejamento, imigração, defesa, intervenção e tecnologia não receberam evidência neste lote."
  },
  "brazil": {
    "period": "Prática institucional em 2024; norma constitucional no texto consolidado que inclui emendas até 2025, consultado em 07/10/2026",
    "sources": [
      {
        "title": "Freedom in the World 2025 — Brasil",
        "url": "https://freedomhouse.org/country/brazil/freedom-world/2025",
        "note": "Narrativa institucional de 2024 lida; pontuações agregadas e respostas numéricas não são convertidas em eixos."
      },
      {
        "title": "Constituição brasileira — Planalto, texto consolidado consultado em 2026",
        "url": "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm",
        "note": "Texto primário integral; incorpora redações vigentes e versões riscadas, distinguídas na leitura. Extração apresenta caracteres acentuados corrompidos."
      }
    ],
    "coding": [
      {
        "axis": "est",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Constituição brasileira — Planalto, texto consolidado consultado em 2026",
            "locator": "Artigos 18 e 25",
            "statement": "União, estados, Distrito Federal e municípios são autônomos; estados possuem competências reservadas.",
            "basis": "norm",
            "publishedDate": "Texto consolidado consultado em 2026, com emendas de 2025",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Autonomia territorial e competências próprias sustentam federalismo.",
        "uncertainty": "Há competências federais exclusivas e supremacia constitucional; não é autonomia irrestrita.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "rep",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Freedom in the World 2025 — Brasil",
            "locator": "Overview; A1–A3; B1, eleições e pluralismo",
            "statement": "Eleições competitivas e pluralismo coexistem com violência política e tentativa de ruptura institucional.",
            "basis": "practice",
            "publishedDate": "Edição 2025; acontecimentos de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Competição e representação efetivas sustentam a direção democrática neste recorte.",
        "uncertainty": "Competição eleitoral não elimina desigualdade de representação, financiamento ou déficits civis.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constituição brasileira — Planalto, texto consolidado consultado em 2026",
            "locator": "Artigo 5, LIV–LVI e LXI–LXV",
            "statement": "Devido processo, defesa, prisão judicial ou flagrante e relaxamento de prisão ilegal são garantidos.",
            "basis": "norm",
            "publishedDate": "Texto consolidado consultado em 2026",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Freedom in the World 2025 — Brasil",
            "locator": "F2–F3, narrativa de processo penal e polícia",
            "statement": "Acesso desigual à defesa, abusos policiais e prisões degradadas limitam garantias.",
            "basis": "practice",
            "publishedDate": "Edição 2025; acontecimentos de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Garantias contra coerção sustentam liberdade parcial, com contraevidência grave.",
        "uncertainty": "Norma não prova cumprimento; mortes policiais, impunidade e condições prisionais impedem extremo libertário.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constituição brasileira — Planalto, texto consolidado consultado em 2026",
            "locator": "Artigos 196 e 198–199",
            "statement": "SUS assegura serviço público de saúde; iniciativa privada atua livremente e pode complementar o sistema.",
            "basis": "norm",
            "publishedDate": "Texto consolidado consultado em 2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Provisão pública direta de saúde sustenta direção pública parcial.",
        "uncertainty": "Recorte setorial; não mede propriedade estatal de toda a produção nem cumprimento universal.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "con",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constituição brasileira — Planalto, texto consolidado consultado em 2026",
            "locator": "Artigo 174 e §1",
            "statement": "Planejamento é obrigatório para setor público e indicativo para privado, com planos nacionais e regionais.",
            "basis": "norm",
            "publishedDate": "1988; texto consolidado consultado em 2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Coordenação econômica estatal com setor privado autônomo sustenta planejamento parcial.",
        "uncertainty": "Não é comando central integral nem medida de volume efetivamente planejado.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "rel",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Constituição brasileira — Planalto, texto consolidado consultado em 2026",
            "locator": "Artigo 19, I",
            "statement": "Proíbe estabelecimento e subsídio de cultos e dependência ou aliança, ressalvada colaboração de interesse público.",
            "basis": "norm",
            "publishedDate": "1988; texto consolidado consultado em 2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Não estabelecimento explícito sustenta separação institucional.",
        "uncertainty": "Exceção de cooperação e execução religiosa não são apagadas; não mede crenças dos brasileiros.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constituição brasileira — Planalto, texto consolidado consultado em 2026",
            "locator": "Artigo 4, IV e VI–VII",
            "statement": "Princípios externos incluem não intervenção, defesa da paz e solução pacífica de conflitos.",
            "basis": "norm",
            "publishedDate": "1988; texto consolidado consultado em 2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Preferência normativa por paz e solução diplomática sustenta direção pacífica parcial.",
        "uncertainty": "Princípio formal não demonstra ausência de força armada nem política efetiva em cada conflito.",
        "reviewedOn": "2026-10-07"
      }
    ],
    "rationale": "Federalismo, eleições, garantias com déficits, saúde pública plural, planejamento indicativo, não estabelecimento e preferência diplomática têm evidência localizada.",
    "caveats": "Perfil institucional sem imputação aos habitantes. Cultura, intervenção, comércio, costumes e tecnologia ficam desconhecidos. Fonte constitucional contém redações históricas riscadas; somente os trechos ativos indicados foram usados."
  },
  "japan": {
    "period": "Prática institucional em 2024; Constituição de 1946 oferecida pela Câmara em 2026 e interpretação oficial de defesa posterior à decisão de 01/07/2014; provisão escolar pública declarada pelo MEXT em página sem data consultada em 2026",
    "sources": [
      {
        "title": "Freedom in the World 2025 — Japão",
        "url": "https://freedomhouse.org/country/japan/freedom-world/2025",
        "note": "Narrativa institucional de 2024 lida; pontuações agregadas e respostas numéricas não são convertidas em eixos."
      },
      {
        "title": "Constituição japonesa — Câmara dos Representantes",
        "url": "https://www.shugiin.go.jp/internet/itdb_english.nsf/html/statics/english/constitution_e.htm",
        "note": "Texto oficial efetivamente lido; a URL legada do Kantei falhou."
      },
      {
        "title": "Interpretação constitucional de defesa — Ministry of Defense",
        "url": "https://www.mod.go.jp/en/d_act/d_policy/index.html",
        "note": "Página oficial sem data editorial: interpretação do artigo 9, força mínima de autodefesa e condições de defesa coletiva; declaração governamental, não estatística de prática."
      },
      {
        "title": "MEXT — admissão em escolas públicas de ensino obrigatório",
        "url": "https://www.mext.go.jp/a_menu/shotou/clarinet/003/001.htm",
        "note": "Página oficial japonesa efetivamente lida: introdução, segundo parágrafo, descreve escolas públicas, matrícula de estrangeiros e gratuidade. Sem data editorial; inclui plano de docentes até ano fiscal 2026."
      }
    ],
    "coding": [
      {
        "axis": "rep",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Freedom in the World 2025 — Japão",
            "locator": "Overview; A1–A2; B2, eleição de outubro de 2024",
            "statement": "Eleições competitivas reduziram a maioria da coalizão governante; oposição ganhou espaço.",
            "basis": "practice",
            "publishedDate": "Edição 2025; acontecimentos de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Competição e representação efetivas sustentam a direção democrática neste recorte.",
        "uncertainty": "Competição eleitoral não elimina desigualdade de representação, financiamento ou déficits civis.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constituição japonesa — Câmara dos Representantes",
            "locator": "Artigos 31 e 33",
            "statement": "Prisão e punição dependem de processo legal e mandado judicial.",
            "basis": "norm",
            "publishedDate": "1946-11-03; texto oferecido em 2026",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Freedom in the World 2025 — Japão",
            "locator": "F2, detenção e caso Hakamada",
            "statement": "Detenção pré-acusação prolongada e confissões coercitivas coexistem com garantias geralmente respeitadas.",
            "basis": "practice",
            "publishedDate": "Edição 2025; acontecimentos de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Garantias e controle judicial sustentam liberdade parcial.",
        "uncertainty": "Não oculta 23 dias de detenção nem fabrica abrangência total a partir de dois artigos.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constituição japonesa — Câmara dos Representantes",
            "locator": "Artigo 26",
            "statement": "Educação obrigatória é gratuita.",
            "basis": "norm",
            "publishedDate": "1946-11-03; texto oferecido em 2026",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "MEXT — admissão em escolas públicas de ensino obrigatório",
            "locator": "Introdução, segundo parágrafo (公立の義務教育諸学校); seção 1 sobre quadro de professores",
            "statement": "Escolas públicas de ensino obrigatório recebem crianças estrangeiras, sem cobrança de mensalidade e com livros gratuitos.",
            "basis": "declaration",
            "publishedDate": "Página sem data editorial; consulta 2026-10-07, plano de professores até FY2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Escolas públicas identificadas pelo próprio provedor estatal e gratuidade constitucional sustentam provisão pública parcial.",
        "uncertainty": "Recorte educacional; declaração atual sem data não certifica execução em 2024 nem propriedade de toda a produção. Escolas privadas, refeições e materiais pagos permanecem; não se infere provedor público da gratuidade isolada.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "rel",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Constituição japonesa — Câmara dos Representantes",
            "locator": "Artigo 20",
            "statement": "Organizações religiosas não recebem privilégios estatais; Estado e órgãos abstêm-se de educação e atividade religiosa.",
            "basis": "norm",
            "publishedDate": "1946-11-03; texto oferecido em 2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Separação institucional explícita sustenta laicidade forte.",
        "uncertainty": "Não mede fé pessoal nem elimina toda controvérsia de implementação.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constituição japonesa — Câmara dos Representantes",
            "locator": "Artigo 9",
            "statement": "Renuncia à guerra como meio de resolver disputas internacionais.",
            "basis": "norm",
            "publishedDate": "1946-11-03; texto oferecido em 2026",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Interpretação constitucional de defesa — Ministry of Defense",
            "locator": "The Constitution and the Right of Self-Defense; Scope of the Right of Self-Defense",
            "statement": "Interpretação permite força mínima de autodefesa, incluindo hipóteses limitadas de ataque contra aliado.",
            "basis": "declaration",
            "publishedDate": "Página sem data; inclui interpretação de 2014, consultada em 2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Limites constitucionais e interpretação restritiva sustentam direção pacífica parcial.",
        "uncertainty": "Autodefesa, bases dos EUA e defesa coletiva são contraevidências; não afirma desarmamento ou pacifismo absoluto.",
        "reviewedOn": "2026-10-07"
      }
    ],
    "rationale": "Eleição competitiva, garantias processuais limitadas, educação gratuita, separação religiosa e limites de defesa sustentam cinco eixos.",
    "caveats": "Local autonomy, artigos 92–95, não resolve predominância de competências territoriais: est permanece desconhecido. Planejamento, propriedade geral, comércio, cultura, intervenção, costumes e tecnologia ficam desconhecidos; não se deduz tecnocracia de capacidade tecnológica."
  },
  "india": {
    "period": "Prática institucional em 2024, exceto Caxemira administrada pela Índia; norma constitucional em 01/05/2024 e mandato NITI consultado em 2026",
    "sources": [
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
      }
,
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
    "coding": [
      {
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
        "reviewedOn": "2026-10-07"
      },
      {
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
        "reviewedOn": "2026-10-07"
      },
      {
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
        "reviewedOn": "2026-10-07"
      },
      {
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
        "reviewedOn": "2026-10-07"
      },
      {
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
        "reviewedOn": "2026-10-07"
      }
    ],
    "rationale": "Competências estaduais limitadas, competição sob restrições, coerção, educação pública, não estabelecimento parcial e coordenação estratégica têm suportes distintos.",
    "caveats": "FH exclui Caxemira administrada pela Índia; não estender sua prática ao território excluído. Norma datada de 2024 e mandato consultado em 2026 são camadas distintas. Cultura, defesa, intervenção, comércio, costumes e tecnologia permanecem desconhecidos."
  },
  "south-africa": {
    "period": "Prática institucional em 2024; normas da edição constitucional oficial com emendas até 2012, sem certificação de consolidação em 2024–2026",
    "sources": [
      {
        "title": "Freedom in the World 2025 — África do Sul",
        "url": "https://freedomhouse.org/country/south-africa/freedom-world/2025",
        "note": "Narrativa institucional de 2024 lida; pontuações agregadas e respostas numéricas não são convertidas em eixos."
      },
      {
        "title": "Constituição da África do Sul — edição oficial com emendas até 2012",
        "url": "https://www.justice.gov.za/constitution/SAConstitution-web-eng.pdf",
        "note": "PDF oficial de 182 páginas; capa registra emendas até 2012. Camada normativa datada, não confirmação de cláusulas após emendas posteriores, incluindo língua de sinais em 2023."
      }
    ],
    "coding": [
      {
        "axis": "est",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constituição da África do Sul — edição oficial com emendas até 2012",
            "locator": "Artigos 40–41, 44 e 146–147; Schedule 5",
            "statement": "Esferas nacional, provincial e local possuem poderes; competências provinciais exclusivas admitem exceções nacionais.",
            "basis": "norm",
            "publishedDate": "Edição com emendas até 2012",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Poderes territoriais próprios com intervenção nacional limitada sustentam descentralização moderada.",
        "uncertainty": "Recorte da edição 2012; não certifica toda a prática territorial contemporânea nem status após emendas posteriores.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "rep",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Freedom in the World 2025 — África do Sul",
            "locator": "Overview; A1–A2, eleições de maio e coalizão",
            "statement": "Eleições livres e competitivas reduziram maioria do ANC e produziram coalizão multipartidária.",
            "basis": "practice",
            "publishedDate": "Edição 2025; acontecimentos de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Competição e representação efetivas sustentam a direção democrática neste recorte.",
        "uncertainty": "Competição eleitoral não elimina desigualdade de representação, financiamento ou déficits civis.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constituição da África do Sul — edição oficial com emendas até 2012",
            "locator": "Artigos 12, 14 e 35; pp. 17–19 do PDF para art. 35",
            "statement": "Garante segurança pessoal, privacidade, defesa e controle judicial de prisão.",
            "basis": "norm",
            "publishedDate": "Edição com emendas até 2012",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Freedom in the World 2025 — África do Sul",
            "locator": "F2, duração da prisão preventiva e acesso à defesa",
            "statement": "Atrasos e falta de defesa geram detenções prolongadas antes do julgamento.",
            "basis": "practice",
            "publishedDate": "Edição 2025; acontecimentos de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Garantias de defesa e liberdade sustentam direção parcial, com déficits concretos.",
        "uncertainty": "Norma de 2012 não certifica prática plena ou redação atual; atrasos judiciais impedem extremo libertário.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constituição da África do Sul — edição oficial com emendas até 2012",
            "locator": "Artigos 27 e 29",
            "statement": "Prevê serviços sociais e educacionais públicos, com realização progressiva e recursos disponíveis.",
            "basis": "norm",
            "publishedDate": "Edição com emendas até 2012",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Provisão social pública sustenta direção pública parcial.",
        "uncertainty": "Norma da edição 2012; não prova execução, universalidade nem predominância estatal de produção.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constituição da África do Sul — edição oficial com emendas até 2012",
            "locator": "Artigos 9 e 12(2)",
            "statement": "Proíbe discriminação por orientação sexual e protege decisões reprodutivas.",
            "basis": "norm",
            "publishedDate": "Edição com emendas até 2012",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Freedom in the World 2025 — África do Sul",
            "locator": "Overview; F4, igualdade e violência de gênero",
            "statement": "Igualdade formal coexiste com desigualdade e violência contra mulheres.",
            "basis": "practice",
            "publishedDate": "Edição 2025; acontecimentos de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Igualdade jurídica e autonomia reprodutiva sustentam reforma social parcial.",
        "uncertainty": "Não apaga violência e desigualdade; redação atual pós-2012 não foi certificada.",
        "reviewedOn": "2026-10-07"
      }
    ],
    "rationale": "Poderes territoriais, eleições competitivas, garantias processuais, provisão pública e igualdade jurídica são tratados por norma e prática separadas.",
    "caveats": "Não converter liberdade religiosa em separação: artigo 15 permite religião em instituições públicas e rel permanece desconhecido. PDF normativo termina em 2012; reconhecimento contemporâneo de cada cláusula precisa de consolidação adicional. Cultura, defesa, intervenção, planejamento, comércio e tecnologia ficam desconhecidos."
  }
};

/** Complete evidence replacement for existing identities, applied after legacy preparation. */
export function reconcileCurrentCountry03(entry: ReferenceEntry): ReferenceEntry {
  const repair = currentCountryReconciliation03Repairs[entry.id];
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
  if(entry.id==='india')Object.assign(result,{unknownAxisReasons:{eco:'Direito21A, rede escolarKVS e reembolso privadoRTE são fatos setoriais; sem evidência suficiente da orientação de toda economia. 50 desconhecido, sem evidência.'},educationResearch:indiaEducationResearch03});
  return result;
}

export const currentCountryCodingAudit03 = Object.entries(currentCountryReconciliation03Repairs).map(([id,repair]) => ({
  id, reviewedOn: '2026-10-07', rawBaselineLayer: 'literal-base-record-in-references.ts-before-legacy-preparation',
  liveBaselineLayer: 'integrated-referenceEntries-before-reconciliation03',
  rawBefore: currentCountryReconciliation03RawBefore.find(entry => entry.id === id)!,
  liveBefore: currentCountryReconciliation03LiveBefore.find(entry => entry.id === id)!,
  supportedAxes: repair.coding.map(input => input.axis), sources: repair.sources,
  coding: repair.coding.map(input => codeReferenceAxis(input,repair.sources).coding),
}));

/** Sector facts retained as research; explicitly excluded from whole-economy axis. */
export const indiaEducationResearch03 = {
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
} as const;
