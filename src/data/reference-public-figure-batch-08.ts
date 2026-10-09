import type { ReferenceEntry, ReferenceSource } from './references';
import { AXES } from '../lib/scoring';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';
export interface PublicFigureBatch08Spec {id:string;name:string;aliases?:string[];period:string;sources:ReferenceSource[];coding:ReferenceAxisCoding[];caveats:string;identityReview:'dated-identity-report-checked';}
export const publicFigureBatch08Specs: PublicFigureBatch08Spec[] = [
  {
    "id": "atiku-abubakar",
    "name": "Atiku Abubakar",
    "aliases": [
      "Alhaji Atiku Abubakar"
    ],
    "period": "Programa da campanha2023; atividade reportada28/05/2026 sem atualizar automaticamente posições",
    "sources": [
      {
        "title": "Atiku Abubakar — My Covenant with Nigerians, programa da campanha2023, PDF74p",
        "url": "https://elections.civichive.org/wp-content/uploads/2022/10/Atikus-5-Point-Development-Agenda-Abridged.pdf",
        "note": "Programa primário arquivado pelo CivicHive; endosso pessoal p6 física57–66. Áreas indicadas efetivamente lidas; não alegamos leitura integral das74p. Hospedagem2022/10 não certifica dia editorial."
      },
      {
        "title": "TheCable — atividade de Atiku Abubakar,28/05/2026",
        "url": "https://www.thecable.ng/nobody-was-defeated-atiku-calls-for-unity-after-winning-adc-presidential-primary/",
        "note": "Cabeçalho46 e corpo54–91 realmente lidos. Reportagem secundária usada exclusivamente para atividade/identidade em2026; acusações e resultado eleitoral não auditados nem codificados."
      }
    ],
    "coding": [
      {
        "axis": "est",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Atiku Abubakar — My Covenant with Nigerians, programa da campanha2023, PDF74p",
            "locator": "PDFp65 física1198–1215",
            "statement": "Propõe devolução multissetorial de competências e autonomia financeira local.",
            "basis": "declaration",
            "publishedDate": "Campanha2023; arquivo hospedado2022/10, dia editorial não certificado",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Federalismo descentralizado.",
        "uncertainty": "Mantém padrões e garantias federais1203–1205; sem secessão.",
        "relatedQuestionIds": [
          "estrutura_03",
          "estrutura_05",
          "estrutura_19"
        ],
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Atiku Abubakar — My Covenant with Nigerians, programa da campanha2023, PDF74p",
            "locator": "PDFp62 física1110–1155; p71,1325–1327",
            "statement": "Defende voto efetivo, participação contínua, transparência e separação de poderes.",
            "basis": "declaration",
            "publishedDate": "Campanha2023; arquivo hospedado2022/10, dia editorial não certificado",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Orientação democrática ampla.",
        "uncertainty": "Programa normativo; prática não auditada.",
        "relatedQuestionIds": [
          "representacao_07",
          "representacao_19"
        ],
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "eco",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Atiku Abubakar — My Covenant with Nigerians, programa da campanha2023, PDF74p",
            "locator": "PDFp12–13 físicas80–112; p22,251–261",
            "statement": "Prioriza liderança privada e quebra de monopólios em infraestrutura.",
            "basis": "declaration",
            "publishedDate": "Campanha2023; arquivo hospedado2022/10, dia editorial não certificado",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Propriedade e provisão privadas multissetoriais.",
        "uncertainty": "Regulação e PPP permanecem; não privatização universal.",
        "relatedQuestionIds": [
          "economia_02",
          "economia_03",
          "economia_06"
        ],
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "con",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Atiku Abubakar — My Covenant with Nigerians, programa da campanha2023, PDF74p",
            "locator": "PDFp12 física80–91; p19,186–203; p30,429–466; p36,559–573",
            "statement": "Prioriza preços de mercado e desregulação, com incentivos públicos delimitados.",
            "basis": "declaration",
            "publishedDate": "Campanha2023; arquivo hospedado2022/10, dia editorial não certificado",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Alocação predominantemente por mercados.",
        "uncertainty": "Planejamento, proteção seletiva e garantias públicas limitam a direção.",
        "relatedQuestionIds": [
          "controle_02",
          "controle_04",
          "controle_17"
        ],
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "tec",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Atiku Abubakar — My Covenant with Nigerians, programa da campanha2023, PDF74p",
            "locator": "PDFp14 física125–127; p33,501–523",
            "statement": "Promove software, digitalização governamental, formação e aplicações multissetoriais.",
            "basis": "declaration",
            "publishedDate": "Campanha2023; arquivo hospedado2022/10, dia editorial não certificado",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Adoção tecnológica ampla.",
        "uncertainty": "Objetivos não são execução nem apoio a qualquer tecnologia.",
        "relatedQuestionIds": [
          "tecnologia_01",
          "tecnologia_02"
        ],
        "reviewedOn": "2026-10-08"
      }
    ],
    "caveats": "Programa pessoalmente endossado, não prática ou crença privada. Data editorial exata não certificada. Identidade2026 documentada por reportagem; acusações não auditadas. Sete eixos desconhecidos; revisão documental independente delimitada.",
    "identityReview": "dated-identity-report-checked"
  }
];
/** No selected dormant identity: no original record discarded or overwritten. */
export const publicFigureBatch08OriginalRecords: ReferenceEntry[] = [];
export const publicFigureBatch08: ReferenceEntry[] = publicFigureBatch08Specs.map(spec=>{
 const entry: ReferenceEntry={id:spec.id,name:spec.name,aliases:spec.aliases,kind:'person',category:'public-figure',period:spec.period,sources:spec.sources,caveats:spec.caveats,rationale:'Programa pessoalmente endossado; orientação ampla e contrapontos explícitos.',vec:Object.fromEntries(AXES.map(({key})=>[key,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{}};
 for(const input of spec.coding){const coded=codeReferenceAxis(input,spec.sources);entry.vec[input.axis]=coded.value;entry.evidence[input.axis]=coded.evidence;entry.axisEvidence![input.axis]=coded.axisEvidence;entry.coding![input.axis]=coded.coding;}
 return entry;
});
