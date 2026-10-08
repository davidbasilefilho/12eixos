import type { ReferenceEntry, ReferenceSource } from './references';
import { AXES } from '../lib/scoring';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';
export interface PublicFigureBatch10Spec {id:string;name:string;aliases?:string[];period:string;sources:ReferenceSource[];coding:ReferenceAxisCoding[];caveats:string;identityReview:'author-current-source-checked';}
export const publicFigureBatch10Specs: PublicFigureBatch10Spec[] = [
  {
    "id": "marine-le-pen",
    "name": "Marine Le Pen",
    "aliases": [
      "Marine Lepen"
    ],
    "period": "Programa presidencial próprio2022; identidade/atividade verificada21/09/2026",
    "sources": [
      {
        "title": "Marine Le Pen —22 mesures pour2022, programa presidencial próprio",
        "url": "https://mlafrance.fr/pdfs/22-mesures-pour-2022.pdf",
        "note": "Programa próprio2022, PDF8p; corpo textual0–211 lido; dia editorial não certificado."
      },
      {
        "title": "Marine Le Pen — espelho oficial22 mesures",
        "url": "https://rassemblementnational.fr/22-mesures",
        "note": "Espelho oficial100–198 lido, confirma atribuição pessoal2022; mesma evidência, não confirmação independente."
      },
      {
        "title": "Marine Le Pen — controle da imigração, livreto presidencial2022",
        "url": "https://rassemblementnational.fr/documents/projet/projet-controle-de-limmigration.pdf",
        "note": "PDF46p, áreas24–31/449–590 efetivamente lidas; não leitura integral."
      },
      {
        "title": "Marine Le Pen — segurança, livreto presidencial2022",
        "url": "https://rassemblementnational.fr/documents/projet/projet-la-securite.pdf",
        "note": "PDF24p, áreas0–459/470–613/637–740 lidas; propostas/alegações próprias, não prática verificada."
      },
      {
        "title": "Marine Le Pen — ecologia, livreto presidencial2022",
        "url": "https://rassemblementnational.fr/documents/projet/projet-lecologie.pdf",
        "note": "PDF18p, áreas0–562 lidas, com contrapontos ambientais; dia editorial não certificado."
      },
      {
        "title": "Marine Le Pen — carta própria aos profissionais imobiliários,21/09/2026",
        "url": "https://rassemblementnational.fr/post/lettre-ouverte-de-marine-le-pen-aux-professionnels-de-limmobilier",
        "note": "Autoria/data100–105 e corpo107–146 lidos; identidade/atividade2026 somente, não atualização das posições2022."
      }
    ],
    "coding": [
      {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Marine Le Pen —22 mesures pour2022, programa presidencial próprio",
            "locator": "Medida11; PDFphysicalp5, linhas106",
            "statement": "Propõe referendo de iniciativa cidadã e representação proporcional.",
            "basis": "declaration",
            "publishedDate": "Programa presidencial2022; dia editorial não certificado",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Participação eleitoral e direta proposta.",
        "uncertainty": "Controle judicial limitado na reforma migratória480–483/577–590; restrição de publicações643–673 no livreto segurança. Não certifica todos os direitos oposicionistas ou execução.",
        "relatedQuestionIds": [
          "representacao_09"
        ],
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "pod",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Marine Le Pen —22 mesures pour2022, programa presidencial próprio",
            "locator": "Medida3; PDFphysicalp2, linhas22–36",
            "statement": "Amplia prisão e presunção de legítima defesa policial.",
            "basis": "declaration",
            "publishedDate": "Programa presidencial2022; dia editorial não certificado",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Marine Le Pen — segurança, livreto presidencial2022",
            "locator": "Physicalp7–8, linhas76–97; p21,643–673; p11,211–227",
            "statement": "Defende força policial e proibição de publicações ideológicas, com sanção à posse de drogas.",
            "basis": "declaration",
            "publishedDate": "Programa presidencial2022; dia editorial não certificado",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Autoridade coerciva para segurança.",
        "uncertainty": "Reinserção261–267, proporcionalidade411–423 e culpa comprovada528–531 preservadas; não apoio presumido à detenção sem julgamento.",
        "relatedQuestionIds": [
          "poder_01",
          "poder_04",
          "poder_06"
        ],
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "imi",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Marine Le Pen —22 mesures pour2022, programa presidencial próprio",
            "locator": "Medida1; PDFphysicalp2,18–20",
            "statement": "Condiciona naturalização à assimilação.",
            "basis": "declaration",
            "publishedDate": "Programa presidencial2022; dia editorial não certificado",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Marine Le Pen — controle da imigração, livreto presidencial2022",
            "locator": "Physicalp16–18,503–505/526–559",
            "statement": "Exige língua e costumes nacionais e substitui ensino de cultura de origem.",
            "basis": "declaration",
            "publishedDate": "Programa presidencial2022; dia editorial não certificado",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Assimilação cultural declarada.",
        "uncertainty": "Descreve proposta constitucional e costumes, não apenas fronteiras; não certifica efeitos ou estatísticas demográficas.",
        "relatedQuestionIds": [
          "imigracao_01",
          "imigracao_06",
          "imigracao_07"
        ],
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "dip",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Marine Le Pen —22 mesures pour2022, programa presidencial próprio",
            "locator": "Medida20; PDFphysicalp7,197–203",
            "statement": "Amplia orçamento e equipamento militar para proteger interesses nacionais.",
            "basis": "declaration",
            "publishedDate": "Programa presidencial2022; dia editorial não certificado",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Defesa armada como garantia nacional.",
        "uncertainty": "Limita-se à capacitação/independência; não autoriza inferir guerra preventiva, uso nuclear ou intervenção externa.",
        "relatedQuestionIds": [
          "diplomacia_01",
          "diplomacia_05"
        ],
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "com",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Marine Le Pen —22 mesures pour2022, programa presidencial próprio",
            "locator": "Medidas13/18; PDFphysicalp5/7,122–125/186–188",
            "statement": "Restringe importações agrícolas e revê livre-comércio para proteção nacional.",
            "basis": "declaration",
            "publishedDate": "Programa presidencial2022; dia editorial não certificado",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Proteção comercial declarada.",
        "uncertainty": "Normas agrícolas e revisão de acordos, não autarquia total ou tarifa universal; livretoecologia358–363 admite diversificar fornecedores.",
        "relatedQuestionIds": [
          "comercio_04",
          "comercio_07"
        ],
        "reviewedOn": "2026-10-08"
      }
    ],
    "caveats": "Declarações eleitorais2022, não prática nem posições medidas2026. Estatísticas dos livretos não auditadas. Sete eixos desconhecidos; tecnologia permanece pesquisa contraditória. Revisão documental delimitada aceita pela revisão independente e pelo Root.",
    "identityReview": "author-current-source-checked"
  }
];
/** No selected dormant identity: no original record discarded or overwritten. */
export const publicFigureBatch10OriginalRecords: ReferenceEntry[] = [];
export const publicFigureBatch10: ReferenceEntry[] = publicFigureBatch10Specs.map(spec=>{
 const entry: ReferenceEntry={id:spec.id,name:spec.name,aliases:spec.aliases,kind:'person',category:'public-figure',period:spec.period,sources:spec.sources,caveats:spec.caveats,rationale:'Programa pessoalmente endossado; orientação ampla e contrapontos explícitos.',vec:Object.fromEntries(AXES.map(({key})=>[key,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{}};
 for(const input of spec.coding){const coded=codeReferenceAxis(input,spec.sources);entry.vec[input.axis]=coded.value;entry.evidence[input.axis]=coded.evidence;entry.axisEvidence![input.axis]=coded.axisEvidence;entry.coding![input.axis]=coded.coding;}
 return entry;
});
