import type {ReferenceEntry, ReferenceSource} from './references';
import {codeReferenceAxis,type ReferenceAxisCoding} from '../lib/reference-coding';
export const ranking675Ideology02PreviousSnapshot={
  "id": "ideology-left-anarcho-collectivism",
  "name": "Coletivismo federativo: programa de Bakunin, 1866",
  "period": "Revolutionary Catechism, programa atribuído a 1866; seleções traduzidas e editadas por Sam Dolgoff, fonte rotulada 1971",
  "rationale": "Defende federações e associações produtivas livres, abolindo herança e permitindo ganhos do próprio trabalho, habilidade e esforço.",
  "caveats": "Seleções traduzidas/editadas, não manuscrito completo. Cabeçalho Written 1851 contradiz título 1866 e introdução 1865–66 e não sustenta a data; fonte editorial distingue comentários entre colchetes. Diferenças de riqueza residuais devem diminuir; crianças são mantidas socialmente e apoio voluntário permite ociosidade. Não atribuir a Bakunin a fórmula de notas criticada por Kropotkin.",
  "sources": [
    {
      "title": "Revolutionary Catechism — Mikhail Bakunin",
      "url": "https://www.marxists.org/reference/archive/bakunin/works/1866/catechism.htm",
      "note": "Texto primário de Bakunin sobre federação, educação, liberdade, propriedade e organização política."
    },
    {
      "title": "Revolutionary Catechism — Bakunin1866 translated selections, Dolgoff source1971",
      "url": "https://www.marxists.org/reference/archive/bakunin/works/1866/catechism.htm",
      "note": "PróprioIX.H1/3 e X.A/G/H/K:54/56 e106/114–115/134. Autor efetivamente leu26–142; peerfresh54/56/106/114–115/134. Aboliçãoherança/igualdade inicial com ganhos residuais de habilidade/energia; comunas/federaçõeslivres. Comentárioeditorial137–138 não é voz original; cabeçalho1851 rejeitado como prova de data."
    }
  ],
  "kind": "ideology",
  "category": "ideology",
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
  "evidence": {},
  "axisEvidence": {},
  "coding": {}
} as const;
export const ranking675Ideology02Codings=[
  {
    "axis": "est",
    "position": "strong-first",
    "confidence": "medium",
    "claims": [
      {
        "sourceTitle": "Revolutionary Catechism — seleções atribuídas a Bakunin, 1866",
        "locator": "VIII; IX.G,J–M (texto próprio, linhas atuais 36/49–51/74–86)",
        "statement": "Prescreve federação construída das comunas para províncias e nações, constituições locais autônomas e direito de secessão de indivíduos, associações e territórios.",
        "basis": "norm",
        "publishedDate": "Programa atribuído a 1866; seleção traduzida/editada por Sam Dolgoff, fonte rotulada 1971",
        "accessedDate": "2026-10-08"
      }
    ],
    "rationale": "A autonomia territorial e a federação voluntária são bases explícitas da ordem política inteira.",
    "uncertainty": "Participar de uma federação exige aceitar seus princípios, tribunais e obrigações comuns; autonomia não elimina compromissos de associação. Glossas de Nettlau são distinguidas do corpo próprio.",
    "relatedQuestionIds": [
      "estrutura_01",
      "estrutura_03",
      "estrutura_05",
      "estrutura_09",
      "estrutura_13",
      "estrutura_15",
      "estrutura_17"
    ],
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "rep",
    "position": "moderate-first",
    "confidence": "medium",
    "claims": [
      {
        "sourceTitle": "Revolutionary Catechism — seleções atribuídas a Bakunin, 1866",
        "locator": "IX.C–F,H.6–8,K–L (44–48/62–65/77–84)",
        "statement": "Defende igualdade política de homens e mulheres, sufrágio de ambos os sexos, eleição direta de funcionários e juízes e parlamentos comunais/provinciais; admite perda de direitos políticos por viver sem trabalho próprio ou em servidão voluntária, com exceções sociais.",
        "basis": "norm",
        "publishedDate": "Programa atribuído a 1866; seleção traduzida/editada por Sam Dolgoff, fonte rotulada 1971",
        "accessedDate": "2026-10-08"
      }
    ],
    "rationale": "Eleição e controle popular estruturam os níveis da ordem geral, mas o direito político não é incondicional.",
    "uncertainty": "A exigência de trabalho, perda de custódia e restrições associativas impedem ler o programa como sufrágio irrestrito. Não equivale a toda democracia liberal ou parlamentar contemporânea.",
    "relatedQuestionIds": [
      "representacao_01",
      "representacao_07",
      "representacao_15",
      "representacao_16",
      "representacao_19"
    ],
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "pod",
    "position": "moderate-second",
    "confidence": "medium",
    "claims": [
      {
        "sourceTitle": "Revolutionary Catechism — seleções atribuídas a Bakunin, 1866",
        "locator": "II–VIII; IX.H.3–10,I (27–36/56–73)",
        "statement": "Prescreve ampla liberdade adulta de opiniões, vida privada, imprensa e associação, inclusive associações consideradas imorais ou adversárias da liberdade; mantém penas por agressão, roubo e violação de acordos e permite expulsão da associação.",
        "basis": "norm",
        "publishedDate": "Programa atribuído a 1866; seleção traduzida/editada por Sam Dolgoff, fonte rotulada 1971",
        "accessedDate": "2026-10-08"
      }
    ],
    "rationale": "A liberdade de adultos e de associação é princípio amplo de poder civil, com coerção e perda de garantias delimitadas pelo próprio programa.",
    "uncertainty": "Não é ausência absoluta de poder punitivo: privação de direitos políticos/custódia, penas e expulsão permanecem. Não se imputa uma lei atual sobre drogas, armas, vigilância ou pena de morte.",
    "relatedQuestionIds": [
      "poder_01",
      "poder_02",
      "poder_07",
      "poder_16",
      "poder_17"
    ],
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "rel",
    "position": "strong-first",
    "confidence": "medium",
    "claims": [
      {
        "sourceTitle": "Revolutionary Catechism — seleções atribuídas a Bakunin, 1866",
        "locator": "II; IX.A–B; X.R (27/41–42/146–147)",
        "statement": "Propõe abolir religiões estatais, igrejas privilegiadas e subsídios religiosos, impedir controle eclesiástico da educação e substituí-lo por escola secular; preserva liberdade de culto e financiamento voluntário dos templos.",
        "basis": "norm",
        "publishedDate": "Programa atribuído a 1866; seleção traduzida/editada por Sam Dolgoff, fonte rotulada 1971",
        "accessedDate": "2026-10-08"
      }
    ],
    "rationale": "A separação de privilégios religiosos e instituições públicas é explícita e forte em governo, educação e direitos corporativos.",
    "uncertainty": "A liberdade de religião permanece. As avaliações hostis do autor sobre religião não são validadas como fatos, nem a orientação legal equivale a medir a fé de cada indivíduo.",
    "relatedQuestionIds": [
      "religiao_01",
      "religiao_03",
      "religiao_05",
      "religiao_08",
      "religiao_17",
      "religiao_18"
    ],
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "mor",
    "position": "moderate-first",
    "confidence": "medium",
    "claims": [
      {
        "sourceTitle": "Revolutionary Catechism — seleções atribuídas a Bakunin, 1866",
        "locator": "IX.H.3–5; X.M–Q (56–58/139–145)",
        "statement": "Prescreve direitos iguais das mulheres, união e separação livres substituindo casamento civil/religioso obrigatório e crianças como pessoas que não pertencem aos pais; conserva família natural, tutela comunal e proteção social na gravidez.",
        "basis": "norm",
        "publishedDate": "Programa atribuído a 1866; seleção traduzida/editada por Sam Dolgoff, fonte rotulada 1971",
        "accessedDate": "2026-10-08"
      }
    ],
    "rationale": "Autonomia familiar, igualdade de gênero e liberdade moral adulta compõem uma orientação progressista em várias esferas do programa.",
    "uncertainty": "O texto não estabelece direitos LGBT, aborto ou cada escolha reprodutiva atual. Tutela comunal e disciplina de menores permanecem; não se confunde liberdade adulta com ausência de proteção infantil.",
    "relatedQuestionIds": [
      "moral_02",
      "moral_06",
      "moral_12",
      "moral_18",
      "moral_20"
    ],
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "eco",
    "position": "moderate-first",
    "confidence": "medium",
    "claims": [
      {
        "sourceTitle": "Revolutionary Catechism — seleções atribuídas a Bakunin, 1866",
        "locator": "IX.H.1–2; X.A,D,G,K–L,T (54–55/106/110–114/134–138/151)",
        "statement": "Declara terra e recursos naturais propriedade comum, destina capital e instrumentos a quem produz e privilegia associações produtivas coletivas; mantém trabalho individual livre e desigualdade de riqueza obtida por energia, habilidade e poupança, abolindo herança.",
        "basis": "norm",
        "publishedDate": "Programa atribuído a 1866; seleção traduzida/editada por Sam Dolgoff, fonte rotulada 1971",
        "accessedDate": "2026-10-08"
      }
    ],
    "rationale": "O programa econômico geral privilegia recursos comuns, administração pelos produtores e associação coletiva, sem impor coletivização de toda produção individual.",
    "uncertainty": "Não se afirma título estatal, percentual de propriedade pública ou igualdade de ganhos. A interpretação editorial de propriedade privada e sua previsão de desaparecimento gradual não é tratada como frase normativa própria.",
    "relatedQuestionIds": [
      "economia_05",
      "economia_08",
      "economia_09",
      "economia_15",
      "economia_18"
    ],
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "con",
    "position": "moderate-first",
    "confidence": "medium",
    "claims": [
      {
        "sourceTitle": "Revolutionary Catechism — seleções atribuídas a Bakunin, 1866",
        "locator": "X.K (134–136)",
        "statement": "Prescreve associações produtivas voluntárias organizadas numa federação econômica mundial; um parlamento industrial, informado por estatísticas, aloca a produção industrial harmonizando oferta e demanda.",
        "basis": "norm",
        "publishedDate": "Programa atribuído a 1866; seleção traduzida/editada por Sam Dolgoff, fonte rotulada 1971",
        "accessedDate": "2026-10-08"
      }
    ],
    "rationale": "Há alocação coordenada ampla da produção industrial, para além de um subsídio setorial, em instituições de associação voluntária.",
    "uncertainty": "O trabalho individual permanece livre e a organização não é um comando estatal obrigatório. Consumo pessoal, política monetária e cada controle de preços não são especificados; a alegação de eliminar crises não é resultado comprovado.",
    "relatedQuestionIds": [
      "controle_01",
      "controle_02",
      "controle_04",
      "controle_13"
    ],
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "com",
    "position": "moderate-second",
    "confidence": "medium",
    "claims": [
      {
        "sourceTitle": "Revolutionary Catechism — seleções atribuídas a Bakunin, 1866",
        "locator": "IX.N.1–5,12 (87–95/104)",
        "statement": "Prescreve livre comércio, intercâmbio e comunicação, abolindo fronteiras, passaportes e tarifas entre os países federados; deseja expansão da federação pelo mundo e condiciona ingresso à aceitação dos seus princípios.",
        "basis": "norm",
        "publishedDate": "Programa atribuído a 1866; seleção traduzida/editada por Sam Dolgoff, fonte rotulada 1971",
        "accessedDate": "2026-10-08"
      }
    ],
    "rationale": "O regime comercial transnacional futuro da federação abre o intercâmbio entre seus países; a direção moderada mantém o limite de adesão.",
    "uncertainty": "Não estabelece tarifas nem liberdade comercial com todos os países externos à federação. Não se presume liberalização universal imediata, rejeição de toda proteção externa ou implementação observada.",
    "relatedQuestionIds": [
      "comercio_02",
      "comercio_04",
      "comercio_06"
    ],
    "reviewedOn": "2026-10-08"
  }
] as const satisfies readonly ReferenceAxisCoding[];
const reviewedSource={
  "title": "Revolutionary Catechism — seleções atribuídas a Bakunin, 1866",
  "url": "https://www.marxists.org/reference/archive/bakunin/works/1866/catechism.htm",
  "note": "Programa atribuído a 1866 em seleção traduzida e editada por Sam Dolgoff, fonte rotulada 1971. Corpo próprio II–XI efetivamente lido; introdução editorial, glossas entre colchetes e cabeçalho contraditório de 1851 não são usados como normas autorais. Federação, liberdade, organização produtiva e contrapontos permanecem delimitados a esse texto, sem validar suas alegações causais ou históricas."
} as const satisfies ReferenceSource;
function canonical(v:unknown):string{if(Array.isArray(v))return '['+v.map(canonical).join(',')+']';if(v!==null&&typeof v==='object')return '{'+Object.entries(v).sort(([a],[b])=>a.localeCompare(b)).map(([k,x])=>JSON.stringify(k)+':'+canonical(x)).join(',')+'}';return JSON.stringify(v)}
function reviewed(entry:ReferenceEntry):ReferenceEntry{
 const sources=[reviewedSource,...entry.sources];const vec=Object.fromEntries(Object.keys(entry.vec).map(axis=>[axis,50])) as ReferenceEntry['vec'];
 const evidence:NonNullable<ReferenceEntry['evidence']>={};const axisEvidence:NonNullable<ReferenceEntry['axisEvidence']>={};const coding:NonNullable<ReferenceEntry['coding']>={};
 for(const input of ranking675Ideology02Codings){const c=codeReferenceAxis(input as ReferenceAxisCoding,sources);vec[input.axis]=c.value;evidence[input.axis]=c.evidence;axisEvidence[input.axis]=c.axisEvidence;coding[input.axis]=c.coding;}
 return {...entry,vec,evidence,axisEvidence,coding,sources};
}
export const ranking675Ideology02ExpectedPost=reviewed(ranking675Ideology02PreviousSnapshot as unknown as ReferenceEntry);
export function reconcileRanking675Ideology02(entry:ReferenceEntry):ReferenceEntry{
 if(entry.id!==ranking675Ideology02PreviousSnapshot.id)return entry;
 if(canonical(entry)===canonical(ranking675Ideology02ExpectedPost))return entry;
 if(canonical(entry)!==canonical(ranking675Ideology02PreviousSnapshot))throw new Error('ranking675-ideology02 changed baseline: '+entry.id);
 return reviewed(entry);
}
