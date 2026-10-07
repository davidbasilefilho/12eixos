# Figuras históricas — lote documental 04

Leitura em 7 de outubro de 2026. Dez identidades ausentes do catálogo ativo foram pesquisadas e preparadas para revisão independente. Estado: módulo isolado, sem importação no catálogo ou operações de Git/publicação. Os valores são âncoras ordinais do [protocolo de codificação](reference-coding-protocol.md), não percentuais observados.

Após a primeira revisão de construto, a validação mecânica encontra 38 eixos documentados, 82 desconhecidos e nenhuma duplicata ativa por ID ou nome. Kropotkin tem seis eixos e satisfaz mecanicamente o limiar de ranking; os outros nove não. Isso ainda depende da revisão documental e de construto. O limiar de seis eixos não mudou. Desconhecidos permanecem em 50 sem evidência; não são posições centristas comprovadas.

| Identidade | Texto primário efetivamente lido | Localizadores | Proposta após revisão |
| --- | --- | --- | --- |
| Albert Luthuli | [Africa and Freedom, 1961](https://sahistory.org.za/archive/africa-and-freedom-1961) | As a Christian; When the Christian churches; Our vision, cláusulas 1–3; conclusão | rep80, pod40, mor60, dip40 |
| Samora Machel | [The Liberation of Women, 1973](https://www.marxists.org/subject/africa/machel/1973/liberation-women.htm) | 1b, 2a–c, 3a | eco80, mor60, rel60 |
| Kofi Annan | [Nobel Lecture, 2001](https://www.kofiannanfoundation.org/publication/kofi-annan-nobel-lecture/) | We thus inherit; The rights of the individual; Only in a democratic environment; People of different religions; This will not be possible | rep80, pod40, mor60, imi40 |
| Desmond Tutu | [The Question of South Africa, ONU, 23/10/1984](https://sourcebooks.web.fordham.edu/mod/1984tutu.asp) | By no stretch; We deplore; We dream; I appeal; We ask you | rep60, pod40, mor60, dip40 |
| Apolinario Mabini | [The True Decalogue, edição póstuma de 1922](https://www.gutenberg.org/files/14660/14660-h/14660-h.htm) | First, Fourth, Seventh, Eighth | rep80, rel20 |
| David Ben-Gurion | [Declaração coletiva assinada, 14/5/1948](https://avalon.law.yale.edu/20th_century/israel.asp) | WE DECLARE that, with effect; THE STATE OF ISRAEL; WE APPEAL to the Arab inhabitants; WE EXTEND | rep60, pod40, imi40, dip40, mor60 |
| Immanuel Kant | [Perpetual Peace](https://www.gutenberg.org/cache/epub/50922/pg50922-images.html) | preliminares 3/5, pp. 110–114; primeiro definitivo, pp. 124–128; segundo suplemento, pp. 159–160 | dip40, int60, rep60, pod40 |
| Thomas Hobbes | [Leviathan, 1651](https://www.gutenberg.org/cache/epub/3207/pg3207-images.html) | XIX Comparison of Monarchy with Sovereign Assemblies; XVIII consequência 6; XXI liberdades residuais | rep40, pod80 |
| John Locke | [Second Treatise, 1689](https://www.gutenberg.org/cache/epub/7370/pg7370-images.html) | V §§27–33; XI §§134–137; XIII §§149/154–155 | rep60, pod40, eco40, rel40 |
| Piotr Kropotkin | [The Conquest of Bread, edição 1926](https://www.marxists.org/reference/archive/kropotkin-peter/1892/bread.htm) | prefácio assinado janeiro de 1913; 2.1/3.1–2/10.2/14.1 | est80, eco80, pod20, con60, mor60, tec60 |

O módulo contém alegações curtas, fontes, datas, justificativas e incertezas para cada eixo, além da lista de construtos não resolvidos. Preserva sete registros dormentes completos em `historicalFigureBatch04OriginalRecords`, sem transportar seus vetores. Luthuli, Annan e Tutu eram candidatos de arquivo sem vetor: seus registros originais ficam separadamente em `historicalFigureBatch04OriginalCandidates`. Nenhum registro útil ativo foi sobrescrito.

## Rastreabilidade e limites

A pesquisa distingue fonte primária de contexto biográfico. Falecimentos foram confirmados em SAHO para Luthuli, Machel e Tutu; comunicado da família/fundação para Annan; catálogos Gutenberg para os quatro autores europeus; introdução póstuma de Mabini; cronologia institucional BGU para Ben-Gurion. Apenas os textos de posicionamento geram orientação.

Os endereços Nobel de Luthuli e Tutu não forneceram leitura acessível. Luthuli teve transcrição primária completa no SAHO. O arquivo SAHO da palestra Tutu contém PDF de quinze páginas sem texto extraível nesta ferramenta; a página de aceitação exibia metadados sem discurso. Esses itens não sustentam eixos. A fonte alternativa realmente lida é outra fala: Conselho de Segurança, 23 de outubro de 1984, reproduzida em Africa Report, janeiro–fevereiro de 1985, pp. 50–52, e transcrita no projeto acadêmico Fordham. A diferença de documento e data foi mantida.

As páginas Knesset de Ben-Gurion e da declaração redirecionaram a manutenção geográfica; o PDF governamental excedeu o limite da ferramenta. A alternativa lida foi a reprodução Yale da declaração, com assinatura nominal. Trata-se de endosso coletivo, sem atribuir autoria exclusiva nem confundir garantia declarada com cumprimento. A cronologia BGU confirma falecimento em 1973.

O texto de Mabini está em edição da Philippine Press Bureau de 1922. A data revolucionária exata da redação não aparece; o período e cada alegação declaram essa incerteza. A introdução biográfica não é confundida com o decálogo. A versão Kant inclui longa introdução e notas da tradutora Mary Campbell Smith: as alegações usam somente as seções autorais paginadas a partir da p. 107. Os resumos automáticos dos catálogos Gutenberg não foram usados para orientação.

Em Kropotkin, o corpo deriva do livro francês de 1892 e o prefácio está assinado janeiro de 1913; a reprodução usada é a edição Vanguard de 1926. A ausência de identificação do tradutor na página fica registrada. O prefácio e o capítulo 3 são complementados por passagens do corpo sobre trabalho e produção. A diversidade geográfica e temporal do lote inclui África do Sul, Moçambique, Gana, Filipinas, Israel e tradições políticas europeias. Não se criou uma segunda identidade de qualquer autor para preencher quota.

## Revisão e validação

A revisão de construto removeu religião de Luthuli/Tutu: motivação cristã e oposição cívica das igrejas não estabelecem autoridade política subordinada à fé. Também removeu tecnologia de Annan: expectativa genérica de benefício científico não constitui proposta concreta de adoção tecnológica. Essas passagens permanecem contexto não pontuado. Hobbes passou de rep20 a rep40 porque a soberania absoluta do capítulo XVIII vale para uma pessoa, poucas ou todas; a preferência comparativa por monarquia no XIX sustenta somente direção delimitada. O agente de metodologia aceitou os 38 construtos delimitados e reabriu independentemente o capítulo XIX de Hobbes. Os localizadores precisos de federalismo e máquinas de Kropotkin foram esclarecidos; isso não é segunda leitura documental de todos os 38 eixos. Não se acrescentou uma proposta extra sobre prioridade masculina na sucessão de Hobbes.

A validação final do módulo no Bun confirmou dez perfis únicos, 38 eixos documentados, 82 desconhecidos em 50 sem evidência, ausência de duplicatas ativas e igualdade entre vetor e metadados de codificação. `bun run build` passou, incluindo TypeScript e Vite; permanece o aviso de tamanho do bundle existente. A integração do catálogo e o QA final pertencem aos responsáveis pelo projeto. O módulo continua isolado, pronto para julgamento do Root.
