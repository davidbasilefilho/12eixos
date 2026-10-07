# Inventário exato dos eixos legados — baseline imutável

## O que foi estabelecido

O commit local `9db08071e7145b768c6a28005999c39c507860c5` preserva 494 registros integrados, dos quais 59 passam pelo gate estrutural. A execução de `bun scripts/legacy-axis-audit.ts` extrai esse commit em diretório temporário, importa os dados já corrigidos/preparados e encontra **exatamente 209 eixos direcionais sem qualificação estrutural em 35 perfis legados**. Ela não importa a árvore de trabalho mutável, não modifica registros e remove apenas seu diretório temporário. O script verifica os totais e a origem legada; retorna sucesso quando reproduz a baseline, mesmo que existam eixos pendentes.

O artefato `docs/legacy-axis-audit.json` contém os 209 objetos completos: ID, nome, categoria, período, eixo, valor, graduação existente ou `null`, mapping original ou `null`, títulos não encontrados, causas precisas, justificativa/ressalvas do registro, fontes disponíveis e próxima ação. Seu hash identifica o catálogo integral; todos os valores originais são preservados. Novas correções no catálogo corrente devem ser comparadas a essa baseline, sem sobrescrever o inventário histórico.

## Causas distintas, sem falsa validação

| Causa estrutural | Eixos afetados | Interpretação |
| --- | ---: | --- |
| `missing-mapping` | 206 | Falta `axisEvidence` para o eixo. Fonte geral no registro não equivale a alegação específica. |
| `absent-grade` | 2 | Falta graduação `medium/high`: `christian-democracy/pod` e `george-soros/com`. |
| `source-title-not-in-entry` | 2 | Os mappings de Hayek citam um título ausente das fontes listadas. |

Há 210 ocorrências de causa em 209 eixos: `george-soros/com` combina ausência de grau e de mapping. Não foram encontrados aqui mappings vazios nem grau `low`: o problema exato não é resumível como “209 fontes falsas”.

**Alegação genérica** e **alegação substantivamente não sustentada** são dimensões diferentes dessas falhas. O audit não leu as fontes e não atribui falsidade documental. Seu campo `substantiveSupportVerdict` permanece `undetermined`; `sourceValidationStatus` permanece `not-reviewed` em cada um dos 209 eixos. Uma revisão só pode atribuir `substantive-unsupported` quando registrar a fonte realmente inspecionada, locador, período, construto e razão pela qual ela não sustenta a direção. A ausência de mapeamento não demonstra ausência de evidência no documento.

Separadamente, foram sinalizados **509 mappings em 124 perfis** contendo dois templates reconhecíveis: o texto repetido de direção editorial das pessoas e o texto de interpolação das ideologias. Todos passam estruturalmente; 40 dos 59 perfis elegíveis têm ao menos um desses sinais. Isso é **heurística de fila de revisão**, não declaração de que todos os 509 são genéricos ou falsos: um template pode incorporar texto específico e sustentado. A lista `genericClaimSignals` guarda o texto completo e classifica apenas `template-signal-unreviewed`. Não se relaxou o gate nem se elevou graduação por presença de texto.

## Ledger documental separado

`sourceValidationLedger` enumera todos os **494 perfis e os 12 eixos de cada um**, com elegibilidade estrutural independente de validação documental, valor, graduação, status de revisão e calibração numérica. O default é `not-reviewed`, inclusive para os 59 elegíveis. `externallyValidatedProfileCount` é `null` porque não foi estabelecido, e não 59. Revisões delimitadas anteriores em `docs/source-repair.md` não são automaticamente convertidas em certificação integral de um perfil: fonte acessível, direção sustentada e número calibrado são verificações diferentes.

## Inventário compacto dos 35 perfis

A tabela abaixo enumera todos os 209 pares eixo/valor/grau. `∅` significa ausência de graduação. O JSON preserva o mapping e todas as fontes de cada par.

| ID | Categoria | Eixos pendentes: valor (grau) | Quantidade |
| --- | --- | --- | ---: |
| `christian-democracy` | `ideology` | `pod=56` (∅) | 1 |
| `friedrich-hayek` | `historical-figure` | `rep=82` (medium), `pod=23` (medium) | 2 |
| `nicolas-de-condorcet` | `historical-figure` | `est=73` (medium), `rep=89` (high), `imi=18` (medium), `int=55` (medium), `rel=93` (high), `mor=89` (high), `tec=92` (high) | 7 |
| `thomas-paine` | `historical-figure` | `est=80` (medium), `int=62` (medium), `rel=92` (high) | 3 |
| `george-soros` | `public-figure` | `com=14` (∅) | 1 |
| `uruguay` | `country` | `rep=97` (high), `pod=30` (medium), `eco=48` (medium) | 3 |
| `denmark` | `country` | `rep=97` (high), `pod=38` (medium), `eco=58` (medium) | 3 |
| `united-states` | `country` | `est=88` (high), `rep=82` (high), `pod=55` (medium), `eco=22` (medium) | 4 |
| `singapore` | `country` | `est=5` (high), `rep=48` (high), `pod=77` (medium), `con=68` (medium), `com=11` (high) | 5 |
| `germany` | `country` | `est=77` (high), `rep=95` (high), `pod=47` (medium), `eco=47` (medium) | 4 |
| `new-zealand` | `country` | `rep=98` (high), `pod=29` (medium), `eco=42` (medium) | 3 |
| `brazil` | `country` | `est=65` (high), `rep=72` (medium), `pod=45` (medium), `eco=54` (medium), `rel=70` (medium) | 5 |
| `japan` | `country` | `est=15` (high), `rep=94` (high), `pod=31` (medium), `dip=34` (medium), `com=27` (medium), `rel=82` (high), `tec=82` (medium) | 7 |
| `india` | `country` | `est=68` (high), `rep=62` (medium), `pod=70` (medium), `imi=39` (medium), `eco=58` (medium), `con=62` (medium), `rel=42` (medium), `tec=79` (medium) | 8 |
| `south-africa` | `country` | `est=58` (medium), `rep=83` (high), `imi=18` (high), `dip=30` (medium), `eco=61` (medium), `con=65` (medium), `rel=78` (high), `mor=72` (medium) | 8 |
| `indonesia` | `country` | `est=14` (high), `rep=59` (medium), `pod=61` (medium), `eco=52` (medium), `con=55` (medium), `rel=37` (medium) | 6 |
| `mexico` | `country` | `est=62` (high), `rep=61` (medium), `pod=59` (medium), `int=45` (medium), `eco=58` (medium), `rel=77` (medium) | 6 |
| `turkey` | `country` | `est=15` (high), `rep=35` (high), `pod=72` (medium), `int=31` (medium), `rel=38` (medium), `mor=31` (medium) | 6 |
| `saudi-arabia` | `country` | `est=5` (high), `rep=5` (high), `pod=76` (medium), `dip=70` (medium), `int=23` (medium), `rel=7` (high), `mor=17` (medium), `tec=75` (medium) | 8 |
| `france` | `country` | `est=28` (high), `rep=89` (high), `pod=60` (medium), `eco=55` (medium), `rel=91` (high) | 5 |
| `paris-commune-1871` | `historical-country` | `est=80` (medium), `rep=66` (medium), `pod=35` (medium), `int=55` (medium), `eco=77` (medium), `con=72` (medium), `rel=94` (high), `mor=77` (medium) | 8 |
| `us-new-deal-1933` | `historical-country` | `est=81` (high), `rep=90` (high), `pod=43` (medium), `dip=63` (medium), `eco=66` (medium), `con=58` (medium), `com=64` (medium) | 7 |
| `brazil-estado-novo-1937` | `historical-country` | `est=17` (high), `rep=8` (high), `pod=77` (medium), `eco=78` (high), `con=75` (high), `com=76` (medium), `mor=31` (medium) | 7 |
| `imperial-japan-1931` | `historical-country` | `est=8` (medium), `rep=17` (high), `pod=78` (medium), `imi=69` (medium), `dip=94` (high), `int=14` (high), `eco=57` (medium), `con=77` (medium), `com=81` (medium), `mor=19` (medium) | 10 |
| `prc-mao-1949` | `historical-country` | `est=12` (medium), `rep=7` (high), `pod=92` (high), `imi=26` (medium), `dip=64` (medium), `eco=97` (high), `con=95` (high), `com=79` (medium), `rel=7` (high), `tec=42` (medium) | 10 |
| `cuba-revolutionary-1959` | `historical-country` | `est=8` (high), `rep=18` (high), `pod=76` (medium), `dip=61` (medium), `int=39` (medium), `eco=91` (high), `con=87` (high), `com=69` (medium), `rel=10` (high) | 9 |
| `portugal-estado-novo-1933` | `historical-country` | `est=8` (high), `rep=12` (high), `pod=72` (medium), `imi=73` (medium), `dip=57` (medium), `com=76` (medium), `rel=8` (medium), `mor=13` (high) | 8 |
| `chile-pinochet-1973` | `historical-country` | `est=12` (high), `rep=8` (high), `pod=87` (high), `dip=85` (high), `int=22` (high), `eco=24` (medium), `con=19` (medium), `mor=22` (high) | 8 |
| `roc-taiwan-1949` | `historical-country` | `est=35` (medium), `rep=22` (high), `pod=80` (high), `dip=72` (medium), `int=34` (medium), `eco=59` (medium), `con=79` (medium), `com=62` (medium) | 8 |
| `france-de-gaulle-1958` | `historical-country` | `est=17` (high), `rep=82` (medium), `pod=65` (medium), `dip=72` (medium), `int=37` (medium), `eco=55` (medium), `con=62` (medium), `rel=86` (high), `tec=71` (medium) | 9 |
| `chile-up-1970` | `historical-country` | `rep=75` (medium), `eco=86` (high), `con=82` (high), `com=66` (medium), `rel=70` (medium), `mor=77` (medium) | 6 |
| `uk-attlee-1945` | `historical-country` | `rep=94` (high), `int=43` (medium), `eco=78` (high), `con=67` (high), `mor=64` (medium) | 5 |
| `weimar-republic` | `historical-country` | `est=78` (high), `rep=85` (high), `mor=68` (medium) | 3 |
| `yugoslavia-1974` | `historical-country` | `est=91` (high), `rep=28` (medium), `dip=43` (medium), `int=86` (high), `eco=83` (high), `con=72` (high) | 6 |
| `ussr-1977` | `historical-country` | `est=32` (medium), `rep=12` (high), `pod=78` (medium), `dip=74` (medium), `int=17` (high), `eco=96` (high), `con=95` (high), `com=71` (medium), `rel=94` (medium), `tec=80` (medium) | 10 |

## Próximas ações verificáveis

1. **Democracia cristã / `pod=56`:** o mapping existe e aponta ao título correto do EPP; falta grau. Ler as passagens de segurança/liberdades do manifesto de 2024 e decidir se sustentam a direção. Somente adicionar graduação após revisão; não assumir que o mapping existente a prova.
2. **Hayek / `rep=82`, `pod=23`:** os dois mappings apontam a “The Constitution of Liberty — University of Chicago Press excerpt”, ausente das fontes. Recuperar e ler o excerto, ou mapear justificadamente a uma fonte já citada que sustente essas alegações. Renomear títulos para passar o gate sem confrontar o conteúdo seria falso reparo.
3. **Soros / `com=14`:** não há grau nem mapping. Verificar se o próprio texto sustenta abertura comercial/globalismo no sentido do eixo; sociedade aberta e cooperação internacional, sozinhas, não estabelecem essa posição. Preservar identidade e documentos; deixar o eixo desconhecido na apresentação até decisão fundada.
4. **Países atuais:** 81 eixos pendentes em 15 perfis. Primeiro fixar o período e separar norma constitucional de prática; usar constituição para estrutura/religião apenas quando aplicável e indicadores contemporâneos para competição/liberdades com limites explícitos. Uma fonte comparativa geral não deve justificar propriedade, tecnologia ou militarismo sem informação específica.
5. **Países/governos históricos:** 114 eixos pendentes em 15 perfis. Revisar ordem/regime e período, confronto entre normas e execução, e evitar transportar uma constituição atual a um governo encerrado. Priorizar leitura que resolva um conjunto consistente de eixos com locadores; não preencher os seis exigidos para fabricar elegibilidade.
6. **Figuras:** 12 eixos históricos e um público. Fontes individuais, autoria, data e mudanças de posição têm precedência sobre biografias gerais; obras sobre economia não conferem posições militares/religiosas por analogia.

Os perfis e scores existentes não foram apagados nem reescritos neste inventário. Cada reparo deve preservar o valor original em trilha de revisão, mostrar a decisão e sua fonte, e registrar valores desconhecidos sem criar pontuação oposta.

## Próximo lote por categoria

A frente de pesquisa coordena seis países atuais ausentes — Cabo Verde, São Tomé e Príncipe, Seychelles, Comores, Djibuti e Essuatíni — usando constituições primárias e relato contemporâneo de prática. O lote só conta como adição integrada quando identidade, período, alegações e codificação passam por revisão; até então permanece pesquisa separada. A frente de metodologia é responsável pelo protocolo numérico reproduzível. Precedentes numéricos do catálogo não autorizam novos valores sem regra e evidência.

A baseline tem lacunas de 26 países atuais, 71 históricos, 112 figuras públicas e 103 históricas, antes de revisão semântica. As 206 ideologias não comprovam 75 identidades doutrinárias distintas. Esse inventário torna a dívida existente acionável; não declara cumprida a meta de 675 nem a validação documental de todos os matches.
