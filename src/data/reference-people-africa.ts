import type { AxisKey, ReferenceEntry, ReferenceSource } from './references';

const AXIS_KEYS: AxisKey[] = ['est', 'rep', 'pod', 'imi', 'dip', 'int', 'eco', 'con', 'com', 'rel', 'mor', 'tec'];
type SupportedAxis = { value: number; strength: 'high' | 'medium'; rationale: string; sourceTitle: string };
type PersonRecord = {
  id: string; name: string; category: 'public-figure' | 'historical-figure'; period: string;
  title: string; url: string; note: string; rationale: string; axes?: Partial<Record<AxisKey, SupportedAxis>>;
};
type CandidateRecord = {
  candidateOnly: true;
  id: string;
  name: string;
  category: 'public-figure' | 'historical-figure';
  period: string;
  identitySource?: { title: string; url: string };
};

const makePerson = (record: PersonRecord): ReferenceEntry => {
  const axes = record.axes ?? {};
  const vec = Object.fromEntries(AXIS_KEYS.map((axis) => [axis, axes[axis]?.value ?? 50])) as Record<AxisKey, number>;
  const evidence = Object.fromEntries(Object.entries(axes).map(([axis, fact]) => [axis, fact!.strength])) as ReferenceEntry['evidence'];
  const axisEvidence = Object.fromEntries(Object.entries(axes).map(([axis, fact]) => [axis, {
    sourceTitles: [fact!.sourceTitle], rationale: fact!.rationale,
  }])) as ReferenceEntry['axisEvidence'];
  const sources: ReferenceSource[] = [{ title: record.title, url: record.url, note: record.note }];
  return {
    id: record.id, kind: 'person', category: record.category, name: record.name, period: record.period,
    vec, rationale: record.rationale,
    caveats: 'Perfil catalogado a partir do documento indicado. Eixos sem apoio documental direto permanecem em 50 como desconhecidos. Quando menos de seis eixos têm evidência média ou alta, o perfil não participa do ranking de proximidade; a fonte e o período não autorizam extrapolar posições para toda a vida da pessoa.',
    sources, evidence, axisEvidence,
  };
};

// Unresearched names are research candidates, not profiles. They have no
// ReferenceEntry and cannot leak into the public matching catalog.
const archival = (
  id: string, name: string, period: string,
  sourceTitle = `Acervo de documentos oficiais da ONU: ${name}`,
  category: 'public-figure' | 'historical-figure' = 'historical-figure',
  sourceUrl?: string,
): CandidateRecord => ({
  candidateOnly: true,
  id,
  name,
  category,
  period,
  ...(sourceUrl ? { identitySource: { title: sourceTitle, url: sourceUrl } } : {}),
});

const records: (PersonRecord | CandidateRecord)[] = [
  {
    id: 'jomo-kenyatta', name: 'Jomo Kenyatta', category: 'historical-figure', period: 'Discurso de Madaraka Day, 1 de junho de 1967',
    title: 'President Jomo Kenyatta Speech on the occasion of Madaraka Day — 1 June 1967',
    url: 'https://www.presidentiallibrary.go.ke/node/259',
    note: 'Registro institucional e transcrição/fac-símile de discurso do próprio Kenyatta, preservado pela biblioteca presidencial queniana.',
    rationale: 'O discurso documenta autogoverno e independência queniana, mas não sustenta por si só uma posição nos doze eixos.',
  },
  {
    id: 'kenneth-kaunda', name: 'Kenneth Kaunda', category: 'historical-figure', period: 'Presidência da Zâmbia e pronunciamentos à ONU, 1964–1991',
    title: 'Address by Mr. Kenneth Kaunda, President of the Republic of Zambia — A/42/PV.26',
    url: 'https://digitallibrary.un.org/record/145310/files/A_42_PV.26-EN.pdf',
    note: 'Transcrição oficial integral do discurso de Kaunda em 6 de outubro de 1987, em nome da Zâmbia e da OUA.',
    rationale: 'O material sustenta uma leitura sobre anticolonialismo e cooperação internacional, sem cobrir as doze dimensões.',
    // The speech's multilateral setting does not establish a position on
    // non-interventionism versus nationalism; all axes remain unknown.
  },
  {
    id: 'samora-machel', name: 'Samora Machel', category: 'historical-figure', period: 'Presidência de Moçambique, 1975–1986',
    title: 'Letter dated 18 September 1978 concerning Samora Machel’s speech — UN document A/C.4/33/2',
    url: 'https://digitallibrary.un.org/record/678395?ln=en',
    note: 'A carta diplomática transmite integralmente pronunciamento de Machel sobre África Austral e autodeterminação.',
    rationale: 'O documento sustenta posições sobre anticolonialismo, solidariedade internacional e desenvolvimento, sem generalizar a toda a sua atuação.',
    // The covering letter establishes the speech's subject, not an axis stance.
  },
  archival('eduardo-mondlane', 'Eduardo Mondlane', 'Luta de libertação de Moçambique, 1962–1969'),
  archival('agostinho-neto', 'Agostinho Neto', 'Luta de libertação e primeiros anos de Angola independente, 1961–1979'),
  {
    id: 'haile-selassie', name: 'Haile Selassie', category: 'historical-figure', period: 'Apelo à Liga das Nações, 30 de junho de 1936',
    title: 'Speech by His Majesty Haile Selassie I, Emperor of Ethiopia — League of Nations Assembly, June–July 1936',
    url: 'https://www.loc.gov/resource/gdcwdl.wdl_11602/?st=gallery',
    note: 'Texto fac-similar preservado nos arquivos da Liga das Nações e disponibilizado pela Library of Congress.',
    rationale: 'O pronunciamento é um apelo à segurança coletiva, ao direito internacional e à independência etíope em face da agressão italiana.',
    // A plea for collective security during an invasion does not by itself
    // establish non-interventionism/nationalism or pacifism.
  },
  archival('menelik-ii', 'Menelik II', 'Reinado da Etiópia, 1889–1913'),
  archival('tewodros-ii', 'Tewodros II', 'Reinado da Etiópia, 1855–1868'),
  archival('cetshwayo-kampande', 'Cetshwayo kaMpande', 'Reinado zulu e guerra anglo-zulu, 1872–1879'),
  archival('moshoeshoe-i', 'Moshoeshoe I', 'Reinado e formação do Basutolândia, c. 1822–1870'),
  archival('mzilikazi', 'Mzilikazi kaMashobane', 'Reinado ndebele, c. 1820–1868'),
  archival('yaa-asantewaa', 'Yaa Asantewaa', 'Resistência ashanti, 1900–1921'),
  archival('nana-asmau', 'Nana Asma’u', 'Escritos, educação e vida pública no Califado de Sokoto, 1793–1864'),
  archival('funmilayo-ransome-kuti', 'Funmilayo Ransome-Kuti', 'Atuação política e sufragista na Nigéria, 1940–1978'),
  {
    id: 'ellen-johnson-sirleaf', name: 'Ellen Johnson Sirleaf', category: 'public-figure', period: 'Presidência da Libéria e pronunciamentos à ONU, 2006–2018',
    title: 'Address by Her Excellency Ellen Johnson Sirleaf to the General Assembly — A/61/PV.11 (19 September 2006)',
    url: 'https://digitallibrary.un.org/record/583259/files/A_61_PV.11-EN.pdf',
    note: 'Transcrição oficial de seu discurso à Assembleia Geral após a eleição presidencial.',
    rationale: 'O pronunciamento defende instituições democráticas, direitos humanos, desenvolvimento e cooperação multilateral.',
    axes: {
      rep: { value: 80, strength: 'high', sourceTitle: 'Address by Her Excellency Ellen Johnson Sirleaf to the General Assembly — A/61/PV.11 (19 September 2006)', rationale: 'O documento registra sua eleição democrática e seu compromisso declarado com instituições representativas; o recorte não presume a prática integral do governo.' },
    },
  },
  archival('gracia-machel', 'Graça Machel', 'Atuação pública e direitos de mulheres e crianças, 1990–2026', 'Our Leadership — Graça Machel Trust', 'public-figure', 'https://gracamacheltrust.org/what-drives-us/our-leadership/'),
  {
    id: 'joaquim-chissano', name: 'Joaquim Chissano', category: 'historical-figure', period: 'Presidência de Moçambique e discursos à ONU, 1986–2005',
    title: 'Address by Mr. Joaquim Alberto Chissano, President of Mozambique — A/59/PV.4 (21 September 2004)',
    url: 'https://digitallibrary.un.org/record/530720/files/A_59_PV.4-EN.pdf',
    note: 'Transcrição oficial de discurso de Chissano como presidente de Moçambique.',
    rationale: 'A fala situa o governo na transição da guerra para a paz e no desenvolvimento econômico e social.',
    // The account of Mozambique's transition from war to peace is not, by
    // itself, evidence of a general pacifist or foreign-policy orientation.
  },
  {
    id: 'abdou-diouf', name: 'Abdou Diouf', category: 'public-figure', period: 'Presidência do Senegal, 1981–2000',
    title: 'Address by Mr. Abdou Diouf, President of Senegal — A/47/PV.18 (30 September 1992)', url: 'https://digitallibrary.un.org/record/161241/files/A_47_PV.18-EN.pdf',
    note: 'Registro oficial da fala do presidente senegalês na Assembleia Geral.',
    rationale: 'A fala coloca a ONU como fórum de resolução comum de problemas e de cooperação entre Estados.',
    axes: {
      dip: { value: 40, strength: 'medium', sourceTitle: 'Address by Mr. Abdou Diouf, President of Senegal — A/47/PV.18 (30 September 1992)', rationale: 'Ao avaliar o trabalho da ONU, Diouf aponta o progresso na redução da corrida armamentista; o valor é moderadamente pacifista e limitado a este discurso.' },
    },
  },
  archival('abdoulaye-wade', 'Abdoulaye Wade', 'Presidência do Senegal, 2000–2012', 'Hommage national au Président Abdoulaye Wade à l’occasion de son centenaire — Présidence du Sénégal', 'public-figure', 'https://www.presidence.sn/fr/actualites/hommage-national-au-president-abdoulaye-wade-a-loccasion-de-son-centenaire/'),
  {
    id: 'paul-kagame', name: 'Paul Kagame', category: 'public-figure', period: 'Presidência de Ruanda e discursos à ONU, 2000–2026',
    title: 'Address by Mr. Paul Kagame, President of Rwanda — A/70/PV.16 (29 September 2015)', url: 'https://digitallibrary.un.org/record/811989/files/A_70_PV.16-EN.pdf',
    note: 'Transcrição oficial do pronunciamento de Kagame na Assembleia Geral.',
    rationale: 'A fala defende metas globais de desenvolvimento e cooperação internacional, sem representar todo o governo ou sua prática.',
    // Support for SDGs and multilateral cooperation does not determine the
    // non-interventionist/nationalist axis.
  },
  archival('kofi-annan', 'Kofi Annan', 'Secretário-Geral da ONU e diplomacia multilateral, 1997–2006'),
  archival('ngozi-okonjo-iweala', 'Ngozi Okonjo-Iweala', 'Política econômica e liderança multilateral, 2003–2026', 'Director-General: Ngozi Okonjo-Iweala — World Trade Organization', 'public-figure', 'https://www.wto.org/English/thewto_e/dg_e/dg_e.htm'),
  archival('albert-luthuli', 'Albert Luthuli', 'Presidência do ANC e campanha de resistência não violenta, 1952–1967'),
  archival('oliver-tambo', 'Oliver Tambo', 'Presidência do ANC no exílio, 1967–1991'),
  archival('chris-hani', 'Chris Hani', 'Atuação política e pronunciamentos antiapartheid, 1961–1993'),
  archival('steve-biko', 'Steve Biko', 'Escritos e movimento Black Consciousness, 1968–1977'),
  archival('desmond-tutu', 'Desmond Tutu', 'Atuação religiosa e cívica antiapartheid, 1970–2013'),
  archival('robert-sobukwe', 'Robert Sobukwe', 'Fundação e liderança do PAC, 1959–1978'),
  archival('ahmed-ben-bella', 'Ahmed Ben Bella', 'Presidência da Argélia, 1962–1965'),
  {
    id: 'houari-boumediene', name: 'Houari Boumédiène', category: 'historical-figure', period: 'Presidência da Argélia e discurso à ONU, 1974',
    title: 'Address by Mr. Houari Boumediene, President of Algeria — A/PV.2208 (10 April 1974)', url: 'https://documents.un.org/doc/undoc/gen/nl7/404/44/pdf/nl740444.pdf',
    note: 'Texto oficial do discurso de Boumédiène sobre matérias-primas e desenvolvimento.',
    rationale: 'O pronunciamento critica desigualdades comerciais internacionais e propõe coordenação econômica entre países em desenvolvimento.',
    axes: {
      eco: { value: 80, strength: 'high', sourceTitle: 'Address by Mr. Houari Boumediene, President of Algeria — A/PV.2208 (10 April 1974)', rationale: 'Boumediene defende controle soberano sobre recursos e políticas de desenvolvimento.' },
      con: { value: 75, strength: 'high', sourceTitle: 'Address by Mr. Houari Boumediene, President of Algeria — A/PV.2208 (10 April 1974)', rationale: 'A fala pede planejamento e ação coletiva para corrigir condições econômicas internacionais.' },
    },
  },
  {
    id: 'ahmed-sekou-toure', name: 'Ahmed Sékou Touré', category: 'historical-figure', period: 'Discurso à Assembleia Geral, 29 de junho de 1982',
    title: 'Address by President Ahmed Sékou Touré to the General Assembly — A/S-12/PV.26',
    url: 'https://digitallibrary.un.org/record/34621/files/A_S-12_PV.26-EN.pdf',
    note: 'Transcrição oficial do discurso de Touré na décima segunda sessão especial da Assembleia Geral, sobre desarmamento.',
    rationale: 'O pronunciamento pede cooperação internacional para enfrentar a corrida armamentista e seus efeitos sobre países em desenvolvimento.',
    axes: {
      dip: { value: 35, strength: 'high', sourceTitle: 'Address by President Ahmed Sékou Touré to the General Assembly — A/S-12/PV.26', rationale: 'Touré condena explicitamente a corrida armamentista e o desvio de recursos para armas; este pronunciamento documenta uma posição pacifista neste tema.' },
    },
  },
  archival('modibo-keita', 'Modibo Keita', 'Presidência do Mali, 1960–1968'),
  archival('felix-houphouet-boigny', 'Félix Houphouët-Boigny', 'Presidência da Costa do Marfim, 1960–1993'),
  archival('muammar-gaddafi', 'Muammar Gaddafi', 'Liderança da Líbia e discursos à ONU, 1969–2011'),
  archival('meles-zenawi', 'Meles Zenawi', 'Presidência e governo da Etiópia, 1991–2012'),
  archival('mengistu-haile-mariam', 'Mengistu Haile Mariam', 'Governo do Derg na Etiópia, 1974–1991'),
  archival('isaias-afwerki', 'Isaias Afwerki', 'Presidência da Eritreia e discursos públicos, 1993–2026', 'Keynote Address on the 35th Independence Anniversary, 24 May 2026 — Eritrea Ministry of Information', 'public-figure', 'https://shabait.com/2026/05/24/keynote-address-by-president-isaias-afwerki-on-the-occasion-of-the-35th-independence-anniversary-asmara-24-may-2026/'),
  {
    id: 'hage-geingob', name: 'Hage Geingob', category: 'historical-figure', period: 'Discurso à Assembleia Geral, 21 de setembro de 2022',
    title: 'Address by Mr. Hage Geingob, President of Namibia — A/77/PV.6 (21 September 2022)', url: 'https://digitallibrary.un.org/record/3999259/files/A_77_PV.6-EN.pdf',
    note: 'Transcrição oficial do discurso presidencial de Geingob à Assembleia Geral.',
    rationale: 'O discurso reúne propostas de ação climática, igualdade de gênero, democracia e cooperação internacional.',
    axes: {
      rep: { value: 65, strength: 'medium', sourceTitle: 'Address by Mr. Hage Geingob, President of Namibia — A/77/PV.6 (21 September 2022)', rationale: 'Geingob descreve limites constitucionais de mandato e sucessão eleitoral pacífica, além de defender democracia; o escore é moderado e restrito à fala.' },
      mor: { value: 70, strength: 'medium', sourceTitle: 'Address by Mr. Hage Geingob, President of Namibia — A/77/PV.6 (21 September 2022)', rationale: 'A defesa de igualdade de gênero e dignidade humana sustenta esta direção moderada.' },
    },
  },
  archival('john-garang', 'John Garang', 'Liderança do SPLM/A e acordo de paz no Sudão, 1983–2005'),
  {
    id: 'yoweri-museveni', name: 'Yoweri Museveni', category: 'public-figure', period: 'Presidência de Uganda e pronunciamentos públicos, 1986–2026',
    title: 'Address by Mr. Yoweri Kaguta Museveni, President of Uganda — A/71/PV.9 (20 September 2016)', url: 'https://digitallibrary.un.org/record/845875/files/A_71_PV.9-EN.pdf',
    note: 'Transcrição oficial de discurso presidencial sobre desenvolvimento e industrialização.',
    rationale: 'O discurso prioriza crescimento, transformação produtiva e energia; não define posições em eixos culturais sem apoio.',
    axes: {
      tec: { value: 70, strength: 'medium', sourceTitle: 'Address by Mr. Yoweri Kaguta Museveni, President of Uganda — A/71/PV.9 (20 September 2016)', rationale: 'Museveni destaca energia e industrialização como condições para transformar a sociedade, indicando preferência moderada por desenvolvimento tecnológico.' },
    },
  },
  archival('habib-bourguiba', 'Habib Bourguiba', 'Presidência da Tunísia, 1957–1987'),
  archival('gamal-abdel-nasser', 'Gamal Abdel Nasser', 'Presidência do Egito e discursos públicos, 1956–1970'),
  archival('anwar-sadat', 'Anwar Sadat', 'Presidência do Egito, 1970–1981'),
  archival('omar-mukhtar', 'Omar Mukhtar', 'Resistência líbia ao domínio italiano, 1911–1931'),
  archival('hassan-ii-morocco', 'Hassan II', 'Reinado do Marrocos, 1961–1999'),
  archival('mohammed-v-morocco', 'Mohammed V', 'Reinado do Marrocos e independência, 1927–1961'),
  archival('allal-al-fassi', 'Allal al-Fassi', 'Movimento nacionalista marroquino e vida parlamentar, 1930–1974'),
  {
    id: 'nnamdi-azikiwe', name: 'Nnamdi Azikiwe', category: 'historical-figure', period: 'Transição constitucional da Nigéria, 1960–1963',
    title: 'Respect for Human Dignity: An Inaugural Address — Library of Congress', url: 'https://www.loc.gov/item/2008700237/',
    note: 'A Library of Congress cataloga o texto do discurso de Azikiwe como fonte primária sobre independência e Estado de direito.',
    rationale: 'O discurso de posse aborda dignidade humana e papel constitucional do chefe de Estado.',
    axes: {
      rep: { value: 75, strength: 'high', sourceTitle: 'Respect for Human Dignity: An Inaugural Address — Library of Congress', rationale: 'Azikiwe descreve a mudança constitucional para governo autônomo sob Estado de direito.' },
      mor: { value: 70, strength: 'high', sourceTitle: 'Respect for Human Dignity: An Inaugural Address — Library of Congress', rationale: 'A dignidade humana é explicitamente o tema central do discurso.' },
    },
  },
  archival('ahmadu-bello', 'Ahmadu Bello', 'Liderança política no norte da Nigéria, 1954–1966'),
  archival('obafemi-awolowo', 'Obafemi Awolowo', 'Atuação partidária e governo da Região Oeste da Nigéria, 1949–1983'),
  archival('jerry-rawlings', 'Jerry Rawlings', 'Chefia de Estado e presidência de Gana, 1981–2001'),
  archival('seretse-khama', 'Seretse Khama', 'Presidência de Botsuana, 1966–1980'),
  archival('samia-suluhu-hassan', 'Samia Suluhu Hassan', 'Presidência da Tanzânia, 2021–2026', 'Official President’s Office — United Republic of Tanzania', 'public-figure', 'https://www.ikulu.go.tz/'),
  archival('abiy-ahmed', 'Abiy Ahmed', 'Presidência e governo da Etiópia, 2018–2026', 'Prime Minister — Office of the Prime Minister of Ethiopia', 'public-figure', 'https://pmo.gov.et/administration'),
  archival('jonas-savimbi', 'Jonas Savimbi', 'Liderança da UNITA e guerra civil angolana, 1966–2002'),
  archival('ruben-um-nyobe', 'Ruben Um Nyobè', 'Movimento anticolonial camaronês, 1948–1958'),
  archival('milton-obote', 'Milton Obote', 'Governo e presidência de Uganda, 1962–1985'),
  archival('joshua-nkomo', 'Joshua Nkomo', 'Movimento de independência do Zimbábue e vida pública, 1957–1999'),
  {
    id: 'robert-mugabe', name: 'Robert Mugabe', category: 'historical-figure', period: 'Discurso à Assembleia Geral da ONU, 2009',
    title: 'Statement by Robert Mugabe to the General Debate, 64th session (2009)', url: 'https://www.un.org/en/ga/64/generaldebate/ZW.shtml',
    note: 'Transcrição oficial da intervenção de Mugabe no debate geral da Assembleia Geral da ONU.',
    rationale: 'A fala oferece evidência delimitada sobre soberania estatal e cooperação multilateral, não sobre todo o governo.',
  },
  archival('samuel-doe', 'Samuel Doe', 'Presidência da Libéria, 1980–1990'),
  archival('william-tubman', 'William Tubman', 'Presidência da Libéria, 1944–1971'),
  archival('john-mahama', 'John Mahama', 'Presidência e atuação pública em Gana, 2012–2026', 'The Presidency of the Republic of Ghana — President Mahama', 'public-figure', 'https://presidency.gov.gh/president-mahama-inaugurates-independent-fiscal-council-to-drive-transparency-and-economic-discipline/'),
  archival('tom-mboya', 'Tom Mboya', 'Independência e política sindical no Quênia, 1950–1969'),
  archival('mwai-kibaki', 'Mwai Kibaki', 'Presidência do Quênia, 2002–2013'),
  archival('daniel-arap-moi', 'Daniel arap Moi', 'Presidência do Quênia, 1978–2002'),
  archival('mutesa-ii-buganda', 'Mutesa II de Buganda', 'Reinado de Buganda e presidência de Uganda, 1939–1969'),
  archival('hastings-kamuzu-banda', 'Hastings Kamuzu Banda', 'Presidência do Malawi, 1966–1994'),
  archival('bibi-titi-mohamed', 'Bibi Titi Mohamed', 'Organização política de mulheres na Tanzânia, 1950–1965'),
  archival('akinola-aguda', 'Akinola Aguda', 'Comissão constitucional e vida pública nigeriana, 1975–2001'),
  archival('mamadou-dia', 'Mamadou Dia', 'Presidência do Conselho do Senegal, 1957–1962'),
  archival('hamani-diori', 'Hamani Diori', 'Presidência do Níger, 1960–1974'),
  archival('leon-mba', 'Léon Mba', 'Presidência do Gabão, 1960–1967'),
  archival('david-dacko', 'David Dacko', 'Presidência da República Centro-Africana, 1960–1993'),
  archival('philibert-tsiranana', 'Philibert Tsiranana', 'Presidência de Madagascar, 1959–1972'),
  archival('moshoeshoe-ii', 'Moshoeshoe II', 'Reinado de Lesoto, 1960–1996'),
  archival('zk-matthews', 'Z.K. Matthews', 'Atuação política, acadêmica e constitucional na África do Sul, 1930–1968'),
  archival('charlotte-maxeke', 'Charlotte Maxeke', 'Atuação política e organização cívica na África do Sul, 1900–1939'),
  archival('lillian-ngoyi', 'Lillian Ngoyi', 'Atuação política e movimento antiapartheid, 1950–1980'),
  archival('winnie-madikizela-mandela', 'Winnie Madikizela-Mandela', 'Atuação política e antiapartheid, 1950–2018'),
  archival('miriam-makeba', 'Miriam Makeba', 'Atuação pública e internacional contra o apartheid, 1959–2008'),
];

export const peopleAfricaExpansion: ReferenceEntry[] = records
  .filter((record): record is PersonRecord => !('candidateOnly' in record))
  .map(makePerson);

/** Unpublished names awaiting a directly verified primary document and axis research. */
export const peopleAfricaCandidates: CandidateRecord[] = records
  .filter((record): record is CandidateRecord => 'candidateOnly' in record);
