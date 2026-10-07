/** Bounded country batch: source claims first; coarse editorial coding is explicit. */
import type { AxisKey, ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type AuditableAxisCoding } from '../lib/reference-coding';

export interface CurrentCountryAxisClaim {
  axis: AxisKey;
  position: 'strong-first' | 'moderate-first' | 'moderate-second' | 'strong-second';
  confidence: 'high' | 'medium';
  sourceTitles: string[];
  locator: string;
  statement: string;
  basis: 'norm' | 'practice';
  uncertainty: string;
}

interface CurrentCountryBatchSpec {
  id: string;
  name: string;
  aliases?: string[];
  constitutionSlug: string;
  constitutionVersion: string;
  freedomSlug: string;
  caveats: string;
  claims: CurrentCountryAxisClaim[];
  uncodedClaims: { axis: AxisKey; source: 'constitution' | 'practice'; locator: string; statement: string; reason: string }[];
}

const constitutionTitle = (name: string) => `Texto constitucional — ${name} / Constitute`;
const practiceTitle = (name: string) => `Freedom in the World 2025 — ${name}`;
const claim = (name: string, axis: AxisKey, position: CurrentCountryAxisClaim['position'], basis: CurrentCountryAxisClaim['basis'], locator: string, statement: string, uncertainty: string, confidence: CurrentCountryAxisClaim['confidence'] = 'medium'): CurrentCountryAxisClaim => ({ axis, position, confidence, sourceTitles: [basis === 'norm' ? constitutionTitle(name) : practiceTitle(name)], locator, statement, basis, uncertainty });

export const currentCountryBatchSpecs: CurrentCountryBatchSpec[] = [
  {
    id: 'cabo-verde-current-2025', name: 'Cabo Verde', aliases: ['Cape Verde'], constitutionSlug: 'Cape_Verde_1992', constitutionVersion: '1980, rev. 1992; portal indica emendas posteriores', freedomSlug: 'cabo-verde',
    caveats: 'A tradução constitucional de 1992 não é consolidação vigente verificada; serve somente como documento de origem, sem pontuar suas cláusulas. O recorte de prática é 2024, publicado em 2025.',
    claims: [claim('Cabo Verde', 'rep', 'strong-first', 'practice', 'Overview; Key Developments in 2024', 'Eleições competitivas e alternância; eleições municipais de dezembro de 2024 sem perturbações relevantes.', 'Corrupção, sobrecarga judicial e desigualdades continuam; não equivale a democracia perfeita.', 'high')],
    uncodedClaims: [
      { axis: 'est', source: 'constitution', locator: 'Artigos 1–2, redação de 1992', statement: 'Declara Estado unitário com autonomia local e descentralização democrática.', reason: 'Texto posteriormente emendado; versão vigente não confirmada.' },
      { axis: 'int', source: 'constitution', locator: 'Artigo 10, redação de 1992', statement: 'Proclama não ingerência e rejeita bases militares estrangeiras.', reason: 'Declaração antiga não demonstra execução no recorte.' },
      { axis: 'tec', source: 'constitution', locator: 'Artigo 7, 8, redação de 1992', statement: 'Prevê promoção de pesquisa e novas tecnologias.', reason: 'Dever genérico e antigo não define orientação tecnológica atual.' },
    ],
  },
  {
    id: 'sao-tome-and-principe-current-2025', name: 'São Tomé e Príncipe', aliases: ['Sao Tome and Principe'], constitutionSlug: 'Sao_Tome_and_Principe_2003', constitutionVersion: '1975, rev. 2003', freedomSlug: 'sao-tome-and-principe',
    caveats: 'Instituições eleitorais competitivas coexistem com corrupção, carência judicial e alegações de violência militar. Economia mista e promoção da paz não determinam scores próprios.',
    claims: [
      claim('São Tomé e Príncipe', 'est', 'moderate-second', 'norm', 'Artigos 5 e 137', 'Estado unitário com Região Autônoma do Príncipe, assembleia e governo regionais próprios.', 'Não é federação; não mede autonomia efetivamente exercida.'),
      claim('São Tomé e Príncipe', 'rep', 'strong-first', 'practice', 'Overview', 'Eleições regulares competitivas e múltiplas alternâncias partidárias.', 'Corrupção e disfunção da justiça limitam a qualidade institucional.', 'high'),
      claim('São Tomé e Príncipe', 'rel', 'strong-first', 'norm', 'Artigo 8', 'Separa Estado de todas as instituições religiosas.', 'Codifica laicidade normativa; prática religiosa não foi verificada por narrativa específica, nem crenças da população.'),
    ],
    uncodedClaims: [
      { axis: 'eco', source: 'constitution', locator: 'Artigo 9', statement: 'Garante coexistência de propriedade pública, cooperativa e privada.', reason: 'Não informa predominância entre setores.' },
      { axis: 'dip', source: 'constitution', locator: 'Artigo 12', statement: 'Proclama paz e coexistência pacífica.', reason: 'Declaração genérica não mede prática militar.' },
    ],
  },
  {
    id: 'seychelles-current-2025', name: 'Seychelles', aliases: ['Seicheles'], constitutionSlug: 'Seychelles_2017', constitutionVersion: '1993, rev. 2017; emendas de 2024 registradas na fonte de prática', freedomSlug: 'seychelles',
    caveats: 'A fonte de prática registra reforma constitucional eleitoral em outubro de 2024; a tradução de 2017 não é consolidação completa. Corrupção, prisão preventiva longa e abusos contra migrantes limitam as garantias.',
    claims: [claim('Seychelles', 'rep', 'strong-first', 'practice', 'Overview; Key Developments in 2024', 'Oposição conquistou maioria parlamentar e presidência; instituições mantêm competição eleitoral.', 'Processo contra opositor foi arquivado em 2024; ativistas alertam para uso de leis penais contra críticas.', 'high')],
    uncodedClaims: [
      { axis: 'pod', source: 'constitution', locator: 'Artigos 15–18', statement: 'Proíbe pena de morte e tortura e protege liberdade pessoal.', reason: 'Prisão preventiva longa na prática exige análise própria; não pontuar garantias isoladas.' },
      { axis: 'mor', source: 'practice', locator: 'Key Developments in 2024, setembro', statement: 'Lei agravou penas por ódio, incluindo orientação sexual e identidade de gênero.', reason: 'Proteção específica coexistiu com preocupação sobre liberdade de expressão; não define todos os costumes.' },
      { axis: 'imi', source: 'practice', locator: 'Overview', statement: 'Trabalhadores migrantes são vulneráveis a abuso.', reason: 'Abuso laboral não prova uma política de assimilação cultural.' },
    ],
  },
  {
    id: 'comoros-current-2025', name: 'Comores', aliases: ['Comoros', 'União das Comores'], constitutionSlug: 'Comoros_2018', constitutionVersion: '2018', freedomSlug: 'comoros',
    caveats: 'O recorte é a União administrada pelo governo comoriano; a reivindicação constitucional sobre Mayotte não amplia o território observado. Eleição de 2024 foi contestada e seguida por repressão.',
    claims: [
      claim('Comores', 'est', 'moderate-second', 'norm', 'Artigos 1 e 99–104', 'Estado unitário com ilhas autônomas e competências exclusivas, inclusive planejamento e desenvolvimento locais.', 'Autonomia setorial não equivale a federação nem predomínio descentralizador.'),
      claim('Comores', 'rep', 'moderate-second', 'practice', 'Overview; Key Developments in 2024, janeiro', 'Competição eleitoral formal coexistiu com denúncias de fraude, perseguição da oposição e resultados divergentes.', 'Há candidaturas concorrentes; não codificar como ausência completa de eleições.'),
      claim('Comores', 'rel', 'strong-second', 'norm', 'Artigos 97–98', 'Islã estatal; regras sunitas e rito chafiita orientam crença e vida social, com mufti nomeado pelo presidente.', 'Escopo é a ordem religiosa estatal; não religiosidade individual.'),
    ],
    uncodedClaims: [
      { axis: 'pod', source: 'practice', locator: 'Key Developments in 2024, janeiro', statement: 'Protestos tiveram detenções, toque de recolher e interrupção de internet.', reason: 'Episódio documentado, sem cobertura de toda a política de segurança do período.' },
    ],
  },
  {
    id: 'djibouti-current-2025', name: 'Djibouti', aliases: ['Jibuti'], constitutionSlug: 'Djibouti_2010', constitutionVersion: '1992, rev. 2010; portal indica emendas posteriores', freedomSlug: 'djibouti',
    caveats: 'A edição constitucional de 2010 indica emendas posteriores e não foi validada como vigente; nenhuma cláusula dela recebeu pontuação atual. A promessa constitucional de pluralismo contrasta com repressão e domínio executivo na prática. Presença militar estrangeira não basta para inferir intervenção externa promovida pelo país.',
    claims: [
      claim('Djibouti', 'rep', 'strong-second', 'practice', 'Overview', 'Presidência dominante restringe severamente oposição, jornalistas e ativistas; alternância efetiva é bloqueada.', 'A constituição prevê partidos e sufrágio; o score representa a prática de 2024.', 'high'),
    ],
    uncodedClaims: [
      { axis: 'rel', source: 'constitution', locator: 'Artigo 1, redação de 2010', statement: 'Adota Islã estatal e garante igualdade religiosa e respeito às crenças.', reason: 'Texto posteriormente emendado; versão vigente não confirmada para codificação atual.' },
      { axis: 'est', source: 'constitution', locator: 'Artigos 85–86', statement: 'Coletividades territoriais têm autonomia administrativa e financeira.', reason: 'Competências substantivas não foram suficientemente estabelecidas para pontuar centralização.' },
      { axis: 'int', source: 'practice', locator: 'Key Developments in 2024, abril', statement: 'Relatório descreve base militar chinesa e deportação de parlamentar estrangeiro.', reason: 'Não demonstra doutrina geral de intervenção ou não intervenção.' },
    ],
  },
  {
    id: 'eswatini-current-2025', name: 'Eswatini', aliases: ['Suazilândia', 'Swaziland'], constitutionSlug: 'Swaziland_2005', constitutionVersion: '2005, nome histórico Swaziland', freedomSlug: 'eswatini',
    caveats: 'A constituição contém direitos e declara democracia, mas a fonte de prática descreve autoridade real predominante e repressão. Não inferir religião oficial de submissão a Deus no preâmbulo.',
    claims: [
      { ...claim('Eswatini', 'est', 'strong-second', 'practice', 'Overview; Constituição, seções 1 e 64', 'Rei controla governo nacional e governo local por influência sobre chefes tradicionais.', 'Unitarismo constitucional e subordinação local apoiam centralização; monarquia isolada não a demonstraria.'), sourceTitles: [constitutionTitle('Eswatini'), practiceTitle('Eswatini')] },
      { ...claim('Eswatini', 'rep', 'strong-second', 'practice', 'Overview; Key Developments in 2024, julho/agosto; Constituição, seção 64', 'Autoridade real predomina nos poderes nacionais e reformas democráticas enfrentam repressão penal.', 'Garantias judiciais formais e decisão favorável a policiais mostram que autoridade real não explica toda decisão institucional.', 'high'), sourceTitles: [constitutionTitle('Eswatini'), practiceTitle('Eswatini')] },
    ],
    uncodedClaims: [
      { axis: 'rel', source: 'constitution', locator: 'Seção 23', statement: 'Garante liberdade e mudança de religião.', reason: 'Liberdade religiosa não demonstra separação institucional.' },
      { axis: 'mor', source: 'practice', locator: 'Overview', statement: 'Relata discriminação contra mulheres e pessoas LGBT+.', reason: 'A cobertura resumida não detalha política de costumes suficiente para um vetor amplo.' },
    ],
  },
];

export const currentCountryBatchSources = (spec: CurrentCountryBatchSpec): ReferenceSource[] => [
  { title: constitutionTitle(spec.name), url: `https://www.constituteproject.org/constitution/${spec.constitutionSlug}?lang=en`, note: `Texto primário em tradução do Comparative Constitutions Project, aberto em 7/10/2026. Versão: ${spec.constitutionVersion}; não é prova automática de implementação.` },
  { title: practiceTitle(spec.name), url: `https://freedomhouse.org/country/${spec.freedomSlug}/freedom-world/2025`, note: 'Relatório institucional de 2025, referente a 2024, aberto em 7/10/2026. Usam-se proposições específicas e ressalvas, sem transformar sua pontuação agregada em score do 12eixos.' },
];

const axes: AxisKey[] = ['est', 'rep', 'pod', 'imi', 'dip', 'int', 'eco', 'con', 'com', 'rel', 'mor', 'tec'];
export const currentCountryBatchCoding: Record<string, Partial<Record<AxisKey, AuditableAxisCoding>>> = {};

export const currentCountryBatch: ReferenceEntry[] = currentCountryBatchSpecs.map(spec => {
  const sources = currentCountryBatchSources(spec);
  const vec = Object.fromEntries(axes.map(axis => [axis, 50])) as Record<AxisKey, number>;
  const evidence: ReferenceEntry['evidence'] = {};
  const axisEvidence: NonNullable<ReferenceEntry['axisEvidence']> = {};
  const audit: Partial<Record<AxisKey, AuditableAxisCoding>> = {};
  for (const item of spec.claims) {
    const coded = codeReferenceAxis({
      axis: item.axis, position: item.position, confidence: item.confidence,
      claims: item.sourceTitles.map(sourceTitle => {
        const norm = sourceTitle === constitutionTitle(spec.name);
        return {
          sourceTitle,
          locator: spec.name === 'Eswatini' && norm ? 'Seções 1 e 64' : item.locator,
          statement: spec.name === 'Eswatini' && norm ? 'A constituição estabelece reino unitário e atribui autoridade executiva ao rei.' : item.statement,
          basis: norm ? 'norm' as const : 'practice' as const,
          publishedDate: norm ? spec.constitutionVersion : '2025; acontecimentos de 2024', accessedDate: '2026-10-07',
        };
      }),
      rationale: `${item.locator}: ${item.statement}`,
      uncertainty: item.uncertainty, reviewedOn: '2026-10-07',
    }, sources);
    vec[item.axis] = coded.value;
    evidence[item.axis] = coded.evidence;
    axisEvidence[item.axis] = coded.axisEvidence;
    audit[item.axis] = coded.coding;
  }
  currentCountryBatchCoding[spec.id] = audit;
  return {
    id: spec.id, kind: 'country', category: 'country', name: spec.name, aliases: spec.aliases,
    period: 'Instituições e prática em 2024; documentação de 2025', vec, evidence, axisEvidence, sources,
    rationale: spec.claims.map(item => item.statement).join(' '),
    caveats: `${spec.caveats} Âncoras ordinais editoriais de 20/40/60/80 não são percentuais observados. Eixos não codificados permanecem desconhecidos, sem evidência. Cobertura insuficiente para os seis eixos exigidos no comparador.`,
  };
});
