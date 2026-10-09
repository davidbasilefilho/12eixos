import type {ReferenceEntry,ReferenceSource} from './references';
import {AXES} from '../lib/scoring';
import {codeReferenceAxis,type ReferenceAxisCoding} from '../lib/reference-coding';

export const legacyHistoricalQuality08OriginalRecords:Record<string,ReferenceEntry>={
  "friedrich-engels": {
    "id": "friedrich-engels",
    "kind": "person",
    "category": "historical-figure",
    "name": "Friedrich Engels",
    "period": "Obra política e social, 1845–1895",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 96,
      "con": 91,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "A crítica da propriedade capitalista e a proposta de transformação coletiva da produção são as posições mais explícitas em seus textos.",
    "caveats": "Os textos foram escritos antes dos atuais regimes democráticos e das categorias deste questionário. Segurança, diplomacia, imigração e federalismo ficam no centro por falta de equivalência direta.",
    "sources": [
      {
        "title": "Princípios do comunismo — Marxists Internet Archive",
        "url": "https://www.marxists.org/archive/marx/works/1847/11/prin-com.htm",
        "note": "Texto primário de Engels sobre propriedade, produção social e transformação política."
      },
      {
        "title": "A situação da classe trabalhadora na Inglaterra — Marxists Internet Archive",
        "url": "https://www.marxists.org/archive/marx/works/1845/condition-working-class/",
        "note": "Investigação publicada por Engels sobre relações de trabalho e organização industrial."
      }
    ],
    "evidence": {
      "eco": "high",
      "con": "high",
      "rel": "medium",
      "mor": "medium",
      "tec": "medium"
    },
    "axisEvidence": {
      "eco": {
        "sourceTitles": [
          "Princípios do comunismo — Marxists Internet Archive"
        ],
        "rationale": "Engels defende propriedade coletiva dos instrumentos de produção e substituição da propriedade privada capitalista."
      },
      "con": {
        "sourceTitles": [
          "Princípios do comunismo — Marxists Internet Archive"
        ],
        "rationale": "O texto defende organizar a produção segundo um plano comum e necessidades sociais, sustentando o polo de planejamento."
      },
      "tec": {
        "sourceTitles": [
          "Princípios do comunismo — Marxists Internet Archive"
        ],
        "rationale": "Engels analisa a máquina industrial como força transformadora e propõe reorganizar a produção para distribuir seus benefícios."
      }
    }
  },
  "rosa-luxemburg": {
    "id": "rosa-luxemburg",
    "kind": "person",
    "category": "historical-figure",
    "name": "Rosa Luxemburg",
    "period": "Reforma ou revolução e crítica da Revolução Russa, 1899–1918",
    "vec": {
      "est": 70,
      "rep": 92,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 88,
      "con": 78,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Luxemburg defendeu socialismo e ação de massas, além de criticar a supressão de liberdades políticas na Rússia soviética.",
    "caveats": "O corpus reflete disputas revolucionárias do início do século XX, não um programa partidário de hoje.",
    "sources": [
      {
        "title": "The Russian Revolution, 1918",
        "url": "https://www.marxists.org/archive/luxemburg/1918/russian-revolution/",
        "note": "Manuscrito primário de Luxemburg que defende liberdades e participação socialista."
      }
    ],
    "evidence": {
      "est": "medium",
      "rep": "high",
      "eco": "high",
      "con": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "The Russian Revolution, 1918"
        ],
        "rationale": "Manuscrito primário de Luxemburg que defende liberdades e participação socialista. Luxemburg defendeu socialismo e ação de massas, além de criticar a supressão de liberdades políticas na Rússia soviética. A direção editorial deste eixo é Federal, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "rep": {
        "sourceTitles": [
          "The Russian Revolution, 1918"
        ],
        "rationale": "Manuscrito primário de Luxemburg que defende liberdades e participação socialista. Luxemburg defendeu socialismo e ação de massas, além de criticar a supressão de liberdades políticas na Rússia soviética. A direção editorial deste eixo é Democracia, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "eco": {
        "sourceTitles": [
          "The Russian Revolution, 1918"
        ],
        "rationale": "Manuscrito primário de Luxemburg que defende liberdades e participação socialista. Luxemburg defendeu socialismo e ação de massas, além de criticar a supressão de liberdades políticas na Rússia soviética. A direção editorial deste eixo é Público, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "con": {
        "sourceTitles": [
          "The Russian Revolution, 1918"
        ],
        "rationale": "Manuscrito primário de Luxemburg que defende liberdades e participação socialista. Luxemburg defendeu socialismo e ação de massas, além de criticar a supressão de liberdades políticas na Rússia soviética. A direção editorial deste eixo é Planejamento, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      }
    }
  },
  "muhammad-ali-jinnah": {
    "id": "muhammad-ali-jinnah",
    "kind": "person",
    "category": "historical-figure",
    "name": "Muhammad Ali Jinnah",
    "period": "Discursos constituintes e fundação do Paquistão, 1940–1948",
    "vec": {
      "est": 59,
      "rep": 83,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 73,
      "mor": 61,
      "tec": 50
    },
    "rationale": "O discurso à Assembleia Constituinte defende cidadania igual e liberdade religiosa no novo Estado.",
    "caveats": "O texto de 1947 coexiste com disputas sobre identidade nacional e religião; não presumimos que tenha resolvido a trajetória constitucional posterior.",
    "sources": [
      {
        "title": "Address to the Constituent Assembly, 1947",
        "url": "https://www.pakistani.org/pakistan/legislation/constituent_address_11aug1947.html",
        "note": "Texto primário do pronunciamento de Jinnah sobre cidadania e religião perante a Assembleia."
      }
    ],
    "evidence": {
      "est": "medium",
      "rep": "medium",
      "rel": "high",
      "mor": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Address to the Constituent Assembly, 1947"
        ],
        "rationale": "Texto primário do pronunciamento de Jinnah sobre cidadania e religião perante a Assembleia. O discurso à Assembleia Constituinte defende cidadania igual e liberdade religiosa no novo Estado. A direção editorial deste eixo é Federal, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "rep": {
        "sourceTitles": [
          "Address to the Constituent Assembly, 1947"
        ],
        "rationale": "Texto primário do pronunciamento de Jinnah sobre cidadania e religião perante a Assembleia. O discurso à Assembleia Constituinte defende cidadania igual e liberdade religiosa no novo Estado. A direção editorial deste eixo é Democracia, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "rel": {
        "sourceTitles": [
          "Address to the Constituent Assembly, 1947"
        ],
        "rationale": "Texto primário do pronunciamento de Jinnah sobre cidadania e religião perante a Assembleia. O discurso à Assembleia Constituinte defende cidadania igual e liberdade religiosa no novo Estado. A direção editorial deste eixo é Irreligioso, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "mor": {
        "sourceTitles": [
          "Address to the Constituent Assembly, 1947"
        ],
        "rationale": "Texto primário do pronunciamento de Jinnah sobre cidadania e religião perante a Assembleia. O discurso à Assembleia Constituinte defende cidadania igual e liberdade religiosa no novo Estado. A direção editorial deste eixo é Progressista, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      }
    }
  },
  "amilcar-cabral": {
    "id": "amilcar-cabral",
    "kind": "person",
    "category": "historical-figure",
    "name": "Amílcar Cabral",
    "period": "Escritos de libertação e luta anticolonial, 1960–1973",
    "vec": {
      "est": 77,
      "rep": 55,
      "pod": 50,
      "imi": 50,
      "dip": 51,
      "int": 73,
      "eco": 75,
      "con": 50,
      "com": 62,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Os discursos de Cabral explicam libertação nacional por mobilização popular, cultura e transformação social.",
    "caveats": "A luta armada contra o colonialismo não determina posição sobre militarismo fora daquele contexto; dados tecnológicos são escassos.",
    "sources": [
      {
        "title": "The Weapon of Theory, 1966",
        "url": "https://www.marxists.org/subject/africa/cabral/1966/weapon-theory.htm",
        "note": "Intervenção de Cabral na Conferência Tricontinental sobre libertação e luta política."
      }
    ],
    "evidence": {
      "est": "medium",
      "rep": "medium",
      "dip": "medium",
      "int": "medium",
      "eco": "medium",
      "com": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "The Weapon of Theory, 1966"
        ],
        "rationale": "Intervenção de Cabral na Conferência Tricontinental sobre libertação e luta política. Os discursos de Cabral explicam libertação nacional por mobilização popular, cultura e transformação social. A direção editorial deste eixo é Federal, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "rep": {
        "sourceTitles": [
          "The Weapon of Theory, 1966"
        ],
        "rationale": "Intervenção de Cabral na Conferência Tricontinental sobre libertação e luta política. Os discursos de Cabral explicam libertação nacional por mobilização popular, cultura e transformação social. A direção editorial deste eixo é Democracia, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "dip": {
        "sourceTitles": [
          "The Weapon of Theory, 1966"
        ],
        "rationale": "Intervenção de Cabral na Conferência Tricontinental sobre libertação e luta política. Os discursos de Cabral explicam libertação nacional por mobilização popular, cultura e transformação social. A direção editorial deste eixo é Militarista, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "int": {
        "sourceTitles": [
          "The Weapon of Theory, 1966"
        ],
        "rationale": "Intervenção de Cabral na Conferência Tricontinental sobre libertação e luta política. Os discursos de Cabral explicam libertação nacional por mobilização popular, cultura e transformação social. A direção editorial deste eixo é Não intervencionista, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "eco": {
        "sourceTitles": [
          "The Weapon of Theory, 1966"
        ],
        "rationale": "Intervenção de Cabral na Conferência Tricontinental sobre libertação e luta política. Os discursos de Cabral explicam libertação nacional por mobilização popular, cultura e transformação social. A direção editorial deste eixo é Público, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "com": {
        "sourceTitles": [
          "The Weapon of Theory, 1966"
        ],
        "rationale": "Intervenção de Cabral na Conferência Tricontinental sobre libertação e luta política. Os discursos de Cabral explicam libertação nacional por mobilização popular, cultura e transformação social. A direção editorial deste eixo é Protecionismo, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      }
    }
  },
  "frantz-fanon": {
    "id": "frantz-fanon",
    "kind": "person",
    "category": "historical-figure",
    "name": "Frantz Fanon",
    "period": "Peau noire, Les Damnés de la Terre e anticolonialismo, 1952–1961",
    "vec": {
      "est": 74,
      "rep": 54,
      "pod": 50,
      "imi": 27,
      "dip": 50,
      "int": 78,
      "eco": 67,
      "con": 50,
      "com": 58,
      "rel": 50,
      "mor": 83,
      "tec": 50
    },
    "rationale": "Fanon analisa como colonialismo e racismo estruturam instituições e identidades, e argumenta por autodeterminação e transformação social.",
    "caveats": "Sua defesa da violência anticolonial está ligada a situações coloniais; não é indicador de posição geral sobre segurança ou política externa.",
    "sources": [
      {
        "title": "Les Damnés de la Terre, 1961",
        "url": "https://www.marxists.org/subject/africa/fanon/conclusion.htm",
        "note": "Conclusão primária de Fanon sobre descolonização e sociedade pós-colonial."
      }
    ],
    "evidence": {
      "est": "medium",
      "rep": "medium",
      "imi": "medium",
      "int": "medium",
      "eco": "medium",
      "com": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Les Damnés de la Terre, 1961"
        ],
        "rationale": "Conclusão primária de Fanon sobre descolonização e sociedade pós-colonial. Fanon analisa como colonialismo e racismo estruturam instituições e identidades, e argumenta por autodeterminação e transformação social. A direção editorial deste eixo é Federal, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "rep": {
        "sourceTitles": [
          "Les Damnés de la Terre, 1961"
        ],
        "rationale": "Conclusão primária de Fanon sobre descolonização e sociedade pós-colonial. Fanon analisa como colonialismo e racismo estruturam instituições e identidades, e argumenta por autodeterminação e transformação social. A direção editorial deste eixo é Democracia, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "imi": {
        "sourceTitles": [
          "Les Damnés de la Terre, 1961"
        ],
        "rationale": "Conclusão primária de Fanon sobre descolonização e sociedade pós-colonial. Fanon analisa como colonialismo e racismo estruturam instituições e identidades, e argumenta por autodeterminação e transformação social. A direção editorial deste eixo é Multicultura, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "int": {
        "sourceTitles": [
          "Les Damnés de la Terre, 1961"
        ],
        "rationale": "Conclusão primária de Fanon sobre descolonização e sociedade pós-colonial. Fanon analisa como colonialismo e racismo estruturam instituições e identidades, e argumenta por autodeterminação e transformação social. A direção editorial deste eixo é Não intervencionista, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "eco": {
        "sourceTitles": [
          "Les Damnés de la Terre, 1961"
        ],
        "rationale": "Conclusão primária de Fanon sobre descolonização e sociedade pós-colonial. Fanon analisa como colonialismo e racismo estruturam instituições e identidades, e argumenta por autodeterminação e transformação social. A direção editorial deste eixo é Público, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "com": {
        "sourceTitles": [
          "Les Damnés de la Terre, 1961"
        ],
        "rationale": "Conclusão primária de Fanon sobre descolonização e sociedade pós-colonial. Fanon analisa como colonialismo e racismo estruturam instituições e identidades, e argumenta por autodeterminação e transformação social. A direção editorial deste eixo é Protecionismo, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "mor": {
        "sourceTitles": [
          "Les Damnés de la Terre, 1961"
        ],
        "rationale": "Conclusão primária de Fanon sobre descolonização e sociedade pós-colonial. Fanon analisa como colonialismo e racismo estruturam instituições e identidades, e argumenta por autodeterminação e transformação social. A direção editorial deste eixo é Progressista, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      }
    }
  }
};

export const legacyHistoricalQuality08Proposals={
  "friedrich-engels": {
    "period": "Principles of Communism, outubro–novembro1847; tradução Sweezy",
    "rationale": "Propõe propriedade produtiva comum e planejamento geral, com transição gradual e domínio político da classe trabalhadora.",
    "caveats": "Rascunho normativo1847, publicado1914, tradução PaulSweezy; não original alemão ou toda carreira. Gradualidade164–166, preferência por via pacífica159 e resistência160 coexistem com confisco176 e trabalho obrigatório179. Democracia169–171 serve ao domínio proletário; dissolução nacional231 vem de resposta de rascunho anterior segundo nota300. Nenhuma previsão de abundância certificada.",
    "sources": [
      {
        "title": "Engels — Principles of Communism, programa1847",
        "url": "https://www.marxists.org/archive/marx/works/1847/11/prin-com.htm",
        "note": "Metadata0–16 e próprio19–278 efetivamente lidos; notas editoriais283–304 separadas. Q13–14 e18–20 fundamentam normas; Q22/23 têm respostas transportadas de rascunho anterior, não usadas como coding."
      }
    ],
    "claims": [
      {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Engels — Principles of Communism, programa1847",
            "publishedDate": "1847; publicação1914",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Q14,138–143; Q18,174–193; Q20,206",
            "statement": "Propõe propriedade comum de todos os instrumentos produtivos e retirada da produção das mãos de capitalistas privados."
          }
        ],
        "rationale": "Regra geral de propriedade produtiva, além de uma empresa ou setor.",
        "uncertainty": "Transformação gradual164–166 e compensação em títulos174; não descreve prática histórica.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "con",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Engels — Principles of Communism, programa1847",
            "publishedDate": "1847; publicação1914",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Q13–14,127–142; Q20,206–223",
            "statement": "Propõe gestão geral da produção e distribuição conforme recursos e necessidades sociais, por um plano comum."
          }
        ],
        "rationale": "Coordenação de toda produção e intercâmbio, não apenas propriedade coletiva.",
        "uncertainty": "Transição estatal191–193, obrigação laboral179 e desenvolvimento desigual198–200; eficácia prevista não comprovada.",
        "reviewedOn": "2026-10-08"
      }
    ]
  },
  "rosa-luxemburg": {
    "period": "The Russian Revolution,1918; capítuloVI, edição inglesa1940",
    "rationale": "Defende eleições gerais, participação popular e liberdade para dissidentes, criticando terror e governo de uma pequena direção partidária.",
    "caveats": "Texto1918 publicado postumamente1922, tradução BertramWolfe/edição1940. Mantém ditadura proletária7 e medidas de força contra propriedade17; liberdade e controle público não significam abandono da revolução. Lenin6 e Trotsky8 são citações identificadas. Não comprova relatos históricos24 nem abrange todos capítulos.",
    "sources": [
      {
        "title": "Luxemburg — The Russian Revolution, capítuloVI1918",
        "url": "https://www.marxists.org/archive/luxemburg/1918/russian-revolution/ch06.htm",
        "note": "Próprio6–25 inteiro lido, distinguindo citações6/8; liberdade11, democracia18–24. Índice bibliográfico separado identifica versão."
      },
      {
        "title": "Luxemburg — índice e versão de The Russian Revolution",
        "url": "https://www.marxists.org/archive/luxemburg/1918/russian-revolution/index.htm",
        "note": "Índice0–34 lido; escrito1918/publicado1922/edição1940/tradutorWolfe em7–13. Não leitura dos demais capítulos."
      }
    ],
    "claims": [
      {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Luxemburg — The Russian Revolution, capítuloVI1918",
            "publishedDate": "1918; edição inglesa1940",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "18–24: participação, controle público e eleições gerais",
            "statement": "Defende ampla democracia, eleições gerais e controle público, rejeitando governo efetivo de uma pequena elite partidária."
          }
        ],
        "rationale": "Norma geral da responsabilidade e participação na autoridade política.",
        "uncertainty": "Defende ditadura proletária7 e transformação socialista; não liberalismo de toda carreira.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Luxemburg — The Russian Revolution, capítuloVI1918",
            "publishedDate": "1918; edição inglesa1940",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "11/17–24: dissenso, imprensa, reunião e crítica ao terror",
            "statement": "Exige liberdade também para dissidentes, imprensa e reunião irrestritas, rejeitando terror como método de governo."
          }
        ],
        "rationale": "Liberdades públicas gerais e oposição ao terror, além de uma proteção setorial.",
        "uncertainty": "Admite força contra propriedade17; não oposição categórica a toda coerção revolucionária.",
        "reviewedOn": "2026-10-08"
      }
    ]
  },
  "muhammad-ali-jinnah": {
    "period": "Discurso à Assembleia Constituinte,11/8/1947; reprodução Dawn1999",
    "rationale": "Defende cidadania igual e liberdade religiosa, tratando a fé como assunto pessoal distinto dos negócios do Estado.",
    "caveats": "Norma declarada1947, reprodução privada de Dawn14/8/1999 transcrita de impresso38–39; não fac-símile. Separação da fé e Estado27–30 convive com proteção estatal das crenças15 e punição severa de corrupção/mercado negro16–18. Defende partição20–23; elogio de obtenção pacífica13 não prova história ou pacifismo geral.",
    "sources": [
      {
        "title": "Jinnah — endereço constituinte,11agosto1947",
        "url": "https://www.pakistani.org/pakistan/legislation/constituent_address_11aug1947.html",
        "note": "Metadata4–5, próprio9–31 completos, mensagem americana32–35 distinta, proveniência38–39 lida. A norma27–30 distingue fé pessoal de cidadania e negócio estatal."
      }
    ],
    "claims": [
      {
        "axis": "rel",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Jinnah — endereço constituinte,11agosto1947",
            "publishedDate": "11/8/1947; reprodução1999",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "15/24/27–30: crença protegida e cidadania distinta da fé",
            "statement": "Separa pertença religiosa dos negócios do Estado e propõe igualdade política de cidadãos cuja fé permanece pessoal."
          }
        ],
        "rationale": "Regra geral sobre relação entre religião e autoridade estatal, além de permitir um culto isolado.",
        "uncertainty": "Proteção estatal das crenças15; não ateísmo pessoal ou comprovação da implementação posterior.",
        "reviewedOn": "2026-10-08"
      }
    ]
  },
  "amilcar-cabral": {
    "period": "The Weapon of Theory, conferência Tricontinental, janeiro1966",
    "rationale": "Defende libertação nacional fundada na realidade local e no controle do próprio desenvolvimento, com organização revolucionária e luta armada.",
    "caveats": "Conteúdo político qualitativo, doze eixos desconhecidos; descrição histórica ou rótulo socialista não basta para definir instituições produtivas/planejamento. Rejeita exportação automática da revolução22, mas oferece solidariedade e trabalhadores a Cuba12–14. Vanguardismo101–110 e defesa da luta armada116–120 impedem apresentar pacifismo ou pluralismo universal. Elogios à Cuba8–14 e previsões não verificados como resultados.",
    "sources": [
      {
        "title": "Cabral — The Weapon of Theory, Havana1966",
        "url": "https://www.marxists.org/subject/africa/cabral/1966/weapon-theory.htm",
        "note": "Metadata0–5 e próprio8–91/94–146 efetivamente visíveis e lidos. Saída de reabertura truncou92–93; não se alega leitura integral sem lacuna. Sem tradutor identificado na página; não original português ou coletânea inteira."
      }
    ],
    "claims": []
  },
  "frantz-fanon": {
    "period": "Les damnés de la terre,1961; conclusão em edição inglesa1965",
    "rationale": "Propõe emancipação humana e instituições próprias para o Terceiro Mundo, rejeitando imitação colonial e desenvolvimento que destrua indivíduos.",
    "caveats": "Conteúdo político qualitativo, doze eixos desconhecidos; crítica à Europa não resolve por si imigração, comércio, religião ou militarismo geral. Valoriza invenções29/53, mas rejeita trabalho e intensificação mutiladores42–44; não inferir tecnologia inteira desses termos. Acusações e estatísticas47 não verificadas. Página informa edição britânica1965 sem nome de tradutor; não original francês ou livro inteiro.",
    "sources": [
      {
        "title": "Fanon — The Wretched of the Earth, conclusão1961",
        "url": "https://www.marxists.org/subject/africa/fanon/conclusion.htm",
        "note": "Metadata0–8 e conclusão própria12–58 completa efetivamente lida. Fonte francesa1961/edição britânica1965 em6–7; não outros capítulos ou tradução identificada individualmente."
      }
    ],
    "claims": []
  }
};

export function reconcileLegacyHistoricalQuality08(entry:ReferenceEntry):ReferenceEntry {
 const original=legacyHistoricalQuality08OriginalRecords[entry.id];
 if(!original||JSON.stringify(entry)!==JSON.stringify(original))return entry;
 const proposal=legacyHistoricalQuality08Proposals[entry.id as keyof typeof legacyHistoricalQuality08Proposals];
 const sources:ReferenceSource[]=structuredClone(entry.sources);
 for(const source of proposal.sources)if(!sources.some(s=>JSON.stringify(s)===JSON.stringify(source)))sources.push(structuredClone(source));
 const next:ReferenceEntry={...structuredClone(entry),period:proposal.period,rationale:proposal.rationale,caveats:proposal.caveats,sources,vec:Object.fromEntries(AXES.map(({key})=>[key,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{}};
 for(const raw of proposal.claims){const input=raw as ReferenceAxisCoding;const coded=codeReferenceAxis(input,sources);next.vec[input.axis]=coded.value;next.evidence[input.axis]=coded.evidence;next.axisEvidence![input.axis]=coded.axisEvidence;next.coding![input.axis]=coded.coding;}
 return next;
}
