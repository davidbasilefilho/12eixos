import { AXES } from '../lib/scoring';
import type { ReferenceEntry, ReferenceSource, AxisKey } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';

export const publicFigureBatch28DormantArchive = {rawSourceFile:"/workspace/12eixos/src/data/reference-people-northamerica.ts",rawLiteral:"  { id:'kamala-harris', name:'Kamala Harris', category:'public-figure', period:'Agenda presidencial e propostas públicas, 2021–2026', values:[64,86,56,38,46,46,64,60,39,65,77,77], rationale:'O recorte usa propostas e documentos assinados pela própria candidata e vice-presidente sobre direitos, trabalho, clima e inovação.', caveats:'A atuação como vice-presidente não oferece autoria individual de toda decisão da administração; os documentos citados devem corresponder ao período e à autoria indicados.', title:'Propostas de campanha e pronunciamentos públicos', url:'https://kamalaharris.com/issues/', note:'Arquivo de propostas da campanha presidencial de Harris; usar somente compromissos nela publicados sob sua própria candidatura.', evidence:{rep:'medium',eco:'medium',con:'medium',mor:'medium',tec:'medium'} },",fullRawSnapshot: { id:'kamala-harris', name:'Kamala Harris', category:'public-figure', period:'Agenda presidencial e propostas públicas, 2021–2026', values:[64,86,56,38,46,46,64,60,39,65,77,77], rationale:'O recorte usa propostas e documentos assinados pela própria candidata e vice-presidente sobre direitos, trabalho, clima e inovação.', caveats:'A atuação como vice-presidente não oferece autoria individual de toda decisão da administração; os documentos citados devem corresponder ao período e à autoria indicados.', title:'Propostas de campanha e pronunciamentos públicos', url:'https://kamalaharris.com/issues/', note:'Arquivo de propostas da campanha presidencial de Harris; usar somente compromissos nela publicados sob sua própria candidatura.', evidence:{rep:'medium',eco:'medium',con:'medium',mor:'medium',tec:'medium'} }};

export const publicFigureBatch28Sources: Record<string,ReferenceSource[]> = {
  "kamala-harris": [
    {
      "title": "Kamala Harris — discurso próprio de concessão06/11/2024, UCSB",
      "url": "https://www.presidency.ucsb.edu/documents/address-conceding-the-2024-presidential-election",
      "note": "Autoria8/data13 e corpo próprio14–29 integralmente lidos. Normas eleitorais18–22; telefonema18 é relato, não fato verificado."
    },
    {
      "title": "Shanker Institute — conversa concluída com Kamala Harris23/02/2026",
      "url": "https://www.shankerinstitute.org/event/aftsmlasi-book-club-conversation-kamala-harris",
      "note": "Past Event0/data3, corpo4–6 efetivamente lido: participação concluída, identidade viva somente. Vídeo8 e livro não examinados. Não renova normas2024."
    },
    {
      "title": "Propostas de campanha e pronunciamentos públicos",
      "url": "https://kamalaharris.com/issues/",
      "note": "Fonte útil do raw regional preservada literalmente no arquivo anterior; não reaberta ou usada para graduar eixos nesta rodada."
    }
  ],
  "catherine-connolly": [
    {
      "title": "Catherine Connolly — declaração própria08/03/2026, Presidência",
      "url": "https://president.ie/en/media-library/news-releases/statement-by-president-connolly-on-international-womens-day-2026",
      "note": "Cabeçalho142/data143 e corpo próprio145–159 integralmente lidos. Paz/desarmamento149 e adoção explícita159 do compromisso citado154–158; peacekeeping149 é contraponto. Declaração concluída2026 confirma identidade; não execução institucional."
    }
  ],
  "judith-suminwa": [
    {
      "title": "Judith Suminwa — declarações próprias11/04/2026, Primature",
      "url": "https://www.primature.gouv.cd/2026/04/14/cloture-du-mois-des-droits-des-femmes-a-la-primature-sans-les-femmes-letat-navance-pas-judith-suminwa/",
      "note": "Publicação32 em14/04/2026, evento concluído11/04 no34, corpo34–54 inteiro lido. Declarações próprias43/46, ministra Bernadette39 excluída. Igualdade na administração preservada como norma qualitativa, sem orientação moral inteira."
    }
  ],
  "sanae-takaichi": [
    {
      "title": "Sanae Takaichi — excerto próprio24/10/2025 reproduzido na apresentação FSA",
      "url": "https://www.fsa.go.jp/common/conference/danwa/20260211_4.pdf",
      "note": "Apresentação de Miyoshi Toshiyuki0–9, não discurso próprio integral Takaichi. Excerto explicitamente atribuído28–41, página impressa3, ocasião24/10/2025 no41; evento da apresentação11/02/2026. Apenas esse excerto usado; views4 não necessariamente posição FSA. Cooperação pública/privada36 preservada."
    },
    {
      "title": "AP/ClickOnDetroit — encontro concluído com Takaichi07/10/2026",
      "url": "https://www.clickondetroit.com/news/world/2026/10/07/okinawa-governor-wants-discipline-for-us-military-in-japan-after-murder-linked-to-marine/",
      "note": "Data88 e corpo115–143 efetivamente lidos; encontro116 e falas126–128 confirmam atividade viva. Identidade somente, acusações não certificadas; imagens não examinadas. AP original inacessível; reprodução editorial lida diretamente."
    }
  ],
  "sara-duterte": [
    {
      "title": "Sara Duterte — declarações educacionais próprias21/09/2023, DepEd indexado",
      "url": "https://www.deped.gov.ph/2023/09/23/vp-sara-urges-education-ministers-to-reshape-education-embrace-technology-in-geis-2023/",
      "note": "Corpo nominal institucional completo indexado efetivamente lido, oito parágrafos até END; publicação23/09/2023 e dateline21/09/2023. Citações próprias2/7 e prioridades4–6, incertezas IA2 preservadas. Direto403; não leitura direta ou vídeo."
    },
    {
      "title": "AP/BayNews9 — anúncio próprio concluído18/02/2026",
      "url": "https://baynews9.com/fl/tampa/ap-top-news/2026/02/18/philippine-vice-president-duterte-will-seek-presidency-in-2028-but-faces-impeachment-bids",
      "note": "Corpo completo indexado efetivamente lido, data18/02/2026 e relato nominal de anúncio e coletiva concluídos. Somente identidade atual; candidatura futura não eleição ocorrida, acusações/allegações não certificadas. AP original inacessível; nenhuma imagem/vídeo examinado."
    }
  ]
};

export const publicFigureBatch28Coding: Record<string,ReferenceAxisCoding[]> = {
  "kamala-harris": [
    {
      "axis": "rep",
      "position": "moderate-first",
      "confidence": "medium",
      "relatedQuestionIds": [
        "representacao_01",
        "representacao_19"
      ],
      "claims": [
        {
          "sourceTitle": "Kamala Harris — discurso próprio de concessão06/11/2024, UCSB",
          "publishedDate": "2024-11-06",
          "accessedDate": "2026-10-08",
          "locator": "18–22",
          "statement": "Defende aceitação do voto, transferência pacífica, lealdade constitucional acima de pessoa/partido e participação por urnas, tribunais e esfera pública.",
          "basis": "declaration"
        }
      ],
      "rationale": "Autoridade democrática e constitucional declarada.",
      "uncertainty": "Recorte de concessão2024; não certifica prática. Defesa contra violência armada21 contrapõe leitura de liberdade irrestrita; atividade2026 não renova programa.",
      "reviewedOn": "2026-10-08"
    }
  ],
  "catherine-connolly": [
    {
      "axis": "dip",
      "position": "moderate-second",
      "confidence": "medium",
      "relatedQuestionIds": [
        "diplomacia_06"
      ],
      "claims": [
        {
          "sourceTitle": "Catherine Connolly — declaração própria08/03/2026, Presidência",
          "publishedDate": "2026-03-08",
          "accessedDate": "2026-10-08",
          "locator": "147–159, sobretudo149/151/154–159",
          "statement": "Defende paz, desarmamento e solução pacífica/judicial de disputas, adotando expressamente esses princípios constitucionais.",
          "basis": "declaration"
        }
      ],
      "rationale": "Prioridade geral da solução pacífica declarada.",
      "uncertainty": "Participação em peacekeeping149 preservada; não pacifismo absoluto ou execução verificada. Adesão159 é própria, não inferência pelo cargo.",
      "reviewedOn": "2026-10-08"
    }
  ],
  "judith-suminwa": [],
  "sanae-takaichi": [],
  "sara-duterte": []
};

export const publicFigureBatch28QualitativeResearch = {
  "judith-suminwa": {
    "sourceTitle": "Judith Suminwa — declarações próprias11/04/2026, Primature",
    "locator": "43/46",
    "statement": "Propõe mulheres na tomada de decisão pública e eliminação de assédio e discriminação.",
    "basis": "declaration",
    "publishedDate": "2026-04-14; ocasião2026-04-11"
  },
  "sanae-takaichi": {
    "sourceTitle": "Sanae Takaichi — excerto próprio24/10/2025 reproduzido na apresentação FSA",
    "locator": "28–41, excerto nominal página impressa3",
    "statement": "Propõe financiar crescimento e investimento com cooperação pública e privada.",
    "basis": "declaration",
    "publishedDate": "2025-10-24; reprodução2026-02-11"
  },
  "sara-duterte": {
    "sourceTitle": "Sara Duterte — declarações educacionais próprias21/09/2023, DepEd indexado",
    "locator": "Parágrafos indexados2/4–7",
    "statement": "Propõe educação apoiada em tecnologia com avaliação de efeitos, incertezas, adaptação e sustentabilidade.",
    "basis": "declaration",
    "publishedDate": "2023-09-23; ocasião2023-09-21"
  }
};

const identities = [
  {
    "id": "kamala-harris",
    "name": "Kamala Harris",
    "aliases": [
      "Kamala Devi Harris"
    ],
    "period": "Discurso próprio06/11/2024; atividade concluída23/02/2026 somente identidade",
    "rationale": "Defende aceitação do voto e transferência pacífica, lealdade constitucional e participação democrática por vias civis."
  },
  {
    "id": "catherine-connolly",
    "name": "Catherine Connolly",
    "aliases": [],
    "period": "Declaração própria08/03/2026",
    "rationale": "Defende paz, desarmamento e solução pacífica e judicial dos conflitos, preservando a participação em missões de paz."
  },
  {
    "id": "judith-suminwa",
    "name": "Judith Suminwa",
    "aliases": [
      "Judith Suminwa Tuluka"
    ],
    "period": "Declarações próprias11/04/2026, publicação14/04",
    "rationale": "Propõe liderança feminina na administração pública e combate ao assédio e à discriminação, com respeito à dignidade."
  },
  {
    "id": "sanae-takaichi",
    "name": "Sanae Takaichi",
    "aliases": [
      "Takaichi Sanae"
    ],
    "period": "Excerto próprio24/10/2025 reproduzido11/02/2026; atividade07/10/2026 somente identidade",
    "rationale": "Propõe financiamento do crescimento e conversão de poupança em investimento, mediante cooperação pública e privada."
  },
  {
    "id": "sara-duterte",
    "name": "Sara Duterte",
    "aliases": [
      "Sara Zimmerman Duterte",
      "Sara Z. Duterte",
      "Sara Duterte-Carpio"
    ],
    "period": "Declarações educacionais21/09/2023; atividade18/02/2026 somente identidade",
    "rationale": "Propõe tecnologia para ampliar acesso e qualidade na educação, condicionada a avaliação, adaptação e sustentabilidade."
  }
];

const specificUnknownReasons: Record<string, Partial<Record<AxisKey,string>>> = {
  "kamala-harris": {
    "mor": "Autonomia corporal21 é uma faceta, sem orientação moral inteira.",
    "pod": "Direitos genéricos21/armas não resolvem toda coerção civil.",
    "eco": "Vetores e evidências raw antigos preservados sem graduação por falta de passagens localizadas."
  },
  "catherine-connolly": {
    "int": "Direito internacional não estabelece toda orientação de intervenção militar.",
    "mor": "Ocasião sobre mulheres não estabelece programa de costumes."
  },
  "judith-suminwa": {
    "mor": "Igualdade profissional/assédio é norma concreta qualitativa, sem toda relação moral.",
    "rep": "Liderança feminina não define soberania popular."
  },
  "sanae-takaichi": {
    "con": "Financiamento e cooperação pública/privada do excerto não definem alocação da economia inteira.",
    "eco": "Financiamento não estabelece propriedade produtiva inteira.",
    "tec": "Outras páginas da apresentação pertencem a Miyoshi, não Takaichi."
  },
  "sara-duterte": {
    "tec": "Tecnologia em educação é norma concreta preservada, mas um setor não estabelece eixo tecnológico inteiro.",
    "rel": "Invocação ou parentesco não define arquitetura Estado/religião."
  }
};

export const publicFigureBatch28: ReferenceEntry[] = identities.map(identity => {
  const entry: ReferenceEntry = {...identity,kind:'person',category:'public-figure',sources:publicFigureBatch28Sources[identity.id],vec:Object.fromEntries(AXES.map(({key})=>[key,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{},caveats:'Perfil documental parcial fora do ranking; eixos desconhecidos sem graduação. Declarações próprias no período delimitado, sem execução ou acusações certificadas; atividade2026 não renova normas antigas. Atribuição nominal não depende de filiação ou parentesco. Revisão documental independente delimitada aceita; não certifica prática nem cobertura integral de posições.'};
  for(const input of publicFigureBatch28Coding[entry.id]){const c=codeReferenceAxis(input,entry.sources);entry.vec[input.axis]=c.value;entry.evidence[input.axis]=c.evidence;entry.axisEvidence![input.axis]=c.axisEvidence;entry.coding![input.axis]=c.coding;}
  return entry;
});
export const publicFigureBatch28UnknownAxes=Object.fromEntries(publicFigureBatch28.map(entry=>[entry.id,Object.fromEntries(AXES.filter(({key})=>!entry.coding?.[key]).map(({key})=>[key,specificUnknownReasons[entry.id][key]??'Orientação geral não estabelecida nas passagens próprias efetivamente lidas; sem inferência por cargo, parentesco ou associação partidária.']))]));
