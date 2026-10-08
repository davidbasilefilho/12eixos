import type {ReferenceEntry, ReferenceSource} from './references';
import {AXES} from '../lib/scoring';
import {codeReferenceAxis, type ReferenceAxisCoding} from '../lib/reference-coding';
import {peopleNorthAmericaExpansion} from './reference-people-northamerica';

interface Batch08Spec {recoverDormant:boolean;id:string;name:string;aliases:string[];period:string;rationale:string;caveats:string;sources:ReferenceSource[];claims:ReferenceAxisCoding[]}
export const historicalFigureBatch08Specs:Batch08Spec[] = [
  {
    "id": "na-james-madison",
    "name": "James Madison",
    "aliases": [],
    "period": "Programa inaugural de4/3/1809; contraponto posterior explícito de4/3/1813",
    "rationale": "Programa constitucional autoral datado, não vetor de toda a carreira ou validação de práticas.",
    "caveats": "1751-03-16–1836-06-28, identidade institucional Montpelier. Escravizador; cidadania e direitos proclamados não foram universais. Projeto de assimilação indígena aparece no próprio discurso1809. Em1813 justifica guerra e mobilização: dip40 restringe-se à preferência normativa de1809, não pacifismo da presidência inteira. Não infere propriedade, alocação, costumes ou inovação por rótulos biográficos.",
    "sources": [
      {
        "title": "Madison — First Inaugural Address, 1809",
        "url": "https://avalon.law.yale.edu/19th_century/madison1.asp",
        "note": "Corpo22–36 integral efetivamente lido; data4/3/1809. Declaração presidencial adotada."
      },
      {
        "title": "Madison — Second Inaugural Address, 1813",
        "url": "https://avalon.law.yale.edu/19th_century/madison2.asp",
        "note": "Corpo22–43 integral efetivamente lido; data4/3/1813. A página erroneamente repete o título First; distingue-se pela data e conteúdo. Contraponto, não score da carreira."
      },
      {
        "title": "Montpelier — Life of James Madison, identidade",
        "url": "https://www.montpelier.org/learn/the-life-of-james-madison/",
        "note": "Corpo institucional63 e117 efetivamente aberto/lido confirma datas1751-03-16 e1836-06-28. Corpo92/115–116 explicita escravidão. Fonte de identidade/limitações, sem gerar direção dos eixos."
      }
    ],
    "claims": [
      {
        "axis": "est",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Madison — First Inaugural Address, 1809",
            "publishedDate": "1809-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo32, cláusulas Union/Constitution/rights reserved to States",
            "statement": "Defende competências e direitos reservados aos Estados, junto à autoridade constitucional da União."
          }
        ],
        "rationale": "A distribuição expressa de competências territoriais sustenta federalismo moderado.",
        "uncertainty": "Mantém a União e poderes federais; não autonomia absoluta ou direito de secessão.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Madison — First Inaugural Address, 1809",
            "publishedDate": "1809-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo23/25/35: suffrage, republican institutions e representantes",
            "statement": "Legitima o governo pelo sufrágio nacional, instituições republicanas e representantes em outros departamentos."
          }
        ],
        "rationale": "O programa vincula autoridade política à escolha eleitoral e à representação, não a mando pessoal.",
        "uncertainty": "Sufrágio histórico excludente e escravidão preservados como limites; não democracia universal contemporânea.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Madison — First Inaugural Address, 1809",
            "publishedDate": "1809-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo32: consciência, direitos pessoais, imprensa e exército permanente",
            "statement": "Protege direitos pessoais, consciência e imprensa e restringe exércitos permanentes em nome da liberdade."
          }
        ],
        "rationale": "Diversas garantias civis e limites gerais à coerção sustentam preferência libertária moderada.",
        "uncertainty": "Mantém milícia e força militar limitada; declarações não provam cumprimento universal.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Madison — First Inaugural Address, 1809",
            "publishedDate": "1809-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo28/32: paz, discussão e acomodação antes de armas; contraponto1813,24–29/38–43",
            "statement": "Prefere discussão e acomodação das divergências a recorrer às armas."
          }
        ],
        "rationale": "A preferência se aplica em todos os casos de divergência internacional, admitindo defesa.",
        "uncertainty": "Em1813 legitima uma guerra após negociações: recorte1809 e direção moderada, não pacifismo absoluto.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "int",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Madison — First Inaugural Address, 1809",
            "publishedDate": "1809-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo28/32: neutralidade, exclusão de intrigas e direitos estrangeiros",
            "statement": "Defende neutralidade e independência que não invada direitos de outras nações."
          }
        ],
        "rationale": "Formula norma geral contra tutela e invasão de direitos externos, além de uma disputa isolada.",
        "uncertainty": "Defesa dos próprios direitos permanece; assimilação indígena no mesmo parágrafo limita universalidade da aplicação.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "rel",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Madison — First Inaugural Address, 1809",
            "publishedDate": "1809-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo32: religião e consciência isentas da jurisdição civil; contraponto36",
            "statement": "Exclui religião e consciência da jurisdição civil e da interferência do governo."
          }
        ],
        "rationale": "A separação entre autoridade civil e funções religiosas é explícita, não inferida da fé privada.",
        "uncertainty": "Invoca Deus no fechamento36; separação civil não significa ateísmo ou apagamento da religião social.",
        "reviewedOn": "2026-10-08"
      }
    ],
    "recoverDormant": true
  },
  {
    "id": "na-james-monroe",
    "name": "James Monroe",
    "aliases": [],
    "period": "Programa inaugural presidencial de4/3/1817",
    "rationale": "Programa autoral datado; descrições de realizações são alegações do próprio orador, não verificação independente.",
    "caveats": "1758-04-28–1831-07-04, identidade institucional Highland/William & Mary. Direitos universais proclamados não apagam escravidão ou projeto assimilacionista indígena explicitado no corpo55. Recorte1817 não importa a Doutrina Monroe1823 para sustentar não intervenção. Incentivo a capital doméstico não prova propriedade pública/privada geral, nem obras setoriais provam planejamento de toda economia.",
    "sources": [
      {
        "title": "Monroe — First Inaugural Address, 1817",
        "url": "https://avalon.law.yale.edu/19th_century/monroe1.asp",
        "note": "Corpo18–69 integral efetivamente lido, data4/3/1817. Declaração presidencial adotada."
      },
      {
        "title": "Highland — Brief Biography of James Monroe, identidade",
        "url": "https://highland.org/discover-monroe/",
        "note": "Corpo institucional21/33 efetivamente aberto/lido confirma1758-04-28–1831-07-04. Highland integra William & Mary36. Biografia não gera direção política."
      }
    ],
    "claims": [
      {
        "axis": "est",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Monroe — First Inaugural Address, 1817",
            "publishedDate": "1817-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo25/36: repartição de soberania e direitos estaduais",
            "statement": "Defende partilha de soberania entre Estados e governo nacional, preservando direitos estaduais."
          }
        ],
        "rationale": "Distribui autoridade constitucional entre níveis territoriais, mantendo poderes nacionais suficientes.",
        "uncertainty": "A União e a defesa nacional permanecem; não descentralização absoluta.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Monroe — First Inaugural Address, 1817",
            "publishedDate": "1817-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo23/30/36–39: autogoverno, eleições, representantes e usurpação",
            "statement": "Defende governo eletivo em todos os ramos e soberania popular contra usurpação."
          }
        ],
        "rationale": "Descreve e recomenda autoridade fundada em eleições e representação política.",
        "uncertainty": "Cidadania histórica excludente; não transforma a alegação de inclusão em prática universal comprovada.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Monroe — First Inaugural Address, 1817",
            "publishedDate": "1817-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo26/30/36/39: direitos pessoais, propriedade, culto e limites",
            "statement": "Valoriza proteção de direitos pessoais, propriedade e culto, sem sacrificar direitos individuais ao governo nacional."
          }
        ],
        "rationale": "A proteção inclui múltiplas liberdades civis como norma geral de governo.",
        "uncertainty": "As alegações de ausência de opressão26 são autocongratulatórias e contradizem escravidão; defesa e mobilização permanecem43–49.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Monroe — First Inaugural Address, 1817",
            "publishedDate": "1817-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo28/40/43–49/61: paz geral e forças moderadas",
            "statement": "Prefere paz com todas as nações e forças moderadas, admitindo defesa em guerra."
          }
        ],
        "rationale": "A contenção militar é declarada como política geral, sem abandonar meios defensivos.",
        "uncertainty": "Guerra considerada inevitável28 e capacidade ofensiva em guerra46 limitam a direção; não pacifismo absoluto.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "int",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Monroe — First Inaugural Address, 1817",
            "publishedDate": "1817-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo28/45/61: afastamento de conflitos e neutralidade",
            "statement": "Defende manter-se afastado dos conflitos externos e preservar neutralidade perante guerras de outras potências."
          }
        ],
        "rationale": "A norma externa prefere neutralidade e independência a envolvimento em disputas alheias.",
        "uncertainty": "Não proíbe toda intervenção; defesa de direitos nacionais e posterior doutrina hemisférica não desaparecem. Recorte1817.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "com",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Monroe — First Inaugural Address, 1817",
            "publishedDate": "1817-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo33–34/53–54: navegação, manufaturas, importações e mercados",
            "statement": "Defende favorecimento de navegação e indústria nacionais e menor dependência de importações."
          }
        ],
        "rationale": "A política abrange comércio, manufaturas e matérias-primas, constituindo orientação protecionista geral.",
        "uncertainty": "Reconhece mercados estrangeiros e comércio vantajoso; não fechamento comercial total nem tarifa específica não citada.",
        "reviewedOn": "2026-10-08"
      }
    ],
    "recoverDormant": true
  }
];
export const historicalFigureBatch08OriginalRecords:Record<string,ReferenceEntry> = Object.fromEntries(historicalFigureBatch08Specs.filter(spec=>spec.recoverDormant).map(spec=>{
 const old=peopleNorthAmericaExpansion.find(entry=>entry.id===spec.id);
 if(!old || old.name!==spec.name || old.category!=='historical-figure')throw Error('Historical batch08 dormant identity mismatch');
 return [spec.id,structuredClone(old)];
}));
/** Pending Root acceptance. No legacy scores are promoted by dormant activation. */
export const historicalFigureBatch08:ReferenceEntry[] = historicalFigureBatch08Specs.map(spec=>{
 const old=historicalFigureBatch08OriginalRecords[spec.id];
 const sources=[...structuredClone(old?.sources ?? [])];
 for(const src of spec.sources)if(!sources.some(s=>s.title===src.title&&s.url===src.url))sources.push(structuredClone(src));
 const entry:ReferenceEntry={id:spec.id,name:spec.name,aliases:spec.aliases,kind:'person',category:'historical-figure',period:spec.period,rationale:spec.rationale,caveats:spec.caveats,sources,
 vec:Object.fromEntries(AXES.map(({key})=>[key,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{}};
 for(const input of spec.claims){const result=codeReferenceAxis(input,sources);entry.vec[input.axis]=result.value;entry.evidence[input.axis]=result.evidence;entry.axisEvidence![input.axis]=result.axisEvidence;entry.coding![input.axis]=result.coding;}
 return entry;
});
