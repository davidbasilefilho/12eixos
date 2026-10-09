import type {ReferenceEntry} from './references';
export const existingIdeologyDefinition28PreviousSnapshots=[
  {
    "id": "ideology-right-agorism",
    "kind": "ideology",
    "category": "ideology",
    "name": "Agorismo",
    "period": "The New Libertarian Manifesto, Samuel Edward Konkin III, 1980",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 9,
      "con": 10,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "O manifesto propõe construir relações econômicas voluntárias fora de mercados regulados pelo Estado.",
    "caveats": "A corrente oferece uma estratégia de mudança, não uma plataforma coerente para todos os eixos. Perfil de catálogo com evidência restrita à economia política.",
    "sources": [
      {
        "title": "The New Libertarian Manifesto — Samuel Edward Konkin III",
        "url": "https://www.agorism.info/docs/NewLibertarianManifesto.pdf",
        "note": "Manifesto primário que apresenta agorismo e contraeconomia."
      }
    ],
    "evidence": {
      "eco": "medium",
      "con": "medium"
    },
    "axisEvidence": {
      "eco": {
        "sourceTitles": [
          "The New Libertarian Manifesto — Samuel Edward Konkin III"
        ],
        "rationale": "No eixo propriedade pública ↔ privada, a fonte primária delimita esta direção: Manifesto primário que apresenta agorismo e contraeconomia. A codificação de 9 é uma estimativa editorial deste recorte. O manifesto propõe construir relações econômicas voluntárias fora de mercados regulados pelo Estado."
      },
      "con": {
        "sourceTitles": [
          "The New Libertarian Manifesto — Samuel Edward Konkin III"
        ],
        "rationale": "No eixo planejamento ↔ mercado, a fonte primária delimita esta direção: Manifesto primário que apresenta agorismo e contraeconomia. A codificação de 10 é uma estimativa editorial deste recorte. O manifesto propõe construir relações econômicas voluntárias fora de mercados regulados pelo Estado."
      }
    }
  }
] as const;
const definitions=[
  {
    "id": "ideology-right-agorism",
    "name": "Agorismo e contraeconomia de Konkin, 1980–1983",
    "period": "New Libertarian Manifesto, assinatura de outubro de 1980 e segunda impressão de fevereiro de 1983; reprodução com prefácio editorial posterior de março de 2006",
    "rationale": "Defende substituir o Estado por trocas e justiça voluntárias, usando contraeconomia e ação consistente, e rejeita partidos políticos como meio de alcançar liberdade.",
    "caveats": "Manifesto e transmissão específicos, não todas as posições agoristas nem comprovação de sucesso prático. A escolha de múltiplos caminhos coerentes permanece, assim como defesa contra agressão e arbitragem. O prefácio editorial de 2006 e as alegações sobre eficácia histórica não são confundidos com prescrições autorais de 1980–1983. A rejeição de partidos não equivale a negar educação ou organização coletiva.",
    "sources": [
      {
        "title": "New Libertarian Manifesto — Konkin, assinatura de 1980 e impressão de 1983",
        "url": "https://theanarchistlibrary.org/library/samuel-edward-konkin-iii-new-libertarian-manifesto",
        "note": "O corpo autoral rejeita a procura de fins libertários por meios estatais, especialmente partidos; admite múltiplos caminhos consistentes e propõe justiça e defesa voluntárias. A reprodução identifica impressão de outubro de 1980 e fevereiro de 1983, além de um prefácio editorial separado de março de 2006. Assinatura autoral: 12 de outubro de 1980."
      }
    ]
  }
] as const;
function canonical(v:unknown):string{if(Array.isArray(v))return '['+v.map(canonical).join(',')+']';if(v!==null&&typeof v==='object')return '{'+Object.entries(v).sort(([a],[b])=>a.localeCompare(b)).map(([k,x])=>JSON.stringify(k)+':'+canonical(x)).join(',')+'}';return JSON.stringify(v)}
function reviewed(x:ReferenceEntry,i:number):ReferenceEntry{const{id,sources,...fields}=definitions[i];return {...x,...fields,vec:Object.fromEntries(Object.keys(x.vec).map(k=>[k,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{},sources:[...x.sources,...sources]}}
export function reconcileExistingIdeologyDefinition28(x:ReferenceEntry):ReferenceEntry{const i=existingIdeologyDefinition28PreviousSnapshots.findIndex(p=>p.id===x.id);if(i<0)return x;const p=existingIdeologyDefinition28PreviousSnapshots[i] as unknown as ReferenceEntry;if(canonical(x)===canonical(reviewed(p,i)))return x;if(canonical(x)!==canonical(p))throw new Error('Definition28 changed full baseline: '+x.id);return reviewed(x,i)}
export const existingIdeologyDefinition28Audit={reviewedOn:'2026-10-08',integrationStatus:'Root-accepted exact existing-record overlay integrated in NEXT06 working tree against34c92e9; commit pending, no new IDs',scope:'Full current live archives/all original source identities retained;12unknown; no raw expansion.',comparisons:'Fresh Friedman second-edition educational-party permission versus Konkin rejection of party means is a bounded same-transition-function candidate pending Root verdict; shared stateless market endpoint/education/capture risks retained, no Rothbard attribution or all-family certificate.'} as const;
