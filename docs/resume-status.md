# Estado para retomada — 30 de setembro de 2026

A pedido do usuário, todos os subagentes foram interrompidos e a versão atual está sendo publicada sem corrigir os erros restantes. Não declarar a tarefa completa.

## Implementado
- Testes de 36, 60 e 240 afirmações, persistência local, revisão de respostas e reconstrução por URL.
- Pontuação das respostas com pesos originais; matching agora considera somente eixos documentados e expõe cobertura. O cálculo original completo permanece disponível separadamente.
- Categorias separadas: ideologias, figuras públicas, figuras históricas, países e países históricos.
- Catálogo integrado atual: 494 entradas (206 ideologias, 38 figuras públicas, 47 históricas, 124 países e 79 países históricos). Módulos de pesquisa não integrados permanecem preservados no checkout.
- Assets locais e documentação de fontes/licenças. Manifesto de retratos: 328 entradas; oito lacunas documentadas em assets-expansion-portraits.md.
- Tailwind v4, cn, primitives compartilhados e alterações visuais parciais. A migração do CSS não está concluída.

## Verificação deste snapshot
- bun x vite build: PASSOU; bundle JS ~1,18 MB, aviso de tamanho.
- bun run build: FALHOU: App.tsx linha 829, params.axis incompatível com tipagem de ActionLink/TanStack Router.
- bun test: 20 passaram, 2 falharam por fonte http no catálogo. Não houve correções após o usuário solicitar apenas publicação.
- Não foi feita aprovação visual ou funcional final deste snapshot.

## Pendências prioritárias
1. Corrigir tipagem de ActionLink e executar build completo e testes.
2. Revisar fontes HTTP e seus destinos sem alterar protocolos cegamente.
3. Integrar manifesto de retratos na UI: App.tsx ainda monta caminhos pelo ID, enquanto reference-media.tsx possui mapeamento. Retratos na-* podem quebrar; exportação pode falhar por imagem ausente.
4. Verificar flags em NEWpublic/assets/flags: arquivos fora de public não são servidos por Vite. Não foram movidos nesta publicação.
5. Concluir integração dos módulos de pesquisa e revisar aliases/duplicação. Américas: 4 perfis verificados, 77 rascunhos retirados; África: 14 perfis e 66 candidatos separados. Não importar candidatos como evidência validada.
6. Auditar fonte por fonte e eixo por eixo, sobretudo justificativas genéricas em pessoas norte-americanas e ideologias de direita. Valores numéricos são estimativas editoriais, não medidas comprovadas. A elegibilidade estrutural não prova sustentação documental.
7. Revisar semântica de não intervenção em Mao, assimilação em Calhoun, evidências de Susan B. Anthony e Jack Layton; distinguir libertarianismo austríaco/anarcocapitalismo; revisar links Showa/Rio e período mexicano PRI.
8. Atualizar methodology/docs e microcopy para o matching condicionado à cobertura. Percentuais de coberturas distintas não são plenamente comparáveis; desconhecido 50 não é neutralidade observada.
9. Terminar Tailwind, variantes de cor e wrappers; reduzir CSS bespoke e estilos estáticos inline. Extratores novos de ui_foundation_repair ficaram parciais, sem corte das routes.
10. Concluir todas as anotações visuais: tipografia pequena, mapa/grão claro, badge/padding, espectro/accordions, resultados e composição do PNG. Revisar desktop 1440, tablet, mobile, light/dark, teclado, reduced motion, menus e exportação real.
11. A expansão exaustiva acima do original ainda NÃO está concluída. Catálogos e totais dos documentos anteriores podem estar desatualizados após interrupção da integração.

## Publicação
Site registrado: appgprj_6abd4e2698fc81918ec78202fc120597
Origem prevista: https://doze-eixos.davidbasilefilho.chatgpt.site
Acesso inicial do Sites: privado, preservado nesta publicação.
GitHub pretendido: https://github.com/davidbasilefilho/12eixos
O estado terminal e os IDs da publicação serão registrados em docs/publication-status.json depois do deploy.

## Retomada
Ler este arquivo, docs/scoring-audit.md, os documentos reference-expansion-* e os relatórios de revisão desta conversa. Preservar trabalho não integrado. Não reaplicar um reset: o reset autorizado já foi consumido e não restou crédito naquele momento. O usuário pediu desligamento do PC após a publicação.
