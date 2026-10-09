import { AXES } from '../lib/scoring';
import type { ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';
export const publicFigureBatch18Sources: ReferenceSource[] = [
  {
    "title": "Jean-Luc Mélenchon — L’Avenir en commun, versão abrégée2022",
    "url": "https://melenchon.fr/wp-content/uploads/2022/04/programme-avenir-en-commun-abrege.pdf",
    "note": "Sítio pessoal; título26–33 e introdução112–127 próprios. Corpo indexado0–710 integralmente efetivamente lido;32páginas abreviadas, não programa expandido. Ano2022 explícito no corpo; dia editorial não indicado, caminhoApril não tratado como dia de publicação."
  },
  {
    "title": "Le Monde — atividade de Mélenchon,13/09/2026",
    "url": "https://www.lemonde.fr/en/politics/article/2026/09/13/2027-presidential-election-melenchon-pressures-left-wing-rivals-at-fete-de-l-humanite-festival_6757466_5.html",
    "note": "Data193 e relato201–203 efetivamente lidos; discurso12/09/2026 apenas identidade viva/atividade. Sem confirmação visual de foto nem renovação de política2022."
  }
];
export const publicFigureBatch18Coding: ReferenceAxisCoding[] = [
  {
    "axis": "rep",
    "position": "moderate-first",
    "confidence": "medium",
    "relatedQuestionIds": [
      "representacao_09",
      "representacao_11"
    ],
    "claims": [
      {
        "sourceTitle": "Jean-Luc Mélenchon — L’Avenir en commun, versão abrégée2022",
        "publishedDate": "2022; versão eleitoral abreviada, sem dia editorial indicado",
        "accessedDate": "2026-10-08",
        "locator": "168–177",
        "statement": "Propõe constituinte, parlamentarismo e referendo cidadão.",
        "basis": "declaration"
      }
    ],
    "rationale": "Autoridade popular ampliada.",
    "uncertainty": "Voto obrigatório177; norma proposta, não prática institucional.",
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "pod",
    "position": "moderate-second",
    "confidence": "medium",
    "relatedQuestionIds": [
      "poder_11",
      "poder_02"
    ],
    "claims": [
      {
        "sourceTitle": "Jean-Luc Mélenchon — L’Avenir en commun, versão abrégée2022",
        "publishedDate": "2022; versão eleitoral abreviada, sem dia editorial indicado",
        "accessedDate": "2026-10-08",
        "locator": "330/343–346/455–470",
        "statement": "Rejeita emergências e restrições gerais às liberdades.",
        "basis": "declaration"
      }
    ],
    "rationale": "Coerção civil limitada.",
    "uncertainty": "Inteligência464/PHAROS466 e conscrição cidadã/guarda nacional602 preservadas.",
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "eco",
    "position": "moderate-first",
    "confidence": "medium",
    "relatedQuestionIds": [
      "economia_03",
      "economia_04"
    ],
    "claims": [
      {
        "sourceTitle": "Jean-Luc Mélenchon — L’Avenir en commun, versão abrégée2022",
        "publishedDate": "2022; versão eleitoral abreviada, sem dia editorial indicado",
        "accessedDate": "2026-10-08",
        "locator": "294–295/319/333–338/362/380/392–394/599/660–668",
        "statement": "Expande propriedade/provisão pública entre sistemas nacionais.",
        "basis": "declaration"
      }
    ],
    "rationale": "Economia pública ampliada.",
    "uncertainty": "Privadas217–223; controle digital668 não certifica propriedade; sem maioria pública.",
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "con",
    "position": "moderate-first",
    "confidence": "medium",
    "relatedQuestionIds": [
      "controle_01",
      "controle_02"
    ],
    "claims": [
      {
        "sourceTitle": "Jean-Luc Mélenchon — L’Avenir en commun, versão abrégée2022",
        "publishedDate": "2022; versão eleitoral abreviada, sem dia editorial indicado",
        "accessedDate": "2026-10-08",
        "locator": "183–198/318/354–357/427/670–681",
        "statement": "Coordena preços, salários e investimentos entre setores.",
        "basis": "declaration"
      }
    ],
    "rationale": "Alocação pública ampliada.",
    "uncertainty": "Apoio empresarial217–223 permanece; receita prevista não certificada.",
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "com",
    "position": "moderate-first",
    "confidence": "medium",
    "relatedQuestionIds": [
      "comercio_01",
      "comercio_02"
    ],
    "claims": [
      {
        "sourceTitle": "Jean-Luc Mélenchon — L’Avenir en commun, versão abrégée2022",
        "publishedDate": "2022; versão eleitoral abreviada, sem dia editorial indicado",
        "accessedDate": "2026-10-08",
        "locator": "424–426/583–584/626–627",
        "statement": "Propõe proteção ecológica e barreiras comerciais.",
        "basis": "declaration"
      }
    ],
    "rationale": "Proteção comercial generalizada.",
    "uncertainty": "Harmonização europeia582 e cooperação611 permanecem.",
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "rel",
    "position": "moderate-first",
    "confidence": "medium",
    "relatedQuestionIds": [
      "religiao_01",
      "religiao_03"
    ],
    "claims": [
      {
        "sourceTitle": "Jean-Luc Mélenchon — L’Avenir en commun, versão abrégée2022",
        "publishedDate": "2022; versão eleitoral abreviada, sem dia editorial indicado",
        "accessedDate": "2026-10-08",
        "locator": "178–181/449",
        "statement": "Defende laicidade e extingue exceções de financiamento religioso.",
        "basis": "declaration"
      }
    ],
    "rationale": "Separação estatal ampla.",
    "uncertainty": "Não infere crenças pessoais nem proibição de culto.",
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "mor",
    "position": "moderate-first",
    "confidence": "medium",
    "relatedQuestionIds": [
      "moral_18"
    ],
    "claims": [
      {
        "sourceTitle": "Jean-Luc Mélenchon — L’Avenir en commun, versão abrégée2022",
        "publishedDate": "2022; versão eleitoral abreviada, sem dia editorial indicado",
        "accessedDate": "2026-10-08",
        "locator": "527–540/548/535–536",
        "statement": "Amplia igualdade de gênero e direitos familiares/LGBTI.",
        "basis": "declaration"
      }
    ],
    "rationale": "Costumes progressistas amplos.",
    "uncertainty": "Não imputa aborto ou posições não enunciadas.",
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "int",
    "position": "moderate-first",
    "confidence": "medium",
    "relatedQuestionIds": [
      "intervencao_01"
    ],
    "claims": [
      {
        "sourceTitle": "Jean-Luc Mélenchon — L’Avenir en commun, versão abrégée2022",
        "publishedDate": "2022; versão eleitoral abreviada, sem dia editorial indicado",
        "accessedDate": "2026-10-08",
        "locator": "594–597/610–611/628–631",
        "statement": "Recusa intervenção sem ONU e respeita soberania.",
        "basis": "declaration"
      }
    ],
    "rationale": "Intervenção unilateral limitada.",
    "uncertainty": "Mandato ONU596 permite intervenção; não pacifismo irrestrito.",
    "reviewedOn": "2026-10-08"
  }
];
const entry: ReferenceEntry={id:'jean-luc-melenchon',name:'Jean-Luc Mélenchon',aliases:['Jean Luc Melenchon','Jean-Luc Melenchon'],kind:'person',category:'public-figure',period:'Programa eleitoral próprio2022; identidade ativa12/09/2026',sources:publicFigureBatch18Sources,vec:Object.fromEntries(AXES.map(({key})=>[key,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{},rationale:'Refundação democrática, liberdades civis, economia pública planejada, proteção comercial, laicidade e soberania com exceção ONU.',caveats:'Revisão documental delimitada e julgamento Root aceitos. Declarações da edição abreviada2022, não realizações nem renovação em2026. Estatísticas e projeções financeiras do programa não certificadas. Quatro eixos desconhecidos; quantidade de códigos não substitui julgamento documental.'};
for(const input of publicFigureBatch18Coding){const c=codeReferenceAxis(input,entry.sources);entry.vec[input.axis]=c.value;entry.evidence[input.axis]=c.evidence;entry.axisEvidence![input.axis]=c.axisEvidence;entry.coding![input.axis]=c.coding;}
export const publicFigureBatch18: ReferenceEntry[]=[entry];
export const publicFigureBatch18UnknownAxes={est:'Refundação constitucional não determina competências territoriais.',imi:'Acolhimento migratório não resolve política cultural ampla.',dip:'Retirada da OTAN coexiste com conscrição e defesa602; direção militar geral não resolvida.',tec:'Pesquisa espacial/digital657–668 versus saída nuclear376 e limites ecológicos350–351/662 não resolve orientação geral.'};
