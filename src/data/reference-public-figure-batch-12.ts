import type { ReferenceEntry, ReferenceSource } from './references';
import { AXES } from '../lib/scoring';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';
export interface PublicFigureBatch12Spec {id:string;name:string;aliases?:string[];period:string;sources:ReferenceSource[];coding:ReferenceAxisCoding[];caveats:string;identityReview:'author-current-source-checked';}
export const publicFigureBatch12Specs: PublicFigureBatch12Spec[] = [
  {
    "id": "jeannette-jara",
    "name": "Jeannette Jara",
    "aliases": [
      "Jeannette Jara Román",
      "Jeannette Jara Roman"
    ],
    "period": "Lineamientos próprios endossados, agosto2025; identidade/atividade01/09/2026",
    "sources": [
      {
        "title": "Jeannette Jara — Un Chile que cumple, agosto2025",
        "url": "https://centrocompetencia.com/wp-content/uploads/2025/09/Programa_Jeannette_Jara_2025.pdf",
        "note": "PDF62p; capa, apresentação assinada e áreas delimitadas lidas; edição agosto2025, sem dia certificado. Escopo exato no relatório."
      },
      {
        "title": "PC Chile — apresentação do programa,18/08/2025",
        "url": "https://pcchile.cl/2025/08/18/lineamientos-programaticos-jeannette-jara-2025/",
        "note": "Cabeçalho21–23 e corpo29–30 lidos: publicação/atribuição apenas."
      },
      {
        "title": "BioBioChile — atividade de Jeannette Jara,01/09/2026",
        "url": "https://www.biobiochile.cl/noticias/nacional/chile/2026/09/01/jeannette-jara-celebra-alza-de-la-pgu-y-acusa-a-republicanos-de-celebrar-hoy-lo-que-antes-rechazaron.shtml",
        "note": "Data103 e corpo136–153 lidos: identidade/atividade apenas; resumo IA134–135 excluído; fotografia de arquivo não certificada."
      }
    ],
    "coding": [
      {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Jeannette Jara — Un Chile que cumple, agosto2025",
            "locator": "Physicalp3–4,26–38; p7,101–115",
            "statement": "Defende participação democrática e diálogo entre posições divergentes contra soluções autoritárias.",
            "basis": "declaration",
            "publishedDate": "Agosto2025 — edição assinada; apresentação18/08/2025",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Democracia plural declarada.",
        "uncertainty": "Não certifica toda regra eleitoral ou execução.",
        "relatedQuestionIds": [
          "representacao_19",
          "representacao_20"
        ],
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "pod",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Jeannette Jara — Un Chile que cumple, agosto2025",
            "locator": "Physicalp25–30,772–790/823–829/871–890/927–942",
            "statement": "Amplia controle de armas, vigilância biométrica, investigação financeira e prisões.",
            "basis": "declaration",
            "publishedDate": "Agosto2025 — edição assinada; apresentação18/08/2025",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Coerção estatal de segurança.",
        "uncertainty": "Proteção de dados829, controle civil910 e reinserção922/937 limitam poder.",
        "relatedQuestionIds": [
          "poder_05",
          "poder_09",
          "poder_18"
        ],
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "com",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Jeannette Jara — Un Chile que cumple, agosto2025",
            "locator": "Physicalp9,177–182; p19–20,538–596",
            "statement": "Preserva acordos comerciais, amplia mercados e facilita comércio internacional.",
            "basis": "declaration",
            "publishedDate": "Agosto2025 — edição assinada; apresentação18/08/2025",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Abertura comercial programática.",
        "uncertainty": "Promoção produtiva seletiva562–595; não tarifa zero.",
        "relatedQuestionIds": [
          "comercio_04",
          "comercio_10"
        ],
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "tec",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Jeannette Jara — Un Chile que cumple, agosto2025",
            "locator": "Physicalp11–13,248–250/311–327; p27,823–829; p38–39,1177–1183/1229–1241",
            "statement": "Expande conectividade, mineração tecnológica, IA e telemedicina.",
            "basis": "declaration",
            "publishedDate": "Agosto2025 — edição assinada; apresentação18/08/2025",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Adoção tecnológica em vários setores.",
        "uncertainty": "Proteção ambiental159/341–344 e crise climática106/127; não aceitação irrestrita.",
        "relatedQuestionIds": [
          "tecnologia_01",
          "tecnologia_07",
          "tecnologia_10"
        ],
        "reviewedOn": "2026-10-08"
      }
    ],
    "caveats": "Programa declarado e datado, não prática ou opinião medida2026. Oito eixos desconhecidos. Edições de maio/outubro não amalgamadas. Revisão documental delimitada aceita pela revisão independente e pelo Root.",
    "identityReview": "author-current-source-checked"
  }
];
/** No selected dormant identity: no original record discarded or overwritten. */
export const publicFigureBatch12OriginalRecords: ReferenceEntry[] = [];
export const publicFigureBatch12: ReferenceEntry[] = publicFigureBatch12Specs.map(spec=>{
 const entry: ReferenceEntry={id:spec.id,name:spec.name,aliases:spec.aliases,kind:'person',category:'public-figure',period:spec.period,sources:spec.sources,caveats:spec.caveats,rationale:'Programa pessoalmente endossado; orientação ampla e contrapontos explícitos.',vec:Object.fromEntries(AXES.map(({key})=>[key,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{}};
 for(const input of spec.coding){const coded=codeReferenceAxis(input,spec.sources);entry.vec[input.axis]=coded.value;entry.evidence[input.axis]=coded.evidence;entry.axisEvidence![input.axis]=coded.axisEvidence;entry.coding![input.axis]=coded.coding;}
 return entry;
});
