import type { ReferenceEntry, ReferenceSource } from './references';

export const existingIdeologyDefinition08PreviousSnapshot:ReferenceEntry = {
  "id": "ideology-developmentalism",
  "category": "ideology",
  "kind": "ideology",
  "name": "Desenvolvimentismo",
  "period": "Raúl Prebisch, CEPAL/ONU, 1949",
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
  "rationale": "O diagnóstico centro-periferia defende industrialização, política produtiva e ação pública para alterar padrões de especialização e comércio.",
  "caveats": "Desenvolvimentismo é uma família, não sinônimo de autarquia ou socialismo. O ensaio econômico não fixa democracia, defesa, costumes ou organização territorial.",
  "sources": [
    {
      "title": "El desarrollo económico de América Latina y algunos de sus principales problemas — CEPAL",
      "url": "https://repositorio.cepal.org/handle/11362/30088",
      "note": "Ensaio primário de Prebisch, 1949, sobre industrialização e estrutura centro-periferia."
    }
  ],
  "evidence": {},
  "axisEvidence": {}
};

const reviewedDefinition = {
  "name": "Desenvolvimentismo estruturalista: diretrizes de Prebisch, 1950",
  "period": "Texto inglês revisado em 27 abril 1950, UN E/CN12/89/Rev1; proposta de desenvolvimento e discussão anticíclica",
  "rationale": "Defende industrialização para elevar o bem-estar e orientação pública do investimento. Não recebe códigos numéricos.",
  "caveats": "Diretrizes afirmativas, não programa completo de implantação nem resultados comprovados. Autor declara limites preliminares e necessidade de adaptar políticas a cada país. Conserva comércio, capital estrangeiro e iniciativa empresarial; não equivale a autarquia ou estatização geral. Efeitos causais centro/periferia não validados."
};
const locatedSources:ReferenceSource[] = [
  {
    "title": "The Economic Development of Latin America and its Principal Problems — Prebisch, revised UN English 1950 primary",
    "url": "https://archivo.cepal.org/pdfs/cdPrebisch/002.pdf",
    "note": "Metadados 0–54 e introdução completa 55–306 lidos; nesta continuação VII 1847–1989 e 2110–2238, não livro inteiro de 66 páginas. Política anticíclica/industrial e crédito direcionado 2182–2192; autor 2193–2197 distingue propostas de programa concreto. Impresso 27 abril 1950, espanhol anterior; sem datar esta versão inglesa em 1949."
  }
];
function canonical(value:unknown):string {
 if(Array.isArray(value))return '['+value.map(canonical).join(',')+']';
 if(value!==null&&typeof value==='object')return '{'+Object.keys(value).sort().map(key=>JSON.stringify(key)+':'+canonical((value as Record<string,unknown>)[key])).join(',')+'}';
 return JSON.stringify(value)??'undefined';
}
function reviewedOutput(item:ReferenceEntry):ReferenceEntry {
 return {...item,...reviewedDefinition,sources:[...item.sources,...locatedSources]};
}
const expected=reviewedOutput(existingIdeologyDefinition08PreviousSnapshot);
export function reconcileExistingIdeologyDefinition08(item:ReferenceEntry):ReferenceEntry {
 if(item.id!=="ideology-developmentalism")return item;
 if(canonical(item)===canonical(expected))return item;
 if(canonical(item)!==canonical(existingIdeologyDefinition08PreviousSnapshot))throw new Error("Complete ideology-developmentalism LIVE baseline changed; independently review before applying definition overlay");
 return reviewedOutput(item);
}

export const existingIdeologyDefinition08Audit = {
  "reviewedOn": "2026-10-08",
  "integrationStatus": "Integrated guarded SAME-ID qualitative overlay; no raw catalog growth; zero located axes and unranked",
  "previousId": "ideology-developmentalism",
  "documentedAxes": [],
  "eligible": false,
  "acceptedBoundedNearestScope": "Prebisch sector-directed housing/industrial credit2182–2192 versus Keynes chapter24 aggregate investment volume/private direction, with guidance/compromise counters; Eucken every-measure competitive-price criterion461–472 additional contrast. Preliminary/local policy limits and private enterprise retained; no universal family incompatibility.",
  "comparisonSources": [
    {
      "title": "Keynes, General Theory, Chapter 24 (1936 archive reproduction)",
      "url": "https://www.marxists.org/reference/subject/economics/keynes/general-theory/ch24.htm",
      "locator": "III, rendered lines 37–49; complete own author body 6–72 reviewed",
      "limit": "Public-private compromise 38 and guided/curbed forces 47 retained; implementation not outlined 69. No facsimile collation."
    },
    {
      "title": "Eucken 1949, abridged English translation 2006",
      "url": "https://competitionpolicyinternational.com/assets/0d358061e11f2708ad9d62634c6c40ad/Eucken%20%28Nov.%202006%29.pdf",
      "locator": "Competitive-price criterion 461–472, actual author scope 69–340 and 420–480",
      "limit": "Positive public framework and monopoly intervention retained; abridgment/translation explicit."
    }
  ],
  "catalogRecordsDeleted": false,
  "activeId": "ideology-developmentalism",
  "preservation": "Complete literal LIVE prior object; all original source objects retained in active source union; no numerical axes changed"
} as const;
