# Reconciliação de países históricos — lote 04

Revisão autoral de 7/10/2026. Nove identidades **existentes** são recodificadas no módulo `reference-historical-country-reconciliation-04.ts`; nenhum país novo ou alias é criado. A remessa não altera imports de integração. São 15 inferências delimitadas e 93 eixos desconhecidos, estes em50 sem grade, mapeamento ou coding; nenhum dos nove perfis alcança seis eixos do gate estrutural.

`historical04RawBaseVectors` preserva os vetores do módulo-base antes da preparação. `historical04LiveBaseline` preserva os nove objetos realmente integrados no momento da captura, incluindo fontes completas, evidências, caveats e vetores preparados. Os dois snapshots têm SHA-256 próprio exportado, calculado sobre JSON compacto Unicode. O overlay conserva todas as fontes recebidas e acrescenta a fonte revista, sem mutar o snapshot. Aplicação repetida é idempotente.

| Identidade existente | Dívida legada indicada no inventário | Inferências novas | Recorte efetivamente graduado |
| --- | ---: | --- | --- |
| `paris-commune-1871` | 8 | est80, rep60 | Declaração de19abril1871; proposta, não realização nacional |
| `us-new-deal-1933` | 7 | con60 | Autoridades temporárias da NIRA1933; não todo1933–1939 |
| `imperial-japan-1931` | 10 | rep40 | Carta1889 subjacente ao recorte; não mede militarização posterior |
| `prc-mao-1949` | 10 | eco60, con60 | Constituição1954 em transição; não todas as fases Mao |
| `cuba-revolutionary-1959` | 9 | rep20, eco80, con80 | Carta fundadora1976 no término do período existente |
| `portugal-estado-novo-1933` | 8 | rep20 | Fundação1933, eleição1934 e abertura1935 |
| `chile-pinochet-1973` | 8 | rep20, pod80 | Transição1981–1989 da carta1980 |
| `roc-taiwan-1949` | 8 | rep40 | Disposições temporárias na edição1972 |
| `france-de-gaulle-1958` | 9 | rep60, rel60 | Carta original1958, anterior à reforma1962 |

A dívida anterior soma85 campos apontados no inventário legado. Esses valores são substituídos por novas inferências ou desconhecido, não declarados falsos. Quinze inferências documentais não equivalem a quinze eixos antes ausentes: vários substituem o mesmo campo com nova fundamentação. O lote não aumenta a contagem de identidades ou fornece elegibilidade artificial.

## Fontes e limites

- [Comuna, declaração no apêndice de Vive la Commune](https://fr.wikisource.org/wiki/Vive_la_Commune_(Vandervelde)): exclusivamente o documento de19abril, sem usar o comentário partidário da coletânea como descrição neutra de prática. Competência federativa proposta e participação/revogação são construções distintas de sua execução em guerra.
- [NIRA, transcript do National Archives](https://www.archives.gov/milestone-documents/national-industrial-recovery-act): §§202–203 incluem programa e decisões de financiamento de obras; §§2–3 acrescentam coordenação industrial. Con60 é aproximação moderada, não planejamento integral nem estatização. A transcrição contém referências temporais posteriores; não certificamos uma edição original integral inalterada.
- [Japão, National Diet Library](https://www.ndl.go.jp/constitution/e/etc/c02.html): tradução oficial do desenho1889. A relação executivo/Dieta não estabelece automaticamente intensidade da guerra, religião de Estado ou coerção1931–1945. Não criamos uma segunda identidade Meiji com a mesma constituição.
- [China, tradução1954](https://en.wikisource.org/wiki/Constitution_of_the_People%27s_Republic_of_China_(1954)): fonte primária traduzida reproduzida em audiência do Senado dos EUA. Cotejo chinês oficial pendente; a proteção transitória de propriedade capitalista impede transportar eco97 para esta edição.
- [Cuba, texto original1976](https://es.wikisource.org/wiki/Constituci%C3%B3n_de_la_Rep%C3%BAblica_de_Cuba_%281976%29): transcrição com cotejo oficial integral pendente; não usamos redações posteriores para descrever1959. Cooperativas/agricultura pequena e participação formal aparecem como contrapesos.
- [Portugal, história institucional da Assembleia](https://app.parlamento.pt/comunicar/V1/202203/78/artigos/art6.html): narrativa institucional de prática com ligações às atas1935. O [PDF constitucional oficial](https://www.parlamento.pt/parlamento/documents/crp-1933.pdf) abriu sem texto extraível; não é tratado como lido nem utilizado para graduar eixos. A substituição é explicitamente história institucional, não falsa leitura de norma.
- [Chile, Decreto1150 original1980, BCN](https://www.bcn.cl/leychile/navegar?idNorma=17039): inferências das disposições transitórias13–29, sem estender esses dispositivos à democracia posterior ou converter competência excepcional em contagem de atos repressivos.
- [Taiwan, edição1972](https://en.wikisource.org/wiki/Temporary_Provisions_Effective_During_the_Period_of_Communist_Rebellion_(1972)): cotejo chinês oficial pendente; emenda17março1972 identificada no cabeçalho. A continuidade das disposições até1991 e o fim da lei marcial1987 são eventos distintos, corrigindo a confusão temporal do caveat antigo, preservado no snapshot.
- [França, edição inicial1958](https://fr.wikisource.org/wiki/Constitution_fran%C3%A7aise_de_1958_(version_initiale)): transcrição ligada a fac-símile. Não transporta eleição presidencial direta1962 para a edição fundadora, nem transforma competências comunitárias externas em federalismo doméstico.

As posições são âncoras editoriais ordinais, não porcentagens observadas. Todas as inferências têm confiança média e uma incerteza explícita. Eixos sem passagem suficiente permanecem desconhecidos, mesmo quando o texto contém propriedade pessoal, religião genérica, promessas de direitos ou símbolos políticos. Não diminuímos o limiar de evidência e não usamos identidade ideológica para preencher lacunas.

## Verificação e revisão

TypeScript sem emissão passa. Verificação runtime do módulo confirma9 perfis,15 eixos codificados,93 desconhecidos e0 elegíveis; confirma hashes RAW/LIVE, preservação integral de fontes, ausência de mutação e idempotência. A integração e sua contagem global dependem da revisão do Root e não são presumidas por este documento.

Revisão independente de construto e reabertura seletiva solicitadas a `coding_method`. O campo `independentSourceValidation` permanece `pending`: uma revisão do formato ou do construto não certifica todas as fontes e traduções. Fontes legadas preservadas não passam a ser substantivamente validadas pelo overlay.

Atualização da revisão independente: `coding_method` revisou os nove perfis e15 códigos sem mudança obrigatória. Reabriu NIRA §§202–203 e história parlamentar portuguesa1933–1935; os outros sete receberam revisão do arquivo/construto, sem nova abertura independente de fontes. O Root também reabriu JapãoNDL1889, Portugal e NIRA seletivamente. A ressalva sobre referências pós1933 na transcrição NIRA foi incorporada à nota da fonte no próprio registro. Estas leituras pontuais não constituem certificação integral e o status de validação completa continua `pending`.
