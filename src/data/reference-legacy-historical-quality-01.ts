import type { ReferenceEntry } from './references';
import { AXES } from '../lib/scoring';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';
/** Immutable complete live record before this unimported quality proposal. */
export const legacyHistoricalQuality01OriginalRecords:Record<string,ReferenceEntry> = {
  "hannah-arendt": {
    "id": "hannah-arendt",
    "kind": "person",
    "category": "historical-figure",
    "name": "Hannah Arendt",
    "period": "The Origins of Totalitarianism e The Human Condition, 1951–1958",
    "vec": {
      "est": 67,
      "rep": 80,
      "pod": 50,
      "imi": 50,
      "dip": 32,
      "int": 61,
      "eco": 51,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 47
    },
    "rationale": "Arendt analisa totalitarismo, pluralidade e ação pública, sem reduzir democracia a uma preferência eleitoral simples.",
    "caveats": "A teoria política de Arendt resiste a classificações lineares; sem posição textual clara o eixo permanece no centro.",
    "sources": [
      {
        "title": "The Human Condition",
        "url": "https://archive.org/details/humancondition0000aren",
        "note": "Obra primária sobre ação, espaço público e condição política."
      }
    ],
    "evidence": {
      "est": "medium",
      "rep": "medium",
      "dip": "medium",
      "int": "medium",
      "eco": "medium",
      "tec": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "The Human Condition"
        ],
        "rationale": "Obra primária sobre ação, espaço público e condição política. Arendt analisa totalitarismo, pluralidade e ação pública, sem reduzir democracia a uma preferência eleitoral simples. A direção editorial deste eixo é Federal, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "rep": {
        "sourceTitles": [
          "The Human Condition"
        ],
        "rationale": "Obra primária sobre ação, espaço público e condição política. Arendt analisa totalitarismo, pluralidade e ação pública, sem reduzir democracia a uma preferência eleitoral simples. A direção editorial deste eixo é Democracia, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "dip": {
        "sourceTitles": [
          "The Human Condition"
        ],
        "rationale": "Obra primária sobre ação, espaço público e condição política. Arendt analisa totalitarismo, pluralidade e ação pública, sem reduzir democracia a uma preferência eleitoral simples. A direção editorial deste eixo é Pacifista, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "int": {
        "sourceTitles": [
          "The Human Condition"
        ],
        "rationale": "Obra primária sobre ação, espaço público e condição política. Arendt analisa totalitarismo, pluralidade e ação pública, sem reduzir democracia a uma preferência eleitoral simples. A direção editorial deste eixo é Não intervencionista, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "eco": {
        "sourceTitles": [
          "The Human Condition"
        ],
        "rationale": "Obra primária sobre ação, espaço público e condição política. Arendt analisa totalitarismo, pluralidade e ação pública, sem reduzir democracia a uma preferência eleitoral simples. A direção editorial deste eixo é Público, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "tec": {
        "sourceTitles": [
          "The Human Condition"
        ],
        "rationale": "Obra primária sobre ação, espaço público e condição política. Arendt analisa totalitarismo, pluralidade e ação pública, sem reduzir democracia a uma preferência eleitoral simples. A direção editorial deste eixo é Biologia, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      }
    }
  }
};
export const legacyHistoricalQuality01Coding:ReferenceAxisCoding[] = [
  {
    "axis": "rep",
    "position": "moderate-first",
    "confidence": "medium",
    "claims": [
      {
        "sourceTitle": "The Human Condition — Arendt, edição 1998 do texto de 1958",
        "publishedDate": "1958; edição 1998",
        "accessedDate": "2026-10-07",
        "basis": "declaration",
        "locator": "§§30–31, pp.215–221 (PDF páginas234–240): conselhos, sufrágio e crítica ao governo de um só",
        "statement": "Valoriza conselhos populares e participação política, contrapondo pluralidade ao governo de um só."
      }
    ],
    "rationale": "Participação política plural sustenta direção democrática parcial.",
    "uncertainty": "Critica também democracias que reduzem a pluralidade a corpo coletivo monárquico (pp.220–221); não endosso de toda maioria ou representação.",
    "reviewedOn": "2026-10-07",
    "relatedQuestionIds": [
      "representacao_06",
      "representacao_07"
    ]
  }
];
/** Root decides integration. No unsupported legacy dimension survives as evidence. */
export function reconcileLegacyHistoricalQuality01(entry:ReferenceEntry):ReferenceEntry {
 if(entry.id!=='hannah-arendt')return entry;
 if(entry.name!=='Hannah Arendt'||entry.category!=='historical-figure')throw new Error('Arendt identity mismatch');
 const next:ReferenceEntry={...structuredClone(entry),period:'The Human Condition, 1958; edição consultada 1998, §§30–31',
 rationale:'Perfil documental restrito à participação política plural; dimensões antigas sem locadores foram desqualificadas.',
 caveats:'Cinco eixos antes graduados foram retirados: análise conceitual não equivale a posições nos construtos do questionário. Não elegível para matching. Texto autoral separado da introdução de Margaret Canovan.',
 sources:[...entry.sources,{title:'The Human Condition — Arendt, edição 1998 do texto de 1958',url:'https://pensarelespaciopublico.wordpress.com/wp-content/uploads/2012/02/arendt-hanna-the-human-condition.pdf',note:'PDF autoral efetivamente consultado; prólogo e capítulosII/V; ver ledger. Repositório de reprodução, não site da editora.'}],
 vec:Object.fromEntries(AXES.map(({key})=>[key,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{}};
 for(const input of legacyHistoricalQuality01Coding){const c=codeReferenceAxis(input,next.sources);next.vec[input.axis]=c.value;next.evidence[input.axis]=c.evidence;next.axisEvidence![input.axis]=c.axisEvidence;next.coding![input.axis]=c.coding;}
 return next;
}
