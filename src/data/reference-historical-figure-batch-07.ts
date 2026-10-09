/** Unimported proposal: original dormant records/source unions preserved, no legacy score promotion. */
import type { ReferenceEntry, ReferenceSource } from './references';
import { AXES } from '../lib/scoring';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';
import { peopleNorthAmericaExpansion } from './reference-people-northamerica';
export interface HistoricalFigureBatch07Spec { id:string;name:string;aliases:string[];period:string;rationale:string;caveats:string;sources:ReferenceSource[];claims:ReferenceAxisCoding[]; }
export const historicalFigureBatch07Specs:HistoricalFigureBatch07Spec[] = [
  {
    "id": "na-thomas-jefferson",
    "name": "Thomas Jefferson",
    "aliases": [],
    "period": "Discursos inaugurais1801/1805 e carta Danbury1802",
    "rationale": "Programa autoral datado; declarações não equivalem a execução.",
    "caveats": "1743-04-13–1826-07-04, identidade Monticello. Escravizador; direitos proclamados não provam inclusão real. A expansão territorial e assimilação indígena1805 limitam generalizações de paz/pluralismo. Propriedade individual na conclusão1805 permanece pesquisa: não graduamos toda a propriedade produtiva por esse trecho.",
    "sources": [
      {
        "title": "Jefferson: First Inaugural Address (1801)",
        "url": "https://avalon.law.yale.edu/19th_century/jefinau1.asp",
        "note": "Texto integral autoral efetivamente lido,4Mar1801; linhas23–45."
      },
      {
        "title": "Jefferson: Second Inaugural Address (1805)",
        "url": "https://avalon.law.yale.edu/19th_century/jefinau2.asp",
        "note": "Texto integral autoral efetivamente lido,4Mar1805; linhas21–49; inclui contrapontos."
      },
      {
        "title": "Jefferson: carta final aos Danbury Baptists (1802)",
        "url": "https://www.loc.gov/loc/lcib/9806/danpre.html",
        "note": "Carta final enviada, assinatura e data1Jan1802 efetivamente lidas; corpo24–30."
      },
      {
        "title": "Monticello: identidade de Thomas Jefferson",
        "url": "https://www.monticello.org/biography-of-jefferson",
        "note": "Corpo institucional efetivamente lido: nascimento13Abr1743, morte4Jul1826; não gera códigos."
      }
    ],
    "claims": [
      {
        "axis": "est",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Jefferson: First Inaugural Address (1801)",
            "publishedDate": "1801-03-04",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "Princípios essenciais, linha38",
            "statement": "Defende direitos dos Estados e sua competência doméstica, preservando vigor constitucional federal."
          }
        ],
        "rationale": "Distribui competências domésticas aos Estados, não apenas usa o nome federal.",
        "uncertainty": "Autonomia territorial explícita; não defende dissolução da União.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Jefferson: First Inaugural Address (1801)",
            "publishedDate": "1801-03-04",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "linhas28,31,34,38,45",
            "statement": "Defende representação, eleição e alternância, com direitos iguais da minoria."
          }
        ],
        "rationale": "Legitima governo por eleição e direitos minoritários, não poder pessoal.",
        "uncertainty": "Programa republicano; cidadania histórica excludente e escravidão não são apagadas.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Jefferson: First Inaugural Address (1801)",
            "publishedDate": "1801-03-04",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "linhas31,35,38; contraponto1805 linhas39–42",
            "statement": "Defende expressão, religião, habeas corpus e júri; limita coerção a impedir danos."
          }
        ],
        "rationale": "Limita coerção e protege diversas liberdades civis com garantias judiciais.",
        "uncertainty": "Em1805 admite sanções por falsidade/difamação; direitos proclamados não universalmente realizados.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Jefferson: First Inaugural Address (1801)",
            "publishedDate": "1801-03-04",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "Princípios essenciais, linha38; contraponto1805 linhas24,28",
            "statement": "Defende paz e amizade internacional, subordinando militares ao poder civil."
          }
        ],
        "rationale": "Prioriza paz internacional, mantendo capacidade defensiva.",
        "uncertainty": "Milícia e guerra admitidas;1805 aceita armamentos e expansão territorial. Não pacifismo absoluto.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "int",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Jefferson: First Inaugural Address (1801)",
            "publishedDate": "1801-03-04",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "Princípios essenciais, linha38",
            "statement": "Prescreve amizade com todas as nações sem alianças que aprisionem sua política."
          }
        ],
        "rationale": "Evita compromissos políticos externos permanentes, com expansão como contraponto.",
        "uncertainty": "Cautela geral com alianças; expansão territorial1805 impede leitura de não intervenção absoluta.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "con",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Jefferson: First Inaugural Address (1801)",
            "publishedDate": "1801-03-04",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "linhas35–38; contraponto1805 linha27",
            "statement": "Prefere governo frugal que deixa livres os empreendimentos e a indústria."
          }
        ],
        "rationale": "Prefere coordenação industrial livre a direção governamental geral.",
        "uncertainty": "Programa geral de coordenação livre;1805 admite recursos públicos para obras/manufaturas/educação.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "rel",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Jefferson: carta final aos Danbury Baptists (1802)",
            "publishedDate": "1802-01-01",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "Corpo final, linhas25–26; contraponto1805 linha31",
            "statement": "Defende separação Igreja/Estado e liberdade de consciência, sem religião estabelecida federal."
          }
        ],
        "rationale": "Separa autoridade constitucional federal e estabelecimento religioso.",
        "uncertainty": "Separação federal;1805 deixa exercícios religiosos às autoridades estaduais/eclesiais. Não ateísmo nem garantia regional universal.",
        "reviewedOn": "2026-10-07"
      }
    ]
  },
  {
    "id": "na-george-washington",
    "name": "George Washington",
    "aliases": [],
    "period": "Farewell Address,1796",
    "rationale": "Conselhos públicos adotados e assinados por Washington; desconhecidos sem mapas.",
    "caveats": "1732-02-22–1799-12-14, identidade MountVernon. República e escravidão historicamente excludentes. Advertências contra partidos/associações limitam pluralismo; preparação defensiva e alianças temporárias limitam neutralidade. União não foi inferida como unitário/federal; legalidade não foi transformada em eixo pod.",
    "sources": [
      {
        "title": "Washington: Farewell Address (1796)",
        "url": "https://avalon.law.yale.edu/18th_century/washing.asp",
        "note": "Texto primário efetivamente lido, corpo20–115, assinatura; ano1796 sem inventar dia."
      },
      {
        "title": "MountVernon: vida de George Washington",
        "url": "https://www.mountvernon.org/george-washington/biography",
        "note": "Corpo institucional efetivamente lido: nascimento22Fev1732; identidade sem eixos."
      },
      {
        "title": "MountVernon: morte de George Washington",
        "url": "https://www.mountvernon.org/george-washington/death",
        "note": "Corpo institucional efetivamente lido: morte14Dez1799; identidade sem eixos."
      }
    ],
    "claims": [
      {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Washington: Farewell Address (1796)",
            "publishedDate": "1796",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "linhas20–22,55,70–73; contrapontos56–69",
            "statement": "Defende eleição, soberania constitucional popular e controles recíprocos contra usurpação."
          }
        ],
        "rationale": "Subordina poder a escolha popular, alteração constitucional e controles recíprocos.",
        "uncertainty": "Critica partidos e associações oposicionistas; não democracia universal contemporânea.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Washington: Farewell Address (1796)",
            "publishedDate": "1796",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "linhas80,83–87,97,100,108–110",
            "statement": "Prescreve paz, justiça entre nações e contenção de hostilidade e guerra."
          }
        ],
        "rationale": "Prefere relações pacíficas à hostilidade, admitindo guerra defensiva.",
        "uncertainty": "Admite defesa preparada e escolha de guerra conforme interesse e justiça.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "int",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Washington: Farewell Address (1796)",
            "publishedDate": "1796",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "linhas94–100",
            "statement": "Rejeita vínculos políticos e alianças permanentes com potências estrangeiras."
          }
        ],
        "rationale": "Distingue comércio de vínculos políticos estrangeiros e evita alianças permanentes.",
        "uncertainty": "Honra compromissos existentes e permite alianças temporárias em emergências.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "com",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Washington: Farewell Address (1796)",
            "publishedDate": "1796",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "linhas101–102",
            "statement": "Prefere intercâmbio liberal e política comercial imparcial, sem preferências exclusivas."
          }
        ],
        "rationale": "Recomenda intercâmbio internacional liberal sem privilégios exclusivos, com regras negociadas.",
        "uncertainty": "Regras negociadas podem variar; não afirma eliminar todas as tarifas.",
        "reviewedOn": "2026-10-07"
      },
      {
        "axis": "rel",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Washington: Farewell Address (1796)",
            "publishedDate": "1796",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "linhas74–77",
            "statement": "Afirma religião indispensável à moralidade nacional e às instituições públicas."
          }
        ],
        "rationale": "Atribui função pública à religião na moralidade nacional e nos juramentos judiciais.",
        "uncertainty": "Concede moralidade pessoal por educação refinada; não exige igreja oficial ou política de maioria religiosa.",
        "reviewedOn": "2026-10-07"
      }
    ]
  }
];
export const historicalFigureBatch07OriginalRecords:Record<string,ReferenceEntry> = Object.fromEntries(historicalFigureBatch07Specs.map(spec=>{const old=peopleNorthAmericaExpansion.find(e=>e.id===spec.id);if(!old||old.name!==spec.name)throw new Error('Dormant identity mismatch');return [spec.id,structuredClone(old)];}));
export const historicalFigureBatch07:ReferenceEntry[] = historicalFigureBatch07Specs.map(spec=>{
 const old=historicalFigureBatch07OriginalRecords[spec.id];
 const sources=[...old.sources,...spec.sources].filter((s,i,all)=>all.findIndex(t=>t.title===s.title&&t.url===s.url)===i);
 const entry:ReferenceEntry={id:spec.id,name:spec.name,aliases:spec.aliases,kind:'person',category:'historical-figure',period:spec.period,rationale:spec.rationale,caveats:spec.caveats,sources,vec:Object.fromEntries(AXES.map(({key})=>[key,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{}};
 for(const input of spec.claims){const c=codeReferenceAxis(input,sources);entry.vec[input.axis]=c.value;entry.evidence[input.axis]=c.evidence;entry.axisEvidence![input.axis]=c.axisEvidence;entry.coding![input.axis]=c.coding;}
 return entry;
});
