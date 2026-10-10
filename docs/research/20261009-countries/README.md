# Pesquisa documental limitada — dois países

Checkpoint: `68a224787d2e3f0a8cacc4f5d31b7a728731fdce`. A pesquisa originou o módulo guardado `src/data/reference-research-country-20261009.ts`, revisado independentemente no payload literal e integrado em working tree sob autorização do coordenador. O módulo preserva o registro completo anterior, os códigos ECO/CON e todos os objetos de fonte antigos. O gate não muda.

## Comores: comércio continua desconhecido

A leitura direta do [anexo oficial de bens](https://goods-schedules.wto.org/system/files/procedure/2024-10/COM51A1-01-EN-FR-ES.pdf) revelou apenas duas páginas de capa. O texto identifica WT/ACC/COM/51/Add.1, de18/01/2024, e remete as páginas3–461 a um arquivo Access anexado. A lista institucional da OMC identifica o protocolo e anexos, mas não fornece aqui as obrigações operativas. Os demais endpoints tentados falharam. Adesão à OMC e paráfrase genérica não justificam graduar abertura comercial. COM permanece sem evidência e sem código; cinco eixos anteriores são preservados.

## China sob Mao: três eixos normativos documentados, ainda sem elegibilidade

Foi efetivamente lido todo o corpo inglês oferecido da [Constituição de1954](https://en.wikisource.org/wiki/Constitution_of_the_People%27s_Republic_of_China_(1954)), preâmbulo e artigos1–106. Trata-se de transcrição atribuída a publicação do Senado dos EUA de1972, não de certificação do original chinês. A tradução omite no artigo2 a cláusula de centralismo democrático presente no paralelo chinês indexado e contém outros defeitos de transcrição.

A nova leitura do [scan da Lei de Casamento](https://www.bannedthought.net/China/MaoEra/Women-Family/MarriageLawOfThePRC-1950-OCR-sm.pdf), editado pela Foreign Languages Press, abrangeu o corpo legal completo1–27 por OCR, páginasPDF4–10. A nota legal fixa vigência em01/05/1950; a data de impressão não foi estabelecida. O hospedador privado e falhas de OCR são explicitamente preservados como limitações. Comentários editoriais não foram usados como comprovação de prática.

As propostas aprovadas quanto ao conteúdo documental, com payload literal conferido independentemente, são EST40, faixa30–45; IMI40, faixa30–45; MOR60, faixa55–70; todas com confiança média e base normativa. EST considera autoridade legislativa nacional e subordinação administrativa, com autonomia financeira/regulamentar real. IMI considera o programa transversal de língua, costumes e representação de todas as nacionalidades, com unidade estatal como limite. MOR combina igualdade em toda a vida doméstica/social com consentimento matrimonial, profissão, patrimônio, nome, filiação e divórcio; mantém os limites tradicionais, médicos, militares e processuais. As passagens, contrapontos e datas exatas estão no JSON.

As propostas não são medidas empíricas, não descrevem toda a prática1949–1976 e não completam seis eixos. O registro integrado tem cinco eixos localizados: três novos eixos normativos e os dois econômicos anteriores. Continua abaixo do gate de seis eixos para ranking. O payload literal foi aceito pela revisão independente e a hook foi autorizada pelo coordenador. O working tree permanece sem commit por este agente.

## Crosswalk e preservação

MOR relaciona-se somente a moral_02 (família e costumes), moral_06 (limite matrimonial heterossexual, como contraponto) e moral_18 (papel doméstico da mulher). Não transfere respostas nem infere aborto, identidade de gênero ou educação sexual. A guarda compara o registro completo, aborta se houver divergência e é idempotente no post exato. O período e a identidade são mantidos; a ampliação é expressamente normativa de 1954/1950.

## Resultado integrado

O registro China/Mao passa de dois para cinco eixos: EST40, IMI40, ECO60, CON60 e MOR60. ECO/CON e fontes antigas foram preservados exatamente. Typecheck e os seis testes existentes de codificação passaram (29.061 verificações). A prova anterior à hook realizou 876 checks; a revisão independente, 870; a prova do runtime integrado, 318. Seleção 675, elegíveis 86, pendentes 589, sem alteração dos matches em cinco cenários. A hook muda somente um import e um map final.

O teste de seleção contém um hash fixo do catálogo anterior; esse snapshot deve ser atualizado pelo responsável de QA após conferir a mudança autorizada. Nenhum gate ou teste foi relaxado nesta integração.
