import type {AxisKey,ReferenceEntry,ReferenceSource} from './references';
import {codeReferenceAxis,type ReferenceAxisCoding} from '../lib/reference-coding';
const reviewedOn='2026-10-08';
const axes:AxisKey[]=['est','rep','pod','imi','dip','int','eco','con','com','rel','mor','tec'];
export const historicalCoverage16LiveBefore={
  "id": "india-nehru",
  "kind": "country",
  "category": "historical-country",
  "name": "Índia — primeiros governos de Nehru",
  "period": "República federal e planejamento, 1947–1964",
  "vec": {
    "est": 67,
    "rep": 86,
    "pod": 50,
    "imi": 50,
    "dip": 50,
    "int": 50,
    "eco": 75,
    "con": 83,
    "com": 50,
    "rel": 50,
    "mor": 50,
    "tec": 50
  },
  "rationale": "Democracia eleitoral e federalismo coexistiram com planejamento e setor público de desenvolvimento.",
  "caveats": "Recorte institucional datado; não representa a população, povos subordinados nem governos fora do período. Castas e desigualdades persistiram; política externa não alinhada não descreve todos os eixos. Eixos sem evidência suficiente permanecem em 50 como desconhecidos.",
  "sources": [
    {
      "title": "Constituição da Índia (1950)",
      "url": "https://legislative.gov.in/constitution-of-india/",
      "note": "Documento primário ou registro de arquivo relacionado ao período República federal e planejamento, 1947–1964; codificamos somente posições expressas ou instituições descritas."
    },
    {
      "title": "Parlamento da Índia — Jawaharlal Nehru",
      "url": "https://sansad.in/ls/about/prime-minister/jawaharlal-nehru",
      "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
    }
  ],
  "evidence": {
    "est": "high",
    "rep": "high",
    "eco": "medium",
    "con": "medium"
  },
  "axisEvidence": {
    "est": {
      "sourceTitles": [
        "Constituição da Índia (1950)",
        "Parlamento da Índia — Jawaharlal Nehru"
      ],
      "rationale": "A carta constitucional descreve a distribuição territorial de poder, sustentando a posição federal/descentralizada codificada."
    },
    "rep": {
      "sourceTitles": [
        "Constituição da Índia (1950)",
        "Parlamento da Índia — Jawaharlal Nehru"
      ],
      "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 86."
    },
    "eco": {
      "sourceTitles": [
        "Constituição da Índia (1950)",
        "Parlamento da Índia — Jawaharlal Nehru"
      ],
      "rationale": "O documento descreve extensão de propriedade pública, provisão ou coordenação estatal, sustentando 75."
    },
    "con": {
      "sourceTitles": [
        "Constituição da Índia (1950)",
        "Parlamento da Índia — Jawaharlal Nehru"
      ],
      "rationale": "A fonte documenta direção estatal da economia ou coordenação por mercado, sustentando 83."
    }
  }
} as const;
const official:ReferenceSource={title:'GazetteExtraordinary26novembro1949 — Constituição indiana original',url:'https://egazette.gov.in/WriteReadData/1949/E-2358-1949-0000-109779.pdf',note:'Corpos primários recuperados efetivamente por indexação:12–14/15(1–3)/16(1–4)/23–28/29(1)/36–38/39(a–d)/245–246. Abertura integral502/400timeout; não scan completo visualmente cotejado. Índice contém erros de cabeçalho; eventual15(4) indexado não é certificado como original e foi excluído. Não texto consolidado2007/2024.'};
const parallel:ReferenceSource={title:'Gazeta indiana1949 — OCR/transcrição Wikisource por páginas originais',url:'https://en.wikisource.org/wiki/Index:The_Constitution_of_India_1949_(Gazette_Notification_Version).djvu',note:'Original com scan vinculado, não emendas posteriores. Corpos efetivamente lidos:1–3,17–22,26–29(1),78–85,245–249,325–326,352–356,358–359;39(a–d)cotejo. Revisor independente leu páginas1–3/8–14/19–20/33–35/116–117/158/171–176, incluindo formulários somente lidos. Algumas páginas8–12/14/20não publicadas: OCRprecarregado acessível em formulário somente lido, sem gravação. Texto não revisado, erros OCR visíveis; imagem vinculada não certificada visualmente.'};
type Row=[AxisKey,ReferenceAxisCoding['position'],string,string,string,string,ReferenceSource];
const rows:Row[]=[
['est','moderate-first','1–3;245–249;contrapontos352–356','Legislaturas estaduaisA/B têm competência exclusiva da lista estadual; União tem listas próprias e concorrentes.','Competências estaduais constitucionalmente próprias sustentam federalismo moderado.','Centro tem poderes residuais248, alteração territorial3, intervenção356 e superação249por maioria qualificada no Conselho; partesC/Dnão igualautonomia. Não prática1947–1964.',parallel],
['rep','moderate-first','79–85;325–326,páginas33–35/158','Câmara popular é diretamente eleita, mandatos limitados; adultos cidadãos a partir21anos votam sem distinção religiosa/casta/sexo.','Representação nacional renovável e sufrágio amplo sustentam democracia normativa moderada.','Senado tem12indicados e eleição indireta; qualificações/desqualificações e emergência83permitem extensão temporária. Não qualidade dos pleitos medida.',parallel],
['pod','moderate-second','17–22;352,358–359,páginas9–12/171/175–176','Direitos gerais de expressão/associação/mobilidade e proteções penais/detentivas limitam poder ordinário.','Conjunto amplo de garantias ordinárias sustenta liberdade moderada, com exceções substanciais.','22exclui inimigos estrangeiros/detenção preventiva das garantias22(1–2), admite além3meses e sigilo; emergência suspende19e tutela judicial359. Não efetividade1962ou toda prática.',parallel],
['imi','moderate-second','29(1);contraponto19(5)','Qualquer segmento cidadão com idioma/escrita/cultura próprios tem direito à conservação.','Proteção cultural geral aberta a qualquer segmento sustenta multiculturalismo moderado.','Âmbito cidadãos, não livre entrada ou todas línguas oficiais;19(5)permite restrições protetivas de tribos. Não igualdade executada.',parallel],
['rel','moderate-first','25–28','Liberdade de crença e autonomia de denominações coexistem com vedação fiscal religiosa e ensino religioso público condicionado.','Regras gerais de autonomia/confissão e limites ao custeio/imposição sustentam direção secular moderada.','Ordem/moral/saúde e reforma social limitam; ensino religioso previsto por trust estatal excepciona28(1). Não secular1976retrojetado ou separação absoluta.',parallel],

];
export const historicalCoverage16QuarantinedResearch:Row[]=[['mor','moderate-first','15(1–3)/16;325;37/39(a/d)','Igualdade sexual civil/de acesso, emprego estatal e voto combina diretrizes de sustento e salário iguais.','Igualdade geral em múltiplos domínios sustenta proposta progressista moderada, sujeita à revisão de amplitude.','Diretrizes37não exigíveis judicialmente;15(3)admite previsões especiais e16ressalvas. Não igualdade conjugal, divórcio, LGBT/reprodução ou códigos pessoais homogêneos inferidos.',official]];
export function extendHistoricalCountryCoverage16(entry:ReferenceEntry):ReferenceEntry {
 if(JSON.stringify(entry)!==JSON.stringify(historicalCoverage16LiveBefore))return entry;
 const sources=[...entry.sources,official,parallel];
 const result={...entry,sources,vec:Object.fromEntries(axes.map(a=>[a,50]))as Record<AxisKey,number>,evidence:{},axisEvidence:{},coding:{}}as ReferenceEntry;
 for(const [axis,position,locator,statement,rationale,uncertainty,source]of rows){const c=codeReferenceAxis({axis,position,confidence:'medium',reviewedOn,rationale,uncertainty,...(axis==='imi'?{relatedQuestionIds:['imigracao_02','imigracao_08']}:{}),claims:[{sourceTitle:source.title,locator,statement,basis:'norm',publishedDate:'1949-11-26',accessedDate:reviewedOn}]},sources);result.vec[axis]=c.value;result.evidence[axis]=c.evidence;result.axisEvidence![axis]=c.axisEvidence;result.coding![axis]=c.coding;}
 return Object.assign(result,{period:entry.period+'; recorte normativo: texto fundador adotado em 26/11/1949, vigência geral em 26/01/1950.',rationale:'Recodificação editorial proposta de passagens fundadoras originais, não inferência do legado sem localizadores.',caveats:'Norma fundadora1950, não prática uniforme1947–1964 ou versões posteriores. Centro possui fortes exceções federativas e garantias sofrem detençãopreventiva/emergência. Mor desconhecido: igualdade civil/emprego/voto/diretrizes salariais não resolve orientação moral familiar/cultural geral; proposta preservada somente em pesquisa. Eco/con/dip/int/com/tec desconhecidos; diretrizes distributivas não medem domínio produtivo ou plano executado.',documentaryReview16:{status:'author-reviewed-bounded-claims',independentReview:'accepted-bounded-primary-and-identity',reviewedOn,scope:'Cinco normas aceitas pelo Root após leitura independente do original Wikisource/OCR por páginas1–3/8–14/19–20/33–35/116–117/158/171–176. Revisor não reabriu PDFoficial integral; autoria indexada separada. Mor rejeitado por alcance. Sem scan visual, prática ou emendas reconstruídas.'},unknownAxisReasons:Object.fromEntries(axes.filter(a=>!result.coding![a]).map(a=>[a,'Sem passagem original suficiente para direção geral;50desconhecido.']))});
}
export const historicalCoverage16Audit={id:'india-nehru',identityAdditions:0,acceptedDocumentedAxes:5,independentReview:'accepted-bounded-primary-and-identity'}as const;
