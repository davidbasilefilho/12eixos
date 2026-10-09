import type {ReferenceEntry} from './references';

export const legacyHistoricalQuality14OriginalRecords:Record<string,ReferenceEntry>={
  "hannah-arendt": {
    "id": "hannah-arendt",
    "kind": "person",
    "category": "historical-figure",
    "name": "Hannah Arendt",
    "period": "The Human Condition, 1958; edição consultada 1998, §§30–31",
    "vec": {
      "est": 50,
      "rep": 60,
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
    "rationale": "Perfil documental restrito à participação política plural; dimensões antigas sem locadores foram desqualificadas.",
    "caveats": "Cinco eixos antes graduados foram retirados: análise conceitual não equivale a posições nos construtos do questionário. Não elegível para matching. Texto autoral separado da introdução de Margaret Canovan.",
    "sources": [
      {
        "title": "The Human Condition",
        "url": "https://archive.org/details/humancondition0000aren",
        "note": "Obra primária sobre ação, espaço público e condição política."
      },
      {
        "title": "The Human Condition — Arendt, edição 1998 do texto de 1958",
        "url": "https://pensarelespaciopublico.wordpress.com/wp-content/uploads/2012/02/arendt-hanna-the-human-condition.pdf",
        "note": "PDF autoral efetivamente consultado; prólogo e capítulosII/V; ver ledger. Repositório de reprodução, não site da editora."
      }
    ],
    "evidence": {
      "rep": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "The Human Condition — Arendt, edição 1998 do texto de 1958"
        ],
        "rationale": "Participação política plural sustenta direção democrática parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Critica também democracias que reduzem a pluralidade a corpo coletivo monárquico (pp.220–221); não endosso de toda maioria ou representação."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "The Human Condition — Arendt, edição 1998 do texto de 1958",
            "publishedDate": "1958; edição 1998",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "§§30–31, pp.215–221 (PDF páginas234–240): conselhos, sufrágio e crítica ao governo de um só",
            "statement": "Valoriza conselhos populares e participação política, contrapondo pluralidade ao governo de um só."
          }
        ],
        "rationale": "Participação política plural sustenta direção democrática parcial.",
        "uncertainty": "Critica também democracias que reduzem a pluralidade a corpo coletivo monárquico (pp.220–221); não endosso de toda maioria ou representação.",
        "reviewedOn": "2026-10-07",
        "relatedQuestionIds": [
          "representacao_06",
          "representacao_07"
        ],
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      }
    }
  },
  "na-james-madison": {
    "id": "na-james-madison",
    "name": "James Madison",
    "aliases": [],
    "kind": "person",
    "category": "historical-figure",
    "period": "Programa inaugural de4/3/1809; contraponto posterior explícito de4/3/1813",
    "rationale": "Programa constitucional autoral datado, não vetor de toda a carreira ou validação de práticas.",
    "caveats": "1751-03-16–1836-06-28, identidade institucional Montpelier. Escravizador; cidadania e direitos proclamados não foram universais. Projeto de assimilação indígena aparece no próprio discurso1809. Em1813 justifica guerra e mobilização: dip40 restringe-se à preferência normativa de1809, não pacifismo da presidência inteira. Não infere propriedade, alocação, costumes ou inovação por rótulos biográficos.",
    "sources": [
      {
        "title": "The Federalist Papers, 1787–1788",
        "url": "https://avalon.law.yale.edu/subject_menus/fed.asp",
        "note": "Arquivo de ensaios primários de Madison, Hamilton e Jay; consultar itens assinados por Madison."
      },
      {
        "title": "Madison — First Inaugural Address, 1809",
        "url": "https://avalon.law.yale.edu/19th_century/madison1.asp",
        "note": "Corpo22–36 integral efetivamente lido; data4/3/1809. Declaração presidencial adotada."
      },
      {
        "title": "Madison — Second Inaugural Address, 1813",
        "url": "https://avalon.law.yale.edu/19th_century/madison2.asp",
        "note": "Corpo22–43 integral efetivamente lido; data4/3/1813. A página erroneamente repete o título First; distingue-se pela data e conteúdo. Contraponto, não score da carreira."
      },
      {
        "title": "Montpelier — Life of James Madison, identidade",
        "url": "https://www.montpelier.org/learn/the-life-of-james-madison/",
        "note": "Corpo institucional63 e117 efetivamente aberto/lido confirma datas1751-03-16 e1836-06-28. Corpo92/115–116 explicita escravidão. Fonte de identidade/limitações, sem gerar direção dos eixos."
      }
    ],
    "vec": {
      "est": 60,
      "rep": 60,
      "pod": 40,
      "imi": 50,
      "dip": 40,
      "int": 60,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 60,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "est": "medium",
      "rep": "medium",
      "pod": "medium",
      "dip": "medium",
      "int": "medium",
      "rel": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Madison — First Inaugural Address, 1809"
        ],
        "rationale": "A distribuição expressa de competências territoriais sustenta federalismo moderado. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Mantém a União e poderes federais; não autonomia absoluta ou direito de secessão."
      },
      "rep": {
        "sourceTitles": [
          "Madison — First Inaugural Address, 1809"
        ],
        "rationale": "O programa vincula autoridade política à escolha eleitoral e à representação, não a mando pessoal. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Sufrágio histórico excludente e escravidão preservados como limites; não democracia universal contemporânea."
      },
      "pod": {
        "sourceTitles": [
          "Madison — First Inaugural Address, 1809"
        ],
        "rationale": "Diversas garantias civis e limites gerais à coerção sustentam preferência libertária moderada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Mantém milícia e força militar limitada; declarações não provam cumprimento universal."
      },
      "dip": {
        "sourceTitles": [
          "Madison — First Inaugural Address, 1809"
        ],
        "rationale": "A preferência se aplica em todos os casos de divergência internacional, admitindo defesa. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Em1813 legitima uma guerra após negociações: recorte1809 e direção moderada, não pacifismo absoluto."
      },
      "int": {
        "sourceTitles": [
          "Madison — First Inaugural Address, 1809"
        ],
        "rationale": "Formula norma geral contra tutela e invasão de direitos externos, além de uma disputa isolada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Defesa dos próprios direitos permanece; assimilação indígena no mesmo parágrafo limita universalidade da aplicação."
      },
      "rel": {
        "sourceTitles": [
          "Madison — First Inaugural Address, 1809"
        ],
        "rationale": "A separação entre autoridade civil e funções religiosas é explícita, não inferida da fé privada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Invoca Deus no fechamento36; separação civil não significa ateísmo ou apagamento da religião social."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Madison — First Inaugural Address, 1809",
            "publishedDate": "1809-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo32, cláusulas Union/Constitution/rights reserved to States",
            "statement": "Defende competências e direitos reservados aos Estados, junto à autoridade constitucional da União."
          }
        ],
        "rationale": "A distribuição expressa de competências territoriais sustenta federalismo moderado.",
        "uncertainty": "Mantém a União e poderes federais; não autonomia absoluta ou direito de secessão.",
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
            "sourceTitle": "Madison — First Inaugural Address, 1809",
            "publishedDate": "1809-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo23/25/35: suffrage, republican institutions e representantes",
            "statement": "Legitima o governo pelo sufrágio nacional, instituições republicanas e representantes em outros departamentos."
          }
        ],
        "rationale": "O programa vincula autoridade política à escolha eleitoral e à representação, não a mando pessoal.",
        "uncertainty": "Sufrágio histórico excludente e escravidão preservados como limites; não democracia universal contemporânea.",
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
            "sourceTitle": "Madison — First Inaugural Address, 1809",
            "publishedDate": "1809-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo32: consciência, direitos pessoais, imprensa e exército permanente",
            "statement": "Protege direitos pessoais, consciência e imprensa e restringe exércitos permanentes em nome da liberdade."
          }
        ],
        "rationale": "Diversas garantias civis e limites gerais à coerção sustentam preferência libertária moderada.",
        "uncertainty": "Mantém milícia e força militar limitada; declarações não provam cumprimento universal.",
        "reviewedOn": "2026-10-08",
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
            "sourceTitle": "Madison — First Inaugural Address, 1809",
            "publishedDate": "1809-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo28/32: paz, discussão e acomodação antes de armas; contraponto1813,24–29/38–43",
            "statement": "Prefere discussão e acomodação das divergências a recorrer às armas."
          }
        ],
        "rationale": "A preferência se aplica em todos os casos de divergência internacional, admitindo defesa.",
        "uncertainty": "Em1813 legitima uma guerra após negociações: recorte1809 e direção moderada, não pacifismo absoluto.",
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
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Madison — First Inaugural Address, 1809",
            "publishedDate": "1809-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo28/32: neutralidade, exclusão de intrigas e direitos estrangeiros",
            "statement": "Defende neutralidade e independência que não invada direitos de outras nações."
          }
        ],
        "rationale": "Formula norma geral contra tutela e invasão de direitos externos, além de uma disputa isolada.",
        "uncertainty": "Defesa dos próprios direitos permanece; assimilação indígena no mesmo parágrafo limita universalidade da aplicação.",
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "rel": {
        "axis": "rel",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Madison — First Inaugural Address, 1809",
            "publishedDate": "1809-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo32: religião e consciência isentas da jurisdição civil; contraponto36",
            "statement": "Exclui religião e consciência da jurisdição civil e da interferência do governo."
          }
        ],
        "rationale": "A separação entre autoridade civil e funções religiosas é explícita, não inferida da fé privada.",
        "uncertainty": "Invoca Deus no fechamento36; separação civil não significa ateísmo ou apagamento da religião social.",
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
};

export const legacyHistoricalQuality14Descriptions:Record<string,string>={
  "hannah-arendt": "Defende participação política plural em conselhos e critica o governo de um só, preservando limites à decisão majoritária.",
  "na-james-madison": "Defende competências constitucionais divididas, representação e liberdades civis; prefere negociação, mas justifica a guerra de1813."
};

export function reconcileLegacyHistoricalQuality14(entry:ReferenceEntry):ReferenceEntry {
 const original=legacyHistoricalQuality14OriginalRecords[entry.id];
 if(!original || JSON.stringify(entry)!==JSON.stringify(original))return entry;
 return {...entry,rationale:legacyHistoricalQuality14Descriptions[entry.id]};
}
