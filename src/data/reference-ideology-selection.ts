/** Editorial planning only. No catalog imports, scores, deletions or default UI changes.
 * Every selection is provisional; family literature is not per-profile verification.
 */
export const ideologySelectionSnapshot = { date: '2026-10-07', catalogCount: 206, intendedSubsetCount: 75, readyForDefaultUse: false } as const;

export const ideologySelectionFamilies = [
  {
    "id": "liberal",
    "label": "Liberdade, propriedade e mercados",
    "count": 10
  },
  {
    "id": "conservative",
    "label": "Continuidade, autoridade e monarquia",
    "count": 8
  },
  {
    "id": "socialist",
    "label": "Socialismo, propriedade e estratégia",
    "count": 12
  },
  {
    "id": "anarchist",
    "label": "Antiautoritarismo e autogoverno",
    "count": 9
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
    "count": 7
  },
  {
    "id": "development",
    "label": "Desenvolvimento e coordenação econômica",
    "count": 4
  },
  {
    "id": "technical",
    "label": "Conhecimento técnico e transformação humana",
    "count": 3
  },
  {
    "id": "authoritarian",
    "label": "Mobilização autoritária histórica",
    "count": 3
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
  }
] as const;

export const intendedIdeologySelection = [
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
    "id": "ideology-left-guild-socialism",
    "name": "Socialismo de guildas",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Recorte regional, escola, movimento ou estratégia dentro de tradições já representadas; seleção limitada preserva este contraste como alternativa, sem afirmar sinonímia.",
    "catalogRationale": "Cole propõe democracia econômica por associações autogeridas de produtores e representação política funcional.",
    "catalogSourceTitles": [
      "Guild Socialism Restated — G. D. H. Cole"
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
    "id": "ideology-left-black-anarchism",
    "name": "Anarquismo negro",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Recorte regional, escola, movimento ou estratégia dentro de tradições já representadas; seleção limitada preserva este contraste como alternativa, sem afirmar sinonímia.",
    "catalogRationale": "A obra de Lorenzo Kom’boa Ervin une crítica anarquista ao Estado e ao capitalismo à análise do racismo e da libertação negra.",
    "catalogSourceTitles": [
      "Anarchism and the Black Revolution — Lorenzo Kom’boa Ervin"
    ],
    "documentedAxisCountAtSnapshot": 4,
    "reviewStatus": "provisional"
  },
  {
    "id": "ideology-left-anarcha-feminism",
    "name": "Anarcafeminismo",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Recorte regional, escola, movimento ou estratégia dentro de tradições já representadas; seleção limitada preserva este contraste como alternativa, sem afirmar sinonímia.",
    "catalogRationale": "Mujeres Libres combinou organização anarquista, formação autônoma e emancipação das mulheres durante a Guerra Civil Espanhola.",
    "catalogSourceTitles": [
      "Mujeres Libres: documentos e revista, 1936–1939 — Fundación Anselmo Lorenzo"
    ],
    "documentedAxisCountAtSnapshot": 4,
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
    "id": "ideology-right-agorism",
    "name": "Agorismo",
    "reasonCode": "regional-or-subtradition",
    "compareWith": null,
    "decisionRationale": "Variante nacional, dinástica, eleitoral ou filosófica de tradições já representadas; prioridade de amplitude no subconjunto, sem desqualificar a corrente.",
    "catalogRationale": "O manifesto propõe construir relações econômicas voluntárias fora de mercados regulados pelo Estado.",
    "catalogSourceTitles": [
      "The New Libertarian Manifesto — Samuel Edward Konkin III"
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
  }
] as const;
