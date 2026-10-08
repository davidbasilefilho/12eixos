import type {ReferenceEntry} from './references';
export const existingIdeologyDefinition22PreviousSnapshot={
  "id": "ideology-classical-liberalism",
  "category": "ideology",
  "kind": "ideology",
  "name": "Liberalismo clássico",
  "period": "Segundo tratado sobre o governo civil, 1689",
  "vec": {
    "est": 50,
    "rep": 78,
    "pod": 50,
    "imi": 50,
    "dip": 50,
    "int": 50,
    "eco": 18,
    "con": 50,
    "com": 50,
    "rel": 50,
    "mor": 50,
    "tec": 50
  },
  "rationale": "Locke fundamenta a autoridade política no consentimento e atribui ao governo a proteção dos direitos e da propriedade individual.",
  "caveats": "Este perfil usa uma obra inglesa do século XVII, anterior ao liberalismo democrático moderno; o vetor não abrange as variantes clássicas posteriores.",
  "sources": [
    {
      "title": "Second Treatise of Government — Project Gutenberg",
      "url": "https://www.gutenberg.org/files/7370/7370-h/7370-h",
      "note": "Texto primário de Locke sobre consentimento, maioria, limites do governo e propriedade."
    }
  ],
  "evidence": {
    "rep": "medium",
    "eco": "medium"
  },
  "axisEvidence": {
    "rep": {
      "sourceTitles": [
        "Second Treatise of Government — Project Gutenberg"
      ],
      "rationale": "O governo civil deriva do consentimento e da decisão da maioria, não de autoridade herdada."
    },
    "eco": {
      "sourceTitles": [
        "Second Treatise of Government — Project Gutenberg"
      ],
      "rationale": "Locke defende posse e direitos de propriedade privados, dentro das restrições que descreve sobre apropriação."
    }
  }
} as const;
const definition={
  "name": "Liberalismo de Locke: governo fiduciário, 1690",
  "period": "Segundo tratado sobre o governo civil; texto identificado como 1690 na reprodução Gutenberg, transmitido pela edição Macpherson de 1980, com matéria editorial histórica",
  "rationale": "Defende autoridade fundada no consentimento, proteção de direitos e propriedade e poder legislativo fiduciário que retorna ao povo quando viola seus fins.",
  "caveats": "A reprodução identifica o texto como de 1690 e inclui referências editoriais dos séculos XVIII e XX; não certifica o fac-símile da primeira edição nem resolve a diferença entre publicação em 1689 e data nominal de 1690. A supremacia legislativa ordinária convive com o direito de substituição por quebra da confiança, não com revogação a cada erro de governo. Esta obra não representa todas as variantes liberais nem fundamenta scores numéricos.",
  "sources": [
    {
      "title": "Second Treatise of Government — Locke, reprodução Gutenberg identificada como 1690",
      "url": "https://www.gutenberg.org/files/7370/7370-h/7370-h.htm",
      "note": "Os metadados identificam o texto como de 1690, recuperado da edição de C. B. Macpherson de 1980; a reprodução também inclui matéria editorial histórica. Foram inspecionados os metadados e os capítulos XIII, §149, e XIX, §§221–225: a quebra da confiança permite substituir o legislativo, mas pequenos erros não justificam revolução. A URL anterior permanece preservada como objeto de fonte, sem confundi-la com uma edição original certificada."
    }
  ]
} as const;
function canonical(v:unknown):string{if(Array.isArray(v))return '['+v.map(canonical).join(',')+']';if(v!==null&&typeof v==='object')return '{'+Object.entries(v).sort(([a],[b])=>a.localeCompare(b)).map(([k,x])=>JSON.stringify(k)+':'+canonical(x)).join(',')+'}';return JSON.stringify(v)}
function reviewed(x:ReferenceEntry):ReferenceEntry{const{sources,...fields}=definition;return {...x,...fields,vec:Object.fromEntries(Object.keys(x.vec).map(k=>[k,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{},sources:[...x.sources,...sources]}}
export function reconcileExistingIdeologyDefinition22(x:ReferenceEntry):ReferenceEntry{if(x.id!==existingIdeologyDefinition22PreviousSnapshot.id)return x;const previous=existingIdeologyDefinition22PreviousSnapshot as unknown as ReferenceEntry;if(canonical(x)===canonical(reviewed(previous)))return x;if(canonical(x)!==canonical(previous))throw new Error('Definition22 changed full baseline: '+x.id);return reviewed(x)}
export const existingIdeologyDefinition22Audit={reviewedOn:'2026-10-08',integrationStatus:'Root-accepted exact existing-record overlay integrated in NEXT06 working tree against34c92e9; commit pending, no new IDs',comparison:'Previously accepted dated fiduciary-forfeiture distinction against Hobbes XVIII: Locke XIII149/XIX221–222 permits legislative replacement after breach; Hobbes covenant structure precludes forfeiture by the sovereign on that ground. Both retain public security/order and ordinary legislative authority; no claim Locke rejects every monarchy.',scope:'Full live prior archived, old source object retained, actually retrieved .htm source appended;12unknown without inferred anchors or raw growth.'} as const;
