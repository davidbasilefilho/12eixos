import type { ReferenceEntry, ReferenceSource, AxisKey } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';

interface ReconciliationDefinition { before: ReferenceEntry; addedSources: ReferenceSource[]; codings: ReferenceAxisCoding[]; topLevelPatch: Partial<ReferenceEntry>; afterHasUnknownReasons: boolean }
// Complete immutable raw-record baselines, bound to the independently reviewed candidate seals.
export const researchRecords20261009Definitions = [
  {
    "before": {
      "id": "atiku-abubakar",
      "name": "Atiku Abubakar",
      "aliases": [
        "Alhaji Atiku Abubakar"
      ],
      "kind": "person",
      "category": "public-figure",
      "period": "Programa da campanha2023; atividade reportada28/05/2026 sem atualizar automaticamente posições",
      "sources": [
        {
          "title": "Atiku Abubakar — My Covenant with Nigerians, programa da campanha2023, PDF74p",
          "url": "https://elections.civichive.org/wp-content/uploads/2022/10/Atikus-5-Point-Development-Agenda-Abridged.pdf",
          "note": "Programa primário arquivado pelo CivicHive; endosso pessoal p6 física57–66. Áreas indicadas efetivamente lidas; não alegamos leitura integral das74p. Hospedagem2022/10 não certifica dia editorial."
        },
        {
          "title": "TheCable — atividade de Atiku Abubakar,28/05/2026",
          "url": "https://www.thecable.ng/nobody-was-defeated-atiku-calls-for-unity-after-winning-adc-presidential-primary/",
          "note": "Cabeçalho46 e corpo54–91 realmente lidos. Reportagem secundária usada exclusivamente para atividade/identidade em2026; acusações e resultado eleitoral não auditados nem codificados."
        },
        {
          "title": "My Covenant with Nigerians — programa da campanha de 2023",
          "url": "https://elections.civichive.org/wp-content/uploads/2022/10/Atikus-5-Point-Development-Agenda-Abridged.pdf",
          "note": "Publicação: Campanha 2023; undated quanto a dia/mês editorial, caminho de hospedagem 2022/10 não certifica data. Consulta08/10/2026; declaração, não implementação. Programa primário nominalmente endossado57–66, arquivado por CivicHive. Conferência atual: texto extraído selecionado0–370/293–543/533–595/747–795/1102–1344/1346–1394, não todas as74p. Download local retornou403; capturas solicitadas não foram visualizadas nesta conferência. O relatório externo relata inspeção visual separada das páginas35/65/72; não é nossa nova autenticação de bytes."
        }
      ],
      "caveats": "Programa pessoalmente endossado de campanha de 2023, sem dia editorial certificado; atividade reportada2026 não renova posições. Propostas normativas, não resultados. Regulação, PPP, garantias federais e proteção comercial doméstica limitam as direções; integração multilateral não equivale a comércio sem barreiras. Objeto e fontes anteriores íntegros arquivados.",
      "rationale": "Propõe autonomia federativa, representação democrática, liderança privada, preços de mercado, inovação e integração comercial limitada.",
      "vec": {
        "est": 60,
        "rep": 60,
        "pod": 50,
        "imi": 50,
        "dip": 50,
        "int": 50,
        "eco": 40,
        "con": 40,
        "com": 50,
        "rel": 50,
        "mor": 50,
        "tec": 60
      },
      "evidence": {
        "est": "medium",
        "rep": "medium",
        "eco": "medium",
        "con": "medium",
        "tec": "medium"
      },
      "axisEvidence": {
        "est": {
          "sourceTitles": [
            "My Covenant with Nigerians — programa da campanha de 2023"
          ],
          "rationale": "Federalismo descentralizado. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Mantém padrões e implementação federais; não secessão. Texto sugere possível sobreposição entre devolução da entrega e implementação central."
        },
        "rep": {
          "sourceTitles": [
            "My Covenant with Nigerians — programa da campanha de 2023"
          ],
          "rationale": "Orientação democrática ampla. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: É compromisso normativo de campanha. Prática não auditada."
        },
        "eco": {
          "sourceTitles": [
            "My Covenant with Nigerians — programa da campanha de 2023"
          ],
          "rationale": "Propriedade e provisão privadas multissetoriais. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: PPP e serviços sociais públicos permanecem. Não privatização universal."
        },
        "con": {
          "sourceTitles": [
            "My Covenant with Nigerians — programa da campanha de 2023"
          ],
          "rationale": "Alocação predominantemente por mercados. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Incentivos, crédito público e proteção seletiva. Não laissez-faire integral."
        },
        "tec": {
          "sourceTitles": [
            "My Covenant with Nigerians — programa da campanha de 2023"
          ],
          "rationale": "Adoção tecnológica ampla. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Prevenção sanitária/ambiente limpo na p.49. Não apoio irrestrito a toda tecnologia."
        }
      },
      "coding": {
        "est": {
          "axis": "est",
          "position": "moderate-first",
          "confidence": "medium",
          "claims": [
            {
              "locator": "PDFp65 física;1198–1215, emendas constitucionais e lista concorrente.",
              "statement": "Propõe emendas constitucionais para transferir competências à lista concorrente e autonomia financeira dos governos locais.",
              "basis": "declaration",
              "publishedDate": "Campanha 2023; undated quanto a dia/mês editorial, caminho de hospedagem 2022/10 não certifica data.",
              "accessedDate": "2026-10-08",
              "sourceTitle": "My Covenant with Nigerians — programa da campanha de 2023"
            }
          ],
          "rationale": "Federalismo descentralizado.",
          "uncertainty": "Mantém padrões e implementação federais; não secessão. Texto sugere possível sobreposição entre devolução da entrega e implementação central.",
          "relatedQuestionIds": [
            "estrutura_03",
            "estrutura_05",
            "estrutura_19"
          ],
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
              "locator": "PDFp62 física1110–1155; p71,1325–1327.",
              "statement": "Exige voto efetivo, participação organizada, transparência e separação de poderes.",
              "basis": "declaration",
              "publishedDate": "Campanha 2023; undated quanto a dia/mês editorial, caminho de hospedagem 2022/10 não certifica data.",
              "accessedDate": "2026-10-08",
              "sourceTitle": "My Covenant with Nigerians — programa da campanha de 2023"
            }
          ],
          "rationale": "Orientação democrática ampla.",
          "uncertainty": "É compromisso normativo de campanha. Prática não auditada.",
          "relatedQuestionIds": [
            "representacao_01",
            "representacao_07"
          ],
          "reviewedOn": "2026-10-08",
          "version": "editorial-ordinal-v1",
          "value": 60,
          "range": [
            55,
            70
          ]
        },
        "eco": {
          "axis": "eco",
          "position": "moderate-second",
          "confidence": "medium",
          "claims": [
            {
              "locator": "PDFp12–13 físicas80–112; p22,251–269.",
              "statement": "Prioriza liderança privada, quebra monopólios públicos multissetoriais e privatiza refinarias, preservando regulação e parcerias.",
              "basis": "declaration",
              "publishedDate": "Campanha 2023; undated quanto a dia/mês editorial, caminho de hospedagem 2022/10 não certifica data.",
              "accessedDate": "2026-10-08",
              "sourceTitle": "My Covenant with Nigerians — programa da campanha de 2023"
            }
          ],
          "rationale": "Propriedade e provisão privadas multissetoriais.",
          "uncertainty": "PPP e serviços sociais públicos permanecem. Não privatização universal.",
          "relatedQuestionIds": [
            "economia_02",
            "economia_03",
            "economia_06"
          ],
          "reviewedOn": "2026-10-08",
          "version": "editorial-ordinal-v1",
          "value": 40,
          "range": [
            30,
            45
          ]
        },
        "con": {
          "axis": "con",
          "position": "moderate-second",
          "confidence": "medium",
          "claims": [
            {
              "locator": "PDFp12 física80–112; p19,186–203; p30,429–466; p36,559–573.",
              "statement": "Prioriza mercado nos preços e desregulação econômica.",
              "basis": "declaration",
              "publishedDate": "Campanha 2023; undated quanto a dia/mês editorial, caminho de hospedagem 2022/10 não certifica data.",
              "accessedDate": "2026-10-08",
              "sourceTitle": "My Covenant with Nigerians — programa da campanha de 2023"
            }
          ],
          "rationale": "Alocação predominantemente por mercados.",
          "uncertainty": "Incentivos, crédito público e proteção seletiva. Não laissez-faire integral.",
          "relatedQuestionIds": [
            "controle_02",
            "controle_04",
            "controle_17"
          ],
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
          "position": "moderate-first",
          "confidence": "medium",
          "claims": [
            {
              "locator": "PDFp14 física125–127; p25,317–318; p26,369–385; p33,501–523.",
              "statement": "Promove aplicações digitais multissetoriais e mecanização agrícola.",
              "basis": "declaration",
              "publishedDate": "Campanha 2023; undated quanto a dia/mês editorial, caminho de hospedagem 2022/10 não certifica data.",
              "accessedDate": "2026-10-08",
              "sourceTitle": "My Covenant with Nigerians — programa da campanha de 2023"
            }
          ],
          "rationale": "Adoção tecnológica ampla.",
          "uncertainty": "Prevenção sanitária/ambiente limpo na p.49. Não apoio irrestrito a toda tecnologia.",
          "relatedQuestionIds": [
            "tecnologia_01",
            "tecnologia_02"
          ],
          "reviewedOn": "2026-10-08",
          "version": "editorial-ordinal-v1",
          "value": 60,
          "range": [
            55,
            70
          ]
        }
      },
      "unknownAxisReasons": {
        "com": "Integração continental e comércio multilateral são propostas reais, mas não estabelecem preferência geral de abertura diante de proteção temporária, incentivos a insumos nacionais e compras públicas nacionais."
      }
    },
    "addedSources": [],
    "codings": [
      {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "My Covenant with Nigerians — programa da campanha de 2023",
            "locator": "PDF página física72 (P71), texto1346–1367 e1368–1391; contraponto segurança 1216–1295",
            "statement": "Define diplomacia econômica como núcleo geral de sua política externa, com relações mutuamente benéficas e contenção do tráfico de armas leves.",
            "basis": "declaration",
            "publishedDate": "programa da campanha 2023; dia e mês editoriais não indicados",
            "accessedDate": "2026-10-09"
          },
          {
            "sourceTitle": "My Covenant with Nigerians — programa da campanha de 2023",
            "locator": "PDF página física 67 (P66), texto 1250–1253; segurança 1216–1295 como contraponto",
            "statement": "Propõe resolver conflitos por instrumentos alternativos, incluindo diplomacia e boa vizinhança, junto de inteligência, controles de fronteira e instituições tradicionais.",
            "basis": "declaration",
            "publishedDate": "programa da campanha 2023; dia e mês editoriais não indicados",
            "accessedDate": "2026-10-09"
          }
        ],
        "rationale": "Prioridade diplomática e econômica explícita para a política externa geral.",
        "uncertainty": "Ainda inclui defesa externa na segurança nacional, financiamento e aumento policial; não confundir polícia com ampliação militar. Não proíbe toda força nem certifica execução. Prioridade econômica não significa pacifismo absoluto; magnitude somente moderada.",
        "relatedQuestionIds": [
          "diplomacia_02",
          "diplomacia_06"
        ],
        "reviewedOn": "2026-10-09"
      }
    ],
    "topLevelPatch": {},
    "afterHasUnknownReasons": true
  },
  {
    "before": {
      "id": "ilhan-omar",
      "kind": "person",
      "category": "public-figure",
      "name": "Ilhan Omar",
      "period": "Posições legislativas autodeclaradas na página Issues consultada em 7 de outubro de 2026; página sem data de publicação. Ensaio próprio de 21/01/2021 acrescentado como recorte datado separado, sem renovação integral em 2026.",
      "vec": {
        "est": 50,
        "rep": 60,
        "pod": 40,
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
        "rep": "medium",
        "pod": "medium",
        "imi": "medium",
        "dip": "medium"
      },
      "axisEvidence": {
        "rep": {
          "sourceTitles": [
            "Rep. Omar Essay in the Atlantic on Protecting Our Democracy — 2021-01-21"
          ],
          "rationale": "Reforma geral da representação eleitoral, ampliação de acesso e transição pacífica de poder. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Ensaio próprio de 21/01/2021, sem renovação integral em 2026. Responsabilização e remoção de agentes que colaboraram com violência política, reforma de tribunais e financiamento político são contrapontos; não supressão genérica da oposição."
        },
        "pod": {
          "sourceTitles": [
            "Rep. Omar Essay in the Atlantic on Protecting Our Democracy — 2021-01-21",
            "Immigration — Representative Ilhan Omar — página institucional sem data"
          ],
          "rationale": "Rejeita expansão geral do Estado policial por medo ou vingança, com justiça e direitos universais. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Ensaio de 21/01/2021, sem renovação em 2026; exige responsabilização de violência política e a página migratória admite agência substituta de segurança nacional. Não abolição de toda coerção, regras processuais completas ou execução auditada."
        },
        "imi": {
          "sourceTitles": [
            "Immigration — Representative Ilhan Omar — página institucional sem data"
          ],
          "rationale": "Admissão e inclusão migratória ampla, valorizando diversidade e sem criminalização por origem ou religião. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Página sem data; notícias do índice não datam o programa. Agência substituta preserva segurança nacional; não admissão sem regras ou modelo completo de preservação de idiomas e costumes."
        },
        "dip": {
          "sourceTitles": [
            "Issues — Representative Ilhan Omar — página institucional sem data"
          ],
          "rationale": "Prioriza diplomacia e engajamento econômico e cultural; força militar somente como último recurso. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Admite uso de força; mantém engajamento internacional ativo. Não derivar INT automaticamente."
        }
      },
      "coding": {
        "rep": {
          "axis": "rep",
          "position": "moderate-first",
          "confidence": "medium",
          "claims": [
            {
              "locator": "Parágrafos Reform requires… e But we can’t stop there…",
              "statement": "Defende transição pacífica, ampliação do voto, fim de gerrymandering e reformas eleitorais representativas.",
              "basis": "declaration",
              "publishedDate": "2021-01-21",
              "accessedDate": "2026-10-08",
              "sourceTitle": "Rep. Omar Essay in the Atlantic on Protecting Our Democracy — 2021-01-21"
            }
          ],
          "rationale": "Reforma geral da representação eleitoral, ampliação de acesso e transição pacífica de poder.",
          "uncertainty": "Ensaio próprio de 21/01/2021, sem renovação integral em 2026. Responsabilização e remoção de agentes que colaboraram com violência política, reforma de tribunais e financiamento político são contrapontos; não supressão genérica da oposição.",
          "relatedQuestionIds": [
            "representacao_01",
            "representacao_07"
          ],
          "reviewedOn": "2026-10-08",
          "version": "editorial-ordinal-v1",
          "value": 60,
          "range": [
            55,
            70
          ]
        },
        "pod": {
          "axis": "pod",
          "position": "moderate-second",
          "confidence": "medium",
          "claims": [
            {
              "locator": "Penúltimo parágrafo, We also cannot fall into the trap…",
              "statement": "Rejeita expandir aparato de segurança ou Estado policial por medo; exige dignidade e direitos de todos.",
              "basis": "declaration",
              "publishedDate": "2021-01-21",
              "accessedDate": "2026-10-08",
              "sourceTitle": "Rep. Omar Essay in the Atlantic on Protecting Our Democracy — 2021-01-21"
            },
            {
              "locator": "Parágrafos 2–4; linhas 8–10",
              "statement": "Rejeita policiamento migratório militarizado e presunção de criminalidade por origem ou religião.",
              "basis": "declaration",
              "publishedDate": "undated; página disponível na consulta de 2026-10-08, sem data editorial inferida",
              "accessedDate": "2026-10-08",
              "sourceTitle": "Immigration — Representative Ilhan Omar — página institucional sem data"
            }
          ],
          "rationale": "Rejeita expansão geral do Estado policial por medo ou vingança, com justiça e direitos universais.",
          "uncertainty": "Ensaio de 21/01/2021, sem renovação em 2026; exige responsabilização de violência política e a página migratória admite agência substituta de segurança nacional. Não abolição de toda coerção, regras processuais completas ou execução auditada.",
          "relatedQuestionIds": [
            "poder_03",
            "poder_07"
          ],
          "reviewedOn": "2026-10-08",
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
              "locator": "Quatro parágrafos programáticos completos da página Immigration, anteriores ao índice de notícias.",
              "statement": "Valoriza diversidade migrante; propõe acolhimento sem discriminação, cidadania e reassentamento de refugiados.",
              "basis": "declaration",
              "publishedDate": "undated; página disponível na consulta de 2026-10-08, sem data editorial inferida",
              "accessedDate": "2026-10-08",
              "sourceTitle": "Immigration — Representative Ilhan Omar — página institucional sem data"
            }
          ],
          "rationale": "Admissão e inclusão migratória ampla, valorizando diversidade e sem criminalização por origem ou religião.",
          "uncertainty": "Página sem data; notícias do índice não datam o programa. Agência substituta preserva segurança nacional; não admissão sem regras ou modelo completo de preservação de idiomas e costumes.",
          "relatedQuestionIds": [
            "imigracao_12",
            "imigracao_19"
          ],
          "reviewedOn": "2026-10-08",
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
              "locator": "Foreign Policy, linhas 24–25",
              "statement": "Quer tropas de volta, diplomacia e engajamento cultural/econômico; força militar como último recurso.",
              "basis": "declaration",
              "publishedDate": "undated; página disponível na consulta de 2026-10-08, sem data editorial inferida",
              "accessedDate": "2026-10-08",
              "sourceTitle": "Issues — Representative Ilhan Omar — página institucional sem data"
            }
          ],
          "rationale": "Prioriza diplomacia e engajamento econômico e cultural; força militar somente como último recurso.",
          "uncertainty": "Admite uso de força; mantém engajamento internacional ativo. Não derivar INT automaticamente.",
          "relatedQuestionIds": [
            "diplomacia_01"
          ],
          "reviewedOn": "2026-10-08",
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
          "title": "Issues — Representative Ilhan Omar",
          "url": "https://omar.house.gov/issues",
          "note": "Gabinete de Ilhan Omar, Câmara dos EUA. Publicação: sem data indicada. Consulta documental em 7/10/2026; posições declaradas, não prova de implementação. Leitura original pelo agente de pesquisa; a tentativa independente de reabertura retornou 403."
        },
        {
          "title": "Escritório Omar — comunicado nominal conjunto23/07/2026, cláusula do índice",
          "url": "https://omar.house.gov/media/press-releases",
          "note": "Identidade/atividade2026 apenas. Índice oficial94–97: data e cláusula completa com Omar e Rashida Tlaib entre membros que emitiram declaração. Corpo da cláusula do índice efetivamente lido; comunicado interno completo retornou InternalError e não é declarado reaberto. Atividade nominal conjunta emitida, sem certificação de presença física ou toda posição de2026. Uma fonte compartilhada pelos dois nomes."
        },
        {
          "title": "Issues — Representative Ilhan Omar — página institucional sem data",
          "url": "https://omar.house.gov/issues",
          "note": "Publicação: undated; página disponível na consulta de 2026-10-08, sem data editorial inferida Consulta08/10/2026; declaração, não implementação. Texto próprio institucional recuperado integralmente no índice; abertura direta nesta conferência falhou403 ou retornou metadados sem corpo. Notícias do índice não datam o programa, alegações e imagens não auditadas. "
        },
        {
          "title": "Immigration — Representative Ilhan Omar — página institucional sem data",
          "url": "https://omar.house.gov/issues/immigration",
          "note": "Publicação: undated; página disponível na consulta de 2026-10-08, sem data editorial inferida Consulta08/10/2026; declaração, não implementação. Texto próprio institucional recuperado integralmente no índice; abertura direta nesta conferência falhou403 ou retornou metadados sem corpo. Notícias do índice não datam o programa, alegações e imagens não auditadas. "
        },
        {
          "title": "Education — Representative Ilhan Omar — página institucional sem data",
          "url": "https://omar.house.gov/issues/education",
          "note": "Publicação: undated; página disponível na consulta de 2026-10-08, sem data editorial inferida Consulta08/10/2026; declaração, não implementação. Texto próprio institucional recuperado integralmente no índice; abertura direta nesta conferência falhou403 ou retornou metadados sem corpo. Notícias do índice não datam o programa, alegações e imagens não auditadas. "
        },
        {
          "title": "Healthcare — Representative Ilhan Omar — página institucional sem data",
          "url": "https://omar.house.gov/issues/healthcare",
          "note": "Publicação: undated; página disponível na consulta de 2026-10-08, sem data editorial inferida Consulta08/10/2026; declaração, não implementação. Texto próprio institucional recuperado integralmente no índice; abertura direta nesta conferência falhou403 ou retornou metadados sem corpo. Notícias do índice não datam o programa, alegações e imagens não auditadas. Pagador único não demonstra propriedade dos prestadores; autonomia reprodutiva permanece pesquisa de alcance limitado."
        },
        {
          "title": "Rep. Omar Essay in the Atlantic on Protecting Our Democracy — 2021-01-21",
          "url": "https://omar.house.gov/media/in-the-news/rep-omar-essay-atlantic-protecting-our-democracy",
          "note": "Publicação: 2021-01-21 Consulta08/10/2026; declaração, não implementação. Texto próprio institucional recuperado integralmente no índice; abertura direta nesta conferência falhou403 ou retornou metadados sem corpo. Notícias do índice não datam o programa, alegações e imagens não auditadas. Ensaio próprio de 21/01/2021, sem renovação em 2026; responsabilização por violência política acompanha limites ao Estado policial."
        }
      ],
      "rationale": "Defende inclusão migratória, diplomacia e, no ensaio2021, reforma democrática e limites ao Estado policial.",
      "caveats": "Ensaio individual de 21/01/2021 e páginas institucionais sem data permanecem recortes separados; atividade2026 não renova o ensaio. Direitos e diplomacia são declarações, não resultados; agência migratória substituta preserva segurança nacional e violência política exige responsabilização. Financiamento de saúde/educação e normas de salários/licenças/energia não provam propriedade geral ou planejamento econômico. Reprodução oficial indexada distingue falhas de acesso direto. Objeto e fontes anteriores íntegros arquivados.",
      "unknownAxisReasons": {
        "eco": "Pagador único e educação gratuita especificam financiamento/acesso, sem regime geral de propriedade dos prestadores ou da produção.",
        "con": "Salário mínimo, licença remunerada e investimento energético não estabelecem regra geral de coordenação da alocação econômica.",
        "mor": "Direitos reprodutivos claros permanecem pesquisa, sem amplitude adicional de costumes suficiente para graduação integral."
      }
    },
    "addedSources": [
      {
        "title": "Foreign Policy — Representative Ilhan Omar",
        "url": "https://omar.house.gov/issues/foreign-policy",
        "note": "Página institucional sem data editorial. Texto programático completo de quatro parágrafos recuperado no índice oficial em 09/10/2026; acesso direto retornou InternalError. Força admitida como último recurso e engajamento internacional persistem; não execução."
      },
      {
        "title": "Rep. Ilhan Omar Introduces Legislation to Hold Brunei Accountable for Brutal Penal Code",
        "url": "https://omar.house.gov/media/press-releases/rep-ilhan-omar-introduces-legislation-hold-brunei-accountable-brutal-penal",
        "note": "10/05/2019. Cabeçalho, fala própria integral e descrição do projeto recuperados no índice oficial em 09/10/2026; acesso direto 403. Defesa de liberdade afetiva acompanha sanções pessoais propostas por violações em Brunei e outros países. Falas de organizações não são atribuídas à figura."
      },
      {
        "title": "Breakdown of Trump’s Executive Orders, Ways Rep. Omar is Fighting Back",
        "url": "https://omar.house.gov/breakdown-trumps-executive-orders-ways-rep-omar-fighting-back",
        "note": "Última atualização declarada 06/02/2025, publicação inicial desconhecida. Índice oficial recuperou corpo; para a alegação de gênero usou-se somente seção de sexo em documentos oficiais e resposta do gabinete. Acesso direto 403; não se certificam alegações causais, decisões judiciais ou demais políticas da página."
      },
      {
        "title": "Rep. Omar’s Statement on Trump Revoking the Equal Employment Opportunity Executive Order of 1965 and Plan to Dismiss DEI Federal Employees",
        "url": "https://omar.house.gov/media/press-releases/rep-omars-statement-trump-revoking-equal-employment-opportunity-executive",
        "note": "22/01/2025. Declaração própria inteira efetivamente lida no índice oficial; sem tentativa direta nesta pesquisa. Defesa de oportunidades profissionais para mulheres e diversidade, não auditoria de impacto da ordem ou continuidade posterior."
      }
    ],
    "codings": [
      {
        "axis": "int",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Foreign Policy — Representative Ilhan Omar",
            "locator": "Quatro parágrafos programáticos completos, especialmente3; fechamento antes do contato",
            "statement": "Defende reconsiderar políticas intervencionistas prejudiciais que interferem em governos eleitos e rejeita sanções ou embargos usados para punição e controle; prioriza soluções diplomáticas gerais.",
            "basis": "declaration",
            "publishedDate": "sem data editorial; página disponível em 09/10/2026, sem inferir data pela idade do índice",
            "accessedDate": "2026-10-09"
          },
          {
            "sourceTitle": "Rep. Ilhan Omar Introduces Legislation to Hold Brunei Accountable for Brutal Penal Code",
            "locator": "Descrição do projeto imediatamente após a fala própria; restrições pessoais via Magnitsky para Brunei e qualquer outro país análogo",
            "statement": "Como contraponto, propõe restrições de viagem e negócios contra responsáveis estrangeiros por punições brutais, inclusive em outros países; admite coerção pessoal direcionada por direitos humanos.",
            "basis": "declaration",
            "publishedDate": "2019-05-10",
            "accessedDate": "2026-10-09"
          }
        ],
        "rationale": "Limita intervenção e coerção sobre outros governos por regra geral de política externa.",
        "uncertainty": "Mantém engajamento internacional e força como último recurso. Em10/05/2019 defendeu sanções pessoais via Magnitsky contra responsáveis por punições brutais, inclusive em outros países: contraponto normativo material, não apagado. Recortes separados, sem imputar abandono dessa exceção em 2026 ou neutralidade absoluta. Não certifica alegações empíricas sobre sanções.",
        "relatedQuestionIds": [
          "intervencao_01",
          "intervencao_08",
          "intervencao_13",
          "intervencao_15"
        ],
        "reviewedOn": "2026-10-09"
      },
      {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Healthcare — Representative Ilhan Omar — página institucional sem data",
            "locator": "Quarto parágrafo programático completo, antes de More on Healthcare",
            "statement": "Afirma autonomia corporal, direitos reprodutivos e acesso de todas as mulheres a contracepção e aborto.",
            "basis": "declaration",
            "publishedDate": "sem data editorial; página disponível em 09/10/2026, sem inferir data pela idade do índice",
            "accessedDate": "2026-10-09"
          },
          {
            "sourceTitle": "Breakdown of Trump’s Executive Orders, Ways Rep. Omar is Fighting Back",
            "locator": "Seção Federal Government to Define Sex as Only Male or Female; subseção How We’re Fighting Back",
            "statement": "Seu gabinete exige reconhecimento legal de pessoas trans e não binárias.",
            "basis": "declaration",
            "publishedDate": "última atualização declarada 06/02/2025; dia de publicação inicial desconhecido",
            "accessedDate": "2026-10-09"
          },
          {
            "sourceTitle": "Rep. Ilhan Omar Introduces Legislation to Hold Brunei Accountable for Brutal Penal Code",
            "locator": "Fala própria integral iniciada These laws are anathema, anterior à descrição do projeto",
            "statement": "Defende liberdade de amar e direitos universais de mulheres e pessoas LGBTQ, rejeitando punições por relações consentidas.",
            "basis": "declaration",
            "publishedDate": "2019-05-10",
            "accessedDate": "2026-10-09"
          },
          {
            "sourceTitle": "Rep. Omar’s Statement on Trump Revoking the Equal Employment Opportunity Executive Order of 1965 and Plan to Dismiss DEI Federal Employees",
            "locator": "Declaração própria integral após cabeçalho/data, antes de Issues",
            "statement": "Defende oportunidades de trabalho para mulheres e enfrentamento institucional da discriminação.",
            "basis": "declaration",
            "publishedDate": "2025-01-22",
            "accessedDate": "2026-10-09"
          }
        ],
        "rationale": "Autonomia reprodutiva, reconhecimento de gênero, liberdade afetiva e igualdade profissional em normas expressamente adotadas.",
        "uncertainty": "Fontes de 2019 e 2025 e página sem data são recortes separados; não uma edição do ensaio 2021 ou renovação integral em 2026. Não infere casamento, adoção, poliamor ou toda moral sexual. A fact-sheet é voz institucional de seu gabinete, não fala transcrita pessoal; a citação ampla de Serra Sippel sobre sexo/aborto NÃO é atribuída a Omar.",
        "relatedQuestionIds": [
          "moral_03",
          "moral_07",
          "moral_09",
          "moral_18"
        ],
        "reviewedOn": "2026-10-09"
      }
    ],
    "topLevelPatch": {
      "period": "Posições legislativas autodeclaradas na página Issues consultada em 7 de outubro de 2026; página sem data de publicação. Ensaio próprio de 21/01/2021 acrescentado como recorte datado separado, sem renovação integral em 2026. Declaração de 10/05/2019 e declarações institucionais de 22/01 e atualização 06/02/2025 são recortes adicionais separados; sem renovação integral em 2026.",
      "rationale": "Defende inclusão migratória, diplomacia, limites à coerção externa, autonomia reprodutiva e reconhecimento de gênero; reforma democrática em 2021.",
      "caveats": "Ensaio individual de 21/01/2021 e páginas institucionais sem data permanecem recortes separados; atividade2026 não renova o ensaio. Direitos e diplomacia são declarações, não resultados; agência migratória substituta preserva segurança nacional e violência política exige responsabilização. Financiamento de saúde/educação e normas de salários/licenças/energia não provam propriedade geral ou planejamento econômico. Reprodução oficial indexada distingue falhas de acesso direto. Objeto e fontes anteriores íntegros arquivados. Declarações adicionais de 2019 e 2025 permanecem recortes separados; sanções pessoais por violações graves são contraponto à rejeição geral de sanções de controle. Não se imputa continuidade de toda posição em 2026."
    },
    "afterHasUnknownReasons": true
  },
  {
    "before": {
      "id": "fiji-current-2025",
      "name": "Fiji",
      "aliases": [],
      "kind": "country",
      "category": "country",
      "period": "Normas 2013, texto inglês disponibilizado oficialmente em abril 2026; prática política/civil 2024 em relatos 2025; participação pública multissetorial 2023 relatada pelo IMF 2024",
      "vec": {
        "est": 50,
        "rep": 60,
        "pod": 40,
        "imi": 50,
        "dip": 50,
        "int": 50,
        "eco": 60,
        "con": 50,
        "com": 50,
        "rel": 80,
        "mor": 50,
        "tec": 50
      },
      "evidence": {
        "rep": "medium",
        "pod": "medium",
        "eco": "medium",
        "rel": "medium"
      },
      "axisEvidence": {
        "rep": {
          "sourceTitles": [
            "Constitution of the Republic of Fiji — official English text 2013",
            "Freedom in the World 2025 — Fiji"
          ],
          "rationale": "Competição eleitoral e alternância efetiva documentadas, mas restrições a organizações políticas e déficits judiciais impedem direção forte. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Limitações legais expressas; a prática é examinada em fonte separada. Não demonstra imparcialidade de toda legislação eleitoral nem implementação. FH também interpreta o fim da rede de favorecimento do antigo partido como melhora; desregistro não significa extinção de toda oposição. Relato abreviado; não converte pontuações FH em vetor."
        },
        "pod": {
          "sourceTitles": [
            "Constitution of the Republic of Fiji — official English text 2013",
            "Freedom in the World 2025 — Fiji",
            "2024 Country Reports on Human Rights Practices: Fiji — USDOS"
          ],
          "rationale": "Garantias gerais de corpo, privacidade, processo, expressão e associação permitem direção normativa moderada de liberdade; poderes excepcionais e detenções prolongadas permanecem contrapontos. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Prazo de apresentação judicial de 48 h tem ressalva de razoabilidade; evidência ilícita pode ser admitida por interesse da justiça; exceções emergenciais e limites amplos permanecem. Não deduzir prática liberal da enumeração de garantias. A melhoria é relativa ao passado e não elimina restrições. Não foi obtida nesta rodada narrativa abrangente de vigilância, privacidade e processo penal em 2024. Governo geralmente respeitava as garantias ordinárias, mas havia prisões preventivas longas. Descrição do USDOS sobre a POA não substitui cotejo do texto legal vigente; ausência de uso relatado não revoga o poder."
        },
        "eco": {
          "sourceTitles": [
            "Republic of Fiji: 2024 Article IV Consultation — IMF Country Report 24/159",
            "Constitution of the Republic of Fiji — official English text 2013"
          ],
          "rationale": "Carteira pública multissetorial expressamente documentada em 2023, além de serviços essenciais, sustenta presença pública significativa moderada; participações parciais, propriedade privada e costumeira impedem predominância forte. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Participações são heterogêneas; houve privatização parcial da Energy Fiji em 2021. Ativos/PIB não são parcela estatal do produto. Retrato de 2023 publicado em 2024; não prova predomínio público em toda propriedade nacional. Terra comunitária não equivale automaticamente ao polo Público; direitos sociais não especificam monopólio estatal de prestação. Direitos progressivos são condicionados aos recursos disponíveis."
        },
        "rel": {
          "sourceTitles": [
            "Constitution of the Republic of Fiji — official English text 2013"
          ],
          "rationale": "Separação e vedação abrangente de preferência estatal por religião ou ausência de crença; escolas confessionais financiáveis e limitações de culto não equivalem a estabelecimento. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Escolas confessionais podem receber apoio estatal; liberdade admite limites legais de ordem, saúde e direitos alheios. Laicidade jurídica não é ateísmo social nem certificação da prática de 2024."
        }
      },
      "coding": {
        "rep": {
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
          "reviewedOn": "2026-10-08",
          "version": "editorial-ordinal-v1",
          "value": 60,
          "range": [
            55,
            70
          ]
        },
        "pod": {
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
          "reviewedOn": "2026-10-08",
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
          "reviewedOn": "2026-10-08",
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
          "title": "Texto constitucional — Fiji / portal oficial",
          "url": "https://www.fiji.gov.fj/wp-content/uploads/2026/04/Fiji-Constitution-English-2013.pdf",
          "note": "Texto primário lido em 7/10/2026. Versão: 2013, texto inglês disponibilizado pelo governo em abril de 2026. Seções 4,23,26: Separação expressa entre religião e Estado e proteção contra discriminação por orientação sexual e identidade de gênero. Texto normativo disponibilizado pelo governo em 2026; não descrição da execução em 2024."
        },
        {
          "title": "Freedom in the World 2025 — Fiji",
          "url": "https://freedomhouse.org/country/fiji/freedom-world/2025",
          "note": "Overview e Key Developments in 2024 efetivamente lidos em 7/10/2026; relatório abreviado de 2025. Usam-se narrativas específicas, sem conversão de notas numéricas."
        },
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
      "rationale": "Competição política e separação religiosa expressa coexistem com garantias civis gerais e poderes excepcionais. A carteira de participação pública cobre vários setores, com propriedade privada e costumeira preservadas.",
      "caveats": "Garantias legais não medem todo saldo de liberdade 2024. Poderes de detenção prolongada e limitações de direitos permanecem, mesmo sem uso relatado em parte do ano. Igualdade parcial não resolve costumes gerais; pesquisa anterior preservada. Ativos públicos em relação ao PIB não são parcela da produção: participações diversas, privatização parcial e propriedade privada/costumeira impedem predominância pública forte. PDF governamental atual falhou nesta revisão; passagens nativas localizadas e recuperação oficial parcial têm atribuições distintas."
    },
    "addedSources": [
      {
        "title": "Constitution of the Republic of Fiji (2013)",
        "url": "https://www.fiji.gov.fj/wp-content/uploads/2026/04/Fiji-Constitution-English-2013.pdf",
        "note": "Leitura própria em 09/10/2026: preâmbulo; §§1–6,22–26,28–32,38–44,162(1–2). Texto inglês oficial disponibilizado em abril de 2026; vigência inicial em 7/9/2013. Não é auditoria integral de consolidação ou execução em 2024."
      }
    ],
    "codings": [
      {
        "confidence": "medium",
        "reviewedOn": "2026-10-09",
        "axis": "imi",
        "position": "moderate-second",
        "claims": [
          {
            "sourceTitle": "Constitution of the Republic of Fiji (2013)",
            "locator": "Preâmbulo; §§1,3(3–4),5,6,22(4),26(1–8),28–29,31(3–4).",
            "statement": "Reconhece culturas indígenas e imigrantes, escolas comunitárias e proteção linguística, com ensino obrigatório de iTaukei e Fiji Hindi.",
            "basis": "norm",
            "publishedDate": "2013; vigência inicial 7/9/2013, §162(2); upload abril2026 não é promulgação",
            "accessedDate": "2026-10-09"
          }
        ],
        "rationale": "Proteções culturais, escolares e linguísticas gerais sustentam pluralismo moderado.",
        "relatedQuestionIds": [
          "imigracao_02",
          "imigracao_06",
          "imigracao_08",
          "imigracao_16"
        ],
        "uncertainty": "Cidadania nacional comum, prevalência inglesa e prerrogativas costumeiras limitam intensidade. Não deduz admissão irrestrita nem prática."
      },
      {
        "confidence": "medium",
        "reviewedOn": "2026-10-09",
        "axis": "mor",
        "position": "moderate-first",
        "claims": [
          {
            "sourceTitle": "Constitution of the Republic of Fiji (2013)",
            "locator": "§§24(1–2),26(1–8),38(1–3),41(1–2); contraponto26(8)(e).",
            "statement": "Protege sexo, orientação e identidade, vida familiar e responsabilidades parentais iguais mesmo sem casamento, além de cuidado reprodutivo.",
            "basis": "norm",
            "publishedDate": "2013; vigência inicial 7/9/2013, §162(2); upload abril2026 não é promulgação",
            "accessedDate": "2026-10-09"
          }
        ],
        "rationale": "A leitura conjunta amplia o fundamento anterior além da igualdade isolada, cobrindo sexualidade e papéis familiares.",
        "relatedQuestionIds": [
          "moral_02",
          "moral_18"
        ],
        "uncertainty": "§26(8)(e) ressalva legislação de casamento, adoção, sucessão por morte e pensões. Não implica casamento igualitário, aborto, autodeclaração de gênero ou prática uniforme."
      }
    ],
    "topLevelPatch": {
      "caveats": "Garantias legais não medem todo saldo de liberdade 2024. Poderes de detenção prolongada e limitações de direitos permanecem, mesmo sem uso relatado em parte do ano. A retenção anterior de MOR baseava-se na igualdade isolada; a leitura conjunta de sexualidade, vida familiar e responsabilidades parentais sustenta agora direção normativa moderada, sem certificar a prática. Ativos públicos em relação ao PIB não são parcela da produção: participações diversas, privatização parcial e propriedade privada/costumeira impedem predominância pública forte. O PDF falhou na revisão anterior; nesta rodada foram lidas diretamente as cláusulas constitucionais indicadas, sem auditoria integral de consolidação ou execução. Passagens da pesquisa anterior e leituras atuais mantêm atribuições distintas. O §26(8)(e) ressalva legislação de casamento, adoção, sucessão por morte e pensões."
    },
    "afterHasUnknownReasons": false
  }
] as unknown as ReconciliationDefinition[];

type ExtendedReference = ReferenceEntry & { unknownAxisReasons?: Partial<Record<AxisKey, string>> };
function buildPost(entry: ReferenceEntry, definition: ReconciliationDefinition): ReferenceEntry {
  const sources = [...entry.sources, ...definition.addedSources];
  const vec = { ...entry.vec }, evidence = { ...entry.evidence };
  const axisEvidence = { ...entry.axisEvidence }, coding = { ...entry.coding };
  const unknownAxisReasons = { ...(entry as ExtendedReference).unknownAxisReasons };
  for (const input of definition.codings) {
    const encoded = codeReferenceAxis(input, sources);
    vec[input.axis] = encoded.value;
    evidence[input.axis] = encoded.evidence;
    axisEvidence[input.axis] = encoded.axisEvidence!;
    coding[input.axis] = encoded.coding;
    delete unknownAxisReasons[input.axis];
  }
  const post: ExtendedReference = { ...entry, ...definition.topLevelPatch, vec, evidence, axisEvidence, coding, sources };
  if (definition.afterHasUnknownReasons) post.unknownAxisReasons = unknownAxisReasons;
  else delete post.unknownAxisReasons;
  return post;
}
export const researchRecords20261009ExpectedPosts = researchRecords20261009Definitions.map(definition => buildPost(structuredClone(definition.before), definition));
export function reconcileResearchRecords20261009(entry: ReferenceEntry): ReferenceEntry {
  const index = researchRecords20261009Definitions.findIndex(definition => definition.before.id === entry.id);
  if (index < 0) return entry;
  if (JSON.stringify(entry) === JSON.stringify(researchRecords20261009ExpectedPosts[index])) return entry;
  const definition = researchRecords20261009Definitions[index];
  if (JSON.stringify(entry) !== JSON.stringify(definition.before)) {
    throw new Error(`Research record baseline diverged for ${entry.id}; preserve later work and review before integration.`);
  }
  return buildPost(entry, definition);
}
