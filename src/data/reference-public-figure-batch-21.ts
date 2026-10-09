import { AXES } from '../lib/scoring';
import type { ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';
export const publicFigureBatch21Sources: ReferenceSource[] = [
  {
    "title": "Marina Silva — diretrizes2018 apresentadas pessoalmente, original próprio",
    "url": "https://marinasilva.org.br/wp-content/uploads/2018/08/MS18-Diretrizes-Marina-Edu.pdf",
    "note": "Apresentação nominal1101–1116; corpo lido em intervalos complementares. Programa coletivo2018, sem dia editorial indicado; não autoria exclusiva ou execução."
  },
  {
    "title": "Marina Silva — declaração própria reproduzida16/08/2018",
    "url": "https://www1.folha.uol.com.br/poder/2018/08/marina-silva-mira-mulheres-e-fala-de-saude-e-igreja-em-estreia-na-rua.shtml",
    "note": "Data224/corpo229–260 lidos. Declaração própria256 adota cláusula alinhada ao programa;259 preserva iniciativa parlamentar,260 afirma laicidade/direitos civis. Reprodução atribuída, não gravação examinada."
  },
  {
    "title": "IISD/ENB — atividade de Marina Silva23/03/2026",
    "url": "https://enb.iisd.org/conference-parties-convention-migratory-species-wild-animals-cms-cop15-23mar2026",
    "note": "Data82/corpo91–112 efetivamente lidos; fala nominal98 confirma atividade viva23/03/2026. Não certifica cargo atual, programa renovado ou imagens."
  }
];
export const publicFigureBatch21Coding: ReferenceAxisCoding[] = [
  {
    "axis": "rep",
    "position": "moderate-first",
    "confidence": "medium",
    "relatedQuestionIds": [
      "representacao_02",
      "representacao_03"
    ],
    "claims": [
      {
        "sourceTitle": "Marina Silva — diretrizes2018 apresentadas pessoalmente, original próprio",
        "publishedDate": "2018; dia editorial não indicado",
        "accessedDate": "2026-10-08",
        "locator": "63–85/104–124/478–480",
        "statement": "Fortalece controle cidadão, eleições e diálogo parlamentar.",
        "basis": "declaration"
      }
    ],
    "rationale": "Autoridade popular.",
    "uncertainty": "Representantes e filtros eleitorais113 permanecem; critérios técnicos86–88.",
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "imi",
    "position": "moderate-second",
    "confidence": "medium",
    "relatedQuestionIds": [
      "imigracao_04",
      "imigracao_08"
    ],
    "claims": [
      {
        "sourceTitle": "Marina Silva — diretrizes2018 apresentadas pessoalmente, original próprio",
        "publishedDate": "2018; dia editorial não indicado",
        "accessedDate": "2026-10-08",
        "locator": "24–26/450–477/522–537",
        "statement": "Promove diversidade cultural e preservação de tradições coexistentes.",
        "basis": "declaration"
      }
    ],
    "rationale": "Pluralidade cultural.",
    "uncertainty": "Patrimônio/tradições465–469 preservados; não abertura migratória irrestrita.",
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "dip",
    "position": "moderate-first",
    "confidence": "medium",
    "relatedQuestionIds": [
      "diplomacia_18"
    ],
    "claims": [
      {
        "sourceTitle": "Marina Silva — diretrizes2018 apresentadas pessoalmente, original próprio",
        "publishedDate": "2018; dia editorial não indicado",
        "accessedDate": "2026-10-08",
        "locator": "1016–1022",
        "statement": "Fortalece capacidade e tecnologia das forças armadas.",
        "basis": "declaration"
      }
    ],
    "rationale": "Defesa armada.",
    "uncertainty": "Missão constitucional inclui lei/ordem interna1016–17; paz/cooperação981.",
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "int",
    "position": "moderate-first",
    "confidence": "medium",
    "relatedQuestionIds": [
      "intervencao_01",
      "intervencao_13"
    ],
    "claims": [
      {
        "sourceTitle": "Marina Silva — diretrizes2018 apresentadas pessoalmente, original próprio",
        "publishedDate": "2018; dia editorial não indicado",
        "accessedDate": "2026-10-08",
        "locator": "979–988",
        "statement": "Afirma autodeterminação e não intervenção gerais.",
        "basis": "declaration"
      }
    ],
    "rationale": "Soberania.",
    "uncertainty": "Segurança multilateral983–984 e projeção de interesses987–988.",
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "com",
    "position": "moderate-second",
    "confidence": "medium",
    "relatedQuestionIds": [
      "comercio_01",
      "comercio_02"
    ],
    "claims": [
      {
        "sourceTitle": "Marina Silva — diretrizes2018 apresentadas pessoalmente, original próprio",
        "publishedDate": "2018; dia editorial não indicado",
        "accessedDate": "2026-10-08",
        "locator": "696–704/884–898/989–998",
        "statement": "Abre economia, reduz tarifas/barreiras e combate protecionismo.",
        "basis": "declaration"
      }
    ],
    "rationale": "Abertura comercial.",
    "uncertainty": "Adaptação programada700–702; salvaguardas sanitárias896 e união aduaneira996.",
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "mor",
    "position": "moderate-first",
    "confidence": "medium",
    "relatedQuestionIds": [
      "moral_06",
      "moral_18"
    ],
    "claims": [
      {
        "sourceTitle": "Marina Silva — diretrizes2018 apresentadas pessoalmente, original próprio",
        "publishedDate": "2018; dia editorial não indicado",
        "accessedDate": "2026-10-08",
        "locator": "159–163/283–288/504–513/538–551",
        "statement": "Promove igualdade de gênero, pluralidade familiar e direitos conjugais/adotivos.",
        "basis": "declaration"
      }
    ],
    "rationale": "Autonomia familiar.",
    "uncertainty": "Iniciativa legislativa259 da declaração própria; sem aborto inferido.",
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "tec",
    "position": "moderate-first",
    "confidence": "medium",
    "relatedQuestionIds": [
      "tecnologia_02"
    ],
    "claims": [
      {
        "sourceTitle": "Marina Silva — diretrizes2018 apresentadas pessoalmente, original próprio",
        "publishedDate": "2018; dia editorial não indicado",
        "accessedDate": "2026-10-08",
        "locator": "89–96/205–225/612–628/670–676/705–719/1095–1100",
        "statement": "Promove inovação produtiva, digital e científica transversal.",
        "basis": "declaration"
      }
    ],
    "rationale": "Adoção tecnológica.",
    "uncertainty": "Ética96, clima804–809 e limites de agrotóxicos969.",
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "rel",
    "position": "moderate-first",
    "confidence": "medium",
    "relatedQuestionIds": [
      "religiao_03"
    ],
    "claims": [
      {
        "sourceTitle": "Marina Silva — declaração própria reproduzida16/08/2018",
        "publishedDate": "2018-08-16",
        "accessedDate": "2026-10-08",
        "locator": "260",
        "statement": "Afirma Estado laico e respeito aos direitos civis.",
        "basis": "declaration"
      }
    ],
    "rationale": "Laicidade pública.",
    "uncertainty": "Não certifica separação em prática; crença pessoal não pontuada.",
    "reviewedOn": "2026-10-08"
  }
];
const entry: ReferenceEntry={id:'marina-silva',name:'Marina Silva',aliases:['Maria Osmarina Marina Silva Vaz de Lima','Maria Osmarina da Silva'],kind:'person',category:'public-figure',period:'Programa coletivo pessoalmente apresentado2018; declaração própria16/08/2018; atividade23/03/2026',sources:publicFigureBatch21Sources,vec:Object.fromEntries(AXES.map(({key})=>[key,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{},rationale:'Democracia, pluralidade cultural e familiar, abertura comercial, inovação, defesa constitucional, soberania e laicidade.',caveats:'Revisão documental independente delimitada e julgamento Root aceitos. Atribuição documental coletiva aceita no escopo declarado, sem autoria exclusiva, assinatura própria, correspondência byte a byte com TSE, implementação ou renovação2026. Estatísticas e projeções não certificadas. Quatro eixos desconhecidos sem evidência; quantidade de códigos não substitui julgamento substantivo.'};
for(const input of publicFigureBatch21Coding){const c=codeReferenceAxis(input,entry.sources);entry.vec[input.axis]=c.value;entry.evidence[input.axis]=c.evidence;entry.axisEvidence![input.axis]=c.axisEvidence;entry.coding![input.axis]=c.coding;}
export const publicFigureBatch21: ReferenceEntry[]=[entry];
export const publicFigureBatch21UnknownAxes={
  "est": "Descentralização tributária1072–1078 fortalece pacto existente, sem nova competência legislativa independente verificada.",
  "pod": "Liberdade de expressão478–480 e direitos universais494–498 coexistem com inteligência386–390/armas391–394; coerção civil geral não resolvida.",
  "eco": "Participação privada685–695/788–794 coexiste com propriedade pública estratégica692–693; hierarquia proprietária ampla não resolvida.",
  "con": "Mercados/deregulação709, autonomia monetária1030–1032 e planejamento/regulação685/755–759 coexistem; alocação geral não resolvida."
};
