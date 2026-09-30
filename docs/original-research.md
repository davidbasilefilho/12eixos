# Investigação do original 12 Axes

Observação black-box: navegação real no Codex In-app Browser em 2026-09-29, https://12axes.vercel.app/. Código público oficial usado apenas como complemento: https://github.com/RomanCypherpunk/12axes (README, seção Pontuação e Matching).

## Fluxo observado

- A home oferece 36, 60 e 240 perguntas. Clicar em cada botão abre uma pergunta por tela, com progresso e cinco radios: Concordo totalmente, Concordo, Neutro ou Depende, Discordo, Discordo totalmente.
- Os três modos abriram, respectivamente, `Pergunta 1 de 36`, `1 de 60`, `1 de 240`, sempre na URL `/` sem query param. As primeiras afirmações foram distintas a cada modo; o README confirma seleção/balanceamento a partir do pool de 240 no frontend.
- Autoavanço começa ligado no original. Selecionar `Concordo totalmente` em 36 marcou a opção e avançou da pergunta 1 à 2; progresso exibido 0% e depois 2%. Há botões Voltar e Avançar, e switch para desativar autoavanço (esta reconstrução deverá manter autoavanço permanente conforme especificação).
- Recarregar `/` no meio do quiz levou de volta à home; não houve retomada observável. Esta reconstrução deverá persistir progresso e retomá-lo.
- Ao voltar para a home e abrir 60 ou 240, iniciou-se um teste novo. A primeira pergunta variou: 36, “Cotas raciais corrigem uma injustiça histórica e ainda são necessárias”; 60, “As tarifas deveriam ser quase zeradas, mesmo que algumas indústrias nacionais quebrem”; 240, “As compras do governo e das estatais devem priorizar empresas brasileiras”.

## Eixos, polos e URL de resultado

Os params são percentuais do **primeiro polo** listado. Observação direta em `/results?est=36.7&rep=88&pod=40.3&imi=3.3&dip=35&int=85.8&eco=58.5&con=69.3&com=17.5&rel=95.8&mor=67.5&tec=78.7` reconstruiu resultado sem quiz/localStorage. Mapeamento confirmado pelo texto exibido:

| Param | Eixo | 100 | 0 |
|---|---|---|---|
| est | Estrutura | Federal | Unitário |
| rep | Representação | Democracia | Autocracia |
| pod | Poder | Segurança | Liberdade |
| imi | Imigração | Assimilação | Multicultura |
| dip | Diplomacia | Militarista | Pacifista |
| int | Intervenção | Não intervencionista | Nacionalista |
| eco | Economia | Público | Privado |
| con | Controle | Planejamento | Livre mercado |
| com | Comércio | Protecionismo | Globalismo |
| rel | Religião | Irreligioso | Religioso |
| mor | Moral | Progressista | Tradicionalista |
| tec | Tecnologia | Tecnologia | Biologia |

A página derivou Aceleracionismo de Esquerda (92% exibidos, score 91.8 no resumo), Uruguai 90%, Albert Einstein 95%, com outras correspondências, posições distantes, eixos, e seções “O que te distingue”, “Para ler” e “Apoie”. O usuário exige remover as duas últimas. A URL é suficiente para resultado compartilhado. O original arredonda cada lado independentemente no display, podendo exibir 59%+42%=101% (`eco=58.5`), detalhe a evitar na reconstrução.

## Cálculo documentado no repositório oficial

O README oficial informa que 240 perguntas são 20 por eixo, 10 por polo. Respostas têm valores de concordância 1, .75, .5, .25, 0. Cada pergunta declara polo favorecido pela concordância LEFT ou RIGHT. O score de cada eixo é o percentual do primeiro polo, arredondado a uma casa; o segundo é derivado como complemento. A direção implica contribuição `v` para LEFT e `1-v` para RIGHT; a média por eixo produz o percentual. Isto concorda com a semântica da interface, mas a fórmula precisa no backend deve ser confirmada no código/teste antes de alegar paridade completa.

Intensidade (desvio absoluto de 50): `<7.5` Equilibrado; `<22.5` Inclinado; `<37.5` Forte; `>=37.5` Muito forte. A URL fornecida confirma `rep=88` como “Muito forte” e `est=36.7` como “Inclinado”.

Matching do original, conforme [README público, seção Matching](https://github.com/RomanCypherpunk/12axes#matching): score composto por dimensão eixo a eixo (peso `.42`), direção vetorial (`.33`), magnitude (`.18`) e maior outlier (`.07`). Dimensão usa `max(0,1-(diff/50)^2)` e penalidade contínua em lados opostos `1-.45*tanh(abs(user-50)/25)*tanh(abs(target-50)/25)`. Direção usa cosseno aumentado: `50+50*(dot+k)/sqrt((|user|²+k)(|target|²+k))`, vetores centralizados em 50, `k=12*8²`. Magnitude é `100-2*abs(userIntensity-targetIntensity)`, com intensidade média dos desvios absolutos de 50. Outlier é `100*max(0,1-(maxDiff/100)^2.5)`. O README também descreve percentil relativo em catálogos separados. A fórmula foi localizada no README oficial; não foi possível inspecionar/confirmar aqui a implementação executável do backend. Portanto, esta reconstrução adota a fórmula publicada, sem alegar paridade de execução comprovada.

## Limitações e alertas do original

- O exemplo na home muda entre carregamentos (vi Integralismo Brasileiro/Plínio Salgado/Império do Brasil e Centrismo/Macron/Suíça).
- A URL compartilha só 12 scores, portanto não pode recuperar respostas individuais, versão ou incerteza amostral.
- O resultado exemplo de URL afirma correspondências surpreendentes (São Paulo apóstolo 99% no recorte econômico; Atenas Democrática 100% econômico; Uruguai 90% global). Isso reforça a necessidade de vetores com fontes e método defensáveis, não cópia cega.
- Não executei fluxos inteiros no original: dependem do backend Render e 240 cliques; código público e README complementam, mas os resultados completos não são evidência black-box deste registro.
