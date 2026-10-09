import type { ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis } from '../lib/reference-coding';

/** Accepted bounded correction: full literal prior object preserved; existing explicit LP referent retains its identity. */
export const existingIdeologyCoverage02PreviousSnapshot:ReferenceEntry = {
  "id": "libertarianism",
  "kind": "ideology",
  "category": "ideology",
  "name": "Libertarianismo",
  "period": "Plataforma do Libertarian Party, página consultada em 07/10/2026",
  "vec": {
    "est": 50,
    "rep": 60,
    "pod": 20,
    "imi": 40,
    "dip": 50,
    "int": 80,
    "eco": 20,
    "con": 20,
    "com": 20,
    "rel": 80,
    "mor": 60,
    "tec": 50
  },
  "rationale": "Posições programáticas codificadas em âncoras ordinais explícitas a partir de trechos primários localizados; não são números medidos pelas fontes.",
  "caveats": "Não atribui plataforma de um partido a todos os libertarianismos. Não há edição impressa datada na página atual. Defesa suficiente e secessão não estabelecem todo o eixo pacifismo/federalismo; tecnologia permanece desconhecida.",
  "sources": [
    {
      "title": "Plataforma do Libertarian Party",
      "url": "https://lp.org/platform-page/",
      "note": "Fonte primária para liberdades, economia, imigração e política externa."
    },
    {
      "title": "LP — Plataforma, texto integral consultado em 2026",
      "url": "https://lp.org/platform-page/",
      "note": "Fonte primária lida em 07/10/2026; locadores e limites registrados por eixo. Programa declarado, não estatística ou prática observada."
    }
  ],
  "evidence": {
    "rep": "medium",
    "pod": "high",
    "imi": "medium",
    "int": "high",
    "eco": "high",
    "con": "high",
    "com": "high",
    "rel": "high",
    "mor": "medium"
  },
  "axisEvidence": {
    "rep": {
      "sourceTitles": [
        "LP — Plataforma, texto integral consultado em 2026"
      ],
      "rationale": "Desenho eleitoral democrático explícito e parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Programa declarado, não prática de todos os partidos ou opinião dos membros."
    },
    "pod": {
      "sourceTitles": [
        "LP — Plataforma, texto integral consultado em 2026"
      ],
      "rationale": "Garantias amplas contra coerção. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Armas e propriedade privada permanecem parte do programa."
    },
    "imi": {
      "sourceTitles": [
        "LP — Plataforma, texto integral consultado em 2026"
      ],
      "rationale": "Abertura migratória com direitos individuais. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Associações privadas podem excluir; não é defesa integral de direitos culturais coletivos."
    },
    "int": {
      "sourceTitles": [
        "LP — Plataforma, texto integral consultado em 2026"
      ],
      "rationale": "Não intervenção expressa. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Mantém defesa contra agressão; não implica pacifismo absoluto."
    },
    "eco": {
      "sourceTitles": [
        "LP — Plataforma, texto integral consultado em 2026"
      ],
      "rationale": "Predominância privada explicitamente defendida. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Não é propriedade sem regras contra fraude ou agressão."
    },
    "con": {
      "sourceTitles": [
        "LP — Plataforma, texto integral consultado em 2026"
      ],
      "rationale": "Livre mercado explicitamente abrangente. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Programa declarado, não prática de todos os partidos ou opinião dos membros."
    },
    "com": {
      "sourceTitles": [
        "LP — Plataforma, texto integral consultado em 2026"
      ],
      "rationale": "Livre comércio amplo. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Programa declarado, não prática de todos os partidos ou opinião dos membros."
    },
    "rel": {
      "sourceTitles": [
        "LP — Plataforma, texto integral consultado em 2026"
      ],
      "rationale": "Separação de religião e governo. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Não atribui irreligiosidade privada."
    },
    "mor": {
      "sourceTitles": [
        "LP — Plataforma, texto integral consultado em 2026"
      ],
      "rationale": "Reforma social definida por autonomia. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Direitos parentais e ausência de aprovação moral limitam leitura de progressismo universal."
    }
  },
  "coding": {
    "rep": {
      "axis": "rep",
      "position": "moderate-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "LP — Plataforma, texto integral consultado em 2026",
          "locator": "§3.6",
          "statement": "Defende representação, alternativas eleitorais e referendos.",
          "basis": "declaration",
          "publishedDate": "Página sem data de edição; consultada 2026-10-07",
          "accessedDate": "2026-10-07"
        }
      ],
      "rationale": "Desenho eleitoral democrático explícito e parcial.",
      "uncertainty": "Programa declarado, não prática de todos os partidos ou opinião dos membros.",
      "reviewedOn": "2026-10-07",
      "version": "editorial-ordinal-v1",
      "value": 60,
      "range": [
        55,
        70
      ]
    },
    "pod": {
      "axis": "pod",
      "position": "strong-second",
      "confidence": "high",
      "claims": [
        {
          "sourceTitle": "LP — Plataforma, texto integral consultado em 2026",
          "locator": "§1.2–1.3,1.7–1.8,3.2",
          "statement": "Expressão, privacidade, devido processo e fim da pena capital.",
          "basis": "declaration",
          "publishedDate": "Página sem data de edição; consultada 2026-10-07",
          "accessedDate": "2026-10-07"
        }
      ],
      "rationale": "Garantias amplas contra coerção.",
      "uncertainty": "Armas e propriedade privada permanecem parte do programa.",
      "reviewedOn": "2026-10-07",
      "version": "editorial-ordinal-v1",
      "value": 20,
      "range": [
        10,
        25
      ]
    },
    "imi": {
      "axis": "imi",
      "position": "moderate-second",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "LP — Plataforma, texto integral consultado em 2026",
          "locator": "§3.4–3.5",
          "statement": "Movimento transfronteiriço livre e direitos independentemente da identidade.",
          "basis": "declaration",
          "publishedDate": "Página sem data de edição; consultada 2026-10-07",
          "accessedDate": "2026-10-07"
        }
      ],
      "rationale": "Abertura migratória com direitos individuais.",
      "uncertainty": "Associações privadas podem excluir; não é defesa integral de direitos culturais coletivos.",
      "reviewedOn": "2026-10-07",
      "version": "editorial-ordinal-v1",
      "value": 40,
      "range": [
        30,
        45
      ]
    },
    "int": {
      "axis": "int",
      "position": "strong-first",
      "confidence": "high",
      "claims": [
        {
          "sourceTitle": "LP — Plataforma, texto integral consultado em 2026",
          "locator": "§3.1,3.3",
          "statement": "Rejeita intervenção externa, ajuda militar e mudança de regime.",
          "basis": "declaration",
          "publishedDate": "Página sem data de edição; consultada 2026-10-07",
          "accessedDate": "2026-10-07"
        }
      ],
      "rationale": "Não intervenção expressa.",
      "uncertainty": "Mantém defesa contra agressão; não implica pacifismo absoluto.",
      "reviewedOn": "2026-10-07",
      "version": "editorial-ordinal-v1",
      "value": 80,
      "range": [
        75,
        90
      ]
    },
    "eco": {
      "axis": "eco",
      "position": "strong-second",
      "confidence": "high",
      "claims": [
        {
          "sourceTitle": "LP — Plataforma, texto integral consultado em 2026",
          "locator": "§2.8,2.12–2.14",
          "statement": "Privatiza provisão social; Estado não compete com empresas.",
          "basis": "declaration",
          "publishedDate": "Página sem data de edição; consultada 2026-10-07",
          "accessedDate": "2026-10-07"
        }
      ],
      "rationale": "Predominância privada explicitamente defendida.",
      "uncertainty": "Não é propriedade sem regras contra fraude ou agressão.",
      "reviewedOn": "2026-10-07",
      "version": "editorial-ordinal-v1",
      "value": 20,
      "range": [
        10,
        25
      ]
    },
    "con": {
      "axis": "con",
      "position": "strong-second",
      "confidence": "high",
      "claims": [
        {
          "sourceTitle": "LP — Plataforma, texto integral consultado em 2026",
          "locator": "§2.0–2.1",
          "statement": "Mercado aloca recursos; rejeita controles produtivos e de preços.",
          "basis": "declaration",
          "publishedDate": "Página sem data de edição; consultada 2026-10-07",
          "accessedDate": "2026-10-07"
        }
      ],
      "rationale": "Livre mercado explicitamente abrangente.",
      "uncertainty": "Programa declarado, não prática de todos os partidos ou opinião dos membros.",
      "reviewedOn": "2026-10-07",
      "version": "editorial-ordinal-v1",
      "value": 20,
      "range": [
        10,
        25
      ]
    },
    "com": {
      "axis": "com",
      "position": "strong-second",
      "confidence": "high",
      "claims": [
        {
          "sourceTitle": "LP — Plataforma, texto integral consultado em 2026",
          "locator": "§3.3–3.4",
          "statement": "Remove obstáculos comerciais, tarifas e sanções.",
          "basis": "declaration",
          "publishedDate": "Página sem data de edição; consultada 2026-10-07",
          "accessedDate": "2026-10-07"
        }
      ],
      "rationale": "Livre comércio amplo.",
      "uncertainty": "Programa declarado, não prática de todos os partidos ou opinião dos membros.",
      "reviewedOn": "2026-10-07",
      "version": "editorial-ordinal-v1",
      "value": 20,
      "range": [
        10,
        25
      ]
    },
    "rel": {
      "axis": "rel",
      "position": "strong-first",
      "confidence": "high",
      "claims": [
        {
          "sourceTitle": "LP — Plataforma, texto integral consultado em 2026",
          "locator": "§1.2",
          "statement": "Estado não auxilia nem ataca religiões.",
          "basis": "declaration",
          "publishedDate": "Página sem data de edição; consultada 2026-10-07",
          "accessedDate": "2026-10-07"
        }
      ],
      "rationale": "Separação de religião e governo.",
      "uncertainty": "Não atribui irreligiosidade privada.",
      "reviewedOn": "2026-10-07",
      "version": "editorial-ordinal-v1",
      "value": 80,
      "range": [
        75,
        90
      ]
    },
    "mor": {
      "axis": "mor",
      "position": "moderate-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "LP — Plataforma, texto integral consultado em 2026",
          "locator": "§1.4,2.10",
          "statement": "Relações consensuais livres, igualdade sexual e descriminalização do trabalho sexual.",
          "basis": "declaration",
          "publishedDate": "Página sem data de edição; consultada 2026-10-07",
          "accessedDate": "2026-10-07"
        }
      ],
      "rationale": "Reforma social definida por autonomia.",
      "uncertainty": "Direitos parentais e ausência de aprovação moral limitam leitura de progressismo universal.",
      "reviewedOn": "2026-10-07",
      "version": "editorial-ordinal-v1",
      "value": 60,
      "range": [
        55,
        70
      ]
    }
  }
};
const reviewedOn='2026-10-08';
const source:ReferenceSource={title:'LP — Foreign policy and cultural scope, current undated programme read 8 October 2026',
 url:'https://lp.org/platform-page/',
 note:'Fonte primária efetivamente lida no corpo 51–169; nenhuma data de adoção é informada. Defesa 147, paz/não ingerência/resistência 152 e abertura migratória 156/direitos individuais 158–159. Não é edição presumida 2024.'};
function canonical(value:unknown):string {
 if(Array.isArray(value))return '['+value.map(canonical).join(',')+']';
 if(value!==null&&typeof value==='object')return '{'+Object.keys(value).sort().map(key=>JSON.stringify(key)+':'+canonical((value as Record<string,unknown>)[key])).join(',')+'}';
 return JSON.stringify(value) ?? 'undefined';
}
function reviewedOutput(item:ReferenceEntry):ReferenceEntry {
 const sources=[...item.sources,source];
 const evidence={...item.evidence},axisEvidence={...item.axisEvidence},coding={...item.coding};
 delete evidence.imi;delete axisEvidence.imi;delete coding.imi;
 const dip=codeReferenceAxis({axis:'dip',position:'moderate-second',confidence:'medium',
 claims:[{sourceTitle:source.title,locator:'§3.1 National Defense / §3.3 International Affairs; actual147/152–153',
 statement:'Defende paz com todas as nações, rejeita policiamento mundial e mantém defesa suficiente e direito de resistir à tirania.',
 basis:'declaration',publishedDate:'Current official webpage; adoption/publication date unlisted, captured 8 October 2026',accessedDate:reviewedOn}],
 rationale:'Orientação geral de paz e não expansão militar, com exceção defensiva explícita.',
 uncertainty:'Não abolir toda força armada: defesa contra agressão e resistência à tirania continuam. Não são resultados militares observados; programa não representa todos os libertarianismos.',
 relatedQuestionIds:['diplomacia_04'],reviewedOn},sources);
 evidence.dip=dip.evidence;axisEvidence.dip=dip.axisEvidence;coding.dip=dip.coding;
 return {...item,vec:{...item.vec,imi:50,dip:dip.value},sources,evidence,axisEvidence,coding,
 caveats:item.caveats+' Revisão 8 outubro 2026: admissão migratória e antidiscriminação não documentam todo pluralismo cultural/linguístico; IMI desconhecido. Paz geral com defesa explícita documenta DIP moderado. Demais oito eixos e objetos-fonte anteriores preservados.'};
}
const expectedReviewedOutput=reviewedOutput(existingIdeologyCoverage02PreviousSnapshot);
export function reconcileExistingIdeologyCoverage02(item:ReferenceEntry):ReferenceEntry {
 if(item.id!=='libertarianism')return item;
 if(canonical(item)===canonical(expectedReviewedOutput))return item;
 if(canonical(item)!==canonical(existingIdeologyCoverage02PreviousSnapshot))throw new Error('LP complete prior object changed; review before applying existingIdeologyCoverage02');
 return reviewedOutput(item);
}
export const existingIdeologyCoverage02Audit={id:'libertarianism',reviewedOn,
 changes:['IMI40 removed: admission/individual non-discrimination insufficient for whole cultural axis','DIP40 recovered: whole peace norm with defensive military/resistance counter'],
 retainedAxes:['rep','pod','int','eco','con','com','rel','mor'],
 countScope:'Nine located metadata axes before, nine independently reviewed supported axes after; rejected prior IMI not supported. No claimed eligibility or ontology-count increase',
 identityScope:'Existing explicitly narrowed LP programme retained, all prior source objects and full literal prior snapshot preserved; no duplicate ID',
 status:'Parent accepted actual-source/construct review and independent runtime invariants; import recorded separately'};
