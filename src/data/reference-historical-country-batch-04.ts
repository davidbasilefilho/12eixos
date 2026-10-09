import type { AxisKey, ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';

const axes: AxisKey[] = ['est', 'rep', 'pod', 'imi', 'dip', 'int', 'eco', 'con', 'com', 'rel', 'mor', 'tec'];
const reviewedOn = '2026-10-07';
export type HistoricalCountryBatch04Entry = ReferenceEntry & {
  kind: 'country'; category: 'historical-country';
  documentaryReview: {
    status: 'author-reviewed-bounded-claims'; reviewedOn: string;
    independentReview: 'pending'; scope: string;
  };
  unknownAxisReasons: Partial<Record<AxisKey, string>>;
};
const source = (title: string, url: string, note: string): ReferenceSource => ({ title, url, note });
const claim = (
  sourceTitle: string, locator: string, statement: string,
  basis: 'norm' | 'practice' | 'declaration', publishedDate: string,
) => ({ sourceTitle, locator, statement, basis, publishedDate, accessedDate: reviewedOn });
function profile(
  entry: Pick<ReferenceEntry, 'id' | 'name' | 'aliases' | 'period' | 'rationale' | 'caveats' | 'sources'>,
  inputs: Omit<ReferenceAxisCoding, 'reviewedOn'>[],
  reviewScope: string,
  unknownAxisReasons: Partial<Record<AxisKey, string>> = {},
): HistoricalCountryBatch04Entry {
  const result: HistoricalCountryBatch04Entry = {
    ...entry, kind: 'country', category: 'historical-country',
    vec: Object.fromEntries(axes.map(axis => [axis, 50])) as Record<AxisKey, number>,
    evidence: {}, axisEvidence: {}, coding: {},
    documentaryReview: { status: 'author-reviewed-bounded-claims', reviewedOn, independentReview: 'pending', scope: reviewScope },
    unknownAxisReasons: {},
  };
  for (const input of inputs) {
    if (result.coding![input.axis]) throw new Error(`${entry.id}: duplicate axis coding`);
    const coded = codeReferenceAxis({ ...input, reviewedOn }, entry.sources);
    result.vec[input.axis] = coded.value;
    result.evidence[input.axis] = coded.evidence;
    result.axisEvidence![input.axis] = coded.axisEvidence;
    result.coding![input.axis] = coded.coding;
  }
  for (const axis of axes) if (!result.coding![axis]) {
    result.unknownAxisReasons[axis] = unknownAxisReasons[axis]
      ?? 'As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.';
  }
  return result;
}

type Row = [AxisKey, ReferenceAxisCoding['position'], string, string, string, string];
function normRows(title: string, date: string, rows: Row[]): Omit<ReferenceAxisCoding,'reviewedOn'>[] {
  return rows.map(([axis,position,locator,statement,rationale,uncertainty])=>({axis,position,confidence:'medium',claims:[claim(title,locator,statement,'norm',date)],rationale,uncertainty}));
}
export const historicalCountryBatch04: HistoricalCountryBatch04Entry[] = [
  profile({
  "id": "north-german-confederation-1867",
  "name": "Confederação da Alemanha do Norte",
  "aliases": [],
  "period": "Estado federal de 1867–1871; carta de 1867, anterior à incorporação dos Estados do sul e ao Império de 1871",
  "rationale": "Federação setentrional com Estados membros e órgão federal próprios; distinta da confederação de 1815 e do Império de 1871.",
  "caveats": "Graduação normativa delimitada, confiança média; não certifica prática nem continuidade de todo o período. Cotejo integral e revisão independente pendentes. ",
  "sources": [
    {
      "title": "Verfassung des Norddeutschen Bundes — Bundesgesetzblatt 1867",
      "url": "https://de.wikisource.org/wiki/Verfassung_des_Norddeutschen_Bundes",
      "note": "Texto primário transcrito/traduzido: locadores em coding. Edição consultada em 7/10/2026; não constitui certificação arquivística."
    },
{
    "title": "Preußen und der Norddeutsche Bund — Deutscher Bundestag",
    "url": "https://www.bundestag.de/besuche/ausstellungen/verfassung/tafel12",
    "note": "Exposição parlamentar consultada: constituição federal1867 e transição imperial1871, não aliases de governo."
}
  ]
}, normRows("Verfassung des Norddeutschen Bundes — Bundesgesetzblatt 1867","1867",[
  [
    "est",
    "moderate-first",
    "Arts.4–8,19,36",
    "Estados participam do Bundesrat e executam tributação; competências federais enumeradas e execução coercitiva federal limitam autonomia.",
    "Partilha institucional efetiva no texto sustenta federalismo moderado.",
    "Predomínio prussiano e intervenção federal impedem inferir máxima autonomia."
  ],
  [
    "rep",
    "moderate-first",
    "Arts.5,11,15,20,23–26",
    "Reichstag eletivo secreto participa necessariamente da lei; chanceler depende da Presidência prussiana, não de confiança parlamentar.",
    "Eleição e veto legislativo sustentam representação moderada, apesar do executivo dinástico.",
    "Norma remete à lei eleitoral; universal não comprova inclusão feminina nem prática competitiva."
  ]
]), "Cláusulas delimitadas lidas pelo autor; prática e validação independente integral pendentes."),
  profile({
  "id": "france-bourbon-restoration-1814",
  "name": "França — Restauração Bourbon",
  "aliases": [],
  "period": "Restauração de 1814–1830, interrompida pelos Cem Dias de 1815; texto original de 4/6/1814",
  "rationale": "Ordem restaurada de carta outorgada e iniciativa legislativa exclusiva da Coroa, substituída pelo pacto de 1830.",
  "caveats": "Graduação normativa delimitada, confiança média; não certifica prática nem continuidade de todo o período. Cotejo integral e revisão independente pendentes. ",
  "sources": [
    {
      "title": "Charte constitutionnelle du 4 juin 1814",
      "url": "https://fr.wikisource.org/wiki/Charte_constitutionnelle_du_4_juin_1814",
      "note": "Texto primário transcrito/traduzido: locadores em coding. Edição consultada em 7/10/2026; não constitui certificação arquivística."
    },
{
    "title": "Monarchie de Juillet — Assemblée nationale",
    "url": "https://www.assemblee-nationale.fr/dyn/histoire-et-patrimoine/monarchie-de-juillet",
    "note": "Cronologia parlamentar consultada distingue Restauração, revisão de1830 e ruptura republicana de1848."
}
  ]
}, normRows("Charte constitutionnelle du 4 juin 1814","1814-06-04",[
  [
    "rep",
    "moderate-second",
    "Arts.14–22,27,35–41,46,48,50",
    "Rei controla iniciativa e emendas, nomeia pares e dissolve deputados censitários; ambas câmaras consentem leis e impostos.",
    "Hierarquia monárquica com consentimento representativo limitado sustenta autocracia moderada.",
    "Não é absolutismo: câmaras possuem consentimento tributário e legislativo."
  ],
  [
    "rel",
    "moderate-second",
    "Arts.5–7",
    "Catolicismo é religião estatal; cultos têm proteção igual, mas apenas ministros cristãos recebem recursos.",
    "Preferência institucional com pluralismo sustenta polo religioso moderado.",
    "Não prova domínio de lei religiosa ou crença pessoal; não usamos âncora forte."
  ]
]), "Cláusulas delimitadas lidas pelo autor; prática e validação independente integral pendentes."),
  profile({
  "id": "france-july-monarchy-1830",
  "name": "França — Monarquia de Julho",
  "aliases": [],
  "period": "Regime de 1830–1848; carta original de 14/8/1830, antes de emendas",
  "rationale": "Novo pacto constitucional após deposição Bourbon: iniciativa das câmaras e proibição de suspensão das leis pela Coroa distinguem o regime anterior.",
  "caveats": "Graduação normativa delimitada, confiança média; não certifica prática nem continuidade de todo o período. Cotejo integral e revisão independente pendentes. rep permanece desconhecido: suficiência do controle ministerial e competição censitária ainda requer cotejo. rel também: retirada da religião estatal não elimina financiamento cristão.",
  "sources": [
    {
      "title": "Charte constitutionnelle du 14 août 1830",
      "url": "https://fr.wikisource.org/wiki/Charte_constitutionnelle_du_14_août_1830",
      "note": "Texto primário transcrito/traduzido: locadores em coding. Edição consultada em 7/10/2026; não constitui certificação arquivística."
    },
{
    "title": "Monarchie de Juillet — Assemblée nationale",
    "url": "https://www.assemblee-nationale.fr/dyn/histoire-et-patrimoine/monarchie-de-juillet",
    "note": "Mudança de pacto e competências constitucionais em1830; não simples troca de gabinete."
}
  ]
}, normRows("Charte constitutionnelle du 14 août 1830","1830-08-14",[
  [
    "pod",
    "moderate-second",
    "Arts.4,7,49,53–54",
    "Carta garante liberdade individual, proíbe restabelecer censura e tribunais extraordinários; juízes ordinários são inamovíveis.",
    "Restrições à coerção e censura sustentam liberdade moderada formal.",
    "Exercício sujeito à lei; prática repressiva não graduada."
  ]
]), "Cláusulas delimitadas lidas pelo autor; prática e validação independente integral pendentes."),
  profile({
  "id": "belgium-unitary-kingdom-1831",
  "name": "Bélgica — reino unitário",
  "aliases": [],
  "period": "Ordem unitária fundada em 1831, anterior à federalização iniciada em 1970; âncoras somente na edição original de 7/2/1831",
  "rationale": "Estado independente unitário predecessor da federação atual, não um gabinete particular.",
  "caveats": "Graduação normativa delimitada, confiança média; não certifica prática nem continuidade de todo o período. Cotejo integral e revisão independente pendentes. est desconhecido: autonomia provincial do art.31 não é automaticamente federalismo.",
  "sources": [
    {
      "title": "Belgium Constitution 1831 — edição histórica traduzida",
      "url": "https://www.constituteproject.org/constitution/Belgium_1831",
      "note": "Texto primário transcrito/traduzido: locadores em coding. Edição consultada em 7/10/2026; não constitui certificação arquivística."
    },
    {
      "title": "Historical outline of the federalisation of Belgium — governo belga",
      "url": "https://www.belgium.be/en/about_belgium/country/history/belgium_from_1830/formation_federal_state",
      "note": "Cronologia institucional distingue primeira reforma em1970 e Estado federal criado pela revisão de5/5/1993; não usado para graduar eixos."
    }
  ]
}, normRows("Belgium Constitution 1831 — edição histórica traduzida","1831-02-07",[
  [
    "rep",
    "moderate-first",
    "Arts.26–27,40–42,47,50",
    "Câmaras têm iniciativa, investigação e emenda; deputados eleitos diretamente dependem de censo tributário e Coroa participa da lei.",
    "Poder legislativo autônomo eletivo sustenta representação moderada com exclusões.",
    "Não é sufrágio universal; competição e responsabilidade ministerial efetivas pendentes."
  ],
  [
    "pod",
    "moderate-second",
    "Arts.7–10,18–20",
    "Detenção e busca seguem formas legais; imprensa sem censura e associação são protegidas, reuniões externas sujeitas à polícia.",
    "Garantias civis delimitadas sustentam liberdade moderada normativa.",
    "Não cobre prática colonial nem exceções legislativas posteriores."
  ]
]), "Cláusulas delimitadas lidas pelo autor; prática e validação independente integral pendentes."),
  profile({
  "id": "afghanistan-constitutional-monarchy-1964",
  "name": "Afeganistão — monarquia constitucional",
  "aliases": [],
  "period": "Monarquia sob a carta de 1964 até ruptura republicana de 1973; recorte textual original de 1/10/1964",
  "rationale": "Ordem monárquica constitucional anterior à república e ao PDPA já catalogado.",
  "caveats": "Graduação normativa delimitada, confiança média; não certifica prática nem continuidade de todo o período. Cotejo integral e revisão independente pendentes. rep desconhecido sem revisão adicional do funcionamento parlamentar e poderes régios; não inferido do nome constitucional.",
  "sources": [
    {
      "title": "Afghanistan Constitution 1964 — edição histórica traduzida",
      "url": "https://www.constituteproject.org/constitution/Afghanistan_1964",
      "note": "Texto primário transcrito/traduzido: locadores em coding. Edição consultada em 7/10/2026; não constitui certificação arquivística."
    }
  ]
}, normRows("Afghanistan Constitution 1964 — edição histórica traduzida","1964-10-01",[
  [
    "pod",
    "moderate-second",
    "Arts.26,28,30–32",
    "Texto proíbe tortura e exige controle judicial de detenção; protege expressão sem aprovação prévia, com exceções urgentes de busca.",
    "Garantias processuais e expressão sustentam liberdade moderada formal.",
    "Monopólio estatal de rádio/TV e limites legais contrariam leitura irrestrita."
  ],
  [
    "rel",
    "moderate-second",
    "Arts.2,7–8",
    "Ritos estatais seguem doutrina Hanafi e rei deve professá-la; não muçulmanos mantêm ritos dentro de limites legais.",
    "Confissão institucional com tolerância limitada sustenta polo religioso moderado.",
    "Não extrapola à intensidade de crença popular ou à totalidade da lei religiosa."
  ]
]), "Cláusulas delimitadas lidas pelo autor; prática e validação independente integral pendentes."),
  profile({
  "id": "nepal-multiparty-monarchy-1990",
  "name": "Nepal — monarquia multipartidária",
  "aliases": [],
  "period": "Ordem da carta de 1990 até substituição pela Constituição Interina de 2007; norma fundadora de 9/11/1990",
  "rationale": "Ruptura explícita com Panchayat: partidos competitivos, sufrágio adulto e responsabilidade do gabinete perante câmara eleita.",
  "caveats": "Graduação normativa delimitada, confiança média; não certifica prática nem continuidade de todo o período. Cotejo integral e revisão independente pendentes. Fonte identifica base na tradução oficial de1991 com pequenas correções editoriais; não uma tradução autônoma certificada. pod desconhecido diante de exceções de detenção preventiva sem revisão prática.",
  "sources": [
    {
      "title": "Constitution of the Kingdom of Nepal 1990 — tradução oficial editada pelo ICL",
      "url": "https://www.servat.unibe.ch/icl/np00000_.html",
      "note": "Texto primário transcrito/traduzido: locadores em coding. Edição consultada em 7/10/2026; não constitui certificação arquivística."
    }
  ]
}, normRows("Constitution of the Kingdom of Nepal 1990 — tradução oficial editada pelo ICL","1990-11-09",[
  [
    "rep",
    "moderate-first",
    "Preâmbulo; arts.35–36,42,45–46",
    "Governo depende da maioria e confiança parlamentar; cidadãos maiores de18 votam em câmara eleita, com dez nomeados régios na câmara alta.",
    "Competição multipartidária e responsabilidade legislativa sustentam representação moderada formal.",
    "Poderes reservados e crises régias posteriores não são descritos como funcionamento contínuo."
  ],
  [
    "rel",
    "moderate-second",
    "Arts.4,19",
    "Reino define-se hindu; protege religiões herdadas e sua administração, mas proíbe converter outra pessoa.",
    "Identidade confessional e limite à conversão sustentam polo religioso moderado.",
    "Não infere lei religiosa predominante nem fé individual."
  ]
]), "Cláusulas delimitadas lidas pelo autor; prática e validação independente integral pendentes."),
  profile({
  "id": "philippines-commonwealth-1935",
  "name": "Filipinas — Commonwealth",
  "aliases": [],
  "period": "Commonwealth de 1935–1946, com ocupação e governo no exílio; cláusulas de direitos na edição emendada da carta de1935, anterior à independência",
  "rationale": "Unidade de transição sob soberania dos EUA, distinta da república revolucionária de1899 e da república independente.",
  "caveats": "Graduação normativa delimitada, confiança média; não certifica prática nem continuidade de todo o período. Cotejo integral e revisão independente pendentes. rep desconhecido: edição consultada inclui Congresso bicameral posterior, não deve ser atribuída a1935 original. Art.XVIII distingue Commonwealth e República.",
  "sources": [
    {
      "title": "1935 Philippine Constitution — LawPhil, edição emendada",
      "url": "https://lawphil.net/consti/cons1935.html",
      "note": "Texto primário transcrito/traduzido: locadores em coding. Edição consultada em 7/10/2026; não constitui certificação arquivística."
    }
  ]
}, normRows("1935 Philippine Constitution — LawPhil, edição emendada","1935; edição emendada",[
  [
    "pod",
    "moderate-second",
    "Art.III,sec.1(1,3,5,8,14–18)",
    "Texto exige devido processo, busca justificada, defesa e presunção de inocência; protege imprensa com exceção de segurança nas comunicações.",
    "Garantias civis explícitas sustentam liberdade moderada formal.",
    "Erro de transcrição no item13 e versão emendada impedem inferir intacta toda carta original."
  ],
  [
    "rel",
    "moderate-first",
    "Art.III,sec.1(7); art.XIV,sec.5",
    "Estabelecimento religioso e testes religiosos são proibidos; ensino religioso opcional permanece na escola pública.",
    "Não preferência institucional sustenta secularidade moderada com ensino confessional facultativo.",
    "Não mede crença nem exclui influência religiosa; cotejo da edição fundadora pendente."
  ]
]), "Cláusulas delimitadas lidas pelo autor; prática e validação independente integral pendentes."),
  profile({
  "id": "bavaria-kingdom-1818",
  "name": "Reino da Baviera",
  "aliases": [],
  "period": "Reino de1806–1918; recorte constitucional original de26/5/1818, antes de1848 e da incorporação federal de1871",
  "rationale": "Reino com instituições próprias dentro da Confederação Germânica; uma identidade conserva transições posteriores sem criar aliases por reinado.",
  "caveats": "Graduação normativa delimitada, confiança média; não certifica prática nem continuidade de todo o período. Cotejo integral e revisão independente pendentes. Tradução histórica ainda sem cotejo alemão integral. A condição de membro confederal não torna a estrutura INTERNA automaticamente federal.",
  "sources": [
    {
      "title": "Constitution of the Kingdom of Bavaria1818 — tradução histórica",
      "url": "https://en.wikisource.org/wiki/Constitution_of_the_Kingdom_of_Bavaria_(1818)",
      "note": "Texto primário transcrito/traduzido: locadores em coding. Edição consultada em 7/10/2026; não constitui certificação arquivística."
    },
    {
      "title": "The constitution of the Kingdom of Bavaria1818–1918 — Bayerische Staatsbibliothek",
      "url": "https://www.bsb-muenchen.de/en/article/the-constitution-of-the-kingdom-of-bavaria-1818-1918-a-virtual-exhibition-in-the-cultural-portal-bavarikon-2414/",
      "note": "Identificação institucional da carta e sua permanência emendada até o fim do reino; âncoras continuam estritamente1818."
    }
  ]
}, normRows("Constitution of the Kingdom of Bavaria1818 — tradução histórica","1818-05-26",[
  [
    "rep",
    "moderate-second",
    "TitleVI,arts.VII–XIII; TitleVII,arts.II–IV",
    "Representação por classes exige propriedade e fé cristã; rei dissolve câmaras, que consentem leis pessoais e impostos.",
    "Representação estamental subordinada sustenta autocracia moderada com veto tributário contrário.",
    "Não infere ausência total de representação nem competição moderna."
  ],
  [
    "rel",
    "moderate-second",
    "TitleIV,art.IX; TitleVI,art.XII",
    "Consciência doméstica é livre; três igrejas cristãs têm igualdade, mas não cristãos têm cidadania condicionada e deputados devem ser cristãos.",
    "Privilégio confessional de cidadania/cargo sustenta polo religioso moderado.",
    "Supervisão régia limita autonomia eclesial; não infere teocracia."
  ]
]), "Cláusulas delimitadas lidas pelo autor; prática e validação independente integral pendentes."),
  profile({
  "id": "spain-democratic-monarchy-1869",
  "name": "Espanha — monarquia do Sexênio Democrático",
  "aliases": [],
  "period": "Ordem monárquica de1869–1873, anterior à Primeira República; texto fundador de1869",
  "rationale": "Regime pós-ruptura com IsabelII, com carta de soberania nacional e direitos; distinto da república de1931 e do franquismo.",
  "caveats": "Graduação normativa delimitada, confiança média; não certifica prática nem continuidade de todo o período. Cotejo integral e revisão independente pendentes. rel desconhecido: culto católico financiado coexiste com liberdade pública de outros cultos; rep desconhecido sem cotejo eleitoral e funcionamento completo.",
  "sources": [
    {
      "title": "Constitución española de1869 — transcrição primária",
      "url": "https://es.wikisource.org/wiki/Constitución_española_de_1869",
      "note": "Texto primário transcrito/traduzido: locadores em coding. Edição consultada em 7/10/2026; não constitui certificação arquivística."
    },
{
    "title": "Periodos constitucionales — Senado de España",
    "url": "https://www.senado.es/web/conocersenado/senadohistoria/periodosconstitucionales/index.html",
    "note": "Cronologia consultada: monarquia de1869, abdicação e República em1873; projeto federal não implantado não cria registro."
}
  ]
}, normRows("Constitución española de1869 — transcrição primária","1869",[
  [
    "pod",
    "moderate-second",
    "Arts.12,17–23,30–31",
    "Direitos de expressão e associação são protegidos sem censura preventiva; suspensão excepcional exige lei e limites de deportação.",
    "Garantias e limites legais à exceção sustentam liberdade moderada normativa.",
    "Polícia regula reuniões externas e lei pode dissolver associações por segurança; prática não codificada."
  ]
]), "Cláusulas delimitadas lidas pelo autor; prática e validação independente integral pendentes."),
  profile({
  "id": "philippines-first-republic-1899",
  "name": "Filipinas — Primeira República",
  "aliases": [],
  "period": "República revolucionária de1899–1901; carta de Malolos de20/1/1899, em contexto de guerra",
  "rationale": "República de independência com governo próprio anterior à dominação civil dos EUA e ao Commonwealth.",
  "caveats": "Graduação normativa delimitada, confiança média; não certifica prática nem continuidade de todo o período. Cotejo integral e revisão independente pendentes. rel desconhecido: art.5 proclama separação, mas art.100 suspende sua execução. rep desconhecido: Congresso transitório inclui membros nomeados e art.99 amplia poder governamental; não converter rótulo representativo em democracia.",
  "sources": [
    {
      "title": "Malolos Constitution1899 — LawPhil, tradução primária",
      "url": "https://lawphil.net/consti/consmalo.html",
      "note": "Texto primário transcrito/traduzido: locadores em coding. Edição consultada em 7/10/2026; não constitui certificação arquivística."
    },
{
    "title": "Philippine Republic1898–1901 — NHCP, registro indexado",
    "url": "https://philhistoricsites.nhcp.gov.ph/registry_database/philippine-republic-1898-1901/",
    "note": "Texto indexado de marcador1956 identifica Presidência real de Aguinaldo em Malolos1898–1899. Página integral timeout; trecho usado somente para existência/cronologia."
}
  ]
}, normRows("Malolos Constitution1899 — LawPhil, tradução primária","1899-01-20",[
  [
    "pod",
    "moderate-second",
    "Arts.7–15,20–22,30–31,99",
    "Detenção tem prazos judiciais e busca requer fundamento; direitos podem ser suspensos por lei em emergência, com poder transitório de guerra.",
    "Garantias processuais delimitadas sustentam liberdade moderada formal, apesar da exceção.",
    "Não prova execução durante guerra; exceção transitória impede leitura irrestrita."
  ]
]), "Cláusulas delimitadas lidas pelo autor; prática e validação independente integral pendentes."),
];
