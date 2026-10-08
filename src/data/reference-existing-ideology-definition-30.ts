import type {ReferenceEntry} from './references';
export const existingIdeologyDefinition30PreviousSnapshot={
  "id": "ideology-mutualism",
  "category": "ideology",
  "kind": "ideology",
  "name": "Mutualismo: posse e igualdade de remuneração em Proudhon, 1840",
  "period": "What Is Property?1840, capítuloV e proposições de posse/igualdade; tradução arquivada sem colação francesa",
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
  "rationale": "Defende posse, associação e reciprocidade econômica, rejeitando salários desiguais baseados em capacidades distintas.",
  "caveats": "Não abrange todos escritos1840–1851 ou variantes mutualistas. Posse/competição compartilhadas com Tucker. Generalizações históricas e exclusões sexistas do próprio texto não são validadas.",
  "sources": [
    {
      "title": "What Is Property? — Marxists Internet Archive",
      "url": "https://www.marxists.org/reference/subject/economics/proudhon/property/",
      "note": "Texto primário de Proudhon sobre propriedade, posse e associação."
    },
    {
      "title": "Mutualismo: posse e igualdade de remuneração em Proudhon, 1840 — primary bounded definition audit",
      "url": "https://www.marxists.org/reference/subject/economics/proudhon/property/ch05.htm",
      "note": "What Is Property?1840, capítuloV e proposições de posse/igualdade; tradução arquivada sem colação francesa. Não abrange todos escritos1840–1851 ou variantes mutualistas. Posse/competição compartilhadas com Tucker. Generalizações históricas e exclusões sexistas do próprio texto não são validadas."
    }
  ],
  "evidence": {},
  "axisEvidence": {}
} as const;
const proposedCaveats="Não abrange todos escritos1840–1851 ou variantes mutualistas. Posse/competição compartilhadas com Tucker. Generalizações históricas e exclusões sexistas do próprio texto não são validadas. No capítulo V, nota 4, Proudhon nega sociedade e companheirismo reais entre mulheres e homens e rejeita a emancipação feminina; sua inclinação condicional à exclusão não é apresentada aqui como lei vigente. A nota deixa direitos e legislação civil e matrimonial para definição futura. A igualdade associativa defendida no texto não pode ser generalizada sem essa restrição de gênero.";
function canonical(v:unknown):string{if(Array.isArray(v))return '['+v.map(canonical).join(',')+']';if(v!==null&&typeof v==='object')return '{'+Object.entries(v).sort(([a],[b])=>a.localeCompare(b)).map(([k,x])=>JSON.stringify(k)+':'+canonical(x)).join(',')+'}';return JSON.stringify(v)}
export function reconcileExistingIdeologyDefinition30(x:ReferenceEntry):ReferenceEntry{if(x.id!==existingIdeologyDefinition30PreviousSnapshot.id)return x;const p=existingIdeologyDefinition30PreviousSnapshot as unknown as ReferenceEntry;const post={...p,caveats:proposedCaveats};if(canonical(x)===canonical(post))return x;if(canonical(x)!==canonical(p))throw new Error('Definition30 changed full baseline: '+x.id);return {...x,caveats:proposedCaveats}}
export const existingIdeologyDefinition30Audit={reviewedOn:'2026-10-08',integrationStatus:'Root exact accepted payload integrated in frozen NEXT07 workingtree against836d765; commit pending',allowedFields:['caveats'],source:'Existing actual ChVfootnote4 source retained unchanged; membershippair Rootaccepted8Oct',scope:'Full current LIVE prior archived; all numeric/coding/source/description/date fields and object identities preserved. No new score, source, identity or raw count.'} as const;
