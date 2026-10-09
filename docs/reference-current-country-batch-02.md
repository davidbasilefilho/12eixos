# Países atuais — lote 02

Pesquisa consultada em 7/10/2026. Dez identidades nacionais ausentes dos 130 países atuais já integrados; nenhuma ilha autônoma foi contada separadamente. Este lote é integrável via `currentCountryBatch02`, com metadados `coding` anexados, mas aguarda revisão e integração pelo Root. Preencher identidade não conclui o perfil: 13 eixos documentados, zero novos elegíveis ao comparador. Não há alteração do limiar de seis eixos.

| Perfil | Codificação delimitada | Prática contrária / limite |
| --- | --- | --- |
| Belize | rep 80: competição, alternância e eleições municipais multipartidárias | Corrupção e abuso policial; não inferir segurança pelo rótulo democrático. |
| Bahamas | rep 80: democracia estável e alternância documentada; eco 40: descrição institucional do setor privado | Financiamento eleitoral opaco; descrição econômica é contexto de 2023, sem proporção de propriedade medida. |
| Barbados | rep 80: eleições competitivas | Fiscalização prejudicada por ausência de oposição após 2022; Constituição de 2007 anterior à reforma republicana, não pontuada. |
| Antígua e Barbuda | rep 60: eleições com desigualdade persistente de circunscrições e financiamento; est 40: autonomia local protegida | Pressão do governo nacional sobre autonomia e terras de Barbuda; não é federação. |
| Dominica | rep 60: democracia com reformas eleitorais criticadas por omissões substantivas | Não reduzir democracia por permanência partidária desde 2000; cadastro e financiamento são os limites usados. |
| Granada | rep 80: eleições regulares críveis | Corrupção e discriminação; decisão judicial contra punição corporal não pontua todo eixo de segurança. |
| São Cristóvão e Névis | rep 80: eleições competitivas; est 80: competências legislativas exclusivas de Névis e desenho federal | Constituição 106(2)/107(2) preserva prevalência nacional em política geral e segurança; federalismo assimétrico. |
| Santa Lúcia | rep 80: competição e alternância pacífica | Desigualdade entre circunscrições, corrupção e impunidade policial. |
| São Vicente e Granadinas | rep 80: eleições e alternância | Criminalização de relações do mesmo sexo e difamação, sem inferir automaticamente todos os costumes. |
| Trinidad e Tobago | rep 80: parlamentarismo e alternância documentada | Corrupção e emergência no fim de 2024; episódio não representa sozinho todo o eixo de liberdade. |

Os números são âncoras ordinais do protocolo `editorial-ordinal-v1`, não medidas publicadas pelas fontes. Cada inferência tem proposição, localização, data, base normativa/prática, ressalva e fonte no arquivo TypeScript. Desconhecidos continuam 50 sem evidência. Relatórios de 2025 são abreviados: somente texto narrativo efetivamente lido foi usado, nunca questionários numéricos ou pontuações agregadas.

## Fontes efetivamente abertas e passagens

Para cada país foram abertos [Freedom in the World 2025](https://freedomhouse.org/report/freedom-world/2025) e a Constituição primária em tradução do Comparative Constitutions Project. Os links específicos estão no objeto `sources` de cada perfil; o índice do relatório não é substituto dessas fontes.

| País | Constituição e passagem lida | Narrativa institucional lida |
| --- | --- | --- |
| Belize | [1981/rev. 2011](https://www.constituteproject.org/constitution/Belize_2011?lang=en), §§1,56 | [2025](https://freedomhouse.org/country/belize/freedom-world/2025), Overview e março de 2024 |
| Bahamas | [1973](https://www.constituteproject.org/constitution/Bahamas_1973?lang=en), arts.72–74 | [2025](https://freedomhouse.org/country/bahamas/freedom-world/2025), Overview; [2024](https://freedomhouse.org/country/bahamas/freedom-world/2024), A2/B2/G2 narrativos |
| Barbados | [1966/rev.2007](https://www.constituteproject.org/constitution/Barbados_2007?lang=en), §41 | [2025](https://freedomhouse.org/country/barbados/freedom-world/2025), Overview e retorno de oposição em fevereiro |
| Antígua e Barbuda | [1981](https://www.constituteproject.org/constitution/Antigua_and_Barbuda_1981?lang=en), §123 | [2025](https://freedomhouse.org/country/antigua-and-barbuda/freedom-world/2025), Overview, aeroporto e explicação narrativa A3 |
| Dominica | [1978/rev.2014](https://www.constituteproject.org/constitution/Dominica_2014?lang=en), §33 | [2025](https://freedomhouse.org/country/dominica/freedom-world/2025), Overview e pacote eleitoral de dezembro |
| Granada | [1973/rev.1992](https://www.constituteproject.org/constitution/Grenada_1992?lang=en), §58 | [2025](https://freedomhouse.org/country/grenada/freedom-world/2025), Overview e decisões de 2024 |
| São Cristóvão e Névis | [1983](https://www.constituteproject.org/constitution/St_Kitts_and_Nevis_1983?lang=en), §§103,106,107,113 e Schedule5/Part1 | [2025](https://freedomhouse.org/country/st-kitts-and-nevis/freedom-world/2025), Overview; [portal governamental](https://www.gov.kn/the-constitution/), apresentação da federação |
| Santa Lúcia | [1978](https://www.constituteproject.org/constitution/St_Lucia_1978?lang=en), §33 | [2025](https://freedomhouse.org/country/st-lucia/freedom-world/2025), Overview |
| São Vicente e Granadinas | [1979](https://www.constituteproject.org/constitution/St_Vincent_and_the_Grenadines_1979?lang=en), §27 | [2025](https://freedomhouse.org/country/st-vincent-and-the-grenadines/freedom-world/2025), Overview e decisão de fevereiro |
| Trinidad e Tobago | [1976/rev.2007](https://www.constituteproject.org/constitution/Trinidad_and_Tobago_2007?lang=en), §51 | [2025](https://freedomhouse.org/country/trinidad-and-tobago/freedom-world/2025), Overview; [2024](https://freedomhouse.org/country/trinidad-and-tobago/freedom-world/2024), A2/B2 narrativos |

Limites de recuperação: tentativas de slugs `Saint_Kitts...`, `Saint_Lucia...` e `Saint_Vincent...` falharam; os slugs `St_...` acima foram abertos com sucesso. Um portal alternativo de Névis falhou; não foi citado. Não foi produzida cópia imutável das páginas nesta etapa. Abertura de texto antigo não comprova vigência de todas suas disposições; contexto constitucional geral fica sem pontuação, e as duas inferências territoriais declaram precisamente seu escopo e limites.

Validação local: TypeScript sem erros e `git diff --check` limpo após materialização. Revisão documental independente e auditoria de duplicatas/integração cabem ao Root antes da importação. Próximo trabalho é ampliar fontes e eixos efetivamente sustentados, além das dez identidades seguintes; 150 identidades não seria conclusão de cobertura.
