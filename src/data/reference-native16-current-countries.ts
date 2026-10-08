import type { ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';

export const native16CurrentCountriesBefore: ReferenceEntry[] = [
  {
    "id": "fiji-current-2025",
    "name": "Fiji",
    "aliases": [],
    "kind": "country",
    "category": "country",
    "period": "Prática em 2024; norma: 2013, texto inglês disponibilizado pelo governo em abril de 2026",
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
      "rel": 80,
      "mor": 60,
      "tec": 50
    },
    "evidence": {
      "rep": "medium",
      "rel": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — Fiji"
        ],
        "rationale": "Eleições democráticas regulares desde 2014 e transferência pacífica em 2022; oposição FijiFirst foi desregistrada em 2024. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Reformas pós-golpe e desregistro da oposição limitam conclusão sobre intensidade democrática; dúvidas judiciais sobre Constituição são preservadas."
      },
      "rel": {
        "sourceTitles": [
          "Texto constitucional — Fiji / portal oficial"
        ],
        "rationale": "Separa Estado de religião e proíbe preferência oficial por fé ou discriminação contra não crentes. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Escopo normativo expresso de 2013, não descrição de toda prática; tribunais questionaram origem pós-golpe da Constituição em 2024. Escopo temporal: 2013, texto inglês disponibilizado pelo governo em abril de 2026."
      },
      "mor": {
        "sourceTitles": [
          "Texto constitucional — Fiji / portal oficial"
        ],
        "rationale": "Proteção antidiscriminatória inclui orientação sexual, gênero e expressão de identidade. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Proteção parcial, com exceções para direito pessoal, casamento e propriedade costumeira; não presume casamento igualitário. Escopo temporal: 2013, texto inglês disponibilizado pelo governo em abril de 2026."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Freedom in the World 2025 — Fiji",
            "locator": "Overview; Key Developments in 2024",
            "statement": "Eleições democráticas regulares desde 2014 e transferência pacífica em 2022; oposição FijiFirst foi desregistrada em 2024.",
            "basis": "practice",
            "publishedDate": "2025; observações de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Eleições democráticas regulares desde 2014 e transferência pacífica em 2022; oposição FijiFirst foi desregistrada em 2024.",
        "uncertainty": "Reformas pós-golpe e desregistro da oposição limitam conclusão sobre intensidade democrática; dúvidas judiciais sobre Constituição são preservadas.",
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
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Texto constitucional — Fiji / portal oficial",
            "locator": "Seção 4",
            "statement": "Separa Estado de religião e proíbe preferência oficial por fé ou discriminação contra não crentes.",
            "basis": "norm",
            "publishedDate": "2013, texto inglês disponibilizado pelo governo em abril de 2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Separa Estado de religião e proíbe preferência oficial por fé ou discriminação contra não crentes.",
        "uncertainty": "Escopo normativo expresso de 2013, não descrição de toda prática; tribunais questionaram origem pós-golpe da Constituição em 2024. Escopo temporal: 2013, texto inglês disponibilizado pelo governo em abril de 2026.",
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
            "sourceTitle": "Texto constitucional — Fiji / portal oficial",
            "locator": "Seção 26(3)–(8)",
            "statement": "Proteção antidiscriminatória inclui orientação sexual, gênero e expressão de identidade.",
            "basis": "norm",
            "publishedDate": "2013, texto inglês disponibilizado pelo governo em abril de 2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Proteção antidiscriminatória inclui orientação sexual, gênero e expressão de identidade.",
        "uncertainty": "Proteção parcial, com exceções para direito pessoal, casamento e propriedade costumeira; não presume casamento igualitário. Escopo temporal: 2013, texto inglês disponibilizado pelo governo em abril de 2026.",
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
        "title": "Texto constitucional — Fiji / portal oficial",
        "url": "https://www.fiji.gov.fj/wp-content/uploads/2026/04/Fiji-Constitution-English-2013.pdf",
        "note": "Texto primário lido em 7/10/2026. Versão: 2013, texto inglês disponibilizado pelo governo em abril de 2026. Seções 4,23,26: Separação expressa entre religião e Estado e proteção contra discriminação por orientação sexual e identidade de gênero. Texto normativo disponibilizado pelo governo em 2026; não descrição da execução em 2024."
      },
      {
        "title": "Freedom in the World 2025 — Fiji",
        "url": "https://freedomhouse.org/country/fiji/freedom-world/2025",
        "note": "Overview e Key Developments in 2024 efetivamente lidos em 7/10/2026; relatório abreviado de 2025. Usam-se narrativas específicas, sem conversão de notas numéricas."
      }
    ],
    "rationale": "Eleições democráticas regulares desde 2014 e transferência pacífica em 2022; oposição FijiFirst foi desregistrada em 2024. Separa Estado de religião e proíbe preferência oficial por fé ou discriminação contra não crentes. Proteção antidiscriminatória inclui orientação sexual, gênero e expressão de identidade.",
    "caveats": "Reformas pós-golpe e desregistro da oposição limitam conclusão sobre intensidade democrática; dúvidas judiciais sobre Constituição são preservadas. Escopo normativo expresso de 2013, não descrição de toda prática; tribunais questionaram origem pós-golpe da Constituição em 2024. Escopo temporal: 2013, texto inglês disponibilizado pelo governo em abril de 2026. Proteção parcial, com exceções para direito pessoal, casamento e propriedade costumeira; não presume casamento igualitário. Escopo temporal: 2013, texto inglês disponibilizado pelo governo em abril de 2026. Âncoras editoriais não são medições. Normas e execução têm escopos distintos. Eixos ausentes são desconhecidos; cobertura menor que seis eixos para matches."
  },
  {
    "id": "tonga-current-2025",
    "name": "Tonga",
    "aliases": [],
    "kind": "country",
    "category": "country",
    "period": "Prática em 2024; norma: 1875, rev. 2025; tradução primária Constitute, cotejada com emenda oficial de julho de 2025",
    "vec": {
      "est": 40,
      "rep": 60,
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
      "rep": "medium",
      "rel": "medium",
      "est": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — Tonga"
        ],
        "rationale": "Primeiro-ministro apoiado por maioria parlamentar eleita coexistia com veto real e pressão política sobre ministros em 2024. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Representação popular não elimina poderes da nobreza e do rei; não converter a monarquia em ausência completa de eleições."
      },
      "rel": {
        "sourceTitles": [
          "Texto constitucional — Tonga / Constitute"
        ],
        "rationale": "Liberdade de culto coexistindo com proibição constitucional de atividades comerciais no dia sagrado, salvo exceção legal. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Presença jurídica de norma religiosa específica, não afirma religião oficial única ou controle religioso de toda legislação. Escopo temporal: 1875, rev. 2025; tradução primária Constitute, cotejada com emenda oficial de julho de 2025."
      },
      "est": {
        "sourceTitles": [
          "Texto constitucional — Tonga / Constitute"
        ],
        "rationale": "Rei nomeia governadores mediante conselho do primeiro-ministro; governadores executam leis sem poder de legislar localmente. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Direção territorial centralizada parcial: governadores de ilhas selecionadas executam leis sem legislar; não inferida da monarquia isolada e sem inventário integral da hierarquia territorial. Escopo temporal: 1875, rev. 2025; tradução primária Constitute, cotejada com emenda oficial de julho de 2025."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Freedom in the World 2025 — Tonga",
            "locator": "Overview; Key Developments in 2024",
            "statement": "Primeiro-ministro apoiado por maioria parlamentar eleita coexistia com veto real e pressão política sobre ministros em 2024.",
            "basis": "practice",
            "publishedDate": "2025; observações de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Primeiro-ministro apoiado por maioria parlamentar eleita coexistia com veto real e pressão política sobre ministros em 2024.",
        "uncertainty": "Representação popular não elimina poderes da nobreza e do rei; não converter a monarquia em ausência completa de eleições.",
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
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Texto constitucional — Tonga / Constitute",
            "locator": "Seções 5–6",
            "statement": "Liberdade de culto coexistindo com proibição constitucional de atividades comerciais no dia sagrado, salvo exceção legal.",
            "basis": "norm",
            "publishedDate": "1875, rev. 2025; tradução primária Constitute, cotejada com emenda oficial de julho de 2025",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Liberdade de culto coexistindo com proibição constitucional de atividades comerciais no dia sagrado, salvo exceção legal.",
        "uncertainty": "Presença jurídica de norma religiosa específica, não afirma religião oficial única ou controle religioso de toda legislação. Escopo temporal: 1875, rev. 2025; tradução primária Constitute, cotejada com emenda oficial de julho de 2025.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "est": {
        "axis": "est",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Texto constitucional — Tonga / Constitute",
            "locator": "Seções 54–55",
            "statement": "Rei nomeia governadores mediante conselho do primeiro-ministro; governadores executam leis sem poder de legislar localmente.",
            "basis": "norm",
            "publishedDate": "1875, rev. 2025; tradução primária Constitute, cotejada com emenda oficial de julho de 2025",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Rei nomeia governadores mediante conselho do primeiro-ministro; governadores executam leis sem poder de legislar localmente.",
        "uncertainty": "Direção territorial centralizada parcial: governadores de ilhas selecionadas executam leis sem legislar; não inferida da monarquia isolada e sem inventário integral da hierarquia territorial. Escopo temporal: 1875, rev. 2025; tradução primária Constitute, cotejada com emenda oficial de julho de 2025.",
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
        "title": "Texto constitucional — Tonga / Constitute",
        "url": "https://www.constituteproject.org/constitution/Tonga_2025?lang=en",
        "note": "Texto primário lido em 7/10/2026. Versão: 1875, rev. 2025; tradução primária Constitute, cotejada com emenda oficial de julho de 2025. Seções 5–6,54–55,60: Liberdade religiosa com regra de sábado sagrado; governadores nomeados pelo rei e sem poderes legislativos. Normas na revisão de 2025; a emenda oficial consultada altera cláusula 50 e não mede execução das cláusulas 5–6/54–55."
      },
      {
        "title": "Freedom in the World 2025 — Tonga",
        "url": "https://freedomhouse.org/country/tonga/freedom-world/2025",
        "note": "Overview e Key Developments in 2024 efetivamente lidos em 7/10/2026; relatório abreviado de 2025. Usam-se narrativas específicas, sem conversão de notas numéricas."
      }
    ],
    "rationale": "Primeiro-ministro apoiado por maioria parlamentar eleita coexistia com veto real e pressão política sobre ministros em 2024. Liberdade de culto coexistindo com proibição constitucional de atividades comerciais no dia sagrado, salvo exceção legal. Rei nomeia governadores mediante conselho do primeiro-ministro; governadores executam leis sem poder de legislar localmente.",
    "caveats": "Representação popular não elimina poderes da nobreza e do rei; não converter a monarquia em ausência completa de eleições. Presença jurídica de norma religiosa específica, não afirma religião oficial única ou controle religioso de toda legislação. Escopo temporal: 1875, rev. 2025; tradução primária Constitute, cotejada com emenda oficial de julho de 2025. Direção territorial centralizada parcial: governadores de ilhas selecionadas executam leis sem legislar; não inferida da monarquia isolada e sem inventário integral da hierarquia territorial. Escopo temporal: 1875, rev. 2025; tradução primária Constitute, cotejada com emenda oficial de julho de 2025. Âncoras editoriais não são medições. Normas e execução têm escopos distintos. Eixos ausentes são desconhecidos; cobertura menor que seis eixos para matches."
  },
  {
    "id": "sao-tome-and-principe-current-2025",
    "kind": "country",
    "category": "country",
    "name": "São Tomé e Príncipe",
    "aliases": [
      "Sao Tome and Principe"
    ],
    "period": "Prática institucional relatada2024/edição2025; normas constitucionais1975, revisão2003, arts5/8/137; revisão documental08/10/2026",
    "vec": {
      "est": 40,
      "rep": 80,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 80,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "est": "medium",
      "rep": "high",
      "rel": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Texto constitucional — São Tomé e Príncipe / Constitute"
        ],
        "rationale": "Artigos 5 e 137: Estado unitário com Região Autônoma do Príncipe, assembleia e governo regionais próprios. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não é federação; não mede autonomia efetivamente exercida."
      },
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — São Tomé e Príncipe"
        ],
        "rationale": "Overview: Eleições regulares competitivas e múltiplas alternâncias partidárias. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Corrupção e disfunção da justiça limitam a qualidade institucional."
      },
      "rel": {
        "sourceTitles": [
          "Texto constitucional — São Tomé e Príncipe / Constitute"
        ],
        "rationale": "Artigo 8: Separa Estado de todas as instituições religiosas. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Codifica laicidade normativa; prática religiosa não foi verificada por narrativa específica, nem crenças da população."
      }
    },
    "sources": [
      {
        "title": "Texto constitucional — São Tomé e Príncipe / Constitute",
        "url": "https://www.constituteproject.org/constitution/Sao_Tome_and_Principe_2003?lang=en",
        "note": "Texto primário em tradução do Comparative Constitutions Project, aberto em 7/10/2026. Versão: 1975, rev. 2003; não é prova automática de implementação."
      },
      {
        "title": "Freedom in the World 2025 — São Tomé e Príncipe",
        "url": "https://freedomhouse.org/country/sao-tome-and-principe/freedom-world/2025",
        "note": "Relatório institucional de 2025, referente a 2024, aberto em 7/10/2026. Usam-se proposições específicas e ressalvas, sem transformar sua pontuação agregada em score do 12eixos."
      }
    ],
    "rationale": "Estado unitário com Região Autônoma do Príncipe, assembleia e governo regionais próprios. Eleições regulares competitivas e múltiplas alternâncias partidárias. Separa Estado de todas as instituições religiosas.",
    "caveats": "Instituições eleitorais competitivas coexistem com corrupção, carência judicial e alegações de violência militar. Economia mista e promoção da paz não determinam scores próprios. Âncoras ordinais editoriais de 20/40/60/80 não são percentuais observados. Eixos não codificados permanecem desconhecidos, sem evidência. Cobertura insuficiente para os seis eixos exigidos no comparador. Arquitetura territorial e separação religiosa descrevem a versão normativa2003 efetivamente examinada no relato autoral anterior, não a prática eleitoral2024. Texto traduzido não certificado como consolidação integral2026; autonomia prevista não mede execução.",
    "coding": {
      "est": {
        "axis": "est",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Texto constitucional — São Tomé e Príncipe / Constitute",
            "locator": "Artigos 5 e 137",
            "statement": "Estado unitário com Região Autônoma do Príncipe, assembleia e governo regionais próprios.",
            "basis": "norm",
            "publishedDate": "1975, rev. 2003",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Artigos 5 e 137: Estado unitário com Região Autônoma do Príncipe, assembleia e governo regionais próprios.",
        "uncertainty": "Não é federação; não mede autonomia efetivamente exercida.",
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
            "sourceTitle": "Freedom in the World 2025 — São Tomé e Príncipe",
            "locator": "Overview",
            "statement": "Eleições regulares competitivas e múltiplas alternâncias partidárias.",
            "basis": "practice",
            "publishedDate": "2025; acontecimentos de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Overview: Eleições regulares competitivas e múltiplas alternâncias partidárias.",
        "uncertainty": "Corrupção e disfunção da justiça limitam a qualidade institucional.",
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
        "position": "strong-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Texto constitucional — São Tomé e Príncipe / Constitute",
            "locator": "Artigo 8",
            "statement": "Separa Estado de todas as instituições religiosas.",
            "basis": "norm",
            "publishedDate": "1975, rev. 2003",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Artigo 8: Separa Estado de todas as instituições religiosas.",
        "uncertainty": "Codifica laicidade normativa; prática religiosa não foi verificada por narrativa específica, nem crenças da população.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      }
    }
  },
  {
    "id": "comoros-current-2025",
    "kind": "country",
    "category": "country",
    "name": "Comores",
    "aliases": [
      "Comoros",
      "União das Comores"
    ],
    "period": "Prática institucional relatada2024/edição2025; normas constitucionais2018, arts1/97–104; revisão documental08/10/2026",
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
      "rel": 20,
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
          "Texto constitucional — Comores / Constitute"
        ],
        "rationale": "Artigos 1 e 99–104: Estado unitário com ilhas autônomas e competências exclusivas, inclusive planejamento e desenvolvimento locais. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Autonomia setorial não equivale a federação nem predomínio descentralizador."
      },
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — Comores"
        ],
        "rationale": "Overview; Key Developments in 2024, janeiro: Competição eleitoral formal coexistiu com denúncias de fraude, perseguição da oposição e resultados divergentes. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Há candidaturas concorrentes; não codificar como ausência completa de eleições."
      },
      "rel": {
        "sourceTitles": [
          "Texto constitucional — Comores / Constitute"
        ],
        "rationale": "Artigos 97–98: Islã estatal; regras sunitas e rito chafiita orientam crença e vida social, com mufti nomeado pelo presidente. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Escopo é a ordem religiosa estatal; não religiosidade individual."
      }
    },
    "sources": [
      {
        "title": "Texto constitucional — Comores / Constitute",
        "url": "https://www.constituteproject.org/constitution/Comoros_2018?lang=en",
        "note": "Texto primário em tradução do Comparative Constitutions Project, aberto em 7/10/2026. Versão: 2018; não é prova automática de implementação."
      },
      {
        "title": "Freedom in the World 2025 — Comores",
        "url": "https://freedomhouse.org/country/comoros/freedom-world/2025",
        "note": "Relatório institucional de 2025, referente a 2024, aberto em 7/10/2026. Usam-se proposições específicas e ressalvas, sem transformar sua pontuação agregada em score do 12eixos."
      }
    ],
    "rationale": "Estado unitário com ilhas autônomas e competências exclusivas, inclusive planejamento e desenvolvimento locais. Competição eleitoral formal coexistiu com denúncias de fraude, perseguição da oposição e resultados divergentes. Islã estatal; regras sunitas e rito chafiita orientam crença e vida social, com mufti nomeado pelo presidente.",
    "caveats": "O recorte é a União administrada pelo governo comoriano; a reivindicação constitucional sobre Mayotte não amplia o território observado. Eleição de 2024 foi contestada e seguida por repressão. Âncoras ordinais editoriais de 20/40/60/80 não são percentuais observados. Eixos não codificados permanecem desconhecidos, sem evidência. Cobertura insuficiente para os seis eixos exigidos no comparador. Competências insulares e ordem religiosa estatal descrevem a carta2018 efetivamente examinada no relato autoral anterior, separadas da eleição contestada2024. Não consolidação integral2026 ou todo território reivindicado; Mayotte permanece fora do recorte observado.",
    "coding": {
      "est": {
        "axis": "est",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Texto constitucional — Comores / Constitute",
            "locator": "Artigos 1 e 99–104",
            "statement": "Estado unitário com ilhas autônomas e competências exclusivas, inclusive planejamento e desenvolvimento locais.",
            "basis": "norm",
            "publishedDate": "2018",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Artigos 1 e 99–104: Estado unitário com ilhas autônomas e competências exclusivas, inclusive planejamento e desenvolvimento locais.",
        "uncertainty": "Autonomia setorial não equivale a federação nem predomínio descentralizador.",
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
        "claims": [
          {
            "sourceTitle": "Freedom in the World 2025 — Comores",
            "locator": "Overview; Key Developments in 2024, janeiro",
            "statement": "Competição eleitoral formal coexistiu com denúncias de fraude, perseguição da oposição e resultados divergentes.",
            "basis": "practice",
            "publishedDate": "2025; acontecimentos de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Overview; Key Developments in 2024, janeiro: Competição eleitoral formal coexistiu com denúncias de fraude, perseguição da oposição e resultados divergentes.",
        "uncertainty": "Há candidaturas concorrentes; não codificar como ausência completa de eleições.",
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
        "position": "strong-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Texto constitucional — Comores / Constitute",
            "locator": "Artigos 97–98",
            "statement": "Islã estatal; regras sunitas e rito chafiita orientam crença e vida social, com mufti nomeado pelo presidente.",
            "basis": "norm",
            "publishedDate": "2018",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Artigos 97–98: Islã estatal; regras sunitas e rito chafiita orientam crença e vida social, com mufti nomeado pelo presidente.",
        "uncertainty": "Escopo é a ordem religiosa estatal; não religiosidade individual.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 20,
        "range": [
          10,
          25
        ]
      }
    }
  }
];

export const native16CurrentCountriesHeldFijiMoral = native16CurrentCountriesBefore[0].coding?.mor;

export const native16CurrentCountriesHeldComorosTradeClaims = [
  {
    "id": "comoros-current-2025-com-13",
    "axis": "com",
    "sourceTitle": "Union of the Comoros — Third Review under the Extended Credit Facility, IMF Report 24/354",
    "sourceId": "comoros-imf2024",
    "locator": "§5, p. impressa 7; texto sobre adesão em 21/08/2024.",
    "statement": "Comores ingressou na OMC em 21/08/2024 após 17 anos de negociação.",
    "basis": "practice",
    "publishedDate": "2024-12; capa diz staff concluído 2024-11-26, discussão 2024-12-13; não usar título de busca que exibe 06/11",
    "accessedDate": "2026-10-08",
    "observedOrNormativePeriod": "2024-08-21",
    "wholeConstructRationale": "Integração econômica formal efetivada, ao contrário de meta futura.",
    "counterEvidence": "Adesão não remove automaticamente tarifas, monopólios ou burocracia.",
    "uncertainty": "É um elemento do construto; requer termos de adesão e implementação.",
    "retrievalMode": "direct",
    "actualReadScope": "Capa; §5 p. impressa 7; §21 e entorno sobre lei SOE; trechos MEFP §§15–17 p. impressa 51–52; buscas de empresas/WTO não equivalem a relatório integral.",
    "researchStatus": "candidate-for-independent-review"
  },
  {
    "id": "comoros-current-2025-com-14",
    "axis": "com",
    "sourceTitle": "WTO — Comoros accession terms, February 2024 fact sheet",
    "sourceId": "comoros-wto-terms2024",
    "locator": "Seções 3.1–3.11, PDF 3–5; notas 2–3.",
    "statement": "Compromissos de adesão abrangem importação, serviços, não discriminação e regras aduaneiras; há prazos de transição para 2025–2028.",
    "basis": "norm",
    "publishedDate": "2024-02; URL 26/02/2024; data editorial específica não impressa no recorte lido",
    "accessedDate": "2026-10-08",
    "observedOrNormativePeriod": "Termos 2024, vigentes na adesão salvo transições",
    "wholeConstructRationale": "Cobertura transversal de acesso a mercados e integração; não mera participação simbólica.",
    "counterEvidence": "Salvaguardas e controle de preços compatível com OMC são permitidos; não é comércio livre sem restrições.",
    "uncertainty": "Compromisso não equivale a implementação; tarifas aplicadas disponíveis na página dinâmica são de 2022.",
    "retrievalMode": "direct",
    "actualReadScope": "Seções 3.1–3.11, PDF 3–5, compromissos comerciais; nota 2 sobre implementação na adesão salvo exceções.",
    "researchStatus": "candidate-for-independent-review"
  },
  {
    "id": "comoros-current-2025-com-15",
    "axis": "com",
    "sourceTitle": "A bold reform in Comoros: Opening up the rice market to increase food security and catalyze private sector growth",
    "sourceId": "comoros-rice2024",
    "locator": "A Gradual Transition; Safeguarding Transparency; Early Results.",
    "statement": "Em 2024 licenciamento mais claro permitiu entrada de 12 empresas privadas na importação de arroz; junho–novembro têm dados preliminares de entrada.",
    "basis": "practice",
    "publishedDate": "2025-01-09",
    "accessedDate": "2026-10-08",
    "observedOrNormativePeriod": "2024-04–2024-11",
    "wholeConstructRationale": "Mudança concreta de barreira à entrada em produto importante, útil como contraponto ao antigo monopólio.",
    "counterEvidence": "Barreiras logísticas persistem; ONICOR continua atuante e importações seguem licenciadas.",
    "uncertainty": "Um mercado não estabelece abertura geral; estimativa de volume não é tratada como censo.",
    "retrievalMode": "direct",
    "actualReadScope": "Corpo completo lido, incluindo A Gradual Transition, Safeguarding Transparency, Early Results e Next Steps.",
    "researchStatus": "partial-only"
  }
];

export const native16CurrentCountriesProposals: {id:string;sources:ReferenceSource[];period:string;rationale:string;caveats:string;codings:ReferenceAxisCoding[];unknownAxisReasons:Partial<Record<keyof ReferenceEntry['vec'],string>>}[] = [
  {
    "id": "fiji-current-2025",
    "sources": [
      {
        "title": "Constitution of the Republic of Fiji — official English text 2013",
        "url": "https://www.fiji.gov.fj/wp-content/uploads/2026/04/Fiji-Constitution-English-2013.pdf",
        "note": "Pesquisa documental localizada. Versão/data: Constituição de 2013 em inglês; arquivo disponibilizado em diretório de abril de 2026; 2013; data de upload não equivale à promulgação. Escopo efetivamente lido na coleta: PDF físico pp. 10–11, 14–22, 24–33 e 97–98; seções 1–4, 8–19, 21–41 parcialmente conforme páginas; seções codificadas 4, 9, 11–19, 22–26, 27–38 integralmente nas páginas indicadas.. Limites: PDF oficial baixado e texto extraído. Inglês é idioma prevalecente segundo seção 3(4). Não é consolidação integral juridicamente verificada em 2026. A seção 21 começou em p.23, não integralmente lida nesta rodada; não é usada como fundamento autônomo."
      },
      {
        "title": "Freedom in the World 2025 — Fiji",
        "url": "https://freedomhouse.org/country/fiji/freedom-world/2025",
        "note": "Pesquisa documental localizada. Versão/data: Relatório abreviado edição 2025, observações 2024; 2025; dia/mês não informados no corpo lido. Escopo efetivamente lido na coleta: Overview; Key Developments in 2024; explicações narrativas de B3, E1 e F1; demais perguntas/pontuações visíveis não convertidas em evidência narrativa.. Limites: Leitura do corpo via ferramenta web. É fonte institucional secundária de prática, não lei nem medida dos eixos."
      },
      {
        "title": "Republic of Fiji: 2024 Article IV Consultation — IMF Country Report 24/159",
        "url": "https://www.imf.org/-/media/files/publications/cr/2024/english/1fjiea2024001.pdf",
        "note": "Pesquisa documental localizada. Versão/data: Relatório 24/159; consulta 2024; anexo VI usa dados de 2023; 2024-06-10; relatório do staff datado 2024-05-02. Escopo efetivamente lido na coleta: Anexo VI State-Owned Enterprises in Fiji, parágrafos 1–5 e notas 1–5, pp. impressas 52–54; parágrafos selecionados sobre investimento privado e restrições cambiais, sem auditoria integral do relatório.. Limites: PDF oficial baixado. Distinguir grandes ativos de receita, valor adicionado e participação na propriedade de toda economia. Dados de garantias não são usados como propriedade."
      },
      {
        "title": "Fijian Competition and Consumer Commission — Annual Report 2023–2024",
        "url": "https://parliament.gov.fj/wp-content/uploads/2026/03/8Fijian-Competition-and-Consumer-Commission-Annual-Report-2023-2024-1-1.pdf",
        "note": "Pesquisa documental localizada. Versão/data: Exercício encerrado em 31/07/2024; PDF de 73 páginas; Sem data de publicação válida confirmada; arquivo em diretório 2026/03. O texto extraído da carta de apresentação apresenta a data impossível 31 September 2024, que não foi normalizada.. Escopo efetivamente lido na coleta: About this report; carta de apresentação; Regulatory Highlights pp. impressas 19–21; Enforcement Highlights pp. impressas 32–36; buscas de termos em outras páginas não contam como leitura integral.. Limites: PDF oficial baixado. Descreve a própria atuação regulatória, podendo refletir perspectiva institucional. Não se usa a missão da agência como prova de coordenação planejada de toda economia."
      },
      {
        "title": "WTO Tariff & Trade Data — Fiji member profile",
        "url": "https://ttd.wto.org/en/profiles/fiji",
        "note": "Pesquisa documental localizada. Versão/data: Página dinâmica; somente bloco Applied tariffs com ano 2024 usado; Sem data de publicação; série identificada como 2024. Escopo efetivamente lido na coleta: Blocos All products / Applied tariffs / Bound tariffs. Bloco de importações é de 2025 e foi excluído da prática de 2024.. Limites: Média simples MFN e parcela duty-free têm ano 2024; compromissos bound na página não têm ano independente e não são confundidos com tarifas efetivamente aplicadas."
      },
      {
        "title": "Minister Maciu Nalumisa — response to the opening of Parliament session 2024",
        "url": "https://www.fiji.gov.fj/minister-hon-maciu-nalumisas-response-to-his-excellencys-address-at-the-opening-of-the-parliament-session-2024/",
        "note": "Pesquisa documental localizada. Versão/data: Discurso ministerial de 2024; 2024; dia exato ainda não confirmado. Escopo efetivamente lido na coleta: Parágrafos sobre 13 municípios, nomeação dos Special Administrators, preparação das eleições e projetos municipais; linhas web 117–135.. Limites: Fonte primária de declaração e relato administrativo. Promessas de eleições futuras não comprovam que foram realizadas."
      },
      {
        "title": "2024 Country Reports on Human Rights Practices: Fiji — USDOS",
        "url": "https://www.ecoi.net/en/document/2140688.html",
        "note": "Pesquisa documental localizada. Versão/data: Relatório sobre 2024, publicado 2025; 2025-08-12; data confirmada no catálogo ecoi de Fiji. Escopo efetivamente lido na coleta: Executive Summary; §2 a Freedom of the Press; §2 c Prolonged Detention without Charges, em corpo e trechos indexados.. Limites: Não é lei consolidada: descrição institucional de legislação e prática. Leitura do corpo recuperado no espelho; data também em https://www.ecoi.net/en/countries/fiji/."
      }
    ],
    "period": "Normas 2013, texto inglês disponibilizado oficialmente em abril 2026; prática política/civil 2024 em relatos 2025; participação pública multissetorial 2023 relatada pelo IMF 2024",
    "rationale": "Competição política e separação religiosa expressa coexistem com garantias civis gerais e poderes excepcionais. A carteira de participação pública cobre vários setores, com propriedade privada e costumeira preservadas.",
    "caveats": "Garantias legais não medem todo saldo de liberdade 2024. Poderes de detenção prolongada e limitações de direitos permanecem, mesmo sem uso relatado em parte do ano. Igualdade parcial não resolve costumes gerais; pesquisa anterior preservada. Ativos públicos em relação ao PIB não são parcela da produção: participações diversas, privatização parcial e propriedade privada/costumeira impedem predominância pública forte. PDF governamental atual falhou nesta revisão; passagens nativas localizadas e recuperação oficial parcial têm atribuições distintas.",
    "codings": [
      {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constitution of the Republic of Fiji — official English text 2013",
            "locator": "Seção 23(1)–(4), PDF 25–26: pluralismo, eleições regulares e limitações legais.",
            "statement": "A norma garante partidos, candidatura e sufrágio secreto adulto, permitindo regulação legal de registro e elegibilidade.",
            "basis": "norm",
            "publishedDate": "2013; data de upload não equivale à promulgação",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Freedom in the World 2025 — Fiji",
            "locator": "Overview; Key Developments in 2024, julho; B3.",
            "statement": "Eleições e alternância pacífica de 2022 coexistem com dissolução registral do FijiFirst em 2024; seus parlamentares continuaram como independentes.",
            "basis": "practice",
            "publishedDate": "2025; dia/mês não informados no corpo lido",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Competição eleitoral e alternância efetiva documentadas, mas restrições a organizações políticas e déficits judiciais impedem direção forte.",
        "uncertainty": "Limitações legais expressas; a prática é examinada em fonte separada. Não demonstra imparcialidade de toda legislação eleitoral nem implementação. FH também interpreta o fim da rede de favorecimento do antigo partido como melhora; desregistro não significa extinção de toda oposição. Relato abreviado; não converte pontuações FH em vetor.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constitution of the Republic of Fiji — official English text 2013",
            "locator": "Seções 9, 11–19 e 24, PDF 14–22 e 26: liberdade, processo, expressão, associação e privacidade.",
            "statement": "Direitos gerais limitam prisão, busca, tortura e interferência privada, com defesa, revisão judicial e liberdades públicas; várias cláusulas admitem segurança, ordem e moralidade como limites.",
            "basis": "norm",
            "publishedDate": "2013; data de upload não equivale à promulgação",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Freedom in the World 2025 — Fiji",
            "locator": "E1 e F1, explicações narrativas; Key Developments in 2024.",
            "statement": "Em 2024 houve menos obstáculos a vigílias e marchas e sinais de autonomia judicial; restrições ao uso da bandeira palestina persistiam.",
            "basis": "practice",
            "publishedDate": "2025; dia/mês não informados no corpo lido",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "2024 Country Reports on Human Rights Practices: Fiji — USDOS",
            "locator": "§2 a Freedom of the Press; §2 c Prolonged Detention without Charges.",
            "statement": "Em 2024 não foram relatadas detenções sob os poderes de ordem pública usados antes; a legislação ainda permitia até 14 dias sem acusação e excluía certas revisões judiciais.",
            "basis": "practice",
            "publishedDate": "2025-08-12; data confirmada no catálogo ecoi de Fiji",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Garantias gerais de corpo, privacidade, processo, expressão e associação permitem direção normativa moderada de liberdade; poderes excepcionais e detenções prolongadas permanecem contrapontos.",
        "uncertainty": "Prazo de apresentação judicial de 48 h tem ressalva de razoabilidade; evidência ilícita pode ser admitida por interesse da justiça; exceções emergenciais e limites amplos permanecem. Não deduzir prática liberal da enumeração de garantias. A melhoria é relativa ao passado e não elimina restrições. Não foi obtida nesta rodada narrativa abrangente de vigilância, privacidade e processo penal em 2024. Governo geralmente respeitava as garantias ordinárias, mas havia prisões preventivas longas. Descrição do USDOS sobre a POA não substitui cotejo do texto legal vigente; ausência de uso relatado não revoga o poder.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Republic of Fiji: 2024 Article IV Consultation — IMF Country Report 24/159",
            "locator": "AnexoVI §§1–4, pp. impressas 52–53 e nota 3: carteira estatal multissetorial.",
            "statement": "O relatório identifica 25 sociedades com participação governamental, atuando em serviços básicos e agricultura, pesca, transporte e finanças; ativos somavam cerca de 90% do PIB em 2023.",
            "basis": "practice",
            "publishedDate": "2024-06-10; relatório do staff datado 2024-05-02",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Constitution of the Republic of Fiji — official English text 2013",
            "locator": "Seções 27–38, PDF 28–32: propriedade, minerais e serviços sociais.",
            "statement": "A carta protege propriedade privada e costumeira, reserva minerais ao Estado e prevê realização progressiva de direitos sociais com esquemas públicos ou privados.",
            "basis": "norm",
            "publishedDate": "2013; data de upload não equivale à promulgação",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Carteira pública multissetorial expressamente documentada em 2023, além de serviços essenciais, sustenta presença pública significativa moderada; participações parciais, propriedade privada e costumeira impedem predominância forte.",
        "uncertainty": "Participações são heterogêneas; houve privatização parcial da Energy Fiji em 2021. Ativos/PIB não são parcela estatal do produto. Retrato de 2023 publicado em 2024; não prova predomínio público em toda propriedade nacional. Terra comunitária não equivale automaticamente ao polo Público; direitos sociais não especificam monopólio estatal de prestação. Direitos progressivos são condicionados aos recursos disponíveis.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "rel",
        "position": "strong-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constitution of the Republic of Fiji — official English text 2013",
            "locator": "Seções 4 e 22, PDF 11 e 24–25: separação, não preferência e liberdade religiosa.",
            "statement": "Separação institucional e tratamento igual de crenças e descrença vinculam Estado e cargos públicos; comunidades podem manter escolas religiosas.",
            "basis": "norm",
            "publishedDate": "2013; data de upload não equivale à promulgação",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Separação e vedação abrangente de preferência estatal por religião ou ausência de crença; escolas confessionais financiáveis e limitações de culto não equivalem a estabelecimento.",
        "uncertainty": "Escolas confessionais podem receber apoio estatal; liberdade admite limites legais de ordem, saúde e direitos alheios. Laicidade jurídica não é ateísmo social nem certificação da prática de 2024.",
        "reviewedOn": "2026-10-08"
      }
    ],
    "unknownAxisReasons": {
      "est": "Somente camada municipal foi examinada; administradores nomeados e plano de eleições locais não estabelecem toda distribuição territorial.",
      "imi": "Passagens efetivamente examinadas não resolvem este construto inteiro. Permanecer desconhecido, sem evidência/mapa/código.",
      "dip": "Passagens efetivamente examinadas não resolvem este construto inteiro. Permanecer desconhecido, sem evidência/mapa/código.",
      "int": "Passagens efetivamente examinadas não resolvem este construto inteiro. Permanecer desconhecido, sem evidência/mapa/código.",
      "con": "Regulação e revisão de preços efetivas não determinam peso geral de planejamento versus alocação de mercado.",
      "com": "Tarifas2024 são dados materiais, mas não resolvem integração geral e barreiras não tarifárias.",
      "mor": "Igualdade e antidiscriminação do§26 constituem faceta parcial; exceções de casamento, adoção, herança e propriedade costumeira reforçam lacuna de todo o construto. Remover código60 ativo, preservando registro anterior integral como pesquisa.",
      "tec": "Passagens efetivamente examinadas não resolvem este construto inteiro. Permanecer desconhecido, sem evidência/mapa/código."
    }
  },
  {
    "id": "tonga-current-2025",
    "sources": [
      {
        "title": "Tonga 1875 (rev. 2025) Constitution — Constitute",
        "url": "https://www.constituteproject.org/constitution/Tonga_2025",
        "note": "Pesquisa documental localizada. Versão/data: 1875, revisão exibida 2025; 1875; revisão 2025; datas das emendas verificadas separadamente. Escopo efetivamente lido na coleta: Preâmbulo; cláusulas 1–29A, 30–50A e início 50B; 54–68; 83A–85(início); fragmentos 78–79 e 89–92 recuperados em pesquisa; busca textual 89A. Não houve leitura integral da consolidação.. Limites: Cópia HTML baixada e lida. Não chamar automaticamente tradução: o corpo consultado é inglês e não forneceu identificação de tradutor. A extração referencia 89A em 50/92, mas não apresenta o corpo da 89A entre 89/90; não afirmar consolidação completa. URL com ?lang=en inicialmente retornou erro web; URL sem parâmetro e download funcionaram."
      },
      {
        "title": "Constitution of Tonga — Attorney General, 2020 Revised Edition",
        "url": "https://ago.gov.to/cms/images/LEGISLATION/PRINCIPAL/1988/1988-0002/ConstitutionofTonga.pdf_3.pdf",
        "note": "Pesquisa documental localizada. Versão/data: Chapter 1.01, 2020 Revised Edition; 2020; origem constitucional 1875. Escopo efetivamente lido na coleta: Capa/índice; cláusulas 5–7 e 16 nos trechos recuperados; cláusulas 52–60 integralmente no trecho web lido e início de 61–62. Não consolidação integral.. Limites: Usado para cotejo pontual das passagens antigas; não certificado como consolidação 2024/2025 integral."
      },
      {
        "title": "Constitution of Tonga (Amendment) Act 2025 — Act 24 of 2025",
        "url": "https://ago.gov.to/cms/images/LEGISLATION/AMENDING/2025/2025-0018/ConstitutionofTongaAmendmentAct2025.pdf",
        "note": "Pesquisa documental localizada. Versão/data: Act 24 of 2025; altera 50 e 92; Aprovada 2025-07-28; assentimento 2025-08-28. Escopo efetivamente lido na coleta: PDF 6 p, corpo pp. 5–6 e frontispício.. Limites: Corrige a descrição simplificada de emenda de julho: a aprovação parlamentar e o assentimento têm datas diferentes. Não descreve prática 2024."
      },
      {
        "title": "Constitution of Tonga (Amendment) (No.1) Act 2025 — Act 2 of 2025",
        "url": "https://ago.gov.to/cms/images/LEGISLATION/AMENDING/2025/2025-0031/ConstitutionofTongaAmendmentNo.1Act2025.pdf",
        "note": "Pesquisa documental localizada. Versão/data: Act 2 of 2025; altera 23/63/65; Assentimento 2025-05-22. Escopo efetivamente lido na coleta: Capa, índice, cláusula 2 e início da cláusula 3, PDF 5–6; cláusula 4 não integralmente lida.. Limites: Fonte distingue outra emenda 2025; não usada para afirmar todas as regras de elegibilidade em 2024."
      },
      {
        "title": "District and Town Officers Act — 2020 Revised Edition",
        "url": "https://ago.gov.to/cms/images/LEGISLATION/PRINCIPAL/1930/1930-0009/DistrictandTownOfficersAct_3.pdf",
        "note": "Pesquisa documental localizada. Versão/data: Chapter 8.03; edição 2020 com alterações até 2019 listadas; 2020; lei iniciada 1930-08-08. Escopo efetivamente lido na coleta: PDF 15 p, seções 2–8, Schedules II–III e endnotes.. Limites: Texto oficial recuperado pela web; autoridades distritais/locais eleitas contrabalançam concentração. Índice oficial consultado lista emenda 2023-0022 cujo corpo não foi recuperado: não declarar consolidação 2024 integral."
      },
      {
        "title": "Freedom in the World 2025 — Tonga",
        "url": "https://freedomhouse.org/country/tonga/freedom-world/2025",
        "note": "Pesquisa documental localizada. Versão/data: Relatório abreviado 2025 sobre 2024; 2025; dia/mês não informado no corpo. Escopo efetivamente lido na coleta: Overview; Key Developments in 2024; narrativa C1.. Limites: Pontuações não usadas como score dos eixos."
      },
      {
        "title": "Budget Statement 2024–2025 English — Government of Tonga",
        "url": "https://finance.gov.to/sites/default/files/2024-07/Budget%20Statement%202024-2025%20English.pdf",
        "note": "Pesquisa documental localizada. Versão/data: FY 2025, inclui revisão de FY 2024 e projeções seguintes; Página oficial de publicação 2024-07-03. Escopo efetivamente lido na coleta: GPA 6, pp. impressas 32–34; trechos sobre rendas e empresas públicas; anexo tributário pp. impressas 112–113, nota 23 e descrição PACER Plus. Trechos da página 113 e tabelas não foram integralmente lidos; não é leitura de todo o relatório.. Limites: PDF 181 p recuperado em texto pela ferramenta web; página de catálogo https://finance.gov.to/node/787 confirma postagem. Não converter orçamento previsto em desempenho realizado."
      },
      {
        "title": "WTO Tariff & Trade Data — Tonga member profile",
        "url": "https://ttd.wto.org/en/profiles/tonga",
        "note": "Pesquisa documental localizada. Versão/data: Página dinâmica; Applied tariffs 2024 e importações 2023; Sem data editorial de publicação; dados 2024/2023 explicitados. Escopo efetivamente lido na coleta: Applied tariffs; Bound tariffs; somente anos expressos usados.. Limites: Média ponderada é 2023, não 2024; não usada como indicador 2024."
      },
      {
        "title": "Tonga: 2024 Article IV Consultation — IMF Country Report 24/326",
        "url": "https://www.imf.org/-/media/files/publications/cr/2024/english/1tonea2024001-print-pdf.pdf",
        "note": "Pesquisa documental localizada. Versão/data: Country Report 24/326, consulta de 2024; 2024-11-25, conforme página editorial do FMI. Escopo efetivamente lido na coleta: Seção D Structural Reforms, §§31–33 e nota8, p. impressa17; início da p.18 e buscas localizadas de termos. Não relatório integral.. Limites: PDF oficial baixado. Digitalização, ambiente, resiliência e desenvolvimento privado aparecem como prioridades e recomendações; não bastam para inferir propriedade econômica ou preferência no eixo Tecnologia. Página editorial lida: https://www.imf.org/en/publications/cr/issues/2024/11/25/tonga-2024-article-iv-consultation-press-release-staff-report-and-statement-by-the-558840"
      }
    ],
    "period": "Prática política 2024 relatada em 2025; Constituição 1875 em republicação inglesa indicada rev 2025, sem certificação integral de consolidação; governança local na edição 2020, emenda 2023 não lida; Act 24 aprovado 28/7 e assentido 28/8/2025, distinto do Act 2 assentido 22/5/2025",
    "rationale": "Autoridade nacional legislativa e governadores nomeados coexistem com eleição local. A maioria parlamentar popular e garantias civis têm limites reais e religiosos institucionais; normas 2025 são distintas da prática 2024.",
    "caveats": "Corresponde a fontes e datas separadas, não uma constituição integral atual certificada. Coroa pode vetar, dissolver e influenciar ministros; nobres têm assentos próprios. Domingo obrigatório e juramentos coexistem com culto livre; garantias civis têm limites relativos a costumes, Coroa, segurança, guerra e lei marcial. A emenda 2023 de oficiais locais não foi lida, e 89A é referido sem corpo recuperado. Aprovação de julho não equivale a assentimento de agosto 2025. Tarifas, orçamento e costume judicial isolados não resolvem eixos econômicos ou costumes gerais.",
    "codings": [
      {
        "axis": "est",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Tonga 1875 (rev. 2025) Constitution — Constitute",
            "locator": "Cláusulas 54–56: nomeação de governadores e monopólio legislativo nacional.",
            "statement": "Rei nomeia governadores de Ha’apai e Vava’u por conselho do primeiro-ministro; governadores executam a lei, sem legislar.",
            "basis": "norm",
            "publishedDate": "1875; revisão 2025; datas das emendas verificadas separadamente",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "District and Town Officers Act — 2020 Revised Edition",
            "locator": "Seções 2–7; ScheduleII item 5; ScheduleIII itens 1–6.",
            "statement": "Oficiais distritais e locais são eleitos; limites, deveres, remuneração e supervisão dependem do governo central, com cadeia de relatórios ao ministério ou aos governadores.",
            "basis": "norm",
            "publishedDate": "2020; lei iniciada 1930-08-08",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Monopólio legislativo nacional e governadores nomeados sustentam direção unitária moderada, com representantes locais eleitos e possibilidade de revisão judicial contra remoção.",
        "uncertainty": "Há também autoridades distritais e locais eleitas, conforme lei específica. Não cobre sozinho todas as comunidades nem a distribuição fiscal. Eleição popular e recurso judicial contra exoneração ministerial impedem equiparar centralização a ausência de participação local. Emenda 2023 identificada mas não lida; práticas e finanças locais de 2024 permanecem por verificar. Estrutura local pertence à edição2020; emenda2023 não lida, sem certificação consolidada2026.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Tonga 1875 (rev. 2025) Constitution — Constitute",
            "locator": "Cláusulas 38, 41, 50A–50B, 56–60, 67–68.",
            "statement": "Primeiro-ministro deriva de recomendação parlamentar; assembleia combina 17 representantes populares e 9 nobres, além das regras ministeriais; o rei conserva assentimento e dissolução.",
            "basis": "norm",
            "publishedDate": "1875; revisão 2025; datas das emendas verificadas separadamente",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Freedom in the World 2025 — Tonga",
            "locator": "Overview; Key Developments, fevereiro–março e dezembro; C1.",
            "statement": "Em 2024 a pressão real alterou pastas ministeriais; em dezembro o primeiro-ministro renunciou e o Parlamento escolheu substituto.",
            "basis": "practice",
            "publishedDate": "2025; dia/mês não informado no corpo",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Maioria popular na Assembleia e escolha parlamentar do primeiro-ministro sustentam representação moderada; nobres, veto, dissolução e influência efetiva da Coroa em 2024 são materiais.",
        "uncertainty": "Nobres têm prerrogativas exclusivas em matérias reais e hereditárias; não existe igual eleição popular de todos os lugares. Cláusulas de elegibilidade foram alteradas em 2025, sem projetar retroativamente. Liberdades civis são descritas como geralmente protegidas; a coroa não elimina eleições. Narrativa curta não sustenta extrapolação a 2025.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Tonga 1875 (rev. 2025) Constitution — Constitute",
            "locator": "Cláusulas 7–16, 18–22, 46 e 83A: direitos, limites e emergência.",
            "statement": "Expressão, petição, habeas corpus, julgamento e busca legal coexistem com ressalvas de segurança, moralidade, tradições, proteção da família real e poderes de guerra.",
            "basis": "norm",
            "publishedDate": "1875; revisão 2025; datas das emendas verificadas separadamente",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Freedom in the World 2025 — Tonga",
            "locator": "Overview e Key Developments, setembro.",
            "statement": "O relatório descreve proteção geral das liberdades e manutenção no cargo de chefe de justiça apesar de pressão discriminatória.",
            "basis": "practice",
            "publishedDate": "2025; dia/mês não informado no corpo",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Conjunto geral de defesa, busca, testemunhas, processo, petição e habeas corpus sustenta liberdade normativa moderada; limites à crítica da Coroa, costumes e segurança, guerra e lei marcial impedem direção forte.",
        "uncertainty": "Habeas corpus pode ser suspenso na guerra/rebelião; mídia é regulável; regime de busca exige exame legal, não imunidade absoluta. Falta análise de leis ordinárias e prática 2024 de privacidade e policiamento. Não substitui evidência específica de vigilância e justiça criminal. Caso individual não certifica todo POD nem todo MOR.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "rel",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Tonga 1875 (rev. 2025) Constitution — Constitute",
            "locator": "Cláusulas 5–6, 34, 41 e 83: culto, domingo sagrado, juramentos e pessoa real.",
            "statement": "Liberdade de culto coexiste com regra constitucional de santificação do Sabbath e restrição de comércio; juramentos institucionais invocam Deus.",
            "basis": "norm",
            "publishedDate": "1875; revisão 2025; datas das emendas verificadas separadamente",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Domingo sagrado com proibição jurídica geral de negócios e juramentos religiosos institucionais sustentam direção religiosa moderada; liberdade de culto é preservada.",
        "uncertainty": "A cláusula 5 protege pluralidade de culto; não foi constatada religião oficial única nem governo clerical integral. Regra de Sabbath não mede toda influência religiosa sobre decisões públicas.",
        "reviewedOn": "2026-10-08"
      }
    ],
    "unknownAxisReasons": {
      "imi": "Passagens efetivamente examinadas não resolvem este construto inteiro. Permanecer desconhecido, sem evidência/mapa/código.",
      "dip": "Passagens efetivamente examinadas não resolvem este construto inteiro. Permanecer desconhecido, sem evidência/mapa/código.",
      "int": "Passagens efetivamente examinadas não resolvem este construto inteiro. Permanecer desconhecido, sem evidência/mapa/código.",
      "eco": "Orçamento e menções a utilities não fornecem carteira geral de propriedade/provisão pública.",
      "con": "Planejamento orçamentário e recomendações IMF não estabelecem orientação geral de alocação.",
      "com": "Tarifas e referência PACER não resolvem barreiras e implementação em toda economia.",
      "mor": "Emenda de costumes2025 e controvérsia de um juiz não estabelecem orientação familiar/social geral em2024.",
      "tec": "Passagens efetivamente examinadas não resolvem este construto inteiro. Permanecer desconhecido, sem evidência/mapa/código."
    }
  },
  {
    "id": "sao-tome-and-principe-current-2025",
    "sources": [
      {
        "title": "Constituição da República Democrática de São Tomé e Príncipe — Lei 1/2003",
        "url": "https://faolex.fao.org/docs/pdf/sao117335POR.pdf",
        "note": "Pesquisa documental localizada. Versão/data: Texto constitucional português, revisão Lei 1/2003, PDF 46 p.; Promulgada 2003-01-25; publicação 2003-01-29 conforme registro WIPO Lex e art 159. Escopo efetivamente lido na coleta: PDF pp. 3–15, 30–31, 36–40 e 46; arts 5–55 nas páginas lidas; 57–60; 110–111; 135–147; promulgação. Partes do art 4 e outros artigos que atravessam páginas não tratados como leitura integral.. Limites: PDF português baixado e lido; preferível à tradução OUP/Constitute para as passagens codificadas. Identificação da publicação cotejada em WIPO Lex, https://www.wipo.int/wipolex/ru/legislation/details/5830. Não auditada toda legislação ordinária ou emendas posteriores."
      },
      {
        "title": "Freedom in the World 2025 — São Tomé and Príncipe",
        "url": "https://freedomhouse.org/country/sao-tome-and-principe/freedom-world/2025",
        "note": "Pesquisa documental localizada. Versão/data: Relatório abreviado 2025; observações 2024; 2025; dia/mês não informado. Escopo efetivamente lido na coleta: Overview; Key Developments in 2024, inclusive nomeação de juízes, contas públicas e processo sobre ataque 2022.. Limites: Fonte de prática institucional, não prova primária de todas as alegações; nenhuma nota numérica é convertida."
      },
      {
        "title": "São Tomé and Príncipe Economic Update — Reforming State-Owned Enterprises for Higher Private Sector-Led Growth and Job Creation",
        "url": "https://documents1.worldbank.org/curated/en/099080625083098089/pdf/P508059-54b2a5ca-76bb-497e-b765-46d816bb8cd9.pdf",
        "note": "Pesquisa documental localizada. Versão/data: 1ª edição, inglês; copyright 2025; estudo retrospectivo com dados 2023/2024; 2025; página de divulgação identifica agosto 2025; dia não verificado. Escopo efetivamente lido na coleta: Overview pp. impressas 1–2; capítulo 2 pp. impressas 16–17, Table 2.1(2023) e nota 3; capa/créditos.. Limites: PDF oficial lido. Tabela de ativos/participações é explicitamente 2023; empresas sem dados são excluídas. Não reclassificar todas participações como controle público ou extrapolar para 2024 sem corroboração."
      },
      {
        "title": "2024 Investment Climate Statements — São Tomé and Príncipe",
        "url": "https://2021-2025.state.gov/reports/2024-investment-climate-statements/sao-tome-and-principe/",
        "note": "Pesquisa documental localizada. Versão/data: Edição 2024, arquivo 2021–2025; 2024; dia/mês não recuperado. Escopo efetivamente lido na coleta: Trechos indexados extensos das seções Legal System, State-Owned Enterprises e Privatization Program; concessão portuária de janeiro 2024. Não corpo completo.. Limites: Fonte primária institucional de avaliação econômica; leitura apenas dos trechos retornados pela pesquisa."
      },
      {
        "title": "Sao Tomé and Príncipe 2024 Human Rights Report — USDOS",
        "url": "https://www.theadvocatesforhumanrights.org/res/USDOS%2BHuman%2BRights%2BReport%2BSao%2BTome%2Band%2BPrincipe%2B2024.pdf",
        "note": "Pesquisa documental localizada. Versão/data: Relatório anual sobre 2024, PDF 11 p.; 2025; lançamento da coleção em 12/08/2025, sem data individual impressa no PDF. Escopo efetivamente lido na coleta: PDF pp. 1–11 em texto recuperado: resumo, vida, imprensa, trabalho, detenção, religião, refúgio.. Limites: Fonte governamental externa de prática; distingue alegações, ações oficiais e ausência de relatos. Não substitui legislação santomense original."
      },
      {
        "title": "UN General Assembly A/79/PV.11 — address by President Carlos Manuel Vila Nova",
        "url": "https://digitallibrary.un.org/record/4097204/files/A_79_PV.11-EN.pdf",
        "note": "Pesquisa documental localizada. Versão/data: Registro da 11ª sessão plenária da 79ª AGNU; interpretação inglesa fornecida pela delegação para fala em português; Sessão 2024-09-26; data de publicação editorial não individualizada. Escopo efetivamente lido na coleta: Discurso completo pp. impressas 36–38, do anúncio do Presidente até saída; não discursos de outros países.. Limites: PDF oficial baixado. É declaração de política externa, não prova de que guerras foram solucionadas nem de desmilitarização."
      },
      {
        "title": "Russia, Sao Tomé and Príncipe sign military cooperation agreement — Interfax",
        "url": "https://interfax.com/newsroom/top-stories/102026/",
        "note": "Pesquisa documental localizada. Versão/data: Notícia em inglês baseada em documento público russo; 2024-05-06; assinatura relatada 2024-04-24. Escopo efetivamente lido na coleta: Corpo completo da notícia, parágrafos sobre assinatura, treinamento e visitas militares.. Limites: Usada apenas como contraevidência datada de cooperação militar, não certificação primária do tratado. Não se inferem exercícios realizados ou entregas de armas."
      }
    ],
    "period": "Norma constitucional promulgada 25/1 e publicada 29/1/2003; prática política/civil e declarações diplomáticas 2024 em relatos 2025; carteira pública 2023 descrita em relatório 2025, sem levantamento atual 2026",
    "rationale": "Estado unitário com autonomia e autarquias, competição e alternâncias eleitorais, garantias gerais e separação religiosa com restrições penais. Economia mista contém propriedade pública significativa em vários setores; diretrizes diplomáticas favorecem convivência pacífica.",
    "caveats": "Corrupção, interferência e atraso judicial limitam narrativa democrática; abusos policiais e censura são contrapontos às garantias legais. Separação religiosa não elimina blasfêmia penal relatada. Carteira 2023 tem quatro operadoras integralmente públicas e participações minoritárias distintas; três sociedades são omitidas por falta de dados. Não mede maioria pública da produção nem atualiza toda propriedade 2026. Cooperação militar prevista, defesa nacional e posições territoriais limitam orientação pacífica. Fala ONU e notícia militar são atribuídas às leituras específicas da coleta, sem falsa nova reabertura.",
    "codings": [
      {
        "axis": "est",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constituição da República Democrática de São Tomé e Príncipe — Lei 1/2003",
            "locator": "Arts 5, 111(l–n), 135–143, PDF 3, 30–31, 36–38; art 147, PDF 40.",
            "statement": "Estado unitário abriga região autônoma do Príncipe, órgãos locais representativos e patrimônio/finanças próprios; governo nacional exerce tutela, nomeação regional e poderes de dissolução legalmente definidos.",
            "basis": "norm",
            "publishedDate": "Promulgada 2003-01-25; publicação 2003-01-29 conforme registro WIPO Lex e art 159",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Estado unitário com autonomia de Príncipe e autarquias representativas, patrimoniais e financeiras; tutela e competências nacionais limitam direção federal.",
        "uncertainty": "Autonomia regional, legislação e proteção judicial própria não são mera administração desconcentrada; também não eliminam supremacia nacional. Não mede autonomia efetivamente exercida nem transfere automaticamente normas para prática 2024.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "rep",
        "position": "strong-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constituição da República Democrática de São Tomé e Príncipe — Lei 1/2003",
            "locator": "Arts 6, 57–60, 110–114 e 135–143.",
            "statement": "Sufrágio universal, participação política e governo designado conforme resultados eleitorais coexistem com responsabilidade institucional e representação territorial.",
            "basis": "norm",
            "publishedDate": "Promulgada 2003-01-25; publicação 2003-01-29 conforme registro WIPO Lex e art 159",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Freedom in the World 2025 — São Tomé and Príncipe",
            "locator": "Overview; Key Developments, abril e maio 2024.",
            "statement": "Há eleições competitivas e alternância partidária; em 2024 a seleção de juízes e prestação de contas expuseram fragilidades institucionais.",
            "basis": "practice",
            "publishedDate": "2025; dia/mês não informado",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Narrativa datada documenta eleições competitivas e alternâncias reiteradas, com corrupção e disfunção judicial como limites; não converter nota agregada FH.",
        "uncertainty": "Há poderes presidenciais e tutela administrativa; este recorte não audita integralmente direito eleitoral. Efeitos práticos dependem das fontes sobre 2024. Corrupção e disfunção judicial impedem idealização do pluralismo. Fonte abreviada e secundária; não produzir score a partir da avaliação FH.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constituição da República Democrática de São Tomé e Príncipe — Lei 1/2003",
            "locator": "Arts 19–25, 29–40, PDF 6–11.",
            "statement": "Privacidade, expressão, reunião, associação e garantias penais se somam ao habeas corpus, assistência jurídica e nulidade de prova obtida por tortura ou intromissão abusiva.",
            "basis": "norm",
            "publishedDate": "Promulgada 2003-01-25; publicação 2003-01-29 conforme registro WIPO Lex e art 159",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Sao Tomé and Príncipe 2024 Human Rights Report — USDOS",
            "locator": "§1 a; §2 a; §2 c, PDF 1–4 e 9.",
            "statement": "Em 2024 garantias de detenção eram geralmente observadas, mas houve relato de morte após agressão policial e de censura política na mídia pública.",
            "basis": "practice",
            "publishedDate": "2025; lançamento da coleção em 12/08/2025, sem data individual impressa no PDF",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Proteções gerais de vida, integridade, privacidade, processo, expressão e associação sustentam norma moderada de liberdade; moral, ordem pública, emergência e abusos concretos impedem direção forte.",
        "uncertainty": "Ordem pública, moral, direitos alheios e estados excepcionais limitam direitos; associação não pode afrontar Constituição/independência. Não é prova de execução nem de inexistência de abusos. A investigação levou a suspensão de um oficial; relato também reconhece expressão geralmente respeitada. Atribuir alegações às fontes; não inferir culpabilidade judicial nem eliminação total de liberdades.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constituição da República Democrática de São Tomé e Príncipe — Lei 1/2003",
            "locator": "Arts 11–13 e 111(j), PDF 4–5 e 31.",
            "statement": "Orientação geral para coexistência pacífica e instituições internacionais coexiste com defesa nacional e possibilidade de operações de paz militares.",
            "basis": "norm",
            "publishedDate": "Promulgada 2003-01-25; publicação 2003-01-29 conforme registro WIPO Lex e art 159",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "UN General Assembly A/79/PV.11 — address by President Carlos Manuel Vila Nova",
            "locator": "Discurso pp. impressas 36–38, sobretudo 37.",
            "statement": "Em 26/09/2024 o Presidente pediu mediação e solução pacífica para conflitos africanos e intensificação diplomática no Oriente Médio.",
            "basis": "declaration",
            "publishedDate": "Sessão 2024-09-26; data de publicação editorial não individualizada",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Russia, Sao Tomé and Príncipe sign military cooperation agreement — Interfax",
            "locator": "Corpo, assinatura 24/04/2024 e áreas previstas.",
            "statement": "Notícia informa acordo russo-santomense de cooperação e treinamento militares assinado em 2024.",
            "basis": "practice",
            "publishedDate": "2024-05-06; assinatura relatada 2024-04-24",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Diretriz geral constitucional de paz e coexistência, corroborada por declaração diplomática datada, sustenta orientação pacífica moderada; defesa nacional e cooperação militar prevista impedem pacifismo absoluto.",
        "uncertainty": "Não é renúncia absoluta a guerra, forças armadas ou cooperação de defesa. Norma genérica precisa de prática/declaração contemporânea; não confundir cooperação diplomática com o eixo INT. Discurso preserva soberania e posicionamentos geopolíticos; tratado militar de 2024 mostra manutenção de cooperação armada. Não certifica comportamento pacífico em todos os casos nem implementação das propostas. Cooperação militar defensiva pode coexistir com diplomacia; não demonstra preferência pela guerra. Tratado primário inacessível nesta rodada; atividades previstas não foram confirmadas como realizadas.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constituição da República Democrática de São Tomé e Príncipe — Lei 1/2003",
            "locator": "Arts 9, 44–50 e 55, PDF 3–4, 12–15.",
            "statement": "A constituição garante economia mista e coexistência pública, cooperativa e privada, com serviços sociais estatais e permissão de medicina e ensino privados.",
            "basis": "norm",
            "publishedDate": "Promulgada 2003-01-25; publicação 2003-01-29 conforme registro WIPO Lex e art 159",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "São Tomé and Príncipe Economic Update — Reforming State-Owned Enterprises for Higher Private Sector-Led Growth and Job Creation",
            "locator": "Capítulo 2, pp. impressas 16–17, Table 2.1(2023) e nota 3.",
            "statement": "Quatro operadoras de água/eletricidade, portos, aeroporto e correios eram integralmente estatais; telecomunicações, banco e outros ramos tinham participações mistas.",
            "basis": "practice",
            "publishedDate": "2025; página de divulgação identifica agosto 2025; dia não verificado",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Propriedade pública integral em eletricidade/água, portos, aeroporto e correios, com participações adicionais bancárias, telecomunicações e combustíveis, sustenta presença pública multissetorial moderada. Constituição mista, participações minoritárias e empresas privadas permanecem.",
        "uncertainty": "Garantia de propriedade privada e incentivo a PMEs afastam leitura de socialização integral. Não fornece peso empírico relativo dos setores. Tabela é de 2023, inclui participações minoritárias e exclui três empresas sem dados; domínio em utilities não equivale a domínio em toda economia. Usar como base anterior, cotejada com relato 2024; ativos/PIB não são participação do produto. Setores privados existem; concessões são possibilidade e relato específico não implica transferência acionária realizada. Apenas trechos indexados foram lidos; verificar novamente o corpo antes de usar como prova principal.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "rel",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constituição da República Democrática de São Tomé e Príncipe — Lei 1/2003",
            "locator": "Arts 8, 27 e 31(2), PDF 3, 8–9.",
            "statement": "Separação estatal-religiosa, autonomia de culto e proibição de programação pública da educação por diretrizes religiosas formam um desenho laico.",
            "basis": "norm",
            "publishedDate": "Promulgada 2003-01-25; publicação 2003-01-29 conforme registro WIPO Lex e art 159",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Sao Tomé and Príncipe 2024 Human Rights Report — USDOS",
            "locator": "§2 a Freedom of the Press, PDF 3.",
            "statement": "O relatório registra crime de blasfêmia, sem processos reportados sob essa regra em 2024.",
            "basis": "practice",
            "publishedDate": "2025; lançamento da coleção em 12/08/2025, sem data individual impressa no PDF",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Separação constitucional do Estado e confissões e ensino público não religioso sustentam independência moderada; crime de blasfêmia relatado, mesmo sem persecução2024, limita direção forte.",
        "uncertainty": "Confissões podem ensinar e organizar-se; liberdade religiosa não exige exclusão social de religiosos. Laicidade normativa não assegura ausência de leis penais protetoras de crenças. Ausência de processos limita o alcance prático observado. Texto penal original ainda não cotejado; não transforma o Estado em teocracia. Blasfêmia penal relatada impede separação forte; ausência de persecução relatada2024 não revoga regra.",
        "reviewedOn": "2026-10-08"
      }
    ],
    "unknownAxisReasons": {
      "imi": "Passagens efetivamente examinadas não resolvem este construto inteiro. Permanecer desconhecido, sem evidência/mapa/código.",
      "int": "Passagens efetivamente examinadas não resolvem este construto inteiro. Permanecer desconhecido, sem evidência/mapa/código.",
      "con": "Economia mista e permissões constitucionais não demonstram preferência geral por planejamento ou mercado.",
      "com": "Declarações comerciais isoladas não cobrem desenho geral de barreiras/integração.",
      "mor": "Não proposta nesta coleta: recorte de igualdade e família não foi avaliado pelo relatório nativo como orientação geral de costumes. Não acrescentar sexto por atalho.",
      "tec": "Passagens efetivamente examinadas não resolvem este construto inteiro. Permanecer desconhecido, sem evidência/mapa/código."
    }
  },
  {
    "id": "comoros-current-2025",
    "sources": [
      {
        "title": "Constitution de l’Union des Comores — texte révisé en 2018, Cour Suprême / NATLEX",
        "url": "https://natlex.ilo.org/dyn/natlex2/natlex2/files/download/72696/COM-72696%20(CONSOLID).pdf",
        "note": "Pesquisa documental localizada. Versão/data: Constituição 2001 revista 2009/2013/2018; texto francês, PDF 36 p.; Norma 2018; adoção 2018-07-30 e entrada em vigor 2018-08-06 segundo WIPO Lex; reprodução PDF sem data editorial independente. Escopo efetivamente lido na coleta: Preâmbulo pp. 4–5; artigos 1–12 via PDF/web, 13–31 pp. 11–13, 32–58 pp. 14–20; 94–107 pp. 28–31; trechos 108–122 via web.. Limites: PDF em francês lido e comparado com cláusulas 97–104 do Constitute. Registro WIPO Lex https://www.wipo.int/wipolex/en/legislation/details/20721 fornece datas, não o corpo francês usado. Não inclui Mayotte na prática administrativa observada."
      },
      {
        "title": "Freedom in the World 2025 — Comoros",
        "url": "https://freedomhouse.org/country/comoros/freedom-world/2025",
        "note": "Pesquisa documental localizada. Versão/data: Edição abreviada 2025 sobre 2024; 2025; dia/mês não especificado. Escopo efetivamente lido na coleta: Overview; Key Developments in 2024, eleição de janeiro, repressão subsequente e ataque de setembro.. Limites: Os dois resultados/comparecimentos publicados por autoridades são mantidos como divergentes, não resolvidos por palpite; nenhuma nota FH convertida."
      },
      {
        "title": "2024 Country Reports on Human Rights Practices: Comoros — USDOS",
        "url": "https://www.ecoi.net/en/document/2128482.html",
        "note": "Pesquisa documental localizada. Versão/data: Relatório 2024 publicado 2025; corpo cotejado com PDF 10 p. no The Advocates for Human Rights; 2025-08-12; catálogo ecoi.net explícito. Escopo efetivamente lido na coleta: Executive Summary; §1 a,§2 a,§2 c e §3; corpo da edição e cópia PDF https://www.theadvocatesforhumanrights.org/res/USDOS%2BHuman%2BRights%2BReport%2BComoros%2B2024.pdf, sobretudo pp. 2–4 e 7–8.. Limites: Relatório governamental externo: relatos de mídia local mantidos como atribuições; investigação oficial negou evidência de trauma em caso de morte sob custódia."
      },
      {
        "title": "Union of the Comoros — Third Review under the Extended Credit Facility, IMF Report 24/354",
        "url": "https://www.imf.org/-/media/files/publications/cr/2024/english/1comea2024004-print-pdf.pdf",
        "note": "Pesquisa documental localizada. Versão/data: Relatório 24/354, dezembro 2024; 2024-12; capa diz staff concluído 2024-11-26, discussão 2024-12-13; não usar título de busca que exibe 06/11. Escopo efetivamente lido na coleta: Capa; §5 p. impressa 7; §21 e entorno sobre lei SOE; trechos MEFP §§15–17 p. impressa 51–52; buscas de empresas/WTO não equivalem a relatório integral.. Limites: PDF oficial baixado. Distinguir lei promulgada de passos futuros de execução; crédito a empresas não é participação estatal."
      },
      {
        "title": "WTO — Comoros accession terms, February 2024 fact sheet",
        "url": "https://www.wto.org/english/news_e/news24_e/acc_26feb24_com_e.pdf",
        "note": "Pesquisa documental localizada. Versão/data: Resumo dos termos de adesão à OMC, 6 p; 2024-02; URL 26/02/2024; data editorial específica não impressa no recorte lido. Escopo efetivamente lido na coleta: Seções 3.1–3.11, PDF 3–5, compromissos comerciais; nota 2 sobre implementação na adesão salvo exceções.. Limites: Compromissos institucionais, não certificação de implementação. Referências aos parágrafos do Working Party Report não significam que esse relatório foi verificado integralmente."
      },
      {
        "title": "WTO Tariff & Trade Data — Comoros member profile",
        "url": "https://ttd.wto.org/en/profiles/comoros",
        "note": "Pesquisa documental localizada. Versão/data: Página dinâmica com tarifas aplicadas 2022 e compromissos vinculados; Sem data editorial; ano 2022 explícito nas tarifas aplicadas. Escopo efetivamente lido na coleta: All products /Applied tariffs /Bound tariffs; importações 2023 apenas vistas e não usadas para prática 2024.. Limites: Tarifas 2022 foram excluídas da certificação de 2024; taxas bound não substituem taxa aplicada. Não usar essas estatísticas sem preservar o ano."
      },
      {
        "title": "A bold reform in Comoros: Opening up the rice market to increase food security and catalyze private sector growth",
        "url": "https://blogs.worldbank.org/en/africacan/a-bold-reform-in-comoros-opening-up-the-rice-market-to-increase-food-security-and-catalyze-private-sector-growth-afe-0125",
        "note": "Pesquisa documental localizada. Versão/data: Post institucional dos participantes da assistência à reforma; retrospectiva 2023–2024; 2025-01-09. Escopo efetivamente lido na coleta: Corpo completo lido, incluindo A Gradual Transition, Safeguarding Transparency, Early Results e Next Steps.. Limites: Autores ligados à intervenção; resultados preliminares e parte dos volumes atribuídos a noticiário local. É prática setorial, não regime econômico inteiro."
      },
      {
        "title": "AG/12635 — déclaration comorienne au débat général de 2024, ONU",
        "url": "https://press.un.org/fr/2024/ag12635.doc.htm",
        "note": "Pesquisa documental localizada. Versão/data: Cobertura oficial francesa de 26/09/2024; 2024-09-26, confirmado no índice https://press.un.org/fr/highlights/unga79. Escopo efetivamente lido na coleta: Trechos indexados relativos a Sudão, Saara Ocidental e Mayotte; não discurso integral.. Limites: Resumo da ONU de um discurso, não transcrição íntegra; registra abertura ao diálogo com França e afirmação de interesse territorial."
      }
    ],
    "period": "Norma constitucional revisada 2018 em reprodução francesa sem data editorial própria; prática política/civil 2024 relatada em 2025; normas de adesão OMC 2024 com ingresso 21/8/2024 e prazos de transição posteriores",
    "rationale": "Competências insulares próprias coexistem com controle nacional e concentração presidencial. Instituições confessionais, restrições civis efetivas e garantias normativas convivem com diretrizes pacíficas e adesão comercial documentada cuja direção geral permanece não estabelecida.",
    "caveats": "Eleições 2024 têm resultados e comparecimentos divergentes entre autoridades, contestação oposicionista e repressão, preservados sem escolher versão não comprovada. Direitos legais coexistem com detenções, autocensura, emergência e alegações contestadas de abuso. Mayotte não integra universo de administração observada. Confessionalidade não implica ausência de todos direitos pessoais. Termos OMC têm transições e controles permitidos: não comprovam execução integral, tarifas atuais ou abertura por liberalização de um único setor. Reabertura dos termos falhou; leitura documental nativa é explicitamente atribuída.",
    "codings": [
      {
        "axis": "est",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constitution de l’Union des Comores — texte révisé en 2018, Cour Suprême / NATLEX",
            "locator": "Arts 1, 54, 99–107, PDF 6, 19, 29–31.",
            "statement": "Estado unitário mantém governadores eleitos e competências insulares exclusivas; orçamento ilhéu exige aprovação nacional e taxas locais são fixadas pela lei orçamentária.",
            "basis": "norm",
            "publishedDate": "Norma 2018; adoção 2018-07-30 e entrada em vigor 2018-08-06 segundo WIPO Lex; reprodução PDF sem data editorial independente",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Freedom in the World 2025 — Comoros",
            "locator": "Key Developments, janeiro 2024, governorships.",
            "statement": "Houve eleições simultâneas para três governos insulares em 2024.",
            "basis": "practice",
            "publishedDate": "2025; dia/mês não especificado",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Direção unitária moderada com competências insulares exclusivas e governo eleito; tributação nacional, controle do orçamento e chefia nacional impedem inferência de federação plena.",
        "uncertainty": "Autonomia de gestão, planos locais e competências exclusivas são previstas no texto; não chamar mera administração central. Execução de 2024 não é inferida; Mayotte reivindicada fica fora da observação. Contexto eleitoral nacional foi contestado. Não resolve autonomia administrativa ou fiscal prática.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "rep",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constitution de l’Union des Comores — texte révisé en 2018, Cour Suprême / NATLEX",
            "locator": "Arts 3, 32–36, 52–55; PDF 6, 14–15, 18–19.",
            "statement": "Sufrágio e oposição são reconhecidos, mas presidente acumula chefia de governo e poderes regulatórios; partidos insulares/regionais/locais são proibidos.",
            "basis": "norm",
            "publishedDate": "Norma 2018; adoção 2018-07-30 e entrada em vigor 2018-08-06 segundo WIPO Lex; reprodução PDF sem data editorial independente",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Freedom in the World 2025 — Comoros",
            "locator": "Overview e Key Developments, janeiro.",
            "statement": "Eleição presidencial de 2024 teve seis candidatos, resultados/comparecimento oficiais divergentes e contestação dos opositores após concentração do poder.",
            "basis": "practice",
            "publishedDate": "2025; dia/mês não especificado",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Competição formal plural e governadores eleitos coexistem com concentração presidencial, repressão e eleição de 2024 contestada. Direção autocrática moderada, sem afirmar ausência de competição.",
        "uncertainty": "Governadores eleitos e assembleia nacional limitam equivalência a autocracia total. Sem exame integral da lei eleitoral ordinária. Existência de candidaturas e eleições é preservada; não declarar ausência de voto. Acusações de fraude são atribuídas; o relatório não estabelece um resultado alternativo confiável.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "pod",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constitution de l’Union des Comores — texte révisé en 2018, Cour Suprême / NATLEX",
            "locator": "Arts 13–28, 31, 55 e 94–96, PDF 11–14, 19, 28.",
            "statement": "Garantias de pessoa, expressão, domicílio e comunicações coexistem com exceções legais e poderes emergenciais presidenciais.",
            "basis": "norm",
            "publishedDate": "Norma 2018; adoção 2018-07-30 e entrada em vigor 2018-08-06 segundo WIPO Lex; reprodução PDF sem data editorial independente",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Freedom in the World 2025 — Comoros",
            "locator": "Key Developments, janeiro e pós-eleição.",
            "statement": "Após protestos eleitorais ocorreram toques de recolher, interrupção de internet e prisões de opositores; pelo menos uma morte foi relatada.",
            "basis": "practice",
            "publishedDate": "2025; dia/mês não especificado",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "2024 Country Reports on Human Rights Practices: Comoros — USDOS",
            "locator": "§2 a e §2 c, PDF 3–4 e 7–8; §1 a, PDF 2–3.",
            "statement": "Relatório 2024 descreve detenções por crítica, autocensura e garantias de custódia irregularmente respeitadas; jornalistas foram soltos após horas.",
            "basis": "practice",
            "publishedDate": "2025-08-12; catálogo ecoi.net explícito",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Prática datada de restrições à crítica, mídia e protesto, detenções prolongadas e defesa insuficiente sustenta direção moderada de autoridade; processo, direitos gerais e garantias constitucionais são contrapontos.",
        "uncertainty": "Várias garantias dependem de lei; emergência ampla e discricionariedade não devem ser ignoradas. Constituição não é prova de liberdade observada. Protestos também foram violentos; presença de risco não estabelece proporcionalidade automática da resposta. Não abrange todo ano ou toda segurança pública. No caso de detento morto de setembro, denúncias de tortura são contestadas pelo procurador; não se afirma condenação. Relatório externo sintetiza fontes e alegações, sem auditoria de cada processo.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constitution de l’Union des Comores — texte révisé en 2018, Cour Suprême / NATLEX",
            "locator": "Art 11–12, PDF 9–10; contrapontos: preâmbulo e arts 48/54.",
            "statement": "Diretrizes gerais incluem não ingerência, coexistência pacífica e cooperação com ONU/UA para solução pacífica; defesa nacional e território continuam estruturantes.",
            "basis": "norm",
            "publishedDate": "Norma 2018; adoção 2018-07-30 e entrada em vigor 2018-08-06 segundo WIPO Lex; reprodução PDF sem data editorial independente",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "AG/12635 — déclaration comorienne au débat général de 2024, ONU",
            "locator": "Trecho sobre Mayotte; trechos sobre Sudão e Saara Ocidental.",
            "statement": "Em setembro 2024 o representante comoriano reafirmou diálogo com França para Mayotte e apelou à contenção no Sudão.",
            "basis": "declaration",
            "publishedDate": "2024-09-26, confirmado no índice https://press.un.org/fr/highlights/unga79",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Diretriz geral de convivência pacífica e solução negociada sustenta norma moderada pacífica; obrigação de defesa, comando militar e reivindicação de Mayotte impedem direção forte ou auditoria integral de prática.",
        "uncertainty": "Reivindicação de Mayotte e deveres de defesa vedam inferir neutralidade ou abolição de força. Sem prática contemporânea suficiente para intensidade geral. Soberania territorial e reivindicações nacionais permanecem fortes. Somente resumo institucional indexado; não uma auditoria da prática militar.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "rel",
        "position": "strong-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constitution de l’Union des Comores — texte révisé en 2018, Cour Suprême / NATLEX",
            "locator": "Preâmbulo; arts 57, 97–98, PDF 4–5, 20, 29.",
            "statement": "O Islã sunita é matriz constitucional de identidade e educação; Islã é religião de Estado, o mufti é autoridade estatal e o presidente jura com o Corão.",
            "basis": "norm",
            "publishedDate": "Norma 2018; adoção 2018-07-30 e entrada em vigor 2018-08-06 segundo WIPO Lex; reprodução PDF sem data editorial independente",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "2024 Country Reports on Human Rights Practices: Comoros — USDOS",
            "locator": "§2 c Prolonged Detention without Charges, abril 2024.",
            "statement": "USDOS relata breve detenção de pregador por questionar o jejum durante viagens locais.",
            "basis": "practice",
            "publishedDate": "2025-08-12; catálogo ecoi.net explícito",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Instituições confessionais abrangentes: Islã estatal sunita-shafiita para culto e vida social, mufti nomeado e juramento corânico; igualdade individual e limites de prática não apagam vínculo constitutivo.",
        "uncertainty": "Art 2 garante igualdade sem distinção de religião; a constituição também prevê direitos gerais. Não prova uniformidade de crença ou que toda lei deriva da fé. Pregador foi libertado; é um caso, não medida de toda liberdade religiosa. O relatório atribui o fato à mídia local; não foi lido o auto policial.",
        "reviewedOn": "2026-10-08"
      }
    ],
    "unknownAxisReasons": {
      "imi": "Passagens efetivamente examinadas não resolvem este construto inteiro. Permanecer desconhecido, sem evidência/mapa/código.",
      "int": "Diretrizes de cooperação e soberania/nacionalidade coexistem; escopo insuficiente para resolver polo.",
      "eco": "Normas de saúde/empresa e reforma de governança não mostram carteira geral de propriedade. Antigo monopólio de arroz não é prática atual2024.",
      "con": "Abertura de arroz é setor específico, não toda alocação econômica.",
      "com": "Leitura nativa localizada identifica tópicos e adesão, mas não conserva corpo operativo suficiente das obrigações gerais para calibrar direção ordinal. Reaberturas própria e independente falharam. Membro OMC e mercado de arroz isolado são insuficientes; manter desconhecido e preservar todas claims como pesquisa.",
      "mor": "Não inferir costumes gerais exclusivamente de religião estatal, casamento mínimo ou dever moral.",
      "tec": "Passagens efetivamente examinadas não resolvem este construto inteiro. Permanecer desconhecido, sem evidência/mapa/código."
    }
  }
];

/** Four existing-record proposals; independent literal verdict and Root integration are separate. */
export function extendNative16CurrentCountries(entries: ReferenceEntry[]): ReferenceEntry[] {
 return entries.map(entry => {
  const before = native16CurrentCountriesBefore.find(item => item.id === entry.id);
  if (!before || JSON.stringify(before) !== JSON.stringify(entry)) return entry;
  const row = native16CurrentCountriesProposals.find(item => item.id === entry.id)!;
  const sources = [...entry.sources, ...row.sources];
  const post: ReferenceEntry = {...entry, sources, period:row.period, rationale:row.rationale, caveats:row.caveats,
   vec:{...entry.vec}, evidence:{}, axisEvidence:{}, coding:{}};
  for (const axis of Object.keys(post.vec) as (keyof ReferenceEntry['vec'])[]) post.vec[axis]=50;
  for (const input of row.codings) {
   const encoded=codeReferenceAxis(input,sources),axis=input.axis;
   post.vec[axis]=encoded.value;post.evidence![axis]=encoded.evidence;post.axisEvidence![axis]=encoded.axisEvidence;post.coding![axis]=encoded.coding;
  }
  return post;
 });
}
