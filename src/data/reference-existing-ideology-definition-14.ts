import type {ReferenceEntry} from './references';
export const existingIdeologyDefinition14PreviousSnapshot={
  "id": "ideology-anticolonial-nationalism",
  "category": "ideology",
  "kind": "ideology",
  "name": "Nacionalismo anticolonial",
  "period": "Conferência de Bandung, 1955",
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
  "rationale": "Os dez princípios de Bandung afirmam autodeterminação, igualdade soberana, anticolonialismo e coexistência pacífica entre Estados diversos.",
  "caveats": "Bandung foi uma coalizão de governos e não uma ideologia econômica uniforme; o vetor combina autodeterminação com não alinhamento e deixa economia e costumes sem inferência forte.",
  "sources": [
    {
      "title": "Final Communiqué of the Asian-African Conference — UN Digital Library",
      "url": "https://digitallibrary.un.org/record/81959",
      "note": "Documento primário da Conferência de Bandung, 1955, sobre autodeterminação, soberania e coexistência."
    }
  ],
  "evidence": {},
  "axisEvidence": {}
} as const;
const definition={
  "name": "Anticolonialismo e cooperação soberana: Bandung, 1955",
  "period": "Comunicado final adotado em 24 abril 1955; transcrição World and Japan da edição Ministério das Relações Exteriores da Indonésia 1955, pp 161–169",
  "rationale": "Defende autodeterminação, direitos e cooperação por consulta soberana e acordos bilaterais, com solução pacífica de disputas.",
  "caveats": "Normas coletivamente declaradas, não doutrina econômica uniforme nem resultados dos 29 Estados. A12 não pretende bloco regional; isso não proíbe toda união futura. Defesa coletiva, políticas comuns e escolha consentida coexistem com soberania. Republicação textual sem colação de fac-símile.",
  "sources": [
    {
      "title": "Final Communiqué of the Asian-African Conference,24 April 1955 — World and Japan primary transcription",
      "url": "https://worldjpn.net/documents/texts/docs/19550424.D1E.html",
      "note": "Texto integral 17–173 efetivamente lido por autor/peer; metadados 6–12 citam fonte Indonesian MFA 1955 pp 161–169. A1/A11–12/B6 cooperação soberana/contatos e consulta sem bloco; C/D direitos e anticolonialismo; F/G desarmamento, defesa e resolução pacífica. Não inferir números ou prática da declaração."
    }
  ]
} as const;
function canonical(v:unknown):string{if(Array.isArray(v))return '['+v.map(canonical).join(',')+']';if(v!==null&&typeof v==='object')return '{'+Object.entries(v).sort(([a],[b])=>a.localeCompare(b)).map(([k,x])=>JSON.stringify(k)+':'+canonical(x)).join(',')+'}';return JSON.stringify(v)}
function reviewed(x:ReferenceEntry):ReferenceEntry{const{sources,...fields}=definition;return {...x,...fields,sources:[...x.sources,...sources]}}
export function reconcileExistingIdeologyDefinition14(x:ReferenceEntry):ReferenceEntry{if(x.id!==existingIdeologyDefinition14PreviousSnapshot.id)return x;const previous=existingIdeologyDefinition14PreviousSnapshot as unknown as ReferenceEntry;if(canonical(x)===canonical(reviewed(previous)))return x;if(canonical(x)!==canonical(previous))throw new Error('Definition14 changed full baseline: '+x.id);return reviewed(x)}
export const existingIdeologyDefinition14Audit={reviewedOn:'2026-10-08',integrationStatus:'External same-ID qualitative definition accepted by Root/peer8Oct2026; frozen NEXT818-04, integrated in working tree',comparison:'Bandung A11–12/B6 national liaison/consultation/bilateral remit versus Nkrumah1963 positive constitutional UnionGovernment common diplomacy/defense/currency/citizenship. Shared consent/sovereignty/collective policies and defense retained; no ban on all possible unions.',scope:'Full original LIVE archive and sourceunion; existing12unknown identities unchanged; no rawgrowth, scores or gate change.'} as const;
