import type {ReferenceEntry} from './references';
import {AXES} from '../lib/scoring';
import {codeReferenceAxis,type ReferenceAxisCoding} from '../lib/reference-coding';
const AXIS_KEYS=AXES.map(axis=>axis.key);
// Isolated proposal: independent source review and Root approval required before import.
export const native14HistoricalCountriesBefore:ReferenceEntry[]=[
  {
    "id": "chile-liberal-order-1828",
    "name": "Chile — ordem liberal anterior a Lircay",
    "aliases": [
      "Chilepipiolo1828",
      "Carta liberalchilena1828"
    ],
    "period": "Carta8/8/1828–ruptura da guerra civil1829–1830; vigência formal permanece até25/5/1833",
    "rationale": "Ordem liberal derrotada na guerra civil e substituída pelo poder conservador; marco político diferente da carta1833, sem criar país apenas por emenda.",
    "caveats": "Carta formalmente continua até1833, mas poder liberal cai em1830. FonteMemoriaChilena dá16abril paraLircay, outra tradição17; mantemos mês/ano e conflito explícito. CabeçalhoCervantes dizsetembro, fecho primário8agosto e BCNconfirmamagosto: erro catalográfico registrado. Sem imputar constituição a prática uniforme de guerra. Economia desconhecida, direitos de propriedade não bastam.",
    "sources": [
      {
        "title": "Constitución de Chile1828 — texto primário, Cervantes",
        "url": "https://www.cervantesvirtual.com/obra-visor/constitucion-politica-del-estado-de-chile--promulgada-el-8-de-septiembre-de-1828/html/f0c8b948-9f73-4a3e-8fb4-be39cda67642_2.html",
        "note": "Corpo/fecho original8agosto efetivamente lido; título superior/slugsetembro divergente não seguido; arts.3–4,7–20,24–33,83,104–118."
      },
      {
        "title": "Carta chilena1828 — HistóriaPolíticaBCN",
        "url": "https://www.bcn.cl/historiapolitica/constituciones/detalle_constitucion?handle=10221.1/18432",
        "note": "Corpo institucional efetivamente lido: promulgação8agosto1828 e vigênciaformal até25maio1833."
      },
      {
        "title": "Guerra civil1829–1830 — MemoriaChilena/BibliotecaNacional",
        "url": "https://www.memoriachilena.gob.cl/602/w3-article-92157.html",
        "note": "Corpo institucional efetivamente lido: crise eleitoral, renúncia liberal, controlePortales e derrotaFreire1830; narrativa16abril conflitante com17, sem fingir resolvido."
      }
    ],
    "kind": "country",
    "category": "historical-country",
    "vec": {
      "est": 40,
      "rep": 60,
      "pod": 40,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 20,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "est": "medium",
      "rep": "medium",
      "pod": "medium",
      "rel": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Constitución de Chile1828 — texto primário, Cervantes"
        ],
        "rationale": "Nomeação executiva e hierarquia legal nacional sustentam direção unitária moderada com autonomia territorial relevante. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Assembleias possuem competências substantivas e municípios elegem governadores locais118; não é centralismo absoluto ou meraausênciaautonomia."
      },
      "rep": {
        "sourceTitles": [
          "Constitución de Chile1828 — texto primário, Cervantes"
        ],
        "rationale": "Representação eleitoral periódica sustenta direção democrática moderada no desenho. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Eleitorado depende de ocupação/propriedade e exclui serviçodoméstico/devedores; disputa sucessória1829 mostra execução problemática. Não sufrágio universal ou eleições auditadas."
      },
      "pod": {
        "sourceTitles": [
          "Constitución de Chile1828 — texto primário, Cervantes"
        ],
        "rationale": "Garantias e proibição de tortura sustentam direção moderada à liberdade no desenho. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Flagrante/receiodefuga13, buscaslegais106, emergência83(12)e responsabilização da imprensa persistem; não inferir liberdade prática plena na guerra civil."
      },
      "rel": {
        "sourceTitles": [
          "Constitución de Chile1828 — texto primário, Cervantes"
        ],
        "rationale": "Monopólio confessional público sustenta direção religiosa forte no desenho. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Não transfere proibição de culto público para crença/opinião privada ou comprova execução persecutória."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constitución de Chile1828 — texto primário, Cervantes",
            "locator": "Arts.108–118",
            "statement": "Assembleias provinciais eleitas escolhem senadores e controlam orçamento municipal; Executivo central nomeia intendentes a partir de ternas provinciais, que executam leis gerais e ordens nacionais.",
            "basis": "norm",
            "publishedDate": "1828-08-08",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Nomeação executiva e hierarquia legal nacional sustentam direção unitária moderada com autonomia territorial relevante.",
        "uncertainty": "Assembleias possuem competências substantivas e municípios elegem governadores locais118; não é centralismo absoluto ou meraausênciaautonomia.",
        "reviewedOn": "2026-10-08",
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
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constitución de Chile1828 — texto primário, Cervantes",
            "locator": "Arts.7–8,24–33,109",
            "statement": "Deputados e assembleias provinciais são diretamente eleitos, com mandatos curtos/renovação; senadores vêm dasassembleias.",
            "basis": "norm",
            "publishedDate": "1828-08-08",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Representação eleitoral periódica sustenta direção democrática moderada no desenho.",
        "uncertainty": "Eleitorado depende de ocupação/propriedade e exclui serviçodoméstico/devedores; disputa sucessória1829 mostra execução problemática. Não sufrágio universal ou eleições auditadas.",
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
            "sourceTitle": "Constitución de Chile1828 — texto primário, Cervantes",
            "locator": "Arts.10–20,83(12),104–107",
            "statement": "Carta protege liberdade, prisão judicial com exceções, imprensa, domicílio/correspondência e proíbe tortura; emergência admite medidas imediatas sob prestação de contas aoCongresso/Comissão.",
            "basis": "norm",
            "publishedDate": "1828-08-08",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Garantias e proibição de tortura sustentam direção moderada à liberdade no desenho.",
        "uncertainty": "Flagrante/receiodefuga13, buscaslegais106, emergência83(12)e responsabilização da imprensa persistem; não inferir liberdade prática plena na guerra civil.",
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "rel": {
        "axis": "rel",
        "position": "strong-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constitución de Chile1828 — texto primário, Cervantes",
            "locator": "Arts.3–4",
            "statement": "Religião católica exclui exercício público de qualquer outra, enquanto opiniões privadas não são perseguidas.",
            "basis": "norm",
            "publishedDate": "1828-08-08",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Monopólio confessional público sustenta direção religiosa forte no desenho.",
        "uncertainty": "Não transfere proibição de culto público para crença/opinião privada ou comprova execução persecutória.",
        "reviewedOn": "2026-10-08",
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
      "reviewedOn": "2026-10-08",
      "independentReview": "accepted-bounded-primary-and-identity",
      "scope": "Passagens codificadas e cronologia cotejadas independentemente; prática histórica e todas as emendas não auditadas integralmente."
    },
    "unknownAxisReasons": {
      "imi": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "dip": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "int": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "eco": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "con": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "com": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "mor": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "tec": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação."
    }
  },
  {
    "id": "uruguay-dual-executive-order-1919",
    "name": "Uruguai — ordem do Executivo compartilhado",
    "aliases": [
      "Uruguai — Conselho Nacional de Administração1919–1933"
    ],
    "period": "1março1919–ruptura31março1933; recorte normativo original plebiscitado25novembro1917",
    "rationale": "Presidência e Conselho compartilham Executivo; golpe dissolve Conselho e parlamento. Estrutura efetiva distingue este recorte da primeira ordem1830, sem criar país por emenda.",
    "caveats": "Norma não é auditoria integral da prática1919–1933. Sufrágio feminino depende de lei especial10 e primeiro Executivo é escolhido parlamentarmente pelas disposiçõesD/E; não sufrágio universal imediato. Administração de serviços públicos100 e liberdade industrial171 não determinam propriedade predominante em toda economia; eco desconhecido. Autonomia local não foi convertida automaticamente em federalismo.",
    "sources": [
      {
        "title": "Constituição uruguaia1918 — transcrição parlamentar, vigência1919",
        "url": "https://biblioteca.parlamento.gub.uy/File/biblioteca/Constituciones/1917/1917%20Constitucion%20-%20OCR.pdf",
        "note": "Fonte primária em transcrição/OCR parlamentar8páginas efetivamente lida:5–12,19/26–27,70–82,97–100,130–145,146–173,transitóriasA–I. Cotejo de passagens com Cervantes; não scan original completo."
      },
      {
        "title": "Constitución de1918 — Biblioteca Cervantes",
        "url": "https://www.cervantesvirtual.com/obra-visor/constitucion-de-1918/html/ede0ff47-9171-4208-988f-ff320585a241_2.html",
        "note": "Texto primário republicado realmente aberto e passagens relevantes recuperadas em corpo indexado. Cabeçalho1918 com plebiscito25novembro1917; transitóriaA fixa início1março1919."
      },
      {
        "title": "1933: golpe e intervenção da Corte Electoral — Corte Electoral",
        "url": "https://www.gub.uy/corte-electoral/comunicacion/publicaciones/1933-golpe-estado-intervencion-corte-electoral",
        "note": "Corpo institucional17junho2024 realmente lido:31março1933 decreto dissolve Assembleia e Conselho; retrospectiva institucional baseada em pesquisa, não leitura do decreto original."
      }
    ],
    "kind": "country",
    "category": "historical-country",
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
      "rel": 60,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "rep": "medium",
      "pod": "medium",
      "rel": "medium",
      "imi": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constituição uruguaia1918 — transcrição parlamentar, vigência1919"
        ],
        "rationale": "Representação competitiva especificada sustenta desenho democrático moderado. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Voto feminino depende de autorização10; suspensões12, Senado indireto27 e primeira eleição parlamentarD/E. Não prática eleitoral integral."
      },
      "pod": {
        "sourceTitles": [
          "Constituição uruguaia1918 — transcrição parlamentar, vigência1919"
        ],
        "rationale": "Garantias gerais/processuais sustentam liberdade normativa moderada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Prisão154 é de cidadãos, com flagrante/semiplena prova e ordem; direitos146 incluem habitantes. Medidas urgentes79(19) requerem relatório24h e controle Assembleia/Comissão; não ausência de repressão observada."
      },
      "rel": {
        "sourceTitles": [
          "Constituição uruguaia1918 — transcrição parlamentar, vigência1919"
        ],
        "rationale": "Ausência de religião sustentada pelo Estado e pluralidade de cultos sustentam secularismo moderado. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Patrimônio católico e isenção de templos são contrapontos; não hostilidade religiosa ou ausência de toda cooperação estatal."
      },
      "imi": {
        "sourceTitles": [
          "Constituição uruguaia1918 — transcrição parlamentar, vigência1919"
        ],
        "rationale": "Entrada e residência admitidas por norma geral sustentam dimensão de abertura migratória moderada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Leis de polícia e direitos de terceiros172 limitam ingresso; cidadania8 exige profissão/capital e residência. Não se infere igualdade cultural irrestrita ou prática de acolhimento."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constituição uruguaia1918 — transcrição parlamentar, vigência1919",
            "locator": "Arts.9–12,19,26–27,70–82; transitóriasD/E",
            "statement": "Voto secreto/proporcional e representantes eleitos; Presidente e Conselho em regra eleitos diretamente, com participação minoritária no Conselho.",
            "basis": "norm",
            "publishedDate": "1917-11-25",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Representação competitiva especificada sustenta desenho democrático moderado.",
        "uncertainty": "Voto feminino depende de autorização10; suspensões12, Senado indireto27 e primeira eleição parlamentarD/E. Não prática eleitoral integral.",
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
            "sourceTitle": "Constituição uruguaia1918 — transcrição parlamentar, vigência1919",
            "locator": "Arts.146–168; contrapontos79(19),80,154,168",
            "statement": "Carta protege processo, defesa, habeas corpus, privacidade e expressão sem censura prévia; urgência e suspensão têm controle parlamentar e limites.",
            "basis": "norm",
            "publishedDate": "1917-11-25",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Garantias gerais/processuais sustentam liberdade normativa moderada.",
        "uncertainty": "Prisão154 é de cidadãos, com flagrante/semiplena prova e ordem; direitos146 incluem habitantes. Medidas urgentes79(19) requerem relatório24h e controle Assembleia/Comissão; não ausência de repressão observada.",
        "reviewedOn": "2026-10-08",
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
        "claims": [
          {
            "sourceTitle": "Constituição uruguaia1918 — transcrição parlamentar, vigência1919",
            "locator": "Art.5",
            "statement": "Estado não sustenta religião e cultos são livres; reconhece templos católicos antes financiados e isenta templos religiosos de impostos.",
            "basis": "norm",
            "publishedDate": "1917-11-25",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Ausência de religião sustentada pelo Estado e pluralidade de cultos sustentam secularismo moderado.",
        "uncertainty": "Patrimônio católico e isenção de templos são contrapontos; não hostilidade religiosa ou ausência de toda cooperação estatal.",
        "reviewedOn": "2026-10-08",
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
        "relatedQuestionIds": [
          "imigracao_18"
        ],
        "rationale": "Entrada e residência admitidas por norma geral sustentam dimensão de abertura migratória moderada.",
        "uncertainty": "Leis de polícia e direitos de terceiros172 limitam ingresso; cidadania8 exige profissão/capital e residência. Não se infere igualdade cultural irrestrita ou prática de acolhimento.",
        "claims": [
          {
            "sourceTitle": "Constituição uruguaia1918 — transcrição parlamentar, vigência1919",
            "locator": "Art.172; contraponto8",
            "statement": "Carta permite entrada, permanência e saída de toda pessoa, observadas leis de polícia e direitos de terceiros; cidadania tem requisitos distintos.",
            "basis": "norm",
            "publishedDate": "1917-11-25",
            "accessedDate": "2026-10-08"
          }
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
    "documentaryReview": {
      "status": "author-reviewed-bounded-claims",
      "reviewedOn": "2026-10-08",
      "independentReview": "accepted-bounded-primary-and-identity",
      "scope": "Passagens primárias parlamentares e cronologia institucional cotejadas independentemente; prática histórica integral não auditada."
    },
    "unknownAxisReasons": {
      "est": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "dip": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "int": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "eco": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "con": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "com": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "mor": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "tec": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação."
    }
  },
  {
    "id": "brazil-fourth-republic-1946",
    "name": "Brasil — Quarta República",
    "aliases": [
      "Brasil — República Populista1946–1964",
      "Brasil — ordem constitucional1946"
    ],
    "period": "31/01/1946–ruptura política de31/03/1964; recorte normativo original de18/09/1946",
    "rationale": "Retorno de governo eleito e ordem representativa federal após o Estado Novo; ruptura militar encerra o regime. A identidade não transforma cada emenda ou mudança de gabinete em país distinto.",
    "caveats": "Norma original1946, não média da prática1946–1964. Interlúdio parlamentar1961–1963 reconhecido sem perfil adicional. Ruptura política1964 não significa revogação formal imediata: AI1 mantém a Constituição com alterações autoritárias. Imigração permanece desconhecida diante de abertura142 e seleção/assimilação162/5XV r/168I; nenhuma sexta direção foi criada para o gate. Fontes legislativas são transcrições oficiais, não inspeção visual dos exemplares originais.",
    "sources": [
      {
        "title": "Constituição brasileira1946 — Câmara dos Deputados, republicação",
        "url": "https://www2.camara.leg.br/legin/fed/consti/1940-1949/constituicao-1946-18-julho-1946-365199-republicacao-1-pl.html",
        "note": "Corpo normativo oficial realmente aberto:1–59,131–175,176–182,205–218. Data18setembro1946 no corpo, apesar do slug18julho. Republicação, sem afirmar inspeção visual do DOU ou auditoria de todas as emendas."
      },
      {
        "title": "Senado200anos — cronologia institucional",
        "url": "https://www12.senado.leg.br/senado200anos/passado",
        "note": "Corpo realmente lido:29out1945 deposição de Vargas;31jan1946 posse de Dutra,1fev1946 Constituinte,18set1946 promulgação; interlúdio parlamentar1961–1963;31mar1964 golpe. Retrospectiva institucional, não fonte de práticas em todos os eixos."
      },
      {
        "title": "AI1 de9abril1964 — Câmara dos Deputados, publicação original",
        "url": "https://www2.camara.leg.br/legin/fed/atoins/1960-1969/atoinstitucional-1-9-abril-1964-364977-publicacaooriginal-1-csr.html",
        "note": "Autoria abriu realmente corpo completo: preâmbulo e1–11. Renderer da revisão independente não exibiu corpo; não nova leitura independente do AI1. Mantém carta1946, altera eleição presidencial e permite cassação/exclusão judicial. Usado para identidade terminal; não projeta seus dispositivos retroativamente na carta original."
      }
    ],
    "kind": "country",
    "category": "historical-country",
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
      "rel": 60,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "est": "medium",
      "rep": "medium",
      "pod": "medium",
      "dip": "medium",
      "rel": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Constituição brasileira1946 — Câmara dos Deputados, republicação"
        ],
        "rationale": "Autonomia federativa efetiva no desenho sustenta direção moderada descentralizada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Competências nacionais amplas, intervenção e Distrito Federal administrado por prefeito nomeado; capitais e bases militares têm exceções à eleição municipal. Não prática federativa integral."
      },
      "rep": {
        "sourceTitles": [
          "Constituição brasileira1946 — Câmara dos Deputados, republicação"
        ],
        "rationale": "Estrutura eletiva renovável e representação plural sustentam desenho democrático moderado. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Exclui analfabetos, quem não se exprime na língua nacional e parte das praças militares; partidos contrários ao regime plural podem ser proibidos. Não certifica eleições livres de toda coerção observada."
      },
      "pod": {
        "sourceTitles": [
          "Constituição brasileira1946 — Câmara dos Deputados, republicação"
        ],
        "rationale": "Conjunto de garantias ordinárias sustenta direção moderada de liberdade normativa. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Censura de diversões, proibição partidária e exceção disciplinar ao habeas; estado de sítio permite detenção, desterro, censura e suspensão de reunião, sujeito a duração e controle parlamentar/judicial. Não ausência de repressão."
      },
      "dip": {
        "sourceTitles": [
          "Constituição brasileira1946 — Câmara dos Deputados, republicação"
        ],
        "rationale": "Regra geral da política de guerra sustenta direção pacífica moderada, como norma. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Mantém defesa armada e serviço militar obrigatório; não pacifismo absoluto nem conduta externa efetivamente auditada."
      },
      "rel": {
        "sourceTitles": [
          "Constituição brasileira1946 — Câmara dos Deputados, republicação"
        ],
        "rationale": "Relação geral entre Estado e religião sustenta secularismo moderado. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Permite colaboração de interesse coletivo, isenção de templos, assistência religiosa militar, ensino religioso facultativo e representação junto à Santa Sé; culto limitado por ordem pública/bons costumes."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constituição brasileira1946 — Câmara dos Deputados, republicação",
            "locator": "Arts.1–2,18,28; contrapontos5/7–14/25–26/28§§1–2",
            "statement": "Estados possuem constituições e poderes reservados; municípios administram interesses locais e rendas.",
            "basis": "norm",
            "publishedDate": "1946-09-18",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Autonomia federativa efetiva no desenho sustenta direção moderada descentralizada.",
        "uncertainty": "Competências nacionais amplas, intervenção e Distrito Federal administrado por prefeito nomeado; capitais e bases militares têm exceções à eleição municipal. Não prática federativa integral.",
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
            "sourceTitle": "Constituição brasileira1946 — Câmara dos Deputados, republicação",
            "locator": "Arts.37–38,56–60,131–134; contrapontos132/135/141§13",
            "statement": "Legislaturas periódicas e sufrágio direto/secreto com representação proporcional e ambos os sexos.",
            "basis": "norm",
            "publishedDate": "1946-09-18",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Estrutura eletiva renovável e representação plural sustentam desenho democrático moderado.",
        "uncertainty": "Exclui analfabetos, quem não se exprime na língua nacional e parte das praças militares; partidos contrários ao regime plural podem ser proibidos. Não certifica eleições livres de toda coerção observada.",
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
            "sourceTitle": "Constituição brasileira1946 — Câmara dos Deputados, republicação",
            "locator": "Art.141§§1–6/11–12/15/20–31; contrapontos141§§5/13/23 e206–215",
            "statement": "Direitos gerais, controle judicial, processo/defesa, privacidade, expressão e habeas corpus.",
            "basis": "norm",
            "publishedDate": "1946-09-18",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Conjunto de garantias ordinárias sustenta direção moderada de liberdade normativa.",
        "uncertainty": "Censura de diversões, proibição partidária e exceção disciplinar ao habeas; estado de sítio permite detenção, desterro, censura e suspensão de reunião, sujeito a duração e controle parlamentar/judicial. Não ausência de repressão.",
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
            "sourceTitle": "Constituição brasileira1946 — Câmara dos Deputados, republicação",
            "locator": "Art.4; contrapontos5II–VI e176–181",
            "statement": "Guerra depende do fracasso de meios pacíficos; guerra de conquista é categoricamente excluída.",
            "basis": "norm",
            "publishedDate": "1946-09-18",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Regra geral da política de guerra sustenta direção pacífica moderada, como norma.",
        "uncertainty": "Mantém defesa armada e serviço militar obrigatório; não pacifismo absoluto nem conduta externa efetivamente auditada.",
        "reviewedOn": "2026-10-08",
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
        "claims": [
          {
            "sourceTitle": "Constituição brasileira1946 — Câmara dos Deputados, republicação",
            "locator": "Arts.31II–III,141§§7–10; contrapontos31Vb/168V/196",
            "statement": "Proíbe estabelecimento/subvenção de cultos e aliança/dependência de igrejas; garante crença e cemitérios seculares.",
            "basis": "norm",
            "publishedDate": "1946-09-18",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Relação geral entre Estado e religião sustenta secularismo moderado.",
        "uncertainty": "Permite colaboração de interesse coletivo, isenção de templos, assistência religiosa militar, ensino religioso facultativo e representação junto à Santa Sé; culto limitado por ordem pública/bons costumes.",
        "reviewedOn": "2026-10-08",
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
      "reviewedOn": "2026-10-08",
      "independentReview": "accepted-bounded-primary-and-identity",
      "scope": "Autoria leu passagens primárias e cronologia institucional; passagens codificadas e cronologia cotejadas independentemente; prática histórica não auditada integralmente, sem auditoria integral da prática."
    },
    "unknownAxisReasons": {
      "imi": "Entrada geral em paz142 contraposta à seleção por interesse nacional162, incorporação indígena5XV r e ensino primário em língua nacional168I; direção global não resolvida pela autoria.",
      "int": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "eco": "145 concilia iniciativa livre e justiça social;146/147 permitem intervenção/monopólio/distribuição sem estabelecer propriedade produtiva geral predominante. Crédito rural150 ou educação pública não resolvem o eixo.",
      "con": "Conselho205 estuda e sugere, sem programa obrigatório de alocação geral; planos regionais198/199 não equivalem a planejamento integral da economia.",
      "com": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "mor": "Casamento indissolúvel163 e igualdade salarial157II não foram convertidos em direção moral global; não há cotejo suficiente de todos os domínios.",
      "tec": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação."
    }
  }
] as unknown as ReferenceEntry[];
export const native14HistoricalCountriesResearch=[
  {
    "id": "brazil-fourth-republic-1946",
    "name": "Brasil — Quarta República",
    "category": "historical-country",
    "period": "31/01/1946–ruptura política de31/03/1964; recorte normativo original de18/09/1946",
    "priorWholeRecord": {
      "id": "brazil-fourth-republic-1946",
      "name": "Brasil — Quarta República",
      "aliases": [
        "Brasil — República Populista1946–1964",
        "Brasil — ordem constitucional1946"
      ],
      "period": "31/01/1946–ruptura política de31/03/1964; recorte normativo original de18/09/1946",
      "rationale": "Retorno de governo eleito e ordem representativa federal após o Estado Novo; ruptura militar encerra o regime. A identidade não transforma cada emenda ou mudança de gabinete em país distinto.",
      "caveats": "Norma original1946, não média da prática1946–1964. Interlúdio parlamentar1961–1963 reconhecido sem perfil adicional. Ruptura política1964 não significa revogação formal imediata: AI1 mantém a Constituição com alterações autoritárias. Imigração permanece desconhecida diante de abertura142 e seleção/assimilação162/5XV r/168I; nenhuma sexta direção foi criada para o gate. Fontes legislativas são transcrições oficiais, não inspeção visual dos exemplares originais.",
      "sources": [
        {
          "title": "Constituição brasileira1946 — Câmara dos Deputados, republicação",
          "url": "https://www2.camara.leg.br/legin/fed/consti/1940-1949/constituicao-1946-18-julho-1946-365199-republicacao-1-pl.html",
          "note": "Corpo normativo oficial realmente aberto:1–59,131–175,176–182,205–218. Data18setembro1946 no corpo, apesar do slug18julho. Republicação, sem afirmar inspeção visual do DOU ou auditoria de todas as emendas."
        },
        {
          "title": "Senado200anos — cronologia institucional",
          "url": "https://www12.senado.leg.br/senado200anos/passado",
          "note": "Corpo realmente lido:29out1945 deposição de Vargas;31jan1946 posse de Dutra,1fev1946 Constituinte,18set1946 promulgação; interlúdio parlamentar1961–1963;31mar1964 golpe. Retrospectiva institucional, não fonte de práticas em todos os eixos."
        },
        {
          "title": "AI1 de9abril1964 — Câmara dos Deputados, publicação original",
          "url": "https://www2.camara.leg.br/legin/fed/atoins/1960-1969/atoinstitucional-1-9-abril-1964-364977-publicacaooriginal-1-csr.html",
          "note": "Autoria abriu realmente corpo completo: preâmbulo e1–11. Renderer da revisão independente não exibiu corpo; não nova leitura independente do AI1. Mantém carta1946, altera eleição presidencial e permite cassação/exclusão judicial. Usado para identidade terminal; não projeta seus dispositivos retroativamente na carta original."
        }
      ],
      "kind": "country",
      "category": "historical-country",
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
        "rel": 60,
        "mor": 50,
        "tec": 50
      },
      "evidence": {
        "est": "medium",
        "rep": "medium",
        "pod": "medium",
        "dip": "medium",
        "rel": "medium"
      },
      "axisEvidence": {
        "est": {
          "sourceTitles": [
            "Constituição brasileira1946 — Câmara dos Deputados, republicação"
          ],
          "rationale": "Autonomia federativa efetiva no desenho sustenta direção moderada descentralizada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Competências nacionais amplas, intervenção e Distrito Federal administrado por prefeito nomeado; capitais e bases militares têm exceções à eleição municipal. Não prática federativa integral."
        },
        "rep": {
          "sourceTitles": [
            "Constituição brasileira1946 — Câmara dos Deputados, republicação"
          ],
          "rationale": "Estrutura eletiva renovável e representação plural sustentam desenho democrático moderado. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Exclui analfabetos, quem não se exprime na língua nacional e parte das praças militares; partidos contrários ao regime plural podem ser proibidos. Não certifica eleições livres de toda coerção observada."
        },
        "pod": {
          "sourceTitles": [
            "Constituição brasileira1946 — Câmara dos Deputados, republicação"
          ],
          "rationale": "Conjunto de garantias ordinárias sustenta direção moderada de liberdade normativa. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Censura de diversões, proibição partidária e exceção disciplinar ao habeas; estado de sítio permite detenção, desterro, censura e suspensão de reunião, sujeito a duração e controle parlamentar/judicial. Não ausência de repressão."
        },
        "dip": {
          "sourceTitles": [
            "Constituição brasileira1946 — Câmara dos Deputados, republicação"
          ],
          "rationale": "Regra geral da política de guerra sustenta direção pacífica moderada, como norma. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Mantém defesa armada e serviço militar obrigatório; não pacifismo absoluto nem conduta externa efetivamente auditada."
        },
        "rel": {
          "sourceTitles": [
            "Constituição brasileira1946 — Câmara dos Deputados, republicação"
          ],
          "rationale": "Relação geral entre Estado e religião sustenta secularismo moderado. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Permite colaboração de interesse coletivo, isenção de templos, assistência religiosa militar, ensino religioso facultativo e representação junto à Santa Sé; culto limitado por ordem pública/bons costumes."
        }
      },
      "coding": {
        "est": {
          "axis": "est",
          "position": "moderate-first",
          "confidence": "medium",
          "claims": [
            {
              "sourceTitle": "Constituição brasileira1946 — Câmara dos Deputados, republicação",
              "locator": "Arts.1–2,18,28; contrapontos5/7–14/25–26/28§§1–2",
              "statement": "Estados possuem constituições e poderes reservados; municípios administram interesses locais e rendas.",
              "basis": "norm",
              "publishedDate": "1946-09-18",
              "accessedDate": "2026-10-08"
            }
          ],
          "rationale": "Autonomia federativa efetiva no desenho sustenta direção moderada descentralizada.",
          "uncertainty": "Competências nacionais amplas, intervenção e Distrito Federal administrado por prefeito nomeado; capitais e bases militares têm exceções à eleição municipal. Não prática federativa integral.",
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
              "sourceTitle": "Constituição brasileira1946 — Câmara dos Deputados, republicação",
              "locator": "Arts.37–38,56–60,131–134; contrapontos132/135/141§13",
              "statement": "Legislaturas periódicas e sufrágio direto/secreto com representação proporcional e ambos os sexos.",
              "basis": "norm",
              "publishedDate": "1946-09-18",
              "accessedDate": "2026-10-08"
            }
          ],
          "rationale": "Estrutura eletiva renovável e representação plural sustentam desenho democrático moderado.",
          "uncertainty": "Exclui analfabetos, quem não se exprime na língua nacional e parte das praças militares; partidos contrários ao regime plural podem ser proibidos. Não certifica eleições livres de toda coerção observada.",
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
              "sourceTitle": "Constituição brasileira1946 — Câmara dos Deputados, republicação",
              "locator": "Art.141§§1–6/11–12/15/20–31; contrapontos141§§5/13/23 e206–215",
              "statement": "Direitos gerais, controle judicial, processo/defesa, privacidade, expressão e habeas corpus.",
              "basis": "norm",
              "publishedDate": "1946-09-18",
              "accessedDate": "2026-10-08"
            }
          ],
          "rationale": "Conjunto de garantias ordinárias sustenta direção moderada de liberdade normativa.",
          "uncertainty": "Censura de diversões, proibição partidária e exceção disciplinar ao habeas; estado de sítio permite detenção, desterro, censura e suspensão de reunião, sujeito a duração e controle parlamentar/judicial. Não ausência de repressão.",
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
              "sourceTitle": "Constituição brasileira1946 — Câmara dos Deputados, republicação",
              "locator": "Art.4; contrapontos5II–VI e176–181",
              "statement": "Guerra depende do fracasso de meios pacíficos; guerra de conquista é categoricamente excluída.",
              "basis": "norm",
              "publishedDate": "1946-09-18",
              "accessedDate": "2026-10-08"
            }
          ],
          "rationale": "Regra geral da política de guerra sustenta direção pacífica moderada, como norma.",
          "uncertainty": "Mantém defesa armada e serviço militar obrigatório; não pacifismo absoluto nem conduta externa efetivamente auditada.",
          "reviewedOn": "2026-10-08",
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
          "claims": [
            {
              "sourceTitle": "Constituição brasileira1946 — Câmara dos Deputados, republicação",
              "locator": "Arts.31II–III,141§§7–10; contrapontos31Vb/168V/196",
              "statement": "Proíbe estabelecimento/subvenção de cultos e aliança/dependência de igrejas; garante crença e cemitérios seculares.",
              "basis": "norm",
              "publishedDate": "1946-09-18",
              "accessedDate": "2026-10-08"
            }
          ],
          "rationale": "Relação geral entre Estado e religião sustenta secularismo moderado.",
          "uncertainty": "Permite colaboração de interesse coletivo, isenção de templos, assistência religiosa militar, ensino religioso facultativo e representação junto à Santa Sé; culto limitado por ordem pública/bons costumes.",
          "reviewedOn": "2026-10-08",
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
        "reviewedOn": "2026-10-08",
        "independentReview": "accepted-bounded-primary-and-identity",
        "scope": "Autoria leu passagens primárias e cronologia institucional; passagens codificadas e cronologia cotejadas independentemente; prática histórica não auditada integralmente, sem auditoria integral da prática."
      },
      "unknownAxisReasons": {
        "imi": "Entrada geral em paz142 contraposta à seleção por interesse nacional162, incorporação indígena5XV r e ensino primário em língua nacional168I; direção global não resolvida pela autoria.",
        "int": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
        "eco": "145 concilia iniciativa livre e justiça social;146/147 permitem intervenção/monopólio/distribuição sem estabelecer propriedade produtiva geral predominante. Crédito rural150 ou educação pública não resolvem o eixo.",
        "con": "Conselho205 estuda e sugere, sem programa obrigatório de alocação geral; planos regionais198/199 não equivalem a planejamento integral da economia.",
        "com": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
        "mor": "Casamento indissolúvel163 e igualdade salarial157II não foram convertidos em direção moral global; não há cotejo suficiente de todos os domínios.",
        "tec": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação."
      }
    },
    "priorWholeRecordSha256": "91de532cdb6ac7a1fbe687137f231cc16a0eda63a7dc55241156244fa1c36143",
    "priorDocumentedAxes": [
      "est",
      "rep",
      "pod",
      "dip",
      "rel"
    ],
    "researchStatus": "independent evidence only; editorial assessment and scores remain with root",
    "periodGuards": [
      "Do not apply18 September 1946 constitution retroactively to 31 January–17 September 1946.",
      "No post31 March 1964 authoritarian practice imported.",
      "Normative original remains separate from later amendments,1961–1963 parliamentary interlude and changing 1950s developmental policy."
    ],
    "sources": [
      {
        "id": "br-constitution",
        "title": "Constituição dos Estados Unidos do Brasil de 1946 — Câmara dos Deputados, republicação",
        "url": "https://www2.camara.leg.br/legin/fed/consti/1940-1949/constituicao-1946-18-julho-1946-365199-republicacao-1-pl.html",
        "publishedDate": "Promulgated 1946-09-18; DOU original 1946-09-19; republications 1946-09-25 and 1946-10-15 listed",
        "accessedDate": "2026-10-08",
        "retrievalMode": "direct",
        "actualReadScope": "Direct full HTML download; actual text read Articles 1–33,37–40,56–63,129–175,176–181,196,206–217 and source publication footer.",
        "note": "Misleading URL contains18-julho; body/promulgation metadata govern. Historical original/republication, not amended law through 1964. Text normalization joins line breaks; no supplied-text alterations."
      },
      {
        "id": "br-tse-history",
        "title": "Conheça a Justiça Eleitoral — Justiça Eleitoral",
        "url": "https://www.justicaeleitoral.jus.br/a-justica-eleitoral.html",
        "publishedDate": "undated institutional retrospective",
        "accessedDate": "2026-10-08",
        "retrievalMode": "direct",
        "actualReadScope": "Reinstalação 1945; Mudança de Sede; timeline entries 1946–1964 and election-years paragraph.",
        "note": "Dated events within period distinguished from publication date. Avoid the page’s overbroad phrase that direct local elections happened for the first time in 1947."
      },
      {
        "id": "br-tse-pcb",
        "title": "Cancelamento de registro do Partido Comunista Brasileiro — Tribunal Superior Eleitoral",
        "url": "https://www.tse.jus.br/jurisprudencia/julgados-historicos/cancelamento-de-registro-do-partido-comunista-brasileiro",
        "publishedDate": "undated institutional retrospective; notes cite access 2008-08-01, not a publication date",
        "accessedDate": "2026-10-08",
        "retrievalMode": "direct",
        "actualReadScope": "Full historical narrative from Antecedentes through A extinção dos mandatos eletivos and notes. Linked judgment scans not read.",
        "note": "Institutional account of dated 1947–1950 actions; allegation of antidemocratic behavior is attributed to decision-makers, not asserted as historical truth."
      },
      {
        "id": "br-unef",
        "title": "First United Nations Emergency Force (UNEF I) — Background, full text — United Nations Peacekeeping",
        "url": "https://peacekeeping.un.org/sites/default/files/past/unef1backgr2.html",
        "publishedDate": "undated UN historical account",
        "accessedDate": "2026-10-08",
        "retrievalMode": "indexed",
        "actualReadScope": "Indexed text: UNEF composition, Brazilian battalion arrival by February 1957, consent/deployment narrative and operation phases. Direct web open failed.",
        "note": "Dated practice only through 31 March 1964 used;1967 outcomes not imported. Participation in peacekeeping is not absence of armed forces or entire foreign-policy proof."
      },
      {
        "id": "br-bndes",
        "title": "Apoio à infraestrutura nas origens do Banco — BNDES",
        "url": "https://blogdodesenvolvimento.bndes.gov.br/categoria/economia-e-desenvolvimento/Apoio-a-infraestrutura-nas-origens-do-Banco/",
        "publishedDate": "2019-03-07; updated 2025-09-15",
        "accessedDate": "2026-10-08",
        "retrievalMode": "direct",
        "actualReadScope": "Complete article body:1951–1953 planning/commission/bank, first funded projects,1950s sectoral credit and Plano de Metas section.",
        "note": "Institutional retrospective, adapted from institutional histories. Earlier portal URL redirected404; verified replacement read. Funding is not ownership."
      }
    ],
    "claims": [
      {
        "id": "br-est-norm",
        "axis": "est",
        "sourceId": "br-constitution",
        "sourceTitle": "Constituição dos Estados Unidos do Brasil de 1946 — Câmara dos Deputados, republicação",
        "url": "https://www2.camara.leg.br/legin/fed/consti/1940-1949/constituicao-1946-18-julho-1946-365199-republicacao-1-pl.html",
        "locator": "Articles 1–33, particularly 7–14 and 18–33",
        "statement": "States retain constitutions, residual powers and taxes; municipalities control local services and finances, with elected authorities subject to exceptions.",
        "basis": "norm",
        "publishedDate": "Promulgated 1946-09-18; DOU original 1946-09-19; republications 1946-09-25 and 1946-10-15 listed",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Territorial institutions, lawmaking, finances and local administration jointly evidence federation.",
        "counterEvidence": "National competencies remain broad; capital/strategic-city mayor appointments and intervention provisions qualify autonomy.",
        "uncertainty": "Constitutional distribution not a nationwide audit of actual local independence.",
        "retrievalMode": "direct",
        "actualReadScope": "Direct full HTML download; actual text read Articles 1–33,37–40,56–63,129–175,176–181,196,206–217 and source publication footer.",
        "applicablePeriod": "Original 1946 text from 18 September 1946",
        "evidenceFormat": "bounded paraphrase in statement"
      },
      {
        "id": "br-rep-norm",
        "axis": "rep",
        "sourceId": "br-constitution",
        "sourceTitle": "Constituição dos Estados Unidos do Brasil de 1946 — Câmara dos Deputados, republicação",
        "url": "https://www2.camara.leg.br/legin/fed/consti/1940-1949/constituicao-1946-18-julho-1946-365199-republicacao-1-pl.html",
        "locator": "Articles 37–40,56–60,131–138;141§13",
        "statement": "Periodic representative elections and secret suffrage coexist with literacy/language exclusions and possible antidemocratic-party bans.",
        "basis": "norm",
        "publishedDate": "Promulgated 1946-09-18; DOU original 1946-09-19; republications 1946-09-25 and 1946-10-15 listed",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Institutional renewal, representation and participation limits considered together.",
        "counterEvidence": "Both-sex suffrage does not imply universal enfranchisement under Article 132.",
        "uncertainty": "Original presidential design should not be projected unchanged over 1961–1963 parliamentary interval.",
        "retrievalMode": "direct",
        "actualReadScope": "Direct full HTML download; actual text read Articles 1–33,37–40,56–63,129–175,176–181,196,206–217 and source publication footer.",
        "applicablePeriod": "Original 1946 text",
        "evidenceFormat": "bounded paraphrase in statement"
      },
      {
        "id": "br-rep-practice",
        "axis": "rep",
        "sourceId": "br-tse-history",
        "sourceTitle": "Conheça a Justiça Eleitoral — Justiça Eleitoral",
        "url": "https://www.justicaeleitoral.jus.br/a-justica-eleitoral.html",
        "locator": "Election-years paragraph; timeline 1946,1955,1961,1963",
        "statement": "Repeated postwar elections occurred; the 1961 parliamentary change was followed by a January 1963 referendum restoring presidentialism.",
        "basis": "practice",
        "publishedDate": "undated institutional retrospective",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Dated electoral operation complements legal design and reveals institutional variation.",
        "counterEvidence": "Electoral administration and ballot changes do not prove universal inclusion or freedom from coercion.",
        "uncertainty": "Institutional retrospective, not direct election returns or a complete fraud audit.",
        "retrievalMode": "direct",
        "actualReadScope": "Reinstalação 1945; Mudança de Sede; timeline entries 1946–1964 and election-years paragraph.",
        "applicablePeriod": "1946–1963 only",
        "evidenceFormat": "bounded paraphrase in statement"
      },
      {
        "id": "br-rep-pod-counter",
        "axis": "rep",
        "sourceId": "br-tse-pcb",
        "sourceTitle": "Cancelamento de registro do Partido Comunista Brasileiro — Tribunal Superior Eleitoral",
        "url": "https://www.tse.jus.br/jurisprudencia/julgados-historicos/cancelamento-de-registro-do-partido-comunista-brasileiro",
        "locator": "O cancelamento do registro do PCB; A extinção dos mandatos eletivos",
        "statement": "TSE cancelled PCB registration on 7 May 1947; communist legislators lost mandates inJanuary 1948.",
        "basis": "practice",
        "publishedDate": "undated institutional retrospective; notes cite access 2008-08-01, not a publication date",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Material counterexample to unrestricted pluralism, tied to constitutional exclusion mechanisms.",
        "counterEvidence": "Decision was3–2; dissent disputed evidentiary grounds, and later 1949 seat-allocation law was judicially rejected.",
        "uncertainty": "Does not erase all competitive elections or establish autocracy across the entire period.",
        "retrievalMode": "direct",
        "actualReadScope": "Full historical narrative from Antecedentes through A extinção dos mandatos eletivos and notes. Linked judgment scans not read.",
        "applicablePeriod": "1947–1950",
        "evidenceFormat": "bounded paraphrase in statement"
      },
      {
        "id": "br-pod-norm",
        "axis": "pod",
        "sourceId": "br-constitution",
        "sourceTitle": "Constituição dos Estados Unidos do Brasil de 1946 — Câmara dos Deputados, republicação",
        "url": "https://www2.camara.leg.br/legin/fed/consti/1940-1949/constituicao-1946-18-julho-1946-365199-republicacao-1-pl.html",
        "locator": "Article 141;Articles 206–215",
        "statement": "Rights protect expression, privacy, association and judicial remedies; states of siege permit censorship, detention and restrictions under specified controls.",
        "basis": "norm",
        "publishedDate": "Promulgated 1946-09-18; DOU original 1946-09-19; republications 1946-09-25 and 1946-10-15 listed",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "General liberties, due process and exceptional security powers are read as a single framework.",
        "counterEvidence": "Entertainment censorship, party prohibition and habeas disciplinary exception remain.",
        "uncertainty": "Norm is not proof that constitutional safeguards always operated.",
        "retrievalMode": "direct",
        "actualReadScope": "Direct full HTML download; actual text read Articles 1–33,37–40,56–63,129–175,176–181,196,206–217 and source publication footer.",
        "applicablePeriod": "Original 1946 text",
        "evidenceFormat": "bounded paraphrase in statement"
      },
      {
        "id": "br-pod-practice-counter",
        "axis": "pod",
        "sourceId": "br-tse-pcb",
        "sourceTitle": "Cancelamento de registro do Partido Comunista Brasileiro — Tribunal Superior Eleitoral",
        "url": "https://www.tse.jus.br/jurisprudencia/julgados-historicos/cancelamento-de-registro-do-partido-comunista-brasileiro",
        "locator": "Cancellation, closure and mandate-loss narrative",
        "statement": "After PCB’s 1947 cancellation, Justice Ministry closed party premises; parliamentary exclusion followed.",
        "basis": "practice",
        "publishedDate": "undated institutional retrospective; notes cite access 2008-08-01, not a publication date",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Concrete institutional coercion qualifies an otherwise liberty-oriented legal reading.",
        "counterEvidence": "Judicial dissent and later review existed.",
        "uncertainty": "Narrow episode supplies counterevidence; not the complete repression history of 1946–1964.",
        "retrievalMode": "direct",
        "actualReadScope": "Full historical narrative from Antecedentes through A extinção dos mandatos eletivos and notes. Linked judgment scans not read.",
        "applicablePeriod": "1947–1948",
        "evidenceFormat": "bounded paraphrase in statement"
      },
      {
        "id": "br-dip-norm",
        "axis": "dip",
        "sourceId": "br-constitution",
        "sourceTitle": "Constituição dos Estados Unidos do Brasil de 1946 — Câmara dos Deputados, republicação",
        "url": "https://www2.camara.leg.br/legin/fed/consti/1940-1949/constituicao-1946-18-julho-1946-365199-republicacao-1-pl.html",
        "locator": "Article 4;5II–VI;176–181",
        "statement": "War follows failed peaceful settlement; conquest is forbidden, while armed defence and compulsory service remain.",
        "basis": "norm",
        "publishedDate": "Promulgated 1946-09-18; DOU original 1946-09-19; republications 1946-09-25 and 1946-10-15 listed",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "General rule governing external conflict, read with military institutions and duties.",
        "counterEvidence": "This is not absolute pacifism or demilitarization.",
        "uncertainty": "A rule of resort to war does not prove all diplomatic behavior.",
        "retrievalMode": "direct",
        "actualReadScope": "Direct full HTML download; actual text read Articles 1–33,37–40,56–63,129–175,176–181,196,206–217 and source publication footer.",
        "applicablePeriod": "Original 1946 text",
        "evidenceFormat": "bounded paraphrase in statement"
      },
      {
        "id": "br-dip-practice",
        "axis": "dip",
        "sourceId": "br-unef",
        "sourceTitle": "First United Nations Emergency Force (UNEF I) — Background, full text — United Nations Peacekeeping",
        "url": "https://peacekeeping.un.org/sites/default/files/past/unef1backgr2.html",
        "locator": "UNEF composition and early deployment",
        "statement": "Brazilian troops arrived byFebruary 1957 for a UN force supporting ceasefire and withdrawal on consenting Egyptian territory.",
        "basis": "practice",
        "publishedDate": "undated UN historical account",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Dated multilateral peace-maintenance practice is compatible with bounded peaceful-settlement norms.",
        "counterEvidence": "It used armed personnel; peacekeeping is not military abstention.",
        "uncertainty": "Indexed body; one mission cannot characterize all foreign policy or extend beyond the political cutoff.",
        "retrievalMode": "indexed",
        "actualReadScope": "Indexed text: UNEF composition, Brazilian battalion arrival by February 1957, consent/deployment narrative and operation phases. Direct web open failed.",
        "applicablePeriod": "February 1957 and operation before 31 March 1964",
        "evidenceFormat": "bounded paraphrase in statement"
      },
      {
        "id": "br-rel-norm",
        "axis": "rel",
        "sourceId": "br-constitution",
        "sourceTitle": "Constituição dos Estados Unidos do Brasil de 1946 — Câmara dos Deputados, republicação",
        "url": "https://www2.camara.leg.br/legin/fed/consti/1940-1949/constituicao-1946-18-julho-1946-365199-republicacao-1-pl.html",
        "locator": "Articles 31II–III/Vb;141§§7–10;163;168V;181§2;196",
        "statement": "No state-established or subsidized cults; religious liberty coexists with optional religious education, chaplaincy, tax exemption and church cooperation.",
        "basis": "norm",
        "publishedDate": "Promulgated 1946-09-18; DOU original 1946-09-19; republications 1946-09-25 and 1946-10-15 listed",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Directly covers institutional separation and exceptions across public life.",
        "counterEvidence": "Catholic diplomatic representation and religious-marriage recognition remain.",
        "uncertainty": "No current secularism index or empirical religious-neutrality claim.",
        "retrievalMode": "direct",
        "actualReadScope": "Direct full HTML download; actual text read Articles 1–33,37–40,56–63,129–175,176–181,196,206–217 and source publication footer.",
        "applicablePeriod": "Original 1946 text",
        "evidenceFormat": "bounded paraphrase in statement"
      },
      {
        "id": "br-con-norm",
        "axis": "con",
        "sourceId": "br-constitution",
        "sourceTitle": "Constituição dos Estados Unidos do Brasil de 1946 — Câmara dos Deputados, republicação",
        "url": "https://www2.camara.leg.br/legin/fed/consti/1940-1949/constituicao-1946-18-julho-1946-365199-republicacao-1-pl.html",
        "locator": "Whole Title V Articles 145–162, especially145–151;5IX–XV",
        "statement": "Economic order combines private initiative with social-property duties, authorized intervention/monopoly, anti-abuse rules, financial regulation and concession-tariff oversight.",
        "basis": "norm",
        "publishedDate": "Promulgated 1946-09-18; DOU original 1946-09-19; republications 1946-09-25 and 1946-10-15 listed",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "General economic-order chapter plus cross-sector mechanisms is substantially broader than an agency mandate.",
        "counterEvidence": "Intervention requires special law/public interest and fundamental-rights limits; free initiative is expressly preserved.",
        "uncertainty": "Enabling powers do not establish how extensively used; original norm alone should not become a measure of allocation.",
        "retrievalMode": "direct",
        "actualReadScope": "Direct full HTML download; actual text read Articles 1–33,37–40,56–63,129–175,176–181,196,206–217 and source publication footer.",
        "applicablePeriod": "Original 1946 text",
        "evidenceFormat": "bounded paraphrase in statement"
      },
      {
        "id": "br-con-practice",
        "axis": "con",
        "sourceId": "br-bndes",
        "sourceTitle": "Apoio à infraestrutura nas origens do Banco — BNDES",
        "url": "https://blogdodesenvolvimento.bndes.gov.br/categoria/economia-e-desenvolvimento/Apoio-a-infraestrutura-nas-origens-do-Banco/",
        "locator": "1951–1953 commission and bank; funded projects;Plano de Metas",
        "statement": "National development plans coordinated infrastructure and industrial investment through public financing across energy, transport and industry during the 1950s.",
        "basis": "practice",
        "publishedDate": "2019-03-07; updated 2025-09-15",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Multisector implemented planning, paired with the general economic-order norm, supports a mixed-coordination candidate.",
        "counterEvidence": "Plans aimed to increase public/private and domestic/foreign investment; financing recipients does not nationalize them.",
        "uncertainty": "Institutional retrospective of 1950s only, not uniform control throughout 1946–1964.",
        "retrievalMode": "direct",
        "actualReadScope": "Complete article body:1951–1953 planning/commission/bank, first funded projects,1950s sectoral credit and Plano de Metas section.",
        "applicablePeriod": "1951–1960",
        "evidenceFormat": "bounded paraphrase in statement"
      },
      {
        "id": "br-eco-norm",
        "axis": "eco",
        "sourceId": "br-constitution",
        "sourceTitle": "Constituição dos Estados Unidos do Brasil de 1946 — Câmara dos Deputados, republicação",
        "url": "https://www2.camara.leg.br/legin/fed/consti/1940-1949/constituicao-1946-18-julho-1946-365199-republicacao-1-pl.html",
        "locator": "Articles 141§16;145–153;157;167–171",
        "statement": "Private property and initiative coexist with permitted public monopolies, public services and mixed public/private educational provision.",
        "basis": "norm",
        "publishedDate": "Promulgated 1946-09-18; DOU original 1946-09-19; republications 1946-09-25 and 1946-10-15 listed",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Broad mixed legal order spans production, infrastructure and services.",
        "counterEvidence": "Private concessionaires and private schools are expressly admitted.",
        "uncertainty": "No ownership shares or predominance for the entire period; hold directional ECO.",
        "retrievalMode": "direct",
        "actualReadScope": "Direct full HTML download; actual text read Articles 1–33,37–40,56–63,129–175,176–181,196,206–217 and source publication footer.",
        "applicablePeriod": "Original 1946 text",
        "evidenceFormat": "bounded paraphrase in statement"
      }
    ],
    "axisReview": [
      {
        "axis": "est",
        "prior": true,
        "finding": "General federal norm corroborated; empirical autonomy remains incompletely audited."
      },
      {
        "axis": "rep",
        "prior": true,
        "finding": "Norm and repeated elections supported; add 1947–1948 PCB exclusion and 1961–1963 system change."
      },
      {
        "axis": "pod",
        "prior": true,
        "finding": "Norm corroborated; add actual party closure as material counterevidence; practice coverage remains partial."
      },
      {
        "axis": "dip",
        "prior": true,
        "finding": "Norm corroborated with a dated multilateral peacekeeping example, without claiming full conduct audit."
      },
      {
        "axis": "rel",
        "prior": true,
        "finding": "Institutional separation and exceptions corroborated; practice remains underdocumented."
      },
      {
        "axis": "con",
        "prior": false,
        "finding": "Strongest new candidate: whole economic-order text plus dated multisector development planning, with private initiative counterweight."
      },
      {
        "axis": "eco",
        "prior": false,
        "finding": "Mixed ownership/provision legal framework located; predominance not established."
      }
    ],
    "heldGaps": [
      {
        "axis": "imi",
        "reason": "Articles 129,142–143,162 and national-language schooling provide fragments; need immigration laws and cultural integration practice for 1946–1964."
      },
      {
        "axis": "int",
        "reason": "No whole-period external-involvement assessment; peaceful war rule is DIP, not automaticallyINT."
      },
      {
        "axis": "eco",
        "reason": "Constitution supports mixed provision but no general ownership/service inventory or period-wide predominance."
      },
      {
        "axis": "com",
        "reason": "National cabotage and development financing do not establish overall protectionism; tariffs, exchange controls and trade agreements need primary period evidence."
      },
      {
        "axis": "mor",
        "reason": "Indissoluble marriage, labour protections and social rules are incomplete and changed during the period; no whole moral score from Article 163."
      },
      {
        "axis": "tec",
        "reason": "Science/research promotion and natural-monument protection do not resolve technological enhancement versus biological/environmental caution."
      }
    ],
    "conclusion": "CON merits new review; legal mixed-economy evidence does not license an ownership score. Existing normative fields remain qualified by incomplete practice and concrete restrictions.",
    "priorHashVerified": true,
    "priorHashAlgorithm": "SHA-256 of UTF-8 compact JSON preserving input key order",
    "newScoresAssigned": false,
    "allTwelveAxesAudited": true,
    "axisAudit": [
      {
        "axis": "est",
        "wasPreviouslyCoded": true,
        "status": "prior-reviewed-with-qualifications",
        "claimIds": [
          "br-est-norm"
        ],
        "assessment": "General federal norm corroborated; empirical autonomy remains incompletely audited.",
        "heldGap": "See claim-level uncertainty; independent root judgment required.",
        "noScoreAssigned": true
      },
      {
        "axis": "rep",
        "wasPreviouslyCoded": true,
        "status": "prior-reviewed-with-qualifications",
        "claimIds": [
          "br-rep-norm",
          "br-rep-practice",
          "br-rep-pod-counter"
        ],
        "assessment": "Norm and repeated elections supported; add 1947–1948 PCB exclusion and 1961–1963 system change.",
        "heldGap": "See claim-level uncertainty; independent root judgment required.",
        "noScoreAssigned": true
      },
      {
        "axis": "pod",
        "wasPreviouslyCoded": true,
        "status": "prior-reviewed-with-qualifications",
        "claimIds": [
          "br-pod-norm",
          "br-pod-practice-counter"
        ],
        "assessment": "Norm corroborated; add actual party closure as material counterevidence; practice coverage remains partial.",
        "heldGap": "See claim-level uncertainty; independent root judgment required.",
        "noScoreAssigned": true
      },
      {
        "axis": "imi",
        "wasPreviouslyCoded": false,
        "status": "held-unknown-or-incomplete",
        "claimIds": [],
        "assessment": "Articles 129,142–143,162 and national-language schooling provide fragments; need immigration laws and cultural integration practice for 1946–1964.",
        "heldGap": "Articles 129,142–143,162 and national-language schooling provide fragments; need immigration laws and cultural integration practice for 1946–1964.",
        "noScoreAssigned": true
      },
      {
        "axis": "dip",
        "wasPreviouslyCoded": true,
        "status": "prior-reviewed-with-qualifications",
        "claimIds": [
          "br-dip-norm",
          "br-dip-practice"
        ],
        "assessment": "Norm corroborated with a dated multilateral peacekeeping example, without claiming full conduct audit.",
        "heldGap": "See claim-level uncertainty; independent root judgment required.",
        "noScoreAssigned": true
      },
      {
        "axis": "int",
        "wasPreviouslyCoded": false,
        "status": "held-unknown-or-incomplete",
        "claimIds": [],
        "assessment": "No whole-period external-involvement assessment; peaceful war rule is DIP, not automaticallyINT.",
        "heldGap": "No whole-period external-involvement assessment; peaceful war rule is DIP, not automaticallyINT.",
        "noScoreAssigned": true
      },
      {
        "axis": "eco",
        "wasPreviouslyCoded": false,
        "status": "held-unknown-or-incomplete",
        "claimIds": [
          "br-eco-norm"
        ],
        "assessment": "Mixed ownership/provision legal framework located; predominance not established.",
        "heldGap": "Constitution supports mixed provision but no general ownership/service inventory or period-wide predominance.",
        "noScoreAssigned": true
      },
      {
        "axis": "con",
        "wasPreviouslyCoded": false,
        "status": "bounded-candidate-for-root-review",
        "claimIds": [
          "br-con-norm",
          "br-con-practice"
        ],
        "assessment": "Strongest new candidate: whole economic-order text plus dated multisector development planning, with private initiative counterweight.",
        "heldGap": "See claim-level uncertainty; independent root judgment required.",
        "noScoreAssigned": true
      },
      {
        "axis": "com",
        "wasPreviouslyCoded": false,
        "status": "held-unknown-or-incomplete",
        "claimIds": [],
        "assessment": "National cabotage and development financing do not establish overall protectionism; tariffs, exchange controls and trade agreements need primary period evidence.",
        "heldGap": "National cabotage and development financing do not establish overall protectionism; tariffs, exchange controls and trade agreements need primary period evidence.",
        "noScoreAssigned": true
      },
      {
        "axis": "rel",
        "wasPreviouslyCoded": true,
        "status": "prior-reviewed-with-qualifications",
        "claimIds": [
          "br-rel-norm"
        ],
        "assessment": "Institutional separation and exceptions corroborated; practice remains underdocumented.",
        "heldGap": "See claim-level uncertainty; independent root judgment required.",
        "noScoreAssigned": true
      },
      {
        "axis": "mor",
        "wasPreviouslyCoded": false,
        "status": "held-unknown-or-incomplete",
        "claimIds": [],
        "assessment": "Indissoluble marriage, labour protections and social rules are incomplete and changed during the period; no whole moral score from Article 163.",
        "heldGap": "Indissoluble marriage, labour protections and social rules are incomplete and changed during the period; no whole moral score from Article 163.",
        "noScoreAssigned": true
      },
      {
        "axis": "tec",
        "wasPreviouslyCoded": false,
        "status": "held-unknown-or-incomplete",
        "claimIds": [],
        "assessment": "Science/research promotion and natural-monument protection do not resolve technological enhancement versus biological/environmental caution.",
        "heldGap": "Science/research promotion and natural-monument protection do not resolve technological enhancement versus biological/environmental caution.",
        "noScoreAssigned": true
      }
    ]
  },
  {
    "id": "uruguay-dual-executive-order-1919",
    "name": "Uruguai — ordem do Executivo compartilhado",
    "priorWholeRecord": {
      "id": "uruguay-dual-executive-order-1919",
      "name": "Uruguai — ordem do Executivo compartilhado",
      "aliases": [
        "Uruguai — Conselho Nacional de Administração1919–1933"
      ],
      "period": "1março1919–ruptura31março1933; recorte normativo original plebiscitado25novembro1917",
      "rationale": "Presidência e Conselho compartilham Executivo; golpe dissolve Conselho e parlamento. Estrutura efetiva distingue este recorte da primeira ordem1830, sem criar país por emenda.",
      "caveats": "Norma não é auditoria integral da prática1919–1933. Sufrágio feminino depende de lei especial10 e primeiro Executivo é escolhido parlamentarmente pelas disposiçõesD/E; não sufrágio universal imediato. Administração de serviços públicos100 e liberdade industrial171 não determinam propriedade predominante em toda economia; eco desconhecido. Autonomia local não foi convertida automaticamente em federalismo.",
      "sources": [
        {
          "title": "Constituição uruguaia1918 — transcrição parlamentar, vigência1919",
          "url": "https://biblioteca.parlamento.gub.uy/File/biblioteca/Constituciones/1917/1917%20Constitucion%20-%20OCR.pdf",
          "note": "Fonte primária em transcrição/OCR parlamentar8páginas efetivamente lida:5–12,19/26–27,70–82,97–100,130–145,146–173,transitóriasA–I. Cotejo de passagens com Cervantes; não scan original completo."
        },
        {
          "title": "Constitución de1918 — Biblioteca Cervantes",
          "url": "https://www.cervantesvirtual.com/obra-visor/constitucion-de-1918/html/ede0ff47-9171-4208-988f-ff320585a241_2.html",
          "note": "Texto primário republicado realmente aberto e passagens relevantes recuperadas em corpo indexado. Cabeçalho1918 com plebiscito25novembro1917; transitóriaA fixa início1março1919."
        },
        {
          "title": "1933: golpe e intervenção da Corte Electoral — Corte Electoral",
          "url": "https://www.gub.uy/corte-electoral/comunicacion/publicaciones/1933-golpe-estado-intervencion-corte-electoral",
          "note": "Corpo institucional17junho2024 realmente lido:31março1933 decreto dissolve Assembleia e Conselho; retrospectiva institucional baseada em pesquisa, não leitura do decreto original."
        }
      ],
      "kind": "country",
      "category": "historical-country",
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
        "rel": 60,
        "mor": 50,
        "tec": 50
      },
      "evidence": {
        "rep": "medium",
        "pod": "medium",
        "rel": "medium",
        "imi": "medium"
      },
      "axisEvidence": {
        "rep": {
          "sourceTitles": [
            "Constituição uruguaia1918 — transcrição parlamentar, vigência1919"
          ],
          "rationale": "Representação competitiva especificada sustenta desenho democrático moderado. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Voto feminino depende de autorização10; suspensões12, Senado indireto27 e primeira eleição parlamentarD/E. Não prática eleitoral integral."
        },
        "pod": {
          "sourceTitles": [
            "Constituição uruguaia1918 — transcrição parlamentar, vigência1919"
          ],
          "rationale": "Garantias gerais/processuais sustentam liberdade normativa moderada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Prisão154 é de cidadãos, com flagrante/semiplena prova e ordem; direitos146 incluem habitantes. Medidas urgentes79(19) requerem relatório24h e controle Assembleia/Comissão; não ausência de repressão observada."
        },
        "rel": {
          "sourceTitles": [
            "Constituição uruguaia1918 — transcrição parlamentar, vigência1919"
          ],
          "rationale": "Ausência de religião sustentada pelo Estado e pluralidade de cultos sustentam secularismo moderado. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Patrimônio católico e isenção de templos são contrapontos; não hostilidade religiosa ou ausência de toda cooperação estatal."
        },
        "imi": {
          "sourceTitles": [
            "Constituição uruguaia1918 — transcrição parlamentar, vigência1919"
          ],
          "rationale": "Entrada e residência admitidas por norma geral sustentam dimensão de abertura migratória moderada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Leis de polícia e direitos de terceiros172 limitam ingresso; cidadania8 exige profissão/capital e residência. Não se infere igualdade cultural irrestrita ou prática de acolhimento."
        }
      },
      "coding": {
        "rep": {
          "axis": "rep",
          "position": "moderate-first",
          "confidence": "medium",
          "claims": [
            {
              "sourceTitle": "Constituição uruguaia1918 — transcrição parlamentar, vigência1919",
              "locator": "Arts.9–12,19,26–27,70–82; transitóriasD/E",
              "statement": "Voto secreto/proporcional e representantes eleitos; Presidente e Conselho em regra eleitos diretamente, com participação minoritária no Conselho.",
              "basis": "norm",
              "publishedDate": "1917-11-25",
              "accessedDate": "2026-10-08"
            }
          ],
          "rationale": "Representação competitiva especificada sustenta desenho democrático moderado.",
          "uncertainty": "Voto feminino depende de autorização10; suspensões12, Senado indireto27 e primeira eleição parlamentarD/E. Não prática eleitoral integral.",
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
              "sourceTitle": "Constituição uruguaia1918 — transcrição parlamentar, vigência1919",
              "locator": "Arts.146–168; contrapontos79(19),80,154,168",
              "statement": "Carta protege processo, defesa, habeas corpus, privacidade e expressão sem censura prévia; urgência e suspensão têm controle parlamentar e limites.",
              "basis": "norm",
              "publishedDate": "1917-11-25",
              "accessedDate": "2026-10-08"
            }
          ],
          "rationale": "Garantias gerais/processuais sustentam liberdade normativa moderada.",
          "uncertainty": "Prisão154 é de cidadãos, com flagrante/semiplena prova e ordem; direitos146 incluem habitantes. Medidas urgentes79(19) requerem relatório24h e controle Assembleia/Comissão; não ausência de repressão observada.",
          "reviewedOn": "2026-10-08",
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
          "claims": [
            {
              "sourceTitle": "Constituição uruguaia1918 — transcrição parlamentar, vigência1919",
              "locator": "Art.5",
              "statement": "Estado não sustenta religião e cultos são livres; reconhece templos católicos antes financiados e isenta templos religiosos de impostos.",
              "basis": "norm",
              "publishedDate": "1917-11-25",
              "accessedDate": "2026-10-08"
            }
          ],
          "rationale": "Ausência de religião sustentada pelo Estado e pluralidade de cultos sustentam secularismo moderado.",
          "uncertainty": "Patrimônio católico e isenção de templos são contrapontos; não hostilidade religiosa ou ausência de toda cooperação estatal.",
          "reviewedOn": "2026-10-08",
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
          "relatedQuestionIds": [
            "imigracao_18"
          ],
          "rationale": "Entrada e residência admitidas por norma geral sustentam dimensão de abertura migratória moderada.",
          "uncertainty": "Leis de polícia e direitos de terceiros172 limitam ingresso; cidadania8 exige profissão/capital e residência. Não se infere igualdade cultural irrestrita ou prática de acolhimento.",
          "claims": [
            {
              "sourceTitle": "Constituição uruguaia1918 — transcrição parlamentar, vigência1919",
              "locator": "Art.172; contraponto8",
              "statement": "Carta permite entrada, permanência e saída de toda pessoa, observadas leis de polícia e direitos de terceiros; cidadania tem requisitos distintos.",
              "basis": "norm",
              "publishedDate": "1917-11-25",
              "accessedDate": "2026-10-08"
            }
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
      "documentaryReview": {
        "status": "author-reviewed-bounded-claims",
        "reviewedOn": "2026-10-08",
        "independentReview": "accepted-bounded-primary-and-identity",
        "scope": "Passagens primárias parlamentares e cronologia institucional cotejadas independentemente; prática histórica integral não auditada."
      },
      "unknownAxisReasons": {
        "est": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
        "dip": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
        "int": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
        "eco": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
        "con": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
        "com": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
        "mor": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
        "tec": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação."
      }
    },
    "priorWholeRecordSha256": "781c3984810441f26bb552396986f88c0860c83f27815acf530c169c40d06015",
    "priorHashVerified": true,
    "priorHashAlgorithm": "SHA-256 of UTF-8 JSON preserving input object key order, ensure_ascii=False, compact separators",
    "priorDocumentedAxes": [
      "rep",
      "pod",
      "imi",
      "rel"
    ],
    "priorAuditObjects": [
      {
        "axis": "rep",
        "scope": "Prior editorial coding only; not freshly read or recertified for this handoff",
        "coding": {
          "axis": "rep",
          "position": "moderate-first",
          "confidence": "medium",
          "claims": [
            {
              "sourceTitle": "Constituição uruguaia1918 — transcrição parlamentar, vigência1919",
              "locator": "Arts.9–12,19,26–27,70–82; transitóriasD/E",
              "statement": "Voto secreto/proporcional e representantes eleitos; Presidente e Conselho em regra eleitos diretamente, com participação minoritária no Conselho.",
              "basis": "norm",
              "publishedDate": "1917-11-25",
              "accessedDate": "2026-10-08"
            }
          ],
          "rationale": "Representação competitiva especificada sustenta desenho democrático moderado.",
          "uncertainty": "Voto feminino depende de autorização10; suspensões12, Senado indireto27 e primeira eleição parlamentarD/E. Não prática eleitoral integral.",
          "reviewedOn": "2026-10-08",
          "version": "editorial-ordinal-v1",
          "value": 60,
          "range": [
            55,
            70
          ]
        },
        "axisEvidence": {
          "sourceTitles": [
            "Constituição uruguaia1918 — transcrição parlamentar, vigência1919"
          ],
          "rationale": "Representação competitiva especificada sustenta desenho democrático moderado. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Voto feminino depende de autorização10; suspensões12, Senado indireto27 e primeira eleição parlamentarD/E. Não prática eleitoral integral."
        },
        "evidence": "medium"
      },
      {
        "axis": "pod",
        "scope": "Prior editorial coding only; not freshly read or recertified for this handoff",
        "coding": {
          "axis": "pod",
          "position": "moderate-second",
          "confidence": "medium",
          "claims": [
            {
              "sourceTitle": "Constituição uruguaia1918 — transcrição parlamentar, vigência1919",
              "locator": "Arts.146–168; contrapontos79(19),80,154,168",
              "statement": "Carta protege processo, defesa, habeas corpus, privacidade e expressão sem censura prévia; urgência e suspensão têm controle parlamentar e limites.",
              "basis": "norm",
              "publishedDate": "1917-11-25",
              "accessedDate": "2026-10-08"
            }
          ],
          "rationale": "Garantias gerais/processuais sustentam liberdade normativa moderada.",
          "uncertainty": "Prisão154 é de cidadãos, com flagrante/semiplena prova e ordem; direitos146 incluem habitantes. Medidas urgentes79(19) requerem relatório24h e controle Assembleia/Comissão; não ausência de repressão observada.",
          "reviewedOn": "2026-10-08",
          "version": "editorial-ordinal-v1",
          "value": 40,
          "range": [
            30,
            45
          ]
        },
        "axisEvidence": {
          "sourceTitles": [
            "Constituição uruguaia1918 — transcrição parlamentar, vigência1919"
          ],
          "rationale": "Garantias gerais/processuais sustentam liberdade normativa moderada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Prisão154 é de cidadãos, com flagrante/semiplena prova e ordem; direitos146 incluem habitantes. Medidas urgentes79(19) requerem relatório24h e controle Assembleia/Comissão; não ausência de repressão observada."
        },
        "evidence": "medium"
      },
      {
        "axis": "imi",
        "scope": "Prior editorial coding only; not freshly read or recertified for this handoff",
        "coding": {
          "axis": "imi",
          "position": "moderate-second",
          "confidence": "medium",
          "relatedQuestionIds": [
            "imigracao_18"
          ],
          "rationale": "Entrada e residência admitidas por norma geral sustentam dimensão de abertura migratória moderada.",
          "uncertainty": "Leis de polícia e direitos de terceiros172 limitam ingresso; cidadania8 exige profissão/capital e residência. Não se infere igualdade cultural irrestrita ou prática de acolhimento.",
          "claims": [
            {
              "sourceTitle": "Constituição uruguaia1918 — transcrição parlamentar, vigência1919",
              "locator": "Art.172; contraponto8",
              "statement": "Carta permite entrada, permanência e saída de toda pessoa, observadas leis de polícia e direitos de terceiros; cidadania tem requisitos distintos.",
              "basis": "norm",
              "publishedDate": "1917-11-25",
              "accessedDate": "2026-10-08"
            }
          ],
          "reviewedOn": "2026-10-08",
          "version": "editorial-ordinal-v1",
          "value": 40,
          "range": [
            30,
            45
          ]
        },
        "axisEvidence": {
          "sourceTitles": [
            "Constituição uruguaia1918 — transcrição parlamentar, vigência1919"
          ],
          "rationale": "Entrada e residência admitidas por norma geral sustentam dimensão de abertura migratória moderada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Leis de polícia e direitos de terceiros172 limitam ingresso; cidadania8 exige profissão/capital e residência. Não se infere igualdade cultural irrestrita ou prática de acolhimento."
        },
        "evidence": "medium"
      },
      {
        "axis": "rel",
        "scope": "Prior editorial coding only; not freshly read or recertified for this handoff",
        "coding": {
          "axis": "rel",
          "position": "moderate-first",
          "confidence": "medium",
          "claims": [
            {
              "sourceTitle": "Constituição uruguaia1918 — transcrição parlamentar, vigência1919",
              "locator": "Art.5",
              "statement": "Estado não sustenta religião e cultos são livres; reconhece templos católicos antes financiados e isenta templos religiosos de impostos.",
              "basis": "norm",
              "publishedDate": "1917-11-25",
              "accessedDate": "2026-10-08"
            }
          ],
          "rationale": "Ausência de religião sustentada pelo Estado e pluralidade de cultos sustentam secularismo moderado.",
          "uncertainty": "Patrimônio católico e isenção de templos são contrapontos; não hostilidade religiosa ou ausência de toda cooperação estatal.",
          "reviewedOn": "2026-10-08",
          "version": "editorial-ordinal-v1",
          "value": 60,
          "range": [
            55,
            70
          ]
        },
        "axisEvidence": {
          "sourceTitles": [
            "Constituição uruguaia1918 — transcrição parlamentar, vigência1919"
          ],
          "rationale": "Ausência de religião sustentada pelo Estado e pluralidade de cultos sustentam secularismo moderado. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Patrimônio católico e isenção de templos são contrapontos; não hostilidade religiosa ou ausência de toda cooperação estatal."
        },
        "evidence": "medium"
      }
    ],
    "allTwelveAxesAudited": true,
    "axisAudit": [
      {
        "axis": "est",
        "wasPreviouslyCoded": false,
        "status": "new-whole-construct-candidate",
        "claimIds": [
          "uy-est-norm",
          "uy-est-implementation-law",
          "uy-est-practice"
        ],
        "assessment": "Broad structural coverage now exists, supporting review of decentralized unitary institutions. Local autonomy is not equated to federal sovereignty.",
        "heldGap": "A complete national practice audit and precise editorial ordinal remain for independent review.",
        "noScoreAssigned": true
      },
      {
        "axis": "rep",
        "wasPreviouslyCoded": true,
        "status": "prior-supported-with-temporal-corrections",
        "claimIds": [
          "uy-rep-norm",
          "uy-rep-women",
          "uy-rep-practice",
          "uy-rep-rupture"
        ],
        "assessment": "Electoral/plural institutional construction supported. Add late-1932 female enfranchisement and dated implementation/rupture; retain original initial-parliamentary-election limits.",
        "heldGap": "Not all elections or political participation across the period independently audited.",
        "noScoreAssigned": true
      },
      {
        "axis": "pod",
        "wasPreviouslyCoded": true,
        "status": "prior-supported-as-norm-practice-gap-held",
        "claimIds": [
          "uy-pod-norm"
        ],
        "assessment": "Broad rights/emergency framework is real, with all major exceptions preserved.",
        "heldGap": "No adequate in-period rights-enforcement or repression series freshly read; do not silently convert the normative direction into comprehensive observed practice.",
        "noScoreAssigned": true
      },
      {
        "axis": "imi",
        "wasPreviouslyCoded": true,
        "status": "prior-not-recertified-for-whole-construct",
        "claimIds": [
          "uy-imi-norm",
          "uy-imi-restrictions",
          "uy-rep-practice"
        ],
        "assessment": "Prior entry-liberty claim is accurate but insufficient for assimilation–multiculture; 1932 restrictive law is material counterevidence.",
        "heldGap": "Hold general-axis certification pending cultural integration/minority and immigration implementation evidence. Preserve prior objects for root revision; do not overwrite a score here.",
        "noScoreAssigned": true
      },
      {
        "axis": "dip",
        "wasPreviouslyCoded": false,
        "status": "new-whole-construct-candidate",
        "claimIds": [
          "uy-dip-norm",
          "uy-dip-treaty-norm",
          "uy-dip-treaty-practice",
          "uy-dip-multilateral-limit"
        ],
        "assessment": "General arbitration-first rule and dated treaty ratification support diplomacy-oriented candidate coverage. No claim of disarmament or universally binding 1929 multilateral treaty.",
        "heldGap": "Military/diplomatic practice is not exhaustively audited; exact editorial strength remains for root.",
        "noScoreAssigned": true
      },
      {
        "axis": "int",
        "wasPreviouslyCoded": false,
        "status": "held-unknown",
        "claimIds": [],
        "assessment": "Independence declaration, treaty participation and arbitration do not resolve the application’s distinct non-interventionist–nationalist construct.",
        "heldGap": "Need a period-bounded broad external-engagement/non-intervention policy and actual involvement; do not reuse DIP automatically.",
        "noScoreAssigned": true
      },
      {
        "axis": "eco",
        "wasPreviouslyCoded": false,
        "status": "new-cross-sector-candidate-not-certified",
        "claimIds": [
          "uy-eco-constitution",
          "uy-eco-brou",
          "uy-eco-ute",
          "uy-eco-ancap-law",
          "uy-eco-ancap-practice"
        ],
        "assessment": "Public banking, electricity/telephones and late-period alcohol enterprise are verified across several sectors, alongside private-property/economic freedom. This is stronger than an agency or finance inference.",
        "heldGap": "A whole-country public/private balance and stable direction over all 1919–33 remain insufficiently established. Root may consider a bounded mixed-economy candidate; this worker does not certify it as the sixth qualifying axis.",
        "noScoreAssigned": true
      },
      {
        "axis": "con",
        "wasPreviouslyCoded": false,
        "status": "held-unknown-with-sectoral-evidence",
        "claimIds": [
          "uy-con-partial"
        ],
        "assessment": "Sectoral pricing/import regulation exists, but national allocation-system balance not established.",
        "heldGap": "Need broad planning/market evidence with exact pre-March-1933 implementation; do not count ANCAP competence alone.",
        "noScoreAssigned": true
      },
      {
        "axis": "com",
        "wasPreviouslyCoded": false,
        "status": "held-unknown-with-sectoral-evidence",
        "claimIds": [
          "uy-com-partial"
        ],
        "assessment": "One enterprise’s trading rules and constitutional customs competence cannot represent the whole trade regime.",
        "heldGap": "Need period-bounded general tariff/trade integration evidence and effects, distinguishing 1920s from Depression measures.",
        "noScoreAssigned": true
      },
      {
        "axis": "rel",
        "wasPreviouslyCoded": true,
        "status": "prior-supported-with-additional-institutional-law",
        "claimIds": [
          "uy-rel-norm",
          "uy-rel-calendar"
        ],
        "assessment": "State non-establishment, freedom of cult, asset/tax exceptions, civic declarations and dated holiday law provide institutional coverage.",
        "heldGap": "Secular law is not proof of irreligious citizens or absence of all church-state cooperation; updated holiday text is supplementary only.",
        "noScoreAssigned": true
      },
      {
        "axis": "mor",
        "wasPreviouslyCoded": false,
        "status": "held-unknown",
        "claimIds": [],
        "assessment": "Female voting rights and civic holidays are important but neither alone establishes the whole social-customs/traditions construct.",
        "heldGap": "Need broader, same-period family/civil/status/customs evidence and practice; pre-1919 reforms must be verified as continuing before use.",
        "noScoreAssigned": true
      },
      {
        "axis": "tec",
        "wasPreviouslyCoded": false,
        "status": "held-unknown",
        "claimIds": [],
        "assessment": "Electricity plants, industrial research and administrative modernization are technical activity, not a demonstrated general stance against biological/environmental caution.",
        "heldGap": "No broad technology–biology policy prescription with compatible practice was located.",
        "noScoreAssigned": true
      }
    ],
    "sources": [
      {
        "id": "uy-constitution",
        "title": "CONSTITUCION DE LA REPUBLICA — CONSTITUCION 1918 PLEBISCITADA EL 25 DE NOVIEMBRE DE 1917",
        "url": "https://biblioteca.parlamento.gub.uy/File/biblioteca/Constituciones/1917/1917%20Constitucion%20-%20OCR.pdf",
        "publishedDate": "undated",
        "accessedDate": "2026-10-08",
        "edition": "Uruguayan parliamentary-library transcription/OCR, eight PDF pages. Original normative text plebiscited 1917-11-25; transitional A prescribes 1919-03-01 commencement. The online transcription supplies no publication date.",
        "authorship": "Uruguayan parliamentary-library transcription/OCR, eight PDF pages. Original normative text plebiscited 1917-11-25; transitional A prescribes 1919-03-01 commencement. The online transcription supplies no publication date.",
        "translation": "Spanish original unless otherwise stated; paraphrases in this artifact are researcher-written English, not published translations.",
        "retrievalMode": "direct",
        "actualReadScope": "Full eight-page extracted text, articles 1–178 and transitional A–J; particularly articles 5–18, 19–34, 70–100, 115–173 and transitions A–J.",
        "sourceKind": "primary constitution in official modern transcription",
        "note": "Actual read of extracted text, not a claim to have inspected an original 1917 printing. Plebiscite date is not asserted to be the modern edition publication date. Prior Cervantes Uruguay URL returned an internal error in this pass."
      },
      {
        "id": "uy-coup",
        "title": "1933: El golpe de Estado y la intervención de la Corte Electoral",
        "url": "https://www.gub.uy/corte-electoral/comunicacion/publicaciones/1933-golpe-estado-intervencion-corte-electoral",
        "publishedDate": "2024-06-17",
        "accessedDate": "2026-10-08",
        "edition": "Corte Electoral institutional research page, citing J. Garchitorena (2023), La Corte Electoral: 100 años contribuyendo a la democracia en Uruguay.",
        "authorship": "Corte Electoral institutional research page, citing J. Garchitorena (2023), La Corte Electoral: 100 años contribuyendo a la democracia en Uruguay.",
        "translation": "Spanish original unless otherwise stated; paraphrases in this artifact are researcher-written English, not published translations.",
        "retrievalMode": "direct",
        "actualReadScope": "Entire substantive article, paragraphs following the dated heading, including 31 March 1933 dissolution and 22 April 1933 court intervention.",
        "sourceKind": "institutional retrospective; not the original decree",
        "note": ""
      },
      {
        "id": "uy-immigration-1932",
        "title": "Ley N° 8868",
        "url": "https://www.impo.com.uy/bases/leyes-originales/8868-1932",
        "publishedDate": "1932-07-23",
        "accessedDate": "2026-10-08",
        "edition": "IMPO Documento original, Diario Oficial p. 145-A, carilla 1; legislative closing 15 July 1932, final compliance order 19 July 1932. Includes note about earlier suspended publication.",
        "authorship": "IMPO Documento original, Diario Oficial p. 145-A, carilla 1; legislative closing 15 July 1932, final compliance order 19 July 1932. Includes note about earlier suspended publication.",
        "translation": "Spanish original unless otherwise stated; paraphrases in this artifact are researcher-written English, not published translations.",
        "retrievalMode": "direct",
        "actualReadScope": "Complete original-law text articles 1–12, all exceptions, appeal procedure, transitional provisions, signatures and publication note.",
        "sourceKind": "primary original-law republication",
        "note": ""
      },
      {
        "id": "uy-local-law",
        "title": "Ley N° 7042 — LEY ORGANICA DEL GOBIERNO Y ADMINISTRACION LOCAL",
        "url": "https://www.impo.com.uy/bases/leyes/7042-1919",
        "publishedDate": "1919-11-15",
        "accessedDate": "2026-10-08",
        "edition": "IMPO Documento Actualizado; promulgation 13 November 1919; Registro Nacional de Leyes y Decretos 1919, tomo 2, semestre 2, p. 512. The page notes republication as Law 7047 of 23 December 1919 and 1922 validity notes.",
        "authorship": "IMPO Documento Actualizado; promulgation 13 November 1919; Registro Nacional de Leyes y Decretos 1919, tomo 2, semestre 2, p. 512. The page notes republication as Law 7047 of 23 December 1919 and 1922 validity notes.",
        "translation": "Spanish original unless otherwise stated; paraphrases in this artifact are researcher-written English, not published translations.",
        "retrievalMode": "direct",
        "actualReadScope": "Heading and articles 1–53; article 54 only through the returned opening of subsection 23(F). Read includes article 19 taxation/budget/borrowing authority and article 54(1–13,21–22) administrative/service-concession competences; not the rest of this long law.",
        "sourceKind": "primary law in annotated/updated presentation",
        "note": "Original-law route failed. This read is used only as corroboration of constitutional distribution, not certification that every displayed annotation was effective in November 1919. 7047 link opened but its entire text was not read."
      },
      {
        "id": "uy-local-practice",
        "title": "El Heraldo, Maldonado, 26 de febrero de 1920, N.º 188 — Los Concejos Locales",
        "url": "https://bibliotecadigital.bibna.gub.uy/jspui/bitstream/123456789/163391/1/1920-02-26.pdf",
        "publishedDate": "1920-02-26",
        "accessedDate": "2026-10-08",
        "edition": "Contemporary newspaper El Heraldo, Periódico Colorado Independiente, 2.a época, año IV, no. 188; Uruguay National Library digital copy.",
        "authorship": "Contemporary newspaper El Heraldo, Periódico Colorado Independiente, 2.a época, año IV, no. 188; Uruguay National Library digital copy.",
        "translation": "Spanish original unless otherwise stated; paraphrases in this artifact are researcher-written English, not published translations.",
        "retrievalMode": "indexed",
        "actualReadScope": "Search-index body of masthead, Los Concejos Locales and beginning of Inadmisible. The direct PDF open timed out; no full issue or page-image read.",
        "sourceKind": "contemporary partisan newspaper",
        "note": "Indexed text specifically reports the departmental council appointing local councils with two Batllistas, two Nacionalistas and one Riverista; it is partisan contemporary reporting, not a neutral audit or proof of nationwide implementation."
      },
      {
        "id": "uy-arbitration",
        "title": "Tratado de arbitraje amplio entre la República Oriental del Uruguay y la de El Salvador, firmado en Madrid el 7 de noviembre de 1924",
        "url": "https://treaties.un.org/doc/Publication/UNTS/LON/Volume%20108/v108.pdf",
        "publishedDate": "1930",
        "accessedDate": "2026-10-08",
        "edition": "League of Nations Treaty Series, volume CVIII, no. 2502, printed pp. 103–108. Spanish official text communicated by Uruguay foreign minister, registered 21 October 1930.",
        "authorship": "League of Nations Treaty Series, volume CVIII, no. 2502, printed pp. 103–108. Spanish official text communicated by Uruguay foreign minister, registered 21 October 1930.",
        "translation": "Spanish original unless otherwise stated; paraphrases in this artifact are researcher-written English, not published translations.",
        "retrievalMode": "direct",
        "actualReadScope": "Entry title and complete Spanish text articles 1–7 on printed pp. 104–105 (PDF indices 103–104), including footnote confirming exchange of ratifications 25 April 1928; French/English translations pp. 106–108 also returned. Only this treaty, not all 468 PDF pages.",
        "sourceKind": "contemporary official treaty publication",
        "note": "Publication year taken from volume headings, not search crawl metadata. Spanish original is the controlling read; League translations are labeled informational. Screenshot call returned only a reference in this interface, so visual verification is not claimed."
      },
      {
        "id": "uy-oas-signatures",
        "title": "B-5: TRATADO GENERAL DE ARBITRAJE INTERAMERICANO",
        "url": "https://www.oas.org/juridico/spanish/firmas/b-5.html",
        "publishedDate": "undated",
        "accessedDate": "2026-10-08",
        "edition": "OAS Department of International Law treaty-status republication; adoption Washington 5 January 1929.",
        "authorship": "OAS Department of International Law treaty-status republication; adoption Washington 5 January 1929.",
        "translation": "Spanish original unless otherwise stated; paraphrases in this artifact are researcher-written English, not published translations.",
        "retrievalMode": "direct",
        "actualReadScope": "Heading/status table and Uruguay signature/reservation section, lines 315–324; table reports Uruguay signature 01/05/29 with dashes for ratification and deposit.",
        "sourceKind": "official treaty-status record",
        "note": "U.S. month/day format on the table is January 5, consistent with treaty text. This is signature/declaration evidence only; do not claim Uruguayan ratification of this multilateral instrument."
      },
      {
        "id": "uy-ancap-law",
        "title": "Ley N° 8764",
        "url": "https://www.impo.com.uy/bases/leyes-originales/8764-1931",
        "publishedDate": "1931-10-23",
        "accessedDate": "2026-10-08",
        "edition": "IMPO Documento original, Diario Oficial p. 159-A, carilla 3. Promulgated 15 October 1931; signed by the Council.",
        "authorship": "IMPO Documento original, Diario Oficial p. 159-A, carilla 3. Promulgated 15 October 1931; signed by the Council.",
        "translation": "Spanish original unless otherwise stated; paraphrases in this artifact are researcher-written English, not published translations.",
        "retrievalMode": "direct",
        "actualReadScope": "Complete articles 1–12, especially state ownership/monopolies article 1, pricing and import operations article 3, retained distillers article 5, reciprocal foreign purchasing article 9 and mineral ownership articles 10–11.",
        "sourceKind": "primary original-law republication",
        "note": ""
      },
      {
        "id": "uy-ancap-practice",
        "title": "Reseña Histórica",
        "url": "https://www.ancap.com.uy/93/5/resena-historica.html",
        "publishedDate": "undated",
        "accessedDate": "2026-10-08",
        "edition": "ANCAP institutional history, current undated web edition.",
        "authorship": "ANCAP institutional history, current undated web edition.",
        "translation": "Spanish original unless otherwise stated; paraphrases in this artifact are researcher-written English, not published translations.",
        "retrievalMode": "direct",
        "actualReadScope": "Opening history paragraphs through 1937 refinery opening, including alcohol-business commencement in March 1932 and the unqualified-year 1933 entry into refined-fuel sales; later history not used for this profile.",
        "sourceKind": "institutional retrospective with dated operational events",
        "note": "Contains later 1956/1962 cement factories and 1935–37 refinery development. These are expressly outside the profile, not backdated to the 1931 founding law."
      },
      {
        "id": "uy-ute-practice",
        "title": "Reseña Histórica — UTE: UNA LUZ QUE BRILLA DESDE HACE 110 AÑOS",
        "url": "https://www.ute.com.uy/institucional/ute-y-la-sociedad/patrimonio-institucional/resena-historica",
        "publishedDate": "undated",
        "accessedDate": "2026-10-08",
        "edition": "UTE institutional chronological history; page title mentions 110 years but does not expose a publication date.",
        "authorship": "UTE institutional chronological history; page title mentions 110 years but does not expose a publication date.",
        "translation": "Spanish original unless otherwise stated; paraphrases in this artifact are researcher-written English, not published translations.",
        "retrievalMode": "direct",
        "actualReadScope": "Chronological blocks 1910s, 1920s, 1930s and 1940s: creation in 1912, fifteen named 1920s plants, telephones in 1931, 1932 thermal plant, and the out-of-scope 1947 completion of electrical monopoly.",
        "sourceKind": "institutional retrospective with dated operational events",
        "note": "The 1932 acronym-resolution day in this source is not used as decisive evidence. No claim that complete national electricity monopoly existed during 1919–33."
      },
      {
        "id": "uy-brou-practice",
        "title": "Historia del Banco República — La creación del banco",
        "url": "https://www.brou.com.uy/institucional/el-banco/creacion-del-banco",
        "publishedDate": "undated",
        "accessedDate": "2026-10-08",
        "edition": "BROU institutional history, undated web edition.",
        "authorship": "BROU institutional history, undated web edition.",
        "translation": "Spanish original unless otherwise stated; paraphrases in this artifact are researcher-written English, not published translations.",
        "retrievalMode": "direct",
        "actualReadScope": "Substantive historical paragraphs from 1896 founding through 1935 reorganization, specifically complete state ownership in 1911–13 and 1920s credit/currency operations.",
        "sourceKind": "institutional retrospective with dated operational periods",
        "note": "The claim about post-1929 directed economy is not precisely bounded before March 1933; do not import its 1935 reorganization or later selective-credit regime into this record."
      },
      {
        "id": "uy-holidays",
        "title": "Ley N° 6997 — DECLARACION DE FERIADO",
        "url": "https://www.impo.com.uy/bases/leyes/6997-1919",
        "publishedDate": "1919-10-25",
        "accessedDate": "2026-10-08",
        "edition": "IMPO Documento Actualizado, promulgated 23 October 1919; Registro 1919, tomo 2, semestre 2, p. 433.",
        "authorship": "IMPO Documento Actualizado, promulgated 23 October 1919; Registro 1919, tomo 2, semestre 2, p. 433.",
        "translation": "Spanish original unless otherwise stated; paraphrases in this artifact are researcher-written English, not published translations.",
        "retrievalMode": "direct",
        "actualReadScope": "Complete five-article displayed law, including new constitutional regime, secular festival names, day of the dead, Carnival and Semana de Turismo.",
        "sourceKind": "primary law in annotated/updated presentation",
        "note": "No original Diario Oficial image read; online updated edition and article-reference marker disclosed."
      },
      {
        "id": "uy-women-law",
        "title": "Ley N° 8927",
        "url": "https://www.impo.com.uy/bases/leyes-originales/8927-1932",
        "publishedDate": "1932-12-22",
        "accessedDate": "2026-10-08",
        "edition": "IMPO Documento original, Diario Oficial p. 577-A, carilla 1. Promulgation 16 December 1932 corroborated by the IMPO regular-law metadata.",
        "authorship": "IMPO Documento original, Diario Oficial p. 577-A, carilla 1. Promulgation 16 December 1932 corroborated by the IMPO regular-law metadata.",
        "translation": "Spanish original unless otherwise stated; paraphrases in this artifact are researcher-written English, not published translations.",
        "retrievalMode": "direct",
        "actualReadScope": "Title and articles 1–2 in full; first part of article 3 through provisions for voter registration and delegation offices, not the rest of lengthy registration amendments.",
        "sourceKind": "primary original-law republication",
        "note": ""
      },
      {
        "id": "uy-electoral-history",
        "title": "Creación y evolución histórica",
        "url": "https://www.gub.uy/corte-electoral/institucional/creacion-evolucion-historica",
        "publishedDate": "undated",
        "accessedDate": "2026-10-08",
        "edition": "Corte Electoral institutional historical page citing Urruty (2007) and Garchitorena (2023).",
        "authorship": "Corte Electoral institutional historical page citing Urruty (2007) and Garchitorena (2023).",
        "translation": "Spanish original unless otherwise stated; paraphrases in this artifact are researcher-written English, not published translations.",
        "retrievalMode": "direct",
        "actualReadScope": "Creación section and Voto de la mujer section: 1924 institution, 1925 electoral competence, and Cerro Chato vote on 3 July 1927. Current institutional rules and later dictatorship not used.",
        "sourceKind": "institutional retrospective with dated electoral events",
        "note": "Its phrase that female suffrage was approved in 1938 is imprecise: original Law 8927 establishes recognition in 1932. 1938 is not used as the date of statutory enfranchisement."
      }
    ],
    "claims": [
      {
        "id": "uy-est-norm",
        "axis": "est",
        "sourceId": "uy-constitution",
        "sourceTitle": "CONSTITUCION DE LA REPUBLICA — CONSTITUCION 1918 PLEBISCITADA EL 25 DE NOVIEMBRE DE 1917",
        "sourceUrl": "https://biblioteca.parlamento.gub.uy/File/biblioteca/Constituciones/1917/1917%20Constitucion%20-%20OCR.pdf",
        "locator": "Arts. 4, 18(1–3,9), 115–129, 130–145; transitional I",
        "statement": "Sovereignty and general legislation remain national. Elected autonomous departmental assemblies/councils hold taxation, staffing and budget powers; ordinary national laws delimit powers, national legislators hear tax appeals, and police answer to the president.",
        "boundedParaphrase": "Sovereignty and general legislation remain national. Elected autonomous departmental assemblies/councils hold taxation, staffing and budget powers; ordinary national laws delimit powers, national legislators hear tax appeals, and police answer to the president.",
        "basis": "norm",
        "publishedDate": "undated",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "The combined national, judicial, fiscal, local and police design directly spans distribution of territorial power. It supports a decentralized unitary arrangement for editorial review, rather than inferring federalism from the word autonomous.",
        "counterEvidence": "Constitutionally protected local election and taxation are substantive autonomy, not merely local execution of central orders.",
        "uncertainty": "No numerical federal/unitary measure follows. Departmental practice varies and national tax-appeal cases were not audited.",
        "retrievalMode": "direct",
        "actualReadScope": "Full eight-page extracted text, articles 1–178 and transitional A–J; particularly articles 5–18, 19–34, 70–100, 115–173 and transitions A–J.",
        "eventPeriod": "1919-03-01 to 1933-03-30; new local authorities scheduled for 1920-01-01"
      },
      {
        "id": "uy-est-implementation-law",
        "axis": "est",
        "sourceId": "uy-local-law",
        "sourceTitle": "Ley N° 7042 — LEY ORGANICA DEL GOBIERNO Y ADMINISTRACION LOCAL",
        "sourceUrl": "https://www.impo.com.uy/bases/leyes/7042-1919",
        "locator": "Articles 1–4, 19 and 54(1–13,21–22)",
        "statement": "The 1919 organic law operationalizes elected departmental bodies, local tax/budget/borrowing powers, national-law supremacy and Senate appeal of electoral judgments; departmental authorities also grant certain service concessions.",
        "boundedParaphrase": "The 1919 organic law operationalizes elected departmental bodies, local tax/budget/borrowing powers, national-law supremacy and Senate appeal of electoral judgments; departmental authorities also grant certain service concessions.",
        "basis": "norm",
        "publishedDate": "1919-11-15",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "A multi-chapter implementation law corroborates the institutional distribution, rather than an isolated local permission.",
        "counterEvidence": "National legislation and judicial/police competences limit autonomy; 1922 modifications are flagged by IMPO.",
        "uncertainty": "Read in annotated/updated presentation, not original print; only cited provisions used.",
        "retrievalMode": "direct",
        "actualReadScope": "Heading and articles 1–53; article 54 only through the returned opening of subsection 23(F). Read includes article 19 taxation/budget/borrowing authority and article 54(1–13,21–22) administrative/service-concession competences; not the rest of this long law.",
        "eventPeriod": "Promulgated 1919-11-13; subsequent republication/1922 notes separately disclosed"
      },
      {
        "id": "uy-est-practice",
        "axis": "est",
        "sourceId": "uy-local-practice",
        "sourceTitle": "El Heraldo, Maldonado, 26 de febrero de 1920, N.º 188 — Los Concejos Locales",
        "sourceUrl": "https://bibliotecadigital.bibna.gub.uy/jspui/bitstream/123456789/163391/1/1920-02-26.pdf",
        "locator": "Los Concejos Locales, opening paragraph and council composition",
        "statement": "On 26 February 1920 El Heraldo reported that Maldonado departmental councillors had appointed local councils with representation divided among Batllista, Nacionalista and Riverista groups.",
        "boundedParaphrase": "On 26 February 1920 El Heraldo reported that Maldonado departmental councillors had appointed local councils with representation divided among Batllista, Nacionalista and Riverista groups.",
        "basis": "practice",
        "publishedDate": "1920-02-26",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "A dated contemporary instance verifies that the new collegiate local bodies operated. It is corroboration of the constitutional system, not proof of uniform territorial autonomy nationwide.",
        "counterEvidence": "Appointments were made by the departmental council; this is not evidence that these auxiliary local councils were themselves directly elected.",
        "uncertainty": "Indexed passage only; partisan newspaper praises its own faction and reports delay. Direct PDF timed out.",
        "retrievalMode": "indexed",
        "actualReadScope": "Search-index body of masthead, Los Concejos Locales and beginning of Inadmisible. The direct PDF open timed out; no full issue or page-image read.",
        "eventPeriod": "1920-02-26 report about the preceding Saturday"
      },
      {
        "id": "uy-rep-norm",
        "axis": "rep",
        "sourceId": "uy-constitution",
        "sourceTitle": "CONSTITUCION DE LA REPUBLICA — CONSTITUCION 1918 PLEBISCITADA EL 25 DE NOVIEMBRE DE 1917",
        "sourceUrl": "https://biblioteca.parlamento.gub.uy/File/biblioteca/Constituciones/1917/1917%20Constitucion%20-%20OCR.pdf",
        "locator": "Arts. 6–14, 19–34, 70–89, 97; transitional B–H",
        "statement": "The constitution requires secret voting and proportional representation, elected chambers and executive offices, minority seats in the nine-member Council, regular renewal and legislative oversight.",
        "boundedParaphrase": "The constitution requires secret voting and proportional representation, elected chambers and executive offices, minority seats in the nine-member Council, regular renewal and legislative oversight.",
        "basis": "norm",
        "publishedDate": "undated",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Covers citizen eligibility, competitive election design, plurality within the executive and accountability across the central government.",
        "counterEvidence": "Women were not automatically enfranchised; soldiers and other groups faced suspension. Senate election was indirect and the initial president/Council were selected by parliament.",
        "uncertainty": "Normative democracy does not establish clean elections, universal suffrage or stable compliance across 1919–33.",
        "retrievalMode": "direct",
        "actualReadScope": "Full eight-page extracted text, articles 1–178 and transitional A–J; particularly articles 5–18, 19–34, 70–100, 115–173 and transitions A–J.",
        "eventPeriod": "Original constitutional design effective 1919-03-01"
      },
      {
        "id": "uy-rep-women",
        "axis": "rep",
        "sourceId": "uy-women-law",
        "sourceTitle": "Ley N° 8927",
        "sourceUrl": "https://www.impo.com.uy/bases/leyes-originales/8927-1932",
        "locator": "Arts. 1–2; initial registration amendments of art. 3",
        "statement": "Law 8927 recognized women’s active and passive voting rights nationally and municipally and extended electoral law to them late in 1932.",
        "boundedParaphrase": "Law 8927 recognized women’s active and passive voting rights nationally and municipally and extended electoral law to them late in 1932.",
        "basis": "norm",
        "publishedDate": "1932-12-22",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Material amendment to the prior franchise caveat: the original constitution’s contingency was legislatively fulfilled within the final months of the profile.",
        "counterEvidence": "This law alone does not establish a national election with female participation before the March 1933 rupture.",
        "uncertainty": "Do not backdate the December 1932 change to all of 1919–33; the entire registration amendment was not read.",
        "retrievalMode": "direct",
        "actualReadScope": "Title and articles 1–2 in full; first part of article 3 through provisions for voter registration and delegation offices, not the rest of lengthy registration amendments.",
        "eventPeriod": "Recognized 1932-12-16; published 1932-12-22"
      },
      {
        "id": "uy-rep-practice",
        "axis": "rep",
        "sourceId": "uy-electoral-history",
        "sourceTitle": "Creación y evolución histórica",
        "sourceUrl": "https://www.gub.uy/corte-electoral/institucional/creacion-evolucion-historica",
        "locator": "Creación; Evolución Histórica > Voto de la mujer",
        "statement": "The electoral authority’s history records the 1924 court/registry and 1925 election administration, and a 3 July 1927 Cerro Chato local plebiscite admitting voters without distinction of sex or nationality.",
        "boundedParaphrase": "The electoral authority’s history records the 1924 court/registry and 1925 election administration, and a 3 July 1927 Cerro Chato local plebiscite admitting voters without distinction of sex or nationality.",
        "basis": "practice",
        "publishedDate": "undated",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Dated electoral organization and a documented local vote supplement the institutional norm and show plural inclusion could operate.",
        "counterEvidence": "A single local plebiscite cannot establish universal national female or foreigner suffrage.",
        "uncertainty": "Retrospective source, not ballots or complete election returns. Its wording about 1938 approval is corrected by the original 1932 law.",
        "retrievalMode": "direct",
        "actualReadScope": "Creación section and Voto de la mujer section: 1924 institution, 1925 electoral competence, and Cerro Chato vote on 3 July 1927. Current institutional rules and later dictatorship not used.",
        "eventPeriod": "1924–1925 institutional operation; 1927-07-03 local vote"
      },
      {
        "id": "uy-pod-norm",
        "axis": "pod",
        "sourceId": "uy-constitution",
        "sourceTitle": "CONSTITUCION DE LA REPUBLICA — CONSTITUCION 1918 PLEBISCITADA EL 25 DE NOVIEMBRE DE 1917",
        "sourceUrl": "https://biblioteca.parlamento.gub.uy/File/biblioteca/Constituciones/1917/1917%20Constitucion%20-%20OCR.pdf",
        "locator": "Arts. 79(19), 80, 146–173, especially 150–166 and 168",
        "statement": "The constitution protects private conduct, home/correspondence, uncensored expression, judicial process, defence and habeas corpus, forbids death sentences and limits presidential detention and emergency suspension through legislative control.",
        "boundedParaphrase": "The constitution protects private conduct, home/correspondence, uncensored expression, judicial process, defence and habeas corpus, forbids death sentences and limits presidential detention and emergency suspension through legislative control.",
        "basis": "norm",
        "publishedDate": "undated",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "A coordinated rights, policing and emergency framework covers the security–liberty balance broadly.",
        "counterEvidence": "Police-law limitations and emergency detention survive; article 154 uses citizen while other guarantees protect inhabitants.",
        "uncertainty": "No fresh case-series on detention, censorship or emergency compliance was found; only normative direction is recertified.",
        "retrievalMode": "direct",
        "actualReadScope": "Full eight-page extracted text, articles 1–178 and transitional A–J; particularly articles 5–18, 19–34, 70–100, 115–173 and transitions A–J.",
        "eventPeriod": "1919-03-01 to rupture"
      },
      {
        "id": "uy-rep-rupture",
        "axis": "rep",
        "sourceId": "uy-coup",
        "sourceTitle": "1933: El golpe de Estado y la intervención de la Corte Electoral",
        "sourceUrl": "https://www.gub.uy/corte-electoral/comunicacion/publicaciones/1933-golpe-estado-intervencion-corte-electoral",
        "locator": "Dated heading and first three substantive paragraphs",
        "statement": "Terra dissolved the General Assembly and National Administrative Council by decree on 31 March 1933, replacing them with appointed bodies.",
        "boundedParaphrase": "Terra dissolved the General Assembly and National Administrative Council by decree on 31 March 1933, replacing them with appointed bodies.",
        "basis": "practice",
        "publishedDate": "2024-06-17",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Establishes the endpoint of the constitutional executive-sharing order and a material limit on any claim of continuous democratic operation.",
        "counterEvidence": "The overthrow must not be attributed to the earlier constitutional design as its normal mode, nor later appointed bodies included in its score.",
        "uncertainty": "Official retrospective citing a 2023 history; original decree not independently read.",
        "retrievalMode": "direct",
        "actualReadScope": "Entire substantive article, paragraphs following the dated heading, including 31 March 1933 dissolution and 22 April 1933 court intervention.",
        "eventPeriod": "1933-03-31"
      },
      {
        "id": "uy-imi-norm",
        "axis": "imi",
        "sourceId": "uy-constitution",
        "sourceTitle": "CONSTITUCION DE LA REPUBLICA — CONSTITUCION 1918 PLEBISCITADA EL 25 DE NOVIEMBRE DE 1917",
        "sourceUrl": "https://biblioteca.parlamento.gub.uy/File/biblioteca/Constituciones/1917/1917%20Constitucion%20-%20OCR.pdf",
        "locator": "Articles 8, 132, 172",
        "statement": "The constitution allows personal entry, residence and exit subject to police laws, sets residence/economic conditions for legal citizenship and permits ordinary law to extend local voting to foreigners.",
        "boundedParaphrase": "The constitution allows personal entry, residence and exit subject to police laws, sets residence/economic conditions for legal citizenship and permits ordinary law to extend local voting to foreigners.",
        "basis": "norm",
        "publishedDate": "undated",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Addresses migration/access and citizenship but does not establish the complete integration, assimilation or cultural-pluralism construct.",
        "counterEvidence": "Police-law reservation matters; citizenship is conditional and local foreign voting is authorization, not automatically granted.",
        "uncertainty": "The prior IMI direction is not recertified as a whole-axis claim on these clauses alone.",
        "retrievalMode": "direct",
        "actualReadScope": "Full eight-page extracted text, articles 1–178 and transitional A–J; particularly articles 5–18, 19–34, 70–100, 115–173 and transitions A–J.",
        "eventPeriod": "Original text effective 1919-03-01"
      },
      {
        "id": "uy-imi-restrictions",
        "axis": "imi",
        "sourceId": "uy-immigration-1932",
        "sourceTitle": "Ley N° 8868",
        "sourceUrl": "https://www.impo.com.uy/bases/leyes-originales/8868-1932",
        "locator": "Arts. 1–5, 9–11; final publication/compliance notes",
        "statement": "The 1932 law restricts entry and permits expulsion for specified criminal/status/health grounds, supplies judicial recourse and exceptions, and imposes a temporary ban on the referenced immigrant category, with a specialist-worker exception.",
        "boundedParaphrase": "The 1932 law restricts entry and permits expulsion for specified criminal/status/health grounds, supplies judicial recourse and exceptions, and imposes a temporary ban on the referenced immigrant category, with a specialist-worker exception.",
        "basis": "norm",
        "publishedDate": "1932-07-23",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "A material in-period restriction undermines any presentation of constitutional entry liberty as uniform open immigration. It still does not by itself measure assimilation versus multicultural integration.",
        "counterEvidence": "Political-offence exceptions, family ties, judicial challenge and certain health/family exceptions qualify the restrictions.",
        "uncertainty": "Article 10 refers to article 6 of the 1890 law, which was not independently read; the precise affected passenger category is therefore left as a cross-reference rather than invented. No deportation statistics read.",
        "retrievalMode": "direct",
        "actualReadScope": "Complete original-law text articles 1–12, all exceptions, appeal procedure, transitional provisions, signatures and publication note.",
        "eventPeriod": "Final law compliance 1932-07-19, publication 1932-07-23; temporary clause effective after 60 days"
      },
      {
        "id": "uy-dip-norm",
        "axis": "dip",
        "sourceId": "uy-constitution",
        "sourceTitle": "CONSTITUCION DE LA REPUBLICA — CONSTITUCION 1918 PLEBISCITADA EL 25 DE NOVIEMBRE DE 1917",
        "sourceUrl": "https://biblioteca.parlamento.gub.uy/File/biblioteca/Constituciones/1917/1917%20Constitucion%20-%20OCR.pdf",
        "locator": "Arts. 18(7–8,11–12), 79(3,18,23)",
        "statement": "The president may declare war only with legislative authorization when arbitration is impossible or has failed; military command remains authorized and treaties require legislative ratification.",
        "boundedParaphrase": "The president may declare war only with legislative authorization when arbitration is impossible or has failed; military command remains authorized and treaties require legislative ratification.",
        "basis": "norm",
        "publishedDate": "undated",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Arbitration-before-war is a general constitutional rule for external conflict resolution, interpreted alongside retained military capacity and treaty powers.",
        "counterEvidence": "This is not abolition of armed forces or absolute pacifism.",
        "uncertainty": "By itself it does not prove that governments always exhausted peaceful means; treaty implementation provides additional evidence.",
        "retrievalMode": "direct",
        "actualReadScope": "Full eight-page extracted text, articles 1–178 and transitional A–J; particularly articles 5–18, 19–34, 70–100, 115–173 and transitions A–J.",
        "eventPeriod": "1919-03-01 onward"
      },
      {
        "id": "uy-dip-treaty-norm",
        "axis": "dip",
        "sourceId": "uy-arbitration",
        "sourceTitle": "Tratado de arbitraje amplio entre la República Oriental del Uruguay y la de El Salvador, firmado en Madrid el 7 de noviembre de 1924",
        "sourceUrl": "https://treaties.un.org/doc/Publication/UNTS/LON/Volume%20108/v108.pdf",
        "locator": "LNTS CVIII no. 2502, printed pp. 104–105, arts. 1–7",
        "statement": "The Uruguay–El Salvador treaty sends disputes unresolved by direct negotiation to arbitration, preserves settled agreements and ordinarily leaves private claims to competent domestic courts absent denial of justice.",
        "boundedParaphrase": "The Uruguay–El Salvador treaty sends disputes unresolved by direct negotiation to arbitration, preserves settled agreements and ordinarily leaves private claims to competent domestic courts absent denial of justice.",
        "basis": "norm",
        "publishedDate": "1930",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "A broad dispute-settlement commitment adds positive external policy content to the constitutional arbitration-first rule.",
        "counterEvidence": "Bilateral scope, domestic-jurisdiction exception and case-specific submission agreements remain.",
        "uncertainty": "It proves a legal mechanism, not a completed arbitration or settlement in every dispute.",
        "retrievalMode": "direct",
        "actualReadScope": "Entry title and complete Spanish text articles 1–7 on printed pp. 104–105 (PDF indices 103–104), including footnote confirming exchange of ratifications 25 April 1928; French/English translations pp. 106–108 also returned. Only this treaty, not all 468 PDF pages.",
        "eventPeriod": "Signed 1924-11-07"
      },
      {
        "id": "uy-dip-treaty-practice",
        "axis": "dip",
        "sourceId": "uy-arbitration",
        "sourceTitle": "Tratado de arbitraje amplio entre la República Oriental del Uruguay y la de El Salvador, firmado en Madrid el 7 de noviembre de 1924",
        "sourceUrl": "https://treaties.un.org/doc/Publication/UNTS/LON/Volume%20108/v108.pdf",
        "locator": "Printed p. 104 footnote 1 and registration heading; article 6",
        "statement": "The contemporary League record states ratifications were exchanged in Madrid on 25 April 1928 and the treaty was registered on 21 October 1930; article 6 ties its ten-year term to ratification exchange.",
        "boundedParaphrase": "The contemporary League record states ratifications were exchanged in Madrid on 25 April 1928 and the treaty was registered on 21 October 1930; article 6 ties its ten-year term to ratification exchange.",
        "basis": "practice",
        "publishedDate": "1930",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "A concrete, dated ratification step during the dual executive supplies implementation beyond a constitutional aspiration or unsigned proposal.",
        "counterEvidence": "Only one bilateral treaty’s implementation is verified here.",
        "uncertainty": "No arbitral case record or military-budget series read.",
        "retrievalMode": "direct",
        "actualReadScope": "Entry title and complete Spanish text articles 1–7 on printed pp. 104–105 (PDF indices 103–104), including footnote confirming exchange of ratifications 25 April 1928; French/English translations pp. 106–108 also returned. Only this treaty, not all 468 PDF pages.",
        "eventPeriod": "1928-04-25 exchange; 1930-10-21 registration"
      },
      {
        "id": "uy-dip-multilateral-limit",
        "axis": "dip",
        "sourceId": "uy-oas-signatures",
        "sourceTitle": "B-5: TRATADO GENERAL DE ARBITRAJE INTERAMERICANO",
        "sourceUrl": "https://www.oas.org/juridico/spanish/firmas/b-5.html",
        "locator": "Uruguay row and Uruguay reservation",
        "statement": "OAS records Uruguay signing the 5 January 1929 inter-American arbitration treaty with a domestic-jurisdiction/denial-of-justice reservation, but no ratification or deposit in its table.",
        "boundedParaphrase": "OAS records Uruguay signing the 5 January 1929 inter-American arbitration treaty with a domestic-jurisdiction/denial-of-justice reservation, but no ratification or deposit in its table.",
        "basis": "declaration",
        "publishedDate": "undated",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Supports declared preference for broad arbitration and bounds any stronger assertion of multilateral implementation.",
        "counterEvidence": "The missing ratification/deposit entries preclude claiming that this treaty became binding for Uruguay in the period.",
        "uncertainty": "No independent Uruguayan ratification instrument was read; the bilateral 1928 evidence supplies the actual in-period ratification example.",
        "retrievalMode": "direct",
        "actualReadScope": "Heading/status table and Uruguay signature/reservation section, lines 315–324; table reports Uruguay signature 01/05/29 with dashes for ratification and deposit.",
        "eventPeriod": "1929-01-05 signature"
      },
      {
        "id": "uy-eco-constitution",
        "axis": "eco",
        "sourceId": "uy-constitution",
        "sourceTitle": "CONSTITUCION DE LA REPUBLICA — CONSTITUCION 1918 PLEBISCITADA EL 25 DE NOVIEMBRE DE 1917",
        "sourceUrl": "https://biblioteca.parlamento.gub.uy/File/biblioteca/Constituciones/1917/1917%20Constitucion%20-%20OCR.pdf",
        "locator": "Articles 97–100, 169, 171",
        "statement": "The constitution provides autonomous administration for state industrial services and public education, assistance and hygiene, while protecting property and allowing private work, cultivation, industry and commerce subject to public welfare.",
        "boundedParaphrase": "The constitution provides autonomous administration for state industrial services and public education, assistance and hygiene, while protecting property and allowing private work, cultivation, industry and commerce subject to public welfare.",
        "basis": "norm",
        "publishedDate": "undated",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Provides both public-service architecture and the continued private sphere; it frames a mixed system rather than public ownership inferred from state funding alone.",
        "counterEvidence": "Article 100 does not enumerate the size of the state sector; protected private activity is substantial counterweight.",
        "uncertainty": "No whole-economy ownership share or sector-weighted predominance follows from these articles.",
        "retrievalMode": "direct",
        "actualReadScope": "Full eight-page extracted text, articles 1–178 and transitional A–J; particularly articles 5–18, 19–34, 70–100, 115–173 and transitions A–J.",
        "eventPeriod": "1919-03-01 onward"
      },
      {
        "id": "uy-eco-brou",
        "axis": "eco",
        "sourceId": "uy-brou-practice",
        "sourceTitle": "Historia del Banco República — La creación del banco",
        "sourceUrl": "https://www.brou.com.uy/institucional/el-banco/creacion-del-banco",
        "locator": "Paragraphs on complete 1911–13 statization and postwar/1920s activities",
        "statement": "BROU’s institutional history explicitly identifies complete state ownership and describes its continued credit/currency operations in the 1920s alongside a private banking system.",
        "boundedParaphrase": "BROU’s institutional history explicitly identifies complete state ownership and describes its continued credit/currency operations in the 1920s alongside a private banking system.",
        "basis": "practice",
        "publishedDate": "undated",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Evidence is state ownership of an operating bank, not a financing-to-ownership inference about its borrowers. Combined with utilities and ANCAP, it broadens coverage across major sectors.",
        "counterEvidence": "Private banks continued; lending to private agriculture does not make agriculture publicly owned.",
        "uncertainty": "The ownership origin predates 1919; the relevant in-period fact is continued operation. Later directed-economy claims are not automatically imported.",
        "retrievalMode": "direct",
        "actualReadScope": "Substantive historical paragraphs from 1896 founding through 1935 reorganization, specifically complete state ownership in 1911–13 and 1920s credit/currency operations.",
        "eventPeriod": "State ownership established 1911–13, operational evidence for the 1920s"
      },
      {
        "id": "uy-eco-ute",
        "axis": "eco",
        "sourceId": "uy-ute-practice",
        "sourceTitle": "Reseña Histórica — UTE: UNA LUZ QUE BRILLA DESDE HACE 110 AÑOS",
        "sourceUrl": "https://www.ute.com.uy/institucional/ute-y-la-sociedad/patrimonio-institucional/resena-historica",
        "locator": "Chronological blocks DÉCADA DE 1920 and DÉCADA DE 1930; 1947 counterpoint",
        "statement": "UTE records commissioning multiple interior electricity plants during the 1920s, incorporation of telephone services in 1931 and opening of a thermal generation plant on 21 October 1932.",
        "boundedParaphrase": "UTE records commissioning multiple interior electricity plants during the 1920s, incorporation of telephone services in 1931 and opening of a thermal generation plant on 21 October 1932.",
        "basis": "practice",
        "publishedDate": "undated",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Shows state provision actually operating in energy and telecommunications, independently of the constitutional agency mandate.",
        "counterEvidence": "Its own history dates completion of the nationwide electricity monopoly to 1947, outside this profile.",
        "uncertainty": "No output share or complete inventory of public/private utilities audited; modern institutional retrospective.",
        "retrievalMode": "direct",
        "actualReadScope": "Chronological blocks 1910s, 1920s, 1930s and 1940s: creation in 1912, fifteen named 1920s plants, telephones in 1931, 1932 thermal plant, and the out-of-scope 1947 completion of electrical monopoly.",
        "eventPeriod": "1920s; 1931-10-15; 1932-10-21"
      },
      {
        "id": "uy-eco-ancap-law",
        "axis": "eco",
        "sourceId": "uy-ancap-law",
        "sourceTitle": "Ley N° 8764",
        "sourceUrl": "https://www.impo.com.uy/bases/leyes-originales/8764-1931",
        "locator": "Articles 1–3, 5, 10–11",
        "statement": "Law 8764 creates an autonomous state industrial enterprise, assigns specific alcohol and fuel monopolies and state hydrocarbon ownership, but conditions the wider refined-fuel trade monopoly on state refineries supplying half national gasoline consumption.",
        "boundedParaphrase": "Law 8764 creates an autonomous state industrial enterprise, assigns specific alcohol and fuel monopolies and state hydrocarbon ownership, but conditions the wider refined-fuel trade monopoly on state refineries supplying half national gasoline consumption.",
        "basis": "norm",
        "publishedDate": "1931-10-23",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Direct public ownership and exclusive economic rights are explicit, not deduced from subsidy or administration alone.",
        "counterEvidence": "Authorized private distillers survive subject to the law; the conditional fuel monopoly is not assumed to have become operational in 1931.",
        "uncertainty": "One late-period enterprise cannot alone establish the whole regime’s economic direction.",
        "retrievalMode": "direct",
        "actualReadScope": "Complete articles 1–12, especially state ownership/monopolies article 1, pricing and import operations article 3, retained distillers article 5, reciprocal foreign purchasing article 9 and mineral ownership articles 10–11.",
        "eventPeriod": "Promulgation 1931-10-15; publication 1931-10-23"
      },
      {
        "id": "uy-eco-ancap-practice",
        "axis": "eco",
        "sourceId": "uy-ancap-practice",
        "sourceTitle": "Reseña Histórica",
        "sourceUrl": "https://www.ancap.com.uy/93/5/resena-historica.html",
        "locator": "Opening historical section, paragraph beginning En el ámbito de la industria vinculada al alcohol",
        "statement": "ANCAP reports beginning alcohol import/resale and grappa production/sales in March 1932. Its refinery opened in 1937, beyond the profile.",
        "boundedParaphrase": "ANCAP reports beginning alcohol import/resale and grappa production/sales in March 1932. Its refinery opened in 1937, beyond the profile.",
        "basis": "practice",
        "publishedDate": "undated",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Supplies actual late-period public commercial/industrial operation rather than mere founding authority.",
        "counterEvidence": "Refined-fuel retail entry is dated only to 1933 and cannot safely be placed before the 31 March rupture; cement factories opened much later.",
        "uncertainty": "Neither 1933 fuel-sales entry nor 1935–37 refinery construction is counted as practice under the dual executive.",
        "retrievalMode": "direct",
        "actualReadScope": "Opening history paragraphs through 1937 refinery opening, including alcohol-business commencement in March 1932 and the unqualified-year 1933 entry into refined-fuel sales; later history not used for this profile.",
        "eventPeriod": "1932-03 alcohol operations"
      },
      {
        "id": "uy-con-partial",
        "axis": "con",
        "sourceId": "uy-ancap-law",
        "sourceTitle": "Ley N° 8764",
        "sourceUrl": "https://www.impo.com.uy/bases/leyes-originales/8764-1931",
        "locator": "Articles 3(B–J), 5 and 9",
        "statement": "ANCAP’s law controls its product prices and certain imports, retained private distillation and procurement preferences.",
        "boundedParaphrase": "ANCAP’s law controls its product prices and certain imports, retained private distillation and procurement preferences.",
        "basis": "norm",
        "publishedDate": "1931-10-23",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "This is genuine sectoral regulation but does not establish the weight of planning versus markets across the economy.",
        "counterEvidence": "Constitutional article 171 leaves private economic activity and the ANCAP law itself uses purchases/contracts.",
        "uncertainty": "CON remains held; the post-1929 BROU narrative has an insufficiently precise pre-rupture boundary and no general allocation system was verified.",
        "retrievalMode": "direct",
        "actualReadScope": "Complete articles 1–12, especially state ownership/monopolies article 1, pricing and import operations article 3, retained distillers article 5, reciprocal foreign purchasing article 9 and mineral ownership articles 10–11.",
        "eventPeriod": "1931-10 onward"
      },
      {
        "id": "uy-com-partial",
        "axis": "com",
        "sourceId": "uy-ancap-law",
        "sourceTitle": "Ley N° 8764",
        "sourceUrl": "https://www.impo.com.uy/bases/leyes-originales/8764-1931",
        "locator": "Articles 3(B,C), 4 and 9",
        "statement": "The enterprise law restricts some imports until domestic materials are exhausted, exempts the enterprise’s trade from duties and prefers reciprocal purchases when not onerous.",
        "boundedParaphrase": "The enterprise law restricts some imports until domestic materials are exhausted, exempts the enterprise’s trade from duties and prefers reciprocal purchases when not onerous.",
        "basis": "norm",
        "publishedDate": "1931-10-23",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Identifies mixed sectoral trade devices, not the countrywide tariff and integration stance.",
        "counterEvidence": "Exemptions and reciprocity coexist with monopoly/protection provisions.",
        "uncertainty": "COM remains held; neither customs-setting competence nor one enterprise’s trade regime establishes the whole construct.",
        "retrievalMode": "direct",
        "actualReadScope": "Complete articles 1–12, especially state ownership/monopolies article 1, pricing and import operations article 3, retained distillers article 5, reciprocal foreign purchasing article 9 and mineral ownership articles 10–11.",
        "eventPeriod": "1931-10 onward"
      },
      {
        "id": "uy-rel-norm",
        "axis": "rel",
        "sourceId": "uy-constitution",
        "sourceTitle": "CONSTITUCION DE LA REPUBLICA — CONSTITUCION 1918 PLEBISCITADA EL 25 DE NOVIEMBRE DE 1917",
        "sourceUrl": "https://biblioteca.parlamento.gub.uy/File/biblioteca/Constituciones/1917/1917%20Constitucion%20-%20OCR.pdf",
        "locator": "Article 5; presidential and council declarations articles 74, 87",
        "statement": "The state supports no religion and all worship is free; previously state-financed Catholic temples are recognized as Church property and existing religious temples receive tax exemption. Officials’ declarations are by honour.",
        "boundedParaphrase": "The state supports no religion and all worship is free; previously state-financed Catholic temples are recognized as Church property and existing religious temples receive tax exemption. Officials’ declarations are by honour.",
        "basis": "norm",
        "publishedDate": "undated",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Directly covers institutional establishment, public support, religious assets and official oath formulation, rather than private belief.",
        "counterEvidence": "Religious tax privileges and transferred Church property qualify complete financial/institutional separation.",
        "uncertainty": "No claim of religious hostility or uniformly secular social attitudes follows.",
        "retrievalMode": "direct",
        "actualReadScope": "Full eight-page extracted text, articles 1–178 and transitional A–J; particularly articles 5–18, 19–34, 70–100, 115–173 and transitions A–J.",
        "eventPeriod": "1919-03-01 onward"
      },
      {
        "id": "uy-rel-calendar",
        "axis": "rel",
        "sourceId": "uy-holidays",
        "sourceTitle": "Ley N° 6997 — DECLARACION DE FERIADO",
        "sourceUrl": "https://www.impo.com.uy/bases/leyes/6997-1919",
        "locator": "Articles 1–4",
        "statement": "A 1919 law under the new constitutional regime uses civic/secular holiday names including Children’s Day, Beaches Day, Family Day and Tourism Week while retaining calendar celebrations.",
        "boundedParaphrase": "A 1919 law under the new constitutional regime uses civic/secular holiday names including Children’s Day, Beaches Day, Family Day and Tourism Week while retaining calendar celebrations.",
        "basis": "norm",
        "publishedDate": "1919-10-25",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "A dated extension of secular state nomenclature corroborates institutional secularization; it is supplementary to the broad constitutional rule.",
        "counterEvidence": "Calendar continuity and religious worship remain; renaming does not prove society abandoned religion.",
        "uncertainty": "Updated IMPO presentation, not original print or observed holiday practice.",
        "retrievalMode": "direct",
        "actualReadScope": "Complete five-article displayed law, including new constitutional regime, secular festival names, day of the dead, Carnival and Semana de Turismo.",
        "eventPeriod": "Promulgated 1919-10-23; published 1919-10-25"
      }
    ],
    "heldGaps": [
      {
        "axis": "pod",
        "reason": "No adequate in-period rights-enforcement or repression series freshly read; do not silently convert the normative direction into comprehensive observed practice."
      },
      {
        "axis": "imi",
        "reason": "Hold general-axis certification pending cultural integration/minority and immigration implementation evidence. Preserve prior objects for root revision; do not overwrite a score here."
      },
      {
        "axis": "int",
        "reason": "Need a period-bounded broad external-engagement/non-intervention policy and actual involvement; do not reuse DIP automatically."
      },
      {
        "axis": "eco",
        "reason": "A whole-country public/private balance and stable direction over all 1919–33 remain insufficiently established. Root may consider a bounded mixed-economy candidate; this worker does not certify it as the sixth qualifying axis."
      },
      {
        "axis": "con",
        "reason": "Need broad planning/market evidence with exact pre-March-1933 implementation; do not count ANCAP competence alone."
      },
      {
        "axis": "com",
        "reason": "Need period-bounded general tariff/trade integration evidence and effects, distinguishing 1920s from Depression measures."
      },
      {
        "axis": "mor",
        "reason": "Need broader, same-period family/civil/status/customs evidence and practice; pre-1919 reforms must be verified as continuing before use."
      },
      {
        "axis": "tec",
        "reason": "No broad technology–biology policy prescription with compatible practice was located."
      }
    ],
    "newScoresAssigned": false,
    "qualificationNotForced": true,
    "integration": "Independent root review/editorial coding required; this research makes no repository change or metadata eligibility decision.",
    "periodAudit": {
      "original": "1março1919–ruptura31março1933; recorte normativo original plebiscitado25novembro1917",
      "normativeAnchor": "Plebiscited 1917-11-25; effective 1919-03-01 per transitional A.",
      "politicalStart": "1919-03-01",
      "lastFullDayBeforeRupture": "1933-03-30",
      "rupture": "1933-03-31",
      "localInstitutionTransition": "New local authorities scheduled for 1920-01-01; contemporary 1920 local practice separately corroborates.",
      "temporalWarnings": [
        "Initial 1919 executive election was parliamentary.",
        "Women enfranchised by a law promulgated 1932-12-16; do not attribute this to the original constitution or the whole period.",
        "1932 immigration restriction belongs inside the record.",
        "ANCAP refinery 1937, cement factories 1956 onward, complete electricity monopoly 1947, and unspecified-month 1933 fuel retail cannot be backdated into verified practice."
      ]
    },
    "researchConclusion": "EST and DIP now have broad institutional evidence plus dated practice. ECO has useful multi-sector evidence but remains an uncertified candidate because the whole public/private balance and temporal coverage need review. Prior IMI cannot be counted as a full construct from entry liberty alone. No six-axis qualification is asserted.",
    "category": "historical-country",
    "period": "1março1919–ruptura31março1933; recorte normativo original plebiscitado25novembro1917"
  },
  {
    "id": "chile-liberal-order-1828",
    "name": "Chile — ordem liberal anterior a Lircay",
    "priorWholeRecord": {
      "id": "chile-liberal-order-1828",
      "name": "Chile — ordem liberal anterior a Lircay",
      "aliases": [
        "Chilepipiolo1828",
        "Carta liberalchilena1828"
      ],
      "period": "Carta8/8/1828–ruptura da guerra civil1829–1830; vigência formal permanece até25/5/1833",
      "rationale": "Ordem liberal derrotada na guerra civil e substituída pelo poder conservador; marco político diferente da carta1833, sem criar país apenas por emenda.",
      "caveats": "Carta formalmente continua até1833, mas poder liberal cai em1830. FonteMemoriaChilena dá16abril paraLircay, outra tradição17; mantemos mês/ano e conflito explícito. CabeçalhoCervantes dizsetembro, fecho primário8agosto e BCNconfirmamagosto: erro catalográfico registrado. Sem imputar constituição a prática uniforme de guerra. Economia desconhecida, direitos de propriedade não bastam.",
      "sources": [
        {
          "title": "Constitución de Chile1828 — texto primário, Cervantes",
          "url": "https://www.cervantesvirtual.com/obra-visor/constitucion-politica-del-estado-de-chile--promulgada-el-8-de-septiembre-de-1828/html/f0c8b948-9f73-4a3e-8fb4-be39cda67642_2.html",
          "note": "Corpo/fecho original8agosto efetivamente lido; título superior/slugsetembro divergente não seguido; arts.3–4,7–20,24–33,83,104–118."
        },
        {
          "title": "Carta chilena1828 — HistóriaPolíticaBCN",
          "url": "https://www.bcn.cl/historiapolitica/constituciones/detalle_constitucion?handle=10221.1/18432",
          "note": "Corpo institucional efetivamente lido: promulgação8agosto1828 e vigênciaformal até25maio1833."
        },
        {
          "title": "Guerra civil1829–1830 — MemoriaChilena/BibliotecaNacional",
          "url": "https://www.memoriachilena.gob.cl/602/w3-article-92157.html",
          "note": "Corpo institucional efetivamente lido: crise eleitoral, renúncia liberal, controlePortales e derrotaFreire1830; narrativa16abril conflitante com17, sem fingir resolvido."
        }
      ],
      "kind": "country",
      "category": "historical-country",
      "vec": {
        "est": 40,
        "rep": 60,
        "pod": 40,
        "imi": 50,
        "dip": 50,
        "int": 50,
        "eco": 50,
        "con": 50,
        "com": 50,
        "rel": 20,
        "mor": 50,
        "tec": 50
      },
      "evidence": {
        "est": "medium",
        "rep": "medium",
        "pod": "medium",
        "rel": "medium"
      },
      "axisEvidence": {
        "est": {
          "sourceTitles": [
            "Constitución de Chile1828 — texto primário, Cervantes"
          ],
          "rationale": "Nomeação executiva e hierarquia legal nacional sustentam direção unitária moderada com autonomia territorial relevante. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Assembleias possuem competências substantivas e municípios elegem governadores locais118; não é centralismo absoluto ou meraausênciaautonomia."
        },
        "rep": {
          "sourceTitles": [
            "Constitución de Chile1828 — texto primário, Cervantes"
          ],
          "rationale": "Representação eleitoral periódica sustenta direção democrática moderada no desenho. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Eleitorado depende de ocupação/propriedade e exclui serviçodoméstico/devedores; disputa sucessória1829 mostra execução problemática. Não sufrágio universal ou eleições auditadas."
        },
        "pod": {
          "sourceTitles": [
            "Constitución de Chile1828 — texto primário, Cervantes"
          ],
          "rationale": "Garantias e proibição de tortura sustentam direção moderada à liberdade no desenho. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Flagrante/receiodefuga13, buscaslegais106, emergência83(12)e responsabilização da imprensa persistem; não inferir liberdade prática plena na guerra civil."
        },
        "rel": {
          "sourceTitles": [
            "Constitución de Chile1828 — texto primário, Cervantes"
          ],
          "rationale": "Monopólio confessional público sustenta direção religiosa forte no desenho. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Não transfere proibição de culto público para crença/opinião privada ou comprova execução persecutória."
        }
      },
      "coding": {
        "est": {
          "axis": "est",
          "position": "moderate-second",
          "confidence": "medium",
          "claims": [
            {
              "sourceTitle": "Constitución de Chile1828 — texto primário, Cervantes",
              "locator": "Arts.108–118",
              "statement": "Assembleias provinciais eleitas escolhem senadores e controlam orçamento municipal; Executivo central nomeia intendentes a partir de ternas provinciais, que executam leis gerais e ordens nacionais.",
              "basis": "norm",
              "publishedDate": "1828-08-08",
              "accessedDate": "2026-10-08"
            }
          ],
          "rationale": "Nomeação executiva e hierarquia legal nacional sustentam direção unitária moderada com autonomia territorial relevante.",
          "uncertainty": "Assembleias possuem competências substantivas e municípios elegem governadores locais118; não é centralismo absoluto ou meraausênciaautonomia.",
          "reviewedOn": "2026-10-08",
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
          "confidence": "medium",
          "claims": [
            {
              "sourceTitle": "Constitución de Chile1828 — texto primário, Cervantes",
              "locator": "Arts.7–8,24–33,109",
              "statement": "Deputados e assembleias provinciais são diretamente eleitos, com mandatos curtos/renovação; senadores vêm dasassembleias.",
              "basis": "norm",
              "publishedDate": "1828-08-08",
              "accessedDate": "2026-10-08"
            }
          ],
          "rationale": "Representação eleitoral periódica sustenta direção democrática moderada no desenho.",
          "uncertainty": "Eleitorado depende de ocupação/propriedade e exclui serviçodoméstico/devedores; disputa sucessória1829 mostra execução problemática. Não sufrágio universal ou eleições auditadas.",
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
              "sourceTitle": "Constitución de Chile1828 — texto primário, Cervantes",
              "locator": "Arts.10–20,83(12),104–107",
              "statement": "Carta protege liberdade, prisão judicial com exceções, imprensa, domicílio/correspondência e proíbe tortura; emergência admite medidas imediatas sob prestação de contas aoCongresso/Comissão.",
              "basis": "norm",
              "publishedDate": "1828-08-08",
              "accessedDate": "2026-10-08"
            }
          ],
          "rationale": "Garantias e proibição de tortura sustentam direção moderada à liberdade no desenho.",
          "uncertainty": "Flagrante/receiodefuga13, buscaslegais106, emergência83(12)e responsabilização da imprensa persistem; não inferir liberdade prática plena na guerra civil.",
          "reviewedOn": "2026-10-08",
          "version": "editorial-ordinal-v1",
          "value": 40,
          "range": [
            30,
            45
          ]
        },
        "rel": {
          "axis": "rel",
          "position": "strong-second",
          "confidence": "medium",
          "claims": [
            {
              "sourceTitle": "Constitución de Chile1828 — texto primário, Cervantes",
              "locator": "Arts.3–4",
              "statement": "Religião católica exclui exercício público de qualquer outra, enquanto opiniões privadas não são perseguidas.",
              "basis": "norm",
              "publishedDate": "1828-08-08",
              "accessedDate": "2026-10-08"
            }
          ],
          "rationale": "Monopólio confessional público sustenta direção religiosa forte no desenho.",
          "uncertainty": "Não transfere proibição de culto público para crença/opinião privada ou comprova execução persecutória.",
          "reviewedOn": "2026-10-08",
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
        "reviewedOn": "2026-10-08",
        "independentReview": "accepted-bounded-primary-and-identity",
        "scope": "Passagens codificadas e cronologia cotejadas independentemente; prática histórica e todas as emendas não auditadas integralmente."
      },
      "unknownAxisReasons": {
        "imi": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
        "dip": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
        "int": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
        "eco": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
        "con": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
        "com": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
        "mor": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
        "tec": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação."
      }
    },
    "priorWholeRecordSha256": "6bae73da9c23927aef1749f1fda834c4057c0d108e981dcdb8b4842d521c947c",
    "priorHashVerified": true,
    "priorHashAlgorithm": "SHA-256 of UTF-8 JSON preserving input object key order, ensure_ascii=False, compact separators",
    "priorDocumentedAxes": [
      "est",
      "rep",
      "pod",
      "rel"
    ],
    "priorAuditObjects": [
      {
        "axis": "est",
        "scope": "Prior editorial coding only; not freshly read or recertified for this handoff",
        "coding": {
          "axis": "est",
          "position": "moderate-second",
          "confidence": "medium",
          "claims": [
            {
              "sourceTitle": "Constitución de Chile1828 — texto primário, Cervantes",
              "locator": "Arts.108–118",
              "statement": "Assembleias provinciais eleitas escolhem senadores e controlam orçamento municipal; Executivo central nomeia intendentes a partir de ternas provinciais, que executam leis gerais e ordens nacionais.",
              "basis": "norm",
              "publishedDate": "1828-08-08",
              "accessedDate": "2026-10-08"
            }
          ],
          "rationale": "Nomeação executiva e hierarquia legal nacional sustentam direção unitária moderada com autonomia territorial relevante.",
          "uncertainty": "Assembleias possuem competências substantivas e municípios elegem governadores locais118; não é centralismo absoluto ou meraausênciaautonomia.",
          "reviewedOn": "2026-10-08",
          "version": "editorial-ordinal-v1",
          "value": 40,
          "range": [
            30,
            45
          ]
        },
        "axisEvidence": {
          "sourceTitles": [
            "Constitución de Chile1828 — texto primário, Cervantes"
          ],
          "rationale": "Nomeação executiva e hierarquia legal nacional sustentam direção unitária moderada com autonomia territorial relevante. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Assembleias possuem competências substantivas e municípios elegem governadores locais118; não é centralismo absoluto ou meraausênciaautonomia."
        },
        "evidence": "medium"
      },
      {
        "axis": "rep",
        "scope": "Prior editorial coding only; not freshly read or recertified for this handoff",
        "coding": {
          "axis": "rep",
          "position": "moderate-first",
          "confidence": "medium",
          "claims": [
            {
              "sourceTitle": "Constitución de Chile1828 — texto primário, Cervantes",
              "locator": "Arts.7–8,24–33,109",
              "statement": "Deputados e assembleias provinciais são diretamente eleitos, com mandatos curtos/renovação; senadores vêm dasassembleias.",
              "basis": "norm",
              "publishedDate": "1828-08-08",
              "accessedDate": "2026-10-08"
            }
          ],
          "rationale": "Representação eleitoral periódica sustenta direção democrática moderada no desenho.",
          "uncertainty": "Eleitorado depende de ocupação/propriedade e exclui serviçodoméstico/devedores; disputa sucessória1829 mostra execução problemática. Não sufrágio universal ou eleições auditadas.",
          "reviewedOn": "2026-10-08",
          "version": "editorial-ordinal-v1",
          "value": 60,
          "range": [
            55,
            70
          ]
        },
        "axisEvidence": {
          "sourceTitles": [
            "Constitución de Chile1828 — texto primário, Cervantes"
          ],
          "rationale": "Representação eleitoral periódica sustenta direção democrática moderada no desenho. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Eleitorado depende de ocupação/propriedade e exclui serviçodoméstico/devedores; disputa sucessória1829 mostra execução problemática. Não sufrágio universal ou eleições auditadas."
        },
        "evidence": "medium"
      },
      {
        "axis": "pod",
        "scope": "Prior editorial coding only; not freshly read or recertified for this handoff",
        "coding": {
          "axis": "pod",
          "position": "moderate-second",
          "confidence": "medium",
          "claims": [
            {
              "sourceTitle": "Constitución de Chile1828 — texto primário, Cervantes",
              "locator": "Arts.10–20,83(12),104–107",
              "statement": "Carta protege liberdade, prisão judicial com exceções, imprensa, domicílio/correspondência e proíbe tortura; emergência admite medidas imediatas sob prestação de contas aoCongresso/Comissão.",
              "basis": "norm",
              "publishedDate": "1828-08-08",
              "accessedDate": "2026-10-08"
            }
          ],
          "rationale": "Garantias e proibição de tortura sustentam direção moderada à liberdade no desenho.",
          "uncertainty": "Flagrante/receiodefuga13, buscaslegais106, emergência83(12)e responsabilização da imprensa persistem; não inferir liberdade prática plena na guerra civil.",
          "reviewedOn": "2026-10-08",
          "version": "editorial-ordinal-v1",
          "value": 40,
          "range": [
            30,
            45
          ]
        },
        "axisEvidence": {
          "sourceTitles": [
            "Constitución de Chile1828 — texto primário, Cervantes"
          ],
          "rationale": "Garantias e proibição de tortura sustentam direção moderada à liberdade no desenho. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Flagrante/receiodefuga13, buscaslegais106, emergência83(12)e responsabilização da imprensa persistem; não inferir liberdade prática plena na guerra civil."
        },
        "evidence": "medium"
      },
      {
        "axis": "rel",
        "scope": "Prior editorial coding only; not freshly read or recertified for this handoff",
        "coding": {
          "axis": "rel",
          "position": "strong-second",
          "confidence": "medium",
          "claims": [
            {
              "sourceTitle": "Constitución de Chile1828 — texto primário, Cervantes",
              "locator": "Arts.3–4",
              "statement": "Religião católica exclui exercício público de qualquer outra, enquanto opiniões privadas não são perseguidas.",
              "basis": "norm",
              "publishedDate": "1828-08-08",
              "accessedDate": "2026-10-08"
            }
          ],
          "rationale": "Monopólio confessional público sustenta direção religiosa forte no desenho.",
          "uncertainty": "Não transfere proibição de culto público para crença/opinião privada ou comprova execução persecutória.",
          "reviewedOn": "2026-10-08",
          "version": "editorial-ordinal-v1",
          "value": 20,
          "range": [
            10,
            25
          ]
        },
        "axisEvidence": {
          "sourceTitles": [
            "Constitución de Chile1828 — texto primário, Cervantes"
          ],
          "rationale": "Monopólio confessional público sustenta direção religiosa forte no desenho. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Não transfere proibição de culto público para crença/opinião privada ou comprova execução persecutória."
        },
        "evidence": "medium"
      }
    ],
    "allTwelveAxesAudited": true,
    "axisAudit": [
      {
        "axis": "est",
        "wasPreviouslyCoded": true,
        "status": "prior-supported-as-mixed-structural-norm",
        "claimIds": [
          "cl-est-norm",
          "cl-formal-dates"
        ],
        "assessment": "Central hierarchy coexists with powerful elected provincial and municipal institutions; prior moderate-unitary interpretation requires this full balance.",
        "heldGap": "No complete province-by-province implementation audit; do not call the system simply centralized.",
        "noScoreAssigned": true
      },
      {
        "axis": "rep",
        "wasPreviouslyCoded": true,
        "status": "prior-supported-with-material-practice-counterevidence",
        "claimIds": [
          "cl-rep-norm",
          "cl-rep-practice",
          "cl-boundary"
        ],
        "assessment": "Periodic representative design and restrictive franchise both verified; 1829 selection conflict and armed overthrow prevent equating formal democracy with stable democratic practice.",
        "heldGap": "No fresh full primary electoral returns; political order collapses before formal repeal.",
        "noScoreAssigned": true
      },
      {
        "axis": "pod",
        "wasPreviouslyCoded": true,
        "status": "prior-supported-as-norm-practice-gap-held",
        "claimIds": [
          "cl-pod-norm"
        ],
        "assessment": "Rights protections and emergency limits broadly supported in the actual constitution.",
        "heldGap": "In-period enforcement, press restrictions and wartime arrests were not adequately audited. A search-index lead to July 1829 military-jurisdiction controversy was too poorly identified to promote into a claim.",
        "noScoreAssigned": true
      },
      {
        "axis": "imi",
        "wasPreviouslyCoded": false,
        "status": "held-unknown",
        "claimIds": [
          "cl-imi-partial"
        ],
        "assessment": "Conditional citizenship is not the whole cultural-integration/migration construct.",
        "heldGap": "Need broad admission/integration/minority policy and practice, confined to 1828–29 liberal rule.",
        "noScoreAssigned": true
      },
      {
        "axis": "dip",
        "wasPreviouslyCoded": false,
        "status": "held-unknown-with-general-norm",
        "claimIds": [
          "cl-dip-partial"
        ],
        "assessment": "Constitution contains a real general obligation to try avoiding war; this is a useful lead, not an automatically certified whole axis.",
        "heldGap": "No adequate external-conflict practice found before liberal collapse; later conservative diplomacy excluded.",
        "noScoreAssigned": true
      },
      {
        "axis": "int",
        "wasPreviouslyCoded": false,
        "status": "held-unknown",
        "claimIds": [],
        "assessment": "Sovereignty, national honour and military-command clauses cannot alone establish non-interventionism–nationalism.",
        "heldGap": "Need broader foreign involvement and national-interest practice within the liberal-order period.",
        "noScoreAssigned": true
      },
      {
        "axis": "eco",
        "wasPreviouslyCoded": false,
        "status": "held-unknown",
        "claimIds": [
          "cl-eco-partial"
        ],
        "assessment": "Property protection and public-service duties coexist; neither establishes countrywide ownership/provision balance.",
        "heldGap": "Need actual ownership/service organization across multiple sectors, not funding or statutory duties.",
        "noScoreAssigned": true
      },
      {
        "axis": "con",
        "wasPreviouslyCoded": false,
        "status": "held-unknown",
        "claimIds": [
          "cl-con-partial"
        ],
        "assessment": "Legislative and municipal economic powers do not establish a general planning or market system.",
        "heldGap": "Need broad allocation/regulation rules and implemented practice.",
        "noScoreAssigned": true
      },
      {
        "axis": "com",
        "wasPreviouslyCoded": false,
        "status": "held-unknown",
        "claimIds": [
          "cl-com-partial"
        ],
        "assessment": "Commerce promotion/customs competence is direction-neutral.",
        "heldGap": "Need broad implemented trade regime, tariff coverage and treaties within the bounded period.",
        "noScoreAssigned": true
      },
      {
        "axis": "rel",
        "wasPreviouslyCoded": true,
        "status": "prior-supported-with-broader-institutional-context",
        "claimIds": [
          "cl-rel-norm"
        ],
        "assessment": "Catholic public exclusivity is institutional, reinforced by patronage/concordat provisions and qualified by state control/private-opinion protection.",
        "heldGap": "No enforcement series. Do not infer personal piety or universal persecution.",
        "noScoreAssigned": true
      },
      {
        "axis": "mor",
        "wasPreviouslyCoded": false,
        "status": "held-unknown-with-reform-evidence",
        "claimIds": [
          "cl-mor-partial"
        ],
        "assessment": "Abolition of slavery/entails and civic equality are material reforms; retaining religious and family continuity makes whole-moral inference too broad.",
        "heldGap": "Need more general social-customs programme and practice; cannot use liberal label as evidence.",
        "noScoreAssigned": true
      },
      {
        "axis": "tec",
        "wasPreviouslyCoded": false,
        "status": "held-unknown",
        "claimIds": [],
        "assessment": "No adequate general technology-versus-biological/environmental-caution evidence.",
        "heldGap": "General education/science or public-works powers are not enough.",
        "noScoreAssigned": true
      }
    ],
    "sources": [
      {
        "id": "cl-constitution",
        "title": "Constitución política del Estado de Chile : promulgada el 8 de agosto de 1828",
        "url": "https://www.cervantesvirtual.com/obra-visor/constitucion-politica-del-estado-de-chile--promulgada-el-8-de-septiembre-de-1828/html/f0c8b948-9f73-4a3e-8fb4-be39cda67642_2.html",
        "publishedDate": "2015",
        "accessedDate": "2026-10-08",
        "edition": "Alicante: Biblioteca Virtual Miguel de Cervantes, 2015, verified in its bibliographic record. Spanish transcription of the constitution sanctioned 6 August and promulgated 8 August 1828; Pinto proclamation dated 9 August.",
        "authorship": "Alicante: Biblioteca Virtual Miguel de Cervantes, 2015, verified in its bibliographic record. Spanish transcription of the constitution sanctioned 6 August and promulgated 8 August 1828; Pinto proclamation dated 9 August.",
        "translation": "Spanish original unless otherwise stated; paraphrases in this artifact are researcher-written English, not published translations.",
        "retrievalMode": "direct",
        "actualReadScope": "All articles 1–134 and legislative/executive closing signatures; Pinto proclamation paragraphs visible in reads (not every initial paragraph independently read).",
        "sourceKind": "primary constitution in modern transcription",
        "note": "The old URL slug says septiembre, but the current page title, catalog title and body closing say agosto. This pass does not reproduce the prior assertion that the currently visible heading says September."
      },
      {
        "id": "cl-catalog",
        "title": "Constitución política del Estado de Chile : promulgada el 8 de agosto de 1828 — Registro",
        "url": "https://www.cervantesvirtual.com/portales/constituciones_hispanoamericanas/obra/constitucion-politica-del-estado-de-chile--promulgada-el-8-de-septiembre-de-1828/",
        "publishedDate": "2015",
        "accessedDate": "2026-10-08",
        "edition": "Biblioteca Virtual Miguel de Cervantes bibliographic record, uniform title Constitución, 1828; URI ark:/59851/bmc90432.",
        "authorship": "Biblioteca Virtual Miguel de Cervantes bibliographic record, uniform title Constitución, 1828; URI ark:/59851/bmc90432.",
        "translation": "Spanish original unless otherwise stated; paraphrases in this artifact are researcher-written English, not published translations.",
        "retrievalMode": "direct",
        "actualReadScope": "Bibliographic title, uniform title, language and digital publication line.",
        "sourceKind": "publisher bibliographic record",
        "note": ""
      },
      {
        "id": "cl-bcn-history",
        "title": "Constitución Política de la República de Chile",
        "url": "https://www.bcn.cl/historiapolitica/constituciones/detalle_constitucion?handle=10221.1/18432",
        "publishedDate": "undated",
        "accessedDate": "2026-10-08",
        "edition": "Biblioteca del Congreso Nacional, Historia Política, constitutional history page.",
        "authorship": "Biblioteca del Congreso Nacional, Historia Política, constitutional history page.",
        "translation": "Spanish original unless otherwise stated; paraphrases in this artifact are researcher-written English, not published translations.",
        "retrievalMode": "direct",
        "actualReadScope": "Entire substantive constitutional description before archive links: promulgation/vigency, institutional design, origins and attribution.",
        "sourceKind": "institutional retrospective",
        "note": ""
      },
      {
        "id": "cl-civil-war",
        "title": "La guerra civil de 1829 y 1830",
        "url": "https://www.memoriachilena.gob.cl/602/w3-article-92157.html",
        "publishedDate": "undated",
        "accessedDate": "2026-10-08",
        "edition": "Memoria Chilena, Biblioteca Nacional de Chile, institutional historical article; no publication date displayed.",
        "authorship": "Memoria Chilena, Biblioteca Nacional de Chile, institutional historical article; no publication date displayed.",
        "translation": "Spanish original unless otherwise stated; paraphrases in this artifact are researcher-written English, not published translations.",
        "retrievalMode": "direct",
        "actualReadScope": "Complete substantive narrative of 1829 presidential election, congressional vice-presidential choice, resignations, December battle, provisional government and Lircay; document links not counted as reads.",
        "sourceKind": "institutional retrospective with dated practice",
        "note": "This article says 16 April 1830 for Lircay; two separately read official articles support 17 April. Conflict retained, not silently erased."
      },
      {
        "id": "cl-lircay-archive",
        "title": "Lircay: la madre de todas las batallas, por la conformación del estado de Chile",
        "url": "https://www.archivonacional.gob.cl/lircay-la-madre-de-todas-las-batallas-por-la-conformacion-del-estado-de-chile",
        "publishedDate": "undated",
        "accessedDate": "2026-10-08",
        "edition": "Archivo Nacional de Chile institutional article, no publication date exposed.",
        "authorship": "Archivo Nacional de Chile institutional article, no publication date exposed.",
        "translation": "Spanish original unless otherwise stated; paraphrases in this artifact are researcher-written English, not published translations.",
        "retrievalMode": "direct",
        "actualReadScope": "Entire substantive article, particularly its 17 April 1830 dating and identification of subsequent conservative state-building; embedded quotation not treated as an independent original-decree read.",
        "sourceKind": "institutional retrospective with dated practice",
        "note": ""
      },
      {
        "id": "cl-lircay-library",
        "title": "Batalla de Lircay",
        "url": "https://www.memoriachilena.gob.cl/602/w3-article-94938.html",
        "publishedDate": "undated",
        "accessedDate": "2026-10-08",
        "edition": "Memoria Chilena, Biblioteca Nacional de Chile, José Joaquín Prieto minisitio.",
        "authorship": "Memoria Chilena, Biblioteca Nacional de Chile, José Joaquín Prieto minisitio.",
        "translation": "Spanish original unless otherwise stated; paraphrases in this artifact are researcher-written English, not published translations.",
        "retrievalMode": "direct",
        "actualReadScope": "All three substantive paragraphs, with 17 April 1830 battle and Ovalle government installed in Santiago on 1 April 1830.",
        "sourceKind": "institutional retrospective with dated practice",
        "note": ""
      }
    ],
    "claims": [
      {
        "id": "cl-est-norm",
        "axis": "est",
        "sourceId": "cl-constitution",
        "sourceTitle": "Constitución política del Estado de Chile : promulgada el 8 de agosto de 1828",
        "sourceUrl": "https://www.cervantesvirtual.com/obra-visor/constitucion-politica-del-estado-de-chile--promulgada-el-8-de-septiembre-de-1828/html/f0c8b948-9f73-4a3e-8fb4-be39cda67642_2.html",
        "locator": "Articles 1–2, 22–23, 46, 96(2,10), 108–122",
        "statement": "Provincial assemblies are directly elected and have substantive local, budgetary and Senate-selection powers; national authorities make general laws and appoint intendants from provincial shortlists, while local governors execute superior orders.",
        "boundedParaphrase": "Provincial assemblies are directly elected and have substantive local, budgetary and Senate-selection powers; national authorities make general laws and appoint intendants from provincial shortlists, while local governors execute superior orders.",
        "basis": "norm",
        "publishedDate": "2015",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "The whole central–provincial–municipal arrangement directly covers territorial distribution, with both hierarchy and autonomy.",
        "counterEvidence": "The assemblies’ elected status and powers are substantial; a purely centralized label would erase this design.",
        "uncertainty": "Prior unitary direction is an editorial interpretation, not an explicit numeric measurement. Implementation during civil breakdown is not assumed uniform.",
        "retrievalMode": "direct",
        "actualReadScope": "All articles 1–134 and legislative/executive closing signatures; Pinto proclamation paragraphs visible in reads (not every initial paragraph independently read).",
        "eventPeriod": "Promulgated 1828-08-08; liberal government destabilized during 1829"
      },
      {
        "id": "cl-rep-norm",
        "axis": "rep",
        "sourceId": "cl-constitution",
        "sourceTitle": "Constitución política del Estado de Chile : promulgada el 8 de agosto de 1828",
        "sourceUrl": "https://www.cervantesvirtual.com/obra-visor/constitucion-politica-del-estado-de-chile--promulgada-el-8-de-septiembre-de-1828/html/f0c8b948-9f73-4a3e-8fb4-be39cda67642_2.html",
        "locator": "Articles 7–9, 21–48, 60–79, 85(5–6), 109–113, 121",
        "statement": "The constitution separates powers and provides periodic direct deputy/provincial/municipal elections, provincial Senate selection and an indirect presidential vote with congressional resolution rules.",
        "boundedParaphrase": "The constitution separates powers and provides periodic direct deputy/provincial/municipal elections, provincial Senate selection and an indirect presidential vote with congressional resolution rules.",
        "basis": "norm",
        "publishedDate": "2015",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Spans franchise, multiple elected levels, electoral renewal and limits on executive obstruction.",
        "counterEvidence": "Occupational/property conditions, domestic-service and debt exclusions, wealth requirements for senators, indirect executive choice and clergy restrictions limit inclusion.",
        "uncertainty": "No universal suffrage or clean electoral outcomes are claimed.",
        "retrievalMode": "direct",
        "actualReadScope": "All articles 1–134 and legislative/executive closing signatures; Pinto proclamation paragraphs visible in reads (not every initial paragraph independently read).",
        "eventPeriod": "1828-08-08 onward within the liberal-order scope"
      },
      {
        "id": "cl-rep-practice",
        "axis": "rep",
        "sourceId": "cl-civil-war",
        "sourceTitle": "La guerra civil de 1829 y 1830",
        "sourceUrl": "https://www.memoriachilena.gob.cl/602/w3-article-92157.html",
        "locator": "First two substantive paragraphs, 1829 election and vice-presidential selection",
        "statement": "The 1829 presidential process returned Pinto; the liberal Congress chose fourth-place Joaquín Vicuña as vice-president, provoking opposition rebellion and resignations.",
        "boundedParaphrase": "The 1829 presidential process returned Pinto; the liberal Congress chose fourth-place Joaquín Vicuña as vice-president, provoking opposition rebellion and resignations.",
        "basis": "practice",
        "publishedDate": "undated",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Provides concrete operation and breakdown of the constitution’s electoral mechanism, a major qualification to idealized democratic design.",
        "counterEvidence": "Elections and parliamentary action did occur; instability does not mean the formal constitution prescribed military dictatorship.",
        "uncertainty": "Institutional retrospective; no original electoral tallies or full parliamentary debate freshly read.",
        "retrievalMode": "direct",
        "actualReadScope": "Complete substantive narrative of 1829 presidential election, congressional vice-presidential choice, resignations, December battle, provisional government and Lircay; document links not counted as reads.",
        "eventPeriod": "1829"
      },
      {
        "id": "cl-pod-norm",
        "axis": "pod",
        "sourceId": "cl-constitution",
        "sourceTitle": "Constitución política del Estado de Chile : promulgada el 8 de agosto de 1828",
        "sourceUrl": "https://www.cervantesvirtual.com/obra-visor/constitucion-politica-del-estado-de-chile--promulgada-el-8-de-septiembre-de-1828/html/f0c8b948-9f73-4a3e-8fb4-be39cda67642_2.html",
        "locator": "Articles 10–20, 83(12), 85(3–4), 104–107",
        "statement": "The text protects individual liberty, petition, press and correspondence, regulates arrest/search, protects defence and ordinary courts, prohibits torture/confiscation and limits executive detention, while allowing accountable emergency measures.",
        "boundedParaphrase": "The text protects individual liberty, petition, press and correspondence, regulates arrest/search, protects defence and ordinary courts, prohibits torture/confiscation and limits executive detention, while allowing accountable emergency measures.",
        "basis": "norm",
        "publishedDate": "2015",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "A coordinated set of individual guarantees, judicial safeguards and emergency exceptions directly covers security versus liberty.",
        "counterEvidence": "Press abuses may be punished; arrest/search exceptions and emergency powers remain.",
        "uncertainty": "Constitutional guarantees are not evidence of general compliance during the 1829–30 civil war.",
        "retrievalMode": "direct",
        "actualReadScope": "All articles 1–134 and legislative/executive closing signatures; Pinto proclamation paragraphs visible in reads (not every initial paragraph independently read).",
        "eventPeriod": "1828-08-08 onward within the liberal-order scope"
      },
      {
        "id": "cl-rel-norm",
        "axis": "rel",
        "sourceId": "cl-constitution",
        "sourceTitle": "Constitución política del Estado de Chile : promulgada el 8 de agosto de 1828",
        "sourceUrl": "https://www.cervantesvirtual.com/obra-visor/constitucion-politica-del-estado-de-chile--promulgada-el-8-de-septiembre-de-1828/html/f0c8b948-9f73-4a3e-8fb4-be39cda67642_2.html",
        "locator": "Articles 3–4, 29, 35, 83(5,7–8), 129",
        "statement": "Catholicism has exclusive public exercise with private opinions protected. The executive fills ecclesiastical offices, exercises patronage and negotiates concordats; some clergy are excluded from legislative office and external tribunals are not recognized.",
        "boundedParaphrase": "Catholicism has exclusive public exercise with private opinions protected. The executive fills ecclesiastical offices, exercises patronage and negotiates concordats; some clergy are excluded from legislative office and external tribunals are not recognized.",
        "basis": "norm",
        "publishedDate": "2015",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Establishment is reinforced by public ecclesiastical powers, but bounded by state control and private-opinion tolerance; this concerns institutions, not inferred personal piety.",
        "counterEvidence": "Private belief is protected; state patronage and exclusions of clergy limit autonomous church political control.",
        "uncertainty": "No fresh evidence of enforcement against non-Catholic public worship was located; do not infer persecution from the norm alone.",
        "retrievalMode": "direct",
        "actualReadScope": "All articles 1–134 and legislative/executive closing signatures; Pinto proclamation paragraphs visible in reads (not every initial paragraph independently read).",
        "eventPeriod": "1828-08-08 onward"
      },
      {
        "id": "cl-imi-partial",
        "axis": "imi",
        "sourceId": "cl-constitution",
        "sourceTitle": "Constitución política del Estado de Chile : promulgada el 8 de agosto de 1828",
        "sourceUrl": "https://www.cervantesvirtual.com/obra-visor/constitucion-politica-del-estado-de-chile--promulgada-el-8-de-septiembre-de-1828/html/f0c8b948-9f73-4a3e-8fb4-be39cda67642_2.html",
        "locator": "Articles 5–9",
        "statement": "Citizenship by birth and naturalization pathways depend on residence, marriage and productive/economic qualifications, with differing residence terms for foreign applicants.",
        "boundedParaphrase": "Citizenship by birth and naturalization pathways depend on residence, marriage and productive/economic qualifications, with differing residence terms for foreign applicants.",
        "basis": "norm",
        "publishedDate": "2015",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Addresses membership rules only; it does not establish a general immigration admission, minority-culture or assimilation policy.",
        "counterEvidence": "Naturalization is possible, but conditional; religious public exclusivity complicates any easy multicultural reading.",
        "uncertainty": "IMI remains held; no broad immigration/cultural-integration law and implementation evidence located for this brief regime.",
        "retrievalMode": "direct",
        "actualReadScope": "All articles 1–134 and legislative/executive closing signatures; Pinto proclamation paragraphs visible in reads (not every initial paragraph independently read).",
        "eventPeriod": "1828-08-08 onward"
      },
      {
        "id": "cl-dip-partial",
        "axis": "dip",
        "sourceId": "cl-constitution",
        "sourceTitle": "Constitución política del Estado de Chile : promulgada el 8 de agosto de 1828",
        "sourceUrl": "https://www.cervantesvirtual.com/obra-visor/constitucion-politica-del-estado-de-chile--promulgada-el-8-de-septiembre-de-1828/html/f0c8b948-9f73-4a3e-8fb4-be39cda67642_2.html",
        "locator": "Articles 46(6–7,10–11), 83(7,9–10), 123–124",
        "statement": "War requires congressional approval and prior attempts to avoid it without sacrificing national honour/independence; armed forces and militia remain, with all eligible Chileans required to register for militia.",
        "boundedParaphrase": "War requires congressional approval and prior attempts to avoid it without sacrificing national honour/independence; armed forces and militia remain, with all eligible Chileans required to register for militia.",
        "basis": "norm",
        "publishedDate": "2015",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "A general war-avoidance condition is positive normative evidence, but is not enough here to establish the regime’s whole external conflict-resolution practice.",
        "counterEvidence": "Retained military organization and national-honour reservation qualify pacifism; civil war is domestic and cannot alone code external diplomacy.",
        "uncertainty": "DIP remains held pending in-period diplomatic practice and broader defence context. The 1831 and 1830s foreign-policy texts found are not imported.",
        "retrievalMode": "direct",
        "actualReadScope": "All articles 1–134 and legislative/executive closing signatures; Pinto proclamation paragraphs visible in reads (not every initial paragraph independently read).",
        "eventPeriod": "1828-08-08 onward"
      },
      {
        "id": "cl-eco-partial",
        "axis": "eco",
        "sourceId": "cl-constitution",
        "sourceTitle": "Constitución política del Estado de Chile : promulgada el 8 de agosto de 1828",
        "sourceUrl": "https://www.cervantesvirtual.com/obra-visor/constitucion-politica-del-estado-de-chile--promulgada-el-8-de-septiembre-de-1828/html/f0c8b948-9f73-4a3e-8fb4-be39cda67642_2.html",
        "locator": "Articles 17, 46(2–5,16), 114(8–11), 122(5–9), 126–127",
        "statement": "Private property is protected and entails abolished, while national/provincial/municipal institutions have public finance, education, charity and public-works duties.",
        "boundedParaphrase": "Private property is protected and entails abolished, while national/provincial/municipal institutions have public finance, education, charity and public-works duties.",
        "basis": "norm",
        "publishedDate": "2015",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "These are mixed property/provision principles, not an inventory of public versus private ownership or actual service supply.",
        "counterEvidence": "Public duties need not mean public ownership of the economy; free alienation of land is not a measurement of private-sector predominance.",
        "uncertainty": "ECO remains held; no whole-system ownership/practice source read for 1828–29.",
        "retrievalMode": "direct",
        "actualReadScope": "All articles 1–134 and legislative/executive closing signatures; Pinto proclamation paragraphs visible in reads (not every initial paragraph independently read).",
        "eventPeriod": "1828-08-08 onward"
      },
      {
        "id": "cl-con-partial",
        "axis": "con",
        "sourceId": "cl-constitution",
        "sourceTitle": "Constitución política del Estado de Chile : promulgada el 8 de agosto de 1828",
        "sourceUrl": "https://www.cervantesvirtual.com/obra-visor/constitucion-politica-del-estado-de-chile--promulgada-el-8-de-septiembre-de-1828/html/f0c8b948-9f73-4a3e-8fb4-be39cda67642_2.html",
        "locator": "Articles 46(2–5,16), 114(10–13), 122",
        "statement": "Authorities may legislate for industry/commerce, approve bank regulations and manage public finance/local services.",
        "boundedParaphrase": "Authorities may legislate for industry/commerce, approve bank regulations and manage public finance/local services.",
        "basis": "norm",
        "publishedDate": "2015",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Administrative competence does not establish the relative weight of central planning/regulation versus market coordination.",
        "counterEvidence": "No general production allocation, price-planning or market-coordination system is set out by these clauses.",
        "uncertainty": "CON remains held.",
        "retrievalMode": "direct",
        "actualReadScope": "All articles 1–134 and legislative/executive closing signatures; Pinto proclamation paragraphs visible in reads (not every initial paragraph independently read).",
        "eventPeriod": "1828-08-08 onward"
      },
      {
        "id": "cl-com-partial",
        "axis": "com",
        "sourceId": "cl-constitution",
        "sourceTitle": "Constitución política del Estado de Chile : promulgada el 8 de agosto de 1828",
        "sourceUrl": "https://www.cervantesvirtual.com/obra-visor/constitucion-politica-del-estado-de-chile--promulgada-el-8-de-septiembre-de-1828/html/f0c8b948-9f73-4a3e-8fb4-be39cda67642_2.html",
        "locator": "Articles 46(2,8), 83(7)",
        "statement": "Congress may foster internal/external commerce and set customs; the executive can negotiate commercial treaties subject to approval.",
        "boundedParaphrase": "Congress may foster internal/external commerce and set customs; the executive can negotiate commercial treaties subject to approval.",
        "basis": "norm",
        "publishedDate": "2015",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "These allocate authority without prescribing a countrywide protective or open-trade direction.",
        "counterEvidence": "No tariff levels, sectoral coverage or implemented international integration are established.",
        "uncertainty": "COM remains held; a January 1828 cabotage decree found by search predates this profile and was not used as implementation proof.",
        "retrievalMode": "direct",
        "actualReadScope": "All articles 1–134 and legislative/executive closing signatures; Pinto proclamation paragraphs visible in reads (not every initial paragraph independently read).",
        "eventPeriod": "1828-08-08 onward"
      },
      {
        "id": "cl-mor-partial",
        "axis": "mor",
        "sourceId": "cl-constitution",
        "sourceTitle": "Constitución política del Estado de Chile : promulgada el 8 de agosto de 1828",
        "sourceUrl": "https://www.cervantesvirtual.com/obra-visor/constitucion-politica-del-estado-de-chile--promulgada-el-8-de-septiembre-de-1828/html/f0c8b948-9f73-4a3e-8fb4-be39cda67642_2.html",
        "locator": "Articles 3–4, 11, 125–127; Pinto proclamation dated 9 August 1828",
        "statement": "The text abolishes slavery and entails, rejects privileged classes and protects private opinion, while retaining exclusive Catholic public worship and inherited family/property exceptions.",
        "boundedParaphrase": "The text abolishes slavery and entails, rejects privileged classes and protects private opinion, while retaining exclusive Catholic public worship and inherited family/property exceptions.",
        "basis": "norm",
        "publishedDate": "2015",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Shows important liberal reforms alongside continuity, but these selected legal dimensions do not establish all social customs/traditions.",
        "counterEvidence": "Confessional public order and provisions protecting successor/family interests complicate a single progressive label.",
        "uncertainty": "MOR remains held; neither the word liberal nor abolition of one institution is a whole-construct score.",
        "retrievalMode": "direct",
        "actualReadScope": "All articles 1–134 and legislative/executive closing signatures; Pinto proclamation paragraphs visible in reads (not every initial paragraph independently read).",
        "eventPeriod": "1828-08-08/09"
      },
      {
        "id": "cl-boundary",
        "axis": "rep",
        "sourceId": "cl-lircay-library",
        "sourceTitle": "Batalla de Lircay",
        "sourceUrl": "https://www.memoriachilena.gob.cl/602/w3-article-94938.html",
        "locator": "Three substantive paragraphs, especially first and last",
        "statement": "The library’s Lircay article dates the decisive battle to 17 April 1830 and says it consolidated Ovalle’s government already installed in Santiago on 1 April.",
        "boundedParaphrase": "The library’s Lircay article dates the decisive battle to 17 April 1830 and says it consolidated Ovalle’s government already installed in Santiago on 1 April.",
        "basis": "practice",
        "publishedDate": "undated",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Separates political collapse of the liberal order from continuing formal validity of the 1828 constitution.",
        "counterEvidence": "The other Memoria Chilena civil-war article says 16 April; Archivo Nacional independently uses 17 April.",
        "uncertainty": "Retain the discrepancy in source notes. Evidence favours 17 April but the onset of liberal loss of control was progressive during 1829, not a single perfectly clean transition.",
        "retrievalMode": "direct",
        "actualReadScope": "All three substantive paragraphs, with 17 April 1830 battle and Ovalle government installed in Santiago on 1 April 1830.",
        "eventPeriod": "1830-04-01 and 1830-04-17"
      },
      {
        "id": "cl-formal-dates",
        "axis": "est",
        "sourceId": "cl-bcn-history",
        "sourceTitle": "Constitución Política de la República de Chile",
        "sourceUrl": "https://www.bcn.cl/historiapolitica/constituciones/detalle_constitucion?handle=10221.1/18432",
        "locator": "Opening constitutional description",
        "statement": "BCN dates promulgation to 8 August 1828 and formal validity to 25 May 1833, describing an arrangement between federalism and centralized authoritarianism.",
        "boundedParaphrase": "BCN dates promulgation to 8 August 1828 and formal validity to 25 May 1833, describing an arrangement between federalism and centralized authoritarianism.",
        "basis": "practice",
        "publishedDate": "undated",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Bibliographic/institutional chronology distinguishes the constitution’s legal lifespan from the shorter liberal governing order.",
        "counterEvidence": "Formal survival to 1833 does not authorize importing conservative government actions into this profile.",
        "uncertainty": "The constitutional text itself supplies the 8 August closing; the retrospective supplies formal end date.",
        "retrievalMode": "direct",
        "actualReadScope": "Entire substantive constitutional description before archive links: promulgation/vigency, institutional design, origins and attribution.",
        "eventPeriod": "1828-08-08 to 1833-05-25 formal validity only"
      }
    ],
    "heldGaps": [
      {
        "axis": "pod",
        "reason": "In-period enforcement, press restrictions and wartime arrests were not adequately audited. A search-index lead to July 1829 military-jurisdiction controversy was too poorly identified to promote into a claim."
      },
      {
        "axis": "imi",
        "reason": "Need broad admission/integration/minority policy and practice, confined to 1828–29 liberal rule."
      },
      {
        "axis": "dip",
        "reason": "No adequate external-conflict practice found before liberal collapse; later conservative diplomacy excluded."
      },
      {
        "axis": "int",
        "reason": "Need broader foreign involvement and national-interest practice within the liberal-order period."
      },
      {
        "axis": "eco",
        "reason": "Need actual ownership/service organization across multiple sectors, not funding or statutory duties."
      },
      {
        "axis": "con",
        "reason": "Need broad allocation/regulation rules and implemented practice."
      },
      {
        "axis": "com",
        "reason": "Need broad implemented trade regime, tariff coverage and treaties within the bounded period."
      },
      {
        "axis": "mor",
        "reason": "Need more general social-customs programme and practice; cannot use liberal label as evidence."
      },
      {
        "axis": "tec",
        "reason": "General education/science or public-works powers are not enough."
      }
    ],
    "newScoresAssigned": false,
    "qualificationNotForced": true,
    "integration": "Independent root review/editorial coding required; this research makes no repository change or metadata eligibility decision.",
    "periodAudit": {
      "original": "Carta8/8/1828–ruptura da guerra civil1829–1830; vigência formal permanece até25/5/1833",
      "sanction": "1828-08-06",
      "promulgation": "1828-08-08",
      "proclamation": "1828-08-09",
      "politicalBreakdown": "Progressive breakdown in 1829, conservative government in Santiago by 1830-04-01, liberal military defeat at Lircay in April 1830.",
      "preferredLircayDate": "1830-04-17",
      "dateConflict": "Memoria Chilena civil-war page says 16 April; independently read Archivo Nacional and another Memoria Chilena page say 17 April. Prior month-level caution remains available; preference does not erase discrepancy.",
      "formalConstitutionEnd": "1833-05-25",
      "temporalWarnings": [
        "Do not treat formal constitutional validity to 1833 as continuous liberal governing practice.",
        "Current Cervantes heading/catalog say August; September persists in URL slug.",
        "No 1831–33 conservative government policy imported into liberal profile."
      ]
    },
    "researchConclusion": "The four prior institutional axes have broad normative bases but meaningful practice qualifications. None of eight previously missing axes is newly certified. DIP and MOR have bounded positive leads that remain insufficient; Chile is not shown to meet six-axis qualification.",
    "category": "historical-country",
    "period": "Carta8/8/1828–ruptura da guerra civil1829–1830; vigência formal permanece até25/5/1833"
  }
] as const;
const proposalInputs:ReferenceEntry[]=[
  {
    "id": "chile-liberal-order-1828",
    "name": "Chile — ordem liberal anterior a Lircay",
    "aliases": [
      "Chilepipiolo1828",
      "Carta liberalchilena1828"
    ],
    "period": "Carta8/8/1828–ruptura da guerra civil1829–1830; vigência formal permanece até25/5/1833",
    "rationale": "A Carta de 1828 combina representação e direitos com autonomia provincial sob autoridades nacionais, exclusividade católica pública e obrigação de tentar evitar guerras.",
    "caveats": "Carta formalmente continua até1833, mas poder liberal cai em1830. FonteMemoriaChilena dá16abril paraLircay, outra tradição17; mantemos mês/ano e conflito explícito. CabeçalhoCervantes dizsetembro, fecho primário8agosto e BCNconfirmamagosto: erro catalográfico registrado. Sem imputar constituição a prática uniforme de guerra. Economia desconhecida, direitos de propriedade não bastam. A preferência por evitar guerra é regra normativa geral do art.83(9), contraposta à defesa armada, milícias obrigatórias e ressalva da honra e independência. Não comprova pacifismo praticado na guerra civil nem usa diplomacia conservadora posterior. O título catalográfico indica agosto, mas o cabeçalho e o endereço conservam setembro; o fecho constitucional e a história legal sustentam 8 de agosto. Preservam-se os objetos de fonte anteriores, sem converter o endereço em data de promulgação.",
    "sources": [
      {
        "title": "Constitución de Chile1828 — texto primário, Cervantes",
        "url": "https://www.cervantesvirtual.com/obra-visor/constitucion-politica-del-estado-de-chile--promulgada-el-8-de-septiembre-de-1828/html/f0c8b948-9f73-4a3e-8fb4-be39cda67642_2.html",
        "note": "Corpo/fecho original8agosto efetivamente lido; título superior/slugsetembro divergente não seguido; arts.3–4,7–20,24–33,83,104–118."
      },
      {
        "title": "Carta chilena1828 — HistóriaPolíticaBCN",
        "url": "https://www.bcn.cl/historiapolitica/constituciones/detalle_constitucion?handle=10221.1/18432",
        "note": "Corpo institucional efetivamente lido: promulgação8agosto1828 e vigênciaformal até25maio1833."
      },
      {
        "title": "Guerra civil1829–1830 — MemoriaChilena/BibliotecaNacional",
        "url": "https://www.memoriachilena.gob.cl/602/w3-article-92157.html",
        "note": "Corpo institucional efetivamente lido: crise eleitoral, renúncia liberal, controlePortales e derrotaFreire1830; narrativa16abril conflitante com17, sem fingir resolvido."
      }
    ],
    "kind": "country",
    "category": "historical-country",
    "vec": {
      "est": 40,
      "rep": 60,
      "pod": 40,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 20,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "est": "medium",
      "rep": "medium",
      "pod": "medium",
      "rel": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Constitución de Chile1828 — texto primário, Cervantes"
        ],
        "rationale": "Nomeação executiva e hierarquia legal nacional sustentam direção unitária moderada com autonomia territorial relevante. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Assembleias possuem competências substantivas e municípios elegem governadores locais118; não é centralismo absoluto ou meraausênciaautonomia."
      },
      "rep": {
        "sourceTitles": [
          "Constitución de Chile1828 — texto primário, Cervantes"
        ],
        "rationale": "Representação eleitoral periódica sustenta direção democrática moderada no desenho. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Eleitorado depende de ocupação/propriedade e exclui serviçodoméstico/devedores; disputa sucessória1829 mostra execução problemática. Não sufrágio universal ou eleições auditadas."
      },
      "pod": {
        "sourceTitles": [
          "Constitución de Chile1828 — texto primário, Cervantes"
        ],
        "rationale": "Garantias e proibição de tortura sustentam direção moderada à liberdade no desenho. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Flagrante/receiodefuga13, buscaslegais106, emergência83(12)e responsabilização da imprensa persistem; não inferir liberdade prática plena na guerra civil."
      },
      "rel": {
        "sourceTitles": [
          "Constitución de Chile1828 — texto primário, Cervantes"
        ],
        "rationale": "Monopólio confessional público sustenta direção religiosa forte no desenho. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Não transfere proibição de culto público para crença/opinião privada ou comprova execução persecutória."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constitución de Chile1828 — texto primário, Cervantes",
            "locator": "Arts.108–118",
            "statement": "Assembleias provinciais eleitas escolhem senadores e controlam orçamento municipal; Executivo central nomeia intendentes a partir de ternas provinciais, que executam leis gerais e ordens nacionais.",
            "basis": "norm",
            "publishedDate": "1828-08-08",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Nomeação executiva e hierarquia legal nacional sustentam direção unitária moderada com autonomia territorial relevante.",
        "uncertainty": "Assembleias possuem competências substantivas e municípios elegem governadores locais118; não é centralismo absoluto ou meraausênciaautonomia.",
        "reviewedOn": "2026-10-08",
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
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constitución de Chile1828 — texto primário, Cervantes",
            "locator": "Arts.7–8,24–33,109",
            "statement": "Deputados e assembleias provinciais são diretamente eleitos, com mandatos curtos/renovação; senadores vêm dasassembleias.",
            "basis": "norm",
            "publishedDate": "1828-08-08",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Representação eleitoral periódica sustenta direção democrática moderada no desenho.",
        "uncertainty": "Eleitorado depende de ocupação/propriedade e exclui serviçodoméstico/devedores; disputa sucessória1829 mostra execução problemática. Não sufrágio universal ou eleições auditadas.",
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
            "sourceTitle": "Constitución de Chile1828 — texto primário, Cervantes",
            "locator": "Arts.10–20,83(12),104–107",
            "statement": "Carta protege liberdade, prisão judicial com exceções, imprensa, domicílio/correspondência e proíbe tortura; emergência admite medidas imediatas sob prestação de contas aoCongresso/Comissão.",
            "basis": "norm",
            "publishedDate": "1828-08-08",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Garantias e proibição de tortura sustentam direção moderada à liberdade no desenho.",
        "uncertainty": "Flagrante/receiodefuga13, buscaslegais106, emergência83(12)e responsabilização da imprensa persistem; não inferir liberdade prática plena na guerra civil.",
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "rel": {
        "axis": "rel",
        "position": "strong-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constitución de Chile1828 — texto primário, Cervantes",
            "locator": "Arts.3–4",
            "statement": "Religião católica exclui exercício público de qualquer outra, enquanto opiniões privadas não são perseguidas.",
            "basis": "norm",
            "publishedDate": "1828-08-08",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Monopólio confessional público sustenta direção religiosa forte no desenho.",
        "uncertainty": "Não transfere proibição de culto público para crença/opinião privada ou comprova execução persecutória.",
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 20,
        "range": [
          10,
          25
        ]
      },
      "dip": {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constitución de Chile1828 — texto primário, Cervantes",
            "locator": "Arts.46(6–7,10–11),83(9–10),123–124",
            "statement": "A guerra só pode ser declarada com resolução do Congresso, após empregar meios de evitá-la sem sacrificar honra e independência; continuam Exército, Marinha, defesa e inscrição obrigatória nas milícias.",
            "basis": "norm",
            "publishedDate": "1828-08-08",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "A exigência prescritiva geral de tentar evitar a guerra governa a decisão militar externa inteira, e não um tratado ou projeto isolado. Sustenta preferência diplomática moderada no desenho constitucional, assim como a norma brasileira de 1946, sem transformar desenho em prática.",
        "uncertainty": "40 é âncora editorial moderada: honra, independência e defesa limitam a obrigação; forças e milícias permanecem. Não há auditoria adequada da conduta externa antes da queda liberal. A evidência é normativa, não uma certificação de pacifismo observado ou da guerra civil.",
        "reviewedOn": "2026-10-08"
      }
    },
    "documentaryReview": {
      "status": "author-reviewed-bounded-claims",
      "reviewedOn": "2026-10-08",
      "independentReview": "accepted-bounded-primary-and-identity",
      "scope": "Passagens codificadas e cronologia cotejadas independentemente; prática histórica e todas as emendas não auditadas integralmente."
    },
    "unknownAxisReasons": {
      "imi": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "dip": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "int": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "eco": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "con": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "com": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "mor": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "tec": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação."
    }
  },
  {
    "id": "uruguay-dual-executive-order-1919",
    "name": "Uruguai — ordem do Executivo compartilhado",
    "aliases": [
      "Uruguai — Conselho Nacional de Administração1919–1933"
    ],
    "period": "1março1919–ruptura31março1933; recorte normativo original plebiscitado25novembro1917",
    "rationale": "A Carta divide o Executivo, mantém soberania legislativa nacional e autonomia local, protege direitos e separa Estado e religião; exige arbitragem antes da guerra.",
    "caveats": "Norma não é auditoria integral da prática1919–1933. Sufrágio feminino depende de lei especial10 e primeiro Executivo é escolhido parlamentarmente pelas disposiçõesD/E; não sufrágio universal imediato. Administração de serviços públicos100 e liberdade industrial171 não determinam propriedade predominante em toda economia; eco desconhecido. Autonomia local não foi convertida automaticamente em federalismo. A cláusula de entrada e cidadania não determina toda a orientação cultural e migratória; a Lei 8.868 de 1932 acrescenta restrições e exceções. Esse eixo fica não estimado. O voto feminino é reconhecido somente pela lei de dezembro de 1932, sem inferência retroativa. Empresas públicas em bancos, eletricidade e álcool são evidência multissetorial útil, mas não bastam aqui para definir a organização geral da propriedade produtiva. A preferência pela arbitragem não abole forças armadas ou emergência.",
    "sources": [
      {
        "title": "Constituição uruguaia1918 — transcrição parlamentar, vigência1919",
        "url": "https://biblioteca.parlamento.gub.uy/File/biblioteca/Constituciones/1917/1917%20Constitucion%20-%20OCR.pdf",
        "note": "Fonte primária em transcrição/OCR parlamentar8páginas efetivamente lida:5–12,19/26–27,70–82,97–100,130–145,146–173,transitóriasA–I. Cotejo de passagens com Cervantes; não scan original completo."
      },
      {
        "title": "Constitución de1918 — Biblioteca Cervantes",
        "url": "https://www.cervantesvirtual.com/obra-visor/constitucion-de-1918/html/ede0ff47-9171-4208-988f-ff320585a241_2.html",
        "note": "Texto primário republicado realmente aberto e passagens relevantes recuperadas em corpo indexado. Cabeçalho1918 com plebiscito25novembro1917; transitóriaA fixa início1março1919."
      },
      {
        "title": "1933: golpe e intervenção da Corte Electoral — Corte Electoral",
        "url": "https://www.gub.uy/corte-electoral/comunicacion/publicaciones/1933-golpe-estado-intervencion-corte-electoral",
        "note": "Corpo institucional17junho2024 realmente lido:31março1933 decreto dissolve Assembleia e Conselho; retrospectiva institucional baseada em pesquisa, não leitura do decreto original."
      },
      {
        "title": "Lei uruguaia nº 8.868, de 1932 — texto original, IMPO",
        "url": "https://www.impo.com.uy/bases/leyes-originales/8868-1932",
        "note": "Texto completo dos arts.1–12 e fechos efetivamente lido nesta revisão; publicação em 23/7/1932, aprovação legislativa em 15/7 e cumprimento em 19/7. Há restrições, expulsão, exceções familiares e políticas e recurso judicial. A lei de 1890 citada por remissão não foi lida; não se inventa o conteúdo de seu art.6º."
      },
      {
        "title": "Tratado de arbitragem Uruguai–El Salvador — LNTS nº 2502",
        "url": "https://treaties.un.org/doc/Publication/UNTS/LON/Volume%20108/v108.pdf",
        "note": "Leitura do pesquisador native14 restrita ao tratado nº2502, pp.103–108, sobretudo texto espanhol pp.104–105, arts.1–7 e nota de ratificação em 25/4/1928. Assinado em Madri em 7/11/1924, registrado em 21/10/1930. Não se afirma leitura das 468 páginas do volume, nem ratificação do tratado multilateral de 1929."
      },
      {
        "title": "Lei uruguaia nº 8.927, de 1932 — direitos políticos das mulheres, IMPO",
        "url": "https://www.impo.com.uy/bases/leyes-originales/8927-1932",
        "note": "O pesquisador native14 leu arts.1–2 e início do art.3º sobre inscrição. Promulgada em 16/12/1932 e publicada em 22/12, reconhece voto ativo e passivo nacional e municipal. Não retroage ao começo de 1919 nem comprova participação em todas as eleições; a eleição nacional de 1938 está fora deste recorte."
      }
    ],
    "kind": "country",
    "category": "historical-country",
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
      "rel": 60,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "rep": "medium",
      "pod": "medium",
      "rel": "medium",
      "imi": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constituição uruguaia1918 — transcrição parlamentar, vigência1919"
        ],
        "rationale": "Representação competitiva especificada sustenta desenho democrático moderado. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Voto feminino depende de autorização10; suspensões12, Senado indireto27 e primeira eleição parlamentarD/E. Não prática eleitoral integral."
      },
      "pod": {
        "sourceTitles": [
          "Constituição uruguaia1918 — transcrição parlamentar, vigência1919"
        ],
        "rationale": "Garantias gerais/processuais sustentam liberdade normativa moderada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Prisão154 é de cidadãos, com flagrante/semiplena prova e ordem; direitos146 incluem habitantes. Medidas urgentes79(19) requerem relatório24h e controle Assembleia/Comissão; não ausência de repressão observada."
      },
      "rel": {
        "sourceTitles": [
          "Constituição uruguaia1918 — transcrição parlamentar, vigência1919"
        ],
        "rationale": "Ausência de religião sustentada pelo Estado e pluralidade de cultos sustentam secularismo moderado. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Patrimônio católico e isenção de templos são contrapontos; não hostilidade religiosa ou ausência de toda cooperação estatal."
      },
      "imi": {
        "sourceTitles": [
          "Constituição uruguaia1918 — transcrição parlamentar, vigência1919"
        ],
        "rationale": "Entrada e residência admitidas por norma geral sustentam dimensão de abertura migratória moderada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Leis de polícia e direitos de terceiros172 limitam ingresso; cidadania8 exige profissão/capital e residência. Não se infere igualdade cultural irrestrita ou prática de acolhimento."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constituição uruguaia1918 — transcrição parlamentar, vigência1919",
            "locator": "Arts.9–12,19,26–27,70–82; transitóriasD/E",
            "statement": "Voto secreto/proporcional e representantes eleitos; Presidente e Conselho em regra eleitos diretamente, com participação minoritária no Conselho.",
            "basis": "norm",
            "publishedDate": "1917-11-25",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Representação competitiva especificada sustenta desenho democrático moderado.",
        "uncertainty": "Voto feminino depende de autorização10; suspensões12, Senado indireto27 e primeira eleição parlamentarD/E. Não prática eleitoral integral. A lei de dezembro de 1932 reconhece voto feminino apenas no fim do período; não se confunde norma com eleições nacionais posteriores a março de 1933.",
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
            "sourceTitle": "Constituição uruguaia1918 — transcrição parlamentar, vigência1919",
            "locator": "Arts.146–168; contrapontos79(19),80,154,168",
            "statement": "Carta protege processo, defesa, habeas corpus, privacidade e expressão sem censura prévia; urgência e suspensão têm controle parlamentar e limites.",
            "basis": "norm",
            "publishedDate": "1917-11-25",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Garantias gerais/processuais sustentam liberdade normativa moderada.",
        "uncertainty": "Prisão154 é de cidadãos, com flagrante/semiplena prova e ordem; direitos146 incluem habitantes. Medidas urgentes79(19) requerem relatório24h e controle Assembleia/Comissão; não ausência de repressão observada.",
        "reviewedOn": "2026-10-08",
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
        "claims": [
          {
            "sourceTitle": "Constituição uruguaia1918 — transcrição parlamentar, vigência1919",
            "locator": "Art.5",
            "statement": "Estado não sustenta religião e cultos são livres; reconhece templos católicos antes financiados e isenta templos religiosos de impostos.",
            "basis": "norm",
            "publishedDate": "1917-11-25",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Ausência de religião sustentada pelo Estado e pluralidade de cultos sustentam secularismo moderado.",
        "uncertainty": "Patrimônio católico e isenção de templos são contrapontos; não hostilidade religiosa ou ausência de toda cooperação estatal.",
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "est": {
        "axis": "est",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constituição uruguaia1918 — transcrição parlamentar, vigência1919",
            "locator": "Arts.4º,16–18,115–129 e130–145",
            "statement": "A soberania legislativa e a justiça são nacionais; assembleias e conselhos locais eleitos têm tributos, orçamento e pessoal próprios, enquanto lei nacional define competências e recursos, e a polícia depende do Presidente.",
            "basis": "norm",
            "publishedDate": "Plebiscito 25/11/1917; vigência 1/3/1919",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "A autoridade constitucional nacional define e supervisiona o âmbito dos órgãos territoriais. Essa hierarquia sustenta direção unitária moderada, sem confundir autonomia administrativa e fiscal com soberania de estados federados.",
        "uncertainty": "40 é âncora editorial moderada: autonomia local é substantiva, com eleições, tributos, orçamento e funcionários. A execução local não foi auditada integralmente; a transcrição parlamentar não informa data de edição moderna. Não é centralismo absoluto.",
        "reviewedOn": "2026-10-08"
      },
      "dip": {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constituição uruguaia1918 — transcrição parlamentar, vigência1919",
            "locator": "Arts.18(7–8),79(3,18,23),80 e170",
            "statement": "A declaração de guerra exige aprovação da Assembleia e impossibilidade ou fracasso da arbitragem; permanecem comando militar, forças armadas e requisições legais indenizadas.",
            "basis": "norm",
            "publishedDate": "Plebiscito 25/11/1917; vigência 1/3/1919",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Tratado de arbitragem Uruguai–El Salvador — LNTS nº 2502",
            "locator": "LNTS nº2502, pp.104–105, arts.1–7; nota sobre25/4/1928",
            "statement": "O tratado geral ratificado sujeita divergências não resolvidas por negociação à arbitragem, ressalvando questões já solucionadas e jurisdição doméstica, salvo denegação de justiça.",
            "basis": "norm",
            "publishedDate": "Assinatura 7/11/1924; ratificação 25/4/1928; registro 21/10/1930",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "A regra geral coloca solução arbitral antes da guerra e tem corroboração num compromisso ratificado dentro do período. Sustenta preferência diplomática moderada, sem inferir desarmamento.",
        "uncertainty": "40 é âncora editorial, não frequência medida de guerras. Permanecem defesa armada, autorização legislativa para guerra e exceções do tratado; não se auditou toda a atuação externa nem se presume ratificação multilateral de 1929.",
        "reviewedOn": "2026-10-08"
      }
    },
    "documentaryReview": {
      "status": "author-reviewed-bounded-claims",
      "reviewedOn": "2026-10-08",
      "independentReview": "accepted-bounded-primary-and-identity",
      "scope": "Passagens primárias parlamentares e cronologia institucional cotejadas independentemente; prática histórica integral não auditada."
    },
    "unknownAxisReasons": {
      "est": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "dip": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "int": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "eco": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "con": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "com": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "mor": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "tec": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação."
    }
  },
  {
    "id": "brazil-fourth-republic-1946",
    "name": "Brasil — Quarta República",
    "aliases": [
      "Brasil — República Populista1946–1964",
      "Brasil — ordem constitucional1946"
    ],
    "period": "31/01/1946–ruptura política de31/03/1964; recorte normativo original de18/09/1946; coordenação econômica documentada em 1951–1960",
    "rationale": "A Carta combina federalismo, representação eleitoral e direitos com exceções de emergência; nos anos 1950, crédito público coordena infraestrutura e indústria.",
    "caveats": "Norma original1946, não média da prática1946–1964. Interlúdio parlamentar1961–1963 reconhecido sem perfil adicional. Ruptura política1964 não significa revogação formal imediata: AI1 mantém a Constituição com alterações autoritárias. Imigração permanece desconhecida diante de abertura142 e seleção/assimilação162/5XV r/168I; os demais eixos sem evidência abrangente permanecem não estimados. Fontes legislativas são transcrições oficiais, não inspeção visual dos exemplares originais. A direção de coordenação econômica usa episódios de 1951–1960, não uma média uniforme dos governos de 1946–1964. O crédito coordenado preserva investimentos públicos e privados, nacionais e estrangeiros; não estabelece predominância da propriedade pública. O cancelamento do PCB em 1947 e a perda de mandatos em 1948 são contraevidência relevante às garantias eleitorais e associativas.",
    "sources": [
      {
        "title": "Constituição brasileira1946 — Câmara dos Deputados, republicação",
        "url": "https://www2.camara.leg.br/legin/fed/consti/1940-1949/constituicao-1946-18-julho-1946-365199-republicacao-1-pl.html",
        "note": "Corpo normativo oficial realmente aberto:1–59,131–175,176–182,205–218. Data18setembro1946 no corpo, apesar do slug18julho. Republicação, sem afirmar inspeção visual do DOU ou auditoria de todas as emendas."
      },
      {
        "title": "Senado200anos — cronologia institucional",
        "url": "https://www12.senado.leg.br/senado200anos/passado",
        "note": "Corpo realmente lido:29out1945 deposição de Vargas;31jan1946 posse de Dutra,1fev1946 Constituinte,18set1946 promulgação; interlúdio parlamentar1961–1963;31mar1964 golpe. Retrospectiva institucional, não fonte de práticas em todos os eixos."
      },
      {
        "title": "AI1 de9abril1964 — Câmara dos Deputados, publicação original",
        "url": "https://www2.camara.leg.br/legin/fed/atoins/1960-1969/atoinstitucional-1-9-abril-1964-364977-publicacaooriginal-1-csr.html",
        "note": "Autoria abriu realmente corpo completo: preâmbulo e1–11. Renderer da revisão independente não exibiu corpo; não nova leitura independente do AI1. Mantém carta1946, altera eleição presidencial e permite cassação/exclusão judicial. Usado para identidade terminal; não projeta seus dispositivos retroativamente na carta original."
      },
      {
        "title": "Apoio à infraestrutura nas origens do Banco — BNDES",
        "url": "https://blogdodesenvolvimento.bndes.gov.br/categoria/economia-e-desenvolvimento/Apoio-a-infraestrutura-nas-origens-do-Banco/",
        "note": "Retrospectiva institucional publicada em 7/3/2019 e atualizada em 15/9/2025, adaptada de duas histórias do Banco. O corpo integral foi lido pelo pesquisador native14; nesta revisão, foi recuperado integralmente no índice da própria página após falhas de abertura direta. Trata de 1951–1953, crédito multissetorial nos anos 1950 e Plano de Metas de 1956–1960. Não é documento contemporâneo de cada operação nem mede toda a economia."
      },
      {
        "title": "Cancelamento de registro do Partido Comunista Brasileiro — TSE",
        "url": "https://www.tse.jus.br/jurisprudencia/julgados-historicos/cancelamento-de-registro-do-partido-comunista-brasileiro",
        "note": "Narrativa institucional e notas efetivamente lidas pelo pesquisador native14; não se certificam imagens dos julgamentos. Relata decisão dividida em 7/5/1947, fechamento do partido e perda de mandatos em janeiro de 1948, além de controvérsias posteriores. A abertura direta desta revisão retornou página sem corpo; as seções de cancelamento e extinção de mandatos foram então lidas no índice da própria página, incluindo voto divergente e controvérsias de 1949. A leitura integral continua atribuída ao relatório recebido."
      }
    ],
    "kind": "country",
    "category": "historical-country",
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
      "rel": 60,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "est": "medium",
      "rep": "medium",
      "pod": "medium",
      "dip": "medium",
      "rel": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Constituição brasileira1946 — Câmara dos Deputados, republicação"
        ],
        "rationale": "Autonomia federativa efetiva no desenho sustenta direção moderada descentralizada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Competências nacionais amplas, intervenção e Distrito Federal administrado por prefeito nomeado; capitais e bases militares têm exceções à eleição municipal. Não prática federativa integral."
      },
      "rep": {
        "sourceTitles": [
          "Constituição brasileira1946 — Câmara dos Deputados, republicação"
        ],
        "rationale": "Estrutura eletiva renovável e representação plural sustentam desenho democrático moderado. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Exclui analfabetos, quem não se exprime na língua nacional e parte das praças militares; partidos contrários ao regime plural podem ser proibidos. Não certifica eleições livres de toda coerção observada."
      },
      "pod": {
        "sourceTitles": [
          "Constituição brasileira1946 — Câmara dos Deputados, republicação"
        ],
        "rationale": "Conjunto de garantias ordinárias sustenta direção moderada de liberdade normativa. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Censura de diversões, proibição partidária e exceção disciplinar ao habeas; estado de sítio permite detenção, desterro, censura e suspensão de reunião, sujeito a duração e controle parlamentar/judicial. Não ausência de repressão."
      },
      "dip": {
        "sourceTitles": [
          "Constituição brasileira1946 — Câmara dos Deputados, republicação"
        ],
        "rationale": "Regra geral da política de guerra sustenta direção pacífica moderada, como norma. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Mantém defesa armada e serviço militar obrigatório; não pacifismo absoluto nem conduta externa efetivamente auditada."
      },
      "rel": {
        "sourceTitles": [
          "Constituição brasileira1946 — Câmara dos Deputados, republicação"
        ],
        "rationale": "Relação geral entre Estado e religião sustenta secularismo moderado. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Permite colaboração de interesse coletivo, isenção de templos, assistência religiosa militar, ensino religioso facultativo e representação junto à Santa Sé; culto limitado por ordem pública/bons costumes."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constituição brasileira1946 — Câmara dos Deputados, republicação",
            "locator": "Arts.1–2,18,28; contrapontos5/7–14/25–26/28§§1–2",
            "statement": "Estados possuem constituições e poderes reservados; municípios administram interesses locais e rendas.",
            "basis": "norm",
            "publishedDate": "1946-09-18",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Autonomia federativa efetiva no desenho sustenta direção moderada descentralizada.",
        "uncertainty": "Competências nacionais amplas, intervenção e Distrito Federal administrado por prefeito nomeado; capitais e bases militares têm exceções à eleição municipal. Não prática federativa integral.",
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
            "sourceTitle": "Constituição brasileira1946 — Câmara dos Deputados, republicação",
            "locator": "Arts.37–38,56–60,131–134; contrapontos132/135/141§13",
            "statement": "Legislaturas periódicas e sufrágio direto/secreto com representação proporcional e ambos os sexos.",
            "basis": "norm",
            "publishedDate": "1946-09-18",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Estrutura eletiva renovável e representação plural sustentam desenho democrático moderado.",
        "uncertainty": "Exclui analfabetos, quem não se exprime na língua nacional e parte das praças militares; partidos contrários ao regime plural podem ser proibidos. Não certifica eleições livres de toda coerção observada. A retrospectiva do TSE registra exclusão do PCB em 1947–1948; a direção codifica o desenho constitucional, não liberdade ou participação uniformes na execução.",
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
            "sourceTitle": "Constituição brasileira1946 — Câmara dos Deputados, republicação",
            "locator": "Art.141§§1–6/11–12/15/20–31; contrapontos141§§5/13/23 e206–215",
            "statement": "Direitos gerais, controle judicial, processo/defesa, privacidade, expressão e habeas corpus.",
            "basis": "norm",
            "publishedDate": "1946-09-18",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Conjunto de garantias ordinárias sustenta direção moderada de liberdade normativa.",
        "uncertainty": "Censura de diversões, proibição partidária e exceção disciplinar ao habeas; estado de sítio permite detenção, desterro, censura e suspensão de reunião, sujeito a duração e controle parlamentar/judicial. Não ausência de repressão. A retrospectiva do TSE registra exclusão do PCB em 1947–1948; a direção codifica o desenho constitucional, não liberdade ou participação uniformes na execução.",
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
            "sourceTitle": "Constituição brasileira1946 — Câmara dos Deputados, republicação",
            "locator": "Art.4; contrapontos5II–VI e176–181",
            "statement": "Guerra depende do fracasso de meios pacíficos; guerra de conquista é categoricamente excluída.",
            "basis": "norm",
            "publishedDate": "1946-09-18",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Regra geral da política de guerra sustenta direção pacífica moderada, como norma.",
        "uncertainty": "Mantém defesa armada e serviço militar obrigatório; não pacifismo absoluto nem conduta externa efetivamente auditada.",
        "reviewedOn": "2026-10-08",
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
        "claims": [
          {
            "sourceTitle": "Constituição brasileira1946 — Câmara dos Deputados, republicação",
            "locator": "Arts.31II–III,141§§7–10; contrapontos31Vb/168V/196",
            "statement": "Proíbe estabelecimento/subvenção de cultos e aliança/dependência de igrejas; garante crença e cemitérios seculares.",
            "basis": "norm",
            "publishedDate": "1946-09-18",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Relação geral entre Estado e religião sustenta secularismo moderado.",
        "uncertainty": "Permite colaboração de interesse coletivo, isenção de templos, assistência religiosa militar, ensino religioso facultativo e representação junto à Santa Sé; culto limitado por ordem pública/bons costumes.",
        "reviewedOn": "2026-10-08",
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
            "sourceTitle": "Constituição brasileira1946 — Câmara dos Deputados, republicação",
            "locator": "Título V, arts.145–151; art.5º, IX–XV; contraste art.205",
            "statement": "A ordem econômica concilia iniciativa privada e trabalho com intervenção legal, regulação de crédito e tarifas; o conselho econômico é consultivo, não um comando da produção.",
            "basis": "norm",
            "publishedDate": "1946-09-18",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Apoio à infraestrutura nas origens do Banco — BNDES",
            "locator": "Corpo: comissão de 1951–1953; crédito a energia, transporte e outros ramos industriais; seção Plano de Metas",
            "statement": "Planos nacionais selecionam gargalos e orientam investimentos de longo prazo em infraestrutura e indústria, com banco público estruturando financiamento e implantação de metas.",
            "basis": "practice",
            "publishedDate": "2019-03-07; atualização 2025-09-15",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "A seleção de prioridades, projetos e crédito articula setores interdependentes numa estratégia de desenvolvimento nacional. Isso sustenta coordenação pública moderada da alocação, além da mera existência de agência ou orçamento.",
        "uncertainty": "60 é âncora editorial moderada, não parcela de produção planejada. A Constituição protege iniciativa e direitos; investimentos privados e estrangeiros permanecem. A retrospectiva privilegia o papel do Banco e exemplos de 1951–1960; não prova comando integral, execução de todas as metas ou continuidade até 1964.",
        "reviewedOn": "2026-10-08"
      }
    },
    "documentaryReview": {
      "status": "author-reviewed-bounded-claims",
      "reviewedOn": "2026-10-08",
      "independentReview": "accepted-bounded-primary-and-identity",
      "scope": "Autoria leu passagens primárias e cronologia institucional; passagens codificadas e cronologia cotejadas independentemente; prática histórica não auditada integralmente, sem auditoria integral da prática."
    },
    "unknownAxisReasons": {
      "imi": "Entrada geral em paz142 contraposta à seleção por interesse nacional162, incorporação indígena5XV r e ensino primário em língua nacional168I; direção global não resolvida pela autoria.",
      "int": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "eco": "145 concilia iniciativa livre e justiça social;146/147 permitem intervenção/monopólio/distribuição sem estabelecer propriedade produtiva geral predominante. Crédito rural150 ou educação pública não resolvem o eixo.",
      "con": "Conselho205 estuda e sugere, sem programa obrigatório de alocação geral; planos regionais198/199 não equivalem a planejamento integral da economia.",
      "com": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "mor": "Casamento indissolúvel163 e igualdade salarial157II não foram convertidos em direção moral global; não há cotejo suficiente de todos os domínios.",
      "tec": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação."
    }
  }
] as unknown as ReferenceEntry[];
export const native14HistoricalCountriesProposals:ReferenceEntry[]=proposalInputs.map(input=>{
 const before=native14HistoricalCountriesBefore.find(item=>item.id===input.id)!;
 const result:ReferenceEntry={...input,vec:Object.fromEntries(AXIS_KEYS.map(key=>[key,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{}};
 for(const axis of AXIS_KEYS){const raw=input.coding?.[axis];if(!raw)continue;
 const encoded=codeReferenceAxis(raw as ReferenceAxisCoding,input.sources);
 const unchanged=JSON.stringify(raw)===JSON.stringify(before.coding?.[axis]);
 result.vec[axis]=encoded.value;result.evidence![axis]=unchanged?before.evidence![axis]:encoded.evidence;
 result.axisEvidence![axis]=unchanged?before.axisEvidence![axis]:encoded.axisEvidence;
 result.coding![axis]=unchanged?before.coding![axis]:encoded.coding;
 }return result;
});
export function reconcileNative14HistoricalCountries(records:readonly ReferenceEntry[]):ReferenceEntry[]{
 return records.map(record=>{const before=native14HistoricalCountriesBefore.find(item=>item.id===record.id);if(!before||JSON.stringify(record)!==JSON.stringify(before))return record;
 return native14HistoricalCountriesProposals.find(item=>item.id===record.id)!;});
}
