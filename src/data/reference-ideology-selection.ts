/** Editorial planning only: no catalog deletion, scores or default UI activation.
 * Bounded referent review is separate from distinctness and axis validation.
 */
export const ideologySelectionSnapshot = {
  "date": "2026-10-08",
  "catalogCount": 207,
  "intendedSubsetCount": 75,
  "readyForDefaultUse": false,
  "boundedReviewedReferents": 58,
  "referentCountScope": "Unique selected IDs reviewed in the ontology sequence; prior LP reading was additionally reopened for §§2.1/2.4. Combahee remains an additionally reviewed alternative; modern Leopold explanation alone is excluded from the primary-referent count.",
  "boundedTwoSidedContrasts": 39,
  "preservedOriginalCatalogCount": 206,
  "partitionCountScope": "Integrated catalog identity ledger including one explicit Inc 2004 program. All 206 original identities retained; 75selected and132alternatives, without global distinctness certification.",
  "pendingCatalogIds": [],
  "independent75Verified": false
} as const;

export const ideologyInclusionDefinition = {
  "object": "Identifiable political normative doctrine or tradition about legitimate authority, collective social/economic order and action.",
  "requirements": [
    "Located normative referent, beyond a label.",
    "Explicit scope and period.",
    "Material contrast with nearest retained neighbors, admitting umbrella/subtradition relations."
  ],
  "notSufficient": [
    "Analytical/evaluative framework alone.",
    "Policy instrument or technical project alone.",
    "Regime name or statute alone without demonstrated normative referent."
  ],
  "stateDoctrineRule": "State-authored doctrines can qualify; government authorship alone neither qualifies nor excludes.",
  "status": "editorial-working-definition-not75certification"
} as const;

export const ideologySelectionPreviousSnapshot = [
  {
    "id": "social-liberalism",
    "name": "Liberalismo social",
    "family": "liberal",
    "selectionRationale": "Rede social dentro de uma ordem liberal",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 8
  },
  {
    "id": "ideology-classical-liberalism",
    "name": "Liberalismo clássico",
    "family": "liberal",
    "selectionRationale": "Direitos e consentimento na tradição clássica",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 2
  },
  {
    "id": "ideology-ordoliberalism",
    "name": "Ordoliberalismo",
    "family": "liberal",
    "selectionRationale": "Concorrência sustentada por regras públicas",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 2
  },
  {
    "id": "libertarianism",
    "name": "Libertarianismo",
    "family": "liberal",
    "selectionRationale": "Governo limitado e liberdades civis",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 7
  },
  {
    "id": "ideology-right-minarchism",
    "name": "Minarquismo",
    "family": "liberal",
    "selectionRationale": "Estado mínimo, preservado em contraste com abolição",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 2
  },
  {
    "id": "ideology-right-anarcho-capitalism",
    "name": "Anarcocapitalismo",
    "family": "liberal",
    "selectionRationale": "Serviços de justiça e segurança privados",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 2
  },
  {
    "id": "ideology-georgism",
    "name": "Georgismo",
    "family": "liberal",
    "selectionRationale": "Renda fundiária como base tributária comum",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 0
  },
  {
    "id": "ideology-right-objectivism",
    "name": "Objetivismo político",
    "family": "liberal",
    "selectionRationale": "Justificação filosófica objetivista do laissez-faire",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 3
  },
  {
    "id": "ideology-right-technolibertarianism",
    "name": "Libertarianismo tecnológico",
    "family": "liberal",
    "selectionRationale": "Autogoverno do ciberespaço",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 1
  },
  {
    "id": "ideology-neoliberalism",
    "name": "Neoliberalismo inicial (Colóquio Walter Lippmann)",
    "family": "liberal",
    "selectionRationale": "Renovação liberal de 1938, recorte historicamente delimitado",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 0
  },
  {
    "id": "ideology-conservatism",
    "name": "Conservadorismo",
    "family": "conservative",
    "selectionRationale": "Prudência e mudança gradual",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 1
  },
  {
    "id": "ideology-social-conservatism",
    "name": "Conservadorismo social",
    "family": "conservative",
    "selectionRationale": "Costumes e valores sociais como núcleo",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 5
  },
  {
    "id": "ideology-national-conservatism",
    "name": "Conservadorismo nacional",
    "family": "conservative",
    "selectionRationale": "Soberania e continuidade nacional",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 2
  },
  {
    "id": "ideology-right-one-nation-conservatism",
    "name": "Conservadorismo de uma nação",
    "family": "conservative",
    "selectionRationale": "Dever social paternalista",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 2
  },
  {
    "id": "ideology-right-neoconservatism",
    "name": "Neoconservadorismo",
    "family": "conservative",
    "selectionRationale": "Política externa ativa de defesa da ordem liberal",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 5
  },
  {
    "id": "ideology-right-constitutional-monarchism",
    "name": "Monarquismo constitucional",
    "family": "conservative",
    "selectionRationale": "Coroa limitada por instituições parlamentares",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 1
  },
  {
    "id": "ideology-right-absolute-monarchy",
    "name": "Monarquia absoluta",
    "family": "conservative",
    "selectionRationale": "Soberania concentrada para proteção da ordem",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 2
  },
  {
    "id": "ideology-right-bonapartism",
    "name": "Bonapartismo",
    "family": "conservative",
    "selectionRationale": "Legitimação plebiscitária com executivo concentrado",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 2
  },
  {
    "id": "social-democracy",
    "name": "Social-democracia",
    "family": "socialist",
    "selectionRationale": "Proteção social na economia mista",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 8
  },
  {
    "id": "democratic-socialism",
    "name": "Socialismo democrático",
    "family": "socialist",
    "selectionRationale": "Democratização da propriedade e da produção",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 8
  },
  {
    "id": "ideology-market-socialism",
    "name": "Socialismo de mercado",
    "family": "socialist",
    "selectionRationale": "Propriedade social com coordenação por preços",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 2
  },
  {
    "id": "ideology-revolutionary-socialism",
    "name": "Socialismo revolucionário",
    "family": "socialist",
    "selectionRationale": "Ruptura revolucionária como estratégia",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 2
  },
  {
    "id": "ideology-marxism-leninism",
    "name": "Marxismo-leninismo: recorte constitucional da RPC",
    "family": "socialist",
    "selectionRationale": "Partido único e propriedade estatal no recorte RPC",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 6
  },
  {
    "id": "ideology-maoism",
    "name": "Maoismo: programa da Nova Democracia",
    "family": "socialist",
    "selectionRationale": "Programa maoista de Nova Democracia",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 4
  },
  {
    "id": "ideology-trotskyism",
    "name": "Trotskismo",
    "family": "socialist",
    "selectionRationale": "Revolução permanente e internacionalismo",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 0
  },
  {
    "id": "ideology-luxemburgism",
    "name": "Luxemburguismo",
    "family": "socialist",
    "selectionRationale": "Ação de massas e democracia operária",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 0
  },
  {
    "id": "ideology-eurocommunism",
    "name": "Eurocomunismo",
    "family": "socialist",
    "selectionRationale": "Via comunista pluralista e parlamentar",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 0
  },
  {
    "id": "ideology-council-communism",
    "name": "Comunismo de conselhos",
    "family": "socialist",
    "selectionRationale": "Conselhos operários contra centralização partidária",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 0
  },
  {
    "id": "ideology-fabianism",
    "name": "Fabianismo",
    "family": "socialist",
    "selectionRationale": "Reforma gradual e administração socialista",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 0
  },
  {
    "id": "ideology-left-yugoslav-self-management",
    "name": "Socialismo autogestionário iugoslavo",
    "family": "socialist",
    "selectionRationale": "Autogestão operária em socialismo federal",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 4
  },
  {
    "id": "ideology-anarcho-communism",
    "name": "Anarcocomunismo",
    "family": "anarchist",
    "selectionRationale": "Comunismo sem Estado e ajuda mútua",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 0
  },
  {
    "id": "ideology-anarcho-syndicalism",
    "name": "Anarcossindicalismo",
    "family": "anarchist",
    "selectionRationale": "Sindicatos e ação direta como organização social",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 0
  },
  {
    "id": "ideology-mutualism",
    "name": "Mutualismo",
    "family": "anarchist",
    "selectionRationale": "Reciprocidade econômica e crítica aos privilégios",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 0
  },
  {
    "id": "ideology-pacifist-anarchism",
    "name": "Anarquismo pacifista",
    "family": "anarchist",
    "selectionRationale": "Não violência religiosa contra coerção",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 0
  },
  {
    "id": "ideology-left-anarcho-collectivism",
    "name": "Anarquismo coletivista",
    "family": "anarchist",
    "selectionRationale": "Federação coletivista de comunas",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 8
  },
  {
    "id": "ideology-left-individualist-anarchism",
    "name": "Anarquismo individualista",
    "family": "anarchist",
    "selectionRationale": "Associação individual e oposição a monopólios",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 6
  },
  {
    "id": "ideology-left-anarcho-primitivism",
    "name": "Anarcoprimitivismo",
    "family": "anarchist",
    "selectionRationale": "Crítica radical à civilização industrial",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 2
  },
  {
    "id": "ideology-democratic-confederalism",
    "name": "Confederalismo democrático",
    "family": "anarchist",
    "selectionRationale": "Confederação não estatal e pluralismo comunitário",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 0
  },
  {
    "id": "ideology-communalism",
    "name": "Comunalismo",
    "family": "anarchist",
    "selectionRationale": "Municipalismo e ecologia social",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 0
  },
  {
    "id": "ideology-civic-nationalism",
    "name": "Nacionalismo cívico",
    "family": "decolonial",
    "selectionRationale": "Consentimento e pertencimento cívico nacional",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 0
  },
  {
    "id": "ideology-anticolonial-nationalism",
    "name": "Nacionalismo anticolonial",
    "family": "decolonial",
    "selectionRationale": "Autodeterminação e soberania pós-colonial",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 0
  },
  {
    "id": "ideology-pan-africanism",
    "name": "Pan-africanismo",
    "family": "decolonial",
    "selectionRationale": "Unidade continental africana",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 0
  },
  {
    "id": "ideology-left-nasserism",
    "name": "Nasserismo",
    "family": "decolonial",
    "selectionRationale": "Desenvolvimento estatal e nacionalismo egípcio",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 3
  },
  {
    "id": "ideology-left-baathism",
    "name": "Baathismo",
    "family": "decolonial",
    "selectionRationale": "Unidade árabe como programa partidário",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 5
  },
  {
    "id": "ideology-left-ujamaa",
    "name": "Ujamaa",
    "family": "decolonial",
    "selectionRationale": "Socialismo comunitário tanzaniano",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 2
  },
  {
    "id": "ideology-left-mariateguismo",
    "name": "Mariateguismo",
    "family": "decolonial",
    "selectionRationale": "Marxismo andino e questão da terra indígena",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 3
  },
  {
    "id": "ideology-indigenous-autonomy",
    "name": "Autonomismo indígena",
    "family": "decolonial",
    "selectionRationale": "Autonomia indígena no recorte zapatista",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 0
  },
  {
    "id": "christian-democracy",
    "name": "Democracia cristã",
    "family": "religious",
    "selectionRationale": "Democracia e economia social em tradição cristã",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 7
  },
  {
    "id": "ideology-christian-socialism",
    "name": "Socialismo cristão",
    "family": "religious",
    "selectionRationale": "Igualdade socialista com fundamento cristão",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 4
  },
  {
    "id": "ideology-distributism",
    "name": "Distributismo",
    "family": "religious",
    "selectionRationale": "Distribuição da propriedade e corpos intermediários",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 3
  },
  {
    "id": "ideology-islamic-democracy",
    "name": "Democracia muçulmana",
    "family": "religious",
    "selectionRationale": "Pluralismo civil no recorte democrático muçulmano",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 0
  },
  {
    "id": "green-politics",
    "name": "Política verde",
    "family": "ecological",
    "selectionRationale": "Democracia, não violência e proteção ecológica",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 7
  },
  {
    "id": "ideology-eco-socialism",
    "name": "Ecossocialismo",
    "family": "ecological",
    "selectionRationale": "Transformação socialista da produção ecológica",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 0
  },
  {
    "id": "civic-degrowth",
    "name": "Decrescimento",
    "family": "ecological",
    "selectionRationale": "Redução material nas economias ricas",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 4
  },
  {
    "id": "civic-ecomodernism",
    "name": "Ecomodernismo",
    "family": "ecological",
    "selectionRationale": "Desacoplamento por tecnologia e produtividade",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 1
  },
  {
    "id": "civic-bioregionalism",
    "name": "Biorregionalismo",
    "family": "ecological",
    "selectionRationale": "Territórios políticos definidos por ecossistemas",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 5
  },
  {
    "id": "civic-earth-stewardship",
    "name": "Ética da terra e conservação",
    "family": "ecological",
    "selectionRationale": "Comunidade moral incluindo seres e sistemas naturais",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 2
  },
  {
    "id": "civic-environmental-justice",
    "name": "Justiça ambiental",
    "family": "ecological",
    "selectionRationale": "Desigualdade racial e distribuição de riscos ambientais",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 3
  },
  {
    "id": "ideology-republicanism",
    "name": "Republicanismo cívico",
    "family": "democratic",
    "selectionRationale": "Cidadania, leis e participação republicana",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 0
  },
  {
    "id": "civic-participatory-democracy",
    "name": "Democracia participativa",
    "family": "democratic",
    "selectionRationale": "Participação para além da eleição",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 8
  },
  {
    "id": "civic-direct-democracy",
    "name": "Democracia direta",
    "family": "democratic",
    "selectionRationale": "Iniciativa e decisão direta por voto",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 2
  },
  {
    "id": "civic-deliberative-democracy",
    "name": "Democracia deliberativa",
    "family": "democratic",
    "selectionRationale": "Deliberação informada como fundamento",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 1
  },
  {
    "id": "civic-consociational-democracy",
    "name": "Democracia consociativa",
    "family": "democratic",
    "selectionRationale": "Partilha de poder entre comunidades",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 3
  },
  {
    "id": "civic-federal-republicanism",
    "name": "Federalismo republicano",
    "family": "democratic",
    "selectionRationale": "Competências federadas e separação de poderes",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 4
  },
  {
    "id": "civic-world-federalism",
    "name": "Federalismo mundial",
    "family": "democratic",
    "selectionRationale": "Autoridade democrática mundial limitada",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 4
  },
  {
    "id": "ideology-developmentalism",
    "name": "Desenvolvimentismo",
    "family": "development",
    "selectionRationale": "Industrialização e mudança centro-periferia",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 0
  },
  {
    "id": "ideology-dependency-theory",
    "name": "Teoria da dependência",
    "family": "development",
    "selectionRationale": "Dependência estrutural internacional",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 0
  },
  {
    "id": "civic-keynesian-policy",
    "name": "Keynesianismo de estabilização",
    "family": "development",
    "selectionRationale": "Estabilização macroeconômica pela demanda",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 1
  },
  {
    "id": "civic-capability-approach",
    "name": "Abordagem das capacidades",
    "family": "development",
    "selectionRationale": "Liberdades substantivas como medida de desenvolvimento",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 2
  },
  {
    "id": "ideology-technocracy",
    "name": "Tecnocracia",
    "family": "technical",
    "selectionRationale": "Coordenação por competência técnica",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 0
  },
  {
    "id": "civic-transhumanism",
    "name": "Transumanismo",
    "family": "technical",
    "selectionRationale": "Ampliação voluntária de capacidades humanas",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 4
  },
  {
    "id": "civic-cybernetic-governance",
    "name": "Governança cibernética",
    "family": "technical",
    "selectionRationale": "Coordenação produtiva por informação e feedback",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 3
  },
  {
    "id": "ideology-fascism",
    "name": "Fascismo histórico",
    "family": "authoritarian",
    "selectionRationale": "Estado total e mobilização nacional",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 8
  },
  {
    "id": "ideology-right-francoism",
    "name": "Franquismo",
    "family": "authoritarian",
    "selectionRationale": "Autoritarismo nacional-católico no recorte espanhol",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 6
  },
  {
    "id": "ideology-right-showa-statism",
    "name": "Estatismo japonês Shōwa",
    "family": "authoritarian",
    "selectionRationale": "Hierarquia imperial no recorte japonês Shōwa",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 7
  }
] as const;

export const ideologySelectionFamilies = [
  {
    "id": "liberal",
    "label": "Liberdade, propriedade e mercados",
    "count": 11
  },
  {
    "id": "conservative",
    "label": "Continuidade, autoridade e monarquia",
    "count": 8
  },
  {
    "id": "socialist",
    "label": "Socialismo, propriedade e estratégia",
    "count": 13
  },
  {
    "id": "anarchist",
    "label": "Antiautoritarismo e autogoverno",
    "count": 10
  },
  {
    "id": "decolonial",
    "label": "Emancipação, comunidade e autodeterminação",
    "count": 8
  },
  {
    "id": "religious",
    "label": "Tradições religiosas e política",
    "count": 4
  },
  {
    "id": "ecological",
    "label": "Ecologia e limites do desenvolvimento",
    "count": 7
  },
  {
    "id": "democratic",
    "label": "Participação e desenho institucional",
    "count": 8
  },
  {
    "id": "development",
    "label": "Desenvolvimento e coordenação econômica",
    "count": 2
  },
  {
    "id": "technical",
    "label": "Conhecimento técnico e transformação humana",
    "count": 2
  },
  {
    "id": "authoritarian",
    "label": "Mobilização autoritária histórica",
    "count": 2
  }
] as const;

export const ideologySelectionSources = [
  {
    "id": "sep-liberalism",
    "title": "Liberalism — Stanford Encyclopedia of Philosophy",
    "url": "https://plato.stanford.edu/entries/liberalism/",
    "locator": "2.1 Classical Liberalism; 2.2 The New Liberalism",
    "supports": "Família liberal inclui concepções distintas de propriedade e intervenção; não tratar todos os rótulos como aliases.",
    "readAt": "2026-10-07"
  },
  {
    "id": "sep-socialism",
    "title": "Socialism — Stanford Encyclopedia of Philosophy",
    "url": "https://plato.stanford.edu/entries/socialism/",
    "locator": "4.1 Central and Participatory Planning; 4.2 Market Socialism; 4.3 Less Comprehensive, Piecemeal Reforms",
    "supports": "Propriedade social, coordenação econômica e reforma constituem dimensões diferentes.",
    "readAt": "2026-10-07"
  },
  {
    "id": "sep-anarchism",
    "title": "Anarchism — Stanford Encyclopedia of Philosophy",
    "url": "https://plato.stanford.edu/entries/anarchism/",
    "locator": "1.1 Political Anarchism; 2.4 Individualism, Libertarianism, and Socialist Anarchism",
    "supports": "Crítica da autoridade não elimina divergências individualistas, socialistas e religiosas.",
    "readAt": "2026-10-07"
  },
  {
    "id": "sep-conservatism",
    "title": "Conservatism — Stanford Encyclopedia of Philosophy",
    "url": "https://plato.stanford.edu/entries/conservatism/",
    "locator": "Introdução; 1.3 Tradition and gradual reform; 1.4 Formal procedural vs substantive senses",
    "supports": "Prudência conservadora não deve ser igualada automaticamente a reação ou direita radical.",
    "readAt": "2026-10-07"
  },
  {
    "id": "sep-democracy",
    "title": "Democracy — Stanford Encyclopedia of Philosophy",
    "url": "https://plato.stanford.edu/entries/democracy/",
    "locator": "1. Democracy Defined; 2.1 Justifications of Democracy",
    "supports": "Procedimentos institucionais e justificações democráticas são níveis diferentes de descrição.",
    "readAt": "2026-10-07"
  },
  {
    "id": "sep-nationalism",
    "title": "Nationalism — Stanford Encyclopedia of Philosophy",
    "url": "https://plato.stanford.edu/entries/nationalism/",
    "locator": "1. What is a Nation?; 2. Nationalism and Patriotism",
    "supports": "Autonomia cultural e Estado próprio não são equivalentes necessários.",
    "readAt": "2026-10-07"
  },
  {
    "id": "sep-environment",
    "title": "Environmental Ethics — Stanford Encyclopedia of Philosophy",
    "url": "https://plato.stanford.edu/entries/ethics-environmental/",
    "locator": "1. Introduction; 2. The Development of Environmental Ethics",
    "supports": "Proteção ambiental admite fundamentos antropocêntricos e não antropocêntricos.",
    "readAt": "2026-10-07"
  },
  {
    "id": "sep-capability",
    "title": "The Capability Approach — Stanford Encyclopedia of Philosophy",
    "url": "https://plato.stanford.edu/entries/capability-approach/",
    "locator": "1.1 Background; 1.2 Capability framework or capability theory?",
    "supports": "Capacidades são estrutura normativa, não necessariamente ideologia política completa.",
    "readAt": "2026-10-07"
  },
  {
    "id": "ica",
    "title": "Cooperative identity, values & principles — ICA",
    "url": "https://www.ica.coop/en/cooperatives/cooperative-identity",
    "locator": "Definition; Principles 2, 3 and 4",
    "supports": "Forma empresarial democrática não determina por si um programa estatal abrangente.",
    "readAt": "2026-10-07"
  },
  {
    "id": "ocalan",
    "title": "Democratic Confederalism — Abdullah Öcalan, 2017",
    "url": "https://ocalanbooks.com/downloads/EN-brochure_democratic-confederalism_2017.pdf",
    "locator": "Introdução; III; IV; capa",
    "supports": "Paradigma não estatal de participação comunitária; não equivale a federalismo estatal apenas pelo nome.",
    "readAt": "2026-10-07"
  },
  {
    "id": "locke",
    "title": "Second Treatise of Government — John Locke",
    "url": "https://www.gutenberg.org/files/7370/7370-h/7370-h.htm",
    "locator": "Chapters VIII and IX",
    "supports": "Consentimento e fins da sociedade política; o mesmo documento aparece sob dois rótulos locais.",
    "readAt": "2026-10-07"
  },
  {
    "id": "ervin-1993",
    "title": "Anarchism and the Black Revolution — Lorenzo Kom’boa Ervin, 1993 edition",
    "url": "https://theanarchistlibrary.org/library/lorenzo-kom-boa-ervin-anarchism-and-the-black-revolution",
    "locator": "Dedication dated September 1993; Ch.1 Race and Class; Ch.2 Commune; Ch.3 principles",
    "supports": "Conceito racializado de libertação ligado a crítica do Estado/capitalismo e organização comunitária; não simples alias de nacionalismo negro.",
    "readAt": "2026-10-07"
  },
  {
    "id": "cole-1920",
    "title": "Guild Socialism Re-Stated — G. D. H. Cole, 1920; scan reprinted 1921",
    "url": "https://upload.wikimedia.org/wikipedia/commons/5/57/Guild_socialism_re-stated_(IA_guildsocialismre00coleiala).pdf",
    "locator": "Preface; Chapter I printed pp.9–14, scan pp.13–18; chapter II/IV/VII headings",
    "supports": "Autogoverno industrial e político como teoria de sociedade; não só instrumento de estabilização.",
    "readAt": "2026-10-07"
  },
  {
    "id": "konkin-1980",
    "title": "New Libertarian Manifesto — Samuel Edward Konkin III, 1980/1983 with 2006 editorial foreword",
    "url": "https://theanarchistlibrary.org/library/samuel-edward-konkin-iii-new-libertarian-manifesto",
    "locator": "Prefaces; I Statism; II Agorism; III Counter-Economics",
    "supports": "Mercado voluntário sem Estado com contraeconomia e rejeição de partidos; estratégia adicional ao ideal de mercado sem Estado.",
    "readAt": "2026-10-07"
  },
  {
    "id": "goldman-1906",
    "title": "The Tragedy of Woman’s Emancipation — Emma Goldman, 1906",
    "url": "https://theanarchistlibrary.org/library/emma-goldman-the-tragedy-of-woman-s-emancipation",
    "locator": "Paragraphs on suffrage, factory/home dependence, marriage and internal tyrants; final paragraphs",
    "supports": "Emancipação de gênero além de sufrágio e emprego; fundamento anarquista-feminista, não prova do recorte espanhol 1936–1939.",
    "readAt": "2026-10-07"
  },
  {
    "id": "kokutai-1937",
    "title": "Kokutai no Hongi — 1937 excerpts, Columbia 2005",
    "url": "https://afe.easia.columbia.edu/ps/japan/kokutai.pdf",
    "locator": "Introduction, Our Mission, Longer Selection; PDF pp.1–5",
    "supports": "Doutrina estatal normativa de essência nacional e autoridade imperial; não apenas nome de regime.",
    "readAt": "2026-10-07"
  },
  {
    "id": "keynes-ch24",
    "title": "The General Theory — John Maynard Keynes, 1936 Chapter 24",
    "url": "https://www.marxists.org/reference/subject/economics/keynes/general-theory/ch24.htm",
    "locator": "Concluding Notes on the Social Philosophy; I–V",
    "supports": "Há filosofia social ampla em Keynes, mas o ID selecionado era apenas estabilização; exclusão limitada ao escopo local.",
    "readAt": "2026-10-07"
  },
  {
    "id": "mujeres-primary-collection",
    "title": "Mujeres Libres, España 1936–1939 — documents collected by Mary Nash, 1975",
    "url": "https://mirror.anarhija.net/es.theanarchistlibrary.org/mirror/m/mn/mary-nash-mujeres-libres.a4.pdf",
    "locator": "Cómo organizar una agrupación Mujeres Libres, printed pp.61–64; imposed PDF initial pages",
    "supports": "Comitês que coordenam sem mandar, alfabetização, trabalho e assistência social: programa coletivo além de crítica matrimonial individual. Não alegamos leitura de Finalidades.",
    "readAt": "2026-10-07"
  },
  {
    "id": "degrowth-paris-2008-reprint",
    "title": "Paris 2008 Degrowth Declaration — primary text reproduced ISEE October 2008 newsletter",
    "url": "https://isecoeco.org/pdf/Newsletter_2008_Oct.pdf",
    "locator": "Printed pp21–22/PDF pp21–22: DECLARATION, right-sizing and degrowth characteristics points1–7",
    "supports": "Programa normativo de transformação econômica, equidade, democracia participativa, redução material nas economias excedentes e estado estacionário; não simples recessão.",
    "readAt": "2026-10-07"
  },
  {
    "id": "ecomodernism-2015",
    "title": "An Ecomodernist Manifesto — authors 2015",
    "url": "https://www.ecomodernism.org/manifesto-english",
    "locator": "Opening statement; §§1–2,6–7: relative/absolute decoupling; public innovation; democracy/pluralism",
    "supports": "Programa coletivo de desacoplamento tecnológico com crescimento econômico, instituições públicas e civis, democracia e pluralismo; não simples técnica nem sinônimo de laissez-faire.",
    "readAt": "2026-10-07"
  },
  {
    "id": "combahee-1977-yale-reprint",
    "title": "Combahee River Collective Statement 1977 — primary text in Yale course reader",
    "url": "https://americanstudies.yale.edu/sites/default/files/files/Keyword%20Coalition_Readings.pdf",
    "locator": "PDF pp1–6, sections1–3; especially What We Believe pp3–5",
    "supports": "Socialismo feminista negro: trabalho e distribuição coletiva, opressões interligadas e extensão da análise marxista; igualdade organizacional não distingue automaticamente anarquismo.",
    "readAt": "2026-10-07"
  },
  {
    "id": "greens-2023-ontology",
    "title": "Global Greens Charter — Korea 2023 edition",
    "url": "https://globalgreens.org/wp-content/uploads/2023/07/GlobalGreens_Charter_2023.pdf",
    "locator": "pp5–7 Principles; p11 §3.6 nuclear phase-out; pp13–14 sustainability governance",
    "supports": "Programa político amplo de democracia/devolução, justiça e limites ecológicos; oposição expressa à expansão nuclear contrasta com nuclear ecomodernista.",
    "readAt": "2026-10-07"
  },
  {
    "id": "belem-2008-2009",
    "title": "Belem Ecosocialist Declaration — dated 16 December 2008 for January 2009 distribution",
    "url": "https://static1.squarespace.com/static/650a5ae871a77d7e0fdb7572/t/653c76cea5593c4dbe182cfa/1698461390774/Ecosocialist%2BManifesto.pdf",
    "locator": "PDF p1 publication/distribution; pp4–5 The Ecosocialist Alternative; p6 immediate reforms",
    "supports": "Substituição do capitalismo, propriedade coletiva dos meios de produção e planejamento democrático. São compromissos adicionais ao limite material, não posições dedutíveis de toda proposta de decrescimento.",
    "readAt": "2026-10-07"
  },
  {
    "id": "berg-bioregions-1983",
    "title": "Bioregions — Peter Berg, Resurgence 98 May/June 1983",
    "url": "https://planetdrum.org/bioregions-an-introduction/",
    "locator": "Opening statist/industrial location critique; bioregion definition; Reinhabitation; final decentralization paragraphs",
    "supports": "Reorganização coletiva pela identidade territorial ecológica e reinhabitação; não mero mapa físico. Referente 1983 dentro do período local 1970–1990; versão 2002 é posterior.",
    "readAt": "2026-10-07"
  },
  {
    "id": "ej1991-primary",
    "title": "Principles of Environmental Justice — adopted 24–27 October 1991",
    "url": "https://www.ejnet.org/ej/principles.pdf",
    "locator": "Entire one-page 17 principles; preamble; §§2,5,6,7,11,12,17; adoption footer",
    "supports": "Programa de libertação política/econômica/cultural, autodeterminação, participação igual e cessação de produção de materiais radioativos; não somente distribuição de riscos.",
    "readAt": "2026-10-07"
  },
  {
    "id": "leopold-foundation-scope",
    "title": "The Land Ethic — current Aldo Leopold Foundation explanation, not complete 1949 essay",
    "url": "https://www.aldoleopold.org/about/the-land-ethic",
    "locator": "What are Ethics; What is a Land Ethic; Evolution in a Thinking Community",
    "supports": "Fonte institucional explicativa com citação parcial de Leopold; comunidade moral inclui natureza, mas não é leitura do ensaio 1949 inteiro nem programa de autoridade independente.",
    "readAt": "2026-10-07"
  },
  {
    "id": "rand-government-1963",
    "title": "The Nature of Government — Ayn Rand 1963, included 1966 anthology",
    "url": "https://courses.aynrand.org/works/the-nature-of-government/",
    "locator": "Paragraphs proper government functions (police/armed services/courts), objection to anarchy and competing governments; objective laws",
    "supports": "Proteção objetiva de direitos por governo limitado, rejeitando explicitamente tribunais/governos concorrentes; não se presume diferença governamental com todo minarquismo.",
    "readAt": "2026-10-07"
  },
  {
    "id": "nozick-preface-1974-transcription",
    "title": "Anarchy, State, and Utopia — Robert Nozick 1974 primary Preface transcription",
    "url": "https://www.thetedkarchive.com/library/robert-nozick-anarchy-state-and-utopia",
    "locator": "Preface opening paragraphs and stated conclusions; archive transcription cites Archive.org scan",
    "supports": "Estado mínimo moralmente justificável para proteção e contratos; Estado mais abrangente injustificável. Texto primário transcrito, não conferido visualmente contra scan; nenhuma validação de todos capítulos.",
    "readAt": "2026-10-07"
  },
  {
    "id": "friedman-machinery-second",
    "title": "The Machinery of Freedom — David Friedman second edition 1989, primary-text mirror",
    "url": "https://www.lopp.net/pdf/books/The_Machinery_of_Freedom.pdf",
    "locator": "PDF p3 second edition preface written 1988; Part III pp60–62 Police Courts Laws—OnMarket; first edition preface p4",
    "supports": "Provisão de proteção e leis por agências/árbitros concorrentes. Prefácio distingue material 1967–1973 com alterações menores e novos capítulos Part IV; não é cópia exata primeira edição 1973.",
    "readAt": "2026-10-07"
  },
  {
    "id": "george-rent-1879",
    "title": "Progress and Poverty — Henry George 1879, Gutenberg memorial edition",
    "url": "https://www.gutenberg.org/files/55308/55308-h/55308-h.htm",
    "locator": "Book VIII Chapter II, printed pp402–405, How Equal Rights to Land May Be Asserted and Secured",
    "supports": "Direito comum à terra implementado pela apropriação pública da renda fundiária e abolição dos demais impostos, preservando posse nominal; não propriedade estatal de toda produção.",
    "readAt": "2026-10-07"
  },
  {
    "id": "lp-ontology-finance",
    "title": "Libertarian Party platform — current undated page reopened 2026-10-07",
    "url": "https://lp.org/platform-page/",
    "locator": "Preamble; Statement of Principles; §§2.1 Property/Contract, 2.4 Government Finance, 3.6 Representative Government",
    "supports": "Programa político além de instrumento: direitos individuais e autonomia; §2.4 revogação eventual de toda tributação contrasta com renda fundiária pública georgista.",
    "readAt": "2026-10-07"
  },
  {
    "id": "trotsky-permanent-postulates",
    "title": "The Permanent Revolution — Trotsky, 1931 English text",
    "url": "https://www.marxists.org/archive/trotsky/1931/tpr/pr10.htm",
    "locator": "Chapter 10 Basic Postulates §§2–8,10–13; transcribed primary text",
    "supports": "Liderança proletária aliada ao campesinato, rejeição de etapa classista intermediária e passagem direta a incursões na propriedade burguesa; conclusão internacional, não hostilidade genérica a camponeses.",
    "readAt": "2026-10-07"
  },
  {
    "id": "mao-new-democracy-1940",
    "title": "On New Democracy — Mao, January 1940",
    "url": "https://www.marxists.org/reference/archive/mao/selected-works/volume-2/mswv2_26.htm",
    "locator": "Sections III, V and VI; selected works primary translation",
    "supports": "Duas etapas distintas; nova democracia com ditadura conjunta das classes revolucionárias sob liderança proletária, participação da burguesia nacional e capital privado limitado. Não equivale a pluralismo liberal.",
    "readAt": "2026-10-07"
  },
  {
    "id": "luxemburg-conquest-1900",
    "title": "Reform or Revolution — Luxemburg, 1900 English text",
    "url": "https://www.marxists.org/archive/luxemburg/1900/reform-revolution/ch08.htm",
    "locator": "Chapter VIII Conquest of Political Power, opening argument and democracy paragraphs",
    "supports": "Reformas e democracia necessárias à luta, mas reforma legislativa dentro da ordem capitalista não substitui conquista do poder e transformação socialista. Não rejeita toda reforma nem prescreve qualquer violência.",
    "readAt": "2026-10-07"
  },
  {
    "id": "fabian-transition-1889",
    "title": "Fabian Essays in Socialism — 1889 essays, American edition 1891, OLL electronic edition 2011",
    "url": "https://oll-resources.s3.amazonaws.com/titles/298/Shaw_0066_EBk_v6.0.pdf",
    "locator": "Sidney Webb Historic pp13–14; Bernard Shaw Transition PDF pp126–128 (zero-based pages125–127)",
    "supports": "Transformação democrática, gradual, constitucional e pacífica no contexto britânico; franquia e transferência gradual da renda/juros ao Estado. Escopo dos ensaios originais, não prefácios posteriores.",
    "readAt": "2026-10-07"
  },
  {
    "id": "gic-production-1930",
    "title": "Fundamental Principles of Communist Production and Distribution — GIC, 1930, translation 1990",
    "url": "https://www.marxists.org/subject/left-wing/gik/1930/13.htm",
    "locator": "Chapter XIII; Chapter I §§1–3 companion https://www.marxists.org/subject/left-wing/gik/1930/01.htm",
    "supports": "Autoadministração por conselhos produtivos em lugar do Estado administrador; propriedade social, fim dos mercados e disciplina contábil comum. O texto admite coerção econômica sobre estabelecimentos não associados; não é ausência de autoridade coletiva.",
    "readAt": "2026-10-07"
  },
  {
    "id": "kropotkin-bread-ontology",
    "title": "The Conquest of Bread — 1892 French work, 1926 English edition digitized",
    "url": "https://www.marxists.org/reference/archive/kropotkin-peter/1892/bread.htm",
    "locator": "Chapter 3 §§3.1–3.2; Chapter 13 §§13.1–13.3; 1913 preface excluded from1892 attribution",
    "supports": "Meios produtivos comuns e distribuição segundo necessidades, sem salário, articulados à associação sem governo. A crítica a coletivistas estatais não é automaticamente atribuída ao programa de Bakunin.",
    "readAt": "2026-10-07"
  },
  {
    "id": "proudhon-property-conclusion",
    "title": "What Is Property? — Proudhon 1840, translated primary text",
    "url": "https://www.marxists.org/reference/subject/economics/proudhon/property/ch05.htm",
    "locator": "Chapter V final conclusion propositions I,VI–X; footnote 4 scope limitation",
    "supports": "Posse individual, equivalência de produtos trocados e associação livre com igualdade normativa. Contrasta com distribuição sem equivalência individual salarial em Kropotkin. A exclusão sexista na nota 4 impede generalização emancipatória para todos os grupos.",
    "readAt": "2026-10-07"
  },
  {
    "id": "tucker-competitive-capital",
    "title": "Instead of a Book — Tucker 1893 collection, second edition 1897 transcription",
    "url": "https://theanarchistlibrary.org/library/benjamin-tucker-instead-of-a-book",
    "locator": "Opening State Socialism and Anarchism essay: voluntary association, capital competition, four monopolies and occupancy/cultivation paragraphs",
    "supports": "Indivíduos/associações voluntárias, concorrência bancária e posse baseada em ocupação; rejeição de socialização obrigatória do capital. O próprio texto reivindica Proudhon: não provar independência Tucker/mutualismo por autoria.",
    "readAt": "2026-10-07"
  },
  {
    "id": "bakunin-catechism-ontology",
    "title": "Revolutionary Catechism — Bakunin 1866 translated selections",
    "url": "https://www.marxists.org/reference/archive/bakunin/works/1866/catechism.htm",
    "locator": "IX.N7–10 federation/militias/defense; X.A,G–L social organization; bracketed editorial gloss excluded",
    "supports": "Federação autônoma e igualdade material com trabalho associado; milícia e guerra defensiva admissíveis. Não importar a crítica kropotkiniana ao Estado coletivista como descrição automática deste texto.",
    "readAt": "2026-10-07"
  },
  {
    "id": "tolstoy-nonresistance-ontology",
    "title": "The Kingdom of God Is Within You — Tolstoy 1894, Constance Garnett translation",
    "url": "https://www.gutenberg.org/cache/epub/4602/pg4602-images.html",
    "locator": "Chapter II five clerical responses, especially force for protection of others; Chapter VII universal conscription contradiction",
    "supports": "Não resistência rejeita a exceção de força para proteger outra pessoa; dever cristão é incompatível com coerção militar/estatal. O prefácio e os excertos de autores citados foram distinguidos da voz argumentativa de Tolstói.",
    "readAt": "2026-10-07"
  },
  {
    "id": "iwa-statutes-2023-ontology",
    "title": "Statutes of the International Workers Association — updated 10 February 2023",
    "url": "https://www.iwa-ait.org/content/statutes",
    "locator": "Introduction; II Principles1–11, especially7,9,10",
    "supports": "Organização sindical revolucionária como via ao comunismo libertário; ação direta, milícias e violência defensiva limitada. Atualização 2023 não é cópia imutável da resolução 1922, cuja nova leitura falhou.",
    "readAt": "2026-10-07"
  },
  {
    "id": "li-andorra-ontology",
    "title": "Andorra Liberal Manifesto 2017 — LI official PDF",
    "url": "https://liberal-international.org/wp-content/uploads/2018/03/Andorra-Liberal-Manifesto-2017-FINAL.pdf",
    "locator": "Vision pp2–3; Response C1,C4–7 pp4–8, especially C5 government health objective and C7 education/research",
    "supports": "Direitos individuais, instituições democráticas, igualdade de oportunidade e responsabilidade pública por acesso social; não é socialização de toda propriedade.",
    "readAt": "2026-10-07"
  },
  {
    "id": "epp-cyber-ontology",
    "title": "EPP Manifesto 2024 — official text",
    "url": "https://www.epp.eu/papers/epp-manifesto-2024",
    "locator": "Opening dignity/heritage/pluralism; §§1.7,2 and3.1–3.2",
    "supports": "Economia social de mercado, subsidiariedade e raízes cristãs com liberdade religiosa/pluralismo; §1.7 defende regras obrigatórias europeias para crimes digitais. Programa de partido delimitado, não todo cristianismo democrático.",
    "readAt": "2026-10-07"
  },
  {
    "id": "si-frankfurt-ontology",
    "title": "Aims and Tasks of Democratic Socialism — Frankfurt 1951 declaration",
    "url": "https://www.socialistinternational.org/our-meetings/congresses/i-frankfurt/",
    "locator": "Political Democracy§§4–7; Economic Democracy§§1–8",
    "supports": "Democracia multipartidária e planejamento democrático com formas diversas de propriedade pública e setores privados; fonte não exige estatizar toda produção.",
    "readAt": "2026-10-07"
  },
  {
    "id": "si-stockholm-ontology",
    "title": "SI Declaration of Principles — Stockholm 1989",
    "url": "https://www.socialistinternational.org/our-meetings/congresses/xviii-stockholm/declaration-of-principles-of-the-socialist-international/",
    "locator": "§§17–25 pluralist democracy; §§59–63 mixed economic control",
    "supports": "Socialização/propriedade pública em economia mista, controle democrático participativo e mercados; continua a se denominar socialismo democrático, impedindo separação artificial de identidade apenas por ano.",
    "readAt": "2026-10-07"
  },
  {
    "id": "barlow-cyberspace-1996",
    "title": "Declaration of the Independence of Cyberspace — Barlow 8 February 1996",
    "url": "https://www.eff.org/cyberspace-independence",
    "locator": "Whole declaration, sovereign jurisdiction/open entry/social contract/government of bodies paragraphs",
    "supports": "Autogoverno e contrato social digital sem jurisdição estatal externa, entrada e expressão livres. Admite governo de corpos físicos: não é ausência universal de Estado nem previsão empírica validada.",
    "readAt": "2026-10-07"
  },
  {
    "id": "burke-reflections-1790",
    "title": "Reflections on the Revolution in France — Burke 1790, Works III 1887 transcription",
    "url": "https://www.gutenberg.org/cache/epub/15679/pg15679-images.html",
    "locator": "Reflections paragraphs on inherited institutions, temporary possessors and partnership of living/dead/unborn; web lines 1826–1845",
    "supports": "Legitimidade institucional herdada, obrigação entre gerações e reforma cautelosa em vez de dissolução à vontade. Vizinho conservador mais próximo não resolvido.",
    "readAt": "2026-10-07"
  },
  {
    "id": "natcon-principles-2022",
    "title": "National Conservatism: Statement of Principles — 15 June 2022",
    "url": "https://nationalconservatism.org/national-conservatism-a-statement-of-principles/",
    "locator": "Whole ten principles; especially §§1–4 and 6",
    "supports": "Nações independentes, autoridade nacional sem transferência supranacional, governo nacional forte mas limitado, raiz pública cristã onde majoritária e liberdade privada minoritária; propriedade e mercado com exceções públicas. Não rejeita todas as alianças.",
    "readAt": "2026-10-07"
  },
  {
    "id": "heritage-values-2024",
    "title": "Heritage Party Values Manifesto — PDF URL edition May 2024",
    "url": "https://heritageparty.org/wp-content/uploads/2024/05/Values-Manifesto-v6a.pdf",
    "locator": "PDF pp1/3–6, especially Traditional Family p6; pp7–8 not used for empirical claims",
    "supports": "Responsabilidade intergeracional e programa político explícito de família homem/mulher, apoio tributário e limite curricular para menores. Edição da URL de 2024, não prova do programa integral vigente em 2026; alegações climáticas não validadas.",
    "readAt": "2026-10-07"
  },
  {
    "id": "kristol-persuasion-2003",
    "title": "The Neoconservative Persuasion — Kristol, AEI On the Issues September 2003",
    "url": "https://ciaotest.cc.columbia.edu/pbei/aei/oti/kri03/kri03.pdf",
    "locator": "Full three-page essay; pp2–3 foreign-policy attitudes; original Weekly Standard publication 25 August 2003",
    "supports": "Programa americano moderno aceita expansão estatal e política cultural; grandes democracias têm interesses ideológicos externos e obrigação de defender outras democracias. Autor expressamente nega um conjunto fixo de crenças de política externa.",
    "readAt": "2026-10-07"
  },
  {
    "id": "hobbes-sovereignty-1651",
    "title": "Leviathan — Hobbes 1651, Gutenberg transcription",
    "url": "https://www.gutenberg.org/cache/epub/3207/pg3207-images.html",
    "locator": "XVIII covenant/no forfeiture/indivisibility; XIX whole sovereignty in one/few/all and comparison of monarchy, web lines 2023/2069–2118",
    "supports": "Soberania indivisível e obrigação derivada de pacto entre súditos, não pacto do soberano com eles; comparação favorável à monarquia não elimina soberania assemblear. Não usado para negar autodefesa pessoal.",
    "readAt": "2026-10-07"
  },
  {
    "id": "locke-trust-forfeiture",
    "title": "Second Treatise — Locke 1690, trust and dissolution chapters",
    "url": "https://www.gutenberg.org/files/7370/7370-h/7370-h.htm",
    "locator": "XIII §149 and XIX §§221–222",
    "supports": "Poder legislativo fiduciário condicionado à preservação da comunidade; violação da confiança permite retorno do poder ao povo. Contraste com a impossibilidade hobbesiana de perda do poder por quebra desse pacto.",
    "readAt": "2026-10-07"
  },
  {
    "id": "ics-gospel-current",
    "title": "Christian Socialism and the Gospel — Institute for Christian Socialism, current undated",
    "url": "https://christiansocialism.com/gospel/",
    "locator": "Socialism and the Gospel / Christian Socialism Today / Imperatives, whole program",
    "supports": "Programa político cristão de superação do capitalismo, economia plural, emancipação queer, antirracismo e anti-imperialismo; declara não haver modelo único. Crença teológica do autor, não verdade empírica universal.",
    "readAt": "2026-10-07"
  },
  {
    "id": "christians-left-constitution",
    "title": "Christians on the Left — published constitution extract, undated",
    "url": "https://www.christiansontheleft.org.uk/constitution",
    "locator": "Extract §§2.1.1–2.1.5 and 2.2.1",
    "supports": "Tradução de convicções cristãs em leis e instituições do socialismo democrático, ação redistributiva, cooperação, igualdade pessoal e cuidado da terra. Somente extrato publicado, não todo documento de sete páginas.",
    "readAt": "2026-10-07"
  },
  {
    "id": "chesterton-outline-1927",
    "title": "The Outline of Sanity — Chesterton 1927, Seton Hall transcription PDF",
    "url": "https://www.shu.edu/documents/1927-GK-Chesterton-The-Outline-of-Sanity.pdf",
    "locator": "PDF pp1–6 definitions and II.2 Misunderstanding about the Method pp48–50",
    "supports": "Distribuição ampla de propriedade privada em vez de concentração; pluralidade de arranjos, regras de herança, impostos e acesso jurídico contra concentração. Transcrição textual, não fac-símile paginado da primeira edição; definições de capitalismo/socialismo são do autor.",
    "readAt": "2026-10-07"
  },
  {
    "id": "renan-consent-1882",
    "title": "Qu’est-ce qu’une nation? — Renan 11 March 1882, UQAM transcription of 1991 edition",
    "url": "https://classiques.uqam.ca/classiques/renan_ernest/qu_est_ce_une_nation/qu_est_ce_une_nation_texte.html",
    "locator": "Primary lecture ONLY web lines 202–308; II dynastic/racial/language/religious criteria and III inhabitants’ consent",
    "supports": "Comunidade histórica depende de consentimento presente; dinastia e religião não constituem critério suficiente de nacionalidade. Introdução de Philippe Forest não atribuída a Renan; generalizações sobre povos e história não validadas.",
    "readAt": "2026-10-07"
  },
  {
    "id": "nkrumah-union-1963",
    "title": "Nkrumah at first OAU summit — May 1963, official AU primary-speech compilation",
    "url": "https://au.int/sites/default/files/speeches/38523-sp-oau_summit_may_1963_speeches.pdf",
    "locator": "Nkrumah speech PDF pp44–53, especially pp49/52–53 common institutions/union-government proposals",
    "supports": "União política continental com governo, cidadania, moeda, banco, diplomacia e defesa comuns; programa de ação política além de cooperação interestatal. Não representa todo pan-africanismo.",
    "readAt": "2026-10-07"
  },
  {
    "id": "oau-charter-primary-1963",
    "title": "OAU Charter —25May 1963, official AU PDF",
    "url": "https://au.int/sites/default/files/treaties/7759-file-oau_charter_1963.pdf",
    "locator": "Preamble PDF p1; Arts II–III pp3–4",
    "supports": "Cooperação e emancipação continental com soberania, integridade territorial e não interferência preservadas. Variante institucional distinta da proposta de governo continental de Nkrumah; carta sozinha não prova doutrina total.",
    "readAt": "2026-10-07"
  },
  {
    "id": "nyerere-ujamaa-columbia-1962",
    "title": "Ujamaa — The Basis of African Socialism, Nyerere 1962, Columbia course transcription",
    "url": "https://www.columbia.edu/itc/history/mann/w3005/ujamaa.html",
    "locator": "Whole text; paras 28–32 land tenure, 49–54 expanding family/no inevitable class enmity",
    "supports": "TANU deve abolir propriedade fundiária incondicional e garantir uso comunitário; família humana ampliada, dever de trabalho e reciprocidade. Fonte não pretende especificar instituições completas; afirmações sobre África tradicional são argumentos do autor, não fatos confirmados.",
    "readAt": "2026-10-07"
  },
  {
    "id": "bookchin-communalist-2002",
    "title": "The Communalist Project — Bookchin, November 2002 primary essay",
    "url": "https://theanarchistlibrary.org/library/murray-bookchin-the-communalist-project",
    "locator": "Paragraphs 112–146 technics/municipal assemblies/municipalization; 161–178 identity, electoral action, majority and accountable leadership; footnotes [8]–[9], web lines210–212",
    "supports": "Ordem política municipal confederada, economia sob assembleias cívicas, poder majoritário com dissenso protegido e organização responsável. Retirada de componente exige aprovação da confederação (nota [9]); não é associação com saída unilateral incondicional. Distinção expressa de anarquismo; afirmações históricas e crítica a todos os anarquistas não aceitas como fatos.",
    "readAt": "2026-10-07"
  },
  {
    "id": "ocalan-confederalism-2017",
    "title": "Democratic Confederalism — Öcalan, fourth revised publisher edition 2017",
    "url": "https://ocalanbooks.com/downloads/EN-brochure_democratic-confederalism_2017.pdf",
    "locator": "III opening/A PDF pp21–22; III E–H pp26–29;IV pp30–31;publication details p4",
    "supports": "Autogoverno comunitário voluntário, decisões locais, coordenação confederada, pluralismo e autodefesa sob controle democrático. Coexistência com Estados durante processo longo de superação. Não prova unanimidade com veto ou prática implementada de Rojava.",
    "readAt": "2026-10-07"
  },
  {
    "id": "manifesto-transition-1848",
    "title": "Communist Manifesto — 1848, Moore/Engels translation 1888, Progress 1969 transcription",
    "url": "https://www.marxists.org/archive/marx/works/1848/communist-manifesto/ch02.htm",
    "locator": "II final political-power/property program; IV final paragraph https://www.marxists.org/archive/marx/works/1848/communist-manifesto/ch04.htm; preface 1872 opening; index edition metadata",
    "supports": "Programa de classe, transformação da propriedade e ruptura; a nota de 1872 exige aplicação histórica variável. Não imputa violência a todo socialismo posterior.",
    "readAt": "2026-10-07"
  },
  {
    "id": "stalin-party-1924",
    "title": "Foundations of Leninism — December 1924 second version, Works 6 edition 1953",
    "url": "https://www.marxists.org/reference/archive/stalin/works/1924/foundations-leninism/ch08.htm",
    "locator": "VIII §§1–5, especially 3 web 57–68 and 5 web 83–97; index publication metadata",
    "supports": "Partido como direção política do conjunto das organizações proletárias; persuasão e aceitação voluntária, não subordinação oficial. Debate interno admitido; ação unificada após decisão e proibição de facções.",
    "readAt": "2026-10-07"
  },
  {
    "id": "pannekoek-party-class-1941",
    "title": "The Party and Class — Pannekoek, Modern Socialism winter 1941, MIA transcription",
    "url": "https://www.marxists.org/archive/pannekoe/1936/party-class.htm",
    "locator": "Publication header winter 1941 despite URL 1936; web 10–24 and 35–37",
    "supports": "Grupos podem esclarecer e propagar ideias; poder e direção da sociedade pertencem à ação dos trabalhadores e conselhos, em oposição à direção governante do partido. Afirmações históricas polêmicas não validadas.",
    "readAt": "2026-10-07"
  },
  {
    "id": "fascism-1932-fordham-excerpt",
    "title": "What is Fascism — Mussolini/Gentile 1932 excerpts, IHSP 1997 English transcription",
    "url": "https://sourcebooks.fordham.edu/mod/mussolini-fascism.asp",
    "locator": "Primary excerpt web 26–39, especially 34–38; introductory attribution 22; electronic publication 44",
    "supports": "Estado absoluto e expansão imperial como exigência normativa. Excertos com elipses e tradução não identificada; não são entrada integral nem prova da prática do regime.",
    "readAt": "2026-10-07"
  },
  {
    "id": "montreux-federal-program-1947",
    "title": "Montreux Declaration — 23 August 1947, Secretariat original reproduced by CVCE 2012",
    "url": "https://www.cvce.eu/content/publication/1999/1/1/adf279f7-80a4-4855-9215-48a5184328aa/publishable_en.pdf",
    "locator": "PDF pp2–3 whole declaration; six principles and two action methods; source metadata p1",
    "supports": "Transferência limitada de poderes nacionais, lei mundial direta, forças supranacionais e receita própria; reforma ONU/assembleia constituinte com ratificação popular. Prognósticos de paz não são fatos verificados.",
    "readAt": "2026-10-07"
  },
  {
    "id": "madison-federal-program-1787-1788",
    "title": "Federalist 10/39 — Madison 1787–1788, Yale Avalon transcription",
    "url": "https://avalon.law.yale.edu/18th_century/fed10.asp",
    "locator": "No10 web 56–73; No39 web 47–64 https://avalon.law.yale.edu/18th_century/fed39.asp",
    "supports": "Autoridade representativa, divisão de competências e ratificação federada. Admite representantes corruptos e decisão geral de litígios de jurisdição; não prova sucesso institucional nem inclusão universal.",
    "readAt": "2026-10-07"
  },
  {
    "id": "rousseau-direct-legislation-1762",
    "title": "Social Contract — Rousseau 1762, G.D.H.Cole translation 1920",
    "url": "https://www.gutenberg.org/files/46333/46333-h/46333-h.htm",
    "locator": "Author body III.15 web 1117–1138; title/translator metadata web25–49; II.1 web580",
    "supports": "Soberania e legislação exigem vontade/ratificação pessoal; admite representação executiva. A discussão de liberdade cidadã em sociedades escravistas não prova inclusão universal; web 1137 nega necessidade/legitimidade da escravidão. História não validada.",
    "readAt": "2026-10-07"
  },
  {
    "id": "port-huron-program-1962",
    "title": "Port Huron Statement — SDS convention June 1962, participant archive OCR",
    "url": "https://www.sds-1960s.org/Port HuronStatement-OCR.pdf",
    "locator": "Introductory note PDF p1; Values pp3–5, especially p4 web 146–176; Towards American Democracy pp30–31 web 1252–1320",
    "supports": "Participação individual em decisões políticas/econômicas, regulação democrática e participação laboral; ação por associações, partidos e mudanças públicas. Não abole toda representação nem especifica um único modelo de propriedade.",
    "readAt": "2026-10-07",
    "alternateUrl": "https://www.crmvet.org/info/620615_sds_huron-stmt.pdf",
    "accessLimit": "Participant-host PDF body read by ontology researcher; root and method reviewer encountered 403 there. Root independently reopened CRMvet identical 41-page primary reprint: publication note, Values p4 and Towards American Democracy pp30–31. No whole-document verification claim."
  },
  {
    "id": "eucken-competitive-order-1949",
    "title": "Competitive Order and Its Implementation — Eucken 1949, abridged English CPI 2006",
    "url": "https://competitionpolicyinternational.com/assets/0d358061e11f2708ad9d62634c6c40ad/Eucken%20%28Nov.%202006%29.pdf",
    "locator": "PDF p2 original 1949/Ahlborn–Grave translation 2006/omissions metadata; pp13–14 positive competitive framework and rejection of general price stop; pp23–26 independent monopoly office, compulsory contracts and specific monopoly price controls",
    "supports": "Ordem econômica e jurídica positiva que preserva liberdades limitadas reciprocamente; autoridade antimonopólio independente impõe contratação e preços em condições de monopólio. Rejeita congelamento geral de preços (p14) e nacionalização de monopólios (pp23–24); são intervenções específicas, não substituição geral dos mercados. Prognósticos e relatos históricos não verificados; não são todos os princípios 1952.",
    "readAt": "2026-10-07"
  },
  {
    "id": "habermas-procedural-model-1995",
    "title": "Três modelos normativos de democracia — Habermas, Lua Nova 36, Portuguese 1995 edition",
    "url": "https://www.scielo.br/j/ln/a/tcSTz3QGHghmfzbvL6m6wcK/?lang=pt",
    "locator": "Article author body web 109–185, especially own alternative 147–158 and institutional program 175–185; metadata 79–84",
    "supports": "Legitimidade procedimental pela formação institucionalizada da opinião/vontade, parlamentos e espaços públicos; direitos e regras comunicativas, permitindo negociação entre interesses. Não exige unanimidade nem extingue eleições. Citações anteriores de Michelman não são falas próprias de Habermas. Nota editorial web 188 situa a conferência 1991, tradução via edição venezuelana e adaptações; essa nota não é programa normativo do autor.",
    "readAt": "2026-10-07"
  },
  {
    "id": "constant-neutral-authority-1815",
    "title": "Principes de politique, 1815 — Constant, Institut Coppet 2025 reprint",
    "url": "https://editions.institutcoppet.org/EL/Constant-Principes.pdf",
    "alternateUrl": "https://fr.wikisource.org/wiki/%C5%92uvres_politiques_(Constant)/Du_pouvoir_royal_dans_les_monarchies_constitutionnelles",
    "locator": "Primary chapter II printed pp34–39 (PDF zero-based 33–38), web 1033–1235; 1874 collected chapter author body 123–198, especially 134–141/183–198",
    "supports": "Programa de separação entre cabeça neutra e executivo ministerial responsável; legislação repartida entre câmara hereditária e eletiva. Prerrogativas reais amplas não autorizam agir em lugar das outras funções. Introdução 2025 e notas do editor 1874 não são norma do autor. Exemplos históricos e benefícios previstos não verificados.",
    "readAt": "2026-10-07"
  },
  {
    "id": "bonaparte-napoleonic-program-1839",
    "title": "Napoleonic Ideas, Louis-Napoléon 1839 — James A. Dorr English translation 1859",
    "url": "https://commons.wikimedia.org/wiki/File:Napoleonic_ideas._Des_id%C3%A9es_napol%C3%A9oniennes,_par_le_prince_Napol%C3%A9on-Louis_Bonaparte._Brussels-_1839_(IA_napoleonicideasd00napoiala).pdf",
    "locator": "Original PDF link 39; title PDF p7; author preface pp17–18; author Political Organisation printed pp85–99 (PDF zero-based 90–104), especially 90–94/97; web 1347–1605",
    "supports": "Programa apologético politicamente normativo: imperador primeiro representante nacional, apenas trono hereditário, Senado não hereditário, eleição por colégios com qualificação tributária. Nota de p91 rejeita câmara hereditária francesa. O prefácio de Dorr não é voz do autor; direitos/liberdades e êxitos imperiais narrados não são comprovação de prática.",
    "readAt": "2026-10-07"
  },
  {
    "id": "bostrom-transhumanist-values-2005",
    "title": "Transhumanist Values — Nick Bostrom, author primary, 2005",
    "url": "https://nickbostrom.com/papers/transhumanist-values/",
    "locator": "Publication metadata web 8; actual author body 13–133, especially policy §§4–5 web 74–105 and summary 112–132",
    "supports": "Programa de organização coletiva com democracia/Estado de direito internacional e segurança, acesso amplo e escolha responsável de aprimoramentos. Não implica neutralidade religiosa estatal nem toda agenda moral.",
    "readAt": "2026-10-08"
  },
  {
    "id": "humanityplus-declaration-adoption-2009",
    "title": "Transhumanist Declaration — Humanity+, adopted March 2009, actual hosted text",
    "url": "https://www.humanityplus.org/the-transhumanist-declaration",
    "locator": "Origin/adoption note web 6–7; actual whole eight principles 8–16",
    "supports": "Princípios de autonomia, pesquisa, riscos e escolha de modificações; adoção efetivamente datada em 2009. Não confirma revisão 2012.",
    "readAt": "2026-10-08"
  },
  {
    "id": "veblen-conditional-industrial-design-1921",
    "title": "The Engineers and the Price System — Veblen 1921, CUNY transcription of Viking reprint",
    "url": "https://cuny.manifoldapp.org/read/the-engineers-and-the-price-system/section/28eeaad7-4ea9-4320-9abc-a9705b160870",
    "locator": "Whole VI author web 86–194, especially 95–103,148–158,166,173–185; front-matter companion b47e21df-31d1-4b3a-b52f-629e182dca45 author 1921 / publisher January 1933 / transcription 2023",
    "supports": "Projeto industrial condicional com direção técnica/alocação e cancelamento da propriedade absenteísta; recusa expressa de argumentar legitimidade moral ou outras razões. Pesquisa efetivamente lida, excluída da contagem de doutrinas normativas afirmadas.",
    "readAt": "2026-10-08",
    "accessLimit": "URL original https://www.gutenberg.org/ebooks/4355 realmente resolve Abbott, David Crockett: His Life and Adventures. Metadados title/author/book 4355 efetivamente lidos; objeto original arquivado pela reparação separada. Nenhum uso do programa Inc. como voz de Veblen."
  },
  {
    "id": "technocracy-functional-design-2004",
    "title": "Technocracy Study Course — Technocracy Inc., electronic edition 1.1, 2004",
    "url": "https://www.technate.org/pdf/Technocracy%20study%20guide.pdf",
    "locator": "Metadata PDF zero-based 2; organizational preamble 3; Lesson 22 printed 220–233/PDF 225–238; Lesson 23 printed 242/247 automation",
    "supports": "Programa continental afirmado pela organização com autoridade autoseletiva, polícia, provisão e alocação geral. Edição explicitada; fonte não atribuída a Veblen. Pesquisa e automação reais no programa, não prova de eficiência ou ciência.",
    "readAt": "2026-10-08",
    "accessLimit": "Organizational-host alternative 404; primary Technate actual body read. Separate 1945 scan metadata only, not corroborating body."
  }
] as const;

export const intendedIdeologySelection = [
  {
    "id": "social-liberalism",
    "name": "Liberalismo social",
    "family": "liberal",
    "selectionRationale": "Rede social dentro de uma ordem liberal",
    "reviewStatus": "referent-and-bounded-neighbor-contrast-reviewed",
    "documentedAxisCountAtSnapshot": 8,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "bounded-primary-neighbor-contrast",
    "ontologyLimit": "Programas institucionais de ação social/economia ou jurisdição digital localizados. As duas declarações SI continuam no mesmo campo democrático socialista: diferença de edição não prova doutrinas independentes. Barlow limita autonomia ao ciberespaço e admite governo dos corpos."
  },
  {
    "id": "ideology-classical-liberalism",
    "name": "Liberalismo clássico",
    "family": "liberal",
    "selectionRationale": "Direitos e consentimento na tradição clássica",
    "reviewStatus": "referent-and-bounded-neighbor-contrast-reviewed",
    "documentedAxisCountAtSnapshot": 2,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "bounded-primary-neighbor-contrast",
    "ontologyLimit": "Contraste específico de autoridade ou programa fundiário/fiscal localizado; fundamentos entre correntes próximas e relação com subtradições ainda não certificam independência global."
  },
  {
    "id": "ideology-ordoliberalism",
    "name": "Ordoliberalismo: ordem competitiva de Eucken, 1949",
    "family": "liberal",
    "selectionRationale": "Concorrência sustentada por regras públicas",
    "reviewStatus": "referent-and-bounded-neighbor-contrast-reviewed",
    "documentedAxisCountAtSnapshot": 2,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "bounded-primary-neighbor-contrast",
    "ontologyLimit": "Ordem competitiva construída por autoridade jurídica, com controle de monopólios, não rejeição do mercado. Contraste localizado com LP não resolve proximidade ao neoliberalismo do Colóquio Walter Lippmann. Tradução inglesa 2006 Ahlborn/Grave abreviada (***) do artigo 1949; sem recodificar o catálogo."
  },
  {
    "id": "libertarianism",
    "name": "Libertarianismo",
    "family": "liberal",
    "selectionRationale": "Governo limitado e liberdades civis",
    "reviewStatus": "referent-and-bounded-neighbor-contrast-reviewed",
    "documentedAxisCountAtSnapshot": 7,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "bounded-primary-neighbor-contrast",
    "ontologyLimit": "Contraste específico de autoridade ou programa fundiário/fiscal localizado; fundamentos entre correntes próximas e relação com subtradições ainda não certificam independência global."
  },
  {
    "id": "ideology-right-minarchism",
    "name": "Minarquismo",
    "family": "liberal",
    "selectionRationale": "Estado mínimo, preservado em contraste com abolição",
    "reviewStatus": "referent-and-bounded-neighbor-contrast-reviewed",
    "documentedAxisCountAtSnapshot": 2,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "bounded-primary-neighbor-contrast",
    "ontologyLimit": "Contraste específico de autoridade ou programa fundiário/fiscal localizado; fundamentos entre correntes próximas e relação com subtradições ainda não certificam independência global."
  },
  {
    "id": "ideology-right-anarcho-capitalism",
    "name": "Anarcocapitalismo",
    "family": "liberal",
    "selectionRationale": "Serviços de justiça e segurança privados",
    "reviewStatus": "referent-and-bounded-neighbor-contrast-reviewed",
    "documentedAxisCountAtSnapshot": 2,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "bounded-primary-neighbor-contrast",
    "ontologyLimit": "Contraste específico de autoridade ou programa fundiário/fiscal localizado; fundamentos entre correntes próximas e relação com subtradições ainda não certificam independência global."
  },
  {
    "id": "ideology-georgism",
    "name": "Georgismo",
    "family": "liberal",
    "selectionRationale": "Renda fundiária como base tributária comum",
    "reviewStatus": "referent-and-bounded-neighbor-contrast-reviewed",
    "documentedAxisCountAtSnapshot": 0,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "bounded-primary-neighbor-contrast",
    "ontologyLimit": "Contraste específico de autoridade ou programa fundiário/fiscal localizado; fundamentos entre correntes próximas e relação com subtradições ainda não certificam independência global."
  },
  {
    "id": "ideology-right-objectivism",
    "name": "Objetivismo político",
    "family": "liberal",
    "selectionRationale": "Justificação filosófica objetivista do laissez-faire",
    "reviewStatus": "referent-and-bounded-neighbor-contrast-reviewed",
    "documentedAxisCountAtSnapshot": 3,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "bounded-primary-neighbor-contrast",
    "ontologyLimit": "Contraste específico de autoridade ou programa fundiário/fiscal localizado; fundamentos entre correntes próximas e relação com subtradições ainda não certificam independência global."
  },
  {
    "id": "ideology-right-technolibertarianism",
    "name": "Libertarianismo tecnológico",
    "family": "liberal",
    "selectionRationale": "Autogoverno do ciberespaço",
    "reviewStatus": "referent-and-bounded-neighbor-contrast-reviewed",
    "documentedAxisCountAtSnapshot": 1,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "bounded-primary-neighbor-contrast",
    "ontologyLimit": "Programas institucionais de ação social/economia ou jurisdição digital localizados. As duas declarações SI continuam no mesmo campo democrático socialista: diferença de edição não prova doutrinas independentes. Barlow limita autonomia ao ciberespaço e admite governo dos corpos."
  },
  {
    "id": "ideology-neoliberalism",
    "name": "Neoliberalismo inicial (Colóquio Walter Lippmann)",
    "family": "liberal",
    "selectionRationale": "Renovação liberal de 1938, recorte historicamente delimitado",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 0,
    "ontologyStatus": "provisional-normative-referent",
    "contrastStatus": "not-independently-verified"
  },
  {
    "id": "ideology-conservatism",
    "name": "Conservadorismo",
    "family": "conservative",
    "selectionRationale": "Prudência e mudança gradual",
    "reviewStatus": "primary-normative-referent-reviewed",
    "documentedAxisCountAtSnapshot": 1,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "nearest-neighbor-unresolved",
    "ontologyLimit": "Referentes normativos localizados; comparação delimitada por texto e edição, sem provar independência de todos os vizinhos nem prática implementada."
  },
  {
    "id": "ideology-social-conservatism",
    "name": "Conservadorismo social",
    "family": "conservative",
    "selectionRationale": "Costumes e valores sociais como núcleo",
    "reviewStatus": "referent-and-bounded-neighbor-contrast-reviewed",
    "documentedAxisCountAtSnapshot": 5,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "bounded-primary-neighbor-contrast",
    "ontologyLimit": "Referentes normativos localizados; comparação delimitada por texto e edição, sem provar independência de todos os vizinhos nem prática implementada."
  },
  {
    "id": "ideology-national-conservatism",
    "name": "Conservadorismo nacional",
    "family": "conservative",
    "selectionRationale": "Soberania e continuidade nacional",
    "reviewStatus": "referent-and-bounded-neighbor-contrast-reviewed",
    "documentedAxisCountAtSnapshot": 2,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "bounded-primary-neighbor-contrast",
    "ontologyLimit": "Referentes normativos localizados; comparação delimitada por texto e edição, sem provar independência de todos os vizinhos nem prática implementada."
  },
  {
    "id": "ideology-right-one-nation-conservatism",
    "name": "Conservadorismo de uma nação",
    "family": "conservative",
    "selectionRationale": "Dever social paternalista",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 2,
    "ontologyStatus": "provisional-normative-referent",
    "contrastStatus": "not-independently-verified"
  },
  {
    "id": "ideology-right-neoconservatism",
    "name": "Neoconservadorismo",
    "family": "conservative",
    "selectionRationale": "Política externa ativa de defesa da ordem liberal",
    "reviewStatus": "referent-and-bounded-neighbor-contrast-reviewed",
    "documentedAxisCountAtSnapshot": 5,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "bounded-primary-neighbor-contrast",
    "ontologyLimit": "Referentes normativos localizados; comparação delimitada por texto e edição, sem provar independência de todos os vizinhos nem prática implementada."
  },
  {
    "id": "ideology-right-constitutional-monarchism",
    "name": "Monarquismo constitucional: poder neutro de Constant, 1815",
    "family": "conservative",
    "selectionRationale": "Coroa limitada por instituições parlamentares",
    "reviewStatus": "referent-and-bounded-neighbor-contrast-reviewed",
    "documentedAxisCountAtSnapshot": 1,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "bounded-primary-neighbor-contrast",
    "ontologyLimit": "Monarca neutro separado da execução ministerial responsável, com prerrogativas de nomear/demitir ministros, veto e dissolução; não figura apenas cerimonial. Câmara hereditária integra o programa, contrastando com Bonaparte 1839. Recorte de Constant, não todo monarquismo atual; prática e diagnósticos históricos não validados."
  },
  {
    "id": "ideology-right-absolute-monarchy",
    "name": "Soberania indivisível de Hobbes, 1651",
    "family": "conservative",
    "selectionRationale": "Soberania concentrada para proteção da ordem",
    "reviewStatus": "referent-and-bounded-neighbor-contrast-reviewed",
    "documentedAxisCountAtSnapshot": 2,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "bounded-primary-neighbor-contrast",
    "ontologyLimit": "Leviatã XVIII–XIX admite soberania inteira de um, poucos ou todos e argumenta vantagens da monarquia. Recorte de soberania indivisível: o rótulo original de monarquia absoluta não é prova exclusiva de todo monarquismo. Sem inferir inexistência de direitos de autopreservação."
  },
  {
    "id": "ideology-right-bonapartism",
    "name": "Bonapartismo: programa de ideias napoleônicas, 1839",
    "family": "conservative",
    "selectionRationale": "Legitimação plebiscitária com executivo concentrado",
    "reviewStatus": "referent-and-bounded-neighbor-contrast-reviewed",
    "documentedAxisCountAtSnapshot": 2,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "bounded-primary-neighbor-contrast",
    "ontologyLimit": "Texto político apologético de Louis-Napoléon, tradução Dorr 1859, não inferência automática de um regime. Apenas poder imperial hereditário e Senado não hereditário contrastam com Constant. Soberano como primeiro representante nacional não elimina legislatura; colégios tributariamente qualificados impedem supor franquia universal. Alegações sobre direitos/prática imperial não verificadas."
  },
  {
    "id": "social-democracy",
    "name": "Social-democracia",
    "family": "socialist",
    "selectionRationale": "Proteção social na economia mista",
    "reviewStatus": "referent-and-bounded-neighbor-contrast-reviewed",
    "documentedAxisCountAtSnapshot": 8,
    "ontologyStatus": "overlapping-umbrella-primary-referent-reviewed",
    "contrastStatus": "bounded-primary-neighbor-contrast",
    "ontologyLimit": "Programas institucionais de ação social/economia ou jurisdição digital localizados. As duas declarações SI continuam no mesmo campo democrático socialista: diferença de edição não prova doutrinas independentes. Barlow limita autonomia ao ciberespaço e admite governo dos corpos."
  },
  {
    "id": "democratic-socialism",
    "name": "Socialismo democrático",
    "family": "socialist",
    "selectionRationale": "Democratização da propriedade e da produção",
    "reviewStatus": "referent-and-bounded-neighbor-contrast-reviewed",
    "documentedAxisCountAtSnapshot": 8,
    "ontologyStatus": "overlapping-umbrella-primary-referent-reviewed",
    "contrastStatus": "bounded-primary-neighbor-contrast",
    "ontologyLimit": "Programas institucionais de ação social/economia ou jurisdição digital localizados. As duas declarações SI continuam no mesmo campo democrático socialista: diferença de edição não prova doutrinas independentes. Barlow limita autonomia ao ciberespaço e admite governo dos corpos."
  },
  {
    "id": "ideology-market-socialism",
    "name": "Socialismo de mercado",
    "family": "socialist",
    "selectionRationale": "Propriedade social com coordenação por preços",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 2,
    "ontologyStatus": "provisional-normative-referent",
    "contrastStatus": "not-independently-verified"
  },
  {
    "id": "ideology-revolutionary-socialism",
    "name": "Socialismo revolucionário: Manifesto de 1848",
    "family": "socialist",
    "selectionRationale": "Programa de transformação da propriedade e conquista de poder no Manifesto; sobreposição com subtradições revolucionárias permanece.",
    "reviewStatus": "referent-and-bounded-neighbor-contrast-reviewed",
    "documentedAxisCountAtSnapshot": 2,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "bounded-primary-neighbor-contrast",
    "ontologyLimit": "Programa primário delimitado, não certificação de toda tradição ou independência de todos os vizinhos; fontes e valores do catálogo não mudam. Contraste de transição com Webb não resolve o encaixe com maoismo, trotskismo ou marxismo-leninismo. Prefácio de 1872 qualifica aplicação histórica e medidas."
  },
  {
    "id": "ideology-marxism-leninism",
    "name": "Marxismo-leninismo: direção partidária de Stalin, 1924",
    "family": "socialist",
    "selectionRationale": "Referente normativo de direção partidária, em lugar de generalização a partir da Constituição da RPC.",
    "reviewStatus": "referent-and-bounded-neighbor-contrast-reviewed",
    "documentedAxisCountAtSnapshot": 6,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "bounded-primary-neighbor-contrast",
    "ontologyLimit": "Programa primário delimitado, não certificação de toda tradição ou independência de todos os vizinhos; fontes e valores do catálogo não mudam. Formulação de dezembro de 1924 na edição de 1953; não representa automaticamente todo Lenin ou variantes posteriores. Direção política voluntariamente aceita não é subordinação oficial de todas as organizações."
  },
  {
    "id": "ideology-maoism",
    "name": "Maoismo: programa da Nova Democracia",
    "family": "socialist",
    "selectionRationale": "Programa maoista de Nova Democracia",
    "reviewStatus": "referent-and-bounded-neighbor-contrast-reviewed",
    "documentedAxisCountAtSnapshot": 4,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "bounded-primary-neighbor-contrast",
    "ontologyLimit": "Programas localizados de transição, coalizão de classes e autoridade produtiva; não certificam todas variantes históricas nem a independência de todo vizinho. Nenhum vetor foi validado por esta comparação."
  },
  {
    "id": "ideology-trotskyism",
    "name": "Trotskismo",
    "family": "socialist",
    "selectionRationale": "Revolução permanente e internacionalismo",
    "reviewStatus": "referent-and-bounded-neighbor-contrast-reviewed",
    "documentedAxisCountAtSnapshot": 0,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "bounded-primary-neighbor-contrast",
    "ontologyLimit": "Programas localizados de transição, coalizão de classes e autoridade produtiva; não certificam todas variantes históricas nem a independência de todo vizinho. Nenhum vetor foi validado por esta comparação."
  },
  {
    "id": "ideology-luxemburgism",
    "name": "Luxemburguismo",
    "family": "socialist",
    "selectionRationale": "Ação de massas e democracia operária",
    "reviewStatus": "referent-and-bounded-neighbor-contrast-reviewed",
    "documentedAxisCountAtSnapshot": 0,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "bounded-primary-neighbor-contrast",
    "ontologyLimit": "Programas localizados de transição, coalizão de classes e autoridade produtiva; não certificam todas variantes históricas nem a independência de todo vizinho. Nenhum vetor foi validado por esta comparação."
  },
  {
    "id": "ideology-eurocommunism",
    "name": "Eurocomunismo",
    "family": "socialist",
    "selectionRationale": "Via comunista pluralista e parlamentar",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 0,
    "ontologyStatus": "provisional-normative-referent",
    "contrastStatus": "not-independently-verified"
  },
  {
    "id": "ideology-council-communism",
    "name": "Comunismo de conselhos",
    "family": "socialist",
    "selectionRationale": "Conselhos operários contra centralização partidária",
    "reviewStatus": "referent-and-bounded-neighbor-contrast-reviewed",
    "documentedAxisCountAtSnapshot": 0,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "bounded-primary-neighbor-contrast",
    "ontologyLimit": "Programas localizados de transição, coalizão de classes e autoridade produtiva; não certificam todas variantes históricas nem a independência de todo vizinho. Nenhum vetor foi validado por esta comparação."
  },
  {
    "id": "ideology-fabianism",
    "name": "Fabianismo",
    "family": "socialist",
    "selectionRationale": "Reforma gradual e administração socialista",
    "reviewStatus": "referent-and-bounded-neighbor-contrast-reviewed",
    "documentedAxisCountAtSnapshot": 0,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "bounded-primary-neighbor-contrast",
    "ontologyLimit": "Programas localizados de transição, coalizão de classes e autoridade produtiva; não certificam todas variantes históricas nem a independência de todo vizinho. Nenhum vetor foi validado por esta comparação."
  },
  {
    "id": "ideology-left-yugoslav-self-management",
    "name": "Socialismo autogestionário iugoslavo",
    "family": "socialist",
    "selectionRationale": "Autogestão operária em socialismo federal",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 4,
    "ontologyStatus": "doctrine-referent-source-mismatch",
    "contrastStatus": "not-independently-verified",
    "ontologyLimit": "Autogestão iugoslava requer separar doutrina institucional e prática histórica."
  },
  {
    "id": "ideology-anarcho-communism",
    "name": "Anarcocomunismo",
    "family": "anarchist",
    "selectionRationale": "Comunismo sem Estado e ajuda mútua",
    "reviewStatus": "referent-and-bounded-neighbor-contrast-reviewed",
    "documentedAxisCountAtSnapshot": 0,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "bounded-primary-neighbor-contrast",
    "ontologyLimit": "Contrastes localizados sobre troca/distribuição ou legitimidade da força defensiva. Relação Tucker/Proudhon e anarcossindicalismo/comunismo permanece aninhada ou aberta; as edições lidas não equivalem a toda história da corrente."
  },
  {
    "id": "ideology-anarcho-syndicalism",
    "name": "Anarcossindicalismo",
    "family": "anarchist",
    "selectionRationale": "Sindicatos e ação direta como organização social",
    "reviewStatus": "referent-and-bounded-neighbor-contrast-reviewed",
    "documentedAxisCountAtSnapshot": 0,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "bounded-primary-neighbor-contrast",
    "ontologyLimit": "Contrastes localizados sobre troca/distribuição ou legitimidade da força defensiva. Relação Tucker/Proudhon e anarcossindicalismo/comunismo permanece aninhada ou aberta; as edições lidas não equivalem a toda história da corrente."
  },
  {
    "id": "ideology-mutualism",
    "name": "Mutualismo",
    "family": "anarchist",
    "selectionRationale": "Reciprocidade econômica e crítica aos privilégios",
    "reviewStatus": "referent-and-bounded-neighbor-contrast-reviewed",
    "documentedAxisCountAtSnapshot": 0,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "bounded-primary-neighbor-contrast",
    "ontologyLimit": "Contrastes localizados sobre troca/distribuição ou legitimidade da força defensiva. Relação Tucker/Proudhon e anarcossindicalismo/comunismo permanece aninhada ou aberta; as edições lidas não equivalem a toda história da corrente."
  },
  {
    "id": "ideology-pacifist-anarchism",
    "name": "Anarquismo pacifista",
    "family": "anarchist",
    "selectionRationale": "Não violência religiosa contra coerção",
    "reviewStatus": "referent-and-bounded-neighbor-contrast-reviewed",
    "documentedAxisCountAtSnapshot": 0,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "bounded-primary-neighbor-contrast",
    "ontologyLimit": "Contrastes localizados sobre troca/distribuição ou legitimidade da força defensiva. Relação Tucker/Proudhon e anarcossindicalismo/comunismo permanece aninhada ou aberta; as edições lidas não equivalem a toda história da corrente."
  },
  {
    "id": "ideology-left-anarcho-collectivism",
    "name": "Anarquismo coletivista",
    "family": "anarchist",
    "selectionRationale": "Federação coletivista de comunas",
    "reviewStatus": "referent-and-bounded-neighbor-contrast-reviewed",
    "documentedAxisCountAtSnapshot": 8,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "bounded-primary-neighbor-contrast",
    "ontologyLimit": "Contrastes localizados sobre troca/distribuição ou legitimidade da força defensiva. Relação Tucker/Proudhon e anarcossindicalismo/comunismo permanece aninhada ou aberta; as edições lidas não equivalem a toda história da corrente."
  },
  {
    "id": "ideology-left-individualist-anarchism",
    "name": "Anarquismo individualista",
    "family": "anarchist",
    "selectionRationale": "Associação individual e oposição a monopólios",
    "reviewStatus": "referent-and-bounded-neighbor-contrast-reviewed",
    "documentedAxisCountAtSnapshot": 6,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "bounded-primary-neighbor-contrast",
    "ontologyLimit": "Contrastes localizados sobre troca/distribuição ou legitimidade da força defensiva. Relação Tucker/Proudhon e anarcossindicalismo/comunismo permanece aninhada ou aberta; as edições lidas não equivalem a toda história da corrente."
  },
  {
    "id": "ideology-left-anarcho-primitivism",
    "name": "Anarcoprimitivismo",
    "family": "anarchist",
    "selectionRationale": "Crítica radical à civilização industrial",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 2,
    "ontologyStatus": "provisional-normative-referent",
    "contrastStatus": "not-independently-verified"
  },
  {
    "id": "ideology-democratic-confederalism",
    "name": "Confederalismo democrático",
    "family": "anarchist",
    "selectionRationale": "Confederação não estatal e pluralismo comunitário",
    "reviewStatus": "primary-referent-and-nearest-overlap-reviewed",
    "documentedAxisCountAtSnapshot": 0,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "nearest-neighbor-overlap-unresolved",
    "ontologyLimit": "Bookchin e Öcalan compartilham autogoverno local confederado e horizonte não estatal. Consenso orientador não prova veto unânime; coexistência de transição não prova oposição de fins. Duas autorias não demonstram independência doutrinal."
  },
  {
    "id": "ideology-communalism",
    "name": "Comunalismo",
    "family": "democratic",
    "selectionRationale": "Municipalismo e ecologia social",
    "reviewStatus": "primary-referent-and-nearest-overlap-reviewed",
    "documentedAxisCountAtSnapshot": 0,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "bounded-primary-neighbor-contrast-with-nearest-overlap-unresolved",
    "ontologyLimit": "Bookchin e Öcalan compartilham autogoverno local confederado e horizonte não estatal. Consenso orientador não prova veto unânime; coexistência de transição não prova oposição de fins. Duas autorias não demonstram independência doutrinal. Bookchin distingue explicitamente comunalismo de anarquismo; família editorial corrigida para democrática sem mudar o catálogo ou o retrato anterior."
  },
  {
    "id": "ideology-civic-nationalism",
    "name": "Nacionalismo cívico",
    "family": "decolonial",
    "selectionRationale": "Consentimento e pertencimento cívico nacional",
    "reviewStatus": "referent-and-bounded-neighbor-contrast-reviewed",
    "documentedAxisCountAtSnapshot": 0,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "bounded-primary-neighbor-contrast",
    "ontologyLimit": "Programas normativos localizados em transcrição primária; afirmações históricas dos autores não verificadas como fatos. Variantes e sobreposição entre anticolonialismo, solidariedade continental e socialismo permanecem delimitadas."
  },
  {
    "id": "ideology-anticolonial-nationalism",
    "name": "Nacionalismo anticolonial",
    "family": "decolonial",
    "selectionRationale": "Autodeterminação e soberania pós-colonial",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 0,
    "ontologyStatus": "provisional-normative-referent",
    "contrastStatus": "not-independently-verified"
  },
  {
    "id": "ideology-pan-africanism",
    "name": "Pan-africanismo",
    "family": "decolonial",
    "selectionRationale": "Unidade continental africana",
    "reviewStatus": "referent-and-bounded-neighbor-contrast-reviewed",
    "documentedAxisCountAtSnapshot": 0,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "bounded-primary-neighbor-contrast",
    "ontologyLimit": "Programas normativos localizados em transcrição primária; afirmações históricas dos autores não verificadas como fatos. Variantes e sobreposição entre anticolonialismo, solidariedade continental e socialismo permanecem delimitadas."
  },
  {
    "id": "ideology-left-nasserism",
    "name": "Nasserismo",
    "family": "decolonial",
    "selectionRationale": "Desenvolvimento estatal e nacionalismo egípcio",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 3,
    "ontologyStatus": "provisional-normative-referent",
    "contrastStatus": "not-independently-verified"
  },
  {
    "id": "ideology-left-baathism",
    "name": "Baathismo",
    "family": "decolonial",
    "selectionRationale": "Unidade árabe como programa partidário",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 5,
    "ontologyStatus": "provisional-normative-referent",
    "contrastStatus": "not-independently-verified"
  },
  {
    "id": "ideology-left-ujamaa",
    "name": "Ujamaa",
    "family": "decolonial",
    "selectionRationale": "Socialismo comunitário tanzaniano",
    "reviewStatus": "referent-and-bounded-neighbor-contrast-reviewed",
    "documentedAxisCountAtSnapshot": 2,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "bounded-primary-neighbor-contrast",
    "ontologyLimit": "Programas normativos localizados em transcrição primária; afirmações históricas dos autores não verificadas como fatos. Variantes e sobreposição entre anticolonialismo, solidariedade continental e socialismo permanecem delimitadas."
  },
  {
    "id": "ideology-left-mariateguismo",
    "name": "Mariateguismo",
    "family": "decolonial",
    "selectionRationale": "Marxismo andino e questão da terra indígena",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 3,
    "ontologyStatus": "provisional-normative-referent",
    "contrastStatus": "not-independently-verified"
  },
  {
    "id": "ideology-indigenous-autonomy",
    "name": "Autonomismo indígena",
    "family": "decolonial",
    "selectionRationale": "Autonomia indígena no recorte zapatista",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 0,
    "ontologyStatus": "provisional-normative-referent",
    "contrastStatus": "not-independently-verified"
  },
  {
    "id": "christian-democracy",
    "name": "Democracia cristã",
    "family": "religious",
    "selectionRationale": "Democracia e economia social em tradição cristã",
    "reviewStatus": "referent-and-bounded-neighbor-contrast-reviewed",
    "documentedAxisCountAtSnapshot": 7,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "bounded-primary-neighbor-contrast",
    "ontologyLimit": "Programas institucionais de ação social/economia ou jurisdição digital localizados. As duas declarações SI continuam no mesmo campo democrático socialista: diferença de edição não prova doutrinas independentes. Barlow limita autonomia ao ciberespaço e admite governo dos corpos."
  },
  {
    "id": "ideology-christian-socialism",
    "name": "Socialismo cristão",
    "family": "religious",
    "selectionRationale": "Igualdade socialista com fundamento cristão",
    "reviewStatus": "referent-and-bounded-neighbor-contrast-reviewed",
    "documentedAxisCountAtSnapshot": 4,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "bounded-primary-neighbor-contrast",
    "ontologyLimit": "Referentes normativos localizados; comparação delimitada por texto e edição, sem provar independência de todos os vizinhos nem prática implementada."
  },
  {
    "id": "ideology-distributism",
    "name": "Distributismo",
    "family": "religious",
    "selectionRationale": "Distribuição da propriedade e corpos intermediários",
    "reviewStatus": "referent-and-bounded-neighbor-contrast-reviewed",
    "documentedAxisCountAtSnapshot": 3,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "bounded-primary-neighbor-contrast",
    "ontologyLimit": "Referentes normativos localizados; comparação delimitada por texto e edição, sem provar independência de todos os vizinhos nem prática implementada."
  },
  {
    "id": "ideology-islamic-democracy",
    "name": "Democracia muçulmana",
    "family": "religious",
    "selectionRationale": "Pluralismo civil no recorte democrático muçulmano",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 0,
    "ontologyStatus": "provisional-normative-referent",
    "contrastStatus": "not-independently-verified"
  },
  {
    "id": "green-politics",
    "name": "Política verde",
    "family": "ecological",
    "selectionRationale": "Democracia, não violência e proteção ecológica",
    "reviewStatus": "referent-and-bounded-neighbor-contrast-reviewed",
    "documentedAxisCountAtSnapshot": 7,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "bounded-primary-neighbor-contrast",
    "ontologyLimit": "Contraste específico com Manifesto Ecomodernista 2015 localizado; relações entre demais correntes ecológicas permanecem abertas e não são mutuamente exclusivas."
  },
  {
    "id": "ideology-eco-socialism",
    "name": "Ecossocialismo",
    "family": "ecological",
    "selectionRationale": "Transformação socialista da produção ecológica",
    "reviewStatus": "referent-and-bounded-neighbor-contrast-reviewed",
    "documentedAxisCountAtSnapshot": 0,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "bounded-primary-neighbor-contrast",
    "ontologyLimit": "Contraste específico com Manifesto Ecomodernista 2015 localizado; relações entre demais correntes ecológicas permanecem abertas e não são mutuamente exclusivas."
  },
  {
    "id": "civic-degrowth",
    "name": "Decrescimento",
    "family": "ecological",
    "selectionRationale": "Redução material nas economias ricas",
    "reviewStatus": "referent-and-bounded-neighbor-contrast-reviewed",
    "documentedAxisCountAtSnapshot": 4,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "bounded-primary-neighbor-contrast",
    "ontologyLimit": "Contraste documental Paris 2008–Manifesto 2015 verificado; relações com verdes/ecossocialismo e diversidade interna permanecem abertas."
  },
  {
    "id": "civic-ecomodernism",
    "name": "Ecomodernismo",
    "family": "ecological",
    "selectionRationale": "Desacoplamento por tecnologia e produtividade",
    "reviewStatus": "referent-and-bounded-neighbor-contrast-reviewed",
    "documentedAxisCountAtSnapshot": 1,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "bounded-primary-neighbor-contrast",
    "ontologyLimit": "Contraste documental Paris 2008–Manifesto 2015 verificado; relações com verdes/ecossocialismo e diversidade interna permanecem abertas."
  },
  {
    "id": "civic-bioregionalism",
    "name": "Biorregionalismo",
    "family": "ecological",
    "selectionRationale": "Territórios políticos definidos por ecossistemas",
    "reviewStatus": "referent-and-bounded-neighbor-contrast-reviewed",
    "documentedAxisCountAtSnapshot": 5,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "bounded-primary-neighbor-contrast",
    "ontologyLimit": "Contraste específico com Manifesto Ecomodernista 2015 localizado; relações entre demais correntes ecológicas permanecem abertas e não são mutuamente exclusivas."
  },
  {
    "id": "civic-earth-stewardship",
    "name": "Ética da terra e conservação",
    "family": "ecological",
    "selectionRationale": "Comunidade moral incluindo seres e sistemas naturais",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 2,
    "ontologyStatus": "ethical-framework",
    "contrastStatus": "not-independently-verified",
    "ontologyLimit": "Ética ambiental precisa de transição demonstrada a uma doutrina política, além do fundamento moral."
  },
  {
    "id": "civic-environmental-justice",
    "name": "Justiça ambiental",
    "family": "ecological",
    "selectionRationale": "Desigualdade racial e distribuição de riscos ambientais",
    "reviewStatus": "referent-and-bounded-neighbor-contrast-reviewed",
    "documentedAxisCountAtSnapshot": 3,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "bounded-primary-neighbor-contrast",
    "ontologyLimit": "Contraste específico com Manifesto Ecomodernista 2015 localizado; relações entre demais correntes ecológicas permanecem abertas e não são mutuamente exclusivas."
  },
  {
    "id": "ideology-republicanism",
    "name": "Republicanismo cívico",
    "family": "democratic",
    "selectionRationale": "Cidadania, leis e participação republicana",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 0,
    "ontologyStatus": "provisional-normative-referent",
    "contrastStatus": "not-independently-verified"
  },
  {
    "id": "civic-participatory-democracy",
    "name": "Democracia participativa: Port Huron, 1962",
    "family": "democratic",
    "selectionRationale": "Participação para além da eleição",
    "reviewStatus": "referent-and-bounded-neighbor-contrast-reviewed",
    "documentedAxisCountAtSnapshot": 8,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "bounded-primary-neighbor-contrast",
    "ontologyLimit": "Programa de autoridade e ação coletiva localizado, não mero instrumento institucional. O catálogo mantém seu recorte original e valores; a seleção estreita o referente. Não certifica independência de todos os modelos democráticos compatíveis. Manifesto mantém partidos e representação, acrescentando participação política e econômica. Compatibilidade com deliberação ou soberania direta permanece."
  },
  {
    "id": "civic-direct-democracy",
    "name": "Soberania legislativa direta: Rousseau, 1762",
    "family": "democratic",
    "selectionRationale": "Leis dependem de ratificação pessoal do povo; execução pode ser representada. Não generalizar a todos os referendos suíços.",
    "reviewStatus": "referent-and-bounded-neighbor-contrast-reviewed",
    "documentedAxisCountAtSnapshot": 2,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "bounded-primary-neighbor-contrast",
    "ontologyLimit": "Programa de autoridade e ação coletiva localizado, não mero instrumento institucional. O catálogo mantém seu recorte original e valores; a seleção estreita o referente. Não certifica independência de todos os modelos democráticos compatíveis. III.15 admite representação executiva e discute liberdade cidadã em sociedades escravistas, mas nega explicitamente necessidade/legitimidade da escravidão em web 1137; não afirmar prática igualitária ou apoio à escravidão."
  },
  {
    "id": "civic-deliberative-democracy",
    "name": "Democracia deliberativa: modelo procedimental de Habermas",
    "family": "democratic",
    "selectionRationale": "Deliberação informada como fundamento",
    "reviewStatus": "primary-referent-and-nearest-overlap-reviewed",
    "documentedAxisCountAtSnapshot": 1,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "nearest-neighbor-overlap-unresolved",
    "ontologyLimit": "Artigo em português Lua Nova 1995 define legitimidade, Estado, sociedade e ação política além de um processo consultivo. Comunicação distribuída e deliberação não contradizem automaticamente ratificação popular direta; proximidade a participação/republicanismo permanece. Fontes e números do catálogo não mudam."
  },
  {
    "id": "civic-consociational-democracy",
    "name": "Democracia consociativa",
    "family": "democratic",
    "selectionRationale": "Partilha de poder entre comunidades",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 3,
    "ontologyStatus": "institutional-model",
    "contrastStatus": "not-independently-verified",
    "ontologyLimit": "Arranjo de acomodação entre elites/grupos; justificação normativa e tradição próprias por verificar."
  },
  {
    "id": "civic-federal-republicanism",
    "name": "Federalismo republicano: Madison, 1787–1788",
    "family": "democratic",
    "selectionRationale": "Representação e competências divididas justificadas como programa, além da descrição constitucional.",
    "reviewStatus": "referent-and-bounded-neighbor-contrast-reviewed",
    "documentedAxisCountAtSnapshot": 4,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "bounded-primary-neighbor-contrast",
    "ontologyLimit": "Programa de autoridade e ação coletiva localizado, não mero instrumento institucional. O catálogo mantém seu recorte original e valores; a seleção estreita o referente. Não certifica independência de todos os modelos democráticos compatíveis."
  },
  {
    "id": "civic-world-federalism",
    "name": "Federalismo mundial: declaração de Montreux, 1947",
    "family": "democratic",
    "selectionRationale": "Programa mundial com poderes limitados, lei direta e ação constituinte; não apenas cooperação internacional.",
    "reviewStatus": "referent-and-bounded-neighbor-contrast-reviewed",
    "documentedAxisCountAtSnapshot": 4,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "bounded-primary-neighbor-contrast",
    "ontologyLimit": "Programa de autoridade e ação coletiva localizado, não mero instrumento institucional. O catálogo mantém seu recorte original e valores; a seleção estreita o referente. Não certifica independência de todos os modelos democráticos compatíveis."
  },
  {
    "id": "ideology-developmentalism",
    "name": "Desenvolvimentismo",
    "family": "development",
    "selectionRationale": "Industrialização e mudança centro-periferia",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 0,
    "ontologyStatus": "provisional-normative-referent",
    "contrastStatus": "not-independently-verified"
  },
  {
    "id": "ideology-dependency-theory",
    "name": "Teoria da dependência",
    "family": "development",
    "selectionRationale": "Dependência estrutural internacional",
    "reviewStatus": "provisional",
    "documentedAxisCountAtSnapshot": 0,
    "ontologyStatus": "explanatory-framework",
    "contrastStatus": "not-independently-verified",
    "ontologyLimit": "Teoria explicativa de desenvolvimento; agenda normativa e contraste perante desenvolvimentismo ainda precisam de prova."
  },
  {
    "id": "ideology-left-guild-socialism",
    "name": "Socialismo de guildas",
    "family": "socialist",
    "selectionRationale": "Autogoverno industrial e político por associações de produtores, consumidores e comunas; Cole fornece um programa de reconstrução social.",
    "reviewStatus": "referent-reviewed-contrast-provisional",
    "documentedAxisCountAtSnapshot": 4,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "not-independently-verified"
  },
  {
    "id": "ideology-left-black-anarchism",
    "name": "Anarquismo negro",
    "family": "anarchist",
    "selectionRationale": "Autonomia organizativa negra, combate à supremacia branca e reconstrução anticapitalista sem Estado, no programa de Ervin de 1993.",
    "reviewStatus": "referent-reviewed-contrast-provisional",
    "documentedAxisCountAtSnapshot": 4,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "not-independently-verified"
  },
  {
    "id": "ideology-program-technocracy-inc-2004",
    "name": "Tecnocracia: governo funcional continental de Technocracy Inc.",
    "family": "technical",
    "selectionRationale": "Programa político afirmado de autoridade funcional e ordem produtiva, com identidade distinta do modelo condicional de Veblen.",
    "reviewStatus": "referent-reviewed-nearest-overlap-open",
    "documentedAxisCountAtSnapshot": 6,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "nearest-neighbor-unresolved",
    "ontologyLimit": "Único exemplar tecnocrático qualificado desta seleção. Edição eletrônica 1.1/2004 efetivamente lida e independentemente reaberta; direção continental autoseletiva e organização produtiva afirmadas. Veblen permanece registro extra, não segunda doutrina independente. Proximidade a outras formas de planejamento/autoridade exige contraste; nenhuma previsão científica ou prática validada."
  },
  {
    "id": "civic-transhumanism",
    "name": "Transumanismo: valores políticos de Bostrom, 2005",
    "family": "technical",
    "selectionRationale": "Ampliação voluntária de capacidades humanas",
    "reviewStatus": "referent-reviewed-nearest-overlap-open",
    "documentedAxisCountAtSnapshot": 3,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "nearest-neighbor-unresolved",
    "ontologyLimit": "Programa explícito de acesso amplo, escolha e redução de riscos com democracia e Estado de direito internacional, não mera previsão tecnológica. Proximidade com ecomodernismo, liberalismo social e outras tradições exige exame material; nenhuma nova comparação automaticamente resolvida. Catálogo separado, fonte Humanity+ declara adoção em 2009, não revisão 2012."
  },
  {
    "id": "ideology-right-agorism",
    "name": "Agorismo",
    "family": "liberal",
    "selectionRationale": "Sociedade voluntária de mercado e transição pela contraeconomia; rejeição explícita da estratégia partidária em Konkin.",
    "reviewStatus": "referent-reviewed-contrast-provisional",
    "documentedAxisCountAtSnapshot": 2,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "bounded-primary-neighbor-contrast",
    "ontologyLimit": "Contraste estratégico com plataforma eleitoral LP verificado; relação de subtradição com anarcocapitalismo ainda pendente."
  },
  {
    "id": "ideology-fascism",
    "name": "Fascismo: formulação Mussolini/Gentile de 1932",
    "family": "authoritarian",
    "selectionRationale": "Estado total e mobilização nacional",
    "reviewStatus": "referent-and-bounded-neighbor-contrast-reviewed",
    "documentedAxisCountAtSnapshot": 8,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "bounded-primary-neighbor-contrast",
    "ontologyLimit": "Programa primário delimitado, não certificação de toda tradição ou independência de todos os vizinhos; fontes e valores do catálogo não mudam. Excertos ingleses, não entrada integral; contraste imperial com NatCon não resolve a proximidade ao kokutai ou todas as variantes fascistas."
  },
  {
    "id": "ideology-left-anarcha-feminism",
    "name": "Anarcafeminismo",
    "family": "anarchist",
    "selectionRationale": "Emancipação de gênero contra dominação estatal e social, acompanhada de organização coletiva, alfabetização e formação laboral em Mujeres Libres.",
    "reviewStatus": "referent-reviewed-contrast-provisional",
    "documentedAxisCountAtSnapshot": 4,
    "ontologyStatus": "bounded-normative-referent-reviewed",
    "contrastStatus": "not-independently-verified"
  },
  {
    "id": "ideology-right-showa-statism",
    "name": "Doutrina imperial do kokutai, 1937",
    "family": "authoritarian",
    "selectionRationale": "Texto oficial normativo sobre essência nacional e autoridade imperial, sem equivaler ao conjunto da prática Shōwa.",
    "reviewStatus": "referent-reviewed-contrast-provisional",
    "documentedAxisCountAtSnapshot": 7,
    "ontologyStatus": "state-normative-doctrine",
    "contrastStatus": "not-independently-verified",
    "ontologyLimit": "Uma doutrina estatal pode contar; comparação sistemática com fascismo e monarquia absoluta ainda não concluída."
  }
] as const;

export const ideologyOverlapChecks = [
  {
    "a": "ideology-classical-liberalism",
    "b": "ideology-right-constitutional-liberalism",
    "relation": "source-overlap",
    "rationale": "Ambos citam Locke/Two Treatises e consentimento; prefere-se o rótulo amplo clássico. A ausência de aliases não prova distinção.",
    "status": "provisional-local-metadata-check"
  },
  {
    "a": "libertarianism",
    "b": "ideology-right-minarchism",
    "relation": "umbrella-subtradition",
    "rationale": "Libertarianismo é amplo; minarquismo acrescenta um limite institucional explícito. Ambos provisoriamente mantidos.",
    "status": "provisional-local-metadata-check"
  },
  {
    "a": "ideology-right-minarchism",
    "b": "ideology-right-anarcho-capitalism",
    "relation": "institutional-contrast",
    "rationale": "Estado mínimo versus abolição de serviços estatais: contraste institucional, não sinônimos.",
    "status": "provisional-local-metadata-check"
  },
  {
    "a": "social-democracy",
    "b": "democratic-socialism",
    "relation": "overlapping-traditions",
    "rationale": "Proteção na economia mista versus democratização da produção; fontes compartilhadas exigem exame adicional.",
    "status": "provisional-local-metadata-check"
  },
  {
    "a": "ideology-market-socialism",
    "b": "ideology-left-yugoslav-self-management",
    "relation": "umbrella-case",
    "rationale": "Socialismo de mercado é modelo; autogestão iugoslava é caso histórico. Manter ambos é decisão provisória de contraste, não prova de autonomia taxonômica.",
    "status": "provisional-local-metadata-check"
  },
  {
    "a": "ideology-national-liberation-socialism",
    "b": "ideology-left-ujamaa",
    "relation": "source-overlap",
    "rationale": "Nyerere/Arusha liga socialismo de libertação e Ujamaa; seleciona-se o nome específico Ujamaa, sem afirmar equivalência total.",
    "status": "provisional-local-metadata-check"
  },
  {
    "a": "ideology-anarcho-syndicalism",
    "b": "ideology-left-revolutionary-syndicalism",
    "relation": "overlapping-traditions",
    "rationale": "Anarcossindicalismo e sindicalismo revolucionário têm sobreposição organizacional; nesta seleção prefere-se a doutrina explicitamente antiestatal.",
    "status": "provisional-local-metadata-check"
  },
  {
    "a": "ideology-left-platformism",
    "b": "ideology-left-especifismo",
    "relation": "organizational-subtraditions",
    "rationale": "Plataformismo e especifismo diferem na organização; ambos permanecem alternativas, sem ocupar duas vagas nesta resolução.",
    "status": "provisional-local-metadata-check"
  },
  {
    "a": "ideology-communalism",
    "b": "ideology-democratic-confederalism",
    "relation": "shared-lineage",
    "rationale": "Municipalismo/ecologia social e confederalismo democrático têm proximidade; diferença de contexto não basta por si. Ambos mantidos sob revisão obrigatória.",
    "status": "provisional-local-metadata-check"
  },
  {
    "a": "civic-deliberative-democracy",
    "b": "civic-deliberative-assemblies",
    "relation": "mechanism-within-tradition",
    "rationale": "Ambos usam o mesmo relatório OECD; assembleias cidadãs são mecanismo associado à democracia deliberativa, não nova ideologia demonstrada.",
    "status": "provisional-local-metadata-check"
  },
  {
    "a": "civic-human-development",
    "b": "civic-capability-approach",
    "relation": "framework-overlap",
    "rationale": "Desenvolvimento humano usa capacidades; seleciona-se o fundamento normativo das capacidades e mantém-se o indicador/programa alternativo.",
    "status": "provisional-local-metadata-check"
  },
  {
    "a": "civic-open-government",
    "b": "civic-open-data",
    "relation": "policy-subset",
    "rationale": "Dados abertos podem integrar governo aberto; dois instrumentos de transparência não demonstram duas ideologias completas.",
    "status": "provisional-local-metadata-check"
  },
  {
    "a": "civic-environmental-justice",
    "b": "civic-climate-justice",
    "relation": "overlapping-scope",
    "rationale": "Justiça climática tem escopo ambiental específico; mantém-se justiça ambiental nesta resolução, sem chamar a outra de sinônimo.",
    "status": "provisional-local-metadata-check"
  },
  {
    "a": "ideology-fascism",
    "b": "ideology-right-italian-fascist-corporatism",
    "relation": "umbrella-component",
    "rationale": "Corporativismo fascista é arranjo econômico de uma tradição fascista; prefere-se o quadro histórico amplo.",
    "status": "provisional-local-metadata-check"
  },
  {
    "a": "ideology-right-francoism",
    "b": "ideology-right-falangism",
    "relation": "coalition-versus-doctrine",
    "rationale": "Franquismo e Falangismo não são sinônimos; o regime integrou correntes. Escolha do recorte amplo é editorial, com revisão de fronteira.",
    "status": "provisional-local-metadata-check"
  },
  {
    "a": "ideology-conservatism",
    "b": "ideology-right-traditionalist-conservatism",
    "relation": "overlapping-traditions",
    "rationale": "Burke e Kirk representam tradições conservadoras próximas; prefere-se o rótulo amplo, não declaração de identidade.",
    "status": "provisional-local-metadata-check"
  },
  {
    "a": "ideology-right-constitutional-monarchism",
    "b": "ideology-right-orleanism",
    "relation": "regional-subtradition",
    "rationale": "Orleanismo é caso dinástico/constitucional francês; monarquismo constitucional representa o contraste geral.",
    "status": "provisional-local-metadata-check"
  },
  {
    "a": "civic-transhumanism",
    "b": "civic-techno-progressivism",
    "relation": "overlapping-traditions",
    "rationale": "Tecnoprogressismo enfatiza distribuição e democracia; não é sinônimo de transumanismo. Seleção do amplo mantém alternativa pendente.",
    "status": "provisional-local-metadata-check"
  },
  {
    "a": "ideology-right-agorism",
    "b": "libertarianism",
    "relation": "strategy-and-institutional-program",
    "rationale": "Konkin I rejeita partyarchy; LP §3.6 propõe participação eleitoral. Contraste documental delimitado, não incompatibilidade de toda família libertária.",
    "status": "bounded-primary-contrast"
  },
  {
    "a": "ideology-left-black-anarchism",
    "b": "ideology-anarcho-communism",
    "relation": "umbrella-subtradition",
    "rationale": "Ervin Ch.1 exige autonomia do movimento negro e luta contra supremacia branca, complementando comunismo libertário; sobreposição admitida.",
    "status": "bounded-primary-contrast-one-side"
  },
  {
    "a": "ideology-left-anarcha-feminism",
    "b": "ideology-feminist-socialism",
    "relation": "authority-and-gender-traditions",
    "rationale": "Mujeres Libres coordena sem comando; Combahee 1977 defende socialismo, opressões interligadas e organização igualitária. Há sobreposição real; ausência de rótulo anarquista em Combahee não prova compromisso estatal. Contraste de autoridade permanece aberto.",
    "status": "both-primary-referents-read-contrast-unresolved"
  },
  {
    "a": "ideology-left-guild-socialism",
    "b": "ideology-market-socialism",
    "relation": "functional-democratic-institutions",
    "rationale": "Cole propõe autogoverno funcional de guildas/consumidores; comparação primária sistemática com socialismo de mercado ainda pendente.",
    "status": "contrast-pending"
  },
  {
    "a": "civic-degrowth",
    "b": "civic-ecomodernism",
    "relation": "alternative-economic-ecological-transition-programs",
    "rationale": "Paris 2008 exige redução da pegada e consumo nas economias excedentes, seguida de estado estacionário; Manifesto 2015 §2 propõe queda absoluta de impactos com crescimento econômico. Ambos têm compromisso político democrático explícito; não é prova de eficácia científica nem de exclusividade.",
    "status": "bounded-primary-contrast"
  },
  {
    "a": "green-politics",
    "b": "civic-ecomodernism",
    "relation": "conflicting-declared-energy-strategies",
    "rationale": "Carta 2023 §3.6 rejeita expansão nuclear e exige eliminação rápida; Manifesto 2015 §4 privilegia energia nuclear e §6 critica fechamento. Ambos são programas políticos amplos, não rótulos de técnica. Não resolve o mérito científico nem relação verdes–decrescimento.",
    "status": "bounded-primary-contrast"
  },
  {
    "a": "ideology-eco-socialism",
    "b": "civic-ecomodernism",
    "relation": "alternative-production-institution-programs",
    "rationale": "Belém 2008/2009 pp4–5 exige substituição capitalista, coletivização produtiva e planejamento democrático; Manifesto 2015 §6 mobiliza empreendedores privados, mercados, sociedade civil e Estado e rejeita redução da modernização a laissez-faire. Não extrapolar a todos os socialismos/ecologismos.",
    "status": "bounded-primary-contrast"
  },
  {
    "a": "civic-bioregionalism",
    "b": "civic-ecomodernism",
    "relation": "reinhabitation-versus-decoupling-strategies",
    "rationale": "Berg 1983 exige reinhabitação adaptada ao lugar e organiza ação por bioregiões; Manifesto 2015 abertura rejeita harmonização humana com natureza como princípio de sobrevivência, preferindo desacoplamento intensificado. Relação com descentralização verde é sobreposta.",
    "status": "bounded-primary-contrast"
  },
  {
    "a": "civic-environmental-justice",
    "b": "civic-ecomodernism",
    "relation": "conflicting-radioactive-production-programs",
    "rationale": "Princípios 1991 §6 exigem cessação da produção de materiais radioativos; Manifesto 2015 §4 promove energia nuclear. A plataforma de justiça ambiental também especifica autodeterminação, direitos indígenas e participação. Contraste delimitado, não prova de incompatibilidade de toda justiça ambiental com toda tecnologia.",
    "status": "bounded-primary-contrast"
  },
  {
    "a": "ideology-right-minarchism",
    "b": "ideology-right-anarcho-capitalism",
    "relation": "legitimate-minimal-state-versus-competitive-law",
    "rationale": "Nozick Preface 1974 legitima Estado mínimo; Friedman Part III projeta ausência de governo com proteção e sistemas legais concorrentes. Comparação por instituições, não por intensidade numérica do vetor.",
    "status": "bounded-primary-contrast"
  },
  {
    "a": "ideology-right-objectivism",
    "b": "ideology-right-anarcho-capitalism",
    "relation": "objective-government-versus-competing-law",
    "rationale": "Rand 1963 rejeita expressamente competing governments e exige governo limitado/leis objetivas; Friedman Part III pp60–62 afirma produção competitiva de proteção e leis. Endpoint governamental Rand–Nozick sobreposto, fundamentos ainda pendentes.",
    "status": "bounded-primary-contrast"
  },
  {
    "a": "ideology-classical-liberalism",
    "b": "ideology-right-anarcho-capitalism",
    "relation": "commonwealth-authority-versus-private-law",
    "rationale": "Locke IX §§123–131 institui leis comuns, juiz autorizado e poderes legislativo/executivo comunitários; Friedman propõe acordos privados entre agências e arbitragem concorrente. Não declarar que Locke determina todas variantes liberais clássicas.",
    "status": "bounded-primary-contrast"
  },
  {
    "a": "ideology-georgism",
    "b": "libertarianism",
    "relation": "common-land-rent-versus-tax-abolition",
    "rationale": "George VIII.II exige renda fundiária pública/imposto único para direito comum à terra; LP atual §2.4 pretende revogar toda tributação. São programas positivos diferentes; a validade de títulos privados/terra permanece tema filosófico, não fato científico.",
    "status": "bounded-primary-contrast"
  },
  {
    "a": "ideology-right-objectivism",
    "b": "ideology-right-minarchism",
    "relation": "shared-minimal-government-different-justification-unreviewed",
    "rationale": "Fontes lidas convergem em governo protetor de direitos; autoria e sistema filosófico diferente não bastam para provar doutrinas políticas independentes. Necessária comparação localizada dos fundamentos.",
    "status": "both-primary-referents-read-contrast-unresolved"
  },
  {
    "a": "ideology-maoism",
    "b": "ideology-trotskyism",
    "relation": "distinct-democratic-stage-versus-direct-permanent-transition",
    "rationale": "Mao 1940 III/V/VI conserva etapa democrática de coalizão incluindo burguesia nacional e capital privado limitado; Trotsky Chapter 10 §§2–8 rejeita regime classista intermediário e prevê incursões imediatas na propriedade burguesa. Ambos lideram alianças camponesas pelo proletariado; contraste é fase/coalizão, não camponeses versus trabalhadores.",
    "status": "bounded-primary-contrast"
  },
  {
    "a": "ideology-luxemburgism",
    "b": "ideology-fabianism",
    "relation": "conquest-of-power-versus-constitutional-gradual-transfer",
    "rationale": "Luxemburg VIII mantém reformas democráticas, mas nega que substituam conquista do poder; Webb/Shaw nos ensaios 1889 propõem transformação gradual constitucional e transferência estatal por parcelas. Contextos e meios não são escala numérica de radicalidade.",
    "status": "bounded-primary-contrast"
  },
  {
    "a": "ideology-council-communism",
    "b": "ideology-fabianism",
    "relation": "council-production-versus-state-administered-transition",
    "rationale": "GIC 1930 I/XIII rejeita Estado administrador da produção e institui conselhos, propriedade social e contabilidade coerciva comum; Fabian 1889 legitima organização política democrática e transferências econômicas ao Estado. Não se presume que comunismo de conselhos dispense coerção ou que todos fabianos defendam burocracia idêntica.",
    "status": "bounded-primary-contrast"
  },
  {
    "a": "ideology-mutualism",
    "b": "ideology-anarcho-communism",
    "relation": "equivalent-product-exchange-versus-needs-distribution",
    "rationale": "Proudhon 1840 conclusão VI–IX exige equivalência na troca e posse; Kropotkin3.1/13 rejeita salário e troca do produto por contribuição individual em favor de necessidades. Comparação do desenho distributivo, não equiparar posse proudhoniana a propriedade capitalista.",
    "status": "bounded-primary-contrast"
  },
  {
    "a": "ideology-left-individualist-anarchism",
    "b": "ideology-anarcho-communism",
    "relation": "competitive-capital-use-versus-common-means-without-wages",
    "rationale": "Tucker ensaio inicial propõe capital a custo pela concorrência livre e não socialização de sua titularidade; Kropotkin3.1 põe meios em comum e abandona salários. A controvérsia dos autores não prova que todo comunismo voluntário seria coercivo.",
    "status": "bounded-primary-contrast"
  },
  {
    "a": "ideology-pacifist-anarchism",
    "b": "ideology-left-anarcho-collectivism",
    "relation": "nonresistance-versus-defensive-federated-militia",
    "rationale": "TolstóiII rejeita exceção de força para defender terceiros; Bakunin IX.N7–10 admite armas para defender liberdade e guerras defensivas federadas. Não se atribui militarismo estatal a Bakunin.",
    "status": "bounded-primary-contrast"
  },
  {
    "a": "ideology-pacifist-anarchism",
    "b": "ideology-anarcho-syndicalism",
    "relation": "nonresistance-versus-revolutionary-defensive-force",
    "rationale": "TolstóiII/VII rejeita coerção militar; IWA 2023 II.7/10 admite milícias e violência defensiva sob organizações econômicas de trabalhadores. Registra conflito normativo delimitado, não toda estratégia de todo sindicato desde 1922.",
    "status": "bounded-primary-contrast"
  },
  {
    "a": "ideology-mutualism",
    "b": "ideology-left-individualist-anarchism",
    "relation": "nested-or-specific-distribution-contrast-unresolved",
    "rationale": "Tucker reivindica Warren/Proudhon e competição/posse; nenhum compromisso político adicional exclusivamente tuckeriano foi demonstrado nesta leitura. Relação pode ser subtradição, não duas doutrinas disjuntas.",
    "status": "both-primary-referents-read-contrast-unresolved"
  },
  {
    "a": "ideology-anarcho-syndicalism",
    "b": "ideology-anarcho-communism",
    "relation": "nested-or-specific-distribution-contrast-unresolved",
    "rationale": "IWA especifica organização sindical e ação direta como transição ao comunismo libertário; Kropotkin também discute associações operárias. Adição estratégica localizada, fronteira doutrinal exclusiva não provada.",
    "status": "both-primary-referents-read-contrast-unresolved"
  },
  {
    "a": "ideology-left-anarcho-collectivism",
    "b": "ideology-anarcho-communism",
    "relation": "nested-or-specific-distribution-contrast-unresolved",
    "rationale": "Bakunin 1866 admite desigualdades por energia/aptidão e propriedade usada pelo produtor, mas esta leitura não demonstra integral sistema de remuneração coletivista. Kropotkin13 critica também coletivismo estatal; não atribuir alvo inteiro a Bakunin.",
    "status": "both-primary-referents-read-contrast-unresolved"
  },
  {
    "a": "social-liberalism",
    "b": "libertarianism",
    "relation": "public-social-access-purpose-versus-government-only-rights-protection",
    "rationale": "LI 2017 C5/C7 atribui a governos acesso universal de saúde, educação e pesquisa; LP3.0 limita propósito estatal à proteção de direitos e2.12–2.14 propõe educação/saúde/segurança social privada voluntária. Distinção de missão pública, não inferir modelo único de financiamento ou estatização.",
    "status": "bounded-primary-contrast"
  },
  {
    "a": "democratic-socialism",
    "b": "libertarianism",
    "relation": "democratic-production-planning-versus-production-mandate-rejection",
    "rationale": "Frankfurt 1951 Economic Democracy2–5 exige planejamento democrático da produção, compatível com setores privados; LP2.1 rejeita mandatos produtivos governamentais. Fonte não prova oposição entre socialdemocracia e socialismo democrático.",
    "status": "bounded-primary-contrast"
  },
  {
    "a": "social-democracy",
    "b": "libertarianism",
    "relation": "mixed-public-enterprise-versus-separation-business-state",
    "rationale": "Stockholm 1989§60 legitima empresas públicas quando necessárias às prioridades sociais em economia mista; LP2.8 proíbe competição governamental com empresas privadas. O contraste está no programa econômico, não no ano nem numa diferença fabricada entre os dois rótulos SI.",
    "status": "bounded-primary-contrast"
  },
  {
    "a": "ideology-right-technolibertarianism",
    "b": "christian-democracy",
    "relation": "cyberspace-self-jurisdiction-versus-binding-public-digital-law",
    "rationale": "Barlow 1996 rejeita jurisdição legal governamental externa no espaço virtual, mantendo consentimento ao governo dos corpos; EPP 2024§1.7 propõe regras digitais públicas obrigatórias, crimes e brigada cibernética. Conflito localizado de jurisdição, não diferença universal por entusiasmo tecnológico.",
    "status": "bounded-primary-contrast"
  },
  {
    "a": "ideology-national-conservatism",
    "b": "christian-democracy",
    "relation": "national-sovereign-authority-versus-binding-supranational-law",
    "rationale": "NatCon 2022 §2 rejeita transferência de autoridade a órgãos supranacionais; EPP 2024 §1.7 exige regras públicas europeias vinculantes. Contraste institucional localizado, não ausência de toda cooperação entre países.",
    "status": "bounded-primary-contrast"
  },
  {
    "a": "ideology-social-conservatism",
    "b": "social-liberalism",
    "relation": "exclusive-traditional-family-and-minor-curriculum-versus-sexuality-freedom",
    "rationale": "Heritage PDF p6 programa família homem/mulher e restrição curricular de ideologias LGBT para menores; LI C1 defende liberdade de sexualidade e amor sem discriminação. Normas específicas de dois programas, não todas as variantes dos rótulos.",
    "status": "bounded-primary-contrast"
  },
  {
    "a": "ideology-right-neoconservatism",
    "b": "libertarianism",
    "relation": "external-democracy-defense-obligation-versus-no-world-policeman",
    "rationale": "Kristol 2003 pp2–3 atribui às grandes democracias interesse ideológico e obrigação de defender democracias externas; LP §3.1 rejeita o papel de polícia do mundo e alianças entrelaçantes. Kristol nega uma doutrina fixa de política externa; não se deduz apoio a toda guerra.",
    "status": "bounded-primary-contrast"
  },
  {
    "a": "ideology-right-absolute-monarchy",
    "b": "ideology-classical-liberalism",
    "relation": "indivisible-sovereignty-versus-fiduciary-authority-forfeiture",
    "rationale": "Hobbes XVIII não funda obrigação em pacto do soberano com súditos e rejeita perda do poder por violação desse pacto; Locke XIII §149/XIX §§221–222 admite perda da confiança e retorno do poder ao povo. Recorte de legitimidade/removibilidade, não comparação universal de monarquia e república.",
    "status": "bounded-primary-contrast"
  },
  {
    "a": "ideology-christian-socialism",
    "b": "ideology-social-conservatism",
    "relation": "queer-emancipation-program-versus-restrictive-family-curriculum",
    "rationale": "ICS Gospel inclui emancipação queer no programa cristão de transformação política; Heritage p6 limita família ao casal homem/mulher e currículo LGBT para menores. Diferença normativa de programas, não simples diferença de fé ou autoria.",
    "status": "bounded-primary-contrast"
  },
  {
    "a": "ideology-distributism",
    "b": "libertarianism",
    "relation": "property-dispersion-through-tax-and-law-versus-all-tax-abolition",
    "rationale": "Chesterton II.2 propõe meios legais, herança e tributação para reverter concentração de propriedade privada; LP §§2.4/2.8 rejeita todos os impostos e subsídios. Não significa que todo distributismo prefira pequenas fazendas ou que toda tradição socialista seja a definição de Chesterton.",
    "status": "bounded-primary-contrast"
  },
  {
    "a": "ideology-civic-nationalism",
    "b": "ideology-right-showa-statism",
    "relation": "present-inhabitants-consent-versus-hereditary-divine-imperial-polity",
    "rationale": "Renan 1882 II/III rejeita direito dinástico suficiente e subordina pertencimento territorial ao consentimento dos habitantes; Kokutai 1937 funda a unidade normativa na linhagem imperial divina e dever de devoção. Contraste de legitimação nos textos lidos, não prova de toda variante de nacionalismo cívico ou religião japonesa.",
    "status": "bounded-primary-contrast"
  },
  {
    "a": "ideology-pan-africanism",
    "b": "ideology-national-conservatism",
    "relation": "continental-union-government-versus-no-supranational-authority-transfer",
    "rationale": "Nkrumah 1963 PDF pp49/52–53 exige governo continental com instituições comuns; NatCon 2022§2 rejeita transferência de autoridade a órgãos supranacionais. Nkrumah mantém soberanias em aspectos não especificados; OAU Arts II–III preserva cooperação soberana, portanto pan-africanismo não é sinônimo universal de centralização.",
    "status": "bounded-primary-contrast"
  },
  {
    "a": "ideology-left-ujamaa",
    "b": "libertarianism",
    "relation": "conditional-community-land-use-versus-private-freehold",
    "rationale": "Nyerere 1962 paras 28–32 exige direito de uso da terra condicionado ao uso e abolição de freehold incondicional; LP2.1 defende propriedade privada, homesteading e rejeita limites governamentais de propriedade/uso. A comparação é fundiária e normativa, não alegação sobre implementação histórica tanzaniana nem toda modalidade de propriedade comunitária.",
    "status": "bounded-primary-contrast"
  },
  {
    "a": "ideology-communalism",
    "b": "ideology-council-communism",
    "relation": "civic-municipal-assembly-versus-production-council-authority",
    "rationale": "Bookchin 2002 §§137–146 integra empresas ao poder de assembleias de cidadãos enquanto cidadãos, em vez de representantes de ocupações; GIC 1930 XIII atribui administração produtiva aos conselhos de produtores sob contabilidade social. Distinção de órgão e identidade que autorizam produção, não municipalismo contra ausência de coordenação geral nem negação dos fins comunistas compartilhados.",
    "status": "bounded-primary-contrast"
  },
  {
    "a": "ideology-communalism",
    "b": "ideology-democratic-confederalism",
    "relation": "shared-confederated-self-government-with-unresolved-decision-and-transition-emphases",
    "rationale": "Bookchin 161–178 prevê maiorias obrigatórias, dissenso protegido e mobilização eleitoral municipal; Öcalan III/IV prevê consenso orientador, participação voluntária e coexistência de duas entidades enquanto o Estado é superado em longo prazo. Consenso não especifica veto unânime; ambos defendem autogoverno confederado não estatal. Ênfases documentadas não provam duas doutrinas independentes. Comparação não entra na contagem de contrastes materiais resolvidos.",
    "status": "primary-nearest-overlap-unresolved"
  },
  {
    "a": "ideology-revolutionary-socialism",
    "b": "ideology-fabianism",
    "relation": "declared-forceful-rupture-versus-peaceful-constitutional-transition",
    "rationale": "Manifesto 1848 IV final declara ruptura pela força; Webb Historic na edição 1891 pp13–14 prescreve via constitucional pacífica no contexto britânico. Comparação de programas delimitados, não todos Marx ou socialistas; o prefácio 1872 qualifica a aplicação histórica. O rótulo revolucionário ainda inclui outras subtradições selecionadas.",
    "status": "bounded-primary-contrast"
  },
  {
    "a": "ideology-marxism-leninism",
    "b": "ideology-council-communism",
    "relation": "leading-party-direction-versus-worker-council-power-with-nonruling-opinion-groups",
    "rationale": "Stalin VIII §3 requer direção política partidária das organizações proletárias, por persuasão/aceitação voluntária, e §5 unidade posterior ao debate; Pannekoek web 10–24/35–37 admite grupos de esclarecimento mas reserva direção social aos trabalhadores/conselhos, rejeitando partido governante. Não equivale debate interno a pluralismo de regime nem valida as generalizações históricas de ambos.",
    "status": "bounded-primary-contrast"
  },
  {
    "a": "ideology-fascism",
    "b": "ideology-national-conservatism",
    "relation": "imperial-expansion-and-absolute-state-versus-national-independence-and-constitutionally-limited-state",
    "rationale": "Excerto 1932 web 34–38 prescreve Estado absoluto e expansão imperial; NatCon 2022 §§1–3 defende nações independentes, rejeita dominação imperial e limita constitucionalmente o Estado. Contraste normativo efetivo, não afirmação sobre toda prática; proximidade fascismo/kokutai ainda não resolvida.",
    "status": "bounded-primary-contrast"
  },
  {
    "a": "civic-world-federalism",
    "b": "ideology-national-conservatism",
    "relation": "limited-world-sovereignty-transfer-versus-prohibition-of-supranational-transfer",
    "rationale": "Montreux 1947 princípios 2–4 atribuem poderes e lei direta à federação mundial; NatCon 2022 §2 recusa transferir autoridade de governos eleitos a órgãos supranacionais. Alianças são admitidas por NatCon; não equivalem a esta transferência. Contraste de programa, não implementação nem impossibilidade de qualquer cooperação.",
    "status": "bounded-primary-contrast"
  },
  {
    "a": "civic-federal-republicanism",
    "b": "civic-direct-democracy",
    "relation": "representative-legislative-authority-versus-required-personal-ratification",
    "rationale": "Madison Federalist 10 web 60–69 justifica delegação a representantes; Rousseau III.15 web 1126 exige ratificação pessoal de cada lei. Rousseau web 1131 admite representação executiva: distinção é legislativa, não proibição de todos os agentes. Madison 39 explicita competências divididas, não federalismo só nominal. Tradicional exclusão e escravidão não são omitidas.",
    "status": "bounded-primary-contrast"
  },
  {
    "a": "civic-participatory-democracy",
    "b": "libertarianism",
    "relation": "democratic-economic-participation-and-public-regulation-versus-unrestricted-private-enterprise",
    "rationale": "Port Huron Values p4 e programa p31 exigem participação laboral, regulação independente e combinações de propriedade pública; LP §§2.1/2.8 rejeita limites governamentais de propriedade/uso e participação pública em empresas. Port Huron ainda usa partidos/representação; o contraste econômico não estabelece exclusividade frente a democracia direta ou deliberativa.",
    "status": "bounded-primary-contrast"
  },
  {
    "a": "ideology-ordoliberalism",
    "b": "libertarianism",
    "relation": "state-monopoly-price-and-contract-supervision-versus-voluntary-trade-and-no-state-price-controls",
    "rationale": "Eucken 1949 tradução 2006 pp24–26 prescreve órgão estatal independente, obrigação de contratar e controle de preços de monopólio; LP §2.1 web 102–103 rejeita controles governamentais de preços e exige condições voluntárias. Ambos valorizam mercado e direitos; não afirmar incompatibilidade com toda política concorrencial nem independência do Colóquio 1938.",
    "status": "bounded-primary-contrast"
  },
  {
    "a": "civic-deliberative-democracy",
    "b": "civic-direct-democracy",
    "relation": "institutionalized-communicative-legitimacy-and-personal-ratification-can-coexist",
    "rationale": "Habermas Lua Nova 1995 web 147–185 especifica formação comunicativa e institucionalização parlamentar/pública; Rousseau II.1/III.15 exige vontade soberana e ratificação pessoal de leis. Deliberação, negociação e formação distribuída podem coexistir com ratificação direta. Não há oposição normativa explícita suficiente para contar duas doutrinas independentes; comparação registrada sem novo contraste resolvido.",
    "status": "primary-nearest-overlap-unresolved"
  },
  {
    "a": "ideology-right-constitutional-monarchism",
    "b": "ideology-right-bonapartism",
    "relation": "hereditary-legislative-duration-chamber-versus-only-hereditary-imperial-power",
    "rationale": "Constant 1815 II exige câmara hereditária como um dos poderes legislativos, distinta da eletiva; Bonaparte 1839 printed 90–94 reserva hereditariedade ao poder imperial e defende Senado não hereditário, explicitamente rejeitando câmara hereditária para França (p91 nota). Ambos conservam monarquia e representação restrita. Divergência concreta na autoridade legislativa, não prova de exclusão entre todos os monarquismos ou de franquia universal.",
    "status": "bounded-primary-contrast"
  }
] as const;

export const preservedIdeologyAlternatives = [
  {
    "id": "ideology-feminist-socialism",
    "name": "Socialismo feminista",
    "reasonCode": "granularity-review",
    "compareWith": null,
    "decisionRationale": "Tradição ou recorte adicional preservado para revisão; ampliar o subconjunto exige demonstrar contraste conceitual além do nome e do vetor.",
    "catalogRationale": "O texto conecta opressões de gênero, raça, classe e sexualidade e defende organização autônoma, solidariedade e transformação estrutural.",
    "catalogSourceTitles": [
      "The Combahee River Collective Statement — Duke University"
    ],
    "documentedAxisCountAtSnapshot": 0,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-agrarian-socialism",
    "name": "Socialismo agrário",
    "reasonCode": "granularity-review",
    "compareWith": null,
    "decisionRationale": "Tradição ou recorte adicional preservado para revisão; ampliar o subconjunto exige demonstrar contraste conceitual além do nome e do vetor.",
    "catalogRationale": "A reivindicação central de terra para comunidades e restituição agrária fundamenta os polos de propriedade e planejamento.",
    "catalogSourceTitles": [
      "Plan de Ayala (1911) — Library of Congress"
    ],
    "documentedAxisCountAtSnapshot": 0,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-agrarian-populism",
    "name": "Populismo agrário",
    "reasonCode": "granularity-review",
    "compareWith": null,
    "decisionRationale": "Tradição ou recorte adicional preservado para revisão; ampliar o subconjunto exige demonstrar contraste conceitual além do nome e do vetor.",
    "catalogRationale": "A plataforma defende reforma monetária, regulação ferroviária e maior controle público de infraestrutura em resposta ao endividamento e ao poder corporativo.",
    "catalogSourceTitles": [
      "Omaha Platform (1892) — University of Arizona, US History II"
    ],
    "documentedAxisCountAtSnapshot": 0,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-arab-socialism-libya-1969",
    "name": "Socialismo árabe (Líbia, 1969)",
    "reasonCode": "granularity-review",
    "compareWith": null,
    "decisionRationale": "Tradição ou recorte adicional preservado para revisão; ampliar o subconjunto exige demonstrar contraste conceitual além do nome e do vetor.",
    "catalogRationale": "O recorte é a proclamação constitucional da Líbia pós-golpe: afirma soberania e objetivos da revolução nacional, cria o Conselho do Comando Revolucionário e estabelece controle estatal de setores econômicos.",
    "catalogSourceTitles": [
      "Constitutional Proclamation of 11 December 1969 — Refworld / International Constitutional Law"
    ],
    "documentedAxisCountAtSnapshot": 7,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-national-liberation-socialism",
    "name": "Socialismo de libertação nacional",
    "reasonCode": "overlap-review",
    "compareWith": "ideology-left-ujamaa",
    "decisionRationale": "Nyerere/Arusha liga socialismo de libertação e Ujamaa; seleciona-se o nome específico Ujamaa, sem afirmar equivalência total.",
    "catalogRationale": "A declaração de Nyerere combina independência econômica, propriedade pública de setores centrais, autossuficiência e participação comunitária.",
    "catalogSourceTitles": [
      "The Arusha Declaration — Nyerere Archive"
    ],
    "documentedAxisCountAtSnapshot": 0,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-left-nkrumaism",
    "name": "Nkrumaism",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Recorte regional, escola, movimento ou estratégia dentro de tradições já representadas; seleção limitada preserva este contraste como alternativa, sem afirmar sinonímia.",
    "catalogRationale": "Nkrumah articula emancipação africana, socialismo, unidade continental e uma síntese filosófica para sociedades pós-coloniais.",
    "catalogSourceTitles": [
      "Consciencism — Kwame Nkrumah"
    ],
    "documentedAxisCountAtSnapshot": 5,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-left-sankarism",
    "name": "Sankarismo",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Recorte regional, escola, movimento ou estratégia dentro de tradições já representadas; seleção limitada preserva este contraste como alternativa, sem afirmar sinonímia.",
    "catalogRationale": "O programa revolucionário prioriza soberania, mobilização popular, necessidades básicas, reforma agrária e combate à exploração.",
    "catalogSourceTitles": [
      "Discours d’orientation politique — Thomas Sankara"
    ],
    "documentedAxisCountAtSnapshot": 4,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-left-marhaenism",
    "name": "Marhaenismo",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Recorte regional, escola, movimento ou estratégia dentro de tradições já representadas; seleção limitada preserva este contraste como alternativa, sem afirmar sinonímia.",
    "catalogRationale": "Sukarno combina independência indonésia, mobilização de trabalhadores e camponeses e uma leitura social da libertação nacional.",
    "catalogSourceTitles": [
      "Nasionalisme, Islamisme dan Marxisme — Sukarno"
    ],
    "documentedAxisCountAtSnapshot": 3,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-left-aprismo",
    "name": "Aprismo",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Recorte regional, escola, movimento ou estratégia dentro de tradições já representadas; seleção limitada preserva este contraste como alternativa, sem afirmar sinonímia.",
    "catalogRationale": "O APRA propõe cooperação indo-americana e uma estratégia anti-imperialista própria, distinta da adoção integral de modelos europeus.",
    "catalogSourceTitles": [
      "El antiimperialismo y el APRA — Víctor Raúl Haya de la Torre"
    ],
    "documentedAxisCountAtSnapshot": 4,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-left-magonismo",
    "name": "Magonismo",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Recorte regional, escola, movimento ou estratégia dentro de tradições já representadas; seleção limitada preserva este contraste como alternativa, sem afirmar sinonímia.",
    "catalogRationale": "O programa combina direitos políticos, jornada de trabalho, ensino laico e redistribuição agrária em oposição à ditadura porfirista.",
    "catalogSourceTitles": [
      "Programa del Partido Liberal Mexicano — Archivo General de la Nación, México"
    ],
    "documentedAxisCountAtSnapshot": 5,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-left-guevarism",
    "name": "Guevarismo",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Recorte regional, escola, movimento ou estratégia dentro de tradições já representadas; seleção limitada preserva este contraste como alternativa, sem afirmar sinonímia.",
    "catalogRationale": "Guevara defende solidariedade internacionalista e luta contra intervenções imperiais por meio de movimentos revolucionários.",
    "catalogSourceTitles": [
      "Message to the Tricontinental — Ernesto Che Guevara"
    ],
    "documentedAxisCountAtSnapshot": 4,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-left-sandinismo-1969",
    "name": "Sandinismo revolucionário",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Recorte regional, escola, movimento ou estratégia dentro de tradições já representadas; seleção limitada preserva este contraste como alternativa, sem afirmar sinonímia.",
    "catalogRationale": "O programa fundador combina libertação nacional, derrubada da ditadura Somoza e transformação das relações de exploração.",
    "catalogSourceTitles": [
      "Programa Histórico del FSLN — Centro de Documentación de los Movimientos Armados (CeDeMA)"
    ],
    "documentedAxisCountAtSnapshot": 4,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-left-chavismo",
    "name": "Bolivarianismo do século XXI",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Recorte regional, escola, movimento ou estratégia dentro de tradições já representadas; seleção limitada preserva este contraste como alternativa, sem afirmar sinonímia.",
    "catalogRationale": "O programa bolivariano liga soberania nacional, participação popular e transição declarada ao socialismo venezuelano.",
    "catalogSourceTitles": [
      "Plan de la Patria 2013–2019 — Consejo Nacional Electoral de Venezuela"
    ],
    "documentedAxisCountAtSnapshot": 6,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-left-allendismo",
    "name": "Via chilena ao socialismo",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Recorte regional, escola, movimento ou estratégia dentro de tradições já representadas; seleção limitada preserva este contraste como alternativa, sem afirmar sinonímia.",
    "catalogRationale": "A experiência de Allende buscou transição ao socialismo por eleições, liberdades políticas, nacionalização de recursos e expansão dos serviços públicos.",
    "catalogSourceTitles": [
      "Salvador Allende: Speech to the United Nations, 4 December 1972"
    ],
    "documentedAxisCountAtSnapshot": 5,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-left-african-socialism-senghor",
    "name": "Socialismo africano de Senghor",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Recorte regional, escola, movimento ou estratégia dentro de tradições já representadas; seleção limitada preserva este contraste como alternativa, sem afirmar sinonímia.",
    "catalogRationale": "Senghor formulou um socialismo africano humanista e comunitário associado à construção nacional senegalesa.",
    "catalogSourceTitles": [
      "On African Socialism — Léopold Sédar Senghor"
    ],
    "documentedAxisCountAtSnapshot": 3,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-left-african-socialism-toure",
    "name": "Socialismo guineense de Sékou Touré",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Recorte regional, escola, movimento ou estratégia dentro de tradições já representadas; seleção limitada preserva este contraste como alternativa, sem afirmar sinonímia.",
    "catalogRationale": "A doutrina articulou independência guineense, mobilização popular e propriedade social sob o regime do PDG.",
    "catalogSourceTitles": [
      "Programme du Parti démocratique de Guinée — Présidence de la République de Guinée"
    ],
    "documentedAxisCountAtSnapshot": 3,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-left-frelimismo",
    "name": "Socialismo da FRELIMO",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Recorte regional, escola, movimento ou estratégia dentro de tradições já representadas; seleção limitada preserva este contraste como alternativa, sem afirmar sinonímia.",
    "catalogRationale": "A FRELIMO passou de movimento de libertação a partido de vanguarda, defendendo independência e transformação social em Moçambique.",
    "catalogSourceTitles": [
      "FRELIMO: A Luta Continua — documentos do movimento, 1962–1977"
    ],
    "documentedAxisCountAtSnapshot": 3,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-left-mplaism",
    "name": "Socialismo da MPLA, 1977",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Recorte regional, escola, movimento ou estratégia dentro de tradições já representadas; seleção limitada preserva este contraste como alternativa, sem afirmar sinonímia.",
    "catalogRationale": "O congresso estabeleceu formalmente a orientação marxista-leninista do partido-Estado angolano após a independência.",
    "catalogSourceTitles": [
      "Programa e Estatutos do MPLA, I Congresso, 1977 — arquivo documental"
    ],
    "documentedAxisCountAtSnapshot": 4,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-left-burmese-way",
    "name": "Via birmanesa ao socialismo",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Recorte regional, escola, movimento ou estratégia dentro de tradições já representadas; seleção limitada preserva este contraste como alternativa, sem afirmar sinonímia.",
    "catalogRationale": "A doutrina do BSPP combinou nacionalização e planejamento com uma interpretação estatal específica de socialismo birmanês.",
    "catalogSourceTitles": [
      "Constitution for the Burma Socialist Programme Party, 1962 — ConstitutionNet"
    ],
    "documentedAxisCountAtSnapshot": 4,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-left-juchae",
    "name": "Juche",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Recorte regional, escola, movimento ou estratégia dentro de tradições já representadas; seleção limitada preserva este contraste como alternativa, sem afirmar sinonímia.",
    "catalogRationale": "A doutrina oficial norte-coreana enfatiza independência política, autossuficiência econômica e capacidade nacional de defesa.",
    "catalogSourceTitles": [
      "On the Juche Idea — Kim Il-sung"
    ],
    "documentedAxisCountAtSnapshot": 5,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-left-ho-chi-minh-thought",
    "name": "Pensamento Ho Chi Minh",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Recorte regional, escola, movimento ou estratégia dentro de tradições já representadas; seleção limitada preserva este contraste como alternativa, sem afirmar sinonímia.",
    "catalogRationale": "O pensamento político de Ho Chi Minh articula independência vietnamita, unidade de frente e transformação social em contexto de guerra anticolonial.",
    "catalogSourceTitles": [
      "Declaration of Independence of the Democratic Republic of Vietnam — Ho Chi Minh"
    ],
    "documentedAxisCountAtSnapshot": 3,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-left-castroism",
    "name": "Castroísmo revolucionário",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Recorte regional, escola, movimento ou estratégia dentro de tradições já representadas; seleção limitada preserva este contraste como alternativa, sem afirmar sinonímia.",
    "catalogRationale": "A declaração cubana afirma soberania, reforma social e oposição à intervenção externa após a revolução de 1959.",
    "catalogSourceTitles": [
      "First Declaration of Havana — Fidel Castro"
    ],
    "documentedAxisCountAtSnapshot": 4,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-left-hoxhaism",
    "name": "Hoxhaismo",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Recorte regional, escola, movimento ou estratégia dentro de tradições já representadas; seleção limitada preserva este contraste como alternativa, sem afirmar sinonímia.",
    "catalogRationale": "Hoxha defende uma linha marxista-leninista anti-revisionista, com partido de vanguarda, propriedade social e oposição às superpotências.",
    "catalogSourceTitles": [
      "Imperialism and the Revolution — Enver Hoxha"
    ],
    "documentedAxisCountAtSnapshot": 4,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-left-austromarxism",
    "name": "Austromarxismo",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Recorte regional, escola, movimento ou estratégia dentro de tradições já representadas; seleção limitada preserva este contraste como alternativa, sem afirmar sinonímia.",
    "catalogRationale": "O programa austríaco articula transição socialista, democracia política e organização partidária em uma estratégia gradualista e revolucionária condicionada.",
    "catalogSourceTitles": [
      "Linz Programme of the Social Democratic Workers’ Party — Haus der Geschichte Österreich"
    ],
    "documentedAxisCountAtSnapshot": 3,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-left-menshevism",
    "name": "Menchevismo",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Recorte regional, escola, movimento ou estratégia dentro de tradições já representadas; seleção limitada preserva este contraste como alternativa, sem afirmar sinonímia.",
    "catalogRationale": "A facção menchevique emergiu de divergências organizacionais e estratégicas dentro da social-democracia russa.",
    "catalogSourceTitles": [
      "Programme of the Russian Social-Democratic Labour Party, 1903"
    ],
    "documentedAxisCountAtSnapshot": 0,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-left-narodnism",
    "name": "Narodnismo revolucionário",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Recorte regional, escola, movimento ou estratégia dentro de tradições já representadas; seleção limitada preserva este contraste como alternativa, sem afirmar sinonímia.",
    "catalogRationale": "A organização revolucionária russa defendia derrubar a autocracia e convocar uma assembleia representativa, com orientação populista agrária.",
    "catalogSourceTitles": [
      "Programa e documentos da Narodnaya Volya, 1879–1881"
    ],
    "documentedAxisCountAtSnapshot": 1,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-left-bordigism",
    "name": "Bordiguismo",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Recorte regional, escola, movimento ou estratégia dentro de tradições já representadas; seleção limitada preserva este contraste como alternativa, sem afirmar sinonímia.",
    "catalogRationale": "A tradição bordiguista enfatiza programa comunista, internacionalismo e centralização partidária, em oposição ao parlamentarismo.",
    "catalogSourceTitles": [
      "Theses on the Tactics of the Communist Party — Amadeo Bordiga"
    ],
    "documentedAxisCountAtSnapshot": 4,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-left-third-camp-socialism",
    "name": "Socialismo do terceiro campo",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Recorte regional, escola, movimento ou estratégia dentro de tradições já representadas; seleção limitada preserva este contraste como alternativa, sem afirmar sinonímia.",
    "catalogRationale": "A corrente de Max Shachtman rejeita tanto o capitalismo ocidental quanto o regime soviético, defendendo socialismo democrático independente.",
    "catalogSourceTitles": [
      "The Fight for Socialism — Max Shachtman"
    ],
    "documentedAxisCountAtSnapshot": 4,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-left-revolutionary-syndicalism",
    "name": "Sindicalismo revolucionário",
    "reasonCode": "overlap-review",
    "compareWith": "ideology-anarcho-syndicalism",
    "decisionRationale": "Anarcossindicalismo e sindicalismo revolucionário têm sobreposição organizacional; nesta seleção prefere-se a doutrina explicitamente antiestatal.",
    "catalogRationale": "A CGT francesa defendeu independência sindical frente a partidos e ação sindical para emancipação dos trabalhadores.",
    "catalogSourceTitles": [
      "The Charter of Amiens — CGT, 1906"
    ],
    "documentedAxisCountAtSnapshot": 1,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-left-industrial-workers-of-world",
    "name": "Industrial Workers of the World",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Recorte regional, escola, movimento ou estratégia dentro de tradições já representadas; seleção limitada preserva este contraste como alternativa, sem afirmar sinonímia.",
    "catalogRationale": "O IWW defende organização industrial de trabalhadores em oposição a divisões profissionais e controle patronal.",
    "catalogSourceTitles": [
      "Preamble to the Constitution of the Industrial Workers of the World"
    ],
    "documentedAxisCountAtSnapshot": 2,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-left-de-leonism",
    "name": "De Leonismo",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Recorte regional, escola, movimento ou estratégia dentro de tradições já representadas; seleção limitada preserva este contraste como alternativa, sem afirmar sinonímia.",
    "catalogRationale": "De Leon propõe organização política socialista e sindicatos industriais para transferir a produção a trabalhadores organizados.",
    "catalogSourceTitles": [
      "Platform of the Socialist Labor Party of America"
    ],
    "documentedAxisCountAtSnapshot": 3,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-left-cooperative-movement",
    "name": "Movimento cooperativo internacional",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Recorte regional, escola, movimento ou estratégia dentro de tradições já representadas; seleção limitada preserva este contraste como alternativa, sem afirmar sinonímia.",
    "catalogRationale": "A Aliança Cooperativa Internacional define cooperativas como empresas autônomas, voluntárias e controladas democraticamente por seus membros.",
    "catalogSourceTitles": [
      "Cooperative identity, values & principles — International Cooperative Alliance"
    ],
    "documentedAxisCountAtSnapshot": 2,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-left-platformism",
    "name": "Plataformismo anarquista",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Recorte regional, escola, movimento ou estratégia dentro de tradições já representadas; seleção limitada preserva este contraste como alternativa, sem afirmar sinonímia.",
    "catalogRationale": "Dielo Truda propôs organização anarquista coordenada, unidade teórica e responsabilidade coletiva.",
    "catalogSourceTitles": [
      "Organizational Platform of the General Union of Anarchists — Dielo Truda"
    ],
    "documentedAxisCountAtSnapshot": 5,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-left-especifismo",
    "name": "Especifismo anarquista",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Recorte regional, escola, movimento ou estratégia dentro de tradições já representadas; seleção limitada preserva este contraste como alternativa, sem afirmar sinonímia.",
    "catalogRationale": "A tradição organiza uma militância anarquista específica, com inserção social e coordenação estratégica em movimentos populares.",
    "catalogSourceTitles": [
      "Social Anarchism and Organisation — Federação Anarquista do Rio de Janeiro"
    ],
    "documentedAxisCountAtSnapshot": 5,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-left-insurrectionary-anarchism",
    "name": "Anarquismo insurrecional",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Recorte regional, escola, movimento ou estratégia dentro de tradições já representadas; seleção limitada preserva este contraste como alternativa, sem afirmar sinonímia.",
    "catalogRationale": "Bonanno defende ação direta e organização informal contra estruturas de autoridade e exploração.",
    "catalogSourceTitles": [
      "Insurrectionalist Anarchism — Alfredo M. Bonanno"
    ],
    "documentedAxisCountAtSnapshot": 3,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-left-korean-anarchism",
    "name": "Anarquismo coreano",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Recorte regional, escola, movimento ou estratégia dentro de tradições já representadas; seleção limitada preserva este contraste como alternativa, sem afirmar sinonímia.",
    "catalogRationale": "O movimento associou libertação contra o colonialismo japonês a organização comunal e educação popular na Manchúria.",
    "catalogSourceTitles": [
      "Korean Anarchist Movement — documents and programme"
    ],
    "documentedAxisCountAtSnapshot": 0,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-left-japanese-anarchism",
    "name": "Anarquismo japonês de Kōtoku",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Recorte regional, escola, movimento ou estratégia dentro de tradições já representadas; seleção limitada preserva este contraste como alternativa, sem afirmar sinonímia.",
    "catalogRationale": "A organização Heiminsha defendia oposição à guerra, ao militarismo e às hierarquias sociais no Japão imperial.",
    "catalogSourceTitles": [
      "The Commoners’ Newspaper Manifesto — Heiminsha"
    ],
    "documentedAxisCountAtSnapshot": 2,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-left-socialisme-ou-barbarie",
    "name": "Socialisme ou Barbarie",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Recorte regional, escola, movimento ou estratégia dentro de tradições já representadas; seleção limitada preserva este contraste como alternativa, sem afirmar sinonímia.",
    "catalogRationale": "O grupo francês criticou burocracias stalinistas e capitalistas e defendeu a autonomia dos trabalhadores.",
    "catalogSourceTitles": [
      "Socialisme ou Barbarie: organisation et contenu de notre journal"
    ],
    "documentedAxisCountAtSnapshot": 3,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-left-operaismo",
    "name": "Operaismo italiano",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Recorte regional, escola, movimento ou estratégia dentro de tradições já representadas; seleção limitada preserva este contraste como alternativa, sem afirmar sinonímia.",
    "catalogRationale": "O operaismo parte da autonomia e das lutas dos trabalhadores na fábrica para analisar a dinâmica do capital.",
    "catalogSourceTitles": [
      "Lenin in England — Mario Tronti"
    ],
    "documentedAxisCountAtSnapshot": 1,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-left-autonomist-marxism",
    "name": "Marxismo autonomista",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Recorte regional, escola, movimento ou estratégia dentro de tradições já representadas; seleção limitada preserva este contraste como alternativa, sem afirmar sinonímia.",
    "catalogRationale": "A tradição enfatiza autonomia de classe, organização de base e recusa de subordinação dos trabalhadores a partidos ou burocracias.",
    "catalogSourceTitles": [
      "The Strategy of Refusal — Mario Tronti"
    ],
    "documentedAxisCountAtSnapshot": 3,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-left-situationist-international",
    "name": "Internacional Situacionista",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Recorte regional, escola, movimento ou estratégia dentro de tradições já representadas; seleção limitada preserva este contraste como alternativa, sem afirmar sinonímia.",
    "catalogRationale": "Debord critica a mercantilização da vida cotidiana e a mediação da experiência por instituições e imagens de consumo.",
    "catalogSourceTitles": [
      "The Society of the Spectacle — Guy Debord"
    ],
    "documentedAxisCountAtSnapshot": 1,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-left-communization-theory",
    "name": "Teoria da comunização",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Recorte regional, escola, movimento ou estratégia dentro de tradições já representadas; seleção limitada preserva este contraste como alternativa, sem afirmar sinonímia.",
    "catalogRationale": "A corrente descreve a revolução comunista como transformação imediata das relações sociais, em vez de uma etapa estatal de transição.",
    "catalogSourceTitles": [
      "The Present Moment — Théorie Communiste"
    ],
    "documentedAxisCountAtSnapshot": 0,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-left-mao-spontex",
    "name": "Mao-spontex",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Recorte regional, escola, movimento ou estratégia dentro de tradições já representadas; seleção limitada preserva este contraste como alternativa, sem afirmar sinonímia.",
    "catalogRationale": "A vertente francesa combinou referências maoistas com espontaneidade, crítica à burocracia e mobilização direta de estudantes e trabalhadores.",
    "catalogSourceTitles": [
      "The Revolution Within the Revolution? — Daniel and Gabriel Cohn-Bendit"
    ],
    "documentedAxisCountAtSnapshot": 0,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-left-participatory-economics",
    "name": "Economia participativa (Parecon)",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Recorte regional, escola, movimento ou estratégia dentro de tradições já representadas; seleção limitada preserva este contraste como alternativa, sem afirmar sinonímia.",
    "catalogRationale": "Albert e Hahnel propõem planejamento participativo descentralizado, conselhos de trabalhadores e consumidores e remuneração por esforço.",
    "catalogSourceTitles": [
      "The Political Economy of Participatory Economics — Michael Albert e Robin Hahnel"
    ],
    "documentedAxisCountAtSnapshot": 4,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-left-solidarity-economy",
    "name": "Economia solidária",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Recorte regional, escola, movimento ou estratégia dentro de tradições já representadas; seleção limitada preserva este contraste como alternativa, sem afirmar sinonímia.",
    "catalogRationale": "A carta brasileira articula cooperação, autogestão, solidariedade e centralidade do trabalho em empreendimentos econômicos associados.",
    "catalogSourceTitles": [
      "Carta de Princípios da Economia Solidária — Fórum Brasileiro de Economia Solidária"
    ],
    "documentedAxisCountAtSnapshot": 4,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-left-lohia-socialism",
    "name": "Socialismo de Rammanohar Lohia",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Recorte regional, escola, movimento ou estratégia dentro de tradições já representadas; seleção limitada preserva este contraste como alternativa, sem afirmar sinonímia.",
    "catalogRationale": "Lohia propôs descentralização política, socialismo democrático e ação contra castas, desigualdades de gênero e concentração econômica na Índia.",
    "catalogSourceTitles": [
      "Selected Works of Rammanohar Lohia — Indian Parliament Digital Library"
    ],
    "documentedAxisCountAtSnapshot": 5,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-left-irish-socialist-republicanism",
    "name": "Republicanismo socialista irlandês",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Recorte regional, escola, movimento ou estratégia dentro de tradições já representadas; seleção limitada preserva este contraste como alternativa, sem afirmar sinonímia.",
    "catalogRationale": "A plataforma de Connolly combina independência irlandesa, organização política trabalhista e propriedade comum como objetivos articulados.",
    "catalogSourceTitles": [
      "Irish Socialist Republican Party — James Connolly"
    ],
    "documentedAxisCountAtSnapshot": 0,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-left-tudehism",
    "name": "Tudehismo (Partido Tudeh do Irã)",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Recorte regional, escola, movimento ou estratégia dentro de tradições já representadas; seleção limitada preserva este contraste como alternativa, sem afirmar sinonímia.",
    "catalogRationale": "A plataforma fundadora do partido iraniano reúne liberdades democráticas, independência nacional e reformas sociais em um contexto de ocupação e monarquia.",
    "catalogSourceTitles": [
      "Brief History of the Tudeh Party of Iran — Tudeh Party of Iran"
    ],
    "documentedAxisCountAtSnapshot": 0,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-left-black-panther-platform",
    "name": "Programa do Black Panther Party",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Recorte regional, escola, movimento ou estratégia dentro de tradições já representadas; seleção limitada preserva este contraste como alternativa, sem afirmar sinonímia.",
    "catalogRationale": "A plataforma do partido articula autodefesa e autodeterminação negra com emprego, moradia, educação e controle comunitário.",
    "catalogSourceTitles": [
      "What We Want, What We Believe: The Black Panther Party Platform and Program"
    ],
    "documentedAxisCountAtSnapshot": 0,
    "reviewStatus": "provisional"
  },
  {
    "id": "civic-constitutional-democracy",
    "name": "Democracia constitucional",
    "reasonCode": "ontology-review",
    "compareWith": null,
    "decisionRationale": "Perfil institucional, princípio ou política setorial: validar se constitui ideologia autônoma antes de aumentar sua representação no subconjunto.",
    "catalogRationale": "Direitos fundamentais, sufrágio, governo representativo, igualdade cívica e liberdade religiosa limitam juridicamente o poder.",
    "catalogSourceTitles": [
      "The Constitution of India — Legislative Department"
    ],
    "documentedAxisCountAtSnapshot": 6,
    "reviewStatus": "provisional"
  },
  {
    "id": "civic-parliamentarism",
    "name": "Parlamentarismo constitucional",
    "reasonCode": "ontology-review",
    "compareWith": null,
    "decisionRationale": "Perfil institucional, princípio ou política setorial: validar se constitui ideologia autônoma antes de aumentar sua representação no subconjunto.",
    "catalogRationale": "Governo depende da confiança parlamentar, eleições competitivas e direitos fundamentais; voto construtivo limita crises executivas.",
    "catalogSourceTitles": [
      "Basic Law for the Federal Republic of Germany — Bundestag"
    ],
    "documentedAxisCountAtSnapshot": 3,
    "reviewStatus": "provisional"
  },
  {
    "id": "civic-european-supranationalism",
    "name": "Supranacionalismo europeu",
    "reasonCode": "ontology-review",
    "compareWith": null,
    "decisionRationale": "Perfil institucional, princípio ou política setorial: validar se constitui ideologia autônoma antes de aumentar sua representação no subconjunto.",
    "catalogRationale": "Estados conferem competências a instituições comuns com Parlamento eleito, mercado interno e direitos europeus.",
    "catalogSourceTitles": [
      "Treaty on European Union — EUR-Lex"
    ],
    "documentedAxisCountAtSnapshot": 4,
    "reviewStatus": "provisional"
  },
  {
    "id": "civic-cosmopolitan-democracy",
    "name": "Democracia cosmopolita",
    "reasonCode": "ontology-review",
    "compareWith": null,
    "decisionRationale": "Perfil institucional, princípio ou política setorial: validar se constitui ideologia autônoma antes de aumentar sua representação no subconjunto.",
    "catalogRationale": "Estende representação, prestação de contas e direitos democráticos a instituições internacionais para tratar problemas transfronteiriços.",
    "catalogSourceTitles": [
      "Cosmopolitical Democracy — Daniele Archibugi"
    ],
    "documentedAxisCountAtSnapshot": 5,
    "reviewStatus": "provisional"
  },
  {
    "id": "civic-multilateralism",
    "name": "Multilateralismo institucional",
    "reasonCode": "ontology-review",
    "compareWith": null,
    "decisionRationale": "Perfil institucional, princípio ou política setorial: validar se constitui ideologia autônoma antes de aumentar sua representação no subconjunto.",
    "catalogRationale": "A Carta estabelece procedimentos comuns para paz, solução de controvérsias, cooperação econômica e direitos humanos.",
    "catalogSourceTitles": [
      "Charter of the United Nations — United Nations"
    ],
    "documentedAxisCountAtSnapshot": 3,
    "reviewStatus": "provisional"
  },
  {
    "id": "civic-human-rights-constitutionalism",
    "name": "Constitucionalismo internacional de direitos",
    "reasonCode": "ontology-review",
    "compareWith": null,
    "decisionRationale": "Perfil institucional, princípio ou política setorial: validar se constitui ideologia autônoma antes de aumentar sua representação no subconjunto.",
    "catalogRationale": "A Declaração formula direitos iguais, devido processo, participação política, proteção social e liberdade de consciência.",
    "catalogSourceTitles": [
      "Universal Declaration of Human Rights — United Nations"
    ],
    "documentedAxisCountAtSnapshot": 4,
    "reviewStatus": "provisional"
  },
  {
    "id": "civic-open-government",
    "name": "Governo aberto",
    "reasonCode": "ontology-review",
    "compareWith": null,
    "decisionRationale": "Perfil institucional, princípio ou política setorial: validar se constitui ideologia autônoma antes de aumentar sua representação no subconjunto.",
    "catalogRationale": "Promove transparência, participação, prestação de contas e tecnologia para ampliar acesso a decisões e serviços públicos.",
    "catalogSourceTitles": [
      "Open Government Declaration — Open Government Partnership"
    ],
    "documentedAxisCountAtSnapshot": 4,
    "reviewStatus": "provisional"
  },
  {
    "id": "civic-deliberative-assemblies",
    "name": "Assembleias cidadãs deliberativas",
    "reasonCode": "overlap-review",
    "compareWith": "civic-deliberative-democracy",
    "decisionRationale": "Ambos usam o mesmo relatório OECD; assembleias cidadãs são mecanismo associado à democracia deliberativa, não nova ideologia demonstrada.",
    "catalogRationale": "Cidadãos selecionados por sorteio recebem informação, deliberam e formulam recomendações públicas.",
    "catalogSourceTitles": [
      "Innovative Citizen Participation and New Democratic Institutions — OECD"
    ],
    "documentedAxisCountAtSnapshot": 2,
    "reviewStatus": "provisional"
  },
  {
    "id": "civic-liquid-democracy",
    "name": "Democracia líquida",
    "reasonCode": "ontology-review",
    "compareWith": null,
    "decisionRationale": "Perfil institucional, princípio ou política setorial: validar se constitui ideologia autônoma antes de aumentar sua representação no subconjunto.",
    "catalogRationale": "Combina voto direto em plataforma digital com delegação revogável de votos por tema.",
    "catalogSourceTitles": [
      "Piratenpartei Deutschland: Grundsatzprogramm — party archive"
    ],
    "documentedAxisCountAtSnapshot": 3,
    "reviewStatus": "provisional"
  },
  {
    "id": "civic-digital-democracy",
    "name": "Democracia digital",
    "reasonCode": "ontology-review",
    "compareWith": null,
    "decisionRationale": "Perfil institucional, princípio ou política setorial: validar se constitui ideologia autônoma antes de aumentar sua representação no subconjunto.",
    "catalogRationale": "A Carta associa acesso, privacidade, expressão, participação política, diversidade e governança transparente da rede.",
    "catalogSourceTitles": [
      "Charter of Human Rights and Principles for the Internet — IRPC"
    ],
    "documentedAxisCountAtSnapshot": 5,
    "reviewStatus": "provisional"
  },
  {
    "id": "civic-digital-state",
    "name": "Estado digital",
    "reasonCode": "ontology-review",
    "compareWith": null,
    "decisionRationale": "Perfil institucional, princípio ou política setorial: validar se constitui ideologia autônoma antes de aumentar sua representação no subconjunto.",
    "catalogRationale": "A estratégia integra identidade digital, serviços interoperáveis, segurança de dados e inovação como infraestrutura pública.",
    "catalogSourceTitles": [
      "Digital Agenda 2030 — Ministry of Economic Affairs and Communications, Estonia"
    ],
    "documentedAxisCountAtSnapshot": 2,
    "reviewStatus": "provisional"
  },
  {
    "id": "civic-techno-progressivism",
    "name": "Tecnoprogressismo",
    "reasonCode": "overlap-review",
    "compareWith": "civic-transhumanism",
    "decisionRationale": "Tecnoprogressismo enfatiza distribuição e democracia; não é sinônimo de transumanismo. Seleção do amplo mantém alternativa pendente.",
    "catalogRationale": "Associa inovação tecnológica a direitos, justiça social, supervisão democrática e acesso amplo aos benefícios.",
    "catalogSourceTitles": [
      "The Technoprogressive Agenda After Fascism — IEET"
    ],
    "documentedAxisCountAtSnapshot": 5,
    "reviewStatus": "provisional"
  },
  {
    "id": "civic-human-centered-ai",
    "name": "Governança humanista da inteligência artificial",
    "reasonCode": "ontology-review",
    "compareWith": null,
    "decisionRationale": "Perfil institucional, princípio ou política setorial: validar se constitui ideologia autônoma antes de aumentar sua representação no subconjunto.",
    "catalogRationale": "Vincula sistemas de IA a direitos humanos, supervisão, transparência, inclusão, sustentabilidade e cooperação internacional.",
    "catalogSourceTitles": [
      "Recommendation on the Ethics of Artificial Intelligence — UNESCO"
    ],
    "documentedAxisCountAtSnapshot": 5,
    "reviewStatus": "provisional"
  },
  {
    "id": "civic-open-science",
    "name": "Ciência aberta",
    "reasonCode": "ontology-review",
    "compareWith": null,
    "decisionRationale": "Perfil institucional, princípio ou política setorial: validar se constitui ideologia autônoma antes de aumentar sua representação no subconjunto.",
    "catalogRationale": "Promove acesso aberto, diversidade de conhecimentos, colaboração internacional e participação social na ciência.",
    "catalogSourceTitles": [
      "Recommendation on Open Science — UNESCO"
    ],
    "documentedAxisCountAtSnapshot": 5,
    "reviewStatus": "provisional"
  },
  {
    "id": "civic-precaution",
    "name": "Princípio da precaução",
    "reasonCode": "ontology-review",
    "compareWith": null,
    "decisionRationale": "Perfil institucional, princípio ou política setorial: validar se constitui ideologia autônoma antes de aumentar sua representação no subconjunto.",
    "catalogRationale": "Risco grave ou irreversível pode exigir prevenção proporcional mesmo sem certeza científica completa.",
    "catalogSourceTitles": [
      "Rio Declaration, Principle 15 — United Nations"
    ],
    "documentedAxisCountAtSnapshot": 4,
    "reviewStatus": "provisional"
  },
  {
    "id": "civic-climate-justice",
    "name": "Justiça climática",
    "reasonCode": "overlap-review",
    "compareWith": "civic-environmental-justice",
    "decisionRationale": "Justiça climática tem escopo ambiental específico; mantém-se justiça ambiental nesta resolução, sem chamar a outra de sinônimo.",
    "catalogRationale": "Vincula clima a direitos, responsabilidades históricas, justiça entre povos, participação e proteção de comunidades vulneráveis.",
    "catalogSourceTitles": [
      "Bali Principles of Climate Justice — primary declaration"
    ],
    "documentedAxisCountAtSnapshot": 6,
    "reviewStatus": "provisional"
  },
  {
    "id": "civic-sustainable-development",
    "name": "Desenvolvimento sustentável",
    "reasonCode": "ontology-review",
    "compareWith": null,
    "decisionRationale": "Perfil institucional, princípio ou política setorial: validar se constitui ideologia autônoma antes de aumentar sua representação no subconjunto.",
    "catalogRationale": "A Agenda combina redução da pobreza, instituições inclusivas, direitos, trabalho, proteção ambiental, ciência e cooperação.",
    "catalogSourceTitles": [
      "Transforming our world: the 2030 Agenda — UN"
    ],
    "documentedAxisCountAtSnapshot": 7,
    "reviewStatus": "provisional"
  },
  {
    "id": "civic-human-development",
    "name": "Desenvolvimento humano",
    "reasonCode": "overlap-review",
    "compareWith": "civic-capability-approach",
    "decisionRationale": "Desenvolvimento humano usa capacidades; seleciona-se o fundamento normativo das capacidades e mantém-se o indicador/programa alternativo.",
    "catalogRationale": "Avalia desenvolvimento pela ampliação de capacidades e escolhas humanas, incluindo saúde, educação, renda e participação.",
    "catalogSourceTitles": [
      "Human Development Report 1990 — UNDP"
    ],
    "documentedAxisCountAtSnapshot": 4,
    "reviewStatus": "provisional"
  },
  {
    "id": "civic-basic-needs-development",
    "name": "Abordagem de necessidades básicas",
    "reasonCode": "ontology-review",
    "compareWith": null,
    "decisionRationale": "Perfil institucional, princípio ou política setorial: validar se constitui ideologia autônoma antes de aumentar sua representação no subconjunto.",
    "catalogRationale": "Prioriza alimentação, moradia, saúde, educação, emprego e participação dos grupos afetados.",
    "catalogSourceTitles": [
      "Employment, Growth and Basic Needs — ILO"
    ],
    "documentedAxisCountAtSnapshot": 2,
    "reviewStatus": "provisional"
  },
  {
    "id": "civic-inclusive-growth",
    "name": "Crescimento inclusivo",
    "reasonCode": "ontology-review",
    "compareWith": null,
    "decisionRationale": "Perfil institucional, princípio ou política setorial: validar se constitui ideologia autônoma antes de aumentar sua representação no subconjunto.",
    "catalogRationale": "A estrutura acompanha como crescimento, oportunidades e resultados se distribuem entre pessoas e grupos.",
    "catalogSourceTitles": [
      "All on Board: Making Inclusive Growth Happen — OECD"
    ],
    "documentedAxisCountAtSnapshot": 1,
    "reviewStatus": "provisional"
  },
  {
    "id": "civic-green-economy",
    "name": "Economia verde",
    "reasonCode": "ontology-review",
    "compareWith": null,
    "decisionRationale": "Perfil institucional, princípio ou política setorial: validar se constitui ideologia autônoma antes de aumentar sua representação no subconjunto.",
    "catalogRationale": "Busca crescimento e emprego com redução de riscos ambientais por investimentos e políticas públicas.",
    "catalogSourceTitles": [
      "Towards a Green Economy — UNEP"
    ],
    "documentedAxisCountAtSnapshot": 3,
    "reviewStatus": "provisional"
  },
  {
    "id": "civic-circular-economy",
    "name": "Economia circular",
    "reasonCode": "ontology-review",
    "compareWith": null,
    "decisionRationale": "Perfil institucional, princípio ou política setorial: validar se constitui ideologia autônoma antes de aumentar sua representação no subconjunto.",
    "catalogRationale": "O plano busca prevenir resíduos e manter materiais em uso por desenho, reparo, reutilização e reciclagem.",
    "catalogSourceTitles": [
      "A new Circular Economy Action Plan — European Commission"
    ],
    "documentedAxisCountAtSnapshot": 2,
    "reviewStatus": "provisional"
  },
  {
    "id": "civic-just-transition",
    "name": "Transição justa",
    "reasonCode": "ontology-review",
    "compareWith": null,
    "decisionRationale": "Perfil institucional, princípio ou política setorial: validar se constitui ideologia autônoma antes de aumentar sua representação no subconjunto.",
    "catalogRationale": "A transição ambiental deve distribuir custos e benefícios por diálogo social, emprego digno, proteção e participação.",
    "catalogSourceTitles": [
      "Guidelines for a just transition — ILO"
    ],
    "documentedAxisCountAtSnapshot": 2,
    "reviewStatus": "provisional"
  },
  {
    "id": "civic-green-new-deal",
    "name": "Green New Deal",
    "reasonCode": "ontology-review",
    "compareWith": null,
    "decisionRationale": "Perfil institucional, princípio ou política setorial: validar se constitui ideologia autônoma antes de aumentar sua representação no subconjunto.",
    "catalogRationale": "A resolução propõe mobilização federal para descarbonização, emprego, infraestrutura e justiça econômica.",
    "catalogSourceTitles": [
      "Recognizing the duty of the Federal Government to create a Green New Deal — U.S. Congress"
    ],
    "documentedAxisCountAtSnapshot": 3,
    "reviewStatus": "provisional"
  },
  {
    "id": "civic-mission-innovation",
    "name": "Inovação orientada por missões",
    "reasonCode": "ontology-review",
    "compareWith": null,
    "decisionRationale": "Perfil institucional, princípio ou política setorial: validar se constitui ideologia autônoma antes de aumentar sua representação no subconjunto.",
    "catalogRationale": "Coordena pesquisa, investimento público e privado e capacidades industriais em torno de metas sociais e ambientais.",
    "catalogSourceTitles": [
      "Horizon Europe Strategic Plan — European Commission"
    ],
    "documentedAxisCountAtSnapshot": 2,
    "reviewStatus": "provisional"
  },
  {
    "id": "civic-national-innovation-system",
    "name": "Sistema nacional de inovação",
    "reasonCode": "ontology-review",
    "compareWith": null,
    "decisionRationale": "Perfil institucional, princípio ou política setorial: validar se constitui ideologia autônoma antes de aumentar sua representação no subconjunto.",
    "catalogRationale": "Inovação resulta de relações entre empresas, universidades, governo, pesquisa, finanças e regras nacionais.",
    "catalogSourceTitles": [
      "National Innovation Systems — OECD"
    ],
    "documentedAxisCountAtSnapshot": 1,
    "reviewStatus": "provisional"
  },
  {
    "id": "civic-post-washington",
    "name": "Consenso pós-Washington",
    "reasonCode": "ontology-review",
    "compareWith": null,
    "decisionRationale": "Perfil institucional, princípio ou política setorial: validar se constitui ideologia autônoma antes de aumentar sua representação no subconjunto.",
    "catalogRationale": "Amplia a pauta para instituições, regulação, desigualdade e desenvolvimento além da estabilização e liberalização.",
    "catalogSourceTitles": [
      "More Instruments and Broader Goals — World Bank"
    ],
    "documentedAxisCountAtSnapshot": 2,
    "reviewStatus": "provisional"
  },
  {
    "id": "civic-commons-governance",
    "name": "Governança dos bens comuns",
    "reasonCode": "ontology-review",
    "compareWith": null,
    "decisionRationale": "Perfil institucional, princípio ou política setorial: validar se constitui ideologia autônoma antes de aumentar sua representação no subconjunto.",
    "catalogRationale": "Ostrom documenta como usuários podem gerir recursos comuns por regras coletivas sem depender só de privatização ou controle central.",
    "catalogSourceTitles": [
      "Governing the Commons — Elinor Ostrom, Cambridge University Press"
    ],
    "documentedAxisCountAtSnapshot": 4,
    "reviewStatus": "provisional"
  },
  {
    "id": "civic-climate-commons",
    "name": "Governança de bens comuns climáticos",
    "reasonCode": "ontology-review",
    "compareWith": null,
    "decisionRationale": "Perfil institucional, princípio ou política setorial: validar se constitui ideologia autônoma antes de aumentar sua representação no subconjunto.",
    "catalogRationale": "O Acordo coordena compromissos nacionais, transparência, financiamento e cooperação tecnológica sobre clima global.",
    "catalogSourceTitles": [
      "Paris Agreement — UNFCCC"
    ],
    "documentedAxisCountAtSnapshot": 4,
    "reviewStatus": "provisional"
  },
  {
    "id": "civic-human-security",
    "name": "Segurança humana",
    "reasonCode": "ontology-review",
    "compareWith": null,
    "decisionRationale": "Perfil institucional, princípio ou política setorial: validar se constitui ideologia autônoma antes de aumentar sua representação no subconjunto.",
    "catalogRationale": "Desloca a segurança de fronteiras para proteção de pessoas contra ameaças econômicas, alimentares, sanitárias, ambientais e políticas.",
    "catalogSourceTitles": [
      "Human Development Report 1994 — UNDP"
    ],
    "documentedAxisCountAtSnapshot": 2,
    "reviewStatus": "provisional"
  },
  {
    "id": "civic-nonalignment",
    "name": "Não alinhamento",
    "reasonCode": "ontology-review",
    "compareWith": null,
    "decisionRationale": "Perfil institucional, princípio ou política setorial: validar se constitui ideologia autônoma antes de aumentar sua representação no subconjunto.",
    "catalogRationale": "O movimento buscou autonomia diplomática diante dos blocos da Guerra Fria e defendeu soberania e coexistência pacífica.",
    "catalogSourceTitles": [
      "Belgrade Declaration — Non-Aligned Movement"
    ],
    "documentedAxisCountAtSnapshot": 4,
    "reviewStatus": "provisional"
  },
  {
    "id": "civic-right-to-city",
    "name": "Direito à cidade",
    "reasonCode": "ontology-review",
    "compareWith": null,
    "decisionRationale": "Perfil institucional, princípio ou política setorial: validar se constitui ideologia autônoma antes de aumentar sua representação no subconjunto.",
    "catalogRationale": "A Carta associa gestão urbana democrática, função social da cidade, moradia, serviços e participação dos habitantes.",
    "catalogSourceTitles": [
      "Carta Mundial pelo Direito à Cidade — World Social Forum"
    ],
    "documentedAxisCountAtSnapshot": 6,
    "reviewStatus": "provisional"
  },
  {
    "id": "civic-public-value",
    "name": "Governança pelo valor público",
    "reasonCode": "ontology-review",
    "compareWith": null,
    "decisionRationale": "Perfil institucional, princípio ou política setorial: validar se constitui ideologia autônoma antes de aumentar sua representação no subconjunto.",
    "catalogRationale": "Moore propõe avaliar resultados sociais, legitimidade democrática e capacidade operacional em conjunto.",
    "catalogSourceTitles": [
      "Creating Public Value — Mark H. Moore, Harvard University Press"
    ],
    "documentedAxisCountAtSnapshot": 2,
    "reviewStatus": "provisional"
  },
  {
    "id": "civic-open-data",
    "name": "Dados governamentais abertos",
    "reasonCode": "ontology-review",
    "compareWith": null,
    "decisionRationale": "Perfil institucional, princípio ou política setorial: validar se constitui ideologia autônoma antes de aumentar sua representação no subconjunto.",
    "catalogRationale": "A Carta promove dados governamentais abertos, reutilizáveis e divulgados com proteção de privacidade e prestação de contas.",
    "catalogSourceTitles": [
      "International Open Data Charter — Principles"
    ],
    "documentedAxisCountAtSnapshot": 4,
    "reviewStatus": "provisional"
  },
  {
    "id": "civic-digital-rights",
    "name": "Direitos digitais europeus",
    "reasonCode": "ontology-review",
    "compareWith": null,
    "decisionRationale": "Perfil institucional, princípio ou política setorial: validar se constitui ideologia autônoma antes de aumentar sua representação no subconjunto.",
    "catalogRationale": "A declaração liga transformação digital a direitos, participação democrática, inclusão, escolha individual, segurança e sustentabilidade.",
    "catalogSourceTitles": [
      "European Declaration on Digital Rights and Principles — European Commission"
    ],
    "documentedAxisCountAtSnapshot": 5,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-right-paleoconservatism",
    "name": "Paleoconservadorismo",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Variante nacional, dinástica, eleitoral ou filosófica de tradições já representadas; prioridade de amplitude no subconjunto, sem desqualificar a corrente.",
    "catalogRationale": "A corrente dá ênfase a continuidade histórica e formas locais de vida política, em reação ao universalismo e à centralização.",
    "catalogSourceTitles": [
      "Beyond Conservatism — Samuel Francis"
    ],
    "documentedAxisCountAtSnapshot": 1,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-right-fusionism",
    "name": "Fusionismo conservador-libertário",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Variante nacional, dinástica, eleitoral ou filosófica de tradições já representadas; prioridade de amplitude no subconjunto, sem desqualificar a corrente.",
    "catalogRationale": "Meyer tenta compatibilizar liberdade individual e uma concepção de virtude e tradição, mantendo limites constitucionais ao Estado.",
    "catalogSourceTitles": [
      "In Defense of Freedom — Frank S. Meyer"
    ],
    "documentedAxisCountAtSnapshot": 4,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-right-new-right",
    "name": "Nova Direita econômica",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Variante nacional, dinástica, eleitoral ou filosófica de tradições já representadas; prioridade de amplitude no subconjunto, sem desqualificar a corrente.",
    "catalogRationale": "O texto defende incentivos de mercado, controle da inflação e contenção da propriedade estatal como resposta à estagnação britânica.",
    "catalogSourceTitles": [
      "Stepping Stones — Keith Joseph"
    ],
    "documentedAxisCountAtSnapshot": 3,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-right-red-toryism",
    "name": "Conservadorismo vermelho",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Variante nacional, dinástica, eleitoral ou filosófica de tradições já representadas; prioridade de amplitude no subconjunto, sem desqualificar a corrente.",
    "catalogRationale": "A tradição canadense combina conservadorismo comunitário com responsabilidade social e instituições intermediárias.",
    "catalogSourceTitles": [
      "Rise of the Red Tories — Phillip Blond"
    ],
    "documentedAxisCountAtSnapshot": 1,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-right-compassionate-conservatism",
    "name": "Conservadorismo compassivo",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Variante nacional, dinástica, eleitoral ou filosófica de tradições já representadas; prioridade de amplitude no subconjunto, sem desqualificar a corrente.",
    "catalogRationale": "A corrente promove prestação social por organizações comunitárias e religiosas dentro de uma política conservadora eleitoral.",
    "catalogSourceTitles": [
      "Remarks on Compassionate Conservatism — George W. Bush, 1999"
    ],
    "documentedAxisCountAtSnapshot": 2,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-right-conservative-environmentalism",
    "name": "Conservadorismo ambiental",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Variante nacional, dinástica, eleitoral ou filosófica de tradições já representadas; prioridade de amplitude no subconjunto, sem desqualificar a corrente.",
    "catalogRationale": "A rede defende proteção ambiental em termos de conservação, inovação e responsabilidade intergeracional.",
    "catalogSourceTitles": [
      "Conservative Environment Network: About and Principles"
    ],
    "documentedAxisCountAtSnapshot": 1,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-right-free-market-environmentalism",
    "name": "Ambientalismo de mercado",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Variante nacional, dinástica, eleitoral ou filosófica de tradições já representadas; prioridade de amplitude no subconjunto, sem desqualificar a corrente.",
    "catalogRationale": "A proposta prioriza direitos de propriedade e mecanismos de mercado para enfrentar problemas ambientais.",
    "catalogSourceTitles": [
      "The Market Approach to Environmental Protection — Terry Anderson e Donald Leal"
    ],
    "documentedAxisCountAtSnapshot": 2,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-right-conservative-localism",
    "name": "Localismo conservador",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Variante nacional, dinástica, eleitoral ou filosófica de tradições já representadas; prioridade de amplitude no subconjunto, sem desqualificar a corrente.",
    "catalogRationale": "O manifesto propõe transferir poder do centro a comunidades e autoridades locais.",
    "catalogSourceTitles": [
      "Localism: A Manifesto for England — Conservative Party"
    ],
    "documentedAxisCountAtSnapshot": 1,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-right-national-liberalism",
    "name": "Liberalismo nacional",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Variante nacional, dinástica, eleitoral ou filosófica de tradições já representadas; prioridade de amplitude no subconjunto, sem desqualificar a corrente.",
    "catalogRationale": "A corrente histórica articulou unificação nacional com instituições parlamentares e economia liberal.",
    "catalogSourceTitles": [
      "National Liberal Association programme and statutes — German History in Documents and Images"
    ],
    "documentedAxisCountAtSnapshot": 3,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-right-constitutional-liberalism",
    "name": "Liberalismo constitucional",
    "reasonCode": "overlap-review",
    "compareWith": "ideology-classical-liberalism",
    "decisionRationale": "Ambos citam Locke/Two Treatises e consentimento; prefere-se o rótulo amplo clássico. A ausência de aliases não prova distinção.",
    "catalogRationale": "A autoridade política deriva do consentimento e é limitada por direitos e leis.",
    "catalogSourceTitles": [
      "Two Treatises of Government — John Locke"
    ],
    "documentedAxisCountAtSnapshot": 3,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-right-austrian-liberalism",
    "name": "Liberalismo da escola austríaca",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Variante nacional, dinástica, eleitoral ou filosófica de tradições já representadas; prioridade de amplitude no subconjunto, sem desqualificar a corrente.",
    "catalogRationale": "Mises defende propriedade privada, trocas de mercado e coordenação descentralizada.",
    "catalogSourceTitles": [
      "Liberalism: The Classical Tradition — Ludwig von Mises"
    ],
    "documentedAxisCountAtSnapshot": 3,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-right-market-liberalism",
    "name": "Liberalismo de mercado",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Variante nacional, dinástica, eleitoral ou filosófica de tradições já representadas; prioridade de amplitude no subconjunto, sem desqualificar a corrente.",
    "catalogRationale": "A declaração enfatiza propriedade, concorrência e dispersão do poder econômico e político.",
    "catalogSourceTitles": [
      "Statement of Aims — Mont Pelerin Society"
    ],
    "documentedAxisCountAtSnapshot": 3,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-right-voluntaryism",
    "name": "Voluntarismo político",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Variante nacional, dinástica, eleitoral ou filosófica de tradições já representadas; prioridade de amplitude no subconjunto, sem desqualificar a corrente.",
    "catalogRationale": "Herbert argumenta que a coerção estatal deve ceder a associações e escolhas voluntárias.",
    "catalogSourceTitles": [
      "The Right and Wrong of Compulsion by the State — Auberon Herbert"
    ],
    "documentedAxisCountAtSnapshot": 2,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-right-paleolibertarianism",
    "name": "Paleolibertarianismo",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Variante nacional, dinástica, eleitoral ou filosófica de tradições já representadas; prioridade de amplitude no subconjunto, sem desqualificar a corrente.",
    "catalogRationale": "A corrente combina liberalismo econômico radical com uma aliança estratégica com costumes e instituições tradicionais.",
    "catalogSourceTitles": [
      "Right-Wing Populism: A Strategy for the Paleo Movement — Murray Rothbard"
    ],
    "documentedAxisCountAtSnapshot": 3,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-right-libertarian-conservatism",
    "name": "Conservadorismo libertário",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Variante nacional, dinástica, eleitoral ou filosófica de tradições já representadas; prioridade de amplitude no subconjunto, sem desqualificar a corrente.",
    "catalogRationale": "Goldwater combina governo limitado, livre iniciativa e continuidade de instituições constitucionais.",
    "catalogSourceTitles": [
      "The Conscience of a Conservative — Barry Goldwater"
    ],
    "documentedAxisCountAtSnapshot": 5,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-right-austrian-libertarianism",
    "name": "Libertarianismo austríaco",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Variante nacional, dinástica, eleitoral ou filosófica de tradições já representadas; prioridade de amplitude no subconjunto, sem desqualificar a corrente.",
    "catalogRationale": "Rothbard combina economia austríaca, direitos de propriedade e oposição ao Estado.",
    "catalogSourceTitles": [
      "For a New Liberty — Murray Rothbard"
    ],
    "documentedAxisCountAtSnapshot": 3,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-right-chicago-monetarism",
    "name": "Monetarismo de Chicago",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Variante nacional, dinástica, eleitoral ou filosófica de tradições já representadas; prioridade de amplitude no subconjunto, sem desqualificar a corrente.",
    "catalogRationale": "A tradição enfatiza regras monetárias e limitações ao controle discricionário da moeda.",
    "catalogSourceTitles": [
      "A Monetary History of the United States — Milton Friedman e Anna Schwartz"
    ],
    "documentedAxisCountAtSnapshot": 1,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-right-supply-side-economics",
    "name": "Economia do lado da oferta",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Variante nacional, dinástica, eleitoral ou filosófica de tradições já representadas; prioridade de amplitude no subconjunto, sem desqualificar a corrente.",
    "catalogRationale": "A corrente sustenta que impostos marginais menores podem ampliar investimento e produção.",
    "catalogSourceTitles": [
      "Economic Growth and Tax Reduction — Jack Kemp"
    ],
    "documentedAxisCountAtSnapshot": 2,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-right-monarchism",
    "name": "Monarquismo hereditário",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Variante nacional, dinástica, eleitoral ou filosófica de tradições já representadas; prioridade de amplitude no subconjunto, sem desqualificar a corrente.",
    "catalogRationale": "Filmer defende autoridade política hereditária como fundamento do governo monárquico.",
    "catalogSourceTitles": [
      "Patriarcha — Robert Filmer"
    ],
    "documentedAxisCountAtSnapshot": 1,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-right-divine-right-monarchy",
    "name": "Monarquia de direito divino",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Variante nacional, dinástica, eleitoral ou filosófica de tradições já representadas; prioridade de amplitude no subconjunto, sem desqualificar a corrente.",
    "catalogRationale": "Bossuet fundamenta a autoridade monárquica em uma leitura teológica da ordem política.",
    "catalogSourceTitles": [
      "Politique tirée des propres paroles de l’Écriture sainte — Bossuet"
    ],
    "documentedAxisCountAtSnapshot": 2,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-right-legitimism",
    "name": "Legitimismo monárquico",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Variante nacional, dinástica, eleitoral ou filosófica de tradições já representadas; prioridade de amplitude no subconjunto, sem desqualificar a corrente.",
    "catalogRationale": "O legitimismo francês defende a sucessão dinástica Bourbon e uma monarquia tradicional.",
    "catalogSourceTitles": [
      "Lettre du comte de Chambord aux royalistes de France, 1871 — Gallica"
    ],
    "documentedAxisCountAtSnapshot": 1,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-right-orleanism",
    "name": "Orleanismo",
    "reasonCode": "overlap-review",
    "compareWith": "ideology-right-constitutional-monarchism",
    "decisionRationale": "Orleanismo é caso dinástico/constitucional francês; monarquismo constitucional representa o contraste geral.",
    "catalogRationale": "A tradição apoia uma monarquia constitucional associada à Casa de Orléans e a garantias representativas.",
    "catalogSourceTitles": [
      "Charte constitutionnelle du 14 août 1830 — Conseil constitutionnel"
    ],
    "documentedAxisCountAtSnapshot": 1,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-right-carlism",
    "name": "Carlismo",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Variante nacional, dinástica, eleitoral ou filosófica de tradições já representadas; prioridade de amplitude no subconjunto, sem desqualificar a corrente.",
    "catalogRationale": "O movimento defendeu a sucessão de Carlos María Isidro e instituições tradicionais espanholas.",
    "catalogSourceTitles": [
      "Manifiesto de Abrantes — Biblioteca Virtual Miguel de Cervantes"
    ],
    "documentedAxisCountAtSnapshot": 2,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-right-integral-nationalism",
    "name": "Nacionalismo integral francês",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Variante nacional, dinástica, eleitoral ou filosófica de tradições já representadas; prioridade de amplitude no subconjunto, sem desqualificar a corrente.",
    "catalogRationale": "Maurras defende nacionalismo monárquico, autoridade central e primazia da continuidade nacional.",
    "catalogSourceTitles": [
      "Enquête sur la monarchie — Charles Maurras, Wikisource"
    ],
    "documentedAxisCountAtSnapshot": 4,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-right-imperial-conservatism",
    "name": "Conservadorismo imperial britânico",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Variante nacional, dinástica, eleitoral ou filosófica de tradições já representadas; prioridade de amplitude no subconjunto, sem desqualificar a corrente.",
    "catalogRationale": "A preferência imperial buscou integrar comercialmente o Império Britânico e proteger produção interna.",
    "catalogSourceTitles": [
      "Ottawa Agreements, 1932 — UK Parliament Hansard"
    ],
    "documentedAxisCountAtSnapshot": 2,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-right-falangism",
    "name": "Falangismo",
    "reasonCode": "overlap-review",
    "compareWith": "ideology-right-francoism",
    "decisionRationale": "Franquismo e Falangismo não são sinônimos; o regime integrou correntes. Escolha do recorte amplo é editorial, com revisão de fronteira.",
    "catalogRationale": "A Falange articulou nacionalismo autoritário, mobilização política, unidade estatal e organização corporativa do trabalho.",
    "catalogSourceTitles": [
      "Puntos Iniciales de Falange Española — Biblioteca Virtual Miguel de Cervantes"
    ],
    "documentedAxisCountAtSnapshot": 8,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-right-national-syndicalism",
    "name": "Nacional-sindicalismo",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Variante nacional, dinástica, eleitoral ou filosófica de tradições já representadas; prioridade de amplitude no subconjunto, sem desqualificar a corrente.",
    "catalogRationale": "A corrente propõe sindicatos verticais integrados ao Estado e uma economia organizada por corporações nacionais.",
    "catalogSourceTitles": [
      "Fuero del Trabajo — BOE"
    ],
    "documentedAxisCountAtSnapshot": 6,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-right-italian-fascist-corporatism",
    "name": "Corporativismo fascista italiano",
    "reasonCode": "overlap-review",
    "compareWith": "ideology-fascism",
    "decisionRationale": "Corporativismo fascista é arranjo econômico de uma tradição fascista; prefere-se o quadro histórico amplo.",
    "catalogRationale": "A Carta organiza relações de trabalho em corporações subordinadas ao Estado fascista.",
    "catalogSourceTitles": [
      "Carta del Lavoro, 1927 — testo storico"
    ],
    "documentedAxisCountAtSnapshot": 6,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-right-portuguese-corporatism",
    "name": "Corporativismo do Estado Novo português",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Variante nacional, dinástica, eleitoral ou filosófica de tradições já representadas; prioridade de amplitude no subconjunto, sem desqualificar a corrente.",
    "catalogRationale": "A ordem salazarista combinou poder executivo autoritário com representação corporativa e organizações profissionais controladas pelo Estado.",
    "catalogSourceTitles": [
      "Constituição Política da República Portuguesa, 1933 — Diário da República"
    ],
    "documentedAxisCountAtSnapshot": 6,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-right-austrofascist-corporatism",
    "name": "Corporativismo austrofascista",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Variante nacional, dinástica, eleitoral ou filosófica de tradições já representadas; prioridade de amplitude no subconjunto, sem desqualificar a corrente.",
    "catalogRationale": "A Constituição dissolveu a democracia parlamentar e instituiu representação corporativa sob um Estado autoritário católico.",
    "catalogSourceTitles": [
      "Constitution of the Federal State of Austria, 1934 — Austrian National Library"
    ],
    "documentedAxisCountAtSnapshot": 6,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-right-bismarckian-state-conservatism",
    "name": "Conservadorismo estatal bismarckiano",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Variante nacional, dinástica, eleitoral ou filosófica de tradições já representadas; prioridade de amplitude no subconjunto, sem desqualificar a corrente.",
    "catalogRationale": "O Estado conservador implantou seguro social como resposta institucional à industrialização e à mobilização socialista.",
    "catalogSourceTitles": [
      "Imperial Message on Social Insurance, 1881 — German History in Documents and Images"
    ],
    "documentedAxisCountAtSnapshot": 2,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-right-traditionalist-conservatism",
    "name": "Conservadorismo tradicionalista",
    "reasonCode": "overlap-review",
    "compareWith": "ideology-conservatism",
    "decisionRationale": "Burke e Kirk representam tradições conservadoras próximas; prefere-se o rótulo amplo, não declaração de identidade.",
    "catalogRationale": "Kirk apresenta continuidade, prudência, tradição moral e limites ao poder como elementos recorrentes da disposição conservadora.",
    "catalogSourceTitles": [
      "Ten Conservative Principles — Russell Kirk"
    ],
    "documentedAxisCountAtSnapshot": 1,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-right-thatcherism",
    "name": "Thatcherismo",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Variante nacional, dinástica, eleitoral ou filosófica de tradições já representadas; prioridade de amplitude no subconjunto, sem desqualificar a corrente.",
    "catalogRationale": "O programa de 1979 defende iniciativa privada, redução de impostos e contenção do Estado na economia.",
    "catalogSourceTitles": [
      "Conservative General Election Manifesto 1979 — Margaret Thatcher Foundation"
    ],
    "documentedAxisCountAtSnapshot": 2,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-right-reagan-conservatism",
    "name": "Conservadorismo reaganista",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Variante nacional, dinástica, eleitoral ou filosófica de tradições já representadas; prioridade de amplitude no subconjunto, sem desqualificar a corrente.",
    "catalogRationale": "A plataforma associa redução de impostos, expansão da defesa e oposição ao expansionismo soviético a um programa conservador eleitoral.",
    "catalogSourceTitles": [
      "Republican Party Platform, 1980 — Ronald Reagan Presidential Library"
    ],
    "documentedAxisCountAtSnapshot": 6,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-right-japanese-postwar-conservatism",
    "name": "Conservadorismo japonês do pós-guerra",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Variante nacional, dinástica, eleitoral ou filosófica de tradições já representadas; prioridade de amplitude no subconjunto, sem desqualificar a corrente.",
    "catalogRationale": "A declaração fundadora afirma compromisso com democracia representativa, vontade popular e rejeição de violência política e ditadura.",
    "catalogSourceTitles": [
      "立党宣言・綱領 / Founding Declaration and Platform — Liberal Democratic Party of Japan"
    ],
    "documentedAxisCountAtSnapshot": 1,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-right-communitarian-conservatism-singapore",
    "name": "Comunitarismo conservador de Singapura",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Variante nacional, dinástica, eleitoral ou filosófica de tradições já representadas; prioridade de amplitude no subconjunto, sem desqualificar a corrente.",
    "catalogRationale": "Lee defende responsabilidades coletivas, coesão social e continuidade de valores no contexto da construção nacional de Singapura.",
    "catalogSourceTitles": [
      "Speech by Prime Minister Lee Kuan Yew, 25 September 1984 — National Archives of Singapore"
    ],
    "documentedAxisCountAtSnapshot": 1,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-right-polish-national-democracy",
    "name": "Democracia Nacional polonesa",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Variante nacional, dinástica, eleitoral ou filosófica de tradições já representadas; prioridade de amplitude no subconjunto, sem desqualificar a corrente.",
    "catalogRationale": "Dmowski articula nacionalismo polonês, solidariedade nacional e crítica ao liberalismo individualista do período.",
    "catalogSourceTitles": [
      "Myśli nowoczesnego Polaka — Roman Dmowski, 1903"
    ],
    "documentedAxisCountAtSnapshot": 3,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-right-integralismo-lusitano",
    "name": "Integralismo Lusitano",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Variante nacional, dinástica, eleitoral ou filosófica de tradições já representadas; prioridade de amplitude no subconjunto, sem desqualificar a corrente.",
    "catalogRationale": "A corrente portuguesa defendia monarquia orgânica, representação profissional e continuidade católica tradicional.",
    "catalogSourceTitles": [
      "O Que Nós Queremos — Integralismo Lusitano, Nação Portuguesa, 1914"
    ],
    "documentedAxisCountAtSnapshot": 3,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-right-slavophilism",
    "name": "Eslavofilismo russo",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Variante nacional, dinástica, eleitoral ou filosófica de tradições já representadas; prioridade de amplitude no subconjunto, sem desqualificar a corrente.",
    "catalogRationale": "O eslavofilismo enfatiza tradições religiosas e comunitárias russas em oposição à imitação integral de instituições ocidentais.",
    "catalogSourceTitles": [
      "On the Character of European Enlightenment and Its Relation to Russia — Ivan Kireevsky"
    ],
    "documentedAxisCountAtSnapshot": 2,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-right-eurasianism",
    "name": "Eurasianismo clássico",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Variante nacional, dinástica, eleitoral ou filosófica de tradições já representadas; prioridade de amplitude no subconjunto, sem desqualificar a corrente.",
    "catalogRationale": "Os primeiros eurasianistas propuseram uma identidade política e civilizacional própria para os povos da Rússia e da Eurásia.",
    "catalogSourceTitles": [
      "Исход к Востоку / Exodus to the East — Eurasian Publishing House, 1921"
    ],
    "documentedAxisCountAtSnapshot": 1,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-right-technocratic-neoliberalism",
    "name": "Liberalismo tecnocrático de mercado",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Variante nacional, dinástica, eleitoral ou filosófica de tradições já representadas; prioridade de amplitude no subconjunto, sem desqualificar a corrente.",
    "catalogRationale": "A ordem econômica é tratada como coordenação descentralizada, regida por normas gerais em vez de direção estatal discricionária.",
    "catalogSourceTitles": [
      "The Constitution of Liberty — Friedrich A. Hayek"
    ],
    "documentedAxisCountAtSnapshot": 3,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-right-conservative-revolution",
    "name": "Revolução Conservadora alemã",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Variante nacional, dinástica, eleitoral ou filosófica de tradições já representadas; prioridade de amplitude no subconjunto, sem desqualificar a corrente.",
    "catalogRationale": "O recorte de Schmitt critica o liberalismo parlamentar e atribui centralidade à decisão soberana e à ordem política.",
    "catalogSourceTitles": [
      "Politische Theologie — Carl Schmitt, 1922"
    ],
    "documentedAxisCountAtSnapshot": 3,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-right-ulster-unionism",
    "name": "Unionismo do Ulster",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Variante nacional, dinástica, eleitoral ou filosófica de tradições já representadas; prioridade de amplitude no subconjunto, sem desqualificar a corrente.",
    "catalogRationale": "O compromisso rejeita a criação de um parlamento autônomo irlandês e afirma lealdade à união política do Reino Unido.",
    "catalogSourceTitles": [
      "Ulster’s Solemn League and Covenant, 1912 — Public Record Office of Northern Ireland"
    ],
    "documentedAxisCountAtSnapshot": 1,
    "reviewStatus": "provisional"
  },
  {
    "id": "civic-capability-approach",
    "name": "Abordagem das capacidades",
    "reasonCode": "bounded-ontology-deferral",
    "compareWith": "ideology-left-black-anarchism",
    "decisionRationale": "Estrutura avaliativa não identifica aqui uma doutrina política distinta; substituição de escopo, não crítica à teoria.",
    "catalogRationale": "Avalia justiça e desenvolvimento pelas liberdades substantivas e oportunidades reais, em vez de renda isolada.",
    "catalogSourceTitles": [
      "Development as Freedom — Amartya Sen, Oxford University Press"
    ],
    "documentedAxisCountAtSnapshot": 2,
    "reviewStatus": "preserved-not-selected"
  },
  {
    "id": "civic-keynesian-policy",
    "name": "Keynesianismo de estabilização",
    "reasonCode": "bounded-ontology-deferral",
    "compareWith": "ideology-left-guild-socialism",
    "decisionRationale": "Perfil restrito à estabilização; a filosofia política mais ampla de Keynes não foi representada por este rótulo.",
    "catalogRationale": "Explica desemprego por insuficiência de demanda e admite ação fiscal para sustentar atividade e emprego.",
    "catalogSourceTitles": [
      "The General Theory of Employment, Interest and Money — John Maynard Keynes"
    ],
    "documentedAxisCountAtSnapshot": 1,
    "reviewStatus": "preserved-not-selected"
  },
  {
    "id": "civic-cybernetic-governance",
    "name": "Governança cibernética",
    "reasonCode": "bounded-ontology-deferral",
    "compareWith": "ideology-right-agorism",
    "decisionRationale": "Projeto de gestão Cybersyn não equivale por si a tradição normativa independente.",
    "catalogRationale": "O projeto de Stafford Beer conectava dados quase em tempo real à coordenação econômica distribuída por níveis de gestão.",
    "catalogSourceTitles": [
      "Brain of the Firm — Stafford Beer Archive"
    ],
    "documentedAxisCountAtSnapshot": 3,
    "reviewStatus": "preserved-not-selected"
  },
  {
    "id": "ideology-right-francoism",
    "name": "Franquismo",
    "reasonCode": "bounded-ontology-deferral",
    "compareWith": "ideology-left-anarcha-feminism",
    "decisionRationale": "Contraste doutrinal independente frente ao fascismo não foi demonstrado; lei de regime não basta sem exame de referentes.",
    "catalogRationale": "O franquismo estabeleceu partido único, centralização, catolicismo político e repressão da oposição.",
    "catalogSourceTitles": [
      "Ley de Principios del Movimiento Nacional, 1958 — BOE"
    ],
    "documentedAxisCountAtSnapshot": 6,
    "reviewStatus": "preserved-not-selected"
  },
  {
    "id": "ideology-technocracy",
    "name": "Tecnocracia",
    "reasonCode": "conditional-model-not-affirmative-doctrine",
    "compareWith": "ideology-program-technocracy-inc-2004",
    "decisionRationale": "Veblen VI166/173 expressamente suspende advocacia/legitimidade e trata desenho condicional; fonte recuperada, modelo preservado, não pontuado como posição pessoal. Exemplar normativamente afirmado Inc. possui identidade própria.",
    "catalogRationale": "Proposta industrial condicional de Veblen 1921; fonte originalmente misatribuída corrigida em overlay separado, objeto original preservado.",
    "catalogSourceTitles": [
      "The Engineers and the Price System — Project Gutenberg"
    ],
    "documentedAxisCountAtSnapshot": 0,
    "reviewStatus": "preserved-not-selected"
  }
] as const;

export const ideologyOntologySubstitutions = [
  {
    "removedId": "civic-capability-approach",
    "selectedId": "ideology-left-black-anarchism",
    "reason": "Estrutura avaliativa não identifica aqui uma doutrina política distinta; substituição de escopo, não crítica à teoria.",
    "status": "bounded-provisional-substitution",
    "catalogRecordsDeleted": false
  },
  {
    "removedId": "civic-keynesian-policy",
    "selectedId": "ideology-left-guild-socialism",
    "reason": "Perfil restrito à estabilização; a filosofia política mais ampla de Keynes não foi representada por este rótulo.",
    "status": "bounded-provisional-substitution",
    "catalogRecordsDeleted": false
  },
  {
    "removedId": "civic-cybernetic-governance",
    "selectedId": "ideology-right-agorism",
    "reason": "Projeto de gestão Cybersyn não equivale por si a tradição normativa independente.",
    "status": "bounded-provisional-substitution",
    "catalogRecordsDeleted": false
  },
  {
    "removedId": "ideology-right-francoism",
    "selectedId": "ideology-left-anarcha-feminism",
    "reason": "Contraste doutrinal independente frente ao fascismo não foi demonstrado; lei de regime não basta sem exame de referentes.",
    "status": "bounded-provisional-substitution",
    "catalogRecordsDeleted": false
  },
  {
    "removedId": "ideology-technocracy",
    "selectedId": "ideology-program-technocracy-inc-2004",
    "reason": "Modelo hipotético sem endosso não qualifica doutrina afirmada; programa institucional explícito substitui o único slot tecnocrático, mantendo o antigo registro.",
    "status": "bounded-provisional-substitution-new-explicit-program",
    "catalogRecordsDeleted": false
  }
] as const;

export const ideologyOntologyReviewGroups = [
  {
    "id": "agorism-lp-strategy",
    "selectedIds": [
      "ideology-right-agorism",
      "libertarianism"
    ],
    "status": "bounded-two-sided-primary-contrast",
    "scope": "Party/electoral strategy versus countereconomics; market-anarchist umbrella relations unresolved.",
    "sourceIds": [
      "konkin-1980"
    ],
    "additionalPrimaryUrl": "https://lp.org/platform-page/",
    "additionalLocator": "§3.6 Representative Government; independently read in legacy02 source audit",
    "reviewedOn": "2026-10-07"
  },
  {
    "id": "ecological-transition",
    "selectedIds": [
      "civic-degrowth",
      "civic-ecomodernism"
    ],
    "status": "bounded-two-sided-primary-contrast",
    "scope": "Paris 2008 reduction/steady state versus 2015 absolute decoupling with growth; no scientific efficacy verdict, other ecological neighbors unresolved.",
    "sourceIds": [
      "degrowth-paris-2008-reprint",
      "ecomodernism-2015"
    ],
    "reviewedOn": "2026-10-07"
  },
  {
    "id": "gender-race-socialist-anarchist",
    "selectedIds": [
      "ideology-left-anarcha-feminism",
      "ideology-left-black-anarchism"
    ],
    "comparisonId": "ideology-feminist-socialism",
    "status": "primary-referents-read-overlap-unresolved",
    "scope": "Different central domination mechanisms and organizational referents located; Combahee shares anticapitalist/interlocking-oppression commitments, so authority difference remains unproved.",
    "sourceIds": [
      "ervin-1993",
      "goldman-1906",
      "mujeres-primary-collection",
      "combahee-1977-yale-reprint"
    ],
    "reviewedOn": "2026-10-07"
  },
  {
    "id": "ecological-neighbors",
    "selectedIds": [
      "green-politics",
      "ideology-eco-socialism",
      "civic-bioregionalism",
      "civic-environmental-justice",
      "civic-ecomodernism"
    ],
    "status": "four-bounded-two-sided-primary-contrasts",
    "scope": "Nuclear policy; mandatory collective production versus plural modernization; place-adapted reinhabitation versus decoupling; radioactive-material production. No science verdict, remaining ecological nesting unresolved.",
    "sourceIds": [
      "greens-2023-ontology",
      "belem-2008-2009",
      "berg-bioregions-1983",
      "ej1991-primary",
      "ecomodernism-2015"
    ],
    "reviewedOn": "2026-10-07"
  },
  {
    "id": "liberal-authority-and-land",
    "selectedIds": [
      "ideology-classical-liberalism",
      "libertarianism",
      "ideology-right-minarchism",
      "ideology-right-anarcho-capitalism",
      "ideology-right-objectivism",
      "ideology-georgism"
    ],
    "status": "four-bounded-two-sided-primary-contrasts",
    "scope": "Minimal/common government versus competing private law; mandatory public land rent versus abolition all taxation. Rand/Nozick endpoint overlap and nearest subtradition foundations unresolved.",
    "sourceIds": [
      "locke",
      "rand-government-1963",
      "nozick-preface-1974-transcription",
      "friedman-machinery-second",
      "george-rent-1879",
      "lp-ontology-finance"
    ],
    "reviewedOn": "2026-10-07"
  },
  {
    "id": "socialist-transition-and-productive-authority",
    "selectedIds": [
      "ideology-trotskyism",
      "ideology-maoism",
      "ideology-luxemburgism",
      "ideology-fabianism",
      "ideology-council-communism"
    ],
    "status": "three-bounded-two-sided-primary-contrasts",
    "scope": "Distinct-stage class coalition versus permanent transition; conquest versus constitutional gradualism; council administration versus political-state transfers. Nearest umbrella/subtradition relations remain incomplete.",
    "sourceIds": [
      "trotsky-permanent-postulates",
      "mao-new-democracy-1940",
      "luxemburg-conquest-1900",
      "fabian-transition-1889",
      "gic-production-1930"
    ],
    "reviewedOn": "2026-10-07"
  },
  {
    "id": "anarchist-exchange-and-defensive-force",
    "selectedIds": [
      "ideology-anarcho-communism",
      "ideology-mutualism",
      "ideology-left-individualist-anarchism",
      "ideology-left-anarcho-collectivism",
      "ideology-pacifist-anarchism",
      "ideology-anarcho-syndicalism"
    ],
    "status": "four-bounded-two-sided-primary-contrasts",
    "scope": "Equivalent exchange/competitive capital versus needs distribution; nonresistance versus defensive armed force. Mutualism/Tucker and syndicalist/communist nesting unresolved; IWA 2023 and Tucker 1897 editions explicitly distinguished.",
    "sourceIds": [
      "kropotkin-bread-ontology",
      "proudhon-property-conclusion",
      "tucker-competitive-capital",
      "bakunin-catechism-ontology",
      "tolstoy-nonresistance-ontology",
      "iwa-statutes-2023-ontology"
    ],
    "reviewedOn": "2026-10-07"
  },
  {
    "id": "pluralist-social-programs-and-digital-jurisdiction",
    "selectedIds": [
      "social-liberalism",
      "christian-democracy",
      "social-democracy",
      "democratic-socialism",
      "ideology-right-technolibertarianism"
    ],
    "status": "four-bounded-two-sided-primary-contrasts",
    "scope": "Public social purpose/planned or public production versus LP limited purpose; cyberspace self-jurisdiction versus binding digital public law. SI1951/1989 identity overlap remains unresolved.",
    "sourceIds": [
      "li-andorra-ontology",
      "epp-cyber-ontology",
      "si-frankfurt-ontology",
      "si-stockholm-ontology",
      "barlow-cyberspace-1996",
      "lp-ontology-finance"
    ],
    "reviewedOn": "2026-10-07"
  },
  {
    "id": "conservative-sovereignty-and-christian-property-programs",
    "selectedIds": [
      "ideology-conservatism",
      "ideology-national-conservatism",
      "ideology-social-conservatism",
      "ideology-right-neoconservatism",
      "ideology-right-absolute-monarchy",
      "ideology-christian-socialism",
      "ideology-distributism"
    ],
    "status": "six-bounded-two-sided-primary-contrasts",
    "scope": "Sovereignty, sexuality/family, intervention and property-dispersion norms. Burke inclusion grounded, nearest conservative neighbor unresolved; Hobbes narrowed to indivisible sovereignty.",
    "sourceIds": [
      "burke-reflections-1790",
      "natcon-principles-2022",
      "heritage-values-2024",
      "kristol-persuasion-2003",
      "hobbes-sovereignty-1651",
      "locke-trust-forfeiture",
      "ics-gospel-current",
      "christians-left-constitution",
      "chesterton-outline-1927",
      "epp-cyber-ontology",
      "li-andorra-ontology",
      "lp-ontology-finance"
    ],
    "reviewedOn": "2026-10-07"
  },
  {
    "id": "consent-continental-union-and-ujamaa-land-tenure",
    "selectedIds": [
      "ideology-civic-nationalism",
      "ideology-pan-africanism",
      "ideology-left-ujamaa"
    ],
    "status": "three-bounded-two-sided-primary-contrasts",
    "scope": "Constitutive consent, substantive continental institutions and conditional community land tenure. Historical claims not validated; charter/program distinctions and decolonial nesting retained.",
    "sourceIds": [
      "renan-consent-1882",
      "nkrumah-union-1963",
      "oau-charter-primary-1963",
      "nyerere-ujamaa-columbia-1962",
      "natcon-principles-2022",
      "lp-ontology-finance"
    ],
    "reviewedOn": "2026-10-07"
  },
  {
    "id": "communal-civic-authority-and-confederal-overlap",
    "selectedIds": [
      "ideology-communalism",
      "ideology-democratic-confederalism"
    ],
    "status": "one-bounded-two-sided-contrast-plus-unresolved-nearest-overlap",
    "scope": "Bookchin civic municipal authority versus GIC productive councils. Bookchin/Öcalan nearest overlap actually checked, not forced into two independently distinct doctrines. Selected Bookchin family corrected; legacy records preserved.",
    "sourceIds": [
      "bookchin-communalist-2002",
      "ocalan-confederalism-2017",
      "gic-production-1930"
    ],
    "reviewedOn": "2026-10-07"
  },
  {
    "id": "party-authority-and-transition-programs",
    "selectedIds": [
      "ideology-revolutionary-socialism",
      "ideology-marxism-leninism",
      "ideology-fascism"
    ],
    "status": "three-bounded-two-sided-primary-contrasts",
    "scope": "Declared transition, party/council authority and imperial-state commitments. Narrow selected referents replace regime-snapshot inference without editing catalog identities or vectors; closest nested traditions remain unresolved.",
    "sourceIds": [
      "manifesto-transition-1848",
      "fabian-transition-1889",
      "stalin-party-1924",
      "pannekoek-party-class-1941",
      "gic-production-1930",
      "fascism-1932-fordham-excerpt",
      "natcon-principles-2022"
    ],
    "reviewedOn": "2026-10-07"
  },
  {
    "id": "democratic-authority-and-participation-programs",
    "selectedIds": [
      "civic-world-federalism",
      "civic-federal-republicanism",
      "civic-direct-democracy",
      "civic-participatory-democracy"
    ],
    "status": "three-bounded-two-sided-primary-contrasts",
    "scope": "World sovereignty, representative versus personally ratified legislation, and democratic economic participation. Normative texts supplement instrument/snapshot referents; compatible democratic nesting remains unresolved.",
    "sourceIds": [
      "montreux-federal-program-1947",
      "madison-federal-program-1787-1788",
      "rousseau-direct-legislation-1762",
      "port-huron-program-1962",
      "natcon-principles-2022",
      "lp-ontology-finance"
    ],
    "reviewedOn": "2026-10-07"
  },
  {
    "id": "competitive-authority-and-deliberative-legitimacy",
    "selectedIds": [
      "ideology-ordoliberalism",
      "civic-deliberative-democracy"
    ],
    "status": "one-bounded-two-sided-contrast-plus-unresolved-nearest-overlap",
    "scope": "Eucken/LP monopoly authority contrasted; Habermas political normative referent recovered beyond consultative instrument, with direct-legislation compatibility unresolved. Explicit editions and abridgment, no catalog recoding.",
    "sourceIds": [
      "eucken-competitive-order-1949",
      "lp-ontology-finance",
      "habermas-procedural-model-1995",
      "rousseau-direct-legislation-1762"
    ],
    "reviewedOn": "2026-10-07"
  },
  {
    "id": "monarchical-executive-and-legislative-authority",
    "selectedIds": [
      "ideology-right-constitutional-monarchism",
      "ideology-right-bonapartism"
    ],
    "status": "bounded-two-sided-primary-contrast",
    "scope": "Constant 1815 and Louis-Napoléon 1839 political programs: legislative inheritance contrasted, neutral-head/active-executive distinction documented with substantive royal powers and imperial legislature as counterevidence. Historical apologetics not practice verification; catalog unchanged.",
    "sourceIds": [
      "constant-neutral-authority-1815",
      "bonaparte-napoleonic-program-1839"
    ],
    "reviewedOn": "2026-10-07"
  },
  {
    "id": "transhumanist-policy-and-conditional-technocracy-scope",
    "selectedIds": [
      "civic-transhumanism"
    ],
    "status": "one-primary-normative-referent-nearest-contrast-open",
    "scope": "Bostrom actual political policy program qualifies beyond enhancement ethics; Veblen conditional design separately read but excluded from normative-doctrine count because advocacy/legitimacy bracketed. Inc. program stays separate research, not attributed to this catalog identity. No additional pair or axis score inferred.",
    "sourceIds": [
      "bostrom-transhumanist-values-2005",
      "humanityplus-declaration-adoption-2009",
      "veblen-conditional-industrial-design-1921"
    ],
    "reviewedOn": "2026-10-08"
  },
  {
    "id": "affirmative-technocratic-program-replaces-unqualified-prototype",
    "selectedIds": [
      "ideology-program-technocracy-inc-2004"
    ],
    "status": "one-primary-normative-referent-nearest-contrast-open",
    "scope": "Affirmative political authority/social-economic program qualifies Inc 2004; Veblen conditional prototype preserved extra. This is ONE technocracy exemplar, not two independent doctrines. Nearest productive-authority comparisons incomplete; six documentary axes do not prove ontology independence.",
    "sourceIds": [
      "technocracy-functional-design-2004",
      "veblen-conditional-industrial-design-1921"
    ],
    "reviewedOn": "2026-10-08"
  }
] as const;
