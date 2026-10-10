import type { ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';

// Complete immutable runtime baseline: abort rather than replace later useful research.
export const researchCountry20261009Before = {
  "id": "prc-mao-1949",
  "kind": "country",
  "category": "historical-country",
  "name": "China — período Mao",
  "period": "República Popular sob Mao, 01/10/1949–09/09/1976; norma examinada: Constituição fundadora de 20/09/1954, durante a transição socialista.",
  "vec": {
    "est": 50,
    "rep": 50,
    "pod": 50,
    "imi": 50,
    "dip": 50,
    "int": 50,
    "eco": 60,
    "con": 60,
    "com": 50,
    "rel": 50,
    "mor": 50,
    "tec": 50
  },
  "rationale": "Carta de 1954 prioriza economia estatal e planejamento, preservando propriedade camponesa, individual e capitalista na transição.",
  "caveats": "Preambulo e frente política não bastam para medir competição eleitoral. Grande Salto, Revolução Cultural, coerção, secularismo e moral não são graduados sem prática documentada própria. Os limites cronológicos referem-se à fase sob Mao, não à existência da República Popular. A tradução de 1954 descreve direção econômica legal; o cotejo integral chinês e a prática de todas as fases não foram certificados.",
  "sources": [
    {
      "title": "Rapprochement with China, 1972 — Office of the Historian",
      "url": "https://history.state.gov/milestones/1969-1976/rapprochement-china",
      "note": "Delimita a fundação da República Popular em 1949 e descreve seu governo no período Mao."
    },
    {
      "title": "China and the Cultural Revolution — Office of the Historian",
      "url": "https://history.state.gov/historicaldocuments/frus1964-68v30/d302",
      "note": "Avaliação histórica contemporânea sobre centralização partidária, Grande Salto e Revolução Cultural."
    },
    {
      "title": "Constitution of the People’s Republic of China (1954)",
      "url": "https://www.marxists.org/subject/china/documents/constitution-1954.htm",
      "note": "Fonte primária para a estrutura estatal e econômica declarada no período."
    },
    {
      "title": "Constitution of the People’s Republic of China, 1954 — translated primary text",
      "url": "https://en.wikisource.org/wiki/Constitution_of_the_People%27s_Republic_of_China_(1954)",
      "note": "Tradução reproduzida em Senate hearings1972; cotejo integral com chinês oficial pendente."
    },
    {
      "title": "Constitution of the People’s Republic of China1954 — translated primary republication",
      "url": "https://en.wikisource.org/wiki/Constitution_of_the_People%27s_Republic_of_China_(1954)",
      "note": "Leitura documental anterior registrada dos arts.5–10/13/15 da tradução de 1954 reproduzida em 1972: setor estatal prioritário, transformação, plano e proteção transitória de propriedades camponesa, individual e capitalista. Não é leitura nova do original chinês nem prática integral 1949–1976."
    },
    {
      "title": "Ministério dos Negócios Estrangeiros chinês — 1 de outubro",
      "url": "https://www.mfa.gov.cn/web/ziliao_674904/historytoday_674971/200310/t20031001_9284650.shtml",
      "note": "01/10/1949: proclamação do governo central da República Popular. Escopo lido: Parágrafo 97 completo: proclamação de Mao em 01/10/1949. Texto comemorativo institucional, não exame de todo o governo."
    },
    {
      "title": "Ministério dos Negócios Estrangeiros chinês — 9 de setembro",
      "url": "https://www.mfa.gov.cn/ziliao_674904/historytoday_674971/200309/t20030909_7949146.shtml",
      "note": "09/09/1976: morte de Mao. Escopo lido: Parágrafo 97 completo: falecimento em Pequim e luto nacional. A República Popular não terminou nesta data; término da liderança pessoal no recorte."
    }
  ],
  "evidence": {
    "eco": "medium",
    "con": "medium"
  },
  "axisEvidence": {
    "eco": {
      "sourceTitles": [
        "Constitution of the People’s Republic of China, 1954 — translated primary text"
      ],
      "rationale": "Prioridade estatal em economia ainda mista sustenta direção pública moderada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Transformação prevista não prova predomínio realizado; propriedade pessoal e capitalista não são omitidas."
    },
    "con": {
      "sourceTitles": [
        "Constitution of the People’s Republic of China, 1954 — translated primary text"
      ],
      "rationale": "Direção nacional com instrumentos de controle sustenta planejamento moderado. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não mede cumprimento, detalhe alocativo ou regimes posteriores; não deduz monopólio total do plano."
    }
  },
  "coding": {
    "eco": {
      "axis": "eco",
      "position": "moderate-first",
      "confidence": "medium",
      "rationale": "Prioridade estatal em economia ainda mista sustenta direção pública moderada.",
      "uncertainty": "Transformação prevista não prova predomínio realizado; propriedade pessoal e capitalista não são omitidas.",
      "reviewedOn": "2026-10-07",
      "claims": [
        {
          "sourceTitle": "Constitution of the People’s Republic of China, 1954 — translated primary text",
          "locator": "Arts.5–10 e13",
          "statement": "Setor estatal é dirigente e prioritário, mas propriedade camponesa, individual e capitalista é protegida durante transformação gradual.",
          "basis": "norm",
          "publishedDate": "1954-09-20",
          "accessedDate": "2026-10-07"
        }
      ],
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
      "rationale": "Direção nacional com instrumentos de controle sustenta planejamento moderado.",
      "uncertainty": "Não mede cumprimento, detalhe alocativo ou regimes posteriores; não deduz monopólio total do plano.",
      "reviewedOn": "2026-10-07",
      "claims": [
        {
          "sourceTitle": "Constitution of the People’s Republic of China, 1954 — translated primary text",
          "locator": "Arts.10 e15",
          "statement": "Estado orienta transformação e crescimento por plano econômico, incluindo controle administrativo do setor capitalista.",
          "basis": "norm",
          "publishedDate": "1954-09-20",
          "accessedDate": "2026-10-07"
        }
      ],
      "version": "editorial-ordinal-v1",
      "value": 60,
      "range": [
        55,
        70
      ]
    }
  },
  "documentaryReview": {
    "status": "author-reviewed-bounded-claims",
    "reviewedOn": "2026-10-07",
    "independentReview": "pending",
    "scope": "Carta fundadora1954 em transição socialista; não todas as fases1949–1976."
  },
  "unknownAxisReasons": {
    "est": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Preambulo e frente política não bastam para medir competição eleitoral. Grande Salto, Revolução Cultural, coerção, secularismo e moral não são graduados sem prática documentada própria.",
    "rep": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Preambulo e frente política não bastam para medir competição eleitoral. Grande Salto, Revolução Cultural, coerção, secularismo e moral não são graduados sem prática documentada própria.",
    "pod": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Preambulo e frente política não bastam para medir competição eleitoral. Grande Salto, Revolução Cultural, coerção, secularismo e moral não são graduados sem prática documentada própria.",
    "imi": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Preambulo e frente política não bastam para medir competição eleitoral. Grande Salto, Revolução Cultural, coerção, secularismo e moral não são graduados sem prática documentada própria.",
    "dip": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Preambulo e frente política não bastam para medir competição eleitoral. Grande Salto, Revolução Cultural, coerção, secularismo e moral não são graduados sem prática documentada própria.",
    "int": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Preambulo e frente política não bastam para medir competição eleitoral. Grande Salto, Revolução Cultural, coerção, secularismo e moral não são graduados sem prática documentada própria.",
    "com": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Preambulo e frente política não bastam para medir competição eleitoral. Grande Salto, Revolução Cultural, coerção, secularismo e moral não são graduados sem prática documentada própria.",
    "rel": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Preambulo e frente política não bastam para medir competição eleitoral. Grande Salto, Revolução Cultural, coerção, secularismo e moral não são graduados sem prática documentada própria.",
    "mor": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Preambulo e frente política não bastam para medir competição eleitoral. Grande Salto, Revolução Cultural, coerção, secularismo e moral não são graduados sem prática documentada própria.",
    "tec": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Preambulo e frente política não bastam para medir competição eleitoral. Grande Salto, Revolução Cultural, coerção, secularismo e moral não são graduados sem prática documentada própria."
  }
} as const;
export const researchCountry20261009BeforeSHA256 = "69659805a1b567b0014264604af32461dc546f94339bb71f54493f1edf04d6e1";
export const researchCountry20261009Sources: ReferenceSource[] = [
  {
    "title": "Constitution of the People’s Republic of China (1954) — translated primary republication",
    "url": "https://en.wikisource.org/wiki/Constitution_of_the_People%27s_Republic_of_China_(1954)",
    "note": "Leitura documental em 09/10/2026. Texto normativo de 20/09/1954, em transcrição inglesa atribuída a publicação do Senado dos EUA de 1972, página 528; preâmbulo e artigos 1–106 efetivamente examinados. Não é fac-símile oficial chinês. O artigo 2 inglês omite a cláusula de centralismo democrático presente no paralelo chinês; há defeitos de transcrição. Não certifica prática de 1949–1976."
  },
  {
    "title": "Marriage Law of the People’s Republic of China — Foreign Languages Press scan",
    "url": "https://www.bannedthought.net/China/MaoEra/Women-Family/MarriageLawOfThePRC-1950-OCR-sm.pdf",
    "note": "Leitura documental em 09/10/2026. Lei em vigor em 01/05/1950, em scan da Foreign Languages Press hospedado em arquivo privado. Corpo legal dos artigos 1–27 efetivamente examinado por OCR, páginas PDF 4–10; data de impressão não estabelecida. Rótulos de alguns artigos têm falhas de OCR. Comentários editoriais não comprovam execução histórica; não houve certificação visual integral do fac-símile."
  }
];
export const researchCountry20261009Codings: ReferenceAxisCoding[] = [
  {
    "axis": "est",
    "position": "moderate-second",
    "confidence": "medium",
    "claims": [
      {
        "accessedDate": "2026-10-09",
        "basis": "norm",
        "sourceTitle": "Constitution of the People’s Republic of China (1954) — translated primary republication",
        "locator": "Articles21–22,31(7),49(4/6/15),53–72",
        "statement": "A legislação nacional é exclusiva do Congresso Nacional; órgãos centrais podem anular decisões locais e dirigir a cadeia administrativa. Regiões autônomas conservam competências financeiras, de segurança local e regulamentares, subordinadas à lei nacional e ao assentimento central.",
        "publishedDate": "Constituição1954-09-20; tradução republicada1972"
      }
    ],
    "rationale": "Direção nacional unitária com autonomia territorial real, por isso moderada, não centralização absoluta.",
    "uncertainty": "Arts67–72 preservam autonomia e direitos regionais; Art70 exige aprovação central de regulamentos autônomos. Não descreve a execução histórica entre1949 e1976. A inferência descreve somente o desenho normativo de 1954, com a lei matrimonial de 1950 quando pertinente; não é medida empírica do período Mao.",
    "reviewedOn": "2026-10-09"
  },
  {
    "axis": "imi",
    "position": "moderate-second",
    "confidence": "medium",
    "claims": [
      {
        "accessedDate": "2026-10-09",
        "basis": "norm",
        "sourceTitle": "Constitution of the People’s Republic of China (1954) — translated primary republication",
        "locator": "Articles3,68,71,77",
        "statement": "Todas as nacionalidades têm igualdade normativa e liberdade de língua e costumes; órgãos autônomos incluem representação das nacionalidades e usam línguas locais, com direitos linguísticos e interpretação judicial.",
        "publishedDate": "Constituição1954-09-20; tradução republicada1972"
      }
    ],
    "rationale": "Programa cultural e linguístico transversal das nacionalidades, não mera permissão de entrada nem proteção de um grupo isolado.",
    "uncertainty": "Art3 torna as autonomias partes inalienáveis do Estado; unidade nacional e rejeição de nacionalismos limitam a pluralidade. Não equivale a imigração aberta ou coexistência efetivamente realizada. A inferência descreve somente o desenho normativo de 1954, com a lei matrimonial de 1950 quando pertinente; não é medida empírica do período Mao.",
    "reviewedOn": "2026-10-09"
  },
  {
    "axis": "mor",
    "relatedQuestionIds": ["moral_02", "moral_06", "moral_18"],
    "position": "moderate-first",
    "confidence": "medium",
    "claims": [
      {
        "accessedDate": "2026-10-09",
        "basis": "norm",
        "sourceTitle": "Constitution of the People’s Republic of China (1954) — translated primary republication",
        "locator": "Article96",
        "statement": "A norma declara igualdade entre mulheres e homens nas esferas política, econômica, cultural, social e doméstica, juntamente com proteção estatal da família.",
        "publishedDate": "Constituição1954-09-20; tradução republicada1972"
      },
      {
        "accessedDate": "2026-10-09",
        "basis": "norm",
        "sourceTitle": "Marriage Law of the People’s Republic of China — Foreign Languages Press scan",
        "locator": "Articles1–4,7–17,19,23,27",
        "statement": "A lei substitui casamento compulsório e supremacia masculina por consentimento, igualdade doméstica, liberdade profissional de ambos, direitos patrimoniais e de nome, direitos dos filhos não matrimoniais e divórcio condicionado a procedimento.",
        "publishedDate": "Lei em vigor1950-05-01; impressão examinada sem data estabelecida"
      }
    ],
    "rationale": "Conjunto amplo de normas de papéis de gênero, relações conjugais, filiação e autonomia familiar permite proposta moderada; supera uma única cláusula de acesso a cargo público.",
    "uncertainty": "Monogamia heterossexual; idades mínimas diferentes; impedimentos médicos; mediação obrigatória do divórcio; consentimento de militar para certos divórcios; deveres familiares/produtivos; alterações regionais dependem de ratificação. Não comprova execução igualitária ou doutrina cultural integral. A inferência descreve somente o desenho normativo de 1954, com a lei matrimonial de 1950 quando pertinente; não é medida empírica do período Mao.",
    "reviewedOn": "2026-10-09"
  }
];

type ExtendedReference = ReferenceEntry & { unknownAxisReasons?: Partial<Record<keyof ReferenceEntry['vec'], string>> };
export function reconcileResearchCountry20261009(entry: ReferenceEntry): ReferenceEntry {
  if (entry.id !== researchCountry20261009Before.id) return entry;
  if (JSON.stringify(entry) === JSON.stringify(researchCountry20261009ExpectedPost)) return entry;
  if (JSON.stringify(entry) !== JSON.stringify(researchCountry20261009Before)) {
    throw new Error('PRC 1954 reconciliation baseline diverged; preserve later record and review before integrating.');
  }
  return buildResearchCountry20261009Post(entry);
}
function buildResearchCountry20261009Post(entry: ReferenceEntry): ReferenceEntry {
  const sources = [...entry.sources, ...researchCountry20261009Sources];
  const vec = { ...entry.vec }, evidence = { ...entry.evidence };
  const axisEvidence = { ...entry.axisEvidence }, coding = { ...entry.coding };
  const unknownAxisReasons = { ...(entry as ExtendedReference).unknownAxisReasons };
  for (const input of researchCountry20261009Codings) {
    const coded = codeReferenceAxis(input, sources);
    vec[input.axis] = coded.value;
    evidence[input.axis] = coded.evidence;
    axisEvidence[input.axis] = coded.axisEvidence!;
    coding[input.axis] = coded.coding;
    delete unknownAxisReasons[input.axis];
  }
  return {
    ...entry, vec, evidence, axisEvidence, coding, sources, unknownAxisReasons,
    rationale: entry.rationale + ' Ampliação normativa delimitada: a carta de 1954 combina autoridade legislativa nacional com autonomia territorial, pluralidade linguística das nacionalidades e igualdade doméstica; a lei matrimonial de 1950 detalha consentimento, papéis conjugais, filiação e divórcio.',
    caveats: entry.caveats + ' Os três novos eixos descrevem somente a Constituição de 20/09/1954 e, para relações familiares, a lei em vigor em 01/05/1950. A limitação anterior sobre moral sem auditoria de prática é mantida como histórico da pesquisa; a nova codificação é normativa e não certifica o período inteiro de 1949–1976. Autonomia regional sujeita a aprovação central, unidade nacional, deveres familiares/produtivos e limites médicos, militares e processuais do divórcio restringem a inferência. Cinco eixos documentados não atingem o gate de seis.',
  } as ExtendedReference;
}
export const researchCountry20261009ExpectedPost = buildResearchCountry20261009Post(
  structuredClone(researchCountry20261009Before) as unknown as ReferenceEntry,
);
