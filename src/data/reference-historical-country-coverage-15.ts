import type {AxisKey,ReferenceEntry,ReferenceSource} from './references';
import {codeReferenceAxis,type ReferenceAxisCoding} from '../lib/reference-coding';
const reviewedOn='2026-10-08';
/** Complete reviewed input, preserved before enrichment. */
export const historicalCoverage15LiveBefore={
  "id": "chile-pinochet-1973",
  "kind": "country",
  "category": "historical-country",
  "name": "Chile — ditadura de Pinochet",
  "period": "Regime militar, 1973–1990; recorte codificado: Primeiro período transitório1981–1989 da carta1980; não toda ditadura1973–1990 nem transição posterior.",
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
  "caveats": "Prática repressiva e transformação econômica requerem fontes próprias: não são deduzidas desta norma. Não estende dispositivos transitórios a todo período ou ao Chile democrático.",
  "sources": [
    {
      "title": "Augusto Pinochet Ugarte — Memoria Chilena, Biblioteca Nacional de Chile",
      "url": "https://www.memoriachilena.gob.cl/602/w3-article-31395.html",
      "note": "Cronologia oficial do golpe, regime, modelo econômico, plebiscitos e transferência de poder em 1990."
    },
    {
      "title": "Violación a los derechos humanos — Memoria Chilena",
      "url": "https://www.memoriachilena.gob.cl/602/w3-article-92415.html",
      "note": "Arquivo histórico documenta detenções, tortura, assassinatos e órgãos repressivos estatais."
    },
    {
      "title": "Constitución1980, Decreto1150 — Biblioteca del Congreso Nacional, texto original",
      "url": "https://www.bcn.cl/leychile/navegar?idNorma=17039",
      "note": "Decreto1150 de24outubro1980 e disposições transitórias; não consolidação moderna após reformas."
    }
  ],
  "evidence": {
    "rep": "medium",
    "pod": "medium"
  },
  "axisEvidence": {
    "rep": {
      "sourceTitles": [
        "Constitución1980, Decreto1150 — Biblioteca del Congreso Nacional, texto original"
      ],
      "rationale": "Concentração militar-executiva e suspensão representativa sustentam autocracia forte normativa. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Plebiscito e futura eleição após rejeição são contrapontos; não inferimos resultado1988 só da norma."
    },
    "pod": {
      "sourceTitles": [
        "Constitución1980, Decreto1150 — Biblioteca del Congreso Nacional, texto original"
      ],
      "rationale": "Coerção ampla e impedimento de controle judicial sustentam orientação forte à segurança/restrição. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Poderes excepcionais condicionados não quantificam uso real; garantias permanentes da carta são contrapontos."
    }
  },
  "coding": {
    "rep": {
      "axis": "rep",
      "position": "strong-second",
      "confidence": "medium",
      "rationale": "Concentração militar-executiva e suspensão representativa sustentam autocracia forte normativa.",
      "uncertainty": "Plebiscito e futura eleição após rejeição são contrapontos; não inferimos resultado1988 só da norma.",
      "reviewedOn": "2026-10-07",
      "claims": [
        {
          "sourceTitle": "Constitución1980, Decreto1150 — Biblioteca del Congreso Nacional, texto original",
          "locator": "Disposições transitórias13–14,18,21 e27–29",
          "statement": "Pinochet mantém Presidência; Junta exerce legislação e Congresso fica suspenso; candidato único proposto para plebiscito e transição futura condicionada.",
          "basis": "norm",
          "publishedDate": "1980-10-24; vigência inicial1981",
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
      "confidence": "medium",
      "rationale": "Coerção ampla e impedimento de controle judicial sustentam orientação forte à segurança/restrição.",
      "uncertainty": "Poderes excepcionais condicionados não quantificam uso real; garantias permanentes da carta são contrapontos.",
      "reviewedOn": "2026-10-07",
      "claims": [
        {
          "sourceTitle": "Constitución1980, Decreto1150 — Biblioteca del Congreso Nacional, texto original",
          "locator": "Disposição transitória24(a–d) e parágrafo final",
          "statement": "Exceção renovável permite detenção, restrição de reuniões/publicações, expulsão e residência compulsória, sem recurso judicial ordinário contra medidas.",
          "basis": "norm",
          "publishedDate": "1980-10-24; vigência inicial1981",
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
    "scope": "Primeiro período transitório1981–1989 da carta1980; não toda ditadura1973–1990 nem transição posterior."
  },
  "unknownAxisReasons": {
    "est": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Prática repressiva e transformação econômica requerem fontes próprias: não são deduzidas desta norma. Não estende dispositivos transitórios a todo período ou ao Chile democrático.",
    "imi": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Prática repressiva e transformação econômica requerem fontes próprias: não são deduzidas desta norma. Não estende dispositivos transitórios a todo período ou ao Chile democrático.",
    "dip": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Prática repressiva e transformação econômica requerem fontes próprias: não são deduzidas desta norma. Não estende dispositivos transitórios a todo período ou ao Chile democrático.",
    "int": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Prática repressiva e transformação econômica requerem fontes próprias: não são deduzidas desta norma. Não estende dispositivos transitórios a todo período ou ao Chile democrático.",
    "eco": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Prática repressiva e transformação econômica requerem fontes próprias: não são deduzidas desta norma. Não estende dispositivos transitórios a todo período ou ao Chile democrático.",
    "con": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Prática repressiva e transformação econômica requerem fontes próprias: não são deduzidas desta norma. Não estende dispositivos transitórios a todo período ou ao Chile democrático.",
    "com": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Prática repressiva e transformação econômica requerem fontes próprias: não são deduzidas desta norma. Não estende dispositivos transitórios a todo período ou ao Chile democrático.",
    "rel": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Prática repressiva e transformação econômica requerem fontes próprias: não são deduzidas desta norma. Não estende dispositivos transitórios a todo período ou ao Chile democrático.",
    "mor": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Prática repressiva e transformação econômica requerem fontes próprias: não são deduzidas desta norma. Não estende dispositivos transitórios a todo período ou ao Chile democrático.",
    "tec": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Prática repressiva e transformação econômica requerem fontes próprias: não são deduzidas desta norma. Não estende dispositivos transitórios a todo período ou ao Chile democrático."
  }
} as const;
const declaration:ReferenceSource={title:'Declaração de princípios do governo chileno,11março1974 — republicação ArchivoChile',url:'https://archivochile.com/Dictadura_militar/doc_jm_gob_pino8/DMdocjm0005.pdf',note:'Transcrição primária espanhola12p realmente aberta/lida integralmente. CEME é repositório privado com orientação política própria, não fac-símile governamental. Documento é programa declarado1974, não prova de execução econômica/social. Suposto paraleloMemoriaMC0056797 é discurso1977 e não foi usado como esta declaração.'};
const constitution:ReferenceSource={title:'Constitución1980, Decreto1150 — Biblioteca del Congreso Nacional, texto original',url:'https://www.bcn.cl/leychile/navegar?idNorma=17039',note:'Texto primário oficial realmente reaberto/lido3/99–115; versão original com intendentes presidenciais, não redações1991/2005. OCR possui erros; não cotejo integral do fac-símile.'};
type Row=[AxisKey,ReferenceAxisCoding['position'],string,string,string,string,ReferenceSource,'norm'|'declaration',string];
const rows:Row[]=[
['est','moderate-second','Art3;99–115','Estado unitário; intendentes presidenciais governam regiões sob ordens nacionais, com governadores subordinados.','Hierarquia nacional explícita sustenta unitarismo moderado.','3propõe descentralização; conselhos aprovam planos/orçamentos e municípios têm personalidade/patrimônio próprios107. Não prática administrativa ou ausência de autonomia local.',constitution,'norm','1980-10-24'],
['eco','moderate-second','II5;III7,pp3–4/9','Programa prioriza iniciativa e propriedade privadas produtivas, reservando ao Estado bens estratégicos/vitais.','Prioridade geral privada expressa, além de mero direito formal, sustenta direção moderada.','SubsidiariedadeII4 admite ação estatal quando privados falham; propriedade tem função social. Não participação patrimonial real ou execução das privatizações.',declaration,'declaration','1974-03-11'],
['con','moderate-first','II5;III2/7,pp3–4/9','Programa requer sistema nacional de planos coordenados e planejamento econômico estatal, combinado com iniciativa privada.','Programa nacional explícito de coordenação por planos sustenta orientação planejadora moderada; contrapontos de mercado delimitam intensidade.','Consumidor deve orientar economia, competição é assegurada e plano respeita subsidiariedade. Não cotas obrigatórias de toda empresa, preços administrados ou plano executado; contraponto substancial de mercado.',declaration,'declaration','1974-03-11'],
['imi','moderate-first','III1/7/8,pp4/10–11','Educação geral deve reforçar raízes nacionais; programa afirma homogeneidade cultural e rejeita invasão estrangeirizante.','Programa cultural educativo geral de integração homogênea sustenta assimilação moderada, não apenas nacionalismo abstrato.','Liberdade de ensino/consciência e relações com outras culturas preservadas no programa; não política de fronteiras ou eficácia assimiladora.',declaration,'declaration','1974-03-11']
];
/** Expected baseline guards preserve later useful coding and make composition idempotent. */
export function extendHistoricalCountryCoverage15(entry:ReferenceEntry):ReferenceEntry {
 if(entry.id!==historicalCoverage15LiveBefore.id)return entry;
 for(const axis of ['rep','pod'] as const)if(JSON.stringify(entry.coding?.[axis])!==JSON.stringify(historicalCoverage15LiveBefore.coding[axis]))return entry;
 for(const [axis] of rows)if(entry.vec[axis]!==50||entry.evidence[axis]||entry.axisEvidence?.[axis]||entry.coding?.[axis])return entry;
 const sources=[...entry.sources];for(const source of [declaration,constitution])if(!sources.some(s=>s.title===source.title&&s.url===source.url))sources.push(source);
 const prior=entry as ReferenceEntry & {unknownAxisReasons?:Partial<Record<AxisKey,string>>};
 const result={...entry,sources,vec:{...entry.vec},evidence:{...entry.evidence},axisEvidence:{...entry.axisEvidence},coding:{...entry.coding},unknownAxisReasons:{...prior.unknownAxisReasons}};
 for(const [axis,position,locator,statement,rationale,uncertainty,source,basis,publishedDate]of rows){const c=codeReferenceAxis({axis,position,confidence:'medium',reviewedOn,rationale,uncertainty,...(axis==='imi'?{relatedQuestionIds:['imigracao_02','imigracao_08']}:{}),claims:[{sourceTitle:source.title,locator,statement,basis,publishedDate,accessedDate:reviewedOn}]},sources);result.vec[axis]=c.value;result.evidence[axis]=c.evidence;result.axisEvidence[axis]=c.axisEvidence;result.coding[axis]=c.coding;delete result.unknownAxisReasons[axis];}
 return Object.assign(result,{period:entry.period+'; eco/con/imi: programa de 11/03/1974; est: texto original de 24/10/1980, vigência inicial 1981.',caveats:'Escopos distintos por eixo: eco/con/imi programa declarado1974; est norma1980; rep/pod disposições transitórias1981–1989 previamente codificadas. Não vetor de prática uniforme1973–1990 nem descrição contemporânea. Rel filosofia cristã não estabelece relação estatal geral; mor papel familiar isolado insuficiente; dip/int/com/tec sem direção suficiente.',documentaryReview15:{status:'author-reviewed-bounded-claims',independentReview:'accepted-bounded-primary-and-identity',reviewedOn,scope:'Revisor independente leu declaração1974 e norma original1980 nas passagens codificadas, recomendando quatro acréscimos e recertificando rep/pod normativos. Root aceita os seis recortes normativos/programáticos delimitados; nenhuma prática integral ou fac-símile governamental1974 certificado.'}});
}
export const historicalCoverage15Audit={id:'chile-pinochet-1973',identityAdditions:0,newAxes:['est','eco','con','imi'],inheritedAxes:['rep','pod'],acceptedDocumentedAxes:6,independentReview:'accepted-bounded-primary-and-identity'} as const;
