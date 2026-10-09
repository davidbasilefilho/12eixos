# Figuras públicas: lote documental de 7 de outubro de 2026

Este lote acrescenta **quatro dossiês não pontuados**, com 19 alegações vinculadas a fontes primárias, em `src/data/reference-public-research.ts`. Não acrescenta entradas ao catálogo público, vetores, elegibilidade para matches ou percentuais. A metodologia existente reconhece estimativas editoriais, mas não define uma regra numérica reproduzível para converter estes documentos em valores de 0 a 100; inventar essa conversão seria preencher a lacuna com precisão sem fundamento.

Foram pesquisados Ilhan Omar, Rashida Tlaib, Ayanna Pressley e Ro Khanna. Antes da inclusão, busca por IDs e sobrenomes em `src/data` não encontrou registros dessas pessoas. São pessoas públicas vivas apresentadas por seus próprios gabinetes ou campanhas atuais; o recorte é documental e não depende de manterem um cargo particular. Os dossiês não são importados por `references.ts` e possuem um tipo incompatível com `ReferenceEntry`, sem campo `vec`.

## Fontes efetivamente lidas e localização

| Pessoa | Fonte primária consultada | Trechos registrados | Recorte e ressalva |
| --- | --- | --- | --- |
| Ilhan Omar | [Issues — gabinete na Câmara](https://omar.house.gov/issues) | Immigration; Workers and Economy; Education; Environmental Justice; Healthcare; Foreign Policy | Página sem data; posições presentes na consulta. Quatro eixos com alegações, oito ainda não resolvidos. |
| Rashida Tlaib | [Justice for All](https://tlaib.house.gov/resources/justice), [Ending Poverty](https://tlaib.house.gov/resources/ending-poverty) | My Position on Justice for All; JFA Civil Rights Act, itens 4 e 7; My Position on Ending Poverty; BOOST Act | JFA identificado pelo texto como proposta reapresentada em 2023. A página não mostra data de publicação. Cinco eixos com alegações, sete não resolvidos. |
| Ayanna Pressley | [Economia](https://ayannapressley.com/issues/jobguarantee/), [aborto](https://ayannapressley.com/issues/lgbtq/), [política externa](https://ayannapressley.com/issues/protecting-the-rights-of-cisgender-and-transgender-women-and-girls/), [imigração](https://ayannapressley.com/issues/immigration/) | Parágrafo Federal Job Guarantee; dois parágrafos sobre aborto; primeiro e quarto da política externa; segundo sobre imigração | Plataforma sem datas; economia menciona recuperação de COVID-19. Cinco eixos com alegações, sete não resolvidos. URLs inconsistentes com títulos foram verificadas pelo conteúdo, não interpretadas pelo slug. |
| Ro Khanna | [Ro’s Platform](https://rokhanna.com/en/platform) | Medicare for All; National Industrial Bank; Keeping Factories in America; Lower Prices; Cut the Pentagon Budget; Support Ukraine and Taiwan; Ensure U.S. naval superiority; Keep humans in the loop; Regulate AI | Plataforma sem data de publicação. Cinco eixos com alegações; sete não resolvidos. Comércio, diplomacia e tecnologia têm alegações mistas, sem direção única. |

Todos os documentos da tabela foram abertos e lidos com a ferramenta web em **2026-10-07**. Essa data é de consulta, não de autoria, lançamento ou início de vigência. Os localizadores legíveis estão também em cada alegação tipada; números de linha de ferramentas web não foram usados como identificadores persistentes. Conteúdo mutável deve ser novamente conferido antes de promoção ao catálogo.

## Evidência excluída e limites

A [página Health Care de Tlaib](https://tlaib.house.gov/resources/health-care) foi lida, mas seu compromisso genérico com acesso a atendimento não demonstra um modelo de propriedade ou financiamento: não foi usada para codificar `eco`. As páginas temáticas do gabinete de Khanna não puderam ser lidas pelo navegador de pesquisa (403/inacessibilidade); a plataforma de sua campanha, acessível, é a fonte utilizada. Diretórios de temas, notícias vinculadas e identidade religiosa não foram convertidos em alegações políticas.

As inferências de direção nos dossiês são hipóteses editoriais estreitas vinculadas à política nomeada, não graus `high`/`medium`, estimativas pessoais abrangentes ou confirmação de implementação. Uma proposta pode sustentar parte de um eixo sem resolvê-lo integralmente. Cargo eletivo não demonstra, por si só, democracia; financiamento federal não demonstra desenho federalista; redistribuição não demonstra nacionalização; regulação de IA não resolve Tecnologia/Biologia. O eixo `int`, cujos polos são Não intervencionista/Nacionalista, permanece não resolvido nos quatro casos.

Este é um lote de conveniência documental de quatro figuras dos EUA, não uma amostra global representativa. Não satisfaz a meta de 150 figuras públicas nem elimina as lacunas regionais. Quatro candidatos documentados não devem ser somados aos registros integrados nem descontados como conclusões da lacuna de 112 apresentada no diagnóstico inicial.

## Próxima revisão necessária

1. Estabelecer e publicar a regra de codificação numérica, incluindo cobertura parcial, ambiguidades e políticas conflitantes, antes de qualquer vetor.
2. Conferir identidade, aliases, permanência da condição de pessoa viva e datas das propostas no momento da promoção.
3. Corroborar propostas importantes com textos legislativos ou pronunciamentos datados e reunir documentação para os eixos não resolvidos sem atribuir centro artificial.
4. Aplicar o gate vigente de fonte exata, justificativa e cobertura mínima de seis eixos somente após a revisão; estes dossiês não o satisfazem e não alteram esse gate.

Validação estrutural local confere IDs únicos e ausentes do catálogo, URLs HTTPS, vínculo de cada alegação com fonte existente e partição dos 12 eixos entre alegações e não resolvidos. O build TypeScript/Vite também inclui o novo módulo, ainda que ele não seja carregado pelo produto.
