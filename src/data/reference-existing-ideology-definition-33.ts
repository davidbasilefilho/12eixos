import type {ReferenceEntry} from './references';
export const existingIdeologyDefinition33PreviousSnapshot={
  "id": "civic-consociational-democracy",
  "kind": "ideology",
  "category": "ideology",
  "name": "Democracia consociativa",
  "period": "Constituição da Bélgica, federalização de 1993",
  "vec": {
    "est": 72,
    "rep": 84,
    "pod": 50,
    "imi": 82,
    "dip": 50,
    "int": 50,
    "eco": 50,
    "con": 50,
    "com": 50,
    "rel": 50,
    "mor": 50,
    "tec": 50
  },
  "rationale": "Acomodação institucional entre comunidades linguísticas, autonomia regional e partilha de poder limitam a imposição de uma maioria única.",
  "caveats": "A Constituição belga é um caso institucional, não um manual completo da teoria consociativa.",
  "sources": [
    {
      "title": "The Belgian Constitution — Belgian House of Representatives",
      "url": "https://www.dekamer.be/kvvcr/pdf_sections/publications/constitution/GrondwetUK.pdf",
      "note": "Texto constitucional sobre regiões, comunidades, línguas e instituições."
    }
  ],
  "evidence": {
    "est": "medium",
    "rep": "medium",
    "imi": "medium"
  },
  "axisEvidence": {
    "est": {
      "sourceTitles": [
        "The Belgian Constitution — Belgian House of Representatives"
      ],
      "rationale": "Competências são distribuídas entre federação, regiões e comunidades."
    },
    "rep": {
      "sourceTitles": [
        "The Belgian Constitution — Belgian House of Representatives"
      ],
      "rationale": "Órgãos legislativos eleitos integram a estrutura federal."
    },
    "imi": {
      "sourceTitles": [
        "The Belgian Constitution — Belgian House of Representatives"
      ],
      "rationale": "Comunidades linguísticas dispõem de reconhecimento e instituições próprias."
    }
  }
} as const;
const fields={
  "name": "Democracia consociativa: programa de Lijphart, 2004–2008",
  "period": "Recomendações constitucionais no resumo autoral publicado em abril de 2004; introdução própria de Thinking about Democracy, edição impressa de 2008 e edição eletrônica identificada como 2007",
  "rationale": "Propõe partilha de poder entre grupos, autonomia e representação proporcional; prefere parlamentarismo e pouco ou nenhum referendo.",
  "caveats": "Recomendação para sociedades profundamente divididas, não receita universal nem descrição da prática belga. Foram lidos o resumo prescritivo de 2004 e trechos da introdução posterior, não o artigo integral nem o livro completo. Grupos podem ser definidos pelos eleitores e mudar, sem categorias étnicas fixas. Parlamentarismo é preferido, não condição necessária de toda consociação; outras formas institucionais são admitidas. Maioria é requisito mínimo e consenso permanece compatível. As instituições prescritas diferem da ratificação pessoal de cada lei, mas não rejeitam toda participação ou deliberação pública."
} as const;
const sources=[
  {
    "title": "Thinking about Democracy — Lijphart, introdução própria, 2008",
    "url": "https://api.pageplace.de/preview/DT0400.9781135980306_A24933374/preview-9781135980306_A24933374.pdf",
    "note": "A introdução recomenda inclusão obrigatória dos grupos significativos e autonomia para sociedades profundamente divididas. Defende grupos definidos por representação eleitoral flexível e combina mecanismos consociativos e de consenso. O copyright identifica primeira publicação impressa em 2008 e edição eletrônica em 2007. Foram examinados trechos próprios da introdução, não o livro inteiro nem seu capítulo de 2004."
  },
  {
    "title": "Constitutional Design for Divided Societies — Lijphart, resumo prescritivo, abril de 2004",
    "url": "https://www.journalofdemocracy.org/articles/constitutional-design-for-divided-societies/",
    "note": "Resumo próprio no editor do Journal of Democracy, volume 15, número 2, páginas 96–109. Recomenda representação proporcional, gabinete com partilha prescrita, parlamentarismo, desconfiança construtiva e pouco ou nenhum referendo. O resumo foi efetivamente lido; acesso ao artigo integral não foi obtido, portanto suas páginas completas não são certificadas."
  }
] as const;
function canonical(v:unknown):string{if(Array.isArray(v))return '['+v.map(canonical).join(',')+']';if(v!==null&&typeof v==='object')return '{'+Object.entries(v).sort(([a],[b])=>a.localeCompare(b)).map(([k,x])=>JSON.stringify(k)+':'+canonical(x)).join(',')+'}';return JSON.stringify(v)}
function reviewed(x:ReferenceEntry):ReferenceEntry{return {...x,...fields,vec:Object.fromEntries(Object.keys(x.vec).map(k=>[k,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{},sources:[...sources,...x.sources]}}
export function reconcileExistingIdeologyDefinition33(x:ReferenceEntry):ReferenceEntry{if(x.id!==existingIdeologyDefinition33PreviousSnapshot.id)return x;const p=existingIdeologyDefinition33PreviousSnapshot as unknown as ReferenceEntry;if(canonical(x)===canonical(reviewed(p)))return x;if(canonical(x)!==canonical(p))throw new Error('Definition33 changed full baseline: '+x.id);return reviewed(x)}
export const existingIdeologyDefinition33Audit={reviewedOn:'2026-10-08',integrationStatus:'Root exact accepted payload integrated in frozen NEXT07 workingtree against836d765; commit pending',scope:'Full actual LIVE prior preserved; all original Belgian sourceobjects retained after new actual author sources;12unknown, no axis certification or raw growth.',dating:'2004actual publisherprescriptive summary NOTfullarticle;2008printed/2007electronic ownintroduction NOT2004backdating.',selection:'Proposed IV Ghannouchi→existingconsociation, old full Ghannouchi unchanged; Root exactIVaccepted8Oct2026; inactive until actual product preservation proof.'} as const;
