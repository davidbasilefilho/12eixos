import type {ReferenceEntry} from './references';
export const existingIdeologyDefinition19PreviousSnapshot={
  "id": "ideology-left-black-anarchism",
  "name": "Anarquismo negro",
  "period": "Anarchism and the Black Revolution, 1979–1983",
  "rationale": "A obra de Lorenzo Kom’boa Ervin une crítica anarquista ao Estado e ao capitalismo à análise do racismo e da libertação negra.",
  "caveats": "A obra representa uma intervenção individual e não todas as correntes negras anarquistas. O recorte racial não é generalizado a outras sociedades.",
  "sources": [
    {
      "title": "Anarchism and the Black Revolution — Lorenzo Kom’boa Ervin",
      "url": "https://theanarchistlibrary.org/library/lorenzo-kom-boa-ervin-anarchism-and-the-black-revolution",
      "note": "Texto primário do autor sobre racismo, organização comunitária e anarquismo."
    }
  ],
  "kind": "ideology",
  "category": "ideology",
  "vec": {
    "est": 77,
    "rep": 72,
    "pod": 50,
    "imi": 50,
    "dip": 50,
    "int": 50,
    "eco": 72,
    "con": 50,
    "com": 50,
    "rel": 50,
    "mor": 88,
    "tec": 50
  },
  "evidence": {
    "est": "medium",
    "rep": "medium",
    "eco": "medium",
    "mor": "medium"
  },
  "axisEvidence": {
    "est": {
      "sourceTitles": [
        "Anarchism and the Black Revolution — Lorenzo Kom’boa Ervin"
      ],
      "rationale": "A proposta enfatiza organização local e comunitária contra autoridades centralizadas."
    },
    "rep": {
      "sourceTitles": [
        "Anarchism and the Black Revolution — Lorenzo Kom’boa Ervin"
      ],
      "rationale": "Defende decisão direta e estruturas organizativas horizontais."
    },
    "eco": {
      "sourceTitles": [
        "Anarchism and the Black Revolution — Lorenzo Kom’boa Ervin"
      ],
      "rationale": "A crítica ao capitalismo e à propriedade concentrada sustenta economia comunitária."
    },
    "mor": {
      "sourceTitles": [
        "Anarchism and the Black Revolution — Lorenzo Kom’boa Ervin"
      ],
      "rationale": "A libertação negra e a oposição a hierarquias raciais são centrais."
    }
  }
} as const;
const definition={
  "name": "Anarquismo negro: programa comunitário de Ervin, 1993",
  "period": "Anarchism and the Black Revolution, segunda edição; dedicatória própria de setembro de 1993, republicação textual The Anarchist Library",
  "rationale": "Defende comunas negras federadas, controle comunitário da economia e autonomia judicial de zonas libertadas, com delegados revogáveis.",
  "caveats": "Programa específico, não todas as tradições negras anarquistas. Mantém exigências de ajuda estatal e julgamento de policiais abusivos, apesar de negar jurisdição estatal nas zonas libertadas. História racial e eficácia revolucionária são alegações autorais, não fatos certificados. Valores antigos, incluindo moralidade inferida da libertação racial, não receberam validação numérica.",
  "sources": [
    {
      "title": "Anarchism and the Black Revolution — Ervin1993 second-edition normative programme",
      "url": "https://theanarchistlibrary.org/library/lorenzo-kom-boa-ervin-anarchism-and-the-black-revolution",
      "note": "A dedicatória, nas linhas 85–94, identifica a segunda edição, de setembro de 1993. Foram inspecionadas as linhas 0–128 e 322–376, com revisão adicional de 314–365. O texto propõe comunas e delegados revogáveis (324–329), ajuda estatal e reparações (353–356); em 357, exclui a jurisdição estatal nas zonas libertadas e simultaneamente exige processo contra policiais. Não se atribui o texto de 1993 ao período anterior de 1979–1983, nem se usa raça como prova de orientação moral integral."
    }
  ]
} as const;
function canonical(v:unknown):string{if(Array.isArray(v))return '['+v.map(canonical).join(',')+']';if(v!==null&&typeof v==='object')return '{'+Object.entries(v).sort(([a],[b])=>a.localeCompare(b)).map(([k,x])=>JSON.stringify(k)+':'+canonical(x)).join(',')+'}';return JSON.stringify(v)}
function reviewed(x:ReferenceEntry):ReferenceEntry{const{sources,...fields}=definition;return {...x,...fields,vec:Object.fromEntries(Object.keys(x.vec).map(k=>[k,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{},sources:[...x.sources,...sources]}}
export function reconcileExistingIdeologyDefinition19(x:ReferenceEntry):ReferenceEntry{if(x.id!==existingIdeologyDefinition19PreviousSnapshot.id)return x;const previous=existingIdeologyDefinition19PreviousSnapshot as unknown as ReferenceEntry;if(canonical(x)===canonical(reviewed(previous)))return x;if(canonical(x)!==canonical(previous))throw new Error('Definition19 changed full baseline: '+x.id);return reviewed(x)}
export const existingIdeologyDefinition19Audit={reviewedOn:'2026-10-08',integrationStatus:'External exact same-ID1993 alignment accepted Root/peer; frozenNEXT05, not imported',comparison:'Earlier accepted Ervin357 liberated-zone noStatejurisdiction versus BPP1966 constitutionalpeerjury; Stateaid/prosecution demands retained. No racial-label or aid-versus-noaid distinction.',scope:'Correct actual1993secondedition versus old1979–1983period; all12unknown/old4unlocatedcodes archived; fullLIVE/sourceobjects retained, no rawgrowth.'} as const;
