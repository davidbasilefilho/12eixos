import type {ReferenceEntry} from './references';
export const existingIdeologyDefinition21PreviousSnapshot={
  "id": "ideology-ordoliberalism",
  "category": "ideology",
  "kind": "ideology",
  "name": "Ordoliberalismo",
  "period": "Intervenção de Walter Eucken na fundação da Sociedade Mont Pèlerin, 1947",
  "vec": {
    "est": 50,
    "rep": 50,
    "pod": 50,
    "imi": 50,
    "dip": 50,
    "int": 50,
    "eco": 34,
    "con": 22,
    "com": 50,
    "rel": 50,
    "mor": 50,
    "tec": 50
  },
  "rationale": "A tradição combina concorrência de mercado com regras públicas fortes, responsabilidade jurídica e proteção contra concentração privada de poder.",
  "caveats": "O vetor sintetiza ordoliberalismo acadêmico alemão e documentos do pós-guerra; não descreve todos os partidos que reivindicam a economia social de mercado.",
  "sources": [
    {
      "title": "Walter Eucken on Competitive Order at the Founding Meeting of the Mont Pèlerin Society — Walter Eucken Institut / University of Freiburg, 1947",
      "url": "https://www.eucken.de/app/uploads/Discussionpaper_2203-1.pdf",
      "note": "Artigo universitário contextualiza e reproduz em tradução as falas de Eucken em 1947; documento primário sobre ordem concorrencial, antimonopólio e oposição ao planejamento central."
    }
  ],
  "evidence": {
    "eco": "high",
    "con": "high"
  },
  "axisEvidence": {
    "eco": {
      "sourceTitles": [
        "Walter Eucken on Competitive Order at the Founding Meeting of the Mont Pèlerin Society — Walter Eucken Institut / University of Freiburg, 1947"
      ],
      "rationale": "Na intervenção de 1947, Eucken defende a economia concorrencial como alternativa à concentração estatal e ao monopólio."
    },
    "con": {
      "sourceTitles": [
        "Walter Eucken on Competitive Order at the Founding Meeting of the Mont Pèlerin Society — Walter Eucken Institut / University of Freiburg, 1947"
      ],
      "rationale": "Eucken contrapõe uma ordem concorrencial ao planejamento central e distingue regras públicas do comando estatal cotidiano da economia."
    }
  }
} as const;
const definition={
  "name": "Ordoliberalismo: ordem competitiva de Eucken, 1949",
  "period": "Competitive Order and Its Implementation, texto original1949; tradução inglesa abreviada Ahlborn–Grave, Competition Policy International2006",
  "rationale": "Defende ordem competitiva mantida por regras públicas e controle de monopólios, incluindo contratos obrigatórios e preços regulados em casos monopolistas.",
  "caveats": "Tradução abreviada com omissões assinaladas, não texto integral1949 ou intervenção1947. Controles específicos de monopólio não equivalem a congelamento geral de preços; rejeita nacionalização como solução geral. Reforma institucional proposta, não efeitos econômicos comprovados nem todo ordoliberalismo.",
  "sources": [
    {
      "title": "Competitive Order and Its Implementation — Eucken1949, abridged Ahlborn–Grave English CPI2006",
      "url": "https://competitionpolicyinternational.com/assets/0d358061e11f2708ad9d62634c6c40ad/Eucken%20%28Nov.%202006%29.pdf",
      "note": "Os metadados identificam o original de 1949, a tradução de Ahlborn e Grave e as omissões da versão abreviada. Foram inspecionadas as páginas 13–14 e 23–26: ordem concorrencial, agência independente para monopólios, contratos obrigatórios e controles específicos de preços, com rejeição do congelamento geral e da nacionalização. A fonte anterior de 1947 permanece preservada, sem lhe atribuir estes trechos de 1949."
    }
  ]
} as const;
function canonical(v:unknown):string{if(Array.isArray(v))return '['+v.map(canonical).join(',')+']';if(v!==null&&typeof v==='object')return '{'+Object.entries(v).sort(([a],[b])=>a.localeCompare(b)).map(([k,x])=>JSON.stringify(k)+':'+canonical(x)).join(',')+'}';return JSON.stringify(v)}
function reviewed(x:ReferenceEntry):ReferenceEntry{const{sources,...fields}=definition;return {...x,...fields,vec:Object.fromEntries(Object.keys(x.vec).map(k=>[k,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{},sources:[...x.sources,...sources]}}
export function reconcileExistingIdeologyDefinition21(x:ReferenceEntry):ReferenceEntry{if(x.id!==existingIdeologyDefinition21PreviousSnapshot.id)return x;const previous=existingIdeologyDefinition21PreviousSnapshot as unknown as ReferenceEntry;if(canonical(x)===canonical(reviewed(previous)))return x;if(canonical(x)!==canonical(previous))throw new Error('Definition21 changed full baseline: '+x.id);return reviewed(x)}
export const existingIdeologyDefinition21Audit={reviewedOn:'2026-10-08',integrationStatus:'External exact1949/2006 same-ID alignment accepted Root/peer; frozenNEXT05, not imported',comparison:'Euckenown monopoly compulsorycontracts/targetedpricecontrol versus currentLP§2.1/2.8 positivevoluntarycontracts/noStatepricecontrol. Shared competitiveprivateorder and publicrightsenforcement; no allmarketsopposition. ExcludedCWL now retainedalternative, not mandatoryselectedneighbor.',scope:'FullpriorLIVE1947 record/sources/vector preserved;12unknown/no invented anchors/rawgrowth.'} as const;
