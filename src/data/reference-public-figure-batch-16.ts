import type { ReferenceEntry, ReferenceSource } from './references';
import { AXES } from '../lib/scoring';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';
export interface PublicFigureBatch16Spec {id:string;name:string;aliases?:string[];period:string;sources:ReferenceSource[];coding:ReferenceAxisCoding[];caveats:string;identityReview:'author-current-source-checked';}
export const publicFigureBatch16Specs: PublicFigureBatch16Spec[] = [
  {
    "id": "myriam-bregman",
    "name": "Myriam Bregman",
    "aliases": [
      "Myriam Teresa Bregman"
    ],
    "period": "Programa pessoal sem data editorial, consultado08/10/2026; atividade legislativa02/10/2026",
    "sources": [
      {
        "title": "Myriam Bregman — programa no sítio pessoal, sem data editorial",
        "url": "https://www.myriambregman.com.ar/programa.php",
        "note": "Corpo2–90 integralmente lido; contexto de pandemia, edição e publicação não datadas, sem fabricação de2023."
      },
      {
        "title": "Myriam Bregman — página pessoal e propostas",
        "url": "https://www.myriambregman.com.ar/",
        "note": "Corpo77–84 lido; identificação pessoal e ligação às propostas, sem data editorial."
      },
      {
        "title": "HCDN — projetos de Myriam Bregman, atividade2026",
        "url": "https://www.hcdn.gob.ar/diputados/mbregman/listado-proyectos.html",
        "note": "Corpo10–48 lido: identidade e projetos02/10/2026. Sumários não codificados, fotografia não examinada."
      }
    ],
    "coding": [
      {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Myriam Bregman — programa no sítio pessoal, sem data editorial",
            "locator": "Página própria linhas60–62",
            "statement": "Propõe revogação popular de mandatos de legisladores, funcionários e juízes.",
            "basis": "declaration",
            "publishedDate": "Sem data editorial; edição de contexto pandêmico não datada, consultada2026-10-08",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Responsabilização popular geral.",
        "uncertainty": "Não certifica prática nem pluralismo de toda instituição.",
        "relatedQuestionIds": [
          "representacao_11"
        ],
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Myriam Bregman — programa no sítio pessoal, sem data editorial",
            "locator": "Página própria linhas33/36–45/67–69",
            "statement": "Propõe bancos/comércio exterior públicos e saúde/serviços sob gestão coletiva.",
            "basis": "declaration",
            "publishedDate": "Sem data editorial; edição de contexto pandêmico não datada, consultada2026-10-08",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Propriedade pública multissetorial.",
        "uncertainty": "Gestão por trabalhadores e usuários; não percentual de propriedade nacional.",
        "relatedQuestionIds": [
          "economia_03",
          "economia_04",
          "economia_05",
          "economia_17"
        ],
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "con",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Myriam Bregman — programa no sítio pessoal, sem data editorial",
            "locator": "Página própria linhas33/45/51/67–69/83/87–90",
            "statement": "Planeja economia, controla preços e indexa salários e aposentadorias.",
            "basis": "declaration",
            "publishedDate": "Sem data editorial; edição de contexto pandêmico não datada, consultada2026-10-08",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Alocação econômica planejada.",
        "uncertainty": "Plano gerido por trabalhadores; crédito a pequenos poupadores33 e redução tributária83.",
        "relatedQuestionIds": [
          "controle_01",
          "controle_02",
          "controle_19"
        ],
        "reviewedOn": "2026-10-08"
      }
    ],
    "caveats": "Programa no sítio pessoal explicitamente não datado, não certificado como edição2023 nem prática atual. Nove eixos desconhecidos. Folheto coletivo2023 sem endosso pessoal localizado permanece pesquisa, sem transferência por candidatura/partido. Três direções delimitadas aceitas por revisão documental independente e Root.",
    "identityReview": "author-current-source-checked"
  }
];
/** No selected dormant identity: no original record discarded or overwritten. */
export const publicFigureBatch16OriginalRecords: ReferenceEntry[] = [];
export const publicFigureBatch16: ReferenceEntry[] = publicFigureBatch16Specs.map(spec=>{
 const entry: ReferenceEntry={id:spec.id,name:spec.name,aliases:spec.aliases,kind:'person',category:'public-figure',period:spec.period,sources:spec.sources,caveats:spec.caveats,rationale:'Programa pessoalmente endossado; orientação ampla e contrapontos explícitos.',vec:Object.fromEntries(AXES.map(({key})=>[key,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{}};
 for(const input of spec.coding){const coded=codeReferenceAxis(input,spec.sources);entry.vec[input.axis]=coded.value;entry.evidence[input.axis]=coded.evidence;entry.axisEvidence![input.axis]=coded.axisEvidence;entry.coding![input.axis]=coded.coding;}
 return entry;
});
