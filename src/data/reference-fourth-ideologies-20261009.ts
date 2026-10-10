import type { ReferenceEntry, ReferenceSource, AxisKey } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';
interface Definition { before: ReferenceEntry; addedSources: ReferenceSource[]; codings: ReferenceAxisCoding[]; unknownAxisReasons: Partial<Record<AxisKey,string>>; caveats: string }
// Full selected baselines; unused raw records remain unchanged.
export const fourthIdeologies20261009Definitions = [
  {
    "before": {
      "id": "ideology-christian-democracy",
      "kind": "ideology",
      "category": "ideology",
      "name": "Democracia cristã europeia (PPE, 2012)",
      "period": "Manifesto do Partido Popular Europeu, 17–18 outubro 2012; síntese selecionada, não toda a família.",
      "rationale": "Personalismo, solidariedade e subsidiariedade dentro de democracia pluralista e economia social de mercado. Integração europeia com poderes compartilhados, concorrência socialmente regulada e proteção de associações/famílias.",
      "caveats": "O PPE inclui conservadores e liberais; o recorte é sua síntese democrata-cristã declarada de 2012. Valores cristãos não bastam para pontuar Estado confessional. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
      "sources": [
        {
          "title": "EPP Manifesto, 2012",
          "url": "https://www.epp.eu/files/uploads/2015/09/Manifesto2012_EN.pdf",
          "note": "Publicação: 2012-10-18. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: §§2–4, pp.1–7 numeradas no manifesto. Leitura efetiva declarada na pesquisa: Texto principal renderizado lido, pp.1–7; 9 páginas de PDF incluindo capa."
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
        "title": "EPP Manifesto — Bucharest, 17–18 October 2012",
        "url": "https://www.epp.eu/files/uploads/2015/09/Manifesto2012_EN.pdf",
        "note": "Publicação/edição: 2012-10-17/18. Acesso: 2026-10-09. Manifesto partidário adotado no Congresso de Bucareste em 17–18 outubro 2012. Leitura independente: extração 0–235, capa e corpo integral §§1–4, nove páginas físicas. Sem incorporar outras datas ou toda a família democrata-cristã."
      }
    ],
    "codings": [
      {
        "axis": "rep",
        "position": "strong-first",
        "confidence": "high",
        "relatedQuestionIds": [
          "representacao_01",
          "representacao_15",
          "representacao_19"
        ],
        "claims": [
          {
            "sourceTitle": "EPP Manifesto — Bucharest, 17–18 October 2012",
            "locator": "Manifesto adotado em 17–18 outubro 2012, §2 pp 2–3 (extração 47–55); §4 pp 4–5 e 8 (110–115,225–231).",
            "statement": "Afirma democracia pluralista e eleições europeias diretas, com participação partidária.",
            "basis": "declaration",
            "publishedDate": "2012-10-17/18",
            "accessedDate": "2026-10-09"
          }
        ],
        "rationale": "Compromisso representativo central.",
        "uncertainty": "Manifesto de 2012; não comprova execução nem imputa voto secreto, referendos ou cada direito específico da oposição. Ligações ao questionário são de constructo, não respostas literais.",
        "reviewedOn": "2026-10-09"
      },
      {
        "axis": "con",
        "position": "moderate-second",
        "confidence": "medium",
        "relatedQuestionIds": [
          "controle_04",
          "controle_14"
        ],
        "claims": [
          {
            "sourceTitle": "EPP Manifesto — Bucharest, 17–18 October 2012",
            "locator": "2012, §2 p 3 (56–62); §4 pp 5/7 (116–127,185–196).",
            "statement": "Adota economia social de mercado, liberdade empresarial e redução de burocracia.",
            "basis": "declaration",
            "publishedDate": "2012-10-17/18",
            "accessedDate": "2026-10-09"
          }
        ],
        "rationale": "Coordenação mercantil regulada.",
        "uncertainty": "O programa exige reforçar governança fiscal/econômica e instrumentos ambientais vinculantes; não prova livre formação universal de preços/salários nem redução geral de impostos.",
        "reviewedOn": "2026-10-09"
      },
      {
        "axis": "com",
        "position": "moderate-second",
        "confidence": "medium",
        "relatedQuestionIds": [
          "comercio_04",
          "comercio_08",
          "comercio_10"
        ],
        "claims": [
          {
            "sourceTitle": "EPP Manifesto — Bucharest, 17–18 October 2012",
            "locator": "2012, §4 p 5, mercado único e comércio internacional (131–134).",
            "statement": "Propõe remover barreiras europeias e ampliar comércio internacional livre e justo.",
            "basis": "declaration",
            "publishedDate": "2012-10-17/18",
            "accessedDate": "2026-10-09"
          }
        ],
        "rationale": "Abertura comercial expressa.",
        "uncertainty": "Mercado único é regional e o texto fala também em comércio internacional mais livre e justo; não explicita abolir todas as exceções ou liberdade irrestrita de aquisição estrangeira.",
        "reviewedOn": "2026-10-09"
      }
    ],
    "unknownAxisReasons": {
      "est": "Poderes compartilhados na UE não demonstram federalismo doméstico.",
      "pod": "Compromissos gerais de liberdade/segurança não delimitam suficientemente coerção.",
      "imi": "Respeito a direitos humanos não equivale a assimilação cultural.",
      "dip": "Defesa comum e cooperação não fixam prioridade militar agregada.",
      "int": "Apoio externo à democracia não explicita critérios de intervenção.",
      "eco": "Economia social de mercado não especifica titularidade/provisão predominante.",
      "rel": "Reconhecimento de crentes e não crentes não prova separação institucional.",
      "mor": "Família e igualdade sexual não resolvem a direção cultural ampla.",
      "tec": "Inovação e sustentabilidade não resolvem o eixo tecnológico amplo."
    },
    "caveats": "O PPE inclui conservadores e liberais; o recorte é sua síntese democrata-cristã declarada de 2012. Valores cristãos não bastam para pontuar Estado confessional. A pesquisa qualitativa de seleção não certifica, por si, os 12 eixos. Lacunas não equivalem a neutralidade. Codificação documental de 09/10/2026: Três eixos codificados no manifesto partidário adotado em Bucareste em 17–18/10/2012, com leitura independente do texto extraído integral. Não representa toda a família democrata-cristã nem comprova execução. Economia social de mercado e liberdade empresarial coexistem com governança fiscal, social e ambiental; comércio mais livre e justo não elimina automaticamente toda exceção. Âncoras e faixas são juízos editoriais, não medições ou respostas imputadas ao questionário. Eixos não documentados permanecem desconhecidos."
  },
  {
    "before": {
      "id": "ideology-distributism",
      "category": "ideology",
      "kind": "ideology",
      "name": "Distributismo (Chesterton, 1926)",
      "period": "The Outline of Sanity, edição Dodd, Mead & Company, Nova York, 1927; transcrição PDF republicada pela Seton Hall",
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
      "rationale": "Propriedade produtiva amplamente distribuída deve garantir autonomia familiar contra concentração capitalista e coletivismo estatal. Pequenos proprietários, cooperativas e barreiras à concentração, com reorganização da vida produtiva local.",
      "caveats": "Exemplar de Chesterton, não todas as tradições distributistas ou doutrina papal integral. Admite diferentes meios, como leis, impostos, tarifas e subsídios; sua crítica geral ao socialismo é posição autoral, não fato certificado sobre todos os socialistas. Transcrição textual sem colação de fac-símile; velhos números não validados. Não pressupõe que toda atividade seja agrícola; visão familiar historicamente situada e passagens preconceituosas não devem ser omitidas em revisão substantiva. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
      "sources": [
        {
          "title": "Rerum Novarum — Santa Sé",
          "url": "https://www.vatican.va/content/leo-xiii/en/encyclicals/documents/hf_l-xiii_enc_15051891_rerum-novarum.html",
          "note": "Documento primário de 1891 sobre trabalho, propriedade, associações e responsabilidade estatal."
        },
        {
          "title": "Quadragesimo Anno — Santa Sé",
          "url": "https://www.vatican.va/content/pius-xi/en/encyclicals/documents/hf_p-xi_enc_19310515_quadragesimo-anno.html",
          "note": "Documento primário de 1931 sobre justiça social e princípio de subsidiariedade."
        },
        {
          "title": "The Outline of Sanity — Chesterton, Dodd Mead New York1927 primary transcription",
          "url": "https://www.shu.edu/documents/1927-GK-Chesterton-The-Outline-of-Sanity.pdf",
          "note": "O colofão, nas linhas 0–5, registra a edição de 1927. Foram inspecionadas as linhas 37–197 e as páginas 1–6 e 48–50: distribuição da propriedade produtiva e oposição à dependência salarial. A seção II.2 admite leis, impostos, tarifas e subsídios como métodos. O texto não equivale exclusivamente às encíclicas de 1891–1931; sua crítica a todos os socialistas é uma afirmação do autor, não um fato certificado."
        },
        {
          "title": "The Outline of Sanity",
          "url": "https://www.shu.edu/documents/1927-GK-Chesterton-The-Outline-of-Sanity.pdf",
          "note": "Publicação: 1926. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: PartIII, The Real Life on the Land; PDF pp.76–77 e discussão inicial. Leitura efetiva declarada na pesquisa: Passagens sobre distribuição de propriedade e propostas lidas; livro não integral. Arquivo rotulado 1927; obra originalmente 1926, edição deve ser mantida na evidência."
        }
      ],
      "evidence": {},
      "axisEvidence": {},
      "coding": {}
    },
    "addedSources": [
      {
        "title": "The Outline of Sanity — Dodd, Mead 1927, transcrição Seton Hall",
        "url": "https://www.shu.edu/documents/1927-GK-Chesterton-The-Outline-of-Sanity.pdf",
        "note": "Publicação/edição: 1927, edição de Nova York; obra originalmente 1926. Acesso: 2026-10-09. Transcrição republicada pela Seton Hall, colofão Dodd, Mead & Company, Nova York 1927; obra originalmente 1926. Leitura independente delimitada: metadados/I.1 extração 0–402; I.2 casamento 417–451; II.2 propostas 1909–1936; II.4 extração 2309–2453; III.3 extração 2980–3215; IV.1–2 extração 3217–3546; VI extração 4848–5303. As páginas remanescentes não foram integralmente lidas; sem certificação de fac-símile. Preservam-se coerção penal antimonopolista, preconceitos e uso de máquinas úteis; não se incorporam as encíclicas de 1891/1931 aos novos códigos."
      }
    ],
    "codings": [
      {
        "axis": "eco",
        "position": "moderate-second",
        "confidence": "high",
        "relatedQuestionIds": [
          "economia_05",
          "economia_08",
          "economia_13",
          "economia_18"
        ],
        "claims": [
          {
            "sourceTitle": "The Outline of Sanity — Dodd, Mead 1927, transcrição Seton Hall",
            "locator": "Edição Nova York 1927, I.1 PDF físico 2–6 (37–197); III.3 físico 77–79 (2980–3056); IV.1 físico 88–89 (3399–3422).",
            "statement": "Defende propriedade produtiva privada disseminada, inclusive participações e pequenas guildas.",
            "basis": "declaration",
            "publishedDate": "1927, edição de Nova York; obra originalmente 1926",
            "accessedDate": "2026-10-09"
          }
        ],
        "rationale": "Propriedade descentralizada é o núcleo.",
        "uncertainty": "Propriedade é privada, inclusive ações individuais: guildas locais e divisão entre trabalhadores não equivalem automaticamente a propriedade pública ou comum. Distribuição e intervenção contra monopólio limitam a defesa incondicional de desigualdade; sem inferir propriedade setorial prevalente.",
        "reviewedOn": "2026-10-09"
      },
      {
        "axis": "con",
        "position": "moderate-first",
        "confidence": "medium",
        "relatedQuestionIds": [
          "controle_01",
          "controle_07",
          "controle_14"
        ],
        "claims": [
          {
            "sourceTitle": "The Outline of Sanity — Dodd, Mead 1927, transcrição Seton Hall",
            "locator": "Edição 1927, II.2 físico 50 (1909–1936); II.4 físico 62–64 (2402–2466); VI físico 132–133 (5130–5188).",
            "statement": "Propõe tributação de contratos, subsídios e repressão antitrustes.",
            "basis": "declaration",
            "publishedDate": "1927, edição de Nova York; obra originalmente 1926",
            "accessedDate": "2026-10-09"
          }
        ],
        "rationale": "Intervenção estrutural material.",
        "uncertainty": "São instrumentos de transição e regulação antimonopolista, não plano central universal de preços/produção. Algumas propostas não vinculam todos os distributistas.",
        "reviewedOn": "2026-10-09"
      },
      {
        "axis": "com",
        "position": "moderate-first",
        "confidence": "medium",
        "relatedQuestionIds": [
          "comercio_01",
          "comercio_07"
        ],
        "claims": [
          {
            "sourceTitle": "The Outline of Sanity — Dodd, Mead 1927, transcrição Seton Hall",
            "locator": "Edição 1927, II.2 físico 50 (1909–1936, proteção condicional por tarifas, inclusive locais); VI físico 133 (5181–5188). Contraponto III.3 físico 78 e 83 (3017–3021,3193–3204): trocas e variação continuam.",
            "statement": "Admite tarifas, inclusive locais, para proteger experiências distributistas.",
            "basis": "declaration",
            "publishedDate": "1927, edição de Nova York; obra originalmente 1926",
            "accessedDate": "2026-10-09"
          }
        ],
        "rationale": "Proteção seletiva explícita.",
        "uncertainty": "Tarifas são condicionais, inclusive locais; ele não reduz todos a autossuficiência e admite comércio/trocas. Não imputa restrições a empresas estrangeiras, terras ou todos os setores nacionais.",
        "reviewedOn": "2026-10-09"
      },
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
            "sourceTitle": "The Outline of Sanity — Dodd, Mead 1927, transcrição Seton Hall",
            "locator": "Edição 1927, I.1 físico 5–6 (150–196), imprensa crítica independente; VI físico 129 (4999–5016) e 135 (5233–5267), autonomia e oposição à Prohibition. Contraponto II.4 físico 62–63 (2402–2453), punições penais de monopolistas.",
            "statement": "Defende crítica independente do poder e regra de autodireção da vida cotidiana, incluindo decisões de saúde e oposição à Prohibition.",
            "basis": "declaration",
            "publishedDate": "1927, edição de Nova York; obra originalmente 1926",
            "accessedDate": "2026-10-09"
          }
        ],
        "rationale": "Autonomia pessoal e expressão concretas.",
        "uncertainty": "II.4 admite prisão, exposição punitiva e enforcamento de monopolistas e tratamento de conspirações mercantis como conspirações contra Estado/rei. Essa coerção impede leitura libertária irrestrita; autonomia e crítica sustentam somente inclinação moderada. Não prova tolerância penal universal, devido processo ou posições sobre todas as drogas.",
        "reviewedOn": "2026-10-09"
      },
      {
        "axis": "mor",
        "position": "moderate-second",
        "confidence": "medium",
        "relatedQuestionIds": [
          "moral_02",
          "moral_17",
          "moral_20"
        ],
        "claims": [
          {
            "sourceTitle": "The Outline of Sanity — Dodd, Mead 1927, transcrição Seton Hall",
            "locator": "Edição 1927, I.2 físico 12 (417–451), analogia normativa monogamia/fidelidade; VI físico 135–136 (5231–5244,5268–5286), autoridade parental e casamento. Contraponto IV.1 físico 89 (3430–3439) e VI físico 131–132 (5108–5115), preconceitos e linguagem sexista.",
            "statement": "Apresenta fidelidade monogâmica e autoridade parental como costumes e poderes desejáveis da família, contrapondo-os à sociedade centralizada.",
            "basis": "declaration",
            "publishedDate": "1927, edição de Nova York; obra originalmente 1926",
            "accessedDate": "2026-10-09"
          }
        ],
        "rationale": "Matriz familiar tradicional.",
        "uncertainty": "Analogia matrimonial não é política explicitamente formulada sobre casamento LGBT, aborto, identidade de gênero ou divisão feminina universal do cuidado. Mantêm-se a simpatia declarada por uma frase de exclusão de judeus alemães e linguagem antifeminista; nenhuma alegação de tolerância universal.",
        "reviewedOn": "2026-10-09"
      },
      {
        "axis": "tec",
        "position": "moderate-second",
        "confidence": "medium",
        "relatedQuestionIds": [
          "tecnologia_02",
          "tecnologia_13",
          "tecnologia_18"
        ],
        "claims": [
          {
            "sourceTitle": "The Outline of Sanity — Dodd, Mead 1927, transcrição Seton Hall",
            "locator": "Edição 1927, III.3 físico 78–83 (3017–3056,3193–3204); IV.1–2 físico 85–90 (3305–3374,3399–3422,3484–3502); VI físico 132–133 (5141–5188), instrumentos úteis, preferência artesanal e vigilância seletiva.",
            "statement": "Subordina a maquinaria ao bem-estar humano, prefere maior independência rural e artesanal e admite limitar usos, preservando instrumentos úteis à transição distributiva.",
            "basis": "declaration",
            "publishedDate": "1927, edição de Nova York; obra originalmente 1926",
            "accessedDate": "2026-10-09"
          }
        ],
        "rationale": "Cautela industrial explícita.",
        "uncertainty": "Não considera máquinas intrinsecamente más; aceita ações/guildas para maquinaria necessária, automóveis e eletricidade úteis à dispersão da produção. Sua hipótese de banir toda maquinaria não é conclusão adotada. Não se imputam políticas de genética, IA, clima, mineração ou resultados empíricos da vida rural.",
        "reviewedOn": "2026-10-09"
      }
    ],
    "unknownAxisReasons": {
      "est": "Desconcentração econômica não demonstra competências territoriais.",
      "rep": "Rótulo democrático não oferece desenho representativo suficiente.",
      "imi": "Emigração e preconceitos não estabelecem programa migratório completo.",
      "dip": "Não estabelecido nas passagens lidas.",
      "int": "Não estabelecido nas passagens lidas.",
      "rel": "Fundamentação religiosa não determina arranjo Igreja–Estado."
    },
    "caveats": "Exemplar de Chesterton, não todas as tradições distributistas ou doutrina papal integral. Admite diferentes meios, como leis, impostos, tarifas e subsídios; sua crítica geral ao socialismo é posição autoral, não fato certificado sobre todos os socialistas. Transcrição textual sem colação de fac-símile; velhos números não validados. Não pressupõe que toda atividade seja agrícola; visão familiar historicamente situada e passagens preconceituosas não devem ser omitidas em revisão substantiva. A pesquisa qualitativa de seleção não certifica, por si, os 12 eixos. Lacunas não equivalem a neutralidade. Codificação documental de 09/10/2026: Seis eixos codificados em passagens delimitadas da edição de Nova York de 1927, Dodd, Mead, transcrita e republicada pela Seton Hall; não leitura integral nem fac-símile certificado. Propriedade privada disseminada, instrumentos públicos de transição e tarifas condicionais não equivalem a propriedade pública ou plano central universal. Autodireção cotidiana e imprensa crítica coexistem com propostas de prisão, exposição punitiva e enforcamento de monopolistas. Matriz familiar monogâmica e parental não atribui todas as pautas sexuais atuais. Preservam-se simpatia por frase excludente sobre judeus alemães e linguagem antifeminista. Cautela com mecanização admite máquinas necessárias, automóveis e eletricidade úteis; hipótese de banir toda maquinaria não é conclusão adotada. Não se transferem as encíclicas de 1891/1931 aos novos códigos. Âncoras e faixas são juízos editoriais, não medições ou respostas imputadas ao questionário. Eixos não documentados permanecem desconhecidos."
  },
  {
    "before": {
      "id": "ideology-catholic-integralism",
      "kind": "ideology",
      "category": "ideology",
      "name": "Integralismo católico (matriz leonina, 1885–1891)",
      "period": "Matriz leonina: Immortale Dei 1885, Libertas 1888 e Rerum Novarum 1891; não todas as versões atuais.",
      "rationale": "Ordem civil reconhece fins religiosos verdadeiros e coordena-se com a Igreja, preservando competências próprias. Duas autoridades coordenadas, fins civis subordinados à lei divina, propriedade privada com deveres sociais e associações laborais.",
      "caveats": "O recorte leonino é um antecedente doutrinário específico; não equivale a toda doutrina social católica ou a todo integralismo atual. Não confundir com integralismo brasileiro fascista. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
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
        "title": "Immortale Dei — versão inglesa oficial, 1885",
        "url": "https://www.vatican.va/content/leo-xiii/en/encyclicals/documents/hf_l-xiii_enc_01111885_immortale-dei.html",
        "note": "Publicação/edição: 1885-11-01. Acesso: 2026-10-09. Tradução inglesa oficial. Leitura delimitada: §§1–18,20–45, incluindo profissão religiosa pública, competências próprias, casamento e tolerância; data final 1/11/1885 conferida. Não texto latino nem encíclica integral."
      },
      {
        "title": "Libertas — versão inglesa oficial, 1888",
        "url": "https://www.vatican.va/content/leo-xiii/en/encyclicals/documents/hf_l-xiii_enc_20061888_libertas.html",
        "note": "Publicação/edição: 1888-06-20. Acesso: 2026-10-09. Tradução inglesa oficial. Leitura delimitada: §§12–25 e 33–47, expressão, ensino, repressão, tolerância, distinção das autoridades e admissibilidade de formas democráticas; data final 20/6/1888 conferida. Não leitura integral."
      },
      {
        "title": "Rerum Novarum — versão inglesa oficial, 1891",
        "url": "https://www.vatican.va/content/leo-xiii/en/encyclicals/documents/hf_l-xiii_enc_15051891_rerum-novarum.html",
        "note": "Publicação/edição: 1891-05-15. Acesso: 2026-10-09. Tradução inglesa oficial. Leitura delimitada: §§2–17,20–36,42–47,50–56; propriedade, família, limites de intervenção, acordos salariais, associações e direitos individuais; data final 15/5/1891 conferida. Não leitura integral."
      }
    ],
    "codings": [
      {
        "axis": "rel",
        "position": "strong-second",
        "confidence": "high",
        "relatedQuestionIds": [
          "religiao_03",
          "religiao_08",
          "religiao_18"
        ],
        "claims": [
          {
            "sourceTitle": "Immortale Dei — versão inglesa oficial, 1885",
            "locator": "§§ 6–14 e 35–36",
            "statement": "Exige profissão pública da religião verdadeira e coordenação das duas autoridades.",
            "basis": "declaration",
            "publishedDate": "1885-11-01",
            "accessedDate": "2026-10-09"
          },
          {
            "sourceTitle": "Libertas — versão inglesa oficial, 1888",
            "locator": "§§ 18–21 e 38–40",
            "statement": "Rejeita separação entre Igreja e Estado.",
            "basis": "declaration",
            "publishedDate": "1888-06-20",
            "accessedDate": "2026-10-09"
          }
        ],
        "rationale": "A fé verdadeira é exigência pública e a separação institucional é rejeitada expressamente: direção estrutural forte, não religiosidade pessoal. Competências distintas, tolerância prudencial e conversão não forçada não retiram primazia confessional.",
        "uncertainty": "Competências próprias; tolerância prudencial e ausência de conversão forçada. A liberdade religiosa tolerada não é apresentada como direito igual de todas as religiões; domínio civil/político próprio permanece.",
        "reviewedOn": "2026-10-09"
      },
      {
        "axis": "pod",
        "position": "moderate-first",
        "confidence": "medium",
        "relatedQuestionIds": [
          "poder_04",
          "poder_07"
        ],
        "claims": [
          {
            "sourceTitle": "Libertas — versão inglesa oficial, 1888",
            "locator": "Libertas §§23–25,33–34 e42 (passagens efetivamente lidas; §30 da proposta não reutilizado como leitura fresca)",
            "statement": "Requer repressão pública de opiniões falsas e vícios; restringe ensino.",
            "basis": "declaration",
            "publishedDate": "1888-06-20",
            "accessedDate": "2026-10-09"
          },
          {
            "sourceTitle": "Rerum Novarum — versão inglesa oficial, 1891",
            "locator": "§§ 51–52",
            "statement": "Admite dissolução de associações perigosas ou ilícitas.",
            "basis": "declaration",
            "publishedDate": "1891-05-15",
            "accessedDate": "2026-10-09"
          }
        ],
        "rationale": "Restrições gerais a opiniões, ensino e vícios, somadas a dissolução de associações, alcançam múltiplas liberdades e justificam direção coerciva moderada; discussão legítima, tolerância e limites ao arbítrio impedem extrapolação irrestrita.",
        "uncertainty": "Admite discussão permitida, tolerância prudencial e limites ao arbítrio. Não imputa pena de morte, vigilância digital ou proibição determinada de condutas privadas atuais; debate legítimo e direitos associativos gerais permanecem.",
        "reviewedOn": "2026-10-09"
      },
      {
        "axis": "eco",
        "position": "moderate-second",
        "confidence": "high",
        "relatedQuestionIds": [
          "economia_05",
          "economia_08",
          "economia_18"
        ],
        "claims": [
          {
            "sourceTitle": "Rerum Novarum — versão inglesa oficial, 1891",
            "locator": "Rerum Novarum §§4–8,11–15,22,30,46–47",
            "statement": "Preserva propriedade privada produtiva, herança e difusão da titularidade.",
            "basis": "declaration",
            "publishedDate": "1891-05-15",
            "accessedDate": "2026-10-09"
          }
        ],
        "rationale": "Propriedade produtiva privada e herança são regra geral, não mera poupança pessoal. Deveres de uso, assistência e intervenção necessária tornam40 prudente, sem medir composição econômica real.",
        "uncertainty": "Deveres sociais, assistência e regulação do uso permanecem.",
        "reviewedOn": "2026-10-09"
      },
      {
        "axis": "mor",
        "position": "moderate-second",
        "confidence": "medium",
        "relatedQuestionIds": [
          "moral_02",
          "moral_18",
          "moral_20"
        ],
        "claims": [
          {
            "sourceTitle": "Immortale Dei — versão inglesa oficial, 1885",
            "locator": "Immortale Dei §17; §20 é citação de Agostinho adotada no argumento",
            "statement": "Afirma casamento indissolúvel e autoridade marital/paterna.",
            "basis": "declaration",
            "publishedDate": "1885-11-01",
            "accessedDate": "2026-10-09"
          },
          {
            "sourceTitle": "Rerum Novarum — versão inglesa oficial, 1891",
            "locator": "§§ 12–14 e 42",
            "statement": "Prioriza família e atribui às mulheres vocação doméstica.",
            "basis": "declaration",
            "publishedDate": "1891-05-15",
            "accessedDate": "2026-10-09"
          }
        ],
        "rationale": "Casamento indissolúvel, autoridade familiar e papel doméstico feminino compõem prescrição ampla de família e gênero;40 delimita o corpus sem atribuir agenda sexual contemporânea completa.",
        "uncertainty": "Não atribuir todo programa sexual contemporâneo ao recorte. Limites da autoridade paterna e direitos mútuos domésticos permanecem nos §§12–14; dignidade feminina no Immortale Dei §17; não imputa todas as políticas sexuais atuais.",
        "reviewedOn": "2026-10-09"
      }
    ],
    "unknownAxisReasons": {
      "est": "Duas autoridades espiritual/civil não equivalem a federalismo territorial.",
      "rep": "Immortale Dei§§ 4,36,48 e Libertas§ 44 admitem diferentes formas, inclusive democracia; sem direção única.",
      "imi": "Uniformidade religiosa não equivale a uma política migratória.",
      "dip": "Não estabelecido no corpus delimitado.",
      "int": "Não estabelecido com amplitude suficiente.",
      "com": "Não estabelecido no corpus delimitado.",
      "tec": "Aprovação de pesquisa subordinada à fé não resolve políticas tecnológicas específicas.",
      "con": "Proteção trabalhista, descanso e salário suficiente delimitam contratos, mas não estabelecem prioridade geral de planejamento da produção, preços e alocação. §45 preserva acordos salariais livres e associações; §36 condiciona intervenção à falta de outro remédio. CON permanece desconhecido, sem converter regulação em planejamento nem inferir polo oposto."
    },
    "caveats": "O recorte leonino é um antecedente doutrinário específico; não equivale a toda doutrina social católica ou a todo integralismo atual. Não confundir com integralismo brasileiro fascista. A pesquisa qualitativa de seleção não certifica, por si, os 12 eixos. Lacunas não equivalem a neutralidade. Codificação documental de 09/10/2026: Quatro eixos codificados no corpus delimitado de 1885–1891, em versões inglesas oficiais e seções efetivamente lidas, sem cotejo integral do latim. Primazia confessional preserva competências civis próprias, tolerância prudencial e conversão não forçada; não pressupõe igualdade religiosa. Restrições de expressão, ensino e associações convivem com direitos legítimos e limites ao arbítrio. Propriedade privada, herança e deveres sociais coexistem. Casamento indissolúvel, autoridade doméstica e vocação feminina ao lar são prescrições datadas, não toda agenda sexual contemporânea. CON permanece desconhecido: proteção trabalhista e salário suficiente não estabelecem prioridade geral de planejamento. Âncoras e faixas são juízos editoriais, não medições ou respostas imputadas ao questionário. Eixos não documentados permanecem desconhecidos."
  },
  {
    "before": {
      "id": "ideology-jacobin-republicanism",
      "kind": "ideology",
      "category": "ideology",
      "name": "Republicanismo jacobino (Constituição 1793)",
      "period": "Programa constitucional francês de 24 junho 1793, separado do governo de exceção 1793–1794.",
      "rationale": "República una com soberania popular direta, igualdade cívica e direitos sociais. Assembleias primárias, sanção popular das leis por silêncio ou consulta após reclamação, assistência pública e resistência à opressão.",
      "caveats": "Constituição não implementada; não usar Terror como prova deste programa nem apresentar sufrágio masculino como universal inclusivo. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
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
        "title": "La Constitution du 24 juin 1793 — Élysée",
        "url": "https://www.elysee.fr/la-presidence/la-constitution-du-24-juin-1793",
        "note": "Publicação/edição: 1793-06-24; página atualizada 2022-12-15. Acesso: 2026-10-09. Transcrição francesa institucional. Declaração arts 1–35 e Acte arts 1–124 integralmente lidos em aberturas sucessivas em 9/10/2026; falhas de acesso anteriores permanecem históricas no objeto original. Atualização da página 15/12/2022. Arts 82–85 lidos apesar de aparente erro de transcrição no art 78. Programa 1793, não aplicação ou fac-símile."
      },
      {
        "title": "Constitution du 24 juin 1793 — Wikisource",
        "url": "https://fr.wikisource.org/wiki/Constitution_de_la_France_du_24_juin_1793",
        "note": "Publicação/edição: 1793-06-24; transcrição colaborativa contemporânea. Acesso: 2026-10-09. Cotejo delimitado: metadados, Declaração arts 1–35 e Acte arts 1–11; art 27 da Declaração confirma morte imediata, sem confundir com Acte art 27. Não inspeção do fac-símile nem desta reprodução integral."
      },
      {
        "title": "1793: la Constitution de la Convention, un texte jamais appliqué — Assemblée nationale",
        "url": "https://www2.assemblee-nationale.fr/decouvrir-l-assemblee/histoire/le-suffrage-universel/la-republique-et-le-suffrage-universel/1788-1848-les-premieres-reflexions-autour-du-suffrage/1793-la-constitution-de-la-convention-un-texte-jamais-applique",
        "note": "Publicação/edição: Página histórica sem data de publicação identificada. Acesso: 2026-10-09. Contexto histórico institucional: corpo completo da página lido; diferencia projeto girondino de 1793 e texto montagnard adotado 24/6/1793, sufrágio masculino e Constituição jamais aplicada. Não fonte de scores nem fac-símile."
      }
    ],
    "codings": [
      {
        "axis": "est",
        "position": "strong-second",
        "confidence": "high",
        "relatedQuestionIds": [
          "estrutura_02",
          "estrutura_16",
          "estrutura_20"
        ],
        "claims": [
          {
            "sourceTitle": "La Constitution du 24 juin 1793 — Élysée",
            "locator": "Acte constitutionnel, arts. 1,78–85",
            "statement": "Administrações subordinadas não podem modificar ou suspender atos legislativos nacionais.",
            "basis": "norm",
            "publishedDate": "1793-06-24; página atualizada 2022-12-15",
            "accessedDate": "2026-10-09"
          }
        ],
        "rationale": "Administrações territoriais eletivas são subordinadas aos atos nacionais e proibidas de os modificar ou suspender. Regra constitutiva unitária forte, não simples palavra “indivisível”.",
        "uncertainty": "Eleição municipal não concede autonomia legislativa.",
        "reviewedOn": "2026-10-09"
      },
      {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "relatedQuestionIds": [
          "representacao_01",
          "representacao_07",
          "representacao_09",
          "representacao_19"
        ],
        "claims": [
          {
            "sourceTitle": "La Constitution du 24 juin 1793 — Élysée",
            "locator": "Acte, arts. 4,7–19,21–35,39–50,53–60,115–117",
            "statement": "Combina eleições anuais diretas e reclamação popular contra leis propostas.",
            "basis": "norm",
            "publishedDate": "1793-06-24; página atualizada 2022-12-15",
            "accessedDate": "2026-10-09"
          }
        ],
        "rationale": "Eleições anuais diretas e controle popular de leis instituem autoridade democrática. Exclusão das mulheres, segredo facultativo e sanção tácita condicionada tornam direção moderada60, não universalidade80.",
        "uncertainty": "Sufrágio masculino; voto secreto opcional; sanção tácita salvo reclamação.",
        "reviewedOn": "2026-10-09"
      },
      {
        "axis": "int",
        "position": "strong-first",
        "confidence": "high",
        "relatedQuestionIds": [
          "intervencao_01",
          "intervencao_13"
        ],
        "claims": [
          {
            "sourceTitle": "La Constitution du 24 juin 1793 — Élysée",
            "locator": "Acte, arts. 118–121",
            "statement": "Declara não interferência recíproca nos governos de outras nações.",
            "basis": "norm",
            "publishedDate": "1793-06-24; página atualizada 2022-12-15",
            "accessedDate": "2026-10-09"
          }
        ],
        "rationale": "Regra explícita e recíproca de não interferência nos governos de outras nações, central e geral, sustenta80 normativo. Aliança com povos livres e defesa contra invasão não significam neutralidade absoluta nem prova de prática.",
        "uncertainty": "Aliança com povos livres e defesa territorial; não neutralidade absoluta. Constituição jamais aplicada: o número descreve somente regra do programa24/6/1793, não prática externa do governo de exceção.",
        "reviewedOn": "2026-10-09"
      }
    ],
    "unknownAxisReasons": {
      "pod": "Garantias de expressão/processo coexistem com morte imediata de usurpadores; não resolver por média automática.",
      "dip": "Organização militar defensiva não basta para fixar prioridade militar agregada.",
      "eco": "Propriedade protegida e deveres públicos coexistem; proporção de titularidade/provisão não estabelecida.",
      "con": "Liberdade de atividade econômica não define todo o regime regulatório.",
      "com": "Comércio genérico no art.17 não demonstra abertura internacional.",
      "rel": "Livre culto e referência ao Ser Supremo não provam separação ou confessionalidade.",
      "mor": "Não estabelecido com amplitude suficiente.",
      "tec": "Instrução e razão pública não constituem programa tecnológico.",
      "imi": "Cidadania condicionada e asilo político são normas positivas de admissão. Não estabelecem acomodação de línguas/costumes nem preferência geral de assimilação ou multicultura; admissão não basta para o constructo inteiro. IMI permanece desconhecido, sem inferir polo oposto."
    },
    "caveats": "Constituição não implementada; não usar Terror como prova deste programa nem apresentar sufrágio masculino como universal inclusivo. A pesquisa qualitativa de seleção não certifica, por si, os 12 eixos. Lacunas não equivalem a neutralidade. Codificação documental de 09/10/2026: Três eixos codificados somente no programa constitucional de 24/06/1793, jamais aplicado, em transcrição institucional cotejada pontualmente; não prática do governo de exceção ou fac-símile. Administração nacional subordinante coexiste com eleição municipal, sem autonomia legislativa. Eleições anuais diretas e controle popular das leis conservam sufrágio masculino, segredo facultativo e sanção tácita condicionada. Não interferência recíproca admite aliança com povos livres e defesa territorial. IMI permanece desconhecido: cidadania condicionada e asilo não resolvem costumes/línguas. POD permanece desconhecido: garantias de expressão e processo coexistem com morte imediata de usurpadores. ECO permanece desconhecido: propriedade e deveres de assistência/instrução não determinam regime produtivo geral. Âncoras e faixas são juízos editoriais, não medições ou respostas imputadas ao questionário. Eixos não documentados permanecem desconhecidos."
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
export const fourthIdeologies20261009ExpectedPosts = fourthIdeologies20261009Definitions.map(definition => buildPost(structuredClone(definition.before), definition));
export function reconcileFourthIdeologies20261009(entry: ReferenceEntry): ReferenceEntry {
  const index = fourthIdeologies20261009Definitions.findIndex(definition => definition.before.id === entry.id);
  if (index < 0) return entry;
  if (JSON.stringify(entry) === JSON.stringify(fourthIdeologies20261009ExpectedPosts[index])) return entry;
  const definition = fourthIdeologies20261009Definitions[index];
  if (JSON.stringify(entry) !== JSON.stringify(definition.before)) throw new Error(`Selected ideology baseline diverged for ${entry.id}; preserve later work and review before integrating.`);
  return buildPost(entry, definition);
}
