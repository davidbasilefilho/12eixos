import type { AxisKey, ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding, type EditorialPosition } from '../lib/reference-coding';

interface Definition {
  before: ReferenceEntry;
  addedSources: ReferenceSource[];
  codings: ReferenceAxisCoding[];
  unknownAxisReasons: Partial<Record<AxisKey, string>>;
  caveats: string;
}
type ExtendedReference = ReferenceEntry & { unknownAxisReasons?: Partial<Record<AxisKey, string>> };

/** Exact selected baselines; never rewrite raw818 or change selected identities. */
const baselines: ReferenceEntry[] = [
  {
    "id": "ideology-feminist-socialism",
    "category": "ideology",
    "kind": "ideology",
    "name": "Feminismo socialista negro (Combahee, 1977)",
    "period": "Manifesto do Coletivo Combahee River, 1977",
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
    "rationale": "Exploração de classe, racismo, patriarcado e heterossexismo constituem sistemas imbricados que exigem emancipação conjunta. Organização autônoma e coalizões, trabalho para benefício coletivo, distribuição de recursos e poder não hierárquico na sociedade revolucionária.",
    "caveats": "O manifesto é de feministas negras dos EUA e não representa toda tradição feminista socialista. A agenda econômica posterior e as categorias contemporâneas não são totalmente especificadas. “Interseccional” descreve retrospectivamente o mecanismo; não atribuir ao coletivo o termo posterior de Crenshaw. Não há desenho constitucional completo. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "sources": [
      {
        "title": "The Combahee River Collective Statement — Duke University",
        "url": "https://library.duke.edu/rubenstein/scriptorium/wlm/combahee/",
        "note": "Documento primário de 1977 sobre organização feminista negra, classe, raça e gênero."
      },
      {
        "title": "A Black Feminist Statement",
        "url": "https://careprogram.ucla.edu/education/readings/Combahee1977",
        "note": "Publicação: 1977-04. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: §§2 e 4, pp.272–276; especialmente poder não hierárquico no final de§4. Leitura efetiva declarada na pesquisa: Introdução editorial, §2 e §4 lidas; demais passagens parcialmente recuperadas. Não atribuir texto da conferência seguinte ao coletivo. PDF de 9 páginas mistura texto primário e enquadramento editorial; distinguir ambos."
      },
      {
        "title": "The Combahee River Collective Statement",
        "url": "https://www.loc.gov/item/lcwaN0028151/",
        "note": "Publicação: 1977-04. Acesso registrado pela pesquisa: 2026-10-08. Tipo: archival. Localizador: Descrição do documento arquivado. Leitura efetiva declarada na pesquisa: Registro de preservação e data da declaração conferidos."
      }
    ],
    "evidence": {},
    "axisEvidence": {},
    "coding": {}
  },
  {
    "id": "ideology-black-nationalism",
    "kind": "ideology",
    "category": "ideology",
    "name": "Nacionalismo negro comunitário (Malcolm X, 1964)",
    "period": "Malcolm X, versão de Cleveland de The Ballot or the Bullet, 3 abril 1964.",
    "rationale": "Autodeterminação negra por controle comunitário da política, da economia e das instituições sociais. Organização eleitoral independente, negócios comunitários e autodefesa quando o Estado não protege direitos.",
    "caveats": "Não confundir com nacionalismo religioso da Nation of Islam nem com a evolução posterior da OAAU. A identidade racial não implica automaticamente política migratória. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "sources": [
      {
        "title": "The Ballot or the Bullet",
        "url": "https://teachingamericanhistory.org/document/the-ballot-or-the-bullet-2/",
        "note": "Publicação: 1964-04-03. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: passagens Political/Economic/Social Philosophy of Black Nationalism e autodefesa. Leitura efetiva declarada na pesquisa: Excerto editado lido; é versão de Cleveland, não Detroit 12abril."
      },
      {
        "title": "Separating — The Ballot or the Bullet",
        "url": "https://nationalhumanitiescenter.org/pds/maai3/protest/text8/text8read.htm",
        "note": "Publicação: undated. Acesso registrado pela pesquisa: 2026-10-08. Tipo: scholarly. Localizador: Enquadramento histórico do discurso. Leitura efetiva declarada na pesquisa: Introdução consultada; apresenta inconsistência Cleveland/Detroit no comentário, portanto a data usada segue o documento TAH."
      }
    ],
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
  },
  {
    "id": "ideology-revolutionary-intercommunalism",
    "kind": "ideology",
    "category": "ideology",
    "name": "Intercomunalismo revolucionário (Newton, 1970)",
    "period": "Huey P. Newton, discurso no Boston College, 18 novembro 1970.",
    "rationale": "O império capitalista dissolveu soberanias efetivas; comunidades precisam libertar coletivamente produção e tecnologia. Redistribuição entre comunidades e programas de sobrevivência ligados à organização revolucionária de trabalhadores e excluídos pela automação.",
    "caveats": "É tese de Newton nesse período, não de todos os Panteras Negras; seu diagnóstico de inexistência de nações é uma afirmação teórica contestável, não fato adotado pelo catálogo. Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.",
    "sources": [
      {
        "title": "Huey Newton introduces Revolutionary Intercommunalism",
        "url": "https://libcom.org/article/huey-newton-introduces-revolutionary-intercommunalism-boston-college-november-18-1970",
        "note": "Publicação: 1970-11-18. Acesso registrado pela pesquisa: 2026-10-08. Tipo: primary. Localizador: passagens sobre automação, império, comunidades e redistribuição. Leitura efetiva declarada na pesquisa: Passagens centrais do discurso lidas em reprodução; perguntas finais não integralmente."
      },
      {
        "title": "Huey Newton Speaks at Boston College, Presents Theory of Intercommunalism",
        "url": "https://www.thecrimson.com/article/1970/11/19/huey-newton-speaks-at-boston-college/",
        "note": "Publicação: 1970-11-19. Acesso registrado pela pesquisa: 2026-10-08. Tipo: contemporary-report. Localizador: Reportagem contemporânea da mudança doutrinária. Leitura efetiva declarada na pesquisa: Relato e data do discurso conferidos."
      }
    ],
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
  }
];

const reviewedOn = '2026-10-10';
const selectionCaveat = (entry: ReferenceEntry) => entry.caveats.replace(
  'Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos.',
  'A pesquisa qualitativa de seleção, por si, não certifica os 12 eixos.',
);
const combaheeSource: ReferenceSource = {
  title: 'A Black Feminist Statement — Combahee 1977, revisão 2026-10-10',
  url: 'https://careprogram.ucla.edu/education/readings/Combahee1977',
  note: 'Declaração de abril de 1977, reprodução acadêmica hospedada pela UCLA. Leitura: texto primário completo, pp. impressas 270–276, §§1–4; introdução editorial e documento seguinte excluídos da codificação. Acesso 2026-10-10. Sem colação com original de 1977.',
};
const malcolmSource: ReferenceSource = {
  title: 'The Ballot or the Bullet — Cleveland 1964, revisão 2026-10-10',
  url: 'https://teachingamericanhistory.org/document/the-ballot-or-the-bullet-2/',
  note: 'Discurso de Cleveland, 3 abril 1964. Leitura: seção Document completa, excertos de Malcolm X Speaks, ed. George Breitman, 1965. Edição/introdução digital: Peter C. Myers, sem data indicada. Acesso 2026-10-10. Não é transcrição integral nem versão de Detroit.',
};
const newtonSource: ReferenceSource = {
  title: 'Boston College speech — Newton 1970, revisão 2026-10-10',
  url: 'https://libcom.org/article/huey-newton-introduces-revolutionary-intercommunalism-boston-college-november-18-1970',
  note: 'Discurso de 18 novembro 1970; reprodução libcom publicada em 15 fevereiro 2018. Leitura: corpo principal, linhas web 16–116, sem usar apresentação ou comentários. Acesso 2026-10-10. Sem colação com áudio/impresso ou sessão de perguntas.',
};

function code(
  source: ReferenceSource, publishedDate: string, axis: AxisKey,
  position: EditorialPosition, relatedQuestionIds: string[], locator: string,
  statement: string, rationale: string, uncertainty: string,
): ReferenceAxisCoding {
  return { axis, position, confidence: 'medium', relatedQuestionIds,
    claims: [{ sourceTitle: source.title, locator, statement, basis: 'declaration', publishedDate, accessedDate: reviewedOn }],
    rationale, uncertainty, reviewedOn };
}
const c = (axis: AxisKey, position: EditorialPosition, ids: string[], locator: string, statement: string, rationale: string, uncertainty: string) =>
  code(combaheeSource, 'Abril de 1977; reprodução acadêmica sem colação do original', axis, position, ids, locator, statement, rationale, uncertainty);
const m = (axis: AxisKey, position: EditorialPosition, ids: string[], locator: string, statement: string, rationale: string, uncertainty: string) =>
  code(malcolmSource, '1964-04-03; excertos da edição Malcolm X Speaks, 1965; reprodução digital sem data indicada', axis, position, ids, locator, statement, rationale, uncertainty);
const n = (axis: AxisKey, position: EditorialPosition, ids: string[], locator: string, statement: string, rationale: string, uncertainty: string) =>
  code(newtonSource, '1970-11-18; reprodução libcom de 2018-02-15', axis, position, ids, locator, statement, rationale, uncertainty);

export const sixthIdeologies20261010Definitions: Definition[] = [
  {
    before: baselines[0]!, addedSources: [combaheeSource],
    codings: [
      c('rep', 'moderate-first', ['representacao_17'],
        '§4, p.276, penúltimo parágrafo; linhas web 291–295. Página impressa = índice físico do PDF +269.',
        'Estende processo coletivo e poder não hierárquico do grupo à sociedade revolucionária.',
        'A distribuição participativa de autoridade sustenta democracia moderada.',
        'Não especifica sufrágio, eleições, oposição ou desenho constitucional; organização do coletivo, sozinha, não bastaria.'),
      c('eco', 'moderate-first', ['economia_01', 'economia_05'],
        '§2, p.273, primeiro parágrafo completo; linhas web 149–163.',
        'Requer benefício coletivo do trabalho e distribuição igual de recursos aos produtores, contra a exploração capitalista.',
        'Finalidade econômica coletiva sustenta direção pública moderada.',
        'Não define titularidade jurídica, nacionalização ou gestão setorial; não equivale a propriedade estatal integral.'),
      c('mor', 'strong-first', ['moral_02', 'moral_07', 'moral_09', 'moral_18'],
        '§2, pp.272–273; §3, pp.274–275; §4, p.276. Linhas web 139–153,179–189,215–250,283–284.',
        'Combate patriarcado e heterossexismo, incluindo direitos ao aborto e rejeição de papéis sexuais hierárquicos.',
        'Transformação das relações de gênero e sexualidade é constitutiva.',
        'Não imputa posições atuais sobre identidade de gênero, adoção, poliamor ou todas as perguntas morais. A citação patriarcal em §3 é criticada, não adotada.'),
    ],
    unknownAxisReasons: {
      est: 'Poder não hierárquico não estabelece divisão territorial de competências.',
      pod: 'Autonomia reprodutiva não especifica um regime geral de liberdades civis e coerção.',
      imi: 'Identidade e combate ao racismo não determinam política migratória ou acomodação cultural geral.',
      dip: 'Militância e rejeição de meios destrutivos não definem política militar.',
      int: 'Crítica ao imperialismo não especifica intervenção externa, alianças ou sanções.',
      con: 'Distribuição igual de recursos não especifica planejamento, preços ou regulação produtiva.',
      com: 'Socialismo não implica automaticamente tarifas ou orientação comercial internacional.',
      rel: 'Não há desenho suficiente de religião pública ou relação entre leis civis e fé.',
      tec: 'Rejeitar determinismo biológico não estabelece posição sobre tecnologia ou biotecnologia.',
    },
    caveats: `${selectionCaveat(baselines[0]!)} Revisão documental de 10/10/2026: três eixos declaratórios, com confiança média; permanece parcial. A introdução editorial e o documento seguinte no PDF não são posições do coletivo. Âncoras e faixas são interpolações editoriais, não medições ou prova de implementação.`,
  },
  {
    before: baselines[1]!, addedSources: [malcolmSource],
    codings: [
      m('rep', 'moderate-first', ['representacao_15'],
        'Seção Document: debate eleitoral e filosofia política, linhas web 85–99; convenção/delegados, 113–114.',
        'Propõe influência eleitoral comunitária, cobrança de políticos e discussão entre delegados.',
        'Controle político pelos representados sustenta democracia moderada.',
        'A alternativa armada e a crítica à democracia americana impedem leitura forte; não demonstra sufrágio universal, pluralismo constitucional ou resultados.'),
      m('eco', 'moderate-second', ['economia_05', 'economia_18'],
        'Seção Document: filosofia econômica, linhas web 102–106, especialmente a loja individual em 102 e negócios em 105.',
        'Defende lojas, bancos e empresas sob propriedade e iniciativa de pessoas da comunidade negra.',
        'Propriedade empresarial local sustenta direção privada moderada neste programa.',
        'Não atribui compromisso capitalista geral, privatização de serviços ou laissez-faire. Controle comunitário não define sozinho um regime jurídico de propriedade.'),
    ],
    unknownAxisReasons: {
      est: 'Autodeterminação comunitária não estabelece federação ou repartição de competências estatais.',
      pod: 'Autodefesa armada condicionada é insuficiente para estimar todo o eixo de liberdades e coerção.',
      imi: 'Rejeição da integração e crítica à segregação não equivalem a política migratória ou assimilação cultural.',
      dip: 'Armas civis e resistência interna não determinam diplomacia ou militarização interestatal.',
      int: 'O excerto não fornece regras suficientes para intervenção externa, neutralidade ou alianças.',
      con: 'Iniciativa empresarial local não estabelece planejamento ou liberdade de mercado agregada.',
      com: 'Compras dentro da comunidade não se traduzem em protecionismo nacional ou tarifas.',
      rel: 'Coalizão entre crenças não define laicidade estatal; fé pessoal não prova confessionalismo político.',
      mor: 'Combate a vícios e igualdade racial não resolvem a orientação moral agregada.',
      tec: 'Sem programa tecnológico abrangente no excerto acessado.',
    },
    caveats: `${selectionCaveat(baselines[1]!)} Revisão documental de 10/10/2026: dois eixos declaratórios, com confiança média; permanece parcial. ECO descreve apenas a orientação empresarial local desse discurso, não toda a trajetória de Malcolm X. A fonte é uma seleção editada de Cleveland; não se incorporam Detroit ou posições posteriores. Âncoras e faixas são editoriais, não medidas.`,
  },
  {
    before: baselines[2]!, addedSources: [newtonSource],
    codings: [
      n('est', 'moderate-first', ['estrutura_01', 'estrutura_03', 'estrutura_17', 'estrutura_20'],
        'Corpo do discurso, parágrafo sobre controle das instituições comunitárias (linha web 101); concentração de poder (107); contrapontos 95–97.',
        'Combina controle das instituições pelas comunidades com representação num centro tecnológico e coordenação mundial.',
        'Controle comunitário sustenta descentralização moderada.',
        'Não é constituição federal: coordenação econômica global permanece e não há competências fiscais, secessão ou garantias territoriais definidas.'),
      n('eco', 'strong-first', ['economia_01', 'economia_05', 'economia_13', 'economia_18'],
        'Corpo: apropriação das máquinas (71), intercomunalismo revolucionário (86), controle duradouro da produção (92–96).',
        'Requer controle coletivo permanente dos meios de produção e redistribuição entre comunidades.',
        'Mudança abrangente da titularidade produtiva sustenta público forte.',
        'Não se infere de programas assistenciais isolados; propriedade comum não equivale a nacionalização por um Estado central.'),
      n('con', 'strong-first', ['controle_01', 'controle_02', 'controle_13'],
        'Corpo: sequência sobre planejamento econômico mundial/intercomunal, linhas web 95–97; contexto distributivo 92–96.',
        'Propõe planejamento econômico intercomunal em escala mundial.',
        'Coordenação planejada explícita sustenta planejamento forte, separadamente da propriedade.',
        'Sem técnicas de preços, moeda, tributação ou alocação setorial; não equivale a execução comprovada ou comando burocrático nacional.'),
      n('tec', 'moderate-first', ['tecnologia_02', 'tecnologia_03'],
        'Corpo: automação e desemprego (58–64), máquinas, tempo livre e abundância (67–71), partilha tecnológica (86).',
        'Vincula maquinaria à abundância e ao tempo livre sob controle coletivo, preservando a crítica ao desemprego capitalista.',
        'Emancipação por capacidade tecnológica sustenta direção moderada.',
        'A automação não é incondicionalmente positiva; não imputa posição sobre genética, IA atual, energia nuclear ou intervenção ambiental.'),
    ],
    unknownAxisReasons: {
      rep: 'Representação proporcional é mencionada, mas faltam mecanismos claros de sufrágio, pluralismo ou controle da vanguarda.',
      pod: 'Denúncia de repressão e autodefesa não definem um regime geral de liberdades civis.',
      imi: 'Diagnóstico de convergência cultural e cultura humana futura não resolve assimilação, imigração ou direitos de culturas distintas.',
      dip: 'Libertação revolucionária e paz final não estabelecem preferência militar agregada.',
      int: 'Luta mundial anti-imperial não equivale a neutralidade ou não intervenção.',
      com: 'Redistribuição intercomunal não estabelece comércio livre ou proteção tarifária nacional.',
      rel: 'A frase conclusiva sobre cultura humana não especifica liberdade religiosa ou regime de religião pública.',
      mor: 'Antirracismo não resolve sozinho escolhas morais; não incorporar outros discursos de Newton.',
    },
    caveats: `${selectionCaveat(baselines[2]!)} Revisão documental de 10/10/2026: quatro eixos declaratórios, com confiança média; permanece parcial. Descentralização comunitária convive com coordenação mundial. Não se certificam as previsões sobre automação nem os diagnósticos sobre nações. Âncoras e faixas são interpolações editoriais, não medições ou execução histórica.`,
  },
];

function buildPost(entry: ReferenceEntry, definition: Definition): ReferenceEntry {
  const sources = [...entry.sources, ...definition.addedSources];
  const vec = { ...entry.vec }, evidence = { ...entry.evidence };
  const axisEvidence = { ...entry.axisEvidence }, coding = { ...entry.coding };
  for (const input of definition.codings) {
    const value = codeReferenceAxis(input, sources);
    vec[input.axis] = value.value; evidence[input.axis] = value.evidence;
    axisEvidence[input.axis] = value.axisEvidence!; coding[input.axis] = value.coding;
  }
  return { ...entry, sources, vec, evidence, axisEvidence, coding, caveats: definition.caveats,
    unknownAxisReasons: { ...definition.unknownAxisReasons } } as ExtendedReference;
}
export const sixthIdeologies20261010ExpectedPosts = sixthIdeologies20261010Definitions.map(definition => buildPost(structuredClone(definition.before), definition));
export function reconcileSixthIdeologies20261010(entry: ReferenceEntry): ReferenceEntry {
  const index = sixthIdeologies20261010Definitions.findIndex(definition => definition.before.id === entry.id);
  if (index < 0) return entry;
  if (JSON.stringify(entry) === JSON.stringify(sixthIdeologies20261010ExpectedPosts[index])) return entry;
  const definition = sixthIdeologies20261010Definitions[index]!;
  if (JSON.stringify(entry) !== JSON.stringify(definition.before)) throw new Error(`Selected ideology baseline diverged for ${entry.id}; preserve later work and review before integrating.`);
  return buildPost(entry, definition);
}
