import type { ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';

/** Complete prior objects, including sources and prior coding, retained for reversible review. */
export const ranking675HistoricalCountry01Before = [
  {
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
  {
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
  {
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
  }
] as unknown as ReferenceEntry[];

export const ranking675HistoricalCountry01Proposals = [
  {
    "id": "north-korea-kim-il-sung",
    "source": null,
    "axis": "dip",
    "position": "moderate-first",
    "confidence": "medium",
    "claims": [
      {
        "sourceTitle": "RPDC1972 — transcrição primária inglesa Wikisource",
        "locator": "Original1972 arts14,31,47,72; contrapontos5/16 e76(11)",
        "statement": "Defesa nacional envolve população, treinamento, plano econômico e serviço militar; linha autodefensiva e reunificação pacífica são contrapontos.",
        "basis": "norm",
        "publishedDate": "1972-12-27",
        "accessedDate": "2026-10-08"
      }
    ],
    "rationale": "Mobilização militar de alcance nacional integra defesa, preparação da população, dever civil e planejamento econômico, sustentando prioridade militar moderada no desenho formal.",
    "uncertainty": "Não se deduz agressão, gasto predominante ou prática1948–1994. Autodefesa, proteção da paz e reunificação pacífica são contrapontos materiais; apoio revolucionário externo não define sozinho emprego de força. Tradução colaborativa sem tradutor/edição certificados, somente norma1972.",
    "periodAppend": "",
    "caveatAppend": "A orientação militar adicional refere-se somente à mobilização nacional prevista na carta1972, com autodefesa e reunificação pacífica como contrapontos; não audita operações militares."
  },
  {
    "id": "czechoslovakia-socialist-unitary-1960",
    "source": null,
    "axis": "pod",
    "position": "moderate-first",
    "confidence": "medium",
    "claims": [
      {
        "sourceTitle": "Ústava Československé socialistické republiky, 1960 — Poslanecká sněmovna",
        "locator": "Arts19,28,30–31,34,97–103",
        "statement": "Expressão e conduta vinculam-se aos interesses socialistas; tribunais protegem esse sistema e interpretam leis segundo consciência socialista. Há integridade, privacidade e defesa processual.",
        "basis": "norm",
        "publishedDate": "1960-07-11",
        "accessedDate": "2026-10-08"
      }
    ],
    "rationale": "O condicionamento geral dos direitos e da função judicial dá direção de segurança/ordem; garantias pessoais e processuais moderam a intensidade.",
    "uncertainty": "Somente norma1960: prisão judicial ou do procurador, juízes revogáveis e publicidade limitada por lei; não prova repressão executada. Garantias de integridade, privacidade e defesa impedem tratar autoridade como irrestrita.",
    "periodAppend": "",
    "caveatAppend": "POD60 descreve a prioridade normativa da ordem socialista com garantias pessoais/processuais, sem certificar execução1960–1968. REP20 foi recalibrado para40: direção autoritária formal com contrapesos eleitorais, sem inventar monopólio de candidaturas."
  },
  {
    "id": "india-nehru",
    "source": {
      "title": "Nehru no Conselho de Desenvolvimento Nacional — escopo e recursos do Segundo Plano,6janeiro1956",
      "url": "https://nehruarchive.in/documents/the-second-plan-scope-and-resources-6-january-1956-pgd5ej",
      "note": "Registro resumido da reunião do Standing Committee do National Development Council,NewDelhi,6janeiro1956,File17(18)/56-PMS; excertos publicados em Selected Works of Jawaharlal Nehru,SecondSeries31,pp68–70. Texto e notas efetivamente lidos08/10/2026; declaração de desenho, não implementação ou plano integral."
    },
    "axis": "con",
    "position": "moderate-first",
    "confidence": "medium",
    "claims": [
      {
        "sourceTitle": "Nehru no Conselho de Desenvolvimento Nacional — escopo e recursos do Segundo Plano,6janeiro1956",
        "locator": "Registro §§1,3–5,9,11,15; notas1–2,4",
        "statement": "Nehru define planejamento dos recursos nacionais, prioridades e planos anuais; iniciativa privada em domínio delimitado sujeita ao planejamento geral. Quinquênio é quadro adaptável, não rígido.",
        "basis": "declaration",
        "publishedDate": "1956-01-06",
        "accessedDate": "2026-10-08"
      }
    ],
    "rationale": "Coordenação declarada de recursos nacionais, setores e governos e subordinação das iniciativas privadas ao plano dão direção planejadora geral. Flexibilidade e iniciativa privada tornam a intensidade moderada.",
    "uncertainty": "Registro resumido com excertos, não plano integral nem execução. Há lacunas financeiras, incerteza da ajuda e discussão entre governos; iniciativas privadas preservam domínio e liberdade condicionados. Carta1949 e declaração1956 são recortes diferentes, não observações simultâneas.",
    "periodAppend": "; desenho declarado do Segundo Plano na reunião nacional de06/01/1956",
    "caveatAppend": "CON60 acrescenta declaração nacional1956, sem inferir execução. Baseline constitucional1949 preservado; revisor atual reabriu páginas33/158/116–117, mas POD/IMI/REL dependem da leitura independente anterior expressamente registrada, pois novas aberturas13/19 e OCR falharam. Isso não certifica todos os seis eixos nesta nova rodada."
  }
] as const;

const revisedCzechRep: ReferenceAxisCoding = {
  "axis": "rep",
  "position": "moderate-second",
  "confidence": "medium",
  "claims": [
    {
      "sourceTitle": "Ústava Československé socialistické republiky, 1960 — Poslanecká sněmovna",
      "locator": "Arts2–6,66(2),97/102; contraponto3",
      "statement": "Partido dirige sociedade e Estado e lidera a Frente Nacional; sufrágio, prestação de contas e revogação de representantes são garantidos. Governo responde à Assembleia.",
      "basis": "norm",
      "publishedDate": "1960-07-11",
      "accessedDate": "2026-10-08"
    }
  ],
  "rationale": "Direção partidária constitucional sobre Estado e organização política limita autoridade democrática; mecanismos representativos justificam intensidade moderada.",
  "uncertainty": "Não há nestas cláusulas proibição explícita de candidaturas concorrentes; não certifica competição nem controle eleitoral executado. Suprime a inferência forte anterior, preservada integralmente no snapshot.",
  "reviewedOn": "2026-10-08"
};

/** Pending independent source review and Root approval. Does not import itself into the catalog. */
export function extendRanking675HistoricalCountry01(entries: ReferenceEntry[]): ReferenceEntry[] {
 return entries.map(entry => {
  const before = ranking675HistoricalCountry01Before.find(row => row.id === entry.id);
  if (!before || JSON.stringify(entry) !== JSON.stringify(before)) return entry;
  const row = ranking675HistoricalCountry01Proposals.find(item => item.id === entry.id)!;
  const sources: ReferenceSource[] = row.source ? [...entry.sources, row.source] : [...entry.sources];
  const input: ReferenceAxisCoding = {axis: row.axis, position: row.position, confidence: row.confidence, claims: [...row.claims], rationale: row.rationale, uncertainty: row.uncertainty, reviewedOn: '2026-10-08'};
  const coded = codeReferenceAxis(input, sources);
  const updated: ReferenceEntry = {...entry, sources, period: entry.period + row.periodAppend, caveats: entry.caveats + ' ' + row.caveatAppend, vec: {...entry.vec, [row.axis]: coded.value}, evidence: {...entry.evidence, [row.axis]: coded.evidence}, axisEvidence: {...entry.axisEvidence, [row.axis]: coded.axisEvidence}, coding: {...entry.coding, [row.axis]: coded.coding}};
  if (entry.id !== 'czechoslovakia-socialist-unitary-1960') return updated;
  const rep = codeReferenceAxis(revisedCzechRep, sources);
  return {...updated, vec: {...updated.vec, rep: rep.value}, evidence: {...updated.evidence, rep: rep.evidence}, axisEvidence: {...updated.axisEvidence, rep: rep.axisEvidence}, coding: {...updated.coding, rep: rep.coding}};
 });
}
