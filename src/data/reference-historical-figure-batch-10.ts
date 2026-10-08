import type {ReferenceEntry, ReferenceSource} from './references';
import {AXES} from '../lib/scoring';
import {codeReferenceAxis, type ReferenceAxisCoding} from '../lib/reference-coding';
import {peopleNorthAmericaExpansion} from './reference-people-northamerica';

interface Batch10Spec {recoverDormant:boolean;id:string;name:string;aliases:string[];period:string;rationale:string;caveats:string;sources:ReferenceSource[];claims:ReferenceAxisCoding[]}
export const historicalFigureBatch10Specs:Batch10Spec[] = [
  {
    "id": "na-john-adams",
    "name": "John Adams",
    "aliases": [],
    "period": "Programa inaugural4/3/1797; contraponto legal1798 explícito",
    "rationale": "Comparação documental de duas declarações políticas datadas. Não codifica toda a presidência1797–1801 ou práticas universais.",
    "caveats": "1735-10-30–1826-07-04, National Archives corpo52. A redação1779 é relatório de comissão preparado principalmente por Adams, com alterações não inteiramente recuperáveis; artigoIII sobre culto de autoria incerta não fundamenta rel. Direitos civis1779 não equivalem à política posterior: Adams aprovou em1798 deportação por decisão presidencial e criminalização de escritos políticos, transcrição assinada efetivamente lida. Recortes distintos devem permanecer visíveis; não vetor uniforme da carreira. Eleitorado qualificado masculino; elogios ao sistema não provam igualdade factual.",
    "sources": [
      {
        "title": "Adams — Inaugural Address, 1797",
        "url": "https://avalon.law.yale.edu/18th_century/adams.asp",
        "note": "Corpo44–70 integral lido; data4/3/1797. Somente programa explicitamente adotado pelo orador."
      },
      {
        "title": "Adams — Report of a Constitution, 1779, edição Charles Francis Adams",
        "url": "https://oll-resources.s3.us-east-2.amazonaws.com/oll3/store/titles/2102/Adams_1431-04_EBk_v6.0.pdf",
        "note": "OLL reprodução1856/ebook2011. Nota editorial de autoria6094–6130 e6171–6179 efetivamente lida: relatório preparado por Adams, modificado pela comissão; autoria artigoIII incerta. Corpo6182–6277,6290–6348 e6356–6421 lido; lacunas6278–6289/6349–6355 não reivindicadas. Direito de expressão6314–6316, busca6302–6309, julgamento6290–6301 e punições6356–6357."
      },
      {
        "title": "National Archives — Alien and Sedition Acts, contraponto1798",
        "url": "https://www.archives.gov/milestone-documents/alien-and-sedition-acts",
        "note": "Transcrições69–129 efetivamente lidas, assinatura Adams91–93/127–129. Não autoria legislativa exclusiva: aprovação presidencial. Contraponto forte ao programa anterior, não usado para ocultar coerção ou proclamar liberdade da presidência inteira."
      },
      {
        "title": "National Archives — Signers fact sheet, identidade John Adams",
        "url": "https://www.archives.gov/founding-docs/signers-factsheet",
        "note": "Tabela institucional52 efetivamente lida confirma1735-10-30–1826-07-04. Compilação bibliográfica institucional, não texto autobiográfico; não produz scores."
      }
    ],
    "claims": [
      {
        "axis": "est",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Adams — Inaugural Address, 1797",
            "publishedDate": "1797-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo66: constituições estaduais, cautela perante seus governos",
            "statement": "Defende respeito aos governos e constituições dos Estados e igualdade entre eles dentro da União."
          }
        ],
        "rationale": "A divisão territorial de autoridade é defendida em programa nacional amplo, mantendo a Constituição federal.",
        "uncertainty": "Critica fragilidade da Confederação48; não autonomia absoluta ou secessão.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Adams — Inaugural Address, 1797",
            "publishedDate": "1797-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo53/57–62/66: eleições, poder popular e alteração constitucional",
            "statement": "Defende autoridade derivada do povo, eleições regulares e alteração constitucional pelo povo e seus representantes."
          }
        ],
        "rationale": "O fundamento geral do governo é a representação eleitoral, não somente sua própria eleição.",
        "uncertainty": "Franquia histórica excludente; sua retórica não prova inclusão universal.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Adams — Inaugural Address, 1797",
            "publishedDate": "1797-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo66: paz com todas as nações, reparação por negociação",
            "statement": "Prefere manter paz e resolver danos comerciais por negociação amistosa."
          }
        ],
        "rationale": "Norma geral para relações internacionais e solução de divergências, admitindo encaminhamento ao Legislativo quando negociação falha.",
        "uncertainty": "Admite outras medidas parlamentares se negociação falhar; não pacifismo absoluto ou descrição de toda a presidência.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "int",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Adams — Inaugural Address, 1797",
            "publishedDate": "1797-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo62/66: influência externa, neutralidade e imparcialidade",
            "statement": "Defende independência do governo perante influência estrangeira e neutralidade entre beligerantes."
          }
        ],
        "rationale": "A neutralidade é apresentada como política externa geral, e não simples oposição a um conflito particular.",
        "uncertainty": "Congresso pode alterar neutralidade; não proibição absoluta de intervenção.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "rel",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Adams — Inaugural Address, 1797",
            "publishedDate": "1797-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo66: respeito à religião cristã como recomendação para serviço público",
            "statement": "Considera respeito ao cristianismo uma das melhores recomendações para exercer serviço público."
          }
        ],
        "rationale": "Religião entra explicitamente no critério normativo de autoridade pública, além da devoção pessoal do fechamento.",
        "uncertainty": "Não requisito legal exclusivo nem igreja oficial; amor a pessoas de todas denominações no mesmo programa. ArtigoIII1779 excluído por autoria incerta.",
        "reviewedOn": "2026-10-08"
      }
    ],
    "recoverDormant": true
  }
];
export const historicalFigureBatch10OriginalRecords:Record<string,ReferenceEntry> = Object.fromEntries(historicalFigureBatch10Specs.filter(spec=>spec.recoverDormant).map(spec=>{
 const old=peopleNorthAmericaExpansion.find(entry=>entry.id===spec.id);
 if(!old || old.name!==spec.name || old.category!=='historical-figure')throw Error('Historical batch10 dormant identity mismatch');
 return [spec.id,structuredClone(old)];
}));
/** Pending Root acceptance. No legacy scores are promoted by dormant activation. */
export const historicalFigureBatch10:ReferenceEntry[] = historicalFigureBatch10Specs.map(spec=>{
 const old=historicalFigureBatch10OriginalRecords[spec.id];
 const sources=[...structuredClone(old?.sources ?? [])];
 for(const src of spec.sources)if(!sources.some(s=>s.title===src.title&&s.url===src.url))sources.push(structuredClone(src));
 const entry:ReferenceEntry={id:spec.id,name:spec.name,aliases:spec.aliases,kind:'person',category:'historical-figure',period:spec.period,rationale:spec.rationale,caveats:spec.caveats,sources,
 vec:Object.fromEntries(AXES.map(({key})=>[key,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{}};
 for(const input of spec.claims){const result=codeReferenceAxis(input,sources);entry.vec[input.axis]=result.value;entry.evidence[input.axis]=result.evidence;entry.axisEvidence![input.axis]=result.axisEvidence;entry.coding![input.axis]=result.coding;}
 return entry;
});

/** Rejected hypothesis preserved as research only; never applied to active vectors. */
export const historicalFigureBatch10RejectedResearch:ReferenceAxisCoding[]=[
  {
    "axis": "pod",
    "position": "moderate-second",
    "confidence": "medium",
    "claims": [
      {
        "sourceTitle": "Adams — Report of a Constitution, 1779, edição Charles Francis Adams",
        "publishedDate": "1779; relatório setembro–outubro, reprodução1856",
        "accessedDate": "2026-10-08",
        "basis": "norm",
        "locator": "Declaração XIV–XVII/XXVI:6302–6321/6356–6357; julgamento6290–6301",
        "statement": "Protege expressão e imprensa, julgamento regular e segurança contra buscas arbitrárias e punições cruéis."
      }
    ],
    "rationale": "A proposta constitucional reúne diversas restrições gerais à coerção pública, não só um direito isolado.",
    "uncertainty": "Norma1779 em relatório autoral com alterações de comissão. Aprovação expressa de deportação e censura penal1798 contradiz direção posterior; não descrever Adams como libertário durante toda presidência.",
    "reviewedOn": "2026-10-08"
  }
];
