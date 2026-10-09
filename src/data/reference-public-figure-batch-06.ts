import type { ReferenceEntry, ReferenceSource } from './references';
import { AXES } from '../lib/scoring';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';
export interface PublicFigureBatch06Spec { id: string; name: string; aliases?: string[]; period: string; sources: ReferenceSource[]; coding: ReferenceAxisCoding[]; caveats: string; identityReview: 'author-current-source-checked'; }
export const publicFigureBatch06Specs: PublicFigureBatch06Spec[] = [
  {
    "id": "joseph-stiglitz",
    "name": "Joseph Stiglitz",
    "aliases": [
      "Joseph E. Stiglitz"
    ],
    "period": "2025-11; mês da edição, dia não indicado",
    "identityReview": "author-current-source-checked",
    "sources": [
      {
        "title": "G20 Extraordinary Committee of Independent Experts on Global Inequality — Summary Report, novembro de 2025",
        "url": "https://www.g20.org.za/wp-content/uploads/2025/11/1-G20-Global-Inequality-Report-Summary.pdf",
        "note": "Capa/autoria p2 e recomendação p10 efetivamente lidas. Declaração coletiva explicitamente assinada pelos seis autores; fonte comum, não seis confirmações independentes."
      },
      {
        "title": "Why we need an International Panel on Inequality — autoria e afiliações, Nature, 9/9/2026",
        "url": "https://www.nature.com/articles/d41586-026-02806-9?error=cookies_not_supported",
        "note": "Somente autoria nominal, afiliações e data efetivamente visíveis foram lidas para identidade atual. Corpo sob paywall não usado em codificação; não garante cargo na data de acesso."
      }
    ],
    "coding": [
      {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "G20 Extraordinary Committee of Independent Experts on Global Inequality — Summary Report, novembro de 2025",
            "locator": "p10, seção 6: public provision; autoria nominal p2",
            "statement": "Relatório conjunto recomenda provisão pública universal de serviços essenciais.",
            "basis": "declaration",
            "publishedDate": "2025-11; mês da edição, dia não indicado",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Coautoria explícita sustenta direção pública parcial.",
        "uncertainty": "Não implica nacionalização exclusiva.",
        "reviewedOn": "2026-10-07"
      }
    ],
    "caveats": "Declarações autorais delimitadas; demais eixos desconhecidos. Revisão documental independente delimitada aceita; integração pelo Root pendente. Evidência compartilhada entre seis coautores; não são confirmações independentes nem execução pessoal."
  },
  {
    "id": "adriana-abdenur",
    "name": "Adriana Abdenur",
    "aliases": [
      "Adriana E. Abdenur"
    ],
    "period": "2025-11; mês da edição, dia não indicado",
    "identityReview": "author-current-source-checked",
    "sources": [
      {
        "title": "G20 Extraordinary Committee of Independent Experts on Global Inequality — Summary Report, novembro de 2025",
        "url": "https://www.g20.org.za/wp-content/uploads/2025/11/1-G20-Global-Inequality-Report-Summary.pdf",
        "note": "Capa/autoria p2 e recomendação p10 efetivamente lidas. Declaração coletiva explicitamente assinada pelos seis autores; fonte comum, não seis confirmações independentes."
      },
      {
        "title": "Why we need an International Panel on Inequality — autoria e afiliações, Nature, 9/9/2026",
        "url": "https://www.nature.com/articles/d41586-026-02806-9?error=cookies_not_supported",
        "note": "Somente autoria nominal, afiliações e data efetivamente visíveis foram lidas para identidade atual. Corpo sob paywall não usado em codificação; não garante cargo na data de acesso."
      }
    ],
    "coding": [
      {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "G20 Extraordinary Committee of Independent Experts on Global Inequality — Summary Report, novembro de 2025",
            "locator": "p10, seção 6: public provision; autoria nominal p2",
            "statement": "Relatório conjunto recomenda provisão pública universal de serviços essenciais.",
            "basis": "declaration",
            "publishedDate": "2025-11; mês da edição, dia não indicado",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Coautoria explícita sustenta direção pública parcial.",
        "uncertainty": "Não implica nacionalização exclusiva.",
        "reviewedOn": "2026-10-07"
      }
    ],
    "caveats": "Declarações autorais delimitadas; demais eixos desconhecidos. Revisão documental independente delimitada aceita; integração pelo Root pendente. Evidência compartilhada entre seis coautores; não são confirmações independentes nem execução pessoal."
  },
  {
    "id": "winnie-byanyima",
    "name": "Winnie Byanyima",
    "aliases": [],
    "period": "2025-11; mês da edição, dia não indicado",
    "identityReview": "author-current-source-checked",
    "sources": [
      {
        "title": "G20 Extraordinary Committee of Independent Experts on Global Inequality — Summary Report, novembro de 2025",
        "url": "https://www.g20.org.za/wp-content/uploads/2025/11/1-G20-Global-Inequality-Report-Summary.pdf",
        "note": "Capa/autoria p2 e recomendação p10 efetivamente lidas. Declaração coletiva explicitamente assinada pelos seis autores; fonte comum, não seis confirmações independentes."
      },
      {
        "title": "Why we need an International Panel on Inequality — autoria e afiliações, Nature, 9/9/2026",
        "url": "https://www.nature.com/articles/d41586-026-02806-9?error=cookies_not_supported",
        "note": "Somente autoria nominal, afiliações e data efetivamente visíveis foram lidas para identidade atual. Corpo sob paywall não usado em codificação; não garante cargo na data de acesso."
      }
    ],
    "coding": [
      {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "G20 Extraordinary Committee of Independent Experts on Global Inequality — Summary Report, novembro de 2025",
            "locator": "p10, seção 6: public provision; autoria nominal p2",
            "statement": "Relatório conjunto recomenda provisão pública universal de serviços essenciais.",
            "basis": "declaration",
            "publishedDate": "2025-11; mês da edição, dia não indicado",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Coautoria explícita sustenta direção pública parcial.",
        "uncertainty": "Não implica nacionalização exclusiva.",
        "reviewedOn": "2026-10-07"
      }
    ],
    "caveats": "Declarações autorais delimitadas; demais eixos desconhecidos. Revisão documental independente delimitada aceita; integração pelo Root pendente. Evidência compartilhada entre seis coautores; não são confirmações independentes nem execução pessoal."
  },
  {
    "id": "jayati-ghosh",
    "name": "Jayati Ghosh",
    "aliases": [],
    "period": "2025-11; mês da edição, dia não indicado",
    "identityReview": "author-current-source-checked",
    "sources": [
      {
        "title": "G20 Extraordinary Committee of Independent Experts on Global Inequality — Summary Report, novembro de 2025",
        "url": "https://www.g20.org.za/wp-content/uploads/2025/11/1-G20-Global-Inequality-Report-Summary.pdf",
        "note": "Capa/autoria p2 e recomendação p10 efetivamente lidas. Declaração coletiva explicitamente assinada pelos seis autores; fonte comum, não seis confirmações independentes."
      },
      {
        "title": "Why we need an International Panel on Inequality — autoria e afiliações, Nature, 9/9/2026",
        "url": "https://www.nature.com/articles/d41586-026-02806-9?error=cookies_not_supported",
        "note": "Somente autoria nominal, afiliações e data efetivamente visíveis foram lidas para identidade atual. Corpo sob paywall não usado em codificação; não garante cargo na data de acesso."
      }
    ],
    "coding": [
      {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "G20 Extraordinary Committee of Independent Experts on Global Inequality — Summary Report, novembro de 2025",
            "locator": "p10, seção 6: public provision; autoria nominal p2",
            "statement": "Relatório conjunto recomenda provisão pública universal de serviços essenciais.",
            "basis": "declaration",
            "publishedDate": "2025-11; mês da edição, dia não indicado",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Coautoria explícita sustenta direção pública parcial.",
        "uncertainty": "Não implica nacionalização exclusiva.",
        "reviewedOn": "2026-10-07"
      }
    ],
    "caveats": "Declarações autorais delimitadas; demais eixos desconhecidos. Revisão documental independente delimitada aceita; integração pelo Root pendente. Evidência compartilhada entre seis coautores; não são confirmações independentes nem execução pessoal."
  },
  {
    "id": "imraan-valodia",
    "name": "Imraan Valodia",
    "aliases": [],
    "period": "2025-11; mês da edição, dia não indicado",
    "identityReview": "author-current-source-checked",
    "sources": [
      {
        "title": "G20 Extraordinary Committee of Independent Experts on Global Inequality — Summary Report, novembro de 2025",
        "url": "https://www.g20.org.za/wp-content/uploads/2025/11/1-G20-Global-Inequality-Report-Summary.pdf",
        "note": "Capa/autoria p2 e recomendação p10 efetivamente lidas. Declaração coletiva explicitamente assinada pelos seis autores; fonte comum, não seis confirmações independentes."
      },
      {
        "title": "Why we need an International Panel on Inequality — autoria e afiliações, Nature, 9/9/2026",
        "url": "https://www.nature.com/articles/d41586-026-02806-9?error=cookies_not_supported",
        "note": "Somente autoria nominal, afiliações e data efetivamente visíveis foram lidas para identidade atual. Corpo sob paywall não usado em codificação; não garante cargo na data de acesso."
      }
    ],
    "coding": [
      {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "G20 Extraordinary Committee of Independent Experts on Global Inequality — Summary Report, novembro de 2025",
            "locator": "p10, seção 6: public provision; autoria nominal p2",
            "statement": "Relatório conjunto recomenda provisão pública universal de serviços essenciais.",
            "basis": "declaration",
            "publishedDate": "2025-11; mês da edição, dia não indicado",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Coautoria explícita sustenta direção pública parcial.",
        "uncertainty": "Não implica nacionalização exclusiva.",
        "reviewedOn": "2026-10-07"
      }
    ],
    "caveats": "Declarações autorais delimitadas; demais eixos desconhecidos. Revisão documental independente delimitada aceita; integração pelo Root pendente. Evidência compartilhada entre seis coautores; não são confirmações independentes nem execução pessoal."
  },
  {
    "id": "wanga-zembe-mkabile",
    "name": "Wanga Zembe-Mkabile",
    "aliases": [],
    "period": "2025-11; mês da edição, dia não indicado",
    "identityReview": "author-current-source-checked",
    "sources": [
      {
        "title": "G20 Extraordinary Committee of Independent Experts on Global Inequality — Summary Report, novembro de 2025",
        "url": "https://www.g20.org.za/wp-content/uploads/2025/11/1-G20-Global-Inequality-Report-Summary.pdf",
        "note": "Capa/autoria p2 e recomendação p10 efetivamente lidas. Declaração coletiva explicitamente assinada pelos seis autores; fonte comum, não seis confirmações independentes."
      },
      {
        "title": "Why we need an International Panel on Inequality — autoria e afiliações, Nature, 9/9/2026",
        "url": "https://www.nature.com/articles/d41586-026-02806-9?error=cookies_not_supported",
        "note": "Somente autoria nominal, afiliações e data efetivamente visíveis foram lidas para identidade atual. Corpo sob paywall não usado em codificação; não garante cargo na data de acesso."
      }
    ],
    "coding": [
      {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "G20 Extraordinary Committee of Independent Experts on Global Inequality — Summary Report, novembro de 2025",
            "locator": "p10, seção 6: public provision; autoria nominal p2",
            "statement": "Relatório conjunto recomenda provisão pública universal de serviços essenciais.",
            "basis": "declaration",
            "publishedDate": "2025-11; mês da edição, dia não indicado",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Coautoria explícita sustenta direção pública parcial.",
        "uncertainty": "Não implica nacionalização exclusiva.",
        "reviewedOn": "2026-10-07"
      }
    ],
    "caveats": "Declarações autorais delimitadas; demais eixos desconhecidos. Revisão documental independente delimitada aceita; integração pelo Root pendente. Evidência compartilhada entre seis coautores; não são confirmações independentes nem execução pessoal."
  },
  {
    "id": "mia-mottley",
    "name": "Mia Mottley",
    "aliases": [
      "Mia Amor Mottley"
    ],
    "period": "2026-04-14",
    "identityReview": "author-current-source-checked",
    "sources": [
      {
        "title": "Mia Amor Mottley — 16th V20 Ministerial Dialogue, transcript",
        "url": "https://cvfv20.org/wp-content/uploads/2026/04/16th-V20-Ministerial-Dialogue_Transcript_H.E.-Mia-Amor-Mottley-1.pdf",
        "note": "Texto primário efetivamente lido em 7/10/2026; declaração delimitada, não auditoria de execução. A atividade pessoal datada confirma identidade em 2026 sem garantir cargo na data de acesso."
      }
    ],
    "coding": [
      {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Mia Amor Mottley — 16th V20 Ministerial Dialogue, transcript",
            "locator": "p1 compact education/health/water; p3 40- and 50-year loans",
            "statement": "Propõe financiamento concessional de longo prazo para educação, hospitais e água.",
            "basis": "declaration",
            "publishedDate": "2026-04-14",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Financiamento público de serviços essenciais sustenta direção pública parcial.",
        "uncertainty": "Inclui capital privado e local; não determina propriedade dos prestadores.",
        "reviewedOn": "2026-10-07"
      }
    ],
    "caveats": "Declarações autorais delimitadas; demais eixos desconhecidos. Revisão documental independente delimitada aceita; integração pelo Root pendente. "
  },
  {
    "id": "mario-draghi",
    "name": "Mario Draghi",
    "aliases": [],
    "period": "2026-05-14",
    "identityReview": "author-current-source-checked",
    "sources": [
      {
        "title": "Mario Draghi — Charlemagne Prize speech, Aachen, 14 May 2026",
        "url": "https://www.karlspreis.de/files/docs/Reden%20bei%20Verleihung/2026%20Mario%20Draghi%20English.pdf",
        "note": "Texto primário efetivamente lido em 7/10/2026; declaração delimitada, não auditoria de execução. A atividade pessoal datada confirma identidade em 2026 sem garantir cargo na data de acesso."
      }
    ],
    "coding": [
      {
        "axis": "tec",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Mario Draghi — Charlemagne Prize speech, Aachen, 14 May 2026",
            "locator": "p3–4 AI industrial mobilisation; deployment",
            "statement": "Defende adoção de IA e investimento em energia, chips e computação.",
            "basis": "declaration",
            "publishedDate": "2026-05-14",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Adoção tecnológica concreta sustenta direção tecnológica parcial.",
        "uncertainty": "Sem validar previsões de produtividade; não estabelece apoio a toda tecnologia.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "con",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Mario Draghi — Charlemagne Prize speech, Aachen, 14 May 2026",
            "locator": "p5 coordinate state aid; policy strategy at European level",
            "statement": "Defende coordenação europeia de ajuda estatal e política industrial.",
            "basis": "declaration",
            "publishedDate": "2026-05-14",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Coordenação deliberada de investimento sustenta planejamento parcial.",
        "uncertainty": "Também defende concorrência continental e intervenção mais estreita.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Mario Draghi — Charlemagne Prize speech, Aachen, 14 May 2026",
            "locator": "p7 deliberate national choice, endorsed by its electorate",
            "statement": "Exige escolha nacional avalizada pelo eleitorado e responsabilização do governo.",
            "basis": "declaration",
            "publishedDate": "2026-05-14",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Aval eleitoral explícito sustenta representação democrática parcial.",
        "uncertainty": "Proposta sobre integração europeia; não audita representação nacional.",
        "reviewedOn": "2026-10-07"
      }
    ],
    "caveats": "Declarações autorais delimitadas; demais eixos desconhecidos. Revisão documental independente delimitada aceita; integração pelo Root pendente. Federalismo pragmático supranacional não transferido automaticamente a est; apoio à defesa europeia impede inferir pacifismo irrestrito."
  },
  {
    "id": "christine-lagarde",
    "name": "Christine Lagarde",
    "aliases": [],
    "period": "2026-06-15",
    "identityReview": "author-current-source-checked",
    "sources": [
      {
        "title": "Christine Lagarde — Money in transition",
        "url": "https://www.ecb.europa.eu/press/key/date/2026/html/ecb.sp260615~35e6c6c4de.en.html",
        "note": "Texto primário efetivamente lido em 7/10/2026; declaração delimitada, não auditoria de execução. A atividade pessoal datada confirma identidade em 2026 sem garantir cargo na data de acesso."
      }
    ],
    "coding": [
      {
        "axis": "tec",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Christine Lagarde — Money in transition",
            "locator": "Wholesale markets/tokenisation; retail digital euro; TIPS",
            "statement": "Defende tokenização, euro digital e pagamentos instantâneos conectados.",
            "basis": "declaration",
            "publishedDate": "2026-06-15",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Adoção digital explícita sustenta orientação tecnológica parcial.",
        "uncertainty": "Preserva dinheiro físico; não endossa toda inovação privada.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "con",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Christine Lagarde — Money in transition",
            "locator": "Pontes/Appia; final paragraphs shared standards/common framework",
            "statement": "Defende infraestrutura de liquidação coordenada e marco comum para ativos digitais.",
            "basis": "declaration",
            "publishedDate": "2026-06-15",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Coordenação pública de infraestrutura e regulação financeira sustenta direção parcial.",
        "uncertainty": "Cooperação com provedores privados e concorrência; não planejamento integral.",
        "reviewedOn": "2026-10-07"
      }
    ],
    "caveats": "Declarações autorais delimitadas; demais eixos desconhecidos. Revisão documental independente delimitada aceita; integração pelo Root pendente. Moeda pública não imputa nacionalização de bancos; pagamentos externos não viram livre comércio de bens."
  },
  {
    "id": "janet-yellen",
    "name": "Janet Yellen",
    "aliases": [
      "Janet L. Yellen"
    ],
    "period": "2026-06-02",
    "identityReview": "author-current-source-checked",
    "sources": [
      {
        "title": "Janet L. Yellen — The Powell years at the Fed: A retrospective",
        "url": "https://www.brookings.edu/articles/remarks-by-janet-l-yellen-at-the-powell-years-at-the-fed-a-retrospective/",
        "note": "Texto primário efetivamente lido em 7/10/2026; declaração delimitada, não auditoria de execução. A atividade pessoal datada confirma identidade em 2026 sem garantir cargo na data de acesso."
      }
    ],
    "coding": [
      {
        "axis": "con",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Janet L. Yellen — The Powell years at the Fed: A retrospective",
            "locator": "Second lesson, strengthening both bank supervision and broader financial regulation",
            "statement": "Defende reforçar supervisão bancária e regulação financeira preventiva.",
            "basis": "declaration",
            "publishedDate": "2026-06-02",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Regulação pública explícita de mercados financeiros sustenta direção parcial.",
        "uncertainty": "Rejeita ativismo monetário excessivo contra choques de oferta e defende independência do Fed frente ao Executivo (Third lesson, 161–169; contraponto de controle_16). Não planejamento total.",
        "reviewedOn": "2026-10-07"
      }
    ],
    "caveats": "Declarações autorais delimitadas; demais eixos desconhecidos. Revisão documental independente delimitada aceita; integração pelo Root pendente. Independência do banco central não foi transferida a pod; foto de 2014 não comprova cargo atual."
  },
  {
    "id": "nadia-murad",
    "name": "Nadia Murad",
    "aliases": [],
    "period": "2025-09-23; publicação; declaração adicional 2026-03-04",
    "identityReview": "author-current-source-checked",
    "sources": [
      {
        "title": "Nadia Murad — Reflection Is Not Enough: action at UNGA",
        "url": "https://www.nadiasinitiative.org/news/nadia-murad-calls-for-action-at-unga-september-2025",
        "note": "Texto primário efetivamente lido em 7/10/2026; declaração delimitada, não auditoria de execução. A atividade pessoal datada confirma identidade em 2026 sem garantir cargo na data de acesso. Datas de publicação conferidas no índice próprio Advocacy efetivamente lido; não afirmar certificação independente de datas no corpo renderizado."
      },
      {
        "title": "Nadia Murad — own quoted statement on escalating Middle East conflict",
        "url": "https://www.nadiasinitiative.org/news/ni-statement-on-the-escalating-conflict-in-the-middle-east",
        "note": "Texto primário efetivamente lido em 7/10/2026; declaração delimitada, não auditoria de execução. A atividade pessoal datada confirma identidade em 2026 sem garantir cargo na data de acesso. Datas de publicação conferidas no índice próprio Advocacy efetivamente lido; não afirmar certificação independente de datas no corpo renderizado."
      },
      {
        "title": "Nadia’s Initiative — Advocacy index, dated publication metadata",
        "url": "https://www.nadiasinitiative.org/advocacy",
        "note": "Índice próprio efetivamente lido: publicação de ação UNGA em 23/9/2025 e comunicado nominal em 4/3/2026. Datas de publicação/metadata, não certificação independente do dia do evento ou da exibição de data no corpo das páginas. Não gera eixo adicional."
      }
    ],
    "coding": [
      {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Nadia Murad — Reflection Is Not Enough: action at UNGA",
            "locator": "Three urgent priorities, guarantee women’s participation",
            "statement": "Defende participação de mulheres nas decisões de paz e segurança.",
            "basis": "declaration",
            "publishedDate": "2025-09-23; publicação; dia do discurso não certificado",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Participação igual em decisões sustenta emancipação parcial.",
        "uncertainty": "Trechos atribuídos nominalmente pela própria organização; não agenda completa de costumes.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Nadia Murad — own quoted statement on escalating Middle East conflict",
            "locator": "Quoted personal statement, international community prevent further escalation",
            "statement": "Defende evitar escalada armada e proteger civis pelo direito internacional.",
            "basis": "declaration",
            "publishedDate": "2026-03-04",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Desescalada explícita sustenta direção pacifista parcial.",
        "uncertainty": "Usa somente fala nominal, não todo texto institucional; não desarmamento absoluto.",
        "reviewedOn": "2026-10-07"
      }
    ],
    "caveats": "Declarações autorais delimitadas; demais eixos desconhecidos. Revisão documental independente delimitada aceita; integração pelo Root pendente. A declaração nominal de março de 2026 confirma atividade pessoal atual."
  },
  {
    "id": "amina-mohammed",
    "name": "Amina Mohammed",
    "aliases": [
      "Amina J. Mohammed"
    ],
    "period": "2026-06-01",
    "identityReview": "author-current-source-checked",
    "sources": [
      {
        "title": "Amina J. Mohammed — 2026 ECOSOC Operational Activities Segment remarks",
        "url": "https://un-dco.org/stories/dedicated-independent-and-impartial-development-coordination-delivers-un-deputy-secretary",
        "note": "Texto primário efetivamente lido em 7/10/2026; declaração delimitada, não auditoria de execução. A atividade pessoal datada confirma identidade em 2026 sem garantir cargo na data de acesso."
      }
    ],
    "coding": [
      {
        "axis": "tec",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Amina J. Mohammed — 2026 ECOSOC Operational Activities Segment remarks",
            "locator": "Recalibration, headquarters digital capacities; embracing innovation and data",
            "statement": "Defende inovação e uso de dados e soluções digitais na coordenação do desenvolvimento.",
            "basis": "declaration",
            "publishedDate": "2026-06-01",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Adoção de instrumentos digitais sustenta orientação tecnológica parcial.",
        "uncertainty": "Coordenação administrativa da ONU não foi equiparada a planejamento de economia nacional.",
        "reviewedOn": "2026-10-07"
      }
    ],
    "caveats": "Declarações autorais delimitadas; demais eixos desconhecidos. Revisão documental independente delimitada aceita; integração pelo Root pendente. "
  },
  {
    "id": "antonio-guterres",
    "name": "António Guterres",
    "aliases": [
      "Antonio Guterres"
    ],
    "period": "2026-01-15",
    "identityReview": "author-current-source-checked",
    "sources": [
      {
        "title": "António Guterres — General Assembly priorities for 2026, as delivered",
        "url": "https://ukraine.un.org/en/308435-un-secretary-general-pushes-reform-peace-and-unity-remarks-general-assembly-priorities-2026",
        "note": "Texto primário efetivamente lido em 7/10/2026; declaração delimitada, não auditoria de execução. A atividade pessoal datada confirma identidade em 2026 sem garantir cargo na data de acesso."
      }
    ],
    "coding": [
      {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "António Guterres — General Assembly priorities for 2026, as delivered",
            "locator": "Second principle, Gaza/Ukraine/Sudan ceasefires and talks",
            "statement": "Defende cessar-fogo, fim das hostilidades e negociações.",
            "basis": "declaration",
            "publishedDate": "2026-01-15",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Desescalada negociada sustenta pacifismo parcial.",
        "uncertainty": "Não implica proibição absoluta da força ou fim das operações de paz.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "António Guterres — General Assembly priorities for 2026, as delivered",
            "locator": "Peace with justice, safeguard freedom of speech and civic space",
            "statement": "Defende expressão livre e espaço cívico contra repressão.",
            "basis": "declaration",
            "publishedDate": "2026-01-15",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Liberdades civis explícitas sustentam direção libertária parcial.",
        "uncertainty": "Não estabelece posições sobre toda política policial.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "António Guterres — General Assembly priorities for 2026, as delivered",
            "locator": "Women and girls, equality, participation; gender parity at senior levels",
            "statement": "Defende participação igual de mulheres e preservação de seus direitos.",
            "basis": "declaration",
            "publishedDate": "2026-01-15",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Igualdade de participação sustenta emancipação parcial.",
        "uncertainty": "Não certifica paridade executada ou toda agenda de costumes.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "imi",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "António Guterres — General Assembly priorities for 2026, as delivered",
            "locator": "Third principle, migrants rights; welcoming societies and everyone identity respected",
            "statement": "Defende acolhimento de migrantes e respeito às identidades culturais.",
            "basis": "declaration",
            "publishedDate": "2026-01-15",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Integração com diversidade sustenta direção multicultural parcial.",
        "uncertainty": "Reconhece gestão soberana de fronteiras dentro da lei.",
        "reviewedOn": "2026-10-07"
      }
    ],
    "caveats": "Declarações autorais delimitadas; demais eixos desconhecidos. Revisão documental independente delimitada aceita; integração pelo Root pendente.  IA: painel científico/governança não provam adoção ampla. Renováveis/redes/armazenamento coexistem com urgência climática; direção tec não resolvida, mantida desconhecida."
  },
  {
    "id": "lee-jae-myung",
    "name": "Lee Jae-myung",
    "aliases": [
      "Lee Jae Myung",
      "Lee Jaemyung"
    ],
    "period": "2026-04-02",
    "identityReview": "author-current-source-checked",
    "sources": [
      {
        "title": "Lee Jae Myung — 2026 Supplementary Budget Proposal address (Unofficial Translation)",
        "url": "https://en.president.go.kr/president/statements-remarks/QZxg91Ez",
        "note": "Texto da presidência efetivamente lido; tradução inglesa expressamente não oficial. Data publicada 2/4/2026 confirma atuação pessoal. Declarações não certificam medidas executadas."
      }
    ],
    "coding": [
      {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Lee Jae Myung — 2026 Supplementary Budget Proposal address (Unofficial Translation)",
            "locator": "First package, energy cost relief payments and lower seventy percent",
            "statement": "Defende pagamentos públicos direcionados às pessoas de menor renda.",
            "basis": "declaration",
            "publishedDate": "2026-04-02",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Transferência pública focalizada sustenta direção parcial.",
        "uncertainty": "Não determina nacionalização de serviços ou renda universal permanente.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "con",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Lee Jae Myung — 2026 Supplementary Budget Proposal address (Unofficial Translation)",
            "locator": "Emergency economic response; oil price cap and government-backed financing",
            "statement": "Defende teto do petróleo e resposta econômica coordenada pelo governo.",
            "basis": "declaration",
            "publishedDate": "2026-04-02",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Controle setorial e coordenação anticrise sustentam planejamento parcial.",
        "uncertainty": "Proposta emergencial, não regime permanente de controle integral.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "tec",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Lee Jae Myung — 2026 Supplementary Budget Proposal address (Unofficial Translation)",
            "locator": "Third package, AI transformation and next-generation technologies",
            "statement": "Propõe adoção industrial de IA e investimento em novas tecnologias.",
            "basis": "declaration",
            "publishedDate": "2026-04-02",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Adoção tecnológica industrial sustenta orientação parcial.",
        "uncertainty": "Não audita implantação nem toda tecnologia.",
        "reviewedOn": "2026-10-07"
      }
    ],
    "caveats": "Declarações autorais delimitadas; demais eixos desconhecidos. Revisão documental independente delimitada aceita; integração pelo Root pendente. "
  },
  {
    "id": "lawrence-wong",
    "name": "Lawrence Wong",
    "aliases": [],
    "period": "2026-08-23",
    "identityReview": "author-current-source-checked",
    "sources": [
      {
        "title": "Lawrence Wong — National Day Rally 2026",
        "url": "https://www.pmo.gov.sg/newsroom/ndr2026/",
        "note": "Texto primário efetivamente lido em 7/10/2026; declaração delimitada, não auditoria de execução. A atividade pessoal datada confirma identidade em 2026 sem garantir cargo na data de acesso."
      }
    ],
    "coding": [
      {
        "axis": "com",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Lawrence Wong — National Day Rally 2026",
            "locator": "Our response cannot retreat; ASEAN more effective single market",
            "statement": "Defende maior conexão internacional e mercado regional integrado.",
            "basis": "declaration",
            "publishedDate": "2026-08-23",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Integração de mercados sustenta direção globalista parcial.",
        "uncertainty": "Com regras de origem e segurança; não abertura sem restrições.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "tec",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Lawrence Wong — National Day Rally 2026",
            "locator": "Embracing Technology on our Own Terms",
            "statement": "Defende IA, genômica e veículos autônomos com capacitação.",
            "basis": "declaration",
            "publishedDate": "2026-08-23",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Adoção concreta sustenta orientação tecnológica parcial.",
        "uncertainty": "Mantém requisitos de segurança e limites a riscos.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Lawrence Wong — National Day Rally 2026",
            "locator": "Families, government-paid parental leave, preschool subsidies, public housing",
            "statement": "Defende licença parental paga pelo governo e subsídios a educação e moradia.",
            "basis": "declaration",
            "publishedDate": "2026-08-23",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Financiamento público social sustenta direção pública parcial.",
        "uncertainty": "Não determina estatização integral nem universalidade de todo benefício.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "con",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Lawrence Wong — National Day Rally 2026",
            "locator": "Planning and Building for the Long Term, industry/infrastructure/land",
            "statement": "Defende investimento coordenado e planejamento de infraestrutura e indústria.",
            "basis": "declaration",
            "publishedDate": "2026-08-23",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Alocação deliberada de investimento sustenta direção parcial.",
        "uncertainty": "Mercados e investimento privado coexistem; sem planejamento integral.",
        "reviewedOn": "2026-10-07"
      }
    ],
    "caveats": "Declarações autorais delimitadas; demais eixos desconhecidos. Revisão documental independente delimitada aceita; integração pelo Root pendente. Imigração tem contrapontos de diversidade, adaptação e controles; imi desconhecido."
  },
  {
    "id": "prabowo-subianto",
    "name": "Prabowo Subianto",
    "aliases": [],
    "period": "2026-01-22",
    "identityReview": "author-current-source-checked",
    "sources": [
      {
        "title": "Prabowo Subianto — Davos 2026 special address, full transcript",
        "url": "https://www.weforum.org/stories/forum-institutional/davos-2026-special-address-prabowo-subianto-indonesia/",
        "note": "Transcrição do organizador do evento efetivamente lida; produzida com IA e editada posteriormente para clareza, como informa a página. Atividade pessoal datada 22/1/2026; não certifica resultados relatados."
      }
    ],
    "coding": [
      {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Prabowo Subianto — Davos 2026 special address, full transcript",
            "locator": "Free nutritious meals; free medical checkups",
            "statement": "Defende refeições e exames médicos financiados por recursos públicos.",
            "basis": "declaration",
            "publishedDate": "2026-01-22",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Financiamento social público sustenta direção parcial.",
        "uncertainty": "Não certifica alcance numérico ou estatização completa.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "con",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Prabowo Subianto — Davos 2026 special address, full transcript",
            "locator": "Danantara finance/co-finance industries of the future",
            "statement": "Defende fundo soberano para direcionar financiamento industrial.",
            "basis": "declaration",
            "publishedDate": "2026-01-22",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Coordenação pública de investimento sustenta planejamento parcial.",
        "uncertainty": "Também defende parceiros privados e simplificação regulatória.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "tec",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Prabowo Subianto — Davos 2026 special address, full transcript",
            "locator": "Education digitalization, interactive smart panels",
            "statement": "Defende ampliar equipamentos digitais interativos nas escolas.",
            "basis": "declaration",
            "publishedDate": "2026-01-22",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Adoção digital educacional sustenta orientação parcial.",
        "uncertainty": "Não certifica implantação ou eficácia.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "com",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Prabowo Subianto — Davos 2026 special address, full transcript",
            "locator": "Trade agreements; more deeply integrated global economy; reducing barriers",
            "statement": "Defende acordos comerciais e redução de barreiras internacionais.",
            "basis": "declaration",
            "publishedDate": "2026-01-22",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Integração comercial explícita sustenta globalismo parcial.",
        "uncertainty": "Também prioriza autossuficiência alimentar e energética.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Prabowo Subianto — Davos 2026 special address, full transcript",
            "locator": "Conclusion, peace/friendship/collaboration over confrontation",
            "statement": "Declara preferência por cooperação e amizade entre países.",
            "basis": "declaration",
            "publishedDate": "2026-01-22",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Preferência explícita pela paz sustenta direção parcial.",
        "uncertainty": "Não estabelece desarmamento absoluto ou ausência de força.",
        "reviewedOn": "2026-10-07"
      }
    ],
    "caveats": "Declarações autorais delimitadas; demais eixos desconhecidos. Revisão documental independente delimitada aceita; integração pelo Root pendente. "
  }
];
export const publicFigureBatch06OriginalRecords: ReferenceEntry[] = [];
export const publicFigureBatch06OriginalCandidates: { id: string; name: string; identitySource: {title: string; url: string} }[] = [];
export const publicFigureBatch06: ReferenceEntry[] = publicFigureBatch06Specs.map(spec => {
  const entry: ReferenceEntry = { id: spec.id, name: spec.name, aliases: spec.aliases, kind: 'person', category: 'public-figure', period: spec.period, sources: spec.sources, caveats: spec.caveats, rationale: 'Declarações pessoais ou coautoria primária explícita; escopo delimitado.', vec: Object.fromEntries(AXES.map(({key}) => [key,50])) as ReferenceEntry['vec'], evidence: {}, axisEvidence: {}, coding: {} };
  for (const input of spec.coding) { const coded = codeReferenceAxis(input, spec.sources); entry.vec[input.axis] = coded.value; entry.evidence[input.axis] = coded.evidence; entry.axisEvidence![input.axis] = coded.axisEvidence; entry.coding![input.axis] = coded.coding; }
  return entry;
});
