import type { ReferenceEntry, ReferenceSource } from './references';
import { AXES } from '../lib/scoring';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';
import { peopleNorthAmericaExpansion } from './reference-people-northamerica';
import { peopleEuropeExpansion } from './reference-people-europe';
import { peopleAsiaExpansion } from './reference-people-asia';
import { peopleAmericasExpansion } from './reference-people-americas';

/** Re-read dormant identities; their previous vectors remain audit material only. */
export interface HistoricalFigureBatch03Spec {
  id: string; period: string; rationale: string; caveats: string;
  sources: ReferenceSource[]; claims: ReferenceAxisCoding[]; unresolved: string[];
}
const date = '2026-10-07';
const s = (title: string, url: string, note: string): ReferenceSource => ({ title, url, note });
const c = (axis: ReferenceAxisCoding['axis'], position: ReferenceAxisCoding['position'], confidence: ReferenceAxisCoding['confidence'], sourceTitle: string, publishedDate: string, locator: string, statement: string, rationale: string, uncertainty: string): ReferenceAxisCoding => ({
  axis, position, confidence, claims: [{ sourceTitle, publishedDate, locator, statement, basis: 'declaration', accessedDate: date }], rationale, uncertainty, reviewedOn: date,
});
const t = {
  truth: 'Discurso de Sojourner Truth — versão de Marius Robinson, 1851',
  dubois: 'The Souls of Black Folk — W. E. B. Du Bois, 1903',
  wells: 'Southern Horrors — Ida B. Wells, 1892',
  mazzini: 'On the Duties of Man — Mazzini, 1859–1860; edição Recchia/Urbinati, 2009',
  gouges: 'Declaration of the Rights of Woman — Olympe de Gouges, 1791',
  mao: 'On New Democracy — Mao Zedong, janeiro de 1940',
  allende: 'Discurso de Allende à ONU — excertos, 4 de dezembro de 1972',
  ashoka: 'Major Rock Edicts — Ashoka, tradução de S. Dhammika',
  booker: 'Up from Slavery, capítulo XIV — Booker T. Washington, 1901',
  lafollette: 'Free Speech in Wartime — Robert M. La Follette, 6 de outubro de 1917',
};

export const historicalFigureBatch03Specs: HistoricalFigureBatch03Spec[] = [
  {
    id: 'na-sojourner-truth', period: 'Discurso de Akron, maio de 1851; registro publicado em 21 de junho de 1851',
    rationale: 'O registro contemporâneo reivindica direitos das mulheres e usa argumentos bíblicos públicos.',
    caveats: 'Transcrição de terceiro, não registro literal; usa Robinson de 1851, distinguindo a reconstrução de Frances Gage de 1863. Não atribui voto universal a uma reivindicação geral de direitos.',
    sources: [s(t.truth, 'https://home.nps.gov/articles/000/aint-i-a-woman-lesson-plan.htm', 'NPS reproduz e compara duas versões; codificação exclusivamente da seção Anti-Slavery Bugle, 1851.'), s('Sojourner Truth — NPS', 'https://home.nps.gov/people/sojourner-truth.htm', 'Identidade histórica e falecimento em 1883; não gera orientação política.')],
    claims: [
      c('mor', 'moderate-first', 'medium', t.truth, '1851-06-21', 'Anti-Slavery Bugle, 1851, parágrafos May I say e As for intellect', 'Reivindica direitos das mulheres contra a sua exclusão.', 'Direitos de gênero sustentam um subtema emancipatório.', 'Registro indireto e cobertura apenas do subtema de gênero.'),
      c('rel', 'moderate-second', 'medium', t.truth, '1851-06-21', 'Anti-Slavery Bugle, 1851, parágrafos I cannot read e Man, where is your part', 'Usa Eva, Jesus e Deus para justificar publicamente direitos das mulheres.', 'Fundamento religioso participa explicitamente do argumento político.', 'Não estabelece governo confessional ou primazia das igrejas.'),
    ],
    unresolved: ['Demais dez eixos: não cobertos pelo registro; narrativa autobiográfica antiga não foi usada para conservar valores.'],
  },
  {
    id: 'na-web-du-bois', period: 'The Souls of Black Folk, 1903; capítulo III',
    rationale: 'O ensaio insiste em sufrágio e igualdade civil contra a subordinação racial.',
    caveats: 'Recorte de 1903; não incorpora comunismo tardio. Separa a exposição do programa de Washington das demandas que Du Bois endossa.',
    sources: [s(t.dubois, 'https://www.gutenberg.org/cache/epub/408/pg408-images.html', 'Texto primário; prefácio assinado em 1 de fevereiro de 1903.'), s('Du Bois — catálogo Gutenberg', 'https://www.gutenberg.org/ebooks/408', 'Identidade 1868–1963; sem codificação biográfica.')],
    claims: [
      c('rep', 'moderate-first', 'high', t.dubois, '1903', 'III, parágrafos Such men feel in conscience e They do not expect', 'Exige voto e rejeita abandono voluntário de direitos políticos negros.', 'Participação eleitoral sustenta direção democrática.', 'Admite restrições razoáveis aplicadas igualmente; não prova sufrágio universal irrestrito.'),
      c('mor', 'moderate-first', 'medium', t.dubois, '1903', 'III, lista Right to vote/Civic equality/Education e parágrafo Washington’s invaluable service', 'Defende igualdade civil e educação contra discriminação racial.', 'Emancipação racial sustenta o subtema progressista.', 'Não cobre todos os costumes; mantém categorias raciais e limites históricos de linguagem.'),
    ],
    unresolved: ['imi: identidade cultural dupla não é política migratória.', 'est/pod/dip/int/eco/con/com/rel/tec: não inferir de raça, profissão ou trajetória posterior.'],
  },
  {
    id: 'na-ida-b-wells', period: 'Southern Horrors, 1892; conclusão e Self-Help',
    rationale: 'O panfleto reivindica proteção da vida negra, julgamento justo e organização contra linchamentos.',
    caveats: 'Distingue a autora de editoriais brancos e cartas citadas. Defesa armada civil não vira militarismo internacional; demanda punição legal dos linchadores.',
    sources: [s(t.wells, 'https://www.gutenberg.org/cache/epub/14975/pg14975-images.html', 'Texto primário integral; passagens autorais finais após carta de Colyar e seção Self-Help.'), s('Wells-Barnett — catálogo Gutenberg', 'https://www.gutenberg.org/ebooks/14975', 'Identidade 1862–1931; sem valores derivados da biografia.')],
    claims: [
      c('pod', 'moderate-second', 'medium', t.wells, '1892', 'Self-Help, The appeal to the white man’s pocket e The lesson this teaches; conclusão The strong arm of the law', 'Exige julgamento justo e autodefesa contra violência, junto à punição legal de linchadores.', 'Garantias individuais limitam violência arbitrária.', 'Aceita força e punição; o foco é proteção contra linchamento, não doutrina geral de segurança.'),
      c('mor', 'moderate-first', 'medium', t.wells, '1892', 'Self-Help, The Afro-American citizens of Kentucky e The appeal to the white man’s pocket', 'Combate segregação ferroviária e exige direitos iguais para pessoas negras.', 'Igualdade racial documenta o subtema emancipatório.', 'O panfleto não estabelece voto feminino ou todos os costumes modernos.'),
    ],
    unresolved: ['est/rep/imi/dip/int/eco/con/com/rel/tec: sem cobertura adequada; arma doméstica não codifica diplomacia.'],
  },
  {
    id: 'giuseppe-mazzini', period: 'On the Duties of Man, seções Country (1859) e Liberty (1860), edição acadêmica de 2009',
    rationale: 'O texto propõe unidade italiana, voto, liberdades civis e limites à intervenção sob uma lei política moral religiosa.',
    caveats: 'Edição acadêmica abreviada e adaptada de traduções anteriores, hospedada pela Universidade de Bologna. UMass dá cronologia divergente; segue-se a nota editorial de 2009. A URL antiga Gutenberg 26029 identifica outro livro e fica apenas na auditoria.',
    sources: [s(t.mazzini, 'https://virtuale.unibo.it/pluginfile.php/1797807/mod_unibores/content/0/1.%20Mazzini%201.pdf', 'Texto primário em A Cosmopolitanism of Nations, Recchia/Urbinati, 2009; nota p. 80 data originais Country 1859 e Liberty 1860; passagens pp. 94–98.'), s('Duties of Man — excerto UMass, cronologia divergente', 'https://people.umass.edu/hist101/Mazzini%20Duties%20of%20Man.pdf', 'Comparação textual e identidade 1805–1872; datas 1844–1858 divergem da nota da edição acadêmica. Não gera valores.')],
    claims: [
      c('est', 'strong-second', 'high', t.mazzini, '1859 (edição de 2009)', '4. Duties toward your Country, p. 94, Your Country is one and indivisible e Each Country must therefore', 'Exige governo italiano único e rejeita federalistas que dividam a nação em estados.', 'Desenho explicitamente unitário sustenta o polo forte.', 'Recorte italiano de unificação, não regra universal sobre toda federação.'),
      c('rep', 'strong-first', 'high', t.mazzini, '1859–1860 (edição de 2009)', '4. Duties toward your Country, pp. 95–96, The entire Nation should legislate; 5. Liberty, p. 97, The Republic is thus', 'Exige participação direta ou indireta de toda a nação nas leis e voto de cada cidadão.', 'Soberania eleitoral constitutiva sustenta direção democrática forte.', 'Linguagem masculina histórica; não acrescenta garantias eleitorais modernas ausentes.'),
      c('rel', 'strong-second', 'high', t.mazzini, '1859 (edição de 2009)', '4. Duties toward your Country, p. 95, Your Country should be your Temple e All secondary laws', 'Subordina a legislação a uma lei moral com Deus no topo e povo igual na base.', 'Fundamento religioso constitutivo organiza o dever político.', 'Não propõe primazia clerical ou igreja estatal.'),
      c('mor', 'moderate-first', 'medium', t.mazzini, '1859 (edição de 2009)', '4. Duties toward your Country, p. 95, There is no true country e Every privilege', 'Combate castas, privilégios hereditários e desigualdade de direitos.', 'Igualdade civil documenta um subtema emancipatório.', 'Não cobre gênero, aborto ou demais costumes atuais.'),
      c('pod', 'moderate-second', 'high', t.mazzini, '1860 (edição de 2009)', '5. Liberty, pp. 97–98, You have a right to liberty; Nobody has a right to imprison; The Press must be absolutely free', 'Protege associação, expressão e audiência judicial contra coerção arbitrária.', 'Garantias explícitas documentam liberdade civil.', 'Aceita autoridade e punição posterior de crimes e erros; não é rejeição de toda coerção.'),
      c('int', 'moderate-first', 'medium', t.mazzini, '1860 (edição de 2009)', '5. Liberty, p. 97, No majority may establish a tyrannical regime; While foreigners do not have a right', 'Nega a estrangeiros o direito de intervir pela força contra um povo que estabeleça tirania.', 'Limite explícito à intervenção externa documenta não intervenção no caso delimitado.', 'Não é proibição geral de toda intervenção; mantém protesto interno e solidariedade entre povos.'),
    ],
    unresolved: ['int: solidariedade e luta em país estrangeiro permanecem contexto; a codificação usa a regra explícita de intervenção forçada na seção Liberty.', 'com: remover alfândegas entre fragmentos italianos não prova política geral de comércio internacional.', 'imi/dip/eco/con/tec: sem suporte suficiente no recorte.'],
  },
  {
    id: 'olympe-de-gouges', period: 'Declaration of the Rights of Woman, setembro de 1791',
    rationale: 'A declaração reivindica participação legislativa das mulheres e garantias individuais.',
    caveats: 'Texto normativo traduzido em Hunt, 1996, preservado pelo projeto acadêmico GMU. Reivindicações não são descrição da prática francesa; invocação do Ser Supremo não prova programa confessional.',
    sources: [s(t.gouges, 'https://revolution.chnm.org/d/477/', 'Texto primário em tradução inglesa, artigos 1–17 e pós-escrito; introdução confirma 1748–1793. A antiga página parlamentar não retornou texto legível nesta pesquisa.')],
    claims: [
      c('rep', 'strong-first', 'high', t.gouges, '1791-09', 'Artigos 6, 14–16', 'Exige participação de cidadãs e cidadãos nas leis e na constituição e fiscalização dos agentes públicos.', 'Participação e controle popular são constitutivos da proposta.', 'Documento normativo; não verifica implementação nem instituições eleitorais completas.'),
      c('pod', 'moderate-second', 'high', t.gouges, '1791-09', 'Artigos 8, 10, 11 e 16', 'Restringe punição à lei prévia e protege opinião, expressão e separação dos poderes.', 'Garantias limitam coerção estatal.', 'Aceita punição e limites de ordem pública; não é abolição da segurança.'),
      c('mor', 'moderate-first', 'medium', t.gouges, '1791-09', 'Artigos 1, 6, 11 e 17', 'Reivindica igualdade jurídica de gênero, acesso público, reconhecimento de paternidade e propriedade para ambos os sexos.', 'Emancipação de gênero documenta um conjunto de direitos.', 'Conjunto ainda centrado em gênero; não generaliza a todos os costumes.'),
    ],
    unresolved: ['eco: garantia jurídica de propriedade não especifica predominância produtiva privada ou provisão pública.', 'est/imi/dip/int/con/com/rel/tec: sem evidência equivalente.'],
  },
  {
    id: 'mao-zedong-1940-new-democracy', period: 'On New Democracy, janeiro de 1940; seções V–VI',
    rationale: 'O programa combina representação das classes revolucionárias e liderança econômica de empresas estatais.',
    caveats: 'Recorte anterior ao governo da República Popular; declaração não comprova implementação. Sufrágio amplo opera dentro de pertencimento revolucionário condicionado, não democracia universal plena.',
    sources: [s(t.mao, 'https://www.marxists.org/reference/archive/mao/selected-works/volume-2/mswv2_26.htm', 'Texto primário traduzido, V–VI; citações do manifesto Kuomintang são explicitamente endossadas pelo autor.'), s('Mao Zedong — arquivo MIA, identificação', 'https://www.marxists.org/catala/autors/mao/index.htm', 'Identidade 1893–1976; nenhum eixo gerado pela biografia.')],
    claims: [
      c('rep', 'moderate-second', 'medium', t.mao, '1940-01', 'V, The term national e China may now adopt; The state system', 'Restringe a soberania às classes revolucionárias, embora proponha voto amplo e congressos eleitos.', 'Supremacia política condicionada limita representação democrática.', 'Sufrágio igual é contrapeso explícito; não calcula média entre características ou descreve o regime posterior.'),
      c('eco', 'strong-first', 'high', t.mao, '1940-01', 'VI, It will own e In the new-democratic republic', 'Propõe propriedade estatal dos grandes bancos e empresas, liderando toda a economia, com setor privado permitido.', 'Predominância dos setores centrais públicos constitui o desenho produtivo.', 'Propriedade capitalista não monopolista e terra camponesa privada permanecem admitidas.'),
      c('mor', 'moderate-first', 'medium', t.mao, '1940-01', 'V, a system of really universal and equal suffrage', 'Propõe sufrágio sem distinção de sexo ou credo entre o povo revolucionário.', 'Igualdade de gênero e crença documenta subtema emancipatório.', 'A exclusão política de contrarrevolucionários impede inferência de igualdade universal irrestrita.'),
    ],
    unresolved: ['dip: guerra contra invasão não basta para militarismo geral.', 'con: propriedade e administração estatal não estabelecem mecanismos de planejamento ou alocação.', 'est/pod/imi/int/com/rel/tec: sem codificação; não inferir pelo rótulo comunista.'],
  },
  {
    id: 'salvador-allende', period: 'Discurso individual à ONU, 4 de dezembro de 1972; excertos traduzidos',
    rationale: 'O discurso declara pluralismo político e transição socialista liderada por trabalhadores.',
    caveats: 'Autodescrição presidencial e norma proposta, não auditoria independente da prática. A fonte é tradução de excertos; o PDF original da ONU retornou 403. A plataforma coletiva antiga é preservada na auditoria, sem transportar seus valores.',
    sources: [s(t.allende, 'https://www.marxists.org/archive/allende/1972/december/04.htm', 'Texto primário individual em tradução e excertos; parágrafos de abertura e THE REVOLUTIONARY PATH THAT CHILE IS FOLLOWING.'), s('Allende Gossens, Salvador, 1908–1973 — Memoria Chilena', 'https://www.memoriachilena.gob.cl/602/w3-article-18383.html', 'Identidade do catálogo da Biblioteca Nacional, confirmada pelo resultado indexado; abertura não retornou texto. Não gera valores.')],
    claims: [
      c('rep', 'strong-first', 'high', t.allende, '1972-12-04', 'Abertura, A country with its working class e Its tradition; parágrafo The democratic will', 'Defende sufrágio secreto universal, multipartidarismo, instituições e pluralismo.', 'Desenho político declarado é constitutivamente democrático.', 'A afirmação não é verificação independente de execução.'),
      c('pod', 'moderate-second', 'medium', t.allende, '1972-12-04', 'Abertura, I come from Chile; parágrafo Its tradition, personality', 'Afirma expressão livre, liberdades civis e pluralismo ideológico.', 'Garantias de expressão documentam liberdade.', 'Cobertura parcial e autodescrição, sem auditoria de coerção.'),
      c('eco', 'strong-first', 'high', t.allende, '1972-12-04', 'The people of Chile have won; This is the revolutionary content; We have nationalized', 'Propõe superar o capitalismo com direção trabalhadora da produção e nacionalização das riquezas básicas.', 'Transformação socialista constitutiva sustenta propriedade social/pública.', 'Nacionalização relatada pelo próprio presidente; não presume estatização de todo empreendimento.'),
      c('con', 'moderate-first', 'medium', t.allende, '1972-12-04', 'The people of Chile have won the Government', 'Propõe organizar coerentemente a produção por necessidades sociais em lugar do lucro individual.', 'Coordenação orientada por necessidades sustenta planejamento.', 'Não documenta todos os mecanismos de preços e alocação.'),
      c('mor', 'moderate-first', 'medium', t.allende, '1972-12-04', 'Primeiro parágrafo I come from Chile', 'Declara recusa de discriminação racial.', 'Igualdade racial documenta um subtema emancipatório.', 'Não importa direitos de gênero do programa coletivo de 1969.'),
    ],
    unresolved: ['est/imi/dip/int/com/rel/tec: não codificados neste recorte; defesa da própria soberania não é doutrina universal de não intervenção.'],
  },
  {
    id: 'ashoka-edicts', period: 'Grandes éditos rupestres pós-Kalinga, século III AEC',
    rationale: 'As inscrições relatam serviços reais, tolerância religiosa e preferência por conquista moral.',
    caveats: 'Categorias atuais são analogias limitadas; inscrições de autojustificação real não são auditoria factual. Remorso posterior não apaga Kalinga nem a ameaça de punição. Identificação como Piyadasi acompanha tradução histórica.',
    sources: [s(t.ashoka, 'https://www.livius.org/sources/content/ashoka-s-rock-edicts/', 'Tradução primária numerada I–XIV por S. Dhammika, distinguida do comentário do portal.'), s('Edicts of Ashoka — Oregon State University', 'https://open.oregonstate.education/ancientcivilizations/chapter/edicts-of-ashoka/', 'Leitura comparativa do édito XIII, tradução Nikam/McKeon, 1959; contexto identifica 304–232 AEC.')],
    claims: [
      c('dip', 'moderate-second', 'medium', t.ashoka, 'século III AEC', 'XIII, Now it is conquest by dhamma e I have had this dhamma edict written', 'Prefere conquista moral e pede evitar novas guerras, admitindo conquistas moderadas e punição.', 'Contenção da guerra sustenta direção pacífica limitada.', 'Império já conquistado e força residual impedem pacifismo absoluto.'),
      c('eco', 'moderate-first', 'medium', t.ashoka, 'século III AEC', 'II, made provision for two types of medical treatment; wells dug', 'Relata provisão real de tratamentos, plantas medicinais e poços públicos.', 'Serviço público de saúde documenta uma faceta de provisão pública.', 'Não identifica propriedade produtiva geral nem equivalente moderno de Estado de bem-estar.'),
      c('rel', 'moderate-second', 'medium', t.ashoka, 'século III AEC', 'V, dhamma Mahamatras; XII, gifts and honors e growth in the essentials', 'Mobiliza oficiais e apoio real ao desenvolvimento e respeito entre religiões.', 'Norma religiosa pública participa da administração.', 'Pluralismo entre tradições não é secularismo moderno nem governo exclusivo de uma igreja.'),
    ],
    unresolved: ['est/rep/pod/imi/int/con/com/mor/tec: categorias anacrônicas ou cobertura insuficiente; título de rei não basta para eixo republicano.'],
  },
  {
    id: 'na-booker-t-washington', period: 'Discurso de Atlanta de 1895, reproduzido em Up from Slavery, 1901',
    rationale: 'O discurso reclama privilégios legais negros e justiça racial, sob estratégia de acomodação social.',
    caveats: 'Apoio a direitos legais convive com separação social e crítica à agitação por igualdade social; documenta o conflito sem convertê-lo em média numérica. Não atribui ao autor a crítica de Du Bois.',
    sources: [s(t.booker, 'https://www.gutenberg.org/cache/epub/2376/pg2376-images.html', 'Texto primário autobiográfico; capítulo XIV reproduz seu Atlanta Exposition Address, distinguido das cartas e reações posteriores.'), s('Washington — catálogo Gutenberg', 'https://www.gutenberg.org/ebooks/2376', 'Identidade 1856–1915; sem codificação biográfica.')],
    claims: [
      c('mor', 'moderate-first', 'medium', t.booker, '1895 (reprodução de 1901)', 'XIV, It is important and right; contrapesos In all things that are purely social e The wisest among my race', 'Afirma direito negro a todos os privilégios legais, mas aceita separação social e estratégia gradual.', 'Igualdade jurídica sustenta apenas o subtema emancipatório limitado.', 'Acomodação e separação são contrapesos explícitos; não descreve igualdade racial plena ou todos os costumes.'),
    ],
    unresolved: ['eco: defesa de trabalho e propriedade pessoal não resolve organização produtiva público/privado.', 'rel: exortação pública que invoca Deus não demonstra autoridade religiosa na legislação ou dever cívico; permanece desconhecido.', 'est/rep/pod/imi/dip/int/con/com/tec: não inferir do elogio à educação, à indústria ou da acomodação.'],
  },
  {
    id: 'na-robert-la-follette', period: 'Free Speech in Wartime, Senado, 6 de outubro de 1917',
    rationale: 'O discurso defende controle popular do governo, liberdades em guerra e negociação para evitar conflito.',
    caveats: 'Separa declarações autorais das longas citações de Clay, Webster e estadistas britânicos. Aceita obrigações de guerra e defesa dos soldados; não é pacifismo absoluto.',
    sources: [s(t.lafollette, 'https://www.senate.gov/artandhistory/history/resources/pdf/FreeSpeechWartime.pdf', 'Texto primário em PDF de vinte páginas, paginado 521–540 na coletânea oficial; OCR legível.'), s('Robert M. La Follette — contexto do Senado', 'https://www.senate.gov/artandhistory/history/common/generic/Speeches_LaFollette_FreeSpeech.htm', 'Contexto e falecimento em 18 de junho de 1925; opiniões biográficas não transferidas ao vetor.')],
    claims: [
      c('rep', 'moderate-first', 'high', t.lafollette, '1917-10-06', 'pp. 522–523, RIGHT OF PEOPLE TO DISCUSS WAR ISSUES', 'Afirma soberania popular e responsabilidade permanente dos eleitos perante o povo.', 'Controle popular documenta representação democrática.', 'Não especifica inclusão de todos os grupos no sufrágio ou sistema eleitoral completo.'),
      c('pod', 'moderate-second', 'high', t.lafollette, '1917-10-06', 'pp. 522–523 e 530, More than all e these precious fundamental personal rights', 'Defende expressão, imprensa, reunião pacífica e proteção contra prisão arbitrária em guerra.', 'Garantias individuais limitam coerção estatal.', 'Admite restrições de outros direitos e obrigação legal de guerra; recorte constitucional de 1917.'),
      c('dip', 'moderate-second', 'medium', t.lafollette, '1917-10-06', 'pp. 530–531, On the 8th day of February, 1915; conclusão pp. 539–540', 'Defende negociação entre neutros e beligerantes para evitar guerra e conclusão em base justa.', 'Prioridade diplomática documenta direção pacífica moderada.', 'Aceita continuidade de guerra e equipamento militar; não é rejeição universal da força.'),
    ],
    unresolved: ['est/imi/int/eco/con/com/rel/mor/tec: contexto biográfico não fornece passagem autoral suficiente.'],
  },
];

const dormant = [...peopleNorthAmericaExpansion, ...peopleEuropeExpansion, ...peopleAsiaExpansion, ...peopleAmericasExpansion];
/** Immutable in purpose: never edited or used as newly verified axis evidence. */
export const historicalFigureBatch03OriginalRecords: Record<string, ReferenceEntry> = Object.fromEntries(historicalFigureBatch03Specs.map(spec => {
  const original = dormant.find(entry => entry.id === spec.id);
  if (!original) throw new Error(`Missing historical dormant identity: ${spec.id}`);
  return [spec.id, structuredClone(original)];
}));

export const historicalFigureBatch03: ReferenceEntry[] = historicalFigureBatch03Specs.map(spec => {
  const original = historicalFigureBatch03OriginalRecords[spec.id];
  const entry: ReferenceEntry = {
    id: original.id, name: original.name, kind: 'person', category: 'historical-figure',
    period: spec.period, rationale: spec.rationale, caveats: spec.caveats, sources: spec.sources,
    vec: Object.fromEntries(AXES.map(({ key }) => [key, 50])) as ReferenceEntry['vec'], evidence: {}, axisEvidence: {}, coding: {},
  };
  for (const input of spec.claims) {
    const coded = codeReferenceAxis(input, entry.sources);
    entry.vec[input.axis] = coded.value;
    entry.evidence[input.axis] = coded.evidence;
    entry.axisEvidence![input.axis] = coded.axisEvidence;
    entry.coding![input.axis] = coded.coding;
  }
  return entry;
});
