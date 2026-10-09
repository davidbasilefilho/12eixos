import type {ReferenceEntry, ReferenceSource} from './references';
import {AXES} from '../lib/scoring';
import {codeReferenceAxis, type ReferenceAxisCoding} from '../lib/reference-coding';

export const legacyHistoricalQuality03OriginalRecords:Record<string,ReferenceEntry>={
  "abraham-lincoln": {
    "id": "abraham-lincoln",
    "kind": "person",
    "category": "historical-figure",
    "name": "Abraham Lincoln",
    "period": "Discursos e presidência dos Estados Unidos, 1858–1865",
    "vec": {
      "est": 50,
      "rep": 83,
      "pod": 61,
      "imi": 50,
      "dip": 62,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 75,
      "tec": 50
    },
    "rationale": "Discursos de Lincoln articulam preservação constitucional, emancipação e igualdade jurídica, em meio à guerra civil.",
    "caveats": "Sua posição sobre escravidão evoluiu e não deve ser confundida com igualdade racial plena ou oposição geral à guerra.",
    "sources": [
      {
        "title": "Gettysburg Address, 1863",
        "url": "https://www.archives.gov/milestone-documents/gettysburg-address",
        "note": "Transcrição e fac-símile do discurso preservados pelos National Archives dos EUA."
      }
    ],
    "evidence": {
      "rep": "high",
      "pod": "medium",
      "dip": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Gettysburg Address, 1863"
        ],
        "rationale": "Transcrição e fac-símile do discurso preservados pelos National Archives dos EUA. Discursos de Lincoln articulam preservação constitucional, emancipação e igualdade jurídica, em meio à guerra civil. A direção editorial deste eixo é Democracia, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "pod": {
        "sourceTitles": [
          "Gettysburg Address, 1863"
        ],
        "rationale": "Transcrição e fac-símile do discurso preservados pelos National Archives dos EUA. Discursos de Lincoln articulam preservação constitucional, emancipação e igualdade jurídica, em meio à guerra civil. A direção editorial deste eixo é Segurança, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "dip": {
        "sourceTitles": [
          "Gettysburg Address, 1863"
        ],
        "rationale": "Transcrição e fac-símile do discurso preservados pelos National Archives dos EUA. Discursos de Lincoln articulam preservação constitucional, emancipação e igualdade jurídica, em meio à guerra civil. A direção editorial deste eixo é Militarista, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "mor": {
        "sourceTitles": [
          "Gettysburg Address, 1863"
        ],
        "rationale": "Transcrição e fac-símile do discurso preservados pelos National Archives dos EUA. Discursos de Lincoln articulam preservação constitucional, emancipação e igualdade jurídica, em meio à guerra civil. A direção editorial deste eixo é Progressista, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      }
    }
  }
};
const first='Lincoln — First Inaugural Address, 1861';
const last='Lincoln — Second Inaugural Address, 1865';
const annual='Lincoln — Fourth Annual Message, 1864';
const habeas='Lincoln — Proclamation94, 24/9/1862, Statutes at Large';
export const legacyHistoricalQuality03Sources:ReferenceSource[]=[
 {title:first,url:'https://avalon.law.yale.edu/19th_century/lincoln1.asp',note:'Reprodução institucional Yale/Avalon. Corpo21–86 completo efetivamente lido; direitos estaduais, união perpétua, escravidão e autoridade majoritária separados.'},
 {title:last,url:'https://avalon.law.yale.edu/19th_century/lincoln2.asp',note:'Reprodução Yale/Avalon. Corpo20–29 completo efetivamente lido. Contraponto paz e cuidado pós-guerra; religião retórica não produz eixo automaticamente.'},
 {title:annual,url:'https://millercenter.org/the-presidency/presidential-speeches/december-6-1864-fourth-annual-message',note:'Reprodução institucional UVA, fonte declaradaNational Archives30. Corpo36–149 completo efetivamente lido, inclusive relações exteriores42–73 e negociação/guerra140–149.'},
 {title:habeas,url:'https://www.govinfo.gov/content/pkg/STATUTE-13/pdf/STATUTE-13-Pg730.pdf',note:'Publicação primária oficial, página730/PDF0. ProclamaçãoNo1 inteira0–30 efetivamente lida; No2 parcial34–40 não codificada. Texto assinado28 e data25–27.'},
 {title:'Miller Center — Abraham Lincoln, identidade',url:'https://millercenter.org/president/lincoln',note:'Metadados43–51 efetivamente lidos confirmam1809-02-12–1865-04-15. Biografia não fornece códigos.'},
];
function code(axis:ReferenceAxisCoding['axis'],position:ReferenceAxisCoding['position'],sourceTitle:string,publishedDate:string,locator:string,statement:string,rationale:string,uncertainty:string):ReferenceAxisCoding{return {axis,position,confidence:'medium',claims:[{sourceTitle,publishedDate,accessedDate:'2026-10-08',basis:'declaration',locator,statement}],rationale,uncertainty,reviewedOn:'2026-10-08'};}
export const legacyHistoricalQuality03Claims:ReferenceAxisCoding[]=[
 code('est','moderate-first',first,'1861-03-04','Corpo29/37/77–79: competência estadual e limites do Executivo;contraponto42–51','Defende que os Estados controlem suas instituições internas, preservando uma União constitucional perpétua.','Programa constitucional distingue competências estaduais e federais; união inseparável não equivale a abolir Estados e criar Estado unitário.','Não reconhece separação unilateral48. A competência interna então preserva escravidão26/77–78; não valida igualdade ou esse instituto.'),
 code('rep','moderate-first',first,'1861-03-04','Corpo58/64–68/74–81: soberania popular limitada pela Constituição','Defende maioria eleitoral sujeita a garantias constitucionais e controle popular sobre governo e emendas.','Estrutura geral de produção e limitação da autoridade, além de sua própria eleição ou um slogan de Gettysburg.','Direitos de minorias58 coexistem com defesa da entrega de fugitivos escravizados35–38; não inclusão igual de toda população.'),
 code('pod','moderate-first',habeas,'1862-09-24','ProclamaçãoNo1, página730/PDF0,14–22','Impõe lei marcial e julgamento militar a ampla classe de condutas consideradas desleais, suspendendo habeas corpus dos presos por autoridade militar.','Norma emergencial geral restringe crítica ao recrutamento, controle judicial e rito penal civil; excede administração policial ordinária.','Limitada à insurreição. Não presume que toda discordância política seja criminalizada, nem frequência/efeitos reais não medidos. Garantias civis1861 e clemência1864 preservadas.'),

];
legacyHistoricalQuality03Claims.find(c=>c.axis==='rep')!.claims.push({sourceTitle:annual,publishedDate:'1864-12-06',accessedDate:'2026-10-08',basis:'declaration',locator:'Corpo126–132: emenda pela via constitucional e vontade popular',statement:'Propõe emenda antiescravista por Congresso e Estados, respeitando a expressão eleitoral da maioria.'});

/** Accepted dated recoding. Apply only to the complete archived baseline; preserve every later change. */
export function reconcileLegacyHistoricalQuality03(entry:ReferenceEntry):ReferenceEntry{
 if(entry.id!=='abraham-lincoln')return entry;
 if(entry.name!=='Abraham Lincoln'||entry.category!=='historical-figure')throw Error('Historical quality03 identity mismatch');
 if(JSON.stringify(entry)!==JSON.stringify(legacyHistoricalQuality03OriginalRecords[entry.id]))return entry;
 const sources=structuredClone(entry.sources);
 for(const s of legacyHistoricalQuality03Sources)if(!sources.some(old=>old.title===s.title&&old.url===s.url))sources.push(structuredClone(s));
 const next:ReferenceEntry={...structuredClone(entry),period:'Declarações1861/1862/1864/1865: constituição, emergência e guerra civil',rationale:'Defende competências estaduais na União perpétua, governo da maioria sujeito à Constituição e poderes coercitivos de emergência.',caveats:'1809-02-12–1865-04-15, metadados institucionais47/51. Declarações específicas e norma assinada; não toda carreira ou práticas quantificadas.1861 preserva escravidão estadual e entrega de fugitivos;1864 promove emenda abolicionista. Isso não permite imputar orientação cultural global. Restrição de habeas corpus é emergencial; guerra civil não prova postura geral em conflitos exteriores. Nove eixos desconhecidos; três direções normativas datadas foram revisadas independentemente, sem medir toda a carreira ou frequência de práticas.',sources,vec:Object.fromEntries(AXES.map(({key})=>[key,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{}};
 for(const c of legacyHistoricalQuality03Claims){const r=codeReferenceAxis(c,sources);next.vec[c.axis]=r.value;next.evidence[c.axis]=r.evidence;next.axisEvidence![c.axis]=r.axisEvidence;next.coding![c.axis]=r.coding;}
 return next;
}

/** Civil-war diplomacy hypothesis rejected as insufficient whole-axis basis; research only. */
export const legacyHistoricalQuality03RejectedResearch:ReferenceAxisCoding[]=[
 code('dip','moderate-first',annual,'1864-12-06','Corpo138–149: continuidade do conflito, rejeição de negociação com liderança e vitória','Defende continuar a guerra para preservar a União e considera vitória militar a solução do conflito com a liderança insurgente.','A declaração aborda estratégia geral do grande conflito político vigente, não só aumento do orçamento militar ou memória de batalha.','Escopo é guerra civil, não licença geral de guerras estrangeiras. Risco de inadequação ao eixo diplomático deve ser julgado; conciliação externa47/64–70 e término imediato se cessar resistência142–149 contrapõem direção.1865 propõe paz com todas as nações.'),
];
