import type {ReferenceEntry,ReferenceSource} from './references';
import {AXES} from '../lib/scoring';
import {codeReferenceAxis,type ReferenceAxisCoding} from '../lib/reference-coding';

/** Exact live baselines, including all original fields and sources. */
export const legacyHistoricalQuality06OriginalRecords:Record<string,ReferenceEntry>={
  "nelson-mandela": {
    "id": "nelson-mandela",
    "kind": "person",
    "category": "historical-figure",
    "name": "Nelson Mandela",
    "period": "Transição democrática sul-africana, 1990–1994",
    "vec": {
      "est": 50,
      "rep": 98,
      "pod": 29,
      "imi": 11,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 87,
      "tec": 50
    },
    "rationale": "Defesa da democracia constitucional, direitos de minorias, reconciliação e igualdade explicam a proximidade política.",
    "caveats": "O perfil representa o programa de transição, não cada decisão posterior do governo; política de tecnologia foi mantida no centro por evidência insuficiente.",
    "sources": [
      {
        "title": "Discurso de posse de 1994",
        "url": "https://www.gov.za/news/speeches/president-nelson-mandela-1994-presidential-inauguration-10-may-1994",
        "note": "Democracia, não racialismo e reconciliação."
      },
      {
        "title": "Discurso sobre Constituição e direitos, 1994",
        "url": "https://tpy.nelsonmandela.org/footnotes/35",
        "note": "Proteção das minorias e limitação constitucional do governo."
      }
    ],
    "evidence": {
      "rep": "high",
      "pod": "medium",
      "imi": "medium",
      "mor": "high"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Discurso de posse de 1994"
        ],
        "rationale": "O discurso descreve eleições livres e abertas e proteção constitucional da oposição e das minorias como fundamentos da nova ordem democrática."
      },
      "pod": {
        "sourceTitles": [
          "Discurso sobre Constituição e direitos, 1994"
        ],
        "rationale": "Mandela afirma que o governo ficaria vinculado à Constituição e não poderia governar conforme sua vontade irrestrita, protegendo direitos e liberdades."
      },
      "imi": {
        "sourceTitles": [
          "Discurso de posse de 1994"
        ],
        "rationale": "O discurso afirma cidadania comum para grupos raciais e culturais diversos e proteção constitucional de suas línguas e culturas."
      },
      "mor": {
        "sourceTitles": [
          "Discurso de posse de 1994"
        ],
        "rationale": "O discurso promete proteção jurídica igual independentemente de raça, gênero, religião, opinião política ou orientação sexual."
      }
    },
    "aliases": [
      "Rolihlahla Mandela"
    ]
  },
  "mahatma-gandhi": {
    "id": "mahatma-gandhi",
    "kind": "person",
    "category": "historical-figure",
    "name": "Mahatma Gandhi",
    "period": "Hind Swaraj e movimento de independência, 1909–1947",
    "vec": {
      "est": 92,
      "rep": 50,
      "pod": 50,
      "imi": 50,
      "dip": 2,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 91,
      "rel": 50,
      "mor": 50,
      "tec": 8
    },
    "rationale": "Autogoverno local, não violência, independência econômica e ceticismo diante da industrialização concentram as semelhanças.",
    "caveats": "Suas posições sobre hierarquia social e costumes mudaram e são objeto de debate; o vetor não transforma seu legado em endosso.",
    "sources": [
      {
        "title": "Hind Swaraj / Indian Home Rule",
        "url": "https://www.gutenberg.org/files/40461/40461-h/40461-h.htm",
        "note": "Texto primário sobre autonomia, tecnologia, economia e resistência não violenta."
      }
    ],
    "evidence": {
      "est": "high",
      "dip": "high",
      "com": "medium",
      "tec": "high",
      "int": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Hind Swaraj / Indian Home Rule"
        ],
        "rationale": "Gandhi formula autogoverno como capacidade das comunidades de regular a vida local, em vez de transferir toda autoridade a um centro distante."
      },
      "dip": {
        "sourceTitles": [
          "Hind Swaraj / Indian Home Rule"
        ],
        "rationale": "A obra contrapõe resistência não violenta ao uso da força como caminho político, sustentando fortemente o polo pacifista."
      },
      "com": {
        "sourceTitles": [
          "Hind Swaraj / Indian Home Rule"
        ],
        "rationale": "O texto associa autonomia econômica e boicote a produtos importados à resistência anticolonial, sustentando o polo protecionista deste recorte."
      },
      "tec": {
        "sourceTitles": [
          "Hind Swaraj / Indian Home Rule"
        ],
        "rationale": "Gandhi critica ferrovias, máquinas e industrialização por concentrarem poder e ampliarem danos sociais, sustentando forte cautela tecnológica."
      }
    },
    "aliases": [
      "Mohandas Karamchand Gandhi",
      "Mohandas Gandhi"
    ]
  },
  "john-stuart-mill": {
    "id": "john-stuart-mill",
    "kind": "person",
    "category": "historical-figure",
    "name": "John Stuart Mill",
    "period": "On Liberty e escritos políticos, 1859–1869",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 10,
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
    "rationale": "Defesa das liberdades de pensamento, expressão, associação e autonomia individual é a afinidade mais documentada.",
    "caveats": "Sua obra é anterior às categorias atuais de imigração, tecnologia e geopolítica; esses eixos são centrais e pouco confiáveis.",
    "sources": [
      {
        "title": "On Liberty, John Stuart Mill",
        "url": "https://www.gutenberg.org/files/34901/34901-h/34901-h.htm",
        "note": "Obra primária sobre limites da coerção social e estatal."
      }
    ],
    "evidence": {
      "pod": "high",
      "mor": "medium",
      "rep": "medium",
      "rel": "medium"
    },
    "axisEvidence": {
      "pod": {
        "sourceTitles": [
          "On Liberty, John Stuart Mill"
        ],
        "rationale": "Mill sustenta que coerção social ou estatal só se justifica para prevenir dano a terceiros, defendendo ampla autonomia individual."
      }
    }
  }
};

export const legacyHistoricalQuality06Proposals={
  "nelson-mandela": {
    "period": "Declaração de CapeTown,9/5/1994; programa constitucional de transição",
    "rationale": "Propõe eleições livres, limites constitucionais ao governo e igualdade jurídica de gênero, religião e orientação sexual.",
    "caveats": "Programa declarado, não auditoria de execução ou toda carreira. Maioria58 e liderançaANC47/67 coexistem com proteção das minorias. Direitos culturais não demonstram política de admissão migratória; projetos financeiros63–64 não resolvem toda economia.",
    "sources": [
      {
        "title": "Mandela — CapeTown9May1994, Constituição e mandato",
        "url": "https://tpy.nelsonmandela.org/footnotes/35",
        "note": "Próprio39–70 efetivamente completo; metadata35 e arquivoMR-S-17573. Não discurso de posse10/5, apesar da fonte legada distinta. Metadados legados preservados no snapshot inteiro, não revalidados."
      }
    ],
    "claims": [
      {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Mandela — CapeTown9May1994, Constituição e mandato",
            "publishedDate": "1994-05-09",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "52/56/58–59: constituição, minorias e eleições",
            "statement": "Prescreve democracia constitucional, eleições regulares livres em todos níveis e proteção de minorias."
          }
        ],
        "rationale": "Programa geral delimita seleção e responsabilidade da autoridade política.",
        "uncertainty": "Maioria58 e mandatoANC47/67, sem garantia de implementação ou toda trajetória.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Mandela — CapeTown9May1994, Constituição e mandato",
            "publishedDate": "1994-05-09",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "55–59: limites superiores e direitos fundamentais",
            "statement": "Submete governo à Constituição e à proteção de direitos fundamentais individuais."
          }
        ],
        "rationale": "Limitação geral da vontade governamental, além de uma liberdade setorial.",
        "uncertainty": "Não descreve todas operações coercivas ou eficácia jurídica concreta; maioria58 preservada.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Mandela — CapeTown9May1994, Constituição e mandato",
            "publishedDate": "1994-05-09",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "55/59: igualdade jurídica e diversidade",
            "statement": "Exige igual proteção independentemente de gênero, religião, opinião política ou orientação sexual."
          }
        ],
        "rationale": "Igualdade explícita em múltiplas dimensões sociais, além de antirracismo sozinho.",
        "uncertainty": "Declaração de direitos, não todo costume ou igualdade realizada.",
        "reviewedOn": "2026-10-08"
      }
    ]
  },
  "mahatma-gandhi": {
    "period": "IndianHomeRule,capítuloXIX e prefácios; quintaedição1922, resposta26/1/1921",
    "rationale": "Critica mecanização industrial, transporte e eletrificação; prefere produção manual e retirada gradual, distinguindo ideal e atuação corrente.",
    "caveats": "Edição inglesa1922; o prefácio108/112 diz1908, divergência histórica1909 não resolvida aqui. A resposta1921 distingue ideal pessoal e programa parlamentar113–120. Afirmações empíricas sobre saúde/empobrecimento não verificadas; não transforma resistência interna em política militar externa.",
    "sources": [
      {
        "title": "Gandhi — IndianHomeRule1922, maquinaria e prefácios",
        "url": "https://www.gutenberg.org/files/40461/40461-h/40461-h.htm",
        "note": "Próprio91–123 e capítuloXIX661–687 completo efetivamente; metadata54–66 confirma quintaedição1922. Nota75–86 éRajagopalachar, não Gandhi.112–120 contrapõem ideal a execução atual, não caricatura de destruição imediata."
      }
    ],
    "claims": [
      {
        "axis": "tec",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Gandhi — IndianHomeRule1922, maquinaria e prefácios",
            "publishedDate": "CapítuloXIX na quintaedição1922; contrapeso26/1/1921",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "667–687;113–120: produção, energia, transporte e retirada gradual",
            "statement": "Critica maquinaria em múltiplos domínios e propõe abandono gradual e produção manual."
          }
        ],
        "rationale": "Cautela ampla com mecanização, além de uma máquina ou setor; comparação histórica restrita ao programa.",
        "uncertainty": "1921 não busca destruir ferrovias/hospitais/todas máquinas114 e distingue ideal de execução. Imprensa mecânica686 admite uso instrumental; não posição em toda tecnologia contemporânea.",
        "reviewedOn": "2026-10-08"
      }
    ]
  },
  "john-stuart-mill": {
    "period": "OnLiberty,1859; capítuloI, seleção normativa",
    "rationale": "Limita coerção à prevenção de dano a terceiros e defende pensamento, expressão, associação e escolha individual.",
    "caveats": "Doutrina aplicável a adultos capazes em sociedades consideradas civilizadas; admite despotismo para povos chamados bárbaros205–207. Obrigações positivas e defesa comum210–211 são contrapontos. Não código econômico de escola isolada, nem democracia geral por rótulo liberal.",
    "sources": [
      {
        "title": "Mill — OnLiberty1859, princípio de dano",
        "url": "https://www.gutenberg.org/files/34901/34901-h/34901-h.htm",
        "note": "Texto próprio194–227 efetivamente; princípios200–222. Introdução83–91 éW.L.Courtney1901, não Mill; epígrafe137 éHumboldt. Não livro inteiro. Proposta econômica isolada anterior não ampliada automaticamente."
      }
    ],
    "claims": [
      {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Mill — OnLiberty1859, princípio de dano",
            "publishedDate": "OnLiberty,1859",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "200–222: dano, escolha, expressão e associação",
            "statement": "Limita coerção estatal e social à proteção de terceiros; defende ampla autonomia e liberdades de pensamento, expressão e associação."
          }
        ],
        "rationale": "Regra geral para compulsão em múltiplos domínios, não um benefício particular.",
        "uncertainty": "Exclui crianças204 e povos classificados bárbaros205–207; admite defesa/obrigações positivas210–211 e danos de omissão. Não liberdade universal absoluta.",
        "reviewedOn": "2026-10-08"
      }
    ]
  }
};

/** Unimported scoped recoding: an exact baseline guard preserves any later useful field. */
export function reconcileLegacyHistoricalQuality06(entry:ReferenceEntry):ReferenceEntry {
 const original=legacyHistoricalQuality06OriginalRecords[entry.id];
 if(!original||JSON.stringify(entry)!==JSON.stringify(original))return entry;
 const proposal=legacyHistoricalQuality06Proposals[entry.id as keyof typeof legacyHistoricalQuality06Proposals];
 const sources:ReferenceSource[]=structuredClone(entry.sources);
 for(const source of proposal.sources)if(!sources.some(s=>JSON.stringify(s)===JSON.stringify(source)))sources.push(structuredClone(source));
 const next:ReferenceEntry={...structuredClone(entry),period:proposal.period,rationale:proposal.rationale,caveats:proposal.caveats,sources,vec:Object.fromEntries(AXES.map(({key})=>[key,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{}};
 for(const raw of proposal.claims){const input=raw as ReferenceAxisCoding;const coded=codeReferenceAxis(input,sources);next.vec[input.axis]=coded.value;next.evidence[input.axis]=coded.evidence;next.axisEvidence![input.axis]=coded.axisEvidence;next.coding![input.axis]=coded.coding;}
 return next;
}
