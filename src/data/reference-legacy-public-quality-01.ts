import type { AxisKey, ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';
/** Isolated documentary repair. No import/integration is performed by this module. */
export const legacyPublicQuality01LiveBefore: ReferenceEntry[] = [
  {
    "id": "javier-milei",
    "kind": "person",
    "category": "public-figure",
    "name": "Javier Milei",
    "period": "Plataforma e presidência da Argentina, 2023–2026",
    "vec": {
      "est": 50,
      "rep": 61,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 78,
      "eco": 8,
      "con": 14,
      "com": 50,
      "rel": 83,
      "mor": 58,
      "tec": 50
    },
    "rationale": "Discursos e decretos de governo exprimem redução do Estado, privatização, liberdade econômica e uma política externa alinhada a aliados escolhidos.",
    "caveats": "A fonte combina plataforma ideológica e atos presidenciais; atitudes pessoais em eixos sem documentação ficam sem direção atribuída.",
    "sources": [
      {
        "title": "Discurso presidencial de posse, 2023",
        "url": "https://www.casarosada.gob.ar/informacion/discursos/50258-discurso-del-presidente-javier-milei-en-la-asuncion-presidencial",
        "note": "Discurso original de Milei que apresenta diagnóstico e programa de governo."
      }
    ],
    "evidence": {
      "rep": "medium",
      "int": "medium",
      "eco": "high",
      "con": "high",
      "rel": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Discurso presidencial de posse, 2023"
        ],
        "rationale": "Discurso original de Milei que apresenta diagnóstico e programa de governo. Discursos e decretos de governo exprimem redução do Estado, privatização, liberdade econômica e uma política externa alinhada a aliados escolhidos. A direção editorial deste eixo é Democracia, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "int": {
        "sourceTitles": [
          "Discurso presidencial de posse, 2023"
        ],
        "rationale": "Discurso original de Milei que apresenta diagnóstico e programa de governo. Discursos e decretos de governo exprimem redução do Estado, privatização, liberdade econômica e uma política externa alinhada a aliados escolhidos. A direção editorial deste eixo é Não intervencionista, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "eco": {
        "sourceTitles": [
          "Discurso presidencial de posse, 2023"
        ],
        "rationale": "Discurso original de Milei que apresenta diagnóstico e programa de governo. Discursos e decretos de governo exprimem redução do Estado, privatização, liberdade econômica e uma política externa alinhada a aliados escolhidos. A direção editorial deste eixo é Privado, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "con": {
        "sourceTitles": [
          "Discurso presidencial de posse, 2023"
        ],
        "rationale": "Discurso original de Milei que apresenta diagnóstico e programa de governo. Discursos e decretos de governo exprimem redução do Estado, privatização, liberdade econômica e uma política externa alinhada a aliados escolhidos. A direção editorial deste eixo é Livre mercado, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "rel": {
        "sourceTitles": [
          "Discurso presidencial de posse, 2023"
        ],
        "rationale": "Discurso original de Milei que apresenta diagnóstico e programa de governo. Discursos e decretos de governo exprimem redução do Estado, privatização, liberdade econômica e uma política externa alinhada a aliados escolhidos. A direção editorial deste eixo é Irreligioso, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "mor": {
        "sourceTitles": [
          "Discurso presidencial de posse, 2023"
        ],
        "rationale": "Discurso original de Milei que apresenta diagnóstico e programa de governo. Discursos e decretos de governo exprimem redução do Estado, privatização, liberdade econômica e uma política externa alinhada a aliados escolhidos. A direção editorial deste eixo é Progressista, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      }
    }
  }
];
/** Generated source record before preparation; not the original uncentered row. */
export const legacyPublicQuality01GeneratedBefore: ReferenceEntry[] = [
  {
    "id": "javier-milei",
    "kind": "person",
    "category": "public-figure",
    "name": "Javier Milei",
    "period": "Plataforma e presidência da Argentina, 2023–2026",
    "vec": {
      "est": 50,
      "rep": 61,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 78,
      "eco": 8,
      "con": 14,
      "com": 50,
      "rel": 83,
      "mor": 58,
      "tec": 50
    },
    "rationale": "Discursos e decretos de governo exprimem redução do Estado, privatização, liberdade econômica e uma política externa alinhada a aliados escolhidos.",
    "caveats": "A fonte combina plataforma ideológica e atos presidenciais; atitudes pessoais em eixos sem documentação ficam sem direção atribuída.",
    "sources": [
      {
        "title": "Discurso presidencial de posse, 2023",
        "url": "https://www.casarosada.gob.ar/informacion/discursos/50258-discurso-del-presidente-javier-milei-en-la-asuncion-presidencial",
        "note": "Discurso original de Milei que apresenta diagnóstico e programa de governo."
      }
    ],
    "evidence": {
      "rep": "medium",
      "int": "medium",
      "eco": "high",
      "con": "high",
      "rel": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Discurso presidencial de posse, 2023"
        ],
        "rationale": "Discurso original de Milei que apresenta diagnóstico e programa de governo. Discursos e decretos de governo exprimem redução do Estado, privatização, liberdade econômica e uma política externa alinhada a aliados escolhidos. A direção editorial deste eixo é Democracia, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "int": {
        "sourceTitles": [
          "Discurso presidencial de posse, 2023"
        ],
        "rationale": "Discurso original de Milei que apresenta diagnóstico e programa de governo. Discursos e decretos de governo exprimem redução do Estado, privatização, liberdade econômica e uma política externa alinhada a aliados escolhidos. A direção editorial deste eixo é Não intervencionista, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "eco": {
        "sourceTitles": [
          "Discurso presidencial de posse, 2023"
        ],
        "rationale": "Discurso original de Milei que apresenta diagnóstico e programa de governo. Discursos e decretos de governo exprimem redução do Estado, privatização, liberdade econômica e uma política externa alinhada a aliados escolhidos. A direção editorial deste eixo é Privado, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "con": {
        "sourceTitles": [
          "Discurso presidencial de posse, 2023"
        ],
        "rationale": "Discurso original de Milei que apresenta diagnóstico e programa de governo. Discursos e decretos de governo exprimem redução do Estado, privatização, liberdade econômica e uma política externa alinhada a aliados escolhidos. A direção editorial deste eixo é Livre mercado, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "rel": {
        "sourceTitles": [
          "Discurso presidencial de posse, 2023"
        ],
        "rationale": "Discurso original de Milei que apresenta diagnóstico e programa de governo. Discursos e decretos de governo exprimem redução do Estado, privatização, liberdade econômica e uma política externa alinhada a aliados escolhidos. A direção editorial deste eixo é Irreligioso, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "mor": {
        "sourceTitles": [
          "Discurso presidencial de posse, 2023"
        ],
        "rationale": "Discurso original de Milei que apresenta diagnóstico e programa de governo. Discursos e decretos de governo exprimem redução do Estado, privatização, liberdade econômica e uma política externa alinhada a aliados escolhidos. A direção editorial deste eixo é Progressista, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      }
    }
  }
];
/** Exact tuple from reference-people.ts, preserving unsupported historical numbers separately. */
export const legacyPublicQuality01RawRowValues = { "javier-milei": [52,61,49,51,50,78,8,14,38,83,58,64] };
export const legacyPublicQuality01Sources: ReferenceSource[] = [
  {
    "title": "Casa Rosada — Milei, discurso após posse, 10/12/2023 (URL canônica)",
    "url": "https://www.casarosada.gob.ar/informacion/discursos/50258-palabras-del-presidente-de-la-nacion-javier-milei-luego-del-acto-de-jura-y-asuncion-presidencial-desde-las-escalinatas-del-honorable-congreso-de-la-nacion",
    "note": "Texto primário completo efetivamente lido em07/10/2026; declaração de10/12/2023. URL legada indisponível preservada no arquivo e na união de fontes."
  }
];
export const legacyPublicQuality01Coding: ReferenceAxisCoding[] = [
  {
    "axis": "eco",
    "position": "moderate-second",
    "confidence": "medium",
    "claims": [
      {
        "sourceTitle": "Casa Rosada — Milei, discurso após posse, 10/12/2023 (URL canônica)",
        "locator": "Parágrafos iniciados «En materia de salud», «Ese es el Estado presente» e «Hoy volvemos a abrazar»; linhas48–49/57 da leitura",
        "statement": "Defende propriedade privada e contrapõe ineficiência estatal à liberdade econômica.",
        "basis": "declaration",
        "publishedDate": "2023-12-10",
        "accessedDate": "2026-10-07"
      }
    ],
    "rationale": "Propriedade privada e eficiência relativa sustentam direção parcial ao polo privado.",
    "relatedQuestionIds": [
      "economia_18",
      "economia_20"
    ],
    "uncertainty": "Não demonstra privatização realizada nem predominância privada de todos os serviços; assistência aos necessitados é ressalvada nas linhas59–60.",
    "reviewedOn": "2026-10-07"
  },
  {
    "axis": "con",
    "position": "moderate-second",
    "confidence": "medium",
    "claims": [
      {
        "sourceTitle": "Casa Rosada — Milei, discurso após posse, 10/12/2023 (URL canônica)",
        "locator": "Parágrafos «A su vez, el cepo cambiario» e «Hoy volvemos a abrazar»; linhas20/57",
        "statement": "Rejeita controles cambiais e adota mercados livres de intervenção estatal.",
        "basis": "declaration",
        "publishedDate": "2023-12-10",
        "accessedDate": "2026-10-07"
      }
    ],
    "rationale": "Declara preferência por coordenação de mercado.",
    "relatedQuestionIds": [
      "controle_02",
      "controle_17"
    ],
    "uncertainty": "Programa de posse, não prática certificada; ajuste fiscal anunciado não comprova extinção de toda regulação.",
    "reviewedOn": "2026-10-07"
  }
];
const axes: AxisKey[] = ['est','rep','pod','imi','dip','int','eco','con','com','rel','mor','tec'];
/** Replaces only this reviewed identity; retains aliases and every prior source. */
export function reconcileLegacyPublicQuality01(entry: ReferenceEntry): ReferenceEntry {
 if(entry.id !== 'javier-milei') return entry;
 const sources=[...entry.sources];
 for(const source of legacyPublicQuality01Sources) if(!sources.some(s=>s.title===source.title && s.url===source.url)) sources.push(source);
 const result: ReferenceEntry={...entry,sources,vec:Object.fromEntries(axes.map(axis=>[axis,50])) as Record<AxisKey,number>,evidence:{},axisEvidence:{},coding:{},
  period:'Declarações no discurso de posse, 10/12/2023; leitura documental em07/10/2026',
  rationale:'Revisão localizada de propriedade privada e coordenação de mercado; demais eixos desconhecidos.',
  caveats:`${entry.caveats ?? ''} Revisão documental restrita ao discurso de10/12/2023: não certifica posições nem atos de2026. Mapeamentos genéricos anteriores, valores e URL indisponível preservados em legacyPublicQuality01LiveBefore/GeneratedBefore e no vetor bruto; eles não qualificam evidência documental. Sem posição atribuída aos dez eixos restantes.`.trim()};
 for(const input of legacyPublicQuality01Coding){const coded=codeReferenceAxis(input,sources); result.vec[input.axis]=coded.value;result.evidence[input.axis]=coded.evidence;result.axisEvidence![input.axis]=coded.axisEvidence;result.coding![input.axis]=coded.coding;}
 return result;
}
export const legacyPublicQuality01Repaired = legacyPublicQuality01LiveBefore.map(reconcileLegacyPublicQuality01);
export const legacyPublicQuality01RejectedAxes = { 'javier-milei': {
 rep:'Referências à vitória eleitoral não estabelecem regras democráticas ou direitos da oposição.',
 int:'Alinhamento e não intervenção não estão documentados no discurso.',
 rel:'Bênção e referência a Hanukkah não determinam política de secularismo ou religião estatal.',
 mor:'Crítica econômica ao financiamento progressista não estabelece direitos culturais.',
 pod:'Diagnóstico criminal e ameaça de uso de poderes estatais não recebem extrapolação para o construto completo.',
 imi:'Elogio histórico à imigração não certifica política contemporânea de integração.',
 est:'História constitucional não certifica posição contemporânea sobre distribuição territorial do poder.',
 dip:'Não há política militar estabelecida.',com:'Controles cambiais são mapeados em con; não comprovam política de tarifas.',tec:'Não há política tecnológica estabelecida.'
} };
