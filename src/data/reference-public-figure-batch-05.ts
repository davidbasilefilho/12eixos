import type { ReferenceEntry, ReferenceSource } from './references';
import { AXES } from '../lib/scoring';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';
export interface PublicFigureBatch05Spec { id: string; name: string; aliases?: string[]; period: string; sources: ReferenceSource[]; coding: ReferenceAxisCoding[]; caveats: string; identityReview: 'author-current-source-checked'; }
export const publicFigureBatch05Specs: PublicFigureBatch05Spec[] = [
  {
    "id": "ellen-johnson-sirleaf",
    "name": "Ellen Johnson Sirleaf",
    "period": "2025-08-10; data de publicação no índice do próprio centro; dia do evento não certificado",
    "identityReview": "author-current-source-checked",
    "sources": [
      {
        "title": "EJS Center Founder’s closing remarks at the Africa Health Sovereignty Summit",
        "url": "https://ejscenter.org/ejs-center-founders-closing-remarks-at-the-africa-health-sovereignty-summit/",
        "note": "Texto autoral efetivamente aberto em 7/10/2026; somente os trechos localizados abaixo geram evidência. Declaração, não auditoria de execução."
      },
      {
        "title": "Ellen Johnson Sirleaf — identidade pública em 2026",
        "url": "https://ejscenter.org/former-president-ellen-johnson-sirleafs-nine-powers-of-leadership-set-a-blueprint-for-amujae-leaders-at-the-2026-amujae-leadership-forum-in-monrovia/",
        "note": "Notícia do próprio centro de 14/6/2026 registra sua palestra; ex-presidente da Libéria, sem cargo governamental atual. Página efetivamente aberta em 7/10/2026; não gera scores."
      }
    ],
    "coding": [
      {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "EJS Center Founder’s closing remarks at the Africa Health Sovereignty Summit",
            "publishedDate": "2025-08-10; data de publicação no índice do próprio centro; dia do evento não certificado",
            "accessedDate": "2026-10-07",
            "locator": "Terceira prioridade, parágrafos Third, we must re-energize the Abuja Declaration e It is time for every African government",
            "statement": "Propõe tributos direcionados e maior investimento de governos no financiamento da saúde.",
            "basis": "declaration"
          }
        ],
        "rationale": "Financiamento público explícito de serviço essencial sustenta direção pública parcial.",
        "uncertainty": "Não determina propriedade dos prestadores nem nacionalização integral; também prevê instrumentos privados e diáspora.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "EJS Center Founder’s closing remarks at the Africa Health Sovereignty Summit",
            "publishedDate": "2025-08-10; data de publicação no índice do próprio centro; dia do evento não certificado",
            "accessedDate": "2026-10-07",
            "locator": "Penúltimo bloco, Let us also be reminded that women are central",
            "statement": "Defende plena liderança e participação de mulheres nos sistemas de saúde.",
            "basis": "declaration"
          }
        ],
        "rationale": "Participação igual de mulheres em posições de decisão fornece direção emancipatória delimitada.",
        "uncertainty": "Um domínio setorial não estabelece toda a agenda de costumes.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "tec",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "EJS Center Founder’s closing remarks at the Africa Health Sovereignty Summit",
            "publishedDate": "2025-08-10; data de publicação no índice do próprio centro; dia do evento não certificado",
            "accessedDate": "2026-10-07",
            "locator": "Primeira prioridade, We must fix the digital blind spot até When we build digital systems",
            "statement": "Defende infraestrutura digital, conectividade e treinamento para antecipar epidemias.",
            "basis": "declaration"
          }
        ],
        "rationale": "Adoção tecnológica concreta da saúde sustenta orientação tecnológica parcial.",
        "uncertainty": "Não valida a estatística citada de digitalização, nem todas as tecnologias ou biotecnologias.",
        "reviewedOn": "2026-10-07"
      }
    ],
    "caveats": "Declarações delimitadas, sem transferir posições do governo, partido ou de terceiros. Demais eixos desconhecidos; trechos autorais revistos independentemente, sem recertificar fontes arquivadas."
  },
  {
    "id": "leymah-gbowee",
    "name": "Leymah Gbowee",
    "period": "2020-02-11",
    "identityReview": "author-current-source-checked",
    "sources": [
      {
        "title": "Leymah Gbowee — Africa’s Prison, reflexão sobre a libertação de Mandela",
        "url": "https://www.nelsonmandela.org/uploads/files/Speech-Lemayah-Gbowee.pdf",
        "note": "Texto autoral efetivamente aberto em 7/10/2026; somente os trechos localizados abaixo geram evidência. Declaração, não auditoria de execução."
      },
      {
        "title": "Leymah Gbowee — identidade pública em 2026",
        "url": "https://www.moys.gov.lr/index.php/media/press-releases/mys-gbowee-peace-foundation-explore-collaboration-youth-peace-and-security",
        "note": "Ministério registra reunião presencial com Gbowee em 28/9/2026, publicada em 29/9. Página efetivamente aberta em 7/10/2026; não gera scores."
      }
    ],
    "coding": [
      {
        "axis": "imi",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Leymah Gbowee — Africa’s Prison, reflexão sobre a libertação de Mandela",
            "publishedDate": "2020-02-11",
            "accessedDate": "2026-10-07",
            "locator": "PDF p.4, Africa prison is the division of our communities",
            "statement": "Contesta dividir comunidades por etnia, religião ou orientação sexual.",
            "basis": "declaration"
          }
        ],
        "rationale": "Pluralismo cultural contrário à exclusão sustenta direção multicultural parcial.",
        "uncertainty": "Não é política completa de imigração ou admissão; referências a Mandela não são declarações dela.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Leymah Gbowee — Africa’s Prison, reflexão sobre a libertação de Mandela",
            "publishedDate": "2020-02-11",
            "accessedDate": "2026-10-07",
            "locator": "PDF p.5, definição de paz: an empowered, recognized appreciated and fully compensated community of women",
            "statement": "Inclui mulheres emancipadas, reconhecidas e plenamente remuneradas em sua proposta de paz.",
            "basis": "declaration"
          }
        ],
        "rationale": "Emancipação e igualdade material de mulheres sustentam direção progressista parcial.",
        "uncertainty": "Demais costumes e políticas familiares não documentados; a justiça social genérica não codifica outros eixos.",
        "reviewedOn": "2026-10-07"
      }
    ],
    "caveats": "Declarações delimitadas, sem transferir posições do governo, partido ou de terceiros. Demais eixos desconhecidos; trechos autorais revistos independentemente, sem recertificar fontes arquivadas."
  },
  {
    "id": "kailash-satyarthi",
    "name": "Kailash Satyarthi",
    "period": "2014-12-10; PDF hospedado pelo gabinete em diretório 2025/03 não atualiza o discurso",
    "identityReview": "author-current-source-checked",
    "sources": [
      {
        "title": "Kailash Satyarthi — Nobel Lecture, Let Us March!",
        "url": "https://www.kailashsatyarthi.net/wp-content/uploads/2025/03/Nobel1.pdf",
        "note": "Texto autoral efetivamente aberto em 7/10/2026; somente os trechos localizados abaixo geram evidência. Declaração, não auditoria de execução."
      },
      {
        "title": "Kailash Satyarthi — identidade pública em 2026",
        "url": "https://satyarthimovement.org/sss/",
        "note": "Relato de programa concluído entre 22/6 e 12/7/2026 identifica Kailash entre os líderes que orientaram a turma; horários inconsistentes na página não usados. Página efetivamente aberta em 7/10/2026; não gera scores."
      }
    ],
    "coding": [
      {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Kailash Satyarthi — Nobel Lecture, Let Us March!",
            "publishedDate": "2014-12-10; PDF hospedado pelo gabinete em diretório 2025/03 não atualiza o discurso",
            "accessedDate": "2026-10-07",
            "locator": "PDF p.9, I call upon all the governments; lista child marriages",
            "statement": "Exige terminar casamento infantil e exploração de crianças, incluindo abuso sexual.",
            "basis": "declaration"
          }
        ],
        "rationale": "Reforma concreta de costumes de casamento infantil sustenta direção emancipatória.",
        "uncertainty": "A referência religiosa é motivação pessoal, não desenho de governo; escravidão privada não vira score automático de coerção estatal.",
        "reviewedOn": "2026-10-07"
      }
    ],
    "caveats": "Declarações delimitadas, sem transferir posições do governo, partido ou de terceiros. Demais eixos desconhecidos; trechos autorais revistos independentemente, sem recertificar fontes arquivadas."
  },
  {
    "id": "jose-ramos-horta",
    "name": "José Ramos-Horta",
    "aliases": ["José Manuel Ramos-Horta", "Jose Ramos Horta"],
    "period": "1997-08-23; versão de artigo hospedada no International Journal of Peace Studies; dia editorial não indicado",
    "identityReview": "author-current-source-checked",
    "sources": [
      {
        "title": "José Ramos-Horta — Taiwan and East Timor: Human Rights, Rule of Law, Self-Determination",
        "url": "https://www3.gmu.edu/programs/icar/ijps/vol4_1/ramos_ho.htm",
        "note": "Texto autoral efetivamente aberto em 7/10/2026; somente os trechos localizados abaixo geram evidência. Declaração, não auditoria de execução."
      },
      {
        "title": "José Ramos-Horta — identidade pública em 2026",
        "url": "https://en.tatoli.tl/2026/09/24/remarks-by-president-ramos-horta-at-the-81st-session-united-nations-general-assembly/12/",
        "note": "Agência pública publica texto autoral da intervenção de 23/9/2026, em 24/9; confirmação contemporânea não mistura o discurso de 1997 com 2026. Página efetivamente aberta em 7/10/2026; não gera scores."
      }
    ],
    "coding": [
      {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "José Ramos-Horta — Taiwan and East Timor: Human Rights, Rule of Law, Self-Determination",
            "publishedDate": "1997-08-23; versão de artigo hospedada no International Journal of Peace Studies; dia editorial não indicado",
            "accessedDate": "2026-10-07",
            "locator": "Rule of Law, parágrafo We will endeavor to build",
            "statement": "Propõe Estado democrático legitimado por eleições livres e democráticas.",
            "basis": "declaration"
          }
        ],
        "rationale": "Escolha explícita por consentimento eleitoral sustenta direção democrática.",
        "uncertainty": "Visão antes da independência não certifica prática governamental posterior.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "José Ramos-Horta — Taiwan and East Timor: Human Rights, Rule of Law, Self-Determination",
            "publishedDate": "1997-08-23; versão de artigo hospedada no International Journal of Peace Studies; dia editorial não indicado",
            "accessedDate": "2026-10-07",
            "locator": "Independent media, parágrafo We will encourage a free and independent media",
            "statement": "Defende imprensa livre, independente do governo e tão independente quanto o Judiciário.",
            "basis": "declaration"
          }
        ],
        "rationale": "Liberdade de imprensa limita autoridade sobre expressão.",
        "uncertainty": "O mesmo trecho rejeita controle estrangeiro da mídia; não deriva liberdade irrestrita ou todo sistema penal.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "José Ramos-Horta — Taiwan and East Timor: Human Rights, Rule of Law, Self-Determination",
            "publishedDate": "1997-08-23; versão de artigo hospedada no International Journal of Peace Studies; dia editorial não indicado",
            "accessedDate": "2026-10-07",
            "locator": "East Timor self-determination; Neutrality, Zone of Peace and Development",
            "statement": "Propõe diálogo sem pré-condições com a Indonésia e Timor sem exército permanente, com garantia internacional de neutralidade.",
            "basis": "declaration"
          }
        ],
        "rationale": "Negociação e desmilitarização propostas sustentam direção pacífica delimitada.",
        "uncertainty": "No mesmo texto reconhece legitimidade de dissuasão armada taiwanesa; por isso não é pacifismo absoluto nem score20.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "José Ramos-Horta — Taiwan and East Timor: Human Rights, Rule of Law, Self-Determination",
            "publishedDate": "1997-08-23; versão de artigo hospedada no International Journal of Peace Studies; dia editorial não indicado",
            "accessedDate": "2026-10-07",
            "locator": "Health and education, parágrafo We believe in free education and health care",
            "statement": "Propõe saúde e educação gratuitas e alocação de pelo menos 40% dos recursos à população nesses serviços e produção de alimentos.",
            "basis": "declaration"
          }
        ],
        "rationale": "Financiamento público de serviços explicitamente orçado sustenta direção pública parcial.",
        "uncertainty": "Admite capital taiwanês para recursos naturais; não estabelece propriedade pública integral dos prestadores.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "imi",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "José Ramos-Horta — Taiwan and East Timor: Human Rights, Rule of Law, Self-Determination",
            "publishedDate": "1997-08-23; versão de artigo hospedada no International Journal of Peace Studies; dia editorial não indicado",
            "accessedDate": "2026-10-07",
            "locator": "Indonesian migrants, parágrafo Indonesian migrants in East Timor will be welcome",
            "statement": "Defende permanência de migrantes indonésios e valoriza o enriquecimento cultural trazido por eles.",
            "basis": "declaration"
          }
        ],
        "rationale": "Admissão e preservação de diversidade cultural sustentam direção multicultural.",
        "uncertainty": "Proposta circunscrita ao Timor independente imaginado em 1997; não é auditoria da situação atual.",
        "reviewedOn": "2026-10-07"
      }
    ],
    "caveats": "Declarações delimitadas, sem transferir posições do governo, partido ou de terceiros. Demais eixos desconhecidos; trechos autorais revistos independentemente, sem recertificar fontes arquivadas."
  },
  {
    "id": "anthony-albanese",
    "name": "Anthony Albanese",
    "period": "2026-06-05",
    "identityReview": "author-current-source-checked",
    "sources": [
      {
        "title": "Anthony Albanese — Australia’s economic outlook 2026",
        "url": "https://www.pm.gov.au/media/australias-economic-outlook-2026",
        "note": "Texto autoral efetivamente aberto em 7/10/2026; somente os trechos localizados abaixo geram evidência. Declaração, não auditoria de execução. O próprio documento datado de 2026 também confirma identidade pública viva."
      }
    ],
    "coding": [
      {
        "axis": "com",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Anthony Albanese — Australia’s economic outlook 2026",
            "publishedDate": "2026-06-05",
            "accessedDate": "2026-10-07",
            "locator": "Strengthening our trade ties in our region e securing new market access",
            "statement": "Defende novas oportunidades de acesso comercial à Europa, Índia e Emirados.",
            "basis": "declaration"
          }
        ],
        "rationale": "Ampliação de acesso externo sustenta abertura comercial parcial.",
        "uncertainty": "Industrialização doméstica e segurança energética também são defendidas; não presume eliminação de todas as tarifas.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "tec",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Anthony Albanese — Australia’s economic outlook 2026",
            "publishedDate": "2026-06-05",
            "accessedDate": "2026-10-07",
            "locator": "Capitalising on the global investment in AI; new data centres; Empowering workers",
            "statement": "Defende adoção de IA, centros de dados e capacitação de trabalhadores para novas tecnologias.",
            "basis": "declaration"
          }
        ],
        "rationale": "Adoção concreta de tecnologia sustenta direção tecnológica.",
        "uncertainty": "Custos energéticos e mudança do trabalho reconhecidos; não cobre biotecnologia nem valida resultados anunciados.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Anthony Albanese — Australia’s economic outlook 2026",
            "publishedDate": "2026-06-05",
            "accessedDate": "2026-10-07",
            "locator": "Universal Medicare that every family can count on and afford; Health care that doesn’t depend",
            "statement": "Defende Medicare universal e acesso à saúde independente de renda ou plano do empregador.",
            "basis": "declaration"
          }
        ],
        "rationale": "Financiamento público universal de saúde sustenta direção pública parcial; não determina propriedade dos prestadores.",
        "uncertainty": "Também defende investimento privado e propriedade de moradias; não nacionaliza toda a economia.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "con",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Anthony Albanese — Australia’s economic outlook 2026",
            "publishedDate": "2026-06-05",
            "accessedDate": "2026-10-07",
            "locator": "Broadening and diversifying ... Future Made in Australia; Our Government’s agenda; Budget reforms",
            "statement": "Defende agenda pública de manufatura, incentivos tributários e orçamento para orientar crescimento e inovação.",
            "basis": "declaration"
          }
        ],
        "rationale": "Coordenação governamental de setores e incentivos sustenta planejamento parcial.",
        "uncertainty": "Não é planejamento central compulsório; empresas privadas continuam explicitamente participantes.",
        "reviewedOn": "2026-10-07"
      }
    ],
    "caveats": "Declarações delimitadas, sem transferir posições do governo, partido ou de terceiros. Demais eixos desconhecidos; trechos autorais revistos independentemente, sem recertificar fontes arquivadas."
  },
  {
    "id": "christopher-luxon",
    "name": "Christopher Luxon",
    "period": "2025-04-10 e 2026-09-27; cada eixo usa seu próprio documento",
    "identityReview": "author-current-source-checked",
    "sources": [
      {
        "title": "Christopher Luxon — Speech on foreign affairs and trade",
        "url": "https://www.beehive.govt.nz/speech/speech-foreign-affairs-and-trade",
        "note": "Texto autoral efetivamente aberto em 7/10/2026; somente os trechos localizados abaixo geram evidência. Declaração, não auditoria de execução."
      },
      {
        "title": "Christopher Luxon — identidade pública em 2026",
        "url": "https://www.national.org.nz/news/260927-christopherluxon",
        "note": "Texto de campanha atribuído nominalmente em 27/9/2026 confirma atividade pública; somente passagens próprias, não plataforma imputada. Página efetivamente aberta em 7/10/2026; não gera scores."
      },
      {
        "title": "Christopher Luxon — Speech to National Party 2026 Campaign Launch",
        "url": "https://www.national.org.nz/news/260927-christopherluxon",
        "note": "Texto autoral de 27/9/2026 aberto em 7/10/2026; alegações de resultados não verificadas como prática."
      }
    ],
    "coding": [
      {
        "axis": "com",
        "position": "strong-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Christopher Luxon — Speech on foreign affairs and trade",
            "publishedDate": "2025-04-10",
            "accessedDate": "2026-10-07",
            "locator": "Parágrafos Trade goes both ways; removal of New Zealand’s own trade barriers; promote free trade",
            "statement": "Defende remover barreiras domésticas tanto para importar quanto exportar e promover livre comércio.",
            "basis": "declaration"
          }
        ],
        "rationale": "A defesa ampla e explícita de comércio nos dois sentidos sustenta direção forte de abertura.",
        "uncertainty": "Permite respostas conformes às regras e não certifica ausência real de todas as barreiras; texto de 10/4/2025.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "con",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Christopher Luxon — Speech to National Party 2026 Campaign Launch",
            "locator": "Replacing the RMA with a new system based on property rights; Slashing red tape",
            "statement": "Defende substituir regulação de recursos por sistema baseado em propriedade e reduzir entraves a empresas.",
            "basis": "declaration",
            "publishedDate": "2026-09-27",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Desregulação explícita de atividade econômica favorece coordenação por iniciativa privada.",
        "uncertainty": "Também defende infraestrutura estatal; não é ausência geral de Estado nem planejamento totalmente rejeitado.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "pod",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Christopher Luxon — Speech to National Party 2026 Campaign Launch",
            "locator": "Restoring law and order, by cracking down on gangs ... locking offenders up for longer",
            "statement": "Defende repressão a gangues, mais polícia e penas de prisão mais longas para segurança comunitária.",
            "basis": "declaration",
            "publishedDate": "2026-09-27",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Ampliação explícita de coerção policial e penal sustenta direção de segurança.",
        "uncertainty": "Declaração não audita legalidade ou eficácia, nem implica governo autoritário em todo domínio.",
        "reviewedOn": "2026-10-07"
      }
    ],
    "caveats": "Declarações delimitadas, sem transferir posições do governo, partido ou de terceiros. Demais eixos desconhecidos; trechos autorais revistos independentemente, sem recertificar fontes arquivadas."
  },
  {
    "id": "keir-starmer",
    "name": "Keir Starmer",
    "period": "2026-06-08",
    "identityReview": "author-current-source-checked",
    "sources": [
      {
        "title": "Keir Starmer — London Tech Week 2026",
        "url": "https://www.gov.uk/government/speeches/prime-ministers-speech-at-london-tech-week-2026",
        "note": "Texto autoral efetivamente aberto em 7/10/2026; somente os trechos localizados abaixo geram evidência. Declaração, não auditoria de execução."
      },
      {
        "title": "Keir Starmer — identidade pública em 2026",
        "url": "https://www.gov.uk/government/speeches/keir-starmers-final-speech-as-prime-minister-20-july-2026",
        "note": "Transcrição oficial de 20/7/2026 registra discurso de saída; não rotular primeiro-ministro atual. Página efetivamente aberta em 7/10/2026; não gera scores."
      }
    ],
    "coding": [
      {
        "axis": "tec",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Keir Starmer — London Tech Week 2026",
            "publishedDate": "2026-06-08",
            "accessedDate": "2026-10-07",
            "locator": "Britain has three options; third path; AI tutors; AI jobs tool",
            "statement": "Defende adoção de IA com proteção contra danos e ferramentas de educação e emprego.",
            "basis": "declaration"
          }
        ],
        "rationale": "Adoção tecnológica concreta com salvaguardas sustenta direção tecnológica.",
        "uncertainty": "Trechos Political content redacted não utilizados nem reconstruídos; não valida diagnósticos ou impactos alegados.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "con",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Keir Starmer — London Tech Week 2026",
            "publishedDate": "2026-06-08",
            "accessedDate": "2026-10-07",
            "locator": "Government will use the power of public procurement; sovereign compute capability; active industrial strategy",
            "statement": "Defende compras públicas de chips e infraestrutura computacional para orientar inovação industrial.",
            "basis": "declaration"
          }
        ],
        "rationale": "Compras e infraestrutura direcionadas constituem coordenação pública parcial.",
        "uncertainty": "Empresas privadas e simplificação de regulação permanecem; não é planejamento central integral.",
        "reviewedOn": "2026-10-07"
      }
    ],
    "caveats": "Declarações delimitadas, sem transferir posições do governo, partido ou de terceiros. Demais eixos desconhecidos; trechos autorais revistos independentemente, sem recertificar fontes arquivadas."
  },
  {
    "id": "bassirou-diomaye-faye",
    "name": "Bassirou Diomaye Faye",
    "period": "2026-07-21",
    "identityReview": "author-current-source-checked",
    "sources": [
      {
        "title": "Bassirou Diomaye Faye — Pacte national de souveraineté alimentaire",
        "url": "https://www.presidence.sn/fr/actualites/souverainete-alimentaire-le-president-bassirou-diomaye-faye-appelle-a-un-pacte-national-fonde-sur-la-science-et-linnovation/",
        "note": "Texto autoral efetivamente aberto em 7/10/2026; somente os trechos localizados abaixo geram evidência. Declaração, não auditoria de execução. O próprio documento datado de 2026 também confirma identidade pública viva."
      }
    ],
    "coding": [
      {
        "axis": "tec",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Bassirou Diomaye Faye — Pacte national de souveraineté alimentaire",
            "publishedDate": "2026-07-21",
            "accessedDate": "2026-10-07",
            "locator": "Allocution integral após Seul le prononcé fait foi; maîtrise des intrants; agriculture de précision et intelligence artificielle",
            "statement": "Defende agricultura de precisão, IA e inovação como meios para alimentação e resiliência.",
            "basis": "declaration"
          }
        ],
        "rationale": "Adoção tecnológica específica sustenta direção tecnológica parcial.",
        "uncertainty": "Não utiliza resumo editorial anterior ao discurso, nem presume aprovação de todas as biotecnologias.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "con",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Bassirou Diomaye Faye — Pacte national de souveraineté alimentaire",
            "publishedDate": "2026-07-21",
            "accessedDate": "2026-10-07",
            "locator": "Allocution: Agenda national de Transformation Sénégal 2050; Pacte national; action concertée de l’État",
            "statement": "Defende estratégia nacional e coordenação do Estado com cientistas e produtores para transformar sistemas alimentares.",
            "basis": "declaration"
          }
        ],
        "rationale": "Direcionamento produtivo coordenado pelo Estado sustenta planejamento parcial.",
        "uncertainty": "A coordenação inclui setor privado e saberes locais; soberania alimentar não prova tarifas protecionistas.",
        "reviewedOn": "2026-10-07"
      }
    ],
    "caveats": "Declarações delimitadas, sem transferir posições do governo, partido ou de terceiros. Demais eixos desconhecidos; trechos autorais revistos independentemente, sem recertificar fontes arquivadas."
  },
  {
    "id": "john-mahama",
    "name": "John Mahama",
    "aliases": ["John Dramani Mahama"],
    "period": "2026-10-03",
    "identityReview": "author-current-source-checked",
    "sources": [
      {
        "title": "John Dramani Mahama — Alamein Africa Forum Keynote Address on Investing in Health",
        "url": "https://presidency.gov.gh/speech-alamein-africa-forum-keynote-address-on-investing-in-health-manufacturing-and-regional-value-chain/",
        "note": "Texto autoral efetivamente aberto em 7/10/2026; somente os trechos localizados abaixo geram evidência. Declaração, não auditoria de execução. O próprio documento datado de 2026 também confirma identidade pública viva."
      }
    ],
    "coding": [
      {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "John Dramani Mahama — Alamein Africa Forum Keynote Address on Investing in Health",
            "publishedDate": "2026-10-03",
            "accessedDate": "2026-10-07",
            "locator": "In Ghana, we are implementing the Accra Reset; Free Primary Health Care; Medical Trust Fund",
            "statement": "Defende expansão de seguro nacional, atenção primária gratuita e fundo de saúde.",
            "basis": "declaration"
          }
        ],
        "rationale": "Financiamento e prestação públicos de saúde sustentam direção pública parcial.",
        "uncertainty": "O mesmo discurso pede capital privado, bancos e fundos soberanos; não é propriedade estatal integral.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "con",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "John Dramani Mahama — Alamein Africa Forum Keynote Address on Investing in Health",
            "publishedDate": "2026-10-03",
            "accessedDate": "2026-10-07",
            "locator": "HINGE digital platform; Accra Reset Presidential Council; dedicated Task Forces",
            "statement": "Defende plataforma regulatória integrada, forças de trabalho e observatório para orientar financiamento e compromissos produtivos.",
            "basis": "declaration"
          }
        ],
        "rationale": "Coordenação institucional dirigida do investimento e produção sustenta planejamento parcial.",
        "uncertainty": "Investimentos privados e comercialização também são explicitamente previstos; resultados não auditados.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "com",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "John Dramani Mahama — Alamein Africa Forum Keynote Address on Investing in Health",
            "publishedDate": "2026-10-03",
            "accessedDate": "2026-10-07",
            "locator": "The AfCFTA Market Size; dismantle non-tariff barriers across regional value chains",
            "statement": "Defende mercado continental de livre comércio e desmontar barreiras não tarifárias regionais.",
            "basis": "declaration"
          }
        ],
        "rationale": "Remoção de barreiras regionais sustenta abertura comercial parcial.",
        "uncertainty": "Também defende substituição de importações; não implica livre comércio irrestrito com todos os continentes.",
        "reviewedOn": "2026-10-07"
      }
    ],
    "caveats": "Declarações delimitadas, sem transferir posições do governo, partido ou de terceiros. Demais eixos desconhecidos; trechos autorais revistos independentemente, sem recertificar fontes arquivadas."
  },
  {
    "id": "bola-ahmed-tinubu",
    "name": "Bola Ahmed Tinubu",
    "aliases": ["Bola Tinubu"],
    "period": "2026-10-01",
    "identityReview": "author-current-source-checked",
    "sources": [
      {
        "title": "Bola Ahmed Tinubu — From Reform to Prosperity, Independence Day Address",
        "url": "https://statehouse.gov.ng/from-reform-to-prosperity-independence-day-address-to-the-nation-by-his-excellency-president-bola-ahmed-tinubu-gcfr-1st-october-2026/",
        "note": "Texto autoral efetivamente aberto em 7/10/2026; somente os trechos localizados abaixo geram evidência. Declaração, não auditoria de execução. O próprio documento datado de 2026 também confirma identidade pública viva."
      }
    ],
    "coding": [
      {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Bola Ahmed Tinubu — From Reform to Prosperity, Independence Day Address",
            "publishedDate": "2026-10-01",
            "accessedDate": "2026-10-07",
            "locator": "Strengthening direct support for the poorest households; essential public services poorer Nigerians depend on",
            "statement": "Defende apoio direto às famílias pobres e reforço de saúde, educação e serviços públicos com estados e governos locais.",
            "basis": "declaration"
          }
        ],
        "rationale": "Financiamento social e serviços públicos explícitos sustentam direção pública parcial.",
        "uncertainty": "Também combate subsídios considerados ineficientes e incentiva empresas privadas; não determina nacionalização integral.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "con",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Bola Ahmed Tinubu — From Reform to Prosperity, Independence Day Address",
            "publishedDate": "2026-10-01",
            "accessedDate": "2026-10-07",
            "locator": "Government ... mechanised irrigation; roads, railways and ports; infrastructure and finance",
            "statement": "Defende coordenação pública de infraestrutura, irrigação e financiamento para agricultura e indústria.",
            "basis": "declaration"
          }
        ],
        "rationale": "Direcionamento produtivo público sustenta planejamento parcial.",
        "uncertainty": "Concorrência e empreendimento privados são centrais no discurso; não é planejamento central compulsório.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "tec",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Bola Ahmed Tinubu — From Reform to Prosperity, Independence Day Address",
            "publishedDate": "2026-10-01",
            "accessedDate": "2026-10-07",
            "locator": "Expanding mechanised irrigation; increasing mechanisation; expand digital connectivity into communities",
            "statement": "Defende mecanização agrícola e expansão da conectividade digital às comunidades.",
            "basis": "declaration"
          }
        ],
        "rationale": "Adoção de equipamentos e redes concretas sustenta direção tecnológica parcial.",
        "uncertainty": "Não extrapola a transumanismo ou biotecnologia; alegações de crescimento e segurança não verificadas.",
        "reviewedOn": "2026-10-07"
      }
    ],
    "caveats": "Declarações delimitadas, sem transferir posições do governo, partido ou de terceiros. Demais eixos desconhecidos; trechos autorais revistos independentemente, sem recertificar fontes arquivadas."
  }
];

/** Explicit complete snapshots; archival evidence does not automatically become active coding. */
export const publicFigureBatch05OriginalRecords : ReferenceEntry[] = [
  {
    "id": "ellen-johnson-sirleaf",
    "kind": "person",
    "category": "public-figure",
    "name": "Ellen Johnson Sirleaf",
    "period": "Presidência da Libéria e pronunciamentos à ONU, 2006–2018",
    "vec": {
      "est": 50,
      "rep": 80,
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
    "rationale": "O pronunciamento defende instituições democráticas, direitos humanos, desenvolvimento e cooperação multilateral.",
    "caveats": "Perfil catalogado a partir do documento indicado. Eixos sem apoio documental direto permanecem em 50 como desconhecidos. Quando menos de seis eixos têm evidência média ou alta, o perfil não participa do ranking de proximidade; a fonte e o período não autorizam extrapolar posições para toda a vida da pessoa.",
    "sources": [
      {
        "title": "Address by Her Excellency Ellen Johnson Sirleaf to the General Assembly — A/61/PV.11 (19 September 2006)",
        "url": "https://digitallibrary.un.org/record/583259/files/A_61_PV.11-EN.pdf",
        "note": "Transcrição oficial de seu discurso à Assembleia Geral após a eleição presidencial."
      }
    ],
    "evidence": {
      "rep": "high"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Address by Her Excellency Ellen Johnson Sirleaf to the General Assembly — A/61/PV.11 (19 September 2006)"
        ],
        "rationale": "O documento registra sua eleição democrática e seu compromisso declarado com instituições representativas; o recorte não presume a prática integral do governo."
      }
    }
  }
];
export const publicFigureBatch05OriginalCandidates = [
  {
    "candidateOnly": true,
    "id": "john-mahama",
    "name": "John Mahama",
    "category": "public-figure",
    "period": "Presidência e atuação pública em Gana, 2012–2026",
    "identitySource": {
      "title": "The Presidency of the Republic of Ghana — President Mahama",
      "url": "https://presidency.gov.gh/president-mahama-inaugurates-independent-fiscal-council-to-drive-transparency-and-economic-discipline/"
    }
  }
];
export const publicFigureBatch05: ReferenceEntry[] = publicFigureBatch05Specs.map(spec => {
  const original = publicFigureBatch05OriginalRecords.find(old => old.id === spec.id);
  const candidate = publicFigureBatch05OriginalCandidates.find(old => old.id === spec.id);
  const oldSources: ReferenceSource[] = original?.sources ?? (candidate ? [{title: candidate.identitySource.title, url: candidate.identitySource.url, note: "Fonte de identidade do candidato arquivístico preservada; não gera evidência de eixo."}] : []);
  const sources = [...oldSources, ...spec.sources].filter((source, index, all) => all.findIndex(other => other.title === source.title && other.url === source.url) === index);
  const entry: ReferenceEntry = { id: spec.id, name: spec.name, aliases: spec.aliases, kind: 'person', category: 'public-figure', period: spec.period, sources, caveats: spec.caveats, rationale: 'Declarações pessoais primárias delimitadas; eixos não documentados desconhecidos.', vec: Object.fromEntries(AXES.map(({key}) => [key,50])) as ReferenceEntry['vec'], evidence: {}, axisEvidence: {}, coding: {} };
  for (const input of spec.coding) { const coded = codeReferenceAxis(input, sources); entry.vec[input.axis] = coded.value; entry.evidence[input.axis] = coded.evidence; entry.axisEvidence![input.axis] = coded.axisEvidence; entry.coding![input.axis] = coded.coding; }
  return entry;
});
