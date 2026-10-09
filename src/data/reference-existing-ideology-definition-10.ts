import type {ReferenceEntry} from './references';

export const existingIdeologyDefinition10PreviousSnapshots = [
  {
    "id": "social-liberalism",
    "kind": "ideology",
    "category": "ideology",
    "name": "Liberalismo social",
    "period": "Manifesto de Andorra, 20/05/2017",
    "vec": {
      "est": 50,
      "rep": 80,
      "pod": 40,
      "imi": 40,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 20,
      "rel": 80,
      "mor": 60,
      "tec": 60
    },
    "rationale": "Posições programáticas codificadas em âncoras ordinais explícitas a partir de trechos primários localizados; não são números medidos pelas fontes.",
    "caveats": "Economia/propriedade e planejamento ficam desconhecidos: acesso a propriedade, saúde e mercados não estabelece predominância de uma forma de propriedade nem um modelo abrangente de alocação. Descentralização genérica não estabelece federalismo.",
    "sources": [
      {
        "title": "Manifesto Liberal de Andorra",
        "url": "https://liberal-international.org/who-we-are/our-mission/landmark-documents/political-manifestos/liberal-manifesto-2017/",
        "note": "Direitos, pluralismo, propriedade, empreendimento e seguridade."
      },
      {
        "title": "LI — Manifesto de Andorra 2017, PDF oficial",
        "url": "https://liberal-international.org/wp-content/uploads/2018/03/Andorra-Liberal-Manifesto-2017-FINAL.pdf",
        "note": "Fonte primária lida em 07/10/2026; locadores e limites registrados por eixo. Programa declarado, não estatística ou prática observada."
      }
    ],
    "evidence": {
      "rep": "high",
      "pod": "medium",
      "imi": "medium",
      "rel": "high",
      "mor": "medium",
      "com": "high",
      "tec": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "LI — Manifesto de Andorra 2017, PDF oficial"
        ],
        "rationale": "Democracia programática forte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Programa declarado, não prática de todos os partidos ou opinião dos membros."
      },
      "pod": {
        "sourceTitles": [
          "LI — Manifesto de Andorra 2017, PDF oficial"
        ],
        "rationale": "Liberdade com garantias legais. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: §1 também exige investimento público em segurança."
      },
      "imi": {
        "sourceTitles": [
          "LI — Manifesto de Andorra 2017, PDF oficial"
        ],
        "rationale": "Abertura cultural regulada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não é imigração irrestrita nem resposta completa sobre assimilação."
      },
      "rel": {
        "sourceTitles": [
          "LI — Manifesto de Andorra 2017, PDF oficial"
        ],
        "rationale": "Separação institucional explícita. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Não atribui ateísmo aos membros."
      },
      "mor": {
        "sourceTitles": [
          "LI — Manifesto de Andorra 2017, PDF oficial"
        ],
        "rationale": "Reforma social explícita e parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não uniformiza todas as pautas morais."
      },
      "com": {
        "sourceTitles": [
          "LI — Manifesto de Andorra 2017, PDF oficial"
        ],
        "rationale": "Livre comércio programático amplo. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Condicionado às regras da OMC e igualdade de acesso."
      },
      "tec": {
        "sourceTitles": [
          "LI — Manifesto de Andorra 2017, PDF oficial"
        ],
        "rationale": "Avanço técnico explicitamente regulado. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não legitima todo uso militar ou alteração corporal."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "LI — Manifesto de Andorra 2017, PDF oficial",
            "locator": "Response §2, pp.5",
            "statement": "Responsabilização democrática, poderes separados e sociedade civil.",
            "basis": "declaration",
            "publishedDate": "2017-05-20",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Democracia programática forte.",
        "uncertainty": "Programa declarado, não prática de todos os partidos ou opinião dos membros.",
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
            "sourceTitle": "LI — Manifesto de Andorra 2017, PDF oficial",
            "locator": "Response §3, pp.5–6",
            "statement": "Expressão, privacidade e proteção contra vigilância.",
            "basis": "declaration",
            "publishedDate": "2017-05-20",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Liberdade com garantias legais.",
        "uncertainty": "§1 também exige investimento público em segurança.",
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
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "LI — Manifesto de Andorra 2017, PDF oficial",
            "locator": "Response §9, pp.8–9",
            "statement": "Migração enriquece culturas, com limites de capacidade.",
            "basis": "declaration",
            "publishedDate": "2017-05-20",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Abertura cultural regulada.",
        "uncertainty": "Não é imigração irrestrita nem resposta completa sobre assimilação.",
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
            "sourceTitle": "LI — Manifesto de Andorra 2017, PDF oficial",
            "locator": "Response §2, pp.5",
            "statement": "Separa religiões organizadas e instituições estatais.",
            "basis": "declaration",
            "publishedDate": "2017-05-20",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Separação institucional explícita.",
        "uncertainty": "Não atribui ateísmo aos membros.",
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
            "sourceTitle": "LI — Manifesto de Andorra 2017, PDF oficial",
            "locator": "Response §1, pp.4–5",
            "statement": "Defende pessoas LGBT e direitos reprodutivos femininos.",
            "basis": "declaration",
            "publishedDate": "2017-05-20",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Reforma social explícita e parcial.",
        "uncertainty": "Não uniformiza todas as pautas morais.",
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
        "position": "strong-second",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "LI — Manifesto de Andorra 2017, PDF oficial",
            "locator": "Response §8, pp.8",
            "statement": "Combate protecionismo e promove acordos abertos.",
            "basis": "declaration",
            "publishedDate": "2017-05-20",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Livre comércio programático amplo.",
        "uncertainty": "Condicionado às regras da OMC e igualdade de acesso.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 20,
        "range": [
          10,
          25
        ]
      },
      "tec": {
        "axis": "tec",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "LI — Manifesto de Andorra 2017, PDF oficial",
            "locator": "Response §7, pp.7–8",
            "statement": "Promove IA e biotecnologia com supervisão de abusos.",
            "basis": "declaration",
            "publishedDate": "2017-05-20",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Avanço técnico explicitamente regulado.",
        "uncertainty": "Não legitima todo uso militar ou alteração corporal.",
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
    "id": "libertarianism",
    "kind": "ideology",
    "category": "ideology",
    "name": "Libertarianismo",
    "period": "Plataforma do Libertarian Party, página consultada em 07/10/2026",
    "vec": {
      "est": 50,
      "rep": 60,
      "pod": 20,
      "imi": 50,
      "dip": 40,
      "int": 80,
      "eco": 20,
      "con": 20,
      "com": 20,
      "rel": 80,
      "mor": 60,
      "tec": 50
    },
    "rationale": "Posições programáticas codificadas em âncoras ordinais explícitas a partir de trechos primários localizados; não são números medidos pelas fontes.",
    "caveats": "Não atribui plataforma de um partido a todos os libertarianismos. Não há edição impressa datada na página atual. Defesa suficiente e secessão não estabelecem todo o eixo pacifismo/federalismo; tecnologia permanece desconhecida. Revisão 8 outubro 2026: admissão migratória e antidiscriminação não documentam todo pluralismo cultural/linguístico; IMI desconhecido. Paz geral com defesa explícita documenta DIP moderado. Demais oito eixos e objetos-fonte anteriores preservados.",
    "sources": [
      {
        "title": "Plataforma do Libertarian Party",
        "url": "https://lp.org/platform-page/",
        "note": "Fonte primária para liberdades, economia, imigração e política externa."
      },
      {
        "title": "LP — Plataforma, texto integral consultado em 2026",
        "url": "https://lp.org/platform-page/",
        "note": "Fonte primária lida em 07/10/2026; locadores e limites registrados por eixo. Programa declarado, não estatística ou prática observada."
      },
      {
        "title": "LP — Foreign policy and cultural scope, current undated programme read 8 October 2026",
        "url": "https://lp.org/platform-page/",
        "note": "Fonte primária efetivamente lida no corpo 51–169; nenhuma data de adoção é informada. Defesa 147, paz/não ingerência/resistência 152 e abertura migratória 156/direitos individuais 158–159. Não é edição presumida 2024."
      }
    ],
    "evidence": {
      "rep": "medium",
      "pod": "high",
      "int": "high",
      "eco": "high",
      "con": "high",
      "com": "high",
      "rel": "high",
      "mor": "medium",
      "dip": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "LP — Plataforma, texto integral consultado em 2026"
        ],
        "rationale": "Desenho eleitoral democrático explícito e parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Programa declarado, não prática de todos os partidos ou opinião dos membros."
      },
      "pod": {
        "sourceTitles": [
          "LP — Plataforma, texto integral consultado em 2026"
        ],
        "rationale": "Garantias amplas contra coerção. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Armas e propriedade privada permanecem parte do programa."
      },
      "int": {
        "sourceTitles": [
          "LP — Plataforma, texto integral consultado em 2026"
        ],
        "rationale": "Não intervenção expressa. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Mantém defesa contra agressão; não implica pacifismo absoluto."
      },
      "eco": {
        "sourceTitles": [
          "LP — Plataforma, texto integral consultado em 2026"
        ],
        "rationale": "Predominância privada explicitamente defendida. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Não é propriedade sem regras contra fraude ou agressão."
      },
      "con": {
        "sourceTitles": [
          "LP — Plataforma, texto integral consultado em 2026"
        ],
        "rationale": "Livre mercado explicitamente abrangente. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Programa declarado, não prática de todos os partidos ou opinião dos membros."
      },
      "com": {
        "sourceTitles": [
          "LP — Plataforma, texto integral consultado em 2026"
        ],
        "rationale": "Livre comércio amplo. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Programa declarado, não prática de todos os partidos ou opinião dos membros."
      },
      "rel": {
        "sourceTitles": [
          "LP — Plataforma, texto integral consultado em 2026"
        ],
        "rationale": "Separação de religião e governo. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Não atribui irreligiosidade privada."
      },
      "mor": {
        "sourceTitles": [
          "LP — Plataforma, texto integral consultado em 2026"
        ],
        "rationale": "Reforma social definida por autonomia. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Direitos parentais e ausência de aprovação moral limitam leitura de progressismo universal."
      },
      "dip": {
        "sourceTitles": [
          "LP — Foreign policy and cultural scope, current undated programme read 8 October 2026"
        ],
        "rationale": "Orientação geral de paz e não expansão militar, com exceção defensiva explícita. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não abolir toda força armada: defesa contra agressão e resistência à tirania continuam. Não são resultados militares observados; programa não representa todos os libertarianismos."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "LP — Plataforma, texto integral consultado em 2026",
            "locator": "§3.6",
            "statement": "Defende representação, alternativas eleitorais e referendos.",
            "basis": "declaration",
            "publishedDate": "Página sem data de edição; consultada 2026-10-07",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Desenho eleitoral democrático explícito e parcial.",
        "uncertainty": "Programa declarado, não prática de todos os partidos ou opinião dos membros.",
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
        "position": "strong-second",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "LP — Plataforma, texto integral consultado em 2026",
            "locator": "§1.2–1.3,1.7–1.8,3.2",
            "statement": "Expressão, privacidade, devido processo e fim da pena capital.",
            "basis": "declaration",
            "publishedDate": "Página sem data de edição; consultada 2026-10-07",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Garantias amplas contra coerção.",
        "uncertainty": "Armas e propriedade privada permanecem parte do programa.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 20,
        "range": [
          10,
          25
        ]
      },
      "int": {
        "axis": "int",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "LP — Plataforma, texto integral consultado em 2026",
            "locator": "§3.1,3.3",
            "statement": "Rejeita intervenção externa, ajuda militar e mudança de regime.",
            "basis": "declaration",
            "publishedDate": "Página sem data de edição; consultada 2026-10-07",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Não intervenção expressa.",
        "uncertainty": "Mantém defesa contra agressão; não implica pacifismo absoluto.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "eco": {
        "axis": "eco",
        "position": "strong-second",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "LP — Plataforma, texto integral consultado em 2026",
            "locator": "§2.8,2.12–2.14",
            "statement": "Privatiza provisão social; Estado não compete com empresas.",
            "basis": "declaration",
            "publishedDate": "Página sem data de edição; consultada 2026-10-07",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Predominância privada explicitamente defendida.",
        "uncertainty": "Não é propriedade sem regras contra fraude ou agressão.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 20,
        "range": [
          10,
          25
        ]
      },
      "con": {
        "axis": "con",
        "position": "strong-second",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "LP — Plataforma, texto integral consultado em 2026",
            "locator": "§2.0–2.1",
            "statement": "Mercado aloca recursos; rejeita controles produtivos e de preços.",
            "basis": "declaration",
            "publishedDate": "Página sem data de edição; consultada 2026-10-07",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Livre mercado explicitamente abrangente.",
        "uncertainty": "Programa declarado, não prática de todos os partidos ou opinião dos membros.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 20,
        "range": [
          10,
          25
        ]
      },
      "com": {
        "axis": "com",
        "position": "strong-second",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "LP — Plataforma, texto integral consultado em 2026",
            "locator": "§3.3–3.4",
            "statement": "Remove obstáculos comerciais, tarifas e sanções.",
            "basis": "declaration",
            "publishedDate": "Página sem data de edição; consultada 2026-10-07",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Livre comércio amplo.",
        "uncertainty": "Programa declarado, não prática de todos os partidos ou opinião dos membros.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 20,
        "range": [
          10,
          25
        ]
      },
      "rel": {
        "axis": "rel",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "LP — Plataforma, texto integral consultado em 2026",
            "locator": "§1.2",
            "statement": "Estado não auxilia nem ataca religiões.",
            "basis": "declaration",
            "publishedDate": "Página sem data de edição; consultada 2026-10-07",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Separação de religião e governo.",
        "uncertainty": "Não atribui irreligiosidade privada.",
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
            "sourceTitle": "LP — Plataforma, texto integral consultado em 2026",
            "locator": "§1.4,2.10",
            "statement": "Relações consensuais livres, igualdade sexual e descriminalização do trabalho sexual.",
            "basis": "declaration",
            "publishedDate": "Página sem data de edição; consultada 2026-10-07",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Reforma social definida por autonomia.",
        "uncertainty": "Direitos parentais e ausência de aprovação moral limitam leitura de progressismo universal.",
        "reviewedOn": "2026-10-07",
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
            "sourceTitle": "LP — Foreign policy and cultural scope, current undated programme read 8 October 2026",
            "locator": "§3.1 National Defense / §3.3 International Affairs; actual147/152–153",
            "statement": "Defende paz com todas as nações, rejeita policiamento mundial e mantém defesa suficiente e direito de resistir à tirania.",
            "basis": "declaration",
            "publishedDate": "Current official webpage; adoption/publication date unlisted, captured 8 October 2026",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Orientação geral de paz e não expansão militar, com exceção defensiva explícita.",
        "uncertainty": "Não abolir toda força armada: defesa contra agressão e resistência à tirania continuam. Não são resultados militares observados; programa não representa todos os libertarianismos.",
        "relatedQuestionIds": [
          "diplomacia_04"
        ],
        "reviewedOn": "2026-10-08",
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
    "id": "green-politics",
    "kind": "ideology",
    "category": "ideology",
    "name": "Política verde",
    "period": "Carta Global Greens, atualização da Coreia, 2023",
    "vec": {
      "est": 80,
      "rep": 80,
      "pod": 40,
      "imi": 20,
      "dip": 20,
      "int": 50,
      "eco": 60,
      "con": 60,
      "com": 50,
      "rel": 50,
      "mor": 80,
      "tec": 40
    },
    "rationale": "Posições programáticas codificadas em âncoras ordinais explícitas a partir de trechos primários localizados; não são números medidos pelas fontes.",
    "caveats": "Não infere segurança de precaução ecológica. Comércio condicionado à sustentabilidade não define automaticamente protecionismo nacional; religião e intervenção permanecem desconhecidas.",
    "sources": [
      {
        "title": "Global Greens Charter 2023",
        "url": "https://globalgreens.org/wp-content/uploads/2023/07/GlobalGreens_Charter_2023.pdf",
        "note": "Princípios de sabedoria ecológica, justiça, democracia, não violência e diversidade."
      }
    ],
    "evidence": {
      "est": "high",
      "rep": "high",
      "pod": "medium",
      "imi": "high",
      "dip": "high",
      "eco": "medium",
      "con": "medium",
      "mor": "high",
      "tec": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Global Greens Charter 2023"
        ],
        "rationale": "Descentralização territorial expressamente abrangente. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Não fixa uma constituição federal única."
      },
      "rep": {
        "sourceTitles": [
          "Global Greens Charter 2023"
        ],
        "rationale": "Democracia explícita. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Programa declarado, não prática de todos os partidos ou opinião dos membros."
      },
      "pod": {
        "sourceTitles": [
          "Global Greens Charter 2023"
        ],
        "rationale": "Liberdades e limites ao poder penal. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não descreve toda política policial."
      },
      "imi": {
        "sourceTitles": [
          "Global Greens Charter 2023"
        ],
        "rationale": "Pluralidade cultural explícita. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Asilo protegido não equivale a todas as fronteiras abertas."
      },
      "dip": {
        "sourceTitles": [
          "Global Greens Charter 2023"
        ],
        "rationale": "Pacifismo programático amplo. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Organização de segurança coletiva continua prevista."
      },
      "eco": {
        "sourceTitles": [
          "Global Greens Charter 2023"
        ],
        "rationale": "Propriedade pública setorial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não infere domínio público de toda economia."
      },
      "con": {
        "sourceTitles": [
          "Global Greens Charter 2023"
        ],
        "rationale": "Coordenação pública parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não é comando central integral."
      },
      "mor": {
        "sourceTitles": [
          "Global Greens Charter 2023"
        ],
        "rationale": "Reforma social em várias pautas explícitas. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Programa declarado, não prática de todos os partidos ou opinião dos membros."
      },
      "tec": {
        "sourceTitles": [
          "Global Greens Charter 2023"
        ],
        "rationale": "Cautela tecnológica com proposições específicas. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Também promove tecnologias sustentáveis; não rejeita ciência ou toda automação."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Global Greens Charter 2023",
            "locator": "Participatory Democracy, p.6",
            "statement": "Poder local/regional; níveis superiores apenas quando essenciais.",
            "basis": "declaration",
            "publishedDate": "Atualização Coreia 2023",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Descentralização territorial expressamente abrangente.",
        "uncertainty": "Não fixa uma constituição federal única.",
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
            "sourceTitle": "Global Greens Charter 2023",
            "locator": "Participatory Democracy, p.6",
            "statement": "Voto igual, proporcionalidade, multipartidarismo e participação.",
            "basis": "declaration",
            "publishedDate": "Atualização Coreia 2023",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Democracia explícita.",
        "uncertainty": "Programa declarado, não prática de todos os partidos ou opinião dos membros.",
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
            "sourceTitle": "Global Greens Charter 2023",
            "locator": "§6.2,6.9–6.13, pp.15–16",
            "statement": "Rejeita tortura, pena capital e detenção arbitrária.",
            "basis": "declaration",
            "publishedDate": "Atualização Coreia 2023",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Liberdades e limites ao poder penal.",
        "uncertainty": "Não descreve toda política policial.",
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
        "position": "strong-second",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Global Greens Charter 2023",
            "locator": "Respect for Diversity, p.8; §6.18, p.16",
            "statement": "Defende diversidade e direitos linguísticos minoritários.",
            "basis": "declaration",
            "publishedDate": "Atualização Coreia 2023",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Pluralidade cultural explícita.",
        "uncertainty": "Asilo protegido não equivale a todas as fronteiras abertas.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 20,
        "range": [
          10,
          25
        ]
      },
      "dip": {
        "axis": "dip",
        "position": "strong-second",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Global Greens Charter 2023",
            "locator": "Nonviolence, p.7",
            "statement": "Não violência, desarmamento e cooperação são centrais.",
            "basis": "declaration",
            "publishedDate": "Atualização Coreia 2023",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Pacifismo programático amplo.",
        "uncertainty": "Organização de segurança coletiva continua prevista.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 20,
        "range": [
          10,
          25
        ]
      },
      "eco": {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Global Greens Charter 2023",
            "locator": "§5.2,7.2, pp.13,17",
            "statement": "Água pública; rejeita privatização da infraestrutura hídrica.",
            "basis": "declaration",
            "publishedDate": "Atualização Coreia 2023",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Propriedade pública setorial.",
        "uncertainty": "Não infere domínio público de toda economia.",
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
            "sourceTitle": "Global Greens Charter 2023",
            "locator": "§5.9–5.10,8.7, pp.14,18",
            "statement": "Regula finanças e empresas; planejamento sustentável local.",
            "basis": "declaration",
            "publishedDate": "Atualização Coreia 2023",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Coordenação pública parcial.",
        "uncertainty": "Não é comando central integral.",
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
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Global Greens Charter 2023",
            "locator": "§6.6,6.16, pp.15–16",
            "statement": "Autonomia reprodutiva, reconhecimento trans e igualdade familiar.",
            "basis": "declaration",
            "publishedDate": "Atualização Coreia 2023",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Reforma social em várias pautas explícitas.",
        "uncertainty": "Programa declarado, não prática de todos os partidos ou opinião dos membros.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "tec": {
        "axis": "tec",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Global Greens Charter 2023",
            "locator": "§3.6,7.9,7.11, pp.11,17",
            "statement": "Rejeita expansão nuclear e cultivos transgênicos; precaução científica.",
            "basis": "declaration",
            "publishedDate": "Atualização Coreia 2023",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Cautela tecnológica com proposições específicas.",
        "uncertainty": "Também promove tecnologias sustentáveis; não rejeita ciência ou toda automação.",
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
    "id": "christian-democracy",
    "kind": "ideology",
    "category": "ideology",
    "name": "Democracia cristã",
    "period": "Manifesto EPP, 2024",
    "vec": {
      "est": 50,
      "rep": 80,
      "pod": 60,
      "imi": 50,
      "dip": 60,
      "int": 40,
      "eco": 50,
      "con": 50,
      "com": 40,
      "rel": 50,
      "mor": 50,
      "tec": 60
    },
    "rationale": "Posições programáticas codificadas em âncoras ordinais explícitas a partir de trechos primários localizados; não são números medidos pelas fontes.",
    "caveats": "Raízes cristãs culturais não provam papel religioso do Estado: rel desconhecido. Tradição combinada com igualdade não define toda pauta moral: mor desconhecido. Economia social de mercado não prova propriedade predominante; eco e con desconhecidos.",
    "sources": [
      {
        "title": "EPP Manifesto 2024",
        "url": "https://www.epp.eu/papers/epp-manifesto-2024",
        "note": "Fonte primária para democracia, economia, defesa, integração, valores e inovação."
      }
    ],
    "evidence": {
      "rep": "high",
      "pod": "medium",
      "dip": "medium",
      "int": "medium",
      "com": "medium",
      "tec": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "EPP Manifesto 2024"
        ],
        "rationale": "Democracia programática explícita. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Programa declarado, não prática de todos os partidos ou opinião dos membros."
      },
      "pod": {
        "sourceTitles": [
          "EPP Manifesto 2024"
        ],
        "rationale": "Poderes de segurança reforçados, sujeitos a direitos. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não deduz autocracia da ênfase em segurança."
      },
      "dip": {
        "sourceTitles": [
          "EPP Manifesto 2024"
        ],
        "rationale": "Postura militar defensiva reforçada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não promove guerra agressiva nem anula neutralidade de membros."
      },
      "int": {
        "sourceTitles": [
          "EPP Manifesto 2024"
        ],
        "rationale": "Intervenção externa explicitamente prevista. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Contexto defensivo e cooperação europeia, não intervenção irrestrita."
      },
      "com": {
        "sourceTitles": [
          "EPP Manifesto 2024"
        ],
        "rationale": "Abertura comercial regulada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não é livre comércio irrestrito."
      },
      "tec": {
        "sourceTitles": [
          "EPP Manifesto 2024"
        ],
        "rationale": "Avanço tecnológico regulado em várias áreas. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não cobre todos os usos corporais ou riscos da tecnologia."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "EPP Manifesto 2024",
            "locator": "Introdução; §3.2",
            "statement": "Democracia, pluralismo e Estado de direito.",
            "basis": "declaration",
            "publishedDate": "Manifesto 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Democracia programática explícita.",
        "uncertainty": "Programa declarado, não prática de todos os partidos ou opinião dos membros.",
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
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "EPP Manifesto 2024",
            "locator": "§1.5 e 1.7; §3.2",
            "statement": "Amplia Europol, bases policiais e armazenamento de IPs com salvaguardas.",
            "basis": "declaration",
            "publishedDate": "Manifesto 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Poderes de segurança reforçados, sujeitos a direitos.",
        "uncertainty": "Não deduz autocracia da ênfase em segurança.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "dip": {
        "axis": "dip",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "EPP Manifesto 2024",
            "locator": "§1.2",
            "statement": "Amplia defesa, indústria militar e NATO.",
            "basis": "declaration",
            "publishedDate": "Manifesto 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Postura militar defensiva reforçada.",
        "uncertainty": "Não promove guerra agressiva nem anula neutralidade de membros.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "int": {
        "axis": "int",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "EPP Manifesto 2024",
            "locator": "§1.1–1.2, fundo de intervenção externa",
            "statement": "Ajuda militar externa e fundo de operações internacionais.",
            "basis": "declaration",
            "publishedDate": "Manifesto 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Intervenção externa explicitamente prevista.",
        "uncertainty": "Contexto defensivo e cooperação europeia, não intervenção irrestrita.",
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
            "sourceTitle": "EPP Manifesto 2024",
            "locator": "Introdução; §2.1–2.2",
            "statement": "Promove acordos recíprocos; protege setores estratégicos.",
            "basis": "declaration",
            "publishedDate": "Manifesto 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Abertura comercial regulada.",
        "uncertainty": "Não é livre comércio irrestrito.",
        "reviewedOn": "2026-10-07",
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
            "sourceTitle": "EPP Manifesto 2024",
            "locator": "§1.2,2.4,2.6",
            "statement": "Promove IA, fusão nuclear, robótica e biotecnologia agrícola.",
            "basis": "declaration",
            "publishedDate": "Manifesto 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Avanço tecnológico regulado em várias áreas.",
        "uncertainty": "Não cobre todos os usos corporais ou riscos da tecnologia.",
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
    "id": "civic-transhumanism",
    "kind": "ideology",
    "category": "ideology",
    "name": "Transumanismo",
    "period": "Bostrom, 2005; declaração Humanity+ adotada em março de 2009",
    "vec": {
      "est": 50,
      "rep": 60,
      "pod": 50,
      "imi": 50,
      "dip": 40,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 80
    },
    "rationale": "Âncoras editoriais transparentes derivadas de normas primárias localizadas; não valores medidos pelas fontes.",
    "caveats": "Referente tecnológico e político delimitado, não programa eleitoral completo. Religião jurídica, migração e todo programa moral permanecem desconhecidos; raízes seculares e antirracismo não os pontuam.",
    "sources": [
      {
        "title": "The Transhumanist Declaration — Humanity+",
        "url": "https://www.humanityplus.org/the-transhumanist-declaration",
        "note": "O texto institucional explicita adoção em março de 2009, originado em 1998; leitura dos oito princípios, sem supor revisão 2012."
      },
      {
        "title": "Transhumanist Values — Nick Bostrom, author primary, 2005",
        "url": "https://nickbostrom.com/papers/transhumanist-values/",
        "note": "Programa de escolhas tecnológicas, acesso, democracia e redução de riscos; publicação autoral 2005, não medição quantitativa."
      }
    ],
    "evidence": {
      "rep": "medium",
      "dip": "medium",
      "tec": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Transhumanist Values — Nick Bostrom, author primary, 2005"
        ],
        "rationale": "Compromisso democrático e jurídico explícito na governança coletiva de riscos e aprimoramentos. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Programa internacional normativo, sem desenho constitucional eleitoral completo, posição sobre cada sistema de governo ou prova de prática institucional."
      },
      "dip": {
        "sourceTitles": [
          "Transhumanist Values — Nick Bostrom, author primary, 2005"
        ],
        "rationale": "Estratégia de cooperação e redução de armamentos catastróficos, limitada pela necessidade de segurança. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não é pacifismo absoluto nem proibição de toda guerra, forças armadas ou defesa; nada inferido sobre intervenção externa ou patriotismo."
      },
      "tec": {
        "sourceTitles": [
          "Transhumanist Values — Nick Bostrom, author primary, 2005",
          "The Transhumanist Declaration — Humanity+"
        ],
        "rationale": "Ampliação artificial voluntária de capacidades constitui finalidade central, com múltiplos campos e limites explícitos. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Não se atribui aceitação de poucas restrições ou segurança de toda inovação. Predições sobre viabilidade tecnológica e pós-humanos não validadas como fatos."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Transhumanist Values — Nick Bostrom, author primary, 2005",
            "locator": "§5 author web 97–98",
            "statement": "Prescreve debate público sobre futuros e extensão da democracia e do Estado de direito ao plano internacional para decisões responsáveis.",
            "basis": "declaration",
            "publishedDate": "2005",
            "accessedDate": "2026-10-08"
          }
        ],
        "relatedQuestionIds": [
          "representacao_01",
          "representacao_19"
        ],
        "rationale": "Compromisso democrático e jurídico explícito na governança coletiva de riscos e aprimoramentos.",
        "uncertainty": "Programa internacional normativo, sem desenho constitucional eleitoral completo, posição sobre cada sistema de governo ou prova de prática institucional.",
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
            "sourceTitle": "Transhumanist Values — Nick Bostrom, author primary, 2005",
            "locator": "§4 web 79; §5 web 100",
            "statement": "Prioriza segurança existencial e paz/cooperação internacional, defendendo combate à proliferação de armas de destruição em massa.",
            "basis": "declaration",
            "publishedDate": "2005",
            "accessedDate": "2026-10-08"
          }
        ],
        "relatedQuestionIds": [
          "diplomacia_10"
        ],
        "rationale": "Estratégia de cooperação e redução de armamentos catastróficos, limitada pela necessidade de segurança.",
        "uncertainty": "Não é pacifismo absoluto nem proibição de toda guerra, forças armadas ou defesa; nada inferido sobre intervenção externa ou patriotismo.",
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "tec": {
        "axis": "tec",
        "position": "strong-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Transhumanist Values — Nick Bostrom, author primary, 2005",
            "locator": "§1 web 14–23; §3 web 70–71; §5 web 93–94",
            "statement": "Aprimoramentos tecnológicos de corpo e mente são meio central do projeto; inclui genética e inteligência artificial, mantendo escolha voluntária, redução de riscos e rejeição de otimismo automático.",
            "basis": "declaration",
            "publishedDate": "2005",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "The Transhumanist Declaration — Humanity+",
            "locator": "Whole eight principles, especially 1–4 and 8; adoption note March 2009",
            "statement": "Defende desenvolvimento e escolha ampla de tecnologias para memória, concentração, prolongamento da vida, reprodução e outras modificações, com gestão responsável de riscos.",
            "basis": "declaration",
            "publishedDate": "Adopted March 2009; originated 1998",
            "accessedDate": "2026-10-08"
          }
        ],
        "relatedQuestionIds": [
          "tecnologia_04",
          "tecnologia_15",
          "tecnologia_20"
        ],
        "rationale": "Ampliação artificial voluntária de capacidades constitui finalidade central, com múltiplos campos e limites explícitos.",
        "uncertainty": "Não se atribui aceitação de poucas restrições ou segurança de toda inovação. Predições sobre viabilidade tecnológica e pós-humanos não validadas como fatos.",
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      }
    }
  }
] as const;

const reviewedDescriptions = {
  "social-liberalism": "Defende direitos individuais, democracia e responsabilidade pública pelo acesso à saúde e à educação.",
  "libertarianism": "Defende governo limitado à proteção de direitos, autonomia pessoal e trocas voluntárias, rejeitando tributação e intervenção econômica.",
  "green-politics": "Defende democracia descentralizada, justiça social e limites ecológicos, incluindo oposição à expansão nuclear.",
  "christian-democracy": "Defende economia social de mercado, subsidiariedade, liberdades democráticas e proteção social, com raízes cristãs.",
  "civic-transhumanism": "Defende aprimoramento humano voluntário, acesso amplo e segurança, com democracia e Estado de direito internacionais."
} as const;
function canonical(value:unknown):string {
 if(Array.isArray(value)) return '['+value.map(canonical).join(',')+']';
 if(value!==null&&typeof value==='object') return '{'+Object.entries(value).sort(([a],[b])=>a.localeCompare(b)).map(([key,item])=>JSON.stringify(key)+':'+canonical(item)).join(',')+'}';
 return JSON.stringify(value);
}
export function reconcileExistingIdeologyDefinition10(item:ReferenceEntry):ReferenceEntry {
 const previous=existingIdeologyDefinition10PreviousSnapshots.find(x=>x.id===item.id);
 if(!previous)return item;
 const rationale=reviewedDescriptions[item.id as keyof typeof reviewedDescriptions];
 const expected={...previous,rationale};
 if(canonical(item)===canonical(expected))return item;
 if(canonical(item)!==canonical(previous))throw new Error('Definition10 changed reviewed baseline: '+item.id);
 return {...item,rationale};
}
export const existingIdeologyDefinition10Audit = {
 reviewedOn:'2026-10-08', integrationStatus:'Integrated accepted wording-only reconciliation; numeric/source fields unchanged',
 scope:'Five substantive programme descriptions replace generic explanations of ordinal coding. No names, dates, sources, vectors, axis metadata or matching gates change.',
 sourceBasis:{
 'social-liberalism':'Andorra2017 C5–C7 social access, Vision pp2–3 individual freedom/democracy.',
 libertarianism:'Official undated platform captured8Oct2026: §§1/2/3 rights, adult autonomy, voluntary exchange, repeal taxation; parent and peer actual whole programme.',
 'green-politics':'GlobalGreens2023 charter: participatory democracy, decentralization, social justice, ecological wisdom and explicit nuclear expansion opposition.',
 'christian-democracy':'EPP2024 own manifesto: social market economy/subsidiarity/Christian roots/religious liberty and democratic rights; no all Christian-democratic schools claim.',
 'civic-transhumanism':'Bostrom2005 §§4–5: responsible voluntary enhancement and broad access;98 democracy/rule of law internationally, safety/existentialrisk21–22/75–79 retained.'
 },
 preservation:'Exact full integrated LIVE archives; changed prior/post rejected; idempotent output; original source and numeric metadata object identities preserved.'
} as const;
