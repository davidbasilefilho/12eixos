/** Unimported bounded proposal; authorial passages, never legacy score promotion. */
import type { ReferenceEntry, ReferenceSource } from './references';
import { AXES } from '../lib/scoring';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';
import { peopleNorthAmericaExpansion } from './reference-people-northamerica';
import { peopleEuropeExpansion } from './reference-people-europe';
export interface HistoricalFigureBatch06Spec { id:string;name:string;aliases:string[];period:string;rationale:string;caveats:string;sources:ReferenceSource[];claims:ReferenceAxisCoding[]; }
export const historicalFigureBatch06Specs: HistoricalFigureBatch06Spec[] = [
  {
    "id": "ralph-bunche",
    "name": "Ralph Bunche",
    "aliases": [],
    "period": "Some Reflections on Peace in Our Time, 1950-12-11",
    "rationale": "Recorte documental: apenas passagens identificadas; eixos desconhecidos em 50.",
    "caveats": "Citação autoral reproduzida pela ONU; não leitura integral do discurso. 1904–1971; morte 1971-12-09.",
    "sources": [
      {
        "title": "ONU: citação de Ralph Bunche na Nobel Lecture",
        "url": "https://www.un.org/en/about-us/nobel-peace-prize/ralph-bunche-1950",
        "note": "Corpo da página direta efetivamente lido; somente passagem autoral identificada."
      },
      {
        "title": "Identidade e vida — Ralph Bunche",
        "url": "https://www.nobelprize.org/prizes/peace/1950/bunche/facts/",
        "note": "Identidade institucional consultada: 1904–1971; morte 1971-12-09. Sem codificação de eixo; Nobel facts consultado por corpo indexado quando abertura bloqueada."
      }
    ],
    "claims": [
      {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "ONU: citação de Ralph Bunche na Nobel Lecture",
            "publishedDate": "1950-12-11",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "Abertura da citação: Ralph Bunche explained his philosophy",
            "statement": "Rejeita guerra preventiva e exige esgotar recursos honrosos para preservar paz."
          }
        ],
        "rationale": "Rejeita guerra preventiva e exige esgotar recursos honrosos para preservar paz.",
        "uncertainty": "Rejeição da guerra preventiva; não mede todas as modalidades de defesa.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "diplomacia_02"
        ]
      }
    ]
  },
  {
    "id": "na-lester-b-pearson",
    "name": "Lester B. Pearson",
    "aliases": [
      "Lester Bowles Pearson"
    ],
    "period": "The Four Faces of Peace, 1957-12-11",
    "rationale": "Recorte documental: apenas passagens identificadas; eixos desconhecidos em 50.",
    "caveats": "Recorte de 1957 distinto do antigo governo 1963–1968; não substitui o objeto bruto preservado. 1897–1972; morte 1972-12-27.",
    "sources": [
      {
        "title": "The Four Faces of Peace — Lester B. Pearson",
        "url": "https://www.nobelprize.org/prizes/peace/1957/pearson/lecture/",
        "note": "Passagens autorais indexadas efetivamente lidas; abertura direta Nobel bloqueada (403), sem afirmar leitura integral."
      },
      {
        "title": "Identidade e vida — Lester B. Pearson",
        "url": "https://www.nobelprize.org/prizes/peace/1957/pearson/facts/",
        "note": "Identidade institucional consultada: 1897–1972; morte 1972-12-27. Sem codificação de eixo; Nobel facts consultado por corpo indexado quando abertura bloqueada."
      }
    ],
    "claims": [
      {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "The Four Faces of Peace — Lester B. Pearson",
            "publishedDate": "1957-12-11",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "Parágrafo: The choice before us is peace or extinction",
            "statement": "Propõe consenso entre Estados em lugar da força unilateral e rejeita Estado predatório."
          }
        ],
        "rationale": "Propõe consenso entre Estados em lugar da força unilateral e rejeita Estado predatório.",
        "uncertainty": "Recorte parcial; o discurso também contempla paz e poder.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "diplomacia_02"
        ]
      }
    ]
  },
  {
    "id": "sean-macbride",
    "name": "Seán MacBride",
    "aliases": [
      "Sean MacBride"
    ],
    "period": "The Imperatives of Survival, 1974-12-12",
    "rationale": "Recorte documental: apenas passagens identificadas; eixos desconhecidos em 50.",
    "caveats": "As referências a religião, moral e indústria soviética não geram códigos. 1904–1988; morte 1988-01-15. Participação de mulheres no desarmamento e recusa individual de matar são preservadas na pesquisa, mas insuficientes para graduar os eixos mor/pod gerais.",
    "sources": [
      {
        "title": "The Imperatives of Survival — Seán MacBride",
        "url": "https://www.nobelprize.org/prizes/peace/1974/macbride/lecture/",
        "note": "Passagens autorais indexadas efetivamente lidas; abertura direta Nobel bloqueada (403), sem afirmar leitura integral."
      },
      {
        "title": "Identidade e vida — Seán MacBride",
        "url": "https://www.nobelprize.org/prizes/peace/1974/macbride/facts/",
        "note": "Identidade institucional consultada: 1904–1988; morte 1988-01-15. Sem codificação de eixo; Nobel facts consultado por corpo indexado quando abertura bloqueada."
      }
    ],
    "claims": [
      {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "The Imperatives of Survival — Seán MacBride",
            "publishedDate": "1974-12-12",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "Practical imperatives 1,4,6–8; Right to Refuse to Kill; Special Role for Women",
            "statement": "Defende desarmamento geral, arbitragem automática e jurisdição internacional."
          }
        ],
        "rationale": "Defende desarmamento geral, arbitragem automática e jurisdição internacional.",
        "uncertainty": "Admite força limitada de manutenção da paz.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "diplomacia_02"
        ]
      }
    ]
  },
  {
    "id": "andrei-sakharov",
    "name": "Andrei Sakharov",
    "aliases": [
      "Andrey Sakharov"
    ],
    "period": "Peace, Progress, Human Rights, 1975-12-11",
    "rationale": "Recorte documental: apenas passagens identificadas; eixos desconhecidos em 50.",
    "caveats": "Tradução do discurso; perfil de 1975 não projeta sua fase anterior de desenvolvimento nuclear. 1921–1989; morte 1989-12-14.",
    "sources": [
      {
        "title": "Peace, Progress, Human Rights — Andrei Sakharov",
        "url": "https://www.nobelprize.org/prizes/peace/1975/sakharov/lecture/",
        "note": "Passagens autorais indexadas efetivamente lidas; abertura direta Nobel bloqueada (403), sem afirmar leitura integral."
      },
      {
        "title": "Identidade e vida — Andrei Sakharov",
        "url": "https://www.nobelprize.org/prizes/peace/1975/sakharov/facts/",
        "note": "Identidade institucional consultada: 1921–1989; morte 1989-12-14. Sem codificação de eixo; Nobel facts consultado por corpo indexado quando abertura bloqueada."
      }
    ],
    "claims": [
      {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Peace, Progress, Human Rights — Andrei Sakharov",
            "publishedDate": "1975-12-11",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "Abertura sobre liberdade; Let me now tackle disarmament; We cannot reject",
            "statement": "Defende liberdade de informação, consciência e publicação e libertação de presos políticos."
          }
        ],
        "rationale": "Defende liberdade de informação, consciência e publicação e libertação de presos políticos.",
        "uncertainty": "Liberdades específicas; não avalia toda segurança pública.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "poder_16"
        ]
      },
      {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Peace, Progress, Human Rights — Andrei Sakharov",
            "publishedDate": "1975-12-11",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "Abertura sobre liberdade; Let me now tackle disarmament; We cannot reject",
            "statement": "Propõe acordos verificáveis, inspeções e reduções simultâneas e proporcionais de armas."
          }
        ],
        "rationale": "Propõe acordos verificáveis, inspeções e reduções simultâneas e proporcionais de armas.",
        "uncertainty": "Desarmamento equilibrado, sem abandonar unilateralmente defesa.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "diplomacia_02"
        ]
      },
      {
        "axis": "tec",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Peace, Progress, Human Rights — Andrei Sakharov",
            "publishedDate": "1975-12-11",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "Abertura sobre liberdade; Let me now tackle disarmament; We cannot reject",
            "statement": "Rejeita proibir pesquisa genética, materiais artificiais, alimentos sintéticos e automação."
          }
        ],
        "rationale": "Rejeita proibir pesquisa genética, materiais artificiais, alimentos sintéticos e automação.",
        "uncertainty": "Exige testes, controles e análise dos riscos; não endossa permissividade tecnológica irrestrita.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "tecnologia_04"
        ]
      }
    ]
  },
  {
    "id": "mother-teresa",
    "name": "Madre Teresa de Calcutá",
    "aliases": [
      "Mother Teresa",
      "Agnes Gonxha Bojaxhiu",
      "Anjezë Gonxhe Bojaxhiu"
    ],
    "period": "Nobel Lecture, 1979-12-11",
    "rationale": "Recorte documental: apenas passagens identificadas; eixos desconhecidos em 50.",
    "caveats": "Caridade não estabelece política de propriedade estatal; devoção não estabelece legislação religiosa. 1910–1997; morte 1997-09-05.",
    "sources": [
      {
        "title": "Nobel Lecture — Madre Teresa de Calcutá",
        "url": "https://www.nobelprize.org/prizes/peace/1979/teresa/lecture/",
        "note": "Passagens autorais indexadas efetivamente lidas; abertura direta Nobel bloqueada (403), sem afirmar leitura integral."
      },
      {
        "title": "Identidade e vida — Madre Teresa de Calcutá",
        "url": "https://www.nobelprize.org/prizes/peace/1979/teresa/facts/",
        "note": "Identidade institucional consultada: 1910–1997; morte 1997-09-05. Sem codificação de eixo; Nobel facts consultado por corpo indexado quando abertura bloqueada."
      }
    ],
    "claims": [
      {
        "axis": "mor",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Nobel Lecture — Madre Teresa de Calcutá",
            "publishedDate": "1979-12-11",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "Passagens sobre abortion, natural family planning e abstaining",
            "statement": "Condena aborto como interrupção de vida humana e promove abstinência e planejamento natural."
          }
        ],
        "rationale": "Condena aborto como interrupção de vida humana e promove abstinência e planejamento natural.",
        "uncertainty": "Subtemas aborto e família; não extrapola para todos os costumes.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "moral_10"
        ]
      }
    ]
  },
  {
    "id": "albert-schweitzer",
    "name": "Albert Schweitzer",
    "aliases": [],
    "period": "The Problem of Peace, 1954-11-04",
    "rationale": "Recorte documental: apenas passagens identificadas; eixos desconhecidos em 50.",
    "caveats": "Prêmio 1952; conferência 1954. Linguagem colonial e paternalista impede presumir inclusividade geral. 1875–1965; morte 1965-09-04.",
    "sources": [
      {
        "title": "The Problem of Peace — Albert Schweitzer",
        "url": "https://www.nobelprize.org/prizes/peace/1952/schweitzer/lecture/",
        "note": "Passagens autorais indexadas efetivamente lidas; abertura direta Nobel bloqueada (403), sem afirmar leitura integral."
      },
      {
        "title": "Identidade e vida — Albert Schweitzer",
        "url": "https://www.nobelprize.org/prizes/peace/1952/schweitzer/facts/",
        "note": "Identidade institucional consultada: 1875–1965; morte 1965-09-04. Sem codificação de eixo; Nobel facts consultado por corpo indexado quando abertura bloqueada."
      }
    ],
    "claims": [
      {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "The Problem of Peace — Albert Schweitzer",
            "publishedDate": "1954-11-04",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "Conclusão: guerra e ética; trecho sobre right to prepare defense",
            "statement": "Defende rejeição ética da guerra e instituições de paz."
          }
        ],
        "rationale": "Defende rejeição ética da guerra e instituições de paz.",
        "uncertainty": "Reconhece direito de preparar defesa enquanto a paz não estiver garantida.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "diplomacia_02"
        ]
      }
    ]
  },
  {
    "id": "willy-brandt",
    "name": "Willy Brandt",
    "aliases": [
      "Herbert Ernst Karl Frahm"
    ],
    "period": "Peace Policy in Our Time, 1971-12-11",
    "rationale": "Recorte documental: apenas passagens identificadas; eixos desconhecidos em 50.",
    "caveats": "Tradução; recorte do discurso de 1971, com objeto antigo da chancelaria integralmente preservado. 1913–1992; morte 1992-10-08.",
    "sources": [
      {
        "title": "Peace Policy in Our Time — Willy Brandt",
        "url": "https://www.nobelprize.org/prizes/peace/1971/brandt/lecture/",
        "note": "Passagens autorais indexadas efetivamente lidas; abertura direta Nobel bloqueada (403), sem afirmar leitura integral."
      },
      {
        "title": "Identidade e vida — Willy Brandt",
        "url": "https://www.nobelprize.org/prizes/peace/1971/brandt/facts/",
        "note": "Identidade institucional consultada: 1913–1992; morte 1992-10-08. Sem codificação de eixo; Nobel facts consultado por corpo indexado quando abertura bloqueada."
      }
    ],
    "claims": [
      {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Peace Policy in Our Time — Willy Brandt",
            "publishedDate": "1971-12-11",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "Seção I: war not a means; seção II: Western presence in Berlin",
            "statement": "Defende redução de tensões e comunicação entre fronteiras, rejeitando guerra como meio político."
          }
        ],
        "rationale": "Defende redução de tensões e comunicação entre fronteiras, rejeitando guerra como meio político.",
        "uncertainty": "Considera presença ocidental em Berlim necessária à paz; não pacifismo absoluto.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "diplomacia_02"
        ]
      }
    ]
  },
  {
    "id": "emily-greene-balch",
    "name": "Emily Greene Balch",
    "aliases": [],
    "period": "Toward Human Unity or Beyond Nationalism, 1948-04-07",
    "rationale": "Recorte documental: apenas passagens identificadas; eixos desconhecidos em 50.",
    "caveats": "Conferência 1948 distinta do prêmio 1946. Propostas de aviação/ONU não se tornam mapa econômico geral. 1867–1961; morte 1961-01-09. Objeção à conscrição é evidência temática, insuficiente isoladamente para graduar todo o eixo pod.",
    "sources": [
      {
        "title": "Toward Human Unity or Beyond Nationalism — Emily Greene Balch",
        "url": "https://www.nobelprize.org/prizes/peace/1946/balch/lecture/",
        "note": "Passagens autorais indexadas efetivamente lidas; abertura direta Nobel bloqueada (403), sem afirmar leitura integral."
      },
      {
        "title": "Identidade e vida — Emily Greene Balch",
        "url": "https://www.nobelprize.org/prizes/peace/1946/balch/facts/",
        "note": "Identidade institucional consultada: 1867–1961; morte 1961-01-09. Sem codificação de eixo; Nobel facts consultado por corpo indexado quando abertura bloqueada."
      }
    ],
    "claims": [
      {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Toward Human Unity or Beyond Nationalism — Emily Greene Balch",
            "publishedDate": "1948-04-07",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "Peace activities; conscientious objectors; final sobre collective security",
            "statement": "Defende renúncia à guerra e contenção de provocações entre Estados."
          }
        ],
        "rationale": "Defende renúncia à guerra e contenção de provocações entre Estados.",
        "uncertainty": "Admite segurança coletiva e constabulária armada limitada.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "diplomacia_02"
        ]
      }
    ]
  },
  {
    "id": "linus-pauling",
    "name": "Linus Pauling",
    "aliases": [],
    "period": "Science and Peace, 1963-12-11",
    "rationale": "Recorte documental: apenas passagens identificadas; eixos desconhecidos em 50.",
    "caveats": "Prêmio 1962; conferência 1963. Ser cientista não gera eixo tecnológico. 1901–1994; morte 1994-08-19.",
    "sources": [
      {
        "title": "Science and Peace — Linus Pauling",
        "url": "https://www.nobelprize.org/prizes/peace/1962/pauling/lecture/",
        "note": "Passagens autorais indexadas efetivamente lidas; abertura direta Nobel bloqueada (403), sem afirmar leitura integral."
      },
      {
        "title": "Identidade e vida — Linus Pauling",
        "url": "https://www.nobelprize.org/prizes/peace/1962/pauling/facts/",
        "note": "Identidade institucional consultada: 1901–1994; morte 1994-08-19. Sem codificação de eixo; Nobel facts consultado por corpo indexado quando abertura bloqueada."
      }
    ],
    "claims": [
      {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Science and Peace — Linus Pauling",
            "publishedDate": "1963-12-11",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "Abertura: world law; passagem sobre Test Ban Treaty",
            "statement": "Defende substituição da guerra por direito mundial e tratados de proibição de testes nucleares."
          }
        ],
        "rationale": "Defende substituição da guerra por direito mundial e tratados de proibição de testes nucleares.",
        "uncertainty": "Passagem nuclear e jurídica parcial; não abolição unilateral de toda defesa.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "diplomacia_02"
        ]
      }
    ]
  },
  {
    "id": "norman-angell",
    "name": "Norman Angell",
    "aliases": [
      "Sir Norman Angell",
      "Ralph Norman Angell Lane"
    ],
    "period": "Peace and the Public Mind, 1935-06-12",
    "rationale": "Recorte documental: apenas passagens identificadas; eixos desconhecidos em 50.",
    "caveats": "Prêmio 1933; conferência 1935. Diagnóstico de apoio popular a ditadores não vira preferência autocrática. 1872–1967; morte 1967-10-07.",
    "sources": [
      {
        "title": "Peace and the Public Mind — Norman Angell",
        "url": "https://www.nobelprize.org/prizes/peace/1933/angell/lecture/",
        "note": "Passagens autorais indexadas efetivamente lidas; abertura direta Nobel bloqueada (403), sem afirmar leitura integral."
      },
      {
        "title": "Identidade e vida — Norman Angell",
        "url": "https://www.nobelprize.org/prizes/peace/1933/angell/facts/",
        "note": "Identidade institucional consultada: 1872–1967; morte 1967-10-07. Sem codificação de eixo; Nobel facts consultado por corpo indexado quando abertura bloqueada."
      }
    ],
    "claims": [
      {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Peace and the Public Mind — Norman Angell",
            "publishedDate": "1935-06-12",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "Comparação entre force of litigants e community; crítica ao isolamento",
            "statement": "Defende direito e segurança coletiva contra competição entre forças nacionais privadas."
          }
        ],
        "rationale": "Defende direito e segurança coletiva contra competição entre forças nacionais privadas.",
        "uncertainty": "Aceita coerção comunitária contra violência; não rejeição de toda força.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "diplomacia_02"
        ]
      }
    ]
  },
  {
    "id": "rene-cassin",
    "name": "René Cassin",
    "aliases": [
      "Rene Cassin"
    ],
    "period": "The Charter of Human Rights, 1968-12-11",
    "rationale": "Recorte documental: apenas passagens identificadas; eixos desconhecidos em 50.",
    "caveats": "Tradução. Morte verificada na instituição IIDH, sem depender de biografia secundária conflitante. 1887–1976; morte 1976-02-20.",
    "sources": [
      {
        "title": "The Charter of Human Rights — René Cassin",
        "url": "https://www.nobelprize.org/prizes/peace/1968/cassin/lecture/",
        "note": "Passagens autorais indexadas efetivamente lidas; abertura direta Nobel bloqueada (403), sem afirmar leitura integral."
      },
      {
        "title": "Identidade e vida — René Cassin",
        "url": "https://www.iidh.org/en/commemoration-of-the-50th-anniversary-of-the-death-of-rene-cassin/",
        "note": "Identidade institucional consultada diretamente no corpo IIDH: 1887–1976; morte 1976-02-20. Sem codificação de eixo."
      }
    ],
    "claims": [
      {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "The Charter of Human Rights — René Cassin",
            "publishedDate": "1968-12-11",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "Passagens sobre direitos civis e other salient characteristic: universality",
            "statement": "Endossa liberdades civis, judiciais, religiosas e políticas da Declaração Universal."
          }
        ],
        "rationale": "Endossa liberdades civis, judiciais, religiosas e políticas da Declaração Universal.",
        "uncertainty": "Declaração jurídica, não valida execução nem todas as políticas de segurança.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "poder_16"
        ]
      },
      {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "The Charter of Human Rights — René Cassin",
            "publishedDate": "1968-12-11",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "Passagens sobre direitos civis e other salient characteristic: universality",
            "statement": "Descreve sociedade democrática como pressuposto e exclui onipotência do Estado totalitário."
          }
        ],
        "rationale": "Descreve sociedade democrática como pressuposto e exclui onipotência do Estado totalitário.",
        "uncertainty": "Compromisso institucional parcial; não atribui respostas a todos os mecanismos eleitorais.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "representacao_02"
        ]
      }
    ]
  },
  {
    "id": "john-hume",
    "name": "John Hume",
    "aliases": [],
    "period": "The Philosophy of Conflict Resolution, 2001-10-15",
    "rationale": "Recorte documental: apenas passagens identificadas; eixos desconhecidos em 50.",
    "caveats": "MIT publicou reportagem em 2001-10-17, com citações de palestra em 2001-10-15; relato editorial não usado como declaração autoral. 1937–2020; morte 2020-08-03.",
    "sources": [
      {
        "title": "MIT: Hume urges peaceful solutions",
        "url": "https://news.mit.edu/2001/hume-1017",
        "note": "Corpo da página direta efetivamente lido; somente passagem autoral identificada."
      },
      {
        "title": "Identidade e vida — John Hume",
        "url": "https://www.nobelprize.org/prizes/peace/1998/hume/facts/",
        "note": "Identidade institucional consultada: 1937–2020; morte 2020-08-03. Sem codificação de eixo; Nobel facts consultado por corpo indexado quando abertura bloqueada."
      }
    ],
    "claims": [
      {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "MIT: Hume urges peaceful solutions",
            "publishedDate": "2001-10-15",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "Citações diretas: no peace without dialogue; gun and bomb",
            "statement": "Defende diálogo para resolver conflitos e afirma que bombas e armas aprofundam divisões."
          }
        ],
        "rationale": "Defende diálogo para resolver conflitos e afirma que bombas e armas aprofundam divisões.",
        "uncertainty": "Citações de palestra; não leitura do discurso integral nem política militar inteira.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "diplomacia_02"
        ]
      }
    ]
  },
  {
    "id": "kim-dae-jung",
    "name": "Kim Dae-jung",
    "aliases": [
      "Kim Dae Jung"
    ],
    "period": "Nobel Lecture: raízes asiáticas da democracia, 2000-12-10",
    "rationale": "Recorte documental: apenas passagens identificadas; eixos desconhecidos em 50.",
    "caveats": "Nobel registra nascimento gregoriano em 1924. Mercado em frase geral não estabelece propriedade ou alocação. 1924–2009; morte 2009-08-18.",
    "sources": [
      {
        "title": "CALD: Asia on Democracy — trecho de Kim Dae Jung",
        "url": "https://cald.org/about/asia-on-democracy/",
        "note": "Corpo da página direta efetivamente lido; somente passagem autoral identificada."
      },
      {
        "title": "Identidade e vida — Kim Dae-jung",
        "url": "https://www.nobelprize.org/prizes/peace/2000/dae-jung/facts/",
        "note": "Identidade institucional consultada: 1924–2009; morte 2009-08-18. Sem codificação de eixo; Nobel facts consultado por corpo indexado quando abertura bloqueada."
      }
    ],
    "claims": [
      {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "CALD: Asia on Democracy — trecho de Kim Dae Jung",
            "publishedDate": "2000-12-10",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "Seção PRESIDENT KIM DAE JUNG: Myanmar, East Timor, democratic institutions",
            "statement": "Defende governo representativo em Myanmar e instituições democráticas e eleições em Timor-Leste."
          }
        ],
        "rationale": "Defende governo representativo em Myanmar e instituições democráticas e eleições em Timor-Leste.",
        "uncertainty": "Trecho reproduzido pela CALD; não leitura integral da palestra nem avaliação de seu governo.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "representacao_07"
        ]
      }
    ]
  },
  {
    "id": "joseph-rotblat",
    "name": "Joseph Rotblat",
    "aliases": [
      "Józef Rotblat",
      "Josef Rotblat"
    ],
    "period": "Remember Your Humanity, 1995; reprodução 2023-07-21",
    "rationale": "Recorte documental: apenas passagens identificadas; eixos desconhecidos em 50.",
    "caveats": "Portside é anfitrião editorial de reprodução, não instituição primária. Apenas texto identificado como palestra é usado; obituário introdutório excluído. 1908–2005; morte 2005-08-31.",
    "sources": [
      {
        "title": "Portside: reprodução Nobel Lecture — Remember Your Humanity",
        "url": "https://portside.org/2023-07-21/manhattan-project-scientist-who-quit",
        "note": "Corpo da página direta efetivamente lido; somente passagem autoral identificada."
      },
      {
        "title": "Identidade e vida — Joseph Rotblat",
        "url": "https://pugwash.org/pugwash-history/joseph-rotblat/",
        "note": "Identidade institucional consultada diretamente no corpo Pugwash: 1908–2005; morte 2005-08-31. Sem codificação de eixo."
      }
    ],
    "claims": [
      {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Portside: reprodução Nobel Lecture — Remember Your Humanity",
            "publishedDate": "1995; reprodução 2023-07-21",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "Bloco Nobel Lecture, parágrafos sobre convenção, não primeiro uso e redução a zero",
            "statement": "Defende convenção universal de proibição nuclear, compromisso de não primeiro uso e redução negociada a zero."
          }
        ],
        "rationale": "Defende convenção universal de proibição nuclear, compromisso de não primeiro uso e redução negociada a zero.",
        "uncertainty": "Admite armamentos convencionais para conflitos ordinários; não pacifismo militar absoluto.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "diplomacia_02"
        ]
      }
    ]
  },
  {
    "id": "ella-baker",
    "name": "Ella Baker",
    "aliases": [
      "Ella Josephine Baker"
    ],
    "period": "Letter to Democratic Convention Delegates, 1964-07-20",
    "rationale": "Recorte documental: apenas passagens identificadas; eixos desconhecidos em 50.",
    "caveats": "Carta assinada e digitalizada atribuída por SNCC Digital Gateway a Baker. Não transforma a biografia editorial ou frase sobre liderança em mapa político. 1903–1986; morte 1986-12-13.",
    "sources": [
      {
        "title": "Ella Baker: carta aos delegados democratas (1964)",
        "url": "https://www.crmvet.org/docs/640720_mfdp_letter.pdf",
        "note": "PDF digitalizado efetivamente lido, página1 completa com assinatura."
      },
      {
        "title": "Identidade e vida — Ella Baker",
        "url": "https://snccdigital.org/people/ella-baker/",
        "note": "Identidade institucional consultada diretamente no corpo SNCC Digital Gateway: 1903–1986; morte 1986-12-13. Sem codificação de eixo."
      }
    ],
    "claims": [
      {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Ella Baker: carta aos delegados democratas (1964)",
            "publishedDate": "1964-07-20",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "p.1, parágrafos right of the governed, all the people, open hearing; assinatura",
            "statement": "Defende direito dos governados a escolher governantes e representação eleitoral sem exclusão racial."
          }
        ],
        "rationale": "Defende direito dos governados a escolher governantes e representação eleitoral sem exclusão racial.",
        "uncertainty": "Carta de disputa de credenciais partidárias, não plataforma completa de instituições.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "representacao_07"
        ]
      }
    ]
  }
];
const dormant = [...peopleNorthAmericaExpansion, ...peopleEuropeExpansion];
/** Both complete dormant originals, including old vectors/evidence/sources, remain reviewable. */
export const historicalFigureBatch06OriginalRecords: Record<string, ReferenceEntry> = Object.fromEntries(historicalFigureBatch06Specs.flatMap(spec => {
 const old = dormant.find(entry => entry.id === spec.id);
 return old ? [[spec.id, structuredClone(old)]] : [];
}));
export const historicalFigureBatch06: ReferenceEntry[] = historicalFigureBatch06Specs.map(spec => {
 const old = historicalFigureBatch06OriginalRecords[spec.id];
 if(old && old.name !== spec.name) throw new Error(`Mismatched dormant identity: ${spec.id}`);
 const sources = [...(old?.sources ?? []), ...spec.sources].filter((source,index,all) => all.findIndex(item => item.title === source.title && item.url === source.url) === index);
 const entry: ReferenceEntry = { id:spec.id,name:spec.name,aliases:spec.aliases,kind:'person',category:'historical-figure',period:spec.period,rationale:spec.rationale,caveats:spec.caveats,sources,
 vec:Object.fromEntries(AXES.map(({key}) => [key,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{} };
 for(const input of spec.claims) {
  const coded=codeReferenceAxis(input,entry.sources);
  entry.vec[input.axis]=coded.value;entry.evidence[input.axis]=coded.evidence;
  entry.axisEvidence![input.axis]=coded.axisEvidence;entry.coding![input.axis]=coded.coding;
 }
 return entry;
});
