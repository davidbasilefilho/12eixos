import type {ReferenceEntry, ReferenceSource} from './references';
import {AXES} from '../lib/scoring';
import {codeReferenceAxis, type ReferenceAxisCoding} from '../lib/reference-coding';
interface Batch09Spec {recoverDormant:boolean;id:string;name:string;aliases:string[];period:string;rationale:string;caveats:string;sources:ReferenceSource[];claims:ReferenceAxisCoding[]}
export const historicalFigureBatch09Specs:Batch09Spec[] = [
  {
    "id": "aristotle",
    "name": "Aristóteles",
    "aliases": [
      "Aristotle"
    ],
    "recoverDormant": false,
    "period": "Politics, livrosI/II/VII, séculoIVa.C.; tradução Benjamin Jowett",
    "rationale": "Normas expressas sobre a cidade ideal; não mede opinião pessoal percentual nem a aplicação por governantes associados ao autor.",
    "caveats": "384–322a.C., cronologia acadêmica Stanford efetivamente lida; sem inventar dias. Comparação limitada entre polis antiga e eixos modernos: cidadania exclui mulheres, escravizados e trabalhadores; igualdade entre cidadãos não significa universalidade. Rejeição de monopólio governamental não é inferida do papel docente ou de outra biografia. Composição do tratado não tem data única comprovada;350a.C. é aproximação do host. Tradição familiar patriarcal coexiste com aborto precoce e exposição eugênica; não atribui bloco partidário contemporâneo.",
    "sources": [
      {
        "title": "Aristotle — Politics I, tradução Benjamin Jowett",
        "url": "https://classics.mit.edu/Aristotle/politics.1.one.html",
        "note": "Internet Classics Archive/MIT: tradução Jowett, §§VIII–XIII, corpo99–149 e153–180 efetivamente lido; somenteXII–XIII fundamentammor."
      },
      {
        "title": "Aristotle — Politics II, tradução Benjamin Jowett",
        "url": "https://classics.mit.edu/Aristotle/politics.2.two.html",
        "note": "Tradução Jowett: §§I–V, corpo27–72 efetivamente lido; não atribui propostas de Sócrates ao autor que as critica."
      },
      {
        "title": "Aristotle — Politics VII, tradução Benjamin Jowett",
        "url": "https://classics.mit.edu/Aristotle/politics.7.seven.html",
        "note": "Tradução Jowett: §§I–XVI, corpo27–233 efetivamente lido; normas da cidade ideal distinguidas de costumes alheios relatados."
      },
      {
        "title": "Aristotle — Stanford Encyclopedia of Philosophy, identidade",
        "url": "https://plato.stanford.edu/entries/aristotle/",
        "note": "Corpo15/48/60 efetivamente lido confirma nascimento384a.C./morte322a.C.;63–69 ressalta problemas de composição. Fonte acadêmica de identidade/limites, sem gerar códigos."
      }
    ],
    "claims": [
      {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Aristotle — Politics VII, tradução Benjamin Jowett",
            "publishedDate": "séculoIVa.C.; data aproximada350a.C. indicada pelo host",
            "accessedDate": "2026-10-08",
            "basis": "norm",
            "locator": "§§IX/XIII–XIV, corpo120–129/175/180–185; contrapontoexclusão120–126",
            "statement": "Exige que os cidadãos governem e sejam governados alternadamente, sem superioridade régia presumida."
          }
        ],
        "rationale": "A alternância de autoridade entre iguais constitui regra geral da cidade ideal.",
        "uncertainty": "Cidadania exclui trabalhadores, mulheres e escravizados. Não democracia universal nem toda constituição discutida no tratado.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "eco",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Aristotle — Politics II, tradução Benjamin Jowett",
            "publishedDate": "séculoIVa.C.; data aproximada350a.C. indicada pelo host",
            "accessedDate": "2026-10-08",
            "basis": "norm",
            "locator": "§V, corpo61–71; contrapontoVII.§X,137–143",
            "statement": "Prefere propriedade privada como regra, com uso comum por consentimento."
          }
        ],
        "rationale": "A regra abrange a titularidade produtiva e as vantagens do interesse individual.",
        "uncertainty": "VII também reserva terra e trabalhadores públicos ao culto/refeições; não propriedade privada exclusiva ou política nacional moderna.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "com",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Aristotle — Politics VII, tradução Benjamin Jowett",
            "publishedDate": "séculoIVa.C.; data aproximada350a.C. indicada pelo host",
            "accessedDate": "2026-10-08",
            "basis": "norm",
            "locator": "§§V–VI, corpo82–94: autossuficiência, importações e mercado",
            "statement": "Prefere autossuficiência e comércio para necessidades próprias, rejeitando ser mercado do mundo."
          }
        ],
        "rationale": "Impõe orientação geral de restrição à integração comercial externa, sem eliminar todo intercâmbio.",
        "uncertainty": "Importa carências e exporta excedentes; não tarifa específica nem isolamento comercial absoluto.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "rel",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Aristotle — Politics VII, tradução Benjamin Jowett",
            "publishedDate": "séculoIVa.C.; data aproximada350a.C. indicada pelo host",
            "accessedDate": "2026-10-08",
            "basis": "norm",
            "locator": "§§VIII–X/XII, corpo114–116/127–140/158–163",
            "statement": "Inclui culto e sacerdócio entre funções públicas, financiados pela propriedade pública."
          }
        ],
        "rationale": "Religião integra expressamente o desenho e os recursos das instituições políticas.",
        "uncertainty": "Não monoteísmo, primazia de igreja moderna ou decisão religiosa sobre todas as leis.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "mor",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Aristotle — Politics I, tradução Benjamin Jowett",
            "publishedDate": "séculoIVa.C.; data aproximada350a.C. indicada pelo host",
            "accessedDate": "2026-10-08",
            "basis": "norm",
            "locator": "§§XII–XIII, corpo159–180; contrapontoVII.§XVI,213–226",
            "statement": "Defende autoridade masculina permanente na família e virtudes distintas para esposas e maridos."
          }
        ],
        "rationale": "Hierarquia familiar e papéis morais de gênero são prescrições gerais, não um cargo isolado.",
        "uncertainty": "VII regula casamento/adultério mas admite aborto precoce e exposição eugênica; não conservadorismo contemporâneo uniforme.",
        "reviewedOn": "2026-10-08"
      }
    ]
  }
];

/** Unreviewed ancient construct proposal; no dormant original exists. */
export const historicalFigureBatch09:ReferenceEntry[] = historicalFigureBatch09Specs.map(spec=>{
 const sources=structuredClone(spec.sources);
 const entry:ReferenceEntry={id:spec.id,name:spec.name,aliases:spec.aliases,kind:'person',category:'historical-figure',period:spec.period,rationale:spec.rationale,caveats:spec.caveats,sources,
 vec:Object.fromEntries(AXES.map(({key})=>[key,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{}};
 for(const input of spec.claims){const result=codeReferenceAxis(input,sources);entry.vec[input.axis]=result.value;entry.evidence[input.axis]=result.evidence;entry.axisEvidence![input.axis]=result.axisEvidence;entry.coding![input.axis]=result.coding;}
 return entry;
});

/** Rejected hypothesis preserved as research only; never applied to active vectors. */
export const historicalFigureBatch09RejectedResearch:ReferenceAxisCoding[]=[
  {
    "axis": "dip",
    "position": "moderate-second",
    "confidence": "medium",
    "claims": [
      {
        "sourceTitle": "Aristotle — Politics VII, tradução Benjamin Jowett",
        "publishedDate": "séculoIVa.C.; data aproximada350a.C. indicada pelo host",
        "accessedDate": "2026-10-08",
        "basis": "norm",
        "locator": "§§II–III/XIV–XV, corpo50–64/190–206, especialmente199",
        "statement": "Prefere paz à guerra e rejeita conquistas como finalidade única das instituições."
      }
    ],
    "rationale": "A prioridade pacífica rege legislação e educação, admitindo guerra instrumental.",
    "uncertainty": "Admite império benéfico e guerra para dominar pessoas consideradas escravas naturais199; não pacifismo universal. Juízo independente necessário sobre a direção líquida.",
    "reviewedOn": "2026-10-08"
  }
];
