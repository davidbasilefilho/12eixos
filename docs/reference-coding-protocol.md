# Protocolo de codificação documental — 7 de outubro de 2026

Versão: `editorial-ordinal-v1`. Este protocolo operacionaliza as faixas já autorizadas em `reference-methodology.md`; não altera os vetores legados em massa, a fórmula de similaridade, os pesos nem o gate de seis eixos. É uma escolha editorial rotineira e reversível dentro da metodologia existente, não uma nova autorização atribuída ao usuário. O usuário autorizou continuar o trabalho documental, sem números fabricados nem flexibilização da evidência.

## O que é codificado

O objeto é uma posição editorial sustentada em um eixo, para uma identidade e período delimitados. Países descrevem instituições/políticas, figuras descrevem atuação e declarações públicas e ideologias descrevem uma tradição exemplificada por documentos identificados. Não imputamos respostas ao questionário. Não convertemos o score de Freedom House, renda, despesas militares ou palavras isoladas em valores dos 12 eixos.

Registrar uma alegação por passagem permite inspecionar a inferência. O [Manifesto Project descreve unidades textuais e categorias explícitas](https://manifesto-project.wzb.eu/tutorials/primer) e mantém [versões de suas instruções](https://manifesto-project.wzb.eu/information/documents/handbooks). Esses métodos motivam rastreabilidade e versionamento; suas categorias e percentuais de saliência não são o nosso vetor. A [metodologia V-Dem](https://www.v-dem.net/about/v-dem-project/methodology/) separa julgamento especializado e agregação; o [modelo de mensuração de 2026](https://www.v-dem.net/media/publications/wp21_2026.pdf) trata incerteza entre codificadores. Aqui não há esse modelo estatístico nem validação equivalente. As faixas abaixo são limites editoriais, não intervalos probabilísticos.

## Âncoras e força da evidência

| Posição editorial | Valor de representação | Faixa já documentada | Condição necessária |
| --- | ---: | --- | --- |
| Forte no segundo polo | 20 | 10–25 | Compromisso ou arranjo predominante explicitamente documentado; contraposição examinada |
| Moderada no segundo polo | 40 | 30–45 | Direção documentada e material, com limites/contrapesos relevantes |
| Moderada no primeiro polo | 60 | 55–70 | Direção documentada e material, com limites/contrapesos relevantes |
| Forte no primeiro polo | 80 | 75–90 | Compromisso ou arranjo predominante explicitamente documentado; contraposição examinada |

Escolher quatro âncoras discretas reduz precisão arbitrária. Não há uma diferença empiricamente demonstrada de 20 pontos entre entidades. A faixa declara o grau de resolução autorizado; selecionar 83 em vez de 80 exigiria justificativa adicional de calibração, inexistente neste protocolo. O sentido dos polos vem dos metadados reais: `est` federal, `rep` democrático, `pod` segurança, `imi` assimilação, `dip` militarismo, `int` não intervenção, `eco` propriedade/provisão pública, `con` planejamento, `com` protecionismo, `rel` irreligioso/laicidade institucional, `mor` progressista, `tec` tecnologia.

Força da posição e força da evidência são diferentes. `high` exige passagem diretamente pertinente e suporte claro à direção; `medium` indica suporte parcial/indireto explicitamente delimitado, sem contradição material não resolvida. Uma fonte direta pode documentar posição moderada. Uma norma explícita pode sustentar `high` para organização formal e não sustentar execução efetiva. Um eixo de objeto amplo coberto apenas por cláusula estreita exige ressalva e pode permanecer desconhecido.

`50` sem evidência significa desconhecido e fica fora da similaridade. `50` com evidência exige balanço misto efetivamente demonstrado, uma justificativa independente e os mesmos requisitos documentais; não é a média mecânica entre fontes conflitantes. A representação editorial do balanço admite resolução 45–55, acrescentada somente para esse caso explícito; não amplia os critérios de confiança. Um desacordo não resolvido sobre direção não autoriza chamar o eixo de neutro. Não preencher seis eixos para obter elegibilidade.

## Procedimento por eixo

1. Confirmar identidade, período e edição da fonte; separar data do documento, período referido e data de acesso/revisão.
2. Ler a passagem e registrar título exato, URL já citada, artigo/página/seção, paráfrase delimitada e tipo (`norm`, `practice` ou `declaration`). Uma fonte secundária institucional pode confrontar prática; fonte primária não é automaticamente mais adequada para execução.
3. Relacionar a alegação ao construto e a perguntas pertinentes do catálogo, preservando a direção. Identificar explicitamente o que ela não cobre. Exemplos: gasto público não prova propriedade pública; inovação não prova apoio a edição genética; pluralismo eleitoral não prova liberdade em todos os temas.
4. Procurar contraposição relevante no período. Não misturar regra e execução como duas observações equivalentes, nem aplicar um texto posteriormente emendado ao presente sem verificar a cláusula pertinente.
5. Justificar a direção e, separadamente, intensidade forte/moderada. A força não decorre só de linguagem enfática. Uma definição legal estrutural pode sustentar posição forte no recorte formal; uma promessa genérica não prova política forte executada.
6. Registrar âncora, faixa, confiança, incerteza, locators e data. Eixos sem esse conjunto ficam em 50 sem evidência. Revisar de forma independente antes da integração; essa revisão deve registrar o que leu, sem alegar dupla codificação estatística.

`src/lib/reference-coding.ts` oferece tipos e conversão explícita dessas posições. `codeReferenceAxis` exige claims localizadas, justificativa, incerteza e datas; confere que títulos pertencem às fontes. Isso valida a estrutura, não a verdade documental. O registro `coding` pode ser preservado em arquivo de auditoria; o helper devolve também os campos compatíveis com o comparador. Sua adoção não certifica automaticamente um perfil.

Os guards em runtime também recusam eixos, posições, graus de confiança e bases de alegação desconhecidos, datas impossíveis e IDs de perguntas inexistentes ou de outro eixo. Isso protege a importação futura contra campos que burlariam a tipagem estática; não transforma a verificação estrutural em julgamento de fonte.

## Critérios concretos e exemplos de aplicação

Federalismo exige examinar competências e autonomia territorial, além da palavra “federal” ou “unitário”. Autonomia municipal administrativa não equivale automaticamente a soberania federativa. Monarquia, sozinha, não prova centralização territorial. Religião exige regras de relação Estado–religião; religiosidade da população não se infere. Liberdade de culto não basta para provar laicidade, e religião estabelecida não basta para inferir teocracia.

O crosswalk pode registrar `relatedQuestionIds`: competências estaduais relacionam-se a `estrutura_01`, `estrutura_05` e `estrutura_16`; separação institucional a `religiao_01` e `religiao_03`; casamento igualitário a `moral_06`. Esses IDs apontam construtos, não respostas imputadas. Uma lei de idioma indígena tem pertinência a `imigracao_02`, porém não determina políticas de fronteira (`imigracao_03`) nem todas as regras de assimilação. Um plano de inclusão digital não estabelece a direção de `tecnologia_01` (nuclear/IA/genética), `tecnologia_03` (automação/emprego) ou `tecnologia_04` (alterações humanas). Evidência de um único subtema não deve receber intensidade forte no eixo inteiro sem cobertura adicional.

**Caso existente: Alemanha, eixo `est`.** Lei Fundamental, arts. 20(1), 30 e 70: definição federal, competências estaduais residuais e competência legislativa dos Länder. A inferência defensável é federalismo forte formal, âncora 80/faixa 75–90, se essa edição estiver verificada para o período. Isso não mede a distribuição efetiva de recursos e não prova outros eixos. O vetor legado não recebe certificado de precisão por coincidir com esse valor. A fonte oficial deve ser a edição consultada na revisão; duas tentativas deste agente de abrir espelhos oficiais falharam, portanto este exemplo é uma regra de aplicação a validar na revisão documental do lote, não uma alegação de nova leitura bem-sucedida nem alteração de dados.

**Caso de país ausente: Cabo Verde.** O [texto de 1992 em Constitute](https://www.constituteproject.org/constitution/Cape_Verde_1992), lido nesta revisão, indica no art. 2(2) separação Igreja–Estado e autonomia local; art. 1 define república unitária. A passagem autoriza uma âncora formal laica forte, 80/faixa 75–90, **para essa edição histórica**. O portal marca emendas posteriores: sem verificar cláusulas e vigência, não autoriza transportar essa codificação para 2024–2025. A autonomia local impede concluir centralização máxima só pelo termo unitário. Por isso o lote contemporâneo pode integrar outros eixos pesquisados com fontes do período e deixar `est`/`rel` desconhecidos. Isto é uma decisão de evidência temporal, não uma necessidade de aprovação do usuário.

## Limites e status de revisão

`structurally-eligible` significa somente que os campos passam pelo gate. `documentary-reviewed` significa que passagens, período, identidade, direção, intensidade e conflitos foram efetivamente revisados, com escopo declarado. `not-reviewed`, `partial` e `unsupported` devem conservar seu significado: falta de campos não comprova falsidade, URL ativa não comprova alegação, e fonte que sustenta direção não valida um número legado exato. O audit dos 209 eixos legados é uma lista de dívida estrutural; sua resolução exige leitura por eixo ou retirada desse eixo do uso, preservando o vetor anterior recuperável.

Não há decisão material pendente do usuário para começar lotes com este protocolo. Se uma ambiguidade real de construto impedir um eixo, omiti-lo e continuar os demais é permitido. Uma mudança global de construto, fórmula, gate ou modelo de mensuração seria uma decisão separada; ela não é necessária para integrar identidades e posições sustentadas agora.
