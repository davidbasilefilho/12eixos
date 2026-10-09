import type { AxisKey, ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';

const axes: AxisKey[] = ['est', 'rep', 'pod', 'imi', 'dip', 'int', 'eco', 'con', 'com', 'rel', 'mor', 'tec'];
const reviewedOn = '2026-10-07';
export type HistoricalCountryBatch05Entry = ReferenceEntry & {
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
): HistoricalCountryBatch05Entry {
  const result: HistoricalCountryBatch05Entry = {
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
export const historicalCountryBatch05: HistoricalCountryBatch05Entry[] = [
  profile({
  "id": "iceland-kingdom-1918",
  "name": "Islândia — reino em união pessoal",
  "aliases": [
    "Kingdom of Iceland"
  ],
  "period": "Reino soberano em união pessoal, 1/12/1918–1944; âncora exclusivamente na Lei de União de 30/11/1918",
  "rationale": "Soberania reconhecida e pacto revogável distinguem o reino da dependência anterior e da república posterior.",
  "caveats": "Codificação normativa editorial, não medição nem certificação de execução. Revisão independente integral pendente. A introdução editorial distingue soberania de1918 e república de1944; o §7 delega relações externas à Dinamarca com consentimento islandês para novos tratados. União pessoal não é federação interna: est desconhecido.",
  "sources": [
    {
      "title": "Dansk-Islandsk Forbundslov 1918 — transcrição da lei",
      "url": "https://danmarkshistorien.lex.dk/Dansk-Islandsk_Forbundslov,_30._november_1918",
      "note": "Fonte efetivamente consultada em7/10/2026; limites de edição e locadores em coding."
    }
  ]
}, normRows("Dansk-Islandsk Forbundslov 1918 — transcrição da lei","1918-11-30",[
  [
    "dip",
    "moderate-second",
    "§§19–20",
    "A lei comunica neutralidade permanente da Islândia e ausência de bandeira naval militar.",
    "Compromisso normativo de neutralidade sustenta contenção militar moderada.",
    "Neutralidade declarada não prova ausência de coerção, execução durante a guerra ou desarmamento universal."
  ]
]), "Leitura autoral das passagens delimitadas; identidade e recorte arquivístico descritos nas fontes. Cotejo independente integral pendente."),
  profile({
  "id": "south-africa-union-1910",
  "name": "África do Sul — União",
  "aliases": [
    "Union of South Africa"
  ],
  "period": "União de 1910–1961; recorte fundador: South Africa Act original de 20/9/1909, não toda a política posterior",
  "rationale": "União legislativa de quatro colônias com instituições próprias; não cria aliases separados por gabinete ou mudança racial posterior.",
  "caveats": "Codificação normativa editorial, não medição nem certificação de execução. Revisão independente integral pendente. O texto fundador não comprova toda execução de1910–1961. Não se acrescenta um segundo registro por1961 ou por política de apartheid; cronologia terminal corroborada pela história institucional da Presidência; validação independente integral pendente.",
  "sources": [
    {
      "title": "South Africa Act 1909 — UK legislation",
      "url": "https://www.legislation.gov.uk/ukpga/Edw7/9/9/pdfs/ukpga_19090009_en.pdf",
      "note": "Fonte efetivamente consultada em7/10/2026; limites de edição e locadores em coding."
    },
    {
      "title": "History — Presidência da África do Sul",
      "url": "https://thepresidency.gov.za/history",
      "note": "Seções Governor-General/State Presidents lidas: criação31/5/1910 e república31/5/1961; contexto institucional, não fonte de novos eixos."
    }
  ]
}, normRows("South Africa Act 1909 — UK legislation","1909-09-20",[
  [
    "est",
    "moderate-second",
    "Preâmbulo; §§84–86,90",
    "Competências provinciais enumeradas dependem de consentimento central; ordenanças contrárias a lei parlamentar não têm efeito.",
    "Subordinação normativa provincial sustenta centralização moderada.",
    "Conselhos eleitos e competências próprias contrariam centralização absoluta."
  ],
  [
    "rep",
    "moderate-second",
    "§§26,32,34–36,44",
    "Câmara é eleita, mas membros de ambas casas devem ter ascendência europeia; representação considera homens europeus.",
    "Exclusão racial institucional e representação limitada sustentam autocracia moderada.",
    "§35 preserva parcialmente eleitores do Cabo; não é ausência total de competição entre eleitores admitidos."
  ]
]), "Leitura autoral das passagens delimitadas; identidade e recorte arquivístico descritos nas fontes. Cotejo independente integral pendente."),
  profile({
  "id": "burma-parliamentary-union-1948",
  "name": "Birmânia — União parlamentar",
  "aliases": [
    "Union of Burma 1948",
    "Myanmar parlamentar"
  ],
  "period": "União independente de4/1/1948 até ruptura2/3/1962; carta24/9/1947; inclui governo provisório1958–1960 sem presumir competição contínua",
  "rationale": "Ordem parlamentar independente anterior ao Conselho Revolucionário e à carta socialista de1974.",
  "caveats": "Codificação normativa editorial, não medição nem certificação de execução. Revisão independente integral pendente. Transcrição contém OCR e remissão a impressão OBL de2008; cotejo oficial integral pendente. Budismo privilegiado e restrições à politização religiosa impedem rel graduado nesta rodada.",
  "sources": [
    {
      "title": "Constitution of the Union of Burma 1947 — transcrição OBL espelhada",
      "url": "https://www.crteducazione.org/wp-content/uploads/2025/03/MMR_Constitution_1947_EN.pdf",
      "note": "Fonte efetivamente consultada em7/10/2026; limites de edição e locadores em coding."
    },
    {
      "title": "National constitutions — Online Burma Library",
      "url": "https://www.burmalibrary.org/en/category/national-constitutions-draft-constitutions-amendments-and-announcements-texts",
      "note": "Trecho indexado identifica ruptura militar de1962; página integral indisponível, não usado para graduar."
    },
    {
      "title": "FRUS1961–1963,VolumeXXIII,document49 — memorandoHeinz6/3/1962",
      "url": "https://history.state.gov/historicaldocuments/frus1961-63v23/d49",
      "note": "Documento primário contemporâneo efetivamente lido: golpe2/3/1962 derruba U Nu e institui Conselho Revolucionário; apoio à distinção de1958cuidador, sem usar rótulo bloodless como prova de ausência de vítimas."
    }
  ]
}, normRows("Constitution of the Union of Burma 1947 — transcrição OBL espelhada","1947-09-24",[
  [
    "rep",
    "moderate-first",
    "§§56–57,63",
    "Primeiro-ministro é nomeado pela Câmara; perda da maioria desencadeia nova indicação ou dissolução.",
    "Responsabilidade parlamentar formal sustenta representação moderada.",
    "Texto não demonstra competição efetiva contínua nem funcionamento no governo provisório de1958–1960."
  ],
  [
    "eco",
    "moderate-first",
    "§§23,30,32,38,44",
    "Estado é proprietário final das terras; dirige serviços de saúde e utilidades, preservando iniciativa privada.",
    "Provisão e propriedade pública com setor privado sustentam polo público moderado.",
    "Diretrizes não são judicialmente exigíveis; não inferimos execução ou coletivização total."
  ],
  [
    "con",
    "moderate-first",
    "§§32,41–42",
    "Carta orienta planejamento da vida econômica e preferência por organizações cooperativas.",
    "Direção econômica explícita sustenta planejamento moderado.",
    "Princípios diretivos não exigíveis e iniciativa privada impedem equiparar a planejamento integral."
  ]
]), "Leitura autoral das passagens delimitadas; identidade e recorte arquivístico descritos nas fontes. Cotejo independente integral pendente."),
  profile({
  "id": "ceylon-dominion-1948",
  "name": "Ceilão — domínio independente",
  "aliases": [
    "Dominion of Ceylon"
  ],
  "period": "Domínio independente de 1948–1972; recorte textual dos Orders1946/1947 em compilação com alterações de1954 e notas futuras de1966",
  "rationale": "Governo territorial independente sob Coroa comum, anterior à república de Sri Lanka; não um simples nome alternativo contemporâneo.",
  "caveats": "Codificação normativa editorial, não medição nem certificação de execução. Revisão independente integral pendente. O PDF parlamentar oficial foi localizado, mas não forneceu texto legível nesta consulta. §29 inclui exceção comunitária eleitoral acrescentada1954: igualdade religiosa não virou classificação geral de multiculturalismo ou secularidade.",
  "sources": [
    {
      "title": "Ceylon Constitution Order1946 — compilação legislativa histórica",
      "url": "https://lankalaw.net/wp-content/uploads/2025/02/1956Y11V379C.html",
      "note": "Fonte efetivamente consultada em7/10/2026; limites de edição e locadores em coding."
    },
    {
      "title": "Ceylon Independence Order1947 — texto legislativo",
      "url": "https://lankalaw.net/wp-content/uploads/2025/02/1956Y11V377C-1.html",
      "note": "§1(4) fixa vigência4/2/1948; §2 adota convenções régias britânicas. Texto efetivamente lido."
    },
    {
      "title": "Commemorating70thAnniversary — Parlamento do Sri Lanka",
      "url": "https://www.parliament.lk/en/home/parliament-news/view/1416",
      "note": "História parlamentar lida: bicameralismo do Order, fim do Senado1971 e substituição por Assembleia da primeira constituição republicana1972."
    },
    {
      "title": "Parliamentary System — Bulletin CPA9/9/2012",
      "url": "https://www.parliament.lk/files/pdf/cpc/nb_20120909.pdf",
      "note": "p.2 explicita independência1948 e declaração republicana1972; cronologia, não graduação."
    },
    {
      "title": "Becoming a republic — Sri Lanka National Archives",
      "url": "https://archives.gov.lk/online-exhibits/path-to-freedom/republic",
      "note": "Corpo efetivamente lido: constituição22/5/1972 cria república e Presidência substituindo Governor-General; exibe cópia assinada como item arquivístico, imagem não cotejada."
    }
  ]
}, normRows("Ceylon Constitution Order1946 — compilação legislativa histórica","1946-05-15; compilação com alterações1954",[
  [
    "rep",
    "moderate-first",
    "§§11,46; §74",
    "Gabinete responde coletivamente ao Parlamento; Câmara tem membros eleitos e até seis nomeados.",
    "Responsabilidade legislativa e base eletiva sustentam representação moderada formal.",
    "Edição emendada não é1948 intacta; nomeações, cidadania restrita e mudanças eleitorais não demonstram inclusão universal."
  ]
]), "Leitura autoral das passagens delimitadas; identidade e recorte arquivístico descritos nas fontes. Cotejo independente integral pendente."),
  profile({
  "id": "iraq-kingdom-1921",
  "name": "Iraque — reino",
  "aliases": [
    "Kingdom of Iraq"
  ],
  "period": "Reino de1921–1958; recorte normativo21/3/1925 com emenda29/7/1925, não prática ou todas as revisões posteriores",
  "rationale": "Monarquia com Coroa e legislatura próprias, anterior à ordem republicana de1958.",
  "caveats": "Codificação normativa editorial, não medição nem certificação de execução. Revisão independente integral pendente. A página institucional árabe e a tradução divergem na enumeração de poderes régios; rep permanece desconhecido. Cronologia do fim em1958 não prova vigência uniforme de cada cláusula.",
  "sources": [
    {
      "title": "Constitution of the Kingdom of Iraq1925 — tradução histórica",
      "url": "https://constitution.org/1-Constitution/cons/iraq/iraqiconst19250321.html",
      "note": "Fonte efetivamente consultada em7/10/2026; limites de edição e locadores em coding."
    },
    {
      "title": "القانون الاساسي العراقي1925 — INIS",
      "url": "https://www.inis.gov.iq/rules1.html",
      "note": "Texto árabe institucional consultado dos arts.1–18; redação ampliada de poderes régios indica versão editorial não equiparada integralmente à tradução de1925."
    },
    {
      "title": "FRUS1958–1960,VolumeXII,document110 — notas Dulles14/7/1958",
      "url": "https://history.state.gov/historicaldocuments/frus1958-60v12/d110",
      "note": "Documento primário contemporâneo lido: governo monárquico derrubado e governo republicano anunciado substituindo rei; rumores sobre morte/fuga não usados."
    },
    {
      "title": "FRUS1958–1960,VolumeXII,document20 — nota editorial",
      "url": "https://history.state.gov/historicaldocuments/frus1958-60v12/d20",
      "note": "Nota histórica institucional efetivamente lida confirma golpe14/7/1958; não é despacho contemporâneo."
    },
    {
      "title": "FRUS1958–1960,VolumeXII,document112 — telegrama14/7/1958",
      "url": "https://history.state.gov/historicaldocuments/frus1958-60v12/d112",
      "note": "Telegrama efetivamente lido: golpe e novo regime; limites de informação sob toque de recolher e destino do rei não confirmado. Não usado para provar morte."
    }
  ]
}, normRows("Constitution of the Kingdom of Iraq1925 — tradução histórica","1925-03-21; emendada1925-07-29",[
  [
    "pod",
    "moderate-second",
    "Arts.7–9,12,15",
    "Carta proíbe tortura e deportação; garante acesso judicial e expressão sujeita à lei.",
    "Garantias civis delimitadas sustentam liberdade moderada normativa.",
    "Limites legais e emergências não comprovam proteção efetiva contínua."
  ],
  [
    "rel",
    "moderate-second",
    "Art.13",
    "Islamismo é religião estatal com liberdade de consciência e cultos condicionados à ordem e moral.",
    "Confissão institucional com tolerância sustenta polo religioso moderado.",
    "Não inferimos predomínio geral de lei religiosa ou crença popular."
  ]
]), "Leitura autoral das passagens delimitadas; identidade e recorte arquivístico descritos nas fontes. Cotejo independente integral pendente."),
  profile({
  "id": "egypt-kingdom-1922",
  "name": "Egito — reino",
  "aliases": [
    "Kingdom of Egypt"
  ],
  "period": "Reino1922–1953; carta1923, substituída1930 e restaurada1935; ruptura governamental1952 anterior ao término formal da Coroa",
  "rationale": "Ordem monárquica com carta e órgãos próprios, distinta da república e da união com a Síria.",
  "caveats": "Codificação normativa editorial, não medição nem certificação de execução. Revisão independente integral pendente. Tradução explicitamente não oficial; data de elaboração não indicada. Não assume continuidade da carta1923 ou exercício monárquico após1952; término formal18/6/1953 corroborado por descrição museal da Presidência; não implica continuidade normativa até essa data.",
  "sources": [
    {
      "title": "Egypt Constitution1923 — tradução não oficial International IDEA",
      "url": "https://constitutionnet.org/sites/default/files/1923_-_egyptian_constitution_english_1.pdf",
      "note": "Fonte efetivamente consultada em7/10/2026; limites de edição e locadores em coding."
    },
    {
      "title": "Constitutional history of Egypt — International IDEA",
      "url": "https://constitutionnet.org/country/egypt",
      "note": "Cronologia efetivamente consultada distingue substituição1930, restauração1935 e golpe1952; não usada para graduação."
    },
    {
      "title": "Museum of Revolutionary Command Council — Presidência egípcia",
      "url": "https://www.presidency.eg/en/%D8%A7%D9%84%D8%B1%D8%A6%D8%A7%D8%B3%D8%A9/%D9%85%D8%AA%D8%AD%D9%81-%D9%85%D8%AC%D9%84%D8%B3-%D9%82%D9%8A%D8%A7%D8%AF%D8%A9-%D8%A7%D9%84%D8%AB%D9%88%D8%B1%D8%A9/",
      "note": "Descrição museal institucional lida: tutela do rei infante e abolição monárquica18/6/1953. Contexto cronológico, não fonte de novos eixos; retórica celebratória não reproduzida."
    }
  ]
}, normRows("Egypt Constitution1923 — tradução não oficial International IDEA","1923; tradução de Joy Ghali sem data editorial",[
  [
    "pod",
    "moderate-second",
    "Arts.5–8,11,14–15,20–21,155",
    "Garantias de liberdade, domicílio e imprensa coexistem com suspensão administrativa por ordem social e emergência.",
    "Proteções delimitadas sustentam liberdade moderada formal.",
    "Exceções e suspensão constitucional impedem extrapolar norma à prática inteira."
  ],
  [
    "rel",
    "moderate-second",
    "Arts.12–13,149,153",
    "Islamismo é religião estatal; consciência é livre e ritos protegidos sob ordem e moral.",
    "Confissão institucional com tolerância sustenta polo religioso moderado.",
    "Não mede fé social nem prova teocracia; poderes régios religiosos seguem lei e costumes."
  ]
]), "Leitura autoral das passagens delimitadas; identidade e recorte arquivístico descritos nas fontes. Cotejo independente integral pendente."),
  profile({
  "id": "newfoundland-commission-1934",
  "name": "Terra Nova — Comissão de Governo",
  "aliases": [
    "Newfoundland Commission of Government"
  ],
  "period": "Governo comissarial16/2/1934–31/3/1949; norma habilitadora21/12/1933, seguido de incorporação como província canadense",
  "rationale": "Substituição de legislatura e executivo eleitos por comissão cria unidade de regime, não país fictício independente.",
  "caveats": "Codificação normativa editorial, não medição nem certificação de execução. Revisão independente integral pendente. A lei habilita Letters Patent e incorpora proposta; não é fac-símile das cartas emitidas. Dependência britânica explícita; não representa Estado soberano separado do Canadá atual.",
  "sources": [
    {
      "title": "Newfoundland Act1933 — UK legislation",
      "url": "https://www.legislation.gov.uk/ukpga/Geo5/23-24/2/pdfs/ukpga_19330002_en.pdf",
      "note": "Fonte efetivamente consultada em7/10/2026; limites de edição e locadores em coding."
    },
    {
      "title": "Commission of Government1934–1949 — Newfoundland Heritage",
      "url": "https://www.heritage.nf.ca/articles/politics/commission-government.php",
      "note": "Trecho indexado identifica posse1934 e regime1934–1949; página integral indisponível. Não usado para graduação."
    },
    {
      "title": "British North America Act1949 — Terms of Union",
      "url": "https://www.legislation.gov.uk/ukpga/Geo6/12-13-14/22/pdfs/ukpga_19490022_en.pdf",
      "note": "Lei23/3/1949 efetivamente lida: §2 revoga habilitação1933; Terms7/9/14 revivem ordem anterior16/2/1934,12/13 transferem poderes da Comissão existente,50 vigênciaao fim31/3/1949. Identidade/cronologia, sem novos códigos."
    }
  ]
}, normRows("Newfoundland Act1933 — UK legislation","1933-12-21",[
  [
    "rep",
    "strong-second",
    "§1; First Schedule, Annex(b)–(e),(g)",
    "A lei autoriza implementar comissão que substituiria legislatura e executivo, com poderes completos e responsabilidade ao governo britânico.",
    "Desenho autorizado sem legislatura eletiva local sustenta autocracia forte institucional.",
    "Anexo recomenda em linguagem condicional; cartas emitidas não foram lidas. Restauração mediante pedido popular prevista; não prova prática ou supressão geral de direitos."
  ]
]), "Leitura autoral das passagens delimitadas; identidade e recorte arquivístico descritos nas fontes. Cotejo independente integral pendente."),
  profile({
  "id": "portugal-charter-monarchy-1826",
  "name": "Portugal — monarquia da Carta",
  "aliases": [
    "Monarquia cartista portuguesa"
  ],
  "period": "Carta em vigor1826–1828,1834–1836 e1842–1910; um registro com interrupções e revisões, não governos contínuos1826–1910",
  "rationale": "Ordem de Carta outorgada e Câmara dos Pares distinta do constitucionalismo1822 e da República1910.",
  "caveats": "Codificação normativa editorial, não medição nem certificação de execução. Revisão independente integral pendente. Identidade sustentada por arquivo institucional e fundo documental efetivo. Nenhum eixo graduado: a Carta primária não pôde ser lida nesta rodada; descrição retrospectiva não substitui sua leitura normativa.",
  "sources": [
    {
      "title": "Guia do Fundo da Câmara dos Pares — Arquivo Histórico Parlamentar",
      "url": "https://www.parlamento.pt/Parlamento/Paginas/guia-fundo-camara-pares-1826-1910.aspx",
      "note": "Fonte efetivamente consultada em7/10/2026; limites de edição e locadores em coding."
    },
    {
      "title": "Carta Constitucional1826 — Parlamento português",
      "url": "https://www.parlamento.pt/parlamento/documents/cartaconstitucional.pdf",
      "note": "Fac-símile localizado; extração sem texto e captura indisponível. Não invocado como fonte de eixos."
    },
    {
      "title": "Monarquia — Assembleia da República",
      "url": "https://www.parlamento.pt/Parlamento/paginas/monarquia.aspx",
      "note": "História institucional lida da outorga, pares nomeados, deputados censitários e restaurações; identidade/contexto, não substitui cotejo da Carta."
    }
  ]
}, normRows("Guia do Fundo da Câmara dos Pares — Arquivo Histórico Parlamentar","Página arquivística sem data; acessada2026-10-07",[]), "Leitura autoral das passagens delimitadas; identidade e recorte arquivístico descritos nas fontes. Cotejo independente integral pendente."),
];
