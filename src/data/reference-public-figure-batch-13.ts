import type { ReferenceEntry, ReferenceSource } from './references';
import { AXES } from '../lib/scoring';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';
export interface PublicFigureBatch13Spec {id:string;name:string;aliases?:string[];period:string;sources:ReferenceSource[];coding:ReferenceAxisCoding[];caveats:string;identityReview:'author-current-source-checked';}
export const publicFigureBatch13Specs: PublicFigureBatch13Spec[] = [
  {
    "id": "michelle-bachelet",
    "name": "Michelle Bachelet",
    "aliases": [
      "Michelle Bachelet Jeria"
    ],
    "period": "Programa pessoalmente assinado18/10/2005 para2006–2010; atividade30/09/2026",
    "sources": [
      {
        "title": "Michelle Bachelet — Programa de Gobierno,18/10/2005",
        "url": "https://www.bcn.cl/obtienearchivo?id=documentos/10221.1/13433/1/2005_programa-MB.pdf",
        "note": "BCN PDF102p; apresentação assinada e trechos delimitados lidos, não integralmente."
      },
      {
        "title": "El País — atividade de Bachelet,01/10/2026",
        "url": "https://elpais.com/chile/2026-10-01/bachelet-en-un-homenaje-tras-retirar-su-candidatura-a-la-onu-quienes-pensaban-que-me-iba-a-ir-para-la-casa-les-tengo-una-mala-noticia.html",
        "note": "Cabeçalho25–33 e corpo59–84 lidos: evento30/09/2026, identidade apenas; imagem não examinada."
      }
    ],
    "coding": [
      {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Michelle Bachelet — Programa de Gobierno,18/10/2005",
            "locator": "PDF linhas3928–3981/4229–4240/4574–4577/4675–4688; endosso assinado6–78",
            "statement": "Amplia participação, eleições regionais, transparência e expressão.",
            "basis": "declaration",
            "publishedDate": "2005-10-18",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Democracia participativa.",
        "uncertainty": "Instituições constitucionais; execução não certificada.",
        "relatedQuestionIds": [
          "representacao_03",
          "representacao_07",
          "representacao_19"
        ],
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "imi",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Michelle Bachelet — Programa de Gobierno,18/10/2005",
            "locator": "PDF linhas4397–4412/4578–4587/4695–4757/4812–4825; endosso assinado6–78",
            "statement": "Preserva identidades culturais e línguas indígenas com educação intercultural.",
            "basis": "declaration",
            "publishedDate": "2005-10-18",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Pluralismo cultural amplo.",
        "uncertainty": "Valoriza também patrimônio nacional; não fronteiras irrestritas.",
        "relatedQuestionIds": [
          "imigracao_02",
          "imigracao_04",
          "imigracao_08"
        ],
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "int",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Michelle Bachelet — Programa de Gobierno,18/10/2005",
            "locator": "PDF linhas5049–5054/5233–5239; endosso assinado6–78",
            "statement": "Endossa responsabilidade de proteger e forças internacionais de paz.",
            "basis": "declaration",
            "publishedDate": "2005-10-18",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Intervenção multilateral delimitada.",
        "uncertainty": "Paz/direito4957–4960 e defesa dissuasiva5215–5224; não invasão unilateral.",
        "relatedQuestionIds": [
          "intervencao_05",
          "intervencao_07"
        ],
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "com",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Michelle Bachelet — Programa de Gobierno,18/10/2005",
            "locator": "PDF linhas4967–4989/5022–5030; endosso assinado6–78",
            "statement": "Amplia livre comércio e remove barreiras comerciais.",
            "basis": "declaration",
            "publishedDate": "2005-10-18",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Abertura comercial geral.",
        "uncertainty": "Promoção de exportadores locais4987–4991; não tarifa zero.",
        "relatedQuestionIds": [
          "comercio_04",
          "comercio_10"
        ],
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Michelle Bachelet — Programa de Gobierno,18/10/2005",
            "locator": "PDF linhas4445–4499/4545–4559; endosso assinado6–78",
            "statement": "Amplia direitos sexuais, igualdade de gênero e uniões civis diversas.",
            "basis": "declaration",
            "publishedDate": "2005-10-18",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Reformas morais inclusivas.",
        "uncertainty": "União civil básica, não casamento igualitário ou aborto irrestrito.",
        "relatedQuestionIds": [
          "moral_07",
          "moral_11"
        ],
        "reviewedOn": "2026-10-08"
      }
    ],
    "caveats": "Declarações de programa2005 pessoalmente assinado, não prática nem posições2026. Sete eixos desconhecidos; descentralização administrativa preservada apenas como pesquisa, sem autonomia legislativa regional comprovada. Revisão documental independente delimitada e julgamento do Root aceitos; programa2013 inacessível não codificado.",
    "identityReview": "author-current-source-checked"
  }
];
/** No selected dormant identity: no original record discarded or overwritten. */
export const publicFigureBatch13OriginalRecords: ReferenceEntry[] = [];
export const publicFigureBatch13: ReferenceEntry[] = publicFigureBatch13Specs.map(spec=>{
 const entry: ReferenceEntry={id:spec.id,name:spec.name,aliases:spec.aliases,kind:'person',category:'public-figure',period:spec.period,sources:spec.sources,caveats:spec.caveats,rationale:'Programa pessoalmente endossado; orientação ampla e contrapontos explícitos.',vec:Object.fromEntries(AXES.map(({key})=>[key,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{}};
 for(const input of spec.coding){const coded=codeReferenceAxis(input,spec.sources);entry.vec[input.axis]=coded.value;entry.evidence[input.axis]=coded.evidence;entry.axisEvidence![input.axis]=coded.axisEvidence;entry.coding![input.axis]=coded.coding;}
 return entry;
});

/** Research retained outside graded entries: service devolution does not establish legislative federalism. */
export const publicFigureBatch13ResearchCoding: ReferenceAxisCoding[] = [
  {
    "axis": "est",
    "position": "moderate-first",
    "confidence": "medium",
    "claims": [
      {
        "sourceTitle": "Michelle Bachelet — Programa de Gobierno,18/10/2005",
        "locator": "PDF linhas4229–4240/4274–4287/4344–4366; endosso assinado6–78",
        "statement": "Transfere responsabilidades territoriais e amplia autonomia regional.",
        "basis": "declaration",
        "publishedDate": "2005-10-18",
        "accessedDate": "2026-10-08"
      }
    ],
    "rationale": "Descentralização multissetorial.",
    "uncertainty": "Transferência gradual conforme capacidade; não separação territorial.",
    "relatedQuestionIds": [
      "estrutura_03",
      "estrutura_08"
    ],
    "reviewedOn": "2026-10-08"
  }
];
