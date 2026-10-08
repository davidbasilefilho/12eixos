import type {ReferenceEntry,AxisKey} from './references';
import {codeReferenceAxis,type ReferenceAxisCoding} from '../lib/reference-coding';

// Unimported proposal: exact whole-object guard; documentary judgment remains pending.
export const ranking675HistoricalFigure01OriginalRecords:Record<string,ReferenceEntry>={
  "na-george-washington": {
    "id": "na-george-washington",
    "name": "George Washington",
    "aliases": [],
    "kind": "person",
    "category": "historical-figure",
    "period": "Farewell Address,1796",
    "rationale": "Conselhos públicos adotados e assinados por Washington; desconhecidos sem mapas.",
    "caveats": "1732-02-22–1799-12-14, identidade MountVernon. República e escravidão historicamente excludentes. Advertências contra partidos/associações limitam pluralismo; preparação defensiva e alianças temporárias limitam neutralidade. União não foi inferida como unitário/federal; legalidade não foi transformada em eixo pod.",
    "sources": [
      {
        "title": "First Inaugural Address, 1789",
        "url": "https://www.presidency.ucsb.edu/documents/inaugural-address-16",
        "note": "Transcrição do discurso inaugural de Washington, registro primário hospedado pelo American Presidency Project."
      },
      {
        "title": "Washington: Farewell Address (1796)",
        "url": "https://avalon.law.yale.edu/18th_century/washing.asp",
        "note": "Texto primário efetivamente lido, corpo20–115, assinatura; ano1796 sem inventar dia."
      },
      {
        "title": "MountVernon: vida de George Washington",
        "url": "https://www.mountvernon.org/george-washington/biography",
        "note": "Corpo institucional efetivamente lido: nascimento22Fev1732; identidade sem eixos."
      },
      {
        "title": "MountVernon: morte de George Washington",
        "url": "https://www.mountvernon.org/george-washington/death",
        "note": "Corpo institucional efetivamente lido: morte14Dez1799; identidade sem eixos."
      }
    ],
    "vec": {
      "est": 50,
      "rep": 60,
      "pod": 50,
      "imi": 50,
      "dip": 40,
      "int": 60,
      "eco": 50,
      "con": 50,
      "com": 40,
      "rel": 40,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "rep": "medium",
      "dip": "medium",
      "int": "medium",
      "com": "medium",
      "rel": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Washington: Farewell Address (1796)"
        ],
        "rationale": "Subordina poder a escolha popular, alteração constitucional e controles recíprocos. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Critica partidos e associações oposicionistas; não democracia universal contemporânea."
      },
      "dip": {
        "sourceTitles": [
          "Washington: Farewell Address (1796)"
        ],
        "rationale": "Prefere relações pacíficas à hostilidade, admitindo guerra defensiva. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Admite defesa preparada e escolha de guerra conforme interesse e justiça."
      },
      "int": {
        "sourceTitles": [
          "Washington: Farewell Address (1796)"
        ],
        "rationale": "Distingue comércio de vínculos políticos estrangeiros e evita alianças permanentes. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Honra compromissos existentes e permite alianças temporárias em emergências."
      },
      "com": {
        "sourceTitles": [
          "Washington: Farewell Address (1796)"
        ],
        "rationale": "Recomenda intercâmbio internacional liberal sem privilégios exclusivos, com regras negociadas. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Regras negociadas podem variar; não afirma eliminar todas as tarifas."
      },
      "rel": {
        "sourceTitles": [
          "Washington: Farewell Address (1796)"
        ],
        "rationale": "Atribui função pública à religião na moralidade nacional e nos juramentos judiciais. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Concede moralidade pessoal por educação refinada; não exige igreja oficial ou política de maioria religiosa."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Washington: Farewell Address (1796)",
            "publishedDate": "1796",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "linhas20–22,55,70–73; contrapontos56–69",
            "statement": "Defende eleição, soberania constitucional popular e controles recíprocos contra usurpação."
          }
        ],
        "rationale": "Subordina poder a escolha popular, alteração constitucional e controles recíprocos.",
        "uncertainty": "Critica partidos e associações oposicionistas; não democracia universal contemporânea.",
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
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Washington: Farewell Address (1796)",
            "publishedDate": "1796",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "linhas80,83–87,97,100,108–110",
            "statement": "Prescreve paz, justiça entre nações e contenção de hostilidade e guerra."
          }
        ],
        "rationale": "Prefere relações pacíficas à hostilidade, admitindo guerra defensiva.",
        "uncertainty": "Admite defesa preparada e escolha de guerra conforme interesse e justiça.",
        "reviewedOn": "2026-10-07",
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
            "sourceTitle": "Washington: Farewell Address (1796)",
            "publishedDate": "1796",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "linhas94–100",
            "statement": "Rejeita vínculos políticos e alianças permanentes com potências estrangeiras."
          }
        ],
        "rationale": "Distingue comércio de vínculos políticos estrangeiros e evita alianças permanentes.",
        "uncertainty": "Honra compromissos existentes e permite alianças temporárias em emergências.",
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
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Washington: Farewell Address (1796)",
            "publishedDate": "1796",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "linhas101–102",
            "statement": "Prefere intercâmbio liberal e política comercial imparcial, sem preferências exclusivas."
          }
        ],
        "rationale": "Recomenda intercâmbio internacional liberal sem privilégios exclusivos, com regras negociadas.",
        "uncertainty": "Regras negociadas podem variar; não afirma eliminar todas as tarifas.",
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
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Washington: Farewell Address (1796)",
            "publishedDate": "1796",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "linhas74–77",
            "statement": "Afirma religião indispensável à moralidade nacional e às instituições públicas."
          }
        ],
        "rationale": "Atribui função pública à religião na moralidade nacional e nos juramentos judiciais.",
        "uncertainty": "Concede moralidade pessoal por educação refinada; não exige igreja oficial ou política de maioria religiosa.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      }
    }
  },
  "salvador-allende": {
    "id": "salvador-allende",
    "name": "Salvador Allende",
    "kind": "person",
    "category": "historical-figure",
    "period": "Discurso individual à ONU, 4 de dezembro de 1972; excertos traduzidos",
    "rationale": "O discurso declara pluralismo político e transição socialista liderada por trabalhadores.",
    "caveats": "Autodescrição presidencial e norma proposta, não auditoria independente da prática. A fonte é tradução de excertos; o PDF original da ONU retornou 403. A plataforma coletiva antiga é preservada na auditoria, sem transportar seus valores.",
    "sources": [
      {
        "title": "Discurso de Allende à ONU — excertos, 4 de dezembro de 1972",
        "url": "https://www.marxists.org/archive/allende/1972/december/04.htm",
        "note": "Texto primário individual em tradução e excertos; parágrafos de abertura e THE REVOLUTIONARY PATH THAT CHILE IS FOLLOWING."
      },
      {
        "title": "Allende Gossens, Salvador, 1908–1973 — Memoria Chilena",
        "url": "https://www.memoriachilena.gob.cl/602/w3-article-18383.html",
        "note": "Identidade do catálogo da Biblioteca Nacional, confirmada pelo resultado indexado; abertura não retornou texto. Não gera valores."
      }
    ],
    "vec": {
      "est": 50,
      "rep": 80,
      "pod": 40,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 80,
      "con": 60,
      "com": 50,
      "rel": 50,
      "mor": 60,
      "tec": 50
    },
    "evidence": {
      "rep": "high",
      "pod": "medium",
      "eco": "high",
      "con": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Discurso de Allende à ONU — excertos, 4 de dezembro de 1972"
        ],
        "rationale": "Desenho político declarado é constitutivamente democrático. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: A afirmação não é verificação independente de execução."
      },
      "pod": {
        "sourceTitles": [
          "Discurso de Allende à ONU — excertos, 4 de dezembro de 1972"
        ],
        "rationale": "Garantias de expressão documentam liberdade. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Cobertura parcial e autodescrição, sem auditoria de coerção."
      },
      "eco": {
        "sourceTitles": [
          "Discurso de Allende à ONU — excertos, 4 de dezembro de 1972"
        ],
        "rationale": "Transformação socialista constitutiva sustenta propriedade social/pública. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Nacionalização relatada pelo próprio presidente; não presume estatização de todo empreendimento."
      },
      "con": {
        "sourceTitles": [
          "Discurso de Allende à ONU — excertos, 4 de dezembro de 1972"
        ],
        "rationale": "Coordenação orientada por necessidades sustenta planejamento. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não documenta todos os mecanismos de preços e alocação."
      },
      "mor": {
        "sourceTitles": [
          "Discurso de Allende à ONU — excertos, 4 de dezembro de 1972"
        ],
        "rationale": "Igualdade racial documenta um subtema emancipatório. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não importa direitos de gênero do programa coletivo de 1969."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Discurso de Allende à ONU — excertos, 4 de dezembro de 1972",
            "publishedDate": "1972-12-04",
            "locator": "Abertura, A country with its working class e Its tradition; parágrafo The democratic will",
            "statement": "Defende sufrágio secreto universal, multipartidarismo, instituições e pluralismo.",
            "basis": "declaration",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Desenho político declarado é constitutivamente democrático.",
        "uncertainty": "A afirmação não é verificação independente de execução.",
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
            "sourceTitle": "Discurso de Allende à ONU — excertos, 4 de dezembro de 1972",
            "publishedDate": "1972-12-04",
            "locator": "Abertura, I come from Chile; parágrafo Its tradition, personality",
            "statement": "Afirma expressão livre, liberdades civis e pluralismo ideológico.",
            "basis": "declaration",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Garantias de expressão documentam liberdade.",
        "uncertainty": "Cobertura parcial e autodescrição, sem auditoria de coerção.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "eco": {
        "axis": "eco",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Discurso de Allende à ONU — excertos, 4 de dezembro de 1972",
            "publishedDate": "1972-12-04",
            "locator": "The people of Chile have won; This is the revolutionary content; We have nationalized",
            "statement": "Propõe superar o capitalismo com direção trabalhadora da produção e nacionalização das riquezas básicas.",
            "basis": "declaration",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Transformação socialista constitutiva sustenta propriedade social/pública.",
        "uncertainty": "Nacionalização relatada pelo próprio presidente; não presume estatização de todo empreendimento.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "con": {
        "axis": "con",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Discurso de Allende à ONU — excertos, 4 de dezembro de 1972",
            "publishedDate": "1972-12-04",
            "locator": "The people of Chile have won the Government",
            "statement": "Propõe organizar coerentemente a produção por necessidades sociais em lugar do lucro individual.",
            "basis": "declaration",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Coordenação orientada por necessidades sustenta planejamento.",
        "uncertainty": "Não documenta todos os mecanismos de preços e alocação.",
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
            "sourceTitle": "Discurso de Allende à ONU — excertos, 4 de dezembro de 1972",
            "publishedDate": "1972-12-04",
            "locator": "Primeiro parágrafo I come from Chile",
            "statement": "Declara recusa de discriminação racial.",
            "basis": "declaration",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Igualdade racial documenta um subtema emancipatório.",
        "uncertainty": "Não importa direitos de gênero do programa coletivo de 1969.",
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

export const ranking675HistoricalFigure01Proposals:Record<string,{removeAxes:AxisKey[];codings:ReferenceAxisCoding[];rationale:string}>={
  "na-george-washington": {
    "removeAxes": [
      "rel"
    ],
    "codings": [
      {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Washington: Farewell Address (1796)",
            "locator": "Corpo45,54–61,69–73; contrapontos56–68",
            "statement": "Recomenda governo vigoroso somente com segurança da liberdade, proteção dos direitos pessoais e patrimoniais, controles contra usurpação e contenção de grandes estruturas militares.",
            "basis": "declaration",
            "publishedDate": "1796",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "A limitação geral do poder pela liberdade e pelos direitos individuais, combinada à prevenção de usurpação e de militarização interna, orienta o eixo à liberdade. A âncora40 é moderada: defende também autoridade eficaz e obediência às leis, sem compromisso libertário absoluto.",
        "uncertainty": "Critica associações que contrariem autoridades e partidos;69 recomenda mitigação pela opinião pública, não demonstra proibição penal. Não documenta execução nem direitos universais atuais. Declaração1796, não toda a carreira.",
        "reviewedOn": "2026-10-08"
      }
    ],
    "rationale": "Defende escolha popular, limites constitucionais ao poder, paz com defesa preparada, alianças restritas e comércio imparcial."
  },
  "salvador-allende": {
    "removeAxes": [
      "mor",
      "com"
    ],
    "codings": [
      {
        "axis": "rep",
        "position": "strong-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Discurso de Allende à ONU — excertos, 4 de dezembro de 1972",
            "locator": "Corpo10,25–27,99; contrapontos19,26",
            "statement": "Defende sufrágio universal secreto, multipartidarismo, independência judicial e transformação socialista mediante liberdades políticas e Estado de direito.",
            "basis": "declaration",
            "publishedDate": "1972-12-04",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Sufrágio universal secreto, multipartidarismo, Justiça independente e exercício pleno das liberdades políticas constituem compromisso democrático explícito e abrangente no desenho declarado. A âncora80 representa a força desse compromisso normativo, não execução comprovada; a confiança medium preserva os limites da autodescrição e dos excertos.",
        "uncertainty": "O próprio presidente relata instituições e resultados; não é auditoria independente.19 propõe afastar setores privilegiados do poder econômico/político e26 ajustar instituições; não autoriza suprimir opositores sem alegação adicional.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Discurso de Allende à ONU — excertos, 4 de dezembro de 1972",
            "locator": "Corpo9,24–26; contrapontos74–78,99–100",
            "statement": "Defende expressão livre, tolerância cultural e ideológica, liberdades cívicas individuais e coletivas e exercício pleno das liberdades políticas.",
            "basis": "declaration",
            "publishedDate": "1972-12-04",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "A combinação de direitos individuais, coletivos, expressão e pluralismo é uma regra geral declarada de limites ao poder, não apenas um evento de fala. A âncora40 preserva direção moderada porque o discurso não documenta todos os mecanismos coercitivos nem sua execução.",
        "uncertainty": "Autodescrição; invoca segurança nacional na compra da telefonia74 e lealdade das forças armadas78. Não confundir intervenção econômica com prova de coerção pessoal, nem liberdade declarada com execução comprovada.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Discurso de Allende à ONU — excertos, 4 de dezembro de 1972",
            "locator": "Corpo18–22,24,27–37; contrapontos27–32,74–76",
            "statement": "Propõe substituir o capitalismo por estrutura produtiva dirigida por trabalhadores e recuperar publicamente as riquezas básicas e meios produtivos principais.",
            "basis": "declaration",
            "publishedDate": "1972-12-04",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "A regra atinge a organização produtiva geral e meios principais, ultrapassando um serviço público isolado. A âncora60 é moderada porque o texto descreve uma transição e recursos básicos: não quantifica predominância de propriedade pública nem determina estatização de cada empreendimento.",
        "uncertainty": "Nacionalizações e cifras são relatos próprios não verificados como prática; compensação constitucional e negociação de compras permanecem. Não transportar o programa coletivo1969 ou extrapolar para todo o período presidencial.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "con",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Discurso de Allende à ONU — excertos, 4 de dezembro de 1972",
            "locator": "Corpo18–22,36–37; contrapontos27–32,137–138,149–153",
            "statement": "Propõe organizar coerente e programadamente a produção segundo necessidades sociais, substituindo a direção pelo lucro individual.",
            "basis": "declaration",
            "publishedDate": "1972-12-04",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "A declaração prescreve critério geral de alocação produtiva, não regulação de um só setor. A âncora60 é moderada: a organização programada é explícita, mas mecanismos completos de preços, quantidades e coordenação descentralizada não são apresentados.",
        "uncertainty": "Integração comercial e compensações permanecem; não equiparar nacionalização automaticamente a planejamento. Sem certificação de execução ou plano integral realmente implantado.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "int",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Discurso de Allende à ONU — excertos, 4 de dezembro de 1972",
            "locator": "Corpo63,85–92,137; contrapontos90,108–109,139–153",
            "statement": "Afirma não intervenção e autodeterminação em escala mundial, rejeita pressão sobre escolhas nacionais e aceita jurisdição extranacional excepcional mediante acordo soberano.",
            "basis": "declaration",
            "publishedDate": "1972-12-04",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "A norma é explicitamente mundial e cobre a autoridade política entre Estados, além da defesa de um recurso chileno. A âncora60 é moderada: admite consentimento jurisdicional e ação internacional coordenada, sem isolamento ou neutralidade absoluta.",
        "uncertainty": "Solidariedade revolucionária/socialista e ações econômicas coordenadas não equivalem automaticamente a intervenção armada. O discurso não demonstra ausência de intervenção na prática; não confundir sua denúncia de agressões com verificação independente.",
        "reviewedOn": "2026-10-08"
      }
    ],
    "rationale": "Defende socialismo com liberdades políticas, direção trabalhadora da produção, organização por necessidades sociais e autodeterminação internacional."
  }
};

export function reconcileRanking675HistoricalFigure01(entries:ReferenceEntry[]):ReferenceEntry[]{
 return entries.map(existing=>{
 const before=ranking675HistoricalFigure01OriginalRecords[existing.id];
 const p=ranking675HistoricalFigure01Proposals[existing.id];
 if(!before||!p||JSON.stringify(existing)!==JSON.stringify(before))return existing;
 const vec={...existing.vec};const evidence={...existing.evidence};const axisEvidence={...existing.axisEvidence};const coding={...existing.coding};
 for(const axis of p.removeAxes){vec[axis]=50;delete evidence[axis];delete axisEvidence[axis];delete coding[axis];}
 for(const input of p.codings){const c=codeReferenceAxis(input,existing.sources);vec[input.axis]=c.value;evidence[input.axis]=c.evidence;axisEvidence[input.axis]=c.axisEvidence;coding[input.axis]=c.coding;}
 return {...existing,rationale:p.rationale,vec,evidence,axisEvidence,coding};
 });
}
