# Seleção pesquisada de 75 ideologias: integração de 8 de outubro de 2026

## Estado integrado

A seleção ativa contém 675 perfis: 150 países atuais, 150 países/governos históricos, 150 figuras públicas, 150 figuras históricas e 75 programas ou doutrinas ideológicas delimitados. Essa seleção substitui o conjunto ideológico provisório; não substitui o arquivo de fontes.

O checkpoint remoto de partida foi `df4d4317c04a4977c35e3e23d308e4b440c0505e`, cujo tree `5cf6dc8ea8d016a355a8a48ddc155eb0518d9de7` foi recuperado e conferido integralmente. Ele já continha a reconciliação native14. Os 818 registros completos desse checkpoint permanecem idênticos, inclusive períodos, vetores, fontes, limites e códigos. Seu SHA-256 de runtime continua `f989c8d317a758f6d65af689c2bca07d560d65be000b15f0dc794ecda9d1420e`.

A pesquisa fresh75 é preservada integralmente em `research/ideology75/selected-75.json`, SHA-256 `ef57dcfc83eb3ba6f71a4db2bdc43fc95c69993715253967ed2f1ca3d4761883`, junto da justificativa, do pool de candidatos e do mapa de identidades. São 153 fontes distintas, com localizadores e escopos reais de leitura. Esta integração não alega uma nova leitura integral das 153 fontes.

## Identidades e preservação

- 25 perfis referem-se ao mesmo programa delimitado de um registro existente. Reutilizam seu ID e conservam exatamente período documental, vetor, graus, justificativas por eixo e códigos. O título e a apresentação qualitativa da seleção são explícitos; a bibliografia antiga permanece completa ao lado da pesquisa complementar.
- 50 perfis têm autores, textos ou recortes diferentes. Recebem registros próprios, com os 12 eixos desconhecidos: nenhuma graduação, justificativa de eixo ou codificação é criada. O armazenamento central em 50 é um sentinela; a UI não o apresenta como posição neutra.
- Constant 1819 não toma o ID de Locke 1690. Rothbard não toma o ID de Friedman. Hughes não renomeia Bostrom/Humanity+. Schweickart não herda o vetor de Lange. Stalin 1926 não herda a codificação de 1924.
- O arquivo completo tem 868 registros. Os 193 registros ideológicos fora da seleção continuam consultáveis nas fichas de resultado, com os IDs e as evidências originais; ficam fora dos índices de proximidade.
- O módulo do antigo conjunto provisório permanece como registro histórico, identificado como substituído. A seleção atual é `src/data/reference-selected-catalog.ts`.

## Cobertura efetiva

| Categoria | Selecionados | Com ao menos seis eixos documentados | Pendentes |
| --- | ---: | ---: | ---: |
| Países atuais | 150 | 19 | 131 |
| Países históricos | 150 | 18 | 132 |
| Figuras públicas | 150 | 17 | 133 |
| Figuras históricas | 150 | 24 | 126 |
| Ideologias | 75 | 8 | 67 |
| Total | 675 | 86 | 589 |

O conjunto provisório anterior tinha 91 elegíveis; o catálogo sem filtro usado anteriormente pelo produto tinha 93. A diferença para os 86 atuais decorre da troca de integrantes ideológicos. As cinco adições elegíveis do native14 continuam intactas. Não houve retirada de evidência, fabricação de scores nem redução do gate de seis eixos para preencher a meta.

A contagem automática verifica metadados de codificação; não certifica verdade, autenticidade, leitura integral ou sustentação do construto inteiro. Pesquisa de seleção, amplitude do programa e elegibilidade quantitativa são decisões diferentes.

## Superfícies e regressões

Landing, resultados, exportação do resultado e exemplos por eixo usam o mesmo limite de seleção. Fontes e arquivo são consultáveis separadamente. A metodologia distingue os 675 selecionados dos 86 com cobertura mínima e dos 589 ainda parciais. O view-model compartilhado usa as mesmas contagens e mantém lookup para todos os 868 IDs.

As regressões verificam preservação byte-equivalente dos 818 objetos em runtime, cardinalidade de cada categoria, arquivo sem perda, reconciliação dos 25 referentes, nenhuma pontuação nos 50 novos, resolução de fontes e vizinhos, exclusão de alternativas antigas mesmo quando são elegíveis, 17 vetores de entrada e apresentação SSR do perfil desconhecido e do arquivo.

## Verificações e limitações

- `bun test`: 46 testes aprovados, zero falhas, 116.230 assertions.
- `bun run build`: TypeScript e Vite aprovados. Permanece o aviso de chunk grande; o produto carrega um catálogo documental extenso.
- `bun x oxlint src tests scripts`: zero erros; 25 avisos preexistentes. Nenhum aviso novo nos módulos e testes adicionados.
- `bun scripts/build-ideology-selection.ts`: regeneração idempotente do módulo qualitativo, sem geração de scores.
- `bun scripts/selected-catalog-audit.ts`: contagens e SHA-256 registrados em `selected-catalog-audit.json`.
- `git diff --check`: aprovado.
- QA renderizada **bloqueada**, não aprovada: Chromium independente não conseguiu abrir seus sockets (`socket() failed: Operation not permitted`), inclusive após tentativa pelo mecanismo de execução ampliada. O navegador cloud suportado recusou o localhost com `net::ERR_BLOCKED_BY_CLIENT`. Testes SSR não substituem validação visual, interação real, exportação PNG ou responsividade. Essas etapas precisam ser concluídas em um ambiente com preview acessível.

Este checkpoint não faz merge, release ou deploy e não declara o produto completo nem pronto para merge. A meta de 675 perfis com seis eixos permanece aberta: faltam 589 perfis atingir a cobertura mínima por evidência, sem inferir pontuações das lacunas.
