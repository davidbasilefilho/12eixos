# Revisão histórica de qualidade 02 — proposta sem importação

Estado: **pendente de revisão independente e aceitação do Root**. Nenhum import, alteração do catálogo, Git ou publicação. Data de elaboração: 2026-10-08. Não acrescenta identidades nem presume conclusão da meta675.

Os três registros existentes repetiam uma descrição geral como justificativa de vários eixos. A proposta arquiva os objetos completos anteriores em `legacyHistoricalQuality02OriginalRecords`, preserva a união de fontes, neutraliza todas as dimensões ativas e reconstrói apenas códigos documentais localizados. A função conserva os demais campos do registro recebido; não restaura valores antigos sem fonte específica. O snapshot é arquivo, não validação dos códigos antigos.

| Registro | Códigos antigos | Propostos | Desconhecidos | Passa seis códigos, se aceitos |
|---|---:|---:|---:|---|
| Franklin D. Roosevelt | 6 | 6 | 6 | sim, condicional |
| Martin Luther King Jr. | 7 | 3 | 9 | não |
| Thomas Sankara | 6 | 7 | 5 | sim, condicional |

16 códigos propostos /20 dimensões desconhecidas. São âncoras moderadas40/60 de `editorial-ordinal-v1`, não percentuais observados. O helper valida a estrutura das citações; não prova a inferência ou torna o registro substantivamente qualificado. Todos os desconhecidos permanecem50 sem evidence, axisEvidence ou coding. A contagem definitiva depende das rejeições e reparos da revisão.

## Ledger de consulta efetiva

**Roosevelt:** leitura do [primeiro discurso inaugural](https://avalon.law.yale.edu/20th_century/froos1.asp), corpo18–52; [Four Freedoms](https://voicesofdemocracy.umd.edu/fdr-the-four-freedoms-speech-text/), parágrafos1–91; [pronunciamento de1944](https://millercenter.org/the-presidency/presidential-speeches/january-11-1944-fireside-chat-28-state-union), corpo48–121, sem reivindicar a abertura; [mensagem comercial de1934 reproduzida pela Tariff Commission](https://www.usitc.gov/sites/default/files/publications/332/otap_1_part_2_optimized.pdf), apêndiceA, pp.63–66/PDF71–73, corpo2652–2735. São textos presidenciais adotados, não atribuição de redação solitária. Data do volume1948 não substitui a data da mensagem1934. O antigo endereço `fdrlibrary.org/address1944` não abriu; `fdrlibrary.marist.edu/archives/address_text.html` retornou502. A fonte antiga permanece preservada, sem alegar consulta bem-sucedida. As alternativas institucionais acessíveis sustentam os novos códigos.

**King:** [Beyond Vietnam](https://www.hawaii.edu/mauispeech/html/mlkbeyondvietnam.html), corpo12–116 integral efetivamente lido; [The Other America de1967](https://www.crmvet.org/docs/otheram.htm), corpo7–100 lido; [versão de Grosse Pointe de1968](https://gphistorical.org/mlk/mlkspeech/mlk-gp-speech.pdf), corpo130–303/PDFpp.3–7 lido. Não reivindica leitura da abertura1–129 do PDF1968. As versões são documentos distintos. Stanford antigo retornou404; AmericanRhetoric não abriu. Hawaii registra erro no ano do Nobel e corrige na nota final; não se utiliza essa passagem para identidade. Introduções editoriais, intervenções da plateia e versos citados de terceiros não são declarações políticas autorais codificadas. A campanha de Washington é mencionada no corpo241–262 do PDF, mas o trecho não detalha um programa geral de propriedade ou alocação.

**Sankara:** [programa de1983](https://www.thomassankara.net/the-political-orientation-speech-thomas-sankara/?lang=en), corpo52–93 e110–283; [discurso de1987](https://www.thomassankara.net/la-liberation-de-la-femme-une/?lang=en), corpo45–113 e130–263. Não reivindica leitura dos intervalos omitidos. Host memorial de reprodução, não instituição governamental nem edição crítica. O programa1983 é coletivo, adotado e pronunciado por Sankara; a introdução editorial não recebe códigos. A tradução inglesa de1983 contém erros: exige confronto independente das passagens decisivas. A reprodução1987 identifica tradução Pathfinder1990; prefácio editorial não atribuído a Sankara. A fonte antiga de dívida1987 permanece arquivada, sem afirmar que fundamenta os sete novos eixos.

## Questões materiais para revisão

As inferências por eixo estão explicitadas no módulo, com locadores, razões distintas e contrapesos. Prioridades do revisor:

- Roosevelt `pod60`: coerção emergencial nacional versus garantias civis expressas; o programa de guerra não pode ser projetado como posição permanente. `con60` trata alocação, sem promover welfare a propriedade pública. `com40` é abertura recíproca com salvaguardas.
- King: os três códigos documentam democracia, guerra e intervenção. Retira imi/eco/con/mor antigos: antirracismo não prova preservação de práticas culturais; renda garantida não prova direção global da propriedade/alocação; crítica moral à guerra não prova costumes sexuais. Nenhuma fabricação de três novos eixos para conservar elegibilidade.
- Sankara `est40/rep40`: distinguir comando nacional, autonomia administrativa e eleições locais; `pod60` não decorre apenas de conscrição. `mor60` usa vários costumes familiares do discurso1987, não apenas participação em cargos. Controle produtivo não estabelece propriedade pública. Não inferir posição LGBT/aborto.

Identidades existentes não são novas inclusões: não se usa profissão ou reputação para recodificação, nem reabre aqui uma investigação biográfica completa. Recortes passam a1933–1944,1967–1968 e1983/1987; não reivindicam medida homogênea de toda a carreira.

## Verificação

`tsc --noEmit` passou. Verificação Bun confirmou igualdade JSON literal dos três snapshots com os registros ativos, ausência de mutação de entradas, preservação de identidade e união exata de fontes antigas, além de todas as20 dimensões desconhecidas em50 sem metadados. Códigos por registro:6/3/7. Essa validação não substitui o juízo substantivo independente. A fonte do catálogo ativo continua sendo a integração do Root, não esta proposta.

## Reparos após leitura independente FDR/Sankara

Revisor public_continue reabriu as seis URLs e passagens codificadas: aceita FDR6 e Sankara7 condicionados aos reparos, aplicados2026-10-08. FDRcon1933 agora nomeia precisamente transporte/comunicação/serviços públicos33 e bancos/crédito/investimentos34; o controle amplo de capital/mão de obra1944 permanece base separada. Sankaradip preserva explicitamente defesa armada203–215 (operacional206/territorial215), junto a não agressão270 e solidariedade273–277. King3 continua com escopo de revisão próprio; Root ainda julga integração. Snapshots originais intactos.

## Aceitação Root parcial e congelamento

Root aceitou explicitamente FDR6 e Sankara7 após os reparos acima. Esses13 códigos estão congelados para integração local datada, sem equivaler a toda carreira/prática. King3 ainda depende do relato independente de leitura; não presume aceitação de King pelo juízo dos outros dois, nem acrescenta três eixos para elevá-lo a seis. A aplicação do overlay completo cabe ao Root após confirmar essa terceira revisão.

## Aceitação completa e entrega para integração

Após a leitura própria de King registrada em `docs/reference-peer-review-historical-quality-02-public.md`, Root aceitou os16 códigos: FDR6/King3/Sankara7. Módulo inteiro congelado para integração local; King nove desconhecidos continua sem elegibilidade. Fontes antigas e snapshots completos preservados. Não contar esses checks técnicos como validação de práticas.

## Guarda conservadora antes da integração

Por solicitação Root/repair, o reconciliador agora retorna exatamente o objeto de entrada se houver qualquer codificação localizada não vazia, após conferir a identidade. Evita sobrescrever recodificação útil posterior e torna reaplicação idempotente por identidade de objeto. Os três registros ativos foram consultados de fato: todos tinham `coding` vazio. Bun sobre essas entradas reais confirmou6/3/7, não mutação, união de fontes, reaplicação exatamente inalterada e preservação de alternativa posterior codificada. tsc passou. Snapshots históricos literais continuam intactos; seus códigos genéricos arquivados não servem como entrada para a nova aplicação conservadora.

Atualização autoral autorizada Root: rationale ativo agora resume as posições programáticas específicas de Roosevelt, King e Sankara. Reconciliador repara somente o texto de manutenção anterior exatamente correspondente, mantendo qualquer descrição substantiva posterior. Verificação Bun contra os três objetos ativos: todos os campos fora de rationale idênticos, reaplicação preserva objeto; TypeScript passou. Nenhuma mudança numérica, de passagens, fontes ou snapshot.
