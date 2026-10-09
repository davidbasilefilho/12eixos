/** Source-author candidate only; not integrated or independently accepted. */
import type {ReferenceEntry, ReferenceSource} from './references';
import {codeReferenceAxis, type ReferenceAxisCoding} from '../lib/reference-coding';
export const ranking675Ideology01PreviousSnapshots=[
  {
    "id": "ideology-national-conservatism",
    "category": "ideology",
    "kind": "ideology",
    "name": "Conservadorismo nacional: declaração de princípios, 2022",
    "period": "National Conservatism: A Statement of Principles, publicada em 15 de junho de 2022",
    "vec": {
      "est": 50,
      "rep": 50,
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
    "rationale": "Defende nações independentes, Estado constitucional limitado e cooperação sem transferência de autoridade a órgãos supranacionais, com orientação religiosa pública e proteção de minorias.",
    "caveats": "Declaração ocidental específica de 2022, não toda forma de nacionalismo. Admite alianças e cooperação; sua descentralização convive com intervenção nacional para restaurar a ordem. Proteção de minorias e autonomia religiosa privada permanecem explícitas, sem inferir ausência de coerção pública ou equivalência a toda prática histórica.",
    "sources": [
      {
        "title": "Statement of Principles — National Conservatism",
        "url": "https://nationalconservatism.org/about/",
        "note": "Declaração do próprio movimento sobre nação, soberania, tradição e rejeição de teorias políticas baseadas em raça."
      },
      {
        "title": "National Conservatism: A Statement of Principles — declaração de 15 de junho de 2022",
        "url": "https://nationalconservatism.org/national-conservatism-a-statement-of-principles/",
        "note": "A página identifica publicação em 15 de junho de 2022. Os princípios 1–4 prescrevem independência nacional, alianças sem transferência supranacional, Estado limitado, descentralização com intervenção nacional e religião pública, protegendo minorias e indivíduos em sua vida privada."
      }
    ],
    "evidence": {},
    "axisEvidence": {},
    "coding": {}
  },
  {
    "id": "ideology-social-conservatism",
    "category": "ideology",
    "kind": "ideology",
    "name": "Conservadorismo social: manifesto do Heritage Party, versão v6a",
    "period": "A Manifesto for Social Conservatism, PDF v6a sem data de adoção identificada; versão consultada em 8 de outubro de 2026",
    "vec": {
      "est": 50,
      "rep": 50,
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
    "rationale": "Defende herança cultural, soberania nacional, liberdades civis e apoio público à família de homem e mulher, com restrições a conteúdos LGBT no ensino de menores.",
    "caveats": "Programa específico do Heritage Party, não todas as correntes conservadoras. A versão e a data de consulta não provam adoção em 2024. O próprio manifesto também afirma autonomia pessoal e liberdade de expressão; suas alegações científicas e causais sobre famílias e gênero não são certificadas como fatos.",
    "sources": [
      {
        "title": "A Manifesto for Social Conservatism — Heritage Party",
        "url": "https://heritageparty.org/manifesto/",
        "note": "Plataforma partidária atual que explicita família, religião, soberania, imigração e economia."
      },
      {
        "title": "A Manifesto for Social Conservatism — Heritage Party, PDF v6a, consulta de 8 de outubro de 2026",
        "url": "https://heritageparty.org/wp-content/uploads/2024/05/Values-Manifesto-v6a.pdf",
        "note": "A seção Traditional Family Values, na página impressa 6, prescreve família de homem e mulher, apoio tributário e educacional e restrições curriculares para menores. Liberty and Free Speech preserva autonomia e expressão pessoal. O caminho de upload de maio de 2024 não certifica a data de adoção do texto."
      }
    ],
    "evidence": {},
    "axisEvidence": {},
    "coding": {}
  }
] as const;
export const ranking675Ideology01Codings=[
  [
    {
      "axis": "est",
      "position": "moderate-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "National Conservatism: declaração integral de princípios, 15 de junho de 2022",
          "locator": "§3: National Government",
          "statement": "Propõe divisão de poderes e delegação federal às regiões e localidades para experimentação e liberdade; permite intervenção nacional contra corrupção, desordem ou imoralidade.",
          "basis": "norm",
          "publishedDate": "2022-06-15",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "Há preferência geral por competências territoriais descentralizadas, limitada por um poder nacional de intervenção.",
      "uncertainty": "Não há lista exaustiva de competências, autonomia tributária ou direito de separação; o poder nacional permanece forte.",
      "relatedQuestionIds": [
        "estrutura_01",
        "estrutura_16",
        "estrutura_17"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "imi",
      "position": "strong-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "National Conservatism: declaração integral de princípios, 15 de junho de 2022",
          "locator": "§§1,9–10: National Independence; Immigration; Race",
          "statement": "Defende continuidade cultural, linguística e religiosa e redução rigorosa ou moratória da imigração até recuperar assimilação produtiva; rejeita discriminação racial e reconhece necessidades particulares de minorias.",
          "basis": "norm",
          "publishedDate": "2022-06-15",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A assimilação cultural é critério explícito e forte de admissão e de continuidade nacional.",
      "uncertainty": "A proteção racial e comunitária impede interpretar o programa como rejeição indiscriminada de todas as minorias; não se atribuem respostas sobre cada idioma.",
      "relatedQuestionIds": [
        "imigracao_01",
        "imigracao_03",
        "imigracao_07",
        "imigracao_11",
        "imigracao_13"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "dip",
      "position": "moderate-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "National Conservatism: declaração integral de princípios, 15 de junho de 2022",
          "locator": "§§1,6–7: National Independence; Free Enterprise; Public Research",
          "statement": "Prescreve rearmamento, alianças defensivas, fortalecimento industrial de defesa e pesquisa pública em grande escala voltada à segurança.",
          "basis": "norm",
          "publishedDate": "2022-06-15",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A capacidade militar recebe prioridade programática geral, sem autorizar conquista ou guerra preventiva.",
      "uncertainty": "A finalidade é defensiva; alianças e cooperação coexistem com a força militar. Não se presume apoio a serviço obrigatório ou a iniciar guerras.",
      "relatedQuestionIds": [
        "diplomacia_01",
        "diplomacia_05",
        "diplomacia_11",
        "diplomacia_19"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "int",
      "position": "moderate-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "National Conservatism: declaração integral de princípios, 15 de junho de 2022",
          "locator": "§2: Rejection of Imperialism and Globalism",
          "statement": "Rejeita imperialismo autoritário e projetos liberais de remodelar outros países; admite comércio, alianças defensivas e projetos nacionais conjuntos sem transferência de autoridade.",
          "basis": "norm",
          "publishedDate": "2022-06-15",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "O programa rejeita a remodelação política de outras nações e prefere cooperação entre governos independentes.",
      "uncertainty": "A soberania e o interesse nacional também são centrais; a fonte não proíbe toda sanção, assistência ou ação externa defensiva.",
      "relatedQuestionIds": [
        "intervencao_01",
        "intervencao_13",
        "intervencao_16"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "eco",
      "position": "moderate-second",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "National Conservatism: declaração integral de princípios, 15 de junho de 2022",
          "locator": "§§6–7: Free Enterprise; Public Research",
          "statement": "Afirma que propriedade privada e livre iniciativa são mais adequadas à prosperidade, contrapondo-as ao planejamento estatal; simultaneamente prevê investimento público substancial em pesquisa e defesa.",
          "basis": "norm",
          "publishedDate": "2022-06-15",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A presunção geral de propriedade e iniciativa privadas é explícita e atravessa a economia.",
      "uncertainty": "Não há percentual de propriedade privada nem privatização de todos os serviços; a pesquisa pública e a política industrial impedem uma âncora extrema.",
      "relatedQuestionIds": [
        "economia_02",
        "economia_08",
        "economia_18",
        "economia_20"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "con",
      "position": "moderate-second",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "National Conservatism: declaração integral de princípios, 15 de junho de 2022",
          "locator": "§§6–7: Free Enterprise; Public Research",
          "statement": "Rejeita um plano econômico ditado pelo Estado, defende livre empresa e critica mercados tratados como absolutos; propõe política industrial nacional e grandes projetos públicos de pesquisa.",
          "basis": "norm",
          "publishedDate": "2022-06-15",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A coordenação de mercado é a presunção geral, com exceções estratégicas e investimento público claramente declarados.",
      "uncertainty": "A política industrial é contraponto substantivo; a fonte não define a magnitude de subsídios, controle monetário ou liberdade irrestrita de preços.",
      "relatedQuestionIds": [
        "controle_01",
        "controle_07",
        "controle_11",
        "controle_13"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "rel",
      "position": "moderate-second",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "National Conservatism: declaração integral de princípios, 15 de junho de 2022",
          "locator": "§4: God and Public Religion",
          "statement": "Onde a maioria é cristã, instituições públicas devem refletir raízes cristãs e escolas devem ensinar a Bíblia; minorias religiosas recebem autonomia e adultos proteção contra imposição em sua vida privada.",
          "basis": "norm",
          "publishedDate": "2022-06-15",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A religião majoritária orienta explicitamente a vida institucional, mas a proteção de minorias e indivíduos limita essa orientação.",
      "uncertainty": "Não é uma constituição teocrática nem afirma supremacia universal de mandamentos sobre leis; não mede crença pessoal.",
      "relatedQuestionIds": [
        "religiao_01",
        "religiao_03",
        "religiao_04",
        "religiao_08",
        "religiao_20"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "mor",
      "position": "moderate-second",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "National Conservatism: declaração integral de princípios, 15 de junho de 2022",
          "locator": "§§4,8: God and Public Religion; Family and Children",
          "statement": "Define casamento vitalício entre homem e mulher e filhos como fundamento da sociedade, critica individualismo e experimentação sexual e prioriza a família; preserva escolhas privadas de adultos.",
          "basis": "norm",
          "publishedDate": "2022-06-15",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A família tradicional e a continuidade de costumes são orientação moral geral, com proteção da esfera privada.",
      "uncertainty": "Aborto, direitos reprodutivos, prostituição e cada política LGBT não são detalhados; a âncora moderada não imputa essas respostas.",
      "relatedQuestionIds": [
        "moral_02",
        "moral_06",
        "moral_17",
        "moral_20"
      ],
      "reviewedOn": "2026-10-08"
    }
  ],
  [
    {
      "axis": "est",
      "position": "moderate-second",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Heritage Party: manifesto v6a integral, revisão de abril de 2024",
          "locator": "p.23: Democracy for the 21st Century",
          "statement": "Propõe extinguir os parlamentos escocês e galês e devolver poderes a Westminster ou a conselhos locais; funções de prefeitos eleitos e comissários retornariam aos conselhos.",
          "basis": "norm",
          "publishedDate": "Revisão de abril de 2024; publicação original em setembro de 2020",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "O programa remove o nível regional de autonomia legislativa, preservando administração e decisão locais.",
      "uncertainty": "Não se afirma centralização de todas as competências: conselhos locais recebem funções e não há inventário completo de poderes.",
      "relatedQuestionIds": [
        "estrutura_02",
        "estrutura_13",
        "estrutura_17",
        "estrutura_20"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "rep",
      "position": "strong-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Heritage Party: manifesto v6a integral, revisão de abril de 2024",
          "locator": "pp.4–5,15,23: Liberty and Free Speech; Equality before the Law; Democracy for the 21st Century",
          "statement": "Defende representação proporcional em todas as eleições e competição entre múltiplos partidos, fiscalização independente das instituições, crítica livre, igualdade legal, julgamento justo e presunção de inocência.",
          "basis": "norm",
          "publishedDate": "Revisão de abril de 2024; publicação original em setembro de 2020",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "Há compromisso amplo com representação eleitoral competitiva, crítica pública e controle institucional, não apenas uma menção a eleições.",
      "uncertainty": "Voto restrito a cidadãos, identificação obrigatória e restrição do voto postal são limites expressos; não se atribui sufrágio sem condições nem eleição de todos os cargos.",
      "relatedQuestionIds": [
        "representacao_01",
        "representacao_03",
        "representacao_05",
        "representacao_07",
        "representacao_16",
        "representacao_19"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "imi",
      "position": "strong-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Heritage Party: manifesto v6a integral, revisão de abril de 2024",
          "locator": "pp.3,10–11: Protecting our Culture and Heritage; Low Immigration",
          "statement": "Impõe limites estritos à imigração, exige adaptação à cultura e ao modo de vida nacionais e prioriza a continuidade da herança britânica; admite refugiados sob condições e afirma igualdade racial perante a lei.",
          "basis": "norm",
          "publishedDate": "Revisão de abril de 2024; publicação original em setembro de 2020",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "As restrições de entrada e a adaptação cultural são prescrição geral e forte do programa.",
      "uncertainty": "Há admissão de imigração legal e refúgio condicionado; causalidades alegadas sobre migração não foram validadas como fatos.",
      "relatedQuestionIds": [
        "imigracao_01",
        "imigracao_03",
        "imigracao_07",
        "imigracao_11",
        "imigracao_13"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "dip",
      "position": "moderate-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Heritage Party: manifesto v6a integral, revisão de abril de 2024",
          "locator": "pp.17,26: Financial Responsibility; Honouring the Military Covenant",
          "statement": "Propõe restaurar efetivos militares e ampliar equipamento e capacidades navais, com defesa nacional como primeira função; prescreve desescalada e não envolvimento em conflitos de terceiros.",
          "basis": "norm",
          "publishedDate": "Revisão de abril de 2024; publicação original em setembro de 2020",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A força militar recebe expansão e financiamento programáticos, moderados pelo compromisso de desescalada e defesa.",
      "uncertainty": "Não se infere preferência por iniciar guerras; o programa rejeita conflitos externos desnecessários e prevê assistência a desastres.",
      "relatedQuestionIds": [
        "diplomacia_01",
        "diplomacia_02",
        "diplomacia_05",
        "diplomacia_06"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "int",
      "position": "moderate-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Heritage Party: manifesto v6a integral, revisão de abril de 2024",
          "locator": "p.26: Honouring the Military Covenant",
          "statement": "Rejeita envolvimento em conflitos distantes e estabelece não engajamento em conflitos de terceiros e desescalada; também admite atuação positiva quando necessária ao interesse nacional e assistência militar a desastres.",
          "basis": "norm",
          "publishedDate": "Revisão de abril de 2024; publicação original em setembro de 2020",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A regra geral restringe intervenções em conflitos de terceiros, com exceções de interesse nacional e ajuda emergencial.",
      "uncertainty": "A ressalva de interesse nacional impede codificar neutralidade absoluta ou uma proibição de toda ação militar no exterior.",
      "relatedQuestionIds": [
        "intervencao_04",
        "intervencao_05",
        "intervencao_13",
        "intervencao_17"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "eco",
      "position": "moderate-second",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Heritage Party: manifesto v6a integral, revisão de abril de 2024",
          "locator": "pp.17,20–21,24,27–30: Financial Responsibility; Free and Fair Markets; Health; Transport; Agriculture",
          "statement": "Prescreve livre empresa como organização econômica geral; reserva defesa, polícia, prisões e estradas ao Estado, admite nacionalização condicional de monopólios e ferrovias e mantém financiamento público de saúde, inclusive contratação privada.",
          "basis": "norm",
          "publishedDate": "Revisão de abril de 2024; publicação original em setembro de 2020",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A iniciativa privada é a presunção produtiva geral, com propriedade e provisão públicas substantivas em serviços e infraestrutura.",
      "uncertainty": "Não há proporção quantitativa de propriedade; monopólios podem ser privatizados ou nacionalizados, e saúde e infraestrutura públicas impedem uma âncora extrema.",
      "relatedQuestionIds": [
        "economia_02",
        "economia_03",
        "economia_04",
        "economia_06",
        "economia_07",
        "economia_09",
        "economia_20"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "con",
      "position": "moderate-second",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Heritage Party: manifesto v6a integral, revisão de abril de 2024",
          "locator": "pp.17,19–21,29: Financial Responsibility; Low Taxation; Free and Fair Markets; Agriculture",
          "statement": "Prescreve baixos impostos, redução de regulações e coordenação por mercados; admite regras laborais e ambientais, separação bancária, subsídios agrícolas e proteção excepcional de indústria estratégica.",
          "basis": "norm",
          "publishedDate": "Revisão de abril de 2024; publicação original em setembro de 2020",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A direção geral favorece coordenação e preços de mercado, com intervenção regulatória e estratégica declarada.",
      "uncertainty": "Não implica ausência de Estado nem liberdade irrestrita de preços: subsídios, proteção de trabalhadores e nacionalização condicional permanecem.",
      "relatedQuestionIds": [
        "controle_01",
        "controle_06",
        "controle_07",
        "controle_13",
        "controle_14"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "mor",
      "position": "strong-second",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Heritage Party: manifesto v6a integral, revisão de abril de 2024",
          "locator": "pp.5–6,22: Traditional Family Values; A Culture of Life",
          "statement": "Prescreve casamento entre homem e mulher, prioridade à família nuclear, exclusão de conteúdos LGBT destinados a menores, fim do aborto legal salvo risco à vida materna e oposição à eutanásia; reconhece escolhas privadas de adultos.",
          "basis": "norm",
          "publishedDate": "Revisão de abril de 2024; publicação original em setembro de 2020",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "O programa reúne posições tradicionais fortes em família, gênero, educação sexual, reprodução e fim de vida.",
      "uncertainty": "A exceção materna e a autonomia privada devem ser mantidas; alegações clínicas e sociais não foram validadas como fatos ou recomendações médicas.",
      "relatedQuestionIds": [
        "moral_01",
        "moral_02",
        "moral_03",
        "moral_06",
        "moral_09",
        "moral_10",
        "moral_11",
        "moral_12",
        "moral_20"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "tec",
      "position": "moderate-second",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Heritage Party: manifesto v6a integral, revisão de abril de 2024",
          "locator": "pp.8,12,22–24,29: Energy; Environment; A Culture of Life; Health; Agriculture",
          "statement": "Exige moratória de 5G até testes, proíbe alimentos geneticamente modificados e carne de laboratório, rejeita o sistema descrito de produção alimentar de alta tecnologia com IA e intervenções experimentais em reprodução; simultaneamente apoia novas usinas nucleares, tecnologias energéticas e tratamentos consentidos.",
          "basis": "norm",
          "publishedDate": "Revisão de abril de 2024; publicação original em setembro de 2020",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "Há precaução e proibições em diversas tecnologias de alimentos, comunicação e corpo, com apoio seletivo a energia e medicina.",
      "uncertainty": "As alegações de dano, clima e segurança não foram verificadas cientificamente; apoio nuclear e inovação energética impedem inferir rejeição de toda tecnologia.",
      "relatedQuestionIds": [
        "tecnologia_01",
        "tecnologia_03",
        "tecnologia_04",
        "tecnologia_05",
        "tecnologia_09",
        "tecnologia_14",
        "tecnologia_17"
      ],
      "reviewedOn": "2026-10-08"
    }
  ]
] as const satisfies readonly (readonly ReferenceAxisCoding[])[];
const reviewedSources=[
  {
    "title": "National Conservatism: declaração integral de princípios, 15 de junho de 2022",
    "url": "https://nationalconservatism.org/national-conservatism-a-statement-of-principles/",
    "note": "Declaração integral, princípios 1–10, publicada em 15 de junho de 2022; leitura em 8 de outubro de 2026. Propostas normativas, não resultados observados. A codificação conserva cooperação, intervenção nacional excepcional e proteção de minorias como limites."
  },
  {
    "title": "Heritage Party: manifesto v6a integral, revisão de abril de 2024",
    "url": "https://heritageparty.org/wp-content/uploads/2024/05/Values-Manifesto-v6a.pdf",
    "note": "Leitura integral das 33 páginas em 8 de outubro de 2026. O colofão da página impressa 33 identifica publicação em setembro de 2020 e revisão mais recente em abril de 2024. Propostas partidárias, não validação das alegações científicas ou históricas. A versão anterior sem data identificada permanece arquivada integralmente."
  }
] as const satisfies readonly ReferenceSource[];
function canonical(v:unknown):string{if(Array.isArray(v))return '['+v.map(canonical).join(',')+']';if(v!==null&&typeof v==='object')return '{'+Object.entries(v).sort(([a],[b])=>a.localeCompare(b)).map(([k,x])=>JSON.stringify(k)+':'+canonical(x)).join(',')+'}';return JSON.stringify(v)}
function reviewed(entry:ReferenceEntry,index:number):ReferenceEntry{
 const sources=[reviewedSources[index],...entry.sources];
 const vec=Object.fromEntries(Object.keys(entry.vec).map(axis=>[axis,50])) as ReferenceEntry['vec'];
 const evidence:NonNullable<ReferenceEntry['evidence']>={};const axisEvidence:NonNullable<ReferenceEntry['axisEvidence']>={};const coding:NonNullable<ReferenceEntry['coding']>={};
 for(const input of ranking675Ideology01Codings[index]){const c=codeReferenceAxis(input as ReferenceAxisCoding,sources);vec[input.axis]=c.value;evidence[input.axis]=c.evidence;axisEvidence[input.axis]=c.axisEvidence;coding[input.axis]=c.coding;}
 const period=index===1?'A Manifesto for Social Conservatism, versão v6a; colofão identifica publicação em setembro de 2020 e revisão mais recente em abril de 2024; consultada em 8 de outubro de 2026':entry.period;
 return {...entry,period,vec,evidence,axisEvidence,coding,sources};
}
export const ranking675Ideology01ExpectedPosts=ranking675Ideology01PreviousSnapshots.map((x,i)=>reviewed(x as unknown as ReferenceEntry,i));
/** Fail closed on any changed prior/post state; no new IDs, definition or selection edits. */
export function reconcileRanking675Ideology01(entry:ReferenceEntry):ReferenceEntry{
 const index=ranking675Ideology01PreviousSnapshots.findIndex(x=>x.id===entry.id);
 if(index<0)return entry;
 if(canonical(entry)===canonical(ranking675Ideology01ExpectedPosts[index]))return entry;
 if(canonical(entry)!==canonical(ranking675Ideology01PreviousSnapshots[index]))throw new Error('ranking675-ideology01 changed baseline: '+entry.id);
 return reviewed(entry,index);
}
