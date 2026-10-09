# Lote de seis países atuais — 7/10/2026

O inventário real foi inspecionado antes da pesquisa. Cabo Verde, São Tomé e Príncipe, Seychelles, Comores, Djibouti e Eswatini não tinham perfil atual nos módulos integrados. São seis Estados nacionais, sem multiplicar regiões autônomas nem aliases. Maurício já existia e foi excluído da seleção.

`src/data/reference-current-country-batch.ts` exporta seis perfis e seus registros auditáveis de codificação. Usa a [rubrica ordinal versionada](reference-coding-protocol.md), discutida com o agente responsável pela metodologia: 20/40/60/80 representam classes editoriais das faixas já documentadas, sem tratar números de terceiros como respostas ao questionário. A função compartilhada valida a ligação entre cada proposição, fonte, localização, data, incerteza e âncora. Após revisão do Root e correção das ressalvas temporais, os seis perfis foram integrados ao catálogo local em `src/data/references.ts`, incluindo seus metadados `coding`.

## Fontes efetivamente lidas e resultado

| País | Texto constitucional primário em tradução | Prática institucional em 2024 | Eixos codificados |
| --- | --- | --- | --- |
| Cabo Verde | [Constituição, redação de 1992](https://www.constituteproject.org/constitution/Cape_Verde_1992?lang=en) | [Freedom in the World 2025](https://freedomhouse.org/country/cabo-verde/freedom-world/2025) | rep 80; somente prática eleitoral |
| São Tomé e Príncipe | [Constituição, rev. 2003](https://www.constituteproject.org/constitution/Sao_Tome_and_Principe_2003?lang=en) | [Freedom in the World 2025](https://freedomhouse.org/country/sao-tome-and-principe/freedom-world/2025) | est 40, rep 80, rel 80 |
| Seychelles | [Constituição, rev. 2017](https://www.constituteproject.org/constitution/Seychelles_2017?lang=en) | [Freedom in the World 2025](https://freedomhouse.org/country/seychelles/freedom-world/2025) | rep 80; somente prática eleitoral |
| Comores | [Constituição de 2018](https://www.constituteproject.org/constitution/Comoros_2018?lang=en) | [Freedom in the World 2025](https://freedomhouse.org/country/comoros/freedom-world/2025) | est 40, rep 40, rel 20 |
| Djibouti | [Constituição, rev. 2010](https://www.constituteproject.org/constitution/Djibouti_2010?lang=en) | [Freedom in the World 2025](https://freedomhouse.org/country/djibouti/freedom-world/2025) | rep 20 |
| Eswatini | [Constituição de 2005](https://www.constituteproject.org/constitution/Swaziland_2005?lang=en) | [Freedom in the World 2025](https://freedomhouse.org/country/eswatini/freedom-world/2025) | est 20, rep 20 |

Foram abertas as doze páginas; todos os relatórios de 2025 estavam abreviados. Seu agregado não foi convertido em score do produto. As proposições e ressalvas, inclusive contrárias às promessas constitucionais, estão no módulo tipado, evitando duplicar resumos aqui.

## Limites resolvidos sem reduzir o gate

A edição cabo-verdiana de 1992 indica emendas posteriores. A tentativa de abrir uma suposta edição `Cape_Verde_2010` falhou; o lote não apresenta esse endereço como fonte nem pontua cláusulas antigas como prática de 2024. Seychelles recebeu emendas eleitorais em outubro de 2024, segundo o relatório lido. Por isso sua edição constitucional de 2017 oferece contexto, enquanto apenas a prática eleitoral recebeu codificação.

São Tomé e Comores não receberam um score federal apenas por possuir ilhas autônomas: o enquadramento unitário e as competências regionais justificam a classe moderada do segundo polo. Eswatini não recebeu centralização por ser monarquia: a evidência específica de subordinação local aos chefes influenciados pelo rei complementa o texto unitário. A edição djibutiana de 2010 também indica emendas posteriores: sua cláusula religiosa foi preservada apenas como contexto não codificado.

Onze eixos receberam codificação documental; todos os outros permanecem desconhecidos. **Nenhum dos seis perfis atinge o gate de seis eixos; não há novos matches elegíveis.** Os perfis são resultados reais de pesquisa institucional limitada, não vetores totalmente preenchidos nem declaração de conclusão da meta de 150 países atuais.

Dados por eixo, localizadores, natureza normativa ou prática, versão documental, data de acesso e incertezas ficam em `currentCountryBatchCoding`. Proposições adicionais não pontuadas ficam em `uncodedClaims`: incluem economia mista sem predominância identificada, declaração de paz sem prática militar verificada e liberdade religiosa sem separação estatal demonstrada.

As páginas de membros da ONU consultadas retornaram erro/403 nesta sessão; não foram listadas como fontes lidas. A seleção não depende de incluir territórios disputados ou subnacionais. Publicação, pushes e implantação estão fora deste lote local.
