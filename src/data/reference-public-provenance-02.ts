import { AXES } from '../lib/scoring';
import type { ReferenceEntry, ReferenceSource } from './references';

/** Full actual existing objects before this isolated reconciliation. */
export const publicProvenance02Before:ReferenceEntry[] = [
  {
    "id": "bernie-sanders",
    "kind": "person",
    "category": "public-figure",
    "name": "Bernie Sanders",
    "period": "Atuação legislativa e propostas públicas, 2019–2025",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 79,
      "con": 82,
      "com": 50,
      "rel": 50,
      "mor": 91,
      "tec": 62
    },
    "rationale": "Saúde universal, ação climática e fortalecimento do trabalho aproximam perfis favoráveis a serviços públicos e democracia.",
    "caveats": "Posições pessoais não foram diretamente medidas pelo questionário; eixo a eixo há inferência editorial e temas sem evidência ficam próximos do centro.",
    "sources": [
      {
        "title": "Temas e propostas do senador Sanders",
        "url": "https://www.sanders.senate.gov/issues/",
        "note": "Declarações do próprio gabinete sobre saúde, clima, trabalho e direitos."
      }
    ],
    "evidence": {
      "rep": "medium",
      "eco": "high",
      "con": "high",
      "mor": "high",
      "tec": "medium"
    },
    "axisEvidence": {
      "eco": {
        "sourceTitles": [
          "Temas e propostas do senador Sanders"
        ],
        "rationale": "O gabinete propõe seguro de saúde universal, salário mínimo mais alto, seguridade social e serviços públicos, sustentando maior provisão pública."
      },
      "con": {
        "sourceTitles": [
          "Temas e propostas do senador Sanders"
        ],
        "rationale": "A fonte defende regras contra concentração empresarial, negociação coletiva e regulação de setores essenciais, apoiando uma inclinação ao planejamento público."
      },
      "mor": {
        "sourceTitles": [
          "Temas e propostas do senador Sanders"
        ],
        "rationale": "As propostas incluem igualdade racial, direitos trabalhistas, saúde universal e proteção de minorias, sustentando a direção progressista."
      },
      "tec": {
        "sourceTitles": [
          "Temas e propostas do senador Sanders"
        ],
        "rationale": "O senador defende ampliar acesso à banda larga, proteger neutralidade da rede e investir em infraestrutura digital, sustentando uma inclinação tecnológica moderada."
      }
    }
  },
  {
    "id": "william-ruto",
    "kind": "person",
    "category": "public-figure",
    "name": "William Ruto",
    "period": "Presidência do Quênia e agenda pública, 2022–2026",
    "vec": {
      "est": 50,
      "rep": 66,
      "pod": 50,
      "imi": 50,
      "dip": 52,
      "int": 50,
      "eco": 48,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 64
    },
    "rationale": "A agenda de governo combina empreendedorismo, ação climática e segurança econômica; os demais eixos permanecem sem direção forte documentada.",
    "caveats": "A plataforma presidencial e a prática estatal não são equivalentes; a seleção de políticas não permite inferir opiniões pessoais.",
    "sources": [
      {
        "title": "Discursos e agenda presidencial",
        "url": "https://www.president.go.ke/speeches/",
        "note": "Portal oficial da Presidência do Quênia, com declarações e prioridades atribuídas ao presidente."
      }
    ],
    "evidence": {
      "rep": "medium",
      "dip": "medium",
      "eco": "medium",
      "tec": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Discursos e agenda presidencial"
        ],
        "rationale": "Portal oficial da Presidência do Quênia, com declarações e prioridades atribuídas ao presidente. A agenda de governo combina empreendedorismo, ação climática e segurança econômica; os demais eixos permanecem sem direção forte documentada. A direção editorial deste eixo é Democracia, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "dip": {
        "sourceTitles": [
          "Discursos e agenda presidencial"
        ],
        "rationale": "Portal oficial da Presidência do Quênia, com declarações e prioridades atribuídas ao presidente. A agenda de governo combina empreendedorismo, ação climática e segurança econômica; os demais eixos permanecem sem direção forte documentada. A direção editorial deste eixo é Militarista, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "eco": {
        "sourceTitles": [
          "Discursos e agenda presidencial"
        ],
        "rationale": "Portal oficial da Presidência do Quênia, com declarações e prioridades atribuídas ao presidente. A agenda de governo combina empreendedorismo, ação climática e segurança econômica; os demais eixos permanecem sem direção forte documentada. A direção editorial deste eixo é Privado, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "tec": {
        "sourceTitles": [
          "Discursos e agenda presidencial"
        ],
        "rationale": "Portal oficial da Presidência do Quênia, com declarações e prioridades atribuídas ao presidente. A agenda de governo combina empreendedorismo, ação climática e segurança econômica; os demais eixos permanecem sem direção forte documentada. A direção editorial deste eixo é Tecnologia, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      }
    }
  },
  {
    "id": "duma-boko",
    "kind": "person",
    "category": "public-figure",
    "name": "Duma Boko",
    "period": "Presidência e compromissos públicos de Botsuana, 2024–2026",
    "vec": {
      "est": 50,
      "rep": 78,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 58,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 62,
      "tec": 50
    },
    "rationale": "A plataforma eleitoral e os discursos de posse dão suporte a compromissos de alternância democrática, criação de emprego e inclusão.",
    "caveats": "Compromissos eleitorais não são resultados de governo; posições sem ligação direta aos documentos citados ficam no centro.",
    "sources": [
      {
        "title": "Discursos e informação presidencial",
        "url": "https://www.gov.bw/",
        "note": "Portal oficial do governo de Botsuana, incluindo informação e pronunciamentos presidenciais."
      }
    ],
    "evidence": {
      "rep": "medium",
      "eco": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Discursos e informação presidencial"
        ],
        "rationale": "Portal oficial do governo de Botsuana, incluindo informação e pronunciamentos presidenciais. A plataforma eleitoral e os discursos de posse dão suporte a compromissos de alternância democrática, criação de emprego e inclusão. A direção editorial deste eixo é Democracia, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "eco": {
        "sourceTitles": [
          "Discursos e informação presidencial"
        ],
        "rationale": "Portal oficial do governo de Botsuana, incluindo informação e pronunciamentos presidenciais. A plataforma eleitoral e os discursos de posse dão suporte a compromissos de alternância democrática, criação de emprego e inclusão. A direção editorial deste eixo é Público, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "mor": {
        "sourceTitles": [
          "Discursos e informação presidencial"
        ],
        "rationale": "Portal oficial do governo de Botsuana, incluindo informação e pronunciamentos presidenciais. A plataforma eleitoral e os discursos de posse dão suporte a compromissos de alternância democrática, criação de emprego e inclusão. A direção editorial deste eixo é Progressista, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      }
    }
  },
  {
    "id": "lai-ching-te",
    "kind": "person",
    "category": "public-figure",
    "name": "Lai Ching-te",
    "period": "Presidência de Taiwan e plataforma do DPP, 2024–2026",
    "vec": {
      "est": 50,
      "rep": 82,
      "pod": 50,
      "imi": 50,
      "dip": 53,
      "int": 39,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 67,
      "mor": 71,
      "tec": 69
    },
    "rationale": "A plataforma democrática e a defesa da autonomia de Taiwan sustentam democracia, pluralismo e segurança; o restante recebe evidência mais limitada.",
    "caveats": "A posição internacional é sensível a contexto e não se traduz sem perda ao eixo de não intervenção; descreve discurso e plataforma públicos.",
    "sources": [
      {
        "title": "Discursos presidenciais de Taiwan",
        "url": "https://english.president.gov.tw/News",
        "note": "Arquivo oficial com discursos de Lai sobre democracia, segurança, direitos e tecnologia."
      }
    ],
    "evidence": {
      "rep": "high",
      "dip": "medium",
      "int": "medium",
      "rel": "medium",
      "mor": "medium",
      "tec": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Discursos presidenciais de Taiwan"
        ],
        "rationale": "Arquivo oficial com discursos de Lai sobre democracia, segurança, direitos e tecnologia. A plataforma democrática e a defesa da autonomia de Taiwan sustentam democracia, pluralismo e segurança; o restante recebe evidência mais limitada. A direção editorial deste eixo é Democracia, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "dip": {
        "sourceTitles": [
          "Discursos presidenciais de Taiwan"
        ],
        "rationale": "Arquivo oficial com discursos de Lai sobre democracia, segurança, direitos e tecnologia. A plataforma democrática e a defesa da autonomia de Taiwan sustentam democracia, pluralismo e segurança; o restante recebe evidência mais limitada. A direção editorial deste eixo é Militarista, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "int": {
        "sourceTitles": [
          "Discursos presidenciais de Taiwan"
        ],
        "rationale": "Arquivo oficial com discursos de Lai sobre democracia, segurança, direitos e tecnologia. A plataforma democrática e a defesa da autonomia de Taiwan sustentam democracia, pluralismo e segurança; o restante recebe evidência mais limitada. A direção editorial deste eixo é Nacionalista, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "rel": {
        "sourceTitles": [
          "Discursos presidenciais de Taiwan"
        ],
        "rationale": "Arquivo oficial com discursos de Lai sobre democracia, segurança, direitos e tecnologia. A plataforma democrática e a defesa da autonomia de Taiwan sustentam democracia, pluralismo e segurança; o restante recebe evidência mais limitada. A direção editorial deste eixo é Irreligioso, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "mor": {
        "sourceTitles": [
          "Discursos presidenciais de Taiwan"
        ],
        "rationale": "Arquivo oficial com discursos de Lai sobre democracia, segurança, direitos e tecnologia. A plataforma democrática e a defesa da autonomia de Taiwan sustentam democracia, pluralismo e segurança; o restante recebe evidência mais limitada. A direção editorial deste eixo é Progressista, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "tec": {
        "sourceTitles": [
          "Discursos presidenciais de Taiwan"
        ],
        "rationale": "Arquivo oficial com discursos de Lai sobre democracia, segurança, direitos e tecnologia. A plataforma democrática e a defesa da autonomia de Taiwan sustentam democracia, pluralismo e segurança; o restante recebe evidência mais limitada. A direção editorial deste eixo é Tecnologia, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      }
    }
  },
  {
    "id": "anwar-ibrahim",
    "kind": "person",
    "category": "public-figure",
    "name": "Anwar Ibrahim",
    "period": "Discursos e governo da Malásia, 2022–2026",
    "vec": {
      "est": 50,
      "rep": 73,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 62,
      "con": 61,
      "com": 50,
      "rel": 50,
      "mor": 57,
      "tec": 68
    },
    "rationale": "A agenda Malaysia MADANI enfatiza compaixão, sustentabilidade, inovação, respeito, confiança e prosperidade compartilhada.",
    "caveats": "O marco é autodescrito pelo governo; a execução em uma coalizão e em um sistema plural exige análise própria.",
    "sources": [
      {
        "title": "Malaysia MADANI framework",
        "url": "https://malaysiamadani.gov.my/",
        "note": "Documento oficial de políticas anunciado pelo governo liderado por Anwar Ibrahim."
      }
    ],
    "evidence": {
      "rep": "medium",
      "eco": "medium",
      "con": "medium",
      "mor": "medium",
      "tec": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Malaysia MADANI framework"
        ],
        "rationale": "Documento oficial de políticas anunciado pelo governo liderado por Anwar Ibrahim. A agenda Malaysia MADANI enfatiza compaixão, sustentabilidade, inovação, respeito, confiança e prosperidade compartilhada. A direção editorial deste eixo é Democracia, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "eco": {
        "sourceTitles": [
          "Malaysia MADANI framework"
        ],
        "rationale": "Documento oficial de políticas anunciado pelo governo liderado por Anwar Ibrahim. A agenda Malaysia MADANI enfatiza compaixão, sustentabilidade, inovação, respeito, confiança e prosperidade compartilhada. A direção editorial deste eixo é Público, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "con": {
        "sourceTitles": [
          "Malaysia MADANI framework"
        ],
        "rationale": "Documento oficial de políticas anunciado pelo governo liderado por Anwar Ibrahim. A agenda Malaysia MADANI enfatiza compaixão, sustentabilidade, inovação, respeito, confiança e prosperidade compartilhada. A direção editorial deste eixo é Planejamento, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "mor": {
        "sourceTitles": [
          "Malaysia MADANI framework"
        ],
        "rationale": "Documento oficial de políticas anunciado pelo governo liderado por Anwar Ibrahim. A agenda Malaysia MADANI enfatiza compaixão, sustentabilidade, inovação, respeito, confiança e prosperidade compartilhada. A direção editorial deste eixo é Progressista, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "tec": {
        "sourceTitles": [
          "Malaysia MADANI framework"
        ],
        "rationale": "Documento oficial de políticas anunciado pelo governo liderado por Anwar Ibrahim. A agenda Malaysia MADANI enfatiza compaixão, sustentabilidade, inovação, respeito, confiança e prosperidade compartilhada. A direção editorial deste eixo é Tecnologia, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      }
    }
  }
];
export const publicProvenance02Sources:Record<string,ReferenceSource[]> = {
  "bernie-sanders": [
    {
      "title": "Bernie Sanders — fala própria21/09/2026 publicada pelo Senado",
      "url": "https://www.sanders.senate.gov/press-releases/prepared-remarks-sanders-ahead-of-un-general-assembly-oligarchy-is-ascending-and-democracy-is-in-retreat-working-together-that-must-change/",
      "note": "Atribuição/data78–79 e corpo próprio81–353 completos lidos. Benefícios tecnológicos241 contrapõem riscos307–324; estatísticas, guerras e acusações são alegações do orador, não fatos certificados. Texto preparado e anúncio de fala concluída, não áudio/vídeo examinado."
    }
  ],
  "william-ruto": [
    {
      "title": "William Ruto — declarações próprias no Kenya Health Summit, relato participante ONU",
      "url": "https://kenya.un.org/en/321632-five-things-we-learnt-kenya-health-summit-about-what-comes-next",
      "note": "Relato participante ONU11–131 completo lido, data5/autoria132–140; somente falas próprias13–14/33–34/113. Outros oficiais e conclusões editoriais não transferidos. Números e resultados declarados não certificados. Prioridade setorial não resolve propriedade econômica ou toda tecnologia. URL presidencial de reforma AU retornou conteúdo de apostas não relacionado, excluído da evidência."
    }
  ],
  "duma-boko": [
    {
      "title": "Duma Boko — declarações próprias em Nova York, reportagem nominal30/09/2026",
      "url": "https://nationaljeweler.com/articles/15369-botswana-s-president-de-beers-ceo-say-diamond-demand-is-recovering",
      "note": "Corpo76–107 completo lido, publicação68/autoria73/entrevista77. Normas próprias81–82/91–97 somente; Cook83 e Kenewendo99–101 excluídos. Reportagem nominal de entrevista/fala, não original oficial autenticado. Histórias, recuperação econômica e resultados não certificados; fotos não examinadas. A autodescrição de democracia não certifica práticas eleitorais."
    }
  ],
  "lai-ching-te": [
    {
      "title": "Lai Ching-te — texto oficial da fala própria12/05/2026 no Copenhagen Democracy Summit",
      "url": "https://english.president.gov.tw/News/7137",
      "note": "Data47/ocasião55/atribuição59 e corpo próprio61–75 completos lidos; defesa67/70 e paz67 coexistem. Tecnologia68 e comércio66 são facetas, não orientação de todo eixo. Acusações63–64 e resultados68/73 não certificados. Texto oficial lido, não vídeo, imagem ou idioma falado examinados; anfitriões76–78 excluídos."
    }
  ],
  "anwar-ibrahim": [
    {
      "title": "Anwar Ibrahim — declaração própria oficial15/09/2026 nas Maldivas",
      "url": "https://www.pmo.gov.my/en/speeches-en/verbatim-text-joint-press-statement-yab-dato-seri-anwar-bin-ibrahim-prime-minister-of-malaysia-during-official-visit-to-the-republic-of-maldives/",
      "note": "Atribuição38–52 e corpo próprio58–83 completos lidos. Financiamento depende de mecanismos62–63, saúde68 e possível exploração PETRONAS69 preservados. Encontro futuro60 e próximas decisões65 não ocorridos por inferência; acusações internacionais71/73/77 não certificadas. Saudação religiosa e comentário jocoso61 não determinam REL/MOR. Texto nominal próprio, não gravação examinada."
    }
  ]
};
export const publicProvenance02Research = {
  "bernie-sanders": {
    "sourceTitle": "Bernie Sanders — fala própria21/09/2026 publicada pelo Senado",
    "locator": "81–353, sobretudo95–101/120–127/237/300/323–345",
    "publishedDate": "2026-09-21",
    "accessedDate": "2026-10-08",
    "statement": "Defende democracia contra concentração oligárquica, negociação e prioridades sociais, com cautela sobre os riscos da inteligência artificial.",
    "basis": "declaration"
  },
  "william-ruto": {
    "sourceTitle": "William Ruto — declarações próprias no Kenya Health Summit, relato participante ONU",
    "locator": "13–14/33–34/113, corpo11–131",
    "publishedDate": "2026-08-24; dia do encontro não informado",
    "accessedDate": "2026-10-08",
    "statement": "Propõe atendimento de saúde acessível e digno, com serviços digitais para acompanhar pacientes e tornar pagamentos responsáveis.",
    "basis": "declaration"
  },
  "duma-boko": {
    "sourceTitle": "Duma Boko — declarações próprias em Nova York, reportagem nominal30/09/2026",
    "locator": "76–107, próprias81–82/91–97",
    "publishedDate": "2026-09-30; entrevista2026-09-24",
    "accessedDate": "2026-10-08",
    "statement": "Apresenta a alternância pacífica como exemplo democrático e propõe prosperidade e investimento com recursos naturais.",
    "basis": "declaration"
  },
  "lai-ching-te": {
    "sourceTitle": "Lai Ching-te — texto oficial da fala própria12/05/2026 no Copenhagen Democracy Summit",
    "locator": "61–75, sobretudo65–75; atribuição55/59",
    "publishedDate": "2026-05-12",
    "accessedDate": "2026-10-08",
    "statement": "Defende união democrática, defesa de Taiwan e cooperação internacional, conciliando capacidades de segurança com paz.",
    "basis": "declaration"
  },
  "anwar-ibrahim": {
    "sourceTitle": "Anwar Ibrahim — declaração própria oficial15/09/2026 nas Maldivas",
    "locator": "58–83, sobretudo60–74",
    "publishedDate": "2026-09-15",
    "accessedDate": "2026-10-08",
    "statement": "Propõe cooperação bilateral, cuidado em saúde e educação e financiamento climático, mantendo condicionais financeiros e energéticos.",
    "basis": "declaration"
  }
};
const descriptions:Record<string,{period:string;rationale:string;limits:string}> = {
  "bernie-sanders": {
    "period": "Declaração própria21/09/2026 anterior à Assembleia Geral, texto preparado oficialmente publicado",
    "rationale": "Defende democracia contra concentração oligárquica, negociação e prioridades sociais, com cautela sobre os riscos da inteligência artificial.",
    "limits": "Atribuição/data78–79 e corpo próprio81–353 completos lidos. Benefícios tecnológicos241 contrapõem riscos307–324; estatísticas, guerras e acusações são alegações do orador, não fatos certificados. Texto preparado e anúncio de fala concluída, não áudio/vídeo examinado."
  },
  "william-ruto": {
    "period": "Declarações próprias no encontro de saúde2026; relato ONU publicado24/08, dia do encontro não informado",
    "rationale": "Propõe atendimento de saúde acessível e digno, com serviços digitais para acompanhar pacientes e tornar pagamentos responsáveis.",
    "limits": "Relato participante ONU11–131 completo lido, data5/autoria132–140; somente falas próprias13–14/33–34/113. Outros oficiais e conclusões editoriais não transferidos. Números e resultados declarados não certificados. Prioridade setorial não resolve propriedade econômica ou toda tecnologia. URL presidencial de reforma AU retornou conteúdo de apostas não relacionado, excluído da evidência."
  },
  "duma-boko": {
    "period": "Declarações próprias em Nova York, entrevista24/09/2026; reportagem30/09",
    "rationale": "Apresenta a alternância pacífica como exemplo democrático e propõe prosperidade e investimento com recursos naturais.",
    "limits": "Corpo76–107 completo lido, publicação68/autoria73/entrevista77. Normas próprias81–82/91–97 somente; Cook83 e Kenewendo99–101 excluídos. Reportagem nominal de entrevista/fala, não original oficial autenticado. Histórias, recuperação econômica e resultados não certificados; fotos não examinadas. A autodescrição de democracia não certifica práticas eleitorais."
  },
  "lai-ching-te": {
    "period": "Texto oficial da fala própria por vídeo12/05/2026, encontro concluído",
    "rationale": "Defende união democrática, defesa de Taiwan e cooperação internacional, conciliando capacidades de segurança com paz.",
    "limits": "Data47/ocasião55/atribuição59 e corpo próprio61–75 completos lidos; defesa67/70 e paz67 coexistem. Tecnologia68 e comércio66 são facetas, não orientação de todo eixo. Acusações63–64 e resultados68/73 não certificados. Texto oficial lido, não vídeo, imagem ou idioma falado examinados; anfitriões76–78 excluídos."
  },
  "anwar-ibrahim": {
    "period": "Declaração própria oficial15/09/2026 durante visita concluída às Maldivas",
    "rationale": "Propõe cooperação bilateral, cuidado em saúde e educação e financiamento climático, mantendo condicionais financeiros e energéticos.",
    "limits": "Atribuição38–52 e corpo próprio58–83 completos lidos. Financiamento depende de mecanismos62–63, saúde68 e possível exploração PETRONAS69 preservados. Encontro futuro60 e próximas decisões65 não ocorridos por inferência; acusações internacionais71/73/77 não certificadas. Saudação religiosa e comentário jocoso61 não determinam REL/MOR. Texto nominal próprio, não gravação examinada."
  }
};

function buildProposal(entry:ReferenceEntry):ReferenceEntry {
 const description=descriptions[entry.id];
 const sources=[...entry.sources];
 for(const source of publicProvenance02Sources[entry.id])if(!sources.some(old=>old.title===source.title&&old.url===source.url))sources.push(source);
 return {...entry,sources,period:description.period,rationale:description.rationale,vec:Object.fromEntries(AXES.map(({key})=>[key,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{},caveats:'Perfil político qualitativo fora do ranking; doze eixos desconhecidos sem graduação. '+description.limits+' Valores, evidências genéricas, campos e fontes anteriores integralmente arquivados; não qualificam evidência documental. Declaração delimitada não certifica prática, identidade de bytes ou renovação de toda plataforma antiga. Reconciliação documental delimitada aceita; não constitui graduação dos eixos.'};
}
export const publicProvenance02Proposed:ReferenceEntry[]=publicProvenance02Before.map(buildProposal);
/** Full-object guard, idempotent only on this exact proposal; fail closed on concurrent changes. */
export function reconcilePublicProvenance02(entry:ReferenceEntry):ReferenceEntry {
 const index=publicProvenance02Before.findIndex(before=>before.id===entry.id);
 if(index<0)return entry;
 if(JSON.stringify(entry)===JSON.stringify(publicProvenance02Proposed[index]))return entry;
 if(JSON.stringify(entry)!==JSON.stringify(publicProvenance02Before[index]))throw new Error('Public provenance02: full current object differs from archived prior record for '+entry.id+'; reconcile explicitly');
 return buildProposal(entry);
}
export const publicProvenance02UnknownAxes=Object.fromEntries(publicProvenance02Proposed.map(entry=>[entry.id,Object.fromEntries(AXES.map(({key})=>[key,'Proveniência de norma própria delimitada preservada sem decisão de todo eixo; vetor genérico anterior arquivado, não promoção de evidência.']))]));
