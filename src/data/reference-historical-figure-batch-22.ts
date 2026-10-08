import type {ReferenceEntry,ReferenceSource} from './references';
import {AXES} from '../lib/scoring';
import {codeReferenceAxis,type ReferenceAxisCoding} from '../lib/reference-coding';
/** Isolated missing identities. Actual dated declarations; independent review required. */
const proposals = [
  {
    "id": "rutherford-b-hayes",
    "name": "Rutherford B. Hayes",
    "period": "Declaração inaugural1877-03-05",
    "rationale": "Defende autogoverno dos estados sujeito a direitos constitucionais, autoridade eleitoral, arbitragem externa e não interferência.",
    "caveats": "1822-10-04–1893-01-17,Miller49/53. Programa declarado1877, não resultado da Reconstrução nem toda presidência. Invoca direitos nacionais e proteção federal33–34, não autonomia estadual sem limites. A disputa eleitoral e tribunal53–59 são reconhecidos; chamar sufrágio universal não prova voto de toda população histórica. Oito eixos desconhecidos.",
    "sources": [
      {
        "title": "Rutherford B. Hayes — programa inaugural1877-03-05",
        "url": "https://avalon.law.yale.edu/19th_century/hayes.asp",
        "note": "Corpo próprio19–61 inteiro efetivamente lido; ficha16–17data. Nem medidas executadas nem reputação militar usadas como códigos."
      },
      {
        "title": "Miller Center — Rutherford B. Hayes, identidade",
        "url": "https://millercenter.org/president/hayes",
        "note": "Página0–156 efetivamente lida, nome45, nascimento49 e morte53. Metadata, religião pessoal e partido não códigos."
      }
    ],
    "claims": [
      {
        "axis": "est",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Rutherford B. Hayes — programa inaugural1877-03-05",
            "publishedDate": "1877-03-05",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "26–29/33–37",
            "statement": "Propõe autogoverno local dos estados, respeitando Constituição e direitos de todos, com proteção federal."
          }
        ],
        "rationale": "Distribui competência entre governos estaduais e nacional como princípio de organização, não apenas gestão de uma escola.",
        "uncertainty": "Dever nacional de proteger emancipados33–34 e apoio nacional a escolas37 limitam autonomia local; não supremacia estadual irrestrita.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Rutherford B. Hayes — programa inaugural1877-03-05",
            "publishedDate": "1877-03-05",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "37/44–45/52–59",
            "statement": "Defende sufrágio, autoridade popular e solução legal pacífica da disputa entre partidos pela presidência."
          }
        ],
        "rationale": "Legitimidade eleitoral, partidos e sucessão são normas amplas, não elogio apenas à vitória pessoal.",
        "uncertainty": "Eleições1876 contestadas e tribunal ad hoc53–55 são contrapontos expressos. Sufrágio dito universal59 não demonstra inclusão efetiva de todos sexos e povos.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Rutherford B. Hayes — programa inaugural1877-03-05",
            "publishedDate": "1877-03-05",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "49–51",
            "statement": "Propõe arbitragem e solução pacífica para diferenças internacionais."
          }
        ],
        "rationale": "Regra geral para relações e conflitos entre nações, não paz só num episódio.",
        "uncertainty": "Declaração não equivale a renunciar toda defesa armada ou provar ausência de guerras durante carreira.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "int",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Rutherford B. Hayes — programa inaugural1877-03-05",
            "publishedDate": "1877-03-05",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "49–51",
            "statement": "Propõe observar estritamente a não interferência nos assuntos de nações estrangeiras."
          }
        ],
        "rationale": "Norma geral de soberania externa, não somente não adesão a um tratado.",
        "uncertainty": "Oferecer arbitragem e bons ofícios50–51 permanece permitido; não isolamento de relações internacionais.",
        "reviewedOn": "2026-10-08"
      }
    ]
  },
  {
    "id": "james-a-garfield",
    "name": "James A. Garfield",
    "period": "Declaração inaugural1881-03-04",
    "rationale": "Defende autonomia dos estados sob a União, soberania eleitoral e liberdade religiosa sem usurpação eclesiástica do governo.",
    "caveats": "1831-11-19–1881-09-19,Miller46/50. Normas inaugurais1881, não governo ou toda carreira. Supremacia nacional50–51, educação eleitoral63–68, proteção de direitos58 e proibição de poligamia89–90 são limites. Supervisão de canal87 não estabelece orientação geral de intervenção. Nove eixos desconhecidos.",
    "sources": [
      {
        "title": "James A. Garfield — programa inaugural1881-03-04",
        "url": "https://millercenter.org/the-presidency/presidential-speeches/march-4-1881-inaugural-address",
        "note": "Corpo próprio36–95 inteiro efetivamente lido, NationalArchives indicado30. TentativaAvalon/garfield.asp retornou404; nenhum corpo fictício atribuído a essa URL."
      },
      {
        "title": "Miller Center — James A. Garfield, identidade",
        "url": "https://millercenter.org/president/garfield",
        "note": "Página0–165 efetivamente lida, nascimento46 e morte50. Metadata, religião pessoal e partido não códigos."
      }
    ],
    "claims": [
      {
        "axis": "est",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "James A. Garfield — programa inaugural1881-03-04",
            "publishedDate": "1881-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "44/50–51/93",
            "statement": "Preserva autogoverno e direitos estaduais, subordinados à supremacia constitucional da União."
          }
        ],
        "rationale": "Norma geral de competências locais e nacionais, além de um orçamento territorial.",
        "uncertainty": "Supremacia permanente da União50–51 e cumprimento de suas leis93 expressos; não separatismo ou poder estadual absoluto.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "James A. Garfield — programa inaugural1881-03-04",
            "publishedDate": "1881-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "48/59–64/94",
            "statement": "Defende governo que executa vontade eleitoral popular e proteção legal do voto livre."
          }
        ],
        "rationale": "Eleitores como autoridade soberana64 e governo do povo94 formam orientação geral, não mera vitória própria.",
        "uncertainty": "Reconhece perigos de ignorância e corrupção63 e pede educação, sem provar sufrágio historicamente universal ou igualdade efetiva.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "rel",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "James A. Garfield — programa inaugural1881-03-04",
            "publishedDate": "1881-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "88–90",
            "statement": "Defende não estabelecimento e livre exercício religioso, vedando que organizações eclesiásticas usurpem funções públicas."
          }
        ],
        "rationale": "Relação constitucional entre religião e governo em geral, além de crença pessoal.",
        "uncertainty": "Ao mesmo tempo pede proibir poligamia como violação da família/ordem89–90; separação não neutralidade moral ilimitada ou descrença pessoal.",
        "reviewedOn": "2026-10-08"
      }
    ]
  },
  {
    "id": "benjamin-harrison",
    "name": "Benjamin Harrison",
    "period": "Declaração inaugural1889-03-04",
    "rationale": "Defende voto livre e aceitação da oposição, arbitragem externa, autonomia de outras nações e proteção tarifária nacional.",
    "caveats": "1833-08-20–1901-03-13,Miller46/50. Declaração1889, não todos atos posteriores. Qualificação eleitoral82, restrições à naturalização54–55, direitos de cidadãos/concessões externos60–61 e expansão naval74–75 limitam leituras absolutas. Oito eixos desconhecidos; crescimento privado histórico44 não norma inteira de propriedade.",
    "sources": [
      {
        "title": "Benjamin Harrison — programa inaugural1889-03-04",
        "url": "https://avalon.law.yale.edu/19th_century/harris.asp",
        "note": "Corpo próprio19–90 inteiro efetivamente lido, data17. Autodeclaração não dominar vizinhos58 não fato histórico certificado."
      },
      {
        "title": "Miller Center — Benjamin Harrison, identidade",
        "url": "https://millercenter.org/president/bharrison",
        "note": "Página0–153 efetivamente lida, nascimento46 e morte50. Metadata, religião pessoal e partido não códigos."
      }
    ],
    "claims": [
      {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Benjamin Harrison — programa inaugural1889-03-04",
            "publishedDate": "1889-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "79–86",
            "statement": "Defende eleições livres que expressem maioria dos eleitores qualificados e respeito à derrota e à oposição."
          }
        ],
        "rationale": "Norma ampla de autoridade e competição política, não conselho eleitoral de uma empresa.",
        "uncertainty": "Eleitores qualificados82 e exclusões de naturalização54–55 limitam alcance; sem certificação de igualdade universal praticada.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Benjamin Harrison — programa inaugural1889-03-04",
            "publishedDate": "1889-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "62–63; contraponto74–75",
            "statement": "Propõe diplomacia e arbitragem como meios adequados à solução pacífica de diferenças internacionais."
          }
        ],
        "rationale": "Regra geral de conflitos entre países, além de uma negociação pontual.",
        "uncertainty": "Constrói navios e armamentos74–75 para evitar combate desigual; pacifismo moderado não desarmamento integral.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "int",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Benjamin Harrison — programa inaugural1889-03-04",
            "publishedDate": "1889-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "56–61",
            "statement": "Propõe evitar interferência europeia, respeitar governos independentes americanos e obter concessões externas sem coerção."
          }
        ],
        "rationale": "Normas abordam soberania externa em mais de uma região e relações, não um único canal.",
        "uncertainty": "Direitos de cidadãos em outros países60, estações navais e veto à modificação de concessões61 preservados; não completa ausência de projeção externa.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "com",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Benjamin Harrison — programa inaugural1889-03-04",
            "publishedDate": "1889-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "37/43/70–75",
            "statement": "Propõe conservar proteção tarifária da indústria doméstica ao ajustar receitas."
          }
        ],
        "rationale": "Regra tarifária nacional explícita para diversas indústrias, não um projeto de compra local.",
        "uncertainty": "Também favorece intercâmbio comercial e linhas de navegação75; proteção não fechamento de todo comércio internacional.",
        "reviewedOn": "2026-10-08"
      }
    ]
  },
  {
    "id": "william-mckinley",
    "name": "William McKinley",
    "period": "Declaração inaugural1897-03-04",
    "rationale": "Defende eleições e liberdades civis, tarifas protetoras com reciprocidade e solução diplomática antes da guerra.",
    "caveats": "1843-01-29–1901-09-14,Miller46/50. Recorte é promessa inaugural1897; não comportamento da presidência1897–1901. Visão secundária institucional29–30 registra guerra/império posteriores e não sustenta estes códigos de norma. Naturalização restritiva58, autoridade legal56 e defesa de direitos externos66 são contrapontos. Sete eixos desconhecidos: moeda, antitruste e orçamento não propriedade ou alocação gerais.",
    "sources": [
      {
        "title": "William McKinley — programa inaugural1897-03-04",
        "url": "https://avalon.law.yale.edu/19th_century/mckin1.asp",
        "note": "Corpo próprio19–83 inteiro efetivamente lido por duas aberturas sucessivas:19–43 e44–83. Data17. Não segundo programa1901 nem decisões1898."
      },
      {
        "title": "Miller Center — William McKinley, identidade",
        "url": "https://millercenter.org/president/mckinley",
        "note": "Página0–174 efetivamente lida, nascimento46 e morte50; visão29–30 contextualiza limite norma/prática, não gera score. Metadata, religião pessoal e partido não códigos."
      }
    ],
    "claims": [
      {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "William McKinley — programa inaugural1897-03-04",
            "publishedDate": "1897-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "52–53/72–78",
            "statement": "Defende eleições justas e Congresso como agente da vontade soberana popular, sujeito a posterior julgamento eleitoral."
          }
        ],
        "rationale": "Norma de autoridade eleitoral e responsabilização dos representantes, além da própria posse.",
        "uncertainty": "Não prova democracia inclusiva efetiva; exclusões migratórias58 e contexto histórico de sufrágio ficam explícitos.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "William McKinley — programa inaugural1897-03-04",
            "publishedDate": "1897-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "52–56",
            "statement": "Defende preservar expressão, imprensa, pensamento e crença livres e justiça por tribunais contra linchamento."
          }
        ],
        "rationale": "Conjunto amplo de liberdade civil e contenção de coerção extrajudicial, não um único direito isolado.",
        "uncertainty": "Também exige cumprimento vigoroso das leis54–56 e veda certos imigrantes58; norma não ausência histórica de repressão ou toda prática da presidência.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "William McKinley — programa inaugural1897-03-04",
            "publishedDate": "1897-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "65–71",
            "statement": "Propõe evitar conquista e agressão territorial, recorrer à guerra apenas depois de esgotar meios pacíficos e favorecer arbitragem."
          }
        ],
        "rationale": "Regra ampla para guerra e paz entre países, não metáfora econômica.",
        "uncertainty": "Direitos nacionais66 e guerra após fracasso diplomático67 não renunciados. Recorte1897 não certifica conduta posterior1898–1901.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "int",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "William McKinley — programa inaugural1897-03-04",
            "publishedDate": "1897-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "65–66",
            "statement": "Propõe não interferir nos assuntos domésticos de governos estrangeiros e evitar alianças como amigo ou inimigo."
          }
        ],
        "rationale": "Declaração geral de soberania estrangeira, além de um tratado específico.",
        "uncertainty": "Insiste em direitos de cidadãos americanos em todo lugar66. Declaração1897 não comprova ou resume decisões posteriores de guerra/império.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "com",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "William McKinley — programa inaugural1897-03-04",
            "publishedDate": "1897-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "39–45",
            "statement": "Propõe tarifas gerais de proteção ao trabalho e às indústrias nacionais, com concessões recíprocas condicionadas."
          }
        ],
        "rationale": "Proteção abrange comércio de importações nacional, além de uma mercadoria.",
        "uncertainty": "Concessões para produtos não produzidos internamente44–45 e abertura de mercados externos fazem proteção moderada, não autarquia.",
        "reviewedOn": "2026-10-08"
      }
    ]
  },
  {
    "id": "zachary-taylor",
    "name": "Zachary Taylor",
    "period": "Declaração inaugural1849-03-05",
    "rationale": "Defende neutralidade externa e negociação antes de recorrer às armas, mantendo preparo militar.",
    "caveats": "1784-11-24–1850-07-09,Miller50/54. Programa declarado1849, não toda carreira militar ou presidência. Miller29 registra propriedade de pessoas escravizadas: retórica de liberdade não igualdade universal certificada. Congresso33 e república26 não bastam para completar representação ou federalismo. Dez eixos desconhecidos.",
    "sources": [
      {
        "title": "Zachary Taylor — programa inaugural1849-03-05",
        "url": "https://avalon.law.yale.edu/19th_century/taylor.asp",
        "note": "Corpo próprio19–36 inteiro efetivamente lido; data17. Louvor a atuação militar27 não usado para inverter a norma diplomática29–31."
      },
      {
        "title": "Miller Center — Zachary Taylor, identidade",
        "url": "https://millercenter.org/president/taylor",
        "note": "Página0–166 efetivamente lida, nascimento50 e morte54. Propriedade escravista29 é limite contextual, não vetor biográfico. Metadata, religião pessoal e partido não códigos."
      }
    ],
    "claims": [
      {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Zachary Taylor — programa inaugural1849-03-05",
            "publishedDate": "1849-03-05",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "29–31; contraponto27",
            "statement": "Propõe cultivar paz e esgotar diplomacia antes de apelar às armas em disputas internacionais."
          }
        ],
        "rationale": "Norma geral sobre solução de conflitos entre governos, além de paz numa ocasião.",
        "uncertainty": "Mantém eficiência máxima do Exército/Marinha27 e defesa de direitos30. Não desarmamento nem pacifismo de toda carreira militar.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "int",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Zachary Taylor — programa inaugural1849-03-05",
            "publishedDate": "1849-03-05",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "28–31",
            "statement": "Propõe abster-se de alianças entrelaçadas e permanecer estritamente neutro em disputas entre governos."
          }
        ],
        "rationale": "Regra geral de autonomia externa e não envolvimento, não somente simpatia a uma revolução.",
        "uncertainty": "Simpatia à extensão de liberdade28, forças militares27 e direitos próprios30 coexistem; neutralidade declarada não isolamento absoluto.",
        "reviewedOn": "2026-10-08"
      }
    ]
  }
];
export const historicalFigureBatch22:ReferenceEntry[]=proposals.map(p=>{
 const sources:ReferenceSource[]=structuredClone(p.sources);const e:ReferenceEntry={id:p.id,name:p.name,kind:'person',category:'historical-figure',period:p.period,rationale:p.rationale,caveats:p.caveats,sources,vec:Object.fromEntries(AXES.map(({key})=>[key,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{}};
 for(const raw of p.claims){const input=raw as ReferenceAxisCoding;const r=codeReferenceAxis(input,sources);e.vec[input.axis]=r.value;e.evidence[input.axis]=r.evidence;e.axisEvidence![input.axis]=r.axisEvidence;e.coding![input.axis]=r.coding;}return e;
});
