import type { ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';

export const ranking675Country03Before: ReferenceEntry[] = [
  {
    "id": "indonesia",
    "kind": "country",
    "category": "country",
    "name": "Indonésia",
    "period": "Tradução constitucional oferecida pela Corte em 2026, sem data editorial comprovada; narrativa FH2025 sobre 2024",
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
    "rationale": "Normas reconhecem competências regionais e preservação cultural, em organização territorial subordinada ao desenho nacional.",
    "caveats": "Tradução sem corte de emendas seguro e OCR final invertido; oferta2026 não prova implementação2024. Fundamento religioso e autonomia têm limites; controle do artigo33 não define propriedade geral. Fontes legais e narrativas de prática têm datas e alcances distintos. Descrição documental limitada, sem certificar toda legislação ou prática atual.",
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
      },
      {
        "title": "MOFA — protocolo bilateral Japão–Indonésia, notas diplomáticas",
        "url": "https://www.mofa.go.jp/press/release/pressite_000001_02465.html",
        "note": "Fonte primária efetivamente aberta e passagem lida em 7/10/2026."
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
    "period": "Constituição revista em 2017, camada histórica; narrativa FH2025 sobre 2024; declarações posteriores sem data editorial segura",
    "vec": {
      "est": 40,
      "rep": 40,
      "pod": 60,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 60,
      "com": 40,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Texto de 2017 organiza administração central e local sob unidade administrativa e supervisão legal, com planejamento econômico constitucional.",
    "caveats": "Norma antiga não certifica consolidação atual. Separação declarada, agência religiosa e currículo não foram arbitrariamente combinados; prestação setorial e declarações de comércio não definem orientação econômica geral. Fontes legais e narrativas de prática têm datas e alcances distintos. Descrição documental limitada, sem certificar toda legislação ou prática atual.",
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
      },
      {
        "title": "Comissão Europeia — relações comerciais com Türkiye",
        "url": "https://policy.trade.ec.europa.eu/eu-trade-relationships-country-and-region/countries-and-regions/turkiye_en",
        "note": "Fonte primária efetivamente aberta e passagem lida em 7/10/2026."
      }
    ],
    "evidence": {
      "est": "medium",
      "rep": "medium",
      "pod": "medium",
      "con": "medium",
      "com": "medium"
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
      "con": {
        "sourceTitles": [
          "Constituição turca — edição 2017 em Constitute"
        ],
        "rationale": "Planejamento econômico explícito sustenta direção planejadora parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não certifica execução contemporânea nem planejamento integral da produção."
      },
      "com": {
        "sourceTitles": [
          "Comissão Europeia — relações comerciais com Türkiye"
        ],
        "rationale": "Liberalização industrial efetiva descrita pela contraparte sustenta integração parcial. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não afirma abertura de todos os setores ou inexistência de defesa comercial; extensão proposta ainda sem diretivas do Conselho."
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
      },
      "com": {
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
    "id": "malta-current-2025",
    "name": "Malta",
    "aliases": [],
    "kind": "country",
    "category": "country",
    "period": "Constituição consolidada com Atos IX e XVI de 2026, consultada em 07/10/2026; narrativa FH2025 sobre 2024; descrição aduaneira institucional sem data",
    "vec": {
      "est": 50,
      "rep": 80,
      "pod": 50,
      "imi": 50,
      "dip": 40,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 40,
      "rel": 40,
      "mor": 60,
      "tec": 50
    },
    "evidence": {
      "rep": "high",
      "rel": "medium",
      "dip": "medium",
      "mor": "medium",
      "com": "medium"
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
      "mor": {
        "sourceTitles": [
          "Texto constitucional — Malta / portal oficial"
        ],
        "rationale": "Proteção antidiscriminatória inclui sexo, orientação sexual e identidade de gênero. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Proteção normativa parcial; artigo 45 preserva exceções, inclusive matérias de direito pessoal, e não estabelece toda política de aborto ou família. Escopo temporal: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026."
      },
      "com": {
        "sourceTitles": [
          "União Europeia — Malta, pertencimento institucional",
          "União Europeia — funcionamento da união aduaneira"
        ],
        "rationale": "Remoção de barreiras internas num regime comum sustenta integração comercial parcial. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não é inferência de pertença sozinha; tarifas e controles externos persistem. O recorte é o regime aduaneiro comum aplicado a Malta."
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
      },
      "com": {
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
        "title": "Texto constitucional — Malta / portal oficial",
        "url": "https://legislation.mt/eli/const/eng/pdf",
        "note": "Texto primário lido em 7/10/2026. Versão: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026. Artigos 1,2,10,40,45: Constituição oficial consolidada substitui tradução de 2016 marcada como posteriormente emendada. O texto é uma fonte normativa datada, não certificado de execução ou consolidação de todas as emendas."
      },
      {
        "title": "Freedom in the World 2025 — Malta",
        "url": "https://freedomhouse.org/country/malta/freedom-world/2025",
        "note": "Overview e Key Developments in 2024 efetivamente lidos em 7/10/2026; relatório abreviado de 2025. Usam-se narrativas específicas, sem conversão de notas numéricas."
      },
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
    "rationale": "Normas reconhecem religião católica estatal com liberdade religiosa e recusa de instrução, além de neutralidade militar sujeita a exceções constitucionais.",
    "caveats": "Neutralidade admite autodefesa e medidas da ONU; catolicismo institucional não define crenças de habitantes. Garantias de direitos têm exceções pessoais e princípios sociais não diretamente exigíveis; provisão escolar não define propriedade econômica geral. Fontes legais e narrativas de prática têm datas e alcances distintos. Descrição documental limitada, sem certificar toda legislação ou prática atual."
  }
];

const proposals: {id:string; sources:ReferenceSource[]; codings:ReferenceAxisCoding[]; periodAppend:string; rationale:string; caveat:string}[] = [
  {
    "id": "indonesia",
    "sources": [
      {
        "title": "Lei matrimonial indonésia — UU 1 de 1974, texto original no BPK",
        "url": "https://peraturan.bpk.go.id/Home/Download/36382/UU%20Nomor%201%20Tahun%201974.pdf",
        "note": "Texto original promulgado em 02/01/1974 efetivamente lido: preâmbulo, artigos 1–5, 30–41 e encerramento 67/assinatura. Papéis familiares, capacidade e patrimônio, sem certificar consolidação integral ou execução em 2026."
      },
      {
        "title": "Lei matrimonial indonésia — alteração UU 16 de 2019",
        "url": "https://peraturan.go.id/files/uu16-2019bt.pdf",
        "note": "Texto oficial recuperado pelo índice: Pasal I completo, altera idade no artigo 7 e insere 65A; idade mínima de ambos os sexos 19 anos, admite dispensa judicial. Abertura direta e transferência por terminal falharam. Não se substitui o texto original dos demais artigos."
      },
      {
        "title": "BPK — situação documental da UU 1 de 1974",
        "url": "https://peraturan.bpk.go.id/Details/47406/uu-no-1-tahun-1974",
        "note": "Ficha institucional efetivamente aberta: status Berlaku, alteração UU16/2019 e decisões sobre artigos 7/29. Serve para proveniência e alterações indicadas; não equivale à leitura de toda jurisprudência ou consolidação atual."
      }
    ],
    "codings": [
      {
        "axis": "mor",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Lei matrimonial indonésia — UU 1 de 1974, texto original no BPK",
            "locator": "Preâmbulo; artigos 1–5 e 30–41, pp.1–3/13–16 impressas; encerramento 67",
            "statement": "A lei nacional matrimonial define união entre homem e mulher, validade religiosa e papéis gerais de marido chefe/provedor e esposa responsável pela casa. Ao mesmo tempo reconhece capacidade jurídica de ambos, posição equilibrada, domicílio conjunto, patrimônio próprio e consentimento na gestão de bens comuns, além de divórcio judicial.",
            "basis": "norm",
            "publishedDate": "1974-01-02",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Lei matrimonial indonésia — alteração UU 16 de 2019",
            "locator": "Pasal I, artigo 7(1–4) e inserção 65A, folha2019No186p3",
            "statement": "A alteração iguala em 19 anos a idade mínima de homem e mulher, permitindo dispensa judicial por motivos urgentes e ouvindo ambos. Não altera os papéis dos artigos 30–41 nesse texto.",
            "basis": "norm",
            "publishedDate": "UU16/2019; edição oficial no índice, folha2019No186",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Papéis gerais de sexo na chefia, provisão e trabalho doméstico e casamento religioso entre homem e mulher sustentam tradicionalismo moderado na ordem civil-familiar; não deriva de uma única elegibilidade pública.",
        "uncertainty": "A capacidade civil de ambos, posição equilibrada, consentimento patrimonial e domiciliar, divórcio e idade igual de 2019 são contrapesos materiais, por isso não forte20. Norma original1974 com alteração2019 efetivamente lida; ficha indica vigência, mas não há auditoria de todas as decisões ou prática familiar2026. Não codifica a aplicação futura do código penal como prática2024.",
        "reviewedOn": "2026-10-08"
      }
    ],
    "periodAppend": "; ordem civil-familiar na UU1/1974 e alteração de idade na UU16/2019",
    "rationale": "Autonomia regional e pluralidade cultural coexistem com competição eleitoral limitada, coerção estatal e ordem religiosa e familiar com papéis tradicionais, em fontes de datas distintas.",
    "caveat": "A norma matrimonial1974 atribui papéis tradicionais com capacidade e patrimônio de ambos;2019 equaliza idade e admite dispensa. O índiceBPK indica vigência, mas esta leitura não certifica todas as alterações ou execução atual."
  },
  {
    "id": "turkey",
    "sources": [
      {
        "title": "Constituição turca de 2017 — regras de religião e Estado",
        "url": "https://www.constituteproject.org/constitution/Turkey_2017?lang=en",
        "note": "Reprodução inglesa da Constituição revista em2017: artigos2/4/24/136 efetivamente lidos, contrapostos ao D2 do relatoFH2025 sobre2024. Portal da Corte respondeu erro; não é certificado de consolidação2026 nem de execução secular contemporânea."
      }
    ],
    "codings": [
      {
        "axis": "rel",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constituição turca de 2017 — regras de religião e Estado",
            "locator": "Artigos2/4;24 integral;136 integral",
            "statement": "A norma protege consciência e crença e proíbe fundar mesmo parcialmente as ordens social, econômica, política e jurídica do Estado em dogmas religiosos. Mantém ensino religioso/moral obrigatório sob controle estatal e a Presidência de Assuntos Religiosos na administração, vinculada formalmente ao secularismo.",
            "basis": "norm",
            "publishedDate": "Constituição1982, edição revista2017 em Constitute",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "A independência normativa de toda a ordem estatal em relação a dogmas, junto à liberdade de consciência, sustenta laicidade institucional moderada no recorte formal; não depende apenas do rótulo secular.",
        "uncertainty": "Ensino obrigatório e órgão religioso estatal impedem separação absoluta/forte80. O D2 da narrativaFH2025 relata financiamento sunita privilegiado, falta de apoio equivalente a outros grupos e exclusões escolares: limite efetivo importante, não prova de neutralidade praticada. Código descreve desenho constitucional2017, não balanço empírico da religiosidade ou prática2026.",
        "reviewedOn": "2026-10-08"
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
          },
          {
            "sourceTitle": "Constituição turca — edição 2017 em Constitute",
            "locator": "Artigos48 integral e167, primeiro parágrafo; contraponto ao166",
            "statement": "Estabelecimento de empresas privadas e contratos são livres, e o Estado deve garantir funcionamento dos mercados de dinheiro, crédito, capital, bens e serviços, evitando cartéis e monopólios. Há orientação empresarial por necessidades econômicas nacionais e objetivos sociais.",
            "basis": "norm",
            "publishedDate": "Edição revista2017",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "O dever de planejar desenvolvimento nacional, indústria, agricultura, recursos, preços, investimento e emprego e executar desenvolvimento segundo o plano sustenta planejamento moderado; não é mera existência de um conselho consultivo.",
        "uncertainty": "Empresas privadas/contratos livres48 e mercados protegidos contra cartéis167 são contrapesos gerais. O conselho166 é consultivo, mas a obrigação de desenvolvimento segundo plano é distinta. Não afirma preços/produção privados integralmente comandados, predominância executada, nem consolidação2026; recorte normativo2017.",
        "confidence": "medium",
        "reviewedOn": "2026-10-08"
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
          },
          {
            "sourceTitle": "Freedom in the World 2025 — Turquia",
            "locator": "F1–F3, narrativas",
            "statement": "O relato descreve longa detenção prévia, demora em formular acusações, perseguição de advogados em casos de terrorismo, desobediência a decisões superiores e denúncias de tortura insuficientemente investigadas.",
            "basis": "practice",
            "publishedDate": "Relatório2025; prática2024",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Coerção sobre expressão/organização e comprometimento geral de defesa e controle da detenção sustentam direção autoritária moderada no recorte de prática relatada2024.",
        "uncertainty": "Não é ausência completa de direitos: Constituição2017 arts17/19–20 protege integridade, revisão judicial da prisão e privacidade; o relato reconhece alguma independência da Corte e oposição competitiva. Norma e execução são fontes distintas, não médias numéricas; não certifica toda vigilância ou situação2026.",
        "confidence": "medium",
        "reviewedOn": "2026-10-08"
      }
    ],
    "periodAppend": "; laicidade formal e planejamento/mercados na edição2017, com contrapontos religiosos de prática2024",
    "rationale": "Tutela territorial, competição assimétrica e coerção convivem com integração aduaneira e planejamento econômico com mercados privados; a norma estatal não pode ser fundada em dogmas, embora administre instituições religiosas.",
    "caveat": "Laicidade refere-se ao desenho2017, com ensino obrigatório e órgão religioso estatal; financiamento sunita privilegiado é contraponto de prática2024. Planejamento166 deve ser confrontado com liberdade empresarial48 e mercados167, sem medir predominância executada."
  },
  {
    "id": "malta-current-2025",
    "sources": [
      {
        "title": "Código Civil maltês — deveres conjugais e divórcio, consolidação 2026",
        "url": "https://legislation.mt/eli/cap/16/eng/pdf",
        "note": "Cabeçalho oficial incluiIII/VII/XIII de2026; leitura efetiva selecionada2/3/3A/4(1–5),66A–D e66L(1), não as615p. Igualdade conjugal e trabalho dentro/fora de casa, domicílio comum, divórcio com condições e manutenção familiar."
      },
      {
        "title": "Malta — Marriage Act and other Laws (Amendment) Act XXIII de 2017",
        "url": "https://legislation.mt/eli/act/2017/23/eng/pdf",
        "note": "Texto assentido em01/08/2017 efetivamente lido: preâmbulo/1,93/99–100; definição de cônjuge de qualquer sexo e casamento entre dois indivíduos consententes. O artigo1 remete início de vigência a aviso; sem inventar data de início a partir do assentimento."
      }
    ],
    "codings": [
      {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Texto constitucional — Malta / portal oficial",
            "locator": "Cabeçalho2026;32/34–36/38–42/46–47; contrapontos33/34(3/5–7)/36(2–3)/47(5)",
            "statement": "Garantias gerais incluem liberdade e vida privada, limites à prisão, julgamento imparcial, presunção de inocência, defesa/testemunhas, privacidade, expressão e associação, com via de reparação constitucional. São admitidas detenções legais, extensão judicial para crimes graves, limitações de ordem/moralidade e emergência.",
            "basis": "norm",
            "publishedDate": "Consolidação oficial oferecida em2026, incluiAtosIX/XVI de2026",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Proteções constitucionais gerais de esfera privada, expressão, associação e processo criminal sustentam direção moderada de liberdade no desenho legal, além de um direito isolado.",
        "uncertainty": "Condições de interesse público/moralidade, pesquisa criminal, detenção sanitária/social/migratória e emergência são amplas. Art34(3) admite extensão de48h por até48h mediante magistrado e salvaguardas em crime com pena máxima superior12anos;34(7) parecer emergencial não vincula. Art36 preserva punições antigas e disciplina coletiva;47(5) limita direitos de forças disciplinadas. Não infere execução ou elimina esses contrapesos; não se usa tabelaFH como prática. Art33 mantém exceção textual de sentença penal à vida, sem afirmar existência atual de pena capital no restante da legislação.",
        "reviewedOn": "2026-10-08"
      },
      {
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
          },
          {
            "sourceTitle": "Código Civil maltês — deveres conjugais e divórcio, consolidação 2026",
            "locator": "Artigos2/3/3A/4(1–5),66A–D/66L(1); notas1993/2020/2021 no texto oferecido2026",
            "statement": "Cônjuges têm iguais direitos e responsabilidades, podem trabalhar dentro ou fora da casa, fixam domicílio de comum acordo e escolhem nomes familiares. Qualquer cônjuge pode requerer divórcio e voltar a casar, sujeito a separação temporal, ausência de reconciliação e manutenção devida.",
            "basis": "norm",
            "publishedDate": "Consolidação oficial2026, cabeçalhoIII/VII/XIII de2026; disposições com notas1993/2020/2021",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Malta — Marriage Act and other Laws (Amendment) Act XXIII de 2017",
            "locator": "Assentimento01/08/2017;93(c)/99; contraponto1(2)",
            "statement": "A alteração define cônjuge e marido/esposa como pessoa de qualquer sexo que casa conforme a lei e acrescenta casamento civil entre dois indivíduos consententes; início de vigência depende de aviso ministerial.",
            "basis": "norm",
            "publishedDate": "2017-08-01",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Igualdade conjugal na divisão de direitos, responsabilidades e trabalho doméstico/externo, domicílio e divórcio, com casamento de qualquer sexo e proteção antidiscriminatória, sustentam reforma moderada dos papéis civis-familiares.",
        "uncertainty": "A lei promove estabilidade familiar, fidelidade e apoio mútuo, e divórcio exige condições temporais/reconciliação/manutenção. Art45(4)(c) excepciona direito pessoal, mas seu proviso impede aplicar essa exceção à discriminação por sexo; não suprime todos os demais limites. Não certifica toda legislação de aborto/família ou prática2026;2017 é assentimento, não data de início presumida.",
        "reviewedOn": "2026-10-08"
      }
    ],
    "periodAppend": "; garantias gerais de processo/vida privada e Código Civil em consolidações oferecidas2026; lei de igualdade conjugal assentida2017",
    "rationale": "Competição eleitoral e integração aduaneira coexistem com neutralidade militar, religião católica estatal, garantias gerais de liberdade e igualdade civil-familiar sujeitas a condições.",
    "caveat": "Garantias de liberdade admitem amplas exceções legais e emergenciais; igualdade civil-familiar é sustentada também pelo Código Civil e lei2017, sem transformar antidiscriminação isolada em toda orientação moral. Autonomia municipal examinada parcialmente permanece sem novo código territorial."
  }
];

/** Isolated author proposal: independent whole-profile review and Root acceptance required. */
export function extendRanking675Country03(entries: ReferenceEntry[]): ReferenceEntry[] {
 return entries.map(entry => {
  const before=ranking675Country03Before.find(item=>item.id===entry.id);
  if(!before || JSON.stringify(before)!==JSON.stringify(entry))return entry;
  const row=proposals.find(item=>item.id===entry.id)!;
  const sources=[...entry.sources,...row.sources];
  const post:ReferenceEntry={...entry,sources,period:entry.period+row.periodAppend,rationale:row.rationale,caveats:entry.caveats+' '+row.caveat,vec:{...entry.vec},evidence:{...entry.evidence},axisEvidence:{...entry.axisEvidence},coding:{...entry.coding}};
  for(const input of row.codings){
   const encoded=codeReferenceAxis(input,sources);const axis=input.axis;
   post.vec[axis]=encoded.value;post.evidence![axis]=encoded.evidence;post.axisEvidence![axis]=encoded.axisEvidence;post.coding![axis]=encoded.coding;
  }
  return post;
 });
}
