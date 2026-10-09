import type {ReferenceEntry} from './references';

// Complete literal prior and accepted post records; no score or coding changes.
export const historicalCountryProvenance04Before = {
  "german-empire-1871": {
    "id": "german-empire-1871",
    "kind": "country",
    "category": "historical-country",
    "name": "Império Alemão",
    "period": "Constituição federal monárquica, 1871–1918",
    "vec": {
      "est": 68,
      "rep": 38,
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
    "rationale": "Constituição formou federação monárquica e Reichstag eleito com poder limitado.",
    "caveats": "Recorte institucional datado; não representa a população, povos subordinados nem governos fora do período. Texto define forma legal, não equilíbrio real nem direitos em colônias. Eixos sem evidência suficiente permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "Constituição do Império Alemão (1871)",
        "url": "https://ghdi.ghi-dc.org/sub_document.cfm?document_id=1845",
        "note": "Documento primário ou registro de arquivo relacionado ao período Constituição federal monárquica, 1871–1918; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Office of the Historian — texto constitucional",
        "url": "https://history.state.gov/historicaldocuments/frus1871/d189",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      }
    ],
    "evidence": {
      "est": "high",
      "rep": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Constituição do Império Alemão (1871)",
          "Office of the Historian — texto constitucional"
        ],
        "rationale": "A carta constitucional descreve a distribuição territorial de poder, sustentando a posição federal/descentralizada codificada."
      },
      "rep": {
        "sourceTitles": [
          "Constituição do Império Alemão (1871)",
          "Office of the Historian — texto constitucional"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 38."
      }
    }
  },
  "germany-third-reich": {
    "id": "germany-third-reich",
    "kind": "country",
    "category": "historical-country",
    "name": "Alemanha — regime nazista",
    "period": "Ditadura nacional-socialista, 1933–1945",
    "vec": {
      "est": 50,
      "rep": 0,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 0,
      "tec": 50
    },
    "rationale": "Lei destruiu separação de poderes; regime suprimiu direitos e perpetrava genocídio.",
    "caveats": "Recorte institucional datado; não representa a população, povos subordinados nem governos fora do período. Eixos econômicos e militares exigiriam fonte e codificação próprias; não reduzir vítimas a vetor. Eixos sem evidência suficiente permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "Lei de Plenos Poderes (1933)",
        "url": "https://ghdi.ghi-dc.org/sub_document.cfm?document_id=1494",
        "note": "Documento primário ou registro de arquivo relacionado ao período Ditadura nacional-socialista, 1933–1945; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "United States Holocaust Memorial Museum — Nazi state",
        "url": "https://encyclopedia.ushmm.org/content/en/article/the-nazi-state",
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
          "Lei de Plenos Poderes (1933)",
          "United States Holocaust Memorial Museum — Nazi state"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 0."
      },
      "mor": {
        "sourceTitles": [
          "Lei de Plenos Poderes (1933)",
          "United States Holocaust Memorial Museum — Nazi state"
        ],
        "rationale": "A fonte registra extensão ou restrição de direitos e igualdade no período, sustentando 0."
      }
    }
  },
  "russian-empire-1906": {
    "id": "russian-empire-1906",
    "kind": "country",
    "category": "historical-country",
    "name": "Império Russo — ordem constitucional tardia",
    "period": "Duma e monarquia imperial, 1906–1917",
    "vec": {
      "est": 50,
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
    "rationale": "Duma limitada coexistiu com autocracia; leis preservaram poder imperial.",
    "caveats": "Recorte institucional datado; não representa a população, povos subordinados nem governos fora do período. Reformas após 1905 foram parciais e eleitorado restrito. Eixos sem evidência suficiente permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "Leis Fundamentais do Estado Russo (1906)",
        "url": "https://www.prlib.ru/en/history/619187",
        "note": "Documento primário ou registro de arquivo relacionado ao período Duma e monarquia imperial, 1906–1917; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Biblioteca Presidencial Russa — história constitucional",
        "url": "https://www.prlib.ru/en/history/619187",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      }
    ],
    "evidence": {
      "rep": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Leis Fundamentais do Estado Russo (1906)",
          "Biblioteca Presidencial Russa — história constitucional"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 20."
      }
    }
  },
  "russian-provisional-1917": {
    "id": "russian-provisional-1917",
    "kind": "country",
    "category": "historical-country",
    "name": "Rússia — Governo Provisório",
    "period": "Entre duas revoluções, março–novembro de 1917",
    "vec": {
      "est": 50,
      "rep": 64,
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
    "rationale": "Aboliu restrições legais e prometeu assembleia constituinte, mas não consolidou autoridade.",
    "caveats": "Recorte institucional datado; não representa a população, povos subordinados nem governos fora do período. O governo durou meses em guerra e colapso estatal. Eixos sem evidência suficiente permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "Declaração de direitos do Governo Provisório",
        "url": "https://www.prlib.ru/en/history/619365",
        "note": "Documento primário ou registro de arquivo relacionado ao período Entre duas revoluções, março–novembro de 1917; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Biblioteca Presidencial Russa — revolução",
        "url": "https://www.prlib.ru/en/history/619362",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      }
    ],
    "evidence": {
      "rep": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Declaração de direitos do Governo Provisório",
          "Biblioteca Presidencial Russa — revolução"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 64."
      }
    }
  },
  "us-articles-confederation-1781": {
    "id": "us-articles-confederation-1781",
    "name": "Estados Unidos — Artigos da Confederação",
    "aliases": [
      "Confederação norte-americana sob os Artigos de 1781"
    ],
    "period": "Ordem confederal dos Artigos, 1781–1789",
    "rationale": "Os Estados preservavam poderes não delegados; o Congresso comum operava sob competências enumeradas e dependência financeira dos Estados.",
    "caveats": "O perfil trata da ordem anterior à Constituição federal de 1789, não do New Deal, da Reconstrução nem dos Estados Confederados de 1861. Confederação e federação moderna não são equivalentes. Não codificamos eleitorados estaduais nem presumimos direitos universais.",
    "sources": [
      {
        "title": "Articles of Confederation (1777) — National Archives",
        "url": "https://www.archives.gov/milestone-documents/articles-of-confederation",
        "note": "Transcrição primária e contexto arquivístico: vigência em 1781–1789, artigos II, V, VIII, IX e XIII e limitações fiscais efetivas do Congresso."
      }
    ],
    "kind": "country",
    "category": "historical-country",
    "vec": {
      "est": 80,
      "rep": 50,
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
      "est": "high"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Articles of Confederation (1777) — National Archives"
        ],
        "rationale": "Autonomia constitucional residual e dependência financeira do centro sustentam direção descentralizadora forte no eixo federal/unitário, não apenas a palavra confederação. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: A âncora 80 representa descentralização confederal formal e não mede uma intensidade comparável estatisticamente a federações atuais. Congresso tinha competências comuns reais; não era ausência completa de governo central."
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
            "sourceTitle": "Articles of Confederation (1777) — National Archives",
            "locator": "Transcript, articles II, V, VIII, IX and XIII",
            "statement": "Poderes residuais permanecem nos Estados; delegados podem ser revogados; financiamento comum depende da arrecadação estadual. Há competências congressuais enumeradas e alterações unânimes.",
            "basis": "norm",
            "publishedDate": "1777-11-15; vigência a partir de 1781-03-01",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Articles of Confederation (1777) — National Archives",
            "locator": "Contexto antes de “Transcript”, parágrafos sobre tributação e comércio",
            "statement": "O arquivo descreve insuficiência efetiva de poderes centrais para tributar e regular comércio, corroborando a autonomia estadual sem confundir fraqueza fiscal com planejamento econômico.",
            "basis": "practice",
            "publishedDate": "Página institucional revisada em 2023-10-23; relata 1781–1789",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Autonomia constitucional residual e dependência financeira do centro sustentam direção descentralizadora forte no eixo federal/unitário, não apenas a palavra confederação.",
        "uncertainty": "A âncora 80 representa descentralização confederal formal e não mede uma intensidade comparável estatisticamente a federações atuais. Congresso tinha competências comuns reais; não era ausência completa de governo central.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      }
    },
    "documentaryReview": {
      "status": "author-reviewed-bounded-claims",
      "reviewedOn": "2026-10-07",
      "independentReview": "pending",
      "scope": "Artigos institucionais e contexto fiscal lidos; somente estrutura territorial codificada."
    },
    "unknownAxisReasons": {
      "rep": "Delegados estaduais não informam, sozinhos, o alcance do sufrágio ou a democracia efetiva de toda a confederação.",
      "pod": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "imi": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "dip": "Limites a tropas em paz coexistem com defesa e milícias; não se inferiu pacifismo.",
      "int": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "eco": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "con": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "com": "Regras de trânsito e comércio entre Estados não demonstram a orientação geral do comércio internacional.",
      "rel": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "mor": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "tec": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação."
    }
  },
  "sardinia-statuto-1848": {
    "id": "sardinia-statuto-1848",
    "name": "Reino da Sardenha — monarquia estatutária",
    "aliases": [
      "Reino da Sardenha sob o Statuto Albertino"
    ],
    "period": "Monarquia representativa do Statuto Albertino, 1848–1861",
    "rationale": "A carta combina prerrogativas reais, câmara eletiva, garantias individuais e religião católica estatal com tolerância legal a outros cultos.",
    "caveats": "O objeto é a ordem formal do reino anterior à aplicação do estatuto à Itália unificada em 1861. Não estende a carta à ditadura fascista já catalogada. Evolução parlamentar, legislação eleitoral e execução das liberdades exigem pesquisa adicional; não tratamos texto normativo como medição de prática.",
    "sources": [
      {
        "title": "Statuto Albertino, 4 marzo 1848 — Quirinale",
        "url": "https://www.quirinale.it/allegati_statici/costituzione/Statutoalbertino.pdf",
        "note": "Texto primário italiano preservado pela Presidência; páginas 1–5, artigos 1–10, 26–33 e 39–47."
      },
      {
        "title": "Statuto Albertino — tradução histórica em Wikisource",
        "url": "https://en.wikisource.org/wiki/Statuto_Albertino",
        "note": "Tradução histórica do documento com ligação a fac-símile; cabeçalho distingue Sardenha (1848) e Itália (1861). A codificação usa a edição italiana oficial, não notas posteriores da tradução."
      }
    ],
    "kind": "country",
    "category": "historical-country",
    "vec": {
      "est": 50,
      "rep": 40,
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
      "rep": "medium",
      "pod": "medium",
      "rel": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Statuto Albertino, 4 marzo 1848 — Quirinale"
        ],
        "rationale": "O desenho reserva poder material à Coroa sem eliminar a representação eletiva, justificando direção monárquica/autocrática moderada, em vez de equiparar monarquia constitucional a ditadura plena. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Este é o desenho da carta. Não quantificamos o eleitorado nem a evolução da responsabilidade parlamentar de gabinetes no período; por isso grau médio e âncora moderada."
      },
      "pod": {
        "sourceTitles": [
          "Statuto Albertino, 4 marzo 1848 — Quirinale"
        ],
        "rationale": "Garantias contra coerção arbitrária sustentam inclinação moderada à liberdade no recorte formal, contida pelas exceções policiais e de publicação. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não é avaliação da repressão efetiva, de prisões políticas ou de liberdade para toda a população. As exceções impedem posição forte; aplicação histórica ainda não foi revisada."
      },
      "rel": {
        "sourceTitles": [
          "Statuto Albertino, 4 marzo 1848 — Quirinale"
        ],
        "rationale": "Religião estabelecida e papel institucional religioso sustentam direção religiosa moderada, limitada pela tolerância declarada a outros cultos. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não se infere teocracia, domínio geral do direito religioso, crença dos habitantes nem ausência de conflito entre Coroa e Igreja. Estado confessional com tolerância não autoriza automaticamente âncora forte."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-second",
        "confidence": "medium",
        "relatedQuestionIds": [
          "representacao_10",
          "representacao_15"
        ],
        "claims": [
          {
            "sourceTitle": "Statuto Albertino, 4 marzo 1848 — Quirinale",
            "locator": "Articles 2–9, 33 and 39–47; PDF pp. 1–5",
            "statement": "O rei exerce Executivo e nomeia o Senado vitalício; leis dependem de rei e duas câmaras. A câmara dos deputados é eletiva e possui mecanismos legislativos e de acusação ministerial.",
            "basis": "norm",
            "publishedDate": "1848-03-04",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "O desenho reserva poder material à Coroa sem eliminar a representação eletiva, justificando direção monárquica/autocrática moderada, em vez de equiparar monarquia constitucional a ditadura plena.",
        "uncertainty": "Este é o desenho da carta. Não quantificamos o eleitorado nem a evolução da responsabilidade parlamentar de gabinetes no período; por isso grau médio e âncora moderada.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "pod": {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "relatedQuestionIds": [
          "poder_04",
          "poder_19"
        ],
        "claims": [
          {
            "sourceTitle": "Statuto Albertino, 4 marzo 1848 — Quirinale",
            "locator": "Articles 26–28, 32 and 71; PDF pp. 3 and 7",
            "statement": "A carta protege liberdade individual, domicílio e processo legal, declara imprensa livre e veda tribunais extraordinários; permite repressão de abusos e submete reuniões públicas à polícia.",
            "basis": "norm",
            "publishedDate": "1848-03-04",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Garantias contra coerção arbitrária sustentam inclinação moderada à liberdade no recorte formal, contida pelas exceções policiais e de publicação.",
        "uncertainty": "Não é avaliação da repressão efetiva, de prisões políticas ou de liberdade para toda a população. As exceções impedem posição forte; aplicação histórica ainda não foi revisada.",
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
        "relatedQuestionIds": [
          "religiao_03",
          "religiao_08"
        ],
        "claims": [
          {
            "sourceTitle": "Statuto Albertino, 4 marzo 1848 — Quirinale",
            "locator": "Articles 1, 28 and 33(1); PDF pp. 1, 3 and 4",
            "statement": "O catolicismo é religião estatal; outros cultos são tolerados conforme lei. Livros religiosos dependem de permissão episcopal e arcebispos/bispos são uma categoria elegível ao Senado.",
            "basis": "norm",
            "publishedDate": "1848-03-04",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Religião estabelecida e papel institucional religioso sustentam direção religiosa moderada, limitada pela tolerância declarada a outros cultos.",
        "uncertainty": "Não se infere teocracia, domínio geral do direito religioso, crença dos habitantes nem ausência de conflito entre Coroa e Igreja. Estado confessional com tolerância não autoriza automaticamente âncora forte.",
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
      "scope": "Passagens normativas italianas e identificação histórica da tradução lidas; prática parlamentar/eleitoral não certificada."
    },
    "unknownAxisReasons": {
      "est": "Monarquia e leis sobre municípios, isoladamente, não bastam para estimar a distribuição real de competências territoriais.",
      "imi": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "dip": "Comando militar do rei não estabelece militarismo de todo o regime.",
      "int": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "eco": "Proteção constitucional da propriedade não mede composição pública/privada da economia.",
      "con": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "com": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "mor": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "tec": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação."
    }
  },
  "republic-texas-1836": {
    "id": "republic-texas-1836",
    "name": "República do Texas",
    "aliases": [
      "Republic of Texas"
    ],
    "period": "República independente sob a Constituição de 1836, 1836–1845",
    "rationale": "Instituições republicanas eletivas e proibição de preferência denominacional coexistiam com cidadania racialmente excludente e escravidão constitucionalmente protegida.",
    "caveats": "Trata de uma república historicamente independente, reconhecida pelos EUA em 1837, não do atual Estado federado. A anexação ocorreu em dezembro de 1845 e a transferência cerimonial em fevereiro de 1846. O território era disputado; eleições dos cidadãos admitidos não tornam universal a democracia nem os direitos declarados.",
    "sources": [
      {
        "title": "Constitution of the Republic of Texas, 17 March 1836 — Washington on the Brazos",
        "url": "https://wheretexasbecametexas.org/texas-history/constitution-of-the-republic-of-texas-1836/",
        "note": "Transcrição primária de Laws of the Republic of Texas (1838), vol. I, pp. 9–25, no sítio histórico de Washington on the Brazos; artigos eleitorais e declaração de direitos confrontados com exclusões gerais."
      },
      {
        "title": "Texas — Office of the Historian, U.S. Department of State",
        "url": "https://history.state.gov/countries/texas",
        "note": "Arquivo diplomático oficial documenta reconhecimento, anexação e dependência efetiva do trabalho escravizado na economia algodoeira."
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
      "rel": 60,
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
          "Constitution of the Republic of Texas, 17 March 1836 — Washington on the Brazos",
          "Texas — Office of the Historian, U.S. Department of State"
        ],
        "rationale": "A direção moderadamente democrática codifica eleições e responsabilização constitucional no grupo de cidadãos admitidos; a exclusão racial da cidadania e a reserva masculina de cargos limitam a inclusão política e impedem posição forte. O confronto com voto universal usa a exclusão racial explícita, sem extrair uma regra de sufrágio feminino apenas da cláusula sobre cargos. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não é certificado de competição livre efetiva nem de democracia inclusiva; a âncora resolve editorialmente um desenho eletivo com exclusões profundas, não calcula média entre direitos dos cidadãos e dos escravizados."
      },
      "rel": {
        "sourceTitles": [
          "Constitution of the Republic of Texas, 17 March 1836 — Washington on the Brazos"
        ],
        "rationale": "Não preferência denominacional e separação de cargos clericais sustentam laicidade institucional moderada, sem imputar irreligiosidade privada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: A linguagem da proteção é teísta e a proibição de cargos clericais também restringe direitos; não demonstramos neutralidade completa perante não crentes, financiamento religioso nem a prática de todas as políticas."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "relatedQuestionIds": [
          "representacao_01",
          "representacao_07",
          "representacao_16"
        ],
        "claims": [
          {
            "sourceTitle": "Constitution of the Republic of Texas, 17 March 1836 — Washington on the Brazos",
            "locator": "Articles I–III and VI(11–16); Schedule 3; General Provisions 6, 9–10",
            "statement": "Congresso e presidência têm eleições e limites de mandato; cidadania exclui africanos, descendentes e indígenas, e cargos são reservados a cidadãos homens. O sufrágio não é universal.",
            "basis": "norm",
            "publishedDate": "1836-03-17; transcrição de edição de 1838",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Texas — Office of the Historian, U.S. Department of State",
            "locator": "“Slavery and Cotton”",
            "statement": "O arquivo descreve dependência do trabalho escravizado na produção de algodão, confrontando as declarações abstratas de igualdade da Constituição.",
            "basis": "practice",
            "publishedDate": "Página institucional sem data de publicação indicada; relata 1836–1845",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "A direção moderadamente democrática codifica eleições e responsabilização constitucional no grupo de cidadãos admitidos; a exclusão racial da cidadania e a reserva masculina de cargos limitam a inclusão política e impedem posição forte. O confronto com voto universal usa a exclusão racial explícita, sem extrair uma regra de sufrágio feminino apenas da cláusula sobre cargos.",
        "uncertainty": "Não é certificado de competição livre efetiva nem de democracia inclusiva; a âncora resolve editorialmente um desenho eletivo com exclusões profundas, não calcula média entre direitos dos cidadãos e dos escravizados.",
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
        "position": "moderate-first",
        "confidence": "medium",
        "relatedQuestionIds": [
          "religiao_03",
          "religiao_08"
        ],
        "claims": [
          {
            "sourceTitle": "Constitution of the Republic of Texas, 17 March 1836 — Washington on the Brazos",
            "locator": "Declaration of Rights, Third; Article V(1)",
            "statement": "A declaração veda preferência legal entre denominações e garante escolha de culto; ministros religiosos não podem ocupar o Executivo ou o Congresso.",
            "basis": "norm",
            "publishedDate": "1836-03-17; transcrição de edição de 1838",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Não preferência denominacional e separação de cargos clericais sustentam laicidade institucional moderada, sem imputar irreligiosidade privada.",
        "uncertainty": "A linguagem da proteção é teísta e a proibição de cargos clericais também restringe direitos; não demonstramos neutralidade completa perante não crentes, financiamento religioso nem a prática de todas as políticas.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      }
    },
    "documentaryReview": {
      "status": "author-reviewed-bounded-claims",
      "reviewedOn": "2026-10-07",
      "independentReview": "pending",
      "scope": "Constituição primária lida com exclusões e cláusulas contrárias; contexto diplomático e escravidão efetiva confrontados."
    },
    "unknownAxisReasons": {
      "est": "Divisão em condados e existência de órgãos nacionais não comprovam sozinhas o alcance da autonomia territorial; sem regra de competências revisada, permanece desconhecido.",
      "pod": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "imi": "Exclusão racial de cidadania não se converte automaticamente em assimilação cultural.",
      "dip": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "int": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "eco": "A proteção da escravidão não demonstra política geral de propriedade pública/privada.",
      "con": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "com": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "mor": "Escravidão e exclusão racial são documentadas como limites de cidadania; não imputamos posições atuais sobre cotas, gênero, aborto ou família por analogia histórica.",
      "tec": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação."
    }
  },
  "hawaii-republic-1894": {
    "id": "hawaii-republic-1894",
    "name": "República do Havaí",
    "aliases": [
      "Republic of Hawaii"
    ],
    "period": "República independente, 1894–1898; desenho da carta promulgada em 4 de julho de 1894",
    "rationale": "A república sucedeu o governo provisório com Presidência inicial nomeada e representação eleitoral restrita; a carta delimitou apoio público a escolas confessionais.",
    "caveats": "A proclamação republicana não comprova consentimento indígena ou sufrágio inclusivo. O primeiro Presidente foi designado na própria carta, a qual impõe juramento antimonárquico e restrições censitárias. O fac-símile integral do arquivo estadual foi localizado, mas a leitura textual usa transcrição; cotejo completo permanece pendente.",
    "sources": [
      {
        "title": "Constitution of the Republic of Hawaii, 1894 — transcrição histórica",
        "url": "https://en.wikisource.org/wiki/1894_Constitution_of_the_Republic_of_Hawaii",
        "note": "Transcrição do texto primário, com limites de procedência; artigos 2, 23, 74, 76, 97 e 101."
      },
      {
        "title": "1894 Constitutional Convention — Hawaiʻi State Archives",
        "url": "https://ags.hawaii.gov/archives/online-exhibitions/1894-constitutional-convention/",
        "note": "Arquivo estadual documenta ruptura de 1893 e convenção, adoção e promulgação em 1894; fac-símile disponível de grande tamanho."
      },
      {
        "title": "Lowrey v. Territory of Hawaii, 206 U.S. 206 (1907)",
        "url": "https://www.law.cornell.edu/supremecourt/text/206/206",
        "note": "Decisão primária de 1907 cita a vedação escolar de 1894. Corrobora conteúdo jurídico; não certifica execução durante a República."
      },
      {
        "title": "Joint Resolution for Annexing the Hawaiian Islands (1898) — National Archives",
        "url": "https://www.archives.gov/milestone-documents/joint-resolution-for-annexing-the-hawaiian-islands",
        "note": "Resolução primária de 7 de julho de 1898 e contexto arquivístico documentam anexação e oposição indígena, delimitando a unidade independente."
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
      "rel": 60,
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
          "Constitution of the Republic of Hawaii, 1894 — transcrição histórica"
        ],
        "rationale": "Fundação presidencial designada e filtros políticos/censitários substanciais sustentam direção autocrática moderada, contida pela existência de legislativo eletivo. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não mede competição real nem posição de todos os habitantes. Requisitos textuais precisam de cotejo integral com o fac-símile estadual; não presumimos eleição presidencial direta ou universal."
      },
      "rel": {
        "sourceTitles": [
          "Constitution of the Republic of Hawaii, 1894 — transcrição histórica",
          "Lowrey v. Territory of Hawaii, 206 U.S. 206 (1907)"
        ],
        "rationale": "Separação financeira escolar e liberdade denominacional sustentam laicidade institucional moderada no domínio revisado. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Cobertura parcial de culto e financiamento escolar, desde 1896, também abrangendo escolas privadas não confessionais. O relato processual Lowrey alega continuidade de ensino religioso público até 1903: não certificamos cumprimento republicano. Linguagem teísta não prova igualdade para não crentes."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-second",
        "confidence": "medium",
        "relatedQuestionIds": [
          "representacao_15",
          "representacao_16"
        ],
        "claims": [
          {
            "sourceTitle": "Constitution of the Republic of Hawaii, 1894 — transcrição histórica",
            "locator": "Art. 23, 74, 76 e 101",
            "statement": "A carta designa Dole primeiro Presidente; eleições legislativas dependem de requisitos masculinos, alfabetização, lealdade republicana e, para o Senado, patrimônio ou renda.",
            "basis": "norm",
            "publishedDate": "1894-07-03; promulgada em 1894-07-04",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Fundação presidencial designada e filtros políticos/censitários substanciais sustentam direção autocrática moderada, contida pela existência de legislativo eletivo.",
        "uncertainty": "Não mede competição real nem posição de todos os habitantes. Requisitos textuais precisam de cotejo integral com o fac-símile estadual; não presumimos eleição presidencial direta ou universal.",
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
        "position": "moderate-first",
        "confidence": "medium",
        "relatedQuestionIds": [
          "religiao_03",
          "religiao_08"
        ],
        "claims": [
          {
            "sourceTitle": "Constitution of the Republic of Hawaii, 1894 — transcrição histórica",
            "locator": "Art. 2 e 97",
            "statement": "Liberdade de culto teísta é prevista; após 31 de dezembro de 1895 ficam vedados recursos e terras públicas em favor de escolas confessionais ou privadas.",
            "basis": "norm",
            "publishedDate": "1894-07-03; vedação financeira com início diferido para 1896",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Lowrey v. Territory of Hawaii, 206 U.S. 206 (1907)",
            "locator": "Discussão da Constituição de 1894 e proibição de apoio a escolas sectárias",
            "statement": "A Suprema Corte reproduz a vedação de financiamento público escolar confessional e sua continuidade na lei territorial posterior.",
            "basis": "norm",
            "publishedDate": "1907-05-13",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Separação financeira escolar e liberdade denominacional sustentam laicidade institucional moderada no domínio revisado.",
        "uncertainty": "Cobertura parcial de culto e financiamento escolar, desde 1896, também abrangendo escolas privadas não confessionais. O relato processual Lowrey alega continuidade de ensino religioso público até 1903: não certificamos cumprimento republicano. Linguagem teísta não prova igualdade para não crentes.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      }
    },
    "documentaryReview": {
      "status": "author-reviewed-bounded-claims",
      "reviewedOn": "2026-10-07",
      "independentReview": "pending",
      "scope": "Convenção no arquivo estadual, transcrição e corroboração judicial específica; fac-símile integral ainda não cotejado."
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
    },
    "identityOrigin": {
      "disposition": "new-historical-unit",
      "distinctness": "República sucessora da monarquia deposta, com carta e instituições próprias; não é a ideologia regional havaiana."
    },
    "codingScope": "República independente, 1894–1898; desenho da carta promulgada em 4 de julho de 1894"
  },
  "north-german-confederation-1867": {
    "id": "north-german-confederation-1867",
    "name": "Confederação da Alemanha do Norte",
    "aliases": [],
    "period": "Estado federal de 1867–1871; carta de 1867, anterior à incorporação dos Estados do sul e ao Império de 1871",
    "rationale": "Federação setentrional com Estados membros e órgão federal próprios; distinta da confederação de 1815 e do Império de 1871.",
    "caveats": "Graduação normativa delimitada, confiança média; não certifica prática nem continuidade de todo o período. Cotejo integral e revisão independente pendentes. ",
    "sources": [
      {
        "title": "Verfassung des Norddeutschen Bundes — Bundesgesetzblatt 1867",
        "url": "https://de.wikisource.org/wiki/Verfassung_des_Norddeutschen_Bundes",
        "note": "Texto primário transcrito/traduzido: locadores em coding. Edição consultada em 7/10/2026; não constitui certificação arquivística."
      },
      {
        "title": "Preußen und der Norddeutsche Bund — Deutscher Bundestag",
        "url": "https://www.bundestag.de/besuche/ausstellungen/verfassung/tafel12",
        "note": "Exposição parlamentar consultada: constituição federal1867 e transição imperial1871, não aliases de governo."
      }
    ],
    "kind": "country",
    "category": "historical-country",
    "vec": {
      "est": 60,
      "rep": 60,
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
      "est": "medium",
      "rep": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Verfassung des Norddeutschen Bundes — Bundesgesetzblatt 1867"
        ],
        "rationale": "Partilha institucional efetiva no texto sustenta federalismo moderado. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Predomínio prussiano e intervenção federal impedem inferir máxima autonomia."
      },
      "rep": {
        "sourceTitles": [
          "Verfassung des Norddeutschen Bundes — Bundesgesetzblatt 1867"
        ],
        "rationale": "Eleição e veto legislativo sustentam representação moderada, apesar do executivo dinástico. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Norma remete à lei eleitoral; universal não comprova inclusão feminina nem prática competitiva."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Verfassung des Norddeutschen Bundes — Bundesgesetzblatt 1867",
            "locator": "Arts.4–8,19,36",
            "statement": "Estados participam do Bundesrat e executam tributação; competências federais enumeradas e execução coercitiva federal limitam autonomia.",
            "basis": "norm",
            "publishedDate": "1867",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Partilha institucional efetiva no texto sustenta federalismo moderado.",
        "uncertainty": "Predomínio prussiano e intervenção federal impedem inferir máxima autonomia.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "rep": {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Verfassung des Norddeutschen Bundes — Bundesgesetzblatt 1867",
            "locator": "Arts.5,11,15,20,23–26",
            "statement": "Reichstag eletivo secreto participa necessariamente da lei; chanceler depende da Presidência prussiana, não de confiança parlamentar.",
            "basis": "norm",
            "publishedDate": "1867",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Eleição e veto legislativo sustentam representação moderada, apesar do executivo dinástico.",
        "uncertainty": "Norma remete à lei eleitoral; universal não comprova inclusão feminina nem prática competitiva.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
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
    }
  },
  "belgium-unitary-kingdom-1831": {
    "id": "belgium-unitary-kingdom-1831",
    "name": "Bélgica — reino unitário",
    "aliases": [],
    "period": "Ordem unitária fundada em 1831, anterior à federalização iniciada em 1970; âncoras somente na edição original de 7/2/1831",
    "rationale": "Estado independente unitário predecessor da federação atual, não um gabinete particular.",
    "caveats": "Graduação normativa delimitada, confiança média; não certifica prática nem continuidade de todo o período. Cotejo integral e revisão independente pendentes. est desconhecido: autonomia provincial do art.31 não é automaticamente federalismo.",
    "sources": [
      {
        "title": "Belgium Constitution 1831 — edição histórica traduzida",
        "url": "https://www.constituteproject.org/constitution/Belgium_1831",
        "note": "Texto primário transcrito/traduzido: locadores em coding. Edição consultada em 7/10/2026; não constitui certificação arquivística."
      },
      {
        "title": "Historical outline of the federalisation of Belgium — governo belga",
        "url": "https://www.belgium.be/en/about_belgium/country/history/belgium_from_1830/formation_federal_state",
        "note": "Cronologia institucional distingue primeira reforma em1970 e Estado federal criado pela revisão de5/5/1993; não usado para graduar eixos."
      }
    ],
    "kind": "country",
    "category": "historical-country",
    "vec": {
      "est": 50,
      "rep": 60,
      "pod": 40,
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
      "rep": "medium",
      "pod": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Belgium Constitution 1831 — edição histórica traduzida"
        ],
        "rationale": "Poder legislativo autônomo eletivo sustenta representação moderada com exclusões. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não é sufrágio universal; competição e responsabilidade ministerial efetivas pendentes."
      },
      "pod": {
        "sourceTitles": [
          "Belgium Constitution 1831 — edição histórica traduzida"
        ],
        "rationale": "Garantias civis delimitadas sustentam liberdade moderada normativa. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não cobre prática colonial nem exceções legislativas posteriores."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Belgium Constitution 1831 — edição histórica traduzida",
            "locator": "Arts.26–27,40–42,47,50",
            "statement": "Câmaras têm iniciativa, investigação e emenda; deputados eleitos diretamente dependem de censo tributário e Coroa participa da lei.",
            "basis": "norm",
            "publishedDate": "1831-02-07",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Poder legislativo autônomo eletivo sustenta representação moderada com exclusões.",
        "uncertainty": "Não é sufrágio universal; competição e responsabilidade ministerial efetivas pendentes.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "pod": {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Belgium Constitution 1831 — edição histórica traduzida",
            "locator": "Arts.7–10,18–20",
            "statement": "Detenção e busca seguem formas legais; imprensa sem censura e associação são protegidas, reuniões externas sujeitas à polícia.",
            "basis": "norm",
            "publishedDate": "1831-02-07",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Garantias civis delimitadas sustentam liberdade moderada normativa.",
        "uncertainty": "Não cobre prática colonial nem exceções legislativas posteriores.",
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
      "imi": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "dip": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "int": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "eco": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "con": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "com": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "rel": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "mor": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "tec": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação."
    }
  },
  "bavaria-kingdom-1818": {
    "id": "bavaria-kingdom-1818",
    "name": "Reino da Baviera",
    "aliases": [],
    "period": "Reino de1806–1918; recorte constitucional original de26/5/1818, antes de1848 e da incorporação federal de1871",
    "rationale": "Reino com instituições próprias dentro da Confederação Germânica; uma identidade conserva transições posteriores sem criar aliases por reinado.",
    "caveats": "Graduação normativa delimitada, confiança média; não certifica prática nem continuidade de todo o período. Cotejo integral e revisão independente pendentes. Tradução histórica ainda sem cotejo alemão integral. A condição de membro confederal não torna a estrutura INTERNA automaticamente federal.",
    "sources": [
      {
        "title": "Constitution of the Kingdom of Bavaria1818 — tradução histórica",
        "url": "https://en.wikisource.org/wiki/Constitution_of_the_Kingdom_of_Bavaria_(1818)",
        "note": "Texto primário transcrito/traduzido: locadores em coding. Edição consultada em 7/10/2026; não constitui certificação arquivística."
      },
      {
        "title": "The constitution of the Kingdom of Bavaria1818–1918 — Bayerische Staatsbibliothek",
        "url": "https://www.bsb-muenchen.de/en/article/the-constitution-of-the-kingdom-of-bavaria-1818-1918-a-virtual-exhibition-in-the-cultural-portal-bavarikon-2414/",
        "note": "Identificação institucional da carta e sua permanência emendada até o fim do reino; âncoras continuam estritamente1818."
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
          "Constitution of the Kingdom of Bavaria1818 — tradução histórica"
        ],
        "rationale": "Representação estamental subordinada sustenta autocracia moderada com veto tributário contrário. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não infere ausência total de representação nem competição moderna."
      },
      "rel": {
        "sourceTitles": [
          "Constitution of the Kingdom of Bavaria1818 — tradução histórica"
        ],
        "rationale": "Privilégio confessional de cidadania/cargo sustenta polo religioso moderado. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Supervisão régia limita autonomia eclesial; não infere teocracia."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constitution of the Kingdom of Bavaria1818 — tradução histórica",
            "locator": "TitleVI,arts.VII–XIII; TitleVII,arts.II–IV",
            "statement": "Representação por classes exige propriedade e fé cristã; rei dissolve câmaras, que consentem leis pessoais e impostos.",
            "basis": "norm",
            "publishedDate": "1818-05-26",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Representação estamental subordinada sustenta autocracia moderada com veto tributário contrário.",
        "uncertainty": "Não infere ausência total de representação nem competição moderna.",
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
            "sourceTitle": "Constitution of the Kingdom of Bavaria1818 — tradução histórica",
            "locator": "TitleIV,art.IX; TitleVI,art.XII",
            "statement": "Consciência doméstica é livre; três igrejas cristãs têm igualdade, mas não cristãos têm cidadania condicionada e deputados devem ser cristãos.",
            "basis": "norm",
            "publishedDate": "1818-05-26",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Privilégio confessional de cidadania/cargo sustenta polo religioso moderado.",
        "uncertainty": "Supervisão régia limita autonomia eclesial; não infere teocracia.",
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
  },
  "mexico-first-federal-republic-1824": {
    "id": "mexico-first-federal-republic-1824",
    "name": "México — Primeira República Federal",
    "aliases": [
      "Estados Unidos Mexicanos — primeira ordem federal"
    ],
    "period": "Primeira ordem federal,1824–1835; edição original de4/10/1824",
    "rationale": "Constituições e poderes estaduais delimitam a primeira ordem federal; o culto católico é protegido com exclusão normativa dos demais.",
    "caveats": "Unidade pós-imperial distinta do PRI e do Estado contemporâneo. O retorno federal posterior não é incluído como se houvesse continuidade sem ruptura. Texto estadual sobre franquia não revisado: representação fica desconhecida. Catolicismo exclusivo não comprova por si teocracia ou domínio geral do direito religioso.",
    "sources": [
      {
        "title": "Constitución Federal de los Estados Unidos Mexicanos, 1824 — transcrição primária",
        "url": "https://es.wikisource.org/wiki/Constituci%C3%B3n_Federal_de_los_Estados_Unidos_Mexicanos_(1824)",
        "note": "Transcrição primária dos artigos3/4/50/157–162; cotejo integral pendente."
      },
      {
        "title": "Constituição1824 — fac-símile da Câmara dos Deputados",
        "url": "https://www.diputados.gob.mx/biblioteca/bibdig/const_mex/const_1824.pdf",
        "note": "Fac-símile oficial localizado,19páginas; camada de texto indisponível. Não afirmamos cotejo integral."
      },
      {
        "title": "Antecedentes históricos constitucionales — Orden Jurídico Nacional",
        "url": "https://www.ordenjuridico.gob.mx/Constitucion/antecedentes.php",
        "note": "Catálogo governamental identifica carta de1824 e Bases de23/10/1835, limite temporal da primeira ordem."
      }
    ],
    "kind": "country",
    "category": "historical-country",
    "vec": {
      "est": 60,
      "rep": 50,
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
      "est": "medium",
      "rel": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Constitución Federal de los Estados Unidos Mexicanos, 1824 — transcrição primária"
        ],
        "rationale": "Competências territoriais constitutivas sustentam federalismo moderado. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Congresso nacional tem competências materiais e Estados devem executar leis gerais; não presume soberania separada nem autonomia efetiva igual."
      },
      "rel": {
        "sourceTitles": [
          "Constitución Federal de los Estados Unidos Mexicanos, 1824 — transcrição primária"
        ],
        "rationale": "Confessionalidade exclusiva sustenta direção religiosa moderada no construto institucional. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não prova jurisdição clerical geral ou crença popular; exclusividade de culto isolada não autoriza âncora forte automaticamente."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constitución Federal de los Estados Unidos Mexicanos, 1824 — transcrição primária",
            "locator": "Arts.4,50 e157–162",
            "statement": "Estados possuem constituições, legislaturas, Executivo e Judiciário próprios, sujeitos à Constituição e leis federais.",
            "basis": "norm",
            "publishedDate": "1824-10-04",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Competências territoriais constitutivas sustentam federalismo moderado.",
        "uncertainty": "Congresso nacional tem competências materiais e Estados devem executar leis gerais; não presume soberania separada nem autonomia efetiva igual.",
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
            "sourceTitle": "Constitución Federal de los Estados Unidos Mexicanos, 1824 — transcrição primária",
            "locator": "Art.3",
            "statement": "Catolicismo é religião nacional protegida por leis; exercício de outras religiões é proibido.",
            "basis": "norm",
            "publishedDate": "1824-10-04",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Confessionalidade exclusiva sustenta direção religiosa moderada no construto institucional.",
        "uncertainty": "Não prova jurisdição clerical geral ou crença popular; exclusividade de culto isolada não autoriza âncora forte automaticamente.",
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
      "scope": "Cláusulas transcritas e catálogo cronológico oficial; cotejo integral e execução pendentes."
    },
    "unknownAxisReasons": {
      "rep": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
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
  },
  "irish-free-state-1922": {
    "id": "irish-free-state-1922",
    "name": "Estado Livre Irlandês",
    "aliases": [
      "Saorstát Éireann"
    ],
    "period": "Estado Livre sob a carta de1922, 1922–1937; edição fundadora anterior às emendas",
    "rationale": "Parlamento eletivo e governo responsável coexistem com vínculo dominial à Coroa; direitos e não preferência religiosa constam da carta.",
    "caveats": "Distinto da ordem constitucional irlandesa de1937; não inventa período com base em troca de gabinete. Emendas alteraram Coroa, Senado e instrumentos populares antes de1937. Carta fundadora não certifica execução durante guerra civil; original oficial inacessível nesta revisão, transcrição explícita e cotejo pendente.",
    "sources": [
      {
        "title": "Constitution of the Irish Free State Act, 1922 — transcrição primária",
        "url": "https://en.wikisource.org/wiki/Constitution_of_the_Irish_Free_State_(Saorst%C3%A1t_Eireann)_Act,_1922",
        "note": "Ato e anexos primários: artigos6–9/12/14/51–53; fonte de transcrição sem certificação de cotejo integral."
      },
      {
        "title": "Dáil debate,10December1937 — Oireachtas",
        "url": "https://www.oireachtas.ie/en/debates/debate/dail/1937-12-10/16/",
        "note": "Trecho indexado primário identifica revogação da carta vigente em29/12/1937; página integral retorna403, logo não usada para codificar eixos."
      }
    ],
    "kind": "country",
    "category": "historical-country",
    "vec": {
      "est": 50,
      "rep": 60,
      "pod": 40,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 60,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "rep": "medium",
      "pod": "medium",
      "rel": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constitution of the Irish Free State Act, 1922 — transcrição primária"
        ],
        "rationale": "Voto e confiança parlamentar sustentam representação democrática moderada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Tratado, juramento e reserva da Coroa limitam o contexto; não presume igualdade política além das regras eleitorais legais nem prática estável até1937."
      },
      "pod": {
        "sourceTitles": [
          "Constitution of the Irish Free State Act, 1922 — transcrição primária"
        ],
        "rationale": "Garantias contra coerção arbitrária sustentam liberdade moderada, com exceções expressas. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Sem auditoria de guerra civil, execução e leis de segurança; ordem pública/moralidade também condicionam proteção."
      },
      "rel": {
        "sourceTitles": [
          "Constitution of the Irish Free State Act, 1922 — transcrição primária"
        ],
        "rationale": "Neutralidade denominacional expressa sustenta laicidade institucional moderada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não exclui financiamento escolar confessional igualitário, nem presume irreligiosidade dos cidadãos ou cumprimento pleno."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constitution of the Irish Free State Act, 1922 — transcrição primária",
            "locator": "First Schedule, arts.12/14 e51–53",
            "statement": "Voto secreto sem distinção de sexo e governo dependente da maioria do Dáil coexistem com Rei e representante da Coroa.",
            "basis": "norm",
            "publishedDate": "1922; edição original do ato constitucional",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Voto e confiança parlamentar sustentam representação democrática moderada.",
        "uncertainty": "Tratado, juramento e reserva da Coroa limitam o contexto; não presume igualdade política além das regras eleitorais legais nem prática estável até1937.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "pod": {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constitution of the Irish Free State Act, 1922 — transcrição primária",
            "locator": "First Schedule, arts.6–9",
            "statement": "Revisão judicial de detenção, domicílio e liberdades de expressão e associação são protegidos; guerra/rebelião limita tutela contra atos militares.",
            "basis": "norm",
            "publishedDate": "1922; edição original do ato constitucional",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Garantias contra coerção arbitrária sustentam liberdade moderada, com exceções expressas.",
        "uncertainty": "Sem auditoria de guerra civil, execução e leis de segurança; ordem pública/moralidade também condicionam proteção.",
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
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constitution of the Irish Free State Act, 1922 — transcrição primária",
            "locator": "First Schedule, art.8",
            "statement": "Liberdade de consciência é garantida; proíbe preferência ou financiamento de religião e discriminação entre escolas denominacionais subsidiadas.",
            "basis": "norm",
            "publishedDate": "1922; edição original do ato constitucional",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Neutralidade denominacional expressa sustenta laicidade institucional moderada.",
        "uncertainty": "Não exclui financiamento escolar confessional igualitário, nem presume irreligiosidade dos cidadãos ou cumprimento pleno.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      }
    },
    "documentaryReview": {
      "status": "author-reviewed-bounded-claims",
      "reviewedOn": "2026-10-07",
      "independentReview": "pending",
      "scope": "Ato e anexos transcritos, recorte original; cotejo oficial e prática pendentes."
    },
    "unknownAxisReasons": {
      "est": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
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
  "finland-constitution-republic-1919": {
    "id": "finland-constitution-republic-1919",
    "name": "Finlândia — república da Constituição de 1919",
    "aliases": [
      "Suomen Hallitusmuoto — ordem republicana de 1919"
    ],
    "period": "Unidade constitucional, 1919–2000; codificação da edição fundadora de 17 de julho de 1919",
    "rationale": "Presidência materialmente forte coexistia com Assembleia representativa, confiança ministerial e garantias contra coerção arbitrária no texto fundador.",
    "caveats": "O perfil não equivale à Finlândia atual sob a Constituição de 2000. A vida jurídica de 81 anos inclui emendas e mudanças políticas; a codificação abaixo é exclusivamente da edição original, não certificação da prática interbélica nem média de todo o período. Tradução histórica requer cotejo completo com original finlandês.",
    "sources": [
      {
        "title": "Constitution of Finland (1919) — tradução histórica",
        "url": "https://en.wikisource.org/wiki/Constitution_of_Finland_(1919)",
        "note": "Tradução do documento primário de 17 de julho de 1919. Usa-se o corpo da carta; o apêndice parlamentar de 1906 não é tratado como prova independente de sufrágio em todos os anos."
      },
      {
        "title": "The Constitution of Finland 731/1999 — Finlex",
        "url": "https://www.finlex.fi/en/legislation/translations/1999/eng/731",
        "note": "Constituição nº 731/1999, seções 130–131: início em 1º de março de 2000 e revogação da Constituição de 1919."
      }
    ],
    "kind": "country",
    "category": "historical-country",
    "vec": {
      "est": 50,
      "rep": 60,
      "pod": 40,
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
      "rep": "medium",
      "pod": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constitution of Finland (1919) — tradução histórica"
        ],
        "rationale": "Representação e confiança ministerial sustentam direção democrática moderada, limitada por prerrogativas presidenciais relevantes. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Sem auditoria de eleições, exclusões ou exercício presidencial efetivo; não afirma democracia plena nem imputa continuidade de cada cláusula até 2000."
      },
      "pod": {
        "sourceTitles": [
          "Constitution of Finland (1919) — tradução histórica"
        ],
        "rationale": "Garantias expressas contra coerção arbitrária sustentam direção moderada de liberdade, limitada pelas exceções. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: O texto não demonstra execução, leis de exceção nem tratamento de opositores durante todo o período. Tradução ainda não integralmente cotejada; a direção não é irrestrita."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "relatedQuestionIds": [
          "representacao_15"
        ],
        "claims": [
          {
            "sourceTitle": "Constitution of Finland (1919) — tradução histórica",
            "locator": "Art. 2, 19, 23, 27, 36, 43 e 45",
            "statement": "Assembleia representa o povo, ministros precisam de confiança parlamentar e respondem perante ela; Presidente é escolhido por colégio eleitoral popular, pode dissolver a Assembleia e possui veto superável.",
            "basis": "norm",
            "publishedDate": "1919-07-17",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Representação e confiança ministerial sustentam direção democrática moderada, limitada por prerrogativas presidenciais relevantes.",
        "uncertainty": "Sem auditoria de eleições, exclusões ou exercício presidencial efetivo; não afirma democracia plena nem imputa continuidade de cada cláusula até 2000.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "pod": {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "relatedQuestionIds": [
          "poder_04",
          "poder_19"
        ],
        "claims": [
          {
            "sourceTitle": "Constitution of Finland (1919) — tradução histórica",
            "locator": "Art. 6, 10–13, 16 e 60",
            "statement": "Carta garante liberdade pessoal, expressão sem censura prévia, reunião, privacidade e juízo regular; proíbe tribunais extraordinários, mas admite restrições por guerra, insurreição e hipóteses legais.",
            "basis": "norm",
            "publishedDate": "1919-07-17",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Garantias expressas contra coerção arbitrária sustentam direção moderada de liberdade, limitada pelas exceções.",
        "uncertainty": "O texto não demonstra execução, leis de exceção nem tratamento de opositores durante todo o período. Tradução ainda não integralmente cotejada; a direção não é irrestrita.",
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
      "scope": "Tradução original e identificação oficial da carta substitutiva; cotejo finlandês e prática não certificados."
    },
    "unknownAxisReasons": {
      "est": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
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
      "distinctness": "Ordem republicana fundada na carta de 1919, juridicamente substituída em 2000; fonte fundadora não representa todos os 81 anos."
    },
    "codingScope": "Unidade constitucional, 1919–2000; codificação da edição fundadora de 17 de julho de 1919"
  },
  "norway-swedish-union-1814": {
    "id": "norway-swedish-union-1814",
    "name": "Noruega — reino constitucional na união com a Suécia",
    "aliases": [
      "Noruega na união sueco-norueguesa"
    ],
    "period": "Unidade histórica da união, 1814–1905; codificação delimitada ao desenho inicial e controles parlamentares anteriores a 1884",
    "rationale": "A constituição e o Storting limitaram a Coroa dentro de uma união monárquica; a ampliação parlamentar e do eleitorado foi gradual.",
    "caveats": "A união não é uma simples fase do Estado atual: foi estabelecida em novembro de 1814 e dissolvida em 1905. A âncora não resume 91 anos: distingue o desenho original e os controles anteriores a 1884 da responsabilidade parlamentar posterior. Mulheres e muitos homens eram excluídos inicialmente.",
    "sources": [
      {
        "title": "Milestones in Norway’s democratic history — Storting",
        "url": "https://www.stortinget.no/en/In-English/About-the-Storting/historical-highlights/milestones-in-norways-democratic-history/",
        "note": "História institucional do Parlamento preserva citações da revisão de novembro de 1814 e documenta controle da Coroa, sufrágio, parlamentarismo de 1884 e dissolução de 1905. Não substitui edição integral original."
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
          "Milestones in Norway’s democratic history — Storting"
        ],
        "rationale": "Representação com controles materiais da Coroa sustenta direção democrática moderada para o recorte anterior ao parlamentarismo pleno. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Fonte institucional retrospectiva, sem leitura completa do original de 1814 ou auditoria de cada eleição. Não imputa sufrágio universal, estabilidade do mesmo arranjo até 1905 nem democrático por ser simplesmente monarquia constitucional."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "relatedQuestionIds": [
          "representacao_15",
          "representacao_16"
        ],
        "claims": [
          {
            "sourceTitle": "Milestones in Norway’s democratic history — Storting",
            "locator": "Seções “1814”, “1814–1884”, “1833”, “1871” e “1884”",
            "statement": "Parlamento representativo rejeita reformas reais, ganha composição agrária e sessões anuais; parlamentarismo baseado na confiança surge em 1884, após conflito e impeachment. Franquia original exclui mulheres e muitos homens.",
            "basis": "practice",
            "publishedDate": "Página institucional sem data indicada; recorte de 1814–1884",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Representação com controles materiais da Coroa sustenta direção democrática moderada para o recorte anterior ao parlamentarismo pleno.",
        "uncertainty": "Fonte institucional retrospectiva, sem leitura completa do original de 1814 ou auditoria de cada eleição. Não imputa sufrágio universal, estabilidade do mesmo arranjo até 1905 nem democrático por ser simplesmente monarquia constitucional.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      }
    },
    "documentaryReview": {
      "status": "author-reviewed-bounded-claims",
      "reviewedOn": "2026-10-07",
      "independentReview": "pending",
      "scope": "Contexto institucional e excertos constitucionais oficiais; edição integral original e mudanças legais posteriores pendentes."
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
      "distinctness": "Reino constitucional em união política com a Suécia, encerrada em 1905; não uma divisão artificial em antes/depois de 1884."
    },
    "codingScope": "Unidade histórica da união, 1814–1905; codificação delimitada ao desenho inicial e controles parlamentares anteriores a 1884"
  }
} as unknown as Record<string,ReferenceEntry>;

export const historicalCountryProvenance04Proposals = {
  "german-empire-1871": {
    "id": "german-empire-1871",
    "kind": "country",
    "category": "historical-country",
    "name": "Império Alemão",
    "period": "Império Alemão, 1871–1918; recorte: Constituição em vigor desde 4/5/1871",
    "vec": {
      "est": 68,
      "rep": 38,
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
    "rationale": "A legislação depende do Conselho Federal e do Reichstag eleito; o imperador nomeia o chanceler e participa da dissolução parlamentar.",
    "caveats": "Recorte institucional datado; não representa a população, povos subordinados nem governos fora do período. Texto define forma legal, não equilíbrio real nem direitos em colônias. Eixos sem evidência suficiente permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "Office of the Historian — Constitution enclosure in Bancroft toFish6May1871",
        "url": "https://history.state.gov/historicaldocuments/frus1871/d189",
        "note": "Constituição reproduzida em inglês em correspondência diplomática de 1871; tradutor não identificado. Artigos 1–32 consultados; legislação bicameral e Executivo imperial. A fase parlamentar aparece apenas no fim de 1918, não em toda a vigência."
      },
      {
        "title": "Constituição do Império Alemão (1871)",
        "url": "https://ghdi.ghi-dc.org/sub_document.cfm?document_id=1845",
        "note": "Documento primário ou registro de arquivo relacionado ao período Constituição federal monárquica, 1871–1918; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Office of the Historian — texto constitucional",
        "url": "https://history.state.gov/historicaldocuments/frus1871/d189",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      }
    ],
    "evidence": {
      "est": "high",
      "rep": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Constituição do Império Alemão (1871)",
          "Office of the Historian — texto constitucional"
        ],
        "rationale": "A carta constitucional descreve a distribuição territorial de poder, sustentando a posição federal/descentralizada codificada."
      },
      "rep": {
        "sourceTitles": [
          "Constituição do Império Alemão (1871)",
          "Office of the Historian — texto constitucional"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 38."
      }
    }
  },
  "germany-third-reich": {
    "id": "germany-third-reich",
    "kind": "country",
    "category": "historical-country",
    "name": "Alemanha — regime nazista",
    "period": "Alemanha nazista — regime de 30/1/1933 a 8/5/1945; Lei de Plenos Poderes de 24/3/1933",
    "vec": {
      "est": 50,
      "rep": 0,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 0,
      "tec": 50
    },
    "rationale": "A lei permite ao gabinete legislar e desviar-se da Constituição, mantendo formalmente as câmaras e a Presidência.",
    "caveats": "Recorte institucional datado; não representa a população, povos subordinados nem governos fora do período. Eixos econômicos e militares exigiriam fonte e codificação próprias; não reduzir vítimas a vetor. Eixos sem evidência suficiente permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "GHDI — The Enabling Act24March1933",
        "url": "https://germanhistorydocs.org/en/nazi-germany-1933-1945/ghdi:document-1496",
        "note": "Lei de 24/3/1933 em tradução inglesa do Departamento de Estado de 1943, reproduzida pelo GHI. Texto integral de cinco artigos lido; conserva formalmente câmaras e Presidência e declara prazo até 1937. Não certifica todos os crimes ou atos de 1933–1945."
      },
      {
        "title": "Lei de Plenos Poderes (1933)",
        "url": "https://ghdi.ghi-dc.org/sub_document.cfm?document_id=1494",
        "note": "Documento primário ou registro de arquivo relacionado ao período Ditadura nacional-socialista, 1933–1945; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "United States Holocaust Memorial Museum — Nazi state",
        "url": "https://encyclopedia.ushmm.org/content/en/article/the-nazi-state",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      },
      {
        "title": "USHMM — cronologia do Terceiro Reich",
        "url": "https://encyclopedia.ushmm.org/content/en/article/third-reich",
        "note": "Cronologia institucional situa o regime entre 30/1/1933 e 8/5/1945. Limites históricos separados do texto legislativo de 24/3/1933; não implica abolição formal das câmaras pela Lei de Plenos Poderes."
      }
    ],
    "evidence": {
      "rep": "high",
      "mor": "high"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Lei de Plenos Poderes (1933)",
          "United States Holocaust Memorial Museum — Nazi state"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 0."
      },
      "mor": {
        "sourceTitles": [
          "Lei de Plenos Poderes (1933)",
          "United States Holocaust Memorial Museum — Nazi state"
        ],
        "rationale": "A fonte registra extensão ou restrição de direitos e igualdade no período, sustentando 0."
      }
    }
  },
  "russian-empire-1906": {
    "id": "russian-empire-1906",
    "kind": "country",
    "category": "historical-country",
    "name": "Império Russo — ordem constitucional tardia",
    "period": "Império Russo — Leis Fundamentais de 1906, reprodução de 1909; transição monárquica de 2–3/3/1917 (15–16/3 gregoriano)",
    "vec": {
      "est": 50,
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
    "rationale": "O tsar conserva autoridade autocrática e aprovação das leis, compartilhando a legislação com o Conselho e a Duma.",
    "caveats": "Recorte institucional datado; não representa a população, povos subordinados nem governos fora do período. Reformas após 1905 foram parciais e eleitorado restrito. Eixos sem evidência suficiente permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "C.T.Evans academic course — FundamentalLaws1906 excerpts",
        "url": "https://www.ctevans.net/Nvcc/HIS241/Documents/RobBeaDocs/Fundamentallaws.html",
        "note": "Seleção inglesa de Robinson e Beard, 1909, baseada em edição de 1908; tradutor não identificado. Trechos apresentados foram lidos integralmente; não todas as Leis Fundamentais. O recorte de 1906 não estabelece por si o fim do Império."
      },
      {
        "title": "Leis Fundamentais do Estado Russo (1906)",
        "url": "https://www.prlib.ru/en/history/619187",
        "note": "Documento primário ou registro de arquivo relacionado ao período Duma e monarquia imperial, 1906–1917; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Biblioteca Presidencial Russa — história constitucional",
        "url": "https://www.prlib.ru/en/history/619187",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      },
      {
        "title": "Biblioteca Presidencial — Leis Fundamentais e transição de 1917",
        "url": "https://www.prlib.ru/history/619096",
        "note": "Cronologia institucional: aprovação das leis em 23/4/1906 (6/5 gregoriano), abdicação de Nicolau em 2/3/1917 (15/3) e decisão de Miguel em 3/3 (16/3). Não infere revogação de cada lei ou data de nascimento do império."
      }
    ],
    "evidence": {
      "rep": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Leis Fundamentais do Estado Russo (1906)",
          "Biblioteca Presidencial Russa — história constitucional"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 20."
      }
    }
  },
  "russian-provisional-1917": {
    "id": "russian-provisional-1917",
    "kind": "country",
    "category": "historical-country",
    "name": "Rússia — Governo Provisório",
    "period": "Governo Provisório russo — 2/3–25/10/1917 (15/3–7/11 gregoriano); programa de 3/3 juliano",
    "vec": {
      "est": 50,
      "rep": 64,
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
    "rationale": "O programa promete anistia, liberdades políticas, fim das restrições estamentais e eleições constituintes, com disciplina militar.",
    "caveats": "Recorte institucional datado; não representa a população, povos subordinados nem governos fora do período. O governo durou meses em guerra e colapso estatal. Eixos sem evidência suficiente permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "GARANT — DeclarationofProvisionalGovernment3March1917",
        "url": "https://constitution.garant.ru/history/act1600-1918/5201/",
        "note": "Transcrição russa da declaração coletiva de 3/3/1917, data juliana; edição original e editor não identificados. Corpo e assinaturas lidos. Promessas de liberdade e eleições coexistem com restrições técnicas militares e disciplina; não prova realização ou data de queda."
      },
      {
        "title": "Declaração de direitos do Governo Provisório",
        "url": "https://www.prlib.ru/en/history/619365",
        "note": "Documento primário ou registro de arquivo relacionado ao período Entre duas revoluções, março–novembro de 1917; codificamos somente posições expressas ou instituições descritas."
      },
      {
        "title": "Biblioteca Presidencial Russa — revolução",
        "url": "https://www.prlib.ru/en/history/619362",
        "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
      },
      {
        "title": "Biblioteca Presidencial — formação do Governo Provisório",
        "url": "https://www.prlib.ru/section/683264",
        "note": "Cronologia institucional: formação em 2/3/1917 (15/3 gregoriano). Fonte de cronologia separada do programa de 3/3 juliano; não infere controle territorial uniforme."
      },
      {
        "title": "Biblioteca Presidencial — queda do Governo Provisório",
        "url": "https://www.prlib.ru/history/619540",
        "note": "Cronologia institucional, trecho sobre a queda do governo: queda em 25/10/1917 (7/11 gregoriano). Mudança de governo não certifica consolidação territorial nem resultados da guerra civil."
      }
    ],
    "evidence": {
      "rep": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Declaração de direitos do Governo Provisório",
          "Biblioteca Presidencial Russa — revolução"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 64."
      }
    }
  },
  "us-articles-confederation-1781": {
    "id": "us-articles-confederation-1781",
    "name": "Estados Unidos — Artigos da Confederação",
    "aliases": [
      "Confederação norte-americana sob os Artigos de 1781"
    ],
    "period": "Estados Unidos — Artigos da Confederação, ratificados em 1/3/1781",
    "rationale": "Os Estados retêm poderes não delegados; o Congresso exerce competências comuns e depende de tributos arrecadados pelos Estados.",
    "caveats": "O perfil trata da ordem anterior à Constituição federal de 1789, não do New Deal, da Reconstrução nem dos Estados Confederados de 1861. Confederação e federação moderna não são equivalentes. Não codificamos eleitorados estaduais nem presumimos direitos universais.",
    "sources": [
      {
        "title": "NationalArchives — ArticlesofConfederation",
        "url": "https://www.archives.gov/milestone-documents/articles-of-confederation",
        "note": "Transcrição documental do National Archives: texto de 1777 ratificado em 1/3/1781. Artigos selecionados I–IX consultados; Estados arrecadam recursos, Congresso exerce competências comuns, inclusive guerra e paz. Não leitura integral dos treze artigos."
      },
      {
        "title": "Articles of Confederation (1777) — National Archives",
        "url": "https://www.archives.gov/milestone-documents/articles-of-confederation",
        "note": "Transcrição primária e contexto arquivístico: vigência em 1781–1789, artigos II, V, VIII, IX e XIII e limitações fiscais efetivas do Congresso."
      }
    ],
    "kind": "country",
    "category": "historical-country",
    "vec": {
      "est": 80,
      "rep": 50,
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
      "est": "high"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Articles of Confederation (1777) — National Archives"
        ],
        "rationale": "Autonomia constitucional residual e dependência financeira do centro sustentam direção descentralizadora forte no eixo federal/unitário, não apenas a palavra confederação. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: A âncora 80 representa descentralização confederal formal e não mede uma intensidade comparável estatisticamente a federações atuais. Congresso tinha competências comuns reais; não era ausência completa de governo central."
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
            "sourceTitle": "Articles of Confederation (1777) — National Archives",
            "locator": "Transcript, articles II, V, VIII, IX and XIII",
            "statement": "Poderes residuais permanecem nos Estados; delegados podem ser revogados; financiamento comum depende da arrecadação estadual. Há competências congressuais enumeradas e alterações unânimes.",
            "basis": "norm",
            "publishedDate": "1777-11-15; vigência a partir de 1781-03-01",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Articles of Confederation (1777) — National Archives",
            "locator": "Contexto antes de “Transcript”, parágrafos sobre tributação e comércio",
            "statement": "O arquivo descreve insuficiência efetiva de poderes centrais para tributar e regular comércio, corroborando a autonomia estadual sem confundir fraqueza fiscal com planejamento econômico.",
            "basis": "practice",
            "publishedDate": "Página institucional revisada em 2023-10-23; relata 1781–1789",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Autonomia constitucional residual e dependência financeira do centro sustentam direção descentralizadora forte no eixo federal/unitário, não apenas a palavra confederação.",
        "uncertainty": "A âncora 80 representa descentralização confederal formal e não mede uma intensidade comparável estatisticamente a federações atuais. Congresso tinha competências comuns reais; não era ausência completa de governo central.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      }
    },
    "documentaryReview": {
      "status": "author-reviewed-bounded-claims",
      "reviewedOn": "2026-10-07",
      "independentReview": "pending",
      "scope": "Artigos institucionais e contexto fiscal lidos; somente estrutura territorial codificada."
    },
    "unknownAxisReasons": {
      "rep": "Delegados estaduais não informam, sozinhos, o alcance do sufrágio ou a democracia efetiva de toda a confederação.",
      "pod": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "imi": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "dip": "Limites a tropas em paz coexistem com defesa e milícias; não se inferiu pacifismo.",
      "int": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "eco": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "con": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "com": "Regras de trânsito e comércio entre Estados não demonstram a orientação geral do comércio internacional.",
      "rel": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "mor": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "tec": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação."
    }
  },
  "sardinia-statuto-1848": {
    "id": "sardinia-statuto-1848",
    "name": "Reino da Sardenha — monarquia estatutária",
    "aliases": [
      "Reino da Sardenha sob o Statuto Albertino"
    ],
    "period": "Reino da Sardenha — Estatuto de 1848; fase anterior ao Reino da Itália de 17/3/1861",
    "rationale": "A carta combina Executivo real, duas câmaras e garantias civis; estabelece culto católico estatal e tolera outros cultos.",
    "caveats": "O objeto é a ordem formal do reino anterior à aplicação do estatuto à Itália unificada em 1861. Não estende a carta à ditadura fascista já catalogada. Evolução parlamentar, legislação eleitoral e execução das liberdades exigem pesquisa adicional; não tratamos texto normativo como medição de prática.",
    "sources": [
      {
        "title": "Quirinale — StatutoAlbertino",
        "url": "https://www.quirinale.it/allegati_statici/costituzione/Statutoalbertino.pdf",
        "note": "Texto italiano oficial reproduzido pela Presidência; artigos selecionados 1–39 lidos. Senado nomeado, câmara eletiva e garantias sujeitas a limites. A proclamação do Reino da Itália é fronteira da identidade estatal, não revogação automática do Estatuto."
      },
      {
        "title": "Statuto Albertino, 4 marzo 1848 — Quirinale",
        "url": "https://www.quirinale.it/allegati_statici/costituzione/Statutoalbertino.pdf",
        "note": "Texto primário italiano preservado pela Presidência; páginas 1–5, artigos 1–10, 26–33 e 39–47."
      },
      {
        "title": "Statuto Albertino — tradução histórica em Wikisource",
        "url": "https://en.wikisource.org/wiki/Statuto_Albertino",
        "note": "Tradução histórica do documento com ligação a fac-símile; cabeçalho distingue Sardenha (1848) e Itália (1861). A codificação usa a edição italiana oficial, não notas posteriores da tradução."
      }
    ],
    "kind": "country",
    "category": "historical-country",
    "vec": {
      "est": 50,
      "rep": 40,
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
      "rep": "medium",
      "pod": "medium",
      "rel": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Statuto Albertino, 4 marzo 1848 — Quirinale"
        ],
        "rationale": "O desenho reserva poder material à Coroa sem eliminar a representação eletiva, justificando direção monárquica/autocrática moderada, em vez de equiparar monarquia constitucional a ditadura plena. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Este é o desenho da carta. Não quantificamos o eleitorado nem a evolução da responsabilidade parlamentar de gabinetes no período; por isso grau médio e âncora moderada."
      },
      "pod": {
        "sourceTitles": [
          "Statuto Albertino, 4 marzo 1848 — Quirinale"
        ],
        "rationale": "Garantias contra coerção arbitrária sustentam inclinação moderada à liberdade no recorte formal, contida pelas exceções policiais e de publicação. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não é avaliação da repressão efetiva, de prisões políticas ou de liberdade para toda a população. As exceções impedem posição forte; aplicação histórica ainda não foi revisada."
      },
      "rel": {
        "sourceTitles": [
          "Statuto Albertino, 4 marzo 1848 — Quirinale"
        ],
        "rationale": "Religião estabelecida e papel institucional religioso sustentam direção religiosa moderada, limitada pela tolerância declarada a outros cultos. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não se infere teocracia, domínio geral do direito religioso, crença dos habitantes nem ausência de conflito entre Coroa e Igreja. Estado confessional com tolerância não autoriza automaticamente âncora forte."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-second",
        "confidence": "medium",
        "relatedQuestionIds": [
          "representacao_10",
          "representacao_15"
        ],
        "claims": [
          {
            "sourceTitle": "Statuto Albertino, 4 marzo 1848 — Quirinale",
            "locator": "Articles 2–9, 33 and 39–47; PDF pp. 1–5",
            "statement": "O rei exerce Executivo e nomeia o Senado vitalício; leis dependem de rei e duas câmaras. A câmara dos deputados é eletiva e possui mecanismos legislativos e de acusação ministerial.",
            "basis": "norm",
            "publishedDate": "1848-03-04",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "O desenho reserva poder material à Coroa sem eliminar a representação eletiva, justificando direção monárquica/autocrática moderada, em vez de equiparar monarquia constitucional a ditadura plena.",
        "uncertainty": "Este é o desenho da carta. Não quantificamos o eleitorado nem a evolução da responsabilidade parlamentar de gabinetes no período; por isso grau médio e âncora moderada.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "pod": {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "relatedQuestionIds": [
          "poder_04",
          "poder_19"
        ],
        "claims": [
          {
            "sourceTitle": "Statuto Albertino, 4 marzo 1848 — Quirinale",
            "locator": "Articles 26–28, 32 and 71; PDF pp. 3 and 7",
            "statement": "A carta protege liberdade individual, domicílio e processo legal, declara imprensa livre e veda tribunais extraordinários; permite repressão de abusos e submete reuniões públicas à polícia.",
            "basis": "norm",
            "publishedDate": "1848-03-04",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Garantias contra coerção arbitrária sustentam inclinação moderada à liberdade no recorte formal, contida pelas exceções policiais e de publicação.",
        "uncertainty": "Não é avaliação da repressão efetiva, de prisões políticas ou de liberdade para toda a população. As exceções impedem posição forte; aplicação histórica ainda não foi revisada.",
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
        "relatedQuestionIds": [
          "religiao_03",
          "religiao_08"
        ],
        "claims": [
          {
            "sourceTitle": "Statuto Albertino, 4 marzo 1848 — Quirinale",
            "locator": "Articles 1, 28 and 33(1); PDF pp. 1, 3 and 4",
            "statement": "O catolicismo é religião estatal; outros cultos são tolerados conforme lei. Livros religiosos dependem de permissão episcopal e arcebispos/bispos são uma categoria elegível ao Senado.",
            "basis": "norm",
            "publishedDate": "1848-03-04",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Religião estabelecida e papel institucional religioso sustentam direção religiosa moderada, limitada pela tolerância declarada a outros cultos.",
        "uncertainty": "Não se infere teocracia, domínio geral do direito religioso, crença dos habitantes nem ausência de conflito entre Coroa e Igreja. Estado confessional com tolerância não autoriza automaticamente âncora forte.",
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
      "scope": "Passagens normativas italianas e identificação histórica da tradução lidas; prática parlamentar/eleitoral não certificada."
    },
    "unknownAxisReasons": {
      "est": "Monarquia e leis sobre municípios, isoladamente, não bastam para estimar a distribuição real de competências territoriais.",
      "imi": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "dip": "Comando militar do rei não estabelece militarismo de todo o regime.",
      "int": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "eco": "Proteção constitucional da propriedade não mede composição pública/privada da economia.",
      "con": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "com": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "mor": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "tec": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação."
    }
  },
  "republic-texas-1836": {
    "id": "republic-texas-1836",
    "name": "República do Texas",
    "aliases": [
      "Republic of Texas"
    ],
    "period": "República do Texas — Constituição de 1836; anexação em 1845 e transferência formal em 19/2/1846",
    "rationale": "Presidência eletiva e Congresso coexistem com escravidão protegida e cidadania que exclui africanos, descendentes e indígenas.",
    "caveats": "Trata de uma república historicamente independente, reconhecida pelos EUA em 1837, não do atual Estado federado. A anexação ocorreu em dezembro de 1845 e a transferência cerimonial em fevereiro de 1846. O território era disputado; eleições dos cidadãos admitidos não tornam universal a democracia nem os direitos declarados.",
    "sources": [
      {
        "title": "WashingtonontheBrazos — RepublicTexasconstitution1836",
        "url": "https://wheretexasbecametexas.org/texas-history/constitution-of-the-republic-of-texas-1836/",
        "note": "Transcrição inglesa do sítio histórico Washington-on-the-Brazos; edição impressa e editor não identificados. Presidência e Congresso eletivos; proteção da escravidão e exclusões raciais de cidadania explícitas. Não leitura da carta inteira nem democracia universal."
      },
      {
        "title": "Constitution of the Republic of Texas, 17 March 1836 — Washington on the Brazos",
        "url": "https://wheretexasbecametexas.org/texas-history/constitution-of-the-republic-of-texas-1836/",
        "note": "Transcrição primária de Laws of the Republic of Texas (1838), vol. I, pp. 9–25, no sítio histórico de Washington on the Brazos; artigos eleitorais e declaração de direitos confrontados com exclusões gerais."
      },
      {
        "title": "Texas — Office of the Historian, U.S. Department of State",
        "url": "https://history.state.gov/countries/texas",
        "note": "Arquivo diplomático oficial documenta reconhecimento, anexação e dependência efetiva do trabalho escravizado na economia algodoeira."
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
      "rel": 60,
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
          "Constitution of the Republic of Texas, 17 March 1836 — Washington on the Brazos",
          "Texas — Office of the Historian, U.S. Department of State"
        ],
        "rationale": "A direção moderadamente democrática codifica eleições e responsabilização constitucional no grupo de cidadãos admitidos; a exclusão racial da cidadania e a reserva masculina de cargos limitam a inclusão política e impedem posição forte. O confronto com voto universal usa a exclusão racial explícita, sem extrair uma regra de sufrágio feminino apenas da cláusula sobre cargos. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não é certificado de competição livre efetiva nem de democracia inclusiva; a âncora resolve editorialmente um desenho eletivo com exclusões profundas, não calcula média entre direitos dos cidadãos e dos escravizados."
      },
      "rel": {
        "sourceTitles": [
          "Constitution of the Republic of Texas, 17 March 1836 — Washington on the Brazos"
        ],
        "rationale": "Não preferência denominacional e separação de cargos clericais sustentam laicidade institucional moderada, sem imputar irreligiosidade privada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: A linguagem da proteção é teísta e a proibição de cargos clericais também restringe direitos; não demonstramos neutralidade completa perante não crentes, financiamento religioso nem a prática de todas as políticas."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "relatedQuestionIds": [
          "representacao_01",
          "representacao_07",
          "representacao_16"
        ],
        "claims": [
          {
            "sourceTitle": "Constitution of the Republic of Texas, 17 March 1836 — Washington on the Brazos",
            "locator": "Articles I–III and VI(11–16); Schedule 3; General Provisions 6, 9–10",
            "statement": "Congresso e presidência têm eleições e limites de mandato; cidadania exclui africanos, descendentes e indígenas, e cargos são reservados a cidadãos homens. O sufrágio não é universal.",
            "basis": "norm",
            "publishedDate": "1836-03-17; transcrição de edição de 1838",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Texas — Office of the Historian, U.S. Department of State",
            "locator": "“Slavery and Cotton”",
            "statement": "O arquivo descreve dependência do trabalho escravizado na produção de algodão, confrontando as declarações abstratas de igualdade da Constituição.",
            "basis": "practice",
            "publishedDate": "Página institucional sem data de publicação indicada; relata 1836–1845",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "A direção moderadamente democrática codifica eleições e responsabilização constitucional no grupo de cidadãos admitidos; a exclusão racial da cidadania e a reserva masculina de cargos limitam a inclusão política e impedem posição forte. O confronto com voto universal usa a exclusão racial explícita, sem extrair uma regra de sufrágio feminino apenas da cláusula sobre cargos.",
        "uncertainty": "Não é certificado de competição livre efetiva nem de democracia inclusiva; a âncora resolve editorialmente um desenho eletivo com exclusões profundas, não calcula média entre direitos dos cidadãos e dos escravizados.",
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
        "position": "moderate-first",
        "confidence": "medium",
        "relatedQuestionIds": [
          "religiao_03",
          "religiao_08"
        ],
        "claims": [
          {
            "sourceTitle": "Constitution of the Republic of Texas, 17 March 1836 — Washington on the Brazos",
            "locator": "Declaration of Rights, Third; Article V(1)",
            "statement": "A declaração veda preferência legal entre denominações e garante escolha de culto; ministros religiosos não podem ocupar o Executivo ou o Congresso.",
            "basis": "norm",
            "publishedDate": "1836-03-17; transcrição de edição de 1838",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Não preferência denominacional e separação de cargos clericais sustentam laicidade institucional moderada, sem imputar irreligiosidade privada.",
        "uncertainty": "A linguagem da proteção é teísta e a proibição de cargos clericais também restringe direitos; não demonstramos neutralidade completa perante não crentes, financiamento religioso nem a prática de todas as políticas.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      }
    },
    "documentaryReview": {
      "status": "author-reviewed-bounded-claims",
      "reviewedOn": "2026-10-07",
      "independentReview": "pending",
      "scope": "Constituição primária lida com exclusões e cláusulas contrárias; contexto diplomático e escravidão efetiva confrontados."
    },
    "unknownAxisReasons": {
      "est": "Divisão em condados e existência de órgãos nacionais não comprovam sozinhas o alcance da autonomia territorial; sem regra de competências revisada, permanece desconhecido.",
      "pod": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "imi": "Exclusão racial de cidadania não se converte automaticamente em assimilação cultural.",
      "dip": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "int": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "eco": "A proteção da escravidão não demonstra política geral de propriedade pública/privada.",
      "con": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "com": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "mor": "Escravidão e exclusão racial são documentadas como limites de cidadania; não imputamos posições atuais sobre cotas, gênero, aborto ou família por analogia histórica.",
      "tec": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação."
    }
  },
  "hawaii-republic-1894": {
    "id": "hawaii-republic-1894",
    "name": "República do Havaí",
    "aliases": [
      "Republic of Hawaii"
    ],
    "period": "República do Havaí, proclamada em 4/7/1894; carta adotada em 3/7; transferência em 12/8/1898",
    "rationale": "A carta nomeia Dole presidente inicial, restringe o eleitorado masculino e limita o auxílio público às escolas controladas pelo Estado.",
    "caveats": "A proclamação republicana não comprova consentimento indígena ou sufrágio inclusivo. O primeiro Presidente foi designado na própria carta, a qual impõe juramento antimonárquico e restrições censitárias. O fac-símile integral do arquivo estadual foi localizado, mas a leitura textual usa transcrição; cotejo completo permanece pendente.",
    "sources": [
      {
        "title": "Wikisource —1894ConstitutionRepublicHawaii",
        "url": "https://en.wikisource.org/wiki/1894_Constitution_of_the_Republic_of_Hawaii",
        "note": "Transcrição inglesa da carta de 1894, artigos selecionados e assinaturas consultados. Adoção em 3/7 é distinta da proclamação em 4/7. Restrições de voto, juramento contra a monarquia e escola pública limitam a promessa representativa; não leitura dos 103 artigos."
      },
      {
        "title": "Constitution of the Republic of Hawaii, 1894 — transcrição histórica",
        "url": "https://en.wikisource.org/wiki/1894_Constitution_of_the_Republic_of_Hawaii",
        "note": "Transcrição do texto primário, com limites de procedência; artigos 2, 23, 74, 76, 97 e 101."
      },
      {
        "title": "1894 Constitutional Convention — Hawaiʻi State Archives",
        "url": "https://ags.hawaii.gov/archives/online-exhibitions/1894-constitutional-convention/",
        "note": "Arquivo estadual documenta ruptura de 1893 e convenção, adoção e promulgação em 1894; fac-símile disponível de grande tamanho."
      },
      {
        "title": "Lowrey v. Territory of Hawaii, 206 U.S. 206 (1907)",
        "url": "https://www.law.cornell.edu/supremecourt/text/206/206",
        "note": "Decisão primária de 1907 cita a vedação escolar de 1894. Corrobora conteúdo jurídico; não certifica execução durante a República."
      },
      {
        "title": "Joint Resolution for Annexing the Hawaiian Islands (1898) — National Archives",
        "url": "https://www.archives.gov/milestone-documents/joint-resolution-for-annexing-the-hawaiian-islands",
        "note": "Resolução primária de 7 de julho de 1898 e contexto arquivístico documentam anexação e oposição indígena, delimitando a unidade independente."
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
      "rel": 60,
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
          "Constitution of the Republic of Hawaii, 1894 — transcrição histórica"
        ],
        "rationale": "Fundação presidencial designada e filtros políticos/censitários substanciais sustentam direção autocrática moderada, contida pela existência de legislativo eletivo. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não mede competição real nem posição de todos os habitantes. Requisitos textuais precisam de cotejo integral com o fac-símile estadual; não presumimos eleição presidencial direta ou universal."
      },
      "rel": {
        "sourceTitles": [
          "Constitution of the Republic of Hawaii, 1894 — transcrição histórica",
          "Lowrey v. Territory of Hawaii, 206 U.S. 206 (1907)"
        ],
        "rationale": "Separação financeira escolar e liberdade denominacional sustentam laicidade institucional moderada no domínio revisado. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Cobertura parcial de culto e financiamento escolar, desde 1896, também abrangendo escolas privadas não confessionais. O relato processual Lowrey alega continuidade de ensino religioso público até 1903: não certificamos cumprimento republicano. Linguagem teísta não prova igualdade para não crentes."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-second",
        "confidence": "medium",
        "relatedQuestionIds": [
          "representacao_15",
          "representacao_16"
        ],
        "claims": [
          {
            "sourceTitle": "Constitution of the Republic of Hawaii, 1894 — transcrição histórica",
            "locator": "Art. 23, 74, 76 e 101",
            "statement": "A carta designa Dole primeiro Presidente; eleições legislativas dependem de requisitos masculinos, alfabetização, lealdade republicana e, para o Senado, patrimônio ou renda.",
            "basis": "norm",
            "publishedDate": "1894-07-03; promulgada em 1894-07-04",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Fundação presidencial designada e filtros políticos/censitários substanciais sustentam direção autocrática moderada, contida pela existência de legislativo eletivo.",
        "uncertainty": "Não mede competição real nem posição de todos os habitantes. Requisitos textuais precisam de cotejo integral com o fac-símile estadual; não presumimos eleição presidencial direta ou universal.",
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
        "position": "moderate-first",
        "confidence": "medium",
        "relatedQuestionIds": [
          "religiao_03",
          "religiao_08"
        ],
        "claims": [
          {
            "sourceTitle": "Constitution of the Republic of Hawaii, 1894 — transcrição histórica",
            "locator": "Art. 2 e 97",
            "statement": "Liberdade de culto teísta é prevista; após 31 de dezembro de 1895 ficam vedados recursos e terras públicas em favor de escolas confessionais ou privadas.",
            "basis": "norm",
            "publishedDate": "1894-07-03; vedação financeira com início diferido para 1896",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Lowrey v. Territory of Hawaii, 206 U.S. 206 (1907)",
            "locator": "Discussão da Constituição de 1894 e proibição de apoio a escolas sectárias",
            "statement": "A Suprema Corte reproduz a vedação de financiamento público escolar confessional e sua continuidade na lei territorial posterior.",
            "basis": "norm",
            "publishedDate": "1907-05-13",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Separação financeira escolar e liberdade denominacional sustentam laicidade institucional moderada no domínio revisado.",
        "uncertainty": "Cobertura parcial de culto e financiamento escolar, desde 1896, também abrangendo escolas privadas não confessionais. O relato processual Lowrey alega continuidade de ensino religioso público até 1903: não certificamos cumprimento republicano. Linguagem teísta não prova igualdade para não crentes.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      }
    },
    "documentaryReview": {
      "status": "author-reviewed-bounded-claims",
      "reviewedOn": "2026-10-07",
      "independentReview": "pending",
      "scope": "Convenção no arquivo estadual, transcrição e corroboração judicial específica; fac-símile integral ainda não cotejado."
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
    },
    "identityOrigin": {
      "disposition": "new-historical-unit",
      "distinctness": "República sucessora da monarquia deposta, com carta e instituições próprias; não é a ideologia regional havaiana."
    },
    "codingScope": "República independente, 1894–1898; desenho da carta promulgada em 4 de julho de 1894"
  },
  "north-german-confederation-1867": {
    "id": "north-german-confederation-1867",
    "name": "Confederação da Alemanha do Norte",
    "aliases": [],
    "period": "Confederação da Alemanha do Norte — fase constitucional de 1867 até a formação do Reich em 1871",
    "rationale": "A união distribui a legislação entre Conselho Federal e Reichstag, com primazia das leis federais e predomínio prussiano no Conselho.",
    "caveats": "Graduação normativa delimitada, confiança média; não certifica prática nem continuidade de todo o período. Cotejo integral e revisão independente pendentes. ",
    "sources": [
      {
        "title": "Wikisource — VerfassungdesNorddeutschenBundes",
        "url": "https://de.wikisource.org/wiki/Verfassung_des_Norddeutschen_Bundes",
        "note": "Texto alemão reproduzido do Bundesgesetzblatt de 1867, páginas 1–23; artigos 1–7 consultados. Publicando de 26/7 e publicação de 2/8 não provam adoção em abril. União constitucional distinta da Confederação Germânica de 1815 e do Império posterior."
      },
      {
        "title": "Verfassung des Norddeutschen Bundes — Bundesgesetzblatt 1867",
        "url": "https://de.wikisource.org/wiki/Verfassung_des_Norddeutschen_Bundes",
        "note": "Texto primário transcrito/traduzido: locadores em coding. Edição consultada em 7/10/2026; não constitui certificação arquivística."
      },
      {
        "title": "Preußen und der Norddeutsche Bund — Deutscher Bundestag",
        "url": "https://www.bundestag.de/besuche/ausstellungen/verfassung/tafel12",
        "note": "Exposição parlamentar consultada: constituição federal1867 e transição imperial1871, não aliases de governo."
      }
    ],
    "kind": "country",
    "category": "historical-country",
    "vec": {
      "est": 60,
      "rep": 60,
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
      "est": "medium",
      "rep": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Verfassung des Norddeutschen Bundes — Bundesgesetzblatt 1867"
        ],
        "rationale": "Partilha institucional efetiva no texto sustenta federalismo moderado. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Predomínio prussiano e intervenção federal impedem inferir máxima autonomia."
      },
      "rep": {
        "sourceTitles": [
          "Verfassung des Norddeutschen Bundes — Bundesgesetzblatt 1867"
        ],
        "rationale": "Eleição e veto legislativo sustentam representação moderada, apesar do executivo dinástico. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Norma remete à lei eleitoral; universal não comprova inclusão feminina nem prática competitiva."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Verfassung des Norddeutschen Bundes — Bundesgesetzblatt 1867",
            "locator": "Arts.4–8,19,36",
            "statement": "Estados participam do Bundesrat e executam tributação; competências federais enumeradas e execução coercitiva federal limitam autonomia.",
            "basis": "norm",
            "publishedDate": "1867",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Partilha institucional efetiva no texto sustenta federalismo moderado.",
        "uncertainty": "Predomínio prussiano e intervenção federal impedem inferir máxima autonomia.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "rep": {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Verfassung des Norddeutschen Bundes — Bundesgesetzblatt 1867",
            "locator": "Arts.5,11,15,20,23–26",
            "statement": "Reichstag eletivo secreto participa necessariamente da lei; chanceler depende da Presidência prussiana, não de confiança parlamentar.",
            "basis": "norm",
            "publishedDate": "1867",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Eleição e veto legislativo sustentam representação moderada, apesar do executivo dinástico.",
        "uncertainty": "Norma remete à lei eleitoral; universal não comprova inclusão feminina nem prática competitiva.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
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
    }
  },
  "belgium-unitary-kingdom-1831": {
    "id": "belgium-unitary-kingdom-1831",
    "name": "Bélgica — reino unitário",
    "aliases": [],
    "period": "Bélgica — carta unitária de 7/2/1831; federalização iniciada em 1970, consagrada em 1993",
    "rationale": "Rei e duas câmaras compartilham a legislação; liberdades civis e religiosas coexistem com eleitorado censitário e conselhos provinciais.",
    "caveats": "Graduação normativa delimitada, confiança média; não certifica prática nem continuidade de todo o período. Cotejo integral e revisão independente pendentes. est desconhecido: autonomia provincial do art.31 não é automaticamente federalismo.",
    "sources": [
      {
        "title": "Constitute — Belgium1831Historical",
        "url": "https://www.constituteproject.org/constitution/Belgium_1831",
        "note": "Tradução inglesa histórica de 1831; tradutor não identificado no trecho. Artigos 1–49 consultados, sem títulos temáticos editoriais como evidência. Eleitorado censitário e limites à reunião ao ar livre; início da federalização em 1970 não equivale a Estado já federal."
      },
      {
        "title": "Belgium Constitution 1831 — edição histórica traduzida",
        "url": "https://www.constituteproject.org/constitution/Belgium_1831",
        "note": "Texto primário transcrito/traduzido: locadores em coding. Edição consultada em 7/10/2026; não constitui certificação arquivística."
      },
      {
        "title": "Historical outline of the federalisation of Belgium — governo belga",
        "url": "https://www.belgium.be/en/about_belgium/country/history/belgium_from_1830/formation_federal_state",
        "note": "Cronologia institucional distingue primeira reforma em1970 e Estado federal criado pela revisão de5/5/1993; não usado para graduar eixos."
      }
    ],
    "kind": "country",
    "category": "historical-country",
    "vec": {
      "est": 50,
      "rep": 60,
      "pod": 40,
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
      "rep": "medium",
      "pod": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Belgium Constitution 1831 — edição histórica traduzida"
        ],
        "rationale": "Poder legislativo autônomo eletivo sustenta representação moderada com exclusões. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não é sufrágio universal; competição e responsabilidade ministerial efetivas pendentes."
      },
      "pod": {
        "sourceTitles": [
          "Belgium Constitution 1831 — edição histórica traduzida"
        ],
        "rationale": "Garantias civis delimitadas sustentam liberdade moderada normativa. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não cobre prática colonial nem exceções legislativas posteriores."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Belgium Constitution 1831 — edição histórica traduzida",
            "locator": "Arts.26–27,40–42,47,50",
            "statement": "Câmaras têm iniciativa, investigação e emenda; deputados eleitos diretamente dependem de censo tributário e Coroa participa da lei.",
            "basis": "norm",
            "publishedDate": "1831-02-07",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Poder legislativo autônomo eletivo sustenta representação moderada com exclusões.",
        "uncertainty": "Não é sufrágio universal; competição e responsabilidade ministerial efetivas pendentes.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "pod": {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Belgium Constitution 1831 — edição histórica traduzida",
            "locator": "Arts.7–10,18–20",
            "statement": "Detenção e busca seguem formas legais; imprensa sem censura e associação são protegidas, reuniões externas sujeitas à polícia.",
            "basis": "norm",
            "publishedDate": "1831-02-07",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Garantias civis delimitadas sustentam liberdade moderada normativa.",
        "uncertainty": "Não cobre prática colonial nem exceções legislativas posteriores.",
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
      "imi": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "dip": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "int": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "eco": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "con": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "com": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "rel": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "mor": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "tec": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação."
    }
  },
  "bavaria-kingdom-1818": {
    "id": "bavaria-kingdom-1818",
    "name": "Reino da Baviera",
    "aliases": [],
    "period": "Reino da Baviera — fase constitucional de 26/5/1818 até o fim da monarquia em novembro de 1918",
    "rationale": "O rei conserva autoridade em monarquia hereditária e concede representação em duas câmaras, liberdades e gestão comunal.",
    "caveats": "Graduação normativa delimitada, confiança média; não certifica prática nem continuidade de todo o período. Cotejo integral e revisão independente pendentes. Tradução histórica ainda sem cotejo alemão integral. A condição de membro confederal não torna a estrutura INTERNA automaticamente federal.",
    "sources": [
      {
        "title": "Wikisource — ConstitutionKingdomBavaria1818",
        "url": "https://en.wikisource.org/wiki/Constitution_of_the_Kingdom_of_Bavaria_(1818)",
        "note": "Tradução inglesa histórica, tradutor e volume original não identificados. Preâmbulo e títulos I–II selecionados lidos; representação e liberdades declaradas coexistem com autoridade real e sucessão masculina. Não certifica fundação do Reino em 1806 ou toda sua prática."
      },
      {
        "title": "Constitution of the Kingdom of Bavaria1818 — tradução histórica",
        "url": "https://en.wikisource.org/wiki/Constitution_of_the_Kingdom_of_Bavaria_(1818)",
        "note": "Texto primário transcrito/traduzido: locadores em coding. Edição consultada em 7/10/2026; não constitui certificação arquivística."
      },
      {
        "title": "The constitution of the Kingdom of Bavaria1818–1918 — Bayerische Staatsbibliothek",
        "url": "https://www.bsb-muenchen.de/en/article/the-constitution-of-the-kingdom-of-bavaria-1818-1918-a-virtual-exhibition-in-the-cultural-portal-bavarikon-2414/",
        "note": "Identificação institucional da carta e sua permanência emendada até o fim do reino; âncoras continuam estritamente1818."
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
          "Constitution of the Kingdom of Bavaria1818 — tradução histórica"
        ],
        "rationale": "Representação estamental subordinada sustenta autocracia moderada com veto tributário contrário. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não infere ausência total de representação nem competição moderna."
      },
      "rel": {
        "sourceTitles": [
          "Constitution of the Kingdom of Bavaria1818 — tradução histórica"
        ],
        "rationale": "Privilégio confessional de cidadania/cargo sustenta polo religioso moderado. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Supervisão régia limita autonomia eclesial; não infere teocracia."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constitution of the Kingdom of Bavaria1818 — tradução histórica",
            "locator": "TitleVI,arts.VII–XIII; TitleVII,arts.II–IV",
            "statement": "Representação por classes exige propriedade e fé cristã; rei dissolve câmaras, que consentem leis pessoais e impostos.",
            "basis": "norm",
            "publishedDate": "1818-05-26",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Representação estamental subordinada sustenta autocracia moderada com veto tributário contrário.",
        "uncertainty": "Não infere ausência total de representação nem competição moderna.",
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
            "sourceTitle": "Constitution of the Kingdom of Bavaria1818 — tradução histórica",
            "locator": "TitleIV,art.IX; TitleVI,art.XII",
            "statement": "Consciência doméstica é livre; três igrejas cristãs têm igualdade, mas não cristãos têm cidadania condicionada e deputados devem ser cristãos.",
            "basis": "norm",
            "publishedDate": "1818-05-26",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Privilégio confessional de cidadania/cargo sustenta polo religioso moderado.",
        "uncertainty": "Supervisão régia limita autonomia eclesial; não infere teocracia.",
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
  },
  "mexico-first-federal-republic-1824": {
    "id": "mexico-first-federal-republic-1824",
    "name": "México — Primeira República Federal",
    "aliases": [
      "Estados Unidos Mexicanos — primeira ordem federal"
    ],
    "period": "México — carta federal de 4/10/1824; fase federal substituída pelas bases de 23/10/1835",
    "rationale": "A carta estabelece República representativa federal e Congresso bicameral, permitindo exclusivamente a religião católica.",
    "caveats": "Unidade pós-imperial distinta do PRI e do Estado contemporâneo. O retorno federal posterior não é incluído como se houvesse continuidade sem ruptura. Texto estadual sobre franquia não revisado: representação fica desconhecida. Catolicismo exclusivo não comprova por si teocracia ou domínio geral do direito religioso.",
    "sources": [
      {
        "title": "Wikisource — ConstituciónFederalMéxico1824",
        "url": "https://es.wikisource.org/wiki/Constituci%C3%B3n_Federal_de_los_Estados_Unidos_Mexicanos_(1824)",
        "note": "Transcrição espanhola de 4/10/1824; preâmbulo e artigos 1–21 consultados. Religião exclusiva e eleição indireta limitam a República representativa. Nota editorial que simplifica substituição em 1857 excluída; fim de 1835 tem prova histórica separada."
      },
      {
        "title": "Constitución Federal de los Estados Unidos Mexicanos, 1824 — transcrição primária",
        "url": "https://es.wikisource.org/wiki/Constituci%C3%B3n_Federal_de_los_Estados_Unidos_Mexicanos_(1824)",
        "note": "Transcrição primária dos artigos3/4/50/157–162; cotejo integral pendente."
      },
      {
        "title": "Constituição1824 — fac-símile da Câmara dos Deputados",
        "url": "https://www.diputados.gob.mx/biblioteca/bibdig/const_mex/const_1824.pdf",
        "note": "Fac-símile oficial localizado,19páginas; camada de texto indisponível. Não afirmamos cotejo integral."
      },
      {
        "title": "Antecedentes históricos constitucionales — Orden Jurídico Nacional",
        "url": "https://www.ordenjuridico.gob.mx/Constitucion/antecedentes.php",
        "note": "Catálogo governamental identifica carta de1824 e Bases de23/10/1835, limite temporal da primeira ordem."
      }
    ],
    "kind": "country",
    "category": "historical-country",
    "vec": {
      "est": 60,
      "rep": 50,
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
      "est": "medium",
      "rel": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Constitución Federal de los Estados Unidos Mexicanos, 1824 — transcrição primária"
        ],
        "rationale": "Competências territoriais constitutivas sustentam federalismo moderado. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Congresso nacional tem competências materiais e Estados devem executar leis gerais; não presume soberania separada nem autonomia efetiva igual."
      },
      "rel": {
        "sourceTitles": [
          "Constitución Federal de los Estados Unidos Mexicanos, 1824 — transcrição primária"
        ],
        "rationale": "Confessionalidade exclusiva sustenta direção religiosa moderada no construto institucional. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não prova jurisdição clerical geral ou crença popular; exclusividade de culto isolada não autoriza âncora forte automaticamente."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constitución Federal de los Estados Unidos Mexicanos, 1824 — transcrição primária",
            "locator": "Arts.4,50 e157–162",
            "statement": "Estados possuem constituições, legislaturas, Executivo e Judiciário próprios, sujeitos à Constituição e leis federais.",
            "basis": "norm",
            "publishedDate": "1824-10-04",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Competências territoriais constitutivas sustentam federalismo moderado.",
        "uncertainty": "Congresso nacional tem competências materiais e Estados devem executar leis gerais; não presume soberania separada nem autonomia efetiva igual.",
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
            "sourceTitle": "Constitución Federal de los Estados Unidos Mexicanos, 1824 — transcrição primária",
            "locator": "Art.3",
            "statement": "Catolicismo é religião nacional protegida por leis; exercício de outras religiões é proibido.",
            "basis": "norm",
            "publishedDate": "1824-10-04",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Confessionalidade exclusiva sustenta direção religiosa moderada no construto institucional.",
        "uncertainty": "Não prova jurisdição clerical geral ou crença popular; exclusividade de culto isolada não autoriza âncora forte automaticamente.",
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
      "scope": "Cláusulas transcritas e catálogo cronológico oficial; cotejo integral e execução pendentes."
    },
    "unknownAxisReasons": {
      "rep": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
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
  },
  "irish-free-state-1922": {
    "id": "irish-free-state-1922",
    "name": "Estado Livre Irlandês",
    "aliases": [
      "Saorstát Éireann"
    ],
    "period": "Estado Livre Irlandês — carta de 1922, substituída em 29/12/1937",
    "rationale": "Governo responsável perante o Dáil e parlamento com a Coroa coexistem com voto de ambos os sexos e não preferência religiosa.",
    "caveats": "Distinto da ordem constitucional irlandesa de1937; não inventa período com base em troca de gabinete. Emendas alteraram Coroa, Senado e instrumentos populares antes de1937. Carta fundadora não certifica execução durante guerra civil; original oficial inacessível nesta revisão, transcrição explícita e cotejo pendente.",
    "sources": [
      {
        "title": "Wikisource — ConstitutionIrishFreeStateAct1922",
        "url": "https://en.wikisource.org/wiki/Constitution_of_the_Irish_Free_State_(Saorst%C3%A1t_Eireann)_Act,_1922",
        "note": "Transcrição inglesa do ato de 1922 e primeiro anexo, sem atribuir alterações posteriores ao original. Artigos selecionados 6–14 e 50–53 lidos; presença da Coroa, supremacia do tratado e exceção militar são limites. Substituição em dezembro de 1937 é distinta da aprovação popular em julho."
      },
      {
        "title": "Constitution of the Irish Free State Act, 1922 — transcrição primária",
        "url": "https://en.wikisource.org/wiki/Constitution_of_the_Irish_Free_State_(Saorst%C3%A1t_Eireann)_Act,_1922",
        "note": "Ato e anexos primários: artigos6–9/12/14/51–53; fonte de transcrição sem certificação de cotejo integral."
      },
      {
        "title": "Dáil debate,10December1937 — Oireachtas",
        "url": "https://www.oireachtas.ie/en/debates/debate/dail/1937-12-10/16/",
        "note": "Trecho indexado primário identifica revogação da carta vigente em29/12/1937; página integral retorna403, logo não usada para codificar eixos."
      }
    ],
    "kind": "country",
    "category": "historical-country",
    "vec": {
      "est": 50,
      "rep": 60,
      "pod": 40,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 60,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "rep": "medium",
      "pod": "medium",
      "rel": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constitution of the Irish Free State Act, 1922 — transcrição primária"
        ],
        "rationale": "Voto e confiança parlamentar sustentam representação democrática moderada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Tratado, juramento e reserva da Coroa limitam o contexto; não presume igualdade política além das regras eleitorais legais nem prática estável até1937."
      },
      "pod": {
        "sourceTitles": [
          "Constitution of the Irish Free State Act, 1922 — transcrição primária"
        ],
        "rationale": "Garantias contra coerção arbitrária sustentam liberdade moderada, com exceções expressas. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Sem auditoria de guerra civil, execução e leis de segurança; ordem pública/moralidade também condicionam proteção."
      },
      "rel": {
        "sourceTitles": [
          "Constitution of the Irish Free State Act, 1922 — transcrição primária"
        ],
        "rationale": "Neutralidade denominacional expressa sustenta laicidade institucional moderada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não exclui financiamento escolar confessional igualitário, nem presume irreligiosidade dos cidadãos ou cumprimento pleno."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constitution of the Irish Free State Act, 1922 — transcrição primária",
            "locator": "First Schedule, arts.12/14 e51–53",
            "statement": "Voto secreto sem distinção de sexo e governo dependente da maioria do Dáil coexistem com Rei e representante da Coroa.",
            "basis": "norm",
            "publishedDate": "1922; edição original do ato constitucional",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Voto e confiança parlamentar sustentam representação democrática moderada.",
        "uncertainty": "Tratado, juramento e reserva da Coroa limitam o contexto; não presume igualdade política além das regras eleitorais legais nem prática estável até1937.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "pod": {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constitution of the Irish Free State Act, 1922 — transcrição primária",
            "locator": "First Schedule, arts.6–9",
            "statement": "Revisão judicial de detenção, domicílio e liberdades de expressão e associação são protegidos; guerra/rebelião limita tutela contra atos militares.",
            "basis": "norm",
            "publishedDate": "1922; edição original do ato constitucional",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Garantias contra coerção arbitrária sustentam liberdade moderada, com exceções expressas.",
        "uncertainty": "Sem auditoria de guerra civil, execução e leis de segurança; ordem pública/moralidade também condicionam proteção.",
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
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constitution of the Irish Free State Act, 1922 — transcrição primária",
            "locator": "First Schedule, art.8",
            "statement": "Liberdade de consciência é garantida; proíbe preferência ou financiamento de religião e discriminação entre escolas denominacionais subsidiadas.",
            "basis": "norm",
            "publishedDate": "1922; edição original do ato constitucional",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Neutralidade denominacional expressa sustenta laicidade institucional moderada.",
        "uncertainty": "Não exclui financiamento escolar confessional igualitário, nem presume irreligiosidade dos cidadãos ou cumprimento pleno.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      }
    },
    "documentaryReview": {
      "status": "author-reviewed-bounded-claims",
      "reviewedOn": "2026-10-07",
      "independentReview": "pending",
      "scope": "Ato e anexos transcritos, recorte original; cotejo oficial e prática pendentes."
    },
    "unknownAxisReasons": {
      "est": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
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
  "finland-constitution-republic-1919": {
    "id": "finland-constitution-republic-1919",
    "name": "Finlândia — república da Constituição de 1919",
    "aliases": [
      "Suomen Hallitusmuoto — ordem republicana de 1919"
    ],
    "period": "Finlândia — Ato Constitucional de 17/7/1919, substituído em 1/3/2000",
    "rationale": "O povo exerce soberania por representantes; o presidente governa com ministros sujeitos à confiança parlamentar e garantias individuais.",
    "caveats": "O perfil não equivale à Finlândia atual sob a Constituição de 2000. A vida jurídica de 81 anos inclui emendas e mudanças políticas; a codificação abaixo é exclusivamente da edição original, não certificação da prática interbélica nem média de todo o período. Tradução histórica requer cotejo completo com original finlandês.",
    "sources": [
      {
        "title": "Wikisource — ConstitutionFinland1919",
        "url": "https://en.wikisource.org/wiki/Constitution_of_Finland_(1919)",
        "note": "Tradução inglesa do ato de 1919; tradutor e edição original não recuperados. Preâmbulo e artigos selecionados 1–7/35–41 consultados. Ministros sujeitos à confiança parlamentar; propriedade e direitos têm limites legais. Datas cotejadas separadamente no Finlex, sem ler a lei inteira."
      },
      {
        "title": "Constitution of Finland (1919) — tradução histórica",
        "url": "https://en.wikisource.org/wiki/Constitution_of_Finland_(1919)",
        "note": "Tradução do documento primário de 17 de julho de 1919. Usa-se o corpo da carta; o apêndice parlamentar de 1906 não é tratado como prova independente de sufrágio em todos os anos."
      },
      {
        "title": "The Constitution of Finland 731/1999 — Finlex",
        "url": "https://www.finlex.fi/en/legislation/translations/1999/eng/731",
        "note": "Constituição nº 731/1999, seções 130–131: início em 1º de março de 2000 e revogação da Constituição de 1919."
      }
    ],
    "kind": "country",
    "category": "historical-country",
    "vec": {
      "est": 50,
      "rep": 60,
      "pod": 40,
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
      "rep": "medium",
      "pod": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constitution of Finland (1919) — tradução histórica"
        ],
        "rationale": "Representação e confiança ministerial sustentam direção democrática moderada, limitada por prerrogativas presidenciais relevantes. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Sem auditoria de eleições, exclusões ou exercício presidencial efetivo; não afirma democracia plena nem imputa continuidade de cada cláusula até 2000."
      },
      "pod": {
        "sourceTitles": [
          "Constitution of Finland (1919) — tradução histórica"
        ],
        "rationale": "Garantias expressas contra coerção arbitrária sustentam direção moderada de liberdade, limitada pelas exceções. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: O texto não demonstra execução, leis de exceção nem tratamento de opositores durante todo o período. Tradução ainda não integralmente cotejada; a direção não é irrestrita."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "relatedQuestionIds": [
          "representacao_15"
        ],
        "claims": [
          {
            "sourceTitle": "Constitution of Finland (1919) — tradução histórica",
            "locator": "Art. 2, 19, 23, 27, 36, 43 e 45",
            "statement": "Assembleia representa o povo, ministros precisam de confiança parlamentar e respondem perante ela; Presidente é escolhido por colégio eleitoral popular, pode dissolver a Assembleia e possui veto superável.",
            "basis": "norm",
            "publishedDate": "1919-07-17",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Representação e confiança ministerial sustentam direção democrática moderada, limitada por prerrogativas presidenciais relevantes.",
        "uncertainty": "Sem auditoria de eleições, exclusões ou exercício presidencial efetivo; não afirma democracia plena nem imputa continuidade de cada cláusula até 2000.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "pod": {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "relatedQuestionIds": [
          "poder_04",
          "poder_19"
        ],
        "claims": [
          {
            "sourceTitle": "Constitution of Finland (1919) — tradução histórica",
            "locator": "Art. 6, 10–13, 16 e 60",
            "statement": "Carta garante liberdade pessoal, expressão sem censura prévia, reunião, privacidade e juízo regular; proíbe tribunais extraordinários, mas admite restrições por guerra, insurreição e hipóteses legais.",
            "basis": "norm",
            "publishedDate": "1919-07-17",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Garantias expressas contra coerção arbitrária sustentam direção moderada de liberdade, limitada pelas exceções.",
        "uncertainty": "O texto não demonstra execução, leis de exceção nem tratamento de opositores durante todo o período. Tradução ainda não integralmente cotejada; a direção não é irrestrita.",
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
      "scope": "Tradução original e identificação oficial da carta substitutiva; cotejo finlandês e prática não certificados."
    },
    "unknownAxisReasons": {
      "est": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
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
      "distinctness": "Ordem republicana fundada na carta de 1919, juridicamente substituída em 2000; fonte fundadora não representa todos os 81 anos."
    },
    "codingScope": "Unidade constitucional, 1919–2000; codificação da edição fundadora de 17 de julho de 1919"
  },
  "norway-swedish-union-1814": {
    "id": "norway-swedish-union-1814",
    "name": "Noruega — reino constitucional na união com a Suécia",
    "aliases": [
      "Noruega na união sueco-norueguesa"
    ],
    "period": "Noruega — Constituição própria na união com a Suécia, 1814–1905; revisão de 4/11/1814",
    "rationale": "A Constituição preserva um reino norueguês unido à Suécia sob rei comum; o Storting limita mudanças da Coroa e amplia controles.",
    "caveats": "A união não é uma simples fase do Estado atual: foi estabelecida em novembro de 1814 e dissolvida em 1905. A âncora não resume 91 anos: distingue o desenho original e os controles anteriores a 1884 da responsabilidade parlamentar posterior. Mulheres e muitos homens eram excluídos inicialmente.",
    "sources": [
      {
        "title": "Storting — MilestonesinNorwaydemocratichistory",
        "url": "https://www.stortinget.no/en/In-English/About-the-Storting/historical-highlights/milestones-in-norways-democratic-history/",
        "note": "História institucional do Storting que reproduz o artigo 1 revisado em 4/11/1814. Reino e Constituição próprios sob rei comum; controles mudaram durante a união. Dissolução decidida em 7/6/1905 e reconhecida pela Suécia em 26/10; não leitura de toda a carta original."
      },
      {
        "title": "Milestones in Norway’s democratic history — Storting",
        "url": "https://www.stortinget.no/en/In-English/About-the-Storting/historical-highlights/milestones-in-norways-democratic-history/",
        "note": "História institucional do Parlamento preserva citações da revisão de novembro de 1814 e documenta controle da Coroa, sufrágio, parlamentarismo de 1884 e dissolução de 1905. Não substitui edição integral original."
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
          "Milestones in Norway’s democratic history — Storting"
        ],
        "rationale": "Representação com controles materiais da Coroa sustenta direção democrática moderada para o recorte anterior ao parlamentarismo pleno. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Fonte institucional retrospectiva, sem leitura completa do original de 1814 ou auditoria de cada eleição. Não imputa sufrágio universal, estabilidade do mesmo arranjo até 1905 nem democrático por ser simplesmente monarquia constitucional."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "relatedQuestionIds": [
          "representacao_15",
          "representacao_16"
        ],
        "claims": [
          {
            "sourceTitle": "Milestones in Norway’s democratic history — Storting",
            "locator": "Seções “1814”, “1814–1884”, “1833”, “1871” e “1884”",
            "statement": "Parlamento representativo rejeita reformas reais, ganha composição agrária e sessões anuais; parlamentarismo baseado na confiança surge em 1884, após conflito e impeachment. Franquia original exclui mulheres e muitos homens.",
            "basis": "practice",
            "publishedDate": "Página institucional sem data indicada; recorte de 1814–1884",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Representação com controles materiais da Coroa sustenta direção democrática moderada para o recorte anterior ao parlamentarismo pleno.",
        "uncertainty": "Fonte institucional retrospectiva, sem leitura completa do original de 1814 ou auditoria de cada eleição. Não imputa sufrágio universal, estabilidade do mesmo arranjo até 1905 nem democrático por ser simplesmente monarquia constitucional.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      }
    },
    "documentaryReview": {
      "status": "author-reviewed-bounded-claims",
      "reviewedOn": "2026-10-07",
      "independentReview": "pending",
      "scope": "Contexto institucional e excertos constitucionais oficiais; edição integral original e mudanças legais posteriores pendentes."
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
      "distinctness": "Reino constitucional em união política com a Suécia, encerrada em 1905; não uma divisão artificial em antes/depois de 1884."
    },
    "codingScope": "Unidade histórica da união, 1814–1905; codificação delimitada ao desenho inicial e controles parlamentares anteriores a 1884"
  }
} as unknown as Record<string,ReferenceEntry>;

const allowedFields = {
  "german-empire-1871": [
    "sources",
    "rationale",
    "period"
  ],
  "germany-third-reich": [
    "sources",
    "rationale",
    "period"
  ],
  "russian-empire-1906": [
    "sources",
    "rationale",
    "period"
  ],
  "russian-provisional-1917": [
    "sources",
    "rationale",
    "period"
  ],
  "us-articles-confederation-1781": [
    "rationale",
    "sources",
    "period"
  ],
  "sardinia-statuto-1848": [
    "rationale",
    "sources",
    "period"
  ],
  "republic-texas-1836": [
    "rationale",
    "sources",
    "period"
  ],
  "hawaii-republic-1894": [
    "rationale",
    "sources",
    "period"
  ],
  "north-german-confederation-1867": [
    "rationale",
    "sources",
    "period"
  ],
  "belgium-unitary-kingdom-1831": [
    "rationale",
    "sources",
    "period"
  ],
  "bavaria-kingdom-1818": [
    "rationale",
    "sources",
    "period"
  ],
  "mexico-first-federal-republic-1824": [
    "rationale",
    "sources",
    "period"
  ],
  "irish-free-state-1922": [
    "rationale",
    "sources",
    "period"
  ],
  "finland-constitution-republic-1919": [
    "rationale",
    "sources",
    "period"
  ],
  "norway-swedish-union-1814": [
    "rationale",
    "sources",
    "period"
  ]
} as Record<string, (keyof ReferenceEntry)[]>;
export function reconcileHistoricalCountryProvenance04(entry:ReferenceEntry):ReferenceEntry {
 const before=historicalCountryProvenance04Before[entry.id], proposal=historicalCountryProvenance04Proposals[entry.id];
 if(!before||!proposal||JSON.stringify(entry)!==JSON.stringify(before)) return entry;
 const patch:Partial<ReferenceEntry>={};
 for(const key of allowedFields[entry.id]) {
  if(key==='sources') patch.sources=proposal.sources.map(source=>entry.sources.find(old=>JSON.stringify(old)===JSON.stringify(source))??source);
  else Object.assign(patch,{[key]:proposal[key]});
 }
 return {...entry,...patch};
}
