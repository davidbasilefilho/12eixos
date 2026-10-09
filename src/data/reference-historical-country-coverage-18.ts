import type {AxisKey,ReferenceEntry,ReferenceSource} from './references';
import {codeReferenceAxis,type ReferenceAxisCoding} from '../lib/reference-coding';
const axes:AxisKey[]=['est','rep','pod','imi','dip','int','eco','con','com','rel','mor','tec'];
export const historicalCoverage18Before:ReferenceEntry={
  "id": "italy-postwar-republic",
  "kind": "country",
  "category": "historical-country",
  "name": "Itália — Primeira República",
  "period": "República parlamentar do pós-guerra, 1948–1992",
  "vec": {
    "est": 50,
    "rep": 90,
    "pod": 50,
    "imi": 50,
    "dip": 50,
    "int": 50,
    "eco": 68,
    "con": 57,
    "com": 50,
    "rel": 50,
    "mor": 67,
    "tec": 50
  },
  "rationale": "Constituição democrática e direitos sociais estruturaram a república parlamentar.",
  "caveats": "Recorte institucional datado; não representa a população, povos subordinados nem governos fora do período. Coalizões e políticas mudaram; o vetor não presume unidade ao longo de décadas. Eixos sem evidência suficiente permanecem em 50 como desconhecidos.",
  "sources": [
    {
      "title": "Constituição da República Italiana (1948)",
      "url": "https://www.senato.it/istituzione/la-costituzione",
      "note": "Documento primário ou registro de arquivo relacionado ao período República parlamentar do pós-guerra, 1948–1992; codificamos somente posições expressas ou instituições descritas."
    },
    {
      "title": "Camera dei Deputati — Assembleia Constituinte",
      "url": "https://storia.camera.it/istituzione/assemblea-costituente",
      "note": "Contexto de arquivo ou instituição histórica para delimitar duração, prática e limites do documento formal."
    }
  ],
  "evidence": {
    "rep": "high",
    "eco": "medium",
    "con": "medium",
    "mor": "medium"
  },
  "axisEvidence": {
    "rep": {
      "sourceTitles": [
        "Constituição da República Italiana (1948)",
        "Camera dei Deputati — Assembleia Constituinte"
      ],
      "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 90."
    },
    "eco": {
      "sourceTitles": [
        "Constituição da República Italiana (1948)",
        "Camera dei Deputati — Assembleia Constituinte"
      ],
      "rationale": "O documento descreve extensão de propriedade pública, provisão ou coordenação estatal, sustentando 68."
    },
    "con": {
      "sourceTitles": [
        "Constituição da República Italiana (1948)",
        "Camera dei Deputati — Assembleia Constituinte"
      ],
      "rationale": "A fonte documenta direção estatal da economia ou coordenação por mercado, sustentando 57."
    },
    "mor": {
      "sourceTitles": [
        "Constituição da República Italiana (1948)",
        "Camera dei Deputati — Assembleia Constituinte"
      ],
      "rationale": "A fonte registra extensão ou restrição de direitos e igualdade no período, sustentando 67."
    }
  }
};

const title='Constituição italiana — Gazette original27/12/1947, versão1';
const constitutional:ReferenceSource={title,url:'https://www.gazzettaufficiale.it/atto/vediMenuHTML?atto.codiceRedazionale=047U0001&atto.dataPubblicazioneGazzetta=1947-12-27&tipoSerie=serie_generale&tipoVigenza=originario',note:'Fonte oficial original selecionada e artigos HTML caricaArticolo versão1 efetivamente lidos, não consolidado atual. Arts1/3/5/7–8/11/13–15/17–18/21/24–25/27/29–30/37/48–49/52/55–56/58–59/78/94/116–119/122–123/126–128 e transiçõesXII/XVIII. Scan16p abriu sem texto/imagem certificável; curl403, nenhum cotejo fac-símile alegado.'};
const pactTitle='Pactos lateranenses1929 — texto primário Vaticano';
const pacts:ReferenceSource={title:pactTitle,url:'https://press.vatican.va/roman_curia/secretariat_state/archivio/documents/rc_seg-st_19290211_patti-lateranensi_it.html',note:'Corpo treaty1–27 e concordato1–45 efetivamente recuperado/lido como contraponto contextual e base de relação religiosa remetida pela Constituição7. Inclui religião estatal treaty1, efeitos conjugais34 e doutrina em educação pública36. Não vigência uniforme até1992 ou texto revisado1984; não transpor rei/corporações fascistas à República.'};
const claim=(locator:string,statement:string)=>({sourceTitle:title,locator,statement,basis:'norm' as const,publishedDate:'1947-12-27; vigência1948-01-01',accessedDate:'2026-10-08'});
const rows:ReferenceAxisCoding[]=[
 {axis:'est',position:'moderate-first',confidence:'medium',reviewedOn:'2026-10-08',claims:[claim('117–119/122–123;contrapontos5/116/126–128','Regiões têm legislação própria em matérias enumeradas, patrimônio/tributos e direção governamental eleita por conselhos.')],rationale:'Autonomia política, legislativa e fiscal regional além de delegação de serviços sustenta descentralização moderada.',uncertainty:'República una5, competências dentro de princípios estatais e interesses nacionais117; estatutos aprovados por lei nacional123, dissolução126 e oposição/remessa de leis127. Estados especiais116, sem execução imediata integral ou emendas posteriores.'},
 {axis:'rep',position:'moderate-first',confidence:'medium',reviewedOn:'2026-10-08',claims:[claim('48–49/55–56/58/94;contrapontos59/transitóriaXII','Voto igual secreto de homens e mulheres, partidos livres por método democrático, câmaras diretamente eleitas e governo dependente da confiança de ambas.')],rationale:'Escolha plural renovável e responsabilidade parlamentar sustentam democracia normativa moderada.',uncertainty:'Senado exige eleitor acima25/candidato40, Câmara25; senadores vitalícios59, restrições civis/penais/morais48 e proibição fascista/transiçãoXII. Não comprova prática de todas coalizões1948–1992.'},
 {axis:'pod',position:'moderate-second',confidence:'medium',reviewedOn:'2026-10-08',claims:[claim('13–15/17–18/21/24–25/27;contrapontos52/78/transitóriaXII','Protege liberdade, privacidade, expressão sem censura, defesa em todos estágios e presunção até condenação definitiva.')],rationale:'Garantias ordinárias gerais com controle judicial sustentam liberdade normativa moderada.',uncertainty:'Detenção urgente13com48+48horas de controle, inspeções especiais14, segurança de reuniões17, associaçõessecretas/militares18 e moralidade pública21. Preventiva13, medidassegurança25, pena de morte militar de guerra27, serviço militar52 e poderesguerra78, sem prática criminal uniformemente auditada.'},
 {axis:'dip',position:'moderate-second',confidence:'medium',reviewedOn:'2026-10-08',claims:[claim('11;contrapontos52/78','Repudia guerra ofensiva à liberdade alheia e como resolução de controvérsias, favorecendo organização internacional pacífica.')],rationale:'Política nacional expressa de renúncia à guerra agressiva sustenta pacifismo normativo moderado.',uncertainty:'Defesa sagrada/serviço militar obrigatório52 e deliberação parlamentar de guerra/poderes necessários78. Não ausência de exército, intervenção ou prática de política externa1948–1992.'},
 {axis:'rel',position:'moderate-second',confidence:'medium',reviewedOn:'2026-10-08',claims:[claim('7–8','Relação com Igreja católica regulada por Pactos Lateranenses, mantendo distinção de ordens e livre organização de outras confissões.'),{sourceTitle:pactTitle,locator:'Tratado1;Concordato34/36',statement:'Pactos vinculam confissão estatal, efeitos civis matrimoniais e doutrina católica na instrução pública.',basis:'norm',publishedDate:'1929-02-11; remissão constitucional1947art7',accessedDate:'2026-10-08'}],rationale:'Vínculo confessional amplo remetido em1948 sustenta proposta religiosa moderada, com independência de ordens.',uncertainty:'Constituição7declara Estado e Igreja independentes/soberanos e8igual liberdade religiosa; não simples teocracia. Não direção uniforme1948–1992: revisão1984e jurisprudência subsequente precisam camada distinta, não lidas integralmente aqui. Conflitos constitucionais e remissão não tornam todo dispositivo monárquico/fascista vigente automaticamente.'},
 {axis:'mor',position:'moderate-second',confidence:'medium',reviewedOn:'2026-10-08',claims:[claim('29–30/37;contrapontos3/48','Família natural fundada no casamento e unidade familiar limitam igualdade conjugal; tutela não matrimonial compatível com família legítima e função feminina familiar essencial.')],rationale:'Direção familiar tradicional expressa em casamento, filiação e função feminina sustenta proposta conservadora moderada, além de uma ocorrência setorial.',uncertainty:'Igualdade moral/jurídica dos cônjuges29, dever de ambos os pais inclusive filhos não matrimoniais30, igualdade sexual3/voto48 e direitos/pagamento laboral37. Não indissolubilidade, papel exclusivamente doméstico ou prática de direitos1970/1975 presumidos. Direção aceita em amplitude delimitada após revisão independente; não prática integral.'},
];
export function extendHistoricalCountryCoverage18(entry:ReferenceEntry):ReferenceEntry {
 if(JSON.stringify(entry)!==JSON.stringify(historicalCoverage18Before))return entry;
 const sources=[...entry.sources,constitutional,pacts];
 const result:ReferenceEntry={...entry,sources,vec:Object.fromEntries(axes.map(a=>[a,50])) as Record<AxisKey,number>,evidence:{},axisEvidence:{},coding:{},period:'República parlamentar do pós-guerra1948–1992; recorte codificado: norma original27/12/1947 vigente01/01/1948, não versões posteriores',rationale:'Snapshot normativo fundador da República parlamentar; estimativas legadas e fontes preservadas integralmente no arquivo before. Nenhum código deriva automaticamente de direitos sociais ou permissão econômica.',caveats:'Normas originais datadas, não média1948–1992 ou hoje. Regionalização tem competência legislativa e fiscal própria, controles nacionais significativos e execução não auditada. Tratado1929 referido não presume continuidade religiosa após revisão1984. Família/cônjuges e filiação têm reformas e limites severos em conflito, ambos preservados. Scan original e download não foram cotejados com êxito; HTML oficial originalversão1 efetivamente lido. Seis direções normativas aceitas pelo Root após leitura independente selecionada; não prática integral ou versões posteriores.'};
 for(const row of rows){const c=codeReferenceAxis(row,sources);result.vec[row.axis]=c.value;result.evidence![row.axis]=c.evidence;result.axisEvidence![row.axis]=c.axisEvidence;result.coding![row.axis]=c.coding;}
 return Object.assign(result,{documentaryReview18:{status:'accepted-bounded-whole-profile',independentReview:'accepted-six-selected-primary-claims',reviewedOn:'2026-10-08',scope:'Root aceitou seis normas após revisão independente: Gazetteversão1 arts3/5/7–8/11/13–15/17–18/21/24–25/27/29–30/37/48–49/52/55–56/58–59/78/94/116–119/122–123/126–128 eXII/XVIII; VaticanoTratado1/Concordato34/36. Sem scan integral, versões1984 ou todo139artigos.'},unknownAxisReasons:Object.fromEntries(axes.filter(a=>!result.coding?.[a]).map(a=>[a,'Fonte primária selecionada não estabelece direção suficientemente ampla para este eixo. Legado arquivado integralmente; 50 sem graduação/mapa/código.']))});
}
export const historicalCoverage18Audit={id:'italy-postwar-republic',acceptedNormAxes:6,unknownAxes:6,independentReview:'accepted-six-selected-primary-claims'}as const;
