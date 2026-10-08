import type { AxisKey, ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';

const axes: AxisKey[] = ['est', 'rep', 'pod', 'imi', 'dip', 'int', 'eco', 'con', 'com', 'rel', 'mor', 'tec'];
const reviewedOn = '2026-10-08';
export type HistoricalCountryBatch12Entry = ReferenceEntry & {
  kind: 'country'; category: 'historical-country';
  documentaryReview: {
    status: 'author-reviewed-bounded-claims'; reviewedOn: string;
    independentReview: 'accepted-bounded-primary-and-identity'; scope: string;
  };
  unknownAxisReasons: Partial<Record<AxisKey, string>>;
};
const source = (title: string, url: string, note: string): ReferenceSource => ({ title, url, note });
const claim = (
  sourceTitle: string, locator: string, statement: string,
  basis: 'norm' | 'practice' | 'declaration', publishedDate: string,
) => ({ sourceTitle, locator, statement, basis, publishedDate, accessedDate: reviewedOn });
function profile(
  entry: Pick<ReferenceEntry, 'id' | 'name' | 'aliases' | 'period' | 'rationale' | 'caveats' | 'sources'>,
  inputs: Omit<ReferenceAxisCoding, 'reviewedOn'>[],
  reviewScope: string,
  unknownAxisReasons: Partial<Record<AxisKey, string>> = {},
): HistoricalCountryBatch12Entry {
  const result: HistoricalCountryBatch12Entry = {
    ...entry, kind: 'country', category: 'historical-country',
    vec: Object.fromEntries(axes.map(axis => [axis, 50])) as Record<AxisKey, number>,
    evidence: {}, axisEvidence: {}, coding: {},
    documentaryReview: { status: 'author-reviewed-bounded-claims', reviewedOn, independentReview: 'accepted-bounded-primary-and-identity', scope: reviewScope },
    unknownAxisReasons: {},
  };
  for (const input of inputs) {
    if (result.coding![input.axis]) throw new Error(`${entry.id}: duplicate axis coding`);
    const coded = codeReferenceAxis({ ...input, reviewedOn }, entry.sources);
    result.vec[input.axis] = coded.value;
    result.evidence[input.axis] = coded.evidence;
    result.axisEvidence![input.axis] = coded.axisEvidence;
    result.coding![input.axis] = coded.coding;
  }
  for (const axis of axes) if (!result.coding![axis]) {
    result.unknownAxisReasons[axis] = unknownAxisReasons[axis]
      ?? 'As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.';
  }
  return result;
}

type Row = [AxisKey, ReferenceAxisCoding['position'], string, string, string, string];
function normRows(title: string, date: string, rows: Row[]): Omit<ReferenceAxisCoding,'reviewedOn'>[] {
  return rows.map(([axis,position,locator,statement,rationale,uncertainty])=>({axis,position,confidence:'medium',claims:[claim(title,locator,statement,'norm',date)],rationale,uncertainty}));
}
const title='Constituição cubana1940 — Georgetown, republicação primária';
export const historicalCountryBatch12:HistoricalCountryBatch12Entry[]=[profile({
 id:'cuba-constitutional-republic-1940',name:'Cuba — República constitucional de1940',aliases:['Cuba — ordem constitucional1940–1952'],
 period:'10/10/1940–golpe de10/03/1952; texto promulgado05/07/1940',
 rationale:'Ordem constitucional com Presidente, Primeiro Ministro e Conselho responsável perante as duas câmaras; golpe depõe o governo constituído1952. Uma identidade institucional, sem multiplicar alterações do texto ou gabinetes; não toda república1902–1952.',
 caveats:'Norma original1940, não auditoria da prática constitucional1940–1952. A data final decorre de documento diplomático contemporâneo, não juízo sobre a alegada anuência popular nele. Texto universitário republicado apresenta erros tipográficos e não é fac-símile oficial; paralelo militanteC40 aberto como pesquisa, sem certificação de equivalência integral. Banco público280, serviços/educação pública e permissões patrimoniais não determinam orientação econômica geral.',
 sources:[
 source(title,'https://pdba.georgetown.edu/Constitutions/Cuba/cuba1940.html','Corpo espanhol primário republicado realmente aberto:1–104,119–124,138–169,211–213,234–250,281–283 e disposição final/assinatura. Data atualização2008 não é data normativa; promulgado5julho1940 e vigor10outubro1940 explicitados. Não scan visual ou certificação integral de prática.'),
 source('Memorando Secretário de Estado ao Presidente24março1952 — FRUSd327','https://history.state.gov/historicaldocuments/frus1952-54v04/d327','Abertura direta exibiu somente shell de navegação; recuperação indexada realmente devolveu corpo integral do memorando e notas. Relata deposição do governoPrío10março1952 e nova autoridade; alegações diplomáticas de aceitação popular/anticomunismo não viram códigos.'),
 source('Constituição1940 — MovimientoC40, paralelo de pesquisa','https://movimientoc40.com/constitucion-de-1940/','Página primária republicada aberta; movimento político favorável à carta1940, sem alegação de fonte governamental ou cotejo integral independente. Códigos usam Georgetown, não inferência de propaganda do repositório.')
 ]
},[
 ...normRows(title,'1940-07-05',[
 ['est','moderate-second','1/4/211–212/238/250; contrapontos213/235/245–246','República unitária; funções locais são auxiliares do poder central e poderes não locais reservados ao nacional.','Estrutura geral unitária com competência nacional residual sustenta centralização moderada.','Municípios autônomos, governadores eleitos e províncias podem impugnar abuso nacional; não centralismo absoluto ou prática de tutela universal.'],
 ['rep','moderate-first','97–104/120/123/140/164–169','Sufrágio geral secreto de ambos os sexos; legislaturas renovadas e Executivo eleito com responsabilidade ministerial.','Representação renovável e garantias eleitorais especificadas sustentam democracia moderada normativa.','Voto20anos99exclui asilados/incapacidade/crime/militares ativos;37/102proíbem certas organizações e exigem2%adesões; Presidência usa cômputo provincial140. Não eficácia eleitoral real.'],
 ['pod','moderate-second','21–42; contrapontos41–42/281–283','Direitos gerais, integridade, defesa, habeas corpus e privacidade/expressão restringem coerção ordinária.','Conjunto amplo de garantias e tutela processual sustenta liberdade moderada normativa.','Suspensão até45dias e prisão executiva até10dias durante crise; poderes especiais/processo criminal variáveis com controle parlamentar. Expressão sujeita a honra/ordem/paz e organizações antirrepresentativas proibidas.'],
 ['dip','moderate-second','7; contrapontos9a/142ll–m','Estado condena guerra de agressão e declara paz e solidariedade internacional como orientação geral.','Norma categórica de conflito e paz sustenta direção pacífica moderada.','Defesa armada e dever de servir permanecem; não pacifismo absoluto ou política externa efetivamente cumprida.'],
 ['rel','moderate-first','35/55','Igreja separada do Estado, sem subvenção de cultos; ensino oficial laico.','Relação estatal religiosa geral sustenta secularismo moderado.','Culto limitado por moral cristã e ordem pública; escolas privadas conservam ensino religioso separado. Não neutralidade moral irrestrita ou ausência de religião social.'],
 ['mor','moderate-first','20/43/62/68/99; contrapontos43/44–45/50','Mulher casada tem plena capacidade civil e ocupacional; cônjuges iguais e divórcio admitido, com igualdade sexual/civil e laboral.','Autonomia conjugal/ocupacional e reforma familiar combinadas com igualdade cívica sustentam direção progressista moderada normativa.','Casamento segue fundamento familiar, deveres parentais e pensão feminina condicionada;50ensino doméstico feminino. Não LGBT/reprodução/liberdade sexual irrestrita ou aplicação uniforme.']
 ])
], 'Seis propostas normativas de autoria; revisão independente de identidade e direções pendente.',{
 imi:'Entrada/permanência/asilo30–31 é faceta migratória, não orientação cultural geral; contrapontos nacionais13/51/56/73/76 preservados. Pesquisa quarantinada;50desconhecido.',
 eco:'87reconhece propriedade e88subsolo estatal; não direção produtiva nacional predominante. Escolas/banco/serviços públicos não sustentam orientação de toda economia.',
 con:'Regulação salarial e conciliação de trabalho não são programa nacional de alocação por plano ou predominância por mercado.',
})];
export const historicalCountryBatch12Audit=historicalCountryBatch12.map(entry=>({id:entry.id,documentedAxes:Object.keys(entry.coding??{}),unknownAxes:axes.filter(axis=>!entry.coding?.[axis]),independentReview:'accepted-bounded-primary-and-identity'}));

export const historicalCountryBatch12QuarantinedResearch={id:"cuba-constitutional-republic-1940",status:"rejected-whole-cultural-scope",coding:{axis:'imi',position:'moderate-second',confidence:'medium',relatedQuestionIds:['imigracao_18'],rationale:'Entrada/permanência geral e asilo político sustentam abertura moderada na faceta migratória.',uncertainty:'30ressalva leis migratórias;19admiteexpulsão,76proíbe braceros/deterioração laboral;73preferência trabalhista nacional e13cidadaniacomidioma são contrapontos.51/56educação cubana não é convertida em ausência de toda abertura; não prática de acolhimento.',claims:[claim(title,'30–31;contrapontos13/19/51/56/73/76','Toda pessoa pode entrar/permanecer/sair sem passaporte, ressalvadas leis migratórias; asilo protege perseguidos políticos.','norm','1940-07-05')]}}as const;
