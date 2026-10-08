import type { ReferenceEntry, ReferenceSource } from './references';
import { AXES } from '../lib/scoring';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';
export interface PublicFigureBatch17Spec {id:string;name:string;aliases?:string[];period:string;sources:ReferenceSource[];coding:ReferenceAxisCoding[];caveats:string;identityReview:'author-current-source-checked';}
export const publicFigureBatch17Specs: PublicFigureBatch17Spec[] = [
  {
    "id": "jill-stein",
    "name": "Jill Stein",
    "aliases": [
      "Jill Ellen Stein"
    ],
    "period": "Declarações próprias de campanha2024; atividade reportada18/08/2026",
    "sources": [
      {
        "title": "Jill Stein — declaração própria no guia oficial da Califórnia2024",
        "url": "https://vigarchive.sos.ca.gov/2024/primary/candidates/president/president-green-cand-statements.htm",
        "note": "Cabeçalho5, declaração18–29 e atribuição41 efetivamente lidos; edição primárias05/03/2024, dia de submissão não indicado."
      },
      {
        "title": "Jill Stein — respostas próprias VOTE411, edição eleitoral2024",
        "url": "https://www.vote411.org/node/15061",
        "note": "Identificação52–58 e respostas do candidato80–109 efetivamente lidas. Edição vinculada à campanha2024, submissão não datada."
      },
      {
        "title": "Jill Stein — We Do Not Consent to War,04/10/2024",
        "url": "https://www.gp.org/we_do_not_consent_to_war",
        "note": "Carta própria17–40 efetivamente lida, assinatura nominalJill40 e publicação04/10/2024; não confundir com textos de terceiros no partido."
      },
      {
        "title": "Independent Political Report — atividade de Jill Stein,21/08/2026",
        "url": "https://independentpoliticalreport.com/2026/08/former-green-nominee-jill-stein-ordered-to-appear-in-person-in-missouri-misdemeanor-case/",
        "note": "Data11/corpo15–24 efetivamente lidos: reação própria18/08/2026 reportada; identidade apenas, sem certificar presença futura em audiência."
      }
    ],
    "coding": [
      {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Jill Stein — declaração própria no guia oficial da Califórnia2024",
            "locator": "Texto linhas18–29; atribuição de submissão própria41",
            "statement": "Defende escolha eleitoral, direitos e autoridade popular.",
            "basis": "declaration",
            "publishedDate": "Guia de primárias2024-03-05; submissão não datada",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Representação democrática.",
        "uncertainty": "Declaração, não execução eleitoral.",
        "relatedQuestionIds": [
          "representacao_07",
          "representacao_15"
        ],
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Jill Stein — We Do Not Consent to War,04/10/2024",
            "locator": "Texto linhas22/29–31; assinatura40",
            "statement": "Reduz orçamento militar e substitui militarização por diplomacia.",
            "basis": "declaration",
            "publishedDate": "2024-10-04",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Desmilitarização geral.",
        "uncertainty": "Embargo de armas condicional21; não desarmamento completo.",
        "relatedQuestionIds": [
          "diplomacia_01",
          "diplomacia_02"
        ],
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Jill Stein — respostas próprias VOTE411, edição eleitoral2024",
            "locator": "Texto linhas87–89/106–109",
            "statement": "Propõe propriedade pública de saúde, indústria farmacêutica e rede energética nacional.",
            "basis": "declaration",
            "publishedDate": "Edição eleitoral presidencial2024; submissão não datada",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Participação pública entre setores.",
        "uncertainty": "Não maioria pública nacional; demais negócios privados não abolidos.",
        "relatedQuestionIds": [
          "economia_03",
          "economia_04"
        ],
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "con",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Jill Stein — We Do Not Consent to War,04/10/2024",
            "locator": "Texto linhas29–31; assinatura40",
            "statement": "Propõe controles nacionais de aluguel, salário mínimo e tributação redistributiva.",
            "basis": "declaration",
            "publishedDate": "2024-10-04",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Alocação regulada multissetorial.",
        "uncertainty": "Não planejamento integral; direção dos outros mercados não determinada.",
        "relatedQuestionIds": [
          "controle_01",
          "controle_02",
          "controle_05",
          "controle_19"
        ],
        "reviewedOn": "2026-10-08"
      }
    ],
    "caveats": "Quatro direções documentais delimitadas aceitas por revisão independente e Root; oito eixos desconhecidos. Candidatura/partido não transferem plataforma integral. Blog externo de reprodução sem atribuição específica corroborada permanece pesquisa não graduada. Fonte2026 apenas identidade, não política2024 renovada nem presença futura em audiência.",
    "identityReview": "author-current-source-checked"
  }
];
/** No selected dormant identity: no original record discarded or overwritten. */
export const publicFigureBatch17OriginalRecords: ReferenceEntry[] = [];
export const publicFigureBatch17: ReferenceEntry[] = publicFigureBatch17Specs.map(spec=>{
 const entry: ReferenceEntry={id:spec.id,name:spec.name,aliases:spec.aliases,kind:'person',category:'public-figure',period:spec.period,sources:spec.sources,caveats:spec.caveats,rationale:'Programa pessoalmente endossado; orientação ampla e contrapontos explícitos.',vec:Object.fromEntries(AXES.map(({key})=>[key,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{}};
 for(const input of spec.coding){const coded=codeReferenceAxis(input,spec.sources);entry.vec[input.axis]=coded.value;entry.evidence[input.axis]=coded.evidence;entry.axisEvidence![input.axis]=coded.axisEvidence;entry.coding![input.axis]=coded.coding;}
 return entry;
});
