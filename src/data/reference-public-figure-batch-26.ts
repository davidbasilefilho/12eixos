import { AXES } from '../lib/scoring';
import type { ReferenceEntry, ReferenceSource, AxisKey } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';

export const publicFigureBatch26Sources: Record<string,ReferenceSource[]> = {
  "faisal-bin-farhan": [
    {
      "title": "Faisal bin Farhan — reprodução nominal francesa da fala ONU, setembro2026",
      "url": "https://www.opinion-internationale.com/2026/09/30/le-regard-de-larabie-saoudite-sur-le-monde-verbatim-du-discours-de-faycal-ben-farhane-ministre-saoudien-des-affaires-etrangeres-devant-lonu_144298.html",
      "note": "Data editorial12 e atribuição20/corpo próprio22–84 efetivamente lidos. Reprodução francesa identificada, não documento ministerial autenticado. Publicação30/09/2026; atribui ocasião25/09. Índice UNA dá sábado26/09, sem corpo recuperado: dia da fala não certificado. Mesmo relato confirma atividade concluída2026."
    }
  ],
  "reem-al-hashimy": [
    {
      "title": "Reem Al Hashimy — declarações próprias nominalmente relatadas pela MoFA20/03/2026",
      "url": "https://www.mofa.gov.ae/en/MediaHub/News/2026/3/20/UAE-New-Delhi",
      "note": "Cabeçalho263–265/corpo270–278 efetivamente lidos. Visita concluída19/03/2026, publicação20/03. Declarações próprias explicitamente atribuídas273–277; posições das duas partes272 não exclusivamente pessoais. Relato institucional, não transcrição literal completa. Identidade e norma diplomática qualitativa, sem eixo graduado."
    }
  ],
  "tamim-bin-hamad-al-thani": [
    {
      "title": "Tamim bin Hamad Al Thani — fala própria ONU22/09/2026",
      "url": "https://www.diwan.gov.qa/en/briefing-room/speeches-and-remarks/2026/september/22/hh-the-amir-speech-at-the-opening-session-of-the-81st-un-general-assembly",
      "note": "Data45/título46 e corpo inglês52–124 integralmente lidos. Fala própria institucional22/09/2026 também confirma atividade concluída. Imagens/vídeo e traduções árabe/francesa/espanhola não examinados. Alegações de conflito, realizações e futuras sedes116 não verificadas."
    }
  ],
  "nawaf-salam": [
    {
      "title": "Nawaf Salam — reprodução nominal espanhola da fala ONU25/09/2026",
      "url": "https://dailybeirut.com/es/noticias-de-libano/el-texto-integro-del-discurso-del-jefe-de-gobierno-nawaf-salam-ante-la-asamblea-/",
      "note": "Data62/autoria60/67 e corpo espanhol69–165 integralmente lidos. Reprodução nominal, não original árabe autenticado; tradução analítica para português. Escopo normativo próprio separado de realizações alegadas96–103."
    },
    {
      "title": "UN News via Global Issues — atividade e declarações de Nawaf Salam25/09/2026",
      "url": "https://www.globalissues.org/news/2026/09/25/44174",
      "note": "Cabeçalho23–32/corpo34–58 efetivamente lidos. Reprodução sindicalizada explicitamente creditada UN News31/62; identidade concluída e corroborante de soberania/negociação. Original link UN News falhou acesso restrito, sem leitura direta ou exame de vídeo."
    }
  ],
  "joseph-aoun": [
    {
      "title": "Joseph Aoun — citações próprias da posse09/01/2025",
      "url": "https://www.mtv.com.lb/en/News/Local/1537579/president-joseph-aoun-takes-oath--calls-for-reform-and-unity",
      "note": "Data30/corpo33–48 efetivamente lidos. Citações próprias35/37/39–40 e relato nominal43–44 de programa militar defensivo. Reprodução jornalística da posse, não íntegra oficial autenticada ou execução certificada."
    },
    {
      "title": "Royal Hashemite Court — encontro concluído de Joseph Aoun16/09/2026",
      "url": "https://rhc.jo/en/news/king-meets-with-lebanon-president-underscores-jordans-support-for-lebanon",
      "note": "Data91/corpo93–96 efetivamente lidos confirma encontro concluído16/09/2026. Reunião seguinte93 era futura, não observada. Falas do rei95 não atribuídas a Aoun; identidade apenas, sem renovar programa2025."
    }
  ]
};

export const publicFigureBatch26Coding: Record<string,ReferenceAxisCoding[]> = {
  "faisal-bin-farhan": [
    {
      "axis": "dip",
      "position": "moderate-second",
      "confidence": "medium",
      "relatedQuestionIds": [
        "diplomacia_06"
      ],
      "claims": [
        {
          "sourceTitle": "Faisal bin Farhan — reprodução nominal francesa da fala ONU, setembro2026",
          "publishedDate": "2026-09-30 publicação; fala em setembro, dia não certificado",
          "accessedDate": "2026-10-08",
          "locator": "35–50/83–84; contraponto39/50",
          "statement": "Defende soluções diplomáticas e pacíficas gerais, cooperação e desescalada regional.",
          "basis": "declaration"
        }
      ],
      "rationale": "Prioridade diplomática declarada.",
      "uncertainty": "Direito de autodefesa39 e segurança/controle nuclear50 preservados. Francês reproduzido nominalmente; dia da ocasião incerto, não autenticidade de original ou prática certificada.",
      "reviewedOn": "2026-10-08"
    }
  ],
  "reem-al-hashimy": [],
  "tamim-bin-hamad-al-thani": [
    {
      "axis": "dip",
      "position": "moderate-second",
      "confidence": "medium",
      "relatedQuestionIds": [
        "diplomacia_06"
      ],
      "claims": [
        {
          "sourceTitle": "Tamim bin Hamad Al Thani — fala própria ONU22/09/2026",
          "publishedDate": "2026-09-22",
          "accessedDate": "2026-10-08",
          "locator": "63–73/113–120; contraponto76–83/103",
          "statement": "Prioriza diálogo e negociação como regra de solução dos conflitos e caminho geral para a paz.",
          "basis": "declaration"
        }
      ],
      "rationale": "Primazia diplomática declarada.",
      "uncertainty": "Defesa da soberania76, investimento em segurança83 e monopólio estatal das armas103 são contrapontos; não desarmamento nacional ou alegações empíricas certificadas.",
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "int",
      "position": "moderate-first",
      "confidence": "medium",
      "relatedQuestionIds": [
        "intervencao_01",
        "intervencao_03"
      ],
      "claims": [
        {
          "sourceTitle": "Tamim bin Hamad Al Thani — fala própria ONU22/09/2026",
          "publishedDate": "2026-09-22",
          "accessedDate": "2026-10-08",
          "locator": "63–73/97–110/119–120",
          "statement": "Defende sistema regional de segurança baseado em soberania, não ingerência e solução pacífica.",
          "basis": "declaration"
        }
      ],
      "rationale": "Não ingerência regional declarada.",
      "uncertainty": "Direito internacional e ONU120, defesa territorial76 e pressão internacional94–99 preservados; não isolamento absoluto, rejeição de toda cooperação ou veto a qualquer missão internacional.",
      "reviewedOn": "2026-10-08"
    }
  ],
  "nawaf-salam": [
    {
      "axis": "dip",
      "position": "moderate-second",
      "confidence": "medium",
      "relatedQuestionIds": [
        "diplomacia_06",
        "diplomacia_13"
      ],
      "claims": [
        {
          "sourceTitle": "Nawaf Salam — reprodução nominal espanhola da fala ONU25/09/2026",
          "publishedDate": "2026-09-25",
          "accessedDate": "2026-10-08",
          "locator": "72–78/108–121; contraponto87/117–121",
          "statement": "Prioriza prevenção de conflitos, desenvolvimento e negociação sobre gastos em armamentos e guerra.",
          "basis": "declaration"
        }
      ],
      "rationale": "Prioridade diplomática e prevenção.",
      "uncertainty": "Monopólio estatal das armas87/111 e apoio à força internacional117–121 preservados. Reprodução espanhola própria, não documento original autenticado; reformas e abolição98 não certificadas.",
      "reviewedOn": "2026-10-08"
    }
  ],
  "joseph-aoun": [
    {
      "axis": "dip",
      "position": "moderate-first",
      "confidence": "medium",
      "relatedQuestionIds": [
        "diplomacia_03"
      ],
      "claims": [
        {
          "sourceTitle": "Joseph Aoun — citações próprias da posse09/01/2025",
          "publishedDate": "2025-01-09",
          "accessedDate": "2026-10-08",
          "locator": "43–44; contraponto37/39/44/46–48",
          "statement": "Propõe investimento militar, reforço das forças de segurança e estratégia de defesa contra agressões.",
          "basis": "declaration"
        }
      ],
      "rationale": "Reforço militar defensivo declarado.",
      "uncertainty": "Estratégia também diplomática/econômica44 e neutralidade positiva47 preservadas. Relato nominal de proposta geral, não capacidade ou implementação; direito e mediação37/39 limitam inferência de guerra irrestrita.",
      "reviewedOn": "2026-10-08"
    }
  ]
};

const identities = [
  {
    "id": "faisal-bin-farhan",
    "name": "Faisal bin Farhan",
    "aliases": [
      "Faisal bin Farhan bin Abdullah",
      "Fayçal ben Farhane"
    ],
    "period": "Fala própria ONU em setembro2026, reprodução publicada30/09; dia da ocasião não certificado",
    "rationale": "Defende cooperação, desescalada e soluções diplomáticas, preservando autodefesa e segurança regional."
  },
  {
    "id": "reem-al-hashimy",
    "name": "Reem Al Hashimy",
    "aliases": [
      "Reem bint Ebrahim Al Hashimy",
      "Reem bint Ibrahim Al Hashimi"
    ],
    "period": "Declarações próprias atribuídas na visita19/03/2026, publicação20/03",
    "rationale": "Defende soberania, não ingerência e cooperação diplomática regional, preservando o direito de autodefesa."
  },
  {
    "id": "tamim-bin-hamad-al-thani",
    "name": "Tamim bin Hamad Al Thani",
    "aliases": [
      "Sheikh Tamim bin Hamad Al-Thani",
      "Tamim bin Hamad Al-Thani"
    ],
    "period": "Discurso próprio ONU22/09/2026",
    "rationale": "Defende diálogo, mediação e não ingerência regional, com respeito à soberania e defesa territorial."
  },
  {
    "id": "nawaf-salam",
    "name": "Nawaf Salam",
    "aliases": [
      "Nawaf Salām"
    ],
    "period": "Fala própria ONU reproduzida25/09/2026",
    "rationale": "Prioriza prevenção, desenvolvimento e negociação para a paz, com soberania estatal e cooperação internacional."
  },
  {
    "id": "joseph-aoun",
    "name": "Joseph Aoun",
    "aliases": [
      "Joseph Khalil Aoun",
      "Gen. Joseph Aoun"
    ],
    "period": "Programa de defesa próprio relatado09/01/2025; atividade confirmada16/09/2026",
    "rationale": "Propõe reforço militar defensivo e estratégia diplomática, econômica e militar, com neutralidade positiva."
  }
];

const specificUnknownReasons: Record<string, Partial<Record<AxisKey,string>>> = {
  "faisal-bin-farhan": {
    "com": "Navegação e logística43–45/78–79 não estabelecem orientação tarifária geral.",
    "tec": "Governança de IA80–82 e energia74 preservadas, sem orientação tecnológica inteira codificada.",
    "rel": "Invocação religiosa22–29 não determina arquitetura entre religião e Estado.",
    "int": "Soberania48–63 preservada; regra inteira de intervenção não separadamente graduada."
  },
  "reem-al-hashimy": {
    "int": "Não ingerência regional274 é norma qualitativa documentada; amplitude sobre intervenção militar inteira não resolvida.",
    "dip": "Cooperação275 e autodefesa274 preservadas qualitativamente; orientação militar inteira não graduada.",
    "com": "Navegação272 não determina barreiras comerciais globais.",
    "pod": "Autodefesa externa274 não estabelece coerção doméstica."
  },
  "tamim-bin-hamad-al-thani": {
    "pod": "Monopólio estatal das armas103 não determina limitação geral das liberdades civis.",
    "imi": "Interação cultural115 não estabelece autonomia ou assimilação geral.",
    "rel": "Invocação52–59 não estabelece relação institucional entre Estado e religião.",
    "con": "Planejamento de resiliência82 não define hierarquia de alocação da economia inteira.",
    "tec": "Desenvolvimento83 não resolve orientação tecnológica."
  },
  "nawaf-salam": {
    "pod": "Justiça/abolição relatada98 e monopólio das armas103 são pesquisa, sem direção geral de coerção graduada.",
    "tec": "IA82 apresenta benefícios/desafios/governança, sem adoção geral inequivocamente defendida.",
    "rep": "Reforma representativa da ONU155–163 não determina soberania eleitoral nacional.",
    "int": "Soberania e força internacional87/117–121 preservadas sem direção independente inteira resolvida."
  },
  "joseph-aoun": {
    "rep": "Eleição ou mediação institucional37 não determinam sozinhas hierarquia popular geral.",
    "pod": "Justiça39–44 e forças de segurança não determinam amplitude de restrições civis.",
    "imi": "Unidade35 e rejeição de assentamento47 coexistem; relação cultural inteira não resolvida.",
    "int": "Neutralidade positiva47 preservada qualitativamente sem regra inteira de intervenção."
  }
};

export const publicFigureBatch26: ReferenceEntry[] = identities.map(identity => {
  const entry: ReferenceEntry = {...identity,kind:'person',category:'public-figure',sources:publicFigureBatch26Sources[identity.id],vec:Object.fromEntries(AXES.map(({key})=>[key,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{},caveats:'Perfil documental parcial fora do ranking; eixos desconhecidos sem graduação. Declarações próprias no período delimitado, sem execução ou acusações certificadas; atividade2026 não renova normas antigas. Atribuição nominal não depende de filiação ou parentesco. Revisão documental independente delimitada aceita; não certifica prática nem cobertura integral de posições.'};
  for(const input of publicFigureBatch26Coding[entry.id]){const c=codeReferenceAxis(input,entry.sources);entry.vec[input.axis]=c.value;entry.evidence[input.axis]=c.evidence;entry.axisEvidence![input.axis]=c.axisEvidence;entry.coding![input.axis]=c.coding;}
  return entry;
});
export const publicFigureBatch26UnknownAxes=Object.fromEntries(publicFigureBatch26.map(entry=>[entry.id,Object.fromEntries(AXES.filter(({key})=>!entry.coding?.[key]).map(({key})=>[key,specificUnknownReasons[entry.id][key]??'Orientação geral não estabelecida nas passagens próprias efetivamente lidas; sem inferência por cargo, parentesco ou associação partidária.']))]));
