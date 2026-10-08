import type {ReferenceEntry,ReferenceSource} from './references';
import {codeReferenceAxis,type ReferenceAxisCoding} from '../lib/reference-coding';
type HistoricalSnapshot=ReferenceEntry & {unknownAxisReasons?:Partial<Record<'est'|'rep'|'pod'|'imi'|'dip'|'int'|'eco'|'con'|'com'|'rel'|'mor'|'tec',string>>;[field:string]:unknown};
// Author candidate only. No imports into the catalog; independent whole/literal review pending.
export const native16HistoricalCountriesBefore:HistoricalSnapshot[] = [
  {
    "id": "brazil-estado-novo-1937",
    "kind": "country",
    "category": "historical-country",
    "name": "Brasil — Estado Novo",
    "period": "Estado Novo sob Vargas, 10/11/1937–29/10/1945; recorte normativo: carta original de 1937 e disposições transitórias.",
    "vec": {
      "est": 40,
      "rep": 20,
      "pod": 80,
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
    "rationale": "Carta centraliza governo e legislação no Executivo durante a transição, com intervenção provincial e garantias religiosas limitadas.",
    "caveats": "O texto original de 1937 não demonstra aplicação uniforme nem equivale às alterações de 1945. Federação e poderes locais formais coexistem com centralização transitória. Ensino religioso facultativo é contraponto ao desenho secular. Não se infere toda a economia, cultura ou planejamento por cláusulas isoladas.",
    "sources": [
      {
        "title": "Getúlio Vargas — FGV CPDOC",
        "url": "https://cpdoc.fgv.br/biografias/getulio-vargas",
        "note": "Pesquisa histórica sobre golpe, dissolução do Congresso e dos partidos e intervenção estatal entre 1937 e 1945."
      },
      {
        "title": "Constituição de 1937 — FGV CPDOC",
        "url": "https://cpdoc.fgv.br/sites/default/files/brasilia/dhbb/Get%C3%BAlio%20Vargas.pdf",
        "note": "Documento e análise sobre centralização, estado de emergência, economia corporativa e aplicação incompleta da carta constitucional."
      },
      {
        "title": "Constituição de 1937 — Presidência, texto com versões anotadas",
        "url": "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao37.htm",
        "note": "Cláusulas originais de 1937 explicitamente separadas das redações e revogações de 1938/1945; texto consolidado não é tomado como edição original integral."
      },
      {
        "title": "Constituição1937 — Câmara, publicação original",
        "url": "https://www2.camara.leg.br/legin/fed/consti/1930-1939/constituicao-35093-10-novembro-1937-532849-publicacaooriginal-15246-pl.html",
        "note": "Texto primário oficial efetivamente aberto e passagens1–56/57–65/115–122/130–154/161–187 lidas nos localizadores usados e contrapostos. Republicação textual da publicação original, não scan visual ou certificado de execução integral. Não alínea168e1938 ou alterações1945."
      },
      {
        "title": "Vargas e o Estado Novo — Biblioteca da Presidência",
        "url": "https://www.gov.br/secretariageral/pt-br/centrais-de-conteudo/biblioteca-da-pr/galeria-dos-ex-presidentes/Vargas/biografia-completa",
        "note": "Parágrafos institucionais realmente lidos: carta e dissolução do Congresso em 10/11/1937; deposição de Vargas em 29/10/1945. Relato atribuído ao Arquivo Nacional; não prova continuidade de cada cláusula até o fim do governo."
      }
    ],
    "evidence": {
      "rep": "high",
      "pod": "high",
      "est": "medium",
      "rel": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constituição de 1937 — Presidência, texto com versões anotadas"
        ],
        "rationale": "Dissolução representativa com poder legislativo presidencial sustenta autocracia forte no dispositivo de fundação. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Órgãos eletivos futuros são promessa condicionada; texto não prova sozinho se plebiscito ou todas as eleições ocorreram."
      },
      "pod": {
        "sourceTitles": [
          "Constituição de 1937 — Presidência, texto com versões anotadas"
        ],
        "rationale": "Amplitude excepcional de coerção e barreira judicial sustentam segurança/restrição forte no desenho ativado pela carta. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Somente competências expressas, não contagem de prisões ou censura efetiva; artigo186 foi revogado em1945. Não usamos alínea168(e)acrescentada em1938."
      },
      "est": {
        "sourceTitles": [
          "Constituição1937 — Câmara, publicação original"
        ],
        "rationale": "Hierarquia interventora e imposição executiva do arranjo transitório sustentam centralização moderada normativa. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Federação3, poderes estaduais residuais21, tributos23 e autonomia local26 permanecem; não prova administração real uniforme ou Estado constitucionalmente unitário."
      },
      "rel": {
        "sourceTitles": [
          "Constituição1937 — Câmara, publicação original"
        ],
        "rationale": "Regra estatal geral de ausência de estabelecimento/custeio e pluralidade religiosa sustenta secularismo moderado. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Direito comum/ordem pública/bons costumes restringem;133admite ensino religioso sem obrigação docente ou frequência compulsória. Não separação absoluta ou prática efetiva."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "strong-second",
        "confidence": "high",
        "rationale": "Dissolução representativa com poder legislativo presidencial sustenta autocracia forte no dispositivo de fundação.",
        "uncertainty": "Órgãos eletivos futuros são promessa condicionada; texto não prova sozinho se plebiscito ou todas as eleições ocorreram.",
        "reviewedOn": "2026-10-07",
        "claims": [
          {
            "sourceTitle": "Constituição de 1937 — Presidência, texto com versões anotadas",
            "locator": "Arts. 178, 180–181 e 187",
            "statement": "Câmaras nacionais/estaduais/municipais são dissolvidas; Presidente legisla enquanto Parlamento não reúne e marca eleições condicionadas ao plebiscito.",
            "basis": "norm",
            "publishedDate": "1937-11-10; cláusulas originais identificadas nas anotações",
            "accessedDate": "2026-10-07"
          }
        ],
        "version": "editorial-ordinal-v1",
        "value": 20,
        "range": [
          10,
          25
        ]
      },
      "pod": {
        "axis": "pod",
        "position": "strong-first",
        "confidence": "high",
        "rationale": "Amplitude excepcional de coerção e barreira judicial sustentam segurança/restrição forte no desenho ativado pela carta.",
        "uncertainty": "Somente competências expressas, não contagem de prisões ou censura efetiva; artigo186 foi revogado em1945. Não usamos alínea168(e)acrescentada em1938.",
        "reviewedOn": "2026-10-07",
        "claims": [
          {
            "sourceTitle": "Constituição de 1937 — Presidência, texto com versões anotadas",
            "locator": "Arts. 168(a–d), 170 e redação original de186",
            "statement": "Emergência é declarada para todo país e autoriza detenção, desterro, censura, suspensão de reunião e busca; atos de emergência não são conhecidos judicialmente.",
            "basis": "norm",
            "publishedDate": "1937-11-10; cláusulas originais identificadas nas anotações",
            "accessedDate": "2026-10-07"
          }
        ],
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
        "reviewedOn": "2026-10-08",
        "rationale": "Hierarquia interventora e imposição executiva do arranjo transitório sustentam centralização moderada normativa.",
        "uncertainty": "Federação3, poderes estaduais residuais21, tributos23 e autonomia local26 permanecem; não prova administração real uniforme ou Estado constitucionalmente unitário.",
        "claims": [
          {
            "sourceTitle": "Constituição1937 — Câmara, publicação original",
            "locator": "9/17–19/27/176/181; contrapontos3/21/23/26",
            "statement": "Presidente confirma governadores ou impõe intervenção; governadores outorgam cartas e legislam enquanto assembleias dissolvidas.",
            "basis": "norm",
            "publishedDate": "1937-11-10",
            "accessedDate": "2026-10-08"
          }
        ],
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
        "reviewedOn": "2026-10-08",
        "rationale": "Regra estatal geral de ausência de estabelecimento/custeio e pluralidade religiosa sustenta secularismo moderado.",
        "uncertainty": "Direito comum/ordem pública/bons costumes restringem;133admite ensino religioso sem obrigação docente ou frequência compulsória. Não separação absoluta ou prática efetiva.",
        "claims": [
          {
            "sourceTitle": "Constituição1937 — Câmara, publicação original",
            "locator": "32b/1224–5; contraponto133",
            "statement": "Estado não estabelece nem subvenciona cultos; culto livre e cemitérios seculares.",
            "basis": "norm",
            "publishedDate": "1937-11-10",
            "accessedDate": "2026-10-08"
          }
        ],
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
      "scope": "Cláusulas originais da carta de 1937 e regime transitório declarado; não imputa redações de 1945 a todo1937–1945."
    },
    "unknownAxisReasons": {
      "imi": "Sem passagem suficiente para direção global deste eixo;50desconhecido.",
      "dip": "Sem passagem suficiente para direção global deste eixo;50desconhecido.",
      "int": "Sem passagem suficiente para direção global deste eixo;50desconhecido.",
      "eco": "Sem passagem suficiente para direção global deste eixo;50desconhecido.",
      "con": "Organização corporativa não estabelece por si programa obrigatório de alocação geral.",
      "com": "Sem passagem suficiente para direção global deste eixo;50desconhecido.",
      "mor": "Sem passagem suficiente para direção global deste eixo;50desconhecido.",
      "tec": "Sem passagem suficiente para direção global deste eixo;50desconhecido."
    },
    "documentaryReview17": {
      "status": "author-reviewed-bounded-claims",
      "independentReview": "accepted-bounded-primary-and-identity",
      "reviewedOn": "2026-10-08",
      "scope": "Dois acréscimos est/rel aceitos pelo Root após revisão independente; rep/pod preservados exatamente. Eco/imi rejeitados por amplitude e preservados somente em pesquisa. Sem prática ou emendas posteriores certificadas."
    }
  },
  {
    "id": "venezuela-first-republic-1811",
    "name": "Venezuela — Primeira República federal",
    "aliases": [
      "Confederação Americana de Venezuela1811",
      "Primeira República venezuelana"
    ],
    "period": "Independência5/7/1811–capitulação1812; recorte normativo da carta21/12/1811",
    "rationale": "República independente em pacto provincial federal, anterior à restauração realista e às repúblicas revolucionárias seguintes.",
    "caveats": "Guerras, terremoto e concentração extraordinária posterior não são práticas deduzidas do texto; norma1811 não é média de1811–1812. Cotejo oficial integral da transcriçãoWikisource pendente. Sem econômico nacional imputado por propriedade ou auxílio social.",
    "sources": [
      {
        "title": "Carta federal venezuelana1811 — bases primárias, Wikisource",
        "url": "https://es.wikisource.org/wiki/Constituci%C3%B3n_Federal_para_los_Estados_de_Venezuela_(1811)/Preliminar",
        "note": "Pacto efetivamente lido: poderes não delegados e governos provinciais próprios; centro controla defesa, comércio e relações exteriores."
      },
      {
        "title": "Carta federal venezuelana1811 — religião, Wikisource",
        "url": "https://es.wikisource.org/wiki/Constituci%C3%B3n_Federal_para_los_Estados_de_Venezuela_(1811)/I",
        "note": "Art.1 efetivamente lido: exclusividade católica inclusive culto privado; não atenuada por paráfrase."
      },
      {
        "title": "Carta federal venezuelana1811 — direitos, Wikisource",
        "url": "https://es.wikisource.org/wiki/Constituci%C3%B3n_Federal_para_los_Estados_de_Venezuela_(1811)/VIII",
        "note": "Arts.158–184 realmente lidos: processo, tortura, imprensa condicionada, estrangeiros e assembleias qualificadas."
      },
      {
        "title": "Acta de independencia5/7/1811 — texto primário, Cervantes",
        "url": "https://cervantesvirtual.com/obra-visor/acta-de-independencia-5-de-julio-1811-0/html/84c4bf1a-ca2c-49bd-9364-df0e6daf94aa_2.html",
        "note": "Corpo final/assinatura5julho lidos; catálogo identifica Gaceta16julho1811 e cotejoAcademia1959, sem confundir data da edição digital."
      },
      {
        "title": "MPPRE — Bolívar e unidade americana",
        "url": "https://mppre.gob.ve/index.php/publicacion/1439-0",
        "note": "Corpo institucional retrospectivo efetivamente lido: primeira República perdida1812; apenas cronologia, não norma."
      },
      {
        "title": "Capitulación de San Mateo — Diccionario de Historia, FundaciónEmpresasPolar",
        "url": "https://bibliofep.fundacionempresaspolar.org/dhv/entradas/c/capitulacion-de-san-mateo/",
        "note": "Corpo retrospectivo lido: capitulação25/7/1812 encerraRepública; testemunho secundário explicitado, não original oficial."
      }
    ],
    "kind": "country",
    "category": "historical-country",
    "vec": {
      "est": 80,
      "rep": 50,
      "pod": 40,
      "imi": 40,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 20,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "est": "medium",
      "rel": "medium",
      "pod": "medium",
      "imi": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Carta federal venezuelana1811 — bases primárias, Wikisource"
        ],
        "rationale": "Reserva explícita de poderes e governo territorial próprio sustenta federalismo forte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Não presume soberania internacional separada ou execução em guerra; autoridade nacional dispõe de contribuições e leis gerais."
      },
      "rel": {
        "sourceTitles": [
          "Carta federal venezuelana1811 — religião, Wikisource"
        ],
        "rationale": "Exclusividade jurídica religiosa inclusive privada sustenta confessionalidade forte. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Norma não demonstra perseguição realmente executada ou crença de cada habitante."
      },
      "pod": {
        "sourceTitles": [
          "Carta federal venezuelana1811 — direitos, Wikisource"
        ],
        "rationale": "Garantias processuais e limite expresso à tortura sustentam direção moderada à liberdade no desenho. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Assembleias exigem autorização municipal e só sufragantes; imprensa responde por dogma/moral/ordem. Não é liberdade religiosa ou prática de guerra irrestrita."
      },
      "imi": {
        "sourceTitles": [
          "Carta federal venezuelana1811 — direitos, Wikisource"
        ],
        "rationale": "Admissão internacional explícita sustenta abertura moderada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Respeito religioso e autoridade são condições; culto privado alternativo proibido. Não presume cidadania/sufrágio universal ou multiculturalismo irrestrito."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "strong-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Carta federal venezuelana1811 — bases primárias, Wikisource",
            "locator": "Bases do pacto, parágrafos1–4",
            "statement": "Províncias retêm poderes não delegados e organizam governos/administração próprios; representação nacional e defesa/comércio geral são centrais.",
            "basis": "norm",
            "publishedDate": "1811-12-21",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Reserva explícita de poderes e governo territorial próprio sustenta federalismo forte.",
        "uncertainty": "Não presume soberania internacional separada ou execução em guerra; autoridade nacional dispõe de contribuições e leis gerais.",
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "rel": {
        "axis": "rel",
        "position": "strong-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Carta federal venezuelana1811 — religião, Wikisource",
            "locator": "CapítuloI,art.1",
            "statement": "Religião católica é única dos habitantes; representação nacional proíbe qualquer outro culto público ou privado e doutrina contrária.",
            "basis": "norm",
            "publishedDate": "1811-12-21",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Exclusividade jurídica religiosa inclusive privada sustenta confessionalidade forte.",
        "uncertainty": "Norma não demonstra perseguição realmente executada ou crença de cada habitante.",
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 20,
        "range": [
          10,
          25
        ]
      },
      "pod": {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Carta federal venezuelana1811 — direitos, Wikisource",
            "locator": "CapítuloVIII,arts.158–164,170–174,181–184",
            "statement": "Processo e defesa legal, presunção de inocência e proibição de tortura coexistem com busca legal, restrições por traição e imprensa condicionada ao dogma/moral cristã.",
            "basis": "norm",
            "publishedDate": "1811-12-21",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Garantias processuais e limite expresso à tortura sustentam direção moderada à liberdade no desenho.",
        "uncertainty": "Assembleias exigem autorização municipal e só sufragantes; imprensa responde por dogma/moral/ordem. Não é liberdade religiosa ou prática de guerra irrestrita.",
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "imi": {
        "axis": "imi",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Carta federal venezuelana1811 — direitos, Wikisource",
            "locator": "CapítuloVIII,art.169; contraponto capítuloI1",
            "statement": "Todos os estrangeiros podem ser recebidos com segurança de pessoa e bens, se respeitarem religião católica, independência e autoridades.",
            "basis": "norm",
            "publishedDate": "1811-12-21",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Admissão internacional explícita sustenta abertura moderada.",
        "uncertainty": "Respeito religioso e autoridade são condições; culto privado alternativo proibido. Não presume cidadania/sufrágio universal ou multiculturalismo irrestrito.",
        "reviewedOn": "2026-10-08",
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
      "reviewedOn": "2026-10-08",
      "independentReview": "accepted-bounded-primary-and-identity",
      "scope": "Passagens codificadas e cronologia cotejadas independentemente; prática histórica e todas as emendas não auditadas integralmente."
    },
    "unknownAxisReasons": {
      "rep": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "dip": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "int": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "eco": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "con": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "com": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "mor": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "tec": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação."
    }
  },
  {
    "id": "south-korea-rhee-government-1948",
    "name": "Coreia do Sul — governo de Syngman Rhee",
    "aliases": [
      "Coreia do Sul — primeira administração republicana1948–1960"
    ],
    "period": "15/08/1948–resignação formal27/04/1960; recorte Constituição original17/07/1948",
    "rationale": "Governo fundador anterior à revolução1960 e posterior juntaPark1961; inaugurado após formação institucional e encerrado pela resignação de Rhee. Normas fundadoras não representam toda prática autoritária do período.",
    "caveats": "Cinco propostas datadas da norma original coreana, sem média1948–60 ou emendas1952/54. Fonte oficial republica texto jurídico, não imagem de impressão1948; interpretação coreana não é tradução juramentada. CartaFRUS860 distingue formação5/8 de inauguração15/8. Nota310 confirma eleições1960 invalidadas e resignação27/4; não afirmar que toda Primeira República termina juridicamente nessa data. MOR/IMI desconhecidos, igualdade sexual ou filiação cultural isoladas não resgatam eixo inteiro.",
    "sources": [
      {
        "title": "Constituição coreana original17/7/1948 — Biblioteca da Assembleia Nacional",
        "url": "https://archives.nanet.go.kr/upload/namo/files/000003/%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%ED%97%8C%EB%B2%95(%ED%97%8C%EB%B2%95%EC%A0%9C1%ED%98%B8).pdf",
        "note": "Texto primário republicado oficial, PDF9p coreano com identificação1948/no1. Corpo efetivamente lido1–55/57–69/76–89/96–99 e encerramento. Não exame de imagem original1948 ou tradução juramentada. Portal LawGoKorea só shell em acesso direto, não usado como corpo certificado."
      },
      {
        "title": "FRUS1948 VI — telegrama860 com carta de Rhee",
        "url": "https://history.state.gov/historicaldocuments/frus1948v06/d860",
        "note": "Corpo efetivamente lido carta6/8/1948: formação5/8, eleição presidente20/7 pelo parlamento e lei de organização; erro May16 corrigido pelo editor paraMay10 preservado. Fonte primária comunicada não substitui leitura de todas as emendas."
      },
      {
        "title": "FRUS1948 VI — nota editorial870",
        "url": "https://history.state.gov/historicaldocuments/frus1948v06/d870",
        "note": "Nota completa efetivamente lida: cerimônia de inauguração do governo15/8/1948, distinta da formação5/8/eleição20/7."
      },
      {
        "title": "FRUS1958–1960 XVIII — nota editorial310",
        "url": "https://history.state.gov/historicaldocuments/frus1958-60v18/d310",
        "note": "Corpo completo da nota efetivamente lido: resolução parlamentar26/4 declara eleição15/3 inválida, resignação formal27/4/1960 e Huh Chung interino. Não confundir anúncio26/4 com entrega27/4 ou encerramento jurídico posterior da Primeira República."
      }
    ],
    "kind": "country",
    "category": "historical-country",
    "vec": {
      "est": 50,
      "rep": 60,
      "pod": 40,
      "imi": 50,
      "dip": 40,
      "int": 50,
      "eco": 60,
      "con": 50,
      "com": 50,
      "rel": 60,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "rep": "medium",
      "pod": "medium",
      "dip": "medium",
      "rel": "medium",
      "eco": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constituição coreana original17/7/1948 — Biblioteca da Assembleia Nacional"
        ],
        "rationale": "Representação eletiva renovável e responsabilidade constitucional sustentam democracia normativa moderada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Eleição presidencial indireta53, uma reeleição original55, poderes emergenciais57 e lei marcial64. Eleições15/3/1960 declaradas inválidas pela Assembleia noFRUS310: contraevidência concreta, não democracia praticada certificada."
      },
      "pod": {
        "sourceTitles": [
          "Constituição coreana original17/7/1948 — Biblioteca da Assembleia Nacional"
        ],
        "rationale": "Conjunto geral de garantias ordinárias sustenta liberdade normativa moderada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Mandado posterior permitido flagrante/fuga/prova9; lei limita direitos por ordem/bemestar28; deverdefesa30, ordens emergenciais57 e lei marcial64, exceções de publicidade83. Não presunção de inocência expressa ou repressão efetiva inexistente."
      },
      "dip": {
        "sourceTitles": [
          "Constituição coreana original17/7/1948 — Biblioteca da Assembleia Nacional"
        ],
        "rationale": "Renúncia geral constitucional à guerra agressiva sustenta pacifismo normativo moderado. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Defesa armada30/61 e guerra com consentimento parlamentar42/presidente59 permanecem; não neutralidade, ausência de GuerraCoreana1950–53 ou execução pacífica inferida."
      },
      "rel": {
        "sourceTitles": [
          "Constituição coreana original17/7/1948 — Biblioteca da Assembleia Nacional"
        ],
        "rationale": "Separação institucional explícita sustenta secularismo normativo moderado. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Direitos podem ser limitados por lei necessária à ordem/bemestar28; não ausência de participação religiosa, perseguição ou política confessional observada em toda administração."
      },
      "eco": {
        "sourceTitles": [
          "Constituição coreana original17/7/1948 — Biblioteca da Assembleia Nacional"
        ],
        "rationale": "Programa transversal nacional de propriedade pública em recursos, finanças e infraestrutura sustenta orientação pública moderada além de um operador isolado. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Concessões privadas85/87 permitidas por necessidade pública; propriedade privada15, empresas privadas18 e distribuição fundiária aos agricultores86 preservadas. Transferência de outros empreendimentos88 apenas autorizada por necessidade. Não estatística de propriedade executada ou planejamento geral imputado."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constituição coreana original17/7/1948 — Biblioteca da Assembleia Nacional",
            "locator": "25/31–33/46–47/53–55; contrapontos57/64 e FRUS310",
            "statement": "Parlamento escolhido por voto universal, direto, igual e secreto; mandato4anos, presidente eleito pelo Parlamento e impeachment.",
            "basis": "norm",
            "publishedDate": "1948-07-17",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Representação eletiva renovável e responsabilidade constitucional sustentam democracia normativa moderada.",
        "uncertainty": "Eleição presidencial indireta53, uma reeleição original55, poderes emergenciais57 e lei marcial64. Eleições15/3/1960 declaradas inválidas pela Assembleia noFRUS310: contraevidência concreta, não democracia praticada certificada.",
        "reviewedOn": "2026-10-08",
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
            "sourceTitle": "Constituição coreana original17/7/1948 — Biblioteca da Assembleia Nacional",
            "locator": "9–14/21–24/28/76–83; contrapontos28/30/57/64",
            "statement": "Liberdade pessoal, mandadojudicial com exceções, advogado imediato/revisão da prisão, privacidade, expressão e julgamento público com juízes independentes.",
            "basis": "norm",
            "publishedDate": "1948-07-17",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Conjunto geral de garantias ordinárias sustenta liberdade normativa moderada.",
        "uncertainty": "Mandado posterior permitido flagrante/fuga/prova9; lei limita direitos por ordem/bemestar28; deverdefesa30, ordens emergenciais57 e lei marcial64, exceções de publicidade83. Não presunção de inocência expressa ou repressão efetiva inexistente.",
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "dip": {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constituição coreana original17/7/1948 — Biblioteca da Assembleia Nacional",
            "locator": "6; contrapontos30/42/59/61",
            "statement": "República rejeita toda guerra agressiva e atribui às forças armadas defesa territorial.",
            "basis": "norm",
            "publishedDate": "1948-07-17",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Renúncia geral constitucional à guerra agressiva sustenta pacifismo normativo moderado.",
        "uncertainty": "Defesa armada30/61 e guerra com consentimento parlamentar42/presidente59 permanecem; não neutralidade, ausência de GuerraCoreana1950–53 ou execução pacífica inferida.",
        "reviewedOn": "2026-10-08",
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
            "sourceTitle": "Constituição coreana original17/7/1948 — Biblioteca da Assembleia Nacional",
            "locator": "12; contexto8/28",
            "statement": "Não existe religião de Estado e religião é separada da política; fé e consciência livres.",
            "basis": "norm",
            "publishedDate": "1948-07-17",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Separação institucional explícita sustenta secularismo normativo moderado.",
        "uncertainty": "Direitos podem ser limitados por lei necessária à ordem/bemestar28; não ausência de participação religiosa, perseguição ou política confessional observada em toda administração.",
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "eco": {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constituição coreana original17/7/1948 — Biblioteca da Assembleia Nacional",
            "locator": "84–89; contrapontos15/18/85–89",
            "statement": "Recursos minerais/hídricos/naturais nacionalizados e transportes, comunicação, finanças, seguros, eletricidade/água/gás públicos, com comércio externo controlado.",
            "basis": "norm",
            "publishedDate": "1948-07-17",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Programa transversal nacional de propriedade pública em recursos, finanças e infraestrutura sustenta orientação pública moderada além de um operador isolado.",
        "uncertainty": "Concessões privadas85/87 permitidas por necessidade pública; propriedade privada15, empresas privadas18 e distribuição fundiária aos agricultores86 preservadas. Transferência de outros empreendimentos88 apenas autorizada por necessidade. Não estatística de propriedade executada ou planejamento geral imputado.",
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      }
    },
    "documentaryReview": {
      "status": "accepted-bounded-primary-and-identity",
      "independentReview": "accepted",
      "reviewedOn": "2026-10-08",
      "scope": "Autor leu PDF oficial coreano1–55/57–69/76–89/96–99/encerramento e FRUS860/870/310; cinco normas propostas, passagens codificadas e identidade cotejadas independentemente; prática histórica não auditada integralmente."
    },
    "identityOrigin": {
      "disposition": "new-historical-unit",
      "distinctness": "Administração fundadora de Rhee encerrada por revolução/resignação, separada do regimePark existente e governo democrático atual. Emendas não criam identidades."
    },
    "unknownAxisReasons": {
      "est": "As passagens efetivamente lidas não sustentam orientação geral deste eixo. Valor50 desconhecido, sem evidência, mapa ou código; identidade documental não implica elegibilidade.",
      "imi": "As passagens efetivamente lidas não sustentam orientação geral deste eixo. Valor50 desconhecido, sem evidência, mapa ou código; identidade documental não implica elegibilidade.",
      "int": "As passagens efetivamente lidas não sustentam orientação geral deste eixo. Valor50 desconhecido, sem evidência, mapa ou código; identidade documental não implica elegibilidade.",
      "con": "As passagens efetivamente lidas não sustentam orientação geral deste eixo. Valor50 desconhecido, sem evidência, mapa ou código; identidade documental não implica elegibilidade.",
      "com": "As passagens efetivamente lidas não sustentam orientação geral deste eixo. Valor50 desconhecido, sem evidência, mapa ou código; identidade documental não implica elegibilidade.",
      "mor": "As passagens efetivamente lidas não sustentam orientação geral deste eixo. Valor50 desconhecido, sem evidência, mapa ou código; identidade documental não implica elegibilidade.",
      "tec": "As passagens efetivamente lidas não sustentam orientação geral deste eixo. Valor50 desconhecido, sem evidência, mapa ou código; identidade documental não implica elegibilidade."
    }
  },
  {
    "id": "brazil-first-republic-1889",
    "name": "Brasil — Primeira República",
    "aliases": [
      "Brasil — República Velha",
      "Brasil — ordem republicana1891"
    ],
    "period": "15/11/1889–ruptura política de24/10/1930; recorte normativo original de24/02/1891",
    "rationale": "República federal substitui monarquia; governo provisório1930 dissolve legislaturas e suspende garantias. Não cria identidade por reforma1926; texto fundador é o único recorte codificado.",
    "caveats": "Norma original1891, não prática oligárquica1889–1930. Carta não assegura voto secreto nem nomeia sufrágio feminino; exclusões e reconhecimento parlamentar dos mandatos são limites. Retrospectiva Câmara documenta fraudes/voto aberto e exclusão feminina, sem converter tais fatos em orientação autocrática deduzida. Reformas1926, que restringem entrada e modificam direitos, não retrojetadas. Continuidade formal da carta após golpe não significa continuidade do regime.",
    "sources": [
      {
        "title": "Constituição brasileira1891 — Câmara, publicação original",
        "url": "https://www2.camara.leg.br/legin/fed/consti/1824-1899/constituicao-35081-24-fevereiro-1891-532699-publicacaooriginal-15017-pl.html",
        "note": "Corpo original oficial realmente aberto/lido1–48/63–91 e transitória1; passagens72completas. Publicação original transcrita, não fac-símile visual. Sem substituir por reformas1926."
      },
      {
        "title": "Constituição1891 — Planalto, original e alterações1926",
        "url": "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao91.htm",
        "note": "Corpo realmente aberto: texto original tachado e emenda1926 separados. Encoding defeituoso; apenas cotejo da versão, não leitura de mudanças como texto fundador."
      },
      {
        "title": "A1República — cronologia Câmara",
        "url": "https://www2.camara.leg.br/a-camara/conheca/historia/a1republica.html/",
        "note": "Corpo institucional efetivamente lido,24out1930 deposição/prisão presidencial e Junta; críticas ao voto aberto/fraudes/exclusão feminina. Erro1935 no parágrafo subsequente não reutilizado. Retrospectiva, não documento original do golpe."
      },
      {
        "title": "Decreto19398/1930 — Câmara, publicação original",
        "url": "https://www2.camara.leg.br/legin/fed/decret/1930-1939/decreto-19398-11-novembro-1930-517605-publicacaooriginal-1-pe.html",
        "note": "Texto primário1–16 realmente aberto: funções discricionárias, dissolução legislaturas2, manutenção constitucional restrita4, suspensão garantias5 e ratificação da Junta24out14. Identidade terminal, sem retroagir normas à carta1891."
      }
    ],
    "kind": "country",
    "category": "historical-country",
    "vec": {
      "est": 60,
      "rep": 60,
      "pod": 40,
      "imi": 50,
      "dip": 40,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 60,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "est": "medium",
      "rep": "medium",
      "pod": "medium",
      "dip": "medium",
      "rel": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Constituição brasileira1891 — Câmara, publicação original"
        ],
        "rationale": "Competência constitucional estadual própria sustenta descentralização moderada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: União mantém poderes nacionais, intervenção6 e requisitos constitucionais; não federalismo sem hierarquia ou prática integral."
      },
      "rep": {
        "sourceTitles": [
          "Constituição brasileira1891 — Câmara, publicação original"
        ],
        "rationale": "Arquitetura representativa eletiva sustenta direção democrática moderada normativa. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Exclui mendigos, analfabetos, praças e ordens religiosas70; primeiro Executivo eleito pelo Congresso, que também resolve falta de maioria47. Não voto secreto/feminino assegurado ou pleitos efetivamente livres."
      },
      "pod": {
        "sourceTitles": [
          "Constituição brasileira1891 — Câmara, publicação original"
        ],
        "rationale": "Garantias gerais e remédios contra abuso sustentam liberdade normativa moderada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Prisão e fiança têm exceções legais; sítio suspende garantias, admite detenção/desterro e prestação posterior de contas ao Congresso. Não qualidade ou efetividade real."
      },
      "dip": {
        "sourceTitles": [
          "Constituição brasileira1891 — Câmara, publicação original"
        ],
        "rationale": "Regras gerais de conflito sustentam direção pacífica moderada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Defesa e serviço militar mantidos; Presidente pode declarar guerra imediatamente por invasão/agressão. Não pacifismo absoluto ou prática externa."
      },
      "rel": {
        "sourceTitles": [
          "Constituição brasileira1891 — Câmara, publicação original"
        ],
        "rationale": "Regra estatal ampla de separação sustenta secularismo moderado. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Cultos/cemitérios sujeitos às leis/moral pública; recusa de dever cívico religioso perde direitos políticos. Não liberdade de consciência sem limitações."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constituição brasileira1891 — Câmara, publicação original",
            "locator": "1/4–6/9/63–68; contraponto34",
            "statement": "Constituições estaduais e poderes residuais próprios; municípios têm autonomia de interesses locais.",
            "basis": "norm",
            "publishedDate": "1891-02-24",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Competência constitucional estadual própria sustenta descentralização moderada.",
        "uncertainty": "União mantém poderes nacionais, intervenção6 e requisitos constitucionais; não federalismo sem hierarquia ou prática integral.",
        "reviewedOn": "2026-10-08",
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
            "sourceTitle": "Constituição brasileira1891 — Câmara, publicação original",
            "locator": "16–18/28/30–31/43/47/70;transitória1",
            "statement": "Câmaras e Presidência em regra eleitas diretamente, com mandatos renováveis e representação minoritária.",
            "basis": "norm",
            "publishedDate": "1891-02-24",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Arquitetura representativa eletiva sustenta direção democrática moderada normativa.",
        "uncertainty": "Exclui mendigos, analfabetos, praças e ordens religiosas70; primeiro Executivo eleito pelo Congresso, que também resolve falta de maioria47. Não voto secreto/feminino assegurado ou pleitos efetivamente livres.",
        "reviewedOn": "2026-10-08",
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
            "sourceTitle": "Constituição brasileira1891 — Câmara, publicação original",
            "locator": "72§§1–2/8–9/11–16/18–23; contraponto80",
            "statement": "Liberdades ordinárias, defesa/processo, habeas corpus, privacidade e expressão sem censura.",
            "basis": "norm",
            "publishedDate": "1891-02-24",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Garantias gerais e remédios contra abuso sustentam liberdade normativa moderada.",
        "uncertainty": "Prisão e fiança têm exceções legais; sítio suspende garantias, admite detenção/desterro e prestação posterior de contas ao Congresso. Não qualidade ou efetividade real.",
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "dip": {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constituição brasileira1891 — Câmara, publicação original",
            "locator": "34XI/88; contrapontos14/48VIII/86–87",
            "statement": "Arbitramento precede autorização de guerra e conquista é proibida em qualquer hipótese.",
            "basis": "norm",
            "publishedDate": "1891-02-24",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Regras gerais de conflito sustentam direção pacífica moderada.",
        "uncertainty": "Defesa e serviço militar mantidos; Presidente pode declarar guerra imediatamente por invasão/agressão. Não pacifismo absoluto ou prática externa.",
        "reviewedOn": "2026-10-08",
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
            "sourceTitle": "Constituição brasileira1891 — Câmara, publicação original",
            "locator": "11II/72§§3–7/28–29",
            "statement": "Cultos livres, ensino público leigo, casamento civil e ausência de subvenção/aliança eclesial.",
            "basis": "norm",
            "publishedDate": "1891-02-24",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Regra estatal ampla de separação sustenta secularismo moderado.",
        "uncertainty": "Cultos/cemitérios sujeitos às leis/moral pública; recusa de dever cívico religioso perde direitos políticos. Não liberdade de consciência sem limitações.",
        "reviewedOn": "2026-10-08",
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
      "reviewedOn": "2026-10-08",
      "independentReview": "accepted-bounded-primary-and-identity",
      "scope": "Cinco normas de norma original1891; passagens codificadas e cronologia cotejadas independentemente; prática histórica não auditada integralmente, sem auditoria integral da prática ou emendas."
    },
    "unknownAxisReasons": {
      "imi": "Entrada sem passaporte72§10 e incentivo35II cobrem somente admissão migratória; não direção cultural/linguística geral. Pesquisa preservada,50desconhecido.",
      "int": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "eco": "Direito geral de propriedade72§17 e minas privadas não estabelecem orientação produtiva geral suficiente; sem extrapolar propriedade jurídica para economia inteira.",
      "con": "Poderes legislativos e incentivo econômico35II não demonstram sistema geral de alocação por plano ou mercado.",
      "com": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
      "mor": "Casamento civil72§4 é relação estatal religiosa; ausência de direitos familiares/sexuais amplamente cotejados impede direção moral global.",
      "tec": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação."
    }
  }
];
export const native16HistoricalCountriesNewSources:Record<string,ReferenceSource[]> = {
  "south-korea-rhee-government-1948": [
    {
      "title": "Constituição coreana de 1948 — NIKH, excertos do texto original",
      "url": "https://contents.history.go.kr/front/hm/view.do?levelId=hm_145_0060",
      "note": "Reprodução primária expressamente abreviada: arts. 31–32 e 96 realmente lidos no corpo, entre outros excertos. Editorial histórico e omissões separados; não leitura integral do PDF constitucional. Art. 97 confirmado somente como parágrafo completo oferecido pela indexação do portal oficial de legislação, com corpo direto indisponível nesta consulta."
    },
    {
      "title": "대한민국헌법 — National Law Information Center, redação de 17/7/1948",
      "url": "https://www.law.go.kr/LSW/lsInfoP.do?ancNo=00001&ancYd=19480717&chrClsCd=010202&efGubun=Y&efYd=19480717&lsiSeq=53081&nwJoYnInfo=N",
      "note": "Arts. 96–97 completos recuperados em resultado indexado da fonte primária identificada como Constituição nº 1 de 17/7/1948. A abertura direta retornou estrutura de página sem o corpo legal; não se certifica leitura integral. A leitura deste portal ficou restrita aos parágrafos completos indexados, sem corpo integral recuperado."
    },
    {
      "title": "헌법의 경제 조항의 변천 — NIKH, textos econômicos constitucionais de 1948 e 1954",
      "url": "https://contents.history.go.kr/front/hm/view.do?levelId=hm_145_0070",
      "note": "Textos primários dos arts. 84–89 de 1948 e 1954 efetivamente lidos. Em 1954 são retiradas prescrições anteriores de propriedade/operação pública e restringida a estatização de empresas privadas. A fonte delimita a validade temporal de ECO em 1948; não mede propriedade executada nem fundamenta transferência automática de direção a toda a administração."
    }
  ],
  "brazil-first-republic-1889": [
    {
      "title": "Lei nº 3.071, de 1º de janeiro de 1916 — Código Civil, publicação original",
      "url": "https://www2.camara.leg.br/legin/fed/lei/1910-1919/lei-3071-1-janeiro-1916-397989-publicacaooriginal-1-pl.html",
      "note": "Reprodução oficial da publicação original de 5/1/1916; art. 1.806 realmente lido fixa vigência em 1/1/1917. Passagens efetivamente lidas: parte geral, arts. 1–9; 233–251; 315–324; 355–380 e disposições finais 1.806–1.807. Não leitura integral do código, execução, alterações de 1919 ou vigência invariável até 1930."
    }
  ],
  "brazil-estado-novo-1937": [
    {
      "title": "Decreto-Lei nº 1.545, de 25 de agosto de 1939 — adaptação ao meio nacional",
      "url": "https://www2.camara.leg.br/legin/fed/declei/1930-1939/decreto-lei-1545-25-agosto-1939-411654-publicacaooriginal-1-pe.html",
      "note": "Corpo integral dos arts. 1–21, assinatura e registro de publicação realmente lidos. Decreto de 25/8/1939, publicado em 28/8/1939. Programa nacional de adaptação linguística/cultural; ressalvas confessionais, comunicação externa e direitos individuais preservadas. Não comprova execução uniforme."
    },
    {
      "title": "Decreto-Lei nº 3.200, de 19 de abril de 1941 — organização e proteção da família, publicação original",
      "url": "https://www2.camara.leg.br/legin/fed/declei/1940-1949/decreto-lei-3200-19-abril-1941-413239-publicacaooriginal-1-pe.html",
      "note": "Corpo dos arts. 1–43 realmente lido em blocos sucessivos; decreto de 19/4/1941. Casamento, filiação, incentivos à prole, emprego, tributos e educação moral familiar, respeitada a orientação religiosa paterna. Não instrução religiosa compulsória deduzida, pagamento efetivo de benefícios ou redações posteriores."
    },
    {
      "title": "Constituição de 1937 — Câmara, publicação original",
      "url": "https://www2.camara.leg.br/legin/fed/consti/1930-1939/constituicao-35093-10-novembro-1937-532849-publicacaooriginal-15246-pl.html",
      "note": "Publicação original transcrita. Nova leitura delimitada dos arts. 103–123 e 124–140, especialmente censura, família e ensino. Cláusulas fundadoras de EST/REP/POD/REL conservam suas anteriores leituras atribuídas; não se declara nova leitura integral nem uso de emendas de 1938/1945."
    }
  ],
  "venezuela-first-republic-1811": [
    {
      "title": "Constitución Federal de los Estados de Venezuela, 21 de diciembre 1811 — Biblioteca Virtual Miguel de Cervantes",
      "url": "https://www.cervantesvirtual.com/portales/constituciones_hispanoamericanas/obra-visor/constitucion-federal-de-los-estados-de-venezuela-21-de-diciembre-1811/html/86de8dbc-4b14-4131-a616-9a65e65e856a_2.html",
      "note": "Transcrição do texto de 21/12/1811. Lidos preliminar, arts. 1–29, 39–85, 120–131 e 146–216 em blocos delimitados, com censos eleitorais, garantia processual, religião, incorporação indígena e controle de reuniões. Não fac-símile autenticado ou prova de execução; arts. 109 e outros trechos intermediários não usados como nova leitura."
    }
  ]
};
export const native16HistoricalCountriesNewCoding:Record<string,ReferenceAxisCoding[]> = {
  "south-korea-rhee-government-1948": [
    {
      "axis": "est",
      "position": "moderate-second",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Constituição coreana de 1948 — NIKH, excertos do texto original",
          "locator": "Arts. 31–32 e 96",
          "statement": "Poder legislativo nacional pertence à Assembleia; entes locais administram assuntos próprios e bens e editam normas dentro das leis e decretos nacionais.",
          "basis": "norm",
          "publishedDate": "1948-07-17",
          "accessedDate": "2026-10-08"
        },
        {
          "sourceTitle": "대한민국헌법 — National Law Information Center, redação de 17/7/1948",
          "locator": "Arts. 96–97; parágrafos completos indexados",
          "statement": "Conselhos locais são exigidos, mas organização, competências e eleição são definidas por lei nacional.",
          "basis": "norm",
          "publishedDate": "1948-07-17",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "Subordinação legislativa territorial, com administração própria limitada por normas nacionais, sustenta centralização moderada no texto de 1948.",
      "uncertainty": "Autonomia patrimonial, assuntos próprios, regras locais e conselhos obrigatórios impedem inferir centralização absoluta. Fonte NIKH abreviada; art. 97 recuperado apenas na indexação oficial. Não certifica aplicação da lei local de 1949, pleitos de 1952/1956/1958 ou emendas posteriores.",
      "reviewedOn": "2026-10-08"
    }
  ],
  "brazil-first-republic-1889": [
    {
      "axis": "mor",
      "position": "moderate-second",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Lei nº 3.071, de 1º de janeiro de 1916 — Código Civil, publicação original",
          "locator": "Parte geral, art. 6 II; arts. 233, 242 e 380",
          "statement": "Mulher casada tem capacidade relativa; marido chefia a sociedade conjugal e o poder sobre filhos, com autorização marital para exercício profissional.",
          "basis": "norm",
          "publishedDate": "1916-01-01; vigência inicial em 1917-01-01",
          "accessedDate": "2026-10-08"
        },
        {
          "sourceTitle": "Lei nº 3.071, de 1º de janeiro de 1916 — Código Civil, publicação original",
          "locator": "Arts. 315–324 e 355–364; contrapontos 246, 248 e 251",
          "statement": "Casamento válido conserva vínculo apesar do desquite; filiação recebe tratamentos desiguais, ao lado de reconhecimento de filhos e remédios próprios da mulher.",
          "basis": "norm",
          "publishedDate": "1916-01-01; vigência inicial em 1917-01-01",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "Regras nacionais de capacidade, papéis familiares, casamento e filiação sustentam orientação tradicional moderada no código inicial de 1917.",
      "uncertainty": "Desquite, patrimônio profissional, atos e remédios próprios da mulher, reconhecimento de filhos e tutela judicial limitam a direção. Não todos os costumes, aborto, aplicação real ou alterações posteriores; recorte datado separado da Constituição de 1891.",
      "reviewedOn": "2026-10-08"
    }
  ],
  "brazil-estado-novo-1937": [
    {
      "axis": "imi",
      "position": "strong-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Decreto-Lei nº 1.545, de 25 de agosto de 1939 — adaptação ao meio nacional",
          "locator": "Arts. 1–9, 12–16 e 18–21; contrapontos 11, 14 e 15 parágrafo único",
          "statement": "Adaptação nacional dos descendentes de estrangeiros mobiliza educação, idioma, associações patrióticas, serviço militar, cargos e distribuição territorial; pregação é em português, com exceções.",
          "basis": "norm",
          "publishedDate": "1939-08-25; publicação 1939-08-28",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "Programa nacional transversal de integração linguística e cultural compulsória sustenta assimilação forte na norma de 1939.",
      "uncertainty": "Exceções confessionais, comunicação com o exterior, direitos individuais e liberdade de culto formal permanecem. Não proibição universal de cada idioma privado, fechamento completo de fronteiras ou execução uniforme de todas as medidas.",
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "mor",
      "position": "moderate-second",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Constituição1937 — Câmara, publicação original",
          "locator": "Art. 122, 15 b; arts. 124–132; contraponto 126",
          "statement": "Censura protege moralidade e bons costumes; casamento indissolúvel e educação da juventude valorizam disciplina moral, com igualdade de direitos de filhos naturais.",
          "basis": "norm",
          "publishedDate": "1937-11-10",
          "accessedDate": "2026-10-08"
        },
        {
          "sourceTitle": "Decreto-Lei nº 3.200, de 19 de abril de 1941 — organização e proteção da família, publicação original",
          "locator": "Arts. 8–9, 12–16, 24–33 e 39; contrapontos 27, 30 e 42",
          "statement": "Programa nacional incentiva casamento e famílias com prole por crédito, preferência, benefícios e tributos; educação moral dos filhos respeita orientação religiosa paterna.",
          "basis": "norm",
          "publishedDate": "1941-04-19",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "Normas de casamento, papéis familiares, natalidade e disciplina moral sustentam orientação tradicional moderada nos recortes de 1937 e 1941.",
      "uncertainty": "Filhos naturais, reconhecimento de filiação, direitos de mães trabalhadoras e apoio a famílias pobres são contrapontos. Art. 39 não estabelece instrução religiosa compulsória indiscriminada. Não aborto, toda sexualidade, pagamento de benefícios ou execução contínua até 1945.",
      "reviewedOn": "2026-10-08"
    }
  ],
  "venezuela-first-republic-1811": [
    {
      "axis": "rep",
      "position": "moderate-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Constitución Federal de los Estados de Venezuela, 21 de diciembre 1811 — Biblioteca Virtual Miguel de Cervantes",
          "locator": "Bases do pacto; arts. 14–15, 21–29, 39–49 e 72–85",
          "statement": "Poderes são separados; eleitores populares escolhem representantes com mandatos e renovação, legislaturas provinciais elegem senadores e o Executivo é eleito por procedimento indireto.",
          "basis": "norm",
          "publishedDate": "1811-12-21",
          "accessedDate": "2026-10-08"
        },
        {
          "sourceTitle": "Constitución Federal de los Estados de Venezuela, 21 de diciembre 1811 — Biblioteca Virtual Miguel de Cervantes",
          "locator": "Arts. 187–189 e 209–214; contrapontos 26–29, 49 e 73",
          "statement": "Mandatos submetem agentes à responsabilidade e revisão, com limites à reunião popular e qualificação patrimonial dos sufragantes e titulares.",
          "basis": "norm",
          "publishedDate": "1811-12-21",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "Arquitetura representativa eletiva, renovação e responsabilidade sustentam direção democrática moderada na carta de dezembro de 1811.",
      "uncertainty": "Sufrágio masculino livre, requisitos censitários e exclusões, escolha indireta e qualificação dos cargos impedem democracia ampla. Reuniões são limitadas; poderes extraordinários de 1812 não são convertidos em média do regime. Não se afirma pleito efetivamente livre.",
      "reviewedOn": "2026-10-08"
    }
  ]
};
const periods:Record<string,string> = {
  "south-korea-rhee-government-1948": "15/08/1948–resignação formal27/04/1960; recorte Constituição original17/07/1948 Autonomia local delimitada pelos arts. 96–97 de 1948; mudança econômica de 1954 é contraponto posterior, sem recodificação retroativa.",
  "brazil-first-republic-1889": "15/11/1889–ruptura política de 24/10/1930; recortes normativos separados: Constituição original de 24/02/1891 e disposições familiares do Código Civil na vigência inicial de 1/1/1917.",
  "brazil-estado-novo-1937": "Estado Novo sob Vargas, 10/11/1937–29/10/1945; recortes normativos separados: carta original de 1937, adaptação nacional de 1939 e organização familiar de 1941.",
  "venezuela-first-republic-1811": "Independência5/7/1811–capitulação1812; recorte normativo da carta21/12/1811"
};
const rationales:Record<string,string> = {
  "south-korea-rhee-government-1948": "Governo fundador anterior à revolução1960 e posterior juntaPark1961; inaugurado após formação institucional e encerrado pela resignação de Rhee. Normas fundadoras não representam toda prática autoritária do período.",
  "brazil-first-republic-1889": "República federal com desenho representativo de 1891 e regras familiares tradicionais no Código Civil inicial de 1917; normas não equivalem à prática oligárquica.",
  "brazil-estado-novo-1937": "Desenho executivo centralizado de 1937, assimilação cultural nacional de 1939 e normas familiares tradicionais de 1937/1941.",
  "venezuela-first-republic-1811": "República independente em pacto provincial federal, anterior à restauração realista e às repúblicas revolucionárias seguintes."
};
const appendedCaveats:Record<string,string> = {
  "south-korea-rhee-government-1948": "ECO refere-se somente ao programa constitucional original de 1948: a redação de 1954 retirou prescrições de propriedade/operação pública e restringiu estatização, não sendo lícito estender ECO60 a toda a administração. A leitura da autonomia local combina excertos do NIKH e parágrafos completos indexados da fonte oficial; não certifica sua aplicação prática.",
  "brazil-first-republic-1889": "O Código Civil publicado em 1916 entrou em vigor em 1/1/1917; suas regras familiares iniciais são amostra normativa datada separada, não aplicação contínua de 1917 a 1930 nem redações de 1919. Patrimônio e remédios próprios da mulher, desquite e reconhecimento de filiação limitam a direção tradicional.",
  "brazil-estado-novo-1937": "Adaptação nacional de 1939 e programa familiar de 1941 são recortes posteriores separados da carta de 1937. Ressalvas confessionais, direitos individuais, filiação natural e proteção de mães trabalhadoras permanecem. Não se infere implementação uniforme ou instrução religiosa compulsória de todo cidadão.",
  "venezuela-first-republic-1811": "Art. 169 trata admissão de estrangeiros, sem sustentar pluralismo cultural geral; exclusividade religiosa e incorporação indígena impedem conservar IMI40. Valor50 é desconhecido, sem graduação oposta automática. Controle federal de leis provinciais e limites a reuniões são contrapontos a EST/POD; emergência de 1812 não é retrojetada à carta de 1811."
};
const keyList=['est','rep','pod','imi','dip','int','eco','con','com','rel','mor','tec'] as const;
function canonical(value:unknown):string {if(Array.isArray(value))return '['+value.map(canonical).join(',')+']';if(value!==null&&typeof value==='object')return '{'+Object.keys(value).sort().map(k=>JSON.stringify(k)+':'+canonical((value as Record<string,unknown>)[k])).join(',')+'}';return JSON.stringify(value);}
function prepare(entry:ReferenceEntry):ReferenceEntry {
 const after:HistoricalSnapshot={...entry,period:periods[entry.id],rationale:rationales[entry.id],caveats:entry.caveats+' '+appendedCaveats[entry.id],sources:[...entry.sources,...native16HistoricalCountriesNewSources[entry.id]],vec:{...entry.vec},evidence:{...entry.evidence},axisEvidence:{...entry.axisEvidence},coding:{...entry.coding},unknownAxisReasons:{...(entry as HistoricalSnapshot).unknownAxisReasons}};
 if(entry.id==='venezuela-first-republic-1811'){after.vec.imi=50;delete after.evidence.imi;delete after.axisEvidence!.imi;delete after.coding!.imi;after.unknownAxisReasons!.imi='Admissão de estrangeiros não estabelece preservação cultural/linguística geral; exclusividade religiosa e incorporação indígena são contrapontos. Sem direção oposta automaticamente imputada.';}
 for(const input of native16HistoricalCountriesNewCoding[entry.id]){const coded=codeReferenceAxis(input,after.sources);after.vec[input.axis]=coded.value;after.evidence[input.axis]=coded.evidence;after.axisEvidence![input.axis]=coded.axisEvidence;after.coding![input.axis]=coded.coding;delete after.unknownAxisReasons![input.axis];}
 for(const axis of keyList)if(after.vec[axis]===50){delete after.evidence[axis];delete after.axisEvidence![axis];delete after.coding![axis];}
 return after;
}
export const native16HistoricalCountriesExpectedPosts:ReferenceEntry[]=native16HistoricalCountriesBefore.map(prepare);
export function reconcileNative16HistoricalCountries(entry:ReferenceEntry):ReferenceEntry {
 const index=native16HistoricalCountriesBefore.findIndex(x=>x.id===entry.id);if(index<0)return entry;
 if(canonical(entry)===canonical(native16HistoricalCountriesExpectedPosts[index]))return entry;
 if(canonical(entry)!==canonical(native16HistoricalCountriesBefore[index]))throw new Error('Native16 historical-country full prior changed: '+entry.id);
 return prepare(entry);
}
