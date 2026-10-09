import type {ReferenceEntry} from './references';
export const existingIdeologyDefinition16PreviousSnapshot={
  "id": "civic-cosmopolitan-democracy",
  "kind": "ideology",
  "category": "ideology",
  "name": "Democracia cosmopolita",
  "period": "Archibugi, Cosmopolitical Democracy, 2000",
  "vec": {
    "est": 76,
    "rep": 82,
    "pod": 50,
    "imi": 78,
    "dip": 50,
    "int": 69,
    "eco": 50,
    "con": 50,
    "com": 78,
    "rel": 50,
    "mor": 50,
    "tec": 50
  },
  "rationale": "Estende representação, prestação de contas e direitos democráticos a instituições internacionais para tratar problemas transfronteiriços.",
  "caveats": "Teoria normativa de reforma gradual da governança global, sem plano institucional único.",
  "sources": [
    {
      "title": "Cosmopolitical Democracy — Daniele Archibugi",
      "url": "https://newleftreview.org/issues/ii4/articles/daniele-archibugi-cosmopolitical-democracy.pdf",
      "note": "Texto do autor sobre representação global e instituições."
    }
  ],
  "evidence": {
    "est": "medium",
    "rep": "medium",
    "imi": "medium",
    "int": "medium",
    "com": "medium"
  },
  "axisEvidence": {
    "est": {
      "sourceTitles": [
        "Cosmopolitical Democracy — Daniele Archibugi"
      ],
      "rationale": "Propõe instituições em múltiplas escalas além do Estado."
    },
    "rep": {
      "sourceTitles": [
        "Cosmopolitical Democracy — Daniele Archibugi"
      ],
      "rationale": "Estende representação e prestação de contas a assuntos globais."
    },
    "imi": {
      "sourceTitles": [
        "Cosmopolitical Democracy — Daniele Archibugi"
      ],
      "rationale": "Representa pessoas independentemente de cidadania nacional."
    },
    "int": {
      "sourceTitles": [
        "Cosmopolitical Democracy — Daniele Archibugi"
      ],
      "rationale": "Normas globais orientariam resolução de conflitos."
    },
    "com": {
      "sourceTitles": [
        "Cosmopolitical Democracy — Daniele Archibugi"
      ],
      "rationale": "Trata poder e recursos transnacionais como assunto político."
    }
  }
} as const;
export const existingIdeologyDefinition16ExcludedSelectedSnapshot={
  "id": "civic-earth-stewardship",
  "kind": "ideology",
  "category": "ideology",
  "name": "Ética da terra e conservação",
  "period": "A Sand County Almanac, 1949",
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
    "mor": 59,
    "tec": 31
  },
  "rationale": "A ética da terra amplia a comunidade moral para solos, águas, plantas e animais.",
  "caveats": "Fundamenta conservação, mas não doutrina de governo ou economia; catalogada sem ranking.",
  "sources": [
    {
      "title": "A Sand County Almanac — Aldo Leopold Foundation",
      "url": "https://www.aldoleopold.org/about/the-land-ethic/",
      "note": "Ensaio sobre comunidade biótica e responsabilidade ecológica."
    }
  ],
  "evidence": {
    "mor": "medium",
    "tec": "medium"
  },
  "axisEvidence": {
    "mor": {
      "sourceTitles": [
        "A Sand County Almanac — Aldo Leopold Foundation"
      ],
      "rationale": "Inclui comunidade biótica no campo da responsabilidade."
    },
    "tec": {
      "sourceTitles": [
        "A Sand County Almanac — Aldo Leopold Foundation"
      ],
      "rationale": "Não trata tecnologia como substituto de integridade ecológica."
    }
  }
} as const;
const definition={
  "name": "Democracia cosmopolita: proposta de Archibugi, 2000",
  "period": "Cosmopolitical Democracy, New Left Review 4, julho–agosto de 2000, pp 137–150; PDF republicado no arquivo do autor",
  "rationale": "Defende participação democrática global e instituições que julguem a legitimidade da força, mantendo os meios militares sob autoridade dos Estados.",
  "caveats": "Proposta normativa, não eficácia observada nem definição de todas as democracias cosmopolitas. Instituições globais sem poder coercivo coexistem com Estados e autorização coletiva. A caracterização autoral de federalistas como dissolvendo Estados não descreve Montreux, que preserva membros. Números anteriores não validados.",
  "sources": [
    {
      "title": "Cosmopolitical Democracy — Daniele Archibugi, New Left Review 4,2000, author-hosted primary PDF",
      "url": "https://www.danielearchibugi.org/downloads/papers/2017/11/Cosmopolitical_democracy.pdf",
      "note": "Artigo próprio completo pp 137–150 lido pelo autor; peer leu 175–216/223–243/285–353/362–388. Prescrição 341–347: instituições globais sem coerção julgam uso da força, Estados retêm meios militares; 175–185 programa democrático. Caminho de upload2017 não é data do artigo. Referências e alegações históricas não certificadas como fatos."
    }
  ]
} as const;
function canonical(v:unknown):string{if(Array.isArray(v))return '['+v.map(canonical).join(',')+']';if(v!==null&&typeof v==='object')return '{'+Object.entries(v).sort(([a],[b])=>a.localeCompare(b)).map(([k,x])=>JSON.stringify(k)+':'+canonical(x)).join(',')+'}';return JSON.stringify(v)}
function reviewed(x:ReferenceEntry):ReferenceEntry{const{sources,...fields}=definition;return {...x,...fields,vec:Object.fromEntries(Object.keys(x.vec).map(k=>[k,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{},sources:[...x.sources,...sources]}}
export function reconcileExistingIdeologyDefinition16(x:ReferenceEntry):ReferenceEntry{if(x.id!==existingIdeologyDefinition16PreviousSnapshot.id)return x;const previous=existingIdeologyDefinition16PreviousSnapshot as unknown as ReferenceEntry;if(canonical(x)===canonical(reviewed(previous)))return x;if(canonical(x)!==canonical(previous))throw new Error('Definition16 changed full baseline: '+x.id);return reviewed(x)}
export const existingIdeologyDefinition16Audit={reviewedOn:'2026-10-08',integrationStatus:'External authored payload pending exact peer review, integrated in working tree',comparison:'Archibugi2000 own341–347 noncoercive global legitimacy institutions/State military monopoly versus Montreux1947 own37–39 supranational armed forces/member disarmament to domestic policing. Shared global rights, UN reform, domestic States and collective force authorization retained.',selectionDecision:'Root accepted retaining existing civic-cosmopolitan-democracy in place of weak selected civic-earth-stewardship; original75 trace and full excluded record preserved, no raw growth. Activation waits actual import.',scope:'Twelve unknown axes, zero new codes. All literal LIVE values/grades/maps/sourceobjects retained recoverably in PreviousSnapshot; original sourceobjects retained in active union.'} as const;
