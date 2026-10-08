import type {ReferenceEntry} from './references';
export const existingIdeologyDefinition17PreviousSnapshot={
  "id": "civic-deliberative-democracy",
  "kind": "ideology",
  "category": "ideology",
  "name": "Democracia deliberativa",
  "period": "Recomendações da OCDE sobre processos deliberativos, 2020",
  "vec": {
    "est": 50,
    "rep": 92,
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
  "rationale": "Recomenda assembleias representativas por sorteio, informação equilibrada, deliberação pública e resposta institucional.",
  "caveats": "Descreve processos consultivos, não um programa político completo nem substituto das eleições.",
  "sources": [
    {
      "title": "Innovative Citizen Participation and New Democratic Institutions — OECD",
      "url": "https://www.oecd.org/en/publications/innovative-citizen-participation-and-new-democratic-institutions_339306da-en.html",
      "note": "Recomendações sobre deliberação pública, mandato e resposta governamental."
    }
  ],
  "evidence": {
    "rep": "medium"
  },
  "axisEvidence": {
    "rep": {
      "sourceTitles": [
        "Innovative Citizen Participation and New Democratic Institutions — OECD"
      ],
      "rationale": "Prevê grupos cidadãos sorteados que deliberam e recomendam."
    }
  }
} as const;
const definition={
  "name": "Democracia deliberativa: modelo de Habermas, 2006",
  "period": "Political Communication in Media Society, Communication Theory 16(4), 2006, pp 411–426; PDF primário republicado pelo MIT",
  "rationale": "Defende legitimação por discussão pública inclusiva, deliberação institucional e decisões vinculantes de órgãos representativos, com eleições e referendos.",
  "caveats": "Texto normativo identificado de 2006, não comprovação de eficácia comunicativa ou de todas as variantes deliberativas. A fonte OECD 2020 anterior é preservada como contexto, sem atribuir-lhe o programa próprio de Habermas. Discussão pública, eleições e referendos coexistem; não há proibição de votação direta. Dados empíricos e citações de terceiros não certificados como prescrições próprias.",
  "sources": [
    {
      "title": "Political Communication in Media Society — Habermas, Communication Theory16(4),2006,411–426",
      "url": "https://www.mit.edu/~shaslang/mprg/HabermasPCMS.pdf",
      "note": "PDF primário republicado pelo MIT. Foram inspecionadas as linhas 0–373, com revisão adicional dos metadados e dos trechos 35–83, 148–240 e 243–320. As linhas 43–50 tratam de decisões por maioria em órgãos representativos, eleições e referendos; 169–172, de decisões legislativas; e 250–273, do poder vinculante dos cargos, distinto da influência pública. Não se certificam a leitura integral das 574 linhas nem a eficácia empírica do modelo."
    }
  ]
} as const;
function canonical(v:unknown):string{if(Array.isArray(v))return '['+v.map(canonical).join(',')+']';if(v!==null&&typeof v==='object')return '{'+Object.entries(v).sort(([a],[b])=>a.localeCompare(b)).map(([k,x])=>JSON.stringify(k)+':'+canonical(x)).join(',')+'}';return JSON.stringify(v)}
function reviewed(x:ReferenceEntry):ReferenceEntry{const{sources,...fields}=definition;return {...x,...fields,vec:Object.fromEntries(Object.keys(x.vec).map(k=>[k,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{},sources:[...x.sources,...sources]}}
export function reconcileExistingIdeologyDefinition17(x:ReferenceEntry):ReferenceEntry{if(x.id!==existingIdeologyDefinition17PreviousSnapshot.id)return x;const previous=existingIdeologyDefinition17PreviousSnapshot as unknown as ReferenceEntry;if(canonical(x)===canonical(reviewed(previous)))return x;if(canonical(x)!==canonical(previous))throw new Error('Definition17 changed full baseline: '+x.id);return reviewed(x)}
export const existingIdeologyDefinition17Audit={reviewedOn:'2026-10-08',integrationStatus:'External exact payload accepted Root/peer; frozenNEXT05, not imported, outside currentfreeze',comparison:'Habermas2006 own43–50/169–172/250–273 representative binding legislative decisions versus RousseauIII15 own1126/1131 everylaw personalratification/no definitive representative acts. Shared publiclegitimacy/elections/referendums, Rousseau executive representation preserved; slaveryright repudiation1137 retained.',scope:'Explicit additional2006 source/date, never1995 misattribution. Whole priorLIVE archived, active sourceunion preserved, all12unknown/no axis invention; no rawgrowth.'} as const;
