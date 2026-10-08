import type { AxisKey, ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';
const axes: AxisKey[]=['est','rep','pod','imi','dip','int','eco','con','com','rel','mor','tec'];
const reviewedOn='2026-10-08';
export const historicalCoverage12LiveBefore = {
  "id": "north-korea-kim-il-sung",
  "kind": "country",
  "category": "historical-country",
  "name": "Coreia do Norte — governo Kim Il-sung",
  "period": "República Popular, 1948–1994",
  "vec": {
    "est": 50,
    "rep": 2,
    "pod": 50,
    "imi": 50,
    "dip": 50,
    "int": 50,
    "eco": 97,
    "con": 98,
    "com": 50,
    "rel": 17,
    "mor": 23,
    "tec": 50
  },
  "rationale": "Partido único e planejamento integral constam da ordem política e econômica.",
  "caveats": "Recorte institucional datado; não representa a população, povos subordinados nem governos fora do período. Acesso documental independente é limitado; não inferir crenças individuais. Eixos sem evidência suficiente permanecem em 50 como desconhecidos.",
  "sources": [
    {
      "title": "Constituição da RPDC (1972)",
      "url": "https://www.constituteproject.org/constitution/Peoples_Republic_of_Korea_1972",
      "note": "Documento primário ou registro de arquivo relacionado ao período República Popular, 1948–1994; codificamos somente posições expressas ou instituições descritas."
    },
    {
      "title": "Office of the Historian — North Korea",
      "url": "https://history.state.gov/countries/korea-north",
      "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
    }
  ],
  "evidence": {
    "rep": "high",
    "eco": "high",
    "con": "high",
    "rel": "medium",
    "mor": "medium"
  },
  "axisEvidence": {
    "rep": {
      "sourceTitles": [
        "Constituição da RPDC (1972)",
        "Office of the Historian — North Korea"
      ],
      "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 2."
    },
    "eco": {
      "sourceTitles": [
        "Constituição da RPDC (1972)",
        "Office of the Historian — North Korea"
      ],
      "rationale": "O documento descreve extensão de propriedade pública, provisão ou coordenação estatal, sustentando 97."
    },
    "con": {
      "sourceTitles": [
        "Constituição da RPDC (1972)",
        "Office of the Historian — North Korea"
      ],
      "rationale": "A fonte documenta direção estatal da economia ou coordenação por mercado, sustentando 98."
    },
    "rel": {
      "sourceTitles": [
        "Constituição da RPDC (1972)",
        "Office of the Historian — North Korea"
      ],
      "rationale": "A carta ou fonte documenta laicidade, religião de Estado ou autoridade religiosa, sustentando 17."
    },
    "mor": {
      "sourceTitles": [
        "Constituição da RPDC (1972)",
        "Office of the Historian — North Korea"
      ],
      "rationale": "A fonte registra extensão ou restrição de direitos e igualdade no período, sustentando 23."
    }
  }
} as const;
const primary:ReferenceSource={title:'RPDC1972 — transcrição primária inglesa Wikisource',url:"https://en.wikisource.org/wiki/Socialist_Constitution_of_the_Democratic_People%27s_Republic_of_Korea_(1972)",note:'Corpo original1972 realmente aberto/lido, capítulosI–IV eVII–X relevantes; edição com149artigos distinta das revisões1992/1998/2009. Republicação traduzida sem tradutor/edição-fonte identificados no cabeçalho; não fac-símile oficial, cotejo integral pendente.'};
const parallel:ReferenceSource={title:'RPDC1972 — transcrição coreana, texto 제7호',url:'https://ko.wikisource.org/wiki/조선민주주의인민공화국_사회주의헌법_(제7호)',note:'Corpo primário coreano realmente aberto; cotejo delimitado4/9–11/18–22/30–34/51–52/62–63 com inglês. Transcrição colaborativa com erros tipográficos visíveis; não scan governamental ou validação linguística integral.'};
type Row=[AxisKey,ReferenceAxisCoding['position'],string,string,string,string];
export const historicalCoverage12QuarantinedResearch={source:primary,axis:'rep',proposedRow:['rep','strong-second','Arts.4,8–11,52–53,73–76','Estado tem doutrina Juche do Partido dos Trabalhadores e ditadura proletária; revoluciona toda sociedade enquanto declara eleições e atividades de partidos democráticos.','Direção ideológica partidária e defesa normativa do sistema sustentam autocracia forte no desenho.','1972art4não é fórmula atual de direção partidária expressa em artigo11 posterior;8/52/53 declaram eleições/pluralidade. Não fraude de todos pleitos ou supressão total prática inferidas.'],reason:'Juche/dictadura proletária não demonstram exclusão geral da competição no original1972 frente eleições e partidos explícitos;50 sem coding/evidence/map.',independentReview:'scope-rejected-facts-retained'} as const;
const rows:Row[]=[
['est','moderate-second','Arts.9,73,103(2/5/12),109(1/10),115–132','Centralismo rege todos órgãos; centro dirige assembleias locais e altera distritos, com cadeia administrativa hierárquica.','Direção nacional hierárquica e legislador exclusivo sustentam unitarismo moderado.','Assembleias locais eleitas aprovam orçamento/plano e nomeiam autoridades118; não inexistência de toda autonomia administrativa ou prática auditada.'],
['eco','strong-first','Arts.18–22','Meios produtivos são estatais/cooperativos; recursos, fábricas centrais, portos, bancos e transportes pertencem exclusivamente ao Estado.','Base produtiva geral e papel dirigente estatal expresso sustentam direção pública forte.','20permite cooperativas de pequenas/médias empresas;21transformação cooperativa depende vontade membros;22bens pessoais e herança. Não ativos reais medidos.'],
['con','strong-first','Arts.30–32,76(9),109(3)','Economia nacional é planejada; Estado prepara/executa planos unificados/detalhados e orçamento subordinado ao plano.','Plano obrigatório da economia inteira sustenta direção forte.','Taean30emprega força coletiva dos produtores, planos locais118/130; não execução eficaz ou eliminação de toda decisão local.'],
['com','moderate-first','Art.34','Política tarifária tem objetivo explícito de proteger economia nacional independente, com comércio externo por Estado ou supervisão.','Objetivo geral das tarifas sustenta protecionismo moderado.','Igualdade e benefício mútuo no comércio são contrapontos; nenhuma taxa média medida, proibição total do comércio ou tarifa atual inferida. Monopólio sozinho não seria suficiente.'],
['mor','moderate-first','Arts.51–52,62–63','Mulheres têm igual status/direitos, sufrágio sem distinção sexual e medidas de emancipação doméstica para participação pública; família e casamento protegidos.','Igualdade civil/política e participação social combinadas sustentam progressismo normativo moderado.','63fortalece família;67–68impõem normas socialistas/coletivismo. Sem igual execução, divórcio, filhos não matrimoniais ou direitos LGBT inferidos.']
];
export function extendHistoricalCountryCoverage12(entry:ReferenceEntry):ReferenceEntry {
 if(entry.id!=='north-korea-kim-il-sung'||entry.coding&&Object.keys(entry.coding).length) return entry;
 if(JSON.stringify(entry.vec)!==JSON.stringify(historicalCoverage12LiveBefore.vec)||JSON.stringify(entry.evidence)!==JSON.stringify(historicalCoverage12LiveBefore.evidence))return entry;
 const sources=[...entry.sources,primary,parallel];
 const result={...entry,sources,vec:Object.fromEntries(axes.map(a=>[a,50])) as Record<AxisKey,number>,evidence:{},axisEvidence:{},coding:{}} as ReferenceEntry;
 for(const [axis,position,locator,statement,rationale,uncertainty] of rows){const c=codeReferenceAxis({axis,position,confidence:'medium',reviewedOn,rationale,uncertainty,...(axis==='imi'?{relatedQuestionIds:['imigracao_02','imigracao_08']}:{}),claims:[{sourceTitle:primary.title,locator,statement,basis:'norm',publishedDate:'1972-12-27',accessedDate:reviewedOn}]},sources);result.vec[axis]=c.value;result.evidence[axis]=c.evidence;result.axisEvidence![axis]=c.axisEvidence;result.coding![axis]=c.coding;}
 return Object.assign(result,{period:entry.period+'; recorte codificado exclusivamente texto original27dezembro1972; não revisões1992–2009.',rationale:'Recodificação editorial de normas explícitas; valores legados sem localizadores permanecem arquivados no literal12.',caveats:entry.caveats+' Norma original1972 não equivale à prática1948–1994 nem revisões posteriores. Rep/rel/pod/imi/dip/int/tec desconhecidos; liberdade de crença54não estabelece relação geral Estado/religião.',documentaryReview12:{status:'author-reviewed-bounded-claims',independentReview:'accepted-bounded-primary-claims',reviewedOn,scope:'Revisor leu inglês original1–34/49–76/103/109/115–132;133–146contexto. Não todos149, scan oficial ou certificação linguística coreana. Cinco normas aceitas; rep rejeitado pelo Root frente eleições/partidos explícitos, sem substituição40. Não prática1948–1994 ou versões posteriores.'},unknownAxisReasons:Object.fromEntries(axes.filter(a=>!result.coding![a]).map(a=>[a,'Sem passagens suficientes para orientar este construto;50 desconhecido.']))});
}
export const historicalCoverage12Audit={id:'north-korea-kim-il-sung',candidateDocumentedAxes:5,identityAdditions:0,independentReview:'accepted-bounded-primary-claims'} as const;
