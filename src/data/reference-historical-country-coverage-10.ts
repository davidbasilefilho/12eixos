import type { AxisKey, ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';
const reviewedOn = '2026-10-08';
/** Literal reviewed input; no original record or source is discarded. */
export const historicalCoverage10LiveBefore = {
  "id": "weimar-republic",
  "kind": "country",
  "category": "historical-country",
  "name": "República de Weimar",
  "period": "Constituição de 1919, 1919–1933; recorte codificado: Texto fundador de 1919; duração da República 1919–1933 não é prática inalterada.",
  "vec": {
    "est": 60,
    "rep": 60,
    "pod": 50,
    "imi": 50,
    "dip": 50,
    "int": 50,
    "eco": 50,
    "con": 50,
    "com": 50,
    "rel": 60,
    "mor": 50,
    "tec": 50
  },
  "rationale": "Inferências documentais delimitadas recodificadas pelo protocolo ordinal; o vetor anterior e suas fontes foram preservados no módulo de reconciliação.",
  "caveats": "Democracia e federalismo são inferências normativas delimitadas. Emergência versus garantias impede resolver pod sem prática; igualdade civil não autoriza imputar todo eixo mor atual. Economia, cultura, guerra e tecnologia permanecem desconhecidas.",
  "sources": [
    {
      "title": "The Weimar Constitution (August 11, 1919) — German History in Documents and Images",
      "url": "https://germanhistorydocs.org/en/weimar-germany-1918-1933/the-weimar-constitution-august-11-1919",
      "note": "Fonte primária traduzida e contexto acadêmico: república, federalismo, sufrágio universal, parlamento, direitos e cores nacionais."
    }
  ],
  "evidence": {
    "est": "high",
    "rep": "high",
    "rel": "medium"
  },
  "axisEvidence": {
    "est": {
      "sourceTitles": [
        "The Weimar Constitution (August 11, 1919) — German History in Documents and Images"
      ],
      "rationale": "Competências estaduais e representação territorial sustentam federalismo moderado. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Primazia nacional e poderes centrais impedem equiparar a confederação soberana; prática não auditada."
    },
    "rep": {
      "sourceTitles": [
        "The Weimar Constitution (August 11, 1919) — German History in Documents and Images"
      ],
      "rationale": "Instituições eletivas sustentam democracia moderada com contrapoder presidencial explícito. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não certifica eleições e prática durante crises finais; artigo48 impede inferência irrestrita."
    },
    "rel": {
      "sourceTitles": [
        "The Weimar Constitution (August 11, 1919) — German History in Documents and Images"
      ],
      "rationale": "Separação institucional expressa sustenta laicidade moderada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Seleção não cobre todos os privilégios fiscais das igrejas ou prática; não presume irreligiosidade popular."
    }
  },
  "coding": {
    "est": {
      "axis": "est",
      "position": "moderate-first",
      "confidence": "high",
      "rationale": "Competências estaduais e representação territorial sustentam federalismo moderado.",
      "uncertainty": "Primazia nacional e poderes centrais impedem equiparar a confederação soberana; prática não auditada.",
      "reviewedOn": "2026-10-07",
      "claims": [
        {
          "sourceTitle": "The Weimar Constitution (August 11, 1919) — German History in Documents and Images",
          "locator": "Arts. 5, 12, 60–63 e 74",
          "statement": "Estados exercem poderes próprios e participam da legislação nacional; competências do Reich e intervenção central limitam autonomia.",
          "basis": "norm",
          "publishedDate": "1919-08-11",
          "accessedDate": "2026-10-07"
        }
      ],
      "version": "editorial-ordinal-v1",
      "value": 60,
      "range": [
        55,
        70
      ]
    },
    "rep": {
      "axis": "rep",
      "position": "moderate-first",
      "confidence": "high",
      "rationale": "Instituições eletivas sustentam democracia moderada com contrapoder presidencial explícito.",
      "uncertainty": "Não certifica eleições e prática durante crises finais; artigo48 impede inferência irrestrita.",
      "reviewedOn": "2026-10-07",
      "claims": [
        {
          "sourceTitle": "The Weimar Constitution (August 11, 1919) — German History in Documents and Images",
          "locator": "Arts. 17, 22, 41, 48, 50 e 54",
          "statement": "Voto igual de homens e mulheres, representação proporcional e confiança parlamentar coexistem com Presidência forte e emergência controlável pelo Reichstag.",
          "basis": "norm",
          "publishedDate": "1919-08-11",
          "accessedDate": "2026-10-07"
        }
      ],
      "version": "editorial-ordinal-v1",
      "value": 60,
      "range": [
        55,
        70
      ]
    },
    "rel": {
      "axis": "rel",
      "position": "moderate-first",
      "confidence": "medium",
      "rationale": "Separação institucional expressa sustenta laicidade moderada.",
      "uncertainty": "Seleção não cobre todos os privilégios fiscais das igrejas ou prática; não presume irreligiosidade popular.",
      "reviewedOn": "2026-10-07",
      "claims": [
        {
          "sourceTitle": "The Weimar Constitution (August 11, 1919) — German History in Documents and Images",
          "locator": "Arts. 135 e 137",
          "statement": "Liberdade de consciência e culto é declarada e não há igreja estatal.",
          "basis": "norm",
          "publishedDate": "1919-08-11",
          "accessedDate": "2026-10-07"
        }
      ],
      "version": "editorial-ordinal-v1",
      "value": 60,
      "range": [
        55,
        70
      ]
    }
  },
  "documentaryReview": {
    "status": "author-reviewed-bounded-claims",
    "reviewedOn": "2026-10-07",
    "independentReview": "pending",
    "scope": "Texto fundador de 1919; duração da República 1919–1933 não é prática inalterada."
  },
  "unknownAxisReasons": {
    "pod": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Democracia e federalismo são inferências normativas delimitadas. Emergência versus garantias impede resolver pod sem prática; igualdade civil não autoriza imputar todo eixo mor atual. Economia, cultura, guerra e tecnologia permanecem desconhecidas.",
    "imi": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Democracia e federalismo são inferências normativas delimitadas. Emergência versus garantias impede resolver pod sem prática; igualdade civil não autoriza imputar todo eixo mor atual. Economia, cultura, guerra e tecnologia permanecem desconhecidas.",
    "dip": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Democracia e federalismo são inferências normativas delimitadas. Emergência versus garantias impede resolver pod sem prática; igualdade civil não autoriza imputar todo eixo mor atual. Economia, cultura, guerra e tecnologia permanecem desconhecidas.",
    "int": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Democracia e federalismo são inferências normativas delimitadas. Emergência versus garantias impede resolver pod sem prática; igualdade civil não autoriza imputar todo eixo mor atual. Economia, cultura, guerra e tecnologia permanecem desconhecidas.",
    "eco": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Democracia e federalismo são inferências normativas delimitadas. Emergência versus garantias impede resolver pod sem prática; igualdade civil não autoriza imputar todo eixo mor atual. Economia, cultura, guerra e tecnologia permanecem desconhecidas.",
    "con": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Democracia e federalismo são inferências normativas delimitadas. Emergência versus garantias impede resolver pod sem prática; igualdade civil não autoriza imputar todo eixo mor atual. Economia, cultura, guerra e tecnologia permanecem desconhecidas.",
    "com": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Democracia e federalismo são inferências normativas delimitadas. Emergência versus garantias impede resolver pod sem prática; igualdade civil não autoriza imputar todo eixo mor atual. Economia, cultura, guerra e tecnologia permanecem desconhecidas.",
    "mor": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Democracia e federalismo são inferências normativas delimitadas. Emergência versus garantias impede resolver pod sem prática; igualdade civil não autoriza imputar todo eixo mor atual. Economia, cultura, guerra e tecnologia permanecem desconhecidas.",
    "tec": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Democracia e federalismo são inferências normativas delimitadas. Emergência versus garantias impede resolver pod sem prática; igualdade civil não autoriza imputar todo eixo mor atual. Economia, cultura, guerra e tecnologia permanecem desconhecidas."
  }
} as const;
const primary: ReferenceSource = {
 title:'Weimarer Reichsverfassung1919 — transcrição alemã com alterações distinguidas',
 url:'https://www.verfassungen.de/de19-33/verf19.htm',
 note:'Republicação privada do texto primário alemão; corpo realmente lido:5–18,22,41–54,60–74,109–128,135–141. Emendas e comentários editoriais visíveis são separados das cláusulas fundadoras; não edição oficial ou auditoria de todas alterações/prática.'
};
const translation: ReferenceSource = {
 title:'The Weimar Constitution (August11,1919) — GHDI, cotejo adicional',
 url:'https://germanhistorydocs.org/en/weimar-germany-1918-1933/the-weimar-constitution-august-11-1919',
 note:'Seleção primária traduzida por Snyder1958, realmente reaberta/lida;109/114–124/128/135/137 e instituições. Seleção omite113 e abrevia cláusulas; complemento alemão usado para linguagem e contrapontos, não tradução integral.'
};
const additions: ReferenceAxisCoding[] = [
 {axis:'pod',position:'moderate-second',confidence:'medium',reviewedOn,
 rationale:'Proteções constitucionais gerais de processo, privacidade, expressão e associação sustentam direção normativa moderada à liberdade.',
 uncertainty:'Direitos de domicílio/expressão/reunião se referem a alemães. Art48 permite suspender114/115/117/118/123/124/153 com ciência imediata e anulação pelo Reichstag. Cinema e proteção juvenil118 admitem censura/exceções; não liberdades efetivas1930–1933.',
 claims:[{sourceTitle:primary.title,locator:'Arts.114–118,123–124; contraponto48',statement:'Protege liberdade pessoal com informação no dia seguinte e objeção, domicílio, comunicações, expressão e associação; emergência suspende garantias sob controle parlamentar.',basis:'norm',publishedDate:'1919-08-11',accessedDate:reviewedOn}]},
 {axis:'imi',position:'moderate-second',confidence:'medium',reviewedOn,relatedQuestionIds:['imigracao_02','imigracao_08'],
 rationale:'Proteção geral das minorias linguísticas na educação, administração e justiça sustenta faceta multicultural moderada.',
 uncertainty:'Art113 trata grupos linguísticos internos do Reich; não ingresso aberto, cidadania automática ou igualdade cultural efetiva.111–112 tratam deslocamento/emigração de alemães, não entrada universal de estrangeiros.',
 claims:[{sourceTitle:primary.title,locator:'Art.113; contrapontos110–112',statement:'Legislação e administração não devem impedir desenvolvimento dos grupos de outra língua, especialmente língua materna no ensino, administração interna e justiça.',basis:'norm',publishedDate:'1919-08-11',accessedDate:reviewedOn}]},
 {axis:'mor',position:'moderate-first',confidence:'medium',reviewedOn,
 rationale:'Igualdade entre sexos em direitos civis, casamento e cargos, combinada com condições iguais para filhos não matrimoniais, sustenta direção progressista moderada.',
 uncertainty:'119 protege casamento como base familiar e propagação nacional;118 admite restrições para moral/juventude.121 exige igualdade de condições de desenvolvimento, não declara todos direitos sucessórios iguais. Não se infere divórcio, direitos LGBT ou prática social inclusiva.',
 claims:[{sourceTitle:primary.title,locator:'Arts.109,119,121,128; contraponto118',statement:'Sexos têm iguais direitos civis; casamento baseia-se em igualdade; lei deve equiparar desenvolvimento de filhos não matrimoniais; exceções contra funcionárias são abolidas.',basis:'norm',publishedDate:'1919-08-11',accessedDate:reviewedOn}]}
];
/** Applies only to reviewed baseline; repeated application and later useful coding survive. */
export function extendHistoricalCountryCoverage10(entry: ReferenceEntry): ReferenceEntry {
 if(entry.id!=='weimar-republic') return entry;
 for(const inherited of ['est','rep','rel'] as const) if(JSON.stringify(entry.coding?.[inherited])!==JSON.stringify(historicalCoverage10LiveBefore.coding[inherited])) return entry;
 for(const addition of additions) if(entry.coding?.[addition.axis]||entry.evidence[addition.axis]||entry.axisEvidence?.[addition.axis]||entry.vec[addition.axis]!==50) return entry;
 const sources=[...entry.sources];
 for(const extra of [primary,translation]) if(!sources.some(s=>s.title===extra.title&&s.url===extra.url)) sources.push(extra);
 const oldReasons=(entry as ReferenceEntry & {unknownAxisReasons?:Partial<Record<AxisKey,string>>}).unknownAxisReasons;
 const result={...entry,sources,vec:{...entry.vec},evidence:{...entry.evidence},axisEvidence:{...entry.axisEvidence},coding:{...entry.coding},unknownAxisReasons:{...oldReasons}};
 for(const addition of additions){const coded=codeReferenceAxis(addition,sources);result.vec[addition.axis]=coded.value;result.evidence[addition.axis]=coded.evidence;result.axisEvidence[addition.axis]=coded.axisEvidence;result.coding[addition.axis]=coded.coding;delete result.unknownAxisReasons[addition.axis];}
 for(const axis of ['dip','int','eco','con','com','tec'] as const) result.unknownAxisReasons[axis]='Passagens realmente revisadas não estabelecem direção suficiente para este construto;50 desconhecido, sem graduação.';
 return Object.assign(result,{documentaryReview10:{status:'author-reviewed-bounded-claims',independentReview:'accepted-bounded-primary-claims',reviewedOn,scope:'Passagens primárias fundadoras1919 cotejadas independentemente para três novos e três códigos herdados; não prática1930–1933. Guards verificados pelo autor, não rerun independente.'},caveats:'Seis eixos descrevem norma fundadora1919, não prática1930–1933.48permite suspensão de garantias com anulação parlamentar;118permite cinema/proteção juvenil.113protege minorias internas, não entrada migratória.119protege casamento/propagação nacional;121equipara desenvolvimento, não todo direito sucessório.137permite corporações religiosas públicas/tributos;138/173tratam prestações estatais, contrapontos fiscais à ausência de igreja estatal. Não divórcio/LGBT/execução inferidos.'});
}
export const historicalCoverage10Audit={id:'weimar-republic',newAxes:['pod','imi','mor'],inheritedAxes:['est','rep','rel'],candidateDocumentedAxes:6,identityAdditions:0,independentReview:'accepted-bounded-primary-claims'} as const;
