# Sete recortes ideológicos — payload externo

Estado: os sete posts canônicos foram aprovados pelo Root após vinculação literal independente e integrados ao working tree. A prova final de runtime e os testes registram o estado efetivo, sem afirmar conclusão dos 675 perfis.

São 27 novas codificações documentais: Constant 4; Hobhouse 8; Rawls 4; Nozick 3; George 3; Eucken 3; Pettit 2. São âncoras editoriais e intervalos, não percentuais medidos. As relações com perguntas são crosswalks conceituais, sem respostas individuais imputadas.

O conjunto aprovado mantém 675 selecionados, com 91 elegíveis e 584 pendentes; faltam no mínimo 2950 slots para o piso de seis eixos. Somente Hobhouse atravessa o piso. Rawls ECO permanece desconhecido. Rothbard permanece integralmente inalterado devido ao problema de edição.

O helper compara o registro selecionado inteiro com o baseline ou com o post exato; divergências abortam. Não substitui os registros brutos. A proposta de catálogo aplica o post ao lookup apenas para os sete IDs e preserva a exceção já aprovada de IWA. Os 818 registros brutos, os 668 demais selecionados, os 861 demais registros completos e os 193 arquivados permanecem exatos.

`canonical-recipes.json` contém baselines e entradas do encoder. `canonical-posts.json` contém os sete posts; `canonical-proof.json` registra 1696 verificações externas, projeções pré-integração e hashes. `first-four-canonical-seal/` preserva os quatro primeiros posts e a primeira prova.

A autoria documental é atribuída aos relatórios de pesquisa e de revisão independente. O integrador não afirma nova leitura primária, livro integral, fac-símile autenticado ou equivalência entre URLs/edições. Os relatos de acesso falho ficam distintos das leituras recuperadas.

Rawls usa adicionalmente o OCR recuperado de 2001, limitado a §§ 42–44, 50 e 26.4; preserva conscrição defensiva em § 13.5 e a distinção entre razão pública em essenciais constitucionais/justiça básica e valores não políticos em outras leis (§ 12.3). Nozick conserva retificação, proteção contra risco e comunidades coletivas voluntárias. Eucken usa excertos de 1952 atribuídos à edição revista de 1990. Pettit distingue sinopses de capítulos do artigo primário de 2012. George não importa o livro comercial posterior.

O helper e os hooks restritos foram aplicados após a aprovação literal. Não houve alteração de UI, gate, taxonomia, seleção de IDs, Git ou publicação por este integrador.

Verificação efetiva: `bun test` passou com 49 testes, 0 falhas e 116784 asserções; `bun run build` passou (TypeScript e Vite; aviso de chunk grande). A prova `integrated-proof.json` passou em 1824 verificações, com 91 elegíveis, 584 pendentes e 2950 slots mínimos faltantes. O módulo aprovado tem SHA-256 `23b59b30af0a9db7919f507ba78b25e5befe424e0736c0d284cf8159874797b3`.
