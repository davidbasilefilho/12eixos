import type { AxisKey, ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';
const axes: AxisKey[] = ['est','rep','pod','imi','dip','int','eco','con','com','rel','mor','tec'];
const reviewedOn = '2026-10-07';
/** Literal integrated input, immutable review artifact; no entry identity or source discarded. */
export const historicalCoverage08LiveBefore = [
  {
    "id": "yugoslavia-1974",
    "kind": "country",
    "category": "historical-country",
    "name": "República Socialista Federativa da Iugoslávia",
    "period": "Constituição de 1974 e período Tito, 1974–1980; recorte codificado: Desenho constitucional de 1974 no recorte Tito, 1974–1980.",
    "vec": {
      "est": 60,
      "rep": 20,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 80,
      "con": 60,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Inferências documentais delimitadas recodificadas pelo protocolo ordinal; o vetor anterior e suas fontes foram preservados no módulo de reconciliação.",
    "caveats": "Cotejo oficial integral pendente; todas as inferências médias. Não alinhamento não equivale a não intervenção e defesa territorial não é pacifismo. Eixos sem passagens revisadas permanecem desconhecidos.",
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
      "con": "medium"
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
      }
    },
    "documentaryReview": {
      "status": "author-reviewed-bounded-claims",
      "reviewedOn": "2026-10-07",
      "independentReview": "pending",
      "scope": "Desenho constitucional de 1974 no recorte Tito, 1974–1980."
    },
    "unknownAxisReasons": {
      "pod": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Cotejo oficial integral pendente; todas as inferências médias. Não alinhamento não equivale a não intervenção e defesa territorial não é pacifismo. Eixos sem passagens revisadas permanecem desconhecidos.",
      "imi": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Cotejo oficial integral pendente; todas as inferências médias. Não alinhamento não equivale a não intervenção e defesa territorial não é pacifismo. Eixos sem passagens revisadas permanecem desconhecidos.",
      "dip": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Cotejo oficial integral pendente; todas as inferências médias. Não alinhamento não equivale a não intervenção e defesa territorial não é pacifismo. Eixos sem passagens revisadas permanecem desconhecidos.",
      "int": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Cotejo oficial integral pendente; todas as inferências médias. Não alinhamento não equivale a não intervenção e defesa territorial não é pacifismo. Eixos sem passagens revisadas permanecem desconhecidos.",
      "com": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Cotejo oficial integral pendente; todas as inferências médias. Não alinhamento não equivale a não intervenção e defesa territorial não é pacifismo. Eixos sem passagens revisadas permanecem desconhecidos.",
      "rel": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Cotejo oficial integral pendente; todas as inferências médias. Não alinhamento não equivale a não intervenção e defesa territorial não é pacifismo. Eixos sem passagens revisadas permanecem desconhecidos.",
      "mor": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Cotejo oficial integral pendente; todas as inferências médias. Não alinhamento não equivale a não intervenção e defesa territorial não é pacifismo. Eixos sem passagens revisadas permanecem desconhecidos.",
      "tec": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Cotejo oficial integral pendente; todas as inferências médias. Não alinhamento não equivale a não intervenção e defesa territorial não é pacifismo. Eixos sem passagens revisadas permanecem desconhecidos."
    }
  },
  {
    "id": "spanish-second-republic",
    "kind": "country",
    "category": "historical-country",
    "name": "Espanha — Segunda República",
    "period": "República, 1931–1939",
    "vec": {
      "est": 50,
      "rep": 84,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 64,
      "con": 59,
      "com": 50,
      "rel": 89,
      "mor": 71,
      "tec": 50
    },
    "rationale": "Carta declarou república laica, direitos sociais e autonomia regional.",
    "caveats": "Recorte institucional datado; não representa a população, povos subordinados nem governos fora do período. Guerra Civil marca etapa final; governos sucessivos não são homogêneos. Eixos sem evidência suficiente permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "Constituição espanhola de 1931",
        "url": "https://www.boe.es/gazeta/dias/1931/12/09/pdfs/D00001-00014.pdf",
        "note": "Documento primário ou registro de arquivo relacionado ao período República, 1931–1939; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Congreso de los Diputados — Constituição de 1931",
        "url": "https://www.congreso.es/cem/const1931",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      }
    ],
    "evidence": {
      "rep": "high",
      "eco": "medium",
      "con": "medium",
      "rel": "high",
      "mor": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constituição espanhola de 1931",
          "Congreso de los Diputados — Constituição de 1931"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 84."
      },
      "eco": {
        "sourceTitles": [
          "Constituição espanhola de 1931",
          "Congreso de los Diputados — Constituição de 1931"
        ],
        "rationale": "O documento descreve extensão de propriedade pública, provisão ou coordenação estatal, sustentando 64."
      },
      "con": {
        "sourceTitles": [
          "Constituição espanhola de 1931",
          "Congreso de los Diputados — Constituição de 1931"
        ],
        "rationale": "A fonte documenta direção estatal da economia ou coordenação por mercado, sustentando 59."
      },
      "rel": {
        "sourceTitles": [
          "Constituição espanhola de 1931",
          "Congreso de los Diputados — Constituição de 1931"
        ],
        "rationale": "A carta ou fonte documenta laicidade, religião de Estado ou autoridade religiosa, sustentando 89."
      },
      "mor": {
        "sourceTitles": [
          "Constituição espanhola de 1931",
          "Congreso de los Diputados — Constituição de 1931"
        ],
        "rationale": "A fonte registra extensão ou restrição de direitos e igualdade no período, sustentando 71."
      }
    }
  },
  {
    "id": "czechoslovakia-socialist-unitary-1960",
    "name": "Tchecoslováquia — República Socialista unitária",
    "aliases": [
      "Československá socialistická republika — ordem unitária"
    ],
    "period": "Carta socialista unitária, 1960–1968; federalização em vigor em 1º de janeiro de 1969",
    "rationale": "A edição original explicita Estado unitário, direção comunista, propriedade social predominante e planos nacionais obrigatórios.",
    "caveats": "É a ordem socialista de 1960 anterior à federação de 1969, distinta da Primeira República já registrada. A Primavera de Praga, invasão de 1968 e execução administrativa exigem revisão própria; as âncoras abaixo são constitucionais e não médias observadas.",
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
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "est": "high",
      "rep": "medium",
      "eco": "high",
      "con": "high"
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
            "locator": "Art. 1(2), 18, 41(3), 68 e 96",
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
      }
    },
    "documentaryReview": {
      "status": "author-reviewed-bounded-claims",
      "reviewedOn": "2026-10-07",
      "independentReview": "pending",
      "scope": "Edição original de 1960 e cláusula de vigência da federalização lidas; prática econômica/eleitoral ainda não validada."
    },
    "unknownAxisReasons": {
      "pod": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "imi": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "dip": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "int": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "com": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "rel": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "mor": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "tec": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação."
    },
    "identityOrigin": {
      "disposition": "new-historical-unit",
      "distinctness": "Regime socialista e carta unitária de 1960; distinto da Primeira República; encerra-se o recorte unitário com a federação de 1969."
    },
    "codingScope": "Carta socialista unitária, 1960–1968; federalização em vigor em 1º de janeiro de 1969"
  }
] as const;
/** Original unprepared legacy vector, independently preserved from reference-countries.ts. */
export const historicalCoverage08SpanishRaw = [50,84,50,50,50,50,64,59,50,89,71,50] as const;
type Row = { axis:AxisKey;position:ReferenceAxisCoding['position'];confidence:'medium';locator:string;statement:string;rationale:string;uncertainty:string;relatedQuestionIds:string[] };
type Review = {replace:boolean;source:ReferenceSource;published:string;scope:string;rows:Row[]};
const reviews:Record<string,Review> = {
  "spanish-second-republic": {
    "replace": true,
    "source": {
      "title": "Constitución de la República española1931 — texto primário, Cervantes",
      "url": "https://www.cervantesvirtual.com/obra-visor/constitucion-de-la-republica-espanola-de-9-de-diciembre-1931/html/eb011790-baf1-4bac-b9bd-b50f042667ad_2.html",
      "note": "Texto primário1931 efetivamente lido; proposta de reforma1935 anexada na mesma página não usada. BOE/Congreso anteriores preservados, sem nova leitura integral nesta sessão."
    },
    "published": "1931-12-09",
    "scope": "Desenho da carta fundadora1931, antes das alterações e da Guerra Civil; não prática homogênea1931–1939.",
    "rows": [
      {
        "axis": "est",
        "position": "moderate-second",
        "confidence": "medium",
        "locator": "Arts.1,9–16",
        "statement": "Estado integral conserva competências exclusivas e proíbe federação de regiões, enquanto municípios e regiões podem exercer autonomia.",
        "rationale": "Competências nacionais e vedação da federação sustentam estrutura unitária moderada.",
        "uncertainty": "Autonomia substantiva, aprovação regional e residual regional art.16 impedem centralismo absoluto; não descreve todos os estatutos executados.",
        "relatedQuestionIds": []
      },
      {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "locator": "Arts.9,36,51–53,64",
        "statement": "Conselhos e Congresso têm sufrágio igual, direto e secreto; ambos os sexos maiores de23 têm iguais direitos eleitorais; Congresso pode censurar governo.",
        "rationale": "Sufrágio inclusivo por sexo e controle representativo sustentam direção democrática moderada.",
        "uncertainty": "Norma, não auditoria eleitoral; idade23, legislação eleitoral, crises e suspensão de garantias limitam abrangência.",
        "relatedQuestionIds": []
      },
      {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "locator": "Arts.28–34,38–39,42",
        "statement": "Carta protege processo legal, limites de prisão, domicílio, correspondência, expressão sem censura prévia e reunião; emergência suspende algumas garantias sob controle parlamentar por30dias prorrogáveis.",
        "rationale": "Garantias processuais e expressão sustentam direção moderada à liberdade no desenho.",
        "uncertainty": "Suspensão pode ser ampla; prorrogação exige Congresso ou Diputación. Não prova liberdade efetiva na Guerra Civil nem universaliza direitos restritos a espanhóis.",
        "relatedQuestionIds": []
      },
      {
        "axis": "rel",
        "position": "moderate-first",
        "confidence": "medium",
        "locator": "Arts.3,26–27,48",
        "statement": "Não há religião oficial; financiamento clerical é vedado e ensino público é laico; consciência privada é protegida mas culto público depende de autorização e ordens religiosas são restringidas.",
        "rationale": "Laicidade estatal, financiamento e ensino explícitos sustentam direção secular moderada.",
        "uncertainty": "Não é irreligiosidade pessoal nem liberdade religiosa irrestrita; restrições a ordens e culto público permanecem visíveis. Igrejas podem ensinar doutrina em estabelecimentos próprios sob inspeção.",
        "relatedQuestionIds": []
      },
      {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "locator": "Art.43; contraponto art.27",
        "statement": "Igualdade conjugal e divórcio por mútuo dissenso ou justa causa convivem com proteção estatal da família; filiação fora do casamento não altera deveres parentais.",
        "rationale": "Reforma expressa de casamento e filiação sustenta progressismo moderado no domínio familiar.",
        "uncertainty": "Não infere posições sobre LGBT, aborto ou costumes em geral; proteção da família e moral pública são contrapontos.",
        "relatedQuestionIds": [
          "moral_02"
        ]
      },
      {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "locator": "Arts.6,14(7),37 da carta original1931",
        "statement": "República renuncia à guerra como instrumento de política nacional, enquanto mantém Exército/Marinha/defesa e serviço militar legal.",
        "rationale": "Renúncia nacional expressa sustenta direção pacifista moderada no desenho normativo, com meios de defesa preservados.",
        "uncertainty": "Regra constitucional não comprova política militar executada1931–1939 ou pacifismo da GuerraCivil; manutenção de defesa e conscrição impede inferência de desarmamento.",
        "relatedQuestionIds": []
      }
    ]
  },
  "czechoslovakia-socialist-unitary-1960": {
    "replace": false,
    "source": {
      "title": "Ústava Československé socialistické republiky, 1960 — Poslanecká sněmovna",
      "url": "https://www.psp.cz/docs/texts/constitution_1960.html",
      "note": "Lei100/1960, texto original oficial: arts.16,24–25,32 efetivamente relidos para ampliação delimitada."
    },
    "published": "1960-07-11",
    "scope": "Educação, cultura e religião na norma original1960, no recorte unitário1960–1968.",
    "rows": [
      {
        "axis": "imi",
        "position": "moderate-second",
        "confidence": "medium",
        "locator": "Art.25; limites arts.33–34",
        "statement": "Estado garante a cidadãos de nacionalidades húngara, ucraniana e polonesa meios para educação na língua materna e desenvolvimento cultural.",
        "rationale": "Garantia de línguas e culturas de minorias sustenta o polo multicultural moderado.",
        "uncertainty": "Minoridades cidadãs enumeradas, não política geral de entrada ou todas as nacionalidades; asilo art.33 é politicamente seletivo e deveres socialistas art.34 permanecem. Não presume execução.",
        "relatedQuestionIds": [
          "imigracao_02",
          "imigracao_08"
        ]
      }
    ]
  },
  "yugoslavia-1974": {
    "replace": false,
    "source": {
      "title": "Constituição da República Socialista Federativa da Iugoslávia, 1974 — Wikisource",
      "url": "https://en.wikisource.org/wiki/Constitution_of_Yugoslavia_(1974)",
      "note": "Transcrição traduzida primária efetivamente relida nos arts.170–174,202–203; cotejo integral oficial continua pendente."
    },
    "published": "1974-02-21",
    "scope": "Direitos linguísticos e separação religiosa na carta1974, dentro do recorte Tito1974–1980.",
    "rows": [
      {
        "axis": "imi",
        "position": "moderate-second",
        "confidence": "medium",
        "locator": "Arts.170–171,202–203",
        "statement": "Cidadãos podem escolher nacionalidade, expressar cultura e usar língua; nacionalidades têm uso oficial e ensino próprio nas repúblicas/províncias; asilo é garantido a perseguidos por causas especificadas.",
        "rationale": "Proteção explícita de pluralidade cultural e linguística sustenta multiculturalismo moderado.",
        "uncertainty": "Não presume imigração geral livre; asilo seletivo, realização por lei e art.203 protege ordem socialista e moral pública. Prática não auditada.",
        "relatedQuestionIds": [
          "imigracao_02",
          "imigracao_08"
        ]
      },
      {
        "axis": "rel",
        "position": "moderate-first",
        "confidence": "medium",
        "locator": "Art.174; limite art.203",
        "statement": "Fé é assunto privado e comunidades religiosas são separadas do Estado; comunidade social pode financiá-las e escolas religiosas são limitadas à formação clerical.",
        "rationale": "Separação institucional explícita sustenta direção secular moderada.",
        "uncertainty": "Financiamento permitido impede alegação de separação financeira absoluta; proibição de uso político, limite escolar e ordem socialista restringem liberdades. Não presume irreligiosidade social.",
        "relatedQuestionIds": [
          "religiao_01",
          "religiao_03"
        ]
      }
    ]
  }
};
/** Enrich two already coded profiles; recode Spain's legacy evidence without inheriting unvalidated scores. */
export function extendHistoricalCountryCoverage08(entry: ReferenceEntry): ReferenceEntry {
  const review=reviews[entry.id]; if(!review)return entry;
  const sources=[...entry.sources];
  if(!sources.some(s=>s.title===review.source.title&&s.url===review.source.url))sources.push(review.source);
  const beforeUnknown=(entry as ReferenceEntry & {unknownAxisReasons?:Partial<Record<AxisKey,string>>}).unknownAxisReasons;
  const result:ReferenceEntry & {unknownAxisReasons:Partial<Record<AxisKey,string>>;documentaryReview:unknown}={...entry,sources,
    vec:review.replace?Object.fromEntries(axes.map(a=>[a,50])) as Record<AxisKey,number>:{...entry.vec},
    evidence:review.replace?{}:{...entry.evidence},axisEvidence:review.replace?{}:{...entry.axisEvidence},coding:review.replace?{}:{...entry.coding},
    unknownAxisReasons:review.replace?{}:{...beforeUnknown},
    period:entry.period?.includes(review.scope)?entry.period:`${entry.period}; recorte adicional: ${review.scope}`,
    caveats:`${entry.caveats} Ampliação documental: ${review.scope} Sem auditoria integral da prática histórica. Passagens adicionais cotejadas independentemente; prática histórica não auditada integralmente.`,
    documentaryReview:{status:'author-reviewed-bounded-claims',reviewedOn,independentReview:'accepted-bounded-primary-claims',scope:review.scope},
  };
  for(const row of review.rows){
    const input:ReferenceAxisCoding={axis:row.axis,position:row.position,confidence:row.confidence,rationale:row.rationale,uncertainty:row.uncertainty,relatedQuestionIds:row.relatedQuestionIds,reviewedOn,
      claims:[{sourceTitle:review.source.title,locator:row.locator,statement:row.statement,basis:'norm',publishedDate:review.published,accessedDate:reviewedOn}]};
    const coded=codeReferenceAxis(input,sources);result.vec[row.axis]=coded.value;result.evidence[row.axis]=coded.evidence;result.axisEvidence![row.axis]=coded.axisEvidence;result.coding![row.axis]=coded.coding;delete result.unknownAxisReasons[row.axis];
  }
  if(review.replace)result.rationale='Carta1931 recodificada em inferências normativas delimitadas; vetor bruto, entrada integrada e fontes anteriores preservados no módulo de cobertura08.';
  for(const axis of axes)if(!result.coding![axis])result.unknownAxisReasons[axis]??='Sem inferência delimitada nas passagens revistas; 50 desconhecido, sem evidência. '+review.scope;
  if(entry.id==='spanish-second-republic'){result.unknownAxisReasons.eco='Art.44 autoriza socialização/nacionalização; não estabelece propriedade produtiva geral. Educação pública48 não prova orientação econômica nacional. Fatos preservados em pesquisa.';result.unknownAxisReasons.con='Art.44 permite coordenação industrial condicional, não programa geral de alocação executado ou obrigatório. Art.33 protege indústria/comércio; pesquisa preservada.';}
  if(entry.id==='czechoslovakia-socialist-unitary-1960')result.unknownAxisReasons.rel='Currículo científico marxista e consciência privada16/24/32 não estabelecem relação geral Estado/religião; sem inferir separação. Pesquisa preservada.';
  return result;
}
export const historicalCoverage08Audit = Object.entries(reviews).map(([id,r])=>({id,newAxes:r.rows.map(row=>row.axis),replacesLegacy:r.replace,scope:r.scope,independentReview:'accepted-bounded-primary-claims'}));

/** Actual primary passages retained without scores after independent scope rejection. */
export const historicalCoverage08QuarantinedResearch = [
  {
    "id": "spanish-second-republic",
    "status": "quarantined-insufficient-construct-scope",
    "source": {
      "title": "Constitución de la República española1931 — texto primário, Cervantes",
      "url": "https://www.cervantesvirtual.com/obra-visor/constitucion-de-la-republica-espanola-de-9-de-diciembre-1931/html/eb011790-baf1-4bac-b9bd-b50f042667ad_2.html",
      "note": "Texto primário1931 efetivamente lido; proposta de reforma1935 anexada na mesma página não usada. BOE/Congreso anteriores preservados, sem nova leitura integral nesta sessão."
    },
    "published": "1931-12-09",
    "claim": {
      "axis": "eco",
      "position": "moderate-first",
      "confidence": "medium",
      "locator": "Arts.33,44,48–49",
      "statement": "Toda riqueza subordina-se aos interesses da economia nacional; carta permite socialização de propriedade e nacionalização de serviços/explorações por necessidade social; liberdade industrial e educação pública coexistem.",
      "rationale": "Subordinação constitucional da riqueza e autorização ampla de socialização/nacionalização sustentam orientação pública moderada no desenho, com propriedade privada preservada.",
      "uncertainty": "Autorizações amplas não demonstram nacionalizações realizadas ou predomínio público efetivo; propriedade privada e indenização são contrapontos. Educação pública isolada não sustenta orientação econômica nacional.",
      "relatedQuestionIds": []
    },
    "reason": "Permissão legal de socialização/coordenação não estabelece orientação produtiva/allocativa geral; currículo científico e consciência privada não estabelecem relação geral Estado/religião."
  },
  {
    "id": "spanish-second-republic",
    "status": "quarantined-insufficient-construct-scope",
    "source": {
      "title": "Constitución de la República española1931 — texto primário, Cervantes",
      "url": "https://www.cervantesvirtual.com/obra-visor/constitucion-de-la-republica-espanola-de-9-de-diciembre-1931/html/eb011790-baf1-4bac-b9bd-b50f042667ad_2.html",
      "note": "Texto primário1931 efetivamente lido; proposta de reforma1935 anexada na mesma página não usada. BOE/Congreso anteriores preservados, sem nova leitura integral nesta sessão."
    },
    "published": "1931-12-09",
    "claim": {
      "axis": "con",
      "position": "moderate-first",
      "confidence": "medium",
      "locator": "Art.44; contraponto art.33",
      "statement": "Estado pode intervir por lei na exploração e coordenação industrial quando racionalização da produção e economia nacional exigirem.",
      "rationale": "Coordenação pública multissetorial legalmente autorizada sustenta planejamento moderado no desenho.",
      "uncertainty": "Poder condicionado não é planejamento obrigatório geral nem execução; liberdade de indústria e comércio é contraponto.",
      "relatedQuestionIds": []
    },
    "reason": "Permissão legal de socialização/coordenação não estabelece orientação produtiva/allocativa geral; currículo científico e consciência privada não estabelecem relação geral Estado/religião."
  },
  {
    "id": "czechoslovakia-socialist-unitary-1960",
    "status": "quarantined-insufficient-construct-scope",
    "source": {
      "title": "Ústava Československé socialistické republiky, 1960 — Poslanecká sněmovna",
      "url": "https://www.psp.cz/docs/texts/constitution_1960.html",
      "note": "Lei100/1960, texto original oficial: arts.16,24–25,32 efetivamente relidos para ampliação delimitada."
    },
    "published": "1960-07-11",
    "claim": {
      "axis": "rel",
      "position": "moderate-first",
      "confidence": "medium",
      "locator": "Arts.16(1),24(3),32",
      "statement": "Cultura e ensino seguem visão científica marxista-leninista; a carta protege professar religião ou nenhuma e cultos dentro da lei, sem dispensa de deveres cívicos por fé.",
      "rationale": "Orientação científica explícita da educação pública sustenta secularismo moderado, contrastada com consciência privada.",
      "uncertainty": "Não há cláusula explícita de separação aqui; doutrina ideológica obrigatória não é neutralidade plena ou auditoria de perseguição. Ciência definida pelo regime não demonstra qualidade científica.",
      "relatedQuestionIds": [
        "religiao_09"
      ]
    },
    "reason": "Permissão legal de socialização/coordenação não estabelece orientação produtiva/allocativa geral; currículo científico e consciência privada não estabelecem relação geral Estado/religião."
  }
] as const;
