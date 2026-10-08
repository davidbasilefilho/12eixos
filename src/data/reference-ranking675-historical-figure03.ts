import type {ReferenceEntry,AxisKey} from './references';
import {AXES} from '../lib/scoring';
const AXIS_KEYS = AXES.map(axis => axis.key);
import {codeReferenceAxis,type ReferenceAxisCoding} from '../lib/reference-coding';

// Proposta não importada; depende de julgamento documental independente e autorização literal.
export const ranking675HistoricalFigure03OriginalRecords:Record<string,ReferenceEntry>={
  "peter-kropotkin": {
    "id": "peter-kropotkin",
    "name": "Piotr Kropotkin",
    "kind": "person",
    "category": "historical-figure",
    "period": "The Conquest of Bread, 1892, com prefácio autoral de janeiro de 1913; edição de 1926",
    "rationale": "A obra propõe comunas federadas, capital produtivo comum, organização voluntária e produção dirigida a necessidades, com emancipação doméstica apoiada em máquinas.",
    "caveats": "Edição inglesa de 1926 via Gutenberg/MIA; datas de prefácio e corpo distinguidas. Comum não significa necessariamente estatal; planejamento por necessidades não implica centro nacional coercivo.",
    "sources": [
      {
        "title": "The Conquest of Bread — Piotr Kropotkin, edição Vanguard de 1926",
        "url": "https://www.marxists.org/reference/archive/kropotkin-peter/1892/bread.htm",
        "note": "Texto primário: prefácio assinado janeiro de 1913; corpo originalmente francês de 1892; tradução inglesa sem tradutor identificado nesta página."
      },
      {
        "title": "Kropotkin — catálogo Gutenberg",
        "url": "https://www.gutenberg.org/ebooks/23428",
        "note": "Identidade 1842–1921; sem inferir orientação biográfica."
      }
    ],
    "vec": {
      "est": 80,
      "rep": 50,
      "pod": 20,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 80,
      "con": 60,
      "com": 50,
      "rel": 50,
      "mor": 60,
      "tec": 60
    },
    "evidence": {
      "est": "high",
      "eco": "high",
      "pod": "high",
      "con": "medium",
      "mor": "medium",
      "tec": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "The Conquest of Bread — Piotr Kropotkin, edição Vanguard de 1926"
        ],
        "rationale": "Autonomia local federativa é constitutiva da proposta. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Alternativa anarquista ao Estado; não é federação constitucional moderna de poderes estatais."
      },
      "eco": {
        "sourceTitles": [
          "The Conquest of Bread — Piotr Kropotkin, edição Vanguard de 1926"
        ],
        "rationale": "Transformação de todo capital produtivo sustenta direção coletiva forte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Não equivale a estatização administrativa."
      },
      "pod": {
        "sourceTitles": [
          "The Conquest of Bread — Piotr Kropotkin, edição Vanguard de 1926"
        ],
        "rationale": "Abolição constitutiva da coerção estatal sustenta liberdade forte. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Admite expropriação revolucionária e conflito; não afirma ausência de qualquer violência social."
      },
      "con": {
        "sourceTitles": [
          "The Conquest of Bread — Piotr Kropotkin, edição Vanguard de 1926"
        ],
        "rationale": "Alocação deliberada por necessidades sustenta planejamento parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Coordenação descentralizada por acordo; não confundir organização voluntária com planejamento estatal central."
      },
      "mor": {
        "sourceTitles": [
          "The Conquest of Bread — Piotr Kropotkin, edição Vanguard de 1926"
        ],
        "rationale": "Igualdade de gênero sustenta subtema emancipatório. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Mantém maternidade como possibilidade; não resolve todos os costumes atuais."
      },
      "tec": {
        "sourceTitles": [
          "The Conquest of Bread — Piotr Kropotkin, edição Vanguard de 1926"
        ],
        "rationale": "Adoção tecnológica para emancipação sustenta otimismo parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Aplicação específica; não é aprovação irrestrita de toda inovação."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "The Conquest of Bread — Piotr Kropotkin, edição Vanguard de 1926",
            "publishedDate": "1913-01 (prefácio da edição de 1926)",
            "locator": "Prefácio, gradually developed e To the Communes; 3.2 The independence",
            "statement": "Propõe comunas autônomas agroindustriais federando-se em nações, por acordo.",
            "basis": "declaration",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Autonomia local federativa é constitutiva da proposta.",
        "uncertainty": "Alternativa anarquista ao Estado; não é federação constitucional moderna de poderes estatais.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "eco": {
        "axis": "eco",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "The Conquest of Bread — Piotr Kropotkin, edição Vanguard de 1926",
            "publishedDate": "1892 (edição de 1926)",
            "locator": "2.1 But, if plenty; 3.1 Communism without government",
            "statement": "Exige propriedade comum de terras, fábricas e infraestrutura produtiva.",
            "basis": "declaration",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Transformação de todo capital produtivo sustenta direção coletiva forte.",
        "uncertainty": "Não equivale a estatização administrativa.",
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
        "position": "strong-second",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "The Conquest of Bread — Piotr Kropotkin, edição Vanguard de 1926",
            "publishedDate": "1892 (edição de 1926)",
            "locator": "3.2 men at last attempt; mutual agreement; reduce Government interference to zero",
            "statement": "Substitui leis coercivas e Estado por acordos voluntários entre indivíduos e grupos.",
            "basis": "declaration",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Abolição constitutiva da coerção estatal sustenta liberdade forte.",
        "uncertainty": "Admite expropriação revolucionária e conflito; não afirma ausência de qualquer violência social.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 20,
        "range": [
          10,
          25
        ]
      },
      "con": {
        "axis": "con",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "The Conquest of Bread — Piotr Kropotkin, edição Vanguard de 1926",
            "publishedDate": "1892 (edição de 1926)",
            "locator": "14.1 We study the needs; Is it not the study; Let us not lose sight",
            "statement": "Orienta organização da produção pelo levantamento e satisfação das necessidades de todos.",
            "basis": "declaration",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Alocação deliberada por necessidades sustenta planejamento parcial.",
        "uncertainty": "Coordenação descentralizada por acordo; não confundir organização voluntária com planejamento estatal central.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "mor": {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "The Conquest of Bread — Piotr Kropotkin, edição Vanguard de 1926",
            "publishedDate": "1892 (edição de 1926)",
            "locator": "10.2 To emancipate woman; Half humanity",
            "statement": "Exige emancipação das mulheres do trabalho doméstico que impede vida social.",
            "basis": "declaration",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Igualdade de gênero sustenta subtema emancipatório.",
        "uncertainty": "Mantém maternidade como possibilidade; não resolve todos os costumes atuais.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "tec": {
        "axis": "tec",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "The Conquest of Bread — Piotr Kropotkin, edição Vanguard de 1926",
            "publishedDate": "1892 (edição de 1926)",
            "locator": "10.2 Machinery undertakes; Machines of all kinds; common heating apparatus",
            "statement": "Propõe máquinas domésticas e redes coletivas de energia para reduzir trabalho extenuante.",
            "basis": "declaration",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Adoção tecnológica para emancipação sustenta otimismo parcial.",
        "uncertainty": "Aplicação específica; não é aprovação irrestrita de toda inovação.",
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
  "ricardo-flores-magon": {
    "id": "ricardo-flores-magon",
    "name": "Ricardo Flores Magón",
    "aliases": [],
    "kind": "person",
    "category": "historical-figure",
    "period": "Programa coletivo do PLM, assinado em 1º de julho de 1906",
    "rationale": "O programa coletivo defende eleições, liberdades civis, ensino laico e redistribuição de terras, mas exclui imigrantes chineses.",
    "caveats": "Programa coletivo: assinatura nominal de Magón como presidente, não autoria exclusiva nem sua posterior fase anarquista. Proíbe imigração chinesa (art.16): contrapeso racial à proposta emancipatória. Sem validar execução.",
    "sources": [
      {
        "title": "Programa del Partido Liberal (1906), Junta Organizadora del PLM",
        "url": "https://www.memoriapoliticademexico.org/Textos/5RepDictadura/1906PPL.html",
        "note": "Transcrição integral do programa primário de 1906; o texto identifica Flores Magón como presidente e signatário da Junta Organizadora, que publicou o programa coletivamente."
      },
      {
        "title": "Ricardo Flores Magón — INEHRM",
        "url": "https://inehrm.gob.mx/es/inehrm/magon",
        "note": "Biografia institucional consultada: 1873–1922; falecimento em 21 de novembro de 1922. Não gera eixos."
      }
    ],
    "vec": {
      "est": 50,
      "rep": 80,
      "pod": 40,
      "imi": 50,
      "dip": 40,
      "int": 50,
      "eco": 60,
      "con": 60,
      "com": 50,
      "rel": 80,
      "mor": 60,
      "tec": 50
    },
    "evidence": {
      "rep": "high",
      "pod": "high",
      "dip": "medium",
      "rel": "high",
      "eco": "medium",
      "con": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Programa del Partido Liberal (1906), Junta Organizadora del PLM"
        ],
        "rationale": "Democracia participativa explícita. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Programa, não implementação."
      },
      "pod": {
        "sourceTitles": [
          "Programa del Partido Liberal (1906), Junta Organizadora del PLM"
        ],
        "rationale": "Garantias contra coerção estatal. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Mantém pena capital por traição, punições por abuso e restrições clericais."
      },
      "dip": {
        "sourceTitles": [
          "Programa del Partido Liberal (1906), Junta Organizadora del PLM"
        ],
        "rationale": "Contenção militar parcial. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Mantém defesa armada voluntária."
      },
      "rel": {
        "sourceTitles": [
          "Programa del Partido Liberal (1906), Junta Organizadora del PLM"
        ],
        "rationale": "Secularização institucional explícita. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Inclui restrições coercivas ao clero."
      },
      "eco": {
        "sourceTitles": [
          "Programa del Partido Liberal (1906), Junta Organizadora del PLM"
        ],
        "rationale": "Provisão e financiamento público parciais. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Mantém propriedade produtiva privada; banco pode ser fomentado."
      },
      "con": {
        "sourceTitles": [
          "Programa del Partido Liberal (1906), Junta Organizadora del PLM"
        ],
        "rationale": "Alocação pública delimitada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não define planejamento geral da economia."
      },
      "mor": {
        "sourceTitles": [
          "Programa del Partido Liberal (1906), Junta Organizadora del PLM"
        ],
        "rationale": "Reforma civil emancipatória parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Exclusão racial chinesa contradiz universalidade."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Programa del Partido Liberal (1906), Junta Organizadora del PLM",
            "publishedDate": "1906-07-01",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "Exposição: vigilancia del pueblo; arts.1–3 e conclusão",
            "statement": "Defende alternância e responsabilização de governantes eleitos."
          }
        ],
        "rationale": "Democracia participativa explícita.",
        "uncertainty": "Programa, não implementação.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "representacao_03",
          "representacao_08"
        ],
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
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Programa del Partido Liberal (1906), Junta Organizadora del PLM",
            "publishedDate": "1906-07-01",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "arts.5–7,41; Exposição: manifestaciones del pensamiento",
            "statement": "Protege expressão, imprensa e amparo; abole pena capital salvo traição."
          }
        ],
        "rationale": "Garantias contra coerção estatal.",
        "uncertainty": "Mantém pena capital por traição, punições por abuso e restrições clericais.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "poder_04",
          "poder_15"
        ],
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
            "sourceTitle": "Programa del Partido Liberal (1906), Junta Organizadora del PLM",
            "publishedDate": "1906-07-01",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "art.4; Exposição: servicio militar e Guardia Nacional",
            "statement": "Rejeita conscrição e militarismo profissional."
          }
        ],
        "rationale": "Contenção militar parcial.",
        "uncertainty": "Mantém defesa armada voluntária.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "diplomacia_09"
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
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Programa del Partido Liberal (1906), Junta Organizadora del PLM",
            "publishedDate": "1906-07-01",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "Exposição: resignárase a aceptar la separación; arts.10–11,17–20",
            "statement": "Exige separação Estado–Igreja e escolas laicas."
          }
        ],
        "rationale": "Secularização institucional explícita.",
        "uncertainty": "Inclui restrições coercivas ao clero.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "religiao_01",
          "religiao_05"
        ],
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "eco": {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Programa del Partido Liberal (1906), Junta Organizadora del PLM",
            "publishedDate": "1906-07-01",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "arts.10–13,35–37; Exposição: Banco Agrícola",
            "statement": "Propõe escolas estatais e banco agrícola público ou fomentado."
          }
        ],
        "rationale": "Provisão e financiamento público parciais.",
        "uncertainty": "Mantém propriedade produtiva privada; banco pode ser fomentado.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "economia_04"
        ],
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "con": {
        "axis": "con",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Programa del Partido Liberal (1906), Junta Organizadora del PLM",
            "publishedDate": "1906-07-01",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "arts.34–37,50",
            "statement": "Estado redistribui terras e direciona crédito agrícola."
          }
        ],
        "rationale": "Alocação pública delimitada.",
        "uncertainty": "Não define planejamento geral da economia.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "controle_01",
          "controle_19"
        ],
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "mor": {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Programa del Partido Liberal (1906), Junta Organizadora del PLM",
            "publishedDate": "1906-07-01",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "arts.43,48 contrapostos ao art.16",
            "statement": "Iguala direitos civis de filhos e protege indígenas."
          }
        ],
        "rationale": "Reforma civil emancipatória parcial.",
        "uncertainty": "Exclusão racial chinesa contradiz universalidade.",
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
};

export const ranking675HistoricalFigure03Proposals:Record<string,{period:string;rationale:string;caveats:string;sources:ReferenceEntry["sources"];coding:ReferenceAxisCoding[]}>= {
  "peter-kropotkin": {
    "period": "The Conquest of Bread, 1892, com prefácio autoral de janeiro de 1913; edição de 1926",
    "rationale": "Propõe comunas federadas, posse produtiva comum e coordenação por necessidades, com liberdade associativa, emancipação feminina e inovação orientada ao bem-estar.",
    "caveats": "Recorte da obra revista, com prefácio de1913 e reprodução inglesa Vanguard1926; tradução sem nome identificado. Proposta, não prática comprovada nem toda a carreira. Preserva expropriação, exclusão de grupos, condicionalidade laboral, divisão histórica de gênero e linguagem racial hierarquizante. Coordenação comunal não é administração estatal; autonomia não prova mercado. Inovação é condicionada ao bem-estar e às limitações experimentais. Os demais eixos permanecem não estimados.",
    "sources": [
      {
        "title": "The Conquest of Bread — Piotr Kropotkin, edição Vanguard de 1926",
        "url": "https://www.marxists.org/reference/archive/kropotkin-peter/1892/bread.htm",
        "note": "Texto primário: prefácio assinado janeiro de 1913; corpo originalmente francês de 1892; tradução inglesa sem tradutor identificado nesta página."
      },
      {
        "title": "Kropotkin — catálogo Gutenberg",
        "url": "https://www.gutenberg.org/ebooks/23428",
        "note": "Identidade 1842–1921; sem inferir orientação biográfica."
      },
      {
        "title": "The Conquest of Bread — reprodução Gutenberg da edição Vanguard1926",
        "url": "https://www.gutenberg.org/cache/epub/23428/pg23428-images.html",
        "note": "Reprodução inglesa Vanguard1926, metadados23–36; tradução sem nome identificado. Prefácio autoral janeiro1913,83–125. Leitura efetiva de capítulosIII,X,XIV,XV,XVII e trechos selecionados deI,II,IV,IX,XI,XII,XIII,XVI; não certifica livro integral, original francês ou estatísticas históricas."
      }
    ],
    "coding": [
      {
        "axis": "est",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "The Conquest of Bread — reprodução Gutenberg da edição Vanguard1926",
            "locator": "Prefácio1913:114–122; cap.III349–356/379–383",
            "statement": "Propõe comunas territoriais livres federadas, associações intercomunais e acordos diretos, substituindo a autoridade estatal central.",
            "basis": "norm",
            "publishedDate": "Corpo originalmente1892, revisto; prefácio1913; edição inglesa1926",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Autonomia territorial e federação voluntária são a estrutura constitutiva da proposta e a centralização estatal é expressamente rejeitada; direção federal/autonomista forte80.",
        "uncertainty": "Anarquia federativa, não federação constitucional moderna. As associações precisam coordenar serviços e produção; não se afirma inexistência de regras comuns.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "eco",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "The Conquest of Bread — reprodução Gutenberg da edição Vanguard1926",
            "locator": "Cap.III308–320/329–347; prefácio118–122",
            "statement": "Defende posse comum de instrumentos produtivos, terra e capital, abolindo propriedade produtiva privada e trabalho assalariado.",
            "basis": "norm",
            "publishedDate": "Corpo originalmente1892, revisto; edição inglesa1926",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "A transformação abrange os meios gerais de produção, não um setor ou serviço público; compromisso coletivo constitutivo justifica80.",
        "uncertainty": "Posse comunal não estatização administrativa. Mantém escolha pessoal e bens de uso; expropriação revolucionária integra a transição.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "pod",
        "position": "strong-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "The Conquest of Bread — reprodução Gutenberg da edição Vanguard1926",
            "locator": "Cap.III349–359; XII1176–1179/1252–1257/1260–1278/1293–1309",
            "statement": "Rejeita governo intrusivo, tribunais e prisões como resposta geral aos problemas sociais e trabalho imposto; prefere causas sociais, livre associação e saída de grupos.",
            "basis": "norm",
            "publishedDate": "Corpo originalmente1892, revisto; edição inglesa1926",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "A abolição constitutiva da autoridade coerciva estatal e da compulsão laboral dá direção forte à liberdade20. Confiança média porque a ordem comunal admite sanções sociais materiais.",
        "uncertainty": "Expropriação revolucionária não é abolida. Grupos podem expulsar associados, condicionar uso de bens ao trabalho e pressionar não participantes a buscar outra comunidade; há coação social apesar da rejeição penal-estatal. Não inferir pacifismo ou ausência de violência.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "con",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "The Conquest of Bread — reprodução Gutenberg da edição Vanguard1926",
            "locator": "Cap.XIV1441–1453/1478–1482; III379–383; XII1271–1276",
            "statement": "Organiza produção pelo conjunto de necessidades de consumo e esforços coordenados, em vez de valor de troca; associações e participantes conservam iniciativa e escolha.",
            "basis": "norm",
            "publishedDate": "Corpo originalmente1892, revisto; edição inglesa1926",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "A prioridade geral das necessidades e a coordenação deliberada da produção sustentam planejamento60, além de mera regulação setorial. Âncora moderada porque o desenho deixa associação, organização de novos grupos, lazer e iniciativas pessoais livres, sem plano compulsório que fixe todas as decisões.",
        "uncertainty": "Coordenação descentralizada, não comando estatal. Não se transformou autonomia em prova de mercado: a rejeição do valor de troca permanece. O texto não quantifica a parcela de decisões planejadas.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "The Conquest of Bread — reprodução Gutenberg da edição Vanguard1926",
            "locator": "Cap.X1023–1054, especialmente1025/1030–1031/1049–1051",
            "statement": "Exige emancipação das mulheres do trabalho doméstico compulsório e da hierarquia masculina, reconhece acesso à educação e à vida pública e preserva escolha de arranjos domésticos e de cuidado infantil.",
            "basis": "norm",
            "publishedDate": "Corpo originalmente1892, revisto; edição inglesa1926",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "A transformação geral do estatuto feminino no lar e na vida social, política e educacional sustenta progressismo moderado60. A base é a emancipação e a escolha familiares expressas, não a compra de uma máquina ou somente presença de mulheres num cargo.",
        "uncertainty": "Linguagem binária e maternidade feminina permanecem; o texto não estabelece igualdade de orientações sexuais nem todas as normas atuais de gênero. Linguagem racial hierarquizante em outros trechos da edição limita universalidade.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "tec",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "The Conquest of Bread — reprodução Gutenberg da edição Vanguard1926",
            "locator": "Cap.X995–1017/1033–1044; XV1490–1509; XVII1607–1608/1642–1651/1750–1755",
            "statement": "Recomenda mecanização segura da indústria e mineração, energia e automação domésticas, experimentação agrícola e pesquisa em iluminação, energia solar e processos biológicos para reduzir penúria e trabalho.",
            "basis": "norm",
            "publishedDate": "Corpo originalmente1892, revisto; edição inglesa1926",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "O apoio atravessa indústria, mineração, energia e agricultura e atribui à investigação tecnológica papel central na emancipação produtiva. Otimismo moderado60: condiciona usos ao bem-estar e distingue projetos especulativos de fatos adquiridos.",
        "uncertainty": "Critica invenções que servem à guerra e exploração e admite erros de teorias agrícolas e incerteza de aplicações futuras. Não é aprovação indiscriminada da inovação nem prova de segurança de tecnologias atuais.",
        "reviewedOn": "2026-10-08"
      }
    ]
  },
  "ricardo-flores-magon": {
    "period": "Programa coletivo do PLM, assinado em 1º de julho de 1906",
    "rationale": "Defende eleições fiscalizadas pelo povo, garantias civis e secularização anticlerical, com reformas trabalhistas e agrárias limitadas.",
    "caveats": "1906: norma coletiva do PLM, não toda a carreira de Magón nem programa anarquista posterior. Conserva defesa voluntária, propriedade privada produtiva, banco público ou fomentado, punições e exclusões raciais. Reformas escolares, agrárias e de filiação não demonstram, por si, orientação integral de propriedade, alocação econômica ou costumes; recrutamento militar não estabelece toda a política externa. Os eixos sem evidência documental permanecem não estimados.",
    "sources": [
      {
        "title": "Programa del Partido Liberal (1906), Junta Organizadora del PLM",
        "url": "https://www.memoriapoliticademexico.org/Textos/5RepDictadura/1906PPL.html",
        "note": "Transcrição integral do programa primário de 1906; o texto identifica Flores Magón como presidente e signatário da Junta Organizadora, que publicou o programa coletivamente."
      },
      {
        "title": "Ricardo Flores Magón — INEHRM",
        "url": "https://inehrm.gob.mx/es/inehrm/magon",
        "note": "Biografia institucional consultada: 1873–1922; falecimento em 21 de novembro de 1922. Não gera eixos."
      }
    ],
    "coding": [
      {
        "axis": "rep",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Programa del Partido Liberal (1906), Junta Organizadora del PLM",
            "locator": "Exposição18–24/107–110; arts1–3/51(113–115/159); apelo165–166",
            "statement": "Subordina o poder ao acompanhamento e à soberania populares, exige eleições e prestação de contas e proíbe reeleição presidencial e de governadores.",
            "basis": "norm",
            "publishedDate": "1906-07-01",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "A participação popular e a sujeição das autoridades a eleições, alternância e fiscalização compõem o desenho político geral. Âncora80 por serem compromissos constitutivos explícitos, não um elogio isolado às eleições.",
        "uncertainty": "Programa coletivo assinado por Magón; não execução nem democracia universal contemporânea. Exclusão chinesa e retórica do apelo182 limitam a universalidade; não há norma explícita de sufrágio feminino.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Programa del Partido Liberal (1906), Junta Organizadora del PLM",
            "locator": "Exposição27–32/99–104; arts5–7/9/41/44(117–120/149/151)",
            "statement": "Protege expressão e amparo, elimina tribunais militares em tempo de paz e limita pena capital à traição; propõe regeneração carcerária sem humilhação.",
            "basis": "norm",
            "publishedDate": "1906-07-01",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Garantias gerais de expressão e proteção judicial contra abuso, aliadas à limitação de punições e jurisdição militar, sustentam liberdade moderada40.",
        "uncertainty": "Mantém punição severa de abuso, exceção capital por traição, tribunais militares em guerra, sanções por falsidade e restrições coercivas ao clero. Não há rejeição absoluta da coerção estatal.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "rel",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Programa del Partido Liberal (1906), Junta Organizadora del PLM",
            "locator": "Exposição33–39/42–54; arts10–11/17–20(121–122/127–130)",
            "statement": "Exige ensino secular, rejeita autoridade política da Igreja, restringe escolas clericais e nacionaliza bens eclesiásticos ocultos em nome de terceiros.",
            "basis": "norm",
            "publishedDate": "1906-07-01",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "A separação institucional explícita e a retirada abrangente de poder público e educacional do clero sustentam secularização forte80.",
        "uncertainty": "É secularização coerciva e anticlerical, não tolerância religiosa irrestrita: sanções e limitações clericais são parte do próprio programa.",
        "reviewedOn": "2026-10-08"
      }
    ]
  }
};

export function reconcileRanking675HistoricalFigure03(entries:ReferenceEntry[]):ReferenceEntry[]{return entries.map(existing=>{
 const before=ranking675HistoricalFigure03OriginalRecords[existing.id];
 if(!before||JSON.stringify(existing)!==JSON.stringify(before))return existing;
 const proposal=ranking675HistoricalFigure03Proposals[existing.id];
 const next:ReferenceEntry={...existing,period:proposal.period,rationale:proposal.rationale,caveats:proposal.caveats,sources:proposal.sources,vec:Object.fromEntries(AXIS_KEYS.map(k=>[k,50])) as Record<AxisKey,number>,evidence:{},axisEvidence:{},coding:{}};
 for(const input of proposal.coding){const c=codeReferenceAxis(input,next.sources);next.vec[input.axis]=c.value;next.evidence[input.axis]=c.evidence;next.axisEvidence![input.axis]=c.axisEvidence;next.coding![input.axis]=c.coding;}
 return next;
});}
