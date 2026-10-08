/** Generated from docs/research/ideology75/selected-75.json and identity-resolution.json.
 * Qualitative research only. Scores are not generated from coverage prospects.
 * Input SHA-256: ef57dcfc83eb3ba6f71a4db2bdc43fc95c69993715253967ed2f1ca3d4761883.
 */
import type { ReferenceSource } from './references';
export interface IdeologySelectionProfile {researchId:string;id:string;existing:boolean;name:string;period:string;rationale:string;caveats:string;family:string;neighbors:{id:string;difference:string}[];sources:ReferenceSource[]}
export const ideology75Profiles: readonly IdeologySelectionProfile[] = [
  {
    "researchId": "ideology-classical-liberalism",
    "id": "ideology-program-constitutional-liberalism-constant-1819",
    "existing": false,
    "name": "Liberalismo clássico constitucional (Constant, 1819)",
    "period": "Benjamin Constant, discurso de 1819; não todo liberalismo dos séculos XVIII–XIX.",
    "rationale": "Liberdade individual protegida por limites à soberania e por governo representativo em sociedades comerciais. Representação sujeita à vigilância cidadã, garantias civis e autonomia privada.",
    "caveats": "A defesa da representação não equivale automaticamente a sufrágio universal. O texto longo de Constant de 1806 não deve ser confundido com a obra curta de 1815. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "liberal-republicana",
    "neighbors": [
      {
        "id": "ideology-social-liberalism",
        "difference": "Hobhouse exige condições sociais positivas da liberdade."
      },
      {
        "id": "ideology-civic-republicanism",
        "difference": "Pettit torna a não dominação, inclusive privada, o critério institucional central."
      }
    ],
    "sources": [
      {
        "title": "The Liberty of Ancients Compared with that of Moderns",
        "url": "https://oll-resources.s3.us-east-2.amazonaws.com/oll3/store/titles/2251/Constant_Liberty1521_EBk_v6.0.pdf",
        "note": "Publicação: 1819. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: pp. 9–14, liberdade moderna, comércio e sistema representativo. Leitura efetiva declarada na pesquisa: Passagens indicadas recuperadas por busca e/ou abertura; não foi feita leitura integral do livro."
      },
      {
        "title": "Liberalism",
        "url": "https://plato.stanford.edu/entries/liberalism/",
        "note": "Publicação: 2026-02-25. Acesso registrado pela pesquisa: 2026-10-08. Tipo: scholarly. Localizador: §§1–2. Leitura efetiva declarada na pesquisa: Introdução e passagens recuperadas sobre pluralidade do liberalismo."
      }
    ]
  },
  {
    "researchId": "ideology-social-liberalism",
    "id": "ideology-social-liberalism",
    "existing": false,
    "name": "Liberalismo social (Hobhouse, 1911)",
    "period": "L. T. Hobhouse, Liberalism (1911).",
    "rationale": "Autonomia depende de direitos civis e das condições sociais que permitam exercê-los. Reforma social, tributação e garantias materiais compatíveis com iniciativa individual, rejeitando socialismo burocrático.",
    "caveats": "Não transformar as generalizações históricas do autor em evidência sobre sociedades atuais; progresso científico citado não prova TEC. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "liberal-republicana",
    "neighbors": [
      {
        "id": "ideology-program-constitutional-liberalism-constant-1819",
        "difference": "As obrigações sociais positivas são constitutivas da liberdade."
      },
      {
        "id": "ideology-egalitarian-liberalism",
        "difference": "Rawls formula princípios distributivos e regimes institucionais mais específicos."
      }
    ],
    "sources": [
      {
        "title": "Liberalism",
        "url": "https://www.gutenberg.org/cache/epub/28278/pg28278-images.html",
        "note": "Publicação: 1911. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: caps. II, VII–VIII; especialmente início de VIII e organização social da oportunidade. Leitura efetiva declarada na pesquisa: Sumário, início e passagens dos caps. II e VIII lidos; demais capítulos não integralmente. Edição digital de 2009, baseada em reimpressão que lista edições até 1944."
      }
    ]
  },
  {
    "researchId": "ideology-egalitarian-liberalism",
    "id": "ideology-egalitarian-liberalism",
    "existing": false,
    "name": "Liberalismo igualitário (Rawls, 2001)",
    "period": "John Rawls, formulação institucional de Justice as Fairness (2001).",
    "rationale": "Instituições justas garantem liberdades iguais, oportunidades equitativas e desigualdades favoráveis aos menos favorecidos. Democracia de cidadãos proprietários ou socialismo liberal; dispersão prévia de recursos e valor equitativo das liberdades políticas.",
    "caveats": "Admite dois tipos de regime, portanto ECO não tem solução única. A leitura primária é parcial e por OCR de terceiro; nenhuma inferência de neutralidade se segue dessa pluralidade. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "liberal-republicana",
    "neighbors": [
      {
        "id": "ideology-program-social-democracy-spd-1959",
        "difference": "Não considera suficiente apenas compensar desigualdade num Estado de bem-estar capitalista."
      },
      {
        "id": "ideology-right-minarchism",
        "difference": "Rejeita que direitos de propriedade históricos determinem sozinhos a distribuição legítima."
      }
    ],
    "sources": [
      {
        "title": "Justice as Fairness: A Restatement",
        "url": "https://www.jstor.org/stable/j.ctv31xf5v0",
        "note": "Publicação: 2001. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary-bibliographic. Localizador: §§13, 41–42. Leitura efetiva declarada na pesquisa: Registro editorial e sinopse, não conteúdo integral; locadores a conferir na edição."
      },
      {
        "title": "Liberalism",
        "url": "https://plato.stanford.edu/entries/liberalism/",
        "note": "Publicação: 2026-02-25. Acesso registrado pela pesquisa: 2026-10-08. Tipo: scholarly. Localizador: §2, propriedade e democracia de proprietários. Leitura efetiva declarada na pesquisa: Trechos recuperados que contrastam regimes rawlsianos."
      },
      {
        "title": "Justice as Fairness: A Restatement — OCR mirror",
        "url": "https://pdfcoffee.com/john-rawls-justice-as-fairness-pdf-free.html",
        "note": "Publicação: 2001. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary-mirror. Localizador: §§41–43, pp.136–144; especially 42.2–42.4. Leitura efetiva declarada na pesquisa: Passagens de §§41–43 recuperadas por find e lidas; não livro integral. OCR de terceiro com falhas tipográficas; bibliografia conferida contra Harvard/JSTOR e interpretação contra SEP. Não usar OCR como edição crítica."
      }
    ]
  },
  {
    "researchId": "ideology-minarchism",
    "id": "ideology-right-minarchism",
    "existing": true,
    "name": "Libertarianismo minarquista (Nozick, 1974)",
    "period": "Robert Nozick, Anarchy, State, and Utopia (1974).",
    "rationale": "Direitos individuais delimitam um Estado restrito à proteção contra violência, fraude e violações contratuais. Estado mínimo e teoria histórica da titularidade: aquisição, transferência e retificação.",
    "caveats": "REP é prospectivo: defesa de Estado mínimo não fixa por si o sistema eleitoral. Retificação torna falsa uma leitura de proteção irrestrita de toda posse existente. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "liberal-republicana",
    "neighbors": [
      {
        "id": "ideology-right-austrian-libertarianism",
        "difference": "Aceita o monopólio estatal protetor que Rothbard rejeita."
      },
      {
        "id": "ideology-egalitarian-liberalism",
        "difference": "Rejeita padrões redistributivos contínuos, sem apagar a exigência de retificação."
      }
    ],
    "sources": [
      {
        "title": "Anarchy, State and Utopia, chapter 7",
        "url": "https://www.laits.utexas.edu/poltheory/sidgwick/shortrefs/asu.c07.html",
        "note": "Publicação: 1974. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: cap. 7, investigação da justiça distributiva. Leitura efetiva declarada na pesquisa: Excerto curto disponibilizado pela University of Texas, não o capítulo inteiro."
      },
      {
        "title": "Robert Nozick’s Political Philosophy",
        "url": "https://plato.stanford.edu/entries/nozick-political/",
        "note": "Publicação: 2026-06-03. Acesso registrado pela pesquisa: 2026-10-08. Tipo: scholarly. Localizador: Introdução e quatro problemas centrais. Leitura efetiva declarada na pesquisa: Introdução e resumo substantivo lidos."
      }
    ]
  },
  {
    "researchId": "ideology-anarcho-capitalism",
    "id": "ideology-right-austrian-libertarianism",
    "existing": true,
    "name": "Anarcocapitalismo (Rothbard, 1973)",
    "period": "Murray Rothbard, For a New Liberty (1973; versão de livro no Mises Institute).",
    "rationale": "Substituição do Estado por relações voluntárias ancoradas em propriedade privada e não agressão. Proteção, arbitragem e tribunais concorrenciais financiados contratualmente.",
    "caveats": "O enquadramento como anarquismo é contestado pela tradição socialista; registrar a autodesignação e o desacordo, sem apagar diferenças. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "liberal-republicana",
    "neighbors": [
      {
        "id": "ideology-right-minarchism",
        "difference": "A própria agência estatal monopolista é recusada."
      },
      {
        "id": "ideology-mutualism-proudhon-1863",
        "difference": "Admite propriedade capitalista e mercados de proteção; mutualismo altera propriedade e crédito."
      }
    ],
    "sources": [
      {
        "title": "For a New Liberty: The Libertarian Manifesto",
        "url": "https://cdn.mises.org/For%20a%20New%20Liberty%20The%20Libertarian%20Manifesto_3.pdf",
        "note": "Publicação: 1973. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: cap. 12, Police Protection, p.267 em diante. Leitura efetiva declarada na pesquisa: Passagem inicial do cap. 12 recuperada; outros capítulos não integralmente."
      },
      {
        "title": "For a New Liberty: The Libertarian Manifesto — catalogue",
        "url": "https://mises.org/library/book/new-liberty-libertarian-manifesto",
        "note": "Publicação: 1973-07-20. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary-bibliographic. Localizador: Página do livro. Leitura efetiva declarada na pesquisa: Registro institucional aberto; data do registro não substitui data de edição do PDF."
      }
    ]
  },
  {
    "researchId": "ideology-georgism",
    "id": "ideology-georgism",
    "existing": true,
    "name": "Georgismo (George, 1879)",
    "period": "Henry George, Progress and Poverty (1879).",
    "rationale": "Liberdade econômica com apropriação comum da renda da terra, distinguindo-a dos produtos do trabalho e do capital. Tributação do valor fundiário substitui outros impostos, mantendo títulos privados formais.",
    "caveats": "Georgismo é um programa geral de propriedade e distribuição, não apenas preferência por um imposto; posições constitucionais/migratórias precisam de textos adicionais. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "liberal-republicana",
    "neighbors": [
      {
        "id": "ideology-distributism",
        "difference": "Socializa renda fundiária; não exige dividir fisicamente todos os meios produtivos."
      },
      {
        "id": "ideology-right-austrian-libertarianism",
        "difference": "Reconhece direito comum à terra e tributação pública."
      }
    ],
    "sources": [
      {
        "title": "Progress and Poverty",
        "url": "https://www.econlib.org/library/YPDBooks/George/grgPP.html?chapter_num=35",
        "note": "Publicação: 1879. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Livro VIII, cap. 2, How Equal Rights to the Land May Be Asserted and Secured. Leitura efetiva declarada na pesquisa: Capítulo VIII.2 em texto lido. Edição de 1912; não confundir com a adaptação abreviada de Bob Drake (2006)."
      }
    ]
  },
  {
    "researchId": "ideology-ordoliberalism",
    "id": "ideology-program-freiburg-ordoliberalism-1936-1952",
    "existing": false,
    "name": "Ordoliberalismo de Freiburg (Eucken)",
    "period": "Escola de Freiburg, programa de Eucken/Böhm/Großmann-Doerth e princípios de Eucken (1936–1952).",
    "rationale": "A concorrência depende de uma constituição econômica que impeça concentrações de poder privado e estatal. Regras gerais, antitruste, estabilidade monetária e responsabilidade patrimonial; distinção entre ordenar o mercado e dirigir resultados.",
    "caveats": "Há variedades internas; não identificar automaticamente ordoliberalismo, neoliberalismo e toda economia social de mercado. Excertos de Eucken estão traduzidos por portal; conferir alemão antes de pontuar nuances. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "liberal-republicana",
    "neighbors": [
      {
        "id": "ideology-program-constitutional-liberalism-constant-1819",
        "difference": "Concorrência é criada e protegida por desenho institucional ativo."
      },
      {
        "id": "ideology-program-social-democracy-spd-1959",
        "difference": "Prioriza regras da ordem concorrencial, sem tornar gestão discricionária da demanda o princípio organizador."
      }
    ],
    "sources": [
      {
        "title": "The history of the Freiburg School of Ordoliberalism",
        "url": "https://www.eucken.de/en/institute/walter-eucken-and-the-freiburg-school-of-ordoliberalism/",
        "note": "Publicação: undated. Acesso registrado pela pesquisa: 2026-10-08. Tipo: institutional. Localizador: Biografias de Eucken/Böhm e princípios da escola. Leitura efetiva declarada na pesquisa: Apresentação institucional e passagens indexadas lidas."
      },
      {
        "title": "The EU’s neoliberal constitutionalism(s)",
        "url": "https://www.cambridge.org/core/journals/european-law-open/article/eus-neoliberal-constitutionalisms/8E75415A504DF0666E804CD61A8AE50D",
        "note": "Publicação: 2025. Acesso registrado pela pesquisa: 2026-10-08. Tipo: scholarly. Localizador: A. Ordoliberal constitutionalism. Leitura efetiva declarada na pesquisa: Passagens sobre manifesto de 1936 e princípios constitutivos/reguladores recuperadas."
      },
      {
        "title": "Grundsätze der Wirtschaftspolitik — excerpts from constituent and regulating principles",
        "url": "https://www.ordnungspolitisches-portal.com/en/vater-der-ordnungspolitik",
        "note": "Publicação: 1952. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary-excerpts. Localizador: Seção Walter Eucken: caps.XVI–XVIII, pp.254–324 da 6ª edição 1990. Leitura efetiva declarada na pesquisa: Excertos sobre todos os princípios constitutivos e reguladores, e interdependência, lidos na tradução do portal; não livro integral. Tradução secundária e seleção de citações; manter o recorte Eucken, sem importar falas de Erhard/Rüstow na mesma página."
      }
    ]
  },
  {
    "researchId": "ideology-civic-republicanism",
    "id": "ideology-civic-republicanism",
    "existing": false,
    "name": "Republicanismo da não dominação (Pettit, 2012)",
    "period": "Philip Pettit, modelo de On the People’s Terms (2012).",
    "rationale": "Liberdade significa não depender de poder arbitrário, inclusive quando ninguém interfere efetivamente. Controle popular igual, contestação cidadã e canais protegidos contra dominação privada ou governamental.",
    "caveats": "Não equivale a toda tradição republicana nem fixa uma política econômica única. Primária lida apenas em sinopse de capítulo. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "liberal-republicana",
    "neighbors": [
      {
        "id": "ideology-program-constitutional-liberalism-constant-1819",
        "difference": "Não interferência sozinha não elimina sujeição."
      },
      {
        "id": "ideology-communitarianism",
        "difference": "Não faz da conformidade moral comunitária o teste da liberdade."
      }
    ],
    "sources": [
      {
        "title": "On the People’s Terms: Democratic control",
        "url": "https://www.cambridge.org/core/books/abs/on-the-peoples-terms/democratic-control/A569C01A3E111B4CA3C53EB3834AEEF4",
        "note": "Publicação: 2012. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: cap. 5, pp.239–292. Leitura efetiva declarada na pesquisa: Sinopse editorial do capítulo, não texto integral; publicação online em 2013."
      },
      {
        "title": "Republicanism",
        "url": "https://plato.stanford.edu/entries/republicanism/",
        "note": "Publicação: 2026-08-12. Acesso registrado pela pesquisa: 2026-10-08. Tipo: scholarly. Localizador: Introdução; §1 Political Liberty as Non-Domination. Leitura efetiva declarada na pesquisa: Introdução e definição doutrinária lidas."
      }
    ]
  },
  {
    "researchId": "ideology-cosmopolitan-democracy",
    "id": "ideology-cosmopolitan-democracy",
    "existing": false,
    "name": "Democracia cosmopolita (Held–Archibugi, 2011)",
    "period": "Daniele Archibugi e David Held, Paths and Agents (2011).",
    "rationale": "Democratização de decisões transnacionais por direitos e representação que ultrapassam a cidadania nacional. Instituições multinível, assembleia parlamentar mundial e participação dos afetados além das fronteiras.",
    "caveats": "Não é sinônimo de livre comércio nem projeto necessariamente unitário de Estado mundial; caminhos institucionais são abertos. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "liberal-republicana",
    "neighbors": [
      {
        "id": "ideology-civic-republicanism",
        "difference": "O centro é reorganizar representação e responsabilidade além do Estado."
      },
      {
        "id": "ideology-national-conservatism",
        "difference": "Nega que a soberania nacional esgote a legitimidade política."
      }
    ],
    "sources": [
      {
        "title": "Cosmopolitan Democracy: Paths and Agents",
        "url": "https://ciaotest.cc.columbia.edu/journals/cceia/v25i4/f_0024217_19756.pdf",
        "note": "Publicação: 2011. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: pp.441–447, The Role of States; Citizen Participation in Global Politics. Leitura efetiva declarada na pesquisa: Passagens pp.441–447 recuperadas e lidas; não todo artigo. Ethics & International Affairs 25(4), pp.433–461."
      }
    ]
  },
  {
    "researchId": "ideology-communitarianism",
    "id": "ideology-communitarianism",
    "existing": false,
    "name": "Comunitarismo responsivo (plataforma 1991)",
    "period": "Responsive Communitarian Platform (18 novembro 1991).",
    "rationale": "Direitos pessoais e responsabilidades recíprocas sustentam uma comunidade moral democrática. Fortalecimento de famílias, associações e educação cívica, com proteção social e limites de direitos avaliados por segurança pública.",
    "caveats": "Não representa comunitarismos autoritários ou todo pensamento de Sandel/MacIntyre. Texto reproduzido por terceiro, não página original dos signatários. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "liberal-republicana",
    "neighbors": [
      {
        "id": "ideology-civic-republicanism",
        "difference": "Reciprocidade moral e instituições socializadoras têm centralidade própria."
      },
      {
        "id": "ideology-national-conservatism",
        "difference": "Reconhece pluralismo e direitos, sem fundar legitimidade em homogeneidade nacional religiosa."
      }
    ],
    "sources": [
      {
        "title": "The Responsive Communitarian Platform",
        "url": "https://www.republikanisme.nl/politiek/responsive-community-1991/",
        "note": "Publicação: 1991-11-18. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Restoring the Moral Voice; Freedom of Speech; Social Justice; Public Safety and Public Health. Leitura efetiva declarada na pesquisa: Seções citadas lidas em reprodução integral disponível; não todas as seções."
      }
    ]
  },
  {
    "researchId": "ideology-burkean-conservatism",
    "id": "ideology-burkean-conservatism",
    "existing": false,
    "name": "Conservadorismo constitucional burkeano",
    "period": "Edmund Burke, Reflections on the Revolution in France (1790).",
    "rationale": "Ordem política como herança intergeracional, reformada prudentemente em vez de reconstruída por abstrações. Constituição histórica, instituições intermediárias, propriedade e autoridade transmitida com obrigações.",
    "caveats": "Não é defesa de qualquer regime existente; não converter metáforas orgânicas em TEC biológico. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "conservadora-confessional",
    "neighbors": [
      {
        "id": "ideology-right-absolute-monarchy",
        "difference": "Não deriva legitimidade de uma autorização ilimitada a soberano indivisível."
      },
      {
        "id": "ideology-national-conservatism",
        "difference": "O núcleo é continuidade constitucional prudencial, não o manifesto contemporâneo de soberania econômica."
      }
    ],
    "sources": [
      {
        "title": "Reflections on the Revolution in France",
        "url": "https://www.gutenberg.org/files/15679/15679-h/15679-h.htm",
        "note": "Publicação: 1790. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: passagens “equal rights; but not to equal things” e contrato entre gerações. Leitura efetiva declarada na pesquisa: Passagens sobre direitos/propriedade e parceria intergeracional lidas; volume não integral."
      },
      {
        "title": "Conservatism",
        "url": "https://plato.stanford.edu/archives/fall2024/entries/conservatism/",
        "note": "Publicação: 2024. Acesso registrado pela pesquisa: 2026-10-08. Tipo: scholarly. Localizador: §1.5. Leitura efetiva declarada na pesquisa: Passagem classificatória lida."
      }
    ]
  },
  {
    "researchId": "ideology-national-conservatism",
    "id": "ideology-national-conservatism",
    "existing": true,
    "name": "Conservadorismo nacional (manifesto 2022)",
    "period": "Statement of Principles publicado em 15 junho 2022.",
    "rationale": "Estados nacionais independentes articulam tradição religiosa, família e economia orientada ao interesse nacional. Empresa privada com política industrial estratégica, assimilação migratória e papel público do cristianismo onde majoritário.",
    "caveats": "É este manifesto, não todos os partidos chamados nacional-conservadores; condenação formal do racialismo não prova prática antidiscriminatória. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "conservadora-confessional",
    "neighbors": [
      {
        "id": "ideology-right-neoconservatism",
        "difference": "Prioriza independência nacional e prudência imperial em vez de missão hegemônica democrática."
      },
      {
        "id": "ideology-christian-democracy",
        "difference": "O programa selecionado de democracia cristã promove integração supranacional europeia."
      }
    ],
    "sources": [
      {
        "title": "National Conservatism: A Statement of Principles",
        "url": "https://nationalconservatism.org/national-conservatism-a-statement-of-principles/",
        "note": "Publicação: 2022-06-15. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: princípios 1–10, especialmente 6–10. Leitura efetiva declarada na pesquisa: Enunciado e princípios 1–10 lidos em recuperações complementares; assinaturas não usadas como evidência doutrinária."
      }
    ]
  },
  {
    "researchId": "ideology-neoconservatism",
    "id": "ideology-right-neoconservatism",
    "existing": true,
    "name": "Neoconservadorismo (Kristol, 2003)",
    "period": "Irving Kristol, The Neoconservative Persuasion (2003).",
    "rationale": "Conservadorismo adaptado à democracia de massas, conciliando capitalismo, governo robusto e disciplina cultural. Reformas orientadas ao crescimento e uso da capacidade estratégica dos EUA em defesa de interesses também ideológicos.",
    "caveats": "Kristol descreve uma persuasão heterogênea; não é licença para atribuir a todos os neoconservadores cada guerra dos EUA. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "conservadora-confessional",
    "neighbors": [
      {
        "id": "ideology-national-conservatism",
        "difference": "Aceita responsabilidades globais de grande potência e defesa de democracias."
      },
      {
        "id": "ideology-right-minarchism",
        "difference": "Não busca reduzir o governo ao Estado mínimo e admite ação cultural."
      }
    ],
    "sources": [
      {
        "title": "The Neoconservative Persuasion",
        "url": "https://ciaotest.cc.columbia.edu/pbei/aei/oti/kri03/kri03.pdf",
        "note": "Publicação: 2003-09. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: pp.1–3; seção Foreign Policy. Leitura efetiva declarada na pesquisa: pp.2–3 lidas, abertura e registro conferidos. Publicado antes no Weekly Standard em 25 agosto 2003; PDF é edição AEI de setembro."
      }
    ]
  },
  {
    "researchId": "ideology-christian-democracy",
    "id": "ideology-christian-democracy",
    "existing": false,
    "name": "Democracia cristã europeia (PPE, 2012)",
    "period": "Manifesto do Partido Popular Europeu, 17–18 outubro 2012; síntese selecionada, não toda a família.",
    "rationale": "Personalismo, solidariedade e subsidiariedade dentro de democracia pluralista e economia social de mercado. Integração europeia com poderes compartilhados, concorrência socialmente regulada e proteção de associações/famílias.",
    "caveats": "O PPE inclui conservadores e liberais; o recorte é sua síntese democrata-cristã declarada de 2012. Valores cristãos não bastam para pontuar Estado confessional. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "conservadora-confessional",
    "neighbors": [
      {
        "id": "ideology-catholic-integralism",
        "difference": "Reconhece democracia pluralista e cidadãos sem fé, sem subordinação civil à autoridade eclesiástica."
      },
      {
        "id": "ideology-program-freiburg-ordoliberalism-1936-1952",
        "difference": "Acrescenta programa político-social personalista e integração europeia à ordem concorrencial."
      }
    ],
    "sources": [
      {
        "title": "EPP Manifesto, 2012",
        "url": "https://www.epp.eu/files/uploads/2015/09/Manifesto2012_EN.pdf",
        "note": "Publicação: 2012-10-18. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: §§2–4, pp.1–7 numeradas no manifesto. Leitura efetiva declarada na pesquisa: Texto principal renderizado lido, pp.1–7; 9 páginas de PDF incluindo capa."
      }
    ]
  },
  {
    "researchId": "ideology-distributism",
    "id": "ideology-distributism",
    "existing": true,
    "name": "Distributismo (Chesterton, 1926)",
    "period": "G. K. Chesterton, The Outline of Sanity (1926; reprodução de edição 1927).",
    "rationale": "Propriedade produtiva amplamente distribuída deve garantir autonomia familiar contra concentração capitalista e coletivismo estatal. Pequenos proprietários, cooperativas e barreiras à concentração, com reorganização da vida produtiva local.",
    "caveats": "Não pressupõe que toda atividade seja agrícola; visão familiar historicamente situada e passagens preconceituosas não devem ser omitidas em revisão substantiva. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "conservadora-confessional",
    "neighbors": [
      {
        "id": "ideology-georgism",
        "difference": "Busca dispersar a titularidade produtiva, não apenas socializar renda fundiária."
      },
      {
        "id": "ideology-egalitarian-liberalism",
        "difference": "A pequena propriedade familiar e o juízo cultural contra concentração são centrais, não dois princípios rawlsianos."
      }
    ],
    "sources": [
      {
        "title": "The Outline of Sanity",
        "url": "https://www.shu.edu/documents/1927-GK-Chesterton-The-Outline-of-Sanity.pdf",
        "note": "Publicação: 1926. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: PartIII, The Real Life on the Land; PDF pp.76–77 e discussão inicial. Leitura efetiva declarada na pesquisa: Passagens sobre distribuição de propriedade e propostas lidas; livro não integral. Arquivo rotulado 1927; obra originalmente 1926, edição deve ser mantida na evidência."
      }
    ]
  },
  {
    "researchId": "ideology-catholic-integralism",
    "id": "ideology-catholic-integralism",
    "existing": false,
    "name": "Integralismo católico (matriz leonina, 1885–1891)",
    "period": "Matriz leonina: Immortale Dei 1885, Libertas 1888 e Rerum Novarum 1891; não todas as versões atuais.",
    "rationale": "Ordem civil reconhece fins religiosos verdadeiros e coordena-se com a Igreja, preservando competências próprias. Duas autoridades coordenadas, fins civis subordinados à lei divina, propriedade privada com deveres sociais e associações laborais.",
    "caveats": "O recorte leonino é um antecedente doutrinário específico; não equivale a toda doutrina social católica ou a todo integralismo atual. Não confundir com integralismo brasileiro fascista. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "conservadora-confessional",
    "neighbors": [
      {
        "id": "ideology-christian-democracy",
        "difference": "Rejeita neutralidade religiosa do Estado como ideal normativo."
      },
      {
        "id": "ideology-right-absolute-monarchy",
        "difference": "Mantém autoridade eclesiástica própria, que Hobbes subordina ao soberano civil."
      }
    ],
    "sources": [
      {
        "title": "Immortale Dei — On the Christian Constitution of States",
        "url": "https://www.vatican.va/content/leo-xiii/en/encyclicals/documents/hf_l-xiii_enc_01111885_immortale-dei.html",
        "note": "Publicação: 1885-11-01. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: §§13–17, 22–32. Leitura efetiva declarada na pesquisa: Passagens das duas autoridades, coordenação e crítica da separação lidas; restante não integral."
      },
      {
        "title": "Libertas",
        "url": "https://www.vatican.va/content/leo-xiii/en/encyclicals/documents/hf_l-xiii_enc_20061888_libertas.html",
        "note": "Publicação: 1888-06-20. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: §§19–33, religião, expressão e tolerância. Leitura efetiva declarada na pesquisa: Passagens sobre culto, opinião e tolerância lidas; não encíclica inteira."
      },
      {
        "title": "Rerum Novarum",
        "url": "https://www.vatican.va/content/leo-xiii/en/encyclicals/documents/hf_l-xiii_enc_15051891_rerum-novarum.html",
        "note": "Publicação: 1891-05-15. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: §§4–20, 43–47, propriedade e justiça laboral. Leitura efetiva declarada na pesquisa: Passagens indicadas lidas; não encíclica inteira."
      }
    ]
  },
  {
    "researchId": "ideology-jacobin-republicanism",
    "id": "ideology-jacobin-republicanism",
    "existing": false,
    "name": "Republicanismo jacobino (Constituição 1793)",
    "period": "Programa constitucional francês de 24 junho 1793, separado do governo de exceção 1793–1794.",
    "rationale": "República una com soberania popular direta, igualdade cívica e direitos sociais. Assembleias primárias, sanção popular das leis por silêncio ou consulta após reclamação, assistência pública e resistência à opressão.",
    "caveats": "Constituição não implementada; não usar Terror como prova deste programa nem apresentar sufrágio masculino como universal inclusivo. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "republicana-revolucionaria",
    "neighbors": [
      {
        "id": "ideology-civic-republicanism",
        "difference": "É desenho revolucionário de soberania popular, não teoria contemporânea da não dominação."
      },
      {
        "id": "ideology-program-constitutional-liberalism-constant-1819",
        "difference": "Expande participação direta e garantias sociais frente à prioridade da autonomia representada."
      }
    ],
    "sources": [
      {
        "title": "La Constitution du 24 juin 1793",
        "url": "https://www.elysee.fr/la-presidence/la-constitution-du-24-juin-1793",
        "note": "Publicação: 1793-06-24. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Declaração, arts.17–21; Acte constitutionnel, arts.1, 21–28, 53–60, 122 (os não recuperados são locadores de próxima leitura). Leitura efetiva declarada na pesquisa: Preâmbulo e estrutura abertos; artigos 17–21 da Declaração e 55 do texto constitucional recuperados por busca indexada. Aberturas posteriores falharam; não leitura integral."
      },
      {
        "title": "Constitution du 24 juin 1793 — transcription",
        "url": "https://fr.wikisource.org/wiki/Constitution_de_la_France_du_24_juin_1793",
        "note": "Publicação: 1793-06-24. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Declaraçãoarts.1–35; Actearts.1–35, 56–72. Leitura efetiva declarada na pesquisa: Artigos indicados lidos na transcrição; cotejo parcial com excertos oficiais Élysée. A ratificação é tácita salvo reclamação das assembleias, que desencadeia consulta: não um referendo obrigatório para toda lei."
      }
    ]
  },
  {
    "researchId": "ideology-hobbesian-absolutism",
    "id": "ideology-right-absolute-monarchy",
    "existing": true,
    "name": "Absolutismo contratualista (Hobbes, 1651)",
    "period": "Thomas Hobbes, Leviathan (1651).",
    "rationale": "Indivíduos autorizam soberania indivisível para escapar da insegurança e da guerra civil. Soberano controla legislação, julgamento, guerra e doutrina pública; pode ser pessoa ou assembleia.",
    "caveats": "Absolutismo não significa necessariamente monarquia; preservação da própria vida limita obrigações do súdito. Não converter diagnóstico da guerra em preferência militarista automática. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "soberania-autoridade",
    "neighbors": [
      {
        "id": "ideology-burkean-conservatism",
        "difference": "Fundamento contratual e indivisibilidade, não continuidade constitucional histórica."
      },
      {
        "id": "ideology-catholic-integralism",
        "difference": "Não reconhece jurisdição eclesiástica independente concorrente."
      }
    ],
    "sources": [
      {
        "title": "Leviathan",
        "url": "https://www.gutenberg.org/files/3207/3207-h/3207-h.htm",
        "note": "Publicação: 1651. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: ParteII, caps.XVII–XVIII; direitos indivisíveis do soberano. Leitura efetiva declarada na pesquisa: Passagens dos caps.XVII–XVIII lidas; sumário consultado, não todo livro."
      }
    ]
  },
  {
    "researchId": "ideology-confucian-constitutionalism-jiang",
    "id": "ideology-confucian-constitutionalism-jiang",
    "existing": false,
    "name": "Constitucionalismo confuciano (Jiang Qing)",
    "period": "Proposta constitucional contemporânea de 2012; não Confúcio histórico, toda ética confuciana ou prática chinesa.",
    "rationale": "Ordem constitucional de Jiang Qing que combina legitimidades sagrada, histórica e popular. Academia superior e três câmaras com seleção, funções e controles distintos.",
    "caveats": "Proposta constitucional contemporânea de 2012; não Confúcio histórico, toda ética confuciana ou prática chinesa. Somente os trechos e modos de recuperação declarados foram lidos; não há certificação de eixos por proximidade doutrinária. Proposta contemporânea de Jiang Qing; não representar como posição antiga ou de todo confucianismo. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "chinesa-confuciana",
    "neighbors": [
      {
        "id": "ideology-mohism",
        "difference": "Hierarquia legitimada por tradição confuciana e órgãos modernos difere de mérito, universalidade e conformidade dos capítulos moístas."
      },
      {
        "id": "ideology-legalism-han-fei",
        "difference": "Restrições sagradas e câmaras limitam governantes; Han Fei concentra instrumentos de lei/punição no soberano."
      },
      {
        "id": "ideology-catholic-integralism",
        "difference": "Jiang combina câmaras popular, histórica e erudita com uma Academia; a matriz católica distingue autoridade civil e eclesiástica segundo seus fins, sem aquela arquitetura tricameral."
      }
    ],
    "sources": [
      {
        "title": "A Confucian Constitutional Order — Jiang Qing, chapters 1–2",
        "url": "https://dokumen.pub/a-confucian-constitutional-order-how-chinas-ancient-past-can-shape-its-political-future-course-booknbsped-9781400844845.html",
        "note": "Publicação: 2012, Princeton University Press. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Cap.1, pp.40–42; cap. 2, pp.62–67; Cap.1, pp.28–30, 41–42; cap. 2, pp.63–64; Cap.1, pp.38–42; cap. 2, pp.63–68; Cap.2, pp.63–64: Academy’s Power to Uphold Religion. Leitura efetiva declarada na pesquisa: Cap.1: fundamento de legitimidade, crítica democrática e implementação (pp.27–43, trechos lidos); cap. 2: supervisão/recall/religião/tribunal parlamentar e fundamento jurídico (especialmente pp.58–68). Não livro integral. Recuperação: mirror. Texto primário de Jiang, edição Bell/Fan, tradução inglesa Edmund Ryden; mirror terceiro. Início cotejado com amostra Perlego; introdução de Bell e capítulos críticos não usados como prescrições de Jiang. NYTimes coautoral inacessível; não utilizado."
      },
      {
        "title": "A Confucian Constitutional Order — distributor preview, chapter 1 opening",
        "url": "https://www.perlego.com/book/735593/a-confucian-constitutional-order-how-chinas-ancient-past-can-shape-its-political-future-pdf",
        "note": "Publicação: 2012 na ficha; edição/ISBN 9780691154602 e 9781400844845. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Metadados e abertura usados para cotejo; ver actualReadScope.. Leitura efetiva declarada na pesquisa: Amostra pública inteira do início do capítulo 1, do incipit até truncamento em The Legitimacy of Democracy (linhas 174–225). Recuperação: direct. Amostra identificada pelo distribuidor e editora; acesso parcial, não livro completo. Confirma autoria, linguagem de legitimidade e metadata; detalhes institucionais posteriores vêm de J 1."
      }
    ]
  },
  {
    "researchId": "ideology-legalism-han-fei",
    "id": "ideology-legalism-han-fei",
    "existing": false,
    "name": "Legalismo chinês (Han Fei)",
    "period": "Doutrina administrativa e política dos capítulosVII, XLIII, XLIX do corpus atribuído a Han Fei; não todos os textos Fajia.",
    "rationale": "Ordem soberana fundada em leis, técnicas administrativas e incentivos no corpus Han Feizi. Monopólio régio de sanções e aferição de desempenho, articulado a produção e capacidade militar.",
    "caveats": "Doutrina administrativa e política dos capítulosVII, XLIII, XLIX do corpus atribuído a Han Fei; não todos os textos Fajia. Somente os trechos e modos de recuperação declarados foram lidos; não há certificação de eixos por proximidade doutrinária. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "chinesa-legalista",
    "neighbors": [
      {
        "id": "ideology-mohism",
        "difference": "A obediência comum não elimina a divergência: Han Fei critica governo por amor/virtude e privilegia incentivos e capacidade militar."
      },
      {
        "id": "ideology-confucian-constitutionalism-jiang",
        "difference": "Mecanismos soberanos de controle substituem a legitimidade sagrada plural e supervisão erudita de Jiang."
      },
      {
        "id": "ideology-right-absolute-monarchy",
        "difference": "Han Fei organiza avaliação burocrática e sanções para proteger o poder régio; Hobbes justifica a soberania indivisível pela autorização contratual voltada à paz e proteção."
      }
    ],
    "sources": [
      {
        "title": "The Complete Works of Han Fei Tzŭ — translation W. K. Liao",
        "url": "https://cognitionandculture.net/wp-content/uploads/simply-static/temp-files/simply-static-1-1712063557/wp-content/uploads/1939The-Complete-Works-of-Han-Fei-Tzu-A-Classic-of-Chinese-Political-Science-ebook.pdf",
        "note": "Publicação: Corpus pré-Han atribuído a Han Fei; prefácio de Liao: abril 1939; edição digital combinada sem data. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: VII; XLIII; VII; XLIII; XLIX, PDF 326–330; XLIX, PDF 330–333; XLIX, PDF 325, 330–332; XLIII; XLIX, PDF 331–332. Leitura efetiva declarada na pesquisa: Prefácio/metadados; cap.VII completo (PDF 31–33); XLIII completo (PDF 290–291); trechos de XLIX (PDF 324–333), incluindo punição, atividades econômicas e alianças. Não corpus integral. Recuperação: mirror. PDF inglês de 363 páginas; título do arquivo 1939 não prova que todo conteúdo dos 55 capítulos foi publicado nesse ano. UVA falhou em fornecer corpo utilizável. Separadas notas de Liao e prescrições do texto. Não transplantar práticaQin nem generalizar todos os legistas."
      }
    ]
  },
  {
    "researchId": "ideology-mohism",
    "id": "ideology-mohism",
    "existing": false,
    "name": "Moísmo (núcleo político do Mozi)",
    "period": "Capítulos centrais do Mozi lidos em tradução Mei 1929 indexada; não cânones técnicos tardios ou toda tradição chinesa.",
    "rationale": "Governo meritório e hierárquico orientado ao benefício imparcial sob a autoridade do Céu. Seleção por mérito, conformidade vertical, frugalidade e distinção entre agressão e proteção.",
    "caveats": "Capítulos centrais do Mozi lidos em tradução Mei 1929 indexada; não cânones técnicos tardios ou toda tradição chinesa. Somente os trechos e modos de recuperação declarados foram lidos; não há certificação de eixos por proximidade doutrinária. Fontes primárias lidas em índice de busca; acesso direto encontrou desafio de segurança que não foi resolvido. Formação/autoria plural do corpus. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "chinesa-moísta",
    "neighbors": [
      {
        "id": "ideology-legalism-han-fei",
        "difference": "Sanções e hierarquia coexistem com fundamento celeste e benefício imparcial; não somente eficácia do soberano."
      },
      {
        "id": "ideology-confucian-constitutionalism-jiang",
        "difference": "O núcleo moísta não contém o compromisso moderno de câmaras popular/erudita/hereditária; mérito e cuidado imparcial têm articulação própria."
      }
    ],
    "sources": [
      {
        "title": "Mozi, chapter 8 — Exaltation of the Virtuous I",
        "url": "https://ctext.org/text.pl?if=en&node=3556",
        "note": "Publicação: Corpus dos Reinos Combatentes; data individual dos capítulos não confirmada; tradução W. P. Mei 1929. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Cap.8: promoção e destituição por capacidade. Leitura efetiva declarada na pesquisa: Texto inglês indexado retornado: exaltação, promoção de agricultores/artesãos e mérito. Recuperação: indexed. Texto primário em tradução inglesa W. P. Mei, The Ethical and Political Works of Motse, 1929; ctext informa romanização atualizada a pinyin. Leitura pelo índice de busca, não acesso direto: o site apresentou desafio de segurança e não foi resolvido. Corpus de formação plural; não garantir autoria pessoal de Mozi de cada capítulo."
      },
      {
        "title": "Mozi, chapter 11 — Identification with the Superior I",
        "url": "https://ctext.org/text.pl?if=en&node=3580&remap=gb",
        "note": "Publicação: Corpus dos Reinos Combatentes; data individual dos capítulos não confirmada; tradução W. P. Mei 1929. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Cap.11: mandato imperial e cadeia aldeia–império. Leitura efetiva declarada na pesquisa: Texto inglês indexado retornado: origem do governo, hierarquia completa, conselho, conformidade e sanções. Recuperação: indexed. Texto primário em tradução inglesa W. P. Mei, The Ethical and Political Works of Motse, 1929; ctext informa romanização atualizada a pinyin. Leitura pelo índice de busca, não acesso direto: o site apresentou desafio de segurança e não foi resolvido. Corpus de formação plural; não garantir autoria pessoal de Mozi de cada capítulo."
      },
      {
        "title": "Mozi, chapter 14 — Universal Love I",
        "url": "https://ctext.org/mozi/universal-love-i/ens",
        "note": "Publicação: Corpus dos Reinos Combatentes; data individual dos capítulos não confirmada; tradução W. P. Mei 1929. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Cap.14, blocos 1–5. Leitura efetiva declarada na pesquisa: Cinco blocos bilíngues indexados retornados, com argumentação e conclusão. Recuperação: indexed. Texto primário em tradução inglesa W. P. Mei, The Ethical and Political Works of Motse, 1929; ctext informa romanização atualizada a pinyin. Leitura pelo índice de busca, não acesso direto: o site apresentou desafio de segurança e não foi resolvido. Corpus de formação plural; não garantir autoria pessoal de Mozi de cada capítulo."
      },
      {
        "title": "Mozi, chapter 17 — Condemnation of Offensive War I",
        "url": "https://ctext.org/text.pl?if=en&node=3586",
        "note": "Publicação: Corpus dos Reinos Combatentes; data individual dos capítulos não confirmada; tradução W. P. Mei 1929. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Cap.17: condenação ampliada do dano. Leitura efetiva declarada na pesquisa: Blocos indexados sobre roubo, homicídio e ataque de Estados; não alegada leitura de partes não exibidas. Recuperação: indexed. Texto primário em tradução inglesa W. P. Mei, The Ethical and Political Works of Motse, 1929; ctext informa romanização atualizada a pinyin. Leitura pelo índice de busca, não acesso direto: o site apresentou desafio de segurança e não foi resolvido. Corpus de formação plural; não garantir autoria pessoal de Mozi de cada capítulo."
      },
      {
        "title": "Mozi, chapter 19 — Condemnation of Offensive War III",
        "url": "https://ctext.org/mozi/condemnation-of-offensive-war-iii",
        "note": "Publicação: Corpus dos Reinos Combatentes; data individual dos capítulos não confirmada; tradução W. P. Mei 1929. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Cap.19: distinção ataque/punição; socorro final. Leitura efetiva declarada na pesquisa: Blocos indexados sobre destruição, custos, guerras punitivas sancionadas pelo Céu, socorro de Estados menores e conclusão. Recuperação: indexed. Texto primário em tradução inglesa W. P. Mei, The Ethical and Political Works of Motse, 1929; ctext informa romanização atualizada a pinyin. Leitura pelo índice de busca, não acesso direto: o site apresentou desafio de segurança e não foi resolvido. Corpus de formação plural; não garantir autoria pessoal de Mozi de cada capítulo."
      },
      {
        "title": "Mozi, chapters 20–21 — Economy of Expenditures I–II",
        "url": "https://ctext.org/mozi/book-6/zh",
        "note": "Publicação: Corpus dos Reinos Combatentes; data individual dos capítulos não confirmada; tradução W. P. Mei 1929. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Caps.20–21: leis de economia. Leitura efetiva declarada na pesquisa: Trechos bilíngues indexados: necessidades básicas, trabalho, luxo e produção suficiente; não livro 6 inteiro. Recuperação: indexed. Texto primário em tradução inglesa W. P. Mei, The Ethical and Political Works of Motse, 1929; ctext informa romanização atualizada a pinyin. Leitura pelo índice de busca, não acesso direto: o site apresentou desafio de segurança e não foi resolvido. Corpus de formação plural; não garantir autoria pessoal de Mozi de cada capítulo."
      },
      {
        "title": "Mozi, chapter 26 — Will of Heaven I",
        "url": "https://ctext.org/text.pl?if=en&node=3595&remap=gb",
        "note": "Publicação: Corpus dos Reinos Combatentes; data individual dos capítulos não confirmada; tradução W. P. Mei 1929. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Cap.26: padrão acima do imperador e ritos. Leitura efetiva declarada na pesquisa: Texto inglês indexado retornado: padrão celeste superior ao imperador, ritos, amor e punição. Recuperação: indexed. Texto primário em tradução inglesa W. P. Mei, The Ethical and Political Works of Motse, 1929; ctext informa romanização atualizada a pinyin. Leitura pelo índice de busca, não acesso direto: o site apresentou desafio de segurança e não foi resolvido. Corpus de formação plural; não garantir autoria pessoal de Mozi de cada capítulo."
      }
    ]
  },
  {
    "researchId": "ideology-marxian-communal-communism-1871-1875",
    "id": "ideology-marxian-communal-communism-1871-1875",
    "existing": false,
    "name": "Comunismo comunal de Marx (1871–1875)",
    "period": "The Civil War in France (1871) e Critique of the Gotha Programme (1875); programa tardio de Marx, não guarda-chuva de todos os marxismos.",
    "rationale": "Associação de produtores com meios produtivos comuns, governo comunal revogável e transição entre distribuição pelo trabalho e pelas necessidades. Comunas articuladas por delegados responsáveis, produção cooperativa nacionalmente coordenada e distinção entre fases da sociedade comunista.",
    "caveats": "A Comuna não equivale ao modelo soviético posterior. Marx mantém funções gerais e admite coerção de classe na transição. Não é entrada genérica “marxismo” duplicando seus descendentes; o recorte é um programa particular. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "socialista-marxista",
    "neighbors": [
      {
        "id": "ideology-luxemburgist-revolutionary-democracy-1918",
        "difference": "Luxemburg articula liberdades de oposição e eleições constituintes durante a transição; Marx fornece a matriz comunal e distributiva selecionada."
      },
      {
        "id": "ideology-council-communism-pannekoek",
        "difference": "Pannekoek coloca a unidade de representação no local de trabalho e exclui a substituição dos conselhos por um partido-Estado."
      }
    ],
    "sources": [
      {
        "title": "The Civil War in France — Third Address, The Paris Commune",
        "url": "https://www.marxists.org/archive/marx/works/1871/civil-war-france/ch05.htm",
        "note": "Publicação: 1871-05. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Passagens sobre comunas e delegados; produção cooperativa (linhas 41–93). Leitura efetiva declarada na pesquisa: Leitura das passagens renderizadas sobre instituições comunais e associação produtiva; não de toda a obra. Tradução inglesa em arquivo MIA. Inclui funções centrais remanescentes; não confundir comuna com ausência de coordenação nacional."
      },
      {
        "title": "Critique of the Gotha Programme — I",
        "url": "https://www.marxists.org/archive/marx/works/1875/gotha/ch01.htm",
        "note": "Publicação: 1875; publicação posterior em 1891. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Parte I, sociedade cooperativa, fundos comuns e certificados de trabalho. Leitura efetiva declarada na pesquisa: Passagens renderizadas 45–93, com leitura localizada posterior de 85–93 sobre as fases; não texto integral. O texto critica a fórmula de distribuição do projeto de Gotha; não tomar as frases citadas do projeto como concordância de Marx."
      },
      {
        "title": "Karl Marx — Stanford Encyclopedia of Philosophy",
        "url": "https://plato.stanford.edu/entries/marx/",
        "note": "Publicação: 2025-03-27, revisão substantiva. Acesso registrado pela pesquisa: 2026-10-08. Tipo: scholarly. Localizador: Introdução, caracterização do futuro comunista. Leitura efetiva declarada na pesquisa: Introdução e passagens renderizadas sobre relutância em oferecer projetos completos. Apoia o recorte restrito; programas institucionais minuciosos posteriores não podem ser atribuídos a Marx."
      }
    ]
  },
  {
    "researchId": "ideology-luxemburgist-revolutionary-democracy-1918",
    "id": "ideology-luxemburgist-revolutionary-democracy-1918",
    "existing": false,
    "name": "Luxemburguismo democrático-revolucionário (1918)",
    "period": "The Russian Revolution, manuscrito de 1918 publicado por Paul Levi em 1922; capítulos IV, VI e VIII. Não é uma fusão com o programa espartaquista de dezembro de 1918.",
    "rationale": "Transformação socialista revolucionária em que participação popular, eleições gerais e liberdades de oposição começam junto com a mudança econômica. Ditadura de classe entendida como ação democrática das massas sobre relações de propriedade, com nova constituinte e vida pública aberta, em vez de governo de uma minoria partidária.",
    "caveats": "Recorte de um manuscrito de 1918; não extrapolar para todas as posições de Luxemburgo nem esconder variações posteriores. Defende transformação coerciva de relações de propriedade; não é defesa simples da preservação da ordem liberal capitalista. Substitui a vaga entrada independente Leninismo sem dizer que Lenin e Stalin sejam idênticos. A comparação com Stalin e Trotsky trata da autoridade durante a transição, não de fases finais incompatíveis. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "socialista-marxista-democratica",
    "neighbors": [
      {
        "id": "ideology-marxism-leninism-stalin-1926",
        "difference": "Durante a transição, recusa governo de partido/clique e torna o controle público das massas constitutivo, não apenas objetivo final."
      },
      {
        "id": "ideology-council-communism-pannekoek",
        "difference": "Defende renovar a assembleia constituinte por eleições gerais, em vez de substituir toda representação popular pelos coletivos produtivos."
      },
      {
        "id": "ideology-trotskyism-1938",
        "difference": "O programa de 1938 limita representação aos grupos trabalhadores e partidos reconhecidos como soviéticos; o texto de 1918 insiste em eleições gerais e liberdade dos que discordam."
      }
    ],
    "sources": [
      {
        "title": "The Russian Revolution — IV, The Constituent Assembly",
        "url": "https://www.marxists.org/archive/luxemburg/1918/russian-revolution/ch04.htm",
        "note": "Publicação: Escrito 1918; publicado 1922; tradução inglesa Bertram Wolfe, edição 1940. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Capítulo IV, proposta de nova eleição constituinte. Leitura efetiva declarada na pesquisa: Passagens iniciais 9–27; não todas as partes da obra. O índice MIA identifica Paul Levi, primeira publicação 1922 e edição Workers Age 1940. A cronologia dos eventos na narrativa requer crítica; usada aqui a recomendação normativa, não sua precisão histórica."
      },
      {
        "title": "The Russian Revolution — VI, The Problem of Dictatorship",
        "url": "https://www.marxists.org/archive/luxemburg/1918/russian-revolution/ch06.htm",
        "note": "Publicação: Escrito 1918; publicado 1922; tradução de 1940. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Capítulo VI, especialmente parágrafos sobre liberdade, controle público e eleições. Leitura efetiva declarada na pesquisa: Corpo do capítulo, linhas 6–25, lido. Não há projeto econômico detalhado; a própria autora reconhece experimentação e incerteza."
      },
      {
        "title": "The Russian Revolution — VIII, Democracy and Dictatorship",
        "url": "https://www.marxists.org/archive/luxemburg/1918/russian-revolution/ch08.htm",
        "note": "Publicação: Escrito 1918; publicado 1922; tradução de 1940. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Capítulo VIII, simultaneidade entre democracia e transformação socialista. Leitura efetiva declarada na pesquisa: Corpo do capítulo, linhas 6–26, lido; índice bibliográfico também aberto. Reconhece circunstâncias extremas da revolução e mérito histórico bolchevique; crítica não equivale a anticomunismo."
      },
      {
        "title": "Rosa Luxemburg — Stanford Encyclopedia of Philosophy",
        "url": "https://plato.stanford.edu/entries/luxemburg/",
        "note": "Publicação: 2022-04-13. Acesso registrado pela pesquisa: 2026-10-08. Tipo: scholarly. Localizador: Introdução e §5, Political organisation. Leitura efetiva declarada na pesquisa: Introdução e passagens localizadas da seção de organização política; não verbete integral. Apoio à classificação e ao caráter debatido da relação entre ação de massas e organização."
      }
    ]
  },
  {
    "researchId": "ideology-marxism-leninism-stalin-1926",
    "id": "ideology-marxism-leninism-stalin-1926",
    "existing": false,
    "name": "Marxismo-leninismo de Stalin (1926)",
    "period": "Concerning Questions of Leninism, 25 janeiro 1926; não toda a prática soviética de 1928–1953.",
    "rationale": "Codificação que faz da direção comunista a condição do poder proletário e afirma a construção de uma sociedade socialista completa com forças de um país. Partido como direção das organizações de massa, aliança operário-camponesa e distinção entre construção interna e garantia internacional contra restauração.",
    "caveats": "Texto normativo de 1926; nenhuma inferência direta sobre resultados, expurgos ou coletivização posterior. “Marxismo-leninismo” é usado aqui para esta codificação, não para todo partido que adotou o nome. Não chamar Lenin e Stalin de opostos absolutos: compartilham parte da arquitetura partido/Estado; a entrada é uma codificação particular, não toda a linhagem. Trotsky 1938 e Stalin 1926 são comparados como prescrições sobre poder e propriedade durante a construção/transição, não como descrições do mesmo ano. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "socialista-marxista",
    "neighbors": [
      {
        "id": "ideology-luxemburgist-revolutionary-democracy-1918",
        "difference": "A liderança partidária é constitutiva do poder proletário; Luxemburgo condiciona a transformação à participação aberta e ao controle público das massas."
      },
      {
        "id": "ideology-trotskyism-1938",
        "difference": "Stalin defende construção interna do socialismo; Trotsky exige revolução política antiburocrática e restauração dos sovietes sem devolver propriedade ao capital."
      },
      {
        "id": "ideology-maoism",
        "difference": "Mao especifica uma etapa multiclassista e preservação de capital privado; a questão de 1926 é a construção socialista dentro do Estado proletário."
      }
    ],
    "sources": [
      {
        "title": "Concerning Questions of Leninism",
        "url": "https://www.marxists.org/reference/archive/stalin/works/1926/01/25.htm",
        "note": "Publicação: 1926-01-25. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: V, partido e classe; VI, vitória do socialismo em um país. Leitura efetiva declarada na pesquisa: Passagens localizadas sobre liderança (253–399) e construção nacional (410–449); não ensaio integral. Registra também que o próprio texto distingue direção de coerção contra a classe inteira; não substituir isso por uma descrição posterior do terror."
      },
      {
        "title": "From J.G. Fichte’s “the closed commercial state” to “socialism in one country”: intellectual origins of Stalinism and Stalinist utopia",
        "url": "https://ora.ox.ac.uk/objects/uuid:cbc04844-d31f-4d93-8618-814f64668ac1",
        "note": "Publicação: Data editorial não confirmada. Acesso registrado pela pesquisa: 2026-10-08. Tipo: scholarly. Localizador: Resumo indexado, caracterização da doutrina nacional. Leitura efetiva declarada na pesquisa: Somente resumo recuperado pela busca; abertura do repositório retornou 403. Não foi lida a pesquisa integral; apoio limitado à classificação histórica."
      }
    ]
  },
  {
    "researchId": "ideology-trotskyism-1938",
    "id": "ideology-trotskyism-1938",
    "existing": false,
    "name": "Trotskismo do Programa de Transição",
    "period": "The Transitional Program, 1938; não todas as correntes autodenominadas trotskistas.",
    "rationale": "Internacionalismo revolucionário que conecta reivindicações imediatas à conquista do poder e combate a burocracia preservando a propriedade socializada. Demandas de transição, partidos da Quarta Internacional, sovietes e revolução política antiburocrática na URSS.",
    "caveats": "Pluralidade dentro dos sovietes não equivale por si só a pluralismo liberal universal. Manter juntas a defesa da propriedade soviética e a oposição à sua burocracia. No estágio transitório, preserva propriedade nacionalizada e reestrutura o planejamento; difere de Stalin pela direção antiburocrática e internacional, não por trocar socialismo por capitalismo. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "socialista-marxista",
    "neighbors": [
      {
        "id": "ideology-marxism-leninism-stalin-1926",
        "difference": "Nega socialismo em um país e propõe derrubar a burocracia sem restaurar o capitalismo."
      },
      {
        "id": "ideology-council-communism-pannekoek",
        "difference": "Mantém partido revolucionário e caracteriza a URSS como Estado operário degenerado, em vez de capitalismo estatal."
      },
      {
        "id": "ideology-luxemburgist-revolutionary-democracy-1918",
        "difference": "Pluralismo do programa é delimitado aos partidos soviéticos e aos grupos trabalhadores; o manuscrito de Luxemburgo defende eleições gerais e oposição pública aberta."
      }
    ],
    "sources": [
      {
        "title": "The Transitional Program — Part 1",
        "url": "https://www.marxists.org/archive/trotsky/1938/tp/tp-text.htm",
        "note": "Publicação: 1938. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: The Minimum Program and the Transitional Program; Trade Unions in the Transitional Epoch. Leitura efetiva declarada na pesquisa: Seções iniciais e passagens 34–71; não texto integral. Metadados do índice: edição baseada na impressão de 1981 e cotejo russo de 1999."
      },
      {
        "title": "The Transitional Program — Part 2",
        "url": "https://www.marxists.org/archive/trotsky/1938/tp/tp-text2.htm",
        "note": "Publicação: 1938. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Soviets; The USSR and Problems of the Transitional Epoch. Leitura efetiva declarada na pesquisa: Passagens 27–34 e 80–116, incluindo releitura localizada de 103–113 sobre partidos soviéticos e plano econômico; não texto integral. Programa declarado, não verificação independente das descrições soviéticas."
      },
      {
        "title": "100 Years of Permanent Revolution: Results and Prospects",
        "url": "https://www.jstor.org/stable/j.ctt18fs98g",
        "note": "Publicação: 2006. Acesso registrado pela pesquisa: 2026-10-08. Tipo: scholarly. Localizador: Apresentação e resumos dos capítulos iniciais. Leitura efetiva declarada na pesquisa: Página editorial e excertos dos resumos de capítulos; não livro integral. Contextualiza a classificação trotskista e a continuidade internacionalista."
      }
    ]
  },
  {
    "researchId": "ideology-maoism",
    "id": "ideology-maoism",
    "existing": true,
    "name": "Nova Democracia de Mao (1940)",
    "period": "On New Democracy, janeiro 1940; etapa anticolonial programática, separada da RPC pós-1949.",
    "rationale": "Etapa revolucionária de coalizão das classes anticoloniais sob direção proletária, distinta da república burguesa e do socialismo já completo. Ditadura conjunta das classes revolucionárias, grandes setores públicos e espaço para capital privado e propriedade camponesa.",
    "caveats": "Direção proletária e coalizão não equivalem a oposição eleitoral liberal irrestrita. Propriedade pública não prova, sozinha, planejamento sistêmico; CON retido. Etapas históricas distintas são explicitadas: a presença de capital privado não torna Stalin 1926/NEP um contraste simples de socialização integral imediata. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "socialista-marxista",
    "neighbors": [
      {
        "id": "ideology-marxism-leninism-stalin-1926",
        "difference": "Define uma autoridade de coalizão de classes anticoloniais em condições coloniais/semifeudais, não só a direção operária e aliança camponesa da construção socialista. Economia mista, isoladamente, não distingue o modelo de toda transição leninista."
      },
      {
        "id": "ideology-trotskyism-1938",
        "difference": "Prescreve uma república de nova democracia com coalizão multiclassista; o programa trotskista critica subordinar a emancipação dos trabalhadores a uma direção burguesa nacional."
      }
    ],
    "sources": [
      {
        "title": "Mao Zedong — On New Democracy, janeiro de 1940",
        "url": "https://www.marxists.org/reference/archive/mao/selected-works/volume-2/mswv2_26.htm",
        "note": "Publicação: Janeiro de 1940 (ensaio); edição inglesa sem ano confirmado nesta leitura; HTML do volume revisado em 2004. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: On New Democracy, V–VII, IX–X e XIII–XV. Leitura efetiva declarada na pesquisa: Reutilização da pesquisa de 2026-10-08 em ideologies-evidence.json; não releitura primária por este pesquisador. Escopo registrado pela pesquisa anterior: Corpo autoral completo, seções I–XV, linhas extraídas 0–369; nota editorial 1 para proveniência. Índice geral e índice do vol. II para editora/transcrição. Demais notas editoriais não certificadas como parte autoral. Nota/proveniência da pesquisa anterior, não alegação de nova leitura nesta seleção: Texto primário de Mao em tradução inglesa de Selected Works, vol. II, hospedado pela Marxists Internet Archive. Índice geral atribui vols. I–V à Foreign Languages Press, Peking; índice do vol. II identifica transcrição Maoist Documentation Project e revisão HTML de 2004. A página data o ensaio em janeiro de 1940; nota editorial 1 informa publicação no primeiro número de Chinese Culture. Não foi verificado um exemplar chinês original de 1940 nem cotejadas revisões do texto. Ano da edição impressa e tradutor individual não identificados nas páginas lidas. Leitura nova do corpo autoral I–XV; notas editoriais não utilizadas como posições de Mao. Sem falhas de acesso. Proveniência preservada; a seleção atual não herda pontuações nem aprovação de eixos."
      },
      {
        "title": "One Too Many? Chinese Perspectives on Multiparty Politics",
        "url": "https://link.springer.com/chapter/10.1007/978-3-032-07773-8_2",
        "note": "Publicação: 2026-02-17. Acesso registrado pela pesquisa: 2026-10-08. Tipo: scholarly. Localizador: Toward a “New Democracy” (1940s), linhas 157–170. Leitura efetiva declarada na pesquisa: Resumo e passagens localizadas referentes a Mao 1940; não capítulo integral. Apoio à classificação; não transferir a análise da RPC posterior ao programa de 1940."
      }
    ]
  },
  {
    "researchId": "ideology-council-communism-pannekoek",
    "id": "ideology-council-communism-pannekoek",
    "existing": false,
    "name": "Comunismo de conselhos de Pannekoek",
    "period": "Workers’ Councils: partes I–III escritas em 1941–1942; versão neerlandesa publicada em 1946; edição inglesa serial 1947–1949 e em livro em 1950. Recorte doutrinário das partes I–II, sem transferir práticas soviéticas posteriores.",
    "rationale": "Autogoverno da produção social por conselhos de trabalhadores, substituindo tanto o capital privado quanto o domínio de um partido-Estado. Delegados de coletivos produtivos responsáveis aos trabalhadores; coordenação social de baixo para cima e ação direta de massa.",
    "caveats": "Não converter democracia laboral em sufrágio territorial universal sem justificar o construto. Distinguir hostilidade ao partido governante de proibição de toda discussão ou agrupamento político. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "socialista-conselhista",
    "neighbors": [
      {
        "id": "ideology-luxemburgist-revolutionary-democracy-1918",
        "difference": "Luxemburgo preserva eleições gerais e renovação constituinte; Pannekoek ancora a representação nos coletivos de produção."
      },
      {
        "id": "ideology-trotskyism-1938",
        "difference": "Trata o sistema soviético consolidado como capitalismo estatal, não Estado operário cuja burocracia se deve remover."
      },
      {
        "id": "ideology-communalism",
        "difference": "A unidade política é produtiva, enquanto Bookchin prioriza assembleias territoriais de cidadãos."
      }
    ],
    "sources": [
      {
        "title": "Workers’ Councils",
        "url": "https://www.marxists.org/archive/pannekoe/1947/workers-councils.htm",
        "note": "Publicação: 1946, versão neerlandesa; 1947–1949, serial inglesa; 1950, livro inglês. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Parte I, §7 Council Organization; crítica ao partido comunista. Leitura efetiva declarada na pesquisa: Passagens 407–444 e 724–733, mais cabeçalho e prefácios editoriais 0–67; não leitura integral. Cabeçalho distingue composição 1941–1942, acréscimos 1944/1947 e edição inglesa de J. A. Dawson 1950. O diretório 1947 não deve ser tratado como data única de publicação."
      },
      {
        "title": "Council Communism — Mark Shipway",
        "url": "https://theanarchistlibrary.org/library/mark-shipway-council-communism",
        "note": "Publicação: 1987. Acesso registrado pela pesquisa: 2026-10-08. Tipo: scholarly. Localizador: Introdução e Origins, linhas 23–51. Leitura efetiva declarada na pesquisa: Introdução e passagens históricas sobre Pannekoek; não ensaio integral. Texto secundário de história do pensamento reproduzido em arquivo militante."
      }
    ]
  },
  {
    "researchId": "ideology-eurocommunism-berlinguer-1977",
    "id": "ideology-eurocommunism",
    "existing": true,
    "name": "Eurocomunismo pluralista de Berlinguer (1977)",
    "period": "Formulação de Enrico Berlinguer no discurso de Moscou de novembro 1977, datado 3/11 pelo arquivo consultado; não fusão de todas as posições do PCI, PCF e PCE.",
    "rationale": "Transição ao socialismo que faz do pluralismo político e das liberdades civis e religiosas valores constitutivos, rejeitando a subordinação entre partidos comunistas. Via própria ao socialismo por alianças políticas plurais, Estado não ideológico e preservação de múltiplos partidos, dentro de solidariedade internacional autônoma.",
    "caveats": "Discurso programático de amplitude política; não especifica integralmente propriedade, alocação ou comércio. Elogia conquistas soviéticas ao mesmo tempo que prescreve autonomia e pluralismo: não ocultar essa continuidade. Não atribuir a todos os partidos eurocomunistas o mesmo programa nem tratar a mera nacionalidade como diferença doutrinária. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "socialista-comunista-pluralista",
    "neighbors": [
      {
        "id": "ideology-marxism-leninism-stalin-1926",
        "difference": "Rejeita o modelo universal de um centro dirigente e exige pluralismo também na nova sociedade socialista."
      },
      {
        "id": "ideology-program-social-democracy-spd-1959",
        "difference": "Mantém superação mundial do capitalismo como horizonte, enquanto Godesberg legitima a iniciativa privada e a concorrência sob controle social."
      },
      {
        "id": "ideology-program-democratic-socialism-dsa-2026",
        "difference": "A formulação eurocomunista organiza alianças pluralistas entre tradições socialistas e cristãs; o recorte DSA especifica refundação constitucional e socialização empresarial próprias."
      }
    ],
    "sources": [
      {
        "title": "La Democrazia è un valore universale — Enrico Berlinguer",
        "url": "https://www.enricoberlinguer.it/enrico/scritti/la-democrazia-valore-universale/",
        "note": "Publicação: 1977-11-03, data do arquivo consultado. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Discurso de Moscou: autonomia partidária e garantias da sociedade socialista, linhas 47–55. Leitura efetiva declarada na pesquisa: Corpo autoral do discurso recuperado, linhas 44–56; sem tratar navegação e rodapé como texto do autor. Reprodução mantida pela associação Berlinguer Qualcosa di Sinistra. Algumas referências secundárias datam a fala em 2/11; conservar novembro de 1977 como intervalo seguro."
      },
      {
        "title": "How the Eurocommunists Interpret Democracy — Manfred Spieker",
        "url": "https://www.cambridge.org/core/journals/review-of-politics/article/abs/how-the-eurocommunists-interpret-democracy/51191CFB753DC2DD95C027653ADD2211",
        "note": "Publicação: 1980-10; publicação online 2009-08-05. Acesso registrado pela pesquisa: 2026-10-08. Tipo: scholarly. Localizador: Extract e metadados, pp. 427–464. Leitura efetiva declarada na pesquisa: Extrato público (linhas 453–455) e ficha editorial; não artigo completo. Apoio à distinção entre socialismo pluralista e ditadura do proletariado; divergências nacionais permanecem."
      }
    ]
  },
  {
    "researchId": "ideology-democratic-socialism-dsa-2026",
    "id": "ideology-program-democratic-socialism-dsa-2026",
    "existing": true,
    "name": "Socialismo democrático da DSA (2026)",
    "period": "Programa oficial Workers Deserve More lançado em 14 julho 2026; substitui nesta seleção o recorte de Frankfurt 1951.",
    "rationale": "Transição democrática para sociedade de trabalhadores, com socialização das maiores empresas e bens essenciais e reconstrução constitucional multipartidária. República socialista com legislativo proporcional unicameral, executivo subordinado e propriedade pública de setores essenciais.",
    "caveats": "Programa declarado, não agenda automaticamente adotada por todo eleito ligado à DSA. O texto é final/publicamente lançado; a data exata de cada votação interna não foi verificada. A substituição reduz a sobreposição Frankfurt/Godesberg; não acrescenta uma 76ª entrada. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "socialista-democratica",
    "neighbors": [
      {
        "id": "ideology-program-social-democracy-spd-1959",
        "difference": "Godesberg protege a iniciativa privada e usa propriedade pública subsidiariamente; DSA prescreve socialização das maiores empresas."
      },
      {
        "id": "ideology-eurocommunism",
        "difference": "O discurso eurocomunista afirma autonomia e alianças plurais; DSA 2026 especifica um desenho de república parlamentar unicameral e propriedade pública."
      },
      {
        "id": "ideology-ecosocialism-kovel-lowy",
        "difference": "DSA oferece programa político multissetorial; o manifesto ecossocialista organiza a transformação produtiva pela crise ecológica."
      }
    ],
    "sources": [
      {
        "title": "Workers Deserve More — Our Program",
        "url": "https://program.dsausa.org/",
        "note": "Publicação: 2026; lançado 2026-07-14. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Our Perspective; What We Fight For; Authors’ Note. Leitura efetiva declarada na pesquisa: Corpo programático renderizado, linhas 50–168; leitura das seções políticas, econômicas e nota de autoria. A antiga URL do programa de 2021 redireciona para este texto. Não atribuí-lo a 2021 ou usar drafts daquele ano."
      },
      {
        "title": "DSA Launches New Program — Adam Kaiser",
        "url": "https://democraticleft.dsausa.org/2026/07/17/dsa-launches-new-program/",
        "note": "Publicação: 2026-07-17. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: The Program; The Process; lançamento em 14 julho. Leitura efetiva declarada na pesquisa: Corpo da matéria institucional e metadados, linhas 20–63. Confirma lançamento público e processo sob mandato de 2025; não é aprovação independente dos resultados."
      },
      {
        "title": "Socialism — Stanford Encyclopedia of Philosophy",
        "url": "https://plato.stanford.edu/entries/socialism/",
        "note": "Publicação: Versão consultada em 2026; data editorial não registrada nesta leitura. Acesso registrado pela pesquisa: 2026-10-08. Tipo: scholarly. Localizador: §4, desenhos institucionais; passagens sobre socialismo de mercado e economia participativa. Leitura efetiva declarada na pesquisa: Introdução e resultados localizados por busca interna; não leitura integral. Apoio à classificação de modelos; não certificação de organizações atuais."
      }
    ]
  },
  {
    "researchId": "ideology-social-democracy-godesberg-1959",
    "id": "ideology-program-social-democracy-spd-1959",
    "existing": true,
    "name": "Social-democracia de Godesberg (1959)",
    "period": "Programa SPD de novembro 1959, no extrato/tradução do German History in Documents and Images.",
    "rationale": "Democracia pluralista e seguridade social numa economia mista que combina concorrência e propriedade privada com controle do poder econômico. Mercado competitivo, negociação coletiva, cogestão e planejamento indireto; propriedade pública quando necessária ao interesse geral.",
    "caveats": "O programa se autodenomina socialismo democrático; a designação social-democracia serve à distinção institucional desta seleção. “Competição tanto quanto possível” não equivale a ausência de regulação. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "social-democrata",
    "neighbors": [
      {
        "id": "ideology-program-democratic-socialism-dsa-2026",
        "difference": "Não exige socialização das maiores empresas como princípio geral."
      },
      {
        "id": "ideology-market-socialism-schweickart",
        "difference": "Schweickart generaliza autogestão e investimento socializado, substituindo a empresa capitalista."
      },
      {
        "id": "ideology-guild-socialism-cole",
        "difference": "Cole propõe autogoverno funcional da indústria, além da cogestão de uma economia mista."
      }
    ],
    "sources": [
      {
        "title": "Godesberg Program of the SPD",
        "url": "https://germanhistorydocs.org/en/occupation-and-the-emergence-of-two-states-1945-1961/godesberg-program-of-the-spd-november-1959",
        "note": "Publicação: 1959-11. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: The Order of the State; National Defence; The Economy; Ownership and Power. Leitura efetiva declarada na pesquisa: Passagens traduzidas renderizadas 30–135; o próprio documento exibe omissões, não leitura de original alemão integral. Texto normativo, sem transferir práticas de governos SPD posteriores."
      },
      {
        "title": "GHDI — introdução histórica ao Programa de Godesberg",
        "url": "https://germanhistorydocs.org/en/occupation-and-the-emergence-of-two-states-1945-1961/godesberg-program-of-the-spd-november-1959",
        "note": "Publicação: Data editorial não indicada. Acesso registrado pela pesquisa: 2026-10-08. Tipo: scholarly. Localizador: Abstract, linhas 15–19. Leitura efetiva declarada na pesquisa: Resumo editorial lido. Contextualização acadêmica do German Historical Institute."
      }
    ]
  },
  {
    "researchId": "ideology-guild-socialism-cole",
    "id": "ideology-guild-socialism-cole",
    "existing": false,
    "name": "Socialismo de guildas de Cole",
    "period": "Exposição autoral de G. D. H. Cole na Encyclopædia Britannica, 1922; sem fundir sua evolução posterior.",
    "rationale": "Propriedade comunal e autogoverno industrial por guildas de trabalhadores, articulados à representação dos cidadãos-consumidores. Democracia funcional: produtores administram, consumidores influem nas políticas; manutenção econômica contínua substitui insegurança salarial.",
    "caveats": "Democracia funcional não resolve automaticamente a organização territorial do Estado. Não ocultar a disputa interna acerca de permanência, transformação ou substituição do Estado. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "socialista-associativa",
    "neighbors": [
      {
        "id": "ideology-program-anarcho-syndicalism-iwa-2022",
        "difference": "A AIT substitui o poder político por federações econômicas; Cole dá papel próprio à representação funcional de consumidores."
      },
      {
        "id": "ideology-market-socialism-schweickart",
        "difference": "Não é simples competição entre cooperativas com lucros distribuídos."
      },
      {
        "id": "ideology-participatory-economics",
        "difference": "Parecon acrescenta divisão equilibrada de tarefas e negociação iterativa da alocação."
      }
    ],
    "sources": [
      {
        "title": "Guild Socialism — G. D. H. Cole",
        "url": "https://www.marxists.org/archive/cole/1922/guild-socialism.htm",
        "note": "Publicação: 1922. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Parágrafos sobre democracia funcional, industrial maintenance e cidadãos-consumidores. Leitura efetiva declarada na pesquisa: Passagens 32–40 e 50–69; não todas as obras de Cole. Artigo autoral em reprodução MIA; distingue corrente majoritária e minoritária sobre o Estado."
      },
      {
        "title": "The institutional impossibility of guild socialism — Geoffrey M. Hodgson",
        "url": "https://academic.oup.com/cje/article/47/1/21/6775929",
        "note": "Publicação: Online 2022-10-27; volume 47(1), janeiro 2023. Acesso registrado pela pesquisa: 2026-10-08. Tipo: scholarly. Localizador: Abstract e introdução. Leitura efetiva declarada na pesquisa: Resumo e parágrafos iniciais; não artigo integral. Crítica acadêmica que aponta tensão entre autonomia das guildas e coordenação central, não garantia de viabilidade."
      }
    ]
  },
  {
    "researchId": "ideology-market-socialism-schweickart",
    "id": "ideology-market-socialism-schweickart",
    "existing": false,
    "name": "Socialismo de mercado de Schweickart",
    "period": "Modelo Economic Democracy de David Schweickart, associado a After Capitalism (2002/2011); síntese autoral online sem data.",
    "rationale": "Empresas autogeridas competem em mercados de bens, mas os ativos produtivos e a decisão sobre investimento são socializados. Um trabalhador, um voto; preços de mercado; imposto sobre ativos financia bancos públicos de investimento distribuídos territorialmente.",
    "caveats": "Autogestão empresarial não prova por si só todo o eixo REP nacional. Distribuição territorial de fundos não demonstra repartição constitucional do poder. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "socialista-de-mercado",
    "neighbors": [
      {
        "id": "ideology-program-social-democracy-spd-1959",
        "difference": "Substitui a propriedade capitalista e o comando patronal, em vez de apenas regulá-los."
      },
      {
        "id": "ideology-participatory-economics",
        "difference": "Mantém mercados de produtos, rejeitados por Parecon."
      },
      {
        "id": "ideology-guild-socialism-cole",
        "difference": "Combina lucro empresarial e mercado com investimento social, em vez do desenho funcional de guildas."
      }
    ],
    "sources": [
      {
        "title": "Economic Democracy — David Schweickart",
        "url": "https://www.globaljusticecenter.org/papers/economic-democracy",
        "note": "Publicação: Sem data editorial. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Worker Self-Management; The Market; Social Control of Investment. Leitura efetiva declarada na pesquisa: Corpo curto renderizado 15–36 lido. Síntese do autor; bens e capital são negociados, enquanto a alocação de novos investimentos é socializada."
      },
      {
        "title": "Socialism — Stanford Encyclopedia of Philosophy",
        "url": "https://plato.stanford.edu/entries/socialism/",
        "note": "Publicação: Versão consultada em 2026; data editorial não registrada nesta leitura. Acesso registrado pela pesquisa: 2026-10-08. Tipo: scholarly. Localizador: §4, desenhos institucionais; passagens sobre socialismo de mercado e economia participativa. Leitura efetiva declarada na pesquisa: Introdução e resultados localizados por busca interna; não leitura integral. Apoio à classificação de modelos; não certificação de organizações atuais."
      }
    ]
  },
  {
    "researchId": "ideology-participatory-economics",
    "id": "ideology-participatory-economics",
    "existing": false,
    "name": "Economia participativa de Albert e Hahnel",
    "period": "Modelo iniciado em 1991; formulação de Michael Albert na entrevista de 23 dezembro 2016, sem acrescentar programa político Parpolity.",
    "rationale": "Economia sem classe proprietária ou coordenadora, organizada por autogestão de trabalhadores e consumidores e planejamento participativo. Conselhos, tarefas equilibradas em poder, remuneração por esforço e sacrifício e negociação iterativa de insumos e produtos.",
    "caveats": "Modelo econômico não basta para atribuir organização eleitoral, segurança pública ou política religiosa. Não confundir o planejamento participativo com comando de uma agência central. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "socialista-participativa",
    "neighbors": [
      {
        "id": "ideology-market-socialism-schweickart",
        "difference": "Substitui mercados por alocação negociada."
      },
      {
        "id": "ideology-guild-socialism-cole",
        "difference": "Especifica mecanismos de divisão do trabalho e remuneração que a democracia funcional não fixa."
      },
      {
        "id": "ideology-anarcho-communism",
        "difference": "Não prescreve simplesmente livre acesso por necessidade; explicita remuneração de trabalho e procedimentos de alocação."
      }
    ],
    "sources": [
      {
        "title": "What Is Participatory Economics? — Michael Albert entrevistado por C. J. Polychroniou",
        "url": "https://znetwork.org/znetarticle/what-is-participatory-economics/",
        "note": "Publicação: 2016-12-23. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Respostas sobre instituições, linhas 95–99. Leitura efetiva declarada na pesquisa: Perguntas iniciais e respostas centrais sobre o modelo; não entrevista inteira. Fonte primária do coformulador. Tentativas do PDF e página Next System falharam; não foram usadas como leitura."
      },
      {
        "title": "Socialism — Stanford Encyclopedia of Philosophy",
        "url": "https://plato.stanford.edu/entries/socialism/",
        "note": "Publicação: Versão consultada em 2026; data editorial não registrada nesta leitura. Acesso registrado pela pesquisa: 2026-10-08. Tipo: scholarly. Localizador: §4, desenhos institucionais; passagens sobre socialismo de mercado e economia participativa. Leitura efetiva declarada na pesquisa: Introdução e resultados localizados por busca interna; não leitura integral. Apoio à classificação de modelos; não certificação de organizações atuais."
      }
    ]
  },
  {
    "researchId": "ideology-ecosocialism-kovel-lowy",
    "id": "ideology-ecosocialism-kovel-lowy",
    "existing": false,
    "name": "Ecossocialismo de Kovel e Löwy",
    "period": "An Ecosocialist Manifesto, setembro 2001, reproduzido em 2014; não todas as vertentes ecossocialistas.",
    "rationale": "Superação do capital e do produtivismo por associação livre de produtores organizada para necessidades humanas e limites ecológicos. Reorienta o conteúdo e a escala da produção para valores de uso e sustentabilidade, criticando tanto mercado capitalista quanto burocracia produtivista.",
    "caveats": "A arquitetura eleitoral e territorial permanece pouco especificada neste manifesto. Crítica à globalização capitalista não define tarifas nem o eixo COM inteiro. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "socialista-ecologica",
    "neighbors": [
      {
        "id": "green-politics",
        "difference": "Exige superar o capital; o ecologismo verde selecionado pode operar num conjunto econômico mais plural."
      },
      {
        "id": "ideology-democratic-degrowth",
        "difference": "Decrescimento se concentra na redução democrática dos fluxos materiais; aqui a relação capital-trabalho e a propriedade produtiva estruturam a alternativa."
      },
      {
        "id": "ideology-communalism",
        "difference": "Não fixa municipalismo majoritário como arquitetura política exclusiva."
      }
    ],
    "sources": [
      {
        "title": "An Ecosocialist Manifesto — Joel Kovel and Michael Löwy",
        "url": "https://systemicalternatives.org/2014/03/05/an-ecosocialist-manifesto/",
        "note": "Publicação: Manifesto 2001-09; reprodução 2014-03-05. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Manifesto; Why Ecosocialism?. Leitura efetiva declarada na pesquisa: Corpo do manifesto e introdução, linhas 13–45. Reprodução de texto primário; não plataforma de um Estado ou prova de execução."
      },
      {
        "title": "The Ecosocialist Alternative — Michael Löwy",
        "url": "https://www.cambridge.org/core/books/abs/cambridge-handbook-of-environmental-sociology/ecosocialist-alternative/343A985DDDE8DAD0309D2A49C88B4208",
        "note": "Publicação: 2020-11-05. Acesso registrado pela pesquisa: 2026-10-08. Tipo: scholarly. Localizador: Summary; Cambridge Handbook of Environmental Sociology, pp. 143–151. Leitura efetiva declarada na pesquisa: Resumo público e ficha editorial, não capítulo completo. Apoio acadêmico de um dos autores da própria corrente, portanto não fonte independente."
      }
    ]
  },
  {
    "researchId": "ideology-mutualism-proudhon-1863",
    "id": "ideology-mutualism-proudhon-1863",
    "existing": false,
    "name": "Mutualismo federativo de Proudhon",
    "period": "Du principe fédératif, 1863; partes efetivamente traduzidas na edição online, especialmente I.VII–XI.",
    "rationale": "Autonomia federada sustentada por reciprocidade econômica, associações e garantias mútuas contra a exploração financeira. Contratos federais com competências limitadas e federação agroindustrial de crédito, seguros e serviços em mãos não estatais.",
    "caveats": "Federalismo contratual não equivale a sufrágio universal ou igualdade social em todas as dimensões. O texto não é defesa da corporação capitalista moderna nem simples variante anarcocapitalista. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "anarquista-mutualista",
    "neighbors": [
      {
        "id": "ideology-left-anarcho-collectivism",
        "difference": "Bakunin torna terra e recursos comuns e projeta federação mundial de associações produtivas."
      },
      {
        "id": "ideology-anarcho-communism",
        "difference": "Kropotkin recusa a distribuição fundada na equivalência do trabalho e busca acesso comunista."
      },
      {
        "id": "ideology-right-austrian-libertarianism",
        "difference": "Mutualismo combate renda monopolista e dominação do capital; não absolutiza propriedade capitalista."
      }
    ],
    "sources": [
      {
        "title": "The Federative Principle — Pierre-Joseph Proudhon",
        "url": "https://theanarchistlibrary.org/library/pierre-joseph-proudhon-the-principle-of-federation",
        "note": "Publicação: 1863; traduções parciais de Richard Vernon e Ian Harvey. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: I.X–XI, garantias federativas e federação agroindustrial. Leitura efetiva declarada na pesquisa: Cabeçalho editorial e passagens 402–450; não original francês integral. A edição inclui a primeira parte, seleção da segunda e trechos finais; não é tradução completa."
      },
      {
        "title": "Anarchism — Stanford Encyclopedia of Philosophy",
        "url": "https://plato.stanford.edu/entries/anarchism/",
        "note": "Publicação: Versão consultada em 2026; data editorial não registrada nesta leitura. Acesso registrado pela pesquisa: 2026-10-08. Tipo: scholarly. Localizador: Discussões de anarquismo religioso e comunal; passagens sobre Proudhon, Bakunin, Kropotkin e Tolstói. Leitura efetiva declarada na pesquisa: Passagens localizadas por busca interna, incluindo linhas renderizadas 63–70 e 146–150; não leitura integral. A taxonomia geral não substitui os programas próprios abaixo."
      }
    ]
  },
  {
    "researchId": "ideology-collectivist-anarchism-bakunin-1866",
    "id": "ideology-left-anarcho-collectivism",
    "existing": true,
    "name": "Anarquismo coletivista de Bakunin",
    "period": "Revolutionary Catechism, 1866, na transcrição de Pitzer; não Catechism of a Revolutionary de Nechayev.",
    "rationale": "Federação livre de comunas e associações produtivas, com terra comum, fim da herança e trabalho como fundamento da participação econômica. Associações de produtores federadas coordenam a indústria; uso direto dos recursos e desigualdades adquiridas pelo próprio trabalho não são abolidos por nivelamento.",
    "caveats": "O catecismo de 1866 admite trabalho individual e aquisição pelo trabalho; não rotular como abolição instantânea de toda posse individual. Antiestatismo convive com federação dotada de instâncias de decisão e defesa. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "anarquista-coletivista",
    "neighbors": [
      {
        "id": "ideology-mutualism-proudhon-1863",
        "difference": "Prescreve propriedade comum da terra e federação produtiva ampla, além de reciprocidade de crédito."
      },
      {
        "id": "ideology-anarcho-communism",
        "difference": "Não adota a regra comunista de distribuição geral segundo necessidades."
      },
      {
        "id": "ideology-program-anarcho-syndicalism-iwa-2022",
        "difference": "A AIT torna sindicatos revolucionários e ação direta o mecanismo organizador central."
      }
    ],
    "sources": [
      {
        "title": "Revolutionary Catechism — Michael Bakunin",
        "url": "https://pzacad.pitzer.edu/Anarchist_Archives/bakunin/catechism.html",
        "note": "Publicação: 1866. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: VIII–IX; Social Organization A–D, K–M; XI. Leitura efetiva declarada na pesquisa: Passagens políticas 43–51, internacionais 85–95 e sociais 95–134; não demais obras. Data expressa 1866. Separados comentários editoriais em colchetes; não usados como palavras do autor."
      },
      {
        "title": "Anarchism — Stanford Encyclopedia of Philosophy",
        "url": "https://plato.stanford.edu/entries/anarchism/",
        "note": "Publicação: Versão consultada em 2026; data editorial não registrada nesta leitura. Acesso registrado pela pesquisa: 2026-10-08. Tipo: scholarly. Localizador: Discussões de anarquismo religioso e comunal; passagens sobre Proudhon, Bakunin, Kropotkin e Tolstói. Leitura efetiva declarada na pesquisa: Passagens localizadas por busca interna, incluindo linhas renderizadas 63–70 e 146–150; não leitura integral. A taxonomia geral não substitui os programas próprios abaixo."
      }
    ]
  },
  {
    "researchId": "ideology-anarcho-communism-kropotkin",
    "id": "ideology-anarcho-communism",
    "existing": true,
    "name": "Anarcocomunismo de Kropotkin",
    "period": "The Conquest of Bread, obra de 1892; edição inglesa Vanguard Press 1926 reproduzida pelo Gutenberg.",
    "rationale": "Expropriação e comunização dos meios de vida, com acesso segundo necessidades e coordenação por associação livre, sem governo estatal. Substitui salário e cálculo individual de contribuição pela satisfação comum das necessidades; federações e acordos livres coordenam atividades.",
    "caveats": "Rejeição do governo não demonstra automaticamente um modelo eleitoral completo. Kropotkin distingue explicitamente coletivistas estatais e coletivistas anarquistas espanhóis: não atribuir a Bakunin todas as críticas a um empregador estatal. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "anarquista-comunista",
    "neighbors": [
      {
        "id": "ideology-left-anarcho-collectivism",
        "difference": "Rejeita equivalência distributiva por horas trabalhadas."
      },
      {
        "id": "ideology-participatory-economics",
        "difference": "Não usa complexos equilibrados e remuneração por esforço como instituições centrais."
      },
      {
        "id": "ideology-communalism",
        "difference": "Não exige a arquitetura municipal eleitoral e majoritária desenvolvida por Bookchin."
      }
    ],
    "sources": [
      {
        "title": "The Conquest of Bread — Peter Kropotkin",
        "url": "https://www.gutenberg.org/cache/epub/23428/pg23428-images.html",
        "note": "Publicação: 1892, obra; edição reproduzida 1926. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: III, Anarchist Communism; XIII, The Collectivist Wages System. Leitura efetiva declarada na pesquisa: Página de rosto e passagens dos capítulos III e XIII localizadas; não livro inteiro. A edição de 1926 inclui materiais editoriais posteriores à morte do autor, separados do texto doutrinário."
      },
      {
        "title": "Anarchism — Stanford Encyclopedia of Philosophy",
        "url": "https://plato.stanford.edu/entries/anarchism/",
        "note": "Publicação: Versão consultada em 2026; data editorial não registrada nesta leitura. Acesso registrado pela pesquisa: 2026-10-08. Tipo: scholarly. Localizador: Discussões de anarquismo religioso e comunal; passagens sobre Proudhon, Bakunin, Kropotkin e Tolstói. Leitura efetiva declarada na pesquisa: Passagens localizadas por busca interna, incluindo linhas renderizadas 63–70 e 146–150; não leitura integral. A taxonomia geral não substitui os programas próprios abaixo."
      }
    ]
  },
  {
    "researchId": "ideology-program-anarcho-syndicalism-iwa-2022",
    "id": "ideology-program-anarcho-syndicalism-iwa-2022",
    "existing": true,
    "name": "Anarcossindicalismo da AIT (2022)",
    "period": "Estatutos aprovados no XXVIII Congresso, 9–10 dezembro 2022, página de 10 fevereiro 2023.",
    "rationale": "Organização sindical revolucionária para abolir monopólio proprietário e Estado, constituindo federações autônomas de produção e consumo. Ação direta e greve, organização econômica autônoma e plano comunitário pactuado, com coordenação federal e autodefesa.",
    "caveats": "O recorte é 2022, não os estatutos de fundação de 1922. Propriedade social autogerida não é automaticamente propriedade estatal. REP, POD e IMI permanecem lacunas de construto. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "anarquista-sindicalista",
    "neighbors": [
      {
        "id": "ideology-left-anarcho-collectivism",
        "difference": "Dá às organizações sindicais e à ação direta econômica papel constitutivo explícito."
      },
      {
        "id": "ideology-council-communism-pannekoek",
        "difference": "Conselhismo de Pannekoek critica a sindicalização tradicional e privilegia conselhos surgidos da luta de massa."
      },
      {
        "id": "ideology-guild-socialism-cole",
        "difference": "Não preserva a solução de representação funcional de guildas em relação a um Estado adaptável."
      }
    ],
    "sources": [
      {
        "title": "Statutes — International Workers Association, Congress 2022 / webpage 2023",
        "url": "https://www.iwa-ait.org/content/statutes",
        "note": "Publicação: Aprovado 2022-12-09/10; página atualizada 2023-02-10. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: I; II.1–8 e II.10; plano acordado em II.3. Leitura efetiva declarada na pesquisa: Reutilização do dossiê de pesquisa de 2026-10-08; não releitura primária por este pesquisador. Escopo registrado: Texto inglês integral, seções I–XI, incluindo disposições de dados/tecnologias livres e linha de aprovação do XXVIII Congresso em Alcoi. Cabeçalhos e corpo 14–150 lidos; formulário final excluído. Nota/proveniência da pesquisa anterior, não alegação de nova leitura nesta seleção: Versão primária em inglês da própria IWA; não atribuir a 1922 nem confundir com outra Internacional. Não foi aberta a versão PDF ou uma tradução. Paráfrases portuguesas próprias. Sem herdar pontuações, decisões de elegibilidade ou certificação de eixos."
      },
      {
        "title": "Decentralised Federalism and Class War Constitutionalism in the IWW — Constitutionalising Anarchy",
        "url": "https://www.cambridge.org/core/books/constitutionalising-anarchy/decentralised-federalism-and-class-war-constitutionalism-in-the-iww/747895212C66C3DF86FB132A946150C2",
        "note": "Publicação: Data editorial não confirmada nesta leitura. Acesso registrado pela pesquisa: 2026-10-08. Tipo: scholarly. Localizador: Passagens sobre IWA e diferença institucional da IWW, linhas 678–684 e 733–744. Leitura efetiva declarada na pesquisa: Somente passagens recuperadas por busca interna; não capítulo integral. Apoio histórico à classificação sindicalista; não confundir IWW com IWA nem usar sua prática para pontuar a AIT."
      }
    ]
  },
  {
    "researchId": "ideology-christian-anarchism-tolstoy",
    "id": "ideology-pacifist-anarchism",
    "existing": true,
    "name": "Anarquismo cristão de Tolstói",
    "period": "The Kingdom of God Is Within You, edição inglesa de 1894, especialmente capítulo IX.",
    "rationale": "Recusa da autoridade coerciva por dever cristão de amor e não resistência violenta, incompatível com juramentos e serviço militar. Não cooperação individual com obrigações estatais violentas, desfazendo a autoridade pela consciência e pelo exemplo.",
    "caveats": "Convicção religiosa pública e recusa do Estado não equivalem a governo clerical ou religião oficial. O capítulo selecionado não estabelece regime sistêmico de propriedade, alocação ou comércio. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "anarquista-crista",
    "neighbors": [
      {
        "id": "ideology-left-anarcho-collectivism",
        "difference": "Recusa a violência revolucionária admitida pelo coletivismo bakuninista."
      },
      {
        "id": "ideology-program-anarcho-syndicalism-iwa-2022",
        "difference": "Não faz da greve revolucionária e da federação sindical o instrumento constitutivo."
      },
      {
        "id": "ideology-gandhian-swaraj",
        "difference": "Gandhi desenvolve autogoverno e programa comunitário próprios, além da não violência religiosa."
      }
    ],
    "sources": [
      {
        "title": "The Kingdom of God Is Within You — Chapter 9",
        "url": "https://www.marxists.org/archive/tolstoy/1894/the-kingdom-of-god-is-within-you/chapter-9.html",
        "note": "Publicação: 1894, tradução inglesa de Constance Garnett. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Capítulo IX, não cooperação e consciência cristã. Leitura efetiva declarada na pesquisa: Sinopse e passagens iniciais 50–70; não livro integral. MIA reproduz Gutenberg/RevoltLib; tentativa de URL chapter-09 falhou e foi corrigida pelo índice."
      },
      {
        "title": "Anarchism — Stanford Encyclopedia of Philosophy",
        "url": "https://plato.stanford.edu/entries/anarchism/",
        "note": "Publicação: Versão consultada em 2026; data editorial não registrada nesta leitura. Acesso registrado pela pesquisa: 2026-10-08. Tipo: scholarly. Localizador: Discussões de anarquismo religioso e comunal; passagens sobre Proudhon, Bakunin, Kropotkin e Tolstói. Leitura efetiva declarada na pesquisa: Passagens localizadas por busca interna, incluindo linhas renderizadas 63–70 e 146–150; não leitura integral. A taxonomia geral não substitui os programas próprios abaixo."
      }
    ]
  },
  {
    "researchId": "ideology-communalism-bookchin-2002",
    "id": "ideology-communalism",
    "existing": true,
    "name": "Comunalismo de Bookchin",
    "period": "The Communalist Project, novembro 2002; formulação tardia que se distingue do anarquismo clássico.",
    "rationale": "Socialismo ecológico de cidadania territorial, articulado em assembleias municipais confederadas que assumem a decisão econômica e política. Participação eleitoral municipal para criar assembleias legislativas, voto majoritário com direitos de minoria e poder confederal rival do Estado.",
    "caveats": "O próprio autor rejeita tratar comunalismo como simples prefixo do anarquismo. Não inferir pacifismo de antiestatismo; o texto admite conflito e imposição de decisões. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "socialista-municipalista",
    "neighbors": [
      {
        "id": "ideology-council-communism-pannekoek",
        "difference": "Representa cidadãos em territórios, não apenas trabalhadores nas unidades produtivas."
      },
      {
        "id": "ideology-democratic-confederalism-ocalan-2011",
        "difference": "Bookchin insiste no voto majoritário e confronto de poderes; Öcalan enfatiza consenso, associações identitárias e coexistência com Estados."
      },
      {
        "id": "ideology-market-socialism-schweickart",
        "difference": "Subordina economia à cidadania, criticando cooperativas que competem como capitalistas coletivos."
      }
    ],
    "sources": [
      {
        "title": "The Communalist Project — Murray Bookchin",
        "url": "https://theanarchistlibrary.org/library/murray-bookchin-the-communalist-project",
        "note": "Publicação: 2002-11. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Passagens sobre assembleias, cidadania, economia e maioria, linhas 114–175. Leitura efetiva declarada na pesquisa: Metadados e passagens 96–175 lidas seletivamente; não todas as notas ou ensaio integral. Publicado em Communalism nº 2; domínio com www falhou, versão sem www funcionou."
      },
      {
        "title": "When Öcalan met Bookchin — Damian Gerber and Shannon Brincat",
        "url": "https://research.usc.edu.au/esploro/outputs/journalArticle/When-%C3%96calan-met-Bookchin-The-Kurdish/99451377102621",
        "note": "Publicação: 2021, Geopolitics 26(4), pp. 973–997. Acesso registrado pela pesquisa: 2026-10-08. Tipo: scholarly. Localizador: Abstract. Leitura efetiva declarada na pesquisa: Resumo e ficha do repositório universitário; não artigo integral. Apoia parentesco conceitual; diferença institucional é verificada nas primárias."
      }
    ]
  },
  {
    "researchId": "ideology-democratic-confederalism-ocalan-2011",
    "id": "ideology-democratic-confederalism-ocalan-2011",
    "existing": false,
    "name": "Confederalismo democrático de Öcalan",
    "period": "Democratic Confederalism, primeira edição inglesa 2011, International Initiative; não constituições posteriores de Rojava.",
    "rationale": "Autogoverno plural de comunidades e grupos sociais federados, sem novo Estado-nação, com ecologia e emancipação feminina como pilares. Decisão local, coordenação delegada, consenso e autonomia cultural, com autodefesa subordinada às instituições democráticas e possibilidade de coexistência estatal.",
    "caveats": "Economia antimonopolista e ecológica é programada de modo genérico: ECO e CON precisam de desenho mais completo. Não confundir pluralismo cultural com política migratória completa; IMI é somente perspectiva de pesquisa. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "socialista-confederalista",
    "neighbors": [
      {
        "id": "ideology-communalism",
        "difference": "Adapta a tradição municipalista a unidades culturais e sociais plurais, consenso e coexistência; não só reprodução regional do modelo majoritário."
      },
      {
        "id": "ideology-program-zapatista-autonomy-ezln-1993-1996",
        "difference": "O programa zapatista selecionado pede autonomia constitucional dentro do México, não um paradigma confederal transfronteiriço."
      }
    ],
    "sources": [
      {
        "title": "Democratic Confederalism — Abdullah Öcalan",
        "url": "https://www.freeocalan.org/wp-content/uploads/2012/09/Ocalan-Democratic-Confederalism.pdf",
        "note": "Publicação: 2011, primeira edição. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: III.A–F, pp. impressas 21–30; dados editoriais. Leitura efetiva declarada na pesquisa: Página editorial, prefácio e trechos III.A–F recuperados no PDF; não 48 páginas integrais. Tradução International Initiative. Descrição normativa, sem atribuir práticas militares ou administrativas posteriores."
      },
      {
        "title": "When Öcalan met Bookchin — Damian Gerber and Shannon Brincat",
        "url": "https://research.usc.edu.au/esploro/outputs/journalArticle/When-%C3%96calan-met-Bookchin-The-Kurdish/99451377102621",
        "note": "Publicação: 2021, Geopolitics 26(4), pp. 973–997. Acesso registrado pela pesquisa: 2026-10-08. Tipo: scholarly. Localizador: Abstract. Leitura efetiva declarada na pesquisa: Resumo e ficha editorial, não artigo completo. Confirma linhagem comum; não basta sozinho para afirmar diferença entre as duas entradas."
      }
    ]
  },
  {
    "researchId": "ideology-program-zapatista-autonomy-ezln-1993-1996",
    "id": "ideology-program-zapatista-autonomy-ezln-1993-1996",
    "existing": true,
    "name": "Neozapatismo do EZLN (1993–1996)",
    "period": "Leis revolucionárias de dezembro 1993, Terceira e Quarta Declarações 1995–1996 e programa de autonomia de fevereiro 1996.",
    "rationale": "Autonomia indígena articulada a democratização nacional, direitos comunitários e reformas econômicas e de gênero. Competências comunais, municipais e regionais dentro do Estado mexicano, representação civil e redistribuição agrária com proteção social.",
    "caveats": "Não importar Caracoles de 2003 ou reorganizações recentes para este recorte. A convivência de ordem armada e projeto civil impede converter todo o período em pacifismo ou em liberdades irrestritas. Remissão à Constituição original de 1917 exige revisão própria e não foi usada para completar artificialmente eixos. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "autonomista-indigena",
    "neighbors": [
      {
        "id": "ideology-democratic-confederalism-ocalan-2011",
        "difference": "Preserva uma moldura nacional-constitucional mexicana e autonomia de povos indígenas, não confederação além dos Estados."
      },
      {
        "id": "ideology-left-anarcho-collectivism",
        "difference": "Não dissolve toda a ordem estatal: combina autonomia, legislação revolucionária e transição constitucional."
      }
    ],
    "sources": [
      {
        "title": "EZLN signed regional-autonomy programme — 15 February 1996",
        "url": "https://enlacezapatista.ezln.org.mx/1996/02/15/el-dialogo-de-san-andres-y-los-derechos-y-cultura-indigena-punto-y-seguido/",
        "note": "Publicação: 1996-02-15. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: III, programa de governos autônomos comunais, municipais e regionais. Leitura efetiva declarada na pesquisa: Reutilização do dossiê de pesquisa de 2026-10-08; não releitura primária por este pesquisador. Escopo registrado: Documento inteiro, seções I–III; corpo autoral nos parágrafos renderizados 23–116. Reivindicações assinadas da seção III, 71–116, separadas da narrativa inicial. Comentários e rodapé excluídos. Nota/proveniência da pesquisa anterior, não alegação de nova leitura nesta seleção: Releitura direta do arquivo primário do próprio EZLN em espanhol; paráfrases em português deste pesquisador, sem tradução publicada intermediária. Texto programático, não verificação de execução. Não foram usados comentários de visitantes ou textos de 2005. Sem herdar pontuações, decisões de elegibilidade ou certificação de eixos."
      },
      {
        "title": "EZLN Third Declaration — 1 January 1995",
        "url": "https://enlacezapatista.ezln.org.mx/1995/01/01/tercera-declaracion-de-la-selva-lacandona/",
        "note": "Publicação: 1995-01-01; corpo assinado apenas México, enero de 1995; dia consta do cabeçalho do arquivo. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Tercero, características 1–5 do governo de transição. Leitura efetiva declarada na pesquisa: Reutilização do dossiê de pesquisa de 2026-10-08; não releitura primária por este pesquisador. Escopo registrado: Corpo autoral completo, parágrafos 25–92; incisos Primero–Tercero e características 1–5 do governo de transição. Epígrafe lida, mas não usada como fato histórico. Nota/proveniência da pesquisa anterior, não alegação de nova leitura nesta seleção: Releitura direta do arquivo primário do próprio EZLN em espanhol; paráfrases em português deste pesquisador, sem tradução publicada intermediária. Texto programático, não verificação de execução. Não foram usados comentários de visitantes ou textos de 2005. Sem herdar pontuações, decisões de elegibilidade ou certificação de eixos."
      },
      {
        "title": "EZLN Fourth Declaration — 1 January 1996",
        "url": "https://enlacezapatista.ezln.org.mx/1996/01/01/cuarta-declaracion-de-la-selva-lacandona/",
        "note": "Publicação: 1996-01-01; data expressa também no corpo. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: III, proposta civil do FZLN. Leitura efetiva declarada na pesquisa: Reutilização do dossiê de pesquisa de 2026-10-08; não releitura primária por este pesquisador. Escopo registrado: Corpo autoral completo, parágrafos 13–163, seções I–III, incluindo proposta FZLN e assinatura. Nota/proveniência da pesquisa anterior, não alegação de nova leitura nesta seleção: Releitura direta do arquivo primário do próprio EZLN em espanhol; paráfrases em português deste pesquisador, sem tradução publicada intermediária. Texto programático, não verificação de execução. Não foram usados comentários de visitantes ou textos de 2005. Sem herdar pontuações, decisões de elegibilidade ou certificação de eixos."
      },
      {
        "title": "EZLN Agrarian Revolutionary Law — December 1993",
        "url": "https://enlacezapatista.ezln.org.mx/1993/12/31/ley-agraria-revolucionaria/",
        "note": "Publicação: 1993-12; El Despertador Mexicano, No. 1; arquivo usa 31/12/1993, dia original não estabelecido. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Artigos de redistribuição e propriedade agrária. Leitura efetiva declarada na pesquisa: Reutilização do dossiê de pesquisa de 2026-10-08; não releitura primária por este pesquisador. Escopo registrado: Preâmbulo e dezesseis artigos completos, parágrafos 15–39, e crédito editorial no 42. Nota/proveniência da pesquisa anterior, não alegação de nova leitura nesta seleção: Releitura direta do arquivo primário do próprio EZLN em espanhol; paráfrases em português deste pesquisador, sem tradução publicada intermediária. Texto programático, não verificação de execução. Não foram usados comentários de visitantes ou textos de 2005. Sem herdar pontuações, decisões de elegibilidade ou certificação de eixos."
      },
      {
        "title": "EZLN Revolutionary Women’s Law — December 1993",
        "url": "https://enlacezapatista.ezln.org.mx/1993/12/31/ley-revolucionaria-de-mujeres/",
        "note": "Publicação: 1993-12; El Despertador Mexicano, No. 1; arquivo usa 31/12/1993, dia original não estabelecido. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Dez artigos de direitos das mulheres. Leitura efetiva declarada na pesquisa: Reutilização do dossiê de pesquisa de 2026-10-08; não releitura primária por este pesquisador. Escopo registrado: Preâmbulo e dez artigos completos, parágrafos 14–31, e crédito editorial no 34. Nota/proveniência da pesquisa anterior, não alegação de nova leitura nesta seleção: Releitura direta do arquivo primário do próprio EZLN em espanhol; paráfrases em português deste pesquisador, sem tradução publicada intermediária. Texto programático, não verificação de execução. Não foram usados comentários de visitantes ou textos de 2005. Sem herdar pontuações, decisões de elegibilidade ou certificação de eixos."
      },
      {
        "title": "Autonomía, democracia y gobierno de los comunes: El modelo Neozapatista",
        "url": "https://www.scielo.org.mx/scielo.php?pid=S0187-57952015000100006&script=sci_arttext",
        "note": "Publicação: 2015. Acesso registrado pela pesquisa: 2026-10-08. Tipo: scholarly. Localizador: Resumo e trecho indexado do contexto de 1996. Leitura efetiva declarada na pesquisa: Trechos indexados recuperados por busca; abertura do artigo retornou timeout. Apoio limitado à classificação; não atribuir o modelo institucional posterior ao recorte de 1993–1996."
      }
    ]
  },
  {
    "researchId": "ideology-global-green-politics",
    "id": "green-politics",
    "existing": true,
    "name": "Ecologismo político (Global Greens, 2023)",
    "period": "Carta coletiva internacional, versão 2023; não todos os partidos verdes nem sua prática.",
    "rationale": "Programa internacional verde que une democracia, direitos, sustentabilidade e regras econômicas. Participação descentralizada e condicionamento ecológico da economia e da cooperação internacional.",
    "caveats": "Carta coletiva internacional, versão 2023; não todos os partidos verdes nem sua prática. Somente os trechos e modos de recuperação declarados foram lidos; não há certificação de eixos por proximidade doutrinária. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "ecológica",
    "neighbors": [
      {
        "id": "ideology-democratic-degrowth",
        "difference": "Ambos rejeitam crescimento material ilimitado. A Carta detalha democracia partidária/proporcional e regulação multissetorial; Kallis organiza uma transição pós-capitalista por limites materiais, partilha do trabalho e faixas de renda."
      },
      {
        "id": "ideology-democratic-transhumanism-hughes",
        "difference": "A precaução genética/ambiental contrasta com o aprimoramento e a cidadania pós-humana estruturantes em Hughes."
      }
    ],
    "sources": [
      {
        "title": "Charter of the Global Greens — final Korea 2023 version",
        "url": "https://globalgreens.org/wp-content/uploads/2023/07/GlobalGreens_Charter_2023.pdf",
        "note": "Publicação: 2001, atualizada em 2012, 2017 e 2023; versão final Korea 2023. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Princípio Participatory Democracy, p.6; §§1.12–1.13, p.9; Participatory Democracy, p.6; §1, pp.9–10; §§1.6, 1.8; §6.2–6.18; §9.1; Respect for Diversity, p.8; §§6.7–6.8, 6.12–6.13, 6.18; Nonviolence, p.7; §§9.2–9.9, pp.19–20; §5.2; §§7.2–7.4; §5.13; Sustainability, pp.7–8; §§5.3–5.12;8.9–8.12; §§4.7;5.3–5.8; §§1.8, 1.11; Respect for Diversity; §§6.6, 6.10, 6.16; Ecological Wisdom; §§3.5–3.12;7.9–7.13. Leitura efetiva declarada na pesquisa: PDF integral: 21 páginas, preâmbulo, seis princípios e seções 1–10. Recuperação: direct. Fonte institucional inglesa; não atribuir emendas de 2023 a 2001. Estatísticas históricas do texto não foram verificadas como dados atuais; claims abaixo usam prescrições. Sem falha de acesso."
      }
    ]
  },
  {
    "researchId": "ideology-democratic-degrowth",
    "id": "ideology-democratic-degrowth",
    "existing": false,
    "name": "Decrescimento democrático (Kallis / Research & Degrowth, 2015)",
    "period": "Síntese de Kallis em fevereiro 2015 e pacote de dez propostas para Espanha/Catalunha; sem incorporar toda corrente pós-crescimento.",
    "rationale": "Transformação democrática para reduzir fluxos materiais afluentes preservando bem-estar e equidade. Limites decrescentes combinados com repartição do trabalho, renda, comuns e mudança do objetivo econômico.",
    "caveats": "Síntese de Kallis em fevereiro 2015 e pacote de dez propostas para Espanha/Catalunha; sem incorporar toda corrente pós-crescimento. Somente os trechos e modos de recuperação declarados foram lidos; não há certificação de eixos por proximidade doutrinária. Sobreposição substantiva com ecossocialismo e Carta Verde é real; a distinção retida é de arquitetura operacional e programa, não de aceitar ou rejeitar limites ao crescimento. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "ecológica-pós-crescimento",
    "neighbors": [
      {
        "id": "green-politics",
        "difference": "A Carta também limita consumo e rejeita o PIB como fim. Kallis oferece um pacote operacional de contração material justa e transição pós-capitalista; não uma simples oposição pro-crescimento/pós-crescimento."
      },
      {
        "id": "ideology-ecosocialism-kovel-lowy",
        "difference": "Ambos rejeitam capitalismo e produtivismo. Kovel–Löwy tornam centrais associações de produtores e relações produtivas socializadas; Kallis coordena limites materiais decrescentes, partilha do trabalho, piso/teto de renda e comuns."
      }
    ],
    "sources": [
      {
        "title": "The Degrowth Alternative — Giorgos Kallis",
        "url": "https://greattransition.org/publication/the-degrowth-alternative/",
        "note": "Publicação: Fevereiro de 2015. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Seeds of a Degrowth Transition, especialmente parágrafos finais; Governing Degrowth; Envisioning Degrowth; Seeds of a Degrowth Transition; Envisioning Degrowth: care e dépense. Leitura efetiva declarada na pesquisa: Ensaio completo: introdução, seis seções, Epilogue; notas vistas, obras citadas não lidas. Recuperação: direct. Texto normativo do próprio Kallis, em inglês, publicado pela Great Transition Initiative. Não representa consenso uniforme de todo o movimento."
      },
      {
        "title": "Can We Prosper Without Growth? 10 Policy Proposals — Giorgos Kallis / Research & Degrowth",
        "url": "https://www.greeneuropeanjournal.eu/can-we-prosper-without-growth-10-policy-proposals/",
        "note": "Publicação: Texto circula em 2015; página consultada não exibe data editorial no corpo. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Propostas 5–7 e conclusão; Propostas 1–10, especialmente 2–4, 8–10. Leitura efetiva declarada na pesquisa: Introdução, dez propostas e conclusão completas, linhas 21–64. Recuperação: direct. Propostas para Espanha/Catalunha, apresentadas a partidos; a adaptação a outros países é explicitamente condicionada. A data 2015 é corroborada pela remissão autoral de 2016 em degrowth.info e registros bibliográficos, não pelo rodapé 2026. O acesso com parâmetro PageSpeed falhou, mas a URL limpa funcionou."
      }
    ]
  },
  {
    "researchId": "ideology-bioregionalism",
    "id": "ideology-bioregionalism",
    "existing": false,
    "name": "Biorregionalismo reabitante (Berg–Dasmann)",
    "period": "Programa reabitante de Northern California/Shasta no ensaio em sua versão final; não todo localismo nem separatismo étnico.",
    "rationale": "Reorganização social para habitar sustentavelmente comunidades ecológicas concretas. Bacias e biorregiões como unidades políticas, culturais e econômicas de suficiência.",
    "caveats": "Programa reabitante de Northern California/Shasta no ensaio em sua versão final; não todo localismo nem separatismo étnico. Somente os trechos e modos de recuperação declarados foram lidos; não há certificação de eixos por proximidade doutrinária. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "ecológica-biorregional",
    "neighbors": [
      {
        "id": "ideology-democratic-degrowth",
        "difference": "O princípio de organização é o lugar/bacia e a reabitação; Kallis organiza a transição em torno de fluxos, distribuição e superação do crescimento."
      },
      {
        "id": "ideology-anarcho-primitivism",
        "difference": "O texto mantém atividades econômicas alteradas e estado regional; Moore pretende abolir instituições e civilização de dominação."
      },
      {
        "id": "ideology-communalism",
        "difference": "Berg–Dasmann preservam Estado regional e governos de bacias com pequenas propriedades reestruturadas; Bookchin municipaliza decisões econômicas em assembleias territoriais de cidadãos confederadas."
      }
    ],
    "sources": [
      {
        "title": "Reinhabiting California — Peter Berg and Raymond F. Dasmann",
        "url": "https://planetdrum.org/reinhabiting-california/",
        "note": "Publicação: Ensaio referido à antologia de 1978; página rotulada 17 junho 1977; introdução de Berg datada 2009; data da edição final não indicada. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Politics, parágrafos finais; trecho anterior sobre bacias; Economics; parágrafos sobre desenvolvimento conforme água; Economics: agricultura, florestas, novos ofícios; Abertura; Economics; Reinhabitation; parágrafos sobre cultura e identidade. Leitura efetiva declarada na pesquisa: Introdução editorial/autoral e ensaio integral, incluindo Economics, Politics e nota de versões, linhas 55–129. Recuperação: direct. Reprodução pela Planet Drum, organização de Berg. A nota diz ser a versão final editada por Peter, com introdução, política e citações de Forbes. Não tratar esse composto como transcrição exata da edição 1977. Argumentos históricos/ecológicos não validados empiricamente."
      }
    ]
  },
  {
    "researchId": "ideology-anarcho-primitivism",
    "id": "ideology-anarcho-primitivism",
    "existing": false,
    "name": "Anarcoprimitivismo (exposição de John Moore)",
    "period": "Corrente anticivilização na exposição pessoal de Moore; não todos os autores citados nem ecologia profunda em geral.",
    "rationale": "Projeto anticivilização de comunidades livres que visa abolir relações institucionalizadas de dominação. Recusa do sistema tecnológico industrial e de instituições de poder, preservando a distinção entre ferramentas e sistemas.",
    "caveats": "Corrente anticivilização na exposição pessoal de Moore; não todos os autores citados nem ecologia profunda em geral. Somente os trechos e modos de recuperação declarados foram lidos; não há certificação de eixos por proximidade doutrinária. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "anarquista-anticivilização",
    "neighbors": [
      {
        "id": "ideology-bioregionalism",
        "difference": "Oposição constitutiva às instituições/civilização excede o redesenho biorregional de estado e atividades econômicas."
      },
      {
        "id": "ideology-anarcho-communism",
        "difference": "Kropotkin reorganiza produção técnica e industrial descentralizada para abundância comum; Moore pretende superar o sistema industrial de dominação e recusa um modelo institucional pronto."
      }
    ],
    "sources": [
      {
        "title": "A Primitivist Primer — John Moore",
        "url": "https://theanarchistlibrary.org/library/john-moore-a-primitivist-primer",
        "note": "Publicação: Ensaio sem data editorial; espelho registra recuperações 12 fevereiro 2009 e 7 maio 2025. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: What is anarcho-primitivism?; How might…; What is…; How does…; How might…; How does anarcho-primitivism view technology?; What kind of future…; What about population?; How might…; How does…; How might…. Leitura efetiva declarada na pesquisa: Texto autoral completo: Author’s note e todas as perguntas; referências finais vistas, não seguidas. Recuperação: mirror. Mirror The Anarchist Library; autoria John Moore. Nota autoral chama o texto de exposição pessoal não definitiva. Mantidas distinções internas: ferramentas/tecnologia, inspiração/retorno literal. Alegações médicas, demográficas e antropológicas não validadas nem usadas como fatos."
      }
    ]
  },
  {
    "researchId": "ideology-democratic-transhumanism-hughes",
    "id": "ideology-democratic-transhumanism-hughes",
    "existing": false,
    "name": "Transumanismo democrático (Hughes, programa 2.0)",
    "period": "Versão revisada de Hughes reproduzida 2013/2019, posterior aos dados de 2004 citados no corpo; entrada nova, sem renomeação de civic-transhumanism.",
    "rationale": "Programa de Hughes que integra aprimoramento humano, direitos ampliados e democracia social. Liberdade morfológica com acesso universal, regulação democrática e governança mundial.",
    "caveats": "Versão revisada de Hughes reproduzida 2013/2019, posterior aos dados de 2004 citados no corpo; entrada nova, sem renomeação de civic-transhumanism. Somente os trechos e modos de recuperação declarados foram lidos; não há certificação de eixos por proximidade doutrinária. Entrada nova; não renomeia civic-transhumanism. Texto revisado inclui dados de 2004; 2002 identifica um antecedente distinto. Tradução francesa e reprodução inglesa indexada têm limitações registradas. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "tecnoprogressista",
    "neighbors": [
      {
        "id": "ideology-social-liberalism",
        "difference": "Hughes redefine pessoa, cidadania e autonomia corporal frente ao aprimoramento biotécnico, com direitos de acesso e governança mundial; Hobhouse não tem essa arquitetura pós-humana."
      },
      {
        "id": "green-politics",
        "difference": "Aposta construtiva em biotecnologia e reparação técnica; mantém segurança, acesso e ecologia como condições, sem adotar o veto verde a certas classes de tecnologia."
      },
      {
        "id": "ideology-program-technocracy-inc-2004",
        "difference": "Mantém legitimidade democrática e direitos; não substitui governo por hierarquia funcional/contabilidade energética."
      }
    ],
    "sources": [
      {
        "title": "Le Transhumanisme Démocratique 2.0 — James Hughes, reprodução AFT",
        "url": "https://transhumanistes.com/quest-ce-que-le-transhumanisme-democratique/",
        "note": "Publicação: Reprodução 14 julho 2013; versão revisada sem data; menciona eventos/dados de 2004; versão anterior substancialmente diferente 28 abril 2002. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Créer des solutions globales; Radicaliser les droits de la personne; propriété génétique; Défendre et accroître les droits sociaux; Démocratiser l’innovation technologique; direitos sociais; Radicaliser les droits de la personne; Créer des solutions globales; Último parágrafo de Créer des solutions globales. Leitura efetiva declarada na pesquisa: Resumo, definição democrática, seções sobre ambientalismo/renda e programa final completo: linhas 29–60, 228–314. Restante histórico não alegado integralmente lido. Recuperação: mirror. Texto primário traduzido ao francês; página assinada MarcRoux como responsável pela publicação, tradutor não explicitamente identificado. Inglês original Changesurfer falhou. Não atribuir corpo revisado integral a 2002. Detalhes corroborados parcialmente por reprodução inglesa indexada; tradução contém lapsos tipográficos, exigindo cautela literal."
      },
      {
        "title": "Democratic Transhumanism 2.0 — James Hughes, reprodução inglesa",
        "url": "https://fabianooliveira.wordpress.com/2019/08/31/democratic-transhumanism-2-0/",
        "note": "Publicação: Reprodução 31 agosto 2019; revisão autoral sem data exata; antecedente 28 abril 2002 explicitamente distinto. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Abstract; eleven-point program, pontos 1 e 11; Abstract completo, onze pontos. Leitura efetiva declarada na pesquisa: Conteúdo indexado: nota de versão, abstract integral incluindo onze pontos, seções retornadas sobre bioética e referência a abril–junho 2004. Recuperação: indexed. Abertura direta falhou por cache miss; nenhuma leitura direta alegada. Mirror independente, não site do autor. Corrobora identidade e versão do programa francês. Citizen Cyborg não foi lido e não é fonte das claims."
      }
    ]
  },
  {
    "researchId": "ideology-continental-technocracy",
    "id": "ideology-program-technocracy-inc-2004",
    "existing": true,
    "name": "Tecnocracia continental (Technocracy Inc., edição 2004)",
    "period": "Modelo institucional do Study Course na edição eletrônica 2004; não qualquer governo de especialistas.",
    "rationale": "Modelo continental da Technocracy Inc. que reorganiza sociedade por funções e distribuição energética. Hierarquia técnica coordenada e certificados pessoais de consumo substituem política eleitoral e distribuição monetária.",
    "caveats": "Modelo institucional do Study Course na edição eletrônica 2004; não qualquer governo de especialistas. Somente os trechos e modos de recuperação declarados foram lidos; não há certificação de eixos por proximidade doutrinária. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "tecnocrática",
    "neighbors": [
      {
        "id": "ideology-democratic-transhumanism-hughes",
        "difference": "Hierarquia funcional substitui política eleitoral; a igualdade distributiva vem de certificados físicos, sem a cidadania tecnológica plural de Hughes."
      },
      {
        "id": "ideology-participatory-economics",
        "difference": "Tecnocracia usa cadeia de comando funcional e certificados energéticos; Parecon usa conselhos de produtores/consumidores, tarefas equilibradas e planejamento iterativo participativo."
      },
      {
        "id": "ideology-bioregionalism",
        "difference": "Subdivisões geométricas continentais rejeitam fronteiras naturais, em contraste direto com bacias de Berg–Dasmann."
      },
      {
        "id": "ideology-market-socialism-schweickart",
        "difference": "Schweickart mantém preços de mercado e autogestão de empresas; a tecnocracia substitui o mecanismo monetário por contabilidade física administrada."
      }
    ],
    "sources": [
      {
        "title": "Technocracy Study Course — Technocracy Incorporated, electronic edition 1.1",
        "url": "https://www.technate.org/pdf/Technocracy%20study%20guide.pdf",
        "note": "Publicação: Copyright 1934–1936; edições/impressoes 1934–1947; edição eletrônica 1.1:2004. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: §§22.6.1–22.7, impressas 220–224; PDF 226–230; §22.6.2, impressas 222–223; PDF 228–229; §22.6.1;§§22.8–22.9.1; §22.6;§22.8.1;§22.9.1; §§22.8–22.10, impressas 225–233; §§22.6.1, 22.10; introdução institucional. Leitura efetiva declarada na pesquisa: Front matter; trechos de§§16.2, 16.5;§22.4;§§22.6–22.10, especialmente design, nomeação, divisões, distribuição e certificados. Não leitura integral das 275 páginas. Recuperação: mirror. Reprodução inglesa de manual institucional, com ficha de edições. Fonte oficial alternativa technocracyinc.org/wp-content/uploads/2015/07/Study-Course.pdf falhou. PDF lido é edição eletrônica de 2004, não fac-símile exclusivamente 1934. Numeração impressa difere da página PDF por 6."
      }
    ]
  },
  {
    "researchId": "ideology-douglas-social-credit",
    "id": "ideology-douglas-social-credit",
    "existing": false,
    "name": "Crédito social (Douglas, 1933)",
    "period": "C. H. Douglas, Social Credit, terceira edição revista de maio de 1933, reimpressão de 1935; original de 1924.",
    "rationale": "Autonomia pessoal requer romper a concentração de poder financeiro e assegurar acesso à produção social sem dependência exclusiva do emprego. Dividendos e preços compensados por crédito público, produção administrada privadamente e distinção entre controle popular de fins e execução técnica.",
    "caveats": "Não é o sistema chinês de crédito social. O esquema escocês é exemplo específico: prevê elegibilidade por nascimento/residência, limite de renda e condicionamento laboral por cinco anos; o dividendo não é uma renda básica universal incondicional. A edição recorre à falsificação conspiratória antissemita dos Protocolos dos Sábios de Sião (II.VI), sem que sua inclusão acadêmica endosse essa narrativa. Nenhuma viabilidade econômica foi demonstrada; prática de Alberta não é atribuída ao modelo. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "monetaria-distributiva",
    "neighbors": [
      {
        "id": "ideology-georgism",
        "difference": "O dividendo provém de crédito lastreado na capacidade social produtiva, não da captura fiscal da renda fundiária."
      },
      {
        "id": "ideology-agrarian-populism",
        "difference": "Não busca prioritariamente emprego, prata monetária ou gestão pública das ferrovias: redesenha renda e crédito para escolha do consumidor."
      },
      {
        "id": "ideology-program-technocracy-inc-2004",
        "difference": "Preserva moeda, escolha do consumidor e operadores privados; não substitui o mercado por certificados energéticos e direção continental."
      }
    ],
    "sources": [
      {
        "title": "Social Credit — third edition, revised and enlarged",
        "url": "https://www.fadedpage.com/books/20230526/html.php",
        "note": "Publicação: 1933-05. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: ParteII, cap.IV; ParteIII, cap.I; Apêndice The Draft Scheme for Scotland, itens 1–9; ParteII, cap.VI (uso dos Protocolos). Leitura efetiva declarada na pesquisa: Prefácios, passagens de política/administração, apêndice institucional e trechos de I.VI eII.IV–VII lidos. Não livro integral. Reimpressão 1935 da terceira edição 1933, explicitada no frontispício; metadata automatizada 1935 não é a primeira edição da obra 1924."
      },
      {
        "title": "The Political Theory of Social Credit — C. B. Macpherson",
        "url": "https://www.cambridge.org/core/journals/canadian-journal-of-economics-and-political-science-revue-canadienne-de-economiques-et-science-politique/article/abs/political-theory-of-social-credit/CE680D1AA74EF745E28C9E5A60C7DCD5",
        "note": "Publicação: 1949-08. Acesso registrado pela pesquisa: 2026-10-08. Tipo: scholarly. Localizador: Canadian Journal of Economics and Political Science 15(3), pp.378–393; Extract. Leitura efetiva declarada na pesquisa: Extrato público e referências lidos; artigo integral não acessado. Distingue expressamente a teoria inglesa de Douglas dos partidos canadenses; publicação digital 2014 não é data original."
      },
      {
        "title": "An Antisemitic Conspiracy: The Protocols of the Elders of Zion",
        "url": "https://encyclopedia.ushmm.org/content/en/article/protocols-of-the-elders-of-zion",
        "note": "Publicação: undated. Acesso registrado pela pesquisa: 2026-10-08. Tipo: scholarly-institutional. Localizador: Introdução e história da falsificação. Leitura efetiva declarada na pesquisa: Resumo indexado institucional lido para contextualizar a falsificação citada por Douglas. Não é fonte para as prescrições de Douglas; contextualiza material antissemita usado no próprio livro."
      }
    ]
  },
  {
    "researchId": "ideology-socialist-feminism",
    "id": "ideology-feminist-socialism",
    "existing": true,
    "name": "Feminismo socialista negro (Combahee, 1977)",
    "period": "Combahee River Collective, declaração de abril 1977.",
    "rationale": "Exploração de classe, racismo, patriarcado e heterossexismo constituem sistemas imbricados que exigem emancipação conjunta. Organização autônoma e coalizões, trabalho para benefício coletivo, distribuição de recursos e poder não hierárquico na sociedade revolucionária.",
    "caveats": "“Interseccional” descreve retrospectivamente o mecanismo; não atribuir ao coletivo o termo posterior de Crenshaw. Não há desenho constitucional completo. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "emancipatoria-feminista",
    "neighbors": [
      {
        "id": "ideology-egalitarian-liberalism",
        "difference": "Rawls não faz da emancipação simultaneamente antirracista, antipatriarcal e socialista o mecanismo constitutivo; Combahee exige integrar essas transformações e recusa hierarquias na sociedade revolucionária."
      },
      {
        "id": "ideology-radical-feminism",
        "difference": "Recusa reduzir a opressão à diferença sexual ou ao determinismo biológico e rejeita separatismo lésbico."
      }
    ],
    "sources": [
      {
        "title": "A Black Feminist Statement",
        "url": "https://careprogram.ucla.edu/education/readings/Combahee1977",
        "note": "Publicação: 1977-04. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: §§2 e 4, pp.272–276; especialmente poder não hierárquico no final de§4. Leitura efetiva declarada na pesquisa: Introdução editorial, §2 e §4 lidas; demais passagens parcialmente recuperadas. Não atribuir texto da conferência seguinte ao coletivo. PDF de 9 páginas mistura texto primário e enquadramento editorial; distinguir ambos."
      },
      {
        "title": "The Combahee River Collective Statement",
        "url": "https://www.loc.gov/item/lcwaN0028151/",
        "note": "Publicação: 1977-04. Acesso registrado pela pesquisa: 2026-10-08. Tipo: archival. Localizador: Descrição do documento arquivado. Leitura efetiva declarada na pesquisa: Registro de preservação e data da declaração conferidos."
      }
    ]
  },
  {
    "researchId": "ideology-radical-feminism",
    "id": "ideology-radical-feminism",
    "existing": false,
    "name": "Feminismo radical de Firestone",
    "period": "Shulamith Firestone, The Dialectic of Sex (1970; cap. 1 reproduzido da edição 1979).",
    "rationale": "A classe sexual e a família biológica estruturam relações de dominação que ultrapassam a exploração econômica. Controle autônomo da reprodução, possibilidade de reprodução artificial, cuidado reorganizado e automação do trabalho.",
    "caveats": "Não representa todos os feminismos radicais; seus pressupostos biológicos são contestados. A analogia de tomada revolucionária temporária do controle deve ser examinada antes de REP. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "emancipatoria-feminista",
    "neighbors": [
      {
        "id": "ideology-feminist-socialism",
        "difference": "Localiza a raiz da classe na divisão reprodutiva, em vez de tratar raça, classe e sexo como sistemas imbricados."
      },
      {
        "id": "ideology-democratic-transhumanism-hughes",
        "difference": "A transformação da família e das classes sexuais é o centro, não um programa geral de direitos de melhoramento humano."
      }
    ],
    "sources": [
      {
        "title": "The Dialectic of Sex",
        "url": "https://www.marxists.org/subject/women/authors/firestone-shulamith/dialectic-sex.htm",
        "note": "Publicação: 1970. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: cap. 1, parágrafos sobre reprodução artificial, cybernetics e família biológica. Leitura efetiva declarada na pesquisa: Capítulo 1 integralmente disponível e lido; não capítulos seguintes. Espelho openstax falhou; acesso ao MIA original funcionou."
      },
      {
        "title": "Ectogenesis as a Theme in The Dialectic of Sex",
        "url": "https://embryo.asu.edu/pages/ectogenesis-theme-dialectic-sex-case-feminist-revolution-1970-shulamith-firestone",
        "note": "Publicação: 2025. Acesso registrado pela pesquisa: 2026-10-08. Tipo: scholarly. Localizador: Discussão dos caps.1 e 10. Leitura efetiva declarada na pesquisa: Resumo acadêmico sobre tese reprodutiva consultado."
      }
    ]
  },
  {
    "researchId": "ideology-black-nationalism",
    "id": "ideology-black-nationalism",
    "existing": false,
    "name": "Nacionalismo negro comunitário (Malcolm X, 1964)",
    "period": "Malcolm X, versão de Cleveland de The Ballot or the Bullet, 3 abril 1964.",
    "rationale": "Autodeterminação negra por controle comunitário da política, da economia e das instituições sociais. Organização eleitoral independente, negócios comunitários e autodefesa quando o Estado não protege direitos.",
    "caveats": "Não confundir com nacionalismo religioso da Nation of Islam nem com a evolução posterior da OAAU. A identidade racial não implica automaticamente política migratória. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "autodeterminacao-emancipatoria",
    "neighbors": [
      {
        "id": "ideology-revolutionary-intercommunalism",
        "difference": "Newton abandona nação como unidade suficiente e exige redistribuição produtiva entre comunidades globais."
      },
      {
        "id": "ideology-feminist-socialism",
        "difference": "Não formula a emancipação como destruição simultânea de capitalismo, racismo e patriarcado."
      }
    ],
    "sources": [
      {
        "title": "The Ballot or the Bullet",
        "url": "https://teachingamericanhistory.org/document/the-ballot-or-the-bullet-2/",
        "note": "Publicação: 1964-04-03. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: passagens Political/Economic/Social Philosophy of Black Nationalism e autodefesa. Leitura efetiva declarada na pesquisa: Excerto editado lido; é versão de Cleveland, não Detroit 12abril."
      },
      {
        "title": "Separating — The Ballot or the Bullet",
        "url": "https://nationalhumanitiescenter.org/pds/maai3/protest/text8/text8read.htm",
        "note": "Publicação: undated. Acesso registrado pela pesquisa: 2026-10-08. Tipo: scholarly. Localizador: Enquadramento histórico do discurso. Leitura efetiva declarada na pesquisa: Introdução consultada; apresenta inconsistência Cleveland/Detroit no comentário, portanto a data usada segue o documento TAH."
      }
    ]
  },
  {
    "researchId": "ideology-revolutionary-intercommunalism",
    "id": "ideology-revolutionary-intercommunalism",
    "existing": false,
    "name": "Intercomunalismo revolucionário (Newton, 1970)",
    "period": "Huey P. Newton, discurso no Boston College, 18 novembro 1970.",
    "rationale": "O império capitalista dissolveu soberanias efetivas; comunidades precisam libertar coletivamente produção e tecnologia. Redistribuição entre comunidades e programas de sobrevivência ligados à organização revolucionária de trabalhadores e excluídos pela automação.",
    "caveats": "É tese de Newton nesse período, não de todos os Panteras Negras; seu diagnóstico de inexistência de nações é uma afirmação teórica contestável, não fato adotado pelo catálogo. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "autodeterminacao-emancipatoria",
    "neighbors": [
      {
        "id": "ideology-black-nationalism",
        "difference": "Rejeita a suficiência de libertação nacional e de uma economia negra isolada."
      },
      {
        "id": "ideology-democratic-confederalism-ocalan-2011",
        "difference": "Parte de análise marxista de império e classe, não de confederação pluralista ecológica de assembleias locais."
      }
    ],
    "sources": [
      {
        "title": "Huey Newton introduces Revolutionary Intercommunalism",
        "url": "https://libcom.org/article/huey-newton-introduces-revolutionary-intercommunalism-boston-college-november-18-1970",
        "note": "Publicação: 1970-11-18. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: passagens sobre automação, império, comunidades e redistribuição. Leitura efetiva declarada na pesquisa: Passagens centrais do discurso lidas em reprodução; perguntas finais não integralmente."
      },
      {
        "title": "Huey Newton Speaks at Boston College, Presents Theory of Intercommunalism",
        "url": "https://www.thecrimson.com/article/1970/11/19/huey-newton-speaks-at-boston-college/",
        "note": "Publicação: 1970-11-19. Acesso registrado pela pesquisa: 2026-10-08. Tipo: contemporary-report. Localizador: Reportagem contemporânea da mudança doutrinária. Leitura efetiva declarada na pesquisa: Relato e data do discurso conferidos."
      }
    ]
  },
  {
    "researchId": "ideology-buen-vivir",
    "id": "ideology-buen-vivir",
    "existing": false,
    "name": "Bem viver plurinacional (Acosta, 2010)",
    "period": "Formulação pós-desenvolvimentista de Alberto Acosta (2010), em diálogo com Montecristi (2008); não todas as cosmologias indígenas.",
    "rationale": "Projeto de vida coletiva que subordina desenvolvimento e economia à convivência plural e à continuidade dos sistemas vivos. Estado plurinacional e intercultural, poder comunitário, direitos da natureza e economia social e solidária; suficiência substitui crescimento como fim obrigatório.",
    "caveats": "Não tratar sumak kawsay, suma qamaña e todas as variantes indígenas como sinônimos perfeitos. O recorte é uma formulação política específica. Direitos da natureza e cautela extrativista não equivalem a recusar toda tecnologia. Governos que invocam bem viver não são prova de realização dessa doutrina. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "ecologica-plurinacional",
    "neighbors": [
      {
        "id": "green-politics",
        "difference": "Acrescenta reconstrução plurinacional do Estado e direitos próprios da natureza; não é somente plataforma ambiental de partidos verdes."
      },
      {
        "id": "ideology-democratic-degrowth",
        "difference": "Não se reduz à redução do metabolismo econômico; articula reconhecimento de povos, cidadanias plurais e outra institucionalidade."
      }
    ],
    "sources": [
      {
        "title": "El Buen Vivir en el camino del post-desarrollo: una lectura desde la constitución de Montecristi",
        "url": "https://collections.fes.de/publikationen/download/pdf/449336",
        "note": "Publicação: 2010-10. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary-normative. Localizador: PDF pp. 5–6, 14, 17–18; passagens sobre plurinacionalidade, natureza e economia solidária. Leitura efetiva declarada na pesquisa: Capa/data e trechos sobre Estado plurinacional, extrativismo, direitos da natureza e economia solidária lidos; ensaio não integral. Acosta escreve como formulador e defensor do programa, não como porta-voz de todos os povos indígenas."
      },
      {
        "title": "Buen Vivir: Today’s tomorrow — Eduardo Gudynas, Development 54(4), 441–447",
        "url": "https://www.gudynas.com/publicaciones/GudynasBuenVivirTomorrowDevelopment11.pdf",
        "note": "Publicação: 2011. Acesso registrado pela pesquisa: 2026-10-08. Tipo: scholarly. Localizador: pp. 442–443, diversidade e comparação constitucional. Leitura efetiva declarada na pesquisa: Trechos do PDF sobre pluralidade e diferença Equador/Bolívia lidos."
      }
    ]
  },
  {
    "researchId": "ideology-gandhian-swaraj",
    "id": "ideology-gandhian-swaraj",
    "existing": false,
    "name": "Swaraj gandhiano (1909–1947)",
    "period": "Hind Swaraj (1909) e formulações de república aldeã de Gandhi em Harijan (1938–1947).",
    "rationale": "Autogoverno envolve domínio ético de si, independência anticolonial e comunidades capazes de satisfazer suas necessidades sem exploração. Repúblicas aldeãs cooperativas com panchayat eleito, não cooperação não violenta e produção local; poder deve crescer de baixo para cima.",
    "caveats": "O ideal de Hind Swaraj não se confunde com o programa parlamentar circunstancial: Gandhi faz essa distinção no prefácio de 1921. Crítica à maquinaria e defesa de autonomia não provam autarquia absoluta. As posições de Gandhi sobre casta e gênero variam historicamente; não apagar tensões com sua linguagem de aldeia ideal. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "autogoverno-nao-violento",
    "neighbors": [
      {
        "id": "ideology-ambedkarite-constitutional-socialism",
        "difference": "Ambedkar exige garantias constitucionais nacionais contra dominação de casta e socialização econômica juridicamente assegurada; não confia o remédio central à aldeia."
      },
      {
        "id": "ideology-integral-humanism",
        "difference": "Upadhyaya combina descentralização com Estado unitário e cultura nacional orgânica; Gandhi faz da não violência constitutiva do governo e da resistência."
      }
    ],
    "sources": [
      {
        "title": "Hind Swaraj or Indian Home Rule",
        "url": "https://www.gutenberg.org/files/40461/40461-h/40461-h.htm",
        "note": "Publicação: 1909. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Prefácios de 1919/1921; caps.XIII–XIV, XVII, XIX. Leitura efetiva declarada na pesquisa: Prefácios, passagens sobre civilização, autogoverno e não violência e sumário lidos; não leitura integral. Texto digital é edição posterior com prefácios; a referência a 1908 no prefácio não deve substituir a data 1909 usualmente atribuída à composição/publicação."
      },
      {
        "title": "The Mind of Mahatma Gandhi, chapter 78: Village Swaraj",
        "url": "https://www.mkgandhi-sarvodaya.org/momgandhi/chap78.htm",
        "note": "Publicação: 1938–1947. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Village Swaraj e Government Of Village; Harijan 26-7-1942, p. 238; Public Opinion, 1947. Leitura efetiva declarada na pesquisa: Seções sobre cooperação, panchayat anual eleito por homens e mulheres, ausência de intocabilidade e sanção não violenta lidas. Compilação de excertos datados; não texto único de 1909."
      }
    ]
  },
  {
    "researchId": "ideology-ambedkarite-constitutional-socialism",
    "id": "ideology-ambedkarite-constitutional-socialism",
    "existing": false,
    "name": "Socialismo constitucional ambedkarista (1947)",
    "period": "States and Minorities (1947), proposta da Scheduled Castes Federation; não a Constituição indiana inteira nem todas as fases de Ambedkar.",
    "rationale": "Liberdade política exige remover hierarquias de casta e impedir que poder econômico esvazie a cidadania igual. Direitos justiciáveis e salvaguardas de representação combinados com propriedade estatal de setores básicos, seguro e agricultura coletiva constitucionalmente protegida.",
    "caveats": "A proposta de 1947 inclui eleitorados separados e voto cumulativo: não substituir isso pelo sistema posterior de assentos reservados. Socialismo constitucional selecionado não representa automaticamente toda a tradição ambedkarista nem a forma final da Constituição de 1950. Imigração não se infere de regras de domicílio interno. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "igualitaria-anticasta",
    "neighbors": [
      {
        "id": "ideology-gandhian-swaraj",
        "difference": "A proteção de grupos subordinados é garantida por direitos nacionais, eleitorados e instituições próprias, não apenas pela autossuficiência moral da aldeia."
      },
      {
        "id": "ideology-egalitarian-liberalism",
        "difference": "Propõe titularidade estatal de indústrias/agricultura e desenho anticastas específico, não uma escolha rawlsiana entre regimes de dispersão de propriedade."
      }
    ],
    "sources": [
      {
        "title": "States and Minorities (B.R. Ambedkar, 1947)",
        "url": "https://www.constitutionofindia.net/historical-constitution/states-and-minorities-dr-b-r-ambedkar-1947/",
        "note": "Publicação: 1947. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Preâmbulo; Art. I; Art. II, § I; § II, cl.4(SM.38); § IV, representação e garantias. Leitura efetiva declarada na pesquisa: Preâmbulo, desenho da união, liberdades, excertos da proteção contra exploração e regras de representação/alteração de salvaguardas lidos; não todo memorial. Transcrição do Centre for Law and Policy Research; introdução editorial separada do memorial."
      }
    ]
  },
  {
    "researchId": "ideology-ujamaa",
    "id": "ideology-national-liberation-socialism",
    "existing": true,
    "name": "Ujamaa (Arusha, 1967)",
    "period": "Julius Nyerere/TANU, Declaração de Arusha de 5 fevereiro 1967.",
    "rationale": "Socialismo de cooperação e autossuficiência que põe trabalhadores e camponeses no centro da produção e da autoridade política. Controle público dos meios estratégicos, desenvolvimento agrícola cooperativo e código de liderança que impede dirigentes de obter renda de ações, diretorias privadas e aluguéis.",
    "caveats": "O texto afirma que propriedade estatal sem democracia não basta para socialismo; a autodescrição não comprova pluralismo efetivo. Não identificar automaticamente a doutrina de 1967 com coerção de reassentamentos posteriores. Autossuficiência não exclui toda ajuda, indústria ou comércio externo; o próprio texto ressalva isso. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "socialista-comunitaria",
    "neighbors": [
      {
        "id": "ideology-nkrumahism",
        "difference": "Prioriza a base rural, o esforço próprio e a ética de liderança; Nkrumah destaca planejamento industrial e governo continental."
      },
      {
        "id": "ideology-ambedkarite-constitutional-socialism",
        "difference": "Não se organiza principalmente como constituição anticastas com garantias de minorias e eleitorados separados."
      }
    ],
    "sources": [
      {
        "title": "The Arusha Declaration and TANU’s Policy on Socialism and Self-Reliance",
        "url": "https://www.marxists.org/subject/africa/nyerere/1967/arusha-declaration.htm",
        "note": "Publicação: 1967-02-05. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Partes I–III e V; seção The Existence of Democracy; Leadership 1–6. Leitura efetiva declarada na pesquisa: Passagens sobre democracia camponesa/operária, agricultura, meios públicos, ajuda externa e código de liderança lidas; não leitura integral linha a linha. Reprodução de tradução inglesa revista do texto discutido/publicado em suaíli."
      }
    ]
  },
  {
    "researchId": "ideology-nkrumahism",
    "id": "ideology-nkrumahism",
    "existing": false,
    "name": "Pan-africanismo socialista (Nkrumah, 1963–1967)",
    "period": "Africa Must Unite (1963) e African Socialism Revisited (1967); consciencismo como enquadramento filosófico, não rótulo para toda política ganesa.",
    "rationale": "Emancipação africana depende da união política continental e da transformação socialista das estruturas econômicas herdadas do colonialismo. Governo continental com planejamento econômico integrado, instrumentos comuns e representação continental, em vez de uma mera cooperação entre Estados ou retorno idealizado ao passado comunal.",
    "caveats": "O próprio Nkrumah rejeita em 1967 socialismos arbitrariamente raciais ou nacionais. A entrada só se justifica pelo programa continental identificável, não pelo nome do líder. Não converter legitimidade anticolonial em prova de garantias liberais; não atribuir ao corpus de 1963–1967 todas as teses de escritos posteriores. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "socialista-panafricana",
    "neighbors": [
      {
        "id": "ideology-national-liberation-socialism",
        "difference": "A união continental e a industrialização planejada são mecanismos constitutivos; não apenas cooperação agrária e ética de autossuficiência."
      },
      {
        "id": "ideology-marxism-leninism-stalin-1926",
        "difference": "O recorte acrescenta unificação político-econômica continental antineocolonial; não é apenas versão nacional de um partido soviético."
      }
    ],
    "sources": [
      {
        "title": "Africa Must Unite",
        "url": "https://www.marxists.org/subject/africa/nkrumah/1963/africa-must-unite.pdf",
        "note": "Publicação: 1963. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Cap.Continental Government for Africa; pp. 218–221 impressas/PDF 231–234; planejamento continental, PDF 179–184. Leitura efetiva declarada na pesquisa: Passagens de planejamento, moeda/mercado comum, governo e parlamento continental lidas; livro não integral."
      },
      {
        "title": "African Socialism Revisited",
        "url": "https://www.marxists.org/subject/africa/nkrumah/1967/african-socialism-revisited.htm",
        "note": "Publicação: 1967. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Discussão de sociedade tradicional, Nyerere, socialização e socialismo científico. Leitura efetiva declarada na pesquisa: Passagens centrais e finais lidas, inclusive crítica a socialismos tribais/nacionais/raciais e a retorno literal ao passado."
      }
    ]
  },
  {
    "researchId": "ideology-three-peoples-principles",
    "id": "ideology-three-peoples-principles",
    "existing": false,
    "name": "Três Princípios do Povo (Sun, 1918–1924)",
    "period": "Sun Yat-sen, reconstrução nacional e conferências sobre democracia (1918–1924).",
    "rationale": "Nacionalismo, poder político popular e sustento material formam um programa integrado de reconstrução republicana. Transição de governo militar a tutela política e constituição de cinco poderes; separa capacidades administrativas de direitos populares de eleição, destituição, iniciativa e referendo.",
    "caveats": "As etapas militar/tutelar e constitucional precisam ser distinguidas; não projetar democracia final sobre toda a transição. Não usar qualquer governo posterior do Kuomintang como evidência doutrinária de Sun. Reconhecimento de minorias no texto citado não fixa uma política migratória completa. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "republicana-desenvolvimentista",
    "neighbors": [
      {
        "id": "ideology-jacobin-republicanism",
        "difference": "Acrescenta tutela transitória e ramos de exame/censura à soberania popular; não é assembleísmo revolucionário direto."
      },
      {
        "id": "ideology-kemalism",
        "difference": "O desenho de cinco poderes e os estágios formais de tutela são próprios; as seis flechas kemalistas organizam laicização e estatismo nacional."
      }
    ],
    "sources": [
      {
        "title": "Fundamentals of National Reconstruction",
        "url": "https://chinacopyrightandmedia.wordpress.com/1924/04/12/fundamentals-of-national-reconstruction/",
        "note": "Publicação: 1924-04-12. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: I–VI; XX–XXI e disposições sobre cinco Yuan. Leitura efetiva declarada na pesquisa: Abertura, estágios de reconstrução e nomeação dos Yuan lidos na tradução de China Copyright and Media; não todos os dispositivos. A nota da página menciona aprovação em 21 janeiro; o texto assinado e reproduzido por Linebarger é datado 12 abril 1924. Manter a distinção entre documentos/congressos."
      },
      {
        "title": "The Principle of Democracy (1924), by Sun Yat-sen — Asia for Educators",
        "url": "https://afe.easia.columbia.edu/ps/cup/sun_yatsen_democracy.pdf",
        "note": "Publicação: 1924. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Excerto, pp. 3–5, controles populares e cinco poderes. Leitura efetiva declarada na pesquisa: Passagens extraídas sobre quatro direitos populares e constituição de cinco poderes lidas; não conferências completas. Seleção didática da Columbia com introdução editorial."
      },
      {
        "title": "The Political Doctrines of Sun Yat-sen: An Exposition of the San Min Chu I — Paul M. A. Linebarger",
        "url": "https://www.gutenberg.org/cache/epub/39356/pg39356-images.html",
        "note": "Publicação: 1937. Acesso registrado pela pesquisa: 2026-10-08. Tipo: scholarly. Localizador: Cap.VI, pp. 209–214, The Three Stages of Revolution; transcrição do manifesto assinado 12 abril 1924. Leitura efetiva declarada na pesquisa: Trecho do capítulo e data editorial lidos; livro não integral. Reprodução da reimpressão de 1973; autor declara proximidade familiar com o nacionalismo chinês. Sua interpretação não deve ser tratada como neutra ou definitiva."
      }
    ]
  },
  {
    "researchId": "ideology-kemalism",
    "id": "ideology-kemalism",
    "existing": false,
    "name": "Kemalismo das seis flechas (CHP, 1935)",
    "period": "Programa do CHP de 1935 e codificação das seis flechas nos anos 1930; não todo uso posterior de Atatürkçülük.",
    "rationale": "Construção de uma república nacional secular, socialmente reformadora e economicamente dirigida pelo Estado, sob a ideia de unidade cívica do povo. Republicanismo, nacionalismo, populismo solidarista, laicidade, estatismo e reformismo como pacote constitucional; modernização central e economia mista coordenada.",
    "caveats": "Não equiparar republicanismo a pluralismo partidário efetivo; distinguir programa normativo e governo de partido único. Populismo aqui significa solidariedade nacional, não o uso genérico atual da palavra. Laicidade não se reduz à irreligiosidade pessoal. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "republicana-modernizadora",
    "neighbors": [
      {
        "id": "ideology-three-peoples-principles",
        "difference": "Não adota cinco poderes ou tutela escalonada de Sun; laicidade institucional e seis princípios de modernização são centrais."
      },
      {
        "id": "ideology-left-nasserism",
        "difference": "Não funda a representação numa aliança árabe-socialista com reserva operário-camponesa, nem torna a unidade pan-árabe objetivo constitutivo."
      }
    ],
    "sources": [
      {
        "title": "CHP 1935 Parti Programı — pp. 5–7",
        "url": "https://tr.wikisource.org/wiki/Sayfa:CHP_1935_Parti_Program%C4%B1.pdf/7",
        "note": "Publicação: 1935. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Página impressa 5/PDF 7; direitos civis e igualdade de homens/mulheres; páginas seguintes 6–7 consultadas. Leitura efetiva declarada na pesquisa: Transcrição turca dos trechos de direitos e cidadania lida; não fac-símile completo. As páginas da transcrição estão marcadas como problemáticas; conferir com scan antes de qualquer citação literal/certificação."
      },
      {
        "title": "On Beşinci Yıl Kitabı: Cümhuriyet Halk Partisi",
        "url": "https://tr.wikisource.org/wiki/On_Be%C5%9Finci_Y%C4%B1l_Kitab%C4%B1/C%C3%BCmhuriyet_Halk_Partisi",
        "note": "Publicação: 1938. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Passagens sobre terceiro e quarto congressos, seis princípios e programa de 1935. Leitura efetiva declarada na pesquisa: Trechos da retrospectiva partidária contemporânea sobre estatismo e seis princípios lidos. Fonte comemorativa partidária; é evidência de autodefinição, não avaliação independente dos resultados."
      },
      {
        "title": "Turkey: Atatürk and the Turkish Nation — A Country Study",
        "url": "https://countrystudies.us/turkey/13.htm",
        "note": "Publicação: 1995. Acesso registrado pela pesquisa: 2026-10-08. Tipo: institutional-scholarly. Localizador: Parágrafos sobre Six Arrows, estatismo, secularização e partido de vanguarda. Leitura efetiva declarada na pesquisa: Síntese do programa, economia mista e diferença entre institucionalidade declarada e governo efetivo lida. Reprodução do estudo da Federal Research Division/Library of Congress; data da página não explicitada."
      }
    ]
  },
  {
    "researchId": "ideology-baathism",
    "id": "ideology-left-baathism",
    "existing": true,
    "name": "Socialismo pan-árabe baathista (1947)",
    "period": "Constituição fundadora do Baath (abril 1947), antes das cisões síria/iraquiana.",
    "rationale": "Renascimento da nação árabe por unidade política, liberdade nacional e socialismo, apresentados como aspectos interdependentes. Partido transnacional voltado a um Estado árabe unificado e descentralizado, regime parlamentar constitucional declarado e gestão pública de recursos estratégicos com plano econômico geral.",
    "caveats": "O texto fundador promete liberdades e escolha popular: não substituir sua leitura pela repressão de governos baathistas posteriores. Diferenças entre ramos e épocas não são entradas adicionais. A seleção da UFF omite alguns artigos econômicos: não equivale à leitura integral da constituição. A fronteira com nasserismo é estreita: ambos compartilham unidade árabe e economia planejada. A retenção separada depende dos mecanismos normativos de representação/autoridade dos textos escolhidos; não apenas de países, partidos ou líderes diferentes. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "socialista-pan-arabe",
    "neighbors": [
      {
        "id": "ideology-left-nasserism",
        "difference": "O Baath de 1947 propõe executivo responsável perante legislativo eleito diretamente e judiciário independente (arts. 14–19), sem a quota operário-camponesa da Carta nasserista. Nasser organiza a representação por uma aliança de forças sociais delimitadas e reserva de 50%."
      },
      {
        "id": "ideology-nabhani-caliphate",
        "difference": "A unidade política fundamenta-se na nação árabe e na soberania popular declarada, não em califado único e soberania jurídica da sharia."
      }
    ],
    "sources": [
      {
        "title": "The Constitution of the Baath Arab Socialist Party — Fundamental Principles",
        "url": "https://web.archive.org/web/20101208154249/http://baath-party.org/baathsite%202003-2008/eng/constitution1.htm",
        "note": "Publicação: 1947. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Três princípios fundamentais. Leitura efetiva declarada na pesquisa: Texto dos três princípios lido na captura do antigo site partidário: unidade, liberdades e missão internacional. Tradução partidária arquivada em 2010 de constituição apresentada como aprovada em 1947."
      },
      {
        "title": "Constituição do Partido do Renascimento Árabe (Ba’ath), 1947",
        "url": "https://acervohc.uff.br/baath/",
        "note": "Publicação: 1947. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Princípios fundamentais; arts. 1, 3–6, 12, 14–17, 22–23, 26–30, 32, 36–38, 42. Leitura efetiva declarada na pesquisa: Seleção traduzida lida: partido, soberania, representação, recursos públicos, terra, participação operária, comércio, planejamento e família; artigos omitidos não foram lidos. Seleção/adaptação por Marcio Lauria Monteiro na UFF; não constituição integral."
      },
      {
        "title": "The Constitution of the Baath Arab Socialist Party — Internal Policy",
        "url": "https://web.archive.org/web/20101208153917/http://baath-party.org/baathsite%202003-2008/eng/constitution3.htm",
        "note": "Publicação: 1947. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Arts.14–21. Leitura efetiva declarada na pesquisa: Oito artigos lidos na tradução partidária arquivada: parlamento, descentralização, cidadania, judiciário e serviço militar."
      },
      {
        "title": "Resurrezione o rivoluzione? Le reciproche influenze linguistiche e terminologiche tra nasserismo e baathismo alla vigilia della Repubblica Araba Unita (1952–1958) — Mauro Primavera",
        "url": "https://riviste.unimi.it/index.php/NAD/article/view/22171",
        "note": "Publicação: 2023-12-26. Acesso registrado pela pesquisa: 2026-10-08. Tipo: scholarly. Localizador: Resumo e referências. Leitura efetiva declarada na pesquisa: Resumo e metadados lidos; PDF não recuperado. Útil para reconhecer influências mútuas e fronteira contestável; não usado como prova de uma diferença institucional que o resumo não demonstra."
      }
    ]
  },
  {
    "researchId": "ideology-nasserism",
    "id": "ideology-left-nasserism",
    "existing": true,
    "name": "Socialismo árabe nasserista (Carta 1962)",
    "period": "Carta Nacional da República Árabe Unida, apresentada 21 maio e aprovada 30 junho 1962.",
    "rationale": "Libertação nacional e justiça social exigem desenvolvimento planejado e uma aliança das forças trabalhadoras que impeça o domínio das classes exploradoras. União Socialista Árabe, reserva de 50% da representação para trabalhadores/camponeses, setor público dirigente e setor privado sob plano geral, com propriedade agrária limitada.",
    "caveats": "A definição de democracia do programa é uma aliança social dirigida, não prova de pluralismo competitivo. Há forte proximidade com baathismo; a entrada separada depende do desenho da Carta de 1962. Evitar duplicar sob um terceiro rótulo genérico “socialismo árabe”. A evidência textual acessada consiste em resumo contemporâneo e citações identificadas, não leitura integral da edição oficial árabe. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "nacional-desenvolvimentista",
    "neighbors": [
      {
        "id": "ideology-left-baathism",
        "difference": "A Carta delimita forças sociais participantes, organiza-as na União Socialista Árabe e reserva 50% da representação a trabalhadores/camponeses. O Baath de 1947 fundamenta a autoridade em parlamento diretamente eleito, responsabilidade executiva e judiciário independente, sem essa quota."
      },
      {
        "id": "ideology-justicialism",
        "difference": "O programa nasserista fixa organização árabe-socialista e direção pública da transformação; justicialismo estrutura comunidade organizada e capital subordinado ao bem-estar com outra tradição institucional."
      }
    ],
    "sources": [
      {
        "title": "The Charter for National Action of the UAR — A Résumé of the Complete Document, Alan W. Horton",
        "url": "https://www.icwa.org/wp-content/uploads/2015/09/AWH-5.pdf",
        "note": "Publicação: 1962-07. Acesso registrado pela pesquisa: 2026-10-08. Tipo: contemporary-translation-summary. Localizador: Cap. V, PDF pp.10–11: aliança das forças trabalhadoras, reserva de 50%, conselhos populares e União Socialista Árabe; cap. VI, PDF pp.12–13: economia. Leitura efetiva declarada na pesquisa: Seções traduzidas/resumidas sobre representação e organização econômica lidas; não original árabe nem transcrição integral. Não rotular este résumé como texto integral da Carta."
      },
      {
        "title": "The National Charter — excerpts in A. Sadi, “Arab Socialism” and the Nasserite National Movement",
        "url": "https://www.marxists.org/history/etol/newspape/isr/vol24/no02/sadi.html",
        "note": "Publicação: 1963. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary-excerpts. Localizador: Seções Nasser’s National Charter e Some Obvious Contradictions. Leitura efetiva declarada na pesquisa: Citações diretas identificadas da Carta de 1962 sobre fim da exploração, setor privado e terra lidas; separadas da crítica marxista de Sadi. A frase “We do not believe in the necessity of class struggle” é atribuída a um expositor em The Scribe, não diretamente à Carta; não foi usada como fala de Nasser."
      },
      {
        "title": "The Charter — catalogue record",
        "url": "https://lawcat.berkeley.edu/record/525285",
        "note": "Publicação: 1962. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary-bibliographic. Localizador: Registro bibliográfico. Leitura efetiva declarada na pesquisa: Metadados de apresentação/aprovação recuperados pela busca; livro não lido por esta via."
      },
      {
        "title": "Resurrezione o rivoluzione? Le reciproche influenze linguistiche e terminologiche tra nasserismo e baathismo alla vigilia della Repubblica Araba Unita (1952–1958) — Mauro Primavera",
        "url": "https://riviste.unimi.it/index.php/NAD/article/view/22171",
        "note": "Publicação: 2023-12-26. Acesso registrado pela pesquisa: 2026-10-08. Tipo: scholarly. Localizador: Resumo e referências. Leitura efetiva declarada na pesquisa: Resumo e metadados lidos; PDF não recuperado. Útil para reconhecer influências mútuas e fronteira contestável; não usado como prova de uma diferença institucional que o resumo não demonstra."
      }
    ]
  },
  {
    "researchId": "ideology-justicialism",
    "id": "ideology-justicialism",
    "existing": false,
    "name": "Justicialismo da comunidade organizada (1949–1952)",
    "period": "Juan D. Perón, La comunidad organizada (1949), Vinte Verdades (1950) e explicitação organizativa de 1952; não toda a história peronista.",
    "rationale": "Justiça social, soberania política e independência econômica devem harmonizar realização pessoal e bem comum numa comunidade organizada. Capital subordinado ao bem-estar, planejamento governamental e organização de setores sociais para cooperação nacional, rejeitando a luta de classes como princípio do projeto.",
    "caveats": "O peronismo posterior reúne correntes muito divergentes; este recorte é doutrinário e fundador. O nome “democracia” nas Vinte Verdades não estabelece sozinho competição política. Não identificar automaticamente cooperação de classes com fascismo nem imunizá-la contra críticas autoritárias. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "nacional-popular-organica",
    "neighbors": [
      {
        "id": "ideology-christian-democracy",
        "difference": "Compartilha linguagem cristã e social, mas organiza um movimento nacional e setores da comunidade sob condução e planejamento, não a matriz pluralista/supranacional europeia selecionada."
      },
      {
        "id": "ideology-bolivarian-socialism",
        "difference": "Não propõe substituir a coordenação social por uma rede de propriedade comunal e poder popular socialista como o programa bolivariano."
      }
    ],
    "sources": [
      {
        "title": "Las 20 verdades peronistas",
        "url": "https://www.pjformosa.org.ar/doctrina",
        "note": "Publicação: 1950-10-17. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Verdades 1–20, especialmente 4–5, 11, 14–18. Leitura efetiva declarada na pesquisa: Vinte enunciados e data lidos na reprodução do Partido Justicialista de Formosa."
      },
      {
        "title": "La comunidad organizada — Biblioteca del Congreso de la Nación",
        "url": "https://bcn.gob.ar/uploads/La-Comunidad-Organizada.pdf",
        "note": "Publicação: 1949; edição 2014. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary-and-scholarly. Localizador: Texto de Perón pp. 148–150; prólogo de Poratti pp. 81–83, citando organização governamental de 1952. Leitura efetiva declarada na pesquisa: Trechos do texto acadêmico e da discussão editorial sobre centralização do planejamento, execução descentralizada e organização de setores lidos; volume não integral. Distinguir texto de 1949, artigo de 1952 citado e interpretações dos prefácios de 2014."
      }
    ]
  },
  {
    "researchId": "ideology-bolivarian-socialism",
    "id": "ideology-bolivarian-socialism",
    "existing": false,
    "name": "Socialismo bolivariano comunal (programa 2012)",
    "period": "Proposta eleitoral de Hugo Chávez para 2013–2019, apresentada em 2012, como formulação final do ciclo 2007–2013; não políticas posteriores de Maduro.",
    "rationale": "Transição ao socialismo combina soberania nacional, planejamento público e poder popular exercido por conselhos e comunas. Transferência de competências e recursos a comunas, conselhos de trabalhadores, empresas de propriedade social e bancos comunais, articulados por planejamento central nacional.",
    "caveats": "Autogoverno comunal e planejamento central coexistem no programa; não eliminar essa tensão atribuindo descentralização total. As metas numéricas são metas, não comprovação de resultados. A retórica participativa não certifica direitos de oposição ou independência judicial. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "socialista-participativa-nacional",
    "neighbors": [
      {
        "id": "ideology-communalism",
        "difference": "As comunas são promovidas e coordenadas por um Estado nacional e seu plano central; não substituem o Estado por confederação municipal antiautoritária."
      },
      {
        "id": "ideology-justicialism",
        "difference": "Vai além da harmonização entre trabalho e capital: propõe expansão explícita de propriedade social e instituições de poder popular socialista."
      }
    ],
    "sources": [
      {
        "title": "Propuesta del candidato de la Patria, Comandante Hugo Chávez, para la gestión bolivariana socialista 2013–2019",
        "url": "https://siteal.iiep.unesco.org/sites/default/files/sit_accion_files/propuesta_del_candidato_de_la_patria_comandante_hugo_chavez_para_la_gestion_bolivariana_socialista_2013-2019.pdf",
        "note": "Publicação: 2012. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Objetivos 2.2.2.33–36; 2.3.1–2; 2.3.6; 2.5.3; PDF pp. 11–13. Leitura efetiva declarada na pesquisa: Trechos sobre conselhos, comunas, empresas/bancos comunais, planejamento central e sistema federal lidos; não plano completo. Proposta de Chávez arquivada pela UNESCO; não confundir com a versão legal aprovada em dezembro 2013 após sua morte."
      }
    ]
  },
  {
    "researchId": "ideology-integral-humanism",
    "id": "ideology-integral-humanism",
    "existing": false,
    "name": "Humanismo integral de Upadhyaya",
    "period": "Quatro conferências de Deendayal Upadhyaya em Bombaim, 22–25 abril 1965.",
    "rationale": "Política deve atender conjuntamente corpo, mente, intelecto e espírito, vinculando a pessoa à sociedade e à cultura nacional sob o Dharma. Estatalidade unitária com poderes locais fundamentais, swadeshi e descentralização produtiva; propriedade pública ou privada escolhida pragmaticamente, subordinada ao desenvolvimento humano integral.",
    "caveats": "O autor distingue Dharma de religião denominacional e rejeita caracterizar Dharma Rajya como teocracia; não apagar seu fundamento normativo religioso-cultural. Não deduzir desta doutrina todas as políticas do BJP atual. Estado unitário com descentralização exige tratamento cuidadoso de EST. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "organica-dharmica",
    "neighbors": [
      {
        "id": "ideology-gandhian-swaraj",
        "difference": "A unidade orgânica nacional e o Dharma Rajya, junto da escolha pragmática de propriedade, substituem a centralidade gandhiana da não violência e da república aldeã."
      },
      {
        "id": "ideology-catholic-integralism",
        "difference": "Não atribui supremacia a uma Igreja nem organiza duas jurisdições; Dharma é apresentado como norma pública superior, distinguida pelo autor de uma denominação religiosa."
      }
    ],
    "sources": [
      {
        "title": "Integral Humanism — lectures 1–4",
        "url": "https://www.dri.org.in/pdf-view/ZXlKcGRpSTZJa2t2YmxBNFlYcFBPRTVtTlVkQ2Ftd3pPRGhxWlZFOVBTSXNJblpoYkhWbElqb2lTbXhzWVhkTFVtSkhWbVpvVFdwaE0yaDJTbkF5UVQwOUlpd2liV0ZqSWpvaU9EUmxZVEJrWmpjNFltWXdZVGszTmpZME9EWmxaR0kzTVdRMU56SmxabU5oT1RRM01HVXlZekl3TlRCbU5qWXhZamcxTnpFNFpqQTRZak00Wmpaak5pSXNJblJoWnlJNklpSjk",
        "note": "Publicação: 1965-04-22/1965-04-25. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Conferência 3, Unitary Constitution/Decentralisation/Dharma Rajya, PDF 37–42; conferência 4, PDF 50, 55. Leitura efetiva declarada na pesquisa: Passagens sobre Estado unitário, panchayats, liberdade religiosa, Dharma, máquinas e formas de propriedade lidas; não todas as conferências. PDF obtido pelo link de download do Deendayal Research Institute; página deentrada:https://www.dri.org.in/integral-humanism/."
      }
    ]
  },
  {
    "researchId": "ideology-maududi-theodemocracy",
    "id": "ideology-maududi-theodemocracy",
    "existing": false,
    "name": "Teodemocracia islâmica (Maududi, 1939)",
    "period": "Abul Aʿla Maududi, Political Theory of Islam, discurso de outubro 1939; não todo islamismo ou toda doutrina de Jamaat-e-Islami.",
    "rationale": "Soberania pertence a Deus; a comunidade muçulmana exerce autoridade política limitada pelas normas reveladas. Executivo constituído e removível pela vontade dos muçulmanos, deliberação em matérias não fixadas pela revelação e interpretação qualificada sem monopólio de uma classe sacerdotal.",
    "caveats": "“Democracia” é um termo do autor com limites confessionais e legislativos; não equivale a cidadania política igual universal. Não extrapolar desta conferência um regime econômico detalhado ou política migratória. A ausência de sacerdócio governante não implica ausência de coerção religiosa. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "islamica-comunitaria",
    "neighbors": [
      {
        "id": "ideology-guardianship-jurist",
        "difference": "Maududi nega governo exclusivo de uma classe religiosa; Khomeini atribui competência governante aos juristas justos durante a ocultação."
      },
      {
        "id": "ideology-nabhani-caliphate",
        "difference": "O mecanismo destacado é vice-regência comunitária e executivo responsável; an-Nabhani fixa um califado transnacional único com competência exclusiva do califa para adoção legal."
      }
    ],
    "sources": [
      {
        "title": "Political Theory of Islam",
        "url": "https://www.scribd.com/document/1057569070/Mawdudi-1939-Political-Theory-of-Islam",
        "note": "Publicação: 1939-10. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: pp. 20–22, The Nature of the Islamic State. Leitura efetiva declarada na pesquisa: OCR público do discurso lido nas passagens que definem teodemocracia, remoção do executivo e limites legais; não todo livreto. Reprodução por terceiro com erros de OCR; verificar edição impressa antes de citações literais."
      },
      {
        "title": "Conservative Anti-Colonialism: Maududi, Marx and Social Equality — Humeira Iqtidar",
        "url": "https://www.cambridge.org/core/journals/journal-of-the-royal-asiatic-society/article/conservative-anticolonialism-maududi-marx-and-social-equality/DD4AF4AFA45605C30FF422F0B622ED6E",
        "note": "Publicação: 2021. Acesso registrado pela pesquisa: 2026-10-08. Tipo: scholarly. Localizador: Discussão inicial dehakimiyyat, soberania popular e igualdade social. Leitura efetiva declarada na pesquisa: Passagens sobre inovação conceitual, comunidade e oposição à igualdade social/de gênero lidas; artigo não integral."
      }
    ]
  },
  {
    "researchId": "ideology-guardianship-jurist",
    "id": "ideology-guardianship-jurist",
    "existing": false,
    "name": "Governo do jurista (Khomeini, 1970)",
    "period": "Ruhollah Khomeini, conferências de Najaf de 21 janeiro–8 fevereiro 1970, Islamic Government.",
    "rationale": "Na ausência do imã, aplicação integral da lei islâmica requer governo exercido por juristas justos e conhecedores da lei. Tutela governante do faqih; a legislação divina limita o poder e um órgão de planejamento aplica as normas às atividades administrativas.",
    "caveats": "Recorte de 1970: não misturar automaticamente com constituições de 1979/1989 ou expansão posterior de tutela absoluta. Trata-se de doutrina particular contestada também entre xiitas; não representa o Islã ou todo pensamento político xiita. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "islamica-juristica",
    "neighbors": [
      {
        "id": "ideology-maududi-theodemocracy",
        "difference": "A qualidade jurídico-religiosa do governante é constitutiva da autoridade; a comunidade de muçulmanos de Maududi não constitui uma ordem governante de juristas."
      },
      {
        "id": "ideology-nabhani-caliphate",
        "difference": "Fundamentação xiita na ocultação e tutela dos juristas, distinta do califa único escolhido porbayʿa e da rejeição de um clero separado em an-Nabhani."
      }
    ],
    "sources": [
      {
        "title": "Islamic Government: Governance of the Jurist",
        "url": "https://al-islam.org/printpdf/book/export/html/12118",
        "note": "Publicação: 1970. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Seções The Form of Islamic Government e Qualifications of the Ruler; PDF 41–45, 61. Leitura efetiva declarada na pesquisa: Passagens sobre lei divina, planejamento, requisitos e autoridade dos juristas lidas; não todas as provas jurídicas do livro. Tradução inglesa de Hamid Algar publicada pelo Institute for Compilation and Publication of Imam Khomeini’s Works."
      },
      {
        "title": "Law’s Comprehensiveness and Sovereign Leadership: On the Juridico-political Thinking of Ayatollah Khomeini and Carl Schmitt",
        "url": "https://www.tandfonline.com/doi/abs/10.1080/1462317X.2021.2017536",
        "note": "Publicação: 2021. Acesso registrado pela pesquisa: 2026-10-08. Tipo: scholarly. Localizador: Discussão das formulações de 1970 e mudança na década seguinte. Leitura efetiva declarada na pesquisa: Trecho indexado sobre diferença entre formulação de 1970 e linguagem posterior de vontade popular lido; artigo completo não acessado."
      }
    ]
  },
  {
    "researchId": "ideology-nabhani-caliphate",
    "id": "ideology-nabhani-caliphate",
    "existing": false,
    "name": "Califado unitário (an-Nabhani, edição 2002)",
    "period": "The System of Islam, corpus de an-Nabhani; tradução inglesa de 2002 consultada, incluindo A Draft Constitution.",
    "rationale": "Ordem política islâmica universal requer um califa único, escolhido pela comunidade, que governe segundo a sharia em um Estado unitário. Soberania da sharia e autoridade da umma são separadas: bayʿa, conselho e magistratura fiscalizam um califa com adoção legal exclusiva; propriedades privada, pública e estatal têm regimes jurídicos distintos.",
    "caveats": "Eleição do califa e consulta coexistem com restrições confessionais e de gênero e com soberania legal não popular. É um programa específico do Hizb ut-Tahrir, não toda proposta islâmica de califado. Políticas externas e comerciais pedem leitura dos artigos próprios antes de ampliar cobertura. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "islamica-califal",
    "neighbors": [
      {
        "id": "ideology-maududi-theodemocracy",
        "difference": "Exige expressamente um califa único e estrutura centralizada transnacional, com partidos limitados à base islâmica; não apenas executivo comunitário responsável."
      },
      {
        "id": "ideology-guardianship-jurist",
        "difference": "Rejeita classe clerical e não depende da doutrina xiita de ocultação; o governante não recebe legitimidade pela tutela própria dofaqih."
      }
    ],
    "sources": [
      {
        "title": "The System of Islam (Nidham ul Islam) — Taqiuddin an-Nabahani",
        "url": "https://www.cia.gov/library/abbottabad-compound/39/3953224645A52EE1867998C77B303BBB_The_System_of_Islam.pdf",
        "note": "Publicação: 2002. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: A Draft Constitution, arts. 1–3, 7–23, 29–31, 106–107, 119–128, 133–138; PDF 113–121, 140–148. Leitura efetiva declarada na pesquisa: Folha editorial e trechos constitucionais sobre religião, cidadania, unidade, eleição, califa, consulta e três formas de propriedade lidos; livro não integral. Edição de Al-Khilafah Publications arquivada como documento; hospedagem pela CIA não é autoria nem endosso. Não atribuir automaticamente a exata redação de 2002 à primeira edição histórica."
      }
    ]
  },
  {
    "researchId": "ideology-dhammic-socialism",
    "id": "ideology-dhammic-socialism",
    "existing": false,
    "name": "Socialismo dármico (Buddhadasa, coletânea 1986)",
    "period": "Ensaios/conferências de Buddhadasa das décadas 1960–1970, reunidos em Dhammic Socialism (1986; 2ª edição 1993).",
    "rationale": "Ordem social justa deve conter egoísmo e acumulação excessiva, assegurando suficiência e partilha por uma ética budista de interdependência. Disciplina moral de produtores e dirigentes, destinação social de excedentes e governo comprometido com Dhamma; admite meios diretivos fortes e governante virtuoso, sem exigir coletivização marxista.",
    "caveats": "Socialismo aqui é principalmente uma ordem ética; não inferir propriedade estatal ou plano central apenas do nome. Buddhadasa distingue direção rápida de tirania, mas a insuficiência de garantias institucionais é uma crítica substantiva, não resolvida pelo adjetivo “dármico”. A doutrina aceita tecnologia útil com restrições ambientais/morais. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "budista-comunitaria",
    "neighbors": [
      {
        "id": "ideology-national-liberation-socialism",
        "difference": "A autoridade moral budista e a transformação da cobiça estruturam a doutrina; Ujamaa prescreve controle público e código político de dirigentes em projeto de desenvolvimento."
      },
      {
        "id": "ideology-integral-humanism",
        "difference": "A base é ausência de apego e interdependência budista com partilha de excedentes; não a pessoa integral e cultura nacional orgânica de Upadhyaya."
      }
    ],
    "sources": [
      {
        "title": "Dhammic Socialism — Buddhadasa Bhikkhu, translated/edited by Donald K.Swearer",
        "url": "https://www.scribd.com/document/550056575/Buddhadasa-Bhikkhu-Dhammic-Socialism-Thai-Inter-Religious-Commission-for-Development-1986",
        "note": "Publicação: 1986-05-27. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary-and-scholarly. Localizador: A Dictatorial Dhammic Socialism, pp. 77–100; introdução pp. 28–35. Leitura efetiva declarada na pesquisa: Trechos OCR do ensaio traduzido sobre métodos diretivos e rejeição de tirania, e da introdução sobre suficiência/partilha lidos; resumos AI da página não foram usados. OCR público por terceiro. A edição autorizada de 1993 foi localizada emhttps://www.suanmokkh.org/books/83, mas seu PDF escaneado não forneceu texto extraível nesta consulta."
      },
      {
        "title": "Buddhadasa Bhikkhu and the Theory of Dhammic Socialism — Tavivat Puntarigvivat",
        "url": "https://so06.tci-thaijo.org/index.php/cjbs/article/download/244855/166016/852593",
        "note": "Publicação: 2003. Acesso registrado pela pesquisa: 2026-10-08. Tipo: scholarly. Localizador: The Chulalongkorn Journal of Buddhist Studies 2(2), pp. 61–96; pp. 78–92 especialmente. Leitura efetiva declarada na pesquisa: Trechos sobre pacifismo, tecnologia, suficiência, governante moral e crítica da insuficiência institucional lidos; não artigo completo."
      }
    ]
  },
  {
    "researchId": "ideology-italian-fascism",
    "id": "ideology-fascism",
    "existing": true,
    "name": "Fascismo italiano (doutrina 1932)",
    "period": "Mussolini/Gentile, formulação de 1932; não guarda-chuva para todos os fascismos.",
    "rationale": "Estado totalizante e nação orgânica subordinam indivíduos e classes a uma ordem autoritária mobilizadora. Supressão do pluralismo, organização corporativa e legitimação de disciplina, expansão e guerra.",
    "caveats": "Doutrina normativa não é avaliação de eficiência nem retrato completo do regime. Não atenuar a violência antidemocrática; racialização posterior italiana não desaparece por delimitar 1932. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "autoritario-totalitaria",
    "neighbors": [
      {
        "id": "ideology-national-socialism",
        "difference": "Nazismo faz da cidadania racial antissemita e da exclusão biológica um princípio constitutivo explícito."
      },
      {
        "id": "ideology-national-conservatism",
        "difference": "O manifesto 2022 mantém limites legais e condena racialismo; não postula a mesma doutrina totalitária."
      }
    ],
    "sources": [
      {
        "title": "What is Fascism, 1932",
        "url": "https://sourcebooks.web.fordham.edu/mod/mussolini-fascism.asp",
        "note": "Publicação: 1932. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: excertos sobre Estado, democracia, paz e império. Leitura efetiva declarada na pesquisa: Excertos integrais da seleção Fordham lidos; não ensaio completo. Texto assinado por Mussolini com contribuição de Gentile; seleção traduzida e contextualizada por Fordham."
      },
      {
        "title": "The Doctrine of Fascism",
        "url": "https://sjsu.edu/faculty/wooda/2B-HUM/Readings/The-Doctrine-of-Fascism.pdf",
        "note": "Publicação: 1932. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: passagens sobre religião e concepção totalizante. Leitura efetiva declarada na pesquisa: Trecho indexado consultado; PDF completo não lido."
      }
    ]
  },
  {
    "researchId": "ideology-national-socialism",
    "id": "ideology-national-socialism",
    "existing": false,
    "name": "Nacional-socialismo (programa 1920)",
    "period": "Programa NSDAP de 24 fevereiro 1920, lido com enquadramento histórico do USHMM.",
    "rationale": "Ultranacionalismo antissemita que organiza cidadania e direitos por ancestralidade racial e exige autoridade central expansiva. Exclusão dos judeus da cidadania, expulsão de não cidadãos, censura racial e mobilização nacional subordinam direitos à comunidade racial.",
    "caveats": "Promessas de nacionalização de 1920 não descrevem a economia nazista real. O programa não contém sozinho toda a doutrina e prática genocida posterior; isso deve ser informado, não apagado. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "autoritario-totalitaria",
    "neighbors": [
      {
        "id": "ideology-fascism",
        "difference": "A ordem racial e antissemita determina explicitamente quem pode integrar a comunidade política."
      },
      {
        "id": "ideology-national-conservatism",
        "difference": "O programa nega igualdade cívica por raça, oposta à condenação formal de discriminação no manifesto 2022."
      }
    ],
    "sources": [
      {
        "title": "The program of the NSDAP — Document 1708-PS",
        "url": "https://avalon.law.yale.edu/imt/1708-ps.asp",
        "note": "Publicação: 1920-02-24. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: 25 pontos; sobretudo 3–8, 13–17, 23–25. Leitura efetiva declarada na pesquisa: Programa completo lido; enquadramento do documento é tradução de publicação partidária usada em Nuremberg."
      },
      {
        "title": "Nazi Party Platform",
        "url": "https://encyclopedia.ushmm.org/content/en/article/nazi-party-platform",
        "note": "Publicação: undated. Acesso registrado pela pesquisa: 2026-10-08. Tipo: scholarly-institutional. Localizador: Creating and Announcing; Unchangeable. Leitura efetiva declarada na pesquisa: Contextualização museológica sobre origem e alcance do programa lida."
      }
    ]
  },
  {
    "researchId": "ideology-narodnik-agrarian-socialism",
    "id": "ideology-narodnik-agrarian-socialism",
    "existing": false,
    "name": "Socialismo agrário narodnik (programa 1906)",
    "period": "Programa do Partido Socialista-Revolucionário reproduzido na compilação de programas russos de 1906, pp.16–26.",
    "rationale": "Transformação socialista apoiada em trabalhadores urbanos e camponeses, com terra como patrimônio comum de quem trabalha. Socialização fundiária sob comunas democráticas e uniões territoriais, usufruto igualitário, sufrágio proporcional e iniciativa/referendo.",
    "caveats": "O mesmo texto admite ditadura revolucionária temporária: não certifica democracia irrestrita. Esta reprodução histórica é delimitada; não representa cada corrente narodnik nem toda prática SR. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "agraria-cooperativa",
    "neighbors": [
      {
        "id": "ideology-agrarian-populism",
        "difference": "Omaha reforma moeda e monopólios preservando propriedades agrícolas; o SR retira terras da propriedade privada."
      },
      {
        "id": "ideology-marxism-leninism-stalin-1926",
        "difference": "Opõe socialização comunal à dependência da burocracia estatal e reconhece autodeterminação/federação."
      }
    ],
    "sources": [
      {
        "title": "Программа партии социалистов-революционеров",
        "url": "https://yakovkrotov.com/acts/20/1900/19051017progr.htm",
        "note": "Publicação: 1906. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: seção SR, pp.16–26; A e B.2–5. Leitura efetiva declarada na pesquisa: Passagens políticas e agrárias lidas em russo, especialmente linhas 127–139 da renderização; outras plataformas ignoradas. Compilação 1906, segunda edição NNSh, reproduzida por historiador; confirmar variante contra fac-símile antes de codificação definitiva."
      },
      {
        "title": "Программа партии социалистов-революционеров [1906 г.]",
        "url": "https://docs.historyrussia.org/ru/nodes/74934",
        "note": "Publicação: 1906. Acesso registrado pela pesquisa: 2026-10-08. Tipo: archival. Localizador: Registro bibliográfico; Vodovozov vol.3, pp.14–27. Leitura efetiva declarada na pesquisa: Registro arquivístico consultado; fac-símile não confrontado com a transcrição."
      }
    ]
  },
  {
    "researchId": "ideology-functional-demarchy-burnheim",
    "id": "ideology-functional-demarchy-burnheim",
    "existing": false,
    "name": "Demarquia funcional (Burnheim, 1985)",
    "period": "John Burnheim, modelo de Is Democracy Possible? (1985), consultado na reedição de 2006; ressalvas posteriores identificadas separadamente.",
    "rationale": "Ordem política sem soberano central, governada por autoridades funcionais autônomas que representam por sorteio os interesses legitimamente afetados. Órgãos especializados negociam entre si; instâncias superiores arbitram limites e conflitos sem comandar políticas. Trustees públicos controlam recursos naturais e crédito, preservando mercados de trabalho e bens.",
    "caveats": "Programa normativo especulativo. A classificação como modelo deliberativo é acadêmica; não se confunde com qualquer júri cidadão ou sorteio parlamentar. Ausência de Estado soberano não significa ausência de governo, polícia ou coerção. Burnheim admite autoridades e agências especializadas. O próprio autor considera a economia esboçada insuficiente e modifica sua análise de classes em 2006; benefícios incondicionais são hipótese discutida, não compromisso inequívoco. Comparações institucionais não provam eficácia. Seleção entre voluntários e arbitragem dependem de convenções cuja estabilidade permanece problemática. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "democratica-funcional-pos-estatal",
    "neighbors": [
      {
        "id": "ideology-communalism",
        "difference": "A jurisdição acompanha funções e públicos sobrepostos, não uma assembleia territorial soberana; mantém mercados."
      },
      {
        "id": "ideology-georgism",
        "difference": "A renda de recursos financia bens comuns, mas o desenho inclui crédito social e autoridades sorteadas independentes do Estado."
      },
      {
        "id": "ideology-market-socialism-schweickart",
        "difference": "Democratização centrada nos afetados por funções públicas e recursos; não exige autogestão de cada empresa pelos trabalhadores."
      },
      {
        "id": "ideology-civic-republicanism",
        "difference": "Substitui a soberania e as eleições por órgãos funcionais sorteados, não apenas acrescenta contestação ao Estado representativo."
      }
    ],
    "sources": [
      {
        "title": "Is Democracy Possible? — Introduction",
        "url": "https://open.sydneyuniversitypress.com.au/9781920898427/9781920898427-introduction.html",
        "note": "Publicação: 1985; edição consultada publicada em 2006-09-01. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: I A first approach to the issues, pp.1–4; parágrafos sobre governo/coerção, ausência de monopólio e legitimate material interest. Leitura efetiva declarada na pesquisa: Seção I até a discussão de interesses legítimos lida diretamente; não toda a introdução. Texto primário na editora universitária. Paginação indicada é da edição consultada, não da edição original de 205 páginas. Acréscimos de 2006 não são atribuídos automaticamente a 1985."
      },
      {
        "title": "Is Democracy Possible? — 1 Democracy and the state",
        "url": "https://open.sydneyuniversitypress.com.au/9781920898427/9781920898427-democracy-and-the-state.html",
        "note": "Publicação: 1985; edição consultada publicada em 2006-09-01. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: I The state is unnecessary: Community e Violence, pp.16–21. Leitura efetiva declarada na pesquisa: Abertura, Community e Violence lidas; outras passagens recuperadas, sem leitura integral do capítulo. Texto primário na editora universitária. Paginação indicada é da edição consultada, não da edição original de 205 páginas. Acréscimos de 2006 não são atribuídos automaticamente a 1985."
      },
      {
        "title": "Is Democracy Possible? — 3 Democracy and representation",
        "url": "https://open.sydneyuniversitypress.com.au/9781920898427/9781920898427-democracy-and-representation.html",
        "note": "Publicação: 1985; edição consultada publicada em 2006-09-01. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: III The alternative to electoral democracy: Representation and function/sampling/responsibility/co-ordination; Higher-level bodies; Protection of person and property, pp.79–90. Leitura efetiva declarada na pesquisa: Seções indicadas e contraste anterior entre descentralização funcional e territorial lidos diretamente; início do capítulo e notas não lidos integralmente. Texto primário na editora universitária. Paginação indicada é da edição consultada, não da edição original de 205 páginas. Acréscimos de 2006 não são atribuídos automaticamente a 1985."
      },
      {
        "title": "Is Democracy Possible? — 4 Democracy and markets",
        "url": "https://open.sydneyuniversitypress.com.au/9781920898427/9781920898427-democracy-and-markets.html",
        "note": "Publicação: 1985; edição consultada publicada em 2006-09-01. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: I, conclusão, p.100; II Land, Money, Labour e Commodities and consumption, pp.101–117. Leitura efetiva declarada na pesquisa: Proposta de trustees e passagens substantivas de Land, Money, Labour e Commodities and consumption lidas; não todas as notas. Acréscimo entre colchetes em p.112 identificado como ressalva posterior. Texto primário na editora universitária. Paginação indicada é da edição consultada, não da edição original de 205 páginas. Acréscimos de 2006 não são atribuídos automaticamente a 1985."
      },
      {
        "title": "Is Democracy Possible? — Preface to the second edition",
        "url": "https://open.sydneyuniversitypress.com.au/9781920898427/9781920898427-preface-to-the-second-edition.html",
        "note": "Publicação: 2006-05-01. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: pp.iii–v; A Major change of view, pp.vii–viii. Leitura efetiva declarada na pesquisa: Prefácio lido, com atenção à autocrítica da teoria econômica e à rejeição posterior da análise de classes. Serve para controle da edição e ressalvas; não para retroprojetar posições de 2006 na formulação de 1985."
      },
      {
        "title": "Demarchy: a flexible deliberative process for contemporary democracies — Luke Zaphir",
        "url": "https://www.researchgate.net/publication/330714826_Demarchy_a_flexible_deliberative_process_for_contemporary_democracies",
        "note": "Publicação: 2019. Acesso registrado pela pesquisa: 2026-10-08. Tipo: scholarly. Localizador: Resumo, §1 e §1.4; Journal of Political Power 12(1), pp.104–128; DOI 10.1080/2158379X.2019.1573514. Leitura efetiva declarada na pesquisa: Resumo, descrição dos quatro componentes em §1 e discussão de coordenação em §1.4 lidos no texto disponibilizado pelo autor; não artigo inteiro. O artigo também reconstrói/adapta Burnheim; suas extensões não são incorporadas à candidatura. A abertura do DOI da editora falhou, mas o exemplar autoral funcionou."
      },
      {
        "title": "Luke Zaphir — University of Queensland, publicações",
        "url": "https://critical-thinking.project.uq.edu.au/profile/528/luke-zaphir",
        "note": "Publicação: undated. Acesso registrado pela pesquisa: 2026-10-08. Tipo: institutional-bibliographic. Localizador: Lista de Journal Articles: Zaphir 2019. Leitura efetiva declarada na pesquisa: Entrada institucional do artigo consultada para conferir autoria, periódico, volume, páginas e DOI."
      },
      {
        "title": "Review of Is Democracy Possible? — Brian Martin",
        "url": "https://documents.uow.edu.au/~bmartin/pubs/90BRsa.html",
        "note": "Publicação: 1990. Acesso registrado pela pesquisa: 2026-10-08. Tipo: scholarly-review. Localizador: Social Anarchism nº15, pp.78–81, parágrafos sobre organização política e economia. Leitura efetiva declarada na pesquisa: Resenha integral lida; sua caracterização política foi cotejada com a primária. A resenha aproxima a proposta do anarquismo. Sua simplificação sobre ausência de polícia/coerção não é adotada: introdução e cap. 3 de Burnheim qualificam isso explicitamente."
      }
    ]
  },
  {
    "researchId": "ideology-agrarian-populism",
    "id": "ideology-agrarian-populism",
    "existing": true,
    "name": "Populismo agrário (Omaha, 1892)",
    "period": "People’s Party, plataforma de Omaha, 4 julho 1892.",
    "rationale": "Aliança de produtores rurais e urbanos contra concentração fundiária, financeira e de infraestrutura. Moeda pública expansiva, bancos postais, tributação progressiva e propriedade pública de ferrovias e comunicações.",
    "caveats": "Não é o conceito genérico de populismo como estilo. A fonte APP não contém todas as resoluções suplementares; não preencher IMI com versões não lidas. Exclusão de proprietários estrangeiros é explícita. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "agraria-cooperativa",
    "neighbors": [
      {
        "id": "ideology-georgism",
        "difference": "Combina reforma monetária e infraestrutura pública em vez de imposto único sobre renda da terra."
      },
      {
        "id": "ideology-narodnik-agrarian-socialism",
        "difference": "Protege assentamento e propriedade produtiva dos agricultores, sem socializar toda terra."
      }
    ],
    "sources": [
      {
        "title": "Populist Party Platform of 1892",
        "url": "https://www.presidency.ucsb.edu/documents/populist-party-platform-1892",
        "note": "Publicação: 1892-07-04. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Preamble; Finance; Transportation; Land. Leitura efetiva declarada na pesquisa: Texto principal completo lido; não Expression of Sentiments suplementar."
      },
      {
        "title": "Populist Convention Reunion",
        "url": "https://history.nebraska.gov/publications_section/populist-convention-reunion/",
        "note": "Publicação: undated. Acesso registrado pela pesquisa: 2026-10-08. Tipo: scholarly-institutional. Localizador: História da convenção e medidas reformistas. Leitura efetiva declarada na pesquisa: Enquadramento institucional consultado."
      }
    ]
  },
  {
    "researchId": "ideology-owenite-socialism",
    "id": "ideology-owenite-socialism",
    "existing": false,
    "name": "Socialismo cooperativo owenista (1820–1821)",
    "period": "Robert Owen, Report to the County of Lanark, apresentado em 1820 e publicado em 1821.",
    "rationale": "Ambientes cooperativos planejados podem reconstruir caráter, produção e vida social, superando competição e pobreza. Associações agroindustriais com serviços comuns, educação, intercâmbio por valor de trabalho e integração gradual com o Estado existente.",
    "caveats": "Não confundir toda cooperativa contemporânea com owenismo. Planejamento paternalista e formação moral exigem cautela em REP/POD; a engenharia ambiental não prova ambientalismo. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "family": "agraria-cooperativa",
    "neighbors": [
      {
        "id": "ideology-anarcho-communism",
        "difference": "Propõe transição experimental e associações que ainda pagam tributos ao Estado, não abolição imediata revolucionária."
      },
      {
        "id": "ideology-guild-socialism-cole",
        "difference": "Organiza comunidades integrais de vida e trabalho, não representação funcional por guildas industriais."
      }
    ],
    "sources": [
      {
        "title": "Report to the County of Lanark",
        "url": "https://la.utexas.edu/users/hcleaver/368/368owenlanark.html",
        "note": "Publicação: 1821. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: ParteIII, itens 1–6; associações, excedente, governo e velha sociedade. Leitura efetiva declarada na pesquisa: Passagens da organização comunitária, intercâmbio e relações estatais lidas; relatório não integral. Apresentado em 1 maio 1820; data de publicação 1821 confirmada em registros bibliográficos."
      },
      {
        "title": "Report to the County of Lanark, Robert Owen, 1821",
        "url": "https://www.cambridge.org/core/books/abs/socialism-radicalism-and-nostalgia/report-to-the-county-of-lanark-robert-owen-1821/C01446F9B2D38F09EDBB4FF1DBAF1949",
        "note": "Publicação: 1821. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary-bibliographic. Localizador: Registro de fonte histórica em Socialism, Radicalism, and Nostalgia. Leitura efetiva declarada na pesquisa: Registro de capítulo e data histórica conferidos."
      }
    ]
  }
];
