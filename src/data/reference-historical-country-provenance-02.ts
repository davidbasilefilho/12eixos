import type {ReferenceEntry} from './references';

// Full prior records retained; accepted source/date/description repairs only.
export const historicalCountryProvenance02Before={
  "russia-yeltsin": {
    "id": "russia-yeltsin",
    "kind": "country",
    "category": "historical-country",
    "name": "Rússia — presidência de Boris Yeltsin",
    "period": "Transição pós-soviética, 1991–1999",
    "vec": {
      "est": 50,
      "rep": 57,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 21,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "A Constituição de 1993 prevê eleições, concorrência econômica e liberdade de atividade; o arquivo contextualiza o fim soviético.",
    "caveats": "Recorte institucional datado; não representa a população, povos subordinados nem governos fora do período. O texto constitucional não comprova a execução das garantias nem a extensão da privatização. O período inclui conflito armado e desigualdade; não equivale à Rússia posterior. Eixos sem evidência suficiente permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "Constituição da Federação Russa de 1993 — texto histórico, Bucknell University",
        "url": "https://www.departments.bucknell.edu/russian/const/constit.html",
        "note": "Documento primário ou registro de arquivo relacionado ao período Transição pós-soviética, 1991–1999; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Office of the Historian — dissolution of the Soviet Union",
        "url": "https://history.state.gov/milestones/1989-1992/collapse-soviet-union",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      }
    ],
    "evidence": {
      "rep": "medium",
      "con": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constituição da Federação Russa de 1993 — texto histórico, Bucknell University"
        ],
        "rationale": "Artigos 1 e 3 definem república democrática e eleições livres; documentam a regra formal, sem provar sua execução no governo Yeltsin."
      },
      "con": {
        "sourceTitles": [
          "Constituição da Federação Russa de 1993 — texto histórico, Bucknell University"
        ],
        "rationale": "Artigo 8 garante concorrência e liberdade de atividade econômica; ampara direção de coordenação por mercado, sem medir planejamento ou privatização efetivos."
      }
    }
  },
  "spain-franco": {
    "id": "spain-franco",
    "kind": "country",
    "category": "historical-country",
    "name": "Espanha — franquismo",
    "period": "Ditadura de Francisco Franco, 1939–1975",
    "vec": {
      "est": 50,
      "rep": 4,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 8,
      "mor": 9,
      "tec": 50
    },
    "rationale": "Ditadura suprimiu partidos e liberdades e instituiu Estado nacional-católico.",
    "caveats": "Recorte institucional datado; não representa a população, povos subordinados nem governos fora do período. Autarquia deu lugar a abertura econômica; apenas repressão e religião oficial estão representadas. Eixos sem evidência suficiente permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "Lei de Princípios do Movimento Nacional (1958)",
        "url": "https://www.boe.es/gazeta/dias/1958/05/19/pdfs/BOE-1958-119.pdf",
        "note": "Documento primário ou registro de arquivo relacionado ao período Ditadura de Francisco Franco, 1939–1975; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Congreso de los Diputados — franquismo",
        "url": "https://www.congreso.es/cem/franquismo",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      }
    ],
    "evidence": {
      "rep": "high",
      "rel": "medium",
      "mor": "high"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Lei de Princípios do Movimento Nacional (1958)",
          "Congreso de los Diputados — franquismo"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 4."
      },
      "rel": {
        "sourceTitles": [
          "Lei de Princípios do Movimento Nacional (1958)",
          "Congreso de los Diputados — franquismo"
        ],
        "rationale": "A carta ou fonte documenta laicidade, religião de Estado ou autoridade religiosa, sustentando 8."
      },
      "mor": {
        "sourceTitles": [
          "Lei de Princípios do Movimento Nacional (1958)",
          "Congreso de los Diputados — franquismo"
        ],
        "rationale": "A fonte registra extensão ou restrição de direitos e igualdade no período, sustentando 9."
      }
    }
  },
  "portugal-first-republic": {
    "id": "portugal-first-republic",
    "kind": "country",
    "category": "historical-country",
    "name": "Portugal — Primeira República",
    "period": "República parlamentar, 1910–1926",
    "vec": {
      "est": 50,
      "rep": 57,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 92,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Constituição republicana instituiu separação entre Igreja e Estado.",
    "caveats": "Recorte institucional datado; não representa a população, povos subordinados nem governos fora do período. Sufrágio era restrito e governo instável; duração e contexto limitam comparação. Eixos sem evidência suficiente permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "Constituição Política de 1911",
        "url": "https://www.parlamento.pt/Parlamento/Documents/Constituicao1911.pdf",
        "note": "Documento primário ou registro de arquivo relacionado ao período República parlamentar, 1910–1926; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Assembleia da República — história republicana",
        "url": "https://www.parlamento.pt/Parlamento/Paginas/Republica-Primeira.aspx",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      }
    ],
    "evidence": {
      "rep": "medium",
      "rel": "high"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constituição Política de 1911",
          "Assembleia da República — história republicana"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 57."
      },
      "rel": {
        "sourceTitles": [
          "Constituição Política de 1911",
          "Assembleia da República — história republicana"
        ],
        "rationale": "A carta ou fonte documenta laicidade, religião de Estado ou autoridade religiosa, sustentando 92."
      }
    }
  },
  "guatemala-military-governments-1954": {
    "id": "guatemala-military-governments-1954",
    "kind": "country",
    "category": "historical-country",
    "name": "Guatemala — governos militares e guerra civil",
    "period": "Do golpe de 1954 aos acordos de paz, 1954–1996",
    "vec": {
      "est": 50,
      "rep": 12,
      "pod": 85,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 2,
      "tec": 50
    },
    "rationale": "A longa guerra civil e os regimes militares restringiram competição política e direitos humanos.",
    "caveats": "O intervalo contém transições e atores diversos; o relatório da comissão mostra também participação de forças insurgentes. Os eixos sem evidência direta permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "Memoria del Silencio — Comisión para el Esclarecimiento Histórico",
        "url": "https://www.undp.org/guatemala/publications/guatemala-memoria-del-silencio",
        "note": "Fonte documental relacionada ao recorte Do golpe de 1954 aos acordos de paz, 1954–1996; sustenta somente os eixos apontados na justificativa específica."
      },
      {
        "title": "Constituição da Guatemala (1985)",
        "url": "https://www.constituteproject.org/constitution/Guatemala_1985",
        "note": "Fonte de arquivo, pesquisa histórica ou contexto institucional para delimitar o período e confrontar o texto normativo."
      }
    ],
    "evidence": {
      "rep": "high",
      "pod": "medium",
      "mor": "high"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Memoria del Silencio — Comisión para el Esclarecimiento Histórico",
          "Constituição da Guatemala (1985)"
        ],
        "rationale": "A comissão documenta golpes, governos militares e eleições sob tutela durante grande parte do período."
      },
      "pod": {
        "sourceTitles": [
          "Memoria del Silencio — Comisión para el Esclarecimiento Histórico",
          "Constituição da Guatemala (1985)"
        ],
        "rationale": "Doutrinas de contrainsurgência e forças armadas exerceram coerção em nome da segurança estatal."
      },
      "mor": {
        "sourceTitles": [
          "Memoria del Silencio — Comisión para el Esclarecimiento Histórico",
          "Constituição da Guatemala (1985)"
        ],
        "rationale": "A comissão atribuiu graves violações a forças estatais, com impactos desproporcionais em comunidades maias."
      }
    }
  },
  "colombia-conservative-hegemony-1886": {
    "id": "colombia-conservative-hegemony-1886",
    "kind": "country",
    "category": "historical-country",
    "name": "Colômbia — Hegemonia Conservadora",
    "period": "Predomínio conservador sob a Constituição de 1886, 1886–1930",
    "vec": {
      "est": 18,
      "rep": 44,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 12,
      "mor": 50,
      "tec": 50
    },
    "rationale": "A Regeneração centralizou o Estado e fortaleceu a posição institucional da Igreja Católica.",
    "caveats": "A hegemonia incluiu alternância negociada em alguns governos e uma guerra civil; não foi uma ditadura uniforme. Os eixos sem evidência direta permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "Constituição Política da Colômbia (1886)",
        "url": "https://www.suin-juriscol.gov.co/viewDocument.asp?id=1826862",
        "note": "Fonte documental relacionada ao recorte Predomínio conservador sob a Constituição de 1886, 1886–1930; sustenta somente os eixos apontados na justificativa específica."
      },
      {
        "title": "Biblioteca Virtual del Banco de la República — República Conservadora",
        "url": "https://www.banrepcultural.org/biblioteca-virtual/credencial-historia/numero-182/la-republica-conservadora-1886-1930",
        "note": "Fonte de arquivo, pesquisa histórica ou contexto institucional para delimitar o período e confrontar o texto normativo."
      }
    ],
    "evidence": {
      "est": "high",
      "rep": "medium",
      "rel": "high"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Constituição Política da Colômbia (1886)",
          "Biblioteca Virtual del Banco de la República — República Conservadora"
        ],
        "rationale": "A constituição substituiu o federalismo radical por um Estado centralizado."
      },
      "rep": {
        "sourceTitles": [
          "Constituição Política da Colômbia (1886)",
          "Biblioteca Virtual del Banco de la República — República Conservadora"
        ],
        "rationale": "O sufrágio e a alternância eram limitados e a competição política foi restringida por períodos de exceção."
      },
      "rel": {
        "sourceTitles": [
          "Constituição Política da Colômbia (1886)",
          "Biblioteca Virtual del Banco de la República — República Conservadora"
        ],
        "rationale": "A carta restabeleceu relações privilegiadas entre a Igreja Católica e o Estado."
      }
    }
  },
  "czechoslovakia-first-republic-1918": {
    "id": "czechoslovakia-first-republic-1918",
    "kind": "country",
    "category": "historical-country",
    "name": "Tchecoslováquia — Primeira República",
    "period": "República parlamentar entre guerras, 1918–1938",
    "vec": {
      "est": 18,
      "rep": 79,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "A república parlamentar preservou competição política e pluralidade nacional em um Estado territorialmente centralizado até a crise de Munique.",
    "caveats": "Desigualdades entre nacionalidades e tensões fronteiriças eram significativas; o país foi desmembrado em 1938–39. Os eixos sem evidência direta permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "Constituição da Tchecoslováquia (1920)",
        "url": "https://www.constituteproject.org/constitution/Czechoslovakia_1920",
        "note": "Fonte documental relacionada ao recorte República parlamentar entre guerras, 1918–1938; sustenta somente os eixos apontados na justificativa específica."
      },
      {
        "title": "Czechoslovakia 1918–1938 — German History in Documents and Images",
        "url": "https://germanhistorydocs.org/en/weimar-germany-1918-1933/czechoslovakia-1918-1938",
        "note": "Fonte de arquivo, pesquisa histórica ou contexto institucional para delimitar o período e confrontar o texto normativo."
      }
    ],
    "evidence": {
      "est": "high",
      "rep": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Constituição da Tchecoslováquia (1920)",
          "Czechoslovakia 1918–1938 — German History in Documents and Images"
        ],
        "rationale": "A constituição estabeleceu um Estado unitário centralizado; o valor fica no polo unitário apesar da diversidade nacional."
      },
      "rep": {
        "sourceTitles": [
          "Constituição da Tchecoslováquia (1920)",
          "Czechoslovakia 1918–1938 — German History in Documents and Images"
        ],
        "rationale": "Eleições multipartidárias e alternância ocorreram, embora minorias e o Executivo enfrentassem tensões."
      }
    }
  },
  "albania-hoxha-1946": {
    "id": "albania-hoxha-1946",
    "kind": "country",
    "category": "historical-country",
    "name": "Albânia — regime de Enver Hoxha",
    "period": "República Popular Socialista, 1946–1991",
    "vec": {
      "est": 50,
      "rep": 4,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 96,
      "con": 94,
      "com": 50,
      "rel": 95,
      "mor": 50,
      "tec": 50
    },
    "rationale": "A ditadura comunista implantou planejamento central, controle político e, por período, ateísmo estatal obrigatório.",
    "caveats": "A política religiosa mudou após o fim do ateísmo constitucional; o recorte especifica principalmente a ordem de 1976–1990. Os eixos sem evidência direta permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "Constituição da Albânia (1976)",
        "url": "https://www.constituteproject.org/constitution/Albania_1976",
        "note": "Fonte documental relacionada ao recorte República Popular Socialista, 1946–1991; sustenta somente os eixos apontados na justificativa específica."
      },
      {
        "title": "Albania — Library of Congress Country Studies",
        "url": "https://tile.loc.gov/storage-services/master/frd/frdcstdy/al/albaniacountryst00raym/albaniacountryst00raym.pdf",
        "note": "Fonte de arquivo, pesquisa histórica ou contexto institucional para delimitar o período e confrontar o texto normativo."
      }
    ],
    "evidence": {
      "rep": "high",
      "eco": "high",
      "con": "medium",
      "rel": "high"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constituição da Albânia (1976)",
          "Albania — Library of Congress Country Studies"
        ],
        "rationale": "A constituição confirmou poder exclusivo do Partido do Trabalho e vedou organizações concorrentes."
      },
      "eco": {
        "sourceTitles": [
          "Constituição da Albânia (1976)",
          "Albania — Library of Congress Country Studies"
        ],
        "rationale": "A carta proibiu propriedade privada de meios de produção e definiu economia socialista estatal."
      },
      "con": {
        "sourceTitles": [
          "Constituição da Albânia (1976)",
          "Albania — Library of Congress Country Studies"
        ],
        "rationale": "A economia foi organizada por planos centrais e coletivização."
      },
      "rel": {
        "sourceTitles": [
          "Constituição da Albânia (1976)",
          "Albania — Library of Congress Country Studies"
        ],
        "rationale": "O Estado declarou-se ateu e proibiu a prática religiosa organizada em 1967."
      }
    }
  },
  "romania-kingdom-1923": {
    "id": "romania-kingdom-1923",
    "kind": "country",
    "category": "historical-country",
    "name": "Romênia — monarquia constitucional",
    "period": "Constituição liberal e monarquia, 1923–1940",
    "vec": {
      "est": 50,
      "rep": 57,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 38,
      "tec": 50
    },
    "rationale": "A monarquia constitucional combinou instituições parlamentares com práticas eleitorais e cidadania desiguais.",
    "caveats": "A fonte contextual cobre período mais amplo; a constituição de 1923 não impediu a virada autoritária de 1938. Os eixos sem evidência direta permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "Constituição da Romênia (1923)",
        "url": "https://www.constituteproject.org/constitution/Romania_1923",
        "note": "Fonte documental relacionada ao recorte Constituição liberal e monarquia, 1923–1940; sustenta somente os eixos apontados na justificativa específica."
      },
      {
        "title": "Romania 1866–1947 — Encyclopaedia Britannica",
        "url": "https://www.britannica.com/place/Romania/Romania-since-World-War-II",
        "note": "Fonte de arquivo, pesquisa histórica ou contexto institucional para delimitar o período e confrontar o texto normativo."
      }
    ],
    "evidence": {
      "rep": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constituição da Romênia (1923)",
          "Romania 1866–1947 — Encyclopaedia Britannica"
        ],
        "rationale": "A constituição previa sufrágio e parlamento, mas governos interferiam em eleições e direitos eram desiguais."
      },
      "mor": {
        "sourceTitles": [
          "Constituição da Romênia (1923)",
          "Romania 1866–1947 — Encyclopaedia Britannica"
        ],
        "rationale": "A cidadania formal coexistia com discriminação legal de minorias, especialmente judaicas, antes do regime autoritário de 1940."
      }
    }
  },
  "south-vietnam-1955": {
    "id": "south-vietnam-1955",
    "kind": "country",
    "category": "historical-country",
    "name": "República do Vietnã (Vietnã do Sul)",
    "period": "República de Ngô Đình Diệm e sucessores, 1955–1975",
    "vec": {
      "est": 50,
      "rep": 28,
      "pod": 74,
      "imi": 50,
      "dip": 83,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Uma república anticomunista, em guerra, combinou instituições eleitorais formais, autoritarismo inicial e ampla mobilização militar.",
    "caveats": "Governos civis e militares se alternaram; este período não representa a população vietnamita nem a República Socialista atual. Os eixos sem evidência direta permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "Constituição da República do Vietnã (1967)",
        "url": "https://www.constituteproject.org/constitution/South_Vietnam_1967",
        "note": "Fonte documental relacionada ao recorte República de Ngô Đình Diệm e sucessores, 1955–1975; sustenta somente os eixos apontados na justificativa específica."
      },
      {
        "title": "Vietnam: A Country Study — Library of Congress",
        "url": "https://tile.loc.gov/storage-services/master/frd/frdcstdy/vi/vietnamcountryst00cima/vietnamcountryst00cima.pdf",
        "note": "Fonte de arquivo, pesquisa histórica ou contexto institucional para delimitar o período e confrontar o texto normativo."
      }
    ],
    "evidence": {
      "rep": "medium",
      "pod": "medium",
      "dip": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constituição da República do Vietnã (1967)",
          "Vietnam: A Country Study — Library of Congress"
        ],
        "rationale": "A carta de 1967 previa instituições eleitorais, mas golpes e competição desigual limitaram a democracia do Estado em guerra."
      },
      "pod": {
        "sourceTitles": [
          "Constituição da República do Vietnã (1967)",
          "Vietnam: A Country Study — Library of Congress"
        ],
        "rationale": "Lei marcial, polícia e emergência tiveram papel central na segurança doméstica."
      },
      "dip": {
        "sourceTitles": [
          "Constituição da República do Vietnã (1967)",
          "Vietnam: A Country Study — Library of Congress"
        ],
        "rationale": "O governo foi fortemente militarizado e sustentado por intervenção externa durante a guerra."
      }
    }
  },
  "cambodia-sangkum-1955": {
    "id": "cambodia-sangkum-1955",
    "kind": "country",
    "category": "historical-country",
    "name": "Camboja — Sangkum Reastr Niyum",
    "period": "Governo de Norodom Sihanouk, 1955–1970",
    "vec": {
      "est": 50,
      "rep": 37,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 70,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "O reino adotou neutralidade externa e governo personalista que limitou o pluralismo partidário.",
    "caveats": "O período termina no golpe de 1970; não confundir com o Khmer Rouge nem com governos posteriores. Os eixos sem evidência direta permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "Constituição do Reino do Camboja (1953)",
        "url": "https://www.constituteproject.org/constitution/Cambodia_1953",
        "note": "Fonte documental relacionada ao recorte Governo de Norodom Sihanouk, 1955–1970; sustenta somente os eixos apontados na justificativa específica."
      },
      {
        "title": "Cambodia — Library of Congress Country Studies",
        "url": "https://tile.loc.gov/storage-services/master/frd/frdcstdy/ca/cambodiacountryst00ross/cambodiacountryst00ross.pdf",
        "note": "Fonte de arquivo, pesquisa histórica ou contexto institucional para delimitar o período e confrontar o texto normativo."
      }
    ],
    "evidence": {
      "rep": "medium",
      "int": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constituição do Reino do Camboja (1953)",
          "Cambodia — Library of Congress Country Studies"
        ],
        "rationale": "Sihanouk usou eleições e instituições formais, mas o movimento governista dominou competição e reprimiu adversários."
      },
      "int": {
        "sourceTitles": [
          "Constituição do Reino do Camboja (1953)",
          "Cambodia — Library of Congress Country Studies"
        ],
        "rationale": "A neutralidade formal e o não alinhamento foram princípios declarados, pressionados pela Guerra do Vietnã."
      }
    }
  },
  "afghanistan-pdpa-1978": {
    "id": "afghanistan-pdpa-1978",
    "kind": "country",
    "category": "historical-country",
    "name": "Afeganistão — governo do PDPA",
    "period": "República Democrática e República do Afeganistão, 1978–1992",
    "vec": {
      "est": 50,
      "rep": 8,
      "pod": 50,
      "imi": 50,
      "dip": 88,
      "int": 50,
      "eco": 78,
      "con": 73,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Um partido revolucionário buscou reformas socialistas sob guerra civil e dependência militar soviética.",
    "caveats": "O regime atravessou mudanças de linha e coalizões; as reformas variaram muito fora das cidades. Os eixos sem evidência direta permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "Constituição do Afeganistão (1987)",
        "url": "https://www.constituteproject.org/constitution/Afghanistan_1987",
        "note": "Fonte documental relacionada ao recorte República Democrática e República do Afeganistão, 1978–1992; sustenta somente os eixos apontados na justificativa específica."
      },
      {
        "title": "Afghanistan — Library of Congress Country Studies",
        "url": "https://tile.loc.gov/storage-services/master/frd/frdcstdy/af/afghanistancountr00rubi/afghanistancountr00rubi.pdf",
        "note": "Fonte de arquivo, pesquisa histórica ou contexto institucional para delimitar o período e confrontar o texto normativo."
      }
    ],
    "evidence": {
      "rep": "medium",
      "eco": "medium",
      "con": "medium",
      "dip": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constituição do Afeganistão (1987)",
          "Afghanistan — Library of Congress Country Studies"
        ],
        "rationale": "O PDPA governou sem competição pluralista efetiva e reprimiu adversários."
      },
      "eco": {
        "sourceTitles": [
          "Constituição do Afeganistão (1987)",
          "Afghanistan — Library of Congress Country Studies"
        ],
        "rationale": "Reformas de terras e propriedade pública expandiram o papel estatal, embora sua implementação fosse limitada."
      },
      "con": {
        "sourceTitles": [
          "Constituição do Afeganistão (1987)",
          "Afghanistan — Library of Congress Country Studies"
        ],
        "rationale": "O governo lançou programas de planejamento central e transformação rural."
      },
      "dip": {
        "sourceTitles": [
          "Constituição do Afeganistão (1987)",
          "Afghanistan — Library of Congress Country Studies"
        ],
        "rationale": "A intervenção militar soviética de 1979 e a presença até 1989 documentam militarização externa."
      }
    }
  },
  "nepal-panchayat-1962": {
    "id": "nepal-panchayat-1962",
    "kind": "country",
    "category": "historical-country",
    "name": "Nepal — sistema Panchayat",
    "period": "Monarquia sem partidos, 1962–1990",
    "vec": {
      "est": 18,
      "rep": 18,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 20,
      "mor": 50,
      "tec": 50
    },
    "rationale": "A monarquia panchayat criou representação corporativa sem competição partidária e declarou o hinduísmo como referência estatal.",
    "caveats": "O sistema durou até a restauração multipartidária de 1990; não descreve o Nepal federal atual. Os eixos sem evidência direta permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "Constituição do Nepal (1962)",
        "url": "https://www.constituteproject.org/constitution/Nepal_1962",
        "note": "Fonte documental relacionada ao recorte Monarquia sem partidos, 1962–1990; sustenta somente os eixos apontados na justificativa específica."
      },
      {
        "title": "Nepal — Library of Congress Country Studies",
        "url": "https://tile.loc.gov/storage-services/master/frd/frdcstdy/ne/nepalcountrystud00sava/nepalcountrystud00sava.pdf",
        "note": "Fonte de arquivo, pesquisa histórica ou contexto institucional para delimitar o período e confrontar o texto normativo."
      }
    ],
    "evidence": {
      "rep": "high",
      "est": "medium",
      "rel": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constituição do Nepal (1962)",
          "Nepal — Library of Congress Country Studies"
        ],
        "rationale": "A carta baniu partidos e concentrou autoridade no rei, embora incluísse conselhos eletivos controlados."
      },
      "est": {
        "sourceTitles": [
          "Constituição do Nepal (1962)",
          "Nepal — Library of Congress Country Studies"
        ],
        "rationale": "O Estado permaneceu unitário e centralizado sob a monarquia."
      },
      "rel": {
        "sourceTitles": [
          "Constituição do Nepal (1962)",
          "Nepal — Library of Congress Country Studies"
        ],
        "rationale": "A constituição definiu o Nepal como reino hindu."
      }
    }
  },
  "sri-lanka-executive-presidency-1978": {
    "id": "sri-lanka-executive-presidency-1978",
    "kind": "country",
    "category": "historical-country",
    "name": "Sri Lanka — período da presidência executiva",
    "period": "Constituição de 1978 e guerra civil, 1978–2009",
    "vec": {
      "est": 50,
      "rep": 54,
      "pod": 73,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 28,
      "mor": 30,
      "tec": 50
    },
    "rationale": "A presidência executiva e a guerra civil alteraram o equilíbrio entre segurança, direitos e competição política.",
    "caveats": "O perfil termina em 2009 e não descreve governos atuais; relatórios oficiais refletem também a perspectiva estatal. Os eixos sem evidência direta permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "Constituição do Sri Lanka (1978)",
        "url": "https://www.parliament.lk/files/pdf/constitution.pdf",
        "note": "Fonte documental relacionada ao recorte Constituição de 1978 e guerra civil, 1978–2009; sustenta somente os eixos apontados na justificativa específica."
      },
      {
        "title": "Report of the Lessons Learnt and Reconciliation Commission",
        "url": "https://www.mfa.gov.lk/llrc-report/",
        "note": "Fonte de arquivo, pesquisa histórica ou contexto institucional para delimitar o período e confrontar o texto normativo."
      }
    ],
    "evidence": {
      "rep": "medium",
      "pod": "medium",
      "rel": "high",
      "mor": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constituição do Sri Lanka (1978)",
          "Report of the Lessons Learnt and Reconciliation Commission"
        ],
        "rationale": "A carta instaurou uma presidência executiva e manteve eleições competitivas, mas o período de guerra incluiu suspensões e abusos."
      },
      "pod": {
        "sourceTitles": [
          "Constituição do Sri Lanka (1978)",
          "Report of the Lessons Learnt and Reconciliation Commission"
        ],
        "rationale": "A guerra civil ampliou poderes de segurança e medidas de emergência."
      },
      "rel": {
        "sourceTitles": [
          "Constituição do Sri Lanka (1978)",
          "Report of the Lessons Learnt and Reconciliation Commission"
        ],
        "rationale": "A constituição confere ao budismo posição de primazia, embora proteja outras religiões."
      },
      "mor": {
        "sourceTitles": [
          "Constituição do Sri Lanka (1978)",
          "Report of the Lessons Learnt and Reconciliation Commission"
        ],
        "rationale": "A guerra e as políticas linguísticas produziram desigualdades e violações documentadas."
      }
    }
  },
  "poland-april-charter-1935": {
    "id": "poland-april-charter-1935",
    "name": "Polônia — República sob a Constituição de Abril",
    "aliases": [
      "Segunda República Polonesa — carta de abril de 1935"
    ],
    "period": "Ordem territorial anterior à ocupação, 1935–1939; desenho original de abril de 1935",
    "rationale": "A Presidência recebe autoridade concentrada e prerrogativas próprias, mas câmaras eletivas e mecanismos de responsabilização ministerial continuam previstos.",
    "caveats": "Não cria uma segunda identidade para cada governo da Segunda República: delimita a mudança material de supremacia presidencial da carta de 1935. O texto continuou relevante para o governo no exílio após 1939; o fim do recorte territorial não é apresentado como revogação jurídica.",
    "sources": [
      {
        "title": "Ustawa konstytucyjna, 23 kwietnia 1935 — Sejm",
        "url": "https://api.sejm.gov.pl/eli/acts/DU/1935/227/text.pdf",
        "note": "Fac-símile original oficial: Lei Constitucional de 23 de abril, publicada em 24 de abril de 1935, Diário de Leis nº 30, posição 227."
      }
    ],
    "kind": "country",
    "category": "historical-country",
    "vec": {
      "est": 50,
      "rep": 40,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "rep": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Ustawa konstytucyjna, 23 kwietnia 1935 — Sejm"
        ],
        "rationale": "Concentração presidencial com representação e controles condicionados sustenta direção autocrática moderada, sem equiparar o arranjo a ausência completa de eleições. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não certifica eleições livres, a prática do movimento sanacja ou a intensidade da coerção. O sufrágio formal de ambos os sexos e o procedimento de controle são contrapontos relevantes."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-second",
        "confidence": "medium",
        "relatedQuestionIds": [
          "representacao_15"
        ],
        "claims": [
          {
            "sourceTitle": "Ustawa konstytucyjna, 23 kwietnia 1935 — Sejm",
            "locator": "Art. 2–3, 12–15, 28–29 e 31–33",
            "statement": "Autoridade suprema indivisível cabe ao Presidente, que nomeia governo e dissolve câmaras. O Sejm é eletivo, legisla, controla orçamento e pode exigir demissão do governo sob procedimento condicionado.",
            "basis": "norm",
            "publishedDate": "1935-04-23",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Concentração presidencial com representação e controles condicionados sustenta direção autocrática moderada, sem equiparar o arranjo a ausência completa de eleições.",
        "uncertainty": "Não certifica eleições livres, a prática do movimento sanacja ou a intensidade da coerção. O sufrágio formal de ambos os sexos e o procedimento de controle são contrapontos relevantes.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      }
    },
    "documentaryReview": {
      "status": "author-reviewed-bounded-claims",
      "reviewedOn": "2026-10-07",
      "independentReview": "pending",
      "scope": "Apenas distribuição constitucional de poder da edição de 1935 codificada."
    },
    "unknownAxisReasons": {
      "est": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "pod": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "imi": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "dip": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "int": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "eco": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "con": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "com": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "rel": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "mor": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "tec": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação."
    },
    "identityOrigin": {
      "disposition": "new-historical-unit",
      "distinctness": "Mudança material para supremacia presidencial na carta de abril; não é alias de uma administração."
    },
    "codingScope": "Ordem territorial anterior à ocupação, 1935–1939; desenho original de abril de 1935"
  },
  "poland-peoples-republic-1952": {
    "id": "poland-peoples-republic-1952",
    "name": "Polônia — República Popular",
    "aliases": [
      "Polska Rzeczpospolita Ludowa",
      "PRL"
    ],
    "period": "Regime da República Popular, 1952–1989; codificação da edição constitucional original de 1952",
    "rationale": "A carta original vincula governo e órgãos territoriais ao planejamento nacional; o contexto institucional registra repressão e ruptura do monopólio político em 1989.",
    "caveats": "A duração do regime não é a vigência inalterada da edição de 1952: houve emendas e crise do poder partidário. A carta formal permaneceu juridicamente até 1997. Não estendemos a codificação normativa a todos os anos nem tratamos promessas eleitorais como competição comprovada.",
    "sources": [
      {
        "title": "Konstytucja Polskiej Rzeczypospolitej Ludowej, 22 lipca 1952 — Sejm",
        "url": "https://api.sejm.gov.pl/eli/acts/DU/1952/232/text.pdf",
        "note": "Fac-símile da promulgação original, Diário de Leis nº 33, posição 232; artigos 3, 19, 27, 32 e 34–37."
      },
      {
        "title": "Brief History of Poland — Institute of National Remembrance",
        "url": "https://eng.ipn.gov.pl/en/brief-history-of-poland",
        "note": "Retrospectiva do arquivo nacional: controle político, repressão, Solidarność e transição de 1989; não é o texto constitucional contemporâneo."
      }
    ],
    "kind": "country",
    "category": "historical-country",
    "vec": {
      "est": 40,
      "rep": 20,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 80,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "con": "high",
      "est": "medium",
      "rep": "medium"
    },
    "axisEvidence": {
      "con": {
        "sourceTitles": [
          "Konstytucja Polskiej Rzeczypospolitej Ludowej, 22 lipca 1952 — Sejm"
        ],
        "rationale": "Obrigação de planos nacionais e atribuições executivas expressas sustentam planejamento forte no desenho de 1952. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: A carta não mede execução, eficiência ou proporção da economia efetivamente planejada; não certifica todas as emendas posteriores."
      },
      "est": {
        "sourceTitles": [
          "Konstytucja Polskiej Rzeczypospolitej Ludowej, 22 lipca 1952 — Sejm"
        ],
        "rationale": "Subordinação territorial à direção nacional sustenta orientação unitária moderada, preservando competências locais declaradas. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Conselhos eleitos são contraponto; não quantificamos autonomia administrativa efetiva nem supomos que todo órgão local fosse destituído de poder."
      },
      "rep": {
        "sourceTitles": [
          "Brief History of Poland — Institute of National Remembrance",
          "Konstytucja Polskiej Rzeczypospolitej Ludowej, 22 lipca 1952 — Sejm"
        ],
        "rationale": "Restrição da oposição e contraste eleitoral explícito entre a PRL e a transição sustentam direção autocrática do regime anterior a 1989, confrontada com as promessas formais. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Âncora de regime, não medida anual de competição: liberalizações, Solidarność e a eleição parcialmente livre de 1989 são rupturas. A cronologia não valida cada pleito nem demonstra sozinha todos os mecanismos do monopólio partidário."
      }
    },
    "coding": {
      "con": {
        "axis": "con",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Konstytucja Polskiej Rzeczypospolitej Ludowej, 22 lipca 1952 — Sejm",
            "locator": "Art. 3(3), 19(3) e 32(3–4); páginas impressas 347, 352 e 356",
            "statement": "O Estado dirige a economia planejada; o Sejm aprova planos plurianuais e o governo elabora planos, adota os anuais e assegura sua execução.",
            "basis": "norm",
            "publishedDate": "1952-07-22",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Obrigação de planos nacionais e atribuições executivas expressas sustentam planejamento forte no desenho de 1952.",
        "uncertainty": "A carta não mede execução, eficiência ou proporção da economia efetivamente planejada; não certifica todas as emendas posteriores.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "est": {
        "axis": "est",
        "position": "moderate-second",
        "confidence": "medium",
        "relatedQuestionIds": [
          "estrutura_01",
          "estrutura_05"
        ],
        "claims": [
          {
            "sourceTitle": "Konstytucja Polskiej Rzeczypospolitej Ludowej, 22 lipca 1952 — Sejm",
            "locator": "Art. 27(6), 32(9) e 34–37; páginas impressas 354, 356–357",
            "statement": "Órgãos nacionais supervisionam os conselhos territoriais e dirigem seus presidia; conselhos eleitos atendem necessidades locais vinculadas às tarefas nacionais.",
            "basis": "norm",
            "publishedDate": "1952-07-22",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Subordinação territorial à direção nacional sustenta orientação unitária moderada, preservando competências locais declaradas.",
        "uncertainty": "Conselhos eleitos são contraponto; não quantificamos autonomia administrativa efetiva nem supomos que todo órgão local fosse destituído de poder.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "rep": {
        "axis": "rep",
        "position": "strong-second",
        "confidence": "medium",
        "relatedQuestionIds": [
          "representacao_01",
          "representacao_15"
        ],
        "claims": [
          {
            "sourceTitle": "Brief History of Poland — Institute of National Remembrance",
            "locator": "Cronologia: 1981, 1989 e 1991",
            "statement": "O IPN registra prisões da oposição em 1981, primeira eleição parlamentar parcialmente democrática em 1989 e primeiro pleito parlamentar livre pós-guerra em 1991.",
            "basis": "practice",
            "publishedDate": "Publicação institucional sem data indicada; retrospectiva do século XX",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Konstytucja Polskiej Rzeczypospolitej Ludowej, 22 lipca 1952 — Sejm",
            "locator": "Art. 1–2; página impressa 347",
            "statement": "A carta promete exercício popular por representantes eleitos e votação universal, igual, direta e secreta.",
            "basis": "norm",
            "publishedDate": "1952-07-22",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Restrição da oposição e contraste eleitoral explícito entre a PRL e a transição sustentam direção autocrática do regime anterior a 1989, confrontada com as promessas formais.",
        "uncertainty": "Âncora de regime, não medida anual de competição: liberalizações, Solidarność e a eleição parcialmente livre de 1989 são rupturas. A cronologia não valida cada pleito nem demonstra sozinha todos os mecanismos do monopólio partidário.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 20,
        "range": [
          10,
          25
        ]
      }
    },
    "documentaryReview": {
      "status": "author-reviewed-bounded-claims",
      "reviewedOn": "2026-10-07",
      "independentReview": "pending",
      "scope": "Fac-símile original de 1952 e cronologia institucional examinados; emendas posteriores não auditadas."
    },
    "unknownAxisReasons": {
      "pod": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "imi": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "dip": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "int": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "eco": "Não codificado: a revisão parcial do fac-símile não cobriu adequadamente as cláusulas e a composição efetiva da propriedade.",
      "com": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "rel": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "mor": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "tec": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação."
    },
    "identityOrigin": {
      "disposition": "new-historical-unit",
      "distinctness": "Estado socialista pós-guerra e carta de 1952; distinto da República de 1935 e da ordem atual de 1997."
    },
    "codingScope": "Regime da República Popular, 1952–1989; codificação da edição constitucional original de 1952"
  }
} as unknown as Record<string,ReferenceEntry>;

export const historicalCountryProvenance02Proposals={
  "russia-yeltsin": {
    "id": "russia-yeltsin",
    "kind": "country",
    "category": "historical-country",
    "name": "Rússia — presidência de Boris Yeltsin",
    "period": "Presidência Yeltsin, 1991–1999; recorte normativo: Constituição de 1993, sem certificação de toda a prática.",
    "vec": {
      "est": 50,
      "rep": 57,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 21,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Carta de 1993 prevê liberdade econômica, proteção de várias formas de propriedade e divisão independente dos poderes.",
    "caveats": "A leitura trata da carta de 1993, não de toda a presidência. Propriedade estatal e municipal também recebe proteção. A reprodução francesa não foi comparada integralmente com o original russo.",
    "sources": [
      {
        "title": "Constituição da Federação Russa de 1993 — texto histórico, Bucknell University",
        "url": "https://www.departments.bucknell.edu/russian/const/constit.html",
        "note": "Documento primário ou registro de arquivo relacionado ao período Transição pós-soviética, 1991–1999; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Office of the Historian — dissolution of the Soviet Union",
        "url": "https://history.state.gov/milestones/1989-1992/collapse-soviet-union",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      },
      {
        "title": "Constituição russa de 1993 — reprodução francesa da Universidade de Perpignan",
        "url": "https://mjp.univ-perp.fr/constit/ru1993.htm",
        "note": "Artigos 8–10 realmente lidos no texto indexado: concorrência, liberdade econômica, proteção de propriedade privada, estatal e municipal e poderes independentes. Reprodução nominal em francês; consulta direta indisponível."
      },
      {
        "title": "Presidência de Boris Yeltsin — Biblioteca Presidencial russa",
        "url": "https://www.prlib.ru/item/1880687",
        "note": "Registro institucional indexado de tratado de 1999 identifica a autoridade presidencial de Yeltsin como 1991–1999. É classificação arquivística, não leitura de uma biografia completa."
      }
    ],
    "evidence": {
      "rep": "medium",
      "con": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constituição da Federação Russa de 1993 — texto histórico, Bucknell University"
        ],
        "rationale": "Artigos 1 e 3 definem república democrática e eleições livres; documentam a regra formal, sem provar sua execução no governo Yeltsin."
      },
      "con": {
        "sourceTitles": [
          "Constituição da Federação Russa de 1993 — texto histórico, Bucknell University"
        ],
        "rationale": "Artigo 8 garante concorrência e liberdade de atividade econômica; ampara direção de coordenação por mercado, sem medir planejamento ou privatização efetivos."
      }
    }
  },
  "spain-franco": {
    "id": "spain-franco",
    "kind": "country",
    "category": "historical-country",
    "name": "Espanha — franquismo",
    "period": "Ditadura de Francisco Franco, 1939–1975; recorte normativo: princípios de 1958 consolidados em abril de 1967.",
    "vec": {
      "est": 50,
      "rep": 4,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 8,
      "mor": 9,
      "tec": 50
    },
    "rationale": "Princípios de 1958, consolidados em 1967, vinculam leis à doutrina católica e vedam outras organizações políticas.",
    "caveats": "O desenho de 1958 foi lido na consolidação de 1967. A representação orgânica e a religião oficial coexistem com propriedade privada, direitos sociais e liberdade religiosa sujeita a limites legais; isso não comprova execução.",
    "sources": [
      {
        "title": "Lei de Princípios do Movimento Nacional (1958)",
        "url": "https://www.boe.es/gazeta/dias/1958/05/19/pdfs/BOE-1958-119.pdf",
        "note": "Documento primário ou registro de arquivo relacionado ao período Ditadura de Francisco Franco, 1939–1975; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Congreso de los Diputados — franquismo",
        "url": "https://www.congreso.es/cem/franquismo",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      },
      {
        "title": "Princípios do Movimento Nacional de 1958, consolidados em 1967 — BOE",
        "url": "https://www.boe.es/buscar/doc.php?id=BOE-A-1967-40312&lang=es",
        "note": "Texto oficial consolidado pelo Decreto 779/1967, publicado em 21 de abril de 1967. Princípios I–XII e disposições finais lidos integralmente; também trechos do Fuero sobre direitos e religião."
      },
      {
        "title": "Ditadura de Franco e Cortes — Congresso espanhol",
        "url": "https://www.congreso.es/en/cem/cortesp",
        "note": "Abertura histórica institucional realmente lida por índice: regime instalado em abril de 1939, Franco na chefia do Estado até sua morte em 1975 e chefia do governo até 1973. Consulta direta indisponível."
      }
    ],
    "evidence": {
      "rep": "high",
      "rel": "medium",
      "mor": "high"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Lei de Princípios do Movimento Nacional (1958)",
          "Congreso de los Diputados — franquismo"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 4."
      },
      "rel": {
        "sourceTitles": [
          "Lei de Princípios do Movimento Nacional (1958)",
          "Congreso de los Diputados — franquismo"
        ],
        "rationale": "A carta ou fonte documenta laicidade, religião de Estado ou autoridade religiosa, sustentando 8."
      },
      "mor": {
        "sourceTitles": [
          "Lei de Princípios do Movimento Nacional (1958)",
          "Congreso de los Diputados — franquismo"
        ],
        "rationale": "A fonte registra extensão ou restrição de direitos e igualdade no período, sustentando 9."
      }
    }
  },
  "portugal-first-republic": {
    "id": "portugal-first-republic",
    "kind": "country",
    "category": "historical-country",
    "name": "Portugal — Primeira República",
    "period": "Primeira República, 1910–1926; recorte normativo: Constituição de 21 de agosto de 1911.",
    "vec": {
      "est": 50,
      "rep": 57,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 92,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Carta de 1911 prevê república unitária, liberdade de consciência e igualdade civil dos cultos, sob limites legais.",
    "caveats": "Liberdade religiosa fica sujeita à ordem pública e à moral. A separação de 20 de abril de 1911 é uma lei distinta: não atribuímos sua redação ao artigo 3 da Constituição. As garantias não comprovam prática eleitoral.",
    "sources": [
      {
        "title": "Constituição Política de 1911",
        "url": "https://www.parlamento.pt/Parlamento/Documents/Constituicao1911.pdf",
        "note": "Documento primário ou registro de arquivo relacionado ao período República parlamentar, 1910–1926; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Assembleia da República — história republicana",
        "url": "https://www.parlamento.pt/Parlamento/Paginas/Republica-Primeira.aspx",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      },
      {
        "title": "Constituição portuguesa de 21 de agosto de 1911 — Assembleia da República",
        "url": "https://www.parlamento.pt/parlamento/documents/crp-1911.pdf",
        "note": "Cabeçalho e artigos 1–2 e 3, itens 1–6, realmente lidos no texto oficial indexado. República unitária, consciência e igualdade dos cultos; o PDF direto não forneceu texto legível."
      },
      {
        "title": "Liberdade religiosa na Primeira República — Assembleia portuguesa",
        "url": "https://www.parlamento.pt/Parlamento/Paginas/liberdade-religiosa.aspx",
        "note": "Trecho histórico institucional indexado distingue proclamação em 1910, lei de separação de 20 de abril de 1911 e alterações posteriores das relações religiosas."
      },
      {
        "title": "Fim da Primeira República — Arquivo Histórico Parlamentar português",
        "url": "https://ahpweb.parlamento.pt/Detalhe/?id=50513&pesq=pa&q=AND__topic_type_id_9__50513_%3B&t=9",
        "note": "Biografia arquivística indexada afirma que o golpe militar de 28 de maio de 1926 encerrou a Primeira República."
      }
    ],
    "evidence": {
      "rep": "medium",
      "rel": "high"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constituição Política de 1911",
          "Assembleia da República — história republicana"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 57."
      },
      "rel": {
        "sourceTitles": [
          "Constituição Política de 1911",
          "Assembleia da República — história republicana"
        ],
        "rationale": "A carta ou fonte documenta laicidade, religião de Estado ou autoridade religiosa, sustentando 92."
      }
    }
  },
  "guatemala-military-governments-1954": {
    "id": "guatemala-military-governments-1954",
    "kind": "country",
    "category": "historical-country",
    "name": "Guatemala — governos militares e guerra civil",
    "period": "Ordem posterior ao golpe de 1954; recorte normativo: Constituição decretada em 2 de fevereiro de 1956, não todos os governos até 1996.",
    "vec": {
      "est": 50,
      "rep": 12,
      "pod": 85,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 2,
      "tec": 50
    },
    "rationale": "Carta de 1956 admite partidos democráticos registrados, mas proíbe organizações comunistas e outros sistemas totalitários.",
    "caveats": "A carta de 1956 é um recorte da ordem posterior ao golpe de 1954. O intervalo até a paz de 1996 inclui governos e transições distintos, não governos militares ininterruptos. Registro partidário e vedação comunista limitam a liberdade declarada.",
    "sources": [
      {
        "title": "Memoria del Silencio — Comisión para el Esclarecimiento Histórico",
        "url": "https://www.undp.org/guatemala/publications/guatemala-memoria-del-silencio",
        "note": "Fonte documental relacionada ao recorte Do golpe de 1954 aos acordos de paz, 1954–1996; sustenta somente os eixos apontados na justificativa específica."
      },
      {
        "title": "Constituição da Guatemala (1985)",
        "url": "https://www.constituteproject.org/constitution/Guatemala_1985",
        "note": "Fonte de arquivo, pesquisa histórica ou contexto institucional para delimitar o período e confrontar o texto normativo."
      },
      {
        "title": "Constituição guatemalteca de 1956 — reprodução documental da UNAM",
        "url": "https://archivos.juridicas.unam.mx/www/bjv/libros/5/2210/25.pdf",
        "note": "Título com data de 2 de fevereiro de 1956 e artigos 23–27 completos realmente lidos no documento indexado. Partidos democráticos registrados, proibição comunista e igualdade de tratamento estatal."
      },
      {
        "title": "Golpe e juntas guatemaltecas de 1954 — cronologia diplomática institucional",
        "url": "https://history.state.gov/countries/guatemala",
        "note": "Seções de 1954 realmente lidas por índice: derrubada em junho, junta em julho e reconhecimento diplomático. Usadas para cronologia, sem adotar avaliações políticas estrangeiras."
      },
      {
        "title": "Junta guatemalteca de junho de 1954 — decreto reproduzido no FRUS",
        "url": "https://history.state.gov/historicaldocuments/frus1952-54Guat/d256",
        "note": "Telegrama indexado reproduz decreto de 28 de junho de 1954 e registra a renúncia de Árbenz em 27 de junho. Reprodução nominal, sem autenticação do autógrafo."
      },
      {
        "title": "Acordos de paz guatemaltecos de dezembro de 1996 — Nações Unidas",
        "url": "https://peacemaker.un.org/sites/default/files/document/files/2024/05/gt961229agreementonfirmandlastingpeace28esp29.pdf",
        "note": "Seção indexada do acordo registra assinatura do cronograma em 29 de dezembro de 1996 e participação na reconciliação. Consulta direta indisponível; não foi lido o acordo completo."
      }
    ],
    "evidence": {
      "rep": "high",
      "pod": "medium",
      "mor": "high"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Memoria del Silencio — Comisión para el Esclarecimiento Histórico",
          "Constituição da Guatemala (1985)"
        ],
        "rationale": "A comissão documenta golpes, governos militares e eleições sob tutela durante grande parte do período."
      },
      "pod": {
        "sourceTitles": [
          "Memoria del Silencio — Comisión para el Esclarecimiento Histórico",
          "Constituição da Guatemala (1985)"
        ],
        "rationale": "Doutrinas de contrainsurgência e forças armadas exerceram coerção em nome da segurança estatal."
      },
      "mor": {
        "sourceTitles": [
          "Memoria del Silencio — Comisión para el Esclarecimiento Histórico",
          "Constituição da Guatemala (1985)"
        ],
        "rationale": "A comissão atribuiu graves violações a forças estatais, com impactos desproporcionais em comunidades maias."
      }
    }
  },
  "colombia-conservative-hegemony-1886": {
    "id": "colombia-conservative-hegemony-1886",
    "kind": "country",
    "category": "historical-country",
    "name": "Colômbia — Hegemonia Conservadora",
    "period": "Hegemonia conservadora, 1886–1930; recorte normativo: Constituição de 5 de agosto de 1886.",
    "vec": {
      "est": 18,
      "rep": 44,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 12,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Carta de 1886 reconstitui o país como república unitária, com soberania nacional e antigos estados como departamentos.",
    "caveats": "A leitura sustenta o desenho territorial de 1886. Não verificou diretamente o artigo religioso nem todas as reformas até 1930. A hegemonia partidária é contexto histórico distinto da redação constitucional.",
    "sources": [
      {
        "title": "Constituição Política da Colômbia (1886)",
        "url": "https://www.suin-juriscol.gov.co/viewDocument.asp?id=1826862",
        "note": "Fonte documental relacionada ao recorte Predomínio conservador sob a Constituição de 1886, 1886–1930; sustenta somente os eixos apontados na justificativa específica."
      },
      {
        "title": "Biblioteca Virtual del Banco de la República — República Conservadora",
        "url": "https://www.banrepcultural.org/biblioteca-virtual/credencial-historia/numero-182/la-republica-conservadora-1886-1930",
        "note": "Fonte de arquivo, pesquisa histórica ou contexto institucional para delimitar o período e confrontar o texto normativo."
      },
      {
        "title": "Constituição colombiana de 5 de agosto de 1886 — Función Pública",
        "url": "https://www1.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=7153",
        "note": "Título, preâmbulo e artigos 1–4 completos realmente lidos na página oficial indexada. República unitária, soberania nacional e antigos estados convertidos em departamentos."
      },
      {
        "title": "Hegemonia conservadora, 1886–1930 — Banco da República colombiano",
        "url": "https://publicaciones.banrepcultural.org/index.php/boletin_cultural/article/view/1134/0",
        "note": "Resumo completo do artigo histórico realmente lido por índice: vitória de Olaya em 9 de fevereiro de 1930 encerra o regime no poder desde 1886. O artigo completo não foi examinado."
      }
    ],
    "evidence": {
      "est": "high",
      "rep": "medium",
      "rel": "high"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Constituição Política da Colômbia (1886)",
          "Biblioteca Virtual del Banco de la República — República Conservadora"
        ],
        "rationale": "A constituição substituiu o federalismo radical por um Estado centralizado."
      },
      "rep": {
        "sourceTitles": [
          "Constituição Política da Colômbia (1886)",
          "Biblioteca Virtual del Banco de la República — República Conservadora"
        ],
        "rationale": "O sufrágio e a alternância eram limitados e a competição política foi restringida por períodos de exceção."
      },
      "rel": {
        "sourceTitles": [
          "Constituição Política da Colômbia (1886)",
          "Biblioteca Virtual del Banco de la República — República Conservadora"
        ],
        "rationale": "A carta restabeleceu relações privilegiadas entre a Igreja Católica e o Estado."
      }
    }
  },
  "czechoslovakia-first-republic-1918": {
    "id": "czechoslovakia-first-republic-1918",
    "kind": "country",
    "category": "historical-country",
    "name": "Tchecoslováquia — Primeira República",
    "period": "Primeira República, 1918–1938; recorte normativo: Carta Constitucional de 29 de fevereiro de 1920.",
    "vec": {
      "est": 18,
      "rep": 79,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Carta de 1920 prevê soberania popular e sufrágio igual, direto e secreto, em república com Parlamento bicameral.",
    "caveats": "A carta de 1920 declara direitos e eleições, sem comprovar sua execução. A unidade territorial admite autonomia legislativa específica da Rutênia Subcarpática; idade e cidadania condicionam o voto.",
    "sources": [
      {
        "title": "Constituição da Tchecoslováquia (1920)",
        "url": "https://www.constituteproject.org/constitution/Czechoslovakia_1920",
        "note": "Fonte documental relacionada ao recorte República parlamentar entre guerras, 1918–1938; sustenta somente os eixos apontados na justificativa específica."
      },
      {
        "title": "Czechoslovakia 1918–1938 — German History in Documents and Images",
        "url": "https://germanhistorydocs.org/en/weimar-germany-1918-1933/czechoslovakia-1918-1938",
        "note": "Fonte de arquivo, pesquisa histórica ou contexto institucional para delimitar o período e confrontar o texto normativo."
      },
      {
        "title": "Carta Constitucional tchecoslovaca de 29 de fevereiro de 1920 — Parlamento",
        "url": "https://www.psp.cz/docs/texts/constitution_1920.html",
        "note": "Cabeçalho e parágrafos 1–9 completos realmente lidos no texto parlamentar. Soberania popular, duas câmaras e sufrágio proporcional, igual, direto e secreto."
      },
      {
        "title": "Primeira República tchecoslovaca — classificação da Biblioteca Parlamentar",
        "url": "https://rapid.psp.cz/arl-par/cs/detail-par_us_cat-0170470-Prvni-republika-19181938/",
        "note": "Catálogo institucional classifica a Primeira República no período 1918–1938. O livro catalogado não foi lido; a prescrição política vem da carta de 1920."
      }
    ],
    "evidence": {
      "est": "high",
      "rep": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Constituição da Tchecoslováquia (1920)",
          "Czechoslovakia 1918–1938 — German History in Documents and Images"
        ],
        "rationale": "A constituição estabeleceu um Estado unitário centralizado; o valor fica no polo unitário apesar da diversidade nacional."
      },
      "rep": {
        "sourceTitles": [
          "Constituição da Tchecoslováquia (1920)",
          "Czechoslovakia 1918–1938 — German History in Documents and Images"
        ],
        "rationale": "Eleições multipartidárias e alternância ocorreram, embora minorias e o Executivo enfrentassem tensões."
      }
    }
  },
  "albania-hoxha-1946": {
    "id": "albania-hoxha-1946",
    "kind": "country",
    "category": "historical-country",
    "name": "Albânia — ordem comunista; fase de Hoxha",
    "period": "Ordem comunista, 1946–1991; Hoxha faleceu em 1985; recorte normativo: Constituição socialista de 28 de dezembro de 1976.",
    "vec": {
      "est": 50,
      "rep": 4,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 96,
      "con": 94,
      "com": 50,
      "rel": 95,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Carta de 1976 estabelece direção política exclusiva do Partido do Trabalho e um Estado que promove o ateísmo.",
    "caveats": "O intervalo 1946–1991 corresponde à ordem comunista mais ampla, não à vida de Hoxha, falecido em 1985. O título de República Popular Socialista e as prescrições lidas pertencem à carta de 1976. Direitos declarados não podem contrariar o socialismo.",
    "sources": [
      {
        "title": "Constituição da Albânia (1976)",
        "url": "https://www.constituteproject.org/constitution/Albania_1976",
        "note": "Fonte documental relacionada ao recorte República Popular Socialista, 1946–1991; sustenta somente os eixos apontados na justificativa específica."
      },
      {
        "title": "Albania — Library of Congress Country Studies",
        "url": "https://tile.loc.gov/storage-services/master/frd/frdcstdy/al/albaniacountryst00raym/albaniacountryst00raym.pdf",
        "note": "Fonte de arquivo, pesquisa histórica ou contexto institucional para delimitar o período e confrontar o texto normativo."
      },
      {
        "title": "Constituição albanesa de 28 de dezembro de 1976 — reprodução francesa universitária",
        "url": "https://mjp.univ-perp.fr/constit/al1976.htm",
        "note": "Artigos selecionados sobre direção exclusiva do Partido do Trabalho, ditadura proletária e propaganda ateísta realmente lidos no texto indexado; também garantias condicionadas e direitos de mulheres e minorias."
      },
      {
        "title": "Memória do período comunista albanês — OSCE",
        "url": "https://albania.osce.org/sites/default/files/f/documents/d/1/286821.pdf",
        "note": "Passagem indexada da página impressa 55 identifica 1985 como ano correto da morte de Hoxha. Usada apenas para esse limite biográfico, não como comprovação de políticas ou de todo o regime."
      }
    ],
    "evidence": {
      "rep": "high",
      "eco": "high",
      "con": "medium",
      "rel": "high"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constituição da Albânia (1976)",
          "Albania — Library of Congress Country Studies"
        ],
        "rationale": "A constituição confirmou poder exclusivo do Partido do Trabalho e vedou organizações concorrentes."
      },
      "eco": {
        "sourceTitles": [
          "Constituição da Albânia (1976)",
          "Albania — Library of Congress Country Studies"
        ],
        "rationale": "A carta proibiu propriedade privada de meios de produção e definiu economia socialista estatal."
      },
      "con": {
        "sourceTitles": [
          "Constituição da Albânia (1976)",
          "Albania — Library of Congress Country Studies"
        ],
        "rationale": "A economia foi organizada por planos centrais e coletivização."
      },
      "rel": {
        "sourceTitles": [
          "Constituição da Albânia (1976)",
          "Albania — Library of Congress Country Studies"
        ],
        "rationale": "O Estado declarou-se ateu e proibiu a prática religiosa organizada em 1967."
      }
    }
  },
  "romania-kingdom-1923": {
    "id": "romania-kingdom-1923",
    "kind": "country",
    "category": "historical-country",
    "name": "Romênia — monarquia constitucional",
    "period": "Monarquia sob a Constituição de 1923, 1923–1938; carta revogada em 27 de fevereiro de 1938.",
    "vec": {
      "est": 50,
      "rep": 57,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 38,
      "tec": 50
    },
    "rationale": "Carta de 1923 atribui legislação ao rei e a duas câmaras, poder executivo ao rei e funções judiciais a órgãos próprios.",
    "caveats": "O recorte constitucional termina em 1938, não em 1940. A restauração parcial de 1944 é outra fase. As competências formais do rei, das câmaras e da Justiça não comprovam competição eleitoral ou cidadania iguais.",
    "sources": [
      {
        "title": "Constituição da Romênia (1923)",
        "url": "https://www.constituteproject.org/constitution/Romania_1923",
        "note": "Fonte documental relacionada ao recorte Constituição liberal e monarquia, 1923–1940; sustenta somente os eixos apontados na justificativa específica."
      },
      {
        "title": "Romania 1866–1947 — Encyclopaedia Britannica",
        "url": "https://www.britannica.com/place/Romania/Romania-since-World-War-II",
        "note": "Fonte de arquivo, pesquisa histórica ou contexto institucional para delimitar o período e confrontar o texto normativo."
      },
      {
        "title": "Constituição romena de 1923 — Senado",
        "url": "https://www.senat.ro/pagini/constitutia/1923/constitutiunea_din_1923.htm",
        "note": "Artigos 33–41 completos realmente lidos: poderes nacionais delegados, legislação pelo rei e duas câmaras, Executivo real e órgãos judiciais próprios. A cronologia legislativa confirma revogação em 27 de fevereiro de 1938."
      },
      {
        "title": "Cronologia da Constituição romena de 1923 — legislação oficial",
        "url": "https://legislatie.just.ro/Public/FormaPrintabila/00000G1A9ZO80BUU8OZ1BWAWMJN9X63U",
        "note": "Nota histórica oficial realmente lida por índice: sanção em 28 e publicação em 29 de março de 1923; revogação em 27 de fevereiro de 1938; restauração parcial em 1944 e revogação final em 1947."
      },
      {
        "title": "Constituição romena de 1938 — legislação oficial",
        "url": "https://legislatie.just.ro/public/DetaliiDocument/14930",
        "note": "Cronologia oficial indexada registra a substituição da carta de 1923 em 27 de fevereiro de 1938; a carta de 1938 foi suspensa em setembro de 1940."
      }
    ],
    "evidence": {
      "rep": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constituição da Romênia (1923)",
          "Romania 1866–1947 — Encyclopaedia Britannica"
        ],
        "rationale": "A constituição previa sufrágio e parlamento, mas governos interferiam em eleições e direitos eram desiguais."
      },
      "mor": {
        "sourceTitles": [
          "Constituição da Romênia (1923)",
          "Romania 1866–1947 — Encyclopaedia Britannica"
        ],
        "rationale": "A cidadania formal coexistia com discriminação legal de minorias, especialmente judaicas, antes do regime autoritário de 1940."
      }
    }
  },
  "south-vietnam-1955": {
    "id": "south-vietnam-1955",
    "kind": "country",
    "category": "historical-country",
    "name": "República do Vietnã (Vietnã do Sul)",
    "period": "República do Vietnã, 1955–1975; recorte normativo: carta de 1967, com dia da reprodução ainda incerto.",
    "vec": {
      "est": 50,
      "rep": 28,
      "pod": 74,
      "imi": 50,
      "dip": 83,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Carta de 1967 prevê soberania popular e divisão dos poderes, mas proíbe atividades comunistas e impõe deveres militares.",
    "caveats": "A carta de 1967 não descreve a ordem original de Diệm nem todos os governos de 1955–1975. O cabeçalho extraído indica abril de 1967, com conflito entre dias 1 e 11 ainda não resolvido por inspeção do scan. Direitos coexistem com proibições e deveres militares.",
    "sources": [
      {
        "title": "Constituição da República do Vietnã (1967)",
        "url": "https://www.constituteproject.org/constitution/South_Vietnam_1967",
        "note": "Fonte documental relacionada ao recorte República de Ngô Đình Diệm e sucessores, 1955–1975; sustenta somente os eixos apontados na justificativa específica."
      },
      {
        "title": "Vietnam: A Country Study — Library of Congress",
        "url": "https://tile.loc.gov/storage-services/master/frd/frdcstdy/vi/vietnamcountryst00cima/vietnamcountryst00cima.pdf",
        "note": "Fonte de arquivo, pesquisa histórica ou contexto institucional para delimitar o período e confrontar o texto normativo."
      },
      {
        "title": "Constituição da República do Vietnã de 1967 — arquivo da Michigan State University",
        "url": "https://vietnamproject.archives.msu.edu/recordFiles/159-547-19/UA17-95_000284.pdf",
        "note": "Tradução inglesa do escritório do observador da República do Vietnã: preâmbulo e artigos 1–29 realmente lidos. Soberania popular, poderes separados, proibição comunista, direitos e deveres de defesa."
      },
      {
        "title": "República do Vietnã, 1955–1975 — cronologia diplomática institucional",
        "url": "https://history.state.gov/countries/vietnam",
        "note": "Seções relevantes realmente lidas: reorganização como República em 1955 e evacuação da embaixada dos EUA em 29 de abril de 1975, antes da rendição do Vietnã do Sul."
      }
    ],
    "evidence": {
      "rep": "medium",
      "pod": "medium",
      "dip": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constituição da República do Vietnã (1967)",
          "Vietnam: A Country Study — Library of Congress"
        ],
        "rationale": "A carta de 1967 previa instituições eleitorais, mas golpes e competição desigual limitaram a democracia do Estado em guerra."
      },
      "pod": {
        "sourceTitles": [
          "Constituição da República do Vietnã (1967)",
          "Vietnam: A Country Study — Library of Congress"
        ],
        "rationale": "Lei marcial, polícia e emergência tiveram papel central na segurança doméstica."
      },
      "dip": {
        "sourceTitles": [
          "Constituição da República do Vietnã (1967)",
          "Vietnam: A Country Study — Library of Congress"
        ],
        "rationale": "O governo foi fortemente militarizado e sustentado por intervenção externa durante a guerra."
      }
    }
  },
  "cambodia-sangkum-1955": {
    "id": "cambodia-sangkum-1955",
    "kind": "country",
    "category": "historical-country",
    "name": "Camboja — Sangkum Reastr Niyum",
    "period": "Ordem de Sihanouk e Sangkum, 1955–1970; recorte declaratório: carta de 23 de fevereiro de 1959, sem certificar realização das propostas.",
    "vec": {
      "est": 50,
      "rep": 37,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 70,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Em 1959, Sihanouk defende neutralidade e propõe eleições com oposição e observadores da ONU, mantendo defesa nacional.",
    "caveats": "A nova eleição descrita é proposta condicional, não realização comprovada. Sihanouk solicita intervenção diplomática dos EUA e meios de defesa; neutralidade não significa desarmamento. A assinatura é reproduzida, sem autenticação do autógrafo.",
    "sources": [
      {
        "title": "Constituição do Reino do Camboja (1953)",
        "url": "https://www.constituteproject.org/constitution/Cambodia_1953",
        "note": "Fonte documental relacionada ao recorte Governo de Norodom Sihanouk, 1955–1970; sustenta somente os eixos apontados na justificativa específica."
      },
      {
        "title": "Cambodia — Library of Congress Country Studies",
        "url": "https://tile.loc.gov/storage-services/master/frd/frdcstdy/ca/cambodiacountryst00ross/cambodiacountryst00ross.pdf",
        "note": "Fonte de arquivo, pesquisa histórica ou contexto institucional para delimitar o período e confrontar o texto normativo."
      },
      {
        "title": "Carta de Norodom Sihanouk a Eisenhower, 23 de fevereiro de 1959 — FRUS",
        "url": "https://history.state.gov/historicaldocuments/frus1958-60v16/d100",
        "note": "Carta nominal de Sihanouk lida integralmente, com data, assinatura reproduzida e nota documental. Neutralidade, defesa nacional e proposta condicional de eleições com oposição e observadores da ONU."
      },
      {
        "title": "Constituição cambojana de 1947 — reprodução universitária",
        "url": "https://mjp.univ-perp.fr/constit/kh1947.htm",
        "note": "Cabeçalho e nota histórica indexados distinguem a carta de 6 de maio de 1947, golpe de março de 1970 e república de outubro. Não autentica uma edição constitucional específica do Sangkum."
      },
      {
        "title": "Sangkum em setembro de 1955 — telegrama arquivado no FRUS",
        "url": "https://history.state.gov/historicaldocuments/frus1955-57v21/d219",
        "note": "Telegrama de 13 de setembro de 1955 realmente lido, relatando atividade eleitoral de Sihanouk e do Sangkum. A formação do governo ainda é futura no relato; não se certifica a apuração eleitoral."
      },
      {
        "title": "Queda de Sihanouk em 1970 — cronologia documental do FRUS",
        "url": "https://history.state.gov/historicaldocuments/frus1969-76v41/d329",
        "note": "Nota editorial institucional indexada registra a derrubada de Sihanouk por Lon Nol em 18 de março de 1970. Não foi examinado todo o memorando."
      }
    ],
    "evidence": {
      "rep": "medium",
      "int": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constituição do Reino do Camboja (1953)",
          "Cambodia — Library of Congress Country Studies"
        ],
        "rationale": "Sihanouk usou eleições e instituições formais, mas o movimento governista dominou competição e reprimiu adversários."
      },
      "int": {
        "sourceTitles": [
          "Constituição do Reino do Camboja (1953)",
          "Cambodia — Library of Congress Country Studies"
        ],
        "rationale": "A neutralidade formal e o não alinhamento foram princípios declarados, pressionados pela Guerra do Vietnã."
      }
    }
  },
  "afghanistan-pdpa-1978": {
    "id": "afghanistan-pdpa-1978",
    "kind": "country",
    "category": "historical-country",
    "name": "Afeganistão — governo do PDPA",
    "period": "Ordem do PDPA; recorte normativo: carta adotada em novembro de 1987, reproduzida com capa 1988; fases anteriores distintas.",
    "vec": {
      "est": 50,
      "rep": 8,
      "pod": 50,
      "imi": 50,
      "dip": 88,
      "int": 50,
      "eco": 78,
      "con": 73,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Carta de 1987 prevê soberania popular e partidos condicionados à Constituição, sob princípios islâmicos e não alinhamento.",
    "caveats": "A capa de 1988 diverge da adoção de novembro de 1987 declarada no decreto, que não tem data própria. Esta fase de reconciliação não descreve toda a ordem iniciada em 1978. Partidos ficam sujeitos à Constituição e às leis; a defesa armada permanece prevista.",
    "sources": [
      {
        "title": "Constituição do Afeganistão (1987)",
        "url": "https://www.constituteproject.org/constitution/Afghanistan_1987",
        "note": "Fonte documental relacionada ao recorte República Democrática e República do Afeganistão, 1978–1992; sustenta somente os eixos apontados na justificativa específica."
      },
      {
        "title": "Afghanistan — Library of Congress Country Studies",
        "url": "https://tile.loc.gov/storage-services/master/frd/frdcstdy/af/afghanistancountr00rubi/afghanistancountr00rubi.pdf",
        "note": "Fonte de arquivo, pesquisa histórica ou contexto institucional para delimitar o período e confrontar o texto normativo."
      },
      {
        "title": "Constituição afegã de 1987 — reprodução documental em inglês",
        "url": "https://constitutionnet.org/sites/default/files/Afghanistan%20Constitution_1987-1366_ET.pdf",
        "note": "Decreto, preâmbulo e artigos 1–6 realmente lidos, além de trechos econômicos: adoção em novembro de 1987, soberania popular, partidos condicionados, princípios islâmicos e não alinhamento. A capa traz 1988."
      },
      {
        "title": "Constituição afegã de 1987 — reprodução das Nações Unidas",
        "url": "https://peacemaker.un.org/sites/default/files/document/files/2022/07/aflgafghanistanconstitutionenglish1987.pdf",
        "note": "Artigos 1–6 completos realmente lidos por índice. A consulta direta falhou; a versão documental em inglês foi depois examinada na reprodução do ConstitutionNet."
      }
    ],
    "evidence": {
      "rep": "medium",
      "eco": "medium",
      "con": "medium",
      "dip": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constituição do Afeganistão (1987)",
          "Afghanistan — Library of Congress Country Studies"
        ],
        "rationale": "O PDPA governou sem competição pluralista efetiva e reprimiu adversários."
      },
      "eco": {
        "sourceTitles": [
          "Constituição do Afeganistão (1987)",
          "Afghanistan — Library of Congress Country Studies"
        ],
        "rationale": "Reformas de terras e propriedade pública expandiram o papel estatal, embora sua implementação fosse limitada."
      },
      "con": {
        "sourceTitles": [
          "Constituição do Afeganistão (1987)",
          "Afghanistan — Library of Congress Country Studies"
        ],
        "rationale": "O governo lançou programas de planejamento central e transformação rural."
      },
      "dip": {
        "sourceTitles": [
          "Constituição do Afeganistão (1987)",
          "Afghanistan — Library of Congress Country Studies"
        ],
        "rationale": "A intervenção militar soviética de 1979 e a presença até 1989 documentam militarização externa."
      }
    }
  },
  "nepal-panchayat-1962": {
    "id": "nepal-panchayat-1962",
    "kind": "country",
    "category": "historical-country",
    "name": "Nepal — sistema Panchayat",
    "period": "Monarquia Panchayat; recorte normativo: Constituição de 1962 com primeira emenda, incluindo cláusula vigente em 1968.",
    "vec": {
      "est": 18,
      "rep": 18,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 20,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Texto Panchayat, com a primeira emenda, concentra soberania no rei hindu e proíbe partidos, apesar de prever direitos individuais.",
    "caveats": "O texto inclui a primeira emenda e uma cláusula vigente em 1968. A proibição partidária e a soberania real coexistem com direitos sujeitos a limites e diretrizes não exigíveis judicialmente. O ano de 1962 identifica a carta, não o início de todas as instituições Panchayat.",
    "sources": [
      {
        "title": "Constituição do Nepal (1962)",
        "url": "https://www.constituteproject.org/constitution/Nepal_1962",
        "note": "Fonte documental relacionada ao recorte Monarquia sem partidos, 1962–1990; sustenta somente os eixos apontados na justificativa específica."
      },
      {
        "title": "Nepal — Library of Congress Country Studies",
        "url": "https://tile.loc.gov/storage-services/master/frd/frdcstdy/ne/nepalcountrystud00sava/nepalcountrystud00sava.pdf",
        "note": "Fonte de arquivo, pesquisa histórica ou contexto institucional para delimitar o período e confrontar o texto normativo."
      },
      {
        "title": "Constituição Panchayat de 1962 com primeira emenda — reprodução documental",
        "url": "https://constitutionnet.org/sites/default/files/constitution_1962.pdf",
        "note": "Artigos sobre direitos, proibição de partidos e soberania do rei hindu realmente lidos, com notas de primeira emenda e cláusula cuja vigência começa em 1968. Não é a edição original sem emendas."
      },
      {
        "title": "História parlamentar do Nepal — Assembleia Nacional",
        "url": "https://na.parliament.gov.np/uploads/attachments/mxgnirmhtqpgdvhw.pdf",
        "note": "Parágrafo histórico institucional indexado distingue ruptura de 1960, Panchayat sem partidos em 1961 e restauração multipartidária pela Constituição de 1990. Não foi lido o documento completo."
      }
    ],
    "evidence": {
      "rep": "high",
      "est": "medium",
      "rel": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constituição do Nepal (1962)",
          "Nepal — Library of Congress Country Studies"
        ],
        "rationale": "A carta baniu partidos e concentrou autoridade no rei, embora incluísse conselhos eletivos controlados."
      },
      "est": {
        "sourceTitles": [
          "Constituição do Nepal (1962)",
          "Nepal — Library of Congress Country Studies"
        ],
        "rationale": "O Estado permaneceu unitário e centralizado sob a monarquia."
      },
      "rel": {
        "sourceTitles": [
          "Constituição do Nepal (1962)",
          "Nepal — Library of Congress Country Studies"
        ],
        "rationale": "A constituição definiu o Nepal como reino hindu."
      }
    }
  },
  "sri-lanka-executive-presidency-1978": {
    "id": "sri-lanka-executive-presidency-1978",
    "kind": "country",
    "category": "historical-country",
    "name": "Sri Lanka — presidência durante a guerra civil",
    "period": "Fase da guerra civil, 1983–2009; quadro constitucional de 1978 com emendas; o fim do conflito não encerra a Constituição nem a presidência executiva.",
    "vec": {
      "est": 50,
      "rep": 54,
      "pod": 73,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 28,
      "mor": 30,
      "tec": 50
    },
    "rationale": "Texto de 1978 prevê soberania popular e poder executivo presidencial, em Estado unitário que dá primazia ao budismo.",
    "caveats": "O recorte histórico é a guerra civil de 1983–2009, não a duração da presidência executiva. A carta de 1978 é o quadro normativo herdado, com marcas de emendas no arquivo. Notificações de emergência incluem suspensão e retomada em 1989 e alívio parcial em 1994; medidas persistiram após 2009 e cessaram em agosto de 2011, segundo aviso de 2015. Não se presume a mesma política em todo o intervalo.",
    "sources": [
      {
        "title": "Constituição do Sri Lanka (1978)",
        "url": "https://www.parliament.lk/files/pdf/constitution.pdf",
        "note": "Fonte documental relacionada ao recorte Constituição de 1978 e guerra civil, 1978–2009; sustenta somente os eixos apontados na justificativa específica."
      },
      {
        "title": "Report of the Lessons Learnt and Reconciliation Commission",
        "url": "https://www.mfa.gov.lk/llrc-report/",
        "note": "Fonte de arquivo, pesquisa histórica ou contexto institucional para delimitar o período e confrontar o texto normativo."
      },
      {
        "title": "Constituição de Sri Lanka de 1978 — Parlamento",
        "url": "https://www.parliament.lk/files/pdf/constitution/1978ConstitutionWithoutAmendments.pdf",
        "note": "Data de 7 de setembro de 1978 e artigos 1–10 completos realmente lidos, com trechos de direitos. O arquivo apresentado como original contém marcas de primeira e segunda emendas."
      },
      {
        "title": "Presidência executiva de Sri Lanka — documento parlamentar",
        "url": "https://www.parliament.lk/uploads/documents/paperspresented/1676277008025753.pdf",
        "note": "Introdução institucional indexada reproduz o artigo 30 e distingue posse presidencial em fevereiro de 1978, sob a carta anterior emendada, da nova Constituição de setembro de 1978."
      },
      {
        "title": "Notificações de emergência de Sri Lanka — depositário das Nações Unidas",
        "url": "https://treaties.un.org/pages/Declarations.aspx?chapter=4&index=Sri+Lanka&lang=_en&treaty=335",
        "note": "Notificações oficiais realmente lidas, de 1983 a 2015. Declarações podem ser abreviadas pelo depositário. Registram derrogações, interrupções em 1989, alívio parcial em 1994, fim do conflito em maio de 2009 e medidas ainda vigentes em 2010; aviso de 2015 informa cessação em agosto de 2011. Avaliações governamentais sobre operações não são certificadas."
      },
      {
        "title": "Conflito de Sri Lanka, 1983–2009 — relatório do Alto Comissariado de 2024",
        "url": "https://www.ohchr.org/sites/default/files/documents/hrbodies/hrcouncil/sri-lanka/report-accountability-enforced-disappearances-sri-lanka-may2024-en.pdf",
        "note": "Parágrafo completo realmente lido no texto oficial indexado identifica o conflito de 26 anos, 1983–2009. A consulta direta retornou acesso negado; não foi examinado todo o relatório nem suas alegações de violações."
      }
    ],
    "evidence": {
      "rep": "medium",
      "pod": "medium",
      "rel": "high",
      "mor": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constituição do Sri Lanka (1978)",
          "Report of the Lessons Learnt and Reconciliation Commission"
        ],
        "rationale": "A carta instaurou uma presidência executiva e manteve eleições competitivas, mas o período de guerra incluiu suspensões e abusos."
      },
      "pod": {
        "sourceTitles": [
          "Constituição do Sri Lanka (1978)",
          "Report of the Lessons Learnt and Reconciliation Commission"
        ],
        "rationale": "A guerra civil ampliou poderes de segurança e medidas de emergência."
      },
      "rel": {
        "sourceTitles": [
          "Constituição do Sri Lanka (1978)",
          "Report of the Lessons Learnt and Reconciliation Commission"
        ],
        "rationale": "A constituição confere ao budismo posição de primazia, embora proteja outras religiões."
      },
      "mor": {
        "sourceTitles": [
          "Constituição do Sri Lanka (1978)",
          "Report of the Lessons Learnt and Reconciliation Commission"
        ],
        "rationale": "A guerra e as políticas linguísticas produziram desigualdades e violações documentadas."
      }
    }
  },
  "poland-april-charter-1935": {
    "id": "poland-april-charter-1935",
    "name": "Polônia — República sob a Constituição de Abril",
    "aliases": [
      "Segunda República Polonesa — carta de abril de 1935"
    ],
    "period": "Ordem constitucional anterior à ocupação; recorte normativo: capítulo I da Carta de Abril de 1935.",
    "rationale": "Carta de 1935 concentra o poder estatal no presidente e subordina órgãos nacionais à sua autoridade, com liberdades condicionadas.",
    "caveats": "A leitura cobre o capítulo I da carta de 1935, não toda a prática anterior à ocupação. Liberdades de consciência, expressão e associação permanecem declaradas sob limites. O corte territorial de 1939 não é tratado como revogação da carta, relevante no exílio.",
    "sources": [
      {
        "title": "Ustawa konstytucyjna, 23 kwietnia 1935 — Sejm",
        "url": "https://api.sejm.gov.pl/eli/acts/DU/1935/227/text.pdf",
        "note": "Fac-símile original oficial: Lei Constitucional de 23 de abril, publicada em 24 de abril de 1935, Diário de Leis nº 30, posição 227."
      },
      {
        "title": "Carta de Abril de 1935 — Biblioteca do Sejm",
        "url": "https://libr.sejm.gov.pl/tek01/txt/kpol/1935-r1.html",
        "note": "Capítulo I, artigos 1–10 completos, realmente lido no texto oficial: autoridade presidencial indivisível, órgãos nacionais subordinados e liberdades condicionadas ao bem comum."
      }
    ],
    "kind": "country",
    "category": "historical-country",
    "vec": {
      "est": 50,
      "rep": 40,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "rep": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Ustawa konstytucyjna, 23 kwietnia 1935 — Sejm"
        ],
        "rationale": "Concentração presidencial com representação e controles condicionados sustenta direção autocrática moderada, sem equiparar o arranjo a ausência completa de eleições. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não certifica eleições livres, a prática do movimento sanacja ou a intensidade da coerção. O sufrágio formal de ambos os sexos e o procedimento de controle são contrapontos relevantes."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-second",
        "confidence": "medium",
        "relatedQuestionIds": [
          "representacao_15"
        ],
        "claims": [
          {
            "sourceTitle": "Ustawa konstytucyjna, 23 kwietnia 1935 — Sejm",
            "locator": "Art. 2–3, 12–15, 28–29 e 31–33",
            "statement": "Autoridade suprema indivisível cabe ao Presidente, que nomeia governo e dissolve câmaras. O Sejm é eletivo, legisla, controla orçamento e pode exigir demissão do governo sob procedimento condicionado.",
            "basis": "norm",
            "publishedDate": "1935-04-23",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Concentração presidencial com representação e controles condicionados sustenta direção autocrática moderada, sem equiparar o arranjo a ausência completa de eleições.",
        "uncertainty": "Não certifica eleições livres, a prática do movimento sanacja ou a intensidade da coerção. O sufrágio formal de ambos os sexos e o procedimento de controle são contrapontos relevantes.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      }
    },
    "documentaryReview": {
      "status": "author-reviewed-bounded-claims",
      "reviewedOn": "2026-10-07",
      "independentReview": "pending",
      "scope": "Apenas distribuição constitucional de poder da edição de 1935 codificada."
    },
    "unknownAxisReasons": {
      "est": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "pod": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "imi": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "dip": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "int": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "eco": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "con": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "com": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "rel": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "mor": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "tec": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação."
    },
    "identityOrigin": {
      "disposition": "new-historical-unit",
      "distinctness": "Mudança material para supremacia presidencial na carta de abril; não é alias de uma administração."
    },
    "codingScope": "Ordem territorial anterior à ocupação, 1935–1939; desenho original de abril de 1935"
  },
  "poland-peoples-republic-1952": {
    "id": "poland-peoples-republic-1952",
    "name": "Polônia — República Popular",
    "aliases": [
      "Polska Rzeczpospolita Ludowa",
      "PRL"
    ],
    "period": "República Popular, 1952–1989; recorte normativo: edição original de 22 de julho de 1952, distinta de emendas posteriores.",
    "rationale": "Carta de 1952 organiza economia planejada e propriedade social, mantendo proteção a bens pessoais e pequenas propriedades.",
    "caveats": "O desenho original de 1952 combina planejamento e propriedade social com proteção de bens pessoais, pequenas propriedades e cooperativas voluntárias. Voto e revogação são garantias declaradas, não competição comprovada. Emendas posteriores e a transição de 1989 são fases distintas.",
    "sources": [
      {
        "title": "Konstytucja Polskiej Rzeczypospolitej Ludowej, 22 lipca 1952 — Sejm",
        "url": "https://api.sejm.gov.pl/eli/acts/DU/1952/232/text.pdf",
        "note": "Fac-símile da promulgação original, Diário de Leis nº 33, posição 232; artigos 3, 19, 27, 32 e 34–37."
      },
      {
        "title": "Brief History of Poland — Institute of National Remembrance",
        "url": "https://eng.ipn.gov.pl/en/brief-history-of-poland",
        "note": "Retrospectiva do arquivo nacional: controle político, repressão, Solidarność e transição de 1989; não é o texto constitucional contemporâneo."
      },
      {
        "title": "Constituição da República Popular da Polônia de 1952 — transcrição documental",
        "url": "https://pl.wikisource.org/wiki/Konstytucja_Polskiej_Rzeczypospolitej_Ludowej_(1952)",
        "note": "Reprodução nominal da edição de 22 de julho de 1952, Diário de Leis 33, posição 232. Cabeçalho, preâmbulo, artigos 1–13 e 19 realmente lidos. A transcrição de 1976 é distinta; o scan oficial não foi autenticado visualmente."
      },
      {
        "title": "Transformação constitucional polonesa de dezembro de 1989 — IPN",
        "url": "https://ipn.gov.pl/pl/historia-z-ipn/235514,Irena-Siwinska-Zeby-Polska-byla-Polska-Nowela-grudniowa-1989-r.html",
        "note": "Relato histórico institucional realmente lido: emenda de 29 de dezembro de 1989 restaura o nome República da Polônia e modifica fundamentos políticos e econômicos. Disposições partidárias de 1976 são posteriores ao original de 1952."
      }
    ],
    "kind": "country",
    "category": "historical-country",
    "vec": {
      "est": 40,
      "rep": 20,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 80,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "con": "high",
      "est": "medium",
      "rep": "medium"
    },
    "axisEvidence": {
      "con": {
        "sourceTitles": [
          "Konstytucja Polskiej Rzeczypospolitej Ludowej, 22 lipca 1952 — Sejm"
        ],
        "rationale": "Obrigação de planos nacionais e atribuições executivas expressas sustentam planejamento forte no desenho de 1952. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: A carta não mede execução, eficiência ou proporção da economia efetivamente planejada; não certifica todas as emendas posteriores."
      },
      "est": {
        "sourceTitles": [
          "Konstytucja Polskiej Rzeczypospolitej Ludowej, 22 lipca 1952 — Sejm"
        ],
        "rationale": "Subordinação territorial à direção nacional sustenta orientação unitária moderada, preservando competências locais declaradas. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Conselhos eleitos são contraponto; não quantificamos autonomia administrativa efetiva nem supomos que todo órgão local fosse destituído de poder."
      },
      "rep": {
        "sourceTitles": [
          "Brief History of Poland — Institute of National Remembrance",
          "Konstytucja Polskiej Rzeczypospolitej Ludowej, 22 lipca 1952 — Sejm"
        ],
        "rationale": "Restrição da oposição e contraste eleitoral explícito entre a PRL e a transição sustentam direção autocrática do regime anterior a 1989, confrontada com as promessas formais. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Âncora de regime, não medida anual de competição: liberalizações, Solidarność e a eleição parcialmente livre de 1989 são rupturas. A cronologia não valida cada pleito nem demonstra sozinha todos os mecanismos do monopólio partidário."
      }
    },
    "coding": {
      "con": {
        "axis": "con",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Konstytucja Polskiej Rzeczypospolitej Ludowej, 22 lipca 1952 — Sejm",
            "locator": "Art. 3(3), 19(3) e 32(3–4); páginas impressas 347, 352 e 356",
            "statement": "O Estado dirige a economia planejada; o Sejm aprova planos plurianuais e o governo elabora planos, adota os anuais e assegura sua execução.",
            "basis": "norm",
            "publishedDate": "1952-07-22",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Obrigação de planos nacionais e atribuições executivas expressas sustentam planejamento forte no desenho de 1952.",
        "uncertainty": "A carta não mede execução, eficiência ou proporção da economia efetivamente planejada; não certifica todas as emendas posteriores.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "est": {
        "axis": "est",
        "position": "moderate-second",
        "confidence": "medium",
        "relatedQuestionIds": [
          "estrutura_01",
          "estrutura_05"
        ],
        "claims": [
          {
            "sourceTitle": "Konstytucja Polskiej Rzeczypospolitej Ludowej, 22 lipca 1952 — Sejm",
            "locator": "Art. 27(6), 32(9) e 34–37; páginas impressas 354, 356–357",
            "statement": "Órgãos nacionais supervisionam os conselhos territoriais e dirigem seus presidia; conselhos eleitos atendem necessidades locais vinculadas às tarefas nacionais.",
            "basis": "norm",
            "publishedDate": "1952-07-22",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Subordinação territorial à direção nacional sustenta orientação unitária moderada, preservando competências locais declaradas.",
        "uncertainty": "Conselhos eleitos são contraponto; não quantificamos autonomia administrativa efetiva nem supomos que todo órgão local fosse destituído de poder.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "rep": {
        "axis": "rep",
        "position": "strong-second",
        "confidence": "medium",
        "relatedQuestionIds": [
          "representacao_01",
          "representacao_15"
        ],
        "claims": [
          {
            "sourceTitle": "Brief History of Poland — Institute of National Remembrance",
            "locator": "Cronologia: 1981, 1989 e 1991",
            "statement": "O IPN registra prisões da oposição em 1981, primeira eleição parlamentar parcialmente democrática em 1989 e primeiro pleito parlamentar livre pós-guerra em 1991.",
            "basis": "practice",
            "publishedDate": "Publicação institucional sem data indicada; retrospectiva do século XX",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Konstytucja Polskiej Rzeczypospolitej Ludowej, 22 lipca 1952 — Sejm",
            "locator": "Art. 1–2; página impressa 347",
            "statement": "A carta promete exercício popular por representantes eleitos e votação universal, igual, direta e secreta.",
            "basis": "norm",
            "publishedDate": "1952-07-22",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Restrição da oposição e contraste eleitoral explícito entre a PRL e a transição sustentam direção autocrática do regime anterior a 1989, confrontada com as promessas formais.",
        "uncertainty": "Âncora de regime, não medida anual de competição: liberalizações, Solidarność e a eleição parcialmente livre de 1989 são rupturas. A cronologia não valida cada pleito nem demonstra sozinha todos os mecanismos do monopólio partidário.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 20,
        "range": [
          10,
          25
        ]
      }
    },
    "documentaryReview": {
      "status": "author-reviewed-bounded-claims",
      "reviewedOn": "2026-10-07",
      "independentReview": "pending",
      "scope": "Fac-símile original de 1952 e cronologia institucional examinados; emendas posteriores não auditadas."
    },
    "unknownAxisReasons": {
      "pod": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "imi": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "dip": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "int": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "eco": "Não codificado: a revisão parcial do fac-símile não cobriu adequadamente as cláusulas e a composição efetiva da propriedade.",
      "com": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "rel": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "mor": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "tec": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação."
    },
    "identityOrigin": {
      "disposition": "new-historical-unit",
      "distinctness": "Estado socialista pós-guerra e carta de 1952; distinto da República de 1935 e da ordem atual de 1997."
    },
    "codingScope": "Regime da República Popular, 1952–1989; codificação da edição constitucional original de 1952"
  }
} as unknown as Record<string,ReferenceEntry>;

export function reconcileHistoricalCountryProvenance02(entry:ReferenceEntry):ReferenceEntry {
 const before=historicalCountryProvenance02Before[entry.id], after=historicalCountryProvenance02Proposals[entry.id];
 if(!before || JSON.stringify(entry)!==JSON.stringify(before))return entry;
 return after;
}
