import type { AxisKey, ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';
const reviewedOn = '2026-10-08';
/** Literal reviewed input; no original record or source is discarded. */
export const historicalCoverage14LiveBefore = {
  "id": "czechoslovakia-socialist-unitary-1960",
  "name": "Tchecoslováquia — República Socialista unitária",
  "aliases": [
    "Československá socialistická republika — ordem unitária"
  ],
  "period": "Carta socialista unitária, 1960–1968; federalização em vigor em 1º de janeiro de 1969; recorte adicional: Educação, cultura e religião na norma original1960, no recorte unitário1960–1968.",
  "rationale": "A edição original explicita Estado unitário, direção comunista, propriedade social predominante e planos nacionais obrigatórios.",
  "caveats": "É a ordem socialista de 1960 anterior à federação de 1969, distinta da Primeira República já registrada. A Primavera de Praga, invasão de 1968 e execução administrativa exigem revisão própria; as âncoras abaixo são constitucionais e não médias observadas. Ampliação documental: Educação, cultura e religião na norma original1960, no recorte unitário1960–1968. Sem auditoria integral da prática histórica. Passagens adicionais cotejadas independentemente; prática histórica não auditada integralmente.",
  "sources": [
    {
      "title": "Ústava Československé socialistické republiky, 1960 — Poslanecká sněmovna",
      "url": "https://www.psp.cz/docs/texts/constitution_1960.html",
      "note": "Transcrição primária oficial da Lei Constitucional nº 100/1960, de 11 de julho, edição original."
    },
    {
      "title": "Ústavní zákon o československé federaci, 1968 — Poslanecká sněmovna",
      "url": "https://www.psp.cz/docs/texts/constitution_1968.html",
      "note": "Lei nº 143/1968: artigo 1 institui federação; artigo 151(1) fixa entrada geral em vigor em 1º de janeiro de 1969."
    }
  ],
  "kind": "country",
  "category": "historical-country",
  "vec": {
    "est": 20,
    "rep": 20,
    "pod": 50,
    "imi": 40,
    "dip": 50,
    "int": 50,
    "eco": 80,
    "con": 80,
    "com": 50,
    "rel": 50,
    "mor": 50,
    "tec": 50
  },
  "evidence": {
    "est": "high",
    "rep": "medium",
    "eco": "high",
    "con": "high",
    "imi": "medium"
  },
  "axisEvidence": {
    "est": {
      "sourceTitles": [
        "Ústava Československé socialistické republiky, 1960 — Poslanecká sněmovna"
      ],
      "rationale": "Subordinação decisória e legislativa territorial sustenta direção unitária forte, além do simples título do Estado. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Conselho eslovaco e comitês locais mantêm atribuições. Não é descrição da federação posterior nem certificação de todas as alterações de 1968."
    },
    "rep": {
      "sourceTitles": [
        "Ústava Československé socialistické republiky, 1960 — Poslanecká sněmovna"
      ],
      "rationale": "Supremacia partidária constitucional limita a representação plural e sustenta direção autocrática no desenho formal. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Não imputamos fraude ou repressão eleitoral não examinada. Sufrágio declarado é contraponto; não avaliamos como a abertura de 1968 modificou a competição efetiva."
    },
    "eco": {
      "sourceTitles": [
        "Ústava Československé socialistické republiky, 1960 — Poslanecká sněmovna"
      ],
      "rationale": "Predomínio legal explícito de propriedade social nos setores centrais sustenta propriedade pública forte, sem confundi-la com propriedade de todo bem pessoal. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Sem inventário de ativos nem medição da composição econômica efetiva; cooperativas não são idênticas a propriedade administrativa estatal."
    },
    "con": {
      "sourceTitles": [
        "Ústava Československé socialistické republiky, 1960 — Poslanecká sněmovna"
      ],
      "rationale": "Planejamento vinculante multissetorial e integração orçamentária sustentam planejamento forte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Não mede cumprimento real ou discricionariedade empresarial, nem equivale a autarquia comercial."
    },
    "imi": {
      "sourceTitles": [
        "Ústava Československé socialistické republiky, 1960 — Poslanecká sněmovna"
      ],
      "rationale": "Garantia de línguas e culturas de minorias sustenta o polo multicultural moderado. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Minoridades cidadãs enumeradas, não política geral de entrada ou todas as nacionalidades; asilo art.33 é politicamente seletivo e deveres socialistas art.34 permanecem. Não presume execução."
    }
  },
  "coding": {
    "est": {
      "axis": "est",
      "position": "strong-second",
      "confidence": "high",
      "relatedQuestionIds": [
        "estrutura_01",
        "estrutura_05"
      ],
      "claims": [
        {
          "sourceTitle": "Ústava Československé socialistické republiky, 1960 — Poslanecká sněmovna",
          "locator": "Art. 1(2), 18, 41(3), 68 e 96",
          "statement": "Estado expressamente unitário e centralismo democrático; autoridades nacionais dirigem órgãos territoriais e podem anular decisões inferiores, inclusive leis do Conselho Nacional Eslovaco.",
          "basis": "norm",
          "publishedDate": "1960-07-11",
          "accessedDate": "2026-10-07"
        }
      ],
      "rationale": "Subordinação decisória e legislativa territorial sustenta direção unitária forte, além do simples título do Estado.",
      "uncertainty": "Conselho eslovaco e comitês locais mantêm atribuições. Não é descrição da federação posterior nem certificação de todas as alterações de 1968.",
      "reviewedOn": "2026-10-07",
      "version": "editorial-ordinal-v1",
      "value": 20,
      "range": [
        10,
        25
      ]
    },
    "rep": {
      "axis": "rep",
      "position": "strong-second",
      "confidence": "medium",
      "relatedQuestionIds": [
        "representacao_01",
        "representacao_15"
      ],
      "claims": [
        {
          "sourceTitle": "Ústava Československé socialistické republiky, 1960 — Poslanecká sněmovna",
          "locator": "Art. 3–6",
          "statement": "A carta declara sufrágio universal e atribui ao Partido Comunista papel dirigente; a Frente Nacional é dirigida pelo partido.",
          "basis": "norm",
          "publishedDate": "1960-07-11",
          "accessedDate": "2026-10-07"
        }
      ],
      "rationale": "Supremacia partidária constitucional limita a representação plural e sustenta direção autocrática no desenho formal.",
      "uncertainty": "Não imputamos fraude ou repressão eleitoral não examinada. Sufrágio declarado é contraponto; não avaliamos como a abertura de 1968 modificou a competição efetiva.",
      "reviewedOn": "2026-10-07",
      "version": "editorial-ordinal-v1",
      "value": 20,
      "range": [
        10,
        25
      ]
    },
    "eco": {
      "axis": "eco",
      "position": "strong-first",
      "confidence": "high",
      "claims": [
        {
          "sourceTitle": "Ústava Československé socialistické republiky, 1960 — Poslanecká sněmovna",
          "locator": "Art. 7–10",
          "statement": "Propriedade estatal e cooperativa formam a base econômica; grandes setores são sociais. Pequena atividade pessoal e bens pessoais permanecem permitidos.",
          "basis": "norm",
          "publishedDate": "1960-07-11",
          "accessedDate": "2026-10-07"
        }
      ],
      "rationale": "Predomínio legal explícito de propriedade social nos setores centrais sustenta propriedade pública forte, sem confundi-la com propriedade de todo bem pessoal.",
      "uncertainty": "Sem inventário de ativos nem medição da composição econômica efetiva; cooperativas não são idênticas a propriedade administrativa estatal.",
      "reviewedOn": "2026-10-07",
      "version": "editorial-ordinal-v1",
      "value": 80,
      "range": [
        75,
        90
      ]
    },
    "con": {
      "axis": "con",
      "position": "strong-first",
      "confidence": "high",
      "claims": [
        {
          "sourceTitle": "Ústava Československé socialistické republiky, 1960 — Poslanecká sněmovna",
          "locator": "Art. 7, 12, 41(1) e 90",
          "statement": "Desenvolvimento econômico segue planos vinculantes; planos de cinco anos têm aprovação legislativa e orçamentos locais se articulam ao planejamento estatal.",
          "basis": "norm",
          "publishedDate": "1960-07-11",
          "accessedDate": "2026-10-07"
        }
      ],
      "rationale": "Planejamento vinculante multissetorial e integração orçamentária sustentam planejamento forte.",
      "uncertainty": "Não mede cumprimento real ou discricionariedade empresarial, nem equivale a autarquia comercial.",
      "reviewedOn": "2026-10-07",
      "version": "editorial-ordinal-v1",
      "value": 80,
      "range": [
        75,
        90
      ]
    },
    "imi": {
      "axis": "imi",
      "position": "moderate-second",
      "confidence": "medium",
      "rationale": "Garantia de línguas e culturas de minorias sustenta o polo multicultural moderado.",
      "uncertainty": "Minoridades cidadãs enumeradas, não política geral de entrada ou todas as nacionalidades; asilo art.33 é politicamente seletivo e deveres socialistas art.34 permanecem. Não presume execução.",
      "relatedQuestionIds": [
        "imigracao_02",
        "imigracao_08"
      ],
      "reviewedOn": "2026-10-07",
      "claims": [
        {
          "sourceTitle": "Ústava Československé socialistické republiky, 1960 — Poslanecká sněmovna",
          "locator": "Art.25; limites arts.33–34",
          "statement": "Estado garante a cidadãos de nacionalidades húngara, ucraniana e polonesa meios para educação na língua materna e desenvolvimento cultural.",
          "basis": "norm",
          "publishedDate": "1960-07-11",
          "accessedDate": "2026-10-07"
        }
      ],
      "version": "editorial-ordinal-v1",
      "value": 40,
      "range": [
        30,
        45
      ]
    }
  },
  "documentaryReview": {
    "status": "author-reviewed-bounded-claims",
    "reviewedOn": "2026-10-07",
    "independentReview": "accepted-bounded-primary-claims",
    "scope": "Educação, cultura e religião na norma original1960, no recorte unitário1960–1968."
  },
  "unknownAxisReasons": {
    "pod": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
    "dip": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
    "int": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
    "com": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
    "rel": "Currículo científico marxista e consciência privada16/24/32 não estabelecem relação geral Estado/religião; sem inferir separação. Pesquisa preservada.",
    "mor": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.",
    "tec": "As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação."
  },
  "identityOrigin": {
    "disposition": "new-historical-unit",
    "distinctness": "Regime socialista e carta unitária de 1960; distinto da Primeira República; encerra-se o recorte unitário com a federação de 1969."
  },
  "codingScope": "Carta socialista unitária, 1960–1968; federalização em vigor em 1º de janeiro de 1969"
} as const;
export const historicalCoverage14QuarantinedResearch={coding:historicalCoverage14LiveBefore.coding.imi,axisEvidence:historicalCoverage14LiveBefore.axisEvidence.imi,evidence:historicalCoverage14LiveBefore.evidence.imi,value:historicalCoverage14LiveBefore.vec.imi,reason:'Art25 nomeia três minorias; proteção desse subconjunto não estabelece programa cultural plural geral. Pesquisa íntegra, imi50 desconhecido sem campos ativos.'} as const;
const primary:ReferenceSource={title:'Ústava1960 — PSP, igualdade civil familiar laboral20/27',url:'https://www.psp.cz/docs/texts/constitution_1960.html',note:'Texto primário oficial original100/1960 realmente reaberto/lido19–38; passagens20/26–27 cotejadas para mor. Não prática social integral1960–1968.'};
const additions:ReferenceAxisCoding[]=[{axis:'mor',position:'moderate-first',confidence:'medium',reviewedOn,rationale:'Igualdade entre sexos na família, trabalho e vida pública, com garantias de oportunidades e participação, sustenta progressismo normativo moderado.',uncertainty:'26protege casamento/maternidade/família;34/38impõem deveres para sociedade socialista.27proteção maternal não demonstra igual execução ou autonomia reprodutiva; não divórcio/LGBT inferidos.',claims:[{sourceTitle:primary.title,locator:'Arts.20(3–4),27;contrapontos26,34,38',statement:'Homens e mulheres têm igual posição familiar, laboral e pública e oportunidades em toda vida social; condições laborais, maternidade e serviços devem garantir participação feminina.',basis:'norm',publishedDate:'1960-07-11',accessedDate:reviewedOn}]}];
/** Applies only to reviewed baseline; repeated application and later useful coding survive. */
export function extendHistoricalCountryCoverage14(entry: ReferenceEntry): ReferenceEntry {
 if(entry.id!=='czechoslovakia-socialist-unitary-1960') return entry;
 for(const inherited of ['est','rep','eco','con','imi'] as const) if(JSON.stringify(entry.coding?.[inherited])!==JSON.stringify(historicalCoverage14LiveBefore.coding[inherited])) return entry;
 for(const addition of additions) if(entry.coding?.[addition.axis]||entry.evidence[addition.axis]||entry.axisEvidence?.[addition.axis]||entry.vec[addition.axis]!==50) return entry;
 const sources=[...entry.sources];
 for(const extra of [primary]) if(!sources.some(s=>s.title===extra.title&&s.url===extra.url)) sources.push(extra);
 const oldReasons=(entry as ReferenceEntry & {unknownAxisReasons?:Partial<Record<AxisKey,string>>}).unknownAxisReasons;
 const result={...entry,sources,vec:{...entry.vec},evidence:{...entry.evidence},axisEvidence:{...entry.axisEvidence},coding:{...entry.coding},unknownAxisReasons:{...oldReasons}};
 delete result.coding.imi;delete result.evidence.imi;delete result.axisEvidence.imi;result.vec.imi=50;result.unknownAxisReasons.imi='Art25 protege três minorias nomeadas, alcance insuficiente para direção cultural geral; pesquisa preservada no arquivo14.';
 if(result.coding.est){result.coding.est={...result.coding.est,claims:result.coding.est.claims.map(claim=>({...claim,locator:claim.locator.replace('41(3)','41(2)')}))};}
 for(const addition of additions){const coded=codeReferenceAxis(addition,sources);result.vec[addition.axis]=coded.value;result.evidence[addition.axis]=coded.evidence;result.axisEvidence[addition.axis]=coded.axisEvidence;result.coding[addition.axis]=coded.coding;delete result.unknownAxisReasons[addition.axis];}
 return Object.assign(result,{documentaryReview14:{status:'author-reviewed-bounded-claims',independentReview:'accepted-bounded-primary-claims',reviewedOn,scope:'Norma1960: mor aceito; est/rep/eco/con cotejados; locator est41(2)corrigido. Imi herdado rejeitado por alcance de três minorias, integralmente arquivado. Não prática social integral.'},caveats:'Carta unitária1960–1968; não prática social integral. Imi25protege somente três minorias nomeadas, insuficiente para direção cultural geral. Rel16/24/32não estabelece separação religiosa. Ampliação14: mor descreve igualdade abrangente familiar/laboral/pública20/27no original1960, com família tradicional26 e deveres socialistas34/38. Não prática social ou direitos contemporâneos.'});
}
export const historicalCoverage14Audit={id:'czechoslovakia-socialist-unitary-1960',newAxes:['mor'],inheritedAxes:['est','rep','eco','con','imi'],candidateDocumentedAxes:5,identityAdditions:0,independentReview:'accepted-bounded-primary-claims'} as const;
