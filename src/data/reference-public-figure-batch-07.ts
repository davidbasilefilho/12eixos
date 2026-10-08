import type { ReferenceEntry, ReferenceSource } from './references';
import { AXES } from '../lib/scoring';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';
export interface PublicFigureBatch07Spec {id:string;name:string;aliases?:string[];period:string;sources:ReferenceSource[];coding:ReferenceAxisCoding[];caveats:string;identityReview:'author-current-source-checked';}
export const publicFigureBatch07Specs: PublicFigureBatch07Spec[] = [
  {
    "id": "friedrich-merz",
    "name": "Friedrich Merz",
    "period": "Declarações próprias14/05/2025 e23/06/2026",
    "sources": [
      {
        "title": "Friedrich Merz — Regierungserklärung,14/05/2025, Bulletin34-3",
        "url": "https://www.bundesregierung.de/breg-de/suche/regierungserklaerung-von-bundeskanzler-friedrich-merz-2347888",
        "note": "Texto próprio completo, corpo124–243 realmente lido em alemão, data/autoria explícitas. Resumos governamentais e falas de ministros não substituem este corpo."
      },
      {
        "title": "Friedrich Merz — Tag der Industrie,23/06/2026, transcrição integral",
        "url": "https://www.bundesregierung.de/breg-de/aktuelles/kanzler-tag-der-industrie-2444560",
        "note": "Transcrição própria128–201 realmente lida; cabeçalho109 identifica23/06/2026. Corpo comprova atividade datada, sem garantir resultados anunciados."
      }
    ],
    "coding": [
      {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Friedrich Merz — Regierungserklärung,14/05/2025, Bulletin34-3",
            "locator": "Corpo132–135 e237–239: oposição e alternância democrática; debate",
            "statement": "Valoriza oposição legítima, alternância pacífica e debate público.",
            "basis": "declaration",
            "publishedDate": "2025-05-14",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Orientação democrática declarada.",
        "uncertainty": "Sem auditoria da prática ou direitos integrais de oposição.",
        "relatedQuestionIds": [
          "representacao_03",
          "representacao_19"
        ],
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "imi",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Friedrich Merz — Regierungserklärung,14/05/2025, Bulletin34-3",
            "locator": "Corpo224–230: integração, idioma e valores comuns",
            "statement": "Exige idioma e valores comuns para integração.",
            "basis": "declaration",
            "publishedDate": "2025-05-14",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Orientação assimilacionista parcial.",
        "uncertainty": "Reconhece país de imigração e tratamento respeitoso; sem assimilação irrestrita.",
        "relatedQuestionIds": [
          "imigracao_01"
        ],
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "dip",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Friedrich Merz — Regierungserklärung,14/05/2025, Bulletin34-3",
            "locator": "Corpo149/156–162: dissuasão, recursos militares e serviço voluntário",
            "statement": "Prioriza dissuasão militar, recursos para forças armadas e recrutamento voluntário.",
            "basis": "declaration",
            "publishedDate": "2025-05-14",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Defesa armada como estratégia de segurança.",
        "uncertainty": "Rejeita participação direta na guerra e pretende evitar uso das armas.",
        "relatedQuestionIds": [
          "diplomacia_01",
          "diplomacia_03"
        ],
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "com",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Friedrich Merz — Tag der Industrie,23/06/2026, transcrição integral",
            "locator": "Corpo147–154: acordos comerciais; compromisso próprio154",
            "statement": "Defende acordos e continuidade do livre comércio internacional.",
            "basis": "declaration",
            "publishedDate": "2026-06-23",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Orientação comercial aberta.",
        "uncertainty": "Reconhece dependências estratégicas; resultados anunciados não certificados.",
        "relatedQuestionIds": [
          "comercio_02",
          "comercio_09"
        ],
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "tec",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Friedrich Merz — Tag der Industrie,23/06/2026, transcrição integral",
            "locator": "Corpo170–185: Hightech Agenda; aplicações e capacidades computacionais",
            "statement": "Promove IA, biotecnologia, fusão e ampliação computacional.",
            "basis": "declaration",
            "publishedDate": "2026-06-23",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Adoção multissetorial de tecnologias.",
        "uncertainty": "Objetivos não são execução; política climática e soberania condicionam adoção.",
        "relatedQuestionIds": [
          "tecnologia_01",
          "tecnologia_02"
        ],
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "con",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Friedrich Merz — Regierungserklärung,14/05/2025, Bulletin34-3",
            "locator": "Corpo164/176/189–198/211: indústria, energia, trabalho e agricultura",
            "statement": "Propõe desregulação multissetorial, preços de carbono via mercado e flexibilidade laboral.",
            "basis": "declaration",
            "publishedDate": "2025-05-14",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Friedrich Merz — Tag der Industrie,23/06/2026, transcrição integral",
            "locator": "Corpo172–180/186–187/194: apoio público e garantias; reforma regulatória; ordem de mercado",
            "statement": "Elogia ordem de mercado e alívio regulatório, mantendo apoio público à inovação.",
            "basis": "declaration",
            "publishedDate": "2026-06-23",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Mercados e incentivos orientam alocação.",
        "uncertainty": "Investimento público subordinado ao maior investimento privado167–169; política tecnológica e garantias públicas2026,172–180. Sem ausência de intervenção estatal.",
        "relatedQuestionIds": [
          "controle_02",
          "controle_04",
          "controle_14"
        ],
        "reviewedOn": "2026-10-08"
      }
    ],
    "caveats": "Declarações próprias, sem imputação por cargo ou governo. Resultados autodeclarados não certificados. Eixos não codificados desconhecidos; revisão documental independente delimitada aceita; julgamento final e integração pelo Root pendentes.",
    "identityReview": "author-current-source-checked"
  },
  {
    "id": "peter-obi",
    "name": "Peter Obi",
    "aliases": [
      "Peter Gregory Onwubuasi Obi",
      "Peter Gregory Obi"
    ],
    "period": "Programa eleitoral2023 endossado pessoalmente; atividade publicada21/08/2026, sem atualizar automaticamente posições",
    "sources": [
      {
        "title": "Obi/Baba-Ahmed — Our Pact with Nigerians, campanha2023, PDF72p",
        "url": "https://elections.civichive.org/wp-content/uploads/2022/12/Peter-Obi-2023-Presidential-Manifesto.pdf",
        "note": "Programa primário arquivado pelo CivicHive;72p físicas, não resumo secundário. Autoria e compromisso pessoal de PeterObi nas p5/7; locais codificados efetivamente lidos. Nome do arquivo fonte03.12.22; não certifica dia editorial interno."
      },
      {
        "title": "Peter Obi — discurso de campanha publicado em sua conta,21/08/2026",
        "url": "https://www.linkedin.com/posts/peterobigregory_my-address-to-mark-the-commencement-of-the-activity-7496525769259544576-Tbdw",
        "note": "Autor nominal e data explícita no corpo20; post e complementos do mesmo autor29–46 realmente lidos para atividade datada. Comentários de terceiros não usados. Conta nominal pública também atribuída a Obi em link efetivamente seguido do CFR27/04/2026; não certifica declarações ou estatísticas de terceiros."
      },
      {
        "title": "CFR — atribuição externa da conta pública de Peter Obi,27/04/2026",
        "url": "https://www.cfr.org/articles/the-political-education-of-peter-obi",
        "note": "Fonte secundária usada só na verificação de identidade/conta: artigo datado, ligação16 efetivamente seguida ao mesmo perfil peterobigregory. Opiniões e alegações não usadas nos eixos."
      },
      {
        "title": "Peter Obi — publicação da conta vinculada pelo CFR",
        "url": "https://www.linkedin.com/posts/peterobigregory_nigeria-is-bleeding-from-within-it-is-deeply-share-7451264087566594048-dQBO/",
        "note": "Ligação do CFR realmente seguida, autoria nominal17 e corpo20–23 lidos, mesma conta da publicação datada21/08/2026. Data relativa5mo não convertida em dia exato; conteúdo não codificado."
      }
    ],
    "coding": [
      {
        "axis": "est",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Obi/Baba-Ahmed — Our Pact with Nigerians, campanha2023, PDF72p",
            "locator": "PDFp26/30; linhas556–565/710–718",
            "statement": "Propõe transferir competências e arrecadação aos estados.",
            "basis": "declaration",
            "publishedDate": "Campanha2023; arquivo03.12.22, dia editorial não certificado",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Descentralização territorial e fiscal.",
        "uncertainty": "Consenso necessário; não defende independência dos estados.",
        "relatedQuestionIds": [
          "estrutura_01",
          "estrutura_03"
        ],
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Obi/Baba-Ahmed — Our Pact with Nigerians, campanha2023, PDF72p",
            "locator": "PDFp5/27–28;88–98/605–618/632–636",
            "statement": "Defende separação de poderes, controle parlamentar e responsabilização executiva.",
            "basis": "declaration",
            "publishedDate": "Campanha2023; arquivo03.12.22, dia editorial não certificado",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Limites democráticos ao executivo.",
        "uncertainty": "Programa conjunto explicitamente endossado, sem prática comprovada.",
        "relatedQuestionIds": [
          "representacao_05",
          "representacao_19"
        ],
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "tec",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Obi/Baba-Ahmed — Our Pact with Nigerians, campanha2023, PDF72p",
            "locator": "PDFp33–34;769–790/803–817",
            "statement": "Promove IA, robótica, biotecnologia e capacitação digital.",
            "basis": "declaration",
            "publishedDate": "Campanha2023; arquivo03.12.22, dia editorial não certificado",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Adoção tecnológica multissetorial.",
        "uncertainty": "Transição climática condiciona incentivos; metas não são resultados.",
        "relatedQuestionIds": [
          "tecnologia_01",
          "tecnologia_02"
        ],
        "reviewedOn": "2026-10-08"
      }
    ],
    "caveats": "Programa conjunto explicitamente endossado; posição da candidatura, não prática nem crença privada. Identidade atual via publicação nominal datada; sem autenticação externa da conta. Eixos não codificados desconhecidos; revisão documental independente delimitada aceita; julgamento final e integração pelo Root pendentes.",
    "identityReview": "author-current-source-checked"
  }
];
export const publicFigureBatch07ResearchOnlyCoding: Record<string,ReferenceAxisCoding[]> = {
  "friedrich-merz": [],
  "peter-obi": [
    {
      "axis": "con",
      "position": "moderate-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Obi/Baba-Ahmed — Our Pact with Nigerians, campanha2023, PDF72p",
          "locator": "PDFp20/23/28/34;427–450/502–518/632–636/803–817",
          "statement": "Planeja desenvolvimento industrial e agrícola com incentivos públicos.",
          "basis": "declaration",
          "publishedDate": "Campanha2023; arquivo03.12.22, dia editorial não certificado",
          "accessedDate": "2026-10-07"
        }
      ],
      "rationale": "Coordenação econômica estatal multissetorial.",
      "uncertainty": "Contraponto: liberalização cambialp29, regulação por incentivosp27 e parceiros privados.",
      "relatedQuestionIds": [
        "controle_01",
        "controle_07",
        "controle_11"
      ],
      "reviewedOn": "2026-10-08"
    }
  ]
};
/** No selected identity exists in verified main/current or dormant source rows. */
export const publicFigureBatch07OriginalRecords: ReferenceEntry[] = [];
export const publicFigureBatch07: ReferenceEntry[] = publicFigureBatch07Specs.map(spec=>{
 const entry: ReferenceEntry={id:spec.id,name:spec.name,aliases:spec.aliases,kind:'person',category:'public-figure',period:spec.period,sources:spec.sources,caveats:spec.caveats,rationale:'Declarações primárias próprias ou programa pessoalmente endossado; amplitude e limites explícitos.',vec:Object.fromEntries(AXES.map(({key})=>[key,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{}};
 for(const input of spec.coding){const coded=codeReferenceAxis(input,spec.sources);entry.vec[input.axis]=coded.value;entry.evidence[input.axis]=coded.evidence;entry.axisEvidence![input.axis]=coded.axisEvidence;entry.coding![input.axis]=coded.coding;}
 return entry;
});
