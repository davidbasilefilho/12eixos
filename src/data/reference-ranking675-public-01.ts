import type { ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';
type RankingPublicArchiveEntry = Omit<ReferenceEntry, 'sources'> & { sources: (ReferenceSource & { publishedDate?: string })[] };

/** Full current selected objects. Unimported documentary payload accepted by peer and Root; full guard required. */
export const ranking675Public01Before: RankingPublicArchiveEntry[] = [
  {
    "id": "michelle-bachelet",
    "name": "Michelle Bachelet",
    "aliases": [
      "Michelle Bachelet Jeria"
    ],
    "kind": "person",
    "category": "public-figure",
    "period": "Programa pessoalmente assinado18/10/2005 para2006–2010; atividade30/09/2026",
    "sources": [
      {
        "title": "Michelle Bachelet — Programa de Gobierno,18/10/2005",
        "url": "https://www.bcn.cl/obtienearchivo?id=documentos/10221.1/13433/1/2005_programa-MB.pdf",
        "note": "BCN PDF102p; apresentação assinada e trechos delimitados lidos, não integralmente."
      },
      {
        "title": "El País — atividade de Bachelet,01/10/2026",
        "url": "https://elpais.com/chile/2026-10-01/bachelet-en-un-homenaje-tras-retirar-su-candidatura-a-la-onu-quienes-pensaban-que-me-iba-a-ir-para-la-casa-les-tengo-una-mala-noticia.html",
        "note": "Cabeçalho25–33 e corpo59–84 lidos: evento30/09/2026, identidade apenas; imagem não examinada."
      }
    ],
    "caveats": "Declarações de programa2005 pessoalmente assinado, não prática nem posições2026. Sete eixos desconhecidos; descentralização administrativa preservada apenas como pesquisa, sem autonomia legislativa regional comprovada. Revisão documental independente delimitada e julgamento do Root aceitos; programa2013 inacessível não codificado.",
    "rationale": "Propõe participação democrática, pluralidade cultural e direitos de gênero, com abertura comercial e proteção internacional.",
    "vec": {
      "est": 50,
      "rep": 60,
      "pod": 50,
      "imi": 40,
      "dip": 50,
      "int": 40,
      "eco": 50,
      "con": 50,
      "com": 40,
      "rel": 50,
      "mor": 60,
      "tec": 50
    },
    "evidence": {
      "rep": "medium",
      "imi": "medium",
      "int": "medium",
      "com": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Michelle Bachelet — Programa de Gobierno,18/10/2005"
        ],
        "rationale": "Democracia participativa. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Instituições constitucionais; execução não certificada."
      },
      "imi": {
        "sourceTitles": [
          "Michelle Bachelet — Programa de Gobierno,18/10/2005"
        ],
        "rationale": "Pluralismo cultural amplo. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Valoriza também patrimônio nacional; não fronteiras irrestritas."
      },
      "int": {
        "sourceTitles": [
          "Michelle Bachelet — Programa de Gobierno,18/10/2005"
        ],
        "rationale": "Intervenção multilateral delimitada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Paz/direito4957–4960 e defesa dissuasiva5215–5224; não invasão unilateral."
      },
      "com": {
        "sourceTitles": [
          "Michelle Bachelet — Programa de Gobierno,18/10/2005"
        ],
        "rationale": "Abertura comercial geral. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Promoção de exportadores locais4987–4991; não tarifa zero."
      },
      "mor": {
        "sourceTitles": [
          "Michelle Bachelet — Programa de Gobierno,18/10/2005"
        ],
        "rationale": "Reformas morais inclusivas. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: União civil básica, não casamento igualitário ou aborto irrestrito."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Michelle Bachelet — Programa de Gobierno,18/10/2005",
            "locator": "PDF linhas3928–3981/4229–4240/4574–4577/4675–4688; endosso assinado6–78",
            "statement": "Amplia participação, eleições regionais, transparência e expressão.",
            "basis": "declaration",
            "publishedDate": "2005-10-18",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Democracia participativa.",
        "uncertainty": "Instituições constitucionais; execução não certificada.",
        "relatedQuestionIds": [
          "representacao_03",
          "representacao_07",
          "representacao_19"
        ],
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "imi": {
        "axis": "imi",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Michelle Bachelet — Programa de Gobierno,18/10/2005",
            "locator": "PDF linhas4397–4412/4578–4587/4695–4757/4812–4825; endosso assinado6–78",
            "statement": "Preserva identidades culturais e línguas indígenas com educação intercultural.",
            "basis": "declaration",
            "publishedDate": "2005-10-18",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Pluralismo cultural amplo.",
        "uncertainty": "Valoriza também patrimônio nacional; não fronteiras irrestritas.",
        "relatedQuestionIds": [
          "imigracao_02",
          "imigracao_04",
          "imigracao_08"
        ],
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "int": {
        "axis": "int",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Michelle Bachelet — Programa de Gobierno,18/10/2005",
            "locator": "PDF linhas5049–5054/5233–5239; endosso assinado6–78",
            "statement": "Endossa responsabilidade de proteger e forças internacionais de paz.",
            "basis": "declaration",
            "publishedDate": "2005-10-18",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Intervenção multilateral delimitada.",
        "uncertainty": "Paz/direito4957–4960 e defesa dissuasiva5215–5224; não invasão unilateral.",
        "relatedQuestionIds": [
          "intervencao_05",
          "intervencao_07"
        ],
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "com": {
        "axis": "com",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Michelle Bachelet — Programa de Gobierno,18/10/2005",
            "locator": "PDF linhas4967–4989/5022–5030; endosso assinado6–78",
            "statement": "Amplia livre comércio e remove barreiras comerciais.",
            "basis": "declaration",
            "publishedDate": "2005-10-18",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Abertura comercial geral.",
        "uncertainty": "Promoção de exportadores locais4987–4991; não tarifa zero.",
        "relatedQuestionIds": [
          "comercio_04",
          "comercio_10"
        ],
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "mor": {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Michelle Bachelet — Programa de Gobierno,18/10/2005",
            "locator": "PDF linhas4445–4499/4545–4559; endosso assinado6–78",
            "statement": "Amplia direitos sexuais, igualdade de gênero e uniões civis diversas.",
            "basis": "declaration",
            "publishedDate": "2005-10-18",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Reformas morais inclusivas.",
        "uncertainty": "União civil básica, não casamento igualitário ou aborto irrestrito.",
        "relatedQuestionIds": [
          "moral_07",
          "moral_11"
        ],
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      }
    }
  },
  {
    "id": "marine-le-pen",
    "name": "Marine Le Pen",
    "aliases": [
      "Marine Lepen"
    ],
    "kind": "person",
    "category": "public-figure",
    "period": "Programa presidencial próprio2022; identidade/atividade verificada21/09/2026",
    "sources": [
      {
        "title": "Marine Le Pen —22 mesures pour2022, programa presidencial próprio",
        "url": "https://mlafrance.fr/pdfs/22-mesures-pour-2022.pdf",
        "note": "Programa próprio2022, PDF8p; corpo textual0–211 lido; dia editorial não certificado."
      },
      {
        "title": "Marine Le Pen — espelho oficial22 mesures",
        "url": "https://rassemblementnational.fr/22-mesures",
        "note": "Espelho oficial100–198 lido, confirma atribuição pessoal2022; mesma evidência, não confirmação independente."
      },
      {
        "title": "Marine Le Pen — controle da imigração, livreto presidencial2022",
        "url": "https://rassemblementnational.fr/documents/projet/projet-controle-de-limmigration.pdf",
        "note": "PDF46p, áreas24–31/449–590 efetivamente lidas; não leitura integral."
      },
      {
        "title": "Marine Le Pen — segurança, livreto presidencial2022",
        "url": "https://rassemblementnational.fr/documents/projet/projet-la-securite.pdf",
        "note": "PDF24p, áreas0–459/470–613/637–740 lidas; propostas/alegações próprias, não prática verificada."
      },
      {
        "title": "Marine Le Pen — ecologia, livreto presidencial2022",
        "url": "https://rassemblementnational.fr/documents/projet/projet-lecologie.pdf",
        "note": "PDF18p, áreas0–562 lidas, com contrapontos ambientais; dia editorial não certificado."
      },
      {
        "title": "Marine Le Pen — carta própria aos profissionais imobiliários,21/09/2026",
        "url": "https://rassemblementnational.fr/post/lettre-ouverte-de-marine-le-pen-aux-professionnels-de-limmobilier",
        "note": "Autoria/data100–105 e corpo107–146 lidos; identidade/atividade2026 somente, não atualização das posições2022."
      }
    ],
    "caveats": "Declarações eleitorais2022, não prática nem posições medidas2026. Estatísticas dos livretos não auditadas. Sete eixos desconhecidos; tecnologia permanece pesquisa contraditória. Revisão documental delimitada aceita pela revisão independente e pelo Root.",
    "rationale": "Propõe referendos, coerção policial, assimilação cultural e proteção comercial, com maior orçamento e equipamento militar.",
    "vec": {
      "est": 50,
      "rep": 60,
      "pod": 60,
      "imi": 60,
      "dip": 60,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 60,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "rep": "medium",
      "pod": "medium",
      "imi": "medium",
      "dip": "medium",
      "com": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Marine Le Pen —22 mesures pour2022, programa presidencial próprio"
        ],
        "rationale": "Participação eleitoral e direta proposta. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Controle judicial limitado na reforma migratória480–483/577–590; restrição de publicações643–673 no livreto segurança. Não certifica todos os direitos oposicionistas ou execução."
      },
      "pod": {
        "sourceTitles": [
          "Marine Le Pen —22 mesures pour2022, programa presidencial próprio",
          "Marine Le Pen — segurança, livreto presidencial2022"
        ],
        "rationale": "Autoridade coerciva para segurança. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Reinserção261–267, proporcionalidade411–423 e culpa comprovada528–531 preservadas; não apoio presumido à detenção sem julgamento."
      },
      "imi": {
        "sourceTitles": [
          "Marine Le Pen —22 mesures pour2022, programa presidencial próprio",
          "Marine Le Pen — controle da imigração, livreto presidencial2022"
        ],
        "rationale": "Assimilação cultural declarada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Descreve proposta constitucional e costumes, não apenas fronteiras; não certifica efeitos ou estatísticas demográficas."
      },
      "dip": {
        "sourceTitles": [
          "Marine Le Pen —22 mesures pour2022, programa presidencial próprio"
        ],
        "rationale": "Defesa armada como garantia nacional. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Limita-se à capacitação/independência; não autoriza inferir guerra preventiva, uso nuclear ou intervenção externa."
      },
      "com": {
        "sourceTitles": [
          "Marine Le Pen —22 mesures pour2022, programa presidencial próprio"
        ],
        "rationale": "Proteção comercial declarada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Normas agrícolas e revisão de acordos, não autarquia total ou tarifa universal; livretoecologia358–363 admite diversificar fornecedores."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Marine Le Pen —22 mesures pour2022, programa presidencial próprio",
            "locator": "Medida11; PDFphysicalp5, linhas106",
            "statement": "Propõe referendo de iniciativa cidadã e representação proporcional.",
            "basis": "declaration",
            "publishedDate": "Programa presidencial2022; dia editorial não certificado",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Participação eleitoral e direta proposta.",
        "uncertainty": "Controle judicial limitado na reforma migratória480–483/577–590; restrição de publicações643–673 no livreto segurança. Não certifica todos os direitos oposicionistas ou execução.",
        "relatedQuestionIds": [
          "representacao_09"
        ],
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
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Marine Le Pen —22 mesures pour2022, programa presidencial próprio",
            "locator": "Medida3; PDFphysicalp2, linhas22–36",
            "statement": "Amplia prisão e presunção de legítima defesa policial.",
            "basis": "declaration",
            "publishedDate": "Programa presidencial2022; dia editorial não certificado",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Marine Le Pen — segurança, livreto presidencial2022",
            "locator": "Physicalp7–8, linhas76–97; p21,643–673; p11,211–227",
            "statement": "Defende força policial e proibição de publicações ideológicas, com sanção à posse de drogas.",
            "basis": "declaration",
            "publishedDate": "Programa presidencial2022; dia editorial não certificado",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Autoridade coerciva para segurança.",
        "uncertainty": "Reinserção261–267, proporcionalidade411–423 e culpa comprovada528–531 preservadas; não apoio presumido à detenção sem julgamento.",
        "relatedQuestionIds": [
          "poder_01",
          "poder_04",
          "poder_06"
        ],
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "imi": {
        "axis": "imi",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Marine Le Pen —22 mesures pour2022, programa presidencial próprio",
            "locator": "Medida1; PDFphysicalp2,18–20",
            "statement": "Condiciona naturalização à assimilação.",
            "basis": "declaration",
            "publishedDate": "Programa presidencial2022; dia editorial não certificado",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Marine Le Pen — controle da imigração, livreto presidencial2022",
            "locator": "Physicalp16–18,503–505/526–559",
            "statement": "Exige língua e costumes nacionais e substitui ensino de cultura de origem.",
            "basis": "declaration",
            "publishedDate": "Programa presidencial2022; dia editorial não certificado",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Assimilação cultural declarada.",
        "uncertainty": "Descreve proposta constitucional e costumes, não apenas fronteiras; não certifica efeitos ou estatísticas demográficas.",
        "relatedQuestionIds": [
          "imigracao_01",
          "imigracao_06",
          "imigracao_07"
        ],
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "dip": {
        "axis": "dip",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Marine Le Pen —22 mesures pour2022, programa presidencial próprio",
            "locator": "Medida20; PDFphysicalp7,197–203",
            "statement": "Amplia orçamento e equipamento militar para proteger interesses nacionais.",
            "basis": "declaration",
            "publishedDate": "Programa presidencial2022; dia editorial não certificado",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Defesa armada como garantia nacional.",
        "uncertainty": "Limita-se à capacitação/independência; não autoriza inferir guerra preventiva, uso nuclear ou intervenção externa.",
        "relatedQuestionIds": [
          "diplomacia_01",
          "diplomacia_05"
        ],
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "com": {
        "axis": "com",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Marine Le Pen —22 mesures pour2022, programa presidencial próprio",
            "locator": "Medidas13/18; PDFphysicalp5/7,122–125/186–188",
            "statement": "Restringe importações agrícolas e revê livre-comércio para proteção nacional.",
            "basis": "declaration",
            "publishedDate": "Programa presidencial2022; dia editorial não certificado",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Proteção comercial declarada.",
        "uncertainty": "Normas agrícolas e revisão de acordos, não autarquia total ou tarifa universal; livretoecologia358–363 admite diversificar fornecedores.",
        "relatedQuestionIds": [
          "comercio_04",
          "comercio_07"
        ],
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      }
    }
  },
  {
    "id": "atiku-abubakar",
    "name": "Atiku Abubakar",
    "aliases": [
      "Alhaji Atiku Abubakar"
    ],
    "kind": "person",
    "category": "public-figure",
    "period": "Programa da campanha2023; atividade reportada28/05/2026 sem atualizar automaticamente posições",
    "sources": [
      {
        "title": "Atiku Abubakar — My Covenant with Nigerians, programa da campanha2023, PDF74p",
        "url": "https://elections.civichive.org/wp-content/uploads/2022/10/Atikus-5-Point-Development-Agenda-Abridged.pdf",
        "note": "Programa primário arquivado pelo CivicHive; endosso pessoal p6 física57–66. Áreas indicadas efetivamente lidas; não alegamos leitura integral das74p. Hospedagem2022/10 não certifica dia editorial."
      },
      {
        "title": "TheCable — atividade de Atiku Abubakar,28/05/2026",
        "url": "https://www.thecable.ng/nobody-was-defeated-atiku-calls-for-unity-after-winning-adc-presidential-primary/",
        "note": "Cabeçalho46 e corpo54–91 realmente lidos. Reportagem secundária usada exclusivamente para atividade/identidade em2026; acusações e resultado eleitoral não auditados nem codificados."
      }
    ],
    "caveats": "Programa pessoalmente endossado, não prática ou crença privada. Data editorial exata não certificada. Identidade2026 documentada por reportagem; acusações não auditadas. Sete eixos desconhecidos; revisão documental independente delimitada.",
    "rationale": "Prioriza liderança privada e preços de mercado, com autonomia local, participação democrática e modernização digital.",
    "vec": {
      "est": 60,
      "rep": 60,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 40,
      "con": 40,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 60
    },
    "evidence": {
      "est": "medium",
      "rep": "medium",
      "eco": "medium",
      "con": "medium",
      "tec": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Atiku Abubakar — My Covenant with Nigerians, programa da campanha2023, PDF74p"
        ],
        "rationale": "Federalismo descentralizado. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Mantém padrões e garantias federais1203–1205; sem secessão."
      },
      "rep": {
        "sourceTitles": [
          "Atiku Abubakar — My Covenant with Nigerians, programa da campanha2023, PDF74p"
        ],
        "rationale": "Orientação democrática ampla. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Programa normativo; prática não auditada."
      },
      "eco": {
        "sourceTitles": [
          "Atiku Abubakar — My Covenant with Nigerians, programa da campanha2023, PDF74p"
        ],
        "rationale": "Propriedade e provisão privadas multissetoriais. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Regulação e PPP permanecem; não privatização universal."
      },
      "con": {
        "sourceTitles": [
          "Atiku Abubakar — My Covenant with Nigerians, programa da campanha2023, PDF74p"
        ],
        "rationale": "Alocação predominantemente por mercados. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Planejamento, proteção seletiva e garantias públicas limitam a direção."
      },
      "tec": {
        "sourceTitles": [
          "Atiku Abubakar — My Covenant with Nigerians, programa da campanha2023, PDF74p"
        ],
        "rationale": "Adoção tecnológica ampla. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Objetivos não são execução nem apoio a qualquer tecnologia."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Atiku Abubakar — My Covenant with Nigerians, programa da campanha2023, PDF74p",
            "locator": "PDFp65 física1198–1215",
            "statement": "Propõe devolução multissetorial de competências e autonomia financeira local.",
            "basis": "declaration",
            "publishedDate": "Campanha2023; arquivo hospedado2022/10, dia editorial não certificado",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Federalismo descentralizado.",
        "uncertainty": "Mantém padrões e garantias federais1203–1205; sem secessão.",
        "relatedQuestionIds": [
          "estrutura_03",
          "estrutura_05",
          "estrutura_19"
        ],
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
            "sourceTitle": "Atiku Abubakar — My Covenant with Nigerians, programa da campanha2023, PDF74p",
            "locator": "PDFp62 física1110–1155; p71,1325–1327",
            "statement": "Defende voto efetivo, participação contínua, transparência e separação de poderes.",
            "basis": "declaration",
            "publishedDate": "Campanha2023; arquivo hospedado2022/10, dia editorial não certificado",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Orientação democrática ampla.",
        "uncertainty": "Programa normativo; prática não auditada.",
        "relatedQuestionIds": [
          "representacao_07",
          "representacao_19"
        ],
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
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Atiku Abubakar — My Covenant with Nigerians, programa da campanha2023, PDF74p",
            "locator": "PDFp12–13 físicas80–112; p22,251–261",
            "statement": "Prioriza liderança privada e quebra de monopólios em infraestrutura.",
            "basis": "declaration",
            "publishedDate": "Campanha2023; arquivo hospedado2022/10, dia editorial não certificado",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Propriedade e provisão privadas multissetoriais.",
        "uncertainty": "Regulação e PPP permanecem; não privatização universal.",
        "relatedQuestionIds": [
          "economia_02",
          "economia_03",
          "economia_06"
        ],
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "con": {
        "axis": "con",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Atiku Abubakar — My Covenant with Nigerians, programa da campanha2023, PDF74p",
            "locator": "PDFp12 física80–91; p19,186–203; p30,429–466; p36,559–573",
            "statement": "Prioriza preços de mercado e desregulação, com incentivos públicos delimitados.",
            "basis": "declaration",
            "publishedDate": "Campanha2023; arquivo hospedado2022/10, dia editorial não certificado",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Alocação predominantemente por mercados.",
        "uncertainty": "Planejamento, proteção seletiva e garantias públicas limitam a direção.",
        "relatedQuestionIds": [
          "controle_02",
          "controle_04",
          "controle_17"
        ],
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "tec": {
        "axis": "tec",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Atiku Abubakar — My Covenant with Nigerians, programa da campanha2023, PDF74p",
            "locator": "PDFp14 física125–127; p33,501–523",
            "statement": "Promove software, digitalização governamental, formação e aplicações multissetoriais.",
            "basis": "declaration",
            "publishedDate": "Campanha2023; arquivo hospedado2022/10, dia editorial não certificado",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Adoção tecnológica ampla.",
        "uncertainty": "Objetivos não são execução nem apoio a qualquer tecnologia.",
        "relatedQuestionIds": [
          "tecnologia_01",
          "tecnologia_02"
        ],
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      }
    }
  }
];

export const ranking675Public01BacheletTec: ReferenceAxisCoding = {
 axis: 'tec', position: 'moderate-first', confidence: 'medium',
 claims: [{
  sourceTitle: 'Michelle Bachelet — Programa de Gobierno,18/10/2005',
  locator: 'Programa2005, seções Nueva política de desarrollo / Ciencia, tecnología e innovación: linhas1818–1962; Un país digital para el desarrollo y la igualdad2503–2564. Contrapontos ambientais2580–2680.',
  statement: 'Propõe uma política nacional de ciência, inovação e difusão tecnológica, com aplicação produtiva e digitalização de educação, saúde, justiça e administração.',
  basis: 'declaration', publishedDate: '2005-10-18', accessedDate: '2026-10-08'
 }],
 rationale: 'Adoção tecnológica promovida de forma ampla na produção e nos serviços públicos; orientação moderada pelas condições ambientais e de privacidade.',
 uncertainty: 'Proposta assinada em2005, não execução ou renovação2026. Autodeterminação informativa e privacidade2561–2564, proteção ambiental2580–2680 e condições para grandes hidrelétricas2665–2667 limitam a adoção; não atribui autorização irrestrita de IA, engenharia genética ou energia nuclear. Histórico biotecnológico do governo Lagos1787–1793 não é codificado como proposta pessoal.',
 reviewedOn: '2026-10-08'
};

/** Frozen Root-accepted Bachelet-only payload. Marine/Atiku remain literal unchanged research controls. */
export const ranking675Public01Proposed: RankingPublicArchiveEntry[] = ranking675Public01Before.map(before => {
 if (before.id !== 'michelle-bachelet') return structuredClone(before);
 const coded = codeReferenceAxis(ranking675Public01BacheletTec, before.sources);
 return {...structuredClone(before),
  vec: {...before.vec, tec: coded.value},
  evidence: {...before.evidence, tec: coded.evidence},
  axisEvidence: {...before.axisEvidence, tec: coded.axisEvidence},
  coding: {...before.coding, tec: coded.coding},
  rationale: 'Propõe democracia participativa, pluralismo, direitos de gênero, comércio aberto, proteção internacional e inovação tecnológica.',
  caveats: before.caveats.replace('Sete eixos desconhecidos;', 'Seis eixos desconhecidos;') + ' Leitura adicional do mesmo programa: inovação nacional e agenda digital, com limites ambientais e de privacidade. Seis eixos têm direção documental; os demais permanecem desconhecidos. Essa ampliação não certifica prática nem posições de2026.'
 };
});
export function reconcileRanking675Public01(entry: ReferenceEntry): ReferenceEntry {
 const index = ranking675Public01Before.findIndex(before => before.id === entry.id);
 if (index < 0) return entry;
 const proposed = ranking675Public01Proposed[index];
 if (JSON.stringify(entry) === JSON.stringify(proposed)) return entry;
 if (JSON.stringify(entry) !== JSON.stringify(ranking675Public01Before[index])) throw new Error('Ranking public01 whole prior object changed: ' + entry.id);
 return structuredClone(proposed);
}
