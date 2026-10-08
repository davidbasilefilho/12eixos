import type {ReferenceEntry,ReferenceSource} from './references';
import {AXES} from '../lib/scoring';
import {codeReferenceAxis,type ReferenceAxisCoding} from '../lib/reference-coding';
/** Five absent identities with selected own texts; partial proposals require Root review. */
const proposals = [
  {
    "id": "flora-tristan",
    "name": "Flora Tristan",
    "period": "WorkersUnion1843, seleção traduzidaBeverlyLivingston1983",
    "rationale": "Defende igualdade de direitos e formação entre homens e mulheres, criticando subordinação familiar e profissional.",
    "caveats": "1803-04-07–1844-11-14, CUNYbiografia240. Comparação restrita a norma1843 na tradução1983, não toda obra francesa. Mantém mulheres como educadoras das crianças373/414 e educação diferente por sexo383. Organizar sindicato não representa democracia nacional ou propriedade de toda economia; rejeitar revolta interna308 não resolve DIP. Onze eixos desconhecidos.",
    "sources": [
      {
        "title": "Tristan — WorkersUnion1843, seleção própria traduzida",
        "url": "https://cuny.manifoldapp.org/read/women-s-political-and-social-thought/section/a8e49be4-e57b-421d-8623-61d457d1429d",
        "note": "Leitura efetiva biografia240–297 e seleção própria302–415 inteiras em aberturas sucessivas. Biografia acadêmica distingue-se da declaração. Tradução1983 identificada278/297; original francês não cotejado."
      },
      {
        "title": "CUNY — FloraTristan, identidade",
        "url": "https://cuny.manifoldapp.org/read/women-s-political-and-social-thought/section/a8e49be4-e57b-421d-8623-61d457d1429d",
        "note": "Biografia acadêmica240 efetivamente lida com nascimento7/4/1803 e morte14/11/1844. Comentários editoriais240–277 não códigos."
      }
    ],
    "claims": [
      {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Tristan — WorkersUnion1843, seleção própria traduzida",
            "publishedDate": "WorkersUnion1843, seleção traduzidaBeverlyLivingston1983",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "III365–386/415: família, direitos, educação e sociedade",
            "statement": "Defende igualdade social e jurídica dos sexos, criticando esposa tratada como serva e subordinada no lar e trabalho."
          }
        ],
        "rationale": "Conjunto envolve relações familiares, educação e direitos gerais, além de sufrágio ou um cargo isolado.",
        "uncertainty": "Preserva educação diferenciada383 e mulheres como agentes morais/educadoras373/414. Não inferir posições LGBT nem igualdade já implementada.",
        "reviewedOn": "2026-10-08"
      }
    ]
  },
  {
    "id": "sarah-moore-grimke",
    "name": "Sarah Moore Grimké",
    "period": "LettersEqualitySexes1837, edição1838; cartasI/II/XII selecionadas",
    "rationale": "Defende igualdade moral e intelectual dos sexos e critica sujeição conjugal e perda de direitos patrimoniais.",
    "caveats": "1792–1873,NPS22. Cartas próprias1837 em livro1838, não texto da irmã. Fundamento cristão é explícito78/95 e igualdade de companheiros60 não secularismo ou códigoREL. Mantém casamento sagrado e condena segredo patrimonial559; contradição com desapropriação conjugal preservada. Onze eixos desconhecidos.",
    "sources": [
      {
        "title": "SarahGrimké — LettersEqualitySexes, cartas selecionadas",
        "url": "https://www.gutenberg.org/cache/epub/69485/pg69485-images.html",
        "note": "Leitura efetiva0–50,57–136,500–561. CartaI apenas57–82 mais metadata45–50, II90–118 inteira, III abertura127–136, XII525–561 parcial. Não obra982linhas inteira. Citações bíblicas/Blackstone distinguem-se dos argumentos autorais."
      },
      {
        "title": "NPS — GrimkéSisters, identidade",
        "url": "https://www.nps.gov/wori/learn/historyculture/grimke-sisters.htm",
        "note": "Corpo21–35 inteiro efetivamente lido; anosSarah1792–1873 eAngelina1805–1879 em22/26. Religião/conversão/reputação não códigos. Não confundir AngelinaEmily com sobrinhaAngelinaWeldGrimké1880–1958."
      }
    ],
    "claims": [
      {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "SarahGrimké — LettersEqualitySexes, cartas selecionadas",
            "publishedDate": "LettersEqualitySexes1837, edição1838; cartasI/II/XII selecionadas",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "I59–78; II95–112; XII525–551/559",
            "statement": "Defende igualdade moral e intelectual dos sexos, autonomia da esposa e crítica a leis que absorvem sua personalidade e direitos."
          }
        ],
        "rationale": "Norma abrange gênero, casamento, posição social e patrimônio, além de uma autorização para votar.",
        "uncertainty": "Argumenta a partir de Deus e casamento sagrado; em559 recomenda permanecer solteira se não quiser entregar propriedade ao marido. Não apagar tensão nem inferir posição LGBT.",
        "reviewedOn": "2026-10-08"
      }
    ]
  },
  {
    "id": "angelina-emily-grimke",
    "name": "Angelina Emily Grimké",
    "period": "LettersCatherineBeecher, cartaXII2/10/1837",
    "rationale": "Defende direitos, responsabilidades e atuação social iguais entre homens e mulheres, rejeitando sujeição conjugal masculina.",
    "caveats": "1805–1879,NPS22/26. Não confundir comAngelinaWeldGrimké1880–1958. CartaXII própria datada1837, não escritoSarah nem citaçõesBeecher adotadas. Base cristã660–674, rejeição de intriga política675 e diferenças de relações657 permanecem. Onze eixos desconhecidos; não atribuir secularismo ou política econômica de abolicionismo.",
    "sources": [
      {
        "title": "AngelinaGrimké — cartaXIIHumanRightsNotFoundedSex",
        "url": "https://www.gutenberg.org/files/53852/53852-h/53852-h.htm",
        "note": "CartaXII647–685 inteira efetivamente exibida/lida viafind; data650. Também excertos214–282/636–642 eXIII693–713 parcialmente exibidos, não livro inteiro741linhas. Primeiraopen1000 fora da extensão não deu corpo; não conta leitura."
      },
      {
        "title": "NPS — GrimkéSisters, identidade",
        "url": "https://www.nps.gov/wori/learn/historyculture/grimke-sisters.htm",
        "note": "Corpo21–35 inteiro efetivamente lido; anosSarah1792–1873 eAngelina1805–1879 em22/26. Religião/conversão/reputação não códigos. Não confundir AngelinaEmily com sobrinhaAngelinaWeldGrimké1880–1958."
      }
    ],
    "claims": [
      {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "AngelinaGrimké — cartaXIIHumanRightsNotFoundedSex",
            "publishedDate": "LettersCatherineBeecher, cartaXII2/10/1837",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "XII654–680: direitos gerais, companheira e atividade social",
            "statement": "Defende igual natureza moral, iguais direitos e atuação social de homens e mulheres, tratando mulher como companheira igual em vez de apêndice do marido."
          }
        ],
        "rationale": "Aborda responsabilidades públicas, relações familiares e igualdade geral, além de presença feminina em cargos.",
        "uncertainty": "Fundamento cristão670 e funções segundo relações657 permanecem; recusa intrigas partidárias para ambos675–676. Não inferir direitos LGBT ou livre sexualidade contemporânea.",
        "reviewedOn": "2026-10-08"
      }
    ]
  },
  {
    "id": "josephine-butler",
    "name": "Josephine Butler",
    "period": "NativeRacesandWar1900, trechos própriosI/VIII",
    "rationale": "Defende proteção dos oprimidos, recurso contra escravidão legalizada e liberdade de expressão e reunião, mantendo visão imperial cristã.",
    "caveats": "1828–1906,EnglishHeritage217/233. Recorte1900, não todo movimento1886 ou carreira. Apoia missão britânica cristã/civilizadora1106–1108 e relativiza violência colonial64–65; religião e guerra não recebem score automático. Citações de chefes africanos99–154/Fullerton1093–1095/Rosebery1097–1099 não voz própria exclusiva. Onze eixos desconhecidos.",
    "sources": [
      {
        "title": "Butler — NativeRacesandWar, I/VIII selecionados",
        "url": "https://www.gutenberg.org/cache/epub/14299/pg14299-images.html",
        "note": "Leitura efetiva0–163 e1068–1108. Data impressa1900 em36; trechos próprios distinguidos de extensas citações testemunhais. Não livro1223linhas inteiro. CUNYcorpo posterior eWestminster tentativas falharam, sem alegar leitura."
      },
      {
        "title": "EnglishHeritage — JosephineButler, identidade",
        "url": "https://www.english-heritage.org.uk/visit/blue-plaques/butler-josephine-butler/",
        "note": "Corpo217–262 inteiro efetivamente lido, inscrição1828–1906 em233. Biografia de ativismo não gera códigos."
      }
    ],
    "claims": [
      {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Butler — NativeRacesandWar, I/VIII selecionados",
            "publishedDate": "NativeRacesandWar1900, trechos própriosI/VIII",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "I62–79, sobretudo77; VIII1080–1081/1102–1105",
            "statement": "Defende que vítimas possam recorrer contra poder que legaliza servidão e proteger expressão, reunião e pessoas sob opressão."
          }
        ],
        "rationale": "A norma combina liberdades civis e restrições à servidão/poder em múltiplos contextos, além de uma única campanha médica.",
        "uncertainty": "Paternalismo imperial1106–1108 e apologia parcial da autoridade britânica64–65 são contrapontos graves. Não ausência efetiva de coerção colonial nem oposição a toda autoridade pública.",
        "reviewedOn": "2026-10-08"
      }
    ]
  },
  {
    "id": "jane-addams",
    "name": "Jane Addams",
    "period": "NewerIdealsofPeace1906, introdução própria selecionada",
    "rationale": "Propõe substituir guerra e preparo bélico por cooperação social e solução internacional negociada.",
    "caveats": "1860-09-06–1935-05-21,NPS37/45. Programa de paz1906, não toda carreira ou política de país. Critica argumentos dogmáticos de piedade/prudência298–302 e diferencia paz ativa de passividade308. Não deduzirREP/IMI/MOR/ECO de reputação ou de títulos no sumário. Onze eixos desconhecidos.",
    "sources": [
      {
        "title": "Addams — NewerIdealsofPeace1906, introdução",
        "url": "https://www.gutenberg.org/files/69879/69879-h/69879-h.htm",
        "note": "Leitura efetiva0–332, incluindo metadatapub1906 em90–100, sumário não tratado como prova de capítulo, introdução própria294–332 parcial. CitaçõesTolstoy/deBloch/Phillimore não autoria exclusiva; não obra1638linhas completa."
      },
      {
        "title": "NPS — JaneAddams, identidade",
        "url": "https://www.nps.gov/people/jane-addams.htm",
        "note": "Corpo19–78 inteiro efetivamente lido em reabertura; nascimento37 e morte45. Classificação pacifista/Nobel/relação pessoal não códigos. NobelFacts tentativa direta falhou."
      }
    ],
    "claims": [
      {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Addams — NewerIdealsofPeace1906, introdução",
            "publishedDate": "NewerIdealsofPeace1906, introdução própria selecionada",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "I294/300–312/317–321",
            "statement": "Propõe substituir guerra e preparação para guerra por cooperação social e meios internacionais de discussão e concessão."
          }
        ],
        "rationale": "Programa abrange relação entre nações e eliminação de causas do combate, não apenas conflito industrial metafórico.",
        "uncertainty": "Paz ativa não mera não resistência308; reconhece limites de arbitragem/códigos307. Não eficácia já verificada, rejeição de toda força possível ou imposição de arranjo soberano supranacional.",
        "reviewedOn": "2026-10-08"
      }
    ]
  }
];
export const historicalFigureBatch23:ReferenceEntry[]=proposals.map(p=>{
 const sources:ReferenceSource[]=structuredClone(p.sources);const e:ReferenceEntry={id:p.id,name:p.name,kind:'person',category:'historical-figure',period:p.period,rationale:p.rationale,caveats:p.caveats,sources,vec:Object.fromEntries(AXES.map(({key})=>[key,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{}};
 for(const raw of p.claims){const input=raw as ReferenceAxisCoding;const r=codeReferenceAxis(input,sources);e.vec[input.axis]=r.value;e.evidence[input.axis]=r.evidence;e.axisEvidence![input.axis]=r.axisEvidence;e.coding![input.axis]=r.coding;}return e;
});
