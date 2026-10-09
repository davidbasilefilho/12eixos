import type {ReferenceEntry,ReferenceSource} from './references';
import {codeReferenceAxis,type ReferenceAxisCoding} from '../lib/reference-coding';
export const ranking675Public04Before: ReferenceEntry[] = [
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
      }
    ],
    "caveats": "Quatro direções documentais delimitadas aceitas por revisão independente e Root; oito eixos desconhecidos. Candidatura/partido não transferem plataforma integral. Blog externo de reprodução sem atribuição específica corroborada permanece pesquisa não graduada. Fonte2026 apenas identidade, não política2024 renovada nem presença futura em audiência.",
    "rationale": "Defende escolha eleitoral e diplomacia, com expansão da propriedade pública, controles de aluguel e redistribuição tributária.",
    "vec": {
      "est": 50,
      "rep": 60,
      "pod": 50,
      "imi": 50,
      "dip": 40,
      "int": 50,
      "eco": 60,
      "con": 60,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "rep": "medium",
      "dip": "medium",
      "eco": "medium",
      "con": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Jill Stein — declaração própria no guia oficial da Califórnia2024"
        ],
        "rationale": "Representação democrática. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Declaração, não execução eleitoral."
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
      "con": {
        "sourceTitles": [
          "Jill Stein — We Do Not Consent to War,04/10/2024"
        ],
        "rationale": "Alocação regulada multissetorial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não planejamento integral; direção dos outros mercados não determinada."
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
          }
        ],
        "rationale": "Representação democrática.",
        "uncertainty": "Declaração, não execução eleitoral.",
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
      "con": {
        "axis": "con",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Jill Stein — We Do Not Consent to War,04/10/2024",
            "locator": "Texto linhas29–31; assinatura40",
            "statement": "Propõe controles nacionais de aluguel, salário mínimo e tributação redistributiva.",
            "basis": "declaration",
            "publishedDate": "2024-10-04",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Alocação regulada multissetorial.",
        "uncertainty": "Não planejamento integral; direção dos outros mercados não determinada.",
        "relatedQuestionIds": [
          "controle_01",
          "controle_02",
          "controle_05",
          "controle_19"
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
export const ranking675Public04NewSources: ReferenceSource[] = [
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
];
export const ranking675Public04Coding: ReferenceAxisCoding[] = [
  {
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
    "reviewedOn": "2026-10-08"
  },
  {
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
    "reviewedOn": "2026-10-08"
  },
  {
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
    "reviewedOn": "2026-10-08"
  },
  {
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
    "reviewedOn": "2026-10-08"
  },
  {
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
    "reviewedOn": "2026-10-08"
  }
];
export const ranking675Public04Proposed: ReferenceEntry[] = ranking675Public04Before.map(before=>{
 const after=structuredClone(before);after.sources.push(...structuredClone(ranking675Public04NewSources));
 after.vec.con=50;after.evidence={};after.axisEvidence={};after.coding={};
 after.rationale='Defende participação popular, liberdades civis, igualdade sexual e de gênero, diplomacia e expansão pública na economia.';
 after.caveats='Compromissos próprios de campanha2024, não execução ou renovação em2026. Controles de aluguel e salário não estabelecem a regra geral de alocação econômica. Fontes, códigos anteriores e proposta retirada completos preservados no arquivo. Página pessoal lida antes de posterior404; emails reproduzidos nominalmente por arquivo externo sem autenticação criptográfica.';
 for(const input of ranking675Public04Coding){const coded=codeReferenceAxis(input,after.sources);after.vec[input.axis]=coded.value;after.evidence[input.axis]=coded.evidence;after.axisEvidence![input.axis]=coded.axisEvidence;after.coding![input.axis]=coded.coding;}
 return after;
});
export function reconcileRanking675Public04(entry:ReferenceEntry):ReferenceEntry{
 const index=ranking675Public04Before.findIndex(x=>x.id===entry.id);if(index<0)return entry;
 const post=ranking675Public04Proposed[index];if(JSON.stringify(entry)===JSON.stringify(post))return entry;
 if(JSON.stringify(entry)!==JSON.stringify(ranking675Public04Before[index]))throw new Error('Ranking public04 whole prior object changed: '+entry.id);
 return structuredClone(post);
}
