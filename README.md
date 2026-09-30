# 12eixos

Questionário político em português brasileiro que apresenta um perfil em 12 dimensões independentes. O questionário, cálculo e resultados rodam no navegador; não há conta ou backend obrigatório. O progresso e as preferências são armazenados localmente. Resultados podem ser reconstruídos por uma URL com os doze percentuais.

## Executar localmente

Requisitos: Bun e Node.js (usado pelo fluxo de publicação do Sites).

```sh
bun install
bun run dev
```

Para validar e gerar o site estático:

```sh
bun test
bun run build
bun run preview
```

`bun test` executa os testes com o comando integrado do Bun. Os scripts declarados em `package.json` são `dev`, `build` e `preview`.

## Rotas

- `/` — escolher uma versão do questionário.
- `/test/:length/:question` — questionário nas versões `36`, `60` ou `240`; `:question` é a posição atual, começando em `1`. A ordem aleatória das afirmações e o progresso são salvos localmente para permitir retomada.
- `/quiz/:variant` — rota alternativa para iniciar uma versão (`36`, `60` ou `240`), preservada para compatibilidade.
- `/results?est=...&rep=...&pod=...&imi=...&dip=...&int=...&eco=...&con=...&com=...&rel=...&mor=...&tec=...` — resultado reproduzível.
- `/eixos` — visão geral dos eixos.
- `/eixos/:axis` — detalhe de um eixo.
- `/metodologia` — perguntas, pontuação, comparações, fontes e limitações.

A seção de compartilhamento faz parte da página de resultados: a imagem PNG é gerada localmente, sem uma rota separada.

A interpretação e os nomes dos polos dos parâmetros estão documentados em [docs/original-research.md](docs/original-research.md). Dados e períodos das comparações são descritos em [docs/reference-methodology.md](docs/reference-methodology.md); a seleção e revisão das perguntas, em [docs/questions-methodology.md](docs/questions-methodology.md).

## Stack

React, TypeScript, Vite, TanStack Router, Base UI, Tabler Icons e Bun. O frontend é estático e pode ser hospedado sem backend. Consulte [docs/sites-workflow.md](docs/sites-workflow.md) para o fluxo do ChatGPT Sites.
