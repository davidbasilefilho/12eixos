# Auditoria delimitada de fontes — 7 de outubro de 2026

Este checkpoint parte do `main` remoto `eae7f1f3a53af6a70ee5168ce20b576a49355e5c`. Não recupera nem substitui o checkpoint privado indisponível. A auditoria cobre os destinos e os perfis abaixo; não valida todas as fontes do catálogo. Fontes foram inspecionadas com a ferramenta de navegação. Falha de acesso da ferramenta não prova que uma URL deixou de existir.

## Catálogo integrado

### Rússia — Yeltsin (`russia-yeltsin`)

A URL HTTP de constitution.ru causava duas falhas estruturais. O HTTPS do mesmo destino aparece indexado, mas duas aberturas falharam; a tentativa de transporte no workspace foi bloqueada pelo proxy. Não foi feita uma troca cega de protocolo.

Substituição: [texto constitucional histórico de 1993 preservado pela Bucknell University](https://www.departments.bucknell.edu/russian/const/constit.html). A abertura e o [capítulo 1](https://www.departments.bucknell.edu/russian/const/ch1.html) foram bem-sucedidos. O índice registra a ratificação em 12 de dezembro de 1993; não usamos uma consolidação de 2020 para representar 1991–1999.

Artigos 1 e 3 sustentam a regra formal democrática (`rep`); artigo 8 sustenta concorrência e liberdade econômica (`con`). Os valores editoriais existentes nesses dois eixos foram preservados, com justificativas específicas. O artigo 8 reconhece formas diversas de propriedade, sem provar extensão da privatização. `eco=17` perdeu a graduação e passou a `50` desconhecido; a alegação de privatização acelerada saiu da justificativa. Não há inferência automática de execução real a partir da Constituição. Restam dois eixos sustentados; o perfil permanece fora dos matches ranqueados.

### México — PRI (`mexico-pri-hegemony`)

O endereço INEHRM em `/Anexos/Independencia/` não foi recuperado e o caminho não delimita a hegemonia do PRI. Substituição contextual: [Javier Garciadiego, Historia mínima de las elecciones en México, publicação do INE](https://portal.ine.mx/wp-content/uploads/2022/02/deceyec-cm39.pdf), aberto como PDF de 118 páginas. Páginas 56–58 situam a transformação PRM→PRI em 1946; páginas 80 e 92–93 distinguem reformas, autonomia eleitoral em 1996, mudança parlamentar em 1997 e alternância presidencial em 2000.

O ID, o recorte presidencial 1946–2000 e `rep=41` permanecem; o caveat agora explicita as fases. A justificativa de eixo usa o estudo do INE, não atribui prática histórica ao texto constitucional atual. O valor é estimativa editorial ampla, não competição democrática constante durante 54 anos. O recorte merece futura divisão por fases antes de qualquer aumento de cobertura.

### Espanha — Segunda República (`spanish-second-republic`)

A URL primária do Congresso foi substituída pela [Gaceta de Madrid de 9 de dezembro de 1931, acervo BOE](https://www.boe.es/gazeta/dias/1931/12/09/pdfs/D00001-00014.pdf). O PDF original foi aberto, com 14 páginas; vetores e graduações foram preservados. A fonte contextual do Congresso permanece, sem afirmação de sucesso na recuperação. Locadores e limites de interpretação adicionais constam de `reference-expansion-historical-researched.md`.

### Estatismo Shōwa (`showa-statism`)

A antiga URL Columbia em `/cu/weai/exeas/` não pôde ser aberta. Substituição verificada: [Asia for Educators — seleções de Kokutai no Hongi, 1937](https://afe.easia.columbia.edu/ps/japan/kokutai.pdf), PDF de cinco páginas. A ficha identifica o documento ministerial de 1937 e a tradução de Sources of Japanese Tradition (2005), pp. 968–969 e 975. O metadata foi corrigido para indicar seleções, não a tradução integral. Não houve aumento de graduações nem troca de valores. Recuperar o texto não valida automaticamente cada interpretação do vetor.

### Declaração do Rio (`civic-precaution`)

A [URL primária existente](https://www.un.org/en/development/desa/population/migration/generalassembly/docs/globalcompact/A_CONF.151_26_Vol.I_Declaration.pdf) não pôde ser aberta. Outros destinos oficiais `www.un.org` devolveram 403, incluindo o documento ligado pelo arquivo jurídico; isso é limitação de acesso, não prova de documento inexistente. O [arquivo jurídico oficial da ONU](https://legal.un.org/avl/ha/dunche/dunche.html) foi aberto e identifica a declaração de 14 de junho de 1992 e o documento A/CONF.151/26 (Vol. I), anexo I. A fonte primária existente foi preservada: não trocamos o texto por um comentário contextual.

Continua pendente comprovar a correspondência de `pod`, `eco` e `con` com os construtos do produto: prevenção ambiental, por si, não estabelece política de segurança/liberdades, propriedade pública nem planejamento econômico. Sem inspeção primária completa, este checkpoint não confirma essas graduações.

## Pesquisa preservada, ainda não integrada

Os quatro perfis abaixo existem em `reference-people-northamerica.ts` e `reference-people-asia.ts`, mas não são importados pelo catálogo integrado. Os reparos não alteram o total live nem sua elegibilidade. Valores sem graduação passam a 50 pelo construtor existente; identidades, fontes úteis e posições sustentadas foram preservadas.

| Perfil | Correção | Eixos sustentados após a revisão |
| --- | --- | --- |
| `na-john-c-calhoun` | Assimilação não decorre de hierarquia racial; propriedade de escravizados não define política econômica geral; retórica religiosa não estabelece religião estatal. O antigo `est=9` também contradizia a autonomia estadual invocada na fonte. Removidos `imi`, `eco`, `rel` e `est`; fonte inacessível do Senado substituída por transcrição primária verificada. | `rep`, `mor` (2) |
| `na-susan-b-anthony` | Gutenberg #15220 é a biografia de Ida Husted Harper de 1899, não History of Woman Suffrage por Anthony/Stanton/Gage. Recorte limitado à fala de Anthony reproduzida no julgamento de 1873. Removidos `est`, `dip`, `rel`. | `rep`, `pod`, `mor` (3) |
| `na-jack-layton` | Recorte limitado às intervenções orçamentárias de 24/03/2011. Removidos `est`, `rep`, `pod`, `dip`, `int`, sem inferir posições por filiação partidária. | `eco`, `con`, `mor` (3) |
| `mao-zedong-1940-new-democracy` | Solidariedade revolucionária internacional não demonstra não intervenção. Removido `int=88`; nenhum valor oposto foi inventado. | `rep`, `dip`, `eco`, `con`, `mor` (5) |

[Discurso de Calhoun, 6 de fevereiro de 1837 — transcrição do Ashbrook Center](https://teachingamericanhistory.org/document/slavery-a-positive-good/): os trechos sobre jurisdição congressional e defesa da escravidão sustentam os limites acima. A defesa da hierarquia racial não equivale a uma política cultural de assimilação. As justificativas específicas substituem o template genérico somente neste perfil.

[Harper, The Life and Work of Susan B. Anthony, vol. I, capítulo XXV](https://www.gutenberg.org/files/15220/15220-h/15220-h.htm): a fala ao juiz Hunt, pp. 439–441, reivindica voto, representação, consentimento, igualdade entre sexos e garantias processuais. Distinguimos a fala primária reproduzida da narrativa biográfica. Esses trechos não sustentam graduações de federalismo, pacifismo ou secularismo.

[Hansard canadense, sessão 148 de 24 de março de 2011](https://www.ourcommons.ca/DocumentViewer/en/40-3/house/sitting-148/hansard): falas das 11h35–11h40 e 14h30 sobre saúde, pensões, desemprego, programa nacional de habitação e condições indígenas sustentam provisão pública, planejamento parcial e inclusão. Participar do Parlamento não prova, por si, preferências em democracia, federalismo, coerção ou política militar/externa. A interpretação mantém graduações médias; não verifica os números exatos.

[Mao, On New Democracy, 1940](https://www.marxists.org/reference/archive/mao/selected-works/volume-2/mswv2_26.htm): seção IV trata da revolução mundial e assistência internacional. Esse argumento não estabelece abstinência de intervenção externa. O eixo foi deixado desconhecido, sem inverter seu score.

## Verificação

- `/tmp/12eixos-tools/node_modules/.bin/bun test`: **22 passaram, 0 falharam**; 46.651 assertions, duas suites, após os reparos de dados.
- Importação explícita dos módulos preservados confirma 50 nos eixos retirados, ausência de graduações/mappings correspondentes e inelegibilidade dos quatro perfis com o limiar existente de seis eixos. Não houve redução do limiar.
- Runtime integrado neste checkpoint de fontes: **494 entradas, 59 estruturalmente elegíveis**. A estrutura não prova validação histórica/documental de todas as 59 entradas.
- Esta auditoria não acrescenta registros nem declara alcançada a meta de 675. Nenhum push, merge ou deploy foi realizado.
