# Bandeiras históricas — lote 05: Brasil com subperíodos explícitos

Verificado em 10/10/2026. As duas novas miniaturas são cópias byte a byte do arquivo histórico `brazil-estado-novo-1937.svg`, que representa a versão de **21 estrelas**. São ilustrações de subperíodos documentados, e não uma bandeira única atribuída a toda a duração de cada perfil. Não houve download, redesenho, recoloração ou alteração de SVG.

## Fontes históricas e limites de data

- [Decreto nº 4, de 19/11/1889, art. 1](https://www.presidencia.gov.br/ccivil_03/decreto/1851-1899/d0004.htm): a norma primária estabelece campo verde, losango amarelo, esfera azul, faixa com lema e 21 estrelas. Seu início é 19 de novembro, não a proclamação de 15 de novembro.
- [Senado Federal, Arquivo S, volume 1](https://www2.senado.leg.br/bdsf/bitstream/handle/id/514443/001048628_Arquivo_S_v1.pdf): o relato sobre a bandeira republicana registra a versão provisória usada durante os quatro dias iniciais. O desenho provisório não está empacotado e permanece com `src: null` no manifesto; não é substituído pelo vetor posterior.
- [Decreto nº 48.124, de 16/4/1960, considerandos e arts. 1–2](https://www.presidencia.gov.br/ccivil_03/decreto/antigos/d48124.htm): a própria norma confirma que o decreto de 1889 tinha 21 estrelas e que o decreto-lei de 1942 preservara esse simbolismo. Acrescenta a estrela da Guanabara, explicitando vigência em **21/4/1960**.
- [Observatório Nacional, A Bandeira Nacional, p. 22](https://www.gov.br/observatorio/pt-br/assuntos/areas-de-atuacao/divulgacao-e-popularizacao-da-ciencia/revistas/pdf/bandeiras.pdf): a retrospectiva registra versões de 21 e 22 estrelas, mas situa a mudança em junho de 1960. O manifesto usa a data normativa expressa de 21/4/1960 do decreto contemporâneo. Não afirma que todos os exemplares físicos foram trocados simultaneamente nessa data.

## Primeira República: `brazil-first-republic-1889`

O perfil começa em 15/11/1889. A miniatura exibida cobre somente **19/11/1889–24/10/1930**, abrangendo os recortes documentais de 1891 e 1917 usados no perfil. Os dias 15–18/11/1889 estão explicitamente excluídos.

`referenceFlagPeriodNote` retorna: **Bandeira de 21 estrelas, 19/11/1889–24/10/1930; não representa 15–18/11/1889.** Essa nota deve acompanhar a miniatura na comparação e na exportação; não basta deixá-la apenas nesta documentação. O manifesto mantém separadamente o intervalo inicial sem arquivo e o intervalo representado.

## Quarta República: `brazil-fourth-republic-1946`

A miniatura de 21 estrelas representa **31/1/1946–20/4/1960**, incluindo a Constituição de 1946 usada como recorte normativo. A fase **21/4/1960–31/3/1964** usa a variante de 22 estrelas já existente em `period-variants/brazil-military-regime-1964-1968.svg`; o nome local antigo não muda o período real do desenho, 1960–1968.

`referenceFlagPeriodNote` retorna: **Bandeira de 21 estrelas, 1946–1960; a partir de 21/04/1960, eram 22 estrelas.** O manifesto relaciona os dois intervalos e seus arquivos. A interface continua com uma miniatura principal por perfil; não há seletor de data e não se afirma cobertura integral por essa imagem.

## Bytes, autoria e licença

| Arquivo | Origem local | Dimensões | SHA-256 |
| --- | --- | --- | --- |
| `brazil-first-republic-1889.svg` | `brazil-estado-novo-1937.svg` | 1000 × 700 | `4fe5746b128101524c3422d4bef92e0e21a0b4e155c8a92270f7047c7820808b` |
| `brazil-fourth-republic-1946.svg` | `brazil-estado-novo-1937.svg` | 1000 × 700 | `4fe5746b128101524c3422d4bef92e0e21a0b4e155c8a92270f7047c7820808b` |
| `period-variants/brazil-military-regime-1964-1968.svg` | Já empacotado; não alterado | 1000 × 700 | `a28dd6f400ab0ee4b4670775c503a89e8e21a19c2e6cfb47328f08a8c763363e` |

- [Vetor de 21 estrelas, original e licença](https://commons.wikimedia.org/wiki/File:Flag_of_Brazil_(1889%E2%80%931960).svg): autoria do desenho atribuída a Raimundo Teixeira Mendes; histórico de vetorização na ficha. Domínio público PD-BrazilGov e Public Domain Mark.
- [Vetor de 22 estrelas, original e licença](https://commons.wikimedia.org/wiki/File:Flag_of_Brazil_(1960%E2%80%931968).svg): Governo do Brasil, domínio público PD-BrazilGov; histórico de vetorização na ficha.

As duas fichas e os bytes locais foram consultados; os hashes identificam as cópias locais, não uma nova transferência da versão upstream. As dimensões 10:7 são as do vetor. As cores digitais e sua geometria de reprodução não certificam tecidos ou tintas de todos os anos históricos. Os testes fixam hashes, contagem de estrelas, IDs, subperíodos, variante existente e notas públicas.

## Caso ainda excluído: Coreia do Sul sob Rhee

[Ministério do Interior sul-coreano, história do Taegeukgi](https://www.mois.go.kr/frt/sub/a06/b08/nationalIcon_2/screen.do) situa a padronização em 15/10/1949, após a criação do governo em 15/8/1948. O perfil cobre ambos os períodos. Os arquivos locais atuais e de Park não comprovaram todas as variantes necessárias. `south-korea-rhee-government-1948` continua sem bandeira; não se infere continuidade pela identidade nacional.

## Alcance do lote

Os lotes 04 e 05 acrescentam oito perfis históricos com imagem, elevando a cobertura inicial de 89/150 para 97/150. Restam 53 sem imagem. Isso é cobertura visual, sem mudança no scoring, na confiança das fontes políticas ou na elegibilidade dos perfis para o ranking. A cobertura de países atuais permanece 150/150.

Verificações: 17 testes de integridade de assets e catálogo passaram, com 66.061 asserções. Uma verificação adicional empacotada com React 19.2.6 em cache conferiu `referenceImage` e as proporções nativas dos oito novos IDs, bem como as contagens 97/150 e 150/150 sobre o catálogo selecionado. Esse uso de dependências em cache não substitui o build de produção com o lockfile do projeto. Os vetores de 21 e 22 estrelas também foram rasterizados pelo Inkscape e inspecionados; não houve QA de interface no navegador nesta frente.
