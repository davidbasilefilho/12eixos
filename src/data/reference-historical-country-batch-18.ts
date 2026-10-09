import type { AxisKey, ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';

const axes: AxisKey[] = ['est','rep','pod','imi','dip','int','eco','con','com','rel','mor','tec'];
const reviewedOn = '2026-10-08';
type Candidate = ReferenceEntry & {
  kind: 'country'; category: 'historical-country';
  documentaryReview: { status: 'accepted-bounded-primary-and-identity'; independentReview: 'accepted'; reviewedOn: string; scope: string };
  unknownAxisReasons: Partial<Record<AxisKey,string>>;
  identityOrigin: { disposition: 'new-historical-unit'; distinctness: string };
};
const source = (title:string,url:string,note:string):ReferenceSource => ({title,url,note});
function profile(
  base: Pick<ReferenceEntry,'id'|'name'|'aliases'|'period'|'rationale'|'caveats'|'sources'>,
  distinctness:string, scope:string, rows:Omit<ReferenceAxisCoding,'reviewedOn'>[],
):Candidate {
  const result:Candidate = {...base,kind:'country',category:'historical-country',
    vec:Object.fromEntries(axes.map(axis=>[axis,50])) as Record<AxisKey,number>,
    evidence:{},axisEvidence:{},coding:{},
    documentaryReview:{status:'accepted-bounded-primary-and-identity',independentReview:'accepted',reviewedOn,scope},
    identityOrigin:{disposition:'new-historical-unit',distinctness},unknownAxisReasons:{}};
  for(const row of rows){
    if(result.coding![row.axis]) throw new Error(`${base.id}: duplicate axis`);
    const coded=codeReferenceAxis({...row,reviewedOn},base.sources);
    result.vec[row.axis]=coded.value; result.evidence[row.axis]=coded.evidence;
    result.axisEvidence![row.axis]=coded.axisEvidence; result.coding![row.axis]=coded.coding;
  }
  for(const axis of axes) if(!result.coding![axis]) result.unknownAxisReasons[axis]='As passagens efetivamente lidas não estabelecem orientação geral deste eixo. Identificação documental do regime não implica cobertura política suficiente.';
  return result;
}
const norm = (axis:AxisKey,position:ReferenceAxisCoding['position'],s:ReferenceSource,date:string,locator:string,statement:string,rationale:string,uncertainty:string):Omit<ReferenceAxisCoding,'reviewedOn'> => ({axis,position,confidence:'medium',claims:[{sourceTitle:s.title,locator,statement,basis:'norm',publishedDate:date,accessedDate:reviewedOn}],rationale,uncertainty});



const cam=source('Cameroun fédéral — constitution1961 consolidée1970, republicação primária universitária','https://mjp.univ-perp.fr/constit/cm1961.htm','Direto falhou. Corpo primário indexado selecionado1–7/17–19/37–41/49–60 efetivamente lido. Editor incorpora reformas10/11/1969 e4/5/1970; não certificar fundador1961 inalterado. Art1 expressamente laïque; assinatura original1/9/1961 e vigência1/10 em59.');
const camChron=source('PrésidenceCameroun — agenda institucional2016','https://www.prc.cm/files/13/5a/7b/62e5904d72cace17d867b8a5cd52e031.pdf','PDF oficial280p abriu; somente página10 de cronologia efetivamente lida: federação1/10/1961 e unidade20/5/1972. Outros eventos/afirmações promocionais não utilizados; não todas280p.');
const camEnd=source('Cameroun — constituição sucessora1972, republicação primária com reformas1975 identificadas','https://mjp.univ-perp.fr/constit/cm1972.htm','Direto falhou; recuperação indexada leu introdução/1/38–44 originais distinguidos dos substitutos1975. Referendo20/5 e promulgação2/6 são eventos diferentes. Art1 unidade;40 extingue assembleias estaduais e41 transfere competências; não hora jurídica terminal presumida.');
const bur=source('RoyaumeBurundi — carta16/10/1962, republicação primária universitária','https://mjp.univ-perp.fr/constit/bi1962.htm','Direto falhou. Corpo primário indexado efetivamente lido1–31/36–42/49–58/106–123 e assinatura selecionados; não integral. Promulgada16/10/1962,123 declara vigência retroativa1/7; não promulgação presumidaJulho.');
const burStart=source('Office of Historian — reconhecimento KingdomBurundi','https://history.state.gov/countries/burundi','Corpo institucional efetivamente lido: independência/reconhecimento1/7/1962 após tutela; carta presidencial28/6 é evento anterior distinto.');
const burEnd=source('PresidênciaBurundi — estratégia nacional de segurança, retrospectiva institucional','https://www.presidence.gov.bi/wp-content/uploads/2017/04/strategie-nationale-de-securite.pdf','PDF abriu metadata, find posterior falhou. Recuperação indexada efetivamente leu parágrafos completosII.1,p9: Reino1962–1966 e golpe28/11/1966. Francês lido, paraleloKirundi não certificado linguisticamente; não decreto original ou toda estratégia.');

export const historicalCountryBatch18:Candidate[]=[
 profile({id:'cameroon-federal-reunification-order-1961',name:'Camarões — federação da reunificação',aliases:['República Federal dos Camarões1961–1972'],period:'01/10/1961–transição referendo20/05/promulgação02/06/1972; norma consolidada04/05/1970',rationale:'União territorial de dois Estados com governos e assembleias próprias, substituída por ordem unitária que extingue instituições estaduais. Distinção institucional, não identidade criada por emenda1969/1970.',caveats:'REL apenas no recorte consolidado1970. Não média da prática1961–72 ou original1961 integral; terminal distingue decisão política e promulgação. Bandeira fundadora tem duas estrelas na faixa verde, diferente da atual; não reusar automaticamente imagem atual.',sources:[cam,camChron,camEnd]},'Federação territorial binária seguida de abolição dos órgãos estaduais, distinta do Camarões unitário atual.','Passagens consolidadas1969–1970 e identidade cotejadas independentemente. Fonte terminalCameroon1972,40–41 permanece leitura do autor; revisor não recuperou esses artigos. Sem auditoria integral ou prática.',[
 norm('rel','moderate-first',cam,'1970-05-04','1; escopo de versão editorial1969/1970','Constituição consolidada declara nacionalmente Estado laico e igualdade jurídica dos cidadãos.','Princípio geral explícito de laicidade sustenta secularismo normativo moderado.','Data marca última reforma incorporada, não publicação certificada do exemplar. Não proibição de financiamento religioso, nenhuma prática religiosa uniforme inferida; normas federais amplas não garantem execução democrática.')]),
 profile({id:'burundi-independent-kingdom-1962',name:'Burundi — reino independente',aliases:['Royaume du Burundi1962–1966'],period:'01/07/1962–golpe republicano28/11/1966; norma promulgada16/10/1962 com vigência declarada retroativa01/07',rationale:'Monarquia soberana após tutela substituída por república militar. Troca dinásticaJulho1966 não recebe identidade adicional; texto normativo1962 não cobre sua execução após suspensão.',caveats:'Só POD normativo1962. Não liberdade efetiva inferida: crise política e violência institucional explicitadas pela retrospectiva; mudança dinástica1966 dentro da mesma identidade monárquica. Bandeira/armas113 diferem da atual, sem reuso automático. Não fonte oficial fac-símile ou auditoria integral.',sources:[bur,burStart,burEnd]},'Reino soberano anterior à abolição militar da monarquia; distinto de Burundi republicano atual.','Passagens primárias selecionadas, restrições e cronologia cotejadas independentemente; sem carta integral, fac-símile ou certificação linguísticaKirundi/prática.',[
 norm('pod','moderate-second',bur,'1962-10-16','7–10/17–20; contrapontos17–19/120','Carta garante liberdade pessoal, juiz legal, punição por lei, inviolabilidade domiciliar e direitos de imprensa, associação e petição.','Conjunto geral de garantias pessoais e públicas sustenta liberdade normativa moderada, sem certificação empírica.','Imprensa sofre restrições legais e punição severa por ameaça estatal17; reunião/associação sóBarundi e limitada por moral18; petição coletiva sóautoridades19; abertura postal autorizada20. Transitório120 permite caracterizar delito/pena de ministro discricionariamente; recorte fundador não prática ou sobrevivência jurídicaJulho1966.')]),
];
export const historicalCountryBatch18Audit={candidateIdentities:2,candidateCodedAxes:2,unknownAxes:22,eligibleCandidates:0,independentReview:'accepted'} as const;
