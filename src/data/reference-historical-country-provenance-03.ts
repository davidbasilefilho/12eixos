import type {ReferenceEntry} from './references';

// Complete literal prior and accepted post records; no score or coding changes.
export const historicalCountryProvenance03Before = {
  "prc-mao-1949": {
    "id": "prc-mao-1949",
    "kind": "country",
    "category": "historical-country",
    "name": "China — período Mao",
    "period": "República Popular, 1949–1976; recorte codificado: Carta fundadora1954 em transição socialista; não todas as fases1949–1976.",
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
    "rationale": "Inferências documentais delimitadas recodificadas pelo protocolo ordinal; o vetor anterior e suas fontes foram preservados no módulo de reconciliação.",
    "caveats": "Preambulo e frente política não bastam para medir competição eleitoral. Grande Salto, Revolução Cultural, coerção, secularismo e moral não são graduados sem prática documentada própria.",
    "sources": [
      {
        "title": "Rapprochement with China, 1972 — Office of the Historian",
        "url": "https://history.state.gov/milestones/1969-1976/rapprochement-china",
        "note": "Delimita a fundação da República Popular em 1949 e descreve seu governo no período Mao."
      },
      {
        "title": "China and the Cultural Revolution — Office of the Historian",
        "url": "https://history.state.gov/historicaldocuments/frus1964-68v30/d302",
        "note": "Avaliação histórica contemporânea sobre centralização partidária, Grande Salto e Revolução Cultural."
      },
      {
        "title": "Constitution of the People’s Republic of China (1954)",
        "url": "https://www.marxists.org/subject/china/documents/constitution-1954.htm",
        "note": "Fonte primária para a estrutura estatal e econômica declarada no período."
      },
      {
        "title": "Constitution of the People’s Republic of China, 1954 — translated primary text",
        "url": "https://en.wikisource.org/wiki/Constitution_of_the_People%27s_Republic_of_China_(1954)",
        "note": "Tradução reproduzida em Senate hearings1972; cotejo integral com chinês oficial pendente."
      }
    ],
    "evidence": {
      "eco": "medium",
      "con": "medium"
    },
    "axisEvidence": {
      "eco": {
        "sourceTitles": [
          "Constitution of the People’s Republic of China, 1954 — translated primary text"
        ],
        "rationale": "Prioridade estatal em economia ainda mista sustenta direção pública moderada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Transformação prevista não prova predomínio realizado; propriedade pessoal e capitalista não são omitidas."
      },
      "con": {
        "sourceTitles": [
          "Constitution of the People’s Republic of China, 1954 — translated primary text"
        ],
        "rationale": "Direção nacional com instrumentos de controle sustenta planejamento moderado. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não mede cumprimento, detalhe alocativo ou regimes posteriores; não deduz monopólio total do plano."
      }
    },
    "coding": {
      "eco": {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "rationale": "Prioridade estatal em economia ainda mista sustenta direção pública moderada.",
        "uncertainty": "Transformação prevista não prova predomínio realizado; propriedade pessoal e capitalista não são omitidas.",
        "reviewedOn": "2026-10-07",
        "claims": [
          {
            "sourceTitle": "Constitution of the People’s Republic of China, 1954 — translated primary text",
            "locator": "Arts.5–10 e13",
            "statement": "Setor estatal é dirigente e prioritário, mas propriedade camponesa, individual e capitalista é protegida durante transformação gradual.",
            "basis": "norm",
            "publishedDate": "1954-09-20",
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
      "con": {
        "axis": "con",
        "position": "moderate-first",
        "confidence": "medium",
        "rationale": "Direção nacional com instrumentos de controle sustenta planejamento moderado.",
        "uncertainty": "Não mede cumprimento, detalhe alocativo ou regimes posteriores; não deduz monopólio total do plano.",
        "reviewedOn": "2026-10-07",
        "claims": [
          {
            "sourceTitle": "Constitution of the People’s Republic of China, 1954 — translated primary text",
            "locator": "Arts.10 e15",
            "statement": "Estado orienta transformação e crescimento por plano econômico, incluindo controle administrativo do setor capitalista.",
            "basis": "norm",
            "publishedDate": "1954-09-20",
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
      "independentReview": "pending",
      "scope": "Carta fundadora1954 em transição socialista; não todas as fases1949–1976."
    },
    "unknownAxisReasons": {
      "est": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Preambulo e frente política não bastam para medir competição eleitoral. Grande Salto, Revolução Cultural, coerção, secularismo e moral não são graduados sem prática documentada própria.",
      "rep": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Preambulo e frente política não bastam para medir competição eleitoral. Grande Salto, Revolução Cultural, coerção, secularismo e moral não são graduados sem prática documentada própria.",
      "pod": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Preambulo e frente política não bastam para medir competição eleitoral. Grande Salto, Revolução Cultural, coerção, secularismo e moral não são graduados sem prática documentada própria.",
      "imi": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Preambulo e frente política não bastam para medir competição eleitoral. Grande Salto, Revolução Cultural, coerção, secularismo e moral não são graduados sem prática documentada própria.",
      "dip": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Preambulo e frente política não bastam para medir competição eleitoral. Grande Salto, Revolução Cultural, coerção, secularismo e moral não são graduados sem prática documentada própria.",
      "int": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Preambulo e frente política não bastam para medir competição eleitoral. Grande Salto, Revolução Cultural, coerção, secularismo e moral não são graduados sem prática documentada própria.",
      "com": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Preambulo e frente política não bastam para medir competição eleitoral. Grande Salto, Revolução Cultural, coerção, secularismo e moral não são graduados sem prática documentada própria.",
      "rel": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Preambulo e frente política não bastam para medir competição eleitoral. Grande Salto, Revolução Cultural, coerção, secularismo e moral não são graduados sem prática documentada própria.",
      "mor": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Preambulo e frente política não bastam para medir competição eleitoral. Grande Salto, Revolução Cultural, coerção, secularismo e moral não são graduados sem prática documentada própria.",
      "tec": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Preambulo e frente política não bastam para medir competição eleitoral. Grande Salto, Revolução Cultural, coerção, secularismo e moral não são graduados sem prática documentada própria."
    }
  },
  "cuba-revolutionary-1959": {
    "id": "cuba-revolutionary-1959",
    "kind": "country",
    "category": "historical-country",
    "name": "Cuba — governo revolucionário",
    "period": "Revolução e Constituição socialista, 1959–1976; recorte codificado: Carta socialista fundadora1976, término do recorte1959–1976; não toda trajetória desde a revolução.",
    "vec": {
      "est": 50,
      "rep": 20,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 80,
      "con": 80,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Inferências documentais delimitadas recodificadas pelo protocolo ordinal; o vetor anterior e suas fontes foram preservados no módulo de reconciliação.",
    "caveats": "Transcrição fundadora não certifica prática de1959–1976. Liberdades condicionadas e trechos religiosos não integralmente cotejados impedem graduar pod/rel; demais eixos desconhecidos.",
    "sources": [
      {
        "title": "Foreign Relations of the United States, Cuba, 1958–1960 — Office of the Historian",
        "url": "https://history.state.gov/historicaldocuments/frus1958-60v06/d217",
        "note": "Registro diplomático contemporâneo da queda de Batista e da formação do governo provisório em 1959."
      },
      {
        "title": "Cuba: A Country Study — Library of Congress",
        "url": "https://tile.loc.gov/storage-services/master/frd/frdcstdy/cu/cubacountrystudy00huds/cubacountrystudy00huds.pdf",
        "note": "Estudo histórico sobre reforma agrária, expropriações e consolidação do governo revolucionário."
      },
      {
        "title": "Constitución de la República de Cuba de 1976 — Granma",
        "url": "https://www.granma.cu/file/pdf/gaceta/Constituci%C3%B3n%20de%20la%20Rep%C3%BAblica%20de%20Cuba.pdf",
        "note": "Fonte primária para economia planificada, direitos declarados e papel dirigente do Partido Comunista."
      },
      {
        "title": "Constitución de la República de Cuba, texto original1976 — transcripción",
        "url": "https://es.wikisource.org/wiki/Constituci%C3%B3n_de_la_Rep%C3%BAblica_de_Cuba_%281976%29",
        "note": "Original1976, sem imputar redações1992/2002; cotejo oficial integral pendente."
      }
    ],
    "evidence": {
      "rep": "medium",
      "eco": "medium",
      "con": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constitución de la República de Cuba, texto original1976 — transcripción"
        ],
        "rationale": "Supremacia partidária constitutiva sustenta autocracia forte normativa. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Não imputa fraude; eleição e revogação formais são contrapontos sem provar competição pluralista."
      },
      "eco": {
        "sourceTitles": [
          "Constitución de la República de Cuba, texto original1976 — transcripción"
        ],
        "rationale": "Abrangência central dos meios produtivos sustenta orientação pública forte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Não confunde propriedade pessoal ou cooperativa com estatal nem quantifica ativos efetivos."
      },
      "con": {
        "sourceTitles": [
          "Constitución de la República de Cuba, texto original1976 — transcripción"
        ],
        "rationale": "Plano nacional único e poder de direção sustentam planejamento forte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Participação é contraponto de governança; declaração não prova cumprimento do plano."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "strong-second",
        "confidence": "medium",
        "rationale": "Supremacia partidária constitutiva sustenta autocracia forte normativa.",
        "uncertainty": "Não imputa fraude; eleição e revogação formais são contrapontos sem provar competição pluralista.",
        "reviewedOn": "2026-10-07",
        "claims": [
          {
            "sourceTitle": "Constitución de la República de Cuba, texto original1976 — transcripción",
            "locator": "Arts.5,66 e69",
            "statement": "Partido Comunista é força dirigente superior da sociedade e Estado; órgãos eletivos e revogabilidade operam dentro desse desenho.",
            "basis": "norm",
            "publishedDate": "1976-02-24",
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
        "rationale": "Abrangência central dos meios produtivos sustenta orientação pública forte.",
        "uncertainty": "Não confunde propriedade pessoal ou cooperativa com estatal nem quantifica ativos efetivos.",
        "reviewedOn": "2026-10-07",
        "claims": [
          {
            "sourceTitle": "Constitución de la República de Cuba, texto original1976 — transcripción",
            "locator": "Arts.14–15 e20",
            "statement": "Propriedade socialista abrange grandes setores produtivos nacionalizados; pequenos agricultores e cooperativas coexistem.",
            "basis": "norm",
            "publishedDate": "1976-02-24",
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
        "confidence": "medium",
        "rationale": "Plano nacional único e poder de direção sustentam planejamento forte.",
        "uncertainty": "Participação é contraponto de governança; declaração não prova cumprimento do plano.",
        "reviewedOn": "2026-10-07",
        "claims": [
          {
            "sourceTitle": "Constitución de la República de Cuba, texto original1976 — transcripción",
            "locator": "Art.16",
            "statement": "Estado organiza, dirige e controla economia por plano único com participação dos trabalhadores.",
            "basis": "norm",
            "publishedDate": "1976-02-24",
            "accessedDate": "2026-10-07"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      }
    },
    "documentaryReview": {
      "status": "author-reviewed-bounded-claims",
      "reviewedOn": "2026-10-07",
      "independentReview": "pending",
      "scope": "Carta socialista fundadora1976, término do recorte1959–1976; não toda trajetória desde a revolução."
    },
    "unknownAxisReasons": {
      "est": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Transcrição fundadora não certifica prática de1959–1976. Liberdades condicionadas e trechos religiosos não integralmente cotejados impedem graduar pod/rel; demais eixos desconhecidos.",
      "pod": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Transcrição fundadora não certifica prática de1959–1976. Liberdades condicionadas e trechos religiosos não integralmente cotejados impedem graduar pod/rel; demais eixos desconhecidos.",
      "imi": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Transcrição fundadora não certifica prática de1959–1976. Liberdades condicionadas e trechos religiosos não integralmente cotejados impedem graduar pod/rel; demais eixos desconhecidos.",
      "dip": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Transcrição fundadora não certifica prática de1959–1976. Liberdades condicionadas e trechos religiosos não integralmente cotejados impedem graduar pod/rel; demais eixos desconhecidos.",
      "int": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Transcrição fundadora não certifica prática de1959–1976. Liberdades condicionadas e trechos religiosos não integralmente cotejados impedem graduar pod/rel; demais eixos desconhecidos.",
      "com": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Transcrição fundadora não certifica prática de1959–1976. Liberdades condicionadas e trechos religiosos não integralmente cotejados impedem graduar pod/rel; demais eixos desconhecidos.",
      "rel": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Transcrição fundadora não certifica prática de1959–1976. Liberdades condicionadas e trechos religiosos não integralmente cotejados impedem graduar pod/rel; demais eixos desconhecidos.",
      "mor": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Transcrição fundadora não certifica prática de1959–1976. Liberdades condicionadas e trechos religiosos não integralmente cotejados impedem graduar pod/rel; demais eixos desconhecidos.",
      "tec": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Transcrição fundadora não certifica prática de1959–1976. Liberdades condicionadas e trechos religiosos não integralmente cotejados impedem graduar pod/rel; demais eixos desconhecidos."
    }
  },
  "portugal-estado-novo-1933": {
    "id": "portugal-estado-novo-1933",
    "kind": "country",
    "category": "historical-country",
    "name": "Portugal — Estado Novo",
    "period": "Regime de Salazar e sucessão, 1933–1974; recorte codificado: Fundação1933, eleição1934 e abertura parlamentar1935; não todo Salazar/Caetano até1974.",
    "vec": {
      "est": 50,
      "rep": 20,
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
    "rationale": "Inferências documentais delimitadas recodificadas pelo protocolo ordinal; o vetor anterior e suas fontes foram preservados no módulo de reconciliação.",
    "caveats": "Fonte institucional de prática delimitada, não leitura integral da carta1933. Censura, religião, império, comércio e moral necessitam fontes próprias; não herdamos valores anteriores.",
    "sources": [
      {
        "title": "Estado Novo — Assembleia da República",
        "url": "https://www.parlamento.pt/Parlamento/Paginas/EstadoNovo.aspx",
        "note": "Síntese histórica parlamentar sobre a ditadura, corporativismo, censura e queda em 1974."
      },
      {
        "title": "Constituição Política da República Portuguesa, 1933 — Diário da República",
        "url": "https://diariodarepublica.pt/dr/legislacao-consolidada/decreto/1933-69985699",
        "note": "Texto constitucional primário que instituiu a ordem corporativa do período."
      },
      {
        "title": "O início dos trabalhos no Parlamento — Assembleia da República, março2022",
        "url": "https://app.parlamento.pt/comunicar/V1/202203/78/artigos/art6.html",
        "note": "História institucional com ligações a atas primárias1935; PDFconstitucional sem camada textual não foi tratado como lido."
      }
    ],
    "evidence": {
      "rep": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "O início dos trabalhos no Parlamento — Assembleia da República, março2022"
        ],
        "rationale": "Ausência de representação durante fundação e seleção partidária subordinada sustentam orientação autocrática forte. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Retrospectiva institucional não é auditoria de todos os pleitos; Parlamento eleito1934 e mulheres diplomadas elegíveis são contrapontos limitados."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "strong-second",
        "confidence": "medium",
        "rationale": "Ausência de representação durante fundação e seleção partidária subordinada sustentam orientação autocrática forte.",
        "uncertainty": "Retrospectiva institucional não é auditoria de todos os pleitos; Parlamento eleito1934 e mulheres diplomadas elegíveis são contrapontos limitados.",
        "reviewedOn": "2026-10-07",
        "claims": [
          {
            "sourceTitle": "O início dos trabalhos no Parlamento — Assembleia da República, março2022",
            "locator": "Seção Assembleia Nacional1935; plebiscito1933, eleição1934 e discurso10janeiro1935",
            "statement": "Parlamento ficou fechado até1935; abstenções do plebiscito contaram favoravelmente; eleitos1934 foram propostos pela União Nacional, sob franquia restrita.",
            "basis": "practice",
            "publishedDate": "2022-03; relata1933–1935",
            "accessedDate": "2026-10-07"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 20,
        "range": [
          10,
          25
        ]
      }
    },
    "documentaryReview": {
      "status": "author-reviewed-bounded-claims",
      "reviewedOn": "2026-10-07",
      "independentReview": "pending",
      "scope": "Fundação1933, eleição1934 e abertura parlamentar1935; não todo Salazar/Caetano até1974."
    },
    "unknownAxisReasons": {
      "est": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Fonte institucional de prática delimitada, não leitura integral da carta1933. Censura, religião, império, comércio e moral necessitam fontes próprias; não herdamos valores anteriores.",
      "pod": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Fonte institucional de prática delimitada, não leitura integral da carta1933. Censura, religião, império, comércio e moral necessitam fontes próprias; não herdamos valores anteriores.",
      "imi": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Fonte institucional de prática delimitada, não leitura integral da carta1933. Censura, religião, império, comércio e moral necessitam fontes próprias; não herdamos valores anteriores.",
      "dip": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Fonte institucional de prática delimitada, não leitura integral da carta1933. Censura, religião, império, comércio e moral necessitam fontes próprias; não herdamos valores anteriores.",
      "int": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Fonte institucional de prática delimitada, não leitura integral da carta1933. Censura, religião, império, comércio e moral necessitam fontes próprias; não herdamos valores anteriores.",
      "eco": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Fonte institucional de prática delimitada, não leitura integral da carta1933. Censura, religião, império, comércio e moral necessitam fontes próprias; não herdamos valores anteriores.",
      "con": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Fonte institucional de prática delimitada, não leitura integral da carta1933. Censura, religião, império, comércio e moral necessitam fontes próprias; não herdamos valores anteriores.",
      "com": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Fonte institucional de prática delimitada, não leitura integral da carta1933. Censura, religião, império, comércio e moral necessitam fontes próprias; não herdamos valores anteriores.",
      "rel": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Fonte institucional de prática delimitada, não leitura integral da carta1933. Censura, religião, império, comércio e moral necessitam fontes próprias; não herdamos valores anteriores.",
      "mor": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Fonte institucional de prática delimitada, não leitura integral da carta1933. Censura, religião, império, comércio e moral necessitam fontes próprias; não herdamos valores anteriores.",
      "tec": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Fonte institucional de prática delimitada, não leitura integral da carta1933. Censura, religião, império, comércio e moral necessitam fontes próprias; não herdamos valores anteriores."
    }
  },
  "roc-taiwan-1949": {
    "id": "roc-taiwan-1949",
    "kind": "country",
    "category": "historical-country",
    "name": "Taiwan — República da China sob lei marcial",
    "period": "Retirada para Taiwan e lei marcial, 1949–1987; recorte codificado: Disposições temporárias na edição1972 dentro do recorte1949–1987; abolição1991 não é fim da lei marcial1987.",
    "vec": {
      "est": 50,
      "rep": 40,
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
    "rationale": "Inferências documentais delimitadas recodificadas pelo protocolo ordinal; o vetor anterior e suas fontes foram preservados no módulo de reconciliação.",
    "caveats": "Fim da lei marcial1987 e abolição destas normas1991 são eventos distintos. Poder de emergência não basta para medir coerção efetiva; desenvolvimento, religião e comércio não graduados.",
    "sources": [
      {
        "title": "Taiwan’s transition to democracy — National Human Rights Museum",
        "url": "https://www.nhrm.gov.tw/w/nhrmEN/History_22070117122319529",
        "note": "Instituição pública documenta lei marcial, repressão e levantamento em 1987."
      },
      {
        "title": "The Constitution of the Republic of China — Office of the President",
        "url": "https://english.president.gov.tw/Page/94",
        "note": "Fonte primária para a carta constitucional e sua aplicação sob disposições temporárias de emergência."
      },
      {
        "title": "Taiwan — Library of Congress Country Studies",
        "url": "https://tile.loc.gov/storage-services/master/frd/frdcstdy/taiwan/taiwanhistori00dobb_0/taiwanhistori00dobb.pdf",
        "note": "Estudo sobre reforma agrária, industrialização e papel econômico estatal."
      },
      {
        "title": "Temporary Provisions Effective During the Period of Communist Rebellion, edition1972",
        "url": "https://en.wikisource.org/wiki/Temporary_Provisions_Effective_During_the_Period_of_Communist_Rebellion_(1972)",
        "note": "Tradução primária da edição1972; cotejo com original chinês oficial pendente."
      }
    ],
    "evidence": {
      "rep": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Temporary Provisions Effective During the Period of Communist Rebellion, edition1972"
        ],
        "rationale": "Renovação representativa suspensa e continuidade excepcional sustentam direção autocrática moderada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Legislativo pode modificar emergência e assentos adicionais se renovam; texto não prova partido único ou ausência absoluta de competição."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-second",
        "confidence": "medium",
        "rationale": "Renovação representativa suspensa e continuidade excepcional sustentam direção autocrática moderada.",
        "uncertainty": "Legislativo pode modificar emergência e assentos adicionais se renovam; texto não prova partido único ou ausência absoluta de competição.",
        "reviewedOn": "2026-10-07",
        "claims": [
          {
            "sourceTitle": "Temporary Provisions Effective During the Period of Communist Rebellion, edition1972",
            "locator": "§§2–3,6(1–3),8 e10–11",
            "statement": "Mandatos centrais originais continuam até recuperação territorial; reeleição presidencial é ilimitada e eleições adicionais em áreas livres coexistem.",
            "basis": "norm",
            "publishedDate": "1972-03-17; cronologia de emendas no cabeçalho",
            "accessedDate": "2026-10-07"
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
    "documentaryReview": {
      "status": "author-reviewed-bounded-claims",
      "reviewedOn": "2026-10-07",
      "independentReview": "pending",
      "scope": "Disposições temporárias na edição1972 dentro do recorte1949–1987; abolição1991 não é fim da lei marcial1987."
    },
    "unknownAxisReasons": {
      "est": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Fim da lei marcial1987 e abolição destas normas1991 são eventos distintos. Poder de emergência não basta para medir coerção efetiva; desenvolvimento, religião e comércio não graduados.",
      "pod": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Fim da lei marcial1987 e abolição destas normas1991 são eventos distintos. Poder de emergência não basta para medir coerção efetiva; desenvolvimento, religião e comércio não graduados.",
      "imi": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Fim da lei marcial1987 e abolição destas normas1991 são eventos distintos. Poder de emergência não basta para medir coerção efetiva; desenvolvimento, religião e comércio não graduados.",
      "dip": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Fim da lei marcial1987 e abolição destas normas1991 são eventos distintos. Poder de emergência não basta para medir coerção efetiva; desenvolvimento, religião e comércio não graduados.",
      "int": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Fim da lei marcial1987 e abolição destas normas1991 são eventos distintos. Poder de emergência não basta para medir coerção efetiva; desenvolvimento, religião e comércio não graduados.",
      "eco": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Fim da lei marcial1987 e abolição destas normas1991 são eventos distintos. Poder de emergência não basta para medir coerção efetiva; desenvolvimento, religião e comércio não graduados.",
      "con": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Fim da lei marcial1987 e abolição destas normas1991 são eventos distintos. Poder de emergência não basta para medir coerção efetiva; desenvolvimento, religião e comércio não graduados.",
      "com": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Fim da lei marcial1987 e abolição destas normas1991 são eventos distintos. Poder de emergência não basta para medir coerção efetiva; desenvolvimento, religião e comércio não graduados.",
      "rel": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Fim da lei marcial1987 e abolição destas normas1991 são eventos distintos. Poder de emergência não basta para medir coerção efetiva; desenvolvimento, religião e comércio não graduados.",
      "mor": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Fim da lei marcial1987 e abolição destas normas1991 são eventos distintos. Poder de emergência não basta para medir coerção efetiva; desenvolvimento, religião e comércio não graduados.",
      "tec": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Fim da lei marcial1987 e abolição destas normas1991 são eventos distintos. Poder de emergência não basta para medir coerção efetiva; desenvolvimento, religião e comércio não graduados."
    }
  },
  "france-de-gaulle-1958": {
    "id": "france-de-gaulle-1958",
    "kind": "country",
    "category": "historical-country",
    "name": "França — presidência de Charles de Gaulle",
    "period": "Quinta República, 1958–1969; recorte codificado: Arranjo inicial1958 anterior à reforma1962; não prática uniforme1958–1969.",
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
      "rel": 60,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Inferências documentais delimitadas recodificadas pelo protocolo ordinal; o vetor anterior e suas fontes foram preservados no módulo de reconciliação.",
    "caveats": "Carta fundadora não mede planejamento indicativo, nuclearização, imigração ou colonialismo. Relações comunitárias externas não são confundidas com federação doméstica; est permanece desconhecido.",
    "sources": [
      {
        "title": "Constitution française du 4 octobre 1958 — Vie-publique",
        "url": "https://www.vie-publique.fr/fiches/19463-que-dit-la-constitution-de-1958",
        "note": "Explica o fortalecimento do Executivo e a estrutura da Quinta República."
      },
      {
        "title": "Référendum de 1962 — Assemblée nationale",
        "url": "https://www.assemblee-nationale.fr/histoire/suffrage-universel-direct-president-republique.asp",
        "note": "Contexto institucional da eleição presidencial por sufrágio universal direto."
      },
      {
        "title": "France — Office of the Historian, U.S. Department of State",
        "url": "https://history.state.gov/milestones/1961-1968/degaulle",
        "note": "Contextualiza a política externa independente e os conflitos do período."
      },
      {
        "title": "Constitution française1958, version initiale — Imprimerie nationale, transcription",
        "url": "https://fr.wikisource.org/wiki/Constitution_fran%C3%A7aise_de_1958_(version_initiale)",
        "note": "Edição original1958 vinculada a fac-símile; eleição presidencial indireta é anterior à reforma1962."
      }
    ],
    "evidence": {
      "rep": "medium",
      "rel": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constitution française1958, version initiale — Imprimerie nationale, transcription"
        ],
        "rationale": "Competição e controle parlamentar sustentam democracia moderada com contrapoder executivo explícito. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não mede prática na guerra argelina; Presidência ainda indireta e artigos16/49.3 limitam leitura irrestrita."
      },
      "rel": {
        "sourceTitles": [
          "Constitution française1958, version initiale — Imprimerie nationale, transcription"
        ],
        "rationale": "Laicidade institucional explícita sustenta direção secular moderada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não certifica uniformidade regional, financiamento religioso ou irreligiosidade pessoal."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "rationale": "Competição e controle parlamentar sustentam democracia moderada com contrapoder executivo explícito.",
        "uncertainty": "Não mede prática na guerra argelina; Presidência ainda indireta e artigos16/49.3 limitam leitura irrestrita.",
        "reviewedOn": "2026-10-07",
        "claims": [
          {
            "sourceTitle": "Constitution française1958, version initiale — Imprimerie nationale, transcription",
            "locator": "Arts.3–4,6,12,16,20,24,49–50",
            "statement": "Sufrágio amplo, partidos livres e responsabilidade parlamentar coexistem com Presidência forte, dissolução, emergência e legislação vinculada à confiança.",
            "basis": "norm",
            "publishedDate": "1958-10-04",
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
        "rationale": "Laicidade institucional explícita sustenta direção secular moderada.",
        "uncertainty": "Não certifica uniformidade regional, financiamento religioso ou irreligiosidade pessoal.",
        "reviewedOn": "2026-10-07",
        "claims": [
          {
            "sourceTitle": "Constitution française1958, version initiale — Imprimerie nationale, transcription",
            "locator": "Art.2 da versão original1958",
            "statement": "República é laica e assegura igualdade sem distinção religiosa e respeito a todas as crenças.",
            "basis": "norm",
            "publishedDate": "1958-10-04",
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
      "independentReview": "pending",
      "scope": "Arranjo inicial1958 anterior à reforma1962; não prática uniforme1958–1969."
    },
    "unknownAxisReasons": {
      "est": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Carta fundadora não mede planejamento indicativo, nuclearização, imigração ou colonialismo. Relações comunitárias externas não são confundidas com federação doméstica; est permanece desconhecido.",
      "pod": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Carta fundadora não mede planejamento indicativo, nuclearização, imigração ou colonialismo. Relações comunitárias externas não são confundidas com federação doméstica; est permanece desconhecido.",
      "imi": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Carta fundadora não mede planejamento indicativo, nuclearização, imigração ou colonialismo. Relações comunitárias externas não são confundidas com federação doméstica; est permanece desconhecido.",
      "dip": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Carta fundadora não mede planejamento indicativo, nuclearização, imigração ou colonialismo. Relações comunitárias externas não são confundidas com federação doméstica; est permanece desconhecido.",
      "int": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Carta fundadora não mede planejamento indicativo, nuclearização, imigração ou colonialismo. Relações comunitárias externas não são confundidas com federação doméstica; est permanece desconhecido.",
      "eco": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Carta fundadora não mede planejamento indicativo, nuclearização, imigração ou colonialismo. Relações comunitárias externas não são confundidas com federação doméstica; est permanece desconhecido.",
      "con": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Carta fundadora não mede planejamento indicativo, nuclearização, imigração ou colonialismo. Relações comunitárias externas não são confundidas com federação doméstica; est permanece desconhecido.",
      "com": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Carta fundadora não mede planejamento indicativo, nuclearização, imigração ou colonialismo. Relações comunitárias externas não são confundidas com federação doméstica; est permanece desconhecido.",
      "mor": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Carta fundadora não mede planejamento indicativo, nuclearização, imigração ou colonialismo. Relações comunitárias externas não são confundidas com federação doméstica; est permanece desconhecido.",
      "tec": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Carta fundadora não mede planejamento indicativo, nuclearização, imigração ou colonialismo. Relações comunitárias externas não são confundidas com federação doméstica; est permanece desconhecido."
    }
  },
  "chile-up-1970": {
    "id": "chile-up-1970",
    "kind": "country",
    "category": "historical-country",
    "name": "Chile — Unidade Popular",
    "period": "Governo Allende, 1970–1973; recorte codificado: Programa pré-governamental aprovado em 1969, edição1970; não execução homogênea de 1970–1973.",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 40,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 80,
      "con": 80,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Inferências documentais delimitadas recodificadas pelo protocolo ordinal; o vetor anterior e suas fontes foram preservados no módulo de reconciliação.",
    "caveats": "Objeto desta codificação é o programa, não todo resultado do governo. Liberdades declaradas não certificam eleições e alternância; rep permanece desconhecido até revisar fonte de prática. Nacionalização do comércio exterior não significa proteção tarifária: com desconhecido. Religião e moral sem suporte revisto.",
    "sources": [
      {
        "title": "El gobierno de la Unidad Popular (1970–1973) — Biblioteca Nacional de Chile",
        "url": "https://www.memoriachilena.gob.cl/602/w3-article-31433.html",
        "note": "Pesquisa da Biblioteca Nacional descreve a eleição democrática, a via chilena ao socialismo, o programa de economia planejada, nacionalização do cobre e o golpe que encerrou o governo."
      },
      {
        "title": "Programa básico de gobierno de la Unidad Popular",
        "url": "https://www.memoriachilena.gob.cl/602/w3-article-98051.html",
        "note": "Registro arquivístico do programa aprovado pela coalizão em 1969 e fonte primária do período."
      },
      {
        "title": "Programa básico de gobierno de la Unidad Popular — edição de 1970, Biblioteca Nacional",
        "url": "https://www.memoriachilena.gob.cl/archivos2/pdfs/MC0000544.pdf",
        "note": "Fac-símile primário MC0000544, catálogo artigo7738; páginas impressas 12–13 e 19–23. Página98051 é contexto, não o programa integral."
      }
    ],
    "evidence": {
      "eco": "medium",
      "con": "medium",
      "pod": "medium"
    },
    "axisEvidence": {
      "eco": {
        "sourceTitles": [
          "Programa básico de gobierno de la Unidad Popular — edição de 1970, Biblioteca Nacional"
        ],
        "rationale": "Objetivo explícito de domínio público estratégico sustenta polo público forte no programa. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Maioria por número de empresas continua privada; objetivo não prova realização e não mede peso econômico."
      },
      "con": {
        "sourceTitles": [
          "Programa básico de gobierno de la Unidad Popular — edição de 1970, Biblioteca Nacional"
        ],
        "rationale": "Planejamento multissetorial com poder executivo sustenta orientação planejadora forte no programa. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Não presume êxito, implementação completa ou eliminação de toda transação de mercado."
      },
      "pod": {
        "sourceTitles": [
          "Programa básico de gobierno de la Unidad Popular — edição de 1970, Biblioteca Nacional"
        ],
        "rationale": "Compromissos explícitos de direitos sustentam direção moderada à liberdade no programa. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Declaração não prova execução em polarização e conflito; sem auditoria de coerção estatal de todo governo."
      }
    },
    "coding": {
      "eco": {
        "axis": "eco",
        "position": "strong-first",
        "confidence": "medium",
        "rationale": "Objetivo explícito de domínio público estratégico sustenta polo público forte no programa.",
        "uncertainty": "Maioria por número de empresas continua privada; objetivo não prova realização e não mede peso econômico.",
        "reviewedOn": "2026-10-07",
        "claims": [
          {
            "sourceTitle": "Programa básico de gobierno de la Unidad Popular — edição de 1970, Biblioteca Nacional",
            "locator": "Área de propiedad social/privada/mixta; pp. impressas 19–21, PDF20–22",
            "statement": "Programa propõe área estatal dominante em setores-chave, mantendo empresas privadas numerosas e setor misto.",
            "basis": "declaration",
            "publishedDate": "1970; programa aprovado em 1969-12-17",
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
        "confidence": "medium",
        "rationale": "Planejamento multissetorial com poder executivo sustenta orientação planejadora forte no programa.",
        "uncertainty": "Não presume êxito, implementação completa ou eliminação de toda transação de mercado.",
        "reviewedOn": "2026-10-07",
        "claims": [
          {
            "sourceTitle": "Programa básico de gobierno de la Unidad Popular — edição de 1970, Biblioteca Nacional",
            "locator": "La construcción de la nueva economía; Política de desarrollo económico; pp.19/23, PDF20/24",
            "statement": "Órgãos centrais planejam com decisões executivas e sistema nacional integra controle, crédito e orientação.",
            "basis": "declaration",
            "publishedDate": "1970; programa aprovado em 1969-12-17",
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
      "pod": {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "rationale": "Compromissos explícitos de direitos sustentam direção moderada à liberdade no programa.",
        "uncertainty": "Declaração não prova execução em polarização e conflito; sem auditoria de coerção estatal de todo governo.",
        "reviewedOn": "2026-10-07",
        "claims": [
          {
            "sourceTitle": "Programa básico de gobierno de la Unidad Popular — edição de 1970, Biblioteca Nacional",
            "locator": "La profundización de la democracia; pp.12–13, PDF13–14",
            "statement": "Programa promete expressão, imprensa, reunião, domicílio e associação com garantias individuais.",
            "basis": "declaration",
            "publishedDate": "1970; programa aprovado em 1969-12-17",
            "accessedDate": "2026-10-07"
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
    "documentaryReview": {
      "status": "author-reviewed-bounded-claims",
      "reviewedOn": "2026-10-07",
      "independentReview": "pending",
      "scope": "Programa pré-governamental aprovado em 1969, edição1970; não execução homogênea de 1970–1973."
    },
    "unknownAxisReasons": {
      "est": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Objeto desta codificação é o programa, não todo resultado do governo. Liberdades declaradas não certificam eleições e alternância; rep permanece desconhecido até revisar fonte de prática. Nacionalização do comércio exterior não significa proteção tarifária: com desconhecido. Religião e moral sem suporte revisto.",
      "rep": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Objeto desta codificação é o programa, não todo resultado do governo. Liberdades declaradas não certificam eleições e alternância; rep permanece desconhecido até revisar fonte de prática. Nacionalização do comércio exterior não significa proteção tarifária: com desconhecido. Religião e moral sem suporte revisto.",
      "imi": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Objeto desta codificação é o programa, não todo resultado do governo. Liberdades declaradas não certificam eleições e alternância; rep permanece desconhecido até revisar fonte de prática. Nacionalização do comércio exterior não significa proteção tarifária: com desconhecido. Religião e moral sem suporte revisto.",
      "dip": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Objeto desta codificação é o programa, não todo resultado do governo. Liberdades declaradas não certificam eleições e alternância; rep permanece desconhecido até revisar fonte de prática. Nacionalização do comércio exterior não significa proteção tarifária: com desconhecido. Religião e moral sem suporte revisto.",
      "int": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Objeto desta codificação é o programa, não todo resultado do governo. Liberdades declaradas não certificam eleições e alternância; rep permanece desconhecido até revisar fonte de prática. Nacionalização do comércio exterior não significa proteção tarifária: com desconhecido. Religião e moral sem suporte revisto.",
      "com": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Objeto desta codificação é o programa, não todo resultado do governo. Liberdades declaradas não certificam eleições e alternância; rep permanece desconhecido até revisar fonte de prática. Nacionalização do comércio exterior não significa proteção tarifária: com desconhecido. Religião e moral sem suporte revisto.",
      "rel": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Objeto desta codificação é o programa, não todo resultado do governo. Liberdades declaradas não certificam eleições e alternância; rep permanece desconhecido até revisar fonte de prática. Nacionalização do comércio exterior não significa proteção tarifária: com desconhecido. Religião e moral sem suporte revisto.",
      "mor": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Objeto desta codificação é o programa, não todo resultado do governo. Liberdades declaradas não certificam eleições e alternância; rep permanece desconhecido até revisar fonte de prática. Nacionalização do comércio exterior não significa proteção tarifária: com desconhecido. Religião e moral sem suporte revisto.",
      "tec": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Objeto desta codificação é o programa, não todo resultado do governo. Liberdades declaradas não certificam eleições e alternância; rep permanece desconhecido até revisar fonte de prática. Nacionalização do comércio exterior não significa proteção tarifária: com desconhecido. Religião e moral sem suporte revisto."
    }
  },
  "argentina-junta-1976": {
    "id": "argentina-junta-1976",
    "kind": "country",
    "category": "historical-country",
    "name": "Argentina — Processo de Reorganização Nacional",
    "period": "Ditadura militar, 1976–1983",
    "vec": {
      "est": 50,
      "rep": 5,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 11,
      "tec": 50
    },
    "rationale": "Junta suprimiu competição civil e praticou desaparecimentos e tortura, documentados por comissão de verdade.",
    "caveats": "Recorte institucional datado; não representa a população, povos subordinados nem governos fora do período. Economia e política externa mudaram com os gabinetes; esse vetor só pontua direitos e competição. Eixos sem evidência suficiente permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "Documentos Históricos da ditadura",
        "url": "https://www.argentina.gob.ar/derechoshumanos/anm/documentos-historicos",
        "note": "Documento primário ou registro de arquivo relacionado ao período Ditadura militar, 1976–1983; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Comissão Nacional sobre o Desaparecimento de Pessoas — Nunca Más",
        "url": "https://www.argentina.gob.ar/derechoshumanos/anm/nunca-mas",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      }
    ],
    "evidence": {
      "rep": "high",
      "mor": "high"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Documentos Históricos da ditadura",
          "Comissão Nacional sobre o Desaparecimento de Pessoas — Nunca Más"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 5."
      },
      "mor": {
        "sourceTitles": [
          "Documentos Históricos da ditadura",
          "Comissão Nacional sobre o Desaparecimento de Pessoas — Nunca Más"
        ],
        "rationale": "A fonte registra extensão ou restrição de direitos e igualdade no período, sustentando 11."
      }
    }
  },
  "peru-velasco-1968": {
    "id": "peru-velasco-1968",
    "kind": "country",
    "category": "historical-country",
    "name": "Peru — Governo Revolucionário das Forças Armadas",
    "period": "Governo Velasco Alvarado, 1968–1975",
    "vec": {
      "est": 50,
      "rep": 15,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 88,
      "con": 84,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Junta não eleita promoveu reforma agrária e planejamento estatal.",
    "caveats": "Recorte institucional datado; não representa a população, povos subordinados nem governos fora do período. A junta teve várias fases; mensagem oficial expressa programa, não resultados. Eixos sem evidência suficiente permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "Mensagem presidencial sobre reforma agrária (1969)",
        "url": "https://www.congreso.gob.pe/Docs/participacion/museo/congreso/files/mensajes/1951-1980/files/mensaje_1969.pdf",
        "note": "Documento primário ou registro de arquivo relacionado ao período Governo Velasco Alvarado, 1968–1975; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Biblioteca Nacional do Peru — coleções históricas",
        "url": "https://www.bnp.gob.pe/colecciones/",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      }
    ],
    "evidence": {
      "rep": "high",
      "eco": "medium",
      "con": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Mensagem presidencial sobre reforma agrária (1969)",
          "Biblioteca Nacional do Peru — coleções históricas"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 15."
      },
      "eco": {
        "sourceTitles": [
          "Mensagem presidencial sobre reforma agrária (1969)",
          "Biblioteca Nacional do Peru — coleções históricas"
        ],
        "rationale": "O documento descreve extensão de propriedade pública, provisão ou coordenação estatal, sustentando 88."
      },
      "con": {
        "sourceTitles": [
          "Mensagem presidencial sobre reforma agrária (1969)",
          "Biblioteca Nacional do Peru — coleções históricas"
        ],
        "rationale": "A fonte documenta direção estatal da economia ou coordenação por mercado, sustentando 84."
      }
    }
  },
  "uruguay-civic-military-1973": {
    "id": "uruguay-civic-military-1973",
    "kind": "country",
    "category": "historical-country",
    "name": "Uruguai — ditadura cívico-militar",
    "period": "Regime autoritário, 1973–1985",
    "vec": {
      "est": 50,
      "rep": 8,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 17,
      "tec": 50
    },
    "rationale": "Dissolução parlamentar, proscrição e repressão suprimiram competição e direitos civis.",
    "caveats": "Recorte institucional datado; não representa a população, povos subordinados nem governos fora do período. Transição de 1980–85 compõe o fim do período. Eixos sem evidência suficiente permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "Decreto de dissolução do Parlamento (1973)",
        "url": "https://www.impo.com.uy/bases/decretos/464-1973",
        "note": "Documento primário ou registro de arquivo relacionado ao período Regime autoritário, 1973–1985; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Secretaria de Direitos Humanos para o Passado Recente",
        "url": "https://www.gub.uy/secretaria-derechos-humanos-pasado-reciente/",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      }
    ],
    "evidence": {
      "rep": "high",
      "mor": "high"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Decreto de dissolução do Parlamento (1973)",
          "Secretaria de Direitos Humanos para o Passado Recente"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 8."
      },
      "mor": {
        "sourceTitles": [
          "Decreto de dissolução do Parlamento (1973)",
          "Secretaria de Direitos Humanos para o Passado Recente"
        ],
        "rationale": "A fonte registra extensão ou restrição de direitos e igualdade no período, sustentando 17."
      }
    }
  },
  "cuba-batista-1952": {
    "id": "cuba-batista-1952",
    "kind": "country",
    "category": "historical-country",
    "name": "Cuba — governo Batista",
    "period": "Ditadura de Fulgencio Batista, 1952–1959",
    "vec": {
      "est": 50,
      "rep": 12,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 24,
      "tec": 50
    },
    "rationale": "Golpe cancelou eleições e concentrou poder; repressão marca os anos finais.",
    "caveats": "Recorte institucional datado; não representa a população, povos subordinados nem governos fora do período. O regime termina em revolução armada; avaliação econômica fica centrada. Eixos sem evidência suficiente permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "Lei Constitucional de 1952",
        "url": "https://www.constituteproject.org/constitution/Cuba_1952",
        "note": "Documento primário ou registro de arquivo relacionado ao período Ditadura de Fulgencio Batista, 1952–1959; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Office of the Historian — Cuba 1958–1960",
        "url": "https://history.state.gov/historicaldocuments/frus1958-60v06",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      }
    ],
    "evidence": {
      "rep": "high",
      "mor": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Lei Constitucional de 1952",
          "Office of the Historian — Cuba 1958–1960"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 12."
      },
      "mor": {
        "sourceTitles": [
          "Lei Constitucional de 1952",
          "Office of the Historian — Cuba 1958–1960"
        ],
        "rationale": "A fonte registra extensão ou restrição de direitos e igualdade no período, sustentando 24."
      }
    }
  },
  "venezuela-punto-fijo": {
    "id": "venezuela-punto-fijo",
    "kind": "country",
    "category": "historical-country",
    "name": "Venezuela — Pacto de Punto Fijo",
    "period": "Democracia pactuada, 1958–1998",
    "vec": {
      "est": 50,
      "rep": 78,
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
    "rationale": "Acordo partidário restabeleceu eleições e estabilidade civil após ditadura.",
    "caveats": "Recorte institucional datado; não representa a população, povos subordinados nem governos fora do período. Pacto excluiu partidos comunistas inicialmente e democracia viveu crise fiscal e social no fim. Eixos sem evidência suficiente permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "Constituição da Venezuela de 1961",
        "url": "https://www.constituteproject.org/constitution/Venezuela_1961",
        "note": "Documento primário ou registro de arquivo relacionado ao período Democracia pactuada, 1958–1998; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Biblioteca Nacional de Venezuela — história política",
        "url": "https://www.bnv.gob.ve/independencia/",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      }
    ],
    "evidence": {
      "rep": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constituição da Venezuela de 1961",
          "Biblioteca Nacional de Venezuela — história política"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 78."
      }
    }
  },
  "france-fourth-republic": {
    "id": "france-fourth-republic",
    "kind": "country",
    "category": "historical-country",
    "name": "França — Quarta República",
    "period": "Regime parlamentar, 1946–1958",
    "vec": {
      "est": 50,
      "rep": 85,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 75,
      "con": 68,
      "com": 50,
      "rel": 50,
      "mor": 69,
      "tec": 50
    },
    "rationale": "Constituição fundou direitos sociais e a reconstrução incluiu nacionalizações.",
    "caveats": "Recorte institucional datado; não representa a população, povos subordinados nem governos fora do período. As guerras coloniais envolveram desigualdade política; codifica o Estado metropolitano. Eixos sem evidência suficiente permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "Constituição francesa de 1946",
        "url": "https://www.conseil-constitutionnel.fr/les-constitutions-dans-l-histoire/constitution-du-27-octobre-1946-ive-republique",
        "note": "Documento primário ou registro de arquivo relacionado ao período Regime parlamentar, 1946–1958; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Assemblée nationale — Constituição de 1946",
        "url": "https://www.assemblee-nationale.fr/histoire/constitutions/constitution-1946.asp",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      }
    ],
    "evidence": {
      "rep": "high",
      "eco": "medium",
      "con": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constituição francesa de 1946",
          "Assemblée nationale — Constituição de 1946"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 85."
      },
      "eco": {
        "sourceTitles": [
          "Constituição francesa de 1946",
          "Assemblée nationale — Constituição de 1946"
        ],
        "rationale": "O documento descreve extensão de propriedade pública, provisão ou coordenação estatal, sustentando 75."
      },
      "con": {
        "sourceTitles": [
          "Constituição francesa de 1946",
          "Assemblée nationale — Constituição de 1946"
        ],
        "rationale": "A fonte documenta direção estatal da economia ou coordenação por mercado, sustentando 68."
      },
      "mor": {
        "sourceTitles": [
          "Constituição francesa de 1946",
          "Assemblée nationale — Constituição de 1946"
        ],
        "rationale": "A fonte registra extensão ou restrição de direitos e igualdade no período, sustentando 69."
      }
    }
  },
  "italy-fascist-regime": {
    "id": "italy-fascist-regime",
    "kind": "country",
    "category": "historical-country",
    "name": "Itália — regime fascista",
    "period": "Ditadura de Mussolini, 1922–1943",
    "vec": {
      "est": 50,
      "rep": 3,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 7,
      "tec": 50
    },
    "rationale": "Ditadura suprimiu oposição e sindicatos e perseguiu direitos civis.",
    "caveats": "Recorte institucional datado; não representa a população, povos subordinados nem governos fora do período. Documento corporativo não prova quanto de economia era pública. Eixos sem evidência suficiente permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "Carta del Lavoro (1927)",
        "url": "https://www.treccani.it/enciclopedia/carta-del-lavoro/",
        "note": "Documento primário ou registro de arquivo relacionado ao período Ditadura de Mussolini, 1922–1943; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Archivio Centrale dello Stato — fundos fascistas",
        "url": "https://acs.cultura.gov.it/archivio-storico/",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      }
    ],
    "evidence": {
      "rep": "high",
      "mor": "high"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Carta del Lavoro (1927)",
          "Archivio Centrale dello Stato — fundos fascistas"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 3."
      },
      "mor": {
        "sourceTitles": [
          "Carta del Lavoro (1927)",
          "Archivio Centrale dello Stato — fundos fascistas"
        ],
        "rationale": "A fonte registra extensão ou restrição de direitos e igualdade no período, sustentando 7."
      }
    }
  },
  "ussr-stalin": {
    "id": "ussr-stalin",
    "kind": "country",
    "category": "historical-country",
    "name": "União Soviética — período Stalin",
    "period": "Coletivização e Grande Terror, 1928–1953",
    "vec": {
      "est": 50,
      "rep": 3,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 98,
      "con": 98,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Partido único e planejamento central constam da ordem constitucional e econômica do período.",
    "caveats": "Recorte institucional datado; não representa a população, povos subordinados nem governos fora do período. O texto constitucional é programático e deve ser confrontado com arquivo de terror e fome. Eixos sem evidência suficiente permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "Constituição soviética de 1936",
        "url": "https://www.marxists.org/reference/archive/stalin/works/1936/12/05.htm",
        "note": "Documento primário ou registro de arquivo relacionado ao período Coletivização e Grande Terror, 1928–1953; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Library of Congress — Soviet Union country study",
        "url": "https://tile.loc.gov/storage-services/master/frd/frdcstdy/so/sovietunioncount00zick/sovietunioncount00zick.pdf",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      }
    ],
    "evidence": {
      "rep": "high",
      "eco": "high",
      "con": "high"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constituição soviética de 1936",
          "Library of Congress — Soviet Union country study"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 3."
      },
      "eco": {
        "sourceTitles": [
          "Constituição soviética de 1936",
          "Library of Congress — Soviet Union country study"
        ],
        "rationale": "O documento descreve extensão de propriedade pública, provisão ou coordenação estatal, sustentando 98."
      },
      "con": {
        "sourceTitles": [
          "Constituição soviética de 1936",
          "Library of Congress — Soviet Union country study"
        ],
        "rationale": "A fonte documenta direção estatal da economia ou coordenação por mercado, sustentando 98."
      }
    }
  },
  "mexico-pri-hegemony": {
    "id": "mexico-pri-hegemony",
    "kind": "country",
    "category": "historical-country",
    "name": "México — regime do PRI hegemônico",
    "period": "Predomínio presidencial do PRI, 1946–2000",
    "vec": {
      "est": 50,
      "rep": 41,
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
    "rationale": "Sistema de partido dominante limitou alternância apesar de eleições e direitos formais.",
    "caveats": "Recorte institucional datado; não representa a população, povos subordinados nem governos fora do período. 1946 marca a adoção do nome PRI; 2000 marca a alternância presidencial. Reformas de 1977, autonomia eleitoral de 1996 e perda da maioria no Congresso em 1997 distinguem fases internas. A Constituição atual não documenta suas versões históricas; mudanças econômicas não são resumidas. Eixos sem evidência suficiente permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "Constituição Política mexicana",
        "url": "https://www.diputados.gob.mx/LeyesBiblio/pdf/CPEUM.pdf",
        "note": "Documento primário ou registro de arquivo relacionado ao período Predomínio presidencial do PRI, 1946–2000; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Historia mínima de las elecciones en México — INE, Javier Garciadiego",
        "url": "https://portal.ine.mx/wp-content/uploads/2022/02/deceyec-cm39.pdf",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      }
    ],
    "evidence": {
      "rep": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Historia mínima de las elecciones en México — INE, Javier Garciadiego"
        ],
        "rationale": "Páginas 56–58 contextualizam a transformação em PRI e o apoio estatal; páginas 80 e 92–93 distinguem reformas, autonomia eleitoral em 1996 e alternância em 2000. A direção de partido dominante não indica competição constante em todo o recorte."
      }
    }
  }
} as unknown as Record<string,ReferenceEntry>;

export const historicalCountryProvenance03Proposals = {
  "prc-mao-1949": {
    "id": "prc-mao-1949",
    "kind": "country",
    "category": "historical-country",
    "name": "China — período Mao",
    "period": "República Popular sob Mao, 01/10/1949–09/09/1976; norma examinada: Constituição fundadora de 20/09/1954, durante a transição socialista.",
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
    "rationale": "Carta de 1954 prioriza economia estatal e planejamento, preservando propriedade camponesa, individual e capitalista na transição.",
    "caveats": "Preambulo e frente política não bastam para medir competição eleitoral. Grande Salto, Revolução Cultural, coerção, secularismo e moral não são graduados sem prática documentada própria. Os limites cronológicos referem-se à fase sob Mao, não à existência da República Popular. A tradução de 1954 descreve direção econômica legal; o cotejo integral chinês e a prática de todas as fases não foram certificados.",
    "sources": [
      {
        "title": "Rapprochement with China, 1972 — Office of the Historian",
        "url": "https://history.state.gov/milestones/1969-1976/rapprochement-china",
        "note": "Delimita a fundação da República Popular em 1949 e descreve seu governo no período Mao."
      },
      {
        "title": "China and the Cultural Revolution — Office of the Historian",
        "url": "https://history.state.gov/historicaldocuments/frus1964-68v30/d302",
        "note": "Avaliação histórica contemporânea sobre centralização partidária, Grande Salto e Revolução Cultural."
      },
      {
        "title": "Constitution of the People’s Republic of China (1954)",
        "url": "https://www.marxists.org/subject/china/documents/constitution-1954.htm",
        "note": "Fonte primária para a estrutura estatal e econômica declarada no período."
      },
      {
        "title": "Constitution of the People’s Republic of China, 1954 — translated primary text",
        "url": "https://en.wikisource.org/wiki/Constitution_of_the_People%27s_Republic_of_China_(1954)",
        "note": "Tradução reproduzida em Senate hearings1972; cotejo integral com chinês oficial pendente."
      },
      {
        "title": "Constitution of the People’s Republic of China1954 — translated primary republication",
        "url": "https://en.wikisource.org/wiki/Constitution_of_the_People%27s_Republic_of_China_(1954)",
        "note": "Leitura documental anterior registrada dos arts.5–10/13/15 da tradução de 1954 reproduzida em 1972: setor estatal prioritário, transformação, plano e proteção transitória de propriedades camponesa, individual e capitalista. Não é leitura nova do original chinês nem prática integral 1949–1976."
      },
      {
        "title": "Ministério dos Negócios Estrangeiros chinês — 1 de outubro",
        "url": "https://www.mfa.gov.cn/web/ziliao_674904/historytoday_674971/200310/t20031001_9284650.shtml",
        "note": "01/10/1949: proclamação do governo central da República Popular. Escopo lido: Parágrafo 97 completo: proclamação de Mao em 01/10/1949. Texto comemorativo institucional, não exame de todo o governo."
      },
      {
        "title": "Ministério dos Negócios Estrangeiros chinês — 9 de setembro",
        "url": "https://www.mfa.gov.cn/ziliao_674904/historytoday_674971/200309/t20030909_7949146.shtml",
        "note": "09/09/1976: morte de Mao. Escopo lido: Parágrafo 97 completo: falecimento em Pequim e luto nacional. A República Popular não terminou nesta data; término da liderança pessoal no recorte."
      }
    ],
    "evidence": {
      "eco": "medium",
      "con": "medium"
    },
    "axisEvidence": {
      "eco": {
        "sourceTitles": [
          "Constitution of the People’s Republic of China, 1954 — translated primary text"
        ],
        "rationale": "Prioridade estatal em economia ainda mista sustenta direção pública moderada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Transformação prevista não prova predomínio realizado; propriedade pessoal e capitalista não são omitidas."
      },
      "con": {
        "sourceTitles": [
          "Constitution of the People’s Republic of China, 1954 — translated primary text"
        ],
        "rationale": "Direção nacional com instrumentos de controle sustenta planejamento moderado. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não mede cumprimento, detalhe alocativo ou regimes posteriores; não deduz monopólio total do plano."
      }
    },
    "coding": {
      "eco": {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "rationale": "Prioridade estatal em economia ainda mista sustenta direção pública moderada.",
        "uncertainty": "Transformação prevista não prova predomínio realizado; propriedade pessoal e capitalista não são omitidas.",
        "reviewedOn": "2026-10-07",
        "claims": [
          {
            "sourceTitle": "Constitution of the People’s Republic of China, 1954 — translated primary text",
            "locator": "Arts.5–10 e13",
            "statement": "Setor estatal é dirigente e prioritário, mas propriedade camponesa, individual e capitalista é protegida durante transformação gradual.",
            "basis": "norm",
            "publishedDate": "1954-09-20",
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
      "con": {
        "axis": "con",
        "position": "moderate-first",
        "confidence": "medium",
        "rationale": "Direção nacional com instrumentos de controle sustenta planejamento moderado.",
        "uncertainty": "Não mede cumprimento, detalhe alocativo ou regimes posteriores; não deduz monopólio total do plano.",
        "reviewedOn": "2026-10-07",
        "claims": [
          {
            "sourceTitle": "Constitution of the People’s Republic of China, 1954 — translated primary text",
            "locator": "Arts.10 e15",
            "statement": "Estado orienta transformação e crescimento por plano econômico, incluindo controle administrativo do setor capitalista.",
            "basis": "norm",
            "publishedDate": "1954-09-20",
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
      "independentReview": "pending",
      "scope": "Carta fundadora1954 em transição socialista; não todas as fases1949–1976."
    },
    "unknownAxisReasons": {
      "est": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Preambulo e frente política não bastam para medir competição eleitoral. Grande Salto, Revolução Cultural, coerção, secularismo e moral não são graduados sem prática documentada própria.",
      "rep": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Preambulo e frente política não bastam para medir competição eleitoral. Grande Salto, Revolução Cultural, coerção, secularismo e moral não são graduados sem prática documentada própria.",
      "pod": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Preambulo e frente política não bastam para medir competição eleitoral. Grande Salto, Revolução Cultural, coerção, secularismo e moral não são graduados sem prática documentada própria.",
      "imi": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Preambulo e frente política não bastam para medir competição eleitoral. Grande Salto, Revolução Cultural, coerção, secularismo e moral não são graduados sem prática documentada própria.",
      "dip": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Preambulo e frente política não bastam para medir competição eleitoral. Grande Salto, Revolução Cultural, coerção, secularismo e moral não são graduados sem prática documentada própria.",
      "int": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Preambulo e frente política não bastam para medir competição eleitoral. Grande Salto, Revolução Cultural, coerção, secularismo e moral não são graduados sem prática documentada própria.",
      "com": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Preambulo e frente política não bastam para medir competição eleitoral. Grande Salto, Revolução Cultural, coerção, secularismo e moral não são graduados sem prática documentada própria.",
      "rel": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Preambulo e frente política não bastam para medir competição eleitoral. Grande Salto, Revolução Cultural, coerção, secularismo e moral não são graduados sem prática documentada própria.",
      "mor": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Preambulo e frente política não bastam para medir competição eleitoral. Grande Salto, Revolução Cultural, coerção, secularismo e moral não são graduados sem prática documentada própria.",
      "tec": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Preambulo e frente política não bastam para medir competição eleitoral. Grande Salto, Revolução Cultural, coerção, secularismo e moral não são graduados sem prática documentada própria."
    }
  },
  "cuba-revolutionary-1959": {
    "id": "cuba-revolutionary-1959",
    "kind": "country",
    "category": "historical-country",
    "name": "Cuba — fase fundadora do governo revolucionário",
    "period": "Fase revolucionária fundadora, 01/01/1959 até a Constituição de 24/02/1976; norma examinada: Carta de 1976. O regime não terminou em 1976.",
    "vec": {
      "est": 50,
      "rep": 20,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 80,
      "con": 80,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Carta de 1976 define direção partidária comunista, propriedade socialista dos grandes meios produtivos e plano econômico único.",
    "caveats": "Transcrição fundadora não certifica prática de 1959–1976. Liberdades condicionadas e trechos religiosos não integralmente cotejados impedem graduar pod/rel; demais eixos desconhecidos. 1976 encerra a fase fundadora escolhida pela pesquisa com a institucionalização constitucional, não o governo revolucionário. A Carta de 1976 não descreve automaticamente a prática de 1959; propriedade camponesa e cooperativas coexistem com o setor socialista.",
    "sources": [
      {
        "title": "Foreign Relations of the United States, Cuba, 1958–1960 — Office of the Historian",
        "url": "https://history.state.gov/historicaldocuments/frus1958-60v06/d217",
        "note": "Registro diplomático contemporâneo da queda de Batista e da formação do governo provisório em 1959."
      },
      {
        "title": "Cuba: A Country Study — Library of Congress",
        "url": "https://tile.loc.gov/storage-services/master/frd/frdcstdy/cu/cubacountrystudy00huds/cubacountrystudy00huds.pdf",
        "note": "Estudo histórico sobre reforma agrária, expropriações e consolidação do governo revolucionário."
      },
      {
        "title": "Constitución de la República de Cuba de 1976 — Granma",
        "url": "https://www.granma.cu/file/pdf/gaceta/Constituci%C3%B3n%20de%20la%20Rep%C3%BAblica%20de%20Cuba.pdf",
        "note": "Fonte primária para economia planificada, direitos declarados e papel dirigente do Partido Comunista."
      },
      {
        "title": "Constitución de la República de Cuba, texto original1976 — transcripción",
        "url": "https://es.wikisource.org/wiki/Constituci%C3%B3n_de_la_Rep%C3%BAblica_de_Cuba_%281976%29",
        "note": "Original1976, sem imputar redações1992/2002; cotejo oficial integral pendente."
      },
      {
        "title": "Constitución de Cuba1976 — founder transcription",
        "url": "https://es.wikisource.org/wiki/Constituci%C3%B3n_de_la_Rep%C3%BAblica_de_Cuba_%281976%29",
        "note": "Leitura documental anterior registrada dos arts.5/14–16/20/66/69 da carta fundadora 1976: direção partidária, propriedade e plano socialista, com pequena propriedade camponesa, cooperativas e mecanismos eleitorais formais. Não se empregam reformas posteriores como texto original."
      },
      {
        "title": "FRUS — telegrama208 de Havana",
        "url": "https://history.state.gov/historicaldocuments/frus1958-60v06/d208",
        "note": "01/01/1959: telegrama já registra saída de Batista e disputa pela autoridade provisória. Escopo lido: Cabeçalho e corpo 5–15 completos. Observação diplomática contemporânea norte-americana, não ata cubana de posse; novo governo ainda em formação."
      },
      {
        "title": "WIPO Lex — metadados da Constituição cubana",
        "url": "https://www.wipo.int/wipolex/en/legislation/details/10663",
        "note": "24/02/1976: marco de proclamação/adoção constitucional que delimita a fase fundadora examinada. Escopo lido: Campo de datas/versão e nota histórica; não usado como corpo original 1976. Metadados de versão posterior; as cláusulas políticas vêm exclusivamente da leitura anterior da carta fundadora 1976, não das reformas 1992/2002."
      }
    ],
    "evidence": {
      "rep": "medium",
      "eco": "medium",
      "con": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constitución de la República de Cuba, texto original1976 — transcripción"
        ],
        "rationale": "Supremacia partidária constitutiva sustenta autocracia forte normativa. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Não imputa fraude; eleição e revogação formais são contrapontos sem provar competição pluralista."
      },
      "eco": {
        "sourceTitles": [
          "Constitución de la República de Cuba, texto original1976 — transcripción"
        ],
        "rationale": "Abrangência central dos meios produtivos sustenta orientação pública forte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Não confunde propriedade pessoal ou cooperativa com estatal nem quantifica ativos efetivos."
      },
      "con": {
        "sourceTitles": [
          "Constitución de la República de Cuba, texto original1976 — transcripción"
        ],
        "rationale": "Plano nacional único e poder de direção sustentam planejamento forte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Participação é contraponto de governança; declaração não prova cumprimento do plano."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "strong-second",
        "confidence": "medium",
        "rationale": "Supremacia partidária constitutiva sustenta autocracia forte normativa.",
        "uncertainty": "Não imputa fraude; eleição e revogação formais são contrapontos sem provar competição pluralista.",
        "reviewedOn": "2026-10-07",
        "claims": [
          {
            "sourceTitle": "Constitución de la República de Cuba, texto original1976 — transcripción",
            "locator": "Arts.5,66 e69",
            "statement": "Partido Comunista é força dirigente superior da sociedade e Estado; órgãos eletivos e revogabilidade operam dentro desse desenho.",
            "basis": "norm",
            "publishedDate": "1976-02-24",
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
        "rationale": "Abrangência central dos meios produtivos sustenta orientação pública forte.",
        "uncertainty": "Não confunde propriedade pessoal ou cooperativa com estatal nem quantifica ativos efetivos.",
        "reviewedOn": "2026-10-07",
        "claims": [
          {
            "sourceTitle": "Constitución de la República de Cuba, texto original1976 — transcripción",
            "locator": "Arts.14–15 e20",
            "statement": "Propriedade socialista abrange grandes setores produtivos nacionalizados; pequenos agricultores e cooperativas coexistem.",
            "basis": "norm",
            "publishedDate": "1976-02-24",
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
        "confidence": "medium",
        "rationale": "Plano nacional único e poder de direção sustentam planejamento forte.",
        "uncertainty": "Participação é contraponto de governança; declaração não prova cumprimento do plano.",
        "reviewedOn": "2026-10-07",
        "claims": [
          {
            "sourceTitle": "Constitución de la República de Cuba, texto original1976 — transcripción",
            "locator": "Art.16",
            "statement": "Estado organiza, dirige e controla economia por plano único com participação dos trabalhadores.",
            "basis": "norm",
            "publishedDate": "1976-02-24",
            "accessedDate": "2026-10-07"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      }
    },
    "documentaryReview": {
      "status": "author-reviewed-bounded-claims",
      "reviewedOn": "2026-10-07",
      "independentReview": "pending",
      "scope": "Carta socialista fundadora1976, término do recorte1959–1976; não toda trajetória desde a revolução."
    },
    "unknownAxisReasons": {
      "est": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Transcrição fundadora não certifica prática de1959–1976. Liberdades condicionadas e trechos religiosos não integralmente cotejados impedem graduar pod/rel; demais eixos desconhecidos.",
      "pod": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Transcrição fundadora não certifica prática de1959–1976. Liberdades condicionadas e trechos religiosos não integralmente cotejados impedem graduar pod/rel; demais eixos desconhecidos.",
      "imi": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Transcrição fundadora não certifica prática de1959–1976. Liberdades condicionadas e trechos religiosos não integralmente cotejados impedem graduar pod/rel; demais eixos desconhecidos.",
      "dip": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Transcrição fundadora não certifica prática de1959–1976. Liberdades condicionadas e trechos religiosos não integralmente cotejados impedem graduar pod/rel; demais eixos desconhecidos.",
      "int": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Transcrição fundadora não certifica prática de1959–1976. Liberdades condicionadas e trechos religiosos não integralmente cotejados impedem graduar pod/rel; demais eixos desconhecidos.",
      "com": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Transcrição fundadora não certifica prática de1959–1976. Liberdades condicionadas e trechos religiosos não integralmente cotejados impedem graduar pod/rel; demais eixos desconhecidos.",
      "rel": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Transcrição fundadora não certifica prática de1959–1976. Liberdades condicionadas e trechos religiosos não integralmente cotejados impedem graduar pod/rel; demais eixos desconhecidos.",
      "mor": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Transcrição fundadora não certifica prática de1959–1976. Liberdades condicionadas e trechos religiosos não integralmente cotejados impedem graduar pod/rel; demais eixos desconhecidos.",
      "tec": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Transcrição fundadora não certifica prática de1959–1976. Liberdades condicionadas e trechos religiosos não integralmente cotejados impedem graduar pod/rel; demais eixos desconhecidos."
    }
  },
  "portugal-estado-novo-1933": {
    "id": "portugal-estado-novo-1933",
    "kind": "country",
    "category": "historical-country",
    "name": "Portugal — Estado Novo",
    "period": "Estado Novo, Constituição em vigor desde 11/04/1933 até o derrube em 25/04/1974; pesquisa política: fundação de 1933 e eleição/Assembleia de 1934–1935.",
    "vec": {
      "est": 50,
      "rep": 20,
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
    "rationale": "História parlamentar documenta franquia restrita, candidaturas da União Nacional e abertura da Assembleia somente em 1935.",
    "caveats": "Fonte institucional de prática delimitada, não leitura integral da carta 1933. Censura, religião, império, comércio e moral necessitam fontes próprias; não herdamos valores anteriores. A fonte política é uma história parlamentar institucional, não leitura integral da Carta de 1933. Duas fontes institucionais divergem entre 10 e 11 de janeiro sobre a abertura de 1935; esse dia não é resolvido por suposição.",
    "sources": [
      {
        "title": "Estado Novo — Assembleia da República",
        "url": "https://www.parlamento.pt/Parlamento/Paginas/EstadoNovo.aspx",
        "note": "Síntese histórica parlamentar sobre a ditadura, corporativismo, censura e queda em 1974."
      },
      {
        "title": "Constituição Política da República Portuguesa, 1933 — Diário da República",
        "url": "https://diariodarepublica.pt/dr/legislacao-consolidada/decreto/1933-69985699",
        "note": "Texto constitucional primário que instituiu a ordem corporativa do período."
      },
      {
        "title": "O início dos trabalhos no Parlamento — Assembleia da República, março2022",
        "url": "https://app.parlamento.pt/comunicar/V1/202203/78/artigos/art6.html",
        "note": "História institucional com ligações a atas primárias1935; PDFconstitucional sem camada textual não foi tratado como lido."
      },
      {
        "title": "Assembleia da República — início dos trabalhos no Parlamento",
        "url": "https://app.parlamento.pt/comunicar/V1/202203/78/artigos/art6.html",
        "note": "Leitura documental anterior da história parlamentar publicada em março 2022: plebiscito 1933, franquia restrita, candidaturas da União Nacional e abertura em 1935. Relato institucional retrospectivo; não leitura integral da carta 1933."
      },
      {
        "title": "Arquivo Histórico Parlamentar — projeto e ata de apuramento1933",
        "url": "https://ahpweb.parlamento.pt/Detalhe/?id=84303&pesq=ps&t=8&tx=montepio+militar",
        "note": "11/04/1933: entrada em vigor da Constituição do Estado Novo. Escopo lido: Descrição 27–31 efetivamente lida: projeto 22/02, ata 09/04 e vigência 11/04/1933. Descrição arquivística; não leitura da cópia manuscrita nem de toda a Carta."
      },
      {
        "title": "Assembleia da República — Dias da ditadura",
        "url": "https://www.parlamento.pt/Parlamento/Paginas/dias-ditadura.aspx",
        "note": "25/04/1974: derrube do Estado Novo; última reunião sem quórum da Assembleia. Escopo lido: Corpo 277–293: antecedentes 1926, Constituição 1933, eleição 1934 e última reunião 25/04/1974. Este relato situa abertura parlamentar em 11/01/1935; a fonte anterior registra 10/01. Não se resolve essa divergência por suposição."
      }
    ],
    "evidence": {
      "rep": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "O início dos trabalhos no Parlamento — Assembleia da República, março2022"
        ],
        "rationale": "Ausência de representação durante fundação e seleção partidária subordinada sustentam orientação autocrática forte. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Retrospectiva institucional não é auditoria de todos os pleitos; Parlamento eleito1934 e mulheres diplomadas elegíveis são contrapontos limitados."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "strong-second",
        "confidence": "medium",
        "rationale": "Ausência de representação durante fundação e seleção partidária subordinada sustentam orientação autocrática forte.",
        "uncertainty": "Retrospectiva institucional não é auditoria de todos os pleitos; Parlamento eleito1934 e mulheres diplomadas elegíveis são contrapontos limitados.",
        "reviewedOn": "2026-10-07",
        "claims": [
          {
            "sourceTitle": "O início dos trabalhos no Parlamento — Assembleia da República, março2022",
            "locator": "Seção Assembleia Nacional1935; plebiscito1933, eleição1934 e discurso10janeiro1935",
            "statement": "Parlamento ficou fechado até1935; abstenções do plebiscito contaram favoravelmente; eleitos1934 foram propostos pela União Nacional, sob franquia restrita.",
            "basis": "practice",
            "publishedDate": "2022-03; relata1933–1935",
            "accessedDate": "2026-10-07"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 20,
        "range": [
          10,
          25
        ]
      }
    },
    "documentaryReview": {
      "status": "author-reviewed-bounded-claims",
      "reviewedOn": "2026-10-07",
      "independentReview": "pending",
      "scope": "Fundação1933, eleição1934 e abertura parlamentar1935; não todo Salazar/Caetano até1974."
    },
    "unknownAxisReasons": {
      "est": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Fonte institucional de prática delimitada, não leitura integral da carta1933. Censura, religião, império, comércio e moral necessitam fontes próprias; não herdamos valores anteriores.",
      "pod": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Fonte institucional de prática delimitada, não leitura integral da carta1933. Censura, religião, império, comércio e moral necessitam fontes próprias; não herdamos valores anteriores.",
      "imi": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Fonte institucional de prática delimitada, não leitura integral da carta1933. Censura, religião, império, comércio e moral necessitam fontes próprias; não herdamos valores anteriores.",
      "dip": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Fonte institucional de prática delimitada, não leitura integral da carta1933. Censura, religião, império, comércio e moral necessitam fontes próprias; não herdamos valores anteriores.",
      "int": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Fonte institucional de prática delimitada, não leitura integral da carta1933. Censura, religião, império, comércio e moral necessitam fontes próprias; não herdamos valores anteriores.",
      "eco": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Fonte institucional de prática delimitada, não leitura integral da carta1933. Censura, religião, império, comércio e moral necessitam fontes próprias; não herdamos valores anteriores.",
      "con": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Fonte institucional de prática delimitada, não leitura integral da carta1933. Censura, religião, império, comércio e moral necessitam fontes próprias; não herdamos valores anteriores.",
      "com": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Fonte institucional de prática delimitada, não leitura integral da carta1933. Censura, religião, império, comércio e moral necessitam fontes próprias; não herdamos valores anteriores.",
      "rel": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Fonte institucional de prática delimitada, não leitura integral da carta1933. Censura, religião, império, comércio e moral necessitam fontes próprias; não herdamos valores anteriores.",
      "mor": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Fonte institucional de prática delimitada, não leitura integral da carta1933. Censura, religião, império, comércio e moral necessitam fontes próprias; não herdamos valores anteriores.",
      "tec": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Fonte institucional de prática delimitada, não leitura integral da carta1933. Censura, religião, império, comércio e moral necessitam fontes próprias; não herdamos valores anteriores."
    }
  },
  "roc-taiwan-1949": {
    "id": "roc-taiwan-1949",
    "kind": "country",
    "category": "historical-country",
    "name": "Taiwan — República da China sob lei marcial",
    "period": "Taiwan sob lei marcial, 20/05/1949 até sua revogação em 15/07/1987; norma examinada: Disposições Temporárias na edição de 17/03/1972.",
    "vec": {
      "est": 50,
      "rep": 40,
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
    "rationale": "Disposições de 1972 prolongam mandatos centrais e permitem reeleição presidencial ilimitada, com eleições adicionais em áreas livres.",
    "caveats": "Fim da lei marcial 1987 e abolição destas normas 1991 são eventos distintos. Poder de emergência não basta para medir coerção efetiva; desenvolvimento, religião e comércio não graduados. Declaração da lei marcial em 19/05/1949 e vigência em 20/05 são eventos distintos. A norma de 1972 manteve mandatos centrais e eleições adicionais; sua abolição em 1991 não é o fim da lei marcial em 1987. O relato presidencial retrospectivo tem perspectiva política própria.",
    "sources": [
      {
        "title": "Taiwan’s transition to democracy — National Human Rights Museum",
        "url": "https://www.nhrm.gov.tw/w/nhrmEN/History_22070117122319529",
        "note": "Instituição pública documenta lei marcial, repressão e levantamento em 1987."
      },
      {
        "title": "The Constitution of the Republic of China — Office of the President",
        "url": "https://english.president.gov.tw/Page/94",
        "note": "Fonte primária para a carta constitucional e sua aplicação sob disposições temporárias de emergência."
      },
      {
        "title": "Taiwan — Library of Congress Country Studies",
        "url": "https://tile.loc.gov/storage-services/master/frd/frdcstdy/taiwan/taiwanhistori00dobb_0/taiwanhistori00dobb.pdf",
        "note": "Estudo sobre reforma agrária, industrialização e papel econômico estatal."
      },
      {
        "title": "Temporary Provisions Effective During the Period of Communist Rebellion, edition1972",
        "url": "https://en.wikisource.org/wiki/Temporary_Provisions_Effective_During_the_Period_of_Communist_Rebellion_(1972)",
        "note": "Tradução primária da edição1972; cotejo com original chinês oficial pendente."
      },
      {
        "title": "TemporaryProvisions during CommunistRebellion — edition1972",
        "url": "https://en.wikisource.org/wiki/Temporary_Provisions_Effective_During_the_Period_of_Communist_Rebellion_(1972)",
        "note": "Leitura documental anterior registrada das disposições 2–3/6(1–3)/8/10–11 na edição 17/03/1972: mandatos mantidos, reeleição e assentos adicionais; controle legislativo de emergência como limite. Não equivale à norma de lei marcial nem a prática integral 1949–1987."
      },
      {
        "title": "Presidência taiwanesa — conferência sobre trinta anos de eleição direta",
        "url": "https://www.president.gov.tw/News/39886",
        "note": "20/05/1949: início da aplicação da lei marcial em Taiwan. Escopo lido: Parágrafo completo da cronologia 1947/20/05/1949 retornado por busca dirigida à URL exata. Texto de discurso institucional; abertura direta não recuperou essa passagem. Declaração 19/05 é evento distinto da vigência 20/05."
      },
      {
        "title": "Presidência taiwanesa — vinte anos do fim da lei marcial",
        "url": "https://english.president.gov.tw/NEWS/2717",
        "note": "15/07/1987,0 h: fim da lei marcial. Escopo lido: Corpo 65–70, especialmente 66. Relato presidencial retrospectivo com interpretação partidária; não se equipara à abolição das disposições temporárias 1991."
      }
    ],
    "evidence": {
      "rep": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Temporary Provisions Effective During the Period of Communist Rebellion, edition1972"
        ],
        "rationale": "Renovação representativa suspensa e continuidade excepcional sustentam direção autocrática moderada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Legislativo pode modificar emergência e assentos adicionais se renovam; texto não prova partido único ou ausência absoluta de competição."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-second",
        "confidence": "medium",
        "rationale": "Renovação representativa suspensa e continuidade excepcional sustentam direção autocrática moderada.",
        "uncertainty": "Legislativo pode modificar emergência e assentos adicionais se renovam; texto não prova partido único ou ausência absoluta de competição.",
        "reviewedOn": "2026-10-07",
        "claims": [
          {
            "sourceTitle": "Temporary Provisions Effective During the Period of Communist Rebellion, edition1972",
            "locator": "§§2–3,6(1–3),8 e10–11",
            "statement": "Mandatos centrais originais continuam até recuperação territorial; reeleição presidencial é ilimitada e eleições adicionais em áreas livres coexistem.",
            "basis": "norm",
            "publishedDate": "1972-03-17; cronologia de emendas no cabeçalho",
            "accessedDate": "2026-10-07"
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
    "documentaryReview": {
      "status": "author-reviewed-bounded-claims",
      "reviewedOn": "2026-10-07",
      "independentReview": "pending",
      "scope": "Disposições temporárias na edição1972 dentro do recorte1949–1987; abolição1991 não é fim da lei marcial1987."
    },
    "unknownAxisReasons": {
      "est": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Fim da lei marcial1987 e abolição destas normas1991 são eventos distintos. Poder de emergência não basta para medir coerção efetiva; desenvolvimento, religião e comércio não graduados.",
      "pod": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Fim da lei marcial1987 e abolição destas normas1991 são eventos distintos. Poder de emergência não basta para medir coerção efetiva; desenvolvimento, religião e comércio não graduados.",
      "imi": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Fim da lei marcial1987 e abolição destas normas1991 são eventos distintos. Poder de emergência não basta para medir coerção efetiva; desenvolvimento, religião e comércio não graduados.",
      "dip": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Fim da lei marcial1987 e abolição destas normas1991 são eventos distintos. Poder de emergência não basta para medir coerção efetiva; desenvolvimento, religião e comércio não graduados.",
      "int": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Fim da lei marcial1987 e abolição destas normas1991 são eventos distintos. Poder de emergência não basta para medir coerção efetiva; desenvolvimento, religião e comércio não graduados.",
      "eco": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Fim da lei marcial1987 e abolição destas normas1991 são eventos distintos. Poder de emergência não basta para medir coerção efetiva; desenvolvimento, religião e comércio não graduados.",
      "con": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Fim da lei marcial1987 e abolição destas normas1991 são eventos distintos. Poder de emergência não basta para medir coerção efetiva; desenvolvimento, religião e comércio não graduados.",
      "com": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Fim da lei marcial1987 e abolição destas normas1991 são eventos distintos. Poder de emergência não basta para medir coerção efetiva; desenvolvimento, religião e comércio não graduados.",
      "rel": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Fim da lei marcial1987 e abolição destas normas1991 são eventos distintos. Poder de emergência não basta para medir coerção efetiva; desenvolvimento, religião e comércio não graduados.",
      "mor": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Fim da lei marcial1987 e abolição destas normas1991 são eventos distintos. Poder de emergência não basta para medir coerção efetiva; desenvolvimento, religião e comércio não graduados.",
      "tec": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Fim da lei marcial1987 e abolição destas normas1991 são eventos distintos. Poder de emergência não basta para medir coerção efetiva; desenvolvimento, religião e comércio não graduados."
    }
  },
  "france-de-gaulle-1958": {
    "id": "france-de-gaulle-1958",
    "kind": "country",
    "category": "historical-country",
    "name": "França — presidência de Charles de Gaulle",
    "period": "Presidência de de Gaulle, 08/01/1959–28/04/1969; norma examinada: Constituição inicial de 04/10/1958, que precedeu sua investidura.",
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
      "rel": 60,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Carta inicial de 1958 combina sufrágio e responsabilidade parlamentar com Presidência forte, dissolução e poderes de emergência.",
    "caveats": "Carta fundadora não mede planejamento indicativo, nuclearização, imigração ou colonialismo. Relações comunitárias externas não são confundidas com federação doméstica; est permanece desconhecido. 1958 é a fundação constitucional, não o início da presidência de de Gaulle em 1959. O texto inicial previa eleição presidencial indireta; não incorpora automaticamente a reforma de 1962. A renúncia de 1969 não encerrou a Quinta República.",
    "sources": [
      {
        "title": "Constitution française du 4 octobre 1958 — Vie-publique",
        "url": "https://www.vie-publique.fr/fiches/19463-que-dit-la-constitution-de-1958",
        "note": "Explica o fortalecimento do Executivo e a estrutura da Quinta República."
      },
      {
        "title": "Référendum de 1962 — Assemblée nationale",
        "url": "https://www.assemblee-nationale.fr/histoire/suffrage-universel-direct-president-republique.asp",
        "note": "Contexto institucional da eleição presidencial por sufrágio universal direto."
      },
      {
        "title": "France — Office of the Historian, U.S. Department of State",
        "url": "https://history.state.gov/milestones/1961-1968/degaulle",
        "note": "Contextualiza a política externa independente e os conflitos do período."
      },
      {
        "title": "Constitution française1958, version initiale — Imprimerie nationale, transcription",
        "url": "https://fr.wikisource.org/wiki/Constitution_fran%C3%A7aise_de_1958_(version_initiale)",
        "note": "Edição original1958 vinculada a fac-símile; eleição presidencial indireta é anterior à reforma1962."
      },
      {
        "title": "Constitution1958 — version initiale transcription",
        "url": "https://fr.wikisource.org/wiki/Constitution_fran%C3%A7aise_de_1958_(version_initiale)",
        "note": "Leitura documental anterior registrada dos arts.2–4/6/12/16/20/24/49–50 da versão inicial 04/10/1958: sufrágio, partidos, responsabilidade do gabinete e poderes presidenciais. Eleição presidencial inicial indireta; não se importa a reforma 1962."
      },
      {
        "title": "Assembleia Nacional francesa — instituição da Quinta República",
        "url": "https://www.assemblee-nationale.fr/dyn/histoire-et-patrimoine/cinquieme-republique/la-constitution-de-1958-et-l-instauration-de-la-ve-republique",
        "note": "04/10/1958: promulgação da Constituição que institui a Quinta República, publicada 05/10. Escopo lido: Corpo 139–164 efetivamente lido, especialmente 152–154. Promulgação, publicação e instalação dos novos órgãos são marcos diferentes; a crise governamental de junho não equivale à substituição formal em outubro."
      },
      {
        "title": "Élysée — investidura de Charles de Gaulle",
        "url": "https://www.elysee.fr/la-presidence/l-investiture-de-charles-de-gaulle",
        "note": "08/01/1959: investidura presidencial de de Gaulle. Escopo lido: Discurso inicial e legendas da cerimônia de 08/01/1959; cerimônia 1966 separada. A fundação constitucional 1958 precede sua presidência; eleição de 1958 foi indireta."
      },
      {
        "title": "Élysée — Charles de Gaulle",
        "url": "https://www.elysee.fr/en/charles-de-gaulle",
        "note": "Referendo 27/04/1969 rejeitado; renúncia no dia seguinte,28/04/1969. Escopo lido: Cabeçalho 1959–1969 e corpo 122–124 completos. 1969 termina a presidência, não a Quinta República; não se reproduz o erro descritivo inglês sobre o cargo ocupado em junho 1958."
      }
    ],
    "evidence": {
      "rep": "medium",
      "rel": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constitution française1958, version initiale — Imprimerie nationale, transcription"
        ],
        "rationale": "Competição e controle parlamentar sustentam democracia moderada com contrapoder executivo explícito. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não mede prática na guerra argelina; Presidência ainda indireta e artigos16/49.3 limitam leitura irrestrita."
      },
      "rel": {
        "sourceTitles": [
          "Constitution française1958, version initiale — Imprimerie nationale, transcription"
        ],
        "rationale": "Laicidade institucional explícita sustenta direção secular moderada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não certifica uniformidade regional, financiamento religioso ou irreligiosidade pessoal."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "rationale": "Competição e controle parlamentar sustentam democracia moderada com contrapoder executivo explícito.",
        "uncertainty": "Não mede prática na guerra argelina; Presidência ainda indireta e artigos16/49.3 limitam leitura irrestrita.",
        "reviewedOn": "2026-10-07",
        "claims": [
          {
            "sourceTitle": "Constitution française1958, version initiale — Imprimerie nationale, transcription",
            "locator": "Arts.3–4,6,12,16,20,24,49–50",
            "statement": "Sufrágio amplo, partidos livres e responsabilidade parlamentar coexistem com Presidência forte, dissolução, emergência e legislação vinculada à confiança.",
            "basis": "norm",
            "publishedDate": "1958-10-04",
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
        "rationale": "Laicidade institucional explícita sustenta direção secular moderada.",
        "uncertainty": "Não certifica uniformidade regional, financiamento religioso ou irreligiosidade pessoal.",
        "reviewedOn": "2026-10-07",
        "claims": [
          {
            "sourceTitle": "Constitution française1958, version initiale — Imprimerie nationale, transcription",
            "locator": "Art.2 da versão original1958",
            "statement": "República é laica e assegura igualdade sem distinção religiosa e respeito a todas as crenças.",
            "basis": "norm",
            "publishedDate": "1958-10-04",
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
      "independentReview": "pending",
      "scope": "Arranjo inicial1958 anterior à reforma1962; não prática uniforme1958–1969."
    },
    "unknownAxisReasons": {
      "est": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Carta fundadora não mede planejamento indicativo, nuclearização, imigração ou colonialismo. Relações comunitárias externas não são confundidas com federação doméstica; est permanece desconhecido.",
      "pod": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Carta fundadora não mede planejamento indicativo, nuclearização, imigração ou colonialismo. Relações comunitárias externas não são confundidas com federação doméstica; est permanece desconhecido.",
      "imi": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Carta fundadora não mede planejamento indicativo, nuclearização, imigração ou colonialismo. Relações comunitárias externas não são confundidas com federação doméstica; est permanece desconhecido.",
      "dip": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Carta fundadora não mede planejamento indicativo, nuclearização, imigração ou colonialismo. Relações comunitárias externas não são confundidas com federação doméstica; est permanece desconhecido.",
      "int": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Carta fundadora não mede planejamento indicativo, nuclearização, imigração ou colonialismo. Relações comunitárias externas não são confundidas com federação doméstica; est permanece desconhecido.",
      "eco": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Carta fundadora não mede planejamento indicativo, nuclearização, imigração ou colonialismo. Relações comunitárias externas não são confundidas com federação doméstica; est permanece desconhecido.",
      "con": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Carta fundadora não mede planejamento indicativo, nuclearização, imigração ou colonialismo. Relações comunitárias externas não são confundidas com federação doméstica; est permanece desconhecido.",
      "com": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Carta fundadora não mede planejamento indicativo, nuclearização, imigração ou colonialismo. Relações comunitárias externas não são confundidas com federação doméstica; est permanece desconhecido.",
      "mor": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Carta fundadora não mede planejamento indicativo, nuclearização, imigração ou colonialismo. Relações comunitárias externas não são confundidas com federação doméstica; est permanece desconhecido.",
      "tec": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Carta fundadora não mede planejamento indicativo, nuclearização, imigração ou colonialismo. Relações comunitárias externas não são confundidas com federação doméstica; est permanece desconhecido."
    }
  },
  "chile-up-1970": {
    "id": "chile-up-1970",
    "kind": "country",
    "category": "historical-country",
    "name": "Chile — Unidade Popular",
    "period": "Governo Allende, 03/11/1970–11/09/1973; fonte política: programa da Unidade Popular aprovado em 1969 e publicado em 1970.",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 40,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 80,
      "con": 80,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Programa da Unidade Popular propõe setor social dominante, planejamento e participação popular, mantendo setores misto e privado.",
    "caveats": "Objeto desta codificação é o programa, não todo resultado do governo. Liberdades declaradas não certificam eleições e alternância; rep permanece desconhecido até revisar fonte de prática. Nacionalização do comércio exterior não significa proteção tarifária: com desconhecido. Religião e moral sem suporte revisto. O programa de 1969–1970 antecede a posse de 03/11/1970. Suas propostas de setores social, misto e privado não medem a proporção efetivamente realizada durante o governo.",
    "sources": [
      {
        "title": "El gobierno de la Unidad Popular (1970–1973) — Biblioteca Nacional de Chile",
        "url": "https://www.memoriachilena.gob.cl/602/w3-article-31433.html",
        "note": "Pesquisa da Biblioteca Nacional descreve a eleição democrática, a via chilena ao socialismo, o programa de economia planejada, nacionalização do cobre e o golpe que encerrou o governo."
      },
      {
        "title": "Programa básico de gobierno de la Unidad Popular",
        "url": "https://www.memoriachilena.gob.cl/602/w3-article-98051.html",
        "note": "Registro arquivístico do programa aprovado pela coalizão em 1969 e fonte primária do período."
      },
      {
        "title": "Programa básico de gobierno de la Unidad Popular — edição de 1970, Biblioteca Nacional",
        "url": "https://www.memoriachilena.gob.cl/archivos2/pdfs/MC0000544.pdf",
        "note": "Fac-símile primário MC0000544, catálogo artigo7738; páginas impressas 12–13 e 19–23. Página98051 é contexto, não o programa integral."
      },
      {
        "title": "Programa básico de gobierno de la UnidadPopular — institutional facsimile",
        "url": "https://www.memoriachilena.gob.cl/archivos2/pdfs/MC0000544.pdf",
        "note": "Leitura documental anterior registrada das páginas impressas 12–13/19–23 do programa aprovado 1969, edição 1970: setores social/misto/privado, plano nacional e participação popular. Proposta política, não proporções de propriedade ou implementação medidas."
      },
      {
        "title": "Biblioteca do Congresso chileno — Salvador Allende Gossens",
        "url": "https://www.bcn.cl/historiapolitica/resenas_biograficas/wiki/Salvador_Allende_Gossens",
        "note": "Presidência 03/11/1970–11/09/1973. Escopo lido: Campos 23–27 e presidência 96–98 efetivamente lidos. O programa aprovado 1969/publicado 1970 antecede a posse; biografia não substitui avaliação integral da execução do programa."
      }
    ],
    "evidence": {
      "eco": "medium",
      "con": "medium",
      "pod": "medium"
    },
    "axisEvidence": {
      "eco": {
        "sourceTitles": [
          "Programa básico de gobierno de la Unidad Popular — edição de 1970, Biblioteca Nacional"
        ],
        "rationale": "Objetivo explícito de domínio público estratégico sustenta polo público forte no programa. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Maioria por número de empresas continua privada; objetivo não prova realização e não mede peso econômico."
      },
      "con": {
        "sourceTitles": [
          "Programa básico de gobierno de la Unidad Popular — edição de 1970, Biblioteca Nacional"
        ],
        "rationale": "Planejamento multissetorial com poder executivo sustenta orientação planejadora forte no programa. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Não presume êxito, implementação completa ou eliminação de toda transação de mercado."
      },
      "pod": {
        "sourceTitles": [
          "Programa básico de gobierno de la Unidad Popular — edição de 1970, Biblioteca Nacional"
        ],
        "rationale": "Compromissos explícitos de direitos sustentam direção moderada à liberdade no programa. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Declaração não prova execução em polarização e conflito; sem auditoria de coerção estatal de todo governo."
      }
    },
    "coding": {
      "eco": {
        "axis": "eco",
        "position": "strong-first",
        "confidence": "medium",
        "rationale": "Objetivo explícito de domínio público estratégico sustenta polo público forte no programa.",
        "uncertainty": "Maioria por número de empresas continua privada; objetivo não prova realização e não mede peso econômico.",
        "reviewedOn": "2026-10-07",
        "claims": [
          {
            "sourceTitle": "Programa básico de gobierno de la Unidad Popular — edição de 1970, Biblioteca Nacional",
            "locator": "Área de propiedad social/privada/mixta; pp. impressas 19–21, PDF20–22",
            "statement": "Programa propõe área estatal dominante em setores-chave, mantendo empresas privadas numerosas e setor misto.",
            "basis": "declaration",
            "publishedDate": "1970; programa aprovado em 1969-12-17",
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
        "confidence": "medium",
        "rationale": "Planejamento multissetorial com poder executivo sustenta orientação planejadora forte no programa.",
        "uncertainty": "Não presume êxito, implementação completa ou eliminação de toda transação de mercado.",
        "reviewedOn": "2026-10-07",
        "claims": [
          {
            "sourceTitle": "Programa básico de gobierno de la Unidad Popular — edição de 1970, Biblioteca Nacional",
            "locator": "La construcción de la nueva economía; Política de desarrollo económico; pp.19/23, PDF20/24",
            "statement": "Órgãos centrais planejam com decisões executivas e sistema nacional integra controle, crédito e orientação.",
            "basis": "declaration",
            "publishedDate": "1970; programa aprovado em 1969-12-17",
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
      "pod": {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "rationale": "Compromissos explícitos de direitos sustentam direção moderada à liberdade no programa.",
        "uncertainty": "Declaração não prova execução em polarização e conflito; sem auditoria de coerção estatal de todo governo.",
        "reviewedOn": "2026-10-07",
        "claims": [
          {
            "sourceTitle": "Programa básico de gobierno de la Unidad Popular — edição de 1970, Biblioteca Nacional",
            "locator": "La profundización de la democracia; pp.12–13, PDF13–14",
            "statement": "Programa promete expressão, imprensa, reunião, domicílio e associação com garantias individuais.",
            "basis": "declaration",
            "publishedDate": "1970; programa aprovado em 1969-12-17",
            "accessedDate": "2026-10-07"
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
    "documentaryReview": {
      "status": "author-reviewed-bounded-claims",
      "reviewedOn": "2026-10-07",
      "independentReview": "pending",
      "scope": "Programa pré-governamental aprovado em 1969, edição1970; não execução homogênea de 1970–1973."
    },
    "unknownAxisReasons": {
      "est": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Objeto desta codificação é o programa, não todo resultado do governo. Liberdades declaradas não certificam eleições e alternância; rep permanece desconhecido até revisar fonte de prática. Nacionalização do comércio exterior não significa proteção tarifária: com desconhecido. Religião e moral sem suporte revisto.",
      "rep": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Objeto desta codificação é o programa, não todo resultado do governo. Liberdades declaradas não certificam eleições e alternância; rep permanece desconhecido até revisar fonte de prática. Nacionalização do comércio exterior não significa proteção tarifária: com desconhecido. Religião e moral sem suporte revisto.",
      "imi": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Objeto desta codificação é o programa, não todo resultado do governo. Liberdades declaradas não certificam eleições e alternância; rep permanece desconhecido até revisar fonte de prática. Nacionalização do comércio exterior não significa proteção tarifária: com desconhecido. Religião e moral sem suporte revisto.",
      "dip": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Objeto desta codificação é o programa, não todo resultado do governo. Liberdades declaradas não certificam eleições e alternância; rep permanece desconhecido até revisar fonte de prática. Nacionalização do comércio exterior não significa proteção tarifária: com desconhecido. Religião e moral sem suporte revisto.",
      "int": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Objeto desta codificação é o programa, não todo resultado do governo. Liberdades declaradas não certificam eleições e alternância; rep permanece desconhecido até revisar fonte de prática. Nacionalização do comércio exterior não significa proteção tarifária: com desconhecido. Religião e moral sem suporte revisto.",
      "com": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Objeto desta codificação é o programa, não todo resultado do governo. Liberdades declaradas não certificam eleições e alternância; rep permanece desconhecido até revisar fonte de prática. Nacionalização do comércio exterior não significa proteção tarifária: com desconhecido. Religião e moral sem suporte revisto.",
      "rel": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Objeto desta codificação é o programa, não todo resultado do governo. Liberdades declaradas não certificam eleições e alternância; rep permanece desconhecido até revisar fonte de prática. Nacionalização do comércio exterior não significa proteção tarifária: com desconhecido. Religião e moral sem suporte revisto.",
      "mor": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Objeto desta codificação é o programa, não todo resultado do governo. Liberdades declaradas não certificam eleições e alternância; rep permanece desconhecido até revisar fonte de prática. Nacionalização do comércio exterior não significa proteção tarifária: com desconhecido. Religião e moral sem suporte revisto.",
      "tec": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Objeto desta codificação é o programa, não todo resultado do governo. Liberdades declaradas não certificam eleições e alternância; rep permanece desconhecido até revisar fonte de prática. Nacionalização do comércio exterior não significa proteção tarifária: com desconhecido. Religião e moral sem suporte revisto."
    }
  },
  "argentina-junta-1976": {
    "id": "argentina-junta-1976",
    "kind": "country",
    "category": "historical-country",
    "name": "Argentina — Processo de Reorganização Nacional",
    "period": "Autoridade militar desde 24/03/1976 até a posse civil de 10/12/1983; norma examinada: Lei 21257 de 24/03/1976, publicada em 26/03.",
    "vec": {
      "est": 50,
      "rep": 5,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 11,
      "tec": 50
    },
    "rationale": "Lei de março de 1976 atribui competências ministeriais e poder de nomeação a delegados militares da Junta.",
    "caveats": "A Lei 21257 examina delegação militar de competências e nomeações em março de 1976. Não documenta sozinha desaparecimentos, tortura ou toda a política econômica e externa até 1983. A posse de Alfonsín delimita o retorno da presidência civil.",
    "sources": [
      {
        "title": "Documentos Históricos da ditadura",
        "url": "https://www.argentina.gob.ar/derechoshumanos/anm/documentos-historicos",
        "note": "Documento primário ou registro de arquivo relacionado ao período Ditadura militar, 1976–1983; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Comissão Nacional sobre o Desaparecimento de Pessoas — Nunca Más",
        "url": "https://www.argentina.gob.ar/derechoshumanos/anm/nunca-mas",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      },
      {
        "title": "Argentina — original Ley21257",
        "url": "https://www.argentina.gob.ar/normativa/nacional/ley-21257-303518/texto",
        "note": "Leitura do cabeçalho e corpo completo da lei, arts.1–3 e assinaturas: sancionada 24/03/1976, publicada 26/03. A Junta atribui competências ministeriais e nomeações a delegados militares; não se infere daqui toda repressão do período."
      },
      {
        "title": "Argentina — Lei21257/1976",
        "url": "https://www.argentina.gob.ar/normativa/nacional/ley-21257-303518/texto",
        "note": "24/03/1976: Junta exerce autoridade normativa e designa delegados militares. Escopo lido: Cabeçalho 29–39 e promulgação da Junta/arts 1–3/signaturas 43–80 completos. A etiqueta genérica do portal não altera a autoria da Junta no corpo; esse ato não documenta sozinho toda repressão 1976–1983."
      },
      {
        "title": "Casa Rosada — Raúl Ricardo Alfonsín",
        "url": "https://www.casarosada.gob.ar/nuestro-pais/presidentes/47093-raul-ricardo-alfonsin-1983-1989",
        "note": "10/12/1983: início da presidência civil de Alfonsín. Escopo lido: Cabeçalho 1–16, especialmente período 7; lista presidencial geral 27–46 também lida. Data de sucessão institucional; não exame integral dos processos de transição ou da Comissão da Verdade."
      }
    ],
    "evidence": {
      "rep": "high",
      "mor": "high"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Documentos Históricos da ditadura",
          "Comissão Nacional sobre o Desaparecimento de Pessoas — Nunca Más"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 5."
      },
      "mor": {
        "sourceTitles": [
          "Documentos Históricos da ditadura",
          "Comissão Nacional sobre o Desaparecimento de Pessoas — Nunca Más"
        ],
        "rationale": "A fonte registra extensão ou restrição de direitos e igualdade no período, sustentando 11."
      }
    }
  },
  "peru-velasco-1968": {
    "id": "peru-velasco-1968",
    "kind": "country",
    "category": "historical-country",
    "name": "Peru — primeira fase militar sob Velasco",
    "period": "Primeira fase militar sob Velasco, 03/10/1968 até sua substituição em 29/08/1975; norma examinada: Decreto-Lei 17716, de 24/06/1969.",
    "vec": {
      "est": 50,
      "rep": 15,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 88,
      "con": 84,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Decreto de 1969 propõe substituir latifúndio e minifúndio por ordenamento agrário com justiça social e maior renda camponesa.",
    "caveats": "O artigo 1 do Decreto-Lei 17716 descreve reforma da propriedade e uso agrários, não propriedade geral de toda a economia nem seus resultados executados. A cronologia parlamentar situa o último dia da primeira fase em 28/08/1975 e o sucessor em 29/08; não foi lido um ato original de deposição.",
    "sources": [
      {
        "title": "Mensagem presidencial sobre reforma agrária (1969)",
        "url": "https://www.congreso.gob.pe/Docs/participacion/museo/congreso/files/mensajes/1951-1980/files/mensaje_1969.pdf",
        "note": "Documento primário ou registro de arquivo relacionado ao período Governo Velasco Alvarado, 1968–1975; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Biblioteca Nacional do Peru — coleções históricas",
        "url": "https://www.bnp.gob.pe/colecciones/",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      },
      {
        "title": "Congreso del Perú — DecretoLey17716, NuevaReformaAgraria",
        "url": "https://leyes.congreso.gob.pe/Documentos/Leyes/17716.pdf",
        "note": "Leitura do preâmbulo e artigo 1 completos em texto indexado: reforma agrária altera propriedade e uso da terra, contrapõe latifúndio/minifúndio e declara justiça social. O artigo 2 veio truncado; acesso direto falhou. Data 24/06/1969 corroborada por documento parlamentar separado."
      },
      {
        "title": "Congresso peruano — La Crisis Constitucional Republicana",
        "url": "https://leyes.congreso.gob.pe/Documentos/2021_2026/Informes/Comisiones_Especiales/VI..pdf",
        "note": "03/10/1968: primeira fase de Velasco;29/08/1975: substituição por Morales Bermúdez. Escopo lido: Parágrafo inteiro da primeira e segunda fases retornado por busca exata: primeira 03/10/1968–28/08/1975; segunda 29/08/1975–28/07/1980. Retrospectiva parlamentar, não ato original de deposição; página direta disponível inicialmente, busca interna posterior falhou. Dia de transição 29/08 distinto do último dia da fase 28/08."
      }
    ],
    "evidence": {
      "rep": "high",
      "eco": "medium",
      "con": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Mensagem presidencial sobre reforma agrária (1969)",
          "Biblioteca Nacional do Peru — coleções históricas"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 15."
      },
      "eco": {
        "sourceTitles": [
          "Mensagem presidencial sobre reforma agrária (1969)",
          "Biblioteca Nacional do Peru — coleções históricas"
        ],
        "rationale": "O documento descreve extensão de propriedade pública, provisão ou coordenação estatal, sustentando 88."
      },
      "con": {
        "sourceTitles": [
          "Mensagem presidencial sobre reforma agrária (1969)",
          "Biblioteca Nacional do Peru — coleções históricas"
        ],
        "rationale": "A fonte documenta direção estatal da economia ou coordenação por mercado, sustentando 84."
      }
    }
  },
  "uruguay-civic-military-1973": {
    "id": "uruguay-civic-military-1973",
    "kind": "country",
    "category": "historical-country",
    "name": "Uruguai — ditadura cívico-militar",
    "period": "Ruptura parlamentar de 27/06/1973 até a restauração civil em 01/03/1985; fonte examinada: resumo institucional do Decreto 464/1973.",
    "vec": {
      "est": 50,
      "rep": 8,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 17,
      "tec": 50
    },
    "rationale": "Decreto de junho de 1973 dissolve as duas câmaras e transfere funções legislativas a um Conselho de Estado.",
    "caveats": "A página do IMPO oferece resumo institucional anotado, não transcrição integral do decreto original. Descreve dissolução e transferência de competências; não certifica sozinha toda repressão ou o percurso da transição. Promulgação em 27/06 e publicação em 04/07 são distintas.",
    "sources": [
      {
        "title": "Decreto de dissolução do Parlamento (1973)",
        "url": "https://www.impo.com.uy/bases/decretos/464-1973",
        "note": "Documento primário ou registro de arquivo relacionado ao período Regime autoritário, 1973–1985; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Secretaria de Direitos Humanos para o Passado Recente",
        "url": "https://www.gub.uy/secretaria-derechos-humanos-pasado-reciente/",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      },
      {
        "title": "IMPO — Decreto464/973",
        "url": "https://www.impo.com.uy/bases/decretos/464-1973",
        "note": "Leitura integral do resumo institucional e notas: promulgação 27/06/1973, publicação 04/07; dissolução das duas câmaras, Conselho de Estado e garantia de serviços essenciais. Trata-se de resumo anotado; a rota de transcrição original falhou."
      },
      {
        "title": "IMPO — Decreto464/1973",
        "url": "https://www.impo.com.uy/bases/decretos/464-1973",
        "note": "27/06/1973: promulgação que dissolve as duas câmaras. Escopo lido: Metadados 10–11 e resumo 13–20 completos. Resumo anotado, não transcrição integral original. Publicação 04/07 não é a data do início institucional indicada."
      },
      {
        "title": "Presidência uruguaia — quarenta anos de democracia",
        "url": "https://www.gub.uy/presidencia/comunicacion/noticias/pueblo-uruguayo-celebra-40-anos-democracia-ininterrumpida",
        "note": "01/03/1985: posse de Sanguinetti e retorno institucional democrático. Escopo lido: Leitura direta 84–95 anteriormente nesta mesma pesquisa; nova abertura falhou, texto também recuperado integralmente em busca dirigida. Notícia retrospectiva, não diário original de posse; não se adopta a duração arredondada 12/13 anos como prova de dia."
      }
    ],
    "evidence": {
      "rep": "high",
      "mor": "high"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Decreto de dissolução do Parlamento (1973)",
          "Secretaria de Direitos Humanos para o Passado Recente"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 8."
      },
      "mor": {
        "sourceTitles": [
          "Decreto de dissolução do Parlamento (1973)",
          "Secretaria de Direitos Humanos para o Passado Recente"
        ],
        "rationale": "A fonte registra extensão ou restrição de direitos e igualdade no período, sustentando 17."
      }
    }
  },
  "cuba-batista-1952": {
    "id": "cuba-batista-1952",
    "kind": "country",
    "category": "historical-country",
    "name": "Cuba — governo Batista",
    "period": "Governo instalado pelo golpe de 10/03/1952 até a saída de Batista em 01/01/1959; fonte política: memorando diplomático de 24/03/1952.",
    "vec": {
      "est": 50,
      "rep": 12,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 24,
      "tec": 50
    },
    "rationale": "Memorando diplomático de março de 1952 registra golpe apoiado pelo Exército e tomada do governo por Batista.",
    "caveats": "O memorando norte-americano relata o golpe e a percepção da embaixada em março de 1952. Sua afirmação de controle ou aquiescência não é auditoria independente de consentimento popular. O telegrama de 01/01/1959 registra a saída de Batista e autoridade provisória ainda disputada.",
    "sources": [
      {
        "title": "Lei Constitucional de 1952",
        "url": "https://www.constituteproject.org/constitution/Cuba_1952",
        "note": "Documento primário ou registro de arquivo relacionado ao período Ditadura de Fulgencio Batista, 1952–1959; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Office of the Historian — Cuba 1958–1960",
        "url": "https://history.state.gov/historicaldocuments/frus1958-60v06",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      },
      {
        "title": "FRUS — memorandum SecretaryState to President",
        "url": "https://history.state.gov/historicaldocuments/frus1952-54v04/d327",
        "note": "Leitura completa do memorando 24/03/1952 e notas: golpe 10/03, tomada do governo e percepção da embaixada sobre controle e reconhecimento. Observador norte-americano interessado; não prova independente de consentimento popular ou de toda prática 1952–1959."
      },
      {
        "title": "FRUS — nota editorial325",
        "url": "https://history.state.gov/historicaldocuments/frus1952-54v04/d325",
        "note": "10/03/1952: golpe;04/04: posse formal posterior. Escopo lido: Parágrafo editorial completo 10/03/1952 e posse 04/04/1952. O recorte começa no golpe, não na posse formal. Separado do memorando diplomático 24/03."
      },
      {
        "title": "FRUS — telegrama208 de Havana",
        "url": "https://history.state.gov/historicaldocuments/frus1958-60v06/d208",
        "note": "01/01/1959: telegrama já registra saída de Batista e disputa pela autoridade provisória. Escopo lido: Cabeçalho e corpo 5–15 completos. Observação diplomática contemporânea norte-americana, não ata cubana de posse; novo governo ainda em formação."
      }
    ],
    "evidence": {
      "rep": "high",
      "mor": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Lei Constitucional de 1952",
          "Office of the Historian — Cuba 1958–1960"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 12."
      },
      "mor": {
        "sourceTitles": [
          "Lei Constitucional de 1952",
          "Office of the Historian — Cuba 1958–1960"
        ],
        "rationale": "A fonte registra extensão ou restrição de direitos e igualdade no período, sustentando 24."
      }
    }
  },
  "venezuela-punto-fijo": {
    "id": "venezuela-punto-fijo",
    "kind": "country",
    "category": "historical-country",
    "name": "Venezuela — Pacto de Punto Fijo",
    "period": "Ordem partidária pactuada, de 1958 até o corte eleitoral de 06/12/1998; fonte fundadora: pacto de 31/10/1958, dirigido ao período constitucional de 1959–1964.",
    "vec": {
      "est": 50,
      "rep": 78,
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
    "rationale": "Pacto de 1958 prevê respeito ao resultado eleitoral, governo de unidade e programa comum, admitindo candidaturas distintas.",
    "caveats": "O pacto tem três partidos signatários e compromisso dirigido a 1959–1964; não prova participação universal nem estabilidade de quarenta anos. O relatório eleitoral distingue dinâmica bipartidária até 1993, eleição em 06/12/1998 e posse em 02/02/1999. O corte de 1998 não é expiração jurídica do pacto.",
    "sources": [
      {
        "title": "Constituição da Venezuela de 1961",
        "url": "https://www.constituteproject.org/constitution/Venezuela_1961",
        "note": "Documento primário ou registro de arquivo relacionado ao período Democracia pactuada, 1958–1998; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Biblioteca Nacional de Venezuela — história política",
        "url": "https://www.bnv.gob.ve/independencia/",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      },
      {
        "title": "Pacto de Puntofijo — primary transcription",
        "url": "https://es.wikisource.org/wiki/Pacto_de_Punto_Fijo",
        "note": "Leitura completa do pacto, assinaturas e referência:31/10/1958, respeito eleitoral, gabinete de unidade e programa mínimo, com candidaturas distintas. Transcrição colaborativa, original não autenticado; anexo do programa não lido. Compromisso dirigido a 1959–1964."
      },
      {
        "title": "Pacto de Punto Fijo — transcrição",
        "url": "https://es.wikisource.org/wiki/Pacto_de_Punto_Fijo",
        "note": "31/10/1958: assinatura por AD/COPEI/URD. Escopo lido: Corpo 105–151 e referência 153; preâmbulo, cláusulas e assinaturas completos. Seu compromisso é dirigido ao período constitucional 1959–1964; não estabelece por si o prazo de quarenta anos da ordem partidária."
      },
      {
        "title": "OEA — observação eleitoral da Venezuela1998",
        "url": "https://www.oas.org/sap/publications/1998/moe/venezuela/doc/pbl_19_1998_spa.pdf",
        "note": "06/12/1998: eleição presidencial; posse do sucessor em 02/02/1999. Escopo lido: Seções das presidenciais: linhas 1676–1702/1731–1748/2037–2039/2355–2359. 1998 é corte eleitoral da taxonomia, não data de expiração jurídica do pacto. O relatório identifica dinâmica bipartidária 1958–1993 e mudança prévia; não se afirma uniformidade até 1998."
      }
    ],
    "evidence": {
      "rep": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constituição da Venezuela de 1961",
          "Biblioteca Nacional de Venezuela — história política"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 78."
      }
    }
  },
  "france-fourth-republic": {
    "id": "france-fourth-republic",
    "kind": "country",
    "category": "historical-country",
    "name": "França — Quarta República",
    "period": "Quarta República: Carta promulgada em 27/10/1946 até sua substituição constitucional em 04/10/1958; crise governamental de junho de 1958 distinguida.",
    "vec": {
      "est": 50,
      "rep": 85,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 75,
      "con": 68,
      "com": 50,
      "rel": 50,
      "mor": 69,
      "tec": 50
    },
    "rationale": "Carta de 1946 subordina o gabinete à confiança da Assembleia Nacional, com sufrágio universal e responsabilidade parlamentar.",
    "caveats": "A descrição examina o gabinete na Carta fundadora de 1946, com segunda câmara e dissolução condicionada; a revisão de 1954 aparece separadamente na fonte. A crise de junho e a substituição constitucional de outubro de 1958 são eventos distintos. Não se certificam aqui resultados de nacionalizações ou guerras coloniais.",
    "sources": [
      {
        "title": "Constituição francesa de 1946",
        "url": "https://www.conseil-constitutionnel.fr/les-constitutions-dans-l-histoire/constitution-du-27-octobre-1946-ive-republique",
        "note": "Documento primário ou registro de arquivo relacionado ao período Regime parlamentar, 1946–1958; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Assemblée nationale — Constituição de 1946",
        "url": "https://www.assemblee-nationale.fr/histoire/constitutions/constitution-1946.asp",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      },
      {
        "title": "Élysée — Constitution27October1946 originalbody plus1954revision appendix",
        "url": "https://www.elysee.fr/la-presidence/la-constitution-du-27-octobre-1946",
        "note": "Leitura do texto original: introdução, preâmbulo e arts.1–6/13/20/29/38/45–52. Gabinete depende da confiança da Assembleia; poderes da segunda câmara e dissolução condicionada são limites. A revisão 1954 aparece depois e foi distinguida."
      },
      {
        "title": "Élysée — Constituição de27/10/1946",
        "url": "https://www.elysee.fr/la-presidence/la-constitution-du-27-octobre-1946",
        "note": "27/10/1946: promulgação; introdução separa crise e medidas de junho 1958. Escopo lido: Introdução 7–18, preâmbulo 23–40 e arts 1–6/13/20/29/38/45–52 em 43–150. A revisão 1954 não substitui silenciosamente a versão fundadora usada para o gabinete."
      },
      {
        "title": "Assembleia Nacional francesa — instituição da Quinta República",
        "url": "https://www.assemblee-nationale.fr/dyn/histoire-et-patrimoine/cinquieme-republique/la-constitution-de-1958-et-l-instauration-de-la-ve-republique",
        "note": "04/10/1958: promulgação da Constituição que institui a Quinta República, publicada 05/10. Escopo lido: Corpo 139–164 efetivamente lido, especialmente 152–154. Promulgação, publicação e instalação dos novos órgãos são marcos diferentes; a crise governamental de junho não equivale à substituição formal em outubro."
      }
    ],
    "evidence": {
      "rep": "high",
      "eco": "medium",
      "con": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constituição francesa de 1946",
          "Assemblée nationale — Constituição de 1946"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 85."
      },
      "eco": {
        "sourceTitles": [
          "Constituição francesa de 1946",
          "Assemblée nationale — Constituição de 1946"
        ],
        "rationale": "O documento descreve extensão de propriedade pública, provisão ou coordenação estatal, sustentando 75."
      },
      "con": {
        "sourceTitles": [
          "Constituição francesa de 1946",
          "Assemblée nationale — Constituição de 1946"
        ],
        "rationale": "A fonte documenta direção estatal da economia ou coordenação por mercado, sustentando 68."
      },
      "mor": {
        "sourceTitles": [
          "Constituição francesa de 1946",
          "Assemblée nationale — Constituição de 1946"
        ],
        "rationale": "A fonte registra extensão ou restrição de direitos e igualdade no período, sustentando 69."
      }
    }
  },
  "italy-fascist-regime": {
    "id": "italy-fascist-regime",
    "kind": "country",
    "category": "historical-country",
    "name": "Itália — regime fascista",
    "period": "Governo Mussolini, 31/10/1922–25/07/1943; norma examinada: Lei 2263, de 24/12/1925, publicada em 29/12/1925.",
    "vec": {
      "est": 50,
      "rep": 3,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 7,
      "tec": 50
    },
    "rationale": "Lei de 1925 faz o chefe do governo responder ao rei e condiciona a pauta parlamentar ao seu assentimento.",
    "caveats": "A entrada no governo em 1922 precede o desenho de concentração executiva na lei de 1925. O chefe era formalmente nomeado e demitido pelo rei, não juridicamente soberano. O texto selecionado não comprova sozinho toda supressão de partidos e sindicatos; a República Social Italiana posterior não integra este recorte.",
    "sources": [
      {
        "title": "Carta del Lavoro (1927)",
        "url": "https://www.treccani.it/enciclopedia/carta-del-lavoro/",
        "note": "Documento primário ou registro de arquivo relacionado ao período Ditadura de Mussolini, 1922–1943; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Archivio Centrale dello Stato — fundos fascistas",
        "url": "https://acs.cultura.gov.it/archivio-storico/",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      },
      {
        "title": "GazzettaUfficiale — Legge2263 of24December1925",
        "url": "https://www.gazzettaufficiale.it/eli/gu/1925/12/29/301/sg/pdf",
        "note": "Leitura indexada completa dos arts.1–9 da Lei 2263 de 24/12/1925, Diário Oficial 29/12: responsabilidade do chefe perante o rei, coordenação ministerial e assentimento à pauta parlamentar. PDF oficial abriu, mas não se certifica cotejo visual integral nem todas as leis fascistas."
      },
      {
        "title": "Câmara dos Deputados italiana — Governo Mussolini",
        "url": "https://storia.camera.it/governi/i-governo-mussolini",
        "note": "Governo 31/10/1922–25/07/1943. Escopo lido: Cabeçalho e presidência 27–35 completos. Mandato ministerial não prova que todo o desenho ditatorial 1925 já operasse em 1922; República Social Italiana posterior não incluída."
      }
    ],
    "evidence": {
      "rep": "high",
      "mor": "high"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Carta del Lavoro (1927)",
          "Archivio Centrale dello Stato — fundos fascistas"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 3."
      },
      "mor": {
        "sourceTitles": [
          "Carta del Lavoro (1927)",
          "Archivio Centrale dello Stato — fundos fascistas"
        ],
        "rationale": "A fonte registra extensão ou restrição de direitos e igualdade no período, sustentando 7."
      }
    }
  },
  "ussr-stalin": {
    "id": "ussr-stalin",
    "kind": "country",
    "category": "historical-country",
    "name": "União Soviética — período Stalin",
    "period": "Recorte soviético do Primeiro Plano Quinquenal de 1928 até a morte de Stalin em 05/03/1953; norma examinada: Constituição de 1936.",
    "vec": {
      "est": 50,
      "rep": 3,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 98,
      "con": 98,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Carta de 1936 prevê propriedade socialista e plano econômico estatal, preservando bens pessoais e pequena produção privada.",
    "caveats": "1928 é o marco do Primeiro Plano Quinquenal usado no recorte, não a ascensão inicial de Stalin. A Constituição de 1936 é uma norma, não auditoria do Terror, fome ou realização do plano. A reprodução francesa associa referências de 1936 e de edição de 1942; sua equivalência integral ao original russo não foi certificada.",
    "sources": [
      {
        "title": "Constituição soviética de 1936",
        "url": "https://www.marxists.org/reference/archive/stalin/works/1936/12/05.htm",
        "note": "Documento primário ou registro de arquivo relacionado ao período Coletivização e Grande Terror, 1928–1953; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Library of Congress — Soviet Union country study",
        "url": "https://tile.loc.gov/storage-services/master/frd/frdcstdy/so/sovietunioncount00zick/sovietunioncount00zick.pdf",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      },
      {
        "title": "Constitution soviétique1936 — translated primary transcription",
        "url": "https://fr.wikisource.org/wiki/Constitution_sovi%C3%A9tique_1936",
        "note": "Leitura da introdução e arts.1–12/13–20 da reprodução francesa da Carta 1936: propriedade socialista e plano, com bens pessoais e pequena produção privada. Referências de edição 1936/1942 não resolvidas; tradução paralela com repúblicas de 1940 foi excluída como original 1936."
      },
      {
        "title": "Library of Congress — Collectivization and Industrialization",
        "url": "https://www.loc.gov/exhibits/archives/intn.html",
        "note": "1928: adoção partidária do Primeiro Plano Quinquenal, marco do recorte. Escopo lido: Seção 127–132 completa, especialmente 130; contexto inicial também distingue ascensão anterior. 1928 não é início de toda liderança de Stalin; relato arquivístico institucional retrospectivo, não texto original de aprovação do plano."
      },
      {
        "title": "Library of Congress — The Death of Stalin",
        "url": "https://www.loc.gov/loc/lcib/0304/post-stalin.html",
        "note": "05/03/1953: morte de Stalin. Escopo lido: Corpo 24–30, título da conferência indica morte 05/03/1953. Descrição institucional de encontro histórico; não leitura de certidão original de óbito."
      }
    ],
    "evidence": {
      "rep": "high",
      "eco": "high",
      "con": "high"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constituição soviética de 1936",
          "Library of Congress — Soviet Union country study"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 3."
      },
      "eco": {
        "sourceTitles": [
          "Constituição soviética de 1936",
          "Library of Congress — Soviet Union country study"
        ],
        "rationale": "O documento descreve extensão de propriedade pública, provisão ou coordenação estatal, sustentando 98."
      },
      "con": {
        "sourceTitles": [
          "Constituição soviética de 1936",
          "Library of Congress — Soviet Union country study"
        ],
        "rationale": "A fonte documenta direção estatal da economia ou coordenação por mercado, sustentando 98."
      }
    }
  },
  "mexico-pri-hegemony": {
    "id": "mexico-pri-hegemony",
    "kind": "country",
    "category": "historical-country",
    "name": "México — regime do PRI hegemônico",
    "period": "Predomínio presidencial do PRI, recorte de 1946 até a alternância eleitoral de 2000; pesquisa institucional publicada em 2019–2020, com fases internas distintas.",
    "vec": {
      "est": 50,
      "rep": 41,
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
    "rationale": "Relato institucional descreve predomínio do PRI e do presidente, com oposição eleitoral e liberalização gradual pelas reformas.",
    "caveats": "1946 marca a adoção do nome PRI, não a origem de toda hegemonia partidária. O relato institucional distingue oposição permitida e reformas de 1977, 1990 e 1996; não oferece uma descrição uniforme de todos os governos. O término é o ano da alternância, sem dia inventado.",
    "sources": [
      {
        "title": "Constituição Política mexicana",
        "url": "https://www.diputados.gob.mx/LeyesBiblio/pdf/CPEUM.pdf",
        "note": "Documento primário ou registro de arquivo relacionado ao período Predomínio presidencial do PRI, 1946–2000; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Historia mínima de las elecciones en México — INE, Javier Garciadiego",
        "url": "https://portal.ine.mx/wp-content/uploads/2022/02/deceyec-cm39.pdf",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      },
      {
        "title": "INE/IIJ-UNAM — La democracia en México",
        "url": "https://farodemocratico.ine.mx/la-democracia-en-mexico/?mode=grid",
        "note": "Leitura dos trechos sobre hegemonia presidencial/partidária, oposição e reformas, com autoria INE/IIJ-UNAM 2020. Relato institucional retrospectivo, não constituição original 1946 nem análise uniforme de todos os governos."
      },
      {
        "title": "INE/IIJ-UNAM — A democracia no México",
        "url": "https://farodemocratico.ine.mx/la-democracia-en-mexico/?mode=grid",
        "note": "1946: adoção do nome PRI; relato distingue fases anteriores do partido. Escopo lido: Corpo 43–57/65–68/87–95 e autoria 119–123. 1946 é marco do nome/recorte escolhido, não nascimento de toda hegemonia; história institucional interpretativa, não norma original 1946."
      },
      {
        "title": "INE — construção do sistema eleitoral",
        "url": "https://centralelectoral.ine.mx/2019/06/27/el-sistema-electoral-actual-garantiza-la-certeza-de-las-elecciones-conoces-como-se-ha-construido/",
        "note": "2000: primeira alternância presidencial. Escopo lido: Corpo 123–157, reformas 1977/1990/1996 e primeira alternância 2000. O ano não é convertido em dia de encerramento sem documento adicional; processo gradual não resumido como prática uniforme."
      }
    ],
    "evidence": {
      "rep": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Historia mínima de las elecciones en México — INE, Javier Garciadiego"
        ],
        "rationale": "Páginas 56–58 contextualizam a transformação em PRI e o apoio estatal; páginas 80 e 92–93 distinguem reformas, autonomia eleitoral em 1996 e alternância em 2000. A direção de partido dominante não indica competição constante em todo o recorte."
      }
    }
  }
} as unknown as Record<string,ReferenceEntry>;

const allowedFields = {
  "prc-mao-1949": [
    "sources",
    "caveats",
    "rationale",
    "period"
  ],
  "cuba-revolutionary-1959": [
    "sources",
    "caveats",
    "rationale",
    "name",
    "period"
  ],
  "portugal-estado-novo-1933": [
    "sources",
    "caveats",
    "rationale",
    "period"
  ],
  "roc-taiwan-1949": [
    "sources",
    "caveats",
    "rationale",
    "period"
  ],
  "france-de-gaulle-1958": [
    "sources",
    "caveats",
    "rationale",
    "period"
  ],
  "chile-up-1970": [
    "sources",
    "caveats",
    "rationale",
    "period"
  ],
  "argentina-junta-1976": [
    "sources",
    "caveats",
    "rationale",
    "period"
  ],
  "peru-velasco-1968": [
    "sources",
    "caveats",
    "rationale",
    "name",
    "period"
  ],
  "uruguay-civic-military-1973": [
    "sources",
    "caveats",
    "rationale",
    "period"
  ],
  "cuba-batista-1952": [
    "sources",
    "caveats",
    "rationale",
    "period"
  ],
  "venezuela-punto-fijo": [
    "sources",
    "caveats",
    "rationale",
    "period"
  ],
  "france-fourth-republic": [
    "sources",
    "caveats",
    "rationale",
    "period"
  ],
  "italy-fascist-regime": [
    "sources",
    "caveats",
    "rationale",
    "period"
  ],
  "ussr-stalin": [
    "sources",
    "caveats",
    "rationale",
    "period"
  ],
  "mexico-pri-hegemony": [
    "sources",
    "caveats",
    "rationale",
    "period"
  ]
} as Record<string, (keyof ReferenceEntry)[]>;
export function reconcileHistoricalCountryProvenance03(entry:ReferenceEntry):ReferenceEntry {
 const before=historicalCountryProvenance03Before[entry.id], proposal=historicalCountryProvenance03Proposals[entry.id];
 if(!before||!proposal||JSON.stringify(entry)!==JSON.stringify(before)) return entry;
 const patch:Partial<ReferenceEntry>={};
 for(const key of allowedFields[entry.id]) {
  if(key==='sources') patch.sources=proposal.sources.map(source=>entry.sources.find(old=>JSON.stringify(old)===JSON.stringify(source))??source);
  else Object.assign(patch,{[key]:proposal[key]});
 }
 return {...entry,...patch};
}
