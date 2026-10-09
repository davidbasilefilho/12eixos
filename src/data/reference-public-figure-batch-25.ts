import { AXES } from '../lib/scoring';
import type { ReferenceEntry, ReferenceSource, AxisKey } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';

export const publicFigureBatch25Sources: Record<string,ReferenceSource[]> = {
  "kemi-badenoch": [
    {
      "title": "Kemi Badenoch — discurso próprio sobre integração02/03/2026",
      "url": "https://www.conservatives.com/news/kemis-speech-on-british-integration",
      "note": "Data2/atribuição3–9/corpo próprio11–481 efetivamente lidos. Página partidária reproduz fala nominal pessoal completa, não atribuição pela filiação. Acusações e estatísticas não certificadas; nenhum vídeo examinado."
    },
    {
      "title": "Kemi Badenoch — discurso próprio econômico18/06/2026",
      "url": "https://www.conservatives.com/news/kemi-delivers-new-economic-revolution-speech",
      "note": "Data2/atribuição3/17/corpo próprio19–479 efetivamente lidos. Resumo5–16 separado dos blocos próprios. Propostas2026, não orçamento ou regulação implementados. Diagnósticos, adversários e terceiros citados não fatos certificados."
    }
  ],
  "droupadi-murmu": [
    {
      "title": "Droupadi Murmu — discurso próprio no Black Swan Summit06/02/2026",
      "url": "https://www.presidentofindia.gov.in/sites/default/files/2023-06/sp06022026.pdf",
      "note": "PDF físico4páginas/120linhas integralmente lido0–119; data/autoria1–4. Cabeçalhos impressos incorretos1/2/3/4of2 preservados, diretório2023-06 não determina data. Normas próprias, não resultados públicos ou eventos futuros certificados."
    }
  ],
  "hun-manet": [
    {
      "title": "Hun Manet — discurso próprio ao ASEAN Future Forum, junho2026",
      "url": "https://pressocm.gov.kh/en/archives/123380",
      "note": "Atribuição41/data editorial45/corpo próprio53–125 efetivamente lidos. Página exibe03/06/2026, mas linkCMF51 e título vídeo47 indicam09/06; dia da fala não certificado ou harmonizado artificialmente. LinkCMF retornou timeout. Atividade documental junho2026, sem vídeos examinados."
    }
  ],
  "tharman-shanmugaratnam": [
    {
      "title": "Tharman Shanmugaratnam — discurso próprio em Dar es Salaam09/06/2026",
      "url": "https://www.istana.gov.sg/newsroom/investing-in-the-drivers-of-inclusive-growth-transcript-of-speech-by-president-tharman-shanmugaratnam-at-the-university-of-dar-es-salaam-the-united-republic-of-tanzania-on-9-june-2026/",
      "note": "Título21/data23 e corpo próprio34–80 efetivamente lidos. Discurso prescritivo sobre desenvolvimento africano09/06/2026, não todas as políticas nacionais de Singapura. Estatísticas de terceiros39/60/66/75 e resultados não certificados."
    }
  ],
  "pita-limjaroenrat": [
    {
      "title": "Pita Limjaroenrat — entrevista própria à CNA26/01/2026",
      "url": "https://www.cna.com.tw/news/aopl/202601260114.aspx",
      "note": "Data274/publicação26/01/2026 e atualização27/01; corpo280–309 efetivamente lido em chinês. Citações próprias291–298 traduzidas analiticamente para português; literalidade em língua original falada não certificada. Não gradua todo programa partidário305 nem futuras viagens289."
    },
    {
      "title": "Duke APSI — atividade de Pita Limjaroenrat04/03/2026",
      "url": "https://asianpacific.duke.edu/news/looking-back-moving-forward-thai-political-leader-pita-limjaroenrat-speaks-duke",
      "note": "Data3 publicada10/03/2026/corpo7–35 efetivamente lidos, evento concluído04/03 indicado8. Relato de organizador com citações próprias30–35; identidade2026/caveat de participação limitada31–33. Áudio, vídeo e fotografias não examinados."
    }
  ]
};

export const publicFigureBatch25Coding: Record<string,ReferenceAxisCoding[]> = {
  "kemi-badenoch": [
    {
      "axis": "imi",
      "position": "moderate-first",
      "confidence": "medium",
      "relatedQuestionIds": [
        "imigracao_01",
        "imigracao_07",
        "imigracao_11"
      ],
      "claims": [
        {
          "sourceTitle": "Kemi Badenoch — discurso próprio sobre integração02/03/2026",
          "publishedDate": "2026-03-02",
          "accessedDate": "2026-10-08",
          "locator": "193–260/327–408; contrapontos256–267/379–382/457–464",
          "statement": "Defende assimilação em normas e identidade comuns, substituindo promoção estatal do multiculturalismo.",
          "basis": "declaration"
        }
      ],
      "rationale": "Assimilação cultural declarada.",
      "uncertainty": "Preserva tolerância256, rejeição de banimento de burca267, inclusão de origens diversas382 e país multirracial457. Não aprova racialismo ou certifica acusações contra comunidades/adversários; posição cultural não cor de pele.",
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "con",
      "position": "moderate-second",
      "confidence": "medium",
      "relatedQuestionIds": [
        "controle_04",
        "controle_06",
        "controle_14"
      ],
      "claims": [
        {
          "sourceTitle": "Kemi Badenoch — discurso próprio econômico18/06/2026",
          "publishedDate": "2026-06-18",
          "accessedDate": "2026-10-08",
          "locator": "112–116/184–200/210–264/375–410/460–475",
          "statement": "Prioriza alocação empresarial, desregulação e menor tributação em toda a economia, rejeitando investimento compulsório.",
          "basis": "declaration"
        }
      ],
      "rationale": "Alocação de mercado geral.",
      "uncertainty": "Regra fiscal250, proteção/reestruturação regulatória331–371 e estratégia governamental explícita377–385 limitam a direção. Energia, trabalho, impostos e finanças, não somente uma empresa. Sem propriedade majoritária privada inferida.",
      "reviewedOn": "2026-10-08"
    }
  ],
  "droupadi-murmu": [
    {
      "axis": "tec",
      "position": "moderate-first",
      "confidence": "medium",
      "relatedQuestionIds": [
        "tecnologia_02"
      ],
      "claims": [
        {
          "sourceTitle": "Droupadi Murmu — discurso próprio no Black Swan Summit06/02/2026",
          "publishedDate": "2026-02-06",
          "accessedDate": "2026-10-08",
          "locator": "18–30/57–66/73–101, especialmente87–88",
          "statement": "Promove adoção de tecnologia e IA em múltiplos setores com inclusão e justiça social.",
          "basis": "declaration"
        }
      ],
      "rationale": "Adoção tecnológica inclusiva.",
      "uncertainty": "Riscos digitais24–25/89–101, exclusão57–66 e dignidade/inclusão112–113 limitam entusiasmo. Normas próprias, não autorização de vigilância ou implementação de programas74–85.",
      "reviewedOn": "2026-10-08"
    }
  ],
  "hun-manet": [
    {
      "axis": "dip",
      "position": "moderate-second",
      "confidence": "medium",
      "relatedQuestionIds": [
        "diplomacia_06"
      ],
      "claims": [
        {
          "sourceTitle": "Hun Manet — discurso próprio ao ASEAN Future Forum, junho2026",
          "publishedDate": "2026-06-03 exibido editorialmente; dia da fala incerto",
          "accessedDate": "2026-10-08",
          "locator": "67–88/118–125",
          "statement": "Defende solução pacífica, diálogo e direito internacional nas relações regionais.",
          "basis": "declaration"
        }
      ],
      "rationale": "Prioridade diplomática declarada.",
      "uncertainty": "Defesa de soberania/fronteiras79–85 preservada; alegações territoriais e cessar-fogo não verificados. Escopo regional geral, não dissolução de forças armadas. Datas03/09junho incongruentes no próprio portal, sem dia da fala certificado.",
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "com",
      "position": "moderate-second",
      "confidence": "medium",
      "relatedQuestionIds": [
        "comercio_02",
        "comercio_03"
      ],
      "claims": [
        {
          "sourceTitle": "Hun Manet — discurso próprio ao ASEAN Future Forum, junho2026",
          "publishedDate": "2026-06-03 exibido editorialmente; dia da fala incerto",
          "accessedDate": "2026-10-08",
          "locator": "90–99, especialmente95–98",
          "statement": "Defende sistema multilateral livre e aberto, acordos de livre comércio e integração regional.",
          "basis": "declaration"
        }
      ],
      "rationale": "Abertura comercial multilateral.",
      "uncertainty": "Preserva interesses de pequenos Estados91 e finalidade humana102–105; não transferência automática de tarifas vigentes ou aprovação de todo acordo. Data editorial03/06 versus link09/06 mantida.",
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
          "sourceTitle": "Hun Manet — discurso próprio ao ASEAN Future Forum, junho2026",
          "publishedDate": "2026-06-03 exibido editorialmente; dia da fala incerto",
          "accessedDate": "2026-10-08",
          "locator": "95–105, especialmente99",
          "statement": "Propõe investir em IA, transformação digital, ciência e inovação para desenvolvimento futuro.",
          "basis": "declaration"
        }
      ],
      "rationale": "Adoção tecnológica transversal.",
      "uncertainty": "Transição verde99 e finalidade humana102–105 materialmente limitam orientação; não irrestrita prioridade tecnológica nem execução. Data da ocasião permanece junho2026 com dia não confirmado.",
      "reviewedOn": "2026-10-08"
    }
  ],
  "tharman-shanmugaratnam": [
    {
      "axis": "tec",
      "position": "moderate-first",
      "confidence": "medium",
      "relatedQuestionIds": [
        "tecnologia_02"
      ],
      "claims": [
        {
          "sourceTitle": "Tharman Shanmugaratnam — discurso próprio em Dar es Salaam09/06/2026",
          "publishedDate": "2026-06-09",
          "accessedDate": "2026-10-08",
          "locator": "41–55/63–70/78–80, especialmente48",
          "statement": "Defende estratégias digitais em todos os setores, com capacitação para empregos e desenvolvimento.",
          "basis": "declaration"
        }
      ],
      "rationale": "Adoção digital transversal.",
      "uncertainty": "Disrupção de emprego53–54 e clima55/64–70 preservados. Proposta ao desenvolvimento africano, não política atual nacional automática; renováveis não são a única base do código.",
      "reviewedOn": "2026-10-08"
    }
  ],
  "pita-limjaroenrat": [
    {
      "axis": "rep",
      "position": "moderate-first",
      "confidence": "medium",
      "relatedQuestionIds": [
        "representacao_02",
        "representacao_03"
      ],
      "claims": [
        {
          "sourceTitle": "Pita Limjaroenrat — entrevista própria à CNA26/01/2026",
          "publishedDate": "2026-01-26; atualizado27/01",
          "accessedDate": "2026-10-08",
          "locator": "291–298, especialmente293–296",
          "statement": "Defende responsabilização perante o povo e critica tutela de instituições nomeadas sobre a vontade eleitoral.",
          "basis": "declaration"
        }
      ],
      "rationale": "Autoridade popular contra tutela nomeada.",
      "uncertainty": "Análise própria em entrevista chinesa traduzida, não literalidade original ou decisões judiciais verificadas. Não abole órgãos independentes por inferência; Duke31–33 preserva limites alegados à própria participação política.",
      "reviewedOn": "2026-10-08"
    }
  ]
};

const identities = [
  {
    "id": "kemi-badenoch",
    "name": "Kemi Badenoch",
    "aliases": [
      "Olukemi Olufunto Adegoke Badenoch"
    ],
    "period": "Discursos próprios de integração02/03/2026 e economia18/06/2026",
    "rationale": "Defende assimilação cultural e normas comuns, com alocação empresarial, desregulação e redução de impostos."
  },
  {
    "id": "droupadi-murmu",
    "name": "Droupadi Murmu",
    "aliases": [
      "Draupadi Murmu",
      "Durgi Tudu"
    ],
    "period": "Discurso próprio tecnológico06/02/2026",
    "rationale": "Promove tecnologia e IA em múltiplos setores, com inclusão, justiça social, capacitação e prevenção de fraudes digitais."
  },
  {
    "id": "hun-manet",
    "name": "Hun Manet",
    "aliases": [
      "HUN Manet"
    ],
    "period": "Discurso próprio ASEAN, junho2026; data editorial03/06 diverge do link09/06, dia da fala não certificado",
    "rationale": "Defende solução pacífica e comércio multilateral aberto, com investimento em IA e inovação voltados às pessoas."
  },
  {
    "id": "tharman-shanmugaratnam",
    "name": "Tharman Shanmugaratnam",
    "aliases": [],
    "period": "Discurso próprio de desenvolvimento09/06/2026",
    "rationale": "Propõe estratégias digitais para todos os setores, capacitação e empregos, considerando disrupção tecnológica e clima."
  },
  {
    "id": "pita-limjaroenrat",
    "name": "Pita Limjaroenrat",
    "aliases": [
      "Pita Limcharoenrat"
    ],
    "period": "Entrevista própria publicada26/01/2026; atividade concluída04/03/2026",
    "rationale": "Defende responsabilização popular e critica a tutela de instituições nomeadas sobre a vontade expressa nas eleições."
  }
];

const specificUnknownReasons: Record<string, Partial<Record<AxisKey,string>>> = {
  "kemi-badenoch": {
    "eco": "Crítica à nacionalização429 e liderança empresarial112–116 preservadas; hierarquia de propriedade produtiva geral não estabelecida explicitamente.",
    "pod": "Limites culturais e defesa de expressão390–403 não resolvem a direção coerciva geral.",
    "mor": "Normas relativas a mulheres e casamento forçado157–160 são pesquisa, não eixo moral inteiro.",
    "int": "Caso Irã14–39 não converte em regra geral de intervenção.",
    "tec": "Tecnologias econômicas417–421 sem adesão geral suficiente neste recorte."
  },
  "droupadi-murmu": {
    "mor": "Fintech com liderança feminina44–56 é uma dimensão, não orientação moral inteira.",
    "eco": "Inclusão financeira não estabelece estrutura proprietária.",
    "pod": "Combate a fraude89–101 não define orientação coerciva geral."
  },
  "hun-manet": {
    "int": "Não ingerência68 integra retrospectiva ASEAN; não generalizada a todas intervenções militares como norma pessoal explícita.",
    "imi": "Intercâmbio cultural114 não determina relação de integração/autonomia cultural.",
    "eco": "Investimento99 não estabelece propriedade pública ou privada predominante.",
    "con": "Investimento regional99 não define sistema inteiro de alocação."
  },
  "tharman-shanmugaratnam": {
    "com": "AfCFTA e possível acordo72–73 preservados; sem regra tarifária geral resolvida.",
    "con": "Missão pública de empregos42–49, confiança de mercado49 e parcerias68 compõem quadro misto sem direção inteira resolvida.",
    "eco": "Parcerias de financiamento68 não definem propriedade produtiva geral.",
    "dip": "Paz57 como efeito de desenvolvimento não estabelece política militar geral."
  },
  "pita-limjaroenrat": {
    "mor": "Casamento partidário305 não é endosso próprio datado suficientemente abrangente.",
    "tec": "Plataforma digital partidária305 não transferida como orientação tecnológica geral.",
    "est": "Descentralização relatada por organizador21 não prova competências legislativas independentes.",
    "pod": "Crítica à tutela eleitoral não resolve toda orientação coerciva."
  }
};

export const publicFigureBatch25: ReferenceEntry[] = identities.map(identity => {
  const entry: ReferenceEntry = {...identity,kind:'person',category:'public-figure',sources:publicFigureBatch25Sources[identity.id],vec:Object.fromEntries(AXES.map(({key})=>[key,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{},caveats:'Perfil documental parcial fora do ranking; eixos desconhecidos sem graduação. Declarações próprias no período delimitado, sem execução ou acusações certificadas; atividade2026 não renova normas antigas. Atribuição nominal não depende de filiação ou parentesco. Revisão documental independente delimitada aceita; não certifica prática nem cobertura integral de posições.'};
  for(const input of publicFigureBatch25Coding[entry.id]){const c=codeReferenceAxis(input,entry.sources);entry.vec[input.axis]=c.value;entry.evidence[input.axis]=c.evidence;entry.axisEvidence![input.axis]=c.axisEvidence;entry.coding![input.axis]=c.coding;}
  return entry;
});
export const publicFigureBatch25UnknownAxes=Object.fromEntries(publicFigureBatch25.map(entry=>[entry.id,Object.fromEntries(AXES.filter(({key})=>!entry.coding?.[key]).map(({key})=>[key,specificUnknownReasons[entry.id][key]??'Orientação geral não estabelecida nas passagens próprias efetivamente lidas; sem inferência por cargo, parentesco ou associação partidária.']))]));
