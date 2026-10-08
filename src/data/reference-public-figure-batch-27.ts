import { AXES } from '../lib/scoring';
import type { ReferenceEntry, ReferenceSource, AxisKey } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';

export const publicFigureBatch27Sources: Record<string,ReferenceSource[]> = {
  "hilda-heine": [
    {
      "title": "Presidência RMI — declarações próprias de Hilda Heine03/06/2026",
      "url": "https://rmigov.com/?p=2370",
      "note": "Data7/20 publicada11/06/2026 e corpo11–19 integralmente lidos. Relato institucional nominal de discurso concluído03/06, citação própria14 e prioridades atribuídas15/18/19. Normas de gestão oceânica qualitativas; santuário16–17 e resultados não certificados."
    }
  ],
  "sitiveni-rabuka": [
    {
      "title": "Commonwealth — fala própria de Sitiveni Rabuka09/02/2026",
      "url": "https://thecommonwealth.org/speech/welcome-address-prime-minister-fiji-commonwealth-law-ministers-meeting",
      "note": "Atribuição/data4 e corpo próprio5–30 integralmente lidos, ocasião09/02/2026. Direitos15–24 e cooperação pacífica26–27 preservados qualitativamente; discurso não certifica prática nacional ou justiça efetiva. Vídeo32–34 não examinado."
    }
  ],
  "fiame-naomi-mataafa": [
    {
      "title": "Fiamē Naomi Mataʻafa — fala própria editada, ANU14/04/2026",
      "url": "https://devpolicy.org/people-belonging-and-pacific-futures/",
      "note": "Autoria18/74, publicação14 em27/04/2026, evento concluído14/04 explicitado22–23. Corpo próprio editado25–47 integralmente lido. Versão abreviada editada autorizada nominalmente pela atribuição autoral; documento integral ANU48 não aberto/comparado. Comentários81–87 excluídos."
    }
  ],
  "feleti-teo": [
    {
      "title": "Missão Tuvalu — declarações próprias de Feleti Teo21/09/2026, corpo indexado",
      "url": "https://www.un.int/tuvalu/fr/news/tuvalu-highlights-power-digital-connectivity-unga81",
      "note": "Leitura efetiva do corpo institucional inglês completo indexado, cinco parágrafos iniciados At the Pacific…/He said…/He further…/The Vaka…/Ultimately…. Cabeçalho indexado21/09/2026 e relato de encontro concluído nessa manhã. Rotas direta inglesa e francesa retornaram403; não recuperação direta, vídeo ou original literal. Localizadores são parágrafos indexados, não linhas inventadas."
    }
  ],
  "surangel-whipps-jr": [
    {
      "title": "AOSIS — declaração proferida por Surangel Whipps Jr24/09/2026",
      "url": "https://aosis.org/document/statement-at-the-high-level-meeting-on-sea-level-rise/",
      "note": "Data6/autoria8/41 e corpo17–34 integralmente lidos. Declaração pessoalmente proferida em nome de39membros18; não autoria exclusiva ou transferência de toda plataforma coletiva. Normas de continuidade soberana25–33 preservadas qualitativamente. Vídeo e PDF35 não examinados/comparados."
    }
  ]
};

export const publicFigureBatch27Coding: Record<string,ReferenceAxisCoding[]> = {
  "hilda-heine": [],
  "sitiveni-rabuka": [],
  "fiame-naomi-mataafa": [],
  "feleti-teo": [
    {
      "axis": "tec",
      "position": "moderate-first",
      "confidence": "medium",
      "relatedQuestionIds": [
        "tecnologia_02"
      ],
      "claims": [
        {
          "sourceTitle": "Missão Tuvalu — declarações próprias de Feleti Teo21/09/2026, corpo indexado",
          "publishedDate": "2026-09-21",
          "accessedDate": "2026-10-08",
          "locator": "Corpo institucional indexado, parágrafos1–5; especialmente2/4/5",
          "statement": "Defende adoção da conectividade digital como infraestrutura transversal de saúde, educação, inclusão financeira e economia.",
          "basis": "declaration"
        }
      ],
      "rationale": "Adoção digital transversal declarada.",
      "uncertainty": "Resiliência, inclusão e preservação cultural explícitas limitam orientação. Fonte nominal institucional recuperada no índice completo; acesso direto403, sem falsa leitura direta ou implementação certificada de cabos/serviços.",
      "reviewedOn": "2026-10-08"
    }
  ],
  "surangel-whipps-jr": []
};

export const publicFigureBatch27QualitativeResearch = {
  "hilda-heine": {
    "sourceTitle": "Presidência RMI — declarações próprias de Hilda Heine03/06/2026",
    "locator": "14–19",
    "statement": "Propõe gestão oceânica sustentável, centrada nas comunidades, com plataforma liderada pelos países e parcerias.",
    "basis": "declaration",
    "publishedDate": "2026-06-11; ocasião2026-06-03"
  },
  "sitiveni-rabuka": {
    "sourceTitle": "Commonwealth — fala própria de Sitiveni Rabuka09/02/2026",
    "locator": "15–27",
    "statement": "Propõe justiça acessível, instituições que protejam direitos e vulneráveis e cooperação pacífica.",
    "basis": "declaration",
    "publishedDate": "2026-02-09"
  },
  "fiame-naomi-mataafa": {
    "sourceTitle": "Fiamē Naomi Mataʻafa — fala própria editada, ANU14/04/2026",
    "locator": "25–47",
    "statement": "Defende desenvolvimento que preserve pertencimento, saber indígena e agência regional, sem rejeitar mobilidade ou cooperação.",
    "basis": "declaration",
    "publishedDate": "2026-04-27; ocasião2026-04-14"
  },
  "surangel-whipps-jr": {
    "sourceTitle": "AOSIS — declaração proferida por Surangel Whipps Jr24/09/2026",
    "locator": "25–33",
    "statement": "Defende adaptação climática com ciência e financiamento, continuidade estatal e direitos marítimos apesar da subida do mar.",
    "basis": "declaration",
    "publishedDate": "2026-09-24"
  }
};

const identities = [
  {
    "id": "hilda-heine",
    "name": "Hilda Heine",
    "aliases": [
      "Hilda Cathy Heine",
      "Hilda C. Heine"
    ],
    "period": "Declarações próprias no encontro03/06/2026, publicação11/06",
    "rationale": "Defende gestão oceânica sustentável, participação comunitária e cooperação, com financiamento e capacidade local."
  },
  {
    "id": "sitiveni-rabuka",
    "name": "Sitiveni Rabuka",
    "aliases": [
      "Sitiveni Ligamamada Rabuka",
      "Sitiveni L. Rabuka"
    ],
    "period": "Discurso próprio de justiça09/02/2026",
    "rationale": "Defende justiça acessível, instituições independentes e proteção de direitos, com cooperação e diálogo no Pacífico."
  },
  {
    "id": "fiame-naomi-mataafa",
    "name": "Fiamē Naomi Mataʻafa",
    "aliases": [
      "Fiame Naomi Mataafa",
      "Fiamē Naomi Mata’afa",
      "Fiame Naomi Mata’afa"
    ],
    "period": "Discurso próprio editado14/04/2026, publicação27/04",
    "rationale": "Defende desenvolvimento com pertencimento, conhecimento indígena e agência do Pacífico, preservando mobilidade e cooperação."
  },
  {
    "id": "feleti-teo",
    "name": "Feleti Teo",
    "aliases": [
      "Feleti Penitala Teo",
      "Feleti P. Teo"
    ],
    "period": "Declarações próprias relatadas21/09/2026; corpo institucional indexado, acesso direto indisponível",
    "rationale": "Defende conectividade digital para saúde, educação, inclusão financeira e economia, com resiliência e preservação cultural."
  },
  {
    "id": "surangel-whipps-jr",
    "name": "Surangel Whipps Jr.",
    "aliases": [
      "Surangel Samuel Whipps Jr.",
      "Surangel S. Whipps Jr.",
      "Surangel Whipps Junior"
    ],
    "period": "Declaração própria proferida em nome da AOSIS24/09/2026",
    "rationale": "Defende adaptação climática, continuidade soberana dos Estados insulares e direitos marítimos, com ciência e cooperação."
  }
];

const specificUnknownReasons: Record<string, Partial<Record<AxisKey,string>>> = {
  "hilda-heine": {
    "tec": "Financiamento/acesso científico setorial15 não estabelecem orientação tecnológica inteira.",
    "con": "Planejamento oceânico14/18 não define alocação da economia inteira.",
    "imi": "Identidade oceânica14 não define relação cultural de integração/autonomia.",
    "rep": "Participação comunitária16 não decide soberania eleitoral nacional."
  },
  "sitiveni-rabuka": {
    "pod": "Justiça/proteção de direitos15–24 são norma qualitativa, sem direção inteira de coerção/exceções civis resolvida.",
    "dip": "Ocean of Peace26–27 é proposta qualitativa de harmonia e diálogo; peso militar geral não resolvido.",
    "rep": "Instituições democráticas11/23 não resolvem hierarquia inteira da autoridade popular.",
    "rel": "Reconhecimento tradicional5 não estabelece arquitetura entre Estado e religião."
  },
  "fiame-naomi-mataafa": {
    "imi": "Conhecimento indígena/pertencimento41–47 não resolvem toda relação de assimilação ou autonomia entre culturas distintas.",
    "com": "Mobilidade27 não equivale a barreiras de comércio.",
    "eco": "Desenvolvimento comunitário não estabelece estrutura proprietária inteira.",
    "est": "Agência regional39 não implica competências legislativas nacionais independentes.",
    "tec": "Conectividade31 é diagnóstico, não adesão tecnológica inteira."
  },
  "feleti-teo": {
    "imi": "Preservação cultural no programa digital não define orientação cultural inteira.",
    "pod": "Resposta emergencial por conectividade não determina coerção civil.",
    "eco": "Infraestrutura digital não determina propriedade produtiva geral."
  },
  "surangel-whipps-jr": {
    "int": "Soberania/continuidade estatal27–31 não determinam orientação de intervenção militar.",
    "imi": "Cultura e tradições19/25 não determinam pluralismo/autonomia cultural.",
    "tec": "Ciência25 é base de resposta climática, não orientação tecnológica inteira.",
    "con": "Financiamento climático25 não define alocação da economia inteira."
  }
};

export const publicFigureBatch27: ReferenceEntry[] = identities.map(identity => {
  const entry: ReferenceEntry = {...identity,kind:'person',category:'public-figure',sources:publicFigureBatch27Sources[identity.id],vec:Object.fromEntries(AXES.map(({key})=>[key,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{},caveats:'Perfil documental parcial fora do ranking; eixos desconhecidos sem graduação. Declarações próprias no período delimitado, sem execução ou acusações certificadas; atividade2026 não renova normas antigas. Atribuição nominal não depende de filiação ou parentesco. Revisão documental independente delimitada aceita; não certifica prática nem cobertura integral de posições.'};
  for(const input of publicFigureBatch27Coding[entry.id]){const c=codeReferenceAxis(input,entry.sources);entry.vec[input.axis]=c.value;entry.evidence[input.axis]=c.evidence;entry.axisEvidence![input.axis]=c.axisEvidence;entry.coding![input.axis]=c.coding;}
  return entry;
});
export const publicFigureBatch27UnknownAxes=Object.fromEntries(publicFigureBatch27.map(entry=>[entry.id,Object.fromEntries(AXES.filter(({key})=>!entry.coding?.[key]).map(({key})=>[key,specificUnknownReasons[entry.id][key]??'Orientação geral não estabelecida nas passagens próprias efetivamente lidas; sem inferência por cargo, parentesco ou associação partidária.']))]));
