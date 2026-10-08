import type {AxisKey,ReferenceEntry,ReferenceSource} from './references';
import {codeReferenceAxis,type ReferenceAxisCoding} from '../lib/reference-coding';
const reviewedOn='2026-10-08';
export const historicalCoverage17LiveBefore={
  "id": "brazil-estado-novo-1937",
  "kind": "country",
  "category": "historical-country",
  "name": "Brasil — Estado Novo",
  "period": "Governo Vargas, 1937–1945; recorte codificado: Cláusulas originais da carta de 1937 e regime transitório declarado; não imputa redações de 1945 a todo1937–1945.",
  "vec": {
    "est": 50,
    "rep": 20,
    "pod": 80,
    "imi": 50,
    "dip": 50,
    "int": 50,
    "eco": 50,
    "con": 50,
    "com": 50,
    "rel": 50,
    "mor": 50,
    "tec": 50
  },
  "rationale": "Inferências documentais delimitadas recodificadas pelo protocolo ordinal; o vetor anterior e suas fontes foram preservados no módulo de reconciliação.",
  "caveats": "Federalismo textual com intervenção e dissolução local requer cotejo de prática para est; não graduado nesta revisão. Corporativismo e incentivo estatal não demonstram predomínio da propriedade pública ou planejamento integral. Sem inferências atuais de moral, religião ou tecnologia.",
  "sources": [
    {
      "title": "Getúlio Vargas — FGV CPDOC",
      "url": "https://cpdoc.fgv.br/biografias/getulio-vargas",
      "note": "Pesquisa histórica sobre golpe, dissolução do Congresso e dos partidos e intervenção estatal entre 1937 e 1945."
    },
    {
      "title": "Constituição de 1937 — FGV CPDOC",
      "url": "https://cpdoc.fgv.br/sites/default/files/brasilia/dhbb/Get%C3%BAlio%20Vargas.pdf",
      "note": "Documento e análise sobre centralização, estado de emergência, economia corporativa e aplicação incompleta da carta constitucional."
    },
    {
      "title": "Constituição de 1937 — Presidência, texto com versões anotadas",
      "url": "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao37.htm",
      "note": "Cláusulas originais de 1937 explicitamente separadas das redações e revogações de 1938/1945; texto consolidado não é tomado como edição original integral."
    }
  ],
  "evidence": {
    "rep": "high",
    "pod": "high"
  },
  "axisEvidence": {
    "rep": {
      "sourceTitles": [
        "Constituição de 1937 — Presidência, texto com versões anotadas"
      ],
      "rationale": "Dissolução representativa com poder legislativo presidencial sustenta autocracia forte no dispositivo de fundação. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Órgãos eletivos futuros são promessa condicionada; texto não prova sozinho se plebiscito ou todas as eleições ocorreram."
    },
    "pod": {
      "sourceTitles": [
        "Constituição de 1937 — Presidência, texto com versões anotadas"
      ],
      "rationale": "Amplitude excepcional de coerção e barreira judicial sustentam segurança/restrição forte no desenho ativado pela carta. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Somente competências expressas, não contagem de prisões ou censura efetiva; artigo186 foi revogado em1945. Não usamos alínea168(e)acrescentada em1938."
    }
  },
  "coding": {
    "rep": {
      "axis": "rep",
      "position": "strong-second",
      "confidence": "high",
      "rationale": "Dissolução representativa com poder legislativo presidencial sustenta autocracia forte no dispositivo de fundação.",
      "uncertainty": "Órgãos eletivos futuros são promessa condicionada; texto não prova sozinho se plebiscito ou todas as eleições ocorreram.",
      "reviewedOn": "2026-10-07",
      "claims": [
        {
          "sourceTitle": "Constituição de 1937 — Presidência, texto com versões anotadas",
          "locator": "Arts. 178, 180–181 e 187",
          "statement": "Câmaras nacionais/estaduais/municipais são dissolvidas; Presidente legisla enquanto Parlamento não reúne e marca eleições condicionadas ao plebiscito.",
          "basis": "norm",
          "publishedDate": "1937-11-10; cláusulas originais identificadas nas anotações",
          "accessedDate": "2026-10-07"
        }
      ],
      "version": "editorial-ordinal-v1",
      "value": 20,
      "range": [
        10,
        25
      ]
    },
    "pod": {
      "axis": "pod",
      "position": "strong-first",
      "confidence": "high",
      "rationale": "Amplitude excepcional de coerção e barreira judicial sustentam segurança/restrição forte no desenho ativado pela carta.",
      "uncertainty": "Somente competências expressas, não contagem de prisões ou censura efetiva; artigo186 foi revogado em1945. Não usamos alínea168(e)acrescentada em1938.",
      "reviewedOn": "2026-10-07",
      "claims": [
        {
          "sourceTitle": "Constituição de 1937 — Presidência, texto com versões anotadas",
          "locator": "Arts. 168(a–d), 170 e redação original de186",
          "statement": "Emergência é declarada para todo país e autoriza detenção, desterro, censura, suspensão de reunião e busca; atos de emergência não são conhecidos judicialmente.",
          "basis": "norm",
          "publishedDate": "1937-11-10; cláusulas originais identificadas nas anotações",
          "accessedDate": "2026-10-07"
        }
      ],
      "version": "editorial-ordinal-v1",
      "value": 80,
      "range": [
        75,
        90
      ]
    }
  },
  "documentaryReview": {
    "status": "author-reviewed-bounded-claims",
    "reviewedOn": "2026-10-07",
    "independentReview": "pending",
    "scope": "Cláusulas originais da carta de 1937 e regime transitório declarado; não imputa redações de 1945 a todo1937–1945."
  },
  "unknownAxisReasons": {
    "est": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Federalismo textual com intervenção e dissolução local requer cotejo de prática para est; não graduado nesta revisão. Corporativismo e incentivo estatal não demonstram predomínio da propriedade pública ou planejamento integral. Sem inferências atuais de moral, religião ou tecnologia.",
    "imi": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Federalismo textual com intervenção e dissolução local requer cotejo de prática para est; não graduado nesta revisão. Corporativismo e incentivo estatal não demonstram predomínio da propriedade pública ou planejamento integral. Sem inferências atuais de moral, religião ou tecnologia.",
    "dip": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Federalismo textual com intervenção e dissolução local requer cotejo de prática para est; não graduado nesta revisão. Corporativismo e incentivo estatal não demonstram predomínio da propriedade pública ou planejamento integral. Sem inferências atuais de moral, religião ou tecnologia.",
    "int": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Federalismo textual com intervenção e dissolução local requer cotejo de prática para est; não graduado nesta revisão. Corporativismo e incentivo estatal não demonstram predomínio da propriedade pública ou planejamento integral. Sem inferências atuais de moral, religião ou tecnologia.",
    "eco": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Federalismo textual com intervenção e dissolução local requer cotejo de prática para est; não graduado nesta revisão. Corporativismo e incentivo estatal não demonstram predomínio da propriedade pública ou planejamento integral. Sem inferências atuais de moral, religião ou tecnologia.",
    "con": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Federalismo textual com intervenção e dissolução local requer cotejo de prática para est; não graduado nesta revisão. Corporativismo e incentivo estatal não demonstram predomínio da propriedade pública ou planejamento integral. Sem inferências atuais de moral, religião ou tecnologia.",
    "com": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Federalismo textual com intervenção e dissolução local requer cotejo de prática para est; não graduado nesta revisão. Corporativismo e incentivo estatal não demonstram predomínio da propriedade pública ou planejamento integral. Sem inferências atuais de moral, religião ou tecnologia.",
    "rel": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Federalismo textual com intervenção e dissolução local requer cotejo de prática para est; não graduado nesta revisão. Corporativismo e incentivo estatal não demonstram predomínio da propriedade pública ou planejamento integral. Sem inferências atuais de moral, religião ou tecnologia.",
    "mor": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Federalismo textual com intervenção e dissolução local requer cotejo de prática para est; não graduado nesta revisão. Corporativismo e incentivo estatal não demonstram predomínio da propriedade pública ou planejamento integral. Sem inferências atuais de moral, religião ou tecnologia.",
    "tec": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Federalismo textual com intervenção e dissolução local requer cotejo de prática para est; não graduado nesta revisão. Corporativismo e incentivo estatal não demonstram predomínio da propriedade pública ou planejamento integral. Sem inferências atuais de moral, religião ou tecnologia."
  }
} as const;
const source:ReferenceSource={title:'Constituição1937 — Câmara, publicação original',url:'https://www2.camara.leg.br/legin/fed/consti/1930-1939/constituicao-35093-10-novembro-1937-532849-publicacaooriginal-15246-pl.html',note:'Texto primário oficial efetivamente aberto e passagens1–56/57–65/115–122/130–154/161–187 lidas nos localizadores usados e contrapostos. Republicação textual da publicação original, não scan visual ou certificado de execução integral. Não alínea168e1938 ou alterações1945.'};
type Row=[AxisKey,ReferenceAxisCoding['position'],string,string,string,string];
const rows:Row[]=[
 ['est','moderate-second','9/17–19/27/176/181; contrapontos3/21/23/26','Presidente confirma governadores ou impõe intervenção; governadores outorgam cartas e legislam enquanto assembleias dissolvidas.','Hierarquia interventora e imposição executiva do arranjo transitório sustentam centralização moderada normativa.','Federação3, poderes estaduais residuais21, tributos23 e autonomia local26 permanecem; não prova administração real uniforme ou Estado constitucionalmente unitário.'],
 ['rel','moderate-first','32b/1224–5; contraponto133','Estado não estabelece nem subvenciona cultos; culto livre e cemitérios seculares.','Regra estatal geral de ausência de estabelecimento/custeio e pluralidade religiosa sustenta secularismo moderado.','Direito comum/ordem pública/bons costumes restringem;133admite ensino religioso sem obrigação docente ou frequência compulsória. Não separação absoluta ou prática efetiva.']
];
export const historicalCoverage17RejectedRows:Row[]=[
 ['eco','moderate-second','135; contrapontos16VIII/143–147','Riqueza nacional funda iniciativa individual; intervenção econômica legitima-se por deficiência privada e coordenação.','Prioridade produtiva individual geral, além de simples direito patrimonial, sustenta orientação privada moderada normativa.','135também permite controle/estímulo/gestão direta;144nacionalização de setores essenciais é contraponto e não prova aquisição pública geral. Empresas de acionistas brasileiros não são automaticamente públicas.'],
 ['imi','moderate-first','151; contrapontos115/122/154','Regra nacional limita ingresso anual de cada país a2%dos seus nacionais fixados nos50anos anteriores.','Quota geral de entrada por origem contrapõe abertura universal e sustenta restrição moderada na faceta migratória.','Admissão não é abolida; não se atribui motivação cultural não escrita, volume real de ingressos ou abandono obrigatório de costumes. Cidadania/posse indígena são dimensões distintas.'],
];
export const historicalCoverage17QuarantinedResearch=[{status:"rejected-whole-axis-scope",rows:historicalCoverage17RejectedRows},{axis:'con',locator:'57–63/135/140',note:'Organização corporativa geral e CNEcom cinco ramos/inquéritos/normas coletivas dependentes do Presidente62; não convertido automaticamente em plano obrigatório de alocação econômica. Proposta de coordenação60 não ativa.'}];
export function extendHistoricalCountryCoverage17(entry:ReferenceEntry):ReferenceEntry{
 if(JSON.stringify(entry)!==JSON.stringify(historicalCoverage17LiveBefore))return entry;
 const sources=entry.sources.some(s=>s.title===source.title&&s.url===source.url)?[...entry.sources]:[...entry.sources,source];
 const result={...entry,sources,vec:{...entry.vec},evidence:{...entry.evidence},axisEvidence:{...entry.axisEvidence},coding:{...entry.coding}};
 for(const [axis,position,locator,statement,rationale,uncertainty]of rows){const c=codeReferenceAxis({axis,position,confidence:'medium',reviewedOn,rationale,uncertainty,...(axis==='imi'?{relatedQuestionIds:['imigracao_18']}:{}),claims:[{sourceTitle:source.title,locator,statement,basis:'norm',publishedDate:'1937-11-10',accessedDate:reviewedOn}]},sources);result.vec[axis]=c.value;result.evidence[axis]=c.evidence;result.axisEvidence[axis]=c.axisEvidence;result.coding[axis]=c.coding;}
 const axes:AxisKey[]=['est','rep','pod','imi','dip','int','eco','con','com','rel','mor','tec'];
 return Object.assign(result,{period:entry.period+'; ampliações: norma original de10/11/1937 e desenho transitório declarado.',caveats:'Fonte normativa original1937, não auditoria prática1937–1945. Transitoriedade centraliza apesar de federação/poderes locais formais. Eco desconhecido: iniciativa individual135 não demonstra direção de propriedade produtiva geral. Imi desconhecido: quota de admissão151 não estabelece orientação cultural geral. Propostas completas preservadas somente em pesquisa. Relativo secularismo com religião facultativa escolar133. CONcorporativo não inferido como planejamento integral; MOR/COM/DIP/INT/TEC não resolvidos.',documentaryReview17:{status:'author-reviewed-bounded-claims',independentReview:'accepted-bounded-primary-and-identity',reviewedOn,scope:'Dois acréscimos est/rel aceitos pelo Root após revisão independente; rep/pod preservados exatamente. Eco/imi rejeitados por amplitude e preservados somente em pesquisa. Sem prática ou emendas posteriores certificadas.'},unknownAxisReasons:Object.fromEntries(axes.filter(a=>!result.coding[a]).map(a=>[a,a==='con'?'Organização corporativa não estabelece por si programa obrigatório de alocação geral.':'Sem passagem suficiente para direção global deste eixo;50desconhecido.']))});
}
export const historicalCoverage17Audit={id:'brazil-estado-novo-1937',newAxes:['est','rel'],inheritedAxes:['rep','pod'],acceptedDocumentedAxes:4,independentReview:'accepted-bounded-primary-and-identity'}as const;
