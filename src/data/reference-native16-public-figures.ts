import type {ReferenceEntry,ReferenceSource} from './references';
import {AXES} from '../lib/scoring';
import {codeReferenceAxis,type ReferenceAxisCoding} from '../lib/reference-coding';
const AXIS_KEYS=AXES.map(axis=>axis.key);
export const native16PublicFiguresBefore:ReferenceEntry[] = [
  {
    "id": "ilhan-omar",
    "kind": "person",
    "category": "public-figure",
    "name": "Ilhan Omar",
    "period": "Posições legislativas autodeclaradas na página Issues consultada em 7 de outubro de 2026; página sem data de publicação.",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 40,
      "dip": 40,
      "int": 50,
      "eco": 60,
      "con": 60,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "imi": "medium",
      "eco": "medium",
      "con": "medium",
      "dip": "medium"
    },
    "axisEvidence": {
      "imi": {
        "sourceTitles": [
          "Issues — Representative Ilhan Omar"
        ],
        "rationale": "Defende direitos para imigrantes sem documentação e reassentamento de refugiados. A âncora expressa a direção e intensidade delimitadas dessa proposta. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Inclusão migratória não estabelece toda a política de integração cultural. Inclusão jurídica e acesso a instituições sustentam somente orientação moderada contra exclusão, sem equivalência perfeita com toda integração cultural. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação."
      },
      "eco": {
        "sourceTitles": [
          "Issues — Representative Ilhan Omar"
        ],
        "rationale": "Defende sistema de pagador único Medicare for All e ensino superior sem mensalidades. A âncora expressa a direção e intensidade delimitadas dessa proposta. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Financiamento público de serviços não determina propriedade em todos os setores. O polo público abrange estes serviços ou empregos públicos; financiamento não demonstra nacionalização da economia. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação."
      },
      "con": {
        "sourceTitles": [
          "Issues — Representative Ilhan Omar"
        ],
        "rationale": "Propõe elevar salário mínimo, licença remunerada nacional e investimento em renováveis. A âncora expressa a direção e intensidade delimitadas dessa proposta. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Regulação e investimento setoriais não equivalem a planejamento integral. Coordenação e investimento públicos setoriais sustentam intensidade moderada; licença trabalhista isolada não implica planejamento da produção. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação."
      },
      "dip": {
        "sourceTitles": [
          "Issues — Representative Ilhan Omar"
        ],
        "rationale": "Prioriza diplomacia, retorno das tropas e ação militar como último recurso. A âncora expressa a direção e intensidade delimitadas dessa proposta. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não é rejeição absoluta de toda ação militar. Militarismo e pacifismo não são sinônimos do eixo não intervenção; posições seletivas ou último recurso são preservadas. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação."
      }
    },
    "coding": {
      "imi": {
        "axis": "imi",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Issues — Representative Ilhan Omar",
            "locator": "Immigration, primeiro parágrafo",
            "statement": "Defende direitos para imigrantes sem documentação e reassentamento de refugiados.",
            "basis": "declaration",
            "publishedDate": "Sem data indicada; conteúdo disponível em 7/10/2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Defende direitos para imigrantes sem documentação e reassentamento de refugiados. A âncora expressa a direção e intensidade delimitadas dessa proposta.",
        "uncertainty": "Inclusão migratória não estabelece toda a política de integração cultural. Inclusão jurídica e acesso a instituições sustentam somente orientação moderada contra exclusão, sem equivalência perfeita com toda integração cultural. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação.",
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
            "sourceTitle": "Issues — Representative Ilhan Omar",
            "locator": "Healthcare, primeiro parágrafo; Education, primeiro parágrafo",
            "statement": "Defende sistema de pagador único Medicare for All e ensino superior sem mensalidades.",
            "basis": "declaration",
            "publishedDate": "Sem data indicada; conteúdo disponível em 7/10/2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Defende sistema de pagador único Medicare for All e ensino superior sem mensalidades. A âncora expressa a direção e intensidade delimitadas dessa proposta.",
        "uncertainty": "Financiamento público de serviços não determina propriedade em todos os setores. O polo público abrange estes serviços ou empregos públicos; financiamento não demonstra nacionalização da economia. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação.",
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
            "sourceTitle": "Issues — Representative Ilhan Omar",
            "locator": "Workers and Economy, dois parágrafos; Environmental Justice, primeiro parágrafo",
            "statement": "Propõe elevar salário mínimo, licença remunerada nacional e investimento em renováveis.",
            "basis": "declaration",
            "publishedDate": "Sem data indicada; conteúdo disponível em 7/10/2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Propõe elevar salário mínimo, licença remunerada nacional e investimento em renováveis. A âncora expressa a direção e intensidade delimitadas dessa proposta.",
        "uncertainty": "Regulação e investimento setoriais não equivalem a planejamento integral. Coordenação e investimento públicos setoriais sustentam intensidade moderada; licença trabalhista isolada não implica planejamento da produção. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação.",
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
            "sourceTitle": "Issues — Representative Ilhan Omar",
            "locator": "Foreign Policy, primeiro parágrafo",
            "statement": "Prioriza diplomacia, retorno das tropas e ação militar como último recurso.",
            "basis": "declaration",
            "publishedDate": "Sem data indicada; conteúdo disponível em 7/10/2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Prioriza diplomacia, retorno das tropas e ação militar como último recurso. A âncora expressa a direção e intensidade delimitadas dessa proposta.",
        "uncertainty": "Não é rejeição absoluta de toda ação militar. Militarismo e pacifismo não são sinônimos do eixo não intervenção; posições seletivas ou último recurso são preservadas. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação.",
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
        "title": "Issues — Representative Ilhan Omar",
        "url": "https://omar.house.gov/issues",
        "note": "Gabinete de Ilhan Omar, Câmara dos EUA. Publicação: sem data indicada. Consulta documental em 7/10/2026; posições declaradas, não prova de implementação. Leitura original pelo agente de pesquisa; a tentativa independente de reabertura retornou 403."
      },
      {
        "title": "Escritório Omar — comunicado nominal conjunto23/07/2026, cláusula do índice",
        "url": "https://omar.house.gov/media/press-releases",
        "note": "Identidade/atividade2026 apenas. Índice oficial94–97: data e cláusula completa com Omar e Rashida Tlaib entre membros que emitiram declaração. Corpo da cláusula do índice efetivamente lido; comunicado interno completo retornou InternalError e não é declarado reaberto. Atividade nominal conjunta emitida, sem certificação de presença física ou toda posição de2026. Uma fonte compartilhada pelos dois nomes."
      }
    ],
    "rationale": "Defende direitos para imigrantes sem documentação e reassentamento de refugiados. Defende sistema de pagador único Medicare for All e ensino superior sem mensalidades. Propõe elevar salário mínimo, licença remunerada nacional e investimento em renováveis. Prioriza diplomacia, retorno das tropas e ação militar como último recurso.",
    "caveats": "Fonte de posições, não de implementação. Não inferir religião política pela identidade religiosa nem democracia pelo cargo eletivo. O eixo int tem polos peculiares e exige exame adicional.  Âncoras são classes editoriais, não medições da pessoa. Eixos ausentes são desconhecidos. Nenhum destes perfis possui os seis eixos exigidos para matches. Identidade viva/atividade2026 delimitada por fonte adicional; data de publicação ou relato nominal não renova todas as posições anteriores nem certifica presença física, imagens ou cargo contínuo."
  },
  {
    "id": "ayanna-pressley",
    "kind": "person",
    "category": "public-figure",
    "name": "Ayanna Pressley",
    "period": "Plataforma de campanha publicada sem datas; consulta em 7 de outubro de 2026. O texto econômico menciona recuperação da crise de COVID-19 e não deve ser tratado como proposta recém-lançada.",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 40,
      "dip": 40,
      "int": 50,
      "eco": 60,
      "con": 60,
      "com": 50,
      "rel": 50,
      "mor": 60,
      "tec": 50
    },
    "evidence": {
      "eco": "medium",
      "con": "medium",
      "mor": "medium",
      "dip": "medium",
      "imi": "medium"
    },
    "axisEvidence": {
      "eco": {
        "sourceTitles": [
          "Fighting for a Just Economy"
        ],
        "rationale": "Defende empregos públicos financiados federalmente para adultos que busquem trabalho. A âncora expressa a direção e intensidade delimitadas dessa proposta. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Emprego público não especifica propriedade de toda a economia. O polo público abrange estes serviços ou empregos públicos; financiamento não demonstra nacionalização da economia. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação."
      },
      "con": {
        "sourceTitles": [
          "Fighting for a Just Economy"
        ],
        "rationale": "Propõe garantia legal de emprego com salário, benefícios e proteção sindical. A âncora expressa a direção e intensidade delimitadas dessa proposta. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: A organização local da execução não codifica automaticamente federalismo constitucional. Coordenação e investimento públicos setoriais sustentam intensidade moderada; licença trabalhista isolada não implica planejamento da produção. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação."
      },
      "mor": {
        "sourceTitles": [
          "Abortion Care as a Human Right"
        ],
        "rationale": "Defende acesso nacional ao aborto e proteção da autonomia corporal. A âncora expressa a direção e intensidade delimitadas dessa proposta. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: A URL termina em lgbtq, mas o conteúdo atual trata de aborto; não usar a URL para inferir outras posições. A proteção citada cobre uma faceta de costumes e direitos; não constitui posição extrema sobre todo o eixo. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação."
      },
      "dip": {
        "sourceTitles": [
          "Foreign Policy Centered on Empathy and the Pursuit of Peace"
        ],
        "rationale": "Prioriza diplomacia e define ação militar como último recurso. A âncora expressa a direção e intensidade delimitadas dessa proposta. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Coalizões e direitos humanos não estabelecem posição inequívoca no eixo int. Militarismo e pacifismo não são sinônimos do eixo não intervenção; posições seletivas ou último recurso são preservadas. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação."
      },
      "imi": {
        "sourceTitles": [
          "A Just and Humane Immigration System"
        ],
        "rationale": "Defende instituições públicas inclusivas para imigrantes independentemente do status migratório. A âncora expressa a direção e intensidade delimitadas dessa proposta. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não é uma plataforma completa de política cultural. Inclusão jurídica e acesso a instituições sustentam somente orientação moderada contra exclusão, sem equivalência perfeita com toda integração cultural. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação."
      }
    },
    "coding": {
      "eco": {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Fighting for a Just Economy",
            "locator": "Fighting for a Just Economy, terceiro parágrafo (Federal Job Guarantee)",
            "statement": "Defende empregos públicos financiados federalmente para adultos que busquem trabalho.",
            "basis": "declaration",
            "publishedDate": "Sem data indicada; conteúdo disponível em 7/10/2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Defende empregos públicos financiados federalmente para adultos que busquem trabalho. A âncora expressa a direção e intensidade delimitadas dessa proposta.",
        "uncertainty": "Emprego público não especifica propriedade de toda a economia. O polo público abrange estes serviços ou empregos públicos; financiamento não demonstra nacionalização da economia. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação.",
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
            "sourceTitle": "Fighting for a Just Economy",
            "locator": "Fighting for a Just Economy, terceiro parágrafo (Federal Job Guarantee)",
            "statement": "Propõe garantia legal de emprego com salário, benefícios e proteção sindical.",
            "basis": "declaration",
            "publishedDate": "Sem data indicada; conteúdo disponível em 7/10/2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Propõe garantia legal de emprego com salário, benefícios e proteção sindical. A âncora expressa a direção e intensidade delimitadas dessa proposta.",
        "uncertainty": "A organização local da execução não codifica automaticamente federalismo constitucional. Coordenação e investimento públicos setoriais sustentam intensidade moderada; licença trabalhista isolada não implica planejamento da produção. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação.",
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
            "sourceTitle": "Abortion Care as a Human Right",
            "locator": "Abortion Care as a Human Right, dois parágrafos",
            "statement": "Defende acesso nacional ao aborto e proteção da autonomia corporal.",
            "basis": "declaration",
            "publishedDate": "Sem data indicada; conteúdo disponível em 7/10/2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Defende acesso nacional ao aborto e proteção da autonomia corporal. A âncora expressa a direção e intensidade delimitadas dessa proposta.",
        "uncertainty": "A URL termina em lgbtq, mas o conteúdo atual trata de aborto; não usar a URL para inferir outras posições. A proteção citada cobre uma faceta de costumes e direitos; não constitui posição extrema sobre todo o eixo. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação.",
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
            "sourceTitle": "Foreign Policy Centered on Empathy and the Pursuit of Peace",
            "locator": "Foreign Policy Centered on Empathy and the Pursuit of Peace, primeiro e quarto parágrafos",
            "statement": "Prioriza diplomacia e define ação militar como último recurso.",
            "basis": "declaration",
            "publishedDate": "Sem data indicada; conteúdo disponível em 7/10/2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Prioriza diplomacia e define ação militar como último recurso. A âncora expressa a direção e intensidade delimitadas dessa proposta.",
        "uncertainty": "Coalizões e direitos humanos não estabelecem posição inequívoca no eixo int. Militarismo e pacifismo não são sinônimos do eixo não intervenção; posições seletivas ou último recurso são preservadas. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação.",
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
            "sourceTitle": "A Just and Humane Immigration System",
            "locator": "A Just and Humane Immigration System, segundo parágrafo",
            "statement": "Defende instituições públicas inclusivas para imigrantes independentemente do status migratório.",
            "basis": "declaration",
            "publishedDate": "Sem data indicada; conteúdo disponível em 7/10/2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Defende instituições públicas inclusivas para imigrantes independentemente do status migratório. A âncora expressa a direção e intensidade delimitadas dessa proposta.",
        "uncertainty": "Não é uma plataforma completa de política cultural. Inclusão jurídica e acesso a instituições sustentam somente orientação moderada contra exclusão, sem equivalência perfeita com toda integração cultural. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação.",
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
        "title": "Fighting for a Just Economy",
        "url": "https://ayannapressley.com/issues/jobguarantee/",
        "note": "Ayanna Pressley for Congress. Publicação: sem data indicada. Consulta documental em 7/10/2026; posições declaradas, não prova de implementação."
      },
      {
        "title": "Abortion Care as a Human Right",
        "url": "https://ayannapressley.com/issues/lgbtq/",
        "note": "Ayanna Pressley for Congress. Publicação: sem data indicada. Consulta documental em 7/10/2026; posições declaradas, não prova de implementação."
      },
      {
        "title": "Foreign Policy Centered on Empathy and the Pursuit of Peace",
        "url": "https://ayannapressley.com/issues/protecting-the-rights-of-cisgender-and-transgender-women-and-girls/",
        "note": "Ayanna Pressley for Congress. Publicação: sem data indicada. Consulta documental em 7/10/2026; posições declaradas, não prova de implementação."
      },
      {
        "title": "A Just and Humane Immigration System",
        "url": "https://ayannapressley.com/issues/immigration/",
        "note": "Ayanna Pressley for Congress. Publicação: sem data indicada. Consulta documental em 7/10/2026; posições declaradas, não prova de implementação."
      },
      {
        "title": "Ayanna Pressley — declaração própria emitida07/10/2026",
        "url": "https://pressley.house.gov/2026/10/07/rep-pressley-statement-marking-three-year-somber-anniversary-of-october-7th-attack/",
        "note": "Identidade/atividade2026 apenas. Cabeçalho42, atribuição45 e corpo próprio47–56 completos efetivamente lidos. Publicação institucional nominal nesse ano; acusações e classificação jurídica do conflito não certificadas. Nenhum código ou renovação de todo programa anterior."
      }
    ],
    "rationale": "Defende empregos públicos financiados federalmente para adultos que busquem trabalho. Propõe garantia legal de emprego com salário, benefícios e proteção sindical. Defende acesso nacional ao aborto e proteção da autonomia corporal. Prioriza diplomacia e define ação militar como último recurso. Defende instituições públicas inclusivas para imigrantes independentemente do status migratório.",
    "caveats": "Autodescrição de campanha não prova resultados legislativos. Os títulos exibidos foram conferidos apesar dos slugs inconsistentes; datas ausentes permanecem ausentes.  Âncoras são classes editoriais, não medições da pessoa. Eixos ausentes são desconhecidos. Nenhum destes perfis possui os seis eixos exigidos para matches. Identidade viva/atividade2026 delimitada por fonte adicional; data de publicação ou relato nominal não renova todas as posições anteriores nem certifica presença física, imagens ou cargo contínuo."
  },
  {
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
      }
    ],
    "caveats": "Programa pessoalmente endossado, não prática ou crença privada. Data editorial exata não certificada. Identidade2026 documentada por reportagem; acusações não auditadas. Sete eixos desconhecidos; revisão documental independente delimitada.",
    "rationale": "Prioriza liderança privada e preços de mercado, com autonomia local, participação democrática e modernização digital.",
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
          "Atiku Abubakar — My Covenant with Nigerians, programa da campanha2023, PDF74p"
        ],
        "rationale": "Federalismo descentralizado. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Mantém padrões e garantias federais1203–1205; sem secessão."
      },
      "rep": {
        "sourceTitles": [
          "Atiku Abubakar — My Covenant with Nigerians, programa da campanha2023, PDF74p"
        ],
        "rationale": "Orientação democrática ampla. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Programa normativo; prática não auditada."
      },
      "eco": {
        "sourceTitles": [
          "Atiku Abubakar — My Covenant with Nigerians, programa da campanha2023, PDF74p"
        ],
        "rationale": "Propriedade e provisão privadas multissetoriais. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Regulação e PPP permanecem; não privatização universal."
      },
      "con": {
        "sourceTitles": [
          "Atiku Abubakar — My Covenant with Nigerians, programa da campanha2023, PDF74p"
        ],
        "rationale": "Alocação predominantemente por mercados. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Planejamento, proteção seletiva e garantias públicas limitam a direção."
      },
      "tec": {
        "sourceTitles": [
          "Atiku Abubakar — My Covenant with Nigerians, programa da campanha2023, PDF74p"
        ],
        "rationale": "Adoção tecnológica ampla. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Objetivos não são execução nem apoio a qualquer tecnologia."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Atiku Abubakar — My Covenant with Nigerians, programa da campanha2023, PDF74p",
            "locator": "PDFp65 física1198–1215",
            "statement": "Propõe devolução multissetorial de competências e autonomia financeira local.",
            "basis": "declaration",
            "publishedDate": "Campanha2023; arquivo hospedado2022/10, dia editorial não certificado",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Federalismo descentralizado.",
        "uncertainty": "Mantém padrões e garantias federais1203–1205; sem secessão.",
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
            "sourceTitle": "Atiku Abubakar — My Covenant with Nigerians, programa da campanha2023, PDF74p",
            "locator": "PDFp62 física1110–1155; p71,1325–1327",
            "statement": "Defende voto efetivo, participação contínua, transparência e separação de poderes.",
            "basis": "declaration",
            "publishedDate": "Campanha2023; arquivo hospedado2022/10, dia editorial não certificado",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Orientação democrática ampla.",
        "uncertainty": "Programa normativo; prática não auditada.",
        "relatedQuestionIds": [
          "representacao_07",
          "representacao_19"
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
            "sourceTitle": "Atiku Abubakar — My Covenant with Nigerians, programa da campanha2023, PDF74p",
            "locator": "PDFp12–13 físicas80–112; p22,251–261",
            "statement": "Prioriza liderança privada e quebra de monopólios em infraestrutura.",
            "basis": "declaration",
            "publishedDate": "Campanha2023; arquivo hospedado2022/10, dia editorial não certificado",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Propriedade e provisão privadas multissetoriais.",
        "uncertainty": "Regulação e PPP permanecem; não privatização universal.",
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
            "sourceTitle": "Atiku Abubakar — My Covenant with Nigerians, programa da campanha2023, PDF74p",
            "locator": "PDFp12 física80–91; p19,186–203; p30,429–466; p36,559–573",
            "statement": "Prioriza preços de mercado e desregulação, com incentivos públicos delimitados.",
            "basis": "declaration",
            "publishedDate": "Campanha2023; arquivo hospedado2022/10, dia editorial não certificado",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Alocação predominantemente por mercados.",
        "uncertainty": "Planejamento, proteção seletiva e garantias públicas limitam a direção.",
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
            "sourceTitle": "Atiku Abubakar — My Covenant with Nigerians, programa da campanha2023, PDF74p",
            "locator": "PDFp14 física125–127; p33,501–523",
            "statement": "Promove software, digitalização governamental, formação e aplicações multissetoriais.",
            "basis": "declaration",
            "publishedDate": "Campanha2023; arquivo hospedado2022/10, dia editorial não certificado",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Adoção tecnológica ampla.",
        "uncertainty": "Objetivos não são execução nem apoio a qualquer tecnologia.",
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
    }
  }
];
export const native16PublicFiguresResearchArchive = [
  {
    "id": "ayanna-pressley",
    "name": "Ayanna Pressley",
    "priorWholeRecordSha256": "a083d29a823ea25eee3f170bddc6f686908f7de51d73b3910c1188297920b859",
    "existingPeriod": "Plataforma de campanha publicada sem datas; consulta em 7 de outubro de 2026. O texto econômico menciona recuperação da crise de COVID-19 e não deve ser tratado como proposta recém-lançada.",
    "periodHandling": "Manter as páginas de campanha como sem data. A página penal menciona a presidência Biden, sinal de conteúdo histórico; a consulta em 2026 não renova a data. Fontes adicionais REP=2024 e POD=2025 ficam explicitamente datadas e separadas.",
    "summary": "Há material novo amplo para POD na própria plataforma sem data. REP tem fontes próprias datadas, condicionadas a explicitar o período. ECO/CON precisam da combinação multissetorial e não apenas da frase sobre financiamento da garantia de emprego.",
    "sources": [
      {
        "id": "pressley-job",
        "title": "Fighting for a Just Economy",
        "url": "https://ayannapressley.com/issues/jobguarantee/",
        "publishedDate": "undated; página disponível na consulta de 2026-10-08, sem data editorial inferida",
        "accessedDate": "2026-10-08",
        "retrievalMode": "direct",
        "actualReadScope": "Título e corpo integral, parágrafos 1–4; linhas 0–6 do texto extraído.",
        "note": "Campanha própria; contém referência à recuperação da COVID-19. Slug e título conferidos.",
        "accessFailures": []
      },
      {
        "id": "pressley-abortion",
        "title": "Abortion Care as a Human Right",
        "url": "https://ayannapressley.com/issues/lgbtq/",
        "publishedDate": "undated; página disponível na consulta de 2026-10-08, sem data editorial inferida",
        "accessedDate": "2026-10-08",
        "retrievalMode": "direct",
        "actualReadScope": "Título e ambos os parágrafos; linhas 0–2.",
        "note": "O slug lgbtq não corresponde ao título atual. Não inferir conteúdo LGBTQ deste endereço.",
        "accessFailures": []
      },
      {
        "id": "pressley-foreign",
        "title": "Foreign Policy Centered on Empathy and the Pursuit of Peace",
        "url": "https://ayannapressley.com/issues/protecting-the-rights-of-cisgender-and-transgender-women-and-girls/",
        "publishedDate": "undated; página disponível na consulta de 2026-10-08, sem data editorial inferida",
        "accessedDate": "2026-10-08",
        "retrievalMode": "direct",
        "actualReadScope": "Título e quatro parágrafos, linhas 0–4.",
        "note": "Slug discrepante; conteúdo efetivamente é política externa.",
        "accessFailures": []
      },
      {
        "id": "pressley-immigration",
        "title": "A Just and Humane Immigration System",
        "url": "https://ayannapressley.com/issues/immigration/",
        "publishedDate": "undated; página disponível na consulta de 2026-10-08, sem data editorial inferida",
        "accessedDate": "2026-10-08",
        "retrievalMode": "direct",
        "actualReadScope": "Título e dois parágrafos, linhas 0–2.",
        "note": "",
        "accessFailures": []
      },
      {
        "id": "pressley-criminal",
        "title": "Transforming Our Criminal Legal System",
        "url": "https://ayannapressley.com/issues/economy/",
        "publishedDate": "undated; página disponível na consulta de 2026-10-08, sem data editorial inferida",
        "accessedDate": "2026-10-08",
        "retrievalMode": "direct",
        "actualReadScope": "Título e três parágrafos, linhas 0–3.",
        "note": "Slug economy corresponde atualmente à reforma penal. Referência à promessa de Biden não deve ser descrita como situação presente em 2026.",
        "accessFailures": []
      },
      {
        "id": "pressley-hate",
        "title": "Standing Up Against Hate and Violence",
        "url": "https://ayannapressley.com/issues/foreign-policy/",
        "publishedDate": "undated; página disponível na consulta de 2026-10-08, sem data editorial inferida",
        "accessedDate": "2026-10-08",
        "retrievalMode": "indexed",
        "actualReadScope": "Texto indexado: título e três parágrafos completos, do princípio de autenticidade pessoal até oposição a supremacia branca, antissemitismo e islamofobia.",
        "note": "Texto da própria campanha, lido integralmente no resultado indexado; abertura direta não foi possível.",
        "accessFailures": [
          "Abertura direta: 400 Timeout fetching, 2026-10-08."
        ]
      },
      {
        "id": "pressley-health",
        "title": "Tackling Entrenched Healthcare Disparities",
        "url": "https://ayannapressley.com/issues/climate-crisis/",
        "publishedDate": "undated; página disponível na consulta de 2026-10-08, sem data editorial inferida",
        "accessedDate": "2026-10-08",
        "retrievalMode": "direct",
        "actualReadScope": "Título e corpo integral, linhas 0–4.",
        "note": "Slug climate-crisis corresponde a saúde. Não inferir propriedade estatal dos provedores do Medicare for All.",
        "accessFailures": []
      },
      {
        "id": "pressley-transit",
        "title": "Imagining the Future of Transportation",
        "url": "https://ayannapressley.com/issues/transportation/",
        "publishedDate": "undated; página disponível na consulta de 2026-10-08, sem data editorial inferida",
        "accessedDate": "2026-10-08",
        "retrievalMode": "direct",
        "actualReadScope": "Título e dois parágrafos, linhas 0–2.",
        "note": "",
        "accessFailures": []
      },
      {
        "id": "pressley-housing",
        "title": "Housing as a Human Right",
        "url": "https://ayannapressley.com/issues/housing/",
        "publishedDate": "undated; página disponível na consulta de 2026-10-08, sem data editorial inferida",
        "accessedDate": "2026-10-08",
        "retrievalMode": "direct",
        "actualReadScope": "Título e quatro parágrafos, linhas 0–4.",
        "note": "",
        "accessFailures": []
      },
      {
        "id": "pressley-rcv",
        "title": "Pressley Applauds Boston City Council’s Ranked Choice Voting Home Rule Petition",
        "url": "https://pressley.house.gov/2024/06/12/pressley-applauds-boston-city-councils-ranked-choice-voting-home-rule-petition/",
        "publishedDate": "2024-06-12",
        "accessedDate": "2026-10-08",
        "retrievalMode": "direct",
        "actualReadScope": "Cabeçalho datado; declaração atribuída a Pressley e contexto de propostas, linhas 42–56.",
        "note": "Declaração própria no gabinete; separar suas palavras nas linhas 46–47 do resumo retrospectivo do gabinete.",
        "accessFailures": []
      },
      {
        "id": "pressley-pjg",
        "title": "Ahead of George Floyd Anniversary, Pressley Reintroduces Suite of Bills to Transform Criminal Legal System, Improve Police Accountability",
        "url": "https://pressley.house.gov/2025/05/23/ahead-of-george-floyd-anniversary-pressley-reintroduces-suite-of-bills-to-transform-criminal-legal-system-improve-police-accountability/",
        "publishedDate": "2025-05-23",
        "accessedDate": "2026-10-08",
        "retrievalMode": "direct",
        "actualReadScope": "Cabeçalho e corpo do comunicado, linhas 42–85, incluindo citação própria e descrição das propostas; projetos anexos não lidos.",
        "note": "Fonte autoral/institucional para propostas e seu endosso, não verificação das acusações ou resultados históricos.",
        "accessFailures": []
      }
    ],
    "claims": [
      {
        "id": "ayanna-pressley-eco-1",
        "axis": "eco",
        "sourceTitle": "Fighting for a Just Economy",
        "sourceUrl": "https://ayannapressley.com/issues/jobguarantee/",
        "locator": "Parágrafo 3; linha 5",
        "boundedParaphrase": "Propõe emprego público disponível a qualquer adulto que busque trabalho.",
        "statement": "Propõe emprego público disponível a qualquer adulto que busque trabalho.",
        "basis": "declaration",
        "publishedDate": "undated; página disponível na consulta de 2026-10-08, sem data editorial inferida",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "É oferta de provisão pública, não só subsídio; precisa ser lida junto aos serviços de saúde e transporte para sustentar amplitude.",
        "counterEvidence": "Execução comunitária/local; não exige estatizar empresas privadas.",
        "uncertainty": "Isolada, a garantia de emprego é insuficiente para predominância pública de toda a economia.",
        "retrievalMode": "direct",
        "actualReadScope": "Título e corpo integral, parágrafos 1–4; linhas 0–6 do texto extraído.",
        "reviewRecommendation": "strengthen-existing"
      },
      {
        "id": "ayanna-pressley-eco-2",
        "axis": "eco",
        "sourceTitle": "Tackling Entrenched Healthcare Disparities",
        "sourceUrl": "https://ayannapressley.com/issues/climate-crisis/",
        "locator": "Parágrafo iniciado Ayanna believes; linha 3",
        "boundedParaphrase": "Defende Medicare for All e investimento em centros comunitários de saúde.",
        "statement": "Defende Medicare for All e investimento em centros comunitários de saúde.",
        "basis": "declaration",
        "publishedDate": "undated; página disponível na consulta de 2026-10-08, sem data editorial inferida",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Amplia a evidência de compromisso com serviços universais; financiamento público não estabelece propriedade dos prestadores.",
        "counterEvidence": "Página não especifica eliminação de prestadores privados.",
        "uncertainty": "Só usar com empregos públicos/transporte; não chamar de nacionalização.",
        "retrievalMode": "direct",
        "actualReadScope": "Título e corpo integral, linhas 0–4.",
        "reviewRecommendation": "sectoral-support"
      },
      {
        "id": "ayanna-pressley-eco-3",
        "axis": "eco",
        "sourceTitle": "Imagining the Future of Transportation",
        "sourceUrl": "https://ayannapressley.com/issues/transportation/",
        "locator": "Segundo parágrafo; linha 2",
        "boundedParaphrase": "Defende investimento federal e transporte público acessível.",
        "statement": "Defende investimento federal e transporte público acessível.",
        "basis": "declaration",
        "publishedDate": "undated; página disponível na consulta de 2026-10-08, sem data editorial inferida",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Outro domínio de provisão pública; a combinação oferece orientação mais ampla que uma cláusula financiadora.",
        "counterEvidence": "Não propõe propriedade pública de toda modalidade de transporte.",
        "uncertainty": "Não prova implementação.",
        "retrievalMode": "direct",
        "actualReadScope": "Título e dois parágrafos, linhas 0–2.",
        "reviewRecommendation": "sectoral-support"
      },
      {
        "id": "ayanna-pressley-con-1",
        "axis": "con",
        "sourceTitle": "Fighting for a Just Economy",
        "sourceUrl": "https://ayannapressley.com/issues/jobguarantee/",
        "locator": "Parágrafos 2–4; linhas 4–6",
        "boundedParaphrase": "Propõe garantia legal de emprego, salários, benefícios, proteção sindical e confronto a práticas corporativas que elevem custos.",
        "statement": "Propõe garantia legal de emprego, salários, benefícios, proteção sindical e confronto a práticas corporativas que elevem custos.",
        "basis": "declaration",
        "publishedDate": "undated; página disponível na consulta de 2026-10-08, sem data editorial inferida",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Uma garantia abrangente de trabalho é mecanismo de coordenação pública do mercado laboral; não é um plano integral da produção.",
        "counterEvidence": "Mantém empresas e empregos privados como parte do contexto.",
        "uncertainty": "A evidência sustenta intervenção/regulação; não autoriza intensidade de planejamento central.",
        "retrievalMode": "direct",
        "actualReadScope": "Título e corpo integral, parágrafos 1–4; linhas 0–6 do texto extraído.",
        "reviewRecommendation": "supported-with-limits"
      },
      {
        "id": "ayanna-pressley-con-2",
        "axis": "con",
        "sourceTitle": "Housing as a Human Right",
        "sourceUrl": "https://ayannapressley.com/issues/housing/",
        "locator": "Terceiro e quarto parágrafos; linhas 3–4",
        "boundedParaphrase": "Endossa moratória de despejos e investimento habitacional.",
        "statement": "Endossa moratória de despejos e investimento habitacional.",
        "basis": "declaration",
        "publishedDate": "undated; página disponível na consulta de 2026-10-08, sem data editorial inferida",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Corrobora regulação e intervenção em outro domínio além do trabalho.",
        "counterEvidence": "A afirmação de extensão bem-sucedida é autodescrição, não prática auditada.",
        "uncertainty": "Isoladamente setorial; investimento não prova regime geral de alocação.",
        "retrievalMode": "direct",
        "actualReadScope": "Título e quatro parágrafos, linhas 0–4.",
        "reviewRecommendation": "sectoral-support"
      },
      {
        "id": "ayanna-pressley-mor-1",
        "axis": "mor",
        "sourceTitle": "Abortion Care as a Human Right",
        "sourceUrl": "https://ayannapressley.com/issues/lgbtq/",
        "locator": "Ambos os parágrafos",
        "boundedParaphrase": "Defende autonomia corporal, aborto e contracepção acessíveis.",
        "statement": "Defende autonomia corporal, aborto e contracepção acessíveis.",
        "basis": "declaration",
        "publishedDate": "undated; página disponível na consulta de 2026-10-08, sem data editorial inferida",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Corpo normativo explícito sobre costumes; pode ser combinado com proteção trans e igualdade civil.",
        "counterEvidence": "Não especifica todos os temas de moral.",
        "uncertainty": "Não transportar o slug como prova de direitos LGBTQ.",
        "retrievalMode": "direct",
        "actualReadScope": "Título e ambos os parágrafos; linhas 0–2.",
        "reviewRecommendation": "supported-with-limits"
      },
      {
        "id": "ayanna-pressley-mor-2",
        "axis": "mor",
        "sourceTitle": "Standing Up Against Hate and Violence",
        "sourceUrl": "https://ayannapressley.com/issues/foreign-policy/",
        "locator": "Parágrafos 1–2 do texto indexado",
        "boundedParaphrase": "Endossa igualdade LGBTQ e reconhecimento do nome de pessoas trans.",
        "statement": "Endossa igualdade LGBTQ e reconhecimento do nome de pessoas trans.",
        "basis": "declaration",
        "publishedDate": "undated; página disponível na consulta de 2026-10-08, sem data editorial inferida",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Aumenta a amplitude para além de aborto, com autonomia identitária e igualdade social.",
        "counterEvidence": "Não equivale a qualquer posição concebível sobre costumes.",
        "uncertainty": "Recuperação indexada; resultados das propostas não auditados.",
        "retrievalMode": "indexed",
        "actualReadScope": "Texto indexado: título e três parágrafos completos, do princípio de autenticidade pessoal até oposição a supremacia branca, antissemitismo e islamofobia.",
        "reviewRecommendation": "strengthen-existing"
      },
      {
        "id": "ayanna-pressley-imi-1",
        "axis": "imi",
        "sourceTitle": "A Just and Humane Immigration System",
        "sourceUrl": "https://ayannapressley.com/issues/immigration/",
        "locator": "Dois parágrafos; linhas 1–2",
        "boundedParaphrase": "Defende acolhimento por refúgio, família ou oportunidade e acesso inclusivo a instituições independentemente do status migratório.",
        "statement": "Defende acolhimento por refúgio, família ou oportunidade e acesso inclusivo a instituições independentemente do status migratório.",
        "basis": "declaration",
        "publishedDate": "undated; página disponível na consulta de 2026-10-08, sem data editorial inferida",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "É orientação geral de admissão e inclusão, não exceção para um grupo. A dimensão cultural permanece menos explícita.",
        "counterEvidence": "Sem regras sobre língua, cidadania ou integração cultural no texto.",
        "uncertainty": "Admissão inclusiva não equivale automaticamente a multiculturalismo completo.",
        "retrievalMode": "direct",
        "actualReadScope": "Título e dois parágrafos, linhas 0–2.",
        "reviewRecommendation": "supported-with-limits"
      },
      {
        "id": "ayanna-pressley-dip-1",
        "axis": "dip",
        "sourceTitle": "Foreign Policy Centered on Empathy and the Pursuit of Peace",
        "sourceUrl": "https://ayannapressley.com/issues/protecting-the-rights-of-cisgender-and-transgender-women-and-girls/",
        "locator": "Primeiro e quarto parágrafos; linhas 1 e 4",
        "boundedParaphrase": "Prioriza diplomacia e coalizões mundialmente; ação militar é último recurso.",
        "statement": "Prioriza diplomacia e coalizões mundialmente; ação militar é último recurso.",
        "basis": "declaration",
        "publishedDate": "undated; página disponível na consulta de 2026-10-08, sem data editorial inferida",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Regra transversal de escolha de meios externos, cobrindo várias regiões.",
        "counterEvidence": "Uso de força não é rejeitado em absoluto.",
        "uncertainty": "Não codifica INT a partir de DIP.",
        "retrievalMode": "direct",
        "actualReadScope": "Título e quatro parágrafos, linhas 0–4.",
        "reviewRecommendation": "supported"
      },
      {
        "id": "ayanna-pressley-pod-1",
        "axis": "pod",
        "sourceTitle": "Transforming Our Criminal Legal System",
        "sourceUrl": "https://ayannapressley.com/issues/economy/",
        "locator": "Três parágrafos; linhas 1–3",
        "boundedParaphrase": "Propõe substituir encarceramento em massa, desigualdades da fiança e pena de morte por sistema centrado em liberdade e dignidade.",
        "statement": "Propõe substituir encarceramento em massa, desigualdades da fiança e pena de morte por sistema centrado em liberdade e dignidade.",
        "basis": "declaration",
        "publishedDate": "undated; página disponível na consulta de 2026-10-08, sem data editorial inferida",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Reforma da arquitetura penal, abrangendo punição, financiamento e princípios limitadores da coerção, não um só incidente.",
        "counterEvidence": "Segurança integra os princípios; não abole toda coerção legítima.",
        "uncertainty": "Privacidade e mecanismos processuais não detalhados; ampliar pelo comunicado de 2025 requer data explícita.",
        "retrievalMode": "direct",
        "actualReadScope": "Título e três parágrafos, linhas 0–3.",
        "reviewRecommendation": "new-supported"
      },
      {
        "id": "ayanna-pressley-pod-2",
        "axis": "pod",
        "sourceTitle": "Ahead of George Floyd Anniversary, Pressley Reintroduces Suite of Bills to Transform Criminal Legal System, Improve Police Accountability",
        "sourceUrl": "https://pressley.house.gov/2025/05/23/ahead-of-george-floyd-anniversary-pressley-reintroduces-suite-of-bills-to-transform-criminal-legal-system-improve-police-accountability/",
        "locator": "Linhas 47–51, 74, 78–85",
        "boundedParaphrase": "Endossa desencarceramento, responsabilização policial e limites a vigilância biométrica.",
        "statement": "Endossa desencarceramento, responsabilização policial e limites a vigilância biométrica.",
        "basis": "declaration",
        "publishedDate": "2025-05-23",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "A combinação alcança polícia, prisão, direitos civis e privacidade; sustenta o construto mais integralmente.",
        "counterEvidence": "Preserva responsabilização criminal por abusos e preocupação com segurança.",
        "uncertainty": "Projetos são propostas; não implementação.",
        "retrievalMode": "direct",
        "actualReadScope": "Cabeçalho e corpo do comunicado, linhas 42–85, incluindo citação própria e descrição das propostas; projetos anexos não lidos.",
        "reviewRecommendation": "new-supported-dated"
      },
      {
        "id": "ayanna-pressley-rep-1",
        "axis": "rep",
        "sourceTitle": "Pressley Applauds Boston City Council’s Ranked Choice Voting Home Rule Petition",
        "sourceUrl": "https://pressley.house.gov/2024/06/12/pressley-applauds-boston-city-councils-ranked-choice-voting-home-rule-petition/",
        "locator": "Declaração própria linhas 46–47; contexto 48–56",
        "boundedParaphrase": "Defende representação fiel às preferências eleitorais e reformas inclusivas em todos os níveis; apoia voto ranqueado.",
        "statement": "Defende representação fiel às preferências eleitorais e reformas inclusivas em todos os níveis; apoia voto ranqueado.",
        "basis": "declaration",
        "publishedDate": "2024-06-12",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Regra geral de representação eleitoral, corroborada por ampliação de acesso e oposição a supressão de votos.",
        "counterEvidence": "Declaração não cobre toda arquitetura de separação de poderes.",
        "uncertainty": "Fonte de 2024; não integrar como posição recém-publicada em 2026.",
        "retrievalMode": "direct",
        "actualReadScope": "Cabeçalho datado; declaração atribuída a Pressley e contexto de propostas, linhas 42–56.",
        "reviewRecommendation": "new-supported-dated"
      }
    ],
    "existingAxisReview": [
      {
        "axis": "eco",
        "status": "supported-with-limits",
        "rationale": "Reforçada pela combinação emprego público, saúde e transporte; manter provisão distinta de propriedade. A cláusula antiga sozinha não certifica o eixo inteiro.",
        "claimIds": [
          "ayanna-pressley-eco-1",
          "ayanna-pressley-eco-2",
          "ayanna-pressley-eco-3"
        ]
      },
      {
        "axis": "con",
        "status": "supported-with-limits",
        "rationale": "Direção intervencionista é defensável por normas laborais amplas mais habitação; não certifica planejamento central.",
        "claimIds": [
          "ayanna-pressley-con-1",
          "ayanna-pressley-con-2"
        ]
      },
      {
        "axis": "mor",
        "status": "supported-with-limits",
        "rationale": "Mais ampla com aborto, autonomia corporal e igualdade trans.",
        "claimIds": [
          "ayanna-pressley-mor-1",
          "ayanna-pressley-mor-2"
        ]
      },
      {
        "axis": "imi",
        "status": "supported-with-limits",
        "rationale": "Inclusão geral é demonstrada; intensidade cultural não resolvida.",
        "claimIds": [
          "ayanna-pressley-imi-1"
        ]
      },
      {
        "axis": "dip",
        "status": "supported-with-limits",
        "rationale": "Prioridade diplomática global e último recurso são afirmações gerais.",
        "claimIds": [
          "ayanna-pressley-dip-1"
        ]
      }
    ],
    "newAxisReview": [
      {
        "axis": "pod",
        "status": "new-supported",
        "rationale": "A plataforma penal sem data contém projeto abrangente; há corroborador datado de 2025.",
        "claimIds": [
          "ayanna-pressley-pod-1",
          "ayanna-pressley-pod-2"
        ]
      },
      {
        "axis": "rep",
        "status": "new-supported-dated",
        "rationale": "Requer incluir a declaração de 2024 no período, sem atualização automática de toda a plataforma.",
        "claimIds": [
          "ayanna-pressley-rep-1"
        ]
      }
    ],
    "gaps": [
      {
        "axis": "est",
        "reason": "Implementação local de empregos não prova federalismo constitucional."
      },
      {
        "axis": "int",
        "reason": "Coalizões e liderança compassiva não resolvem os polos exatos Não intervencionista/Nacionalista."
      },
      {
        "axis": "com",
        "reason": "Não se leu política comercial abrangente."
      },
      {
        "axis": "rel",
        "reason": "Defesa de comunidades religiosas contra ódio não fixa papel institucional da religião."
      },
      {
        "axis": "tec",
        "reason": "Transporte limpo e inovação comunitária isolados não resolvem entusiasmo técnico versus cautela ambiental."
      }
    ]
  },
  {
    "id": "atiku-abubakar",
    "name": "Atiku Abubakar",
    "priorWholeRecordSha256": "7ec6386e06ad24ddaa71016338835d0d5b4d45929fae851725c22c38edff6f09",
    "existingPeriod": "Programa da campanha2023; atividade reportada28/05/2026 sem atualizar automaticamente posições",
    "periodHandling": "Exclusivamente programa da campanha 2023; dia editorial desconhecido. Não renovar posições com notícia de atividade de 2026.",
    "summary": "Os cinco eixos existentes têm base geral mais robusta do que cláusulas isoladas. COM ganhou programa de integração/multilateralismo, mas contém proteção doméstica expressa que deve acompanhar qualquer codificação. POD/INT permanecem indeterminados no balanço dos polos.",
    "sources": [
      {
        "id": "atiku-covenant",
        "title": "Atiku Abubakar — My Covenant with Nigerians, programa da campanha2023, PDF74p",
        "url": "https://elections.civichive.org/wp-content/uploads/2022/10/Atikus-5-Point-Development-Agenda-Abridged.pdf",
        "publishedDate": "Campanha 2023; undated quanto a dia/mês editorial, caminho de hospedagem 2022/10 não certifica data.",
        "accessedDate": "2026-10-08",
        "retrievalMode": "mirror",
        "actualReadScope": "PDF de 74 páginas: prefácio/endosso pp.3–6; conteúdo econômico pp.12–41; educação/saúde/proteção pp.45–57 via extração local; desenvolvimento/emprego e governança pp.58–72. Conteúdo textual consultado nas áreas listadas; não alegar leitura de todas as páginas gráficas. Inspeção visual integral adicional das páginas físicas 35, 65 e 72.",
        "note": "Documento programático primário assinado/endossado por Atiku na p.6, arquivado pelo CivicHive. PDF local conferido com pdftotext/pdftoppm; fontes estatísticas citadas pelo programa não auditadas. Páginas nesta pesquisa são físicas, 1-based; índice web P é zero-based.",
        "accessFailures": []
      }
    ],
    "claims": [
      {
        "id": "atiku-abubakar-est-1",
        "axis": "est",
        "sourceTitle": "Atiku Abubakar — My Covenant with Nigerians, programa da campanha2023, PDF74p",
        "sourceUrl": "https://elections.civichive.org/wp-content/uploads/2022/10/Atikus-5-Point-Development-Agenda-Abridged.pdf",
        "locator": "P.65, cinco caixas sobre emendas constitucionais; web linhas 1198–1215",
        "boundedParaphrase": "Propõe devolução multissetorial e autonomia financeira local.",
        "statement": "Propõe devolução multissetorial e autonomia financeira local.",
        "basis": "declaration",
        "publishedDate": "Campanha 2023; undated quanto a dia/mês editorial, caminho de hospedagem 2022/10 não certifica data.",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Desenho de competências e receitas em três níveis sustenta federalização geral.",
        "counterEvidence": "Mantém padrões e implementação federais; não secessão.",
        "uncertainty": "Texto sugere possível sobreposição entre devolução da entrega e implementação central.",
        "retrievalMode": "mirror",
        "actualReadScope": "PDF de 74 páginas: prefácio/endosso pp.3–6; conteúdo econômico pp.12–41; educação/saúde/proteção pp.45–57 via extração local; desenvolvimento/emprego e governança pp.58–72. Conteúdo textual consultado nas áreas listadas; não alegar leitura de todas as páginas gráficas. Inspeção visual integral adicional das páginas físicas 35, 65 e 72.",
        "reviewRecommendation": "supported"
      },
      {
        "id": "atiku-abubakar-rep-1",
        "axis": "rep",
        "sourceTitle": "Atiku Abubakar — My Covenant with Nigerians, programa da campanha2023, PDF74p",
        "sourceUrl": "https://elections.civichive.org/wp-content/uploads/2022/10/Atikus-5-Point-Development-Agenda-Abridged.pdf",
        "locator": "P.62, quatro âncoras; p.71, estratégia anticorrupção",
        "boundedParaphrase": "Exige voto efetivo, participação organizada, transparência e separação de poderes.",
        "statement": "Exige voto efetivo, participação organizada, transparência e separação de poderes.",
        "basis": "declaration",
        "publishedDate": "Campanha 2023; undated quanto a dia/mês editorial, caminho de hospedagem 2022/10 não certifica data.",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Conjunto de responsabilização eleitoral e institucional, não inferência pelo cargo.",
        "counterEvidence": "É compromisso normativo de campanha.",
        "uncertainty": "Prática não auditada.",
        "retrievalMode": "mirror",
        "actualReadScope": "PDF de 74 páginas: prefácio/endosso pp.3–6; conteúdo econômico pp.12–41; educação/saúde/proteção pp.45–57 via extração local; desenvolvimento/emprego e governança pp.58–72. Conteúdo textual consultado nas áreas listadas; não alegar leitura de todas as páginas gráficas. Inspeção visual integral adicional das páginas físicas 35, 65 e 72.",
        "reviewRecommendation": "supported"
      },
      {
        "id": "atiku-abubakar-eco-1",
        "axis": "eco",
        "sourceTitle": "Atiku Abubakar — My Covenant with Nigerians, programa da campanha2023, PDF74p",
        "sourceUrl": "https://elections.civichive.org/wp-content/uploads/2022/10/Atikus-5-Point-Development-Agenda-Abridged.pdf",
        "locator": "Pp.12–13; p.22 itens 3–4; p.49 coluna final",
        "boundedParaphrase": "Privilegia liderança privada e privatização de refinarias.",
        "statement": "Privilegia liderança privada e privatização de refinarias.",
        "basis": "declaration",
        "publishedDate": "Campanha 2023; undated quanto a dia/mês editorial, caminho de hospedagem 2022/10 não certifica data.",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Regra geral acompanhada de propriedade/provisão em múltiplos setores.",
        "counterEvidence": "PPP e serviços sociais públicos permanecem.",
        "uncertainty": "Não privatização universal.",
        "retrievalMode": "mirror",
        "actualReadScope": "PDF de 74 páginas: prefácio/endosso pp.3–6; conteúdo econômico pp.12–41; educação/saúde/proteção pp.45–57 via extração local; desenvolvimento/emprego e governança pp.58–72. Conteúdo textual consultado nas áreas listadas; não alegar leitura de todas as páginas gráficas. Inspeção visual integral adicional das páginas físicas 35, 65 e 72.",
        "reviewRecommendation": "supported"
      },
      {
        "id": "atiku-abubakar-con-1",
        "axis": "con",
        "sourceTitle": "Atiku Abubakar — My Covenant with Nigerians, programa da campanha2023, PDF74p",
        "sourceUrl": "https://elections.civichive.org/wp-content/uploads/2022/10/Atikus-5-Point-Development-Agenda-Abridged.pdf",
        "locator": "Pp.12–13; p.19; pp.30,36",
        "boundedParaphrase": "Prioriza mercado nos preços e desregulação econômica.",
        "statement": "Prioriza mercado nos preços e desregulação econômica.",
        "basis": "declaration",
        "publishedDate": "Campanha 2023; undated quanto a dia/mês editorial, caminho de hospedagem 2022/10 não certifica data.",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Princípio de alocação geral, distinto da titularidade patrimonial.",
        "counterEvidence": "Incentivos, crédito público e proteção seletiva.",
        "uncertainty": "Não laissez-faire integral.",
        "retrievalMode": "mirror",
        "actualReadScope": "PDF de 74 páginas: prefácio/endosso pp.3–6; conteúdo econômico pp.12–41; educação/saúde/proteção pp.45–57 via extração local; desenvolvimento/emprego e governança pp.58–72. Conteúdo textual consultado nas áreas listadas; não alegar leitura de todas as páginas gráficas. Inspeção visual integral adicional das páginas físicas 35, 65 e 72.",
        "reviewRecommendation": "supported"
      },
      {
        "id": "atiku-abubakar-tec-1",
        "axis": "tec",
        "sourceTitle": "Atiku Abubakar — My Covenant with Nigerians, programa da campanha2023, PDF74p",
        "sourceUrl": "https://elections.civichive.org/wp-content/uploads/2022/10/Atikus-5-Point-Development-Agenda-Abridged.pdf",
        "locator": "P.14; p.26; p.33, Technology Support Programme",
        "boundedParaphrase": "Promove aplicações digitais multissetoriais e mecanização agrícola.",
        "statement": "Promove aplicações digitais multissetoriais e mecanização agrícola.",
        "basis": "declaration",
        "publishedDate": "Campanha 2023; undated quanto a dia/mês editorial, caminho de hospedagem 2022/10 não certifica data.",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Programas técnicos concretos abrangentes, além de elogio abstrato à ciência.",
        "counterEvidence": "Prevenção sanitária/ambiente limpo na p.49.",
        "uncertainty": "Não apoio irrestrito a toda tecnologia.",
        "retrievalMode": "mirror",
        "actualReadScope": "PDF de 74 páginas: prefácio/endosso pp.3–6; conteúdo econômico pp.12–41; educação/saúde/proteção pp.45–57 via extração local; desenvolvimento/emprego e governança pp.58–72. Conteúdo textual consultado nas áreas listadas; não alegar leitura de todas as páginas gráficas. Inspeção visual integral adicional das páginas físicas 35, 65 e 72.",
        "reviewRecommendation": "supported"
      },
      {
        "id": "atiku-abubakar-com-1",
        "axis": "com",
        "sourceTitle": "Atiku Abubakar — My Covenant with Nigerians, programa da campanha2023, PDF74p",
        "sourceUrl": "https://elections.civichive.org/wp-content/uploads/2022/10/Atikus-5-Point-Development-Agenda-Abridged.pdf",
        "locator": "P.35, seis bullets; p.72, coluna What We Will Do, promoção do comércio multilateral",
        "boundedParaphrase": "Defende AfCFTA, ECOWAS e comércio multilateral.",
        "statement": "Defende AfCFTA, ECOWAS e comércio multilateral.",
        "basis": "declaration",
        "publishedDate": "Campanha 2023; undated quanto a dia/mês editorial, caminho de hospedagem 2022/10 não certifica data.",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Programa externo geral e integração continental; candidato ao polo Globalismo.",
        "counterEvidence": "P.19 proteção temporária; p.28 compras nacionais/importações.",
        "uncertainty": "Não confundir livre mercado doméstico com livre comércio.",
        "retrievalMode": "mirror",
        "actualReadScope": "PDF de 74 páginas: prefácio/endosso pp.3–6; conteúdo econômico pp.12–41; educação/saúde/proteção pp.45–57 via extração local; desenvolvimento/emprego e governança pp.58–72. Conteúdo textual consultado nas áreas listadas; não alegar leitura de todas as páginas gráficas. Inspeção visual integral adicional das páginas físicas 35, 65 e 72.",
        "reviewRecommendation": "new-candidate-with-counterevidence"
      },
      {
        "id": "atiku-abubakar-com-2",
        "axis": "com",
        "sourceTitle": "Atiku Abubakar — My Covenant with Nigerians, programa da campanha2023, PDF74p",
        "sourceUrl": "https://elections.civichive.org/wp-content/uploads/2022/10/Atikus-5-Point-Development-Agenda-Abridged.pdf",
        "locator": "P.19, Incentive Structure; p.25 metas; p.28, itens 3–4",
        "boundedParaphrase": "Prevê proteção seletiva, substituição de importações e compras nacionais.",
        "statement": "Prevê proteção seletiva, substituição de importações e compras nacionais.",
        "basis": "declaration",
        "publishedDate": "Campanha 2023; undated quanto a dia/mês editorial, caminho de hospedagem 2022/10 não certifica data.",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Contraprova material impede direção extrema; não detalhe incidental.",
        "counterEvidence": "Integração e comércio multilateral explícitos.",
        "uncertainty": "Balanço editorial precisa reconhecer as duas orientações.",
        "retrievalMode": "mirror",
        "actualReadScope": "PDF de 74 páginas: prefácio/endosso pp.3–6; conteúdo econômico pp.12–41; educação/saúde/proteção pp.45–57 via extração local; desenvolvimento/emprego e governança pp.58–72. Conteúdo textual consultado nas áreas listadas; não alegar leitura de todas as páginas gráficas. Inspeção visual integral adicional das páginas físicas 35, 65 e 72.",
        "reviewRecommendation": "counterevidence"
      },
      {
        "id": "atiku-abubakar-pod-1",
        "axis": "pod",
        "sourceTitle": "Atiku Abubakar — My Covenant with Nigerians, programa da campanha2023, PDF74p",
        "sourceUrl": "https://elections.civichive.org/wp-content/uploads/2022/10/Atikus-5-Point-Development-Agenda-Abridged.pdf",
        "locator": "Pp.67–69 segurança; p.71 Estado de direito",
        "boundedParaphrase": "Amplia polícia, inteligência e registro civil, preservando dignidade e legalidade.",
        "statement": "Amplia polícia, inteligência e registro civil, preservando dignidade e legalidade.",
        "basis": "declaration",
        "publishedDate": "Campanha 2023; undated quanto a dia/mês editorial, caminho de hospedagem 2022/10 não certifica data.",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Capacidade de segurança é clara; balanço com privacidade e garantias não está suficientemente especificado.",
        "counterEvidence": "Inclusão, relações comunitárias e proteção de denunciantes.",
        "uncertainty": "Não inferir autoritarismo apenas do aumento de efetivo.",
        "retrievalMode": "mirror",
        "actualReadScope": "PDF de 74 páginas: prefácio/endosso pp.3–6; conteúdo econômico pp.12–41; educação/saúde/proteção pp.45–57 via extração local; desenvolvimento/emprego e governança pp.58–72. Conteúdo textual consultado nas áreas listadas; não alegar leitura de todas as páginas gráficas. Inspeção visual integral adicional das páginas físicas 35, 65 e 72.",
        "reviewRecommendation": "hold"
      },
      {
        "id": "atiku-abubakar-int-1",
        "axis": "int",
        "sourceTitle": "Atiku Abubakar — My Covenant with Nigerians, programa da campanha2023, PDF74p",
        "sourceUrl": "https://elections.civichive.org/wp-content/uploads/2022/10/Atikus-5-Point-Development-Agenda-Abridged.pdf",
        "locator": "P.72, quadro International Relations",
        "boundedParaphrase": "Centraliza interesses nacionais e liderança externa na diplomacia econômica.",
        "statement": "Centraliza interesses nacionais e liderança externa na diplomacia econômica.",
        "basis": "declaration",
        "publishedDate": "Campanha 2023; undated quanto a dia/mês editorial, caminho de hospedagem 2022/10 não certifica data.",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Compromisso externo amplo, porém insuficiente para resolver eixo não ortogonal.",
        "counterEvidence": "Interdependência e relações mutuamente benéficas.",
        "uncertainty": "Não estabelece doutrina geral sobre intervenção.",
        "retrievalMode": "mirror",
        "actualReadScope": "PDF de 74 páginas: prefácio/endosso pp.3–6; conteúdo econômico pp.12–41; educação/saúde/proteção pp.45–57 via extração local; desenvolvimento/emprego e governança pp.58–72. Conteúdo textual consultado nas áreas listadas; não alegar leitura de todas as páginas gráficas. Inspeção visual integral adicional das páginas físicas 35, 65 e 72.",
        "reviewRecommendation": "hold"
      }
    ],
    "existingAxisReview": [
      {
        "axis": "est",
        "status": "supported-with-limits",
        "rationale": "Regra programática geral e aplicações multissetoriais verificadas; contraprovas mantidas no claim.",
        "claimIds": [
          "atiku-abubakar-est-1"
        ]
      },
      {
        "axis": "rep",
        "status": "supported-with-limits",
        "rationale": "Regra programática geral e aplicações multissetoriais verificadas; contraprovas mantidas no claim.",
        "claimIds": [
          "atiku-abubakar-rep-1"
        ]
      },
      {
        "axis": "eco",
        "status": "supported-with-limits",
        "rationale": "Regra programática geral e aplicações multissetoriais verificadas; contraprovas mantidas no claim.",
        "claimIds": [
          "atiku-abubakar-eco-1"
        ]
      },
      {
        "axis": "con",
        "status": "supported-with-limits",
        "rationale": "Regra programática geral e aplicações multissetoriais verificadas; contraprovas mantidas no claim.",
        "claimIds": [
          "atiku-abubakar-con-1"
        ]
      },
      {
        "axis": "tec",
        "status": "supported-with-limits",
        "rationale": "Regra programática geral e aplicações multissetoriais verificadas; contraprovas mantidas no claim.",
        "claimIds": [
          "atiku-abubakar-tec-1"
        ]
      }
    ],
    "newAxisReview": [
      {
        "axis": "com",
        "status": "new-candidate-with-counterevidence",
        "rationale": "Integração continental e multilateralismo são gerais; proteção seletiva e compras nacionais vedam extremo. Cabe ao revisor decidir a direção ordinal.",
        "claimIds": [
          "atiku-abubakar-com-1",
          "atiku-abubakar-com-2"
        ]
      },
      {
        "axis": "pod",
        "status": "hold",
        "rationale": "Aumento de capacidade policial não fixa sozinho o balanço segurança/liberdade.",
        "claimIds": [
          "atiku-abubakar-pod-1"
        ]
      },
      {
        "axis": "int",
        "status": "hold",
        "rationale": "Interesses nacionais e multilateralismo coexistem; não há regra de intervenção comparável aos polos.",
        "claimIds": [
          "atiku-abubakar-int-1"
        ]
      }
    ],
    "gaps": [
      {
        "axis": "imi",
        "reason": "Diversidade interna e governança inclusiva não bastam para toda política migratória/cultural."
      },
      {
        "axis": "dip",
        "reason": "Diplomacia econômica e alternativas na insurgência não estabelecem preferência militar/diplomática geral inequívoca."
      },
      {
        "axis": "rel",
        "reason": "Não inferir institucionalidade religiosa de identidade pessoal, sukuk ou referência ao extremismo."
      },
      {
        "axis": "mor",
        "reason": "Acesso de mulheres a educação/saúde/crédito não resolve costumes integralmente."
      }
    ]
  },
  {
    "id": "ilhan-omar",
    "name": "Ilhan Omar",
    "priorWholeRecordSha256": "de985d8f274a5b96cf8e942ec7aeec5205fd05670f6530995cfb431187a3d927",
    "existingPeriod": "Posições legislativas autodeclaradas na página Issues consultada em 7 de outubro de 2026; página sem data de publicação.",
    "periodHandling": "Páginas temáticas sem data consultadas em 2026; REP/POD adicionais são de 21/01/2021. Integrar estes exige registrar ambos os recortes, sem dizer que o ensaio foi reafirmado em 2026.",
    "summary": "Reabertura da página Issues permite corroborar os quatro eixos existentes. IMI ficou mais amplo pela subpágina autoral; REP e POD são sustentados por ensaio próprio de 2021, lido no índice oficial após 403 direto. MOR tem fonte própria sem data, mas escopo principalmente reprodutivo.",
    "sources": [
      {
        "id": "omar-issues",
        "title": "Issues — Representative Ilhan Omar",
        "url": "https://omar.house.gov/issues",
        "publishedDate": "undated; página disponível na consulta de 2026-10-08, sem data editorial inferida",
        "accessedDate": "2026-10-08",
        "retrievalMode": "direct",
        "actualReadScope": "Corpo integral da página, linhas 1–25: Immigration, Workers and Economy, Education, Environmental Justice, Healthcare, Foreign Policy.",
        "note": "Acesso direto funcionou em 2026-10-08; reavaliação independente supera a indisponibilidade anterior somente para esta URL.",
        "accessFailures": []
      },
      {
        "id": "omar-immigration",
        "title": "Immigration — Representative Ilhan Omar",
        "url": "https://omar.house.gov/issues/immigration",
        "publishedDate": "undated; página disponível na consulta de 2026-10-08, sem data editorial inferida",
        "accessedDate": "2026-10-08",
        "retrievalMode": "direct",
        "actualReadScope": "Texto programático integral, linhas 7–12. Índice subsequente de notícias lido, mas excluído das posições sem data.",
        "note": "",
        "accessFailures": []
      },
      {
        "id": "omar-education",
        "title": "Education — Representative Ilhan Omar",
        "url": "https://omar.house.gov/issues/education",
        "publishedDate": "undated; página disponível na consulta de 2026-10-08, sem data editorial inferida",
        "accessedDate": "2026-10-08",
        "retrievalMode": "direct",
        "actualReadScope": "Texto programático integral, linhas 7–12; não se usa a data das notícias do índice como data do programa.",
        "note": "",
        "accessFailures": []
      },
      {
        "id": "omar-health",
        "title": "Healthcare — Representative Ilhan Omar",
        "url": "https://omar.house.gov/issues/healthcare",
        "publishedDate": "undated; página disponível na consulta de 2026-10-08, sem data editorial inferida",
        "accessedDate": "2026-10-08",
        "retrievalMode": "indexed",
        "actualReadScope": "Texto indexado dos quatro parágrafos programáticos completos, até defesa de autonomia corporal; notícias subsequentes não usadas.",
        "note": "Fonte autoral do gabinete lida no resultado indexado, não resposta direta atual.",
        "accessFailures": [
          "Abertura direta 403 Forbidden em 2026-10-08."
        ]
      },
      {
        "id": "omar-democracy",
        "title": "Rep. Omar Essay in the Atlantic on Protecting Our Democracy",
        "url": "https://omar.house.gov/media/in-the-news/rep-omar-essay-atlantic-protecting-our-democracy",
        "publishedDate": "2021-01-21",
        "accessedDate": "2026-10-08",
        "retrievalMode": "indexed",
        "actualReadScope": "Cabeçalho datado e texto integral indexado do ensaio próprio We Can’t Stop Fighting for Our Democracy. Atenção aos quatro parágrafos finais sobre transição, reforma eleitoral, Estado policial e violência política.",
        "note": "Ensaio individual reproduzido no gabinete; corpo completo recuperado no índice, não somente snippet. Não se verificaram alegações históricas do ensaio.",
        "accessFailures": [
          "Abertura direta 403 Forbidden em 2026-10-08."
        ]
      }
    ],
    "claims": [
      {
        "id": "ilhan-omar-imi-1",
        "axis": "imi",
        "sourceTitle": "Immigration — Representative Ilhan Omar",
        "sourceUrl": "https://omar.house.gov/issues/immigration",
        "locator": "Linhas 7–12, seis parágrafos programáticos",
        "boundedParaphrase": "Valoriza diversidade migrante; propõe acolhimento sem discriminação, cidadania e reassentamento de refugiados.",
        "statement": "Valoriza diversidade migrante; propõe acolhimento sem discriminação, cidadania e reassentamento de refugiados.",
        "basis": "declaration",
        "publishedDate": "undated; página disponível na consulta de 2026-10-08, sem data editorial inferida",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Política geral de inclusão/admissão, com recusa de criminalização por identidade; ultrapassa um benefício isolado.",
        "counterEvidence": "Propõe substituir ICE por agência que preserve segurança nacional.",
        "uncertainty": "Não elimina regras migratórias nem apresenta todo modelo linguístico-cultural.",
        "retrievalMode": "direct",
        "actualReadScope": "Texto programático integral, linhas 7–12. Índice subsequente de notícias lido, mas excluído das posições sem data.",
        "reviewRecommendation": "strengthen-existing"
      },
      {
        "id": "ilhan-omar-eco-1",
        "axis": "eco",
        "sourceTitle": "Issues — Representative Ilhan Omar",
        "sourceUrl": "https://omar.house.gov/issues",
        "locator": "Healthcare e Education, linhas 14–21",
        "boundedParaphrase": "Defende pagador único e ensino superior sem mensalidade.",
        "statement": "Defende pagador único e ensino superior sem mensalidade.",
        "basis": "declaration",
        "publishedDate": "undated; página disponível na consulta de 2026-10-08, sem data editorial inferida",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Comprova financiamento universal em dois serviços. Não resolve propriedade dos provedores.",
        "counterEvidence": "Não afirma nacionalização dos hospitais/universidades.",
        "uncertainty": "ECO só é sustentado na faceta serviços públicos; precisa evitar transportar financiamento para propriedade geral.",
        "retrievalMode": "direct",
        "actualReadScope": "Corpo integral da página, linhas 1–25: Immigration, Workers and Economy, Education, Environmental Justice, Healthcare, Foreign Policy.",
        "reviewRecommendation": "supported-services-only"
      },
      {
        "id": "ilhan-omar-eco-2",
        "axis": "eco",
        "sourceTitle": "Education — Representative Ilhan Omar",
        "sourceUrl": "https://omar.house.gov/issues/education",
        "locator": "Linhas 7–12",
        "boundedParaphrase": "Defende recursos e infraestrutura escolar, ensino superior gratuito e cancelamento de dívida.",
        "statement": "Defende recursos e infraestrutura escolar, ensino superior gratuito e cancelamento de dívida.",
        "basis": "declaration",
        "publishedDate": "undated; página disponível na consulta de 2026-10-08, sem data editorial inferida",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Amplia níveis educacionais, sem estabelecer organização de toda produção.",
        "counterEvidence": "Nada aqui exclui escolas ou provisão privada.",
        "uncertainty": "Se o critério exigir regime geral de propriedade, suspender ECO em vez de extrapolar.",
        "retrievalMode": "direct",
        "actualReadScope": "Texto programático integral, linhas 7–12; não se usa a data das notícias do índice como data do programa.",
        "reviewRecommendation": "sectoral-support"
      },
      {
        "id": "ilhan-omar-con-1",
        "axis": "con",
        "sourceTitle": "Issues — Representative Ilhan Omar",
        "sourceUrl": "https://omar.house.gov/issues",
        "locator": "Workers and Economy e Environmental Justice, linhas 11–18",
        "boundedParaphrase": "Propõe proteções laborais nacionais e transição energética regulada.",
        "statement": "Propõe proteções laborais nacionais e transição energética regulada.",
        "basis": "declaration",
        "publishedDate": "undated; página disponível na consulta de 2026-10-08, sem data editorial inferida",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Normas que cobrem trabalhadores de qualquer setor e transformação energética dão amplitude regulatória.",
        "counterEvidence": "Investimento e salário mínimo não equivalem a comando integral de preços/produção.",
        "uncertainty": "Direção regulatória é defensável; intensidade limitada.",
        "retrievalMode": "direct",
        "actualReadScope": "Corpo integral da página, linhas 1–25: Immigration, Workers and Economy, Education, Environmental Justice, Healthcare, Foreign Policy.",
        "reviewRecommendation": "supported-with-limits"
      },
      {
        "id": "ilhan-omar-dip-1",
        "axis": "dip",
        "sourceTitle": "Issues — Representative Ilhan Omar",
        "sourceUrl": "https://omar.house.gov/issues",
        "locator": "Foreign Policy, linhas 24–25",
        "boundedParaphrase": "Quer tropas de volta, diplomacia e engajamento cultural/econômico; força militar como último recurso.",
        "statement": "Quer tropas de volta, diplomacia e engajamento cultural/econômico; força militar como último recurso.",
        "basis": "declaration",
        "publishedDate": "undated; página disponível na consulta de 2026-10-08, sem data editorial inferida",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Regra geral dos meios de política externa.",
        "counterEvidence": "Admite uso de força; mantém engajamento internacional ativo.",
        "uncertainty": "Não derivar INT automaticamente.",
        "retrievalMode": "direct",
        "actualReadScope": "Corpo integral da página, linhas 1–25: Immigration, Workers and Economy, Education, Environmental Justice, Healthcare, Foreign Policy.",
        "reviewRecommendation": "supported"
      },
      {
        "id": "ilhan-omar-rep-1",
        "axis": "rep",
        "sourceTitle": "Rep. Omar Essay in the Atlantic on Protecting Our Democracy",
        "sourceUrl": "https://omar.house.gov/media/in-the-news/rep-omar-essay-atlantic-protecting-our-democracy",
        "locator": "Parágrafos Reform requires… e But we can’t stop there…",
        "boundedParaphrase": "Defende transição pacífica, ampliação do voto, fim de gerrymandering e reformas eleitorais representativas.",
        "statement": "Defende transição pacífica, ampliação do voto, fim de gerrymandering e reformas eleitorais representativas.",
        "basis": "declaration",
        "publishedDate": "2021-01-21",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Programa transversal de desenho eleitoral e responsabilização política; não inferência de cargo eletivo.",
        "counterEvidence": "Pede responsabilização/remoção de colaboradores de insurreição e reforma dos tribunais; não supressão genérica de opositores.",
        "uncertainty": "Declaração datada de 2021; não comprovada execução nem renovação em 2026.",
        "retrievalMode": "indexed",
        "actualReadScope": "Cabeçalho datado e texto integral indexado do ensaio próprio We Can’t Stop Fighting for Our Democracy. Atenção aos quatro parágrafos finais sobre transição, reforma eleitoral, Estado policial e violência política.",
        "reviewRecommendation": "new-supported-dated"
      },
      {
        "id": "ilhan-omar-pod-1",
        "axis": "pod",
        "sourceTitle": "Rep. Omar Essay in the Atlantic on Protecting Our Democracy",
        "sourceUrl": "https://omar.house.gov/media/in-the-news/rep-omar-essay-atlantic-protecting-our-democracy",
        "locator": "Penúltimo parágrafo, We also cannot fall into the trap…",
        "boundedParaphrase": "Rejeita expandir aparato de segurança ou Estado policial por medo; exige dignidade e direitos de todos.",
        "statement": "Rejeita expandir aparato de segurança ou Estado policial por medo; exige dignidade e direitos de todos.",
        "basis": "declaration",
        "publishedDate": "2021-01-21",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Princípio geral de limitação de coerção, aplicável além de uma identidade religiosa ou protesto.",
        "counterEvidence": "Parágrafo anterior requer responsabilização dos autores de violência política.",
        "uncertainty": "Não pacifismo penal nem inventário completo de privacidade.",
        "retrievalMode": "indexed",
        "actualReadScope": "Cabeçalho datado e texto integral indexado do ensaio próprio We Can’t Stop Fighting for Our Democracy. Atenção aos quatro parágrafos finais sobre transição, reforma eleitoral, Estado policial e violência política.",
        "reviewRecommendation": "new-supported-dated"
      },
      {
        "id": "ilhan-omar-pod-2",
        "axis": "pod",
        "sourceTitle": "Immigration — Representative Ilhan Omar",
        "sourceUrl": "https://omar.house.gov/issues/immigration",
        "locator": "Parágrafos 2–4; linhas 8–10",
        "boundedParaphrase": "Rejeita policiamento migratório militarizado e presunção de criminalidade por origem ou religião.",
        "statement": "Rejeita policiamento migratório militarizado e presunção de criminalidade por origem ou religião.",
        "basis": "declaration",
        "publishedDate": "undated; página disponível na consulta de 2026-10-08, sem data editorial inferida",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Corrobora limites do Estado coercitivo; sozinho ainda seria setor migratório.",
        "counterEvidence": "Agência substituta preserva defesa da segurança nacional.",
        "uncertainty": "Não codificar todo POD somente por essa política.",
        "retrievalMode": "direct",
        "actualReadScope": "Texto programático integral, linhas 7–12. Índice subsequente de notícias lido, mas excluído das posições sem data.",
        "reviewRecommendation": "sectoral-support"
      },
      {
        "id": "ilhan-omar-mor-1",
        "axis": "mor",
        "sourceTitle": "Healthcare — Representative Ilhan Omar",
        "sourceUrl": "https://omar.house.gov/issues/healthcare",
        "locator": "Quarto parágrafo programático, I also stand in support…",
        "boundedParaphrase": "Defende autonomia corporal, contracepção e aborto acessíveis.",
        "statement": "Defende autonomia corporal, contracepção e aborto acessíveis.",
        "basis": "declaration",
        "publishedDate": "undated; página disponível na consulta de 2026-10-08, sem data editorial inferida",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Mudança social/emancipatória explícita, mas principal dimensão lida é reprodução.",
        "counterEvidence": "Demais costumes não especificados neste texto.",
        "uncertainty": "Candidato limitado; não certificar todo eixo a partir de uma única faceta.",
        "retrievalMode": "indexed",
        "actualReadScope": "Texto indexado dos quatro parágrafos programáticos completos, até defesa de autonomia corporal; notícias subsequentes não usadas.",
        "reviewRecommendation": "new-candidate-limited"
      }
    ],
    "existingAxisReview": [
      {
        "axis": "imi",
        "status": "supported-with-limits",
        "rationale": "Subpágina acrescenta diversidade, não discriminação, cidadania e reassentamento; manter limites culturais.",
        "claimIds": [
          "ilhan-omar-imi-1"
        ]
      },
      {
        "axis": "eco",
        "status": "supported-with-limits",
        "rationale": "Financiamento/provisão de serviços é explícito, mas não regime de propriedade. Reavaliar rigor da amplitude; não chamar financiamento de nacionalização.",
        "claimIds": [
          "ilhan-omar-eco-1",
          "ilhan-omar-eco-2"
        ]
      },
      {
        "axis": "con",
        "status": "supported-with-limits",
        "rationale": "Regulação laboral universal mais programa energético; não planejamento integral.",
        "claimIds": [
          "ilhan-omar-con-1"
        ]
      },
      {
        "axis": "dip",
        "status": "supported-with-limits",
        "rationale": "Enunciado geral de meios externos.",
        "claimIds": [
          "ilhan-omar-dip-1"
        ]
      }
    ],
    "newAxisReview": [
      {
        "axis": "rep",
        "status": "new-supported-dated",
        "rationale": "Ensaio de 2021; pendente de compatibilização explícita do período.",
        "claimIds": [
          "ilhan-omar-rep-1"
        ]
      },
      {
        "axis": "pod",
        "status": "new-supported-dated",
        "rationale": "Ensaio de 2021 mais política migratória sem data, com exceções de segurança registradas.",
        "claimIds": [
          "ilhan-omar-pod-1",
          "ilhan-omar-pod-2"
        ]
      },
      {
        "axis": "mor",
        "status": "new-candidate-limited",
        "rationale": "Direitos reprodutivos são explícitos, mas não devem funcionar como certificação automática de todo o construto.",
        "claimIds": [
          "ilhan-omar-mor-1"
        ]
      }
    ],
    "gaps": [
      {
        "axis": "est",
        "reason": "Financiamento federal e eventual autonomia de DC não equivalem a doutrina territorial completa."
      },
      {
        "axis": "int",
        "reason": "Retirada de tropas/diplomacia não bastam para polos Não intervencionista/Nacionalista."
      },
      {
        "axis": "com",
        "reason": "Não foi lido programa de abertura/proteção comercial geral."
      },
      {
        "axis": "rel",
        "reason": "Identidade muçulmana e combate à discriminação não definem papel da religião nas instituições."
      },
      {
        "axis": "tec",
        "reason": "Renováveis e manufatura eficiente não dão por si sós o balanço geral técnico/biológico."
      }
    ]
  }
];
export const native16PublicFiguresHeldClaims = {
  "ayanna-pressley": [
    {
      "id": "ayanna-pressley-eco-1",
      "axis": "eco",
      "sourceTitle": "Fighting for a Just Economy",
      "sourceUrl": "https://ayannapressley.com/issues/jobguarantee/",
      "locator": "Parágrafo 3; linha 5",
      "boundedParaphrase": "Propõe emprego público disponível a qualquer adulto que busque trabalho.",
      "statement": "Propõe emprego público disponível a qualquer adulto que busque trabalho.",
      "basis": "declaration",
      "publishedDate": "undated; página disponível na consulta de 2026-10-08, sem data editorial inferida",
      "accessedDate": "2026-10-08",
      "wholeConstructRationale": "É oferta de provisão pública, não só subsídio; precisa ser lida junto aos serviços de saúde e transporte para sustentar amplitude.",
      "counterEvidence": "Execução comunitária/local; não exige estatizar empresas privadas.",
      "uncertainty": "Isolada, a garantia de emprego é insuficiente para predominância pública de toda a economia.",
      "retrievalMode": "direct",
      "actualReadScope": "Título e corpo integral, parágrafos 1–4; linhas 0–6 do texto extraído.",
      "reviewRecommendation": "strengthen-existing"
    },
    {
      "id": "ayanna-pressley-eco-2",
      "axis": "eco",
      "sourceTitle": "Tackling Entrenched Healthcare Disparities",
      "sourceUrl": "https://ayannapressley.com/issues/climate-crisis/",
      "locator": "Parágrafo iniciado Ayanna believes; linha 3",
      "boundedParaphrase": "Defende Medicare for All e investimento em centros comunitários de saúde.",
      "statement": "Defende Medicare for All e investimento em centros comunitários de saúde.",
      "basis": "declaration",
      "publishedDate": "undated; página disponível na consulta de 2026-10-08, sem data editorial inferida",
      "accessedDate": "2026-10-08",
      "wholeConstructRationale": "Amplia a evidência de compromisso com serviços universais; financiamento público não estabelece propriedade dos prestadores.",
      "counterEvidence": "Página não especifica eliminação de prestadores privados.",
      "uncertainty": "Só usar com empregos públicos/transporte; não chamar de nacionalização.",
      "retrievalMode": "direct",
      "actualReadScope": "Título e corpo integral, linhas 0–4.",
      "reviewRecommendation": "sectoral-support"
    },
    {
      "id": "ayanna-pressley-eco-3",
      "axis": "eco",
      "sourceTitle": "Imagining the Future of Transportation",
      "sourceUrl": "https://ayannapressley.com/issues/transportation/",
      "locator": "Segundo parágrafo; linha 2",
      "boundedParaphrase": "Defende investimento federal e transporte público acessível.",
      "statement": "Defende investimento federal e transporte público acessível.",
      "basis": "declaration",
      "publishedDate": "undated; página disponível na consulta de 2026-10-08, sem data editorial inferida",
      "accessedDate": "2026-10-08",
      "wholeConstructRationale": "Outro domínio de provisão pública; a combinação oferece orientação mais ampla que uma cláusula financiadora.",
      "counterEvidence": "Não propõe propriedade pública de toda modalidade de transporte.",
      "uncertainty": "Não prova implementação.",
      "retrievalMode": "direct",
      "actualReadScope": "Título e dois parágrafos, linhas 0–2.",
      "reviewRecommendation": "sectoral-support"
    },
    {
      "id": "ayanna-pressley-con-1",
      "axis": "con",
      "sourceTitle": "Fighting for a Just Economy",
      "sourceUrl": "https://ayannapressley.com/issues/jobguarantee/",
      "locator": "Parágrafos 2–4; linhas 4–6",
      "boundedParaphrase": "Propõe garantia legal de emprego, salários, benefícios, proteção sindical e confronto a práticas corporativas que elevem custos.",
      "statement": "Propõe garantia legal de emprego, salários, benefícios, proteção sindical e confronto a práticas corporativas que elevem custos.",
      "basis": "declaration",
      "publishedDate": "undated; página disponível na consulta de 2026-10-08, sem data editorial inferida",
      "accessedDate": "2026-10-08",
      "wholeConstructRationale": "Uma garantia abrangente de trabalho é mecanismo de coordenação pública do mercado laboral; não é um plano integral da produção.",
      "counterEvidence": "Mantém empresas e empregos privados como parte do contexto.",
      "uncertainty": "A evidência sustenta intervenção/regulação; não autoriza intensidade de planejamento central.",
      "retrievalMode": "direct",
      "actualReadScope": "Título e corpo integral, parágrafos 1–4; linhas 0–6 do texto extraído.",
      "reviewRecommendation": "supported-with-limits"
    },
    {
      "id": "ayanna-pressley-con-2",
      "axis": "con",
      "sourceTitle": "Housing as a Human Right",
      "sourceUrl": "https://ayannapressley.com/issues/housing/",
      "locator": "Terceiro e quarto parágrafos; linhas 3–4",
      "boundedParaphrase": "Endossa moratória de despejos e investimento habitacional.",
      "statement": "Endossa moratória de despejos e investimento habitacional.",
      "basis": "declaration",
      "publishedDate": "undated; página disponível na consulta de 2026-10-08, sem data editorial inferida",
      "accessedDate": "2026-10-08",
      "wholeConstructRationale": "Corrobora regulação e intervenção em outro domínio além do trabalho.",
      "counterEvidence": "A afirmação de extensão bem-sucedida é autodescrição, não prática auditada.",
      "uncertainty": "Isoladamente setorial; investimento não prova regime geral de alocação.",
      "retrievalMode": "direct",
      "actualReadScope": "Título e quatro parágrafos, linhas 0–4.",
      "reviewRecommendation": "sectoral-support"
    }
  ],
  "atiku-abubakar": [
    {
      "id": "atiku-abubakar-com-1",
      "axis": "com",
      "sourceTitle": "Atiku Abubakar — My Covenant with Nigerians, programa da campanha2023, PDF74p",
      "sourceUrl": "https://elections.civichive.org/wp-content/uploads/2022/10/Atikus-5-Point-Development-Agenda-Abridged.pdf",
      "locator": "P.35, seis bullets; p.72, coluna What We Will Do, promoção do comércio multilateral",
      "boundedParaphrase": "Defende AfCFTA, ECOWAS e comércio multilateral.",
      "statement": "Defende AfCFTA, ECOWAS e comércio multilateral.",
      "basis": "declaration",
      "publishedDate": "Campanha 2023; undated quanto a dia/mês editorial, caminho de hospedagem 2022/10 não certifica data.",
      "accessedDate": "2026-10-08",
      "wholeConstructRationale": "Programa externo geral e integração continental; candidato ao polo Globalismo.",
      "counterEvidence": "P.19 proteção temporária; p.28 compras nacionais/importações.",
      "uncertainty": "Não confundir livre mercado doméstico com livre comércio.",
      "retrievalMode": "mirror",
      "actualReadScope": "PDF de 74 páginas: prefácio/endosso pp.3–6; conteúdo econômico pp.12–41; educação/saúde/proteção pp.45–57 via extração local; desenvolvimento/emprego e governança pp.58–72. Conteúdo textual consultado nas áreas listadas; não alegar leitura de todas as páginas gráficas. Inspeção visual integral adicional das páginas físicas 35, 65 e 72.",
      "reviewRecommendation": "new-candidate-with-counterevidence"
    },
    {
      "id": "atiku-abubakar-com-2",
      "axis": "com",
      "sourceTitle": "Atiku Abubakar — My Covenant with Nigerians, programa da campanha2023, PDF74p",
      "sourceUrl": "https://elections.civichive.org/wp-content/uploads/2022/10/Atikus-5-Point-Development-Agenda-Abridged.pdf",
      "locator": "P.19, Incentive Structure; p.25 metas; p.28, itens 3–4",
      "boundedParaphrase": "Prevê proteção seletiva, substituição de importações e compras nacionais.",
      "statement": "Prevê proteção seletiva, substituição de importações e compras nacionais.",
      "basis": "declaration",
      "publishedDate": "Campanha 2023; undated quanto a dia/mês editorial, caminho de hospedagem 2022/10 não certifica data.",
      "accessedDate": "2026-10-08",
      "wholeConstructRationale": "Contraprova material impede direção extrema; não detalhe incidental.",
      "counterEvidence": "Integração e comércio multilateral explícitos.",
      "uncertainty": "Balanço editorial precisa reconhecer as duas orientações.",
      "retrievalMode": "mirror",
      "actualReadScope": "PDF de 74 páginas: prefácio/endosso pp.3–6; conteúdo econômico pp.12–41; educação/saúde/proteção pp.45–57 via extração local; desenvolvimento/emprego e governança pp.58–72. Conteúdo textual consultado nas áreas listadas; não alegar leitura de todas as páginas gráficas. Inspeção visual integral adicional das páginas físicas 35, 65 e 72.",
      "reviewRecommendation": "counterevidence"
    },
    {
      "id": "atiku-abubakar-pod-1",
      "axis": "pod",
      "sourceTitle": "Atiku Abubakar — My Covenant with Nigerians, programa da campanha2023, PDF74p",
      "sourceUrl": "https://elections.civichive.org/wp-content/uploads/2022/10/Atikus-5-Point-Development-Agenda-Abridged.pdf",
      "locator": "Pp.67–69 segurança; p.71 Estado de direito",
      "boundedParaphrase": "Amplia polícia, inteligência e registro civil, preservando dignidade e legalidade.",
      "statement": "Amplia polícia, inteligência e registro civil, preservando dignidade e legalidade.",
      "basis": "declaration",
      "publishedDate": "Campanha 2023; undated quanto a dia/mês editorial, caminho de hospedagem 2022/10 não certifica data.",
      "accessedDate": "2026-10-08",
      "wholeConstructRationale": "Capacidade de segurança é clara; balanço com privacidade e garantias não está suficientemente especificado.",
      "counterEvidence": "Inclusão, relações comunitárias e proteção de denunciantes.",
      "uncertainty": "Não inferir autoritarismo apenas do aumento de efetivo.",
      "retrievalMode": "mirror",
      "actualReadScope": "PDF de 74 páginas: prefácio/endosso pp.3–6; conteúdo econômico pp.12–41; educação/saúde/proteção pp.45–57 via extração local; desenvolvimento/emprego e governança pp.58–72. Conteúdo textual consultado nas áreas listadas; não alegar leitura de todas as páginas gráficas. Inspeção visual integral adicional das páginas físicas 35, 65 e 72.",
      "reviewRecommendation": "hold"
    },
    {
      "id": "atiku-abubakar-int-1",
      "axis": "int",
      "sourceTitle": "Atiku Abubakar — My Covenant with Nigerians, programa da campanha2023, PDF74p",
      "sourceUrl": "https://elections.civichive.org/wp-content/uploads/2022/10/Atikus-5-Point-Development-Agenda-Abridged.pdf",
      "locator": "P.72, quadro International Relations",
      "boundedParaphrase": "Centraliza interesses nacionais e liderança externa na diplomacia econômica.",
      "statement": "Centraliza interesses nacionais e liderança externa na diplomacia econômica.",
      "basis": "declaration",
      "publishedDate": "Campanha 2023; undated quanto a dia/mês editorial, caminho de hospedagem 2022/10 não certifica data.",
      "accessedDate": "2026-10-08",
      "wholeConstructRationale": "Compromisso externo amplo, porém insuficiente para resolver eixo não ortogonal.",
      "counterEvidence": "Interdependência e relações mutuamente benéficas.",
      "uncertainty": "Não estabelece doutrina geral sobre intervenção.",
      "retrievalMode": "mirror",
      "actualReadScope": "PDF de 74 páginas: prefácio/endosso pp.3–6; conteúdo econômico pp.12–41; educação/saúde/proteção pp.45–57 via extração local; desenvolvimento/emprego e governança pp.58–72. Conteúdo textual consultado nas áreas listadas; não alegar leitura de todas as páginas gráficas. Inspeção visual integral adicional das páginas físicas 35, 65 e 72.",
      "reviewRecommendation": "hold"
    }
  ],
  "ilhan-omar": [
    {
      "id": "ilhan-omar-eco-1",
      "axis": "eco",
      "sourceTitle": "Issues — Representative Ilhan Omar",
      "sourceUrl": "https://omar.house.gov/issues",
      "locator": "Healthcare e Education, linhas 14–21",
      "boundedParaphrase": "Defende pagador único e ensino superior sem mensalidade.",
      "statement": "Defende pagador único e ensino superior sem mensalidade.",
      "basis": "declaration",
      "publishedDate": "undated; página disponível na consulta de 2026-10-08, sem data editorial inferida",
      "accessedDate": "2026-10-08",
      "wholeConstructRationale": "Comprova financiamento universal em dois serviços. Não resolve propriedade dos provedores.",
      "counterEvidence": "Não afirma nacionalização dos hospitais/universidades.",
      "uncertainty": "ECO só é sustentado na faceta serviços públicos; precisa evitar transportar financiamento para propriedade geral.",
      "retrievalMode": "direct",
      "actualReadScope": "Corpo integral da página, linhas 1–25: Immigration, Workers and Economy, Education, Environmental Justice, Healthcare, Foreign Policy.",
      "reviewRecommendation": "supported-services-only"
    },
    {
      "id": "ilhan-omar-eco-2",
      "axis": "eco",
      "sourceTitle": "Education — Representative Ilhan Omar",
      "sourceUrl": "https://omar.house.gov/issues/education",
      "locator": "Linhas 7–12",
      "boundedParaphrase": "Defende recursos e infraestrutura escolar, ensino superior gratuito e cancelamento de dívida.",
      "statement": "Defende recursos e infraestrutura escolar, ensino superior gratuito e cancelamento de dívida.",
      "basis": "declaration",
      "publishedDate": "undated; página disponível na consulta de 2026-10-08, sem data editorial inferida",
      "accessedDate": "2026-10-08",
      "wholeConstructRationale": "Amplia níveis educacionais, sem estabelecer organização de toda produção.",
      "counterEvidence": "Nada aqui exclui escolas ou provisão privada.",
      "uncertainty": "Se o critério exigir regime geral de propriedade, suspender ECO em vez de extrapolar.",
      "retrievalMode": "direct",
      "actualReadScope": "Texto programático integral, linhas 7–12; não se usa a data das notícias do índice como data do programa.",
      "reviewRecommendation": "sectoral-support"
    },
    {
      "id": "ilhan-omar-con-1",
      "axis": "con",
      "sourceTitle": "Issues — Representative Ilhan Omar",
      "sourceUrl": "https://omar.house.gov/issues",
      "locator": "Workers and Economy e Environmental Justice, linhas 11–18",
      "boundedParaphrase": "Propõe proteções laborais nacionais e transição energética regulada.",
      "statement": "Propõe proteções laborais nacionais e transição energética regulada.",
      "basis": "declaration",
      "publishedDate": "undated; página disponível na consulta de 2026-10-08, sem data editorial inferida",
      "accessedDate": "2026-10-08",
      "wholeConstructRationale": "Normas que cobrem trabalhadores de qualquer setor e transformação energética dão amplitude regulatória.",
      "counterEvidence": "Investimento e salário mínimo não equivalem a comando integral de preços/produção.",
      "uncertainty": "Direção regulatória é defensável; intensidade limitada.",
      "retrievalMode": "direct",
      "actualReadScope": "Corpo integral da página, linhas 1–25: Immigration, Workers and Economy, Education, Environmental Justice, Healthcare, Foreign Policy.",
      "reviewRecommendation": "supported-with-limits"
    },
    {
      "id": "ilhan-omar-mor-1",
      "axis": "mor",
      "sourceTitle": "Healthcare — Representative Ilhan Omar",
      "sourceUrl": "https://omar.house.gov/issues/healthcare",
      "locator": "Quarto parágrafo programático, I also stand in support…",
      "boundedParaphrase": "Defende autonomia corporal, contracepção e aborto acessíveis.",
      "statement": "Defende autonomia corporal, contracepção e aborto acessíveis.",
      "basis": "declaration",
      "publishedDate": "undated; página disponível na consulta de 2026-10-08, sem data editorial inferida",
      "accessedDate": "2026-10-08",
      "wholeConstructRationale": "Mudança social/emancipatória explícita, mas principal dimensão lida é reprodução.",
      "counterEvidence": "Demais costumes não especificados neste texto.",
      "uncertainty": "Candidato limitado; não certificar todo eixo a partir de uma única faceta.",
      "retrievalMode": "indexed",
      "actualReadScope": "Texto indexado dos quatro parágrafos programáticos completos, até defesa de autonomia corporal; notícias subsequentes não usadas.",
      "reviewRecommendation": "new-candidate-limited"
    }
  ]
};
export const native16PublicFiguresNewSources:Record<string,ReferenceSource[]> = {
  "ayanna-pressley": [
    {
      "title": "Fighting for a Just Economy — página de campanha sem data",
      "url": "https://ayannapressley.com/issues/jobguarantee/",
      "note": "Publicação: undated; página disponível na consulta de 2026-10-08, sem data editorial inferida Consulta08/10/2026; declaração, não implementação. Título e corpo completos efetivamente abertos; slugs discrepantes não usados para inferir conteúdo. COVID-19 e promessa de Biden indicam contexto anterior, sem data editorial nova em 2026."
    },
    {
      "title": "Abortion Care as a Human Right — página de campanha sem data",
      "url": "https://ayannapressley.com/issues/lgbtq/",
      "note": "Publicação: undated; página disponível na consulta de 2026-10-08, sem data editorial inferida Consulta08/10/2026; declaração, não implementação. Título e corpo completos efetivamente abertos; slugs discrepantes não usados para inferir conteúdo. COVID-19 e promessa de Biden indicam contexto anterior, sem data editorial nova em 2026."
    },
    {
      "title": "Foreign Policy Centered on Empathy and the Pursuit of Peace — página de campanha sem data",
      "url": "https://ayannapressley.com/issues/protecting-the-rights-of-cisgender-and-transgender-women-and-girls/",
      "note": "Publicação: undated; página disponível na consulta de 2026-10-08, sem data editorial inferida Consulta08/10/2026; declaração, não implementação. Título e corpo completos efetivamente abertos; slugs discrepantes não usados para inferir conteúdo. COVID-19 e promessa de Biden indicam contexto anterior, sem data editorial nova em 2026."
    },
    {
      "title": "A Just and Humane Immigration System — página de campanha sem data",
      "url": "https://ayannapressley.com/issues/immigration/",
      "note": "Publicação: undated; página disponível na consulta de 2026-10-08, sem data editorial inferida Consulta08/10/2026; declaração, não implementação. Título e corpo completos efetivamente abertos; slugs discrepantes não usados para inferir conteúdo. COVID-19 e promessa de Biden indicam contexto anterior, sem data editorial nova em 2026."
    },
    {
      "title": "Transforming Our Criminal Legal System — página de campanha sem data",
      "url": "https://ayannapressley.com/issues/economy/",
      "note": "Publicação: undated; página disponível na consulta de 2026-10-08, sem data editorial inferida Consulta08/10/2026; declaração, não implementação. Título e corpo completos efetivamente abertos; slugs discrepantes não usados para inferir conteúdo. COVID-19 e promessa de Biden indicam contexto anterior, sem data editorial nova em 2026."
    },
    {
      "title": "Standing Up Against Hate and Violence — página de campanha sem data",
      "url": "https://ayannapressley.com/issues/foreign-policy/",
      "note": "Publicação: undated; página disponível na consulta de 2026-10-08, sem data editorial inferida Consulta08/10/2026; declaração, não implementação. Corpo nominal da campanha integralmente recuperado no índice; abertura direta retornou Timeout. Igualdade trans não inferida do slug."
    },
    {
      "title": "Tackling Entrenched Healthcare Disparities — página de campanha sem data",
      "url": "https://ayannapressley.com/issues/climate-crisis/",
      "note": "Publicação: undated; página disponível na consulta de 2026-10-08, sem data editorial inferida Consulta08/10/2026; declaração, não implementação. Título e corpo completos efetivamente abertos; slugs discrepantes não usados para inferir conteúdo. COVID-19 e promessa de Biden indicam contexto anterior, sem data editorial nova em 2026."
    },
    {
      "title": "Imagining the Future of Transportation — página de campanha sem data",
      "url": "https://ayannapressley.com/issues/transportation/",
      "note": "Publicação: undated; página disponível na consulta de 2026-10-08, sem data editorial inferida Consulta08/10/2026; declaração, não implementação. Título e corpo completos efetivamente abertos; slugs discrepantes não usados para inferir conteúdo. COVID-19 e promessa de Biden indicam contexto anterior, sem data editorial nova em 2026."
    },
    {
      "title": "Housing as a Human Right — página de campanha sem data",
      "url": "https://ayannapressley.com/issues/housing/",
      "note": "Publicação: undated; página disponível na consulta de 2026-10-08, sem data editorial inferida Consulta08/10/2026; declaração, não implementação. Título e corpo completos efetivamente abertos; slugs discrepantes não usados para inferir conteúdo. COVID-19 e promessa de Biden indicam contexto anterior, sem data editorial nova em 2026."
    },
    {
      "title": "Pressley Applauds Boston City Council’s Ranked Choice Voting Home Rule Petition — 2024-06-12",
      "url": "https://pressley.house.gov/2024/06/12/pressley-applauds-boston-city-councils-ranked-choice-voting-home-rule-petition/",
      "note": "Publicação: 2024-06-12 Consulta08/10/2026; declaração, não implementação. Cabeçalho e corpo institucional efetivamente lidos; palavras próprias e propostas nominalmente endossadas distinguidas de falas de terceiros. Projetos anexos e resultados alegados não auditados."
    },
    {
      "title": "Ahead of George Floyd Anniversary, Pressley Reintroduces Suite of Bills to Transform Criminal Legal System, Improve Police Accountability — 2025-05-23",
      "url": "https://pressley.house.gov/2025/05/23/ahead-of-george-floyd-anniversary-pressley-reintroduces-suite-of-bills-to-transform-criminal-legal-system-improve-police-accountability/",
      "note": "Publicação: 2025-05-23 Consulta08/10/2026; declaração, não implementação. Cabeçalho e corpo institucional efetivamente lidos; palavras próprias e propostas nominalmente endossadas distinguidas de falas de terceiros. Projetos anexos e resultados alegados não auditados."
    }
  ],
  "atiku-abubakar": [
    {
      "title": "My Covenant with Nigerians — programa da campanha de 2023",
      "url": "https://elections.civichive.org/wp-content/uploads/2022/10/Atikus-5-Point-Development-Agenda-Abridged.pdf",
      "note": "Publicação: Campanha 2023; undated quanto a dia/mês editorial, caminho de hospedagem 2022/10 não certifica data. Consulta08/10/2026; declaração, não implementação. Programa primário nominalmente endossado57–66, arquivado por CivicHive. Conferência atual: texto extraído selecionado0–370/293–543/533–595/747–795/1102–1344/1346–1394, não todas as74p. Download local retornou403; capturas solicitadas não foram visualizadas nesta conferência. O relatório externo relata inspeção visual separada das páginas35/65/72; não é nossa nova autenticação de bytes."
    }
  ],
  "ilhan-omar": [
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
  ]
};
export const native16PublicFiguresCoding:Record<string,ReferenceAxisCoding[]> = {
  "ayanna-pressley": [
    {
      "axis": "rep",
      "position": "moderate-first",
      "confidence": "medium",
      "claims": [
        {
          "locator": "Declaração própria linhas 46–47; contexto 48–56",
          "statement": "Defende representação fiel às preferências eleitorais e reformas inclusivas em todos os níveis; apoia voto ranqueado.",
          "basis": "declaration",
          "publishedDate": "2024-06-12",
          "accessedDate": "2026-10-08",
          "sourceTitle": "Pressley Applauds Boston City Council’s Ranked Choice Voting Home Rule Petition — 2024-06-12"
        }
      ],
      "rationale": "Defende representação eleitoral e reformas inclusivas em todos os níveis, não apenas resultado eleitoral local.",
      "uncertainty": "Declaração não cobre toda arquitetura de separação de poderes. Fonte de 2024; não integrar como posição recém-publicada em 2026.",
      "relatedQuestionIds": [
        "representacao_01",
        "representacao_07"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "pod",
      "position": "moderate-second",
      "confidence": "medium",
      "claims": [
        {
          "locator": "Três parágrafos; linhas 1–3",
          "statement": "Propõe substituir encarceramento em massa, desigualdades da fiança e pena de morte por sistema centrado em liberdade e dignidade.",
          "basis": "declaration",
          "publishedDate": "undated; página disponível na consulta de 2026-10-08, sem data editorial inferida",
          "accessedDate": "2026-10-08",
          "sourceTitle": "Transforming Our Criminal Legal System — página de campanha sem data"
        },
        {
          "locator": "Linhas 47–51, 74, 78–85",
          "statement": "Endossa desencarceramento, responsabilização policial e limites a vigilância biométrica.",
          "basis": "declaration",
          "publishedDate": "2025-05-23",
          "accessedDate": "2026-10-08",
          "sourceTitle": "Ahead of George Floyd Anniversary, Pressley Reintroduces Suite of Bills to Transform Criminal Legal System, Improve Police Accountability — 2025-05-23"
        }
      ],
      "rationale": "Reforma geral da coerção penal, responsabilização policial e limites à vigilância, preservando segurança e punição de abusos.",
      "uncertainty": "A plataforma sem data menciona Biden e não foi datada como2026. Fonte própria de 23/05/2025 amplia o recorte explicitamente; moratória biométrica, linha 74, é citada retrospectivamente como proposta de março de 2023, sem nova apresentação2025 presumida. Projetos anexos não lidos e promessas/resultados não auditados. Segurança e responsabilização criminal de agentes por abuso permanecem; vigilância aqui é biométrica, não toda coleta de dados.",
      "relatedQuestionIds": [
        "poder_05",
        "poder_15"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "imi",
      "position": "moderate-second",
      "confidence": "medium",
      "claims": [
        {
          "locator": "Dois parágrafos; linhas 1–2",
          "statement": "Defende acolhimento por refúgio, família ou oportunidade e acesso inclusivo a instituições independentemente do status migratório.",
          "basis": "declaration",
          "publishedDate": "undated; página disponível na consulta de 2026-10-08, sem data editorial inferida",
          "accessedDate": "2026-10-08",
          "sourceTitle": "A Just and Humane Immigration System — página de campanha sem data"
        }
      ],
      "rationale": "Acolhimento amplo por refúgio, família ou oportunidade e inclusão institucional, sem programa completo de idiomas ou costumes.",
      "uncertainty": "Não especifica regimes de idioma, manutenção de todos os costumes, cidadania ou entrada irrestrita; inclusão não é prova automática de toda política cultural.",
      "relatedQuestionIds": [
        "imigracao_12",
        "imigracao_19"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "dip",
      "position": "moderate-second",
      "confidence": "medium",
      "claims": [
        {
          "locator": "Primeiro e quarto parágrafos; linhas 1 e 4",
          "statement": "Prioriza diplomacia e coalizões mundialmente; ação militar é último recurso.",
          "basis": "declaration",
          "publishedDate": "undated; página disponível na consulta de 2026-10-08, sem data editorial inferida",
          "accessedDate": "2026-10-08",
          "sourceTitle": "Foreign Policy Centered on Empathy and the Pursuit of Peace — página de campanha sem data"
        }
      ],
      "rationale": "Regra global de diplomacia e coalizões, com força militar como último recurso.",
      "uncertainty": "Uso de força não é rejeitado em absoluto. Não codifica INT a partir de DIP.",
      "relatedQuestionIds": [
        "diplomacia_01"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "mor",
      "position": "moderate-first",
      "confidence": "medium",
      "claims": [
        {
          "locator": "Ambos os parágrafos",
          "statement": "Defende autonomia corporal, aborto e contracepção acessíveis.",
          "basis": "declaration",
          "publishedDate": "undated; página disponível na consulta de 2026-10-08, sem data editorial inferida",
          "accessedDate": "2026-10-08",
          "sourceTitle": "Abortion Care as a Human Right — página de campanha sem data"
        },
        {
          "locator": "Parágrafos 1–2 do texto indexado",
          "statement": "Endossa igualdade LGBTQ e reconhecimento do nome de pessoas trans.",
          "basis": "declaration",
          "publishedDate": "undated; página disponível na consulta de 2026-10-08, sem data editorial inferida",
          "accessedDate": "2026-10-08",
          "sourceTitle": "Standing Up Against Hate and Violence — página de campanha sem data"
        }
      ],
      "rationale": "Autonomia reprodutiva e reconhecimento social de pessoas trans e igualdade LGBT combinam facetas amplas de emancipação.",
      "uncertainty": "Não especifica todos os temas de moral. Não transportar o slug como prova de direitos LGBTQ. Não equivale a qualquer posição concebível sobre costumes. Recuperação indexada; resultados das propostas não auditados.",
      "relatedQuestionIds": [
        "moral_03",
        "moral_09"
      ],
      "reviewedOn": "2026-10-08"
    }
  ],
  "atiku-abubakar": [
    {
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
      "reviewedOn": "2026-10-08"
    },
    {
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
      "reviewedOn": "2026-10-08"
    },
    {
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
      "reviewedOn": "2026-10-08"
    },
    {
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
      "reviewedOn": "2026-10-08"
    },
    {
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
      "reviewedOn": "2026-10-08"
    }
  ],
  "ilhan-omar": [
    {
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
      "reviewedOn": "2026-10-08"
    },
    {
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
      "reviewedOn": "2026-10-08"
    },
    {
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
      "reviewedOn": "2026-10-08"
    },
    {
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
      "reviewedOn": "2026-10-08"
    }
  ]
};
const periods:Record<string,string> = {
  "ayanna-pressley": "Plataforma de campanha publicada sem datas; consulta em 7 de outubro de 2026. O texto econômico menciona recuperação da crise de COVID-19 e não deve ser tratado como proposta recém-lançada. Declarações próprias de 12/06/2024 e de 23/05/2025 analisadas separadamente, sem renovação integral em 2026.",
  "atiku-abubakar": "Programa da campanha2023; atividade reportada28/05/2026 sem atualizar automaticamente posições",
  "ilhan-omar": "Posições legislativas autodeclaradas na página Issues consultada em 7 de outubro de 2026; página sem data de publicação. Ensaio próprio de 21/01/2021 acrescentado como recorte datado separado, sem renovação integral em 2026."
};
const rationales:Record<string,string> = {
  "ayanna-pressley": "Defende representação inclusiva, reforma penal com limites à vigilância, acolhimento migratório, autonomia corporal e diplomacia.",
  "atiku-abubakar": "Propõe autonomia federativa, representação democrática, liderança privada, preços de mercado, inovação e integração comercial limitada.",
  "ilhan-omar": "Defende inclusão migratória, diplomacia e, no ensaio2021, reforma democrática e limites ao Estado policial."
};
const caveats:Record<string,string> = {
  "ayanna-pressley": "Declarações de campanha sem data e fontes próprias de 2024/2025 são recortes separados; COVID-19/Biden não datam novas posições2026. Emprego público, financiamento de saúde/transporte e regras laborais/habitacionais ficam preservados como pesquisa, sem provar orientação geral de propriedade ou alocação. Não autoria alheia, execução, todos os costumes ou fim de toda coerção. Objeto e fontes anteriores íntegros arquivados. Atividade nominal em 2026 mantida somente como identidade.",
  "atiku-abubakar": "Programa pessoalmente endossado de campanha de 2023, sem dia editorial certificado; atividade reportada2026 não renova posições. Propostas normativas, não resultados. Regulação, PPP, garantias federais e proteção comercial doméstica limitam as direções; integração multilateral não equivale a comércio sem barreiras. Objeto e fontes anteriores íntegros arquivados.",
  "ilhan-omar": "Ensaio individual de 21/01/2021 e páginas institucionais sem data permanecem recortes separados; atividade2026 não renova o ensaio. Direitos e diplomacia são declarações, não resultados; agência migratória substituta preserva segurança nacional e violência política exige responsabilização. Financiamento de saúde/educação e normas de salários/licenças/energia não provam propriedade geral ou planejamento econômico. Reprodução oficial indexada distingue falhas de acesso direto. Objeto e fontes anteriores íntegros arquivados."
};
const unknownReasons:Record<string,Partial<Record<typeof AXIS_KEYS[number],string>>> = {
  "ayanna-pressley": {
    "eco": "Emprego público para adultos e financiamento de saúde, transporte e habitação preservados; não estabelecem orientação geral da propriedade produtiva.",
    "con": "Garantia de emprego e regras laborais/habitacionais não estabelecem prioridade geral de coordenação pública sobre alocação por mercados."
  },
  "atiku-abubakar": {
    "com": "Integração continental e comércio multilateral são propostas reais, mas não estabelecem preferência geral de abertura diante de proteção temporária, incentivos a insumos nacionais e compras públicas nacionais."
  },
  "ilhan-omar": {
    "eco": "Pagador único e educação gratuita especificam financiamento/acesso, sem regime geral de propriedade dos prestadores ou da produção.",
    "con": "Salário mínimo, licença remunerada e investimento energético não estabelecem regra geral de coordenação da alocação econômica.",
    "mor": "Direitos reprodutivos claros permanecem pesquisa, sem amplitude adicional de costumes suficiente para graduação integral."
  }
};
export const native16PublicFiguresProposed:ReferenceEntry[]=native16PublicFiguresBefore.map(before=>{
 const after:ReferenceEntry & {unknownAxisReasons?:Partial<Record<typeof AXIS_KEYS[number],string>>}=structuredClone(before);
 after.sources.push(...structuredClone(native16PublicFiguresNewSources[before.id]));
 after.period=periods[before.id];after.rationale=rationales[before.id];after.caveats=caveats[before.id];
 after.vec=Object.fromEntries(AXIS_KEYS.map(key=>[key,50])) as ReferenceEntry['vec'];
 after.evidence={};after.axisEvidence={};after.coding={};
 after.unknownAxisReasons={...unknownReasons[before.id]};
 for(const input of native16PublicFiguresCoding[before.id]){const coded=codeReferenceAxis(input,after.sources);after.vec[input.axis]=coded.value;after.evidence[input.axis]=coded.evidence;after.axisEvidence![input.axis]=coded.axisEvidence;after.coding![input.axis]=coded.coding;}
 return after;
});
export function reconcileNative16PublicFigures(entry:ReferenceEntry):ReferenceEntry{
 const index=native16PublicFiguresBefore.findIndex(x=>x.id===entry.id);if(index<0)return entry;
 const post=native16PublicFiguresProposed[index];if(JSON.stringify(entry)===JSON.stringify(post))return entry;
 if(JSON.stringify(entry)!==JSON.stringify(native16PublicFiguresBefore[index]))throw new Error('Native16 public whole prior object changed: '+entry.id);
 return structuredClone(post);
}
