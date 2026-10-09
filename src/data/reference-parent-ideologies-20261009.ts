import type { ReferenceEntry, ReferenceSource, AxisKey } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';
interface Definition { before: ReferenceEntry; addedSources: ReferenceSource[]; codings: ReferenceAxisCoding[]; unknownAxisReasons: Partial<Record<AxisKey,string>>; caveats: string }
// Full selected baselines; unused raw records remain unchanged.
export const parentIdeologies20261009Definitions = [
  {
    "before": {
      "id": "ideology-program-constitutional-liberalism-constant-1819",
      "kind": "ideology",
      "category": "ideology",
      "name": "Liberalismo clássico constitucional (Constant, 1819)",
      "period": "Benjamin Constant, discurso de 1819; não todo liberalismo dos séculos XVIII–XIX.",
      "rationale": "Liberdade individual protegida por limites à soberania e por governo representativo em sociedades comerciais. Representação sujeita à vigilância cidadã, garantias civis e autonomia privada.",
      "caveats": "A defesa da representação não equivale automaticamente a sufrágio universal. O texto longo de Constant de 1806 não deve ser confundido com a obra curta de 1815. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
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
      ],
      "vec": {
        "est": 50,
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
      "evidence": {},
      "axisEvidence": {},
      "coding": {}
    },
    "addedSources": [
      {
        "title": "The Liberty of Ancients Compared with that of Moderns — leitura delimitada 2026-10-09",
        "url": "https://oll-resources.s3.us-east-2.amazonaws.com/oll3/store/titles/2251/Constant_Liberty1521_EBk_v6.0.pdf",
        "note": "Publicação/edição: Discurso de 1819; PDF OLL PLL v6.0, setembro 2011, erroneamente rotulado 1816. Acesso em 09/10/2026. Texto extraído das pp PDF5–18, com leitura das passagens indicadas nos claims e dos contrapontos; não foi cotejada tradução com edição francesa nem certificada reprodução fac-similar. Revisão independente delimitada corroborou as passagens e os contrapontos citados; não certifica tradução, primeira edição ou fac-símile inteiro."
      }
    ],
    "codings": [
      {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "relatedQuestionIds": [
          "representacao_03",
          "representacao_11",
          "representacao_19"
        ],
        "claims": [
          {
            "sourceTitle": "The Liberty of Ancients Compared with that of Moderns — leitura delimitada 2026-10-09",
            "locator": "PDF físico pp16–18, extração linhas561–637; representação, supervisão e substituição periódica.",
            "statement": "Representantes devem ser fiscalizados e substituídos periodicamente; participação política protege direitos.",
            "basis": "declaration",
            "publishedDate": "Discurso de 1819; PDF OLL PLL v6.0, setembro 2011, erroneamente rotulado 1816",
            "accessedDate": "2026-10-09"
          }
        ],
        "rationale": "Há controle representativo explícito.",
        "uncertainty": "Não demonstra sufrágio universal; convive com monarquia.",
        "reviewedOn": "2026-10-09"
      },
      {
        "axis": "pod",
        "position": "strong-second",
        "confidence": "high",
        "relatedQuestionIds": [
          "poder_04",
          "poder_14",
          "poder_16",
          "poder_19"
        ],
        "claims": [
          {
            "sourceTitle": "The Liberty of Ancients Compared with that of Moderns — leitura delimitada 2026-10-09",
            "locator": "PDF físico p6 linhas92–104; pp13–14 linhas406–488; independência, exílio e censura; pp14–15 linhas489–518.",
            "statement": "Rejeita prisão arbitrária, exílio político e censura; protege expressão, associação e vida privada.",
            "basis": "declaration",
            "publishedDate": "Discurso de 1819; PDF OLL PLL v6.0, setembro 2011, erroneamente rotulado 1816",
            "accessedDate": "2026-10-09"
          }
        ],
        "rationale": "Limites gerais à coerção são centrais.",
        "uncertainty": "Proteção legal permanece; questões penais específicas não são resolvidas.",
        "reviewedOn": "2026-10-09"
      },
      {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "relatedQuestionIds": [
          "diplomacia_04",
          "diplomacia_06",
          "diplomacia_17"
        ],
        "claims": [
          {
            "sourceTitle": "The Liberty of Ancients Compared with that of Moderns — leitura delimitada 2026-10-09",
            "locator": "PDF físico pp7–8 linhas164–208; comércio, guerra e trabalho pacífico.",
            "statement": "Comércio pacífico substitui conquista; mesmo guerras vitoriosas custam mais que beneficiam.",
            "basis": "declaration",
            "publishedDate": "Discurso de 1819; PDF OLL PLL v6.0, setembro 2011, erroneamente rotulado 1816",
            "accessedDate": "2026-10-09"
          }
        ],
        "rationale": "Direção pacífica explicitada.",
        "uncertainty": "Não formula desarmamento absoluto nem política completa de defesa.",
        "reviewedOn": "2026-10-09"
      },
      {
        "axis": "con",
        "position": "moderate-second",
        "confidence": "medium",
        "relatedQuestionIds": [
          "controle_04",
          "controle_14",
          "controle_20"
        ],
        "claims": [
          {
            "sourceTitle": "The Liberty of Ancients Compared with that of Moderns — leitura delimitada 2026-10-09",
            "locator": "PDF físico p9 linhas231–237; pp15–16 linhas529–554; contraponto instrução p14 linhas467–479.",
            "statement": "Condena intervenção governamental nos negócios e defende circulação patrimonial contra poder arbitrário.",
            "basis": "declaration",
            "publishedDate": "Discurso de 1819; PDF OLL PLL v6.0, setembro 2011, erroneamente rotulado 1816",
            "accessedDate": "2026-10-09"
          }
        ],
        "rationale": "Favorece coordenação econômica privada.",
        "uncertainty": "Admite provisão geral de instrução; não detalha política macroeconômica.",
        "reviewedOn": "2026-10-09"
      }
    ],
    "unknownAxisReasons": {
      "est": "Sem competências territoriais suficientes.",
      "imi": "Exemplo ateniense não define programa migratório.",
      "int": "Paz não determina intervenção externa.",
      "eco": "Propriedade não resolve composição público-privada.",
      "com": "Comércio não especifica tarifas.",
      "rel": "Tolerância não comprova separação institucional.",
      "mor": "Autonomia não determina costumes específicos.",
      "tec": "Progresso não basta para este construto."
    },
    "caveats": "A defesa da representação não equivale automaticamente a sufrágio universal. O texto longo de Constant de 1806 não deve ser confundido com a obra curta de 1815. A pesquisa qualitativa de seleção não certifica, por si, os 12 eixos. Lacunas não equivalem a neutralidade. Codificação documental de 09/10/2026: Quatro eixos codificados somente no discurso de 1819, com limites de sufrágio, defesa e instrução pública. O PDF OLL de setembro de 2011 rotula 1816, mas o referente editorial confirmado é 1819. Tradução não cotejada integralmente com francês; não descreve toda a tradição liberal. Âncoras e faixas são juízos editoriais, não medições ou respostas imputadas ao questionário. Eixos não documentados permanecem desconhecidos."
  },
  {
    "before": {
      "id": "ideology-social-liberalism",
      "kind": "ideology",
      "category": "ideology",
      "name": "Liberalismo social (Hobhouse, 1911)",
      "period": "L. T. Hobhouse, Liberalism (1911).",
      "rationale": "Autonomia depende de direitos civis e das condições sociais que permitam exercê-los. Reforma social, tributação e garantias materiais compatíveis com iniciativa individual, rejeitando socialismo burocrático.",
      "caveats": "Não transformar as generalizações históricas do autor em evidência sobre sociedades atuais; progresso científico citado não prova TEC. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
      "sources": [
        {
          "title": "Liberalism",
          "url": "https://www.gutenberg.org/cache/epub/28278/pg28278-images.html",
          "note": "Publicação: 1911. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: caps. II, VII–VIII; especialmente início de VIII e organização social da oportunidade. Leitura efetiva declarada na pesquisa: Sumário, início e passagens dos caps. II e VIII lidos; demais capítulos não integralmente. Edição digital de 2009, baseada em reimpressão que lista edições até 1944."
        }
      ],
      "vec": {
        "est": 50,
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
      "evidence": {},
      "axisEvidence": {},
      "coding": {}
    },
    "addedSources": [
      {
        "title": "Liberalism — Hobhouse, leitura delimitada 2026-10-09",
        "url": "https://www.gutenberg.org/cache/epub/28278/pg28278-images.html",
        "note": "Publicação/edição: 1911; reimpressão OUP com histórico até 1944; eBook Gutenberg 28278 de 2009-03-08. Acesso em 09/10/2026. Folha de rosto; passagens do cap II§§ 1–9(pp 21–49), caps.VII–VIII(pp 138–154,167–179,186–188,195–208), e cap IX entrepp.219–251, sobretudo232–243. Não leitura integral desses capítulos nem cotejo da primeira impressão1911. Revisão independente delimitada corroborou as passagens e os contrapontos citados; não certifica tradução, primeira edição ou fac-símile inteiro."
      }
    ],
    "codings": [
      {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "relatedQuestionIds": [
          "representacao_07",
          "representacao_15",
          "representacao_19"
        ],
        "claims": [
          {
            "sourceTitle": "Liberalism — Hobhouse, leitura delimitada 2026-10-09",
            "locator": "Cap VIII pp170–173, linhas659–668; cap IX pp232–236, linhas850–863, incluindo exceção colonial p235.",
            "statement": "Defende sufrágio adulto, legislatura eleita e governo responsável.",
            "basis": "declaration",
            "publishedDate": "1911; reimpressão OUP com histórico até 1944; eBook Gutenberg 28278 de 2009-03-08",
            "accessedDate": "2026-10-09"
          }
        ],
        "rationale": "Orientação democrática explícita.",
        "uncertainty": "Exceções coloniais racializadas limitam universalidade.",
        "reviewedOn": "2026-10-09"
      },
      {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "relatedQuestionIds": [
          "poder_04",
          "poder_14",
          "poder_16",
          "poder_19"
        ],
        "claims": [
          {
            "sourceTitle": "Liberalism — Hobhouse, leitura delimitada 2026-10-09",
            "locator": "Cap II §§1/3 pp21–31, linhas147–179; cap VII pp151–154, linhas592–603.",
            "statement": "Protege julgamento regular, expressão e autonomia pessoal.",
            "basis": "declaration",
            "publishedDate": "1911; reimpressão OUP com histórico até 1944; eBook Gutenberg 28278 de 2009-03-08",
            "accessedDate": "2026-10-09"
          }
        ],
        "rationale": "Limita coerção arbitrária.",
        "uncertainty": "Aceita tutela compulsória por incapacidade e alcoolismo.",
        "reviewedOn": "2026-10-09"
      },
      {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "relatedQuestionIds": [
          "diplomacia_02",
          "diplomacia_05",
          "diplomacia_08"
        ],
        "claims": [
          {
            "sourceTitle": "Liberalism — Hobhouse, leitura delimitada 2026-10-09",
            "locator": "Cap II §8 pp44–45, linhas227–229; cap IX pp237–241, linhas864–878.",
            "statement": "Critica armamentismo e prioriza cooperação internacional sobre competição militar.",
            "basis": "declaration",
            "publishedDate": "1911; reimpressão OUP com histórico até 1944; eBook Gutenberg 28278 de 2009-03-08",
            "accessedDate": "2026-10-09"
          }
        ],
        "rationale": "Direção pacífica delimitada.",
        "uncertainty": "Mantém defesa comum e vínculos imperiais.",
        "reviewedOn": "2026-10-09"
      },
      {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "relatedQuestionIds": [
          "economia_03",
          "economia_07",
          "economia_09"
        ],
        "claims": [
          {
            "sourceTitle": "Liberalism — Hobhouse, leitura delimitada 2026-10-09",
            "locator": "Cap VII pp141–142, linhas562–563; cap VIII pp175–179, linhas675–686; p199 linha749.",
            "statement": "Admite hospitais, educação, transportes públicos, pensões e controle de recursos.",
            "basis": "declaration",
            "publishedDate": "1911; reimpressão OUP com histórico até 1944; eBook Gutenberg 28278 de 2009-03-08",
            "accessedDate": "2026-10-09"
          }
        ],
        "rationale": "Provisão coletiva é material.",
        "uncertainty": "Recusa Estado produtor exclusivo; preserva iniciativa privada.",
        "reviewedOn": "2026-10-09"
      },
      {
        "axis": "con",
        "position": "moderate-first",
        "confidence": "medium",
        "relatedQuestionIds": [
          "controle_05",
          "controle_14",
          "controle_19"
        ],
        "claims": [
          {
            "sourceTitle": "Liberalism — Hobhouse, leitura delimitada 2026-10-09",
            "locator": "Cap VII pp145–147, linhas573–580; cap VIII p188 linhas713–717; pp195–202 linhas735–757; contraponto centralização linhas732–736.",
            "statement": "Defende regulação industrial, coordenação fiscal e tributação redistributiva.",
            "basis": "declaration",
            "publishedDate": "1911; reimpressão OUP com histórico até 1944; eBook Gutenberg 28278 de 2009-03-08",
            "accessedDate": "2026-10-09"
          }
        ],
        "rationale": "Intervenção econômica deliberada.",
        "uncertainty": "Recusa planejamento burocrático integral.",
        "reviewedOn": "2026-10-09"
      },
      {
        "axis": "com",
        "position": "strong-second",
        "confidence": "high",
        "relatedQuestionIds": [
          "comercio_01",
          "comercio_02",
          "comercio_16"
        ],
        "claims": [
          {
            "sourceTitle": "Liberalism — Hobhouse, leitura delimitada 2026-10-09",
            "locator": "Cap II §5 pp34–35, linhas191–195; cap IX p223 linhas823–824.",
            "statement": "Rejeita proteção tarifária e reafirma livre intercâmbio internacional.",
            "basis": "declaration",
            "publishedDate": "1911; reimpressão OUP com histórico até 1944; eBook Gutenberg 28278 de 2009-03-08",
            "accessedDate": "2026-10-09"
          }
        ],
        "rationale": "Rejeição tarifária é inequívoca.",
        "uncertainty": "Abertura não elimina regulação doméstica.",
        "reviewedOn": "2026-10-09"
      },
      {
        "axis": "rel",
        "position": "moderate-first",
        "confidence": "medium",
        "relatedQuestionIds": [
          "religiao_01",
          "religiao_03",
          "religiao_18"
        ],
        "claims": [
          {
            "sourceTitle": "Liberalism — Hobhouse, leitura delimitada 2026-10-09",
            "locator": "Cap II §3 pp28–31 linhas168–179; cap VII pp144–154 linhas569–603, sobretudo602–603 e consciência584–587.",
            "statement": "Separa culto e ensino doutrinário do controle estatal.",
            "basis": "declaration",
            "publishedDate": "1911; reimpressão OUP com histórico até 1944; eBook Gutenberg 28278 de 2009-03-08",
            "accessedDate": "2026-10-09"
          }
        ],
        "rationale": "Distinção institucional explícita.",
        "uncertainty": "Protege religião e acomoda consciência.",
        "reviewedOn": "2026-10-09"
      },
      {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "relatedQuestionIds": [
          "moral_02",
          "moral_06",
          "moral_18"
        ],
        "claims": [
          {
            "sourceTitle": "Liberalism — Hobhouse, leitura delimitada 2026-10-09",
            "locator": "Cap II §§4/6 pp33,39–40, linhas187,208–213; cap VIII pp171–173 linhas663–668; contraponto cuidado materno pp179–180 linhas686–690.",
            "statement": "Defende autonomia patrimonial feminina, casamento civil e escolha conjugal.",
            "basis": "declaration",
            "publishedDate": "1911; reimpressão OUP com histórico até 1944; eBook Gutenberg 28278 de 2009-03-08",
            "accessedDate": "2026-10-09"
          }
        ],
        "rationale": "Reforma papéis familiares.",
        "uncertainty": "Preserva pressupostos heterossexuais e limitações ocupacionais.",
        "reviewedOn": "2026-10-09"
      }
    ],
    "unknownAxisReasons": {
      "est": "Autonomia pouco especificada.",
      "imi": "Ambivalência colonial.",
      "int": "Alcance intervencionista indeterminado.",
      "tec": "Sem cobertura suficiente."
    },
    "caveats": "Não transformar as generalizações históricas do autor em evidência sobre sociedades atuais; progresso científico citado não prova TEC. A pesquisa qualitativa de seleção não certifica, por si, os 12 eixos. Lacunas não equivalem a neutralidade. Codificação documental de 09/10/2026: Oito eixos codificados no texto de 1911, por transcrição de reimpressão que lista 1944. Exceções coloniais racializadas, tutela por incapacidade/alcoolismo, defesa imperial, iniciativa privada, rejeição de centralismo burocrático, consciência religiosa e limites ocupacionais/familiares são contrapontos. Não descreve prática nacional nem pauta tecnológica. Âncoras e faixas são juízos editoriais, não medições ou respostas imputadas ao questionário. Eixos não documentados permanecem desconhecidos."
  },
  {
    "before": {
      "id": "ideology-egalitarian-liberalism",
      "kind": "ideology",
      "category": "ideology",
      "name": "Liberalismo igualitário (Rawls, 2001)",
      "period": "John Rawls, formulação institucional de Justice as Fairness (2001).",
      "rationale": "Instituições justas garantem liberdades iguais, oportunidades equitativas e desigualdades favoráveis aos menos favorecidos. Democracia de cidadãos proprietários ou socialismo liberal; dispersão prévia de recursos e valor equitativo das liberdades políticas.",
      "caveats": "Admite dois tipos de regime, portanto ECO não tem solução única. A leitura primária é parcial e por OCR de terceiro; nenhuma inferência de neutralidade se segue dessa pluralidade. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
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
      ],
      "vec": {
        "est": 50,
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
      "evidence": {},
      "axisEvidence": {},
      "coding": {}
    },
    "addedSources": [
      {
        "title": "Justice as Fairness: A Restatement — leitura delimitada do OCR 2026-10-09",
        "url": "https://pdfcoffee.com/john-rawls-justice-as-fairness-pdf-free.html",
        "note": "Publicação/edição: 2001; reprodução OCR de terceiro sem data editorial confirmada. Acesso em 09/10/2026. Leitura anterior atribuída à pesquisa: §§ 12–13,41–45,48–50 nas passagens recuperadas, sobretudo42.1–42.4;44.1–44.3;49.4–49.5;50.1–50.6. Não foi lido integralmente o livro. OCR tem ruído, especialmente § 49.1. Fonte já presente na seleção; nova leitura em 09/10/2026. Conferência textual de § 13 com excerto PDF acadêmico; demais seções não foram conferidas visualmente em fac-símile. Não usar erros OCR como palavras do autor. A revisão independente não recuperou o corpo desse URL; cotejo de passagens foi feito em outra reprodução OCR, adicionada separadamente, sem equivalência de bytes presumida."
      },
      {
        "title": "Justice as Fairness: A Restatement — excerto acadêmico §§ 12–22",
        "url": "https://www.marcellodibello.com/PHI171/resources/rawls-inequalities.pdf",
        "note": "Publicação/edição: 2001; excerto de reprodução acadêmica sem data de hospedagem confirmada. Acesso em 09/10/2026. Leitura anterior atribuída à pesquisa: Texto extraído de§ 13, pp impressas42–47 (PDF5–10), e passagens de§ 14–15, pp 51–53. Não foi inspecionada imagem/pixel das páginas. Acesso em 09/10/2026. Confirma texto de princípios e lista de liberdades; não fornece sozinho a leitura de§§ 41–50. Revisão independente recuperou § 12.3 e § 13.3–13.6, páginas impressas 44–48, inclusive limites do recrutamento defensivo e de razão pública; não examinou todo o PDF."
      },
      {
        "title": "John Rawls — Stanford Encyclopedia of Philosophy",
        "url": "https://plato.stanford.edu/entries/rawls/",
        "note": "Publicação/edição: Página viva; data de revisão não confirmada nesta leitura. Acesso em 09/10/2026. Leitura anterior atribuída à pesquisa: Passagens de§§ 3.6 e4.3; usado como cotejo interpretativo, sem transferir formulações de outros livros para o referente2001. Acesso em 09/10/2026. Fonte secundária, não alegação de leitura adicional do original."
      },
      {
        "title": "Justice as Fairness: A Restatement (2001) — OCR recuperado, cotejo delimitado",
        "url": "https://pdfcoffee.com/john-rawls-2001-justice-as-fairness-pdf-free.html",
        "note": "Reprodução OCR de terceiro da obra de 2001; data de upload e edição editorial não estabelecidas. Leitura independente em 09/10/2026 das passagens de §§ 42.1–42.4, 43–44 (parágrafos 2161–2266), § 50 (passagens 2470–2482 e 2499–2551) e § 26.4 (1585–1597). Não é leitura do livro inteiro, fac-símile autenticado nem cotejo de todos os erros de OCR. URL distinta da reprodução anterior, cujo acesso direto falhou para a revisão independente; a leitura anterior atribuída à pesquisa foi preservada separadamente."
      }
    ],
    "codings": [
      {
        "axis": "rep",
        "position": "strong-first",
        "confidence": "high",
        "relatedQuestionIds": [
          "representacao_03",
          "representacao_05",
          "representacao_07",
          "representacao_19"
        ],
        "claims": [
          {
            "sourceTitle": "Justice as Fairness: A Restatement — leitura delimitada do OCR 2026-10-09",
            "locator": "§§ 42.1,44.1–44.3,45.1; pp 138,145–148",
            "statement": "Exige democracia constitucional, pluralidade partidária e liberdades políticas efetivas.",
            "basis": "declaration",
            "publishedDate": "2001; reprodução OCR de terceiro sem data editorial confirmada",
            "accessedDate": "2026-10-09"
          },
          {
            "sourceTitle": "Justice as Fairness: A Restatement (2001) — OCR recuperado, cotejo delimitado",
            "locator": "§§ 42.1–42.4, 43 e 44.1–44.3; passagens OCR 2161–2266.",
            "statement": "A democracia constitucional exige liberdades políticas efetivas e instituições que evitem concentração de poder político.",
            "basis": "declaration",
            "publishedDate": "Obra de 2001; OCR de terceiro sem data editorial confirmada",
            "accessedDate": "2026-10-09"
          }
        ],
        "rationale": "Arranjo democrático é constitutivo.",
        "uncertainty": "Revisão judicial permanece discutível, sem soberania judicial irrestrita.",
        "reviewedOn": "2026-10-09"
      },
      {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "relatedQuestionIds": [
          "poder_04",
          "poder_14",
          "poder_19"
        ],
        "claims": [
          {
            "sourceTitle": "Justice as Fairness: A Restatement — excerto acadêmico §§ 12–22",
            "locator": "§ 13.3–13.5; pp 44–47 (PDF7–10)",
            "statement": "Garante expressão, associação, integridade pessoal e devido processo com prioridade.",
            "basis": "declaration",
            "publishedDate": "2001; excerto de reprodução acadêmica sem data de hospedagem confirmada",
            "accessedDate": "2026-10-09"
          }
        ],
        "rationale": "Direção liberal transversal.",
        "uncertainty": "§ 13.5 admite recrutamento militar para defender liberdades iguais; a prioridade das liberdades pressupõe condições favoráveis. Não resolve todas as medidas penais nem autoriza proteção absoluta contra toda coerção.",
        "reviewedOn": "2026-10-09"
      },
      {
        "axis": "rel",
        "position": "moderate-first",
        "confidence": "medium",
        "relatedQuestionIds": [
          "religiao_01",
          "religiao_03",
          "religiao_18"
        ],
        "claims": [
          {
            "sourceTitle": "Justice as Fairness: A Restatement — excerto acadêmico §§ 12–22",
            "locator": "§ 12.3, página impressa 41; excerto acadêmico, passagens 53–84.",
            "statement": "Essenciais constitucionais e justiça básica exigem razões apoiadas em valores políticos públicos; outras leis podem legitimamente depender de valores não políticos.",
            "basis": "declaration",
            "publishedDate": "2001; excerto de reprodução acadêmica sem data de hospedagem confirmada",
            "accessedDate": "2026-10-09"
          },
          {
            "sourceTitle": "Justice as Fairness: A Restatement (2001) — OCR recuperado, cotejo delimitado",
            "locator": "§ 26.4, passagens 1585–1597; § 50, passagens 2470–2482 e 2499–2551.",
            "statement": "A apostasia não é crime e o pertencimento associativo não pode eliminar o direito legal de saída; autonomia associativa e iguais liberdades coexistem.",
            "basis": "declaration",
            "publishedDate": "Obra de 2001; OCR de terceiro sem data editorial confirmada",
            "accessedDate": "2026-10-09"
          }
        ],
        "rationale": "Normas públicas distinguem-se de doutrina religiosa.",
        "uncertainty": "Razão pública limita-se aos essenciais constitucionais e à justiça básica; § 12.3 admite influência legítima de valores não políticos sobre outras legislações. Igrejas conservam autonomia interna, sujeita a liberdades civis e direito de saída; não implica ateísmo nem banimento de convicções religiosas da cidadania.",
        "reviewedOn": "2026-10-09"
      },
      {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "relatedQuestionIds": [
          "moral_01",
          "moral_06",
          "moral_18"
        ],
        "claims": [
          {
            "sourceTitle": "Justice as Fairness: A Restatement — leitura delimitada do OCR 2026-10-09",
            "locator": "§ 50.1–50.6, pp 162–168, inclusive nota42",
            "statement": "Admite famílias não heterossexuais e exige igualdade feminina inclusive no divórcio.",
            "basis": "declaration",
            "publishedDate": "2001; reprodução OCR de terceiro sem data editorial confirmada",
            "accessedDate": "2026-10-09"
          },
          {
            "sourceTitle": "Justice as Fairness: A Restatement (2001) — OCR recuperado, cotejo delimitado",
            "locator": "§ 50; passagens OCR 2470–2482 e 2499–2551, inclusive nota 42.",
            "statement": "A justiça básica exige iguais direitos das mulheres, proteção em separação e divórcio e cuidado infantil, sem exigir exclusivamente família heterossexual.",
            "basis": "declaration",
            "publishedDate": "Obra de 2001; OCR de terceiro sem data editorial confirmada",
            "accessedDate": "2026-10-09"
          }
        ],
        "rationale": "Reforma familiar diretamente sustentada.",
        "uncertainty": "Exige cuidado infantil; não especifica toda pauta cultural.",
        "reviewedOn": "2026-10-09"
      }
    ],
    "unknownAxisReasons": {
      "est": "Competências territoriais insuficientes.",
      "imi": "Pluralismo doutrinário não resolve imigração.",
      "dip": "Escopo doméstico.",
      "int": "Escopo doméstico.",
      "eco": "Admite propriedade dispersa privada e socialismo liberal; não escolher silenciosamente.",
      "con": "Mercados e ajustes fiscais não estabelecem direção agregada inequívoca.",
      "com": "Sem política comercial suficiente.",
      "tec": "Sem cobertura suficiente."
    },
    "caveats": "Admite dois tipos de regime, portanto ECO não tem solução única. A leitura primária é parcial e por OCR de terceiro; nenhuma inferência de neutralidade se segue dessa pluralidade. A pesquisa qualitativa de seleção não certifica, por si, os 12 eixos. Lacunas não equivalem a neutralidade. Codificação documental de 09/10/2026: Quatro eixos codificados na obra de 2001, em excertos e OCR delimitados, sem fac-símile integral. Conscrição defensiva sob condições favoráveis, valores não políticos fora dos essenciais constitucionais/justiça básica e autonomia religiosa/familiar são limites. ECO permanece desconhecido: democracia de proprietários e socialismo liberal são alternativas, sem escolher uma silenciosamente. Não transporta política externa de The Law of Peoples. Âncoras e faixas são juízos editoriais, não medições ou respostas imputadas ao questionário. Eixos não documentados permanecem desconhecidos."
  },
  {
    "before": {
      "id": "ideology-right-minarchism",
      "kind": "ideology",
      "category": "ideology",
      "name": "Libertarianismo minarquista (Nozick, 1974)",
      "period": "Anarchy, State, and Utopia1974: passagens de Estado mínimo e capítulo7 pp178–182 reproduzidas; não livro integral",
      "vec": {
        "est": 50,
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
      "rationale": "Direitos individuais delimitam um Estado restrito à proteção contra violência, fraude e violações contratuais. Estado mínimo e teoria histórica da titularidade: aquisição, transferência e retificação.",
      "caveats": "Excertos primários não livro integral. Patentes limitadas e proteção estatal compartilhadas com Rand; prova de independência e duração limitam a exceção. REP é prospectivo: defesa de Estado mínimo não fixa por si o sistema eleitoral. Retificação torna falsa uma leitura de proteção irrestrita de toda posse existente. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
      "sources": [
        {
          "title": "Anarchy, State, and Utopia — Robert Nozick",
          "url": "https://www.hup.harvard.edu/books/9780465051007",
          "note": "Descrição editorial da obra primária e de seu argumento sobre o Estado mínimo."
        },
        {
          "title": "Estado mínimo e direitos de invenção em Nozick, 1974 — primary bounded definition audit",
          "url": "https://cyber.harvard.edu/IPCoop/74nozi.html",
          "note": "Anarchy, State, and Utopia1974: passagens de Estado mínimo e capítulo7 pp178–182 reproduzidas; não livro integral. Excertos primários não livro integral. Patentes limitadas e proteção estatal compartilhadas com Rand; prova de independência e duração limitam a exceção."
        },
        {
          "title": "Anarchy, State, and Utopia — Robert Nozick 1974 primary Preface transcription",
          "url": "https://www.thetedkarchive.com/library/robert-nozick-anarchy-state-and-utopia",
          "note": "Preface opening paragraphs and stated conclusions; archive transcription cites Archive.org scan; actual reading attributed in author/independent ledgers, not full book."
        },
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
      ],
      "evidence": {},
      "axisEvidence": {},
      "coding": {}
    },
    "addedSources": [
      {
        "title": "Anarchy, State and Utopia, chapter 7",
        "url": "https://www.laits.utexas.edu/poltheory/sidgwick/shortrefs/asu.c07.html",
        "note": "Publicação/edição: 1974; excerto universitário sem data de hospedagem. Acesso em 09/10/2026. Leitura anterior atribuída à pesquisa: Todo o excerto intitulado Paragraph 111, linhas4–9 da extração; não o capítulo inteiro. Fonte já presente na seleção. Leitura em 09/10/2026; texto de retificação e limitação das conclusões distributivas. Revisão independente leu diretamente todo o excerto Paragraph 111, linhas 4–9, não o capítulo 7 inteiro."
      },
      {
        "title": "Anarchy, State, and Utopia — transcrição digital, leitura delimitada 2026-10-09",
        "url": "https://www.thetedkarchive.com/library/robert-nozick-anarchy-state-and-utopia",
        "note": "Publicação/edição: 1974; transcrição de reimpressão com copyright1974 e linha de impressão02–05. Acesso em 09/10/2026. Leitura anterior atribuída à pesquisa: Prefácio, parágrafos iniciais; cap 7 abertura, The Entitlement Theory, How Liberty Upsets Patterns e encerramento; cap 10 Community and Nation e passagens finais. Não foi lido integralmente o livro nem certificado o fac-símile. Acesso em 09/10/2026. Mirror de terceiro declara origem Archive.org; discrepâncias tipográficas presentes. O parágrafo final de cap 7 foi cotejado com University of Texas, e a interpretação com SEP. Não é edição crítica nem licença para republicar o livro. A revisão independente recuperou passagens primárias indexadas do prefácio e capítulos 7 e 10; abertura direta falhou. Não confundir esse modo com a leitura direta anterior atribuída à pesquisa."
      },
      {
        "title": "Robert Nozick’s Political Philosophy — Stanford Encyclopedia of Philosophy",
        "url": "https://plato.stanford.edu/entries/nozick-political/",
        "note": "Publicação/edição: Data de revisão não reconfirmada nesta leitura. Acesso em 09/10/2026. Leitura anterior atribuída à pesquisa: Passagens de§§ 2.1–2.4,3.3–3.4,4.1–4.4,5.1–5.2. Não leitura integral. Acesso em 09/10/2026. Usado para contrapontos e localização; não substitui passagens primárias."
      }
    ],
    "codings": [
      {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "relatedQuestionIds": [
          "poder_04",
          "poder_06",
          "poder_16"
        ],
        "claims": [
          {
            "sourceTitle": "Anarchy, State, and Utopia — transcrição digital, leitura delimitada 2026-10-09",
            "locator": "Preface, parágrafos iniciais; cap 10, Community and Nation",
            "statement": "Estado protege contra agressão e fraude, sem impor paternalismo ou moral privada.",
            "basis": "declaration",
            "publishedDate": "1974; transcrição de reimpressão com copyright1974 e linha de impressão02–05",
            "accessedDate": "2026-10-09"
          }
        ],
        "rationale": "Limite coercivo é central.",
        "uncertainty": "Admite proteção, proibições de risco e restrições voluntariamente contratadas.",
        "reviewedOn": "2026-10-09"
      },
      {
        "axis": "eco",
        "position": "strong-second",
        "confidence": "medium",
        "relatedQuestionIds": [
          "economia_05",
          "economia_06",
          "economia_18"
        ],
        "claims": [
          {
            "sourceTitle": "Anarchy, State, and Utopia — transcrição digital, leitura delimitada 2026-10-09",
            "locator": "cap 7, The Entitlement Theory e How Liberty Upsets Patterns; cap 10, Community and Nation",
            "statement": "Defende titularidade e produção privadas, permitindo comunidades voluntariamente coletivas.",
            "basis": "declaration",
            "publishedDate": "1974; transcrição de reimpressão com copyright1974 e linha de impressão02–05",
            "accessedDate": "2026-10-09"
          },
          {
            "sourceTitle": "Anarchy, State and Utopia, chapter 7",
            "locator": "Paragraph 111 inteiro; sobretudo parágrafos finais",
            "statement": "Retificação pode exigir transferências e Estado temporariamente ampliado.",
            "basis": "declaration",
            "publishedDate": "1974; excerto universitário sem data de hospedagem",
            "accessedDate": "2026-10-09"
          }
        ],
        "rationale": "Estrutura protege apropriação privada legítima.",
        "uncertainty": "Não legitima posses injustas nem exige capitalismo em toda comunidade.",
        "reviewedOn": "2026-10-09"
      },
      {
        "axis": "con",
        "position": "strong-second",
        "confidence": "medium",
        "relatedQuestionIds": [
          "controle_04",
          "controle_05",
          "controle_13"
        ],
        "claims": [
          {
            "sourceTitle": "Anarchy, State, and Utopia — transcrição digital, leitura delimitada 2026-10-09",
            "locator": "cap 7, abertura e How Liberty Upsets Patterns; cap 10, Community and Nation",
            "statement": "Rejeita alocação central e manutenção coerciva de padrões distributivos.",
            "basis": "declaration",
            "publishedDate": "1974; transcrição de reimpressão com copyright1974 e linha de impressão02–05",
            "accessedDate": "2026-10-09"
          }
        ],
        "rationale": "Coordenação voluntária é estruturante.",
        "uncertainty": "Retificação e organização comunitária consentida permanecem possíveis.",
        "reviewedOn": "2026-10-09"
      }
    ],
    "unknownAxisReasons": {
      "est": "Comunidades não definem federação.",
      "rep": "Não fixa sistema eleitoral.",
      "imi": "Diversidade comunitária não resolve imigração.",
      "dip": "Autodefesa não basta.",
      "int": "Sem política externa suficiente.",
      "com": "Trocas não definem tarifas.",
      "rel": "Comunidades não especificam Estado–religião.",
      "mor": "Consentimento não determina costumes.",
      "tec": "Experimentos mentais não definem política tecnológica."
    },
    "caveats": "Excertos primários não livro integral. Patentes limitadas e proteção estatal compartilhadas com Rand; prova de independência e duração limitam a exceção. REP é prospectivo: defesa de Estado mínimo não fixa por si o sistema eleitoral. Retificação torna falsa uma leitura de proteção irrestrita de toda posse existente. A pesquisa qualitativa de seleção não certifica, por si, os 12 eixos. Lacunas não equivalem a neutralidade. Codificação documental de 09/10/2026: Três eixos codificados na obra de 1974, por transcrição e excerto universitário delimitados. Retificação de injustiças pode exigir transferências e Estado temporariamente ampliado; comunidades coletivas voluntárias permanecem possíveis. Proteção contra agressão e fraude e restrições de risco limitam a inferência de liberdade. Não descreve toda tradição libertária nem prática implementada. Âncoras e faixas são juízos editoriais, não medições ou respostas imputadas ao questionário. Eixos não documentados permanecem desconhecidos."
  },
  {
    "before": {
      "id": "ideology-georgism",
      "category": "ideology",
      "kind": "ideology",
      "name": "Georgismo (George, 1879)",
      "period": "Progress and Poverty, 1879",
      "vec": {
        "est": 50,
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
      "rationale": "Liberdade econômica com apropriação comum da renda da terra, distinguindo-a dos produtos do trabalho e do capital. Tributação do valor fundiário substitui outros impostos, mantendo títulos privados formais.",
      "caveats": "O livro é uma proposta de reforma fundiária e tributária, não programa completo sobre democracia, defesa ou costumes. A posição fiscal não equivale a propriedade pública generalizada. Georgismo é um programa geral de propriedade e distribuição, não apenas preferência por um imposto; posições constitucionais/migratórias precisam de textos adicionais. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
      "sources": [
        {
          "title": "Progress and Poverty — Project Gutenberg",
          "url": "https://www.gutenberg.org/ebooks/55308",
          "note": "Obra primária de Henry George sobre propriedade da terra e imposto único."
        },
        {
          "title": "Progress and Poverty",
          "url": "https://www.econlib.org/library/YPDBooks/George/grgPP.html?chapter_num=35",
          "note": "Publicação: 1879. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: Livro VIII, cap. 2, How Equal Rights to the Land May Be Asserted and Secured. Leitura efetiva declarada na pesquisa: Capítulo VIII.2 em texto lido. Edição de 1912; não confundir com a adaptação abreviada de Bob Drake (2006)."
        }
      ],
      "evidence": {},
      "axisEvidence": {},
      "coding": {}
    },
    "addedSources": [
      {
        "title": "Progress and Poverty — Livro VIII, capítulo 2 (Econlib)",
        "url": "https://www.econlib.org/library/YPDBooks/George/grgPP.html?chapter_num=35",
        "note": "Leitura em 09/10/2026. Capítulo já presente na seleção; não houve cotejo da primeira impressão de 1879. Escopo declarado: Corpo completo do capítulo VIII.2, linhas de extração 138–175, e metadados da edição. A introdução de Henry George Jr. não foi usada como posição do autor. Versão: 1879; edição Doubleday, Page & Co. de 1912"
      },
      {
        "title": "Progress and Poverty — Livro IX, capítulo 1 (Econlib)",
        "url": "https://www.econlib.org/library/YPDBooks/George/grgPP.html?chapter_num=38",
        "note": "Leitura em 09/10/2026. Usado para mecanismo fiscal e comércio; efeitos previstos não são efeitos empiricamente verificados. Escopo declarado: Abertura do capítulo IX.1, sobretudo os parágrafos sobre impostos produtivos e alfândegas, linhas 153–165; não capítulo integral. Versão: 1879; edição de 1912"
      },
      {
        "title": "Progress and Poverty — Livro IX, capítulo 4 (Econlib)",
        "url": "https://www.econlib.org/library/YPDBooks/George/grgPP.html?chapter_num=41",
        "note": "Leitura em 09/10/2026. Propostas e previsões são distinguidas; não tratar consequências esperadas como prova de implementação. Escopo declarado: Parágrafos iniciais, linhas 138–152, sobre simplificação do governo e serviços públicos. Não leitura integral. Versão: 1879; edição de 1912"
      }
    ],
    "codings": [
      {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "relatedQuestionIds": [
          "economia_03"
        ],
        "claims": [
          {
            "sourceTitle": "Progress and Poverty — Livro VIII, capítulo 2 (Econlib)",
            "locator": "Livro VIII.2, linhas138–175; método/títulos/improvements149–165 e regra fiscal166–168",
            "statement": "Socializa renda fundiária sem abolir títulos formais nem melhorias privadas.",
            "basis": "declaration",
            "publishedDate": "1879; edição Doubleday, Page & Co. de 1912",
            "accessedDate": "2026-10-09"
          },
          {
            "sourceTitle": "Progress and Poverty — Livro IX, capítulo 4 (Econlib)",
            "locator": "Livro IX.4, parágrafos sobre telégrafos, ferrovias e receitas comuns",
            "statement": "Admite infraestrutura e serviços públicos financiados pela renda comum.",
            "basis": "declaration",
            "publishedDate": "1879; edição de 1912",
            "accessedDate": "2026-10-09"
          }
        ],
        "rationale": "Renda de toda a terra comum e provisão coletiva coexistem com capital privado.",
        "uncertainty": "Preserva capital produtivo privado. Relações a perguntas são conceituais; nenhuma resposta individual é imputada.",
        "reviewedOn": "2026-10-09"
      },
      {
        "axis": "con",
        "position": "moderate-second",
        "confidence": "medium",
        "relatedQuestionIds": [
          "controle_04",
          "controle_06"
        ],
        "claims": [
          {
            "sourceTitle": "Progress and Poverty — Livro IX, capítulo 1 (Econlib)",
            "locator": "Livro IX.1, linhas153–165; produção e troca em geral",
            "statement": "Substitui tributos produtivos pelo fundiário, liberando produção e troca.",
            "basis": "declaration",
            "publishedDate": "1879; edição de 1912",
            "accessedDate": "2026-10-09"
          },
          {
            "sourceTitle": "Progress and Poverty — Livro IX, capítulo 4 (Econlib)",
            "locator": "Livro IX.4, linhas147–150; previsão condicional de funções cooperativas",
            "statement": "Rejeita governo diretivo e repressivo, admitindo funções cooperativas.",
            "basis": "declaration",
            "publishedDate": "1879; edição de 1912",
            "accessedDate": "2026-10-09"
          }
        ],
        "rationale": "Coordenação produtiva predominantemente livre.",
        "uncertainty": "Tributação fundiária e serviços públicos permanecem. Relações a perguntas são conceituais; nenhuma resposta individual é imputada.",
        "reviewedOn": "2026-10-09"
      },
      {
        "axis": "com",
        "position": "strong-second",
        "confidence": "high",
        "relatedQuestionIds": [
          "comercio_08"
        ],
        "claims": [
          {
            "sourceTitle": "Progress and Poverty — Livro IX, capítulo 1 (Econlib)",
            "locator": "Livro IX.1,159–164, alfândegas160",
            "statement": "Condena barreiras alfandegárias dentro da abolição de tributos sobre trocas.",
            "basis": "declaration",
            "publishedDate": "1879; edição de 1912",
            "accessedDate": "2026-10-09"
          },
          {
            "sourceTitle": "Progress and Poverty — Livro VIII, capítulo 2 (Econlib)",
            "locator": "Livro VIII.2,166–168, regra fiscal geral",
            "statement": "Prescreve abolir todos os tributos salvo os incidentes sobre o valor da terra.",
            "basis": "declaration",
            "publishedDate": "1879; edição Doubleday, Page & Co. de 1912",
            "accessedDate": "2026-10-09"
          }
        ],
        "rationale": "Abertura deriva de regra fiscal explícita.",
        "uncertainty": "Não importar o livro posterior Protection or Free Trade. Relações a perguntas são conceituais; nenhuma resposta individual é imputada.",
        "reviewedOn": "2026-10-09"
      }
    ],
    "unknownAxisReasons": {
      "est": "As passagens efetivamente examinadas não estabelecem a orientação geral deste eixo; não se infere posição pela identidade da doutrina.",
      "rep": "As passagens efetivamente examinadas não estabelecem a orientação geral deste eixo; não se infere posição pela identidade da doutrina.",
      "pod": "As passagens efetivamente examinadas não estabelecem a orientação geral deste eixo; não se infere posição pela identidade da doutrina.",
      "imi": "As passagens efetivamente examinadas não estabelecem a orientação geral deste eixo; não se infere posição pela identidade da doutrina.",
      "dip": "As passagens efetivamente examinadas não estabelecem a orientação geral deste eixo; não se infere posição pela identidade da doutrina.",
      "int": "As passagens efetivamente examinadas não estabelecem a orientação geral deste eixo; não se infere posição pela identidade da doutrina.",
      "rel": "As passagens efetivamente examinadas não estabelecem a orientação geral deste eixo; não se infere posição pela identidade da doutrina.",
      "mor": "As passagens efetivamente examinadas não estabelecem a orientação geral deste eixo; não se infere posição pela identidade da doutrina.",
      "tec": "As passagens efetivamente examinadas não estabelecem a orientação geral deste eixo; não se infere posição pela identidade da doutrina."
    },
    "caveats": "O livro é uma proposta de reforma fundiária e tributária, não programa completo sobre democracia, defesa ou costumes. A posição fiscal não equivale a propriedade pública generalizada. Georgismo é um programa geral de propriedade e distribuição, não apenas preferência por um imposto; posições constitucionais/migratórias precisam de textos adicionais. A pesquisa qualitativa de seleção não certifica, por si, os 12 eixos. Lacunas não equivalem a neutralidade. Codificação documental de 09/10/2026: Três eixos codificados somente em Progress and Poverty (1879), pela edição de 1912 em transcrição. Renda fundiária comum, capital e melhorias privados e serviços públicos coexistem; não se importam prescrições de Protection or Free Trade. Âncoras e faixas são juízos editoriais, não medições ou respostas imputadas ao questionário. Eixos não documentados permanecem desconhecidos."
  },
  {
    "before": {
      "id": "ideology-program-freiburg-ordoliberalism-1936-1952",
      "kind": "ideology",
      "category": "ideology",
      "name": "Ordoliberalismo de Freiburg (Eucken)",
      "period": "Escola de Freiburg, programa de Eucken/Böhm/Großmann-Doerth e princípios de Eucken (1936–1952).",
      "rationale": "A concorrência depende de uma constituição econômica que impeça concentrações de poder privado e estatal. Regras gerais, antitruste, estabilidade monetária e responsabilidade patrimonial; distinção entre ordenar o mercado e dirigir resultados.",
      "caveats": "Há variedades internas; não identificar automaticamente ordoliberalismo, neoliberalismo e toda economia social de mercado. Excertos de Eucken estão traduzidos por portal; conferir alemão antes de pontuar nuances. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
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
      ],
      "vec": {
        "est": 50,
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
      "evidence": {},
      "axisEvidence": {},
      "coding": {}
    },
    "addedSources": [
      {
        "title": "Grundsätze der Wirtschaftspolitik — excertos alemães de Eucken no Ordnungspolitisches Portal",
        "url": "https://www.ordnungspolitisches-portal.com/v%C3%A4ter-der-ordnungspolitik",
        "note": "Leitura em 09/10/2026. Locadores do portal: cap. XVI, pp. 254–291; XVII, pp. 291–304; XVIII, pp. 304–324. As falas de Böhm 1958, Erhard e Hayek não foram importadas para o recorte de 1936–1952. Escopo declarado: Somente seção Walter Eucken: princípios constitutivos 1–7, reguladores 1–4 e interdependência, linhas 135–204. Alemão cotejado com a tradução inglesa do mesmo portal; não é cotejo independente nem fac-símile. Versão: Obra de 1952; excertos atribuídos à 6ª edição revista, 1990"
      },
      {
        "title": "Grundsätze der Wirtschaftspolitik — tradução inglesa dos mesmos excertos",
        "url": "https://www.ordnungspolitisches-portal.com/en/vater-der-ordnungspolitik",
        "note": "Leitura em 09/10/2026. Não conta como segunda fonte independente. Escopo declarado: Seção Walter Eucken, linhas 132–202. Tradução cotejada com o alemão republicado; não livro integral. Versão: 1952/1990; tradução do portal sem autoria/data confirmadas"
      },
      {
        "title": "Walter Eucken and the Freiburg School of Ordoliberalism — Walter Eucken Institute",
        "url": "https://www.eucken.de/en/institute/walter-eucken-and-the-freiburg-school-of-ordoliberalism/",
        "note": "Leitura em 09/10/2026; confirmação de identidade e escopo, não certificação dos escores. Escopo declarado: Texto institucional visível sobre Eucken, Böhm, Großmann-Doerth e a escola, linhas 7–32. Versão: Sem data visível"
      },
      {
        "title": "The EU’s neoliberal constitutionalism(s) — seção 2.A",
        "url": "https://www.cambridge.org/core/journals/european-law-open/article/eus-neoliberal-constitutionalisms/8E75415A504DF0666E804CD61A8AE50D",
        "note": "Leitura em 09/10/2026. A interpretação contemporânea apenas coteja; a classificação numérica dos princípios diverge do portal e não foi usada para acrescentar códigos. Escopo declarado: Seção 2.A, linhas 516–535: manifesto de 1936, ordem/processo e princípios. Não artigo integral nem fontes originais citadas. Versão: 2025, conforme registro da seleção; data editorial não reconfirmada"
      }
    ],
    "codings": [
      {
        "axis": "eco",
        "position": "moderate-second",
        "confidence": "medium",
        "relatedQuestionIds": [
          "economia_05",
          "economia_13"
        ],
        "claims": [
          {
            "sourceTitle": "Grundsätze der Wirtschaftspolitik — excertos alemães de Eucken no Ordnungspolitisches Portal",
            "locator": "Eucken, cap. XVI, princípio Privateigentum, pp. 254–291",
            "statement": "Propriedade produtiva privada depende de concorrência que limite poder monopolista.",
            "basis": "declaration",
            "publishedDate": "Obra de 1952; excertos atribuídos à 6ª edição revista, 1990",
            "accessedDate": "2026-10-09"
          }
        ],
        "rationale": "Primazia privada condicionada.",
        "uncertainty": "Admite restrição patrimonial antimonopolista. Relações a perguntas são conceituais; nenhuma resposta individual é imputada.",
        "reviewedOn": "2026-10-09"
      },
      {
        "axis": "con",
        "position": "moderate-second",
        "confidence": "medium",
        "relatedQuestionIds": [
          "controle_02",
          "controle_04",
          "controle_09"
        ],
        "claims": [
          {
            "sourceTitle": "Grundsätze der Wirtschaftspolitik — excertos alemães de Eucken no Ordnungspolitisches Portal",
            "locator": "Princípios Grundprinzip, Vertragsfreiheit e reguladores; caps. XVI–XVII",
            "statement": "Coordena por preços e contratos, rejeitando comandos produtivos e controles gerais.",
            "basis": "declaration",
            "publishedDate": "Obra de 1952; excertos atribuídos à 6ª edição revista, 1990",
            "accessedDate": "2026-10-09"
          }
        ],
        "rationale": "Mercado dentro de ordem jurídica ativa.",
        "uncertainty": "Mantém correções fiscais, ambientais e antimonopólio. Relações a perguntas são conceituais; nenhuma resposta individual é imputada.",
        "reviewedOn": "2026-10-09"
      },
      {
        "axis": "com",
        "position": "moderate-second",
        "confidence": "medium",
        "relatedQuestionIds": [
          "comercio_07",
          "comercio_08"
        ],
        "claims": [
          {
            "sourceTitle": "Grundsätze der Wirtschaftspolitik — excertos alemães de Eucken no Ordnungspolitisches Portal",
            "locator": "Cap. XVI, Grundprinzip e Offene Märkte",
            "statement": "Rejeita proibições de importação e exige mercados abertos à concorrência.",
            "basis": "declaration",
            "publishedDate": "Obra de 1952; excertos atribuídos à 6ª edição revista, 1990",
            "accessedDate": "2026-10-09"
          }
        ],
        "rationale": "Abertura é princípio constitutivo.",
        "uncertainty": "Excertos não esgotam exceções comerciais. Relações a perguntas são conceituais; nenhuma resposta individual é imputada.",
        "reviewedOn": "2026-10-09"
      }
    ],
    "unknownAxisReasons": {
      "est": "As passagens efetivamente examinadas não estabelecem a orientação geral deste eixo; não se infere posição pela identidade da doutrina.",
      "rep": "As passagens efetivamente examinadas não estabelecem a orientação geral deste eixo; não se infere posição pela identidade da doutrina.",
      "pod": "As passagens efetivamente examinadas não estabelecem a orientação geral deste eixo; não se infere posição pela identidade da doutrina.",
      "imi": "As passagens efetivamente examinadas não estabelecem a orientação geral deste eixo; não se infere posição pela identidade da doutrina.",
      "dip": "As passagens efetivamente examinadas não estabelecem a orientação geral deste eixo; não se infere posição pela identidade da doutrina.",
      "int": "As passagens efetivamente examinadas não estabelecem a orientação geral deste eixo; não se infere posição pela identidade da doutrina.",
      "rel": "As passagens efetivamente examinadas não estabelecem a orientação geral deste eixo; não se infere posição pela identidade da doutrina.",
      "mor": "As passagens efetivamente examinadas não estabelecem a orientação geral deste eixo; não se infere posição pela identidade da doutrina.",
      "tec": "As passagens efetivamente examinadas não estabelecem a orientação geral deste eixo; não se infere posição pela identidade da doutrina."
    },
    "caveats": "Há variedades internas; não identificar automaticamente ordoliberalismo, neoliberalismo e toda economia social de mercado. Excertos de Eucken estão traduzidos por portal; conferir alemão antes de pontuar nuances. A pesquisa qualitativa de seleção não certifica, por si, os 12 eixos. Lacunas não equivalem a neutralidade. Codificação documental de 09/10/2026: Três eixos codificados nos excertos de Eucken da obra de 1952, atribuídos à edição revista de 1990. Tradução e alemão do mesmo portal não são fontes independentes. Não se transportam falas de Böhm, Erhard ou Hayek; concorrência exige correções jurídicas, fiscais, ambientais e antimonopólio. Âncoras e faixas são juízos editoriais, não medições ou respostas imputadas ao questionário. Eixos não documentados permanecem desconhecidos."
  },
  {
    "before": {
      "id": "ideology-civic-republicanism",
      "kind": "ideology",
      "category": "ideology",
      "name": "Republicanismo da não dominação (Pettit, 2012)",
      "period": "Philip Pettit, modelo de On the People’s Terms (2012).",
      "rationale": "Liberdade significa não depender de poder arbitrário, inclusive quando ninguém interfere efetivamente. Controle popular igual, contestação cidadã e canais protegidos contra dominação privada ou governamental.",
      "caveats": "Não equivale a toda tradição republicana nem fixa uma política econômica única. Primária lida apenas em sinopse de capítulo. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
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
      ],
      "vec": {
        "est": 50,
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
      "evidence": {},
      "axisEvidence": {},
      "coding": {}
    },
    "addedSources": [
      {
        "title": "On the People’s Terms — capítulo 5, Democratic control (sinopse editorial)",
        "url": "https://www.cambridge.org/core/books/abs/on-the-peoples-terms/democratic-control/A569C01A3E111B4CA3C53EB3834AEEF4",
        "note": "Leitura em 09/10/2026. Separar sinopse do capítulo integral. Escopo declarado: Sinopse completa visível, linhas 466–470, e metadados. O texto integral das pp. 239–292 não foi acessado. Versão: Livro de 2012; capítulo online em 2013-01-05"
      },
      {
        "title": "Legitimacy and Justice in Republican Perspective — Philip Pettit",
        "url": "https://ppettit.scholar.princeton.edu/document/1771",
        "note": "Leitura em 09/10/2026. Cópia hospedada pelo autor em Princeton. Nota 1 diz que o artigo deriva da conferência de 2012 e se apoia fortemente no capítulo 3 do livro de 2012; não importar obra posterior. Escopo declarado: Resumo e nota 1 da p. 59; passagens das pp. 65–74 e 79–81 (PDF 7–16 e 21–23). Não artigo integral. Versão: 2012; Current Legal Problems 65, pp. 59–82; DOI 10.1093/clp/cus016"
      },
      {
        "title": "On the People’s Terms — capítulo 2, Social justice (sinopse editorial)",
        "url": "https://www.cambridge.org/core/books/abs/on-the-peoples-terms/social-justice/2BF749A19B8D5A6944D38577EDDFF305",
        "note": "Leitura em 09/10/2026. Usada para delimitar a população abrangida; não prova de um regime econômico específico. Escopo declarado: Sinopse visível, linhas 476–479; não texto integral das pp. 75–129. Versão: Livro de 2012; capítulo online em 2013-01-05"
      }
    ],
    "codings": [
      {
        "axis": "rep",
        "position": "strong-first",
        "confidence": "high",
        "relatedQuestionIds": [
          "representacao_03",
          "representacao_19"
        ],
        "claims": [
          {
            "sourceTitle": "On the People’s Terms — capítulo 5, Democratic control (sinopse editorial)",
            "locator": "Sinopse completa do cap. 5; pp. editoriais 239–292, texto integral não lido",
            "statement": "Exige controle popular igual, eficaz, independente e aberto à contestação.",
            "basis": "declaration",
            "publishedDate": "Livro de 2012; capítulo online em 2013-01-05",
            "accessedDate": "2026-10-09"
          },
          {
            "sourceTitle": "Legitimacy and Justice in Republican Perspective — Philip Pettit",
            "locator": "Artigo2012, pp.79–81, canais eleitorais/contestatórios e poder popular; linhas763–849",
            "statement": "Voto e contestação devem ser acessíveis sem captura por riqueza.",
            "basis": "declaration",
            "publishedDate": "2012; Current Legal Problems 65, pp. 59–82; DOI 10.1093/clp/cus016",
            "accessedDate": "2026-10-09"
          }
        ],
        "rationale": "Controle democrático é constitutivo.",
        "uncertainty": "Não exige decisão direta permanente. Relações a perguntas são conceituais; nenhuma resposta individual é imputada.",
        "reviewedOn": "2026-10-09"
      },
      {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "relatedQuestionIds": [],
        "claims": [
          {
            "sourceTitle": "Legitimacy and Justice in Republican Perspective — Philip Pettit",
            "locator": "Artigo2012, pp.71–74, liberdades fundamentais, proteção e não dominação; linhas431–597",
            "statement": "Liberdades básicas devem ser protegidas igualmente contra poder arbitrário.",
            "basis": "declaration",
            "publishedDate": "2012; Current Legal Problems 65, pp. 59–82; DOI 10.1093/clp/cus016",
            "accessedDate": "2026-10-09"
          }
        ],
        "rationale": "Limita dominação pessoal e pública.",
        "uncertainty": "Coerção controlada pode ser legítima. Relações a perguntas são conceituais; nenhuma resposta individual é imputada.",
        "reviewedOn": "2026-10-09"
      }
    ],
    "unknownAxisReasons": {
      "est": "As passagens efetivamente examinadas não estabelecem a orientação geral deste eixo; não se infere posição pela identidade da doutrina.",
      "imi": "As passagens efetivamente examinadas não estabelecem a orientação geral deste eixo; não se infere posição pela identidade da doutrina.",
      "dip": "As passagens efetivamente examinadas não estabelecem a orientação geral deste eixo; não se infere posição pela identidade da doutrina.",
      "int": "As passagens efetivamente examinadas não estabelecem a orientação geral deste eixo; não se infere posição pela identidade da doutrina.",
      "eco": "As passagens efetivamente examinadas não estabelecem a orientação geral deste eixo; não se infere posição pela identidade da doutrina.",
      "con": "As passagens efetivamente examinadas não estabelecem a orientação geral deste eixo; não se infere posição pela identidade da doutrina.",
      "com": "As passagens efetivamente examinadas não estabelecem a orientação geral deste eixo; não se infere posição pela identidade da doutrina.",
      "rel": "As passagens efetivamente examinadas não estabelecem a orientação geral deste eixo; não se infere posição pela identidade da doutrina.",
      "mor": "As passagens efetivamente examinadas não estabelecem a orientação geral deste eixo; não se infere posição pela identidade da doutrina.",
      "tec": "As passagens efetivamente examinadas não estabelecem a orientação geral deste eixo; não se infere posição pela identidade da doutrina."
    },
    "caveats": "Não equivale a toda tradição republicana nem fixa uma política econômica única. Na pesquisa de seleção anterior, a leitura primária do livro se limitou à sinopse de capítulo; nesta rodada também foram examinadas passagens delimitadas do artigo autoral de 2012. A pesquisa qualitativa de seleção não certifica, por si, os 12 eixos. Lacunas não equivalem a neutralidade. Codificação documental de 09/10/2026: Dois eixos codificados em sinopses editoriais do livro de 2012 e passagens do artigo de 2012. Sinopse não equivale a capítulo integral; controle popular não exige votação direta permanente, e coerção controlada pode ser legítima. Não fixa uma política econômica única. Âncoras e faixas são juízos editoriais, não medições ou respostas imputadas ao questionário. Eixos não documentados permanecem desconhecidos."
  }
] as unknown as Definition[];

type ExtendedReference = ReferenceEntry & { unknownAxisReasons?: Partial<Record<AxisKey,string>> };
function buildPost(entry: ReferenceEntry, definition: Definition): ReferenceEntry {
  const sources = [...entry.sources, ...definition.addedSources];
  const vec = { ...entry.vec }, evidence = { ...entry.evidence };
  const axisEvidence = { ...entry.axisEvidence }, coding = { ...entry.coding };
  for (const input of definition.codings) {
    const value = codeReferenceAxis(input, sources);
    vec[input.axis] = value.value; evidence[input.axis] = value.evidence;
    axisEvidence[input.axis] = value.axisEvidence!; coding[input.axis] = value.coding;
  }
  return { ...entry, sources, vec, evidence, axisEvidence, coding, caveats: definition.caveats,
    unknownAxisReasons: { ...definition.unknownAxisReasons } } as ExtendedReference;
}
export const parentIdeologies20261009ExpectedPosts = parentIdeologies20261009Definitions.map(definition => buildPost(structuredClone(definition.before), definition));
export function reconcileParentIdeologies20261009(entry: ReferenceEntry): ReferenceEntry {
  const index = parentIdeologies20261009Definitions.findIndex(definition => definition.before.id === entry.id);
  if (index < 0) return entry;
  if (JSON.stringify(entry) === JSON.stringify(parentIdeologies20261009ExpectedPosts[index])) return entry;
  const definition = parentIdeologies20261009Definitions[index];
  if (JSON.stringify(entry) !== JSON.stringify(definition.before)) throw new Error(`Selected ideology baseline diverged for ${entry.id}; preserve later work and review before integrating.`);
  return buildPost(entry, definition);
}
