import type { ReferenceEntry, ReferenceSource } from './references';
import { AXES } from '../lib/scoring';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';
export interface PublicFigureBatch11Spec {id:string;name:string;aliases?:string[];period:string;sources:ReferenceSource[];coding:ReferenceAxisCoding[];caveats:string;identityReview:'author-current-source-checked';}
export const publicFigureBatch11RawSourceRow = "  { id:'hillary-clinton', name:'Hillary Clinton', category:'public-figure', period:'Plataforma presidencial e serviço público, 2016–2024', values:[68,88,66,42,59,42,62,58,44,75,84,74], rationale:'A plataforma de 2016 e os pronunciamentos próprios defendem participação eleitoral, direitos civis, seguro de saúde e engajamento internacional.', caveats:'O vetor representa a candidatura e o registro público delimitado, não uma opinião medida nem todas as posições adotadas em cargos anteriores.', title:'2016 Democratic Party Platform, seção de propostas da candidata', url:'https://www.presidency.ucsb.edu/documents/2016-democratic-party-platform', note:'Texto integral da plataforma da candidatura presidencial de Clinton; é programa eleitoral explicitamente endossado pela candidata.', evidence:{est:'medium',rep:'high',pod:'medium',dip:'medium',int:'medium',eco:'medium',mor:'medium',tec:'medium'} },";
export const publicFigureBatch11OriginalRawValues = [68,88,66,42,59,42,62,58,44,75,84,74] as const;
export const publicFigureBatch11Specs: PublicFigureBatch11Spec[] = [
  {
    "id": "na-hillary-clinton",
    "name": "Hillary Clinton",
    "aliases": [
      "Hillary Rodham Clinton",
      "Hillary Clinton",
      "hillary-clinton"
    ],
    "period": "Discurso próprio28/07/2016 e plataforma coletiva endossada; atividade verificada22/09/2026",
    "sources": [
      {
        "title": "2016 Democratic Party Platform, seção de propostas da candidata",
        "url": "https://www.presidency.ucsb.edu/documents/2016-democratic-party-platform",
        "note": "Texto integral da plataforma da candidatura presidencial de Clinton; é programa eleitoral explicitamente endossado pela candidata."
      },
      {
        "title": "Hillary Clinton — aceitação da candidatura,28/07/2016",
        "url": "https://www.presidency.ucsb.edu/documents/address-accepting-the-presidential-nomination-the-democratic-national-convention",
        "note": "Discurso próprio integral15–248 lido; endosso pessoal da plataforma coletiva44. Declaração eleitoral2016, não prática."
      },
      {
        "title": "Hillary Clinton — Reuters, atividade22/09/2026",
        "url": "https://www.reutersconnect.com/item/former-united-states-secretary-of-state-hillary-clinton-speaks-during-the-clinton-global-initiative-2026-annual-meeting-in-new-york-city/dGFnOnJldXRlcnMuY29tLDIwMjY6bmV3c21sX1JDMkRPTkExNzZHSg",
        "note": "Legenda/body26/33–35 e crédito54–66 lidos; identidade/atividade2026 somente. Imagem não certificada visualmente; não propostas atualizadas."
      }
    ],
    "coding": [
      {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Hillary Clinton — aceitação da candidatura,28/07/2016",
            "locator": "Corpo71/106/130–133/227",
            "statement": "Defende limites ao poder pessoal e expansão do voto e direitos.",
            "basis": "declaration",
            "publishedDate": "2016-07-28",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Participação constitucional democrática.",
        "uncertainty": "Propostas de campanha, não desempenho institucional certificado.",
        "relatedQuestionIds": [
          "representacao_01",
          "representacao_19"
        ],
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "2016 Democratic Party Platform, seção de propostas da candidata",
            "locator": "Corpo183–193/520/563–565; endosso próprio44",
            "statement": "Limita força policial e vigilância sem mandado/coleta em massa; rejeita pena de morte e detenção indefinida.",
            "basis": "declaration",
            "publishedDate": "2016-07-21 — data editorial exibida APP; plataforma endossada28/07/2016",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Liberdades e limites coercivos.",
        "uncertainty": "Contrapontos: inteligência493 e armas453; discurso próprio219–225. Tortura rejeitada497/563.",
        "relatedQuestionIds": [
          "poder_01",
          "poder_15",
          "poder_19"
        ],
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "imi",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "2016 Democratic Party Platform, seção de propostas da candidata",
            "locator": "Corpo35/204/215; endosso próprio44",
            "statement": "Valoriza diversidade e integração culturalmente apropriada.",
            "basis": "declaration",
            "publishedDate": "2016-07-21 — data editorial exibida APP; plataforma endossada28/07/2016",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Pluralismo cultural declarado.",
        "uncertainty": "Língua inglesa204 e imigração legal limitada197 persistem.",
        "relatedQuestionIds": [
          "imigracao_04",
          "imigracao_06"
        ],
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "dip",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "2016 Democratic Party Platform, seção de propostas da candidata",
            "locator": "Corpo461/471–474; endosso próprio44",
            "statement": "Mantém força militar mundialmente superior e prontidão financiada.",
            "basis": "declaration",
            "publishedDate": "2016-07-21 — data editorial exibida APP; plataforma endossada28/07/2016",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Capacitação militar nacional.",
        "uncertainty": "Último recurso461/489, eficiência474 e redução nuclear524–526, mantendo dissuasão.",
        "relatedQuestionIds": [
          "diplomacia_01",
          "diplomacia_05"
        ],
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "int",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Hillary Clinton — aceitação da candidatura,28/07/2016",
            "locator": "Corpo202–203/215",
            "statement": "Propõe ataques aéreos externos e apoio armado aliado.",
            "basis": "declaration",
            "publishedDate": "2016-07-28",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "2016 Democratic Party Platform, seção de propostas da candidata",
            "locator": "Corpo501–508/569; endosso próprio44",
            "statement": "Mantém presença externa limitada e ação militar condicional.",
            "basis": "declaration",
            "publishedDate": "2016-07-21 — data editorial exibida APP; plataforma endossada28/07/2016",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Intervenção externa delimitada.",
        "uncertainty": "Negociação e autodeterminação569; exclui grandes destacamentos495.",
        "relatedQuestionIds": [
          "intervencao_02",
          "intervencao_04"
        ],
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Hillary Clinton — aceitação da candidatura,28/07/2016",
            "locator": "Corpo154/156/227",
            "statement": "Defende autonomia reprodutiva, igualdade salarial e direitos LGBT.",
            "basis": "declaration",
            "publishedDate": "2016-07-28",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "2016 Democratic Party Platform, seção de propostas da candidata",
            "locator": "Corpo221–223/432–436; endosso próprio44",
            "statement": "Defende casamento igualitário, reconhecimento trans e aborto legal.",
            "basis": "declaration",
            "publishedDate": "2016-07-21 — data editorial exibida APP; plataforma endossada28/07/2016",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Reforma social progressista.",
        "uncertainty": "Direitos propostos, não garantias de execução ou toda opinião privada.",
        "relatedQuestionIds": [
          "moral_03",
          "moral_06",
          "moral_09"
        ],
        "reviewedOn": "2026-10-08"
      }
    ],
    "caveats": "Recorte eleitoral2016, não opinião medida2026 ou realizações auditadas. Fonte coletiva pessoalmente endossada; antigo vetor genérico arquivado, sem recertificação. Seis eixos desconhecidos; revisão documental independente delimitada aceita pelo Root.",
    "identityReview": "author-current-source-checked"
  }
];
/** Literal dormant generated snapshot retained; raw source row is archived above. */
export const publicFigureBatch11OriginalRecords: ReferenceEntry[] = [
  {
    "id": "na-hillary-clinton",
    "kind": "person",
    "category": "public-figure",
    "name": "Hillary Clinton",
    "period": "Plataforma presidencial e serviço público, 2016–2024",
    "vec": {
      "est": 68,
      "rep": 88,
      "pod": 66,
      "imi": 50,
      "dip": 59,
      "int": 42,
      "eco": 62,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 84,
      "tec": 74
    },
    "rationale": "A plataforma de 2016 e os pronunciamentos próprios defendem participação eleitoral, direitos civis, seguro de saúde e engajamento internacional.",
    "caveats": "O vetor representa a candidatura e o registro público delimitado, não uma opinião medida nem todas as posições adotadas em cargos anteriores.",
    "sources": [
      {
        "title": "2016 Democratic Party Platform, seção de propostas da candidata",
        "url": "https://www.presidency.ucsb.edu/documents/2016-democratic-party-platform",
        "note": "Texto integral da plataforma da candidatura presidencial de Clinton; é programa eleitoral explicitamente endossado pela candidata."
      }
    ],
    "evidence": {
      "est": "medium",
      "rep": "high",
      "pod": "medium",
      "dip": "medium",
      "int": "medium",
      "eco": "medium",
      "mor": "medium",
      "tec": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "2016 Democratic Party Platform, seção de propostas da candidata"
        ],
        "rationale": "Leitura editorial do eixo federalismo: o recorte citado sustenta o polo federalismo e autonomia regional; a fonte ampara a direção, não a precisão decimal. A plataforma de 2016 e os pronunciamentos próprios defendem participação eleitoral, direitos civis, seguro de saúde e engajamento internacional."
      },
      "rep": {
        "sourceTitles": [
          "2016 Democratic Party Platform, seção de propostas da candidata"
        ],
        "rationale": "Leitura editorial do eixo democracia: o recorte citado sustenta o polo instituições democráticas e participação; a fonte ampara a direção, não a precisão decimal. A plataforma de 2016 e os pronunciamentos próprios defendem participação eleitoral, direitos civis, seguro de saúde e engajamento internacional."
      },
      "pod": {
        "sourceTitles": [
          "2016 Democratic Party Platform, seção de propostas da candidata"
        ],
        "rationale": "Leitura editorial do eixo segurança: o recorte citado sustenta o polo segurança e autoridade coerciva; a fonte ampara a direção, não a precisão decimal. A plataforma de 2016 e os pronunciamentos próprios defendem participação eleitoral, direitos civis, seguro de saúde e engajamento internacional."
      },
      "dip": {
        "sourceTitles": [
          "2016 Democratic Party Platform, seção de propostas da candidata"
        ],
        "rationale": "Leitura editorial do eixo militarismo: o recorte citado sustenta o polo uso da força militar; a fonte ampara a direção, não a precisão decimal. A plataforma de 2016 e os pronunciamentos próprios defendem participação eleitoral, direitos civis, seguro de saúde e engajamento internacional."
      },
      "int": {
        "sourceTitles": [
          "2016 Democratic Party Platform, seção de propostas da candidata"
        ],
        "rationale": "Leitura editorial do eixo não intervenção: o recorte citado sustenta o polo intervenção externa e nacionalismo; a fonte ampara a direção, não a precisão decimal. A plataforma de 2016 e os pronunciamentos próprios defendem participação eleitoral, direitos civis, seguro de saúde e engajamento internacional."
      },
      "eco": {
        "sourceTitles": [
          "2016 Democratic Party Platform, seção de propostas da candidata"
        ],
        "rationale": "Leitura editorial do eixo propriedade pública: o recorte citado sustenta o polo propriedade e provisão públicas; a fonte ampara a direção, não a precisão decimal. A plataforma de 2016 e os pronunciamentos próprios defendem participação eleitoral, direitos civis, seguro de saúde e engajamento internacional."
      },
      "mor": {
        "sourceTitles": [
          "2016 Democratic Party Platform, seção de propostas da candidata"
        ],
        "rationale": "Leitura editorial do eixo progressismo: o recorte citado sustenta o polo reforma social progressista; a fonte ampara a direção, não a precisão decimal. A plataforma de 2016 e os pronunciamentos próprios defendem participação eleitoral, direitos civis, seguro de saúde e engajamento internacional."
      },
      "tec": {
        "sourceTitles": [
          "2016 Democratic Party Platform, seção de propostas da candidata"
        ],
        "rationale": "Leitura editorial do eixo otimismo tecnológico: o recorte citado sustenta o polo otimismo tecnológico; a fonte ampara a direção, não a precisão decimal. A plataforma de 2016 e os pronunciamentos próprios defendem participação eleitoral, direitos civis, seguro de saúde e engajamento internacional."
      }
    }
  }
];
export const publicFigureBatch11: ReferenceEntry[] = publicFigureBatch11Specs.map(spec=>{
 const entry: ReferenceEntry={id:spec.id,name:spec.name,aliases:spec.aliases,kind:'person',category:'public-figure',period:spec.period,sources:spec.sources,caveats:spec.caveats,rationale:'Programa pessoalmente endossado; orientação ampla e contrapontos explícitos.',vec:Object.fromEntries(AXES.map(({key})=>[key,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{}};
 for(const input of spec.coding){const coded=codeReferenceAxis(input,spec.sources);entry.vec[input.axis]=coded.value;entry.evidence[input.axis]=coded.evidence;entry.axisEvidence![input.axis]=coded.axisEvidence;entry.coding![input.axis]=coded.coding;}
 return entry;
});
