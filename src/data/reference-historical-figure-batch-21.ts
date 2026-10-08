import type {ReferenceEntry,ReferenceSource} from './references';
import {AXES} from '../lib/scoring';
import {codeReferenceAxis,type ReferenceAxisCoding} from '../lib/reference-coding';
/** Six partial profiles accepted by Root after primary review; integration owned by repair. */
const proposals = [
  {
    "id": "henry-george",
    "name": "Henry George",
    "period": "Progress and Poverty, prefácio1880 reafirmando texto1879; edição memorial1898",
    "rationale": "Defende remuneração privada do capital e competição geral, com apropriação pública da renda da terra e remoção de impostos sobre trocas.",
    "caveats": "1839–1897, Fundação Henry George38. Dia da morte diverge entre Fundação29/10 e índice ADB28/10: conservar apenas anos. Programa declarado, não Georgismo atribuído por classificação. Renda da terra pública e serviços públicos3019–3023 limitam a orientação privada/competitiva. Crítica ao sufrágio sob pobreza3459–3464 impede inferir democracia universal neste recorte. Nove eixos desconhecidos; nenhuma qualificação de ranking.",
    "sources": [
      {
        "title": "George — Progress and Poverty, edição memorial",
        "url": "https://www.gutenberg.org/files/55308/55308-h/55308-h.htm",
        "note": "Leitura efetiva selecionada0–168,2149–2202,2830–2863,2893–2927,2931–2966,2971–3002,3006–3078,3414–3471. Não todo livro4301linhas. Prefácio1880 confirma texto original1879; edição memorial1898. LivrosVIII/IX próprios, não ideologia homônima."
      },
      {
        "title": "Henry George Foundation — identidade",
        "url": "https://henrygeorgefoundation.org/about-the-foundation/about-henry-george",
        "note": "Corpo37–48 efetivamente lido, datas38:2/9/1839–29/10/1897. Fundação de memória/advocacia, usada só para identidade. ADB em índice exibe28/10, não reaberto; diferença impede precisão diária adotada."
      }
    ],
    "claims": [
      {
        "axis": "eco",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "George — Progress and Poverty, edição memorial",
            "publishedDate": "Progress and Poverty, prefácio1880 reafirmando texto1879; edição memorial1898",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "IX.I2913; IX.II2934–2948; IX.III2976–2998",
            "statement": "Preserva recompensa e propriedade do capital produtivo, apropriando publicamente a renda da terra."
          }
        ],
        "rationale": "Regra abrange capital e trabalho em geral, com distinção explícita de terra; não propriedade privada inferida de profissão.",
        "uncertainty": "Renda fundiária social é exceção geral importante. Serviços públicos3019–3023 também não ficam todos privados; não liberalismo econômico puro.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "con",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "George — Progress and Poverty, edição memorial",
            "publishedDate": "Progress and Poverty, prefácio1880 reafirmando texto1879; edição memorial1898",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "VI2149–2181, sobretudo2169–2174/2181; IX.IV3019–3023 contraponto",
            "statement": "Prefere cooperação espontânea e competição individual à direção governamental geral da indústria."
          }
        ],
        "rationale": "Discute regra geral de organização da produção, além de preços de um setor.",
        "uncertainty": "Serviços públicos e simplificação administrativa permanecem3019–3023; não ausência de toda coordenação pública nem resultado empiricamente demonstrado.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "com",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "George — Progress and Poverty, edição memorial",
            "publishedDate": "Progress and Poverty, prefácio1880 reafirmando texto1879; edição memorial1898",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "IX.I2901–2913/2924; IX.III2985",
            "statement": "Propõe remover impostos sobre indústria e trocas, incluindo alfândegas e impostos de importação, financiando governo pela renda da terra."
          }
        ],
        "rationale": "Norma cobre comércio e intercâmbio gerais, não uma redução tarifária isolada.",
        "uncertainty": "Renda da terra continua pública; programa condicionado à reforma fundiária, não livre comércio sem todo financiamento público.",
        "reviewedOn": "2026-10-08"
      }
    ]
  },
  {
    "id": "karl-kautsky",
    "name": "Karl Kautsky",
    "period": "The Class Struggle, capítuloIV próprio1892; tradução inglesa1910",
    "rationale": "Propõe propriedade comum dos trabalhadores sobre a produção geral, distinguindo-a da estatização pelo Estado capitalista.",
    "caveats": "1854–1938, Deutsche Biographie33–38. Índices divergem quanto ao dia de nascimento; adotar só anos. Capítulo próprio sobre o programa1892, não declarações Erfurt citadas nem fase1918. Onze eixos desconhecidos; instituições futuras não demonstram desempenho ou implementação.",
    "sources": [
      {
        "title": "Kautsky — The Class Struggle, capítuloIV",
        "url": "https://www.marxists.org/archive/kautsky/1892/erfurt/ch04.htm",
        "note": "Corpo selecionado efetivamente lido0–118 (linha62 parcial),138–190. Normas próprias43–45/66, contraponto113–117 integral. Citação Erfurt12–13 não tratada como autoria exclusiva. Não alegar capítulo completo199linhas."
      },
      {
        "title": "Kautsky — ficha bibliográfica",
        "url": "https://www.marxists.org/archive/kautsky/1892/erfurt/index.htm",
        "note": "Índice0–74 efetivamente lido: texto1892, edição/tradução inglesa CharlesKerr1910, WilliamBohn/Askew. Não livro1918."
      },
      {
        "title": "Deutsche Biographie — Karl Kautsky",
        "url": "https://www.deutsche-biographie.de/pnd118560808.html",
        "note": "Metadata0–62 efetivamente lida, nome31 e anos1854–1938 em33–38; não biografia extensa ou posições políticas. TentativaUSHMM direta falhou InternalError, sem alegar leitura."
      }
    ],
    "claims": [
      {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Kautsky — The Class Struggle, capítuloIV",
            "publishedDate": "The Class Struggle, capítuloIV próprio1892; tradução inglesa1910",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "IV43–45/66; contraponto113–117",
            "statement": "Propõe meios e estabelecimentos produtivos como propriedade comum dos trabalhadores."
          }
        ],
        "rationale": "Titularidade coletiva cobre produção geral e não apenas uma fábrica ou serviço.",
        "uncertainty": "Estatização pelo Estado capitalista não equivale à apropriação pelos trabalhadores113–117; proposta futura, não resultado verificado. Não transferir posições de1918.",
        "reviewedOn": "2026-10-08"
      }
    ]
  },
  {
    "id": "charlotte-perkins-gilman",
    "name": "Charlotte Perkins Gilman",
    "period": "The Man-Made World, capítulosI–II; versão Gutenberg sem data original impressa",
    "rationale": "Defende igualdade de atuação social e relações familiares entre iguais, criticando a família organizada como propriedade masculina.",
    "caveats": "1860–1935, UNIGE3. EdiçãoHTML não imprime data original: não usar data de digitalização como publicação. Essencialismo biológico114/133–137, ideal de mãe e pai175, seleção racial120/132–137 e hierarquia colonial78–80 são limites explícitos. Não inferir posições LGBT nem imigração, religião pública ou economia nacional. Onze eixos desconhecidos.",
    "sources": [
      {
        "title": "Gilman — The Man-Made World, I–II",
        "url": "https://www.gutenberg.org/files/3015/3015-h/3015-h.htm",
        "note": "Leitura efetiva0–211 em aberturas sucessivas, capítulosI52–115 eII116–180 completos, III apenas abertura. Não toda obra1531linhas; citações de Marriot-Watson/Balzac não voz própria exclusiva. Data original não impressa na versãoHTML consultada."
      },
      {
        "title": "University of Geneva — Charlotte Perkins Gilman",
        "url": "https://www.unige.ch/vls/bibliography/author-bibliography/gilman-charlotte-perkins-1860-1935",
        "note": "Corpo0–73 efetivamente lido. Nome e anos1860–1935 no cabeçalho3. Bibliografia e comentário acadêmico não usados como códigos. TentativasLOC retornaram InternalError/403."
      }
    ],
    "claims": [
      {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Gilman — The Man-Made World, I–II",
            "publishedDate": "The Man-Made World, capítulosI–II; versão Gutenberg sem data original impressa",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "I104–115; II124–175/179–180",
            "statement": "Defende atuação humana de ambos os sexos em todos campos e família fundada em igualdade e associação, sem chefe masculino permanente."
          }
        ],
        "rationale": "A declaração abrange igualdade social e organização familiar, além de presença de uma mulher em cargo.",
        "uncertainty": "Preserva papéis biológicos de mãe/pai114 e casamento entre dois179; argumentos de seleção racial132–137 e hierarquia78–80 não são endossados nem apagados. Não posição contemporânea LGBT.",
        "reviewedOn": "2026-10-08"
      }
    ]
  },
  {
    "id": "edward-bellamy",
    "name": "Edward Bellamy",
    "period": "The Programme of the Nationalists, declaração própria31/1/1891",
    "rationale": "Propõe governo popular e associação nacional da produção com participação comum em recursos e produtos.",
    "caveats": "1850–1898, UNIGE10. Usar anos para evitar divergências diárias de índices biográficos. Declaração própria de programa, não narrador ficcional nem rótulo partidário. Obrigação geral de trabalhar31, com exceções etárias/doença, permanece contraponto. Metáfora econômica de guerra13 não política externa; cooperação não demonstra regra alocativa completa. Dez eixos desconhecidos.",
    "sources": [
      {
        "title": "Bellamy — The Programme of the Nationalists",
        "url": "https://www.marxists.org/reference/archive/bellamy-ed/works/1891/new-nation.htm",
        "note": "Corpo0–50 inteiro efetivamente lido, voz própria12–38. Ficha5–7:31/1/1891, TheNewNationI10–11, transcriçãoCadeJameson. Não LookingBackward nem prática do partido."
      },
      {
        "title": "University of Geneva — Edward Bellamy",
        "url": "https://www.unige.ch/vls/bibliography/author-bibliography/bellamy-edward-1850-1898",
        "note": "Corpo0–46 inteiro efetivamente lido, identidade1850–1898 e datas10. Comentário ideológico secundário13–14 não fonte de vetor. Tentativas de páginasPenn falharam, não leitura."
      }
    ],
    "claims": [
      {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Bellamy — The Programme of the Nationalists",
            "publishedDate": "The Programme of the Nationalists, declaração própria31/1/1891",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Programa37, com caráter geral26–29",
            "statement": "Propõe governo democraticamente popular para a república política, social e industrial."
          }
        ],
        "rationale": "Autoridade popular é norma geral expressa, não apenas gestão de uma cooperativa ou vitória eleitoral pessoal.",
        "uncertainty": "Não especifica regras constitucionais ou pluralismo partidário detalhado; proposta futura, não democracia efetivamente implantada.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Bellamy — The Programme of the Nationalists",
            "publishedDate": "The Programme of the Nationalists, declaração própria31/1/1891",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Programa26–29/36",
            "statement": "Propõe organização industrial nacional com todos como participantes do produto e recursos naturais comuns."
          }
        ],
        "rationale": "Titularidade e participação abrangem a economia nacional, além de um serviço público.",
        "uncertainty": "Não descreve todos bens pessoais nem uma única forma jurídica estatal; obrigação de trabalhar31 e isenções existem. Não prova que toda propriedade privada desapareça.",
        "reviewedOn": "2026-10-08"
      }
    ]
  },
  {
    "id": "lucy-parsons",
    "name": "Lucy Parsons",
    "period": "Anarchism, The Liberator3/2/1906",
    "rationale": "Defende ampliação da liberdade e autogoverno individual, com substituição do governo político por administração social.",
    "caveats": "Nascimento circa1851–1853 disputado; morte7/3/1942. ChicagoHistoryMuseum descreve início da vida incerto85/89 e morte105. Não inferir raça/ancestralidade, posições familiares ou propriedade nacional de biografia. Crítica à representação não equivale a autoritarismo; REP desconhecido. Onze eixos desconhecidos.",
    "sources": [
      {
        "title": "Parsons — Anarchism,1906",
        "url": "https://www.lucyparsonsproject.com/writings/anarchism.html",
        "note": "Corpo0–41 inteiro efetivamente lido. Autoria24 e publicaçãoTheLiberator3/2/1906 em25; próprias26–33. Repositório de memória, não instituição original do jornal. Não textoPrinciplesofAnarchism não reaberto."
      },
      {
        "title": "Chicago History Museum — Lucy Parsons",
        "url": "https://www.chicagohistory.org/lucy-parsons/",
        "note": "Corpo84–105 efetivamente lido: origens incertas85, nascimento provável1853 em89, morte7/3/1942 em105. Outro índice do museu dá1851: preservar circa1851–1853. Biografia não código político."
      }
    ],
    "claims": [
      {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Parsons — Anarchism,1906",
            "publishedDate": "Anarchism, The Liberator3/2/1906",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Anarchism28/30–33",
            "statement": "Defende ampliação geral da liberdade individual e oposição ao governo político, preservando administração social."
          }
        ],
        "rationale": "Apresenta norma ampla de poder e autogoverno, além de uma liberdade de expressão isolada.",
        "uncertainty": "Não detalha toda execução coercitiva da administração futura; crítica à representação27–29 não autoriza inverter REP. Sem alegar ausência real de coerção.",
        "reviewedOn": "2026-10-08"
      }
    ]
  },
  {
    "id": "hubert-harrison",
    "name": "Hubert Harrison",
    "period": "When Africa Awakes, introdução própria15/8/1920",
    "rationale": "Exige democracia para todos os povos e critica sua restrição imperial e racial.",
    "caveats": "1883–1927, ColumbiaLibraries28/38. Introdução própria datada, não toda coletânea1917–1920 ou todas resoluções coletivas. Democracia abrangente não especifica arquitetura constitucional; nenhuma inferência de religião, imigração ou política militar a partir de identidade/reputação. Onze eixos desconhecidos.",
    "sources": [
      {
        "title": "Harrison — When Africa Awakes, introdução",
        "url": "https://www.gutenberg.org/files/69712/69712-h/69712-h.htm",
        "note": "Corpo0–114 efetivamente lido, introdução63–82 inteira e data15/8/1920 em82. CapítuloI apenas início85–114; narração de discursos e resoluções coletivas não tratadas como voz própria exclusiva. Não obra1179linhas inteira."
      },
      {
        "title": "Columbia University Libraries — Hubert Harrison",
        "url": "https://library.columbia.edu/about/news/libraries/2005/20051031_harrison.html",
        "note": "Corpo22–43 efetivamente lido, HubertHenryHarrison1883–1927 em28 e morte1927 em38. PDFfindingaid negou acessoAnubis; índices de datas exatas não equivalem a PDF reaberto."
      }
    ],
    "claims": [
      {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Harrison — When Africa Awakes, introdução",
            "publishedDate": "When Africa Awakes, introdução própria15/8/1920",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Introdução própria63–69; data82",
            "statement": "Exige democracia para todos os povos, rejeitando sua aplicação limitada por imperialismo e hierarquias raciais."
          }
        ],
        "rationale": "A orientação é geral de legitimidade popular, com alcance colonial e racial explícito, não apenas eleição de uma organização.",
        "uncertainty": "Não detalha instituições constitucionais, multipartidarismo ou execução. Capítulos seguintes não foram todos lidos; não transformar narrativa coletiva em declaração exclusiva.",
        "reviewedOn": "2026-10-08"
      }
    ]
  }
];
export const historicalFigureBatch21:ReferenceEntry[]=proposals.map(p=>{
 const sources:ReferenceSource[]=structuredClone(p.sources);
 const e:ReferenceEntry={id:p.id,name:p.name,kind:'person',category:'historical-figure',period:p.period,rationale:p.rationale,caveats:p.caveats,sources,vec:Object.fromEntries(AXES.map(({key})=>[key,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{}};
 for(const raw of p.claims){const input=raw as ReferenceAxisCoding;const r=codeReferenceAxis(input,sources);e.vec[input.axis]=r.value;e.evidence[input.axis]=r.evidence;e.axisEvidence![input.axis]=r.axisEvidence;e.coding![input.axis]=r.coding;}
 return e;
});
