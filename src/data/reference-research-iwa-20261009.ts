import type { ReferenceEntry } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';

// This baseline is the selected programme, after qualitative selection75, not the raw archive.
export const researchIwa20261009Before = {
  "id": "ideology-program-anarcho-syndicalism-iwa-2022",
  "kind": "ideology",
  "category": "ideology",
  "name": "Anarcossindicalismo da AIT (2022)",
  "period": "Estatutos aprovados 9–10 dezembro 2022; página atualizada 10 fevereiro 2023",
  "sources": [
    {
      "title": "Statutes — International Workers Association, Congress 2022 / webpage 2023",
      "url": "https://www.iwa-ait.org/content/statutes",
      "note": "Documento organizacional primário, aprovado no XXVIII Congresso de 9–10 dezembro 2022; atualização da página 10 fevereiro 2023. Introdução, princípios e organização efetivamente lidos; não atribuído inalterado à fundação de 1922."
    },
    {
      "title": "Statutes — International Workers Association, Congress 2022 / webpage 2023",
      "url": "https://www.iwa-ait.org/content/statutes",
      "note": "Publicação: Aprovado 2022-12-09/10; página atualizada 2023-02-10. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: I; II.1–8 e II.10; plano acordado em II.3. Leitura efetiva declarada na pesquisa: Reutilização do dossiê de pesquisa de 2026-10-08; não releitura primária por este pesquisador. Escopo registrado: Texto inglês integral, seções I–XI, incluindo disposições de dados/tecnologias livres e linha de aprovação do XXVIII Congresso em Alcoi. Cabeçalhos e corpo 14–150 lidos; formulário final excluído. Nota/proveniência da pesquisa anterior, não alegação de nova leitura nesta seleção: Versão primária em inglês da própria IWA; não atribuir a 1922 nem confundir com outra Internacional. Não foi aberta a versão PDF ou uma tradução. Paráfrases portuguesas próprias. Sem herdar pontuações, decisões de elegibilidade ou certificação de eixos."
    },
    {
      "title": "Decentralised Federalism and Class War Constitutionalism in the IWW — Constitutionalising Anarchy",
      "url": "https://www.cambridge.org/core/books/constitutionalising-anarchy/decentralised-federalism-and-class-war-constitutionalism-in-the-iww/747895212C66C3DF86FB132A946150C2",
      "note": "Publicação: Data editorial não confirmada nesta leitura. Acesso registrado pela pesquisa: 2026-10-08. Tipo: scholarly. Localizador: Passagens sobre IWA e diferença institucional da IWW, linhas 678–684 e 733–744. Leitura efetiva declarada na pesquisa: Somente passagens recuperadas por busca interna; não capítulo integral. Apoio histórico à classificação sindicalista; não confundir IWW com IWA nem usar sua prática para pontuar a AIT."
    }
  ],
  "vec": {
    "est": 80,
    "rep": 50,
    "pod": 50,
    "imi": 50,
    "dip": 40,
    "int": 50,
    "eco": 80,
    "con": 80,
    "com": 50,
    "rel": 50,
    "mor": 50,
    "tec": 40
  },
  "evidence": {
    "est": "medium",
    "dip": "medium",
    "eco": "medium",
    "con": "medium",
    "tec": "medium"
  },
  "axisEvidence": {
    "est": {
      "sourceTitles": [
        "Statutes — International Workers Association, Congress 2022 / webpage 2023"
      ],
      "rationale": "O programa inteiro de autoridade social afirma federalismo e rejeita centralismo. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Federalismo anarquista, não competências constitucionais de estados atuais. Acordo de produção e defesa conjunta limitam a autonomia irrestrita."
    },
    "dip": {
      "sourceTitles": [
        "Statutes — International Workers Association, Congress 2022 / webpage 2023"
      ],
      "rationale": "Oposição geral a guerra e exércitos permanentes com exceção defensiva expressa. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não é pacifismo absoluto: milícias, força defensiva e ajuda a revoluções permanecem. Não imputa posição sobre armas nucleares ou tribunais internacionais."
    },
    "eco": {
      "sourceTitles": [
        "Statutes — International Workers Association, Congress 2022 / webpage 2023"
      ],
      "rationale": "Controle produtivo comum no sistema inteiro, em vez de proprietários privados. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Propriedade/administração social não equivale a título estatal. Não determina bens pessoais, herança doméstica ou eficiência observada."
    },
    "con": {
      "sourceTitles": [
        "Statutes — International Workers Association, Congress 2022 / webpage 2023"
      ],
      "rationale": "Planejamento comunitário integral substitui coordenação produtiva por proprietários privados. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Plano descentralizado e acordado, sem comando estatal central. Não imputa congelamento de preços, impostos ou política monetária específica."
    },
    "tec": {
      "sourceTitles": [
        "Statutes — International Workers Association, Congress 2022 / webpage 2023"
      ],
      "rationale": "Restrição ambiental abrange o sistema produtivo e a escolha de recursos, sustentando cautela ambiental moderada no construto TEC. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não é rejeição geral de tecnologia nem conservação local isolada. XI aceita tecnologia livre; não declara posições sobre IA, nuclear, genes, corpo ou espaço. Alegações causais contra capitalismo não são certificadas como fatos. Não imputa respostas individuais ao questionário."
    }
  },
  "coding": {
    "est": {
      "axis": "est",
      "position": "strong-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Statutes — International Workers Association, Congress 2022 / webpage 2023",
          "locator": "II.2–4; actual webpage 29–36",
          "statement": "Conselhos livres sem subordinação a autoridade ou partido; cada unidade produtiva é autônoma numa organização social federal de baixo para cima.",
          "basis": "declaration",
          "publishedDate": "Congress 9–10 December 2022; webpage updated 10 February 2023",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "O programa inteiro de autoridade social afirma federalismo e rejeita centralismo.",
      "uncertainty": "Federalismo anarquista, não competências constitucionais de estados atuais. Acordo de produção e defesa conjunta limitam a autonomia irrestrita.",
      "relatedQuestionIds": [
        "estrutura_01",
        "estrutura_15"
      ],
      "reviewedOn": "2026-10-08",
      "version": "editorial-ordinal-v1",
      "value": 80,
      "range": [
        75,
        90
      ]
    },
    "dip": {
      "axis": "dip",
      "position": "moderate-second",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Statutes — International Workers Association, Congress 2022 / webpage 2023",
          "locator": "II.7 and II.10; actual webpage 40–48",
          "statement": "Combate militarismo e guerra, substitui exércitos permanentes por milícias operárias e admite defesa da revolução contra violência adversária.",
          "basis": "declaration",
          "publishedDate": "Congress 9–10 December 2022; webpage updated 10 February 2023",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "Oposição geral a guerra e exércitos permanentes com exceção defensiva expressa.",
      "uncertainty": "Não é pacifismo absoluto: milícias, força defensiva e ajuda a revoluções permanecem. Não imputa posição sobre armas nucleares ou tribunais internacionais.",
      "relatedQuestionIds": [
        "diplomacia_04",
        "diplomacia_18"
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
      "position": "strong-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Statutes — International Workers Association, Congress 2022 / webpage 2023",
          "locator": "I paragraph on land/factories; II.1–3; actual webpage 23/27–33",
          "statement": "Trabalhadores tomam e administram conjuntamente terra e fábricas; reorganização de toda produção e distribuição comunitária elimina monopólio de propriedade.",
          "basis": "declaration",
          "publishedDate": "Congress 9–10 December 2022; webpage updated 10 February 2023",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "Controle produtivo comum no sistema inteiro, em vez de proprietários privados.",
      "uncertainty": "Propriedade/administração social não equivale a título estatal. Não determina bens pessoais, herança doméstica ou eficiência observada.",
      "relatedQuestionIds": [
        "economia_01",
        "economia_05"
      ],
      "reviewedOn": "2026-10-08",
      "version": "editorial-ordinal-v1",
      "value": 80,
      "range": [
        75,
        90
      ]
    },
    "con": {
      "axis": "con",
      "position": "strong-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Statutes — International Workers Association, Congress 2022 / webpage 2023",
          "locator": "II.3; actual webpage 32–33",
          "statement": "Cada ramo ou fábrica autônoma organiza produção e distribuição segundo interesses comunitários, plano acordado e consentimento mútuo.",
          "basis": "declaration",
          "publishedDate": "Congress 9–10 December 2022; webpage updated 10 February 2023",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "Planejamento comunitário integral substitui coordenação produtiva por proprietários privados.",
      "uncertainty": "Plano descentralizado e acordado, sem comando estatal central. Não imputa congelamento de preços, impostos ou política monetária específica.",
      "relatedQuestionIds": [
        "controle_02",
        "controle_13"
      ],
      "reviewedOn": "2026-10-08",
      "version": "editorial-ordinal-v1",
      "value": 80,
      "range": [
        75,
        90
      ]
    },
    "tec": {
      "axis": "tec",
      "position": "moderate-second",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Statutes — International Workers Association, Congress 2022 / webpage 2023",
          "locator": "II.8, dois parágrafos; XI último tópico; aprovação ao final",
          "statement": "Condiciona toda produção à proteção ambiental, minimização de recursos não renováveis e alternativas renováveis; também prefere tecnologias livres na organização.",
          "basis": "declaration",
          "publishedDate": "Aprovado 2022-12-09/10; página atualizada 2023-02-10",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "Restrição ambiental abrange o sistema produtivo e a escolha de recursos, sustentando cautela ambiental moderada no construto TEC.",
      "uncertainty": "Não é rejeição geral de tecnologia nem conservação local isolada. XI aceita tecnologia livre; não declara posições sobre IA, nuclear, genes, corpo ou espaço. Alegações causais contra capitalismo não são certificadas como fatos. Não imputa respostas individuais ao questionário.",
      "reviewedOn": "2026-10-08",
      "relatedQuestionIds": [
        "tecnologia_08"
      ],
      "version": "editorial-ordinal-v1",
      "value": 40,
      "range": [
        30,
        45
      ]
    }
  },
  "rationale": "Organização sindical revolucionária para abolir monopólio proprietário e Estado, constituindo federações autônomas de produção e consumo. Ação direta e greve, organização econômica autônoma e plano comunitário pactuado, com coordenação federal e autodefesa.",
  "caveats": "Cinco eixos revisados no texto aprovado 9–10/12/2022, página 2023; os outros sete permanecem desconhecidos e não passa a porta de seis. Não transfere votos, dados internos ou antiparlamentarismo sindical a sufrágio, oposição e direitos públicos da sociedade futura. Propriedade produtiva social/plano comunitário não são estatização/centralismo. Defesa revolucionária limita pacifismo; preferência tecnológica livre limita inferência ambiental. Sem prática certificada ou atribuição inalterada desde 1922. Registro e fonte anterior completos preservados. O recorte é 2022, não os estatutos de fundação de 1922. Propriedade social autogerida não é automaticamente propriedade estatal. REP, POD e IMI permanecem lacunas de construto. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade."
} as const;
export const researchIwa20261009ApprovedCandidateSHA256 = "d21c27fe3c737fd303ef197b94f23888f90fc4f010149634db0c031625e2b110";
export const researchIwa20261009Coding: ReferenceAxisCoding = {
  "axis": "pod",
  "position": "moderate-second",
  "confidence": "medium",
  "claims": [
    {
      "sourceTitle": "Statutes — International Workers Association, Congress 2022 / webpage 2023",
      "locator": "I, finalidade social (web22); II.2, sociedade sem dominação (29–31); II.4, independência individual contra centralismo (34–36); II.10, violência defensiva (46–48)",
      "statement": "Propõe eliminar dominação política na sociedade, proteger iniciativa e pensamento independente contra centralismo e rejeitar violência organizada; admite defesa revolucionária.",
      "basis": "declaration",
      "publishedDate": "Aprovado pelo XXVIII Congresso em 9–10 de dezembro de 2022; página atualizada em 10 de fevereiro de 2023",
      "accessedDate": "2026-10-09"
    }
  ],
  "rationale": "A ordem social proposta limita autoridade coerciva e disciplina central sobre indivíduos, sustentando direção de liberdade moderada além das regras internas do sindicato.",
  "uncertainty": "II.10 admite violência defensiva e expropriação revolucionária; a organização de transição é classista. Não fornece desenho completo de proteção individual, processo penal, privacidade, oposição ou resolução de conflitos. VI votos e XI dados internos não fundamentam o eixo público. Não se imputa liberdade absoluta, posição sobre drogas/armas/vacinação nem prática implementada. Intensidade20 não é usada para preencher a porta de seis.",
  "relatedQuestionIds": [
    "poder_04",
    "poder_11",
    "poder_16"
  ],
  "reviewedOn": "2026-10-09"
};
const approvedCaveats = "Proposta documental de 9 de outubro de 2026: seis eixos no programa aprovado em dezembro de 2022, sem prática implementada. POD refere-se ao projeto de sociedade sem dominação de I/II, com violência defensiva e transição classista como limites; não usa votos ou privacidade internos para descrever direitos públicos. REP, IMI, INT, COM, REL e MOR permanecem desconhecidos. Fontes, identidade, período e cinco códigos anteriores preservados. Revisão independente necessária antes de integração; números são âncoras editoriais, não medições.";

function buildResearchIwa20261009Post(entry: ReferenceEntry): ReferenceEntry {
  const coded = codeReferenceAxis(researchIwa20261009Coding, entry.sources);
  return {
    ...entry,
    vec: { ...entry.vec, pod: coded.value },
    evidence: { ...entry.evidence, pod: coded.evidence },
    axisEvidence: { ...entry.axisEvidence, pod: coded.axisEvidence! },
    coding: { ...entry.coding, pod: coded.coding },
    caveats: approvedCaveats,
  };
}
export const researchIwa20261009ExpectedPost = buildResearchIwa20261009Post(
  structuredClone(researchIwa20261009Before) as unknown as ReferenceEntry,
);
/** Fail closed if later selected metadata or source review diverges; never replace the raw archive. */
export function reconcileResearchIwa20261009(entry: ReferenceEntry): ReferenceEntry {
  if (entry.id !== researchIwa20261009Before.id) return entry;
  if (JSON.stringify(entry) === JSON.stringify(researchIwa20261009ExpectedPost)) return entry;
  if (JSON.stringify(entry) !== JSON.stringify(researchIwa20261009Before)) {
    throw new Error('IWA selected-programme baseline diverged; preserve later research and review before integrating.');
  }
  return buildResearchIwa20261009Post(entry);
}
