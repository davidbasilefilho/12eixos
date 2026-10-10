# Seleção ideológica: sexto recorte documental, 10/10/2026

## Resultado e estado da integração

O módulo foi integrado ao catálogo selecionado e ao lookup por identidade, sem alterar o arquivo bruto. Três identidades selecionadas recebem **nove códigos editoriais**, todos com confiança média. Nenhuma alcança seis eixos: o gate permanece intacto e nenhum match é liberado por este recorte.

| Perfil | Cobertura anterior → proposta | Eixos e âncoras |
| --- | --- | --- |
| Combahee, 1977 | 0 → 3 | REP 60; ECO 60; MOR 80 |
| Malcolm X, Cleveland 1964 | 0 → 2 | REP 60; ECO 40 |
| Newton, Boston College 1970 | 0 → 4 | EST 60; ECO 80; CON 80; TEC 60 |

Aplicado ao checkpoint de entrada, o recorte produz:

- 675 selecionados; **93 elegíveis e 582 parciais**, inalterados.
- Ideologias: **12/75 elegíveis**; perfis sem códigos: 47 → **44**.
- Lacunas mínimas até seis eixos: 2.890 → **2.881**.
- 818 registros brutos intactos; SHA-256 `1ba985e6ad16ffb2fa3922eebf5bd5c7ebc4eb57318f014d76f745210bc0b41a`.
- Arquivo completo: 868; fora da seleção: 193. Identidades, nomes, períodos e justificativas gerais permanecem iguais.

São contagens da integração local verificada; publicação e revisão externa são etapas separadas. Os nove códigos se somam aos 94 dos recortes complementares anteriores, totalizando 103 após integração. Âncoras e faixas são ordinais editoriais, não percentuais medidos, opiniões individuais atuais ou certificação de execução histórica.

## Fontes efetivamente lidas e locadores

Acesso e revisão: **10/10/2026**. As propostas foram confrontadas com leitura independente das mesmas fontes antes da implementação. Isso não substitui validação histórica de prática ou precisão numérica.

### Combahee

[A Black Feminist Statement — reprodução UCLA](https://careprogram.ucla.edu/education/readings/Combahee1977). Leitura integral do texto primário, pp. impressas 270–276, §§1–4. A página impressa corresponde ao índice físico do PDF, iniciado em zero, mais 269. Introdução editorial e documento seguinte da conferência de Chicago, p.277, não são posições atribuíveis ao coletivo. Sem colação com o impresso original de 1977.

| Eixo | Excerto curto de localização | Localizador |
| --- | --- | --- |
| REP | “collective process”; “nonhierarchical distribution of power” | §4, p.276, penúltimo parágrafo; linhas web 291–295 |
| ECO | “collective benefit” | §2, p.273, primeiro parágrafo completo; 149–163 |
| MOR | “abortion rights” | §3, p.275 e §4, p.276; contexto em §2, pp.272–273 |

REP é limitado pela falta de desenho constitucional; ECO, pela titularidade jurídica não especificada. MOR não importa categorias posteriores. O trecho patriarcal citado criticamente em §3 não foi confundido com uma posição do coletivo.

### Malcolm X

[The Ballot or the Bullet — Teaching American History](https://teachingamericanhistory.org/document/the-ballot-or-the-bullet-2/). Leitura completa da seção Document, linhas web 77–127, e crédito bibliográfico em 128–130. São excertos editados de Malcolm X Speaks, ed. George Breitman, 1965, atribuídos ao discurso de Cleveland de 3/4/1964; não a versão de Detroit nem transcrição integral. Introdução de Peter C. Myers separada do documento.

| Eixo | Excerto curto de localização | Localizador |
| --- | --- | --- |
| REP | “control the politics and the politicians” | Filosofia política, 99; debate eleitoral 85–90; delegados 113–114 |
| ECO | “If we own the stores” | Filosofia econômica, 102–106 |

A alternativa armada limita REP. ECO descreve propriedade empresarial local neste programa, sem atribuir compromisso capitalista geral, privatização ou laissez-faire. Não se interpreta autodefesa como política militar externa.

### Newton

[Boston College speech — reprodução libcom](https://libcom.org/article/huey-newton-introduces-revolutionary-intercommunalism-boston-college-november-18-1970). Leitura do corpo principal, linhas web 16–116; discurso de 18/11/1970, reprodução de 15/2/2018. Apresentação editorial e comentários excluídos. Não foi feita colação com áudio/impresso nem consulta a sessão de perguntas.

| Eixo | Excerto curto de localização | Localizador |
| --- | --- | --- |
| EST | “control the institutions of their community” | 101,107; contraponto 95–97 |
| ECO | “seize the means of production” | 86; contexto 71,92–96 |
| CON | “plan a real intercommunal economy” | 97; sequência 95–97 |
| TEC | “produce in abundance” | 71; contexto 58–64,67–71,86 |

EST preserva a coordenação mundial e não equivale a uma constituição federal. ECO e CON têm passagens distintas: propriedade não foi usada sozinha como prova de planejamento. TEC permanece condicionado; o diagnóstico de desemprego não é apagado nem adotado como previsão validada.

## Desconhecidos e resultados negativos

O módulo registra motivos para **todos os 27 eixos não codificados**. Eles continuam em 50, sem evidência, mapeamento ou código; 50 significa desconhecido neste recorte.

- Combahee: não transformar distribuição em planejamento, identidade em imigração, não hierarquia em federalismo ou crítica ao determinismo em tecnologia.
- Malcolm: compras comunitárias não são tarifas nacionais; coalizão não confessional não é laicidade estatal; armas defensivas não resolvem todo POD. Os dez eixos restantes continuam desconhecidos.
- Newton: a menção à representação não basta para definir REP; o rótulo anti-imperialista não resolve INT; cultura humana futura não determina IMI ou REL. Não incorporar outros discursos do autor.
- Global Greens já tinha dez eixos documentados e conservadorismo nacional, oito. Ambos foram preservados, assim como Ambedkar, Öcalan, Bookchin e todos os demais perfis fora destes três IDs.

## Contrato da integração

Arquivos novos:

- `src/data/reference-sixth-ideologies-20261010.ts`
- `tests/sixth-ideologies-reconciliation.test.ts`
- Este relatório

Exports:

- `sixthIdeologies20261010Definitions`
- `sixthIdeologies20261010ExpectedPosts`
- `reconcileSixthIdeologies20261010`

O reconciliador foi acrescentado após o quinto recorte em `selectedIdeologyEntries`; as três definições entram no lookup por ID de `fullReferenceCatalog`. Whitelist, contagens vigentes e auditoria foram atualizadas. As asserções globais agora refletem 2.881 lacunas; os deltas locais dos recortes anteriores foram preservados. O teste do sexto recorte exige integração real e identidade do lookup, sem condicional que aceite somente staging.

Baselines completos congelam exatamente os três objetos de entrada. A reconciliação não muta o argumento; mantém referências e ordem das fontes anteriores; aceita idempotentemente apenas o post completo; qualquer revisão posterior de conteúdo, fontes, evidência ou razões dos desconhecidos gera erro em vez de sobrescrita.

## Verificações realizadas

Antes da integração compartilhada:

- Teste focal: **7 aprovados, 0 falhas, 1.036 asserções**.
- Regressão com os quatro recortes ideológicos anteriores e `reference-coding`: **28 aprovados em 6 arquivos, 0 falhas, 31.809 asserções**.
- Typecheck estrito do novo módulo e catálogo selecionado aprovado com TypeScript 7.0.2 já disponível; nenhuma dependência instalada.
- Bundle do módulo para browser aprovado com Bun 1.4.3.
- Projeção executável confirmou nove códigos, zero nova elegibilidade e nove lacunas mínimas fechadas.

Os testes cobrem integridade do arquivo bruto, metadados, fontes, códigos declaratórios, desconhecidos, input recursivamente congelado, idempotência, conflitos de baseline, gate e preservação de contraprovas. Quando o catálogo estiver integrado, também verificam identidade de lookup entre seleção e arquivo completo. Build completo da UI e publicação não fazem parte desta verificação de dados.

Após a integração: **77 testes nativos, 112.617 asserções**, e **16 testes de componentes/seleção com dependências em cache, 7.049 asserções**, passaram. O typecheck estrito do catálogo com TypeScript 7.0.2 e a auditoria regenerada também passaram. Hash do catálogo selecionado: `27416e0492d0fa540d09be1730818a3aa8b3a2f8accb068469b7a6d8a16c50da`. Limitações de build e navegador seguem no [checkpoint de validação](../validation-checkpoint-20261010.md).
