# Reconciliação do catálogo — checkpoint local de 7 de outubro de 2026

## Proveniência e recuperação

A base disponível é `davidbasilefilho/12eixos`, commit remoto main `eae7f1f3a53af6a70ee5168ce20b576a49355e5c`. O catálogo executado nessa base contém **494 entradas e 59 estruturalmente elegíveis**. Esse resultado foi calculado sobre `referenceEntries`, após correções do legado e preparação dos módulos de expansão, usando o mesmo gate do comparador.

O checkpoint anterior `efbd435891fbc62d8e55cd34b1baf3e4ff56cbe`, identificado no Library como `libfile_0093ee6ea19481918b216280571a8019`, foi descrito no handoff como **363 entradas e 48 elegíveis**. Duas tentativas de download pelo fluxo de recuperação do Library não disponibilizaram o conteúdo. Esses números são informação de handoff, não resultado reproduzido nesta sessão. Preservamos a identidade do checkpoint indisponível; não apresentamos diff, merges, fontes recuperadas nem supostos registros exclusivos dele. Uma diferença aritmética de totais não identifica adições ou perdas entre essas bases.

O trabalho local reconstrói a partir da base remota verificável, preserva registros úteis e não depende de recuperação pelo usuário. Não houve push, merge nem publicação. Os 22 rascunhos de pesquisa mencionados no handoff também não foram recuperados e não são contabilizados como dados integrados.

## Campos, gate e significado das contagens

Cada registro tem `id`, `kind`, `category`, nome, aliases opcionais, período, vetor nos 12 eixos, justificativa, ressalvas e fontes com título/URL/nota. `evidence` indica força por eixo; `axisEvidence` liga títulos exatos das fontes a uma justificativa específica. `kind` mantém os três grupos matemáticos, enquanto `category` oferece cinco recortes editoriais.

O gate efetivo em `src/lib/matching.ts` exige **seis eixos** com grau `medium` ou `high`, justificativa não vazia e títulos mapeados que coincidam exatamente com fontes citadas. O comparador calcula similaridade somente nesses eixos documentados. Eixos desconhecidos não equivalem a moderação comprovada. A preparação das expansões centra em 50 e remove o grau de eixos sem mapeamento suficiente, sem descartar o registro.

“Estruturalmente elegível” significa que os campos passam por esse gate. Isso não comprova que a URL responde, que o documento é autêntico, que o trecho sustenta a alegação nem que o número exato é calibrado. Textos produzidos por templates podem passar pelo gate sem explicar especificamente a direção de um eixo. O inventário automatizado não substitui leitura documental e revisão editorial.

## Metas e baseline reproduzida

| Categoria | Meta de identidades | Entradas em main | Elegíveis | Lacuna de identidades* | Excesso preservado |
| --- | ---: | ---: | ---: | ---: | ---: |
| Países atuais | 150 | 124 | 0 | 26 | 0 |
| Países e governos históricos | 150 | 79 | 0 | 71 | 0 |
| Figuras públicas | 150 | 38 | 18 | 112 | 0 |
| Figuras históricas | 150 | 47 | 16 | 103 | 0 |
| Ideologias distintas | 75 | 206 | 25 | 0* | 131 |
| Total | 675 | 494 | 59 | 312* | 131 |

\* Lacunas quantitativas anteriores à revisão semântica das identidades. Os 206 nomes de ideologia não demonstram por si só 75 doutrinas distintas. A meta não é alcançada por renomear a mesma doutrina, repetir uma pessoa ou incluir várias versões atuais de um país. O excesso de ideologias fica disponível e não compensa lacunas nas outras categorias. Sem remoções, preencher essas 312 identidades produziria pelo menos 806 registros; chegar a um total bruto de 675 não basta para cumprir as cinco metas.

O snapshot local atualizado, IDs, aliases, períodos, fontes, eixos documentados, elegibilidade e problemas ficam em `docs/catalog-audit.json`. O quadro acima descreve exclusivamente a base remota, independentemente das correções posteriores. O campo `integratedCatalogSha256` identifica o conteúdo integral executado; `baselineCommit` preserva a base remota verificada e `headCommitAtAudit` registra o HEAD local; a árvore de trabalho pode conter mudanças ainda não commitadas. Execute `bun scripts/catalog-audit.ts` para atualizar. O script retorna status 1 quando detecta problemas, e não corrige dados automaticamente.

## Snapshot histórico inicial após reparos (494 registros)

| Categoria | Base remota: entradas / elegíveis | Local: entradas / elegíveis |
| --- | ---: | ---: |
| Países atuais | 124 / 0 | 124 / 0 |
| Países e governos históricos | 79 / 0 | 79 / 0 |
| Figuras públicas | 38 / 18 | 38 / 18 |
| Figuras históricas | 47 / 16 | 47 / 16 |
| Ideologias | 206 / 25 | 206 / 25 |
| Total | 494 / 59 | 494 / 59 |

O conteúdo integrado mudou, mas as contagens não: as correções de fontes/períodos e um eixo econômico sem sustentação no perfil histórico russo não criam novas identidades nem mudam a elegibilidade. O hash final do conteúdo integrado é `6ab01d2cbde485c01382049364aa4f64a05be7f61c1ab0627eeece8968e9a433`.

Os quatro perfis de pessoas reparados nos módulos de Ásia e América do Norte não estão integrados por `referenceEntries`; sua revisão não reduz nem aumenta os 59 matches disponíveis. Dossiês adicionais de pesquisa permanecem separados do catálogo. Consulte `docs/source-repair.md` para o escopo documental efetivamente revisado. Nenhuma dessas revisões pontuais certifica externamente o conjunto de 59 elegíveis.

Na verificação inicial desse snapshot, o inventário não encontrou IDs/aliases literais duplicados, incompatibilidade de categoria, vetor fora da escala nem URL sem HTTPS. Nesse momento persistiam 209 eixos legados direcionais sem mapeamento suficiente, em 35 perfis, enumerados no inventário daquele momento. Por isso aquela execução retornou status 1. Isso é dívida documental declarada; a suite do produto, executada pelo agente de reparos, passou com **22 testes e zero falhas**, e o build foi confirmado pelo Root. O script não navega fontes nem verifica semântica de ideologias.

## Snapshot local posterior e qualificação substantiva

O inventário salvo em `docs/catalog-audit.json`, associado ao HEAD `8e9929e278d783c86d959e78d30bd82759265f97`, contém **658 registros e 77 estruturalmente elegíveis**, com zero problemas estruturais registrados. Hash do conteúdo executado: `f1a22206c7ce30d7225c749d786b5dff178760b5c78fbfe7ee29c202ddb46203`. É um snapshot anterior à revisão substantiva em andamento; alterações posteriores devem ser verificadas no JSON e em seus relatórios, sem substituir a baseline remota acima.

| Categoria | Registros | Elegibilidade estrutural nesse snapshot |
| --- | ---: | ---: |
| Países atuais | 150 | 13 |
| Países históricos | 118 | 0 |
| Figuras públicas | 95 | 18 |
| Figuras históricas | 89 | 21 |
| Ideologias | 206 | 25 |

A auditoria substantiva posterior encontrou, entre os 77 estruturalmente elegíveis, somente 24 com pelo menos seis alegações codificadas com locadores; 53 tinham zero alegações desse tipo. Esse diagnóstico de metadados está em `../12eixos-deliverables/legacy-eligibility-substantive-review-658.json` e **não certifica a leitura ou a adequação das fontes desses 24**. Justificativas gerais repetidas, mesmo com um sufixo de eixo, não sustentam seis posições distintas. A revisão preserva IDs, fontes e estimativas originais em snapshots recuperáveis; eixos sem suporte específico revisado devem permanecer desconhecidos no uso ativo, sem afirmar que a opinião original foi refutada.

A meta de inventário de 675 exige 150 identidades válidas em cada um dos quatro grupos de países atuais, países históricos, figuras públicas e figuras históricas, além de 75 definições ideológicas materialmente distintas. É necessária proveniência política efetiva, com conteúdo normativo, programático ou institucional realmente lido em fonte primária ou reprodução identificada, autoria e período compatíveis. Uma lista de fontes ou biografia que somente confirma identidade não conclui esse requisito. Perfis com um a cinco eixos sustentados são inventário válido e permanecem fora do ranking; conteúdo político qualitativo documentado também pode ser preservado com eixos desconhecidos. A exigência de seis eixos para todos os 675 continua uma decisão não tomada, adiada até completar inventário, proveniência e interface.

O matching mantém o limiar de pelo menos seis eixos codificados consistentemente. Cada eixo usado exige documento efetivamente lido ou reprodução primária identificada, autoria e período compatíveis, trecho/locador preciso, correspondência ao construto, direção editorial justificada, abrangência e magnitude adequadas ao eixo inteiro no objeto comparado e contraevidência relevante preservada. Norma ou proposta pode sustentar um perfil explicitamente normativo; não comprova prática institucional. Metadados de codificação são necessários ao filtro documental, mas não certificam autenticidade ou adequação da fonte. Nenhum total estrutural é automaticamente o número de perfis substantivamente verificados. Inventário político documentado, elegibilidade para matching e revisão humana devem ser contados separadamente.

## Critérios de identidade e taxonomia

1. **País atual:** uma identidade política nacional com recorte contemporâneo explícito, não uma média de opiniões dos habitantes. Estados de reconhecimento disputado podem ser incluídos com status expresso; unidades subnacionais não contam como países adicionais. Um nome de país atual não garante que todas as políticas ainda estejam vigentes em 2026: preservar o recorte de 2024–2025 e marcar atualização pendente é preferível a alterar datas sem fontes.
2. **País ou governo histórico:** uma ordem, regime ou governo encerrado, com início/fim e objeto institucional identificados. O projeto já aceita governos de países ainda existentes. Recortes diferentes do mesmo Estado só contam separadamente se houver mudança substantiva documentada; não subdividir anos para satisfazer a quota. Verificar sobreposição com períodos existentes antes de integrar.
3. **Figura pública:** pessoa viva, uma identidade por pessoa, mesmo quando muda de cargo, partido ou nome. Perfil delimita produção/ação pública e não infere convicção privada. Situação vital deve ser confirmada em fonte datada na revisão individual; o script não a verifica.
4. **Figura histórica:** pessoa falecida, uma identidade por pessoa. Uma mudança de categoria preserva seu ID e fontes em vez de criar duplicata. Períodos de pensamento distintos entram nas ressalvas, não em múltiplas contagens da pessoa.
5. **Ideologia distinta:** doutrina ou tradição reconhecível em fonte primária e contexto acadêmico/institucional; sua tese constitutiva deve diferir de perfis já existentes. Manifesto de partido, autor, slogan, sinônimo, tradução, variante temporal ou intensidade numérica não bastam para comprovar nova doutrina. Uma família pode conter subtradições distintas, mas a justificativa deve explicar diferenças conceituais, não só valores do vetor. Aliases devem apontar à mesma identidade; a normalização literal do audit detecta alguns casos, não sinonímia conceitual.

## Evidência e codificação para próximos lotes

Começar por identidade e período, ler a fonte, registrar URL, título, data e trecho/seção pertinente, distinguir declaração, norma e execução e listar alegações limitadas ao documento. Uma constituição não comprova sua aplicação, e um portal genérico não comprova cada eixo. Fontes de contexto ajudam a confrontar normas com prática; fontes de outra época não devem ser transportadas para o período do perfil.

A metodologia existente oferece faixas editoriais aproximadas (10–25/75–90 para direção forte; 30–45/55–70 para moderada), mas não uma regra que derive números exatos de documentos. Não se deve criar precisão numérica ou preencher seis eixos para tornar um registro elegível. Até haver codificação específica justificável, dossiês candidatos ficam na fila de pesquisa. Uma identidade histórica documentalmente estabelecida pode ser preservada como registro arquivístico integrado, inclusive com doze eixos desconhecidos em 50, desde que tenha fonte de identidade, período, limites de acesso e ausência explícita de elegibilidade. É o caso de Portugal no lote histórico 05. Isso preserva pesquisa útil; identidade arquivística sozinha não comprova conteúdo político suficiente para concluir o inventário. Evidência política parcial efetivamente documentada pode contar no inventário sem tornar o perfil elegível, e não autoriza adicionar nomes sem evidência para aumentar contagens. Registros existentes sem evidência suficiente são preservados e não recebem elegibilidade artificial.

Aceitar cada lote somente depois de revisar identidade, período, leitura de fontes, adequação por eixo e integridade/testes; rerodar o inventário e preservar as limitações. Priorizar as lacunas de países atuais, países históricos e figuras, e auditar a distinção das ideologias já presentes antes de ampliar esse grupo. Nenhuma conclusão de “675 perfis completos” decorre deste checkpoint.

## Problemas preexistentes detectados

A execução inicial encontrou **209 eixos direcionais sem mapeamento documental suficiente, em 35 perfis legados**, e uma URL HTTP no perfil `russia-yeltsin`. Os vetores do legado não passam pela preparação aplicada às expansões. O gate impede usar esses eixos em matches, mas a documentação pública que afirma que todo eixo não documentado é 50 é mais estrita que os dados legados reais. Não inventamos `axisEvidence` para fechar essa lacuna nem apagamos em massa estimativas históricas úteis. O inventário inicial preserva a origem desses achados; o audit atual registra a situação após as correções posteriores.

Esses achados não implicam que as 59 entradas estruturalmente elegíveis foram validadas documentalmente nesta sessão. A auditoria de URLs/alegações dos 494 registros, a revisão semântica das 206 ideologias e o preenchimento de todas as quotas continuam pendentes.

Uma ocorrência setorial não define a orientação nacional de um eixo: existência de escola pública, hospital público ou regra pontual de financiamento não basta para estimar a economia nacional como predominantemente pública. Da mesma forma, participação feminina em um evento não demonstra uma orientação moral completa. Esses fatos permanecem úteis como pesquisa localizada; quando sua abrangência não sustenta o eixo inteiro, a posição ativa fica desconhecida. Ressalvas em prosa não reduzem o peso matemático de um eixo inadequadamente codificado. Não se muda a fórmula, a agregação ou o limiar de seis eixos para contornar essa insuficiência.
