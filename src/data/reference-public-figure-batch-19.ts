import { AXES } from '../lib/scoring';
import type { ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';
export const publicFigureBatch19Sources: ReferenceSource[] = [
  {
    "title": "Sumar — Un programa para ti, eleitoral2023",
    "url": "https://movimientosumar.es/wp-content/uploads/2023/07/Un-Programa-para-ti.pdf",
    "note": "Original institucional182p/7432linhas; leitura seletiva efetiva registrada no relatório. Programa coletivo pessoalmente adotado, não autoria exclusiva; dia editorial não indicado."
  },
  {
    "title": "Yolanda Díaz — post próprio06/07/2023 reproduzido por NoticiasTrabajo",
    "url": "https://www.noticiastrabajo.es/politica/yolanda-diaz-promete-subir-smi-pensiones-minimas-no-contributivas-encima-inflacion/",
    "note": "Corpo75–111/data66 efetivamente lidos; post nominal101–104 identifica programa como próprio/coletivo. Original Twitter1677003624747257856 e X retornam403; reprodução atribuída, não autenticação de conta."
  },
  {
    "title": "Beteve — publicação do programa eleitoral2023",
    "url": "https://beteve.cat/politica/programa-sumar-eleccions-generals-2023/",
    "note": "135–165 efetivamente lidos; ligação direta à reprodução182p. Trechos lidos correspondem ao texto institucional; sem identidade de bytes ou garantia de revisões posteriores."
  },
  {
    "title": "Sumar — reprodução primária por Beteve",
    "url": "https://img.beteve.cat/wp-content/uploads/2023/07/programa-sumar-eleccions-generals-2023-190723.pdf",
    "note": "Leitura seletiva inicial preservada; códigos usam o original institucional reaberto.190723 no arquivo não convertido em data editorial."
  },
  {
    "title": "EFE — entrevista atual de Yolanda Díaz22/09/2026",
    "url": "https://efe.com/economia/2026-09-22/elecciones-oit-entrevista-candidata-yolanda-diaz/",
    "note": "Data104/autores110/corpo111–145 efetivamente lidos; identidade viva/atividade somente. Sem política2023 renovada, fotografia inspecionada ou seleção OIT futura concluída."
  }
];
export const publicFigureBatch19Coding: ReferenceAxisCoding[] = [
  {
    "axis": "rep",
    "position": "moderate-first",
    "confidence": "medium",
    "relatedQuestionIds": [
      "representacao_16"
    ],
    "claims": [
      {
        "sourceTitle": "Sumar — Un programa para ti, eleitoral2023",
        "publishedDate": "2023; edição eleitoral23/07, dia editorial não indicado",
        "accessedDate": "2026-10-08",
        "locator": "4047–4049/4068–4074/4675–4704",
        "statement": "Amplia sufrágio e deliberação cidadã.",
        "basis": "declaration"
      }
    ],
    "rationale": "Autoridade popular.",
    "uncertainty": "Ancoragem constitucional4680–81; não assembleísmo exclusivo.",
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "pod",
    "position": "moderate-second",
    "confidence": "medium",
    "relatedQuestionIds": [
      "poder_11"
    ],
    "claims": [
      {
        "sourceTitle": "Sumar — Un programa para ti, eleitoral2023",
        "publishedDate": "2023; edição eleitoral23/07, dia editorial não indicado",
        "accessedDate": "2026-10-08",
        "locator": "5346–5389/7250–7251",
        "statement": "Limita coerção sobre manifestações e liberdades.",
        "basis": "declaration"
      }
    ],
    "rationale": "Direitos civis.",
    "uncertainty": "Polícia5310–27 e cibersegurança7317–20 preservadas.",
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "imi",
    "position": "moderate-second",
    "confidence": "medium",
    "relatedQuestionIds": [
      "imigracao_02",
      "imigracao_08"
    ],
    "claims": [
      {
        "sourceTitle": "Sumar — Un programa para ti, eleitoral2023",
        "publishedDate": "2023; edição eleitoral23/07, dia editorial não indicado",
        "accessedDate": "2026-10-08",
        "locator": "4842–4848/4874–4884",
        "statement": "Promove convivência cultural e linguística nacional.",
        "basis": "declaration"
      }
    ],
    "rationale": "Pluralismo cultural.",
    "uncertainty": "Pacto territorial4842–48; não fronteiras irrestritas.",
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
        "sourceTitle": "Sumar — Un programa para ti, eleitoral2023",
        "publishedDate": "2023; edição eleitoral23/07, dia editorial não indicado",
        "accessedDate": "2026-10-08",
        "locator": "393–400/444–446/468–471/3546–3548/3887–3894/6163–6181/7335–7340",
        "statement": "Amplia propriedade/provisão pública entre sistemas nacionais.",
        "basis": "declaration"
      }
    ],
    "rationale": "Economia pública.",
    "uncertainty": "Investimento privado380–86/concorrência411–26; não maioria pública.",
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
        "sourceTitle": "Sumar — Un programa para ti, eleitoral2023",
        "publishedDate": "2023; edição eleitoral23/07, dia editorial não indicado",
        "accessedDate": "2026-10-08",
        "locator": "303–316/427–432/449–459",
        "statement": "Dirige setores, preços e crédito nacionalmente.",
        "basis": "declaration"
      }
    ],
    "rationale": "Coordenação econômica.",
    "uncertainty": "Concorrência411–26/investimento privado380–86; controles seletivos.",
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "mor",
    "position": "moderate-first",
    "confidence": "medium",
    "relatedQuestionIds": [
      "moral_09",
      "moral_18"
    ],
    "claims": [
      {
        "sourceTitle": "Sumar — Un programa para ti, eleitoral2023",
        "publishedDate": "2023; edição eleitoral23/07, dia editorial não indicado",
        "accessedDate": "2026-10-08",
        "locator": "4210–4257/4431–4440/4619–4657",
        "statement": "Amplia autonomia reprodutiva, papéis e famílias.",
        "basis": "declaration"
      }
    ],
    "rationale": "Autonomia moral.",
    "uncertainty": "Multiparentalidade4623–26 sujeita a avaliação.",
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
        "sourceTitle": "Sumar — Un programa para ti, eleitoral2023",
        "publishedDate": "2023; edição eleitoral23/07, dia editorial não indicado",
        "accessedDate": "2026-10-08",
        "locator": "347–367/7265–7304/7321–7367",
        "statement": "Promove adoção digital entre setores nacionais.",
        "basis": "declaration"
      }
    ],
    "rationale": "Adoção tecnológica.",
    "uncertainty": "Limites ambientais360–62/7368–79 e alternativa presencial7271.",
    "reviewedOn": "2026-10-08"
  }
];
const entry: ReferenceEntry={id:'yolanda-diaz',name:'Yolanda Díaz',aliases:['Yolanda Diaz'],kind:'person',category:'public-figure',period:'Programa coletivo pessoalmente adotado06/07/2023; identidade ativa22/09/2026',sources:publicFigureBatch19Sources,vec:Object.fromEntries(AXES.map(({key})=>[key,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{},rationale:'Participação cidadã, liberdades civis, pluralidade cultural e familiar, provisão pública, planejamento e inovação com limites.',caveats:'Revisão documental delimitada independente e julgamento Root aceitos. Endosso nominal reproduzido, original do post403; fundamento de atribuição aceito pelo Root. Corpo institucional efetivamente lido seletivamente; não todas182páginas, identidade de bytes ou histórico de revisões. Declaração coletiva2023, não autoria exclusiva, execução ou renovação de política2026. Estatísticas e resultados alegados não certificados. Cinco eixos desconhecidos; quantidade de códigos não equivale a qualificação substantiva.'};
for(const input of publicFigureBatch19Coding){const c=codeReferenceAxis(input,entry.sources);entry.vec[input.axis]=c.value;entry.evidence[input.axis]=c.evidence;entry.axisEvidence![input.axis]=c.axisEvidence;entry.coding![input.axis]=c.coding;}
export const publicFigureBatch19: ReferenceEntry[]=[entry];
export const publicFigureBatch19UnknownAxes={est:'Pactos/autonomia não revisados como competência legislativa última.',dip:'NATO e segurança europeia isoladas não resolvem orientação militar geral.',int:'Intervenção internacional geral não revisada.',com:'Autonomia industrial/revisão de tratados não resolve direção comercial ampla.',rel:'Ensino laico6223–35 é um setor, não arquitetura Estado–religião inteira.'};
