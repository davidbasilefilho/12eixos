import type { ReferenceEntry } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';

/** Native14 isolated proposal; no catalog import. Full original records/source objects retained.
 * Incoming SHA256: 5470e9e1419b0ebc012c7ecefe8eaea4e9c225a16cb6d1d21beacf4aa514511f.
 * January 1940 stays January 1940; the retained 1954 bibliography does not supply coding.
 */
export const native14IdeologiesBefore: ReferenceEntry[] = [
  {
    "id": "ideology-maoism",
    "category": "ideology",
    "kind": "ideology",
    "name": "Nova democracia de Mao: coalizão e economia, 1940",
    "period": "On New Democracy, janeiro de 1940; seções V, VI, VII, IX, X e XIII na tradução inglesa de Selected Works reproduzida pela MIA",
    "vec": {
      "est": 50,
      "rep": 40,
      "pod": 60,
      "imi": 50,
      "dip": 60,
      "int": 50,
      "eco": 60,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Defende uma etapa de nova democracia dirigida pelo proletariado em coalizão de classes anticoloniais, com controle público dos grandes capitais e espaço limitado para capital privado.",
    "caveats": "Programa de janeiro de 1940, não Constituição de 1954 nem todas as posições maoístas. Coalizão anticolonial não equivale a oposição liberal irrestrita. Capital privado, propriedade camponesa, contestação doutrinária e direitos populares limitam as direções codificadas. Alinhamento soviético e resistência à invasão são normas, não prova de conquista ou sucesso. CON permanece desconhecido: propriedade, limites ao capital e reforma agrária não estabelecem um regime geral de alocação. Os outros sete eixos sem fundamento geral permanecem desconhecidos; quatro eixos não passam a porta de seis.",
    "sources": [
      {
        "title": "Mao Zedong — On New Democracy, janeiro de 1940",
        "url": "https://www.marxists.org/reference/archive/mao/selected-works/volume-2/mswv2_26.htm",
        "note": "Tradução inglesa de Selected Works reproduzida pela Marxists Internet Archive. As seções autorais I–XV foram lidas em 8 de outubro de 2026; notas editoriais ficam separadas. Programa da etapa de nova democracia, sem transferência da Constituição chinesa de 1954 ou comprovação da prática posterior."
      },
      {
        "title": "On New Democracy — Marxists Internet Archive",
        "url": "https://www.marxists.org/reference/archive/mao/selected-works/volume-2/mswv2_26.htm",
        "note": "Texto de Mao de 1940 sobre coalizão política, revolução nacional e transformação social."
      },
      {
        "title": "1954 Constitution of the People’s Republic of China — Cornell University Library",
        "url": "https://ecommons.cornell.edu/entities/publication/7ba1f815-e4c0-4bcf-9693-74cf0de56202",
        "note": "Edição institucional da tradução inglesa da constituição promulgada em 1954; documento primário sobre propriedade e organização econômica."
      },
      {
        "title": "On New Democracy — Mao, janeiro de 1940, seções III, V e VI",
        "url": "https://www.marxists.org/reference/archive/mao/selected-works/volume-2/mswv2_26.htm",
        "note": "As seções inspecionadas distinguem etapas, direção proletária, coalizão política e organização econômica. A nova democracia é uma etapa programática, não uma medição da prática chinesa posterior."
      }
    ],
    "evidence": {
      "rep": "medium",
      "pod": "medium",
      "eco": "medium",
      "dip": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Mao Zedong — On New Democracy, janeiro de 1940"
        ],
        "rationale": "A restrição constitutiva do poder às classes revolucionárias sustenta direção autoritária moderada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Coalizão de classes, voto igual e congressos limitam a intensidade; não se imputa monopólio partidário posterior nem se confunde coalizão revolucionária com igualdade liberal de oposição."
      },
      "pod": {
        "sourceTitles": [
          "Mao Zedong — On New Democracy, janeiro de 1940"
        ],
        "rationale": "Autoridade geral sobre adversários políticos e culturais sustenta coerção moderada, além da direção de uma organização. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: A contestação intelectual, os direitos populares e a crítica à supressão da fala são contrapontos. Não inventa regras de privacidade, processo penal ou prática posterior; intensidade 80 não sustentada."
      },
      "eco": {
        "sourceTitles": [
          "Mao Zedong — On New Democracy, janeiro de 1940"
        ],
        "rationale": "A primazia pública dos setores econômicos dirigentes sustenta predominância pública moderada no programa. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Capital privado geralmente admitido, camponeses proprietários, camponeses ricos e agricultura não socialista impedem 80. É norma de uma etapa, não medida de propriedade observada nem Constituição de 1954."
      },
      "dip": {
        "sourceTitles": [
          "Mao Zedong — On New Democracy, janeiro de 1940"
        ],
        "rationale": "Alinhamento internacional e estratégia armada de defesa nacional sustentam direção militar moderada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: O âmbito é invasão e independência nacional, sem prescrição de conquista universal ou prova de sucesso militar. Não deriva diplomacia de violência doméstica isolada."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Mao Zedong — On New Democracy, janeiro de 1940",
            "locator": "Seção V; seção VII, passagem sobre a direção proletária",
            "statement": "Defende ditadura conjunta das classes revolucionárias sob direção proletária, com sufrágio universal igual, congressos de vários níveis e centralismo democrático.",
            "basis": "norm",
            "publishedDate": "Janeiro de 1940; tradução inglesa de Selected Works reproduzida pela MIA",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "A restrição constitutiva do poder às classes revolucionárias sustenta direção autoritária moderada.",
        "uncertainty": "Coalizão de classes, voto igual e congressos limitam a intensidade; não se imputa monopólio partidário posterior nem se confunde coalizão revolucionária com igualdade liberal de oposição.",
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "pod": {
        "axis": "pod",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Mao Zedong — On New Democracy, janeiro de 1940",
            "locator": "Seção V, ditadura sobre contrarrevolucionários; IX, contestação doutrinária e direitos populares; XIII, luta contra ideias opostas à resistência, unidade e progresso",
            "statement": "Propõe autoridade coerciva contra contrarrevolucionários e inimigos ideológicos, ao mesmo tempo que admite contestação de doutrinas, direitos populares e condena supressão da fala.",
            "basis": "norm",
            "publishedDate": "Janeiro de 1940; tradução inglesa de Selected Works reproduzida pela MIA",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Autoridade geral sobre adversários políticos e culturais sustenta coerção moderada, além da direção de uma organização.",
        "uncertainty": "A contestação intelectual, os direitos populares e a crítica à supressão da fala são contrapontos. Não inventa regras de privacidade, processo penal ou prática posterior; intensidade 80 não sustentada.",
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
            "sourceTitle": "Mao Zedong — On New Democracy, janeiro de 1940",
            "locator": "Seção VI, economia da nova democracia",
            "statement": "Bancos, grande indústria e comércio sob controle público devem dirigir a economia; capital privado é permitido de forma limitada e propriedade camponesa permanece.",
            "basis": "norm",
            "publishedDate": "Janeiro de 1940; tradução inglesa de Selected Works reproduzida pela MIA",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "A primazia pública dos setores econômicos dirigentes sustenta predominância pública moderada no programa.",
        "uncertainty": "Capital privado geralmente admitido, camponeses proprietários, camponeses ricos e agricultura não socialista impedem 80. É norma de uma etapa, não medida de propriedade observada nem Constituição de 1954.",
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
            "sourceTitle": "Mao Zedong — On New Democracy, janeiro de 1940",
            "locator": "Seção VII, alinhamento soviético; seção X, resistência armada à invasão",
            "statement": "Propõe alinhamento com a União Soviética e resistência armada de libertação nacional contra a invasão.",
            "basis": "norm",
            "publishedDate": "Janeiro de 1940; tradução inglesa de Selected Works reproduzida pela MIA",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Alinhamento internacional e estratégia armada de defesa nacional sustentam direção militar moderada.",
        "uncertainty": "O âmbito é invasão e independência nacional, sem prescrição de conquista universal ou prova de sucesso militar. Não deriva diplomacia de violência doméstica isolada.",
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
    "id": "civic-transhumanism",
    "kind": "ideology",
    "category": "ideology",
    "name": "Transumanismo",
    "period": "Bostrom, 2005; declaração Humanity+ adotada em março de 2009",
    "vec": {
      "est": 50,
      "rep": 60,
      "pod": 50,
      "imi": 50,
      "dip": 40,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 80
    },
    "rationale": "Defende aprimoramento humano voluntário, acesso amplo e segurança, com democracia e Estado de direito internacionais.",
    "caveats": "Referente tecnológico e político delimitado, não programa eleitoral completo. Religião jurídica, migração e todo programa moral permanecem desconhecidos; raízes seculares e antirracismo não os pontuam.",
    "sources": [
      {
        "title": "The Transhumanist Declaration — Humanity+",
        "url": "https://www.humanityplus.org/the-transhumanist-declaration",
        "note": "O texto institucional explicita adoção em março de 2009, originado em 1998; leitura dos oito princípios, sem supor revisão 2012."
      },
      {
        "title": "Transhumanist Values — Nick Bostrom, author primary, 2005",
        "url": "https://nickbostrom.com/papers/transhumanist-values/",
        "note": "Programa de escolhas tecnológicas, acesso, democracia e redução de riscos; publicação autoral 2005, não medição quantitativa."
      }
    ],
    "evidence": {
      "rep": "medium",
      "dip": "medium",
      "tec": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Transhumanist Values — Nick Bostrom, author primary, 2005"
        ],
        "rationale": "Compromisso democrático e jurídico explícito na governança coletiva de riscos e aprimoramentos. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Programa internacional normativo, sem desenho constitucional eleitoral completo, posição sobre cada sistema de governo ou prova de prática institucional."
      },
      "dip": {
        "sourceTitles": [
          "Transhumanist Values — Nick Bostrom, author primary, 2005"
        ],
        "rationale": "Estratégia de cooperação e redução de armamentos catastróficos, limitada pela necessidade de segurança. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não é pacifismo absoluto nem proibição de toda guerra, forças armadas ou defesa; nada inferido sobre intervenção externa ou patriotismo."
      },
      "tec": {
        "sourceTitles": [
          "Transhumanist Values — Nick Bostrom, author primary, 2005",
          "The Transhumanist Declaration — Humanity+"
        ],
        "rationale": "Ampliação artificial voluntária de capacidades constitui finalidade central, com múltiplos campos e limites explícitos. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Não se atribui aceitação de poucas restrições ou segurança de toda inovação. Predições sobre viabilidade tecnológica e pós-humanos não validadas como fatos."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Transhumanist Values — Nick Bostrom, author primary, 2005",
            "locator": "§5 author web 97–98",
            "statement": "Prescreve debate público sobre futuros e extensão da democracia e do Estado de direito ao plano internacional para decisões responsáveis.",
            "basis": "declaration",
            "publishedDate": "2005",
            "accessedDate": "2026-10-08"
          }
        ],
        "relatedQuestionIds": [
          "representacao_01",
          "representacao_19"
        ],
        "rationale": "Compromisso democrático e jurídico explícito na governança coletiva de riscos e aprimoramentos.",
        "uncertainty": "Programa internacional normativo, sem desenho constitucional eleitoral completo, posição sobre cada sistema de governo ou prova de prática institucional.",
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
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Transhumanist Values — Nick Bostrom, author primary, 2005",
            "locator": "§4 web 79; §5 web 100",
            "statement": "Prioriza segurança existencial e paz/cooperação internacional, defendendo combate à proliferação de armas de destruição em massa.",
            "basis": "declaration",
            "publishedDate": "2005",
            "accessedDate": "2026-10-08"
          }
        ],
        "relatedQuestionIds": [
          "diplomacia_10"
        ],
        "rationale": "Estratégia de cooperação e redução de armamentos catastróficos, limitada pela necessidade de segurança.",
        "uncertainty": "Não é pacifismo absoluto nem proibição de toda guerra, forças armadas ou defesa; nada inferido sobre intervenção externa ou patriotismo.",
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
        "position": "strong-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Transhumanist Values — Nick Bostrom, author primary, 2005",
            "locator": "§1 web 14–23; §3 web 70–71; §5 web 93–94",
            "statement": "Aprimoramentos tecnológicos de corpo e mente são meio central do projeto; inclui genética e inteligência artificial, mantendo escolha voluntária, redução de riscos e rejeição de otimismo automático.",
            "basis": "declaration",
            "publishedDate": "2005",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "The Transhumanist Declaration — Humanity+",
            "locator": "Whole eight principles, especially 1–4 and 8; adoption note March 2009",
            "statement": "Defende desenvolvimento e escolha ampla de tecnologias para memória, concentração, prolongamento da vida, reprodução e outras modificações, com gestão responsável de riscos.",
            "basis": "declaration",
            "publishedDate": "Adopted March 2009; originated 1998",
            "accessedDate": "2026-10-08"
          }
        ],
        "relatedQuestionIds": [
          "tecnologia_04",
          "tecnologia_15",
          "tecnologia_20"
        ],
        "rationale": "Ampliação artificial voluntária de capacidades constitui finalidade central, com múltiplos campos e limites explícitos.",
        "uncertainty": "Não se atribui aceitação de poucas restrições ou segurança de toda inovação. Predições sobre viabilidade tecnológica e pós-humanos não validadas como fatos.",
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      }
    }
  }
];
export const native14IdeologiesCodings: Record<string, ReferenceAxisCoding[]> = {
  "ideology-maoism": [
    {
      "axis": "rep",
      "position": "moderate-second",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Mao Zedong — On New Democracy, janeiro de 1940",
          "locator": "Seção V; seção VII, passagem sobre a direção proletária",
          "statement": "Defende ditadura conjunta das classes revolucionárias sob direção proletária, com sufrágio universal igual, congressos de vários níveis e centralismo democrático.",
          "basis": "norm",
          "publishedDate": "Janeiro de 1940; tradução inglesa de Selected Works reproduzida pela MIA",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A restrição constitutiva do poder às classes revolucionárias sustenta direção autoritária moderada.",
      "uncertainty": "Coalizão de classes, voto igual e congressos limitam a intensidade; não se imputa monopólio partidário posterior nem se confunde coalizão revolucionária com igualdade liberal de oposição.",
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "pod",
      "position": "moderate-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Mao Zedong — On New Democracy, janeiro de 1940",
          "locator": "V, parágrafo da ditadura sobre contrarrevolucionários (web 114–118); IX, contestação doutrinária/direitos (198–206); X, oposição ao partido (234–235)",
          "statement": "Institui coerção política contra contrarrevolucionários e ameaça adversários anticomunistas, mas admite contestação doutrinária e direitos populares.",
          "basis": "declaration",
          "publishedDate": "Janeiro de 1940; tradução inglesa de Selected Works reproduzida pela MIA; ano da edição impressa não confirmado",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A restrição coerciva de adversários na ordem política sustenta direção moderada de segurança sobre liberdade.",
      "uncertainty": "IX admite contestação e direitos; XIII combate ideias, sem isso provar pena criminal para opinião. Não se inventam regras de privacidade/processo penal nem prática posterior. Retórica de guerra não autoriza intensidade máxima.",
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "eco",
      "position": "moderate-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Mao Zedong — On New Democracy, janeiro de 1940",
          "locator": "Seção VI, economia da nova democracia",
          "statement": "Bancos, grande indústria e comércio sob controle público devem dirigir a economia; capital privado é permitido de forma limitada e propriedade camponesa permanece.",
          "basis": "norm",
          "publishedDate": "Janeiro de 1940; tradução inglesa de Selected Works reproduzida pela MIA",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "O programa atribui aos setores públicos dirigentes papel econômico predominante, sem abolir toda propriedade privada.",
      "uncertainty": "Capital privado geralmente admitido, camponeses proprietários, camponeses ricos e agricultura não socialista impedem 80. É norma de uma etapa, não medida de propriedade observada nem Constituição de 1954.",
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "rel",
      "position": "moderate-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Mao Zedong — On New Democracy, janeiro de 1940",
          "locator": "XIV, programa nacional de cultura/educação versus teoria dos quadros (338, 343); XV, cultura científica e frente religiosa (352–354); V (118) e IX (198–200)",
          "statement": "A cultura e educação nacionais propostas não tomam doutrinas religiosas como autoridade científica; a frente política inclui religiosos e mantém voto sem distinção de credo.",
          "basis": "declaration",
          "publishedDate": "Janeiro de 1940; tradução inglesa de Selected Works reproduzida pela MIA; ano da edição impressa não confirmado",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "O programa público de educação e cultura privilegia fundamentação científica independente da doutrina religiosa, sustentando direção irreligiosa moderada.",
      "uncertainty": "É uma proposta institucional nacional, distinta de ateísmo pessoal ou da teoria interna dos quadros. Não declara separação jurídica entre igreja e Estado, proibição de fé privada ou posições posteriores da RPC. Inclusão religiosa, voto igual por credo e pluralidade doutrinária limitam a intensidade.",
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "mor",
      "position": "moderate-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Mao Zedong — On New Democracy, janeiro de 1940",
          "locator": "XI, transformação ética/feudal (260–271); XIV, educação e cultura nacionais (335–344); XV, herança crítica e cultura de massas (355–361)",
          "statement": "Prescreve mudança ampla de códigos éticos, tradição feudal, educação e cultura; admite conservar criticamente a herança democrática e gradualidade na formação das massas.",
          "basis": "declaration",
          "publishedDate": "Janeiro de 1940; tradução inglesa de Selected Works reproduzida pela MIA; ano da edição impressa não confirmado",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A revisão prescrita de normas e tradições em várias dimensões da cultura pública sustenta mudança moral moderada.",
      "uncertainty": "Não deriva o eixo de ciência ou revolução isoladas. Respeito crítico à herança e etapa ainda não plenamente socialista são contrapontos; não imputa aborto, casamento, eutanásia ou direitos LGBT. Não certifica as narrativas históricas do autor como fatos.",
      "reviewedOn": "2026-10-08"
    }
  ],
  "civic-transhumanism": [
    {
      "axis": "rep",
      "position": "moderate-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Transhumanist Values — Nick Bostrom, author primary, 2005",
          "locator": "§5 author web 97–98",
          "statement": "Prescreve debate público sobre futuros e extensão da democracia e do Estado de direito ao plano internacional para decisões responsáveis.",
          "basis": "declaration",
          "publishedDate": "2005",
          "accessedDate": "2026-10-08"
        }
      ],
      "relatedQuestionIds": [
        "representacao_01",
        "representacao_19"
      ],
      "rationale": "Compromisso democrático e jurídico explícito na governança coletiva de riscos e aprimoramentos.",
      "uncertainty": "Programa internacional normativo, sem desenho constitucional eleitoral completo, posição sobre cada sistema de governo ou prova de prática institucional.",
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "dip",
      "position": "moderate-second",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Transhumanist Values — Nick Bostrom, author primary, 2005",
          "locator": "§4 web 79; §5 web 100",
          "statement": "Prioriza segurança existencial e paz/cooperação internacional, defendendo combate à proliferação de armas de destruição em massa.",
          "basis": "declaration",
          "publishedDate": "2005",
          "accessedDate": "2026-10-08"
        }
      ],
      "relatedQuestionIds": [
        "diplomacia_10"
      ],
      "rationale": "Estratégia de cooperação e redução de armamentos catastróficos, limitada pela necessidade de segurança.",
      "uncertainty": "Não é pacifismo absoluto nem proibição de toda guerra, forças armadas ou defesa; nada inferido sobre intervenção externa ou patriotismo.",
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "tec",
      "position": "strong-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Transhumanist Values — Nick Bostrom, author primary, 2005",
          "locator": "§1 web 14–23; §3 web 70–71; §5 web 93–94",
          "statement": "Aprimoramentos tecnológicos de corpo e mente são meio central do projeto; inclui genética e inteligência artificial, mantendo escolha voluntária, redução de riscos e rejeição de otimismo automático.",
          "basis": "declaration",
          "publishedDate": "2005",
          "accessedDate": "2026-10-08"
        },
        {
          "sourceTitle": "The Transhumanist Declaration — Humanity+",
          "locator": "Whole eight principles, especially 1–4 and 8; adoption note March 2009",
          "statement": "Defende desenvolvimento e escolha ampla de tecnologias para memória, concentração, prolongamento da vida, reprodução e outras modificações, com gestão responsável de riscos.",
          "basis": "declaration",
          "publishedDate": "Adopted March 2009; originated 1998",
          "accessedDate": "2026-10-08"
        }
      ],
      "relatedQuestionIds": [
        "tecnologia_04",
        "tecnologia_15",
        "tecnologia_20"
      ],
      "rationale": "Ampliação artificial voluntária de capacidades constitui finalidade central, com múltiplos campos e limites explícitos.",
      "uncertainty": "Não se atribui aceitação de poucas restrições ou segurança de toda inovação. Predições sobre viabilidade tecnológica e pós-humanos não validadas como fatos.",
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "pod",
      "position": "moderate-second",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "The Transhumanist Declaration — Humanity+",
          "locator": "Princípios 6 e 8; contrapontos de riscos/prioridades 3–5 e adoção em março de 2009",
          "statement": "A política geral deve respeitar autonomia, direitos individuais e dignidade mundial; escolhas pessoais de aprimoramento são amplas, com responsabilidade por riscos.",
          "basis": "declaration",
          "publishedDate": "Declaração adotada em março de 2009; origem em 1998; data editorial da página não indicada",
          "accessedDate": "2026-10-08"
        },
        {
          "sourceTitle": "Transhumanist Values — Nick Bostrom, author primary, 2005",
          "locator": "§4, segurança existencial; §5, escolha/responsabilidade e controle de armas (93–100)",
          "statement": "Combina escolha individual com responsabilidade por impactos em terceiros e aceita vigilância direcionada a programas de armas para evitar proliferação.",
          "basis": "declaration",
          "publishedDate": "2005; dia e mês não indicados",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A regra geral de autonomia e direitos sustenta direção de liberdade moderada, além de escolha técnica isolada.",
      "uncertainty": "Segurança existencial, impactos sobre terceiros e vigilância direcionada de armas são restrições materiais. Não declara liberdade ilimitada, proibição de toda vigilância, desenho penal completo ou prática institucional.",
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "mor",
      "position": "moderate-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Transhumanist Values — Nick Bostrom, author primary, 2005",
          "locator": "§1, objeções de natureza/hubris (16–23); §3, conservar valores (59–60) e explorar capacidades/valores (68–71); §5 e tabela de valores (93–107, 123–132)",
          "statement": "Reavalia costumes e crenças, acolhe diversidade de orientações e estilos de vida e amplia a comunidade moral; permite conservar valores atuais e reconhece incerteza.",
          "basis": "declaration",
          "publishedDate": "2005; dia e mês não indicados",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A ética coletiva proposta admite revisar tradições e formas de vida em vários domínios, sustentando direção progressista moderada.",
      "uncertainty": "Não deriva moralidade de tecnologia ou antirracismo isolados. Preservação de valores atuais e crenças revisáveis limitam a intensidade; não atribui posições legais sobre aborto, casamento ou eutanásia. Circunscrito ao ensaio de 2005 e ao recorte declarado, sem projetar todas as variantes transumanistas.",
      "reviewedOn": "2026-10-08"
    }
  ]
};
const reviewedCaveats: Record<string, string> = {
  "ideology-maoism": "Cinco eixos revisados no programa de janeiro de 1940: REP, POD, ECO, REL e MOR. DIP volta a desconhecido: resistência à invasão e aliança soviética não resolvem preferência geral entre força e diplomacia. Os outros seis eixos também permanecem desconhecidos. Cultura científica fundamenta REL apenas no programa nacional de educação/cultura, não ateísmo pessoal nem separação legal; tradição é criticamente preservada. Capital privado, terras camponesas, voto igual e religiosos na frente são contrapontos. Constituição de 1954 preservada como fonte anterior, sem uso neste recorte. Registro e todos os objetos de fonte anteriores preservados. Âncoras editoriais não são medições; cinco eixos não passam a porta de seis.",
  "civic-transhumanism": "Cinco eixos revisados no recorte Bostrom 2005 e Humanity+ março de 2009: REP, POD, DIP, MOR e TEC. Sete eixos permanecem desconhecidos. Autonomia e revisão ética abrangentes sustentam direções moderadas, com riscos, vigilância direcionada de armas e conservação de valores como contrapontos. Acesso/financiamento de pesquisa não prova propriedade pública, planejamento ou comércio. Sem imputar posições religiosas, migratórias ou leis morais específicas, prática institucional ou todas as variantes transumanistas. Registro e todos os objetos de fonte anteriores preservados. Âncoras não são medições; cinco eixos não passam a porta de seis."
};
function canonical(value: unknown): string {
  if (Array.isArray(value)) return '[' + value.map(canonical).join(',') + ']';
  if (value !== null && typeof value === 'object') return '{' + Object.entries(value).sort(([a], [b]) => a.localeCompare(b)).map(([key, item]) => JSON.stringify(key) + ':' + canonical(item)).join(',') + '}';
  return JSON.stringify(value);
}
function reviewed(entry: ReferenceEntry): ReferenceEntry {
  const result = structuredClone(entry);
  result.vec = Object.fromEntries(Object.keys(entry.vec).map(axis => [axis, 50])) as ReferenceEntry['vec'];
  result.evidence = {}; result.axisEvidence = {}; result.coding = {};
  for (const input of native14IdeologiesCodings[entry.id]) {
    const coded = codeReferenceAxis(input, result.sources);
    result.vec[input.axis] = coded.value;
    result.evidence[input.axis] = coded.evidence;
    result.axisEvidence[input.axis] = coded.axisEvidence;
    result.coding[input.axis] = coded.coding;
  }
  result.caveats = reviewedCaveats[entry.id];
  return result;
}
export const native14IdeologiesAfter: ReferenceEntry[] = native14IdeologiesBefore.map(reviewed);
/** Whole prior and post guards; unrelated objects and exact repeated posts retain identity. */
export function reconcileNative14Ideologies(entry: ReferenceEntry): ReferenceEntry {
  const index = native14IdeologiesBefore.findIndex(prior => prior.id === entry.id);
  if (index < 0) return entry;
  if (canonical(entry) === canonical(native14IdeologiesAfter[index])) return entry;
  if (canonical(entry) !== canonical(native14IdeologiesBefore[index])) throw new Error('native14 ideologies whole baseline changed: ' + entry.id);
  return structuredClone(native14IdeologiesAfter[index]);
}
