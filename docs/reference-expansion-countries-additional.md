# Expansão de países e períodos governamentais

Este complemento acrescenta 65 Estados contemporâneos e 25 governos ou ordens históricas ao catálogo. As 90 entradas estão em `src/data/reference-countries-additional.ts`. O tipo permanece `country`; a categoria separa `country` de `historical-country`. Os registros evitam repetir os IDs da base e do lote regional em `reference-countries.ts`.

## Critério dos vetores

Os valores são estimativas editoriais e não respostas de cidadãos. O eixo `est` traduz apenas a forma territorial expressa no documento constitucional: Estado unitário 15, unitário descentralizado 30, federal 90; 50 significa desconhecido. Para o eixo `rep`, as categorias de `Freedom in the World 2025` são convertidas em intervalos amplos — Free 85, Partly Free 55, Not Free 15 — e nunca apresentadas como a pontuação do Freedom House nem como uma medida direta do questionário. Para `rel`, a codificação distingue secularidade constitucional (85), reconhecimento de uma tradição sem igreja estatal (60) e religião oficial (15). Eixos sem evidência direta ficam em 50.

Cada posição afastada de 50 inclui `axisEvidence`: títulos de fontes que também constam na entrada e uma justificativa específica do eixo. O texto constitucional orienta a leitura da regra escrita; relatórios de direitos ajudam a descrever a prática política. Fontes normativas e relatórios de avaliação são tratados como evidências diferentes. Nenhuma destas novas entradas cobre seis eixos documentados, portanto o catálogo as conserva para consulta, mas o matching as mantém fora dos rankings até que exista pesquisa eixo a eixo suficiente.

## Fontes e limites

Os perfis atuais usam o texto constitucional traduzido pelo [Comparative Constitutions Project / Constitute](https://www.constituteproject.org/countries) e a avaliação de direitos de cada país no [Freedom in the World 2025](https://freedomhouse.org/report/freedom-world/2025), que descreve condições de 2024. Os links individualizados estão nos próprios registros. O projeto não converte a nota agregada de liberdade do Freedom House em um resultado de 12 eixos: usa somente as categorias de liberdade como aproximação ampla do eixo democrático.

Nos 25 períodos históricos, cada entrada aponta para um texto constitucional, ato, discurso ou programa ligado ao período e uma fonte de arquivo ou contexto. O valor deve ser lido junto à ressalva da entrada: vários governos duraram muitos anos, mudaram de política ou mantiveram distância entre a regra escrita e a prática. Quando a evidência não distingue com segurança um eixo, ele permanece desconhecido em 50.

Fontes primárias e institucionais representativas incluídas neste lote: [Constituição da Argélia de 2020](https://www.constituteproject.org/constitution/Algeria_2020); [Declaração de Arusha de 1967](https://www.files.ethz.ch/isn/125524/8004_Arusha_Declaration.pdf); [Relatório da Comissão de Inquérito de Guatemala, *Memoria del Silencio*](https://www.undp.org/guatemala/publications/guatemala-memoria-del-silencio); [Constituição da Zâmbia de 1973](https://www.constituteproject.org/constitution/Zambia_1973); [Constituição da República Democrática do Congo](https://www.constituteproject.org/constitution/Democratic_Republic_of_the_Congo_2011); [Constituição da Tunísia de 2022](https://www.constituteproject.org/constitution/Tunisia_2022). As entradas também citam estudos da Library of Congress, relatórios da International Commission of Jurists e arquivos legislativos e de direitos humanos.

## Manutenção

Novos perfis devem ser acrescentados como objetos completos, com ID estável, nome, período explícito, justificativa, ressalva, fontes citadas, vetor de 12 valores e evidência por eixo. Prefira a constituição ou política oficial do período para regras declaradas e arquivos independentes para confrontar a prática. Não infira posição de habitantes a partir do Estado. Não use a imagem de uma bandeira atual para um regime extinto sem confirmar que ela pertence àquele período. Valores sem apoio permanecem em 50 e não contam para os seis eixos exigidos pelo ranking.

**Compilação desta expansão:** 65 países atuais e 25 governos/períodos históricos; todos têm IDs distintos dentro deste módulo, vetor com 12 valores no intervalo 0–100 e ressalva. Pesquisa e compilação: 30 de setembro de 2026.
