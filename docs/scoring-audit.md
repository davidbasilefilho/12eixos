# Auditoria de pontuação e correspondências

Auditoria do código e dos dados em 30 de setembro de 2026. Ela verifica consistência interna e aderência à fórmula publicada pelo projeto de referência; não demonstra validade psicométrica nem que estimativas políticas sejam fatos mensuráveis.

## Respostas e eixos

O navegador do 12 Axes original foi consultado diretamente. O README oficial documenta respostas `1`, `0,75`, `0,5`, `0,25` e `0`, convertidas em contribuição ao primeiro polo conforme `agreePole`; pesos originais são unitários. O site original confirmou os doze polos e, com os doze parâmetros em `50`, exibiu os doze eixos no centro. Os parâmetros da URL indicam o percentual do primeiro polo.

No projeto, cada resposta contribui para um eixo como `weight × agreement` quando concorda com o primeiro polo e `weight × (1 − agreement)` quando concorda com o segundo. O valor exibido é a média ponderada das perguntas respondidas daquele eixo, de 0 a 100, arredondada a uma casa decimal. A intensidade usa os limites documentados em `original-research.md`. Antes da expansão dos catálogos, os dados tinham 240 IDs únicos, vinte perguntas por eixo, dez orientadas a cada polo e peso `1` em todas. As seleções 36 e 60 têm três e cinco perguntas por eixo, respectivamente, com ambos os sentidos representados; as proporções por sentido não são idênticas em todos os eixos e estão descritas em `questions-methodology.md`.

## Compatibilidade e elegibilidade

`calculateSimilarity12full` preserva o cálculo bruto original sobre os doze eixos para compatibilidade com consumidores antigos. Os rankings usam uma pontuação condicional: somente contam os eixos com evidência `medium` ou `high`, fonte citada pelo título exato e justificativa não vazia. Um eixo sem esse conjunto completo de evidências não participa do cálculo, ainda que seu valor numérico seja `50`; já `50` com fonte e justificativa válidas pode representar neutralidade observada.

Os quatro componentes e seus pesos permanecem os documentados pelo README do projeto de referência: proximidade por eixo (0,42), direção (0,33), intensidade média (0,18) e maior divergência individual (0,07). No subconjunto documentado, a proximidade e a intensidade são médias sobre esses eixos; direção usa o cosseno centrado em 50 e o prior original de `8²` por eixo, escalado pela quantidade de eixos documentados; a maior divergência também é limitada ao subconjunto. Isso mantém a fórmula completa quando os doze eixos são documentados e evita que valores desconhecidos alterem o ranking.

Só entram no ranking perfis com pelo menos seis eixos assim documentados. A pontuação é condicional a essa cobertura, e não uma probabilidade ou endosso. Perfis com coberturas diferentes não são plenamente comparáveis: a cobertura é exibida, empates preferem mais eixos documentados e depois o ID estável. A distância reportada é `100 − similaridade condicional`, não a soma das diferenças individuais. Vetores continuam validados no intervalo de 0–100.

## Limites do que foi verificado

- O site original foi aberto em resultado compartilhado com todos os eixos em `50`; confirmou que a URL reproduz os doze valores e a apresentação centrada. A fórmula exata vem do README público oficial, não de instrumentação do servidor original.
- A fórmula original foi preservada como API explícita de doze eixos; a pontuação condicional do ranking não afirma paridade com o score bruto original quando há eixos desconhecidos.
- A fórmula e seus pesos não foram recalibrados para prever concordância real. Coberturas distintas limitam a comparação direta entre correspondências.
- Vetores de ideologias, figuras e países são estimativas editoriais por eixo com fontes, períodos e ressalvas. As fontes sustentam direção e contexto, não a precisão de um número específico. Uma proximidade alta não é probabilidade, endosso ou acordo com propostas.
- Pessoas históricas não responderam ao questionário; períodos contemporâneos descrevem registros delimitados. Ausência de fonte reduz elegibilidade para ranking, não autoriza inferir o polo oposto.
- Cada nova pergunta precisa preservar seu mapeamento original, eixo, polo e peso. Cada novo perfil deve fornecer os doze valores, manter cada um no intervalo de 0–100, e documentar fonte, período, ressalvas e evidência por eixo antes de entrar no ranking.
