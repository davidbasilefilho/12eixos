# Figuras históricas — lote documental 03

Data da leitura: 7 de outubro de 2026. Estado: módulo preparado, revisão independente de construto concluída nas passagens especificadas abaixo; aceitação do Root recebida e módulo importado no catálogo ativo pelo responsável pela integração. Não houve push, publicação ou remoção de registros.

O lote recupera dez identidades de módulos dormentes, sem carregar seus valores anteriores como evidência nova. `historicalFigureBatch03OriginalRecords` guarda cópias completas dos registros antigos: IDs, nomes, períodos, vetores, fontes, razões e ressalvas. As entradas propostas preservam IDs reais, inclusive o prefixo `na-` do construtor norte-americano. Checagem contra `referenceEntries` encontrou zero duplicatas por ID ou nome.

Há 30 eixos documentados e 90 desconhecidos, entre 120 possíveis. Mazzini tem seis eixos documentados e satisfaz o limiar mecânico para ranking; as outras nove entradas não. O lote foi aceito editorialmente pelo Root e está importado no catálogo ativo. Os desconhecidos ficam em 50 sem evidência; 50 não representa posição comprovada. Os valores são âncoras editoriais ordinais do [protocolo](reference-coding-protocol.md), não percentuais medidos. Confiança, intensidade e cobertura são registradas separadamente em `entry.coding`, com localização, data, argumento e incerteza. O limiar não mudou.

| Identidade preservada | Recorte primário efetivamente lido | Eixos propostos |
| --- | --- | --- |
| `na-sojourner-truth` | [Robinson, Anti-Slavery Bugle, 1851, reproduzido pelo NPS](https://home.nps.gov/articles/000/aint-i-a-woman-lesson-plan.htm), seção própria após a versão Gage | mor60, rel40 |
| `na-web-du-bois` | [The Souls of Black Folk](https://www.gutenberg.org/cache/epub/408/pg408-images.html), capítulo III | rep60, mor60 |
| `na-ida-b-wells` | [Southern Horrors](https://www.gutenberg.org/cache/epub/14975/pg14975-images.html), conclusão autoral e Self-Help | pod40, mor60 |
| `giuseppe-mazzini` | [On the Duties of Man, edição Recchia/Urbinati, 2009](https://virtuale.unibo.it/pluginfile.php/1797807/mod_unibores/content/0/1.%20Mazzini%201.pdf), Country/Liberty, pp. 94–98 | est20, rep80, rel20, mor60, pod40, int60 |
| `olympe-de-gouges` | [Declaration of the Rights of Woman](https://revolution.chnm.org/d/477/), artigos 1–17, tradução Hunt, 1996, projeto GMU | rep80, pod40, mor60 |
| `mao-zedong-1940-new-democracy` | [On New Democracy](https://www.marxists.org/reference/archive/mao/selected-works/volume-2/mswv2_26.htm), V–VI, janeiro de 1940 | rep40, eco80, mor60 |
| `salvador-allende` | [Fala individual à ONU](https://www.marxists.org/archive/allende/1972/december/04.htm), excertos traduzidos de 4/12/1972 | rep80, pod40, eco80, con60, mor60 |
| `ashoka-edicts` | [Éditos II, V, XII, XIII, tradução Dhammika](https://www.livius.org/sources/content/ashoka-s-rock-edicts/); [tradução comparativa do XIII, Oregon State](https://open.oregonstate.education/ancientcivilizations/chapter/edicts-of-ashoka/) | dip40, eco60, rel40 |
| `na-booker-t-washington` | [Up from Slavery](https://www.gutenberg.org/cache/epub/2376/pg2376-images.html), XIV, reprodução do discurso Atlanta de 1895 | mor60 |
| `na-robert-la-follette` | [Free Speech in Wartime](https://www.senate.gov/artandhistory/history/resources/pdf/FreeSpeechWartime.pdf), discurso autoral de 1917, pp. 522–523, 530–531, 539–540 | rep60, pod40, dip40 |

Cada alegação e sua justificativa de construto estão no módulo, sem depender desta tabela. Os perfis usam passagens de posicionamento político, não títulos profissionais ou fatos biográficos. Fontes de identidade confirmam falecimento: NPS, catálogos Gutenberg, apresentação UMass/GMU, MIA e contexto do Senado. Allende tem identidade 1908–1973 no resultado indexado do catálogo Memoria Chilena; sua abertura não forneceu texto. Não se usou resumo automático do Gutenberg para posicionamento.

## Correções e limites de fonte

A antiga referência Mazzini `https://www.gutenberg.org/ebooks/26029` foi reaberta e identifica **Printing and the Renaissance, de John Rothwell Slater**, não Duties of Man. A referência incorreta permanece no registro original de auditoria; não participa das fontes ativas nem de qualquer eixo proposto. O excerto UMass foi lido e comparado, mas dá cronologia 1844–1858 e omite tradutor/edição. Uma edição acadêmica primária mais completa, Recchia/Urbinati, 2009, foi então efetivamente aberta no repositório da Universidade de Bologna. A nota da p. 80 data os capítulos originais de Country em 1859 e Liberty em 1860. Esta edição adaptada de traduções anteriores sustenta agora os seis eixos nas pp. 94–98; o excerto UMass permanece somente como comparação textual e identidade. A diferença bibliográfica foi registrada, sem harmonizar datas silenciosamente.

O registro de Truth compara versões separadas: a contemporânea de Robinson, 1851, e a reconstrução de Gage, 1863. Só a primeira gera alegações neste lote, com confiança média por ser registro de terceiro. A página parlamentar antiga de Gouges não retornou texto legível; a tradução acadêmica alternativa foi efetivamente lida.

Allende foi reavaliado por discurso individual de 1972, e não simplesmente promovido pelos seis valores da plataforma coletiva de 1969. O PDF `https://digitallibrary.un.org/record/713297/files/A_PV-2096-EN.pdf` retornou 403; a fonte ativa tem excertos traduzidos, sem pretensão de versão integral oficial. Declarações sobre liberdades e nacionalização são autodescrições, identificadas como declarações, não auditorias de execução.

O texto de La Follette foi aberto pelo link do Senado e teve OCR legível em vinte páginas. Suas citações de outros estadistas não são tratadas como posições autorais exclusivas. Éditos de Ashoka são inscrições reais traduzidas, não comprovação independente de todos os resultados relatados, e as analogias com construtos modernos são limitadas.

## Revisão de construtos

A consulta preliminar ao agente de metodologia já eliminou duas extrapolações: o artigo de propriedade de Gouges não estabelece uma organização econômica predominante, e a solidariedade internacional de Mazzini não especifica política estatal de intervenção. Eco de Gouges permanece desconhecido. Após ampliar a leitura primária, int de Mazzini usa a regra explícita da p. 97 de Liberty contra intervenção externa forçada num povo que escolha tirania; pod usa garantias explícitas das pp. 97–98. Essas duas alegações novas foram reabertas e aceitas na revisão independente de construto. A revisão do texto de Mao também retirou con: propriedade e administração estatal não identificam mecanismo de planejamento ou alocação. Eco80 foi mantido para Mao e Allende por transformações estruturais explícitas, não por um único setor nacionalizado. A mesma revisão deixou rel de Washington desconhecido: exortação com Deus não basta para uma norma política guiada por autoridade religiosa. A inclusão revolucionária condicionada de Mao e a acomodação racial de Washington também não foram convertidas em médias artificiais de polos opostos. As respectivas ressalvas preservam os contrapesos textuais.

Identidade e cobertura continuam incompletas para a meta geral: nove figuras com uma a cinco dimensões documentadas e uma com seis não equivalem a dez perfis completos. A diversidade deste lote inclui Estados Unidos, Itália, França, China, Chile e Índia antiga; há concentração norte-americana na recuperação de registros existentes. Lotes posteriores precisam ampliar geografia e cobertura documental.

O agente de metodologia reabriu independentemente a edição Mazzini, as seções V–VI de Mao, o discurso Allende, o capítulo XIV de Washington e os éditos de Ashoka. As demais alegações receberam revisão de construto a partir dos registros localizados, sem alegação de que todos os trinta trechos foram reabertos por um segundo leitor. A leitura primária inicial de todas as alegações foi feita pelo autor deste lote. A aceitação de integração pertence ao Root.

## Validação local

O módulo executou no Bun: dez perfis, dez registros originais de auditoria, trinta eixos documentados, nenhuma duplicata ativa por ID/nome. Verificação de todos os eixos desconhecidos confirmou valor 50 sem evidência. `bun run build` passou com TypeScript e Vite; mantém o aviso existente de tamanho do bundle. `bun test` passou: 28 testes, zero falhas, 55.002 verificações no catálogo compartilhado daquele momento. Esta execução foi anterior à integração; a validação final do catálogo integrado pertence ao responsável por QA.
