# Checkpoint de validação — 10/10/2026

Este checkpoint é trabalho em andamento no PR #2. Não certifica conclusão do catálogo, fidelidade visual, build de produção ou publicação do site.

## Alterações verificadas

- Comparações da página de resultados e da exportação extraídas para componentes compartilhados, mantendo ideologias próximas, figuras atuais/históricas e países atuais/históricos.
- Uma única figura é marcada como a mais próxima globalmente, sem alterar sua categoria documental.
- A exportação usa legendas compactas de datas; o contexto completo permanece nas comparações ao vivo. O período extenso de Ilhan Omar tem teste de regressão.
- O bloco de estilos ordinários adicionado anteriormente pelo PR foi migrado para utilitários Tailwind nos componentes. Os dois tokens de cor de painel permanecem em CSS. Isso não equivale à migração de todos os estilos legados do projeto.
- Oito bandeiras históricas foram adicionadas com identidade exata, origem, licença, hash e dimensões. As miniaturas brasileiras exibem sua ressalva de subperíodo junto à imagem nas comparações, exportação e demais linhas que renderizam bandeiras.
- Cobertura visual da seleção neste checkpoint: 150/150 países atuais, 97/150 países históricos, 48/150 figuras atuais e 76/150 figuras históricas. Total: 371/600; faltam 229 imagens. Presença de imagem não comprova elegibilidade documental.

## Verificações executadas

- 70 testes nativos de dados, scoring, períodos e integridade de bandeiras passaram, com 111.574 asserções.
- 16 testes de componentes, seleção e status documental passaram, com 7.064 asserções, usando dependências reais em cache. Incluem os testes de grupos, legenda de Omar, figura principal e notas brasileiras.
- TypeScript 7.0.2, em configuração estrita focada nos novos componentes e seus imports locais, passou.
- O compilador Tailwind 4.3.2 gerou os nove utilitários de variante/cascata inspecionados; nenhum estava ausente.
- Revisão estática independente conferiu filtros, categoria, figura principal e precedência das regras migradas. `git diff --check` passou.
- Inkscape rasterizou as bandeiras reutilizadas para inspeção; isso não é uma captura da interface.

As verificações com dependências em cache usaram React/React DOM 19.2.6, tipos React 19.2.15, Tabler 3.44.0 e Tailwind 4.3.2. O pacote `cn` foi consultado na tag oficial 0.4.0. Não substituem as versões exatas do lockfile, que não foram instaladas. Nenhum arquivo de dependências ou lockfile foi alterado para acomodar o ambiente.

## Verificações ainda necessárias

1. Instalação com lockfile congelado, suite completa e `bun run build` na stack exata. A instalação foi interrompida pela plataforma; os dois testes de `reference-selection75-ui.test.tsx`, que importam o aplicativo completo, não foram executados neste checkpoint.
2. Browser QA real de todas as rotas, nos dois temas e em desktop/tablet/mobile. As tentativas de abrir o navegador falharam no ambiente antes de produzir uma captura utilizável.
3. Exportações reais de 1440 × 1920, incluindo vetor todo-zero, equilibrado, todo-100, nomes longos e notas brasileiras. A ausência de clipping e a fidelidade não foram comprovadas por SSR.
4. Contraste renderizado, foco/teclado, menu mobile, persistência de tema e fluxos 36/60/240.
5. Nova revisão externa quando a cota permitir. O status `success` do CodeRabbit acompanhado de “review skipped” não conta como revisão; a revisão Codex anterior pertence a outro commit.

Não fazer merge enquanto a revisão e os requisitos de conclusão estiverem pendentes.
