/** Batch 02: documentary country profiles, with explicit limited ordinal coding. */
import type { AxisKey, ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type EditorialPosition, type ReferenceCodingClaim } from '../lib/reference-coding';
interface LocatedClaim { locator: string; statement: string }
interface BatchClaim extends LocatedClaim {
 axis: AxisKey; position: EditorialPosition; confidence: 'high' | 'medium';
 source: 'constitution' | 'practice' | 'previousPractice'; basis: 'norm' | 'practice';
 publishedDate: string; uncertainty: string;
 extraPreviousClaim?: LocatedClaim; extraPracticeClaim?: LocatedClaim; extraOfficialClaim?: LocatedClaim;
}
interface CountrySpec {
 id: string; name: string; aliases: string[]; freedomSlug: string;
 constitutionSlug: string; constitutionVersion: string;
 constitutionalContext: LocatedClaim & { limitation: string }; claims: BatchClaim[];
}
export const currentCountryBatch02Specs: CountrySpec[] = [
  {
    "id": "belize-current-2025",
    "name": "Belize",
    "aliases": [],
    "freedomSlug": "belize",
    "constitutionSlug": "Belize_2011",
    "constitutionVersion": "1981, rev. 2011",
    "constitutionalContext": {
      "locator": "Seções 1 e 56",
      "statement": "Estado democrático; Câmara de Representantes composta por membros eleitos.",
      "limitation": "Texto primário traduzido consultado; não foi estabelecida consolidação completa até 2024. Contexto documental, sem pontuação automática."
    },
    "claims": [
      {
        "axis": "rep",
        "position": "strong-first",
        "confidence": "high",
        "locator": "Overview; Key Developments in 2024",
        "statement": "Eleições competitivas e alternância regular; eleições municipais multipartidárias ocorreram em março de 2024.",
        "uncertainty": "Corrupção e violência policial limitam a qualidade institucional; representação municipal não substitui avaliação nacional.",
        "basis": "practice",
        "source": "practice",
        "publishedDate": "2025; observações de 2024"
      }
    ]
  },
  {
    "id": "bahamas-current-2025",
    "name": "Bahamas",
    "aliases": [
      "The Bahamas"
    ],
    "freedomSlug": "bahamas",
    "constitutionSlug": "Bahamas_1973",
    "constitutionVersion": "1973",
    "constitutionalContext": {
      "locator": "Artigos 72–74",
      "statement": "Gabinete responsável perante o Parlamento; primeiro-ministro depende de maioria parlamentar e voto de desconfiança.",
      "limitation": "Texto primário traduzido consultado; não foi estabelecida consolidação completa até 2024. Contexto documental, sem pontuação automática."
    },
    "claims": [
      {
        "axis": "rep",
        "position": "strong-first",
        "confidence": "high",
        "locator": "Overview; Key Developments in 2024",
        "statement": "Democracia estável em 2024; relatório completo anterior documenta alternância entre PLP e FNM, incluindo derrota do governo em 2021.",
        "uncertainty": "Corrupção persiste; financiamento eleitoral insuficientemente regulado. A alternância específica provém do relatório de 2024, sobre contexto de 2023.",
        "basis": "practice",
        "source": "practice",
        "publishedDate": "2025; observações de 2024",
        "extraPreviousClaim": {
          "locator": "A2 e B2, parágrafos narrativos",
          "statement": "Em 2021 o PLP derrotou o FNM governante; o relatório descreve alternância entre os dois partidos desde a independência."
        }
      },
      {
        "axis": "eco",
        "position": "moderate-second",
        "confidence": "medium",
        "source": "previousPractice",
        "basis": "practice",
        "publishedDate": "2024; contexto de 2023",
        "locator": "G2, parágrafo narrativo sobre setor privado",
        "statement": "Relatório descreve setor privado forte e liberdade de estabelecer negócios, com economia centrada em turismo e serviços financeiros.",
        "uncertainty": "Descrição institucional qualitativa de 2023, sem proporção medida de propriedade; não informa todos os serviços públicos."
      }
    ]
  },
  {
    "id": "barbados-current-2025",
    "name": "Barbados",
    "aliases": [],
    "freedomSlug": "barbados",
    "constitutionSlug": "Barbados_2007",
    "constitutionVersion": "1966, rev. 2007; anterior à reforma republicana de 2021",
    "constitutionalContext": {
      "locator": "Seção 41",
      "statement": "Prevê Câmara de Assembleia com membros eleitos; texto ainda contém estrutura monárquica antiga.",
      "limitation": "Texto primário traduzido consultado; não foi estabelecida consolidação completa até 2024. Contexto documental, sem pontuação automática."
    },
    "claims": [
      {
        "axis": "rep",
        "position": "strong-first",
        "confidence": "high",
        "locator": "Overview; Key Developments in 2024",
        "statement": "Eleições regulares competitivas e liberdades geralmente respeitadas; parlamentar que mudou para oposição em 2024 reativou controle de contas públicas.",
        "uncertainty": "Ausência de oposição parlamentar após eleição de 2022 limitou fiscalização; reforma constitucional proposta em 2024 não foi tratada como lei vigente.",
        "basis": "practice",
        "source": "practice",
        "publishedDate": "2025; observações de 2024"
      }
    ]
  },
  {
    "id": "antigua-and-barbuda-current-2025",
    "name": "Antígua e Barbuda",
    "aliases": [
      "Antigua and Barbuda"
    ],
    "freedomSlug": "antigua-and-barbuda",
    "constitutionSlug": "Antigua_and_Barbuda_1981",
    "constitutionVersion": "1981",
    "constitutionalContext": {
      "locator": "Seção 123",
      "statement": "Conselho de Barbuda constitucionalmente protegido; emendas à sua lei orgânica dependem de consentimento do Conselho.",
      "limitation": "Texto primário traduzido consultado; não foi estabelecida consolidação completa até 2024. Contexto documental, sem pontuação automática."
    },
    "claims": [
      {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "locator": "Overview; Key Developments in 2024; A3, parágrafo narrativo explicativo",
        "statement": "Eleições regulares coexistem com padrão persistente de circunscrições desproporcionais e transparência insuficiente no financiamento eleitoral.",
        "uncertainty": "Há democracia eleitoral; intensidade moderada reflete desigualdade específica do processo, sem converter as notas da fonte.",
        "basis": "practice",
        "source": "practice",
        "publishedDate": "2025; observações de 2024"
      },
      {
        "axis": "est",
        "position": "moderate-second",
        "confidence": "medium",
        "source": "constitution",
        "basis": "norm",
        "publishedDate": "1981",
        "locator": "Seção 123(1)–(6); confronto com Overview e Key Developments 2024",
        "statement": "A ordem constitucional protege Conselho de Barbuda e exige seu consentimento para alterações à lei orgânica local.",
        "uncertainty": "Autonomia local protegida, sem federalismo; narrativa de 2024 documenta pressão do governo nacional para enfraquecê-la. Não foram inventariadas todas as competências locais.",
        "extraPracticeClaim": {
          "locator": "Overview; Key Developments in 2024, aeroporto",
          "statement": "Relatório identifica autonomia de Barbuda e disputa com governo nacional; contestação judicial do aeroporto foi admitida em 2024."
        }
      }
    ]
  },
  {
    "id": "dominica-current-2025",
    "name": "Dominica",
    "aliases": [],
    "freedomSlug": "dominica",
    "constitutionSlug": "Dominica_2014",
    "constitutionVersion": "1978, rev. 2014",
    "constitutionalContext": {
      "locator": "Seção 33",
      "statement": "Representantes diretamente eleitos por voto secreto, com elegibilidade eleitoral definida em lei.",
      "limitation": "Texto primário traduzido consultado; não foi estabelecida consolidação completa até 2024. Contexto documental, sem pontuação automática."
    },
    "claims": [
      {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "locator": "Overview; Key Developments in 2024",
        "statement": "Democracia parlamentar com liberdades geralmente respeitadas; reformas eleitorais de dezembro de 2024 foram criticadas por omitir financiamento de campanha e manutenção adequada do cadastro.",
        "uncertainty": "Intensidade moderada se baseia nas falhas documentadas do processo; permanência do DLP desde 2000, isoladamente, não reduz o score.",
        "basis": "practice",
        "source": "practice",
        "publishedDate": "2025; observações de 2024"
      }
    ]
  },
  {
    "id": "grenada-current-2025",
    "name": "Granada",
    "aliases": [
      "Grenada"
    ],
    "freedomSlug": "grenada",
    "constitutionSlug": "Grenada_1992",
    "constitutionVersion": "1973, reinst. 1991, rev. 1992",
    "constitutionalContext": {
      "locator": "Seção 58(2), (6)",
      "statement": "Primeiro-ministro depende de maioria parlamentar e pode ser removido após voto de desconfiança.",
      "limitation": "Texto primário traduzido consultado; não foi estabelecida consolidação completa até 2024. Contexto documental, sem pontuação automática."
    },
    "claims": [
      {
        "axis": "rep",
        "position": "strong-first",
        "confidence": "high",
        "locator": "Overview; Key Developments in 2024",
        "statement": "Democracia parlamentar com eleições regulares e consideradas críveis.",
        "uncertainty": "Corrupção e discriminação LGBT+ permanecem; decisão judicial contra punição corporal em 2024 não demonstra toda política de liberdade ou costumes.",
        "basis": "practice",
        "source": "practice",
        "publishedDate": "2025; observações de 2024"
      }
    ]
  },
  {
    "id": "st-kitts-and-nevis-current-2025",
    "name": "São Cristóvão e Névis",
    "aliases": [
      "Saint Kitts and Nevis",
      "St Kitts and Nevis"
    ],
    "freedomSlug": "st-kitts-and-nevis",
    "constitutionSlug": "St_Kitts_and_Nevis_1983",
    "constitutionVersion": "1983",
    "constitutionalContext": {
      "locator": "Seções 103, 106 e 113; Schedule 5, Part 1",
      "statement": "Legislatura de Névis possui competências legislativas exclusivas; administração tem responsabilidades próprias; secessão exige referendo qualificado.",
      "limitation": "Texto primário traduzido consultado; não foi estabelecida consolidação completa até 2024. Contexto documental, sem pontuação automática."
    },
    "claims": [
      {
        "axis": "rep",
        "position": "strong-first",
        "confidence": "high",
        "locator": "Overview; Key Developments in 2024",
        "statement": "Eleições competitivas críveis e liberdades geralmente respeitadas.",
        "uncertainty": "Corrupção e opacidade no programa de cidadania e marginalização LGBT+ continuam.",
        "basis": "practice",
        "source": "practice",
        "publishedDate": "2025; observações de 2024"
      },
      {
        "axis": "est",
        "position": "strong-first",
        "confidence": "medium",
        "source": "constitution",
        "basis": "norm",
        "publishedDate": "1983",
        "locator": "Seções 103, 106, 113; Schedule 5, Part 1",
        "statement": "Névis tem legislatura própria com competências exclusivas sobre agricultura e desenvolvimento local, administração de educação e saúde e direito condicionado de separação da federação.",
        "uncertainty": "Codificação do desenho federal assimétrico; governo nacional pode prevalecer em temas de política geral e segurança, conforme 106(2) e 107(2). Portal governamental confirma origem e estrutura federativa, sem certificar todas as emendas.",
        "extraOfficialClaim": {
          "locator": "The Constitution, apresentação",
          "statement": "Portal governamental identifica a Constituição de 1983 e a estrutura de direitos e poderes da federação."
        }
      }
    ]
  },
  {
    "id": "st-lucia-current-2025",
    "name": "Santa Lúcia",
    "aliases": [
      "Saint Lucia",
      "St Lucia"
    ],
    "freedomSlug": "st-lucia",
    "constitutionSlug": "St_Lucia_1978",
    "constitutionVersion": "1978",
    "constitutionalContext": {
      "locator": "Seção 33(2)",
      "statement": "Eleição parlamentar por voto secreto; condições de registro determinadas por lei.",
      "limitation": "Texto primário traduzido consultado; não foi estabelecida consolidação completa até 2024. Contexto documental, sem pontuação automática."
    },
    "claims": [
      {
        "axis": "rep",
        "position": "strong-first",
        "confidence": "high",
        "locator": "Overview; Key Developments in 2024",
        "statement": "Democracia parlamentar com eleições competitivas e longa sequência de transferências pacíficas entre partidos rivais.",
        "uncertainty": "Circunscrições de tamanhos desiguais afetam peso do voto; corrupção e impunidade policial persistem.",
        "basis": "practice",
        "source": "practice",
        "publishedDate": "2025; observações de 2024"
      }
    ]
  },
  {
    "id": "st-vincent-and-the-grenadines-current-2025",
    "name": "São Vicente e Granadinas",
    "aliases": [
      "Saint Vincent and the Grenadines"
    ],
    "freedomSlug": "st-vincent-and-the-grenadines",
    "constitutionSlug": "St_Vincent_and_the_Grenadines_1979",
    "constitutionVersion": "1979",
    "constitutionalContext": {
      "locator": "Seção 27",
      "statement": "Representantes diretamente eleitos e voto secreto para eleitores registrados.",
      "limitation": "Texto primário traduzido consultado; não foi estabelecida consolidação completa até 2024. Contexto documental, sem pontuação automática."
    },
    "claims": [
      {
        "axis": "rep",
        "position": "strong-first",
        "confidence": "high",
        "locator": "Overview; Key Developments in 2024",
        "statement": "Democracia parlamentar com eleições regulares e múltiplas transferências de poder entre partidos.",
        "uncertainty": "Difamação criminal ameaça jornalistas; relações entre pessoas do mesmo sexo continuavam criminalizadas no recorte.",
        "basis": "practice",
        "source": "practice",
        "publishedDate": "2025; observações de 2024"
      }
    ]
  },
  {
    "id": "trinidad-and-tobago-current-2025",
    "name": "Trinidad e Tobago",
    "aliases": [
      "Trinidad and Tobago"
    ],
    "freedomSlug": "trinidad-and-tobago",
    "constitutionSlug": "Trinidad_and_Tobago_2007",
    "constitutionVersion": "1976, rev. 2007",
    "constitutionalContext": {
      "locator": "Seção 51",
      "statement": "Voto para cidadãos do Commonwealth com idade mínima de dezoito anos e condições legais de residência ou registro.",
      "limitation": "Texto primário traduzido consultado; não foi estabelecida consolidação completa até 2024. Contexto documental, sem pontuação automática."
    },
    "claims": [
      {
        "axis": "rep",
        "position": "strong-first",
        "confidence": "high",
        "locator": "Overview; Key Developments in 2024",
        "statement": "Democracia parlamentar; relatório completo anterior documenta disputa multipartidária e sucessivas transferências pacíficas pelo voto.",
        "uncertainty": "Corrupção, financiamento opaco e estado de emergência no fim de 2024 limitam direitos; o episódio não foi convertido automaticamente em score de segurança.",
        "basis": "practice",
        "source": "practice",
        "publishedDate": "2025; observações de 2024",
        "extraPreviousClaim": {
          "locator": "A2 e B2, parágrafos narrativos",
          "statement": "Relatório de 2024 descreve competição entre PNM e UNC nas eleições de 2020 e múltiplas mudanças pacíficas de governo desde os anos 1980."
        }
      }
    ]
  }
];
const axes: AxisKey[] = ['est', 'rep', 'pod', 'imi', 'dip', 'int', 'eco', 'con', 'com', 'rel', 'mor', 'tec'];
const sourceTitle = (spec: CountrySpec, source: BatchClaim['source']) => source === 'constitution' ? `Texto constitucional — ${spec.name} / Constitute` : `Freedom in the World ${source === 'previousPractice' ? '2024' : '2025'} — ${spec.name}`;
export const currentCountryBatch02: ReferenceEntry[] = currentCountryBatch02Specs.map(spec => {
 const sources: ReferenceSource[] = [
  { title: sourceTitle(spec, 'constitution'), url: `https://www.constituteproject.org/constitution/${spec.constitutionSlug}?lang=en`, note: `Texto primário traduzido consultado em 7/10/2026, versão ${spec.constitutionVersion}. ${spec.constitutionalContext.locator}: ${spec.constitutionalContext.statement} ${spec.constitutionalContext.limitation}` },
  { title: sourceTitle(spec, 'practice'), url: `https://freedomhouse.org/country/${spec.freedomSlug}/freedom-world/2025`, note: 'Narrativas institucionais efetivamente lidas em 7/10/2026; relatório abreviado de 2025 sobre 2024. Notas agregadas e respostas numéricas não se convertem em scores.' },
 ];
 if(spec.claims.some(item => item.source === 'previousPractice' || item.extraPreviousClaim)) sources.push({ title: sourceTitle(spec, 'previousPractice'), url: `https://freedomhouse.org/country/${spec.freedomSlug}/freedom-world/2024`, note: 'Relatório completo lido em 7/10/2026, contexto de 2023 e histórico eleitoral explicitamente identificado; sem extrapolar práticas novas de 2024.' });
 const officialTitle = 'The Constitution — Government of St. Kitts and Nevis';
 if(spec.claims.some(item => item.extraOfficialClaim)) sources.push({ title: officialTitle, url: 'https://www.gov.kn/the-constitution/', note: 'Apresentação governamental sem data editorial, lida em 7/10/2026; confirma federação e origem da Constituição, não uma consolidação de emendas.' });
 const vec = Object.fromEntries(axes.map(axis => [axis, 50])) as Record<AxisKey, number>;
 const evidence: ReferenceEntry['evidence'] = {};
 const axisEvidence: NonNullable<ReferenceEntry['axisEvidence']> = {};
 const coding: NonNullable<ReferenceEntry['coding']> = {};
 for(const item of spec.claims) {
  const claims: ReferenceCodingClaim[] = [{sourceTitle: sourceTitle(spec, item.source), locator: item.locator, statement: item.statement, basis: item.basis, publishedDate: item.publishedDate, accessedDate: '2026-10-07'}];
  if(item.extraPreviousClaim) claims.push({...item.extraPreviousClaim, sourceTitle: sourceTitle(spec, 'previousPractice'), basis: 'practice', publishedDate: '2024; contexto de 2023 e histórico eleitoral', accessedDate: '2026-10-07'});
  if(item.extraPracticeClaim) claims.push({...item.extraPracticeClaim, sourceTitle: sourceTitle(spec, 'practice'), basis: 'practice', publishedDate: '2025; observações de 2024', accessedDate: '2026-10-07'});
  if(item.extraOfficialClaim) claims.push({...item.extraOfficialClaim, sourceTitle: officialTitle, basis: 'declaration', publishedDate: 'Sem data editorial; consultado em 7/10/2026', accessedDate: '2026-10-07'});
  const coded = codeReferenceAxis({axis:item.axis, position:item.position, confidence:item.confidence, claims, rationale:item.statement, uncertainty:item.uncertainty, reviewedOn:'2026-10-07'}, sources);
  vec[item.axis]=coded.value; evidence[item.axis]=coded.evidence; axisEvidence[item.axis]=coded.axisEvidence; coding[item.axis]=coded.coding;
 }
 return {id:spec.id, name:spec.name, aliases:spec.aliases, kind:'country', category:'country', period:'Prática em 2024; contexto institucional de 2023 quando identificado', vec, evidence, axisEvidence, coding, sources, rationale:spec.claims.map(item=>item.statement).join(' '), caveats: `${spec.claims.map(item=>item.uncertainty).join(' ')} Âncoras editoriais não são medições. Eixos ausentes permanecem desconhecidos, sem evidência; estes perfis não satisfazem os seis eixos exigidos para matches.`};
});
