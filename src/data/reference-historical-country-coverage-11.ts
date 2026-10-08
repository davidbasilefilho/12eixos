import type { AxisKey, ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';
const axes: AxisKey[]=['est','rep','pod','imi','dip','int','eco','con','com','rel','mor','tec'];
const reviewedOn='2026-10-08';
export const historicalCoverage11LiveBefore = {
  "id": "east-germany-gdr",
  "kind": "country",
  "category": "historical-country",
  "name": "Alemanha Oriental — RDA",
  "period": "República Democrática Alemã, 1949–1990",
  "vec": {
    "est": 50,
    "rep": 10,
    "pod": 50,
    "imi": 50,
    "dip": 50,
    "int": 50,
    "eco": 91,
    "con": 91,
    "com": 50,
    "rel": 50,
    "mor": 50,
    "tec": 50
  },
  "rationale": "Partido dirigente e economia estatal planejada foram inscritos na constituição socialista.",
  "caveats": "Recorte institucional datado; não representa a população, povos subordinados nem governos fora do período. Décadas distintas e vigilância devem ser estudadas separadamente; texto não prova prática. Eixos sem evidência suficiente permanecem em 50 como desconhecidos.",
  "sources": [
    {
      "title": "Constituição da RDA de 1968",
      "url": "https://www.documentarchiv.de/ddr/verfddr.html",
      "note": "Documento primário ou registro de arquivo relacionado ao período República Democrática Alemã, 1949–1990; codificamos somente posições expressas ou instituições descritas."
    },
    {
      "title": "Fundação Federal para Estudo da Ditadura SED",
      "url": "https://www.bundesstiftung-aufarbeitung.de/de/recherche/dossiers/deutsche-teilung-deutsche-einheit",
      "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
    }
  ],
  "evidence": {
    "rep": "high",
    "eco": "high",
    "con": "high"
  },
  "axisEvidence": {
    "rep": {
      "sourceTitles": [
        "Constituição da RDA de 1968",
        "Fundação Federal para Estudo da Ditadura SED"
      ],
      "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 10."
    },
    "eco": {
      "sourceTitles": [
        "Constituição da RDA de 1968",
        "Fundação Federal para Estudo da Ditadura SED"
      ],
      "rationale": "O documento descreve extensão de propriedade pública, provisão ou coordenação estatal, sustentando 91."
    },
    "con": {
      "sourceTitles": [
        "Constituição da RDA de 1968",
        "Fundação Federal para Estudo da Ditadura SED"
      ],
      "rationale": "A fonte documenta direção estatal da economia ou coordenação por mercado, sustentando 91."
    }
  }
} as const;
const primary:ReferenceSource={title:'RDA1968 — texto constitucional alemão, alterações1974 distinguidas',url:'https://www.verfassungen.de/ddr/verf68.htm',note:'Republicação privada de norma primária, corpo realmente aberto/lido:1–13,19–24,38–43,47–60; alterações1974 marcadas separadamente. Não edição oficial ou cotejo integral da execução1949–1990.'};
type Row=[AxisKey,ReferenceAxisCoding['position'],string,string,string,string];
const rows:Row[]=[
['est','moderate-second','Arts.41–43,47–49','Centralismo democrático rege estrutura; Volkskammer é único legislador e administração local atua sob planejamento central.','Centralismo e exclusividade legislativa nacionais sustentam direção unitária moderada.','Comunidades locais têm responsabilidade própria41–43 protegida por lei; não se nega toda descentralização ou mede poder informal.'],
['rep','strong-second','Arts.1,3,22,48,54','Partido marxista-leninista dirige Estado; Frente reúne partidos/organizações para objetivos socialistas; eleições constitucionais ocorrem nesse arranjo.','Direção partidária inscrita no desenho sustenta polo autocrático forte.','22/54 declaram sufrágio universal/secreto e participação; não se infere fraude de todas eleições nem auditoria de pluralismo efetivo.'],
['eco','strong-first','Arts.9–13','Economia funda-se na propriedade socialista; minas, energia, grandes indústrias, bancos, transportes e comunicações são públicos, vedada propriedade privada.','Base produtiva geral e exclusividade pública multissetorial sustentam direção pública forte.','10/13 incluem cooperativas/organizações, não apenas Estado;11 preserva propriedade pessoal/herança. Não mede ativos efetivos.'],
['con','strong-first','Art.9(3);41–43','Economia inteira é planejada, com direção estatal central e responsabilidade própria dos produtores e órgãos locais.','Regra obrigatória da economia nacional sustenta planejamento forte.','Responsabilidade empresarial/local não é eliminada; não auditoria da execução ou eficácia dos planos.'],
['mor','moderate-first','Arts.20(2),24(1),38','Igualdade de sexos cobre vida social, estatal e pessoal; igual salário e igualdade conjugal coexistem com apoio a mães e pais solteiros.','Regras combinadas de igualdade civil, laboral e familiar sustentam progressismo normativo moderado.','38 protege casamento/maternidade e educação de filhos como cidadãos conscientes do Estado; não divórcio, direitos LGBT ou igual prática inferidos.'],

['dip','moderate-second','Arts.6(4),8(1); contrapontos7,23','Estado busca desarmamento geral e veda guerra de conquista ou emprego de forças contra liberdade de outro povo.','Proibição geral de agressão e objetivo de desarmamento sustentam pacifismo normativo moderado.','7 prevê defesa socialista e aliança militar;23 impõe deveres defensivos. Norma1968, não descrição da intervenção soviética ou conduta efetiva da RDA.']
];
export function extendHistoricalCountryCoverage11(entry:ReferenceEntry):ReferenceEntry {
 if(entry.id!=='east-germany-gdr'||entry.coding&&Object.keys(entry.coding).length) return entry;
 if(JSON.stringify(entry.vec)!==JSON.stringify(historicalCoverage11LiveBefore.vec)||JSON.stringify(entry.evidence)!==JSON.stringify(historicalCoverage11LiveBefore.evidence))return entry;
 const sources=[...entry.sources,primary];
 const result={...entry,sources,vec:Object.fromEntries(axes.map(a=>[a,50])) as Record<AxisKey,number>,evidence:{},axisEvidence:{},coding:{}} as ReferenceEntry;
 for(const [axis,position,locator,statement,rationale,uncertainty] of rows){const c=codeReferenceAxis({axis,position,confidence:'medium',reviewedOn,rationale,uncertainty,...(axis==='imi'?{relatedQuestionIds:['imigracao_02','imigracao_08']}:{}),claims:[{sourceTitle:primary.title,locator,statement,basis:'norm',publishedDate:'1968-04-09',accessedDate:reviewedOn}]},sources);result.vec[axis]=c.value;result.evidence[axis]=c.evidence;result.axisEvidence![axis]=c.axisEvidence;result.coding![axis]=c.coding;}
 return Object.assign(result,{period:entry.period+'; recorte codificado exclusivamente texto original de 09/04/1968, anterior à revisão de 1974.',rationale:'Recodificação editorial de normas explícitas; valores legados sem localizadores permanecem arquivados no literal11.',caveats:entry.caveats+' Norma original1968 não equivale à prática de todas décadas ou ao texto1974. Rel/pod/imi/int/com/tec desconhecidos; consciência privada não estabelece relação geral Estado/religião.',documentaryReview11:{status:'author-reviewed-bounded-claims',independentReview:'accepted-bounded-primary-claims',reviewedOn,scope:'Seis construtos1968cotejados independentemente em corpo primário alemão; imi rejeitado por alcance insuficiente. Não prática1949–1990 ou cotejo integral1974.'},unknownAxisReasons:Object.fromEntries(axes.filter(a=>!result.coding![a]).map(a=>[a,'Sem passagens suficientes para orientar este construto;50 desconhecido.']))});
}
export const historicalCoverage11Audit={id:'east-germany-gdr',candidateDocumentedAxes:6,identityAdditions:0,independentReview:'accepted-bounded-primary-claims'} as const;

/** Facts retained as research; one named linguistic group does not orient the whole culture axis. */
export const historicalCoverage11QuarantinedResearch={axis:'imi',source:primary,locator:'Arts.20(1),40;contraponto23(3)',statement:'Igualdade de nacionalidade/raça e promoção estatal da língua/cultura sorábias; asilo seletivo.',reason:'Antidiscriminação genérica e uma comunidade linguística nomeada não estabelecem programa cultural plural generalizado;50 desconhecido sem evidence/map/coding.',independentReview:'scope-rejected-facts-retained'} as const;
