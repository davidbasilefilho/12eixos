import type { ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';
type CountryCoverageAddition = { sources: ReferenceSource[]; coding: ReferenceAxisCoding[]; periodAddition: string; caveatAddition: string };
/** Literal base records or unprepared generated batch03 records. */
export const currentCountryCoverage05OriginalBefore: ReferenceEntry[] = [
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
    "id": "andorra-current-2025",
    "name": "Andorra",
    "aliases": [],
    "kind": "country",
    "category": "country",
    "period": "Prática em 2024; norma: 1993, texto oferecido pelo Parlamento em consulta de 2026; sem certificação independente de consolidação",
    "vec": {
      "est": 40,
      "rep": 80,
      "pod": 40,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 40,
      "mor": 40,
      "tec": 50
    },
    "evidence": {
      "rep": "high",
      "est": "medium",
      "rel": "medium",
      "pod": "medium",
      "mor": "medium"
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
      "mor": {
        "sourceTitles": [
          "Freedom in the World 2025 — Andorra"
        ],
        "rationale": "Aborto permanecia completamente proibido; ativista crítica foi absolvida de difamação. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Codificação parcial da escolha reprodutiva, sem inferir conservadorismo extremo em todos os costumes; absolvição limita conclusão sobre repressão."
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
      "mor": {
        "axis": "mor",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Freedom in the World 2025 — Andorra",
            "locator": "Overview; Key Developments in 2024, janeiro",
            "statement": "Aborto permanecia completamente proibido; ativista crítica foi absolvida de difamação.",
            "basis": "practice",
            "publishedDate": "2025; observações de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Aborto permanecia completamente proibido; ativista crítica foi absolvida de difamação.",
        "uncertainty": "Codificação parcial da escolha reprodutiva, sem inferir conservadorismo extremo em todos os costumes; absolvição limita conclusão sobre repressão.",
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
      }
    ],
    "rationale": "Eleições parlamentares regulares consideradas livres e justas. Conselhos locais eleitos têm autogoverno, orçamento, tributação e competências de planejamento e serviços comunais. Liberdade religiosa coexistindo com cooperação especial com Igreja Católica e bispo entre os copríncipes. Proíbe morte e tortura, assegura defesa e exige controle judicial da detenção e ingresso domiciliar. Aborto permanecia completamente proibido; ativista crítica foi absolvida de difamação.",
    "caveats": "Naturalização restritiva exclui muitos residentes do sufrágio; não codificamos integração cultural a partir de cidadania. Autonomia local substantiva dentro de leis nacionais; não é estrutura federativa nem avaliação de execução. Escopo temporal: 1993, texto oferecido pelo Parlamento em consulta de 2026; sem certificação independente de consolidação. Privilégio institucional não demonstra que toda legislação seja religiosa nem crenças individuais. Escopo temporal: 1993, texto oferecido pelo Parlamento em consulta de 2026; sem certificação independente de consolidação. Garantias processuais normativas, sem demonstrar todas as políticas de armas, drogas ou vigilância; exceções emergenciais no artigo 42. Escopo temporal: 1993, texto oferecido pelo Parlamento em consulta de 2026; sem certificação independente de consolidação. Codificação parcial da escolha reprodutiva, sem inferir conservadorismo extremo em todos os costumes; absolvição limita conclusão sobre repressão. Âncoras editoriais não são medições. Normas e execução têm escopos distintos. Eixos ausentes são desconhecidos; cobertura menor que seis eixos para matches."
  },
  {
    "id": "malta-current-2025",
    "name": "Malta",
    "aliases": [],
    "kind": "country",
    "category": "country",
    "period": "Prática em 2024; norma: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026",
    "vec": {
      "est": 50,
      "rep": 80,
      "pod": 50,
      "imi": 50,
      "dip": 40,
      "int": 50,
      "eco": 60,
      "con": 50,
      "com": 50,
      "rel": 40,
      "mor": 60,
      "tec": 50
    },
    "evidence": {
      "rep": "high",
      "rel": "medium",
      "dip": "medium",
      "eco": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — Malta"
        ],
        "rationale": "Eleições regulares competitivas e alternância periódica; presidência cerimonial eleita pelo Parlamento em 2024. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Barreiras a partidos pequenos e corrupção continuam; prática de 2024 e normas de 2026 são recortes distintos."
      },
      "rel": {
        "sourceTitles": [
          "Texto constitucional — Malta / portal oficial"
        ],
        "rationale": "Religião católica estatal e ensino religioso nas escolas públicas coexistem com liberdade de culto e recusa de instrução religiosa. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Norma de 2026, sem afirmar prática escolar universal ou identidade religiosa da população. Escopo temporal: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026."
      },
      "dip": {
        "sourceTitles": [
          "Texto constitucional — Malta / portal oficial"
        ],
        "rationale": "Adota neutralidade, não alinhamento e recusa alianças militares, com exceções de autodefesa e medidas da ONU. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Orientação normativa em 2026, sem afirmar ausência de forças de defesa ou não intervenção absoluta. Escopo temporal: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026."
      },
      "eco": {
        "sourceTitles": [
          "Texto constitucional — Malta / portal oficial"
        ],
        "rationale": "Prevê ensino primário gratuito em escolas estatais e assistência social, preservando incentivo à empresa privada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Provisão pública setorial, não predominância estatal da economia; princípios deste capítulo não são diretamente exigíveis em juízo. Escopo temporal: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026."
      },
      "mor": {
        "sourceTitles": [
          "Texto constitucional — Malta / portal oficial"
        ],
        "rationale": "Proteção antidiscriminatória inclui sexo, orientação sexual e identidade de gênero. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Proteção normativa parcial; artigo 45 preserva exceções, inclusive matérias de direito pessoal, e não estabelece toda política de aborto ou família. Escopo temporal: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Freedom in the World 2025 — Malta",
            "locator": "Overview; Key Developments in 2024",
            "statement": "Eleições regulares competitivas e alternância periódica; presidência cerimonial eleita pelo Parlamento em 2024.",
            "basis": "practice",
            "publishedDate": "2025; observações de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Eleições regulares competitivas e alternância periódica; presidência cerimonial eleita pelo Parlamento em 2024.",
        "uncertainty": "Barreiras a partidos pequenos e corrupção continuam; prática de 2024 e normas de 2026 são recortes distintos.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "rel": {
        "axis": "rel",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Texto constitucional — Malta / portal oficial",
            "locator": "Artigos 2 e 40",
            "statement": "Religião católica estatal e ensino religioso nas escolas públicas coexistem com liberdade de culto e recusa de instrução religiosa.",
            "basis": "norm",
            "publishedDate": "Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Religião católica estatal e ensino religioso nas escolas públicas coexistem com liberdade de culto e recusa de instrução religiosa.",
        "uncertainty": "Norma de 2026, sem afirmar prática escolar universal ou identidade religiosa da população. Escopo temporal: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026.",
        "reviewedOn": "2026-10-07",
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
            "sourceTitle": "Texto constitucional — Malta / portal oficial",
            "locator": "Artigo 1(3)",
            "statement": "Adota neutralidade, não alinhamento e recusa alianças militares, com exceções de autodefesa e medidas da ONU.",
            "basis": "norm",
            "publishedDate": "Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Adota neutralidade, não alinhamento e recusa alianças militares, com exceções de autodefesa e medidas da ONU.",
        "uncertainty": "Orientação normativa em 2026, sem afirmar ausência de forças de defesa ou não intervenção absoluta. Escopo temporal: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "eco": {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Texto constitucional — Malta / portal oficial",
            "locator": "Artigos 10,17,18 e 21",
            "statement": "Prevê ensino primário gratuito em escolas estatais e assistência social, preservando incentivo à empresa privada.",
            "basis": "norm",
            "publishedDate": "Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Prevê ensino primário gratuito em escolas estatais e assistência social, preservando incentivo à empresa privada.",
        "uncertainty": "Provisão pública setorial, não predominância estatal da economia; princípios deste capítulo não são diretamente exigíveis em juízo. Escopo temporal: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026.",
        "reviewedOn": "2026-10-07",
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
            "sourceTitle": "Texto constitucional — Malta / portal oficial",
            "locator": "Artigo 45(1)–(5), versão consultada em 2026",
            "statement": "Proteção antidiscriminatória inclui sexo, orientação sexual e identidade de gênero.",
            "basis": "norm",
            "publishedDate": "Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Proteção antidiscriminatória inclui sexo, orientação sexual e identidade de gênero.",
        "uncertainty": "Proteção normativa parcial; artigo 45 preserva exceções, inclusive matérias de direito pessoal, e não estabelece toda política de aborto ou família. Escopo temporal: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      }
    },
    "sources": [
      {
        "title": "Texto constitucional — Malta / portal oficial",
        "url": "https://legislation.mt/eli/const/eng/pdf",
        "note": "Texto primário lido em 7/10/2026. Versão: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026. Artigos 1,2,10,40,45: Constituição oficial consolidada substitui tradução de 2016 marcada como posteriormente emendada. O texto é uma fonte normativa datada, não certificado de execução ou consolidação de todas as emendas."
      },
      {
        "title": "Freedom in the World 2025 — Malta",
        "url": "https://freedomhouse.org/country/malta/freedom-world/2025",
        "note": "Overview e Key Developments in 2024 efetivamente lidos em 7/10/2026; relatório abreviado de 2025. Usam-se narrativas específicas, sem conversão de notas numéricas."
      }
    ],
    "rationale": "Eleições regulares competitivas e alternância periódica; presidência cerimonial eleita pelo Parlamento em 2024. Religião católica estatal e ensino religioso nas escolas públicas coexistem com liberdade de culto e recusa de instrução religiosa. Adota neutralidade, não alinhamento e recusa alianças militares, com exceções de autodefesa e medidas da ONU. Prevê ensino primário gratuito em escolas estatais e assistência social, preservando incentivo à empresa privada. Proteção antidiscriminatória inclui sexo, orientação sexual e identidade de gênero.",
    "caveats": "Barreiras a partidos pequenos e corrupção continuam; prática de 2024 e normas de 2026 são recortes distintos. Norma de 2026, sem afirmar prática escolar universal ou identidade religiosa da população. Escopo temporal: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026. Orientação normativa em 2026, sem afirmar ausência de forças de defesa ou não intervenção absoluta. Escopo temporal: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026. Provisão pública setorial, não predominância estatal da economia; princípios deste capítulo não são diretamente exigíveis em juízo. Escopo temporal: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026. Proteção normativa parcial; artigo 45 preserva exceções, inclusive matérias de direito pessoal, e não estabelece toda política de aborto ou família. Escopo temporal: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026. Âncoras editoriais não são medições. Normas e execução têm escopos distintos. Eixos ausentes são desconhecidos; cobertura menor que seis eixos para matches."
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
  }
];

/** Actual integrated snapshot before coverage05; not relabeled as a later hypothetical state. */
export const currentCountryCoverage05LiveBefore: ReferenceEntry[] = [
  {
    "id": "united-states",
    "kind": "country",
    "category": "country",
    "name": "Estados Unidos",
    "period": "Prática institucional em 2024; Constituição e emendas de 1791 no texto oferecido pelo Senado em 2026",
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
    "rationale": "Federalismo, competição eleitoral, limites à coerção, não estabelecimento religioso e igualdade matrimonial são documentados separadamente.",
    "caveats": "Recorte institucional, sem imputar opinião aos habitantes. Propriedade, planejamento, comércio, defesa, intervenção, cultura e tecnologia permanecem desconhecidos nesta revisão; não se infere estrutura produtiva da simples proteção jurídica de propriedade.",
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
    "id": "japan",
    "kind": "country",
    "category": "country",
    "name": "Japão",
    "period": "Prática institucional em 2024; Constituição de 1946 oferecida pela Câmara em 2026 e interpretação oficial de defesa posterior à decisão de 01/07/2014; provisão escolar pública declarada pelo MEXT em página sem data consultada em 2026",
    "vec": {
      "est": 50,
      "rep": 80,
      "pod": 40,
      "imi": 50,
      "dip": 40,
      "int": 50,
      "eco": 60,
      "con": 50,
      "com": 50,
      "rel": 80,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Eleição competitiva, garantias processuais limitadas, educação gratuita, separação religiosa e limites de defesa sustentam cinco eixos.",
    "caveats": "Local autonomy, artigos 92–95, não resolve predominância de competências territoriais: est permanece desconhecido. Planejamento, propriedade geral, comércio, cultura, intervenção, costumes e tecnologia ficam desconhecidos; não se deduz tecnocracia de capacidade tecnológica.",
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
      },
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
    "evidence": {
      "rep": "high",
      "pod": "medium",
      "eco": "medium",
      "rel": "high",
      "dip": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — Japão"
        ],
        "rationale": "Competição e representação efetivas sustentam a direção democrática neste recorte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Competição eleitoral não elimina desigualdade de representação, financiamento ou déficits civis."
      },
      "pod": {
        "sourceTitles": [
          "Constituição japonesa — Câmara dos Representantes",
          "Freedom in the World 2025 — Japão"
        ],
        "rationale": "Garantias e controle judicial sustentam liberdade parcial. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não oculta 23 dias de detenção nem fabrica abrangência total a partir de dois artigos."
      },
      "eco": {
        "sourceTitles": [
          "Constituição japonesa — Câmara dos Representantes",
          "MEXT — admissão em escolas públicas de ensino obrigatório"
        ],
        "rationale": "Escolas públicas identificadas pelo próprio provedor estatal e gratuidade constitucional sustentam provisão pública parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Recorte educacional; declaração atual sem data não certifica execução em 2024 nem propriedade de toda a produção. Escolas privadas, refeições e materiais pagos permanecem; não se infere provedor público da gratuidade isolada."
      },
      "rel": {
        "sourceTitles": [
          "Constituição japonesa — Câmara dos Representantes"
        ],
        "rationale": "Separação institucional explícita sustenta laicidade forte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Não mede fé pessoal nem elimina toda controvérsia de implementação."
      },
      "dip": {
        "sourceTitles": [
          "Constituição japonesa — Câmara dos Representantes",
          "Interpretação constitucional de defesa — Ministry of Defense"
        ],
        "rationale": "Limites constitucionais e interpretação restritiva sustentam direção pacífica parcial. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Autodefesa, bases dos EUA e defesa coletiva são contraevidências; não afirma desarmamento ou pacifismo absoluto."
      }
    },
    "coding": {
      "rep": {
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
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "eco": {
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
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "dip": {
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
    "id": "south-africa",
    "kind": "country",
    "category": "country",
    "name": "África do Sul",
    "period": "Prática institucional em 2024; normas da edição constitucional oficial com emendas até 2012, sem certificação de consolidação em 2024–2026",
    "vec": {
      "est": 60,
      "rep": 80,
      "pod": 40,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 60,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 60,
      "tec": 50
    },
    "rationale": "Poderes territoriais, eleições competitivas, garantias processuais, provisão pública e igualdade jurídica são tratados por norma e prática separadas.",
    "caveats": "Não converter liberdade religiosa em separação: artigo 15 permite religião em instituições públicas e rel permanece desconhecido. PDF normativo termina em 2012; reconhecimento contemporâneo de cada cláusula precisa de consolidação adicional. Cultura, defesa, intervenção, planejamento, comércio e tecnologia ficam desconhecidos.",
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
      },
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
    "evidence": {
      "est": "medium",
      "rep": "high",
      "pod": "medium",
      "eco": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Constituição da África do Sul — edição oficial com emendas até 2012"
        ],
        "rationale": "Poderes territoriais próprios com intervenção nacional limitada sustentam descentralização moderada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Recorte da edição 2012; não certifica toda a prática territorial contemporânea nem status após emendas posteriores."
      },
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — África do Sul"
        ],
        "rationale": "Competição e representação efetivas sustentam a direção democrática neste recorte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Competição eleitoral não elimina desigualdade de representação, financiamento ou déficits civis."
      },
      "pod": {
        "sourceTitles": [
          "Constituição da África do Sul — edição oficial com emendas até 2012",
          "Freedom in the World 2025 — África do Sul"
        ],
        "rationale": "Garantias de defesa e liberdade sustentam direção parcial, com déficits concretos. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Norma de 2012 não certifica prática plena ou redação atual; atrasos judiciais impedem extremo libertário."
      },
      "eco": {
        "sourceTitles": [
          "Constituição da África do Sul — edição oficial com emendas até 2012"
        ],
        "rationale": "Provisão social pública sustenta direção pública parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Norma da edição 2012; não prova execução, universalidade nem predominância estatal de produção."
      },
      "mor": {
        "sourceTitles": [
          "Constituição da África do Sul — edição oficial com emendas até 2012",
          "Freedom in the World 2025 — África do Sul"
        ],
        "rationale": "Igualdade jurídica e autonomia reprodutiva sustentam reforma social parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não apaga violência e desigualdade; redação atual pós-2012 não foi certificada."
      }
    },
    "coding": {
      "est": {
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
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "eco": {
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
        "reviewedOn": "2026-10-07",
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
    "id": "france",
    "kind": "country",
    "category": "country",
    "name": "França",
    "period": "Prática institucional em 2024; artigos constitucionais nas redações de 2003, 2008 e 10/03/2024 oferecidas pelo Legifrance",
    "vec": {
      "est": 40,
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
    "rationale": "Descentralização sob lei nacional, competição parlamentar, direitos com restrições, laicidade e autonomia reprodutiva possuem trechos próprios.",
    "caveats": "Texto completo do Conseil constitutionnel e reaberturas do tratado europeu falharam; comércio permanece desconhecido, sem reutilizar inferência não verificada. Propriedade, planejamento, imigração, defesa, intervenção e tecnologia não receberam evidência neste lote.",
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
      },
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
    "evidence": {
      "est": "medium",
      "rep": "high",
      "pod": "medium",
      "rel": "high",
      "mor": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Constituição francesa, artigo 1 — Legifrance",
          "Constituição francesa, artigo 72 — Legifrance"
        ],
        "rationale": "Autonomia local substantiva dentro da supremacia legal nacional sustenta direção unitária moderada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não se deduz centralização do adjetivo indivisível sozinho; autonomia fiscal, prática territorial e ultramar exigem revisão própria."
      },
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — França"
        ],
        "rationale": "Competição e representação efetivas sustentam a direção democrática neste recorte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Competição eleitoral não elimina desigualdade de representação, financiamento ou déficits civis."
      },
      "pod": {
        "sourceTitles": [
          "Freedom in the World 2025 — França"
        ],
        "rationale": "Garantias civis com restrições concretas sustentam liberdade parcial. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: A narrativa não autoriza classificar toda a segurança francesa como permissiva nem resolver todas as políticas digitais."
      },
      "rel": {
        "sourceTitles": [
          "Constituição francesa, artigo 1 — Legifrance"
        ],
        "rationale": "Laicidade constitutiva explícita sustenta separação institucional. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Norma, não certificação de igualdade prática; restrições religiosas e conflitos sobre símbolos requerem auditoria própria."
      },
      "mor": {
        "sourceTitles": [
          "Constituição francesa, artigo 34 — Legifrance"
        ],
        "rationale": "Garantia de autonomia reprodutiva sustenta reforma social parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não implica ausência de condições legais nem posições sobre todos os costumes."
      }
    },
    "coding": {
      "est": {
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
    "id": "andorra-current-2025",
    "name": "Andorra",
    "aliases": [],
    "kind": "country",
    "category": "country",
    "period": "Prática em 2024; norma: 1993, texto oferecido pelo Parlamento em consulta de 2026; sem certificação independente de consolidação",
    "vec": {
      "est": 40,
      "rep": 80,
      "pod": 40,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 40,
      "mor": 40,
      "tec": 50
    },
    "evidence": {
      "rep": "high",
      "est": "medium",
      "rel": "medium",
      "pod": "medium",
      "mor": "medium"
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
      "mor": {
        "sourceTitles": [
          "Freedom in the World 2025 — Andorra"
        ],
        "rationale": "Aborto permanecia completamente proibido; ativista crítica foi absolvida de difamação. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Codificação parcial da escolha reprodutiva, sem inferir conservadorismo extremo em todos os costumes; absolvição limita conclusão sobre repressão."
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
      "mor": {
        "axis": "mor",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Freedom in the World 2025 — Andorra",
            "locator": "Overview; Key Developments in 2024, janeiro",
            "statement": "Aborto permanecia completamente proibido; ativista crítica foi absolvida de difamação.",
            "basis": "practice",
            "publishedDate": "2025; observações de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Aborto permanecia completamente proibido; ativista crítica foi absolvida de difamação.",
        "uncertainty": "Codificação parcial da escolha reprodutiva, sem inferir conservadorismo extremo em todos os costumes; absolvição limita conclusão sobre repressão.",
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
      }
    ],
    "rationale": "Eleições parlamentares regulares consideradas livres e justas. Conselhos locais eleitos têm autogoverno, orçamento, tributação e competências de planejamento e serviços comunais. Liberdade religiosa coexistindo com cooperação especial com Igreja Católica e bispo entre os copríncipes. Proíbe morte e tortura, assegura defesa e exige controle judicial da detenção e ingresso domiciliar. Aborto permanecia completamente proibido; ativista crítica foi absolvida de difamação.",
    "caveats": "Naturalização restritiva exclui muitos residentes do sufrágio; não codificamos integração cultural a partir de cidadania. Autonomia local substantiva dentro de leis nacionais; não é estrutura federativa nem avaliação de execução. Escopo temporal: 1993, texto oferecido pelo Parlamento em consulta de 2026; sem certificação independente de consolidação. Privilégio institucional não demonstra que toda legislação seja religiosa nem crenças individuais. Escopo temporal: 1993, texto oferecido pelo Parlamento em consulta de 2026; sem certificação independente de consolidação. Garantias processuais normativas, sem demonstrar todas as políticas de armas, drogas ou vigilância; exceções emergenciais no artigo 42. Escopo temporal: 1993, texto oferecido pelo Parlamento em consulta de 2026; sem certificação independente de consolidação. Codificação parcial da escolha reprodutiva, sem inferir conservadorismo extremo em todos os costumes; absolvição limita conclusão sobre repressão. Âncoras editoriais não são medições. Normas e execução têm escopos distintos. Eixos ausentes são desconhecidos; cobertura menor que seis eixos para matches."
  },
  {
    "id": "malta-current-2025",
    "name": "Malta",
    "aliases": [],
    "kind": "country",
    "category": "country",
    "period": "Prática em 2024; norma: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026",
    "vec": {
      "est": 50,
      "rep": 80,
      "pod": 50,
      "imi": 50,
      "dip": 40,
      "int": 50,
      "eco": 60,
      "con": 50,
      "com": 50,
      "rel": 40,
      "mor": 60,
      "tec": 50
    },
    "evidence": {
      "rep": "high",
      "rel": "medium",
      "dip": "medium",
      "eco": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — Malta"
        ],
        "rationale": "Eleições regulares competitivas e alternância periódica; presidência cerimonial eleita pelo Parlamento em 2024. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Barreiras a partidos pequenos e corrupção continuam; prática de 2024 e normas de 2026 são recortes distintos."
      },
      "rel": {
        "sourceTitles": [
          "Texto constitucional — Malta / portal oficial"
        ],
        "rationale": "Religião católica estatal e ensino religioso nas escolas públicas coexistem com liberdade de culto e recusa de instrução religiosa. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Norma de 2026, sem afirmar prática escolar universal ou identidade religiosa da população. Escopo temporal: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026."
      },
      "dip": {
        "sourceTitles": [
          "Texto constitucional — Malta / portal oficial"
        ],
        "rationale": "Adota neutralidade, não alinhamento e recusa alianças militares, com exceções de autodefesa e medidas da ONU. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Orientação normativa em 2026, sem afirmar ausência de forças de defesa ou não intervenção absoluta. Escopo temporal: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026."
      },
      "eco": {
        "sourceTitles": [
          "Texto constitucional — Malta / portal oficial"
        ],
        "rationale": "Prevê ensino primário gratuito em escolas estatais e assistência social, preservando incentivo à empresa privada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Provisão pública setorial, não predominância estatal da economia; princípios deste capítulo não são diretamente exigíveis em juízo. Escopo temporal: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026."
      },
      "mor": {
        "sourceTitles": [
          "Texto constitucional — Malta / portal oficial"
        ],
        "rationale": "Proteção antidiscriminatória inclui sexo, orientação sexual e identidade de gênero. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Proteção normativa parcial; artigo 45 preserva exceções, inclusive matérias de direito pessoal, e não estabelece toda política de aborto ou família. Escopo temporal: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Freedom in the World 2025 — Malta",
            "locator": "Overview; Key Developments in 2024",
            "statement": "Eleições regulares competitivas e alternância periódica; presidência cerimonial eleita pelo Parlamento em 2024.",
            "basis": "practice",
            "publishedDate": "2025; observações de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Eleições regulares competitivas e alternância periódica; presidência cerimonial eleita pelo Parlamento em 2024.",
        "uncertainty": "Barreiras a partidos pequenos e corrupção continuam; prática de 2024 e normas de 2026 são recortes distintos.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "rel": {
        "axis": "rel",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Texto constitucional — Malta / portal oficial",
            "locator": "Artigos 2 e 40",
            "statement": "Religião católica estatal e ensino religioso nas escolas públicas coexistem com liberdade de culto e recusa de instrução religiosa.",
            "basis": "norm",
            "publishedDate": "Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Religião católica estatal e ensino religioso nas escolas públicas coexistem com liberdade de culto e recusa de instrução religiosa.",
        "uncertainty": "Norma de 2026, sem afirmar prática escolar universal ou identidade religiosa da população. Escopo temporal: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026.",
        "reviewedOn": "2026-10-07",
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
            "sourceTitle": "Texto constitucional — Malta / portal oficial",
            "locator": "Artigo 1(3)",
            "statement": "Adota neutralidade, não alinhamento e recusa alianças militares, com exceções de autodefesa e medidas da ONU.",
            "basis": "norm",
            "publishedDate": "Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Adota neutralidade, não alinhamento e recusa alianças militares, com exceções de autodefesa e medidas da ONU.",
        "uncertainty": "Orientação normativa em 2026, sem afirmar ausência de forças de defesa ou não intervenção absoluta. Escopo temporal: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "eco": {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Texto constitucional — Malta / portal oficial",
            "locator": "Artigos 10,17,18 e 21",
            "statement": "Prevê ensino primário gratuito em escolas estatais e assistência social, preservando incentivo à empresa privada.",
            "basis": "norm",
            "publishedDate": "Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Prevê ensino primário gratuito em escolas estatais e assistência social, preservando incentivo à empresa privada.",
        "uncertainty": "Provisão pública setorial, não predominância estatal da economia; princípios deste capítulo não são diretamente exigíveis em juízo. Escopo temporal: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026.",
        "reviewedOn": "2026-10-07",
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
            "sourceTitle": "Texto constitucional — Malta / portal oficial",
            "locator": "Artigo 45(1)–(5), versão consultada em 2026",
            "statement": "Proteção antidiscriminatória inclui sexo, orientação sexual e identidade de gênero.",
            "basis": "norm",
            "publishedDate": "Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Proteção antidiscriminatória inclui sexo, orientação sexual e identidade de gênero.",
        "uncertainty": "Proteção normativa parcial; artigo 45 preserva exceções, inclusive matérias de direito pessoal, e não estabelece toda política de aborto ou família. Escopo temporal: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      }
    },
    "sources": [
      {
        "title": "Texto constitucional — Malta / portal oficial",
        "url": "https://legislation.mt/eli/const/eng/pdf",
        "note": "Texto primário lido em 7/10/2026. Versão: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026. Artigos 1,2,10,40,45: Constituição oficial consolidada substitui tradução de 2016 marcada como posteriormente emendada. O texto é uma fonte normativa datada, não certificado de execução ou consolidação de todas as emendas."
      },
      {
        "title": "Freedom in the World 2025 — Malta",
        "url": "https://freedomhouse.org/country/malta/freedom-world/2025",
        "note": "Overview e Key Developments in 2024 efetivamente lidos em 7/10/2026; relatório abreviado de 2025. Usam-se narrativas específicas, sem conversão de notas numéricas."
      }
    ],
    "rationale": "Eleições regulares competitivas e alternância periódica; presidência cerimonial eleita pelo Parlamento em 2024. Religião católica estatal e ensino religioso nas escolas públicas coexistem com liberdade de culto e recusa de instrução religiosa. Adota neutralidade, não alinhamento e recusa alianças militares, com exceções de autodefesa e medidas da ONU. Prevê ensino primário gratuito em escolas estatais e assistência social, preservando incentivo à empresa privada. Proteção antidiscriminatória inclui sexo, orientação sexual e identidade de gênero.",
    "caveats": "Barreiras a partidos pequenos e corrupção continuam; prática de 2024 e normas de 2026 são recortes distintos. Norma de 2026, sem afirmar prática escolar universal ou identidade religiosa da população. Escopo temporal: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026. Orientação normativa em 2026, sem afirmar ausência de forças de defesa ou não intervenção absoluta. Escopo temporal: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026. Provisão pública setorial, não predominância estatal da economia; princípios deste capítulo não são diretamente exigíveis em juízo. Escopo temporal: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026. Proteção normativa parcial; artigo 45 preserva exceções, inclusive matérias de direito pessoal, e não estabelece toda política de aborto ou família. Escopo temporal: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026. Âncoras editoriais não são medições. Normas e execução têm escopos distintos. Eixos ausentes são desconhecidos; cobertura menor que seis eixos para matches."
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
  }
];

/** Explicit expected prior state AFTER repair04, separate from actual live snapshot. */
export const currentCountryCoverage05ExpectedAfterPriorRepair04: ReferenceEntry[] = [
  {
    "id": "united-states",
    "kind": "country",
    "category": "country",
    "name": "Estados Unidos",
    "period": "Prática institucional em 2024; Constituição e emendas de 1791 no texto oferecido pelo Senado em 2026",
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
    "rationale": "Federalismo, competição eleitoral, limites à coerção, não estabelecimento religioso e igualdade matrimonial são documentados separadamente.",
    "caveats": "Recorte institucional, sem imputar opinião aos habitantes. Propriedade, planejamento, comércio, defesa, intervenção, cultura e tecnologia permanecem desconhecidos nesta revisão; não se infere estrutura produtiva da simples proteção jurídica de propriedade.",
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
    "id": "japan",
    "kind": "country",
    "category": "country",
    "name": "Japão",
    "period": "Prática institucional em 2024; Constituição de 1946 oferecida pela Câmara em 2026 e interpretação oficial de defesa posterior à decisão de 01/07/2014; provisão escolar pública declarada pelo MEXT em página sem data consultada em 2026",
    "vec": {
      "est": 50,
      "rep": 80,
      "pod": 40,
      "imi": 50,
      "dip": 40,
      "int": 50,
      "eco": 60,
      "con": 50,
      "com": 50,
      "rel": 80,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Eleição competitiva, garantias processuais limitadas, educação gratuita, separação religiosa e limites de defesa sustentam cinco eixos.",
    "caveats": "Local autonomy, artigos 92–95, não resolve predominância de competências territoriais: est permanece desconhecido. Planejamento, propriedade geral, comércio, cultura, intervenção, costumes e tecnologia ficam desconhecidos; não se deduz tecnocracia de capacidade tecnológica.",
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
      },
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
    "evidence": {
      "rep": "high",
      "pod": "medium",
      "eco": "medium",
      "rel": "high",
      "dip": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — Japão"
        ],
        "rationale": "Competição e representação efetivas sustentam a direção democrática neste recorte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Competição eleitoral não elimina desigualdade de representação, financiamento ou déficits civis."
      },
      "pod": {
        "sourceTitles": [
          "Constituição japonesa — Câmara dos Representantes",
          "Freedom in the World 2025 — Japão"
        ],
        "rationale": "Garantias e controle judicial sustentam liberdade parcial. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não oculta 23 dias de detenção nem fabrica abrangência total a partir de dois artigos."
      },
      "eco": {
        "sourceTitles": [
          "Constituição japonesa — Câmara dos Representantes",
          "MEXT — admissão em escolas públicas de ensino obrigatório"
        ],
        "rationale": "Escolas públicas identificadas pelo próprio provedor estatal e gratuidade constitucional sustentam provisão pública parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Recorte educacional; declaração atual sem data não certifica execução em 2024 nem propriedade de toda a produção. Escolas privadas, refeições e materiais pagos permanecem; não se infere provedor público da gratuidade isolada."
      },
      "rel": {
        "sourceTitles": [
          "Constituição japonesa — Câmara dos Representantes"
        ],
        "rationale": "Separação institucional explícita sustenta laicidade forte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Não mede fé pessoal nem elimina toda controvérsia de implementação."
      },
      "dip": {
        "sourceTitles": [
          "Constituição japonesa — Câmara dos Representantes",
          "Interpretação constitucional de defesa — Ministry of Defense"
        ],
        "rationale": "Limites constitucionais e interpretação restritiva sustentam direção pacífica parcial. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Autodefesa, bases dos EUA e defesa coletiva são contraevidências; não afirma desarmamento ou pacifismo absoluto."
      }
    },
    "coding": {
      "rep": {
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
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "eco": {
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
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "dip": {
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
    "id": "south-africa",
    "kind": "country",
    "category": "country",
    "name": "África do Sul",
    "period": "Prática institucional em 2024; normas da edição constitucional oficial com emendas até 2012, sem certificação de consolidação em 2024–2026",
    "vec": {
      "est": 60,
      "rep": 80,
      "pod": 40,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 60,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 60,
      "tec": 50
    },
    "rationale": "Poderes territoriais, eleições competitivas, garantias processuais, provisão pública e igualdade jurídica são tratados por norma e prática separadas.",
    "caveats": "Não converter liberdade religiosa em separação: artigo 15 permite religião em instituições públicas e rel permanece desconhecido. PDF normativo termina em 2012; reconhecimento contemporâneo de cada cláusula precisa de consolidação adicional. Cultura, defesa, intervenção, planejamento, comércio e tecnologia ficam desconhecidos.",
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
      },
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
    "evidence": {
      "est": "medium",
      "rep": "high",
      "pod": "medium",
      "eco": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Constituição da África do Sul — edição oficial com emendas até 2012"
        ],
        "rationale": "Poderes territoriais próprios com intervenção nacional limitada sustentam descentralização moderada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Recorte da edição 2012; não certifica toda a prática territorial contemporânea nem status após emendas posteriores."
      },
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — África do Sul"
        ],
        "rationale": "Competição e representação efetivas sustentam a direção democrática neste recorte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Competição eleitoral não elimina desigualdade de representação, financiamento ou déficits civis."
      },
      "pod": {
        "sourceTitles": [
          "Constituição da África do Sul — edição oficial com emendas até 2012",
          "Freedom in the World 2025 — África do Sul"
        ],
        "rationale": "Garantias de defesa e liberdade sustentam direção parcial, com déficits concretos. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Norma de 2012 não certifica prática plena ou redação atual; atrasos judiciais impedem extremo libertário."
      },
      "eco": {
        "sourceTitles": [
          "Constituição da África do Sul — edição oficial com emendas até 2012"
        ],
        "rationale": "Provisão social pública sustenta direção pública parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Norma da edição 2012; não prova execução, universalidade nem predominância estatal de produção."
      },
      "mor": {
        "sourceTitles": [
          "Constituição da África do Sul — edição oficial com emendas até 2012",
          "Freedom in the World 2025 — África do Sul"
        ],
        "rationale": "Igualdade jurídica e autonomia reprodutiva sustentam reforma social parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não apaga violência e desigualdade; redação atual pós-2012 não foi certificada."
      }
    },
    "coding": {
      "est": {
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
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "eco": {
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
        "reviewedOn": "2026-10-07",
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
    "id": "france",
    "kind": "country",
    "category": "country",
    "name": "França",
    "period": "Prática institucional em 2024; artigos constitucionais nas redações de 2003, 2008 e 10/03/2024 oferecidas pelo Legifrance",
    "vec": {
      "est": 40,
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
    "rationale": "Descentralização sob lei nacional, competição parlamentar, direitos com restrições, laicidade e autonomia reprodutiva possuem trechos próprios.",
    "caveats": "Texto completo do Conseil constitutionnel e reaberturas do tratado europeu falharam; comércio permanece desconhecido, sem reutilizar inferência não verificada. Propriedade, planejamento, imigração, defesa, intervenção e tecnologia não receberam evidência neste lote.",
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
      },
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
    "evidence": {
      "est": "medium",
      "rep": "high",
      "pod": "medium",
      "rel": "high",
      "mor": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Constituição francesa, artigo 1 — Legifrance",
          "Constituição francesa, artigo 72 — Legifrance"
        ],
        "rationale": "Autonomia local substantiva dentro da supremacia legal nacional sustenta direção unitária moderada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não se deduz centralização do adjetivo indivisível sozinho; autonomia fiscal, prática territorial e ultramar exigem revisão própria."
      },
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — França"
        ],
        "rationale": "Competição e representação efetivas sustentam a direção democrática neste recorte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Competição eleitoral não elimina desigualdade de representação, financiamento ou déficits civis."
      },
      "pod": {
        "sourceTitles": [
          "Freedom in the World 2025 — França"
        ],
        "rationale": "Garantias civis com restrições concretas sustentam liberdade parcial. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: A narrativa não autoriza classificar toda a segurança francesa como permissiva nem resolver todas as políticas digitais."
      },
      "rel": {
        "sourceTitles": [
          "Constituição francesa, artigo 1 — Legifrance"
        ],
        "rationale": "Laicidade constitutiva explícita sustenta separação institucional. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Norma, não certificação de igualdade prática; restrições religiosas e conflitos sobre símbolos requerem auditoria própria."
      },
      "mor": {
        "sourceTitles": [
          "Constituição francesa, artigo 34 — Legifrance"
        ],
        "rationale": "Garantia de autonomia reprodutiva sustenta reforma social parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não implica ausência de condições legais nem posições sobre todos os costumes."
      }
    },
    "coding": {
      "est": {
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
    "id": "andorra-current-2025",
    "name": "Andorra",
    "aliases": [],
    "kind": "country",
    "category": "country",
    "period": "Prática em 2024; norma: 1993, texto oferecido pelo Parlamento em consulta de 2026; sem certificação independente de consolidação",
    "vec": {
      "est": 40,
      "rep": 80,
      "pod": 40,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 40,
      "mor": 40,
      "tec": 50
    },
    "evidence": {
      "rep": "high",
      "est": "medium",
      "rel": "medium",
      "pod": "medium",
      "mor": "medium"
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
      "mor": {
        "sourceTitles": [
          "Freedom in the World 2025 — Andorra"
        ],
        "rationale": "Aborto permanecia completamente proibido; ativista crítica foi absolvida de difamação. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Codificação parcial da escolha reprodutiva, sem inferir conservadorismo extremo em todos os costumes; absolvição limita conclusão sobre repressão."
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
      "mor": {
        "axis": "mor",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Freedom in the World 2025 — Andorra",
            "locator": "Overview; Key Developments in 2024, janeiro",
            "statement": "Aborto permanecia completamente proibido; ativista crítica foi absolvida de difamação.",
            "basis": "practice",
            "publishedDate": "2025; observações de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Aborto permanecia completamente proibido; ativista crítica foi absolvida de difamação.",
        "uncertainty": "Codificação parcial da escolha reprodutiva, sem inferir conservadorismo extremo em todos os costumes; absolvição limita conclusão sobre repressão.",
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
      }
    ],
    "rationale": "Eleições parlamentares regulares consideradas livres e justas. Conselhos locais eleitos têm autogoverno, orçamento, tributação e competências de planejamento e serviços comunais. Liberdade religiosa coexistindo com cooperação especial com Igreja Católica e bispo entre os copríncipes. Proíbe morte e tortura, assegura defesa e exige controle judicial da detenção e ingresso domiciliar. Aborto permanecia completamente proibido; ativista crítica foi absolvida de difamação.",
    "caveats": "Naturalização restritiva exclui muitos residentes do sufrágio; não codificamos integração cultural a partir de cidadania. Autonomia local substantiva dentro de leis nacionais; não é estrutura federativa nem avaliação de execução. Escopo temporal: 1993, texto oferecido pelo Parlamento em consulta de 2026; sem certificação independente de consolidação. Privilégio institucional não demonstra que toda legislação seja religiosa nem crenças individuais. Escopo temporal: 1993, texto oferecido pelo Parlamento em consulta de 2026; sem certificação independente de consolidação. Garantias processuais normativas, sem demonstrar todas as políticas de armas, drogas ou vigilância; exceções emergenciais no artigo 42. Escopo temporal: 1993, texto oferecido pelo Parlamento em consulta de 2026; sem certificação independente de consolidação. Codificação parcial da escolha reprodutiva, sem inferir conservadorismo extremo em todos os costumes; absolvição limita conclusão sobre repressão. Âncoras editoriais não são medições. Normas e execução têm escopos distintos. Eixos ausentes são desconhecidos; cobertura menor que seis eixos para matches."
  },
  {
    "id": "malta-current-2025",
    "name": "Malta",
    "aliases": [],
    "kind": "country",
    "category": "country",
    "period": "Prática em 2024; norma: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026",
    "vec": {
      "est": 50,
      "rep": 80,
      "pod": 50,
      "imi": 50,
      "dip": 40,
      "int": 50,
      "eco": 60,
      "con": 50,
      "com": 50,
      "rel": 40,
      "mor": 60,
      "tec": 50
    },
    "evidence": {
      "rep": "high",
      "rel": "medium",
      "dip": "medium",
      "eco": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — Malta"
        ],
        "rationale": "Eleições regulares competitivas e alternância periódica; presidência cerimonial eleita pelo Parlamento em 2024. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Barreiras a partidos pequenos e corrupção continuam; prática de 2024 e normas de 2026 são recortes distintos."
      },
      "rel": {
        "sourceTitles": [
          "Texto constitucional — Malta / portal oficial"
        ],
        "rationale": "Religião católica estatal e ensino religioso nas escolas públicas coexistem com liberdade de culto e recusa de instrução religiosa. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Norma de 2026, sem afirmar prática escolar universal ou identidade religiosa da população. Escopo temporal: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026."
      },
      "dip": {
        "sourceTitles": [
          "Texto constitucional — Malta / portal oficial"
        ],
        "rationale": "Adota neutralidade, não alinhamento e recusa alianças militares, com exceções de autodefesa e medidas da ONU. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Orientação normativa em 2026, sem afirmar ausência de forças de defesa ou não intervenção absoluta. Escopo temporal: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026."
      },
      "eco": {
        "sourceTitles": [
          "Texto constitucional — Malta / portal oficial"
        ],
        "rationale": "Prevê ensino primário gratuito em escolas estatais e assistência social, preservando incentivo à empresa privada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Provisão pública setorial, não predominância estatal da economia; princípios deste capítulo não são diretamente exigíveis em juízo. Escopo temporal: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026."
      },
      "mor": {
        "sourceTitles": [
          "Texto constitucional — Malta / portal oficial"
        ],
        "rationale": "Proteção antidiscriminatória inclui sexo, orientação sexual e identidade de gênero. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Proteção normativa parcial; artigo 45 preserva exceções, inclusive matérias de direito pessoal, e não estabelece toda política de aborto ou família. Escopo temporal: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Freedom in the World 2025 — Malta",
            "locator": "Overview; Key Developments in 2024",
            "statement": "Eleições regulares competitivas e alternância periódica; presidência cerimonial eleita pelo Parlamento em 2024.",
            "basis": "practice",
            "publishedDate": "2025; observações de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Eleições regulares competitivas e alternância periódica; presidência cerimonial eleita pelo Parlamento em 2024.",
        "uncertainty": "Barreiras a partidos pequenos e corrupção continuam; prática de 2024 e normas de 2026 são recortes distintos.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "rel": {
        "axis": "rel",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Texto constitucional — Malta / portal oficial",
            "locator": "Artigos 2 e 40",
            "statement": "Religião católica estatal e ensino religioso nas escolas públicas coexistem com liberdade de culto e recusa de instrução religiosa.",
            "basis": "norm",
            "publishedDate": "Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Religião católica estatal e ensino religioso nas escolas públicas coexistem com liberdade de culto e recusa de instrução religiosa.",
        "uncertainty": "Norma de 2026, sem afirmar prática escolar universal ou identidade religiosa da população. Escopo temporal: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026.",
        "reviewedOn": "2026-10-07",
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
            "sourceTitle": "Texto constitucional — Malta / portal oficial",
            "locator": "Artigo 1(3)",
            "statement": "Adota neutralidade, não alinhamento e recusa alianças militares, com exceções de autodefesa e medidas da ONU.",
            "basis": "norm",
            "publishedDate": "Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Adota neutralidade, não alinhamento e recusa alianças militares, com exceções de autodefesa e medidas da ONU.",
        "uncertainty": "Orientação normativa em 2026, sem afirmar ausência de forças de defesa ou não intervenção absoluta. Escopo temporal: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "eco": {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Texto constitucional — Malta / portal oficial",
            "locator": "Artigos 10,17,18 e 21",
            "statement": "Prevê ensino primário gratuito em escolas estatais e assistência social, preservando incentivo à empresa privada.",
            "basis": "norm",
            "publishedDate": "Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Prevê ensino primário gratuito em escolas estatais e assistência social, preservando incentivo à empresa privada.",
        "uncertainty": "Provisão pública setorial, não predominância estatal da economia; princípios deste capítulo não são diretamente exigíveis em juízo. Escopo temporal: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026.",
        "reviewedOn": "2026-10-07",
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
            "sourceTitle": "Texto constitucional — Malta / portal oficial",
            "locator": "Artigo 45(1)–(5), versão consultada em 2026",
            "statement": "Proteção antidiscriminatória inclui sexo, orientação sexual e identidade de gênero.",
            "basis": "norm",
            "publishedDate": "Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Proteção antidiscriminatória inclui sexo, orientação sexual e identidade de gênero.",
        "uncertainty": "Proteção normativa parcial; artigo 45 preserva exceções, inclusive matérias de direito pessoal, e não estabelece toda política de aborto ou família. Escopo temporal: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      }
    },
    "sources": [
      {
        "title": "Texto constitucional — Malta / portal oficial",
        "url": "https://legislation.mt/eli/const/eng/pdf",
        "note": "Texto primário lido em 7/10/2026. Versão: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026. Artigos 1,2,10,40,45: Constituição oficial consolidada substitui tradução de 2016 marcada como posteriormente emendada. O texto é uma fonte normativa datada, não certificado de execução ou consolidação de todas as emendas."
      },
      {
        "title": "Freedom in the World 2025 — Malta",
        "url": "https://freedomhouse.org/country/malta/freedom-world/2025",
        "note": "Overview e Key Developments in 2024 efetivamente lidos em 7/10/2026; relatório abreviado de 2025. Usam-se narrativas específicas, sem conversão de notas numéricas."
      }
    ],
    "rationale": "Eleições regulares competitivas e alternância periódica; presidência cerimonial eleita pelo Parlamento em 2024. Religião católica estatal e ensino religioso nas escolas públicas coexistem com liberdade de culto e recusa de instrução religiosa. Adota neutralidade, não alinhamento e recusa alianças militares, com exceções de autodefesa e medidas da ONU. Prevê ensino primário gratuito em escolas estatais e assistência social, preservando incentivo à empresa privada. Proteção antidiscriminatória inclui sexo, orientação sexual e identidade de gênero.",
    "caveats": "Barreiras a partidos pequenos e corrupção continuam; prática de 2024 e normas de 2026 são recortes distintos. Norma de 2026, sem afirmar prática escolar universal ou identidade religiosa da população. Escopo temporal: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026. Orientação normativa em 2026, sem afirmar ausência de forças de defesa ou não intervenção absoluta. Escopo temporal: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026. Provisão pública setorial, não predominância estatal da economia; princípios deste capítulo não são diretamente exigíveis em juízo. Escopo temporal: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026. Proteção normativa parcial; artigo 45 preserva exceções, inclusive matérias de direito pessoal, e não estabelece toda política de aborto ou família. Escopo temporal: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026. Âncoras editoriais não são medições. Normas e execução têm escopos distintos. Eixos ausentes são desconhecidos; cobertura menor que seis eixos para matches."
  },
  {
    "id": "indonesia",
    "kind": "country",
    "category": "country",
    "name": "Indonésia",
    "period": "Prática institucional em 2024; camada normativa da tradução constitucional oferecida pela Corte em 2026, sem data editorial ou certificação independente de consolidação contemporânea",
    "vec": {
      "est": 40,
      "rep": 60,
      "pod": 60,
      "imi": 40,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 40,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Competências regionais, competição, coerção estatal, privilégio religioso e proteção cultural são proposições separadas.",
    "caveats": "Camada normativa oferecida em 2026, sem prova independente de edição atual; data não foi inferida de OCR ilegível. Controle estatal do artigo 33 não basta para provar propriedade/provedor: eco desconhecido. Demais eixos sem suporte permanecem desconhecidos.",
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
      },
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
    "evidence": {
      "est": "medium",
      "rep": "medium",
      "pod": "medium",
      "rel": "medium",
      "imi": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Constituição da Indonésia — tradução oferecida pela Corte Constitucional"
        ],
        "rationale": "Autonomia substantiva dentro de competências nacionais sustenta direção unitária moderada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não se infere centralização da palavra unitário; a edição normativa não certifica execução territorial em 2024."
      },
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — Indonésia"
        ],
        "rationale": "Competição efetiva com restrições materiais sustenta democracia parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Corte não encontrou irregularidade na distribuição assistencial investigada; parentesco não determina o eixo sozinho."
      },
      "pod": {
        "sourceTitles": [
          "Freedom in the World 2025 — Indonésia"
        ],
        "rationale": "Coerção estatal sobre expressão e defesa sustenta autoritarismo parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Pluralismo midiático e proteções legais coexistem; não descreve toda a segurança pública."
      },
      "rel": {
        "sourceTitles": [
          "Constituição da Indonésia — tradução oferecida pela Corte Constitucional",
          "Freedom in the World 2025 — Indonésia"
        ],
        "rationale": "Privilégio institucional da adesão religiosa sustenta direção confessional parcial. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Pluralidade reconhecida é contraevidência; efeitos futuros do código penal de 2026 não são tratados como prática de 2024."
      },
      "imi": {
        "sourceTitles": [
          "Constituição da Indonésia — tradução oferecida pela Corte Constitucional"
        ],
        "rationale": "Proteção explícita de pluralidade cultural sustenta multiculturalismo parcial. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Só cobre cultura e língua de grupos internos; não afirma abertura migratória ou implementação contemporânea."
      }
    },
    "coding": {
      "est": {
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
        "reviewedOn": "2026-10-07",
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
    "id": "turkey",
    "kind": "country",
    "category": "country",
    "name": "Turquia",
    "period": "Prática institucional em 2024; camada normativa histórica da Constituição revista em 2017, sem certificação de consolidação em 2024–2026",
    "vec": {
      "est": 40,
      "rep": 40,
      "pod": 60,
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
    "rationale": "Competição/coerção de 2024 e autonomia/provisão/planejamento na norma histórica são separados.",
    "caveats": "Artigos 24 e 136 sobre religião foram lidos, mas separação declarada, currículo religioso e agência estatal não foram arbitrariamente promediados: rel desconhecido. Cultura, defesa, intervenção, comércio, costumes e tecnologia também desconhecidos.",
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
      },
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
    "evidence": {
      "est": "medium",
      "rep": "medium",
      "pod": "medium",
      "eco": "medium",
      "con": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Constituição turca — edição 2017 em Constitute"
        ],
        "rationale": "Autonomia local subordinada à tutela central sustenta direção unitária moderada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Recorte normativo de 2017; não prova toda a prática territorial atual."
      },
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — Turquia"
        ],
        "rationale": "Controle assimétrico da competição sustenta direção despótica parcial. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Vitórias da oposição impedem presumir ausência total de competição."
      },
      "pod": {
        "sourceTitles": [
          "Freedom in the World 2025 — Turquia"
        ],
        "rationale": "Coerção sobre expressão e organização sustenta direção autoritária parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não descreve todas as dimensões de defesa ou vigilância individual."
      },
      "eco": {
        "sourceTitles": [
          "Constituição turca — edição 2017 em Constitute"
        ],
        "rationale": "Provedor universitário e propriedade produtiva direta sustentam direção pública parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Universidades de fundações coexistem; norma histórica não mede execução contemporânea nem toda a propriedade."
      },
      "con": {
        "sourceTitles": [
          "Constituição turca — edição 2017 em Constitute"
        ],
        "rationale": "Planejamento econômico explícito sustenta direção planejadora parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não certifica execução contemporânea nem planejamento integral da produção."
      }
    },
    "coding": {
      "est": {
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
];

export const currentCountryCoverage05Additions: Record<string, CountryCoverageAddition> = {
  "united-states": {
    "sources": [
      {
        "title": "VA — Veterans Health Administration, provisão direta",
        "url": "https://department.va.gov/vha/about-us/",
        "note": "Fonte primária efetivamente aberta e passagem lida em 7/10/2026."
      }
    ],
    "coding": [
      {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "VA — Veterans Health Administration, provisão direta",
            "locator": "About VHA; serviços comuns; VHA leadership",
            "statement": "VHA opera centros médicos e clínicas, emprega profissionais e fornece diretamente serviços hospitalares e ambulatoriais.",
            "basis": "declaration",
            "publishedDate": "Página atualizada em 2026-06-02",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Provedor federal de saúde explicitamente identificado sustenta provisão pública parcial.",
        "uncertainty": "Recorte de saúde dos veteranos; não implica sistema universal, predominância pública nacional ou inexistência de prestadores privados.",
        "reviewedOn": "2026-10-07"
      }
    ],
    "periodAddition": "Página atualizada em 2026-06-02",
    "caveatAddition": "Recorte de saúde dos veteranos; não implica sistema universal, predominância pública nacional ou inexistência de prestadores privados."
  },
  "japan": {
    "sources": [
      {
        "title": "MOFA — política de EPA/FTA",
        "url": "https://www.mofa.go.jp/policy/economy/fta/index.html",
        "note": "Fonte primária efetivamente aberta e passagem lida em 7/10/2026."
      }
    ],
    "coding": [
      {
        "axis": "com",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "MOFA — política de EPA/FTA",
            "locator": "EPA and FTA; In Force or Signed; Under Negotiation; In Suspension",
            "statement": "Japão promove acordos de liberalização de comércio e investimento; distingue acordos assinados/vigentes, negociação e suspensão.",
            "basis": "declaration",
            "publishedDate": "2026-04-10",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Promoção explícita de redução de barreiras sustenta integração comercial parcial.",
        "uncertainty": "Não trata todo acordo assinado como vigente, nem elimina tarifas agrícolas, reservas ou barreiras específicas; política declarada, não medição de abertura.",
        "reviewedOn": "2026-10-07"
      }
    ],
    "periodAddition": "2026-04-10",
    "caveatAddition": "Não trata todo acordo assinado como vigente, nem elimina tarifas agrícolas, reservas ou barreiras específicas; política declarada, não medição de abertura."
  },
  "south-africa": {
    "sources": [
      {
        "title": "Constituição da África do Sul — edição oficial com emendas até 2012",
        "url": "https://www.justice.gov.za/constitution/SAConstitution-web-eng.pdf",
        "note": "PDF oficial de182 páginas, capa com emendas até2012; artigos30–31 reabertos nesta revisão, sem presumir vigência posterior."
      }
    ],
    "coding": [
      {
        "axis": "imi",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constituição da África do Sul — edição oficial com emendas até 2012",
            "locator": "Artigos 30–31; p.16 do PDF",
            "statement": "Protege uso da língua e cultura escolhidas e associações culturais, religiosas e linguísticas de comunidades.",
            "basis": "norm",
            "publishedDate": "Camada normativa da edição com emendas até 2012; consultada em 2026-10-07",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Preservação explícita de culturas e línguas sustenta multiculturalismo parcial.",
        "uncertainty": "Norma histórica de 2012; não certifica consolidação ou prática em 2024–2026 nem abertura migratória. Direitos sujeitos ao Bill of Rights.",
        "reviewedOn": "2026-10-07"
      }
    ],
    "periodAddition": "Camada normativa da edição com emendas até 2012; consultada em 2026-10-07",
    "caveatAddition": "Norma histórica de 2012; não certifica consolidação ou prática em 2024–2026 nem abertura migratória. Direitos sujeitos ao Bill of Rights."
  },
  "france": {
    "sources": [
      {
        "title": "União Europeia — funcionamento da união aduaneira",
        "url": "https://european-union.europa.eu/priorities-and-actions/actions-topic/customs_en",
        "note": "Explicação institucional primária efetivamente lida: ausência de direitos internos e tarifas externas comuns; página sem data editorial."
      },
      {
        "title": "União Europeia — França, pertencimento institucional",
        "url": "https://european-union.europa.eu/principles-countries-history/eu-countries/france_en",
        "note": "Perfil institucional contemporâneo efetivamente lido, usado apenas para delimitar aplicação do regime comum."
      }
    ],
    "coding": [
      {
        "axis": "com",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "União Europeia — França, pertencimento institucional",
            "locator": "Overview, EU Member State",
            "statement": "Integra a União Europeia desde 1958.",
            "basis": "declaration",
            "publishedDate": "Página sem data editorial, consultada em 2026-10-07",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "União Europeia — funcionamento da união aduaneira",
            "locator": "The EU customs union in action, primeiros três parágrafos",
            "statement": "Não há direitos aduaneiros entre membros; importações externas recebem tarifa comum e controles.",
            "basis": "declaration",
            "publishedDate": "Página sem data editorial, consultada em 2026-10-07",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Remoção de barreiras internas num regime comum sustenta integração comercial parcial.",
        "uncertainty": "Não é inferência de pertença sozinha; tarifas e controles externos persistem. França: não estende automaticamente regime a todos os territórios ultramarinos.",
        "reviewedOn": "2026-10-07"
      }
    ],
    "periodAddition": "Regime aduaneiro descrito institucionalmente em páginas sem data consultadas em 2026-10-07",
    "caveatAddition": "Com cobre integração aduaneira interna, não livre comércio universal; controles externos e escopo territorial permanecem."
  },
  "malta-current-2025": {
    "sources": [
      {
        "title": "União Europeia — funcionamento da união aduaneira",
        "url": "https://european-union.europa.eu/priorities-and-actions/actions-topic/customs_en",
        "note": "Explicação institucional primária efetivamente lida: ausência de direitos internos e tarifas externas comuns; página sem data editorial."
      },
      {
        "title": "União Europeia — Malta, pertencimento institucional",
        "url": "https://european-union.europa.eu/principles-countries-history/eu-countries/malta_en",
        "note": "Perfil institucional contemporâneo efetivamente lido, usado apenas para delimitar aplicação do regime comum."
      }
    ],
    "coding": [
      {
        "axis": "com",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "União Europeia — Malta, pertencimento institucional",
            "locator": "Overview, EU Member State",
            "statement": "Integra a União Europeia desde 2004.",
            "basis": "declaration",
            "publishedDate": "Página sem data editorial, consultada em 2026-10-07",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "União Europeia — funcionamento da união aduaneira",
            "locator": "The EU customs union in action, primeiros três parágrafos",
            "statement": "Não há direitos aduaneiros entre membros; importações externas recebem tarifa comum e controles.",
            "basis": "declaration",
            "publishedDate": "Página sem data editorial, consultada em 2026-10-07",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Remoção de barreiras internas num regime comum sustenta integração comercial parcial.",
        "uncertainty": "Não é inferência de pertença sozinha; tarifas e controles externos persistem. O recorte é o regime aduaneiro comum aplicado a Malta.",
        "reviewedOn": "2026-10-07"
      }
    ],
    "periodAddition": "Regime aduaneiro descrito institucionalmente em páginas sem data consultadas em 2026-10-07",
    "caveatAddition": "Com cobre integração aduaneira interna, não livre comércio universal; controles externos e escopo territorial permanecem."
  },
  "indonesia": {
    "sources": [
      {
        "title": "MOFA — protocolo bilateral Japão–Indonésia, notas diplomáticas",
        "url": "https://www.mofa.go.jp/press/release/pressite_000001_02465.html",
        "note": "Fonte primária efetivamente aberta e passagem lida em 7/10/2026."
      }
    ],
    "coding": [
      {
        "axis": "com",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "MOFA — protocolo bilateral Japão–Indonésia, notas diplomáticas",
            "locator": "Parágrafo inicial e item1",
            "statement": "Notas diplomáticas concluíram procedimentos para entrada do protocolo em 1/8/2026; emendas melhoram acesso a mercados de bens e serviços.",
            "basis": "declaration",
            "publishedDate": "2026-06-26",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Compromisso bilateral explícito de melhorar acesso a mercados sustenta abertura parcial.",
        "uncertainty": "Documento anuncia entrada prevista, não verifica execução posterior; acordo bilateral não resolve todas as reservas ou política comercial global.",
        "reviewedOn": "2026-10-07"
      }
    ],
    "periodAddition": "2026-06-26",
    "caveatAddition": "Documento anuncia entrada prevista, não verifica execução posterior; acordo bilateral não resolve todas as reservas ou política comercial global."
  },
  "turkey": {
    "sources": [
      {
        "title": "Comissão Europeia — relações comerciais com Türkiye",
        "url": "https://policy.trade.ec.europa.eu/eu-trade-relationships-country-and-region/countries-and-regions/turkiye_en",
        "note": "Fonte primária efetivamente aberta e passagem lida em 7/10/2026."
      }
    ],
    "coding": [
      {
        "axis": "com",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Comissão Europeia — relações comerciais com Türkiye",
            "locator": "The EU and Türkiye, parágrafos2–6; Trading with the world",
            "statement": "União aduaneira remove tarifas e restrições quantitativas em bens industriais; agricultura tem concessões específicas, serviços e compras públicas aguardam extensão.",
            "basis": "declaration",
            "publishedDate": "Página sem data editorial, contém dados de2025; consultada em2026-10-07",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Liberalização industrial efetiva descrita pela contraparte sustenta integração parcial.",
        "uncertainty": "Não afirma abertura de todos os setores ou inexistência de defesa comercial; extensão proposta ainda sem diretivas do Conselho.",
        "reviewedOn": "2026-10-07"
      }
    ],
    "periodAddition": "Página sem data editorial, contém dados de2025; consultada em2026-10-07",
    "caveatAddition": "Não afirma abertura de todos os setores ou inexistência de defesa comercial; extensão proposta ainda sem diretivas do Conselho."
  },
  "andorra-current-2025": {
    "sources": [
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
    "coding": [
      {
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
        "reviewedOn": "2026-10-07"
      }
    ],
    "periodAddition": "Descrição aduaneira EEAS de24/11/2021 e autorização do Conselho de16/07/2026, sem prova das etapas posteriores",
    "caveatAddition": "Con permanece desconhecido: direito de empresa/mercado e permissão genérica de intervenção não provam predominância operacional. Com possui escopos datados e condicionais explícitos."
  }
};

/** Only augments already audited baselines; repair04 must precede this function. */
export function extendCurrentCountryCoverage05(entry: ReferenceEntry): ReferenceEntry {
 const add = currentCountryCoverage05Additions[entry.id];
 if (!add) return entry;
 if (!entry.coding || Object.keys(entry.evidence).some(axis => !entry.coding?.[axis as keyof typeof entry.coding])) return entry;
 if (add.coding.every(input => entry.coding![input.axis])) return entry;
 const sources = [...entry.sources];
 for (const s of add.sources) if (!sources.some(prior => prior.title===s.title && prior.url===s.url)) sources.push(s);
 const result: ReferenceEntry = {...entry, sources, vec:{...entry.vec}, evidence:{...entry.evidence}, axisEvidence:{...entry.axisEvidence}, coding:{...entry.coding},
  period: `${entry.period}; ${add.periodAddition}`, caveats: `${entry.caveats ?? ''} ${add.caveatAddition}`.trim()};
 for (const input of add.coding) {
  if (entry.coding[input.axis]) continue;
  const coded=codeReferenceAxis(input,sources);
  result.vec[input.axis]=coded.value; result.evidence[input.axis]=coded.evidence;
  result.axisEvidence![input.axis]=coded.axisEvidence; result.coding![input.axis]=coded.coding;
 }
 return result;
}
export const currentCountryCoverageAudit05 = Object.entries(currentCountryCoverage05Additions).map(([id,add])=>({
 id, reviewedOn:'2026-10-07', originalLayer: id.endsWith('current-2025') ? 'generated-batch03-record-before-legacy-preparation' : 'literal-base-record-before-legacy-preparation',
 liveLayer:'actual-referenceEntries-snapshot-before-coverage05', expectedPriorLayer:'explicit-projection-after-repair04-not-actual-live',
 originalBefore:currentCountryCoverage05OriginalBefore.find(e=>e.id===id)!, liveBefore:currentCountryCoverage05LiveBefore.find(e=>e.id===id)!,
 expectedAfterPriorRepair04:currentCountryCoverage05ExpectedAfterPriorRepair04.find(e=>e.id===id)!,
 newAxes:add.coding.map(c=>c.axis), sources:add.sources, coding:add.coding.map(c=>codeReferenceAxis(c,add.sources).coding),
}));
