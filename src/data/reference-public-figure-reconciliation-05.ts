import type { ReferenceEntry } from './references';
import { AXES } from '../lib/scoring';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';
/** Raw base fields and full live snapshot are distinct preserved audit layers. */
export const publicFigureReconciliation05RawBefore: ReferenceEntry = {
  "id": "george-soros",
  "kind": "person",
  "category": "public-figure",
  "name": "George Soros",
  "period": "Ensaios e atuação pública, 1997–2025",
  "vec": {
  "est": 62,
  "rep": 87,
  "pod": 25,
  "imi": 18,
  "dip": 27,
  "int": 65,
  "eco": 39,
  "con": 36,
  "com": 14,
  "rel": 78,
  "mor": 85,
  "tec": 80
},
  "rationale": "Soros defende instituições abertas, pluralismo, integração internacional e regulação pública de mercados quando necessária.",
  "caveats": "O recorte resume textos escolhidos do próprio autor e sua fundação; não representa consensos sobre suas posições nem resolve diferenças entre filantropia, investimentos e política pública. Eixos militares e de propriedade estatal são pouco definidos.",
  "sources": [
    {
      "title": "The Capitalist Threat — The Atlantic",
      "url": "https://www.theatlantic.com/magazine/archive/1997/02/the-capitalist-threat/376773/",
      "note": "Ensaio do próprio Soros sobre mercados, democracia e instituições abertas."
    },
    {
      "title": "Open Society Foundations: What We Do",
      "url": "https://www.opensocietyfoundations.org/what-we-do",
      "note": "Descrição institucional de direitos, pluralismo, justiça e sociedade aberta."
    },
    {
      "title": "Open Society: a decade later — The New York Review of Books",
      "url": "https://www.nybooks.com/articles/2009/11/05/open-society-a-decade-later/",
      "note": "Reflexão de Soros sobre instituições, democracia e cooperação internacional."
    }
  ],
  "evidence": {
    "rep": "high",
    "imi": "medium",
    "int": "medium",
    "eco": "medium",
    "con": "medium",
    "rel": "medium",
    "mor": "high",
    "tec": "medium"
  }
};
export const publicFigureReconciliation05LiveBefore: ReferenceEntry = {
  "id": "george-soros",
  "kind": "person",
  "category": "public-figure",
  "name": "George Soros",
  "period": "Ensaios e atuação pública, 1997–2025",
  "vec": {
    "est": 50,
    "rep": 87,
    "pod": 50,
    "imi": 18,
    "dip": 50,
    "int": 65,
    "eco": 39,
    "con": 50,
    "com": 14,
    "rel": 50,
    "mor": 85,
    "tec": 50
  },
  "rationale": "Soros defende instituições abertas, pluralismo, integração internacional e regulação pública de mercados quando necessária.",
  "caveats": "O recorte resume textos escolhidos do próprio autor e sua fundação; não representa consensos sobre suas posições nem resolve diferenças entre filantropia, investimentos e política pública. Eixos militares e de propriedade estatal são pouco definidos.",
  "sources": [
    {
      "title": "The Capitalist Threat — The Atlantic",
      "url": "https://www.theatlantic.com/magazine/archive/1997/02/the-capitalist-threat/376773/",
      "note": "Ensaio do próprio Soros sobre mercados, democracia e instituições abertas."
    },
    {
      "title": "Open Society Foundations: What We Do",
      "url": "https://www.opensocietyfoundations.org/what-we-do",
      "note": "Descrição institucional de direitos, pluralismo, justiça e sociedade aberta."
    },
    {
      "title": "Open Society: a decade later — The New York Review of Books",
      "url": "https://www.nybooks.com/articles/2009/11/05/open-society-a-decade-later/",
      "note": "Reflexão de Soros sobre instituições, democracia e cooperação internacional."
    }
  ],
  "evidence": {
    "rep": "high",
    "imi": "medium",
    "int": "medium",
    "eco": "medium",
    "con": "medium",
    "rel": "medium",
    "mor": "high",
    "tec": "medium"
  },
  "axisEvidence": {
    "rep": {
      "sourceTitles": [
        "The Capitalist Threat — The Atlantic"
      ],
      "rationale": "Soros argumenta que mercados livres não garantem por si só uma sociedade aberta e defende instituições democráticas que os corrijam."
    },
    "imi": {
      "sourceTitles": [
        "Open Society Foundations: What We Do"
      ],
      "rationale": "A fundação descreve trabalho em direitos humanos, inclusão e defesa de grupos discriminados, sustentando uma orientação multicultural."
    },
    "int": {
      "sourceTitles": [
        "Open Society: a decade later — The New York Review of Books"
      ],
      "rationale": "Soros defende instituições e cooperação transnacionais para enfrentar problemas globais, sustentando uma inclinação internacionalista moderada."
    },
    "eco": {
      "sourceTitles": [
        "The Capitalist Threat — The Atlantic"
      ],
      "rationale": "O ensaio reconhece o papel do capitalismo, mas pede instituições públicas que limitem seus danos sociais, apoiando uma posição de mercado regulado."
    },
    "mor": {
      "sourceTitles": [
        "Open Society Foundations: What We Do"
      ],
      "rationale": "A fundação promove igualdade de direitos e proteção de grupos vulneráveis, sustentando a direção progressista."
    }
  }
};
const sources = [{ title: 'George Soros — Open Society Needs Defending', url: 'https://www.georgesoros.com/2016/12/30/open-society-needs-defending/', note: 'Ensaio primário no gabinete, efetivamente aberto em 7/10/2026. Não atribui posições da fundação automaticamente.' }, { title: 'George Soros — identidade contemporânea, Open Society Foundations', url: 'https://www.opensocietyfoundations.org/george-soros', note: 'Perfil institucional aberto em 7/10/2026 descreve atividade pessoal atual; usado somente para identidade.' }];
export const sorosReconciliationCoding: ReferenceAxisCoding[] = [{ axis: 'rep', position: 'moderate-first', confidence: 'medium', claims: [{ sourceTitle: sources[0].title, publishedDate: '2016-12-30', accessedDate: '2026-10-07', locator: 'Parágrafos I distinguished between two kinds of political regimes e The classification is too simplistic', statement: 'Declara promover governos cujos líderes são eleitos para atender ao eleitorado e opor-se a governos que manipulam súditos para interesses dos governantes.', basis: 'declaration' }], rationale: 'Escolha eleitoral e responsabilidade perante o eleitorado sustentam direção democrática delimitada.', uncertainty: 'O autor reconhece graus e variações; não fornece desenho institucional completo ou certificação de prática.', reviewedOn: '2026-10-07' }];
export function reconcileSoros(entry: ReferenceEntry): ReferenceEntry {
 if(entry.id !== 'george-soros') return entry;
 const mergedSources = [...entry.sources];
 for (const source of sources) if (!mergedSources.some(prior => prior.title === source.title && prior.url === source.url)) mergedSources.push(source);
 const result: ReferenceEntry = { ...entry, period: 'Ensaio próprio de 30 de dezembro de 2016', vec: Object.fromEntries(AXES.map(({key})=>[key,50])) as ReferenceEntry['vec'], evidence: {}, axisEvidence: {}, coding: {}, sources: mergedSources, rationale: 'Recorte documental próprio sobre governo eleitoral responsável; demais eixos desconhecidos.', caveats: 'Revisão independente pendente. Integração europeia não estabelece política comercial; redistribuição não estabelece planejamento ou propriedade pública; não transfere posições da fundação. Original bruto e registro vivo preservados separadamente.' };
 for(const input of sorosReconciliationCoding) { const coded=codeReferenceAxis(input,mergedSources); result.vec[input.axis]=coded.value; result.evidence[input.axis]=coded.evidence; result.axisEvidence![input.axis]=coded.axisEvidence; result.coding![input.axis]=coded.coding; }
 return result;
}
