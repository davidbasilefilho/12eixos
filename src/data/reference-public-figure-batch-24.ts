import { AXES } from '../lib/scoring';
import type { ReferenceEntry, ReferenceSource, AxisKey } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';

export const publicFigureBatch24Sources: Record<string,ReferenceSource[]> = {
  "muhammad-yunus": [
    {
      "title": "Muhammad Yunus — declarações próprias de despedida reproduzidas16/02/2026",
      "url": "https://www.bssnews.net/news-flash/361630",
      "note": "Data30/corpo30–119 efetivamente lidos. BSS reproduz declarações nominalmente próprias da despedida concluída16/02/2026; não transcrição integral ou áudio examinados. Relatos de eleições, direitos, tribunais e capacidade militar não certificam execução nem resultados."
    }
  ],
  "kaja-kallas": [
    {
      "title": "Kaja Kallas — discurso próprio à Agência Europeia de Defesa28/01/2026",
      "url": "https://www.eeas.europa.eu/eeas/hrvp-kaja-kallas-keynote-speech-european-defence-agency-annual-conference-2026_en",
      "note": "Título5/data7 e corpo próprio15–140 efetivamente lidos. Declaração atribuída institucionalmente e atividade28/01/2026; conjecturas e diagnósticos geopolíticos permanecem do locutor, não resultados certificados."
    }
  ],
  "roberta-metsola": [
    {
      "title": "Roberta Metsola — discurso próprio em Rimini26/08/2026",
      "url": "https://the-president.europarl.europa.eu/home/ep-newsroom/pagecontent/actualites/europe-represents-an-opportunity-for-our-children-to-build-a-freer-safer-and-more-prosperous-future-president-metsola-in-rimini.html",
      "note": "Data67/atribuição71/corpo próprio73–190 efetivamente lidos. Texto inglês institucional de fala26/08/2026; não houve confronto com italiano191 ou vídeo. Declarações, não eficácia ou posição inferida do cargo."
    }
  ],
  "michelle-obama": [
    {
      "title": "Michelle Obama — discurso próprio em Phoenix20/10/2016",
      "url": "https://obamawhitehouse.archives.gov/the-press-office/2016/10/20/remarks-first-lady-hfa-rally-phoenix-az",
      "note": "Arquivo histórico explícito4; data165/atribuição173/corpo próprio173–270 efetivamente lidos. Turnos da plateia separados. Endosso a Hillary não transfere automaticamente toda a plataforma ou posições de Barack a Michelle."
    },
    {
      "title": "Obama Foundation — atividade de Michelle Obama18/06/2026",
      "url": "https://www.obama.org/visit/grand-opening/livestream/",
      "note": "Corpo16–36 efetivamente lido: cerimônia18/06/2026 descrita como concluída23 e participação própria34–36. Vídeo/áudio não examinados; identidade apenas, sem atualizar normas2016."
    },
    {
      "title": "AP — atividade nominal de Michelle Obama19/06/2026",
      "url": "https://apnews.com/article/obama-presidential-center-chicago-juneteenth-7f655b125d3cc28dcee91e1645842782",
      "note": "Corpo2023–2029/caption1754–1757 efetivamente lidos confirma encontro19/06/2026. Data editorial renderizada2000 incompleta; dia do evento explícito na legenda. Imagens não examinadas e falas2026 não usadas para scores."
    }
  ],
  "leni-robredo": [
    {
      "title": "Leni Robredo — discurso próprio ao CALD19/11/2018",
      "url": "https://cald.org/wp-content/uploads/2018/11/Maria-Leonor-22Leni22-Robredo.pdf",
      "note": "PDF4páginas/125linhas integralmente lido0–124. Cabeçalho0–6 confirma fala própria19/11/2018; citações de Corazon33–37/111–115 e estatísticas FreedomHouse49–53 não atribuídas como texto original de Robredo ou certificadas."
    },
    {
      "title": "Cidade de Naga — atividade de Leni Robredo01/05/2026",
      "url": "https://tourism.naga.gov.ph/leni-our-true-charm-goes-beyond-typical-attractions/",
      "note": "Publicação37 em02/05/2026, relato nominal42–45 de fala concluída01/05. Identidade apenas; não renova normas2018 nem gradua turismo como posição política geral."
    }
  ]
};

export const publicFigureBatch24Coding: Record<string,ReferenceAxisCoding[]> = {
  "muhammad-yunus": [
    {
      "axis": "rep",
      "position": "moderate-first",
      "confidence": "medium",
      "relatedQuestionIds": [
        "representacao_01",
        "representacao_03"
      ],
      "claims": [
        {
          "sourceTitle": "Muhammad Yunus — declarações próprias de despedida reproduzidas16/02/2026",
          "publishedDate": "2026-02-16",
          "accessedDate": "2026-10-08",
          "locator": "31–35/43–55/105–111/116",
          "statement": "Defende continuidade democrática, eleições e responsabilização do poder.",
          "basis": "declaration"
        }
      ],
      "rationale": "Autoridade popular e prestação de contas.",
      "uncertainty": "Eleição40–48 e reformas58–60 são autoavaliações não verificadas; experiência interina52–55 e programa constitucional69–71 preservados. A despedida não comprova posse atual.",
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "dip",
      "position": "moderate-first",
      "confidence": "medium",
      "relatedQuestionIds": [
        "diplomacia_03"
      ],
      "claims": [
        {
          "sourceTitle": "Muhammad Yunus — declarações próprias de despedida reproduzidas16/02/2026",
          "publishedDate": "2026-02-16",
          "accessedDate": "2026-10-08",
          "locator": "90–91; contraponto82–88",
          "statement": "Adota reforço e modernização gerais das Forças Armadas para enfrentar agressões.",
          "basis": "declaration"
        }
      ],
      "rationale": "Reforço militar defensivo declarado.",
      "uncertainty": "Formulação retrospectiva de prioridades, não verificação de capacidade. Relações mutuamente respeitosas85 e cooperação sobre refugiados87–88 limitam direção militar, não glorificação de guerra.",
      "reviewedOn": "2026-10-08"
    }
  ],
  "kaja-kallas": [
    {
      "axis": "dip",
      "position": "moderate-first",
      "confidence": "medium",
      "relatedQuestionIds": [
        "diplomacia_03"
      ],
      "claims": [
        {
          "sourceTitle": "Kaja Kallas — discurso próprio à Agência Europeia de Defesa28/01/2026",
          "publishedDate": "2026-01-28",
          "accessedDate": "2026-10-08",
          "locator": "45–60/65–78/87–91/111–136",
          "statement": "Defende reforço das capacidades militares europeias e da indústria de defesa.",
          "basis": "declaration"
        }
      ],
      "rationale": "Fortalecimento militar regional.",
      "uncertainty": "Dissuasão e defesa46, uso eficiente49, financiamento privado75 e complementaridade NATO90–91 preservados. Escopo europeu, não exército nacional ou guerra irrestrita; perguntas55–60 não decisões implementadas.",
      "reviewedOn": "2026-10-08"
    }
  ],
  "roberta-metsola": [
    {
      "axis": "tec",
      "position": "moderate-first",
      "confidence": "medium",
      "relatedQuestionIds": [
        "tecnologia_02"
      ],
      "claims": [
        {
          "sourceTitle": "Roberta Metsola — discurso próprio em Rimini26/08/2026",
          "publishedDate": "2026-08-26",
          "accessedDate": "2026-10-08",
          "locator": "119–155, especialmente141–155",
          "statement": "Defende liderança e adoção tecnológicas, incluindo IA, a serviço das pessoas.",
          "basis": "declaration"
        }
      ],
      "rationale": "Adoção tecnológica com finalidade humana.",
      "uncertainty": "Dimensão econômica e social152–155, não só tecnologia militar. Preserva proteção da humanidade154–155; danos ambientais83 e solidariedade105 limitam generalização. Medidas relatadas120/138 não execução verificada.",
      "reviewedOn": "2026-10-08"
    }
  ],
  "michelle-obama": [
    {
      "axis": "rep",
      "position": "moderate-first",
      "confidence": "medium",
      "relatedQuestionIds": [
        "representacao_01",
        "representacao_03"
      ],
      "claims": [
        {
          "sourceTitle": "Michelle Obama — discurso próprio em Phoenix20/10/2016",
          "publishedDate": "2016-10-20",
          "accessedDate": "2026-10-08",
          "locator": "230–241/247–259",
          "statement": "Defende eleições livres, autoridade dos eleitores e respeito ao resultado.",
          "basis": "declaration"
        }
      ],
      "rationale": "Autoridade eleitoral popular.",
      "uncertainty": "Contexto partidário pró-Hillary228–230/250–257; não transfere toda a plataforma, não certifica estatísticas eleitorais242–247 ou futura aceitação de resultado.",
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "imi",
      "position": "moderate-second",
      "confidence": "medium",
      "relatedQuestionIds": [
        "imigracao_04",
        "imigracao_14"
      ],
      "claims": [
        {
          "sourceTitle": "Michelle Obama — discurso próprio em Phoenix20/10/2016",
          "publishedDate": "2016-10-20",
          "accessedDate": "2026-10-08",
          "locator": "197–211, especialmente205–206/210–211",
          "statement": "Valoriza uma nação construída por diferenças e inclusão de origens e religiões diversas.",
          "basis": "declaration"
        }
      ],
      "rationale": "Convivência cultural plural declarada.",
      "uncertainty": "Valores e sonhos compartilhados197–200 são contraponto integrador. Não infere autonomia jurídica, escolas bilíngues, fronteiras irrestritas ou aprovação de todo costume. Críticas a adversário são do locutor, não fatos verificados.",
      "reviewedOn": "2026-10-08"
    }
  ],
  "leni-robredo": [
    {
      "axis": "rep",
      "position": "moderate-first",
      "confidence": "medium",
      "relatedQuestionIds": [
        "representacao_01",
        "representacao_03"
      ],
      "claims": [
        {
          "sourceTitle": "Leni Robredo — discurso próprio ao CALD19/11/2018",
          "publishedDate": "2018-11-19",
          "accessedDate": "2026-10-08",
          "locator": "38–48/54–78/90–95/116–123",
          "statement": "Defende poder popular, instituições democráticas, eleições e vozes plurais.",
          "basis": "declaration"
        }
      ],
      "rationale": "Autoridade democrática inclusiva.",
      "uncertainty": "Exige reconhecer falhas do liberalismo74–78 e ouvir pessoas116–123; não certifica resultados ou acusações sobre regime57–60. Declarações próprias distintas das citações de Corazon.",
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "pod",
      "position": "moderate-second",
      "confidence": "medium",
      "relatedQuestionIds": [
        "poder_19"
      ],
      "claims": [
        {
          "sourceTitle": "Leni Robredo — discurso próprio ao CALD19/11/2018",
          "publishedDate": "2018-11-19",
          "accessedDate": "2026-10-08",
          "locator": "71–84/90–103/121–123",
          "statement": "Defende liberdade civil e escolha de vida contra opressão política, silenciamento e morte sem devido processo.",
          "basis": "declaration"
        }
      ],
      "rationale": "Liberdades civis e limite à coerção.",
      "uncertainty": "Direitos e devido processo, não anistia geral, posição sobre terrorismo ou todos os crimes. Acusações sobre prisão96–103 não são decisão judicial certificada; compromisso com Estado de direito44–48 preservado.",
      "reviewedOn": "2026-10-08"
    }
  ]
};

const identities = [
  {
    "id": "muhammad-yunus",
    "name": "Muhammad Yunus",
    "aliases": [
      "Mohammad Yunus",
      "Professor Muhammad Yunus"
    ],
    "period": "Declarações próprias de despedida reproduzidas16/02/2026",
    "rationale": "Defende democracia e responsabilização do poder, com modernização militar defensiva e relações de respeito mútuo."
  },
  {
    "id": "kaja-kallas",
    "name": "Kaja Kallas",
    "aliases": [],
    "period": "Discurso próprio europeu de defesa28/01/2026",
    "rationale": "Propõe reforço militar e da indústria de defesa europeus, com dissuasão, investimento privado e cooperação na NATO."
  },
  {
    "id": "roberta-metsola",
    "name": "Roberta Metsola",
    "aliases": [],
    "period": "Discurso próprio em Rimini26/08/2026",
    "rationale": "Defende liderança tecnológica e adoção de IA, com inovação orientada à dignidade humana e ao desenvolvimento europeu."
  },
  {
    "id": "michelle-obama",
    "name": "Michelle Obama",
    "aliases": [
      "Michelle LaVaughn Robinson Obama"
    ],
    "period": "Discurso próprio20/10/2016; atividade confirmada18–19/06/2026",
    "rationale": "Defende eleições livres e autoridade dos eleitores; valoriza uma nação plural construída por diferentes origens e religiões."
  },
  {
    "id": "leni-robredo",
    "name": "Leni Robredo",
    "aliases": [
      "Maria Leonor Gerona Robredo",
      "Maria Leonor Leni Robredo"
    ],
    "period": "Discurso próprio19/11/2018; atividade confirmada01/05/2026",
    "rationale": "Defende poder popular, instituições democráticas e liberdades civis contra opressão e silenciamento, com devido processo."
  }
];

const specificUnknownReasons: Record<string, Partial<Record<AxisKey,string>>> = {
  "muhammad-yunus": {
    "pod": "Liberdades108 preservadas qualitativamente; direção coerciva inteira e execução das reformas60 não certificadas.",
    "mor": "Legislação de proteção61–63 isolada não estabelece toda orientação moral.",
    "com": "Acordos93–99 não demonstram regra geral de barreiras comerciais.",
    "tec": "Tecnologias de exportação96–99 não estabelecem adoção geral.",
    "int": "Autonomia85 não equivale a regra geral de não intervenção."
  },
  "kaja-kallas": {
    "tec": "Inovação militar50/130 não prova posição geral sobre toda tecnologia.",
    "eco": "Financiamento/indústria75 setorial não decide hierarquia proprietária geral.",
    "con": "Compras militares78 não estabelecem alocação econômica inteira.",
    "est": "Maioria qualificada106 no espaço supranacional não determina arquitetura legislativa nacional."
  },
  "roberta-metsola": {
    "imi": "Valorizar diferenças98 coexistindo com fronteiras firmes157–164 preservado, sem direção cultural geral codificada.",
    "con": "Desburocratização119–140/mercado único124 não define hierarquia econômica inteira.",
    "com": "Mercado único124 não estabelece orientação tarifária global.",
    "pod": "Expressão115/segurança117 não resolve a relação geral de coerção.",
    "rep": "Representantes eleitos90/173 não usados isoladamente para graduar o cargo."
  },
  "michelle-obama": {
    "con": "Planos atribuídos a Hillary216–220 não transferidos automaticamente como teoria inteira de alocação de Michelle.",
    "mor": "Igualdade/respeito às mulheres180–181/208 sem outras normas suficientes para eixo moral inteiro.",
    "rel": "Fé200 não define arquitetura religiosa institucional."
  },
  "leni-robredo": {
    "mor": "Direitos de gênero86 isolados não estabelecem orientação moral inteira.",
    "eco": "Direitos socioeconômicos79–89 não demonstram hierarquia proprietária.",
    "int": "Cooperação internacional68–73 não define intervenção militar geral.",
    "dip": "Menção à paz8–9/104 não decide emprego geral de forças armadas."
  }
};

export const publicFigureBatch24: ReferenceEntry[] = identities.map(identity => {
  const entry: ReferenceEntry = {...identity,kind:'person',category:'public-figure',sources:publicFigureBatch24Sources[identity.id],vec:Object.fromEntries(AXES.map(({key})=>[key,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{},caveats:'Perfil documental parcial fora do ranking; eixos desconhecidos sem graduação. Declarações próprias no período delimitado, sem execução ou acusações certificadas; atividade2026 não renova normas antigas. Atribuição nominal não depende de filiação ou parentesco. Revisão documental independente delimitada aceita; não certifica prática nem cobertura integral de posições.'};
  for(const input of publicFigureBatch24Coding[entry.id]){const c=codeReferenceAxis(input,entry.sources);entry.vec[input.axis]=c.value;entry.evidence[input.axis]=c.evidence;entry.axisEvidence![input.axis]=c.axisEvidence;entry.coding![input.axis]=c.coding;}
  return entry;
});
export const publicFigureBatch24UnknownAxes=Object.fromEntries(publicFigureBatch24.map(entry=>[entry.id,Object.fromEntries(AXES.filter(({key})=>!entry.coding?.[key]).map(({key})=>[key,specificUnknownReasons[entry.id][key]??'Orientação geral não estabelecida nas passagens próprias efetivamente lidas; sem inferência por cargo, parentesco ou associação partidária.']))]));
