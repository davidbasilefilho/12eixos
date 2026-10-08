import type { ReferenceEntry } from './references';
import { codeReferenceAxis } from '../lib/reference-coding';

// Literal active record before the narrowly accepted locator correction.
export const historicalExistingCoverage01Before = {
  "id": "spanish-second-republic",
  "kind": "country",
  "category": "historical-country",
  "name": "Espanha — Segunda República",
  "period": "República, 1931–1939; recorte adicional: Desenho da carta fundadora1931, antes das alterações e da Guerra Civil; não prática homogênea1931–1939.",
  "vec": {
    "est": 40,
    "rep": 60,
    "pod": 40,
    "imi": 50,
    "dip": 40,
    "int": 50,
    "eco": 50,
    "con": 50,
    "com": 50,
    "rel": 60,
    "mor": 60,
    "tec": 50
  },
  "rationale": "Carta1931 recodificada em inferências normativas delimitadas; vetor bruto, entrada integrada e fontes anteriores preservados no módulo de cobertura08.",
  "caveats": "Recorte institucional datado; não representa a população, povos subordinados nem governos fora do período. Guerra Civil marca etapa final; governos sucessivos não são homogêneos. Eixos sem evidência suficiente permanecem em 50 como desconhecidos. Ampliação documental: Desenho da carta fundadora1931, antes das alterações e da Guerra Civil; não prática homogênea1931–1939. Sem auditoria integral da prática histórica. Passagens adicionais cotejadas independentemente; prática histórica não auditada integralmente.",
  "sources": [
    {
      "title": "Constituição espanhola de 1931",
      "url": "https://www.boe.es/gazeta/dias/1931/12/09/pdfs/D00001-00014.pdf",
      "note": "Documento primário ou registro de arquivo relacionado ao período República, 1931–1939; codificamos somente posições expressas ou instituições descritas."
    },
    {
      "title": "Congreso de los Diputados — Constituição de 1931",
      "url": "https://www.congreso.es/cem/const1931",
      "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
    },
    {
      "title": "Constitución de la República española1931 — texto primário, Cervantes",
      "url": "https://www.cervantesvirtual.com/obra-visor/constitucion-de-la-republica-espanola-de-9-de-diciembre-1931/html/eb011790-baf1-4bac-b9bd-b50f042667ad_2.html",
      "note": "Texto primário1931 efetivamente lido; proposta de reforma1935 anexada na mesma página não usada. BOE/Congreso anteriores preservados, sem nova leitura integral nesta sessão."
    }
  ],
  "evidence": {
    "est": "medium",
    "rep": "medium",
    "pod": "medium",
    "rel": "medium",
    "mor": "medium",
    "dip": "medium"
  },
  "axisEvidence": {
    "est": {
      "sourceTitles": [
        "Constitución de la República española1931 — texto primário, Cervantes"
      ],
      "rationale": "Competências nacionais e vedação da federação sustentam estrutura unitária moderada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Autonomia substantiva, aprovação regional e residual regional art.16 impedem centralismo absoluto; não descreve todos os estatutos executados."
    },
    "rep": {
      "sourceTitles": [
        "Constitución de la República española1931 — texto primário, Cervantes"
      ],
      "rationale": "Sufrágio inclusivo por sexo e controle representativo sustentam direção democrática moderada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Norma, não auditoria eleitoral; idade23, legislação eleitoral, crises e suspensão de garantias limitam abrangência."
    },
    "pod": {
      "sourceTitles": [
        "Constitución de la República española1931 — texto primário, Cervantes"
      ],
      "rationale": "Garantias processuais e expressão sustentam direção moderada à liberdade no desenho. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Suspensão pode ser ampla; prorrogação exige Congresso ou Diputación. Não prova liberdade efetiva na Guerra Civil nem universaliza direitos restritos a espanhóis."
    },
    "rel": {
      "sourceTitles": [
        "Constitución de la República española1931 — texto primário, Cervantes"
      ],
      "rationale": "Laicidade estatal, financiamento e ensino explícitos sustentam direção secular moderada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não é irreligiosidade pessoal nem liberdade religiosa irrestrita; restrições a ordens e culto público permanecem visíveis. Igrejas podem ensinar doutrina em estabelecimentos próprios sob inspeção."
    },
    "mor": {
      "sourceTitles": [
        "Constitución de la República española1931 — texto primário, Cervantes"
      ],
      "rationale": "Reforma expressa de casamento e filiação sustenta progressismo moderado no domínio familiar. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não infere posições sobre LGBT, aborto ou costumes em geral; proteção da família e moral pública são contrapontos."
    },
    "dip": {
      "sourceTitles": [
        "Constitución de la República española1931 — texto primário, Cervantes"
      ],
      "rationale": "Renúncia nacional expressa sustenta direção pacifista moderada no desenho normativo, com meios de defesa preservados. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Regra constitucional não comprova política militar executada1931–1939 ou pacifismo da GuerraCivil; manutenção de defesa e conscrição impede inferência de desarmamento."
    }
  },
  "coding": {
    "est": {
      "axis": "est",
      "position": "moderate-second",
      "confidence": "medium",
      "rationale": "Competências nacionais e vedação da federação sustentam estrutura unitária moderada.",
      "uncertainty": "Autonomia substantiva, aprovação regional e residual regional art.16 impedem centralismo absoluto; não descreve todos os estatutos executados.",
      "relatedQuestionIds": [],
      "reviewedOn": "2026-10-07",
      "claims": [
        {
          "sourceTitle": "Constitución de la República española1931 — texto primário, Cervantes",
          "locator": "Arts.1,9–16",
          "statement": "Estado integral conserva competências exclusivas e proíbe federação de regiões, enquanto municípios e regiões podem exercer autonomia.",
          "basis": "norm",
          "publishedDate": "1931-12-09",
          "accessedDate": "2026-10-07"
        }
      ],
      "version": "editorial-ordinal-v1",
      "value": 40,
      "range": [
        30,
        45
      ]
    },
    "rep": {
      "axis": "rep",
      "position": "moderate-first",
      "confidence": "medium",
      "rationale": "Sufrágio inclusivo por sexo e controle representativo sustentam direção democrática moderada.",
      "uncertainty": "Norma, não auditoria eleitoral; idade23, legislação eleitoral, crises e suspensão de garantias limitam abrangência.",
      "relatedQuestionIds": [],
      "reviewedOn": "2026-10-07",
      "claims": [
        {
          "sourceTitle": "Constitución de la República española1931 — texto primário, Cervantes",
          "locator": "Arts.9,36,51–53,64",
          "statement": "Conselhos e Congresso têm sufrágio igual, direto e secreto; ambos os sexos maiores de23 têm iguais direitos eleitorais; Congresso pode censurar governo.",
          "basis": "norm",
          "publishedDate": "1931-12-09",
          "accessedDate": "2026-10-07"
        }
      ],
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
      "rationale": "Garantias processuais e expressão sustentam direção moderada à liberdade no desenho.",
      "uncertainty": "Suspensão pode ser ampla; prorrogação exige Congresso ou Diputación. Não prova liberdade efetiva na Guerra Civil nem universaliza direitos restritos a espanhóis.",
      "relatedQuestionIds": [],
      "reviewedOn": "2026-10-07",
      "claims": [
        {
          "sourceTitle": "Constitución de la República española1931 — texto primário, Cervantes",
          "locator": "Arts.28–34,38–39,42",
          "statement": "Carta protege processo legal, limites de prisão, domicílio, correspondência, expressão sem censura prévia e reunião; emergência suspende algumas garantias sob controle parlamentar por30dias prorrogáveis.",
          "basis": "norm",
          "publishedDate": "1931-12-09",
          "accessedDate": "2026-10-07"
        }
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
      "position": "moderate-first",
      "confidence": "medium",
      "rationale": "Laicidade estatal, financiamento e ensino explícitos sustentam direção secular moderada.",
      "uncertainty": "Não é irreligiosidade pessoal nem liberdade religiosa irrestrita; restrições a ordens e culto público permanecem visíveis. Igrejas podem ensinar doutrina em estabelecimentos próprios sob inspeção.",
      "relatedQuestionIds": [],
      "reviewedOn": "2026-10-07",
      "claims": [
        {
          "sourceTitle": "Constitución de la República española1931 — texto primário, Cervantes",
          "locator": "Arts.3,26–27,48",
          "statement": "Não há religião oficial; financiamento clerical é vedado e ensino público é laico; consciência privada é protegida mas culto público depende de autorização e ordens religiosas são restringidas.",
          "basis": "norm",
          "publishedDate": "1931-12-09",
          "accessedDate": "2026-10-07"
        }
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
      "rationale": "Reforma expressa de casamento e filiação sustenta progressismo moderado no domínio familiar.",
      "uncertainty": "Não infere posições sobre LGBT, aborto ou costumes em geral; proteção da família e moral pública são contrapontos.",
      "relatedQuestionIds": [
        "moral_02"
      ],
      "reviewedOn": "2026-10-07",
      "claims": [
        {
          "sourceTitle": "Constitución de la República española1931 — texto primário, Cervantes",
          "locator": "Art.43; contraponto art.27",
          "statement": "Igualdade conjugal e divórcio por mútuo dissenso ou justa causa convivem com proteção estatal da família; filiação fora do casamento não altera deveres parentais.",
          "basis": "norm",
          "publishedDate": "1931-12-09",
          "accessedDate": "2026-10-07"
        }
      ],
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
      "rationale": "Renúncia nacional expressa sustenta direção pacifista moderada no desenho normativo, com meios de defesa preservados.",
      "uncertainty": "Regra constitucional não comprova política militar executada1931–1939 ou pacifismo da GuerraCivil; manutenção de defesa e conscrição impede inferência de desarmamento.",
      "relatedQuestionIds": [],
      "reviewedOn": "2026-10-07",
      "claims": [
        {
          "sourceTitle": "Constitución de la República española1931 — texto primário, Cervantes",
          "locator": "Arts.6,14(7),37 da carta original1931",
          "statement": "República renuncia à guerra como instrumento de política nacional, enquanto mantém Exército/Marinha/defesa e serviço militar legal.",
          "basis": "norm",
          "publishedDate": "1931-12-09",
          "accessedDate": "2026-10-07"
        }
      ],
      "version": "editorial-ordinal-v1",
      "value": 40,
      "range": [
        30,
        45
      ]
    }
  },
  "unknownAxisReasons": {
    "imi": "Sem inferência delimitada nas passagens revistas; 50 desconhecido, sem evidência. Desenho da carta fundadora1931, antes das alterações e da Guerra Civil; não prática homogênea1931–1939.",
    "int": "Sem inferência delimitada nas passagens revistas; 50 desconhecido, sem evidência. Desenho da carta fundadora1931, antes das alterações e da Guerra Civil; não prática homogênea1931–1939.",
    "eco": "Art.44 autoriza socialização/nacionalização; não estabelece propriedade produtiva geral. Educação pública48 não prova orientação econômica nacional. Fatos preservados em pesquisa.",
    "con": "Art.44 permite coordenação industrial condicional, não programa geral de alocação executado ou obrigatório. Art.33 protege indústria/comércio; pesquisa preservada.",
    "com": "Sem inferência delimitada nas passagens revistas; 50 desconhecido, sem evidência. Desenho da carta fundadora1931, antes das alterações e da Guerra Civil; não prática homogênea1931–1939.",
    "tec": "Sem inferência delimitada nas passagens revistas; 50 desconhecido, sem evidência. Desenho da carta fundadora1931, antes das alterações e da Guerra Civil; não prática homogênea1931–1939."
  },
  "documentaryReview": {
    "status": "author-reviewed-bounded-claims",
    "reviewedOn": "2026-10-07",
    "independentReview": "accepted-bounded-primary-claims",
    "scope": "Desenho da carta fundadora1931, antes das alterações e da Guerra Civil; não prática homogênea1931–1939."
  }
} as const;

export function reconcileHistoricalExistingCoverage01(entry: ReferenceEntry): ReferenceEntry {
  if (JSON.stringify(entry) !== JSON.stringify(historicalExistingCoverage01Before)) return entry;
  const est = entry.coding?.est;
  if (!est) return entry;
  const recoded = codeReferenceAxis({ ...est,
    uncertainty: 'Autonomia regional substantiva depende de estatutos aprovados (art.16); competências não reconhecidas expressamente no estatuto pertencem ao Estado (18), que pode fixar bases harmonizadoras por dois terços e controle constitucional prévio (19). O direito nacional prevalece fora da competência regional exclusiva (21). Não centralismo absoluto nem auditoria dos estatutos executados.',
    claims: est.claims.map(claim => ({ ...claim, locator: 'Arts.1,9–16,18–21' })),
  }, entry.sources);
  return { ...entry, coding: { ...entry.coding, est: recoded.coding }, axisEvidence: { ...entry.axisEvidence, est: recoded.axisEvidence } };
}

export const historicalExistingCoverage01Audit = { id: 'spanish-second-republic', identityAdditions: 0, scoreChanges: 0, acceptedDocumentedAxes: 6, scope: 'Correção apenas do localizador e da ressalva EST após leitura efetiva dos arts.16,18–21; não recertificação geral do legado.', reviewedOn: '2026-10-08', independentReview: 'accepted-bounded-primary-locator-correction' } as const;
