import type { ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';

/** Exact complete prior objects, including every original source and coding. */
export const native14CurrentCountriesBefore: ReferenceEntry[] = [
  {
    "id": "saudi-arabia",
    "kind": "country",
    "category": "country",
    "name": "Arábia Saudita",
    "period": "Lei Básica de 02/03/1992 com emendas de 2006/2017 na tradução oferecida; narrativa FH2025 sobre 2024; estratégia PIF para 2026–2030",
    "vec": {
      "est": 50,
      "rep": 20,
      "pod": 80,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 60,
      "com": 50,
      "rel": 20,
      "mor": 40,
      "tec": 50
    },
    "rationale": "Lei Básica vincula autoridade e justiça à matriz islâmica e organiza poderes sob chefia régia, em normas distintas da estratégia declarada de investimento.",
    "caveats": "Árabe prevalece sobre tradução; edição histórica não comprova vigência integral2026. EstratégiaPIF é declaração prospectiva, não resultado ou comando de toda produção. Fontes legais e narrativas de prática têm datas e alcances distintos. Descrição documental limitada, sem certificar toda legislação ou prática atual.",
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
      },
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
    "evidence": {
      "rep": "high",
      "pod": "high",
      "rel": "high",
      "mor": "medium",
      "con": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Lei Básica saudita — tradução oficial, edição com emendas até 2017",
          "Freedom in the World 2025 — Arábia Saudita"
        ],
        "rationale": "Ausência de representação nacional eleita e supremacia régia sustentam despotismo forte. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Conselho consultivo não equivale a legislatura democrática."
      },
      "pod": {
        "sourceTitles": [
          "Freedom in the World 2025 — Arábia Saudita"
        ],
        "rationale": "Supressão ampla de dissenso sustenta autoritarismo forte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Não se deduz direção apenas da quantidade de execuções nem de todos os crimes comuns."
      },
      "rel": {
        "sourceTitles": [
          "Lei Básica saudita — tradução oficial, edição com emendas até 2017"
        ],
        "rationale": "Fundamento e aplicação religiosa do direito sustentam direção confessional forte. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Norma histórica datada, sem certificação de alterações posteriores; não mede crença dos habitantes."
      },
      "mor": {
        "sourceTitles": [
          "Freedom in the World 2025 — Arábia Saudita"
        ],
        "rationale": "Regras estatais de costumes sustentam conservadorismo parcial. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Vestuário e desigualdade não resolvem todos os costumes; não presume rejeição total de reformas."
      },
      "con": {
        "sourceTitles": [
          "PIF — estratégia 2026–2030"
        ],
        "rationale": "Direção pública de investimentos estratégicos sustenta planejamento parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: É mandato de fundo estatal, não comando de toda a produção nem resultado observado da estratégia."
      }
    },
    "coding": {
      "rep": {
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
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 20,
        "range": [
          10,
          25
        ]
      },
      "pod": {
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
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 20,
        "range": [
          10,
          25
        ]
      },
      "mor": {
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
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "con": {
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
    "id": "samoa-current-2025",
    "name": "Samoa",
    "aliases": [],
    "kind": "country",
    "category": "country",
    "period": "Prática em 2024; norma: Consolidação oficial em 31/12/2023",
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
      "rel": 40,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "rep": "medium",
      "rel": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — Samoa"
        ],
        "rationale": "Eleições regulares e vitória oposicionista em 2021; candidaturas restringem-se a chefes tradicionais de família. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não inferir autoritarismo da longa permanência partidária isolada; restrição efetiva de candidatura sustenta intensidade moderada."
      },
      "rel": {
        "sourceTitles": [
          "Texto constitucional — Samoa / portal oficial"
        ],
        "rationale": "Define nação cristã, preservando mudança de religião e recusa de instrução de outra fé. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Identidade religiosa estatal normativa não prova lei teocrática ou todos os poderes de aldeias; versão oficial usada é consolidada em 31/12/2023. Escopo temporal: Consolidação oficial em 31/12/2023."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Freedom in the World 2025 — Samoa",
            "locator": "Overview; Key Developments in 2024",
            "statement": "Eleições regulares e vitória oposicionista em 2021; candidaturas restringem-se a chefes tradicionais de família.",
            "basis": "practice",
            "publishedDate": "2025; observações de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Eleições regulares e vitória oposicionista em 2021; candidaturas restringem-se a chefes tradicionais de família.",
        "uncertainty": "Não inferir autoritarismo da longa permanência partidária isolada; restrição efetiva de candidatura sustenta intensidade moderada.",
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
            "sourceTitle": "Texto constitucional — Samoa / portal oficial",
            "locator": "Artigos 1(3),11–12",
            "statement": "Define nação cristã, preservando mudança de religião e recusa de instrução de outra fé.",
            "basis": "norm",
            "publishedDate": "Consolidação oficial em 31/12/2023",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Define nação cristã, preservando mudança de religião e recusa de instrução de outra fé.",
        "uncertainty": "Identidade religiosa estatal normativa não prova lei teocrática ou todos os poderes de aldeias; versão oficial usada é consolidada em 31/12/2023. Escopo temporal: Consolidação oficial em 31/12/2023.",
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
        "title": "Texto constitucional — Samoa / portal oficial",
        "url": "https://www.ag.gov.ws/wp-content/uploads/2024/02/Constitution-of-the-Independent-State-of-Samoa-1960.pdf",
        "note": "Texto primário lido em 7/10/2026. Versão: Consolidação oficial em 31/12/2023. Artigos 1,11–12: Nação cristã e garantias de liberdade religiosa no texto oficial consolidado em 2023. Escopo normativo limitado a 31/12/2023; não inclui a emenda constitucional de 2025."
      },
      {
        "title": "Freedom in the World 2025 — Samoa",
        "url": "https://freedomhouse.org/country/samoa/freedom-world/2025",
        "note": "Overview e Key Developments in 2024 efetivamente lidos em 7/10/2026; relatório abreviado de 2025. Usam-se narrativas específicas, sem conversão de notas numéricas."
      }
    ],
    "rationale": "Eleições regulares e vitória oposicionista em 2021; candidaturas restringem-se a chefes tradicionais de família. Define nação cristã, preservando mudança de religião e recusa de instrução de outra fé.",
    "caveats": "Não inferir autoritarismo da longa permanência partidária isolada; restrição efetiva de candidatura sustenta intensidade moderada. Identidade religiosa estatal normativa não prova lei teocrática ou todos os poderes de aldeias; versão oficial usada é consolidada em 31/12/2023. Escopo temporal: Consolidação oficial em 31/12/2023. Âncoras editoriais não são medições. Normas e execução têm escopos distintos. Eixos ausentes são desconhecidos; cobertura menor que seis eixos para matches."
  },
  {
    "id": "st-kitts-and-nevis-current-2025",
    "name": "São Cristóvão e Névis",
    "aliases": [
      "Saint Kitts and Nevis",
      "St Kitts and Nevis"
    ],
    "kind": "country",
    "category": "country",
    "period": "Prática eleitoral relatada2024/edição2025; arquitetura federal na norma1983, seções103/106/107/113 eSchedule5; revisão documental08/10/2026",
    "vec": {
      "est": 80,
      "rep": 80,
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
      "rep": "high",
      "est": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — São Cristóvão e Névis"
        ],
        "rationale": "Eleições competitivas críveis e liberdades geralmente respeitadas. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Corrupção e opacidade no programa de cidadania e marginalização LGBT+ continuam."
      },
      "est": {
        "sourceTitles": [
          "Texto constitucional — São Cristóvão e Névis / Constitute",
          "The Constitution — Government of St. Kitts and Nevis"
        ],
        "rationale": "Névis tem legislatura própria com competências exclusivas sobre agricultura e desenvolvimento local, administração de educação e saúde e direito condicionado de separação da federação. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Codificação do desenho federal assimétrico; governo nacional pode prevalecer em temas de política geral e segurança, conforme 106(2) e 107(2). Portal governamental confirma origem e estrutura federativa, sem certificar todas as emendas."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Freedom in the World 2025 — São Cristóvão e Névis",
            "locator": "Overview; Key Developments in 2024",
            "statement": "Eleições competitivas críveis e liberdades geralmente respeitadas.",
            "basis": "practice",
            "publishedDate": "2025; observações de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Eleições competitivas críveis e liberdades geralmente respeitadas.",
        "uncertainty": "Corrupção e opacidade no programa de cidadania e marginalização LGBT+ continuam.",
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
        "position": "strong-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Texto constitucional — São Cristóvão e Névis / Constitute",
            "locator": "Seções 103, 106, 113; Schedule 5, Part 1",
            "statement": "Névis tem legislatura própria com competências exclusivas sobre agricultura e desenvolvimento local, administração de educação e saúde e direito condicionado de separação da federação.",
            "basis": "norm",
            "publishedDate": "1983",
            "accessedDate": "2026-10-07"
          },
          {
            "locator": "The Constitution, apresentação",
            "statement": "Portal governamental identifica a Constituição de 1983 e a estrutura de direitos e poderes da federação.",
            "sourceTitle": "The Constitution — Government of St. Kitts and Nevis",
            "basis": "declaration",
            "publishedDate": "Sem data editorial; consultado em 7/10/2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Névis tem legislatura própria com competências exclusivas sobre agricultura e desenvolvimento local, administração de educação e saúde e direito condicionado de separação da federação.",
        "uncertainty": "Codificação do desenho federal assimétrico; governo nacional pode prevalecer em temas de política geral e segurança, conforme 106(2) e 107(2). Portal governamental confirma origem e estrutura federativa, sem certificar todas as emendas.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      }
    },
    "sources": [
      {
        "title": "Texto constitucional — São Cristóvão e Névis / Constitute",
        "url": "https://www.constituteproject.org/constitution/St_Kitts_and_Nevis_1983?lang=en",
        "note": "Texto primário traduzido consultado em 7/10/2026, versão 1983. Seções 103, 106 e 113; Schedule 5, Part 1: Legislatura de Névis possui competências legislativas exclusivas; administração tem responsabilidades próprias; secessão exige referendo qualificado. Texto primário traduzido consultado; não foi estabelecida consolidação completa até 2024. Contexto documental, sem pontuação automática."
      },
      {
        "title": "Freedom in the World 2025 — São Cristóvão e Névis",
        "url": "https://freedomhouse.org/country/st-kitts-and-nevis/freedom-world/2025",
        "note": "Narrativas institucionais efetivamente lidas em 7/10/2026; relatório abreviado de 2025 sobre 2024. Notas agregadas e respostas numéricas não se convertem em scores."
      },
      {
        "title": "The Constitution — Government of St. Kitts and Nevis",
        "url": "https://www.gov.kn/the-constitution/",
        "note": "Apresentação governamental sem data editorial, lida em 7/10/2026; confirma federação e origem da Constituição, não uma consolidação de emendas."
      }
    ],
    "rationale": "Eleições competitivas críveis e liberdades geralmente respeitadas. Névis tem legislatura própria com competências exclusivas sobre agricultura e desenvolvimento local, administração de educação e saúde e direito condicionado de separação da federação.",
    "caveats": "Corrupção e opacidade no programa de cidadania e marginalização LGBT+ continuam. Codificação do desenho federal assimétrico; governo nacional pode prevalecer em temas de política geral e segurança, conforme 106(2) e 107(2). Portal governamental confirma origem e estrutura federativa, sem certificar todas as emendas. Âncoras editoriais não são medições. Eixos ausentes permanecem desconhecidos, sem evidência; estes perfis não satisfazem os seis eixos exigidos para matches. Competências deNévis pertencem à carta1983 efetivamente examinada no relato autoral anterior, não inferidas da eleição2024.106(2)/107(2) preservam prevalência nacional em política geral/segurança;113 impõe condições para separação. Não toda implementação2026."
  }
];

export const native14CurrentCountriesPriorSha256 = {
  "saudi-arabia": "6fad940e54a4eb8835458376493aa9053d821e48be7526baa687720f7361e77d",
  "samoa-current-2025": "8b3c4fee48f44d1c00be6fe9e77861abec2918f7423649cec660dad7ea0ac888",
  "st-kitts-and-nevis-current-2025": "0edf11de4dd97950248fc75b720528bcd75355bdb2871805d71a629806d3acc0"
} as const;

interface Native14CountryProposal { id:string; period:string; rationale:string; caveats:string; sources:ReferenceSource[]; codings:ReferenceAxisCoding[]; unknownAxisReasons:Partial<Record<keyof ReferenceEntry["vec"],string>>; }
/** Editorial proposals: source truth and integration require separate independent approval. */
export const native14CurrentCountriesProposals: Native14CountryProposal[] = [
  {
    "id": "saudi-arabia",
    "period": "Normas de 02/03/1992: Lei Básica com apêndice de 2006/2017 e Lei das Províncias, tradução sem horizonte completo de emendas; prática e políticas relatadas em 2024 por FH 2025 e IMF 24/280. Estratégia PIF 2026–2030 é declaração futura.",
    "rationale": "Monarquia hereditária centralizada e confessional, com restrições amplas à dissidência; família, educação e deveres gerais preservam tradições, enquanto reformas e investimento privado coexistem com coordenação econômica nacional multissetorial.",
    "caveats": "Seis direções editoriais delimitadas por normas históricas e relatos de 2024, sem medir percentuais ou certificar toda prática atual. Traduções oficiais não substituem o texto árabe, que prevalece. Nomeações e consulta não são eleições; reformas femininas e mercados privados são contrapontos. Propriedade geral, cultura migratória, postura militar, intervenção externa, comércio e tecnologia continuam desconhecidos.",
    "sources": [
      {
        "title": "Basic Law of Governance — Bureau of Experts official English translation, Royal Order A/90",
        "url": "https://www.refworld.org/sites/default/files/2025-05/alnzam_alasasy_llhkm_1.pdf",
        "note": "Leitura documental atribuída à pesquisa fornecida, acesso em 08/10/2026. Data/versão: Promulgada em 02/03/1992; apêndice com emendas de 19/10/2006 e 21/06/2017; publicação da tradução sem data. Escopo: PDF completo 1–83 e apêndice, conforme leitura integral fornecida; cotejo próprio do corpo e apêndice 2006/2017. Tradução inglesa oficial; texto árabe prevalece."
      },
      {
        "title": "Freedom in the World 2025 — Saudi Arabia",
        "url": "https://freedomhouse.org/country/saudi-arabia/freedom-world/2025",
        "note": "Leitura documental atribuída à pesquisa fornecida, acesso em 08/10/2026. Data/versão: Relatório de 2025, sem dia de publicação indicado; observações referentes a 2024. Escopo: Visão geral, todos os acontecimentos de 2024 e narrativa G1; cotejo próprio dos trechos. Questionário abreviado e notas numéricas não são convertidos em âncoras."
      },
      {
        "title": "Our Strategy — PIF 2026–2030",
        "url": "https://www.pif.gov.sa/en/strategy-and-impact/our-strategy/",
        "note": "Leitura documental atribuída à pesquisa fornecida, acesso em 08/10/2026. Data/versão: Página sem data editorial; estratégia expressamente referente a 2026–2030. Escopo: Objetivos, carteiras, ecossistemas e seção Private Sector Hub, linhas 196–282 conforme leitura fornecida. Estratégia futura 2026–2030, não prática 2024."
      },
      {
        "title": "Saudi Arabia: 2024 Article IV Consultation—Press Release and Staff Report, IMF Country Report 24/280",
        "url": "https://www.imf.org/-/media/files/publications/cr/2024/english/1sauea2024001-print-pdf.pdf",
        "note": "Leitura documental atribuída à pesquisa fornecida, acesso em 08/10/2026. Data/versão: Capa de setembro de 2024; publicação em 04/09/2024; relatório técnico concluído em 18/07/2024. Escopo: Capa e parágrafos 2/44–45/48–50/53–54, Anexo III 1–3 conforme leitura fornecida; cotejo próprio dos parágrafos 44–49 e trecho do Anexo III 1. Recomendações distintas de políticas efetivas; não foi lido inteiro PDF de 102 páginas pelo autor desta composição."
      },
      {
        "title": "Law of Provinces — Bureau of Experts official English translation, Royal Decree A/92",
        "url": "https://ncar.gov.sa/api/index.php/resource/eyJpdiI6ImF0MFhMQk9TNWk5SnI1L1VDbHdDenc9PSIsInZhbHVlIjoiL2xoMUFTY3BjekRnYmMwTXZmajhnZz09IiwibWFjIjoiNzE0ODQwNDk5ZGViZjUxMjBkY2E2NjQ4MzdiNDlhNWUyZWExYTIxNTY5NDM3MzE1NWIyMjg0MDUxMjc5OTllMCIsInRhZyI6IiJ9/Documents/TranslatedAttachPath",
        "note": "Leitura documental atribuída à pesquisa fornecida, acesso em 08/10/2026. Data/versão: Capa de 02/03/1992; publicação e data de consolidação da tradução não indicadas. Escopo: Arts.1–41 conforme leitura integral fornecida; próprio 1–27 e início 28. Reabertura 30–38 falhou, download 403; não reivindicar nova leitura integral própria. Tradução sem data de consolidação."
      },
      {
        "title": "HRH Crown Prince Receives the Governors of the Regions — Saudi Press Agency",
        "url": "https://www.spa.gov.sa/en/N2075025",
        "note": "Leitura documental atribuída à pesquisa fornecida, acesso em 08/10/2026. Data/versão: 28/03/2024. Escopo: Corpo indexado da notícia da reunião anual, conforme leitura fornecida; abertura direta sem corpo. Reunião não mede autonomia regional."
      }
    ],
    "codings": [
      {
        "axis": "est",
        "position": "strong-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Law of Provinces — Bureau of Experts official English translation, Royal Decree A/92",
            "locator": "Articles 2–5, 7–16, 23–25, 30–38",
            "statement": "Províncias e governadores são constituídos centralmente; governadores respondem ao Ministério do Interior e conselhos propõem prioridades de desenvolvimento sob controle nacional.",
            "basis": "norm",
            "publishedDate": "1992-03-02 on cover; translation publication/consolidation date undated",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "HRH Crown Prince Receives the Governors of the Regions — Saudi Press Agency",
            "locator": "Whole indexed report, regional governors’ 31st annual meeting",
            "statement": "Em março de 2024 governadores regionais apresentaram informações ao príncipe herdeiro e primeiro-ministro em reunião com o ministro do Interior.",
            "basis": "practice",
            "publishedDate": "2024-03-28",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Criação e nomeação central das províncias, responsabilidade perante o Interior e dependência de prioridades e orçamentos nacionais sustentam direção unitária forte. Conselhos com propostas reais não constituem competência política autônoma equivalente à central.",
        "uncertainty": "Conselhos exercem funções locais e podem contestar propostas rejeitadas por via do Interior. Tradução de norma de 1992 sem horizonte completo de emendas; reunião de 2024 não certifica todos os poderes locais atuais. Leitura própria alcançou arts.1–27 e início 28; arts.30–38 apoiados no atestado integral fornecido.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "rep",
        "position": "strong-second",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Basic Law of Governance — Bureau of Experts official English translation, Royal Order A/90",
            "locator": "Articles 5 with appendix, 44, 52, 55–58, 67–70",
            "statement": "A monarquia hereditária concentra no rei a autoridade final e a nomeação do executivo, dos juízes e da estrutura consultiva.",
            "basis": "norm",
            "publishedDate": "1992-03-02 enactment; appendix amendments 2006-10-19 and 2017-06-21; translation publication undated",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Freedom in the World 2025 — Saudi Arabia",
            "locator": "Overview; September Shura appointment item",
            "statement": "Em 2024 não havia autoridades nacionais eleitas; o rei nomeou o conselho consultivo, sem autoridade legislativa própria.",
            "basis": "practice",
            "publishedDate": "2025 report; precise publication day not shown; observations concern 2024",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Sucessão hereditária, nomeações régias e ausência de eleição nacional competitiva mostram concentração autocrática forte; consulta e petição não substituem responsabilidade eleitoral.",
        "uncertainty": "Consulta e petição nos arts.8/43 e independência judicial dentro da Sharia no 46 permanecem contrapontos. Mulheres integram o conselho por nomeação. Art.56 é redação histórica, não se afirma que o rei era primeiro-ministro em 2024; apêndice 5 de 2006/2017 foi cotejado.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "pod",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Basic Law of Governance — Bureau of Experts official English translation, Royal Order A/90",
            "locator": "Articles 36–40, 43, 46–48, 61–62, 82",
            "statement": "Garantias de liberdade, domicílio, correspondência e acesso à justiça coexistem com restrições amplas à expressão e poderes régios de emergência.",
            "basis": "norm",
            "publishedDate": "1992-03-02 enactment; appendix amendments 2006-10-19 and 2017-06-21; translation publication undated",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Freedom in the World 2025 — Saudi Arabia",
            "locator": "Overview and expression-related prosecutions in Key Developments",
            "statement": "O relato de 2024 descreve vigilância extensa, criminalização da dissidência e penas longas ligadas à expressão.",
            "basis": "practice",
            "publishedDate": "2025 report; precise publication day not shown; observations concern 2024",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Vigilância ampla e criminalização da expressão em 2024, lidas com poderes de emergência e restrições legais gerais, sustentam direção forte de autoridade sobre a liberdade.",
        "uncertainty": "Garantias de legalidade, não retroatividade, domicílio, correspondência e litígio são contrapontos reais, sem prova de eficácia uniforme. Mobilidade de mulheres e migrantes melhorou modestamente. Contagem de execuções não determina esta posição.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "rel",
        "position": "strong-second",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Basic Law of Governance — Bureau of Experts official English translation, Royal Order A/90",
            "locator": "Articles 1, 7, 13, 23, 45–48, 55",
            "statement": "Fontes islâmicas regem direito estatal, educação, pareceres religiosos e tribunais; o governo deve aplicar a Sharia e propagar o Islã.",
            "basis": "norm",
            "publishedDate": "1992-03-02 enactment; appendix amendments 2006-10-19 and 2017-06-21; translation publication undated",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "A vinculação geral de governo, direito, educação, pareceres e justiça às fontes islâmicas sustenta direção confessional forte, sem deduzir religiosidade individual.",
        "uncertainty": "Garantias e independência judicial são formuladas dentro da Sharia; não se certifica cada reforma institucional posterior nem uniformidade de crença da população.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "mor",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Basic Law of Governance — Bureau of Experts official English translation, Royal Order A/90",
            "locator": "Chapter 3 Articles 9–13; Articles 23, 29, 41",
            "statement": "A norma obriga o Estado a manter valores familiares árabe-islâmicos, patrimônio tradicional e deveres morais; residentes devem respeitar tradições sociais.",
            "basis": "norm",
            "publishedDate": "1992-03-02 enactment; appendix amendments 2006-10-19 and 2017-06-21; translation publication undated",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Freedom in the World 2025 — Saudi Arabia",
            "locator": "Overview; national-dress orders; G1 narrative",
            "statement": "Discriminação de gênero e exigências oficiais de vestimenta coexistem com reformas que facilitaram dirigir, obter passaporte e trabalhar para mulheres.",
            "basis": "practice",
            "publishedDate": "2025 report; precise publication day not shown; observations concern 2024",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Família, educação moral, patrimônio cultural e deveres gerais orientam a preservação de tradições; reformas de mobilidade, trabalho e participação feminina tornam proporcional a direção tradicional moderada.",
        "uncertainty": "Não é inferência baseada somente em vestimenta ou religião estatal. Conhecimento e habilidades também são objetivos educacionais. Reformas da década são contrapontos, sem atribuir sua promulgação inteira a 2024 ou auditar todos os costumes.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "con",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Basic Law of Governance — Bureau of Experts official English translation, Royal Order A/90",
            "locator": "Articles 14–22, with 17–19 and 27–31",
            "statement": "O desenvolvimento econômico segue um plano nacional, preservando capital e propriedade privados como fundamentos protegidos.",
            "basis": "norm",
            "publishedDate": "1992-03-02 enactment; appendix amendments 2006-10-19 and 2017-06-21; translation publication undated",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Saudi Arabia: 2024 Article IV Consultation—Press Release and Staff Report, IMF Country Report 24/280",
            "locator": "Paragraphs 2, 44–45, 48–49, printed pp.4 and 31–35",
            "statement": "O relatório de 2024 identifica intervenções multissetoriais do PIF, conteúdo local nas compras e zonas econômicas especiais ativamente perseguidos, ao lado de reformas favoráveis ao mercado.",
            "basis": "practice",
            "publishedDate": "2024-09 (PDF cover); publication landing page 2024-09-04; staff report completed 2024-07-18",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Plano econômico nacional e intervenções multissetoriais efetivas de investimento e compras públicas em 2024 sustentam coordenação planejada moderada dentro de uma economia que também protege mercados e capital privado.",
        "uncertainty": "Arts.17–19 protegem propriedade privada. IMF 44–45/49 enfatiza desenvolvimento privado, reformas regulatórias e parcerias; recomendações não são resultados nem prova de deslocamento privado. Não há comando universal de produção. Estratégia PIF 2026–2030 é declaração futura e insuficiente isoladamente; não fundamenta retroativamente 2024.",
        "reviewedOn": "2026-10-08"
      }
    ],
    "unknownAxisReasons": {
      "imi": "Resident tradition clause and exploitation report do not map general cultural integration, migrant rights and diversity policy.",
      "dip": "Armed-forces and friendly-relations clauses do not establish the military-versus-diplomatic balance in 2024.",
      "int": "No broad 2024 intervention/nonintervention policy audit; retain exact app construct.",
      "eco": "Mixed ownership norms and Aramco shares lack complete economy/service ownership evidence.",
      "com": "Local-content rules and WTO-oriented declarations are relevant but no comprehensive tariffs, agreements and actual trade-policy audit.",
      "tec": "Generic science, AI within PIF operations, and environmental obligations do not resolve technical enhancement versus biological/environmental caution."
    }
  },
  {
    "id": "samoa-current-2025",
    "period": "Constituição de 1960 e Village Fono Act 1990, consolidados em 31/12/2023; prática relatada em 2024 por FH 2025 e observação OIT adotada em 2024. Exclui alteração constitucional de 2025.",
    "rationale": "Governo parlamentar com alternância e candidaturas tradicionais; Estado de fundamento cristão protege escolha religiosa. Autoridade nacional convive com aldeias de poderes costumeiros substantivos, sanções e limitações de revisão judicial.",
    "caveats": "Quatro direções documentadas, sem qualificação para ranking. Leitura das normas consolidada em 2023 é atribuída à pesquisa documental fornecida; reaberturas próprias falharam. Direitos constitucionais não provam remédio efetivo em matéria costumeira; banimento, trabalho e curfew têm garantias e limites. Nenhuma proposta legislativa de 2024 é tratada como reforma já efetiva. Outros oito eixos continuam desconhecidos.",
    "sources": [
      {
        "title": "Constitution of the Independent State of Samoa — official consolidation as at 31 December 2023",
        "url": "https://www.ag.gov.ws/wp-content/uploads/2024/02/Constitution-of-the-Independent-State-of-Samoa-1960.pdf",
        "note": "Leitura documental atribuída à pesquisa fornecida, acesso em 08/10/2026. Data/versão: Adotada em 28/10/1960; consolidação oficial em 31/12/2023; arquivo disponibilizado em fevereiro de 2024. Escopo: Preâmbulo, arts.1–15/18–21/31–33/42–45/63–66/100–104/104C–G/105–108/111(4) e notas, conforme leitura fornecida. Reabertura própria do PDF com tempo de espera excedido e download 403; exclui emenda 2025."
      },
      {
        "title": "Freedom in the World 2025 — Samoa",
        "url": "https://freedomhouse.org/country/samoa/freedom-world/2025",
        "note": "Leitura documental atribuída à pesquisa fornecida, acesso em 08/10/2026. Data/versão: Relatório de 2025, sem dia de publicação indicado; observações referentes a 2024. Escopo: Visão geral e todos os acontecimentos de 2024, cotejados pelo autor; questionário abreviado não fornece narrativa de todos os critérios."
      },
      {
        "title": "Village Fono Act 1990 — official consolidation as at 31 December 2023",
        "url": "https://www.ag.gov.ws/wp-content/uploads/2024/02/Village-Fono-Act-1990.pdf",
        "note": "Leitura documental atribuída à pesquisa fornecida, acesso em 08/10/2026. Data/versão: Assentimento em 30/07/1990; vigência desde 16/10/1990; consolidação oficial em 31/12/2023. Escopo: Arts.1–12 e notas de revisão 2017/2019/2020/2022, conforme leitura integral fornecida. Reabertura própria do PDF com tempo de espera excedido e download 403; sem auditoria de cada sanção aplicada."
      },
      {
        "title": "Samoa: 2024 Article IV Consultation—Press Release and Staff Report, IMF Country Report 25/32",
        "url": "https://www.imf.org/-/media/files/publications/cr/2025/english/1wsmea2025001-print-pdf.pdf",
        "note": "Leitura documental atribuída à pesquisa fornecida, acesso em 08/10/2026. Data/versão: Publicação em 31/01/2025; relatório técnico e análise de sustentabilidade da dívida concluídos em 16/12/2024. Escopo: Capa, ¶4–6/nota 2/41–43, Anexo I e cobertura de dívida DSA 1/tabela, conforme leitura fornecida; projeções e recomendações não são execução."
      },
      {
        "title": "Observation (CEACR), adopted 2024, published 113rd ILC session (2025): Abolition of Forced Labour Convention No.105 — Samoa",
        "url": "https://normlex.ilo.org/dyn/nrmlx_en/f?p=1000%3A13100%3A0%3A%3ANO%3A13100%3AP13100_COMMENT_ID%2CP13100_COUNTRY_ID%3A4402417%2C103295",
        "note": "Leitura documental atribuída à pesquisa fornecida, acesso em 08/10/2026. Data/versão: Observação adotada em 2024 e publicada em 2025. Escopo: Abertura indexada do art.1(b), trabalho de desenvolvimento econômico e sanções, conforme leitura fornecida; direto sem corpo. Supervisão normativa, não frequência observada."
      }
    ],
    "codings": [
      {
        "axis": "est",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constitution of the Independent State of Samoa — official consolidation as at 31 December 2023",
            "locator": "Articles 31–33 and43;100–104",
            "statement": "O parlamento nacional pode legislar em todo Samoa, enquanto terras costumeiras, títulos e uma justiça distinta têm proteção constitucional.",
            "basis": "norm",
            "publishedDate": "Adopted 1960-10-28; official consolidated version 2023-12-31; web file February 2024",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Village Fono Act 1990 — official consolidation as at 31 December 2023",
            "locator": "Sections 2A–3,5,5A–E,6,9,11–12",
            "statement": "Conselhos de aldeia mantêm regras costumeiras, uso da terra, ordem e sanções sob lei nacional e recurso judicial.",
            "basis": "norm",
            "publishedDate": "Assent 1990-07-30; commencement 1990-10-16; official consolidated version 2023-12-31",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Competência legislativa geral nacional e subordinação legal das aldeias sustentam direção unitária moderada; poderes costumeiros substantivos de regras, terras e sanções impedem centralização forte.",
        "uncertainty": "Poderes Fono não equivalem a soberania constituinte federativa, mas são reais. Há exclusões jurisdicionais para certos residentes em terras públicas, livres ou arrendadas; registro não certifica constitucionalidade. DSA fiscal sem setor subnacional não apaga autoridade comunitária. Corpo primário de 2023 lido pela pesquisa fornecida; reaberturas próprias falharam.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constitution of the Independent State of Samoa — official consolidation as at 31 December 2023",
            "locator": "Articles 18–21,31–33,42–45,63–64",
            "statement": "O governo parlamentar depende dos representantes eleitos e da confiança; há eleições periódicas e mecanismo mínimo de representação feminina.",
            "basis": "norm",
            "publishedDate": "Adopted 1960-10-28; official consolidated version 2023-12-31; web file February 2024",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Freedom in the World 2025 — Samoa",
            "locator": "Overview; March 2024 electoral amendment item",
            "statement": "A vitória da oposição em 2021 continuava efetiva em 2024; somente chefes tradicionais de família podiam concorrer e eleitores no exterior precisavam retornar.",
            "basis": "practice",
            "publishedDate": "2025 report; exact publication day undated; observations 2024",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Eleições periódicas, governo dependente de confiança parlamentar e alternância efetiva sustentam direção democrática moderada, com restrição substantiva de candidaturas tradicionais e barreiras ao voto no exterior.",
        "uncertainty": "Somente Matai podiam concorrer segundo o relato de 2024, não inferência isolada do art.45; retorno era exigido de eleitores no exterior. Nomeação da chefia de Estado e elegibilidade estatutária permanecem. Longa dominância partidária não prova autocracia.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constitution of the Independent State of Samoa — official consolidation as at 31 December 2023",
            "locator": "Articles 4–15;105–108;104C(8)",
            "statement": "Liberdade, processo justo e expressão ordinários têm garantias, com derrogações de emergência e regime separado de revisão nas matérias costumeiras.",
            "basis": "norm",
            "publishedDate": "Adopted 1960-10-28; official consolidated version 2023-12-31; web file February 2024",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Freedom in the World 2025 — Samoa",
            "locator": "Overview; December 2024 court-reform item",
            "statement": "O relato descreve liberdades geralmente respeitadas, mas a ausência do tribunal costumeiro de apelação deixava processos sem solução; a reversão legislativa ainda era proposta.",
            "basis": "practice",
            "publishedDate": "2025 report; exact publication day undated; observations 2024",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Village Fono Act 1990 — official consolidation as at 31 December 2023",
            "locator": "Sections 5(2)(g),5(3),6,9,11",
            "statement": "Conselhos podem aplicar toque de recolher, multas, trabalho e banimento, com oportunidades de resposta e recurso ao Tribunal de Terras e Títulos.",
            "basis": "norm",
            "publishedDate": "Assent 1990-07-30; commencement 1990-10-16; official consolidated version 2023-12-31",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Observation (CEACR), adopted 2024, published 113rd ILC session (2025): Abolition of Forced Labour Convention No.105 — Samoa",
            "locator": "Article 1(b), indexed opening paragraphs",
            "statement": "A observação da OIT adotada em 2024 identifica deveres de trabalho para desenvolvimento econômico apoiados em sanções da aldeia.",
            "basis": "declaration",
            "publishedDate": "Adopted 2024; published 2025",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Garantias gerais de liberdade, processo e expressão e relato de liberdades geralmente respeitadas sustentam direção moderada de liberdade; sanções costumeiras e lacunas de remédio vedam intensidade forte.",
        "uncertainty": "Art.4 exclui revisão da ParteIX; ordens de emergência podem afastar ParteII. Fono admite curfew, multa, trabalho e banimento com aviso, resposta e recurso. Não se estabelece frequência em 2024; observação OIT é supervisão legal, não prevalência de trabalho forçado. Tribunal costumeiro de apelação não havia sido criado em dezembro 2024 e reversão era só proposta.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "rel",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constitution of the Independent State of Samoa — official consolidation as at 31 December 2023",
            "locator": "Preamble; Articles 1(3),11–12,111(4)",
            "statement": "O Estado declara fundamentos cristãos, mas protege mudar e praticar religião, escolas confessionais e afirmação alternativa ao juramento.",
            "basis": "norm",
            "publishedDate": "Adopted 1960-10-28; official consolidated version 2023-12-31; web file February 2024",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Fundamento cristão explicitamente constitutivo do Estado sustenta direção religiosa moderada; proteção da escolha de fé, instrução e afirmação alternativa impede identificar teocracia ou coerção religiosa geral.",
        "uncertainty": "Liberdade de mudar religião, recusar instrução de outra fé e manter escolas confessionais é contraponto. Norma consolidada 31/12/2023 não audita prática de todas as aldeias nem incorpora alteração de 2025.",
        "reviewedOn": "2026-10-08"
      }
    ],
    "unknownAxisReasons": {
      "imi": "Outbound labour schemes and nationality rules do not establish incoming migration/cultural integration policy.",
      "dip": "No verified general diplomatic/military posture for 2024; absence of regular army, if shown, would not suffice alone.",
      "int": "No broad involvement/nonintervention program and implementation located.",
      "eco": "Customary land is not state ownership; SOE debt and existence do not establish public/private predominance across economy/services.",
      "con": "Targeted controls and a development plan/agency are insufficient for general allocation weight.",
      "com": "WTO facilitation and limited restrictions lack full tariffs, agreements and actual 2024 implementation audit.",
      "mor": "Constitutional tradition and Fono customary jurisdiction are relevant, but insufficiently broad practice across social change/customs to claim whole moral direction.",
      "tec": "Environmental land rules, health regulations and generic investment policy do not resolve technology-versus-biology construct."
    }
  },
  {
    "id": "st-kitts-and-nevis-current-2025",
    "period": "Norma constitucional de 1983 em reprodução inglesa, sem histórico completo de emendas; prática relatada em 2024 por FH 2025 e comunicados de julho/setembro de 2024. Página governamental sem data conserva referência histórica a ElizabethII.",
    "rationale": "Democracia parlamentar com eleições competitivas e autonomia constitucional ampla e assimétrica de Nevis. Liberdades judiciais coexistem com exceções de emergência, restrições de participação e medidas anticrime de 2024.",
    "caveats": "Três direções documentadas, sem qualificação para ranking. Reprodução primária em inglês, sem alegar tradução de outro idioma ou consolidação 2024. Autonomia de Nevis não é ilimitada; participação e emergência têm exceções. Comunicados de projetos aprovados não demonstram execução integral. Outros nove eixos continuam desconhecidos, inclusive relação geral Igreja–Estado apesar das garantias de consciência.",
    "sources": [
      {
        "title": "Saint Kitts and Nevis 1983 Constitution — Constitute text",
        "url": "https://www.constituteproject.org/constitution/St_Kitts_and_Nevis_1983?lang=en",
        "note": "Leitura documental atribuída à pesquisa fornecida, acesso em 08/10/2026. Data/versão: Constituição de 1983; publicação editorial da página sem data. Escopo: Preâmbulo,1–19/26–29/36–38/46–50/100–113 e Anexo 5, Parte 1 conforme leitura fornecida; cotejo próprio do corpo 3–19,26–28 parcialmente,37,100–104/106–113 e trechos do Anexo 5. Sem certificação de todas as emendas; notas de tópico não são texto constitucional."
      },
      {
        "title": "The Constitution — Government of St. Kitts and Nevis",
        "url": "https://www.gov.kn/the-constitution/",
        "note": "Leitura documental atribuída à pesquisa fornecida, acesso em 08/10/2026. Data/versão: Página sem data editorial. Escopo: Introdução, contexto histórico, Nevis e estrutura do governo, linhas 62–80 conforme leitura fornecida. Referência antiga a Elizabeth II mantida como limite, não status 2024."
      },
      {
        "title": "Freedom in the World 2025 — St. Kitts and Nevis",
        "url": "https://freedomhouse.org/country/st-kitts-and-nevis/freedom-world/2025",
        "note": "Leitura documental atribuída à pesquisa fornecida, acesso em 08/10/2026. Data/versão: Relatório de 2025, sem dia de publicação indicado; observações referentes a 2024. Escopo: Visão geral e todos os acontecimentos de 2024, cotejados pelo autor; relato abreviado e nenhum uso ordinal das notas FH."
      },
      {
        "title": "St. Kitts and Nevis enhances transparency with passage of Freedom of Information (Amendment) Bill, 2024 — SKNIS",
        "url": "https://www.sknis.gov.kn/2024/07/05/st-kitts-and-nevis-enhances-transparency-with-passage-of-freedom-of-information-amendment-bill-2024/",
        "note": "Leitura documental atribuída à pesquisa fornecida, acesso em 08/10/2026. Data/versão: 05/07/2024. Escopo: Corpo 43–60 conforme leitura fornecida; aprovação de projeto e comissário, com exceções. Não certifica vigência ou eficácia de acesso."
      },
      {
        "title": "National Assembly approves Judge Alone Trials Bill, 2024, to modernise criminal justice system — SKNIS",
        "url": "https://www.sknis.gov.kn/2024/09/18/national-assembly-approves-judge-alone-trials-bill-2024-to-modernise-criminal-justice-system/",
        "note": "Leitura documental atribuída à pesquisa fornecida, acesso em 08/10/2026. Data/versão: 18/09/2024. Escopo: Corpo 43–59 conforme leitura fornecida; salvaguardas declaradas de decisão escrita/gestão/recurso e maioria de julgamentos por júri. Lei final não recuperada."
      },
      {
        "title": "St. Kitts and Nevis: Staff Concluding Statement of the 2024 Article IV Mission — IMF",
        "url": "https://www.imf.org/en/news/articles/2024/03/01/cs30124-st-kitts-and-nevis-concluding-statement-of-the-2024-article-iv-mission",
        "note": "Leitura documental atribuída à pesquisa fornecida, acesso em 08/10/2026. Data/versão: 01/03/2024. Escopo: Introdução e 213–224 conforme leitura fornecida; turismo, orçamento, CBI e energia e investimento. Insuficiente para propriedade ou coordenação de toda economia."
      }
    ],
    "codings": [
      {
        "axis": "est",
        "position": "strong-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Saint Kitts and Nevis 1983 Constitution — Constitute text",
            "locator": "Sections 37,100–113;Schedule 5 Part 1",
            "statement": "Nevis possui legislatura, executivo, matérias legislativas exclusivas, arranjos fiscais e caminho constitucional condicionado de separação.",
            "basis": "norm",
            "publishedDate": "1983 constitution; editorial web publication undated",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "The Constitution — Government of St. Kitts and Nevis",
            "locator": "Structure of Government; Nevis; introduction",
            "statement": "A explicação governamental descreve instituições próprias de Nevis e governo nacional direto para São Cristóvão.",
            "basis": "declaration",
            "publishedDate": "undated webpage",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Legislatura própria com campos exclusivos, executivo, finanças e separação condicionada de Nevis sustentam descentralização constitucional forte apesar da assimetria entre as ilhas.",
        "uncertainty": "São Cristóvão não possui legislatura insular equivalente. Arts.37/103 preservam limites legislativos nacionais;106 é competência administrativa, inclusive educação/saúde, e não todo campo legislativo exclusivo. Política geral e segurança nacionais prevalecem nos 106–107. Página oficial sem data ainda menciona ElizabethII e não certifica status ou consolidação 2024.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "rep",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Saint Kitts and Nevis 1983 Constitution — Constitute text",
            "locator": "Sections 26–29,36,47–50;101–102",
            "statement": "Representantes de circunscrições são eleitos diretamente, com eleições periódicas, revisão judicial eleitoral e minoria de legisladores nomeados.",
            "basis": "norm",
            "publishedDate": "1983 constitution; editorial web publication undated",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Freedom in the World 2025 — St. Kitts and Nevis",
            "locator": "Overview; 2024 CBI and information-law items",
            "statement": "Eleições competitivas e confiáveis e liberdades geralmente respeitadas coexistem com problemas de transparência, corrupção e marginalização política LGBT.",
            "basis": "practice",
            "publishedDate": "2025 report; exact publication day undated; observations 2024",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Representação eleita, periodicidade e revisão judicial, corroboradas por histórico de eleições competitivas e confiáveis, sustentam direção democrática forte com limites de participação e transparência.",
        "uncertainty": "Minoria de senadores nomeada, exclusão de ministros religiosos e condições de cidadania/nascimento parental limitam participação irrestrita. Corrupção, transparência CBI e marginalização política LGBT são contrapontos. Publicação 2025 não significa nova eleição naquele ano; não é consolidação de todas as emendas.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Saint Kitts and Nevis 1983 Constitution — Constitute text",
            "locator": "Sections 3–19",
            "statement": "Liberdade, privacidade, processo justo, expressão e associação recebem proteção judicial, com restrições de interesse público e revisão da detenção de emergência.",
            "basis": "norm",
            "publishedDate": "1983 constitution; editorial web publication undated",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Freedom in the World 2025 — St. Kitts and Nevis",
            "locator": "Overview; anti-crime measures; information-law item",
            "statement": "Em 2024 liberdades geralmente respeitadas e mudanças no acesso à informação coexistiram com toque de recolher para menores, penas de armas agravadas e certos julgamentos só por juiz.",
            "basis": "practice",
            "publishedDate": "2025 report; exact publication day undated; observations 2024",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "St. Kitts and Nevis enhances transparency with passage of Freedom of Information (Amendment) Bill, 2024 — SKNIS",
            "locator": "Passage and Commissioner amendment paragraphs",
            "statement": "Em julho de 2024 o parlamento aprovou mudanças relativas ao comissário de informação; permaneciam exceções de segurança nacional e outros interesses.",
            "basis": "practice",
            "publishedDate": "2024-07-05",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "National Assembly approves Judge Alone Trials Bill, 2024, to modernise criminal justice system — SKNIS",
            "locator": "Scope and safeguard paragraphs",
            "statement": "A aprovação relatada em setembro de 2024 permitia certos julgamentos criminais só por juiz; o governo descreveu decisões escritas, gestão de processos e recursos.",
            "basis": "practice",
            "publishedDate": "2024-09-18",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Proteções gerais judiciais de liberdade, privacidade, processo, expressão e associação, com liberdades geralmente respeitadas em 2024, sustentam direção moderada de liberdade; medidas anticrime e emergência impedem intensidade forte.",
        "uncertainty": "Pena de morte permanece no texto; revisão de emergência pode ter recomendação não vinculante e representação não custeada. Segurança e moralidade permitem restrições. Curfew de menores e penas agravadas são contrapontos. Julgamento por juiz não é arbitrário por si; comunicados de aprovação relatam salvaguardas, sem certificar inteiro teor, início de vigência ou eficiência observada da lei.",
        "reviewedOn": "2026-10-08"
      }
    ],
    "unknownAxisReasons": {
      "imi": "CBI and anti-smuggling changes do not map broad cultural integration/diversity policy.",
      "dip": "No 2024 broad military/diplomatic strategy and practice read.",
      "int": "No general external-involvement/nonintervention mapping.",
      "eco": "Tourism, CBI revenue and electricity projects are not whole-economy ownership evidence.",
      "con": "Fiscal policy/subsidies do not establish national balance of planning versus market coordination.",
      "com": "State 2024 investment climate page returned forbidden; no substitute comprehensive 2024 tariff/agreements evidence established.",
      "rel": "Normative conscience and clerical-office rules located; no adequate dated 2024 institutional-practice corroboration or comprehensive church-state legal audit.",
      "mor": "LGBT marginalization alone cannot represent all social customs and change.",
      "tec": "Renewable projects and general sustainability language do not settle the technical-versus-biological/environmental construct."
    }
  }
];

/** Later useful changes, including source-only/rationale changes, survive an exact whole-object guard. */
export function extendNative14CurrentCountries(entries: ReferenceEntry[]): ReferenceEntry[] {
 return entries.map(entry => {
  const before = native14CurrentCountriesBefore.find(item => item.id === entry.id);
  if (!before || JSON.stringify(before) !== JSON.stringify(entry)) return entry;
  const row = native14CurrentCountriesProposals.find(item => item.id === entry.id)!;
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
