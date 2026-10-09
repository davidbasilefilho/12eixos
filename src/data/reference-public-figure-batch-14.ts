import type { ReferenceEntry, ReferenceSource } from './references';
import { AXES } from '../lib/scoring';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';
export interface PublicFigureBatch14Spec {id:string;name:string;aliases?:string[];period:string;sources:ReferenceSource[];coding:ReferenceAxisCoding[];caveats:string;identityReview:'author-current-source-checked';}
export const publicFigureBatch14Specs: PublicFigureBatch14Spec[] = [
  {
    "id": "dilma-rousseff",
    "name": "Dilma Rousseff",
    "aliases": [
      "Dilma Vana Rousseff"
    ],
    "period": "Discurso próprio01/01/2015; atividade institucional12/09/2026",
    "sources": [
      {
        "title": "Dilma Rousseff — discurso de posse,01/01/2015",
        "url": "https://www.camara.leg.br/noticias/448217-integra-do-discurso-de-posse-da-presidente-dilma-rousseff-no-congresso/",
        "note": "Transcrição própria: cabeçalho23 e corpo26–144 efetivamente lidos."
      },
      {
        "title": "NDB — participação no18º BRICS Summit,12/09/2026",
        "url": "https://www.ndb.int/event/ndb-at-the-18th-brics-summit/",
        "note": "Corpo81–86 efetivamente lido, data e atividade atuais; identidade apenas."
      },
      {
        "title": "NDB — pronunciamento próprio de Dilma no18º BRICS Summit",
        "url": "https://www.ndb.int/insights/address-by-ndb-president-dilma-rousseff-at-the-18th-brics-summit-open-plenary-session/",
        "note": "Corpo92–113 efetivamente lido; data de fala vem do evento institucional, não cabeçalho editorial. Não codificado no recorte2015."
      },
      {
        "title": "ABMES — programa atribuído à candidatura Dilma2014, pesquisa não codificada",
        "url": "https://abmes.org.br/arquivos/documentos/prog-de-governo-dilma-2014-internet1.pdf",
        "note": "Programa coletivo42p parcialmente lido, sem assinatura ou endosso pessoal localizado; preservado como pesquisa, não usado para graduar."
      }
    ],
    "coding": [
      {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Dilma Rousseff — discurso de posse,01/01/2015",
            "locator": "Transcrição linhas50/112/132",
            "statement": "Defende autoridade constitucional, participação política e instituições parlamentares.",
            "basis": "declaration",
            "publishedDate": "2015-01-01",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Representação democrática.",
        "uncertainty": "Não certifica eleição ou execução.",
        "relatedQuestionIds": [
          "representacao_03",
          "representacao_15"
        ],
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "int",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Dilma Rousseff — discurso de posse,01/01/2015",
            "locator": "Transcrição linhas105–108",
            "statement": "Afirma soberania e princípio geral de não intervenção.",
            "basis": "declaration",
            "publishedDate": "2015-01-01",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Não intervenção.",
        "uncertainty": "Diplomacia e cooperação multilaterais106–108; não isolamento.",
        "relatedQuestionIds": [
          "intervencao_01",
          "intervencao_09"
        ],
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "tec",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Dilma Rousseff — discurso de posse,01/01/2015",
            "locator": "Transcrição linhas73/80/103–108",
            "statement": "Promove inovação produtiva, banda larga universal e cooperação científica.",
            "basis": "declaration",
            "publishedDate": "2015-01-01",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Adoção tecnológica transversal.",
        "uncertainty": "Compromissos climáticos103–104; não liberação genética irrestrita.",
        "relatedQuestionIds": [
          "tecnologia_02"
        ],
        "reviewedOn": "2026-10-08"
      }
    ],
    "caveats": "Declarações próprias2015, não execução nem posições2026. Nove eixos desconhecidos. Programa coletivo2014 preservado como pesquisa sem endosso pessoal localizado. REP/INT/TEC aceitos pelo Root; POD exige restrição civil específica, preservado somente como pesquisa.",
    "identityReview": "author-current-source-checked"
  }
];
/** No selected dormant identity: no original record discarded or overwritten. */
export const publicFigureBatch14OriginalRecords: ReferenceEntry[] = [];
export const publicFigureBatch14: ReferenceEntry[] = publicFigureBatch14Specs.map(spec=>{
 const entry: ReferenceEntry={id:spec.id,name:spec.name,aliases:spec.aliases,kind:'person',category:'public-figure',period:spec.period,sources:spec.sources,caveats:spec.caveats,rationale:'Programa pessoalmente endossado; orientação ampla e contrapontos explícitos.',vec:Object.fromEntries(AXES.map(({key})=>[key,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{}};
 for(const input of spec.coding){const coded=codeReferenceAxis(input,spec.sources);entry.vec[input.axis]=coded.value;entry.evidence[input.axis]=coded.evidence;entry.axisEvidence![input.axis]=coded.axisEvidence;entry.coding![input.axis]=coded.coding;}
 return entry;
});


/** Research only: ordinary enforcement does not establish broad coercive civil-power orientation. */
export const publicFigureBatch14ResearchCoding: ReferenceAxisCoding[] = [
  {
    "axis": "pod",
    "position": "moderate-first",
    "confidence": "medium",
    "claims": [
      {
        "sourceTitle": "Dilma Rousseff — discurso de posse,01/01/2015",
        "locator": "Transcrição linhas98–100/115–117",
        "statement": "Propõe comando policial e inteligência nacionais, punição e confisco mais rigorosos.",
        "basis": "declaration",
        "publishedDate": "2015-01-01",
        "accessedDate": "2026-10-08"
      }
    ],
    "rationale": "Segurança nacional delimitada.",
    "uncertainty": "Devido processo117 e liberdades50/130; não vigilância ilimitada ou mandados coletivos.",
    "relatedQuestionIds": [
      "poder_01",
      "poder_04"
    ],
    "reviewedOn": "2026-10-08"
  }
];
