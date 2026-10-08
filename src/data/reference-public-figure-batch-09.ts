import type { ReferenceEntry, ReferenceSource } from './references';
import { AXES } from '../lib/scoring';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';
export interface PublicFigureBatch09Spec {id:string;name:string;aliases?:string[];period:string;sources:ReferenceSource[];coding:ReferenceAxisCoding[];caveats:string;identityReview:'author-current-source-checked';}
export const publicFigureBatch09Specs: PublicFigureBatch09Spec[] = [
  {
    "id": "andrej-babis",
    "name": "Andrej Babiš",
    "aliases": [
      "Andrej Babis"
    ],
    "period": "Programa coletivo explicitamente endossado05/01/2026",
    "sources": [
      {
        "title": "Andrej Babiš — programa governamental pessoalmente endossado,05/01/2026",
        "url": "https://vlada.gov.cz/cz/vlada/programove-prohlaseni/programove-prohlaseni-vlady-224629/",
        "note": "Programa coletivo oficial05/01/2026 pessoalmente endossado na coletiva própria36/41. Áreas codificadas e contrapontos efetivamente lidos; não relatório de execução nem leitura integral."
      },
      {
        "title": "Andrej Babiš — coletiva própria05/01/2026",
        "url": "https://vlada.gov.cz/cz/media-centrum/tiskove-konference/tiskova-konference-po-jednani-vlady--5--ledna-2026-224664/",
        "note": "Data35, falas próprias36–53/98–103 realmente lidas: endosso36/41 e atividade2026. Falas de ministros55–93 não atribuídas a Babiš."
      }
    ],
    "coding": [
      {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Andrej Babiš — programa governamental pessoalmente endossado,05/01/2026",
            "locator": "Corpo186–188/291/294/693; endosso próprio36/41",
            "statement": "Defende referendo, expressão livre e independência dos meios públicos.",
            "basis": "declaration",
            "publishedDate": "2026-01-05",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Orientação democrática declarada.",
        "uncertainty": "Referendo exclui EU/NATO294; restrição ao financiamento político de ONGs123–124; não prática certificada.",
        "relatedQuestionIds": [
          "representacao_03",
          "representacao_09",
          "representacao_19"
        ],
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "dip",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Andrej Babiš — programa governamental pessoalmente endossado,05/01/2026",
            "locator": "Corpo201–219/249; endosso próprio36/41",
            "statement": "Prioriza capacidades militares nacionais e compromissos de defesa aliados.",
            "basis": "declaration",
            "publishedDate": "2026-01-05",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Segurança por defesa armada.",
        "uncertainty": "Limites207–213 e diplomacia249;211 rejeita mudança sistêmica de tamanho, enquanto220 amplia pessoal.",
        "relatedQuestionIds": [
          "diplomacia_01",
          "diplomacia_03"
        ],
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "tec",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Andrej Babiš — programa governamental pessoalmente endossado,05/01/2026",
            "locator": "Corpo310–312/554–555/619–651/835–869; endosso próprio36/41",
            "statement": "Promove nuclear, IA em saúde/indústria e automação pública.",
            "basis": "declaration",
            "publishedDate": "2026-01-05",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Adoção tecnológica multissetorial.",
        "uncertainty": "Proteção seletiva ambiental619–651; regras éticas e alternativa não digital835/849/854.",
        "relatedQuestionIds": [
          "tecnologia_01",
          "tecnologia_02"
        ],
        "reviewedOn": "2026-10-08"
      }
    ],
    "caveats": "Programa coletivo pessoalmente endossado; não prática auditada ou opinião privada. Sem atribuir falas de ministros. Nove eixos desconhecidos; revisão documental independente delimitada.",
    "identityReview": "author-current-source-checked"
  }
];
/** No selected dormant identity: no original record discarded or overwritten. */
export const publicFigureBatch09OriginalRecords: ReferenceEntry[] = [];
export const publicFigureBatch09: ReferenceEntry[] = publicFigureBatch09Specs.map(spec=>{
 const entry: ReferenceEntry={id:spec.id,name:spec.name,aliases:spec.aliases,kind:'person',category:'public-figure',period:spec.period,sources:spec.sources,caveats:spec.caveats,rationale:'Programa pessoalmente endossado; orientação ampla e contrapontos explícitos.',vec:Object.fromEntries(AXES.map(({key})=>[key,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{}};
 for(const input of spec.coding){const coded=codeReferenceAxis(input,spec.sources);entry.vec[input.axis]=coded.value;entry.evidence[input.axis]=coded.evidence;entry.axisEvidence![input.axis]=coded.axisEvidence;entry.coding![input.axis]=coded.coding;}
 return entry;
});
