import type {ReferenceEntry} from './references';
export const existingIdeologyDefinition18PreviousSnapshots=[
  {
    "id": "ideology-distributism",
    "category": "ideology",
    "kind": "ideology",
    "name": "Distributismo",
    "period": "Rerum Novarum e Quadragesimo Anno, 1891–1931",
    "vec": {
      "est": 61,
      "rep": 50,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 30,
      "con": 50,
      "com": 50,
      "rel": 18,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Doutrina social católica sustenta direitos laborais, responsabilidade social da propriedade e organizações intermediárias; a descentralização econômica é inferência cautelosa.",
    "caveats": "As encíclicas não usam todas as categorias modernas nem equivalem integralmente ao distributismo articulado depois por autores leigos. Não se infere regime político ou pacote de política pública único.",
    "sources": [
      {
        "title": "Rerum Novarum — Santa Sé",
        "url": "https://www.vatican.va/content/leo-xiii/en/encyclicals/documents/hf_l-xiii_enc_15051891_rerum-novarum.html",
        "note": "Documento primário de 1891 sobre trabalho, propriedade, associações e responsabilidade estatal."
      },
      {
        "title": "Quadragesimo Anno — Santa Sé",
        "url": "https://www.vatican.va/content/pius-xi/en/encyclicals/documents/hf_p-xi_enc_19310515_quadragesimo-anno.html",
        "note": "Documento primário de 1931 sobre justiça social e princípio de subsidiariedade."
      }
    ],
    "evidence": {
      "est": "medium",
      "eco": "medium",
      "rel": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Quadragesimo Anno — Santa Sé"
        ],
        "rationale": "A encíclica estabelece subsidiariedade: grupos e instâncias menores devem desempenhar funções que podem cumprir."
      },
      "eco": {
        "sourceTitles": [
          "Rerum Novarum — Santa Sé"
        ],
        "rationale": "A encíclica reconhece a propriedade privada como direito e prevê sua proteção jurídica."
      },
      "rel": {
        "sourceTitles": [
          "Rerum Novarum — Santa Sé"
        ],
        "rationale": "A encíclica formula a política social explicitamente a partir da doutrina católica."
      }
    }
  },
  {
    "id": "ideology-christian-socialism",
    "category": "ideology",
    "kind": "ideology",
    "name": "Socialismo cristão",
    "period": "Plataformas cristãs socialistas, 2021–2026",
    "vec": {
      "est": 50,
      "rep": 84,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 76,
      "con": 73,
      "com": 50,
      "rel": 39,
      "mor": 50,
      "tec": 50
    },
    "rationale": "A tradição articula igualdade social, solidariedade e crítica cristã à exploração, mas não implica uma forma única de Estado ou de economia.",
    "caveats": "Movimentos cristãos socialistas divergem sobre democracia, propriedade, secularismo e costumes; este vetor usa declarações contemporâneas de duas organizações como amostra.",
    "sources": [
      {
        "title": "Gospel — Institute for Christian Socialism",
        "url": "https://christiansocialism.com/gospel/",
        "note": "Plataforma contemporânea que explicita crítica cristã ao capitalismo e compromisso socialista."
      },
      {
        "title": "Constitution — Christians on the Left",
        "url": "https://www.christiansontheleft.org.uk/constitution",
        "note": "Constituição do movimento sucessor do Christian Socialist Movement britânico."
      }
    ],
    "evidence": {
      "rep": "medium",
      "eco": "medium",
      "con": "medium",
      "rel": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constitution — Christians on the Left"
        ],
        "rationale": "O movimento mantém como prática a participação de cristãos em cargos eleitorais pelo Partido Trabalhista britânico."
      },
      "eco": {
        "sourceTitles": [
          "Gospel — Institute for Christian Socialism"
        ],
        "rationale": "A plataforma declara incompatibilidade entre a visão socialista cristã e as práticas e efeitos do capitalismo."
      },
      "con": {
        "sourceTitles": [
          "Gospel — Institute for Christian Socialism"
        ],
        "rationale": "A plataforma propõe uma alternativa econômica socialista ao capitalismo, sem especificar um único modelo de planejamento."
      },
      "rel": {
        "sourceTitles": [
          "Gospel — Institute for Christian Socialism"
        ],
        "rationale": "O documento parte explicitamente de fé e teologia cristãs."
      }
    }
  }
] as const;
const definitions={
  "ideology-distributism": {
    "name": "Distributismo: propriedade dispersa de Chesterton, 1927",
    "period": "The Outline of Sanity, edição Dodd, Mead & Company, Nova York, 1927; transcrição PDF republicada pela Seton Hall",
    "rationale": "Defende dispersar a propriedade produtiva e reduzir a dependência salarial, usando reformas legais e econômicas adaptadas às circunstâncias.",
    "caveats": "Exemplar de Chesterton, não todas as tradições distributistas ou doutrina papal integral. Admite diferentes meios, como leis, impostos, tarifas e subsídios; sua crítica geral ao socialismo é posição autoral, não fato certificado sobre todos os socialistas. Transcrição textual sem colação de fac-símile; velhos números não validados.",
    "sources": [
      {
        "title": "The Outline of Sanity — Chesterton, Dodd Mead New York1927 primary transcription",
        "url": "https://www.shu.edu/documents/1927-GK-Chesterton-The-Outline-of-Sanity.pdf",
        "note": "O colofão, nas linhas 0–5, registra a edição de 1927. Foram inspecionadas as linhas 37–197 e as páginas 1–6 e 48–50: distribuição da propriedade produtiva e oposição à dependência salarial. A seção II.2 admite leis, impostos, tarifas e subsídios como métodos. O texto não equivale exclusivamente às encíclicas de 1891–1931; sua crítica a todos os socialistas é uma afirmação do autor, não um fato certificado."
      }
    ]
  },
  "ideology-christian-socialism": {
    "name": "Socialismo cristão: programa do Institute for Christian Socialism",
    "period": "Socialism of the Gospel, programa institucional sem data de adoção publicada; versão consultada em 8 outubro 2026",
    "rationale": "Defende superar o capitalismo com economias igualitárias e participação política cristã, integrando justiça social e emancipação de grupos oprimidos.",
    "caveats": "Programa institucional específico e sem data de adoção indicada; copyright2023 não comprova sua adoção. Afirma pluralidade de modelos socialistas, sem fixar uma constituição ou forma econômica única. Interpretações bíblicas e causalidades históricas são posições do texto; não outcomes certificados. Excertos CotL e fontes anteriores ficam preservados sem atribuir sua autoria ao ICS.",
    "sources": [
      {
        "title": "Socialism of the Gospel — Institute for Christian Socialism, undated own programme captured8Oct2026",
        "url": "https://christiansocialism.com/gospel/",
        "note": "O texto próprio, nas linhas 15–38, foi integralmente inspecionado e revisto. As seções Christian Socialism Today e Socialist Imperatives defendem superar o capitalismo (32 e 35), admitem pluralidade sem modelo único (30) e propõem emancipação (38). A página não informa data de adoção; o aviso de direitos autorais ©2023 não é data do programa. Christians on the Left é uma organização separada, cujo extrato constitucional não tem esta autoria."
      }
    ]
  }
} as const;
function canonical(v:unknown):string{if(Array.isArray(v))return '['+v.map(canonical).join(',')+']';if(v!==null&&typeof v==='object')return '{'+Object.entries(v).sort(([a],[b])=>a.localeCompare(b)).map(([k,x])=>JSON.stringify(k)+':'+canonical(x)).join(',')+'}';return JSON.stringify(v)}
function reviewed(x:ReferenceEntry):ReferenceEntry{const{sources,...fields}=definitions[x.id as keyof typeof definitions];return {...x,...fields,vec:Object.fromEntries(Object.keys(x.vec).map(k=>[k,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{},sources:[...x.sources,...sources]}}
export function reconcileExistingIdeologyDefinition18(x:ReferenceEntry):ReferenceEntry{const p=existingIdeologyDefinition18PreviousSnapshots.find(p=>p.id===x.id);if(!p)return x;const previous=p as unknown as ReferenceEntry;if(canonical(x)===canonical(reviewed(previous)))return x;if(canonical(x)!==canonical(previous))throw new Error('Definition18 changed full baseline: '+x.id);return reviewed(x)}
export const existingIdeologyDefinition18Audit={reviewedOn:'2026-10-08',integrationStatus:'External exact two scoped same-ID alignments accepted Root/peer; frozenNEXT05, not imported',scope:'Chesterton actual1927colophon versus old exclusivelypapal period; ICSownundated programme versus unsupported2021–2026adoption implication. All24unknown; legacy fullvectors/maps/grades/sourceobjects archived; no raw growth or independent-neighbor-count inference.'} as const;
