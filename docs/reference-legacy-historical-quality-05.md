# Owen: proposta isolada de recodificação e ativação dormente

Status: seis direções moderadas aceitas pelo Root após revisão primária independente; módulo não importado, ativação guardada pendente de integração. Nenhuma contagem ativa alterada por este arquivo. Owen existe como `robert-owen` em `peopleEuropeExpansion`, mas está ausente do catálogo vivo no momento da leitura. A primeira tentativa de extrair `referenceEntries.find(...)` falhou por essa diferença; extração corrigida do objeto dormente real, inteiro, sem reconstruir seus campos de memória.

`legacyHistoricalQuality05OriginalRecords` conserva todos os campos do objeto dormente, inclusive vetor/mapeamentos não localizados e fonte anterior. `reconcileLegacyHistoricalQuality05` usa igualdade JSON do objeto inteiro; devolve sem mudanças qualquer entrada posterior útil, codificada ou não. `legacyHistoricalQuality05` é proposta de ativação do mesmo ID existente, não identidade recém-inventada. Importador deve priorizar uma identidade já viva útil e jamais substituir a partir desta lista sem reconciliação.

## Fontes realmente lidas pelo autor

- [Reply to the Prime Minister question](https://www.marxists.org/reference/subject/economics/owen/1840-49ro/prime-minister.pdf): PDF0–11, linhas0–137 completas, título/atribuição2–5, assinatura133. A data1840 vem do [índice MIA](https://www.marxists.org/reference/subject/economics/owen/index.htm), linhas0–73 efetivamente lidas; exemplar não contém data impressa explícita. O índice contém data de morte errada1851; não a usamos para identidade. O texto é plano hipotético próprio, nunca discurso de um primeiro-ministro em exercício.
- [Outline of the Rational System of Society](https://www.marxists.org/reference/subject/economics/owen/1840-49ro/outline.pdf): PDF0–15/linhas0–435 efetivamente lidas em sucessivas aberturas. Primeiras aberturas exibiram0–101, depois0–376; reabertura perto370 inicialmente ficou367–376, e abertura377 mostrou83–435. A união cobre todas as linhas, não inferência de acesso ao URL. Título/publicação1841 em0–19, programa próprio48–408. Anúncio da sociedade25–48 assinado Cuddon e catálogo409–435 não são usados como declarações exclusivas de Owen.
- [Robert Owen Museum](https://www.robertowenmuseum.co.uk/): corpo27–44 efetivamente lido, cabeçalho29 autentica14/5/1771–17/11/1858. Página de instituição de memória; não fornece escores nem certificação das suas previsões.

## Propostas e limites

| Eixo | Proposta | Alcance efetivo e contrapartidas |
| --- | --- | --- |
| EST | 60 | Outline289–341 desenha sociedade de comunidades autogovernadas, círculos locais/gerais e delegados; polidade futura, não o Estado britânico já existente. Conselhos de cada comunidade detêm poder pleno sob lei natural; competências das uniões não completamente detalhadas. |
| DIP | 40 | Reply21–29 determina não agressão, cooperação e diplomacia aberta para todas relações externas; mantém poder defensivo e proteção das dependências, cuja liberdade é gradual após preparação. |
| ECO | 60 | Reply69–71/84–89 visa compra nacional de toda propriedade privada; consentimento gradual33, preço integral88 e propriedades oferecidas69. Outline283–285 rejeita propriedade inútil, sem inferir expropriação de todo bem doméstico. |
| CON | 60 | Outline267–273/323–341: provisão, direção de talentos, produção e distribuição gerais, com conselhos e trocas de excedentes; não mero controle fiscal ou consequência automática da propriedade comum. |
| MOR | 60 | Outline274–281/289–292: igualdade de ambos sexos em direitos/liberdade, formação afetiva sem distinções artificiais e criação comunitária com acesso dos pais. Não direitos LGBT modernos nem só política educacional isolada. |
| TEC | 60 | Reply55–59 propõe ciência aplicada à produção/condições de vida de todos; Outline323–337 prescreve aperfeiçoar circunstâncias e circular invenções/descobertas/melhorias gerais. Não certifica a previsão de abundância nem adesão a todas tecnologias atuais. |

REP/POD/IMI/INT/COM/REL ficam50 sem qualquer metadata. Não se força um sétimo eixo para elevar elegibilidade. REP: governo por idade307–322 dispensa eleições314–315, apesar de supervisão por maioria jovem351–363; não se infere democracia moderna de educação universal. POD: liberdade de expressão255–265 e ausência futura de punição286–288 convivem com confinamento compulsório342–346 dos classificados como doentes inclusive moralmente; não modelo de liberdade geral sem coerção. REL: Rational Religion171–218 reconhece culto ao poder incompreensível e lei natural pública; tolerância255–265 não estabelece ateísmo ou neutralidade religiosa de todo sistema. Língua mundial31 de Reply e circulação não resolvem migração/assimilação ou tarifas, tampouco direção geral de intervenção externa.

Os dois programas1840/1841 formam recorte normativo próximo; não absorvem espiritualismo tardio, experiências de fábrica antigas ou toda carreira. Não são fonte de resultados empíricos. Valores moderados e confiança média são âncoras editoriais, não porcentagens medidas pelo autor. O julgamento independente pode reduzir o número de eixos sem tentar completar seis.

## Validação autoral

Bun confirmou preservação literal dormente, não mutação, união de fontes, idempotência, guarda de alteração útil posterior e desconhecidos sem metadata. TypeScript sem emissão/cache incremental passou. Mapa gerado EST60/DIP40/ECO60/CON60/MOR60/TEC60, seis desconhecidos; isto verifica construção da proposta, não aceitação documental. Nenhuma verificação de import/catálogo/browser/Git/publicação pertence a este módulo candidato.

## Escopo independente e decisão

Root aceitou seis direções moderadas. O revisor efetivamente reabriu Reply0–91/95–133, Outline0–19/147–218/237–408, Museu27–44 e índice de arquivo28 para data. Não afirmou ler todas páginas ou todas linhas do Outline. Contrapontos de idade/eleições, hospital compulsório, religião racional, propriedade consensual, defesa/dependências e sexos biológicos permanecem. A validação técnica acima não constitui prova de execução das propostas.
