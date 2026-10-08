# Revisão Root 36 — reconciliação do lote14

Base local anterior: `1f489de27057184b6e63184a47d6e4fe9c59be6e`. Este relatório fecha o lote14 antes da troca independente da seleção de 75 ideologias. Não certifica conclusão dos 675 perfis nem publicação.

Foram recuperados integralmente, pelo fluxo de leitura paginada da Library, os JSONs countries-evidence(1), figures-evidence(1) e ideologies-evidence(1). Os recibos conservam janelas, tamanho e SHA-256. A comparação das três entradas completas e dos priors precedeu a revisão dos 168 eixos. Fontes lidas diretamente nesta revisão, leituras declaradas no material nativo, trechos indexados e reaberturas falhas permanecem distinguidos nos relatórios; não se afirma leitura integral universal.

A integração aceita cinco módulos com guardas dos registros anteriores. Do catálogo de 818, somente 12 registros completos mudaram; os outros 806 permanecem idênticos, incluindo Adams, McKinley e todos os 86 perfis elegíveis anteriores. IDs, fontes anteriores completas, contrapontos e limites de período foram preservados. Houve 19 novas codificações documentais e cinco retiradas: IMI do Uruguai de 1919, REP de Aristóteles, DIP do maoísmo e REP/IMI de Rashida Tlaib. Não foram fabricados scores nem alterados o encoder ordinal, o scoring ou o gate mínimo de seis eixos.

Cinco perfis passam a ser elegíveis: Arábia Saudita, Brasil de 1946, Aristóteles, Jill Stein e Jeannette Jara. Samoa, São Cristóvão e Névis, Uruguai de 1919, Chile de 1828, Adams, McKinley, Tlaib, maoísmo e transumanismo continuam abaixo do gate. A revisão integral humana preservada e acrescentada alcança 91 perfis; o gate documental, sozinho, não constitui certificação substantiva.

| Categoria | Selecionados | Elegíveis | Pendentes |
| --- | ---: | ---: | ---: |
| Países atuais | 150 | 19 | 131 |
| Países históricos | 150 | 18 | 132 |
| Figuras públicas | 150 | 17 | 133 |
| Figuras históricas | 150 | 24 | 126 |
| Ideologias (seleção anterior provisória) | 75 | 13 | 62 |
| Total | 675 | 91 | 584 |

Restam pelo menos 2.946 posições de eixo sem evidência suficiente. As 143 alternativas ideológicas do catálogo permanecem preservadas. A pesquisa dedicada das 75 ideologias foi entregue separadamente e será reconciliada somente após este checkpoint; seleção não equivale a seis eixos certificados.

Validação: 1.151 verificações de preservação, 292 verificações de runtime, 124 verificações de imports isolados/guardas/idempotência, TypeScript e build aprovados, 36 testes passando (zero falhas; 109.357 assertions). Foram verificados 28 estados reais de navegador nos 14 perfis, em 390px escuro e 1440px claro, mais quatro controles de datas longas. Fontes, períodos, justificativas, estado parcial e exportações de 1440×1920 foram conferidos; zero erros ou avisos de console. Quatro screenshots receberam inspeção visual direta da raiz. O aviso existente de tamanho de bundle continua sem bloqueio; esta amostra não pretende provar conformidade WCAG universal.

A recuperação histórica indisponível `efbd435891fbc62d8e55cd34b1baf3e4ff56cbe` / `libfile_0093ee6ea19481918b216280571a8019` conserva sua identidade após duas falhas do fluxo suportado. Seus 363 registros/48 elegíveis não foram confundidos com o main verificado `eae7f1f3a53af6a70ee5168ce20b576a49355e5c` (494/59). A reconstrução partiu do remoto verificado, sem pedir recuperação manual e sem apagar registros úteis.

Este arquivo atesta o conteúdo local validado, antes do próprio commit. O SHA final e o eventual push autorizado serão registrados em recibos separados. A autorização posterior do usuário permite push na branch segura; não autoriza merge, deploy ou nova publicação de Site. Propostas antigas não importadas permanecem separadas e fora das contagens.
