# Auditoria conservadora dos 50 perfis originais

Revisão de 50 entradas legadas de `references.ts` em 30 de setembro de 2026: seis ideologias, quatorze pessoas e trinta países ou governos históricos. Os IDs e categorias foram conferidos contra o catálogo; os vetores continuam tendo doze eixos na escala de 0 a 100. A revisão não altera a fórmula de correspondência nem infere opiniões a partir de nacionalidade, biografia, religião ou profissão. A verificação documental recuperou duas direções além das marcações antigas: multiculturalismo e tecnologia nos dois perfis da Internacional Socialista. Os demais eixos sem apoio explícito continuam desconhecidos e no centro.

## Resultado aplicado

O catálogo já marcava evidência `high` ou `medium` para alguns eixos, mas conservava valores direcionais nos demais. Isso contradizia a regra de que eixo sem evidência é desconhecido. `reference-legacy-corrections.ts` centraliza os eixos ainda sem apoio eixo a eixo e os põe em `50`; os valores apoiados permanecem e agora recebem `axisEvidence` com o título exato da fonte do próprio registro e uma razão específica. Na social-democracia e no socialismo democrático, a Declaração de princípios da Internacional Socialista documenta direitos de minorias e de diferentes culturas, além do potencial das novas tecnologias para cooperação, trabalho e proteção ambiental. Esses trechos sustentam a direção multicultural (`imi`) e uma inclinação tecnológica moderada (`tec`), mas não validam valores numéricos exatos. Não se reutiliza valor direcional sem uma justificativa localizável na fonte.

O centro significa “sem direção documentada para este perfil”, não opinião moderada. O resultado é menos específico e pode reduzir a elegibilidade de uma entrada para ranking, o que é preferível a gerar uma correspondência a partir de suposições. Alan Turing já tinha doze centros e evidência vazia; permanece no catálogo e inelegível para ranking.

| Perfil | Eixos recentrados |
| --- | --- |
| Social-democracia | federalismo, não intervenção, proteção econômica, religião |
| Socialismo democrático | federalismo, pacifismo, não intervenção, proteção econômica, religião |
| Liberalismo social | federalismo, pacifismo, não intervenção, religião |
| Libertarianismo | federalismo, pacifismo, religião, progressismo, tecnologia |
| Política verde | segurança, não intervenção, propriedade pública, protecionismo, religião |
| Democracia cristã | federalismo, assimilação, não intervenção, planejamento |
| Bernie Sanders | federalismo, propriedade pública, assimilação, pacifismo, não intervenção, proteção econômica, religião |
| Nelson Mandela | federalismo, pacifismo, não intervenção, propriedade pública, planejamento, proteção econômica, religião |
| Friedrich Hayek | federalismo, assimilação, pacifismo, não intervenção, proteção econômica, religião, progressismo, tecnologia |
| Mahatma Gandhi | democracia, propriedade pública, assimilação, planejamento, proteção econômica, religião, progressismo |
| John Stuart Mill | federalismo, assimilação, pacifismo, propriedade pública, planejamento, proteção econômica, tecnologia |
| Karl Marx | federalismo, democracia, propriedade pública, não intervenção, proteção econômica, progressismo |
| Albert Einstein | federalismo, proteção econômica, religião, progressismo |
| Friedrich Engels | federalismo, democracia, não intervenção, proteção econômica |
| Nicolas de Condorcet | propriedade pública, pacifismo, planejamento, proteção econômica, religião |
| Thomas Paine | assimilação, pacifismo, proteção econômica, tecnologia |
| George Soros | federalismo, propriedade pública, pacifismo, proteção econômica |
| Eduard Bernstein | federalismo, proteção econômica, tecnologia |
| Olof Palme | federalismo, propriedade pública, proteção econômica, tecnologia |
| Uruguai | assimilação, pacifismo, não intervenção, planejamento, proteção econômica, religião, progressismo, tecnologia |
| Dinamarca | federalismo, assimilação, pacifismo, não intervenção, planejamento, proteção econômica, religião, progressismo, tecnologia |
| Estados Unidos | assimilação, pacifismo, não intervenção, planejamento, proteção econômica, religião, progressismo, tecnologia |
| Singapura | assimilação, pacifismo, não intervenção, propriedade pública, religião, progressismo, tecnologia |
| Alemanha | assimilação, não intervenção, planejamento, proteção econômica, religião, progressismo, tecnologia |
| Nova Zelândia | federalismo, assimilação, pacifismo, não intervenção, planejamento, proteção econômica, religião, progressismo, tecnologia |
| Brasil | pacifismo, não intervenção, planejamento, proteção econômica, progressismo, tecnologia |
| Japão | assimilação, não intervenção, propriedade pública, planejamento, progressismo |
| Índia | pacifismo, não intervenção, proteção econômica, progressismo |
| África do Sul | propriedade pública, não intervenção, proteção econômica, tecnologia |
| Indonésia | assimilação, pacifismo, não intervenção, proteção econômica, progressismo, tecnologia |
| México | pacifismo, planejamento, proteção econômica, progressismo, tecnologia |
| Turquia | assimilação, pacifismo, propriedade pública, planejamento, proteção econômica, tecnologia |
| Arábia Saudita | assimilação, propriedade pública, planejamento, proteção econômica |
| França | assimilação, pacifismo, não intervenção, planejamento, proteção econômica, progressismo, tecnologia |
| Comuna de Paris | pacifismo, proteção econômica, tecnologia |
| Estados Unidos — New Deal | não intervenção, religião, progressismo, tecnologia |
| Brasil — Estado Novo | assimilação, pacifismo, não intervenção, religião, tecnologia |
| Japão imperial | religião, tecnologia |
| China — período Mao | não intervenção, progressismo |
| Cuba — governo revolucionário | assimilação, progressismo, tecnologia |
| Portugal — Estado Novo | não intervenção, propriedade pública, planejamento, tecnologia |
| Chile — ditadura de Pinochet | assimilação, proteção econômica, tecnologia |
| Taiwan — República da China sob lei marcial | assimilação, religião, progressismo, tecnologia |
| França — presidência de Charles de Gaulle | assimilação, proteção econômica, progressismo |
| Chile — Unidade Popular | federalismo, propriedade pública, pacifismo, não intervenção, tecnologia |
| Reino Unido — governo Attlee | federalismo, propriedade pública, pacifismo, proteção econômica, religião, tecnologia |
| República de Weimar | propriedade pública, pacifismo, não intervenção, planejamento, proteção econômica, religião |
| República Socialista Federativa da Iugoslávia | propriedade pública, religião, progressismo, tecnologia |
| União Soviética — período Brejnev | assimilação, progressismo |

Os rótulos da tabela correspondem a `est, rep, pod, imi, dip, int, eco, con, com, rel, mor, tec`, nesta ordem: federal ↔ unitário; democracia ↔ autocracia; segurança ↔ liberdade; assimilação ↔ multicultura; militarismo ↔ pacifismo; intervenção ↔ não intervenção; público ↔ privado; planejamento ↔ livre mercado; protecionismo ↔ globalismo; irreligioso ↔ religioso; progressista ↔ tradicionalista; tecnologia ↔ biologia. Eixos omitidos na tabela mantêm o valor existente e sua marca de evidência.

## Limites e interpretação

Uma fonte política pode sustentar uma direção ou um programa para certo período; ela não mede a entidade com as doze perguntas, nem decide se o número exato deveria ser 62 ou 68. Números continuam interpolações editoriais. As notas e fontes originais por entrada permanecem disponíveis, mas a marca legada `evidence` é menos granular que as ligações fonte→eixo adicionadas às expansões recentes. Portanto esta auditoria corrige a lacuna comprovável de evidência ausente; ela não declara que cada pontuação direcional restante foi mensurada com precisão empírica.

Para novas inclusões e recorreções, cada eixo fora de `50` precisa ter evidência `medium` ou `high`, uma justificativa de direção por eixo ligada a pelo menos uma fonte incluída no próprio registro, período delimitado e ressalva proporcional. Eixos desconhecidos devem ficar em `50`; nenhuma fonte pode sustentar casas decimais de certeza onde só existe julgamento editorial. As duas recuperações acima usam a [Declaração de princípios da Internacional Socialista](https://www.socialistinternational.org/our-meetings/congresses/xviii-stockholm/declaration-of-principles-of-the-socialist-international/), fonte primária consultada em texto integral; ela sustenta direções amplas, não as pontuações `23`, `63`, `19` ou `61`. A rotina em `tests/reference-catalog.test.ts` impõe esse vínculo às expansões.

Como exemplos de fontes primárias adequadas ao tipo de recorte, foram consultados a [Declaração da Internacional Socialista de 1989](https://www.socialistinternational.org/our-meetings/congresses/xviii-stockholm/declaration-of-principles-of-the-socialist-international/), a [Carta Global Greens de 2023](https://globalgreens.org/wp-content/uploads/2023/07/GlobalGreens_Charter_2023.pdf), o [Manifesto EPP de 2024](https://www.epp.eu/papers/epp-manifesto-2024), o [Manifesto Liberal de Andorra](https://liberal-international.org/who-we-are/our-mission/landmark-documents/political-manifestos/liberal-manifesto-2017/) e a [plataforma do Libertarian Party](https://lp.org/platform-page/). Esses documentos descrevem posições e instituições, mas não fornecem um instrumento que valide valores numéricos do vetor.
