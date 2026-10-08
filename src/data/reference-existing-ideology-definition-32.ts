import type {ReferenceEntry} from './references';
export const existingIdeologyDefinition32PreviousSnapshots=[
  {
    "id": "civic-direct-democracy",
    "kind": "ideology",
    "category": "ideology",
    "name": "Soberania legislativa direta de Rousseau, 1762",
    "period": "Do contrato social, 1762; livros II.1 e III.15 na tradução de G. D. H. Cole reproduzida pelo Project Gutenberg",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
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
    "rationale": "Defende soberania legislativa inalienável e ratificação pessoal das leis pelos cidadãos, distinguindo essa autoridade da representação permitida no Executivo.",
    "caveats": "Programa teórico de Rousseau, não Constituição suíça de 1999 nem todo mecanismo contemporâneo de democracia direta. Cidadania ativa e condições sociais limitam o recorte; a discussão de escravidão termina recusando sua legitimidade e necessidade. Não se deduzem instituições atuais ou respostas numéricas da exigência de ratificação.",
    "sources": [
      {
        "title": "Federal Constitution of the Swiss Confederation — Fedlex",
        "url": "https://www.fedlex.admin.ch/eli/cc/1999/404/en",
        "note": "Texto constitucional sobre iniciativa popular e referendo."
      },
      {
        "title": "The Social Contract — Rousseau, livros II.1 e III.15, tradução de G. D. H. Cole",
        "url": "https://www.gutenberg.org/files/46333/46333-h/46333-h.htm",
        "note": "O capítulo III.15 exige ratificação pessoal das leis e impede decisão legislativa definitiva por representantes, mas permite representação executiva. A passagem final recusa defender a legitimidade ou necessidade da escravidão. A fonte suíça anterior permanece como contexto separado."
      }
    ],
    "evidence": {},
    "axisEvidence": {},
    "coding": {}
  },
  {
    "id": "civic-participatory-democracy",
    "kind": "ideology",
    "category": "ideology",
    "name": "Democracia participativa: programa de Port Huron, 1962",
    "period": "Port Huron Statement, convenção do Students for a Democratic Society de 11–15 de junho de 1962; transcrição do arquivo CRMvet",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
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
    "rationale": "Defende participação nas decisões políticas e econômicas, associações voluntárias, direitos civis e controle público com regulação e propriedade social.",
    "caveats": "Programa coletivo de 1962, apresentado como documento aberto a mudanças, não fórmula única para toda democracia participativa. Mantém trabalho partidário e instituições representativas; sua participação econômica não prova rejeição de toda propriedade privada. Exigir legislação federal não esclarece sozinho quem tem ratificação legislativa final. Transcrição é reprodução, não certificação de eficácia ou leitura integral das 41 páginas.",
    "sources": [
      {
        "title": "Port Huron Statement — Students for a Democratic Society",
        "url": "https://www2.iath.virginia.edu/sixties/HTML_docs/Resources/Primary/Manifestos/SDS_Port_Huron.html",
        "note": "Manifesto primário sobre participação, economia, direitos civis e política externa."
      },
      {
        "title": "Port Huron Statement — SDS, junho de 1962, transcrição CRMvet",
        "url": "https://www.crmvet.org/info/620615_sds_huron-stmt.pdf",
        "note": "A nota inicial identifica revisão e adoção na convenção de junho de 1962. Values e Towards American Democracy prescrevem participação individual, associações voluntárias e controle democrático antes da regulação econômica, incluindo propriedade pública parcial ou integral. A reivindicação de ação legislativa não é transformada em proibição de ratificação pessoal das leis."
      }
    ],
    "evidence": {},
    "axisEvidence": {},
    "coding": {}
  }
] as const;
const additions=[
  {
    "caveat": "No livro II, capítulo III, Rousseau prefere a formação da vontade geral por cidadãos que julgam individualmente, sem sociedades parciais no Estado. Se essas sociedades existem, recomenda multiplicá-las e impedir sua desigualdade. Essa ressalva não é convertida em proibição absoluta de toda associação voluntária.",
    "source": {
      "title": "The Social Contract — Rousseau, 1762, livro II, capítulo III",
      "url": "https://www.gutenberg.org/files/46333/46333-h/46333-h.htm",
      "note": "O capítulo III do livro II distingue a vontade geral das vontades de associações parciais e prefere cidadãos que julgam por si; se existem sociedades parciais, recomenda muitas e sem desigualdade entre elas. Trata-se da tradução de Cole reproduzida digitalmente, não do estudo introdutório do tradutor nem de uma proibição absoluta atribuída por inferência."
    }
  },
  {
    "caveat": "Towards American Democracy, item 2, exige criar associações voluntárias de interesses e questões, além dos partidos, para participação e influência política. Values preserva independência e privacidade individuais e organização de opiniões divergentes; o programa combate a influência antidemocrática dos grandes lobbies, sem absorver os indivíduos em um grupo único.",
    "source": {
      "title": "Port Huron Statement — SDS, 1962, associações políticas voluntárias",
      "url": "https://www.crmvet.org/info/620615_sds_huron-stmt.pdf",
      "note": "Towards American Democracy, item 2, páginas 29–30 do PDF, prescreve instituições voluntárias de interesses e questões que influenciem a decisão nacional além dos partidos. Values, página 3 do PDF, combina participação por agrupamentos públicos, organização de opiniões divergentes e independência individual. A transcrição CRMvet é reprodução; não implica certificação de toda a edição ou de resultados históricos."
    }
  }
] as const;
function canonical(v:unknown):string{if(Array.isArray(v))return '['+v.map(canonical).join(',')+']';if(v!==null&&typeof v==='object')return '{'+Object.entries(v).sort(([a],[b])=>a.localeCompare(b)).map(([k,x])=>JSON.stringify(k)+':'+canonical(x)).join(',')+'}';return JSON.stringify(v)}
function reviewed(x:ReferenceEntry,i:number):ReferenceEntry{return {...x,...(x.id==='civic-direct-democracy'?{period:'Do contrato social, 1762; livros II.1, II.3 e III.15 na tradução de G. D. H. Cole reproduzida pelo Project Gutenberg'}:{}),caveats:x.caveats+' '+additions[i].caveat,sources:[...x.sources,additions[i].source]}}
function previousReviewed(x:ReferenceEntry,i:number):ReferenceEntry{return {...x,caveats:x.caveats+' '+additions[i].caveat,sources:[...x.sources,additions[i].source]}}
export function reconcileExistingIdeologyDefinition32(x:ReferenceEntry):ReferenceEntry{const i=existingIdeologyDefinition32PreviousSnapshots.findIndex(p=>p.id===x.id);if(i<0)return x;const p=existingIdeologyDefinition32PreviousSnapshots[i] as unknown as ReferenceEntry;if(canonical(x)===canonical(reviewed(p,i)))return x;if(x.id==='civic-direct-democracy'&&canonical(x)===canonical(previousReviewed(p,i)))return {...x,period:'Do contrato social, 1762; livros II.1, II.3 e III.15 na tradução de G. D. H. Cole reproduzida pelo Project Gutenberg'};if(canonical(x)!==canonical(p))throw new Error('Definition32 changed full baseline: '+x.id);return reviewed(x,i)}
export const existingIdeologyDefinition32Audit={reviewedOn:'2026-10-08',integrationStatus:'Root exact accepted payload integrated in frozen NEXT07 workingtree against836d765; commit pending',allowedFields:['caveats','sources','period (Rousseau chapter scope only)'],scope:'Full exact committed99 LIVE priors retained; earlier caveat prefixes and every original source object retained; names/year/descriptions/vectors/evidence/coding untouched; Root explicitly authorized Rousseau period chapter scope II.3 addition. No scores/raw growth.',comparison:'Preferred intermediary political will formation: SDS positively creates voluntary issue/interest associations; RousseauIIIII prefers independent judgments without partialsocieties, with manyequalgroups fallback explicit. No absoluteban/finalauthority inference.'} as const;
