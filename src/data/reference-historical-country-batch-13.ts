import type { AxisKey, ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';

const axes: AxisKey[] = ['est', 'rep', 'pod', 'imi', 'dip', 'int', 'eco', 'con', 'com', 'rel', 'mor', 'tec'];
const reviewedOn = '2026-10-08';
export type HistoricalCountryBatch13Entry = ReferenceEntry & {
  kind: 'country'; category: 'historical-country';
  documentaryReview: {
    status: 'accepted-bounded-primary-and-identity'; reviewedOn: string;
    independentReview: 'accepted-selected-primary-clauses-and-terminal-identity'; scope: string;
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
): HistoricalCountryBatch13Entry {
  const result: HistoricalCountryBatch13Entry = {
    ...entry, kind: 'country', category: 'historical-country',
    vec: Object.fromEntries(axes.map(axis => [axis, 50])) as Record<AxisKey, number>,
    evidence: {}, axisEvidence: {}, coding: {},
    documentaryReview: { status: 'accepted-bounded-primary-and-identity', reviewedOn, independentReview: 'accepted-selected-primary-clauses-and-terminal-identity', scope: reviewScope },
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
const title='Constituição portuguesa1976 — Assembleia, texto originário';
export const historicalCountryBatch13:HistoricalCountryBatch13Entry[]=[profile({
 id:'portugal-revolution-council-1976',name:'Portugal — ordem constitucional com Conselho da Revolução',aliases:['Portugal — transição constitucional militar-civil1976–1982'],
 period:'25/04/1976–30/10/1982; normas originais aprovadas02/04/1976',
 rationale:'Ordem constitucional pluralista com Conselho militar detentor de legislação militar exclusiva, autorização de guerra/emergência e fiscalização constitucional; extinção1982transfere poderes para instituições civis. Distinção estrutural, não perfil para cada emenda ou toda democracia portuguesa atual.',
 caveats:'Texto fundador1976, não prática uniforme da transição ou versões1982/1989/2005. Órgãos previstos entram em funcionamento pela posse presidencial294, distinta da vigência normativa25abril312. Conselho já existia antes; não alegada criação militar apenas1976. Propriedade social inclui coletivos/autogestão/cooperativas e não equivale a monopólio estatal. Incapacidades cívicas, saneamento e PIDE308–310 são contrapontos severos. Identidade e sete direções normativas aceitas pelo Root após revisão independente de cláusulas selecionadas; não prática integral.',
 sources:[source(title,'https://www.parlamento.pt/Parlamento/Documents/CRP1976.pdf','PDF oficial67p texto original. Passagens efetivamente lidas1–48/65–72/80–95/142–155/227–236/308–312 e contextos116/124/131/190–195/294–297; não todas67p, scanvisual ou prática completa. Alterações posteriores não usadas como norma fundadora.'),source('Lei Constitucional1/82 — Diário da República, texto primário','https://diariodarepublica.pt/dr/detalhe/lei-constitucional/1-1982-375254','Corpo terminal245–249 realmente lido.247 transfere legislação militar à Assembleia;245/246 estruturam substituições com transição.248vigência30dias após publicação30/09/1982, portanto30/10/1982; não atribuição de horário exato. Texto republicado1982no final não codificado retrospectivamente.')]
},normRows(title,'1976-04-02',[
 ['est','moderate-second','6/227–229/232–235','Estado unitário com legislação geral nacional e estatutos regionais sujeitos à decisão final da Assembleia.','Estrutura unitária com hierarquia constitucional nacional sustenta centralização moderada.','Açores/Madeira têm legislação específica, governo/tributação/patrimônio próprios e representação eleita. Ministro nacional/veto/dissolução sujeitos a regras; não meras transferências administrativas ou centralismo absoluto.'],
 ['rep','moderate-first','48/155;contrapontos3/142–149/308/311','Sufrágio universal igual secreto adulto e representação proporcional sem barreira percentual nacional.','Representação plural renovável sustenta democracia normativa moderada.','Conselho militar não eleito fiscaliza normas/autoriza emergência e legisla militarmente; incapacidades308primeira legislatura e proibição de partidos regionais311. Não eficácia democrática integral ou uniformidade1974–1982.'],
 ['pod','moderate-second','25–34/37/45–47;contrapontos19/27/30/308–310','Vida/integridade protegidas, defesa e habeas judicial, intimidade e expressão sem censura.','Garantias gerais ordinárias sustentam liberdade normativa moderada.','Emergências suspendem direitos, preventiva e detenção por ingresso irregular27; segurança por graveanomalia prorrogável judicial30. Fascismo46e exceções transitórias308–310 não apagados; não auditoria de prisões reais.'],
 ['eco','moderate-first','9c/10(2)/80–85/89–90','Apropriação coletiva dos principais meios e solos orienta organização nacional; propriedade social deve tender à predominância e nacionalizações são irreversíveis.','Direção coletiva ampla da propriedade produtiva, além de serviços setoriais, sustenta orientação pública/social moderada proposta.','Três setores reconhecidos, iniciativa privada85e exceçãoPME83; social inclui trabalhador/comunidade/cooperativa90, unidades estatais devem evoluir autogestão. Não propriedade exclusivamente estatal nem participação produtiva executada.'],
 ['con','moderate-first','91–94;contrapontos84–85/92','Organização econômica nacional deve ser coordenada e disciplinada pelo Plano, com níveis longo/médio/anual.','Programa normativo geral de alocação coordenada sustenta planejamento moderado.','Imperativo só setor público estadual e contratos-programa de interesse público; outros setores têm enquadramento. Execução regionalmente descentralizada94, Assembleia controla; não ordem direta para toda empresa ou implementação observada.'],
 ['rel','moderate-first','41/43;contraponto41(4–5)','Igrejas/comunidades separadas do Estado; ensino público não confessional e Estado não programa cultura por doutrina religiosa.','Separação geral explícita sustenta secularismo moderado.','Confissões têm ensino religioso/meios próprios; objeção de consciência exige serviço não armado equivalente. Não exclusão da religião privada/social.'],
 ['mor','moderate-first','13/36/67;contraponto68','Constituição familiar igual, cônjuges com iguais capacidades/deveres, divórcio e não discriminação de filhos não matrimoniais.','Autonomia conjugal e reforma familiar articuladas à igualdade sexual sustentam progressismo moderado normativo.','Família protegida/dever parental;68maternidade socialeminente e papel insubstituível feminino na educação dos filhos, com realização profissional/cívica. Não neutralidade de todos papéis familiares, LGBT/reprodução integral ou prática.']
]),'Sete normas fundadoras1976 e identidade estrutural aceitas pelo Root. Revisor leu efetivamente PDF original1–48/67–68/80–94/142–155/227–235/308–312 e DR1982terminal247–249, não todas67p ou execução. Leitura autoral adicional245–246 e contextos permanece atribuída ao autor.',{
 imi:'Asilo/entrada e igualdade não estabelecem orientação cultural geral suficiente neste recorte; não nova direção por uma faceta.',
 dip:'Política pacífica7 efetivamente lida mas contrapontos militares completos não concluídos para novo código.',
})];
export const historicalCountryBatch13Audit=historicalCountryBatch13.map(entry=>({id:entry.id,documentedAxes:Object.keys(entry.coding??{}),unknownAxes:axes.filter(axis=>!entry.coding?.[axis]),independentReview:'accepted-selected-primary-clauses-and-terminal-identity'}));
