# Expansão do catálogo de figuras

`src/data/reference-people.ts` acrescenta 71 perfis ao catálogo: 36 de figuras públicas vivas no recorte consultado em 2026 e 35 históricos, todos identificados por período. A propriedade `category` separa `public-figure` de `historical-figure`; `kind: 'person'` mantém compatibilidade com o domínio atual.

## Como ler os vetores

Os números são **estimativas editoriais de 0 a 100**, nunca resultados de um questionário respondido por essas pessoas. A ordem é `est` federalismo, `rep` democracia, `pod` segurança, `imi` assimilação, `dip` pacifismo, `int` não intervenção, `eco` propriedade pública, `con` planejamento, `com` protecionismo, `rel` irreligião, `mor` progressismo e `tec` tecnologia. Cem sempre aponta para o primeiro polo de cada par. A transformação da tupla em objeto declara os doze eixos em cada perfil; valores `50` significam evidência insuficiente ou posição não determinada pela fonte, não neutralidade presumida.

Cada registro inclui ao menos uma fonte primária ou institucional ligada à pessoa, sua plataforma, pronunciamento, obra ou mandato; `note` descreve o que ela sustenta. `rationale` resume apenas as direções mais documentadas. Cada eixo fora do centro tem um `axisEvidence` com o título da fonte e a justificativa direcional específica; um eixo sem essa sustentação fica em 50 e não recebe nível de evidência. `evidence` marca a qualidade relativa da documentação (`high` ou `medium`), não a precisão do número. A banda numérica expressa direção aproximada e não precisão estatística. Não se deve ordenar ou descrever a coleção como um ranking de qualidade moral, apoio, recomendação eleitoral ou identidade do usuário.

Os documentos atuais não sustentam seis eixos para todos os nomes. Esses perfis permanecem catalogados para pesquisa, mas não devem receber uma classificação de proximidade se a regra de elegibilidade da aplicação exigir seis ou mais eixos documentados. Não se preencheram eixos para atingir essa contagem.

Para figuras vivas que exercem ou exerceram cargo, o objeto costuma ser um programa público ou período de governo, não uma tentativa de atribuir políticas de Estado a convicções privadas. Isso está explicitado em `period` e `caveats`, em especial para governos de coalizão, contextos de guerra, regimes controversos e mandatos concluídos. Os perfis de ativistas e autores só recebem direção onde os textos citados permitem comparação; Greta Thunberg e Malala Yousafzai, por exemplo, permanecem em 50 nos eixos políticos sem evidência comparável. Para figuras históricas, um manifesto ou texto primário pode documentar um objetivo, mas não basta para inferir a prática do governo. Mudanças de posição ao longo de décadas e debates historiográficos pedem novos recortes em vez de falsa precisão.

Fontes e limites específicos estão junto de cada entrada exportada em `sources`, `period`, `rationale`, `caveats` e `evidence`, para que a interface preserve o contexto ao exibir cada resultado. As referências atuais são um primeiro lote global, sujeito a revisão editorial e verificação periódica das páginas e períodos; as ligações externas podem mudar.

## Cobertura incluída

| Recorte | Perfis |
| --- | --- |
| Figuras públicas vivas, África | Cyril Ramaphosa, William Ruto, Julius Malema, Netumbo Nandi-Ndaitwah, Duma Boko |
| Figuras públicas vivas, Ásia | Narendra Modi, Xi Jinping, Lai Ching-te, Tsai Ing-wen |
| Figuras públicas vivas, América Latina | Luiz Inácio Lula da Silva, Claudia Sheinbaum, Gustavo Petro, Javier Milei, Gabriel Boric, Nayib Bukele |
| Figuras públicas vivas, Europa | Ursula von der Leyen, Pedro Sánchez, Emmanuel Macron, Giorgia Meloni, Viktor Orbán, Volodymyr Zelenskyy, Sviatlana Tsikhanouskaya |
| Figuras públicas vivas, América do Norte | Donald Trump, Joe Biden, Alexandria Ocasio-Cortez, Elizabeth Warren, Ron DeSantis |
| Figuras públicas vivas, ativismo, religião e pensamento político | Reza Pahlavi, Greta Thunberg, Malala Yousafzai, Dalai Lama, Abdullah II, Anwar Ibrahim, Thomas Piketty, Arundhati Roy, Hassan Rouhani |
| Figuras históricas, América Latina | Simón Bolívar, José Martí, Emiliano Zapata, Benito Juárez, Lázaro Cárdenas |
| Figuras históricas, África | Kwame Nkrumah, Julius Nyerere, Thomas Sankara, Amílcar Cabral, Patrice Lumumba, Léopold Sédar Senghor, Frantz Fanon, Wangari Maathai |
| Figuras históricas, Ásia | Sun Yat-sen, B. R. Ambedkar, Muhammad Ali Jinnah, Jawaharlal Nehru, Rabindranath Tagore, Lee Kuan Yew, Hồ Chí Minh, Aung San |
| Figuras históricas, Europa | Jean-Jacques Rousseau, Mary Wollstonecraft, Hannah Arendt, Rosa Luxemburg, Antonio Gramsci, Winston Churchill, Charles de Gaulle, Karl Popper, Simone de Beauvoir |
| Figuras históricas, América do Norte | Frederick Douglass, Abraham Lincoln, Franklin D. Roosevelt, Martin Luther King Jr., Malcolm X |

As classificações públicas/históricas são editoriais e se referem ao recorte de vida/período; a documentação citada em cada entrada é a autoridade para seu conteúdo, não para a taxonomia nem para os escores exatos. A expansão deve continuar com fontes primárias melhores e com as lacunas regionais e linguísticas ainda visíveis no catálogo.
