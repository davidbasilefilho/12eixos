import type {ReferenceEntry} from './references';

// Complete literal prior and accepted post records; no score or coding changes.
export const historicalCountryProvenance05Before = {
  "weimar-republic": {
    "id": "weimar-republic",
    "kind": "country",
    "category": "historical-country",
    "name": "República de Weimar",
    "period": "Constituição de 1919, 1919–1933; recorte codificado: Texto fundador de 1919; duração da República 1919–1933 não é prática inalterada.",
    "vec": {
      "est": 60,
      "rep": 60,
      "pod": 40,
      "imi": 40,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 60,
      "mor": 60,
      "tec": 50
    },
    "rationale": "Inferências documentais delimitadas recodificadas pelo protocolo ordinal; o vetor anterior e suas fontes foram preservados no módulo de reconciliação.",
    "caveats": "Seis eixos descrevem norma fundadora1919, não prática1930–1933.48permite suspensão de garantias com anulação parlamentar;118permite cinema/proteção juvenil.113protege minorias internas, não entrada migratória.119protege casamento/propagação nacional;121equipara desenvolvimento, não todo direito sucessório.137permite corporações religiosas públicas/tributos;138/173tratam prestações estatais, contrapontos fiscais à ausência de igreja estatal. Não divórcio/LGBT/execução inferidos.",
    "sources": [
      {
        "title": "The Weimar Constitution (August 11, 1919) — German History in Documents and Images",
        "url": "https://germanhistorydocs.org/en/weimar-germany-1918-1933/the-weimar-constitution-august-11-1919",
        "note": "Fonte primária traduzida e contexto acadêmico: república, federalismo, sufrágio universal, parlamento, direitos e cores nacionais."
      },
      {
        "title": "Weimarer Reichsverfassung1919 — transcrição alemã com alterações distinguidas",
        "url": "https://www.verfassungen.de/de19-33/verf19.htm",
        "note": "Republicação privada do texto primário alemão; corpo realmente lido:5–18,22,41–54,60–74,109–128,135–141. Emendas e comentários editoriais visíveis são separados das cláusulas fundadoras; não edição oficial ou auditoria de todas alterações/prática."
      },
      {
        "title": "The Weimar Constitution (August11,1919) — GHDI, cotejo adicional",
        "url": "https://germanhistorydocs.org/en/weimar-germany-1918-1933/the-weimar-constitution-august-11-1919",
        "note": "Seleção primária traduzida por Snyder1958, realmente reaberta/lida;109/114–124/128/135/137 e instituições. Seleção omite113 e abrevia cláusulas; complemento alemão usado para linguagem e contrapontos, não tradução integral."
      }
    ],
    "evidence": {
      "est": "high",
      "rep": "high",
      "rel": "medium",
      "pod": "medium",
      "imi": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "The Weimar Constitution (August 11, 1919) — German History in Documents and Images"
        ],
        "rationale": "Competências estaduais e representação territorial sustentam federalismo moderado. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Primazia nacional e poderes centrais impedem equiparar a confederação soberana; prática não auditada."
      },
      "rep": {
        "sourceTitles": [
          "The Weimar Constitution (August 11, 1919) — German History in Documents and Images"
        ],
        "rationale": "Instituições eletivas sustentam democracia moderada com contrapoder presidencial explícito. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não certifica eleições e prática durante crises finais; artigo48 impede inferência irrestrita."
      },
      "rel": {
        "sourceTitles": [
          "The Weimar Constitution (August 11, 1919) — German History in Documents and Images"
        ],
        "rationale": "Separação institucional expressa sustenta laicidade moderada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Seleção não cobre todos os privilégios fiscais das igrejas ou prática; não presume irreligiosidade popular."
      },
      "pod": {
        "sourceTitles": [
          "Weimarer Reichsverfassung1919 — transcrição alemã com alterações distinguidas"
        ],
        "rationale": "Proteções constitucionais gerais de processo, privacidade, expressão e associação sustentam direção normativa moderada à liberdade. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Direitos de domicílio/expressão/reunião se referem a alemães. Art48 permite suspender114/115/117/118/123/124/153 com ciência imediata e anulação pelo Reichstag. Cinema e proteção juvenil118 admitem censura/exceções; não liberdades efetivas1930–1933."
      },
      "imi": {
        "sourceTitles": [
          "Weimarer Reichsverfassung1919 — transcrição alemã com alterações distinguidas"
        ],
        "rationale": "Proteção geral das minorias linguísticas na educação, administração e justiça sustenta faceta multicultural moderada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Art113 trata grupos linguísticos internos do Reich; não ingresso aberto, cidadania automática ou igualdade cultural efetiva.111–112 tratam deslocamento/emigração de alemães, não entrada universal de estrangeiros."
      },
      "mor": {
        "sourceTitles": [
          "Weimarer Reichsverfassung1919 — transcrição alemã com alterações distinguidas"
        ],
        "rationale": "Igualdade entre sexos em direitos civis, casamento e cargos, combinada com condições iguais para filhos não matrimoniais, sustenta direção progressista moderada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: 119 protege casamento como base familiar e propagação nacional;118 admite restrições para moral/juventude.121 exige igualdade de condições de desenvolvimento, não declara todos direitos sucessórios iguais. Não se infere divórcio, direitos LGBT ou prática social inclusiva."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "moderate-first",
        "confidence": "high",
        "rationale": "Competências estaduais e representação territorial sustentam federalismo moderado.",
        "uncertainty": "Primazia nacional e poderes centrais impedem equiparar a confederação soberana; prática não auditada.",
        "reviewedOn": "2026-10-07",
        "claims": [
          {
            "sourceTitle": "The Weimar Constitution (August 11, 1919) — German History in Documents and Images",
            "locator": "Arts. 5, 12, 60–63 e 74",
            "statement": "Estados exercem poderes próprios e participam da legislação nacional; competências do Reich e intervenção central limitam autonomia.",
            "basis": "norm",
            "publishedDate": "1919-08-11",
            "accessedDate": "2026-10-07"
          }
        ],
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
        "confidence": "high",
        "rationale": "Instituições eletivas sustentam democracia moderada com contrapoder presidencial explícito.",
        "uncertainty": "Não certifica eleições e prática durante crises finais; artigo48 impede inferência irrestrita.",
        "reviewedOn": "2026-10-07",
        "claims": [
          {
            "sourceTitle": "The Weimar Constitution (August 11, 1919) — German History in Documents and Images",
            "locator": "Arts. 17, 22, 41, 48, 50 e 54",
            "statement": "Voto igual de homens e mulheres, representação proporcional e confiança parlamentar coexistem com Presidência forte e emergência controlável pelo Reichstag.",
            "basis": "norm",
            "publishedDate": "1919-08-11",
            "accessedDate": "2026-10-07"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "rel": {
        "axis": "rel",
        "position": "moderate-first",
        "confidence": "medium",
        "rationale": "Separação institucional expressa sustenta laicidade moderada.",
        "uncertainty": "Seleção não cobre todos os privilégios fiscais das igrejas ou prática; não presume irreligiosidade popular.",
        "reviewedOn": "2026-10-07",
        "claims": [
          {
            "sourceTitle": "The Weimar Constitution (August 11, 1919) — German History in Documents and Images",
            "locator": "Arts. 135 e 137",
            "statement": "Liberdade de consciência e culto é declarada e não há igreja estatal.",
            "basis": "norm",
            "publishedDate": "1919-08-11",
            "accessedDate": "2026-10-07"
          }
        ],
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
        "reviewedOn": "2026-10-08",
        "rationale": "Proteções constitucionais gerais de processo, privacidade, expressão e associação sustentam direção normativa moderada à liberdade.",
        "uncertainty": "Direitos de domicílio/expressão/reunião se referem a alemães. Art48 permite suspender114/115/117/118/123/124/153 com ciência imediata e anulação pelo Reichstag. Cinema e proteção juvenil118 admitem censura/exceções; não liberdades efetivas1930–1933.",
        "claims": [
          {
            "sourceTitle": "Weimarer Reichsverfassung1919 — transcrição alemã com alterações distinguidas",
            "locator": "Arts.114–118,123–124; contraponto48",
            "statement": "Protege liberdade pessoal com informação no dia seguinte e objeção, domicílio, comunicações, expressão e associação; emergência suspende garantias sob controle parlamentar.",
            "basis": "norm",
            "publishedDate": "1919-08-11",
            "accessedDate": "2026-10-08"
          }
        ],
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
        "reviewedOn": "2026-10-08",
        "relatedQuestionIds": [
          "imigracao_02",
          "imigracao_08"
        ],
        "rationale": "Proteção geral das minorias linguísticas na educação, administração e justiça sustenta faceta multicultural moderada.",
        "uncertainty": "Art113 trata grupos linguísticos internos do Reich; não ingresso aberto, cidadania automática ou igualdade cultural efetiva.111–112 tratam deslocamento/emigração de alemães, não entrada universal de estrangeiros.",
        "claims": [
          {
            "sourceTitle": "Weimarer Reichsverfassung1919 — transcrição alemã com alterações distinguidas",
            "locator": "Art.113; contrapontos110–112",
            "statement": "Legislação e administração não devem impedir desenvolvimento dos grupos de outra língua, especialmente língua materna no ensino, administração interna e justiça.",
            "basis": "norm",
            "publishedDate": "1919-08-11",
            "accessedDate": "2026-10-08"
          }
        ],
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
        "reviewedOn": "2026-10-08",
        "rationale": "Igualdade entre sexos em direitos civis, casamento e cargos, combinada com condições iguais para filhos não matrimoniais, sustenta direção progressista moderada.",
        "uncertainty": "119 protege casamento como base familiar e propagação nacional;118 admite restrições para moral/juventude.121 exige igualdade de condições de desenvolvimento, não declara todos direitos sucessórios iguais. Não se infere divórcio, direitos LGBT ou prática social inclusiva.",
        "claims": [
          {
            "sourceTitle": "Weimarer Reichsverfassung1919 — transcrição alemã com alterações distinguidas",
            "locator": "Arts.109,119,121,128; contraponto118",
            "statement": "Sexos têm iguais direitos civis; casamento baseia-se em igualdade; lei deve equiparar desenvolvimento de filhos não matrimoniais; exceções contra funcionárias são abolidas.",
            "basis": "norm",
            "publishedDate": "1919-08-11",
            "accessedDate": "2026-10-08"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      }
    },
    "documentaryReview": {
      "status": "author-reviewed-bounded-claims",
      "reviewedOn": "2026-10-07",
      "independentReview": "pending",
      "scope": "Texto fundador de 1919; duração da República 1919–1933 não é prática inalterada."
    },
    "unknownAxisReasons": {
      "dip": "Passagens realmente revisadas não estabelecem direção suficiente para este construto;50 desconhecido, sem graduação.",
      "int": "Passagens realmente revisadas não estabelecem direção suficiente para este construto;50 desconhecido, sem graduação.",
      "eco": "Passagens realmente revisadas não estabelecem direção suficiente para este construto;50 desconhecido, sem graduação.",
      "con": "Passagens realmente revisadas não estabelecem direção suficiente para este construto;50 desconhecido, sem graduação.",
      "com": "Passagens realmente revisadas não estabelecem direção suficiente para este construto;50 desconhecido, sem graduação.",
      "tec": "Passagens realmente revisadas não estabelecem direção suficiente para este construto;50 desconhecido, sem graduação."
    },
    "documentaryReview10": {
      "status": "author-reviewed-bounded-claims",
      "independentReview": "accepted-bounded-primary-claims",
      "reviewedOn": "2026-10-08",
      "scope": "Passagens primárias fundadoras1919 cotejadas independentemente para três novos e três códigos herdados; não prática1930–1933. Guards verificados pelo autor, não rerun independente."
    }
  },
  "yugoslavia-1974": {
    "id": "yugoslavia-1974",
    "kind": "country",
    "category": "historical-country",
    "name": "República Socialista Federativa da Iugoslávia",
    "period": "Constituição de 1974 e período Tito, 1974–1980; recorte codificado: Desenho constitucional de 1974 no recorte Tito, 1974–1980.; recorte adicional: Direitos linguísticos e separação religiosa na carta1974, dentro do recorte Tito1974–1980.",
    "vec": {
      "est": 60,
      "rep": 20,
      "pod": 50,
      "imi": 40,
      "dip": 50,
      "int": 50,
      "eco": 80,
      "con": 60,
      "com": 50,
      "rel": 60,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Inferências documentais delimitadas recodificadas pelo protocolo ordinal; o vetor anterior e suas fontes foram preservados no módulo de reconciliação.",
    "caveats": "Cotejo oficial integral pendente; todas as inferências médias. Não alinhamento não equivale a não intervenção e defesa territorial não é pacifismo. Eixos sem passagens revisadas permanecem desconhecidos. Ampliação documental: Direitos linguísticos e separação religiosa na carta1974, dentro do recorte Tito1974–1980. Sem auditoria integral da prática histórica. Passagens adicionais cotejadas independentemente; prática histórica não auditada integralmente.",
    "sources": [
      {
        "title": "Constituição da República Socialista Federativa da Iugoslávia, 1974 — Wikisource",
        "url": "https://en.wikisource.org/wiki/Constitution_of_Yugoslavia_(1974)",
        "note": "Fonte primária para estrutura federal (arts. 1–5), bandeira (art. 7), propriedade social e autogestão (art. 10) e papel dirigente da Liga dos Comunistas."
      },
      {
        "title": "Constituent Acts of Yugoslavia — Archives of Yugoslavia",
        "url": "https://arhivyu.applied.rs/en/leksikon-jugoslavije/konstitutivni_akti_jugoslavije",
        "note": "Contexto arquivístico sobre a constituição de 1974 e o sistema de delegados."
      },
      {
        "title": "Foreign Relations of the United States: Tito and nonalignment — Office of the Historian",
        "url": "https://history.state.gov/historicaldocuments/frus1969-76v29/d220",
        "note": "Registro diplomático contemporâneo da política de não alinhamento."
      }
    ],
    "evidence": {
      "est": "medium",
      "rep": "medium",
      "eco": "medium",
      "con": "medium",
      "imi": "medium",
      "rel": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Constituição da República Socialista Federativa da Iugoslávia, 1974 — Wikisource"
        ],
        "rationale": "Participação territorial substantiva sustenta federalismo moderado. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não atribui soberania independente às repúblicas nem mede poder informal de Tito; cotejo oficial pendente."
      },
      "rep": {
        "sourceTitles": [
          "Constituição da República Socialista Federativa da Iugoslávia, 1974 — Wikisource"
        ],
        "rationale": "Direção partidária institucional e limites do sistema sustentam orientação autocrática forte. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Autogestão e delegações são contrapontos; não imputamos fraude ou ausência de toda participação pela palavra socialista."
      },
      "eco": {
        "sourceTitles": [
          "Constituição da República Socialista Federativa da Iugoslávia, 1974 — Wikisource"
        ],
        "rationale": "Base produtiva não privada sustenta o polo social/público, com ressalva da autogestão. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Propriedade social não é juridicamente propriedade estatal: o próprio texto veda apropriação por comunidades e indivíduos; construto público/privado é aproximação delimitada."
      },
      "con": {
        "sourceTitles": [
          "Constituição da República Socialista Federativa da Iugoslávia, 1974 — Wikisource"
        ],
        "rationale": "Planejamento concertado com mercado sustenta direção planejadora moderada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não equipara autogestão ao planejamento central soviético; execução e força dos acordos não auditadas."
      },
      "imi": {
        "sourceTitles": [
          "Constituição da República Socialista Federativa da Iugoslávia, 1974 — Wikisource"
        ],
        "rationale": "Proteção explícita de pluralidade cultural e linguística sustenta multiculturalismo moderado. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não presume imigração geral livre; asilo seletivo, realização por lei e art.203 protege ordem socialista e moral pública. Prática não auditada."
      },
      "rel": {
        "sourceTitles": [
          "Constituição da República Socialista Federativa da Iugoslávia, 1974 — Wikisource"
        ],
        "rationale": "Separação institucional explícita sustenta direção secular moderada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Financiamento permitido impede alegação de separação financeira absoluta; proibição de uso político, limite escolar e ordem socialista restringem liberdades. Não presume irreligiosidade social."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "moderate-first",
        "confidence": "medium",
        "rationale": "Participação territorial substantiva sustenta federalismo moderado.",
        "uncertainty": "Não atribui soberania independente às repúblicas nem mede poder informal de Tito; cotejo oficial pendente.",
        "reviewedOn": "2026-10-07",
        "claims": [
          {
            "sourceTitle": "Constituição da República Socialista Federativa da Iugoslávia, 1974 — Wikisource",
            "locator": "Arts. 244, 273–279 e 281",
            "statement": "Repúblicas/províncias participam de decisões federais e concordam com volume orçamentário; centro conserva poderes enumerados e supervisão de execução.",
            "basis": "norm",
            "publishedDate": "1974-02-21",
            "accessedDate": "2026-10-07"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "rep": {
        "axis": "rep",
        "position": "strong-second",
        "confidence": "medium",
        "rationale": "Direção partidária institucional e limites do sistema sustentam orientação autocrática forte.",
        "uncertainty": "Autogestão e delegações são contrapontos; não imputamos fraude ou ausência de toda participação pela palavra socialista.",
        "reviewedOn": "2026-10-07",
        "claims": [
          {
            "sourceTitle": "Constituição da República Socialista Federativa da Iugoslávia, 1974 — Wikisource",
            "locator": "Princípios fundamentais IV e VIII; art. 321",
            "statement": "Liga comunista é força dirigente e integra Presidência por cargo; delegações e revogabilidade operam dentro do sistema socialista protegido.",
            "basis": "norm",
            "publishedDate": "1974-02-21",
            "accessedDate": "2026-10-07"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 20,
        "range": [
          10,
          25
        ]
      },
      "eco": {
        "axis": "eco",
        "position": "strong-first",
        "confidence": "medium",
        "rationale": "Base produtiva não privada sustenta o polo social/público, com ressalva da autogestão.",
        "uncertainty": "Propriedade social não é juridicamente propriedade estatal: o próprio texto veda apropriação por comunidades e indivíduos; construto público/privado é aproximação delimitada.",
        "reviewedOn": "2026-10-07",
        "claims": [
          {
            "sourceTitle": "Constituição da República Socialista Federativa da Iugoslávia, 1974 — Wikisource",
            "locator": "Princípios fundamentais III; arts. 10 e 64–68",
            "statement": "Propriedade social é base da produção, gerida por trabalhadores; atividade pessoal e propriedade agrícola limitada coexistem.",
            "basis": "norm",
            "publishedDate": "1974-02-21",
            "accessedDate": "2026-10-07"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "con": {
        "axis": "con",
        "position": "moderate-first",
        "confidence": "medium",
        "rationale": "Planejamento concertado com mercado sustenta direção planejadora moderada.",
        "uncertainty": "Não equipara autogestão ao planejamento central soviético; execução e força dos acordos não auditadas.",
        "reviewedOn": "2026-10-07",
        "claims": [
          {
            "sourceTitle": "Constituição da República Socialista Federativa da Iugoslávia, 1974 — Wikisource",
            "locator": "Arts. 69–71; princípios III",
            "statement": "Organizações adotam planos e os coordenam por acordos com planos sociais; a produção também realiza valor no mercado.",
            "basis": "norm",
            "publishedDate": "1974-02-21",
            "accessedDate": "2026-10-07"
          }
        ],
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
        "rationale": "Proteção explícita de pluralidade cultural e linguística sustenta multiculturalismo moderado.",
        "uncertainty": "Não presume imigração geral livre; asilo seletivo, realização por lei e art.203 protege ordem socialista e moral pública. Prática não auditada.",
        "relatedQuestionIds": [
          "imigracao_02",
          "imigracao_08"
        ],
        "reviewedOn": "2026-10-07",
        "claims": [
          {
            "sourceTitle": "Constituição da República Socialista Federativa da Iugoslávia, 1974 — Wikisource",
            "locator": "Arts.170–171,202–203",
            "statement": "Cidadãos podem escolher nacionalidade, expressar cultura e usar língua; nacionalidades têm uso oficial e ensino próprio nas repúblicas/províncias; asilo é garantido a perseguidos por causas especificadas.",
            "basis": "norm",
            "publishedDate": "1974-02-21",
            "accessedDate": "2026-10-07"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "rel": {
        "axis": "rel",
        "position": "moderate-first",
        "confidence": "medium",
        "rationale": "Separação institucional explícita sustenta direção secular moderada.",
        "uncertainty": "Financiamento permitido impede alegação de separação financeira absoluta; proibição de uso político, limite escolar e ordem socialista restringem liberdades. Não presume irreligiosidade social.",
        "relatedQuestionIds": [
          "religiao_01",
          "religiao_03"
        ],
        "reviewedOn": "2026-10-07",
        "claims": [
          {
            "sourceTitle": "Constituição da República Socialista Federativa da Iugoslávia, 1974 — Wikisource",
            "locator": "Art.174; limite art.203",
            "statement": "Fé é assunto privado e comunidades religiosas são separadas do Estado; comunidade social pode financiá-las e escolas religiosas são limitadas à formação clerical.",
            "basis": "norm",
            "publishedDate": "1974-02-21",
            "accessedDate": "2026-10-07"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      }
    },
    "documentaryReview": {
      "status": "author-reviewed-bounded-claims",
      "reviewedOn": "2026-10-07",
      "independentReview": "accepted-bounded-primary-claims",
      "scope": "Direitos linguísticos e separação religiosa na carta1974, dentro do recorte Tito1974–1980."
    },
    "unknownAxisReasons": {
      "pod": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Cotejo oficial integral pendente; todas as inferências médias. Não alinhamento não equivale a não intervenção e defesa territorial não é pacifismo. Eixos sem passagens revisadas permanecem desconhecidos.",
      "dip": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Cotejo oficial integral pendente; todas as inferências médias. Não alinhamento não equivale a não intervenção e defesa territorial não é pacifismo. Eixos sem passagens revisadas permanecem desconhecidos.",
      "int": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Cotejo oficial integral pendente; todas as inferências médias. Não alinhamento não equivale a não intervenção e defesa territorial não é pacifismo. Eixos sem passagens revisadas permanecem desconhecidos.",
      "com": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Cotejo oficial integral pendente; todas as inferências médias. Não alinhamento não equivale a não intervenção e defesa territorial não é pacifismo. Eixos sem passagens revisadas permanecem desconhecidos.",
      "mor": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Cotejo oficial integral pendente; todas as inferências médias. Não alinhamento não equivale a não intervenção e defesa territorial não é pacifismo. Eixos sem passagens revisadas permanecem desconhecidos.",
      "tec": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Cotejo oficial integral pendente; todas as inferências médias. Não alinhamento não equivale a não intervenção e defesa territorial não é pacifismo. Eixos sem passagens revisadas permanecem desconhecidos."
    }
  },
  "ussr-1977": {
    "id": "ussr-1977",
    "kind": "country",
    "category": "historical-country",
    "name": "União Soviética — período Brejnev",
    "period": "Constituição de 1977 e governo Brejnev, 1977–1982; recorte codificado: Desenho normativo original de 1977 no período Brejnev, 1977–1982.",
    "vec": {
      "est": 60,
      "rep": 20,
      "pod": 50,
      "imi": 40,
      "dip": 50,
      "int": 50,
      "eco": 80,
      "con": 80,
      "com": 50,
      "rel": 60,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Inferências documentais delimitadas recodificadas pelo protocolo ordinal; o vetor anterior e suas fontes foram preservados no módulo de reconciliação.",
    "caveats": "Federalismo declarado e centralização partidária precisam de análise própria: est desconhecido. Direitos e propaganda pacífica não provam liberdades ou não intervenção efetivas. Não inferimos secularismo, moral ou entusiasmo tecnológico da identidade comunista. Ampliação09: federalismo, pluralidade linguística e separação religiosa são desenho original1977; prática não auditada integralmente. Tradução1985 apenas auxiliar, cláusulas cotejadas com texto original.",
    "sources": [
      {
        "title": "Constituição da URSS, 1977 — tradução integral em inglês",
        "url": "https://www.marxists.org/history/ussr/government/constitution/1977/constitution-ussr-1977.pdf",
        "note": "Fonte primária traduzida para partido dirigente, direitos declarados, propriedade e economia planificada."
      },
      {
        "title": "Soviet Union: A Country Study — Library of Congress",
        "url": "https://tile.loc.gov/storage-services/master/frd/frdcstdy/so/sovietunioncount00zick/sovietunioncount00zick.pdf",
        "note": "Estudo histórico sobre centralização, controle estatal da economia e reformas no fim da URSS."
      },
      {
        "title": "The Soviet Invasion of Afghanistan, 1978–1980 — Office of the Historian",
        "url": "https://history.state.gov/milestones/1977-1980/soviet-invasion-afghanistan",
        "note": "Registro histórico sobre a intervenção militar soviética no Afeganistão."
      },
      {
        "title": "Конституция СССР — редакция 7 октября 1977, первичный текст в Гарант",
        "url": "https://constitution.garant.ru/history/ussr-rsfsr/1977/red_1977/5478732/",
        "note": "Texto primário russo na edição original1977 efetivamente lido: arts.3/6,36–39,45,52,70–80. Гарант é republicação em arquivo jurídico comercial, não edição governamental oficial."
      },
      {
        "title": "1977 Constitution of the USSR — Bucknell, tradução Novosti1985, partesII/III",
        "url": "https://www.departments.bucknell.edu/Russian/const/77cons02.html",
        "note": "PartesII e III efetivamente lidas; ParteIII em https://www.departments.bucknell.edu/Russian/const/77cons03.html. Rodapé identifica traduçãoNovostiMoscow1985 e páginaRobertBeard1996; títuloHTML deII diz1936 erroneamente. As cláusulas codificadas foram cotejadas com original1977 russo; não se presume toda tradução1985 idêntica à norma1977."
      }
    ],
    "evidence": {
      "rep": "medium",
      "eco": "high",
      "con": "high",
      "est": "medium",
      "imi": "medium",
      "rel": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constituição da URSS, 1977 — tradução integral em inglês"
        ],
        "rationale": "Supremacia partidária institucional sustenta direção autocrática forte no desenho. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Sem auditoria de pleitos; conselhos e participação declarada são contrapontos, não prova de pluralismo."
      },
      "eco": {
        "sourceTitles": [
          "Constituição da URSS, 1977 — tradução integral em inglês"
        ],
        "rationale": "Predomínio social normativo sustenta propriedade pública forte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Cooperativa não equivale a administração estatal; não mede ativos reais nem nega bens privados pessoais."
      },
      "con": {
        "sourceTitles": [
          "Constituição da URSS, 1977 — tradução integral em inglês"
        ],
        "rationale": "Planejamento nacional explícito sustenta direção forte sem negar incentivos empresariais. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Não mede implementação; lucro de contabilidade não converte desenho em mercado irrestrito."
      },
      "est": {
        "sourceTitles": [
          "Конституция СССР — редакция 7 октября 1977, первичный текст в Гарант"
        ],
        "rationale": "Competências territoriais próprias e consentimento republicano sustentam federalismo normativo moderado, com predominância central delimitada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Norma não demonstra autonomia prática nem saída efetiva: centralismo democrático3, direção partidária6, amplas competências federais73 e prevalência74 limitam o desenho."
      },
      "imi": {
        "sourceTitles": [
          "Конституция СССР — редакция 7 октября 1977, первичный текст в Гарант"
        ],
        "rationale": "Garantia normativa de línguas nacionais na instrução e no uso público sustenta dimensão multicultural moderada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Somente dimensão cultural/linguística, não entrada migratória irrestrita ou igualdade observada. Patriotismo soviético/convergência36, asilo politicamente seletivo38 e interesses do Estado39 são contrapontos."
      },
      "rel": {
        "sourceTitles": [
          "Конституция СССР — редакция 7 октября 1977, первичный текст в Гарант"
        ],
        "rationale": "Separação geral explícita entre igreja/Estado e escola/igreja sustenta orientação secular moderada no desenho jurídico. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Constituição permite propaganda ateísta e condiciona direitos aos interesses estatais39; direção marxista partidária6 e garantias textuais não demonstram neutralidade ou ausência de perseguição efetiva."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "strong-second",
        "confidence": "medium",
        "rationale": "Supremacia partidária institucional sustenta direção autocrática forte no desenho.",
        "uncertainty": "Sem auditoria de pleitos; conselhos e participação declarada são contrapontos, não prova de pluralismo.",
        "reviewedOn": "2026-10-07",
        "claims": [
          {
            "sourceTitle": "Constituição da URSS, 1977 — tradução integral em inglês",
            "locator": "Arts. 2–6; PDF pp. 14–16",
            "statement": "Soberania popular formal é subordinada à direção política do Partido Comunista.",
            "basis": "norm",
            "publishedDate": "1977-10-07",
            "accessedDate": "2026-10-07"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 20,
        "range": [
          10,
          25
        ]
      },
      "eco": {
        "axis": "eco",
        "position": "strong-first",
        "confidence": "high",
        "rationale": "Predomínio social normativo sustenta propriedade pública forte.",
        "uncertainty": "Cooperativa não equivale a administração estatal; não mede ativos reais nem nega bens privados pessoais.",
        "reviewedOn": "2026-10-07",
        "claims": [
          {
            "sourceTitle": "Constituição da URSS, 1977 — tradução integral em inglês",
            "locator": "Arts. 10–13 e 17; PDF pp. 16–19",
            "statement": "Propriedade estatal e cooperativa é fundamento econômico; setores centrais são estatais, mas bens pessoais e trabalho individual são permitidos.",
            "basis": "norm",
            "publishedDate": "1977-10-07",
            "accessedDate": "2026-10-07"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "con": {
        "axis": "con",
        "position": "strong-first",
        "confidence": "high",
        "rationale": "Planejamento nacional explícito sustenta direção forte sem negar incentivos empresariais.",
        "uncertainty": "Não mede implementação; lucro de contabilidade não converte desenho em mercado irrestrito.",
        "reviewedOn": "2026-10-07",
        "claims": [
          {
            "sourceTitle": "Constituição da URSS, 1977 — tradução integral em inglês",
            "locator": "Art. 16; PDF p. 19",
            "statement": "Complexo econômico integrado é dirigido por planos estatais com iniciativa empresarial e incentivos de lucro/custo.",
            "basis": "norm",
            "publishedDate": "1977-10-07",
            "accessedDate": "2026-10-07"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "est": {
        "axis": "est",
        "position": "moderate-first",
        "confidence": "medium",
        "reviewedOn": "2026-10-08",
        "rationale": "Competências territoriais próprias e consentimento republicano sustentam federalismo normativo moderado, com predominância central delimitada.",
        "uncertainty": "Norma não demonstra autonomia prática nem saída efetiva: centralismo democrático3, direção partidária6, amplas competências federais73 e prevalência74 limitam o desenho.",
        "claims": [
          {
            "sourceTitle": "Конституция СССР — редакция 7 октября 1977, первичный текст в Гарант",
            "locator": "Arts.70–80; contrapontos3,6,73–74",
            "statement": "Repúblicas conservam poderes fora da competência federal, constituições próprias, participação federal e consentimento territorial; centro coordena política/economia e sua lei prevalece.",
            "basis": "norm",
            "publishedDate": "1977-10-07",
            "accessedDate": "2026-10-08"
          }
        ],
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
        "reviewedOn": "2026-10-08",
        "rationale": "Garantia normativa de línguas nacionais na instrução e no uso público sustenta dimensão multicultural moderada.",
        "uncertainty": "Somente dimensão cultural/linguística, não entrada migratória irrestrita ou igualdade observada. Patriotismo soviético/convergência36, asilo politicamente seletivo38 e interesses do Estado39 são contrapontos.",
        "relatedQuestionIds": [
          "imigracao_02",
          "imigracao_08"
        ],
        "claims": [
          {
            "sourceTitle": "Конституция СССР — редакция 7 октября 1977, первичный текст в Гарант",
            "locator": "Arts.36,45; contrapontos37–39",
            "statement": "Igualdade entre nacionalidades inclui língua materna e línguas de outros povos; educação pode ocorrer na língua materna. Asilo é seletivo e direitos se subordinam a interesses estatais.",
            "basis": "norm",
            "publishedDate": "1977-10-07",
            "accessedDate": "2026-10-08"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "rel": {
        "axis": "rel",
        "position": "moderate-first",
        "confidence": "medium",
        "reviewedOn": "2026-10-08",
        "rationale": "Separação geral explícita entre igreja/Estado e escola/igreja sustenta orientação secular moderada no desenho jurídico.",
        "uncertainty": "Constituição permite propaganda ateísta e condiciona direitos aos interesses estatais39; direção marxista partidária6 e garantias textuais não demonstram neutralidade ou ausência de perseguição efetiva.",
        "claims": [
          {
            "sourceTitle": "Конституция СССР — редакция 7 октября 1977, первичный текст в Гарант",
            "locator": "Art.52; contrapontos6,39",
            "statement": "Carta separa igreja do Estado e escola da igreja, protege professar qualquer religião ou nenhuma, culto e propaganda ateísta, e proíbe hostilidade religiosa.",
            "basis": "norm",
            "publishedDate": "1977-10-07",
            "accessedDate": "2026-10-08"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      }
    },
    "documentaryReview": {
      "status": "author-reviewed-bounded-claims",
      "reviewedOn": "2026-10-07",
      "independentReview": "pending",
      "scope": "Desenho normativo original de 1977 no período Brejnev, 1977–1982."
    },
    "unknownAxisReasons": {
      "pod": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Federalismo declarado e centralização partidária precisam de análise própria: est desconhecido. Direitos e propaganda pacífica não provam liberdades ou não intervenção efetivas. Não inferimos secularismo, moral ou entusiasmo tecnológico da identidade comunista.",
      "dip": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Federalismo declarado e centralização partidária precisam de análise própria: est desconhecido. Direitos e propaganda pacífica não provam liberdades ou não intervenção efetivas. Não inferimos secularismo, moral ou entusiasmo tecnológico da identidade comunista.",
      "int": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Federalismo declarado e centralização partidária precisam de análise própria: est desconhecido. Direitos e propaganda pacífica não provam liberdades ou não intervenção efetivas. Não inferimos secularismo, moral ou entusiasmo tecnológico da identidade comunista.",
      "com": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Federalismo declarado e centralização partidária precisam de análise própria: est desconhecido. Direitos e propaganda pacífica não provam liberdades ou não intervenção efetivas. Não inferimos secularismo, moral ou entusiasmo tecnológico da identidade comunista.",
      "mor": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Federalismo declarado e centralização partidária precisam de análise própria: est desconhecido. Direitos e propaganda pacífica não provam liberdades ou não intervenção efetivas. Não inferimos secularismo, moral ou entusiasmo tecnológico da identidade comunista.",
      "tec": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Federalismo declarado e centralização partidária precisam de análise própria: est desconhecido. Direitos e propaganda pacífica não provam liberdades ou não intervenção efetivas. Não inferimos secularismo, moral ou entusiasmo tecnológico da identidade comunista."
    },
    "documentaryReview09": {
      "status": "author-reviewed-bounded-claims",
      "independentReview": "accepted-bounded-primary-claims",
      "reviewedOn": "2026-10-08",
      "scope": "Somente acréscimos est/imi/rel, norma original1977 no recorte Brejnev1977–1982. Não recertifica três códigos herdados nem prática histórica integral."
    }
  },
  "italy-postwar-republic": {
    "id": "italy-postwar-republic",
    "kind": "country",
    "category": "historical-country",
    "name": "Itália — Primeira República",
    "period": "República parlamentar do pós-guerra1948–1992; recorte codificado: norma original27/12/1947 vigente01/01/1948, não versões posteriores",
    "vec": {
      "est": 60,
      "rep": 60,
      "pod": 40,
      "imi": 50,
      "dip": 40,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 40,
      "mor": 40,
      "tec": 50
    },
    "rationale": "Snapshot normativo fundador da República parlamentar; estimativas legadas e fontes preservadas integralmente no arquivo before. Nenhum código deriva automaticamente de direitos sociais ou permissão econômica.",
    "caveats": "Normas originais datadas, não média1948–1992 ou hoje. Regionalização tem competência legislativa e fiscal própria, controles nacionais significativos e execução não auditada. Tratado1929 referido não presume continuidade religiosa após revisão1984. Família/cônjuges e filiação têm reformas e limites severos em conflito, ambos preservados. Scan original e download não foram cotejados com êxito; HTML oficial originalversão1 efetivamente lido. Seis direções normativas aceitas pelo Root após leitura independente selecionada; não prática integral ou versões posteriores.",
    "sources": [
      {
        "title": "Constituição da República Italiana (1948)",
        "url": "https://www.senato.it/istituzione/la-costituzione",
        "note": "Documento primário ou registro de arquivo relacionado ao período República parlamentar do pós-guerra, 1948–1992; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Camera dei Deputati — Assembleia Constituinte",
        "url": "https://storia.camera.it/istituzione/assemblea-costituente",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      },
      {
        "title": "Constituição italiana — Gazette original27/12/1947, versão1",
        "url": "https://www.gazzettaufficiale.it/atto/vediMenuHTML?atto.codiceRedazionale=047U0001&atto.dataPubblicazioneGazzetta=1947-12-27&tipoSerie=serie_generale&tipoVigenza=originario",
        "note": "Fonte oficial original selecionada e artigos HTML caricaArticolo versão1 efetivamente lidos, não consolidado atual. Arts1/3/5/7–8/11/13–15/17–18/21/24–25/27/29–30/37/48–49/52/55–56/58–59/78/94/116–119/122–123/126–128 e transiçõesXII/XVIII. Scan16p abriu sem texto/imagem certificável; curl403, nenhum cotejo fac-símile alegado."
      },
      {
        "title": "Pactos lateranenses1929 — texto primário Vaticano",
        "url": "https://press.vatican.va/roman_curia/secretariat_state/archivio/documents/rc_seg-st_19290211_patti-lateranensi_it.html",
        "note": "Corpo treaty1–27 e concordato1–45 efetivamente recuperado/lido como contraponto contextual e base de relação religiosa remetida pela Constituição7. Inclui religião estatal treaty1, efeitos conjugais34 e doutrina em educação pública36. Não vigência uniforme até1992 ou texto revisado1984; não transpor rei/corporações fascistas à República."
      }
    ],
    "evidence": {
      "est": "medium",
      "rep": "medium",
      "pod": "medium",
      "dip": "medium",
      "rel": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Constituição italiana — Gazette original27/12/1947, versão1"
        ],
        "rationale": "Autonomia política, legislativa e fiscal regional além de delegação de serviços sustenta descentralização moderada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: República una5, competências dentro de princípios estatais e interesses nacionais117; estatutos aprovados por lei nacional123, dissolução126 e oposição/remessa de leis127. Estados especiais116, sem execução imediata integral ou emendas posteriores."
      },
      "rep": {
        "sourceTitles": [
          "Constituição italiana — Gazette original27/12/1947, versão1"
        ],
        "rationale": "Escolha plural renovável e responsabilidade parlamentar sustentam democracia normativa moderada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Senado exige eleitor acima25/candidato40, Câmara25; senadores vitalícios59, restrições civis/penais/morais48 e proibição fascista/transiçãoXII. Não comprova prática de todas coalizões1948–1992."
      },
      "pod": {
        "sourceTitles": [
          "Constituição italiana — Gazette original27/12/1947, versão1"
        ],
        "rationale": "Garantias ordinárias gerais com controle judicial sustentam liberdade normativa moderada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Detenção urgente13com48+48horas de controle, inspeções especiais14, segurança de reuniões17, associaçõessecretas/militares18 e moralidade pública21. Preventiva13, medidassegurança25, pena de morte militar de guerra27, serviço militar52 e poderesguerra78, sem prática criminal uniformemente auditada."
      },
      "dip": {
        "sourceTitles": [
          "Constituição italiana — Gazette original27/12/1947, versão1"
        ],
        "rationale": "Política nacional expressa de renúncia à guerra agressiva sustenta pacifismo normativo moderado. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Defesa sagrada/serviço militar obrigatório52 e deliberação parlamentar de guerra/poderes necessários78. Não ausência de exército, intervenção ou prática de política externa1948–1992."
      },
      "rel": {
        "sourceTitles": [
          "Constituição italiana — Gazette original27/12/1947, versão1",
          "Pactos lateranenses1929 — texto primário Vaticano"
        ],
        "rationale": "Vínculo confessional amplo remetido em1948 sustenta proposta religiosa moderada, com independência de ordens. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Constituição7declara Estado e Igreja independentes/soberanos e8igual liberdade religiosa; não simples teocracia. Não direção uniforme1948–1992: revisão1984e jurisprudência subsequente precisam camada distinta, não lidas integralmente aqui. Conflitos constitucionais e remissão não tornam todo dispositivo monárquico/fascista vigente automaticamente."
      },
      "mor": {
        "sourceTitles": [
          "Constituição italiana — Gazette original27/12/1947, versão1"
        ],
        "rationale": "Direção familiar tradicional expressa em casamento, filiação e função feminina sustenta proposta conservadora moderada, além de uma ocorrência setorial. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Igualdade moral/jurídica dos cônjuges29, dever de ambos os pais inclusive filhos não matrimoniais30, igualdade sexual3/voto48 e direitos/pagamento laboral37. Não indissolubilidade, papel exclusivamente doméstico ou prática de direitos1970/1975 presumidos. Direção aceita em amplitude delimitada após revisão independente; não prática integral."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "moderate-first",
        "confidence": "medium",
        "reviewedOn": "2026-10-08",
        "claims": [
          {
            "sourceTitle": "Constituição italiana — Gazette original27/12/1947, versão1",
            "locator": "117–119/122–123;contrapontos5/116/126–128",
            "statement": "Regiões têm legislação própria em matérias enumeradas, patrimônio/tributos e direção governamental eleita por conselhos.",
            "basis": "norm",
            "publishedDate": "1947-12-27; vigência1948-01-01",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Autonomia política, legislativa e fiscal regional além de delegação de serviços sustenta descentralização moderada.",
        "uncertainty": "República una5, competências dentro de princípios estatais e interesses nacionais117; estatutos aprovados por lei nacional123, dissolução126 e oposição/remessa de leis127. Estados especiais116, sem execução imediata integral ou emendas posteriores.",
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
        "reviewedOn": "2026-10-08",
        "claims": [
          {
            "sourceTitle": "Constituição italiana — Gazette original27/12/1947, versão1",
            "locator": "48–49/55–56/58/94;contrapontos59/transitóriaXII",
            "statement": "Voto igual secreto de homens e mulheres, partidos livres por método democrático, câmaras diretamente eleitas e governo dependente da confiança de ambas.",
            "basis": "norm",
            "publishedDate": "1947-12-27; vigência1948-01-01",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Escolha plural renovável e responsabilidade parlamentar sustentam democracia normativa moderada.",
        "uncertainty": "Senado exige eleitor acima25/candidato40, Câmara25; senadores vitalícios59, restrições civis/penais/morais48 e proibição fascista/transiçãoXII. Não comprova prática de todas coalizões1948–1992.",
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
        "reviewedOn": "2026-10-08",
        "claims": [
          {
            "sourceTitle": "Constituição italiana — Gazette original27/12/1947, versão1",
            "locator": "13–15/17–18/21/24–25/27;contrapontos52/78/transitóriaXII",
            "statement": "Protege liberdade, privacidade, expressão sem censura, defesa em todos estágios e presunção até condenação definitiva.",
            "basis": "norm",
            "publishedDate": "1947-12-27; vigência1948-01-01",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Garantias ordinárias gerais com controle judicial sustentam liberdade normativa moderada.",
        "uncertainty": "Detenção urgente13com48+48horas de controle, inspeções especiais14, segurança de reuniões17, associaçõessecretas/militares18 e moralidade pública21. Preventiva13, medidassegurança25, pena de morte militar de guerra27, serviço militar52 e poderesguerra78, sem prática criminal uniformemente auditada.",
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
        "reviewedOn": "2026-10-08",
        "claims": [
          {
            "sourceTitle": "Constituição italiana — Gazette original27/12/1947, versão1",
            "locator": "11;contrapontos52/78",
            "statement": "Repudia guerra ofensiva à liberdade alheia e como resolução de controvérsias, favorecendo organização internacional pacífica.",
            "basis": "norm",
            "publishedDate": "1947-12-27; vigência1948-01-01",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Política nacional expressa de renúncia à guerra agressiva sustenta pacifismo normativo moderado.",
        "uncertainty": "Defesa sagrada/serviço militar obrigatório52 e deliberação parlamentar de guerra/poderes necessários78. Não ausência de exército, intervenção ou prática de política externa1948–1992.",
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
        "reviewedOn": "2026-10-08",
        "claims": [
          {
            "sourceTitle": "Constituição italiana — Gazette original27/12/1947, versão1",
            "locator": "7–8",
            "statement": "Relação com Igreja católica regulada por Pactos Lateranenses, mantendo distinção de ordens e livre organização de outras confissões.",
            "basis": "norm",
            "publishedDate": "1947-12-27; vigência1948-01-01",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Pactos lateranenses1929 — texto primário Vaticano",
            "locator": "Tratado1;Concordato34/36",
            "statement": "Pactos vinculam confissão estatal, efeitos civis matrimoniais e doutrina católica na instrução pública.",
            "basis": "norm",
            "publishedDate": "1929-02-11; remissão constitucional1947art7",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Vínculo confessional amplo remetido em1948 sustenta proposta religiosa moderada, com independência de ordens.",
        "uncertainty": "Constituição7declara Estado e Igreja independentes/soberanos e8igual liberdade religiosa; não simples teocracia. Não direção uniforme1948–1992: revisão1984e jurisprudência subsequente precisam camada distinta, não lidas integralmente aqui. Conflitos constitucionais e remissão não tornam todo dispositivo monárquico/fascista vigente automaticamente.",
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
        "reviewedOn": "2026-10-08",
        "claims": [
          {
            "sourceTitle": "Constituição italiana — Gazette original27/12/1947, versão1",
            "locator": "29–30/37;contrapontos3/48",
            "statement": "Família natural fundada no casamento e unidade familiar limitam igualdade conjugal; tutela não matrimonial compatível com família legítima e função feminina familiar essencial.",
            "basis": "norm",
            "publishedDate": "1947-12-27; vigência1948-01-01",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Direção familiar tradicional expressa em casamento, filiação e função feminina sustenta proposta conservadora moderada, além de uma ocorrência setorial.",
        "uncertainty": "Igualdade moral/jurídica dos cônjuges29, dever de ambos os pais inclusive filhos não matrimoniais30, igualdade sexual3/voto48 e direitos/pagamento laboral37. Não indissolubilidade, papel exclusivamente doméstico ou prática de direitos1970/1975 presumidos. Direção aceita em amplitude delimitada após revisão independente; não prática integral.",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      }
    },
    "documentaryReview18": {
      "status": "accepted-bounded-whole-profile",
      "independentReview": "accepted-six-selected-primary-claims",
      "reviewedOn": "2026-10-08",
      "scope": "Root aceitou seis normas após revisão independente: Gazetteversão1 arts3/5/7–8/11/13–15/17–18/21/24–25/27/29–30/37/48–49/52/55–56/58–59/78/94/116–119/122–123/126–128 eXII/XVIII; VaticanoTratado1/Concordato34/36. Sem scan integral, versões1984 ou todo139artigos."
    },
    "unknownAxisReasons": {
      "imi": "Fonte primária selecionada não estabelece direção suficientemente ampla para este eixo. Legado arquivado integralmente; 50 sem graduação/mapa/código.",
      "int": "Fonte primária selecionada não estabelece direção suficientemente ampla para este eixo. Legado arquivado integralmente; 50 sem graduação/mapa/código.",
      "eco": "Fonte primária selecionada não estabelece direção suficientemente ampla para este eixo. Legado arquivado integralmente; 50 sem graduação/mapa/código.",
      "con": "Fonte primária selecionada não estabelece direção suficientemente ampla para este eixo. Legado arquivado integralmente; 50 sem graduação/mapa/código.",
      "com": "Fonte primária selecionada não estabelece direção suficientemente ampla para este eixo. Legado arquivado integralmente; 50 sem graduação/mapa/código.",
      "tec": "Fonte primária selecionada não estabelece direção suficientemente ampla para este eixo. Legado arquivado integralmente; 50 sem graduação/mapa/código."
    }
  },
  "east-germany-gdr": {
    "id": "east-germany-gdr",
    "kind": "country",
    "category": "historical-country",
    "name": "Alemanha Oriental — RDA",
    "period": "República Democrática Alemã, 1949–1990; recorte codificado exclusivamente texto original de 09/04/1968, anterior à revisão de 1974.",
    "vec": {
      "est": 40,
      "rep": 20,
      "pod": 50,
      "imi": 50,
      "dip": 40,
      "int": 50,
      "eco": 80,
      "con": 80,
      "com": 50,
      "rel": 50,
      "mor": 60,
      "tec": 50
    },
    "rationale": "Recodificação editorial de normas explícitas; valores legados sem localizadores permanecem arquivados no literal11.",
    "caveats": "Recorte institucional datado; não representa a população, povos subordinados nem governos fora do período. Décadas distintas e vigilância devem ser estudadas separadamente; texto não prova prática. Eixos sem evidência suficiente permanecem em 50 como desconhecidos. Norma original1968 não equivale à prática de todas décadas ou ao texto1974. Rel/pod/imi/int/com/tec desconhecidos; consciência privada não estabelece relação geral Estado/religião.",
    "sources": [
      {
        "title": "Constituição da RDA de 1968",
        "url": "https://www.documentarchiv.de/ddr/verfddr.html",
        "note": "Documento primário ou registro de arquivo relacionado ao período República Democrática Alemã, 1949–1990; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Fundação Federal para Estudo da Ditadura SED",
        "url": "https://www.bundesstiftung-aufarbeitung.de/de/recherche/dossiers/deutsche-teilung-deutsche-einheit",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      },
      {
        "title": "RDA1968 — texto constitucional alemão, alterações1974 distinguidas",
        "url": "https://www.verfassungen.de/ddr/verf68.htm",
        "note": "Republicação privada de norma primária, corpo realmente aberto/lido:1–13,19–24,38–43,47–60; alterações1974 marcadas separadamente. Não edição oficial ou cotejo integral da execução1949–1990."
      }
    ],
    "evidence": {
      "est": "medium",
      "rep": "medium",
      "eco": "medium",
      "con": "medium",
      "mor": "medium",
      "dip": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "RDA1968 — texto constitucional alemão, alterações1974 distinguidas"
        ],
        "rationale": "Centralismo e exclusividade legislativa nacionais sustentam direção unitária moderada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Comunidades locais têm responsabilidade própria41–43 protegida por lei; não se nega toda descentralização ou mede poder informal."
      },
      "rep": {
        "sourceTitles": [
          "RDA1968 — texto constitucional alemão, alterações1974 distinguidas"
        ],
        "rationale": "Direção partidária inscrita no desenho sustenta polo autocrático forte. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: 22/54 declaram sufrágio universal/secreto e participação; não se infere fraude de todas eleições nem auditoria de pluralismo efetivo."
      },
      "eco": {
        "sourceTitles": [
          "RDA1968 — texto constitucional alemão, alterações1974 distinguidas"
        ],
        "rationale": "Base produtiva geral e exclusividade pública multissetorial sustentam direção pública forte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: 10/13 incluem cooperativas/organizações, não apenas Estado;11 preserva propriedade pessoal/herança. Não mede ativos efetivos."
      },
      "con": {
        "sourceTitles": [
          "RDA1968 — texto constitucional alemão, alterações1974 distinguidas"
        ],
        "rationale": "Regra obrigatória da economia nacional sustenta planejamento forte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Responsabilidade empresarial/local não é eliminada; não auditoria da execução ou eficácia dos planos."
      },
      "mor": {
        "sourceTitles": [
          "RDA1968 — texto constitucional alemão, alterações1974 distinguidas"
        ],
        "rationale": "Regras combinadas de igualdade civil, laboral e familiar sustentam progressismo normativo moderado. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: 38 protege casamento/maternidade e educação de filhos como cidadãos conscientes do Estado; não divórcio, direitos LGBT ou igual prática inferidos."
      },
      "dip": {
        "sourceTitles": [
          "RDA1968 — texto constitucional alemão, alterações1974 distinguidas"
        ],
        "rationale": "Proibição geral de agressão e objetivo de desarmamento sustentam pacifismo normativo moderado. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: 7 prevê defesa socialista e aliança militar;23 impõe deveres defensivos. Norma1968, não descrição da intervenção soviética ou conduta efetiva da RDA."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "moderate-second",
        "confidence": "medium",
        "reviewedOn": "2026-10-08",
        "rationale": "Centralismo e exclusividade legislativa nacionais sustentam direção unitária moderada.",
        "uncertainty": "Comunidades locais têm responsabilidade própria41–43 protegida por lei; não se nega toda descentralização ou mede poder informal.",
        "claims": [
          {
            "sourceTitle": "RDA1968 — texto constitucional alemão, alterações1974 distinguidas",
            "locator": "Arts.41–43,47–49",
            "statement": "Centralismo democrático rege estrutura; Volkskammer é único legislador e administração local atua sob planejamento central.",
            "basis": "norm",
            "publishedDate": "1968-04-09",
            "accessedDate": "2026-10-08"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "rep": {
        "axis": "rep",
        "position": "strong-second",
        "confidence": "medium",
        "reviewedOn": "2026-10-08",
        "rationale": "Direção partidária inscrita no desenho sustenta polo autocrático forte.",
        "uncertainty": "22/54 declaram sufrágio universal/secreto e participação; não se infere fraude de todas eleições nem auditoria de pluralismo efetivo.",
        "claims": [
          {
            "sourceTitle": "RDA1968 — texto constitucional alemão, alterações1974 distinguidas",
            "locator": "Arts.1,3,22,48,54",
            "statement": "Partido marxista-leninista dirige Estado; Frente reúne partidos/organizações para objetivos socialistas; eleições constitucionais ocorrem nesse arranjo.",
            "basis": "norm",
            "publishedDate": "1968-04-09",
            "accessedDate": "2026-10-08"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 20,
        "range": [
          10,
          25
        ]
      },
      "eco": {
        "axis": "eco",
        "position": "strong-first",
        "confidence": "medium",
        "reviewedOn": "2026-10-08",
        "rationale": "Base produtiva geral e exclusividade pública multissetorial sustentam direção pública forte.",
        "uncertainty": "10/13 incluem cooperativas/organizações, não apenas Estado;11 preserva propriedade pessoal/herança. Não mede ativos efetivos.",
        "claims": [
          {
            "sourceTitle": "RDA1968 — texto constitucional alemão, alterações1974 distinguidas",
            "locator": "Arts.9–13",
            "statement": "Economia funda-se na propriedade socialista; minas, energia, grandes indústrias, bancos, transportes e comunicações são públicos, vedada propriedade privada.",
            "basis": "norm",
            "publishedDate": "1968-04-09",
            "accessedDate": "2026-10-08"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "con": {
        "axis": "con",
        "position": "strong-first",
        "confidence": "medium",
        "reviewedOn": "2026-10-08",
        "rationale": "Regra obrigatória da economia nacional sustenta planejamento forte.",
        "uncertainty": "Responsabilidade empresarial/local não é eliminada; não auditoria da execução ou eficácia dos planos.",
        "claims": [
          {
            "sourceTitle": "RDA1968 — texto constitucional alemão, alterações1974 distinguidas",
            "locator": "Art.9(3);41–43",
            "statement": "Economia inteira é planejada, com direção estatal central e responsabilidade própria dos produtores e órgãos locais.",
            "basis": "norm",
            "publishedDate": "1968-04-09",
            "accessedDate": "2026-10-08"
          }
        ],
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
        "reviewedOn": "2026-10-08",
        "rationale": "Regras combinadas de igualdade civil, laboral e familiar sustentam progressismo normativo moderado.",
        "uncertainty": "38 protege casamento/maternidade e educação de filhos como cidadãos conscientes do Estado; não divórcio, direitos LGBT ou igual prática inferidos.",
        "claims": [
          {
            "sourceTitle": "RDA1968 — texto constitucional alemão, alterações1974 distinguidas",
            "locator": "Arts.20(2),24(1),38",
            "statement": "Igualdade de sexos cobre vida social, estatal e pessoal; igual salário e igualdade conjugal coexistem com apoio a mães e pais solteiros.",
            "basis": "norm",
            "publishedDate": "1968-04-09",
            "accessedDate": "2026-10-08"
          }
        ],
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
        "reviewedOn": "2026-10-08",
        "rationale": "Proibição geral de agressão e objetivo de desarmamento sustentam pacifismo normativo moderado.",
        "uncertainty": "7 prevê defesa socialista e aliança militar;23 impõe deveres defensivos. Norma1968, não descrição da intervenção soviética ou conduta efetiva da RDA.",
        "claims": [
          {
            "sourceTitle": "RDA1968 — texto constitucional alemão, alterações1974 distinguidas",
            "locator": "Arts.6(4),8(1); contrapontos7,23",
            "statement": "Estado busca desarmamento geral e veda guerra de conquista ou emprego de forças contra liberdade de outro povo.",
            "basis": "norm",
            "publishedDate": "1968-04-09",
            "accessedDate": "2026-10-08"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      }
    },
    "documentaryReview11": {
      "status": "author-reviewed-bounded-claims",
      "independentReview": "accepted-bounded-primary-claims",
      "reviewedOn": "2026-10-08",
      "scope": "Seis construtos1968cotejados independentemente em corpo primário alemão; imi rejeitado por alcance insuficiente. Não prática1949–1990 ou cotejo integral1974."
    },
    "unknownAxisReasons": {
      "pod": "Sem passagens suficientes para orientar este construto;50 desconhecido.",
      "imi": "Sem passagens suficientes para orientar este construto;50 desconhecido.",
      "int": "Sem passagens suficientes para orientar este construto;50 desconhecido.",
      "com": "Sem passagens suficientes para orientar este construto;50 desconhecido.",
      "rel": "Sem passagens suficientes para orientar este construto;50 desconhecido.",
      "tec": "Sem passagens suficientes para orientar este construto;50 desconhecido."
    }
  },
  "india-nehru": {
    "id": "india-nehru",
    "kind": "country",
    "category": "historical-country",
    "name": "Índia — primeiros governos de Nehru",
    "period": "República federal e planejamento, 1947–1964; recorte normativo: texto fundador adotado em 26/11/1949, vigência geral em 26/01/1950.",
    "vec": {
      "est": 60,
      "rep": 60,
      "pod": 40,
      "imi": 40,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 60,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Recodificação editorial proposta de passagens fundadoras originais, não inferência do legado sem localizadores.",
    "caveats": "Norma fundadora1950, não prática uniforme1947–1964 ou versões posteriores. Centro possui fortes exceções federativas e garantias sofrem detençãopreventiva/emergência. Mor desconhecido: igualdade civil/emprego/voto/diretrizes salariais não resolve orientação moral familiar/cultural geral; proposta preservada somente em pesquisa. Eco/con/dip/int/com/tec desconhecidos; diretrizes distributivas não medem domínio produtivo ou plano executado.",
    "sources": [
      {
        "title": "Constituição da Índia (1950)",
        "url": "https://legislative.gov.in/constitution-of-india/",
        "note": "Documento primário ou registro de arquivo relacionado ao período República federal e planejamento, 1947–1964; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Parlamento da Índia — Jawaharlal Nehru",
        "url": "https://sansad.in/ls/about/prime-minister/jawaharlal-nehru",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      },
      {
        "title": "GazetteExtraordinary26novembro1949 — Constituição indiana original",
        "url": "https://egazette.gov.in/WriteReadData/1949/E-2358-1949-0000-109779.pdf",
        "note": "Corpos primários recuperados efetivamente por indexação:12–14/15(1–3)/16(1–4)/23–28/29(1)/36–38/39(a–d)/245–246. Abertura integral502/400timeout; não scan completo visualmente cotejado. Índice contém erros de cabeçalho; eventual15(4) indexado não é certificado como original e foi excluído. Não texto consolidado2007/2024."
      },
      {
        "title": "Gazeta indiana1949 — OCR/transcrição Wikisource por páginas originais",
        "url": "https://en.wikisource.org/wiki/Index:The_Constitution_of_India_1949_(Gazette_Notification_Version).djvu",
        "note": "Original com scan vinculado, não emendas posteriores. Corpos efetivamente lidos:1–3,17–22,26–29(1),78–85,245–249,325–326,352–356,358–359;39(a–d)cotejo. Revisor independente leu páginas1–3/8–14/19–20/33–35/116–117/158/171–176, incluindo formulários somente lidos. Algumas páginas8–12/14/20não publicadas: OCRprecarregado acessível em formulário somente lido, sem gravação. Texto não revisado, erros OCR visíveis; imagem vinculada não certificada visualmente."
      }
    ],
    "evidence": {
      "est": "medium",
      "rep": "medium",
      "pod": "medium",
      "imi": "medium",
      "rel": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Gazeta indiana1949 — OCR/transcrição Wikisource por páginas originais"
        ],
        "rationale": "Competências estaduais constitucionalmente próprias sustentam federalismo moderado. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Centro tem poderes residuais248, alteração territorial3, intervenção356 e superação249por maioria qualificada no Conselho; partesC/Dnão igualautonomia. Não prática1947–1964."
      },
      "rep": {
        "sourceTitles": [
          "Gazeta indiana1949 — OCR/transcrição Wikisource por páginas originais"
        ],
        "rationale": "Representação nacional renovável e sufrágio amplo sustentam democracia normativa moderada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Senado tem12indicados e eleição indireta; qualificações/desqualificações e emergência83permitem extensão temporária. Não qualidade dos pleitos medida."
      },
      "pod": {
        "sourceTitles": [
          "Gazeta indiana1949 — OCR/transcrição Wikisource por páginas originais"
        ],
        "rationale": "Conjunto amplo de garantias ordinárias sustenta liberdade moderada, com exceções substanciais. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: 22exclui inimigos estrangeiros/detenção preventiva das garantias22(1–2), admite além3meses e sigilo; emergência suspende19e tutela judicial359. Não efetividade1962ou toda prática."
      },
      "imi": {
        "sourceTitles": [
          "Gazeta indiana1949 — OCR/transcrição Wikisource por páginas originais"
        ],
        "rationale": "Proteção cultural geral aberta a qualquer segmento sustenta multiculturalismo moderado. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Âmbito cidadãos, não livre entrada ou todas línguas oficiais;19(5)permite restrições protetivas de tribos. Não igualdade executada."
      },
      "rel": {
        "sourceTitles": [
          "Gazeta indiana1949 — OCR/transcrição Wikisource por páginas originais"
        ],
        "rationale": "Regras gerais de autonomia/confissão e limites ao custeio/imposição sustentam direção secular moderada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Ordem/moral/saúde e reforma social limitam; ensino religioso previsto por trust estatal excepciona28(1). Não secular1976retrojetado ou separação absoluta."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "moderate-first",
        "confidence": "medium",
        "reviewedOn": "2026-10-08",
        "rationale": "Competências estaduais constitucionalmente próprias sustentam federalismo moderado.",
        "uncertainty": "Centro tem poderes residuais248, alteração territorial3, intervenção356 e superação249por maioria qualificada no Conselho; partesC/Dnão igualautonomia. Não prática1947–1964.",
        "claims": [
          {
            "sourceTitle": "Gazeta indiana1949 — OCR/transcrição Wikisource por páginas originais",
            "locator": "1–3;245–249;contrapontos352–356",
            "statement": "Legislaturas estaduaisA/B têm competência exclusiva da lista estadual; União tem listas próprias e concorrentes.",
            "basis": "norm",
            "publishedDate": "1949-11-26",
            "accessedDate": "2026-10-08"
          }
        ],
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
        "reviewedOn": "2026-10-08",
        "rationale": "Representação nacional renovável e sufrágio amplo sustentam democracia normativa moderada.",
        "uncertainty": "Senado tem12indicados e eleição indireta; qualificações/desqualificações e emergência83permitem extensão temporária. Não qualidade dos pleitos medida.",
        "claims": [
          {
            "sourceTitle": "Gazeta indiana1949 — OCR/transcrição Wikisource por páginas originais",
            "locator": "79–85;325–326,páginas33–35/158",
            "statement": "Câmara popular é diretamente eleita, mandatos limitados; adultos cidadãos a partir21anos votam sem distinção religiosa/casta/sexo.",
            "basis": "norm",
            "publishedDate": "1949-11-26",
            "accessedDate": "2026-10-08"
          }
        ],
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
        "reviewedOn": "2026-10-08",
        "rationale": "Conjunto amplo de garantias ordinárias sustenta liberdade moderada, com exceções substanciais.",
        "uncertainty": "22exclui inimigos estrangeiros/detenção preventiva das garantias22(1–2), admite além3meses e sigilo; emergência suspende19e tutela judicial359. Não efetividade1962ou toda prática.",
        "claims": [
          {
            "sourceTitle": "Gazeta indiana1949 — OCR/transcrição Wikisource por páginas originais",
            "locator": "17–22;352,358–359,páginas9–12/171/175–176",
            "statement": "Direitos gerais de expressão/associação/mobilidade e proteções penais/detentivas limitam poder ordinário.",
            "basis": "norm",
            "publishedDate": "1949-11-26",
            "accessedDate": "2026-10-08"
          }
        ],
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
        "reviewedOn": "2026-10-08",
        "rationale": "Proteção cultural geral aberta a qualquer segmento sustenta multiculturalismo moderado.",
        "uncertainty": "Âmbito cidadãos, não livre entrada ou todas línguas oficiais;19(5)permite restrições protetivas de tribos. Não igualdade executada.",
        "relatedQuestionIds": [
          "imigracao_02",
          "imigracao_08"
        ],
        "claims": [
          {
            "sourceTitle": "Gazeta indiana1949 — OCR/transcrição Wikisource por páginas originais",
            "locator": "29(1);contraponto19(5)",
            "statement": "Qualquer segmento cidadão com idioma/escrita/cultura próprios tem direito à conservação.",
            "basis": "norm",
            "publishedDate": "1949-11-26",
            "accessedDate": "2026-10-08"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "rel": {
        "axis": "rel",
        "position": "moderate-first",
        "confidence": "medium",
        "reviewedOn": "2026-10-08",
        "rationale": "Regras gerais de autonomia/confissão e limites ao custeio/imposição sustentam direção secular moderada.",
        "uncertainty": "Ordem/moral/saúde e reforma social limitam; ensino religioso previsto por trust estatal excepciona28(1). Não secular1976retrojetado ou separação absoluta.",
        "claims": [
          {
            "sourceTitle": "Gazeta indiana1949 — OCR/transcrição Wikisource por páginas originais",
            "locator": "25–28",
            "statement": "Liberdade de crença e autonomia de denominações coexistem com vedação fiscal religiosa e ensino religioso público condicionado.",
            "basis": "norm",
            "publishedDate": "1949-11-26",
            "accessedDate": "2026-10-08"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      }
    },
    "documentaryReview16": {
      "status": "author-reviewed-bounded-claims",
      "independentReview": "accepted-bounded-primary-and-identity",
      "reviewedOn": "2026-10-08",
      "scope": "Cinco normas aceitas pelo Root após leitura independente do original Wikisource/OCR por páginas1–3/8–14/19–20/33–35/116–117/158/171–176. Revisor não reabriu PDFoficial integral; autoria indexada separada. Mor rejeitado por alcance. Sem scan visual, prática ou emendas reconstruídas."
    },
    "unknownAxisReasons": {
      "dip": "Sem passagem original suficiente para direção geral;50desconhecido.",
      "int": "Sem passagem original suficiente para direção geral;50desconhecido.",
      "eco": "Sem passagem original suficiente para direção geral;50desconhecido.",
      "con": "Sem passagem original suficiente para direção geral;50desconhecido.",
      "com": "Sem passagem original suficiente para direção geral;50desconhecido.",
      "mor": "Sem passagem original suficiente para direção geral;50desconhecido.",
      "tec": "Sem passagem original suficiente para direção geral;50desconhecido."
    }
  },
  "north-korea-kim-il-sung": {
    "id": "north-korea-kim-il-sung",
    "kind": "country",
    "category": "historical-country",
    "name": "Coreia do Norte — governo Kim Il-sung",
    "period": "República Popular, 1948–1994; recorte codificado exclusivamente texto original27dezembro1972; não revisões1992–2009.",
    "vec": {
      "est": 40,
      "rep": 50,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 80,
      "con": 80,
      "com": 60,
      "rel": 50,
      "mor": 60,
      "tec": 50
    },
    "rationale": "Recodificação editorial de normas explícitas; valores legados sem localizadores permanecem arquivados no literal12.",
    "caveats": "Recorte institucional datado; não representa a população, povos subordinados nem governos fora do período. Acesso documental independente é limitado; não inferir crenças individuais. Eixos sem evidência suficiente permanecem em 50 como desconhecidos. Norma original1972 não equivale à prática1948–1994 nem revisões posteriores. Rep/rel/pod/imi/dip/int/tec desconhecidos; liberdade de crença54não estabelece relação geral Estado/religião.",
    "sources": [
      {
        "title": "Constituição da RPDC (1972)",
        "url": "https://www.constituteproject.org/constitution/Peoples_Republic_of_Korea_1972",
        "note": "Documento primário ou registro de arquivo relacionado ao período República Popular, 1948–1994; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Office of the Historian — North Korea",
        "url": "https://history.state.gov/countries/korea-north",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      },
      {
        "title": "RPDC1972 — transcrição primária inglesa Wikisource",
        "url": "https://en.wikisource.org/wiki/Socialist_Constitution_of_the_Democratic_People%27s_Republic_of_Korea_(1972)",
        "note": "Corpo original1972 realmente aberto/lido, capítulosI–IV eVII–X relevantes; edição com149artigos distinta das revisões1992/1998/2009. Republicação traduzida sem tradutor/edição-fonte identificados no cabeçalho; não fac-símile oficial, cotejo integral pendente."
      },
      {
        "title": "RPDC1972 — transcrição coreana, texto 제7호",
        "url": "https://ko.wikisource.org/wiki/조선민주주의인민공화국_사회주의헌법_(제7호)",
        "note": "Corpo primário coreano realmente aberto; cotejo delimitado4/9–11/18–22/30–34/51–52/62–63 com inglês. Transcrição colaborativa com erros tipográficos visíveis; não scan governamental ou validação linguística integral."
      }
    ],
    "evidence": {
      "est": "medium",
      "eco": "medium",
      "con": "medium",
      "com": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "RPDC1972 — transcrição primária inglesa Wikisource"
        ],
        "rationale": "Direção nacional hierárquica e legislador exclusivo sustentam unitarismo moderado. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Assembleias locais eleitas aprovam orçamento/plano e nomeiam autoridades118; não inexistência de toda autonomia administrativa ou prática auditada."
      },
      "eco": {
        "sourceTitles": [
          "RPDC1972 — transcrição primária inglesa Wikisource"
        ],
        "rationale": "Base produtiva geral e papel dirigente estatal expresso sustentam direção pública forte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: 20permite cooperativas de pequenas/médias empresas;21transformação cooperativa depende vontade membros;22bens pessoais e herança. Não ativos reais medidos."
      },
      "con": {
        "sourceTitles": [
          "RPDC1972 — transcrição primária inglesa Wikisource"
        ],
        "rationale": "Plano obrigatório da economia inteira sustenta direção forte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Taean30emprega força coletiva dos produtores, planos locais118/130; não execução eficaz ou eliminação de toda decisão local."
      },
      "com": {
        "sourceTitles": [
          "RPDC1972 — transcrição primária inglesa Wikisource"
        ],
        "rationale": "Objetivo geral das tarifas sustenta protecionismo moderado. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Igualdade e benefício mútuo no comércio são contrapontos; nenhuma taxa média medida, proibição total do comércio ou tarifa atual inferida. Monopólio sozinho não seria suficiente."
      },
      "mor": {
        "sourceTitles": [
          "RPDC1972 — transcrição primária inglesa Wikisource"
        ],
        "rationale": "Igualdade civil/política e participação social combinadas sustentam progressismo normativo moderado. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: 63fortalece família;67–68impõem normas socialistas/coletivismo. Sem igual execução, divórcio, filhos não matrimoniais ou direitos LGBT inferidos."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "moderate-second",
        "confidence": "medium",
        "reviewedOn": "2026-10-08",
        "rationale": "Direção nacional hierárquica e legislador exclusivo sustentam unitarismo moderado.",
        "uncertainty": "Assembleias locais eleitas aprovam orçamento/plano e nomeiam autoridades118; não inexistência de toda autonomia administrativa ou prática auditada.",
        "claims": [
          {
            "sourceTitle": "RPDC1972 — transcrição primária inglesa Wikisource",
            "locator": "Arts.9,73,103(2/5/12),109(1/10),115–132",
            "statement": "Centralismo rege todos órgãos; centro dirige assembleias locais e altera distritos, com cadeia administrativa hierárquica.",
            "basis": "norm",
            "publishedDate": "1972-12-27",
            "accessedDate": "2026-10-08"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "eco": {
        "axis": "eco",
        "position": "strong-first",
        "confidence": "medium",
        "reviewedOn": "2026-10-08",
        "rationale": "Base produtiva geral e papel dirigente estatal expresso sustentam direção pública forte.",
        "uncertainty": "20permite cooperativas de pequenas/médias empresas;21transformação cooperativa depende vontade membros;22bens pessoais e herança. Não ativos reais medidos.",
        "claims": [
          {
            "sourceTitle": "RPDC1972 — transcrição primária inglesa Wikisource",
            "locator": "Arts.18–22",
            "statement": "Meios produtivos são estatais/cooperativos; recursos, fábricas centrais, portos, bancos e transportes pertencem exclusivamente ao Estado.",
            "basis": "norm",
            "publishedDate": "1972-12-27",
            "accessedDate": "2026-10-08"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "con": {
        "axis": "con",
        "position": "strong-first",
        "confidence": "medium",
        "reviewedOn": "2026-10-08",
        "rationale": "Plano obrigatório da economia inteira sustenta direção forte.",
        "uncertainty": "Taean30emprega força coletiva dos produtores, planos locais118/130; não execução eficaz ou eliminação de toda decisão local.",
        "claims": [
          {
            "sourceTitle": "RPDC1972 — transcrição primária inglesa Wikisource",
            "locator": "Arts.30–32,76(9),109(3)",
            "statement": "Economia nacional é planejada; Estado prepara/executa planos unificados/detalhados e orçamento subordinado ao plano.",
            "basis": "norm",
            "publishedDate": "1972-12-27",
            "accessedDate": "2026-10-08"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "com": {
        "axis": "com",
        "position": "moderate-first",
        "confidence": "medium",
        "reviewedOn": "2026-10-08",
        "rationale": "Objetivo geral das tarifas sustenta protecionismo moderado.",
        "uncertainty": "Igualdade e benefício mútuo no comércio são contrapontos; nenhuma taxa média medida, proibição total do comércio ou tarifa atual inferida. Monopólio sozinho não seria suficiente.",
        "claims": [
          {
            "sourceTitle": "RPDC1972 — transcrição primária inglesa Wikisource",
            "locator": "Art.34",
            "statement": "Política tarifária tem objetivo explícito de proteger economia nacional independente, com comércio externo por Estado ou supervisão.",
            "basis": "norm",
            "publishedDate": "1972-12-27",
            "accessedDate": "2026-10-08"
          }
        ],
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
        "reviewedOn": "2026-10-08",
        "rationale": "Igualdade civil/política e participação social combinadas sustentam progressismo normativo moderado.",
        "uncertainty": "63fortalece família;67–68impõem normas socialistas/coletivismo. Sem igual execução, divórcio, filhos não matrimoniais ou direitos LGBT inferidos.",
        "claims": [
          {
            "sourceTitle": "RPDC1972 — transcrição primária inglesa Wikisource",
            "locator": "Arts.51–52,62–63",
            "statement": "Mulheres têm igual status/direitos, sufrágio sem distinção sexual e medidas de emancipação doméstica para participação pública; família e casamento protegidos.",
            "basis": "norm",
            "publishedDate": "1972-12-27",
            "accessedDate": "2026-10-08"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      }
    },
    "documentaryReview12": {
      "status": "author-reviewed-bounded-claims",
      "independentReview": "accepted-bounded-primary-claims",
      "reviewedOn": "2026-10-08",
      "scope": "Revisor leu inglês original1–34/49–76/103/109/115–132;133–146contexto. Não todos149, scan oficial ou certificação linguística coreana. Cinco normas aceitas; rep rejeitado pelo Root frente eleições/partidos explícitos, sem substituição40. Não prática1948–1994 ou versões posteriores."
    },
    "unknownAxisReasons": {
      "rep": "Sem passagens suficientes para orientar este construto;50 desconhecido.",
      "pod": "Sem passagens suficientes para orientar este construto;50 desconhecido.",
      "imi": "Sem passagens suficientes para orientar este construto;50 desconhecido.",
      "dip": "Sem passagens suficientes para orientar este construto;50 desconhecido.",
      "int": "Sem passagens suficientes para orientar este construto;50 desconhecido.",
      "rel": "Sem passagens suficientes para orientar este construto;50 desconhecido.",
      "tec": "Sem passagens suficientes para orientar este construto;50 desconhecido."
    }
  },
  "china-deng-reform": {
    "id": "china-deng-reform",
    "kind": "country",
    "category": "historical-country",
    "name": "China — reformas de Deng Xiaoping",
    "period": "Reforma e abertura, 1978–1992; recorte codificado exclusivamente texto original de 04/12/1982, anterior às emendas de 1988 e 1993.",
    "vec": {
      "est": 40,
      "rep": 20,
      "pod": 50,
      "imi": 40,
      "dip": 50,
      "int": 50,
      "eco": 80,
      "con": 80,
      "com": 50,
      "rel": 50,
      "mor": 60,
      "tec": 50
    },
    "rationale": "Recodificação editorial de normas explícitas; valores legados sem localizadores permanecem arquivados no literal13.",
    "caveats": "Recorte institucional datado; não representa a população, povos subordinados nem governos fora do período. Repressão de 1989 e crescimento desigual fazem parte do período. Eixos sem evidência suficiente permanecem em 50 como desconhecidos. Norma original1982 não equivale à prática1978–1992 ou sistema de mercado1993. Rel/pod/dip/int/com/tec desconhecidos; crença36 não estabelece separação geral.",
    "sources": [
      {
        "title": "Constituição da República Popular (1982)",
        "url": "https://www.constituteproject.org/constitution/China_1982",
        "note": "Documento primário ou registro de arquivo relacionado ao período Reforma e abertura, 1978–1992; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Office of the Historian — China",
        "url": "https://history.state.gov/milestones/1969-1976/rapprochement-china",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      },
      {
        "title": "Constituição chinesa1982 — AppendixI, fac-símile arquivado IFES",
        "url": "https://www.ifes.org/sites/default/files/migrate/con00014.pdf",
        "note": "PDF28p realmente aberto, texto/OCR primário original4dezembro1982: preâmbulo e1–18/33–54; páginas2–6/9–11 pertinentes. AppendixI reproduz edição traduzida com emendas posteriores separadas ao final; catálogoIFES3dezembro não substitui adoção4dezembro no corpo. OCR defeituoso cotejado com transcrição; não edição oficial chinesa integral."
      },
      {
        "title": "Constituição chinesa original1982 — Wikisource inglês",
        "url": "https://en.wikisource.org/wiki/Constitution_of_the_People%27s_Republic_of_China_(1982)",
        "note": "Corpo primário inglês realmente aberto/lido: preâmbulo1–18/33–54 e cotejo IFES.15ainda planejamento e mercado suplementar; não revisões1993/2004/2018. Transcrição colaborativa, não scan original chinês."
      }
    ],
    "evidence": {
      "est": "medium",
      "rep": "medium",
      "eco": "medium",
      "con": "medium",
      "imi": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Constituição chinesa1982 — AppendixI, fac-símile arquivado IFES"
        ],
        "rationale": "Unidade e comando central expressos sustentam unitarismo moderado. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: 4estabelece autogoverno regional;3exige iniciativa local;31admite sistemas especiais definidos por lei. Não ausência de descentralização efetiva."
      },
      "rep": {
        "sourceTitles": [
          "Constituição chinesa1982 — AppendixI, fac-símile arquivado IFES"
        ],
        "rationale": "Liderança partidária normativa e limites de sistema sustentam autocracia forte no desenho. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: 34declara voto sem discriminação/3eleições; não auditoria de pleitos ou inferência de fraude. Não usa fórmula de liderança no artigo1adicionada2018."
      },
      "eco": {
        "sourceTitles": [
          "Constituição chinesa1982 — AppendixI, fac-símile arquivado IFES"
        ],
        "rationale": "Base geral produtiva e prioridade estatal expressas sustentam direção pública forte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Coletiva não é apenas estatal;11economiaindividual/13pessoal e herança/18investimento estrangeiro são contrapontos. Norma1982 não maioria real medida."
      },
      "con": {
        "sourceTitles": [
          "Constituição chinesa1982 — AppendixI, fac-símile arquivado IFES"
        ],
        "rationale": "Subordinação geral ao plano obrigatório sustenta planejamento forte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Mercado suplementar15e decisão gerencial empresarial16–17expressos. Não orientação de mercado1993retrojetada ou eficácia do plano inferida."
      },
      "imi": {
        "sourceTitles": [
          "Constituição chinesa1982 — AppendixI, fac-símile arquivado IFES"
        ],
        "rationale": "Proteção geral multicultural/linguística sustenta direção moderada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: 4proíbe divisão/19promovePutonghua nacional;32asilo político discricionário. Não entrada livre ou execução igualitária."
      },
      "mor": {
        "sourceTitles": [
          "Constituição chinesa1982 — AppendixI, fac-símile arquivado IFES"
        ],
        "rationale": "Igualdade abrangente e liberdade conjugal combinadas sustentam progressismo normativo moderado. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: 25/49impõem planejamento familiar;família/parentesco tradicional protegido e dever ético53. Não autonomia reprodutiva, divórcio, LGBT ou execução igualitária inferidos."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "moderate-second",
        "confidence": "medium",
        "reviewedOn": "2026-10-08",
        "rationale": "Unidade e comando central expressos sustentam unitarismo moderado.",
        "uncertainty": "4estabelece autogoverno regional;3exige iniciativa local;31admite sistemas especiais definidos por lei. Não ausência de descentralização efetiva.",
        "claims": [
          {
            "sourceTitle": "Constituição chinesa1982 — AppendixI, fac-símile arquivado IFES",
            "locator": "Preâmbulo;arts.3–4,30–31",
            "statement": "Estado unitário com liderança central unificada; autonomia regional das nacionalidades é integrante do país.",
            "basis": "norm",
            "publishedDate": "1982-12-04",
            "accessedDate": "2026-10-08"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "rep": {
        "axis": "rep",
        "position": "strong-second",
        "confidence": "medium",
        "reviewedOn": "2026-10-08",
        "rationale": "Liderança partidária normativa e limites de sistema sustentam autocracia forte no desenho.",
        "uncertainty": "34declara voto sem discriminação/3eleições; não auditoria de pleitos ou inferência de fraude. Não usa fórmula de liderança no artigo1adicionada2018.",
        "claims": [
          {
            "sourceTitle": "Constituição chinesa1982 — AppendixI, fac-símile arquivado IFES",
            "locator": "Preâmbulo;arts.1–3,34",
            "statement": "Partido Comunista lidera Estado e frente de partidos democráticos/organizações; ditadura popular e proteção do sistema socialista coexistem com eleições declaradas.",
            "basis": "norm",
            "publishedDate": "1982-12-04",
            "accessedDate": "2026-10-08"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 20,
        "range": [
          10,
          25
        ]
      },
      "eco": {
        "axis": "eco",
        "position": "strong-first",
        "confidence": "medium",
        "reviewedOn": "2026-10-08",
        "rationale": "Base geral produtiva e prioridade estatal expressas sustentam direção pública forte.",
        "uncertainty": "Coletiva não é apenas estatal;11economiaindividual/13pessoal e herança/18investimento estrangeiro são contrapontos. Norma1982 não maioria real medida.",
        "claims": [
          {
            "sourceTitle": "Constituição chinesa1982 — AppendixI, fac-símile arquivado IFES",
            "locator": "Arts.6–13,18",
            "statement": "Propriedade pública produtiva é base, Estado força dirigente; economia individual é complemento e propriedade privada pessoal protegida.",
            "basis": "norm",
            "publishedDate": "1982-12-04",
            "accessedDate": "2026-10-08"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "con": {
        "axis": "con",
        "position": "strong-first",
        "confidence": "medium",
        "reviewedOn": "2026-10-08",
        "rationale": "Subordinação geral ao plano obrigatório sustenta planejamento forte.",
        "uncertainty": "Mercado suplementar15e decisão gerencial empresarial16–17expressos. Não orientação de mercado1993retrojetada ou eficácia do plano inferida.",
        "claims": [
          {
            "sourceTitle": "Constituição chinesa1982 — AppendixI, fac-símile arquivado IFES",
            "locator": "Arts.15–17",
            "statement": "Economia planejada nacional admite mercado como regulação suplementar; empresas estatais devem cumprir plano e coletivas aceitar orientação.",
            "basis": "norm",
            "publishedDate": "1982-12-04",
            "accessedDate": "2026-10-08"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "imi": {
        "axis": "imi",
        "position": "moderate-second",
        "confidence": "medium",
        "reviewedOn": "2026-10-08",
        "rationale": "Proteção geral multicultural/linguística sustenta direção moderada.",
        "uncertainty": "4proíbe divisão/19promovePutonghua nacional;32asilo político discricionário. Não entrada livre ou execução igualitária.",
        "relatedQuestionIds": [
          "imigracao_02",
          "imigracao_08"
        ],
        "claims": [
          {
            "sourceTitle": "Constituição chinesa1982 — AppendixI, fac-símile arquivado IFES",
            "locator": "Arts.4,19,32",
            "statement": "Todas nacionalidades podem desenvolver idiomas falados/escritos e preservar/reformar costumes; minorias têm proteção cultural e autonomia.",
            "basis": "norm",
            "publishedDate": "1982-12-04",
            "accessedDate": "2026-10-08"
          }
        ],
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
        "reviewedOn": "2026-10-08",
        "rationale": "Igualdade abrangente e liberdade conjugal combinadas sustentam progressismo normativo moderado.",
        "uncertainty": "25/49impõem planejamento familiar;família/parentesco tradicional protegido e dever ético53. Não autonomia reprodutiva, divórcio, LGBT ou execução igualitária inferidos.",
        "claims": [
          {
            "sourceTitle": "Constituição chinesa1982 — AppendixI, fac-símile arquivado IFES",
            "locator": "Arts.34,48–49;contrapontos25,51,53",
            "statement": "Mulheres têm iguais direitos em vida política/econômica/cultural/social/familiar e igual salário; liberdade conjugal e proteção contra maus-tratos são asseguradas.",
            "basis": "norm",
            "publishedDate": "1982-12-04",
            "accessedDate": "2026-10-08"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      }
    },
    "documentaryReview13": {
      "status": "author-reviewed-bounded-claims",
      "independentReview": "accepted-bounded-primary-claims",
      "reviewedOn": "2026-10-08",
      "scope": "Seis normas originais1982 aceitas: autor leu PDF IFES e paralelo Wiki; revisor leu efetivamente Wiki preâmbulo/1–18/19/25/30–34/48–54. Acesso independente ao IFES falhou e curl403; não certifica scan pelo revisor. Não emendas1993/2018 ou prática integral1978–1992."
    },
    "unknownAxisReasons": {
      "pod": "Sem passagens suficientes para orientar este construto;50 desconhecido.",
      "dip": "Sem passagens suficientes para orientar este construto;50 desconhecido.",
      "int": "Sem passagens suficientes para orientar este construto;50 desconhecido.",
      "com": "Sem passagens suficientes para orientar este construto;50 desconhecido.",
      "rel": "Sem passagens suficientes para orientar este construto;50 desconhecido.",
      "tec": "Sem passagens suficientes para orientar este construto;50 desconhecido."
    }
  },
  "czechoslovakia-socialist-unitary-1960": {
    "id": "czechoslovakia-socialist-unitary-1960",
    "name": "Tchecoslováquia — República Socialista unitária",
    "aliases": [
      "Československá socialistická republika — ordem unitária"
    ],
    "period": "Carta socialista unitária, 1960–1968; federalização em vigor em 1º de janeiro de 1969; recorte adicional: Educação, cultura e religião na norma original1960, no recorte unitário1960–1968.",
    "rationale": "A edição original explicita Estado unitário, direção comunista, propriedade social predominante e planos nacionais obrigatórios.",
    "caveats": "Carta unitária1960–1968; não prática social integral. Imi25protege somente três minorias nomeadas, insuficiente para direção cultural geral. Rel16/24/32não estabelece separação religiosa. Ampliação14: mor descreve igualdade abrangente familiar/laboral/pública20/27no original1960, com família tradicional26 e deveres socialistas34/38. Não prática social ou direitos contemporâneos.",
    "sources": [
      {
        "title": "Ústava Československé socialistické republiky, 1960 — Poslanecká sněmovna",
        "url": "https://www.psp.cz/docs/texts/constitution_1960.html",
        "note": "Transcrição primária oficial da Lei Constitucional nº 100/1960, de 11 de julho, edição original."
      },
      {
        "title": "Ústavní zákon o československé federaci, 1968 — Poslanecká sněmovna",
        "url": "https://www.psp.cz/docs/texts/constitution_1968.html",
        "note": "Lei nº 143/1968: artigo 1 institui federação; artigo 151(1) fixa entrada geral em vigor em 1º de janeiro de 1969."
      },
      {
        "title": "Ústava1960 — PSP, igualdade civil familiar laboral20/27",
        "url": "https://www.psp.cz/docs/texts/constitution_1960.html",
        "note": "Texto primário oficial original100/1960 realmente reaberto/lido19–38; passagens20/26–27 cotejadas para mor. Não prática social integral1960–1968."
      }
    ],
    "kind": "country",
    "category": "historical-country",
    "vec": {
      "est": 20,
      "rep": 20,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 80,
      "con": 80,
      "com": 50,
      "rel": 50,
      "mor": 60,
      "tec": 50
    },
    "evidence": {
      "est": "high",
      "rep": "medium",
      "eco": "high",
      "con": "high",
      "mor": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Ústava Československé socialistické republiky, 1960 — Poslanecká sněmovna"
        ],
        "rationale": "Subordinação decisória e legislativa territorial sustenta direção unitária forte, além do simples título do Estado. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Conselho eslovaco e comitês locais mantêm atribuições. Não é descrição da federação posterior nem certificação de todas as alterações de 1968."
      },
      "rep": {
        "sourceTitles": [
          "Ústava Československé socialistické republiky, 1960 — Poslanecká sněmovna"
        ],
        "rationale": "Supremacia partidária constitucional limita a representação plural e sustenta direção autocrática no desenho formal. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Não imputamos fraude ou repressão eleitoral não examinada. Sufrágio declarado é contraponto; não avaliamos como a abertura de 1968 modificou a competição efetiva."
      },
      "eco": {
        "sourceTitles": [
          "Ústava Československé socialistické republiky, 1960 — Poslanecká sněmovna"
        ],
        "rationale": "Predomínio legal explícito de propriedade social nos setores centrais sustenta propriedade pública forte, sem confundi-la com propriedade de todo bem pessoal. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Sem inventário de ativos nem medição da composição econômica efetiva; cooperativas não são idênticas a propriedade administrativa estatal."
      },
      "con": {
        "sourceTitles": [
          "Ústava Československé socialistické republiky, 1960 — Poslanecká sněmovna"
        ],
        "rationale": "Planejamento vinculante multissetorial e integração orçamentária sustentam planejamento forte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Não mede cumprimento real ou discricionariedade empresarial, nem equivale a autarquia comercial."
      },
      "mor": {
        "sourceTitles": [
          "Ústava1960 — PSP, igualdade civil familiar laboral20/27"
        ],
        "rationale": "Igualdade entre sexos na família, trabalho e vida pública, com garantias de oportunidades e participação, sustenta progressismo normativo moderado. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: 26protege casamento/maternidade/família;34/38impõem deveres para sociedade socialista.27proteção maternal não demonstra igual execução ou autonomia reprodutiva; não divórcio/LGBT inferidos."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "strong-second",
        "confidence": "high",
        "relatedQuestionIds": [
          "estrutura_01",
          "estrutura_05"
        ],
        "claims": [
          {
            "sourceTitle": "Ústava Československé socialistické republiky, 1960 — Poslanecká sněmovna",
            "locator": "Art. 1(2), 18, 41(2), 68 e 96",
            "statement": "Estado expressamente unitário e centralismo democrático; autoridades nacionais dirigem órgãos territoriais e podem anular decisões inferiores, inclusive leis do Conselho Nacional Eslovaco.",
            "basis": "norm",
            "publishedDate": "1960-07-11",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Subordinação decisória e legislativa territorial sustenta direção unitária forte, além do simples título do Estado.",
        "uncertainty": "Conselho eslovaco e comitês locais mantêm atribuições. Não é descrição da federação posterior nem certificação de todas as alterações de 1968.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 20,
        "range": [
          10,
          25
        ]
      },
      "rep": {
        "axis": "rep",
        "position": "strong-second",
        "confidence": "medium",
        "relatedQuestionIds": [
          "representacao_01",
          "representacao_15"
        ],
        "claims": [
          {
            "sourceTitle": "Ústava Československé socialistické republiky, 1960 — Poslanecká sněmovna",
            "locator": "Art. 3–6",
            "statement": "A carta declara sufrágio universal e atribui ao Partido Comunista papel dirigente; a Frente Nacional é dirigida pelo partido.",
            "basis": "norm",
            "publishedDate": "1960-07-11",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Supremacia partidária constitucional limita a representação plural e sustenta direção autocrática no desenho formal.",
        "uncertainty": "Não imputamos fraude ou repressão eleitoral não examinada. Sufrágio declarado é contraponto; não avaliamos como a abertura de 1968 modificou a competição efetiva.",
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
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Ústava Československé socialistické republiky, 1960 — Poslanecká sněmovna",
            "locator": "Art. 7–10",
            "statement": "Propriedade estatal e cooperativa formam a base econômica; grandes setores são sociais. Pequena atividade pessoal e bens pessoais permanecem permitidos.",
            "basis": "norm",
            "publishedDate": "1960-07-11",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Predomínio legal explícito de propriedade social nos setores centrais sustenta propriedade pública forte, sem confundi-la com propriedade de todo bem pessoal.",
        "uncertainty": "Sem inventário de ativos nem medição da composição econômica efetiva; cooperativas não são idênticas a propriedade administrativa estatal.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "con": {
        "axis": "con",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Ústava Československé socialistické republiky, 1960 — Poslanecká sněmovna",
            "locator": "Art. 7, 12, 41(1) e 90",
            "statement": "Desenvolvimento econômico segue planos vinculantes; planos de cinco anos têm aprovação legislativa e orçamentos locais se articulam ao planejamento estatal.",
            "basis": "norm",
            "publishedDate": "1960-07-11",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Planejamento vinculante multissetorial e integração orçamentária sustentam planejamento forte.",
        "uncertainty": "Não mede cumprimento real ou discricionariedade empresarial, nem equivale a autarquia comercial.",
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
        "reviewedOn": "2026-10-08",
        "rationale": "Igualdade entre sexos na família, trabalho e vida pública, com garantias de oportunidades e participação, sustenta progressismo normativo moderado.",
        "uncertainty": "26protege casamento/maternidade/família;34/38impõem deveres para sociedade socialista.27proteção maternal não demonstra igual execução ou autonomia reprodutiva; não divórcio/LGBT inferidos.",
        "claims": [
          {
            "sourceTitle": "Ústava1960 — PSP, igualdade civil familiar laboral20/27",
            "locator": "Arts.20(3–4),27;contrapontos26,34,38",
            "statement": "Homens e mulheres têm igual posição familiar, laboral e pública e oportunidades em toda vida social; condições laborais, maternidade e serviços devem garantir participação feminina.",
            "basis": "norm",
            "publishedDate": "1960-07-11",
            "accessedDate": "2026-10-08"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      }
    },
    "documentaryReview": {
      "status": "author-reviewed-bounded-claims",
      "reviewedOn": "2026-10-07",
      "independentReview": "accepted-bounded-primary-claims",
      "scope": "Educação, cultura e religião na norma original1960, no recorte unitário1960–1968."
    },
    "unknownAxisReasons": {
      "pod": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "dip": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "int": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "com": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "rel": "Currículo científico marxista e consciência privada16/24/32 não estabelecem relação geral Estado/religião; sem inferir separação. Pesquisa preservada.",
      "tec": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "imi": "Art25 protege três minorias nomeadas, alcance insuficiente para direção cultural geral; pesquisa preservada no arquivo14."
    },
    "identityOrigin": {
      "disposition": "new-historical-unit",
      "distinctness": "Regime socialista e carta unitária de 1960; distinto da Primeira República; encerra-se o recorte unitário com a federação de 1969."
    },
    "codingScope": "Carta socialista unitária, 1960–1968; federalização em vigor em 1º de janeiro de 1969",
    "documentaryReview14": {
      "status": "author-reviewed-bounded-claims",
      "independentReview": "accepted-bounded-primary-claims",
      "reviewedOn": "2026-10-08",
      "scope": "Norma1960: mor aceito; est/rep/eco/con cotejados; locator est41(2)corrigido. Imi herdado rejeitado por alcance de três minorias, integralmente arquivado. Não prática social integral."
    }
  },
  "iceland-kingdom-1918": {
    "id": "iceland-kingdom-1918",
    "name": "Islândia — reino em união pessoal",
    "aliases": [
      "Kingdom of Iceland"
    ],
    "period": "Reino soberano em união pessoal, 1/12/1918–1944; âncora exclusivamente na Lei de União de 30/11/1918",
    "rationale": "Soberania reconhecida e pacto revogável distinguem o reino da dependência anterior e da república posterior.",
    "caveats": "Codificação normativa editorial, não medição nem certificação de execução. Revisão independente integral pendente. A introdução editorial distingue soberania de1918 e república de1944; o §7 delega relações externas à Dinamarca com consentimento islandês para novos tratados. União pessoal não é federação interna: est desconhecido.",
    "sources": [
      {
        "title": "Dansk-Islandsk Forbundslov 1918 — transcrição da lei",
        "url": "https://danmarkshistorien.lex.dk/Dansk-Islandsk_Forbundslov,_30._november_1918",
        "note": "Fonte efetivamente consultada em7/10/2026; limites de edição e locadores em coding."
      }
    ],
    "kind": "country",
    "category": "historical-country",
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
          "Dansk-Islandsk Forbundslov 1918 — transcrição da lei"
        ],
        "rationale": "Compromisso normativo de neutralidade sustenta contenção militar moderada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Neutralidade declarada não prova ausência de coerção, execução durante a guerra ou desarmamento universal."
      }
    },
    "coding": {
      "dip": {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Dansk-Islandsk Forbundslov 1918 — transcrição da lei",
            "locator": "§§19–20",
            "statement": "A lei comunica neutralidade permanente da Islândia e ausência de bandeira naval militar.",
            "basis": "norm",
            "publishedDate": "1918-11-30",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Compromisso normativo de neutralidade sustenta contenção militar moderada.",
        "uncertainty": "Neutralidade declarada não prova ausência de coerção, execução durante a guerra ou desarmamento universal.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      }
    },
    "documentaryReview": {
      "status": "author-reviewed-bounded-claims",
      "reviewedOn": "2026-10-07",
      "independentReview": "pending",
      "scope": "Leitura autoral das passagens delimitadas; identidade e recorte arquivístico descritos nas fontes. Cotejo independente integral pendente."
    },
    "unknownAxisReasons": {
      "est": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "rep": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "pod": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "imi": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "int": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "eco": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "con": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "com": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "rel": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "mor": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "tec": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação."
    }
  }
} as unknown as Record<string,ReferenceEntry>;

export const historicalCountryProvenance05Proposals = {
  "weimar-republic": {
    "id": "weimar-republic",
    "kind": "country",
    "category": "historical-country",
    "name": "República de Weimar",
    "period": "República de Weimar, 1919–ruptura democrática de 1933; norma fundadora assinada em 11/08/1919, não prática uniforme até 1933.",
    "vec": {
      "est": 60,
      "rep": 60,
      "pod": 40,
      "imi": 40,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 60,
      "mor": 60,
      "tec": 50
    },
    "rationale": "A Carta de 1919 combina representação eleita, participação dos estados e garantias civis com poderes presidenciais de emergência.",
    "caveats": "A nomeação de Hitler em 30/01/1933 marca a ruptura política, não uma revogação integral da Carta nesse dia. Art.48 permite suspensões com controle parlamentar; art.118 admite censura cinematográfica/proteção juvenil. Casamento e família recebem deveres tradicionais; corporações religiosas públicas, tributos e pagamentos estatais permanecem nos arts.137/138/173. O art.113 protege minorias linguísticas internas, não entrada migratória. O art.121 equipara desenvolvimento dos filhos, sem estabelecer todo direito sucessório; divórcio ou direitos LGBT não foram inferidos.",
    "sources": [
      {
        "title": "The Weimar Constitution (August 11, 1919) — German History in Documents and Images",
        "url": "https://germanhistorydocs.org/en/weimar-germany-1918-1933/the-weimar-constitution-august-11-1919",
        "note": "Fonte primária traduzida e contexto acadêmico: república, federalismo, sufrágio universal, parlamento, direitos e cores nacionais."
      },
      {
        "title": "Weimarer Reichsverfassung1919 — transcrição alemã com alterações distinguidas",
        "url": "https://www.verfassungen.de/de19-33/verf19.htm",
        "note": "Republicação privada do texto primário alemão; corpo realmente lido:5–18,22,41–54,60–74,109–128,135–141. Emendas e comentários editoriais visíveis são separados das cláusulas fundadoras; não edição oficial ou auditoria de todas alterações/prática."
      },
      {
        "title": "The Weimar Constitution (August11,1919) — GHDI, cotejo adicional",
        "url": "https://germanhistorydocs.org/en/weimar-germany-1918-1933/the-weimar-constitution-august-11-1919",
        "note": "Seleção primária traduzida por Snyder1958, realmente reaberta/lida;109/114–124/128/135/137 e instituições. Seleção omite113 e abrevia cláusulas; complemento alemão usado para linguagem e contrapontos, não tradução integral."
      },
      {
        "title": "Weimarer Reichsverfassung1919 — transcrição alemã com alterações distinguidas",
        "url": "https://www.verfassungen.de/de19-33/verf19.htm",
        "note": "Leitura documental anterior atribuída. Texto fundador alemão de 1919 em republicação privada; alterações distinguidas. Escopo registrado: Leitura anterior documentada de 5–18/22/41–54/60–74/109–128/135–141; revisão independente selecionada 5/12–18/22/48/54/60–63/74/109–128/135–138 e seleção GHDI. Não nova leitura de todos os artigos."
      },
      {
        "title": "Bundesarchiv — nomeação de Hitler em 1933",
        "url": "https://www.bundesarchiv.de/themen-entdecken/online-entdecken/geschichtsgalerien/30-januar-1933-ernennung-adolf-hitlers-zum-reichskanzler/",
        "note": "30/01/1933: nomeação de Hitler; relato identifica término factual da democracia. Escopo lido: Título e introdução completos: nomeação por Hindenburg, gabinete e dissolução do Reichstag em 01/02. A galeria incorporada informa erro404; a introdução efetivamente recuperada é distinta. Não data de revogação integral da Carta."
      }
    ],
    "evidence": {
      "est": "high",
      "rep": "high",
      "rel": "medium",
      "pod": "medium",
      "imi": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "The Weimar Constitution (August 11, 1919) — German History in Documents and Images"
        ],
        "rationale": "Competências estaduais e representação territorial sustentam federalismo moderado. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Primazia nacional e poderes centrais impedem equiparar a confederação soberana; prática não auditada."
      },
      "rep": {
        "sourceTitles": [
          "The Weimar Constitution (August 11, 1919) — German History in Documents and Images"
        ],
        "rationale": "Instituições eletivas sustentam democracia moderada com contrapoder presidencial explícito. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não certifica eleições e prática durante crises finais; artigo48 impede inferência irrestrita."
      },
      "rel": {
        "sourceTitles": [
          "The Weimar Constitution (August 11, 1919) — German History in Documents and Images"
        ],
        "rationale": "Separação institucional expressa sustenta laicidade moderada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Seleção não cobre todos os privilégios fiscais das igrejas ou prática; não presume irreligiosidade popular."
      },
      "pod": {
        "sourceTitles": [
          "Weimarer Reichsverfassung1919 — transcrição alemã com alterações distinguidas"
        ],
        "rationale": "Proteções constitucionais gerais de processo, privacidade, expressão e associação sustentam direção normativa moderada à liberdade. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Direitos de domicílio/expressão/reunião se referem a alemães. Art48 permite suspender114/115/117/118/123/124/153 com ciência imediata e anulação pelo Reichstag. Cinema e proteção juvenil118 admitem censura/exceções; não liberdades efetivas1930–1933."
      },
      "imi": {
        "sourceTitles": [
          "Weimarer Reichsverfassung1919 — transcrição alemã com alterações distinguidas"
        ],
        "rationale": "Proteção geral das minorias linguísticas na educação, administração e justiça sustenta faceta multicultural moderada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Art113 trata grupos linguísticos internos do Reich; não ingresso aberto, cidadania automática ou igualdade cultural efetiva.111–112 tratam deslocamento/emigração de alemães, não entrada universal de estrangeiros."
      },
      "mor": {
        "sourceTitles": [
          "Weimarer Reichsverfassung1919 — transcrição alemã com alterações distinguidas"
        ],
        "rationale": "Igualdade entre sexos em direitos civis, casamento e cargos, combinada com condições iguais para filhos não matrimoniais, sustenta direção progressista moderada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: 119 protege casamento como base familiar e propagação nacional;118 admite restrições para moral/juventude.121 exige igualdade de condições de desenvolvimento, não declara todos direitos sucessórios iguais. Não se infere divórcio, direitos LGBT ou prática social inclusiva."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "moderate-first",
        "confidence": "high",
        "rationale": "Competências estaduais e representação territorial sustentam federalismo moderado.",
        "uncertainty": "Primazia nacional e poderes centrais impedem equiparar a confederação soberana; prática não auditada.",
        "reviewedOn": "2026-10-07",
        "claims": [
          {
            "sourceTitle": "The Weimar Constitution (August 11, 1919) — German History in Documents and Images",
            "locator": "Arts. 5, 12, 60–63 e 74",
            "statement": "Estados exercem poderes próprios e participam da legislação nacional; competências do Reich e intervenção central limitam autonomia.",
            "basis": "norm",
            "publishedDate": "1919-08-11",
            "accessedDate": "2026-10-07"
          }
        ],
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
        "confidence": "high",
        "rationale": "Instituições eletivas sustentam democracia moderada com contrapoder presidencial explícito.",
        "uncertainty": "Não certifica eleições e prática durante crises finais; artigo48 impede inferência irrestrita.",
        "reviewedOn": "2026-10-07",
        "claims": [
          {
            "sourceTitle": "The Weimar Constitution (August 11, 1919) — German History in Documents and Images",
            "locator": "Arts. 17, 22, 41, 48, 50 e 54",
            "statement": "Voto igual de homens e mulheres, representação proporcional e confiança parlamentar coexistem com Presidência forte e emergência controlável pelo Reichstag.",
            "basis": "norm",
            "publishedDate": "1919-08-11",
            "accessedDate": "2026-10-07"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "rel": {
        "axis": "rel",
        "position": "moderate-first",
        "confidence": "medium",
        "rationale": "Separação institucional expressa sustenta laicidade moderada.",
        "uncertainty": "Seleção não cobre todos os privilégios fiscais das igrejas ou prática; não presume irreligiosidade popular.",
        "reviewedOn": "2026-10-07",
        "claims": [
          {
            "sourceTitle": "The Weimar Constitution (August 11, 1919) — German History in Documents and Images",
            "locator": "Arts. 135 e 137",
            "statement": "Liberdade de consciência e culto é declarada e não há igreja estatal.",
            "basis": "norm",
            "publishedDate": "1919-08-11",
            "accessedDate": "2026-10-07"
          }
        ],
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
        "reviewedOn": "2026-10-08",
        "rationale": "Proteções constitucionais gerais de processo, privacidade, expressão e associação sustentam direção normativa moderada à liberdade.",
        "uncertainty": "Direitos de domicílio/expressão/reunião se referem a alemães. Art48 permite suspender114/115/117/118/123/124/153 com ciência imediata e anulação pelo Reichstag. Cinema e proteção juvenil118 admitem censura/exceções; não liberdades efetivas1930–1933.",
        "claims": [
          {
            "sourceTitle": "Weimarer Reichsverfassung1919 — transcrição alemã com alterações distinguidas",
            "locator": "Arts.114–118,123–124; contraponto48",
            "statement": "Protege liberdade pessoal com informação no dia seguinte e objeção, domicílio, comunicações, expressão e associação; emergência suspende garantias sob controle parlamentar.",
            "basis": "norm",
            "publishedDate": "1919-08-11",
            "accessedDate": "2026-10-08"
          }
        ],
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
        "reviewedOn": "2026-10-08",
        "relatedQuestionIds": [
          "imigracao_02",
          "imigracao_08"
        ],
        "rationale": "Proteção geral das minorias linguísticas na educação, administração e justiça sustenta faceta multicultural moderada.",
        "uncertainty": "Art113 trata grupos linguísticos internos do Reich; não ingresso aberto, cidadania automática ou igualdade cultural efetiva.111–112 tratam deslocamento/emigração de alemães, não entrada universal de estrangeiros.",
        "claims": [
          {
            "sourceTitle": "Weimarer Reichsverfassung1919 — transcrição alemã com alterações distinguidas",
            "locator": "Art.113; contrapontos110–112",
            "statement": "Legislação e administração não devem impedir desenvolvimento dos grupos de outra língua, especialmente língua materna no ensino, administração interna e justiça.",
            "basis": "norm",
            "publishedDate": "1919-08-11",
            "accessedDate": "2026-10-08"
          }
        ],
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
        "reviewedOn": "2026-10-08",
        "rationale": "Igualdade entre sexos em direitos civis, casamento e cargos, combinada com condições iguais para filhos não matrimoniais, sustenta direção progressista moderada.",
        "uncertainty": "119 protege casamento como base familiar e propagação nacional;118 admite restrições para moral/juventude.121 exige igualdade de condições de desenvolvimento, não declara todos direitos sucessórios iguais. Não se infere divórcio, direitos LGBT ou prática social inclusiva.",
        "claims": [
          {
            "sourceTitle": "Weimarer Reichsverfassung1919 — transcrição alemã com alterações distinguidas",
            "locator": "Arts.109,119,121,128; contraponto118",
            "statement": "Sexos têm iguais direitos civis; casamento baseia-se em igualdade; lei deve equiparar desenvolvimento de filhos não matrimoniais; exceções contra funcionárias são abolidas.",
            "basis": "norm",
            "publishedDate": "1919-08-11",
            "accessedDate": "2026-10-08"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      }
    },
    "documentaryReview": {
      "status": "author-reviewed-bounded-claims",
      "reviewedOn": "2026-10-07",
      "independentReview": "pending",
      "scope": "Texto fundador de 1919; duração da República 1919–1933 não é prática inalterada."
    },
    "unknownAxisReasons": {
      "dip": "Passagens realmente revisadas não estabelecem direção suficiente para este construto;50 desconhecido, sem graduação.",
      "int": "Passagens realmente revisadas não estabelecem direção suficiente para este construto;50 desconhecido, sem graduação.",
      "eco": "Passagens realmente revisadas não estabelecem direção suficiente para este construto;50 desconhecido, sem graduação.",
      "con": "Passagens realmente revisadas não estabelecem direção suficiente para este construto;50 desconhecido, sem graduação.",
      "com": "Passagens realmente revisadas não estabelecem direção suficiente para este construto;50 desconhecido, sem graduação.",
      "tec": "Passagens realmente revisadas não estabelecem direção suficiente para este construto;50 desconhecido, sem graduação."
    },
    "documentaryReview10": {
      "status": "author-reviewed-bounded-claims",
      "independentReview": "accepted-bounded-primary-claims",
      "reviewedOn": "2026-10-08",
      "scope": "Passagens primárias fundadoras1919 cotejadas independentemente para três novos e três códigos herdados; não prática1930–1933. Guards verificados pelo autor, não rerun independente."
    }
  },
  "yugoslavia-1974": {
    "id": "yugoslavia-1974",
    "kind": "country",
    "category": "historical-country",
    "name": "República Socialista Federativa da Iugoslávia",
    "period": "Ordem constitucional de 21/02/1974 no período Tito, até sua morte em 04/05/1980; a federação e a Carta continuaram depois.",
    "vec": {
      "est": 60,
      "rep": 20,
      "pod": 50,
      "imi": 40,
      "dip": 50,
      "int": 50,
      "eco": 80,
      "con": 60,
      "com": 50,
      "rel": 60,
      "mor": 50,
      "tec": 50
    },
    "rationale": "A Carta de 1974 articula autogestão, propriedade social e participação republicana, sob direção política da Liga dos Comunistas.",
    "caveats": "Propriedade social não equivale simplesmente a propriedade estatal. Planejamento concertado e mecanismos de mercado coexistem; os direitos culturais e a separação religiosa têm limites socialistas e de ordem pública. O término de 1980 é da liderança pessoal de Tito, não da federação. Não alinhamento não equivale a não intervenção; defesa territorial não comprova pacifismo. Não houve cotejo integral de um fac-símile oficial.",
    "sources": [
      {
        "title": "Constituição da República Socialista Federativa da Iugoslávia, 1974 — Wikisource",
        "url": "https://en.wikisource.org/wiki/Constitution_of_Yugoslavia_(1974)",
        "note": "Fonte primária para estrutura federal (arts. 1–5), bandeira (art. 7), propriedade social e autogestão (art. 10) e papel dirigente da Liga dos Comunistas."
      },
      {
        "title": "Constituent Acts of Yugoslavia — Archives of Yugoslavia",
        "url": "https://arhivyu.applied.rs/en/leksikon-jugoslavije/konstitutivni_akti_jugoslavije",
        "note": "Contexto arquivístico sobre a constituição de 1974 e o sistema de delegados."
      },
      {
        "title": "Foreign Relations of the United States: Tito and nonalignment — Office of the Historian",
        "url": "https://history.state.gov/historicaldocuments/frus1969-76v29/d220",
        "note": "Registro diplomático contemporâneo da política de não alinhamento."
      },
      {
        "title": "Constituição da República Socialista Federativa da Iugoslávia, 1974 — Wikisource",
        "url": "https://en.wikisource.org/wiki/Constitution_of_Yugoslavia_(1974)",
        "note": "Leitura documental anterior atribuída. Tradução colaborativa do texto1974; não fac-símile oficial. Escopo registrado: Atestações anteriores: princípios III/IV/VIII,69–71/244/273–281; complemento170–174/202–203 e contexto176–185. Autoria pessoal da reconciliação anterior não resolvida; revisão selecionada atribuída nos relatórios."
      },
      {
        "title": "Assembleia Nacional sérvia — história após a Segunda Guerra",
        "url": "https://www.parlament.gov.rs/narodna-skupstina-/istorijat/posle-drugog-svetskog-rata.938.html?action=print",
        "note": "21/02/1974: adoção da Constituição federal. Escopo lido: Parágrafo completo sobre aprovação pelas assembleias e adoção federal21/02; Carta sérvia25/02 distinta. A abertura direta posterior falhou; leitura do parágrafo indexado completo, não só título."
      },
      {
        "title": "Museu da Iugoslávia — catálogo MS_50_A_39",
        "url": "https://vaju.muzej-jugoslavije.org/fotografija/698301d9ae1d9252610c01af",
        "note": "04/05/1980: morte de Tito em Ljubljana; funeral08/05. Escopo lido: Metadados e descrição27 completos. Descrição institucional retrospectiva de fotografia, não certificado de óbito."
      }
    ],
    "evidence": {
      "est": "medium",
      "rep": "medium",
      "eco": "medium",
      "con": "medium",
      "imi": "medium",
      "rel": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Constituição da República Socialista Federativa da Iugoslávia, 1974 — Wikisource"
        ],
        "rationale": "Participação territorial substantiva sustenta federalismo moderado. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não atribui soberania independente às repúblicas nem mede poder informal de Tito; cotejo oficial pendente."
      },
      "rep": {
        "sourceTitles": [
          "Constituição da República Socialista Federativa da Iugoslávia, 1974 — Wikisource"
        ],
        "rationale": "Direção partidária institucional e limites do sistema sustentam orientação autocrática forte. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Autogestão e delegações são contrapontos; não imputamos fraude ou ausência de toda participação pela palavra socialista."
      },
      "eco": {
        "sourceTitles": [
          "Constituição da República Socialista Federativa da Iugoslávia, 1974 — Wikisource"
        ],
        "rationale": "Base produtiva não privada sustenta o polo social/público, com ressalva da autogestão. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Propriedade social não é juridicamente propriedade estatal: o próprio texto veda apropriação por comunidades e indivíduos; construto público/privado é aproximação delimitada."
      },
      "con": {
        "sourceTitles": [
          "Constituição da República Socialista Federativa da Iugoslávia, 1974 — Wikisource"
        ],
        "rationale": "Planejamento concertado com mercado sustenta direção planejadora moderada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não equipara autogestão ao planejamento central soviético; execução e força dos acordos não auditadas."
      },
      "imi": {
        "sourceTitles": [
          "Constituição da República Socialista Federativa da Iugoslávia, 1974 — Wikisource"
        ],
        "rationale": "Proteção explícita de pluralidade cultural e linguística sustenta multiculturalismo moderado. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não presume imigração geral livre; asilo seletivo, realização por lei e art.203 protege ordem socialista e moral pública. Prática não auditada."
      },
      "rel": {
        "sourceTitles": [
          "Constituição da República Socialista Federativa da Iugoslávia, 1974 — Wikisource"
        ],
        "rationale": "Separação institucional explícita sustenta direção secular moderada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Financiamento permitido impede alegação de separação financeira absoluta; proibição de uso político, limite escolar e ordem socialista restringem liberdades. Não presume irreligiosidade social."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "moderate-first",
        "confidence": "medium",
        "rationale": "Participação territorial substantiva sustenta federalismo moderado.",
        "uncertainty": "Não atribui soberania independente às repúblicas nem mede poder informal de Tito; cotejo oficial pendente.",
        "reviewedOn": "2026-10-07",
        "claims": [
          {
            "sourceTitle": "Constituição da República Socialista Federativa da Iugoslávia, 1974 — Wikisource",
            "locator": "Arts. 244, 273–279 e 281",
            "statement": "Repúblicas/províncias participam de decisões federais e concordam com volume orçamentário; centro conserva poderes enumerados e supervisão de execução.",
            "basis": "norm",
            "publishedDate": "1974-02-21",
            "accessedDate": "2026-10-07"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "rep": {
        "axis": "rep",
        "position": "strong-second",
        "confidence": "medium",
        "rationale": "Direção partidária institucional e limites do sistema sustentam orientação autocrática forte.",
        "uncertainty": "Autogestão e delegações são contrapontos; não imputamos fraude ou ausência de toda participação pela palavra socialista.",
        "reviewedOn": "2026-10-07",
        "claims": [
          {
            "sourceTitle": "Constituição da República Socialista Federativa da Iugoslávia, 1974 — Wikisource",
            "locator": "Princípios fundamentais IV e VIII; art. 321",
            "statement": "Liga comunista é força dirigente e integra Presidência por cargo; delegações e revogabilidade operam dentro do sistema socialista protegido.",
            "basis": "norm",
            "publishedDate": "1974-02-21",
            "accessedDate": "2026-10-07"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 20,
        "range": [
          10,
          25
        ]
      },
      "eco": {
        "axis": "eco",
        "position": "strong-first",
        "confidence": "medium",
        "rationale": "Base produtiva não privada sustenta o polo social/público, com ressalva da autogestão.",
        "uncertainty": "Propriedade social não é juridicamente propriedade estatal: o próprio texto veda apropriação por comunidades e indivíduos; construto público/privado é aproximação delimitada.",
        "reviewedOn": "2026-10-07",
        "claims": [
          {
            "sourceTitle": "Constituição da República Socialista Federativa da Iugoslávia, 1974 — Wikisource",
            "locator": "Princípios fundamentais III; arts. 10 e 64–68",
            "statement": "Propriedade social é base da produção, gerida por trabalhadores; atividade pessoal e propriedade agrícola limitada coexistem.",
            "basis": "norm",
            "publishedDate": "1974-02-21",
            "accessedDate": "2026-10-07"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "con": {
        "axis": "con",
        "position": "moderate-first",
        "confidence": "medium",
        "rationale": "Planejamento concertado com mercado sustenta direção planejadora moderada.",
        "uncertainty": "Não equipara autogestão ao planejamento central soviético; execução e força dos acordos não auditadas.",
        "reviewedOn": "2026-10-07",
        "claims": [
          {
            "sourceTitle": "Constituição da República Socialista Federativa da Iugoslávia, 1974 — Wikisource",
            "locator": "Arts. 69–71; princípios III",
            "statement": "Organizações adotam planos e os coordenam por acordos com planos sociais; a produção também realiza valor no mercado.",
            "basis": "norm",
            "publishedDate": "1974-02-21",
            "accessedDate": "2026-10-07"
          }
        ],
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
        "rationale": "Proteção explícita de pluralidade cultural e linguística sustenta multiculturalismo moderado.",
        "uncertainty": "Não presume imigração geral livre; asilo seletivo, realização por lei e art.203 protege ordem socialista e moral pública. Prática não auditada.",
        "relatedQuestionIds": [
          "imigracao_02",
          "imigracao_08"
        ],
        "reviewedOn": "2026-10-07",
        "claims": [
          {
            "sourceTitle": "Constituição da República Socialista Federativa da Iugoslávia, 1974 — Wikisource",
            "locator": "Arts.170–171,202–203",
            "statement": "Cidadãos podem escolher nacionalidade, expressar cultura e usar língua; nacionalidades têm uso oficial e ensino próprio nas repúblicas/províncias; asilo é garantido a perseguidos por causas especificadas.",
            "basis": "norm",
            "publishedDate": "1974-02-21",
            "accessedDate": "2026-10-07"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "rel": {
        "axis": "rel",
        "position": "moderate-first",
        "confidence": "medium",
        "rationale": "Separação institucional explícita sustenta direção secular moderada.",
        "uncertainty": "Financiamento permitido impede alegação de separação financeira absoluta; proibição de uso político, limite escolar e ordem socialista restringem liberdades. Não presume irreligiosidade social.",
        "relatedQuestionIds": [
          "religiao_01",
          "religiao_03"
        ],
        "reviewedOn": "2026-10-07",
        "claims": [
          {
            "sourceTitle": "Constituição da República Socialista Federativa da Iugoslávia, 1974 — Wikisource",
            "locator": "Art.174; limite art.203",
            "statement": "Fé é assunto privado e comunidades religiosas são separadas do Estado; comunidade social pode financiá-las e escolas religiosas são limitadas à formação clerical.",
            "basis": "norm",
            "publishedDate": "1974-02-21",
            "accessedDate": "2026-10-07"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      }
    },
    "documentaryReview": {
      "status": "author-reviewed-bounded-claims",
      "reviewedOn": "2026-10-07",
      "independentReview": "accepted-bounded-primary-claims",
      "scope": "Direitos linguísticos e separação religiosa na carta1974, dentro do recorte Tito1974–1980."
    },
    "unknownAxisReasons": {
      "pod": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Cotejo oficial integral pendente; todas as inferências médias. Não alinhamento não equivale a não intervenção e defesa territorial não é pacifismo. Eixos sem passagens revisadas permanecem desconhecidos.",
      "dip": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Cotejo oficial integral pendente; todas as inferências médias. Não alinhamento não equivale a não intervenção e defesa territorial não é pacifismo. Eixos sem passagens revisadas permanecem desconhecidos.",
      "int": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Cotejo oficial integral pendente; todas as inferências médias. Não alinhamento não equivale a não intervenção e defesa territorial não é pacifismo. Eixos sem passagens revisadas permanecem desconhecidos.",
      "com": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Cotejo oficial integral pendente; todas as inferências médias. Não alinhamento não equivale a não intervenção e defesa territorial não é pacifismo. Eixos sem passagens revisadas permanecem desconhecidos.",
      "mor": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Cotejo oficial integral pendente; todas as inferências médias. Não alinhamento não equivale a não intervenção e defesa territorial não é pacifismo. Eixos sem passagens revisadas permanecem desconhecidos.",
      "tec": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Cotejo oficial integral pendente; todas as inferências médias. Não alinhamento não equivale a não intervenção e defesa territorial não é pacifismo. Eixos sem passagens revisadas permanecem desconhecidos."
    }
  },
  "ussr-1977": {
    "id": "ussr-1977",
    "kind": "country",
    "category": "historical-country",
    "name": "União Soviética — período Brejnev",
    "period": "Carta adotada em 07/10/1977 no período Brejnev, até sua morte em 10/11/1982; não término da União Soviética.",
    "vec": {
      "est": 60,
      "rep": 20,
      "pod": 50,
      "imi": 40,
      "dip": 50,
      "int": 50,
      "eco": 80,
      "con": 80,
      "com": 50,
      "rel": 60,
      "mor": 50,
      "tec": 50
    },
    "rationale": "A Carta de 1977 estabelece federação com ampla competência central, direção partidária e direitos culturais e religiosos condicionados.",
    "caveats": "Competência residual republicana e consentimento territorial coexistem com supremacia central dos arts.73–74. A garantia cultural não comprova imigração aberta; separação religiosa não certifica toda prática. A tradução inglesa de1985 foi comparada apenas em passagens selecionadas; a Carta continuou após1982. Direitos declarados e propaganda pacífica não comprovam liberdade ou não intervenção efetivas; identidade comunista não determina sozinha os demais eixos.",
    "sources": [
      {
        "title": "Constituição da URSS, 1977 — tradução integral em inglês",
        "url": "https://www.marxists.org/history/ussr/government/constitution/1977/constitution-ussr-1977.pdf",
        "note": "Fonte primária traduzida para partido dirigente, direitos declarados, propriedade e economia planificada."
      },
      {
        "title": "Soviet Union: A Country Study — Library of Congress",
        "url": "https://tile.loc.gov/storage-services/master/frd/frdcstdy/so/sovietunioncount00zick/sovietunioncount00zick.pdf",
        "note": "Estudo histórico sobre centralização, controle estatal da economia e reformas no fim da URSS."
      },
      {
        "title": "The Soviet Invasion of Afghanistan, 1978–1980 — Office of the Historian",
        "url": "https://history.state.gov/milestones/1977-1980/soviet-invasion-afghanistan",
        "note": "Registro histórico sobre a intervenção militar soviética no Afeganistão."
      },
      {
        "title": "Конституция СССР — редакция 7 октября 1977, первичный текст в Гарант",
        "url": "https://constitution.garant.ru/history/ussr-rsfsr/1977/red_1977/5478732/",
        "note": "Texto primário russo na edição original1977 efetivamente lido: arts.3/6,36–39,45,52,70–80. Гарант é republicação em arquivo jurídico comercial, não edição governamental oficial."
      },
      {
        "title": "1977 Constitution of the USSR — Bucknell, tradução Novosti1985, partesII/III",
        "url": "https://www.departments.bucknell.edu/Russian/const/77cons02.html",
        "note": "PartesII e III efetivamente lidas; ParteIII em https://www.departments.bucknell.edu/Russian/const/77cons03.html. Rodapé identifica traduçãoNovostiMoscow1985 e páginaRobertBeard1996; títuloHTML deII diz1936 erroneamente. As cláusulas codificadas foram cotejadas com original1977 russo; não se presume toda tradução1985 idêntica à norma1977."
      },
      {
        "title": "Конституция СССР — редакция 7 октября 1977, первичный текст в Гарант",
        "url": "https://constitution.garant.ru/history/ussr-rsfsr/1977/red_1977/5478732/",
        "note": "Leitura documental anterior atribuída. Original1977 em arquivo jurídico comercial; inglêsNovosti1985 usado apenas como paralelo selecionado. Escopo registrado: Leitura anterior registrada de 3/6/36–39/45/52/70–80 no russo; cotejo BucknellII/III nas passagens pertinentes. Revisão não recertifica aqui os códigos econômicos ou políticos herdados."
      },
      {
        "title": "FRUS — documento71, nota editorial4",
        "url": "https://history.state.gov/historicaldocuments/frus1981-88v04/d71",
        "note": "10/11/1982: morte de Brejnev. Escopo lido: Nota4 integral, linha123. Data em nota editorial institucional, não afirmação contemporânea do corpo do memorando nem data de extinção do Estado."
      }
    ],
    "evidence": {
      "rep": "medium",
      "eco": "high",
      "con": "high",
      "est": "medium",
      "imi": "medium",
      "rel": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constituição da URSS, 1977 — tradução integral em inglês"
        ],
        "rationale": "Supremacia partidária institucional sustenta direção autocrática forte no desenho. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Sem auditoria de pleitos; conselhos e participação declarada são contrapontos, não prova de pluralismo."
      },
      "eco": {
        "sourceTitles": [
          "Constituição da URSS, 1977 — tradução integral em inglês"
        ],
        "rationale": "Predomínio social normativo sustenta propriedade pública forte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Cooperativa não equivale a administração estatal; não mede ativos reais nem nega bens privados pessoais."
      },
      "con": {
        "sourceTitles": [
          "Constituição da URSS, 1977 — tradução integral em inglês"
        ],
        "rationale": "Planejamento nacional explícito sustenta direção forte sem negar incentivos empresariais. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Não mede implementação; lucro de contabilidade não converte desenho em mercado irrestrito."
      },
      "est": {
        "sourceTitles": [
          "Конституция СССР — редакция 7 октября 1977, первичный текст в Гарант"
        ],
        "rationale": "Competências territoriais próprias e consentimento republicano sustentam federalismo normativo moderado, com predominância central delimitada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Norma não demonstra autonomia prática nem saída efetiva: centralismo democrático3, direção partidária6, amplas competências federais73 e prevalência74 limitam o desenho."
      },
      "imi": {
        "sourceTitles": [
          "Конституция СССР — редакция 7 октября 1977, первичный текст в Гарант"
        ],
        "rationale": "Garantia normativa de línguas nacionais na instrução e no uso público sustenta dimensão multicultural moderada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Somente dimensão cultural/linguística, não entrada migratória irrestrita ou igualdade observada. Patriotismo soviético/convergência36, asilo politicamente seletivo38 e interesses do Estado39 são contrapontos."
      },
      "rel": {
        "sourceTitles": [
          "Конституция СССР — редакция 7 октября 1977, первичный текст в Гарант"
        ],
        "rationale": "Separação geral explícita entre igreja/Estado e escola/igreja sustenta orientação secular moderada no desenho jurídico. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Constituição permite propaganda ateísta e condiciona direitos aos interesses estatais39; direção marxista partidária6 e garantias textuais não demonstram neutralidade ou ausência de perseguição efetiva."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "strong-second",
        "confidence": "medium",
        "rationale": "Supremacia partidária institucional sustenta direção autocrática forte no desenho.",
        "uncertainty": "Sem auditoria de pleitos; conselhos e participação declarada são contrapontos, não prova de pluralismo.",
        "reviewedOn": "2026-10-07",
        "claims": [
          {
            "sourceTitle": "Constituição da URSS, 1977 — tradução integral em inglês",
            "locator": "Arts. 2–6; PDF pp. 14–16",
            "statement": "Soberania popular formal é subordinada à direção política do Partido Comunista.",
            "basis": "norm",
            "publishedDate": "1977-10-07",
            "accessedDate": "2026-10-07"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 20,
        "range": [
          10,
          25
        ]
      },
      "eco": {
        "axis": "eco",
        "position": "strong-first",
        "confidence": "high",
        "rationale": "Predomínio social normativo sustenta propriedade pública forte.",
        "uncertainty": "Cooperativa não equivale a administração estatal; não mede ativos reais nem nega bens privados pessoais.",
        "reviewedOn": "2026-10-07",
        "claims": [
          {
            "sourceTitle": "Constituição da URSS, 1977 — tradução integral em inglês",
            "locator": "Arts. 10–13 e 17; PDF pp. 16–19",
            "statement": "Propriedade estatal e cooperativa é fundamento econômico; setores centrais são estatais, mas bens pessoais e trabalho individual são permitidos.",
            "basis": "norm",
            "publishedDate": "1977-10-07",
            "accessedDate": "2026-10-07"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "con": {
        "axis": "con",
        "position": "strong-first",
        "confidence": "high",
        "rationale": "Planejamento nacional explícito sustenta direção forte sem negar incentivos empresariais.",
        "uncertainty": "Não mede implementação; lucro de contabilidade não converte desenho em mercado irrestrito.",
        "reviewedOn": "2026-10-07",
        "claims": [
          {
            "sourceTitle": "Constituição da URSS, 1977 — tradução integral em inglês",
            "locator": "Art. 16; PDF p. 19",
            "statement": "Complexo econômico integrado é dirigido por planos estatais com iniciativa empresarial e incentivos de lucro/custo.",
            "basis": "norm",
            "publishedDate": "1977-10-07",
            "accessedDate": "2026-10-07"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "est": {
        "axis": "est",
        "position": "moderate-first",
        "confidence": "medium",
        "reviewedOn": "2026-10-08",
        "rationale": "Competências territoriais próprias e consentimento republicano sustentam federalismo normativo moderado, com predominância central delimitada.",
        "uncertainty": "Norma não demonstra autonomia prática nem saída efetiva: centralismo democrático3, direção partidária6, amplas competências federais73 e prevalência74 limitam o desenho.",
        "claims": [
          {
            "sourceTitle": "Конституция СССР — редакция 7 октября 1977, первичный текст в Гарант",
            "locator": "Arts.70–80; contrapontos3,6,73–74",
            "statement": "Repúblicas conservam poderes fora da competência federal, constituições próprias, participação federal e consentimento territorial; centro coordena política/economia e sua lei prevalece.",
            "basis": "norm",
            "publishedDate": "1977-10-07",
            "accessedDate": "2026-10-08"
          }
        ],
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
        "reviewedOn": "2026-10-08",
        "rationale": "Garantia normativa de línguas nacionais na instrução e no uso público sustenta dimensão multicultural moderada.",
        "uncertainty": "Somente dimensão cultural/linguística, não entrada migratória irrestrita ou igualdade observada. Patriotismo soviético/convergência36, asilo politicamente seletivo38 e interesses do Estado39 são contrapontos.",
        "relatedQuestionIds": [
          "imigracao_02",
          "imigracao_08"
        ],
        "claims": [
          {
            "sourceTitle": "Конституция СССР — редакция 7 октября 1977, первичный текст в Гарант",
            "locator": "Arts.36,45; contrapontos37–39",
            "statement": "Igualdade entre nacionalidades inclui língua materna e línguas de outros povos; educação pode ocorrer na língua materna. Asilo é seletivo e direitos se subordinam a interesses estatais.",
            "basis": "norm",
            "publishedDate": "1977-10-07",
            "accessedDate": "2026-10-08"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "rel": {
        "axis": "rel",
        "position": "moderate-first",
        "confidence": "medium",
        "reviewedOn": "2026-10-08",
        "rationale": "Separação geral explícita entre igreja/Estado e escola/igreja sustenta orientação secular moderada no desenho jurídico.",
        "uncertainty": "Constituição permite propaganda ateísta e condiciona direitos aos interesses estatais39; direção marxista partidária6 e garantias textuais não demonstram neutralidade ou ausência de perseguição efetiva.",
        "claims": [
          {
            "sourceTitle": "Конституция СССР — редакция 7 октября 1977, первичный текст в Гарант",
            "locator": "Art.52; contrapontos6,39",
            "statement": "Carta separa igreja do Estado e escola da igreja, protege professar qualquer religião ou nenhuma, culto e propaganda ateísta, e proíbe hostilidade religiosa.",
            "basis": "norm",
            "publishedDate": "1977-10-07",
            "accessedDate": "2026-10-08"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      }
    },
    "documentaryReview": {
      "status": "author-reviewed-bounded-claims",
      "reviewedOn": "2026-10-07",
      "independentReview": "pending",
      "scope": "Desenho normativo original de 1977 no período Brejnev, 1977–1982."
    },
    "unknownAxisReasons": {
      "pod": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Federalismo declarado e centralização partidária precisam de análise própria: est desconhecido. Direitos e propaganda pacífica não provam liberdades ou não intervenção efetivas. Não inferimos secularismo, moral ou entusiasmo tecnológico da identidade comunista.",
      "dip": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Federalismo declarado e centralização partidária precisam de análise própria: est desconhecido. Direitos e propaganda pacífica não provam liberdades ou não intervenção efetivas. Não inferimos secularismo, moral ou entusiasmo tecnológico da identidade comunista.",
      "int": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Federalismo declarado e centralização partidária precisam de análise própria: est desconhecido. Direitos e propaganda pacífica não provam liberdades ou não intervenção efetivas. Não inferimos secularismo, moral ou entusiasmo tecnológico da identidade comunista.",
      "com": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Federalismo declarado e centralização partidária precisam de análise própria: est desconhecido. Direitos e propaganda pacífica não provam liberdades ou não intervenção efetivas. Não inferimos secularismo, moral ou entusiasmo tecnológico da identidade comunista.",
      "mor": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Federalismo declarado e centralização partidária precisam de análise própria: est desconhecido. Direitos e propaganda pacífica não provam liberdades ou não intervenção efetivas. Não inferimos secularismo, moral ou entusiasmo tecnológico da identidade comunista.",
      "tec": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Federalismo declarado e centralização partidária precisam de análise própria: est desconhecido. Direitos e propaganda pacífica não provam liberdades ou não intervenção efetivas. Não inferimos secularismo, moral ou entusiasmo tecnológico da identidade comunista."
    },
    "documentaryReview09": {
      "status": "author-reviewed-bounded-claims",
      "independentReview": "accepted-bounded-primary-claims",
      "reviewedOn": "2026-10-08",
      "scope": "Somente acréscimos est/imi/rel, norma original1977 no recorte Brejnev1977–1982. Não recertifica três códigos herdados nem prática histórica integral."
    }
  },
  "italy-postwar-republic": {
    "id": "italy-postwar-republic",
    "kind": "country",
    "category": "historical-country",
    "name": "Itália — Primeira República",
    "period": "República parlamentar do pós-guerra: norma original de 27/12/1947, vigente em 01/01/1948; crise da ordem partidária de 1992–1994, sem fim jurídico da República.",
    "vec": {
      "est": 60,
      "rep": 60,
      "pod": 40,
      "imi": 50,
      "dip": 40,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 40,
      "mor": 40,
      "tec": 50
    },
    "rationale": "A Carta fundadora institui república parlamentar com autonomias regionais, direitos civis e relações religiosas reguladas pelos Pactos de Latrão.",
    "caveats": "Primeira República é periodização política:1992–1994 é transição partidária, não revogação da Constituição. A descrição normativa mantém o texto fundador, sem importar os Pactos revistos em1984. Dever feminino familiar e casamento têm contrapontos de igualdade; emergências, dever militar e limites dos direitos permanecem. A arquitetura regional inclui competências legislativas e fiscais próprias, sob controles nacionais significativos e execução não auditada. O HTML oficial original foi lido; cotejo visual do scan e download falharam.",
    "sources": [
      {
        "title": "Constituição da República Italiana (1948)",
        "url": "https://www.senato.it/istituzione/la-costituzione",
        "note": "Documento primário ou registro de arquivo relacionado ao período República parlamentar do pós-guerra, 1948–1992; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Camera dei Deputati — Assembleia Constituinte",
        "url": "https://storia.camera.it/istituzione/assemblea-costituente",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      },
      {
        "title": "Constituição italiana — Gazette original27/12/1947, versão1",
        "url": "https://www.gazzettaufficiale.it/atto/vediMenuHTML?atto.codiceRedazionale=047U0001&atto.dataPubblicazioneGazzetta=1947-12-27&tipoSerie=serie_generale&tipoVigenza=originario",
        "note": "Fonte oficial original selecionada e artigos HTML caricaArticolo versão1 efetivamente lidos, não consolidado atual. Arts1/3/5/7–8/11/13–15/17–18/21/24–25/27/29–30/37/48–49/52/55–56/58–59/78/94/116–119/122–123/126–128 e transiçõesXII/XVIII. Scan16p abriu sem texto/imagem certificável; curl403, nenhum cotejo fac-símile alegado."
      },
      {
        "title": "Pactos lateranenses1929 — texto primário Vaticano",
        "url": "https://press.vatican.va/roman_curia/secretariat_state/archivio/documents/rc_seg-st_19290211_patti-lateranensi_it.html",
        "note": "Corpo treaty1–27 e concordato1–45 efetivamente recuperado/lido como contraponto contextual e base de relação religiosa remetida pela Constituição7. Inclui religião estatal treaty1, efeitos conjugais34 e doutrina em educação pública36. Não vigência uniforme até1992 ou texto revisado1984; não transpor rei/corporações fascistas à República."
      },
      {
        "title": "Constituição italiana — Gazette original27/12/1947, versão1",
        "url": "https://www.gazzettaufficiale.it/atto/vediMenuHTML?atto.codiceRedazionale=047U0001&atto.dataPubblicazioneGazzetta=1947-12-27&tipoSerie=serie_generale&tipoVigenza=originario",
        "note": "Leitura documental anterior atribuída. Gazette versão originária1947/vigência1948; Pactos1929 separados de1984. Escopo registrado: Leitura autoral anterior de1/3/5/7–8/11/13–15/17–18/21/24–25/27/29–30/37/48–49/52/55–56/58–59/78/94/116–119/122–123/126–128/XII/XVIII; leitura independente selecionada declarada no relatório. Tratado1/Concordata34/36 cotejados; não inteiro fac-símile."
      },
      {
        "title": "Camera dei Deputati — debate06/07/1998",
        "url": "https://leg13.camera.it/_dati/leg13/lavori/stenografici/sed385/s080.htm",
        "note": "O debate descreve crise1992–1994, alteração eleitoral e transição ainda em curso em1998. Escopo lido: Intervenção de Claudia Mancina, linhas481–495 completas. Fonte primária de discurso parlamentar: interpretação política atribuída, não lei que teria encerrado a República. Não fixa um dia terminal único."
      }
    ],
    "evidence": {
      "est": "medium",
      "rep": "medium",
      "pod": "medium",
      "dip": "medium",
      "rel": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Constituição italiana — Gazette original27/12/1947, versão1"
        ],
        "rationale": "Autonomia política, legislativa e fiscal regional além de delegação de serviços sustenta descentralização moderada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: República una5, competências dentro de princípios estatais e interesses nacionais117; estatutos aprovados por lei nacional123, dissolução126 e oposição/remessa de leis127. Estados especiais116, sem execução imediata integral ou emendas posteriores."
      },
      "rep": {
        "sourceTitles": [
          "Constituição italiana — Gazette original27/12/1947, versão1"
        ],
        "rationale": "Escolha plural renovável e responsabilidade parlamentar sustentam democracia normativa moderada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Senado exige eleitor acima25/candidato40, Câmara25; senadores vitalícios59, restrições civis/penais/morais48 e proibição fascista/transiçãoXII. Não comprova prática de todas coalizões1948–1992."
      },
      "pod": {
        "sourceTitles": [
          "Constituição italiana — Gazette original27/12/1947, versão1"
        ],
        "rationale": "Garantias ordinárias gerais com controle judicial sustentam liberdade normativa moderada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Detenção urgente13com48+48horas de controle, inspeções especiais14, segurança de reuniões17, associaçõessecretas/militares18 e moralidade pública21. Preventiva13, medidassegurança25, pena de morte militar de guerra27, serviço militar52 e poderesguerra78, sem prática criminal uniformemente auditada."
      },
      "dip": {
        "sourceTitles": [
          "Constituição italiana — Gazette original27/12/1947, versão1"
        ],
        "rationale": "Política nacional expressa de renúncia à guerra agressiva sustenta pacifismo normativo moderado. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Defesa sagrada/serviço militar obrigatório52 e deliberação parlamentar de guerra/poderes necessários78. Não ausência de exército, intervenção ou prática de política externa1948–1992."
      },
      "rel": {
        "sourceTitles": [
          "Constituição italiana — Gazette original27/12/1947, versão1",
          "Pactos lateranenses1929 — texto primário Vaticano"
        ],
        "rationale": "Vínculo confessional amplo remetido em1948 sustenta proposta religiosa moderada, com independência de ordens. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Constituição7declara Estado e Igreja independentes/soberanos e8igual liberdade religiosa; não simples teocracia. Não direção uniforme1948–1992: revisão1984e jurisprudência subsequente precisam camada distinta, não lidas integralmente aqui. Conflitos constitucionais e remissão não tornam todo dispositivo monárquico/fascista vigente automaticamente."
      },
      "mor": {
        "sourceTitles": [
          "Constituição italiana — Gazette original27/12/1947, versão1"
        ],
        "rationale": "Direção familiar tradicional expressa em casamento, filiação e função feminina sustenta proposta conservadora moderada, além de uma ocorrência setorial. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Igualdade moral/jurídica dos cônjuges29, dever de ambos os pais inclusive filhos não matrimoniais30, igualdade sexual3/voto48 e direitos/pagamento laboral37. Não indissolubilidade, papel exclusivamente doméstico ou prática de direitos1970/1975 presumidos. Direção aceita em amplitude delimitada após revisão independente; não prática integral."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "moderate-first",
        "confidence": "medium",
        "reviewedOn": "2026-10-08",
        "claims": [
          {
            "sourceTitle": "Constituição italiana — Gazette original27/12/1947, versão1",
            "locator": "117–119/122–123;contrapontos5/116/126–128",
            "statement": "Regiões têm legislação própria em matérias enumeradas, patrimônio/tributos e direção governamental eleita por conselhos.",
            "basis": "norm",
            "publishedDate": "1947-12-27; vigência1948-01-01",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Autonomia política, legislativa e fiscal regional além de delegação de serviços sustenta descentralização moderada.",
        "uncertainty": "República una5, competências dentro de princípios estatais e interesses nacionais117; estatutos aprovados por lei nacional123, dissolução126 e oposição/remessa de leis127. Estados especiais116, sem execução imediata integral ou emendas posteriores.",
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
        "reviewedOn": "2026-10-08",
        "claims": [
          {
            "sourceTitle": "Constituição italiana — Gazette original27/12/1947, versão1",
            "locator": "48–49/55–56/58/94;contrapontos59/transitóriaXII",
            "statement": "Voto igual secreto de homens e mulheres, partidos livres por método democrático, câmaras diretamente eleitas e governo dependente da confiança de ambas.",
            "basis": "norm",
            "publishedDate": "1947-12-27; vigência1948-01-01",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Escolha plural renovável e responsabilidade parlamentar sustentam democracia normativa moderada.",
        "uncertainty": "Senado exige eleitor acima25/candidato40, Câmara25; senadores vitalícios59, restrições civis/penais/morais48 e proibição fascista/transiçãoXII. Não comprova prática de todas coalizões1948–1992.",
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
        "reviewedOn": "2026-10-08",
        "claims": [
          {
            "sourceTitle": "Constituição italiana — Gazette original27/12/1947, versão1",
            "locator": "13–15/17–18/21/24–25/27;contrapontos52/78/transitóriaXII",
            "statement": "Protege liberdade, privacidade, expressão sem censura, defesa em todos estágios e presunção até condenação definitiva.",
            "basis": "norm",
            "publishedDate": "1947-12-27; vigência1948-01-01",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Garantias ordinárias gerais com controle judicial sustentam liberdade normativa moderada.",
        "uncertainty": "Detenção urgente13com48+48horas de controle, inspeções especiais14, segurança de reuniões17, associaçõessecretas/militares18 e moralidade pública21. Preventiva13, medidassegurança25, pena de morte militar de guerra27, serviço militar52 e poderesguerra78, sem prática criminal uniformemente auditada.",
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
        "reviewedOn": "2026-10-08",
        "claims": [
          {
            "sourceTitle": "Constituição italiana — Gazette original27/12/1947, versão1",
            "locator": "11;contrapontos52/78",
            "statement": "Repudia guerra ofensiva à liberdade alheia e como resolução de controvérsias, favorecendo organização internacional pacífica.",
            "basis": "norm",
            "publishedDate": "1947-12-27; vigência1948-01-01",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Política nacional expressa de renúncia à guerra agressiva sustenta pacifismo normativo moderado.",
        "uncertainty": "Defesa sagrada/serviço militar obrigatório52 e deliberação parlamentar de guerra/poderes necessários78. Não ausência de exército, intervenção ou prática de política externa1948–1992.",
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
        "reviewedOn": "2026-10-08",
        "claims": [
          {
            "sourceTitle": "Constituição italiana — Gazette original27/12/1947, versão1",
            "locator": "7–8",
            "statement": "Relação com Igreja católica regulada por Pactos Lateranenses, mantendo distinção de ordens e livre organização de outras confissões.",
            "basis": "norm",
            "publishedDate": "1947-12-27; vigência1948-01-01",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Pactos lateranenses1929 — texto primário Vaticano",
            "locator": "Tratado1;Concordato34/36",
            "statement": "Pactos vinculam confissão estatal, efeitos civis matrimoniais e doutrina católica na instrução pública.",
            "basis": "norm",
            "publishedDate": "1929-02-11; remissão constitucional1947art7",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Vínculo confessional amplo remetido em1948 sustenta proposta religiosa moderada, com independência de ordens.",
        "uncertainty": "Constituição7declara Estado e Igreja independentes/soberanos e8igual liberdade religiosa; não simples teocracia. Não direção uniforme1948–1992: revisão1984e jurisprudência subsequente precisam camada distinta, não lidas integralmente aqui. Conflitos constitucionais e remissão não tornam todo dispositivo monárquico/fascista vigente automaticamente.",
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
        "reviewedOn": "2026-10-08",
        "claims": [
          {
            "sourceTitle": "Constituição italiana — Gazette original27/12/1947, versão1",
            "locator": "29–30/37;contrapontos3/48",
            "statement": "Família natural fundada no casamento e unidade familiar limitam igualdade conjugal; tutela não matrimonial compatível com família legítima e função feminina familiar essencial.",
            "basis": "norm",
            "publishedDate": "1947-12-27; vigência1948-01-01",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Direção familiar tradicional expressa em casamento, filiação e função feminina sustenta proposta conservadora moderada, além de uma ocorrência setorial.",
        "uncertainty": "Igualdade moral/jurídica dos cônjuges29, dever de ambos os pais inclusive filhos não matrimoniais30, igualdade sexual3/voto48 e direitos/pagamento laboral37. Não indissolubilidade, papel exclusivamente doméstico ou prática de direitos1970/1975 presumidos. Direção aceita em amplitude delimitada após revisão independente; não prática integral.",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      }
    },
    "documentaryReview18": {
      "status": "accepted-bounded-whole-profile",
      "independentReview": "accepted-six-selected-primary-claims",
      "reviewedOn": "2026-10-08",
      "scope": "Root aceitou seis normas após revisão independente: Gazetteversão1 arts3/5/7–8/11/13–15/17–18/21/24–25/27/29–30/37/48–49/52/55–56/58–59/78/94/116–119/122–123/126–128 eXII/XVIII; VaticanoTratado1/Concordato34/36. Sem scan integral, versões1984 ou todo139artigos."
    },
    "unknownAxisReasons": {
      "imi": "Fonte primária selecionada não estabelece direção suficientemente ampla para este eixo. Legado arquivado integralmente; 50 sem graduação/mapa/código.",
      "int": "Fonte primária selecionada não estabelece direção suficientemente ampla para este eixo. Legado arquivado integralmente; 50 sem graduação/mapa/código.",
      "eco": "Fonte primária selecionada não estabelece direção suficientemente ampla para este eixo. Legado arquivado integralmente; 50 sem graduação/mapa/código.",
      "con": "Fonte primária selecionada não estabelece direção suficientemente ampla para este eixo. Legado arquivado integralmente; 50 sem graduação/mapa/código.",
      "com": "Fonte primária selecionada não estabelece direção suficientemente ampla para este eixo. Legado arquivado integralmente; 50 sem graduação/mapa/código.",
      "tec": "Fonte primária selecionada não estabelece direção suficientemente ampla para este eixo. Legado arquivado integralmente; 50 sem graduação/mapa/código."
    }
  },
  "east-germany-gdr": {
    "id": "east-germany-gdr",
    "kind": "country",
    "category": "historical-country",
    "name": "Alemanha Oriental — RDA",
    "period": "República Democrática Alemã, 07/10/1949–adesão à República Federal em 03/10/1990; norma examinada de 09/04/1968, antes da revisão1974.",
    "vec": {
      "est": 40,
      "rep": 20,
      "pod": 50,
      "imi": 50,
      "dip": 40,
      "int": 50,
      "eco": 80,
      "con": 80,
      "com": 50,
      "rel": 50,
      "mor": 60,
      "tec": 50
    },
    "rationale": "A norma de1968 organiza Estado socialista sob liderança partidária, propriedade pública produtiva e planejamento obrigatório, com direitos e deveres sociais.",
    "caveats": "O desenho de1968 não descreve toda prática1949–1990. Propriedades pessoal e cooperativa, responsabilidade local e eleições formalmente previstas são contrapontos. A proteção de um povo sorábio não foi convertida em direção cultural geral. A republicação registra9abril1968; o índice da Carta1949 remete a6abril, divergência de marcos não resolvida como equivalência. A norma não representa opiniões individuais da população. Consciência privada, isoladamente, não estabelece relação geral entre Estado e religião.",
    "sources": [
      {
        "title": "Constituição da RDA de 1968",
        "url": "https://www.documentarchiv.de/ddr/verfddr.html",
        "note": "Documento primário ou registro de arquivo relacionado ao período República Democrática Alemã, 1949–1990; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Fundação Federal para Estudo da Ditadura SED",
        "url": "https://www.bundesstiftung-aufarbeitung.de/de/recherche/dossiers/deutsche-teilung-deutsche-einheit",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      },
      {
        "title": "RDA1968 — texto constitucional alemão, alterações1974 distinguidas",
        "url": "https://www.verfassungen.de/ddr/verf68.htm",
        "note": "Republicação privada de norma primária, corpo realmente aberto/lido:1–13,19–24,38–43,47–60; alterações1974 marcadas separadamente. Não edição oficial ou cotejo integral da execução1949–1990."
      },
      {
        "title": "RDA1968 — texto constitucional alemão, alterações1974 distinguidas",
        "url": "https://www.verfassungen.de/ddr/verf68.htm",
        "note": "Leitura documental anterior atribuída. Original1968 em republicação alemã privada; referências6/9abril distinguíveis mas relação exata não certificada. Escopo registrado: Leitura anterior autoral e independente de1–13/19–24/38–43/47–60; alterações1974 separadas. Nesta rodada relido cabeçalho09/04/1968 e art.1, sem recertificação integral de códigos."
      },
      {
        "title": "Carta da RDA1949 — cabeçalho e encerramento",
        "url": "https://www.verfassungen.de/ddr/verf49.htm",
        "note": "07/10/1949: data do texto fundador da RDA. Escopo lido: Cabeçalho0–10 e art.144 completos. Não auditoria integral da Carta1949 nem de sua implementação."
      },
      {
        "title": "Governo federal alemão — Tratado de Unificação",
        "url": "https://www.bundesregierung.de/breg-de/service/newsletter-und-abos/bulletin/bulletin-nr-104-90-ss-877-890-vertrag-zwischen-der-bundesrepublik-deutschland-und-der-deutschen-demokratischen-republik-ueber-die-herstellung-der-einheit-deutschlands-783936",
        "note": "Art.1: adesão da RDA à República Federal efetiva03/10/1990; art.3 estende a Lei Fundamental. Escopo lido: Cabeçalho112–113; preâmbulo e arts.1–3,123–190 completos. Texto do tratado em boletim oficial; não leitura integral dos anexos ou de todos os artigos."
      }
    ],
    "evidence": {
      "est": "medium",
      "rep": "medium",
      "eco": "medium",
      "con": "medium",
      "mor": "medium",
      "dip": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "RDA1968 — texto constitucional alemão, alterações1974 distinguidas"
        ],
        "rationale": "Centralismo e exclusividade legislativa nacionais sustentam direção unitária moderada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Comunidades locais têm responsabilidade própria41–43 protegida por lei; não se nega toda descentralização ou mede poder informal."
      },
      "rep": {
        "sourceTitles": [
          "RDA1968 — texto constitucional alemão, alterações1974 distinguidas"
        ],
        "rationale": "Direção partidária inscrita no desenho sustenta polo autocrático forte. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: 22/54 declaram sufrágio universal/secreto e participação; não se infere fraude de todas eleições nem auditoria de pluralismo efetivo."
      },
      "eco": {
        "sourceTitles": [
          "RDA1968 — texto constitucional alemão, alterações1974 distinguidas"
        ],
        "rationale": "Base produtiva geral e exclusividade pública multissetorial sustentam direção pública forte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: 10/13 incluem cooperativas/organizações, não apenas Estado;11 preserva propriedade pessoal/herança. Não mede ativos efetivos."
      },
      "con": {
        "sourceTitles": [
          "RDA1968 — texto constitucional alemão, alterações1974 distinguidas"
        ],
        "rationale": "Regra obrigatória da economia nacional sustenta planejamento forte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Responsabilidade empresarial/local não é eliminada; não auditoria da execução ou eficácia dos planos."
      },
      "mor": {
        "sourceTitles": [
          "RDA1968 — texto constitucional alemão, alterações1974 distinguidas"
        ],
        "rationale": "Regras combinadas de igualdade civil, laboral e familiar sustentam progressismo normativo moderado. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: 38 protege casamento/maternidade e educação de filhos como cidadãos conscientes do Estado; não divórcio, direitos LGBT ou igual prática inferidos."
      },
      "dip": {
        "sourceTitles": [
          "RDA1968 — texto constitucional alemão, alterações1974 distinguidas"
        ],
        "rationale": "Proibição geral de agressão e objetivo de desarmamento sustentam pacifismo normativo moderado. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: 7 prevê defesa socialista e aliança militar;23 impõe deveres defensivos. Norma1968, não descrição da intervenção soviética ou conduta efetiva da RDA."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "moderate-second",
        "confidence": "medium",
        "reviewedOn": "2026-10-08",
        "rationale": "Centralismo e exclusividade legislativa nacionais sustentam direção unitária moderada.",
        "uncertainty": "Comunidades locais têm responsabilidade própria41–43 protegida por lei; não se nega toda descentralização ou mede poder informal.",
        "claims": [
          {
            "sourceTitle": "RDA1968 — texto constitucional alemão, alterações1974 distinguidas",
            "locator": "Arts.41–43,47–49",
            "statement": "Centralismo democrático rege estrutura; Volkskammer é único legislador e administração local atua sob planejamento central.",
            "basis": "norm",
            "publishedDate": "1968-04-09",
            "accessedDate": "2026-10-08"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "rep": {
        "axis": "rep",
        "position": "strong-second",
        "confidence": "medium",
        "reviewedOn": "2026-10-08",
        "rationale": "Direção partidária inscrita no desenho sustenta polo autocrático forte.",
        "uncertainty": "22/54 declaram sufrágio universal/secreto e participação; não se infere fraude de todas eleições nem auditoria de pluralismo efetivo.",
        "claims": [
          {
            "sourceTitle": "RDA1968 — texto constitucional alemão, alterações1974 distinguidas",
            "locator": "Arts.1,3,22,48,54",
            "statement": "Partido marxista-leninista dirige Estado; Frente reúne partidos/organizações para objetivos socialistas; eleições constitucionais ocorrem nesse arranjo.",
            "basis": "norm",
            "publishedDate": "1968-04-09",
            "accessedDate": "2026-10-08"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 20,
        "range": [
          10,
          25
        ]
      },
      "eco": {
        "axis": "eco",
        "position": "strong-first",
        "confidence": "medium",
        "reviewedOn": "2026-10-08",
        "rationale": "Base produtiva geral e exclusividade pública multissetorial sustentam direção pública forte.",
        "uncertainty": "10/13 incluem cooperativas/organizações, não apenas Estado;11 preserva propriedade pessoal/herança. Não mede ativos efetivos.",
        "claims": [
          {
            "sourceTitle": "RDA1968 — texto constitucional alemão, alterações1974 distinguidas",
            "locator": "Arts.9–13",
            "statement": "Economia funda-se na propriedade socialista; minas, energia, grandes indústrias, bancos, transportes e comunicações são públicos, vedada propriedade privada.",
            "basis": "norm",
            "publishedDate": "1968-04-09",
            "accessedDate": "2026-10-08"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "con": {
        "axis": "con",
        "position": "strong-first",
        "confidence": "medium",
        "reviewedOn": "2026-10-08",
        "rationale": "Regra obrigatória da economia nacional sustenta planejamento forte.",
        "uncertainty": "Responsabilidade empresarial/local não é eliminada; não auditoria da execução ou eficácia dos planos.",
        "claims": [
          {
            "sourceTitle": "RDA1968 — texto constitucional alemão, alterações1974 distinguidas",
            "locator": "Art.9(3);41–43",
            "statement": "Economia inteira é planejada, com direção estatal central e responsabilidade própria dos produtores e órgãos locais.",
            "basis": "norm",
            "publishedDate": "1968-04-09",
            "accessedDate": "2026-10-08"
          }
        ],
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
        "reviewedOn": "2026-10-08",
        "rationale": "Regras combinadas de igualdade civil, laboral e familiar sustentam progressismo normativo moderado.",
        "uncertainty": "38 protege casamento/maternidade e educação de filhos como cidadãos conscientes do Estado; não divórcio, direitos LGBT ou igual prática inferidos.",
        "claims": [
          {
            "sourceTitle": "RDA1968 — texto constitucional alemão, alterações1974 distinguidas",
            "locator": "Arts.20(2),24(1),38",
            "statement": "Igualdade de sexos cobre vida social, estatal e pessoal; igual salário e igualdade conjugal coexistem com apoio a mães e pais solteiros.",
            "basis": "norm",
            "publishedDate": "1968-04-09",
            "accessedDate": "2026-10-08"
          }
        ],
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
        "reviewedOn": "2026-10-08",
        "rationale": "Proibição geral de agressão e objetivo de desarmamento sustentam pacifismo normativo moderado.",
        "uncertainty": "7 prevê defesa socialista e aliança militar;23 impõe deveres defensivos. Norma1968, não descrição da intervenção soviética ou conduta efetiva da RDA.",
        "claims": [
          {
            "sourceTitle": "RDA1968 — texto constitucional alemão, alterações1974 distinguidas",
            "locator": "Arts.6(4),8(1); contrapontos7,23",
            "statement": "Estado busca desarmamento geral e veda guerra de conquista ou emprego de forças contra liberdade de outro povo.",
            "basis": "norm",
            "publishedDate": "1968-04-09",
            "accessedDate": "2026-10-08"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      }
    },
    "documentaryReview11": {
      "status": "author-reviewed-bounded-claims",
      "independentReview": "accepted-bounded-primary-claims",
      "reviewedOn": "2026-10-08",
      "scope": "Seis construtos1968cotejados independentemente em corpo primário alemão; imi rejeitado por alcance insuficiente. Não prática1949–1990 ou cotejo integral1974."
    },
    "unknownAxisReasons": {
      "pod": "Sem passagens suficientes para orientar este construto;50 desconhecido.",
      "imi": "Sem passagens suficientes para orientar este construto;50 desconhecido.",
      "int": "Sem passagens suficientes para orientar este construto;50 desconhecido.",
      "com": "Sem passagens suficientes para orientar este construto;50 desconhecido.",
      "rel": "Sem passagens suficientes para orientar este construto;50 desconhecido.",
      "tec": "Sem passagens suficientes para orientar este construto;50 desconhecido."
    }
  },
  "india-nehru": {
    "id": "india-nehru",
    "kind": "country",
    "category": "historical-country",
    "name": "Índia — primeiros governos de Nehru",
    "period": "Primeiros governos de Nehru, 15/08/1947–27/05/1964; norma republicana adotada em 26/11/1949, vigência geral em 26/01/1950.",
    "vec": {
      "est": 60,
      "rep": 60,
      "pod": 40,
      "imi": 40,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 60,
      "mor": 50,
      "tec": 50
    },
    "rationale": "A Carta fundadora estabelece representação eleitoral, competências da União e dos estados, garantias civis e proteção de culturas e religiões.",
    "caveats": "1947–1950 precede a República: o período do governo não é confundido com a vigência da Carta. Preventiva, emergência, competências centrais e restrições religiosas limitam garantias. Art.15 original termina no§3, sem importar§4posterior; voto original exige21anos. Não se infere orientação de toda economia nem doutrina familiar geral dessas passagens. Diretrizes distributivas não medem domínio produtivo de toda economia ou um plano executado.",
    "sources": [
      {
        "title": "Constituição da Índia (1950)",
        "url": "https://legislative.gov.in/constitution-of-india/",
        "note": "Documento primário ou registro de arquivo relacionado ao período República federal e planejamento, 1947–1964; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Parlamento da Índia — Jawaharlal Nehru",
        "url": "https://sansad.in/ls/about/prime-minister/jawaharlal-nehru",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      },
      {
        "title": "GazetteExtraordinary26novembro1949 — Constituição indiana original",
        "url": "https://egazette.gov.in/WriteReadData/1949/E-2358-1949-0000-109779.pdf",
        "note": "Corpos primários recuperados efetivamente por indexação:12–14/15(1–3)/16(1–4)/23–28/29(1)/36–38/39(a–d)/245–246. Abertura integral502/400timeout; não scan completo visualmente cotejado. Índice contém erros de cabeçalho; eventual15(4) indexado não é certificado como original e foi excluído. Não texto consolidado2007/2024."
      },
      {
        "title": "Gazeta indiana1949 — OCR/transcrição Wikisource por páginas originais",
        "url": "https://en.wikisource.org/wiki/Index:The_Constitution_of_India_1949_(Gazette_Notification_Version).djvu",
        "note": "Original com scan vinculado, não emendas posteriores. Corpos efetivamente lidos:1–3,17–22,26–29(1),78–85,245–249,325–326,352–356,358–359;39(a–d)cotejo. Revisor independente leu páginas1–3/8–14/19–20/33–35/116–117/158/171–176, incluindo formulários somente lidos. Algumas páginas8–12/14/20não publicadas: OCRprecarregado acessível em formulário somente lido, sem gravação. Texto não revisado, erros OCR visíveis; imagem vinculada não certificada visualmente."
      },
      {
        "title": "Gazeta indiana1949 — OCR/transcrição Wikisource por páginas originais",
        "url": "https://en.wikisource.org/wiki/Index:The_Constitution_of_India_1949_(Gazette_Notification_Version).djvu",
        "note": "Leitura documental anterior atribuída. Original1949/vigência1950 em OCR da Gazette; não consolidação2007 ou preâmbulo1976. Escopo registrado: Atestação anterior original: revisão independente OCR somente leitura páginas1–3/8–14/19–20/33–35/116–117/158/171–176, sem certificação visual; autora245–246 indexados na Gazette.15(1–3),16,25–29 e245–249 distintos de posteriores."
      },
      {
        "title": "Gabinete do primeiro-ministro indiano — Nehru",
        "url": "https://www.pmindia.gov.in/en/former_pm/shri-jawaharlal-nehru/",
        "note": "15/08/1947–27/05/1964: período de Nehru como primeiro-ministro. Escopo lido: Título e período63–65 completos. Período pessoal do governo; a data atual do portal não atualiza retroativamente a Constituição."
      }
    ],
    "evidence": {
      "est": "medium",
      "rep": "medium",
      "pod": "medium",
      "imi": "medium",
      "rel": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Gazeta indiana1949 — OCR/transcrição Wikisource por páginas originais"
        ],
        "rationale": "Competências estaduais constitucionalmente próprias sustentam federalismo moderado. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Centro tem poderes residuais248, alteração territorial3, intervenção356 e superação249por maioria qualificada no Conselho; partesC/Dnão igualautonomia. Não prática1947–1964."
      },
      "rep": {
        "sourceTitles": [
          "Gazeta indiana1949 — OCR/transcrição Wikisource por páginas originais"
        ],
        "rationale": "Representação nacional renovável e sufrágio amplo sustentam democracia normativa moderada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Senado tem12indicados e eleição indireta; qualificações/desqualificações e emergência83permitem extensão temporária. Não qualidade dos pleitos medida."
      },
      "pod": {
        "sourceTitles": [
          "Gazeta indiana1949 — OCR/transcrição Wikisource por páginas originais"
        ],
        "rationale": "Conjunto amplo de garantias ordinárias sustenta liberdade moderada, com exceções substanciais. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: 22exclui inimigos estrangeiros/detenção preventiva das garantias22(1–2), admite além3meses e sigilo; emergência suspende19e tutela judicial359. Não efetividade1962ou toda prática."
      },
      "imi": {
        "sourceTitles": [
          "Gazeta indiana1949 — OCR/transcrição Wikisource por páginas originais"
        ],
        "rationale": "Proteção cultural geral aberta a qualquer segmento sustenta multiculturalismo moderado. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Âmbito cidadãos, não livre entrada ou todas línguas oficiais;19(5)permite restrições protetivas de tribos. Não igualdade executada."
      },
      "rel": {
        "sourceTitles": [
          "Gazeta indiana1949 — OCR/transcrição Wikisource por páginas originais"
        ],
        "rationale": "Regras gerais de autonomia/confissão e limites ao custeio/imposição sustentam direção secular moderada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Ordem/moral/saúde e reforma social limitam; ensino religioso previsto por trust estatal excepciona28(1). Não secular1976retrojetado ou separação absoluta."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "moderate-first",
        "confidence": "medium",
        "reviewedOn": "2026-10-08",
        "rationale": "Competências estaduais constitucionalmente próprias sustentam federalismo moderado.",
        "uncertainty": "Centro tem poderes residuais248, alteração territorial3, intervenção356 e superação249por maioria qualificada no Conselho; partesC/Dnão igualautonomia. Não prática1947–1964.",
        "claims": [
          {
            "sourceTitle": "Gazeta indiana1949 — OCR/transcrição Wikisource por páginas originais",
            "locator": "1–3;245–249;contrapontos352–356",
            "statement": "Legislaturas estaduaisA/B têm competência exclusiva da lista estadual; União tem listas próprias e concorrentes.",
            "basis": "norm",
            "publishedDate": "1949-11-26",
            "accessedDate": "2026-10-08"
          }
        ],
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
        "reviewedOn": "2026-10-08",
        "rationale": "Representação nacional renovável e sufrágio amplo sustentam democracia normativa moderada.",
        "uncertainty": "Senado tem12indicados e eleição indireta; qualificações/desqualificações e emergência83permitem extensão temporária. Não qualidade dos pleitos medida.",
        "claims": [
          {
            "sourceTitle": "Gazeta indiana1949 — OCR/transcrição Wikisource por páginas originais",
            "locator": "79–85;325–326,páginas33–35/158",
            "statement": "Câmara popular é diretamente eleita, mandatos limitados; adultos cidadãos a partir21anos votam sem distinção religiosa/casta/sexo.",
            "basis": "norm",
            "publishedDate": "1949-11-26",
            "accessedDate": "2026-10-08"
          }
        ],
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
        "reviewedOn": "2026-10-08",
        "rationale": "Conjunto amplo de garantias ordinárias sustenta liberdade moderada, com exceções substanciais.",
        "uncertainty": "22exclui inimigos estrangeiros/detenção preventiva das garantias22(1–2), admite além3meses e sigilo; emergência suspende19e tutela judicial359. Não efetividade1962ou toda prática.",
        "claims": [
          {
            "sourceTitle": "Gazeta indiana1949 — OCR/transcrição Wikisource por páginas originais",
            "locator": "17–22;352,358–359,páginas9–12/171/175–176",
            "statement": "Direitos gerais de expressão/associação/mobilidade e proteções penais/detentivas limitam poder ordinário.",
            "basis": "norm",
            "publishedDate": "1949-11-26",
            "accessedDate": "2026-10-08"
          }
        ],
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
        "reviewedOn": "2026-10-08",
        "rationale": "Proteção cultural geral aberta a qualquer segmento sustenta multiculturalismo moderado.",
        "uncertainty": "Âmbito cidadãos, não livre entrada ou todas línguas oficiais;19(5)permite restrições protetivas de tribos. Não igualdade executada.",
        "relatedQuestionIds": [
          "imigracao_02",
          "imigracao_08"
        ],
        "claims": [
          {
            "sourceTitle": "Gazeta indiana1949 — OCR/transcrição Wikisource por páginas originais",
            "locator": "29(1);contraponto19(5)",
            "statement": "Qualquer segmento cidadão com idioma/escrita/cultura próprios tem direito à conservação.",
            "basis": "norm",
            "publishedDate": "1949-11-26",
            "accessedDate": "2026-10-08"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "rel": {
        "axis": "rel",
        "position": "moderate-first",
        "confidence": "medium",
        "reviewedOn": "2026-10-08",
        "rationale": "Regras gerais de autonomia/confissão e limites ao custeio/imposição sustentam direção secular moderada.",
        "uncertainty": "Ordem/moral/saúde e reforma social limitam; ensino religioso previsto por trust estatal excepciona28(1). Não secular1976retrojetado ou separação absoluta.",
        "claims": [
          {
            "sourceTitle": "Gazeta indiana1949 — OCR/transcrição Wikisource por páginas originais",
            "locator": "25–28",
            "statement": "Liberdade de crença e autonomia de denominações coexistem com vedação fiscal religiosa e ensino religioso público condicionado.",
            "basis": "norm",
            "publishedDate": "1949-11-26",
            "accessedDate": "2026-10-08"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      }
    },
    "documentaryReview16": {
      "status": "author-reviewed-bounded-claims",
      "independentReview": "accepted-bounded-primary-and-identity",
      "reviewedOn": "2026-10-08",
      "scope": "Cinco normas aceitas pelo Root após leitura independente do original Wikisource/OCR por páginas1–3/8–14/19–20/33–35/116–117/158/171–176. Revisor não reabriu PDFoficial integral; autoria indexada separada. Mor rejeitado por alcance. Sem scan visual, prática ou emendas reconstruídas."
    },
    "unknownAxisReasons": {
      "dip": "Sem passagem original suficiente para direção geral;50desconhecido.",
      "int": "Sem passagem original suficiente para direção geral;50desconhecido.",
      "eco": "Sem passagem original suficiente para direção geral;50desconhecido.",
      "con": "Sem passagem original suficiente para direção geral;50desconhecido.",
      "com": "Sem passagem original suficiente para direção geral;50desconhecido.",
      "mor": "Sem passagem original suficiente para direção geral;50desconhecido.",
      "tec": "Sem passagem original suficiente para direção geral;50desconhecido."
    }
  },
  "north-korea-kim-il-sung": {
    "id": "north-korea-kim-il-sung",
    "kind": "country",
    "category": "historical-country",
    "name": "Coreia do Norte — governo Kim Il-sung",
    "period": "Coreia do Norte sob Kim Il-sung, 09/09/1948–08/07/1994; norma examinada exclusivamente de 27/12/1972.",
    "vec": {
      "est": 40,
      "rep": 50,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 80,
      "con": 80,
      "com": 60,
      "rel": 50,
      "mor": 60,
      "tec": 50
    },
    "rationale": "A Carta de1972 prescreve organização socialista centralizada, propriedade estatal e cooperativa, plano e deveres sociais e familiares.",
    "caveats": "República e regime continuaram após a morte do dirigente. A Carta1972 não comprova práticas1948–1994; propriedades pessoal/cooperativa e eleições/partidos previstos são contrapontos. A versão inglesa colaborativa não identifica tradutor/edição certificada; o paralelo coreano tem escopo autoral restrito, sem certificação linguística independente. A liberdade de crença do art.54 não estabelece sozinha relação geral entre Estado e religião; não se inferem crenças individuais.",
    "sources": [
      {
        "title": "Constituição da RPDC (1972)",
        "url": "https://www.constituteproject.org/constitution/Peoples_Republic_of_Korea_1972",
        "note": "Documento primário ou registro de arquivo relacionado ao período República Popular, 1948–1994; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Office of the Historian — North Korea",
        "url": "https://history.state.gov/countries/korea-north",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      },
      {
        "title": "RPDC1972 — transcrição primária inglesa Wikisource",
        "url": "https://en.wikisource.org/wiki/Socialist_Constitution_of_the_Democratic_People%27s_Republic_of_Korea_(1972)",
        "note": "Corpo original1972 realmente aberto/lido, capítulosI–IV eVII–X relevantes; edição com149artigos distinta das revisões1992/1998/2009. Republicação traduzida sem tradutor/edição-fonte identificados no cabeçalho; não fac-símile oficial, cotejo integral pendente."
      },
      {
        "title": "RPDC1972 — transcrição coreana, texto 제7호",
        "url": "https://ko.wikisource.org/wiki/조선민주주의인민공화국_사회주의헌법_(제7호)",
        "note": "Corpo primário coreano realmente aberto; cotejo delimitado4/9–11/18–22/30–34/51–52/62–63 com inglês. Transcrição colaborativa com erros tipográficos visíveis; não scan governamental ou validação linguística integral."
      },
      {
        "title": "RPDC1972 — transcrição primária inglesa Wikisource",
        "url": "https://en.wikisource.org/wiki/Socialist_Constitution_of_the_Democratic_People%27s_Republic_of_Korea_(1972)",
        "note": "Leitura documental anterior atribuída. Texto27/12/1972 em republicação colaborativa; não revisões1992–2009. Escopo registrado: Leitura anterior inglesa independente: cabeçalho e1–34/49–76/103/109/115–132;133–146 contexto, não todos149. Paralelo coreano autoral4/9–11/18–22/30–34/51–52/62–63, sem atribuir esse exame ao revisor."
      },
      {
        "title": "Defesa Nacional canadense — Comissão da ONU na Coreia",
        "url": "https://www.canada.ca/en/department-national-defence/services/military-history/history-heritage/past-operations/asia-pacific/united-nations-commission-korea.html",
        "note": "09/09/1948: declaração de Estado separado no Norte. Escopo lido: Notas da missão40–48 completas, especialmente44. História institucional de operação militar, não verificação de cifras eleitorais de1948."
      },
      {
        "title": "ONU — documento S/1997/514, anexo",
        "url": "https://digitallibrary.un.org/record/240190/files/S_1997_514-EN.pdf",
        "note": "O relato comunica morte de Kim Il-sung às2h de08/07/1994. Escopo lido: Página10, seção4, parágrafo completo sobre iniciativa de1994 e morte após assinatura07/07. Narrativa do próprio governo, linguagem laudatória não adotada; documento hospedado pela ONU não endossa todo o relato. Abertura direta falhou."
      }
    ],
    "evidence": {
      "est": "medium",
      "eco": "medium",
      "con": "medium",
      "com": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "RPDC1972 — transcrição primária inglesa Wikisource"
        ],
        "rationale": "Direção nacional hierárquica e legislador exclusivo sustentam unitarismo moderado. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Assembleias locais eleitas aprovam orçamento/plano e nomeiam autoridades118; não inexistência de toda autonomia administrativa ou prática auditada."
      },
      "eco": {
        "sourceTitles": [
          "RPDC1972 — transcrição primária inglesa Wikisource"
        ],
        "rationale": "Base produtiva geral e papel dirigente estatal expresso sustentam direção pública forte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: 20permite cooperativas de pequenas/médias empresas;21transformação cooperativa depende vontade membros;22bens pessoais e herança. Não ativos reais medidos."
      },
      "con": {
        "sourceTitles": [
          "RPDC1972 — transcrição primária inglesa Wikisource"
        ],
        "rationale": "Plano obrigatório da economia inteira sustenta direção forte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Taean30emprega força coletiva dos produtores, planos locais118/130; não execução eficaz ou eliminação de toda decisão local."
      },
      "com": {
        "sourceTitles": [
          "RPDC1972 — transcrição primária inglesa Wikisource"
        ],
        "rationale": "Objetivo geral das tarifas sustenta protecionismo moderado. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Igualdade e benefício mútuo no comércio são contrapontos; nenhuma taxa média medida, proibição total do comércio ou tarifa atual inferida. Monopólio sozinho não seria suficiente."
      },
      "mor": {
        "sourceTitles": [
          "RPDC1972 — transcrição primária inglesa Wikisource"
        ],
        "rationale": "Igualdade civil/política e participação social combinadas sustentam progressismo normativo moderado. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: 63fortalece família;67–68impõem normas socialistas/coletivismo. Sem igual execução, divórcio, filhos não matrimoniais ou direitos LGBT inferidos."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "moderate-second",
        "confidence": "medium",
        "reviewedOn": "2026-10-08",
        "rationale": "Direção nacional hierárquica e legislador exclusivo sustentam unitarismo moderado.",
        "uncertainty": "Assembleias locais eleitas aprovam orçamento/plano e nomeiam autoridades118; não inexistência de toda autonomia administrativa ou prática auditada.",
        "claims": [
          {
            "sourceTitle": "RPDC1972 — transcrição primária inglesa Wikisource",
            "locator": "Arts.9,73,103(2/5/12),109(1/10),115–132",
            "statement": "Centralismo rege todos órgãos; centro dirige assembleias locais e altera distritos, com cadeia administrativa hierárquica.",
            "basis": "norm",
            "publishedDate": "1972-12-27",
            "accessedDate": "2026-10-08"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "eco": {
        "axis": "eco",
        "position": "strong-first",
        "confidence": "medium",
        "reviewedOn": "2026-10-08",
        "rationale": "Base produtiva geral e papel dirigente estatal expresso sustentam direção pública forte.",
        "uncertainty": "20permite cooperativas de pequenas/médias empresas;21transformação cooperativa depende vontade membros;22bens pessoais e herança. Não ativos reais medidos.",
        "claims": [
          {
            "sourceTitle": "RPDC1972 — transcrição primária inglesa Wikisource",
            "locator": "Arts.18–22",
            "statement": "Meios produtivos são estatais/cooperativos; recursos, fábricas centrais, portos, bancos e transportes pertencem exclusivamente ao Estado.",
            "basis": "norm",
            "publishedDate": "1972-12-27",
            "accessedDate": "2026-10-08"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "con": {
        "axis": "con",
        "position": "strong-first",
        "confidence": "medium",
        "reviewedOn": "2026-10-08",
        "rationale": "Plano obrigatório da economia inteira sustenta direção forte.",
        "uncertainty": "Taean30emprega força coletiva dos produtores, planos locais118/130; não execução eficaz ou eliminação de toda decisão local.",
        "claims": [
          {
            "sourceTitle": "RPDC1972 — transcrição primária inglesa Wikisource",
            "locator": "Arts.30–32,76(9),109(3)",
            "statement": "Economia nacional é planejada; Estado prepara/executa planos unificados/detalhados e orçamento subordinado ao plano.",
            "basis": "norm",
            "publishedDate": "1972-12-27",
            "accessedDate": "2026-10-08"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "com": {
        "axis": "com",
        "position": "moderate-first",
        "confidence": "medium",
        "reviewedOn": "2026-10-08",
        "rationale": "Objetivo geral das tarifas sustenta protecionismo moderado.",
        "uncertainty": "Igualdade e benefício mútuo no comércio são contrapontos; nenhuma taxa média medida, proibição total do comércio ou tarifa atual inferida. Monopólio sozinho não seria suficiente.",
        "claims": [
          {
            "sourceTitle": "RPDC1972 — transcrição primária inglesa Wikisource",
            "locator": "Art.34",
            "statement": "Política tarifária tem objetivo explícito de proteger economia nacional independente, com comércio externo por Estado ou supervisão.",
            "basis": "norm",
            "publishedDate": "1972-12-27",
            "accessedDate": "2026-10-08"
          }
        ],
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
        "reviewedOn": "2026-10-08",
        "rationale": "Igualdade civil/política e participação social combinadas sustentam progressismo normativo moderado.",
        "uncertainty": "63fortalece família;67–68impõem normas socialistas/coletivismo. Sem igual execução, divórcio, filhos não matrimoniais ou direitos LGBT inferidos.",
        "claims": [
          {
            "sourceTitle": "RPDC1972 — transcrição primária inglesa Wikisource",
            "locator": "Arts.51–52,62–63",
            "statement": "Mulheres têm igual status/direitos, sufrágio sem distinção sexual e medidas de emancipação doméstica para participação pública; família e casamento protegidos.",
            "basis": "norm",
            "publishedDate": "1972-12-27",
            "accessedDate": "2026-10-08"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      }
    },
    "documentaryReview12": {
      "status": "author-reviewed-bounded-claims",
      "independentReview": "accepted-bounded-primary-claims",
      "reviewedOn": "2026-10-08",
      "scope": "Revisor leu inglês original1–34/49–76/103/109/115–132;133–146contexto. Não todos149, scan oficial ou certificação linguística coreana. Cinco normas aceitas; rep rejeitado pelo Root frente eleições/partidos explícitos, sem substituição40. Não prática1948–1994 ou versões posteriores."
    },
    "unknownAxisReasons": {
      "rep": "Sem passagens suficientes para orientar este construto;50 desconhecido.",
      "pod": "Sem passagens suficientes para orientar este construto;50 desconhecido.",
      "imi": "Sem passagens suficientes para orientar este construto;50 desconhecido.",
      "dip": "Sem passagens suficientes para orientar este construto;50 desconhecido.",
      "int": "Sem passagens suficientes para orientar este construto;50 desconhecido.",
      "rel": "Sem passagens suficientes para orientar este construto;50 desconhecido.",
      "tec": "Sem passagens suficientes para orientar este construto;50 desconhecido."
    }
  },
  "china-deng-reform": {
    "id": "china-deng-reform",
    "kind": "country",
    "category": "historical-country",
    "name": "China — reformas de Deng Xiaoping",
    "period": "Reforma e abertura, marco de1978 e inflexão1992; norma examinada de04/12/1982, anterior às emendas1988/1993.",
    "vec": {
      "est": 40,
      "rep": 20,
      "pod": 50,
      "imi": 40,
      "dip": 50,
      "int": 50,
      "eco": 80,
      "con": 80,
      "com": 50,
      "rel": 50,
      "mor": 60,
      "tec": 50
    },
    "rationale": "O texto de1982 combina propriedade pública e planejamento obrigatório com atividades individuais e mercado complementar, sob direção socialista.",
    "caveats": "1992 delimita uma inflexão da reforma, não morte de Deng ou fim da República Popular. Não se importa a economia socialista de mercado inscrita depois. Culturas das nacionalidades coexistem com Putonghua; igualdade em toda vida social/familiar tem limite no planejamento familiar compulsório. O catálogoIFES3dezembro diverge da adoção4dezembro declarada no corpo; o corpo é a base normativa. A proteção de crença no art.36 não estabelece sozinha separação geral entre Estado e religião; não se inferem crenças individuais.",
    "sources": [
      {
        "title": "Constituição da República Popular (1982)",
        "url": "https://www.constituteproject.org/constitution/China_1982",
        "note": "Documento primário ou registro de arquivo relacionado ao período Reforma e abertura, 1978–1992; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Office of the Historian — China",
        "url": "https://history.state.gov/milestones/1969-1976/rapprochement-china",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      },
      {
        "title": "Constituição chinesa1982 — AppendixI, fac-símile arquivado IFES",
        "url": "https://www.ifes.org/sites/default/files/migrate/con00014.pdf",
        "note": "PDF28p realmente aberto, texto/OCR primário original4dezembro1982: preâmbulo e1–18/33–54; páginas2–6/9–11 pertinentes. AppendixI reproduz edição traduzida com emendas posteriores separadas ao final; catálogoIFES3dezembro não substitui adoção4dezembro no corpo. OCR defeituoso cotejado com transcrição; não edição oficial chinesa integral."
      },
      {
        "title": "Constituição chinesa original1982 — Wikisource inglês",
        "url": "https://en.wikisource.org/wiki/Constitution_of_the_People%27s_Republic_of_China_(1982)",
        "note": "Corpo primário inglês realmente aberto/lido: preâmbulo1–18/33–54 e cotejo IFES.15ainda planejamento e mercado suplementar; não revisões1993/2004/2018. Transcrição colaborativa, não scan original chinês."
      },
      {
        "title": "Constituição chinesa original1982 — Wikisource inglês",
        "url": "https://en.wikisource.org/wiki/Constitution_of_the_People%27s_Republic_of_China_(1982)",
        "note": "Leitura documental anterior atribuída. Original1982; IFES scan autoral e paraleloWiki de escopo separado. Escopo registrado: Leitura anterior autoraIFES28p: preâmbulo/1–18/33–54 páginas2–6/9–11; revisorIFES403, mas paraleloWiki original preâmbulo/1–18/19/25/30–34/48–54 efetivamente lido. Não nova visitaIFES nesta rodada."
      },
      {
        "title": "Comissão Nacional de Desenvolvimento e Reforma — trajetória da reforma",
        "url": "https://www.ndrc.gov.cn/wsdwhfz/202409/t20240927_1393396.html",
        "note": "1978: Terceiro Plenário abre reforma;1992: viagem de Deng; decisão de1993 distinguida. Escopo lido: Parágrafos27–32 completos. Retrospectiva institucional partidária, não leitura das resoluções originais nem prova de término da liderança em1992."
      }
    ],
    "evidence": {
      "est": "medium",
      "rep": "medium",
      "eco": "medium",
      "con": "medium",
      "imi": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Constituição chinesa1982 — AppendixI, fac-símile arquivado IFES"
        ],
        "rationale": "Unidade e comando central expressos sustentam unitarismo moderado. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: 4estabelece autogoverno regional;3exige iniciativa local;31admite sistemas especiais definidos por lei. Não ausência de descentralização efetiva."
      },
      "rep": {
        "sourceTitles": [
          "Constituição chinesa1982 — AppendixI, fac-símile arquivado IFES"
        ],
        "rationale": "Liderança partidária normativa e limites de sistema sustentam autocracia forte no desenho. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: 34declara voto sem discriminação/3eleições; não auditoria de pleitos ou inferência de fraude. Não usa fórmula de liderança no artigo1adicionada2018."
      },
      "eco": {
        "sourceTitles": [
          "Constituição chinesa1982 — AppendixI, fac-símile arquivado IFES"
        ],
        "rationale": "Base geral produtiva e prioridade estatal expressas sustentam direção pública forte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Coletiva não é apenas estatal;11economiaindividual/13pessoal e herança/18investimento estrangeiro são contrapontos. Norma1982 não maioria real medida."
      },
      "con": {
        "sourceTitles": [
          "Constituição chinesa1982 — AppendixI, fac-símile arquivado IFES"
        ],
        "rationale": "Subordinação geral ao plano obrigatório sustenta planejamento forte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Mercado suplementar15e decisão gerencial empresarial16–17expressos. Não orientação de mercado1993retrojetada ou eficácia do plano inferida."
      },
      "imi": {
        "sourceTitles": [
          "Constituição chinesa1982 — AppendixI, fac-símile arquivado IFES"
        ],
        "rationale": "Proteção geral multicultural/linguística sustenta direção moderada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: 4proíbe divisão/19promovePutonghua nacional;32asilo político discricionário. Não entrada livre ou execução igualitária."
      },
      "mor": {
        "sourceTitles": [
          "Constituição chinesa1982 — AppendixI, fac-símile arquivado IFES"
        ],
        "rationale": "Igualdade abrangente e liberdade conjugal combinadas sustentam progressismo normativo moderado. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: 25/49impõem planejamento familiar;família/parentesco tradicional protegido e dever ético53. Não autonomia reprodutiva, divórcio, LGBT ou execução igualitária inferidos."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "moderate-second",
        "confidence": "medium",
        "reviewedOn": "2026-10-08",
        "rationale": "Unidade e comando central expressos sustentam unitarismo moderado.",
        "uncertainty": "4estabelece autogoverno regional;3exige iniciativa local;31admite sistemas especiais definidos por lei. Não ausência de descentralização efetiva.",
        "claims": [
          {
            "sourceTitle": "Constituição chinesa1982 — AppendixI, fac-símile arquivado IFES",
            "locator": "Preâmbulo;arts.3–4,30–31",
            "statement": "Estado unitário com liderança central unificada; autonomia regional das nacionalidades é integrante do país.",
            "basis": "norm",
            "publishedDate": "1982-12-04",
            "accessedDate": "2026-10-08"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "rep": {
        "axis": "rep",
        "position": "strong-second",
        "confidence": "medium",
        "reviewedOn": "2026-10-08",
        "rationale": "Liderança partidária normativa e limites de sistema sustentam autocracia forte no desenho.",
        "uncertainty": "34declara voto sem discriminação/3eleições; não auditoria de pleitos ou inferência de fraude. Não usa fórmula de liderança no artigo1adicionada2018.",
        "claims": [
          {
            "sourceTitle": "Constituição chinesa1982 — AppendixI, fac-símile arquivado IFES",
            "locator": "Preâmbulo;arts.1–3,34",
            "statement": "Partido Comunista lidera Estado e frente de partidos democráticos/organizações; ditadura popular e proteção do sistema socialista coexistem com eleições declaradas.",
            "basis": "norm",
            "publishedDate": "1982-12-04",
            "accessedDate": "2026-10-08"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 20,
        "range": [
          10,
          25
        ]
      },
      "eco": {
        "axis": "eco",
        "position": "strong-first",
        "confidence": "medium",
        "reviewedOn": "2026-10-08",
        "rationale": "Base geral produtiva e prioridade estatal expressas sustentam direção pública forte.",
        "uncertainty": "Coletiva não é apenas estatal;11economiaindividual/13pessoal e herança/18investimento estrangeiro são contrapontos. Norma1982 não maioria real medida.",
        "claims": [
          {
            "sourceTitle": "Constituição chinesa1982 — AppendixI, fac-símile arquivado IFES",
            "locator": "Arts.6–13,18",
            "statement": "Propriedade pública produtiva é base, Estado força dirigente; economia individual é complemento e propriedade privada pessoal protegida.",
            "basis": "norm",
            "publishedDate": "1982-12-04",
            "accessedDate": "2026-10-08"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "con": {
        "axis": "con",
        "position": "strong-first",
        "confidence": "medium",
        "reviewedOn": "2026-10-08",
        "rationale": "Subordinação geral ao plano obrigatório sustenta planejamento forte.",
        "uncertainty": "Mercado suplementar15e decisão gerencial empresarial16–17expressos. Não orientação de mercado1993retrojetada ou eficácia do plano inferida.",
        "claims": [
          {
            "sourceTitle": "Constituição chinesa1982 — AppendixI, fac-símile arquivado IFES",
            "locator": "Arts.15–17",
            "statement": "Economia planejada nacional admite mercado como regulação suplementar; empresas estatais devem cumprir plano e coletivas aceitar orientação.",
            "basis": "norm",
            "publishedDate": "1982-12-04",
            "accessedDate": "2026-10-08"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "imi": {
        "axis": "imi",
        "position": "moderate-second",
        "confidence": "medium",
        "reviewedOn": "2026-10-08",
        "rationale": "Proteção geral multicultural/linguística sustenta direção moderada.",
        "uncertainty": "4proíbe divisão/19promovePutonghua nacional;32asilo político discricionário. Não entrada livre ou execução igualitária.",
        "relatedQuestionIds": [
          "imigracao_02",
          "imigracao_08"
        ],
        "claims": [
          {
            "sourceTitle": "Constituição chinesa1982 — AppendixI, fac-símile arquivado IFES",
            "locator": "Arts.4,19,32",
            "statement": "Todas nacionalidades podem desenvolver idiomas falados/escritos e preservar/reformar costumes; minorias têm proteção cultural e autonomia.",
            "basis": "norm",
            "publishedDate": "1982-12-04",
            "accessedDate": "2026-10-08"
          }
        ],
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
        "reviewedOn": "2026-10-08",
        "rationale": "Igualdade abrangente e liberdade conjugal combinadas sustentam progressismo normativo moderado.",
        "uncertainty": "25/49impõem planejamento familiar;família/parentesco tradicional protegido e dever ético53. Não autonomia reprodutiva, divórcio, LGBT ou execução igualitária inferidos.",
        "claims": [
          {
            "sourceTitle": "Constituição chinesa1982 — AppendixI, fac-símile arquivado IFES",
            "locator": "Arts.34,48–49;contrapontos25,51,53",
            "statement": "Mulheres têm iguais direitos em vida política/econômica/cultural/social/familiar e igual salário; liberdade conjugal e proteção contra maus-tratos são asseguradas.",
            "basis": "norm",
            "publishedDate": "1982-12-04",
            "accessedDate": "2026-10-08"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      }
    },
    "documentaryReview13": {
      "status": "author-reviewed-bounded-claims",
      "independentReview": "accepted-bounded-primary-claims",
      "reviewedOn": "2026-10-08",
      "scope": "Seis normas originais1982 aceitas: autor leu PDF IFES e paralelo Wiki; revisor leu efetivamente Wiki preâmbulo/1–18/19/25/30–34/48–54. Acesso independente ao IFES falhou e curl403; não certifica scan pelo revisor. Não emendas1993/2018 ou prática integral1978–1992."
    },
    "unknownAxisReasons": {
      "pod": "Sem passagens suficientes para orientar este construto;50 desconhecido.",
      "dip": "Sem passagens suficientes para orientar este construto;50 desconhecido.",
      "int": "Sem passagens suficientes para orientar este construto;50 desconhecido.",
      "com": "Sem passagens suficientes para orientar este construto;50 desconhecido.",
      "rel": "Sem passagens suficientes para orientar este construto;50 desconhecido.",
      "tec": "Sem passagens suficientes para orientar este construto;50 desconhecido."
    }
  },
  "czechoslovakia-socialist-unitary-1960": {
    "id": "czechoslovakia-socialist-unitary-1960",
    "name": "Tchecoslováquia — República Socialista unitária",
    "aliases": [
      "Československá socialistická republika — ordem unitária"
    ],
    "period": "Carta socialista unitária de11/07/1960 até federalização vigente em01/01/1969; norma examinada exclusivamente de1960.",
    "rationale": "A Carta de1960 concentra a ordem socialista no Estado unitário e partido dirigente, com planejamento, propriedade social e direitos condicionados.",
    "caveats": "O texto1960 não audita toda prática. Autonomia eslovaca tem limites de cancelamento no art.41(2), não no inexistente§3. Direitos femininos coexistem com deveres familiares socialistas; proteção de três minorias e currículo científico não foram convertidos em orientação cultural/religiosa geral. A família tradicional do art.26 e deveres socialistas nos arts.34/38 são contrapontos à igualdade dos arts.20/27.",
    "sources": [
      {
        "title": "Ústava Československé socialistické republiky, 1960 — Poslanecká sněmovna",
        "url": "https://www.psp.cz/docs/texts/constitution_1960.html",
        "note": "Transcrição primária oficial da Lei Constitucional nº 100/1960, de 11 de julho, edição original."
      },
      {
        "title": "Ústavní zákon o československé federaci, 1968 — Poslanecká sněmovna",
        "url": "https://www.psp.cz/docs/texts/constitution_1968.html",
        "note": "Lei nº 143/1968: artigo 1 institui federação; artigo 151(1) fixa entrada geral em vigor em 1º de janeiro de 1969."
      },
      {
        "title": "Ústava1960 — PSP, igualdade civil familiar laboral20/27",
        "url": "https://www.psp.cz/docs/texts/constitution_1960.html",
        "note": "Texto primário oficial original100/1960 realmente reaberto/lido19–38; passagens20/26–27 cotejadas para mor. Não prática social integral1960–1968."
      },
      {
        "title": "Ústava Československé socialistické republiky, 1960 — Poslanecká sněmovna",
        "url": "https://www.psp.cz/docs/texts/constitution_1960.html",
        "note": "Leitura documental anterior atribuída. Lei constitucional100/1960 em republicação parlamentar oficial. Escopo registrado: Relatório anterior: leitura independente oficial1–38/41/68/90/96; autoria reabre19–38. Nesta rodada cabeçalho11/07/1960 e trecho originário foram recuperados; sem recertificação integral dos códigos."
      },
      {
        "title": "Câmara dos Deputados tcheca — Lei constitucional143/1968",
        "url": "https://www.psp.cz/docs/texts/constitution_1968.html",
        "note": "Art.1 institui federação; art.151(1) fixa vigência01/01/1969. Escopo lido: Cabeçalho9–15, art.1 completo28–37 e art.151(1)1144–1146. Data de aprovação1968 distinta da transformação efetiva1969; não leitura de todos os artigos ou emendas posteriores."
      }
    ],
    "kind": "country",
    "category": "historical-country",
    "vec": {
      "est": 20,
      "rep": 20,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 80,
      "con": 80,
      "com": 50,
      "rel": 50,
      "mor": 60,
      "tec": 50
    },
    "evidence": {
      "est": "high",
      "rep": "medium",
      "eco": "high",
      "con": "high",
      "mor": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Ústava Československé socialistické republiky, 1960 — Poslanecká sněmovna"
        ],
        "rationale": "Subordinação decisória e legislativa territorial sustenta direção unitária forte, além do simples título do Estado. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Conselho eslovaco e comitês locais mantêm atribuições. Não é descrição da federação posterior nem certificação de todas as alterações de 1968."
      },
      "rep": {
        "sourceTitles": [
          "Ústava Československé socialistické republiky, 1960 — Poslanecká sněmovna"
        ],
        "rationale": "Supremacia partidária constitucional limita a representação plural e sustenta direção autocrática no desenho formal. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Não imputamos fraude ou repressão eleitoral não examinada. Sufrágio declarado é contraponto; não avaliamos como a abertura de 1968 modificou a competição efetiva."
      },
      "eco": {
        "sourceTitles": [
          "Ústava Československé socialistické republiky, 1960 — Poslanecká sněmovna"
        ],
        "rationale": "Predomínio legal explícito de propriedade social nos setores centrais sustenta propriedade pública forte, sem confundi-la com propriedade de todo bem pessoal. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Sem inventário de ativos nem medição da composição econômica efetiva; cooperativas não são idênticas a propriedade administrativa estatal."
      },
      "con": {
        "sourceTitles": [
          "Ústava Československé socialistické republiky, 1960 — Poslanecká sněmovna"
        ],
        "rationale": "Planejamento vinculante multissetorial e integração orçamentária sustentam planejamento forte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Não mede cumprimento real ou discricionariedade empresarial, nem equivale a autarquia comercial."
      },
      "mor": {
        "sourceTitles": [
          "Ústava1960 — PSP, igualdade civil familiar laboral20/27"
        ],
        "rationale": "Igualdade entre sexos na família, trabalho e vida pública, com garantias de oportunidades e participação, sustenta progressismo normativo moderado. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: 26protege casamento/maternidade/família;34/38impõem deveres para sociedade socialista.27proteção maternal não demonstra igual execução ou autonomia reprodutiva; não divórcio/LGBT inferidos."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "strong-second",
        "confidence": "high",
        "relatedQuestionIds": [
          "estrutura_01",
          "estrutura_05"
        ],
        "claims": [
          {
            "sourceTitle": "Ústava Československé socialistické republiky, 1960 — Poslanecká sněmovna",
            "locator": "Art. 1(2), 18, 41(2), 68 e 96",
            "statement": "Estado expressamente unitário e centralismo democrático; autoridades nacionais dirigem órgãos territoriais e podem anular decisões inferiores, inclusive leis do Conselho Nacional Eslovaco.",
            "basis": "norm",
            "publishedDate": "1960-07-11",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Subordinação decisória e legislativa territorial sustenta direção unitária forte, além do simples título do Estado.",
        "uncertainty": "Conselho eslovaco e comitês locais mantêm atribuições. Não é descrição da federação posterior nem certificação de todas as alterações de 1968.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 20,
        "range": [
          10,
          25
        ]
      },
      "rep": {
        "axis": "rep",
        "position": "strong-second",
        "confidence": "medium",
        "relatedQuestionIds": [
          "representacao_01",
          "representacao_15"
        ],
        "claims": [
          {
            "sourceTitle": "Ústava Československé socialistické republiky, 1960 — Poslanecká sněmovna",
            "locator": "Art. 3–6",
            "statement": "A carta declara sufrágio universal e atribui ao Partido Comunista papel dirigente; a Frente Nacional é dirigida pelo partido.",
            "basis": "norm",
            "publishedDate": "1960-07-11",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Supremacia partidária constitucional limita a representação plural e sustenta direção autocrática no desenho formal.",
        "uncertainty": "Não imputamos fraude ou repressão eleitoral não examinada. Sufrágio declarado é contraponto; não avaliamos como a abertura de 1968 modificou a competição efetiva.",
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
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Ústava Československé socialistické republiky, 1960 — Poslanecká sněmovna",
            "locator": "Art. 7–10",
            "statement": "Propriedade estatal e cooperativa formam a base econômica; grandes setores são sociais. Pequena atividade pessoal e bens pessoais permanecem permitidos.",
            "basis": "norm",
            "publishedDate": "1960-07-11",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Predomínio legal explícito de propriedade social nos setores centrais sustenta propriedade pública forte, sem confundi-la com propriedade de todo bem pessoal.",
        "uncertainty": "Sem inventário de ativos nem medição da composição econômica efetiva; cooperativas não são idênticas a propriedade administrativa estatal.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "con": {
        "axis": "con",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Ústava Československé socialistické republiky, 1960 — Poslanecká sněmovna",
            "locator": "Art. 7, 12, 41(1) e 90",
            "statement": "Desenvolvimento econômico segue planos vinculantes; planos de cinco anos têm aprovação legislativa e orçamentos locais se articulam ao planejamento estatal.",
            "basis": "norm",
            "publishedDate": "1960-07-11",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Planejamento vinculante multissetorial e integração orçamentária sustentam planejamento forte.",
        "uncertainty": "Não mede cumprimento real ou discricionariedade empresarial, nem equivale a autarquia comercial.",
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
        "reviewedOn": "2026-10-08",
        "rationale": "Igualdade entre sexos na família, trabalho e vida pública, com garantias de oportunidades e participação, sustenta progressismo normativo moderado.",
        "uncertainty": "26protege casamento/maternidade/família;34/38impõem deveres para sociedade socialista.27proteção maternal não demonstra igual execução ou autonomia reprodutiva; não divórcio/LGBT inferidos.",
        "claims": [
          {
            "sourceTitle": "Ústava1960 — PSP, igualdade civil familiar laboral20/27",
            "locator": "Arts.20(3–4),27;contrapontos26,34,38",
            "statement": "Homens e mulheres têm igual posição familiar, laboral e pública e oportunidades em toda vida social; condições laborais, maternidade e serviços devem garantir participação feminina.",
            "basis": "norm",
            "publishedDate": "1960-07-11",
            "accessedDate": "2026-10-08"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      }
    },
    "documentaryReview": {
      "status": "author-reviewed-bounded-claims",
      "reviewedOn": "2026-10-07",
      "independentReview": "accepted-bounded-primary-claims",
      "scope": "Educação, cultura e religião na norma original1960, no recorte unitário1960–1968."
    },
    "unknownAxisReasons": {
      "pod": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "dip": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "int": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "com": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "rel": "Currículo científico marxista e consciência privada16/24/32 não estabelecem relação geral Estado/religião; sem inferir separação. Pesquisa preservada.",
      "tec": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "imi": "Art25 protege três minorias nomeadas, alcance insuficiente para direção cultural geral; pesquisa preservada no arquivo14."
    },
    "identityOrigin": {
      "disposition": "new-historical-unit",
      "distinctness": "Regime socialista e carta unitária de 1960; distinto da Primeira República; encerra-se o recorte unitário com a federação de 1969."
    },
    "codingScope": "Carta socialista unitária, 1960–1968; federalização em vigor em 1º de janeiro de 1969",
    "documentaryReview14": {
      "status": "author-reviewed-bounded-claims",
      "independentReview": "accepted-bounded-primary-claims",
      "reviewedOn": "2026-10-08",
      "scope": "Norma1960: mor aceito; est/rep/eco/con cotejados; locator est41(2)corrigido. Imi herdado rejeitado por alcance de três minorias, integralmente arquivado. Não prática social integral."
    }
  },
  "iceland-kingdom-1918": {
    "id": "iceland-kingdom-1918",
    "name": "Islândia — reino em união pessoal",
    "aliases": [
      "Kingdom of Iceland"
    ],
    "period": "Reino soberano em união pessoal,01/12/1918–República em17/06/1944; âncora normativa na Lei de União de30/11/1918.",
    "rationale": "A Lei de União reconhece soberania islandesa em união pessoal e declara neutralidade permanente, com relação externa administrada em arranjo próprio.",
    "caveats": "União pessoal não equivale a federação. O art.19 declara neutralidade normativa, não comprova ausência de guerra, ocupação ou toda prática externa1918–1944. A cronologia de1944 vem de manual diplomático institucional, não do inteiro ato republicano original. O §7 delega relações externas à Dinamarca, com consentimento islandês para novos tratados, sem converter união pessoal em federação interna.",
    "sources": [
      {
        "title": "Dansk-Islandsk Forbundslov 1918 — transcrição da lei",
        "url": "https://danmarkshistorien.lex.dk/Dansk-Islandsk_Forbundslov,_30._november_1918",
        "note": "Fonte efetivamente consultada em7/10/2026; limites de edição e locadores em coding."
      },
      {
        "title": "Dansk-Islandsk Forbundslov 1918 — transcrição da lei",
        "url": "https://danmarkshistorien.lex.dk/Dansk-Islandsk_Forbundslov,_30._november_1918",
        "note": "Leitura documental anterior atribuída. Lei30/11/1918 em transcrição histórica dinamarquesa. Escopo registrado: Atestação anterior autoral e independente da Lei de União, especialmente art.19; não nova leitura integral nesta rodada. Escopo da declaração de neutralidade distinto de delegação de relações externas."
      },
      {
        "title": "Ministério dos Negócios Estrangeiros islandês — Manual diplomático",
        "url": "https://www.government.is/library/01-Ministries/Ministry-for-Foreign-Affairs/PDF-skjol/Diplomatic-Handbook/Diplomatic%20Handbook%20WEB_09-2-22.pdf",
        "note": "Reino soberano independente em01/12/1918; República em17/06/1944. Escopo lido: Seção14.18 completa retornada em busca dirigida. Abertura direta402; corpo indexado efetivamente lido, não todo o PDF nem ato de1944."
      }
    ],
    "kind": "country",
    "category": "historical-country",
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
          "Dansk-Islandsk Forbundslov 1918 — transcrição da lei"
        ],
        "rationale": "Compromisso normativo de neutralidade sustenta contenção militar moderada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Neutralidade declarada não prova ausência de coerção, execução durante a guerra ou desarmamento universal."
      }
    },
    "coding": {
      "dip": {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Dansk-Islandsk Forbundslov 1918 — transcrição da lei",
            "locator": "§§19–20",
            "statement": "A lei comunica neutralidade permanente da Islândia e ausência de bandeira naval militar.",
            "basis": "norm",
            "publishedDate": "1918-11-30",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Compromisso normativo de neutralidade sustenta contenção militar moderada.",
        "uncertainty": "Neutralidade declarada não prova ausência de coerção, execução durante a guerra ou desarmamento universal.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      }
    },
    "documentaryReview": {
      "status": "author-reviewed-bounded-claims",
      "reviewedOn": "2026-10-07",
      "independentReview": "pending",
      "scope": "Leitura autoral das passagens delimitadas; identidade e recorte arquivístico descritos nas fontes. Cotejo independente integral pendente."
    },
    "unknownAxisReasons": {
      "est": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "rep": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "pod": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "imi": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "int": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "eco": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "con": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "com": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "rel": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "mor": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "tec": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação."
    }
  }
} as unknown as Record<string,ReferenceEntry>;

const allowedFields = {
  "weimar-republic": [
    "sources",
    "caveats",
    "rationale",
    "period"
  ],
  "yugoslavia-1974": [
    "sources",
    "caveats",
    "rationale",
    "period"
  ],
  "ussr-1977": [
    "sources",
    "caveats",
    "rationale",
    "period"
  ],
  "italy-postwar-republic": [
    "sources",
    "caveats",
    "rationale",
    "period"
  ],
  "east-germany-gdr": [
    "sources",
    "caveats",
    "rationale",
    "period"
  ],
  "india-nehru": [
    "sources",
    "caveats",
    "rationale",
    "period"
  ],
  "north-korea-kim-il-sung": [
    "sources",
    "caveats",
    "rationale",
    "period"
  ],
  "china-deng-reform": [
    "sources",
    "caveats",
    "rationale",
    "period"
  ],
  "czechoslovakia-socialist-unitary-1960": [
    "caveats",
    "rationale",
    "sources",
    "period"
  ],
  "iceland-kingdom-1918": [
    "caveats",
    "rationale",
    "sources",
    "period"
  ]
} as Record<string, (keyof ReferenceEntry)[]>;
export function reconcileHistoricalCountryProvenance05(entry:ReferenceEntry):ReferenceEntry {
 const before=historicalCountryProvenance05Before[entry.id], proposal=historicalCountryProvenance05Proposals[entry.id];
 if(!before||!proposal||JSON.stringify(entry)!==JSON.stringify(before)) return entry;
 const patch:Partial<ReferenceEntry>={};
 for(const key of allowedFields[entry.id]) {
  if(key==='sources') patch.sources=proposal.sources.map(source=>entry.sources.find(old=>JSON.stringify(old)===JSON.stringify(source))??source);
  else Object.assign(patch,{[key]:proposal[key]});
 }
 return {...entry,...patch};
}
