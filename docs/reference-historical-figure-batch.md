# Lote documental de quatro figuras históricas

Revisão documental: 2026-10-07. Os quatro perfis deste módulo foram aceitos pelo Root e integrados ao catálogo em `src/data/references.ts`, conforme confirmação do responsável pela integração. A seleção atende lacunas verificadas entre os registros existentes e os módulos ainda não usados. Não representa diversidade suficiente para fechar a meta de 150 figuras históricas.

Cada perfil delimita uma obra e sua edição, em vez de atribuir à vida inteira uma posição fixa. Identidade e falecimento foram conferidos separadamente dos textos que sustentam orientação política. As oito páginas/documentos abaixo foram efetivamente abertos durante a pesquisa; nenhuma classificação deriva apenas de biografia, profissão ou rótulo ideológico.

| Perfil / recorte | Texto primário consultado | Identidade histórica |
| --- | --- | --- |
| Emma Goldman — ensaios de 1910 | [Anarchism and Other Essays](https://www.gutenberg.org/files/2162/2162-h/2162-h.htm), especialmente *Anarchism: What It Really Stands For* e *Marriage and Love* | [National Archives, Papers of Emma Goldman](https://www.archives.gov/nhprc/projects/catalog/emma-goldman), 1869–1940 |
| Henry David Thoreau — ensaio de 1849 | [Resistance to Civil Government](https://www.gutenberg.org/files/71/71-h/71-h.htm), título original e data informados no cabeçalho | [National Archives, registro censitário de 1850](https://www.archives.gov/dc/highlights/thoreau-census), 1817–1862 |
| William Morris — conferência de 1884 | [Useful Work versus Useless Toil](https://www.marxists.org/archive/morris/works/1884/useful.htm) | [Victoria and Albert Museum](https://www.vam.ac.uk/articles/introducing-william-morris), 1834–1896 |
| William Godwin — volume I, primeira edição de 1793 | [Political Justice, PDF da Online Library of Liberty](https://oll-resources.s3.us-east-2.amazonaws.com/oll3/store/titles/90/Godwin_0164-01_EBk_v6.0.pdf), livros III–IV | [Stanford Encyclopedia of Philosophy](https://plato.stanford.edu/entries/godwin/), falecimento em abril de 1836 |

## Como reproduzir a codificação

O módulo `src/data/reference-historical-figure-batch.ts` preserva, por eixo, o título exato da fonte, edição/data, data de acesso, localizador, paráfrase limitada, base declarativa, justificativa, confiança e incerteza. Os localizadores de HTML usam título do ensaio e início de parágrafo; os de Godwin usam capítulo e paginação no rodapé da edição digital, não número físico do PDF. A biografia de Havel incluída no volume de Goldman não fundamenta eixos.

Aplicamos [o protocolo de codificação](reference-coding-protocol.md) por `codeReferenceAxis`. `editorial-ordinal-v1` produz âncoras ordinais, não percentuais observados nem respostas imputadas às 240 perguntas. A confiança documental permanece distinta da intensidade da posição. Uma fonte primária explícita pode ter cobertura parcial de um eixo contemporâneo; nesses casos a intensidade é moderada ou o eixo fica desconhecido. `historicalFigureBatchCoding` conserva a trilha auditável completa.

| Perfil | Eixos documentados / âncoras | Limite de cobertura |
| --- | --- | --- |
| Goldman | pod 20; eco 60; rel 80; mor 60 | Associação voluntária não implica Estado central; casamento e autonomia cobrem um subtema moral, codificado moderadamente. |
| Thoreau | pod 40; mor 60 | Governo melhor ainda é admitido; abolicionismo cobre uma parte da moral, sem extrapolar gênero ou outros costumes. |
| Morris | eco 80; con 60 | Propriedade comunitária não implica estatização central; coordenação por necessidades não descreve um sistema completo de preços. |
| Godwin | pod 40 | Necessidade pode justificar força; primeira edição, volume I, sem importar doutrina de outros volumes ou revisões. |

Há nove eixos documentados em quatro perfis. Os outros 39 permanecem em 50 **sem evidência**, portanto não indicam centrismo. Os vetores não usam o 50 para equilibrar intuitivamente posições nem pontuam cada eixo por associação ideológica. A crítica ao voto não vira autocracia, oposição à guerra específica não vira pacifismo universal, e artesanato não vira rejeição da tecnologia.

Nenhum perfil possui seis eixos documentados: zero perfis deste lote elegíveis para matches. O gate existente continua intacto. A revisão independente de construção aceitou os nove eixos, com uma correção: a intensidade moral de Goldman foi reduzida a moderada, porque o texto citado cobre um subtema. Após a integração, o responsável confirmou 28 testes Bun aprovados e zero falhas, com 49.632 verificações. A validação mecânica verifica esquema, fontes/locadores, valores e ausência de duplicatas, mas não substitui juízo documental.
