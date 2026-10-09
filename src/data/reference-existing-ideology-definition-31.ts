import type { ReferenceEntry } from './references';
export const existingIdeologyDefinition31PreviousSnapshot={
  "id": "ideology-agrarian-populism",
  "category": "ideology",
  "kind": "ideology",
  "name": "Populismo agrário",
  "period": "Plataforma do People’s Party, Omaha, 1892",
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
  "rationale": "A plataforma defende reforma monetária, regulação ferroviária e maior controle público de infraestrutura em resposta ao endividamento e ao poder corporativo.",
  "caveats": "Este é o movimento agrário-populista norte-americano do século XIX; “populismo” contemporâneo tem usos e políticas muito distintos. A linguagem da época também continha limites excludentes.",
  "sources": [
    {
      "title": "Omaha Platform (1892) — University of Arizona, US History II",
      "url": "https://courses.lumenlearning.com/atd-pima-ushistory2/chapter/primary-source-the-omaha-platform-of-the-peoples-party-1892/",
      "note": "Reprodução didática da plataforma primária do People’s Party sobre crédito, ferrovias, trabalho e propriedade pública."
    }
  ],
  "evidence": {},
  "axisEvidence": {}
} as const;
const fields={
  "name": "Populismo agrário: plataforma de Omaha, 1892",
  "period": "Plataforma do People’s Party, Omaha, 1892; reprodução do texto publicado em A Handbook of Politics for 1892, páginas 269–271",
  "rationale": "Defende moeda emitida pelo governo, crédito direto, imposto graduado sobre renda e infraestrutura pública, com terra para colonos efetivos.",
  "caveats": "Programa específico de 1892, não todos os populismos. A plataforma proíbe propriedade fundiária de estrangeiros; isso não é convertido em regra geral de imigração. As resoluções finais de sentimentos são explicitamente separadas da plataforma, inclusive sua restrição migratória. Mantém proteção contra patronagem administrativa, limita receitas às despesas necessárias e admite meios melhores de distribuição monetária. Reprodução didática com referência bibliográfica, não fac-símile autenticado; acusações históricas e efeitos econômicos não são certificados."
} as const;
const source={
  "title": "Omaha Platform — People’s Party, 1892, reprodução de McPherson",
  "url": "https://courses.lumenlearning.com/suny-jcc-ushistory2os/chapter/primary-source-the-omaha-platform-of-the-peoples-party-1892/",
  "note": "A plataforma principal exige emissão monetária exclusiva pelo governo, imposto graduado sobre renda e propriedade pública de ferrovias e telecomunicações; limita receitas e prevê proteção civil contra patronagem. A cláusula fundiária exclui proprietários estrangeiros. As resoluções finais são expressamente apresentadas como sentimentos separados, não parte da plataforma. A reprodução cita McPherson, A Handbook of Politics for 1892, páginas 269–271; não autentica fac-símile original."
} as const;
function canonical(v:unknown):string{if(Array.isArray(v))return '['+v.map(canonical).join(',')+']';if(v!==null&&typeof v==='object')return '{'+Object.entries(v).sort(([a],[b])=>a.localeCompare(b)).map(([k,x])=>JSON.stringify(k)+':'+canonical(x)).join(',')+'}';return JSON.stringify(v)}
function reviewed(x:ReferenceEntry):ReferenceEntry{return {...x,...fields,vec:Object.fromEntries(Object.keys(x.vec).map(k=>[k,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{},sources:[source,...x.sources]}}
export function reconcileExistingIdeologyDefinition31(x:ReferenceEntry):ReferenceEntry{if(x.id!==existingIdeologyDefinition31PreviousSnapshot.id)return x;const p=existingIdeologyDefinition31PreviousSnapshot as unknown as ReferenceEntry;if(canonical(x)===canonical(reviewed(p)))return x;if(canonical(x)!==canonical(p))throw new Error('Definition31 changed full baseline: '+x.id);return reviewed(x)}
export const existingIdeologyDefinition31Audit={reviewedOn:'2026-10-08',integrationStatus:'Root exact accepted payload integrated in frozen NEXT07 workingtree against836d765; commit pending',scope:'Full actual LIVE archived; original source objects retained, newly inspected source first for usable caption;12unknown, no score or raw growth.',sourceLimits:'Educational text cites1892McPherson269–271; not original facsimile or Arizona attribution certificate.',selection:'Proposed third replacement eurocommunism→existingideology-agrarian-populism Root exactly accepted8Oct2026; requires actual integration proof before activation; original Berlinguer and original75 remain preserved.'} as const;
