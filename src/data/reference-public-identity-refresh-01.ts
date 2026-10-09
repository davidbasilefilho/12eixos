import type { ReferenceEntry, ReferenceSource } from './references';
type IdentityArchiveEntry=Omit<ReferenceEntry,'sources'> & {sources:(ReferenceSource & {publishedDate?:string})[]};
/** Identity-only proposal; whole originals and exact committed95 before retained. No policy/scoring changes. */
export const publicIdentityRefresh01Original818:IdentityArchiveEntry[] = [
  {
    "id": "denis-mukwege",
    "name": "Denis Mukwege",
    "kind": "person",
    "category": "public-figure",
    "period": "Artigo assinado de 13 de novembro de 2025",
    "sources": [
      {
        "title": "Denis Mukwege — Without women, there can be no lasting peace",
        "url": "https://theelders.org/news/without-women-there-can-be-no-lasting-peace",
        "publishedDate": "2025-11-13",
        "note": "Artigo assinado, adaptado de boletim pelo próprio organismo do autor; aberto em 7/10/2026. Não atribuir declarações coletivas dos Elders sem adesão pessoal documentada."
      },
      {
        "title": "Denis Mukwege — membro atual dos Elders",
        "url": "https://theelders.org/profile/denis-mukwege",
        "note": "Perfil institucional atual, distinto do artigo assinado que sustenta o eixo. Aberta em 7/10/2026; identidade contemporânea, sem valores de eixo."
      }
    ],
    "caveats": "Participação feminina na construção da paz é o subtema lido; prêmio e profissão não geram posições nos demais eixos.",
    "rationale": "Recorte de declarações primárias documentadas; demais eixos desconhecidos.",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 60,
      "tec": 50
    },
    "evidence": {
      "mor": "medium"
    },
    "axisEvidence": {
      "mor": {
        "sourceTitles": [
          "Denis Mukwege — Without women, there can be no lasting peace"
        ],
        "rationale": "Igualdade de participação sustenta direção emancipatória. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não estabelece programa completo sobre família, aborto ou outros costumes."
      }
    },
    "coding": {
      "mor": {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Denis Mukwege — Without women, there can be no lasting peace",
            "publishedDate": "2025-11-13",
            "accessedDate": "2026-10-07",
            "locator": "Parágrafos While women often bear; However; As we mark; The participation of women",
            "statement": "Defende liderança e participação plena e igual de mulheres nas negociações e construção da paz.",
            "basis": "declaration"
          }
        ],
        "rationale": "Igualdade de participação sustenta direção emancipatória.",
        "uncertainty": "Não estabelece programa completo sobre família, aborto ou outros costumes.",
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
    "id": "juan-manuel-santos",
    "name": "Juan Manuel Santos",
    "kind": "person",
    "category": "public-figure",
    "period": "Declaração nominal de 24 de fevereiro de 2025",
    "sources": [
      {
        "title": "Juan Manuel Santos — negociações inclusivas sobre Ucrânia",
        "url": "https://theelders.org/news/juan-manuel-santos-urges-inclusive-peace-talks-ukraines-future",
        "publishedDate": "2025-02-24",
        "note": "Declaração nominal reproduzida pelo próprio organismo, aberta em 7/10/2026; conteúdo distinto da biografia editorial."
      },
      {
        "title": "Juan Manuel Santos — presidente atual dos Elders",
        "url": "https://theelders.org/profile/juan-manuel-santos",
        "note": "Perfil institucional atual identifica presidência da organização, não cargo atual no governo colombiano. Aberta em 7/10/2026; identidade contemporânea, sem valores de eixo."
      }
    ],
    "caveats": "Negociação inclusiva nesse conflito; apoio à segurança ucraniana não equivale a pacifismo absoluto nem prova toda a trajetória.",
    "rationale": "Recorte de declarações primárias documentadas; demais eixos desconhecidos.",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
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
      "dip": "medium"
    },
    "axisEvidence": {
      "dip": {
        "sourceTitles": [
          "Juan Manuel Santos — negociações inclusivas sobre Ucrânia"
        ],
        "rationale": "Preferência por solução diplomática inclusiva sustenta direção pacífica delimitada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não rejeita defesa militar ou apoio a aliados; não transforma negociações em neutralidade."
      }
    },
    "coding": {
      "dip": {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Juan Manuel Santos — negociações inclusivas sobre Ucrânia",
            "publishedDate": "2025-02-24",
            "accessedDate": "2026-10-07",
            "locator": "Declaração nominal: parágrafos The conflict is entering; The whole world will pay",
            "statement": "Pede negociações de paz com participação direta da Ucrânia e de países europeus, preservando soberania e garantias de segurança.",
            "basis": "declaration"
          }
        ],
        "rationale": "Preferência por solução diplomática inclusiva sustenta direção pacífica delimitada.",
        "uncertainty": "Não rejeita defesa militar ou apoio a aliados; não transforma negociações em neutralidade.",
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
    "id": "hina-jilani",
    "name": "Hina Jilani",
    "kind": "person",
    "category": "public-figure",
    "period": "2022-11-25",
    "sources": [
      {
        "title": "Leaders must tackle root causes of gender-based violence and ensure justice for all",
        "url": "https://theelders.org/news/leaders-must-tackle-root-causes-gender-based-violence-and-ensure-justice-all",
        "note": "Declaração primária efetivamente aberta em 7/10/2026; somente autoria nominal ou assinatura individual codificada."
      },
      {
        "title": "Hina Jilani — identidade contemporânea",
        "url": "https://theelders.org/profile/hina-jilani",
        "note": "Perfil institucional atual, distinto da declaração nominal. Aberta em 7/10/2026; identidade sem inferência de eixo."
      }
    ],
    "caveats": "Não cobre todos os costumes; não imputa a ela cada parágrafo coletivo da página. Demais eixos desconhecidos. Revisão independente de conteúdo pendente.",
    "rationale": "Declaração primária delimitada; demais eixos desconhecidos.",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 60,
      "tec": 50
    },
    "evidence": {
      "mor": "medium"
    },
    "axisEvidence": {
      "mor": {
        "sourceTitles": [
          "Leaders must tackle root causes of gender-based violence and ensure justice for all"
        ],
        "rationale": "Emancipação de gênero estabelece direção reformista delimitada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não cobre todos os costumes; não imputa a ela cada parágrafo coletivo da página."
      }
    },
    "coding": {
      "mor": {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Leaders must tackle root causes of gender-based violence and ensure justice for all",
            "publishedDate": "2022-11-25",
            "accessedDate": "2026-10-07",
            "locator": "Citação nominal de Hina Jilani, dois parágrafos após Hina Jilani said",
            "statement": "Defende autonomia corporal e acesso igual de mulheres à justiça contra discriminação patriarcal.",
            "basis": "declaration"
          }
        ],
        "rationale": "Emancipação de gênero estabelece direção reformista delimitada.",
        "uncertainty": "Não cobre todos os costumes; não imputa a ela cada parágrafo coletivo da página.",
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
    "id": "ernesto-zedillo",
    "name": "Ernesto Zedillo",
    "kind": "person",
    "category": "public-figure",
    "period": "2025-05-07",
    "sources": [
      {
        "title": "Nuclear weapons pose a terrible danger to us all",
        "url": "https://theelders.org/news/nuclear-weapons-pose-terrible-danger-us-all",
        "note": "Declaração primária efetivamente aberta em 7/10/2026; somente autoria nominal ou assinatura individual codificada."
      },
      {
        "title": "Ernesto Zedillo — identidade contemporânea",
        "url": "https://theelders.org/profile/ernesto-zedillo",
        "note": "Perfil institucional atual dos Elders. Aberta em 7/10/2026; identidade sem inferência de eixo."
      }
    ],
    "caveats": "Política nuclear não estabelece rejeição de todas as forças armadas ou guerras. Demais eixos desconhecidos. Revisão independente de conteúdo pendente.",
    "rationale": "Declaração primária delimitada; demais eixos desconhecidos.",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
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
      "dip": "medium"
    },
    "axisEvidence": {
      "dip": {
        "sourceTitles": [
          "Nuclear weapons pose a terrible danger to us all"
        ],
        "rationale": "Negociação e redução de armamentos sustentam direção pacífica nesse domínio. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Política nuclear não estabelece rejeição de todas as forças armadas ou guerras."
      }
    },
    "coding": {
      "dip": {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Nuclear weapons pose a terrible danger to us all",
            "publishedDate": "2025-05-07",
            "accessedDate": "2026-10-07",
            "locator": "Parágrafos No First Use; four Ds; diplomatic efforts; assinatura Ernesto Zedillo",
            "statement": "Pede redução do risco nuclear, não primeiro uso e esforços diplomáticos para desarmamento.",
            "basis": "declaration"
          }
        ],
        "rationale": "Negociação e redução de armamentos sustentam direção pacífica nesse domínio.",
        "uncertainty": "Política nuclear não estabelece rejeição de todas as forças armadas ou guerras.",
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
    "id": "zeid-raad-al-hussein",
    "name": "Zeid Ra’ad Al Hussein",
    "kind": "person",
    "category": "public-figure",
    "period": "2025-10-14",
    "sources": [
      {
        "title": "The UN must take the need for reform seriously",
        "url": "https://theelders.org/news/un-must-take-need-reform-seriously",
        "note": "Declaração primária efetivamente aberta em 7/10/2026; somente autoria nominal ou assinatura individual codificada."
      },
      {
        "title": "Zeid Ra’ad Al Hussein — identidade contemporânea",
        "url": "https://theelders.org/profile/zeid-raad-al-hussein",
        "note": "Perfil institucional atual. Aberta em 7/10/2026; identidade sem inferência de eixo."
      }
    ],
    "caveats": "Reforma da ONU não equivale a democracia doméstica ou pacifismo absoluto. Demais eixos desconhecidos. Revisão independente de conteúdo pendente.",
    "rationale": "Declaração primária delimitada; demais eixos desconhecidos.",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
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
      "dip": "medium"
    },
    "axisEvidence": {
      "dip": {
        "sourceTitles": [
          "The UN must take the need for reform seriously"
        ],
        "rationale": "A preferência explícita por mediação sustenta direção diplomática. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Reforma da ONU não equivale a democracia doméstica ou pacifismo absoluto."
      }
    },
    "coding": {
      "dip": {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "The UN must take the need for reform seriously",
            "publishedDate": "2025-10-14",
            "accessedDate": "2026-10-07",
            "locator": "Parágrafo reinstating the Secretary-General as an independent and dynamic international mediator; assinatura",
            "statement": "Defende restaurar a função independente e dinâmica do secretário-geral como mediador internacional.",
            "basis": "declaration"
          }
        ],
        "rationale": "A preferência explícita por mediação sustenta direção diplomática.",
        "uncertainty": "Reforma da ONU não equivale a democracia doméstica ou pacifismo absoluto.",
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
    "id": "gro-harlem-brundtland",
    "name": "Gro Harlem Brundtland",
    "kind": "person",
    "category": "public-figure",
    "period": "2019-09-06",
    "sources": [
      {
        "title": "Universal health coverage is affordable, even in tough times",
        "url": "https://theelders.org/news/universal-health-coverage-affordable-even-tough-times",
        "note": "Declaração primária efetivamente aberta em 7/10/2026; somente autoria nominal ou assinatura individual codificada."
      },
      {
        "title": "Gro Harlem Brundtland — identidade contemporânea",
        "url": "https://theelders.org/profile/gro-harlem-brundtland",
        "note": "Perfil institucional atual identifica membro ativo; antigo cargo de vice-presidente não é atribuído como atual. Aberta em 7/10/2026; identidade sem inferência de eixo."
      }
    ],
    "caveats": "Financiamento não determina propriedade de todos os prestadores; não estabelece nacionalização de toda a economia ou execução do NHI. Demais eixos desconhecidos. Revisão independente de conteúdo pendente.",
    "rationale": "Declaração primária delimitada; demais eixos desconhecidos.",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 60,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "eco": "medium"
    },
    "axisEvidence": {
      "eco": {
        "sourceTitles": [
          "Universal health coverage is affordable, even in tough times"
        ],
        "rationale": "Financiamento público explícito de serviço essencial sustenta direção pública parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Financiamento não determina propriedade de todos os prestadores; não estabelece nacionalização de toda a economia ou execução do NHI."
      }
    },
    "coding": {
      "eco": {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "relatedQuestionIds": [
          "economia_04"
        ],
        "claims": [
          {
            "sourceTitle": "Universal health coverage is affordable, even in tough times",
            "publishedDate": "2019-09-06",
            "accessedDate": "2026-10-07",
            "locator": "Artigo nominal conjunto: Establishing a publicly funded health system; Every country; South Africa, like the US, needs to make this transition",
            "statement": "Defende sistema de saúde publicamente financiado e transição do financiamento privado voluntário para financiamento público.",
            "basis": "declaration"
          }
        ],
        "rationale": "Financiamento público explícito de serviço essencial sustenta direção pública parcial.",
        "uncertainty": "Financiamento não determina propriedade de todos os prestadores; não estabelece nacionalização de toda a economia ou execução do NHI.",
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
      }
    ],
    "rationale": "Defende direitos para imigrantes sem documentação e reassentamento de refugiados. Defende sistema de pagador único Medicare for All e ensino superior sem mensalidades. Propõe elevar salário mínimo, licença remunerada nacional e investimento em renováveis. Prioriza diplomacia, retorno das tropas e ação militar como último recurso.",
    "caveats": "Fonte de posições, não de implementação. Não inferir religião política pela identidade religiosa nem democracia pelo cargo eletivo. O eixo int tem polos peculiares e exige exame adicional.  Âncoras são classes editoriais, não medições da pessoa. Eixos ausentes são desconhecidos. Nenhum destes perfis possui os seis eixos exigidos para matches."
  },
  {
    "id": "rashida-tlaib",
    "kind": "person",
    "category": "public-figure",
    "name": "Rashida Tlaib",
    "period": "Agenda publicada pelo gabinete: Justice for All Act de 2023 e página Ending Poverty sem data; consulta em 7 de outubro de 2026.",
    "vec": {
      "est": 50,
      "rep": 60,
      "pod": 40,
      "imi": 40,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 60,
      "tec": 50
    },
    "evidence": {
      "rep": "medium",
      "imi": "medium",
      "pod": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Justice for All"
        ],
        "rationale": "Declara compromisso com a proteção do direito ao voto. A âncora expressa a direção e intensidade delimitadas dessa proposta. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não sustenta um retrato completo de desenho democrático. Direito ao voto é um componente da representação, sem autorizar inferir todo o desenho democrático. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação."
      },
      "imi": {
        "sourceTitles": [
          "Justice for All"
        ],
        "rationale": "Defende facilitar o acesso à cidadania para comunidades imigrantes. A âncora expressa a direção e intensidade delimitadas dessa proposta. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Cidadania não resolve todas as posições sobre multiculturalismo. Inclusão jurídica e acesso a instituições sustentam somente orientação moderada contra exclusão, sem equivalência perfeita com toda integração cultural. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação."
      },
      "pod": {
        "sourceTitles": [
          "Justice for All"
        ],
        "rationale": "Propõe responsabilização de agentes públicos e vedação a perfilamento racial e de gênero pela polícia. A âncora expressa a direção e intensidade delimitadas dessa proposta. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Proteção contra abuso não implica rejeição de toda política de segurança. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação."
      },
      "mor": {
        "sourceTitles": [
          "Justice for All"
        ],
        "rationale": "Propõe proteção antidiscriminatória para orientação sexual e identidade de gênero. A âncora expressa a direção e intensidade delimitadas dessa proposta. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Escopo é direitos civis especificados, não todos os temas morais. A proteção citada cobre uma faceta de costumes e direitos; não constitui posição extrema sobre todo o eixo. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Justice for All",
            "locator": "My Position on Justice for All, primeiro parágrafo",
            "statement": "Declara compromisso com a proteção do direito ao voto.",
            "basis": "declaration",
            "publishedDate": "Sem data indicada; conteúdo disponível em 7/10/2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Declara compromisso com a proteção do direito ao voto. A âncora expressa a direção e intensidade delimitadas dessa proposta.",
        "uncertainty": "Não sustenta um retrato completo de desenho democrático. Direito ao voto é um componente da representação, sem autorizar inferir todo o desenho democrático. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "imi": {
        "axis": "imi",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Justice for All",
            "locator": "My Position on Justice for All, segundo parágrafo",
            "statement": "Defende facilitar o acesso à cidadania para comunidades imigrantes.",
            "basis": "declaration",
            "publishedDate": "Sem data indicada; conteúdo disponível em 7/10/2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Defende facilitar o acesso à cidadania para comunidades imigrantes. A âncora expressa a direção e intensidade delimitadas dessa proposta.",
        "uncertainty": "Cidadania não resolve todas as posições sobre multiculturalismo. Inclusão jurídica e acesso a instituições sustentam somente orientação moderada contra exclusão, sem equivalência perfeita com toda integração cultural. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação.",
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
            "sourceTitle": "Justice for All",
            "locator": "Justice for All Civil Rights Act, item 4",
            "statement": "Propõe responsabilização de agentes públicos e vedação a perfilamento racial e de gênero pela polícia.",
            "basis": "declaration",
            "publishedDate": "Sem data indicada; conteúdo disponível em 7/10/2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Propõe responsabilização de agentes públicos e vedação a perfilamento racial e de gênero pela polícia. A âncora expressa a direção e intensidade delimitadas dessa proposta.",
        "uncertainty": "Proteção contra abuso não implica rejeição de toda política de segurança. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação.",
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
            "sourceTitle": "Justice for All",
            "locator": "Justice for All Civil Rights Act, item 7",
            "statement": "Propõe proteção antidiscriminatória para orientação sexual e identidade de gênero.",
            "basis": "declaration",
            "publishedDate": "Sem data indicada; conteúdo disponível em 7/10/2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Propõe proteção antidiscriminatória para orientação sexual e identidade de gênero. A âncora expressa a direção e intensidade delimitadas dessa proposta.",
        "uncertainty": "Escopo é direitos civis especificados, não todos os temas morais. A proteção citada cobre uma faceta de costumes e direitos; não constitui posição extrema sobre todo o eixo. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação.",
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
        "title": "Justice for All",
        "url": "https://tlaib.house.gov/resources/justice",
        "note": "Gabinete de Rashida Tlaib, Câmara dos EUA. Publicação: sem data indicada. Consulta documental em 7/10/2026; posições declaradas, não prova de implementação."
      },
      {
        "title": "Ending Poverty",
        "url": "https://tlaib.house.gov/resources/ending-poverty",
        "note": "Gabinete de Rashida Tlaib, Câmara dos EUA. Publicação: sem data indicada. Consulta documental em 7/10/2026; posições declaradas, não prova de implementação."
      }
    ],
    "rationale": "Declara compromisso com a proteção do direito ao voto. Defende facilitar o acesso à cidadania para comunidades imigrantes. Propõe responsabilização de agentes públicos e vedação a perfilamento racial e de gênero pela polícia. Propõe proteção antidiscriminatória para orientação sexual e identidade de gênero.",
    "caveats": "A descrição do JFA é de proposta reapresentada em 2023, não de lei em vigor. Não atribuir nacionalização com base em transferência de renda. A página Health Care consultada é genérica e foi excluída como sustentação do eixo eco. A proposta de crédito tributário e salário mínimo foi preservada apenas no dossiê: não demonstra planejamento econômico suficientemente específico. Âncoras são classes editoriais, não medições da pessoa. Eixos ausentes são desconhecidos. Nenhum destes perfis possui os seis eixos exigidos para matches."
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
      }
    ],
    "rationale": "Defende empregos públicos financiados federalmente para adultos que busquem trabalho. Propõe garantia legal de emprego com salário, benefícios e proteção sindical. Defende acesso nacional ao aborto e proteção da autonomia corporal. Prioriza diplomacia e define ação militar como último recurso. Defende instituições públicas inclusivas para imigrantes independentemente do status migratório.",
    "caveats": "Autodescrição de campanha não prova resultados legislativos. Os títulos exibidos foram conferidos apesar dos slugs inconsistentes; datas ausentes permanecem ausentes.  Âncoras são classes editoriais, não medições da pessoa. Eixos ausentes são desconhecidos. Nenhum destes perfis possui os seis eixos exigidos para matches."
  },
  {
    "id": "ro-khanna",
    "kind": "person",
    "category": "public-figure",
    "name": "Ro Khanna",
    "period": "Plataforma de Ro for Congress disponível em 7 de outubro de 2026, sem data de publicação. Inclui propostas futuras e relatos de atividade anterior.",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
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
    "evidence": {
      "eco": "medium",
      "con": "medium"
    },
    "axisEvidence": {
      "eco": {
        "sourceTitles": [
          "Ro’s Platform | Issues & Policy Positions"
        ],
        "rationale": "Defende Medicare for All; admite cobertura privada complementar. A âncora expressa a direção e intensidade delimitadas dessa proposta. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não confundir pagador público com eliminação de toda provisão privada. O polo público abrange estes serviços ou empregos públicos; financiamento não demonstra nacionalização da economia. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação."
      },
      "con": {
        "sourceTitles": [
          "Ro’s Platform | Issues & Policy Positions"
        ],
        "rationale": "Propõe banco industrial federal e conselho nacional de desenvolvimento. A âncora expressa a direção e intensidade delimitadas dessa proposta. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: O banco investiria também com capital privado. Coordenação e investimento públicos setoriais sustentam intensidade moderada; licença trabalhista isolada não implica planejamento da produção. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação."
      }
    },
    "coding": {
      "eco": {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Ro’s Platform | Issues & Policy Positions",
            "locator": "Medicare for All / Medicare for All Must Be Passed",
            "statement": "Defende Medicare for All; admite cobertura privada complementar.",
            "basis": "declaration",
            "publishedDate": "Sem data indicada; conteúdo disponível em 7/10/2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Defende Medicare for All; admite cobertura privada complementar. A âncora expressa a direção e intensidade delimitadas dessa proposta.",
        "uncertainty": "Não confundir pagador público com eliminação de toda provisão privada. O polo público abrange estes serviços ou empregos públicos; financiamento não demonstra nacionalização da economia. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação.",
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
            "sourceTitle": "Ro’s Platform | Issues & Policy Positions",
            "locator": "Marshall Plan for America / National Industrial Bank",
            "statement": "Propõe banco industrial federal e conselho nacional de desenvolvimento.",
            "basis": "declaration",
            "publishedDate": "Sem data indicada; conteúdo disponível em 7/10/2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Propõe banco industrial federal e conselho nacional de desenvolvimento. A âncora expressa a direção e intensidade delimitadas dessa proposta.",
        "uncertainty": "O banco investiria também com capital privado. Coordenação e investimento públicos setoriais sustentam intensidade moderada; licença trabalhista isolada não implica planejamento da produção. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação.",
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
        "title": "Ro’s Platform | Issues & Policy Positions",
        "url": "https://rokhanna.com/en/platform",
        "note": "Ro for Congress. Publicação: sem data indicada. Consulta documental em 7/10/2026; posições declaradas, não prova de implementação."
      }
    ],
    "rationale": "Defende Medicare for All; admite cobertura privada complementar. Propõe banco industrial federal e conselho nacional de desenvolvimento.",
    "caveats": "Seções de biografia e links jornalísticos não foram usados como evidência de eixos. A identidade religiosa declarada não codifica rel. O gabinete bloqueou a leitura de páginas de temas; a fonte utilizada é a plataforma primária da campanha. Tecnologia, comércio e diplomacia militar continuam desconhecidos. Regulação de IA não cobre todo o construto; tarifas seletivas com exceções e defesa militar seletiva não demonstram intensidade central equilibrada. Âncoras são classes editoriais, não medições da pessoa. Eixos ausentes são desconhecidos. Nenhum destes perfis possui os seis eixos exigidos para matches."
  },
  {
    "id": "tawakkol-karman",
    "name": "Tawakkol Karman",
    "kind": "person",
    "category": "public-figure",
    "period": "Nobel Prize Summit, edição indexada em 25 de maio de 2023",
    "sources": [
      {
        "title": "Tawakkol Karman — Nobel Prize Summit, Washington, 25/5/2023",
        "url": "https://www.tawakkolkarman.net/texts/speeches/4335-tawakkol-karman-speech-at-nobel-prize-summit-washington",
        "publishedDate": "2023-05-25; data indicada no índice da página inicial do gabinete",
        "note": "Texto autoral aberto em 7/10/2026; o índice https://www.tawakkolkarman.net/ associa a este título/link a data 05-25-2023. O discurso de Sarajevo fica somente como contexto sem data confirmada."
      },
      {
        "title": "Tawakkol Karman — discurso de Sarajevo sobre democracia",
        "url": "https://www.tawakkolkarman.net/texts/speeches/5059-tawakkol-karman-speech-on-sarajevo-conference-on-democracy-in-the-arab-world",
        "publishedDate": "Sem data editorial indicada na página consultada",
        "note": "Texto autoral no próprio gabinete, aberto em 7/10/2026; data do evento não confirmada. Não atribuir automaticamente o discurso a 2026."
      },
      {
        "title": "Tawakkol Karman — gabinete, atividade pública contemporânea",
        "url": "https://www.tawakkolkarman.net/",
        "note": "Página pessoal atual e notícias do próprio gabinete; data exata de todas as atividades não certificada. Aberta em 7/10/2026; identidade contemporânea, sem valores de eixo."
      }
    ],
    "caveats": "Declaração de 2023 sobre expressão digital. Sarajevo permanece contexto sem data confirmada e não gera scores; não certificar implementação.",
    "rationale": "Recorte de declarações primárias documentadas; demais eixos desconhecidos.",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 40,
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
      "pod": "medium"
    },
    "axisEvidence": {
      "pod": {
        "sourceTitles": [
          "Tawakkol Karman — Nobel Prize Summit, Washington, 25/5/2023"
        ],
        "rationale": "Proteção da expressão limita coerção estatal. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Preserva moderação contra danos; não resolve todas as políticas de segurança."
      }
    },
    "coding": {
      "pod": {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Tawakkol Karman — Nobel Prize Summit, Washington, 25/5/2023",
            "publishedDate": "2023-05-25; data indicada no índice da página inicial do gabinete",
            "accessedDate": "2026-10-07",
            "locator": "Parágrafos Global democracies; Tech companies; They should resist demands for censorship",
            "statement": "Defende expressão digital protegida contra censura autoritária e manipulação, com remoção de conteúdos causadores de dano real.",
            "basis": "declaration"
          }
        ],
        "rationale": "Proteção da expressão limita coerção estatal.",
        "uncertainty": "Preserva moderação contra danos; não resolve todas as políticas de segurança.",
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
    "id": "maria-ressa",
    "name": "Maria Ressa",
    "kind": "person",
    "category": "public-figure",
    "period": "Discurso preparado para o prêmio CPJ de 2018",
    "sources": [
      {
        "title": "Maria Ressa — discurso preparado para prêmio CPJ de 2018",
        "url": "https://cpj.org/awards/maria-ressa/",
        "publishedDate": "2018; dia da publicação não indicado",
        "note": "O organizador publica o texto preparado para apresentação, aberto em 7/10/2026. Distinguir discurso primário da biografia editorial da página."
      },
      {
        "title": "Maria Ressa — Institute of Global Politics, Columbia",
        "url": "https://igp.sipa.columbia.edu/distinguished-fellows/maria-ressa",
        "note": "Perfil institucional atual de atividade pública; sem assumir cargo de governo. Aberta em 7/10/2026; identidade contemporânea, sem valores de eixo."
      }
    ],
    "caveats": "Texto preparado, não transcrição verificada da apresentação; críticas tecnológicas não geram rejeição geral de tecnologia.",
    "rationale": "Recorte de declarações primárias documentadas; demais eixos desconhecidos.",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 40,
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
      "pod": "medium"
    },
    "axisEvidence": {
      "pod": {
        "sourceTitles": [
          "Maria Ressa — discurso preparado para prêmio CPJ de 2018"
        ],
        "rationale": "Liberdade de imprensa limita coerção estatal. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não resolve todas as políticas de segurança; suas denúncias não são aqui decisões judiciais verificadas."
      }
    },
    "coding": {
      "pod": {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Maria Ressa — discurso preparado para prêmio CPJ de 2018",
            "publishedDate": "2018; dia da publicação não indicado",
            "accessedDate": "2026-10-07",
            "locator": "Discurso preparado: parágrafo With this announced indictment e lista de seis apelos, itens 1–3",
            "statement": "Contesta instrumentalização penal contra jornalistas e defende publicar sem medo ou favorecimento.",
            "basis": "declaration"
          }
        ],
        "rationale": "Liberdade de imprensa limita coerção estatal.",
        "uncertainty": "Não resolve todas as políticas de segurança; suas denúncias não são aqui decisões judiciais verificadas.",
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
    "id": "javier-milei",
    "kind": "person",
    "category": "public-figure",
    "name": "Javier Milei",
    "period": "Declarações no discurso de posse, 10/12/2023; leitura documental em07/10/2026",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 40,
      "con": 40,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Revisão localizada de propriedade privada e coordenação de mercado; demais eixos desconhecidos.",
    "caveats": "A fonte combina plataforma ideológica e atos presidenciais; atitudes pessoais em eixos sem documentação ficam sem direção atribuída. Revisão documental restrita ao discurso de10/12/2023: não certifica posições nem atos de2026. Mapeamentos genéricos anteriores, valores e URL indisponível preservados em legacyPublicQuality01LiveBefore/GeneratedBefore e no vetor bruto; eles não qualificam evidência documental. Sem posição atribuída aos dez eixos restantes.",
    "sources": [
      {
        "title": "Discurso presidencial de posse, 2023",
        "url": "https://www.casarosada.gob.ar/informacion/discursos/50258-discurso-del-presidente-javier-milei-en-la-asuncion-presidencial",
        "note": "Discurso original de Milei que apresenta diagnóstico e programa de governo."
      },
      {
        "title": "Casa Rosada — Milei, discurso após posse, 10/12/2023 (URL canônica)",
        "url": "https://www.casarosada.gob.ar/informacion/discursos/50258-palabras-del-presidente-de-la-nacion-javier-milei-luego-del-acto-de-jura-y-asuncion-presidencial-desde-las-escalinatas-del-honorable-congreso-de-la-nacion",
        "note": "Texto primário completo efetivamente lido em07/10/2026; declaração de10/12/2023. URL legada indisponível preservada no arquivo e na união de fontes."
      }
    ],
    "evidence": {
      "eco": "medium",
      "con": "medium"
    },
    "axisEvidence": {
      "eco": {
        "sourceTitles": [
          "Casa Rosada — Milei, discurso após posse, 10/12/2023 (URL canônica)"
        ],
        "rationale": "Propriedade privada e eficiência relativa sustentam direção parcial ao polo privado. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não demonstra privatização realizada nem predominância privada de todos os serviços; assistência aos necessitados é ressalvada nas linhas59–60."
      },
      "con": {
        "sourceTitles": [
          "Casa Rosada — Milei, discurso após posse, 10/12/2023 (URL canônica)"
        ],
        "rationale": "Declara preferência por coordenação de mercado. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Programa de posse, não prática certificada; ajuste fiscal anunciado não comprova extinção de toda regulação."
      }
    },
    "coding": {
      "eco": {
        "axis": "eco",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Casa Rosada — Milei, discurso após posse, 10/12/2023 (URL canônica)",
            "locator": "Parágrafos iniciados «En materia de salud», «Ese es el Estado presente» e «Hoy volvemos a abrazar»; linhas48–49/57 da leitura",
            "statement": "Defende propriedade privada e contrapõe ineficiência estatal à liberdade econômica.",
            "basis": "declaration",
            "publishedDate": "2023-12-10",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Propriedade privada e eficiência relativa sustentam direção parcial ao polo privado.",
        "relatedQuestionIds": [
          "economia_18",
          "economia_20"
        ],
        "uncertainty": "Não demonstra privatização realizada nem predominância privada de todos os serviços; assistência aos necessitados é ressalvada nas linhas59–60.",
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
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Casa Rosada — Milei, discurso após posse, 10/12/2023 (URL canônica)",
            "locator": "Parágrafos «A su vez, el cepo cambiario» e «Hoy volvemos a abrazar»; linhas20/57",
            "statement": "Rejeita controles cambiais e adota mercados livres de intervenção estatal.",
            "basis": "declaration",
            "publishedDate": "2023-12-10",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Declara preferência por coordenação de mercado.",
        "relatedQuestionIds": [
          "controle_02",
          "controle_17"
        ],
        "uncertainty": "Programa de posse, não prática certificada; ajuste fiscal anunciado não comprova extinção de toda regulação.",
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
    "id": "ban-ki-moon",
    "name": "Ban Ki-moon",
    "kind": "person",
    "category": "public-figure",
    "period": "2025-12-15",
    "sources": [
      {
        "title": "The UN is only as strong as its 193 Member States want it to be",
        "url": "https://theelders.org/news/un-only-strong-its-193-member-states-want-it-be",
        "note": "Declaração primária efetivamente aberta em 7/10/2026; somente autoria nominal ou assinatura individual codificada."
      },
      {
        "title": "Ban Ki-moon — identidade contemporânea",
        "url": "https://theelders.org/profile/ban-ki-moon",
        "note": "Perfil atual identifica Elder Emeritus; não atribui antiga vice-presidência como atual. Aberta em 7/10/2026; identidade sem inferência de eixo."
      }
    ],
    "caveats": "Termo genérico intervir não especifica meios coercivos e não gera score int. Demais eixos desconhecidos. Revisão independente de conteúdo pendente.",
    "rationale": "Declaração primária delimitada; demais eixos desconhecidos.",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
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
      "dip": "medium"
    },
    "axisEvidence": {
      "dip": {
        "sourceTitles": [
          "The UN is only as strong as its 193 Member States want it to be"
        ],
        "rationale": "Mediação diplomática é preferência pacífica delimitada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Termo genérico intervir não especifica meios coercivos e não gera score int."
      }
    },
    "coding": {
      "dip": {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "The UN is only as strong as its 193 Member States want it to be",
            "publishedDate": "2025-12-15",
            "accessedDate": "2026-10-07",
            "locator": "Discurso: parágrafos UN leadership; more confident and active political role; mediating and settling",
            "statement": "Defende liderança política ativa da ONU na mediação e solução de crises internacionais.",
            "basis": "declaration"
          }
        ],
        "rationale": "Mediação diplomática é preferência pacífica delimitada.",
        "uncertainty": "Termo genérico intervir não especifica meios coercivos e não gera score int.",
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
    "id": "ricardo-lagos",
    "name": "Ricardo Lagos",
    "kind": "person",
    "category": "public-figure",
    "period": "2022-11-25",
    "sources": [
      {
        "title": "Leaders must tackle root causes of gender-based violence and ensure justice for all",
        "url": "https://theelders.org/news/leaders-must-tackle-root-causes-gender-based-violence-and-ensure-justice-all",
        "note": "Declaração primária efetivamente aberta em 7/10/2026; somente autoria nominal ou assinatura individual codificada."
      },
      {
        "title": "Ricardo Lagos — identidade contemporânea",
        "url": "https://theelders.org/profile/ricardo-lagos",
        "note": "Perfil atual identifica Elder Emeritus. Aberta em 7/10/2026; identidade sem inferência de eixo."
      }
    ],
    "caveats": "Oposição à violência isolada seria insuficiente; codifica a proposta explícita de reforma sistêmica, sem programa completo de costumes. Demais eixos desconhecidos. Revisão independente de conteúdo pendente.",
    "rationale": "Declaração primária delimitada; demais eixos desconhecidos.",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 60,
      "tec": 50
    },
    "evidence": {
      "mor": "medium"
    },
    "axisEvidence": {
      "mor": {
        "sourceTitles": [
          "Leaders must tackle root causes of gender-based violence and ensure justice for all"
        ],
        "rationale": "Reforma institucional contra subordinação de gênero fornece direção emancipatória parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Oposição à violência isolada seria insuficiente; codifica a proposta explícita de reforma sistêmica, sem programa completo de costumes."
      }
    },
    "coding": {
      "mor": {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Leaders must tackle root causes of gender-based violence and ensure justice for all",
            "publishedDate": "2022-11-25",
            "accessedDate": "2026-10-07",
            "locator": "Citação nominal de Ricardo Lagos: segundo parágrafo Everyone in a position of authority",
            "statement": "Pede enfrentar causas sistêmicas da violência de gênero e tornar a justiça responsiva aos direitos de mulheres.",
            "basis": "declaration"
          }
        ],
        "rationale": "Reforma institucional contra subordinação de gênero fornece direção emancipatória parcial.",
        "uncertainty": "Oposição à violência isolada seria insuficiente; codifica a proposta explícita de reforma sistêmica, sem programa completo de costumes.",
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
    "id": "lakhdar-brahimi",
    "name": "Lakhdar Brahimi",
    "kind": "person",
    "category": "public-figure",
    "period": "2021-09-07",
    "sources": [
      {
        "title": "The international community must act responsibly on Afghanistan",
        "url": "https://theelders.org/news/international-community-must-act-responsibly-afghanistan",
        "note": "Declaração primária efetivamente aberta em 7/10/2026; somente autoria nominal ou assinatura individual codificada."
      },
      {
        "title": "Lakhdar Brahimi — identidade contemporânea",
        "url": "https://theelders.org/profile/lakhdar-brahimi",
        "note": "Perfil atual identifica Elder Emeritus desde agosto de 2021. Aberta em 7/10/2026; identidade sem inferência de eixo."
      }
    ],
    "caveats": "Não endossa o regime nem determina todas as respostas militares possíveis. Demais eixos desconhecidos. Revisão independente de conteúdo pendente.",
    "rationale": "Declaração primária delimitada; demais eixos desconhecidos.",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
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
      "dip": "medium"
    },
    "axisEvidence": {
      "dip": {
        "sourceTitles": [
          "The international community must act responsibly on Afghanistan"
        ],
        "rationale": "Engajamento negociado sustenta direção pacífica nesse conflito. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não endossa o regime nem determina todas as respostas militares possíveis."
      }
    },
    "coding": {
      "dip": {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "The international community must act responsibly on Afghanistan",
            "publishedDate": "2021-09-07",
            "accessedDate": "2026-10-07",
            "locator": "Parágrafos sobre representante especial da ONU em Kabul, discussão franca com Taliban e ajuda humanitária",
            "statement": "Defende diálogo diplomático com o Taliban e programas humanitários sem reconhecimento diplomático imediato.",
            "basis": "declaration"
          }
        ],
        "rationale": "Engajamento negociado sustenta direção pacífica nesse conflito.",
        "uncertainty": "Não endossa o regime nem determina todas as respostas militares possíveis.",
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
    "id": "ziauddin-yousafzai",
    "name": "Ziauddin Yousafzai",
    "kind": "person",
    "category": "public-figure",
    "period": "2019-06-05",
    "sources": [
      {
        "title": "Ziauddin Yousafzai — Women Deliver Conference",
        "url": "https://malala.org/news-and-voices/ziauddin-women-deliver-conference",
        "note": "Declaração primária efetivamente aberta em 7/10/2026; somente autoria nominal ou assinatura individual codificada."
      },
      {
        "title": "Ziauddin Yousafzai — identidade contemporânea",
        "url": "https://malala.org/board?sc=header",
        "note": "Página atual identifica membro do conselho U.S. e cofundador; não transfere posições de Malala. Aberta em 7/10/2026; identidade sem inferência de eixo."
      }
    ],
    "caveats": "Declaração de 2019 não certifica execução nem todos os costumes. Demais eixos desconhecidos. Revisão independente de conteúdo pendente.",
    "rationale": "Declaração primária delimitada; demais eixos desconhecidos.",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 60,
      "tec": 50
    },
    "evidence": {
      "mor": "medium"
    },
    "axisEvidence": {
      "mor": {
        "sourceTitles": [
          "Ziauddin Yousafzai — Women Deliver Conference"
        ],
        "rationale": "Revisão de normas de gênero sustenta direção emancipatória. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Declaração de 2019 não certifica execução nem todos os costumes."
      }
    },
    "coding": {
      "mor": {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Ziauddin Yousafzai — Women Deliver Conference",
            "publishedDate": "2019-06-05",
            "accessedDate": "2026-10-07",
            "locator": "Discurso: trechos sobre casamento forçado, normas prejudiciais, remuneração igual e participação de mulheres na paz",
            "statement": "Contesta casamento infantil e forçado e pede igualdade salarial e participação política de mulheres.",
            "basis": "declaration"
          }
        ],
        "rationale": "Revisão de normas de gênero sustenta direção emancipatória.",
        "uncertainty": "Declaração de 2019 não certifica execução nem todos os costumes.",
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
    "id": "jeremy-corbyn",
    "name": "Jeremy Corbyn",
    "kind": "person",
    "category": "public-figure",
    "period": "2022-01-10; assinatura individual; moção apresentada 6/1/2022",
    "sources": [
      {
        "title": "Energy prices — EDM 825, assinatura de Jeremy Corbyn",
        "url": "https://edm.parliament.uk/early-day-motion/59318/energy-prices",
        "note": "Declaração primária efetivamente aberta em 7/10/2026; somente autoria nominal ou assinatura individual codificada."
      },
      {
        "title": "Jeremy Corbyn — identidade contemporânea",
        "url": "https://members.parliament.uk/member/185/contact",
        "note": "Registro parlamentar contemporâneo do próprio membro; não assume filiação partidária antiga. Aberta em 7/10/2026; identidade sem inferência de eixo."
      }
    ],
    "caveats": "Moção não é legislação executada nem nacionalização de toda a economia. Demais eixos desconhecidos. Revisão independente de conteúdo pendente.",
    "rationale": "Declaração primária delimitada; demais eixos desconhecidos.",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 60,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "eco": "medium"
    },
    "axisEvidence": {
      "eco": {
        "sourceTitles": [
          "Energy prices — EDM 825, assinatura de Jeremy Corbyn"
        ],
        "rationale": "Propriedade pública explicitamente proposta sustenta direção pública parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Moção não é legislação executada nem nacionalização de toda a economia."
      }
    },
    "coding": {
      "eco": {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Energy prices — EDM 825, assinatura de Jeremy Corbyn",
            "publishedDate": "2022-01-10; assinatura individual; moção apresentada 6/1/2022",
            "accessedDate": "2026-10-07",
            "locator": "Texto final bring the energy sector into public hands; lista de assinaturas Corbyn, Jeremy Signed on 10 January 2022",
            "statement": "Adere nominalmente à proposta de propriedade pública do setor energético.",
            "basis": "declaration"
          }
        ],
        "rationale": "Propriedade pública explicitamente proposta sustenta direção pública parcial.",
        "uncertainty": "Moção não é legislação executada nem nacionalização de toda a economia.",
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
    "id": "george-soros",
    "kind": "person",
    "category": "public-figure",
    "name": "George Soros",
    "period": "Ensaio próprio de 30 de dezembro de 2016",
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
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Recorte documental próprio sobre governo eleitoral responsável; demais eixos desconhecidos.",
    "caveats": "Revisão independente pendente. Integração europeia não estabelece política comercial; redistribuição não estabelece planejamento ou propriedade pública; não transfere posições da fundação. Original bruto e registro vivo preservados separadamente.",
    "sources": [
      {
        "title": "The Capitalist Threat — The Atlantic",
        "url": "https://www.theatlantic.com/magazine/archive/1997/02/the-capitalist-threat/376773/",
        "note": "Ensaio do próprio Soros sobre mercados, democracia e instituições abertas."
      },
      {
        "title": "Open Society Foundations: What We Do",
        "url": "https://www.opensocietyfoundations.org/what-we-do",
        "note": "Descrição institucional de direitos, pluralismo, justiça e sociedade aberta."
      },
      {
        "title": "Open Society: a decade later — The New York Review of Books",
        "url": "https://www.nybooks.com/articles/2009/11/05/open-society-a-decade-later/",
        "note": "Reflexão de Soros sobre instituições, democracia e cooperação internacional."
      },
      {
        "title": "George Soros — Open Society Needs Defending",
        "url": "https://www.georgesoros.com/2016/12/30/open-society-needs-defending/",
        "note": "Ensaio primário no gabinete, efetivamente aberto em 7/10/2026. Não atribui posições da fundação automaticamente."
      },
      {
        "title": "George Soros — identidade contemporânea, Open Society Foundations",
        "url": "https://www.opensocietyfoundations.org/george-soros",
        "note": "Perfil institucional aberto em 7/10/2026 descreve atividade pessoal atual; usado somente para identidade."
      }
    ],
    "evidence": {
      "rep": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "George Soros — Open Society Needs Defending"
        ],
        "rationale": "Escolha eleitoral e responsabilidade perante o eleitorado sustentam direção democrática delimitada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: O autor reconhece graus e variações; não fornece desenho institucional completo ou certificação de prática."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "George Soros — Open Society Needs Defending",
            "publishedDate": "2016-12-30",
            "accessedDate": "2026-10-07",
            "locator": "Parágrafos I distinguished between two kinds of political regimes e The classification is too simplistic",
            "statement": "Declara promover governos cujos líderes são eleitos para atender ao eleitorado e opor-se a governos que manipulam súditos para interesses dos governantes.",
            "basis": "declaration"
          }
        ],
        "rationale": "Escolha eleitoral e responsabilidade perante o eleitorado sustentam direção democrática delimitada.",
        "uncertainty": "O autor reconhece graus e variações; não fornece desenho institucional completo ou certificação de prática.",
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
export const publicIdentityRefresh01Before:IdentityArchiveEntry[] = [
  {
    "id": "denis-mukwege",
    "name": "Denis Mukwege",
    "kind": "person",
    "category": "public-figure",
    "period": "Artigo assinado de 13 de novembro de 2025",
    "sources": [
      {
        "title": "Denis Mukwege — Without women, there can be no lasting peace",
        "url": "https://theelders.org/news/without-women-there-can-be-no-lasting-peace",
        "publishedDate": "2025-11-13",
        "note": "Artigo assinado, adaptado de boletim pelo próprio organismo do autor; aberto em 7/10/2026. Não atribuir declarações coletivas dos Elders sem adesão pessoal documentada."
      },
      {
        "title": "Denis Mukwege — membro atual dos Elders",
        "url": "https://theelders.org/profile/denis-mukwege",
        "note": "Perfil institucional atual, distinto do artigo assinado que sustenta o eixo. Aberta em 7/10/2026; identidade contemporânea, sem valores de eixo."
      }
    ],
    "caveats": "Participação feminina na construção da paz é o subtema lido; prêmio e profissão não geram posições nos demais eixos.",
    "rationale": "Defende liderança e participação plena e igual das mulheres nas negociações e na construção da paz.",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 60,
      "tec": 50
    },
    "evidence": {
      "mor": "medium"
    },
    "axisEvidence": {
      "mor": {
        "sourceTitles": [
          "Denis Mukwege — Without women, there can be no lasting peace"
        ],
        "rationale": "Igualdade de participação sustenta direção emancipatória. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não estabelece programa completo sobre família, aborto ou outros costumes."
      }
    },
    "coding": {
      "mor": {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Denis Mukwege — Without women, there can be no lasting peace",
            "publishedDate": "2025-11-13",
            "accessedDate": "2026-10-07",
            "locator": "Parágrafos While women often bear; However; As we mark; The participation of women",
            "statement": "Defende liderança e participação plena e igual de mulheres nas negociações e construção da paz.",
            "basis": "declaration"
          }
        ],
        "rationale": "Igualdade de participação sustenta direção emancipatória.",
        "uncertainty": "Não estabelece programa completo sobre família, aborto ou outros costumes.",
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
    "id": "juan-manuel-santos",
    "name": "Juan Manuel Santos",
    "kind": "person",
    "category": "public-figure",
    "period": "Declaração nominal de 24 de fevereiro de 2025",
    "sources": [
      {
        "title": "Juan Manuel Santos — negociações inclusivas sobre Ucrânia",
        "url": "https://theelders.org/news/juan-manuel-santos-urges-inclusive-peace-talks-ukraines-future",
        "publishedDate": "2025-02-24",
        "note": "Declaração nominal reproduzida pelo próprio organismo, aberta em 7/10/2026; conteúdo distinto da biografia editorial."
      },
      {
        "title": "Juan Manuel Santos — presidente atual dos Elders",
        "url": "https://theelders.org/profile/juan-manuel-santos",
        "note": "Perfil institucional atual identifica presidência da organização, não cargo atual no governo colombiano. Aberta em 7/10/2026; identidade contemporânea, sem valores de eixo."
      }
    ],
    "caveats": "Negociação inclusiva nesse conflito; apoio à segurança ucraniana não equivale a pacifismo absoluto nem prova toda a trajetória.",
    "rationale": "Propõe negociações de paz inclusivas com Ucrânia e países europeus, preservando soberania e garantias de segurança.",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
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
      "dip": "medium"
    },
    "axisEvidence": {
      "dip": {
        "sourceTitles": [
          "Juan Manuel Santos — negociações inclusivas sobre Ucrânia"
        ],
        "rationale": "Preferência por solução diplomática inclusiva sustenta direção pacífica delimitada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não rejeita defesa militar ou apoio a aliados; não transforma negociações em neutralidade."
      }
    },
    "coding": {
      "dip": {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Juan Manuel Santos — negociações inclusivas sobre Ucrânia",
            "publishedDate": "2025-02-24",
            "accessedDate": "2026-10-07",
            "locator": "Declaração nominal: parágrafos The conflict is entering; The whole world will pay",
            "statement": "Pede negociações de paz com participação direta da Ucrânia e de países europeus, preservando soberania e garantias de segurança.",
            "basis": "declaration"
          }
        ],
        "rationale": "Preferência por solução diplomática inclusiva sustenta direção pacífica delimitada.",
        "uncertainty": "Não rejeita defesa militar ou apoio a aliados; não transforma negociações em neutralidade.",
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
    "id": "hina-jilani",
    "name": "Hina Jilani",
    "kind": "person",
    "category": "public-figure",
    "period": "2022-11-25",
    "sources": [
      {
        "title": "Leaders must tackle root causes of gender-based violence and ensure justice for all",
        "url": "https://theelders.org/news/leaders-must-tackle-root-causes-gender-based-violence-and-ensure-justice-all",
        "note": "Declaração primária efetivamente aberta em 7/10/2026; somente autoria nominal ou assinatura individual codificada."
      },
      {
        "title": "Hina Jilani — identidade contemporânea",
        "url": "https://theelders.org/profile/hina-jilani",
        "note": "Perfil institucional atual, distinto da declaração nominal. Aberta em 7/10/2026; identidade sem inferência de eixo."
      }
    ],
    "caveats": "Não cobre todos os costumes; não imputa a ela cada parágrafo coletivo da página. Demais eixos desconhecidos. Revisão independente de conteúdo pendente.",
    "rationale": "Defende autonomia corporal e acesso igual das mulheres à justiça contra discriminação patriarcal.",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 60,
      "tec": 50
    },
    "evidence": {
      "mor": "medium"
    },
    "axisEvidence": {
      "mor": {
        "sourceTitles": [
          "Leaders must tackle root causes of gender-based violence and ensure justice for all"
        ],
        "rationale": "Emancipação de gênero estabelece direção reformista delimitada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não cobre todos os costumes; não imputa a ela cada parágrafo coletivo da página."
      }
    },
    "coding": {
      "mor": {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Leaders must tackle root causes of gender-based violence and ensure justice for all",
            "publishedDate": "2022-11-25",
            "accessedDate": "2026-10-07",
            "locator": "Citação nominal de Hina Jilani, dois parágrafos após Hina Jilani said",
            "statement": "Defende autonomia corporal e acesso igual de mulheres à justiça contra discriminação patriarcal.",
            "basis": "declaration"
          }
        ],
        "rationale": "Emancipação de gênero estabelece direção reformista delimitada.",
        "uncertainty": "Não cobre todos os costumes; não imputa a ela cada parágrafo coletivo da página.",
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
    "id": "ernesto-zedillo",
    "name": "Ernesto Zedillo",
    "kind": "person",
    "category": "public-figure",
    "period": "2025-05-07",
    "sources": [
      {
        "title": "Nuclear weapons pose a terrible danger to us all",
        "url": "https://theelders.org/news/nuclear-weapons-pose-terrible-danger-us-all",
        "note": "Declaração primária efetivamente aberta em 7/10/2026; somente autoria nominal ou assinatura individual codificada."
      },
      {
        "title": "Ernesto Zedillo — identidade contemporânea",
        "url": "https://theelders.org/profile/ernesto-zedillo",
        "note": "Perfil institucional atual dos Elders. Aberta em 7/10/2026; identidade sem inferência de eixo."
      }
    ],
    "caveats": "Política nuclear não estabelece rejeição de todas as forças armadas ou guerras. Demais eixos desconhecidos. Revisão independente de conteúdo pendente.",
    "rationale": "Propõe redução do risco nuclear, compromissos de não primeiro uso e diplomacia voltada ao desarmamento.",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
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
      "dip": "medium"
    },
    "axisEvidence": {
      "dip": {
        "sourceTitles": [
          "Nuclear weapons pose a terrible danger to us all"
        ],
        "rationale": "Negociação e redução de armamentos sustentam direção pacífica nesse domínio. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Política nuclear não estabelece rejeição de todas as forças armadas ou guerras."
      }
    },
    "coding": {
      "dip": {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Nuclear weapons pose a terrible danger to us all",
            "publishedDate": "2025-05-07",
            "accessedDate": "2026-10-07",
            "locator": "Parágrafos No First Use; four Ds; diplomatic efforts; assinatura Ernesto Zedillo",
            "statement": "Pede redução do risco nuclear, não primeiro uso e esforços diplomáticos para desarmamento.",
            "basis": "declaration"
          }
        ],
        "rationale": "Negociação e redução de armamentos sustentam direção pacífica nesse domínio.",
        "uncertainty": "Política nuclear não estabelece rejeição de todas as forças armadas ou guerras.",
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
    "id": "zeid-raad-al-hussein",
    "name": "Zeid Ra’ad Al Hussein",
    "kind": "person",
    "category": "public-figure",
    "period": "2025-10-14",
    "sources": [
      {
        "title": "The UN must take the need for reform seriously",
        "url": "https://theelders.org/news/un-must-take-need-reform-seriously",
        "note": "Declaração primária efetivamente aberta em 7/10/2026; somente autoria nominal ou assinatura individual codificada."
      },
      {
        "title": "Zeid Ra’ad Al Hussein — identidade contemporânea",
        "url": "https://theelders.org/profile/zeid-raad-al-hussein",
        "note": "Perfil institucional atual. Aberta em 7/10/2026; identidade sem inferência de eixo."
      }
    ],
    "caveats": "Reforma da ONU não equivale a democracia doméstica ou pacifismo absoluto. Demais eixos desconhecidos. Revisão independente de conteúdo pendente.",
    "rationale": "Propõe restaurar uma liderança independente e ativa do secretário-geral da ONU como mediador internacional.",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
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
      "dip": "medium"
    },
    "axisEvidence": {
      "dip": {
        "sourceTitles": [
          "The UN must take the need for reform seriously"
        ],
        "rationale": "A preferência explícita por mediação sustenta direção diplomática. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Reforma da ONU não equivale a democracia doméstica ou pacifismo absoluto."
      }
    },
    "coding": {
      "dip": {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "The UN must take the need for reform seriously",
            "publishedDate": "2025-10-14",
            "accessedDate": "2026-10-07",
            "locator": "Parágrafo reinstating the Secretary-General as an independent and dynamic international mediator; assinatura",
            "statement": "Defende restaurar a função independente e dinâmica do secretário-geral como mediador internacional.",
            "basis": "declaration"
          }
        ],
        "rationale": "A preferência explícita por mediação sustenta direção diplomática.",
        "uncertainty": "Reforma da ONU não equivale a democracia doméstica ou pacifismo absoluto.",
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
    "id": "gro-harlem-brundtland",
    "name": "Gro Harlem Brundtland",
    "kind": "person",
    "category": "public-figure",
    "period": "2019-09-06",
    "sources": [
      {
        "title": "Universal health coverage is affordable, even in tough times",
        "url": "https://theelders.org/news/universal-health-coverage-affordable-even-tough-times",
        "note": "Declaração primária efetivamente aberta em 7/10/2026; somente autoria nominal ou assinatura individual codificada."
      },
      {
        "title": "Gro Harlem Brundtland — identidade contemporânea",
        "url": "https://theelders.org/profile/gro-harlem-brundtland",
        "note": "Perfil institucional atual identifica membro ativo; antigo cargo de vice-presidente não é atribuído como atual. Aberta em 7/10/2026; identidade sem inferência de eixo."
      }
    ],
    "caveats": "Financiamento não determina propriedade de todos os prestadores; não estabelece nacionalização de toda a economia ou execução do NHI. Demais eixos desconhecidos. Revisão independente de conteúdo pendente.",
    "rationale": "Defende financiamento público de saúde e transição do financiamento privado voluntário, sem excluir prestadores privados.",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 60,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "eco": "medium"
    },
    "axisEvidence": {
      "eco": {
        "sourceTitles": [
          "Universal health coverage is affordable, even in tough times"
        ],
        "rationale": "Financiamento público explícito de serviço essencial sustenta direção pública parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Financiamento não determina propriedade de todos os prestadores; não estabelece nacionalização de toda a economia ou execução do NHI."
      }
    },
    "coding": {
      "eco": {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "relatedQuestionIds": [
          "economia_04"
        ],
        "claims": [
          {
            "sourceTitle": "Universal health coverage is affordable, even in tough times",
            "publishedDate": "2019-09-06",
            "accessedDate": "2026-10-07",
            "locator": "Artigo nominal conjunto: Establishing a publicly funded health system; Every country; South Africa, like the US, needs to make this transition",
            "statement": "Defende sistema de saúde publicamente financiado e transição do financiamento privado voluntário para financiamento público.",
            "basis": "declaration"
          }
        ],
        "rationale": "Financiamento público explícito de serviço essencial sustenta direção pública parcial.",
        "uncertainty": "Financiamento não determina propriedade de todos os prestadores; não estabelece nacionalização de toda a economia ou execução do NHI.",
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
      }
    ],
    "rationale": "Defende direitos para imigrantes sem documentação e reassentamento de refugiados. Defende sistema de pagador único Medicare for All e ensino superior sem mensalidades. Propõe elevar salário mínimo, licença remunerada nacional e investimento em renováveis. Prioriza diplomacia, retorno das tropas e ação militar como último recurso.",
    "caveats": "Fonte de posições, não de implementação. Não inferir religião política pela identidade religiosa nem democracia pelo cargo eletivo. O eixo int tem polos peculiares e exige exame adicional.  Âncoras são classes editoriais, não medições da pessoa. Eixos ausentes são desconhecidos. Nenhum destes perfis possui os seis eixos exigidos para matches."
  },
  {
    "id": "rashida-tlaib",
    "kind": "person",
    "category": "public-figure",
    "name": "Rashida Tlaib",
    "period": "Agenda publicada pelo gabinete: Justice for All Act de 2023 e página Ending Poverty sem data; consulta em 7 de outubro de 2026.",
    "vec": {
      "est": 50,
      "rep": 60,
      "pod": 40,
      "imi": 40,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 60,
      "tec": 50
    },
    "evidence": {
      "rep": "medium",
      "imi": "medium",
      "pod": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Justice for All"
        ],
        "rationale": "Declara compromisso com a proteção do direito ao voto. A âncora expressa a direção e intensidade delimitadas dessa proposta. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não sustenta um retrato completo de desenho democrático. Direito ao voto é um componente da representação, sem autorizar inferir todo o desenho democrático. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação."
      },
      "imi": {
        "sourceTitles": [
          "Justice for All"
        ],
        "rationale": "Defende facilitar o acesso à cidadania para comunidades imigrantes. A âncora expressa a direção e intensidade delimitadas dessa proposta. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Cidadania não resolve todas as posições sobre multiculturalismo. Inclusão jurídica e acesso a instituições sustentam somente orientação moderada contra exclusão, sem equivalência perfeita com toda integração cultural. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação."
      },
      "pod": {
        "sourceTitles": [
          "Justice for All"
        ],
        "rationale": "Propõe responsabilização de agentes públicos e vedação a perfilamento racial e de gênero pela polícia. A âncora expressa a direção e intensidade delimitadas dessa proposta. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Proteção contra abuso não implica rejeição de toda política de segurança. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação."
      },
      "mor": {
        "sourceTitles": [
          "Justice for All"
        ],
        "rationale": "Propõe proteção antidiscriminatória para orientação sexual e identidade de gênero. A âncora expressa a direção e intensidade delimitadas dessa proposta. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Escopo é direitos civis especificados, não todos os temas morais. A proteção citada cobre uma faceta de costumes e direitos; não constitui posição extrema sobre todo o eixo. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Justice for All",
            "locator": "My Position on Justice for All, primeiro parágrafo",
            "statement": "Declara compromisso com a proteção do direito ao voto.",
            "basis": "declaration",
            "publishedDate": "Sem data indicada; conteúdo disponível em 7/10/2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Declara compromisso com a proteção do direito ao voto. A âncora expressa a direção e intensidade delimitadas dessa proposta.",
        "uncertainty": "Não sustenta um retrato completo de desenho democrático. Direito ao voto é um componente da representação, sem autorizar inferir todo o desenho democrático. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "imi": {
        "axis": "imi",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Justice for All",
            "locator": "My Position on Justice for All, segundo parágrafo",
            "statement": "Defende facilitar o acesso à cidadania para comunidades imigrantes.",
            "basis": "declaration",
            "publishedDate": "Sem data indicada; conteúdo disponível em 7/10/2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Defende facilitar o acesso à cidadania para comunidades imigrantes. A âncora expressa a direção e intensidade delimitadas dessa proposta.",
        "uncertainty": "Cidadania não resolve todas as posições sobre multiculturalismo. Inclusão jurídica e acesso a instituições sustentam somente orientação moderada contra exclusão, sem equivalência perfeita com toda integração cultural. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação.",
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
            "sourceTitle": "Justice for All",
            "locator": "Justice for All Civil Rights Act, item 4",
            "statement": "Propõe responsabilização de agentes públicos e vedação a perfilamento racial e de gênero pela polícia.",
            "basis": "declaration",
            "publishedDate": "Sem data indicada; conteúdo disponível em 7/10/2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Propõe responsabilização de agentes públicos e vedação a perfilamento racial e de gênero pela polícia. A âncora expressa a direção e intensidade delimitadas dessa proposta.",
        "uncertainty": "Proteção contra abuso não implica rejeição de toda política de segurança. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação.",
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
            "sourceTitle": "Justice for All",
            "locator": "Justice for All Civil Rights Act, item 7",
            "statement": "Propõe proteção antidiscriminatória para orientação sexual e identidade de gênero.",
            "basis": "declaration",
            "publishedDate": "Sem data indicada; conteúdo disponível em 7/10/2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Propõe proteção antidiscriminatória para orientação sexual e identidade de gênero. A âncora expressa a direção e intensidade delimitadas dessa proposta.",
        "uncertainty": "Escopo é direitos civis especificados, não todos os temas morais. A proteção citada cobre uma faceta de costumes e direitos; não constitui posição extrema sobre todo o eixo. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação.",
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
        "title": "Justice for All",
        "url": "https://tlaib.house.gov/resources/justice",
        "note": "Gabinete de Rashida Tlaib, Câmara dos EUA. Publicação: sem data indicada. Consulta documental em 7/10/2026; posições declaradas, não prova de implementação."
      },
      {
        "title": "Ending Poverty",
        "url": "https://tlaib.house.gov/resources/ending-poverty",
        "note": "Gabinete de Rashida Tlaib, Câmara dos EUA. Publicação: sem data indicada. Consulta documental em 7/10/2026; posições declaradas, não prova de implementação."
      }
    ],
    "rationale": "Declara compromisso com a proteção do direito ao voto. Defende facilitar o acesso à cidadania para comunidades imigrantes. Propõe responsabilização de agentes públicos e vedação a perfilamento racial e de gênero pela polícia. Propõe proteção antidiscriminatória para orientação sexual e identidade de gênero.",
    "caveats": "A descrição do JFA é de proposta reapresentada em 2023, não de lei em vigor. Não atribuir nacionalização com base em transferência de renda. A página Health Care consultada é genérica e foi excluída como sustentação do eixo eco. A proposta de crédito tributário e salário mínimo foi preservada apenas no dossiê: não demonstra planejamento econômico suficientemente específico. Âncoras são classes editoriais, não medições da pessoa. Eixos ausentes são desconhecidos. Nenhum destes perfis possui os seis eixos exigidos para matches."
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
      }
    ],
    "rationale": "Defende empregos públicos financiados federalmente para adultos que busquem trabalho. Propõe garantia legal de emprego com salário, benefícios e proteção sindical. Defende acesso nacional ao aborto e proteção da autonomia corporal. Prioriza diplomacia e define ação militar como último recurso. Defende instituições públicas inclusivas para imigrantes independentemente do status migratório.",
    "caveats": "Autodescrição de campanha não prova resultados legislativos. Os títulos exibidos foram conferidos apesar dos slugs inconsistentes; datas ausentes permanecem ausentes.  Âncoras são classes editoriais, não medições da pessoa. Eixos ausentes são desconhecidos. Nenhum destes perfis possui os seis eixos exigidos para matches."
  },
  {
    "id": "ro-khanna",
    "kind": "person",
    "category": "public-figure",
    "name": "Ro Khanna",
    "period": "Plataforma de Ro for Congress disponível em 7 de outubro de 2026, sem data de publicação. Inclui propostas futuras e relatos de atividade anterior.",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
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
    "evidence": {
      "eco": "medium",
      "con": "medium"
    },
    "axisEvidence": {
      "eco": {
        "sourceTitles": [
          "Ro’s Platform | Issues & Policy Positions"
        ],
        "rationale": "Defende Medicare for All; admite cobertura privada complementar. A âncora expressa a direção e intensidade delimitadas dessa proposta. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não confundir pagador público com eliminação de toda provisão privada. O polo público abrange estes serviços ou empregos públicos; financiamento não demonstra nacionalização da economia. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação."
      },
      "con": {
        "sourceTitles": [
          "Ro’s Platform | Issues & Policy Positions"
        ],
        "rationale": "Propõe banco industrial federal e conselho nacional de desenvolvimento. A âncora expressa a direção e intensidade delimitadas dessa proposta. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: O banco investiria também com capital privado. Coordenação e investimento públicos setoriais sustentam intensidade moderada; licença trabalhista isolada não implica planejamento da produção. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação."
      }
    },
    "coding": {
      "eco": {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Ro’s Platform | Issues & Policy Positions",
            "locator": "Medicare for All / Medicare for All Must Be Passed",
            "statement": "Defende Medicare for All; admite cobertura privada complementar.",
            "basis": "declaration",
            "publishedDate": "Sem data indicada; conteúdo disponível em 7/10/2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Defende Medicare for All; admite cobertura privada complementar. A âncora expressa a direção e intensidade delimitadas dessa proposta.",
        "uncertainty": "Não confundir pagador público com eliminação de toda provisão privada. O polo público abrange estes serviços ou empregos públicos; financiamento não demonstra nacionalização da economia. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação.",
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
            "sourceTitle": "Ro’s Platform | Issues & Policy Positions",
            "locator": "Marshall Plan for America / National Industrial Bank",
            "statement": "Propõe banco industrial federal e conselho nacional de desenvolvimento.",
            "basis": "declaration",
            "publishedDate": "Sem data indicada; conteúdo disponível em 7/10/2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Propõe banco industrial federal e conselho nacional de desenvolvimento. A âncora expressa a direção e intensidade delimitadas dessa proposta.",
        "uncertainty": "O banco investiria também com capital privado. Coordenação e investimento públicos setoriais sustentam intensidade moderada; licença trabalhista isolada não implica planejamento da produção. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação.",
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
        "title": "Ro’s Platform | Issues & Policy Positions",
        "url": "https://rokhanna.com/en/platform",
        "note": "Ro for Congress. Publicação: sem data indicada. Consulta documental em 7/10/2026; posições declaradas, não prova de implementação."
      }
    ],
    "rationale": "Defende Medicare for All; admite cobertura privada complementar. Propõe banco industrial federal e conselho nacional de desenvolvimento.",
    "caveats": "Seções de biografia e links jornalísticos não foram usados como evidência de eixos. A identidade religiosa declarada não codifica rel. O gabinete bloqueou a leitura de páginas de temas; a fonte utilizada é a plataforma primária da campanha. Tecnologia, comércio e diplomacia militar continuam desconhecidos. Regulação de IA não cobre todo o construto; tarifas seletivas com exceções e defesa militar seletiva não demonstram intensidade central equilibrada. Âncoras são classes editoriais, não medições da pessoa. Eixos ausentes são desconhecidos. Nenhum destes perfis possui os seis eixos exigidos para matches."
  },
  {
    "id": "tawakkol-karman",
    "name": "Tawakkol Karman",
    "kind": "person",
    "category": "public-figure",
    "period": "Nobel Prize Summit, edição indexada em 25 de maio de 2023",
    "sources": [
      {
        "title": "Tawakkol Karman — Nobel Prize Summit, Washington, 25/5/2023",
        "url": "https://www.tawakkolkarman.net/texts/speeches/4335-tawakkol-karman-speech-at-nobel-prize-summit-washington",
        "publishedDate": "2023-05-25; data indicada no índice da página inicial do gabinete",
        "note": "Texto autoral aberto em 7/10/2026; o índice https://www.tawakkolkarman.net/ associa a este título/link a data 05-25-2023. O discurso de Sarajevo fica somente como contexto sem data confirmada."
      },
      {
        "title": "Tawakkol Karman — discurso de Sarajevo sobre democracia",
        "url": "https://www.tawakkolkarman.net/texts/speeches/5059-tawakkol-karman-speech-on-sarajevo-conference-on-democracy-in-the-arab-world",
        "publishedDate": "Sem data editorial indicada na página consultada",
        "note": "Texto autoral no próprio gabinete, aberto em 7/10/2026; data do evento não confirmada. Não atribuir automaticamente o discurso a 2026."
      },
      {
        "title": "Tawakkol Karman — gabinete, atividade pública contemporânea",
        "url": "https://www.tawakkolkarman.net/",
        "note": "Página pessoal atual e notícias do próprio gabinete; data exata de todas as atividades não certificada. Aberta em 7/10/2026; identidade contemporânea, sem valores de eixo."
      }
    ],
    "caveats": "Declaração de 2023 sobre expressão digital. Sarajevo permanece contexto sem data confirmada e não gera scores; não certificar implementação.",
    "rationale": "Defende expressão digital contra censura e manipulação, admitindo remoção de conteúdos que causem dano real.",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 40,
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
      "pod": "medium"
    },
    "axisEvidence": {
      "pod": {
        "sourceTitles": [
          "Tawakkol Karman — Nobel Prize Summit, Washington, 25/5/2023"
        ],
        "rationale": "Proteção da expressão limita coerção estatal. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Preserva moderação contra danos; não resolve todas as políticas de segurança."
      }
    },
    "coding": {
      "pod": {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Tawakkol Karman — Nobel Prize Summit, Washington, 25/5/2023",
            "publishedDate": "2023-05-25; data indicada no índice da página inicial do gabinete",
            "accessedDate": "2026-10-07",
            "locator": "Parágrafos Global democracies; Tech companies; They should resist demands for censorship",
            "statement": "Defende expressão digital protegida contra censura autoritária e manipulação, com remoção de conteúdos causadores de dano real.",
            "basis": "declaration"
          }
        ],
        "rationale": "Proteção da expressão limita coerção estatal.",
        "uncertainty": "Preserva moderação contra danos; não resolve todas as políticas de segurança.",
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
    "id": "maria-ressa",
    "name": "Maria Ressa",
    "kind": "person",
    "category": "public-figure",
    "period": "Discurso preparado para o prêmio CPJ de 2018",
    "sources": [
      {
        "title": "Maria Ressa — discurso preparado para prêmio CPJ de 2018",
        "url": "https://cpj.org/awards/maria-ressa/",
        "publishedDate": "2018; dia da publicação não indicado",
        "note": "O organizador publica o texto preparado para apresentação, aberto em 7/10/2026. Distinguir discurso primário da biografia editorial da página."
      },
      {
        "title": "Maria Ressa — Institute of Global Politics, Columbia",
        "url": "https://igp.sipa.columbia.edu/distinguished-fellows/maria-ressa",
        "note": "Perfil institucional atual de atividade pública; sem assumir cargo de governo. Aberta em 7/10/2026; identidade contemporânea, sem valores de eixo."
      }
    ],
    "caveats": "Texto preparado, não transcrição verificada da apresentação; críticas tecnológicas não geram rejeição geral de tecnologia.",
    "rationale": "Defende imprensa livre e publicação sem medo, contra uso de processos penais para silenciar jornalistas.",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 40,
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
      "pod": "medium"
    },
    "axisEvidence": {
      "pod": {
        "sourceTitles": [
          "Maria Ressa — discurso preparado para prêmio CPJ de 2018"
        ],
        "rationale": "Liberdade de imprensa limita coerção estatal. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não resolve todas as políticas de segurança; suas denúncias não são aqui decisões judiciais verificadas."
      }
    },
    "coding": {
      "pod": {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Maria Ressa — discurso preparado para prêmio CPJ de 2018",
            "publishedDate": "2018; dia da publicação não indicado",
            "accessedDate": "2026-10-07",
            "locator": "Discurso preparado: parágrafo With this announced indictment e lista de seis apelos, itens 1–3",
            "statement": "Contesta instrumentalização penal contra jornalistas e defende publicar sem medo ou favorecimento.",
            "basis": "declaration"
          }
        ],
        "rationale": "Liberdade de imprensa limita coerção estatal.",
        "uncertainty": "Não resolve todas as políticas de segurança; suas denúncias não são aqui decisões judiciais verificadas.",
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
    "id": "javier-milei",
    "kind": "person",
    "category": "public-figure",
    "name": "Javier Milei",
    "period": "Declarações no discurso de posse, 10/12/2023; leitura documental em07/10/2026",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 40,
      "con": 40,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Defende propriedade privada e mercados livres de intervenção estatal, preservando direitos individuais e limites legais.",
    "caveats": "A fonte combina plataforma ideológica e atos presidenciais; atitudes pessoais em eixos sem documentação ficam sem direção atribuída. Revisão documental restrita ao discurso de10/12/2023: não certifica posições nem atos de2026. Mapeamentos genéricos anteriores, valores e URL indisponível preservados em legacyPublicQuality01LiveBefore/GeneratedBefore e no vetor bruto; eles não qualificam evidência documental. Sem posição atribuída aos dez eixos restantes.",
    "sources": [
      {
        "title": "Discurso presidencial de posse, 2023",
        "url": "https://www.casarosada.gob.ar/informacion/discursos/50258-discurso-del-presidente-javier-milei-en-la-asuncion-presidencial",
        "note": "Discurso original de Milei que apresenta diagnóstico e programa de governo."
      },
      {
        "title": "Casa Rosada — Milei, discurso após posse, 10/12/2023 (URL canônica)",
        "url": "https://www.casarosada.gob.ar/informacion/discursos/50258-palabras-del-presidente-de-la-nacion-javier-milei-luego-del-acto-de-jura-y-asuncion-presidencial-desde-las-escalinatas-del-honorable-congreso-de-la-nacion",
        "note": "Texto primário completo efetivamente lido em07/10/2026; declaração de10/12/2023. URL legada indisponível preservada no arquivo e na união de fontes."
      }
    ],
    "evidence": {
      "eco": "medium",
      "con": "medium"
    },
    "axisEvidence": {
      "eco": {
        "sourceTitles": [
          "Casa Rosada — Milei, discurso após posse, 10/12/2023 (URL canônica)"
        ],
        "rationale": "Propriedade privada e eficiência relativa sustentam direção parcial ao polo privado. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não demonstra privatização realizada nem predominância privada de todos os serviços; assistência aos necessitados é ressalvada nas linhas59–60."
      },
      "con": {
        "sourceTitles": [
          "Casa Rosada — Milei, discurso após posse, 10/12/2023 (URL canônica)"
        ],
        "rationale": "Declara preferência por coordenação de mercado. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Programa de posse, não prática certificada; ajuste fiscal anunciado não comprova extinção de toda regulação."
      }
    },
    "coding": {
      "eco": {
        "axis": "eco",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Casa Rosada — Milei, discurso após posse, 10/12/2023 (URL canônica)",
            "locator": "Parágrafos iniciados «En materia de salud», «Ese es el Estado presente» e «Hoy volvemos a abrazar»; linhas48–49/57 da leitura",
            "statement": "Defende propriedade privada e contrapõe ineficiência estatal à liberdade econômica.",
            "basis": "declaration",
            "publishedDate": "2023-12-10",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Propriedade privada e eficiência relativa sustentam direção parcial ao polo privado.",
        "relatedQuestionIds": [
          "economia_18",
          "economia_20"
        ],
        "uncertainty": "Não demonstra privatização realizada nem predominância privada de todos os serviços; assistência aos necessitados é ressalvada nas linhas59–60.",
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
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Casa Rosada — Milei, discurso após posse, 10/12/2023 (URL canônica)",
            "locator": "Parágrafos «A su vez, el cepo cambiario» e «Hoy volvemos a abrazar»; linhas20/57",
            "statement": "Rejeita controles cambiais e adota mercados livres de intervenção estatal.",
            "basis": "declaration",
            "publishedDate": "2023-12-10",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Declara preferência por coordenação de mercado.",
        "relatedQuestionIds": [
          "controle_02",
          "controle_17"
        ],
        "uncertainty": "Programa de posse, não prática certificada; ajuste fiscal anunciado não comprova extinção de toda regulação.",
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
    "id": "ban-ki-moon",
    "name": "Ban Ki-moon",
    "kind": "person",
    "category": "public-figure",
    "period": "2025-12-15",
    "sources": [
      {
        "title": "The UN is only as strong as its 193 Member States want it to be",
        "url": "https://theelders.org/news/un-only-strong-its-193-member-states-want-it-be",
        "note": "Declaração primária efetivamente aberta em 7/10/2026; somente autoria nominal ou assinatura individual codificada."
      },
      {
        "title": "Ban Ki-moon — identidade contemporânea",
        "url": "https://theelders.org/profile/ban-ki-moon",
        "note": "Perfil atual identifica Elder Emeritus; não atribui antiga vice-presidência como atual. Aberta em 7/10/2026; identidade sem inferência de eixo."
      }
    ],
    "caveats": "Termo genérico intervir não especifica meios coercivos e não gera score int. Demais eixos desconhecidos. Revisão independente de conteúdo pendente.",
    "rationale": "Defende liderança política ativa da ONU para mediar conflitos e solucionar crises internacionais.",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
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
      "dip": "medium"
    },
    "axisEvidence": {
      "dip": {
        "sourceTitles": [
          "The UN is only as strong as its 193 Member States want it to be"
        ],
        "rationale": "Mediação diplomática é preferência pacífica delimitada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Termo genérico intervir não especifica meios coercivos e não gera score int."
      }
    },
    "coding": {
      "dip": {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "The UN is only as strong as its 193 Member States want it to be",
            "publishedDate": "2025-12-15",
            "accessedDate": "2026-10-07",
            "locator": "Discurso: parágrafos UN leadership; more confident and active political role; mediating and settling",
            "statement": "Defende liderança política ativa da ONU na mediação e solução de crises internacionais.",
            "basis": "declaration"
          }
        ],
        "rationale": "Mediação diplomática é preferência pacífica delimitada.",
        "uncertainty": "Termo genérico intervir não especifica meios coercivos e não gera score int.",
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
    "id": "ricardo-lagos",
    "name": "Ricardo Lagos",
    "kind": "person",
    "category": "public-figure",
    "period": "2022-11-25",
    "sources": [
      {
        "title": "Leaders must tackle root causes of gender-based violence and ensure justice for all",
        "url": "https://theelders.org/news/leaders-must-tackle-root-causes-gender-based-violence-and-ensure-justice-all",
        "note": "Declaração primária efetivamente aberta em 7/10/2026; somente autoria nominal ou assinatura individual codificada."
      },
      {
        "title": "Ricardo Lagos — identidade contemporânea",
        "url": "https://theelders.org/profile/ricardo-lagos",
        "note": "Perfil atual identifica Elder Emeritus. Aberta em 7/10/2026; identidade sem inferência de eixo."
      }
    ],
    "caveats": "Oposição à violência isolada seria insuficiente; codifica a proposta explícita de reforma sistêmica, sem programa completo de costumes. Demais eixos desconhecidos. Revisão independente de conteúdo pendente.",
    "rationale": "Defende enfrentar causas sistêmicas da violência de gênero e tornar a justiça sensível aos direitos das mulheres.",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 60,
      "tec": 50
    },
    "evidence": {
      "mor": "medium"
    },
    "axisEvidence": {
      "mor": {
        "sourceTitles": [
          "Leaders must tackle root causes of gender-based violence and ensure justice for all"
        ],
        "rationale": "Reforma institucional contra subordinação de gênero fornece direção emancipatória parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Oposição à violência isolada seria insuficiente; codifica a proposta explícita de reforma sistêmica, sem programa completo de costumes."
      }
    },
    "coding": {
      "mor": {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Leaders must tackle root causes of gender-based violence and ensure justice for all",
            "publishedDate": "2022-11-25",
            "accessedDate": "2026-10-07",
            "locator": "Citação nominal de Ricardo Lagos: segundo parágrafo Everyone in a position of authority",
            "statement": "Pede enfrentar causas sistêmicas da violência de gênero e tornar a justiça responsiva aos direitos de mulheres.",
            "basis": "declaration"
          }
        ],
        "rationale": "Reforma institucional contra subordinação de gênero fornece direção emancipatória parcial.",
        "uncertainty": "Oposição à violência isolada seria insuficiente; codifica a proposta explícita de reforma sistêmica, sem programa completo de costumes.",
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
    "id": "lakhdar-brahimi",
    "name": "Lakhdar Brahimi",
    "kind": "person",
    "category": "public-figure",
    "period": "2021-09-07",
    "sources": [
      {
        "title": "The international community must act responsibly on Afghanistan",
        "url": "https://theelders.org/news/international-community-must-act-responsibly-afghanistan",
        "note": "Declaração primária efetivamente aberta em 7/10/2026; somente autoria nominal ou assinatura individual codificada."
      },
      {
        "title": "Lakhdar Brahimi — identidade contemporânea",
        "url": "https://theelders.org/profile/lakhdar-brahimi",
        "note": "Perfil atual identifica Elder Emeritus desde agosto de 2021. Aberta em 7/10/2026; identidade sem inferência de eixo."
      }
    ],
    "caveats": "Não endossa o regime nem determina todas as respostas militares possíveis. Demais eixos desconhecidos. Revisão independente de conteúdo pendente.",
    "rationale": "Defende diálogo com o Taliban e ajuda humanitária, sem reconhecimento diplomático imediato.",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
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
      "dip": "medium"
    },
    "axisEvidence": {
      "dip": {
        "sourceTitles": [
          "The international community must act responsibly on Afghanistan"
        ],
        "rationale": "Engajamento negociado sustenta direção pacífica nesse conflito. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não endossa o regime nem determina todas as respostas militares possíveis."
      }
    },
    "coding": {
      "dip": {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "The international community must act responsibly on Afghanistan",
            "publishedDate": "2021-09-07",
            "accessedDate": "2026-10-07",
            "locator": "Parágrafos sobre representante especial da ONU em Kabul, discussão franca com Taliban e ajuda humanitária",
            "statement": "Defende diálogo diplomático com o Taliban e programas humanitários sem reconhecimento diplomático imediato.",
            "basis": "declaration"
          }
        ],
        "rationale": "Engajamento negociado sustenta direção pacífica nesse conflito.",
        "uncertainty": "Não endossa o regime nem determina todas as respostas militares possíveis.",
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
    "id": "ziauddin-yousafzai",
    "name": "Ziauddin Yousafzai",
    "kind": "person",
    "category": "public-figure",
    "period": "2019-06-05",
    "sources": [
      {
        "title": "Ziauddin Yousafzai — Women Deliver Conference",
        "url": "https://malala.org/news-and-voices/ziauddin-women-deliver-conference",
        "note": "Declaração primária efetivamente aberta em 7/10/2026; somente autoria nominal ou assinatura individual codificada."
      },
      {
        "title": "Ziauddin Yousafzai — identidade contemporânea",
        "url": "https://malala.org/board?sc=header",
        "note": "Página atual identifica membro do conselho U.S. e cofundador; não transfere posições de Malala. Aberta em 7/10/2026; identidade sem inferência de eixo."
      }
    ],
    "caveats": "Declaração de 2019 não certifica execução nem todos os costumes. Demais eixos desconhecidos. Revisão independente de conteúdo pendente.",
    "rationale": "Contesta casamento infantil e forçado e defende igualdade salarial e participação política das mulheres.",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 60,
      "tec": 50
    },
    "evidence": {
      "mor": "medium"
    },
    "axisEvidence": {
      "mor": {
        "sourceTitles": [
          "Ziauddin Yousafzai — Women Deliver Conference"
        ],
        "rationale": "Revisão de normas de gênero sustenta direção emancipatória. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Declaração de 2019 não certifica execução nem todos os costumes."
      }
    },
    "coding": {
      "mor": {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Ziauddin Yousafzai — Women Deliver Conference",
            "publishedDate": "2019-06-05",
            "accessedDate": "2026-10-07",
            "locator": "Discurso: trechos sobre casamento forçado, normas prejudiciais, remuneração igual e participação de mulheres na paz",
            "statement": "Contesta casamento infantil e forçado e pede igualdade salarial e participação política de mulheres.",
            "basis": "declaration"
          }
        ],
        "rationale": "Revisão de normas de gênero sustenta direção emancipatória.",
        "uncertainty": "Declaração de 2019 não certifica execução nem todos os costumes.",
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
    "id": "jeremy-corbyn",
    "name": "Jeremy Corbyn",
    "kind": "person",
    "category": "public-figure",
    "period": "2022-01-10; assinatura individual; moção apresentada 6/1/2022",
    "sources": [
      {
        "title": "Energy prices — EDM 825, assinatura de Jeremy Corbyn",
        "url": "https://edm.parliament.uk/early-day-motion/59318/energy-prices",
        "note": "Declaração primária efetivamente aberta em 7/10/2026; somente autoria nominal ou assinatura individual codificada."
      },
      {
        "title": "Jeremy Corbyn — identidade contemporânea",
        "url": "https://members.parliament.uk/member/185/contact",
        "note": "Registro parlamentar contemporâneo do próprio membro; não assume filiação partidária antiga. Aberta em 7/10/2026; identidade sem inferência de eixo."
      }
    ],
    "caveats": "Moção não é legislação executada nem nacionalização de toda a economia. Demais eixos desconhecidos. Revisão independente de conteúdo pendente.",
    "rationale": "Endossa, em assinatura parlamentar individual, a proposta de propriedade pública do setor energético.",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 60,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "eco": "medium"
    },
    "axisEvidence": {
      "eco": {
        "sourceTitles": [
          "Energy prices — EDM 825, assinatura de Jeremy Corbyn"
        ],
        "rationale": "Propriedade pública explicitamente proposta sustenta direção pública parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Moção não é legislação executada nem nacionalização de toda a economia."
      }
    },
    "coding": {
      "eco": {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Energy prices — EDM 825, assinatura de Jeremy Corbyn",
            "publishedDate": "2022-01-10; assinatura individual; moção apresentada 6/1/2022",
            "accessedDate": "2026-10-07",
            "locator": "Texto final bring the energy sector into public hands; lista de assinaturas Corbyn, Jeremy Signed on 10 January 2022",
            "statement": "Adere nominalmente à proposta de propriedade pública do setor energético.",
            "basis": "declaration"
          }
        ],
        "rationale": "Propriedade pública explicitamente proposta sustenta direção pública parcial.",
        "uncertainty": "Moção não é legislação executada nem nacionalização de toda a economia.",
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
    "id": "george-soros",
    "kind": "person",
    "category": "public-figure",
    "name": "George Soros",
    "period": "Ensaio próprio de 30 de dezembro de 2016",
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
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Recorte documental próprio sobre governo eleitoral responsável; demais eixos desconhecidos.",
    "caveats": "Revisão independente pendente. Integração europeia não estabelece política comercial; redistribuição não estabelece planejamento ou propriedade pública; não transfere posições da fundação. Original bruto e registro vivo preservados separadamente.",
    "sources": [
      {
        "title": "The Capitalist Threat — The Atlantic",
        "url": "https://www.theatlantic.com/magazine/archive/1997/02/the-capitalist-threat/376773/",
        "note": "Ensaio do próprio Soros sobre mercados, democracia e instituições abertas."
      },
      {
        "title": "Open Society Foundations: What We Do",
        "url": "https://www.opensocietyfoundations.org/what-we-do",
        "note": "Descrição institucional de direitos, pluralismo, justiça e sociedade aberta."
      },
      {
        "title": "Open Society: a decade later — The New York Review of Books",
        "url": "https://www.nybooks.com/articles/2009/11/05/open-society-a-decade-later/",
        "note": "Reflexão de Soros sobre instituições, democracia e cooperação internacional."
      },
      {
        "title": "George Soros — Open Society Needs Defending",
        "url": "https://www.georgesoros.com/2016/12/30/open-society-needs-defending/",
        "note": "Ensaio primário no gabinete, efetivamente aberto em 7/10/2026. Não atribui posições da fundação automaticamente."
      },
      {
        "title": "George Soros — identidade contemporânea, Open Society Foundations",
        "url": "https://www.opensocietyfoundations.org/george-soros",
        "note": "Perfil institucional aberto em 7/10/2026 descreve atividade pessoal atual; usado somente para identidade."
      }
    ],
    "evidence": {
      "rep": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "George Soros — Open Society Needs Defending"
        ],
        "rationale": "Escolha eleitoral e responsabilidade perante o eleitorado sustentam direção democrática delimitada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: O autor reconhece graus e variações; não fornece desenho institucional completo ou certificação de prática."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "George Soros — Open Society Needs Defending",
            "publishedDate": "2016-12-30",
            "accessedDate": "2026-10-07",
            "locator": "Parágrafos I distinguished between two kinds of political regimes e The classification is too simplistic",
            "statement": "Declara promover governos cujos líderes são eleitos para atender ao eleitorado e opor-se a governos que manipulam súditos para interesses dos governantes.",
            "basis": "declaration"
          }
        ],
        "rationale": "Escolha eleitoral e responsabilidade perante o eleitorado sustentam direção democrática delimitada.",
        "uncertainty": "O autor reconhece graus e variações; não fornece desenho institucional completo ou certificação de prática.",
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
export const publicIdentityRefresh01Sources:Record<string,ReferenceSource[]> = {
  "denis-mukwege": [
    {
      "title": "The Elders — declaração conjunta nominal13/05/2026",
      "url": "https://theelders.org/news/when-leaders-flout-international-rule-law-poor-pay-highest-price",
      "note": "Identidade/atividade2026 apenas. Data11, corpo15–34 e signatários36–54 efetivamente lidos completos. UMA declaração compartilhada, não seis confirmações independentes. Assinatura nominal datada sustenta atividade declaratória; as we meet in Nairobi25 não certifica presença física individual de todos. Não atualiza posições antigas, nem certifica acusações, cargos, imagens ou práticas."
    }
  ],
  "juan-manuel-santos": [
    {
      "title": "The Elders — declaração conjunta nominal13/05/2026",
      "url": "https://theelders.org/news/when-leaders-flout-international-rule-law-poor-pay-highest-price",
      "note": "Identidade/atividade2026 apenas. Data11, corpo15–34 e signatários36–54 efetivamente lidos completos. UMA declaração compartilhada, não seis confirmações independentes. Assinatura nominal datada sustenta atividade declaratória; as we meet in Nairobi25 não certifica presença física individual de todos. Não atualiza posições antigas, nem certifica acusações, cargos, imagens ou práticas."
    }
  ],
  "hina-jilani": [
    {
      "title": "The Elders — declaração conjunta nominal13/05/2026",
      "url": "https://theelders.org/news/when-leaders-flout-international-rule-law-poor-pay-highest-price",
      "note": "Identidade/atividade2026 apenas. Data11, corpo15–34 e signatários36–54 efetivamente lidos completos. UMA declaração compartilhada, não seis confirmações independentes. Assinatura nominal datada sustenta atividade declaratória; as we meet in Nairobi25 não certifica presença física individual de todos. Não atualiza posições antigas, nem certifica acusações, cargos, imagens ou práticas."
    }
  ],
  "ernesto-zedillo": [
    {
      "title": "The Elders — declaração conjunta nominal13/05/2026",
      "url": "https://theelders.org/news/when-leaders-flout-international-rule-law-poor-pay-highest-price",
      "note": "Identidade/atividade2026 apenas. Data11, corpo15–34 e signatários36–54 efetivamente lidos completos. UMA declaração compartilhada, não seis confirmações independentes. Assinatura nominal datada sustenta atividade declaratória; as we meet in Nairobi25 não certifica presença física individual de todos. Não atualiza posições antigas, nem certifica acusações, cargos, imagens ou práticas."
    }
  ],
  "zeid-raad-al-hussein": [
    {
      "title": "The Elders — declaração conjunta nominal13/05/2026",
      "url": "https://theelders.org/news/when-leaders-flout-international-rule-law-poor-pay-highest-price",
      "note": "Identidade/atividade2026 apenas. Data11, corpo15–34 e signatários36–54 efetivamente lidos completos. UMA declaração compartilhada, não seis confirmações independentes. Assinatura nominal datada sustenta atividade declaratória; as we meet in Nairobi25 não certifica presença física individual de todos. Não atualiza posições antigas, nem certifica acusações, cargos, imagens ou práticas."
    }
  ],
  "gro-harlem-brundtland": [
    {
      "title": "The Elders — declaração conjunta nominal13/05/2026",
      "url": "https://theelders.org/news/when-leaders-flout-international-rule-law-poor-pay-highest-price",
      "note": "Identidade/atividade2026 apenas. Data11, corpo15–34 e signatários36–54 efetivamente lidos completos. UMA declaração compartilhada, não seis confirmações independentes. Assinatura nominal datada sustenta atividade declaratória; as we meet in Nairobi25 não certifica presença física individual de todos. Não atualiza posições antigas, nem certifica acusações, cargos, imagens ou práticas."
    }
  ],
  "ilhan-omar": [
    {
      "title": "Escritório Omar — comunicado nominal conjunto23/07/2026, cláusula do índice",
      "url": "https://omar.house.gov/media/press-releases",
      "note": "Identidade/atividade2026 apenas. Índice oficial94–97: data e cláusula completa com Omar e Rashida Tlaib entre membros que emitiram declaração. Corpo da cláusula do índice efetivamente lido; comunicado interno completo retornou InternalError e não é declarado reaberto. Atividade nominal conjunta emitida, sem certificação de presença física ou toda posição de2026. Uma fonte compartilhada pelos dois nomes."
    }
  ],
  "rashida-tlaib": [
    {
      "title": "Escritório Omar — comunicado nominal conjunto23/07/2026, cláusula do índice",
      "url": "https://omar.house.gov/media/press-releases",
      "note": "Identidade/atividade2026 apenas. Índice oficial94–97: data e cláusula completa com Omar e Rashida Tlaib entre membros que emitiram declaração. Corpo da cláusula do índice efetivamente lido; comunicado interno completo retornou InternalError e não é declarado reaberto. Atividade nominal conjunta emitida, sem certificação de presença física ou toda posição de2026. Uma fonte compartilhada pelos dois nomes."
    }
  ],
  "ayanna-pressley": [
    {
      "title": "Ayanna Pressley — declaração própria emitida07/10/2026",
      "url": "https://pressley.house.gov/2026/10/07/rep-pressley-statement-marking-three-year-somber-anniversary-of-october-7th-attack/",
      "note": "Identidade/atividade2026 apenas. Cabeçalho42, atribuição45 e corpo próprio47–56 completos efetivamente lidos. Publicação institucional nominal nesse ano; acusações e classificação jurídica do conflito não certificadas. Nenhum código ou renovação de todo programa anterior."
    }
  ],
  "ro-khanna": [
    {
      "title": "Ro Khanna — comunicado nominal20/04/2026, recuperação indexada",
      "url": "https://khanna.house.gov/media/press-releases/rep-ro-khanna-reintroduces-gasoline-export-ban-act-prohibiting-exportation",
      "note": "Identidade/atividade2026 apenas. Corpo indexado completo: data20/04 e abertura de reintrodução com citação própria; acesso direto individual InternalError. Publicação nominal2026 sustenta atividade. A data da publicação não certifica dia de introdução legislativa: registro Govinfo aponta14/04; Today do comunicado não foi harmonizado. Não prova aprovação de lei ou orientação geral sobre comércio."
    }
  ],
  "tawakkol-karman": [
    {
      "title": "Fundação Tawakkol Karman — palestra concluída Oxford09/02/2026",
      "url": "https://tkif.org/en/chairwoman-activities/3231-tawakkol-karman-warns-of-systemic-erosion-of-global-order-in-oxford-lecture",
      "note": "Identidade/atividade2026 apenas. Cabeçalho68/71 e corpo nominal73–82 efetivamente lidos; endereço próprio88–160 adicionalmente visível e lido. Relato institucional nomeia palestra entregue em Oxford. Identidade apenas neste adendo; não são novos códigos, resultados certificados, autenticação de áudio ou renovação de todo texto político anterior."
    }
  ],
  "maria-ressa": [
    {
      "title": "IPA — participação concluída de Maria Ressa no WExFo2026",
      "url": "https://internationalpublishers.org/ipa-at-world-expression-forum-2026/",
      "note": "Identidade/atividade2026 apenas. Corpo indexado completo: cabeçalhoJune3, evento1–3June e parágrafo da conversa concluída entre Støre e Maria Ressa. Acesso direto inicial mostrou apenas metadados e recuperação posterior InternalError; corpo completo recuperado por pesquisa indexada. Normas do primeiro-ministro não transferidas a Ressa; identidade/atividade reportada apenas. Sem vídeo, imagem ou renovação de posições antigas."
    }
  ],
  "javier-milei": [
    {
      "title": "Câmara de Deputados Argentina — presença nominal29/04/2026",
      "url": "https://www3.hcdn.gob.ar/dependencias/dtaquigrafos/diarios/periodo-144/diario_202604292.pdf",
      "note": "Identidade/atividade2026 apenas. PDF cabeçalho0–6 p1 e cláusula295–297 p3 efetivamente lidos: entrada nominal nas galerias. Apenas cláusula de presença com data da sessão; não72p inteiras. Fala do chefe de gabinete Manuel Adorni e manifestações de outros não atribuídas a Milei. Não renova códigos da própria declaração de2023."
    }
  ],
  "ban-ki-moon": [
    {
      "title": "Fundação Ban Ki-moon — atividades concluídas Paris15–16/01/2026",
      "url": "https://bankimoon.org/news/from-science-to-policy-the-bkmf-advancing-sdg-3-in-paris/",
      "note": "Identidade/atividade2026 apenas. Cabeçalho43 e corpo44–60 completos efetivamente lidos; atividades concluídas15/01 em45 e16/01 em52. 03/02 é publicação; timestamp de modificação04/05 não é data do evento. Relato institucional de discursos e reuniões concluídos em janeiro; não prova cargo contínuo, imagens ou renovação de posições anteriores."
    }
  ],
  "ricardo-lagos": [
    {
      "title": "ADN — relato contemporâneo de contato semanal com Ricardo Lagos",
      "url": "https://www.adnradio.cl/2026/07/23/con-dificultades-de-motricidad-pero-muy-lucido-el-estado-de-ricardo-lagos-tras-su-retiro-de-la-vida-publica/",
      "note": "Identidade/atividade2026 apenas. Cabeçalho50 e corpo55–62 efetivamente lidos: Ottone declara contato semanal atual com Lagos. Prova contemporânea reportada de identidade viva, não presença autoral em entrevista, diagnóstico médico certificado ou atividade política pública. Dia das visitas não é precisado; comentários de Ottone e resultados políticos não atribuídos diretamente a Lagos."
    }
  ],
  "lakhdar-brahimi": [
    {
      "title": "Jordan News — relato nominal de presença familiar em Amman2026",
      "url": "https://www.jordannews.jo/Section-29/Analysis/Lakhdar-Brahimi-in-Amman-A-Father-a-Diplomatic-Legend-and-a-Name-That-Will-Always-Echo-Through-History-53746",
      "note": "Identidade/atividade2026 apenas. Data editorial93 e corpo104–118 completos efetivamente lidos; presença nominal107–109/113/116–117. Data last updated Aug02/2026 separada do relógio variável do site86. Relato de presença no festival na semana anterior, sem dia exato nem verificação visual/autenticidade da fotografia. Elogios e história diplomática não certificam novas posições. Não inferir presença em qualquer evento futuro."
    }
  ],
  "ziauddin-yousafzai": [
    {
      "title": "Geo News — presença nominal de Ziauddin na cerimônia Oxford2026",
      "url": "https://www.geo.tv/latest/650022-malalas-portrait-unveiled-at-oxford-university",
      "note": "Identidade/atividade2026 apenas. Cabeçalho44 e corpo46–49 efetivamente lidos: cerimônia concluída com Ziauddin entre familiares. Data de publicação10/02; dia da cerimônia não individualmente certificado. Reportagem de participante, não cálculo de idade ou transferência das palavras de Malala. Foto e vídeo não examinados."
    }
  ],
  "jeremy-corbyn": [
    {
      "title": "Hansard — contribuição nominal de Jeremy Corbyn15/09/2026",
      "url": "https://hansard.parliament.uk/Commons/2026-09-15/debates/4eb35084-7104-4c1e-8d3f-c7a2a3a1e2df/WestminsterHall",
      "note": "Identidade/atividade2026 apenas. Cabeçalho8 e atribuição/contribuição própria338–340 efetivamente lidos completos. Apenas intervenção nominal datada, não1263linhas de todos os debates. Respostas de ministro e comentários de outros excluídos; não certifica resultados habitacionais ou todo programa político anterior."
    }
  ],
  "george-soros": [
    {
      "title": "RomaniaTV — aniversário de George Soros relatado com mensagem nominal do filho",
      "url": "https://www.romaniatv.net/george-soros-a-implinit-96-de-ani-fiul-sau-a-publicat-o-fotografie-alaturi-de-miliardar-te-iubesc-tata-foto_9748831.html",
      "note": "Identidade/atividade2026 apenas. Cabeçalho45–50 e corpo53–58 efetivamente lidos: aniversário atual e mensagem de Alex ao pai. Confirmação contemporânea reportada e limitada, não mera conta automática de idade. Fonte jornalística reproduz alegação familiar; post canônico e fotografia não autenticados/reabertos. Não demonstra declaração ou presença pública de George naquele dia, nem atividade da fundação atribuível pessoalmente a ele. Somente identidade viva reportada, sem política nova."
    }
  ]
};
export const publicIdentityRefresh01Research = [
  {
    "id": "denis-mukwege",
    "title": "The Elders — declaração conjunta nominal13/05/2026",
    "url": "https://theelders.org/news/when-leaders-flout-international-rule-law-poor-pay-highest-price",
    "publishedDate": "2026-05-13",
    "accessedDate": "2026-10-08",
    "actualReadScope": "Data11, corpo15–34 e signatários36–54 efetivamente lidos completos",
    "limitations": "UMA declaração compartilhada, não seis confirmações independentes. Assinatura nominal datada sustenta atividade declaratória; as we meet in Nairobi25 não certifica presença física individual de todos. Não atualiza posições antigas, nem certifica acusações, cargos, imagens ou práticas.",
    "accessMode": "direct-text",
    "attribution": "named-joint-adoption",
    "readBy": [
      "/root/public_continue"
    ],
    "independentReadBy": [
      "/root/method_review"
    ],
    "supports": "Atividade ou declaração nominal em2026, no escopo delimitado; não renova todo programa político anterior.",
    "independentActualReadScope": "Elders data11 e corpo15–54, signatários incluídos",
    "reviewStatus": "Root accepted08/10/2026; active integration unconfirmed"
  },
  {
    "id": "juan-manuel-santos",
    "title": "The Elders — declaração conjunta nominal13/05/2026",
    "url": "https://theelders.org/news/when-leaders-flout-international-rule-law-poor-pay-highest-price",
    "publishedDate": "2026-05-13",
    "accessedDate": "2026-10-08",
    "actualReadScope": "Data11, corpo15–34 e signatários36–54 efetivamente lidos completos",
    "limitations": "UMA declaração compartilhada, não seis confirmações independentes. Assinatura nominal datada sustenta atividade declaratória; as we meet in Nairobi25 não certifica presença física individual de todos. Não atualiza posições antigas, nem certifica acusações, cargos, imagens ou práticas.",
    "accessMode": "direct-text",
    "attribution": "named-joint-adoption",
    "readBy": [
      "/root/public_continue"
    ],
    "independentReadBy": [
      "/root/method_review"
    ],
    "supports": "Atividade ou declaração nominal em2026, no escopo delimitado; não renova todo programa político anterior.",
    "independentActualReadScope": "Elders data11 e corpo15–54, signatários incluídos",
    "reviewStatus": "Root accepted08/10/2026; active integration unconfirmed"
  },
  {
    "id": "hina-jilani",
    "title": "The Elders — declaração conjunta nominal13/05/2026",
    "url": "https://theelders.org/news/when-leaders-flout-international-rule-law-poor-pay-highest-price",
    "publishedDate": "2026-05-13",
    "accessedDate": "2026-10-08",
    "actualReadScope": "Data11, corpo15–34 e signatários36–54 efetivamente lidos completos",
    "limitations": "UMA declaração compartilhada, não seis confirmações independentes. Assinatura nominal datada sustenta atividade declaratória; as we meet in Nairobi25 não certifica presença física individual de todos. Não atualiza posições antigas, nem certifica acusações, cargos, imagens ou práticas.",
    "accessMode": "direct-text",
    "attribution": "named-joint-adoption",
    "readBy": [
      "/root/public_continue"
    ],
    "independentReadBy": [
      "/root/method_review"
    ],
    "supports": "Atividade ou declaração nominal em2026, no escopo delimitado; não renova todo programa político anterior.",
    "independentActualReadScope": "Elders data11 e corpo15–54, signatários incluídos",
    "reviewStatus": "Root accepted08/10/2026; active integration unconfirmed"
  },
  {
    "id": "ernesto-zedillo",
    "title": "The Elders — declaração conjunta nominal13/05/2026",
    "url": "https://theelders.org/news/when-leaders-flout-international-rule-law-poor-pay-highest-price",
    "publishedDate": "2026-05-13",
    "accessedDate": "2026-10-08",
    "actualReadScope": "Data11, corpo15–34 e signatários36–54 efetivamente lidos completos",
    "limitations": "UMA declaração compartilhada, não seis confirmações independentes. Assinatura nominal datada sustenta atividade declaratória; as we meet in Nairobi25 não certifica presença física individual de todos. Não atualiza posições antigas, nem certifica acusações, cargos, imagens ou práticas.",
    "accessMode": "direct-text",
    "attribution": "named-joint-adoption",
    "readBy": [
      "/root/public_continue"
    ],
    "independentReadBy": [
      "/root/method_review"
    ],
    "supports": "Atividade ou declaração nominal em2026, no escopo delimitado; não renova todo programa político anterior.",
    "independentActualReadScope": "Elders data11 e corpo15–54, signatários incluídos",
    "reviewStatus": "Root accepted08/10/2026; active integration unconfirmed"
  },
  {
    "id": "zeid-raad-al-hussein",
    "title": "The Elders — declaração conjunta nominal13/05/2026",
    "url": "https://theelders.org/news/when-leaders-flout-international-rule-law-poor-pay-highest-price",
    "publishedDate": "2026-05-13",
    "accessedDate": "2026-10-08",
    "actualReadScope": "Data11, corpo15–34 e signatários36–54 efetivamente lidos completos",
    "limitations": "UMA declaração compartilhada, não seis confirmações independentes. Assinatura nominal datada sustenta atividade declaratória; as we meet in Nairobi25 não certifica presença física individual de todos. Não atualiza posições antigas, nem certifica acusações, cargos, imagens ou práticas.",
    "accessMode": "direct-text",
    "attribution": "named-joint-adoption",
    "readBy": [
      "/root/public_continue"
    ],
    "independentReadBy": [
      "/root/method_review"
    ],
    "supports": "Atividade ou declaração nominal em2026, no escopo delimitado; não renova todo programa político anterior.",
    "independentActualReadScope": "Elders data11 e corpo15–54, signatários incluídos",
    "reviewStatus": "Root accepted08/10/2026; active integration unconfirmed"
  },
  {
    "id": "gro-harlem-brundtland",
    "title": "The Elders — declaração conjunta nominal13/05/2026",
    "url": "https://theelders.org/news/when-leaders-flout-international-rule-law-poor-pay-highest-price",
    "publishedDate": "2026-05-13",
    "accessedDate": "2026-10-08",
    "actualReadScope": "Data11, corpo15–34 e signatários36–54 efetivamente lidos completos",
    "limitations": "UMA declaração compartilhada, não seis confirmações independentes. Assinatura nominal datada sustenta atividade declaratória; as we meet in Nairobi25 não certifica presença física individual de todos. Não atualiza posições antigas, nem certifica acusações, cargos, imagens ou práticas.",
    "accessMode": "direct-text",
    "attribution": "named-joint-adoption",
    "readBy": [
      "/root/public_continue"
    ],
    "independentReadBy": [
      "/root/method_review"
    ],
    "supports": "Atividade ou declaração nominal em2026, no escopo delimitado; não renova todo programa político anterior.",
    "independentActualReadScope": "Elders data11 e corpo15–54, signatários incluídos",
    "reviewStatus": "Root accepted08/10/2026; active integration unconfirmed"
  },
  {
    "id": "ilhan-omar",
    "title": "Escritório Omar — comunicado nominal conjunto23/07/2026, cláusula do índice",
    "url": "https://omar.house.gov/media/press-releases",
    "publishedDate": "2026-07-23",
    "accessedDate": "2026-10-08",
    "actualReadScope": "Índice oficial94–97: data e cláusula completa com Omar e Rashida Tlaib entre membros que emitiram declaração",
    "limitations": "Corpo da cláusula do índice efetivamente lido; comunicado interno completo retornou InternalError e não é declarado reaberto. Atividade nominal conjunta emitida, sem certificação de presença física ou toda posição de2026. Uma fonte compartilhada pelos dois nomes.",
    "accessMode": "direct-text",
    "attribution": "named-joint-adoption",
    "readBy": [
      "/root/public_continue"
    ],
    "independentReadBy": [
      "/root/method_review"
    ],
    "supports": "Atividade ou declaração nominal em2026, no escopo delimitado; não renova todo programa político anterior.",
    "independentActualReadScope": "Cláusula oficial indexada completa23/07 com ambos os nomes",
    "reviewStatus": "Root accepted08/10/2026; active integration unconfirmed"
  },
  {
    "id": "rashida-tlaib",
    "title": "Escritório Omar — comunicado nominal conjunto23/07/2026, cláusula do índice",
    "url": "https://omar.house.gov/media/press-releases",
    "publishedDate": "2026-07-23",
    "accessedDate": "2026-10-08",
    "actualReadScope": "Índice oficial94–97: data e cláusula completa com Omar e Rashida Tlaib entre membros que emitiram declaração",
    "limitations": "Corpo da cláusula do índice efetivamente lido; comunicado interno completo retornou InternalError e não é declarado reaberto. Atividade nominal conjunta emitida, sem certificação de presença física ou toda posição de2026. Uma fonte compartilhada pelos dois nomes.",
    "accessMode": "direct-text",
    "attribution": "named-joint-adoption",
    "readBy": [
      "/root/public_continue"
    ],
    "independentReadBy": [
      "/root/method_review"
    ],
    "supports": "Atividade ou declaração nominal em2026, no escopo delimitado; não renova todo programa político anterior.",
    "independentActualReadScope": "Cláusula oficial indexada completa23/07 com ambos os nomes",
    "reviewStatus": "Root accepted08/10/2026; active integration unconfirmed"
  },
  {
    "id": "ayanna-pressley",
    "title": "Ayanna Pressley — declaração própria emitida07/10/2026",
    "url": "https://pressley.house.gov/2026/10/07/rep-pressley-statement-marking-three-year-somber-anniversary-of-october-7th-attack/",
    "publishedDate": "2026-10-07",
    "accessedDate": "2026-10-08",
    "actualReadScope": "Cabeçalho42, atribuição45 e corpo próprio47–56 completos efetivamente lidos",
    "limitations": "Publicação institucional nominal nesse ano; acusações e classificação jurídica do conflito não certificadas. Nenhum código ou renovação de todo programa anterior.",
    "accessMode": "direct-text",
    "attribution": "own-author",
    "readBy": [
      "/root/public_continue"
    ],
    "independentReadBy": [
      "/root/method_review"
    ],
    "supports": "Atividade ou declaração nominal em2026, no escopo delimitado; não renova todo programa político anterior.",
    "independentActualReadScope": "42–56",
    "reviewStatus": "Root accepted08/10/2026; active integration unconfirmed"
  },
  {
    "id": "ro-khanna",
    "title": "Ro Khanna — comunicado nominal20/04/2026, recuperação indexada",
    "url": "https://khanna.house.gov/media/press-releases/rep-ro-khanna-reintroduces-gasoline-export-ban-act-prohibiting-exportation",
    "publishedDate": "2026-04-20",
    "accessedDate": "2026-10-08",
    "actualReadScope": "Corpo indexado completo: data20/04 e abertura de reintrodução com citação própria; acesso direto individual InternalError",
    "limitations": "Publicação nominal2026 sustenta atividade. A data da publicação não certifica dia de introdução legislativa: registro Govinfo aponta14/04; Today do comunicado não foi harmonizado. Não prova aprovação de lei ou orientação geral sobre comércio.",
    "accessMode": "indexed-complete-clause",
    "attribution": "own-author",
    "readBy": [
      "/root/public_continue"
    ],
    "independentReadBy": [
      "/root/method_review"
    ],
    "supports": "Atividade ou declaração nominal em2026, no escopo delimitado; não renova todo programa político anterior.",
    "independentActualReadScope": "Corpo oficial indexado completo20/04",
    "reviewStatus": "Root accepted08/10/2026; active integration unconfirmed"
  },
  {
    "id": "tawakkol-karman",
    "title": "Fundação Tawakkol Karman — palestra concluída Oxford09/02/2026",
    "url": "https://tkif.org/en/chairwoman-activities/3231-tawakkol-karman-warns-of-systemic-erosion-of-global-order-in-oxford-lecture",
    "publishedDate": "2026-02-09",
    "accessedDate": "2026-10-08",
    "actualReadScope": "Cabeçalho68/71 e corpo nominal73–82 efetivamente lidos; endereço próprio88–160 adicionalmente visível e lido",
    "limitations": "Relato institucional nomeia palestra entregue em Oxford. Identidade apenas neste adendo; não são novos códigos, resultados certificados, autenticação de áudio ou renovação de todo texto político anterior.",
    "accessMode": "direct-text",
    "attribution": "nominal-reported-own-words",
    "readBy": [
      "/root/public_continue"
    ],
    "independentReadBy": [
      "/root/method_review"
    ],
    "supports": "Atividade ou declaração nominal em2026, no escopo delimitado; não renova todo programa político anterior.",
    "independentActualReadScope": "68–81",
    "reviewStatus": "Root accepted08/10/2026; active integration unconfirmed"
  },
  {
    "id": "maria-ressa",
    "title": "IPA — participação concluída de Maria Ressa no WExFo2026",
    "url": "https://internationalpublishers.org/ipa-at-world-expression-forum-2026/",
    "publishedDate": "2026-06-03",
    "accessedDate": "2026-10-08",
    "actualReadScope": "Corpo indexado completo: cabeçalhoJune3, evento1–3June e parágrafo da conversa concluída entre Støre e Maria Ressa",
    "limitations": "Acesso direto inicial mostrou apenas metadados e recuperação posterior InternalError; corpo completo recuperado por pesquisa indexada. Normas do primeiro-ministro não transferidas a Ressa; identidade/atividade reportada apenas. Sem vídeo, imagem ou renovação de posições antigas.",
    "accessMode": "indexed-complete-clause",
    "attribution": "institutional-identity",
    "readBy": [
      "/root/public_continue"
    ],
    "independentReadBy": [
      "/root/method_review"
    ],
    "supports": "Atividade ou declaração nominal em2026, no escopo delimitado; não renova todo programa político anterior.",
    "independentActualReadScope": "Corpo IPA indexado completo03/06 retrospectivo",
    "reviewStatus": "Root accepted08/10/2026; active integration unconfirmed"
  },
  {
    "id": "javier-milei",
    "title": "Câmara de Deputados Argentina — presença nominal29/04/2026",
    "url": "https://www3.hcdn.gob.ar/dependencias/dtaquigrafos/diarios/periodo-144/diario_202604292.pdf",
    "publishedDate": "2026-04-29",
    "accessedDate": "2026-10-08",
    "actualReadScope": "PDF cabeçalho0–6 p1 e cláusula295–297 p3 efetivamente lidos: entrada nominal nas galerias",
    "limitations": "Apenas cláusula de presença com data da sessão; não72p inteiras. Fala do chefe de gabinete Manuel Adorni e manifestações de outros não atribuídas a Milei. Não renova códigos da própria declaração de2023.",
    "accessMode": "direct-text",
    "attribution": "institutional-identity",
    "readBy": [
      "/root/public_continue"
    ],
    "independentReadBy": [
      "/root/method_review"
    ],
    "supports": "Atividade ou declaração nominal em2026, no escopo delimitado; não renova todo programa político anterior.",
    "independentActualReadScope": "PDF oficial OCR277–297 p3, sem imagens",
    "reviewStatus": "Root accepted08/10/2026; active integration unconfirmed"
  },
  {
    "id": "ban-ki-moon",
    "title": "Fundação Ban Ki-moon — atividades concluídas Paris15–16/01/2026",
    "url": "https://bankimoon.org/news/from-science-to-policy-the-bkmf-advancing-sdg-3-in-paris/",
    "publishedDate": "2026-02-03",
    "accessedDate": "2026-10-08",
    "actualReadScope": "Cabeçalho43 e corpo44–60 completos efetivamente lidos; atividades concluídas15/01 em45 e16/01 em52",
    "limitations": "03/02 é publicação; timestamp de modificação04/05 não é data do evento. Relato institucional de discursos e reuniões concluídos em janeiro; não prova cargo contínuo, imagens ou renovação de posições anteriores.",
    "accessMode": "direct-text",
    "attribution": "institutional-identity",
    "readBy": [
      "/root/public_continue"
    ],
    "independentReadBy": [
      "/root/method_review"
    ],
    "supports": "Atividade ou declaração nominal em2026, no escopo delimitado; não renova todo programa político anterior.",
    "independentActualReadScope": "43–53",
    "reviewStatus": "Root accepted08/10/2026; active integration unconfirmed"
  },
  {
    "id": "ricardo-lagos",
    "title": "ADN — relato contemporâneo de contato semanal com Ricardo Lagos",
    "url": "https://www.adnradio.cl/2026/07/23/con-dificultades-de-motricidad-pero-muy-lucido-el-estado-de-ricardo-lagos-tras-su-retiro-de-la-vida-publica/",
    "publishedDate": "2026-07-23",
    "accessedDate": "2026-10-08",
    "actualReadScope": "Cabeçalho50 e corpo55–62 efetivamente lidos: Ottone declara contato semanal atual com Lagos",
    "limitations": "Prova contemporânea reportada de identidade viva, não presença autoral em entrevista, diagnóstico médico certificado ou atividade política pública. Dia das visitas não é precisado; comentários de Ottone e resultados políticos não atribuídos diretamente a Lagos.",
    "accessMode": "direct-text",
    "attribution": "institutional-identity",
    "readBy": [
      "/root/public_continue"
    ],
    "independentReadBy": [
      "/root/method_review"
    ],
    "supports": "Atividade ou declaração nominal em2026, no escopo delimitado; não renova todo programa político anterior.",
    "independentActualReadScope": "ADN50–62",
    "reviewStatus": "Root accepted08/10/2026; active integration unconfirmed"
  },
  {
    "id": "lakhdar-brahimi",
    "title": "Jordan News — relato nominal de presença familiar em Amman2026",
    "url": "https://www.jordannews.jo/Section-29/Analysis/Lakhdar-Brahimi-in-Amman-A-Father-a-Diplomatic-Legend-and-a-Name-That-Will-Always-Echo-Through-History-53746",
    "publishedDate": "2026-08-02",
    "accessedDate": "2026-10-08",
    "actualReadScope": "Data editorial93 e corpo104–118 completos efetivamente lidos; presença nominal107–109/113/116–117",
    "limitations": "Data last updated Aug02/2026 separada do relógio variável do site86. Relato de presença no festival na semana anterior, sem dia exato nem verificação visual/autenticidade da fotografia. Elogios e história diplomática não certificam novas posições. Não inferir presença em qualquer evento futuro.",
    "accessMode": "direct-text",
    "attribution": "institutional-identity",
    "readBy": [
      "/root/public_continue"
    ],
    "independentReadBy": [
      "/root/method_review"
    ],
    "supports": "Atividade ou declaração nominal em2026, no escopo delimitado; não renova todo programa político anterior.",
    "independentActualReadScope": "JordanNews93/104–118",
    "reviewStatus": "Root accepted08/10/2026; active integration unconfirmed"
  },
  {
    "id": "ziauddin-yousafzai",
    "title": "Geo News — presença nominal de Ziauddin na cerimônia Oxford2026",
    "url": "https://www.geo.tv/latest/650022-malalas-portrait-unveiled-at-oxford-university",
    "publishedDate": "2026-02-10",
    "accessedDate": "2026-10-08",
    "actualReadScope": "Cabeçalho44 e corpo46–49 efetivamente lidos: cerimônia concluída com Ziauddin entre familiares",
    "limitations": "Data de publicação10/02; dia da cerimônia não individualmente certificado. Reportagem de participante, não cálculo de idade ou transferência das palavras de Malala. Foto e vídeo não examinados.",
    "accessMode": "direct-text",
    "attribution": "institutional-identity",
    "readBy": [
      "/root/public_continue"
    ],
    "independentReadBy": [
      "/root/method_review"
    ],
    "supports": "Atividade ou declaração nominal em2026, no escopo delimitado; não renova todo programa político anterior.",
    "independentActualReadScope": "Geo44–49",
    "reviewStatus": "Root accepted08/10/2026; active integration unconfirmed"
  },
  {
    "id": "jeremy-corbyn",
    "title": "Hansard — contribuição nominal de Jeremy Corbyn15/09/2026",
    "url": "https://hansard.parliament.uk/Commons/2026-09-15/debates/4eb35084-7104-4c1e-8d3f-c7a2a3a1e2df/WestminsterHall",
    "publishedDate": "2026-09-15",
    "accessedDate": "2026-10-08",
    "actualReadScope": "Cabeçalho8 e atribuição/contribuição própria338–340 efetivamente lidos completos",
    "limitations": "Apenas intervenção nominal datada, não1263linhas de todos os debates. Respostas de ministro e comentários de outros excluídos; não certifica resultados habitacionais ou todo programa político anterior.",
    "accessMode": "direct-text",
    "attribution": "own-author",
    "readBy": [
      "/root/public_continue"
    ],
    "independentReadBy": [
      "/root/method_review"
    ],
    "supports": "Atividade ou declaração nominal em2026, no escopo delimitado; não renova todo programa político anterior.",
    "independentActualReadScope": "Hansard338–340",
    "reviewStatus": "Root accepted08/10/2026; active integration unconfirmed"
  },
  {
    "id": "george-soros",
    "title": "RomaniaTV — aniversário de George Soros relatado com mensagem nominal do filho",
    "url": "https://www.romaniatv.net/george-soros-a-implinit-96-de-ani-fiul-sau-a-publicat-o-fotografie-alaturi-de-miliardar-te-iubesc-tata-foto_9748831.html",
    "publishedDate": "2026-08-12",
    "accessedDate": "2026-10-08",
    "actualReadScope": "Cabeçalho45–50 e corpo53–58 efetivamente lidos: aniversário atual e mensagem de Alex ao pai",
    "limitations": "Confirmação contemporânea reportada e limitada, não mera conta automática de idade. Fonte jornalística reproduz alegação familiar; post canônico e fotografia não autenticados/reabertos. Não demonstra declaração ou presença pública de George naquele dia, nem atividade da fundação atribuível pessoalmente a ele. Somente identidade viva reportada, sem política nova.",
    "accessMode": "direct-text",
    "attribution": "institutional-identity",
    "readBy": [
      "/root/public_continue"
    ],
    "independentReadBy": [
      "/root/method_review"
    ],
    "supports": "Atividade ou declaração nominal em2026, no escopo delimitado; não renova todo programa político anterior.",
    "independentActualReadScope": "RomaniaTV45–58",
    "reviewStatus": "Root accepted08/10/2026; active integration unconfirmed"
  }
];
export const publicIdentityRefresh01Proposed:IdentityArchiveEntry[] = [
  {
    "id": "denis-mukwege",
    "name": "Denis Mukwege",
    "kind": "person",
    "category": "public-figure",
    "period": "Artigo assinado de 13 de novembro de 2025",
    "sources": [
      {
        "title": "Denis Mukwege — Without women, there can be no lasting peace",
        "url": "https://theelders.org/news/without-women-there-can-be-no-lasting-peace",
        "publishedDate": "2025-11-13",
        "note": "Artigo assinado, adaptado de boletim pelo próprio organismo do autor; aberto em 7/10/2026. Não atribuir declarações coletivas dos Elders sem adesão pessoal documentada."
      },
      {
        "title": "Denis Mukwege — membro atual dos Elders",
        "url": "https://theelders.org/profile/denis-mukwege",
        "note": "Perfil institucional atual, distinto do artigo assinado que sustenta o eixo. Aberta em 7/10/2026; identidade contemporânea, sem valores de eixo."
      },
      {
        "title": "The Elders — declaração conjunta nominal13/05/2026",
        "url": "https://theelders.org/news/when-leaders-flout-international-rule-law-poor-pay-highest-price",
        "note": "Identidade/atividade2026 apenas. Data11, corpo15–34 e signatários36–54 efetivamente lidos completos. UMA declaração compartilhada, não seis confirmações independentes. Assinatura nominal datada sustenta atividade declaratória; as we meet in Nairobi25 não certifica presença física individual de todos. Não atualiza posições antigas, nem certifica acusações, cargos, imagens ou práticas."
      }
    ],
    "caveats": "Participação feminina na construção da paz é o subtema lido; prêmio e profissão não geram posições nos demais eixos. Identidade viva/atividade2026 delimitada por fonte adicional; data de publicação ou relato nominal não renova todas as posições anteriores nem certifica presença física, imagens ou cargo contínuo.",
    "rationale": "Defende liderança e participação plena e igual das mulheres nas negociações e na construção da paz.",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 60,
      "tec": 50
    },
    "evidence": {
      "mor": "medium"
    },
    "axisEvidence": {
      "mor": {
        "sourceTitles": [
          "Denis Mukwege — Without women, there can be no lasting peace"
        ],
        "rationale": "Igualdade de participação sustenta direção emancipatória. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não estabelece programa completo sobre família, aborto ou outros costumes."
      }
    },
    "coding": {
      "mor": {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Denis Mukwege — Without women, there can be no lasting peace",
            "publishedDate": "2025-11-13",
            "accessedDate": "2026-10-07",
            "locator": "Parágrafos While women often bear; However; As we mark; The participation of women",
            "statement": "Defende liderança e participação plena e igual de mulheres nas negociações e construção da paz.",
            "basis": "declaration"
          }
        ],
        "rationale": "Igualdade de participação sustenta direção emancipatória.",
        "uncertainty": "Não estabelece programa completo sobre família, aborto ou outros costumes.",
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
    "id": "juan-manuel-santos",
    "name": "Juan Manuel Santos",
    "kind": "person",
    "category": "public-figure",
    "period": "Declaração nominal de 24 de fevereiro de 2025",
    "sources": [
      {
        "title": "Juan Manuel Santos — negociações inclusivas sobre Ucrânia",
        "url": "https://theelders.org/news/juan-manuel-santos-urges-inclusive-peace-talks-ukraines-future",
        "publishedDate": "2025-02-24",
        "note": "Declaração nominal reproduzida pelo próprio organismo, aberta em 7/10/2026; conteúdo distinto da biografia editorial."
      },
      {
        "title": "Juan Manuel Santos — presidente atual dos Elders",
        "url": "https://theelders.org/profile/juan-manuel-santos",
        "note": "Perfil institucional atual identifica presidência da organização, não cargo atual no governo colombiano. Aberta em 7/10/2026; identidade contemporânea, sem valores de eixo."
      },
      {
        "title": "The Elders — declaração conjunta nominal13/05/2026",
        "url": "https://theelders.org/news/when-leaders-flout-international-rule-law-poor-pay-highest-price",
        "note": "Identidade/atividade2026 apenas. Data11, corpo15–34 e signatários36–54 efetivamente lidos completos. UMA declaração compartilhada, não seis confirmações independentes. Assinatura nominal datada sustenta atividade declaratória; as we meet in Nairobi25 não certifica presença física individual de todos. Não atualiza posições antigas, nem certifica acusações, cargos, imagens ou práticas."
      }
    ],
    "caveats": "Negociação inclusiva nesse conflito; apoio à segurança ucraniana não equivale a pacifismo absoluto nem prova toda a trajetória. Identidade viva/atividade2026 delimitada por fonte adicional; data de publicação ou relato nominal não renova todas as posições anteriores nem certifica presença física, imagens ou cargo contínuo.",
    "rationale": "Propõe negociações de paz inclusivas com Ucrânia e países europeus, preservando soberania e garantias de segurança.",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
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
      "dip": "medium"
    },
    "axisEvidence": {
      "dip": {
        "sourceTitles": [
          "Juan Manuel Santos — negociações inclusivas sobre Ucrânia"
        ],
        "rationale": "Preferência por solução diplomática inclusiva sustenta direção pacífica delimitada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não rejeita defesa militar ou apoio a aliados; não transforma negociações em neutralidade."
      }
    },
    "coding": {
      "dip": {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Juan Manuel Santos — negociações inclusivas sobre Ucrânia",
            "publishedDate": "2025-02-24",
            "accessedDate": "2026-10-07",
            "locator": "Declaração nominal: parágrafos The conflict is entering; The whole world will pay",
            "statement": "Pede negociações de paz com participação direta da Ucrânia e de países europeus, preservando soberania e garantias de segurança.",
            "basis": "declaration"
          }
        ],
        "rationale": "Preferência por solução diplomática inclusiva sustenta direção pacífica delimitada.",
        "uncertainty": "Não rejeita defesa militar ou apoio a aliados; não transforma negociações em neutralidade.",
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
    "id": "hina-jilani",
    "name": "Hina Jilani",
    "kind": "person",
    "category": "public-figure",
    "period": "2022-11-25",
    "sources": [
      {
        "title": "Leaders must tackle root causes of gender-based violence and ensure justice for all",
        "url": "https://theelders.org/news/leaders-must-tackle-root-causes-gender-based-violence-and-ensure-justice-all",
        "note": "Declaração primária efetivamente aberta em 7/10/2026; somente autoria nominal ou assinatura individual codificada."
      },
      {
        "title": "Hina Jilani — identidade contemporânea",
        "url": "https://theelders.org/profile/hina-jilani",
        "note": "Perfil institucional atual, distinto da declaração nominal. Aberta em 7/10/2026; identidade sem inferência de eixo."
      },
      {
        "title": "The Elders — declaração conjunta nominal13/05/2026",
        "url": "https://theelders.org/news/when-leaders-flout-international-rule-law-poor-pay-highest-price",
        "note": "Identidade/atividade2026 apenas. Data11, corpo15–34 e signatários36–54 efetivamente lidos completos. UMA declaração compartilhada, não seis confirmações independentes. Assinatura nominal datada sustenta atividade declaratória; as we meet in Nairobi25 não certifica presença física individual de todos. Não atualiza posições antigas, nem certifica acusações, cargos, imagens ou práticas."
      }
    ],
    "caveats": "Não cobre todos os costumes; não imputa a ela cada parágrafo coletivo da página. Demais eixos desconhecidos. Revisão independente de conteúdo pendente. Identidade viva/atividade2026 delimitada por fonte adicional; data de publicação ou relato nominal não renova todas as posições anteriores nem certifica presença física, imagens ou cargo contínuo.",
    "rationale": "Defende autonomia corporal e acesso igual das mulheres à justiça contra discriminação patriarcal.",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 60,
      "tec": 50
    },
    "evidence": {
      "mor": "medium"
    },
    "axisEvidence": {
      "mor": {
        "sourceTitles": [
          "Leaders must tackle root causes of gender-based violence and ensure justice for all"
        ],
        "rationale": "Emancipação de gênero estabelece direção reformista delimitada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não cobre todos os costumes; não imputa a ela cada parágrafo coletivo da página."
      }
    },
    "coding": {
      "mor": {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Leaders must tackle root causes of gender-based violence and ensure justice for all",
            "publishedDate": "2022-11-25",
            "accessedDate": "2026-10-07",
            "locator": "Citação nominal de Hina Jilani, dois parágrafos após Hina Jilani said",
            "statement": "Defende autonomia corporal e acesso igual de mulheres à justiça contra discriminação patriarcal.",
            "basis": "declaration"
          }
        ],
        "rationale": "Emancipação de gênero estabelece direção reformista delimitada.",
        "uncertainty": "Não cobre todos os costumes; não imputa a ela cada parágrafo coletivo da página.",
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
    "id": "ernesto-zedillo",
    "name": "Ernesto Zedillo",
    "kind": "person",
    "category": "public-figure",
    "period": "2025-05-07",
    "sources": [
      {
        "title": "Nuclear weapons pose a terrible danger to us all",
        "url": "https://theelders.org/news/nuclear-weapons-pose-terrible-danger-us-all",
        "note": "Declaração primária efetivamente aberta em 7/10/2026; somente autoria nominal ou assinatura individual codificada."
      },
      {
        "title": "Ernesto Zedillo — identidade contemporânea",
        "url": "https://theelders.org/profile/ernesto-zedillo",
        "note": "Perfil institucional atual dos Elders. Aberta em 7/10/2026; identidade sem inferência de eixo."
      },
      {
        "title": "The Elders — declaração conjunta nominal13/05/2026",
        "url": "https://theelders.org/news/when-leaders-flout-international-rule-law-poor-pay-highest-price",
        "note": "Identidade/atividade2026 apenas. Data11, corpo15–34 e signatários36–54 efetivamente lidos completos. UMA declaração compartilhada, não seis confirmações independentes. Assinatura nominal datada sustenta atividade declaratória; as we meet in Nairobi25 não certifica presença física individual de todos. Não atualiza posições antigas, nem certifica acusações, cargos, imagens ou práticas."
      }
    ],
    "caveats": "Política nuclear não estabelece rejeição de todas as forças armadas ou guerras. Demais eixos desconhecidos. Revisão independente de conteúdo pendente. Identidade viva/atividade2026 delimitada por fonte adicional; data de publicação ou relato nominal não renova todas as posições anteriores nem certifica presença física, imagens ou cargo contínuo.",
    "rationale": "Propõe redução do risco nuclear, compromissos de não primeiro uso e diplomacia voltada ao desarmamento.",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
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
      "dip": "medium"
    },
    "axisEvidence": {
      "dip": {
        "sourceTitles": [
          "Nuclear weapons pose a terrible danger to us all"
        ],
        "rationale": "Negociação e redução de armamentos sustentam direção pacífica nesse domínio. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Política nuclear não estabelece rejeição de todas as forças armadas ou guerras."
      }
    },
    "coding": {
      "dip": {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Nuclear weapons pose a terrible danger to us all",
            "publishedDate": "2025-05-07",
            "accessedDate": "2026-10-07",
            "locator": "Parágrafos No First Use; four Ds; diplomatic efforts; assinatura Ernesto Zedillo",
            "statement": "Pede redução do risco nuclear, não primeiro uso e esforços diplomáticos para desarmamento.",
            "basis": "declaration"
          }
        ],
        "rationale": "Negociação e redução de armamentos sustentam direção pacífica nesse domínio.",
        "uncertainty": "Política nuclear não estabelece rejeição de todas as forças armadas ou guerras.",
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
    "id": "zeid-raad-al-hussein",
    "name": "Zeid Ra’ad Al Hussein",
    "kind": "person",
    "category": "public-figure",
    "period": "2025-10-14",
    "sources": [
      {
        "title": "The UN must take the need for reform seriously",
        "url": "https://theelders.org/news/un-must-take-need-reform-seriously",
        "note": "Declaração primária efetivamente aberta em 7/10/2026; somente autoria nominal ou assinatura individual codificada."
      },
      {
        "title": "Zeid Ra’ad Al Hussein — identidade contemporânea",
        "url": "https://theelders.org/profile/zeid-raad-al-hussein",
        "note": "Perfil institucional atual. Aberta em 7/10/2026; identidade sem inferência de eixo."
      },
      {
        "title": "The Elders — declaração conjunta nominal13/05/2026",
        "url": "https://theelders.org/news/when-leaders-flout-international-rule-law-poor-pay-highest-price",
        "note": "Identidade/atividade2026 apenas. Data11, corpo15–34 e signatários36–54 efetivamente lidos completos. UMA declaração compartilhada, não seis confirmações independentes. Assinatura nominal datada sustenta atividade declaratória; as we meet in Nairobi25 não certifica presença física individual de todos. Não atualiza posições antigas, nem certifica acusações, cargos, imagens ou práticas."
      }
    ],
    "caveats": "Reforma da ONU não equivale a democracia doméstica ou pacifismo absoluto. Demais eixos desconhecidos. Revisão independente de conteúdo pendente. Identidade viva/atividade2026 delimitada por fonte adicional; data de publicação ou relato nominal não renova todas as posições anteriores nem certifica presença física, imagens ou cargo contínuo.",
    "rationale": "Propõe restaurar uma liderança independente e ativa do secretário-geral da ONU como mediador internacional.",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
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
      "dip": "medium"
    },
    "axisEvidence": {
      "dip": {
        "sourceTitles": [
          "The UN must take the need for reform seriously"
        ],
        "rationale": "A preferência explícita por mediação sustenta direção diplomática. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Reforma da ONU não equivale a democracia doméstica ou pacifismo absoluto."
      }
    },
    "coding": {
      "dip": {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "The UN must take the need for reform seriously",
            "publishedDate": "2025-10-14",
            "accessedDate": "2026-10-07",
            "locator": "Parágrafo reinstating the Secretary-General as an independent and dynamic international mediator; assinatura",
            "statement": "Defende restaurar a função independente e dinâmica do secretário-geral como mediador internacional.",
            "basis": "declaration"
          }
        ],
        "rationale": "A preferência explícita por mediação sustenta direção diplomática.",
        "uncertainty": "Reforma da ONU não equivale a democracia doméstica ou pacifismo absoluto.",
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
    "id": "gro-harlem-brundtland",
    "name": "Gro Harlem Brundtland",
    "kind": "person",
    "category": "public-figure",
    "period": "2019-09-06",
    "sources": [
      {
        "title": "Universal health coverage is affordable, even in tough times",
        "url": "https://theelders.org/news/universal-health-coverage-affordable-even-tough-times",
        "note": "Declaração primária efetivamente aberta em 7/10/2026; somente autoria nominal ou assinatura individual codificada."
      },
      {
        "title": "Gro Harlem Brundtland — identidade contemporânea",
        "url": "https://theelders.org/profile/gro-harlem-brundtland",
        "note": "Perfil institucional atual identifica membro ativo; antigo cargo de vice-presidente não é atribuído como atual. Aberta em 7/10/2026; identidade sem inferência de eixo."
      },
      {
        "title": "The Elders — declaração conjunta nominal13/05/2026",
        "url": "https://theelders.org/news/when-leaders-flout-international-rule-law-poor-pay-highest-price",
        "note": "Identidade/atividade2026 apenas. Data11, corpo15–34 e signatários36–54 efetivamente lidos completos. UMA declaração compartilhada, não seis confirmações independentes. Assinatura nominal datada sustenta atividade declaratória; as we meet in Nairobi25 não certifica presença física individual de todos. Não atualiza posições antigas, nem certifica acusações, cargos, imagens ou práticas."
      }
    ],
    "caveats": "Financiamento não determina propriedade de todos os prestadores; não estabelece nacionalização de toda a economia ou execução do NHI. Demais eixos desconhecidos. Revisão independente de conteúdo pendente. Identidade viva/atividade2026 delimitada por fonte adicional; data de publicação ou relato nominal não renova todas as posições anteriores nem certifica presença física, imagens ou cargo contínuo.",
    "rationale": "Defende financiamento público de saúde e transição do financiamento privado voluntário, sem excluir prestadores privados.",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 60,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "eco": "medium"
    },
    "axisEvidence": {
      "eco": {
        "sourceTitles": [
          "Universal health coverage is affordable, even in tough times"
        ],
        "rationale": "Financiamento público explícito de serviço essencial sustenta direção pública parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Financiamento não determina propriedade de todos os prestadores; não estabelece nacionalização de toda a economia ou execução do NHI."
      }
    },
    "coding": {
      "eco": {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "relatedQuestionIds": [
          "economia_04"
        ],
        "claims": [
          {
            "sourceTitle": "Universal health coverage is affordable, even in tough times",
            "publishedDate": "2019-09-06",
            "accessedDate": "2026-10-07",
            "locator": "Artigo nominal conjunto: Establishing a publicly funded health system; Every country; South Africa, like the US, needs to make this transition",
            "statement": "Defende sistema de saúde publicamente financiado e transição do financiamento privado voluntário para financiamento público.",
            "basis": "declaration"
          }
        ],
        "rationale": "Financiamento público explícito de serviço essencial sustenta direção pública parcial.",
        "uncertainty": "Financiamento não determina propriedade de todos os prestadores; não estabelece nacionalização de toda a economia ou execução do NHI.",
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
    "id": "rashida-tlaib",
    "kind": "person",
    "category": "public-figure",
    "name": "Rashida Tlaib",
    "period": "Agenda publicada pelo gabinete: Justice for All Act de 2023 e página Ending Poverty sem data; consulta em 7 de outubro de 2026.",
    "vec": {
      "est": 50,
      "rep": 60,
      "pod": 40,
      "imi": 40,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 60,
      "tec": 50
    },
    "evidence": {
      "rep": "medium",
      "imi": "medium",
      "pod": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Justice for All"
        ],
        "rationale": "Declara compromisso com a proteção do direito ao voto. A âncora expressa a direção e intensidade delimitadas dessa proposta. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não sustenta um retrato completo de desenho democrático. Direito ao voto é um componente da representação, sem autorizar inferir todo o desenho democrático. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação."
      },
      "imi": {
        "sourceTitles": [
          "Justice for All"
        ],
        "rationale": "Defende facilitar o acesso à cidadania para comunidades imigrantes. A âncora expressa a direção e intensidade delimitadas dessa proposta. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Cidadania não resolve todas as posições sobre multiculturalismo. Inclusão jurídica e acesso a instituições sustentam somente orientação moderada contra exclusão, sem equivalência perfeita com toda integração cultural. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação."
      },
      "pod": {
        "sourceTitles": [
          "Justice for All"
        ],
        "rationale": "Propõe responsabilização de agentes públicos e vedação a perfilamento racial e de gênero pela polícia. A âncora expressa a direção e intensidade delimitadas dessa proposta. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Proteção contra abuso não implica rejeição de toda política de segurança. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação."
      },
      "mor": {
        "sourceTitles": [
          "Justice for All"
        ],
        "rationale": "Propõe proteção antidiscriminatória para orientação sexual e identidade de gênero. A âncora expressa a direção e intensidade delimitadas dessa proposta. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Escopo é direitos civis especificados, não todos os temas morais. A proteção citada cobre uma faceta de costumes e direitos; não constitui posição extrema sobre todo o eixo. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Justice for All",
            "locator": "My Position on Justice for All, primeiro parágrafo",
            "statement": "Declara compromisso com a proteção do direito ao voto.",
            "basis": "declaration",
            "publishedDate": "Sem data indicada; conteúdo disponível em 7/10/2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Declara compromisso com a proteção do direito ao voto. A âncora expressa a direção e intensidade delimitadas dessa proposta.",
        "uncertainty": "Não sustenta um retrato completo de desenho democrático. Direito ao voto é um componente da representação, sem autorizar inferir todo o desenho democrático. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "imi": {
        "axis": "imi",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Justice for All",
            "locator": "My Position on Justice for All, segundo parágrafo",
            "statement": "Defende facilitar o acesso à cidadania para comunidades imigrantes.",
            "basis": "declaration",
            "publishedDate": "Sem data indicada; conteúdo disponível em 7/10/2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Defende facilitar o acesso à cidadania para comunidades imigrantes. A âncora expressa a direção e intensidade delimitadas dessa proposta.",
        "uncertainty": "Cidadania não resolve todas as posições sobre multiculturalismo. Inclusão jurídica e acesso a instituições sustentam somente orientação moderada contra exclusão, sem equivalência perfeita com toda integração cultural. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação.",
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
            "sourceTitle": "Justice for All",
            "locator": "Justice for All Civil Rights Act, item 4",
            "statement": "Propõe responsabilização de agentes públicos e vedação a perfilamento racial e de gênero pela polícia.",
            "basis": "declaration",
            "publishedDate": "Sem data indicada; conteúdo disponível em 7/10/2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Propõe responsabilização de agentes públicos e vedação a perfilamento racial e de gênero pela polícia. A âncora expressa a direção e intensidade delimitadas dessa proposta.",
        "uncertainty": "Proteção contra abuso não implica rejeição de toda política de segurança. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação.",
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
            "sourceTitle": "Justice for All",
            "locator": "Justice for All Civil Rights Act, item 7",
            "statement": "Propõe proteção antidiscriminatória para orientação sexual e identidade de gênero.",
            "basis": "declaration",
            "publishedDate": "Sem data indicada; conteúdo disponível em 7/10/2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Propõe proteção antidiscriminatória para orientação sexual e identidade de gênero. A âncora expressa a direção e intensidade delimitadas dessa proposta.",
        "uncertainty": "Escopo é direitos civis especificados, não todos os temas morais. A proteção citada cobre uma faceta de costumes e direitos; não constitui posição extrema sobre todo o eixo. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação.",
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
        "title": "Justice for All",
        "url": "https://tlaib.house.gov/resources/justice",
        "note": "Gabinete de Rashida Tlaib, Câmara dos EUA. Publicação: sem data indicada. Consulta documental em 7/10/2026; posições declaradas, não prova de implementação."
      },
      {
        "title": "Ending Poverty",
        "url": "https://tlaib.house.gov/resources/ending-poverty",
        "note": "Gabinete de Rashida Tlaib, Câmara dos EUA. Publicação: sem data indicada. Consulta documental em 7/10/2026; posições declaradas, não prova de implementação."
      },
      {
        "title": "Escritório Omar — comunicado nominal conjunto23/07/2026, cláusula do índice",
        "url": "https://omar.house.gov/media/press-releases",
        "note": "Identidade/atividade2026 apenas. Índice oficial94–97: data e cláusula completa com Omar e Rashida Tlaib entre membros que emitiram declaração. Corpo da cláusula do índice efetivamente lido; comunicado interno completo retornou InternalError e não é declarado reaberto. Atividade nominal conjunta emitida, sem certificação de presença física ou toda posição de2026. Uma fonte compartilhada pelos dois nomes."
      }
    ],
    "rationale": "Declara compromisso com a proteção do direito ao voto. Defende facilitar o acesso à cidadania para comunidades imigrantes. Propõe responsabilização de agentes públicos e vedação a perfilamento racial e de gênero pela polícia. Propõe proteção antidiscriminatória para orientação sexual e identidade de gênero.",
    "caveats": "A descrição do JFA é de proposta reapresentada em 2023, não de lei em vigor. Não atribuir nacionalização com base em transferência de renda. A página Health Care consultada é genérica e foi excluída como sustentação do eixo eco. A proposta de crédito tributário e salário mínimo foi preservada apenas no dossiê: não demonstra planejamento econômico suficientemente específico. Âncoras são classes editoriais, não medições da pessoa. Eixos ausentes são desconhecidos. Nenhum destes perfis possui os seis eixos exigidos para matches. Identidade viva/atividade2026 delimitada por fonte adicional; data de publicação ou relato nominal não renova todas as posições anteriores nem certifica presença física, imagens ou cargo contínuo."
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
    "id": "ro-khanna",
    "kind": "person",
    "category": "public-figure",
    "name": "Ro Khanna",
    "period": "Plataforma de Ro for Congress disponível em 7 de outubro de 2026, sem data de publicação. Inclui propostas futuras e relatos de atividade anterior.",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
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
    "evidence": {
      "eco": "medium",
      "con": "medium"
    },
    "axisEvidence": {
      "eco": {
        "sourceTitles": [
          "Ro’s Platform | Issues & Policy Positions"
        ],
        "rationale": "Defende Medicare for All; admite cobertura privada complementar. A âncora expressa a direção e intensidade delimitadas dessa proposta. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não confundir pagador público com eliminação de toda provisão privada. O polo público abrange estes serviços ou empregos públicos; financiamento não demonstra nacionalização da economia. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação."
      },
      "con": {
        "sourceTitles": [
          "Ro’s Platform | Issues & Policy Positions"
        ],
        "rationale": "Propõe banco industrial federal e conselho nacional de desenvolvimento. A âncora expressa a direção e intensidade delimitadas dessa proposta. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: O banco investiria também com capital privado. Coordenação e investimento públicos setoriais sustentam intensidade moderada; licença trabalhista isolada não implica planejamento da produção. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação."
      }
    },
    "coding": {
      "eco": {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Ro’s Platform | Issues & Policy Positions",
            "locator": "Medicare for All / Medicare for All Must Be Passed",
            "statement": "Defende Medicare for All; admite cobertura privada complementar.",
            "basis": "declaration",
            "publishedDate": "Sem data indicada; conteúdo disponível em 7/10/2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Defende Medicare for All; admite cobertura privada complementar. A âncora expressa a direção e intensidade delimitadas dessa proposta.",
        "uncertainty": "Não confundir pagador público com eliminação de toda provisão privada. O polo público abrange estes serviços ou empregos públicos; financiamento não demonstra nacionalização da economia. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação.",
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
            "sourceTitle": "Ro’s Platform | Issues & Policy Positions",
            "locator": "Marshall Plan for America / National Industrial Bank",
            "statement": "Propõe banco industrial federal e conselho nacional de desenvolvimento.",
            "basis": "declaration",
            "publishedDate": "Sem data indicada; conteúdo disponível em 7/10/2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Propõe banco industrial federal e conselho nacional de desenvolvimento. A âncora expressa a direção e intensidade delimitadas dessa proposta.",
        "uncertainty": "O banco investiria também com capital privado. Coordenação e investimento públicos setoriais sustentam intensidade moderada; licença trabalhista isolada não implica planejamento da produção. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação.",
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
        "title": "Ro’s Platform | Issues & Policy Positions",
        "url": "https://rokhanna.com/en/platform",
        "note": "Ro for Congress. Publicação: sem data indicada. Consulta documental em 7/10/2026; posições declaradas, não prova de implementação."
      },
      {
        "title": "Ro Khanna — comunicado nominal20/04/2026, recuperação indexada",
        "url": "https://khanna.house.gov/media/press-releases/rep-ro-khanna-reintroduces-gasoline-export-ban-act-prohibiting-exportation",
        "note": "Identidade/atividade2026 apenas. Corpo indexado completo: data20/04 e abertura de reintrodução com citação própria; acesso direto individual InternalError. Publicação nominal2026 sustenta atividade. A data da publicação não certifica dia de introdução legislativa: registro Govinfo aponta14/04; Today do comunicado não foi harmonizado. Não prova aprovação de lei ou orientação geral sobre comércio."
      }
    ],
    "rationale": "Defende Medicare for All; admite cobertura privada complementar. Propõe banco industrial federal e conselho nacional de desenvolvimento.",
    "caveats": "Seções de biografia e links jornalísticos não foram usados como evidência de eixos. A identidade religiosa declarada não codifica rel. O gabinete bloqueou a leitura de páginas de temas; a fonte utilizada é a plataforma primária da campanha. Tecnologia, comércio e diplomacia militar continuam desconhecidos. Regulação de IA não cobre todo o construto; tarifas seletivas com exceções e defesa militar seletiva não demonstram intensidade central equilibrada. Âncoras são classes editoriais, não medições da pessoa. Eixos ausentes são desconhecidos. Nenhum destes perfis possui os seis eixos exigidos para matches. Identidade viva/atividade2026 delimitada por fonte adicional; data de publicação ou relato nominal não renova todas as posições anteriores nem certifica presença física, imagens ou cargo contínuo."
  },
  {
    "id": "tawakkol-karman",
    "name": "Tawakkol Karman",
    "kind": "person",
    "category": "public-figure",
    "period": "Nobel Prize Summit, edição indexada em 25 de maio de 2023",
    "sources": [
      {
        "title": "Tawakkol Karman — Nobel Prize Summit, Washington, 25/5/2023",
        "url": "https://www.tawakkolkarman.net/texts/speeches/4335-tawakkol-karman-speech-at-nobel-prize-summit-washington",
        "publishedDate": "2023-05-25; data indicada no índice da página inicial do gabinete",
        "note": "Texto autoral aberto em 7/10/2026; o índice https://www.tawakkolkarman.net/ associa a este título/link a data 05-25-2023. O discurso de Sarajevo fica somente como contexto sem data confirmada."
      },
      {
        "title": "Tawakkol Karman — discurso de Sarajevo sobre democracia",
        "url": "https://www.tawakkolkarman.net/texts/speeches/5059-tawakkol-karman-speech-on-sarajevo-conference-on-democracy-in-the-arab-world",
        "publishedDate": "Sem data editorial indicada na página consultada",
        "note": "Texto autoral no próprio gabinete, aberto em 7/10/2026; data do evento não confirmada. Não atribuir automaticamente o discurso a 2026."
      },
      {
        "title": "Tawakkol Karman — gabinete, atividade pública contemporânea",
        "url": "https://www.tawakkolkarman.net/",
        "note": "Página pessoal atual e notícias do próprio gabinete; data exata de todas as atividades não certificada. Aberta em 7/10/2026; identidade contemporânea, sem valores de eixo."
      },
      {
        "title": "Fundação Tawakkol Karman — palestra concluída Oxford09/02/2026",
        "url": "https://tkif.org/en/chairwoman-activities/3231-tawakkol-karman-warns-of-systemic-erosion-of-global-order-in-oxford-lecture",
        "note": "Identidade/atividade2026 apenas. Cabeçalho68/71 e corpo nominal73–82 efetivamente lidos; endereço próprio88–160 adicionalmente visível e lido. Relato institucional nomeia palestra entregue em Oxford. Identidade apenas neste adendo; não são novos códigos, resultados certificados, autenticação de áudio ou renovação de todo texto político anterior."
      }
    ],
    "caveats": "Declaração de 2023 sobre expressão digital. Sarajevo permanece contexto sem data confirmada e não gera scores; não certificar implementação. Identidade viva/atividade2026 delimitada por fonte adicional; data de publicação ou relato nominal não renova todas as posições anteriores nem certifica presença física, imagens ou cargo contínuo.",
    "rationale": "Defende expressão digital contra censura e manipulação, admitindo remoção de conteúdos que causem dano real.",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 40,
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
      "pod": "medium"
    },
    "axisEvidence": {
      "pod": {
        "sourceTitles": [
          "Tawakkol Karman — Nobel Prize Summit, Washington, 25/5/2023"
        ],
        "rationale": "Proteção da expressão limita coerção estatal. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Preserva moderação contra danos; não resolve todas as políticas de segurança."
      }
    },
    "coding": {
      "pod": {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Tawakkol Karman — Nobel Prize Summit, Washington, 25/5/2023",
            "publishedDate": "2023-05-25; data indicada no índice da página inicial do gabinete",
            "accessedDate": "2026-10-07",
            "locator": "Parágrafos Global democracies; Tech companies; They should resist demands for censorship",
            "statement": "Defende expressão digital protegida contra censura autoritária e manipulação, com remoção de conteúdos causadores de dano real.",
            "basis": "declaration"
          }
        ],
        "rationale": "Proteção da expressão limita coerção estatal.",
        "uncertainty": "Preserva moderação contra danos; não resolve todas as políticas de segurança.",
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
    "id": "maria-ressa",
    "name": "Maria Ressa",
    "kind": "person",
    "category": "public-figure",
    "period": "Discurso preparado para o prêmio CPJ de 2018",
    "sources": [
      {
        "title": "Maria Ressa — discurso preparado para prêmio CPJ de 2018",
        "url": "https://cpj.org/awards/maria-ressa/",
        "publishedDate": "2018; dia da publicação não indicado",
        "note": "O organizador publica o texto preparado para apresentação, aberto em 7/10/2026. Distinguir discurso primário da biografia editorial da página."
      },
      {
        "title": "Maria Ressa — Institute of Global Politics, Columbia",
        "url": "https://igp.sipa.columbia.edu/distinguished-fellows/maria-ressa",
        "note": "Perfil institucional atual de atividade pública; sem assumir cargo de governo. Aberta em 7/10/2026; identidade contemporânea, sem valores de eixo."
      },
      {
        "title": "IPA — participação concluída de Maria Ressa no WExFo2026",
        "url": "https://internationalpublishers.org/ipa-at-world-expression-forum-2026/",
        "note": "Identidade/atividade2026 apenas. Corpo indexado completo: cabeçalhoJune3, evento1–3June e parágrafo da conversa concluída entre Støre e Maria Ressa. Acesso direto inicial mostrou apenas metadados e recuperação posterior InternalError; corpo completo recuperado por pesquisa indexada. Normas do primeiro-ministro não transferidas a Ressa; identidade/atividade reportada apenas. Sem vídeo, imagem ou renovação de posições antigas."
      }
    ],
    "caveats": "Texto preparado, não transcrição verificada da apresentação; críticas tecnológicas não geram rejeição geral de tecnologia. Identidade viva/atividade2026 delimitada por fonte adicional; data de publicação ou relato nominal não renova todas as posições anteriores nem certifica presença física, imagens ou cargo contínuo.",
    "rationale": "Defende imprensa livre e publicação sem medo, contra uso de processos penais para silenciar jornalistas.",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 40,
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
      "pod": "medium"
    },
    "axisEvidence": {
      "pod": {
        "sourceTitles": [
          "Maria Ressa — discurso preparado para prêmio CPJ de 2018"
        ],
        "rationale": "Liberdade de imprensa limita coerção estatal. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não resolve todas as políticas de segurança; suas denúncias não são aqui decisões judiciais verificadas."
      }
    },
    "coding": {
      "pod": {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Maria Ressa — discurso preparado para prêmio CPJ de 2018",
            "publishedDate": "2018; dia da publicação não indicado",
            "accessedDate": "2026-10-07",
            "locator": "Discurso preparado: parágrafo With this announced indictment e lista de seis apelos, itens 1–3",
            "statement": "Contesta instrumentalização penal contra jornalistas e defende publicar sem medo ou favorecimento.",
            "basis": "declaration"
          }
        ],
        "rationale": "Liberdade de imprensa limita coerção estatal.",
        "uncertainty": "Não resolve todas as políticas de segurança; suas denúncias não são aqui decisões judiciais verificadas.",
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
    "id": "javier-milei",
    "kind": "person",
    "category": "public-figure",
    "name": "Javier Milei",
    "period": "Declarações no discurso de posse, 10/12/2023; leitura documental em07/10/2026",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 40,
      "con": 40,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Defende propriedade privada e mercados livres de intervenção estatal, preservando direitos individuais e limites legais.",
    "caveats": "A fonte combina plataforma ideológica e atos presidenciais; atitudes pessoais em eixos sem documentação ficam sem direção atribuída. Revisão documental restrita ao discurso de10/12/2023: não certifica posições nem atos de2026. Mapeamentos genéricos anteriores, valores e URL indisponível preservados em legacyPublicQuality01LiveBefore/GeneratedBefore e no vetor bruto; eles não qualificam evidência documental. Sem posição atribuída aos dez eixos restantes. Identidade viva/atividade2026 delimitada por fonte adicional; data de publicação ou relato nominal não renova todas as posições anteriores nem certifica presença física, imagens ou cargo contínuo.",
    "sources": [
      {
        "title": "Discurso presidencial de posse, 2023",
        "url": "https://www.casarosada.gob.ar/informacion/discursos/50258-discurso-del-presidente-javier-milei-en-la-asuncion-presidencial",
        "note": "Discurso original de Milei que apresenta diagnóstico e programa de governo."
      },
      {
        "title": "Casa Rosada — Milei, discurso após posse, 10/12/2023 (URL canônica)",
        "url": "https://www.casarosada.gob.ar/informacion/discursos/50258-palabras-del-presidente-de-la-nacion-javier-milei-luego-del-acto-de-jura-y-asuncion-presidencial-desde-las-escalinatas-del-honorable-congreso-de-la-nacion",
        "note": "Texto primário completo efetivamente lido em07/10/2026; declaração de10/12/2023. URL legada indisponível preservada no arquivo e na união de fontes."
      },
      {
        "title": "Câmara de Deputados Argentina — presença nominal29/04/2026",
        "url": "https://www3.hcdn.gob.ar/dependencias/dtaquigrafos/diarios/periodo-144/diario_202604292.pdf",
        "note": "Identidade/atividade2026 apenas. PDF cabeçalho0–6 p1 e cláusula295–297 p3 efetivamente lidos: entrada nominal nas galerias. Apenas cláusula de presença com data da sessão; não72p inteiras. Fala do chefe de gabinete Manuel Adorni e manifestações de outros não atribuídas a Milei. Não renova códigos da própria declaração de2023."
      }
    ],
    "evidence": {
      "eco": "medium",
      "con": "medium"
    },
    "axisEvidence": {
      "eco": {
        "sourceTitles": [
          "Casa Rosada — Milei, discurso após posse, 10/12/2023 (URL canônica)"
        ],
        "rationale": "Propriedade privada e eficiência relativa sustentam direção parcial ao polo privado. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não demonstra privatização realizada nem predominância privada de todos os serviços; assistência aos necessitados é ressalvada nas linhas59–60."
      },
      "con": {
        "sourceTitles": [
          "Casa Rosada — Milei, discurso após posse, 10/12/2023 (URL canônica)"
        ],
        "rationale": "Declara preferência por coordenação de mercado. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Programa de posse, não prática certificada; ajuste fiscal anunciado não comprova extinção de toda regulação."
      }
    },
    "coding": {
      "eco": {
        "axis": "eco",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Casa Rosada — Milei, discurso após posse, 10/12/2023 (URL canônica)",
            "locator": "Parágrafos iniciados «En materia de salud», «Ese es el Estado presente» e «Hoy volvemos a abrazar»; linhas48–49/57 da leitura",
            "statement": "Defende propriedade privada e contrapõe ineficiência estatal à liberdade econômica.",
            "basis": "declaration",
            "publishedDate": "2023-12-10",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Propriedade privada e eficiência relativa sustentam direção parcial ao polo privado.",
        "relatedQuestionIds": [
          "economia_18",
          "economia_20"
        ],
        "uncertainty": "Não demonstra privatização realizada nem predominância privada de todos os serviços; assistência aos necessitados é ressalvada nas linhas59–60.",
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
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Casa Rosada — Milei, discurso após posse, 10/12/2023 (URL canônica)",
            "locator": "Parágrafos «A su vez, el cepo cambiario» e «Hoy volvemos a abrazar»; linhas20/57",
            "statement": "Rejeita controles cambiais e adota mercados livres de intervenção estatal.",
            "basis": "declaration",
            "publishedDate": "2023-12-10",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Declara preferência por coordenação de mercado.",
        "relatedQuestionIds": [
          "controle_02",
          "controle_17"
        ],
        "uncertainty": "Programa de posse, não prática certificada; ajuste fiscal anunciado não comprova extinção de toda regulação.",
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
    "id": "ban-ki-moon",
    "name": "Ban Ki-moon",
    "kind": "person",
    "category": "public-figure",
    "period": "2025-12-15",
    "sources": [
      {
        "title": "The UN is only as strong as its 193 Member States want it to be",
        "url": "https://theelders.org/news/un-only-strong-its-193-member-states-want-it-be",
        "note": "Declaração primária efetivamente aberta em 7/10/2026; somente autoria nominal ou assinatura individual codificada."
      },
      {
        "title": "Ban Ki-moon — identidade contemporânea",
        "url": "https://theelders.org/profile/ban-ki-moon",
        "note": "Perfil atual identifica Elder Emeritus; não atribui antiga vice-presidência como atual. Aberta em 7/10/2026; identidade sem inferência de eixo."
      },
      {
        "title": "Fundação Ban Ki-moon — atividades concluídas Paris15–16/01/2026",
        "url": "https://bankimoon.org/news/from-science-to-policy-the-bkmf-advancing-sdg-3-in-paris/",
        "note": "Identidade/atividade2026 apenas. Cabeçalho43 e corpo44–60 completos efetivamente lidos; atividades concluídas15/01 em45 e16/01 em52. 03/02 é publicação; timestamp de modificação04/05 não é data do evento. Relato institucional de discursos e reuniões concluídos em janeiro; não prova cargo contínuo, imagens ou renovação de posições anteriores."
      }
    ],
    "caveats": "Termo genérico intervir não especifica meios coercivos e não gera score int. Demais eixos desconhecidos. Revisão independente de conteúdo pendente. Identidade viva/atividade2026 delimitada por fonte adicional; data de publicação ou relato nominal não renova todas as posições anteriores nem certifica presença física, imagens ou cargo contínuo.",
    "rationale": "Defende liderança política ativa da ONU para mediar conflitos e solucionar crises internacionais.",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
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
      "dip": "medium"
    },
    "axisEvidence": {
      "dip": {
        "sourceTitles": [
          "The UN is only as strong as its 193 Member States want it to be"
        ],
        "rationale": "Mediação diplomática é preferência pacífica delimitada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Termo genérico intervir não especifica meios coercivos e não gera score int."
      }
    },
    "coding": {
      "dip": {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "The UN is only as strong as its 193 Member States want it to be",
            "publishedDate": "2025-12-15",
            "accessedDate": "2026-10-07",
            "locator": "Discurso: parágrafos UN leadership; more confident and active political role; mediating and settling",
            "statement": "Defende liderança política ativa da ONU na mediação e solução de crises internacionais.",
            "basis": "declaration"
          }
        ],
        "rationale": "Mediação diplomática é preferência pacífica delimitada.",
        "uncertainty": "Termo genérico intervir não especifica meios coercivos e não gera score int.",
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
    "id": "ricardo-lagos",
    "name": "Ricardo Lagos",
    "kind": "person",
    "category": "public-figure",
    "period": "2022-11-25",
    "sources": [
      {
        "title": "Leaders must tackle root causes of gender-based violence and ensure justice for all",
        "url": "https://theelders.org/news/leaders-must-tackle-root-causes-gender-based-violence-and-ensure-justice-all",
        "note": "Declaração primária efetivamente aberta em 7/10/2026; somente autoria nominal ou assinatura individual codificada."
      },
      {
        "title": "Ricardo Lagos — identidade contemporânea",
        "url": "https://theelders.org/profile/ricardo-lagos",
        "note": "Perfil atual identifica Elder Emeritus. Aberta em 7/10/2026; identidade sem inferência de eixo."
      },
      {
        "title": "ADN — relato contemporâneo de contato semanal com Ricardo Lagos",
        "url": "https://www.adnradio.cl/2026/07/23/con-dificultades-de-motricidad-pero-muy-lucido-el-estado-de-ricardo-lagos-tras-su-retiro-de-la-vida-publica/",
        "note": "Identidade/atividade2026 apenas. Cabeçalho50 e corpo55–62 efetivamente lidos: Ottone declara contato semanal atual com Lagos. Prova contemporânea reportada de identidade viva, não presença autoral em entrevista, diagnóstico médico certificado ou atividade política pública. Dia das visitas não é precisado; comentários de Ottone e resultados políticos não atribuídos diretamente a Lagos."
      }
    ],
    "caveats": "Oposição à violência isolada seria insuficiente; codifica a proposta explícita de reforma sistêmica, sem programa completo de costumes. Demais eixos desconhecidos. Revisão independente de conteúdo pendente. Identidade viva/atividade2026 delimitada por fonte adicional; data de publicação ou relato nominal não renova todas as posições anteriores nem certifica presença física, imagens ou cargo contínuo.",
    "rationale": "Defende enfrentar causas sistêmicas da violência de gênero e tornar a justiça sensível aos direitos das mulheres.",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 60,
      "tec": 50
    },
    "evidence": {
      "mor": "medium"
    },
    "axisEvidence": {
      "mor": {
        "sourceTitles": [
          "Leaders must tackle root causes of gender-based violence and ensure justice for all"
        ],
        "rationale": "Reforma institucional contra subordinação de gênero fornece direção emancipatória parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Oposição à violência isolada seria insuficiente; codifica a proposta explícita de reforma sistêmica, sem programa completo de costumes."
      }
    },
    "coding": {
      "mor": {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Leaders must tackle root causes of gender-based violence and ensure justice for all",
            "publishedDate": "2022-11-25",
            "accessedDate": "2026-10-07",
            "locator": "Citação nominal de Ricardo Lagos: segundo parágrafo Everyone in a position of authority",
            "statement": "Pede enfrentar causas sistêmicas da violência de gênero e tornar a justiça responsiva aos direitos de mulheres.",
            "basis": "declaration"
          }
        ],
        "rationale": "Reforma institucional contra subordinação de gênero fornece direção emancipatória parcial.",
        "uncertainty": "Oposição à violência isolada seria insuficiente; codifica a proposta explícita de reforma sistêmica, sem programa completo de costumes.",
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
    "id": "lakhdar-brahimi",
    "name": "Lakhdar Brahimi",
    "kind": "person",
    "category": "public-figure",
    "period": "2021-09-07",
    "sources": [
      {
        "title": "The international community must act responsibly on Afghanistan",
        "url": "https://theelders.org/news/international-community-must-act-responsibly-afghanistan",
        "note": "Declaração primária efetivamente aberta em 7/10/2026; somente autoria nominal ou assinatura individual codificada."
      },
      {
        "title": "Lakhdar Brahimi — identidade contemporânea",
        "url": "https://theelders.org/profile/lakhdar-brahimi",
        "note": "Perfil atual identifica Elder Emeritus desde agosto de 2021. Aberta em 7/10/2026; identidade sem inferência de eixo."
      },
      {
        "title": "Jordan News — relato nominal de presença familiar em Amman2026",
        "url": "https://www.jordannews.jo/Section-29/Analysis/Lakhdar-Brahimi-in-Amman-A-Father-a-Diplomatic-Legend-and-a-Name-That-Will-Always-Echo-Through-History-53746",
        "note": "Identidade/atividade2026 apenas. Data editorial93 e corpo104–118 completos efetivamente lidos; presença nominal107–109/113/116–117. Data last updated Aug02/2026 separada do relógio variável do site86. Relato de presença no festival na semana anterior, sem dia exato nem verificação visual/autenticidade da fotografia. Elogios e história diplomática não certificam novas posições. Não inferir presença em qualquer evento futuro."
      }
    ],
    "caveats": "Não endossa o regime nem determina todas as respostas militares possíveis. Demais eixos desconhecidos. Revisão independente de conteúdo pendente. Identidade viva/atividade2026 delimitada por fonte adicional; data de publicação ou relato nominal não renova todas as posições anteriores nem certifica presença física, imagens ou cargo contínuo.",
    "rationale": "Defende diálogo com o Taliban e ajuda humanitária, sem reconhecimento diplomático imediato.",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
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
      "dip": "medium"
    },
    "axisEvidence": {
      "dip": {
        "sourceTitles": [
          "The international community must act responsibly on Afghanistan"
        ],
        "rationale": "Engajamento negociado sustenta direção pacífica nesse conflito. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não endossa o regime nem determina todas as respostas militares possíveis."
      }
    },
    "coding": {
      "dip": {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "The international community must act responsibly on Afghanistan",
            "publishedDate": "2021-09-07",
            "accessedDate": "2026-10-07",
            "locator": "Parágrafos sobre representante especial da ONU em Kabul, discussão franca com Taliban e ajuda humanitária",
            "statement": "Defende diálogo diplomático com o Taliban e programas humanitários sem reconhecimento diplomático imediato.",
            "basis": "declaration"
          }
        ],
        "rationale": "Engajamento negociado sustenta direção pacífica nesse conflito.",
        "uncertainty": "Não endossa o regime nem determina todas as respostas militares possíveis.",
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
    "id": "ziauddin-yousafzai",
    "name": "Ziauddin Yousafzai",
    "kind": "person",
    "category": "public-figure",
    "period": "2019-06-05",
    "sources": [
      {
        "title": "Ziauddin Yousafzai — Women Deliver Conference",
        "url": "https://malala.org/news-and-voices/ziauddin-women-deliver-conference",
        "note": "Declaração primária efetivamente aberta em 7/10/2026; somente autoria nominal ou assinatura individual codificada."
      },
      {
        "title": "Ziauddin Yousafzai — identidade contemporânea",
        "url": "https://malala.org/board?sc=header",
        "note": "Página atual identifica membro do conselho U.S. e cofundador; não transfere posições de Malala. Aberta em 7/10/2026; identidade sem inferência de eixo."
      },
      {
        "title": "Geo News — presença nominal de Ziauddin na cerimônia Oxford2026",
        "url": "https://www.geo.tv/latest/650022-malalas-portrait-unveiled-at-oxford-university",
        "note": "Identidade/atividade2026 apenas. Cabeçalho44 e corpo46–49 efetivamente lidos: cerimônia concluída com Ziauddin entre familiares. Data de publicação10/02; dia da cerimônia não individualmente certificado. Reportagem de participante, não cálculo de idade ou transferência das palavras de Malala. Foto e vídeo não examinados."
      }
    ],
    "caveats": "Declaração de 2019 não certifica execução nem todos os costumes. Demais eixos desconhecidos. Revisão independente de conteúdo pendente. Identidade viva/atividade2026 delimitada por fonte adicional; data de publicação ou relato nominal não renova todas as posições anteriores nem certifica presença física, imagens ou cargo contínuo.",
    "rationale": "Contesta casamento infantil e forçado e defende igualdade salarial e participação política das mulheres.",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 60,
      "tec": 50
    },
    "evidence": {
      "mor": "medium"
    },
    "axisEvidence": {
      "mor": {
        "sourceTitles": [
          "Ziauddin Yousafzai — Women Deliver Conference"
        ],
        "rationale": "Revisão de normas de gênero sustenta direção emancipatória. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Declaração de 2019 não certifica execução nem todos os costumes."
      }
    },
    "coding": {
      "mor": {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Ziauddin Yousafzai — Women Deliver Conference",
            "publishedDate": "2019-06-05",
            "accessedDate": "2026-10-07",
            "locator": "Discurso: trechos sobre casamento forçado, normas prejudiciais, remuneração igual e participação de mulheres na paz",
            "statement": "Contesta casamento infantil e forçado e pede igualdade salarial e participação política de mulheres.",
            "basis": "declaration"
          }
        ],
        "rationale": "Revisão de normas de gênero sustenta direção emancipatória.",
        "uncertainty": "Declaração de 2019 não certifica execução nem todos os costumes.",
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
    "id": "jeremy-corbyn",
    "name": "Jeremy Corbyn",
    "kind": "person",
    "category": "public-figure",
    "period": "2022-01-10; assinatura individual; moção apresentada 6/1/2022",
    "sources": [
      {
        "title": "Energy prices — EDM 825, assinatura de Jeremy Corbyn",
        "url": "https://edm.parliament.uk/early-day-motion/59318/energy-prices",
        "note": "Declaração primária efetivamente aberta em 7/10/2026; somente autoria nominal ou assinatura individual codificada."
      },
      {
        "title": "Jeremy Corbyn — identidade contemporânea",
        "url": "https://members.parliament.uk/member/185/contact",
        "note": "Registro parlamentar contemporâneo do próprio membro; não assume filiação partidária antiga. Aberta em 7/10/2026; identidade sem inferência de eixo."
      },
      {
        "title": "Hansard — contribuição nominal de Jeremy Corbyn15/09/2026",
        "url": "https://hansard.parliament.uk/Commons/2026-09-15/debates/4eb35084-7104-4c1e-8d3f-c7a2a3a1e2df/WestminsterHall",
        "note": "Identidade/atividade2026 apenas. Cabeçalho8 e atribuição/contribuição própria338–340 efetivamente lidos completos. Apenas intervenção nominal datada, não1263linhas de todos os debates. Respostas de ministro e comentários de outros excluídos; não certifica resultados habitacionais ou todo programa político anterior."
      }
    ],
    "caveats": "Moção não é legislação executada nem nacionalização de toda a economia. Demais eixos desconhecidos. Revisão independente de conteúdo pendente. Identidade viva/atividade2026 delimitada por fonte adicional; data de publicação ou relato nominal não renova todas as posições anteriores nem certifica presença física, imagens ou cargo contínuo.",
    "rationale": "Endossa, em assinatura parlamentar individual, a proposta de propriedade pública do setor energético.",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 60,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "eco": "medium"
    },
    "axisEvidence": {
      "eco": {
        "sourceTitles": [
          "Energy prices — EDM 825, assinatura de Jeremy Corbyn"
        ],
        "rationale": "Propriedade pública explicitamente proposta sustenta direção pública parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Moção não é legislação executada nem nacionalização de toda a economia."
      }
    },
    "coding": {
      "eco": {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Energy prices — EDM 825, assinatura de Jeremy Corbyn",
            "publishedDate": "2022-01-10; assinatura individual; moção apresentada 6/1/2022",
            "accessedDate": "2026-10-07",
            "locator": "Texto final bring the energy sector into public hands; lista de assinaturas Corbyn, Jeremy Signed on 10 January 2022",
            "statement": "Adere nominalmente à proposta de propriedade pública do setor energético.",
            "basis": "declaration"
          }
        ],
        "rationale": "Propriedade pública explicitamente proposta sustenta direção pública parcial.",
        "uncertainty": "Moção não é legislação executada nem nacionalização de toda a economia.",
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
    "id": "george-soros",
    "kind": "person",
    "category": "public-figure",
    "name": "George Soros",
    "period": "Ensaio próprio de 30 de dezembro de 2016",
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
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Recorte documental próprio sobre governo eleitoral responsável; demais eixos desconhecidos.",
    "caveats": "Revisão independente pendente. Integração europeia não estabelece política comercial; redistribuição não estabelece planejamento ou propriedade pública; não transfere posições da fundação. Original bruto e registro vivo preservados separadamente. Identidade viva/atividade2026 delimitada por fonte adicional; data de publicação ou relato nominal não renova todas as posições anteriores nem certifica presença física, imagens ou cargo contínuo.",
    "sources": [
      {
        "title": "The Capitalist Threat — The Atlantic",
        "url": "https://www.theatlantic.com/magazine/archive/1997/02/the-capitalist-threat/376773/",
        "note": "Ensaio do próprio Soros sobre mercados, democracia e instituições abertas."
      },
      {
        "title": "Open Society Foundations: What We Do",
        "url": "https://www.opensocietyfoundations.org/what-we-do",
        "note": "Descrição institucional de direitos, pluralismo, justiça e sociedade aberta."
      },
      {
        "title": "Open Society: a decade later — The New York Review of Books",
        "url": "https://www.nybooks.com/articles/2009/11/05/open-society-a-decade-later/",
        "note": "Reflexão de Soros sobre instituições, democracia e cooperação internacional."
      },
      {
        "title": "George Soros — Open Society Needs Defending",
        "url": "https://www.georgesoros.com/2016/12/30/open-society-needs-defending/",
        "note": "Ensaio primário no gabinete, efetivamente aberto em 7/10/2026. Não atribui posições da fundação automaticamente."
      },
      {
        "title": "George Soros — identidade contemporânea, Open Society Foundations",
        "url": "https://www.opensocietyfoundations.org/george-soros",
        "note": "Perfil institucional aberto em 7/10/2026 descreve atividade pessoal atual; usado somente para identidade."
      },
      {
        "title": "RomaniaTV — aniversário de George Soros relatado com mensagem nominal do filho",
        "url": "https://www.romaniatv.net/george-soros-a-implinit-96-de-ani-fiul-sau-a-publicat-o-fotografie-alaturi-de-miliardar-te-iubesc-tata-foto_9748831.html",
        "note": "Identidade/atividade2026 apenas. Cabeçalho45–50 e corpo53–58 efetivamente lidos: aniversário atual e mensagem de Alex ao pai. Confirmação contemporânea reportada e limitada, não mera conta automática de idade. Fonte jornalística reproduz alegação familiar; post canônico e fotografia não autenticados/reabertos. Não demonstra declaração ou presença pública de George naquele dia, nem atividade da fundação atribuível pessoalmente a ele. Somente identidade viva reportada, sem política nova."
      }
    ],
    "evidence": {
      "rep": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "George Soros — Open Society Needs Defending"
        ],
        "rationale": "Escolha eleitoral e responsabilidade perante o eleitorado sustentam direção democrática delimitada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: O autor reconhece graus e variações; não fornece desenho institucional completo ou certificação de prática."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "George Soros — Open Society Needs Defending",
            "publishedDate": "2016-12-30",
            "accessedDate": "2026-10-07",
            "locator": "Parágrafos I distinguished between two kinds of political regimes e The classification is too simplistic",
            "statement": "Declara promover governos cujos líderes são eleitos para atender ao eleitorado e opor-se a governos que manipulam súditos para interesses dos governantes.",
            "basis": "declaration"
          }
        ],
        "rationale": "Escolha eleitoral e responsabilidade perante o eleitorado sustentam direção democrática delimitada.",
        "uncertainty": "O autor reconhece graus e variações; não fornece desenho institucional completo ou certificação de prática.",
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
export function reconcilePublicIdentityRefresh01(entry:ReferenceEntry):ReferenceEntry {
 const i=publicIdentityRefresh01Before.findIndex(old=>old.id===entry.id);
 if(i<0)return entry;
 if(JSON.stringify(entry)===JSON.stringify(publicIdentityRefresh01Proposed[i]))return entry;
 if(JSON.stringify(entry)!==JSON.stringify(publicIdentityRefresh01Before[i]))throw new Error('Public identity refresh01 whole before changed for '+entry.id+'; reconcile explicitly');
 return publicIdentityRefresh01Proposed[i];
}
