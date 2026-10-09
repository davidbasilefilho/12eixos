import type { AxisKey, ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';

/** Explicit dated programmes. Original generic catalog identities are not recoded. */
const reviewedOn = '2026-10-08';
const axes: AxisKey[] = ['est','rep','pod','imi','dip','int','eco','con','com','rel','mor','tec'];
const iwa: ReferenceSource = {
  title:'Statutes — International Workers Association, Congress 2022 / webpage 2023',
  url:'https://www.iwa-ait.org/content/statutes',
  note:'Documento organizacional primário, aprovado no XXVIII Congresso de 9–10 dezembro 2022; atualização da página 10 fevereiro 2023. Introdução, princípios e organização efetivamente lidos; não atribuído inalterado à fundação de 1922.',
};
const bonanno: ReferenceSource = {
  title:'Insurrectionalist Anarchism — Alfredo M. Bonanno, 1999 / translation 2009',
  url:'https://theanarchistlibrary.org/library/alfredo-m-bonanno-insurrectionalist-anarchism',
  note:'Texto primário em tradução inglesa de Jean Weir, metadata original 1999/inglês 2009. Primeira introdução, inclusive data autoral 21 novembro 1998 e organização de núcleos, efetivamente lida; não edição supostamente 1990.',
};
const hahnel: ReferenceSource = {
  title:'The Case for Participatory Economics — Robin Hahnel, New Left Project manuscript 2014',
  url:'https://www.sscc.wisc.edu/soc/faculty/pages/wright/Published%20writing/Alternatives%20to%20Capitalism.pdf',
  note:'Manuscrito primário de 145 páginas hospedado pelo coautor; capítulo 1 pp2–8 efetivamente lido, mais capítulo 5 nota55. Inventário autoral vincula este PDF à edição New Left Project 2014, separadamente de Verso 2016.',
};
const hahnelEdition: ReferenceSource = {
  title:'Selected Published Writing — Erik Olin Wright, Alternatives to Capitalism edition inventory',
  url:'https://www.sscc.wisc.edu/soc/faculty/pages/wright/selected-published-writings.htm',
  note:'Metadado autoral efetivamente aberto: New Left Project 2014 com link direto ao manuscrito; Verso 2016 listado separadamente. Este inventário estabelece edição, não posição de eixo.',
};
function claim(source:ReferenceSource, axis:AxisKey, position:ReferenceAxisCoding['position'], locator:string,
  statement:string, rationale:string, uncertainty:string, relatedQuestionIds:string[], publishedDate:string):ReferenceAxisCoding {
  return {axis,position,confidence:'medium',claims:[{sourceTitle:source.title,locator,statement,
    basis:'declaration',publishedDate,accessedDate:reviewedOn}],rationale,uncertainty,relatedQuestionIds,reviewedOn};
}
const iwaInputs = [
  claim(iwa,'est','strong-first','II.2–4; actual webpage 29–36',
    'Conselhos livres sem subordinação a autoridade ou partido; cada unidade produtiva é autônoma numa organização social federal de baixo para cima.',
    'O programa inteiro de autoridade social afirma federalismo e rejeita centralismo.',
    'Federalismo anarquista, não competências constitucionais de estados atuais. Acordo de produção e defesa conjunta limitam a autonomia irrestrita.',
    ['estrutura_01','estrutura_15'],'Congress 9–10 December 2022; webpage updated 10 February 2023'),
  claim(iwa,'dip','moderate-second','II.7 and II.10; actual webpage 40–48',
    'Combate militarismo e guerra, substitui exércitos permanentes por milícias operárias e admite defesa da revolução contra violência adversária.',
    'Oposição geral a guerra e exércitos permanentes com exceção defensiva expressa.',
    'Não é pacifismo absoluto: milícias, força defensiva e ajuda a revoluções permanecem. Não imputa posição sobre armas nucleares ou tribunais internacionais.',
    ['diplomacia_04','diplomacia_18'],'Congress 9–10 December 2022; webpage updated 10 February 2023'),
  claim(iwa,'eco','strong-first','I paragraph on land/factories; II.1–3; actual webpage 23/27–33',
    'Trabalhadores tomam e administram conjuntamente terra e fábricas; reorganização de toda produção e distribuição comunitária elimina monopólio de propriedade.',
    'Controle produtivo comum no sistema inteiro, em vez de proprietários privados.',
    'Propriedade/administração social não equivale a título estatal. Não determina bens pessoais, herança doméstica ou eficiência observada.',
    ['economia_01','economia_05'],'Congress 9–10 December 2022; webpage updated 10 February 2023'),
  claim(iwa,'con','strong-first','II.3; actual webpage 32–33',
    'Cada ramo ou fábrica autônoma organiza produção e distribuição segundo interesses comunitários, plano acordado e consentimento mútuo.',
    'Planejamento comunitário integral substitui coordenação produtiva por proprietários privados.',
    'Plano descentralizado e acordado, sem comando estatal central. Não imputa congelamento de preços, impostos ou política monetária específica.',
    ['controle_02','controle_13'],'Congress 9–10 December 2022; webpage updated 10 February 2023'),
];
const hahnelInputs = [
  claim(hahnel,'eco','strong-first','Chapter 1 printed pp2–4 / PDF zero-based12–15, 137–146; Chapter 5 note55 printed p96 / PDF107, 3038–3044',
    'Todo modelo produtivo usa propriedade social e autogestão operária, não propriedade privada nem direção externa.',
    'Norma geral de propriedade e administração de recursos produtivos, além de um setor.',
    'Propriedade social distinta de Estado; não generalizar a todos os bens pessoais. A nota55 é de Hahnel, não da introdução editorial nem da seção de Wright.',
    ['economia_05'],'New Left Project manuscript 2014, identified by author inventory and direct PDF link'),
  claim(hahnel,'con','strong-first','Chapter 1 printed pp2–8 / PDF12–19; 137–146/175–189/224–243/255–391',
    'Conselhos de trabalhadores e consumidores propõem atividades em planejamento anual integral, sem mercados nem planejadores centrais; remuneração depende de esforço avaliado por colegas.',
    'Alocação democrática planejada de produção e consumo de todo sistema, com remuneração não negociada na contratação.',
    'Autonomia depende de viabilidade social e revisão iterativa. Metas de eficiência não são resultados comprovados; transição mantém cooperação para reformar mercados até apoio majoritário.',
    ['controle_02','controle_04','controle_13'],'New Left Project manuscript 2014, identified by author inventory and direct PDF link'),
];
function entry(id:string,name:string,period:string,sources:ReferenceSource[],inputs:ReferenceAxisCoding[],rationale:string,caveats:string):ReferenceEntry {
  const result:ReferenceEntry = {id,kind:'ideology',category:'ideology',name,period,sources,
    vec:Object.fromEntries(axes.map(axis=>[axis,50])) as Record<AxisKey,number>,evidence:{},axisEvidence:{},coding:{},rationale,caveats};
  for(const input of inputs){const coded=codeReferenceAxis(input,sources);result.vec[input.axis]=coded.value;
    result.evidence[input.axis]=coded.evidence;result.axisEvidence![input.axis]=coded.axisEvidence;result.coding![input.axis]=coded.coding;}
  return result;
}
export const ideologyProgramBatch02:ReferenceEntry[] = [
  entry('ideology-program-anarcho-syndicalism-iwa-2022','Anarcossindicalismo: programa da AIT/IWA, 2022',
    'Estatutos aprovados 9–10 dezembro 2022; página atualizada 10 fevereiro 2023',[iwa],iwaInputs,
    'Programa afirmativo de autoridade social federal e produção comum; exemplar datado preserva a antiga identidade genérica sem atribuição temporal indevida.',
    'Quatro eixos documentados inicialmente. Representação e poder civil aguardam avaliação de amplitude: organização interna sindical não prova sufrágio universal, direitos da oposição ou salvaguardas processuais da sociedade futura. Demais eixos desconhecidos, sem pontuação inventada para atingir elegibilidade.'),
  entry('ideology-program-insurrectionary-anarchism-bonanno-1999','Anarquismo insurrecional: projeto organizativo de Bonanno, 1999',
    'Texto original 1999; introdução datada 21 novembro 1998; tradução inglesa 2009',[bonanno],[],
    'Projeto político antiautoritário afirmativo com núcleos autônomos temporários; contraste constitutivo com organização econômica permanente de congressos.',
    'Método/projeto político, não constituição completa. Nenhum eixo amplo codificado nesta revisão; todos permanecem desconhecidos. A versão genérica antiga e sua edição declarada permanecem separadas. Organização temporária não valida automaticamente todos os direitos civis ou critérios democráticos.'),
  entry('ideology-program-participatory-economics-hahnel-2014','Economia participativa: governança econômica de Hahnel, 2014',
    'The Case for Participatory Economics; manuscrito New Left Project 2014',[hahnel,hahnelEdition],hahnelInputs,
    'Programa normativo de legitimidade econômica: poder proporcional ao impacto, autogestão, tarefas equilibradas e remuneração por esforço; não mero cálculo de eficiência.',
    'Autor declara que o modelo não é estratégia de transição nem programa político completo (pp2–3). Sua defesa afirmativa de instituições econômicas justas é preservada com essa limitação. Apenas economia/controle amplamente documentados; conselhos econômicos não estabelecem toda constituição, diplomacia, religião ou política civil. Modelo não comprova viabilidade empírica.'),
];
export const ideologyProgramBatch02Audit = ideologyProgramBatch02.map(item=>({id:item.id,reviewedOn,
  supportedAxes:Object.keys(item.coding??{}),scope:'New explicit primary programme identity; no original profile overwritten; editorial anchors, not measured numbers.',
  unknownAxisRule:'All uncoded axes50 with no evidence/map/coding; no six-axis forcing.',
  ontologyStatus:'Prepared candidate; integration and nearest-neighbor acceptance recorded separately.',
}));
