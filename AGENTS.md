# 12eixos — AGENTS.md

Este arquivo é a autoridade de repositório para decisões persistentes do **12eixos**. Instruções posteriores do usuário prevalecem quando corrigirem algo daqui. Não replique estas regras em prompts ou skills sem necessidade; ao alterar instruções model-facing, carregue a versão atual de `writing-instructions` e mantenha cada significado sob um único dono.

## Coordenação

- O **Root orquestra e julga; não implementa o produto diretamente**. Delegue investigação, conteúdo, frontend, lógica, dados, acessibilidade, QA e reparos. O Root integra resultados, exige novos ciclos de reparo e faz operações write de VCS, além das exceções explicitamente reservadas a ele pelo HolyCodex.
- Paralelize trabalho independente quando isso economizar tempo ou melhorar qualidade. Cada delegação define ownership e transmite apenas o contexto necessário.
- Há agentes no mesmo checkout: preserve alterações alheias e não reverta trabalho que você não possui.
- No Windows, execute comandos com **Git Bash**, nunca PowerShell.
- Resolva autonomamente lacunas rotineiras, seguras, reversíveis e dentro do escopo. Escale ao usuário somente decisões materiais que não possam ser resolvidas pelo contexto, referências, pesquisa ou implementação existente.
- Uma primeira versão, plano, scaffold, build verde isolado ou estado “pronto para publicar” não é conclusão. Leve o trabalho autorizado ao estado terminal e repare falhas materiais.
- Calibre verificação ao risco: execute checks necessários e testes que provem comportamento; não crie testes que apenas espelhem a implementação nem repita suites sem nova mudança, falha ou dúvida.
- Quando trabalhar em frontend/visual, siga `frontend-app-builder`. Quando mudar instruções model-facing, siga `writing-instructions`.

## Produto

- Nome do produto e repositório: **12eixos**.
- Licença: **MIT**.
- Idioma desta versão: **pt_BR**. Estruture o código para permitir internacionalização futura sem implementar outro idioma agora.
- Questionário, scoring e resultados funcionam inteiramente no cliente: sem conta e sem backend obrigatório. Respostas, progresso e preferências permanecem locais.
- Progresso deve sobreviver a reload/fechamento e permitir retomada. URLs de resultado devem funcionar sem `localStorage`.
- `https://12axes.vercel.app` é referência **funcional**, não visual. Quando comportamento original precisar ser recuperado, use Browser/IAB e testes black-box; código público pode complementar, mas não substitui a observação do app.
- Use `docs/original-research.md` para comportamento/scoring original, `docs/questions-methodology.md` para perguntas/subconjuntos, `docs/reference-methodology.md` para matches e `docs/sites-workflow.md` para publicação, somente quando a frente correspondente exigir.

## Stack

- **ChatGPT Sites**, **React + Vite**.
- Use **Tailwind CSS v4** for all product styling and migrate existing component and page styles to it. Keep custom CSS to framework setup, design tokens, and features Tailwind cannot express cleanly, such as keyframes.
- Install and use the `cn` package for its intended class-name composition. Give shared components typed variant props for `color` (from the canonical color scheme) and `size`; type `className` from the wrapped element's React props.
- Standardize repeated Base UI usage behind shared, reusable project components. Apply the same component API and visual behavior to custom components reused in multiple places; consolidate equivalent patterns where their purpose is the same.
- **TanStack Router**, não TanStack Start, quando compatível com Sites.
- **Base UI** quando instalável e adequado; adapte estados/tokens ao design do projeto.
- **Tabler Icons** para ícones de interface.
- Use a versão estável mais recente do React compatível com o ambiente.
- Habilite **React Compiler** corretamente. Em código novo, dependa da memoização automática; use `useMemo`, `useCallback` e `React.memo` apenas por necessidade concreta ou quando estabilidade de identidade fizer parte da semântica.
- Prefira APIs modernas e estáveis do React. Use `<Activity>` para UI que deve ficar oculta preservando estado ou sendo preparada fora de vista; desmonte quando desmontagem for a semântica correta.
- Se o ambiente suportar Bun, use **Bun** para package management, instalação, scripts, tooling, build, testes e utilitários. Prefira APIs nativas do Bun quando trouxerem benefício. Use fallback da plataforma apenas diante de bloqueio concreto.

## Design system

Direção: **atlas/cartografia + editorial de dados**. O produto deve parecer uma publicação editorial contemporânea transformada em interface interativa, não um dashboard SaaS.

- Tipografia editorial forte, grid rigoroso, linhas técnicas, mapas/cartografia pertinentes, coordenadas e textura com hierarquia clara.
- Backgrounds não devem parecer planos: use granulação, cartografia, linhas, camadas e gradientes sutis quando acrescentarem materialidade.
- Densidade compacta, limpa e legível. Evite bento genérico, pilhas de cards sem necessidade, microcopy decorativa e rótulos sem função.
- **`border-radius: 0` em toda a UI**, inclusive menus, botões, inputs, cards, modais e componentes de terceiros.
- Popups, dropdowns, menus, sheets e demais overlays devem aparecer acima de todo conteúdo não modal da página. Centralize tokens de camadas e evite stacking contexts locais concorrentes. Preserve semântica, foco e operação por teclado; não bloqueie o scroll da página por padrão, reservando esse bloqueio a overlays cuja interação modal realmente o exija.
- Motion é parte da identidade: transições, microinterações, entrada de dados e respostas a pointer/scroll devem ser fluidas e funcionais. Respeite `prefers-reduced-motion`.
- Light e dark são completos. A preferência inicial é `Sistema`, que resolve para `light` ou `dark` conforme o sistema operacional e acompanha mudanças do sistema até uma escolha manual. O seletor é um dropdown fechado exibindo sol + `Claro`, lua + `Escuro` ou ícone de sistema + `Sistema`; o menu oferece essas três opções. Abrir o menu não bloqueia o scroll da página.
- Considere como o fundo altera a percepção de cor: ajuste os tons do light para que acentos mantenham vivacidade e legibilidade comparáveis ao dark, preservando seus papéis de marca e sem sacrificar contraste. Julgue o resultado renderizado nos dois temas.
- Para interações de UI, prefira as APIs semânticas `interest`/`InterestEvent` e `command`/`CommandEvent` aos eventos de entrada específicos que elas abstraem. Use `oninterest` e `oncommand` quando houver suporte; caso contrário, registre o listener correspondente. Prefira `interestfor`/`commandfor` quando aplicável. Preserve comportamento e acessibilidade, recorrendo ao fallback apenas quando o suporte da plataforma exigir.

### Paleta canônica

| token | claro | escuro |
| --- | --- | --- |
| `background` | `#F7F6F4` | `#05131B` |
| `surface` | `#FBFAF7` | `#0F1C24` |
| `surface-2` | `#EDEBE9` | `#14252E` |
| `grid` | `#DADBDD` | `#1C2D36` |
| `border` | `#C2C8CF` | `#334149` |
| `text` | `#07131B` | `#F6F5F5` |
| `text-secondary` | `#4F5F6B` | `#BCBDC0` |
| `text-muted` | `#8A9197` | `#909193` |
| `editorial-orange` | `#BA401A` | `#E66938` |
| `editorial-orange-2` | `#D07C5F` | `#8D4528` |
| `map-blue` | `#6F98AE` | `#3B81CC` |
| `map-blue-deep` | `#2C3F44` | `#2B5287` |
| `result-red` | `#64110F` | `#47150F` |

Cores semânticas dos 12 eixos, compartilhadas entre temas e ajustáveis apenas quando contraste exigir:

- Unitário `#FF5A1F`
- Democracia `#12B8B3`
- Liberdade `#D9A20B`
- Multicultura `#7C4DFF`
- Pacifista `#25A7E8`
- Não intervencionista `#33B875`
- Público `#FF4048`
- Planejamento `#8A46E8`
- Globalismo `#169FDE`
- Irreligioso `#F06A1A`
- Progressista `#E83E8C`
- Tecnologia `#5B79E8`

As cores dos eixos pertencem às visualizações e estados semânticos, não ao chrome geral. No light, preserve papel mineral frio, tinta azul-preta, cartografia azul dessaturada e ferrugem. No dark, preserve azul-petróleo quase preto, branco mineral, cartografia azulada e laranja mais luminoso; dark não é uma simples inversão do light.

## Referências visuais

As referências aprovadas ficam em `references/` e governam composição, hierarquia, densidade, tratamento visual e linguagem de interação:

- `landing-light.png` — `/`, claro, 1440×1080.
- `landing-dark.png` — `/`, escuro, 1440×1080.
- `quiz-dark.png` — `/test/:length/:question`, escuro, 1440×1080.
- `results-dark.png` — `/results?...`, escuro, 1440×1799.
- `share-dark.png` — imagem exportável do resultado, escuro, 1440×1920.
- `axes-dark.png` — `/eixos`, escuro, 1440×1799.
- `axis-detail-dark.png` — `/eixos/:axis`, escuro, 1440×1799.
- `methodology-dark.png` — `/metodologia`, escuro, 1440×1799.

Texto, percentuais, figuras, países, ideologias e matches mostrados nas imagens são **conteúdo demonstrativo**, não dados autoritativos. Use os dados e a metodologia reais do projeto.

Para routes com referência apenas em dark, preserve a mesma arquitetura no light e derive o tema pela paleta canônica + `landing-light.png`. Não invente uma segunda direção visual. As referências são desktop; tablet/mobile devem derivar do mesmo sistema sem virar uma pilha genérica de cards.

A arte de mapa-múndi aparece somente na landing page. Nela, aproxime as duas camadas coloridas do mapa e use uma aberração cromática sutil.

Não acrescente navegação, índices, slogans, helper strips ou microcopy decorativa só para preencher espaço. Preserve a economia editorial das referências finais.

## Questionário

- Considere individualmente as 240 afirmações do original.
- Neutralize linguagem carregada, persuasiva, acusatória ou tendenciosa sem mudar construto, direção, efeito no scoring ou **legibilidade**. Prefira pt_BR natural e direto a redação acadêmica ou burocrática.
- Mantenha mapeamento auditável `original → neutralizada → metadados de scoring`.
- 240 usa o conjunto completo. 36 e 60 são subconjuntos melhores derivados das 240, balanceados nos 12 eixos, com redundância controlada e scores comparáveis. Documente a seleção.
- Uma afirmação por tela. Respostas exatamente: `Concordo totalmente`, `Concordo`, `Neutro ou Depende`, `Discordo`, `Discordo totalmente`.
- Randomize a ordem das afirmações dentro do conjunto escolhido ao iniciar uma sessão; persista essa ordem junto às respostas e ao índice atual para que reload, retomada e voltar preservem a mesma sequência.
- Selecionar uma resposta avança automaticamente. Não existe toggle de autoavanço. Voltar permite revisar/alterar resposta. Mostre pergunta/total e progresso.
- Mouse, touch e teclado devem ser igualmente funcionais.

## Scoring, matches e resultados

- Confirme no original, via Browser/IAB, eixos, parâmetros, scoring, normalização e demais semânticas recuperáveis; não invente fórmulas verificáveis.
- Resultado reproduzível por `/results?est=...&rep=...&pod=...&imi=...&dip=...&int=...&eco=...&con=...&com=...&rel=...&mor=...&tec=...`; confirme o significado dos parâmetros antes de consolidá-los.
- Abertura direta dessa URL reconstrói deterministicamente tudo que puder ser derivado dos 12 scores.
- Resultados mostram os 12 eixos, explicações profundas mas legíveis, relações entre eixos, ideologias/figuras/países próximos, percentuais/distâncias, razões da proximidade, divergências relevantes, fontes, metodologia e período dos dados.
- Matches são comparações descritivas, não recomendações políticas ou eleitorais. Vetores devem ser rastreáveis a fontes verificáveis e ter período definido quando contemporâneos. Não copie vetores do original sem crítica nem ajuste resultados para “parecerem intuitivos”.
- Remova `Apoie` e `Para ler`.
- A imagem exportável é gerada client-side e segue `share-dark.png` em densidade/composição, adaptada ao tema real. Inclua ideologia principal, figura principal, 12 eixos, outras figuras, países, percentuais e `12eixos`. Resultado real nunca recebe marca de “exemplo”.
- A metodologia pública explica origem/neutralização das 240, seleção 36/60, pesos/direção, scoring/normalização, similaridade, vetores, períodos, fontes e limitações.

## Assets

- Para **bandeiras, fotografias, pinturas, retratos, mapas e outros assets visuais não triviais**, procure primeiro uma opção adequada na internet.
- Para ícones de UI, use **Tabler Icons** primeiro; se faltar algo, use outro pacote adequado ou asset licenciado encontrado online.
- Prefira fontes confiáveis, licença compatível e resolução suficiente. Empacote localmente quando apropriado e registre origem/licença. Evite hotlinks frágeis, thumbnails ruins e recortes arbitrários.
- **Image Gen é fallback somente para assets de imagem** quando não houver opção adequada. Nunca use geração para fabricar evidência documental sobre pessoas reais.
- **Não existe fallback manual para SVG.** Nenhum agente deve escrever/desenhar SVG, path ou ícone à mão. Use pacote/biblioteca, SVG licenciado obtido online ou saída gerada por uma biblioteca apropriada.

## Acessibilidade, responsividade e QA

- Mire **WCAG 2.2 AA**: semântica, teclado completo, foco visível/ordenado, nomes e labels acessíveis, leitor de tela, contraste, indicador além de cor, touch targets, zoom/reflow, anúncios de estado e reduced motion.
- Não crie modo separado de alto contraste.
- Desktop, tablet e mobile são experiências de primeira classe, mesmo com referências apenas desktop.
- Audite **cada route/tela** em light/dark e breakpoints relevantes quanto a fidelity, elegância editorial, UX, clareza, acessibilidade, motion, hover/focus/pressed/selected, teclado/touch, loading/empty/error quando aplicável, persistência, navegação, overflow/clipping e performance perceptiva.
- Use Browser/IAB primeiro para QA visual e funcional. Compare screenshots desktop com as referências a **1440 px de largura**; landing/quiz usam 1440×1080 e páginas longas usam a altura integral da referência.
- Teste fluxos 36/60/240, autoavanço, voltar/alterar, reload/retomada, persistência, scoring determinístico, query params, URL direta, matches/fontes/metodologia, exportação, tema sistema/manual/persistência, reduced motion e assets locais.
- Corrija diferenças materiais antes de encerrar; funcionalidade não substitui fidelity visual, e fidelity não substitui QA funcional.

## Publicação e conclusão

- Publique no **ChatGPT Sites** e faça push ao git server do Sites.
- Quando credenciais/ferramentas permitirem, publique também o GitHub **`12eixos`**. Falta de acesso ao GitHub não bloqueia Sites.
- Inclua `LICENSE` MIT e documentação suficiente para executar e entender o projeto.
- Conclusão exige produto funcional, três tamanhos do teste, scoring/resultados verificados, dados/metodologia rastreáveis, light/dark, responsividade, fidelity às referências, auditoria das routes, exportação, URL reproduzível, source atualizado e Sites publicado. O Root revisa evidências e exige reparo de qualquer falha material antes de declarar conclusão.
