/** Batch 03: source-backed country profiles with explicit partial coverage. */
import type { AxisKey, ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type EditorialPosition } from '../lib/reference-coding';
interface LocatedClaim { locator: string; statement: string }
interface BatchClaim extends LocatedClaim { axis: AxisKey; position: EditorialPosition; confidence: 'high'|'medium'; source:'constitution'|'practice'; basis:'norm'|'practice'; publishedDate:string; uncertainty:string }
interface CountrySpec { id:string; name:string; aliases:string[]; freedomSlug:string; constitutionSlug:string; constitutionVersion:string; primaryUrl:string|null; constitutionalContext:LocatedClaim & {limitation:string}; historicalNormClaims:BatchClaim[]; claims:BatchClaim[] }
export const currentCountryBatch03Specs: CountrySpec[] = [
  {
    "id": "andorra-current-2025",
    "name": "Andorra",
    "aliases": [],
    "freedomSlug": "andorra",
    "constitutionSlug": "Andorra_1993",
    "constitutionVersion": "1993, texto oferecido pelo Parlamento em consulta de 2026; sem certificação independente de consolidação",
    "primaryUrl": "https://www.consellgeneral.ad/fitxers/documents/constitucio/const-en",
    "constitutionalContext": {
      "locator": "Artigos 11,43,51,79–80",
      "statement": "Parlamentarismo com copríncipes e autonomia administrativa e financeira das paróquias.",
      "limitation": "Norma no texto apresentado pelo Parlamento consultado em 2026; não prova execução em 2024 nem consolidação independente."
    },
    "claims": [
      {
        "axis": "rep",
        "position": "strong-first",
        "confidence": "high",
        "source": "practice",
        "basis": "practice",
        "publishedDate": "2025; observações de 2024",
        "locator": "Overview; Key Developments in 2024",
        "statement": "Eleições parlamentares regulares consideradas livres e justas.",
        "uncertainty": "Naturalização restritiva exclui muitos residentes do sufrágio; não codificamos integração cultural a partir de cidadania."
      },
      {
        "axis": "est",
        "position": "moderate-second",
        "confidence": "medium",
        "source": "constitution",
        "basis": "norm",
        "publishedDate": "1993, texto oferecido pelo Parlamento em consulta de 2026; sem certificação independente de consolidação",
        "locator": "Artigos 79–80",
        "statement": "Conselhos locais eleitos têm autogoverno, orçamento, tributação e competências de planejamento e serviços comunais.",
        "uncertainty": "Autonomia local substantiva dentro de leis nacionais; não é estrutura federativa nem avaliação de execução. Escopo temporal: 1993, texto oferecido pelo Parlamento em consulta de 2026; sem certificação independente de consolidação."
      },
      {
        "axis": "rel",
        "position": "moderate-second",
        "confidence": "medium",
        "source": "constitution",
        "basis": "norm",
        "publishedDate": "1993, texto oferecido pelo Parlamento em consulta de 2026; sem certificação independente de consolidação",
        "locator": "Artigos 11(1)–(3) e 43(2)",
        "statement": "Liberdade religiosa coexistindo com cooperação especial com Igreja Católica e bispo entre os copríncipes.",
        "uncertainty": "Privilégio institucional não demonstra que toda legislação seja religiosa nem crenças individuais. Escopo temporal: 1993, texto oferecido pelo Parlamento em consulta de 2026; sem certificação independente de consolidação."
      },
      {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "source": "constitution",
        "basis": "norm",
        "publishedDate": "1993, texto oferecido pelo Parlamento em consulta de 2026; sem certificação independente de consolidação",
        "locator": "Artigos 8–10 e 15",
        "statement": "Proíbe morte e tortura, assegura defesa e exige controle judicial da detenção e ingresso domiciliar.",
        "uncertainty": "Garantias processuais normativas, sem demonstrar todas as políticas de armas, drogas ou vigilância; exceções emergenciais no artigo 42. Escopo temporal: 1993, texto oferecido pelo Parlamento em consulta de 2026; sem certificação independente de consolidação."
      },
      {
        "axis": "mor",
        "position": "moderate-second",
        "confidence": "medium",
        "source": "practice",
        "basis": "practice",
        "publishedDate": "2025; observações de 2024",
        "locator": "Overview; Key Developments in 2024, janeiro",
        "statement": "Aborto permanecia completamente proibido; ativista crítica foi absolvida de difamação.",
        "uncertainty": "Codificação parcial da escolha reprodutiva, sem inferir conservadorismo extremo em todos os costumes; absolvição limita conclusão sobre repressão."
      }
    ],
    "historicalNormClaims": []
  },
  {
    "id": "liechtenstein-current-2025",
    "name": "Liechtenstein",
    "aliases": [],
    "freedomSlug": "liechtenstein",
    "constitutionSlug": "Liechtenstein_2011",
    "constitutionVersion": "1921, rev. 2011",
    "primaryUrl": null,
    "constitutionalContext": {
      "locator": "Artigos 37,39,44,46",
      "statement": "Parlamento eleito e poderes próprios do príncipe; Igreja estatal e liberdade de crença.",
      "limitation": "O texto é uma fonte normativa datada, não certificado de execução ou consolidação de todas as emendas. Proposições desta versão permanecem contexto não pontuado até validação contemporânea."
    },
    "claims": [
      {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "source": "practice",
        "basis": "practice",
        "publishedDate": "2025; observações de 2024",
        "locator": "Overview; Key Developments in 2024",
        "statement": "Sistema parlamentar coexistia com monarquia politicamente poderosa; eleitores rejeitaram eleição direta do governo em 2024.",
        "uncertainty": "Não inferir autocracia pela monarquia; direção democrática limitada pelo poder político real do príncipe."
      },
      {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "source": "practice",
        "basis": "practice",
        "publishedDate": "2025; observações de 2024",
        "locator": "Key Developments in 2024, maio/julho; explicação narrativa G3",
        "statement": "Casamento igualitário foi aprovado pelo Parlamento e sancionado, com entrada em vigor prevista para janeiro de 2025; adoção também foi ampliada.",
        "uncertainty": "Orientação legislativa parcial em igualdade sexual; não afirmar vigência do casamento em 2024 nem posições em todos os costumes."
      }
    ],
    "historicalNormClaims": [
      {
        "axis": "rel",
        "position": "moderate-second",
        "confidence": "medium",
        "source": "constitution",
        "basis": "norm",
        "publishedDate": "1921, rev. 2011",
        "locator": "Artigos 37 e 39",
        "statement": "Igreja Católica estatal, com liberdade de crença e direitos civis e políticos independentes da religião.",
        "uncertainty": "Escopo normativo da relação Estado-religião; não mede influência em todas as políticas públicas."
      },
      {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "source": "constitution",
        "basis": "norm",
        "publishedDate": "1921, rev. 2011",
        "locator": "Artigo 44",
        "statement": "Proíbe unidades armadas fora de polícia e ordem interna, exceto defesa em emergência.",
        "uncertainty": "Desmilitarização normativa moderada com dever de defesa; não se infere não intervenção nem ausência de toda cooperação militar."
      }
    ]
  },
  {
    "id": "monaco-current-2025",
    "name": "Mônaco",
    "aliases": [
      "Monaco"
    ],
    "freedomSlug": "monaco",
    "constitutionSlug": "Monaco_2002",
    "constitutionVersion": "1962, rev. 2002",
    "primaryUrl": null,
    "constitutionalContext": {
      "locator": "Artigos 3,4,9,19,20,23",
      "statement": "Poder executivo do príncipe; legislação conjunta com Conselho Nacional eleito.",
      "limitation": "O texto é uma fonte normativa datada, não certificado de execução ou consolidação de todas as emendas. Proposições desta versão permanecem contexto não pontuado até validação contemporânea."
    },
    "claims": [
      {
        "axis": "rep",
        "position": "moderate-second",
        "confidence": "medium",
        "source": "practice",
        "basis": "practice",
        "publishedDate": "2025; observações de 2024",
        "locator": "Overview; Key Developments in 2024",
        "statement": "Príncipe nomeava governo responsável somente perante ele; Parlamento era livremente eleito.",
        "uncertainty": "Competição parlamentar real é contraevidência à ausência total de representação, mas não controla o executivo."
      }
    ],
    "historicalNormClaims": [
      {
        "axis": "rel",
        "position": "moderate-second",
        "confidence": "medium",
        "source": "constitution",
        "basis": "norm",
        "publishedDate": "1962, rev. 2002",
        "locator": "Artigos 9 e 23",
        "statement": "Catolicismo como religião do Estado, com liberdade de culto e vedação de participação religiosa compulsória.",
        "uncertainty": "Igreja oficial com pluralismo jurídico; não prova determinação religiosa geral das leis."
      },
      {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "source": "constitution",
        "basis": "norm",
        "publishedDate": "1962, rev. 2002",
        "locator": "Artigos 19–20",
        "statement": "Detenção sujeita à ordem judicial fundamentada; proíbe punição degradante e pena de morte.",
        "uncertainty": "Garantias normativas processuais e penais; não mede segurança policial completa ou execução de todas as garantias."
      }
    ]
  },
  {
    "id": "san-marino-current-2025",
    "name": "San Marino",
    "aliases": [],
    "freedomSlug": "san-marino",
    "constitutionSlug": "",
    "constitutionVersion": "Declaração de 1974, texto coordenado pelo Decreto 79 de 8/7/2002",
    "primaryUrl": "https://www.consigliograndeegenerale.sm/on-line/documento17134126.html",
    "constitutionalContext": {
      "locator": "Artigos 1–3,6,15",
      "statement": "Soberania popular, Conselho eleito e garantias de liberdade e defesa.",
      "limitation": "O texto é uma fonte normativa datada, não certificado de execução ou consolidação de todas as emendas. Proposições desta versão permanecem contexto não pontuado até validação contemporânea."
    },
    "claims": [
      {
        "axis": "rep",
        "position": "strong-first",
        "confidence": "high",
        "source": "practice",
        "basis": "practice",
        "publishedDate": "2025; observações de 2024",
        "locator": "Overview; Key Developments in 2024",
        "statement": "Eleições antecipadas de junho de 2024 foram críveis, livres e aceitas pelos participantes.",
        "uncertainty": "Corrupção e risco de multas por difamação persistiam."
      }
    ],
    "historicalNormClaims": [
      {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "source": "constitution",
        "basis": "norm",
        "publishedDate": "Declaração de 1974, texto coordenado pelo Decreto 79 de 8/7/2002",
        "locator": "Artigo 1",
        "statement": "Rejeita guerra como forma de resolver controvérsias e adota princípios da Carta da ONU.",
        "uncertainty": "Orientação normativa de solução pacífica, não inventário de operações militares; artigo 13 admite dever de defesa."
      },
      {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "source": "constitution",
        "basis": "norm",
        "publishedDate": "Declaração de 1974, texto coordenado pelo Decreto 79 de 8/7/2002",
        "locator": "Artigos 6 e 15",
        "statement": "Garante sigilo de comunicações, defesa processual e julgamento independente; punições devem ser humanas e orientadas à reabilitação.",
        "uncertainty": "Garantias normativas datadas; limitações excepcionais por ordem pública permanecem. Difamação na prática impede concluir liberdade irrestrita."
      }
    ]
  },
  {
    "id": "malta-current-2025",
    "name": "Malta",
    "aliases": [],
    "freedomSlug": "malta",
    "constitutionSlug": "Malta_2016",
    "constitutionVersion": "Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026",
    "primaryUrl": "https://legislation.mt/eli/const/eng/pdf",
    "constitutionalContext": {
      "locator": "Artigos 1,2,10,40,45",
      "statement": "Constituição oficial consolidada substitui tradução de 2016 marcada como posteriormente emendada.",
      "limitation": "O texto é uma fonte normativa datada, não certificado de execução ou consolidação de todas as emendas."
    },
    "claims": [
      {
        "axis": "rep",
        "position": "strong-first",
        "confidence": "high",
        "source": "practice",
        "basis": "practice",
        "publishedDate": "2025; observações de 2024",
        "locator": "Overview; Key Developments in 2024",
        "statement": "Eleições regulares competitivas e alternância periódica; presidência cerimonial eleita pelo Parlamento em 2024.",
        "uncertainty": "Barreiras a partidos pequenos e corrupção continuam; prática de 2024 e normas de 2026 são recortes distintos."
      },
      {
        "axis": "rel",
        "position": "moderate-second",
        "confidence": "medium",
        "source": "constitution",
        "basis": "norm",
        "publishedDate": "Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026",
        "locator": "Artigos 2 e 40",
        "statement": "Religião católica estatal e ensino religioso nas escolas públicas coexistem com liberdade de culto e recusa de instrução religiosa.",
        "uncertainty": "Norma de 2026, sem afirmar prática escolar universal ou identidade religiosa da população. Escopo temporal: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026."
      },
      {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "source": "constitution",
        "basis": "norm",
        "publishedDate": "Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026",
        "locator": "Artigo 1(3)",
        "statement": "Adota neutralidade, não alinhamento e recusa alianças militares, com exceções de autodefesa e medidas da ONU.",
        "uncertainty": "Orientação normativa em 2026, sem afirmar ausência de forças de defesa ou não intervenção absoluta. Escopo temporal: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026."
      },
      {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "source": "constitution",
        "basis": "norm",
        "publishedDate": "Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026",
        "locator": "Artigos 10,17,18 e 21",
        "statement": "Prevê ensino primário gratuito em escolas estatais e assistência social, preservando incentivo à empresa privada.",
        "uncertainty": "Provisão pública setorial, não predominância estatal da economia; princípios deste capítulo não são diretamente exigíveis em juízo. Escopo temporal: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026."
      },
      {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "source": "constitution",
        "basis": "norm",
        "publishedDate": "Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026",
        "locator": "Artigo 45(1)–(5), versão consultada em 2026",
        "statement": "Proteção antidiscriminatória inclui sexo, orientação sexual e identidade de gênero.",
        "uncertainty": "Proteção normativa parcial; artigo 45 preserva exceções, inclusive matérias de direito pessoal, e não estabelece toda política de aborto ou família. Escopo temporal: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026."
      }
    ],
    "historicalNormClaims": []
  },
  {
    "id": "cyprus-current-2025",
    "name": "Chipre",
    "aliases": [
      "Cyprus",
      "República de Chipre"
    ],
    "freedomSlug": "cyprus",
    "constitutionSlug": "Cyprus_2013",
    "constitutionVersion": "1960, rev. 2013; posteriormente emendada",
    "primaryUrl": null,
    "constitutionalContext": {
      "locator": "Artigos 1 e 18",
      "statement": "Texto prevê eleição presidencial comunitária e liberdade religiosa; não pontuado por emendas e divergência da execução territorial.",
      "limitation": "O texto é uma fonte normativa datada, não certificado de execução ou consolidação de todas as emendas."
    },
    "claims": [
      {
        "axis": "rep",
        "position": "strong-first",
        "confidence": "high",
        "source": "practice",
        "basis": "practice",
        "publishedDate": "2025; observações de 2024",
        "locator": "Overview; Key Developments in 2024",
        "statement": "Democracia no território administrado pela República; eleições municipais e europeias de junho incluíram partidos concorrentes e independente eleito.",
        "uncertainty": "Perfil limita-se à administração republicana no sul; não representa governo ou condições do norte. Problemas de asilo e discriminação não são convertidos em assimilação cultural."
      }
    ],
    "historicalNormClaims": []
  },
  {
    "id": "bosnia-and-herzegovina-current-2025",
    "name": "Bósnia e Herzegovina",
    "aliases": [
      "Bosnia and Herzegovina"
    ],
    "freedomSlug": "bosnia-and-herzegovina",
    "constitutionSlug": "Bosnia_Herzegovina_2009",
    "constitutionVersion": "1995, rev. 2009",
    "primaryUrl": null,
    "constitutionalContext": {
      "locator": "Artigo III(1)–(3)",
      "statement": "Competências nacionais enumeradas e competências residuais das entidades.",
      "limitation": "O texto é uma fonte normativa datada, não certificado de execução ou consolidação de todas as emendas. Proposições desta versão permanecem contexto não pontuado até validação contemporânea."
    },
    "claims": [
      {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "source": "practice",
        "basis": "practice",
        "publishedDate": "2025; observações de 2024",
        "locator": "Overview; Key Developments in 2024",
        "statement": "Eleições locais competitivas e bem administradas, com pressão sobre votantes e exclusão de comunidades fora dos três grupos predominantes.",
        "uncertainty": "Representação étnica e bloqueios nacionalistas limitam democracia; eleição local não prova equivalência nacional perfeita."
      }
    ],
    "historicalNormClaims": [
      {
        "axis": "est",
        "position": "strong-first",
        "confidence": "medium",
        "source": "constitution",
        "basis": "norm",
        "publishedDate": "1995, rev. 2009",
        "locator": "Artigo III(1)–(3); confronto com Overview",
        "statement": "Funções não atribuídas expressamente às instituições nacionais pertencem às entidades.",
        "uncertainty": "Descentralização constitucional forte confirmada pela narrativa institucional; não avalia cada poder transferido desde Dayton, nem trata entidades como países distintos."
      }
    ]
  },
  {
    "id": "fiji-current-2025",
    "name": "Fiji",
    "aliases": [],
    "freedomSlug": "fiji",
    "constitutionSlug": "Fiji_2013",
    "constitutionVersion": "2013, texto inglês disponibilizado pelo governo em abril de 2026",
    "primaryUrl": "https://www.fiji.gov.fj/wp-content/uploads/2026/04/Fiji-Constitution-English-2013.pdf",
    "constitutionalContext": {
      "locator": "Seções 4,23,26",
      "statement": "Separação expressa entre religião e Estado e proteção contra discriminação por orientação sexual e identidade de gênero.",
      "limitation": "Texto normativo disponibilizado pelo governo em 2026; não descrição da execução em 2024."
    },
    "claims": [
      {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "source": "practice",
        "basis": "practice",
        "publishedDate": "2025; observações de 2024",
        "locator": "Overview; Key Developments in 2024",
        "statement": "Eleições democráticas regulares desde 2014 e transferência pacífica em 2022; oposição FijiFirst foi desregistrada em 2024.",
        "uncertainty": "Reformas pós-golpe e desregistro da oposição limitam conclusão sobre intensidade democrática; dúvidas judiciais sobre Constituição são preservadas."
      },
      {
        "axis": "rel",
        "position": "strong-first",
        "confidence": "medium",
        "source": "constitution",
        "basis": "norm",
        "publishedDate": "2013, texto inglês disponibilizado pelo governo em abril de 2026",
        "locator": "Seção 4",
        "statement": "Separa Estado de religião e proíbe preferência oficial por fé ou discriminação contra não crentes.",
        "uncertainty": "Escopo normativo expresso de 2013, não descrição de toda prática; tribunais questionaram origem pós-golpe da Constituição em 2024. Escopo temporal: 2013, texto inglês disponibilizado pelo governo em abril de 2026."
      },
      {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "source": "constitution",
        "basis": "norm",
        "publishedDate": "2013, texto inglês disponibilizado pelo governo em abril de 2026",
        "locator": "Seção 26(3)–(8)",
        "statement": "Proteção antidiscriminatória inclui orientação sexual, gênero e expressão de identidade.",
        "uncertainty": "Proteção parcial, com exceções para direito pessoal, casamento e propriedade costumeira; não presume casamento igualitário. Escopo temporal: 2013, texto inglês disponibilizado pelo governo em abril de 2026."
      }
    ],
    "historicalNormClaims": []
  },
  {
    "id": "samoa-current-2025",
    "name": "Samoa",
    "aliases": [],
    "freedomSlug": "samoa",
    "constitutionSlug": "Samoa_2017",
    "constitutionVersion": "Consolidação oficial em 31/12/2023",
    "primaryUrl": "https://www.ag.gov.ws/wp-content/uploads/2024/02/Constitution-of-the-Independent-State-of-Samoa-1960.pdf",
    "constitutionalContext": {
      "locator": "Artigos 1,11–12",
      "statement": "Nação cristã e garantias de liberdade religiosa no texto oficial consolidado em 2023.",
      "limitation": "Escopo normativo limitado a 31/12/2023; não inclui a emenda constitucional de 2025."
    },
    "claims": [
      {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "source": "practice",
        "basis": "practice",
        "publishedDate": "2025; observações de 2024",
        "locator": "Overview; Key Developments in 2024",
        "statement": "Eleições regulares e vitória oposicionista em 2021; candidaturas restringem-se a chefes tradicionais de família.",
        "uncertainty": "Não inferir autoritarismo da longa permanência partidária isolada; restrição efetiva de candidatura sustenta intensidade moderada."
      },
      {
        "axis": "rel",
        "position": "moderate-second",
        "confidence": "medium",
        "source": "constitution",
        "basis": "norm",
        "publishedDate": "Consolidação oficial em 31/12/2023",
        "locator": "Artigos 1(3),11–12",
        "statement": "Define nação cristã, preservando mudança de religião e recusa de instrução de outra fé.",
        "uncertainty": "Identidade religiosa estatal normativa não prova lei teocrática ou todos os poderes de aldeias; versão oficial usada é consolidada em 31/12/2023. Escopo temporal: Consolidação oficial em 31/12/2023."
      }
    ],
    "historicalNormClaims": []
  },
  {
    "id": "tonga-current-2025",
    "name": "Tonga",
    "aliases": [],
    "freedomSlug": "tonga",
    "constitutionSlug": "Tonga_2025",
    "constitutionVersion": "1875, rev. 2025; tradução primária Constitute, cotejada com emenda oficial de julho de 2025",
    "primaryUrl": null,
    "constitutionalContext": {
      "locator": "Seções 5–6,54–55,60",
      "statement": "Liberdade religiosa com regra de sábado sagrado; governadores nomeados pelo rei e sem poderes legislativos.",
      "limitation": "Normas na revisão de 2025; a emenda oficial consultada altera cláusula 50 e não mede execução das cláusulas 5–6/54–55."
    },
    "claims": [
      {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "source": "practice",
        "basis": "practice",
        "publishedDate": "2025; observações de 2024",
        "locator": "Overview; Key Developments in 2024",
        "statement": "Primeiro-ministro apoiado por maioria parlamentar eleita coexistia com veto real e pressão política sobre ministros em 2024.",
        "uncertainty": "Representação popular não elimina poderes da nobreza e do rei; não converter a monarquia em ausência completa de eleições."
      },
      {
        "axis": "rel",
        "position": "moderate-second",
        "confidence": "medium",
        "source": "constitution",
        "basis": "norm",
        "publishedDate": "1875, rev. 2025; tradução primária Constitute, cotejada com emenda oficial de julho de 2025",
        "locator": "Seções 5–6",
        "statement": "Liberdade de culto coexistindo com proibição constitucional de atividades comerciais no dia sagrado, salvo exceção legal.",
        "uncertainty": "Presença jurídica de norma religiosa específica, não afirma religião oficial única ou controle religioso de toda legislação. Escopo temporal: 1875, rev. 2025; tradução primária Constitute, cotejada com emenda oficial de julho de 2025."
      },
      {
        "axis": "est",
        "position": "moderate-second",
        "confidence": "medium",
        "source": "constitution",
        "basis": "norm",
        "publishedDate": "1875, rev. 2025; tradução primária Constitute, cotejada com emenda oficial de julho de 2025",
        "locator": "Seções 54–55",
        "statement": "Rei nomeia governadores mediante conselho do primeiro-ministro; governadores executam leis sem poder de legislar localmente.",
        "uncertainty": "Direção territorial centralizada parcial: governadores de ilhas selecionadas executam leis sem legislar; não inferida da monarquia isolada e sem inventário integral da hierarquia territorial. Escopo temporal: 1875, rev. 2025; tradução primária Constitute, cotejada com emenda oficial de julho de 2025."
      }
    ],
    "historicalNormClaims": []
  }
];
const axes: AxisKey[] = ['est','rep','pod','imi','dip','int','eco','con','com','rel','mor','tec'];
const title = (spec: CountrySpec, source: BatchClaim['source']) => source==='constitution' ? `Texto constitucional — ${spec.name}${spec.primaryUrl ? ' / portal oficial' : ' / Constitute'}` : `Freedom in the World 2025 — ${spec.name}`;
export const currentCountryBatch03: ReferenceEntry[] = currentCountryBatch03Specs.map(spec=>{
 const sources: ReferenceSource[] = [
  {title:title(spec,'constitution'),url:spec.primaryUrl ?? `https://www.constituteproject.org/constitution/${spec.constitutionSlug}?lang=en`,note:`Texto primário lido em 7/10/2026. Versão: ${spec.constitutionVersion}. ${spec.constitutionalContext.locator}: ${spec.constitutionalContext.statement} ${spec.constitutionalContext.limitation}`},
  {title:title(spec,'practice'),url:`https://freedomhouse.org/country/${spec.freedomSlug}/freedom-world/2025`,note:'Overview e Key Developments in 2024 efetivamente lidos em 7/10/2026; relatório abreviado de 2025. Usam-se narrativas específicas, sem conversão de notas numéricas.'},
 ];
 const vec=Object.fromEntries(axes.map(axis=>[axis,50])) as Record<AxisKey,number>;
 const evidence:ReferenceEntry['evidence']={}; const axisEvidence:NonNullable<ReferenceEntry['axisEvidence']>={}; const coding:NonNullable<ReferenceEntry['coding']>={};
 for(const item of spec.claims){
  const encoded=codeReferenceAxis({axis:item.axis,position:item.position,confidence:item.confidence,claims:[{sourceTitle:title(spec,item.source),locator:item.locator,statement:item.statement,basis:item.basis,publishedDate:item.publishedDate,accessedDate:'2026-10-07'}],rationale:item.statement,uncertainty:item.uncertainty,reviewedOn:'2026-10-07'},sources);
  vec[item.axis]=encoded.value;evidence[item.axis]=encoded.evidence;axisEvidence[item.axis]=encoded.axisEvidence;coding[item.axis]=encoded.coding;
 }
 return{id:spec.id,name:spec.name,aliases:spec.aliases,kind:'country',category:'country',period:spec.claims.some(item=>item.source==='constitution') ? `Prática em 2024; norma: ${spec.constitutionVersion}` : 'Prática em 2024; normas antigas apenas como contexto não pontuado',vec,evidence,axisEvidence,coding,sources,rationale:spec.claims.map(item=>item.statement).join(' '),caveats:`${spec.claims.map(item=>item.uncertainty).join(' ')} Âncoras editoriais não são medições. Normas e execução têm escopos distintos. Eixos ausentes são desconhecidos; cobertura menor que seis eixos para matches.`};
});
