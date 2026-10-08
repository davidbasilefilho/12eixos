import type {ReferenceEntry} from './references';
import {AXES} from '../lib/scoring';
import {codeReferenceAxis,type ReferenceAxisCoding} from '../lib/reference-coding';
const AXIS_KEYS=AXES.map(axis=>axis.key);
// Unimported author proposal: requires independent review and Root approval.
export const native16HistoricalFiguresBefore:ReferenceEntry[] = [
  {
    "id": "nicolas-de-condorcet",
    "kind": "person",
    "category": "historical-figure",
    "name": "Nicolas de Condorcet",
    "period": "Direitos de cidadania, 3 de julho de 1790; instrução pública, 20–21 de abril de 1792",
    "vec": {
      "est": 50,
      "rep": 80,
      "pod": 40,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 60,
      "con": 50,
      "com": 50,
      "rel": 60,
      "mor": 60,
      "tec": 50
    },
    "rationale": "Textos autorais sustentam cidadania inclusiva, direitos iguais, instrução pública gratuita e liberdade intelectual com ensino não confessional.",
    "caveats": "As antigas alegações sobre federalismo, imigração, intervenção e tecnologia não são transportadas. A proposta educacional não determina organização de toda a economia nem prova execução do projeto.",
    "sources": [
      {
        "title": "Sur l’admission des femmes au droit de cité — Condorcet, 1790",
        "url": "https://classiques.uqam.ca/classiques/condorcet/admission_femmes_droit_de_cite/admission_femmes_droit_de_cite_texte.html",
        "note": "Transcrição acadêmica de Jean-Marc Simonet, a partir de Œuvres, tomo X, O’Connor/Arago, 1847; texto datado 3 de julho de 1790."
      },
      {
        "title": "Rapport sur l’instruction publique — Condorcet, 1792",
        "url": "https://www.assemblee-nationale.fr/histoire/7ed.asp",
        "note": "Transcrição parlamentar do relatório de 20–21 de abril de 1792; alegações usam o discurso que começa Messieurs, não o contexto editorial."
      },
      {
        "title": "Relatório e projeto de decreto sobre instrução pública (1792) — Assemblée nationale",
        "url": "https://www.assemblee-nationale.fr/histoire/7ed.asp",
        "note": "Projeto de sistema público de instrução apresentado por Condorcet à Assembleia. Fonte anterior preservada para continuidade; não gera os novos valores sem alegação localizada nesta recodificação."
      },
      {
        "title": "Esboço de um quadro histórico dos progressos do espírito humano — Gallica / BnF",
        "url": "https://gallica.bnf.fr/ark:/12148/bpt6k101973b",
        "note": "Obra primária sobre progresso, conhecimento e aperfeiçoamento humano. Fonte anterior preservada para continuidade; não gera os novos valores sem alegação localizada nesta recodificação."
      },
      {
        "title": "Sur l’admission des femmes au droit de cité — Gallica / BnF",
        "url": "https://gallica.bnf.fr/ark:/12148/bpt6k417181",
        "note": "Texto de 1790 que defende direitos políticos iguais para mulheres. Fonte anterior preservada para continuidade; não gera os novos valores sem alegação localizada nesta recodificação."
      }
    ],
    "evidence": {
      "rep": "high",
      "mor": "medium",
      "pod": "high",
      "eco": "medium",
      "rel": "high"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Sur l’admission des femmes au droit de cité — Condorcet, 1790"
        ],
        "rationale": "Inclusão eleitoral e política é a tese constitutiva do ensaio. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Defesa normativa histórica; não comprova implementação ou mecanismos eleitorais modernos."
      },
      "mor": {
        "sourceTitles": [
          "Sur l’admission des femmes au droit de cité — Condorcet, 1790"
        ],
        "rationale": "Igualdade jurídica sustenta subtemas emancipatórios. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Mantém linguagem doméstica de época; não resolve o conjunto dos costumes contemporâneos."
      },
      "pod": {
        "sourceTitles": [
          "Rapport sur l’instruction publique — Condorcet, 1792"
        ],
        "rationale": "Liberdade intelectual explícita limita coerção estatal. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Garantia específica do ensino, não abolição do poder público ou toda polícia."
      },
      "eco": {
        "sourceTitles": [
          "Rapport sur l’instruction publique — Condorcet, 1792"
        ],
        "rationale": "Provisão e financiamento público de educação documentam direção pública parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Um setor não prova predominância pública de toda a propriedade ou produção."
      },
      "rel": {
        "sourceTitles": [
          "Rapport sur l’instruction publique — Condorcet, 1792"
        ],
        "rationale": "Norma institucional não confessional sustenta direção secular parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Campo educacional; não implica proibição de fé privada ou posição sobre toda relação igreja/Estado."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Sur l’admission des femmes au droit de cité — Condorcet, 1790",
            "publishedDate": "1790-07-03",
            "locator": "Parágrafos Par exemple; Or, les droits; Or, puisqu’il serait; Si on admettait",
            "statement": "Exige participação feminina nas leis e cargos e rejeita restringir cidadania a uma elite instruída.",
            "basis": "norm",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Inclusão eleitoral e política é a tese constitutiva do ensaio.",
        "uncertainty": "Defesa normativa histórica; não comprova implementação ou mecanismos eleitorais modernos.",
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
            "sourceTitle": "Sur l’admission des femmes au droit de cité — Condorcet, 1790",
            "publishedDate": "1790-07-03",
            "locator": "Or, les droits des hommes; Il est donc injuste; Les diverses aristocraties",
            "statement": "Afirma direitos iguais independentemente de sexo, cor ou religião e rejeita exclusão civil das mulheres.",
            "basis": "norm",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Igualdade jurídica sustenta subtemas emancipatórios.",
        "uncertainty": "Mantém linguagem doméstica de época; não resolve o conjunto dos costumes contemporâneos.",
        "reviewedOn": "2026-10-07",
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
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Rapport sur l’instruction publique — Condorcet, 1792",
            "publishedDate": "1792-04-20/21",
            "locator": "Enfin, aucun pouvoir public; Ni la Constitution française",
            "statement": "Nega ao poder público autoridade para impedir ensino de teorias contrárias à política governamental.",
            "basis": "norm",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Liberdade intelectual explícita limita coerção estatal.",
        "uncertainty": "Garantia específica do ensino, não abolição do poder público ou toda polícia.",
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
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Rapport sur l’instruction publique — Condorcet, 1792",
            "publishedDate": "1792-04-20/21",
            "locator": "Nous avons pensé; Toute collection; L’Acte constitutionnel; Quant aux autres degrés; élèves de la patrie",
            "statement": "Propõe rede pública gratuita de ensino e sustento público de alunos pobres.",
            "basis": "norm",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Provisão e financiamento público de educação documentam direção pública parcial.",
        "uncertainty": "Um setor não prova predominância pública de toda a propriedade ou produção.",
        "reviewedOn": "2026-10-07",
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
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Rapport sur l’instruction publique — Condorcet, 1792",
            "publishedDate": "1792-04-20/21",
            "locator": "Les principes de la morale; La Constitution; Il était donc rigoureusement",
            "statement": "Exclui ensino de qualquer culto da instrução pública, preservando-o nos templos.",
            "basis": "norm",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Norma institucional não confessional sustenta direção secular parcial.",
        "uncertainty": "Campo educacional; não implica proibição de fé privada ou posição sobre toda relação igreja/Estado.",
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
    "id": "salvador-allende",
    "name": "Salvador Allende",
    "kind": "person",
    "category": "historical-figure",
    "period": "Discurso individual à ONU, 4 de dezembro de 1972; excertos traduzidos",
    "rationale": "Defende socialismo com liberdades políticas, direção trabalhadora da produção, organização por necessidades sociais e autodeterminação internacional.",
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
      "int": 60,
      "eco": 60,
      "con": 60,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "rep": "medium",
      "pod": "medium",
      "eco": "medium",
      "con": "medium",
      "int": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Discurso de Allende à ONU — excertos, 4 de dezembro de 1972"
        ],
        "rationale": "Sufrágio universal secreto, multipartidarismo, Justiça independente e exercício pleno das liberdades políticas constituem compromisso democrático explícito e abrangente no desenho declarado. A âncora80 representa a força desse compromisso normativo, não execução comprovada; a confiança medium preserva os limites da autodescrição e dos excertos. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: O próprio presidente relata instituições e resultados; não é auditoria independente.19 propõe afastar setores privilegiados do poder econômico/político e26 ajustar instituições; não autoriza suprimir opositores sem alegação adicional."
      },
      "pod": {
        "sourceTitles": [
          "Discurso de Allende à ONU — excertos, 4 de dezembro de 1972"
        ],
        "rationale": "A combinação de direitos individuais, coletivos, expressão e pluralismo é uma regra geral declarada de limites ao poder, não apenas um evento de fala. A âncora40 preserva direção moderada porque o discurso não documenta todos os mecanismos coercitivos nem sua execução. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Autodescrição; invoca segurança nacional na compra da telefonia74 e lealdade das forças armadas78. Não confundir intervenção econômica com prova de coerção pessoal, nem liberdade declarada com execução comprovada."
      },
      "eco": {
        "sourceTitles": [
          "Discurso de Allende à ONU — excertos, 4 de dezembro de 1972"
        ],
        "rationale": "A regra atinge a organização produtiva geral e meios principais, ultrapassando um serviço público isolado. A âncora60 é moderada porque o texto descreve uma transição e recursos básicos: não quantifica predominância de propriedade pública nem determina estatização de cada empreendimento. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Nacionalizações e cifras são relatos próprios não verificados como prática; compensação constitucional e negociação de compras permanecem. Não transportar o programa coletivo1969 ou extrapolar para todo o período presidencial."
      },
      "con": {
        "sourceTitles": [
          "Discurso de Allende à ONU — excertos, 4 de dezembro de 1972"
        ],
        "rationale": "A declaração prescreve critério geral de alocação produtiva, não regulação de um só setor. A âncora60 é moderada: a organização programada é explícita, mas mecanismos completos de preços, quantidades e coordenação descentralizada não são apresentados. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Integração comercial e compensações permanecem; não equiparar nacionalização automaticamente a planejamento. Sem certificação de execução ou plano integral realmente implantado."
      },
      "int": {
        "sourceTitles": [
          "Discurso de Allende à ONU — excertos, 4 de dezembro de 1972"
        ],
        "rationale": "A norma é explicitamente mundial e cobre a autoridade política entre Estados, além da defesa de um recurso chileno. A âncora60 é moderada: admite consentimento jurisdicional e ação internacional coordenada, sem isolamento ou neutralidade absoluta. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Solidariedade revolucionária/socialista e ações econômicas coordenadas não equivalem automaticamente a intervenção armada. O discurso não demonstra ausência de intervenção na prática; não confundir sua denúncia de agressões com verificação independente."
      }
    },
    "coding": {
      "rep": {
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
        "reviewedOn": "2026-10-08",
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
            "locator": "Corpo9,24–26; contrapontos74–78,99–100",
            "statement": "Defende expressão livre, tolerância cultural e ideológica, liberdades cívicas individuais e coletivas e exercício pleno das liberdades políticas.",
            "basis": "declaration",
            "publishedDate": "1972-12-04",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "A combinação de direitos individuais, coletivos, expressão e pluralismo é uma regra geral declarada de limites ao poder, não apenas um evento de fala. A âncora40 preserva direção moderada porque o discurso não documenta todos os mecanismos coercitivos nem sua execução.",
        "uncertainty": "Autodescrição; invoca segurança nacional na compra da telefonia74 e lealdade das forças armadas78. Não confundir intervenção econômica com prova de coerção pessoal, nem liberdade declarada com execução comprovada.",
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
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "int": {
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
    "id": "david-ben-gurion-1948",
    "name": "David Ben-Gurion",
    "kind": "person",
    "category": "historical-figure",
    "period": "Endosso da Declaração de Independência de Israel, 14 de maio de 1948",
    "rationale": "O endosso público vincula criação do Estado a representação eleita, liberdades, igualdade e coexistência cultural.",
    "caveats": "Declaração coletiva com assinatura explícita de Ben-Gurion: registra endosso, não autoria exclusiva. Normas prometidas não comprovam prática, cumprimento de prazos ou tratamento efetivo de árabes.",
    "sources": [
      {
        "title": "Declaration of Israel’s Independence — declaração coletiva assinada, 14 de maio de 1948",
        "url": "https://avalon.law.yale.edu/20th_century/israel.asp",
        "note": "Texto primário reproduzido pela Yale Law Library; cláusulas e lista de assinaturas."
      },
      {
        "title": "BGU Milestones — Ben-Gurion University",
        "url": "https://www.bgu.ac.il/en/u/vps/pa-rd/bgu-milestones/",
        "note": "Cronologia institucional confirma morte em 1973; apenas identidade."
      }
    ],
    "vec": {
      "est": 50,
      "rep": 60,
      "pod": 40,
      "imi": 40,
      "dip": 40,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 60,
      "tec": 50
    },
    "evidence": {
      "rep": "high",
      "pod": "high",
      "imi": "medium",
      "dip": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Declaration of Israel’s Independence — declaração coletiva assinada, 14 de maio de 1948"
        ],
        "rationale": "Compromisso institucional sustenta representação democrática. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Sem auditoria do cumprimento e sem sistema eleitoral completo na declaração."
      },
      "pod": {
        "sourceTitles": [
          "Declaration of Israel’s Independence — declaração coletiva assinada, 14 de maio de 1948"
        ],
        "rationale": "Liberdades explícitas limitam autoridade estatal. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Garantia normativa coletiva, não prática comprovada ou abolição da coerção."
      },
      "imi": {
        "sourceTitles": [
          "Declaration of Israel’s Independence — declaração coletiva assinada, 14 de maio de 1948"
        ],
        "rationale": "Manutenção cultural documenta direção não assimilacionista parcial. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Admissão imigratória privilegia judeus; não estende abertura migratória a todos."
      },
      "dip": {
        "sourceTitles": [
          "Declaration of Israel’s Independence — declaração coletiva assinada, 14 de maio de 1948"
        ],
        "rationale": "Oferta diplomática documenta prioridade pacífica delimitada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: O documento também endossa defesa e esforço de guerra; não é pacifismo absoluto ou avaliação de toda a carreira."
      },
      "mor": {
        "sourceTitles": [
          "Declaration of Israel’s Independence — declaração coletiva assinada, 14 de maio de 1948"
        ],
        "rationale": "Igualdade jurídica documenta subtemas emancipatórios. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Compromisso coletivo não é comprovação da prática ou posição sobre todos os costumes."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Declaration of Israel’s Independence — declaração coletiva assinada, 14 de maio de 1948",
            "publishedDate": "1948-05-14",
            "locator": "WE DECLARE that, with effect; WE APPEAL to the Arab inhabitants",
            "statement": "Promete constituinte eleita, autoridades regulares eleitas e representação igual de cidadãos árabes.",
            "basis": "declaration",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Compromisso institucional sustenta representação democrática.",
        "uncertainty": "Sem auditoria do cumprimento e sem sistema eleitoral completo na declaração.",
        "reviewedOn": "2026-10-07",
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
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Declaration of Israel’s Independence — declaração coletiva assinada, 14 de maio de 1948",
            "publishedDate": "1948-05-14",
            "locator": "THE STATE OF ISRAEL will be open",
            "statement": "Garante consciência, religião, linguagem, educação e cultura.",
            "basis": "declaration",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Liberdades explícitas limitam autoridade estatal.",
        "uncertainty": "Garantia normativa coletiva, não prática comprovada ou abolição da coerção.",
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
            "sourceTitle": "Declaration of Israel’s Independence — declaração coletiva assinada, 14 de maio de 1948",
            "publishedDate": "1948-05-14",
            "locator": "THE STATE OF ISRAEL will be open",
            "statement": "Promete liberdade linguística e cultural a todos os habitantes.",
            "basis": "declaration",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Manutenção cultural documenta direção não assimilacionista parcial.",
        "uncertainty": "Admissão imigratória privilegia judeus; não estende abertura migratória a todos.",
        "reviewedOn": "2026-10-07",
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
            "sourceTitle": "Declaration of Israel’s Independence — declaração coletiva assinada, 14 de maio de 1948",
            "publishedDate": "1948-05-14",
            "locator": "WE EXTEND our hand to all neighboring states",
            "statement": "Oferece paz, cooperação e boa vizinhança aos Estados e povos vizinhos.",
            "basis": "declaration",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Oferta diplomática documenta prioridade pacífica delimitada.",
        "uncertainty": "O documento também endossa defesa e esforço de guerra; não é pacifismo absoluto ou avaliação de toda a carreira.",
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
            "sourceTitle": "Declaration of Israel’s Independence — declaração coletiva assinada, 14 de maio de 1948",
            "publishedDate": "1948-05-14",
            "locator": "THE STATE OF ISRAEL will be open",
            "statement": "Promete igualdade social e política independentemente de religião, raça ou sexo.",
            "basis": "declaration",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Igualdade jurídica documenta subtemas emancipatórios.",
        "uncertainty": "Compromisso coletivo não é comprovação da prática ou posição sobre todos os costumes.",
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
];
const proposalInputs = [
  {
    "id": "nicolas-de-condorcet",
    "kind": "person",
    "category": "historical-figure",
    "name": "Nicolas de Condorcet",
    "period": "Direitos de cidadania, 3 de julho de 1790; instrução pública, 20–21 de abril de 1792",
    "vec": {
      "est": 50,
      "rep": 80,
      "pod": 40,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 60,
      "con": 50,
      "com": 50,
      "rel": 60,
      "mor": 60,
      "tec": 50
    },
    "rationale": "Defende cidadania feminina, limites à coerção, instrução secular e difusão de inovações verificadas, com restrições censitárias e papéis domésticos ainda presentes.",
    "caveats": "As antigas alegações sobre federalismo, imigração, intervenção e tecnologia não são transportadas. A proposta educacional não determina organização de toda a economia nem prova execução do projeto. Revisão crítica do relatório e do ensaio: financiamento escolar não determina propriedade produtiva geral; ECO fica não estimado. REP é moderado pelas restrições censitárias admitidas. TEC refere-se às aplicações e métodos do programa de1792, não à biotecnologia moderna.",
    "sources": [
      {
        "title": "Sur l’admission des femmes au droit de cité — Condorcet, 1790",
        "url": "https://classiques.uqam.ca/classiques/condorcet/admission_femmes_droit_de_cite/admission_femmes_droit_de_cite_texte.html",
        "note": "Transcrição acadêmica de Jean-Marc Simonet, a partir de Œuvres, tomo X, O’Connor/Arago, 1847; texto datado 3 de julho de 1790."
      },
      {
        "title": "Rapport sur l’instruction publique — Condorcet, 1792",
        "url": "https://www.assemblee-nationale.fr/histoire/7ed.asp",
        "note": "Transcrição parlamentar do relatório de 20–21 de abril de 1792; alegações usam o discurso que começa Messieurs, não o contexto editorial."
      },
      {
        "title": "Relatório e projeto de decreto sobre instrução pública (1792) — Assemblée nationale",
        "url": "https://www.assemblee-nationale.fr/histoire/7ed.asp",
        "note": "Projeto de sistema público de instrução apresentado por Condorcet à Assembleia. Fonte anterior preservada para continuidade; não gera os novos valores sem alegação localizada nesta recodificação."
      },
      {
        "title": "Esboço de um quadro histórico dos progressos do espírito humano — Gallica / BnF",
        "url": "https://gallica.bnf.fr/ark:/12148/bpt6k101973b",
        "note": "Obra primária sobre progresso, conhecimento e aperfeiçoamento humano. Fonte anterior preservada para continuidade; não gera os novos valores sem alegação localizada nesta recodificação."
      },
      {
        "title": "Sur l’admission des femmes au droit de cité — Gallica / BnF",
        "url": "https://gallica.bnf.fr/ark:/12148/bpt6k417181",
        "note": "Texto de 1790 que defende direitos políticos iguais para mulheres. Fonte anterior preservada para continuidade; não gera os novos valores sem alegação localizada nesta recodificação."
      }
    ],
    "evidence": {
      "rep": "high",
      "mor": "medium",
      "pod": "high",
      "eco": "medium",
      "rel": "high"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Sur l’admission des femmes au droit de cité — Condorcet, 1790"
        ],
        "rationale": "Inclusão eleitoral e política é a tese constitutiva do ensaio. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Defesa normativa histórica; não comprova implementação ou mecanismos eleitorais modernos."
      },
      "mor": {
        "sourceTitles": [
          "Sur l’admission des femmes au droit de cité — Condorcet, 1790"
        ],
        "rationale": "Igualdade jurídica sustenta subtemas emancipatórios. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Mantém linguagem doméstica de época; não resolve o conjunto dos costumes contemporâneos."
      },
      "pod": {
        "sourceTitles": [
          "Rapport sur l’instruction publique — Condorcet, 1792"
        ],
        "rationale": "Liberdade intelectual explícita limita coerção estatal. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Garantia específica do ensino, não abolição do poder público ou toda polícia."
      },
      "eco": {
        "sourceTitles": [
          "Rapport sur l’instruction publique — Condorcet, 1792"
        ],
        "rationale": "Provisão e financiamento público de educação documentam direção pública parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Um setor não prova predominância pública de toda a propriedade ou produção."
      },
      "rel": {
        "sourceTitles": [
          "Rapport sur l’instruction publique — Condorcet, 1792"
        ],
        "rationale": "Norma institucional não confessional sustenta direção secular parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Campo educacional; não implica proibição de fé privada ou posição sobre toda relação igreja/Estado."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Sur l’admission des femmes au droit de cité — Condorcet, 1790",
            "publishedDate": "1790-07-03",
            "accessedDate": "2026-10-08",
            "locator": "Texto próprio 39–41,57–58,69–74; contraponto 74",
            "statement": "Defende direitos políticos das mulheres e igualdade de cidadania; admite que o universo eleitoral possa continuar restrito a proprietários e chefes de família.",
            "basis": "declaration"
          },
          {
            "sourceTitle": "Rapport sur l’instruction publique — Condorcet, 1792",
            "publishedDate": "1792-04-20",
            "accessedDate": "2026-10-08",
            "locator": "Relatório 161,225–226,337,354–367",
            "statement": "Subordina as instituições de ensino ao Legislativo representativo, reconhecendo soberania popular e direito de reformar as leis.",
            "basis": "declaration"
          }
        ],
        "rationale": "A autoridade pública depende de representação e cidadania, com inclusão feminina como norma geral. A âncora60 registra direção democrática moderada: a restrição censitária explicitamente admitida impede apresentar o programa como sufrágio universal irrestrito.",
        "uncertainty": "A inclusão igual dentro de um universo proprietário não elimina exclusões econômicas. Eleições acadêmicas e escolha de professores não são tomadas como prova do regime político nacional. Programa declarado, não execução.",
        "reviewedOn": "2026-10-08"
      },
      "mor": {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Sur l’admission des femmes au droit de cité — Condorcet, 1790",
            "publishedDate": "1790-07-03",
            "accessedDate": "2026-10-08",
            "locator": "Texto próprio41,51–60,65–70; contrapontos51,65–68",
            "statement": "Contesta desigualdade sexual dos direitos e a sujeição das mulheres nas leis civis e na família, atribuindo diferenças sociais à educação e às instituições.",
            "basis": "declaration"
          }
        ],
        "rationale": "A proposta altera relações civis, familiares e políticas entre os sexos, além de uma transferência financeira ou cláusula antirracial. A âncora60 expressa emancipação moderada, com papéis domésticos tradicionais ainda presentes.",
        "uncertainty": "O autor atribui virtudes domésticas particulares às mulheres e mantém expectativas maternas; o relatório1792 separa turmas onde há duas escolas e prioriza mães na educação doméstica340–342. Não estende a tese a todas as questões sexuais contemporâneas.",
        "reviewedOn": "2026-10-08"
      },
      "pod": {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Sur l’admission des femmes au droit de cité — Condorcet, 1790",
            "publishedDate": "1790-07-03",
            "accessedDate": "2026-10-08",
            "locator": "Texto próprio 58–60,69",
            "statement": "Rejeita que utilidade política legitime servidão, censura, procedimentos secretos, tortura e submissão civil das mulheres.",
            "basis": "declaration"
          },
          {
            "sourceTitle": "Rapport sur l’instruction publique — Condorcet, 1792",
            "publishedDate": "1792-04-20",
            "accessedDate": "2026-10-08",
            "locator": "Relatório 167,174–176,353–361; contraponto243",
            "statement": "Defende liberdade de pensamento e opiniões contrárias às leis, ensino independente e possibilidade de escolas privadas.",
            "basis": "declaration"
          }
        ],
        "rationale": "A regra contra violações de direitos e censura ultrapassa a liberdade de um professor. A âncora40 representa limites liberais moderados ao poder, preservando autoridade legal e disciplina pública.",
        "uncertainty": "O relatório aceita punições e disciplina na instrução militar243 e autoridade legislativa sobre o sistema356. Não é abolição da coerção nem certificação de direitos efetivamente garantidos.",
        "reviewedOn": "2026-10-08"
      },
      "rel": {
        "axis": "rel",
        "position": "moderate-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Rapport sur l’instruction publique — Condorcet, 1792",
            "publishedDate": "1792-04-20",
            "accessedDate": "2026-10-08",
            "locator": "Relatório247–253,358–366",
            "statement": "Exclui doutrina de cultos da instrução pública, fundamenta moral em razão comum e vincula essa regra à igualdade religiosa e à liberdade constitucional de consciência.",
            "basis": "declaration"
          }
        ],
        "rationale": "A prescrição define o papel institucional da religião no sistema nacional de formação e sua relação com direitos constitucionais, não apenas fé pessoal. A âncora60 indica separação secular moderada da autoridade pedagógica estatal.",
        "uncertainty": "Cultos e instrução religiosa fora das escolas permanecem livres; não se demonstra separação em todas as instituições, extinção de igrejas ou política antirreligiosa. As generalizações históricas362–363 não foram verificadas como fatos.",
        "reviewedOn": "2026-10-08"
      },
      "tec": {
        "axis": "tec",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Rapport sur l’instruction publique — Condorcet, 1792",
            "publishedDate": "1792-04-20",
            "accessedDate": "2026-10-08",
            "locator": "Relatório193–197,202,211–218,244–245,292–314,351–352; contrapontos193–194,314,352",
            "statement": "Propõe aplicar descobertas e métodos experimentais à medicina, agricultura, navegação, mecânica e manufaturas, difundindo inovações comprovadas por experiência.",
            "basis": "declaration"
          }
        ],
        "rationale": "A regra pública promove aplicações técnicas em múltiplos domínios materiais e organiza sua difusão nacional. A âncora60 registra confiança moderada na inovação para melhorar práticas e capacidades humanas, não profissão científica ou uso de uma máquina isolada.",
        "uncertainty": "Reconhece efeitos embrutecedores da divisão mecânica do trabalho193–194; exige experiência e rejeita métodos já fracassados314,352. Não prescreve manipulação biológica moderna nem adesão sem limites a qualquer tecnologia.",
        "reviewedOn": "2026-10-08"
      }
    }
  },
  {
    "id": "salvador-allende",
    "name": "Salvador Allende",
    "kind": "person",
    "category": "historical-figure",
    "period": "Discurso individual à ONU, 4 de dezembro de 1972; excertos ingleses e trechos de transcrições posteriores",
    "rationale": "Defende transformação socialista com pluralismo, liberdades, produção coordenada por necessidades sociais, autodeterminação e negociação internacional, preservando defesa armada.",
    "caveats": "Autodescrição presidencial e norma proposta, não auditoria independente da prática. A fonte é tradução de excertos; o PDF original da ONU retornou 403. A plataforma coletiva antiga é preservada na auditoria, sem transportar seus valores. A ampliação documental mantém o mesmo discurso de4 de dezembro de1972. A preferência por negociação não exclui resistência armada; não transforma o boicote e a defesa de preços de matérias-primas em orientação geral de livre comércio.",
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
      },
      {
        "title": "Discurso à ONU — transcrição espanhola MIA, 4 de dezembro de 1972",
        "url": "https://www.marxists.org/espanol/allende/1972/diciembre04.htm",
        "note": "Discurso de1972; transcrição digital de Eduardo Rivas,2015, edição de5 de fevereiro de2016. Leitura direta de13–116 e268–366, não de todo o texto. A formulação sobre diminuição da cooperação335 é inconsistente e não fundamenta código."
      },
      {
        "title": "Discurso à ONU — tradução inglesa FSA, 4 de dezembro de 1972",
        "url": "https://discursos.fundacionsalvadorallende.cl/wp-content/uploads/2024/10/CLFSAFD11972120401-2.pdf",
        "note": "Tradução inglesa moderna hospedada pela Fundação Salvador Allende. Leitura direta selecionada569–717 confirma negociação, desarmamento e contraponto da resistência vietnamita. Reaberturas do cabeçalho e do final falharam; não é fac-símile espanhol nem transcrição oficial da ONU verificada."
      }
    ],
    "vec": {
      "est": 50,
      "rep": 80,
      "pod": 40,
      "imi": 50,
      "dip": 50,
      "int": 60,
      "eco": 60,
      "con": 60,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "rep": "medium",
      "pod": "medium",
      "eco": "medium",
      "con": "medium",
      "int": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Discurso de Allende à ONU — excertos, 4 de dezembro de 1972"
        ],
        "rationale": "Sufrágio universal secreto, multipartidarismo, Justiça independente e exercício pleno das liberdades políticas constituem compromisso democrático explícito e abrangente no desenho declarado. A âncora80 representa a força desse compromisso normativo, não execução comprovada; a confiança medium preserva os limites da autodescrição e dos excertos. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: O próprio presidente relata instituições e resultados; não é auditoria independente.19 propõe afastar setores privilegiados do poder econômico/político e26 ajustar instituições; não autoriza suprimir opositores sem alegação adicional."
      },
      "pod": {
        "sourceTitles": [
          "Discurso de Allende à ONU — excertos, 4 de dezembro de 1972"
        ],
        "rationale": "A combinação de direitos individuais, coletivos, expressão e pluralismo é uma regra geral declarada de limites ao poder, não apenas um evento de fala. A âncora40 preserva direção moderada porque o discurso não documenta todos os mecanismos coercitivos nem sua execução. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Autodescrição; invoca segurança nacional na compra da telefonia74 e lealdade das forças armadas78. Não confundir intervenção econômica com prova de coerção pessoal, nem liberdade declarada com execução comprovada."
      },
      "eco": {
        "sourceTitles": [
          "Discurso de Allende à ONU — excertos, 4 de dezembro de 1972"
        ],
        "rationale": "A regra atinge a organização produtiva geral e meios principais, ultrapassando um serviço público isolado. A âncora60 é moderada porque o texto descreve uma transição e recursos básicos: não quantifica predominância de propriedade pública nem determina estatização de cada empreendimento. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Nacionalizações e cifras são relatos próprios não verificados como prática; compensação constitucional e negociação de compras permanecem. Não transportar o programa coletivo1969 ou extrapolar para todo o período presidencial."
      },
      "con": {
        "sourceTitles": [
          "Discurso de Allende à ONU — excertos, 4 de dezembro de 1972"
        ],
        "rationale": "A declaração prescreve critério geral de alocação produtiva, não regulação de um só setor. A âncora60 é moderada: a organização programada é explícita, mas mecanismos completos de preços, quantidades e coordenação descentralizada não são apresentados. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Integração comercial e compensações permanecem; não equiparar nacionalização automaticamente a planejamento. Sem certificação de execução ou plano integral realmente implantado."
      },
      "int": {
        "sourceTitles": [
          "Discurso de Allende à ONU — excertos, 4 de dezembro de 1972"
        ],
        "rationale": "A norma é explicitamente mundial e cobre a autoridade política entre Estados, além da defesa de um recurso chileno. A âncora60 é moderada: admite consentimento jurisdicional e ação internacional coordenada, sem isolamento ou neutralidade absoluta. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Solidariedade revolucionária/socialista e ações econômicas coordenadas não equivalem automaticamente a intervenção armada. O discurso não demonstra ausência de intervenção na prática; não confundir sua denúncia de agressões com verificação independente."
      }
    },
    "coding": {
      "rep": {
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
        "reviewedOn": "2026-10-08",
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
            "locator": "Corpo9,24–26; contrapontos74–78,99–100",
            "statement": "Defende expressão livre, tolerância cultural e ideológica, liberdades cívicas individuais e coletivas e exercício pleno das liberdades políticas.",
            "basis": "declaration",
            "publishedDate": "1972-12-04",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "A combinação de direitos individuais, coletivos, expressão e pluralismo é uma regra geral declarada de limites ao poder, não apenas um evento de fala. A âncora40 preserva direção moderada porque o discurso não documenta todos os mecanismos coercitivos nem sua execução.",
        "uncertainty": "Autodescrição; invoca segurança nacional na compra da telefonia74 e lealdade das forças armadas78. Não confundir intervenção econômica com prova de coerção pessoal, nem liberdade declarada com execução comprovada.",
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
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "int": {
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
            "sourceTitle": "Discurso à ONU — transcrição espanhola MIA, 4 de dezembro de 1972",
            "publishedDate": "1972-12-04",
            "accessedDate": "2026-10-08",
            "locator": "Transcrição espanhola304–306,348–351; contrapontos318,351",
            "statement": "Prioriza negociação e convivência pacífica para conflitos internacionais, afirma disposição geral para discutir diferenças e combina paz com defesa da independência.",
            "basis": "declaration"
          },
          {
            "sourceTitle": "Discurso à ONU — tradução inglesa FSA, 4 de dezembro de 1972",
            "publishedDate": "1972-12-04",
            "accessedDate": "2026-10-08",
            "locator": "PDF selecionado645–690; contrapontos664–680",
            "statement": "Aprova negociações e desarmamento entre potências e solução de conflitos por cooperação, mas elogia a resistência militar vietnamita.",
            "basis": "declaration"
          }
        ],
        "rationale": "O programa de política mundial aplica negociação e paz a conflitos e relações entre potências, além de um tratado ou da não intervenção. A âncora40 expressa prioridade pacífica moderada, preservando recurso à defesa armada e sem equivaler a desarmamento unilateral.",
        "uncertainty": "A transcrição inglesa antiga140 endossa a advertência de Kennedy sobre revolução violenta; a espanhola318 e o PDF664–680 elogiam resistência armada. Defesa firme351 permanece. Não comprova prática pacífica, pacifismo absoluto ou toda a presidência; COM continua desconhecido diante de proteção de produtores e boicote.",
        "reviewedOn": "2026-10-08"
      }
    }
  },
  {
    "id": "david-ben-gurion-1948",
    "name": "David Ben-Gurion",
    "kind": "person",
    "category": "historical-figure",
    "period": "Endosso da Declaração de Independência de Israel, 14 de maio de 1948",
    "rationale": "Endossa a declaração coletiva que prevê autoridades eleitas, liberdades de consciência e coexistência cultural, com abertura migratória especificamente judaica.",
    "caveats": "Declaração coletiva com assinatura explícita de Ben-Gurion: registra endosso, não autoria exclusiva. Normas prometidas não comprovam prática, cumprimento de prazos ou tratamento efetivo de árabes. Paz regional e igualdade entre os sexos são afirmações reais, mas isoladamente não estabelecem orientação geral de militarismo/pacifismo nem do conjunto das normas familiares e costumes. DIP e MOR permanecem não estimados. O inglês da reprodução não substitui cotejo com o original hebraico.",
    "sources": [
      {
        "title": "Declaration of Israel’s Independence — declaração coletiva assinada, 14 de maio de 1948",
        "url": "https://avalon.law.yale.edu/20th_century/israel.asp",
        "note": "Texto primário reproduzido pela Yale Law Library; cláusulas e lista de assinaturas."
      },
      {
        "title": "BGU Milestones — Ben-Gurion University",
        "url": "https://www.bgu.ac.il/en/u/vps/pa-rd/bgu-milestones/",
        "note": "Cronologia institucional confirma morte em 1973; apenas identidade."
      }
    ],
    "vec": {
      "est": 50,
      "rep": 60,
      "pod": 40,
      "imi": 40,
      "dip": 40,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 60,
      "tec": 50
    },
    "evidence": {
      "rep": "high",
      "pod": "high",
      "imi": "medium",
      "dip": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Declaration of Israel’s Independence — declaração coletiva assinada, 14 de maio de 1948"
        ],
        "rationale": "Compromisso institucional sustenta representação democrática. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Sem auditoria do cumprimento e sem sistema eleitoral completo na declaração."
      },
      "pod": {
        "sourceTitles": [
          "Declaration of Israel’s Independence — declaração coletiva assinada, 14 de maio de 1948"
        ],
        "rationale": "Liberdades explícitas limitam autoridade estatal. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Garantia normativa coletiva, não prática comprovada ou abolição da coerção."
      },
      "imi": {
        "sourceTitles": [
          "Declaration of Israel’s Independence — declaração coletiva assinada, 14 de maio de 1948"
        ],
        "rationale": "Manutenção cultural documenta direção não assimilacionista parcial. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Admissão imigratória privilegia judeus; não estende abertura migratória a todos."
      },
      "dip": {
        "sourceTitles": [
          "Declaration of Israel’s Independence — declaração coletiva assinada, 14 de maio de 1948"
        ],
        "rationale": "Oferta diplomática documenta prioridade pacífica delimitada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: O documento também endossa defesa e esforço de guerra; não é pacifismo absoluto ou avaliação de toda a carreira."
      },
      "mor": {
        "sourceTitles": [
          "Declaration of Israel’s Independence — declaração coletiva assinada, 14 de maio de 1948"
        ],
        "rationale": "Igualdade jurídica documenta subtemas emancipatórios. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Compromisso coletivo não é comprovação da prática ou posição sobre todos os costumes."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Declaration of Israel’s Independence — declaração coletiva assinada, 14 de maio de 1948",
            "publishedDate": "1948-05-14",
            "locator": "WE DECLARE that, with effect; WE APPEAL to the Arab inhabitants",
            "statement": "Promete constituinte eleita, autoridades regulares eleitas e representação igual de cidadãos árabes.",
            "basis": "declaration",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Compromisso institucional sustenta representação democrática.",
        "uncertainty": "Sem auditoria do cumprimento e sem sistema eleitoral completo na declaração.",
        "reviewedOn": "2026-10-07",
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
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Declaration of Israel’s Independence — declaração coletiva assinada, 14 de maio de 1948",
            "publishedDate": "1948-05-14",
            "locator": "THE STATE OF ISRAEL will be open",
            "statement": "Garante consciência, religião, linguagem, educação e cultura.",
            "basis": "declaration",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Liberdades explícitas limitam autoridade estatal.",
        "uncertainty": "Garantia normativa coletiva, não prática comprovada ou abolição da coerção.",
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
            "sourceTitle": "Declaration of Israel’s Independence — declaração coletiva assinada, 14 de maio de 1948",
            "publishedDate": "1948-05-14",
            "locator": "THE STATE OF ISRAEL will be open",
            "statement": "Promete liberdade linguística e cultural a todos os habitantes.",
            "basis": "declaration",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Manutenção cultural documenta direção não assimilacionista parcial.",
        "uncertainty": "Admissão imigratória privilegia judeus; não estende abertura migratória a todos.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      }
    }
  }
] as unknown as ReferenceEntry[];

export const native16HistoricalFiguresProposals:ReferenceEntry[]=proposalInputs.map(input=>{
 const result:ReferenceEntry={...input,vec:Object.fromEntries(AXIS_KEYS.map(key=>[key,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{}};
 for(const axis of AXIS_KEYS){const raw=input.coding?.[axis];if(!raw)continue;
 const encoded=codeReferenceAxis(raw as ReferenceAxisCoding,input.sources);
 // Preserve exact previously located Allende codes when unchanged.
 const before=native16HistoricalFiguresBefore.find(record=>record.id===input.id)!;
 const unchanged=JSON.stringify(raw)===JSON.stringify(before.coding?.[axis]);
 result.vec[axis]=encoded.value;result.evidence![axis]=unchanged?before.evidence![axis]:encoded.evidence;
 result.axisEvidence![axis]=unchanged?before.axisEvidence![axis]:encoded.axisEvidence;
 result.coding![axis]=unchanged?before.coding![axis]:encoded.coding;
 }return result;
});
export function reconcileNative16HistoricalFigures(records:readonly ReferenceEntry[]):ReferenceEntry[]{
 return records.map(record=>{const before=native16HistoricalFiguresBefore.find(item=>item.id===record.id);if(!before||JSON.stringify(record)!==JSON.stringify(before))return record;
 return native16HistoricalFiguresProposals.find(item=>item.id===record.id)!;});
}
