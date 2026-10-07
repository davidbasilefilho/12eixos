# Figuras públicas globais — lote 03, 7/10/2026

Oito identidades ausentes foram pesquisadas: Tawakkol Karman (Iêmen), Shirin Ebadi e Narges Mohammadi (Irã), Maria Ressa (Filipinas) Denis Mukwege (RDC), Mary Robinson (Irlanda), Helen Clark (Nova Zelândia) e Juan Manuel Santos (Colômbia). O módulo contém dez codificações delimitadas, nenhuma com seis eixos. Permanecem fora do catálogo até revisão independente e integração pelo Root. Não representam uma amostra mundial equilibrada nem completam a lacuna de 150 figuras.

| Perfil | Recorte codificado | Eixos | Limite |
| --- | --- | --- | --- |
| Karman | Discurso indexado em 25/5/2023 | pod 40 | Expressão digital; remoção de conteúdo danoso permanece admitida |
| Ebadi | Diálogo de 8/5/2005 | rep 60, rel 80, dip 40 | Eleições abertas, separação institucional e negociação; não a trajetória inteira |
| Mohammadi | Discurso de 21/5/2025, publicado em 22/5 | mor 60 | Autonomia de mulheres; descrições legais não certificadas como parecer |
| Ressa | Texto preparado para prêmio CPJ de 2018 | pod 40 | Liberdade de imprensa; não é transcrição audiovisual cotejada |
| Mukwege | Artigo assinado de 13/11/2025 | mor 60 | Participação feminina na construção da paz |
| Robinson | Declaração nominal conjunta de 9/9/2026 | int 40 | Sanções dirigidas a assentamentos; não guerra ou protecionismo industrial |
| Clark | Mesma declaração nominal conjunta de 9/9/2026 | int 40 | Adesão explicitamente atribuída, não posição imputada por filiação |
| Santos | Declaração nominal de 24/2/2025 | dip 40 | Negociações inclusivas com garantias de segurança; não pacifismo absoluto |

As páginas primárias foram efetivamente abertas. [O gabinete de Karman](https://www.tawakkolkarman.net/) vincula seu discurso de Washington à data 05-25-2023. A edição de Sarajevo também foi lida, mas sua data não foi confirmada: ela fica contextual e não gera eixos. [O diálogo de Ebadi](https://www.jfklibrary.org/events-and-awards/kennedy-library-forums/browse-all-forums/transcripts/conversation-with-shirin-ebadi) distingue falas da entrevistadora e respostas da autora; apenas as últimas geram valores. [O texto de Mohammadi](https://www.nobelpeacecenter.org/en/news/gender-apartheid-must-end), [o discurso preparado de Ressa](https://cpj.org/awards/maria-ressa/) e [o artigo de Mukwege](https://theelders.org/news/without-women-there-can-be-no-lasting-peace) têm autoria nominal e locators no módulo.

Identidade contemporânea foi conferida em páginas atuais do gabinete de Karman, Columbia para Ressa e Elders para Mukwege. Para Ebadi foi aberta a página e transcrição do [programa PBS de 16/1/2026](https://www.pbs.org/video/january-16-2026-xla3nu/); para Mohammadi foi aberta uma entrevista publicada em 6/10/2026, usada somente para identidade viva/atividade pública. A transcrição de Ebadi em 2026 distingue rejeição de ataques amplos e apelos a ações externas dirigidas: não se transfere automaticamente a preferência diplomática de 2005 ao presente. As fontes primárias de cada eixo continuam datadas no código.

As páginas de NobelPrize.org procuradas para Ressa, Muratov, Ebadi e Gbowee retornaram 403, e uma tentativa de leitura externa também falhou. Esses acessos não são apresentados como leituras concluídas. TED forneceu apenas descrição, sem transcrição, portanto Varoufakis não foi pontuado. A declaração de Nadia Murad em sua organização foi aberta; sua condenação de ataques à comunidade yazidi, isoladamente, não foi convertida em score de multiculturalismo, costumes ou segurança. São caminhos adicionais de pesquisa, não entradas artificiais.

Status: autoria primária concluída para dez eixos; revisão independente solicitada ao agente de pesquisa e ainda pendente. TypeScript passou após a criação. Não houve alteração de matemática global, limiar de evidência, publicação, push ou merge.

As três adições finais usam [declaração nominal conjunta de Robinson e Clark](https://theelders.org/news/mary-robinson-and-helen-clark-react-israeli-settlement-trade-ban-uk-and-others) e [declaração identificada de Santos](https://theelders.org/news/juan-manuel-santos-urges-inclusive-peace-talks-ukraines-future), ambas efetivamente abertas. Perfis atuais das três pessoas no mesmo organismo foram abertos para identidade, sem imputaçāo de valores de eixo. A primeira fonte trata de sanções externas específicas: o crosswalk é intervencao_15; não se converte restrição comercial diplomática em preferência protecionista industrial.

Validação mecânica final: `tsc --noEmit` passou; `tests/reference-coding.test.ts` passou com seis testes e 3.380 assertions. Importação direta do novo módulo confirmou oito registros, dez eixos e, em todos os demais eixos, valor 50 sem grade, vínculo de fonte ou metadado de coding. Estes testes verificam estrutura e consistência, não substituem a leitura independente das fontes.
