import type { AxisKey, ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';
const reviewedOn = '2026-10-08';
/** Literal input preserved for review; independent review of three new normative claims accepted. */
export const historicalCoverage09LiveBefore = {
  "id": "ussr-1977",
  "kind": "country",
  "category": "historical-country",
  "name": "União Soviética — período Brejnev",
  "period": "Constituição de 1977 e governo Brejnev, 1977–1982; recorte codificado: Desenho normativo original de 1977 no período Brejnev, 1977–1982.",
  "vec": {
    "est": 50,
    "rep": 20,
    "pod": 50,
    "imi": 50,
    "dip": 50,
    "int": 50,
    "eco": 80,
    "con": 80,
    "com": 50,
    "rel": 50,
    "mor": 50,
    "tec": 50
  },
  "rationale": "Inferências documentais delimitadas recodificadas pelo protocolo ordinal; o vetor anterior e suas fontes foram preservados no módulo de reconciliação.",
  "caveats": "Federalismo declarado e centralização partidária precisam de análise própria: est desconhecido. Direitos e propaganda pacífica não provam liberdades ou não intervenção efetivas. Não inferimos secularismo, moral ou entusiasmo tecnológico da identidade comunista.",
  "sources": [
    {
      "title": "Constituição da URSS, 1977 — tradução integral em inglês",
      "url": "https://www.marxists.org/history/ussr/government/constitution/1977/constitution-ussr-1977.pdf",
      "note": "Fonte primária traduzida para partido dirigente, direitos declarados, propriedade e economia planificada."
    },
    {
      "title": "Soviet Union: A Country Study — Library of Congress",
      "url": "https://tile.loc.gov/storage-services/master/frd/frdcstdy/so/sovietunioncount00zick/sovietunioncount00zick.pdf",
      "note": "Estudo histórico sobre centralização, controle estatal da economia e reformas no fim da URSS."
    },
    {
      "title": "The Soviet Invasion of Afghanistan, 1978–1980 — Office of the Historian",
      "url": "https://history.state.gov/milestones/1977-1980/soviet-invasion-afghanistan",
      "note": "Registro histórico sobre a intervenção militar soviética no Afeganistão."
    }
  ],
  "evidence": {
    "rep": "medium",
    "eco": "high",
    "con": "high"
  },
  "axisEvidence": {
    "rep": {
      "sourceTitles": [
        "Constituição da URSS, 1977 — tradução integral em inglês"
      ],
      "rationale": "Supremacia partidária institucional sustenta direção autocrática forte no desenho. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Sem auditoria de pleitos; conselhos e participação declarada são contrapontos, não prova de pluralismo."
    },
    "eco": {
      "sourceTitles": [
        "Constituição da URSS, 1977 — tradução integral em inglês"
      ],
      "rationale": "Predomínio social normativo sustenta propriedade pública forte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Cooperativa não equivale a administração estatal; não mede ativos reais nem nega bens privados pessoais."
    },
    "con": {
      "sourceTitles": [
        "Constituição da URSS, 1977 — tradução integral em inglês"
      ],
      "rationale": "Planejamento nacional explícito sustenta direção forte sem negar incentivos empresariais. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Não mede implementação; lucro de contabilidade não converte desenho em mercado irrestrito."
    }
  },
  "coding": {
    "rep": {
      "axis": "rep",
      "position": "strong-second",
      "confidence": "medium",
      "rationale": "Supremacia partidária institucional sustenta direção autocrática forte no desenho.",
      "uncertainty": "Sem auditoria de pleitos; conselhos e participação declarada são contrapontos, não prova de pluralismo.",
      "reviewedOn": "2026-10-07",
      "claims": [
        {
          "sourceTitle": "Constituição da URSS, 1977 — tradução integral em inglês",
          "locator": "Arts. 2–6; PDF pp. 14–16",
          "statement": "Soberania popular formal é subordinada à direção política do Partido Comunista.",
          "basis": "norm",
          "publishedDate": "1977-10-07",
          "accessedDate": "2026-10-07"
        }
      ],
      "version": "editorial-ordinal-v1",
      "value": 20,
      "range": [
        10,
        25
      ]
    },
    "eco": {
      "axis": "eco",
      "position": "strong-first",
      "confidence": "high",
      "rationale": "Predomínio social normativo sustenta propriedade pública forte.",
      "uncertainty": "Cooperativa não equivale a administração estatal; não mede ativos reais nem nega bens privados pessoais.",
      "reviewedOn": "2026-10-07",
      "claims": [
        {
          "sourceTitle": "Constituição da URSS, 1977 — tradução integral em inglês",
          "locator": "Arts. 10–13 e 17; PDF pp. 16–19",
          "statement": "Propriedade estatal e cooperativa é fundamento econômico; setores centrais são estatais, mas bens pessoais e trabalho individual são permitidos.",
          "basis": "norm",
          "publishedDate": "1977-10-07",
          "accessedDate": "2026-10-07"
        }
      ],
      "version": "editorial-ordinal-v1",
      "value": 80,
      "range": [
        75,
        90
      ]
    },
    "con": {
      "axis": "con",
      "position": "strong-first",
      "confidence": "high",
      "rationale": "Planejamento nacional explícito sustenta direção forte sem negar incentivos empresariais.",
      "uncertainty": "Não mede implementação; lucro de contabilidade não converte desenho em mercado irrestrito.",
      "reviewedOn": "2026-10-07",
      "claims": [
        {
          "sourceTitle": "Constituição da URSS, 1977 — tradução integral em inglês",
          "locator": "Art. 16; PDF p. 19",
          "statement": "Complexo econômico integrado é dirigido por planos estatais com iniciativa empresarial e incentivos de lucro/custo.",
          "basis": "norm",
          "publishedDate": "1977-10-07",
          "accessedDate": "2026-10-07"
        }
      ],
      "version": "editorial-ordinal-v1",
      "value": 80,
      "range": [
        75,
        90
      ]
    }
  },
  "documentaryReview": {
    "status": "author-reviewed-bounded-claims",
    "reviewedOn": "2026-10-07",
    "independentReview": "pending",
    "scope": "Desenho normativo original de 1977 no período Brejnev, 1977–1982."
  },
  "unknownAxisReasons": {
    "est": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Federalismo declarado e centralização partidária precisam de análise própria: est desconhecido. Direitos e propaganda pacífica não provam liberdades ou não intervenção efetivas. Não inferimos secularismo, moral ou entusiasmo tecnológico da identidade comunista.",
    "pod": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Federalismo declarado e centralização partidária precisam de análise própria: est desconhecido. Direitos e propaganda pacífica não provam liberdades ou não intervenção efetivas. Não inferimos secularismo, moral ou entusiasmo tecnológico da identidade comunista.",
    "imi": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Federalismo declarado e centralização partidária precisam de análise própria: est desconhecido. Direitos e propaganda pacífica não provam liberdades ou não intervenção efetivas. Não inferimos secularismo, moral ou entusiasmo tecnológico da identidade comunista.",
    "dip": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Federalismo declarado e centralização partidária precisam de análise própria: est desconhecido. Direitos e propaganda pacífica não provam liberdades ou não intervenção efetivas. Não inferimos secularismo, moral ou entusiasmo tecnológico da identidade comunista.",
    "int": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Federalismo declarado e centralização partidária precisam de análise própria: est desconhecido. Direitos e propaganda pacífica não provam liberdades ou não intervenção efetivas. Não inferimos secularismo, moral ou entusiasmo tecnológico da identidade comunista.",
    "com": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Federalismo declarado e centralização partidária precisam de análise própria: est desconhecido. Direitos e propaganda pacífica não provam liberdades ou não intervenção efetivas. Não inferimos secularismo, moral ou entusiasmo tecnológico da identidade comunista.",
    "rel": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Federalismo declarado e centralização partidária precisam de análise própria: est desconhecido. Direitos e propaganda pacífica não provam liberdades ou não intervenção efetivas. Não inferimos secularismo, moral ou entusiasmo tecnológico da identidade comunista.",
    "mor": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Federalismo declarado e centralização partidária precisam de análise própria: est desconhecido. Direitos e propaganda pacífica não provam liberdades ou não intervenção efetivas. Não inferimos secularismo, moral ou entusiasmo tecnológico da identidade comunista.",
    "tec": "Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. Federalismo declarado e centralização partidária precisam de análise própria: est desconhecido. Direitos e propaganda pacífica não provam liberdades ou não intervenção efetivas. Não inferimos secularismo, moral ou entusiasmo tecnológico da identidade comunista."
  }
};
const primary: ReferenceSource = {
  title: 'Конституция СССР — редакция 7 октября 1977, первичный текст в Гарант',
  url: 'https://constitution.garant.ru/history/ussr-rsfsr/1977/red_1977/5478732/',
  note: 'Texto primário russo na edição original1977 efetivamente lido: arts.3/6,36–39,45,52,70–80. Гарант é republicação em arquivo jurídico comercial, não edição governamental oficial.'
};
const translation: ReferenceSource = {
  title: '1977 Constitution of the USSR — Bucknell, tradução Novosti1985, partesII/III',
  url: 'https://www.departments.bucknell.edu/Russian/const/77cons02.html',
  note: 'PartesII e III efetivamente lidas; ParteIII em https://www.departments.bucknell.edu/Russian/const/77cons03.html. Rodapé identifica traduçãoNovostiMoscow1985 e páginaRobertBeard1996; títuloHTML deII diz1936 erroneamente. As cláusulas codificadas foram cotejadas com original1977 russo; não se presume toda tradução1985 idêntica à norma1977.'
};
const additions: ReferenceAxisCoding[] = [
  {
    axis: 'est', position: 'moderate-first', confidence: 'medium', reviewedOn,
    rationale: 'Competências territoriais próprias e consentimento republicano sustentam federalismo normativo moderado, com predominância central delimitada.',
    uncertainty: 'Norma não demonstra autonomia prática nem saída efetiva: centralismo democrático3, direção partidária6, amplas competências federais73 e prevalência74 limitam o desenho.',
    claims: [{sourceTitle:primary.title,locator:'Arts.70–80; contrapontos3,6,73–74',statement:'Repúblicas conservam poderes fora da competência federal, constituições próprias, participação federal e consentimento territorial; centro coordena política/economia e sua lei prevalece.',basis:'norm',publishedDate:'1977-10-07',accessedDate:reviewedOn}]
  },
  {
    axis: 'imi', position: 'moderate-second', confidence: 'medium', reviewedOn,
    rationale: 'Garantia normativa de línguas nacionais na instrução e no uso público sustenta dimensão multicultural moderada.',
    uncertainty: 'Somente dimensão cultural/linguística, não entrada migratória irrestrita ou igualdade observada. Patriotismo soviético/convergência36, asilo politicamente seletivo38 e interesses do Estado39 são contrapontos.',
    relatedQuestionIds: ['imigracao_02','imigracao_08'],
    claims: [{sourceTitle:primary.title,locator:'Arts.36,45; contrapontos37–39',statement:'Igualdade entre nacionalidades inclui língua materna e línguas de outros povos; educação pode ocorrer na língua materna. Asilo é seletivo e direitos se subordinam a interesses estatais.',basis:'norm',publishedDate:'1977-10-07',accessedDate:reviewedOn}]
  },
  {
    axis: 'rel', position: 'moderate-first', confidence: 'medium', reviewedOn,
    rationale: 'Separação geral explícita entre igreja/Estado e escola/igreja sustenta orientação secular moderada no desenho jurídico.',
    uncertainty: 'Constituição permite propaganda ateísta e condiciona direitos aos interesses estatais39; direção marxista partidária6 e garantias textuais não demonstram neutralidade ou ausência de perseguição efetiva.',
    claims: [{sourceTitle:primary.title,locator:'Art.52; contrapontos6,39',statement:'Carta separa igreja do Estado e escola da igreja, protege professar qualquer religião ou nenhuma, culto e propaganda ateísta, e proíbe hostilidade religiosa.',basis:'norm',publishedDate:'1977-10-07',accessedDate:reviewedOn}]
  }
];
/** Adds three scoped claims only; preserves identity, original sources and all inherited coding. */
export function extendHistoricalCountryCoverage09(entry: ReferenceEntry): ReferenceEntry {
  if (entry.id !== 'ussr-1977') return entry;
  // Apply only to the reviewed three-axis baseline. A repeated application or
  // later useful coding must survive unchanged, including its sources/caveats.
  for (const inherited of ['rep','eco','con'] as const) {
    if (JSON.stringify(entry.coding?.[inherited]) !== JSON.stringify(historicalCoverage09LiveBefore.coding[inherited])) return entry;
  }
  for (const addition of additions) {
    if (entry.coding?.[addition.axis] || entry.evidence[addition.axis]
      || entry.axisEvidence?.[addition.axis] || entry.vec[addition.axis] !== 50) return entry;
  }
  const sources = [...entry.sources];
  for (const extra of [primary,translation]) if (!sources.some(source=>source.title===extra.title && source.url===extra.url)) sources.push(extra);
  const previousReasons = (entry as ReferenceEntry & {unknownAxisReasons?: Partial<Record<AxisKey,string>>}).unknownAxisReasons;
  const result = {...entry, sources, vec:{...entry.vec}, evidence:{...entry.evidence},axisEvidence:{...entry.axisEvidence},coding:{...entry.coding}, unknownAxisReasons:{...previousReasons}};
  for (const addition of additions) {
    const coded=codeReferenceAxis(addition,sources);
    result.vec[addition.axis]=coded.value;result.evidence[addition.axis]=coded.evidence;
    result.axisEvidence[addition.axis]=coded.axisEvidence;result.coding[addition.axis]=coded.coding;
    delete result.unknownAxisReasons[addition.axis];
  }
  return Object.assign(result, {
    documentaryReview09: {status:'author-reviewed-bounded-claims',independentReview:'accepted-bounded-primary-claims',reviewedOn,scope:'Somente acréscimos est/imi/rel, norma original1977 no recorte Brejnev1977–1982. Não recertifica três códigos herdados nem prática histórica integral.'},
    caveats: entry.caveats+' Ampliação09: federalismo, pluralidade linguística e separação religiosa são desenho original1977; prática não auditada integralmente. Tradução1985 apenas auxiliar, cláusulas cotejadas com texto original.'
  });
}
export const historicalCoverage09Audit = {id:'ussr-1977',newAxes:['est','imi','rel'],inheritedAxes:['rep','eco','con'],candidateDocumentedAxes:6,identityAdditions:0,independentReview:'accepted-bounded-primary-claims'} as const;
