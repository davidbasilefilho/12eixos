import type { ReferenceEntry, ReferenceSource } from './references';

export const existingIdeologyDefinition09PreviousSnapshot:ReferenceEntry = {
  "id": "ideology-market-socialism",
  "category": "ideology",
  "kind": "ideology",
  "name": "Socialismo de mercado",
  "period": "Oskar Lange, teoria econômica do socialismo, 1936",
  "vec": {
    "est": 50,
    "rep": 50,
    "pod": 50,
    "imi": 50,
    "dip": 50,
    "int": 50,
    "eco": 79,
    "con": 67,
    "com": 50,
    "rel": 50,
    "mor": 50,
    "tec": 50
  },
  "rationale": "Lange estuda como preços e mecanismos de mercado poderiam coordenar uma economia com propriedade social e objetivos socialistas.",
  "caveats": "O artigo modela cálculo e equilíbrio, não uma plataforma constitucional ou programa de costumes. Modelos de socialismo de mercado divergem na propriedade, governança e grau de planejamento.",
  "sources": [
    {
      "title": "On the Economic Theory of Socialism: Part One — The Review of Economic Studies",
      "url": "https://competitionandappropriation.econ.ucla.edu/wp-content/uploads/sites/95/2018/06/LangeEcTheorySocI.pdf",
      "note": "Artigo primário de Oskar Lange, publicado em 1936, sobre preços e cálculo numa economia socialista."
    }
  ],
  "evidence": {
    "eco": "medium",
    "con": "medium"
  },
  "axisEvidence": {
    "eco": {
      "sourceTitles": [
        "On the Economic Theory of Socialism: Part One — The Review of Economic Studies"
      ],
      "rationale": "Lange modela cálculo de preços em uma economia socialista baseada em propriedade pública."
    },
    "con": {
      "sourceTitles": [
        "On the Economic Theory of Socialism: Part One — The Review of Economic Studies"
      ],
      "rationale": "O artigo descreve um conselho central que coordena metas de produção e utiliza preços como sinais econômicos."
    }
  }
};

const reviewedDefinition = {
  "name": "Socialismo de mercado: diretrizes de Lange, 1936–1937",
  "period": "Artigos primários Part I (1936) e Part II (fevereiro 1937), Review of Economic Studies; páginas selecionadas da reprodução universitária",
  "rationale": "Defende propriedade social e distribuição voltada ao bem-estar, com regras produtivas do conselho central e escolha do consumidor. Sem códigos numéricos.",
  "caveats": "Recorte de prescrições normativas localizado, não leitura integral dos artigos ou resultado econômico comprovado. Preserva mercados de consumo e trabalho, escolha ocupacional e preços contábeis iterativos. Utilidade interpessoal é premissa explícita; eficácia, investimento, sabotagem e crises não são fatos validados. Hahnel também usa conselho facilitador e preços iterativos: o contraste é autoridade sobre regras e propostas produtivas, não existência de um conselho ou de iteração."
};
const locatedSources:ReferenceSource[] = [
  {
    "title": "On the Economic Theory of Socialism: Part One — Lange, 1936, university reproduction",
    "url": "https://competitionandappropriation.econ.ucla.edu/wp-content/uploads/sites/95/2018/06/LangeEcTheorySocI.pdf",
    "note": "Páginas impressas 60/62/66/68 recuperadas pelo índice da reprodução universitária; autor efetivamente leu 62/66 nesta continuação e independentemente 60/62/66/68.62 impõe regras produtivas pelo conselho e conserva mercados de consumo/trabalho;66 endossa vantagens e iteração. PDF direto20 páginas com zero linhas; screenshots sem imagem útil. Sem leitura completa/collation do facsímile."
  },
  {
    "title": "On the Economic Theory of Socialism: Part Two — Lange, 1937, university reproduction",
    "url": "https://competitionandappropriation.econ.ucla.edu/wp-content/uploads/sites/95/2018/06/LangeEcTheorySocII-1.pdf",
    "note": "Páginas impressas 123/124/134 completas pelo índice efetivamente lidas por autor e revisor independente.123–124 defende bem-estar/distribuição, consumo e ocupação livres, com comparabilidade de utilidade;134 transição abrangente condicionada aos fins do governo e exceções de compensação/técnicos. PDF direto21 páginassem texto extraído; alternativa Clemson timeout. Não artigo completo nem validação causal."
  }
];
function canonical(value:unknown):string {
 if(Array.isArray(value))return '['+value.map(canonical).join(',')+']';
 if(value!==null&&typeof value==='object')return '{'+Object.keys(value).sort().map(key=>JSON.stringify(key)+':'+canonical((value as Record<string,unknown>)[key])).join(',')+'}';
 return JSON.stringify(value)??'undefined';
}
function reviewedOutput(item:ReferenceEntry):ReferenceEntry {
 return {...item,...reviewedDefinition,vec:Object.fromEntries(Object.keys(item.vec).map(axis=>[axis,50])) as ReferenceEntry["vec"],evidence:{},axisEvidence:{},coding:{},sources:[...item.sources,...locatedSources]};
}
const expected=reviewedOutput(existingIdeologyDefinition09PreviousSnapshot);
export function reconcileExistingIdeologyDefinition09(item:ReferenceEntry):ReferenceEntry {
 if(item.id!=="ideology-market-socialism")return item;
 if(canonical(item)===canonical(expected))return item;
 if(canonical(item)!==canonical(existingIdeologyDefinition09PreviousSnapshot))throw new Error("Complete ideology-market-socialism LIVE baseline changed; independently review before applying definition overlay");
 return reviewedOutput(item);
}

export const existingIdeologyDefinition09Audit = {
  "reviewedOn": "2026-10-08",
  "integrationStatus": "Integrated guarded SAME-ID qualitative overlay; no raw catalog growth; zero located axes and unranked",
  "previousId": "ideology-market-socialism",
  "documentedAxes": [],
  "eligible": false,
  "primaryReadScope": "Independent complete indexed originals I60/62/66/68 and II123/124/134; author I62/66 and II123/124/134. Direct PDF/screenshot failures explicit; no fullarticle/facsimile claim.",
  "acceptedBoundedContrast": {
    "neighborId": "ideology-program-participatory-economics-hahnel-2014",
    "function": "Authority over production rules and allocation proposals",
    "lange": "I62 CPB imposes plant/industry production rules and preserves consumption/labour markets; I66 iterative accountingprices.",
    "hahnel": "Own chapter1 PDF16–19 rendered258–385: councils selfpropose and approve; IFB adjusts indicativeprices. Own reply PDF123 rendered3587–3611 claims IFB no discretionarypower.",
    "shared": "Socialownership, consumerchoice and iterativeprices; Hahnel councils collectiveapproval impose constraints, not unlimited workplace freedom. No broadallfamily certificate.",
    "url": "https://www.sscc.wisc.edu/soc/faculty/pages/wright/Published%20writing/Alternatives%20to%20Capitalism.pdf"
  },
  "catalogRecordsDeleted": false,
  "activeId": "ideology-market-socialism",
  "preservation": "Complete literal LIVE prior object; all original source objects retained in active source union; old unsupported ECO79/CON67 and generic grades/maps archived literally; active values unknown50 with no new axis codes"
} as const;
