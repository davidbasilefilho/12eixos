# Afirmações e versões do questionário

## Proveniência e contrato

As 240 afirmações foram recuperadas de [`questions-pool.json`](https://github.com/RomanCypherpunk/12axes/blob/f20c9ef/backend/src/main/resources/data/questions-pool.json), no commit `f20c9ef` do repositório público do 12 Axes. O questionário também foi aberto no navegador do produto original para confirmar que as afirmações são apresentadas uma por tela com cinco respostas. O catálogo possui 20 itens para cada um dos 12 eixos. Em `src/data/questions.ts`, cada registro conserva o `id`, `axisId`, `agreePole` e `weight` da fonte, além de `originalText` e `text`. Isso permite auditar cada mudança sem depender do site original.

`agreePole` indica o polo favorecido pela concordância. O texto reescrito preserva a política ou julgamento avaliado e sua direção. Não foi criado um questionário novo disfarçado do original. Os pesos originais são todos `1`. O arquivo contém 171 reformulações; os outros 69 textos foram conservados depois de avaliação individual por não terem linguagem cuja troca fosse claramente benéfica sem deslocar seu construto.

## Critérios de neutralização

Preferimos afirmações curtas e diretas em português brasileiro. Removemos termos que antecipavam um juízo de valor (por exemplo, “cidadãos honestos”, “meros executores”, “avanço civilizatório”, “roubo”, “decadência” quando havia formulação menos persuasiva), consertamos ambiguidades gramaticais e reduzimos absolutos retóricos quando não eram a política medida. Mantivemos absolutos substantivos quando são a posição política em exame: proibição, voto universal, deportação sem exceções e intervenções militares, por exemplo. Termos como “ditadura”, “aborto” e “genocídio” foram mantidos quando são parte necessária da posição.

A neutralização é editorial, não uma validação psicométrica. Reescrever itens pode alterar sua interpretação; antes de afirmar equivalência empírica seria necessário aplicar ambas as formas a amostras representativas e estimar invariância de medida. A catalogação preserva os metadados do algoritmo, mas não prova essa invariância.

## Seleção das versões curtas

`questionIds36` contém três itens por eixo; `questionIds60` contém cinco por eixo e inclui todos os 36. Cada eixo traz itens cuja concordância aponta para ambos os polos. Entre os 12 eixos, seis têm dois itens LEFT e um RIGHT na versão 36; os outros seis invertem a proporção. No conjunto atual de 60, quatro eixos têm proporção 3:2 e oito têm proporção 2:3. A seleção de 60 inclui todos os 36, então sua proporção agrega 28 itens LEFT contra 32 RIGHT. Não é equilibrada entre polos no agregado, embora cada eixo tenha itens de ambos os lados. A seleção foi feita por revisão semântica: preferimos políticas distinguíveis dentro de um mesmo eixo, evitamos repetir quase a mesma frase e incluímos posições moderadas e mais exigentes. Exemplos: em economia, propriedade pública de empresas, provisão privada de serviços e propriedade coletiva dos meios de produção medem graus diferentes; em moral, família, aborto, educação e papéis de gênero evitam que um só debate domine o eixo. A ordem armazenada agrupa por eixo; a interface pode intercalar os itens sem mudar sua seleção.

Os subconjuntos preservam comparabilidade **de escala**: usam o mesmo sentido de polos, as mesmas cinco respostas, os mesmos pesos e a mesma normalização por eixo que os 240. Não prometem equivalência de precisão. Três ou cinco itens por eixo têm maior incerteza e podem sofrer efeito de tema. O produto deve descrever 36 como leitura inicial, 60 como estimativa mais detalhada e 240 como cobertura total do catálogo, sem alegar precisão de 100%.

## Rastreabilidade

O identificador imutável liga cada item à fonte oficial. O par `originalText`/`text` registra até reformulações mínimas. `axisId`, `agreePole` e `weight` permitem verificar que uma mudança editorial não inverteu deliberadamente o cálculo. A base integral e os dois arrays de IDs são dados estáticos, executados no cliente. Não exigem transmissão de respostas.
