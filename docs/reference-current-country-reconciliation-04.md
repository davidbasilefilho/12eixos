# Reconciliação documental de cinco países existentes — lote 04

Revisão de 7/10/2026. Cinco identidades existentes, **28 eixos codificados**, sem adição de país ou alteração do mínimo de elegibilidade. Âncoras editoriais ordinais não são porcentagens medidas. Integração depende da revisão do responsável pelo catálogo.

| ID | Eixos e âncoras | Total | ≥6 documentados |
|---|---|---:|---|
| singapore | rep40, pod60, rel60, com40 | 4 | não |
| indonesia | est40, rep60, pod60, rel40, imi40 | 5 | não |
| mexico | est80, rep60, pod60, imi40, eco60, con60, rel80, mor60 | 8 | sim |
| turkey | est40, rep40, pod60, eco60, con60 | 5 | não |
| saudi-arabia | rep20, pod80, rel20, mor40, eco60, con60 | 6 | sim |

Os demais campos recebem 50 **sem evidência**, indicando desconhecimento. A elegibilidade estrutural de dois registros não certifica cobertura das doze dimensões ou vigência contemporânea de normas históricas.

`currentCountryReconciliation04RawBefore` preserva os cinco objetos literais da base antes da preparação. `currentCountryReconciliation04LiveBefore` preserva os cinco objetos realmente integrados antes do reparo. Ambas as camadas guardam vetores, períodos, fontes e metadados completos. `currentCountryCodingAudit04` liga os dois estados à revisão. `reconcileCurrentCountry04` conserva IDs e fontes anteriores, acrescenta fontes por título + URL, e substitui vetor e metadados com as novas proposições.

## Fontes efetivamente lidas e limites

- **Singapura:** [FH 2025](https://freedomhouse.org/country/singapore/freedom-world/2025), Overview e acontecimentos de 2024. [MHA](https://www.mha.gov.sg/what-we-do/managing-security-threats/maintaining-racial-and-religious-harmony/), atualização 29/9/2026: princípio 2 do MRHA e regras de ordens restritivas. [Singapore Customs](https://www.customs.gov.sg/doing-business/valuation-duties-and-fees/duties-and-dutiable-goods/duties-and-dutiable-goods-overview/), atualização 9/3/2026: definição e categorias. Comércio cobre importações; GST é imposto de consumo. Constituição SSO retornou 403; página HDB falhou. Nenhum campo deriva de fragmentos de busca.
- **Indonésia:** [tradução constitucional oferecida pela Corte](https://en.mkri.id/download/constitution/constitution_1_1625426222_4c1e13f466840d7ed721.pdf), artigos 18, 29 e 32; recuperada via índice oficial após falha da URL legada. PDF de 25 páginas sem data editorial segura; última página tem OCR invertido. Norma oferecida em 2026 não constitui prova independente de consolidação ou implementação em 2024. [FH 2025](https://freedomhouse.org/country/indonesia/freedom-world/2025), A1/B1–B2/D1/D2/F2; texto, não notas. Artigo 33 não prova propriedade produtiva: eco permanece desconhecido.
- **México:** [Câmara, Constituição oficial](https://www.diputados.gob.mx/LeyesBiblio/pdf/CPEUM.pdf), 414 páginas, cabeçalho últimas reformas DOF 2/6/2026. Artigos 2, 4, 24–25, 40–41, 124 e 130 efetivamente lidos. [FH 2025](https://freedomhouse.org/country/mexico/freedom-world/2025), Overview/A1–A3/F2–F3. Criminalidade privada não foi confundida com coerção estatal; reforma de prisão preventiva e abusos de forças estatais são identificados separadamente. Não se inventou direito constitucional ao aborto.
- **Turquia:** [Constituição revista em 2017](https://www.constituteproject.org/constitution/Turkey_2017?lang=en), artigos 123, 126–127, 130, 166 e 169. Endereços oficiais da Corte/legislação falharam. Camada histórica de 2017, explicitamente separada da [prática de 2024, FH 2025](https://freedomhouse.org/country/turkey/freedom-world/2025), Overview/A1–A2 e acontecimentos. Artigos 24/136 lidos, mas religião permanece desconhecida: proibição de fundamento religioso do direito, agência religiosa estatal e currículo não são promediados arbitrariamente.
- **Arábia Saudita:** [tradução oficial da Lei Básica em Refworld](https://www.refworld.org/sites/default/files/2025-05/alnzam_alasasy_llhkm_1.pdf), 14 páginas, capa 2/3/1992 e apêndice de 2006/2017; árabe prevalece. Artigos 1, 7, 14, 23, 30–31, 44 e 48; edição não certifica vigência em 2026. [FH 2025](https://freedomhouse.org/country/saudi-arabia/freedom-world/2025), Overview e acontecimentos de 2024; páginas abreviadas não oferecem narrativa das perguntas e suas notas não foram convertidas. [PIF, estratégia 2026–2030](https://www.pif.gov.sa/en/strategy-and-impact/our-strategy/), objetivos e ecossistemas; declaração de coordenação de investimento, não resultado observado ou comando de toda produção. Artigo 41 sobre respeito cultural foi lido, mas não prova assimilação obrigatória: imi desconhecido após revisão.

A revisão de construto corrigiu os polos preliminares de poder e cultura antes da integração; valores finais seguem a orientação de `AXES`. Todas as codificações incluem locator, data/escopo, inferência e limites. Não há conversão automática de partidos, status FH ou rótulos constitucionais.

Validação local: TypeScript sem emissão e check comportamental Bun passaram. O check verifica cinco identidades, estados RAW/LIVE, preservação de fontes anteriores, 28 valores alinhados à codificação e ausência de evidência em desconhecidos. Nenhuma operação Git, push, merge ou deploy pelo pesquisador.
