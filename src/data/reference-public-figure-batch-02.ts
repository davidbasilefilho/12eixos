import type { ReferenceEntry, ReferenceSource } from './references';
import { AXES } from '../lib/scoring';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';

const reviewedOn = '2026-10-07';
type DatedDocument = ReferenceSource & { publishedDate: string };
const document = (title: string, url: string, publishedDate: string): DatedDocument => ({
  title, url, publishedDate,
  note: `Fonte primária do gabinete, aberta e lida em ${reviewedOn}; publicação ${publishedDate}. A declaração documenta uma proposta, não sua execução ou a validade de alegações médicas/econômicas do autor.`,
});
const identitySenate: ReferenceSource = {
  title: 'Senado dos EUA — diretório do 119º Congresso, 03/08/2026',
  url: 'https://www.senate.gov/general/resources/pdf/senators_phone_list.pdf',
  note: 'PDF primário aberto em 07/10/2026; página única lista oito senadores deste lote. Usado somente para identidade/status público, sem inferir qualquer posição.',
};
const identityJayapal: ReferenceSource = {
  title: 'Office of the Clerk — Pramila Jayapal, 119º Congresso, 2ª sessão',
  url: 'https://clerk.house.gov/Members/J000298',
  note: 'Perfil primário atual aberto em 07/10/2026; identidade e mandato, sem inferir posições pelo cargo.',
};
const equality = document('Baldwin, Merkley e Booker — reapresentação do Equality Act',
  'https://www.baldwin.senate.gov/news/press-releases/senator-baldwin-leads-bill-to-ban-discrimination-against-lgbtq-americans', '2025-04-29');
const transparency = document('Lee — Government Surveillance Transparency Act',
  'https://www.lee.senate.gov/2026/2/lee-cosponsors-government-surveillance-transparency-act', '2026-02-27');
const bookerVoting = document('Booker — declarações sobre o Voting Rights Act',
  'https://www.booker.senate.gov/news/press/icymi-booker-responds-to-scotus-decision-attacking-vra-this-is-now-a-movement-election', '2026-04-30');
const transRights = document('Markey e Jayapal — Transgender Bill of Rights',
  'https://www.markey.senate.gov/news/press-releases/as-trump-administration-continues-cruel-attacks-on-transgender-community-markey-and-jayapal-reintroduce-transgender-bill-of-rights', '2026-02-11');
const healthPlan = document('Markey e Khanna — Green New Deal for Health',
  'https://www.markey.senate.gov/news/press-releases/markey-khanna-reintroduce-green-new-deal-for-health-to-invest-in-patients-workers-and-infrastructure-for-todays-climate-health-threats', '2026-07-28');
const cameras = document('Merkley — Ban Flock Act e privacidade',
  'https://www.merkley.senate.gov/sanders-ocasio-cortez-merkley-unveil-ban-flock-act-to-protect-americans-right-to-privacy/', '2026-10-02');
const jayapalHealth = document('Jayapal — audiência sobre Medicare for All',
  'https://jayapal.house.gov/2026/07/22/jayapal-dingell-cpc-members-host-universal-healthcare-shadow-hearing/', '2026-07-22');
const buyAmerica = document('Baldwin — Build America, Buy America Compliance Act',
  'https://www.baldwin.senate.gov/news/press-releases/baldwin-banks-introduce-bill-to-enforce-build-america-buy-america-standards', '2026-04-27');
const paulTariffs = document('Rand Paul — emenda a tarifas no projeto de sanções russas',
  'https://www.paul.senate.gov/senator-rand-paul-offers-amendment-to-strip-half-trillion-dollar-tax-increase-from-russia-sanctions-bill/', '2026-08-07');
const paulPrivacy = document('Rand Paul — Fourth Amendment Restoration and Protection Act',
  'https://www.paul.senate.gov/dr-rand-paul-introduces-legislation-to-restore-and-protect-americans-fourth-amendment-rights/', '2023-11-30');
const hawleyAbortion = document('Hawley — Safeguarding Women from Chemical Abortion Act',
  'https://www.hawley.senate.gov/hawley-introduces-bill-to-ban-chemical-abortion-drug-hosts-press-conference-featuring-pro-life-testimonies-leaders/', '2026-03-11');
const schoolChoice = document('Cruz — Universal School Choice Act',
  'https://www.cruz.senate.gov/newsroom/press-releases/sen-cruz-introduces-universal-school-choice-act', '2025-05-20');
const transitionResearch = document('Lee e Cruz — proposta sobre financiamento de pesquisa de transição de gênero de menores',
  'https://www.lee.senate.gov/2026/7/lee-introduces-ban-on-federal-funding-for-child-mutilation-studies', '2026-07-31');

function axisCoding(axis: ReferenceAxisCoding['axis'], position: ReferenceAxisCoding['position'], doc: DatedDocument,
  locator: string, statement: string, rationale: string, uncertainty: string, relatedQuestionIds: string[]): ReferenceAxisCoding {
  return { axis, position, confidence: 'medium',
    claims: [{ sourceTitle: doc.title, locator, statement, basis: 'declaration', publishedDate: doc.publishedDate, accessedDate: reviewedOn }],
    rationale, uncertainty, relatedQuestionIds, reviewedOn };
}
const equalityCoding = (name: string) => axisCoding('mor', 'moderate-first', equality,
  `Abertura identifica ${name} entre os três reapresentadores; parágrafo sobre alterações das leis antidiscriminatórias`,
  `${name} reapresentou proteção legal contra discriminação por orientação sexual e identidade de gênero.`,
  'A proteção proposta sustenta direção reformista no subtema de igualdade sexual e de gênero.',
  'Uma iniciativa de direitos civis não demonstra todas as posições sobre aborto, família, cultura ou cotas; não é lei em vigor.', ['moral_03', 'moral_07']);
const privacyCoding = (name: string) => axisCoding('pod', 'moderate-second', transparency,
  `Declaração nominal de ${name}; lista final das exigências de notificação e publicidade`,
  `${name} defende informar pessoas sobre vigilância judicial de seus dados e tornar ordens públicas após cessarem riscos investigativos.`,
  'Controle e transparência da vigilância sustentam direção de liberdade neste domínio.',
  'Preserva investigações legítimas e admite sigilo temporário; não resolve drogas, armas, pena capital ou todas as políticas de segurança.', ['poder_03']);

export interface PublicFigureBatch02Spec {
  id: string;
  name: string;
  aliases?: string[];
  period: string;
  sources: ReferenceSource[];
  coding: ReferenceAxisCoding[];
  caveats: string;
}

/** Pending independent documentary review; root owns catalog integration. */
export const publicFigureBatch02Specs: PublicFigureBatch02Spec[] = [
  {
    id: 'cory-booker', name: 'Cory Booker', period: 'Propostas e declarações selecionadas, abril de 2025–abril de 2026',
    sources: [identitySenate, equality, transparency, bookerVoting],
    coding: [equalityCoding('Cory Booker'), privacyCoding('Cory Booker'),
      axisCoding('rep', 'moderate-first', bookerVoting, 'Declarações de Booker reproduzidas na seção Morning Joe, 30/04/2026',
        'Defende eleições justas e representação de eleitores negros contra exclusão por redesenho de distritos.',
        'Proteção de participação e representação sustenta orientação democrática parcial.',
        'A opinião sobre a decisão judicial não é uma conclusão jurídica deste catálogo; uma defesa de direitos eleitorais não define toda a arquitetura democrática.', ['representacao_01', 'representacao_07']),
    ],
    caveats: 'As posições são atribuídas por participação nominal e falas próprias, sem inferência de partido ou identidade. O gabinete reproduz entrevistas: usamos as declarações de Booker, não opiniões de jornalistas.',
  },
  {
    id: 'ed-markey', name: 'Ed Markey', aliases: ['Edward J. Markey'], period: 'Propostas selecionadas, fevereiro–julho de 2026',
    sources: [identitySenate, transRights, healthPlan],
    coding: [
      axisCoding('mor', 'moderate-first', transRights, 'Declaração de Markey após abertura; direitos enumerados em seguida',
        'Propõe proteger pessoas trans contra discriminação e garantir documentos de identidade e cuidados de saúde afirmativos.',
        'Reconhecimento jurídico e de identidade de gênero sustenta reforma social parcial.',
        'Não deriva posições em toda a moral de um subtema; a resolução é declaratória e não comprova implementação.', ['moral_03']),
      axisCoding('eco', 'moderate-first', healthPlan, 'Lista Specifically: itens healthcare access e climate-resilient infrastructure',
        'Propõe financiamento federal de centros comunitários e instalações médicas públicas e sem fins lucrativos.',
        'Provisão/financiamento social fora da lógica de acesso exclusivamente privado sustenta orientação pública parcial.',
        'Centros sem fins lucrativos não são necessariamente estatais; subsídios não demonstram predominância de propriedade pública da economia.', ['economia_04', 'economia_07']),
      axisCoding('con', 'moderate-first', healthPlan, 'Lista Specifically: infrastructure, supply chains e workforce',
        'Organiza investimento federal, condições trabalhistas e divulgação obrigatória de riscos climáticos nas cadeias de saúde.',
        'Coordenação pública e investimento estratégico setorial sustentam planejamento moderado.',
        'Programa proposto de um setor; não prova controle integral de preços, produção ou alocação econômica.', ['controle_01', 'controle_07']),
    ],
    caveats: 'Não atribui pacifismo pela filiação partidária nem tecnologia por mencionar pesquisa climática. O plano de saúde favorece entidades públicas e não lucrativas; esses tipos de propriedade permanecem distintos.',
  },
  {
    id: 'jeff-merkley', name: 'Jeff Merkley', period: 'Propostas selecionadas, abril de 2025–outubro de 2026',
    sources: [identitySenate, equality, cameras],
    coding: [equalityCoding('Jeff Merkley'),
      axisCoding('pod', 'moderate-second', cameras, 'Declaração individual de Merkley; lista The Ban Flock Act would do this',
        'Contesta rastreamento contínuo de deslocamentos e propõe restringir leitores automáticos de placas usados pelo governo.',
        'A restrição proposta ao monitoramento de pessoas sustenta direção de liberdade no domínio da vigilância.',
        'Leitura de placas não é reconhecimento facial; analogia limitada com câmeras no questionário. Não presume oposição a toda investigação policial.', ['poder_03', 'poder_05']),
    ],
    caveats: 'As mesmas leis podem ser apoiadas por pessoas diferentes: participação nominal foi conferida, sem copiar um vetor partidário. Pesquisa sobre IA para vigilância não determina tecnologia versus biologia.',
  },
  {
    id: 'pramila-jayapal', name: 'Pramila Jayapal', period: 'Propostas selecionadas, fevereiro–julho de 2026',
    sources: [identityJayapal, transRights, jayapalHealth],
    coding: [
      axisCoding('mor', 'moderate-first', transRights, 'Declaração nominal de Jayapal após a declaração de Markey',
        'Reapresenta resolução de proteção a pessoas trans e não conformes ao gênero contra discriminação.',
        'Reconhecimento igualitário de identidade de gênero sustenta reforma social parcial.',
        'Não completa aborto, família ou todas as pautas culturais; a proposta não é prova de execução.', ['moral_03']),
      axisCoding('eco', 'moderate-first', jayapalHealth, 'Declaração de Jayapal; parágrafo Medicare for All would expand',
        'Defende ampliar Medicare para cobertura universal sem prêmios privados, franquias ou copagamentos.',
        'Financiamento público universal de saúde sustenta direção pública no subtema de serviços sociais.',
        'Pagador público não implica propriedade estatal de todos os prestadores; estimativas de economia e vidas salvas no comunicado não foram validadas nem usadas no score.', ['economia_04']),
    ],
    caveats: 'Não deduz posição migratória da origem pessoal. A audiência de 2026 trata de projeto de 2025: o perfil distingue publicação, proposição e implementação.',
  },
  {
    id: 'tammy-baldwin', name: 'Tammy Baldwin', period: 'Propostas selecionadas, abril de 2025–abril de 2026',
    sources: [identitySenate, equality, buyAmerica],
    coding: [equalityCoding('Tammy Baldwin'),
      axisCoding('com', 'moderate-first', buyAmerica, 'Declaração de Baldwin; lista Specifically, annual reports e waivers',
        'Defende aplicar preferências por produtos americanos nas compras de programas federais de infraestrutura.',
        'Preferência doméstica e redução de dispensas gerais sustentam protecionismo setorial moderado.',
        'Compra pública é uma barreira/preferência específica; não informa tarifa geral, proibição de importação nem toda a política comercial.', ['comercio_13']),
    ],
    caveats: 'A proposta de execução Buy America preserva dispensas específicas. Não inferimos posição sobre guerra de voto em uma lei orçamentária composta.',
  },
  {
    id: 'rand-paul', name: 'Rand Paul', period: 'Propostas selecionadas de novembro de 2023 e agosto de 2026',
    sources: [identitySenate, paulPrivacy, paulTariffs],
    coding: [
      axisCoding('pod', 'moderate-second', paulPrivacy, 'Declaração de Paul; lista Specifically, itens de tribunais Article III e consultas de dados',
        'Propõe limitar vigilância de pessoas dos EUA sob FISA e exigir autorização de tribunais federais ordinários.',
        'Controle judicial e limites à consulta de dados sustentam liberdade parcial contra vigilância.',
        'A fonte é de 2023 e não foi redatada; mantém espionagem de estrangeiros e terroristas e não cobre todas as garantias civis.', ['poder_03']),
      axisCoding('com', 'moderate-second', paulTariffs, 'Abertura e parágrafos da emenda e limites, antes de Dr. Paul’s Remarks',
        'Propõe retirar autoridade para tarifas amplas contra países terceiros, mantendo sanções e tarifas contra a Rússia.',
        'Oposição delimitada a barreiras gerais sustenta abertura comercial moderada.',
        'A preservação de tarifas russas é contraevidência à livre circulação irrestrita; não atribuímos neutralidade pela combinação de posições.', ['comercio_02']),
    ],
    caveats: 'Dois documentos de anos diferentes formam recorte explicitamente composto; não se afirma continuidade de toda plataforma. Argumentos constitucionais e cálculos tributários do comunicado são posições do autor, sem certificação externa.',
  },
  {
    id: 'josh-hawley', name: 'Josh Hawley', period: 'Proposta de março de 2026 sobre mifepristona para aborto',
    sources: [identitySenate, hawleyAbortion],
    coding: [
      axisCoding('mor', 'moderate-second', hawleyAbortion, 'Declaração de Hawley; lista Safeguarding Women from Chemical Abortion Act would',
        'Propõe retirar aprovação da mifepristona para aborto e proibir sua distribuição para interrupção de gravidez.',
        'A restrição à escolha reprodutiva sustenta direção conservadora no subtema de aborto.',
        'É uma política delimitada, sem posição completa sobre família, igualdade de gênero ou outras técnicas. Alegações de segurança médica do senador não são fatos validados por este perfil.', ['moral_09']),
    ],
    caveats: 'Um eixo documentado não torna o perfil elegível. Não inferimos planejamento de economia ou segurança geral por regular um medicamento; o score não julga a segurança clínica do produto.',
  },
  {
    id: 'ted-cruz', name: 'Ted Cruz', period: 'Propostas selecionadas, maio de 2025–julho de 2026',
    sources: [identitySenate, schoolChoice, transitionResearch],
    coding: [
      axisCoding('eco', 'moderate-second', schoolChoice, 'Abertura; declaração de Cruz; Background, primeiro item',
        'Defende créditos fiscais para bolsas e escolha de escolas, incluindo alternativas privadas e religiosas à provisão pública.',
        'Escolha e apoio a prestadores não estatais sustentam direção privada parcial na educação.',
        'O projeto financia escolha com benefício tributário público e pode incluir escolas públicas; não exige abolir a escola pública nem privatizar toda a economia.', ['economia_04']),
      axisCoding('mor', 'moderate-second', transitionResearch, 'Declaração nominal de Cruz; item final sobre pesquisas de menores',
        'Apoia proibir recursos federais para estudos que afirmem a identidade de gênero de menores divergente do sexo biológico.',
        'Restrição à política de afirmação de gênero sustenta orientação conservadora parcial neste domínio.',
        'Financiamento de pesquisa de menores não equivale a proibir todo tratamento ou rejeitar identidade de adultos; alegações médicas não foram adotadas como fatos.', ['moral_03']),
    ],
    caveats: 'A posição não é inferida da religião de escolas. Apoio nominal e declaração própria são distinguidos de falas de terceiros no mesmo comunicado.',
  },
  {
    id: 'mike-lee', name: 'Mike Lee', period: 'Propostas selecionadas, fevereiro–julho de 2026',
    sources: [identitySenate, transparency, transitionResearch],
    coding: [privacyCoding('Mike Lee'),
      axisCoding('mor', 'moderate-second', transitionResearch, 'Abertura; declaração nominal de Lee; item final de proibição de financiamento',
        'Propõe vetar financiamento federal de pesquisas e publicações voltadas à afirmação de transição de gênero de menores.',
        'Limita apoio estatal à afirmação de gênero e sustenta direção conservadora parcial.',
        'A medida é específica a menores e financiamento; não prova posição em todos os costumes nem mérito de suas alegações sobre dano médico.', ['moral_03']),
    ],
    caveats: 'Não inferimos irreligiosidade de defesa de privacidade nem planejamento econômico de restrição fiscal específica. O título carregado da fonte é preservado no URL, mas a descrição usa política concreta.',
  },
];

export const publicFigureBatch02: ReferenceEntry[] = publicFigureBatch02Specs.map(spec => {
  const entry: ReferenceEntry = {
    id: spec.id, name: spec.name, aliases: spec.aliases, kind: 'person', category: 'public-figure', period: spec.period,
    vec: Object.fromEntries(AXES.map(axis => [axis.key, 50])) as ReferenceEntry['vec'],
    evidence: {}, axisEvidence: {}, coding: {}, sources: spec.sources,
    rationale: spec.coding.map(item => item.rationale).join(' '),
    caveats: `${spec.caveats} Documento primário não valida automaticamente todas as alegações do autor. Âncoras editoriais representam classes, não percentuais observados. Demais eixos desconhecidos ficam sem evidência e fora do cálculo; cobertura menor que seis eixos.`,
  };
  for (const input of spec.coding) {
    const encoded = codeReferenceAxis(input, spec.sources);
    entry.vec[input.axis] = encoded.value;
    entry.evidence[input.axis] = encoded.evidence;
    entry.axisEvidence![input.axis] = encoded.axisEvidence;
    entry.coding![input.axis] = encoded.coding;
  }
  return entry;
});
