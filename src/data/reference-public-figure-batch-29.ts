import { AXES } from '../lib/scoring';
import type { ReferenceEntry, ReferenceSource, AxisKey } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';

export const publicFigureBatch29Sources: Record<string,ReferenceSource[]> = {
  "winston-peters": [
    {
      "title": "ANZMIN — intervenções próprias de Winston Peters17/03/2026",
      "url": "https://www.foreignminister.gov.au/minister/penny-wong/transcript/press-conference-blue-room-parliament-house",
      "note": "Data57, transcript E&OE51 e corpo60–133 inteiro lidos. Somente Peters72–76/100/107–108/112/131–133 próprios; Marles/Collins e Wong separados, sem transferência. Participação concluída2026 confirma identidade, não relatos de resultados certificados."
    }
  ],
  "penny-wong": [
    {
      "title": "ANZMIN — intervenções próprias de Penny Wong17/03/2026",
      "url": "https://www.foreignminister.gov.au/minister/penny-wong/transcript/press-conference-blue-room-parliament-house",
      "note": "Data57, transcript E&OE51 e corpo60–133 inteiro lidos. Somente Wong77–81/104–105/113/117/128 próprios; propostas dos outros ministros não transferidas. Reconhecimento da parceria defensiva80 é contraponto à paz regional79/128. Mesmo evento concluído confirma identidade."
    }
  ],
  "yvonne-aki-sawyerr": [
    {
      "title": "FCC — declarações próprias de Yvonne Aki-Sawyerr14–15/06/2026, corpo indexado",
      "url": "https://fcc.gov.sl/mayor-aki-sawyerr-advances-global-south-climate-priorities-at-singapore-summit/",
      "note": "Data16/06/2026 e corpo institucional completo efetivamente lidos no índice, da participação14–15/06 ao contato de imprensa. Direto redireciona Account Suspended; não recuperação direta. Falas nominais em parágrafos6/8, números/resultados não certificados; imagem não examinada."
    }
  ],
  "ralph-gonsalves": [
    {
      "title": "Ralph Gonsalves — declarações próprias no Press Club, publicação12/05/2026",
      "url": "https://www.jamaicaobserver.com/2026/05/12/man-for-the-mission/",
      "note": "Publicação146 em12/05/2026, corpo150–175 completo lido; evento concluído last Wednesday152 sem converter em dia exato. Próprias citações153/159/163/166/169/173/175 e atribuições157–158, não plataforma partidária emprestada. Identidade atual, não governo vigente presumido; fotografia não examinada."
    }
  ]
};

export const publicFigureBatch29Coding: Record<string,ReferenceAxisCoding[]> = {
  "winston-peters": [],
  "penny-wong": [],
  "yvonne-aki-sawyerr": [],
  "ralph-gonsalves": []
};

export const publicFigureBatch29QualitativeResearch = {
  "winston-peters": {
    "sourceTitle": "ANZMIN — intervenções próprias de Winston Peters17/03/2026",
    "locator": "72–76",
    "statement": "Defende fim rápido da crise por negociação e cooperação regional, preservando aliança de segurança.",
    "basis": "declaration",
    "publishedDate": "2026-03-17"
  },
  "penny-wong": {
    "sourceTitle": "ANZMIN — intervenções próprias de Penny Wong17/03/2026",
    "locator": "77–81/104–105/117/128",
    "statement": "Propõe diplomacia coordenada e colaboração regional para paz e estabilidade, reconhecendo parceria defensiva.",
    "basis": "declaration",
    "publishedDate": "2026-03-17"
  },
  "yvonne-aki-sawyerr": {
    "sourceTitle": "FCC — declarações próprias de Yvonne Aki-Sawyerr14–15/06/2026, corpo indexado",
    "locator": "Corpo indexado completo; parágrafos6/8",
    "statement": "Propõe acesso direto ao financiamento climático, desenvolvimento urbano em harmonia com a natureza e parcerias entre cidades.",
    "basis": "declaration",
    "publishedDate": "2026-06-16; ocasião14–15/06"
  },
  "ralph-gonsalves": {
    "sourceTitle": "Ralph Gonsalves — declarações próprias no Press Club, publicação12/05/2026",
    "locator": "150–159/172–175",
    "statement": "Defende reparações e integração caribenhas, por ação conjunta de governos, academia e sociedade civil.",
    "basis": "declaration",
    "publishedDate": "2026-05-12; evento anterior last Wednesday não convertido em dia exato"
  }
};

const identities = [
  {
    "id": "winston-peters",
    "name": "Winston Peters",
    "aliases": [
      "Winston Raymond Peters"
    ],
    "period": "Intervenções próprias na coletiva ANZMIN17/03/2026, transcript E&OE",
    "rationale": "Defende negociação para encerrar a crise regional e cooperação no Pacífico, preservando a aliança de segurança australiana."
  },
  {
    "id": "penny-wong",
    "name": "Penny Wong",
    "aliases": [
      "Penelope Ying-Yen Wong",
      "Penelope Wong"
    ],
    "period": "Intervenções próprias na coletiva ANZMIN17/03/2026, transcript E&OE",
    "rationale": "Propõe diplomacia coordenada e cooperação com países do Pacífico para a paz regional, reconhecendo a parceria defensiva."
  },
  {
    "id": "yvonne-aki-sawyerr",
    "name": "Yvonne Aki-Sawyerr",
    "aliases": [
      "Yvonne Denise Aki-Sawyerr",
      "Yvonne Aki Sawyerr"
    ],
    "period": "Declarações próprias no encontro14–15/06/2026, relato institucional16/06 indexado",
    "rationale": "Propõe financiamento climático direto às cidades do Sul Global, soluções urbanas naturais e cooperação entre municípios."
  },
  {
    "id": "ralph-gonsalves",
    "name": "Ralph Gonsalves",
    "aliases": [
      "Ralph Everard Gonsalves"
    ],
    "period": "Declarações próprias no Press Club, publicação12/05/2026; dia do evento não certificado",
    "rationale": "Defende reparações caribenhas e integração regional, com participação de governos, universidades e organizações civis."
  }
];

const specificUnknownReasons: Record<string, Partial<Record<AxisKey,string>>> = {
  "winston-peters": {
    "dip": "Negociação73 coexiste com aliança72; prioridade inteira entre diplomacia e poder militar não resolvida.",
    "int": "Aliança não determina aceitação geral de intervenção militar.",
    "imi": "Ancestralidade e saudações131 não definem toda relação cultural.",
    "com": "Promover comércio74 não determina barreiras comerciais."
  },
  "penny-wong": {
    "dip": "Paz/diplomacia79/128 coexistem com parceria defensiva80; sem direção inteira resolvida.",
    "int": "Cooperação regional não estabelece orientação militar intervencionista.",
    "con": "Medidas sobre combustível não são programa de alocação geral."
  },
  "yvonne-aki-sawyerr": {
    "tec": "Inovação climática/urbana setorial não determina orientação tecnológica inteira.",
    "con": "Financiamento municipal climático não define alocação da economia inteira.",
    "est": "Acesso municipal a financiamento não cria competência legislativa autônoma.",
    "imi": "Desenvolvimento inclusivo não determina toda relação cultural."
  },
  "ralph-gonsalves": {
    "imi": "Reparações/integração regional não resolvem orientação cultural inteira.",
    "rep": "Transição de liderança partidária não define arquitetura de autoridade nacional.",
    "rel": "Invocação166 não determina relação Estado/religião.",
    "com": "Integração regional175 não equivale a regras gerais de barreiras comerciais."
  }
};

export const publicFigureBatch29: ReferenceEntry[] = identities.map(identity => {
  const entry: ReferenceEntry = {...identity,kind:'person',category:'public-figure',sources:publicFigureBatch29Sources[identity.id],vec:Object.fromEntries(AXES.map(({key})=>[key,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{},caveats:'Perfil documental parcial fora do ranking; eixos desconhecidos sem graduação. Declarações próprias no período delimitado, sem execução ou acusações certificadas; atividade2026 não renova normas antigas. Atribuição nominal não depende de filiação ou parentesco. Revisão documental independente delimitada aceita; não certifica prática nem cobertura integral de posições.'};
  for(const input of publicFigureBatch29Coding[entry.id]){const c=codeReferenceAxis(input,entry.sources);entry.vec[input.axis]=c.value;entry.evidence[input.axis]=c.evidence;entry.axisEvidence![input.axis]=c.axisEvidence;entry.coding![input.axis]=c.coding;}
  return entry;
});
export const publicFigureBatch29UnknownAxes=Object.fromEntries(publicFigureBatch29.map(entry=>[entry.id,Object.fromEntries(AXES.filter(({key})=>!entry.coding?.[key]).map(({key})=>[key,specificUnknownReasons[entry.id][key]??'Orientação geral não estabelecida nas passagens próprias efetivamente lidas; sem inferência por cargo, parentesco ou associação partidária.']))]));
