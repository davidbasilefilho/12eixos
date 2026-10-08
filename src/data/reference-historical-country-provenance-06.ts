import type {ReferenceEntry} from './references';

// Complete literal prior and accepted post records; no score or coding changes.
export const historicalCountryProvenance06Before = {
  "greece-military-junta": {
    "id": "greece-military-junta",
    "kind": "country",
    "category": "historical-country",
    "name": "Grécia — Junta dos Coronéis",
    "period": "Ditadura militar, 1967–1974",
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
      "rel": 50,
      "mor": 12,
      "tec": 50
    },
    "rationale": "Golpe militar aboliu competição e reprimiu opositores.",
    "caveats": "Recorte institucional datado; não representa a população, povos subordinados nem governos fora do período. A constituição formal não descreve a aplicação autoritária. Eixos sem evidência suficiente permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "Constituição de 1968 (junta)",
        "url": "https://www.constituteproject.org/constitution/Greece_1968",
        "note": "Documento primário ou registro de arquivo relacionado ao período Ditadura militar, 1967–1974; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Parlamento Helênico — história política",
        "url": "https://www.hellenicparliament.gr/en/organisation-and-operation/history/",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      }
    ],
    "evidence": {
      "rep": "high",
      "mor": "high"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constituição de 1968 (junta)",
          "Parlamento Helênico — história política"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 4."
      },
      "mor": {
        "sourceTitles": [
          "Constituição de 1968 (junta)",
          "Parlamento Helênico — história política"
        ],
        "rationale": "A fonte registra extensão ou restrição de direitos e igualdade no período, sustentando 12."
      }
    }
  },
  "ottoman-tanzimat": {
    "id": "ottoman-tanzimat",
    "kind": "country",
    "category": "historical-country",
    "name": "Império Otomano — Tanzimat e Primeira Era Constitucional",
    "period": "Reformas imperiais, 1839–1878",
    "vec": {
      "est": 50,
      "rep": 36,
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
    "rationale": "Édito prometeu garantias legais e reorganização de administração imperial.",
    "caveats": "Recorte institucional datado; não representa a população, povos subordinados nem governos fora do período. Não estabeleceu democracia ampla nem igualdade efetiva; império era multiétnico. Eixos sem evidência suficiente permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "Édito de Gülhane (1839)",
        "url": "https://www.britannica.com/event/Tanzimat",
        "note": "Documento primário ou registro de arquivo relacionado ao período Reformas imperiais, 1839–1878; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Ottoman History Podcast — documentos do período",
        "url": "https://ottomanhistorypodcast.com/",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      }
    ],
    "evidence": {
      "rep": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Édito de Gülhane (1839)",
          "Ottoman History Podcast — documentos do período"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 36."
      }
    }
  },
  "british-raj": {
    "id": "british-raj",
    "kind": "country",
    "category": "historical-country",
    "name": "Índia britânica — Raj",
    "period": "Administração colonial da Coroa, 1858–1947",
    "vec": {
      "est": 31,
      "rep": 8,
      "pod": 50,
      "imi": 83,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 18,
      "tec": 50
    },
    "rationale": "Governo colonial não eleito manteve domínio imperial e sufrágio restrito.",
    "caveats": "Recorte institucional datado; não representa a população, povos subordinados nem governos fora do período. A administração abrangeu governos diversos por décadas; não representa a sociedade indiana. Eixos sem evidência suficiente permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "Government of India Act 1935",
        "url": "https://www.legislation.gov.uk/ukpga/Geo5/26-27/2/contents/enacted",
        "note": "Documento primário ou registro de arquivo relacionado ao período Administração colonial da Coroa, 1858–1947; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "UK Parliament — Government of India Act",
        "url": "https://www.parliament.uk/about/living-heritage/evolutionofparliament/legislativescrutiny/parliament-and-india/collections1/collections-govtindia/",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      }
    ],
    "evidence": {
      "est": "medium",
      "rep": "high",
      "imi": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Government of India Act 1935",
          "UK Parliament — Government of India Act"
        ],
        "rationale": "A carta constitucional descreve a distribuição territorial de poder, sustentando a posição unitária/centralizada codificada."
      },
      "rep": {
        "sourceTitles": [
          "Government of India Act 1935",
          "UK Parliament — Government of India Act"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 8."
      },
      "imi": {
        "sourceTitles": [
          "Government of India Act 1935",
          "UK Parliament — Government of India Act"
        ],
        "rationale": "A fonte registra regra ou política explícita de assimilação e pertencimento, sustentando 83."
      },
      "mor": {
        "sourceTitles": [
          "Government of India Act 1935",
          "UK Parliament — Government of India Act"
        ],
        "rationale": "A fonte registra extensão ou restrição de direitos e igualdade no período, sustentando 18."
      }
    }
  },
  "pakistan-zia": {
    "id": "pakistan-zia",
    "kind": "country",
    "category": "historical-country",
    "name": "Paquistão — governo de Zia-ul-Haq",
    "period": "Regime militar e islamização, 1977–1988",
    "vec": {
      "est": 50,
      "rep": 7,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 12,
      "mor": 15,
      "tec": 50
    },
    "rationale": "Golpe suspendeu competição civil e alterou instituições sob islamização legal.",
    "caveats": "Recorte institucional datado; não representa a população, povos subordinados nem governos fora do período. Guerra afegã e política religiosa não representam toda a população. Eixos sem evidência suficiente permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "Ordem Constitucional Provisória (1981)",
        "url": "https://www.pakistani.org/pakistan/constitution/post_1977/pc_19810324.html",
        "note": "Documento primário ou registro de arquivo relacionado ao período Regime militar e islamização, 1977–1988; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "National Assembly of Pakistan — história",
        "url": "https://na.gov.pk/en/content.php?id=75",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      }
    ],
    "evidence": {
      "rep": "high",
      "rel": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Ordem Constitucional Provisória (1981)",
          "National Assembly of Pakistan — história"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 7."
      },
      "rel": {
        "sourceTitles": [
          "Ordem Constitucional Provisória (1981)",
          "National Assembly of Pakistan — história"
        ],
        "rationale": "A carta ou fonte documenta laicidade, religião de Estado ou autoridade religiosa, sustentando 12."
      },
      "mor": {
        "sourceTitles": [
          "Ordem Constitucional Provisória (1981)",
          "National Assembly of Pakistan — história"
        ],
        "rationale": "A fonte registra extensão ou restrição de direitos e igualdade no período, sustentando 15."
      }
    }
  },
  "bangladesh-mujib": {
    "id": "bangladesh-mujib",
    "kind": "country",
    "category": "historical-country",
    "name": "Bangladesh — governo de Sheikh Mujibur Rahman",
    "period": "Primeira república, 1972–1975",
    "vec": {
      "est": 50,
      "rep": 52,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 72,
      "con": 75,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Constituição fundou república parlamentar e princípios socialistas, depois alterada em 1975.",
    "caveats": "Recorte institucional datado; não representa a população, povos subordinados nem governos fora do período. Inclui crise política, fome e mudança constitucional. Eixos sem evidência suficiente permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "Constituição de Bangladesh (1972)",
        "url": "https://bdlaws.minlaw.gov.bd/act-367.html",
        "note": "Documento primário ou registro de arquivo relacionado ao período Primeira república, 1972–1975; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Banglapedia — Sheikh Mujibur Rahman",
        "url": "https://en.banglapedia.org/index.php/Sheikh_Mujibur_Rahman",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      }
    ],
    "evidence": {
      "rep": "medium",
      "eco": "medium",
      "con": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constituição de Bangladesh (1972)",
          "Banglapedia — Sheikh Mujibur Rahman"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 52."
      },
      "eco": {
        "sourceTitles": [
          "Constituição de Bangladesh (1972)",
          "Banglapedia — Sheikh Mujibur Rahman"
        ],
        "rationale": "O documento descreve extensão de propriedade pública, provisão ou coordenação estatal, sustentando 72."
      },
      "con": {
        "sourceTitles": [
          "Constituição de Bangladesh (1972)",
          "Banglapedia — Sheikh Mujibur Rahman"
        ],
        "rationale": "A fonte documenta direção estatal da economia ou coordenação por mercado, sustentando 75."
      }
    }
  },
  "iran-pahlavi": {
    "id": "iran-pahlavi",
    "kind": "country",
    "category": "historical-country",
    "name": "Irã — Estado Pahlavi",
    "period": "Monarquia, 1925–1979",
    "vec": {
      "est": 50,
      "rep": 23,
      "pod": 50,
      "imi": 65,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 45,
      "tec": 50
    },
    "rationale": "Monarquia centralizou o Estado e promoveu modernização social e tecnológica dirigida.",
    "caveats": "Recorte institucional datado; não representa a população, povos subordinados nem governos fora do período. Dois reinados distintos e longo período impedem caracterização econômica simples. Eixos sem evidência suficiente permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "Lei Fundamental e Emendas do Irã",
        "url": "https://www.constituteproject.org/constitution/Iran_1906",
        "note": "Documento primário ou registro de arquivo relacionado ao período Monarquia, 1925–1979; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Encyclopaedia Iranica — dinastia Pahlavi",
        "url": "https://www.iranicaonline.org/articles/pahlavi-dynasty-i",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      }
    ],
    "evidence": {
      "rep": "medium",
      "imi": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Lei Fundamental e Emendas do Irã",
          "Encyclopaedia Iranica — dinastia Pahlavi"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 23."
      },
      "imi": {
        "sourceTitles": [
          "Lei Fundamental e Emendas do Irã",
          "Encyclopaedia Iranica — dinastia Pahlavi"
        ],
        "rationale": "A fonte registra regra ou política explícita de assimilação e pertencimento, sustentando 65."
      },
      "mor": {
        "sourceTitles": [
          "Lei Fundamental e Emendas do Irã",
          "Encyclopaedia Iranica — dinastia Pahlavi"
        ],
        "rationale": "A fonte registra extensão ou restrição de direitos e igualdade no período, sustentando 45."
      }
    }
  },
  "iran-constitutional-revolution": {
    "id": "iran-constitutional-revolution",
    "kind": "country",
    "category": "historical-country",
    "name": "Irã — Revolução Constitucional",
    "period": "Majles e monarquia, 1906–1911",
    "vec": {
      "est": 50,
      "rep": 74,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 39,
      "mor": 57,
      "tec": 50
    },
    "rationale": "Revolução instituiu assembleia e garantias sob monarquia.",
    "caveats": "Recorte institucional datado; não representa a população, povos subordinados nem governos fora do período. Vigência parlamentar breve; texto conciliou autoridade religiosa e legislativa. Eixos sem evidência suficiente permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "Lei Fundamental Persa (1906)",
        "url": "https://www.constituteproject.org/constitution/Iran_1906",
        "note": "Documento primário ou registro de arquivo relacionado ao período Majles e monarquia, 1906–1911; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Encyclopaedia Iranica — Constitutional Revolution",
        "url": "https://www.iranicaonline.org/articles/constitutional-revolution-i",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      }
    ],
    "evidence": {
      "rep": "medium",
      "rel": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Lei Fundamental Persa (1906)",
          "Encyclopaedia Iranica — Constitutional Revolution"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 74."
      },
      "rel": {
        "sourceTitles": [
          "Lei Fundamental Persa (1906)",
          "Encyclopaedia Iranica — Constitutional Revolution"
        ],
        "rationale": "A carta ou fonte documenta laicidade, religião de Estado ou autoridade religiosa, sustentando 39."
      },
      "mor": {
        "sourceTitles": [
          "Lei Fundamental Persa (1906)",
          "Encyclopaedia Iranica — Constitutional Revolution"
        ],
        "rationale": "A fonte registra extensão ou restrição de direitos e igualdade no período, sustentando 57."
      }
    }
  },
  "iran-early-islamic-republic": {
    "id": "iran-early-islamic-republic",
    "kind": "country",
    "category": "historical-country",
    "name": "Irã — República Islâmica inicial",
    "period": "Revolução e nova Constituição, 1979–1989",
    "vec": {
      "est": 50,
      "rep": 25,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 89,
      "con": 94,
      "com": 50,
      "rel": 3,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Constituição estabelece autoridade clerical e setores públicos e cooperativos na economia.",
    "caveats": "Recorte institucional datado; não representa a população, povos subordinados nem governos fora do período. Período inclui guerra e repressão; fontes formais não revelam toda prática. Eixos sem evidência suficiente permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "Constituição da República Islâmica",
        "url": "https://www.constituteproject.org/constitution/Iran_1989",
        "note": "Documento primário ou registro de arquivo relacionado ao período Revolução e nova Constituição, 1979–1989; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Encyclopaedia Iranica — Revolução de 1979",
        "url": "https://www.iranicaonline.org/articles/islamic-revolution-of-1979",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      }
    ],
    "evidence": {
      "rep": "high",
      "eco": "medium",
      "con": "medium",
      "rel": "high"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constituição da República Islâmica",
          "Encyclopaedia Iranica — Revolução de 1979"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 25."
      },
      "eco": {
        "sourceTitles": [
          "Constituição da República Islâmica",
          "Encyclopaedia Iranica — Revolução de 1979"
        ],
        "rationale": "O documento descreve extensão de propriedade pública, provisão ou coordenação estatal, sustentando 89."
      },
      "con": {
        "sourceTitles": [
          "Constituição da República Islâmica",
          "Encyclopaedia Iranica — Revolução de 1979"
        ],
        "rationale": "A fonte documenta direção estatal da economia ou coordenação por mercado, sustentando 94."
      },
      "rel": {
        "sourceTitles": [
          "Constituição da República Islâmica",
          "Encyclopaedia Iranica — Revolução de 1979"
        ],
        "rationale": "A carta ou fonte documenta laicidade, religião de Estado ou autoridade religiosa, sustentando 3."
      }
    }
  },
  "israel-founding-government": {
    "id": "israel-founding-government",
    "kind": "country",
    "category": "historical-country",
    "name": "Israel — primeiros governos",
    "period": "Formação do Estado, 1948–1967",
    "vec": {
      "est": 50,
      "rep": 78,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 77,
      "con": 82,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Declaração fundacional estabeleceu república democrática e igualdade formal, enquanto governos desenvolveram setor público.",
    "caveats": "Recorte institucional datado; não representa a população, povos subordinados nem governos fora do período. Conflito, migração e deslocamento palestino são centrais; igualdade declarada não foi universal. Eixos sem evidência suficiente permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "Declaração de Independência (1948)",
        "url": "https://www.knesset.gov.il/docs/eng/megilat_eng.htm",
        "note": "Documento primário ou registro de arquivo relacionado ao período Formação do Estado, 1948–1967; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Knesset — história institucional",
        "url": "https://main.knesset.gov.il/en/about/pages/history.aspx",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      }
    ],
    "evidence": {
      "rep": "medium",
      "eco": "medium",
      "con": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Declaração de Independência (1948)",
          "Knesset — história institucional"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 78."
      },
      "eco": {
        "sourceTitles": [
          "Declaração de Independência (1948)",
          "Knesset — história institucional"
        ],
        "rationale": "O documento descreve extensão de propriedade pública, provisão ou coordenação estatal, sustentando 77."
      },
      "con": {
        "sourceTitles": [
          "Declaração de Independência (1948)",
          "Knesset — história institucional"
        ],
        "rationale": "A fonte documenta direção estatal da economia ou coordenação por mercado, sustentando 82."
      }
    }
  },
  "south-korea-park": {
    "id": "south-korea-park",
    "kind": "country",
    "category": "historical-country",
    "name": "Coreia do Sul — governo Park Chung-hee",
    "period": "Regime desenvolvimentista, 1961–1979",
    "vec": {
      "est": 50,
      "rep": 21,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 77,
      "con": 87,
      "com": 50,
      "rel": 50,
      "mor": 29,
      "tec": 50
    },
    "rationale": "Regime autoritário reprimiu oposição e coordenou industrialização com conglomerados privados.",
    "caveats": "Recorte institucional datado; não representa a população, povos subordinados nem governos fora do período. Crescimento industrial coexistiu com repressão trabalhista e política. Eixos sem evidência suficiente permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "Constituição Yushin (1972)",
        "url": "https://www.constituteproject.org/constitution/South_Korea_1972",
        "note": "Documento primário ou registro de arquivo relacionado ao período Regime desenvolvimentista, 1961–1979; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "National Archives of Korea — constituições",
        "url": "https://theme.archives.go.kr/next/constitution/constitutionRecordList.do",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      }
    ],
    "evidence": {
      "rep": "high",
      "eco": "medium",
      "con": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constituição Yushin (1972)",
          "National Archives of Korea — constituições"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 21."
      },
      "eco": {
        "sourceTitles": [
          "Constituição Yushin (1972)",
          "National Archives of Korea — constituições"
        ],
        "rationale": "O documento descreve extensão de propriedade pública, provisão ou coordenação estatal, sustentando 77."
      },
      "con": {
        "sourceTitles": [
          "Constituição Yushin (1972)",
          "National Archives of Korea — constituições"
        ],
        "rationale": "A fonte documenta direção estatal da economia ou coordenação por mercado, sustentando 87."
      },
      "mor": {
        "sourceTitles": [
          "Constituição Yushin (1972)",
          "National Archives of Korea — constituições"
        ],
        "rationale": "A fonte registra extensão ou restrição de direitos e igualdade no período, sustentando 29."
      }
    }
  },
  "qing-dynasty-late": {
    "id": "qing-dynasty-late",
    "kind": "country",
    "category": "historical-country",
    "name": "China — dinastia Qing tardia",
    "period": "Reformas constitucionais, 1898–1911",
    "vec": {
      "est": 50,
      "rep": 5,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 35,
      "tec": 50
    },
    "rationale": "Corte imperial propôs monarquia constitucional sem substituir soberania dinástica.",
    "caveats": "Recorte institucional datado; não representa a população, povos subordinados nem governos fora do período. Regime multinacional e sob pressão externa; reformas tiveram curta vigência. Eixos sem evidência suficiente permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "Constituição Preparatória Qing (1908)",
        "url": "https://www.constituteproject.org/constitution/China_1908",
        "note": "Documento primário ou registro de arquivo relacionado ao período Reformas constitucionais, 1898–1911; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Library of Congress — coleções chinesas",
        "url": "https://www.loc.gov/collections/china-through-american-eyes/about-this-collection/",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      }
    ],
    "evidence": {
      "rep": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constituição Preparatória Qing (1908)",
          "Library of Congress — coleções chinesas"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 5."
      },
      "mor": {
        "sourceTitles": [
          "Constituição Preparatória Qing (1908)",
          "Library of Congress — coleções chinesas"
        ],
        "rationale": "A fonte registra extensão ou restrição de direitos e igualdade no período, sustentando 35."
      }
    }
  },
  "roc-mainland-1912": {
    "id": "roc-mainland-1912",
    "kind": "country",
    "category": "historical-country",
    "name": "China — República da China continental",
    "period": "República e governos do Kuomintang, 1912–1949",
    "vec": {
      "est": 50,
      "rep": 26,
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
    "rationale": "República constitucional foi enfraquecida por guerra civil, domínio fragmentado e concentração política.",
    "caveats": "Recorte institucional datado; não representa a população, povos subordinados nem governos fora do período. A carta de 1947 não descreve a prática de todo o período. Eixos sem evidência suficiente permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "Constituição da República da China (1947)",
        "url": "https://www.constituteproject.org/constitution/China_1947",
        "note": "Documento primário ou registro de arquivo relacionado ao período República e governos do Kuomintang, 1912–1949; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Office of the Historian — China 1945–1950",
        "url": "https://history.state.gov/historicaldocuments/frus1945v07/d1",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      }
    ],
    "evidence": {
      "rep": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constituição da República da China (1947)",
          "Office of the Historian — China 1945–1950"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 26."
      }
    }
  },
  "german-confederation-1815": {
    "id": "german-confederation-1815",
    "name": "Confederação Germânica",
    "aliases": [
      "Deutscher Bund"
    ],
    "period": "Ordem confederal dos atos de 1815 e 1820, 1815–1866",
    "rationale": "Uma associação de Estados soberanos era dirigida por enviados dos governos; o princípio monárquico condicionava a participação de assembleias territoriais.",
    "caveats": "A Confederação não era o Império Alemão de 1871 nem uma federação nacional com governo popular. A revolução de 1848–1849 e a variedade dos Estados limitam qualquer média de 51 anos; o recorte codifica o desenho confederal predominante, não todos os governos locais.",
    "sources": [
      {
        "title": "German Federal Act, 8 June 1815 — GHDI",
        "url": "https://germanhistorydocs.org/en/from-vormaerz-to-prussian-dominance-1815-1866/german-federal-act-june-8-1815",
        "note": "Seleções primárias traduzidas: soberania dos membros e assembleia de plenipotenciários; contexto identifica encerramento em agosto de 1866."
      },
      {
        "title": "Final Act of the Viennese Ministerial Conferences, 15 May 1820 — GHDI",
        "url": "https://germanhistorydocs.org/en/from-vormaerz-to-prussian-dominance-1815-1866/final-act-of-the-viennese-ministerial-conferences-may-15-1820",
        "note": "Seleções primárias traduzidas: artigos 53–59 sobre autonomia interna, assembleias estamentais e autoridade principesca."
      },
      {
        "title": "Die Deutsche Bundesakte von 1815 — Deutsches Historisches Museum",
        "url": "https://www.dhm.de/lemo/kapitel/vormaerz-und-revolution/wiener-kongress/bundesakte",
        "note": "Contexto do museu nacional sobre enviados vinculados aos governos e ausência de representação popular confederal, com limites das assembleias locais."
      }
    ],
    "kind": "country",
    "category": "historical-country",
    "vec": {
      "est": 80,
      "rep": 20,
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
      "est": "high",
      "rep": "high"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "German Federal Act, 8 June 1815 — GHDI",
          "Final Act of the Viennese Ministerial Conferences, 15 May 1820 — GHDI"
        ],
        "rationale": "Autonomia institucional interna e membros soberanos sustentam descentralização forte, embora exista obrigação e órgão confederal comum. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Estados associados não são equivalentes a entes de uma federação moderna; a âncora expressa apenas o polo descentralizador. Prússia e Áustria tinham poder desigual e o ato admitia obrigações conjuntas."
      },
      "rep": {
        "sourceTitles": [
          "Final Act of the Viennese Ministerial Conferences, 15 May 1820 — GHDI",
          "Die Deutsche Bundesakte von 1815 — Deutsches Historisches Museum"
        ],
        "rationale": "No nível confederal, representação dos soberanos e reserva monárquica de autoridade sustentam direção autocrática forte; representação dos Estados não equivale a voto dos cidadãos. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Não se afirma ausência de toda instituição representativa nos Estados; cidades livres e constituições locais são contrapontos. A ruptura revolucionária de 1848–1849 impede ler o vetor como regime homogêneo ininterrupto."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "strong-first",
        "confidence": "high",
        "relatedQuestionIds": [
          "estrutura_01",
          "estrutura_05"
        ],
        "claims": [
          {
            "sourceTitle": "German Federal Act, 8 June 1815 — GHDI",
            "locator": "Articles 1–4 and 11",
            "statement": "Os Estados soberanos formam união permanente com assembleia comum e conservam direitos de alianças sob limites federais.",
            "basis": "norm",
            "publishedDate": "1815-06-08",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Final Act of the Viennese Ministerial Conferences, 15 May 1820 — GHDI",
            "locator": "Article 53",
            "statement": "A autonomia garantida exclui em regra interferência confederal nas instituições e administração internas dos Estados, com exceções de obrigações comuns.",
            "basis": "norm",
            "publishedDate": "1820-05-15",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Autonomia institucional interna e membros soberanos sustentam descentralização forte, embora exista obrigação e órgão confederal comum.",
        "uncertainty": "Estados associados não são equivalentes a entes de uma federação moderna; a âncora expressa apenas o polo descentralizador. Prússia e Áustria tinham poder desigual e o ato admitia obrigações conjuntas.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "rep": {
        "axis": "rep",
        "position": "strong-second",
        "confidence": "high",
        "relatedQuestionIds": [
          "representacao_10",
          "representacao_15"
        ],
        "claims": [
          {
            "sourceTitle": "Final Act of the Viennese Ministerial Conferences, 15 May 1820 — GHDI",
            "locator": "Articles 54–59, especialmente 57",
            "statement": "O poder estatal é reservado aos soberanos, com participação limitada de assembleias estamentais e exceção das cidades livres.",
            "basis": "norm",
            "publishedDate": "1820-05-15",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Die Deutsche Bundesakte von 1815 — Deutsches Historisches Museum",
            "locator": "Parágrafos que começam “Einziges Bundesorgan” e “Der Deutsche Bund besaß”",
            "statement": "A assembleia comum consistia de enviados instruídos pelos governos; não existia representação popular confederal.",
            "basis": "practice",
            "publishedDate": "2014-10-10; contexto histórico de 1815–1866",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "No nível confederal, representação dos soberanos e reserva monárquica de autoridade sustentam direção autocrática forte; representação dos Estados não equivale a voto dos cidadãos.",
        "uncertainty": "Não se afirma ausência de toda instituição representativa nos Estados; cidades livres e constituições locais são contrapontos. A ruptura revolucionária de 1848–1849 impede ler o vetor como regime homogêneo ininterrupto.",
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
      "scope": "Atos constitutivos e contexto institucional examinados; variações locais e revolução explicitamente delimitadas."
    },
    "unknownAxisReasons": {
      "pod": "A lei de imprensa de 1819 foi localizada, mas não estabelecemos uma leitura de implementação e mudanças para todos os 51 anos; o eixo permanece desconhecido.",
      "imi": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "dip": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "int": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "eco": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "con": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "com": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "rel": "Igualdade entre confissões cristãs e desigualdade de cidadania judaica não estabelecem um único regime Estado–religião para todos os membros.",
      "mor": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "tec": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação."
    }
  },
  "afghanistan-constitutional-monarchy-1964": {
    "id": "afghanistan-constitutional-monarchy-1964",
    "name": "Afeganistão — monarquia constitucional",
    "aliases": [],
    "period": "Monarquia sob a carta de 1964 até ruptura republicana de 1973; recorte textual original de 1/10/1964",
    "rationale": "Ordem monárquica constitucional anterior à república e ao PDPA já catalogado.",
    "caveats": "Graduação normativa delimitada, confiança média; não certifica prática nem continuidade de todo o período. Cotejo integral e revisão independente pendentes. rep desconhecido sem revisão adicional do funcionamento parlamentar e poderes régios; não inferido do nome constitucional.",
    "sources": [
      {
        "title": "Afghanistan Constitution 1964 — edição histórica traduzida",
        "url": "https://www.constituteproject.org/constitution/Afghanistan_1964",
        "note": "Texto primário transcrito/traduzido: locadores em coding. Edição consultada em 7/10/2026; não constitui certificação arquivística."
      }
    ],
    "kind": "country",
    "category": "historical-country",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 40,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 40,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "pod": "medium",
      "rel": "medium"
    },
    "axisEvidence": {
      "pod": {
        "sourceTitles": [
          "Afghanistan Constitution 1964 — edição histórica traduzida"
        ],
        "rationale": "Garantias processuais e expressão sustentam liberdade moderada formal. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Monopólio estatal de rádio/TV e limites legais contrariam leitura irrestrita."
      },
      "rel": {
        "sourceTitles": [
          "Afghanistan Constitution 1964 — edição histórica traduzida"
        ],
        "rationale": "Confissão institucional com tolerância limitada sustenta polo religioso moderado. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não extrapola à intensidade de crença popular ou à totalidade da lei religiosa."
      }
    },
    "coding": {
      "pod": {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Afghanistan Constitution 1964 — edição histórica traduzida",
            "locator": "Arts.26,28,30–32",
            "statement": "Texto proíbe tortura e exige controle judicial de detenção; protege expressão sem aprovação prévia, com exceções urgentes de busca.",
            "basis": "norm",
            "publishedDate": "1964-10-01",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Garantias processuais e expressão sustentam liberdade moderada formal.",
        "uncertainty": "Monopólio estatal de rádio/TV e limites legais contrariam leitura irrestrita.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "rel": {
        "axis": "rel",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Afghanistan Constitution 1964 — edição histórica traduzida",
            "locator": "Arts.2,7–8",
            "statement": "Ritos estatais seguem doutrina Hanafi e rei deve professá-la; não muçulmanos mantêm ritos dentro de limites legais.",
            "basis": "norm",
            "publishedDate": "1964-10-01",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Confissão institucional com tolerância limitada sustenta polo religioso moderado.",
        "uncertainty": "Não extrapola à intensidade de crença popular ou à totalidade da lei religiosa.",
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
      "scope": "Cláusulas delimitadas lidas pelo autor; prática e validação independente integral pendentes."
    },
    "unknownAxisReasons": {
      "est": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "rep": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "imi": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "dip": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "int": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "eco": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "con": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "com": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "mor": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "tec": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação."
    }
  },
  "nepal-multiparty-monarchy-1990": {
    "id": "nepal-multiparty-monarchy-1990",
    "name": "Nepal — monarquia multipartidária",
    "aliases": [],
    "period": "Ordem da carta de 1990 até substituição pela Constituição Interina de 2007; norma fundadora de 9/11/1990",
    "rationale": "Ruptura explícita com Panchayat: partidos competitivos, sufrágio adulto e responsabilidade do gabinete perante câmara eleita.",
    "caveats": "Graduação normativa delimitada, confiança média; não certifica prática nem continuidade de todo o período. Cotejo integral e revisão independente pendentes. Fonte identifica base na tradução oficial de1991 com pequenas correções editoriais; não uma tradução autônoma certificada. pod desconhecido diante de exceções de detenção preventiva sem revisão prática.",
    "sources": [
      {
        "title": "Constitution of the Kingdom of Nepal 1990 — tradução oficial editada pelo ICL",
        "url": "https://www.servat.unibe.ch/icl/np00000_.html",
        "note": "Texto primário transcrito/traduzido: locadores em coding. Edição consultada em 7/10/2026; não constitui certificação arquivística."
      }
    ],
    "kind": "country",
    "category": "historical-country",
    "vec": {
      "est": 50,
      "rep": 60,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 40,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "rep": "medium",
      "rel": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constitution of the Kingdom of Nepal 1990 — tradução oficial editada pelo ICL"
        ],
        "rationale": "Competição multipartidária e responsabilidade legislativa sustentam representação moderada formal. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Poderes reservados e crises régias posteriores não são descritos como funcionamento contínuo."
      },
      "rel": {
        "sourceTitles": [
          "Constitution of the Kingdom of Nepal 1990 — tradução oficial editada pelo ICL"
        ],
        "rationale": "Identidade confessional e limite à conversão sustentam polo religioso moderado. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não infere lei religiosa predominante nem fé individual."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constitution of the Kingdom of Nepal 1990 — tradução oficial editada pelo ICL",
            "locator": "Preâmbulo; arts.35–36,42,45–46",
            "statement": "Governo depende da maioria e confiança parlamentar; cidadãos maiores de18 votam em câmara eleita, com dez nomeados régios na câmara alta.",
            "basis": "norm",
            "publishedDate": "1990-11-09",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Competição multipartidária e responsabilidade legislativa sustentam representação moderada formal.",
        "uncertainty": "Poderes reservados e crises régias posteriores não são descritos como funcionamento contínuo.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "rel": {
        "axis": "rel",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constitution of the Kingdom of Nepal 1990 — tradução oficial editada pelo ICL",
            "locator": "Arts.4,19",
            "statement": "Reino define-se hindu; protege religiões herdadas e sua administração, mas proíbe converter outra pessoa.",
            "basis": "norm",
            "publishedDate": "1990-11-09",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Identidade confessional e limite à conversão sustentam polo religioso moderado.",
        "uncertainty": "Não infere lei religiosa predominante nem fé individual.",
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
      "scope": "Cláusulas delimitadas lidas pelo autor; prática e validação independente integral pendentes."
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
      "mor": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "tec": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação."
    }
  }
} as unknown as Record<string,ReferenceEntry>;

export const historicalCountryProvenance06Proposals = {
  "greece-military-junta": {
    "id": "greece-military-junta",
    "kind": "country",
    "category": "historical-country",
    "name": "Grécia — Junta dos Coronéis",
    "period": "Ditadura militar, 1967–1974; carta declarada de 1968, sem comprovação de vigência integral.",
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
      "rel": 50,
      "mor": 12,
      "tec": 50
    },
    "rationale": "A carta de 1968 adiava liberdades e eleições e permitia decretos do regente e gabinete sem ratificação parlamentar.",
    "caveats": "O texto traduzido é uma carta declarada, não prova de direitos ou eleições efetivos; a história parlamentar registra que as cartas de 1968 e 1973 não entraram em vigor. Não foi cotejada a publicação grega original.",
    "sources": [
      {
        "title": "Constituição de 1968 (junta)",
        "url": "https://www.constituteproject.org/constitution/Greece_1968",
        "note": "Documento primário ou registro de arquivo relacionado ao período Ditadura militar, 1967–1974; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Parlamento Helênico — história política",
        "url": "https://www.hellenicparliament.gr/en/organisation-and-operation/history/",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      },
      {
        "title": "Carta grega de 1968 — reprodução da tradução governamental inglesa",
        "url": "https://en.wikisource.org/wiki/Constitution_of_Greece_(1968)",
        "note": "O texto traduzido é uma carta declarada, não prova de direitos ou eleições efetivos; a história parlamentar registra que as cartas de 1968 e 1973 não entraram em vigor. Não foi cotejada a publicação grega original."
      },
      {
        "title": "Contexto institucional do período histórico",
        "url": "https://www.hellenicparliament.gr/en/Vouli-ton-Ellinon/To-Politevma/Syntagmatiki-Istoria/",
        "note": "O texto traduzido é uma carta declarada, não prova de direitos ou eleições efetivos; a história parlamentar registra que as cartas de 1968 e 1973 não entraram em vigor. Não foi cotejada a publicação grega original."
      }
    ],
    "evidence": {
      "rep": "high",
      "mor": "high"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constituição de 1968 (junta)",
          "Parlamento Helênico — história política"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 4."
      },
      "mor": {
        "sourceTitles": [
          "Constituição de 1968 (junta)",
          "Parlamento Helênico — história política"
        ],
        "rationale": "A fonte registra extensão ou restrição de direitos e igualdade no período, sustentando 12."
      }
    }
  },
  "ottoman-tanzimat": {
    "id": "ottoman-tanzimat",
    "kind": "country",
    "category": "historical-country",
    "name": "Império Otomano — Tanzimat",
    "period": "Tanzimat, 1839–1876; édito de 1839; a fase constitucional iniciada em 1876 é distinta.",
    "vec": {
      "est": 50,
      "rep": 36,
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
    "rationale": "O édito de 1839 prometia garantias pessoais e patrimoniais, julgamento público e regras para tributos e recrutamento.",
    "caveats": "As promessas são fundadas na lei divina e na autoridade do sultão, não em soberania popular. O excerto inglês não identifica tradutor nem reproduz todo o original. O fim do recorte em 1876 não significa revogação de todas as reformas.",
    "sources": [
      {
        "title": "Édito de Gülhane (1839)",
        "url": "https://www.britannica.com/event/Tanzimat",
        "note": "Documento primário ou registro de arquivo relacionado ao período Reformas imperiais, 1839–1878; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Ottoman History Podcast — documentos do período",
        "url": "https://ottomanhistorypodcast.com/",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      },
      {
        "title": "Édito de Gülhane de 1839 — excerto em inglês",
        "url": "https://chnm.gmu.edu/worldhistorysources/analyzing/documents/gulhane.html",
        "note": "As promessas são fundadas na lei divina e na autoridade do sultão, não em soberania popular. O excerto inglês não identifica tradutor nem reproduz todo o original. O fim do recorte em 1876 não significa revogação de todas as reformas."
      },
      {
        "title": "Parlamento turco — transição à Constituição de 1876",
        "url": "https://www.tbmm.gov.tr/anayasa/yetmis-alti-kanuni-esasi",
        "note": "História institucional distingue os éditos de 1839 e 1856 da Constituição adotada em 23/12/1876 e proclamada no dia seguinte; não afirma revogação de todas as reformas."
      },
      {
        "title": "Parlamento turco — classificação histórica do Tanzimat",
        "url": "https://cdn.tbmm.gov.tr/TbmmWeb/Yayinlar/Dosya/338840aa-508c-482f-a7dd-fd19f0254f3c.pdf",
        "note": "Parágrafo recuperado no índice classifica o Tanzimat como 1839–1876. O arquivo integral não foi recuperado."
      }
    ],
    "evidence": {
      "rep": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Édito de Gülhane (1839)",
          "Ottoman History Podcast — documentos do período"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 36."
      }
    }
  },
  "british-raj": {
    "id": "british-raj",
    "kind": "country",
    "category": "historical-country",
    "name": "Índia britânica — Raj",
    "period": "Administração colonial da Coroa, 1858–1947; lei de 1935 na consolidação de 1943; independência em 15/08/1947.",
    "vec": {
      "est": 31,
      "rep": 8,
      "pod": 50,
      "imi": 83,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 18,
      "tec": 50
    },
    "rationale": "A lei de 1935 reservava autoridade à Coroa e funções ao governador-geral e representante nomeados pelo rei.",
    "caveats": "A nomeação imperial não significa que todas as instituições provinciais eram inteiramente não eleitas. O texto incorpora alterações até 1943. A independência de 1947 criou domínios; não instaurou imediatamente repúblicas nem eliminou todas as relações com a Coroa.",
    "sources": [
      {
        "title": "Government of India Act 1935",
        "url": "https://www.legislation.gov.uk/ukpga/Geo5/26-27/2/contents/enacted",
        "note": "Documento primário ou registro de arquivo relacionado ao período Administração colonial da Coroa, 1858–1947; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "UK Parliament — Government of India Act",
        "url": "https://www.parliament.uk/about/living-heritage/evolutionofparliament/legislativescrutiny/parliament-and-india/collections1/collections-govtindia/",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      },
      {
        "title": "Lei do Governo da Índia de 1935 — consolidação até 1943",
        "url": "https://en.wikisource.org/wiki/Page:Government_of_India_Act_1935_(amended_upto_1943).djvu/13",
        "note": "A nomeação imperial não significa que todas as instituições provinciais eram inteiramente não eleitas. O texto incorpora alterações até 1943. A independência de 1947 criou domínios; não instaurou imediatamente repúblicas nem eliminou todas as relações com a Coroa."
      },
      {
        "title": "Contexto institucional do período histórico",
        "url": "https://www.parliament.uk/about/living-heritage/evolutionofparliament/legislativescrutiny/parliament-and-empire/parliament-and-the-american-colonies-before-1765/east-india-company-and-raj-1785-1858/",
        "note": "A nomeação imperial não significa que todas as instituições provinciais eram inteiramente não eleitas. O texto incorpora alterações até 1943. A independência de 1947 criou domínios; não instaurou imediatamente repúblicas nem eliminou todas as relações com a Coroa."
      },
      {
        "title": "Documento de transição do período histórico",
        "url": "https://en.wikisource.org/wiki/Indian_Independence_Act_1947",
        "note": "A nomeação imperial não significa que todas as instituições provinciais eram inteiramente não eleitas. O texto incorpora alterações até 1943. A independência de 1947 criou domínios; não instaurou imediatamente repúblicas nem eliminou todas as relações com a Coroa."
      },
      {
        "title": "Documento de transição do período histórico",
        "url": "https://www.legislation.gov.uk/ukpga/Geo6/10-11/30",
        "note": "A nomeação imperial não significa que todas as instituições provinciais eram inteiramente não eleitas. O texto incorpora alterações até 1943. A independência de 1947 criou domínios; não instaurou imediatamente repúblicas nem eliminou todas as relações com a Coroa."
      }
    ],
    "evidence": {
      "est": "medium",
      "rep": "high",
      "imi": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Government of India Act 1935",
          "UK Parliament — Government of India Act"
        ],
        "rationale": "A carta constitucional descreve a distribuição territorial de poder, sustentando a posição unitária/centralizada codificada."
      },
      "rep": {
        "sourceTitles": [
          "Government of India Act 1935",
          "UK Parliament — Government of India Act"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 8."
      },
      "imi": {
        "sourceTitles": [
          "Government of India Act 1935",
          "UK Parliament — Government of India Act"
        ],
        "rationale": "A fonte registra regra ou política explícita de assimilação e pertencimento, sustentando 83."
      },
      "mor": {
        "sourceTitles": [
          "Government of India Act 1935",
          "UK Parliament — Government of India Act"
        ],
        "rationale": "A fonte registra extensão ou restrição de direitos e igualdade no período, sustentando 18."
      }
    }
  },
  "pakistan-zia": {
    "id": "pakistan-zia",
    "kind": "country",
    "category": "historical-country",
    "name": "Paquistão — governo de Zia-ul-Haq",
    "period": "Fase militar de Zia, 1977–1988; proclamação de 05/07/1977; presidência de 1978–1988; restauração constitucional parcial em 1985.",
    "vec": {
      "est": 50,
      "rep": 7,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 12,
      "mor": 15,
      "tec": 50
    },
    "rationale": "A proclamação de 1977 dissolvia assembleias; ordens subordinavam direitos e controle judicial à autoridade militar.",
    "caveats": "A ordem de continuidade está consolidada, não é uma edição intocada de julho de 1977. Tribunais e leis permaneceram sob limites militares. A restauração parcial de 1985 excluía direitos fundamentais; não se presume lei marcial inalterada até 1988 nem se deduz islamização desses artigos.",
    "sources": [
      {
        "title": "Ordem Constitucional Provisória (1981)",
        "url": "https://www.pakistani.org/pakistan/constitution/post_1977/pc_19810324.html",
        "note": "Documento primário ou registro de arquivo relacionado ao período Regime militar e islamização, 1977–1988; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "National Assembly of Pakistan — história",
        "url": "https://na.gov.pk/en/content.php?id=75",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      },
      {
        "title": "Proclamação de lei marcial de 05/07/1977 — reprodução legal",
        "url": "https://www.pakistani.org/pakistan/constitution/orders/mlproclaim.html",
        "note": "A ordem de continuidade está consolidada, não é uma edição intocada de julho de 1977. Tribunais e leis permaneceram sob limites militares. A restauração parcial de 1985 excluía direitos fundamentais; não se presume lei marcial inalterada até 1988 nem se deduz islamização desses artigos."
      },
      {
        "title": "Contexto institucional do período histórico",
        "url": "https://www.pakistani.org/pakistan/constitution/orders/continuance.html",
        "note": "A ordem de continuidade está consolidada, não é uma edição intocada de julho de 1977. Tribunais e leis permaneceram sob limites militares. A restauração parcial de 1985 excluía direitos fundamentais; não se presume lei marcial inalterada até 1988 nem se deduz islamização desses artigos."
      },
      {
        "title": "Contexto institucional do período histórico",
        "url": "https://www.pakistani.org/pakistan/constitution/orders/enforcement_of_constitution_order.html",
        "note": "A ordem de continuidade está consolidada, não é uma edição intocada de julho de 1977. Tribunais e leis permaneceram sob limites militares. A restauração parcial de 1985 excluía direitos fundamentais; não se presume lei marcial inalterada até 1988 nem se deduz islamização desses artigos."
      },
      {
        "title": "Contexto institucional do período histórico",
        "url": "https://na.gov.pk/en/president_list.php/search.php",
        "note": "A ordem de continuidade está consolidada, não é uma edição intocada de julho de 1977. Tribunais e leis permaneceram sob limites militares. A restauração parcial de 1985 excluía direitos fundamentais; não se presume lei marcial inalterada até 1988 nem se deduz islamização desses artigos."
      },
      {
        "title": "Documento de transição do período histórico",
        "url": "https://president.gov.pk/former-presidents",
        "note": "A ordem de continuidade está consolidada, não é uma edição intocada de julho de 1977. Tribunais e leis permaneceram sob limites militares. A restauração parcial de 1985 excluía direitos fundamentais; não se presume lei marcial inalterada até 1988 nem se deduz islamização desses artigos."
      }
    ],
    "evidence": {
      "rep": "high",
      "rel": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Ordem Constitucional Provisória (1981)",
          "National Assembly of Pakistan — história"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 7."
      },
      "rel": {
        "sourceTitles": [
          "Ordem Constitucional Provisória (1981)",
          "National Assembly of Pakistan — história"
        ],
        "rationale": "A carta ou fonte documenta laicidade, religião de Estado ou autoridade religiosa, sustentando 12."
      },
      "mor": {
        "sourceTitles": [
          "Ordem Constitucional Provisória (1981)",
          "National Assembly of Pakistan — história"
        ],
        "rationale": "A fonte registra extensão ou restrição de direitos e igualdade no período, sustentando 15."
      }
    }
  },
  "bangladesh-mujib": {
    "id": "bangladesh-mujib",
    "kind": "country",
    "category": "historical-country",
    "name": "Bangladesh — governo de Sheikh Mujibur Rahman",
    "period": "Governo de Mujib, 1972–1975; primeiro-ministro desde 12/01/1972, depois presidente; declaração internacional de 25/09/1974.",
    "vec": {
      "est": 50,
      "rep": 52,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 72,
      "con": 75,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Em 1974, o governo defendia não alinhamento, coexistência, soberania sobre recursos e cooperação econômica internacional.",
    "caveats": "A descrição resume a declaração de 1974, não comprova a arquitetura original de 1972, a alteração constitucional de 1975 ou os resultados relatados pelo governo. A passagem de primeiro-ministro a presidente não é tratada como continuidade institucional sem mudanças.",
    "sources": [
      {
        "title": "Constituição de Bangladesh (1972)",
        "url": "https://bdlaws.minlaw.gov.bd/act-367.html",
        "note": "Documento primário ou registro de arquivo relacionado ao período Primeira república, 1972–1975; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Banglapedia — Sheikh Mujibur Rahman",
        "url": "https://en.banglapedia.org/index.php/Sheikh_Mujibur_Rahman",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      },
      {
        "title": "Discurso de Mujib na ONU, 25/09/1974 — reprodução em inglês",
        "url": "https://en.wikisource.org/wiki/Address_to_the_United_Nations_General_Assembly_(Sheikh_Mujib,_1974-09-25)",
        "note": "A descrição resume a declaração de 1974, não comprova a arquitetura original de 1972, a alteração constitucional de 1975 ou os resultados relatados pelo governo. A passagem de primeiro-ministro a presidente não é tratada como continuidade institucional sem mudanças."
      },
      {
        "title": "Ministério das Relações Exteriores de Bangladesh — cronologia de Mujib",
        "url": "https://file.mofa.gov.bd/uploads/155926f0-2b9d-445c-a01d-3957208de132/623/896/306/6238963067d9c357463744.pdf",
        "note": "Parágrafo institucional recuperado no índice situa a posse de Mujib como primeiro-ministro em 12/01/1972; o acesso direto ao arquivo falhou. Não certifica as realizações relatadas."
      },
      {
        "title": "Turismo de Bangladesh — história da casa de Mujib",
        "url": "https://www.beautifulbangladesh.gov.bd/district-destination/dhaka/landmarks/96",
        "note": "História institucional da casa-museu registra a morte de Mujib em 15/08/1975. Serve à cronologia pessoal; não comprova as mudanças constitucionais de 1975."
      }
    ],
    "evidence": {
      "rep": "medium",
      "eco": "medium",
      "con": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constituição de Bangladesh (1972)",
          "Banglapedia — Sheikh Mujibur Rahman"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 52."
      },
      "eco": {
        "sourceTitles": [
          "Constituição de Bangladesh (1972)",
          "Banglapedia — Sheikh Mujibur Rahman"
        ],
        "rationale": "O documento descreve extensão de propriedade pública, provisão ou coordenação estatal, sustentando 72."
      },
      "con": {
        "sourceTitles": [
          "Constituição de Bangladesh (1972)",
          "Banglapedia — Sheikh Mujibur Rahman"
        ],
        "rationale": "A fonte documenta direção estatal da economia ou coordenação por mercado, sustentando 75."
      }
    }
  },
  "iran-pahlavi": {
    "id": "iran-pahlavi",
    "kind": "country",
    "category": "historical-country",
    "name": "Irã — Estado Pahlavi",
    "period": "Monarquia Pahlavi, 1925–1979; emenda dinástica de 12/12/1925; ruptura revolucionária em 1979.",
    "vec": {
      "est": 50,
      "rep": 23,
      "pod": 50,
      "imi": 65,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 45,
      "tec": 50
    },
    "rationale": "A emenda de 1925 atribuía a coroa aos Pahlavi; o rei nomeava ministros, responsáveis formalmente às duas câmaras.",
    "caveats": "O rei tinha prerrogativas limitadas pelo texto; ministros dependiam de referenda e podiam ser afastados pelas câmaras. A tradução histórica não identifica individualmente o tradutor. A emenda de 1925 não comprova toda a prática da dinastia nem modernização social ou tecnológica.",
    "sources": [
      {
        "title": "Lei Fundamental e Emendas do Irã",
        "url": "https://www.constituteproject.org/constitution/Iran_1906",
        "note": "Documento primário ou registro de arquivo relacionado ao período Monarquia, 1925–1979; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Encyclopaedia Iranica — dinastia Pahlavi",
        "url": "https://www.iranicaonline.org/articles/pahlavi-dynasty-i",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      },
      {
        "title": "Leis Fundamentais com emenda de 1925 — reprodução histórica",
        "url": "https://irandataportal.syr.edu/wp-content/uploads/iran1925.pdf",
        "note": "O rei tinha prerrogativas limitadas pelo texto; ministros dependiam de referenda e podiam ser afastados pelas câmaras. A tradução histórica não identifica individualmente o tradutor. A emenda de 1925 não comprova toda a prática da dinastia nem modernização social ou tecnológica."
      },
      {
        "title": "Arquivo diplomático dos EUA — ruptura iraniana de 1979",
        "url": "https://history.state.gov/historicaldocuments/frus1977-80v09Ed2/d169",
        "note": "Nota histórica editorial registra a saída do xá em janeiro e o colapso do governo em fevereiro de 1979. É contexto de encerramento; não é um ato de revogação da monarquia."
      }
    ],
    "evidence": {
      "rep": "medium",
      "imi": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Lei Fundamental e Emendas do Irã",
          "Encyclopaedia Iranica — dinastia Pahlavi"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 23."
      },
      "imi": {
        "sourceTitles": [
          "Lei Fundamental e Emendas do Irã",
          "Encyclopaedia Iranica — dinastia Pahlavi"
        ],
        "rationale": "A fonte registra regra ou política explícita de assimilação e pertencimento, sustentando 65."
      },
      "mor": {
        "sourceTitles": [
          "Lei Fundamental e Emendas do Irã",
          "Encyclopaedia Iranica — dinastia Pahlavi"
        ],
        "rationale": "A fonte registra extensão ou restrição de direitos e igualdade no período, sustentando 45."
      }
    }
  },
  "iran-constitutional-revolution": {
    "id": "iran-constitutional-revolution",
    "kind": "country",
    "category": "historical-country",
    "name": "Irã — Revolução Constitucional",
    "period": "Primeira fase constitucional, 1906–1911; leis de 1906 e 1907; dissolução do Majles relatada em dezembro de 1911.",
    "vec": {
      "est": 50,
      "rep": 74,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 39,
      "mor": 57,
      "tec": 50
    },
    "rationale": "As leis de 1906–1907 instituíam Majles eleito e garantias legais sob sanção real e controle clerical sobre leis.",
    "caveats": "O Senado tinha membros indicados pela coroa e o comitê clerical podia vetar leis. A tradução inglesa contém defeitos de transcrição e não foi cotejada com o persa. A dissolução parlamentar relatada em 1911 delimita uma fase, não demonstra revogação da Constituição.",
    "sources": [
      {
        "title": "Lei Fundamental Persa (1906)",
        "url": "https://www.constituteproject.org/constitution/Iran_1906",
        "note": "Documento primário ou registro de arquivo relacionado ao período Majles e monarquia, 1906–1911; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Encyclopaedia Iranica — Constitutional Revolution",
        "url": "https://www.iranicaonline.org/articles/constitutional-revolution-i",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      },
      {
        "title": "Leis constitucionais iranianas de 1906 e 1907 — tradução inglesa",
        "url": "https://fis-iran.org/document/iran-1906-constitution/",
        "note": "O Senado tinha membros indicados pela coroa e o comitê clerical podia vetar leis. A tradução inglesa contém defeitos de transcrição e não foi cotejada com o persa. A dissolução parlamentar relatada em 1911 delimita uma fase, não demonstra revogação da Constituição."
      },
      {
        "title": "Biblioteca Nacional da Nova Zelândia — notícia contemporânea sobre o Majles",
        "url": "https://paperspast.natlib.govt.nz/newspapers/ME19111226.2.45",
        "note": "Notícia contemporânea de 26/12/1911 relata a dissolução do Majles em despacho de Teerã datado do dia 25. Não fixa o dia exato da dissolução nem comprova revogação da carta."
      }
    ],
    "evidence": {
      "rep": "medium",
      "rel": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Lei Fundamental Persa (1906)",
          "Encyclopaedia Iranica — Constitutional Revolution"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 74."
      },
      "rel": {
        "sourceTitles": [
          "Lei Fundamental Persa (1906)",
          "Encyclopaedia Iranica — Constitutional Revolution"
        ],
        "rationale": "A carta ou fonte documenta laicidade, religião de Estado ou autoridade religiosa, sustentando 39."
      },
      "mor": {
        "sourceTitles": [
          "Lei Fundamental Persa (1906)",
          "Encyclopaedia Iranica — Constitutional Revolution"
        ],
        "rationale": "A fonte registra extensão ou restrição de direitos e igualdade no período, sustentando 57."
      }
    }
  },
  "iran-early-islamic-republic": {
    "id": "iran-early-islamic-republic",
    "kind": "country",
    "category": "historical-country",
    "name": "Irã — primeira versão constitucional islâmica",
    "period": "Primeira versão constitucional, 1979–1989; artigo 5 de 1979; revisão de 28/07/1989, sem fim da República Islâmica.",
    "vec": {
      "est": 50,
      "rep": 25,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 89,
      "con": 94,
      "com": 50,
      "rel": 3,
      "mor": 50,
      "tec": 50
    },
    "rationale": "A redação de 1979 atribuía liderança religiosa a um jurisprudente qualificado e reconhecido pela maioria da população.",
    "caveats": "A leitura de 1979 restringe-se à nota explicitamente identificada como redação original do artigo 5, incluindo reconhecimento pela maioria. O corpo principal é a revisão de 1989. Não se transportam sua redação econômica ou outros artigos ao período anterior; o regime continuou após 1989.",
    "sources": [
      {
        "title": "Constituição da República Islâmica",
        "url": "https://www.constituteproject.org/constitution/Iran_1989",
        "note": "Documento primário ou registro de arquivo relacionado ao período Revolução e nova Constituição, 1979–1989; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Encyclopaedia Iranica — Revolução de 1979",
        "url": "https://www.iranicaonline.org/articles/islamic-revolution-of-1979",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      },
      {
        "title": "OMPI — nota do artigo 5 na redação de 1979",
        "url": "https://www.wipo.int/wipolex/en/legislation/details/7697",
        "note": "A leitura de 1979 restringe-se à nota explicitamente identificada como redação original do artigo 5, incluindo reconhecimento pela maioria. O corpo principal é a revisão de 1989. Não se transportam sua redação econômica ou outros artigos ao período anterior; o regime continuou após 1989."
      },
      {
        "title": "Contexto institucional do período histórico",
        "url": "https://www.wipo.int/wipolex/en/legislation/details/14260",
        "note": "A leitura de 1979 restringe-se à nota explicitamente identificada como redação original do artigo 5, incluindo reconhecimento pela maioria. O corpo principal é a revisão de 1989. Não se transportam sua redação econômica ou outros artigos ao período anterior; o regime continuou após 1989."
      },
      {
        "title": "OMPI — datas da versão constitucional iraniana",
        "url": "https://www.wipo.int/wipolex/en/legislation/details/7697",
        "note": "Metadados da OMPI distinguem adoção em 24/10/1979, vigência em 03/12/1979 e revisão em 28/07/1989; a revisão não encerrou a República Islâmica."
      }
    ],
    "evidence": {
      "rep": "high",
      "eco": "medium",
      "con": "medium",
      "rel": "high"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constituição da República Islâmica",
          "Encyclopaedia Iranica — Revolução de 1979"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 25."
      },
      "eco": {
        "sourceTitles": [
          "Constituição da República Islâmica",
          "Encyclopaedia Iranica — Revolução de 1979"
        ],
        "rationale": "O documento descreve extensão de propriedade pública, provisão ou coordenação estatal, sustentando 89."
      },
      "con": {
        "sourceTitles": [
          "Constituição da República Islâmica",
          "Encyclopaedia Iranica — Revolução de 1979"
        ],
        "rationale": "A fonte documenta direção estatal da economia ou coordenação por mercado, sustentando 94."
      },
      "rel": {
        "sourceTitles": [
          "Constituição da República Islâmica",
          "Encyclopaedia Iranica — Revolução de 1979"
        ],
        "rationale": "A carta ou fonte documenta laicidade, religião de Estado ou autoridade religiosa, sustentando 3."
      }
    }
  },
  "israel-founding-government": {
    "id": "israel-founding-government",
    "kind": "country",
    "category": "historical-country",
    "name": "Israel — governo provisório de fundação",
    "period": "Governo provisório de fundação, maio de 1948–março de 1949; primeiro governo constituído em 10/03/1949.",
    "vec": {
      "est": 50,
      "rep": 78,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 77,
      "con": 82,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "A declaração de 1948 previa autoridades provisórias e prometia igualdade civil e política e liberdades religiosas e culturais.",
    "caveats": "As promessas de igualdade não certificam sua realização; o texto mantém finalidade estatal e imigratória judaica. A Lei de Transição preservava o governo provisório até o novo governo. O dia impresso de publicação dessa lei é inconsistente; aprovação, anúncio e início do novo governo são eventos distintos.",
    "sources": [
      {
        "title": "Declaração de Independência (1948)",
        "url": "https://www.knesset.gov.il/docs/eng/megilat_eng.htm",
        "note": "Documento primário ou registro de arquivo relacionado ao período Formação do Estado, 1948–1967; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Knesset — história institucional",
        "url": "https://main.knesset.gov.il/en/about/pages/history.aspx",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      },
      {
        "title": "ONU — comunicação da declaração de fundação de 1948",
        "url": "https://www.un.org/unispal/document/auto-insert-189917/",
        "note": "As promessas de igualdade não certificam sua realização; o texto mantém finalidade estatal e imigratória judaica. A Lei de Transição preservava o governo provisório até o novo governo. O dia impresso de publicação dessa lei é inconsistente; aprovação, anúncio e início do novo governo são eventos distintos."
      },
      {
        "title": "Knesset — Lei de Transição de 1949",
        "url": "https://main.knesset.gov.il/EN/About/History/Documents/kns1_transition_eng.pdf",
        "note": "Texto inglês recuperado no índice: art. 8 mantém o governo provisório até a formação do novo governo. A data de aprovação é 16/02/1949; a data impressa de publicação apresenta inconsistência."
      },
      {
        "title": "Knesset — primeiro governo",
        "url": "https://main.knesset.gov.il/en/mk/government/Pages/governments.aspx?govid=1",
        "note": "Registro institucional situa o início do primeiro governo em 10/03/1949; o anúncio de composição em 8 de março é um evento distinto."
      }
    ],
    "evidence": {
      "rep": "medium",
      "eco": "medium",
      "con": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Declaração de Independência (1948)",
          "Knesset — história institucional"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 78."
      },
      "eco": {
        "sourceTitles": [
          "Declaração de Independência (1948)",
          "Knesset — história institucional"
        ],
        "rationale": "O documento descreve extensão de propriedade pública, provisão ou coordenação estatal, sustentando 77."
      },
      "con": {
        "sourceTitles": [
          "Declaração de Independência (1948)",
          "Knesset — história institucional"
        ],
        "rationale": "A fonte documenta direção estatal da economia ou coordenação por mercado, sustentando 82."
      }
    }
  },
  "south-korea-park": {
    "id": "south-korea-park",
    "kind": "country",
    "category": "historical-country",
    "name": "Coreia do Sul — governo Park Chung-hee",
    "period": "Fase de Park, 1961–1979; carta de 27/12/1972; presidência de 1963 até sua morte em 26/10/1979.",
    "vec": {
      "est": 50,
      "rep": 21,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 77,
      "con": 87,
      "com": 50,
      "rel": 50,
      "mor": 29,
      "tec": 50
    },
    "rationale": "A carta de 1972 permitia suspender direitos por medidas presidenciais sem revisão judicial e dissolver a Assembleia.",
    "caveats": "A carta preservava direitos formais, partidos e mecanismos parlamentares de encerramento de medidas emergenciais. Essas normas não certificam liberdades efetivas nem coordenação econômica com conglomerados. A presidência de 1963 não é confundida com a tomada militar do poder em 1961.",
    "sources": [
      {
        "title": "Constituição Yushin (1972)",
        "url": "https://www.constituteproject.org/constitution/South_Korea_1972",
        "note": "Documento primário ou registro de arquivo relacionado ao período Regime desenvolvimentista, 1961–1979; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "National Archives of Korea — constituições",
        "url": "https://theme.archives.go.kr/next/constitution/constitutionRecordList.do",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      },
      {
        "title": "Constituição Yushin de 1972 — reprodução da tradução governamental",
        "url": "https://en.wikisource.org/wiki/Constitution_of_the_Republic_of_Korea_(1972)",
        "note": "A carta preservava direitos formais, partidos e mecanismos parlamentares de encerramento de medidas emergenciais. Essas normas não certificam liberdades efetivas nem coordenação econômica com conglomerados. A presidência de 1963 não é confundida com a tomada militar do poder em 1961."
      },
      {
        "title": "Documento de transição do período histórico",
        "url": "https://pa.go.kr/online_contents/president/history05.jsp",
        "note": "A carta preservava direitos formais, partidos e mecanismos parlamentares de encerramento de medidas emergenciais. Essas normas não certificam liberdades efetivas nem coordenação econômica com conglomerados. A presidência de 1963 não é confundida com a tomada militar do poder em 1961."
      },
      {
        "title": "Documento de transição do período histórico",
        "url": "https://www.korea.net/Government/Briefing-Room/Presidential-Speeches/view?articleId=170812&pageIndex=1",
        "note": "A carta preservava direitos formais, partidos e mecanismos parlamentares de encerramento de medidas emergenciais. Essas normas não certificam liberdades efetivas nem coordenação econômica com conglomerados. A presidência de 1963 não é confundida com a tomada militar do poder em 1961."
      }
    ],
    "evidence": {
      "rep": "high",
      "eco": "medium",
      "con": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constituição Yushin (1972)",
          "National Archives of Korea — constituições"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 21."
      },
      "eco": {
        "sourceTitles": [
          "Constituição Yushin (1972)",
          "National Archives of Korea — constituições"
        ],
        "rationale": "O documento descreve extensão de propriedade pública, provisão ou coordenação estatal, sustentando 77."
      },
      "con": {
        "sourceTitles": [
          "Constituição Yushin (1972)",
          "National Archives of Korea — constituições"
        ],
        "rationale": "A fonte documenta direção estatal da economia ou coordenação por mercado, sustentando 87."
      },
      "mor": {
        "sourceTitles": [
          "Constituição Yushin (1972)",
          "National Archives of Korea — constituições"
        ],
        "rationale": "A fonte registra extensão ou restrição de direitos e igualdade no período, sustentando 29."
      }
    }
  },
  "qing-dynasty-late": {
    "id": "qing-dynasty-late",
    "kind": "country",
    "category": "historical-country",
    "name": "China Qing — fase final de reformas constitucionais",
    "period": "Fase final de reformas constitucionais, 1908–1912; plano de 1908; abdicação imperial em 12/02/1912.",
    "vec": {
      "est": 50,
      "rep": 5,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 35,
      "tec": 50
    },
    "rationale": "O plano de 1908 subordinava Parlamento, leis e política externa à sanção imperial, com direitos limitados pela lei.",
    "caveats": "O sufrágio previsto era restrito e a autoridade imperial podia limitar liberdades; outro édito reprimia sociedades políticas. O plano era prospectivo, não prova de implementação. O recorte começa no documento de 1908, não cobre toda a reforma de 1898; a abdicação ocorreu em 1912, não em 1911.",
    "sources": [
      {
        "title": "Constituição Preparatória Qing (1908)",
        "url": "https://www.constituteproject.org/constitution/China_1908",
        "note": "Documento primário ou registro de arquivo relacionado ao período Reformas constitucionais, 1898–1911; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Library of Congress — coleções chinesas",
        "url": "https://www.loc.gov/collections/china-through-american-eyes/about-this-collection/",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      },
      {
        "title": "Arquivo diplomático dos EUA — plano constitucional imperial de 1908",
        "url": "https://history.state.gov/historicaldocuments/frus1908/d183",
        "note": "O sufrágio previsto era restrito e a autoridade imperial podia limitar liberdades; outro édito reprimia sociedades políticas. O plano era prospectivo, não prova de implementação. O recorte começa no documento de 1908, não cobre toda a reforma de 1898; a abdicação ocorreu em 1912, não em 1911."
      },
      {
        "title": "Arquivo diplomático dos EUA — cronologia da transição chinesa",
        "url": "https://history.state.gov/historicaldocuments/frus1912/ch11",
        "note": "Nota editorial institucional distingue a posse republicana de 01/01/1912 da abdicação imperial em 12/02/1912. Não é o texto do édito de abdicação."
      }
    ],
    "evidence": {
      "rep": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constituição Preparatória Qing (1908)",
          "Library of Congress — coleções chinesas"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 5."
      },
      "mor": {
        "sourceTitles": [
          "Constituição Preparatória Qing (1908)",
          "Library of Congress — coleções chinesas"
        ],
        "rationale": "A fonte registra extensão ou restrição de direitos e igualdade no período, sustentando 35."
      }
    }
  },
  "roc-mainland-1912": {
    "id": "roc-mainland-1912",
    "kind": "country",
    "category": "historical-country",
    "name": "China — República da China continental",
    "period": "Fase continental da República da China, 1912–1949; carta de 1947; governo central transferido a Taiwan em dezembro de 1949.",
    "vec": {
      "est": 50,
      "rep": 26,
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
    "rationale": "A carta de 1947 previa direitos civis, presidente eleito pela Assembleia Nacional e Executivo responsável ao Legislativo.",
    "caveats": "A carta permitia restrições legais às liberdades, serviço militar e decretos de crise. O texto de 1947 não descreve toda a fase iniciada em 1912. A mudança territorial de 1949 não extinguiu a República nem sua Constituição; emendas posteriores de Taiwan são distintas.",
    "sources": [
      {
        "title": "Constituição da República da China (1947)",
        "url": "https://www.constituteproject.org/constitution/China_1947",
        "note": "Documento primário ou registro de arquivo relacionado ao período República e governos do Kuomintang, 1912–1949; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Office of the Historian — China 1945–1950",
        "url": "https://history.state.gov/historicaldocuments/frus1945v07/d1",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      },
      {
        "title": "Presidência da República da China — texto constitucional de 1947",
        "url": "https://english.president.gov.tw/Page/94",
        "note": "A carta permitia restrições legais às liberdades, serviço militar e decretos de crise. O texto de 1947 não descreve toda a fase iniciada em 1912. A mudança territorial de 1949 não extinguiu a República nem sua Constituição; emendas posteriores de Taiwan são distintas."
      },
      {
        "title": "Arquivo diplomático dos EUA — cronologia da transição chinesa",
        "url": "https://history.state.gov/historicaldocuments/frus1912/ch11",
        "note": "Nota editorial institucional distingue a posse republicana de 01/01/1912 da abdicação imperial em 12/02/1912. Não é o texto do édito de abdicação."
      },
      {
        "title": "Presidência da República da China — transferência do governo",
        "url": "https://english.president.gov.tw/Page/83",
        "note": "História institucional registra a transferência do governo central para Taiwan em dezembro de 1949; a República e a Constituição não foram extintas nessa transferência."
      }
    ],
    "evidence": {
      "rep": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constituição da República da China (1947)",
          "Office of the Historian — China 1945–1950"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 26."
      }
    }
  },
  "german-confederation-1815": {
    "id": "german-confederation-1815",
    "name": "Confederação Germânica",
    "aliases": [
      "Deutscher Bund"
    ],
    "period": "Ordem confederal dos atos de 1815 e 1820, 1815–1866; dissolução reconhecida na paz preliminar de julho de 1866.",
    "rationale": "Estados soberanos eram representados por enviados dos governos; assembleias territoriais participavam sob autoridade principesca.",
    "caveats": "A associação previa defesa coletiva e intervenção interna; havia garantias de assembleias territoriais, privilégios aristocráticos e diferenças de direitos religiosos. Os excertos são traduções, não o conjunto integral dos atos. A paz preliminar de julho não substitui o tratado final de agosto de 1866.",
    "sources": [
      {
        "title": "German Federal Act, 8 June 1815 — GHDI",
        "url": "https://germanhistorydocs.org/en/from-vormaerz-to-prussian-dominance-1815-1866/german-federal-act-june-8-1815",
        "note": "Seleções primárias traduzidas: soberania dos membros e assembleia de plenipotenciários; contexto identifica encerramento em agosto de 1866."
      },
      {
        "title": "Final Act of the Viennese Ministerial Conferences, 15 May 1820 — GHDI",
        "url": "https://germanhistorydocs.org/en/from-vormaerz-to-prussian-dominance-1815-1866/final-act-of-the-viennese-ministerial-conferences-may-15-1820",
        "note": "Seleções primárias traduzidas: artigos 53–59 sobre autonomia interna, assembleias estamentais e autoridade principesca."
      },
      {
        "title": "Die Deutsche Bundesakte von 1815 — Deutsches Historisches Museum",
        "url": "https://www.dhm.de/lemo/kapitel/vormaerz-und-revolution/wiener-kongress/bundesakte",
        "note": "Contexto do museu nacional sobre enviados vinculados aos governos e ausência de representação popular confederal, com limites das assembleias locais."
      },
      {
        "title": "Instituto Histórico Alemão — Ato Federal de 1815",
        "url": "https://germanhistorydocs.org/en/from-vormaerz-to-prussian-dominance-1815-1866/german-federal-act-june-8-1815",
        "note": "A associação previa defesa coletiva e intervenção interna; havia garantias de assembleias territoriais, privilégios aristocráticos e diferenças de direitos religiosos. Os excertos são traduções, não o conjunto integral dos atos. A paz preliminar de julho não substitui o tratado final de agosto de 1866."
      },
      {
        "title": "Instituto Histórico Alemão — paz preliminar de Nikolsburg, 1866",
        "url": "https://germanhistorydocs.org/en/forging-an-empire-bismarckian-germany-1866-1890/preliminary-peace-of-nikolsburg-july-26-1866",
        "note": "Tradução inglesa da paz preliminar de 26/07/1866: art. II reconhece a dissolução da Confederação. Não equivale ao tratado final de Praga de agosto; tradução histórica, sem cotejo integral do alemão."
      }
    ],
    "kind": "country",
    "category": "historical-country",
    "vec": {
      "est": 80,
      "rep": 20,
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
      "est": "high",
      "rep": "high"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "German Federal Act, 8 June 1815 — GHDI",
          "Final Act of the Viennese Ministerial Conferences, 15 May 1820 — GHDI"
        ],
        "rationale": "Autonomia institucional interna e membros soberanos sustentam descentralização forte, embora exista obrigação e órgão confederal comum. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Estados associados não são equivalentes a entes de uma federação moderna; a âncora expressa apenas o polo descentralizador. Prússia e Áustria tinham poder desigual e o ato admitia obrigações conjuntas."
      },
      "rep": {
        "sourceTitles": [
          "Final Act of the Viennese Ministerial Conferences, 15 May 1820 — GHDI",
          "Die Deutsche Bundesakte von 1815 — Deutsches Historisches Museum"
        ],
        "rationale": "No nível confederal, representação dos soberanos e reserva monárquica de autoridade sustentam direção autocrática forte; representação dos Estados não equivale a voto dos cidadãos. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Não se afirma ausência de toda instituição representativa nos Estados; cidades livres e constituições locais são contrapontos. A ruptura revolucionária de 1848–1849 impede ler o vetor como regime homogêneo ininterrupto."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "strong-first",
        "confidence": "high",
        "relatedQuestionIds": [
          "estrutura_01",
          "estrutura_05"
        ],
        "claims": [
          {
            "sourceTitle": "German Federal Act, 8 June 1815 — GHDI",
            "locator": "Articles 1–4 and 11",
            "statement": "Os Estados soberanos formam união permanente com assembleia comum e conservam direitos de alianças sob limites federais.",
            "basis": "norm",
            "publishedDate": "1815-06-08",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Final Act of the Viennese Ministerial Conferences, 15 May 1820 — GHDI",
            "locator": "Article 53",
            "statement": "A autonomia garantida exclui em regra interferência confederal nas instituições e administração internas dos Estados, com exceções de obrigações comuns.",
            "basis": "norm",
            "publishedDate": "1820-05-15",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Autonomia institucional interna e membros soberanos sustentam descentralização forte, embora exista obrigação e órgão confederal comum.",
        "uncertainty": "Estados associados não são equivalentes a entes de uma federação moderna; a âncora expressa apenas o polo descentralizador. Prússia e Áustria tinham poder desigual e o ato admitia obrigações conjuntas.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "rep": {
        "axis": "rep",
        "position": "strong-second",
        "confidence": "high",
        "relatedQuestionIds": [
          "representacao_10",
          "representacao_15"
        ],
        "claims": [
          {
            "sourceTitle": "Final Act of the Viennese Ministerial Conferences, 15 May 1820 — GHDI",
            "locator": "Articles 54–59, especialmente 57",
            "statement": "O poder estatal é reservado aos soberanos, com participação limitada de assembleias estamentais e exceção das cidades livres.",
            "basis": "norm",
            "publishedDate": "1820-05-15",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Die Deutsche Bundesakte von 1815 — Deutsches Historisches Museum",
            "locator": "Parágrafos que começam “Einziges Bundesorgan” e “Der Deutsche Bund besaß”",
            "statement": "A assembleia comum consistia de enviados instruídos pelos governos; não existia representação popular confederal.",
            "basis": "practice",
            "publishedDate": "2014-10-10; contexto histórico de 1815–1866",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "No nível confederal, representação dos soberanos e reserva monárquica de autoridade sustentam direção autocrática forte; representação dos Estados não equivale a voto dos cidadãos.",
        "uncertainty": "Não se afirma ausência de toda instituição representativa nos Estados; cidades livres e constituições locais são contrapontos. A ruptura revolucionária de 1848–1849 impede ler o vetor como regime homogêneo ininterrupto.",
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
      "scope": "Atos constitutivos e contexto institucional examinados; variações locais e revolução explicitamente delimitadas."
    },
    "unknownAxisReasons": {
      "pod": "A lei de imprensa de 1819 foi localizada, mas não estabelecemos uma leitura de implementação e mudanças para todos os 51 anos; o eixo permanece desconhecido.",
      "imi": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "dip": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "int": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "eco": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "con": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "com": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "rel": "Igualdade entre confissões cristãs e desigualdade de cidadania judaica não estabelecem um único regime Estado–religião para todos os membros.",
      "mor": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "tec": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação."
    }
  },
  "afghanistan-constitutional-monarchy-1964": {
    "id": "afghanistan-constitutional-monarchy-1964",
    "name": "Afeganistão — monarquia constitucional",
    "aliases": [],
    "period": "Monarquia sob a carta de 1964 até o golpe republicano de 1973; o dia exato de promulgação não foi confirmado.",
    "rationale": "A carta de 1964 estabelecia monarquia unitária; o rei nomeava ministros e podia dissolver o Parlamento para novas eleições.",
    "caveats": "Os poderes reais estavam formalmente sujeitos à Constituição, mas o rei era irresponsável. Islamismo estatal, limites aos ritos e exclusão da família real de partidos permanecem no texto. O catálogo institucional confirma substituição pelo golpe de 1973; o dia exato de promulgação não foi recuperado.",
    "sources": [
      {
        "title": "Afghanistan Constitution 1964 — edição histórica traduzida",
        "url": "https://www.constituteproject.org/constitution/Afghanistan_1964",
        "note": "Texto primário transcrito/traduzido: locadores em coding. Edição consultada em 7/10/2026; não constitui certificação arquivística."
      },
      {
        "title": "Constituição afegã de 1964 — tradução histórica",
        "url": "https://www.constituteproject.org/constitution/Afghanistan_1964",
        "note": "Os poderes reais estavam formalmente sujeitos à Constituição, mas o rei era irresponsável. Islamismo estatal, limites aos ritos e exclusão da família real de partidos permanecem no texto. O catálogo institucional confirma substituição pelo golpe de 1973; o dia exato de promulgação não foi recuperado."
      },
      {
        "title": "Documento de transição do período histórico",
        "url": "https://peacemaker.un.org/fr/node/1807",
        "note": "Os poderes reais estavam formalmente sujeitos à Constituição, mas o rei era irresponsável. Islamismo estatal, limites aos ritos e exclusão da família real de partidos permanecem no texto. O catálogo institucional confirma substituição pelo golpe de 1973; o dia exato de promulgação não foi recuperado."
      }
    ],
    "kind": "country",
    "category": "historical-country",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 40,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 40,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "pod": "medium",
      "rel": "medium"
    },
    "axisEvidence": {
      "pod": {
        "sourceTitles": [
          "Afghanistan Constitution 1964 — edição histórica traduzida"
        ],
        "rationale": "Garantias processuais e expressão sustentam liberdade moderada formal. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Monopólio estatal de rádio/TV e limites legais contrariam leitura irrestrita."
      },
      "rel": {
        "sourceTitles": [
          "Afghanistan Constitution 1964 — edição histórica traduzida"
        ],
        "rationale": "Confissão institucional com tolerância limitada sustenta polo religioso moderado. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não extrapola à intensidade de crença popular ou à totalidade da lei religiosa."
      }
    },
    "coding": {
      "pod": {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Afghanistan Constitution 1964 — edição histórica traduzida",
            "locator": "Arts.26,28,30–32",
            "statement": "Texto proíbe tortura e exige controle judicial de detenção; protege expressão sem aprovação prévia, com exceções urgentes de busca.",
            "basis": "norm",
            "publishedDate": "1964-10-01",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Garantias processuais e expressão sustentam liberdade moderada formal.",
        "uncertainty": "Monopólio estatal de rádio/TV e limites legais contrariam leitura irrestrita.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "rel": {
        "axis": "rel",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Afghanistan Constitution 1964 — edição histórica traduzida",
            "locator": "Arts.2,7–8",
            "statement": "Ritos estatais seguem doutrina Hanafi e rei deve professá-la; não muçulmanos mantêm ritos dentro de limites legais.",
            "basis": "norm",
            "publishedDate": "1964-10-01",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Confissão institucional com tolerância limitada sustenta polo religioso moderado.",
        "uncertainty": "Não extrapola à intensidade de crença popular ou à totalidade da lei religiosa.",
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
      "scope": "Cláusulas delimitadas lidas pelo autor; prática e validação independente integral pendentes."
    },
    "unknownAxisReasons": {
      "est": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "rep": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "imi": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "dip": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "int": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "eco": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "con": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "com": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "mor": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "tec": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação."
    }
  },
  "nepal-multiparty-monarchy-1990": {
    "id": "nepal-multiparty-monarchy-1990",
    "name": "Nepal — monarquia multipartidária",
    "aliases": [],
    "period": "Ordem da carta de 09/11/1990 até sua revogação em 15/01/2007; a monarquia só foi abolida posteriormente.",
    "rationale": "A carta de 1990 previa partidos competitivos, voto aos 18 anos e gabinete responsável à Câmara, sob monarquia hindu.",
    "caveats": "O texto preservava Estado hindu, restrições à crítica do rei, cidadania paterna e membros nomeados. A edição inglesa tem ajustes editoriais declarados. A fonte sucessora consultada está consolidada até 2008, mas distingue vigência em janeiro de 2007; não se antecipa a abolição da monarquia.",
    "sources": [
      {
        "title": "Constitution of the Kingdom of Nepal 1990 — tradução oficial editada pelo ICL",
        "url": "https://www.servat.unibe.ch/icl/np00000_.html",
        "note": "Texto primário transcrito/traduzido: locadores em coding. Edição consultada em 7/10/2026; não constitui certificação arquivística."
      },
      {
        "title": "Constituição nepalesa de 1990 — edição inglesa do ICL",
        "url": "https://www.servat.unibe.ch/icl/np00000_.html",
        "note": "O texto preservava Estado hindu, restrições à crítica do rei, cidadania paterna e membros nomeados. A edição inglesa tem ajustes editoriais declarados. A fonte sucessora consultada está consolidada até 2008, mas distingue vigência em janeiro de 2007; não se antecipa a abolição da monarquia."
      },
      {
        "title": "Documento de transição do período histórico",
        "url": "https://www.wipo.int/wipolex/en/legislation/details/7236",
        "note": "O texto preservava Estado hindu, restrições à crítica do rei, cidadania paterna e membros nomeados. A edição inglesa tem ajustes editoriais declarados. A fonte sucessora consultada está consolidada até 2008, mas distingue vigência em janeiro de 2007; não se antecipa a abolição da monarquia."
      }
    ],
    "kind": "country",
    "category": "historical-country",
    "vec": {
      "est": 50,
      "rep": 60,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 40,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "rep": "medium",
      "rel": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constitution of the Kingdom of Nepal 1990 — tradução oficial editada pelo ICL"
        ],
        "rationale": "Competição multipartidária e responsabilidade legislativa sustentam representação moderada formal. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Poderes reservados e crises régias posteriores não são descritos como funcionamento contínuo."
      },
      "rel": {
        "sourceTitles": [
          "Constitution of the Kingdom of Nepal 1990 — tradução oficial editada pelo ICL"
        ],
        "rationale": "Identidade confessional e limite à conversão sustentam polo religioso moderado. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não infere lei religiosa predominante nem fé individual."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constitution of the Kingdom of Nepal 1990 — tradução oficial editada pelo ICL",
            "locator": "Preâmbulo; arts.35–36,42,45–46",
            "statement": "Governo depende da maioria e confiança parlamentar; cidadãos maiores de18 votam em câmara eleita, com dez nomeados régios na câmara alta.",
            "basis": "norm",
            "publishedDate": "1990-11-09",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Competição multipartidária e responsabilidade legislativa sustentam representação moderada formal.",
        "uncertainty": "Poderes reservados e crises régias posteriores não são descritos como funcionamento contínuo.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "rel": {
        "axis": "rel",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constitution of the Kingdom of Nepal 1990 — tradução oficial editada pelo ICL",
            "locator": "Arts.4,19",
            "statement": "Reino define-se hindu; protege religiões herdadas e sua administração, mas proíbe converter outra pessoa.",
            "basis": "norm",
            "publishedDate": "1990-11-09",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Identidade confessional e limite à conversão sustentam polo religioso moderado.",
        "uncertainty": "Não infere lei religiosa predominante nem fé individual.",
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
      "scope": "Cláusulas delimitadas lidas pelo autor; prática e validação independente integral pendentes."
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
      "mor": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "tec": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação."
    }
  }
} as unknown as Record<string,ReferenceEntry>;

const allowedFields = {
  "greece-military-junta": [
    "sources",
    "caveats",
    "rationale",
    "period"
  ],
  "ottoman-tanzimat": [
    "sources",
    "caveats",
    "rationale",
    "name",
    "period"
  ],
  "british-raj": [
    "sources",
    "caveats",
    "rationale",
    "period"
  ],
  "pakistan-zia": [
    "sources",
    "caveats",
    "rationale",
    "period"
  ],
  "bangladesh-mujib": [
    "sources",
    "caveats",
    "rationale",
    "period"
  ],
  "iran-pahlavi": [
    "sources",
    "caveats",
    "rationale",
    "period"
  ],
  "iran-constitutional-revolution": [
    "sources",
    "caveats",
    "rationale",
    "period"
  ],
  "iran-early-islamic-republic": [
    "sources",
    "caveats",
    "rationale",
    "name",
    "period"
  ],
  "israel-founding-government": [
    "sources",
    "caveats",
    "rationale",
    "name",
    "period"
  ],
  "south-korea-park": [
    "sources",
    "caveats",
    "rationale",
    "period"
  ],
  "qing-dynasty-late": [
    "sources",
    "caveats",
    "rationale",
    "name",
    "period"
  ],
  "roc-mainland-1912": [
    "sources",
    "caveats",
    "rationale",
    "period"
  ],
  "german-confederation-1815": [
    "caveats",
    "rationale",
    "sources",
    "period"
  ],
  "afghanistan-constitutional-monarchy-1964": [
    "caveats",
    "rationale",
    "sources",
    "period"
  ],
  "nepal-multiparty-monarchy-1990": [
    "caveats",
    "rationale",
    "sources",
    "period"
  ]
} as Record<string, (keyof ReferenceEntry)[]>;
export function reconcileHistoricalCountryProvenance06(entry:ReferenceEntry):ReferenceEntry {
 const before=historicalCountryProvenance06Before[entry.id], proposal=historicalCountryProvenance06Proposals[entry.id];
 if(!before||!proposal||JSON.stringify(entry)!==JSON.stringify(before)) return entry;
 const patch:Partial<ReferenceEntry>={};
 for(const key of allowedFields[entry.id]) {
  if(key==='sources') patch.sources=proposal.sources.map(source=>entry.sources.find(old=>JSON.stringify(old)===JSON.stringify(source))??source);
  else Object.assign(patch,{[key]:proposal[key]});
 }
 return {...entry,...patch};
}
