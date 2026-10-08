import type {ReferenceEntry,ReferenceSource} from './references';
import {codeReferenceAxis,type ReferenceAxisCoding} from '../lib/reference-coding';
export const ranking675Ideology03PreviousSnapshots=[
  {
    "id": "social-liberalism",
    "kind": "ideology",
    "category": "ideology",
    "name": "Liberalismo social",
    "period": "Manifesto de Andorra, 20/05/2017",
    "vec": {
      "est": 50,
      "rep": 80,
      "pod": 40,
      "imi": 40,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 20,
      "rel": 80,
      "mor": 60,
      "tec": 60
    },
    "rationale": "Defende direitos individuais, democracia e responsabilidade pública pelo acesso à saúde e à educação.",
    "caveats": "Economia/propriedade e planejamento ficam desconhecidos: acesso a propriedade, saúde e mercados não estabelece predominância de uma forma de propriedade nem um modelo abrangente de alocação. Descentralização genérica não estabelece federalismo.",
    "sources": [
      {
        "title": "Manifesto Liberal de Andorra",
        "url": "https://liberal-international.org/who-we-are/our-mission/landmark-documents/political-manifestos/liberal-manifesto-2017/",
        "note": "Direitos, pluralismo, propriedade, empreendimento e seguridade."
      },
      {
        "title": "LI — Manifesto de Andorra 2017, PDF oficial",
        "url": "https://liberal-international.org/wp-content/uploads/2018/03/Andorra-Liberal-Manifesto-2017-FINAL.pdf",
        "note": "Fonte primária lida em 07/10/2026; locadores e limites registrados por eixo. Programa declarado, não estatística ou prática observada."
      }
    ],
    "evidence": {
      "rep": "high",
      "pod": "medium",
      "imi": "medium",
      "rel": "high",
      "mor": "medium",
      "com": "high",
      "tec": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "LI — Manifesto de Andorra 2017, PDF oficial"
        ],
        "rationale": "Democracia programática forte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Programa declarado, não prática de todos os partidos ou opinião dos membros."
      },
      "pod": {
        "sourceTitles": [
          "LI — Manifesto de Andorra 2017, PDF oficial"
        ],
        "rationale": "Liberdade com garantias legais. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: §1 também exige investimento público em segurança."
      },
      "imi": {
        "sourceTitles": [
          "LI — Manifesto de Andorra 2017, PDF oficial"
        ],
        "rationale": "Abertura cultural regulada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não é imigração irrestrita nem resposta completa sobre assimilação."
      },
      "rel": {
        "sourceTitles": [
          "LI — Manifesto de Andorra 2017, PDF oficial"
        ],
        "rationale": "Separação institucional explícita. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Não atribui ateísmo aos membros."
      },
      "mor": {
        "sourceTitles": [
          "LI — Manifesto de Andorra 2017, PDF oficial"
        ],
        "rationale": "Reforma social explícita e parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não uniformiza todas as pautas morais."
      },
      "com": {
        "sourceTitles": [
          "LI — Manifesto de Andorra 2017, PDF oficial"
        ],
        "rationale": "Livre comércio programático amplo. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Condicionado às regras da OMC e igualdade de acesso."
      },
      "tec": {
        "sourceTitles": [
          "LI — Manifesto de Andorra 2017, PDF oficial"
        ],
        "rationale": "Avanço técnico explicitamente regulado. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não legitima todo uso militar ou alteração corporal."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "LI — Manifesto de Andorra 2017, PDF oficial",
            "locator": "Response §2, pp.5",
            "statement": "Responsabilização democrática, poderes separados e sociedade civil.",
            "basis": "declaration",
            "publishedDate": "2017-05-20",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Democracia programática forte.",
        "uncertainty": "Programa declarado, não prática de todos os partidos ou opinião dos membros.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "pod": {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "LI — Manifesto de Andorra 2017, PDF oficial",
            "locator": "Response §3, pp.5–6",
            "statement": "Expressão, privacidade e proteção contra vigilância.",
            "basis": "declaration",
            "publishedDate": "2017-05-20",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Liberdade com garantias legais.",
        "uncertainty": "§1 também exige investimento público em segurança.",
        "reviewedOn": "2026-10-07",
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
            "sourceTitle": "LI — Manifesto de Andorra 2017, PDF oficial",
            "locator": "Response §9, pp.8–9",
            "statement": "Migração enriquece culturas, com limites de capacidade.",
            "basis": "declaration",
            "publishedDate": "2017-05-20",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Abertura cultural regulada.",
        "uncertainty": "Não é imigração irrestrita nem resposta completa sobre assimilação.",
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
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "LI — Manifesto de Andorra 2017, PDF oficial",
            "locator": "Response §2, pp.5",
            "statement": "Separa religiões organizadas e instituições estatais.",
            "basis": "declaration",
            "publishedDate": "2017-05-20",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Separação institucional explícita.",
        "uncertainty": "Não atribui ateísmo aos membros.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "mor": {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "LI — Manifesto de Andorra 2017, PDF oficial",
            "locator": "Response §1, pp.4–5",
            "statement": "Defende pessoas LGBT e direitos reprodutivos femininos.",
            "basis": "declaration",
            "publishedDate": "2017-05-20",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Reforma social explícita e parcial.",
        "uncertainty": "Não uniformiza todas as pautas morais.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "com": {
        "axis": "com",
        "position": "strong-second",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "LI — Manifesto de Andorra 2017, PDF oficial",
            "locator": "Response §8, pp.8",
            "statement": "Combate protecionismo e promove acordos abertos.",
            "basis": "declaration",
            "publishedDate": "2017-05-20",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Livre comércio programático amplo.",
        "uncertainty": "Condicionado às regras da OMC e igualdade de acesso.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 20,
        "range": [
          10,
          25
        ]
      },
      "tec": {
        "axis": "tec",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "LI — Manifesto de Andorra 2017, PDF oficial",
            "locator": "Response §7, pp.7–8",
            "statement": "Promove IA e biotecnologia com supervisão de abusos.",
            "basis": "declaration",
            "publishedDate": "2017-05-20",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Avanço técnico explicitamente regulado.",
        "uncertainty": "Não legitima todo uso militar ou alteração corporal.",
        "reviewedOn": "2026-10-07",
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
    "id": "christian-democracy",
    "kind": "ideology",
    "category": "ideology",
    "name": "Democracia cristã",
    "period": "Manifesto EPP, 2024",
    "vec": {
      "est": 50,
      "rep": 80,
      "pod": 60,
      "imi": 50,
      "dip": 60,
      "int": 40,
      "eco": 50,
      "con": 50,
      "com": 40,
      "rel": 50,
      "mor": 50,
      "tec": 60
    },
    "rationale": "Defende economia social de mercado, subsidiariedade, liberdades democráticas e proteção social, com raízes cristãs.",
    "caveats": "Raízes cristãs culturais não provam papel religioso do Estado: rel desconhecido. Tradição combinada com igualdade não define toda pauta moral: mor desconhecido. Economia social de mercado não prova propriedade predominante; eco e con desconhecidos.",
    "sources": [
      {
        "title": "EPP Manifesto 2024",
        "url": "https://www.epp.eu/papers/epp-manifesto-2024",
        "note": "Fonte primária para democracia, economia, defesa, integração, valores e inovação."
      }
    ],
    "evidence": {
      "rep": "high",
      "pod": "medium",
      "dip": "medium",
      "int": "medium",
      "com": "medium",
      "tec": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "EPP Manifesto 2024"
        ],
        "rationale": "Democracia programática explícita. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Programa declarado, não prática de todos os partidos ou opinião dos membros."
      },
      "pod": {
        "sourceTitles": [
          "EPP Manifesto 2024"
        ],
        "rationale": "Poderes de segurança reforçados, sujeitos a direitos. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não deduz autocracia da ênfase em segurança."
      },
      "dip": {
        "sourceTitles": [
          "EPP Manifesto 2024"
        ],
        "rationale": "Postura militar defensiva reforçada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não promove guerra agressiva nem anula neutralidade de membros."
      },
      "int": {
        "sourceTitles": [
          "EPP Manifesto 2024"
        ],
        "rationale": "Intervenção externa explicitamente prevista. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Contexto defensivo e cooperação europeia, não intervenção irrestrita."
      },
      "com": {
        "sourceTitles": [
          "EPP Manifesto 2024"
        ],
        "rationale": "Abertura comercial regulada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não é livre comércio irrestrito."
      },
      "tec": {
        "sourceTitles": [
          "EPP Manifesto 2024"
        ],
        "rationale": "Avanço tecnológico regulado em várias áreas. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não cobre todos os usos corporais ou riscos da tecnologia."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "EPP Manifesto 2024",
            "locator": "Introdução; §3.2",
            "statement": "Democracia, pluralismo e Estado de direito.",
            "basis": "declaration",
            "publishedDate": "Manifesto 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Democracia programática explícita.",
        "uncertainty": "Programa declarado, não prática de todos os partidos ou opinião dos membros.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "pod": {
        "axis": "pod",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "EPP Manifesto 2024",
            "locator": "§1.5 e 1.7; §3.2",
            "statement": "Amplia Europol, bases policiais e armazenamento de IPs com salvaguardas.",
            "basis": "declaration",
            "publishedDate": "Manifesto 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Poderes de segurança reforçados, sujeitos a direitos.",
        "uncertainty": "Não deduz autocracia da ênfase em segurança.",
        "reviewedOn": "2026-10-07",
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
            "sourceTitle": "EPP Manifesto 2024",
            "locator": "§1.2",
            "statement": "Amplia defesa, indústria militar e NATO.",
            "basis": "declaration",
            "publishedDate": "Manifesto 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Postura militar defensiva reforçada.",
        "uncertainty": "Não promove guerra agressiva nem anula neutralidade de membros.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "int": {
        "axis": "int",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "EPP Manifesto 2024",
            "locator": "§1.1–1.2, fundo de intervenção externa",
            "statement": "Ajuda militar externa e fundo de operações internacionais.",
            "basis": "declaration",
            "publishedDate": "Manifesto 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Intervenção externa explicitamente prevista.",
        "uncertainty": "Contexto defensivo e cooperação europeia, não intervenção irrestrita.",
        "reviewedOn": "2026-10-07",
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
            "sourceTitle": "EPP Manifesto 2024",
            "locator": "Introdução; §2.1–2.2",
            "statement": "Promove acordos recíprocos; protege setores estratégicos.",
            "basis": "declaration",
            "publishedDate": "Manifesto 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Abertura comercial regulada.",
        "uncertainty": "Não é livre comércio irrestrito.",
        "reviewedOn": "2026-10-07",
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
            "sourceTitle": "EPP Manifesto 2024",
            "locator": "§1.2,2.4,2.6",
            "statement": "Promove IA, fusão nuclear, robótica e biotecnologia agrícola.",
            "basis": "declaration",
            "publishedDate": "Manifesto 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Avanço tecnológico regulado em várias áreas.",
        "uncertainty": "Não cobre todos os usos corporais ou riscos da tecnologia.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      }
    }
  }
] as const;
export const ranking675Ideology03Codings={
  "social-liberalism": [
    {
      "axis": "rep",
      "position": "strong-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Liberal International — Manifesto de Andorra 2017",
          "locator": "Vision; Response §2, PDF pp.3/5 (82–85/157–181)",
          "statement": "Defende instituições democráticas responsáveis, separação de poderes, transparência, participação cidadã e sociedade civil independente do governo.",
          "basis": "declaration",
          "publishedDate": "2017-05-20",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A responsabilização democrática e os freios institucionais estruturam o governo inteiro.",
      "uncertainty": "Defender a democracia contra seus adversários não autoriza inferir imunidade de toda associação; descentralização genérica não estabelece uma constituição federal.",
      "relatedQuestionIds": [
        "representacao_01",
        "representacao_03",
        "representacao_07",
        "representacao_11",
        "representacao_19"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "pod",
      "position": "moderate-second",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Liberal International — Manifesto de Andorra 2017",
          "locator": "Response §§1–3, PDF pp.4–6 (134–142/148–150/171–192)",
          "statement": "Prescreve liberdade de expressão, reunião e associação, vida escolhida pelos indivíduos e privacidade protegida contra vigilância, com reparação por violações.",
          "basis": "declaration",
          "publishedDate": "2017-05-20",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A liberdade civil e os limites à vigilância são compromissos gerais do exercício do poder.",
      "uncertainty": "Segurança e investimento público contra violadores de direitos permanecem; as liberdades respeitam os direitos alheios e a ordem constitucional. Não se imputam regras sobre drogas ou armas.",
      "relatedQuestionIds": [
        "poder_03",
        "poder_04",
        "poder_07",
        "poder_16",
        "poder_17",
        "poder_18"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "imi",
      "position": "moderate-second",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Liberal International — Manifesto de Andorra 2017",
          "locator": "Vision; Response §§4/9, PDF pp.2–3/6/8–9 (72–80/198–213/286–298)",
          "statement": "Cultiva pluralidade de origens e crenças, educação para tolerância e apreciação das diferenças e migração como enriquecimento cultural.",
          "basis": "declaration",
          "publishedDate": "2017-05-20",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "O pluralismo cultural integra a concepção geral de sociedade e a política migratória.",
      "uncertainty": "Admite limites de ritmo e volume conforme capacidade do país receptor e exige integração legal e social; não estabelece todas as escolhas sobre idiomas ou fronteiras.",
      "relatedQuestionIds": [
        "imigracao_01",
        "imigracao_02",
        "imigracao_04",
        "imigracao_06"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "rel",
      "position": "strong-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Liberal International — Manifesto de Andorra 2017",
          "locator": "Response §§1–2, PDF pp.4–5 (140–142/179–181)",
          "statement": "Prescreve separar religiões organizadas e instituições estatais, protegendo a prática de crenças e ateísmo nos limites constitucionais.",
          "basis": "declaration",
          "publishedDate": "2017-05-20",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A separação institucional é norma explícita para todo governo, não apenas tolerância religiosa.",
      "uncertainty": "Religiões mantêm lugar legítimo na sociedade civil; a direção não mede crença privada nem define cada símbolo, imposto ou feriado.",
      "relatedQuestionIds": [
        "religiao_01",
        "religiao_03",
        "religiao_08",
        "religiao_18"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "mor",
      "position": "moderate-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Liberal International — Manifesto de Andorra 2017",
          "locator": "Vision; Response §1, PDF pp.3–5 (75–80/131–147)",
          "statement": "Defende escolhas de vida e afeto, igualdade das mulheres, direitos sexuais e reprodutivos e proteção de pessoas LGBT+, incluindo trans e não binárias.",
          "basis": "declaration",
          "publishedDate": "2017-05-20",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "Autonomia pessoal, igualdade de gênero e diversidade sexual compõem uma orientação social ampla.",
      "uncertainty": "Direitos de terceiros e legislação constitucional limitam a autonomia. Não presume uma posição expressa sobre cada modalidade de aborto, prostituição ou educação sexual.",
      "relatedQuestionIds": [
        "moral_03",
        "moral_07",
        "moral_09",
        "moral_18"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "com",
      "position": "strong-second",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Liberal International — Manifesto de Andorra 2017",
          "locator": "Response §8, PDF p.8 (266–285)",
          "statement": "Resiste ao protecionismo e exige manter e ampliar o regime global de comércio e investimento abertos, com acordos acessíveis a novos membros.",
          "basis": "declaration",
          "publishedDate": "2017-05-20",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A abertura comercial mundial é compromisso central expresso, além de um produto ou parceiro.",
      "uncertainty": "Acordos devem respeitar regras da OMC, acesso equitativo e distribuição de oportunidades. Não se inventa uma tarifa numérica ou ausência de toda regulação.",
      "relatedQuestionIds": [
        "comercio_02",
        "comercio_04",
        "comercio_06",
        "comercio_08",
        "comercio_12",
        "comercio_14"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "tec",
      "position": "moderate-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Liberal International — Manifesto de Andorra 2017",
          "locator": "Response §§5/7, PDF pp.6–8 (221–224/252–265)",
          "statement": "Promove pesquisa, inovação, telemedicina, biotecnologia e inteligência artificial para saúde, alimentos, desenvolvimento e expansão de liberdades.",
          "basis": "declaration",
          "publishedDate": "2017-05-20",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "O avanço tecnológico é orientação geral em vários campos e na organização econômica.",
      "uncertainty": "Exige supervisão transparente de abusos e proíbe usar os avanços mencionados para guerra ou armamento. Não estabelece autorização irrestrita de alteração corporal.",
      "relatedQuestionIds": [
        "tecnologia_01",
        "tecnologia_03",
        "tecnologia_05",
        "tecnologia_19"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "dip",
      "position": "moderate-second",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Liberal International — Manifesto de Andorra 2017",
          "locator": "Response §10, PDF p.9 (299–323)",
          "statement": "Prioriza relações pacíficas, direito internacional, tribunais, arbitragem e desarmamento; admite força física para manter decisões das instituições internacionais.",
          "basis": "declaration",
          "publishedDate": "2017-05-20",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A paz e a resolução jurídica orientam as relações internacionais gerais, com força coletiva excepcional.",
      "uncertainty": "Não é pacifismo absoluto ou extinção de toda defesa: a execução coercitiva internacional e a responsabilidade de proteger são contrapesos explícitos.",
      "relatedQuestionIds": [
        "diplomacia_02",
        "diplomacia_06",
        "diplomacia_10",
        "diplomacia_14",
        "diplomacia_20"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "int",
      "position": "moderate-second",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Liberal International — Manifesto de Andorra 2017",
          "locator": "Response §10, PDF p.9 (305–309/321–323)",
          "statement": "Atribui às democracias liberais o dever de invocar a responsabilidade de proteger diante de genocídio ou tirania que suprima permanentemente direitos básicos.",
          "basis": "declaration",
          "publishedDate": "2017-05-20",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A ação internacional diante de graves violações é dever positivo, não apenas acolhimento doméstico de refugiados.",
      "uncertainty": "A intervenção é delimitada pela doutrina multilateral e pelo direito internacional; não se infere guerra unilateral para qualquer interesse nacional.",
      "relatedQuestionIds": [
        "intervencao_01",
        "intervencao_05",
        "intervencao_07",
        "intervencao_09",
        "intervencao_13"
      ],
      "reviewedOn": "2026-10-08"
    }
  ],
  "christian-democracy": [
    {
      "axis": "rep",
      "position": "strong-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "EPP — Manifesto 2024",
          "locator": "Introduction; §§3.2/3.6 (43–49/195–205/226–229)",
          "statement": "Defende decisão cidadã, democracia, pluralismo, igualdade perante a lei, direitos de minorias e mecanismos para proteger cidadãos de governos que violem o Estado de direito.",
          "basis": "declaration",
          "publishedDate": "Manifesto EPP 2024",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A legitimidade democrática, o pluralismo e os limites ao governo são princípios gerais explícitos.",
      "uncertainty": "Propostas de convenção e competência europeia não provam a prática efetiva de cada partido; política de segurança reforçada permanece. Não se imputam procedimentos eleitorais não especificados.",
      "relatedQuestionIds": [
        "representacao_01",
        "representacao_03",
        "representacao_07",
        "representacao_11",
        "representacao_19"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "pod",
      "position": "moderate-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "EPP — Manifesto 2024",
          "locator": "§§1.4–1.7; 3.2 (74–94/99–105/198–205)",
          "statement": "Amplia Europol, ligação de bases policiais, mandados e monitoramento de fronteiras; exige armazenamento de endereços IP para crimes graves, com limites judiciais e proteção de dados.",
          "basis": "declaration",
          "publishedDate": "Manifesto EPP 2024",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A ampliação de poderes gerais de segurança e vigilância é explícita, com salvaguardas jurídicas.",
      "uncertainty": "Preserva direitos fundamentais, liberdades e limites do Tribunal de Justiça; armazenamento de IPs não equivale a interceptação de toda conversa. Não se presume ditadura ou ausência de devido processo.",
      "relatedQuestionIds": [
        "poder_03",
        "poder_07",
        "poder_17",
        "poder_19",
        "poder_20"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "dip",
      "position": "moderate-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "EPP — Manifesto 2024",
          "locator": "§§1.1–1.2 (51–65)",
          "statement": "Prescreve reforçar NATO, investimento e indústria militares, dissuasão, união de defesa e forças europeias prontas para mobilização.",
          "basis": "declaration",
          "publishedDate": "Manifesto EPP 2024",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A força militar e a capacidade defensiva orientam a política internacional geral.",
      "uncertainty": "Mantém caráter defensivo e neutralidade de certos membros; não autoriza guerra agressiva. Diplomacia comum e solução negociada para Chipre são contrapesos.",
      "relatedQuestionIds": [
        "diplomacia_01",
        "diplomacia_05",
        "diplomacia_11",
        "diplomacia_15",
        "diplomacia_19"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "int",
      "position": "moderate-second",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "EPP — Manifesto 2024",
          "locator": "§§1.1–1.3 (52–54/63–72)",
          "statement": "Prescreve ajuda militar à Ucrânia, capacidade de mobilização externa e fundo europeu para financiar operações militares internacionais dos membros.",
          "basis": "declaration",
          "publishedDate": "Manifesto EPP 2024",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "Há autorização positiva de ação militar externa coordenada, além de adesão abstrata a uma aliança.",
      "uncertainty": "Mantém defesa coletiva, decisão e neutralidade dos membros; para Chipre rejeita tropas estrangeiras e direitos de intervenção de Estados externos. Não é intervenção irrestrita.",
      "relatedQuestionIds": [
        "intervencao_03",
        "intervencao_05",
        "intervencao_08",
        "intervencao_14",
        "intervencao_17"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "com",
      "position": "moderate-second",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "EPP — Manifesto 2024",
          "locator": "Introduction; §§2.1–2.2 (47/120–132)",
          "statement": "Prescreve comércio com o mundo, novos acordos recíprocos e abertura de mercados, protegendo setores estratégicos, agricultores e padrões sociais e ambientais.",
          "basis": "declaration",
          "publishedDate": "Manifesto EPP 2024",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A abertura internacional geral é objetivo positivo com restrições estratégicas explícitas.",
      "uncertainty": "Salvaguardas, combate a dumping, proteção contra aquisições estratégicas e redução de riscos frente à China impedem inferir liberalização irrestrita.",
      "relatedQuestionIds": [
        "comercio_01",
        "comercio_04",
        "comercio_09",
        "comercio_10",
        "comercio_17"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "tec",
      "position": "moderate-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "EPP — Manifesto 2024",
          "locator": "§§1.2/2.3–2.7/3.5 (60/134–154/164–183/217–224)",
          "statement": "Promove IA, automação, robótica, biomedicina, biotecnologia agrícola e pesquisa de fusão nuclear, com liberdade de inovação e regulação sensata.",
          "basis": "declaration",
          "publishedDate": "Manifesto EPP 2024",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A adoção tecnológica orienta produção, defesa, alimentos, transporte e saúde, para além de um projeto isolado.",
      "uncertainty": "Preserva ética, direitos digitais, segurança e neutralidade tecnológica; não equivale a ausência de restrições nem autoriza toda alteração corporal ou genética.",
      "relatedQuestionIds": [
        "tecnologia_01",
        "tecnologia_03",
        "tecnologia_05",
        "tecnologia_19"
      ],
      "reviewedOn": "2026-10-08"
    }
  ]
} as const;
const reviewedSources={
  "social-liberalism": {
    "title": "Liberal International — Manifesto de Andorra 2017",
    "url": "https://liberal-international.org/wp-content/uploads/2018/03/Andorra-Liberal-Manifesto-2017-FINAL.pdf",
    "note": "Manifesto adotado em 20 de maio de 2017. As dez páginas e as dez respostas programáticas foram relidas integralmente em 8 de outubro de 2026. As posições são declarações organizacionais, não resultados observados. Direitos, segurança, integração, supervisão científica e força internacional autorizada são mantidos como limites."
  },
  "christian-democracy": {
    "title": "EPP — Manifesto 2024",
    "url": "https://www.epp.eu/papers/epp-manifesto-2024",
    "note": "Corpo próprio do Manifesto 2024 relido integralmente em 8 de outubro de 2026; navegação, rodapé e o programa separado de 2012 não sustentam as codificações. Defesa, segurança pública, comércio e tecnologia são propostas europeias com limites jurídicos, subsidiariedade e direitos individuais. Estatísticas e realizações alegadas não são verificadas como resultados."
  }
} as const;
function canonical(v:unknown):string{if(Array.isArray(v))return '['+v.map(canonical).join(',')+']';if(v!==null&&typeof v==='object')return '{'+Object.entries(v).sort(([a],[b])=>a.localeCompare(b)).map(([k,x])=>JSON.stringify(k)+':'+canonical(x)).join(',')+'}';return JSON.stringify(v)}
function reviewed(entry:ReferenceEntry):ReferenceEntry{
 const id=entry.id as keyof typeof ranking675Ideology03Codings;
 const sources:ReferenceSource[]=[reviewedSources[id],...entry.sources];
 const vec=Object.fromEntries(Object.keys(entry.vec).map(axis=>[axis,50])) as ReferenceEntry['vec'];
 const evidence:NonNullable<ReferenceEntry['evidence']>={};const axisEvidence:NonNullable<ReferenceEntry['axisEvidence']>={};const coding:NonNullable<ReferenceEntry['coding']>={};
 for(const input of ranking675Ideology03Codings[id]){const c=codeReferenceAxis(input as unknown as ReferenceAxisCoding,sources);vec[input.axis]=c.value;evidence[input.axis]=c.evidence;axisEvidence[input.axis]=c.axisEvidence;coding[input.axis]=c.coding;}
 return {...entry,vec,evidence,axisEvidence,coding,sources};
}
export const ranking675Ideology03ExpectedPosts=ranking675Ideology03PreviousSnapshots.map(prior=>reviewed(prior as unknown as ReferenceEntry));
export function reconcileRanking675Ideology03(entry:ReferenceEntry):ReferenceEntry{
 const prior=ranking675Ideology03PreviousSnapshots.find(p=>p.id===entry.id);if(!prior)return entry;
 const post=ranking675Ideology03ExpectedPosts.find(p=>p.id===entry.id)!;
 if(canonical(entry)===canonical(post))return entry;
 if(canonical(entry)!==canonical(prior))throw new Error('ranking675-ideology03 changed baseline: '+entry.id);
 return reviewed(entry);
}
