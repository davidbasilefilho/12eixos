import type { AxisKey, ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';
const axes: AxisKey[]=['est','rep','pod','imi','dip','int','eco','con','com','rel','mor','tec'];
const reviewedOn='2026-10-08';
export const historicalCoverage13LiveBefore = {
  "id": "china-deng-reform",
  "kind": "country",
  "category": "historical-country",
  "name": "China — reformas de Deng Xiaoping",
  "period": "Reforma e abertura, 1978–1992",
  "vec": {
    "est": 50,
    "rep": 5,
    "pod": 50,
    "imi": 50,
    "dip": 50,
    "int": 50,
    "eco": 80,
    "con": 79,
    "com": 50,
    "rel": 10,
    "mor": 38,
    "tec": 50
  },
  "rationale": "Partido único manteve controle, enquanto reformas abriram mercados e direção econômica mista.",
  "caveats": "Recorte institucional datado; não representa a população, povos subordinados nem governos fora do período. Repressão de 1989 e crescimento desigual fazem parte do período. Eixos sem evidência suficiente permanecem em 50 como desconhecidos.",
  "sources": [
    {
      "title": "Constituição da República Popular (1982)",
      "url": "https://www.constituteproject.org/constitution/China_1982",
      "note": "Documento primário ou registro de arquivo relacionado ao período Reforma e abertura, 1978–1992; codificamos somente posições expressas ou instituições descritas."
    },
    {
      "title": "Office of the Historian — China",
      "url": "https://history.state.gov/milestones/1969-1976/rapprochement-china",
      "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
    }
  ],
  "evidence": {
    "rep": "high",
    "eco": "medium",
    "con": "medium",
    "rel": "medium",
    "mor": "medium"
  },
  "axisEvidence": {
    "rep": {
      "sourceTitles": [
        "Constituição da República Popular (1982)",
        "Office of the Historian — China"
      ],
      "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 5."
    },
    "eco": {
      "sourceTitles": [
        "Constituição da República Popular (1982)",
        "Office of the Historian — China"
      ],
      "rationale": "O documento descreve extensão de propriedade pública, provisão ou coordenação estatal, sustentando 80."
    },
    "con": {
      "sourceTitles": [
        "Constituição da República Popular (1982)",
        "Office of the Historian — China"
      ],
      "rationale": "A fonte documenta direção estatal da economia ou coordenação por mercado, sustentando 79."
    },
    "rel": {
      "sourceTitles": [
        "Constituição da República Popular (1982)",
        "Office of the Historian — China"
      ],
      "rationale": "A carta ou fonte documenta laicidade, religião de Estado ou autoridade religiosa, sustentando 10."
    },
    "mor": {
      "sourceTitles": [
        "Constituição da República Popular (1982)",
        "Office of the Historian — China"
      ],
      "rationale": "A fonte registra extensão ou restrição de direitos e igualdade no período, sustentando 38."
    }
  }
} as const;
const primary:ReferenceSource={title:'Constituição chinesa1982 — AppendixI, fac-símile arquivado IFES',url:'https://www.ifes.org/sites/default/files/migrate/con00014.pdf',note:'PDF28p realmente aberto, texto/OCR primário original4dezembro1982: preâmbulo e1–18/33–54; páginas2–6/9–11 pertinentes. AppendixI reproduz edição traduzida com emendas posteriores separadas ao final; catálogoIFES3dezembro não substitui adoção4dezembro no corpo. OCR defeituoso cotejado com transcrição; não edição oficial chinesa integral.'};
const parallel:ReferenceSource={title:'Constituição chinesa original1982 — Wikisource inglês',url:"https://en.wikisource.org/wiki/Constitution_of_the_People%27s_Republic_of_China_(1982)",note:'Corpo primário inglês realmente aberto/lido: preâmbulo1–18/33–54 e cotejo IFES.15ainda planejamento e mercado suplementar; não revisões1993/2004/2018. Transcrição colaborativa, não scan original chinês.'};
type Row=[AxisKey,ReferenceAxisCoding['position'],string,string,string,string];
const rows:Row[]=[
['est','moderate-second','Preâmbulo;arts.3–4,30–31','Estado unitário com liderança central unificada; autonomia regional das nacionalidades é integrante do país.','Unidade e comando central expressos sustentam unitarismo moderado.','4estabelece autogoverno regional;3exige iniciativa local;31admite sistemas especiais definidos por lei. Não ausência de descentralização efetiva.'],
['rep','strong-second','Preâmbulo;arts.1–3,34','Partido Comunista lidera Estado e frente de partidos democráticos/organizações; ditadura popular e proteção do sistema socialista coexistem com eleições declaradas.','Liderança partidária normativa e limites de sistema sustentam autocracia forte no desenho.','34declara voto sem discriminação/3eleições; não auditoria de pleitos ou inferência de fraude. Não usa fórmula de liderança no artigo1adicionada2018.'],
['eco','strong-first','Arts.6–13,18','Propriedade pública produtiva é base, Estado força dirigente; economia individual é complemento e propriedade privada pessoal protegida.','Base geral produtiva e prioridade estatal expressas sustentam direção pública forte.','Coletiva não é apenas estatal;11economiaindividual/13pessoal e herança/18investimento estrangeiro são contrapontos. Norma1982 não maioria real medida.'],
['con','strong-first','Arts.15–17','Economia planejada nacional admite mercado como regulação suplementar; empresas estatais devem cumprir plano e coletivas aceitar orientação.','Subordinação geral ao plano obrigatório sustenta planejamento forte.','Mercado suplementar15e decisão gerencial empresarial16–17expressos. Não orientação de mercado1993retrojetada ou eficácia do plano inferida.'],
['imi','moderate-second','Arts.4,19,32','Todas nacionalidades podem desenvolver idiomas falados/escritos e preservar/reformar costumes; minorias têm proteção cultural e autonomia.','Proteção geral multicultural/linguística sustenta direção moderada.','4proíbe divisão/19promovePutonghua nacional;32asilo político discricionário. Não entrada livre ou execução igualitária.'],
['mor','moderate-first','Arts.34,48–49;contrapontos25,51,53','Mulheres têm iguais direitos em vida política/econômica/cultural/social/familiar e igual salário; liberdade conjugal e proteção contra maus-tratos são asseguradas.','Igualdade abrangente e liberdade conjugal combinadas sustentam progressismo normativo moderado.','25/49impõem planejamento familiar;família/parentesco tradicional protegido e dever ético53. Não autonomia reprodutiva, divórcio, LGBT ou execução igualitária inferidos.']
];
export function extendHistoricalCountryCoverage13(entry:ReferenceEntry):ReferenceEntry {
 if(entry.id!=='china-deng-reform'||entry.coding&&Object.keys(entry.coding).length) return entry;
 if(JSON.stringify(entry.vec)!==JSON.stringify(historicalCoverage13LiveBefore.vec)||JSON.stringify(entry.evidence)!==JSON.stringify(historicalCoverage13LiveBefore.evidence))return entry;
 const sources=[...entry.sources,primary,parallel];
 const result={...entry,sources,vec:Object.fromEntries(axes.map(a=>[a,50])) as Record<AxisKey,number>,evidence:{},axisEvidence:{},coding:{}} as ReferenceEntry;
 for(const [axis,position,locator,statement,rationale,uncertainty] of rows){const c=codeReferenceAxis({axis,position,confidence:'medium',reviewedOn,rationale,uncertainty,...(axis==='imi'?{relatedQuestionIds:['imigracao_02','imigracao_08']}:{}),claims:[{sourceTitle:primary.title,locator,statement,basis:'norm',publishedDate:'1982-12-04',accessedDate:reviewedOn}]},sources);result.vec[axis]=c.value;result.evidence[axis]=c.evidence;result.axisEvidence![axis]=c.axisEvidence;result.coding![axis]=c.coding;}
 return Object.assign(result,{period:entry.period+'; recorte codificado exclusivamente texto original de 04/12/1982, anterior às emendas de 1988 e 1993.',rationale:'Recodificação editorial de normas explícitas; valores legados sem localizadores permanecem arquivados no literal13.',caveats:entry.caveats+' Norma original1982 não equivale à prática1978–1992 ou sistema de mercado1993. Rel/pod/dip/int/com/tec desconhecidos; crença36 não estabelece separação geral.',documentaryReview13:{status:'author-reviewed-bounded-claims',independentReview:'accepted-bounded-primary-claims',reviewedOn,scope:'Seis normas originais1982 aceitas: autor leu PDF IFES e paralelo Wiki; revisor leu efetivamente Wiki preâmbulo/1–18/19/25/30–34/48–54. Acesso independente ao IFES falhou e curl403; não certifica scan pelo revisor. Não emendas1993/2018 ou prática integral1978–1992.'},unknownAxisReasons:Object.fromEntries(axes.filter(a=>!result.coding![a]).map(a=>[a,'Sem passagens suficientes para orientar este construto;50 desconhecido.']))});
}
export const historicalCoverage13Audit={id:'china-deng-reform',candidateDocumentedAxes:6,identityAdditions:0,independentReview:'accepted-bounded-primary-claims'} as const;
