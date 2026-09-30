# Expansão de perfis de países e governos

**Revisão: 30 de setembro de 2026.** Este catálogo adiciona 44 perfis de instituições atuais (recorte documental 2024–2025) e 39 governos/ordens históricas com período explícito. O módulo é `src/data/reference-countries.ts`; os itens preservam `kind: country` e separam sua exibição por `category: country` ou `historical-country`.

## Evidência e uso

Um perfil é um vetor editorial de instituições e políticas no intervalo descrito, não uma opinião ou média de habitantes. Para os governos atuais, a primeira referência é a constituição ou o documento institucional aplicável. Para o estado vivido das eleições e dos direitos, cotejamos o relatório anual específico de 2025 da [Freedom House](https://freedomhouse.org/country/scores?sort=asc), que examina 2024; ela é uma avaliação secundária independente, não uma fonte primária. Os perfis citam ambos os documentos. A coleção acadêmica [Constitute / Comparative Constitutions Project](https://www.constituteproject.org/countries) ajuda a localizar e comparar cartas constitucionais; o projeto transcreve textos, mas a própria carta é evidência do arranjo formal, não de sua aplicação.

Nos períodos históricos, as fontes citadas incluem leis, constituições, manifestos e pronunciamentos da época; arquivos nacionais, parlamentos, bibliotecas e instituições de memória ajudam a estabelecer prática e limites. Quando a fonte é parcial ou oficial, a nota do registro explicita sua natureza. Cada eixo diferente de 50 deve ter `evidence` e `axisEvidence` com títulos de fontes exatamente iguais aos da lista daquele registro. Eixos sem base suficiente ficam em 50, que significa desconhecido neste catálogo, não neutralidade. A pontuação representa direções aproximadas; não atribuímos precisão mensurável a valores como 78 em vez de 75.

A ordem vetorial é fixa: federalismo, democracia, segurança, assimilação, militarismo, não intervenção, propriedade pública, planejamento, protecionismo, secularismo, progressismo, tecnologia. A primeira extremidade vale 100. A Constituição serve especialmente para estrutura federal/unitária; os relatórios Freedom House apoiam somente a dimensão de direitos e competição política. As demais posições são mantidas no centro quando os documentos do próprio item não sustentam uma direção. Isso deliberadamente reduz a participação no ranking de perfis para os quais a fonte não permite uma comparação confiável.

### Perfis contemporâneos incluídos

- **Américas (7):** Argentina, Canadá, Chile, Colômbia, Peru, Bolívia e Costa Rica.
- **Europa (17):** Reino Unido, Itália, Espanha, Portugal, Países Baixos, Noruega, Finlândia, Polônia, Tchéquia, Hungria, Ucrânia, Rússia, Islândia, Áustria, Suíça, Irlanda e Grécia.
- **Ásia e Oriente Médio (12):** China, Coreia do Sul, Taiwan, Filipinas, Tailândia, Malásia, Vietnã, Paquistão, Bangladesh, Israel, Irã e Emirados Árabes Unidos.
- **África (7):** Egito, Marrocos, Nigéria, Quênia, Etiópia, Gana e Senegal.
- **Oceania (1):** Austrália.

O total é **44** novos perfis atuais. Eles complementam, sem duplicar, os atuais já presentes no catálogo, como Brasil, Estados Unidos, Alemanha, França, Índia, Japão, México e África do Sul.

### Perfis históricos incluídos

São **39** recortes distintos: Brasil militar (1964–1985), Argentina militar (1976–1983), PRI mexicano (1946–2000), Pacto de Punto Fijo na Venezuela (1958–1998), governo Velasco no Peru (1968–1975), ditadura uruguaia (1973–1985), Batista em Cuba (1952–1959), Confederação e Reconstrução dos EUA, Terceira República e Vichy na França, Itália fascista e república pós-guerra, Império Alemão, Terceiro Reich e RDA, Rússia imperial, Governo Provisório e Yeltsin, Stalin, Segunda República e franquismo na Espanha, Primeira República portuguesa, junta grega, Tanzimat otomano, Raj britânico, Nehru, Zia, Mujib, dinastias Pahlavi, revolução constitucional e República Islâmica inicial do Irã, primeiros governos de Israel, Coreia do Norte de Kim Il-sung, Coreia do Sul de Park, Qing tardia, República da China continental e reformas de Deng. Cada intervalo está no campo period da entrada.

Os perfis históricos existentes — Weimar, New Deal, Attlee, Estado Novo brasileiro, Japão imperial, período Mao, Cuba revolucionária, Pinochet, Unidade Popular chilena, Salazar, Iugoslávia de Tito, Brejnev soviético e Comuna de Paris — não são repetidos.
## Fontes de referência do método

- [Freedom House — pontuações por país e metodologia](https://freedomhouse.org/country/scores?sort=asc) e relatórios 2025 por país: sustentam o recorte de direitos, eleições e acontecimentos de 2024; não validam os outros onze eixos.
- [Comparative Constitutions Project — Countries](https://www.constituteproject.org/countries): coleção comparativa de constituições e dados indexados por país e data. Cada registro usa um texto constitucional próprio ou a página institucional indicada.
- [Office of the Historian, U.S. Department of State](https://history.state.gov/historicaldocuments): documentos diplomáticos contemporâneos e narrativas cronológicas. São fontes produzidas pelo governo dos EUA e devem ser lidas com essa perspectiva.
- [National Archives (EUA) — founding documents e arquivos de governo](https://www.archives.gov/founding-docs): atos e emendas originais e catálogo arquivístico.
- [Library of Congress — Country Studies](https://www.loc.gov/collections/country-studies/): estudos históricos com bibliografias e contexto, usados como fontes secundárias institucionais.
- [German History in Documents and Images](https://ghdi.ghi-dc.org/): coleção de documentos primários sobre instituições alemãs, com proveniência arquivística e contextualização acadêmica.
- [Conselho Constitucional da França — constituições históricas](https://www.conseil-constitutionnel.fr/les-constitutions-dans-l-histoire) e [Assembleia Nacional](https://www.assemblee-nationale.fr/histoire/): textos e cronologia institucional francesa.
- [Parlamento do Reino Unido — India Act 1935](https://www.parliament.uk/about/living-heritage/evolutionofparliament/legislativescrutiny/parliament-and-india/collections1/collections-govtindia/) e [legislation.gov.uk](https://www.legislation.gov.uk/): legislação primária britânica e colonial.
- [Knesset — declaração de independência e história](https://www.knesset.gov.il/docs/eng/megilat_eng.htm): documento primário da fundação de Israel.
- [Biblioteca Nacional do Chile — Memoria Chilena](https://www.memoriachilena.gob.cl/602/): pesquisa e arquivo sobre governos e documentos chilenos.
- [Comissão Nacional da Verdade do Brasil](https://www.gov.br/memoriasreveladas/pt-br/assuntos/comissao-nacional-da-verdade) e [Argentina Nunca Más](https://www.argentina.gob.ar/derechoshumanos/anm/nunca-mas): fontes de memória documental sobre repressão estatal e transições.
- [Extraordinary Chambers in the Courts of Cambodia](https://www.eccc.gov.kh/en/about-eccc/introduction): registros judiciais e históricos do Kampuchea Democrático.

## Limitações editoriais

1. O corte moderno é temporal e precisa de atualização depois de novas eleições, guerras ou reformas constitucionais. Os eventos e leis em 2024 não devem ser apresentados como estado permanente em 2026.
2. Cartas constitucionais podem anunciar direitos ou federalismo não observados na prática. Relatórios de direitos corrigem parte dessa lacuna, não medem integralmente economia, política externa ou cultura.
3. Entradas que atravessam várias décadas ou administrações são especialmente frágeis; o nome e o período alertam que são famílias de governo, não entidade atemporal.
4. Países multiétnicos, territórios ocupados e governos coloniais não devem ser lidos como representação dos povos abrangidos. Vários registros históricos têm exclusão racial ou imperial expressa.
## Registro por entrada

O identificador e o documento específico abaixo permitem auditar os registros e escolher bandeiras coerentes com o período. Os segundo links de cada item (arquivo/relatório) e notas eixo-a-eixo estão no próprio objeto.

| ID | Perfil e período | Documento-base |
| --- | --- | --- |
| argentina-current-2025 | Argentina — Instituições e políticas vigentes, 2024–2025 | [Constituição / documento institucional — Argentina](https://www.constituteproject.org/constitution/Argentina_1994) |
| canada-current-2025 | Canadá — Instituições e políticas vigentes, 2024–2025 | [Constituição / documento institucional — Canadá](https://www.constituteproject.org/constitution/Canada_2011) |
| australia-current-2025 | Austrália — Instituições e políticas vigentes, 2024–2025 | [Constituição / documento institucional — Austrália](https://www.constituteproject.org/constitution/Australia_1986) |
| united-kingdom-current-2025 | Reino Unido — Instituições e políticas vigentes, 2024–2025 | [Constituição / documento institucional — Reino Unido](https://www.parliament.uk/about/how/role/relations-with-other-institutions/parliament-crown/) |
| italy-current-2025 | Itália — Instituições e políticas vigentes, 2024–2025 | [Constituição / documento institucional — Itália](https://www.constituteproject.org/constitution/Italy_2020) |
| spain-current-2025 | Espanha — Instituições e políticas vigentes, 2024–2025 | [Constituição / documento institucional — Espanha](https://www.constituteproject.org/constitution/Spain_1978) |
| portugal-current-2025 | Portugal — Instituições e políticas vigentes, 2024–2025 | [Constituição / documento institucional — Portugal](https://www.constituteproject.org/constitution/Portugal_2005) |
| netherlands-current-2025 | Países Baixos — Instituições e políticas vigentes, 2024–2025 | [Constituição / documento institucional — Países Baixos](https://www.constituteproject.org/constitution/Netherlands_2008) |
| norway-current-2025 | Noruega — Instituições e políticas vigentes, 2024–2025 | [Constituição / documento institucional — Noruega](https://www.constituteproject.org/constitution/Norway_2016) |
| finland-current-2025 | Finlândia — Instituições e políticas vigentes, 2024–2025 | [Constituição / documento institucional — Finlândia](https://www.constituteproject.org/constitution/Finland_2011) |
| poland-current-2025 | Polônia — Instituições e políticas vigentes, 2024–2025 | [Constituição / documento institucional — Polônia](https://www.constituteproject.org/constitution/Poland_1997) |
| czechia-current-2025 | Tchéquia — Instituições e políticas vigentes, 2024–2025 | [Constituição / documento institucional — Tchéquia](https://www.constituteproject.org/constitution/Czech_Republic_2013) |
| hungary-current-2025 | Hungria — Instituições e políticas vigentes, 2024–2025 | [Constituição / documento institucional — Hungria](https://www.constituteproject.org/constitution/Hungary_2011) |
| ukraine-current-2025 | Ucrânia — Instituições e políticas vigentes, 2024–2025 | [Constituição / documento institucional — Ucrânia](https://www.constituteproject.org/constitution/Ukraine_2019) |
| russia-current-2025 | Rússia — Instituições e políticas vigentes, 2024–2025 | [Constituição / documento institucional — Rússia](https://www.constituteproject.org/constitution/Russia_2020) |
| china-current-2025 | China — Instituições e políticas vigentes, 2024–2025 | [Constituição / documento institucional — China](https://www.constituteproject.org/constitution/China_2018) |
| south-korea-current-2025 | Coreia do Sul — Instituições e políticas vigentes, 2024–2025 | [Constituição / documento institucional — Coreia do Sul](https://www.constituteproject.org/constitution/South_Korea_1987) |
| taiwan-current-2025 | Taiwan — Instituições e políticas vigentes, 2024–2025 | [Constituição / documento institucional — Taiwan](https://www.constituteproject.org/constitution/Taiwan_1947) |
| philippines-current-2025 | Filipinas — Instituições e políticas vigentes, 2024–2025 | [Constituição / documento institucional — Filipinas](https://www.constituteproject.org/constitution/Philippines_1987) |
| thailand-current-2025 | Tailândia — Instituições e políticas vigentes, 2024–2025 | [Constituição / documento institucional — Tailândia](https://www.constituteproject.org/constitution/Thailand_2017) |
| malaysia-current-2025 | Malásia — Instituições e políticas vigentes, 2024–2025 | [Constituição / documento institucional — Malásia](https://www.constituteproject.org/constitution/Malaysia_2007) |
| vietnam-current-2025 | Vietnã — Instituições e políticas vigentes, 2024–2025 | [Constituição / documento institucional — Vietnã](https://www.constituteproject.org/constitution/Vietnam_2013) |
| pakistan-current-2025 | Paquistão — Instituições e políticas vigentes, 2024–2025 | [Constituição / documento institucional — Paquistão](https://www.constituteproject.org/constitution/Pakistan_2018) |
| bangladesh-current-2025 | Bangladesh — Instituições e políticas vigentes, 2024–2025 | [Constituição / documento institucional — Bangladesh](https://www.constituteproject.org/constitution/Bangladesh_2014) |
| israel-current-2025 | Israel — Instituições e políticas vigentes, 2024–2025 | [Constituição / documento institucional — Israel](https://www.constituteproject.org/constitution/Israel_1958) |
| iran-current-2025 | Irã — Instituições e políticas vigentes, 2024–2025 | [Constituição / documento institucional — Irã](https://www.constituteproject.org/constitution/Iran_1989) |
| uae-current-2025 | Emirados Árabes Unidos — Instituições e políticas vigentes, 2024–2025 | [Constituição / documento institucional — Emirados Árabes Unidos](https://www.constituteproject.org/constitution/United_Arab_Emirates_2004) |
| egypt-current-2025 | Egito — Instituições e políticas vigentes, 2024–2025 | [Constituição / documento institucional — Egito](https://www.constituteproject.org/constitution/Egypt_2014) |
| morocco-current-2025 | Marrocos — Instituições e políticas vigentes, 2024–2025 | [Constituição / documento institucional — Marrocos](https://www.constituteproject.org/constitution/Morocco_2011) |
| nigeria-current-2025 | Nigéria — Instituições e políticas vigentes, 2024–2025 | [Constituição / documento institucional — Nigéria](https://www.constituteproject.org/constitution/Nigeria_1999) |
| kenya-current-2025 | Quênia — Instituições e políticas vigentes, 2024–2025 | [Constituição / documento institucional — Quênia](https://www.constituteproject.org/constitution/Kenya_2010) |
| ethiopia-current-2025 | Etiópia — Instituições e políticas vigentes, 2024–2025 | [Constituição / documento institucional — Etiópia](https://www.constituteproject.org/constitution/Ethiopia_1994) |
| ghana-current-2025 | Gana — Instituições e políticas vigentes, 2024–2025 | [Constituição / documento institucional — Gana](https://www.constituteproject.org/constitution/Ghana_1992) |
| senegal-current-2025 | Senegal — Instituições e políticas vigentes, 2024–2025 | [Constituição / documento institucional — Senegal](https://www.constituteproject.org/constitution/Senegal_2001) |
| chile-current-2025 | Chile — Instituições e políticas vigentes, 2024–2025 | [Constituição / documento institucional — Chile](https://www.constituteproject.org/constitution/Chile_1980) |
| colombia-current-2025 | Colômbia — Instituições e políticas vigentes, 2024–2025 | [Constituição / documento institucional — Colômbia](https://www.constituteproject.org/constitution/Colombia_2015) |
| peru-current-2025 | Peru — Instituições e políticas vigentes, 2024–2025 | [Constituição / documento institucional — Peru](https://www.constituteproject.org/constitution/Peru_1993) |
| bolivia-current-2025 | Bolívia — Instituições e políticas vigentes, 2024–2025 | [Constituição / documento institucional — Bolívia](https://www.constituteproject.org/constitution/Bolivia_2009) |
| costa-rica-current-2025 | Costa Rica — Instituições e políticas vigentes, 2024–2025 | [Constituição / documento institucional — Costa Rica](https://www.constituteproject.org/constitution/Costa_Rica_1949) |
| iceland-current-2025 | Islândia — Instituições e políticas vigentes, 2024–2025 | [Constituição / documento institucional — Islândia](https://www.constituteproject.org/constitution/Iceland_1944) |
| austria-current-2025 | Áustria — Instituições e políticas vigentes, 2024–2025 | [Constituição / documento institucional — Áustria](https://www.constituteproject.org/constitution/Austria_2013) |
| switzerland-current-2025 | Suíça — Instituições e políticas vigentes, 2024–2025 | [Constituição / documento institucional — Suíça](https://www.constituteproject.org/constitution/Switzerland_1999) |
| ireland-current-2025 | Irlanda — Instituições e políticas vigentes, 2024–2025 | [Constituição / documento institucional — Irlanda](https://www.constituteproject.org/constitution/Ireland_1937) |
| greece-current-2025 | Grécia — Instituições e políticas vigentes, 2024–2025 | [Constituição / documento institucional — Grécia](https://www.constituteproject.org/constitution/Greece_2008) |
| brazil-military-regime-1964 | Brasil — ditadura militar — Regime militar, 1964–1985 | [Ato Institucional nº 5 (1968)](https://www.planalto.gov.br/ccivil_03/ait/ait-05-68.htm) |
| argentina-junta-1976 | Argentina — Processo de Reorganização Nacional — Ditadura militar, 1976–1983 | [Documentos Históricos da ditadura](https://www.argentina.gob.ar/derechoshumanos/anm/documentos-historicos) |
| mexico-pri-hegemony | México — regime do PRI hegemônico — Predomínio presidencial do PRI, 1946–2000 | [Constituição Política mexicana](https://www.diputados.gob.mx/LeyesBiblio/pdf/CPEUM.pdf) |
| venezuela-punto-fijo | Venezuela — Pacto de Punto Fijo — Democracia pactuada, 1958–1998 | [Constituição da Venezuela de 1961](https://www.constituteproject.org/constitution/Venezuela_1961) |
| peru-velasco-1968 | Peru — Governo Revolucionário das Forças Armadas — Governo Velasco Alvarado, 1968–1975 | [Mensagem presidencial sobre reforma agrária (1969)](https://www.congreso.gob.pe/Docs/participacion/museo/congreso/files/mensajes/1951-1980/files/mensaje_1969.pdf) |
| uruguay-civic-military-1973 | Uruguai — ditadura cívico-militar — Regime autoritário, 1973–1985 | [Decreto de dissolução do Parlamento (1973)](https://www.impo.com.uy/bases/decretos/464-1973) |
| cuba-batista-1952 | Cuba — governo Batista — Ditadura de Fulgencio Batista, 1952–1959 | [Lei Constitucional de 1952](https://www.constituteproject.org/constitution/Cuba_1952) |
| us-confederacy-1861 | Estados Confederados da América — Confederação secessionista, 1861–1865 | [Constituição dos Estados Confederados (1861)](https://avalon.law.yale.edu/19th_century/csa_csa.asp) |
| us-reconstruction-1865 | Estados Unidos — Reconstrução — Reconstrução pós-Guerra Civil, 1865–1877 | [13ª, 14ª e 15ª Emendas](https://www.archives.gov/founding-docs/amendments-11-27) |
| france-third-republic | França — Terceira República — Regime parlamentar, 1870–1940 | [Leis constitucionais de 1875](https://www.conseil-constitutionnel.fr/les-constitutions-dans-l-histoire/constitution-de-1875-iiieme-republique) |
| france-vichy-1940 | França — Regime de Vichy — Estado Francês, 1940–1944 | [Atos constitucionais de 1940](https://mjp.univ-perp.fr/france/co1940.htm) |
| france-fourth-republic | França — Quarta República — Regime parlamentar, 1946–1958 | [Constituição francesa de 1946](https://www.conseil-constitutionnel.fr/les-constitutions-dans-l-histoire/constitution-du-27-octobre-1946-ive-republique) |
| italy-fascist-regime | Itália — regime fascista — Ditadura de Mussolini, 1922–1943 | [Carta del Lavoro (1927)](https://www.treccani.it/enciclopedia/carta-del-lavoro/) |
| italy-postwar-republic | Itália — Primeira República — República parlamentar do pós-guerra, 1948–1992 | [Constituição da República Italiana (1948)](https://www.senato.it/istituzione/la-costituzione) |
| german-empire-1871 | Império Alemão — Constituição federal monárquica, 1871–1918 | [Constituição do Império Alemão (1871)](https://ghdi.ghi-dc.org/sub_document.cfm?document_id=1845) |
| germany-third-reich | Alemanha — regime nazista — Ditadura nacional-socialista, 1933–1945 | [Lei de Plenos Poderes (1933)](https://ghdi.ghi-dc.org/sub_document.cfm?document_id=1494) |
| east-germany-gdr | Alemanha Oriental — RDA — República Democrática Alemã, 1949–1990 | [Constituição da RDA de 1968](https://www.documentarchiv.de/ddr/verfddr.html) |
| russian-empire-1906 | Império Russo — ordem constitucional tardia — Duma e monarquia imperial, 1906–1917 | [Leis Fundamentais do Estado Russo (1906)](https://www.prlib.ru/en/history/619187) |
| russian-provisional-1917 | Rússia — Governo Provisório — Entre duas revoluções, março–novembro de 1917 | [Declaração de direitos do Governo Provisório](https://www.prlib.ru/en/history/619365) |
| ussr-stalin | União Soviética — período Stalin — Coletivização e Grande Terror, 1928–1953 | [Constituição soviética de 1936](https://www.marxists.org/reference/archive/stalin/works/1936/12/05.htm) |
| russia-yeltsin | Rússia — presidência de Boris Yeltsin — Transição pós-soviética, 1991–1999 | [Constituição da Federação Russa de 1993](http://www.constitution.ru/en/10003000-01.htm) |
| spanish-second-republic | Espanha — Segunda República — República, 1931–1939 | [Constituição espanhola de 1931](https://www.congreso.es/constitucion/ficheros/historicas/cons_1931.pdf) |
| spain-franco | Espanha — franquismo — Ditadura de Francisco Franco, 1939–1975 | [Lei de Princípios do Movimento Nacional (1958)](https://www.boe.es/buscar/doc.php?id=BOE-A-1958-9406) |
| portugal-first-republic | Portugal — Primeira República — República parlamentar, 1910–1926 | [Constituição Política de 1911](https://www.parlamento.pt/Parlamento/Documents/Constituicao1911.pdf) |
| greece-military-junta | Grécia — Junta dos Coronéis — Ditadura militar, 1967–1974 | [Constituição de 1968 (junta)](https://www.constituteproject.org/constitution/Greece_1968) |
| ottoman-tanzimat | Império Otomano — Tanzimat e Primeira Era Constitucional — Reformas imperiais, 1839–1878 | [Édito de Gülhane (1839)](https://www.britannica.com/event/Tanzimat) |
| british-raj | Índia britânica — Raj — Administração colonial da Coroa, 1858–1947 | [Government of India Act 1935](https://www.legislation.gov.uk/ukpga/Geo5/26-27/2/contents/enacted) |
| india-nehru | Índia — primeiros governos de Nehru — República federal e planejamento, 1947–1964 | [Constituição da Índia (1950)](https://legislative.gov.in/constitution-of-india/) |
| pakistan-zia | Paquistão — governo de Zia-ul-Haq — Regime militar e islamização, 1977–1988 | [Ordem Constitucional Provisória (1981)](https://www.pakistani.org/pakistan/constitution/post_1977/pc_19810324.html) |
| bangladesh-mujib | Bangladesh — governo de Sheikh Mujibur Rahman — Primeira república, 1972–1975 | [Constituição de Bangladesh (1972)](https://bdlaws.minlaw.gov.bd/act-367.html) |
| iran-pahlavi | Irã — Estado Pahlavi — Monarquia, 1925–1979 | [Lei Fundamental e Emendas do Irã](https://www.constituteproject.org/constitution/Iran_1906) |
| iran-constitutional-revolution | Irã — Revolução Constitucional — Majles e monarquia, 1906–1911 | [Lei Fundamental Persa (1906)](https://www.constituteproject.org/constitution/Iran_1906) |
| iran-early-islamic-republic | Irã — República Islâmica inicial — Revolução e nova Constituição, 1979–1989 | [Constituição da República Islâmica](https://www.constituteproject.org/constitution/Iran_1989) |
| israel-founding-government | Israel — primeiros governos — Formação do Estado, 1948–1967 | [Declaração de Independência (1948)](https://www.knesset.gov.il/docs/eng/megilat_eng.htm) |
| north-korea-kim-il-sung | Coreia do Norte — governo Kim Il-sung — República Popular, 1948–1994 | [Constituição da RPDC (1972)](https://www.constituteproject.org/constitution/Peoples_Republic_of_Korea_1972) |
| south-korea-park | Coreia do Sul — governo Park Chung-hee — Regime desenvolvimentista, 1961–1979 | [Constituição Yushin (1972)](https://www.constituteproject.org/constitution/South_Korea_1972) |
| qing-dynasty-late | China — dinastia Qing tardia — Reformas constitucionais, 1898–1911 | [Constituição Preparatória Qing (1908)](https://www.constituteproject.org/constitution/China_1908) |
| roc-mainland-1912 | China — República da China continental — República e governos do Kuomintang, 1912–1949 | [Constituição da República da China (1947)](https://www.constituteproject.org/constitution/China_1947) |
| china-deng-reform | China — reformas de Deng Xiaoping — Reforma e abertura, 1978–1992 | [Constituição da República Popular (1982)](https://www.constituteproject.org/constitution/China_1982) |
