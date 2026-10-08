import type { AxisKey, ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';

/** New explicit program identity, not a recoding or duplicate doctrine of Veblen. */
const reviewedOn = '2026-10-08';
const axes: AxisKey[] = ['est','rep','pod','imi','dip','int','eco','con','com','rel','mor','tec'];
const source: ReferenceSource = {
  title: 'Technocracy Study Course — Technocracy Inc., electronic edition 1.1, 2004',
  url: 'https://www.technate.org/pdf/Technocracy%20study%20guide.pdf',
  note: 'Documento primário organizacional; edição eletrônica 2004 identificada, preâmbulo e Lessons 22–23 efetivamente lidos. Não é Veblen 1921 nem prova de implementação ou de previsões científicas.',
};
const make = (axis: AxisKey, position: ReferenceAxisCoding['position'], locator: string,
  statement: string, rationale: string, uncertainty: string, relatedQuestionIds: string[]): ReferenceAxisCoding => ({
  axis,position,confidence:'medium',
  claims:[{sourceTitle:source.title,locator,statement,basis:'declaration',
    publishedDate:'Electronic edition 1.1, Edmonton 2004; printed-edition sequence 1934–1947',accessedDate:reviewedOn}],
  rationale,uncertainty,relatedQuestionIds,reviewedOn,
});
const inputs = [
  make('est','strong-second','Lesson 22 printed pp221–224 (PDF zero-based 226–229); §22.6.2/22.7',
    'Direção continental final; regiões subordinadas e polícia única, eliminando subdivisões políticas anteriores.',
    'Desenho integral de comando territorial central, com execução regional.',
    'Não confundir delegação administrativa com autonomia política. Proposta, não prática.',
    ['estrutura_06','estrutura_20']),
  make('rep','strong-second','§22.6.2 printed pp222–223 (PDF zero-based 227–228), web 6720–6765',
    'Diretores nomeados internamente; chefe escolhido pelo próprio controle; veto/recall apenas desse corpo, sem sufrágio público.',
    'Seleção funcional autônoma à eleição popular no governo inteiro.',
    'Competência não prova legitimidade; veto interno preservado, nenhuma ocorrência histórica inferida.',
    ['representacao_14','representacao_15']),
  make('pod','moderate-first','Printed pp221,226,230–232; §22.6.1/22.8.5–6/22.9.1 (PDF226/231/235–237)',
    'Polícia sob disciplina militar; registro obrigatório identificado de todo consumo sob controle continental, com ampla escolha individual de produtos.',
    'Controle coercitivo e capacidade geral de vigilância econômica limitam privacidade.',
    'Certificados são analógicos; não inferir interceptação digital ou ausência de todo devido processo por rejeição do júri.',
    ['poder_18']),
  make('eco','strong-first','§22.6.2/22.9.1; printed pp223,231–232; web 6756–6765/7031–7040',
    'Recursos/equipamentos pertencem à organização; ela opera toda produção e distribuição de bens e serviços para a população.',
    'Provisão coletiva de todo sistema, além de um setor.',
    'Controle operacional comum explícito; título jurídico estatal moderno não especificado.',
    ['economia_01','economia_20']),
  make('con','strong-first','§§22.8–22.9.1 printed pp225–232; web 6835–6847/6887–6986',
    'Orçamento energético comum de produção/consumo; renda igual por certificados pessoais não transferíveis nem acumuláveis.',
    'Alocação planejada integral substitui preços/renda monetária negociáveis.',
    'Escolha de consumo permanece dentro do orçamento. Eficiência prevista não demonstrada.',
    ['controle_02','controle_12','controle_13']),
  make('tec','moderate-first','Printed pp220–221,232,242,247; web 6661–6682/7062–7079/7364–7374/7496–7526',
    'Pesquisa científica contínua e inovação supervisionada; automação do transporte e correio para reduzir trabalho do sistema.',
    'Programa tecnológico de produção e pesquisa em vários campos.',
    'Não implica aprimoramento corporal irrestrito ou IA moderna; aprovação central limita adoção.',
    ['tecnologia_02','tecnologia_03']),
];
const entry: ReferenceEntry = {
  id:'ideology-program-technocracy-inc-2004',kind:'ideology',category:'ideology',
  name:'Tecnocracia: governo funcional continental de Technocracy Inc.',
  period:'Programa do Study Course, edição eletrônica 1.1, 2004',
  sources:[source],vec:Object.fromEntries(axes.map(axis=>[axis,50])) as Record<AxisKey,number>,
  evidence:{},axisEvidence:{},coding:{},
  rationale:'Propõe autoridade funcional continental e produção e distribuição comuns. Valores são âncoras editoriais, não medidas.',
  caveats:'Exemplar único de tecnocracia para a seleção, não doutrina adicional independente de um Veblen supostamente endossado. Veblen é outro registro histórico preservado, com projeto condicional não qualificado. Não valida abundância, previsão de colapso, viabilidade ou realização do programa. Seis eixos não verificam independência de todas as tradições; religião, migração, diplomacia, nacionalismo, comércio e moral permanecem desconhecidos.',
};
for(const input of inputs){
  const coded=codeReferenceAxis(input,entry.sources);
  entry.vec[input.axis]=coded.value;
  entry.evidence[input.axis]=coded.evidence;
  entry.axisEvidence![input.axis]=coded.axisEvidence;
  entry.coding![input.axis]=coded.coding;
}
export const ideologyProgramBatch01: ReferenceEntry[] = [entry];
export const ideologyProgramBatch01Audit = [{
  id:entry.id,reviewedOn,sourceEdition:'2004 electronic 1.1 explicitly located at PDF zero-based 2',
  authorReadScope:'Organizational preamble; Lesson 22 printed 220–233; Lesson 23 printed 240–250 relevant actual passages.',
  supportedAxes:inputs.map(input=>input.axis),
  coding:inputs.map(input=>codeReferenceAxis(input,[source]).coding),
  identityRule:'No scores or authorship transferred from Veblen. One technocracy exemplar replaces the unqualified selection slot only after catalog integration and ontology review.',
  accessLimits:'Organization-host Study-Course.pdf returned 404. Technate electronic 2004 actual primary read; axelkra.us 1945 scan metadata only, not a corroborating body read.',
}];
