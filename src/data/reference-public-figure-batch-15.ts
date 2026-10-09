import type { ReferenceEntry, ReferenceSource } from './references';
import { AXES } from '../lib/scoring';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';
export interface PublicFigureBatch15Spec {id:string;name:string;aliases?:string[];period:string;sources:ReferenceSource[];coding:ReferenceAxisCoding[];caveats:string;identityReview:'author-current-source-checked';}
export const publicFigureBatch15Specs: PublicFigureBatch15Spec[] = [
  {
    "id": "luisa-gonzalez",
    "name": "Luisa González",
    "aliases": [
      "Luisa Magdalena González Alcívar",
      "Luisa Gonzalez"
    ],
    "period": "Programa coletivamente endossado27/09/2024 para2025–2029; atividade12/09/2026",
    "sources": [
      {
        "title": "Luisa González e signatários — Plan de Trabajo2025–2029,27/09/2024",
        "url": "https://es.slideshare.net/slideshow/plan-de-trabajo-de-luisa-gonzalez-de-revolucion-ciudadana/273104796",
        "note": "Reprodução do documento pelo uploader eluniversocom; declaração de endosso e assinatura eletrônica nominal1954–1955 lidas. Resumo IA excluído; não autenticação criptográfica."
      },
      {
        "title": "CNE — disponibilização do Plan de Trabajo RC-RETO,16/11/2024",
        "url": "https://www.cne.gob.ec/download/plan-de-trabajo-rc-reto/",
        "note": "Página12–29 lida; corpo do PDF oficial inacessível, sem verificação de identidade de bytes com a reprodução."
      },
      {
        "title": "Ecuavisa — atividade de Luisa González,12/09/2026",
        "url": "https://www.ecuavisa.com/politica/tce-niega-recurso-luisa-gonzalez-prefectura-manabi-20260912-0031.html",
        "note": "Data15–16 e corpo17–24 lidos, identidade apenas. Foto de arquivo2025 não examinada."
      }
    ],
    "coding": [
      {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Luisa González e signatários — Plan de Trabajo2025–2029,27/09/2024",
            "locator": "Reprodução linhas2210–2229; declaração e assinatura nominal1954–1955",
            "statement": "Endossa participação popular e reformas eleitorais proporcionais.",
            "basis": "declaration",
            "publishedDate": "2024-09-27",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Democracia participativa.",
        "uncertainty": "Responsabilidade informativa2231; não execução eleitoral.",
        "relatedQuestionIds": [
          "representacao_03",
          "representacao_07",
          "representacao_19"
        ],
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "imi",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Luisa González e signatários — Plan de Trabajo2025–2029,27/09/2024",
            "locator": "Reprodução linhas2263–2283; declaração e assinatura nominal1954–1955",
            "statement": "Valoriza pluralismo cultural, linguístico e educação intercultural.",
            "basis": "declaration",
            "publishedDate": "2024-09-27",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Pluralismo cultural amplo.",
        "uncertainty": "Coexistência jurídica constitucional2272; não autonomia legislativa regional.",
        "relatedQuestionIds": [
          "imigracao_02",
          "imigracao_04",
          "imigracao_08"
        ],
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "int",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Luisa González e signatários — Plan de Trabajo2025–2029,27/09/2024",
            "locator": "Reprodução linhas2222/2362–2371; declaração e assinatura nominal1954–1955",
            "statement": "Rejeita intervenção externa e bases militares estrangeiras.",
            "basis": "declaration",
            "publishedDate": "2024-09-27",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Soberania e não intervenção.",
        "uncertainty": "Cooperação multilateral inclusive defesa2369–2371.",
        "relatedQuestionIds": [
          "intervencao_01",
          "intervencao_09"
        ],
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Luisa González e signatários — Plan de Trabajo2025–2029,27/09/2024",
            "locator": "Reprodução linhas2042/2067–2071/2135/2146/2220/2316–2318; declaração e assinatura nominal1954–1955",
            "statement": "Defende patrimônio e empresas estratégicas públicos; reverte privatizações quando necessário.",
            "basis": "declaration",
            "publishedDate": "2024-09-27",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Participação pública multissetorial.",
        "uncertainty": "Economia mista: prestadores privados2067, investimento2151 e parcerias2318; não maioria pública.",
        "relatedQuestionIds": [
          "economia_03",
          "economia_04",
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
            "sourceTitle": "Luisa González e signatários — Plan de Trabajo2025–2029,27/09/2024",
            "locator": "Reprodução linhas2027/2135–2158/2224; declaração e assinatura nominal1954–1955",
            "statement": "Coordena crédito, preços, indústria e setores estratégicos.",
            "basis": "declaration",
            "publishedDate": "2024-09-27",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Planejamento econômico amplo.",
        "uncertainty": "Investimento privado2151 e simplificação2137; não planejamento integral.",
        "relatedQuestionIds": [
          "controle_01",
          "controle_02",
          "controle_07"
        ],
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Luisa González e signatários — Plan de Trabajo2025–2029,27/09/2024",
            "locator": "Reprodução linhas2166/2212/2237–2257; declaração e assinatura nominal1954–1955",
            "statement": "Endossa autonomia reprodutiva, educação sexual e igualdade de gênero.",
            "basis": "declaration",
            "publishedDate": "2024-09-27",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Reformas morais inclusivas.",
        "uncertainty": "Apoio à maternidade2239; não casamento ou aborto irrestrito inferidos.",
        "relatedQuestionIds": [
          "moral_11",
          "moral_18"
        ],
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "tec",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Luisa González e signatários — Plan de Trabajo2025–2029,27/09/2024",
            "locator": "Reprodução linhas2053–2054/2317–2319/2330–2355; declaração e assinatura nominal1954–1955",
            "statement": "Promove transformação digital e inovação em múltiplos setores.",
            "basis": "declaration",
            "publishedDate": "2024-09-27",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Adoção tecnológica ampla.",
        "uncertainty": "Clima2290, transgênicos2303, ética2333–2337, privacidade2344 e biodiversidade2350.",
        "relatedQuestionIds": [
          "tecnologia_02"
        ],
        "reviewedOn": "2026-10-08"
      }
    ],
    "caveats": "Programa declarado e coletivamente endossado, não autoria exclusiva, prática ou posições2026. Reprodução jornalística legível, PDF oficial inacessível sem identidade de bytes certificada. Cinco eixos desconhecidos. Revisão documental independente delimitada e julgamento do Root aceitos; sete direções normativas não certificam execução.",
    "identityReview": "author-current-source-checked"
  }
];
/** No matching live, baseline or dormant identity found; no source discarded. */
export const publicFigureBatch15OriginalRecords: ReferenceEntry[] = [];
export const publicFigureBatch15: ReferenceEntry[] = publicFigureBatch15Specs.map(spec=>{
 const entry: ReferenceEntry={id:spec.id,name:spec.name,aliases:spec.aliases,kind:'person',category:'public-figure',period:spec.period,sources:spec.sources,caveats:spec.caveats,rationale:'Programa pessoalmente endossado; orientação ampla e contrapontos explícitos.',vec:Object.fromEntries(AXES.map(({key})=>[key,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{}};
 for(const input of spec.coding){const coded=codeReferenceAxis(input,spec.sources);entry.vec[input.axis]=coded.value;entry.evidence[input.axis]=coded.evidence;entry.axisEvidence![input.axis]=coded.axisEvidence;entry.coding![input.axis]=coded.coding;}
 return entry;
});
