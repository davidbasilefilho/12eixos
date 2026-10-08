import { AXES } from '../lib/scoring';
import type { ReferenceEntry, ReferenceSource } from './references';

/** Exact full actual live objects before this isolated proposal. No recovered Library checkpoint claim. */
export const publicProvenance01Before: ReferenceEntry[] = [
  {
    "id": "lula-da-silva",
    "kind": "person",
    "category": "public-figure",
    "name": "Luiz Inácio Lula da Silva",
    "period": "Presidências e propostas públicas, 2003–2026",
    "vec": {
      "est": 50,
      "rep": 82,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 61,
      "eco": 68,
      "con": 64,
      "com": 50,
      "rel": 50,
      "mor": 68,
      "tec": 50
    },
    "rationale": "Programas de transferência de renda, direitos do trabalho e diplomacia multilateral sustentam sinais moderados de proteção pública e cooperação.",
    "caveats": "O recorte agrega mandatos distintos e declarações públicas; não equivale a uma plataforma única nem descreve toda a coalizão brasileira.",
    "sources": [
      {
        "title": "Discurso de posse presidencial, 2023",
        "url": "https://www.gov.br/planalto/pt-br/acompanhe-o-planalto/discursos-e-pronunciamentos/2023/discurso-do-presidente-luiz-inacio-lula-da-silva-na-sessao-solene-de-posse-no-congresso-nacional",
        "note": "Texto do próprio presidente sobre combate à fome, direitos, democracia, clima e política externa."
      }
    ],
    "evidence": {
      "rep": "medium",
      "int": "medium",
      "eco": "medium",
      "con": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Discurso de posse presidencial, 2023"
        ],
        "rationale": "Texto do próprio presidente sobre combate à fome, direitos, democracia, clima e política externa. Programas de transferência de renda, direitos do trabalho e diplomacia multilateral sustentam sinais moderados de proteção pública e cooperação. A direção editorial deste eixo é Democracia, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "int": {
        "sourceTitles": [
          "Discurso de posse presidencial, 2023"
        ],
        "rationale": "Texto do próprio presidente sobre combate à fome, direitos, democracia, clima e política externa. Programas de transferência de renda, direitos do trabalho e diplomacia multilateral sustentam sinais moderados de proteção pública e cooperação. A direção editorial deste eixo é Não intervencionista, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "eco": {
        "sourceTitles": [
          "Discurso de posse presidencial, 2023"
        ],
        "rationale": "Texto do próprio presidente sobre combate à fome, direitos, democracia, clima e política externa. Programas de transferência de renda, direitos do trabalho e diplomacia multilateral sustentam sinais moderados de proteção pública e cooperação. A direção editorial deste eixo é Público, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "con": {
        "sourceTitles": [
          "Discurso de posse presidencial, 2023"
        ],
        "rationale": "Texto do próprio presidente sobre combate à fome, direitos, democracia, clima e política externa. Programas de transferência de renda, direitos do trabalho e diplomacia multilateral sustentam sinais moderados de proteção pública e cooperação. A direção editorial deste eixo é Planejamento, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "mor": {
        "sourceTitles": [
          "Discurso de posse presidencial, 2023"
        ],
        "rationale": "Texto do próprio presidente sobre combate à fome, direitos, democracia, clima e política externa. Programas de transferência de renda, direitos do trabalho e diplomacia multilateral sustentam sinais moderados de proteção pública e cooperação. A direção editorial deste eixo é Progressista, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      }
    }
  },
  {
    "id": "cyril-ramaphosa",
    "kind": "person",
    "category": "public-figure",
    "name": "Cyril Ramaphosa",
    "period": "Presidência da África do Sul, 2018–2026",
    "vec": {
      "est": 50,
      "rep": 76,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 64,
      "eco": 59,
      "con": 61,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "O pronunciamento propõe resposta estatal ao crime, emprego público, direitos sociais e reforma econômica; a codificação é da agenda, não do indivíduo privado.",
    "caveats": "Um discurso de Estado da Nação não prova implementação nem opinião pessoal em todos os eixos; valores centrais indicam evidência não localizada.",
    "sources": [
      {
        "title": "President Cyril Ramaphosa: 2026 State of the Nation Address",
        "url": "https://www.gov.za/news/speeches/2026StateOfTheNation",
        "note": "Pronunciamento de 12 fevereiro de 2026 aborda instituições democráticas, empregos públicos, direitos, política econômica, polícia, forças armadas e inteligência artificial."
      }
    ],
    "evidence": {
      "rep": "medium",
      "int": "medium",
      "eco": "medium",
      "con": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "President Cyril Ramaphosa: 2026 State of the Nation Address"
        ],
        "rationale": "Pronunciamento de 12 fevereiro de 2026 aborda instituições democráticas, empregos públicos, direitos, política econômica, polícia, forças armadas e inteligência artificial. O pronunciamento propõe resposta estatal ao crime, emprego público, direitos sociais e reforma econômica; a codificação é da agenda, não do indivíduo privado. A direção editorial deste eixo é Democracia, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "int": {
        "sourceTitles": [
          "President Cyril Ramaphosa: 2026 State of the Nation Address"
        ],
        "rationale": "Pronunciamento de 12 fevereiro de 2026 aborda instituições democráticas, empregos públicos, direitos, política econômica, polícia, forças armadas e inteligência artificial. O pronunciamento propõe resposta estatal ao crime, emprego público, direitos sociais e reforma econômica; a codificação é da agenda, não do indivíduo privado. A direção editorial deste eixo é Não intervencionista, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "eco": {
        "sourceTitles": [
          "President Cyril Ramaphosa: 2026 State of the Nation Address"
        ],
        "rationale": "Pronunciamento de 12 fevereiro de 2026 aborda instituições democráticas, empregos públicos, direitos, política econômica, polícia, forças armadas e inteligência artificial. O pronunciamento propõe resposta estatal ao crime, emprego público, direitos sociais e reforma econômica; a codificação é da agenda, não do indivíduo privado. A direção editorial deste eixo é Público, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "con": {
        "sourceTitles": [
          "President Cyril Ramaphosa: 2026 State of the Nation Address"
        ],
        "rationale": "Pronunciamento de 12 fevereiro de 2026 aborda instituições democráticas, empregos públicos, direitos, política econômica, polícia, forças armadas e inteligência artificial. O pronunciamento propõe resposta estatal ao crime, emprego público, direitos sociais e reforma econômica; a codificação é da agenda, não do indivíduo privado. A direção editorial deste eixo é Planejamento, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      }
    }
  },
  {
    "id": "narendra-modi",
    "kind": "person",
    "category": "public-figure",
    "name": "Narendra Modi",
    "period": "Governos e discursos do BJP, 2014–2026",
    "vec": {
      "est": 50,
      "rep": 55,
      "pod": 72,
      "imi": 73,
      "dip": 68,
      "int": 35,
      "eco": 50,
      "con": 50,
      "com": 77,
      "rel": 50,
      "mor": 50,
      "tec": 79
    },
    "rationale": "Manifestos do BJP e discursos do governo documentam centralização nacional, segurança, identidade cultural, infraestrutura e digitalização.",
    "caveats": "A codificação trata políticas e retórica de governos liderados por Modi, não crenças privadas; centro permanece quando fonte ou eixo não é comparável.",
    "sources": [
      {
        "title": "Discurso sobre orçamento e reformas tecnológicas, 2026",
        "url": "https://www.pmindia.gov.in/en/news_updates/pm-addresses-post-budget-webinar-on-technology-reforms-and-finance-for-viksit-bharat/",
        "note": "Fonte primária do gabinete do primeiro-ministro sobre agenda nacional, inovação, reformas e governança tecnológica."
      }
    ],
    "evidence": {
      "rep": "medium",
      "pod": "medium",
      "imi": "medium",
      "dip": "medium",
      "int": "medium",
      "com": "medium",
      "tec": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Discurso sobre orçamento e reformas tecnológicas, 2026"
        ],
        "rationale": "Fonte primária do gabinete do primeiro-ministro sobre agenda nacional, inovação, reformas e governança tecnológica. Manifestos do BJP e discursos do governo documentam centralização nacional, segurança, identidade cultural, infraestrutura e digitalização. A direção editorial deste eixo é Democracia, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "pod": {
        "sourceTitles": [
          "Discurso sobre orçamento e reformas tecnológicas, 2026"
        ],
        "rationale": "Fonte primária do gabinete do primeiro-ministro sobre agenda nacional, inovação, reformas e governança tecnológica. Manifestos do BJP e discursos do governo documentam centralização nacional, segurança, identidade cultural, infraestrutura e digitalização. A direção editorial deste eixo é Segurança, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "imi": {
        "sourceTitles": [
          "Discurso sobre orçamento e reformas tecnológicas, 2026"
        ],
        "rationale": "Fonte primária do gabinete do primeiro-ministro sobre agenda nacional, inovação, reformas e governança tecnológica. Manifestos do BJP e discursos do governo documentam centralização nacional, segurança, identidade cultural, infraestrutura e digitalização. A direção editorial deste eixo é Assimilação, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "dip": {
        "sourceTitles": [
          "Discurso sobre orçamento e reformas tecnológicas, 2026"
        ],
        "rationale": "Fonte primária do gabinete do primeiro-ministro sobre agenda nacional, inovação, reformas e governança tecnológica. Manifestos do BJP e discursos do governo documentam centralização nacional, segurança, identidade cultural, infraestrutura e digitalização. A direção editorial deste eixo é Militarista, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "int": {
        "sourceTitles": [
          "Discurso sobre orçamento e reformas tecnológicas, 2026"
        ],
        "rationale": "Fonte primária do gabinete do primeiro-ministro sobre agenda nacional, inovação, reformas e governança tecnológica. Manifestos do BJP e discursos do governo documentam centralização nacional, segurança, identidade cultural, infraestrutura e digitalização. A direção editorial deste eixo é Nacionalista, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "com": {
        "sourceTitles": [
          "Discurso sobre orçamento e reformas tecnológicas, 2026"
        ],
        "rationale": "Fonte primária do gabinete do primeiro-ministro sobre agenda nacional, inovação, reformas e governança tecnológica. Manifestos do BJP e discursos do governo documentam centralização nacional, segurança, identidade cultural, infraestrutura e digitalização. A direção editorial deste eixo é Protecionismo, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "tec": {
        "sourceTitles": [
          "Discurso sobre orçamento e reformas tecnológicas, 2026"
        ],
        "rationale": "Fonte primária do gabinete do primeiro-ministro sobre agenda nacional, inovação, reformas e governança tecnológica. Manifestos do BJP e discursos do governo documentam centralização nacional, segurança, identidade cultural, infraestrutura e digitalização. A direção editorial deste eixo é Tecnologia, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      }
    }
  },
  {
    "id": "netumbo-nandi-ndaitwah",
    "kind": "person",
    "category": "public-figure",
    "name": "Netumbo Nandi-Ndaitwah",
    "period": "Presidência da Namíbia, 2025–2026",
    "vec": {
      "est": 50,
      "rep": 72,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 62,
      "eco": 60,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "O programa e discursos presidenciais articulam desenvolvimento, unidade nacional e integração regional, sem sustentar leituras fortes em temas culturais.",
    "caveats": "As fontes descrevem compromissos do governo em início de mandato; não representam resultados posteriores nem preferências pessoais completas.",
    "sources": [
      {
        "title": "Discurso de posse presidencial, 2025",
        "url": "https://op.gov.na/documents/1697384/6403706/Speech%2Bof%2BHer%2BExcellency%2BPresident%2BNetumbo%2BNandi%2BNdaitwah%2Bin%2BOutjo%2B31%2BJuly%2B2025.pdf/923dedcb-d33d-f6cd-d45d-9688af76517d?download=true&t=1757422969940&version=1.0",
        "note": "Discurso primário da presidente sobre redução da pobreza e políticas públicas."
      }
    ],
    "evidence": {
      "rep": "medium",
      "int": "medium",
      "eco": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Discurso de posse presidencial, 2025"
        ],
        "rationale": "Discurso primário da presidente sobre redução da pobreza e políticas públicas. O programa e discursos presidenciais articulam desenvolvimento, unidade nacional e integração regional, sem sustentar leituras fortes em temas culturais. A direção editorial deste eixo é Democracia, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "int": {
        "sourceTitles": [
          "Discurso de posse presidencial, 2025"
        ],
        "rationale": "Discurso primário da presidente sobre redução da pobreza e políticas públicas. O programa e discursos presidenciais articulam desenvolvimento, unidade nacional e integração regional, sem sustentar leituras fortes em temas culturais. A direção editorial deste eixo é Não intervencionista, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "eco": {
        "sourceTitles": [
          "Discurso de posse presidencial, 2025"
        ],
        "rationale": "Discurso primário da presidente sobre redução da pobreza e políticas públicas. O programa e discursos presidenciais articulam desenvolvimento, unidade nacional e integração regional, sem sustentar leituras fortes em temas culturais. A direção editorial deste eixo é Público, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      }
    }
  },
  {
    "id": "tsai-ing-wen",
    "kind": "person",
    "category": "public-figure",
    "name": "Tsai Ing-wen",
    "period": "Presidência de Taiwan, 2016–2024",
    "vec": {
      "est": 50,
      "rep": 88,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 42,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 72,
      "mor": 73,
      "tec": 70
    },
    "rationale": "Discursos de governo documentam democracia, direitos civis, autonomia institucional e modernização tecnológica durante dois mandatos.",
    "caveats": "O vetor retrata agenda presidencial delimitada; não converte disputas geopolíticas em julgamentos unidimensionais.",
    "sources": [
      {
        "title": "Discurso inaugural presidencial, 2020",
        "url": "https://english.president.gov.tw/News/6004",
        "note": "Discurso primário de Tsai sobre democracia, direitos, sociedade plural e futuro econômico."
      }
    ],
    "evidence": {
      "rep": "high",
      "int": "medium",
      "rel": "medium",
      "mor": "medium",
      "tec": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Discurso inaugural presidencial, 2020"
        ],
        "rationale": "Discurso primário de Tsai sobre democracia, direitos, sociedade plural e futuro econômico. Discursos de governo documentam democracia, direitos civis, autonomia institucional e modernização tecnológica durante dois mandatos. A direção editorial deste eixo é Democracia, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "int": {
        "sourceTitles": [
          "Discurso inaugural presidencial, 2020"
        ],
        "rationale": "Discurso primário de Tsai sobre democracia, direitos, sociedade plural e futuro econômico. Discursos de governo documentam democracia, direitos civis, autonomia institucional e modernização tecnológica durante dois mandatos. A direção editorial deste eixo é Nacionalista, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "rel": {
        "sourceTitles": [
          "Discurso inaugural presidencial, 2020"
        ],
        "rationale": "Discurso primário de Tsai sobre democracia, direitos, sociedade plural e futuro econômico. Discursos de governo documentam democracia, direitos civis, autonomia institucional e modernização tecnológica durante dois mandatos. A direção editorial deste eixo é Irreligioso, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "mor": {
        "sourceTitles": [
          "Discurso inaugural presidencial, 2020"
        ],
        "rationale": "Discurso primário de Tsai sobre democracia, direitos, sociedade plural e futuro econômico. Discursos de governo documentam democracia, direitos civis, autonomia institucional e modernização tecnológica durante dois mandatos. A direção editorial deste eixo é Progressista, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "tec": {
        "sourceTitles": [
          "Discurso inaugural presidencial, 2020"
        ],
        "rationale": "Discurso primário de Tsai sobre democracia, direitos, sociedade plural e futuro econômico. Discursos de governo documentam democracia, direitos civis, autonomia institucional e modernização tecnológica durante dois mandatos. A direção editorial deste eixo é Tecnologia, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      }
    }
  }
];

export const publicProvenance01Sources: Record<string,ReferenceSource[]> = {
  "lula-da-silva": [
    {
      "title": "Lula — discurso próprio G7 sobre governança digital17/06/2026, reprodução nominal",
      "url": "https://static.poder360.com.br/uploads/2026/06/lula-fala-g7-ia-17-jun.pdf",
      "note": "Três páginas0–88 completas lidas; atribuição7–9 fala lida17/06/2026/publicação19. Próprias10–18/50–58/67–82; riscos13–15/50 e tratamento igual70 preservados. Reprodução nominal de Planalto por Poder360, sem bytes originais autenticados ou resultados32–49/64–66 certificados."
    }
  ],
  "cyril-ramaphosa": [
    {
      "title": "Cyril Ramaphosa — SONA próprio12/02/2026, passagens efetivamente revistas",
      "url": "https://www.gov.za/news/speeches/2026StateOfTheNation",
      "note": "Data34/atribuição32, corpo35–278 efetivamente lido, não706linhas inteiras. Direitos/dignidade87/91–101/159–173 e segurança183–229 com controle parlamentar189/ética204/denunciantes221–222. Fala concluída confirma identidade2026; resultados107–147 não certificados."
    }
  ],
  "narendra-modi": [
    {
      "title": "Narendra Modi — declarações próprias no webinar27/02/2026, relato PMIndia",
      "url": "https://www.pmindia.gov.in/en/news_updates/pm-addresses-post-budget-webinar-on-technology-reforms-and-finance-for-viksit-bharat/",
      "note": "Corpo nominal69–100 completo lido, data27/02/2026 nos posts incorporados101–116, encontro concluído80. Próprias87–99 tecnologia/colaboração com privado89–95 e feedback88/97; resumo institucional não fala original integral/vídeo. Resultados86 não certificados."
    }
  ],
  "netumbo-nandi-ndaitwah": [
    {
      "title": "Netumbo Nandi-Ndaitwah — fala judicial própria05/02/2026, reprodução nominal",
      "url": "https://www.namibian.com.na/netumbo-nandi-ndaitwah-at-the-opening-of-the-2026-legal-year/",
      "note": "Autoria145/publicação147 em10/02/2026/ocasião149 em05/02. Corpo próprio152–206 completo lido: independência judicial162–179/191/199–202 com colaboração174–176 e segurança181/183–185. Nujoma156 separado, execução166/192 não certificada; PDF208 não comparado."
    }
  ],
  "tsai-ing-wen": [
    {
      "title": "Tsai Ing-wen — declaração escrita própria11/09/2026, reprodução CNA",
      "url": "https://focustaiwan.tw/politics/202609110006",
      "note": "Data88 e corpo95–125 completo lido; próprias escritas95–105, normas97/103. Trabalhador lê texto96–97, não presença/voz pessoal no seminário. Soong113–121 excluído; história100/106–112 não certificada."
    },
    {
      "title": "CNA — chegada concluída de Tsai Ing-wen05/10/2026",
      "url": "https://focustaiwan.tw/politics/202610060012",
      "note": "Publicação88 em06/10/2026, corpo94–119 inteiro lido. Chegada concluída05/10 local94–97 confirma identidade; palestras futuras98/106 e retorno115 não contados como ocorridos, imagens não examinadas."
    }
  ]
};

export const publicProvenance01Research = {
  "lula-da-silva": {
    "sourceTitle": "Lula — discurso próprio G7 sobre governança digital17/06/2026, reprodução nominal",
    "locator": "10–18/50–58/67–82",
    "publishedDate": "2026-06-17",
    "accessedDate": "2026-10-08",
    "statement": "Propõe governança digital ética e inclusiva para proteger direitos, considerando riscos e igualdade entre empresas.",
    "basis": "declaration"
  },
  "cyril-ramaphosa": {
    "sourceTitle": "Cyril Ramaphosa — SONA próprio12/02/2026, passagens efetivamente revistas",
    "locator": "87/91–101/159–173; contrapontos183–229",
    "publishedDate": "2026-02-12",
    "accessedDate": "2026-10-08",
    "statement": "Propõe direitos, dignidade e desenvolvimento inclusivo, preservando controle parlamentar, polícia ética e denunciantes.",
    "basis": "declaration"
  },
  "narendra-modi": {
    "sourceTitle": "Narendra Modi — declarações próprias no webinar27/02/2026, relato PMIndia",
    "locator": "87–99; data posts101–116",
    "publishedDate": "2026-02-27",
    "accessedDate": "2026-10-08",
    "statement": "Propõe tecnologia e avaliação na prestação pública, investimento e colaboração com indústria e academia.",
    "basis": "declaration"
  },
  "netumbo-nandi-ndaitwah": {
    "sourceTitle": "Netumbo Nandi-Ndaitwah — fala judicial própria05/02/2026, reprodução nominal",
    "locator": "162–179/191/199–202; contrapontos174–176/181/183–185",
    "publishedDate": "2026-02-10; ocasião2026-02-05",
    "accessedDate": "2026-10-08",
    "statement": "Defende independência judicial, igualdade de acesso e limites constitucionais do Executivo.",
    "basis": "declaration"
  },
  "tsai-ing-wen": {
    "sourceTitle": "Tsai Ing-wen — declaração escrita própria11/09/2026, reprodução CNA",
    "locator": "95–105, sobretudo97/103",
    "publishedDate": "2026-09-11",
    "accessedDate": "2026-10-08",
    "statement": "Defende escolha popular dos líderes e futuro nacional por participação eleitoral plural.",
    "basis": "declaration"
  }
};

const descriptions: Record<string,{period:string;rationale:string;limits:string}> = {
  "lula-da-silva": {
    "period": "Declaração própria G7 lida17/06/2026, reprodução nominal; não plataforma antiga renovada",
    "rationale": "Defende benefícios digitais com proteção de direitos e governança ética e inclusiva, preservando riscos e igualdade entre empresas.",
    "limits": "Reprodução nominal de fala própria, não autenticação de bytes Planalto; estatísticas, leis e resultados não certificados."
  },
  "cyril-ramaphosa": {
    "period": "Normas próprias SONA12/02/2026, somente passagens35–278 revistas",
    "rationale": "Defende dignidade, direitos e desenvolvimento inclusivo, com combate ao crime sob controle parlamentar e proteção de denunciantes.",
    "limits": "Passagens35–278 lidas, não discurso inteiro706linhas; segurança administrativa não resolve toda coerção civil."
  },
  "narendra-modi": {
    "period": "Declarações próprias no webinar27/02/2026, resumo nominal institucional",
    "rationale": "Propõe tecnologia e avaliação na prestação pública, com investimento privado e colaboração entre governo, indústria e academia.",
    "limits": "Resumo nominal institucional, não íntegra falada ou vídeo; métricas e resultados declarados não certificados."
  },
  "netumbo-nandi-ndaitwah": {
    "period": "Fala judicial própria05/02/2026, reprodução nominal publicada10/02",
    "rationale": "Defende independência judicial, acesso igual à justiça e limites constitucionais do Executivo, com colaboração e proteção dos tribunais.",
    "limits": "Reprodução nominal própria152–206, não comparação PDF208; colaboração e segurança judicial preservadas sem direção civil inteira."
  },
  "tsai-ing-wen": {
    "period": "Declaração escrita própria11/09/2026; atividade05/10/2026 somente identidade",
    "rationale": "Defende escolha popular dos líderes e participação eleitoral plural, respeitando diferenças de origem, partido e futuro nacional.",
    "limits": "Texto próprio lido por trabalhador do evento, não presença ou voz de Tsai; chegada05/10 confirma identidade, não palestras futuras."
  }
};

function buildProposal(entry:ReferenceEntry):ReferenceEntry {
 const description=descriptions[entry.id];
 const sources=[...entry.sources];
 for(const source of publicProvenance01Sources[entry.id])if(!sources.some(old=>old.title===source.title&&old.url===source.url))sources.push(source);
 return {...entry,sources,period:description.period,rationale:description.rationale,vec:Object.fromEntries(AXES.map(({key})=>[key,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{},caveats:'Perfil político qualitativo fora do ranking; doze eixos desconhecidos sem graduação. '+description.limits+' Valores, evidências genéricas, campos e fontes anteriores integralmente arquivados; não qualificam evidência documental. Declaração delimitada não certifica prática, identidade de bytes ou renovação de toda plataforma antiga. Reconciliação documental delimitada aceita; não constitui graduação dos eixos.'};
}
export const publicProvenance01Proposed:ReferenceEntry[]=publicProvenance01Before.map(buildProposal);
/** Full-object guard, idempotent only on this exact proposal; fail closed on concurrent changes. */
export function reconcilePublicProvenance01(entry:ReferenceEntry):ReferenceEntry {
 const index=publicProvenance01Before.findIndex(before=>before.id===entry.id);
 if(index<0)return entry;
 if(JSON.stringify(entry)===JSON.stringify(publicProvenance01Proposed[index]))return entry;
 if(JSON.stringify(entry)!==JSON.stringify(publicProvenance01Before[index]))throw new Error('Public provenance01: full current object differs from archived prior record for '+entry.id+'; reconcile explicitly');
 return buildProposal(entry);
}
export const publicProvenance01UnknownAxes=Object.fromEntries(publicProvenance01Proposed.map(entry=>[entry.id,Object.fromEntries(AXES.map(({key})=>[key,'Proveniência de norma própria delimitada preservada sem decisão de todo eixo; vetor genérico anterior arquivado, não promoção de evidência.']))]));
