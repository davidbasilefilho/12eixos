import type { AxisKey, ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding, type ReferenceCodingClaim } from '../lib/reference-coding';

const reviewedOn = '2026-10-07';
const axes: AxisKey[] = ['est','rep','pod','imi','dip','int','eco','con','com','rel','mor','tec'];
const source = (title: string, url: string, note: string): ReferenceSource => ({ title, url, note });
const claim = (sourceTitle: string, locator: string, statement: string, basis: ReferenceCodingClaim['basis'], publishedDate: string): ReferenceCodingClaim => ({ sourceTitle, locator, statement, basis, publishedDate, accessedDate: reviewedOn });
const code = (axis: AxisKey, position: ReferenceAxisCoding['position'], confidence: ReferenceAxisCoding['confidence'], claims: ReferenceCodingClaim[], rationale: string, uncertainty: string): ReferenceAxisCoding => ({ axis, position, confidence, claims, rationale, uncertainty, reviewedOn });
const treatyTitle = 'TFUE — versão consolidada de 2016, EUR-Lex';
const treaty = source(treatyTitle,'https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:12016E/TXT','Texto primário: regras da união aduaneira e política comercial; não mede barreiras efetivamente aplicadas em cada setor.');
const tradeCoding = (): ReferenceAxisCoding => code('com','moderate-second','medium',[
  claim(treatyTitle,'Artigos 28(1), 34 e 206–207','Elimina barreiras internas; prevê redução de barreiras externas, com tarifa comum e defesa comercial.','norm','2016-06-07'),
],'Abertura comercial regulada no quadro da UE sustenta direção moderada de livre comércio.','Não equivale a ausência de tarifas; são regras comuns, não preferências da população nem medição nacional de comércio. Groenlândia possui regime territorial próprio.');

/** Raw base arrays from references.ts at 9db0807, before preparation/legacy centering. */
export const currentCountryRawBaseVectors: Record<string, number[]> = {
  germany: [77,95,47,37,50,48,47,54,27,70,69,82],
  denmark: [61,97,38,34,39,51,58,62,16,82,76,78],
  uruguay: [50,97,30,23,22,61,48,56,42,79,82,64],
  'new-zealand': [37,98,29,21,23,65,42,48,16,80,75,72],
};

/** Compatibility alias: these are raw base arrays, not integrated live vectors. */
export const currentCountryLegacyVectors = currentCountryRawBaseVectors;

type CountryRepair = { sources: ReferenceSource[]; coding: ReferenceAxisCoding[]; rationale: string; caveats: string };
const deLaw = 'Lei Fundamental — tradução oficial, versão de 22/03/2025';
const deFederal = 'Lei Fundamental, artigos 20 e 30 — texto oficial alemão';
const deReligion = 'Constituição de Weimar, artigo 137 — texto oficial incorporado pela Lei Fundamental';
const dkLaw = 'Constituição dinamarquesa — texto primário de 1953, acervo University of Minnesota';
const nzConstitution = 'Constituição da Nova Zelândia — Governor-General';
const nzRights = 'ICCPR e reservas da Nova Zelândia — Ministry of Justice';
const nzTrade = 'Acordo NZ–UE, capítulo 2 — MFAT';
const nzMarriage = 'Uniões civis — New Zealand Government';
const uyVotes = 'Constituição uruguaia, artigo 77 — IMPO';
const uyRights = 'Constituição uruguaia, artigo 15 — IMPO';
const uyReligion = 'Constituição uruguaia, artigo 5 — IMPO';
const uyEducation = 'Constituição uruguaia, artigo 71 — IMPO';
const uyPlanning = 'Constituição uruguaia, artigo 230 — IMPO';
const uyMarriage = 'Código Civil uruguaio, artigo 83 — IMPO';
const fh = (name: string, slug: string) => source(`Freedom in the World 2025 — ${name}`,`https://freedomhouse.org/country/${slug}/freedom-world/2025`,'Prática institucional relatada na edição 2025; itens localizados e contraevidências registrados por eixo. Relatório abreviado; seu score não é convertido em vetor.');
const fhClaim = (name: string, locator: string, statement: string) => claim(`Freedom in the World 2025 — ${name}`,locator,statement,'practice','Edição 2025');
const repairs: Record<string, CountryRepair> = {
  germany: {
    sources: [fh('Alemanha','germany'), treaty,
      source(deFederal,'https://www.gesetze-im-internet.de/gg/art_30.html','Artigos 20 e 30 integralmente lidos; artigo 20 em https://www.gesetze-im-internet.de/gg/art_20.html. Competências dos Länder com exceções constitucionais.'),
      source(deLaw,'https://www.gesetze-im-internet.de/englisch_gg/englisch_gg.pdf','Tradução oficial com emendas até 22/03/2025, 46 páginas; índice oficial também inspecionado. Acesso posterior ao PDF e algumas páginas individuais falhou.'),
      source(deReligion,'https://www.gesetze-im-internet.de/wrv/art_137.html','Artigo 137(1), (3), (5)–(6); considerar a incorporação constitucional pelo artigo 140 da Lei Fundamental, não como regime de Weimar aplicado isoladamente.'),
    ],
    coding: [
      code('est','strong-first','high',[claim(deFederal,'Artigos 20(1) e 30, texto integral das páginas individuais','Estado federal; exercício de poderes e funções cabe aos Länder salvo disposição constitucional.','norm','Versão 2025-03-22')],'Competências territoriais próprias sustentam federalismo institucional.','União federal mantém competências exclusivas e supremacia legal; não é confederação.'),
      code('rep','strong-first','high',[fhClaim('Alemanha','Overview; Key Developments in 2024, eleições estaduais e voto de confiança','Democracia representativa; coalizões estaduais e voto de confiança federal são relatados.')],'Prática de competição e representação sustenta direção democrática forte.','Não é transformação do score agregado do relatório; ameaças e déficits de direitos permanecem.'),
      code('pod','moderate-second','medium',[fhClaim('Alemanha','Overview; Key Developments in 2024, manifestações','Liberdades são geralmente respeitadas; autoridades restringiram ou dispersaram alguns protestos.')],'Garantias civis relatadas, com restrições concretas a protestos, sustentam direção moderada de liberdade.','Limites de expressão, vigilância e segurança impedem tratar as liberdades como absolutas.'),
      tradeCoding(),
      code('mor','moderate-first','medium',[fhClaim('Alemanha','Key Developments in 2024, lei em vigor em novembro','Adultos podem alterar nome e gênero em documentos sem avaliação psiquiátrica ou audiência judicial previamente exigidas.')],'Reforma documental de identidade de gênero sustenta direção reformista moderada.','Cobertura parcial do construto; não deduz aborto, todas as pautas familiares ou consenso social.'),
    ],
    rationale: 'Recorte institucional de federalismo, competição eleitoral, garantias civis, comércio europeu e reforma documental de identidade de gênero; codificação ordinal, sem medição de opinião nacional.',
    caveats: 'Objeto: normas e prática institucional relatada em 2025. Religião, defesa, intervenção, cultura, propriedade, planejamento e tecnologia permanecem desconhecidos neste lote. A Constituição não prova execução e o relatório é abreviado.',
  },
  denmark: {
    sources: [fh('Dinamarca','denmark'),treaty,source(dkLaw,'https://hrlibrary.umn.edu/research/denmark-constitution.html','Documento primário reproduzido; status editorial de 1992, arquivo fechado em 2023. Não representa atualização integral de todos os atos e sucessão dinástica de 2009; usada somente nas cláusulas localizadas.')],
    coding: [
      code('rep','strong-first','high',[claim(dkLaw,'Seções 15 e 29–31','Governo responsável ao Parlamento e eleições diretas.','norm','1953-06-05; edição 1992'),fhClaim('Dinamarca','Overview','Democracia com eleições regulares livres e justas é descrita.')],'Representação parlamentar e prática eleitoral sustentam direção democrática forte.','A monarquia constitucional não elimina eleição e responsabilidade ministerial.'),
      code('pod','moderate-second','medium',[claim(dkLaw,'Seções 71 e 77–79','Proteção da liberdade, publicação, associação e reunião.','norm','1953-06-05; edição 1992'),fhClaim('Dinamarca','Overview; Key Developments in 2024, deportações, dados sociais e deficiência','Expressão, associação e Judiciário independente coexistem com violações na deportação, privacidade e coerção.')],'Liberdades protegidas com déficits concretos sustentam direção moderada.','Contraevidências sobre deportações, vigilância e coerção impedem um extremo libertário.'),
      code('eco','moderate-first','medium',[claim(dkLaw,'Seções 75(2) e 76','Assistência pública condicionada e instrução escolar gratuita são garantidas.','norm','1953-06-05; edição 1992')],'Provisão pública social e educacional sustenta direção pública parcial.','Não estima propriedade dos meios de produção nem predominância estatal; execução, financiamento e prestadores precisam de auditoria própria.'),
      tradeCoding(),
      code('rel','moderate-second','medium',[claim(dkLaw,'Seções 4, 6 e 67–70','Igreja luterana estabelecida e apoiada pelo Estado, com liberdade de culto e direitos civis.','norm','1953-06-05; edição 1992')],'Estabelecimento religioso com pluralismo sustenta papel público religioso moderado.','Não é teocracia nem crença atribuída aos habitantes; substitui a antiga direção secular forte sem medir religiosidade.'),
    ],
    rationale: 'Recorte de democracia, liberdades limitadas por problemas concretos, provisão social pública, comércio europeu e igreja estabelecida com pluralismo.',
    caveats: 'Objeto institucional de 2024–2025; cópia constitucional antiga explicitamente datada. Federalismo, imigração, defesa, intervenção, planejamento, moral e tecnologia ficam desconhecidos. Assistência e educação públicas não demonstram propriedade estatal dominante.',
  },
  uruguay: {
    sources: [fh('Uruguai','uruguay'),
      source(uyVotes,'https://www.impo.com.uy/bases/constitucion/1967-1967/77','Regra primária de sufrágio e eleições; texto atualizado indicado pelo IMPO.'),
      source(uyRights,'https://www.impo.com.uy/bases/constitucion/1967-1967/15','Prisão exige flagrante ou ordem judicial escrita.'),
      source(uyReligion,'https://www.impo.com.uy/bases/constitucion/1967-1967/5','Ausência de religião sustentada pelo Estado, com direitos patrimoniais e isenções religiosas.'),
      source(uyEducation,'https://www.impo.com.uy/bases/constitucion/1967-1967/71','Gratuidade do ensino oficial em vários níveis; garantia normativa de provisão, não estatística de cobertura.'),
      source(uyPlanning,'https://www.impo.com.uy/bases/constitucion/1967-1967/230','Redação da reforma de 08/12/1996: planejamento de desenvolvimento com participação pública e privada.'),
      source(uyMarriage,'https://www.impo.com.uy/bases/codigo-civil/16603-1994/83','Texto do artigo 83 conforme Lei 19.075 de 03/05/2013, sobre casamento civil entre pessoas de sexo igual ou diferente.'),
    ],
    coding: [
      code('rep','strong-first','high',[claim(uyVotes,'Artigo 77','Sufrágio é a base da soberania e há regras eleitorais.','norm','1967-02-02; texto atualizado IMPO'),fhClaim('Uruguai','Overview; Key Developments in 2024, eleição presidencial e parlamentar','Eleições pacíficas tiveram resultados aceitos e vitória presidencial da oposição.')],'Norma eleitoral confrontada com prática sustenta democracia forte.','Não corresponde ao score agregado de liberdade; não elimina problemas de implementação.'),
      code('pod','moderate-second','medium',[claim(uyRights,'Artigo 15','Prisão condicionada a flagrante ou ordem judicial.','norm','1967-02-02'),fhClaim('Uruguai','Overview; Key Developments in 2024, imprensa e prisão','Direitos civis coexistem com pressão sobre jornalistas, atrasos judiciais e problemas carcerários.')],'Garantias civis com limites na prática sustentam liberdade moderada.','Não apresenta toda a política penal, condições carcerárias ou policiamento como liberal.'),
      code('eco','moderate-first','medium',[claim(uyEducation,'Artigo 71','Ensino oficial gratuito é previsto em níveis primário, médio e superior.','norm','1967-02-02')],'Provisão pública educacional declarada sustenta direção pública parcial.','Cobertura restrita à educação; não comprova predominância pública da economia nem execução universal da garantia.'),
      code('con','moderate-first','medium',[claim(uyPlanning,'Artigo 230, parágrafos sobre comissões setoriais e planos de desenvolvimento','Órgão presidencial formula planos de desenvolvimento, envolvendo trabalhadores e empresas públicas e privadas.','norm','Redação da reforma 1996-12-08')],'Planejamento de desenvolvimento com economia plural sustenta direção moderada.','Não implica planejamento central integral nem mede volume de produção coordenado pelo Estado.'),
      code('rel','strong-first','high',[claim(uyReligion,'Artigo 5','Estado não sustenta religião; cultos livres têm proteção e isenções.','norm','1967-02-02')],'A separação formal explícita sustenta secularismo institucional forte.','Crença pessoal não é codificada; isenções religiosas e patrimônio protegido permanecem.'),
      code('mor','moderate-first','medium',[claim(uyMarriage,'Artigo 83; nota da Lei 19.075/2013','Casamento civil inclui pessoas de sexo igual ou diferente.','norm','Redação 2013-05-03')],'Igualdade matrimonial sustenta reforma social moderada neste recorte.','Uma lei não define todas as pautas morais; não codifica consenso popular ou todas as políticas reprodutivas.'),
    ],
    rationale: 'Democracia, garantias civis, ensino público, planejamento plural, separação religiosa e igualdade matrimonial são descritos por normas localizadas e prática institucional.',
    caveats: 'Recorte 2024–2025; normas antigas continuam explicitamente datadas. Não atribui instituições aos habitantes. Comércio permanece desconhecido: artigo 50 protege produção/substituição de importações, enquanto acordos podem promover abertura; não se deduz uma tarifa geral dessa tensão.',
  },
  'new-zealand': {
    sources: [fh('Nova Zelândia','new-zealand'),
      source(nzConstitution,'https://gg.govt.nz/office-governor-general/roles-and-functions-governor-general/constitutional-role/constitution','Descrição oficial da Constituição de 1986 e instituições; página sem data de publicação informada.'),
      source(nzRights,'https://www.justice.govt.nz/justice-sector-policy/constitutional-issues-and-human-rights/human-rights/international-human-rights/international-covenant-on-civil-and-political-rights/','Atualização 24/04/2024: reservas e crítica da ONU ao sufrágio de presos; evita apresentar garantias como absolutas.'),
      source(nzTrade,'https://www.mfat.govt.nz/assets/Trade-agreements/EU-NZ-FTA/Chapters/2.-National-Treatment-and-Market-Access-for-Goods.pdf','Texto primário do acordo assinado em 09/07/2023, vigente desde 01/05/2024; capítulo 2, 22 páginas.'),
      source(nzMarriage,'https://www.govt.nz/browse/family-and-whanau/getting-married/','Guia oficial sobre uniões civis sob Civil Union Act 2004; página sem publicação datada. Não substitui uma versão histórica do Marriage Act.'),
    ],
    coding: [
      code('rep','strong-first','high',[claim(nzConstitution,'The Constitution Act 1986; The role of political parties','Executivo depende do Parlamento eleito e confiança partidária.','declaration','Página sem data; Constituição de 1986 descrita'),fhClaim('Nova Zelândia','Overview','Democracia parlamentar com histórico de eleições livres e justas é descrita.'),claim(nzRights,'Monitoring: Committee Decision, 2023','Decisão da ONU aponta violação do sufrágio de presos.','practice','2024-04-24')],'Instituições e prática sustentam democracia forte com contraevidência específica.','Não é democracia sem exclusões; crítica ao sufrágio de presos foi preservada.'),
      code('pod','moderate-second','medium',[fhClaim('Nova Zelândia','Overview','Garantias de direitos políticos e liberdades civis coexistem com discriminação de minorias.'),claim(nzRights,'Reservas aos artigos 10, 14(6), 20 e 22 do ICCPR','Governo registra exceções relativas a detenção, compensação e outras garantias.','declaration','2024-04-24')],'Liberdades institucionais com reservas explícitas sustentam liberdade moderada.','Não ignora exceções em prisões e compensação por erro judicial; relatório abreviado limita detalhe.'),
      code('com','moderate-second','medium',[claim(nzTrade,'Artigos 2.1, 2.5 e 2.11; pp. 2-1, 2-3–2-4, 2-8','Acordo prevê liberalização recíproca, cronograma tarifário e regras com exceções.','norm','Assinado 2023-07-09; vigência 2024-05-01')],'Redução vinculante de barreiras sustenta abertura comercial moderada.','Acordo bilateral não demonstra liberalização universal nem ausência de proteção em cada setor.'),
      code('mor','moderate-first','medium',[claim(nzMarriage,'Civil unions','União civil formaliza relação independentemente do gênero.','declaration','Página sem data; referência a Civil Union Act 2004')],'Reconhecimento de uniões civis independentemente do gênero sustenta reforma social parcial.','Não converte uma política em progressismo universal; fonte atual não prova toda a prática histórica e déficits indígenas são relevantes.'),
    ],
    rationale: 'Competição parlamentar, garantias civis com reservas, liberalização comercial e reconhecimento de uniões civis sustentam apenas quatro posições moderadas ou fortes deste lote.',
    caveats: 'Prática relatada na edição 2025 e acordo comercial vigente desde 2024; páginas oficiais sem data são identificadas. O título literal de Key Developments do relatório diz 2025, embora a narrativa remeta à coalizão eleita em 2023; não corrigimos sua cronologia silenciosamente. Não deduz federalismo da soberania parlamentar nem assimilação de uma política linguística. Tecnologia, religião, propriedade, planejamento e política militar/externa permanecem desconhecidos.',
  },
};

/** Apply after legacy corrections: this is a complete evidence replacement for four existing IDs. */
export function reconcileCurrentCountry(entry: ReferenceEntry): ReferenceEntry {
  const repair = repairs[entry.id];
  if (!repair) return entry;
  const sources = [...entry.sources];
  for (const item of repair.sources) if (!sources.some(existing => existing.title === item.title)) sources.push(item);
  const result: ReferenceEntry = {
    ...entry, period: 'Instituições e prática relatada, 2024–2025; revisão documental em 07/10/2026',
    vec: Object.fromEntries(axes.map(axis => [axis,50])) as Record<AxisKey,number>,
    evidence: {}, axisEvidence: {}, coding: {}, sources,
    rationale: repair.rationale, caveats: repair.caveats,
  };
  for (const input of repair.coding) {
    const coded = codeReferenceAxis(input,sources);
    result.vec[input.axis] = coded.value;
    result.evidence[input.axis] = coded.evidence;
    result.axisEvidence![input.axis] = coded.axisEvidence;
    result.coding![input.axis] = coded.coding;
  }
  return result;
}

export const currentCountryCodingAudit = Object.entries(repairs).map(([id,repair]) => ({
  id, baseline: '9db0807', baselineLayer: 'raw-base-before-preparation',
  rawBaseVector: currentCountryRawBaseVectors[id], legacyVector: currentCountryRawBaseVectors[id],
  reviewedOn, supportedAxes: repair.coding.map(item => item.axis), sources: repair.sources,
  coding: repair.coding.map(input => codeReferenceAxis(input,repair.sources).coding),
}));
