# Segundo lote de figuras históricas: oito leituras primárias

Pesquisa em 2026-10-07. O módulo `src/data/reference-historical-figure-batch-02.ts` oferece oito novos perfis para revisão e integração. Seus IDs foram confrontados com os 51 perfis históricos do catálogo e com todos os módulos de dados, inclusive os não importados. A leitura não adiciona cópias de Truth, Du Bois, Wells, Mazzini ou de Gouges, identidades já disponíveis em módulos dormentes.

O recorte amplia geografia e tradição: reforma filipina e japonesa, programa argentino, argumento cristão de não violência, resolução antinuclear, organização trabalhadora anarquista, abolicionismo e igualdade profissional na Índia colonial. Não equivale a amostra representativa do mundo ou a fechamento da meta de 150.

## Fontes efetivamente consultadas

| Perfil | Documento primário / localização usada | Confirmação de identidade |
| --- | --- | --- |
| José Rizal | [The Philippines a Century Hence](https://www.gutenberg.org/files/35899/35899-h/35899-h.htm), parte III, pp. 70–81; original serial de 1889–1890, tradução de Charles Derbyshire, 1912 | [Registro NHCP](https://philhistoricsites.nhcp.gov.ph/registry_database/jose-rizal-1861-1896-2/), 1861–1896 |
| Yukichi Fukuzawa | [Keio: Gender Equality Basic Principles](https://www.keio.ac.jp/en/about/engagement/work-life-balance/initiatives/philosophy/), primeira citação, atribuída a *Nakatsu Ritsubetsu no Sho* (1870) | [Keio: Yukichi Fukuzawa](https://www.keio.ac.jp/en/about/philosophy/fukuzawa-en/), 1835–1901 |
| Domingo Faustino Sarmiento | [Facundo](https://www.gutenberg.org/files/33267/33267-h/33267-h.htm), programa final, pp. 318, 323 e 330; original de 1845, exemplar de 1921 | [Registro oficial do sepulcro](https://www.argentina.gob.ar/node/503454), falecimento em 1888 |
| Leo Tolstoy | [The Kingdom of God Is Within You](https://www.gutenberg.org/cache/epub/4602/pg4602-images.html), capítulo XII, tradução de Constance Garnett; prefácio datado de maio de 1893 | [Catálogo Gutenberg](https://www.gutenberg.org/ebooks/4602), 1828–1910 |
| Bertrand Russell | [Pugwash: Russell–Einstein Manifesto](https://pugwash.org/1955/07/09/statement-manifesto/), resolução e signatários, 1955-07-09 | [McMaster: Russell Archives](https://library.mcmaster.ca/node/238), 1872–1970 |
| Voltairine de Cleyre | [Selected Works](https://www.gutenberg.org/cache/epub/43098/pg43098-images.html), *Direct Action*, pp. 220–242, coletânea publicada em maio de 1914; também consultada [transcrição Pitzer/Anarchist Library](https://theanarchistlibrary.org/library/voltairine-de-cleyre-direct-action) | [Catálogo Gutenberg](https://gutenberg.org/ebooks/43098), 1866–1912 |
| Olaudah Equiano | [The Interesting Narrative](https://www.gutenberg.org/cache/epub/15399/pg15399-images.html), capítulo XII, petição e conclusão, 1789 | [Catálogo Gutenberg](https://www.gutenberg.org/ebooks/15399), 1745–1797; nascimento convencional não resolvido neste lote |
| Dadabhai Naoroji | [Hansard, 2 de junho de 1893](https://api.parliament.uk/historic-hansard/commons/1893/jun/02/civil-service-of-india-examination), fala de Naoroji, cc111–116; [cartas transcritas por Dinyar Patel](https://dinyarpatel.com/naoroji/letter-box/), a Slagg (1885) e Dutt (1903), usadas apenas como contexto | [Identificação Hansard](https://api.parliament.uk/historic-hansard/people/mr-dadabhai-naoroji/index.html), falecimento em 1917; não usamos seu dia discordante de outras cronologias |

Todas as fontes da tabela foram abertas e lidas. A consulta da página de Fukuzawa limita-se a um excerto autoral atribuído por instituição: não afirma leitura integral da obra. O manifesto de Russell é coletivo; a adesão como signatário, e não autoria exclusiva, sustenta o perfil. Para de Cleyre, o exemplar consultado data a coletânea, não o ensaio individual: mantemos essa distinção na data documental. A biografia introdutória de Rojas em *Facundo*, a introdução de Craig e o extrato de Jagor no volume de Rizal, e falas de outros parlamentares no Hansard não são declarações dos perfilados.

Os PDFs do volume de discursos de Naoroji e da revista *Indonesian Affairs* com discurso de Hatta retornaram erro tanto na abertura pelo navegador quanto na transferência local (403). Não são descritos como lidos. Hatta não foi incluído; Naoroji usa o registro parlamentar primário acessível. Páginas do Nobel e do catálogo da Penn também falharam na abertura e foram substituídas por páginas institucionais acessíveis.

## Codificação e limite de completude

Aplicamos [editorial-ordinal-v1](reference-coding-protocol.md), com confiança independente da intensidade. O módulo guarda afirmação, localizador, edição/data, acesso, base declarativa, justificativa, incerteza e os eixos não resolvidos. Cada `ReferenceEntry` recebe `coding`, `axisEvidence` e `evidence` apenas nos eixos documentados. O resto fica em 50 sem evidência; não representa centrismo nem pontuação equilibrada por intuição.

| Perfil | Eixos codificados propostos | Eixos documentados |
| --- | --- | ---: |
| Rizal | rep 60; pod 40; mor 60 | 3 |
| Fukuzawa | mor 60 | 1 |
| Sarmiento | pod 40; com 40 | 2 |
| Tolstoy | dip 20; pod 20; rel 20 | 3 |
| Russell | dip 40 | 1 |
| De Cleyre | eco 80; pod 40 | 2 |
| Equiano | mor 60; rel 40 | 2 |
| Naoroji | mor 60 | 1 |

São quinze eixos documentados e 81 desconhecidos nos oito perfis. Nenhum chega a seis: zero elegíveis para matches. Fontes biográficas confirmam identidade histórica sem gerar valores. Abolicionismo e igualdade de gênero/profissional são subtemas morais, portanto ficam moderados; soberania colonial não vira doutrina universal de intervenção. A preocupação nuclear não vira rejeição tecnológica e a crítica eleitoral não vira autocracia.

A revisão independente de construção aceitou as leituras após correção do localizador de `com` de Sarmiento: a abertura internacional explícita das pp. 317–318, para Paraguai, Uruguai, Inglaterra e França, substitui desenvolvimento dos transportes internos como fundamento. A passagem foi reaberta e lida; não extrapolamos uma política geral de tarifas. O localizador de `pod` de de Cleyre passou a incluir explicitamente organização livre e resistência à coerção militar. A revisão documental do Root precede a integração, ainda pendente. Verificações mecânicas de esquema e rastreabilidade não substituem esse julgamento.

Validação do lote isolado: importação executa o validador de codificação; nenhum ID coincide com o catálogo; os 81 eixos sem codificação têm valor 50 e nenhuma evidência; valores codificados correspondem às âncoras auditáveis. O helper real de matches confirma quinze eixos documentados e zero elegíveis. Build TypeScript/Vite aprovado; suite existente com 28 testes aprovados, zero falhas e 49.632 verificações. A suite ainda valida o catálogo anterior à integração deste lote; a verificação específica do módulo é separada e explícita.
