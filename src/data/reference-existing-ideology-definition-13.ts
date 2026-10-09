import type {ReferenceEntry} from './references';
export const existingIdeologyDefinition13PreviousSnapshot={
  "id": "ideology-left-black-panther-platform",
  "name": "Programa do Black Panther Party",
  "period": "What We Want, What We Believe, edição de 1966",
  "rationale": "A plataforma do partido articula autodefesa e autodeterminação negra com emprego, moradia, educação e controle comunitário.",
  "caveats": "Este item registra um programa partidário negro de libertação e organização comunitária, distinto do anarquismo negro. Não projeta suas demandas históricas para debates contemporâneos sobre raça, segurança ou imigração.",
  "sources": [
    {
      "title": "What We Want, What We Believe: The Black Panther Party Platform and Program",
      "url": "https://www.marxists.org/history/usa/workers/black-panthers/1966/10/15.htm",
      "note": "Plataforma primária dos Panteras Negras, publicada em 1966, com dez demandas e explicação política."
    }
  ],
  "kind": "ideology",
  "category": "ideology",
  "vec": {
    "est": 50,
    "rep": 50,
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
  "evidence": {},
  "axisEvidence": {}
} as const;
const definition={
  "name": "Programa constitucional e comunitário Black Panther, 1966",
  "period": "Plataforma de 15 outubro 1966; transcrição corrigida MIA 2001 a partir da fonte Newton 1980, sem colação original",
  "rationale": "Exige autodeterminação comunitária, emprego e moradia com ação federal condicional, e júris constitucionais da própria comunidade.",
  "caveats": "Demandas históricas condicionais, não endosso irrestrito do Estado. Compartilha pedidos de ajuda pública com Ervin, mas diverge da recusa de jurisdição estatal em zonas libertadas. A correção MIA exclui o trecho fabricado de plebiscito da ONU; afirmações legais e prática não verificadas.",
  "sources": [
    {
      "title": "Black Panther 1966 platform — corrected MIA primary transcription",
      "url": "https://www.marxists.org/history/usa/workers/black-panthers/1966/10/15.htm",
      "note": "Texto próprio 9–54, fonte/correção 57–61 efetivamente lidos por autor e peer; §§2/4 dever federal/produção e moradia condicionais, §9 júri constitucional comunitário. Newton 1980 é fonte da reprodução, não data do programa; falsa cláusula ONU expressamente excluída."
    }
  ]
} as const;
function canonical(v:unknown):string{if(Array.isArray(v))return '['+v.map(canonical).join(',')+']';if(v!==null&&typeof v==='object')return '{'+Object.entries(v).sort(([a],[b])=>a.localeCompare(b)).map(([k,x])=>JSON.stringify(k)+':'+canonical(x)).join(',')+'}';return JSON.stringify(v)}
function reviewed(x:ReferenceEntry):ReferenceEntry{const {sources,...fields}=definition;return {...x,...fields,sources:[...x.sources,...sources]}}
export function reconcileExistingIdeologyDefinition13(x:ReferenceEntry):ReferenceEntry{if(x.id!==existingIdeologyDefinition13PreviousSnapshot.id)return x;const previous=existingIdeologyDefinition13PreviousSnapshot as unknown as ReferenceEntry;if(canonical(x)===canonical(reviewed(previous)))return x;if(canonical(x)!==canonical(previous))throw new Error('Definition13 changed full baseline: '+x.id);return reviewed(x)}
export const existingIdeologyDefinition13Audit={reviewedOn:'2026-10-08',integrationStatus:'Accepted existing BPP alignment integrated in working tree',scope:'Already existing qualifying1966 normative alternative for approved selectedCWL replacement; no rawgrowth or codes; whole literal original archived and sourceobjects retained.'} as const;
