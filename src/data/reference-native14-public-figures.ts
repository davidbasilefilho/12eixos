import type {ReferenceEntry,ReferenceSource} from './references';
import {AXES} from '../lib/scoring';
import {codeReferenceAxis,type ReferenceAxisCoding} from '../lib/reference-coding';
const keys=AXES.map(a=>a.key);
export const native14PublicFiguresBefore:ReferenceEntry[]=[
  {
    "id": "jill-stein",
    "name": "Jill Stein",
    "aliases": [
      "Jill Ellen Stein"
    ],
    "kind": "person",
    "category": "public-figure",
    "period": "Declarações próprias de campanha2024; atividade reportada18/08/2026",
    "sources": [
      {
        "title": "Jill Stein — declaração própria no guia oficial da Califórnia2024",
        "url": "https://vigarchive.sos.ca.gov/2024/primary/candidates/president/president-green-cand-statements.htm",
        "note": "Cabeçalho5, declaração18–29 e atribuição41 efetivamente lidos; edição primárias05/03/2024, dia de submissão não indicado."
      },
      {
        "title": "Jill Stein — respostas próprias VOTE411, edição eleitoral2024",
        "url": "https://www.vote411.org/node/15061",
        "note": "Identificação52–58 e respostas do candidato80–109 efetivamente lidas. Edição vinculada à campanha2024, submissão não datada."
      },
      {
        "title": "Jill Stein — We Do Not Consent to War,04/10/2024",
        "url": "https://www.gp.org/we_do_not_consent_to_war",
        "note": "Carta própria17–40 efetivamente lida, assinatura nominalJill40 e publicação04/10/2024; não confundir com textos de terceiros no partido."
      },
      {
        "title": "Independent Political Report — atividade de Jill Stein,21/08/2026",
        "url": "https://independentpoliticalreport.com/2026/08/former-green-nominee-jill-stein-ordered-to-appear-in-person-in-missouri-misdemeanor-case/",
        "note": "Data11/corpo15–24 efetivamente lidos: reação própria18/08/2026 reportada; identidade apenas, sem certificar presença futura em audiência."
      },
      {
        "title": "Jill Stein — Democracy, programa pessoal de campanha2024",
        "url": "https://www.jillstein2024.com/democracy",
        "note": "Corpo15–56 e rodapé de pagamento80 efetivamente lidos antes de posterior404; página própria de campanha2024, publicação sem dia indicado. Nova reabertura falhou. Sem renovação em2026."
      },
      {
        "title": "Jill Stein — compromisso LGBTQIA, mensagem própria05/06/2024",
        "url": "https://www.politicalemails.org/messages/1444477",
        "note": "Reprodução nominal de email próprio: cabeçalho24–29, corpo40–60 e assinatura/rodapé61–64 efetivamente lidos. Fonte externa preserva remetente e campanha pagadora; não autenticação criptográfica ou inspeção da imagem. Alegações empíricas excluídas."
      },
      {
        "title": "Jill Stein — autonomia reprodutiva, mensagem própria19/10/2024",
        "url": "https://politicalemails.org/messages/1606639",
        "note": "Reprodução nominal de email próprio: cabeçalho24–29, corpo40–72 e assinatura/rodapé73–76 efetivamente lidos. Propostas66/69 distintas de alegações históricas/estatísticas não certificadas. Links retirados pelo arquivo."
      }
    ],
    "caveats": "Compromissos próprios de campanha2024, não execução ou renovação em2026. Controles de aluguel e salário não estabelecem a regra geral de alocação econômica. Fontes, códigos anteriores e proposta retirada completos preservados no arquivo. Página pessoal lida antes de posterior404; emails reproduzidos nominalmente por arquivo externo sem autenticação criptográfica.",
    "rationale": "Defende participação popular, liberdades civis, igualdade sexual e de gênero, diplomacia e expansão pública na economia.",
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
      "rel": 50,
      "mor": 60,
      "tec": 50
    },
    "evidence": {
      "rep": "medium",
      "dip": "medium",
      "eco": "medium",
      "pod": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Jill Stein — declaração própria no guia oficial da Califórnia2024",
          "Jill Stein — Democracy, programa pessoal de campanha2024"
        ],
        "rationale": "Representação democrática. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Programa de autoridade popular, não execução eleitoral. Remodela tribunais48–50 e limita financiamento/lobby51–54; não democracia direta irrestrita. Página atual retornou404 após leitura efetiva anterior."
      },
      "dip": {
        "sourceTitles": [
          "Jill Stein — We Do Not Consent to War,04/10/2024"
        ],
        "rationale": "Desmilitarização geral. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Embargo de armas condicional21; não desarmamento completo."
      },
      "eco": {
        "sourceTitles": [
          "Jill Stein — respostas próprias VOTE411, edição eleitoral2024"
        ],
        "rationale": "Participação pública entre setores. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não maioria pública nacional; demais negócios privados não abolidos."
      },
      "pod": {
        "sourceTitles": [
          "Jill Stein — Democracy, programa pessoal de campanha2024",
          "Jill Stein — We Do Not Consent to War,04/10/2024"
        ],
        "rationale": "Prioriza liberdades públicas de expressão e fiscalização e limita coerção penal geral. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: VOTE41195–96 mantém proibição de armas de assalto, verificações, espera e restrições preventivas; Democracy51–54 restringe lobby/financiamento. Não liberdade irrestrita, ausência de polícia ou execução comprovada."
      },
      "mor": {
        "sourceTitles": [
          "Jill Stein — compromisso LGBTQIA, mensagem própria05/06/2024",
          "Jill Stein — autonomia reprodutiva, mensagem própria19/10/2024"
        ],
        "rationale": "Direção progressista entre sexualidade, identidade de gênero, família e autonomia reprodutiva. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Compromissos declarados em emails nominais de campanha, não leis executadas. Não inferir cada dispositivo dos projetos citados por nome, nem política em2026 ou rejeição de toda tradição. Estatísticas e acusações dos emails excluídas."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Jill Stein — declaração própria no guia oficial da Califórnia2024",
            "locator": "Texto linhas18–29; atribuição de submissão própria41",
            "statement": "Defende escolha eleitoral, direitos e autoridade popular.",
            "basis": "declaration",
            "publishedDate": "Guia de primárias2024-03-05; submissão não datada",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Jill Stein — Democracy, programa pessoal de campanha2024",
            "locator": "Democracy2024: corpo21–38; contrapontos48–54.",
            "statement": "Prescreve representação proporcional, voto popular e poderes gerais de iniciativa, referendo e revogação.",
            "basis": "declaration",
            "publishedDate": "Página própria de campanha2024; publicação sem dia indicado",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Representação democrática.",
        "uncertainty": "Programa de autoridade popular, não execução eleitoral. Remodela tribunais48–50 e limita financiamento/lobby51–54; não democracia direta irrestrita. Página atual retornou404 após leitura efetiva anterior.",
        "relatedQuestionIds": [
          "representacao_07",
          "representacao_15"
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
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Jill Stein — We Do Not Consent to War,04/10/2024",
            "locator": "Texto linhas22/29–31; assinatura40",
            "statement": "Reduz orçamento militar e substitui militarização por diplomacia.",
            "basis": "declaration",
            "publishedDate": "2024-10-04",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Desmilitarização geral.",
        "uncertainty": "Embargo de armas condicional21; não desarmamento completo.",
        "relatedQuestionIds": [
          "diplomacia_01",
          "diplomacia_02"
        ],
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "eco": {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Jill Stein — respostas próprias VOTE411, edição eleitoral2024",
            "locator": "Texto linhas87–89/106–109",
            "statement": "Propõe propriedade pública de saúde, indústria farmacêutica e rede energética nacional.",
            "basis": "declaration",
            "publishedDate": "Edição eleitoral presidencial2024; submissão não datada",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Participação pública entre setores.",
        "uncertainty": "Não maioria pública nacional; demais negócios privados não abolidos.",
        "relatedQuestionIds": [
          "economia_03",
          "economia_04"
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
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Jill Stein — Democracy, programa pessoal de campanha2024",
            "locator": "Democracy2024: liberdade pública40–42; limites51–54.",
            "statement": "Opõe censura estatal e empresarial e protege imprensa, informação pública e denunciantes.",
            "basis": "declaration",
            "publishedDate": "Página própria de campanha2024; publicação sem dia indicado",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Jill Stein — We Do Not Consent to War,04/10/2024",
            "locator": "Carta04/10/2024,29; assinatura40.",
            "statement": "Propõe terminar encarceramento em massa e violência policial no programa nacional.",
            "basis": "declaration",
            "publishedDate": "2024-10-04",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Prioriza liberdades públicas de expressão e fiscalização e limita coerção penal geral.",
        "uncertainty": "VOTE41195–96 mantém proibição de armas de assalto, verificações, espera e restrições preventivas; Democracy51–54 restringe lobby/financiamento. Não liberdade irrestrita, ausência de polícia ou execução comprovada.",
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
            "sourceTitle": "Jill Stein — compromisso LGBTQIA, mensagem própria05/06/2024",
            "locator": "Email05/06/2024,47–51/56–60; remetente24–29.",
            "statement": "Propõe proteção federal de direitos LGBTQIA, cuidado afirmativo, inclusão familiar e educação contra exclusão sexual e de gênero.",
            "basis": "declaration",
            "publishedDate": "2024-06-05",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Jill Stein — autonomia reprodutiva, mensagem própria19/10/2024",
            "locator": "Email19/10/2024,66–70; assinatura72/rodapé73–76.",
            "statement": "Afirma autonomia reprodutiva e aborto gratuito como direito pessoal a ser garantido nacionalmente.",
            "basis": "declaration",
            "publishedDate": "2024-10-19",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Direção progressista entre sexualidade, identidade de gênero, família e autonomia reprodutiva.",
        "uncertainty": "Compromissos declarados em emails nominais de campanha, não leis executadas. Não inferir cada dispositivo dos projetos citados por nome, nem política em2026 ou rejeição de toda tradição. Estatísticas e acusações dos emails excluídas.",
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
    "id": "jeannette-jara",
    "name": "Jeannette Jara",
    "aliases": [
      "Jeannette Jara Román",
      "Jeannette Jara Roman"
    ],
    "kind": "person",
    "category": "public-figure",
    "period": "Lineamientos próprios endossados, agosto2025; identidade/atividade01/09/2026",
    "sources": [
      {
        "title": "Jeannette Jara — Un Chile que cumple, agosto2025",
        "url": "https://centrocompetencia.com/wp-content/uploads/2025/09/Programa_Jeannette_Jara_2025.pdf",
        "note": "PDF62p; capa, apresentação assinada e áreas delimitadas lidas; edição agosto2025, sem dia certificado. Escopo exato no relatório."
      },
      {
        "title": "PC Chile — apresentação do programa,18/08/2025",
        "url": "https://pcchile.cl/2025/08/18/lineamientos-programaticos-jeannette-jara-2025/",
        "note": "Cabeçalho21–23 e corpo29–30 lidos: publicação/atribuição apenas."
      },
      {
        "title": "BioBioChile — atividade de Jeannette Jara,01/09/2026",
        "url": "https://www.biobiochile.cl/noticias/nacional/chile/2026/09/01/jeannette-jara-celebra-alza-de-la-pgu-y-acusa-a-republicanos-de-celebrar-hoy-lo-que-antes-rechazaron.shtml",
        "note": "Data103 e corpo136–153 lidos: identidade/atividade apenas; resumo IA134–135 excluído; fotografia de arquivo não certificada."
      }
    ],
    "caveats": "Programa declarado e datado, não prática ou opinião medida2026. Oito eixos desconhecidos. Edições de maio/outubro não amalgamadas. Revisão documental delimitada aceita pela revisão independente e pelo Root.",
    "rationale": "Defende participação democrática, vigilância e controles de segurança, abertura comercial e expansão tecnológica.",
    "vec": {
      "est": 50,
      "rep": 60,
      "pod": 60,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 40,
      "rel": 50,
      "mor": 50,
      "tec": 60
    },
    "evidence": {
      "rep": "medium",
      "pod": "medium",
      "com": "medium",
      "tec": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Jeannette Jara — Un Chile que cumple, agosto2025"
        ],
        "rationale": "Democracia plural declarada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não certifica toda regra eleitoral ou execução."
      },
      "pod": {
        "sourceTitles": [
          "Jeannette Jara — Un Chile que cumple, agosto2025"
        ],
        "rationale": "Coerção estatal de segurança. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Proteção de dados829, controle civil910 e reinserção922/937 limitam poder."
      },
      "com": {
        "sourceTitles": [
          "Jeannette Jara — Un Chile que cumple, agosto2025"
        ],
        "rationale": "Abertura comercial programática. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Promoção produtiva seletiva562–595; não tarifa zero."
      },
      "tec": {
        "sourceTitles": [
          "Jeannette Jara — Un Chile que cumple, agosto2025"
        ],
        "rationale": "Adoção tecnológica em vários setores. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Proteção ambiental159/341–344 e crise climática106/127; não aceitação irrestrita."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Jeannette Jara — Un Chile que cumple, agosto2025",
            "locator": "Physicalp3–4,26–38; p7,101–115",
            "statement": "Defende participação democrática e diálogo entre posições divergentes contra soluções autoritárias.",
            "basis": "declaration",
            "publishedDate": "Agosto2025 — edição assinada; apresentação18/08/2025",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Democracia plural declarada.",
        "uncertainty": "Não certifica toda regra eleitoral ou execução.",
        "relatedQuestionIds": [
          "representacao_19",
          "representacao_20"
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
            "sourceTitle": "Jeannette Jara — Un Chile que cumple, agosto2025",
            "locator": "Physicalp25–30,772–790/823–829/871–890/927–942",
            "statement": "Amplia controle de armas, vigilância biométrica, investigação financeira e prisões.",
            "basis": "declaration",
            "publishedDate": "Agosto2025 — edição assinada; apresentação18/08/2025",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Coerção estatal de segurança.",
        "uncertainty": "Proteção de dados829, controle civil910 e reinserção922/937 limitam poder.",
        "relatedQuestionIds": [
          "poder_05",
          "poder_09",
          "poder_18"
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
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Jeannette Jara — Un Chile que cumple, agosto2025",
            "locator": "Physicalp9,177–182; p19–20,538–596",
            "statement": "Preserva acordos comerciais, amplia mercados e facilita comércio internacional.",
            "basis": "declaration",
            "publishedDate": "Agosto2025 — edição assinada; apresentação18/08/2025",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Abertura comercial programática.",
        "uncertainty": "Promoção produtiva seletiva562–595; não tarifa zero.",
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
      "tec": {
        "axis": "tec",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Jeannette Jara — Un Chile que cumple, agosto2025",
            "locator": "Physicalp11–13,248–250/311–327; p27,823–829; p38–39,1177–1183/1229–1241",
            "statement": "Expande conectividade, mineração tecnológica, IA e telemedicina.",
            "basis": "declaration",
            "publishedDate": "Agosto2025 — edição assinada; apresentação18/08/2025",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Adoção tecnológica em vários setores.",
        "uncertainty": "Proteção ambiental159/341–344 e crise climática106/127; não aceitação irrestrita.",
        "relatedQuestionIds": [
          "tecnologia_01",
          "tecnologia_07",
          "tecnologia_10"
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
    "id": "rashida-tlaib",
    "kind": "person",
    "category": "public-figure",
    "name": "Rashida Tlaib",
    "period": "Agenda publicada pelo gabinete: Justice for All Act de 2023 e página Ending Poverty sem data; consulta em 7 de outubro de 2026.",
    "vec": {
      "est": 50,
      "rep": 60,
      "pod": 40,
      "imi": 40,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 60,
      "tec": 50
    },
    "evidence": {
      "rep": "medium",
      "imi": "medium",
      "pod": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Justice for All"
        ],
        "rationale": "Declara compromisso com a proteção do direito ao voto. A âncora expressa a direção e intensidade delimitadas dessa proposta. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não sustenta um retrato completo de desenho democrático. Direito ao voto é um componente da representação, sem autorizar inferir todo o desenho democrático. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação."
      },
      "imi": {
        "sourceTitles": [
          "Justice for All"
        ],
        "rationale": "Defende facilitar o acesso à cidadania para comunidades imigrantes. A âncora expressa a direção e intensidade delimitadas dessa proposta. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Cidadania não resolve todas as posições sobre multiculturalismo. Inclusão jurídica e acesso a instituições sustentam somente orientação moderada contra exclusão, sem equivalência perfeita com toda integração cultural. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação."
      },
      "pod": {
        "sourceTitles": [
          "Justice for All"
        ],
        "rationale": "Propõe responsabilização de agentes públicos e vedação a perfilamento racial e de gênero pela polícia. A âncora expressa a direção e intensidade delimitadas dessa proposta. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Proteção contra abuso não implica rejeição de toda política de segurança. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação."
      },
      "mor": {
        "sourceTitles": [
          "Justice for All"
        ],
        "rationale": "Propõe proteção antidiscriminatória para orientação sexual e identidade de gênero. A âncora expressa a direção e intensidade delimitadas dessa proposta. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Escopo é direitos civis especificados, não todos os temas morais. A proteção citada cobre uma faceta de costumes e direitos; não constitui posição extrema sobre todo o eixo. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Justice for All",
            "locator": "My Position on Justice for All, primeiro parágrafo",
            "statement": "Declara compromisso com a proteção do direito ao voto.",
            "basis": "declaration",
            "publishedDate": "Sem data indicada; conteúdo disponível em 7/10/2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Declara compromisso com a proteção do direito ao voto. A âncora expressa a direção e intensidade delimitadas dessa proposta.",
        "uncertainty": "Não sustenta um retrato completo de desenho democrático. Direito ao voto é um componente da representação, sem autorizar inferir todo o desenho democrático. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação.",
        "reviewedOn": "2026-10-07",
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
            "sourceTitle": "Justice for All",
            "locator": "My Position on Justice for All, segundo parágrafo",
            "statement": "Defende facilitar o acesso à cidadania para comunidades imigrantes.",
            "basis": "declaration",
            "publishedDate": "Sem data indicada; conteúdo disponível em 7/10/2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Defende facilitar o acesso à cidadania para comunidades imigrantes. A âncora expressa a direção e intensidade delimitadas dessa proposta.",
        "uncertainty": "Cidadania não resolve todas as posições sobre multiculturalismo. Inclusão jurídica e acesso a instituições sustentam somente orientação moderada contra exclusão, sem equivalência perfeita com toda integração cultural. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "pod": {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Justice for All",
            "locator": "Justice for All Civil Rights Act, item 4",
            "statement": "Propõe responsabilização de agentes públicos e vedação a perfilamento racial e de gênero pela polícia.",
            "basis": "declaration",
            "publishedDate": "Sem data indicada; conteúdo disponível em 7/10/2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Propõe responsabilização de agentes públicos e vedação a perfilamento racial e de gênero pela polícia. A âncora expressa a direção e intensidade delimitadas dessa proposta.",
        "uncertainty": "Proteção contra abuso não implica rejeição de toda política de segurança. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação.",
        "reviewedOn": "2026-10-07",
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
            "sourceTitle": "Justice for All",
            "locator": "Justice for All Civil Rights Act, item 7",
            "statement": "Propõe proteção antidiscriminatória para orientação sexual e identidade de gênero.",
            "basis": "declaration",
            "publishedDate": "Sem data indicada; conteúdo disponível em 7/10/2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Propõe proteção antidiscriminatória para orientação sexual e identidade de gênero. A âncora expressa a direção e intensidade delimitadas dessa proposta.",
        "uncertainty": "Escopo é direitos civis especificados, não todos os temas morais. A proteção citada cobre uma faceta de costumes e direitos; não constitui posição extrema sobre todo o eixo. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      }
    },
    "sources": [
      {
        "title": "Justice for All",
        "url": "https://tlaib.house.gov/resources/justice",
        "note": "Gabinete de Rashida Tlaib, Câmara dos EUA. Publicação: sem data indicada. Consulta documental em 7/10/2026; posições declaradas, não prova de implementação."
      },
      {
        "title": "Ending Poverty",
        "url": "https://tlaib.house.gov/resources/ending-poverty",
        "note": "Gabinete de Rashida Tlaib, Câmara dos EUA. Publicação: sem data indicada. Consulta documental em 7/10/2026; posições declaradas, não prova de implementação."
      },
      {
        "title": "Escritório Omar — comunicado nominal conjunto23/07/2026, cláusula do índice",
        "url": "https://omar.house.gov/media/press-releases",
        "note": "Identidade/atividade2026 apenas. Índice oficial94–97: data e cláusula completa com Omar e Rashida Tlaib entre membros que emitiram declaração. Corpo da cláusula do índice efetivamente lido; comunicado interno completo retornou InternalError e não é declarado reaberto. Atividade nominal conjunta emitida, sem certificação de presença física ou toda posição de2026. Uma fonte compartilhada pelos dois nomes."
      }
    ],
    "rationale": "Declara compromisso com a proteção do direito ao voto. Defende facilitar o acesso à cidadania para comunidades imigrantes. Propõe responsabilização de agentes públicos e vedação a perfilamento racial e de gênero pela polícia. Propõe proteção antidiscriminatória para orientação sexual e identidade de gênero.",
    "caveats": "A descrição do JFA é de proposta reapresentada em 2023, não de lei em vigor. Não atribuir nacionalização com base em transferência de renda. A página Health Care consultada é genérica e foi excluída como sustentação do eixo eco. A proposta de crédito tributário e salário mínimo foi preservada apenas no dossiê: não demonstra planejamento econômico suficientemente específico. Âncoras são classes editoriais, não medições da pessoa. Eixos ausentes são desconhecidos. Nenhum destes perfis possui os seis eixos exigidos para matches. Identidade viva/atividade2026 delimitada por fonte adicional; data de publicação ou relato nominal não renova todas as posições anteriores nem certifica presença física, imagens ou cargo contínuo."
  }
];
export const native14PublicFiguresResearchArchive=[
  {
    "id": "jill-stein",
    "name": "Jill Stein",
    "originalPeriod": "Declarações próprias de campanha2024; atividade reportada18/08/2026",
    "priorWholeRecordSha256": "d82a880d12c4ba9b1d81ed25f7871911b4efebe0992012843dfe50a30e17c935",
    "priorDocumentedAxes": [
      "rep",
      "pod",
      "dip",
      "eco",
      "mor"
    ],
    "sources": [
      {
        "id": "stein-ca",
        "title": "Jill Stein — declaração própria no guia oficial da Califórnia2024",
        "url": "https://vigarchive.sos.ca.gov/2024/primary/candidates/president/president-green-cand-statements.htm",
        "publishedDate": "2024 primary guide for election 2024-03-05; submission date unstated",
        "accessedDate": "2026-10-08",
        "retrievalMode": "author-recorded-body",
        "actualReadScope": "Heading/date lines 5–16; complete candidate statement lines 18–29; submission attribution line 41.",
        "note": "State host explicitly says candidates supplied their own statements and that factual assertions were not checked. Only normative positions used."
      },
      {
        "id": "stein-vote411",
        "title": "Jill Stein — respostas próprias VOTE411, edição eleitoral2024",
        "url": "https://www.vote411.org/node/15061",
        "publishedDate": "2024 presidential candidate questionnaire, individual submission date unstated",
        "accessedDate": "2026-10-08",
        "retrievalMode": "author-recorded-body",
        "actualReadScope": "Candidate identification and 2024 campaign link lines 51–58; entire five-question response body lines 80–109.",
        "note": "Host labels these candidate responses; current copyright is not date of authorship. No implementation implied."
      },
      {
        "id": "stein-war",
        "title": "Jill Stein — We Do Not Consent to War,04/10/2024",
        "url": "https://www.gp.org/we_do_not_consent_to_war",
        "publishedDate": "2024-10-04",
        "accessedDate": "2026-10-08",
        "retrievalMode": "author-recorded-body",
        "actualReadScope": "Entire signed body lines 17–40, publication date line 50.",
        "note": "Signed personal campaign letter republished on party site; empirical accusations and polling not validated or used as facts."
      },
      {
        "id": "stein-lgbt",
        "title": "Jill Stein — compromisso LGBTQIA, mensagem própria05/06/2024",
        "url": "https://www.politicalemails.org/messages/1444477",
        "publishedDate": "2024-06-05",
        "accessedDate": "2026-10-08",
        "retrievalMode": "mirror",
        "actualReadScope": "Sender, campaign payment and date lines 24–29; full body lines 40–60; signature/footer lines 60–64.",
        "note": "Nominal personally signed campaign email preserved by external archive. No cryptographic authentication or screenshot inspection; factual medical/statistical allegations excluded."
      },
      {
        "id": "stein-reproductive",
        "title": "Jill Stein — autonomia reprodutiva, mensagem própria19/10/2024",
        "url": "https://politicalemails.org/messages/1606639",
        "publishedDate": "2024-10-19",
        "accessedDate": "2026-10-08",
        "retrievalMode": "mirror",
        "actualReadScope": "Sender/date lines 24–29; body lines 40–72; footer lines 73–76.",
        "note": "Only own normative bodily-autonomy and abortion commitments used; accusations and comparative mortality figures excluded."
      },
      {
        "id": "stein-immigration-email",
        "title": "Biden’s deportation scheme puts children’s lives at risk — Jill Stein",
        "url": "https://www.politicalemails.org/messages/1451324",
        "publishedDate": "2024-06-11 23:36 as archive lists; timezone not supplied",
        "accessedDate": "2026-10-08",
        "retrievalMode": "indexed",
        "actualReadScope": "Indexed title, sender, date, and displayed body through final programme-link sentence; emphasis on final three policy paragraphs. Direct web opens returned InternalError and ordinary HTTP download returned 403.",
        "note": "Personally attributed first-person campaign email; final signature/footer not exposed by the retrieved index. Evidence is explicitly index-only and needs source-authenticity tolerance or further verification; poem quotation not reproduced."
      },
      {
        "id": "stein-oped",
        "title": "Jill Stein: Why You Should Vote Green",
        "url": "https://www.gp.org/jill_stein_why_you_should_vote_green",
        "publishedDate": "2024-10-28; byline and original Newsweek date in reproduced item",
        "accessedDate": "2026-10-08",
        "retrievalMode": "indexed",
        "actualReadScope": "Indexed title, byline and substantive first-person article, including final democratic-reform paragraph and foreign-policy paragraph. Direct opens timed out/InternalError; ordinary HTTP download returned 403.",
        "note": "Party-hosted reproduction attributed to Jill Stein, not an unsigned party platform. Only indexed content actually read; full direct article not retrieved."
      },
      {
        "id": "stein-platform-mirror",
        "title": "Jill Stein – Green Party 2024 Election Platform | progressiveissuesblog",
        "url": "https://progressiveissuesblog.com/2024/08/16/jill-stein-green-party-2024-election-platform/",
        "publishedDate": "Host post dated 2024-08-16; copied-platform version/update date not authenticated",
        "accessedDate": "2026-10-08",
        "retrievalMode": "mirror",
        "actualReadScope": "Web body lines 8–258 and 268–495, including Democracy, Prisons and Policing, Immigration, Green New Deal and Foreign Policy; authorship description lines 514–519. HTML downloaded but no independent archived snapshot comparison performed.",
        "note": "Third-party copied platform links to campaign site and repeatedly identifies a Jill Stein administration. Many clauses match independently retrieved candidate responses, but these matches do not authenticate every other clause or the exact version. New uncorroborated axes remain leads."
      },
      {
        "id": "stein-democracy-dead",
        "title": "Jill Stein — Democracy, programa pessoal de campanha2024",
        "url": "https://www.jillstein2024.com/democracy",
        "publishedDate": "Undated 2024 campaign page according to prior record",
        "accessedDate": "2026-10-08",
        "retrievalMode": "direct",
        "actualReadScope": "No substantive content freshly retrieved; this run returned 404.",
        "note": "Prior read retained in original handoff, not represented as a fresh read. All claimed earlier locators remain prior-only."
      }
    ],
    "claims": [
      {
        "id": "stein-rep-ca",
        "axis": "rep",
        "sourceTitle": "Jill Stein — declaração própria no guia oficial da Califórnia2024",
        "sourceId": "stein-ca",
        "url": "https://vigarchive.sos.ca.gov/2024/primary/candidates/president/president-green-cand-statements.htm",
        "locator": "candidate statement paragraphs 2–3, concluding rights paragraph; web lines 19–20 and 27",
        "statement": "Affirms electoral choice and popular democratic authority.",
        "locatedEvidenceType": "bounded paraphrase",
        "basis": "declaration",
        "publishedDate": "2024 primary guide for election 2024-03-05; submission date unstated",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "General plural choice is explicitly essential to democracy, rather than merely asking for support for herself.",
        "counterEvidence": "The brief guide does not specify the complete institutional system.",
        "uncertainty": "Broad principle, but exact reform structure requires other evidence.",
        "retrievalMode": "author-recorded-body",
        "actualReadScope": "Heading/date lines 5–16; complete candidate statement lines 18–29; submission attribution line 41.",
        "status": "existing_substantively_supported"
      },
      {
        "id": "stein-rep-oped",
        "axis": "rep",
        "sourceTitle": "Jill Stein: Why You Should Vote Green",
        "sourceId": "stein-oped",
        "url": "https://www.gp.org/jill_stein_why_you_should_vote_green",
        "locator": "final democratic-reform paragraph beginning Finally, when you hear me called a spoiler",
        "statement": "Commits to ranked-choice voting, proportional representation and publicly financed campaigns.",
        "locatedEvidenceType": "bounded paraphrase",
        "basis": "declaration",
        "publishedDate": "2024-10-28; byline and original Newsweek date in reproduced item",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Combination concerns competitive plural representation and funding structure across the political system.",
        "counterEvidence": "Reform programme still uses representative institutions; not unrestricted direct government.",
        "uncertainty": "Index-only bylined primary reproduction; no direct page body recovered.",
        "retrievalMode": "indexed",
        "actualReadScope": "Indexed title, byline and substantive first-person article, including final democratic-reform paragraph and foreign-policy paragraph. Direct opens timed out/InternalError; ordinary HTTP download returned 403.",
        "status": "existing_corroborated_with_retrieval_limit"
      },
      {
        "id": "stein-pod-war",
        "axis": "pod",
        "sourceTitle": "Jill Stein — We Do Not Consent to War,04/10/2024",
        "sourceId": "stein-war",
        "url": "https://www.gp.org/we_do_not_consent_to_war",
        "locator": "web line 29, domestic programme list",
        "statement": "Calls for ending mass incarceration and police violence.",
        "locatedEvidenceType": "bounded paraphrase",
        "basis": "declaration",
        "publishedDate": "2024-10-04",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Reaches the general coercive criminal-justice system, but should be combined with civil-liberty evidence for whole-axis coverage.",
        "counterEvidence": "VOTE411 gun policy retains extensive restrictions, registration and preventive measures.",
        "uncertainty": "This alone is too compressed to certify the entire security/privacy/liberty construct.",
        "retrievalMode": "author-recorded-body",
        "actualReadScope": "Entire signed body lines 17–40, publication date line 50.",
        "status": "partial_support_only"
      },
      {
        "id": "stein-pod-mirror",
        "axis": "pod",
        "sourceTitle": "Jill Stein – Green Party 2024 Election Platform | progressiveissuesblog",
        "sourceId": "stein-platform-mirror",
        "url": "https://progressiveissuesblog.com/2024/08/16/jill-stein-green-party-2024-election-platform/",
        "locator": "Democracy lines 156–158; Prisons and Policing lines 174–214",
        "statement": "Copied programme limits censorship, surveillance, punitive detention and police immunity.",
        "locatedEvidenceType": "bounded paraphrase",
        "basis": "declaration",
        "publishedDate": "Host post dated 2024-08-16; copied-platform version/update date not authenticated",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Multiple liberties and coercive mechanisms would support a broad construct if version and personal attribution are independently accepted.",
        "counterEvidence": "Same copied programme retains firearm regulation and prosecution of serious offences.",
        "uncertainty": "Mirror is corroboration of the earlier actually read page, not an independently authenticated replacement. Prior POD should not be freshly re-certified from this alone.",
        "retrievalMode": "mirror",
        "actualReadScope": "Web body lines 8–258 and 268–495, including Democracy, Prisons and Policing, Immigration, Green New Deal and Foreign Policy; authorship description lines 514–519. HTML downloaded but no independent archived snapshot comparison performed.",
        "status": "lead_needs_provenance"
      },
      {
        "id": "stein-dip",
        "axis": "dip",
        "sourceTitle": "Jill Stein — We Do Not Consent to War,04/10/2024",
        "sourceId": "stein-war",
        "url": "https://www.gp.org/we_do_not_consent_to_war",
        "locator": "web lines 21–22 and 29–31",
        "statement": "Replaces militarized foreign policy with diplomacy, international law and reduced military spending.",
        "locatedEvidenceType": "bounded paraphrase",
        "basis": "declaration",
        "publishedDate": "2024-10-04",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "A general governing rule beyond one ceasefire demand accompanies the specific conflict stance.",
        "counterEvidence": "Conditional pressure/arms embargo remains; no absolute renunciation of armed defence demonstrated.",
        "uncertainty": "Not evidence of practical foreign-policy execution.",
        "retrievalMode": "author-recorded-body",
        "actualReadScope": "Entire signed body lines 17–40, publication date line 50.",
        "status": "existing_substantively_supported"
      },
      {
        "id": "stein-eco",
        "axis": "eco",
        "sourceTitle": "Jill Stein — respostas próprias VOTE411, edição eleitoral2024",
        "sourceId": "stein-vote411",
        "url": "https://www.vote411.org/node/15061",
        "locator": "healthcare answer lines 87–89; climate answer lines 106–107",
        "statement": "Proposes public ownership of healthcare provision, pharmaceuticals and a nationwide energy grid.",
        "locatedEvidenceType": "bounded paraphrase",
        "basis": "declaration",
        "publishedDate": "2024 presidential candidate questionnaire, individual submission date unstated",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Explicit ownership language across major service/production/infrastructure sectors, not merely single-payer financing.",
        "counterEvidence": "No abolition of all private business or proven majority ownership proposed here.",
        "uncertainty": "Campaign declaration; implementation and economic feasibility not certified.",
        "retrievalMode": "author-recorded-body",
        "actualReadScope": "Candidate identification and 2024 campaign link lines 51–58; entire five-question response body lines 80–109.",
        "status": "existing_substantively_supported"
      },
      {
        "id": "stein-mor-lgbt",
        "axis": "mor",
        "sourceTitle": "Jill Stein — compromisso LGBTQIA, mensagem própria05/06/2024",
        "sourceId": "stein-lgbt",
        "url": "https://www.politicalemails.org/messages/1444477",
        "locator": "policy paragraphs web lines 47–51 and 56–60",
        "statement": "Guarantees LGBTQIA equality, inclusive education and protection of family and health rights.",
        "locatedEvidenceType": "bounded paraphrase",
        "basis": "declaration",
        "publishedDate": "2024-06-05",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Cross-domain changes concern gender/sexuality and customary exclusion, to be read with reproductive autonomy.",
        "counterEvidence": "Named legislation is not read clause by clause; do not infer every provision solely from its title.",
        "uncertainty": "External nominal email archive; campaign promise, not law.",
        "retrievalMode": "mirror",
        "actualReadScope": "Sender, campaign payment and date lines 24–29; full body lines 40–60; signature/footer lines 60–64.",
        "status": "existing_substantively_supported"
      },
      {
        "id": "stein-mor-abortion",
        "axis": "mor",
        "sourceTitle": "Jill Stein — autonomia reprodutiva, mensagem própria19/10/2024",
        "sourceId": "stein-reproductive",
        "url": "https://politicalemails.org/messages/1606639",
        "locator": "web lines 66–70",
        "statement": "Guarantees freely available abortion and rejects forced continued pregnancy.",
        "locatedEvidenceType": "bounded paraphrase",
        "basis": "declaration",
        "publishedDate": "2024-10-19",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Complements sexual/gender/family equality rather than pretending one abortion sentence represents all morality.",
        "counterEvidence": "Not a general rejection of tradition or unrestricted agreement with every progressive policy.",
        "uncertainty": "Policy commitment only; medical and historical rhetoric excluded.",
        "retrievalMode": "mirror",
        "actualReadScope": "Sender/date lines 24–29; body lines 40–72; footer lines 73–76.",
        "status": "existing_substantively_supported"
      },
      {
        "id": "stein-imi-vote411",
        "axis": "imi",
        "sourceTitle": "Jill Stein — respostas próprias VOTE411, edição eleitoral2024",
        "sourceId": "stein-vote411",
        "url": "https://www.vote411.org/node/15061",
        "locator": "immigration answer lines 99–101",
        "statement": "Replaces detention-first enforcement with asylum processing, broad amnesty and accessible citizenship.",
        "locatedEvidenceType": "bounded paraphrase",
        "basis": "declaration",
        "publishedDate": "2024 presidential candidate questionnaire, individual submission date unstated",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "System-wide immigration rules span undocumented residents, asylum seekers and refugees; cultural aspect is supplied only by the separate personally attributed email.",
        "counterEvidence": "Retains immigration institutions and processing; does not establish absence of all borders or screening.",
        "uncertainty": "Citizenship alone is not multiculturalism; do not code solely from this response.",
        "retrievalMode": "author-recorded-body",
        "actualReadScope": "Candidate identification and 2024 campaign link lines 51–58; entire five-question response body lines 80–109.",
        "status": "candidate_for_independent_review"
      },
      {
        "id": "stein-imi-email",
        "axis": "imi",
        "sourceTitle": "Biden’s deportation scheme puts children’s lives at risk — Jill Stein",
        "sourceId": "stein-immigration-email",
        "url": "https://www.politicalemails.org/messages/1451324",
        "locator": "final policy paragraphs: from When I am elected through programme link",
        "statement": "Welcomes varied immigrants as enriching communities and commits to humane asylum and citizenship.",
        "locatedEvidenceType": "bounded paraphrase",
        "basis": "declaration",
        "publishedDate": "2024-06-11 23:36 as archive lists; timezone not supplied",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Adds a general positive account of immigrant diversity to the broad migration-policy answer, rather than inferring culture from a single named group.",
        "counterEvidence": "No detailed language-rights or cultural-autonomy regime is directly retrievable here.",
        "uncertainty": "Only indexed body read; final signature/complete original not independently retrieved. Candidate must retain this retrieval caveat.",
        "retrievalMode": "indexed",
        "actualReadScope": "Indexed title, sender, date, and displayed body through final programme-link sentence; emphasis on final three policy paragraphs. Direct web opens returned InternalError and ordinary HTTP download returned 403.",
        "status": "candidate_for_independent_review"
      },
      {
        "id": "stein-int-lead",
        "axis": "int",
        "sourceTitle": "Jill Stein – Green Party 2024 Election Platform | progressiveissuesblog",
        "sourceId": "stein-platform-mirror",
        "url": "https://progressiveissuesblog.com/2024/08/16/jill-stein-green-party-2024-election-platform/",
        "locator": "Foreign Policy lines 472–490",
        "statement": "Copied programme ends foreign military interventions, most overseas bases and regime-change efforts.",
        "locatedEvidenceType": "bounded paraphrase",
        "basis": "declaration",
        "publishedDate": "Host post dated 2024-08-16; copied-platform version/update date not authenticated",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Would be broader than opposition to one war and fits external involvement, while diplomatic cooperation remains.",
        "counterEvidence": "Keeps international aid, law enforcement of rights, and targeted pressure; INT is not isolation from diplomacy.",
        "uncertainty": "Uncorroborated exact mirror version; hold until own dated source confirms full commitment.",
        "retrievalMode": "mirror",
        "actualReadScope": "Web body lines 8–258 and 268–495, including Democracy, Prisons and Policing, Immigration, Green New Deal and Foreign Policy; authorship description lines 514–519. HTML downloaded but no independent archived snapshot comparison performed.",
        "status": "lead_needs_provenance"
      },
      {
        "id": "stein-con-lead",
        "axis": "con",
        "sourceTitle": "Jill Stein – Green Party 2024 Election Platform | progressiveissuesblog",
        "sourceId": "stein-platform-mirror",
        "url": "https://progressiveissuesblog.com/2024/08/16/jill-stein-green-party-2024-election-platform/",
        "locator": "Real Green New Deal lines 399–407; agriculture line 453",
        "statement": "Copied programme prescribes public planning across energy, transportation, manufacturing, housing and agricultural supply.",
        "locatedEvidenceType": "bounded paraphrase",
        "basis": "declaration",
        "publishedDate": "Host post dated 2024-08-16; copied-platform version/update date not authenticated",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "General coordination mechanism is substantially broader than rent controls or one agency.",
        "counterEvidence": "Mirrored labour/economy sections retain cooperatives, small businesses and some markets.",
        "uncertainty": "Cannot elevate until source version/attribution is independently verified.",
        "retrievalMode": "mirror",
        "actualReadScope": "Web body lines 8–258 and 268–495, including Democracy, Prisons and Policing, Immigration, Green New Deal and Foreign Policy; authorship description lines 514–519. HTML downloaded but no independent archived snapshot comparison performed.",
        "status": "lead_needs_provenance"
      },
      {
        "id": "stein-tec-lead",
        "axis": "tec",
        "sourceTitle": "Jill Stein – Green Party 2024 Election Platform | progressiveissuesblog",
        "sourceId": "stein-platform-mirror",
        "url": "https://progressiveissuesblog.com/2024/08/16/jill-stein-green-party-2024-election-platform/",
        "locator": "climate lines 425–437; agriculture lines 448–460",
        "statement": "Copied programme pairs technical renewables with precautionary review and restrictions on nuclear/geoengineering approaches.",
        "locatedEvidenceType": "bounded paraphrase",
        "basis": "declaration",
        "publishedDate": "Host post dated 2024-08-16; copied-platform version/update date not authenticated",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "A general precautionary principle could balance cross-sector technical adoption.",
        "counterEvidence": "Renewables, storage, rail and smart-grid investment are material pro-technology counterevidence.",
        "uncertainty": "Avoid equating environmentalism with anti-technology. Whole-axis mapping and copied-version provenance remain unresolved.",
        "retrievalMode": "mirror",
        "actualReadScope": "Web body lines 8–258 and 268–495, including Democracy, Prisons and Policing, Immigration, Green New Deal and Foreign Policy; authorship description lines 514–519. HTML downloaded but no independent archived snapshot comparison performed.",
        "status": "lead_needs_provenance"
      }
    ],
    "axisReview": [
      {
        "axis": "rep",
        "status": "existing_supported_with_indexed_corroboration",
        "claimIds": [
          "stein-rep-ca",
          "stein-rep-oped"
        ],
        "rationale": "Electoral pluralism re-read directly; institutional reforms corroborated in a bylined indexed article.",
        "remainingGap": "Prior detailed Democracy page is 404; preserve retrieval distinction."
      },
      {
        "axis": "pod",
        "status": "prior_broad_basis_not_freshly_recertified",
        "claimIds": [
          "stein-pod-war",
          "stein-pod-mirror"
        ],
        "rationale": "Fresh primary letter confirms criminal-justice direction; broad civil-liberty details survive only in prior read and unauthenticated mirror.",
        "remainingGap": "An independently retrievable own dated broad text would remove the provenance gap."
      },
      {
        "axis": "dip",
        "status": "existing_substantively_supported",
        "claimIds": [
          "stein-dip"
        ],
        "rationale": "Fresh own programme or signed letter substantively supports the broad construct.",
        "remainingGap": ""
      },
      {
        "axis": "eco",
        "status": "existing_substantively_supported",
        "claimIds": [
          "stein-eco"
        ],
        "rationale": "Fresh own programme or signed letter substantively supports the broad construct.",
        "remainingGap": ""
      },
      {
        "axis": "mor",
        "status": "existing_substantively_supported",
        "claimIds": [
          "stein-mor-lgbt",
          "stein-mor-abortion"
        ],
        "rationale": "Own dated commitments jointly span gender, sexuality, family inclusion and reproductive autonomy.",
        "remainingGap": ""
      },
      {
        "axis": "imi",
        "status": "new_broad_candidate_with_indexed_component",
        "claimIds": [
          "stein-imi-vote411",
          "stein-imi-email"
        ],
        "rationale": "Broad migration policy plus explicit immigrant-diversity account.",
        "remainingGap": "Index-only cultural component is a real limitation; no forced sixth-axis certification."
      },
      {
        "axis": "int",
        "status": "held_pending_primary_provenance",
        "claimIds": [
          "stein-int-lead"
        ],
        "rationale": "Rich copied-platform lead, not yet independently authenticated as the exact own 2024 text.",
        "remainingGap": ""
      },
      {
        "axis": "con",
        "status": "held_pending_primary_provenance",
        "claimIds": [
          "stein-con-lead"
        ],
        "rationale": "Rich copied-platform lead, not yet independently authenticated as the exact own 2024 text.",
        "remainingGap": ""
      },
      {
        "axis": "tec",
        "status": "held_pending_primary_provenance",
        "claimIds": [
          "stein-tec-lead"
        ],
        "rationale": "Rich copied-platform lead, not yet independently authenticated as the exact own 2024 text.",
        "remainingGap": ""
      },
      {
        "axis": "est",
        "status": "held_unknown",
        "claimIds": [],
        "rationale": "Tribal sovereignty or federated utility structure in the mirror cannot establish general territorial constitutional authority.",
        "remainingGap": ""
      },
      {
        "axis": "com",
        "status": "held_unknown",
        "claimIds": [],
        "rationale": "Fair-trade slogan and fossil-export restrictions do not determine the whole protection/integration axis.",
        "remainingGap": ""
      },
      {
        "axis": "rel",
        "status": "held_unknown",
        "claimIds": [],
        "rationale": "LGBTQ religious-exemption limits and native religious freedoms do not provide a general institutional church-state prescription; private identity excluded.",
        "remainingGap": ""
      }
    ],
    "retrievalFailures": [
      {
        "url": "https://www.jillstein2024.com/platform",
        "result": "404; no source body read"
      },
      {
        "url": "https://www.jillstein2024.com/democracy",
        "result": "404; prior source not re-opened"
      },
      {
        "url": "https://www.politicalemails.org/messages/1451324",
        "result": "web InternalError; ordinary HTTP 403; only public index body used"
      },
      {
        "url": "https://www.gp.org/jill_stein_why_you_should_vote_green",
        "result": "web timeout/InternalError; ordinary HTTP 403; only public index body used"
      }
    ],
    "gaps": [
      "No fresh six-axis certification: the POD reread/provenance gap and indexed IMI component must remain explicit.",
      "Mirror text is a discovery lead, not automatic personal adoption of every Green Party position.",
      "No 2016 programme, private religion, later activity or scores imported."
    ],
    "researchScope": "Own 2024 campaign statements; later activity retained only as prior identity context. No Green Party platform is assigned wholesale to the individual.",
    "priorFullHandoffRecord": {
      "id": "jill-stein",
      "name": "Jill Stein",
      "category": "public-figure",
      "period": "Declarações próprias de campanha2024; atividade reportada18/08/2026",
      "documentedAxes": [
        "rep",
        "pod",
        "dip",
        "eco",
        "mor"
      ],
      "documentedAxisCount": 5,
      "metadataEligible": false,
      "humanWholeReviewed": false,
      "minMissingAxesToSix": 1,
      "missingAxes": [
        "est",
        "imi",
        "int",
        "con",
        "com",
        "rel",
        "tec"
      ],
      "selectionRationale": "Cinco alegações próprias de campanha2024, com várias fontes/ressalvas já preservadas. Revisar adesão pessoal, amplitude de cada proposta e limites de aplicação; o sexto só pode vir de prescrição ampla efetivamente localizada, não plataforma genérica atribuída automaticamente.",
      "sourceUrlsForResearch": [
        "https://vigarchive.sos.ca.gov/2024/primary/candidates/president/president-green-cand-statements.htm",
        "https://www.vote411.org/node/15061",
        "https://www.gp.org/we_do_not_consent_to_war",
        "https://independentpoliticalreport.com/2026/08/former-green-nominee-jill-stein-ordered-to-appear-in-person-in-missouri-misdemeanor-case/",
        "https://www.jillstein2024.com/democracy",
        "https://www.politicalemails.org/messages/1444477",
        "https://politicalemails.org/messages/1606639"
      ],
      "knownSourceNotes": [
        {
          "title": "Jill Stein — declaração própria no guia oficial da Califórnia2024",
          "url": "https://vigarchive.sos.ca.gov/2024/primary/candidates/president/president-green-cand-statements.htm",
          "note": "Cabeçalho5, declaração18–29 e atribuição41 efetivamente lidos; edição primárias05/03/2024, dia de submissão não indicado."
        },
        {
          "title": "Jill Stein — respostas próprias VOTE411, edição eleitoral2024",
          "url": "https://www.vote411.org/node/15061",
          "note": "Identificação52–58 e respostas do candidato80–109 efetivamente lidas. Edição vinculada à campanha2024, submissão não datada."
        },
        {
          "title": "Jill Stein — We Do Not Consent to War,04/10/2024",
          "url": "https://www.gp.org/we_do_not_consent_to_war",
          "note": "Carta própria17–40 efetivamente lida, assinatura nominalJill40 e publicação04/10/2024; não confundir com textos de terceiros no partido."
        },
        {
          "title": "Independent Political Report — atividade de Jill Stein,21/08/2026",
          "url": "https://independentpoliticalreport.com/2026/08/former-green-nominee-jill-stein-ordered-to-appear-in-person-in-missouri-misdemeanor-case/",
          "note": "Data11/corpo15–24 efetivamente lidos: reação própria18/08/2026 reportada; identidade apenas, sem certificar presença futura em audiência."
        },
        {
          "title": "Jill Stein — Democracy, programa pessoal de campanha2024",
          "url": "https://www.jillstein2024.com/democracy",
          "note": "Corpo15–56 e rodapé de pagamento80 efetivamente lidos antes de posterior404; página própria de campanha2024, publicação sem dia indicado. Nova reabertura falhou. Sem renovação em2026."
        },
        {
          "title": "Jill Stein — compromisso LGBTQIA, mensagem própria05/06/2024",
          "url": "https://www.politicalemails.org/messages/1444477",
          "note": "Reprodução nominal de email próprio: cabeçalho24–29, corpo40–60 e assinatura/rodapé61–64 efetivamente lidos. Fonte externa preserva remetente e campanha pagadora; não autenticação criptográfica ou inspeção da imagem. Alegações empíricas excluídas."
        },
        {
          "title": "Jill Stein — autonomia reprodutiva, mensagem própria19/10/2024",
          "url": "https://politicalemails.org/messages/1606639",
          "note": "Reprodução nominal de email próprio: cabeçalho24–29, corpo40–72 e assinatura/rodapé73–76 efetivamente lidos. Propostas66/69 distintas de alegações históricas/estatísticas não certificadas. Links retirados pelo arquivo."
        }
      ],
      "existingAxisAudit": [
        {
          "axis": "rep",
          "scope": "Prior editorial coding only; not freshly read or recertified for this handoff",
          "coding": {
            "axis": "rep",
            "position": "moderate-first",
            "confidence": "medium",
            "claims": [
              {
                "sourceTitle": "Jill Stein — declaração própria no guia oficial da Califórnia2024",
                "locator": "Texto linhas18–29; atribuição de submissão própria41",
                "statement": "Defende escolha eleitoral, direitos e autoridade popular.",
                "basis": "declaration",
                "publishedDate": "Guia de primárias2024-03-05; submissão não datada",
                "accessedDate": "2026-10-08"
              },
              {
                "sourceTitle": "Jill Stein — Democracy, programa pessoal de campanha2024",
                "locator": "Democracy2024: corpo21–38; contrapontos48–54.",
                "statement": "Prescreve representação proporcional, voto popular e poderes gerais de iniciativa, referendo e revogação.",
                "basis": "declaration",
                "publishedDate": "Página própria de campanha2024; publicação sem dia indicado",
                "accessedDate": "2026-10-08"
              }
            ],
            "rationale": "Representação democrática.",
            "uncertainty": "Programa de autoridade popular, não execução eleitoral. Remodela tribunais48–50 e limita financiamento/lobby51–54; não democracia direta irrestrita. Página atual retornou404 após leitura efetiva anterior.",
            "relatedQuestionIds": [
              "representacao_07",
              "representacao_15"
            ],
            "reviewedOn": "2026-10-08",
            "version": "editorial-ordinal-v1",
            "value": 60,
            "range": [
              55,
              70
            ]
          },
          "axisEvidence": {
            "sourceTitles": [
              "Jill Stein — declaração própria no guia oficial da Califórnia2024",
              "Jill Stein — Democracy, programa pessoal de campanha2024"
            ],
            "rationale": "Representação democrática. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Programa de autoridade popular, não execução eleitoral. Remodela tribunais48–50 e limita financiamento/lobby51–54; não democracia direta irrestrita. Página atual retornou404 após leitura efetiva anterior."
          },
          "evidence": "medium"
        },
        {
          "axis": "pod",
          "scope": "Prior editorial coding only; not freshly read or recertified for this handoff",
          "coding": {
            "axis": "pod",
            "position": "moderate-second",
            "confidence": "medium",
            "claims": [
              {
                "sourceTitle": "Jill Stein — Democracy, programa pessoal de campanha2024",
                "locator": "Democracy2024: liberdade pública40–42; limites51–54.",
                "statement": "Opõe censura estatal e empresarial e protege imprensa, informação pública e denunciantes.",
                "basis": "declaration",
                "publishedDate": "Página própria de campanha2024; publicação sem dia indicado",
                "accessedDate": "2026-10-08"
              },
              {
                "sourceTitle": "Jill Stein — We Do Not Consent to War,04/10/2024",
                "locator": "Carta04/10/2024,29; assinatura40.",
                "statement": "Propõe terminar encarceramento em massa e violência policial no programa nacional.",
                "basis": "declaration",
                "publishedDate": "2024-10-04",
                "accessedDate": "2026-10-08"
              }
            ],
            "rationale": "Prioriza liberdades públicas de expressão e fiscalização e limita coerção penal geral.",
            "uncertainty": "VOTE41195–96 mantém proibição de armas de assalto, verificações, espera e restrições preventivas; Democracy51–54 restringe lobby/financiamento. Não liberdade irrestrita, ausência de polícia ou execução comprovada.",
            "reviewedOn": "2026-10-08",
            "version": "editorial-ordinal-v1",
            "value": 40,
            "range": [
              30,
              45
            ]
          },
          "axisEvidence": {
            "sourceTitles": [
              "Jill Stein — Democracy, programa pessoal de campanha2024",
              "Jill Stein — We Do Not Consent to War,04/10/2024"
            ],
            "rationale": "Prioriza liberdades públicas de expressão e fiscalização e limita coerção penal geral. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: VOTE41195–96 mantém proibição de armas de assalto, verificações, espera e restrições preventivas; Democracy51–54 restringe lobby/financiamento. Não liberdade irrestrita, ausência de polícia ou execução comprovada."
          },
          "evidence": "medium"
        },
        {
          "axis": "dip",
          "scope": "Prior editorial coding only; not freshly read or recertified for this handoff",
          "coding": {
            "axis": "dip",
            "position": "moderate-second",
            "confidence": "medium",
            "claims": [
              {
                "sourceTitle": "Jill Stein — We Do Not Consent to War,04/10/2024",
                "locator": "Texto linhas22/29–31; assinatura40",
                "statement": "Reduz orçamento militar e substitui militarização por diplomacia.",
                "basis": "declaration",
                "publishedDate": "2024-10-04",
                "accessedDate": "2026-10-08"
              }
            ],
            "rationale": "Desmilitarização geral.",
            "uncertainty": "Embargo de armas condicional21; não desarmamento completo.",
            "relatedQuestionIds": [
              "diplomacia_01",
              "diplomacia_02"
            ],
            "reviewedOn": "2026-10-08",
            "version": "editorial-ordinal-v1",
            "value": 40,
            "range": [
              30,
              45
            ]
          },
          "axisEvidence": {
            "sourceTitles": [
              "Jill Stein — We Do Not Consent to War,04/10/2024"
            ],
            "rationale": "Desmilitarização geral. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Embargo de armas condicional21; não desarmamento completo."
          },
          "evidence": "medium"
        },
        {
          "axis": "eco",
          "scope": "Prior editorial coding only; not freshly read or recertified for this handoff",
          "coding": {
            "axis": "eco",
            "position": "moderate-first",
            "confidence": "medium",
            "claims": [
              {
                "sourceTitle": "Jill Stein — respostas próprias VOTE411, edição eleitoral2024",
                "locator": "Texto linhas87–89/106–109",
                "statement": "Propõe propriedade pública de saúde, indústria farmacêutica e rede energética nacional.",
                "basis": "declaration",
                "publishedDate": "Edição eleitoral presidencial2024; submissão não datada",
                "accessedDate": "2026-10-08"
              }
            ],
            "rationale": "Participação pública entre setores.",
            "uncertainty": "Não maioria pública nacional; demais negócios privados não abolidos.",
            "relatedQuestionIds": [
              "economia_03",
              "economia_04"
            ],
            "reviewedOn": "2026-10-08",
            "version": "editorial-ordinal-v1",
            "value": 60,
            "range": [
              55,
              70
            ]
          },
          "axisEvidence": {
            "sourceTitles": [
              "Jill Stein — respostas próprias VOTE411, edição eleitoral2024"
            ],
            "rationale": "Participação pública entre setores. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não maioria pública nacional; demais negócios privados não abolidos."
          },
          "evidence": "medium"
        },
        {
          "axis": "mor",
          "scope": "Prior editorial coding only; not freshly read or recertified for this handoff",
          "coding": {
            "axis": "mor",
            "position": "moderate-first",
            "confidence": "medium",
            "claims": [
              {
                "sourceTitle": "Jill Stein — compromisso LGBTQIA, mensagem própria05/06/2024",
                "locator": "Email05/06/2024,47–51/56–60; remetente24–29.",
                "statement": "Propõe proteção federal de direitos LGBTQIA, cuidado afirmativo, inclusão familiar e educação contra exclusão sexual e de gênero.",
                "basis": "declaration",
                "publishedDate": "2024-06-05",
                "accessedDate": "2026-10-08"
              },
              {
                "sourceTitle": "Jill Stein — autonomia reprodutiva, mensagem própria19/10/2024",
                "locator": "Email19/10/2024,66–70; assinatura72/rodapé73–76.",
                "statement": "Afirma autonomia reprodutiva e aborto gratuito como direito pessoal a ser garantido nacionalmente.",
                "basis": "declaration",
                "publishedDate": "2024-10-19",
                "accessedDate": "2026-10-08"
              }
            ],
            "rationale": "Direção progressista entre sexualidade, identidade de gênero, família e autonomia reprodutiva.",
            "uncertainty": "Compromissos declarados em emails nominais de campanha, não leis executadas. Não inferir cada dispositivo dos projetos citados por nome, nem política em2026 ou rejeição de toda tradição. Estatísticas e acusações dos emails excluídas.",
            "reviewedOn": "2026-10-08",
            "version": "editorial-ordinal-v1",
            "value": 60,
            "range": [
              55,
              70
            ]
          },
          "axisEvidence": {
            "sourceTitles": [
              "Jill Stein — compromisso LGBTQIA, mensagem própria05/06/2024",
              "Jill Stein — autonomia reprodutiva, mensagem própria19/10/2024"
            ],
            "rationale": "Direção progressista entre sexualidade, identidade de gênero, família e autonomia reprodutiva. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Compromissos declarados em emails nominais de campanha, não leis executadas. Não inferir cada dispositivo dos projetos citados por nome, nem política em2026 ou rejeição de toda tradição. Estatísticas e acusações dos emails excluídas."
          },
          "evidence": "medium"
        }
      ],
      "priorWholeRecord": {
        "id": "jill-stein",
        "name": "Jill Stein",
        "aliases": [
          "Jill Ellen Stein"
        ],
        "kind": "person",
        "category": "public-figure",
        "period": "Declarações próprias de campanha2024; atividade reportada18/08/2026",
        "sources": [
          {
            "title": "Jill Stein — declaração própria no guia oficial da Califórnia2024",
            "url": "https://vigarchive.sos.ca.gov/2024/primary/candidates/president/president-green-cand-statements.htm",
            "note": "Cabeçalho5, declaração18–29 e atribuição41 efetivamente lidos; edição primárias05/03/2024, dia de submissão não indicado."
          },
          {
            "title": "Jill Stein — respostas próprias VOTE411, edição eleitoral2024",
            "url": "https://www.vote411.org/node/15061",
            "note": "Identificação52–58 e respostas do candidato80–109 efetivamente lidas. Edição vinculada à campanha2024, submissão não datada."
          },
          {
            "title": "Jill Stein — We Do Not Consent to War,04/10/2024",
            "url": "https://www.gp.org/we_do_not_consent_to_war",
            "note": "Carta própria17–40 efetivamente lida, assinatura nominalJill40 e publicação04/10/2024; não confundir com textos de terceiros no partido."
          },
          {
            "title": "Independent Political Report — atividade de Jill Stein,21/08/2026",
            "url": "https://independentpoliticalreport.com/2026/08/former-green-nominee-jill-stein-ordered-to-appear-in-person-in-missouri-misdemeanor-case/",
            "note": "Data11/corpo15–24 efetivamente lidos: reação própria18/08/2026 reportada; identidade apenas, sem certificar presença futura em audiência."
          },
          {
            "title": "Jill Stein — Democracy, programa pessoal de campanha2024",
            "url": "https://www.jillstein2024.com/democracy",
            "note": "Corpo15–56 e rodapé de pagamento80 efetivamente lidos antes de posterior404; página própria de campanha2024, publicação sem dia indicado. Nova reabertura falhou. Sem renovação em2026."
          },
          {
            "title": "Jill Stein — compromisso LGBTQIA, mensagem própria05/06/2024",
            "url": "https://www.politicalemails.org/messages/1444477",
            "note": "Reprodução nominal de email próprio: cabeçalho24–29, corpo40–60 e assinatura/rodapé61–64 efetivamente lidos. Fonte externa preserva remetente e campanha pagadora; não autenticação criptográfica ou inspeção da imagem. Alegações empíricas excluídas."
          },
          {
            "title": "Jill Stein — autonomia reprodutiva, mensagem própria19/10/2024",
            "url": "https://politicalemails.org/messages/1606639",
            "note": "Reprodução nominal de email próprio: cabeçalho24–29, corpo40–72 e assinatura/rodapé73–76 efetivamente lidos. Propostas66/69 distintas de alegações históricas/estatísticas não certificadas. Links retirados pelo arquivo."
          }
        ],
        "caveats": "Compromissos próprios de campanha2024, não execução ou renovação em2026. Controles de aluguel e salário não estabelecem a regra geral de alocação econômica. Fontes, códigos anteriores e proposta retirada completos preservados no arquivo. Página pessoal lida antes de posterior404; emails reproduzidos nominalmente por arquivo externo sem autenticação criptográfica.",
        "rationale": "Defende participação popular, liberdades civis, igualdade sexual e de gênero, diplomacia e expansão pública na economia.",
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
          "rel": 50,
          "mor": 60,
          "tec": 50
        },
        "evidence": {
          "rep": "medium",
          "dip": "medium",
          "eco": "medium",
          "pod": "medium",
          "mor": "medium"
        },
        "axisEvidence": {
          "rep": {
            "sourceTitles": [
              "Jill Stein — declaração própria no guia oficial da Califórnia2024",
              "Jill Stein — Democracy, programa pessoal de campanha2024"
            ],
            "rationale": "Representação democrática. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Programa de autoridade popular, não execução eleitoral. Remodela tribunais48–50 e limita financiamento/lobby51–54; não democracia direta irrestrita. Página atual retornou404 após leitura efetiva anterior."
          },
          "dip": {
            "sourceTitles": [
              "Jill Stein — We Do Not Consent to War,04/10/2024"
            ],
            "rationale": "Desmilitarização geral. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Embargo de armas condicional21; não desarmamento completo."
          },
          "eco": {
            "sourceTitles": [
              "Jill Stein — respostas próprias VOTE411, edição eleitoral2024"
            ],
            "rationale": "Participação pública entre setores. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não maioria pública nacional; demais negócios privados não abolidos."
          },
          "pod": {
            "sourceTitles": [
              "Jill Stein — Democracy, programa pessoal de campanha2024",
              "Jill Stein — We Do Not Consent to War,04/10/2024"
            ],
            "rationale": "Prioriza liberdades públicas de expressão e fiscalização e limita coerção penal geral. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: VOTE41195–96 mantém proibição de armas de assalto, verificações, espera e restrições preventivas; Democracy51–54 restringe lobby/financiamento. Não liberdade irrestrita, ausência de polícia ou execução comprovada."
          },
          "mor": {
            "sourceTitles": [
              "Jill Stein — compromisso LGBTQIA, mensagem própria05/06/2024",
              "Jill Stein — autonomia reprodutiva, mensagem própria19/10/2024"
            ],
            "rationale": "Direção progressista entre sexualidade, identidade de gênero, família e autonomia reprodutiva. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Compromissos declarados em emails nominais de campanha, não leis executadas. Não inferir cada dispositivo dos projetos citados por nome, nem política em2026 ou rejeição de toda tradição. Estatísticas e acusações dos emails excluídas."
          }
        },
        "coding": {
          "rep": {
            "axis": "rep",
            "position": "moderate-first",
            "confidence": "medium",
            "claims": [
              {
                "sourceTitle": "Jill Stein — declaração própria no guia oficial da Califórnia2024",
                "locator": "Texto linhas18–29; atribuição de submissão própria41",
                "statement": "Defende escolha eleitoral, direitos e autoridade popular.",
                "basis": "declaration",
                "publishedDate": "Guia de primárias2024-03-05; submissão não datada",
                "accessedDate": "2026-10-08"
              },
              {
                "sourceTitle": "Jill Stein — Democracy, programa pessoal de campanha2024",
                "locator": "Democracy2024: corpo21–38; contrapontos48–54.",
                "statement": "Prescreve representação proporcional, voto popular e poderes gerais de iniciativa, referendo e revogação.",
                "basis": "declaration",
                "publishedDate": "Página própria de campanha2024; publicação sem dia indicado",
                "accessedDate": "2026-10-08"
              }
            ],
            "rationale": "Representação democrática.",
            "uncertainty": "Programa de autoridade popular, não execução eleitoral. Remodela tribunais48–50 e limita financiamento/lobby51–54; não democracia direta irrestrita. Página atual retornou404 após leitura efetiva anterior.",
            "relatedQuestionIds": [
              "representacao_07",
              "representacao_15"
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
            "position": "moderate-second",
            "confidence": "medium",
            "claims": [
              {
                "sourceTitle": "Jill Stein — We Do Not Consent to War,04/10/2024",
                "locator": "Texto linhas22/29–31; assinatura40",
                "statement": "Reduz orçamento militar e substitui militarização por diplomacia.",
                "basis": "declaration",
                "publishedDate": "2024-10-04",
                "accessedDate": "2026-10-08"
              }
            ],
            "rationale": "Desmilitarização geral.",
            "uncertainty": "Embargo de armas condicional21; não desarmamento completo.",
            "relatedQuestionIds": [
              "diplomacia_01",
              "diplomacia_02"
            ],
            "reviewedOn": "2026-10-08",
            "version": "editorial-ordinal-v1",
            "value": 40,
            "range": [
              30,
              45
            ]
          },
          "eco": {
            "axis": "eco",
            "position": "moderate-first",
            "confidence": "medium",
            "claims": [
              {
                "sourceTitle": "Jill Stein — respostas próprias VOTE411, edição eleitoral2024",
                "locator": "Texto linhas87–89/106–109",
                "statement": "Propõe propriedade pública de saúde, indústria farmacêutica e rede energética nacional.",
                "basis": "declaration",
                "publishedDate": "Edição eleitoral presidencial2024; submissão não datada",
                "accessedDate": "2026-10-08"
              }
            ],
            "rationale": "Participação pública entre setores.",
            "uncertainty": "Não maioria pública nacional; demais negócios privados não abolidos.",
            "relatedQuestionIds": [
              "economia_03",
              "economia_04"
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
            "position": "moderate-second",
            "confidence": "medium",
            "claims": [
              {
                "sourceTitle": "Jill Stein — Democracy, programa pessoal de campanha2024",
                "locator": "Democracy2024: liberdade pública40–42; limites51–54.",
                "statement": "Opõe censura estatal e empresarial e protege imprensa, informação pública e denunciantes.",
                "basis": "declaration",
                "publishedDate": "Página própria de campanha2024; publicação sem dia indicado",
                "accessedDate": "2026-10-08"
              },
              {
                "sourceTitle": "Jill Stein — We Do Not Consent to War,04/10/2024",
                "locator": "Carta04/10/2024,29; assinatura40.",
                "statement": "Propõe terminar encarceramento em massa e violência policial no programa nacional.",
                "basis": "declaration",
                "publishedDate": "2024-10-04",
                "accessedDate": "2026-10-08"
              }
            ],
            "rationale": "Prioriza liberdades públicas de expressão e fiscalização e limita coerção penal geral.",
            "uncertainty": "VOTE41195–96 mantém proibição de armas de assalto, verificações, espera e restrições preventivas; Democracy51–54 restringe lobby/financiamento. Não liberdade irrestrita, ausência de polícia ou execução comprovada.",
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
                "sourceTitle": "Jill Stein — compromisso LGBTQIA, mensagem própria05/06/2024",
                "locator": "Email05/06/2024,47–51/56–60; remetente24–29.",
                "statement": "Propõe proteção federal de direitos LGBTQIA, cuidado afirmativo, inclusão familiar e educação contra exclusão sexual e de gênero.",
                "basis": "declaration",
                "publishedDate": "2024-06-05",
                "accessedDate": "2026-10-08"
              },
              {
                "sourceTitle": "Jill Stein — autonomia reprodutiva, mensagem própria19/10/2024",
                "locator": "Email19/10/2024,66–70; assinatura72/rodapé73–76.",
                "statement": "Afirma autonomia reprodutiva e aborto gratuito como direito pessoal a ser garantido nacionalmente.",
                "basis": "declaration",
                "publishedDate": "2024-10-19",
                "accessedDate": "2026-10-08"
              }
            ],
            "rationale": "Direção progressista entre sexualidade, identidade de gênero, família e autonomia reprodutiva.",
            "uncertainty": "Compromissos declarados em emails nominais de campanha, não leis executadas. Não inferir cada dispositivo dos projetos citados por nome, nem política em2026 ou rejeição de toda tradição. Estatísticas e acusações dos emails excluídas.",
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
      "priorWholeRecordSha256": "d82a880d12c4ba9b1d81ed25f7871911b4efebe0992012843dfe50a30e17c935"
    },
    "scoresAssigned": false,
    "repositoryEdited": false
  },
  {
    "id": "jeannette-jara",
    "name": "Jeannette Jara",
    "originalPeriod": "Lineamientos próprios endossados, agosto2025; identidade/atividade01/09/2026",
    "priorWholeRecordSha256": "7666bff70a73c44b990cab8c2f916fd97b2204b48cf4a4255d452aade2a77c56",
    "priorDocumentedAxes": [
      "rep",
      "pod",
      "com",
      "tec"
    ],
    "sources": [
      {
        "id": "jara-62",
        "title": "Jeannette Jara — Un Chile que cumple, agosto2025",
        "url": "https://centrocompetencia.com/wp-content/uploads/2025/09/Programa_Jeannette_Jara_2025.pdf",
        "publishedDate": "2025-08, explicitly on cover; no exact production day certified",
        "accessedDate": "2026-10-08",
        "retrievalMode": "mirror",
        "actualReadScope": "62-page PDF: cover; signed pp. 3–4 and introductory pp. 6–7; pp. 8–18; p. 19 trade-policy section (earlier financing continuation only partially read); pp. 20–42; pp. 50–52, 59 and 61. Text extracted by pdftotext -layout from downloaded PDF. Pages 43 and 49 appeared only partially in a truncated output and are not relied on. Remaining pages were not substantively read.",
        "note": "Spanish campaign programme with signed personal adoption, hosted by CentroCompetencia. Publication-path 2025/09 is not treated as programme month. Reads are programme prescriptions, not performance statistics. No visual/layout inspection claimed.",
        "sha256": "c312f4c0656b379609bffcfd162d308bd4f637554d5e26770e27cd14bee3986e"
      },
      {
        "id": "jara-party",
        "title": "Lineamientos Programáticos – Jeannette Jara 2025 – PC CHILE",
        "url": "https://pcchile.cl/2025/08/18/lineamientos-programaticos-jeannette-jara-2025/",
        "publishedDate": "2025-08-18",
        "accessedDate": "2026-10-08",
        "retrievalMode": "direct",
        "actualReadScope": "Article title/date and complete substantive body, web lines 21–32; programme link 18 followed.",
        "note": "Party publication attributes the lineamientos to Jara and says they open a continuing consultation. Does not prove unchanged later policy."
      },
      {
        "id": "jara-74",
        "title": "Un Chile que cumple — Lineamientos Programáticos, Jeannette Jara Román, agosto 2025 (PC Chile 74-page layout)",
        "url": "https://pcchile.cl/wp-content/uploads/2025/08/Lineamientos-programa%CC%81ticos-J.-jara.pdf",
        "publishedDate": "2025-08 on title; linked by article dated 2025-08-18",
        "accessedDate": "2026-10-08",
        "retrievalMode": "direct",
        "actualReadScope": "PDF web text lines 0–372 (physical pp. 1–12, last page only opening); local extracted targeted paragraphs on physical pp. 14, 63, 71–73 concerning lithium, public real estate and public education. No full-document equivalence comparison claimed.",
        "note": "Different 74-page layout from the 62-page supplied edition. Relevant personally signed opening, strategic coordination and public-provider clauses were compared; no blanket identity or exact pagination equivalence inferred.",
        "sha256": "401d189ba82a8c40076e9487af2a92983614cb4cb74fdabcc2370abd59c092c4"
      }
    ],
    "claims": [
      {
        "id": "jara-rep",
        "axis": "rep",
        "sourceTitle": "Jeannette Jara — Un Chile que cumple, agosto2025",
        "sourceId": "jara-62",
        "url": "https://centrocompetencia.com/wp-content/uploads/2025/09/Programa_Jeannette_Jara_2025.pdf",
        "locator": "pp. 3–4 signed presentation; pp. 6–7, especially dialogue with those who think differently",
        "statement": "Rejects authoritarian personalism; commits to plural dialogue, citizen participation and democratic government.",
        "locatedEvidenceType": "bounded paraphrase",
        "basis": "declaration",
        "publishedDate": "2025-08, explicitly on cover; no exact production day certified",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "The signed account makes participation and legitimate political disagreement a general governing principle rather than an isolated consultation.",
        "counterEvidence": "No detailed electoral constitution or unrestricted direct-democracy mechanism is supplied.",
        "uncertainty": "Programme commitment only; the exact institutional intensity is editorial.",
        "retrievalMode": "mirror",
        "actualReadScope": "62-page PDF: cover; signed pp. 3–4 and introductory pp. 6–7; pp. 8–18; p. 19 trade-policy section (earlier financing continuation only partially read); pp. 20–42; pp. 50–52, 59 and 61. Text extracted by pdftotext -layout from downloaded PDF. Pages 43 and 49 appeared only partially in a truncated output and are not relied on. Remaining pages were not substantively read.",
        "status": "existing_substantively_supported"
      },
      {
        "id": "jara-pod",
        "axis": "pod",
        "sourceTitle": "Jeannette Jara — Un Chile que cumple, agosto2025",
        "sourceId": "jara-62",
        "url": "https://centrocompetencia.com/wp-content/uploads/2025/09/Programa_Jeannette_Jara_2025.pdf",
        "locator": "pp. 24–32, security programme; measures 63–65, 70–79, 82–98",
        "statement": "Expands biometric surveillance, armed border enforcement, financial investigation, police capacity and prisons.",
        "locatedEvidenceType": "bounded paraphrase",
        "basis": "declaration",
        "publishedDate": "2025-08, explicitly on cover; no exact production day certified",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "This spans several mechanisms of public coercion, personal-data access and territorial policing; much broader than an agency mandate.",
        "counterEvidence": "p. 27 measure 72 binds biometrics to data-protection law; p. 29 measure 82 requires civilian control; pp. 29–34 emphasize reintegration and social prevention.",
        "uncertainty": "Not evidence of indiscriminate surveillance, actual deployment or rejection of civil rights.",
        "retrievalMode": "mirror",
        "actualReadScope": "62-page PDF: cover; signed pp. 3–4 and introductory pp. 6–7; pp. 8–18; p. 19 trade-policy section (earlier financing continuation only partially read); pp. 20–42; pp. 50–52, 59 and 61. Text extracted by pdftotext -layout from downloaded PDF. Pages 43 and 49 appeared only partially in a truncated output and are not relied on. Remaining pages were not substantively read.",
        "status": "existing_substantively_supported"
      },
      {
        "id": "jara-com",
        "axis": "com",
        "sourceTitle": "Jeannette Jara — Un Chile que cumple, agosto2025",
        "sourceId": "jara-62",
        "url": "https://centrocompetencia.com/wp-content/uploads/2025/09/Programa_Jeannette_Jara_2025.pdf",
        "locator": "p. 9 trade agreements; pp. 19–20, Exportaciones y política comercial, measures 48–51",
        "statement": "Expands rules-based trade, existing agreements, export markets and regional economic integration.",
        "locatedEvidenceType": "bounded paraphrase",
        "basis": "declaration",
        "publishedDate": "2025-08, explicitly on cover; no exact production day certified",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "The entire trade-policy section governs international economic integration rather than a tariff exception or single export.",
        "counterEvidence": "Targeted industrial promotion and domestic value-added development remain part of the approach.",
        "uncertainty": "Does not promise universal zero tariffs or prove trade outcomes.",
        "retrievalMode": "mirror",
        "actualReadScope": "62-page PDF: cover; signed pp. 3–4 and introductory pp. 6–7; pp. 8–18; p. 19 trade-policy section (earlier financing continuation only partially read); pp. 20–42; pp. 50–52, 59 and 61. Text extracted by pdftotext -layout from downloaded PDF. Pages 43 and 49 appeared only partially in a truncated output and are not relied on. Remaining pages were not substantively read.",
        "status": "existing_substantively_supported"
      },
      {
        "id": "jara-tec",
        "axis": "tec",
        "sourceTitle": "Jeannette Jara — Un Chile que cumple, agosto2025",
        "sourceId": "jara-62",
        "url": "https://centrocompetencia.com/wp-content/uploads/2025/09/Programa_Jeannette_Jara_2025.pdf",
        "locator": "pp. 11–18 measures 7, 10–18, 26–29; pp. 26–28 measures 70–75; pp. 37–42 measures 112–126",
        "statement": "Uses digital networks, AI, advanced production and telemedicine as cross-sector solutions.",
        "locatedEvidenceType": "bounded paraphrase",
        "basis": "declaration",
        "publishedDate": "2025-08, explicitly on cover; no exact production day certified",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Specific adoption spans infrastructure, industrial processes, administration, security and health; not generic support for research alone.",
        "counterEvidence": "pp. 9–10 retain environmental safeguards; pp. 13–15 protect ecosystems and water; p. 27 personal-data law constrains biometrics.",
        "uncertainty": "Supports qualified technological adoption, not unconditional acceptance of every biomedical or environmental intervention.",
        "retrievalMode": "mirror",
        "actualReadScope": "62-page PDF: cover; signed pp. 3–4 and introductory pp. 6–7; pp. 8–18; p. 19 trade-policy section (earlier financing continuation only partially read); pp. 20–42; pp. 50–52, 59 and 61. Text extracted by pdftotext -layout from downloaded PDF. Pages 43 and 49 appeared only partially in a truncated output and are not relied on. Remaining pages were not substantively read.",
        "status": "existing_substantively_supported"
      },
      {
        "id": "jara-con",
        "axis": "con",
        "sourceTitle": "Jeannette Jara — Un Chile que cumple, agosto2025",
        "sourceId": "jara-62",
        "url": "https://centrocompetencia.com/wp-content/uploads/2025/09/Programa_Jeannette_Jara_2025.pdf",
        "locator": "pp. 8–10 general economic framework, measures 1–5; pp. 12–18 sector strategy and Mipyme/cooperative coordination; pp. 22–23 measures 58–60; pp. 37–38 measures 113–115",
        "statement": "Directs cross-sector investment priorities through public-private planning, regulation and coordinated industrial development.",
        "locatedEvidenceType": "bounded paraphrase",
        "basis": "declaration",
        "publishedDate": "2025-08, explicitly on cover; no exact production day certified",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "General allocation framework precedes and connects projects across production, infrastructure and employment. Sector plans and price/procurement interventions corroborate it; the proposed presidential office alone would not suffice.",
        "counterEvidence": "p. 9 treats private investment decisions and market creation as indispensable; p. 10 streamlines permits; p. 12 creates storage-market conditions; p. 18 supports voluntary industry innovation corporations.",
        "uncertainty": "Mixed coordination is clear. Do not infer comprehensive command planning, suppression of prices or a measured dominant share.",
        "retrievalMode": "mirror",
        "actualReadScope": "62-page PDF: cover; signed pp. 3–4 and introductory pp. 6–7; pp. 8–18; p. 19 trade-policy section (earlier financing continuation only partially read); pp. 20–42; pp. 50–52, 59 and 61. Text extracted by pdftotext -layout from downloaded PDF. Pages 43 and 49 appeared only partially in a truncated output and are not relied on. Remaining pages were not substantively read.",
        "status": "candidate_for_independent_review"
      },
      {
        "id": "jara-eco",
        "axis": "eco",
        "sourceTitle": "Jeannette Jara — Un Chile que cumple, agosto2025",
        "sourceId": "jara-62",
        "url": "https://centrocompetencia.com/wp-content/uploads/2025/09/Programa_Jeannette_Jara_2025.pdf",
        "locator": "p. 11 measure 9; p. 13 copper/lithium; p. 52 measure 150; p. 59 measures 166–167; p. 61 measures 173–174",
        "statement": "Expands state rail/mining enterprises, a public real-estate operator and public education provision.",
        "locatedEvidenceType": "bounded paraphrase",
        "basis": "declaration",
        "publishedDate": "2025-08, explicitly on cover; no exact production day certified",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Multiple productive and service domains explicitly involve public operators or public-provider capacity. The public real-estate company and named state enterprises avoid conflating public financing with ownership.",
        "counterEvidence": "pp. 8–12 preserve private enterprise and concessions; p. 37 integrates private clinics; p. 51 promotes private homeownership and bank participation; lithium uses partnerships.",
        "uncertainty": "Evidence establishes a broad mixed-economy public role, not majority public ownership or nationalization of the entire economy. Some institutional names rely on the programme’s own attribution; no current ownership register audited.",
        "retrievalMode": "mirror",
        "actualReadScope": "62-page PDF: cover; signed pp. 3–4 and introductory pp. 6–7; pp. 8–18; p. 19 trade-policy section (earlier financing continuation only partially read); pp. 20–42; pp. 50–52, 59 and 61. Text extracted by pdftotext -layout from downloaded PDF. Pages 43 and 49 appeared only partially in a truncated output and are not relied on. Remaining pages were not substantively read.",
        "status": "candidate_for_independent_review"
      },
      {
        "id": "jara-eco-direct-check",
        "axis": "eco",
        "sourceTitle": "Un Chile que cumple — Lineamientos Programáticos, Jeannette Jara Román, agosto 2025 (PC Chile 74-page layout)",
        "sourceId": "jara-74",
        "url": "https://pcchile.cl/wp-content/uploads/2025/08/Lineamientos-programa%CC%81ticos-J.-jara.pdf",
        "locator": "physical p. 11 measure 9; p. 14 lithium paragraph; p. 63 measure 150; pp. 71–73 education paragraphs",
        "statement": "The party-hosted layout repeats public rail, lithium, real-estate and education commitments.",
        "locatedEvidenceType": "bounded paraphrase",
        "basis": "declaration",
        "publishedDate": "2025-08 on title; linked by article dated 2025-08-18",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Corroborates the specific ownership/provision clauses in the supplied 62-page edition.",
        "counterEvidence": "The same paragraphs retain public-private partnerships and participation.",
        "uncertainty": "Only specified passages collated, not the whole 74-page document; do not replace pagination silently.",
        "retrievalMode": "direct",
        "actualReadScope": "PDF web text lines 0–372 (physical pp. 1–12, last page only opening); local extracted targeted paragraphs on physical pp. 14, 63, 71–73 concerning lithium, public real estate and public education. No full-document equivalence comparison claimed.",
        "status": "corroboration_only"
      }
    ],
    "axisReview": [
      {
        "axis": "rep",
        "status": "existing_substantively_supported",
        "claimIds": [
          "jara-rep"
        ],
        "rationale": "Fresh programme read supports the broad construct, subject to listed counterevidence.",
        "remainingGap": ""
      },
      {
        "axis": "pod",
        "status": "existing_substantively_supported",
        "claimIds": [
          "jara-pod"
        ],
        "rationale": "Fresh programme read supports the broad construct, subject to listed counterevidence.",
        "remainingGap": ""
      },
      {
        "axis": "com",
        "status": "existing_substantively_supported",
        "claimIds": [
          "jara-com"
        ],
        "rationale": "Fresh programme read supports the broad construct, subject to listed counterevidence.",
        "remainingGap": ""
      },
      {
        "axis": "tec",
        "status": "existing_substantively_supported",
        "claimIds": [
          "jara-tec"
        ],
        "rationale": "Fresh programme read supports the broad construct, subject to listed counterevidence.",
        "remainingGap": ""
      },
      {
        "axis": "con",
        "status": "new_broad_candidate",
        "claimIds": [
          "jara-con"
        ],
        "rationale": "General framework and cross-sector measures support mixed planning/regulation.",
        "remainingGap": "Independent editor must choose direction/intensity; no numeric recommendation supplied."
      },
      {
        "axis": "eco",
        "status": "new_broad_candidate",
        "claimIds": [
          "jara-eco",
          "jara-eco-direct-check"
        ],
        "rationale": "Explicit public ownership/provision across several fields, with private-market counterevidence.",
        "remainingGap": "Does not quantify public/private dominance."
      },
      {
        "axis": "est",
        "status": "held_unknown",
        "claimIds": [],
        "rationale": "Regional work plans (p. 10), aquaculture delegation to regional ministerial bodies (p. 15), municipal security (p. 26), and regional housing offices (p. 50) concern administration. They do not establish a general constitutional distribution of autonomous territorial power.",
        "remainingGap": ""
      },
      {
        "axis": "imi",
        "status": "held_unknown",
        "claimIds": [],
        "rationale": "Border policing (p. 27) and expulsion of convicted foreigners (p. 31) are security prescriptions, not a general account of cultural integration, migration access or pluralism.",
        "remainingGap": ""
      },
      {
        "axis": "dip",
        "status": "held_unknown",
        "claimIds": [],
        "rationale": "Joint military staff coordination (p. 25) and commercial multilateralism (pp. 19–20) do not establish a general choice between deterrence and diplomatic conflict resolution.",
        "remainingGap": ""
      },
      {
        "axis": "int",
        "status": "held_unknown",
        "claimIds": [],
        "rationale": "Trade partnerships and border enforcement do not establish the exact external-involvement/national-interest construct.",
        "remainingGap": ""
      },
      {
        "axis": "rel",
        "status": "held_unknown",
        "claimIds": [],
        "rationale": "No located prescription on religious authority in public institutions. Party identity, personal belief or silence cannot supply it.",
        "remainingGap": ""
      },
      {
        "axis": "mor",
        "status": "held_unknown",
        "claimIds": [],
        "rationale": "Inclusive forms of love (p. 7), gender-equal labour/care (pp. 21–22), and anti-violence measures (p. 35) support bounded equality commitments. They do not settle a broad, independently defensible customs/traditions programme in this version.",
        "remainingGap": ""
      }
    ],
    "retrievalFailures": [],
    "gaps": [
      "No inference from 2026 identity news to renewal of this programme.",
      "No implementation or empirical headline statistics validated.",
      "Do not use the 74-page file as a silently interchangeable edition. Relevant limited parallels are recorded."
    ],
    "researchScope": "Only the August 2025 Un Chile que cumple lineamientos. No October 2025 platform, primary-election platform, party-label attribution or later implementation is substituted. The 2026 identity-only item is not a source of ideology.",
    "priorFullHandoffRecord": {
      "id": "jeannette-jara",
      "name": "Jeannette Jara",
      "category": "public-figure",
      "period": "Lineamientos próprios endossados, agosto2025; identidade/atividade01/09/2026",
      "documentedAxes": [
        "rep",
        "pod",
        "com",
        "tec"
      ],
      "documentedAxisCount": 4,
      "metadataEligible": false,
      "humanWholeReviewed": false,
      "minMissingAxesToSix": 2,
      "missingAxes": [
        "est",
        "imi",
        "dip",
        "int",
        "eco",
        "con",
        "rel",
        "mor"
      ],
      "selectionRationale": "Quatro eixos em lineamientos explicitamente endossados deagosto2025 e várias fontes. Programa com referente preciso favorece busca normativa além de rótulo partidário; revisar coletivo/endosso e execução não demonstrada.",
      "sourceUrlsForResearch": [
        "https://centrocompetencia.com/wp-content/uploads/2025/09/Programa_Jeannette_Jara_2025.pdf",
        "https://pcchile.cl/2025/08/18/lineamientos-programaticos-jeannette-jara-2025/",
        "https://www.biobiochile.cl/noticias/nacional/chile/2026/09/01/jeannette-jara-celebra-alza-de-la-pgu-y-acusa-a-republicanos-de-celebrar-hoy-lo-que-antes-rechazaron.shtml"
      ],
      "knownSourceNotes": [
        {
          "title": "Jeannette Jara — Un Chile que cumple, agosto2025",
          "url": "https://centrocompetencia.com/wp-content/uploads/2025/09/Programa_Jeannette_Jara_2025.pdf",
          "note": "PDF62p; capa, apresentação assinada e áreas delimitadas lidas; edição agosto2025, sem dia certificado. Escopo exato no relatório."
        },
        {
          "title": "PC Chile — apresentação do programa,18/08/2025",
          "url": "https://pcchile.cl/2025/08/18/lineamientos-programaticos-jeannette-jara-2025/",
          "note": "Cabeçalho21–23 e corpo29–30 lidos: publicação/atribuição apenas."
        },
        {
          "title": "BioBioChile — atividade de Jeannette Jara,01/09/2026",
          "url": "https://www.biobiochile.cl/noticias/nacional/chile/2026/09/01/jeannette-jara-celebra-alza-de-la-pgu-y-acusa-a-republicanos-de-celebrar-hoy-lo-que-antes-rechazaron.shtml",
          "note": "Data103 e corpo136–153 lidos: identidade/atividade apenas; resumo IA134–135 excluído; fotografia de arquivo não certificada."
        }
      ],
      "existingAxisAudit": [
        {
          "axis": "rep",
          "scope": "Prior editorial coding only; not freshly read or recertified for this handoff",
          "coding": {
            "axis": "rep",
            "position": "moderate-first",
            "confidence": "medium",
            "claims": [
              {
                "sourceTitle": "Jeannette Jara — Un Chile que cumple, agosto2025",
                "locator": "Physicalp3–4,26–38; p7,101–115",
                "statement": "Defende participação democrática e diálogo entre posições divergentes contra soluções autoritárias.",
                "basis": "declaration",
                "publishedDate": "Agosto2025 — edição assinada; apresentação18/08/2025",
                "accessedDate": "2026-10-08"
              }
            ],
            "rationale": "Democracia plural declarada.",
            "uncertainty": "Não certifica toda regra eleitoral ou execução.",
            "relatedQuestionIds": [
              "representacao_19",
              "representacao_20"
            ],
            "reviewedOn": "2026-10-08",
            "version": "editorial-ordinal-v1",
            "value": 60,
            "range": [
              55,
              70
            ]
          },
          "axisEvidence": {
            "sourceTitles": [
              "Jeannette Jara — Un Chile que cumple, agosto2025"
            ],
            "rationale": "Democracia plural declarada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não certifica toda regra eleitoral ou execução."
          },
          "evidence": "medium"
        },
        {
          "axis": "pod",
          "scope": "Prior editorial coding only; not freshly read or recertified for this handoff",
          "coding": {
            "axis": "pod",
            "position": "moderate-first",
            "confidence": "medium",
            "claims": [
              {
                "sourceTitle": "Jeannette Jara — Un Chile que cumple, agosto2025",
                "locator": "Physicalp25–30,772–790/823–829/871–890/927–942",
                "statement": "Amplia controle de armas, vigilância biométrica, investigação financeira e prisões.",
                "basis": "declaration",
                "publishedDate": "Agosto2025 — edição assinada; apresentação18/08/2025",
                "accessedDate": "2026-10-08"
              }
            ],
            "rationale": "Coerção estatal de segurança.",
            "uncertainty": "Proteção de dados829, controle civil910 e reinserção922/937 limitam poder.",
            "relatedQuestionIds": [
              "poder_05",
              "poder_09",
              "poder_18"
            ],
            "reviewedOn": "2026-10-08",
            "version": "editorial-ordinal-v1",
            "value": 60,
            "range": [
              55,
              70
            ]
          },
          "axisEvidence": {
            "sourceTitles": [
              "Jeannette Jara — Un Chile que cumple, agosto2025"
            ],
            "rationale": "Coerção estatal de segurança. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Proteção de dados829, controle civil910 e reinserção922/937 limitam poder."
          },
          "evidence": "medium"
        },
        {
          "axis": "com",
          "scope": "Prior editorial coding only; not freshly read or recertified for this handoff",
          "coding": {
            "axis": "com",
            "position": "moderate-second",
            "confidence": "medium",
            "claims": [
              {
                "sourceTitle": "Jeannette Jara — Un Chile que cumple, agosto2025",
                "locator": "Physicalp9,177–182; p19–20,538–596",
                "statement": "Preserva acordos comerciais, amplia mercados e facilita comércio internacional.",
                "basis": "declaration",
                "publishedDate": "Agosto2025 — edição assinada; apresentação18/08/2025",
                "accessedDate": "2026-10-08"
              }
            ],
            "rationale": "Abertura comercial programática.",
            "uncertainty": "Promoção produtiva seletiva562–595; não tarifa zero.",
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
          "axisEvidence": {
            "sourceTitles": [
              "Jeannette Jara — Un Chile que cumple, agosto2025"
            ],
            "rationale": "Abertura comercial programática. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Promoção produtiva seletiva562–595; não tarifa zero."
          },
          "evidence": "medium"
        },
        {
          "axis": "tec",
          "scope": "Prior editorial coding only; not freshly read or recertified for this handoff",
          "coding": {
            "axis": "tec",
            "position": "moderate-first",
            "confidence": "medium",
            "claims": [
              {
                "sourceTitle": "Jeannette Jara — Un Chile que cumple, agosto2025",
                "locator": "Physicalp11–13,248–250/311–327; p27,823–829; p38–39,1177–1183/1229–1241",
                "statement": "Expande conectividade, mineração tecnológica, IA e telemedicina.",
                "basis": "declaration",
                "publishedDate": "Agosto2025 — edição assinada; apresentação18/08/2025",
                "accessedDate": "2026-10-08"
              }
            ],
            "rationale": "Adoção tecnológica em vários setores.",
            "uncertainty": "Proteção ambiental159/341–344 e crise climática106/127; não aceitação irrestrita.",
            "relatedQuestionIds": [
              "tecnologia_01",
              "tecnologia_07",
              "tecnologia_10"
            ],
            "reviewedOn": "2026-10-08",
            "version": "editorial-ordinal-v1",
            "value": 60,
            "range": [
              55,
              70
            ]
          },
          "axisEvidence": {
            "sourceTitles": [
              "Jeannette Jara — Un Chile que cumple, agosto2025"
            ],
            "rationale": "Adoção tecnológica em vários setores. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Proteção ambiental159/341–344 e crise climática106/127; não aceitação irrestrita."
          },
          "evidence": "medium"
        }
      ],
      "priorWholeRecord": {
        "id": "jeannette-jara",
        "name": "Jeannette Jara",
        "aliases": [
          "Jeannette Jara Román",
          "Jeannette Jara Roman"
        ],
        "kind": "person",
        "category": "public-figure",
        "period": "Lineamientos próprios endossados, agosto2025; identidade/atividade01/09/2026",
        "sources": [
          {
            "title": "Jeannette Jara — Un Chile que cumple, agosto2025",
            "url": "https://centrocompetencia.com/wp-content/uploads/2025/09/Programa_Jeannette_Jara_2025.pdf",
            "note": "PDF62p; capa, apresentação assinada e áreas delimitadas lidas; edição agosto2025, sem dia certificado. Escopo exato no relatório."
          },
          {
            "title": "PC Chile — apresentação do programa,18/08/2025",
            "url": "https://pcchile.cl/2025/08/18/lineamientos-programaticos-jeannette-jara-2025/",
            "note": "Cabeçalho21–23 e corpo29–30 lidos: publicação/atribuição apenas."
          },
          {
            "title": "BioBioChile — atividade de Jeannette Jara,01/09/2026",
            "url": "https://www.biobiochile.cl/noticias/nacional/chile/2026/09/01/jeannette-jara-celebra-alza-de-la-pgu-y-acusa-a-republicanos-de-celebrar-hoy-lo-que-antes-rechazaron.shtml",
            "note": "Data103 e corpo136–153 lidos: identidade/atividade apenas; resumo IA134–135 excluído; fotografia de arquivo não certificada."
          }
        ],
        "caveats": "Programa declarado e datado, não prática ou opinião medida2026. Oito eixos desconhecidos. Edições de maio/outubro não amalgamadas. Revisão documental delimitada aceita pela revisão independente e pelo Root.",
        "rationale": "Defende participação democrática, vigilância e controles de segurança, abertura comercial e expansão tecnológica.",
        "vec": {
          "est": 50,
          "rep": 60,
          "pod": 60,
          "imi": 50,
          "dip": 50,
          "int": 50,
          "eco": 50,
          "con": 50,
          "com": 40,
          "rel": 50,
          "mor": 50,
          "tec": 60
        },
        "evidence": {
          "rep": "medium",
          "pod": "medium",
          "com": "medium",
          "tec": "medium"
        },
        "axisEvidence": {
          "rep": {
            "sourceTitles": [
              "Jeannette Jara — Un Chile que cumple, agosto2025"
            ],
            "rationale": "Democracia plural declarada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não certifica toda regra eleitoral ou execução."
          },
          "pod": {
            "sourceTitles": [
              "Jeannette Jara — Un Chile que cumple, agosto2025"
            ],
            "rationale": "Coerção estatal de segurança. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Proteção de dados829, controle civil910 e reinserção922/937 limitam poder."
          },
          "com": {
            "sourceTitles": [
              "Jeannette Jara — Un Chile que cumple, agosto2025"
            ],
            "rationale": "Abertura comercial programática. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Promoção produtiva seletiva562–595; não tarifa zero."
          },
          "tec": {
            "sourceTitles": [
              "Jeannette Jara — Un Chile que cumple, agosto2025"
            ],
            "rationale": "Adoção tecnológica em vários setores. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Proteção ambiental159/341–344 e crise climática106/127; não aceitação irrestrita."
          }
        },
        "coding": {
          "rep": {
            "axis": "rep",
            "position": "moderate-first",
            "confidence": "medium",
            "claims": [
              {
                "sourceTitle": "Jeannette Jara — Un Chile que cumple, agosto2025",
                "locator": "Physicalp3–4,26–38; p7,101–115",
                "statement": "Defende participação democrática e diálogo entre posições divergentes contra soluções autoritárias.",
                "basis": "declaration",
                "publishedDate": "Agosto2025 — edição assinada; apresentação18/08/2025",
                "accessedDate": "2026-10-08"
              }
            ],
            "rationale": "Democracia plural declarada.",
            "uncertainty": "Não certifica toda regra eleitoral ou execução.",
            "relatedQuestionIds": [
              "representacao_19",
              "representacao_20"
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
                "sourceTitle": "Jeannette Jara — Un Chile que cumple, agosto2025",
                "locator": "Physicalp25–30,772–790/823–829/871–890/927–942",
                "statement": "Amplia controle de armas, vigilância biométrica, investigação financeira e prisões.",
                "basis": "declaration",
                "publishedDate": "Agosto2025 — edição assinada; apresentação18/08/2025",
                "accessedDate": "2026-10-08"
              }
            ],
            "rationale": "Coerção estatal de segurança.",
            "uncertainty": "Proteção de dados829, controle civil910 e reinserção922/937 limitam poder.",
            "relatedQuestionIds": [
              "poder_05",
              "poder_09",
              "poder_18"
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
            "position": "moderate-second",
            "confidence": "medium",
            "claims": [
              {
                "sourceTitle": "Jeannette Jara — Un Chile que cumple, agosto2025",
                "locator": "Physicalp9,177–182; p19–20,538–596",
                "statement": "Preserva acordos comerciais, amplia mercados e facilita comércio internacional.",
                "basis": "declaration",
                "publishedDate": "Agosto2025 — edição assinada; apresentação18/08/2025",
                "accessedDate": "2026-10-08"
              }
            ],
            "rationale": "Abertura comercial programática.",
            "uncertainty": "Promoção produtiva seletiva562–595; não tarifa zero.",
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
          "tec": {
            "axis": "tec",
            "position": "moderate-first",
            "confidence": "medium",
            "claims": [
              {
                "sourceTitle": "Jeannette Jara — Un Chile que cumple, agosto2025",
                "locator": "Physicalp11–13,248–250/311–327; p27,823–829; p38–39,1177–1183/1229–1241",
                "statement": "Expande conectividade, mineração tecnológica, IA e telemedicina.",
                "basis": "declaration",
                "publishedDate": "Agosto2025 — edição assinada; apresentação18/08/2025",
                "accessedDate": "2026-10-08"
              }
            ],
            "rationale": "Adoção tecnológica em vários setores.",
            "uncertainty": "Proteção ambiental159/341–344 e crise climática106/127; não aceitação irrestrita.",
            "relatedQuestionIds": [
              "tecnologia_01",
              "tecnologia_07",
              "tecnologia_10"
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
      "priorWholeRecordSha256": "7666bff70a73c44b990cab8c2f916fd97b2204b48cf4a4255d452aade2a77c56"
    },
    "scoresAssigned": false,
    "repositoryEdited": false
  },
  {
    "id": "rashida-tlaib",
    "name": "Rashida Tlaib",
    "originalPeriod": "Agenda publicada pelo gabinete: Justice for All Act de 2023 e página Ending Poverty sem data; consulta em 7 de outubro de 2026.",
    "priorWholeRecordSha256": "c6bbf64ae15682c3c09117e73016b6880d392db09a14ea2c942aaf4947ab8f63",
    "priorDocumentedAxes": [
      "rep",
      "pod",
      "imi",
      "mor"
    ],
    "sources": [
      {
        "id": "tlaib-justice",
        "title": "Justice for All",
        "url": "https://tlaib.house.gov/resources/justice",
        "publishedDate": "Undated; explicitly references Justice for All Act of 2023",
        "accessedDate": "2026-10-08",
        "retrievalMode": "direct",
        "actualReadScope": "Entire substantive body lines 26–40, including all seven numbered programme items.",
        "note": "Own congressional-office agenda. Current availability does not date original publication or prove passage."
      },
      {
        "id": "tlaib-poverty",
        "title": "Ending Poverty",
        "url": "https://tlaib.house.gov/resources/ending-poverty",
        "publishedDate": "Undated",
        "accessedDate": "2026-10-08",
        "retrievalMode": "direct",
        "actualReadScope": "Entire substantive body lines 26–31.",
        "note": "Tax credits, minimum wages and affordability; these are not ownership statements."
      },
      {
        "id": "tlaib-jfa-draft",
        "title": "Justice for All Act of 2023 — TLAIB_009.XML office draft",
        "url": "https://d12t4t5x3vyizu.cloudfront.net/tlaib.house.gov/uploads/2023/02/TLAIB_009_xml.pdf",
        "publishedDate": "Draft footer 2023-01-31 11:21; office announcement 2023-02-01",
        "accessedDate": "2026-10-08",
        "retrievalMode": "direct",
        "actualReadScope": "55-page PDF: web physical pp. 1–5, local extracted physical pp. 32–36, 40–41, 47, 50–53. Not a complete 55-page read.",
        "note": "Directly linked by office, cover names Tlaib and leaves H.R. number blank. Draft/version date must not be relabeled an enacted statute or final introduced print. No exclusive personal legislative authorship claimed."
      },
      {
        "id": "tlaib-jfa-summary",
        "title": "Justice for All Act of 2023 — office public summary",
        "url": "https://d12t4t5x3vyizu.cloudfront.net/tlaib.house.gov/uploads/2023/01/JFA-Public-Summary-2023.pdf",
        "publishedDate": "2023 edition; no day printed in body",
        "accessedDate": "2026-10-08",
        "retrievalMode": "direct",
        "actualReadScope": "Entire one-page PDF text read after direct download and pdftotext extraction.",
        "note": "Linked from the office page; concise own legislative summary, not enactment evidence. Its historical/legal accusations are not independently certified."
      },
      {
        "id": "tlaib-jfa-announcement",
        "title": "Tlaib Re-Introduces Justice For All Act Restoring Original Intent, Expanding Protections of Civil Rights Laws",
        "url": "https://tlaib.house.gov/posts/tlaib-re-introduces-justice-for-all-act-restoring-original-intent-expanding-protections-of-civil-rights-laws",
        "publishedDate": "2023-02-01",
        "accessedDate": "2026-10-08",
        "retrievalMode": "direct",
        "actualReadScope": "Web lines 17–40: title/date, named introduction, own quote and all policy items; other speakers distinguished.",
        "note": "Pins the proposal to a real dated office announcement; no current legislative status claim."
      },
      {
        "id": "tlaib-solitary",
        "title": "Tlaib Joins Bush in Introducing Historic Bill to End Solitary Confinement",
        "url": "https://tlaib.house.gov/posts/tlaib-joins-bush-in-introducing-historic-bill-to-end-solitary-confinement",
        "publishedDate": "2023-07-27",
        "accessedDate": "2026-10-08",
        "retrievalMode": "direct",
        "actualReadScope": "Web lines 17–55; Tlaib-specific quote 24 and proposed provisions 36–42. Bill links identified but full bill not opened.",
        "note": "Own participation and quote establish endorsement. Other lawmakers/advocacy quotes are not attributed to Tlaib. Additional 2023 source, not original baseline."
      },
      {
        "id": "tlaib-abortion",
        "title": "Tlaib Statement on Republicans’ Extreme Anti-Abortion Care Agenda",
        "url": "https://tlaib.house.gov/posts/tlaib-statement-on-republicans-extreme-anti-abortion-care-agenda",
        "publishedDate": "2023-01-11",
        "accessedDate": "2026-10-08",
        "retrievalMode": "direct",
        "actualReadScope": "Title/date and full statement, web lines 17–26.",
        "note": "Own statement; opposition-party accusations not validated. Additional 2023 source."
      },
      {
        "id": "tlaib-diplomacy",
        "title": "Tlaib Opposes More Funding for Weapons, Never Enough to Feed the Poor",
        "url": "https://tlaib.house.gov/posts/tlaib-opposes-more-funding-for-weapons-never-enough-to-feed-the-poor",
        "publishedDate": "2023-12-14",
        "accessedDate": "2026-10-08",
        "retrievalMode": "direct",
        "actualReadScope": "Title/date and complete statement web lines 17–27.",
        "note": "Dated own general policy preference. Reported vote is not independently checked against roll call; basis remains declaration. Additional 2023 source."
      },
      {
        "id": "tlaib-yemen",
        "title": "Tlaib, Khanna Lead Letter Urging President Biden to Support Ending War in Yemen",
        "url": "https://tlaib.house.gov/posts/tlaib-khanna-lead-letter-urging-president-biden-to-support-ending-war-in-yemen",
        "publishedDate": "2023-05-18",
        "accessedDate": "2026-10-08",
        "retrievalMode": "direct",
        "actualReadScope": "Web lines 17–32; indexed full article also exposed Tlaib quote and remainder. Underlying letter not opened.",
        "note": "Joint co-led demands distinguished from Tlaib-specific quote. Bounded Yemen example, not universal nonintervention doctrine."
      },
      {
        "id": "tlaib-bank",
        "title": "Tlaib, Ocasio-Cortez Introduce Public Banking Act",
        "url": "https://tlaib.house.gov/posts/tlaib-ocasio-cortez-introduce-public-banking-act",
        "publishedDate": "2023-12-13",
        "accessedDate": "2026-10-08",
        "retrievalMode": "direct",
        "actualReadScope": "Web lines 17–44, especially office bill description 20–21, own quote 22–23, and framework 26–35.",
        "note": "Do not attribute Ocasio-Cortez or advocates’ words to Tlaib. Additional 2023 source."
      },
      {
        "id": "tlaib-bank-draft",
        "title": "Public Banking Act of 2023 — TLAIB_059.XML office draft",
        "url": "https://d12t4t5x3vyizu.cloudfront.net/tlaib.house.gov/uploads/2023/12/TLAIB_059_xml-1.pdf",
        "publishedDate": "Draft footer 2023-12-12 09:12; office announcement 2023-12-13",
        "accessedDate": "2026-10-08",
        "retrievalMode": "direct",
        "actualReadScope": "58-page PDF web text lines 0–355, physical pp. 1–14 (p. 15 heading only). Covers title, definitions and early Title I. No full bill read.",
        "note": "Cover leaves H.R. number blank. Public ownership definitions read explicitly, not inferred from capital grants."
      },
      {
        "id": "tlaib-housing",
        "title": "Housing is a Human Right",
        "url": "https://tlaib.house.gov/resources/housing-rights",
        "publishedDate": "Undated",
        "accessedDate": "2026-10-08",
        "retrievalMode": "direct",
        "actualReadScope": "Complete My Position body, extracted local text lines 28–32; no resources found under updates.",
        "note": "Office agenda advocates affordability and accountability of banks/appraisers/developers, not public ownership."
      },
      {
        "id": "tlaib-health",
        "title": "Health Care",
        "url": "https://tlaib.house.gov/resources/health-care",
        "publishedDate": "Undated",
        "accessedDate": "2026-10-08",
        "retrievalMode": "direct",
        "actualReadScope": "Entire My Position paragraph, web lines 26–28.",
        "note": "Affordable equitable care; no ownership structure specified."
      },
      {
        "id": "tlaib-environment",
        "title": "Environmental Justice",
        "url": "https://tlaib.house.gov/resources/environmental-justice",
        "publishedDate": "Undated",
        "accessedDate": "2026-10-08",
        "retrievalMode": "direct",
        "actualReadScope": "Entire My Position paragraph, web lines 26–28.",
        "note": "Pollution/health concern, no general technology/biology tradeoff supplied."
      }
    ],
    "claims": [
      {
        "id": "tlaib-rep-narrow",
        "axis": "rep",
        "sourceTitle": "Justice for All",
        "sourceId": "tlaib-justice",
        "url": "https://tlaib.house.gov/resources/justice",
        "locator": "My Position first paragraph, line 27",
        "statement": "Protects voting rights.",
        "locatedEvidenceType": "bounded paraphrase",
        "basis": "declaration",
        "publishedDate": "Undated; explicitly references Justice for All Act of 2023",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Directly relevant component but the located statement is too brief to establish the entire representation/pluralism construct independently.",
        "counterEvidence": "No contrary autocratic preference found in this bounded read.",
        "uncertainty": "Do not infer a detailed democratic architecture from officeholding, partisan identity, or a single voting-rights sentence.",
        "retrievalMode": "direct",
        "actualReadScope": "Entire substantive body lines 26–40, including all seven numbered programme items.",
        "status": "existing_not_whole_construct_certified"
      },
      {
        "id": "tlaib-imi-narrow",
        "axis": "imi",
        "sourceTitle": "Justice for All",
        "sourceId": "tlaib-justice",
        "url": "https://tlaib.house.gov/resources/justice",
        "locator": "My Position lines 27–28",
        "statement": "Welcomes district diversity and seeks an improved citizenship pathway.",
        "locatedEvidenceType": "bounded paraphrase",
        "basis": "declaration",
        "publishedDate": "Undated; explicitly references Justice for All Act of 2023",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Diversity and inclusion are relevant, but no broad national immigration/cultural integration regime is prescribed.",
        "counterEvidence": "No assimilation mandate found; absence is not a measured neutral position.",
        "uncertainty": "A local demographic appreciation plus citizenship access does not by itself resolve the whole axis.",
        "retrievalMode": "direct",
        "actualReadScope": "Entire substantive body lines 26–40, including all seven numbered programme items.",
        "status": "existing_not_whole_construct_certified"
      },
      {
        "id": "tlaib-pod-jfa",
        "axis": "pod",
        "sourceTitle": "Justice for All Act of 2023 — TLAIB_009.XML office draft",
        "sourceId": "tlaib-jfa-draft",
        "url": "https://d12t4t5x3vyizu.cloudfront.net/tlaib.house.gov/uploads/2023/02/TLAIB_009_xml.pdf",
        "locator": "sec. 5 physical pp. 32–36; sec. 9 physical pp. 50–53",
        "statement": "Restricts discriminatory policing and expands remedies for constitutional violations by public actors.",
        "locatedEvidenceType": "bounded paraphrase",
        "basis": "norm",
        "publishedDate": "Draft footer 2023-01-31 11:21; office announcement 2023-02-01",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Explicitly reaches federal, state, local and tribal criminal/immigration enforcement, searches, investigation and official immunity, rather than one racial-profiling slogan.",
        "counterEvidence": "pp. 33–34 preserve trustworthy person/incident-linked investigative exceptions; remedies do not abolish police or ordinary prosecution.",
        "uncertainty": "Proposed office draft, not enacted law; complete bill not read.",
        "retrievalMode": "direct",
        "actualReadScope": "55-page PDF: web physical pp. 1–5, local extracted physical pp. 32–36, 40–41, 47, 50–53. Not a complete 55-page read.",
        "status": "existing_supported_with_broader_primary_text"
      },
      {
        "id": "tlaib-pod-solitary",
        "axis": "pod",
        "sourceTitle": "Tlaib Joins Bush in Introducing Historic Bill to End Solitary Confinement",
        "sourceId": "tlaib-solitary",
        "url": "https://tlaib.house.gov/posts/tlaib-joins-bush-in-introducing-historic-bill-to-end-solitary-confinement",
        "locator": "Tlaib quote line 24; provisions lines 36–42",
        "statement": "Endorses restorative justice, strict detention due process and sharply limited solitary confinement.",
        "locatedEvidenceType": "bounded paraphrase",
        "basis": "declaration",
        "publishedDate": "2023-07-27",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Adds detention treatment, oversight and procedural liberty to broad public-actor accountability.",
        "counterEvidence": "Four-hour emergency de-escalation and longer separation with minimum access remain permitted; prisons remain.",
        "uncertainty": "Additional same-year endorsed proposal, not part of original JFA text or proof of passage.",
        "retrievalMode": "direct",
        "actualReadScope": "Web lines 17–55; Tlaib-specific quote 24 and proposed provisions 36–42. Bill links identified but full bill not opened.",
        "status": "same_year_extension_candidate"
      },
      {
        "id": "tlaib-mor-jfa",
        "axis": "mor",
        "sourceTitle": "Justice for All Act of 2023 — TLAIB_009.XML office draft",
        "sourceId": "tlaib-jfa-draft",
        "url": "https://d12t4t5x3vyizu.cloudfront.net/tlaib.house.gov/uploads/2023/02/TLAIB_009_xml.pdf",
        "locator": "sec. 6 proposed definitions and rules, physical pp. 40–41",
        "statement": "Protects sex/gender diversity and access consistent with gender identity.",
        "locatedEvidenceType": "bounded paraphrase",
        "basis": "norm",
        "publishedDate": "Draft footer 2023-01-31 11:21; office announcement 2023-02-01",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Substantive legal treatment across covered establishments supports the sexual/gender portion of the construct; reproductive policy is independent corroboration.",
        "counterEvidence": "Does not establish every family, religious or tradition issue.",
        "uncertainty": "Draft inclusion of pregnancy is not, by itself, an abortion prescription.",
        "retrievalMode": "direct",
        "actualReadScope": "55-page PDF: web physical pp. 1–5, local extracted physical pp. 32–36, 40–41, 47, 50–53. Not a complete 55-page read.",
        "status": "existing_supported_bounded"
      },
      {
        "id": "tlaib-mor-abortion",
        "axis": "mor",
        "sourceTitle": "Tlaib Statement on Republicans’ Extreme Anti-Abortion Care Agenda",
        "sourceId": "tlaib-abortion",
        "url": "https://tlaib.house.gov/posts/tlaib-statement-on-republicans-extreme-anti-abortion-care-agenda",
        "locator": "final paragraph, web lines 24–25",
        "statement": "Defends bodily autonomy and restoration of nationwide abortion access.",
        "locatedEvidenceType": "bounded paraphrase",
        "basis": "declaration",
        "publishedDate": "2023-01-11",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Together with sex/gender equality, broadens the existing evidence beyond a single nondiscrimination definition.",
        "counterEvidence": "No exhaustive customs/traditions programme claimed.",
        "uncertainty": "Additional same-year declaration, not baseline text or implemented law.",
        "retrievalMode": "direct",
        "actualReadScope": "Title/date and full statement, web lines 17–26.",
        "status": "same_year_extension_candidate"
      },
      {
        "id": "tlaib-dip-new",
        "axis": "dip",
        "sourceTitle": "Tlaib Opposes More Funding for Weapons, Never Enough to Feed the Poor",
        "sourceId": "tlaib-diplomacy",
        "url": "https://tlaib.house.gov/posts/tlaib-opposes-more-funding-for-weapons-never-enough-to-feed-the-poor",
        "locator": "final paragraph, web line 26; opening line 22",
        "statement": "Prioritizes diplomacy and peace while reducing military spending.",
        "locatedEvidenceType": "bounded paraphrase",
        "basis": "declaration",
        "publishedDate": "2023-12-14",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Expressly states a general future policy direction beyond objection to a single conflict or appropriation provision.",
        "counterEvidence": "Does not renounce defence or all armed force; same-year solitary/veterans work must not be read as abolishing state security.",
        "uncertainty": "Needs editor decision to broaden the old two-page referent to the explicitly dated 2023 office agenda.",
        "retrievalMode": "direct",
        "actualReadScope": "Title/date and complete statement web lines 17–27.",
        "status": "same_year_new_broad_candidate"
      },
      {
        "id": "tlaib-dip-yemen",
        "axis": "dip",
        "sourceTitle": "Tlaib, Khanna Lead Letter Urging President Biden to Support Ending War in Yemen",
        "sourceId": "tlaib-yemen",
        "url": "https://tlaib.house.gov/posts/tlaib-khanna-lead-letter-urging-president-biden-to-support-ending-war-in-yemen",
        "locator": "six letter demands, web lines 26–32",
        "statement": "Supports a negotiated Yemen settlement, ending war support and preserving an arms embargo.",
        "locatedEvidenceType": "bounded paraphrase",
        "basis": "declaration",
        "publishedDate": "2023-05-18",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Concrete corroboration for general diplomacy preference, not enough alone for the entire axis.",
        "counterEvidence": "Maintains UN embargo and active U.S. diplomatic/humanitarian involvement.",
        "uncertainty": "Only official release read, not complete underlying letter; factual war allegations not certified.",
        "retrievalMode": "direct",
        "actualReadScope": "Web lines 17–32; indexed full article also exposed Tlaib quote and remainder. Underlying letter not opened.",
        "status": "bounded_corroboration"
      },
      {
        "id": "tlaib-eco-bank",
        "axis": "eco",
        "sourceTitle": "Public Banking Act of 2023 — TLAIB_059.XML office draft",
        "sourceId": "tlaib-bank-draft",
        "url": "https://d12t4t5x3vyizu.cloudfront.net/tlaib.house.gov/uploads/2023/12/TLAIB_059_xml-1.pdf",
        "locator": "sec. 101(b)–(c), physical pp. 6–7; sec. 104 purpose, physical p. 11",
        "statement": "Creates banks wholly owned/controlled by public or qualifying nonprofit entities, excluding for-profit affiliation.",
        "locatedEvidenceType": "bounded paraphrase",
        "basis": "norm",
        "publishedDate": "Draft footer 2023-12-12 09:12; office announcement 2023-12-13",
        "accessedDate": "2026-10-08",
        "wholeConstructRationale": "Genuine ownership/provision evidence for finance, not financing mislabeled as ownership.",
        "counterEvidence": "Finance is one sector. Programme supports small-business credit and does not nationalize private banks generally.",
        "uncertainty": "Not sufficient alone for the whole public/private economic construct; housing/health baseline adds affordability, not ownership.",
        "retrievalMode": "direct",
        "actualReadScope": "58-page PDF web text lines 0–355, physical pp. 1–14 (p. 15 heading only). Covers title, definitions and early Title I. No full bill read.",
        "status": "sectoral_lead_only"
      }
    ],
    "axisReview": [
      {
        "axis": "rep",
        "status": "existing_not_whole_construct_certified",
        "claimIds": [
          "tlaib-rep-narrow"
        ],
        "rationale": "The original claim was re-read but remains narrower than the requested whole construct.",
        "remainingGap": "Need a general personally endorsed institutional or cultural programme within the chosen referent."
      },
      {
        "axis": "imi",
        "status": "existing_not_whole_construct_certified",
        "claimIds": [
          "tlaib-imi-narrow"
        ],
        "rationale": "The original claim was re-read but remains narrower than the requested whole construct.",
        "remainingGap": "Need a general personally endorsed institutional or cultural programme within the chosen referent."
      },
      {
        "axis": "pod",
        "status": "existing_supported_with_broader_primary_text",
        "claimIds": [
          "tlaib-pod-jfa",
          "tlaib-pod-solitary"
        ],
        "rationale": "JFA now has directly read national enforcement/remedy detail, with separate 2023 detention-law corroboration.",
        "remainingGap": "Editor must label the 2023 addition explicitly."
      },
      {
        "axis": "mor",
        "status": "existing_supported_if_same_year_extension_admitted",
        "claimIds": [
          "tlaib-mor-jfa",
          "tlaib-mor-abortion"
        ],
        "rationale": "Sex/gender protection plus own abortion commitment broaden the moral basis.",
        "remainingGap": "Do not pretend the separate January statement was inside the undated Justice page."
      },
      {
        "axis": "dip",
        "status": "new_broad_candidate_in_explicit_2023_extension",
        "claimIds": [
          "tlaib-dip-new",
          "tlaib-dip-yemen"
        ],
        "rationale": "General preference for diplomacy/peace is directly stated and concretely exemplified.",
        "remainingGap": "Revise programme/source scope explicitly if integrated, rather than silently adding to original baseline."
      },
      {
        "axis": "eco",
        "status": "held_sectoral",
        "claimIds": [
          "tlaib-eco-bank"
        ],
        "rationale": "Public ownership is proven for proposed banks, not a general economy-wide ownership preference.",
        "remainingGap": "Locate other explicit public-provider/ownership sectors or a genuinely general prescription."
      },
      {
        "axis": "est",
        "status": "held_unknown",
        "claimIds": [],
        "rationale": "A public-bank option for states/localities is not general federalism or constitutional power distribution.",
        "remainingGap": ""
      },
      {
        "axis": "int",
        "status": "held_unknown",
        "claimIds": [],
        "rationale": "Yemen demands are conflict-specific; peace preference does not by itself establish the exact general external-involvement/national-interest construct.",
        "remainingGap": ""
      },
      {
        "axis": "con",
        "status": "held_unknown",
        "claimIds": [],
        "rationale": "Minimum wage, consumer antidiscrimination and bank frameworks remain policy-specific. No general allocation/coordination rule located.",
        "remainingGap": ""
      },
      {
        "axis": "com",
        "status": "held_unknown",
        "claimIds": [],
        "rationale": "No relevant general trade policy located within the bounded source set.",
        "remainingGap": ""
      },
      {
        "axis": "rel",
        "status": "held_unknown",
        "claimIds": [],
        "rationale": "Religious antidiscrimination and personal Muslim identity do not establish religious institutional authority.",
        "remainingGap": ""
      },
      {
        "axis": "tec",
        "status": "held_unknown",
        "claimIds": [],
        "rationale": "Pollution concern, digital-bank services and a copyleft definition do not establish a general technology versus biological/environmental caution preference.",
        "remainingGap": ""
      }
    ],
    "retrievalFailures": [],
    "gaps": [
      "No six-axis threshold certification: prior REP/IMI broadness is unresolved, and ECO is expressly sectoral.",
      "Do not convert same-year supplemental sources into the original two-page baseline without revising the referent openly.",
      "2026 source snippets found during search and pre-2023 material excluded from claims.",
      "All proposed bills remain proposal evidence. Legislative passage/implementation and source statistical claims were not checked."
    ],
    "researchScope": "Baseline remains the undated office agenda as retrieved on 2026-10-08 and JFA 2023. Additional personally attributed 2023 proposals are clearly separated as same-year candidate extensions; no claim that they were part of the original two-page baseline or renewed in 2026.",
    "priorFullHandoffRecord": {
      "id": "rashida-tlaib",
      "name": "Rashida Tlaib",
      "category": "public-figure",
      "period": "Agenda publicada pelo gabinete: Justice for All Act de 2023 e página Ending Poverty sem data; consulta em 7 de outubro de 2026.",
      "documentedAxes": [
        "rep",
        "pod",
        "imi",
        "mor"
      ],
      "documentedAxisCount": 4,
      "metadataEligible": false,
      "humanWholeReviewed": false,
      "minMissingAxesToSix": 2,
      "missingAxes": [
        "est",
        "dip",
        "int",
        "eco",
        "con",
        "com",
        "rel",
        "tec"
      ],
      "selectionRationale": "Quatro eixos da agenda própria do gabinete e propostas de2023. Procurar obrigações substantivas amplas em texto patrocinado/endossado e manter publicação sem data distinta de norma vigente; não inferir aprovação/implementação.",
      "sourceUrlsForResearch": [
        "https://tlaib.house.gov/resources/justice",
        "https://tlaib.house.gov/resources/ending-poverty",
        "https://omar.house.gov/media/press-releases"
      ],
      "knownSourceNotes": [
        {
          "title": "Justice for All",
          "url": "https://tlaib.house.gov/resources/justice",
          "note": "Gabinete de Rashida Tlaib, Câmara dos EUA. Publicação: sem data indicada. Consulta documental em 7/10/2026; posições declaradas, não prova de implementação."
        },
        {
          "title": "Ending Poverty",
          "url": "https://tlaib.house.gov/resources/ending-poverty",
          "note": "Gabinete de Rashida Tlaib, Câmara dos EUA. Publicação: sem data indicada. Consulta documental em 7/10/2026; posições declaradas, não prova de implementação."
        },
        {
          "title": "Escritório Omar — comunicado nominal conjunto23/07/2026, cláusula do índice",
          "url": "https://omar.house.gov/media/press-releases",
          "note": "Identidade/atividade2026 apenas. Índice oficial94–97: data e cláusula completa com Omar e Rashida Tlaib entre membros que emitiram declaração. Corpo da cláusula do índice efetivamente lido; comunicado interno completo retornou InternalError e não é declarado reaberto. Atividade nominal conjunta emitida, sem certificação de presença física ou toda posição de2026. Uma fonte compartilhada pelos dois nomes."
        }
      ],
      "existingAxisAudit": [
        {
          "axis": "rep",
          "scope": "Prior editorial coding only; not freshly read or recertified for this handoff",
          "coding": {
            "axis": "rep",
            "position": "moderate-first",
            "confidence": "medium",
            "claims": [
              {
                "sourceTitle": "Justice for All",
                "locator": "My Position on Justice for All, primeiro parágrafo",
                "statement": "Declara compromisso com a proteção do direito ao voto.",
                "basis": "declaration",
                "publishedDate": "Sem data indicada; conteúdo disponível em 7/10/2026",
                "accessedDate": "2026-10-07"
              }
            ],
            "rationale": "Declara compromisso com a proteção do direito ao voto. A âncora expressa a direção e intensidade delimitadas dessa proposta.",
            "uncertainty": "Não sustenta um retrato completo de desenho democrático. Direito ao voto é um componente da representação, sem autorizar inferir todo o desenho democrático. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação.",
            "reviewedOn": "2026-10-07",
            "version": "editorial-ordinal-v1",
            "value": 60,
            "range": [
              55,
              70
            ]
          },
          "axisEvidence": {
            "sourceTitles": [
              "Justice for All"
            ],
            "rationale": "Declara compromisso com a proteção do direito ao voto. A âncora expressa a direção e intensidade delimitadas dessa proposta. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não sustenta um retrato completo de desenho democrático. Direito ao voto é um componente da representação, sem autorizar inferir todo o desenho democrático. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação."
          },
          "evidence": "medium"
        },
        {
          "axis": "pod",
          "scope": "Prior editorial coding only; not freshly read or recertified for this handoff",
          "coding": {
            "axis": "pod",
            "position": "moderate-second",
            "confidence": "medium",
            "claims": [
              {
                "sourceTitle": "Justice for All",
                "locator": "Justice for All Civil Rights Act, item 4",
                "statement": "Propõe responsabilização de agentes públicos e vedação a perfilamento racial e de gênero pela polícia.",
                "basis": "declaration",
                "publishedDate": "Sem data indicada; conteúdo disponível em 7/10/2026",
                "accessedDate": "2026-10-07"
              }
            ],
            "rationale": "Propõe responsabilização de agentes públicos e vedação a perfilamento racial e de gênero pela polícia. A âncora expressa a direção e intensidade delimitadas dessa proposta.",
            "uncertainty": "Proteção contra abuso não implica rejeição de toda política de segurança. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação.",
            "reviewedOn": "2026-10-07",
            "version": "editorial-ordinal-v1",
            "value": 40,
            "range": [
              30,
              45
            ]
          },
          "axisEvidence": {
            "sourceTitles": [
              "Justice for All"
            ],
            "rationale": "Propõe responsabilização de agentes públicos e vedação a perfilamento racial e de gênero pela polícia. A âncora expressa a direção e intensidade delimitadas dessa proposta. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Proteção contra abuso não implica rejeição de toda política de segurança. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação."
          },
          "evidence": "medium"
        },
        {
          "axis": "imi",
          "scope": "Prior editorial coding only; not freshly read or recertified for this handoff",
          "coding": {
            "axis": "imi",
            "position": "moderate-second",
            "confidence": "medium",
            "claims": [
              {
                "sourceTitle": "Justice for All",
                "locator": "My Position on Justice for All, segundo parágrafo",
                "statement": "Defende facilitar o acesso à cidadania para comunidades imigrantes.",
                "basis": "declaration",
                "publishedDate": "Sem data indicada; conteúdo disponível em 7/10/2026",
                "accessedDate": "2026-10-07"
              }
            ],
            "rationale": "Defende facilitar o acesso à cidadania para comunidades imigrantes. A âncora expressa a direção e intensidade delimitadas dessa proposta.",
            "uncertainty": "Cidadania não resolve todas as posições sobre multiculturalismo. Inclusão jurídica e acesso a instituições sustentam somente orientação moderada contra exclusão, sem equivalência perfeita com toda integração cultural. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação.",
            "reviewedOn": "2026-10-07",
            "version": "editorial-ordinal-v1",
            "value": 40,
            "range": [
              30,
              45
            ]
          },
          "axisEvidence": {
            "sourceTitles": [
              "Justice for All"
            ],
            "rationale": "Defende facilitar o acesso à cidadania para comunidades imigrantes. A âncora expressa a direção e intensidade delimitadas dessa proposta. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Cidadania não resolve todas as posições sobre multiculturalismo. Inclusão jurídica e acesso a instituições sustentam somente orientação moderada contra exclusão, sem equivalência perfeita com toda integração cultural. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação."
          },
          "evidence": "medium"
        },
        {
          "axis": "mor",
          "scope": "Prior editorial coding only; not freshly read or recertified for this handoff",
          "coding": {
            "axis": "mor",
            "position": "moderate-first",
            "confidence": "medium",
            "claims": [
              {
                "sourceTitle": "Justice for All",
                "locator": "Justice for All Civil Rights Act, item 7",
                "statement": "Propõe proteção antidiscriminatória para orientação sexual e identidade de gênero.",
                "basis": "declaration",
                "publishedDate": "Sem data indicada; conteúdo disponível em 7/10/2026",
                "accessedDate": "2026-10-07"
              }
            ],
            "rationale": "Propõe proteção antidiscriminatória para orientação sexual e identidade de gênero. A âncora expressa a direção e intensidade delimitadas dessa proposta.",
            "uncertainty": "Escopo é direitos civis especificados, não todos os temas morais. A proteção citada cobre uma faceta de costumes e direitos; não constitui posição extrema sobre todo o eixo. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação.",
            "reviewedOn": "2026-10-07",
            "version": "editorial-ordinal-v1",
            "value": 60,
            "range": [
              55,
              70
            ]
          },
          "axisEvidence": {
            "sourceTitles": [
              "Justice for All"
            ],
            "rationale": "Propõe proteção antidiscriminatória para orientação sexual e identidade de gênero. A âncora expressa a direção e intensidade delimitadas dessa proposta. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Escopo é direitos civis especificados, não todos os temas morais. A proteção citada cobre uma faceta de costumes e direitos; não constitui posição extrema sobre todo o eixo. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação."
          },
          "evidence": "medium"
        }
      ],
      "priorWholeRecord": {
        "id": "rashida-tlaib",
        "kind": "person",
        "category": "public-figure",
        "name": "Rashida Tlaib",
        "period": "Agenda publicada pelo gabinete: Justice for All Act de 2023 e página Ending Poverty sem data; consulta em 7 de outubro de 2026.",
        "vec": {
          "est": 50,
          "rep": 60,
          "pod": 40,
          "imi": 40,
          "dip": 50,
          "int": 50,
          "eco": 50,
          "con": 50,
          "com": 50,
          "rel": 50,
          "mor": 60,
          "tec": 50
        },
        "evidence": {
          "rep": "medium",
          "imi": "medium",
          "pod": "medium",
          "mor": "medium"
        },
        "axisEvidence": {
          "rep": {
            "sourceTitles": [
              "Justice for All"
            ],
            "rationale": "Declara compromisso com a proteção do direito ao voto. A âncora expressa a direção e intensidade delimitadas dessa proposta. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não sustenta um retrato completo de desenho democrático. Direito ao voto é um componente da representação, sem autorizar inferir todo o desenho democrático. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação."
          },
          "imi": {
            "sourceTitles": [
              "Justice for All"
            ],
            "rationale": "Defende facilitar o acesso à cidadania para comunidades imigrantes. A âncora expressa a direção e intensidade delimitadas dessa proposta. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Cidadania não resolve todas as posições sobre multiculturalismo. Inclusão jurídica e acesso a instituições sustentam somente orientação moderada contra exclusão, sem equivalência perfeita com toda integração cultural. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação."
          },
          "pod": {
            "sourceTitles": [
              "Justice for All"
            ],
            "rationale": "Propõe responsabilização de agentes públicos e vedação a perfilamento racial e de gênero pela polícia. A âncora expressa a direção e intensidade delimitadas dessa proposta. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Proteção contra abuso não implica rejeição de toda política de segurança. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação."
          },
          "mor": {
            "sourceTitles": [
              "Justice for All"
            ],
            "rationale": "Propõe proteção antidiscriminatória para orientação sexual e identidade de gênero. A âncora expressa a direção e intensidade delimitadas dessa proposta. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Escopo é direitos civis especificados, não todos os temas morais. A proteção citada cobre uma faceta de costumes e direitos; não constitui posição extrema sobre todo o eixo. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação."
          }
        },
        "coding": {
          "rep": {
            "axis": "rep",
            "position": "moderate-first",
            "confidence": "medium",
            "claims": [
              {
                "sourceTitle": "Justice for All",
                "locator": "My Position on Justice for All, primeiro parágrafo",
                "statement": "Declara compromisso com a proteção do direito ao voto.",
                "basis": "declaration",
                "publishedDate": "Sem data indicada; conteúdo disponível em 7/10/2026",
                "accessedDate": "2026-10-07"
              }
            ],
            "rationale": "Declara compromisso com a proteção do direito ao voto. A âncora expressa a direção e intensidade delimitadas dessa proposta.",
            "uncertainty": "Não sustenta um retrato completo de desenho democrático. Direito ao voto é um componente da representação, sem autorizar inferir todo o desenho democrático. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação.",
            "reviewedOn": "2026-10-07",
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
                "sourceTitle": "Justice for All",
                "locator": "My Position on Justice for All, segundo parágrafo",
                "statement": "Defende facilitar o acesso à cidadania para comunidades imigrantes.",
                "basis": "declaration",
                "publishedDate": "Sem data indicada; conteúdo disponível em 7/10/2026",
                "accessedDate": "2026-10-07"
              }
            ],
            "rationale": "Defende facilitar o acesso à cidadania para comunidades imigrantes. A âncora expressa a direção e intensidade delimitadas dessa proposta.",
            "uncertainty": "Cidadania não resolve todas as posições sobre multiculturalismo. Inclusão jurídica e acesso a instituições sustentam somente orientação moderada contra exclusão, sem equivalência perfeita com toda integração cultural. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação.",
            "reviewedOn": "2026-10-07",
            "version": "editorial-ordinal-v1",
            "value": 40,
            "range": [
              30,
              45
            ]
          },
          "pod": {
            "axis": "pod",
            "position": "moderate-second",
            "confidence": "medium",
            "claims": [
              {
                "sourceTitle": "Justice for All",
                "locator": "Justice for All Civil Rights Act, item 4",
                "statement": "Propõe responsabilização de agentes públicos e vedação a perfilamento racial e de gênero pela polícia.",
                "basis": "declaration",
                "publishedDate": "Sem data indicada; conteúdo disponível em 7/10/2026",
                "accessedDate": "2026-10-07"
              }
            ],
            "rationale": "Propõe responsabilização de agentes públicos e vedação a perfilamento racial e de gênero pela polícia. A âncora expressa a direção e intensidade delimitadas dessa proposta.",
            "uncertainty": "Proteção contra abuso não implica rejeição de toda política de segurança. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação.",
            "reviewedOn": "2026-10-07",
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
                "sourceTitle": "Justice for All",
                "locator": "Justice for All Civil Rights Act, item 7",
                "statement": "Propõe proteção antidiscriminatória para orientação sexual e identidade de gênero.",
                "basis": "declaration",
                "publishedDate": "Sem data indicada; conteúdo disponível em 7/10/2026",
                "accessedDate": "2026-10-07"
              }
            ],
            "rationale": "Propõe proteção antidiscriminatória para orientação sexual e identidade de gênero. A âncora expressa a direção e intensidade delimitadas dessa proposta.",
            "uncertainty": "Escopo é direitos civis especificados, não todos os temas morais. A proteção citada cobre uma faceta de costumes e direitos; não constitui posição extrema sobre todo o eixo. Documento sem data editorial; o recorte é a plataforma disponível na consulta, sem atribuir ano de publicação.",
            "reviewedOn": "2026-10-07",
            "version": "editorial-ordinal-v1",
            "value": 60,
            "range": [
              55,
              70
            ]
          }
        },
        "sources": [
          {
            "title": "Justice for All",
            "url": "https://tlaib.house.gov/resources/justice",
            "note": "Gabinete de Rashida Tlaib, Câmara dos EUA. Publicação: sem data indicada. Consulta documental em 7/10/2026; posições declaradas, não prova de implementação."
          },
          {
            "title": "Ending Poverty",
            "url": "https://tlaib.house.gov/resources/ending-poverty",
            "note": "Gabinete de Rashida Tlaib, Câmara dos EUA. Publicação: sem data indicada. Consulta documental em 7/10/2026; posições declaradas, não prova de implementação."
          },
          {
            "title": "Escritório Omar — comunicado nominal conjunto23/07/2026, cláusula do índice",
            "url": "https://omar.house.gov/media/press-releases",
            "note": "Identidade/atividade2026 apenas. Índice oficial94–97: data e cláusula completa com Omar e Rashida Tlaib entre membros que emitiram declaração. Corpo da cláusula do índice efetivamente lido; comunicado interno completo retornou InternalError e não é declarado reaberto. Atividade nominal conjunta emitida, sem certificação de presença física ou toda posição de2026. Uma fonte compartilhada pelos dois nomes."
          }
        ],
        "rationale": "Declara compromisso com a proteção do direito ao voto. Defende facilitar o acesso à cidadania para comunidades imigrantes. Propõe responsabilização de agentes públicos e vedação a perfilamento racial e de gênero pela polícia. Propõe proteção antidiscriminatória para orientação sexual e identidade de gênero.",
        "caveats": "A descrição do JFA é de proposta reapresentada em 2023, não de lei em vigor. Não atribuir nacionalização com base em transferência de renda. A página Health Care consultada é genérica e foi excluída como sustentação do eixo eco. A proposta de crédito tributário e salário mínimo foi preservada apenas no dossiê: não demonstra planejamento econômico suficientemente específico. Âncoras são classes editoriais, não medições da pessoa. Eixos ausentes são desconhecidos. Nenhum destes perfis possui os seis eixos exigidos para matches. Identidade viva/atividade2026 delimitada por fonte adicional; data de publicação ou relato nominal não renova todas as posições anteriores nem certifica presença física, imagens ou cargo contínuo."
      },
      "priorWholeRecordSha256": "c6bbf64ae15682c3c09117e73016b6880d392db09a14ea2c942aaf4947ab8f63"
    },
    "scoresAssigned": false,
    "repositoryEdited": false
  }
];
export const native14PublicFiguresHeldClaims={
  "jill-stein": [
    {
      "id": "stein-rep-ca",
      "axis": "rep",
      "sourceTitle": "Jill Stein — declaração própria no guia oficial da Califórnia2024",
      "sourceId": "stein-ca",
      "url": "https://vigarchive.sos.ca.gov/2024/primary/candidates/president/president-green-cand-statements.htm",
      "locator": "candidate statement paragraphs 2–3, concluding rights paragraph; web lines 19–20 and 27",
      "statement": "Affirms electoral choice and popular democratic authority.",
      "locatedEvidenceType": "bounded paraphrase",
      "basis": "declaration",
      "publishedDate": "2024 primary guide for election 2024-03-05; submission date unstated",
      "accessedDate": "2026-10-08",
      "wholeConstructRationale": "General plural choice is explicitly essential to democracy, rather than merely asking for support for herself.",
      "counterEvidence": "The brief guide does not specify the complete institutional system.",
      "uncertainty": "Broad principle, but exact reform structure requires other evidence.",
      "retrievalMode": "author-recorded-body",
      "actualReadScope": "Heading/date lines 5–16; complete candidate statement lines 18–29; submission attribution line 41.",
      "status": "existing_substantively_supported"
    },
    {
      "id": "stein-rep-oped",
      "axis": "rep",
      "sourceTitle": "Jill Stein: Why You Should Vote Green",
      "sourceId": "stein-oped",
      "url": "https://www.gp.org/jill_stein_why_you_should_vote_green",
      "locator": "final democratic-reform paragraph beginning Finally, when you hear me called a spoiler",
      "statement": "Commits to ranked-choice voting, proportional representation and publicly financed campaigns.",
      "locatedEvidenceType": "bounded paraphrase",
      "basis": "declaration",
      "publishedDate": "2024-10-28; byline and original Newsweek date in reproduced item",
      "accessedDate": "2026-10-08",
      "wholeConstructRationale": "Combination concerns competitive plural representation and funding structure across the political system.",
      "counterEvidence": "Reform programme still uses representative institutions; not unrestricted direct government.",
      "uncertainty": "Index-only bylined primary reproduction; no direct page body recovered.",
      "retrievalMode": "indexed",
      "actualReadScope": "Indexed title, byline and substantive first-person article, including final democratic-reform paragraph and foreign-policy paragraph. Direct opens timed out/InternalError; ordinary HTTP download returned 403.",
      "status": "existing_corroborated_with_retrieval_limit"
    },
    {
      "id": "stein-pod-war",
      "axis": "pod",
      "sourceTitle": "Jill Stein — We Do Not Consent to War,04/10/2024",
      "sourceId": "stein-war",
      "url": "https://www.gp.org/we_do_not_consent_to_war",
      "locator": "web line 29, domestic programme list",
      "statement": "Calls for ending mass incarceration and police violence.",
      "locatedEvidenceType": "bounded paraphrase",
      "basis": "declaration",
      "publishedDate": "2024-10-04",
      "accessedDate": "2026-10-08",
      "wholeConstructRationale": "Reaches the general coercive criminal-justice system, but should be combined with civil-liberty evidence for whole-axis coverage.",
      "counterEvidence": "VOTE411 gun policy retains extensive restrictions, registration and preventive measures.",
      "uncertainty": "This alone is too compressed to certify the entire security/privacy/liberty construct.",
      "retrievalMode": "author-recorded-body",
      "actualReadScope": "Entire signed body lines 17–40, publication date line 50.",
      "status": "partial_support_only"
    },
    {
      "id": "stein-pod-mirror",
      "axis": "pod",
      "sourceTitle": "Jill Stein – Green Party 2024 Election Platform | progressiveissuesblog",
      "sourceId": "stein-platform-mirror",
      "url": "https://progressiveissuesblog.com/2024/08/16/jill-stein-green-party-2024-election-platform/",
      "locator": "Democracy lines 156–158; Prisons and Policing lines 174–214",
      "statement": "Copied programme limits censorship, surveillance, punitive detention and police immunity.",
      "locatedEvidenceType": "bounded paraphrase",
      "basis": "declaration",
      "publishedDate": "Host post dated 2024-08-16; copied-platform version/update date not authenticated",
      "accessedDate": "2026-10-08",
      "wholeConstructRationale": "Multiple liberties and coercive mechanisms would support a broad construct if version and personal attribution are independently accepted.",
      "counterEvidence": "Same copied programme retains firearm regulation and prosecution of serious offences.",
      "uncertainty": "Mirror is corroboration of the earlier actually read page, not an independently authenticated replacement. Prior POD should not be freshly re-certified from this alone.",
      "retrievalMode": "mirror",
      "actualReadScope": "Web body lines 8–258 and 268–495, including Democracy, Prisons and Policing, Immigration, Green New Deal and Foreign Policy; authorship description lines 514–519. HTML downloaded but no independent archived snapshot comparison performed.",
      "status": "lead_needs_provenance"
    },
    {
      "id": "stein-dip",
      "axis": "dip",
      "sourceTitle": "Jill Stein — We Do Not Consent to War,04/10/2024",
      "sourceId": "stein-war",
      "url": "https://www.gp.org/we_do_not_consent_to_war",
      "locator": "web lines 21–22 and 29–31",
      "statement": "Replaces militarized foreign policy with diplomacy, international law and reduced military spending.",
      "locatedEvidenceType": "bounded paraphrase",
      "basis": "declaration",
      "publishedDate": "2024-10-04",
      "accessedDate": "2026-10-08",
      "wholeConstructRationale": "A general governing rule beyond one ceasefire demand accompanies the specific conflict stance.",
      "counterEvidence": "Conditional pressure/arms embargo remains; no absolute renunciation of armed defence demonstrated.",
      "uncertainty": "Not evidence of practical foreign-policy execution.",
      "retrievalMode": "author-recorded-body",
      "actualReadScope": "Entire signed body lines 17–40, publication date line 50.",
      "status": "existing_substantively_supported"
    },
    {
      "id": "stein-eco",
      "axis": "eco",
      "sourceTitle": "Jill Stein — respostas próprias VOTE411, edição eleitoral2024",
      "sourceId": "stein-vote411",
      "url": "https://www.vote411.org/node/15061",
      "locator": "healthcare answer lines 87–89; climate answer lines 106–107",
      "statement": "Proposes public ownership of healthcare provision, pharmaceuticals and a nationwide energy grid.",
      "locatedEvidenceType": "bounded paraphrase",
      "basis": "declaration",
      "publishedDate": "2024 presidential candidate questionnaire, individual submission date unstated",
      "accessedDate": "2026-10-08",
      "wholeConstructRationale": "Explicit ownership language across major service/production/infrastructure sectors, not merely single-payer financing.",
      "counterEvidence": "No abolition of all private business or proven majority ownership proposed here.",
      "uncertainty": "Campaign declaration; implementation and economic feasibility not certified.",
      "retrievalMode": "author-recorded-body",
      "actualReadScope": "Candidate identification and 2024 campaign link lines 51–58; entire five-question response body lines 80–109.",
      "status": "existing_substantively_supported"
    },
    {
      "id": "stein-mor-lgbt",
      "axis": "mor",
      "sourceTitle": "Jill Stein — compromisso LGBTQIA, mensagem própria05/06/2024",
      "sourceId": "stein-lgbt",
      "url": "https://www.politicalemails.org/messages/1444477",
      "locator": "policy paragraphs web lines 47–51 and 56–60",
      "statement": "Guarantees LGBTQIA equality, inclusive education and protection of family and health rights.",
      "locatedEvidenceType": "bounded paraphrase",
      "basis": "declaration",
      "publishedDate": "2024-06-05",
      "accessedDate": "2026-10-08",
      "wholeConstructRationale": "Cross-domain changes concern gender/sexuality and customary exclusion, to be read with reproductive autonomy.",
      "counterEvidence": "Named legislation is not read clause by clause; do not infer every provision solely from its title.",
      "uncertainty": "External nominal email archive; campaign promise, not law.",
      "retrievalMode": "mirror",
      "actualReadScope": "Sender, campaign payment and date lines 24–29; full body lines 40–60; signature/footer lines 60–64.",
      "status": "existing_substantively_supported"
    },
    {
      "id": "stein-mor-abortion",
      "axis": "mor",
      "sourceTitle": "Jill Stein — autonomia reprodutiva, mensagem própria19/10/2024",
      "sourceId": "stein-reproductive",
      "url": "https://politicalemails.org/messages/1606639",
      "locator": "web lines 66–70",
      "statement": "Guarantees freely available abortion and rejects forced continued pregnancy.",
      "locatedEvidenceType": "bounded paraphrase",
      "basis": "declaration",
      "publishedDate": "2024-10-19",
      "accessedDate": "2026-10-08",
      "wholeConstructRationale": "Complements sexual/gender/family equality rather than pretending one abortion sentence represents all morality.",
      "counterEvidence": "Not a general rejection of tradition or unrestricted agreement with every progressive policy.",
      "uncertainty": "Policy commitment only; medical and historical rhetoric excluded.",
      "retrievalMode": "mirror",
      "actualReadScope": "Sender/date lines 24–29; body lines 40–72; footer lines 73–76.",
      "status": "existing_substantively_supported"
    },
    {
      "id": "stein-int-lead",
      "axis": "int",
      "sourceTitle": "Jill Stein – Green Party 2024 Election Platform | progressiveissuesblog",
      "sourceId": "stein-platform-mirror",
      "url": "https://progressiveissuesblog.com/2024/08/16/jill-stein-green-party-2024-election-platform/",
      "locator": "Foreign Policy lines 472–490",
      "statement": "Copied programme ends foreign military interventions, most overseas bases and regime-change efforts.",
      "locatedEvidenceType": "bounded paraphrase",
      "basis": "declaration",
      "publishedDate": "Host post dated 2024-08-16; copied-platform version/update date not authenticated",
      "accessedDate": "2026-10-08",
      "wholeConstructRationale": "Would be broader than opposition to one war and fits external involvement, while diplomatic cooperation remains.",
      "counterEvidence": "Keeps international aid, law enforcement of rights, and targeted pressure; INT is not isolation from diplomacy.",
      "uncertainty": "Uncorroborated exact mirror version; hold until own dated source confirms full commitment.",
      "retrievalMode": "mirror",
      "actualReadScope": "Web body lines 8–258 and 268–495, including Democracy, Prisons and Policing, Immigration, Green New Deal and Foreign Policy; authorship description lines 514–519. HTML downloaded but no independent archived snapshot comparison performed.",
      "status": "lead_needs_provenance"
    },
    {
      "id": "stein-con-lead",
      "axis": "con",
      "sourceTitle": "Jill Stein – Green Party 2024 Election Platform | progressiveissuesblog",
      "sourceId": "stein-platform-mirror",
      "url": "https://progressiveissuesblog.com/2024/08/16/jill-stein-green-party-2024-election-platform/",
      "locator": "Real Green New Deal lines 399–407; agriculture line 453",
      "statement": "Copied programme prescribes public planning across energy, transportation, manufacturing, housing and agricultural supply.",
      "locatedEvidenceType": "bounded paraphrase",
      "basis": "declaration",
      "publishedDate": "Host post dated 2024-08-16; copied-platform version/update date not authenticated",
      "accessedDate": "2026-10-08",
      "wholeConstructRationale": "General coordination mechanism is substantially broader than rent controls or one agency.",
      "counterEvidence": "Mirrored labour/economy sections retain cooperatives, small businesses and some markets.",
      "uncertainty": "Cannot elevate until source version/attribution is independently verified.",
      "retrievalMode": "mirror",
      "actualReadScope": "Web body lines 8–258 and 268–495, including Democracy, Prisons and Policing, Immigration, Green New Deal and Foreign Policy; authorship description lines 514–519. HTML downloaded but no independent archived snapshot comparison performed.",
      "status": "lead_needs_provenance"
    },
    {
      "id": "stein-tec-lead",
      "axis": "tec",
      "sourceTitle": "Jill Stein – Green Party 2024 Election Platform | progressiveissuesblog",
      "sourceId": "stein-platform-mirror",
      "url": "https://progressiveissuesblog.com/2024/08/16/jill-stein-green-party-2024-election-platform/",
      "locator": "climate lines 425–437; agriculture lines 448–460",
      "statement": "Copied programme pairs technical renewables with precautionary review and restrictions on nuclear/geoengineering approaches.",
      "locatedEvidenceType": "bounded paraphrase",
      "basis": "declaration",
      "publishedDate": "Host post dated 2024-08-16; copied-platform version/update date not authenticated",
      "accessedDate": "2026-10-08",
      "wholeConstructRationale": "A general precautionary principle could balance cross-sector technical adoption.",
      "counterEvidence": "Renewables, storage, rail and smart-grid investment are material pro-technology counterevidence.",
      "uncertainty": "Avoid equating environmentalism with anti-technology. Whole-axis mapping and copied-version provenance remain unresolved.",
      "retrievalMode": "mirror",
      "actualReadScope": "Web body lines 8–258 and 268–495, including Democracy, Prisons and Policing, Immigration, Green New Deal and Foreign Policy; authorship description lines 514–519. HTML downloaded but no independent archived snapshot comparison performed.",
      "status": "lead_needs_provenance"
    }
  ],
  "jeannette-jara": [
    {
      "id": "jara-rep",
      "axis": "rep",
      "sourceTitle": "Jeannette Jara — Un Chile que cumple, agosto2025",
      "sourceId": "jara-62",
      "url": "https://centrocompetencia.com/wp-content/uploads/2025/09/Programa_Jeannette_Jara_2025.pdf",
      "locator": "pp. 3–4 signed presentation; pp. 6–7, especially dialogue with those who think differently",
      "statement": "Rejects authoritarian personalism; commits to plural dialogue, citizen participation and democratic government.",
      "locatedEvidenceType": "bounded paraphrase",
      "basis": "declaration",
      "publishedDate": "2025-08, explicitly on cover; no exact production day certified",
      "accessedDate": "2026-10-08",
      "wholeConstructRationale": "The signed account makes participation and legitimate political disagreement a general governing principle rather than an isolated consultation.",
      "counterEvidence": "No detailed electoral constitution or unrestricted direct-democracy mechanism is supplied.",
      "uncertainty": "Programme commitment only; the exact institutional intensity is editorial.",
      "retrievalMode": "mirror",
      "actualReadScope": "62-page PDF: cover; signed pp. 3–4 and introductory pp. 6–7; pp. 8–18; p. 19 trade-policy section (earlier financing continuation only partially read); pp. 20–42; pp. 50–52, 59 and 61. Text extracted by pdftotext -layout from downloaded PDF. Pages 43 and 49 appeared only partially in a truncated output and are not relied on. Remaining pages were not substantively read.",
      "status": "existing_substantively_supported"
    },
    {
      "id": "jara-pod",
      "axis": "pod",
      "sourceTitle": "Jeannette Jara — Un Chile que cumple, agosto2025",
      "sourceId": "jara-62",
      "url": "https://centrocompetencia.com/wp-content/uploads/2025/09/Programa_Jeannette_Jara_2025.pdf",
      "locator": "pp. 24–32, security programme; measures 63–65, 70–79, 82–98",
      "statement": "Expands biometric surveillance, armed border enforcement, financial investigation, police capacity and prisons.",
      "locatedEvidenceType": "bounded paraphrase",
      "basis": "declaration",
      "publishedDate": "2025-08, explicitly on cover; no exact production day certified",
      "accessedDate": "2026-10-08",
      "wholeConstructRationale": "This spans several mechanisms of public coercion, personal-data access and territorial policing; much broader than an agency mandate.",
      "counterEvidence": "p. 27 measure 72 binds biometrics to data-protection law; p. 29 measure 82 requires civilian control; pp. 29–34 emphasize reintegration and social prevention.",
      "uncertainty": "Not evidence of indiscriminate surveillance, actual deployment or rejection of civil rights.",
      "retrievalMode": "mirror",
      "actualReadScope": "62-page PDF: cover; signed pp. 3–4 and introductory pp. 6–7; pp. 8–18; p. 19 trade-policy section (earlier financing continuation only partially read); pp. 20–42; pp. 50–52, 59 and 61. Text extracted by pdftotext -layout from downloaded PDF. Pages 43 and 49 appeared only partially in a truncated output and are not relied on. Remaining pages were not substantively read.",
      "status": "existing_substantively_supported"
    },
    {
      "id": "jara-com",
      "axis": "com",
      "sourceTitle": "Jeannette Jara — Un Chile que cumple, agosto2025",
      "sourceId": "jara-62",
      "url": "https://centrocompetencia.com/wp-content/uploads/2025/09/Programa_Jeannette_Jara_2025.pdf",
      "locator": "p. 9 trade agreements; pp. 19–20, Exportaciones y política comercial, measures 48–51",
      "statement": "Expands rules-based trade, existing agreements, export markets and regional economic integration.",
      "locatedEvidenceType": "bounded paraphrase",
      "basis": "declaration",
      "publishedDate": "2025-08, explicitly on cover; no exact production day certified",
      "accessedDate": "2026-10-08",
      "wholeConstructRationale": "The entire trade-policy section governs international economic integration rather than a tariff exception or single export.",
      "counterEvidence": "Targeted industrial promotion and domestic value-added development remain part of the approach.",
      "uncertainty": "Does not promise universal zero tariffs or prove trade outcomes.",
      "retrievalMode": "mirror",
      "actualReadScope": "62-page PDF: cover; signed pp. 3–4 and introductory pp. 6–7; pp. 8–18; p. 19 trade-policy section (earlier financing continuation only partially read); pp. 20–42; pp. 50–52, 59 and 61. Text extracted by pdftotext -layout from downloaded PDF. Pages 43 and 49 appeared only partially in a truncated output and are not relied on. Remaining pages were not substantively read.",
      "status": "existing_substantively_supported"
    },
    {
      "id": "jara-tec",
      "axis": "tec",
      "sourceTitle": "Jeannette Jara — Un Chile que cumple, agosto2025",
      "sourceId": "jara-62",
      "url": "https://centrocompetencia.com/wp-content/uploads/2025/09/Programa_Jeannette_Jara_2025.pdf",
      "locator": "pp. 11–18 measures 7, 10–18, 26–29; pp. 26–28 measures 70–75; pp. 37–42 measures 112–126",
      "statement": "Uses digital networks, AI, advanced production and telemedicine as cross-sector solutions.",
      "locatedEvidenceType": "bounded paraphrase",
      "basis": "declaration",
      "publishedDate": "2025-08, explicitly on cover; no exact production day certified",
      "accessedDate": "2026-10-08",
      "wholeConstructRationale": "Specific adoption spans infrastructure, industrial processes, administration, security and health; not generic support for research alone.",
      "counterEvidence": "pp. 9–10 retain environmental safeguards; pp. 13–15 protect ecosystems and water; p. 27 personal-data law constrains biometrics.",
      "uncertainty": "Supports qualified technological adoption, not unconditional acceptance of every biomedical or environmental intervention.",
      "retrievalMode": "mirror",
      "actualReadScope": "62-page PDF: cover; signed pp. 3–4 and introductory pp. 6–7; pp. 8–18; p. 19 trade-policy section (earlier financing continuation only partially read); pp. 20–42; pp. 50–52, 59 and 61. Text extracted by pdftotext -layout from downloaded PDF. Pages 43 and 49 appeared only partially in a truncated output and are not relied on. Remaining pages were not substantively read.",
      "status": "existing_substantively_supported"
    },
    {
      "id": "jara-eco-direct-check",
      "axis": "eco",
      "sourceTitle": "Un Chile que cumple — Lineamientos Programáticos, Jeannette Jara Román, agosto 2025 (PC Chile 74-page layout)",
      "sourceId": "jara-74",
      "url": "https://pcchile.cl/wp-content/uploads/2025/08/Lineamientos-programa%CC%81ticos-J.-jara.pdf",
      "locator": "physical p. 11 measure 9; p. 14 lithium paragraph; p. 63 measure 150; pp. 71–73 education paragraphs",
      "statement": "The party-hosted layout repeats public rail, lithium, real-estate and education commitments.",
      "locatedEvidenceType": "bounded paraphrase",
      "basis": "declaration",
      "publishedDate": "2025-08 on title; linked by article dated 2025-08-18",
      "accessedDate": "2026-10-08",
      "wholeConstructRationale": "Corroborates the specific ownership/provision clauses in the supplied 62-page edition.",
      "counterEvidence": "The same paragraphs retain public-private partnerships and participation.",
      "uncertainty": "Only specified passages collated, not the whole 74-page document; do not replace pagination silently.",
      "retrievalMode": "direct",
      "actualReadScope": "PDF web text lines 0–372 (physical pp. 1–12, last page only opening); local extracted targeted paragraphs on physical pp. 14, 63, 71–73 concerning lithium, public real estate and public education. No full-document equivalence comparison claimed.",
      "status": "corroboration_only"
    }
  ],
  "rashida-tlaib": [
    {
      "id": "tlaib-rep-narrow",
      "axis": "rep",
      "sourceTitle": "Justice for All",
      "sourceId": "tlaib-justice",
      "url": "https://tlaib.house.gov/resources/justice",
      "locator": "My Position first paragraph, line 27",
      "statement": "Protects voting rights.",
      "locatedEvidenceType": "bounded paraphrase",
      "basis": "declaration",
      "publishedDate": "Undated; explicitly references Justice for All Act of 2023",
      "accessedDate": "2026-10-08",
      "wholeConstructRationale": "Directly relevant component but the located statement is too brief to establish the entire representation/pluralism construct independently.",
      "counterEvidence": "No contrary autocratic preference found in this bounded read.",
      "uncertainty": "Do not infer a detailed democratic architecture from officeholding, partisan identity, or a single voting-rights sentence.",
      "retrievalMode": "direct",
      "actualReadScope": "Entire substantive body lines 26–40, including all seven numbered programme items.",
      "status": "existing_not_whole_construct_certified"
    },
    {
      "id": "tlaib-imi-narrow",
      "axis": "imi",
      "sourceTitle": "Justice for All",
      "sourceId": "tlaib-justice",
      "url": "https://tlaib.house.gov/resources/justice",
      "locator": "My Position lines 27–28",
      "statement": "Welcomes district diversity and seeks an improved citizenship pathway.",
      "locatedEvidenceType": "bounded paraphrase",
      "basis": "declaration",
      "publishedDate": "Undated; explicitly references Justice for All Act of 2023",
      "accessedDate": "2026-10-08",
      "wholeConstructRationale": "Diversity and inclusion are relevant, but no broad national immigration/cultural integration regime is prescribed.",
      "counterEvidence": "No assimilation mandate found; absence is not a measured neutral position.",
      "uncertainty": "A local demographic appreciation plus citizenship access does not by itself resolve the whole axis.",
      "retrievalMode": "direct",
      "actualReadScope": "Entire substantive body lines 26–40, including all seven numbered programme items.",
      "status": "existing_not_whole_construct_certified"
    },
    {
      "id": "tlaib-dip-yemen",
      "axis": "dip",
      "sourceTitle": "Tlaib, Khanna Lead Letter Urging President Biden to Support Ending War in Yemen",
      "sourceId": "tlaib-yemen",
      "url": "https://tlaib.house.gov/posts/tlaib-khanna-lead-letter-urging-president-biden-to-support-ending-war-in-yemen",
      "locator": "six letter demands, web lines 26–32",
      "statement": "Supports a negotiated Yemen settlement, ending war support and preserving an arms embargo.",
      "locatedEvidenceType": "bounded paraphrase",
      "basis": "declaration",
      "publishedDate": "2023-05-18",
      "accessedDate": "2026-10-08",
      "wholeConstructRationale": "Concrete corroboration for general diplomacy preference, not enough alone for the entire axis.",
      "counterEvidence": "Maintains UN embargo and active U.S. diplomatic/humanitarian involvement.",
      "uncertainty": "Only official release read, not complete underlying letter; factual war allegations not certified.",
      "retrievalMode": "direct",
      "actualReadScope": "Web lines 17–32; indexed full article also exposed Tlaib quote and remainder. Underlying letter not opened.",
      "status": "bounded_corroboration"
    },
    {
      "id": "tlaib-eco-bank",
      "axis": "eco",
      "sourceTitle": "Public Banking Act of 2023 — TLAIB_059.XML office draft",
      "sourceId": "tlaib-bank-draft",
      "url": "https://d12t4t5x3vyizu.cloudfront.net/tlaib.house.gov/uploads/2023/12/TLAIB_059_xml-1.pdf",
      "locator": "sec. 101(b)–(c), physical pp. 6–7; sec. 104 purpose, physical p. 11",
      "statement": "Creates banks wholly owned/controlled by public or qualifying nonprofit entities, excluding for-profit affiliation.",
      "locatedEvidenceType": "bounded paraphrase",
      "basis": "norm",
      "publishedDate": "Draft footer 2023-12-12 09:12; office announcement 2023-12-13",
      "accessedDate": "2026-10-08",
      "wholeConstructRationale": "Genuine ownership/provision evidence for finance, not financing mislabeled as ownership.",
      "counterEvidence": "Finance is one sector. Programme supports small-business credit and does not nationalize private banks generally.",
      "uncertainty": "Not sufficient alone for the whole public/private economic construct; housing/health baseline adds affordability, not ownership.",
      "retrievalMode": "direct",
      "actualReadScope": "58-page PDF web text lines 0–355, physical pp. 1–14 (p. 15 heading only). Covers title, definitions and early Title I. No full bill read.",
      "status": "sectoral_lead_only"
    }
  ]
};
export const native14PublicFiguresNewSources:Record<string,ReferenceSource[]>={
  "jill-stein": [
    {
      "title": "Jill Stein — respostas próprias VOTE411, edição eleitoral2024 — edição eleitoral2024",
      "url": "https://www.vote411.org/node/15061",
      "note": "Identificação52–58 e todas respostas80–109 reabertas em texto direto. Propostas datadas, sem renovação integral em 2026 ou implementação inferida."
    },
    {
      "title": "Biden’s deportation scheme puts children’s lives at risk — Jill Stein — reprodução nominal de 11/06/2024",
      "url": "https://www.politicalemails.org/messages/1451324",
      "note": "Cabeçalho24–29, corpo40–61 e assinatura/rodapé62–68 recuperados em texto direto; a coleta anterior tinha somente corpo indexado. Não imagem nem autenticação criptográfica. Propostas datadas, sem renovação integral em 2026 ou implementação inferida."
    }
  ],
  "jeannette-jara": [
    {
      "title": "Jeannette Jara — Un Chile que cumple, agosto2025 — edição agosto2025, layout62p",
      "url": "https://centrocompetencia.com/wp-content/uploads/2025/09/Programa_Jeannette_Jara_2025.pdf",
      "note": "Texto PDF62p selecionado: capa e apresentação0–121; fundamentos148–264; mineração311–350; setores418–498; comércio525–627; segurança796–911/920–1114; saúde1160–1224; imobiliário1646–1717; educação1852–1933/1951–2006. Não leitura integral nem equivalência com layout74p. Propostas datadas, sem renovação integral em 2026 ou implementação inferida."
    }
  ],
  "rashida-tlaib": [
    {
      "title": "Justice for All Act of 2023 — TLAIB_009.XML office draft — edição 2023",
      "url": "https://d12t4t5x3vyizu.cloudfront.net/tlaib.house.gov/uploads/2023/02/TLAIB_009_xml.pdf",
      "note": "Texto PDF55p selecionado: seção5,716–798; seção6,861–946; seção9 e disposições finais1109–1240. Versão da minuta de 31/01/2023; endosso pela página Justice for All26–40. Não lei aprovada nem leitura de todo projeto. Propostas datadas, sem renovação integral em 2026 ou implementação inferida."
    },
    {
      "title": "Tlaib Joins Bush in Introducing Historic Bill to End Solitary Confinement — edição 2023",
      "url": "https://tlaib.house.gov/posts/tlaib-joins-bush-in-introducing-historic-bill-to-end-solitary-confinement",
      "note": "Título/data17–19, endosso próprio24 e disposições36–42 lidos diretamente. Falas de outros autores excluídas. Projeto completo não lido. Propostas datadas, sem renovação integral em 2026 ou implementação inferida."
    },
    {
      "title": "Tlaib Statement on Republicans’ Extreme Anti-Abortion Care Agenda — edição 2023",
      "url": "https://tlaib.house.gov/posts/tlaib-statement-on-republicans-extreme-anti-abortion-care-agenda",
      "note": "Declaração própria completa recuperada no índice oficial; reabertura direta retornou InternalError. Data11/01/2023. Acusações e resultados não certificados. Propostas datadas, sem renovação integral em 2026 ou implementação inferida."
    },
    {
      "title": "Tlaib Opposes More Funding for Weapons, Never Enough to Feed the Poor — edição 2023",
      "url": "https://tlaib.house.gov/posts/tlaib-opposes-more-funding-for-weapons-never-enough-to-feed-the-poor",
      "note": "Data19 e declaração própria22–26 lidas diretamente; preferência geral por diplomacia26. Voto e números não auditados. Propostas datadas, sem renovação integral em 2026 ou implementação inferida."
    }
  ]
};
export const native14PublicFiguresRecipes:Record<string,ReferenceAxisCoding[]>={
  "jill-stein": [
    {
      "axis": "imi",
      "position": "moderate-second",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Jill Stein — respostas próprias VOTE411, edição eleitoral2024 — edição eleitoral2024",
          "locator": "VOTE411, resposta migratória99–101; identificação52–58.",
          "statement": "Propõe substituir a prioridade de detenção por acolhimento de asilo, anistia ampla e acesso à cidadania.",
          "basis": "declaration",
          "publishedDate": "Edição eleitoral presidencial de 2024; submissão sem dia indicado",
          "accessedDate": "2026-10-08"
        },
        {
          "sourceTitle": "Biden’s deportation scheme puts children’s lives at risk — Jill Stein — reprodução nominal de 11/06/2024",
          "locator": "Email11/06/2024: própria55–61; cabeçalho24–29 e assinatura/rodapé62–68.",
          "statement": "Acolhe imigrantes de todos os tipos como enriquecimento das comunidades e defende asilo humanitário e cidadania.",
          "basis": "declaration",
          "publishedDate": "11/06/2024,23h36 no arquivo; fuso não indicado",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "Acolhimento migratório amplo combina reforma nacional de admissão e cidadania com valorização explícita da diversidade das comunidades; direção multicultural moderada, sem programa de autonomia cultural irrestrita.",
      "uncertainty": "VOTE41195–96 conserva registros de armas, verificações e medidas preventivas. Email nominal externo completo foi recuperado diretamente nesta revisão, inclusive assinatura, mas não há autenticação criptográfica nem inspeção visual. Campanha de 2024, sem renovação2026.",
      "reviewedOn": "2026-10-08"
    }
  ],
  "jeannette-jara": [
    {
      "axis": "eco",
      "position": "moderate-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Jeannette Jara — Un Chile que cumple, agosto2025 — edição agosto2025, layout62p",
          "locator": "PDF62p: medida9,p11/260–264; mineração e lítio,p13/321–332; medida150,p52/1684–1691; educação,p59/1923–1933 e p61/1978–1986.",
          "statement": "Amplia operadores públicos ferroviários e minerais, cria atuação imobiliária pública e expande a rede pública de educação, preservando empresas e prestadores privados.",
          "basis": "declaration",
          "publishedDate": "Agosto de 2025,layout de62p; dia não indicado",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "Expansão pública proposta em transporte, mineração, operação imobiliária e educação ultrapassa financiamento de um setor; direção pública moderada dentro de uma economia mista.",
      "uncertainty": "Investimento privado é indispensável172–182; simplificação190–194 e criação de mercado de armazenamento283–285 são contrapontos materiais. Coordenação pública não significa plano compulsório sobre toda decisão privada. Recursos e operadores públicos não demonstram maioria pública nacional. Edição62p de agosto2025, sem fundir layout74p ou programas de outros meses.",
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "con",
      "position": "moderate-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Jeannette Jara — Un Chile que cumple, agosto2025 — edição agosto2025, layout62p",
          "locator": "PDF62p:p8–10/148–228, orientação geral e medidas1–5; p12/270–285; p16–18/418–498, políticas multissetoriais. Contrapontos172–182/190–194/283–285.",
          "statement": "Propõe orientação estratégica estatal e coordenação nacional de prioridades de investimento público e privado, articuladas a políticas produtivas multissetoriais.",
          "basis": "declaration",
          "publishedDate": "Agosto de 2025,layout de62p; dia não indicado",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "O programa articula orientação estratégica estatal, priorização conjunta de investimento e políticas produtivas em vários setores; direção moderada de coordenação, preservando mercados e decisões privadas.",
      "uncertainty": "Investimento privado é indispensável172–182; simplificação190–194 e criação de mercado de armazenamento283–285 são contrapontos materiais. Coordenação pública não significa plano compulsório sobre toda decisão privada. Recursos e operadores públicos não demonstram maioria pública nacional. Edição62p de agosto2025, sem fundir layout74p ou programas de outros meses.",
      "reviewedOn": "2026-10-08"
    }
  ],
  "rashida-tlaib": [
    {
      "axis": "pod",
      "position": "moderate-second",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Justice for All Act of 2023 — TLAIB_009.XML office draft — edição 2023",
          "locator": "Minuta31/01/2023: seção5,p32–35/716–798; seção9,p50–53/1119–1200; exceção investigativa742–749.",
          "statement": "Propõe limites a perfilamento, buscas e investigação e responsabilização de agentes públicos por violações constitucionais em vários níveis de governo.",
          "basis": "norm",
          "publishedDate": "Minuta de31/01/2023,11h21; proposta não aprovada",
          "accessedDate": "2026-10-08"
        },
        {
          "sourceTitle": "Tlaib Joins Bush in Introducing Historic Bill to End Solitary Confinement — edição 2023",
          "locator": "Comunicado27/07/2023: endosso próprio24 e disposições36–42; exceções37/39.",
          "statement": "Endossa limites ao isolamento prisional, justiça restaurativa, devido processo e fiscalização da detenção.",
          "basis": "declaration",
          "publishedDate": "2023-07-27",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "Limites nacionais à coerção investigativa e à imunidade oficial, associados a tratamento prisional e devido processo, sustentam liberdade moderada além de uma proibição isolada.",
      "uncertainty": "Propostas de 2023 endossadas pelo gabinete, não leis vigentes. Perfilamento admite informação confiável ligada a pessoa/incidente742–749; polícia e processo penal permanecem. Isolamento permite desescalada de4horas e separação mais longa com direitos37/39. Igualdade de gênero não transforma gravidez em regra de aborto; declaração11/01/2023 é distinta. Diplomacia não renuncia a toda defesa armada.",
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "mor",
      "position": "moderate-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Justice for All Act of 2023 — TLAIB_009.XML office draft — edição 2023",
          "locator": "Minuta31/01/2023: seção6,p39–41/861–925; identidade de gênero865–867; definições881–907.",
          "statement": "Propõe igualdade jurídica para orientação sexual, identidade de gênero e características sexuais, incluindo acesso a instalações segundo a identidade de gênero.",
          "basis": "norm",
          "publishedDate": "Minuta de31/01/2023,11h21; proposta não aprovada",
          "accessedDate": "2026-10-08"
        },
        {
          "sourceTitle": "Tlaib Statement on Republicans’ Extreme Anti-Abortion Care Agenda — edição 2023",
          "locator": "Comunicado11/01/2023, segundo parágrafo próprio completo; corpo oficial recuperado no índice após falha direta.",
          "statement": "Defende autonomia corporal e restauração nacional do acesso ao aborto.",
          "basis": "declaration",
          "publishedDate": "2023-01-11",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "Igualdade sexual e de gênero em direitos civis soma-se à autonomia reprodutiva; direção emancipatória moderada em vários domínios, não rejeição de toda tradição.",
      "uncertainty": "Propostas de 2023 endossadas pelo gabinete, não leis vigentes. Perfilamento admite informação confiável ligada a pessoa/incidente742–749; polícia e processo penal permanecem. Isolamento permite desescalada de4horas e separação mais longa com direitos37/39. Igualdade de gênero não transforma gravidez em regra de aborto; declaração11/01/2023 é distinta. Diplomacia não renuncia a toda defesa armada.",
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "dip",
      "position": "moderate-second",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Tlaib Opposes More Funding for Weapons, Never Enough to Feed the Poor — edição 2023",
          "locator": "Comunicado14/12/2023: própria22–26, regra geral final26.",
          "statement": "Prioriza diplomacia e paz sobre a militarização e propõe reduzir despesas militares.",
          "basis": "declaration",
          "publishedDate": "2023-12-14",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A declaração apresenta regra geral de preferência por diplomacia e paz e redução militar, além de criticar uma dotação orçamentária específica.",
      "uncertainty": "Propostas de 2023 endossadas pelo gabinete, não leis vigentes. Perfilamento admite informação confiável ligada a pessoa/incidente742–749; polícia e processo penal permanecem. Isolamento permite desescalada de4horas e separação mais longa com direitos37/39. Igualdade de gênero não transforma gravidez em regra de aborto; declaração11/01/2023 é distinta. Diplomacia não renuncia a toda defesa armada.",
      "reviewedOn": "2026-10-08"
    }
  ]
};
export const native14PublicFiguresProposals:ReferenceEntry[]=native14PublicFiguresBefore.map(before=>{
 const after=structuredClone(before);after.sources.push(...structuredClone(native14PublicFiguresNewSources[before.id]));
 if(before.id==='rashida-tlaib'){
  after.vec=Object.fromEntries(keys.map(k=>[k,50])) as ReferenceEntry['vec'];after.evidence={};after.axisEvidence={};after.coding={};
  after.period='Agenda do gabinete: Justice for All de 2023 e página Ending Poverty sem data; declarações e propostas distintas de 11/01,27/07 e14/12/2023 acrescentadas; atividade nominal2026 apenas identidade.';
  after.rationale='Defende limites à coerção policial e prisional, igualdade sexual e de gênero, autonomia corporal e preferência por diplomacia.';
  after.caveats='Propostas próprias e coletivamente endossadas de 2023, sem execução ou renovação em 2026. O voto e a cidadania da página original são pesquisa parcial, sem desenho nacional suficiente para graduar os eixos. Propriedade bancária pública é setorial; financiamento de serviços e regulações isoladas não estabelecem regime geral econômico. Objetos, fontes e códigos anteriores íntegros preservados no arquivo. Fontes datadas adicionais não são tratadas como parte da página sem data.';
 }else if(before.id==='jill-stein'){
  after.rationale='Defende democracia, liberdades civis, acolhimento migratório plural, igualdade sexual e de gênero, diplomacia e expansão pública.';
  after.caveats=before.caveats+' A declaração migratória nominal de 11/06/2024 soma reforma nacional de admissão e valorização da diversidade. A fonte externa preserva corpo e assinatura, sem autenticação criptográfica. O fundamento amplo de liberdades da página Democracy depende da leitura anterior documentada; esta revisão não recuperou novamente esse corpo e não usa blog externo como substituto autenticado.';
 }else{
  after.rationale='Propõe democracia plural, segurança com vigilância regulada, expansão de operadores públicos, coordenação produtiva, comércio e inovação.';
  after.caveats='Programa endossado de agosto de 2025, layout62p, sem execução ou renovação em 2026. Coordenação e expansão públicas são moderadas em economia mista: investimento, propriedade e prestadores privados permanecem. A versão74p é distinta e não foi substituída silenciosamente. Fontes, vetor e códigos anteriores completos preservados no arquivo. Demais eixos continuam desconhecidos.';
 }
 for(const recipe of native14PublicFiguresRecipes[before.id]){const c=codeReferenceAxis(recipe,after.sources);after.vec[recipe.axis]=c.value;after.evidence[recipe.axis]=c.evidence;after.axisEvidence![recipe.axis]=c.axisEvidence;after.coding![recipe.axis]=c.coding;}
 return after;
});
export function reconcileNative14PublicFigures(entry:ReferenceEntry):ReferenceEntry{
 const i=native14PublicFiguresBefore.findIndex(b=>b.id===entry.id);if(i<0)return entry;
 const post=native14PublicFiguresProposals[i];if(JSON.stringify(entry)===JSON.stringify(post))return entry;
 if(JSON.stringify(entry)!==JSON.stringify(native14PublicFiguresBefore[i]))throw Error('Native14 public whole-record guard mismatch: '+entry.id);
 return structuredClone(post);
}
